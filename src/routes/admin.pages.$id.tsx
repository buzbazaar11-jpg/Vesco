/**
 * admin.pages.$id.tsx
 *
 * Full visual page builder — Elementor-style.
 * Features:
 *   • 21 block types with full CRUD (add / edit / duplicate / delete / reorder)
 *   • Drag-and-drop block reordering
 *   • Inline image picker (loads from Supabase "images" bucket)
 *   • Inline video upload + URL embed
 *   • Draft / Publish / Unpublish
 *   • Desktop / Tablet / Mobile canvas preview
 *   • Auto-save option
 *   • Live preview link (published pages only)
 */

import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  newId,
  STORAGE_BUCKET,
  getPublicUrl,
  type Block,
  type PageRow,
} from "@/lib/admin";
import { BlockView } from "@/components/admin/Blocks";

export const Route = createFileRoute("/admin/pages/$id")({
  component: PageBuilder,
});

// ─── Palette ──────────────────────────────────────────────────────────────────

const PALETTE: { type: Block["type"]; icon: string; label: string; cat: string }[] = [
  { type: "section_header", icon: "H1",  label: "Section Header", cat: "Text"     },
  { type: "heading",        icon: "H",   label: "Heading",        cat: "Text"     },
  { type: "text",           icon: "P",   label: "Paragraph",      cat: "Text"     },
  { type: "richtext",       icon: "RT",  label: "Rich Text",      cat: "Text"     },
  { type: "quote",          icon: "Q",   label: "Quote",          cat: "Text"     },
  { type: "list",           icon: "LI",  label: "List",           cat: "Text"     },
  { type: "badge",          icon: "#",   label: "Tags",           cat: "Text"     },
  { type: "image",          icon: "IMG", label: "Image",          cat: "Media"    },
  { type: "gallery",        icon: "GAL", label: "Gallery",        cat: "Media"    },
  { type: "video",          icon: "VID", label: "Video",          cat: "Media"    },
  { type: "embed",          icon: "<>",  label: "HTML Embed",     cat: "Media"    },
  { type: "columns",        icon: "||",  label: "2 Columns",      cat: "Layout"   },
  { type: "card",           icon: "[]",  label: "Card",           cat: "Layout"   },
  { type: "stats",          icon: "##",  label: "Stats",          cat: "Layout"   },
  { type: "spacer",         icon: "--",  label: "Spacer",         cat: "Layout"   },
  { type: "divider",        icon: "HR",  label: "Divider",        cat: "Layout"   },
  { type: "hero",           icon: "HB",  label: "Hero Banner",    cat: "Sections" },
  { type: "cta",            icon: "CTA", label: "CTA Banner",     cat: "Sections" },
  { type: "accordion",      icon: "FAQ", label: "Accordion",      cat: "Sections" },
  { type: "button",         icon: "BTN", label: "Button",         cat: "Sections" },
  { type: "raw_html",       icon: "{}",  label: "Raw HTML",       cat: "Sections" },
];
const CATS = ["Text", "Media", "Layout", "Sections"] as const;

// ─── Default content per block type ──────────────────────────────────────────

function mkBlock(type: Block["type"]): Block {
  const id = newId();
  switch (type) {
    case "section_header": return { id, type, eyebrow: "Label", title: "Section Title", intro: "Intro text.", align: "left" };
    case "heading":        return { id, type, text: "New Heading", level: 2, align: "left" };
    case "text":           return { id, type, text: "Write your paragraph here.", align: "left" };
    case "richtext":       return { id, type, html: "<p>Write your content.</p>" };
    case "image":          return { id, type, url: "", alt: "", caption: "" };
    case "button":         return { id, type, label: "Learn More", href: "/", variant: "solid", align: "left" };
    case "divider":        return { id, type, style: "line" };
    case "spacer":         return { id, type, height: "3rem" };
    case "columns":        return { id, type, cols: [[mkBlock("heading")], [mkBlock("text")]], gap: "8" };
    case "card":           return { id, type, num: "01", title: "Card Title", body: "Card body text." };
    case "hero":           return { id, type, heading: "Hero Heading", subheading: "Subheading", body: "Hero body text.", ctaLabel: "Get Started", ctaHref: "/" };
    case "stats":          return { id, type, items: [{ label: "Metric", value: "100+" }, { label: "Metric", value: "50+" }] };
    case "list":           return { id, type, items: ["Item one", "Item two", "Item three"], style: "bullet" };
    case "video":          return { id, type, url: "" };
    case "embed":          return { id, type, html: "" };
    case "quote":          return { id, type, text: "A powerful quote.", author: "Author" };
    case "badge":          return { id, type, items: ["Tag 1", "Tag 2", "Tag 3"] };
    case "accordion":      return { id, type, items: [{ q: "Question?", a: "Answer." }] };
    case "gallery":        return { id, type, images: [], cols: 3 };
    case "cta":            return { id, type, heading: "Ready to get started?", body: "Let us help.", primaryLabel: "Contact Us", primaryHref: "/contact", dark: true };
    case "raw_html":       return { id, type, html: "<div></div>" };
    default:               return { id, type: "text", text: "Block" };
  }
}

// ─── Image Picker Modal ───────────────────────────────────────────────────────

