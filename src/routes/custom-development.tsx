import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, SectionHeading, Reveal, ProcessFlow } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import lyophilizer from "@/assets/lyophilizer.jpg";

export const Route = createFileRoute("/custom-development")({
  head: () => ({
    meta: [
      { title: "Custom Development — Build Your Own Regenerative Product" },
      {
        name: "description",
        content:
          "Define product category, active ingredient, concentration, dosage form, packaging, MOQ, regulatory market and storage — and start a custom regenerative development project with Vesco Science.",
      },
      {
        property: "og:title",
        content: "Custom Development — Build Your Own Regenerative Product",
      },
      {
        property: "og:description",
        content: "Your specification, our formulation science and Korean manufacturing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/custom-development" }],
  }),
  component: Page,
});

const COPY = {
  en: {
    eyebrow: "OEM / ODM / Custom Development",
    title: "Build Your Own Regenerative Product",
    lead: "Tell us the specification you need. Our formulation, analytical and production teams translate it into a manufacturable, documented product.",
    briefEyebrow: "Project Brief",
    briefTitle: "Define Your Specification",
    briefIntro:
      "This brief is a demo form — submissions are not stored. Every field maps to information our development team needs before quoting a project.",
    fields: [
      { label: "Product Category", ph: "Exosome / PDRN / Skin booster / Scalp / Custom" },
      { label: "Target Market", ph: "Country or region of sale" },
      { label: "Active Ingredient", ph: "Primary active(s) requested" },
      { label: "Desired Concentration", ph: "e.g. per vial / per mL" },
      { label: "Dosage Form", ph: "Lyophilized powder / solution / kit" },
      { label: "Packaging", ph: "Vial, ampoule, syringe, box configuration" },
      { label: "MOQ", ph: "Target order quantity" },
      { label: "Regulatory Market", ph: "Destination regulatory pathway" },
      { label: "Storage Requirement", ph: "Ambient / 2–8°C / frozen" },
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
      "Pilot Production",
    ],
    deliverEyebrow: "Deliverables",
    deliverTitle: "What You Receive",
    deliverables: [
      "Formulation specification sheet",
      "Prototype samples for evaluation",
      "Analytical and stability test reports",
      "Manufacturing process description",
      "Packaging and artwork implementation",
      "Documentation package for your market",
    ],
    note: "CONTENT REQUIRED / VERIFY BEFORE PUBLICATION — lead times, MOQ ranges and pricing structures must be confirmed by Vesco Science.",
    fullForm: "Prefer the full inquiry form?",
    fullFormCta: "Go to Contact",
  },
  ko: {
    eyebrow: "OEM / ODM / 맞춤 개발",
    title: "나만의 재생 제품을 개발하세요",
    lead: "필요한 규격을 알려주시면, 제형·분석·생산팀이 제조 가능하고 문서화된 제품으로 구현합니다.",
    briefEyebrow: "프로젝트 브리프",
    briefTitle: "규격 정의",
    briefIntro:
      "본 브리프는 데모 양식으로 데이터가 저장되지 않습니다. 각 항목은 견적 전 개발팀이 필요로 하는 정보입니다.",
    fields: [
      { label: "제품 카테고리", ph: "엑소좀 / PDRN / 스킨부스터 / 두피 / 맞춤" },
      { label: "목표 시장", ph: "판매 국가 또는 지역" },
      { label: "주성분", ph: "요청 주성분" },
      { label: "희망 함량", ph: "예: 바이알당 / mL당" },
      { label: "제형", ph: "동결건조 분말 / 용액 / 키트" },
      { label: "포장", ph: "바이알, 앰플, 주사기, 박스 구성" },
      { label: "MOQ", ph: "목표 발주 수량" },
      { label: "규제 시장", ph: "목적 시장 인허가 경로" },
      { label: "보관 조건", ph: "실온 / 2–8°C / 냉동" },
    ],
    notes: "추가 요청사항",
    notesPh: "참고 제품, 일정, 출시일, 필요 문서 등",
    submit: "프로젝트 시작하기",
    success: "데모에서 브리프가 접수되었습니다. 실제로는 영업일 기준 2일 내 회신드립니다.",
    pathEyebrow: "개발 경로",
    pathTitle: "브리프에서 양산까지",
    steps: ["브리프·타당성 검토", "제형 설계", "프로토타입", "안정성·시험", "파일럿 생산"],
    deliverEyebrow: "산출물",
    deliverTitle: "제공 항목",
    deliverables: [
      "제형 규격서",
      "평가용 프로토타입 샘플",
      "분석 및 안정성 시험 보고서",
      "제조 공정 설명서",
      "포장 및 아트워크 적용",
      "목적 시장용 문서 패키지",
    ],
    note: "확인 필요 / 게시 전 검증 — 리드타임, MOQ 범위, 가격 정책은 베스코 사이언스 확인이 필요합니다.",
    fullForm: "전체 문의 양식을 원하시나요?",
    fullFormCta: "문의 페이지로",
  },
} as const;

function Page() {
  const { locale, t } = useI18n();
  const c = COPY[locale];
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        image={lyophilizer}
        imageAlt="Lyophilization equipment in a controlled production area"
        crumb={{ label: c.title, homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        <SectionHeading eyebrow={c.pathEyebrow} title={c.pathTitle} />
        <div className="mt-12">
          <ProcessFlow steps={[...c.steps]} />
        </div>
      </Section>

      <Section tone="white" id="brief">
        <SectionHeading eyebrow={c.briefEyebrow} title={c.briefTitle} intro={c.briefIntro} />
        <Reveal>
          <form
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {c.fields.map((f) => (
              <label key={f.label} className="block">
                <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                  {f.label}
                </span>
                <input
                  type="text"
                  placeholder={f.ph}
                  className="mt-2 w-full border border-hairline bg-card px-4 py-3 text-[0.93rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
                />
              </label>
            ))}
            <label className="block sm:col-span-2 lg:col-span-3">
              <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-science">
                {c.notes}
              </span>
              <textarea
                rows={4}
                placeholder={c.notesPh}
                className="mt-2 w-full border border-hairline bg-card px-4 py-3 text-[0.93rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-teal"
              />
            </label>
            <div className="sm:col-span-2 lg:col-span-3 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-sm bg-teal px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase text-[#05231f] transition-colors hover:bg-teal/85"
              >
                {c.submit}
              </button>
              <span className="text-[0.85rem] text-muted-foreground">
                {c.fullForm}{" "}
                <Link to="/contact" className="text-science underline underline-offset-4">
                  {c.fullFormCta}
                </Link>
              </span>
            </div>
            {sent ? (
              <p
                role="status"
                className="sm:col-span-2 lg:col-span-3 border-l-2 border-teal bg-secondary px-6 py-4 text-[0.9rem] text-navy"
              >
                {c.success}
              </p>
            ) : null}
          </form>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow={c.deliverEyebrow} title={c.deliverTitle} />
        <ul className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {c.deliverables.map((d) => (
            <li key={d} className="bg-card px-6 py-5 text-[0.95rem] text-navy">
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
              {d}
            </li>
          ))}
        </ul>
        <p className="mt-8 border-l-2 border-teal bg-card px-6 py-4 text-[0.85rem] leading-relaxed text-muted-foreground">
          {c.note}
        </p>
      </Section>

      <CTABand />
    </>
  );
}
