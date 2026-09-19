import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Reveal, TealButton } from "@/components/site/primitives";
import { CTABand } from "@/components/site/CTABand";
import { useI18n } from "@/lib/i18n";
import vials from "@/assets/vials.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "B2B Product Catalogue — Exosome, Fillers, PDRN/PN, Peptide, Botulinum Toxin" },
      {
        name: "description",
        content:
          "Vesco Science B2B product catalogue: lyophilized hUC-MSC exosomes, dermal fillers, peptide bio-remodeling, botulinum toxin, PDRN/PN solutions — including ExoGenesis, Exolyra, Hyalique-X, Luminelle, BlueVive, CuveraX, Botivex, Toxexa, Nucelvia, Polynexa, DNAVIA.",
      },
      { property: "og:title", content: "B2B Product Catalogue — Vesco Science" },
      {
        property: "og:description",
        content:
          "Five product categories. Full specifications and documentation issued on request under confidentiality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

// ─── Full product catalogue sourced from Google Docs Sitemap ─────────────────
// Structure: each category has official Vesco Science Platform items and
// Official Collaboration brand items, matching the Google Docs sitemap exactly.

type ProductItem = { slug: string; name: string };
type SubGroup = { label: string; items: ProductItem[] };
type Category = {
  key: string;
  num: string;
  title: string;
  groups: SubGroup[];
};

const CATALOGUE: Category[] = [
  {
    key: "exosome",
    num: "01",
    title: "Exosomes",
    groups: [
      {
        label: "Vesco Science Platforms",
        items: [
          { slug: "lyophilized-huc-msc-exosomes-5b",  name: "Lyophilized hUC-MSC Exosomes 5B" },
          { slug: "lyophilized-huc-msc-exosomes-10b", name: "Lyophilized hUC-MSC Exosomes 10B" },
          { slug: "lyophilized-huc-msc-exosomes-15b", name: "Lyophilized hUC-MSC Exosomes 15B" },
          { slug: "lyophilized-huc-msc-exosomes-20b", name: "Lyophilized hUC-MSC Exosomes 20B" },
          { slug: "lyophilized-huc-msc-exosomes-25b", name: "Lyophilized hUC-MSC Exosomes 25B" },
          { slug: "lyophilized-huc-msc-exosomes-40b", name: "Lyophilized hUC-MSC Exosomes 40B" },
          { slug: "scalp-exosome-diluent-9p",  name: "Scalp Exosome Diluent — 9 Bioactive Peptides" },
          { slug: "scalp-exosome-diluent-13p", name: "Scalp Exosome Diluent — 13 Bioactive Peptides" },
          { slug: "scalp-exosome-diluent-16p", name: "Scalp Exosome Diluent — 16 Bioactive Peptides" },
          { slug: "vital-exosome-diluent-9p",  name: "Vital Exosome Diluent — 9 Bioactive Peptides" },
          { slug: "vital-exosome-diluent-12p", name: "Vital Exosome Diluent — 12 Bioactive Peptides" },
          { slug: "vital-exosome-diluent-16p", name: "Vital Exosome Diluent — 16 Bioactive Peptides" },
        ],
      },
      {
        label: "Official Collaborations",
        items: [
          { slug: "exogenesis-10b-scalp-kit",  name: "ExoGenesis™ 10B Scalp Kit (+ 9-Peptide Scalp Diluent)" },
          { slug: "exogenesis-15b-scalp-kit",  name: "ExoGenesis™ 15B Scalp Kit (+ 13-Peptide Vital Diluent)" },
          { slug: "exogenesis-25b-scalp-kit",  name: "ExoGenesis™ 25B Scalp Kit" },
          { slug: "exogenesis-10b-vital-kit",  name: "ExoGenesis™ 10B Vital Kit (+ 9-Peptide Scalp Diluent)" },
          { slug: "exogenesis-15b-vital-kit",  name: "ExoGenesis™ 15B Vital Kit (+ 13-Peptide Vital Diluent)" },
          { slug: "exolyra-3b",  name: "Exolyra™ 3B" },
          { slug: "exolyra-5b",  name: "Exolyra™ 5B" },
          { slug: "exolyra-7b",  name: "Exolyra™ 7B" },
          { slug: "exolyra-10b", name: "Exolyra™ 10B" },
          { slug: "exolyra-12b", name: "Exolyra™ 12B" },
          { slug: "exolyra-15b", name: "Exolyra™ 15B" },
          { slug: "exolyra-20b", name: "Exolyra™ 20B" },
          { slug: "derived-brain", name: "Derived — For Brain" },
          { slug: "derived-lungs", name: "Derived — For Lungs" },
          { slug: "derived-bones", name: "Derived — For Bones" },
        ],
      },
    ],
  },
  {
    key: "dermal-fillers",
    num: "02",
    title: "Dermal Fillers",
    groups: [
      {
        label: "Vesco Science Platforms",
        items: [
          { slug: "ha-small-15mg-1ml", name: "Small-Molecular Hyaluronic Acid 15 mg / 1 mL" },
          { slug: "ha-small-15mg-2ml", name: "Small-Molecular Hyaluronic Acid 15 mg / 2 mL" },
          { slug: "ha-small-18mg-1ml", name: "Small-Molecular Hyaluronic Acid 18 mg / 1 mL" },
          { slug: "ha-small-18mg-2ml", name: "Small-Molecular Hyaluronic Acid 18 mg / 2 mL" },
          { slug: "ha-small-20mg-1ml", name: "Small-Molecular Hyaluronic Acid 20 mg / 1 mL" },
          { slug: "ha-small-20mg-2ml", name: "Small-Molecular Hyaluronic Acid 20 mg / 2 mL" },
          { slug: "ha-large-24mg-1ml", name: "Large-Molecular Hyaluronic Acid 24 mg / 1 mL" },
          { slug: "ha-large-24mg-2ml", name: "Large-Molecular Hyaluronic Acid 24 mg / 2 mL" },
          { slug: "ha-large-26mg-1ml", name: "Large-Molecular Hyaluronic Acid 26 mg / 1 mL" },
          { slug: "ha-large-26mg-2ml", name: "Large-Molecular Hyaluronic Acid 26 mg / 2 mL" },
        ],
      },
      {
        label: "Official Collaborations",
        items: [
          { slug: "hyalique-x-soft-1ml",  name: "Hyalique-X Soft Filler 1 mL" },
          { slug: "hyalique-x-soft-2ml",  name: "Hyalique-X Soft Filler 2 mL" },
          { slug: "hyalique-x-hard-1ml",  name: "Hyalique-X Hard Filler 1 mL" },
          { slug: "hyalique-x-hard-2ml",  name: "Hyalique-X Hard Filler 2 mL" },
          { slug: "luminelle-soft",    name: "Luminelle™ Soft" },
          { slug: "luminelle-volume",  name: "Luminelle™ Volume" },
          { slug: "luminelle-contour", name: "Luminelle™ Contour" },
        ],
      },
    ],
  },
  {
    key: "peptide-bio-remodeling",
    num: "03",
    title: "Peptide-Based Bio-Remodeling",
    groups: [
      {
        label: "Vesco Science Platforms",
        items: [
          { slug: "blue-copper-peptide-100mg", name: "Blue Copper Peptide 100 mg" },
          { slug: "blue-copper-peptide-200mg", name: "Blue Copper Peptide 200 mg" },
          { slug: "blue-copper-peptide-300mg", name: "Blue Copper Peptide 300 mg" },
          { slug: "ha-diluent-10ml",           name: "HA Diluent 10 mL" },
        ],
      },
      {
        label: "Official Collaborations",
        items: [
          { slug: "bluevive-booster", name: "BlueVive Booster (300 mg + HA Diluent 10 mL)" },
          { slug: "cuvera-x-100",    name: "CuveraX™ 100" },
          { slug: "cuvera-x-200",    name: "CuveraX™ 200" },
        ],
      },
    ],
  },
  {
    key: "botulinum-toxin",
    num: "04",
    title: "Botulinum Toxin",
    groups: [
      {
        label: "Vesco Science Platforms",
        items: [
          { slug: "botulinum-50u",  name: "Botulinum Toxin 50 U" },
          { slug: "botulinum-100u", name: "Botulinum Toxin 100 U" },
          { slug: "botulinum-200u", name: "Botulinum Toxin 200 U" },
          { slug: "botulinum-300u", name: "Botulinum Toxin 300 U" },
          { slug: "botulinum-500u", name: "Botulinum Toxin 500 U" },
        ],
      },
      {
        label: "Official Collaborations",
        items: [
          { slug: "botivex-lite", name: "Botivex Lite" },
          { slug: "botivex-core", name: "Botivex Core" },
          { slug: "botivex-plus", name: "Botivex Plus" },
          { slug: "toxexa-100",   name: "Toxexa 100" },
          { slug: "toxexa-200",   name: "Toxexa 200" },
        ],
      },
    ],
  },
  {
    key: "pdrn-pn",
    num: "05",
    title: "PDRN / PN Solutions",
    groups: [
      {
        label: "Vesco Science Platforms",
        items: [
          { slug: "pdrn-2mg",          name: "PDRN 2 mg/mL" },
          { slug: "pdrn-5mg",          name: "PDRN 5 mg/mL" },
          { slug: "pn-15mg",           name: "PN 15 mg/mL" },
          { slug: "pn-20mg",           name: "PN 20 mg/mL" },
          { slug: "pdrn-ha-2mg-20mg",  name: "PDRN 2 mg/mL + HA 20 mg/mL" },
          { slug: "pdrn-ha-5mg-15mg",  name: "PDRN 5 mg/mL + HA 15 mg/mL" },
        ],
      },
      {
        label: "Official Collaborations",
        items: [
          { slug: "nucelvia-repair-2",    name: "Nucelvia Repair 2" },
          { slug: "nucelvia-repair-5",    name: "Nucelvia Repair 5" },
          { slug: "nucelvia-regen-15",    name: "Nucelvia Regen 15" },
          { slug: "nucelvia-regen-20",    name: "Nucelvia Regen 20" },
          { slug: "nucelvia-fusion",      name: "Nucelvia Fusion" },
          { slug: "polynexa-nucleorx",    name: "POLYNEXA NucleoRx" },
          { slug: "polynexa-polyrx",      name: "POLYNEXA PolyRx" },
          { slug: "polynexa-nucleoprime", name: "POLYNEXA NucleoPrime" },
          { slug: "dnavia-pdrn-2",        name: "DNAVIA™ PDRN 2" },
          { slug: "dnavia-pdrn-5",        name: "DNAVIA™ PDRN 5" },
          { slug: "dnavia-pn-15",         name: "DNAVIA™ PN 15" },
          { slug: "dnavia-pn-20",         name: "DNAVIA™ PN 20" },
        ],
      },
    ],
  },
];

function Page() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("products.eyebrow")}
        title={t("products.title")}
        lead={t("products.intro")}
        image={vials}
        imageAlt={t("facility.imageAlt")}
        crumb={{ label: t("nav.products"), homeLabel: t("common.breadcrumbHome") }}
      />

      <Section>
        {/* Catalogue intro note */}
        <Reveal>
          <div className="mb-14 border border-hairline bg-card p-6 md:p-8">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-science mb-3">
              About This Catalogue
            </p>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              Full product specifications, batch documentation, COA and TDS are issued on request
              under confidentiality. All products are intended for B2B, professional, and research
              use in accordance with the regulatory framework of the destination market.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <TealButton to="/contact" variant="outline">Request Product Information</TealButton>
              <TealButton to="/oem" variant="outline">OEM / ODM Inquiry</TealButton>
            </div>
          </div>
        </Reveal>

        {/* Full catalogue — 5 categories with groups */}
        <div className="grid gap-16">
          {CATALOGUE.map((cat, ci) => (
            <Reveal key={cat.key} delay={ci * 40}>
              <div>
                {/* Category header */}
                <div className="mb-8 flex items-baseline gap-5 border-b-2 border-teal pb-4">
                  <span className="font-display text-[0.72rem] font-bold tracking-[0.18em] text-teal">
                    {cat.num}
                  </span>
                  <h2 className="text-[1.65rem] font-semibold text-navy">{cat.title}</h2>
                  <span className="ml-auto text-[0.75rem] text-muted-foreground">
                    {cat.groups.reduce((acc, g) => acc + g.items.length, 0)} products
                  </span>
                </div>

                {/* Sub-groups: Vesco Science Platforms + Official Collaborations */}
                <div className="grid gap-10 lg:grid-cols-2">
                  {cat.groups.map((group) => (
                    <div key={group.label}>
                      {/* Sub-group label */}
                      <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-science border-l-2 border-teal pl-3">
                        {group.label}
                      </p>
                      <div className="grid gap-px bg-hairline">
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            to="/products/$slug"
                            params={{ slug: item.slug }}
                            className="group flex items-center justify-between bg-card px-5 py-4 transition-colors hover:bg-secondary"
                          >
                            <span className="text-[0.92rem] font-medium text-navy group-hover:text-science transition-colors">
                              {item.name}
                            </span>
                            <span className="ml-4 shrink-0 h-px w-4 bg-teal/60 transition-all duration-300 group-hover:w-8" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer note */}
        <Reveal>
          <div className="mt-16 border-t border-hairline pt-8">
            <p className="text-[0.85rem] text-muted-foreground">
              {t("products.detail.demoNote")}
            </p>
            <div className="mt-6">
              <TealButton to="/contact" variant="outline">
                Request Product Catalogue
              </TealButton>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
