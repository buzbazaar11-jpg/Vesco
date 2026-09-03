import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.site-editor-B-tz3TqU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EDITABLE_PAGES = [
	{
		key: "page_home",
		label: "Home",
		path: "/",
		sections: [{
			key: "hero",
			label: "Hero Section",
			fields: [
				{
					key: "eyebrow",
					label: "Eyebrow Text",
					type: "text"
				},
				{
					key: "title",
					label: "Main Heading",
					type: "text"
				},
				{
					key: "subtitle",
					label: "Subtitle",
					type: "text"
				},
				{
					key: "body",
					label: "Body Text",
					type: "textarea"
				},
				{
					key: "ctaPrimary",
					label: "Primary CTA Label",
					type: "text"
				},
				{
					key: "ctaSecondary",
					label: "Secondary CTA Label",
					type: "text"
				}
			]
		}, {
			key: "cta",
			label: "CTA Band",
			fields: [
				{
					key: "title",
					label: "CTA Heading",
					type: "text"
				},
				{
					key: "body",
					label: "CTA Body",
					type: "textarea"
				},
				{
					key: "primary",
					label: "Primary Button",
					type: "text"
				},
				{
					key: "secondary",
					label: "Secondary Button",
					type: "text"
				}
			]
		}]
	},
	{
		key: "page_about",
		label: "About",
		path: "/about",
		sections: [{
			key: "hero",
			label: "Hero Section",
			fields: [
				{
					key: "eyebrow",
					label: "Eyebrow",
					type: "text"
				},
				{
					key: "title",
					label: "Title",
					type: "text"
				},
				{
					key: "lead",
					label: "Lead Text",
					type: "textarea"
				}
			]
		}, {
			key: "story",
			label: "Our Story",
			fields: [
				{
					key: "eyebrow",
					label: "Eyebrow",
					type: "text"
				},
				{
					key: "title",
					label: "Title",
					type: "text"
				},
				{
					key: "body1",
					label: "Paragraph 1",
					type: "textarea"
				},
				{
					key: "body2",
					label: "Paragraph 2",
					type: "textarea"
				}
			]
		}]
	},
	{
		key: "page_contact",
		label: "Contact",
		path: "/contact",
		sections: [{
			key: "main",
			label: "Contact Info",
			fields: [
				{
					key: "eyebrow",
					label: "Eyebrow",
					type: "text"
				},
				{
					key: "title",
					label: "Heading",
					type: "text"
				},
				{
					key: "intro",
					label: "Intro",
					type: "textarea"
				},
				{
					key: "infoEmailValue",
					label: "Email Address",
					type: "text"
				},
				{
					key: "infoAddressValue",
					label: "Address",
					type: "text"
				},
				{
					key: "infoHoursValue",
					label: "Business Hours",
					type: "text"
				}
			]
		}]
	},
	{
		key: "page_oem",
		label: "OEM / ODM",
		path: "/oem",
		sections: [{
			key: "hero",
			label: "Hero Section",
			fields: [
				{
					key: "eyebrow",
					label: "Eyebrow",
					type: "text"
				},
				{
					key: "title",
					label: "Heading",
					type: "text"
				},
				{
					key: "subtitle",
					label: "Subtitle",
					type: "textarea"
				}
			]
		}]
	},
	{
		key: "page_footer",
		label: "Footer & Header",
		path: "global",
		sections: [{
			key: "contact",
			label: "Footer Contact Info",
			fields: [
				{
					key: "address",
					label: "Address",
					type: "text"
				},
				{
					key: "email",
					label: "Email",
					type: "text"
				},
				{
					key: "phone",
					label: "Phone",
					type: "text"
				},
				{
					key: "kakao",
					label: "KakaoTalk",
					type: "text"
				},
				{
					key: "linkedin",
					label: "LinkedIn",
					type: "text"
				},
				{
					key: "instagram",
					label: "Instagram",
					type: "text"
				},
				{
					key: "youtube",
					label: "YouTube",
					type: "text"
				}
			]
		}]
	}
];
function SiteEditorPage() {
	const qc = useQueryClient();
	const [activePage, setActivePage] = (0, import_react.useState)(EDITABLE_PAGES[0].key);
	const [activeSection, setActiveSection] = (0, import_react.useState)(null);
	const [formData, setFormData] = (0, import_react.useState)({});
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const pageConfig = EDITABLE_PAGES.find((p) => p.key === activePage);
	const query = useQuery({
		queryKey: [
			"admin",
			"site_editor",
			activePage
		],
		queryFn: async () => {
			const { data } = await supabase.from("site_settings").select("value").eq("key", activePage).maybeSingle();
			return data?.value ?? {};
		}
	});
	(0, import_react.useEffect)(() => {
		if (query.data) {
			setFormData(query.data);
			setActiveSection(pageConfig.sections[0]?.key ?? null);
		}
	}, [query.data, pageConfig]);
	const getValue = (section, field) => {
		return formData[section]?.[field] ?? "";
	};
	const setValue = (section, field, value) => {
		setFormData((prev) => ({
			...prev,
			[section]: {
				...prev[section] ?? {},
				[field]: value
			}
		}));
	};
	const save = async () => {
		setSaving(true);
		setMsg(null);
		const { error } = await supabase.from("site_settings").upsert({
			key: activePage,
			value: formData,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		}, { onConflict: "key" });
		setSaving(false);
		if (error) return setMsg(error.message);
		setMsg("Changes saved. They will appear on the live site after reload.");
		qc.invalidateQueries({ queryKey: [
			"admin",
			"site_editor",
			activePage
		] });
		setTimeout(() => setMsg(null), 4e3);
	};
	const activeSectionConfig = pageConfig.sections.find((s) => s.key === activeSection);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold text-navy",
				children: "Site Page Editor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Edit content on the existing static pages. Changes are saved to the database and override the defaults."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [pageConfig.path !== "global" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: pageConfig.path,
					target: "_blank",
					rel: "noreferrer",
					className: "text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
					children: "View page ↗"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: save,
					disabled: saving,
					className: "rounded-sm bg-teal px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60",
					children: saving ? "Saving…" : "Save changes"
				})]
			})]
		}),
		msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 rounded-sm border border-teal/30 bg-teal/10 px-4 py-2.5 text-sm text-science",
			children: msg
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-48 flex-shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
					children: "Pages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "space-y-1",
					children: EDITABLE_PAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setActivePage(p.key);
							setActiveSection(p.sections[0]?.key ?? null);
						},
						className: `w-full rounded-sm px-4 py-2.5 text-left text-sm font-medium transition-colors ${activePage === p.key ? "bg-navy text-white" : "text-navy hover:bg-navy/5"}`,
						children: [p.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-[0.65rem] opacity-50",
							children: p.path
						})]
					}, p.key))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 flex-wrap mb-6 border-b border-hairline pb-3",
						children: pageConfig.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveSection(s.key),
							className: `rounded-sm px-4 py-2 text-[0.75rem] font-medium transition-colors ${activeSection === s.key ? "bg-navy text-white" : "border border-hairline text-navy hover:bg-navy/5"}`,
							children: s.label
						}, s.key))
					}),
					activeSectionConfig ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5 border border-hairline bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-science",
								children: activeSectionConfig.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[0.65rem] text-muted-foreground",
								children: [
									"Page: ",
									pageConfig.label,
									" › Section: ",
									activeSectionConfig.key
								]
							})]
						}), activeSectionConfig.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
									children: field.label
								}),
								field.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: getValue(activeSectionConfig.key, field.key),
									onChange: (e) => setValue(activeSectionConfig.key, field.key, e.target.value),
									rows: 4,
									placeholder: `Default: (from locale file)`,
									className: "w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal resize-y"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: getValue(activeSectionConfig.key, field.key),
									onChange: (e) => setValue(activeSectionConfig.key, field.key, e.target.value),
									placeholder: `Default: (from locale file)`,
									className: "w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] text-muted-foreground",
									children: "Leave blank to use the default value from the locale file."
								})
							]
						}, field.key))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Select a section to edit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-sm border border-hairline bg-secondary/50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.72rem] font-semibold text-navy",
							children: "How this works"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: [
								"Values saved here are stored in the database and take priority over the default locale file values. Leave a field blank to use the built-in default. Use the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Site Settings" }),
								" page for company name, logo, email and social links."
							]
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { SiteEditorPage as component };
