import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  Reveal,
  TealButton,
} from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import cleanroom from "@/assets/cleanroom.jpg";
import documents from "@/assets/documents.jpg";

export const Route = createFileRoute("/oem")({
  head: () => ({
    meta: [
      { title: "OEM / ODM Manufacturing — Vesco Science" },
      {
        name: "description",
        content:
          "From concept to commercialization: OEM manufacturing, ODM development, custom formulation, private label and global regulatory support from Korea.",
      },
      { property: "og:title", content: "OEM / ODM Manufacturing — Vesco Science" },
      {
        property: "og:description",
        content: "Your idea. Our science. One integrated development pathway from Korea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/oem" }],
  }),
  component: Page,
});

type Step = { num: string; title: string; body: string };

function Page() {
  const { t, tx } = useI18n();
  const oemSteps = tx<string[]>("oem.oemSteps") ?? [];
  const odmSteps = tx<string[]>("oem.odmSteps") ?? [];
  const process = tx<Step[]>("oem.process") ?? [];
  const inputs = tx<string[]>("oem.custom.inputs") ?? [];
  const privatePoints = tx<string[]>("privateLabel.points") ?? [];
  const regPoints = tx<string[]>("regulatorySupport.points") ?? [];

  return (
    <>
      <PageHero
        eyebrow={t("oem.eyebrow")}
        title={t("oem.title")}
        lead={t("oem.subtitle")}
        image={cleanroom}
        imageAlt={t("intro.imageAlt")}
        crumb={{ label: t("nav.oem"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ---------- OEM vs ODM ---------- */}
      <Section id="models">
        <div className="grid gap-px bg-hairline lg:grid-cols-2">
          {[
            { title: t("oem.oemTitle"), body: t("oem.oemBody"), steps: oemSteps },
            { title: t("oem.odmTitle"), body: t("oem.odmBody"), steps: odmSteps },
          ].map((col, i) => (
            <Reveal key={col.title} delay={i * 80}>
              <div className="h-full bg-card p-8 md:p-10">
                <h2 className="font-display text-[1.6rem] font-semibold text-navy">{col.title}</h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">{col.body}</p>
                <ol className="mt-8 grid gap-3">
                  {col.steps.map((s, si) => (
                    <li key={s} className="flex items-center gap-4 border-b border-hairline pb-3">
                      <span className="font-display text-[0.72rem] font-bold tracking-[0.16em] text-teal">
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem] text-navy">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- 9-STAGE TIMELINE ---------- */}
      <Section id="process" tone="navy">
        <SectionHeading invert eyebrow={t("oem.processEyebrow")} title={t("oem.processTitle")} />
        <ol className="mt-14 relative grid gap-px md:grid-cols-3">
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-teal/60 via-teal/25 to-transparent md:hidden"
          />
          {process.map((p, i) => (
            <Reveal key={p.num} delay={i * 50}>
              <li className="relative h-full bg-white/[0.04] p-7 pl-16 outline outline-white/10 md:pl-7">
                <span className="absolute top-7 left-4 flex h-[26px] w-[26px] items-center justify-center rounded-full border border-teal/50 bg-navy-deep font-display text-[0.65rem] font-bold text-teal md:static md:mb-4 md:flex">
                  {p.num}
                </span>
                <h3 className="text-[1.05rem] font-semibold text-white md:mt-4">{p.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/60">{p.body}</p>
                {i < process.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute right-0 bottom-7 hidden h-px w-6 bg-teal/40 md:block"
                  />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------- CUSTOM FORMULATION ---------- */}
      <Section id="custom-formulation" tone="white">
        <SectionHeading
          eyebrow={t("oem.custom.eyebrow")}
          title={t("oem.custom.title")}
          intro={t("oem.custom.intro")}
        />
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {inputs.map((inp) => (
            <div key={inp} className="bg-card px-6 py-5 text-[0.95rem] text-navy">
              <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
              {inp}
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <TealButton to="/custom-development">{t("oem.custom.cta")}</TealButton>
          <TealButton to="/contact" variant="outline">
            {t("nav.cta")}
          </TealButton>
        </div>
      </Section>

      {/* ---------- PRIVATE LABEL ---------- */}
      <Section id="private-label">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow={t("privateLabel.eyebrow")}
                title={t("privateLabel.title")}
                intro={t("privateLabel.intro")}
              />
              <ul className="mt-10 grid gap-px bg-hairline">
                {privatePoints.map((p) => (
                  <li key={p} className="bg-card px-6 py-4 text-[0.95rem] text-navy">
                    <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={documents}
              alt={t("privateLabel.title")}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------- REGULATORY SUPPORT ---------- */}
      <Section id="regulatory" tone="navy">
        <SectionHeading
          invert
          eyebrow={t("regulatorySupport.eyebrow")}
          title={t("regulatorySupport.title")}
          intro={t("regulatorySupport.intro")}
        />
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {regPoints.map((p, i) => (
            <Reveal key={p} delay={i * 50}>
              <div className="h-full bg-white/[0.04] p-6 outline outline-white/10">
                <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[0.95rem] text-white/85">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-[0.85rem] text-white/50">{t("regulatorySupport.note")}</p>
      </Section>

      <CTABand />
    </>
  );
}
