import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.pages.index-x19RBekA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PagesList() {
	const qc = useQueryClient();
	const navigate = useNavigate();
	const [title, setTitle] = (0, import_react.useState)("");
	const [slug, setSlug] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)(null);
	const pages = useQuery({
		queryKey: ["admin", "pages"],
		queryFn: async () => {
			const { data, error } = await supabase.from("pages").select("id,slug,title_en,title_ko,published,updated_at").order("updated_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const create = async (e) => {
		e.preventDefault();
		setErr(null);
		const s = (slug || title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
		const { data, error } = await supabase.from("pages").insert({
			slug: s,
			title_en: title,
			title_ko: title,
			blocks: []
		}).select("id").single();
		if (error) return setErr(error.message);
		setTitle("");
		setSlug("");
		qc.invalidateQueries({ queryKey: ["admin", "pages"] });
		navigate({
			to: "/admin/pages/$id",
			params: { id: data.id }
		});
	};
	const remove = async (id) => {
		await supabase.from("pages").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin", "pages"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-semibold text-navy",
			children: "Pages / Builder"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Create a page, then drop in headings, text, images and buttons."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: create,
			className: "mt-8 flex flex-wrap gap-3 border border-hairline bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					value: title,
					onChange: (e) => setTitle(e.target.value),
					placeholder: "Page title",
					className: "min-w-[12rem] flex-1 border border-hairline bg-background px-4 py-3 text-sm outline-none focus:border-teal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: slug,
					onChange: (e) => setSlug(e.target.value),
					placeholder: "url-slug (optional)",
					className: "min-w-[12rem] flex-1 border border-hairline bg-background px-4 py-3 text-sm outline-none focus:border-teal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-sm bg-teal px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]",
					children: "Create page"
				})
			]
		}),
		err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-destructive",
			children: err
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 divide-y divide-hairline border border-hairline bg-card",
			children: [(pages.data ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
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
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/p/${p.slug}`,
							target: "_blank",
							rel: "noreferrer",
							className: "text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
							children: "View"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/pages/$id",
							params: { id: p.id },
							className: "text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
							children: "Edit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => remove(p.id),
							className: "text-xs font-semibold uppercase tracking-[0.12em] text-destructive",
							children: "Delete"
						})
					]
				})]
			}, p.id)), pages.data && pages.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-5 py-6 text-sm text-muted-foreground",
				children: "No pages yet."
			}) : null]
		})
	] });
}
//#endregion
export { PagesList as component };
