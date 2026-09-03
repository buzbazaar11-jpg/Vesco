import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { i as Route$4, p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-CKjyfp61.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route$4.useParams();
	const { t, tx } = useI18n();
	const category = (tx("products.categories") ?? []).find((c) => c.items.some((i) => i.slug === slug));
	const name = (category?.items.find((i) => i.slug === slug))?.name ?? slug.replace(/-/g, " ");
	const s = (k) => t(`products.detail.sections.${k}`);
	const rows = [
		{
			label: s("overview"),
			value: t("products.detail.genericOverview")
		},
		{
			label: s("source"),
			value: t("products.detail.genericSource")
		},
		{
			label: s("composition"),
			value: t("products.detail.genericComposition")
		},
		{
			label: s("process"),
			value: t("products.detail.genericProcess")
		},
		{
			label: s("specs"),
			value: t("products.detail.genericSpecs")
		},
		{
			label: s("qualityParams"),
			value: t("products.detail.genericQuality")
		},
		{
			label: s("storage"),
			value: t("products.detail.genericStorage")
		},
		{
			label: s("packaging"),
			value: t("products.detail.genericPackaging")
		},
		{
			label: s("application"),
			value: t("products.detail.genericApplication")
		},
		{
			label: s("formats"),
			value: t("products.detail.genericFormats")
		},
		{
			label: s("documentation"),
			value: t("products.detail.genericDocs")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: category?.title ?? t("products.eyebrow"),
			title: name,
			lead: t("products.detail.genericOverview"),
			crumb: {
				label: name,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("products.eyebrow"),
					title: s("overview")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid gap-px bg-hairline",
					children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 bg-card p-6 sm:grid-cols-[200px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-[0.95rem] leading-relaxed text-muted-foreground",
							children: r.value
						})]
					}, r.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-[0.85rem] text-muted-foreground",
					children: t("products.detail.demoNote")
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "card-flat sticky top-28 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[1.05rem] font-semibold text-navy",
						children: s("documentation")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: [
							"coa",
							"tds",
							"info",
							"sample"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "flex items-center justify-between border border-hairline px-5 py-3.5 text-[0.82rem] font-medium text-navy transition-colors hover:border-teal hover:text-science",
							children: [t(`products.detail.buttons.${b}`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-5 bg-teal" })]
						}, b))
					}),
					category ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-9 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science",
						children: category.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2",
						children: category.items.filter((i) => i.slug !== slug).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: i.slug },
							className: "text-[0.9rem] text-muted-foreground transition-colors hover:text-science",
							children: i.name
						}) }, i.slug))
					})] }) : null
				]
			}) })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
