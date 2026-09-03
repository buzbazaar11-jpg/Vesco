import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
import { n as getPublicUrl, r as newId, t as STORAGE_BUCKET } from "./admin-aM2QihXk.mjs";
import { n as Route } from "./router-Bp76MIo6.mjs";
import { n as BlockView } from "./Blocks-CpeeoQOq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.pages._id-DfCyfyHj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* admin.pages.$id.tsx
*
* Full visual page builder — Elementor-style.
* Features:
*   • 21 block types with full CRUD (add / edit / duplicate / delete / reorder)
*   • Drag-and-drop block reordering
*   • Inline image picker (loads from Supabase "images" bucket)
*   • Inline video upload + URL embed
*   • Draft / Publish / Unpublish
*   • Desktop / Tablet / Mobile canvas preview
*   • Auto-save option
*   • Live preview link (published pages only)
*/
var PALETTE = [
	{
		type: "section_header",
		icon: "H1",
		label: "Section Header",
		cat: "Text"
	},
	{
		type: "heading",
		icon: "H",
		label: "Heading",
		cat: "Text"
	},
	{
		type: "text",
		icon: "P",
		label: "Paragraph",
		cat: "Text"
	},
	{
		type: "richtext",
		icon: "RT",
		label: "Rich Text",
		cat: "Text"
	},
	{
		type: "quote",
		icon: "Q",
		label: "Quote",
		cat: "Text"
	},
	{
		type: "list",
		icon: "LI",
		label: "List",
		cat: "Text"
	},
	{
		type: "badge",
		icon: "#",
		label: "Tags",
		cat: "Text"
	},
	{
		type: "image",
		icon: "IMG",
		label: "Image",
		cat: "Media"
	},
	{
		type: "gallery",
		icon: "GAL",
		label: "Gallery",
		cat: "Media"
	},
	{
		type: "video",
		icon: "VID",
		label: "Video",
		cat: "Media"
	},
	{
		type: "embed",
		icon: "<>",
		label: "HTML Embed",
		cat: "Media"
	},
	{
		type: "columns",
		icon: "||",
		label: "2 Columns",
		cat: "Layout"
	},
	{
		type: "card",
		icon: "[]",
		label: "Card",
		cat: "Layout"
	},
	{
		type: "stats",
		icon: "##",
		label: "Stats",
		cat: "Layout"
	},
	{
		type: "spacer",
		icon: "--",
		label: "Spacer",
		cat: "Layout"
	},
	{
		type: "divider",
		icon: "HR",
		label: "Divider",
		cat: "Layout"
	},
	{
		type: "hero",
		icon: "HB",
		label: "Hero Banner",
		cat: "Sections"
	},
	{
		type: "cta",
		icon: "CTA",
		label: "CTA Banner",
		cat: "Sections"
	},
	{
		type: "accordion",
		icon: "FAQ",
		label: "Accordion",
		cat: "Sections"
	},
	{
		type: "button",
		icon: "BTN",
		label: "Button",
		cat: "Sections"
	},
	{
		type: "raw_html",
		icon: "{}",
		label: "Raw HTML",
		cat: "Sections"
	}
];
var CATS = [
	"Text",
	"Media",
	"Layout",
	"Sections"
];
function mkBlock(type) {
	const id = newId();
	switch (type) {
		case "section_header": return {
			id,
			type,
			eyebrow: "Label",
			title: "Section Title",
			intro: "Intro text.",
			align: "left"
		};
		case "heading": return {
			id,
			type,
			text: "New Heading",
			level: 2,
			align: "left"
		};
		case "text": return {
			id,
			type,
			text: "Write your paragraph here.",
			align: "left"
		};
		case "richtext": return {
			id,
			type,
			html: "<p>Write your content.</p>"
		};
		case "image": return {
			id,
			type,
			url: "",
			alt: "",
			caption: ""
		};
		case "button": return {
			id,
			type,
			label: "Learn More",
			href: "/",
			variant: "solid",
			align: "left"
		};
		case "divider": return {
			id,
			type,
			style: "line"
		};
		case "spacer": return {
			id,
			type,
			height: "3rem"
		};
		case "columns": return {
			id,
			type,
			cols: [[mkBlock("heading")], [mkBlock("text")]],
			gap: "8"
		};
		case "card": return {
			id,
			type,
			num: "01",
			title: "Card Title",
			body: "Card body text."
		};
		case "hero": return {
			id,
			type,
			heading: "Hero Heading",
			subheading: "Subheading",
			body: "Hero body text.",
			ctaLabel: "Get Started",
			ctaHref: "/"
		};
		case "stats": return {
			id,
			type,
			items: [{
				label: "Metric",
				value: "100+"
			}, {
				label: "Metric",
				value: "50+"
			}]
		};
		case "list": return {
			id,
			type,
			items: [
				"Item one",
				"Item two",
				"Item three"
			],
			style: "bullet"
		};
		case "video": return {
			id,
			type,
			url: ""
		};
		case "embed": return {
			id,
			type,
			html: ""
		};
		case "quote": return {
			id,
			type,
			text: "A powerful quote.",
			author: "Author"
		};
		case "badge": return {
			id,
			type,
			items: [
				"Tag 1",
				"Tag 2",
				"Tag 3"
			]
		};
		case "accordion": return {
			id,
			type,
			items: [{
				q: "Question?",
				a: "Answer."
			}]
		};
		case "gallery": return {
			id,
			type,
			images: [],
			cols: 3
		};
		case "cta": return {
			id,
			type,
			heading: "Ready to get started?",
			body: "Let us help.",
			primaryLabel: "Contact Us",
			primaryHref: "/contact",
			dark: true
		};
		case "raw_html": return {
			id,
			type,
			html: "<div></div>"
		};
		default: return {
			id,
			type: "text",
			text: "Block"
		};
	}
}
function ImagePicker({ onSelect, onClose }) {
	const qc = useQueryClient();
	const [tab, setTab] = (0, import_react.useState)("library");
	const [search, setSearch] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [upMsg, setUpMsg] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	const q = useQuery({
		queryKey: [
			"admin",
			"media",
			STORAGE_BUCKET
		],
		queryFn: async () => {
			const { data, error } = await supabase.storage.from(STORAGE_BUCKET).list("", {
				limit: 500,
				sortBy: {
					column: "created_at",
					order: "desc"
				}
			});
			if (error) throw error;
			return (data ?? []).filter((f) => f.name !== ".emptyFolderPlaceholder" && /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(f.name)).map((f) => ({
				name: f.name,
				url: getPublicUrl(f.name)
			}));
		},
		staleTime: 3e4
	});
	const upload = async (file) => {
		setBusy(true);
		setUpMsg(null);
		try {
			const safe = `${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
			const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(safe, file, {
				cacheControl: "31536000",
				upsert: false
			});
			if (error) throw error;
			const url = getPublicUrl(safe);
			qc.invalidateQueries({ queryKey: [
				"admin",
				"media",
				STORAGE_BUCKET
			] });
			onSelect(url);
			onClose();
		} catch (e) {
			setUpMsg(e.message);
		} finally {
			setBusy(false);
		}
	};
	const filtered = (q.data ?? []).filter((f) => !search || f.name.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-hairline bg-white shadow-2xl",
			style: { maxHeight: "85vh" },
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-shrink-0 items-center justify-between border-b border-hairline bg-card px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-navy",
						children: "Choose Image"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Bucket: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "rounded bg-navy/10 px-1 font-mono",
								children: STORAGE_BUCKET
							}),
							" · Public URLs"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "text-xl leading-none text-muted-foreground hover:text-navy",
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-shrink-0 gap-1 border-b border-hairline bg-card px-5 pt-2",
					children: ["library", "upload"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTab(t),
						className: `pb-2 px-3 text-xs font-semibold uppercase tracking-wide transition-colors border-b-2 ${tab === t ? "border-teal text-navy" : "border-transparent text-muted-foreground hover:text-navy"}`,
						children: t === "library" ? "Image Library" : "Upload New"
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-4",
					children: tab === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search images…",
						className: "mb-4 w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal"
					}), q.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-8 text-center text-sm text-muted-foreground",
						children: "Loading…"
					}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: search ? "No matches." : `No images in "${STORAGE_BUCKET}" yet.`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTab("upload"),
							className: "mt-3 text-xs font-semibold text-science hover:underline",
							children: "Upload one →"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5",
						children: filtered.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								onSelect(img.url);
								onClose();
							},
							title: img.name,
							className: "group relative aspect-square overflow-hidden rounded border border-hairline hover:border-teal hover:ring-2 hover:ring-teal/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img.url,
								alt: img.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 bg-black/50 p-1 opacity-0 transition-opacity group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[0.55rem] text-white",
									children: img.name
								})
							})]
						}, img.url))
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex cursor-pointer flex-col items-center gap-4 rounded-sm border-2 border-dashed border-hairline p-12 text-center hover:border-teal",
						onClick: () => fileRef.current?.click(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl opacity-30",
								children: "📁"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-navy",
								children: "Click to choose an image"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "PNG, JPG, GIF, WebP, SVG"
							})] }),
							busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-science animate-pulse",
								children: "Uploading…"
							}),
							upMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-destructive",
								children: upMsg
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "image/*",
								className: "hidden",
								onChange: (e) => {
									const f = e.target.files?.[0];
									if (f) upload(f);
								}
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-shrink-0 border-t border-hairline bg-card px-5 py-2.5 text-xs text-muted-foreground",
					children: [
						"Images use permanent public URLs from ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: STORAGE_BUCKET }),
						" — they load immediately on the public site."
					]
				})
			]
		})
	});
}
function VideoUploader({ onUrl }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	const upload = async (file) => {
		setBusy(true);
		setMsg(null);
		try {
			const safe = `${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
			const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(safe, file, {
				cacheControl: "31536000",
				upsert: false
			});
			if (error) throw error;
			onUrl(getPublicUrl(safe));
			setMsg("Uploaded!");
		} catch (e) {
			setMsg(e.message);
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
				children: "Upload video file"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex cursor-pointer items-center gap-2 rounded border border-hairline px-3 py-2 text-xs text-muted-foreground hover:border-teal",
				children: [busy ? "Uploading…" : "Choose video file (MP4, MOV…)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileRef,
					type: "file",
					accept: "video/*",
					className: "hidden",
					onChange: (e) => {
						const f = e.target.files?.[0];
						if (f) upload(f);
					}
				})]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-science",
				children: msg
			})
		]
	});
}
function F({ label, value, onChange, placeholder, area, rows }) {
	const cls = "w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
			children: label
		}), area ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			rows: rows ?? 3,
			className: `${cls} resize-y`
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: cls
		})]
	});
}
function Sel({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))
		})]
	});
}
function Chk({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex cursor-pointer items-center gap-2 text-xs font-medium text-navy",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			onChange: (e) => onChange(e.target.checked),
			className: "accent-teal"
		}), label]
	});
}
function ColourF({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "color",
					value: value || "#1a2a4a",
					onChange: (e) => onChange(e.target.value),
					className: "h-8 w-10 cursor-pointer rounded border border-hairline p-0.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value,
					onChange: (e) => onChange(e.target.value),
					placeholder: "#hex or empty",
					className: "flex-1 border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal"
				}),
				value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(""),
					className: "text-xs text-muted-foreground",
					children: "✕"
				})
			]
		})]
	});
}
function BlockEditor({ block, onChange, onDelete, onDuplicate }) {
	const [picker, setPicker] = (0, import_react.useState)(null);
	const [pickerCtx, setPickerCtx] = (0, import_react.useState)("url");
	const openPicker = (ctx) => {
		setPickerCtx(ctx);
		setPicker(ctx);
	};
	const handlePick = (url) => {
		if (pickerCtx === "gallery_add") onChange({ images: [...block.images ?? [], {
			url,
			alt: ""
		}] });
		else onChange({ [pickerCtx]: url });
		setPicker(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-hairline pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-science",
					children: block.type.replace(/_/g, " ")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onDuplicate,
						title: "Duplicate",
						className: "rounded border border-hairline px-2 py-1 text-[0.6rem] text-navy hover:bg-navy/5",
						children: "⎘"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onDelete,
						title: "Delete",
						className: "rounded border border-destructive/30 px-2 py-1 text-[0.6rem] text-destructive hover:bg-destructive/5",
						children: "✕"
					})]
				})]
			}),
			(block.type === "heading" || block.type === "text") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Content",
					value: block.text,
					onChange: (v) => onChange({ text: v }),
					area: true,
					rows: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
					label: "Alignment",
					value: block.align ?? "left",
					options: [
						"left",
						"center",
						"right"
					],
					onChange: (v) => onChange({ align: v })
				}),
				block.type === "heading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
					label: "Level (H1–H4)",
					value: String(block.level ?? 2),
					options: [
						"1",
						"2",
						"3",
						"4"
					],
					onChange: (v) => onChange({ level: Number(v) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColourF, {
					label: "Colour",
					value: block.color ?? "",
					onChange: (v) => onChange({ color: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Font size (CSS)",
					value: block.fontSize ?? "",
					onChange: (v) => onChange({ fontSize: v }),
					placeholder: "e.g. 1.5rem"
				})
			] }),
			block.type === "richtext" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "HTML content",
				value: block.html,
				onChange: (v) => onChange({ html: v }),
				area: true,
				rows: 10,
				placeholder: "<p>…</p>"
			}),
			block.type === "image" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				block.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded border border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: block.url,
						alt: "",
						className: "max-h-36 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange({ url: "" }),
						className: "absolute right-1 top-1 rounded-full bg-destructive/80 px-1.5 py-0.5 text-[0.55rem] font-bold text-white",
						children: "✕"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => openPicker("url"),
					className: "w-full rounded-sm bg-teal py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#05231f]",
					children: "🖼 Choose from Library"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[0.62rem] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 border-t border-hairline" }),
						" or paste URL ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 border-t border-hairline" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Image URL",
					value: block.url,
					onChange: (v) => onChange({ url: v }),
					placeholder: "https://…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Alt text",
					value: block.alt ?? "",
					onChange: (v) => onChange({ alt: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Caption",
					value: block.caption ?? "",
					onChange: (v) => onChange({ caption: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
					label: "Width",
					value: block.width ?? "full",
					options: ["full", "half"],
					onChange: (v) => onChange({ width: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
					label: "Radius",
					value: block.radius ?? "sm",
					options: [
						"none",
						"sm",
						"lg"
					],
					onChange: (v) => onChange({ radius: v })
				})
			] }),
			block.type === "hero" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Heading",
					value: block.heading,
					onChange: (v) => onChange({ heading: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Subheading",
					value: block.subheading ?? "",
					onChange: (v) => onChange({ subheading: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Body text",
					value: block.body ?? "",
					onChange: (v) => onChange({ body: v }),
					area: true
				}),
				block.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded border border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: block.imageUrl,
						alt: "",
						className: "max-h-20 w-full object-cover opacity-70"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange({ imageUrl: "" }),
						className: "absolute right-1 top-1 rounded-full bg-destructive/80 px-1.5 py-0.5 text-[0.55rem] font-bold text-white",
						children: "✕"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => openPicker("imageUrl"),
					className: "w-full rounded-sm border border-teal/50 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-science hover:bg-teal/5",
					children: "🖼 Choose Background Image"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Background URL",
					value: block.imageUrl ?? "",
					onChange: (v) => onChange({ imageUrl: v }),
					placeholder: "or paste…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "CTA label",
					value: block.ctaLabel ?? "",
					onChange: (v) => onChange({ ctaLabel: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "CTA URL",
					value: block.ctaHref ?? "",
					onChange: (v) => onChange({ ctaHref: v })
				})
			] }),
			block.type === "gallery" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
				label: "Columns",
				value: String(block.cols ?? 3),
				options: [
					"2",
					"3",
					"4"
				],
				onChange: (v) => onChange({ cols: Number(v) })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
							children: [
								"Images (",
								(block.images ?? []).length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => openPicker("gallery_add"),
							className: "rounded-sm bg-teal px-3 py-1 text-[0.6rem] font-semibold uppercase text-[#05231f]",
							children: "+ Add from library"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-1.5",
						children: (block.images ?? []).map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative aspect-square overflow-hidden rounded border border-hairline",
							children: [img.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img.url,
								alt: img.alt ?? "",
								className: "h-full w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full w-full items-center justify-center text-[0.6rem] text-muted-foreground",
								children: "?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									onChange({ images: (block.images ?? []).filter((_, j) => j !== i) });
								},
								className: "absolute right-0.5 top-0.5 rounded-full bg-destructive/80 px-1 py-0.5 text-[0.5rem] font-bold text-white opacity-0 group-hover:opacity-100",
								children: "✕"
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "Paste image URL + Enter",
						className: "w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal",
						onKeyDown: (e) => {
							if (e.key === "Enter") {
								const url = e.target.value.trim();
								if (url) {
									onChange({ images: [...block.images ?? [], {
										url,
										alt: ""
									}] });
									e.target.value = "";
								}
							}
						}
					})
				]
			})] }),
			block.type === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Number / icon",
					value: block.num ?? "",
					onChange: (v) => onChange({ num: v }),
					placeholder: "01"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Title",
					value: block.title,
					onChange: (v) => onChange({ title: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Body",
					value: block.body,
					onChange: (v) => onChange({ body: v }),
					area: true
				})
			] }),
			block.type === "button" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Label",
					value: block.label,
					onChange: (v) => onChange({ label: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "URL / path",
					value: block.href,
					onChange: (v) => onChange({ href: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
					label: "Style",
					value: block.variant ?? "solid",
					options: [
						"solid",
						"outline",
						"ghost"
					],
					onChange: (v) => onChange({ variant: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
					label: "Alignment",
					value: block.align ?? "left",
					options: [
						"left",
						"center",
						"right"
					],
					onChange: (v) => onChange({ align: v })
				})
			] }),
			block.type === "divider" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
				label: "Style",
				value: block.style ?? "line",
				options: [
					"line",
					"dots",
					"space"
				],
				onChange: (v) => onChange({ style: v })
			}), block.style === "space" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "Height (CSS)",
				value: block.spacing ?? "",
				onChange: (v) => onChange({ spacing: v }),
				placeholder: "2rem"
			})] }),
			block.type === "spacer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "Height (CSS)",
				value: block.height,
				onChange: (v) => onChange({ height: v }),
				placeholder: "3rem"
			}),
			block.type === "cta" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Heading",
					value: block.heading,
					onChange: (v) => onChange({ heading: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Body text",
					value: block.body ?? "",
					onChange: (v) => onChange({ body: v }),
					area: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Primary label",
					value: block.primaryLabel,
					onChange: (v) => onChange({ primaryLabel: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Primary URL",
					value: block.primaryHref,
					onChange: (v) => onChange({ primaryHref: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Secondary label",
					value: block.secondaryLabel ?? "",
					onChange: (v) => onChange({ secondaryLabel: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Secondary URL",
					value: block.secondaryHref ?? "",
					onChange: (v) => onChange({ secondaryHref: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chk, {
					label: "Dark background",
					checked: block.dark ?? false,
					onChange: (v) => onChange({ dark: v })
				})
			] }),
			block.type === "section_header" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Eyebrow",
					value: block.eyebrow ?? "",
					onChange: (v) => onChange({ eyebrow: v }),
					placeholder: "e.g. Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Title",
					value: block.title,
					onChange: (v) => onChange({ title: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Intro paragraph",
					value: block.intro ?? "",
					onChange: (v) => onChange({ intro: v }),
					area: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
					label: "Alignment",
					value: block.align ?? "left",
					options: ["left", "center"],
					onChange: (v) => onChange({ align: v })
				})
			] }),
			block.type === "stats" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
						children: "Stat items"
					}),
					(block.items ?? []).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: item.label,
								placeholder: "Label",
								onChange: (e) => {
									const items = [...block.items ?? []];
									items[i] = {
										...items[i],
										label: e.target.value
									};
									onChange({ items });
								},
								className: "flex-1 border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: item.value,
								placeholder: "Value",
								onChange: (e) => {
									const items = [...block.items ?? []];
									items[i] = {
										...items[i],
										value: e.target.value
									};
									onChange({ items });
								},
								className: "w-24 border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onChange({ items: (block.items ?? []).filter((_, j) => j !== i) }),
								className: "px-1.5 text-xs text-destructive",
								children: "✕"
							})
						]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange({ items: [...block.items ?? [], {
							label: "",
							value: ""
						}] }),
						className: "rounded-sm border border-teal/50 px-3 py-1 text-[0.6rem] font-semibold text-science hover:bg-teal/5",
						children: "+ Add stat"
					})
				]
			}),
			block.type === "list" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
				label: "Style",
				value: block.style ?? "bullet",
				options: [
					"bullet",
					"numbered",
					"check"
				],
				onChange: (v) => onChange({ style: v })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
						children: "Items"
					}),
					(block.items ?? []).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: item,
							onChange: (e) => {
								const items = [...block.items ?? []];
								items[i] = e.target.value;
								onChange({ items });
							},
							className: "flex-1 border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onChange({ items: (block.items ?? []).filter((_, j) => j !== i) }),
							className: "px-1.5 text-xs text-destructive",
							children: "✕"
						})]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange({ items: [...block.items ?? [], "New item"] }),
						className: "rounded-sm border border-teal/50 px-3 py-1 text-[0.6rem] font-semibold text-science hover:bg-teal/5",
						children: "+ Add item"
					})
				]
			})] }),
			block.type === "quote" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "Quote text",
				value: block.text,
				onChange: (v) => onChange({ text: v }),
				area: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "Author",
				value: block.author ?? "",
				onChange: (v) => onChange({ author: v })
			})] }),
			block.type === "badge" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
					children: "Tags (one per line)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: (block.items ?? []).join("\n"),
					rows: 4,
					onChange: (e) => onChange({ items: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) }),
					className: "w-full resize-y border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColourF, {
				label: "Border colour",
				value: block.color ?? "",
				onChange: (v) => onChange({ color: v })
			})] }),
			block.type === "accordion" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [(block.items ?? []).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded border border-hairline p-3 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[0.6rem] font-semibold text-muted-foreground",
								children: ["#", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onChange({ items: (block.items ?? []).filter((_, j) => j !== i) }),
								className: "text-xs text-destructive",
								children: "✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: item.q,
							placeholder: "Question",
							onChange: (e) => {
								const items = [...block.items ?? []];
								items[i] = {
									...items[i],
									q: e.target.value
								};
								onChange({ items });
							},
							className: "w-full border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: item.a,
							placeholder: "Answer",
							rows: 2,
							onChange: (e) => {
								const items = [...block.items ?? []];
								items[i] = {
									...items[i],
									a: e.target.value
								};
								onChange({ items });
							},
							className: "w-full resize-y border border-hairline bg-background px-2 py-1.5 text-xs outline-none focus:border-teal"
						})
					]
				}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onChange({ items: [...block.items ?? [], {
						q: "Question?",
						a: "Answer."
					}] }),
					className: "rounded-sm border border-teal/50 px-3 py-1 text-[0.6rem] font-semibold text-science hover:bg-teal/5",
					children: "+ Add Q&A"
				})]
			}),
			block.type === "video" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				block.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video overflow-hidden rounded border border-hairline bg-black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: block.url,
						controls: true,
						className: "h-full w-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onChange({ url: "" }),
						className: "absolute right-1 top-1 rounded-full bg-destructive/80 px-1.5 py-0.5 text-[0.55rem] font-bold text-white",
						children: "✕"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoUploader, { onUrl: (url) => onChange({ url }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[0.62rem] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 border-t border-hairline" }),
						" or embed URL ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 border-t border-hairline" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "YouTube / Vimeo / video URL",
					value: block.url,
					onChange: (v) => onChange({ url: v }),
					placeholder: "https://www.youtube.com/embed/…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
					label: "Caption",
					value: block.caption ?? "",
					onChange: (v) => onChange({ caption: v })
				})
			] }),
			(block.type === "embed" || block.type === "raw_html") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: "HTML code",
				value: block.html,
				onChange: (v) => onChange({ html: v }),
				area: true,
				rows: 8,
				placeholder: "<div>…</div>"
			}),
			block.type === "columns" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sel, {
				label: "Gap",
				value: block.gap ?? "8",
				options: [
					"2",
					"4",
					"6",
					"8",
					"12"
				],
				onChange: (v) => onChange({ gap: v })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.62rem] text-muted-foreground rounded border border-hairline bg-secondary/40 p-3",
				children: [
					"This block has ",
					(block.cols ?? []).length,
					" columns. Click each nested block in the canvas to edit its content."
				]
			})] }),
			picker !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePicker, {
				onSelect: handlePick,
				onClose: () => setPicker(null)
			})
		]
	});
}
function CanvasBlock({ block, index, total, isSelected, isDragOver, onSelect, onUp, onDown, onDelete, onDuplicate, onDragStart, onDragOver, onDrop }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		draggable: true,
		onDragStart,
		onDragOver: (e) => {
			e.preventDefault();
			onDragOver();
		},
		onDrop: (e) => {
			e.preventDefault();
			onDrop();
		},
		onClick: onSelect,
		className: `group relative cursor-pointer transition-all ${isDragOver ? "border-t-4 border-teal" : ""} ${isSelected ? "ring-2 ring-inset ring-teal" : "hover:ring-1 hover:ring-inset hover:ring-teal/40"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `absolute right-2 top-2 z-20 flex items-center gap-0.5 rounded border border-hairline bg-white shadow-md transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cursor-grab px-1.5 py-1 text-xs text-muted-foreground",
						title: "Drag to reorder",
						children: "⠿"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px self-stretch bg-hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-1.5 py-1 text-[0.55rem] font-bold uppercase text-muted-foreground",
						children: block.type.replace(/_/g, " ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px self-stretch bg-hairline" }),
					index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onUp();
						},
						className: "px-1.5 py-1 text-xs text-navy hover:text-science",
						title: "Up",
						children: "↑"
					}),
					index < total - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onDown();
						},
						className: "px-1.5 py-1 text-xs text-navy hover:text-science",
						title: "Down",
						children: "↓"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onDuplicate();
						},
						className: "px-1.5 py-1 text-xs text-navy hover:text-science",
						title: "Duplicate",
						children: "⎘"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							onDelete();
						},
						className: "px-1.5 py-1 text-xs text-destructive",
						title: "Delete",
						children: "✕"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute left-2 top-2 z-20 flex h-5 items-center rounded-sm bg-navy/80 px-1.5 text-[0.55rem] font-bold text-white transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
				children: String(index + 1).padStart(2, "0")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none select-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block })
			})
		]
	});
}
function PageBuilder() {
	const { id } = Route.useParams();
	const qc = useQueryClient();
	const [page, setPage] = (0, import_react.useState)(null);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [autoSave, setAutoSave] = (0, import_react.useState)(false);
	const [panel, setPanel] = (0, import_react.useState)("blocks");
	const [selId, setSelId] = (0, import_react.useState)(null);
	const [device, setDevice] = (0, import_react.useState)("desktop");
	const [catFilter, setCat] = (0, import_react.useState)("All");
	const [search, setSearch] = (0, import_react.useState)("");
	const [dragFrom, setDragFrom] = (0, import_react.useState)(null);
	const [dragOver, setDragOver] = (0, import_react.useState)(null);
	const autoTimer = (0, import_react.useRef)(null);
	const query = useQuery({
		queryKey: [
			"admin",
			"page",
			id
		],
		queryFn: async () => {
			const { data, error } = await supabase.from("pages").select("*").eq("id", id).single();
			if (error) throw error;
			return data;
		}
	});
	(0, import_react.useEffect)(() => {
		if (query.data) setPage({
			...query.data,
			blocks: Array.isArray(query.data.blocks) ? query.data.blocks : []
		});
	}, [query.data]);
	(0, import_react.useEffect)(() => {
		if (!autoSave || !page) return;
		if (autoTimer.current) clearTimeout(autoTimer.current);
		autoTimer.current = setTimeout(() => {
			doSave();
		}, 3e3);
		return () => {
			if (autoTimer.current) clearTimeout(autoTimer.current);
		};
	}, [page?.blocks, autoSave]);
	if (query.isLoading || !page) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-64 items-center justify-center text-sm text-muted-foreground",
		children: "Loading page builder…"
	});
	const setBlocks = (blocks) => setPage((p) => p ? {
		...p,
		blocks
	} : p);
	const setProp = (patch) => setPage((p) => p ? {
		...p,
		...patch
	} : p);
	const addBlock = (type) => {
		const b = mkBlock(type);
		setBlocks([...page.blocks, b]);
		setSelId(b.id);
		setPanel("edit");
	};
	const updBlock = (bid, patch) => setBlocks(page.blocks.map((b) => b.id === bid ? {
		...b,
		...patch
	} : b));
	const delBlock = (bid) => {
		setBlocks(page.blocks.filter((b) => b.id !== bid));
		if (selId === bid) {
			setSelId(null);
			setPanel("blocks");
		}
	};
	const dupBlock = (bid) => {
		const idx = page.blocks.findIndex((b) => b.id === bid);
		if (idx < 0) return;
		const clone = {
			...page.blocks[idx],
			id: newId()
		};
		const next = [...page.blocks];
		next.splice(idx + 1, 0, clone);
		setBlocks(next);
		setSelId(clone.id);
	};
	const moveBlock = (index, dir) => {
		const next = [...page.blocks];
		const t = index + dir;
		if (t < 0 || t >= next.length) return;
		[next[index], next[t]] = [next[t], next[index]];
		setBlocks(next);
	};
	const dropBlock = () => {
		if (!dragFrom || !dragOver || dragFrom === dragOver) {
			setDragFrom(null);
			setDragOver(null);
			return;
		}
		const next = [...page.blocks];
		const fi = next.findIndex((b) => b.id === dragFrom);
		const ti = next.findIndex((b) => b.id === dragOver);
		if (fi < 0 || ti < 0) return;
		const [item] = next.splice(fi, 1);
		next.splice(ti, 0, item);
		setBlocks(next);
		setDragFrom(null);
		setDragOver(null);
	};
	const doSave = async () => {
		setSaving(true);
		setMsg(null);
		const { error } = await supabase.from("pages").update({
			slug: page.slug,
			title_en: page.title_en,
			title_ko: page.title_ko,
			description_en: page.description_en,
			description_ko: page.description_ko,
			published: page.published,
			blocks: page.blocks,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", page.id);
		setSaving(false);
		if (error) {
			setMsg({
				text: error.message,
				ok: false
			});
			return;
		}
		setMsg({
			text: "Saved ✓",
			ok: true
		});
		qc.invalidateQueries({ queryKey: ["admin", "pages"] });
		setTimeout(() => setMsg(null), 3e3);
	};
	const selBlock = page.blocks.find((b) => b.id === selId) ?? null;
	const palette = PALETTE.filter((b) => {
		const matchCat = catFilter === "All" || b.cat === catFilter;
		const matchSrc = !search || b.label.toLowerCase().includes(search.toLowerCase());
		return matchCat && matchSrc;
	});
	const devWidth = {
		desktop: "100%",
		tablet: "768px",
		mobile: "390px"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[calc(100vh-3rem)] flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-shrink-0 flex-wrap items-center justify-between gap-2 border-b border-hairline bg-card px-4 py-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/pages",
								className: "text-xs text-muted-foreground hover:text-navy",
								children: "← Pages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-hairline",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "max-w-[160px] truncate text-sm font-semibold text-navy",
								children: page.title_en || page.slug
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden text-xs text-muted-foreground sm:block",
								children: ["/p/", page.slug]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 rounded border border-hairline bg-background p-1",
						children: [
							"desktop",
							"tablet",
							"mobile"
						].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setDevice(d),
							className: `rounded px-2.5 py-1 text-[0.62rem] font-medium capitalize transition-colors ${device === d ? "bg-navy text-white" : "text-muted-foreground hover:text-navy"}`,
							children: [
								d === "desktop" ? "🖥" : d === "tablet" ? "⬜" : "📱",
								" ",
								d
							]
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-center gap-1.5 text-xs text-muted-foreground",
								title: "Auto-save 3s after changes",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: autoSave,
									onChange: (e) => setAutoSave(e.target.checked),
									className: "accent-teal"
								}), "Auto-save"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setProp({ published: !page.published }),
								className: `rounded-sm px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] transition-colors ${page.published ? "bg-teal/15 text-science hover:bg-teal/25" : "bg-navy/10 text-navy hover:bg-navy/20"}`,
								children: page.published ? "● Published" : "○ Draft"
							}),
							page.published && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `/p/${page.slug}`,
								target: "_blank",
								rel: "noreferrer",
								className: "text-xs font-semibold text-science hover:underline",
								children: "View ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: doSave,
								disabled: saving,
								className: "rounded-sm bg-teal px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#05231f] disabled:opacity-60",
								children: saving ? "Saving…" : "Save"
							})
						]
					})
				]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex-shrink-0 border-b px-4 py-1.5 text-xs font-medium ${msg.ok ? "border-teal/30 bg-teal/10 text-science" : "border-destructive/30 bg-destructive/10 text-destructive"}`,
				children: msg.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex w-72 flex-shrink-0 flex-col overflow-hidden border-r border-hairline bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-shrink-0 border-b border-hairline",
						children: [
							"blocks",
							"edit",
							"settings"
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPanel(p),
							className: `flex-1 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] transition-colors ${panel === p ? "border-b-2 border-teal text-navy" : "text-muted-foreground hover:text-navy"}`,
							children: p === "blocks" ? "📦 Blocks" : p === "edit" ? "✏️ Edit" : "⚙️ Settings"
						}, p))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 overflow-y-auto",
						children: [
							panel === "blocks" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: search,
										onChange: (e) => setSearch(e.target.value),
										placeholder: "Search blocks…",
										className: "mb-3 w-full border border-hairline bg-background px-3 py-2 text-xs outline-none focus:border-teal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 flex flex-wrap gap-1",
										children: ["All", ...CATS].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setCat(cat),
											className: `rounded px-2 py-1 text-[0.6rem] font-medium transition-colors ${catFilter === cat ? "bg-navy text-white" : "border border-hairline text-navy hover:bg-navy/5"}`,
											children: cat
										}, cat))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-1.5",
										children: palette.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => addBlock(b.type),
											className: "flex flex-col items-center gap-1.5 rounded border border-hairline bg-background p-3 text-center transition-all hover:border-teal hover:bg-teal/5 active:scale-95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base font-mono font-bold text-navy/60",
												children: b.icon
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.6rem] font-medium leading-tight text-navy",
												children: b.label
											})]
										}, b.type))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-center text-[0.6rem] text-muted-foreground",
										children: [
											page.blocks.length,
											" block",
											page.blocks.length !== 1 ? "s" : ""
										]
									})
								]
							}),
							panel === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3",
								children: !selBlock ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-10 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xl opacity-20",
										children: "👆"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: "Click a block on the canvas to edit it."
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockEditor, {
									block: selBlock,
									onChange: (patch) => updBlock(selBlock.id, patch),
									onDelete: () => delBlock(selBlock.id),
									onDuplicate: () => dupBlock(selBlock.id)
								})
							}),
							panel === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-science",
										children: "Page Settings"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
										label: "URL Slug",
										value: page.slug,
										onChange: (v) => setProp({ slug: v }),
										placeholder: "page-url-slug"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
										label: "Title (EN)",
										value: page.title_en,
										onChange: (v) => setProp({ title_en: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
										label: "Title (KO)",
										value: page.title_ko,
										onChange: (v) => setProp({ title_ko: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
										label: "Description (EN)",
										value: page.description_en,
										onChange: (v) => setProp({ description_en: v }),
										area: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
										label: "Description (KO)",
										value: page.description_ko,
										onChange: (v) => setProp({ description_ko: v }),
										area: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chk, {
										label: "Published — visible at /p/slug",
										checked: page.published,
										onChange: (v) => setProp({ published: v })
									}),
									page.published && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `/p/${page.slug}`,
										target: "_blank",
										rel: "noreferrer",
										className: "block text-center text-xs font-semibold text-science hover:underline",
										children: "View live page ↗"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 rounded-sm border border-destructive/20 bg-destructive/5 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[0.62rem] font-semibold uppercase text-destructive",
												children: "Danger zone"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Unpublish hides the page from the public site without deleting it."
											}),
											page.published && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													setProp({ published: false });
													doSave();
												},
												className: "mt-3 rounded-sm border border-destructive/40 px-4 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10",
												children: "Unpublish"
											})
										]
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col overflow-hidden bg-[#f0f0f0]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-auto p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-full bg-white shadow-lg transition-all duration-300",
							style: {
								maxWidth: devWidth[device],
								minHeight: "600px"
							},
							children: page.blocks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-h-[500px] flex-col items-center justify-center gap-4 border-2 border-dashed border-hairline m-8 p-12 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-6xl opacity-10",
										children: "📦"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base font-medium text-navy",
										children: "Page is empty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Pick a block from the left panel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => addBlock("section_header"),
										className: "mt-2 rounded-sm bg-teal px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#05231f]",
										children: "+ Add First Block"
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [page.blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanvasBlock, {
								block,
								index: i,
								total: page.blocks.length,
								isSelected: selId === block.id,
								isDragOver: dragOver === block.id,
								onSelect: () => {
									setSelId(block.id);
									setPanel("edit");
								},
								onUp: () => moveBlock(i, -1),
								onDown: () => moveBlock(i, 1),
								onDelete: () => delBlock(block.id),
								onDuplicate: () => dupBlock(block.id),
								onDragStart: () => setDragFrom(block.id),
								onDragOver: () => setDragOver(block.id),
								onDrop: dropBlock
							}, block.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex min-h-[60px] items-center justify-center border-t-2 border-dashed border-hairline py-4 text-xs text-muted-foreground hover:border-teal hover:text-science",
								onDragOver: (e) => e.preventDefault(),
								onDrop: (e) => {
									e.preventDefault();
									dropBlock();
								},
								children: "Drop block here or click + below"
							})] })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-shrink-0 border-t border-hairline bg-card px-4 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.62rem] text-muted-foreground mr-1",
								children: "+ Quick add:"
							}), [
								{
									type: "section_header",
									label: "Section"
								},
								{
									type: "heading",
									label: "Heading"
								},
								{
									type: "text",
									label: "Text"
								},
								{
									type: "image",
									label: "Image"
								},
								{
									type: "button",
									label: "Button"
								},
								{
									type: "divider",
									label: "Divider"
								},
								{
									type: "cta",
									label: "CTA"
								},
								{
									type: "accordion",
									label: "FAQ"
								}
							].map(({ type, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => addBlock(type),
								className: "rounded border border-hairline px-2.5 py-1 text-[0.6rem] font-medium text-navy hover:border-teal hover:text-science",
								children: label
							}, type))]
						})
					})]
				})]
			})
		]
	});
}
//#endregion
export { PageBuilder as component };