function ImagePicker({ onSelect, onClose }: { onSelect: (url: string) => void; onClose: () => void }) {
  const qc = useQueryClient();
  const [tab, setTab]       = useState<"library" | "upload">("library");
  const [search, setSearch] = useState("");
  const [busy, setBusy]     = useState(false);
  const [upMsg, setUpMsg]   = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const q = useQuery({
    queryKey: ["admin", "media", STORAGE_BUCKET],
    queryFn: async () => {
      const { data, error } = await supabase.storage.from(STORAGE_BUCKET).list("", {
        limit: 500,
        sortBy: { column: "created_at", order: "desc" },
      });
      if (error) throw error;
      return (data ?? [])
        .filter((f) => f.name !== ".emptyFolderPlaceholder" && /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(f.name))
        .map((f) => ({ name: f.name, url: getPublicUrl(f.name) }));
    },
    staleTime: 30_000,
  });

  const upload = async (file: File) => {
    setBusy(true);
    setUpMsg(null);
    try {
      const safe = `${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
      const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(safe, file, {
        cacheControl: "31536000", upsert: false,
      });
      if (error) throw error;
      const url = getPublicUrl(safe);
      qc.invalidateQueries({ queryKey: ["admin", "media", STORAGE_BUCKET] });
      onSelect(url);
      onClose();
    } catch (e) {
      setUpMsg((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const filtered = (q.data ?? []).filter((f) =>
    !search || f.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div
        className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-hairline bg-white shadow-2xl"
        style={{ maxHeight: "85vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b border-hairline bg-card px-5 py-3">
          <div>
            <p className="text-sm font-semibold text-navy">Choose Image</p>
            <p className="text-xs text-muted-foreground">
              Bucket: <code className="rounded bg-navy/10 px-1 font-mono">{STORAGE_BUCKET}</code> · Public URLs
            </p>
          </div>
          <button onClick={onClose} className="text-xl leading-none text-muted-foreground hover:text-navy">×</button>
        </div>

        {/* Tabs */}
        <div className="flex flex-shrink-0 gap-1 border-b border-hairline bg-card px-5 pt-2">
          {(["library", "upload"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`pb-2 px-3 text-xs font-semibold uppercase tracking-wide transition-colors border-b-2 ${
                tab === t ? "border-teal text-navy" : "border-transparent text-muted-foreground hover:text-navy"
              }`}
            >
              {t === "library" ? "Image Library" : "Upload New"}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {tab === "library" ? (
            <>
              <input value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search images…"
                className="mb-4 w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal" />
              {q.isLoading ? (
                <p className="py-8 text-center text-sm text-muted-foreground">Loading…</p>
              ) : filtered.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm text-muted-foreground">
                    {search ? "No matches." : `No images in "${STORAGE_BUCKET}" yet.`}
                  </p>
                  <button onClick={() => setTab("upload")}
                    className="mt-3 text-xs font-semibold text-science hover:underline">
                    Upload one →
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                  {filtered.map((img) => (
                    <button key={img.url} onClick={() => { onSelect(img.url); onClose(); }}
                      title={img.name}
                      className="group relative aspect-square overflow-hidden rounded border border-hairline hover:border-teal hover:ring-2 hover:ring-teal/30">
                      <img src={img.url} alt={img.name} loading="lazy"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                      <div className="absolute inset-x-0 bottom-0 bg-black/50 p-1 opacity-0 transition-opacity group-hover:opacity-100">
                        <p className="truncate text-[0.55rem] text-white">{img.name}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div
              className="flex cursor-pointer flex-col items-center gap-4 rounded-sm border-2 border-dashed border-hairline p-12 text-center hover:border-teal"
              onClick={() => fileRef.current?.click()}
            >
              <div className="text-4xl opacity-30">📁</div>
              <div>
                <p className="text-sm font-semibold text-navy">Click to choose an image</p>
                <p className="mt-1 text-xs text-muted-foreground">PNG, JPG, GIF, WebP, SVG</p>
              </div>
              {busy && <p className="text-sm text-science animate-pulse">Uploading…</p>}
              {upMsg && <p className="text-xs text-destructive">{upMsg}</p>}
              <input ref={fileRef} type="file" accept="image/*" className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) void upload(f); }} />
            </div>
          )}
        </div>

        <div className="flex-shrink-0 border-t border-hairline bg-card px-5 py-2.5 text-xs text-muted-foreground">
          Images use permanent public URLs from <strong>{STORAGE_BUCKET}</strong> — they load immediately on the public site.
        </div>
      </div>
    </div>
  );
}

// ─── Video uploader ───────────────────────────────────────────────────────────

function VideoUploader({ onUrl }: { onUrl: (url: string) => void }) {
  const [busy, setBusy]   = useState(false);
  const [msg, setMsg]     = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    setBusy(true); setMsg(null);
    try {
      const safe = `${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
      const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(safe, file, {
        cacheControl: "31536000", upsert: false,
      });
      if (error) throw error;
      onUrl(getPublicUrl(safe));
      setMsg("Uploaded!");
    } catch (e) {
      setMsg((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-1">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-navy/70">Upload video file</p>
      <label className="flex cursor-pointer items-center gap-2 rounded border border-hairline px-3 py-2 text-xs text-muted-foreground hover:border-teal">
        {busy ? "Uploading…" : "Choose video file (MP4, MOV…)"}
        <input ref={fileRef} type="file" accept="video/*" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) void upload(f); }} />
      </label>
      {msg && <p className="text-xs text-science">{msg}</p>}
    </div>
  );
}

// ─── Field helpers ────────────────────────────────────────────────────────────

function F({ label, value, onChange, placeholder, area, rows }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; area?: boolean; rows?: number;
}) {
  const cls = "w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal";
  return (
    <label className="block space-y-1">
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70">{label}</span>
      {area
        ? <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows ?? 3} className={`${cls} resize-y`} />
        : <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={cls} />}
    </label>
  );
}

