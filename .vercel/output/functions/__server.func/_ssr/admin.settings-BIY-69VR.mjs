import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
import { t as STORAGE_BUCKET } from "./admin-aM2QihXk.mjs";
import { c as saveSiteSettings, l as useAdminSiteSettings, s as SETTINGS_DEFAULTS } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-BIY-69VR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FIELDS = [
	{
		key: "companyName",
		label: "Company name (EN)",
		group: "Company"
	},
	{
		key: "companyNameKo",
		label: "회사명 (KO)",
		group: "Company"
	},
	{
		key: "tagline",
		label: "Tagline",
		group: "Company"
	},
	{
		key: "email",
		label: "Email",
		group: "Contact",
		type: "email",
		placeholder: "contact@example.com"
	},
	{
		key: "phone",
		label: "Phone",
		group: "Contact",
		type: "tel",
		placeholder: "+82 10 0000 0000"
	},
	{
		key: "address",
		label: "Address",
		group: "Contact",
		placeholder: "Republic of Korea"
	},
	{
		key: "hours",
		label: "Business hours",
		group: "Contact",
		placeholder: "Mon–Fri, 09:00–18:00 KST"
	},
	{
		key: "linkedin",
		label: "LinkedIn URL",
		group: "Social",
		placeholder: "https://linkedin.com/company/…"
	},
	{
		key: "instagram",
		label: "Instagram URL",
		group: "Social",
		placeholder: "https://instagram.com/…"
	},
	{
		key: "youtube",
		label: "YouTube URL",
		group: "Social",
		placeholder: "https://youtube.com/@…"
	},
	{
		key: "facebook",
		label: "Facebook URL",
		group: "Social",
		placeholder: "https://facebook.com/…"
	},
	{
		key: "twitter",
		label: "X / Twitter URL",
		group: "Social",
		placeholder: "https://x.com/…"
	},
	{
		key: "kakao",
		label: "KakaoTalk link",
		group: "Social",
		placeholder: "https://open.kakao.com/…"
	}
];
var GROUPS = [
	"Company",
	"Contact",
	"Social"
];
function SettingsPage() {
	const qc = useQueryClient();
	const { data: loaded, isLoading } = useAdminSiteSettings();
	const [form, setForm] = (0, import_react.useState)(SETTINGS_DEFAULTS);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [logoUploading, setLogoUploading] = (0, import_react.useState)(false);
	const logoFileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (loaded) setForm({
			...SETTINGS_DEFAULTS,
			...loaded
		});
	}, [loaded]);
	const set = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const handleLogoUpload = async (file) => {
		setLogoUploading(true);
		setMsg(null);
		try {
			const path = `logo/site-logo.${file.name.split(".").pop() ?? "png"}`;
			const { error: upErr } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file, {
				cacheControl: "31536000",
				upsert: true
			});
			if (upErr) throw upErr;
			const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
			const url = `${data.publicUrl}?t=${Date.now()}`;
			setForm((f) => ({
				...f,
				logoUrl: url
			}));
			setMsg({
				text: "Logo uploaded. Click Save settings to apply.",
				ok: true
			});
		} catch (e) {
			setMsg({
				text: e.message,
				ok: false
			});
		} finally {
			setLogoUploading(false);
		}
	};
	const save = async () => {
		setSaving(true);
		setMsg(null);
		const { error } = await saveSiteSettings(qc, form);
		setSaving(false);
		if (error) setMsg({
			text: error,
			ok: false
		});
		else setMsg({
			text: "Settings saved. Public website is updated.",
			ok: true
		});
		setTimeout(() => setMsg(null), 5e3);
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-16 text-center text-sm text-muted-foreground",
		children: "Loading settings…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold text-navy",
				children: "Site Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Logo, company details, contact info and social links. Changes are saved to Supabase and appear on the public website immediately."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: save,
				disabled: saving,
				className: "rounded-sm bg-teal px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60",
				children: saving ? "Saving…" : "Save settings"
			})]
		}),
		msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-4 rounded-sm border px-4 py-3 text-sm font-medium ${msg.ok ? "border-teal/30 bg-teal/10 text-science" : "border-destructive/30 bg-destructive/10 text-destructive"}`,
			children: msg.text
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 border border-hairline bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-science",
					children: "Logo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						"Uploaded to the public ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "rounded bg-navy/10 px-1 py-0.5 font-mono",
							children: STORAGE_BUCKET
						}),
						" bucket. Use PNG or SVG with a transparent background for best results."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-20 w-40 flex-shrink-0 items-center justify-center rounded border border-hairline bg-navy p-3",
						children: form.logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: form.logoUrl,
							alt: "Logo preview",
							className: "h-full w-auto max-w-full object-contain"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-[0.65rem] text-white/40",
							children: "No logo uploaded"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 flex-1 min-w-[260px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: logoFileRef,
								type: "file",
								accept: "image/*",
								className: "hidden",
								onChange: (e) => {
									const f = e.target.files?.[0];
									if (f) handleLogoUpload(f);
									e.target.value = "";
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: logoUploading,
								onClick: () => logoFileRef.current?.click(),
								className: "rounded-sm bg-navy px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white hover:bg-navy/80 disabled:opacity-60",
								children: logoUploading ? "Uploading…" : form.logoUrl ? "Replace logo" : "Upload logo"
							}),
							form.logoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => set("logoUrl", ""),
								className: "ml-3 text-xs font-semibold text-destructive hover:opacity-75",
								children: "Remove"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
								children: "Or paste logo URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.logoUrl,
								onChange: (e) => set("logoUrl", e.target.value),
								placeholder: "https://…",
								className: "w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
							})]
						})]
					})]
				})
			]
		}),
		GROUPS.map((group) => {
			const groupFields = FIELDS.filter((f) => f.group === group);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 border border-hairline bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-science",
					children: group
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: groupFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
							children: f.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: f.type ?? "text",
							value: form[f.key],
							onChange: (e) => set(f.key, e.target.value),
							placeholder: f.placeholder,
							className: "w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
						})]
					}, f.key))
				})]
			}, group);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex items-center justify-between gap-4 border-t border-hairline pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"All changes are stored in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "rounded bg-navy/10 px-1 font-mono",
						children: "public.site_settings"
					}),
					" key ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "rounded bg-navy/10 px-1 font-mono",
						children: "\"general\""
					}),
					" and take effect on the public website immediately after saving."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: save,
				disabled: saving,
				className: "flex-shrink-0 rounded-sm bg-teal px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60",
				children: saving ? "Saving…" : "Save settings"
			})]
		})
	] });
}
//#endregion
export { SettingsPage as component };
