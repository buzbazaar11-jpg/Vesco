import { i as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-SgTm3D6w.js
var import_jsx_runtime = require_jsx_runtime();
var STATIC_PAGES = [
	{
		path: "/",
		label: "Home"
	},
	{
		path: "/about",
		label: "About Us"
	},
	{
		path: "/about/mission",
		label: "Mission & Vision"
	},
	{
		path: "/about/network",
		label: "Global Network"
	},
	{
		path: "/facility",
		label: "Facility"
	},
	{
		path: "/research",
		label: "R&D"
	},
	{
		path: "/quality",
		label: "Quality"
	},
	{
		path: "/technology",
		label: "Technology"
	},
	{
		path: "/products",
		label: "Products"
	},
	{
		path: "/oem",
		label: "OEM / ODM"
	},
	{
		path: "/custom-development",
		label: "Custom Development"
	},
	{
		path: "/insights",
		label: "Insights"
	},
	{
		path: "/resources",
		label: "Download Center"
	},
	{
		path: "/faq",
		label: "FAQ"
	},
	{
		path: "/contact",
		label: "Contact"
	}
];
var QUICK_TOOLS = [
	{
		to: "/admin/site-editor",
		icon: "✏️",
		label: "Edit Page Content",
		desc: "Update text & content on existing pages"
	},
	{
		to: "/admin/pages",
		icon: "🏗",
		label: "Visual Builder",
		desc: "Build new pages with drag-and-drop blocks"
	},
	{
		to: "/admin/media",
		icon: "🖼",
		label: "Media Manager",
		desc: "Upload and manage images & files"
	},
	{
		to: "/admin/ai-assistant",
		icon: "🤖",
		label: "AI Assistant",
		desc: "Upload PDFs/images, compare with site"
	},
	{
		to: "/admin/settings",
		icon: "⚙️",
		label: "Site Settings",
		desc: "Logo, contact info, social links"
	},
	{
		to: "/admin/resources",
		icon: "📁",
		label: "Resources & Files",
		desc: "Manage downloadable documents"
	}
];
function Dashboard() {
	const pages = useQuery({
		queryKey: ["admin", "pages"],
		queryFn: async () => {
			const { data, error } = await supabase.from("pages").select("id,slug,title_en,published,updated_at").order("updated_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const resources = useQuery({
		queryKey: [
			"admin",
			"resources",
			"count"
		],
		queryFn: async () => {
			const { count, error } = await supabase.from("resources").select("id", {
				count: "exact",
				head: true
			});
			if (error) throw error;
			return count ?? 0;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-semibold text-navy",
			children: "Dashboard"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Welcome to the Vesco Science admin panel. Manage all website content from here."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Static site pages",
					value: String(STATIC_PAGES.length)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Builder pages",
					value: String(pages.data?.length ?? 0)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Resources / files",
					value: String(resources.data ?? 0)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-xl font-semibold text-navy",
				children: "Quick Tools"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: QUICK_TOOLS.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: tool.to,
					className: "group flex items-start gap-4 rounded-sm border border-hairline bg-card p-5 transition-all hover:border-teal hover:shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl flex-shrink-0",
						children: tool.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-navy group-hover:text-science transition-colors",
						children: tool.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: tool.desc
					})] })]
				}, tool.to))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-navy",
					children: "Visual Builder Pages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/pages",
					className: "rounded-sm bg-teal px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]",
					children: "Manage"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "divide-y divide-hairline border border-hairline bg-card",
				children: [(pages.data ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-navy",
							children: p.title_en || p.slug
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: ["/p/", p.slug]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-sm px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] ${p.published ? "bg-teal/15 text-science" : "bg-navy/10 text-navy"}`,
								children: p.published ? "Live" : "Draft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/pages/$id",
								params: { id: p.id },
								className: "text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
								children: "Edit"
							}),
							p.published && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `/p/${p.slug}`,
								target: "_blank",
								rel: "noreferrer",
								className: "text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
								children: "View ↗"
							})
						]
					})]
				}, p.id)), pages.data && pages.data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No builder pages yet."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/pages",
						className: "mt-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-science hover:underline",
						children: "Create your first page →"
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold text-navy",
					children: "Existing Website Pages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/site-editor",
					className: "text-xs font-semibold uppercase tracking-[0.12em] text-science hover:underline",
					children: "Edit content →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
				children: STATIC_PAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-card px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-navy",
						children: p.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: p.path
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.path,
							target: "_blank",
							rel: "noreferrer",
							className: "text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-navy hover:text-science",
							children: "View ↗"
						})
					})]
				}, p.path))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-10 rounded-sm border border-teal/20 bg-teal/5 p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: "🤖"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold text-navy",
						children: "AI Website Assistant"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-muted-foreground",
					children: "Upload a PDF, design mockup, or screenshot. The AI will compare it against your existing website, show you what's different or missing, and ask for your confirmation before making any changes."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/ai-assistant",
					className: "rounded-sm bg-navy px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white hover:bg-navy/90",
					children: "Open AI Assistant"
				})]
			})
		})
	] });
}
function StatCard({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-hairline bg-card px-6 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-3xl font-semibold text-navy",
			children: value
		})]
	});
}
//#endregion
export { Dashboard as component };