function Sel({ label, value, options, onChange }: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function Chk({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-navy">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="accent-teal" />
      {label}
    </label>
  );
}

function ColourF({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block space-y-1">
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70">{label}</span>
      <div className="flex gap-2">
        <input type="color" value={value || "#1a2a4a"} onChange={(e) => onChange(e.target.value)}
          className="h-8 w-10 cursor-pointer rounded border border-hairline p-0.5" />
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="#hex or empty"
          className="flex-1 border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal" />
        {value && <button type="button" onClick={() => onChange("")} className="text-xs text-muted-foreground">✕</button>}
      </div>
    </label>
  );
}

// ─── Block editor panel ───────────────────────────────────────────────────────

function BlockEditor({
  block, onChange, onDelete, onDuplicate,
}: {
  block: Block;
  onChange: (patch: Record<string, unknown>) => void;
  onDelete: () => void;
  onDuplicate: () => void;
}) {
  const [picker, setPicker]       = useState<string | null>(null); // field to update on pick
  const [pickerCtx, setPickerCtx] = useState<"url" | "imageUrl" | "gallery_add">("url");

  const openPicker = (ctx: typeof pickerCtx) => {
    setPickerCtx(ctx);
    setPicker(ctx);
  };

  const handlePick = (url: string) => {
    if (pickerCtx === "gallery_add") {
      const imgs = (block as { images?: { url: string; alt?: string }[] }).images ?? [];
      onChange({ images: [...imgs, { url, alt: "" }] });
    } else {
      onChange({ [pickerCtx]: url });
    }
    setPicker(null);
  };

  return (
    <div className="space-y-4 pb-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-hairline pb-3">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-science">
          {block.type.replace(/_/g, " ")}
        </p>
        <div className="flex gap-1">
          <button onClick={onDuplicate} title="Duplicate"
            className="rounded border border-hairline px-2 py-1 text-[0.6rem] text-navy hover:bg-navy/5">⎘</button>
          <button onClick={onDelete} title="Delete"
            className="rounded border border-destructive/30 px-2 py-1 text-[0.6rem] text-destructive hover:bg-destructive/5">✕</button>
        </div>
      </div>

      {/* Heading / Text */}
      {(block.type === "heading" || block.type === "text") && (
        <>
          <F label="Content" value={block.text} onChange={(v) => onChange({ text: v })} area rows={3} />
          <Sel label="Alignment" value={block.align ?? "left"} options={["left","center","right"]} onChange={(v) => onChange({ align: v })} />
          {block.type === "heading" && (
            <Sel label="Level (H1–H4)" value={String(block.level ?? 2)} options={["1","2","3","4"]} onChange={(v) => onChange({ level: Number(v) })} />
          )}
          <ColourF label="Colour" value={block.color ?? ""} onChange={(v) => onChange({ color: v })} />
          <F label="Font size (CSS)" value={block.fontSize ?? ""} onChange={(v) => onChange({ fontSize: v })} placeholder="e.g. 1.5rem" />
        </>
      )}

      {/* Rich text */}
      {block.type === "richtext" && (
        <F label="HTML content" value={block.html} onChange={(v) => onChange({ html: v })} area rows={10} placeholder="<p>…</p>" />
      )}

      {/* Image */}
      {block.type === "image" && (
        <>
          {block.url && (
            <div className="relative overflow-hidden rounded border border-hairline">
              <img src={block.url} alt="" className="max-h-36 w-full object-cover" />
              <button onClick={() => onChange({ url: "" })}
                className="absolute right-1 top-1 rounded-full bg-destructive/80 px-1.5 py-0.5 text-[0.55rem] font-bold text-white">✕</button>
            </div>
          )}
          <button onClick={() => openPicker("url")}
            className="w-full rounded-sm bg-teal py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#05231f]">
            🖼 Choose from Library
          </button>
          <div className="flex items-center gap-2 text-[0.62rem] text-muted-foreground">
            <span className="flex-1 border-t border-hairline" /> or paste URL <span className="flex-1 border-t border-hairline" />
          </div>
          <F label="Image URL" value={block.url} onChange={(v) => onChange({ url: v })} placeholder="https://…" />
          <F label="Alt text" value={block.alt ?? ""} onChange={(v) => onChange({ alt: v })} />
          <F label="Caption" value={block.caption ?? ""} onChange={(v) => onChange({ caption: v })} />
          <Sel label="Width" value={block.width ?? "full"} options={["full","half"]} onChange={(v) => onChange({ width: v })} />
          <Sel label="Radius" value={block.radius ?? "sm"} options={["none","sm","lg"]} onChange={(v) => onChange({ radius: v })} />
        </>
      )}

      {/* Hero */}
      {block.type === "hero" && (
        <>
          <F label="Heading" value={block.heading} onChange={(v) => onChange({ heading: v })} />
          <F label="Subheading" value={block.subheading ?? ""} onChange={(v) => onChange({ subheading: v })} />
          <F label="Body text" value={block.body ?? ""} onChange={(v) => onChange({ body: v })} area />
          {block.imageUrl && (
            <div className="relative overflow-hidden rounded border border-hairline">
              <img src={block.imageUrl} alt="" className="max-h-20 w-full object-cover opacity-70" />
              <button onClick={() => onChange({ imageUrl: "" })}
                className="absolute right-1 top-1 rounded-full bg-destructive/80 px-1.5 py-0.5 text-[0.55rem] font-bold text-white">✕</button>
            </div>
          )}
          <button onClick={() => openPicker("imageUrl")}
            className="w-full rounded-sm border border-teal/50 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-science hover:bg-teal/5">
            🖼 Choose Background Image
          </button>
          <F label="Background URL" value={block.imageUrl ?? ""} onChange={(v) => onChange({ imageUrl: v })} placeholder="or paste…" />
          <F label="CTA label" value={block.ctaLabel ?? ""} onChange={(v) => onChange({ ctaLabel: v })} />
          <F label="CTA URL" value={block.ctaHref ?? ""} onChange={(v) => onChange({ ctaHref: v })} />
        </>
      )}

      {/* Gallery */}
      {block.type === "gallery" && (
        <>
          <Sel label="Columns" value={String(block.cols ?? 3)} options={["2","3","4"]} onChange={(v) => onChange({ cols: Number(v) })} />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70">
                Images ({(block.images ?? []).length})
              </p>
              <button onClick={() => openPicker("gallery_add")}
                className="rounded-sm bg-teal px-3 py-1 text-[0.6rem] font-semibold uppercase text-[#05231f]">
                + Add from library
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {(block.images ?? []).map((img, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded border border-hairline">
                  {img.url
                    ? <img src={img.url} alt={img.alt ?? ""} className="h-full w-full object-cover" />
                    : <div className="flex h-full w-full items-center justify-center text-[0.6rem] text-muted-foreground">?</div>}
                  <button
                    onClick={() => { const images = (block.images ?? []).filter((_, j) => j !== i); onChange({ images }); }}
                    className="absolute right-0.5 top-0.5 rounded-full bg-destructive/80 px-1 py-0.5 text-[0.5rem] font-bold text-white opacity-0 group-hover:opacity-100">✕</button>
                </div>
              ))}
            </div>
            <input placeholder="Paste image URL + Enter"
              className="w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const url = (e.target as HTMLInputElement).value.trim();
                  if (url) { onChange({ images: [...(block.images ?? []), { url, alt: "" }] }); (e.target as HTMLInputElement).value = ""; }
                }
              }} />
          </div>
        </>
      )}

      {/* Card */}
      {block.type === "card" && (
        <>
          <F label="Number / icon" value={block.num ?? ""} onChange={(v) => onChange({ num: v })} placeholder="01" />
          <F label="Title" value={block.title} onChange={(v) => onChange({ title: v })} />
          <F label="Body" value={block.body} onChange={(v) => onChange({ body: v })} area />
        </>
      )}

      {/* Button */}
      {block.type === "button" && (
        <>
          <F label="Label" value={block.label} onChange={(v) => onChange({ label: v })} />
          <F label="URL / path" value={block.href} onChange={(v) => onChange({ href: v })} />
          <Sel label="Style" value={block.variant ?? "solid"} options={["solid","outline","ghost"]} onChange={(v) => onChange({ variant: v })} />
          <Sel label="Alignment" value={block.align ?? "left"} options={["left","center","right"]} onChange={(v) => onChange({ align: v })} />
        </>
      )}

      {/* Divider */}
      {block.type === "divider" && (
        <>
          <Sel label="Style" value={block.style ?? "line"} options={["line","dots","space"]} onChange={(v) => onChange({ style: v })} />
          {block.style === "space" && <F label="Height (CSS)" value={block.spacing ?? ""} onChange={(v) => onChange({ spacing: v })} placeholder="2rem" />}
        </>
      )}

      {/* Spacer */}
      {block.type === "spacer" && (
        <F label="Height (CSS)" value={block.height} onChange={(v) => onChange({ height: v })} placeholder="3rem" />
      )}

      {/* CTA */}
      {block.type === "cta" && (
        <>
          <F label="Heading" value={block.heading} onChange={(v) => onChange({ heading: v })} />
          <F label="Body text" value={block.body ?? ""} onChange={(v) => onChange({ body: v })} area />
          <F label="Primary label" value={block.primaryLabel} onChange={(v) => onChange({ primaryLabel: v })} />
          <F label="Primary URL" value={block.primaryHref} onChange={(v) => onChange({ primaryHref: v })} />
          <F label="Secondary label" value={block.secondaryLabel ?? ""} onChange={(v) => onChange({ secondaryLabel: v })} />
          <F label="Secondary URL" value={block.secondaryHref ?? ""} onChange={(v) => onChange({ secondaryHref: v })} />
          <Chk label="Dark background" checked={block.dark ?? false} onChange={(v) => onChange({ dark: v })} />
        </>
      )}

      {/* Section header */}
      {block.type === "section_header" && (
        <>
          <F label="Eyebrow" value={block.eyebrow ?? ""} onChange={(v) => onChange({ eyebrow: v })} placeholder="e.g. Services" />
          <F label="Title" value={block.title} onChange={(v) => onChange({ title: v })} />
          <F label="Intro paragraph" value={block.intro ?? ""} onChange={(v) => onChange({ intro: v })} area />
          <Sel label="Alignment" value={block.align ?? "left"} options={["left","center"]} onChange={(v) => onChange({ align: v })} />
        </>
      )}

      {/* Stats */}
      {block.type === "stats" && (
        <div className="space-y-2">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70">Stat items</p>
          {(block.items ?? []).map((item, i) => (
            <div key={i} className="flex gap-1.5">
              <input value={item.label} placeholder="Label"
                onChange={(e) => { const items = [...(block.items ?? [])]; items[i] = { ...items[i]!, label: e.target.value }; onChange({ items }); }}
                className="flex-1 border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal" />
              <input value={item.value} placeholder="Value"
                onChange={(e) => { const items = [...(block.items ?? [])]; items[i] = { ...items[i]!, value: e.target.value }; onChange({ items }); }}
                className="w-24 border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal" />
              <button onClick={() => onChange({ items: (block.items ?? []).filter((_, j) => j !== i) })} className="px-1.5 text-xs text-destructive">✕</button>
            </div>
          ))}
          <button onClick={() => onChange({ items: [...(block.items ?? []), { label: "", value: "" }] })}
            className="rounded-sm border border-teal/50 px-3 py-1 text-[0.6rem] font-semibold text-science hover:bg-teal/5">+ Add stat</button>
        </div>
      )}

      {/* List */}
      {block.type === "list" && (
        <>
          <Sel label="Style" value={block.style ?? "bullet"} options={["bullet","numbered","check"]} onChange={(v) => onChange({ style: v })} />
          <div className="space-y-1.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70">Items</p>
            {(block.items ?? []).map((item, i) => (
              <div key={i} className="flex gap-1">
                <input value={item}
                  onChange={(e) => { const items = [...(block.items ?? [])]; items[i] = e.target.value; onChange({ items }); }}
                  className="flex-1 border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal" />
                <button onClick={() => onChange({ items: (block.items ?? []).filter((_, j) => j !== i) })} className="px-1.5 text-xs text-destructive">✕</button>
              </div>
            ))}
            <button onClick={() => onChange({ items: [...(block.items ?? []), "New item"] })}
              className="rounded-sm border border-teal/50 px-3 py-1 text-[0.6rem] font-semibold text-science hover:bg-teal/5">+ Add item</button>
          </div>
        </>
      )}

      {/* Quote */}
      {block.type === "quote" && (
        <>
          <F label="Quote text" value={block.text} onChange={(v) => onChange({ text: v })} area />
          <F label="Author" value={block.author ?? ""} onChange={(v) => onChange({ author: v })} />
        </>
      )}

      {/* Badge */}
      {block.type === "badge" && (
        <>
          <div className="space-y-1">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70">Tags (one per line)</p>
            <textarea value={(block.items ?? []).join("\n")} rows={4}
              onChange={(e) => onChange({ items: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) })}
              className="w-full resize-y border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal" />
          </div>
          <ColourF label="Border colour" value={block.color ?? ""} onChange={(v) => onChange({ color: v })} />
        </>
      )}

      {/* Accordion */}
      {block.type === "accordion" && (
        <div className="space-y-3">
          {(block.items ?? []).map((item, i) => (
            <div key={i} className="rounded border border-hairline p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] font-semibold text-muted-foreground">#{i + 1}</span>
                <button onClick={() => onChange({ items: (block.items ?? []).filter((_, j) => j !== i) })} className="text-xs text-destructive">✕</button>
              </div>
              <input value={item.q} placeholder="Question"
                onChange={(e) => { const items = [...(block.items ?? [])]; items[i] = { ...items[i]!, q: e.target.value }; onChange({ items }); }}
                className="w-full border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal" />
              <textarea value={item.a} placeholder="Answer" rows={2}
                onChange={(e) => { const items = [...(block.items ?? [])]; items[i] = { ...items[i]!, a: e.target.value }; onChange({ items }); }}
                className="w-full resize-y border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal" />
            </div>
          ))}
          <button onClick={() => onChange({ items: [...(block.items ?? []), { q: "Question?", a: "Answer." }] })}
            className="rounded-sm border border-teal/50 px-3 py-1 text-[0.6rem] font-semibold text-science hover:bg-teal/5">+ Add Q&A</button>
        </div>
      )}

      {/* Video */}
      {block.type === "video" && (
        <>
          {block.url && (
            <div className="relative aspect-video overflow-hidden rounded border border-hairline bg-black">
              <video src={block.url} controls className="h-full w-full" />
              <button onClick={() => onChange({ url: "" })}
                className="absolute right-1 top-1 rounded-full bg-destructive/80 px-1.5 py-0.5 text-[0.55rem] font-bold text-white">✕</button>
            </div>
          )}
          <VideoUploader onUrl={(url) => onChange({ url })} />
          <div className="flex items-center gap-2 text-[0.62rem] text-muted-foreground">
            <span className="flex-1 border-t border-hairline" /> or embed URL <span className="flex-1 border-t border-hairline" />
          </div>
          <F label="YouTube / Vimeo / video URL" value={block.url} onChange={(v) => onChange({ url: v })} placeholder="https://www.youtube.com/embed/…" />
          <F label="Caption" value={block.caption ?? ""} onChange={(v) => onChange({ caption: v })} />
        </>
      )}

      {/* Embed / Raw HTML */}
      {(block.type === "embed" || block.type === "raw_html") && (
        <F label="HTML code" value={block.html} onChange={(v) => onChange({ html: v })} area rows={8} placeholder="<div>…</div>" />
      )}

      {/* Columns */}
      {block.type === "columns" && (
        <>
          <Sel label="Gap" value={block.gap ?? "8"} options={["2","4","6","8","12"]} onChange={(v) => onChange({ gap: v })} />
          <p className="text-[0.62rem] text-muted-foreground rounded border border-hairline bg-secondary/40 p-3">
            This block has {(block.cols ?? []).length} columns. Click each nested block in the canvas to edit its content.
          </p>
        </>
      )}

      {/* Image picker modal */}
      {picker !== null && (
        <ImagePicker onSelect={handlePick} onClose={() => setPicker(null)} />
      )}
    </div>
  );
}

