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
import researchTeamImg from "@/assets/research-team.jpg";
import koreanLabTeam from "@/assets/korean-lab-team.jpg";
import cleanroom from "@/assets/cleanroom.jpg";
import qcLab from "@/assets/qc-lab.jpg";
import molecular from "@/assets/molecular.jpg";
import lyophilizer from "@/assets/lyophilizer.jpg";
import koreanScientist from "@/assets/korean-scientist-vials.jpg";
import vials from "@/assets/vials.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research & Development — Vesco Science" },
      {
        name: "description",
        content:
          "Exosome science, formulation engineering, stability and analytical method development at Vesco Science.",
      },
      { property: "og:title", content: "Research & Development — Vesco Science" },
      {
        property: "og:description",
        content:
          "Research areas and scientific capability behind Vesco Science products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t, tx } = useI18n();
  const areas = tx<string[]>("research.areas") ?? [];
  const team = tx<string[]>("research.team") ?? [];

  return (
    <>
      {/* ================================================================
          HERO — "Advancing Science Through Precision Research"
          PDF: page 1
          ================================================================ */}
      {/* =========================================================
          PDF IMAGE — R&D PAGE HERO
          Upload the lab team research image from the R&D PDF.
          Suggested filename: rd-hero-lab-team.jpg
          Currently using: research-team.jpg (existing asset)
          ========================================================= */}
      <PageHero
        eyebrow={t("research.eyebrow")}
        title="Research & Development"
        lead="Advancing Science Through Precision Research"
        image={researchTeamImg}
        imageAlt="Vesco Science research team working in the laboratory"
        crumb={{ label: t("research.title"), homeLabel: t("common.breadcrumbHome") }}
      />

      {/* ================================================================
          01 — R&D INTRO + R&D PHILOSOPHY
          PDF: page 1 — "At Vesco Science, research and development is at
          the core of everything we do."
          ================================================================ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: intro text */}
          <Reveal>
            <div>
              <p className="eyebrow">{t("research.eyebrow")}</p>
              {/* PDF: "Advancing Science Through Precision Research" */}
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
                Advancing Science Through Precision Research
              </h2>
              {/* PDF body copy */}
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
                At <strong className="text-navy">Vesco Science</strong>, research and development
                is at the core of everything we do. We focus on translating advanced biotechnology
                into reliable, scalable, and scientifically characterized solutions for regenerative
                medicine, aesthetic medicine, and cell-derived biologics.
              </p>

              {/* PDF: "Our R&D Philosophy" box */}
              <div className="mt-10 border-l-4 border-teal bg-card px-6 py-6">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-science">
                  Our R&D Philosophy
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  We believe meaningful innovation begins with{" "}
                  <strong className="text-navy">
                    scientific understanding, rigorous characterization, and continuous
                    optimization.
                  </strong>{" "}
                  Our R&D teams work across product development, formulation, purification,
                  analytical testing, and process optimization to improve consistency and product
                  quality.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: image */}
          <Reveal delay={140}>
            {/* =========================================================
                PDF IMAGE — R&D PAGE, INTRO SECTION
                Upload the scientists working at lab bench image.
                Suggested filename: rd-intro-scientists.jpg
                Currently using: korean-lab-team.jpg (existing asset)
                ========================================================= */}
            <img
              src={koreanLabTeam}
              alt="Vesco Science research team in the laboratory"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            {/* TODO: PDF IMAGE — upload/replace with lab team image from R&D PDF page 1 */}
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          02 — FROM RESEARCH TO INNOVATION
          PDF: page 2 — "Our development process connects laboratory research
          with real-world applications."
          5-step pipeline: Research → Lab Development → Characterization →
          Process Optimization → Product Development
          ================================================================ */}
      <Section tone="white">
        <Reveal>
          <p className="eyebrow">Development Process</p>
          {/* PDF: "From Research to Innovation" */}
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
            From Research to Innovation
          </h2>
          <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            Our development process connects laboratory research with real-world applications. Each
            stage is designed to evaluate critical product characteristics, optimize manufacturing
            parameters, and establish reproducible processes before a product moves toward broader
            development.
          </p>
        </Reveal>

        {/* PDF: 5-step pipeline with images */}
        <Reveal delay={100}>
          <div className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                num: "01",
                title: "Research",
                body: "Exploring scientific possibilities.",
                img: molecular,
                /* TODO: PDF IMAGE — upload/replace with Research step image */
              },
              {
                num: "02",
                title: "Laboratory Development",
                body: "Developing formulations and protocols.",
                img: koreanLabTeam,
                /* TODO: PDF IMAGE — upload/replace with Lab Development image */
              },
              {
                num: "03",
                title: "Characterization",
                body: "Analyzing key attributes for quality and consistency.",
                img: qcLab,
                /* TODO: PDF IMAGE — upload/replace with Characterization image */
              },
              {
                num: "04",
                title: "Process Optimization",
                body: "Refining processes for better performance and scalability.",
                img: cleanroom,
                /* TODO: PDF IMAGE — upload/replace with Process Optimization image */
              },
              {
                num: "05",
                title: "Product Development",
                body: "Delivering advanced, reliable solutions.",
                img: vials,
                /* TODO: PDF IMAGE — upload/replace with Product Development image */
              },
            ].map((step) => (
              <div key={step.num} className="bg-card overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover opacity-80"
                />
                <div className="p-5">
                  <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-teal">
                    {step.num}
                  </span>
                  <h4 className="mt-2 text-[0.9rem] font-semibold text-navy">{step.title}</h4>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* PDF: secondary 4-step simplified flow */}
        <Reveal delay={180}>
          <div className="mt-12 border border-hairline bg-background p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-science mb-5">
              Our development philosophy follows an integrated pathway:
            </p>
            <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  label: "Research",
                  desc: "Exploring biological materials, technologies and new product opportunities.",
                },
                {
                  num: "02",
                  label: "Development",
                  desc: "Translating scientific concepts into optimized formulations and processes.",
                },
                {
                  num: "03",
                  label: "Manufacturing",
                  desc: "Scaling validated concepts into controlled production.",
                },
                {
                  num: "04",
                  label: "Quality",
                  desc: "Applying testing, documentation and quality controls throughout the lifecycle.",
                },
              ].map((item, i, arr) => (
                <div key={item.num} className="relative bg-card p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-[0.65rem] font-bold text-[#05231f]">
                      {item.num}
                    </span>
                    <h4 className="text-[0.88rem] font-semibold text-navy">{item.label}</h4>
                  </div>
                  <p className="mt-2.5 text-[0.78rem] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  {i < arr.length - 1 && (
                    <div className="absolute top-1/2 -right-2.5 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-[#05231f] text-[0.6rem] font-bold lg:flex">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ================================================================
          03 — EXISTING RESEARCH AREAS GRID
          (existing, preserved — from i18n research.areas)
          ================================================================ */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow={t("research.eyebrow")} title={t("research.areasTitle")} />
        </Reveal>
        <div className="mt-12 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a} delay={i * 60}>
              <div className="group h-full bg-card p-8 transition-colors hover:bg-secondary">
                <span className="font-display text-[0.75rem] font-bold tracking-[0.18em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-navy">{a}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================================================================
          04 — EXOSOME & EXTRACELLULAR VESICLE RESEARCH
          PDF: page 3
          ================================================================ */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left: text */}
          <Reveal>
            <div>
              <p className="eyebrow">Exosome Research</p>
              {/* PDF: "Exosome & Extracellular Vesicle Research" */}
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
                Exosome &amp; Extracellular Vesicle Research
              </h2>
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Vesco Science has a strong focus on{" "}
                <strong className="text-navy">
                  extracellular vesicle and exosome-based technologies.
                </strong>{" "}
                Our research explores isolation, purification, concentration, preservation, and
                analytical characterization of extracellular vesicles derived from different
                biological sources.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We investigate key parameters such as{" "}
                <strong className="text-navy">
                  particle concentration, size distribution, morphology, and
                  vesicle-associated markers
                </strong>{" "}
                to support consistent product characterization.
              </p>

              {/* EV content types */}
              <div className="mt-8 grid gap-px bg-hairline sm:grid-cols-2">
                {[
                  { label: "DNA", desc: "Genetic material cargo" },
                  { label: "Protein", desc: "Functional protein content" },
                  { label: "mRNA", desc: "Messenger RNA payload" },
                  { label: "miRNA", desc: "Regulatory microRNA" },
                ].map((item) => (
                  <div key={item.label} className="bg-card p-4">
                    <p className="text-[0.85rem] font-semibold text-navy">{item.label}</p>
                    <p className="mt-1 text-[0.78rem] text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: EV diagram placeholder + image */}
          <Reveal delay={120}>
            <div>
              {/* =========================================================
                  PDF IMAGE — R&D PAGE, EXOSOME RESEARCH SECTION
                  Upload the extracellular vesicle biology diagram from the
                  R&D PDF (showing EV generating cell, multivesicular bodies,
                  recipient cell, DNA/Protein/mRNA/miRNA content).
                  Suggested filename: rd-ev-biology-diagram.jpg
                  Currently using: molecular.jpg as a temporary placeholder.
                  ========================================================= */}
              <img
                src={molecular}
                alt="Extracellular vesicle biology diagram"
                loading="lazy"
                className="w-full object-cover rounded-sm"
              />
              {/* TODO: PDF IMAGE — upload/replace with EV biology diagram from R&D PDF page 3 */}

              {/* EV process steps */}
              <div className="mt-6 border border-hairline bg-background p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-science mb-4">
                  Extracellular Vesicle Process
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    "EV Generating Cell",
                    "Multivesicular Bodies",
                    "Membrane Fusion",
                    "Extracellular Vesicles",
                    "Recipient Cell",
                  ].map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="text-[0.72rem] font-medium text-navy">{step}</span>
                      {i < arr.length - 1 && (
                        <span className="text-teal font-bold text-[0.7rem]">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          05 — ADVANCED PURIFICATION & PROCESSING
          PDF: page 3 bottom
          ================================================================ */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 navy-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            {/* Left: image */}
            <Reveal>
              {/* =========================================================
                  PDF IMAGE — R&D PAGE, PURIFICATION SECTION
                  Upload the cleanroom/facility image from the R&D PDF.
                  Suggested filename: rd-purification-facility.jpg
                  Currently using: cleanroom.jpg (existing asset)
                  ========================================================= */}
              <img
                src={cleanroom}
                alt="Advanced purification and processing facility"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-80"
              />
              {/* TODO: PDF IMAGE — upload/replace with purification facility image from R&D PDF page 3 */}
            </Reveal>

            {/* Right: text */}
            <Reveal delay={120}>
              <div>
                <p className="eyebrow !text-teal">Technology</p>
                {/* PDF: "Advanced Purification & Processing" */}
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
                  Advanced Purification &amp; Processing
                </h2>
                <p className="mt-6 text-[1rem] leading-relaxed text-white/70">
                  Our R&D capabilities include the optimization of advanced purification approaches
                  such as{" "}
                  <strong className="text-white">
                    ultrafiltration, tangential flow filtration, chromatography, and size-based
                    separation technologies.
                  </strong>
                </p>
                <p className="mt-4 text-[1rem] leading-relaxed text-white/70">
                  These processes are continuously evaluated to improve recovery, purity,
                  reproducibility, and scalability while maintaining the desired characteristics of
                  the biological material.
                </p>

                {/* Technique tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Ultrafiltration",
                    "Tangential Flow Filtration",
                    "Chromatography",
                    "Size-Based Separation",
                    "Ultracentrifugation",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-white/20 px-3.5 py-2 text-[0.78rem] font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          06 — ANALYTICAL CHARACTERIZATION
          PDF: page 4
          ================================================================ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left: text */}
          <Reveal>
            <div>
              <p className="eyebrow">Analytical Science</p>
              {/* PDF: "Analytical Characterization" */}
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
                Analytical Characterization
              </h2>
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Scientific characterization is an essential part of our development workflow.
                Depending on the product and development stage, we utilize analytical approaches
                including{" "}
                <strong className="text-navy">
                  Nanoparticle Tracking Analysis (NTA), electron microscopy-based imaging, protein
                  marker analysis, and physicochemical testing.
                </strong>
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                These methods help us understand and monitor important product attributes throughout
                development and manufacturing.
              </p>

              {/* Analytical methods grid */}
              <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2">
                {[
                  {
                    title: "Particle Characterization",
                    items: ["NTA", "Particle concentration", "Size distribution"],
                  },
                  {
                    title: "Morphology",
                    items: ["TEM imaging", "Cryo-TEM"],
                  },
                  {
                    title: "Safety Testing",
                    items: ["Sterility", "Endotoxin", "Mycoplasma"],
                  },
                  {
                    title: "Purity Analysis",
                    items: ["Protein analysis", "Particle-to-protein ratio"],
                  },
                ].map((group) => (
                  <div key={group.title} className="bg-card p-5 outline outline-hairline">
                    <h4 className="text-[0.85rem] font-semibold text-navy">{group.title}</h4>
                    <ul className="mt-3 space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-[0.8rem] text-muted-foreground"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: cleanroom/lab image */}
          <Reveal delay={120}>
            {/* =========================================================
                PDF IMAGE — R&D PAGE, ANALYTICAL CHARACTERIZATION SECTION
                Upload the large cleanroom/analytical lab image from the
                R&D PDF (wide cleanroom with staff in full PPE).
                Suggested filename: rd-analytical-cleanroom.jpg
                Currently using: qc-lab.jpg (existing asset)
                ========================================================= */}
            <img
              src={qcLab}
              alt="Analytical characterization laboratory"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            {/* TODO: PDF IMAGE — upload/replace with cleanroom analytical lab image from R&D PDF page 4 */}
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          07 — FORMULATION & STABILITY RESEARCH
          PDF: page 5
          ================================================================ */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: electron microscopy image */}
          <Reveal>
            {/* =========================================================
                PDF IMAGE — R&D PAGE, FORMULATION & STABILITY SECTION
                Upload the electron microscopy image from the R&D PDF
                (showing exosome vesicles at 200nm scale bar).
                Suggested filename: rd-em-exosomes-200nm.jpg
                Currently using: molecular.jpg as placeholder.
                ========================================================= */}
            <img
              src={molecular}
              alt="Electron microscopy image of exosome vesicles at 200nm scale"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            {/* TODO: PDF IMAGE — upload/replace with EM exosome image (200nm scale bar) from R&D PDF page 5 */}
          </Reveal>

          {/* Right: text */}
          <Reveal delay={120}>
            <div>
              <p className="eyebrow">Formulation Science</p>
              {/* PDF: "Formulation & Stability Research" */}
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
                Formulation &amp; Stability Research
              </h2>
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Biological products require careful formulation and storage strategies. Our R&D
                activities evaluate{" "}
                <strong className="text-navy">
                  formulation composition, concentration, preservation methods, and storage
                  conditions
                </strong>{" "}
                to support product stability and consistency.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We also investigate different preservation technologies, including{" "}
                <strong className="text-navy">
                  lyophilization and controlled frozen storage,
                </strong>{" "}
                where appropriate for the product platform.
              </p>

              {/* Key focus areas */}
              <ul className="mt-8 space-y-3">
                {[
                  "Formulation composition evaluation",
                  "Concentration optimization",
                  "Preservation method development",
                  "Storage condition studies",
                  "Lyophilization cycle development",
                  "Controlled frozen storage protocols",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9rem] text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          08 — PROCESS DEVELOPMENT
          PDF: page 6
          ================================================================ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left: text */}
          <Reveal>
            <div>
              <p className="eyebrow">Process Engineering</p>
              {/* PDF: "Process Development" */}
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
                Process Development
              </h2>
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                A promising laboratory formulation must also be reproducible at scale. Our
                process-development work focuses on converting laboratory protocols into{" "}
                <strong className="text-navy">
                  controlled, repeatable, and scalable manufacturing processes.
                </strong>
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
                We continuously optimize critical process parameters to improve batch-to-batch
                consistency and manufacturing efficiency.
              </p>

              {/* PDF: 5-stage process development wheel */}
              <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-1">
                {[
                  {
                    num: "01",
                    label: "Lab Scale",
                    desc: "Developing and validating formulations and processes at lab scale.",
                  },
                  {
                    num: "02",
                    label: "Parameter Refinement",
                    desc: "Refining process parameters to improve performance, yield and consistency.",
                  },
                  {
                    num: "03",
                    label: "Pilot Scale",
                    desc: "Scaling the optimized process in pilot systems to ensure robustness and scalability.",
                  },
                  {
                    num: "04",
                    label: "Process Controls",
                    desc: "Implementing process controls to ensure reproducibility and efficiency.",
                  },
                  {
                    num: "05",
                    label: "Commercial Manufacturing",
                    desc: "Achieving consistent, reliable and high-quality manufacturing.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-start gap-4 bg-card px-5 py-4 outline outline-hairline"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-[0.62rem] font-bold text-[#05231f]">
                      {item.num}
                    </span>
                    <div>
                      <p className="text-[0.88rem] font-semibold text-navy">{item.label}</p>
                      <p className="mt-0.5 text-[0.8rem] leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: lyophilizer / manufacturing equipment image */}
          <Reveal delay={120}>
            {/* =========================================================
                PDF IMAGE — R&D PAGE, PROCESS DEVELOPMENT SECTION
                Upload the pharmaceutical equipment / lyophilizer image
                from the R&D PDF (scientist in blue lab coat operating
                large industrial equipment).
                Suggested filename: rd-process-equipment.jpg
                Currently using: lyophilizer.jpg (existing asset)
                ========================================================= */}
            <img
              src={lyophilizer}
              alt="Pharmaceutical process development equipment"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            {/* TODO: PDF IMAGE — upload/replace with process development equipment image from R&D PDF page 6 */}
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          09 — QUALITY BY DESIGN
          PDF: page 7
          ================================================================ */}
      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: QbD visual */}
          <Reveal>
            <div>
              <p className="eyebrow">Quality Approach</p>
              {/* PDF: "Quality by Design" */}
              <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-navy">
                Quality by Design
              </h2>
              <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
                Vesco Science integrates quality considerations into product development from the
                earliest stages. By identifying{" "}
                <strong className="text-navy">
                  critical quality attributes and critical process parameters,
                </strong>{" "}
                our teams can systematically evaluate and control factors that may influence
                product performance and consistency.
              </p>

              {/* PDF: QbD circular diagram — 5 elements */}
              <div className="mt-10 relative">
                {/* Central label */}
                <div className="mb-6 text-center">
                  <span className="inline-block rounded-sm border border-teal/30 bg-teal/10 px-5 py-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-teal">
                    Quality by Design
                  </span>
                </div>
                <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    {
                      icon: "📋",
                      title: "Critical Quality Attributes",
                      desc: "Identifying product properties essential to safety and efficacy.",
                    },
                    {
                      icon: "⚙️",
                      title: "Critical Process Parameters",
                      desc: "Defining and controlling process variables that affect quality.",
                    },
                    {
                      icon: "⚠️",
                      title: "Risk Assessment",
                      desc: "Evaluating and mitigating risks throughout development.",
                    },
                    {
                      icon: "🎛️",
                      title: "Process Control",
                      desc: "Implementing controls to maintain consistent process performance.",
                    },
                    {
                      icon: "✅",
                      title: "Consistent Product Quality",
                      desc: "Delivering products that reliably meet defined specifications.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 bg-card p-4 outline outline-hairline"
                    >
                      <span className="mt-0.5 text-lg">{item.icon}</span>
                      <div>
                        <p className="text-[0.85rem] font-semibold text-navy">{item.title}</p>
                        <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: image */}
          <Reveal delay={120}>
            {/* =========================================================
                PDF IMAGE — R&D PAGE, QUALITY BY DESIGN SECTION
                Upload the Quality by Design circular diagram/image from
                the R&D PDF (showing Critical Quality Attributes, Critical
                Process Parameters, Risk Assessment, Process Control,
                Consistent Product Quality in circular layout).
                Suggested filename: rd-quality-by-design-diagram.jpg
                Currently using: qc-lab.jpg as placeholder.
                ========================================================= */}
            <img
              src={qcLab}
              alt="Quality by Design framework"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            {/* TODO: PDF IMAGE — upload/replace with QbD diagram from R&D PDF page 7 */}
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          10 — CONTINUOUS INNOVATION
          PDF: page 8
          ================================================================ */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 navy-grid opacity-30" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left: text */}
            <Reveal>
              <div>
                <p className="eyebrow !text-teal">Innovation</p>
                {/* PDF: "Continuous Innovation" */}
                <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] leading-[1.12] font-semibold text-white">
                  Continuous Innovation
                </h2>
                <p className="mt-6 text-[1rem] leading-relaxed text-white/70">
                  R&D at Vesco Science does not end when a product is developed. We continue to
                  evaluate new technologies, biological sources, analytical methods, and processing
                  strategies to expand our capabilities and improve existing platforms.
                </p>

                {/* Innovation focus areas */}
                <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
                  {[
                    {
                      title: "New Technologies",
                      desc: "Evaluating emerging platforms and techniques in biotechnology.",
                    },
                    {
                      title: "Biological Sources",
                      desc: "Exploring new cell sources and biological materials.",
                    },
                    {
                      title: "Analytical Methods",
                      desc: "Developing and validating improved characterization approaches.",
                    },
                    {
                      title: "Processing Strategies",
                      desc: "Optimizing scalability, efficiency and product consistency.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/[0.04] p-5 outline outline-white/10">
                      <h4 className="text-[0.88rem] font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-[0.78rem] leading-relaxed text-white/60">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: image */}
            <Reveal delay={140}>
              {/* =========================================================
                  PDF IMAGE — R&D PAGE, CONTINUOUS INNOVATION SECTION
                  Upload the manufacturing process control image from the
                  R&D PDF (two scientists in pink lab coats/hair nets
                  operating industrial filling equipment).
                  Suggested filename: rd-innovation-manufacturing.jpg
                  Currently using: koreanScientist as placeholder.
                  ========================================================= */}
              <img
                src={koreanScientist}
                alt="Continuous innovation in manufacturing"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-80"
              />
              {/* TODO: PDF IMAGE — upload/replace with manufacturing control image from R&D PDF page 8 */}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          11 — OUR GOAL
          PDF: page 9
          ================================================================ */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: text */}
          <Reveal>
            <div>
              <p className="eyebrow">Our Goal</p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                {/* PDF: "Our goal is simple: to transform advanced biological research into
                precisely developed, consistently characterized, and scientifically driven solutions." */}
                Our goal is simple: to transform advanced biological research into{" "}
                <strong className="text-navy">
                  precisely developed, consistently characterized, and scientifically driven
                  solutions.
                </strong>
              </p>
            </div>
          </Reveal>

          {/* Right: image */}
          <Reveal delay={120}>
            {/* =========================================================
                PDF IMAGE — R&D PAGE, OUR GOAL SECTION
                Upload the scientist with pipette image from the R&D PDF
                (female scientist in lab coat pipetting into well plate).
                Suggested filename: rd-goal-scientist-pipette.jpg
                Currently using: vials.jpg as placeholder.
                ========================================================= */}
            <img
              src={vials}
              alt="Vesco Science scientist in laboratory"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            {/* TODO: PDF IMAGE — upload/replace with scientist pipette image from R&D PDF page 9 */}
          </Reveal>
        </div>
      </Section>

      {/* ================================================================
          12 — "SCIENCE. PRECISION. INNOVATION." CLOSING STATEMENT
          PDF: page 9 bottom
          ================================================================ */}
      <section className="relative bg-navy-deep">
        <div className="absolute inset-0 navy-grid opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%,rgba(53,184,176,0.12),transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 text-center md:px-10 md:py-28">
          <Reveal>
            {/* PDF: "Science. Precision. Innovation." */}
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-tight text-white">
              <span className="text-teal">Science.</span>{" "}
              <span className="text-white/80">Precision.</span>{" "}
              <span className="text-white/60">Innovation.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-[1.0625rem] leading-relaxed text-white/65">
              {/* PDF: final closing copy */}
              Vesco Science combines biotechnology, analytical science, and process engineering to
              develop the next generation of advanced biological products.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <TealButton to="/contact">{t("cta.primary")}</TealButton>
              <TealButton to="/technology" variant="ghost">
                {t("hero.ctaPrimary")}
              </TealButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          CAPABILITY AREAS — existing navy section, preserved
          ================================================================ */}
      <Section tone="navy">
        <SectionHeading invert eyebrow={t("research.eyebrow")} title={t("research.teamTitle")} />
        <div className="mt-12 flex flex-wrap gap-3">
          {team.map((m) => (
            <span
              key={m}
              className="rounded-sm border border-white/15 px-5 py-2.5 text-[0.85rem] text-white/75"
            >
              {m}
            </span>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
