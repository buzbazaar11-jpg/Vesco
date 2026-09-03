import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTICLES } from "@/data/articles";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_PATHS: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/about/mission", changefreq: "monthly", priority: "0.6" },
  { path: "/about/network", changefreq: "monthly", priority: "0.6" },
  { path: "/facility", changefreq: "monthly", priority: "0.7" },
  { path: "/research", changefreq: "monthly", priority: "0.7" },
  { path: "/quality", changefreq: "monthly", priority: "0.7" },
  { path: "/technology", changefreq: "monthly", priority: "0.9" },
  { path: "/products", changefreq: "monthly", priority: "0.9" },
  { path: "/oem", changefreq: "monthly", priority: "0.9" },
  { path: "/custom-development", changefreq: "monthly", priority: "0.7" },
  { path: "/insights", changefreq: "weekly", priority: "0.8" },
  { path: "/resources", changefreq: "monthly", priority: "0.6" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
];

const TECHNOLOGY_SLUGS = [
  "exosome",
  "pdrn-pn",
  "lyophilization",
  "formulation",
  "cold-chain",
  "custom",
];

const PRODUCT_SLUGS = [
  "lyophilized-exosome",
  "scalp-hair-exosome",
  "skin-exosome",
  "custom-exosome",
  "pdrn-formulation",
  "pn-formulation",
  "skin-booster",
  "regenerative-formulation",
  "ha-formulation",
  "peptide-formulation",
  "client-specific",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC_PATHS,
          ...TECHNOLOGY_SLUGS.map((slug) => ({
            path: `/technology/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...PRODUCT_SLUGS.map((slug) => ({
            path: `/products/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...ARTICLES.map((a) => ({
            path: `/insights/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
