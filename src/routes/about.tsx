import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading, Reveal, TealButton } from "@/components/site/primitives";
import { useI18n } from "@/lib/i18n";
import cleanroom from "@/assets/cleanroom.jpg";
import koreanLabTeam from "@/assets/korean-lab-team.jpg";
import seoulCampus from "@/assets/seoul-biotech-campus.jpg";
import koreanScientist from "@/assets/korean-scientist-vials.jpg";
import qcLab from "@/assets/qc-lab.jpg";
import molecular from "@/assets/molecular.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vesco Science — Korean Regenerative Biotechnology" },
      {
        name: "description",
        content:
          "Vesco Science is a Korea-based biotechnology company uniting exosome R&D, regenerative formulation, manufacturing and quality control under one operation in Seoul.",
      },
      { property: "og:title", content: "About Vesco Science — Korean Regenerative Biotechnology" },
      {
        property: "og:description",
        content:
          "Research, formulation, manufacturing and quality control handled as one connected operation in Korea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

type Block = { title: string; body: string };
type Milestone = { year: string; text: string };
type StorySection = {
  eyebrow: string;
  title: string;
  body1: string;
  body2: string;
  imageAlt: string;
};
type ValuesSection = { eyebrow: string; title: string; items: Block[] };
type MilestonesSection = { eyebrow: string; title: string; items: Milestone[] };
type LocationSection = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  imageAlt: string;
};
type PeopleSection = { eyebrow: string; title: string; body: string; cta: string; imageAlt: string };

