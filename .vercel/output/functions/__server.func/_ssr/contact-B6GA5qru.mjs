import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as headquarters_default } from "./headquarters-D-VQho82.mjs";
import { p as useI18n, u as useSiteSettings } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B6GA5qru.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const { data: settings } = useSiteSettings();
	const businessTypes = tx("contact.businessTypes") ?? [];
	const inquiryTypes = tx("contact.inquiryTypes") ?? [];
	const interests = tx("contact.productInterests") ?? [];
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		company: "",
		country: "",
		email: "",
		phone: "",
		businessType: "",
		inquiryType: "",
		message: ""
	});
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(false);
	const set = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const validate = () => {
		const e = {};
		if (!form.name.trim()) e["name"] = t("contact.errors.name");
		if (!form.company.trim()) e["company"] = t("contact.errors.company");
		if (!form.country.trim()) e["country"] = t("contact.errors.country");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e["email"] = t("contact.errors.email");
		if (!form.businessType) e["businessType"] = t("contact.errors.businessType");
		if (!form.inquiryType) e["inquiryType"] = t("contact.errors.inquiryType");
		if (form.message.trim().length < 10) e["message"] = t("contact.errors.message");
		setErrors(e);
		return Object.keys(e).length === 0;
	};
	const onSubmit = (ev) => {
		ev.preventDefault();
		if (validate()) setDone(true);
	};
	const contactEmail = settings?.email || t("contact.infoEmailValue");
	const contactAddress = settings?.address || t("contact.infoAddressValue");
	const contactHours = settings?.hours || t("contact.infoHoursValue");
	const contactPhone = settings?.phone || "";
	const field = "w-full border border-hairline bg-card px-4 py-3 text-[0.95rem] text-navy outline-none transition-colors focus:border-teal";
	const labelCls = "text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-navy/70";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("contact.eyebrow"),
		title: t("contact.title"),
		lead: t("contact.intro"),
		image: headquarters_default,
		imageAlt: t("contact.title"),
		crumb: {
			label: t("nav.contact"),
			homeLabel: t("common.breadcrumbHome")
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-14 lg:grid-cols-[1.5fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-flat p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[1.5rem] font-semibold text-navy",
					children: t("contact.success.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
					children: t("contact.success.body")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setDone(false);
						setForm({
							name: "",
							company: "",
							country: "",
							email: "",
							phone: "",
							businessType: "",
							inquiryType: "",
							message: ""
						});
						setPicked([]);
						setFileName("");
					},
					className: "mt-8 rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-[#05231f]",
					children: t("contact.success.again")
				})
			]
		}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("contact.eyebrow"),
					title: t("contact.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: [[
						["name", "text"],
						["company", "text"],
						["country", "text"],
						["email", "email"],
						["phone", "tel"]
					].map(([k, type]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: labelCls,
								children: t(`contact.fields.${k}`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type,
								value: form[k],
								onChange: (e) => set(k, e.target.value),
								className: field
							}),
							errors[k] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.78rem] text-red-600",
								children: errors[k]
							}) : null
						]
					}, k)), [["businessType", businessTypes], ["inquiryType", inquiryTypes]].map(([k, opts]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: labelCls,
								children: t(`contact.fields.${k}`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form[k],
								onChange: (e) => set(k, e.target.value),
								className: field,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: t("common.select")
								}), opts.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o,
									children: o
								}, o))]
							}),
							errors[k] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.78rem] text-red-600",
								children: errors[k]
							}) : null
						]
					}, k))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: labelCls,
						children: t("contact.fields.productInterest")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: interests.map((i) => {
							const on = picked.includes(i);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPicked((p) => on ? p.filter((x) => x !== i) : [...p, i]),
								className: `rounded-sm border px-4 py-2 text-[0.8rem] transition-colors ${on ? "border-teal bg-teal text-[#05231f]" : "border-hairline text-navy hover:border-teal hover:text-science"}`,
								children: i
							}, i);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-8 grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: labelCls,
							children: t("contact.fields.message")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 6,
							value: form.message,
							onChange: (e) => set("message", e.target.value),
							className: field
						}),
						errors["message"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.78rem] text-red-600",
							children: errors["message"]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: labelCls,
							children: t("contact.fields.file")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "cursor-pointer rounded-sm border border-navy/20 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
								children: [t("contact.fields.chooseFile"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									className: "hidden",
									onChange: (e) => setFileName(e.target.files?.[0]?.name ?? "")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.85rem] text-muted-foreground",
								children: fileName || t("contact.fields.noFile")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.78rem] text-muted-foreground",
							children: t("contact.fields.fileHint")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-10 rounded-sm bg-teal px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#05231f] transition-colors hover:bg-teal/85",
					children: t("contact.submit")
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "card-flat p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-[1.1rem] font-semibold text-navy",
				children: t("contact.infoTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-hairline pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: t("contact.infoAddress")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-[0.95rem] text-navy",
							children: contactAddress
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-hairline pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: t("contact.infoEmail")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-[0.95rem] text-navy",
							children: contactEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${contactEmail}`,
								className: "hover:text-science transition-colors",
								children: contactEmail
							}) : "—"
						})]
					}),
					contactPhone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-hairline pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-[0.95rem] text-navy",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${contactPhone}`,
								className: "hover:text-science transition-colors",
								children: contactPhone
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-hairline pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
							children: t("contact.infoHours")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-[0.95rem] text-navy",
							children: contactHours
						})]
					})
				]
			})]
		}) })]
	}) })] });
}
//#endregion
export { Page as component };
