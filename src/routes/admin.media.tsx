import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { STORAGE_BUCKET, getPublicUrl } from "@/lib/admin";

export const Route = createFileRoute("/admin/media")({
  component: MediaManager,
});

type StorageFile = {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: { size: number; mimetype: string; cacheControl?: string } | null;
};

type MediaFile = StorageFile & { publicUrl: string; path: string };

function formatBytes(bytes: number) {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isImage(name: string) {
  return /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(name);
}

// ─── Main Component ───────────────────────────────────────────────────────────

function MediaManager() {
  const qc = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string[]>([]);
  const [msg, setMsg] = useState<{ text: string; type: "ok" | "err" } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"all" | "images" | "other">("all");
  const [previewFile, setPreviewFile] = useState<MediaFile | null>(null);
  const [renaming, setRenaming] = useState<{ file: MediaFile; newName: string } | null>(null);

  // ─── Fetch all files from the bucket root (no sub-folder) ───────────────
  const query = useQuery({
    queryKey: ["admin", "media", STORAGE_BUCKET],
    queryFn: async () => {
      const { data, error } = await supabase.storage.from(STORAGE_BUCKET).list("", {
        limit: 500,
        sortBy: { column: "created_at", order: "desc" },
      });
      if (error) throw error;

      const files: MediaFile[] = (data ?? [])
        .filter((f) => f.name !== ".emptyFolderPlaceholder" && !f.name.endsWith("/"))
        .map((f) => {
          const path = f.name; // flat root, no sub-folder
          const publicUrl = getPublicUrl(path);
          return {
            ...(f as StorageFile),
            path,
            publicUrl,
          };
        });
      return files;
    },
  });

  const showMsg = (text: string, type: "ok" | "err" = "ok") => {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 4000);
  };

  // ─── Upload ─────────────────────────────────────────────────────────────
  const uploadFiles = useCallback(
    async (files: FileList | File[]) => {
      const arr = Array.from(files);
      if (!arr.length) return;
      setUploading(true);
      setUploadProgress([]);
      let ok = 0;
      for (const file of arr) {
        const safeName = `${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
        setUploadProgress((p) => [...p, `Uploading ${file.name}…`]);
        const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(safeName, file, {
          cacheControl: "31536000",
          upsert: false,
        });
        if (!error) {
          ok++;
          setUploadProgress((p) => [...p.slice(0, -1), `✓ ${file.name}`]);
        } else {
          setUploadProgress((p) => [...p.slice(0, -1), `✗ ${file.name}: ${error.message}`]);
        }
      }
      setUploading(false);
      setUploadProgress([]);
      showMsg(`${ok} of ${arr.length} file${arr.length > 1 ? "s" : ""} uploaded.`, ok > 0 ? "ok" : "err");
      qc.invalidateQueries({ queryKey: ["admin", "media", STORAGE_BUCKET] });
    },
    [qc],
  );

  // ─── Delete single file ──────────────────────────────────────────────────
  const deleteFile = async (file: MediaFile) => {
    if (!confirm(`Delete "${file.name}"? This cannot be undone.`)) return;
    const { error } = await supabase.storage.from(STORAGE_BUCKET).remove([file.path]);
    if (error) return showMsg(error.message, "err");
    showMsg(`"${file.name}" deleted.`);
    if (previewFile?.path === file.path) setPreviewFile(null);
    qc.invalidateQueries({ queryKey: ["admin", "media", STORAGE_BUCKET] });
  };

  // ─── Delete selected ────────────────────────────────────────────────────
  const deleteSelected = async () => {
    if (!selected.size) return;
    if (!confirm(`Delete ${selected.size} file(s)? This cannot be undone.`)) return;
    const paths = Array.from(selected);
    const { error } = await supabase.storage.from(STORAGE_BUCKET).remove(paths);
    if (error) return showMsg(error.message, "err");
    showMsg(`${selected.size} file(s) deleted.`);
    setSelected(new Set());
    qc.invalidateQueries({ queryKey: ["admin", "media", STORAGE_BUCKET] });
  };

  // ─── Rename (move) ───────────────────────────────────────────────────────
  const renameFile = async () => {
    if (!renaming) return;
    const { file, newName } = renaming;
    if (!newName.trim() || newName === file.name) { setRenaming(null); return; }
    // Supabase Storage: copy then delete
    const { error: copyErr } = await supabase.storage.from(STORAGE_BUCKET).copy(file.path, newName.trim());
    if (copyErr) { showMsg(copyErr.message, "err"); setRenaming(null); return; }
    await supabase.storage.from(STORAGE_BUCKET).remove([file.path]);
    showMsg(`Renamed to "${newName}".`);
    setRenaming(null);
    qc.invalidateQueries({ queryKey: ["admin", "media", STORAGE_BUCKET] });
  };

  // ─── Replace image ───────────────────────────────────────────────────────
  const replaceFile = async (file: MediaFile, newFile: File) => {
    const { error } = await supabase.storage.from(STORAGE_BUCKET).update(file.path, newFile, {
      cacheControl: "31536000",
      upsert: true,
    });
    if (error) return showMsg(error.message, "err");
    showMsg(`"${file.name}" replaced.`);
    qc.invalidateQueries({ queryKey: ["admin", "media", STORAGE_BUCKET] });
  };

  // ─── Copy URL ────────────────────────────────────────────────────────────
  const copyUrl = (file: MediaFile) => {
    void navigator.clipboard.writeText(file.publicUrl);
    setCopied(file.path);
    setTimeout(() => setCopied(null), 2000);
  };

  // ─── Drag & Drop ─────────────────────────────────────────────────────────
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer.files.length) void uploadFiles(e.dataTransfer.files);
    },
    [uploadFiles],
  );

  // ─── Selection ───────────────────────────────────────────────────────────
  const toggleSelect = (path: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(path) ? next.delete(path) : next.add(path);
      return next;
    });
  };
  const selectAll = () => setSelected(new Set(filtered.map((f) => f.path)));
  const clearSelection = () => setSelected(new Set());

  // ─── Filter ──────────────────────────────────────────────────────────────
  const filtered = (query.data ?? []).filter((f) => {
    const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase());
    const matchType =
      filterType === "all" ||
      (filterType === "images" && isImage(f.name)) ||
      (filterType === "other" && !isImage(f.name));
    return matchSearch && matchType;
  });

  // ─── Render ──────────────────────────────────────────────────────────────
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-navy">Media Manager</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Bucket: <code className="rounded bg-navy/10 px-1.5 py-0.5 text-xs font-mono text-navy">{STORAGE_BUCKET}</code>
            {" "}— Public bucket. Uploaded images appear instantly on the live site.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {selected.size > 0 && (
            <>
              <button onClick={clearSelection} className="text-xs font-medium text-muted-foreground hover:text-navy">
                Clear ({selected.size})
              </button>
              <button
                onClick={deleteSelected}
                className="rounded-sm bg-destructive px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                Delete {selected.size}
              </button>
            </>
          )}
          <div className="flex items-center gap-1 rounded-sm border border-hairline p-1">
            <button onClick={() => setView("grid")} className={`rounded px-2 py-1 text-xs ${view === "grid" ? "bg-navy text-white" : "text-muted-foreground"}`}>Grid</button>
            <button onClick={() => setView("list")} className={`rounded px-2 py-1 text-xs ${view === "list" ? "bg-navy text-white" : "text-muted-foreground"}`}>List</button>
          </div>
        </div>
      </div>

      {/* Message */}
      {msg && (
        <div className={`mb-4 rounded-sm border px-4 py-2.5 text-sm font-medium ${msg.type === "ok" ? "border-teal/30 bg-teal/10 text-science" : "border-destructive/30 bg-destructive/10 text-destructive"}`}>
          {msg.text}
        </div>
      )}

      {/* Upload Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !uploading && fileInputRef.current?.click()}
        className={`mb-6 flex cursor-pointer flex-col items-center gap-3 rounded-sm border-2 border-dashed px-8 py-8 transition-colors ${
          dragOver ? "border-teal bg-teal/5 scale-[1.01]" : "border-hairline bg-card hover:border-teal/50 hover:bg-teal/3"
        }`}
      >
        {uploading ? (
          <div className="w-full text-center">
            <div className="mb-2 text-2xl animate-spin">⏳</div>
            <p className="text-sm font-medium text-navy">Uploading…</p>
            {uploadProgress.map((p, i) => (
              <p key={i} className="mt-1 text-xs text-muted-foreground">{p}</p>
            ))}
          </div>
        ) : (
          <>
            <div className="text-3xl opacity-40">📁</div>
            <div className="text-center">
              <p className="text-sm font-semibold text-navy">Drag &amp; drop files here, or click to choose</p>
              <p className="mt-1 text-xs text-muted-foreground">PNG, JPG, GIF, WebP, SVG, PDF — any format · Works on mobile</p>
            </div>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,video/*,application/pdf,.doc,.docx,.zip"
          className="hidden"
          onChange={(e) => { if (e.target.files) void uploadFiles(e.target.files); e.target.value = ""; }}
        />
      </div>

      {/* Filters + Stats */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search files…"
          className="min-w-[200px] flex-1 border border-hairline bg-background px-4 py-2 text-sm outline-none focus:border-teal"
        />
        <div className="flex gap-1">
          {(["all", "images", "other"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`rounded-sm px-3 py-1.5 text-xs font-medium capitalize transition-colors ${filterType === t ? "bg-navy text-white" : "border border-hairline text-navy hover:bg-navy/5"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {filtered.length} file{filtered.length !== 1 ? "s" : ""}
          {selected.size > 0 && ` · ${selected.size} selected`}
        </p>
        {filtered.length > 0 && (
          <button onClick={selectAll} className="text-xs font-medium text-science hover:underline">
            Select all
          </button>
        )}
      </div>

      {/* File grid / list */}
      {query.isLoading ? (
        <div className="flex flex-1 items-center justify-center py-20 text-sm text-muted-foreground">
          Loading files from {STORAGE_BUCKET}…
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-sm border-2 border-dashed border-hairline p-16 text-center">
          <div className="text-4xl opacity-20">🖼</div>
          <p className="text-sm font-medium text-navy">
            {search ? "No files match your search." : `No files in the "${STORAGE_BUCKET}" bucket yet.`}
          </p>
          <p className="text-xs text-muted-foreground">Upload files above to get started.</p>
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filtered.map((file) => (
            <div
              key={file.path}
              className={`group relative overflow-hidden rounded-sm border transition-all ${
                selected.has(file.path) ? "border-teal ring-2 ring-teal/30" : "border-hairline hover:border-teal/60"
              }`}
            >
              {/* Checkbox */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleSelect(file.path); }}
                className={`absolute left-1.5 top-1.5 z-20 flex h-5 w-5 items-center justify-center rounded border text-[0.6rem] font-bold transition-all ${
                  selected.has(file.path)
                    ? "border-teal bg-teal text-[#05231f]"
                    : "border-white/60 bg-black/30 text-white opacity-0 group-hover:opacity-100"
                }`}
              >
                {selected.has(file.path) ? "✓" : ""}
              </button>

              {/* Thumbnail */}
              <button
                onClick={() => setPreviewFile(file)}
                className="block aspect-square w-full bg-secondary"
              >
                {isImage(file.name) ? (
                  <img
                    src={file.publicUrl}
                    alt={file.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl opacity-30">
                    {/\.pdf$/i.test(file.name) ? "📄" : /\.(mp4|mov|avi|webm)$/i.test(file.name) ? "🎬" : "📎"}
                  </div>
                )}
              </button>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-navy/85 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                <button
                  onClick={() => copyUrl(file)}
                  className="w-24 rounded-sm bg-teal px-2 py-1.5 text-[0.65rem] font-semibold uppercase text-[#05231f]"
                >
                  {copied === file.path ? "✓ Copied!" : "Copy URL"}
                </button>
                <button
                  onClick={() => setPreviewFile(file)}
                  className="w-24 rounded-sm bg-white/20 px-2 py-1.5 text-[0.65rem] font-semibold uppercase text-white"
                >
                  Preview
                </button>
                <button
                  onClick={() => void deleteFile(file)}
                  className="w-24 rounded-sm bg-destructive/80 px-2 py-1.5 text-[0.65rem] font-semibold uppercase text-white"
                >
                  Delete
                </button>
              </div>

              {/* File info */}
              <div className="border-t border-hairline bg-card p-2">
                <p className="truncate text-[0.68rem] font-medium text-navy" title={file.name}>{file.name}</p>
                <p className="text-[0.62rem] text-muted-foreground">{formatBytes(file.metadata?.size ?? 0)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List view
        <div className="overflow-hidden rounded-sm border border-hairline">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                <th className="w-8 px-3 py-2">
                  <input type="checkbox"
                    checked={selected.size === filtered.length && filtered.length > 0}
                    onChange={(e) => e.target.checked ? selectAll() : clearSelection()}
                    className="accent-teal"
                  />
                </th>
                <th className="px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground">Preview</th>
                <th className="px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground">Name</th>
                <th className="px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground">Size</th>
                <th className="px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground">Type</th>
                <th className="px-3 py-2 text-right text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline bg-card">
              {filtered.map((file) => (
                <tr key={file.path} className={`transition-colors hover:bg-navy/3 ${selected.has(file.path) ? "bg-teal/5" : ""}`}>
                  <td className="px-3 py-2">
                    <input type="checkbox" checked={selected.has(file.path)} onChange={() => toggleSelect(file.path)} className="accent-teal" />
                  </td>
                  <td className="px-3 py-2">
                    <button onClick={() => setPreviewFile(file)} className="h-10 w-10 overflow-hidden rounded border border-hairline bg-secondary">
                      {isImage(file.name) ? (
                        <img src={file.publicUrl} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-lg opacity-30">
                          {/\.pdf$/i.test(file.name) ? "📄" : "📎"}
                        </div>
                      )}
                    </button>
                  </td>
                  <td className="max-w-[200px] px-3 py-2">
                    <p className="truncate text-sm font-medium text-navy">{file.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{file.path}</p>
                  </td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">{formatBytes(file.metadata?.size ?? 0)}</td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">{file.metadata?.mimetype ?? "—"}</td>
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => copyUrl(file)} className="text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:text-science">
                        {copied === file.path ? "Copied!" : "Copy URL"}
                      </button>
                      <a href={file.publicUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:text-science">Open ↗</a>
                      <button onClick={() => setPreviewFile(file)} className="text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:text-science">Preview</button>
                      <button onClick={() => void deleteFile(file)} className="text-xs font-semibold uppercase tracking-[0.1em] text-destructive hover:opacity-75">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Preview / Detail Modal */}
      {previewFile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setPreviewFile(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-sm border border-hairline bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
              <p className="max-w-xs truncate text-sm font-semibold text-navy">{previewFile.name}</p>
              <button onClick={() => setPreviewFile(null)} className="text-muted-foreground hover:text-navy text-lg leading-none">✕</button>
            </div>

            {/* Preview */}
            <div className="flex min-h-[200px] items-center justify-center bg-secondary/30 p-4">
              {isImage(previewFile.name) ? (
                <img
                  src={previewFile.publicUrl}
                  alt={previewFile.name}
                  className="max-h-80 max-w-full rounded object-contain shadow"
                />
              ) : /\.(mp4|mov|webm)$/i.test(previewFile.name) ? (
                <video controls src={previewFile.publicUrl} className="max-h-80 max-w-full rounded" />
              ) : (
                <div className="text-center">
                  <div className="mb-3 text-5xl opacity-40">{/\.pdf$/i.test(previewFile.name) ? "📄" : "📎"}</div>
                  <p className="text-sm text-muted-foreground">{previewFile.name}</p>
                </div>
              )}
            </div>

            {/* Details + Actions */}
            <div className="border-t border-hairline p-5 space-y-4">
              {/* Public URL — the key info */}
              <div>
                <p className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-science">Public URL (use this on your site)</p>
                <div className="flex gap-2">
                  <input
                    readOnly
                    value={previewFile.publicUrl}
                    className="flex-1 border border-hairline bg-secondary px-3 py-2 text-xs font-mono text-navy outline-none select-all"
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                  />
                  <button
                    onClick={() => copyUrl(previewFile)}
                    className="flex-shrink-0 rounded-sm bg-teal px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#05231f]"
                  >
                    {copied === previewFile.path ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* File info grid */}
              <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
                <div><p className="text-muted-foreground">Size</p><p className="font-medium text-navy">{formatBytes(previewFile.metadata?.size ?? 0)}</p></div>
                <div><p className="text-muted-foreground">Type</p><p className="font-medium text-navy">{previewFile.metadata?.mimetype ?? "—"}</p></div>
                <div><p className="text-muted-foreground">Bucket</p><p className="font-medium text-navy">{STORAGE_BUCKET}</p></div>
              </div>

              {/* Rename */}
              {renaming?.file.path === previewFile.path ? (
                <div className="flex gap-2">
                  <input
                    value={renaming.newName}
                    onChange={(e) => setRenaming({ ...renaming, newName: e.target.value })}
                    onKeyDown={(e) => { if (e.key === "Enter") void renameFile(); if (e.key === "Escape") setRenaming(null); }}
                    autoFocus
                    className="flex-1 border border-teal bg-background px-3 py-2 text-xs outline-none"
                  />
                  <button onClick={renameFile} className="rounded-sm bg-teal px-3 py-2 text-xs font-semibold text-[#05231f]">Rename</button>
                  <button onClick={() => setRenaming(null)} className="rounded-sm border border-hairline px-3 py-2 text-xs text-navy">Cancel</button>
                </div>
              ) : null}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={previewFile.publicUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-hairline px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:bg-navy/5"
                >
                  Open in new tab ↗
                </a>
                <button
                  onClick={() => setRenaming({ file: previewFile, newName: previewFile.name })}
                  className="rounded-sm border border-hairline px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:bg-navy/5"
                >
                  Rename
                </button>
                {/* Replace */}
                <label className="cursor-pointer rounded-sm border border-hairline px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:bg-navy/5">
                  Replace
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,video/*,application/pdf"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) void replaceFile(previewFile, f);
                      e.target.value = "";
                    }}
                  />
                </label>
                <button
                  onClick={() => { void deleteFile(previewFile); setPreviewFile(null); }}
                  className="rounded-sm bg-destructive px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        All uploaded files use permanent public URLs — no sign-in needed to view them on the website.
        Works from PC, mobile, and any device.
      </p>
    </div>
  );
}
