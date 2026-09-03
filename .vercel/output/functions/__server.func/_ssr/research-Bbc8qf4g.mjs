import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, c as TealButton, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as cleanroom_default } from "./cleanroom-CQ-A4hT1.mjs";
import { t as korean_lab_team_default } from "./korean-lab-team-ChdHG79e.mjs";
import { t as korean_scientist_vials_default } from "./korean-scientist-vials-D2Mon5wP.mjs";
import { t as qc_lab_default } from "./qc-lab-BtsOlEPe.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { t as research_team_default } from "./research-team-CiE4O4Je.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
import { t as lyophilizer_default } from "./lyophilizer-Q9Swj7Dp.mjs";
import { t as vials_default } from "./vials-CPfIHwza.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-Bbc8qf4g.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { t, tx } = useI18n();
	const areas = tx("research.areas") ?? [];
	const team = tx("research.team") ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("research.eyebrow"),
			title: "Research & Development",
			lead: "Advancing Science Through Precision Research",
			image: research_team_default,
			imageAlt: "Vesco Science research team working in the laboratory",
			crumb: {
				label: t("research.title"),
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t("research.eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
					children: "Advancing Science Through Precision Research"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-[1.0625rem] leading-relaxed text-muted-foreground",
					children: [
						"At ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-navy",
							children: "Vesco Science"
						}),
						", research and development is at the core of everything we do. We focus on translating advanced biotechnology into reliable, scalable, and scientifically characterized solutions for regenerative medicine, aesthetic medicine, and cell-derived biologics."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 border-l-4 border-teal bg-card px-6 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[0.8rem] font-bold uppercase tracking-[0.16em] text-science",
						children: "Our R&D Philosophy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
						children: [
							"We believe meaningful innovation begins with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy",
								children: "scientific understanding, rigorous characterization, and continuous optimization."
							}),
							" ",
							"Our R&D teams work across product development, formulation, purification, analytical testing, and process optimization to improve consistency and product quality."
						]
					})]
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 140,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: korean_lab_team_default,
					alt: "Vesco Science research team in the laboratory",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Development Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: "From Research to Innovation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground",
						children: "Our development process connects laboratory research with real-world applications. Each stage is designed to evaluate critical product characteristics, optimize manufacturing parameters, and establish reproducible processes before a product moves toward broader development."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5",
						children: [
							{
								num: "01",
								title: "Research",
								body: "Exploring scientific possibilities.",
								img: molecular_default
							},
							{
								num: "02",
								title: "Laboratory Development",
								body: "Developing formulations and protocols.",
								img: korean_lab_team_default
							},
							{
								num: "03",
								title: "Characterization",
								body: "Analyzing key attributes for quality and consistency.",
								img: qc_lab_default
							},
							{
								num: "04",
								title: "Process Optimization",
								body: "Refining processes for better performance and scalability.",
								img: cleanroom_default
							},
							{
								num: "05",
								title: "Product Development",
								body: "Delivering advanced, reliable solutions.",
								img: vials_default
							}
						].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: step.img,
								alt: step.title,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover opacity-80"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal",
										children: step.num
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-2 text-[0.9rem] font-semibold text-navy",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground",
										children: step.body
									})
								]
							})]
						}, step.num))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 border border-hairline bg-background p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-science mb-5",
							children: "Our development philosophy follows an integrated pathway:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
							children: [
								{
									num: "01",
									label: "Research",
									desc: "Exploring biological materials, technologies and new product opportunities."
								},
								{
									num: "02",
									label: "Development",
									desc: "Translating scientific concepts into optimized formulations and processes."
								},
								{
									num: "03",
									label: "Manufacturing",
									desc: "Scaling validated concepts into controlled production."
								},
								{
									num: "04",
									label: "Quality",
									desc: "Applying testing, documentation and quality controls throughout the lifecycle."
								}
							].map((item, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative bg-card p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-[0.65rem] font-bold text-[#05231f]",
											children: item.num
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-[0.88rem] font-semibold text-navy",
											children: item.label
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2.5 text-[0.78rem] leading-relaxed text-muted-foreground",
										children: item.desc
									}),
									i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-1/2 -right-2.5 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-[#05231f] text-[0.6rem] font-bold lg:flex",
										children: "→"
									})
								]
							}, item.num))
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t("research.eyebrow"),
			title: t("research.areasTitle")
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
			children: areas.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group h-full bg-card p-8 transition-colors hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[0.75rem] font-bold tracking-[0.18em] text-teal",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-[1.1rem] font-semibold text-navy",
						children: a
					})]
				})
			}, a))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Exosome Research"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: "Exosome & Extracellular Vesicle Research"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: [
							"Vesco Science has a strong focus on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy",
								children: "extracellular vesicle and exosome-based technologies."
							}),
							" ",
							"Our research explores isolation, purification, concentration, preservation, and analytical characterization of extracellular vesicles derived from different biological sources."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
						children: [
							"We investigate key parameters such as",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy",
								children: "particle concentration, size distribution, morphology, and vesicle-associated markers"
							}),
							" ",
							"to support consistent product characterization."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-px bg-hairline sm:grid-cols-2",
						children: [
							{
								label: "DNA",
								desc: "Genetic material cargo"
							},
							{
								label: "Protein",
								desc: "Functional protein content"
							},
							{
								label: "mRNA",
								desc: "Messenger RNA payload"
							},
							{
								label: "miRNA",
								desc: "Regulatory microRNA"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.85rem] font-semibold text-navy",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[0.78rem] text-muted-foreground",
								children: item.desc
							})]
						}, item.label))
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: molecular_default,
						alt: "Extracellular vesicle biology diagram",
						loading: "lazy",
						className: "w-full object-cover rounded-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border border-hairline bg-background p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-science mb-4",
							children: "Extracellular Vesicle Process"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: [
								"EV Generating Cell",
								"Multivesicular Bodies",
								"Membrane Fusion",
								"Extracellular Vesicles",
								"Recipient Cell"
							].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.72rem] font-medium text-navy",
									children: step
								}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-teal font-bold text-[0.7rem]",
									children: "→"
								})]
							}, step))
						})]
					})] })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cleanroom_default,
						alt: "Advanced purification and processing facility",
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover opacity-80"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-teal",
								children: "Technology"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white",
								children: "Advanced Purification & Processing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-[1rem] leading-relaxed text-white/70",
								children: [
									"Our R&D capabilities include the optimization of advanced purification approaches such as",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-white",
										children: "ultrafiltration, tangential flow filtration, chromatography, and size-based separation technologies."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[1rem] leading-relaxed text-white/70",
								children: "These processes are continuously evaluated to improve recovery, purity, reproducibility, and scalability while maintaining the desired characteristics of the biological material."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-2",
								children: [
									"Ultrafiltration",
									"Tangential Flow Filtration",
									"Chromatography",
									"Size-Based Separation",
									"Ultracentrifugation"
								].map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-sm border border-white/20 px-3.5 py-2 text-[0.78rem] font-medium text-white/80",
									children: tech
								}, tech))
							})
						] })
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Analytical Science"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
					children: "Analytical Characterization"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
					children: [
						"Scientific characterization is an essential part of our development workflow. Depending on the product and development stage, we utilize analytical approaches including",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-navy",
							children: "Nanoparticle Tracking Analysis (NTA), electron microscopy-based imaging, protein marker analysis, and physicochemical testing."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
					children: "These methods help us understand and monitor important product attributes throughout development and manufacturing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-hairline sm:grid-cols-2",
					children: [
						{
							title: "Particle Characterization",
							items: [
								"NTA",
								"Particle concentration",
								"Size distribution"
							]
						},
						{
							title: "Morphology",
							items: ["TEM imaging", "Cryo-TEM"]
						},
						{
							title: "Safety Testing",
							items: [
								"Sterility",
								"Endotoxin",
								"Mycoplasma"
							]
						},
						{
							title: "Purity Analysis",
							items: ["Protein analysis", "Particle-to-protein ratio"]
						}
					].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card p-5 outline outline-hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[0.85rem] font-semibold text-navy",
							children: group.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1.5",
							children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-[0.8rem] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 shrink-0 rounded-full bg-teal" }), item]
							}, item))
						})]
					}, group.title))
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: qc_lab_default,
					alt: "Analytical characterization laboratory",
					loading: "lazy",
					className: "aspect-[3/4] w-full object-cover"
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: molecular_default,
					alt: "Electron microscopy image of exosome vesicles at 200nm scale",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Formulation Science"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
							children: "Formulation & Stability Research"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
							children: [
								"Biological products require careful formulation and storage strategies. Our R&D activities evaluate",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-navy",
									children: "formulation composition, concentration, preservation methods, and storage conditions"
								}),
								" ",
								"to support product stability and consistency."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
							children: [
								"We also investigate different preservation technologies, including",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-navy",
									children: "lyophilization and controlled frozen storage,"
								}),
								" ",
								"where appropriate for the product platform."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
							children: [
								"Formulation composition evaluation",
								"Concentration optimization",
								"Preservation method development",
								"Storage condition studies",
								"Lyophilization cycle development",
								"Controlled frozen storage protocols"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-[0.9rem] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" }), item]
							}, item))
						})
					] })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Process Engineering"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
					children: "Process Development"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
					children: [
						"A promising laboratory formulation must also be reproducible at scale. Our process-development work focuses on converting laboratory protocols into",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-navy",
							children: "controlled, repeatable, and scalable manufacturing processes."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
					children: "We continuously optimize critical process parameters to improve batch-to-batch consistency and manufacturing efficiency."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-hairline sm:grid-cols-1",
					children: [
						{
							num: "01",
							label: "Lab Scale",
							desc: "Developing and validating formulations and processes at lab scale."
						},
						{
							num: "02",
							label: "Parameter Refinement",
							desc: "Refining process parameters to improve performance, yield and consistency."
						},
						{
							num: "03",
							label: "Pilot Scale",
							desc: "Scaling the optimized process in pilot systems to ensure robustness and scalability."
						},
						{
							num: "04",
							label: "Process Controls",
							desc: "Implementing process controls to ensure reproducibility and efficiency."
						},
						{
							num: "05",
							label: "Commercial Manufacturing",
							desc: "Achieving consistent, reliable and high-quality manufacturing."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 bg-card px-5 py-4 outline outline-hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-[0.62rem] font-bold text-[#05231f]",
							children: item.num
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.88rem] font-semibold text-navy",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[0.8rem] leading-relaxed text-muted-foreground",
							children: item.desc
						})] })]
					}, item.num))
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lyophilizer_default,
					alt: "Pharmaceutical process development equipment",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Quality Approach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: "Quality by Design"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
						children: [
							"Vesco Science integrates quality considerations into product development from the earliest stages. By identifying",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy",
								children: "critical quality attributes and critical process parameters,"
							}),
							" ",
							"our teams can systematically evaluate and control factors that may influence product performance and consistency."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-6 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-sm border border-teal/30 bg-teal/10 px-5 py-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-teal",
								children: "Quality by Design"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-1",
							children: [
								{
									icon: "📋",
									title: "Critical Quality Attributes",
									desc: "Identifying product properties essential to safety and efficacy."
								},
								{
									icon: "⚙️",
									title: "Critical Process Parameters",
									desc: "Defining and controlling process variables that affect quality."
								},
								{
									icon: "⚠️",
									title: "Risk Assessment",
									desc: "Evaluating and mitigating risks throughout development."
								},
								{
									icon: "🎛️",
									title: "Process Control",
									desc: "Implementing controls to maintain consistent process performance."
								},
								{
									icon: "✅",
									title: "Consistent Product Quality",
									desc: "Delivering products that reliably meet defined specifications."
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4 bg-card p-4 outline outline-hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 text-lg",
									children: item.icon
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.85rem] font-semibold text-navy",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[0.78rem] leading-relaxed text-muted-foreground",
									children: item.desc
								})] })]
							}, item.title))
						})]
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: qc_lab_default,
						alt: "Quality by Design framework",
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-14 lg:grid-cols-2 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-teal",
							children: "Innovation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white",
							children: "Continuous Innovation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1rem] leading-relaxed text-white/70",
							children: "R&D at Vesco Science does not end when a product is developed. We continue to evaluate new technologies, biological sources, analytical methods, and processing strategies to expand our capabilities and improve existing platforms."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-px bg-white/10 sm:grid-cols-2",
							children: [
								{
									title: "New Technologies",
									desc: "Evaluating emerging platforms and techniques in biotechnology."
								},
								{
									title: "Biological Sources",
									desc: "Exploring new cell sources and biological materials."
								},
								{
									title: "Analytical Methods",
									desc: "Developing and validating improved characterization approaches."
								},
								{
									title: "Processing Strategies",
									desc: "Optimizing scalability, efficiency and product consistency."
								}
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-white/[0.04] p-5 outline outline-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[0.88rem] font-semibold text-white",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[0.78rem] leading-relaxed text-white/60",
									children: item.desc
								})]
							}, item.title))
						})
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: korean_scientist_vials_default,
							alt: "Continuous innovation in manufacturing",
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover opacity-80"
						})
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Our Goal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground",
				children: [
					"Our goal is simple: to transform advanced biological research into",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-navy",
						children: "precisely developed, consistently characterized, and scientifically driven solutions."
					})
				]
			})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: vials_default,
					alt: "Vesco Science scientist in laboratory",
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-navy-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "radial-gradient(ellipse at 50% 100%,rgba(53,184,176,0.12),transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 text-center md:px-10 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-teal",
									children: "Science."
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/80",
									children: "Precision."
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/60",
									children: "Innovation."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-8 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65",
							children: "Vesco Science combines biotechnology, analytical science, and process engineering to develop the next generation of advanced biological products."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
								to: "/contact",
								children: t("cta.primary")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
								to: "/technology",
								variant: "ghost",
								children: t("hero.ctaPrimary")
							})]
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: t("research.eyebrow"),
				title: t("research.teamTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-wrap gap-3",
				children: team.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-sm border border-white/15 px-5 py-2.5 text-[0.85rem] text-white/75",
					children: m
				}, m))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
