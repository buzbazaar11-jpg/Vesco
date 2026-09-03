import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
import { i as uploadSiteFile } from "./admin-aM2QihXk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.resources-C6zXLwOJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"Brochure",
	"Catalog",
	"Certificate",
	"Technical",
	"Other"
];
function ResourcesAdmin() {
	const qc = useQueryClient();
	const [title, setTitle] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)(CATEGORIES[0]);
	const [restricted, setRestricted] = (0, import_react.useState)(false);
	const [file, setFile] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const list = useQuery({
		queryKey: ["admin", "resources"],
		queryFn: async () => {
			const { data, error } = await supabase.from("resources").select("*").order("sort_order", { ascending: true });
			if (error) throw error;
			return data;
		}
	});
	const add = async (e) => {
		e.preventDefault();
		if (!file) return setMsg("Choose a file first.");
		setBusy(true);
		setMsg(null);
		try {
			const { url, path } = await uploadSiteFile(file, "resources");
			const { error } = await supabase.from("resources").insert({
				title,
				category,
				file_url: url,
				file_path: path,
				restricted,
				sort_order: (list.data?.length ?? 0) + 1
			});
			if (error) throw error;
			setTitle("");
			setFile(null);
			setMsg("Uploaded.");
			qc.invalidateQueries({ queryKey: ["admin", "resources"] });
			qc.invalidateQueries({ queryKey: [
				"admin",
				"resources",
				"count"
			] });
		} catch (err) {
			setMsg(err.message);
		} finally {
			setBusy(false);
		}
	};
	const patch = async (id, values) => {
		await supabase.from("resources").update(values).eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin", "resources"] });
	};
	const remove = async (id, path) => {
		if (path) await supabase.storage.from("images").remove([path]);
		await supabase.from("resources").delete().eq("id", id);
		qc.invalidateQueries({ queryKey: ["admin", "resources"] });
		qc.invalidateQueries({ queryKey: [
			"admin",
			"resources",
			"count"
		] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-semibold text-navy",
			children: "Resources & Files"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Upload PDF, Word, images or any document and publish it to the download center."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: add,
			className: "mt-8 grid gap-4 border border-hairline bg-card p-6 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
						children: "Title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: title,
						onChange: (e) => setTitle(e.target.value),
						className: "border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: category,
						onChange: (e) => setCategory(e.target.value),
						className: "border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
						children: "File"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						onChange: (e) => setFile(e.target.files?.[0] ?? null),
						className: "text-xs text-muted-foreground"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-end gap-2 text-sm text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: restricted,
						onChange: (e) => setRestricted(e.target.checked)
					}), "Restricted (request required)"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: busy,
					className: "rounded-sm bg-teal px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60",
					children: busy ? "Uploading…" : "Upload resource"
				}) })
			]
		}),
		msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-science",
			children: msg
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 divide-y divide-hairline border border-hairline bg-card",
			children: [(list.data ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-medium text-navy",
						children: r.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							r.category,
							" · ",
							r.restricted ? "Restricted" : "Public"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: r.file_url,
							target: "_blank",
							rel: "noreferrer",
							className: "text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
							children: "Open"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => patch(r.id, { restricted: !r.restricted }),
							className: "text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
							children: r.restricted ? "Make public" : "Restrict"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => remove(r.id, r.file_path),
							className: "text-xs font-semibold uppercase tracking-[0.12em] text-destructive",
							children: "Delete"
						})
					]
				})]
			}, r.id)), list.data && list.data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-5 py-6 text-sm text-muted-foreground",
				children: "No resources uploaded yet."
			}) : null]
		})
	] });
}
//#endregion
export { ResourcesAdmin as component };