function Page() {
  const { t, tx } = useI18n();
  const blocks = tx<Block[]>("pages.about.blocks") ?? [];
  const points = tx<string[]>("intro.points") ?? [];
  const story = tx<StorySection>("pages.about.story");
  const values = tx<ValuesSection>("pages.about.values");
  const milestones = tx<MilestonesSection>("pages.about.milestones");
  const location = tx<LocationSection>("pages.about.location");
  const people = tx<PeopleSection>("pages.about.people");

  return (
    <>
      {/* ================================================================
          HERO — Page hero with cleanroom background
          ================================================================ */}
      {/* =========================================================
          PDF IMAGE — ABOUT PAGE HERO
          Upload the facility/cleanroom image from the About PDF.
          Suggested filename: about-hero-facility.jpg
          Replace the cleanroom import at top of file with your asset.
          ========================================================= */}
      <PageHero
        eyebrow={t("pages.about.eyebrow")}
        title={t("pages.about.title")}
        lead={t("pages.about.lead")}
        image={cleanroom}
        imageAlt={t("intro.imageAlt")}
        crumb={{ label: t("nav.about"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ================================================================
          INTRO — Company overview paragraph + intro points
          (existing, preserved)
          ================================================================ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading
              eyebrow={t("intro.eyebrow")}
              title={t("intro.title")}
              intro={t("intro.body1")}
            />
            <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {t("intro.body2")}
            </p>
          </div>
          <Reveal>
            <ul className="grid gap-px bg-hairline">
              {points.map((p) => (
                <li key={p} className="bg-card px-6 py-4 text-[0.95rem] text-navy">
                  <span className="mr-3 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-teal align-middle" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          WHO WE ARE — "Where Science Meets Scalable Manufacturing"
          PDF: page 2 — 5-capability pipeline grid
          ================================================================ */}
      <Section tone="white">
        <Reveal>
          <p className="eyebrow">Who We Are</p>
          {/* PDF: "Where Science Meets Scalable Manufacturing" */}
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
            Where Science Meets Scalable Manufacturing
          </h2>
          <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            At Vesco Science, we believe that meaningful innovation requires more than scientific
            discovery. It requires the ability to translate research into reproducible formulations,
            controlled manufacturing processes and consistently documented products.
          </p>
        </Reveal>

        {/* PDF: "Our capabilities bring together:" — 5-step pipeline */}
        <Reveal delay={100}>
          <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                num: "01",
                title: "Research & Development",
                body: "Scientific exploration and product development.",
              },
              {
                num: "02",
                title: "Advanced Biotechnology",
                body: "Platforms including exosome, PDRN/PN, peptide and regenerative technologies.",
              },
              {
                num: "03",
                title: "Formulation Development",
                body: "Development and optimization of formulations according to product requirements.",
              },
              {
                num: "04",
                title: "Manufacturing",
                body: "Controlled production, filling and packaging capabilities.",
              },
              {
                num: "05",
                title: "Quality & Analysis",
                body: "Product-specific testing, documentation and quality control.",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 70}>
                <div className="h-full bg-card p-7 outline outline-hairline">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-[0.72rem] font-bold tracking-[0.14em] text-teal">
                    {item.num}
                  </span>
                  <h3 className="mt-5 text-[0.95rem] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* PDF: 4 value badges at the bottom of this section */}
        <Reveal delay={180}>
          <div className="mt-8 flex flex-wrap gap-6 border-t border-hairline pt-6">
            {[
              "Science Driven",
              "Precision Focused",
              "Quality Assured",
              "Built for Global Impact",
            ].map((label) => (
              <span key={label} className="flex items-center gap-2 text-[0.8rem] font-medium text-navy/70">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ================================================================
          OUR STORY — existing section, preserved
          ================================================================ */}
      {story ? (
        <Section>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                {/* =========================================================
                    PDF IMAGE — ABOUT PAGE, OUR STORY SECTION
                    Upload the Korean lab team image from the About PDF.
                    Suggested filename: about-korean-lab-team.jpg
                    Currently using: korean-lab-team.jpg (existing asset)
                    ========================================================= */}
                <img
                  src={koreanLabTeam}
                  alt={story.imageAlt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 hidden border border-hairline bg-card px-6 py-5 md:block">
                  <p className="eyebrow">{t("meta.company")}</p>
                  <p className="mt-2 text-[0.9rem] text-navy">{t("meta.tagline")}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <SectionHeading eyebrow={story.eyebrow} title={story.title} />
                <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                  {story.body1}
                </p>
                <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                  {story.body2}
                </p>
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ================================================================
          VALUES — existing section, preserved
          ================================================================ */}
      {values ? (
        <Section tone="white">
          <Reveal>
            <SectionHeading eyebrow={values.eyebrow} title={values.title} />
          </Reveal>
          <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <article className="h-full bg-card p-8">
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.05rem] font-semibold text-navy">{v.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {/* ================================================================
          MILESTONES — existing section, preserved
          ================================================================ */}
      {milestones ? (
        <section className="relative isolate overflow-hidden bg-navy">
          <div className="absolute inset-0 navy-grid opacity-30" />
          <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
            <Reveal>
              <SectionHeading eyebrow={milestones.eyebrow} title={milestones.title} invert />
            </Reveal>
            <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-7">
              {milestones.items.map((m, i) => (
                <Reveal key={m.year} delay={i * 60}>
                  <li className="h-full bg-navy-deep/60 p-6">
                    <span className="font-display text-[1.15rem] font-bold tracking-[0.08em] text-teal">
                      {m.year}
                    </span>
                    <p className="mt-4 text-[0.86rem] leading-relaxed text-white/75">{m.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* ================================================================
          POSITION / FOCUS / PARTNERS — existing blocks, preserved
          ================================================================ */}
      {blocks.length > 0 ? (
        <Section tone="white">
          <div className="grid gap-8 md:grid-cols-3">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <article className="card-flat h-full p-8">
                  <h3 className="text-[1.15rem] font-semibold text-navy">{b.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {/* ================================================================
          SCIENTIFIC APPROACH — "From Biological Science to Finished Product"
          PDF: page 3
          ================================================================ */}
      <Section>
        <Reveal>
          <p className="eyebrow">Our Scientific Approach</p>
          {/* PDF: "FROM BIOLOGICAL SCIENCE TO FINISHED PRODUCT" */}
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
            From Biological Science to Finished Product
          </h2>
          <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            At Vesco Science, we follow an integrated approach that connects scientific research
            with product development, controlled manufacturing, and quality assurance. From the
            initial biological concept to the finished product, each stage is designed to support
            consistency, precision, and product integrity.
          </p>
        </Reveal>

        {/* PDF: 4-step visual pipeline with images */}
        <Reveal delay={120}>
          <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Research",
                sub: "Exploring biological materials, technologies and new product opportunities.",
                img: molecular,
                /* TODO: PDF IMAGE — upload/replace with Research stage image */
              },
              {
                num: "02",
                title: "Development",
                sub: "Translating scientific concepts into optimized formulations and processes.",
                img: koreanLabTeam,
                /* TODO: PDF IMAGE — upload/replace with Development stage image */
              },
              {
                num: "03",
                title: "Manufacturing",
                sub: "Scaling validated concepts into controlled production.",
                img: cleanroom,
                /* TODO: PDF IMAGE — upload/replace with Manufacturing stage image */
              },
              {
                num: "04",
                title: "Quality",
                sub: "Applying testing, documentation and quality controls throughout the product lifecycle.",
                img: qcLab,
                /* TODO: PDF IMAGE — upload/replace with Quality stage image */
              },
            ].map((step, i, arr) => (
              <div key={step.num} className="relative bg-card overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover opacity-75"
                />
                {/* Arrow connector */}
                {i < arr.length - 1 && (
                  <div className="absolute top-[calc(37.5%-12px)] right-0 z-10 hidden h-7 w-7 items-center justify-center bg-teal text-[#05231f] text-xs font-bold lg:flex">
                    →
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-[0.7rem] font-bold text-[#05231f]">
                      {step.num}
                    </span>
                    <h3 className="text-[1rem] font-semibold text-navy">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {step.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ================================================================
          MANUFACTURING PIPELINE — "From Development to Production"
          PDF: page 4 — R&D → Product Dev → Process Opt → Production → QC → Final
          ================================================================ */}
      <Section tone="white">
        <Reveal>
          <p className="eyebrow">Manufacturing</p>
          {/* PDF: "From Development to Production" */}
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
            From Development to Production
          </h2>
          <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            Scientific innovation becomes commercially valuable when it can be translated into a
            controlled and scalable manufacturing process.
          </p>
        </Reveal>

        {/* PDF: horizontal flow strip — R&D → … → Final Product */}
        <Reveal delay={100}>
          <div className="mt-12 overflow-x-auto rounded-sm border border-hairline bg-background p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-science mb-5">
              Our manufacturing approach connects:
            </p>
            <div className="flex min-w-[680px] items-center gap-0">
              {[
                "R&D",
                "Product Development",
                "Process Optimization",
                "Production",
                "Quality Control",
                "Final Product",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`px-4 py-3 text-center text-[0.78rem] font-semibold ${
                      i === 0 || i === arr.length - 1
                        ? "bg-teal text-[#05231f]"
                        : "bg-navy/[0.07] text-navy"
                    }`}
                  >
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <span className="px-1 text-teal font-bold text-sm">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.88rem] text-muted-foreground">
              This integrated structure supports the transition from product concept to commercial
              manufacturing.
            </p>
          </div>
        </Reveal>

        {/* PDF: 4-col image grid below the flow */}
        <Reveal delay={140}>
          <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "R&D",
                body: "Exploring innovative biological materials and advanced technologies.",
                img: molecular,
                /* TODO: PDF IMAGE — upload/replace with R&D manufacturing image */
              },
              {
                title: "Development",
                body: "Optimizing formulations and processes for stability, efficacy and consistency.",
                img: koreanLabTeam,
                /* TODO: PDF IMAGE — upload/replace with Development manufacturing image */
              },
              {
                title: "Production",
                body: "Advanced manufacturing facilities with controlled environments and precise processes.",
                img: cleanroom,
                /* TODO: PDF IMAGE — upload/replace with Production manufacturing image */
              },
              {
                title: "Quality",
                body: "Rigorous testing, monitoring and documentation at every stage.",
                img: qcLab,
                /* TODO: PDF IMAGE — upload/replace with Quality manufacturing image */
              },
            ].map((step) => (
              <div key={step.title} className="bg-card overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold text-navy">{step.title}</h4>
                  <p className="mt-2 text-[0.82rem] text-muted-foreground">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10">
            <TealButton to="/facility" variant="outline">Explore Manufacturing</TealButton>
          </div>
        </Reveal>
      </Section>

      {/* ================================================================
          QUALITY — "Quality Built Into Every Stage"
          PDF: page 5 — 6 quality approach steps in a navy section
          ================================================================ */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 navy-grid opacity-30" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            {/* Left: heading + description + CTA */}
            <Reveal>
              <div>
                <p className="eyebrow !text-teal">Quality &amp; Control</p>
                {/* PDF: "Quality Built Into Every Stage" */}
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
                  Quality Built Into Every Stage
                </h2>
                <p className="mt-5 text-[1rem] leading-relaxed text-white/70">
                  At Vesco Science, quality is integrated throughout the entire product lifecycle —
                  from raw material selection and process development to manufacturing, testing,
                  documentation, storage and distribution.
                </p>
                <p className="mt-4 text-[1rem] leading-relaxed text-white/70">
                  Our quality approach is designed to support{" "}
                  <strong className="text-white">
                    product consistency, process control, traceability and integrity
                  </strong>{" "}
                  while meeting the defined requirements of each product and market.
                </p>
                <div className="mt-10">
                  <TealButton to="/quality">Our Quality System</TealButton>
                </div>
              </div>
            </Reveal>

            {/* Right: 6-step quality approach cards */}
            <Reveal delay={120}>
              <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    num: "01",
                    title: "Raw Material Control",
                    body: "Raw materials are carefully evaluated against defined specifications before entering the manufacturing process.",
                  },
                  {
                    num: "02",
                    title: "Process Control",
                    body: "Manufacturing processes are performed under defined and monitored conditions.",
                  },
                  {
                    num: "03",
                    title: "Analytical Testing",
                    body: "Product-specific analytical testing is used to evaluate key quality attributes and characteristics.",
                  },
                  {
                    num: "04",
                    title: "Microbiological Testing",
                    body: "Relevant microbiological assessments are conducted according to product requirements and applicable standards.",
                  },
                  {
                    num: "05",
                    title: "Batch Traceability",
                    body: "Each batch is supported by documented manufacturing and quality information.",
                  },
                  {
                    num: "06",
                    title: "Storage & Distribution",
                    body: "Products are stored and transported according to their defined storage and handling requirements.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.num} delay={i * 50}>
                    <div className="h-full bg-white/[0.04] p-6 outline outline-white/10">
                      <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal">
                        {item.num}
                      </span>
                      <h4 className="mt-3 text-[0.9rem] font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-[0.8rem] leading-relaxed text-white/60">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          GLOBAL PARTNERSHIP — Vesco Science × EverCeutical
          PDF: page 6
          ================================================================ */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Left: text + product platforms + CTA */}
          <Reveal>
            <div>
              <p className="eyebrow">Global Partnership</p>
              {/* PDF: "Vesco Science × EverCeutical" */}
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
                Vesco Science <span className="text-science">×</span> EverCeutical
              </h2>
              <p className="mt-3 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Strategic Global Partnership
              </p>
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Vesco Science collaborates with EverCeutical for the global marketing and
                commercialization of selected Vesco Science products, including exosome, filler and
                peptide-based solutions.
              </p>

              {/* PDF: Selected Product Platforms */}
              <div className="mt-8 border border-hairline bg-background p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-science mb-4">
                  Selected Product Platforms
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Exosomes", "HA & Fillers", "Peptides", "PDRN / PN", "Regenerative Solutions"].map(
                    (item) => (
                      <span
                        key={item}
                        className="border border-hairline bg-card px-3 py-1.5 text-[0.78rem] font-medium text-navy"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-8">
                <TealButton to="/about/network" variant="outline">
                  Explore EverCeutical Partnership
                </TealButton>
              </div>
            </div>
          </Reveal>

          {/* Right: Vesco × EverCeutical columns */}
          <Reveal delay={120}>
            <div className="space-y-0 border border-hairline overflow-hidden">
              <div className="bg-background p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
                  Vesco Science
                </p>
                <p className="mt-2 text-[0.88rem] text-muted-foreground">
                  R&D · Technology · Manufacturing
                </p>
              </div>
              <div className="flex items-center justify-center border-y border-hairline bg-teal/5 py-4">
                <span className="text-[1.5rem] font-bold text-teal/40">×</span>
              </div>
              <div className="bg-background p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
                  EverCeutical
                </p>
                <p className="mt-2 text-[0.88rem] text-muted-foreground">
                  Global Marketing · Commercialization · Market Expansion
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          VISION & MISSION — PDF: pages 7
          ================================================================ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left: Our Vision */}
          <Reveal>
            <div className="border-l-2 border-teal pl-8">
              <p className="eyebrow">Our Vision</p>
              {/* PDF: "Building the Future of Regenerative Biotechnology" */}
              <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] font-semibold text-navy">
                Building the Future of Regenerative Biotechnology
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-muted-foreground">
                We envision a future where advanced biotechnology can be developed, manufactured and
                delivered through reliable scientific and quality-driven systems.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                Our focus is on building technologies and partnerships that contribute to the
                continued advancement of regenerative medicine and professional aesthetic solutions.
              </p>
            </div>
          </Reveal>

          {/* Right: Our Mission */}
          <Reveal delay={120}>
            <div className="border-l-2 border-teal/30 pl-8">
              <p className="eyebrow">Our Mission</p>
              {/* PDF: "Science With Purpose. Manufacturing With Precision." */}
              <h2 className="mt-4 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.15] font-semibold text-navy">
                Science With Purpose. Manufacturing With Precision.
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                Our mission is to connect:
              </p>
              {/* PDF: 4 mission items */}
              <ul className="mt-4 space-y-3">
                {[
                  "Scientific Research",
                  "Advanced Technology",
                  "Manufacturing Excellence",
                  "Quality Systems",
                ].map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[0.6rem] font-bold text-teal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.95rem] font-medium text-navy">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.9rem] text-muted-foreground">
                to create innovative solutions for a rapidly evolving global biotechnology market.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          HEADQUARTERS / LOCATION — existing section, preserved
          ================================================================ */}
      {location ? (
        <Section tone="white">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <SectionHeading eyebrow={location.eyebrow} title={location.title} />
                <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                  {location.body}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {location.points.map((p) => (
                    <li
                      key={p}
                      className="border border-hairline bg-card px-3.5 py-2 text-[0.78rem] font-medium text-navy"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <TealButton to="/facility" variant="outline">
                    {t("facility.title")}
                  </TealButton>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              {/* =========================================================
                  PDF IMAGE — ABOUT PAGE, HEADQUARTERS SECTION
                  Upload the Seoul biotech campus / HQ building image.
                  Suggested filename: about-headquarters.jpg
                  Currently using: seoul-biotech-campus.jpg (existing asset)
                  ========================================================= */}
              <img
                src={seoulCampus}
                alt={location.imageAlt}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              {/* TODO: PDF IMAGE — upload/replace with actual HQ/campus image */}
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ================================================================
          OUR PEOPLE — existing section, preserved
          ================================================================ */}
      {people ? (
        <Section>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              {/* =========================================================
                  PDF IMAGE — ABOUT PAGE, OUR PEOPLE SECTION
                  Upload the Korean scientist vials image from the About PDF.
                  Suggested filename: about-scientist-vials.jpg
                  Currently using: korean-scientist-vials.jpg (existing asset)
                  ========================================================= */}
              <img
                src={koreanScientist}
                alt={people.imageAlt}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] w-full object-cover"
              />
              {/* TODO: PDF IMAGE — upload/replace with scientist image */}
            </Reveal>
            <Reveal delay={120}>
              <div>
                <SectionHeading eyebrow={people.eyebrow} title={people.title} />
                <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                  {people.body}
                </p>
                <div className="mt-10">
                  <TealButton to="/research" variant="outline">
                    {people.cta}
                  </TealButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ================================================================
          EXPLORE FURTHER — navigation links to sub-pages
          (existing, preserved — cleaned up duplicate bug)
          ================================================================ */}
      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow={t("research.eyebrow")}
            title={t("research.title")}
            intro={t("research.intro")}
          />
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/research"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("research.title")}
          </Link>
          <Link
            to="/about/mission"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/facility"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("facility.title")}
          </Link>
          <Link
            to="/about/network"
            className="rounded-sm border border-navy/20 px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-navy transition-colors hover:border-teal hover:text-science"
          >
            {t("partnership.eyebrow")}
          </Link>
        </div>
      </Section>

      {/* ================================================================
          FINAL CTA — PDF: "Let's Build the Next Generation of Biotechnology"
          PDF: page 8
          ================================================================ */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 navy-grid opacity-60" />
        <div
          className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle,rgba(53,184,176,0.28),transparent 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-24">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
              <div>
                {/* PDF: "Let's Build the Next Generation of Biotechnology" */}
                <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.14] font-semibold text-white">
                  Let's Build the Next Generation of Biotechnology
                </h2>
                {/* PDF copy */}
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65">
                  Whether you are looking for advanced biotechnology platforms, product development
                  or an OEM/ODM manufacturing partner, Vesco Science is ready to explore new
                  opportunities.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {/* PDF: "Contact Vesco Science →" */}
                <TealButton to="/contact">{t("cta.primary")}</TealButton>
                <TealButton to="/oem" variant="ghost">
                  OEM / ODM Inquiry
                </TealButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
