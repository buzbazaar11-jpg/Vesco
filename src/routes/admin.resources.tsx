import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { uploadSiteFile } from "@/lib/admin";

export const Route = createFileRoute("/admin/resources")({
  component: ResourcesAdmin,
});

const CATEGORIES = ["Brochure", "Catalog", "Certificate", "Technical", "Other"];

function ResourcesAdmin() {
  const qc = useQueryClient();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]!);
  const [restricted, setRestricted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const list = useQuery({
    queryKey: ["admin", "resources"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setMsg("Choose a file first.");
    setBusy(true);
    setMsg(null);
    try {
      // Upload to the public "images" bucket — returns a permanent public URL
      const { url, path } = await uploadSiteFile(file, "resources");
      const { error } = await supabase.from("resources").insert({
        title,
        category,
        file_url: url,
        file_path: path,
        restricted,
        sort_order: (list.data?.length ?? 0) + 1,
      });
      if (error) throw error;
      setTitle("");
      setFile(null);
      setMsg("Uploaded.");
      qc.invalidateQueries({ queryKey: ["admin", "resources"] });
      qc.invalidateQueries({ queryKey: ["admin", "resources", "count"] });
    } catch (err) {
      setMsg((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const patch = async (id: string, values: { restricted?: boolean; sort_order?: number }) => {
    await supabase.from("resources").update(values).eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin", "resources"] });
  };

  const remove = async (id: string, path: string) => {
    if (path) await supabase.storage.from("images").remove([path]);
    await supabase.from("resources").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin", "resources"] });
    qc.invalidateQueries({ queryKey: ["admin", "resources", "count"] });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-navy">Resources &amp; Files</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Upload PDF, Word, images or any document and publish it to the download center.
      </p>

      <form onSubmit={add} className="mt-8 grid gap-4 border border-hairline bg-card p-6 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/70">
            Title
          </span>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/70">
            Category
          </span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/70">
            File
          </span>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="text-xs text-muted-foreground"
          />
        </label>
        <label className="flex items-end gap-2 text-sm text-navy">
          <input
            type="checkbox"
            checked={restricted}
            onChange={(e) => setRestricted(e.target.checked)}
          />
          Restricted (request required)
        </label>
        <div>
          <button
            disabled={busy}
            className="rounded-sm bg-teal px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60"
          >
            {busy ? "Uploading…" : "Upload resource"}
          </button>
        </div>
      </form>
      {msg ? <p className="mt-3 text-sm text-science">{msg}</p> : null}

      <div className="mt-8 divide-y divide-hairline border border-hairline bg-card">
        {(list.data ?? []).map((r) => (
          <div key={r.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-navy">{r.title}</p>
              <p className="text-xs text-muted-foreground">
                {r.category} · {r.restricted ? "Restricted" : "Public"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={r.file_url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science"
              >
                Open
              </a>
              <button
                onClick={() => patch(r.id, { restricted: !r.restricted })}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science"
              >
                {r.restricted ? "Make public" : "Restrict"}
              </button>
              <button
                onClick={() => remove(r.id, r.file_path)}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-destructive"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {list.data && list.data.length === 0 ? (
          <p className="px-5 py-6 text-sm text-muted-foreground">No resources uploaded yet.</p>
        ) : null}
      </div>
    </div>
  );
}
