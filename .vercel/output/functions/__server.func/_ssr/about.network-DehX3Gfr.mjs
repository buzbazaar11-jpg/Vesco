import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Reveal, o as Section, r as PageHero, s as SectionHeading } from "./primitives-RiugzFh6.mjs";
import { t as CTABand } from "./CTABand-CoQ4ZL9f.mjs";
import { t as headquarters_default } from "./headquarters-D-VQho82.mjs";
import { p as useI18n } from "./router-Bp76MIo6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.network-DehX3Gfr.js
var import_jsx_runtime = require_jsx_runtime();
var COPY = {
	en: {
		eyebrow: "About / Global Network",
		title: "A Manufacturing Partner Built for Export",
		lead: "Vesco Science works with distributors, aesthetic brands, clinics, research organizations and pharmaceutical companies that require documented, export-ready regenerative products.",
		modelEyebrow: "Partnership Models",
		modelTitle: "How Partners Work With Us",
		models: [
			{
				title: "Distribution Partnership",
				body: "Country- or region-level distribution of Vesco-manufactured regenerative and aesthetic products with supporting documentation."
			},
			{
				title: "Private Label",
				body: "Existing platforms produced under the partner's own brand, packaging and artwork."
			},
			{
				title: "OEM Manufacturing",
				body: "Client-owned formula manufactured, filled, packaged, tested and documented in Korea."
			},
			{
				title: "ODM Development",
				body: "Concept-to-market development where Vesco leads formulation, prototyping and validation."
			},
			{
				title: "R&D Collaboration",
				body: "Joint studies on exosome, PDRN/PN, peptide and lyophilization platforms."
			},
			{
				title: "Clinic & Institutional Supply",
				body: "Direct supply programs where permitted by the destination market's regulations."
			}
		],
		supportEyebrow: "Export Support",
		supportTitle: "What We Provide to International Partners",
		support: [
			"Product documentation package (COA / TDS / SDS on request)",
			"Export documentation and shipping records",
			"Cold-chain packaging and temperature-controlled logistics coordination",
			"Batch traceability from raw material to shipment",
			"Stability data for the applicable storage condition",
			"Regulatory dossier support for the destination market"
		],
		coverageTitle: "Market Coverage",
		coverageNote: "CONTENT REQUIRED / VERIFY BEFORE PUBLICATION — the list of countries served, registered markets, distributor names and office locations must be confirmed by Vesco Science before publication. No market data is invented here.",
		regions: [
			"Asia-Pacific",
			"Middle East",
			"Europe",
			"Latin America",
			"North America",
			"CIS"
		],
		regionsNote: "Regions shown as UI structure only — pending verified market list."
	},
	ko: {
		eyebrow: "회사소개 / 글로벌 네트워크",
		title: "수출을 위해 설계된 제조 파트너",
		lead: "베스코 사이언스는 문서화되고 수출 가능한 재생 제품을 필요로 하는 유통사, 에스테틱 브랜드, 클리닉, 연구기관 및 제약사와 협력합니다.",
		modelEyebrow: "파트너십 모델",
		modelTitle: "협력 방식",
		models: [
			{
				title: "유통 파트너십",
				body: "국가·지역 단위 유통과 관련 문서 지원을 제공합니다."
			},
			{
				title: "프라이빗 라벨",
				body: "기존 플랫폼을 파트너 브랜드·패키지로 생산합니다."
			},
			{
				title: "OEM 제조",
				body: "고객 보유 처방을 한국에서 제조·충전·포장·시험·문서화합니다."
			},
			{
				title: "ODM 개발",
				body: "컨셉부터 제형·프로토타입·검증까지 베스코가 주도합니다."
			},
			{
				title: "R&D 협력",
				body: "엑소좀, PDRN/PN, 펩타이드, 동결건조 플랫폼 공동 연구."
			},
			{
				title: "클리닉·기관 공급",
				body: "목적 시장 규정이 허용하는 범위 내 직접 공급 프로그램."
			}
		],
		supportEyebrow: "수출 지원",
		supportTitle: "해외 파트너 지원 항목",
		support: [
			"제품 문서 패키지 (COA / TDS / SDS 요청 시)",
			"수출 서류 및 선적 기록",
			"콜드체인 포장 및 온도관리 물류 조율",
			"원료부터 출하까지 배치 추적성",
			"해당 보관 조건에 대한 안정성 데이터",
			"목적 시장 규제 문서 지원"
		],
		coverageTitle: "시장 커버리지",
		coverageNote: "확인 필요 / 게시 전 검증 — 공급 국가, 등록 시장, 유통사명, 사무소 위치는 베스코 사이언스의 확인이 필요합니다.",
		regions: [
			"아시아·태평양",
			"중동",
			"유럽",
			"중남미",
			"북미",
			"CIS"
		],
		regionsNote: "표시된 지역은 UI 구조 예시이며, 검증된 시장 목록 확정 전입니다."
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
			image: headquarters_default,
			imageAlt: "Vesco Science headquarters exterior",
			crumb: {
				label: c.eyebrow,
				homeLabel: t("common.breadcrumbHome")
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: c.modelEyebrow,
			title: c.modelTitle
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
			children: c.models.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 50,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[1.08rem] font-semibold text-navy",
						children: m.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[0.93rem] leading-relaxed text-muted-foreground",
						children: m.body
					})]
				})
			}, m.title))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				invert: true,
				eyebrow: c.supportEyebrow,
				title: c.supportTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3",
				children: c.support.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-white/[0.04] p-6 text-[0.93rem] leading-relaxed text-white/80 outline outline-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" }), s]
				}, s))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "white",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: c.coverageTitle }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3",
					children: c.regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.98rem] font-medium text-navy",
							children: r
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[0.78rem] tracking-[0.08em] uppercase text-science",
							children: "Pending verification"
						})]
					}, r))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[0.82rem] text-muted-foreground",
					children: c.regionsNote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 border-l-2 border-teal bg-secondary px-6 py-4 text-[0.85rem] leading-relaxed text-muted-foreground",
					children: c.coverageNote
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABand, {})
	] });
}
//#endregion
export { Page as component };
