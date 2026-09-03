import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { d as ARTICLES, f as ARTICLE_CATEGORIES, p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-Bmf4bKha.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Layout() {
	if (useRouterState({ select: (s) => s.location.pathname }) !== "/insights") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Index, {});
}
function Index() {
	const { t } = useI18n();
	const [active, setActive] = (0, import_react.useState)(null);
	const shown = active ? ARTICLES.filter((a) => a.category === active) : ARTICLES;
	const chip = (on) => `rounded-sm border px-4 py-2 text-[0.78rem] font-medium transition-colors ${on ? "border-teal bg-teal text-[#05231f]" : "border-hairline text-navy hover:border-teal hover:text-science"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("insights.eyebrow"),
			title: t("insights.title"),
			lead: t("insights.intro"),
			image: molecular_default,
			imageAlt: t("exosome.imageAlt"),
			crumb: {
				label: t("insights.eyebrow"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("insights.eyebrow"),
				title: t("insights.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActive(null),
					className: chip(active === null),
					children: [
						t("common.viewAll"),
						" (",
						ARTICLES.length,
						")"
					]
				}), ARTICLE_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActive(c),
					className: chip(active === c),
					children: c
				}, c))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: shown.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 6 * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/insights/$slug",
						params: { slug: a.slug },
						className: "card-flat group flex h-full flex-col p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
								children: a.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-[1.15rem] leading-snug font-semibold text-navy",
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 flex-1 text-[0.93rem] leading-relaxed text-muted-foreground",
								children: a.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-7 inline-flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-science",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" }), t("common.readMore")]
							})
						]
					})
				}, a.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-[0.85rem] text-muted-foreground",
				children: t("insights.note")
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Layout as component };
