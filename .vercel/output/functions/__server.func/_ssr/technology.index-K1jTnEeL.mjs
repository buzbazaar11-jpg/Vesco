import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, i as ProcessFlow, n as NumberedCard, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology.index-K1jTnEeL.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const cards = tx("technology.cards") ?? [];
	const steps = tx("exosome.steps") ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("technology.eyebrow"),
			title: t("technology.title"),
			lead: t("pages.technologyIndex.lead"),
			image: molecular_default,
			imageAlt: t("exosome.imageAlt"),
			crumb: {
				label: t("nav.technology"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t("technology.eyebrow"),
			title: t("technology.title"),
			intro: t("technology.intro")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedCard, {
					num: c.num,
					title: c.title,
					body: c.body,
					to: "/technology/$slug",
					params: { slug: c.slug }
				})
			}, c.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: t("exosome.eyebrow"),
				title: t("exosome.processTitle"),
				intro: t("exosome.body2")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {
					steps,
					invert: true
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
