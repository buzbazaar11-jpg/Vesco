import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, c as TealButton } from "./primitives-RiugzFh6.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTABand-CoQ4ZL9f.js
var import_jsx_runtime = require_jsx_runtime();
function CTABand() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl",
				style: { background: "radial-gradient(circle,rgba(53,184,176,0.28),transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold text-white",
						children: t("cta.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65",
						children: t("cta.body")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 lg:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/contact",
							children: t("cta.primary")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/oem",
							variant: "ghost",
							children: t("cta.secondary")
						})]
					})]
				}) })
			})
		]
	});
}
//#endregion
export { CTABand as t };
