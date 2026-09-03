import { i as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
import { a as Route$6 } from "./router-Bp76MIo6.mjs";
import { t as BlockList } from "./Blocks-CpeeoQOq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/p._slug-Dwi7i49e.js
var import_jsx_runtime = require_jsx_runtime();
function BuilderPage() {
	const { slug } = Route$6.useParams();
	const query = useQuery({
		queryKey: [
			"public",
			"page",
			slug
		],
		queryFn: async () => {
			const { data, error } = await supabase.from("pages").select("title_ko,title_en,description_ko,blocks,published").eq("slug", slug).eq("published", true).maybeSingle();
			if (error) throw error;
			return data;
		}
	});
	if (query.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-24 text-center text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!query.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold text-navy",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "This page is unpublished or does not exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]",
				children: "Go home"
			})
		]
	});
	const page = query.data;
	const blocks = Array.isArray(page.blocks) ? page.blocks : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-hairline bg-navy px-6 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold text-white",
			children: page.title_ko || page.title_en
		}), page.description_ko ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-4 max-w-2xl text-sm text-white/70",
			children: page.description_ko
		}) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockList, { blocks })] });
}
//#endregion
export { BuilderPage as component };
