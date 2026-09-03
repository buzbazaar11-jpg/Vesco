import "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
/** Renders a page-builder block list as the live page body. */
function BlockList({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl px-6 py-16",
		children: blocks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block: b }, b.id))
	});
}
function BlockView({ block }) {
	switch (block.type) {
		case "heading": {
			const level = block.level ?? 2;
			const sizes = {
				1: "text-[clamp(2rem,4vw,3.5rem)] leading-[1.06] font-semibold",
				2: "text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] font-semibold",
				3: "text-[1.4rem] font-semibold leading-snug",
				4: "text-[1.15rem] font-semibold"
			};
			const cls = `mt-10 ${sizes[level] ?? sizes[2]} ${block.align === "center" ? "text-center" : block.align === "right" ? "text-right" : ""}`;
			const style = {
				color: block.color ?? void 0,
				fontSize: block.fontSize ?? void 0
			};
			if (level === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: cls,
				style,
				children: block.text
			});
			if (level === 3) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cls,
				style,
				children: block.text
			});
			if (level === 4) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: cls,
				style,
				children: block.text
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cls,
				style,
				children: block.text
			});
		}
		case "text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `mt-5 whitespace-pre-wrap text-[1rem] leading-relaxed text-muted-foreground ${block.align === "center" ? "text-center" : block.align === "right" ? "text-right" : ""}`,
			style: {
				color: block.color ?? void 0,
				fontSize: block.fontSize ?? void 0
			},
			children: block.text
		});
		case "richtext": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 prose prose-navy max-w-none",
			dangerouslySetInnerHTML: { __html: block.html }
		});
		case "image": return block.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: `mt-8 ${block.width === "full" ? "w-full" : block.width === "half" ? "w-1/2 mx-auto" : "w-full"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: block.url,
				alt: block.alt ?? "",
				loading: "lazy",
				className: `w-full object-cover border border-hairline ${block.radius === "none" ? "" : block.radius === "lg" ? "rounded-xl" : "rounded-sm"}`
			}), block.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-2 text-center text-xs text-muted-foreground",
				children: block.caption
			})]
		}) : null;
		case "button": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-8 ${block.align === "center" ? "text-center" : block.align === "right" ? "text-right" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: block.href || "#",
				className: `inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all ${block.variant === "outline" ? "border border-navy/25 text-navy hover:border-teal hover:text-science" : block.variant === "ghost" ? "border border-white/25 text-white hover:border-teal hover:text-teal" : "bg-teal text-[#05231f] hover:bg-teal/85"}`,
				children: block.label
			})
		});
		case "divider":
			if (block.style === "dots") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex justify-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-hairline" })
				]
			});
			if (block.style === "space") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				style: { height: block.spacing ?? "2rem" }
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "mt-10 border-hairline" });
		case "spacer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: block.height || "3rem" } });
		case "columns": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-8 grid gap-${block.gap ?? "8"} md:grid-cols-${(block.cols ?? []).length}`,
			children: (block.cols ?? []).map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: col.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block: b }, b.id)) }, i))
		});
		case "card": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 border border-hairline bg-card p-8",
			children: [
				block.num && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[0.8rem] font-bold tracking-[0.18em] text-teal",
					children: block.num
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-[1.2rem] font-semibold text-navy",
					children: block.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
					children: block.body
				})
			]
		});
		case "hero": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-8 isolate overflow-hidden bg-navy min-h-[50vh] flex items-center",
			children: [
				block.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: block.imageUrl,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative px-10 py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[clamp(2rem,5vw,4rem)] font-semibold text-white",
							children: block.heading
						}),
						block.subheading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[1.2rem] text-teal",
							children: block.subheading
						}),
						block.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-[1rem] text-white/70",
							children: block.body
						}),
						block.ctaLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: block.ctaHref ?? "#",
							className: "mt-8 inline-flex bg-teal px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]",
							children: block.ctaLabel
						})
					]
				})
			]
		});
		case "stats": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
			children: (block.items ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
					children: item.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-2xl font-semibold text-navy",
					children: item.value
				})]
			}, item.label))
		});
		case "list": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: `mt-5 space-y-2 ${block.style === "numbered" ? "list-decimal pl-5" : block.style === "check" ? "" : "list-disc pl-5"}`,
			children: (block.items ?? []).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: `text-[0.95rem] text-muted-foreground ${block.style === "check" ? "flex items-start gap-2" : ""}`,
				children: [block.style === "check" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 text-teal flex-shrink-0",
					children: "✓"
				}), item]
			}, i))
		});
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "mt-8 border-l-4 border-teal pl-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[1.1rem] italic text-navy",
				children: [
					"\"",
					block.text,
					"\""
				]
			}), block.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-3 text-sm text-muted-foreground",
				children: ["— ", block.author]
			})]
		});
		case "badge": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 flex flex-wrap gap-2",
			children: (block.items ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "border border-hairline bg-card px-3.5 py-2 text-[0.78rem] font-medium text-navy",
				style: { borderColor: block.color ?? void 0 },
				children: item
			}, item))
		});
		case "accordion": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 divide-y divide-hairline border border-hairline",
			children: (block.items ?? []).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group px-6 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer list-none font-semibold text-navy group-open:text-science",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
					children: item.a
				})]
			}, i))
		});
		case "gallery": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-8 grid gap-2 grid-cols-${block.cols ?? 3}`,
			children: (block.images ?? []).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img.url,
				alt: img.alt ?? "",
				loading: "lazy",
				className: "aspect-square w-full object-cover"
			}, i))
		});
		case "cta": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mt-8 p-10 ${block.dark ? "bg-navy text-white" : "bg-teal/10 text-navy"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: `text-[1.6rem] font-semibold ${block.dark ? "text-white" : "text-navy"}`,
					children: block.heading
				}),
				block.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-3 text-[1rem] ${block.dark ? "text-white/70" : "text-muted-foreground"}`,
					children: block.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: block.primaryHref || "#",
						className: "inline-flex bg-teal px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]",
						children: block.primaryLabel
					}), block.secondaryLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: block.secondaryHref || "#",
						className: `inline-flex border px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] ${block.dark ? "border-white/30 text-white" : "border-navy/25 text-navy"}`,
						children: block.secondaryLabel
					})]
				})
			]
		});
		case "section_header": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mt-12 ${block.align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`,
			children: [
				block.eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-science",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-px w-8 align-middle bg-current opacity-50" }), block.eyebrow]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] font-semibold text-navy",
					children: block.title
				}),
				block.intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground",
					children: block.intro
				})
			]
		});
		case "video": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 aspect-video w-full overflow-hidden bg-black",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: block.url,
				className: "h-full w-full",
				allowFullScreen: true,
				title: "video"
			}), block.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-xs text-muted-foreground",
				children: block.caption
			})]
		});
		case "embed": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			dangerouslySetInnerHTML: { __html: block.html }
		});
		case "raw_html": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			dangerouslySetInnerHTML: { __html: block.html }
		});
		default: return null;
	}
}
//#endregion
export { BlockView as n, BlockList as t };
