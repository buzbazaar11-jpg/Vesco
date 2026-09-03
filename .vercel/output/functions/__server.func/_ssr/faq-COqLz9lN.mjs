import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as qc_lab_default } from "./qc-lab-BtsOlEPe.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { t as ChevronDown } from "../_libs/lucide-react.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-COqLz9lN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const categories = tx("faq.categories") ?? [];
	const [open, setOpen] = (0, import_react.useState)("0-0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("faq.eyebrow"),
			title: t("faq.title"),
			lead: t("faq.intro"),
			image: qc_lab_default,
			imageAlt: t("faq.title"),
			crumb: {
				label: t("nav.faq"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[0.8fr_2.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("faq.eyebrow"),
				title: t("faq.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-12",
				children: categories.map((cat, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[0.72rem] font-bold tracking-[0.2em] text-science uppercase",
					children: cat.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 border-t border-hairline",
					children: cat.items.map((item, ii) => {
						const id = `${ci}-${ii}`;
						const isOpen = open === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": isOpen,
								onClick: () => setOpen(isOpen ? null : id),
								className: "flex w-full items-start justify-between gap-6 py-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[1rem] font-semibold text-navy",
									children: item.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `mt-1 h-4 w-4 shrink-0 text-science transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid transition-all duration-400 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "overflow-hidden pr-10 text-[0.95rem] leading-relaxed text-muted-foreground",
									children: item.a
								})
							})]
						}, item.q);
					})
				})] }, cat.title))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
