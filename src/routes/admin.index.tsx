import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

const STATIC_PAGES = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/about/mission", label: "Mission & Vision" },
  { path: "/about/network", label: "Global Network" },
  { path: "/facility", label: "Facility" },
  { path: "/research", label: "R&D" },
  { path: "/quality", label: "Quality" },
  { path: "/technology", label: "Technology" },
  { path: "/products", label: "Products" },
  { path: "/oem", label: "OEM / ODM" },
  { path: "/custom-development", label: "Custom Development" },
  { path: "/insights", label: "Insights" },
  { path: "/resources", label: "Download Center" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact" },
];

const QUICK_TOOLS = [
  { to: "/admin/site-editor", icon: "✏️", label: "Edit Page Content", desc: "Update text & content on existing pages" },
  { to: "/admin/pages",       icon: "🏗", label: "Visual Builder",     desc: "Build new pages with drag-and-drop blocks" },
  { to: "/admin/media",       icon: "🖼", label: "Media Manager",      desc: "Upload and manage images & files" },
  { to: "/admin/ai-assistant",icon: "🤖", label: "AI Assistant",       desc: "Upload PDFs/images, compare with site" },
  { to: "/admin/settings",    icon: "⚙️", label: "Site Settings",      desc: "Logo, contact info, social links" },
  { to: "/admin/resources",   icon: "📁", label: "Resources & Files",  desc: "Manage downloadable documents" },
] as const;

function Dashboard() {
  const pages = useQuery({
    queryKey: ["admin", "pages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pages")
        .select("id,slug,title_en,published,updated_at")
        .order("updated_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const resources = useQuery({
    queryKey: ["admin", "resources", "count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("resources")
        .select("id", { count: "exact", head: true });
      if (error) throw error;
      return count ?? 0;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-semibold text-navy">Dashboard</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Welcome to the Vesco Science admin panel. Manage all website content from here.
      </p>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard label="Static site pages" value={String(STATIC_PAGES.length)} />
        <StatCard label="Builder pages" value={String(pages.data?.length ?? 0)} />
        <StatCard label="Resources / files" value={String(resources.data ?? 0)} />
      </div>

      {/* Quick Tools */}
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold text-navy">Quick Tools</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_TOOLS.map((tool) => (
            <Link
              key={tool.to}
              to={tool.to}
              className="group flex items-start gap-4 rounded-sm border border-hairline bg-card p-5 transition-all hover:border-teal hover:shadow-sm"
            >
              <span className="text-2xl flex-shrink-0">{tool.icon}</span>
              <div>
                <p className="font-semibold text-navy group-hover:text-science transition-colors">{tool.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Builder Pages */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-navy">Visual Builder Pages</h2>
          <Link
            to="/admin/pages"
            className="rounded-sm bg-teal px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]"
          >
            Manage
          </Link>
        </div>
        <div className="divide-y divide-hairline border border-hairline bg-card">
          {(pages.data ?? []).map((p) => (
            <div key={p.id} className="flex items-center justify-between gap-4 px-5 py-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-navy">{p.title_en || p.slug}</p>
                <p className="text-xs text-muted-foreground">/p/{p.slug}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-sm px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] ${
                  p.published ? "bg-teal/15 text-science" : "bg-navy/10 text-navy"
                }`}>
                  {p.published ? "Live" : "Draft"}
                </span>
                <Link to="/admin/pages/$id" params={{ id: p.id }}
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science">
                  Edit
                </Link>
                {p.published && (
                  <a href={`/p/${p.slug}`} target="_blank" rel="noreferrer"
                     className="text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science">
                    View ↗
                  </a>
                )}
              </div>
            </div>
          ))}
          {pages.data && pages.data.length === 0 && (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-muted-foreground">No builder pages yet.</p>
              <Link to="/admin/pages"
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-science hover:underline">
                Create your first page →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Static Pages */}
      <section className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-navy">Existing Website Pages</h2>
          <Link to="/admin/site-editor"
            className="text-xs font-semibold uppercase tracking-[0.12em] text-science hover:underline">
            Edit content →
          </Link>
        </div>
        <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {STATIC_PAGES.map((p) => (
            <div key={p.path} className="flex items-center justify-between bg-card px-5 py-3">
              <div>
                <p className="text-sm font-medium text-navy">{p.label}</p>
                <p className="text-xs text-muted-foreground">{p.path}</p>
              </div>
              <div className="flex items-center gap-3">
                <a href={p.path} target="_blank" rel="noreferrer"
                   className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-navy hover:text-science">
                  View ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant teaser */}
      <section className="mt-10 rounded-sm border border-teal/20 bg-teal/5 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <h2 className="text-lg font-semibold text-navy">AI Website Assistant</h2>
            </div>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Upload a PDF, design mockup, or screenshot. The AI will compare it against your existing website,
              show you what's different or missing, and ask for your confirmation before making any changes.
            </p>
          </div>
          <Link to="/admin/ai-assistant"
            className="rounded-sm bg-navy px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white hover:bg-navy/90">
            Open AI Assistant
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-hairline bg-card px-6 py-5">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-navy">{value}</p>
    </div>
  );
}
