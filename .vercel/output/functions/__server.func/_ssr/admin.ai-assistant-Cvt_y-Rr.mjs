import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as uploadSiteFile } from "./admin-aM2QihXk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.ai-assistant-Cvt_y-Rr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE_STRUCTURE = [
	{
		page: "Home (/)",
		sections: [
			"Hero",
			"Capabilities Bar",
			"Company Intro",
			"Technology Cards",
			"Exosome Feature",
			"Manufacturing Pipeline",
			"Quality Section",
			"R&D Section",
			"Partnership Section",
			"EverCeutical Block",
			"Scientific Insights",
			"CTA Band"
		]
	},
	{
		page: "About (/about)",
		sections: [
			"Hero",
			"Company Overview",
			"Our Story",
			"Values",
			"Milestones",
			"Position/Focus/Partners",
			"Capabilities Pipeline",
			"Scientific Approach",
			"Manufacturing Pipeline",
			"Quality Approach",
			"EverCeutical Partnership",
			"Vision & Mission",
			"Seoul HQ",
			"Our People"
		]
	},
	{
		page: "Technology (/technology)",
		sections: [
			"Hero",
			"Technology Cards",
			"Exosome Steps",
			"CTA Band"
		]
	},
	{
		page: "Products (/products)",
		sections: [
			"Hero",
			"Product Categories",
			"CTA Band"
		]
	},
	{
		page: "OEM/ODM (/oem)",
		sections: [
			"Hero",
			"OEM vs ODM",
			"9-Stage Timeline",
			"Custom Development",
			"Private Label",
			"Regulatory Support"
		]
	},
	{
		page: "Quality (/quality)",
		sections: [
			"Hero",
			"Process Flow",
			"Quality Systems",
			"Characterization"
		]
	},
	{
		page: "Facility (/facility)",
		sections: [
			"Hero",
			"Facility Areas",
			"Process Flow"
		]
	},
	{
		page: "Research (/research)",
		sections: [
			"Hero",
			"Research Areas",
			"Team Capability"
		]
	},
	{
		page: "Contact (/contact)",
		sections: [
			"Hero",
			"Contact Form",
			"Contact Info"
		]
	},
	{
		page: "FAQ (/faq)",
		sections: ["Hero", "FAQ Accordion"]
	}
];
function AIAssistantPage() {
	const [state, setState] = (0, import_react.useState)("idle");
	const [uploadedFiles, setUploadedFiles] = (0, import_react.useState)([]);
	const [analysisText, setAnalysisText] = (0, import_react.useState)("");
	const [diffItems, setDiffItems] = (0, import_react.useState)([]);
	const [applyMsg, setApplyMsg] = (0, import_react.useState)(null);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const [selectedPage, setSelectedPage] = (0, import_react.useState)("Home (/)");
	const [manualNotes, setManualNotes] = (0, import_react.useState)("");
	const [actionChoices, setActionChoices] = (0, import_react.useState)({});
	const fileInputRef = (0, import_react.useRef)(null);
	const handleFiles = async (files) => {
		const arr = Array.from(files);
		setState("uploading");
		const uploaded = [];
		for (const file of arr) try {
			const { url } = await uploadSiteFile(file, "ai-uploads");
			uploaded.push({
				name: file.name,
				url,
				type: file.type
			});
		} catch {}
		setUploadedFiles((prev) => [...prev, ...uploaded]);
		setState("idle");
	};
	const runAnalysis = async () => {
		if (uploadedFiles.length === 0 && !manualNotes.trim()) {
			alert("Please upload at least one file (PDF, image, or screenshot) or add notes first.");
			return;
		}
		setState("analyzing");
		setDiffItems([]);
		setApplyMsg(null);
		await new Promise((r) => setTimeout(r, 2e3));
		const pageSections = SITE_STRUCTURE.find((p) => p.page === selectedPage)?.sections ?? [];
		const items = [];
		if (uploadedFiles.length > 0) {
			items.push({
				id: "diff-1",
				type: "missing",
				section: `${selectedPage} — New Content Detected`,
				description: `The uploaded file "${uploadedFiles[0]?.name}" appears to contain content not currently present on the ${selectedPage} page.`,
				suggestedContent: `[Content from uploaded file would be extracted and shown here by the AI. In production, this connects to GPT-4 Vision or Claude API to analyze your uploaded PDF/image and compare it with the existing page structure: ${pageSections.join(", ")}]`,
				approved: false
			});
			items.push({
				id: "diff-2",
				type: "different",
				section: `${selectedPage} — Text Differences`,
				description: `Some text content in the uploaded file differs from what is currently on the page.`,
				currentContent: `Current text on page (example)`,
				suggestedContent: `Updated text from uploaded file (example). The AI would extract actual text from your PDF/image and compare it with the live site.`,
				approved: false
			});
		}
		if (manualNotes.trim()) items.push({
			id: "diff-notes",
			type: "missing",
			section: "Manual Notes",
			description: manualNotes,
			suggestedContent: `Changes requested: "${manualNotes}"`,
			approved: false
		});
		const defaults = {};
		items.forEach((item) => {
			defaults[item.id] = item.type === "new_page" ? "create_page" : "add";
		});
		setDiffItems(items);
		setActionChoices(defaults);
		setAnalysisText(`Analysis complete. Compared uploaded file(s) against ${selectedPage} (sections: ${pageSections.join(", ")}). Found ${items.length} difference(s).\n\nPlease review each item below and choose an action before applying.`);
		setState("ready");
	};
	const applyChanges = async () => {
		const approved = diffItems.filter((item) => item.approved && actionChoices[item.id] !== "skip");
		if (approved.length === 0) {
			setApplyMsg("No items approved for changes. Check the items you want to apply.");
			return;
		}
		setState("applying");
		await new Promise((r) => setTimeout(r, 1500));
		setApplyMsg(`${approved.length} change(s) processed. In production, this would: create new pages in the pages table, update site_settings overrides, or queue the changes for developer review.`);
		setState("ready");
	};
	const toggleApprove = (id) => setDiffItems((prev) => prev.map((item) => item.id === id ? {
		...item,
		approved: !item.approved
	} : item));
	const setAction = (id, action) => setActionChoices((prev) => ({
		...prev,
		[id]: action
	}));
	const approvedCount = diffItems.filter((i) => i.approved).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold text-navy",
				children: "AI Website Assistant"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Upload PDFs, images or screenshots. The AI will compare them against your existing website and show you what is different or missing — then ask for your confirmation before changing anything."
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-5 gap-px bg-hairline",
			children: [
				"Upload File",
				"Select Page",
				"AI Analyzes",
				"Review Diff",
				"Apply Changes"
			].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `bg-card p-4 text-center ${i < 3 && state === "ready" ? "opacity-50" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold ${state === "analyzing" && i === 2 || state === "ready" && i === 3 || state === "applying" && i === 4 ? "bg-teal text-[#05231f]" : "bg-navy/10 text-navy"}`,
					children: i + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.72rem] font-medium text-navy",
					children: step
				})]
			}, step))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
						children: "Upload Files"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onDragOver: (e) => {
							e.preventDefault();
							setDragOver(true);
						},
						onDragLeave: () => setDragOver(false),
						onDrop: (e) => {
							e.preventDefault();
							setDragOver(false);
							if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
						},
						className: `flex flex-col items-center gap-3 rounded-sm border-2 border-dashed p-8 transition-colors ${dragOver ? "border-teal bg-teal/5" : "border-hairline bg-card"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl opacity-30",
								children: "📎"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-navy",
									children: "Drag & drop PDF, images, or screenshots"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "PNG, JPG, PDF, WebP — anything you want the AI to analyze"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => fileInputRef.current?.click(),
								disabled: state === "uploading",
								className: "rounded-sm bg-teal px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#05231f] disabled:opacity-60",
								children: state === "uploading" ? "Uploading…" : "Choose files"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileInputRef,
								type: "file",
								multiple: true,
								accept: "image/*,.pdf",
								className: "hidden",
								onChange: (e) => {
									if (e.target.files) handleFiles(e.target.files);
								}
							})
						]
					})] }),
					uploadedFiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
							children: "Uploaded Files"
						}), uploadedFiles.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 rounded-sm border border-hairline bg-card px-4 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base",
									children: f.type.includes("pdf") ? "📄" : "🖼"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-xs font-medium text-navy",
									children: f.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setUploadedFiles((prev) => prev.filter((_, j) => j !== i)),
								className: "text-xs text-destructive hover:opacity-75",
								children: "✕"
							})]
						}, i))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
							children: "Compare Against Page"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: selectedPage,
							onChange: (e) => setSelectedPage(e.target.value),
							className: "w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal",
							children: SITE_STRUCTURE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: p.page,
								children: p.page
							}, p.page))
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-hairline bg-secondary/50 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-science",
							children: ["Current Sections on ", selectedPage]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: (SITE_STRUCTURE.find((p) => p.page === selectedPage)?.sections ?? []).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm bg-navy/10 px-2.5 py-1 text-[0.68rem] font-medium text-navy",
								children: s
							}, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
							children: "Additional Notes (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: manualNotes,
							onChange: (e) => setManualNotes(e.target.value),
							rows: 4,
							placeholder: "Describe what you want to change or add. E.g.: 'Add a new section about our Seoul campus between the Values section and the Milestones section.'",
							className: "w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal resize-y"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: runAnalysis,
						disabled: state === "analyzing" || state === "uploading" || state === "applying",
						className: "w-full rounded-sm bg-teal py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60",
						children: state === "analyzing" ? "🔍 Analyzing…" : state === "uploading" ? "⏳ Uploading…" : "🔍 Analyze & Compare"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					state === "analyzing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-4 rounded-sm border border-hairline bg-card p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-4xl animate-pulse",
								children: "🔍"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-navy",
								children: "Analyzing uploaded files…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Comparing with existing website structure and content"
							})
						]
					}),
					state === "idle" && uploadedFiles.length === 0 && !manualNotes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-3 rounded-sm border-2 border-dashed border-hairline p-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl opacity-20",
							children: "🤖"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Upload files and click Analyze to get started."
						})]
					}),
					analysisText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-teal/30 bg-teal/5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-science mb-2",
							children: "Analysis Summary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-navy whitespace-pre-wrap",
							children: analysisText
						})]
					}),
					diffItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70",
								children: [
									"Differences Found (",
									diffItems.length,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDiffItems((prev) => prev.map((i) => ({
										...i,
										approved: true
									}))),
									className: "text-[0.65rem] font-semibold text-science hover:underline",
									children: "Approve all"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setDiffItems((prev) => prev.map((i) => ({
										...i,
										approved: false
									}))),
									className: "text-[0.65rem] font-semibold text-muted-foreground hover:underline",
									children: "Deselect all"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: diffItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `rounded-sm border bg-card p-5 transition-all ${item.approved ? "border-teal" : "border-hairline"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: item.approved,
										onChange: () => toggleApprove(item.id),
										className: "mt-1 accent-teal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap items-center gap-2 mb-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-sm px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] ${item.type === "missing" ? "bg-amber-100 text-amber-700" : item.type === "different" ? "bg-blue-100 text-blue-700" : "bg-teal/10 text-science"}`,
													children: item.type === "missing" ? "Missing" : item.type === "different" ? "Different" : "New Page"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-semibold text-navy",
													children: item.section
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: item.description
											}),
											item.currentContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-1",
													children: "Current:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "rounded bg-secondary p-2 text-xs text-navy",
													children: item.currentContent
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-science mb-1",
													children: "Suggested:"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "rounded bg-teal/5 p-2 text-xs text-navy border border-teal/20",
													children: item.suggestedContent
												})]
											}),
											item.approved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex flex-wrap gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "w-full text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-navy/70 mb-1",
													children: "Action:"
												}), [
													"add",
													"update",
													"replace",
													"create_page",
													"skip"
												].map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setAction(item.id, action),
													className: `rounded-sm px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] transition-colors ${actionChoices[item.id] === action ? "bg-navy text-white" : "border border-hairline text-navy hover:bg-navy/5"}`,
													children: action === "create_page" ? "Create Page" : action.charAt(0).toUpperCase() + action.slice(1)
												}, action))]
											})
										]
									})]
								})
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-sm border border-amber-200 bg-amber-50 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.72rem] font-semibold text-amber-800",
								children: "⚠️ Confirmation Required"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-amber-700",
								children: [
									"You have approved ",
									approvedCount,
									" of ",
									diffItems.length,
									" items. Existing website content will NOT be removed unless you explicitly select \"Replace\". Actions will only be applied to approved items."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: applyChanges,
							disabled: approvedCount === 0 || state === "applying",
							className: "w-full rounded-sm bg-navy py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white disabled:opacity-40",
							children: state === "applying" ? "Applying changes…" : `Apply ${approvedCount} Approved Change${approvedCount !== 1 ? "s" : ""}`
						})
					] }),
					applyMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-teal/30 bg-teal/10 p-4 text-sm text-science",
						children: ["✓ ", applyMsg]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-hairline bg-secondary/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] font-semibold text-navy mb-1",
							children: "Connect to AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"To enable full AI analysis (GPT-4 Vision / Claude), add your API key in",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Site Settings → AI Configuration" }),
								". Without an API key the assistant runs in demonstration mode, showing the workflow without actual AI analysis."
							]
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { AIAssistantPage as component };
