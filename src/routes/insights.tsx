import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/data/articles";
import molecular from "@/assets/molecular.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Science & Insights — Vesco Science Knowledge Center" },
      {
        name: "description",
        content:
          "Articles on exosome science, PDRN/PN platforms, biotech manufacturing, Korean biotechnology and regulatory documentation for B2B partners.",
      },
      { property: "og:title", content: "Science & Insights — Vesco Science" },
      {
        property: "og:description",
        content: "A knowledge center for regenerative biotechnology and manufacturing practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Layout,
});

function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname !== "/insights") return <Outlet />;
  return <Index />;
}

function Index() {
  const { t } = useI18n();
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? ARTICLES.filter((a) => a.category === active) : ARTICLES;

  const chip = (on: boolean) =>
    `rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${
      on
        ? "border-teal bg-teal text-[#05231f]"
        : "border-hairline text-navy hover:border-teal hover:text-science"
    }`;

  return (
    <>
      <PageHero
        eyebrow={t("insights.eyebrow")}
        title={t("insights.title")}
        lead={t("insights.intro")}
        image={molecular}
        imageAlt={t("exosome.imageAlt")}
        crumb={{ label: t("insights.eyebrow"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={t("insights.eyebrow")} title={t("insights.title")} />

        <div className="mt-10 flex flex-wrap gap-2">
          <button onClick={() => setActive(null)} className={chip(active === null)}>
            {t("common.viewAll")} ({ARTICLES.length})
          </button>
          {ARTICLE_CATEGORIES.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={chip(active === c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 6) * 60}>
              <Link
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="card-flat group flex h-full flex-col p-8"
              >
                <span className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science">
                  {a.category}
                </span>
                <h3 className="mt-5 text-[1.15rem] leading-snug font-semibold text-navy">
                  {a.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.93rem] leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science">
                  <span className="h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" />
                  {t("common.readMore")}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-[0.85rem] text-muted-foreground">{t("insights.note")}</p>
      </Section>

      <CTABand />
    </>
  );
}
