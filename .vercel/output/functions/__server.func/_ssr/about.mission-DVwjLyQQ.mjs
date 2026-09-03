import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { t as research_team_default } from "./research-team-CiE4O4Je.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.mission-DVwjLyQQ.js
var import_jsx_runtime = require_jsx_runtime();
var COPY = {
	en: {
		eyebrow: "About / Mission",
		title: "Science with a Defined Purpose",
		lead: "Our mission is to make advanced regenerative biotechnology reproducible, documented and available to healthcare and aesthetic partners worldwide.",
		missionTitle: "Mission",
		missionBody: "To develop and manufacture regenerative biotechnology — exosome, PDRN/PN, peptide and lyophilized formulations — under controlled, documented processes that partners can rely on batch after batch.",
		visionTitle: "Vision",
		visionBody: "To be recognized as a Korean biotechnology and advanced regenerative manufacturing partner: the scientific and industrial infrastructure behind next-generation regenerative products.",
		valuesEyebrow: "Operating Principles",
		valuesTitle: "How We Work",
		values: [
			{
				title: "Science First",
				body: "Every formulation decision is traced back to characterization data, not marketing language."
			},
			{
				title: "Documented Process",
				body: "Development, production and release steps are specified, executed and recorded."
			},
			{
				title: "Reproducibility",
				body: "Batch-to-batch consistency is treated as a manufacturing requirement, not an outcome."
			},
			{
				title: "Partner Confidentiality",
				body: "OEM/ODM programs, formulations and specifications remain the property of the client."
			},
			{
				title: "Regulatory Readiness",
				body: "Documentation is prepared with export and destination-market requirements in mind."
			},
			{
				title: "Verified Claims",
				body: "We publish what can be supported. Unverified data is withheld until confirmed."
			}
		],
		note: "CONTENT REQUIRED / VERIFY BEFORE PUBLICATION — corporate mission statement wording, founding year and leadership messaging to be confirmed by Vesco Science."
	},
	ko: {
		eyebrow: "회사소개 / 미션",
		title: "명확한 목적을 가진 과학",
		lead: "당사의 미션은 첨단 재생 바이오테크놀로지를 재현 가능하고 문서화된 형태로 전 세계 헬스케어·에스테틱 파트너에게 제공하는 것입니다.",
		missionTitle: "미션",
		missionBody: "엑소좀, PDRN/PN, 펩타이드 및 동결건조 제형을 관리·문서화된 공정 하에서 개발·제조하여, 파트너가 배치마다 신뢰할 수 있는 품질을 제공합니다.",
		visionTitle: "비전",
		visionBody: "차세대 재생 제품의 과학적·산업적 인프라로서, 한국의 바이오테크놀로지 및 첨단 재생 제조 파트너로 인정받는 것입니다.",
		valuesEyebrow: "운영 원칙",
		valuesTitle: "일하는 방식",
		values: [
			{
				title: "과학 우선",
				body: "모든 제형 결정은 마케팅 문구가 아닌 특성분석 데이터에 근거합니다."
			},
			{
				title: "문서화된 공정",
				body: "개발·생산·출하 단계를 규정하고 실행하며 기록합니다."
			},
			{
				title: "재현성",
				body: "배치 간 일관성은 결과가 아니라 제조 요건으로 관리합니다."
			},
			{
				title: "파트너 기밀 유지",
				body: "OEM/ODM 프로그램, 제형, 규격은 고객사의 자산입니다."
			},
			{
				title: "규제 대응",
				body: "수출 및 목적 시장 요건을 고려하여 문서를 준비합니다."
			},
			{
				title: "검증된 표현",
				body: "근거가 확보된 내용만 공개하며, 미검증 데이터는 확인 전까지 게시하지 않습니다."
			}
		],
		note: "확인 필요 / 게시 전 검증 — 공식 미션 문구, 설립 연도, 경영진 메시지는 베스코 사이언스 확인이 필요합니다."
	}
};
function Page() {
	const { locale, t } = useI18n();
	const c = COPY[locale];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: c.eyebrow,
			title: c.title,
			lead: c.lead,
			image: research_team_default,
			imageAlt: "Vesco Science research team in the laboratory",
			crumb: {
				label: c.eyebrow,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-px bg-hairline lg:grid-cols-2",
			children: [{
				title: c.missionTitle,
				body: c.missionBody
			}, {
				title: c.visionTitle,
				body: c.visionBody
			}].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-full bg-card p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[1.6rem] font-semibold text-navy",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[1rem] leading-relaxed text-muted-foreground",
						children: b.body
					})]
				})
			}, b.title))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: c.valuesEyebrow,
					title: c.valuesTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: c.values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full bg-card p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-[1.08rem] font-semibold text-navy",
									children: v.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[0.93rem] leading-relaxed text-muted-foreground",
									children: v.body
								})
							]
						})
					}, v.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 border-l-2 border-teal bg-secondary px-6 py-4 text-[0.85rem] leading-relaxed text-muted-foreground",
					children: c.note
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
