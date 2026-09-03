import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, c as TealButton, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as cleanroom_default } from "./cleanroom-CQ-A4hT1.mjs";
import { t as korean_lab_team_default } from "./korean-lab-team-ChdHG79e.mjs";
import { t as korean_scientist_vials_default } from "./korean-scientist-vials-D2Mon5wP.mjs";
import { t as qc_lab_default } from "./qc-lab-BtsOlEPe.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-jAOOTbvf.js
var import_jsx_runtime = require_jsx_runtime();
var seoul_biotech_campus_default = "/assets/seoul-biotech-campus-D3ksiCpk.jpg";
function Page() {
	const { t, tx } = useI18n();
	const blocks = tx("pages.about.blocks") ?? [];
	const points = tx("intro.points") ?? [];
	const story = tx("pages.about.story");
	const values = tx("pages.about.values");
	const milestones = tx("pages.about.milestones");
	const location = tx("pages.about.location");
	const people = tx("pages.about.people");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("pages.about.eyebrow"),
			title: t("pages.about.title"),
			lead: t("pages.about.lead"),
			image: cleanroom_default,
			imageAlt: t("intro.imageAlt"),
			crumb: {
				label: t("nav.about"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.15fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("intro.eyebrow"),
				title: t("intro.title"),
				intro: t("intro.body1")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground",
				children: t("intro.body2")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-px bg-hairline",
				children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-card px-6 py-4 text-[0.95rem] text-navy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), p]
				}, p))
			}) })]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Who We Are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: "Where Science Meets Scalable Manufacturing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground",
						children: "At Vesco Science, we believe that meaningful innovation requires more than scientific discovery. It requires the ability to translate research into reproducible formulations, controlled manufacturing processes and consistently documented products."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5",
						children: [
							{
								num: "01",
								title: "Research & Development",
								body: "Scientific exploration and product development."
							},
							{
								num: "02",
								title: "Advanced Biotechnology",
								body: "Platforms including exosome, PDRN/PN, peptide and regenerative technologies."
							},
							{
								num: "03",
								title: "Formulation Development",
								body: "Development and optimization of formulations according to product requirements."
							},
							{
								num: "04",
								title: "Manufacturing",
								body: "Controlled production, filling and packaging capabilities."
							},
							{
								num: "05",
								title: "Quality & Analysis",
								body: "Product-specific testing, documentation and quality control."
							}
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full bg-card p-7 outline outline-hairline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-[0.72rem] font-bold tracking-[0.14em] text-teal",
										children: item.num
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-[0.95rem] font-semibold text-navy",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[0.85rem] leading-relaxed text-muted-foreground",
										children: item.body
									})
								]
							})
						}, item.num))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-6 border-t border-hairline pt-6",
						children: [
							"Science Driven",
							"Precision Focused",
							"Quality Assured",
							"Built for Global Impact"
						].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-[0.8rem] font-medium text-navy/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-teal" }), label]
						}, label))
					})
				})
			]
		}),
		story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: korean_lab_team_default,
					alt: story.imageAlt,
					loading: "lazy",
					width: 1280,
					height: 960,
					className: "aspect-[4/3] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t("meta.company")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[0.9rem] text-navy",
						children: t("meta.tagline")
					})]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: story.eyebrow,
						title: story.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: story.body1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
						children: story.body2
					})
				] })
			})]
		}) }) : null,
		values ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: values.eyebrow,
				title: values.title
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
				children: values.items.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-[1.05rem] font-semibold text-navy",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.92rem] leading-relaxed text-muted-foreground",
								children: v.body
							})
						]
					})
				}, v.title))
			})]
		}) : null,
		milestones ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: milestones.eyebrow,
					title: milestones.title,
					invert: true
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-7",
					children: milestones.items.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "h-full bg-navy-deep/60 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[1.15rem] font-bold tracking-[0.08em] text-teal",
								children: m.year
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[0.86rem] leading-relaxed text-white/75",
								children: m.text
							})]
						})
					}, m.year))
				})]
			})]
		}) : null,
		blocks.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: blocks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-flat h-full p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[1.15rem] font-semibold text-navy",
							children: b.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.95rem] leading-relaxed text-muted-foreground",
							children: b.body
						})]
					})
				}, b.title))
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Our Scientific Approach"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
				children: "From Biological Science to Finished Product"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground",
				children: "At Vesco Science, we follow an integrated approach that connects scientific research with product development, controlled manufacturing, and quality assurance. From the initial biological concept to the finished product, each stage is designed to support consistency, precision, and product integrity."
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 120,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						num: "01",
						title: "Research",
						sub: "Exploring biological materials, technologies and new product opportunities.",
						img: molecular_default
					},
					{
						num: "02",
						title: "Development",
						sub: "Translating scientific concepts into optimized formulations and processes.",
						img: korean_lab_team_default
					},
					{
						num: "03",
						title: "Manufacturing",
						sub: "Scaling validated concepts into controlled production.",
						img: cleanroom_default
					},
					{
						num: "04",
						title: "Quality",
						sub: "Applying testing, documentation and quality controls throughout the product lifecycle.",
						img: qc_lab_default
					}
				].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-card overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: step.img,
							alt: step.title,
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover opacity-75"
						}),
						i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-[calc(37.5%-12px)] right-0 z-10 hidden h-7 w-7 items-center justify-center bg-teal text-[#05231f] text-xs font-bold lg:flex",
							children: "→"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-[0.7rem] font-bold text-[#05231f]",
									children: step.num
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[1rem] font-semibold text-navy",
									children: step.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.85rem] leading-relaxed text-muted-foreground",
								children: step.sub
							})]
						})
					]
				}, step.num))
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Manufacturing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: "From Development to Production"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground",
						children: "Scientific innovation becomes commercially valuable when it can be translated into a controlled and scalable manufacturing process."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 overflow-x-auto rounded-sm border border-hairline bg-background p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-science mb-5",
								children: "Our manufacturing approach connects:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex min-w-[680px] items-center gap-0",
								children: [
									"R&D",
									"Product Development",
									"Process Optimization",
									"Production",
									"Quality Control",
									"Final Product"
								].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `px-4 py-3 text-center text-[0.78rem] font-semibold ${i === 0 || i === arr.length - 1 ? "bg-teal text-[#05231f]" : "bg-navy/[0.07] text-navy"}`,
										children: step
									}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-1 text-teal font-bold text-sm",
										children: "→"
									})]
								}, step))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[0.88rem] text-muted-foreground",
								children: "This integrated structure supports the transition from product concept to commercial manufacturing."
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								title: "R&D",
								body: "Exploring innovative biological materials and advanced technologies.",
								img: molecular_default
							},
							{
								title: "Development",
								body: "Optimizing formulations and processes for stability, efficacy and consistency.",
								img: korean_lab_team_default
							},
							{
								title: "Production",
								body: "Advanced manufacturing facilities with controlled environments and precise processes.",
								img: cleanroom_default
							},
							{
								title: "Quality",
								body: "Rigorous testing, monitoring and documentation at every stage.",
								img: qc_lab_default
							}
						].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: step.img,
								alt: step.title,
								loading: "lazy",
								className: "aspect-[3/2] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold text-navy",
									children: step.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[0.82rem] text-muted-foreground",
									children: step.body
								})]
							})]
						}, step.title))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/facility",
							variant: "outline",
							children: "Explore Manufacturing"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-teal",
								children: "Quality & Control"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white",
								children: "Quality Built Into Every Stage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[1rem] leading-relaxed text-white/70",
								children: "At Vesco Science, quality is integrated throughout the entire product lifecycle — from raw material selection and process development to manufacturing, testing, documentation, storage and distribution."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-[1rem] leading-relaxed text-white/70",
								children: [
									"Our quality approach is designed to support",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-white",
										children: "product consistency, process control, traceability and integrity"
									}),
									" ",
									"while meeting the defined requirements of each product and market."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/quality",
									children: "Our Quality System"
								})
							})
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3",
								children: [
									{
										num: "01",
										title: "Raw Material Control",
										body: "Raw materials are carefully evaluated against defined specifications before entering the manufacturing process."
									},
									{
										num: "02",
										title: "Process Control",
										body: "Manufacturing processes are performed under defined and monitored conditions."
									},
									{
										num: "03",
										title: "Analytical Testing",
										body: "Product-specific analytical testing is used to evaluate key quality attributes and characteristics."
									},
									{
										num: "04",
										title: "Microbiological Testing",
										body: "Relevant microbiological assessments are conducted according to product requirements and applicable standards."
									},
									{
										num: "05",
										title: "Batch Traceability",
										body: "Each batch is supported by documented manufacturing and quality information."
									},
									{
										num: "06",
										title: "Storage & Distribution",
										body: "Products are stored and transported according to their defined storage and handling requirements."
									}
								].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: i * 50,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "h-full bg-white/[0.04] p-6 outline outline-white/10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal",
												children: item.num
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-3 text-[0.9rem] font-semibold text-white",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-[0.8rem] leading-relaxed text-white/60",
												children: item.body
											})
										]
									})
								}, item.num))
							})
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Global Partnership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: [
							"Vesco Science ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-science",
								children: "×"
							}),
							" EverCeutical"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground",
						children: "Strategic Global Partnership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: "Vesco Science collaborates with EverCeutical for the global marketing and commercialization of selected Vesco Science products, including exosome, filler and peptide-based solutions."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border border-hairline bg-background p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-science mb-4",
							children: "Selected Product Platforms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"Exosomes",
								"HA & Fillers",
								"Peptides",
								"PDRN / PN",
								"Regenerative Solutions"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border border-hairline bg-card px-3 py-1.5 text-[0.78rem] font-medium text-navy",
								children: item
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/about/network",
							variant: "outline",
							children: "Explore EverCeutical Partnership"
						})
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0 border border-hairline overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal",
									children: "Vesco Science"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[0.88rem] text-muted-foreground",
									children: "R&D · Technology · Manufacturing"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center border-y border-hairline bg-teal/5 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[1.5rem] font-bold text-teal/40",
									children: "×"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal",
									children: "EverCeutical"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[0.88rem] text-muted-foreground",
									children: "Global Marketing · Commercialization · Market Expansion"
								})]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l-2 border-teal pl-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our Vision"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] font-semibold text-navy",
						children: "Building the Future of Regenerative Biotechnology"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[1rem] leading-relaxed text-muted-foreground",
						children: "We envision a future where advanced biotechnology can be developed, manufactured and delivered through reliable scientific and quality-driven systems."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
						children: "Our focus is on building technologies and partnerships that contribute to the continued advancement of regenerative medicine and professional aesthetic solutions."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-l-2 border-teal/30 pl-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Our Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] font-semibold text-navy",
							children: "Science With Purpose. Manufacturing With Precision."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[0.95rem] leading-relaxed text-muted-foreground",
							children: "Our mission is to connect:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: [
								"Scientific Research",
								"Advanced Technology",
								"Manufacturing Excellence",
								"Quality Systems"
							].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[0.6rem] font-bold text-teal",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.95rem] font-medium text-navy",
									children: item
								})]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-[0.9rem] text-muted-foreground",
							children: "to create innovative solutions for a rapidly evolving global biotechnology market."
						})
					]
				})
			})]
		}) }),
		location ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: location.eyebrow,
						title: location.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: location.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2",
						children: location.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-hairline bg-card px-3.5 py-2 text-[0.78rem] font-medium text-navy",
							children: p
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/facility",
							variant: "outline",
							children: t("facility.title")
						})
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: seoul_biotech_campus_default,
						alt: location.imageAlt,
						loading: "lazy",
						width: 1280,
						height: 960,
						className: "aspect-[4/3] w-full object-cover"
					})
				})]
			})
		}) : null,
		people ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: korean_scientist_vials_default,
				alt: people.imageAlt,
				loading: "lazy",
				width: 1280,
				height: 960,
				className: "aspect-[4/3] w-full object-cover"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: people.eyebrow,
						title: people.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: people.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/research",
							variant: "outline",
							children: people.cta
						})
					})
				] })
			})]
		}) }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("research.eyebrow"),
				title: t("research.title"),
				intro: t("research.intro")
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/research",
						className: "rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
						children: t("research.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about/mission",
						className: "rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
						children: t("nav.about")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/facility",
						className: "rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
						children: t("facility.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about/network",
						className: "rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science",
						children: t("partnership.eyebrow")
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl",
					style: { background: "radial-gradient(circle,rgba(53,184,176,0.28),transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold text-white",
							children: "Let's Build the Next Generation of Biotechnology"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65",
							children: "Whether you are looking for advanced biotechnology platforms, product development or an OEM/ODM manufacturing partner, Vesco Science is ready to explore new opportunities."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3 lg:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
								to: "/contact",
								children: t("cta.primary")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
								to: "/oem",
								variant: "ghost",
								children: "OEM / ODM Inquiry"
							})]
						})]
					}) })
				})
			]
		})
	] });
}
//#endregion
export { Page as component };
