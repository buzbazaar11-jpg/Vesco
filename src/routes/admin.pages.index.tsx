import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/pages/")({
  component: PagesList,
});

function PagesList() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const pages = useQuery({
    queryKey: ["admin", "pages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("id,slug,title_en,title_ko,published,updated_at")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const s = (slug || title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const { data, error } = await supabase
      .from("pages")
      .insert({ slug: s, title_en: title, title_ko: title, blocks: [] })
      .select("id")
      .single();
    if (error) return setErr(error.message);
    setTitle("");
    setSlug("");
    qc.invalidateQueries({ queryKey: ["admin", "pages"] });
    navigate({ to: "/admin/pages/$id", params: { id: data.id } });
  };

  const remove = async (id: string) => {
    await supabase.from("pages").delete().eq("id", id);
    qc.invalidateQueries({ queryKey: ["admin", "pages"] });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-navy">Pages / Builder</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Create a page, then drop in headings, text, images and buttons.
      </p>

      <form onSubmit={create} className="mt-8 flex flex-wrap gap-3 border border-hairline bg-card p-5">
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Page title"
          className="min-w-[12rem] flex-1 border border-hairline bg-background px-4 py-3 text-sm outline-none focus:border-teal"
        />
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="url-slug (optional)"
          className="min-w-[12rem] flex-1 border border-hairline bg-background px-4 py-3 text-sm outline-none focus:border-teal"
        />
        <button className="rounded-sm bg-teal px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]">
          Create page
        </button>
      </form>
      {err ? <p className="mt-3 text-sm text-destructive">{err}</p> : null}

      <div className="mt-8 divide-y divide-hairline border border-hairline bg-card">
        {(pages.data ?? []).map((p) => (
          <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-navy">{p.title_en || p.slug}</p>
              <p className="text-xs text-muted-foreground">/p/{p.slug}</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`/p/${p.slug}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science"
              >
                View
              </a>
              <Link
                to="/admin/pages/$id"
                params={{ id: p.id }}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science"
              >
                Edit
              </Link>
              <button
                onClick={() => remove(p.id)}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-destructive"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {pages.data && pages.data.length === 0 ? (
          <p className="px-5 py-6 text-sm text-muted-foreground">No pages yet.</p>
        ) : null}
      </div>
    </div>
  );
}
