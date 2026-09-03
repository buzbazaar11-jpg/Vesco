import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, o as Section, r as PageHero } from "./primitives-RiugzFh6.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
import { t as vials_default } from "./vials-CPfIHwza.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-CqocjwPp.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const categories = tx("products.categories") ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("products.eyebrow"),
			title: t("products.title"),
			lead: t("products.intro"),
			image: vials_default,
			imageAlt: t("facility.imageAlt"),
			crumb: {
				label: t("nav.products"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-14",
			children: categories.map((cat, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: ci * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[260px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
						children: String(ci + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-[1.5rem] font-semibold text-navy",
						children: cat.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px bg-hairline sm:grid-cols-2",
						children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: item.slug },
							className: "group flex items-center justify-between bg-card px-6 py-6 transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[1rem] font-medium text-navy group-hover:text-science",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" })]
						}, item.slug))
					})]
				})
			}, cat.key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-14 text-[0.85rem] text-muted-foreground",
			children: t("products.detail.demoNote")
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
