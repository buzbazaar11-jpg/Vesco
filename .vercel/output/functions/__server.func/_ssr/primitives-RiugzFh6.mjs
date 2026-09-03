import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-RiugzFh6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Fade/slide-in on scroll. */
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					el.dataset["visible"] = "true";
					io.unobserve(el);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Section({ children, className = "", tone = "canvas", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `relative ${{
			canvas: "bg-background text-foreground",
			white: "bg-card text-foreground",
			muted: "bg-secondary text-foreground",
			navy: "bg-navy text-white"
		}[tone]} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
			children
		})
	});
}
function Eyebrow({ children, invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `eyebrow ${invert ? "!text-teal" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-px w-8 align-middle bg-current opacity-50" }), children]
	});
}
function SectionHeading({ eyebrow, title, intro, invert = false, align = "left", className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`,
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				invert,
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold ${invert ? "text-white" : "text-navy"}`,
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-5 text-[1.0625rem] leading-relaxed ${invert ? "text-white/70" : "text-muted-foreground"}`,
				children: intro
			}) : null
		]
	});
}
function PageHero({ eyebrow, title, lead, image, imageAlt, crumb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative isolate overflow-hidden bg-navy-deep",
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt ?? "",
				className: "absolute inset-0 h-full w-full object-cover opacity-30",
				loading: "eager"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy/40" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1240px] px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "mb-8 text-[0.8rem] text-white/45",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "transition-colors hover:text-teal",
								children: crumb.homeLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2 text-white/25",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/75",
								children: crumb.label
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						invert: true,
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 max-w-4xl text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.06] font-semibold text-white",
						children: title
					}),
					lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70",
						children: lead
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent" })
		]
	});
}
function NumberedCard({ num, title, body, to, params }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-flat group flex h-full flex-col p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-[0.8rem] font-bold tracking-[0.18em] text-teal",
				children: num
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-[1.2rem] font-semibold text-navy",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground",
				children: body
			}),
			to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-7 inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.12em] uppercase text-science",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-teal transition-all duration-500 group-hover:w-10" }), "Detail"]
			}) : null
		]
	});
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		params,
		className: "block h-full",
		children: inner
	});
	return inner;
}
function ProcessFlow({ steps, invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-px sm:grid-cols-2 lg:grid-cols-5",
		children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: `relative p-6 ${invert ? "bg-white/[0.04] outline outline-white/10" : "bg-card outline outline-hairline"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `font-display text-[0.72rem] font-bold tracking-[0.18em] ${invert ? "text-teal" : "text-science"}`,
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 text-[0.9rem] leading-snug font-medium ${invert ? "text-white/85" : "text-navy"}`,
				children: step
			})]
		}, step))
	});
}
function TealButton({ to, params, children, variant = "solid" }) {
	const styles = {
		solid: "bg-teal text-[#05231f] hover:bg-teal/85",
		outline: "border border-navy/25 text-navy hover:border-teal hover:text-science",
		ghost: "border border-white/25 text-white hover:border-teal hover:text-teal"
	}[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		params,
		className: `inline-flex items-center gap-3 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${styles}`,
		children
	});
}
//#endregion
export { Reveal as a, TealButton as c, ProcessFlow as i, NumberedCard as n, Section as o, PageHero as r, SectionHeading as s, Eyebrow as t };
