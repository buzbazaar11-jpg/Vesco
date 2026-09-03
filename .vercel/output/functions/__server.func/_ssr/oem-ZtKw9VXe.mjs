import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, c as TealButton, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as cleanroom_default } from "./cleanroom-CQ-A4hT1.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
import { t as documents_default } from "./documents-kKQdw5IX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/oem-ZtKw9VXe.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const oemSteps = tx("oem.oemSteps") ?? [];
	const odmSteps = tx("oem.odmSteps") ?? [];
	const process = tx("oem.process") ?? [];
	const inputs = tx("oem.custom.inputs") ?? [];
	const privatePoints = tx("privateLabel.points") ?? [];
	const regPoints = tx("regulatorySupport.points") ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("oem.eyebrow"),
			title: t("oem.title"),
			lead: t("oem.subtitle"),
			image: cleanroom_default,
			imageAlt: t("intro.imageAlt"),
			crumb: {
				label: t("nav.oem"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "models",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-hairline lg:grid-cols-2",
				children: [{
					title: t("oem.oemTitle"),
					body: t("oem.oemBody"),
					steps: oemSteps
				}, {
					title: t("oem.odmTitle"),
					body: t("oem.odmBody"),
					steps: odmSteps
				}].map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full bg-card p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-[1.6rem] font-semibold text-navy",
								children: col.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
								children: col.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 grid gap-3",
								children: col.steps.map((s, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-4 border-b border-hairline pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.72rem] font-bold tracking-[0.16em] text-teal",
										children: String(si + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.95rem] text-navy",
										children: s
									})]
								}, s))
							})
						]
					})
				}, col.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "process",
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: t("oem.processEyebrow"),
				title: t("oem.processTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-14 relative grid gap-px md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "pointer-events-none absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-teal/60 via-teal/25 to-transparent md:hidden"
				}), process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative h-full bg-white/[0.04] p-7 pl-16 outline outline-white/10 md:pl-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-7 left-4 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-teal/50 bg-navy-deep font-display text-[0.65rem] font-bold text-teal md:static md:mb-4 md:flex",
								children: p.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[1.05rem] font-semibold text-white md:mt-4",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.9rem] leading-relaxed text-white/60",
								children: p.body
							}),
							i < process.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "absolute right-0 bottom-7 hidden h-px w-6 bg-teal/40 md:block"
							}) : null
						]
					})
				}, p.num))]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "custom-formulation",
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("oem.custom.eyebrow"),
					title: t("oem.custom.title"),
					intro: t("oem.custom.intro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: inputs.map((inp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card px-6 py-5 text-[0.95rem] text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), inp]
					}, inp))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/custom-development",
						children: t("oem.custom.cta")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/contact",
						variant: "outline",
						children: t("nav.cta")
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "private-label",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("privateLabel.eyebrow"),
					title: t("privateLabel.title"),
					intro: t("privateLabel.intro")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-px bg-hairline",
					children: privatePoints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-card px-6 py-4 text-[0.95rem] text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), p]
					}, p))
				})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: documents_default,
						alt: t("privateLabel.title"),
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			id: "regulatory",
			tone: "navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					invert: true,
					eyebrow: t("regulatorySupport.eyebrow"),
					title: t("regulatorySupport.title"),
					intro: t("regulatorySupport.intro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3",
					children: regPoints.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full bg-white/[0.04] p-6 outline outline-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.95rem] text-white/85",
								children: p
							})]
						})
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 max-w-3xl text-[0.85rem] text-white/50",
					children: t("regulatorySupport.note")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
