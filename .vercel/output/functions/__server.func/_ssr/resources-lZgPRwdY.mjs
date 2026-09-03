import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
import { t as documents_default } from "./documents-kKQdw5IX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-lZgPRwdY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const docs = tx("resources.docs") ?? [];
	const [modal, setModal] = (0, import_react.useState)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	const close = () => {
		setModal(null);
		setSent(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("resources.eyebrow"),
			title: t("resources.title"),
			lead: t("resources.intro"),
			image: documents_default,
			imageAlt: t("resources.title"),
			crumb: {
				label: t("nav.resources"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("resources.eyebrow"),
				title: t("resources.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2",
				children: docs.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `inline-flex w-fit rounded-sm px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] uppercase ${d.restricted ? "bg-navy/10 text-navy" : "bg-teal/15 text-science"}`,
								children: d.restricted ? t("resources.restricted") : t("resources.open")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-[1.15rem] font-semibold text-navy",
								children: d.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.85rem] text-muted-foreground",
								children: d.meta
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setModal(d.title),
								className: "mt-8 inline-flex w-fit items-center gap-3 rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
								children: d.restricted ? t("common.requestAccess") : t("common.download")
							})
						]
					})
				}, d.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-[0.85rem] text-muted-foreground",
				children: t("resources.demoNote")
			})
		] }),
		modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-6 backdrop-blur-sm",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": t("resources.modal.title"),
			onClick: close,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-md border border-hairline bg-card p-8 shadow-2xl",
				onClick: (e) => e.stopPropagation(),
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[1.2rem] font-semibold text-navy",
					children: t("resources.modal.success")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: close,
					className: "mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]",
					children: t("resources.modal.cancel")
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: modal
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-[1.25rem] font-semibold text-navy",
							children: t("resources.modal.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[0.9rem] leading-relaxed text-muted-foreground",
							children: t("resources.modal.body")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-4",
							children: [
								{
									k: "name",
									type: "text"
								},
								{
									k: "company",
									type: "text"
								},
								{
									k: "email",
									type: "email"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70",
									children: t(`resources.modal.${f.k}`)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: f.type,
									className: "border border-hairline bg-background px-4 py-3 text-[0.95rem] text-navy outline-none focus:border-teal"
								})]
							}, f.k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]",
								children: t("resources.modal.send")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: close,
								className: "rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-navy",
								children: t("resources.modal.cancel")
							})]
						})
					]
				})
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
