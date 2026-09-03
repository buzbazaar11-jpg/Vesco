import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, c as TealButton, i as ProcessFlow, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as cleanroom_default } from "./cleanroom-CQ-A4hT1.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { p as useI18n, r as Route$2 } from "./router-Bp76MIo6.mjs";
import { t as lyophilizer_default } from "./lyophilizer-Q9Swj7Dp.mjs";
import { t as vials_default } from "./vials-CPfIHwza.mjs";
import { t as exosome_default } from "./exosome-Ds4e84C9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/technology._slug-hqVgwR_U.js
var import_jsx_runtime = require_jsx_runtime();
var SLUG_IMAGES = {
	exosome: exosome_default,
	"pdrn-pn": molecular_default,
	lyophilization: lyophilizer_default,
	formulation: vials_default,
	"cold-chain": cleanroom_default,
	custom: cleanroom_default
};
function Page() {
	const { slug } = Route$2.useParams();
	const { t, tx } = useI18n();
	const cards = tx("technology.cards") ?? [];
	const card = cards.find((c) => c.slug === slug);
	const pageKey = slug === "pdrn-pn" ? "pages.pdrnPage" : slug === "lyophilization" ? "pages.lyoPage" : slug === "formulation" ? "pages.formulationPage" : null;
	const blocks = pageKey ? tx(`${pageKey}.blocks`) ?? [] : [];
	const isExosome = slug === "exosome";
	const groups = tx("characterization.groups") ?? [];
	const steps = tx("exosome.steps") ?? [];
	const title = pageKey ? t(`${pageKey}.title`) : isExosome ? t("exosome.title") : card?.title ?? slug;
	const lead = pageKey ? t(`${pageKey}.lead`) : isExosome ? t("pages.exosomePage.lead") : card?.body ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("technology.eyebrow"),
			title,
			lead,
			...SLUG_IMAGES[slug] ? { image: SLUG_IMAGES[slug] } : {},
			imageAlt: t("exosome.imageAlt"),
			crumb: {
				label: title,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		isExosome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("exosome.eyebrow"),
					title: t("exosome.title"),
					intro: t("exosome.body1")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[1.0625rem] leading-relaxed text-muted-foreground lg:pt-24",
					children: t("exosome.body2")
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				tone: "navy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					invert: true,
					eyebrow: t("exosome.eyebrow"),
					title: t("exosome.processTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {
						steps,
						invert: true
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				tone: "white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("characterization.eyebrow"),
					title: t("characterization.title"),
					intro: t("characterization.intro")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
					children: groups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full bg-card p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[1.05rem] font-semibold text-navy",
								children: g.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-[0.9rem] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), it]
								}, it))
							})]
						})
					}, g.title))
				})]
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t("technology.eyebrow"),
			title,
			intro: card?.body ?? t("technology.intro")
		}), blocks.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-8 md:grid-cols-3",
			children: blocks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 70,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-flat h-full p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[1.1rem] font-semibold text-navy",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[0.95rem] leading-relaxed text-muted-foreground",
						children: b.body
					})]
				})
			}, b.title))
		}) : null] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("technology.eyebrow"),
					title: t("technology.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: cards.filter((c) => c.slug !== slug).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/technology/$slug",
						params: { slug: c.slug },
						className: "group bg-card p-7 transition-colors hover:bg-card/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
							children: c.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-[1.02rem] font-semibold text-navy group-hover:text-science",
							children: c.title
						})]
					}, c.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/products",
						children: t("products.title")
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
