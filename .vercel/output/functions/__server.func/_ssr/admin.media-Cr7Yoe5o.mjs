import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
import { n as getPublicUrl, t as STORAGE_BUCKET } from "./admin-aM2QihXk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.media-Cr7Yoe5o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatBytes(bytes) {
	if (!bytes) return "—";
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1048576).toFixed(1)} MB`;
}
function isImage(name) {
	return /\.(png|jpe?g|gif|webp|svg|avif|bmp)$/i.test(name);
}
function MediaManager() {
	const qc = useQueryClient();
	const fileInputRef = (0, import_react.useRef)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [uploadProgress, setUploadProgress] = (0, import_react.useState)([]);
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(null);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const [view, setView] = (0, import_react.useState)("grid");
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterType, setFilterType] = (0, import_react.useState)("all");
	const [previewFile, setPreviewFile] = (0, import_react.useState)(null);
	const [renaming, setRenaming] = (0, import_react.useState)(null);
	const query = useQuery({
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
			return (data ?? []).filter((f) => f.name !== ".emptyFolderPlaceholder" && !f.name.endsWith("/")).map((f) => {
				const path = f.name;
				const publicUrl = getPublicUrl(path);
				return {
					...f,
					path,
					publicUrl
				};
			});
		}
	});
	const showMsg = (text, type = "ok") => {
		setMsg({
			text,
			type
		});
		setTimeout(() => setMsg(null), 4e3);
	};
	const uploadFiles = (0, import_react.useCallback)(async (files) => {
		const arr = Array.from(files);
		if (!arr.length) return;
		setUploading(true);
		setUploadProgress([]);
		let ok = 0;
		for (const file of arr) {
			const safeName = `${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
			setUploadProgress((p) => [...p, `Uploading ${file.name}…`]);
			const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(safeName, file, {
				cacheControl: "31536000",
				upsert: false
			});
			if (!error) {
				ok++;
				setUploadProgress((p) => [...p.slice(0, -1), `✓ ${file.name}`]);
			} else setUploadProgress((p) => [...p.slice(0, -1), `✗ ${file.name}: ${error.message}`]);
		}
		setUploading(false);
		setUploadProgress([]);
		showMsg(`${ok} of ${arr.length} file${arr.length > 1 ? "s" : ""} uploaded.`, ok > 0 ? "ok" : "err");
		qc.invalidateQueries({ queryKey: [
			"admin",
			"media",
			STORAGE_BUCKET
		] });
	}, [qc]);
	const deleteFile = async (file) => {
		if (!confirm(`Delete "${file.name}"? This cannot be undone.`)) return;
		const { error } = await supabase.storage.from(STORAGE_BUCKET).remove([file.path]);
		if (error) return showMsg(error.message, "err");
		showMsg(`"${file.name}" deleted.`);
		if (previewFile?.path === file.path) setPreviewFile(null);
		qc.invalidateQueries({ queryKey: [
			"admin",
			"media",
			STORAGE_BUCKET
		] });
	};
	const deleteSelected = async () => {
		if (!selected.size) return;
		if (!confirm(`Delete ${selected.size} file(s)? This cannot be undone.`)) return;
		const paths = Array.from(selected);
		const { error } = await supabase.storage.from(STORAGE_BUCKET).remove(paths);
		if (error) return showMsg(error.message, "err");
		showMsg(`${selected.size} file(s) deleted.`);
		setSelected(/* @__PURE__ */ new Set());
		qc.invalidateQueries({ queryKey: [
			"admin",
			"media",
			STORAGE_BUCKET
		] });
	};
	const renameFile = async () => {
		if (!renaming) return;
		const { file, newName } = renaming;
		if (!newName.trim() || newName === file.name) {
			setRenaming(null);
			return;
		}
		const { error: copyErr } = await supabase.storage.from(STORAGE_BUCKET).copy(file.path, newName.trim());
		if (copyErr) {
			showMsg(copyErr.message, "err");
			setRenaming(null);
			return;
		}
		await supabase.storage.from(STORAGE_BUCKET).remove([file.path]);
		showMsg(`Renamed to "${newName}".`);
		setRenaming(null);
		qc.invalidateQueries({ queryKey: [
			"admin",
			"media",
			STORAGE_BUCKET
		] });
	};
	const replaceFile = async (file, newFile) => {
		const { error } = await supabase.storage.from(STORAGE_BUCKET).update(file.path, newFile, {
			cacheControl: "31536000",
			upsert: true
		});
		if (error) return showMsg(error.message, "err");
		showMsg(`"${file.name}" replaced.`);
		qc.invalidateQueries({ queryKey: [
			"admin",
			"media",
			STORAGE_BUCKET
		] });
	};
	const copyUrl = (file) => {
		navigator.clipboard.writeText(file.publicUrl);
		setCopied(file.path);
		setTimeout(() => setCopied(null), 2e3);
	};
	const handleDrop = (0, import_react.useCallback)((e) => {
		e.preventDefault();
		setDragOver(false);
		if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
	}, [uploadFiles]);
	const toggleSelect = (path) => {
		setSelected((prev) => {
			const next = new Set(prev);
			next.has(path) ? next.delete(path) : next.add(path);
			return next;
		});
	};
	const selectAll = () => setSelected(new Set(filtered.map((f) => f.path)));
	const clearSelection = () => setSelected(/* @__PURE__ */ new Set());
	const filtered = (query.data ?? []).filter((f) => {
		const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase());
		const matchType = filterType === "all" || filterType === "images" && isImage(f.name) || filterType === "other" && !isImage(f.name);
		return matchSearch && matchType;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold text-navy",
					children: "Media Manager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [
						"Bucket: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "rounded bg-navy/10 px-1.5 py-0.5 text-xs font-mono text-navy",
							children: STORAGE_BUCKET
						}),
						" ",
						"— Public bucket. Uploaded images appear instantly on the live site."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [selected.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: clearSelection,
						className: "text-xs font-medium text-muted-foreground hover:text-navy",
						children: [
							"Clear (",
							selected.size,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: deleteSelected,
						className: "rounded-sm bg-destructive px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white",
						children: ["Delete ", selected.size]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 rounded-sm border border-hairline p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setView("grid"),
							className: `rounded px-2 py-1 text-xs ${view === "grid" ? "bg-navy text-white" : "text-muted-foreground"}`,
							children: "Grid"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setView("list"),
							className: `rounded px-2 py-1 text-xs ${view === "list" ? "bg-navy text-white" : "text-muted-foreground"}`,
							children: "List"
						})]
					})]
				})]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mb-4 rounded-sm border px-4 py-2.5 text-sm font-medium ${msg.type === "ok" ? "border-teal/30 bg-teal/10 text-science" : "border-destructive/30 bg-destructive/10 text-destructive"}`,
				children: msg.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onDragOver: (e) => {
					e.preventDefault();
					setDragOver(true);
				},
				onDragLeave: () => setDragOver(false),
				onDrop: handleDrop,
				onClick: () => !uploading && fileInputRef.current?.click(),
				className: `mb-6 flex cursor-pointer flex-col items-center gap-3 rounded-sm border-2 border-dashed px-8 py-8 transition-colors ${dragOver ? "border-teal bg-teal/5 scale-[1.01]" : "border-hairline bg-card hover:border-teal/50 hover:bg-teal/3"}`,
				children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-2xl animate-spin",
							children: "⏳"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-navy",
							children: "Uploading…"
						}),
						uploadProgress.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: p
						}, i))
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-3xl opacity-40",
					children: "📁"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-navy",
						children: "Drag & drop files here, or click to choose"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "PNG, JPG, GIF, WebP, SVG, PDF — any format · Works on mobile"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileInputRef,
					type: "file",
					multiple: true,
					accept: "image/*,video/*,application/pdf,.doc,.docx,.zip",
					className: "hidden",
					onChange: (e) => {
						if (e.target.files) uploadFiles(e.target.files);
						e.target.value = "";
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search files…",
						className: "min-w-[200px] flex-1 border border-hairline bg-background px-4 py-2 text-sm outline-none focus:border-teal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: [
							"all",
							"images",
							"other"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilterType(t),
							className: `rounded-sm px-3 py-1.5 text-xs font-medium capitalize transition-colors ${filterType === t ? "bg-navy text-white" : "border border-hairline text-navy hover:bg-navy/5"}`,
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							filtered.length,
							" file",
							filtered.length !== 1 ? "s" : "",
							selected.size > 0 && ` · ${selected.size} selected`
						]
					}),
					filtered.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: selectAll,
						className: "text-xs font-medium text-science hover:underline",
						children: "Select all"
					})
				]
			}),
			query.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 items-center justify-center py-20 text-sm text-muted-foreground",
				children: [
					"Loading files from ",
					STORAGE_BUCKET,
					"…"
				]
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center justify-center gap-3 rounded-sm border-2 border-dashed border-hairline p-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-4xl opacity-20",
						children: "🖼"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-navy",
						children: search ? "No files match your search." : `No files in the "${STORAGE_BUCKET}" bucket yet.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Upload files above to get started."
					})
				]
			}) : view === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
				children: filtered.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `group relative overflow-hidden rounded-sm border transition-all ${selected.has(file.path) ? "border-teal ring-2 ring-teal/30" : "border-hairline hover:border-teal/60"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								toggleSelect(file.path);
							},
							className: `absolute left-1.5 top-1.5 z-20 flex h-5 w-5 items-center justify-center rounded border text-[0.6rem] font-bold transition-all ${selected.has(file.path) ? "border-teal bg-teal text-[#05231f]" : "border-white/60 bg-black/30 text-white opacity-0 group-hover:opacity-100"}`,
							children: selected.has(file.path) ? "✓" : ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPreviewFile(file),
							className: "block aspect-square w-full bg-secondary",
							children: isImage(file.name) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: file.publicUrl,
								alt: file.name,
								loading: "lazy",
								className: "h-full w-full object-cover",
								onError: (e) => {
									e.target.style.display = "none";
								}
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full w-full items-center justify-center text-4xl opacity-30",
								children: /\.pdf$/i.test(file.name) ? "📄" : /\.(mp4|mov|avi|webm)$/i.test(file.name) ? "🎬" : "📎"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-navy/85 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => copyUrl(file),
									className: "w-24 rounded-sm bg-teal px-2 py-1.5 text-[0.65rem] font-semibold uppercase text-[#05231f]",
									children: copied === file.path ? "✓ Copied!" : "Copy URL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setPreviewFile(file),
									className: "w-24 rounded-sm bg-white/20 px-2 py-1.5 text-[0.65rem] font-semibold uppercase text-white",
									children: "Preview"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => void deleteFile(file),
									className: "w-24 rounded-sm bg-destructive/80 px-2 py-1.5 text-[0.65rem] font-semibold uppercase text-white",
									children: "Delete"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-hairline bg-card p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[0.68rem] font-medium text-navy",
								title: file.name,
								children: file.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.62rem] text-muted-foreground",
								children: formatBytes(file.metadata?.size ?? 0)
							})]
						})
					]
				}, file.path))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-sm border border-hairline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-secondary/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "w-8 px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: selected.size === filtered.length && filtered.length > 0,
									onChange: (e) => e.target.checked ? selectAll() : clearSelection(),
									className: "accent-teal"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Preview"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Size"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-right text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-hairline bg-card",
						children: filtered.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: `transition-colors hover:bg-navy/3 ${selected.has(file.path) ? "bg-teal/5" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: selected.has(file.path),
										onChange: () => toggleSelect(file.path),
										className: "accent-teal"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setPreviewFile(file),
										className: "h-10 w-10 overflow-hidden rounded border border-hairline bg-secondary",
										children: isImage(file.name) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: file.publicUrl,
											alt: "",
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-full w-full items-center justify-center text-lg opacity-30",
											children: /\.pdf$/i.test(file.name) ? "📄" : "📎"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "max-w-[200px] px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium text-navy",
										children: file.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: file.path
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-xs text-muted-foreground",
									children: formatBytes(file.metadata?.size ?? 0)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-xs text-muted-foreground",
									children: file.metadata?.mimetype ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-end gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => copyUrl(file),
												className: "text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:text-science",
												children: copied === file.path ? "Copied!" : "Copy URL"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: file.publicUrl,
												target: "_blank",
												rel: "noreferrer",
												className: "text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:text-science",
												children: "Open ↗"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setPreviewFile(file),
												className: "text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:text-science",
												children: "Preview"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => void deleteFile(file),
												className: "text-xs font-semibold uppercase tracking-[0.1em] text-destructive hover:opacity-75",
												children: "Delete"
											})
										]
									})
								})
							]
						}, file.path))
					})]
				})
			}),
			previewFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4",
				onClick: () => setPreviewFile(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-2xl rounded-sm border border-hairline bg-card shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-hairline px-5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xs truncate text-sm font-semibold text-navy",
								children: previewFile.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPreviewFile(null),
								className: "text-muted-foreground hover:text-navy text-lg leading-none",
								children: "✕"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-h-[200px] items-center justify-center bg-secondary/30 p-4",
							children: isImage(previewFile.name) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: previewFile.publicUrl,
								alt: previewFile.name,
								className: "max-h-80 max-w-full rounded object-contain shadow"
							}) : /\.(mp4|mov|webm)$/i.test(previewFile.name) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								controls: true,
								src: previewFile.publicUrl,
								className: "max-h-80 max-w-full rounded"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 text-5xl opacity-40",
									children: /\.pdf$/i.test(previewFile.name) ? "📄" : "📎"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: previewFile.name
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-hairline p-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-science",
									children: "Public URL (use this on your site)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										readOnly: true,
										value: previewFile.publicUrl,
										className: "flex-1 border border-hairline bg-secondary px-3 py-2 text-xs font-mono text-navy outline-none select-all",
										onClick: (e) => e.target.select()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => copyUrl(previewFile),
										className: "flex-shrink-0 rounded-sm bg-teal px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#05231f]",
										children: copied === previewFile.path ? "✓ Copied!" : "Copy"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3 text-xs sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Size"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-navy",
											children: formatBytes(previewFile.metadata?.size ?? 0)
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Type"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-navy",
											children: previewFile.metadata?.mimetype ?? "—"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Bucket"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-navy",
											children: "images"
										})] })
									]
								}),
								renaming?.file.path === previewFile.path ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: renaming.newName,
											onChange: (e) => setRenaming({
												...renaming,
												newName: e.target.value
											}),
											onKeyDown: (e) => {
												if (e.key === "Enter") renameFile();
												if (e.key === "Escape") setRenaming(null);
											},
											autoFocus: true,
											className: "flex-1 border border-teal bg-background px-3 py-2 text-xs outline-none"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: renameFile,
											className: "rounded-sm bg-teal px-3 py-2 text-xs font-semibold text-[#05231f]",
											children: "Rename"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setRenaming(null),
											className: "rounded-sm border border-hairline px-3 py-2 text-xs text-navy",
											children: "Cancel"
										})
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-2 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: previewFile.publicUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "rounded-sm border border-hairline px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:bg-navy/5",
											children: "Open in new tab ↗"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setRenaming({
												file: previewFile,
												newName: previewFile.name
											}),
											className: "rounded-sm border border-hairline px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:bg-navy/5",
											children: "Rename"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "cursor-pointer rounded-sm border border-hairline px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-navy hover:bg-navy/5",
											children: ["Replace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												className: "hidden",
												accept: "image/*,video/*,application/pdf",
												onChange: (e) => {
													const f = e.target.files?.[0];
													if (f) replaceFile(previewFile, f);
													e.target.value = "";
												}
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												deleteFile(previewFile);
												setPreviewFile(null);
											},
											className: "rounded-sm bg-destructive px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white",
											children: "Delete"
										})
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-xs text-muted-foreground",
				children: "All uploaded files use permanent public URLs — no sign-in needed to view them on the website. Works from PC, mobile, and any device."
			})
		]
	});
}
//#endregion
export { MediaManager as component };
