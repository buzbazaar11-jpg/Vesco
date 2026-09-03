import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, i as ProcessFlow, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
import { t as vials_default } from "./vials-CPfIHwza.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/facility-vFfw3D2i.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const areas = tx("facility.areas") ?? [];
	const flow = tx("quality.flow") ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("facility.eyebrow"),
			title: t("facility.title"),
			lead: t("facility.intro"),
			image: vials_default,
			imageAlt: t("facility.imageAlt"),
			crumb: {
				label: t("facility.eyebrow"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
			children: areas.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full bg-card p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-[1.1rem] font-semibold text-navy",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.92rem] leading-relaxed text-muted-foreground",
							children: a.body
						})
					]
				})
			}, a.title))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: t("quality.eyebrow"),
				title: t("quality.title"),
				intro: t("quality.intro")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {
					steps: flow,
					invert: true
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
