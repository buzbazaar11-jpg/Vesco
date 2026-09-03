import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
import { a as useAdminAuth } from "./admin-aM2QihXk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-jkWeJM6w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: "⊞",
		exact: true,
		group: "Overview"
	},
	{
		to: "/admin/site-editor",
		label: "Page Editor",
		icon: "✏️",
		group: "Content"
	},
	{
		to: "/admin/pages",
		label: "Visual Builder",
		icon: "🏗",
		group: "Content"
	},
	{
		to: "/admin/media",
		label: "Media Manager",
		icon: "🖼",
		group: "Content"
	},
	{
		to: "/admin/resources",
		label: "Resources & Files",
		icon: "📁",
		group: "Tools"
	},
	{
		to: "/admin/settings",
		label: "Site Settings",
		icon: "⚙️",
		group: "Tools"
	},
	{
		to: "/admin/ai-assistant",
		label: "AI Assistant",
		icon: "🤖",
		group: "Tools"
	}
];
var NAV_GROUPS = [
	"Overview",
	"Content",
	"Tools"
];
function AdminLayout() {
	const { session, isAdmin, loading } = useAdminAuth();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-16 text-center text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginCard, {});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "This account has no admin access. Ask an existing admin to grant it."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => supabase.auth.signOut(),
			className: "mt-6 rounded-sm border border-navy/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em]",
			children: "Sign out"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: `sticky top-0 h-screen flex-shrink-0 border-r border-hairline bg-card transition-all duration-200 ${collapsed ? "w-14" : "w-56"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-hairline px-3 py-4",
							children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-science",
								children: "Vesco"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.72rem] font-bold text-navy",
								children: "Admin Panel"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCollapsed(!collapsed),
								className: "rounded-sm p-1.5 text-muted-foreground hover:bg-navy/5 hover:text-navy",
								title: collapsed ? "Expand sidebar" : "Collapse sidebar",
								children: collapsed ? "→" : "←"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex-1 overflow-y-auto px-2 py-3 space-y-4",
							children: NAV_GROUPS.map((group) => {
								const items = NAV.filter((n) => n.group === group);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 px-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
									children: group
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-0.5",
									children: items.map((n) => {
										const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: n.to,
											title: collapsed ? n.label : void 0,
											className: `flex items-center gap-2.5 rounded-sm px-2.5 py-2 text-sm font-medium transition-colors ${active ? "bg-navy text-white" : "text-navy hover:bg-navy/5"} ${collapsed ? "justify-center" : ""}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base leading-none flex-shrink-0",
												children: n.icon
											}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: n.label
											})]
										}, n.to);
									})
								})] }, group);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-hairline p-3",
							children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 break-all text-[0.65rem] text-muted-foreground",
								children: session.user.email
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/",
									target: "_blank",
									rel: "noreferrer",
									className: `rounded-sm border border-hairline px-2 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-navy hover:bg-navy/5 ${collapsed ? "w-full text-center" : ""}`,
									title: "View site",
									children: collapsed ? "🌐" : "View Site ↗"
								}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => supabase.auth.signOut(),
									className: "text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-navy hover:text-science",
									children: "Sign out"
								})]
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-screen px-6 py-8 lg:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})
			})]
		})
	});
}
function LoginCard() {
	const [mode, setMode] = (0, import_react.useState)("in");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		setMsg(null);
		const { error } = await (mode === "in" ? supabase.auth.signInWithPassword({
			email,
			password
		}) : supabase.auth.signUp({
			email,
			password,
			options: { emailRedirectTo: `${window.location.origin}/admin` }
		}));
		setBusy(false);
		if (error) setMsg(error.message);
		else if (mode === "up") setMsg("Account created. You can sign in now.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "w-full max-w-sm border border-hairline bg-card p-8 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-science",
					children: "Vesco Science"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold text-navy",
					children: "Admin Panel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: mode === "in" ? "Sign in to manage the website." : "Create the first admin account."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-6 grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "border border-hairline bg-background px-4 py-3 text-sm outline-none focus:border-teal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-navy/70",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						minLength: 6,
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "border border-hairline bg-background px-4 py-3 text-sm outline-none focus:border-teal"
					})]
				}),
				msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-science",
					children: msg
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: busy,
					className: "mt-6 w-full rounded-sm bg-teal px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60",
					children: busy ? "Please wait…" : mode === "in" ? "Sign in" : "Create account"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode(mode === "in" ? "up" : "in"),
					className: "mt-4 w-full text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science",
					children: mode === "in" ? "Create first admin account" : "Back to sign in"
				})
			]
		})
	});
}
//#endregion
export { AdminLayout as component };
