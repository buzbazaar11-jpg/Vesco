import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, c as TealButton, n as NumberedCard, o as Section, s as SectionHeading, t as Eyebrow } from "./primitives-RiugzFh6.mjs";
import { t as cleanroom_default } from "./cleanroom-CQ-A4hT1.mjs";
import { t as korean_lab_team_default } from "./korean-lab-team-ChdHG79e.mjs";
import { t as qc_lab_default } from "./qc-lab-BtsOlEPe.mjs";
import { t as molecular_default } from "./molecular-BXuR7CQB.mjs";
import { d as ARTICLES, p as useI18n } from "./router-Bp76MIo6.mjs";
import { t as exosome_default } from "./exosome-Ds4e84C9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D1-mfYGW.js
var import_jsx_runtime = require_jsx_runtime();
var hero_lab_default = "/assets/hero-lab-SGO064HG.jpg";
function Home() {
	const { t, tx } = useI18n();
	tx("capabilities.items");
	const metrics = tx("capabilities.metrics");
	const techCards = tx("technology.cards");
	const introPoints = tx("intro.points");
	const productCats = tx("products.categories");
	const researchAreas = tx("research.areas");
	const researchTeamItems = tx("research.team");
	const partnershipModels = tx("partnership.models");
	const featuredArticles = ARTICLES.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-screen items-center overflow-hidden bg-navy-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_lab_default,
					alt: t("hero.imageAlt"),
					className: "absolute inset-0 h-full w-full object-cover opacity-45",
					style: { animation: "vs-slow-zoom 26s ease-in-out infinite alternate" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy/35" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-35" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 pt-32 pb-24 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							invert: true,
							children: t("hero.eyebrow")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-7 max-w-4xl text-[clamp(2.4rem,5.6vw,4.4rem)] leading-[1.03] font-semibold text-white",
								children: t("hero.title")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 220,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-display text-[clamp(1.05rem,1.7vw,1.4rem)] text-teal",
								children: t("hero.subtitle")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 320,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70",
								children: t("hero.body")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 420,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-11 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/technology",
									children: t("hero.ctaPrimary")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/oem",
									variant: "ghost",
									children: t("hero.ctaSecondary")
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative bg-white border-b border-hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-[1240px] px-6 py-10 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5",
					children: [
						{
							icon: "🔬",
							title: "R&D Driven",
							body: "Continuous research and innovation to advance biotechnology solutions."
						},
						{
							icon: "🏭",
							title: "Advanced Manufacturing",
							body: "State-of-the-art facilities ensuring precision, consistency and scale."
						},
						{
							icon: "🧬",
							title: "Exosome Technology",
							body: "Advanced isolation, purification and characterization of extracellular vesicles."
						},
						{
							icon: "🧫",
							title: "Regenerative Platforms",
							body: "Exosome, PDRN/PN, Peptide and HA-based solutions for regenerative applications."
						},
						{
							icon: "⚙️",
							title: "OEM / ODM Solutions",
							body: "End-to-end development and manufacturing tailored to your brand."
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-2xl",
								children: item.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[0.8rem] font-bold uppercase tracking-[0.1em] text-navy",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-px w-8 bg-teal/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.75rem] leading-relaxed text-muted-foreground",
								children: item.body
							})
						]
					}, item.title))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t("intro.eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
					children: "Where Biotechnology Meets Manufacturing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-[1rem] leading-relaxed text-muted-foreground",
					children: t("intro.body1")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[1rem] leading-relaxed text-muted-foreground",
					children: t("intro.body2")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 flex flex-wrap gap-2",
					children: introPoints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border border-hairline bg-card px-3.5 py-2 text-[0.78rem] font-medium text-navy",
						children: p
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/about",
						variant: "outline",
						children: "Discover Vesco Science"
					})
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 140,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cleanroom_default,
						alt: "Vesco Science laboratory facility",
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 -left-5 hidden border border-hairline bg-card px-6 py-5 md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t("meta.company")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[0.9rem] text-navy",
							children: t("meta.tagline")
						})]
					})]
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t("technology.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: t("technology.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground",
						children: t("technology.intro")
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							num: "01",
							slug: "exosome",
							title: "Exosome Technology",
							body: "Extracellular vesicle development, purification, characterization and formulation."
						},
						{
							num: "02",
							slug: "pdrn-pn",
							title: "PDRN / PN Technology",
							body: "Advanced regenerative material platforms and formulation development."
						},
						{
							num: "03",
							slug: "formulation",
							title: "Peptide Technology",
							body: "Bioactive peptide and peptide-complex formulation capabilities."
						},
						{
							num: "04",
							slug: "formulation",
							title: "HA & Regenerative Formulation",
							body: "Hyaluronic acid and advanced aesthetic/regenerative formulations."
						}
					].map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedCard, {
							num: card.num,
							title: card.title,
							body: card.body,
							to: "/technology/$slug",
							params: { slug: card.slug }
						})
					}, card.num))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
						children: techCards.slice(4).map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedCard, {
							num: card.num,
							title: card.title,
							body: card.body,
							to: "/technology/$slug",
							params: { slug: card.slug }
						}, card.slug))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/technology",
							variant: "outline",
							children: "Explore All Technologies"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: exosome_default,
					alt: t("exosome.imageAlt"),
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover opacity-20"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy-deep/95 via-navy/85 to-navy-deep/95" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-teal",
								children: "Exosome Technology"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white",
								children: "From Cellular Source to Characterized Product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-[1rem] leading-relaxed text-white/70",
								children: t("exosome.body1")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[1rem] leading-relaxed text-white/70",
								children: t("exosome.body2")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-px bg-white/10 sm:grid-cols-3",
								children: [
									{
										label: "High Purity",
										desc: "Advanced isolation & purification technology"
									},
									{
										label: "Consistent Quality",
										desc: "Rigorous testing and quality control"
									},
									{
										label: "Proven Technology",
										desc: "Science-driven process and characterization"
									}
								].map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-white/[0.04] px-5 py-5 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.8rem] font-semibold text-white",
										children: feat.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-[0.72rem] leading-relaxed text-white/55",
										children: feat.desc
									})]
								}, feat.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/technology/$slug",
									params: { slug: "exosome" },
									children: t("exosome.cta")
								})
							})
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 140,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow !text-teal",
									children: "Production Process"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 space-y-px",
									children: [
										{
											step: "1. Cell Source",
											desc: "Carefully selected and screened cell sources"
										},
										{
											step: "2. Culture",
											desc: "Optimized cell culture conditions for exosome production"
										},
										{
											step: "3. Isolation",
											desc: "Initial separation of exosomes from cell culture"
										},
										{
											step: "4. Purification",
											desc: "Advanced purification to achieve high purity exosomes"
										},
										{
											step: "5. Characterization",
											desc: "Comprehensive analysis of size, concentration and markers"
										},
										{
											step: "6. Formulation",
											desc: "Stabilized formulation for optimal performance"
										},
										{
											step: "7. Quality Control",
											desc: "Rigorous quality control at every batch"
										}
									].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-4 bg-white/[0.04] px-5 py-4 outline outline-white/10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-[0.62rem] font-bold text-[#05231f]",
											children: String(i + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.88rem] font-semibold text-white",
											children: item.step
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[0.78rem] leading-relaxed text-white/55",
											children: item.desc
										})] })]
									}, item.step))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border border-teal/30 bg-teal/10 px-5 py-3 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.75rem] font-semibold tracking-[0.1em] text-teal",
										children: "Science · Technology · Quality · Every Step · Every Batch"
									})
								})
							] })
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Manufacturing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "From R&D to Scalable Manufacturing",
				intro: "Our integrated development approach connects research, formulation, production and quality control to support the transition from concept to commercial manufacturing."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							num: "01",
							title: "R&D",
							body: "Exploring innovative biological materials and advanced technologies.",
							img: molecular_default
						},
						{
							num: "02",
							title: "Development",
							body: "Optimizing formulations and processes for stability, efficacy and consistency.",
							img: korean_lab_team_default
						},
						{
							num: "03",
							title: "Production",
							body: "Advanced manufacturing facilities with controlled environments and precise processes.",
							img: cleanroom_default
						},
						{
							num: "04",
							title: "Quality",
							body: "Rigorous testing, monitoring and documentation at every stage.",
							img: qc_lab_default
						}
					].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative bg-card overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: step.img,
								alt: step.title,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover opacity-80"
							}),
							i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-[calc(37.5%-12px)] right-0 z-10 hidden h-7 w-7 items-center justify-center bg-teal text-[#05231f] text-xs font-bold lg:flex",
								children: "→"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
										children: step.num
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-2 text-[0.95rem] font-semibold text-navy",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-[0.82rem] leading-relaxed text-muted-foreground",
										children: step.body
									})
								]
							})
						]
					}, step.num))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 160,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/facility",
						variant: "outline",
						children: "Explore Manufacturing"
					})
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-science",
						children: "Quality & Control"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy",
						children: t("quality.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground",
						children: "From raw materials to final distribution, quality is integrated throughout our development and manufacturing process."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								num: "01",
								title: "Raw Material Control",
								body: "Controlled evaluation of high-quality raw materials."
							},
							{
								num: "02",
								title: "Process Control",
								body: "Defined and monitored manufacturing processes."
							},
							{
								num: "03",
								title: "Analytical Testing",
								body: "Advanced analytical methods for reliable quality assessment."
							},
							{
								num: "04",
								title: "Microbiological Testing",
								body: "Relevant microbiological evaluation for product safety."
							},
							{
								num: "05",
								title: "Batch Traceability",
								body: "Complete documentation and traceability for every batch."
							},
							{
								num: "06",
								title: "Storage & Distribution",
								body: "Controlled storage and secure distribution worldwide."
							}
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card p-5 outline outline-hairline h-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal",
										children: item.num
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-2 text-[0.88rem] font-semibold text-navy",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground",
										children: item.body
									})
								]
							})
						}, item.num))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border border-hairline bg-background p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-science mb-3",
							children: "Quality Lifecycle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: [
								"Raw Materials",
								"Manufacturing",
								"Testing",
								"Quality Review",
								"Distribution"
							].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.75rem] font-medium text-navy",
									children: step
								}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-teal font-bold text-[0.7rem]",
									children: "›"
								})]
							}, step))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/quality",
							variant: "outline",
							children: "Our Quality System"
						})
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: qc_lab_default,
							alt: "Quality control scientist",
							loading: "lazy",
							className: "aspect-[3/4] w-full object-cover"
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t("capabilities.eyebrow"),
			title: t("capabilities.title")
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 120,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border border-hairline bg-card p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow",
						children: t("capabilities.metricsTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5",
						children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-hairline pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-science",
								children: m.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.95rem] text-foreground",
								children: m.value
							})]
						}, m.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-[0.8rem] text-muted-foreground",
						children: t("capabilities.metricsNote")
					})
				]
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("products.eyebrow"),
					title: t("products.title"),
					intro: t("products.intro")
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: productCats.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-flat h-full p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[1.05rem] font-semibold text-navy",
								children: cat.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2.5",
								children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products/$slug",
									params: { slug: item.slug },
									className: "text-[0.9rem] text-muted-foreground transition-colors hover:text-science",
									children: item.name
								}) }, item.slug))
							})]
						})
					}, cat.key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/products",
							variant: "outline",
							children: t("common.viewAll")
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-navy-deep",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 navy-grid opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-32 right-0 h-96 w-96 rounded-full blur-3xl opacity-20",
					style: { background: "radial-gradient(circle,rgba(53,184,176,0.5),transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-teal",
								children: "Global Partnership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white",
								children: [
									"Vesco Science ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-teal",
										children: "×"
									}),
									" EverCeutical"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-white/40",
								children: "Strategic Global Partnership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-[1rem] leading-relaxed text-white/70",
								children: "Vesco Science collaborates with EverCeutical for the global marketing and commercialization of selected Vesco Science products, including exosome, filler and peptide-based solutions."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 grid gap-px bg-white/10 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white/[0.04] p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal",
												children: "Vesco Science"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-[0.85rem] text-white/55",
												children: "R&D · Technology · Manufacturing"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-6 space-y-2",
												children: [
													"Exosome Technology",
													"HA & Fillers",
													"Peptides",
													"PDRN / PN",
													"Regenerative Solutions"
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2 text-[0.85rem] text-white/75",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-teal flex-shrink-0" }), item]
												}, item))
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center justify-center gap-4 bg-white/[0.02] px-8 py-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[2.5rem] font-bold text-teal/50",
												children: "×"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/30 text-center",
												children: "Selected Product Platforms"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-2 gap-1.5 w-full",
												children: [
													"Exosomes",
													"HA & Fillers",
													"Peptides",
													"PDRN / PN",
													"Regenerative"
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded px-2 py-1 text-center text-[0.65rem] font-medium text-white/60 border border-white/10",
													children: item
												}, item))
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white/[0.04] p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal",
												children: "EverCeutical"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-[0.85rem] text-white/55",
												children: "Global Marketing · Commercialization"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-6 space-y-2",
												children: [
													"Global Distribution Rights",
													"Market Expansion",
													"Commercial Strategy",
													"Brand & Regulatory Support",
													"Partner Network"
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2 text-[0.85rem] text-white/75",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-teal flex-shrink-0" }), item]
												}, item))
											})
										]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
									to: "/about/network",
									children: "Explore the Partnership"
								})
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("research.eyebrow"),
				title: t("research.title"),
				intro: t("research.intro")
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "eyebrow",
						children: t("research.areasTitle")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-px sm:grid-cols-2",
						children: researchAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "bg-background px-5 py-4 text-[0.92rem] text-navy outline outline-hairline",
							children: area
						}, area))
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow",
							children: t("research.teamTitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: researchTeamItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm border border-hairline px-3.5 py-2 text-[0.85rem] text-muted-foreground",
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
								to: "/research",
								variant: "outline",
								children: t("common.learnMore")
							})
						})
					] })
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("partnership.eyebrow"),
				title: t("partnership.title"),
				intro: t("partnership.intro")
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
				children: partnershipModels.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-[1.05rem] font-semibold text-navy",
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.93rem] leading-relaxed text-muted-foreground",
								children: m.body
							})
						]
					})
				}, m.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
						to: "/about/network",
						variant: "outline",
						children: t("partnership.cta")
					})
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("insights.eyebrow"),
					title: t("insights.title"),
					intro: t("insights.intro")
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: featuredArticles.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/insights/$slug",
							params: { slug: a.slug },
							className: "card-flat group flex h-full flex-col p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-teal",
									children: a.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-[1.08rem] font-semibold text-navy transition-colors group-hover:text-science",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted-foreground",
									children: a.excerpt
								})
							]
						})
					}, a.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TealButton, {
							to: "/insights",
							variant: "outline",
							children: t("common.viewAll")
						})
					})
				})
			]
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
					className: "relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold text-white",
							children: t("cta.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65",
							children: t("cta.body")
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
export { Home as component };
