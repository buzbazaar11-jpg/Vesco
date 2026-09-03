import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, i as ProcessFlow, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
import { t as lyophilizer_default } from "./lyophilizer-Q9Swj7Dp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/custom-development-Ds0yPLAO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COPY = {
	en: {
		eyebrow: "OEM / ODM / Custom Development",
		title: "Build Your Own Regenerative Product",
		lead: "Tell us the specification you need. Our formulation, analytical and production teams translate it into a manufacturable, documented product.",
		briefEyebrow: "Project Brief",
		briefTitle: "Define Your Specification",
		briefIntro: "This brief is a demo form — submissions are not stored. Every field maps to information our development team needs before quoting a project.",
		fields: [
			{
				label: "Product Category",
				ph: "Exosome / PDRN / Skin booster / Scalp / Custom"
			},
			{
				label: "Target Market",
				ph: "Country or region of sale"
			},
			{
				label: "Active Ingredient",
				ph: "Primary active(s) requested"
			},
			{
				label: "Desired Concentration",
				ph: "e.g. per vial / per mL"
			},
			{
				label: "Dosage Form",
				ph: "Lyophilized powder / solution / kit"
			},
			{
				label: "Packaging",
				ph: "Vial, ampoule, syringe, box configuration"
			},
			{
				label: "MOQ",
				ph: "Target order quantity"
			},
			{
				label: "Regulatory Market",
				ph: "Destination regulatory pathway"
			},
			{
				label: "Storage Requirement",
				ph: "Ambient / 2–8°C / frozen"
			}
		],
		notes: "Additional Notes",
		notesPh: "Reference products, timeline, launch date, documentation needs…",
		submit: "Start Your Project",
		success: "Brief captured in this demo. Our team would normally respond within two business days.",
		pathEyebrow: "Development Pathway",
		pathTitle: "From Brief to Mass Production",
		steps: [
			"Brief & Feasibility",
			"Formulation Design",
			"Prototype",
			"Stability & Testing",
			"Pilot Production"
		],
		deliverEyebrow: "Deliverables",
		deliverTitle: "What You Receive",
		deliverables: [
			"Formulation specification sheet",
			"Prototype samples for evaluation",
			"Analytical and stability test reports",
			"Manufacturing process description",
			"Packaging and artwork implementation",
			"Documentation package for your market"
		],
		note: "CONTENT REQUIRED / VERIFY BEFORE PUBLICATION — lead times, MOQ ranges and pricing structures must be confirmed by Vesco Science.",
		fullForm: "Prefer the full inquiry form?",
		fullFormCta: "Go to Contact"
	},
	ko: {
		eyebrow: "OEM / ODM / 맞춤 개발",
		title: "나만의 재생 제품을 개발하세요",
		lead: "필요한 규격을 알려주시면, 제형·분석·생산팀이 제조 가능하고 문서화된 제품으로 구현합니다.",
		briefEyebrow: "프로젝트 브리프",
		briefTitle: "규격 정의",
		briefIntro: "본 브리프는 데모 양식으로 데이터가 저장되지 않습니다. 각 항목은 견적 전 개발팀이 필요로 하는 정보입니다.",
		fields: [
			{
				label: "제품 카테고리",
				ph: "엑소좀 / PDRN / 스킨부스터 / 두피 / 맞춤"
			},
			{
				label: "목표 시장",
				ph: "판매 국가 또는 지역"
			},
			{
				label: "주성분",
				ph: "요청 주성분"
			},
			{
				label: "희망 함량",
				ph: "예: 바이알당 / mL당"
			},
			{
				label: "제형",
				ph: "동결건조 분말 / 용액 / 키트"
			},
			{
				label: "포장",
				ph: "바이알, 앰플, 주사기, 박스 구성"
			},
			{
				label: "MOQ",
				ph: "목표 발주 수량"
			},
			{
				label: "규제 시장",
				ph: "목적 시장 인허가 경로"
			},
			{
				label: "보관 조건",
				ph: "실온 / 2–8°C / 냉동"
			}
		],
		notes: "추가 요청사항",
		notesPh: "참고 제품, 일정, 출시일, 필요 문서 등",
		submit: "프로젝트 시작하기",
		success: "데모에서 브리프가 접수되었습니다. 실제로는 영업일 기준 2일 내 회신드립니다.",
		pathEyebrow: "개발 경로",
		pathTitle: "브리프에서 양산까지",
		steps: [
			"브리프·타당성 검토",
			"제형 설계",
			"프로토타입",
			"안정성·시험",
			"파일럿 생산"
		],
		deliverEyebrow: "산출물",
		deliverTitle: "제공 항목",
		deliverables: [
			"제형 규격서",
			"평가용 프로토타입 샘플",
			"분석 및 안정성 시험 보고서",
			"제조 공정 설명서",
			"포장 및 아트워크 적용",
			"목적 시장용 문서 패키지"
		],
		note: "확인 필요 / 게시 전 검증 — 리드타임, MOQ 범위, 가격 정책은 베스코 사이언스 확인이 필요합니다.",
		fullForm: "전체 문의 양식을 원하시나요?",
		fullFormCta: "문의 페이지로"
	}
};
function Page() {
	const { locale, t } = useI18n();
	const c = COPY[locale];
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: c.eyebrow,
			title: c.title,
			lead: c.lead,
			image: lyophilizer_default,
			imageAlt: "Lyophilization equipment in a controlled production area",
			crumb: {
				label: c.title,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: c.pathEyebrow,
			title: c.pathTitle
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, { steps: [...c.steps] })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			id: "brief",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: c.briefEyebrow,
				title: c.briefTitle,
				intro: c.briefIntro
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				children: [
					c.fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science",
							children: f.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: f.ph,
							className: "mt-2 w-full border border-hairline bg-card px-4 py-3 text-[0.93rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
						})]
					}, f.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-2 lg:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science",
							children: c.notes
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							placeholder: c.notesPh,
							className: "mt-2 w-full border border-hairline bg-card px-4 py-3 text-[0.93rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 lg:col-span-3 flex flex-wrap items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex items-center gap-3 rounded-sm bg-teal px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#05231f] transition-colors hover:bg-teal/85",
							children: c.submit
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[0.85rem] text-muted-foreground",
							children: [
								c.fullForm,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-science underline underline-offset-4",
									children: c.fullFormCta
								})
							]
						})]
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						className: "sm:col-span-2 lg:col-span-3 border-l-2 border-teal bg-secondary px-6 py-4 text-[0.9rem] text-navy",
						children: c.success
					}) : null
				]
			}) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: c.deliverEyebrow,
					title: c.deliverTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: c.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-card px-6 py-5 text-[0.95rem] text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), d]
					}, d))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 border-l-2 border-teal bg-card px-6 py-4 text-[0.85rem] leading-relaxed text-muted-foreground",
					children: c.note
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
