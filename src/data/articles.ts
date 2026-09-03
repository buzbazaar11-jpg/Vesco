// Demonstration article index for the Science & Insights knowledge center.
// Editorial content is illustrative; no factual company claims are made here.

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
};

export const ARTICLE_CATEGORIES = [
  "Exosome Science",
  "PDRN / PN",
  "Manufacturing",
  "Korean Biotechnology",
  "Regulatory",
  "Industry Insights",
] as const;

export const ARTICLES: Article[] = [
  {
    slug: "what-are-exosomes",
    category: "Exosome Science",
    title: "What Are Exosomes?",
    excerpt: "Nanoscale extracellular vesicles, what they carry, and why they matter in regenerative science.",
  },
  {
    slug: "exosomes-vs-extracellular-vesicles",
    category: "Exosome Science",
    title: "Exosomes vs Extracellular Vesicles",
    excerpt: "Where the terminology overlaps, where it does not, and why the distinction affects specification.",
  },
  {
    slug: "how-exosomes-are-isolated",
    category: "Exosome Science",
    title: "How Exosomes Are Isolated",
    excerpt: "An overview of the isolation approaches used in biotechnology manufacturing.",
  },
  {
    slug: "exosome-characterization",
    category: "Exosome Science",
    title: "Exosome Characterization",
    excerpt: "The parameter families that together describe an exosome preparation.",
  },
  {
    slug: "nta-explained",
    category: "Exosome Science",
    title: "NTA Explained",
    excerpt: "What nanoparticle tracking analysis measures and how the output should be read.",
  },
  {
    slug: "tem-vs-cryo-tem",
    category: "Exosome Science",
    title: "TEM vs Cryo-TEM",
    excerpt: "Two morphology methods, two kinds of evidence about vesicle structure.",
  },
  {
    slug: "lyophilized-vs-frozen-exosomes",
    category: "Exosome Science",
    title: "Lyophilized vs Frozen Exosomes",
    excerpt: "How the chosen format changes handling, shipping and shelf behaviour.",
  },
  {
    slug: "exosome-stability",
    category: "Exosome Science",
    title: "Exosome Stability",
    excerpt: "The variables that determine how a preparation behaves over its stated shelf life.",
  },
  {
    slug: "exosome-quality-control",
    category: "Exosome Science",
    title: "Exosome Quality Control",
    excerpt: "The control points applied from source material through batch release.",
  },
  {
    slug: "what-is-pdrn",
    category: "PDRN / PN",
    title: "What Is PDRN?",
    excerpt: "Polydeoxyribonucleotide as a material: origin, handling and formulation relevance.",
  },
  {
    slug: "pdrn-vs-pn",
    category: "PDRN / PN",
    title: "PDRN vs PN",
    excerpt: "Two related polynucleotide materials and what separates them in practice.",
  },
  {
    slug: "how-pdrn-is-purified",
    category: "PDRN / PN",
    title: "How PDRN Is Purified",
    excerpt: "The purification logic behind a polynucleotide raw material.",
  },
  {
    slug: "pdrn-in-regenerative-medicine",
    category: "PDRN / PN",
    title: "PDRN in Regenerative Medicine",
    excerpt: "How polynucleotide platforms are positioned in regenerative applications.",
  },
  {
    slug: "pdrn-vs-exosomes",
    category: "PDRN / PN",
    title: "PDRN vs Exosomes",
    excerpt: "Two different biological platforms, two different development pathways.",
  },
  {
    slug: "understanding-molecular-weight",
    category: "PDRN / PN",
    title: "Understanding Molecular Weight",
    excerpt: "Why molecular weight distribution is a formulation-defining parameter.",
  },
  {
    slug: "stability-and-formulation",
    category: "PDRN / PN",
    title: "Stability & Formulation",
    excerpt: "Buffer, concentration and packaging decisions that protect molecular integrity.",
  },
  {
    slug: "what-is-oem-vs-odm",
    category: "Manufacturing",
    title: "What Is OEM vs ODM?",
    excerpt: "The practical difference between manufacturing to a formula and developing one.",
  },
  {
    slug: "how-a-skin-booster-is-manufactured",
    category: "Manufacturing",
    title: "How a Skin Booster Is Manufactured",
    excerpt: "From compounding to filling: the sequence behind a finished aesthetic format.",
  },
  {
    slug: "from-randd-to-mass-production",
    category: "Manufacturing",
    title: "From R&D to Mass Production",
    excerpt: "What has to be true in the laboratory before scale-up is realistic.",
  },
  {
    slug: "why-cleanrooms-matter",
    category: "Manufacturing",
    title: "Why Cleanrooms Matter",
    excerpt: "Environmental control as a product attribute, not a building feature.",
  },
  {
    slug: "pharmaceutical-grade-manufacturing",
    category: "Manufacturing",
    title: "Pharmaceutical-Grade Manufacturing",
    excerpt: "What partners actually mean when they ask for pharmaceutical discipline.",
  },
  {
    slug: "batch-to-batch-consistency",
    category: "Manufacturing",
    title: "Batch-to-Batch Consistency",
    excerpt: "The systems that make the tenth batch behave like the first.",
  },
  {
    slug: "quality-control-in-biotech-manufacturing",
    category: "Manufacturing",
    title: "Quality Control in Biotech Manufacturing",
    excerpt: "Where testing sits in the production flow and what each stage protects.",
  },
  {
    slug: "why-korea-is-leading-aesthetic-biotechnology",
    category: "Korean Biotechnology",
    title: "Why Korea Is Leading Aesthetic Biotechnology",
    excerpt: "Research density, manufacturing discipline and export orientation.",
  },
  {
    slug: "korean-regenerative-medicine",
    category: "Korean Biotechnology",
    title: "Korean Regenerative Medicine",
    excerpt: "How the regenerative sector developed alongside aesthetic manufacturing.",
  },
  {
    slug: "k-beauty-to-k-biotech",
    category: "Korean Biotechnology",
    title: "K-Beauty to K-Biotech",
    excerpt: "The shift from cosmetic formulation to biological platforms.",
  },
  {
    slug: "korean-manufacturing-standards",
    category: "Korean Biotechnology",
    title: "Korean Manufacturing Standards",
    excerpt: "How Korean manufacturers structure documentation and process control.",
  },
  {
    slug: "the-future-of-korean-aesthetic-biotechnology",
    category: "Korean Biotechnology",
    title: "The Future of Korean Aesthetic Biotechnology",
    excerpt: "Where the next generation of platforms is likely to come from.",
  },
  {
    slug: "understanding-product-documentation",
    category: "Regulatory",
    title: "Understanding Product Documentation",
    excerpt: "The document set that accompanies a B2B biotechnology product.",
  },
  {
    slug: "coa-vs-tds-vs-sds",
    category: "Regulatory",
    title: "COA vs TDS vs SDS",
    excerpt: "Three documents, three purposes, frequently confused.",
  },
  {
    slug: "regulatory-considerations-for-global-markets",
    category: "Regulatory",
    title: "Regulatory Considerations for Global Markets",
    excerpt: "How destination market requirements shape development decisions.",
  },
  {
    slug: "export-documentation",
    category: "Regulatory",
    title: "Export Documentation",
    excerpt: "The paperwork layer behind an international shipment.",
  },
  {
    slug: "cold-chain-requirements",
    category: "Regulatory",
    title: "Cold Chain Requirements",
    excerpt: "Temperature control as a documented, verifiable process.",
  },
  {
    slug: "future-of-exosome-based-products",
    category: "Industry Insights",
    title: "Future of Exosome-Based Products",
    excerpt: "Where exosome formats are heading in aesthetic and regenerative markets.",
  },
  {
    slug: "regenerative-aesthetics",
    category: "Industry Insights",
    title: "Regenerative Aesthetics",
    excerpt: "The convergence of regenerative science and aesthetic practice.",
  },
  {
    slug: "pdrn-market",
    category: "Industry Insights",
    title: "PDRN Market",
    excerpt: "How polynucleotide products became a category of their own.",
  },
  {
    slug: "next-generation-skin-boosters",
    category: "Industry Insights",
    title: "Next Generation Skin Boosters",
    excerpt: "What differentiates a next-generation booster from a legacy formulation.",
  },
  {
    slug: "cellular-and-extracellular-vesicle-technologies",
    category: "Industry Insights",
    title: "Cellular & Extracellular Vesicle Technologies",
    excerpt: "A wider view of the vesicle technology landscape.",
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
