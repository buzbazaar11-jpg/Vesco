import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BlockList } from "@/components/admin/Blocks";
import type { Block } from "@/lib/admin";

export const Route = createFileRoute("/p/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — Vesco Science` },
      { name: "description", content: "Vesco Science page." },
      { property: "og:title", content: `${params.slug} — Vesco Science` },
      { property: "og:description", content: "Vesco Science page." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BuilderPage,
});

function BuilderPage() {
  const { slug } = Route.useParams();

  const query = useQuery({
    queryKey: ["public", "page", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("title_ko,title_en,description_ko,blocks,published")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  if (query.isLoading) {
    return <div className="p-24 text-center text-sm text-muted-foreground">Loading…</div>;
  }

  if (!query.data) {
    return (
      <div className="p-24 text-center">
        <h1 className="text-3xl font-semibold text-navy">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This page is unpublished or does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]"
        >
          Go home
        </Link>
      </div>
    );
  }

  const page = query.data;
  const blocks = Array.isArray(page.blocks) ? (page.blocks as unknown as Block[]) : [];

  return (
    <article>
      <header className="border-b border-hairline bg-navy px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-semibold text-white">
          {page.title_ko || page.title_en}
        </h1>
        {page.description_ko ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">{page.description_ko}</p>
        ) : null}
      </header>
      <BlockList blocks={blocks} />
    </article>
  );
}