// ─── Canvas block wrapper ─────────────────────────────────────────────────────

function CanvasBlock({
  block, index, total, isSelected, isDragOver,
  onSelect, onUp, onDown, onDelete, onDuplicate,
  onDragStart, onDragOver, onDrop,
}: {
  block: Block; index: number; total: number;
  isSelected: boolean; isDragOver: boolean;
  onSelect: () => void; onUp: () => void; onDown: () => void;
  onDelete: () => void; onDuplicate: () => void;
  onDragStart: () => void; onDragOver: () => void; onDrop: () => void;
}) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={(e) => { e.preventDefault(); onDragOver(); }}
      onDrop={(e) => { e.preventDefault(); onDrop(); }}
      onClick={onSelect}
      className={`group relative cursor-pointer transition-all ${
        isDragOver ? "border-t-4 border-teal" : ""
      } ${isSelected ? "ring-2 ring-inset ring-teal" : "hover:ring-1 hover:ring-inset hover:ring-teal/40"}`}
    >
      {/* Floating toolbar */}
      <div className={`absolute right-2 top-2 z-20 flex items-center gap-0.5 rounded border border-hairline bg-white shadow-md transition-opacity ${
        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}>
        <span className="cursor-grab px-1.5 py-1 text-xs text-muted-foreground" title="Drag to reorder">⠿</span>
        <span className="w-px self-stretch bg-hairline" />
        <span className="px-1.5 py-1 text-[0.55rem] font-bold uppercase text-muted-foreground">{block.type.replace(/_/g, " ")}</span>
        <span className="w-px self-stretch bg-hairline" />
        {index > 0 && <button onClick={(e) => { e.stopPropagation(); onUp(); }} className="px-1.5 py-1 text-xs text-navy hover:text-science" title="Up">↑</button>}
        {index < total - 1 && <button onClick={(e) => { e.stopPropagation(); onDown(); }} className="px-1.5 py-1 text-xs text-navy hover:text-science" title="Down">↓</button>}
        <button onClick={(e) => { e.stopPropagation(); onDuplicate(); }} className="px-1.5 py-1 text-xs text-navy hover:text-science" title="Duplicate">⎘</button>
        <button onClick={(e) => { e.stopPropagation(); onDelete(); }} className="px-1.5 py-1 text-xs text-destructive" title="Delete">✕</button>
      </div>

      {/* Index badge */}
      <div className={`absolute left-2 top-2 z-20 flex h-5 items-center rounded-sm bg-navy/80 px-1.5 text-[0.55rem] font-bold text-white transition-opacity ${
        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}>{String(index + 1).padStart(2, "0")}</div>

      <div className="pointer-events-none select-none">
        <BlockView block={block} />
      </div>
    </div>
  );
}

// ─── Main PageBuilder ─────────────────────────────────────────────────────────

function PageBuilder() {
  const { id } = Route.useParams();
  const qc = useQueryClient();

  const [page, setPage]         = useState<PageRow | null>(null);
  const [msg, setMsg]           = useState<{ text: string; ok: boolean } | null>(null);
  const [saving, setSaving]     = useState(false);
  const [autoSave, setAutoSave] = useState(false);
  const [panel, setPanel]       = useState<"blocks" | "edit" | "settings">("blocks");
  const [selId, setSelId]       = useState<string | null>(null);
  const [device, setDevice]     = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [catFilter, setCat]     = useState("All");
  const [search, setSearch]     = useState("");
  const [dragFrom, setDragFrom] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const query = useQuery({
    queryKey: ["admin", "page", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("pages").select("*").eq("id", id).single();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (query.data) {
      setPage({
        ...query.data,
        blocks: Array.isArray(query.data.blocks) ? (query.data.blocks as unknown as Block[]) : [],
      });
    }
  }, [query.data]);

  // Auto-save trigger (waits 3 s after last change)
  useEffect(() => {
    if (!autoSave || !page) return;
    if (autoTimer.current) clearTimeout(autoTimer.current);
    autoTimer.current = setTimeout(() => { void doSave(); }, 3000);
    return () => { if (autoTimer.current) clearTimeout(autoTimer.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page?.blocks, autoSave]);

  if (query.isLoading || !page) {
    return <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">Loading page builder…</div>;
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  const setBlocks = (blocks: Block[]) => setPage((p) => p ? { ...p, blocks } : p);
  const setProp   = (patch: Partial<PageRow>) => setPage((p) => p ? { ...p, ...patch } : p);

  const addBlock = (type: Block["type"]) => {
    const b = mkBlock(type);
    setBlocks([...page.blocks, b]);
    setSelId(b.id);
    setPanel("edit");
  };

  const updBlock = (bid: string, patch: Record<string, unknown>) =>
    setBlocks(page.blocks.map((b) => b.id === bid ? ({ ...b, ...patch } as Block) : b));

  const delBlock = (bid: string) => {
    setBlocks(page.blocks.filter((b) => b.id !== bid));
    if (selId === bid) { setSelId(null); setPanel("blocks"); }
  };

  const dupBlock = (bid: string) => {
    const idx = page.blocks.findIndex((b) => b.id === bid);
    if (idx < 0) return;
    const clone = { ...page.blocks[idx]!, id: newId() };
    const next = [...page.blocks];
    next.splice(idx + 1, 0, clone);
    setBlocks(next);
    setSelId(clone.id);
  };

  const moveBlock = (index: number, dir: -1 | 1) => {
    const next = [...page.blocks];
    const t = index + dir;
    if (t < 0 || t >= next.length) return;
    [next[index], next[t]] = [next[t]!, next[index]!];
    setBlocks(next);
  };

  const dropBlock = () => {
    if (!dragFrom || !dragOver || dragFrom === dragOver) { setDragFrom(null); setDragOver(null); return; }
    const next = [...page.blocks];
    const fi = next.findIndex((b) => b.id === dragFrom);
    const ti = next.findIndex((b) => b.id === dragOver);
    if (fi < 0 || ti < 0) return;
    const [item] = next.splice(fi, 1);
    next.splice(ti, 0, item!);
    setBlocks(next);
    setDragFrom(null); setDragOver(null);
  };

  const doSave = async () => {
    setSaving(true); setMsg(null);
    const { error } = await supabase.from("pages").update({
      slug: page.slug, title_en: page.title_en, title_ko: page.title_ko,
      description_en: page.description_en, description_ko: page.description_ko,
      published: page.published, blocks: page.blocks as unknown as never,
      updated_at: new Date().toISOString(),
    }).eq("id", page.id);
    setSaving(false);
    if (error) { setMsg({ text: error.message, ok: false }); return; }
    setMsg({ text: "Saved ✓", ok: true });
    qc.invalidateQueries({ queryKey: ["admin", "pages"] });
    setTimeout(() => setMsg(null), 3000);
  };

  const selBlock = page.blocks.find((b) => b.id === selId) ?? null;

  const palette = PALETTE.filter((b) => {
    const matchCat = catFilter === "All" || b.cat === catFilter;
    const matchSrc = !search || b.label.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSrc;
  });

  const devWidth: Record<string, string> = { desktop: "100%", tablet: "768px", mobile: "390px" };

  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col overflow-hidden">

      {/* ── TOP BAR ──────────────────────────────────────────────────── */}
      <div className="flex flex-shrink-0 flex-wrap items-center justify-between gap-2 border-b border-hairline bg-card px-4 py-2.5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 min-w-0">
          <Link to="/admin/pages" className="text-xs text-muted-foreground hover:text-navy">← Pages</Link>
          <span className="text-hairline">|</span>
          <span className="max-w-[160px] truncate text-sm font-semibold text-navy">{page.title_en || page.slug}</span>
          <span className="hidden text-xs text-muted-foreground sm:block">/p/{page.slug}</span>
        </div>

        {/* Device switcher */}
        <div className="flex items-center gap-1 rounded border border-hairline bg-background p-1">
          {(["desktop", "tablet", "mobile"] as const).map((d) => (
            <button key={d} onClick={() => setDevice(d)}
              className={`rounded px-2.5 py-1 text-[0.62rem] font-medium capitalize transition-colors ${device === d ? "bg-navy text-white" : "text-muted-foreground hover:text-navy"}`}>
              {d === "desktop" ? "🖥" : d === "tablet" ? "⬜" : "📱"} {d}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <label className="flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground" title="Auto-save 3s after changes">
            <input type="checkbox" checked={autoSave} onChange={(e) => setAutoSave(e.target.checked)} className="accent-teal" />
            Auto-save
          </label>

          {/* Draft / Published toggle */}
          <button
            onClick={() => setProp({ published: !page.published })}
            className={`rounded-sm px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-colors ${
              page.published
                ? "bg-teal/15 text-science hover:bg-teal/25"
                : "bg-navy/10 text-navy hover:bg-navy/20"
            }`}
          >
            {page.published ? "● Published" : "○ Draft"}
          </button>

          {page.published && (
            <a href={`/p/${page.slug}`} target="_blank" rel="noreferrer"
              className="text-xs font-semibold text-science hover:underline">View ↗</a>
          )}

          <button onClick={doSave} disabled={saving}
            className="rounded-sm bg-teal px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#05231f] disabled:opacity-60">
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {/* Save message */}
      {msg && (
        <div className={`flex-shrink-0 border-b px-4 py-1.5 text-xs font-medium ${
          msg.ok ? "border-teal/30 bg-teal/10 text-science" : "border-destructive/30 bg-destructive/10 text-destructive"
        }`}>{msg.text}</div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* ── LEFT PANEL ───────────────────────────────────────────── */}
        <aside className="flex w-72 flex-shrink-0 flex-col overflow-hidden border-r border-hairline bg-card">

          {/* Tabs */}
          <div className="flex flex-shrink-0 border-b border-hairline">
            {(["blocks", "edit", "settings"] as const).map((p) => (
              <button key={p} onClick={() => setPanel(p)}
                className={`flex-1 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  panel === p ? "border-b-2 border-teal text-navy" : "text-muted-foreground hover:text-navy"
                }`}>
                {p === "blocks" ? "📦 Blocks" : p === "edit" ? "✏️ Edit" : "⚙️ Settings"}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto">

            {/* ── BLOCKS TAB ── */}
            {panel === "blocks" && (
              <div className="p-3">
                <input value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search blocks…"
                  className="mb-3 w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal" />
                <div className="mb-3 flex flex-wrap gap-1">
                  {["All", ...CATS].map((cat) => (
                    <button key={cat} onClick={() => setCat(cat)}
                      className={`rounded px-2 py-1 text-[0.6rem] font-medium transition-colors ${
                        catFilter === cat ? "bg-navy text-white" : "border border-hairline text-navy hover:bg-navy/5"
                      }`}>{cat}</button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {palette.map((b) => (
                    <button key={b.type} onClick={() => addBlock(b.type)}
                      className="flex flex-col items-center gap-1.5 rounded border border-hairline bg-background p-3 text-center transition-all hover:border-teal hover:bg-teal/5 active:scale-95">
                      <span className="text-base font-mono font-bold text-navy/60">{b.icon}</span>
                      <span className="text-[0.6rem] font-medium leading-tight text-navy">{b.label}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-center text-[0.6rem] text-muted-foreground">
                  {page.blocks.length} block{page.blocks.length !== 1 ? "s" : ""}
                </p>
              </div>
            )}

            {/* ── EDIT TAB ── */}
            {panel === "edit" && (
              <div className="p-3">
                {!selBlock ? (
                  <div className="py-10 text-center">
                    <p className="text-2xl opacity-20">👆</p>
                    <p className="mt-2 text-xs text-muted-foreground">Click a block on the canvas to edit it.</p>
                  </div>
                ) : (
                  <BlockEditor
                    block={selBlock}
                    onChange={(patch) => updBlock(selBlock.id, patch)}
                    onDelete={() => delBlock(selBlock.id)}
                    onDuplicate={() => dupBlock(selBlock.id)}
                  />
                )}
              </div>
            )}

            {/* ── SETTINGS TAB ── */}
            {panel === "settings" && (
              <div className="space-y-4 p-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-science">Page Settings</p>
                <F label="URL Slug" value={page.slug} onChange={(v) => setProp({ slug: v })} placeholder="page-url-slug" />
                <F label="Title (EN)" value={page.title_en} onChange={(v) => setProp({ title_en: v })} />
                <F label="Title (KO)" value={page.title_ko} onChange={(v) => setProp({ title_ko: v })} />
                <F label="Description (EN)" value={page.description_en} onChange={(v) => setProp({ description_en: v })} area />
                <F label="Description (KO)" value={page.description_ko} onChange={(v) => setProp({ description_ko: v })} area />
                <Chk label="Published — visible at /p/slug" checked={page.published} onChange={(v) => setProp({ published: v })} />
                {page.published && (
                  <a href={`/p/${page.slug}`} target="_blank" rel="noreferrer"
                    className="block text-center text-xs font-semibold text-science hover:underline">
                    View live page ↗
                  </a>
                )}

                {/* Danger zone */}
                <div className="mt-8 rounded-sm border border-destructive/20 bg-destructive/5 p-4">
                  <p className="text-[0.62rem] font-semibold uppercase text-destructive">Danger zone</p>
                  <p className="mt-1 text-xs text-muted-foreground">Unpublish hides the page from the public site without deleting it.</p>
                  {page.published && (
                    <button
                      onClick={() => { setProp({ published: false }); void doSave(); }}
                      className="mt-3 rounded-sm border border-destructive/40 px-4 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10"
                    >
                      Unpublish
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ── CANVAS ───────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col overflow-hidden bg-[#f0f0f0]">
          <div className="flex-1 overflow-auto p-6">
            <div className="mx-auto w-full bg-white shadow-lg transition-all duration-300"
              style={{ maxWidth: devWidth[device], minHeight: "600px" }}>
              {page.blocks.length === 0 ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center gap-4 border-2 border-dashed border-hairline m-8 p-12 text-center">
                  <div className="text-6xl opacity-10">📦</div>
                  <p className="text-base font-medium text-navy">Page is empty</p>
                  <p className="text-sm text-muted-foreground">Pick a block from the left panel</p>
                  <button onClick={() => addBlock("section_header")}
                    className="mt-2 rounded-sm bg-teal px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#05231f]">
                    + Add First Block
                  </button>
                </div>
              ) : (
                <>
                  {page.blocks.map((block, i) => (
                    <CanvasBlock
                      key={block.id}
                      block={block}
                      index={i}
                      total={page.blocks.length}
                      isSelected={selId === block.id}
                      isDragOver={dragOver === block.id}
                      onSelect={() => { setSelId(block.id); setPanel("edit"); }}
                      onUp={() => moveBlock(i, -1)}
                      onDown={() => moveBlock(i, 1)}
                      onDelete={() => delBlock(block.id)}
                      onDuplicate={() => dupBlock(block.id)}
                      onDragStart={() => setDragFrom(block.id)}
                      onDragOver={() => setDragOver(block.id)}
                      onDrop={dropBlock}
                    />
                  ))}
                  {/* Drop zone at end */}
                  <div
                    className="flex min-h-[60px] items-center justify-center border-t-2 border-dashed border-hairline py-4 text-xs text-muted-foreground hover:border-teal hover:text-science"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => { e.preventDefault(); dropBlock(); }}
                  >
                    Drop block here or click + below
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick-add bar */}
          <div className="flex-shrink-0 border-t border-hairline bg-card px-4 py-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[0.62rem] text-muted-foreground mr-1">+ Quick add:</span>
              {[
                { type: "section_header" as const, label: "Section" },
                { type: "heading" as const,        label: "Heading"  },
                { type: "text" as const,           label: "Text"     },
                { type: "image" as const,          label: "Image"    },
                { type: "button" as const,         label: "Button"   },
                { type: "divider" as const,        label: "Divider"  },
                { type: "cta" as const,            label: "CTA"      },
                { type: "accordion" as const,      label: "FAQ"      },
              ].map(({ type, label }) => (
                <button key={type} onClick={() => addBlock(type)}
                  className="rounded border border-hairline px-2.5 py-1 text-[0.6rem] font-medium text-navy hover:border-teal hover:text-science">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
