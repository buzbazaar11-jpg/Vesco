import { Reveal } from "@/components/site/primitives";

// ─── SVG icons for each product platform ─────────────────────────────────────
function ExosomeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="#3B82C4" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="24" cy="24" r="14" stroke="#3B82C4" strokeWidth="1.5" opacity="0.5" />
      <circle cx="24" cy="24" r="6" fill="#3B82C4" opacity="0.2" />
      <circle cx="24" cy="24" r="3" fill="#3B82C4" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = 18;
        const x = 24 + r * Math.cos((deg * Math.PI) / 180);
        const y = 24 + r * Math.sin((deg * Math.PI) / 180);
        return <circle key={deg} cx={x} cy={y} r="2.5" fill="#3B82C4" opacity="0.7" />;
      })}
    </svg>
  );
}

function HAIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="#5BA4CF" strokeWidth="1.5" opacity="0.4" />
      <path d="M16 24 C16 18 20 14 24 14 C28 14 32 18 32 24 C32 30 28 34 24 34 C20 34 16 30 16 24Z" stroke="#5BA4CF" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="4" fill="#5BA4CF" opacity="0.3" />
      <circle cx="24" cy="24" r="2" fill="#5BA4CF" />
      <circle cx="16" cy="24" r="2.5" fill="#5BA4CF" opacity="0.6" />
      <circle cx="32" cy="24" r="2.5" fill="#5BA4CF" opacity="0.6" />
    </svg>
  );
}

function PeptideIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <circle cx="12" cy="24" r="4" fill="#2D7DD2" opacity="0.8" />
      <circle cx="24" cy="14" r="4" fill="#2D7DD2" opacity="0.8" />
      <circle cx="36" cy="24" r="4" fill="#2D7DD2" opacity="0.8" />
      <circle cx="24" cy="34" r="4" fill="#2D7DD2" opacity="0.8" />
      <line x1="12" y1="24" x2="24" y2="14" stroke="#2D7DD2" strokeWidth="1.5" opacity="0.5" />
      <line x1="24" y1="14" x2="36" y2="24" stroke="#2D7DD2" strokeWidth="1.5" opacity="0.5" />
      <line x1="36" y1="24" x2="24" y2="34" stroke="#2D7DD2" strokeWidth="1.5" opacity="0.5" />
      <line x1="24" y1="34" x2="12" y2="24" stroke="#2D7DD2" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function PDRNIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      {/* DNA double helix simplified */}
      <path d="M18 8 C22 14 26 14 30 20 C26 26 22 26 18 32 C22 38 26 38 30 40" stroke="#1A6EA8" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M30 8 C26 14 22 14 18 20 C22 26 26 26 30 32 C26 38 22 38 18 40" stroke="#1A6EA8" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="18" y1="20" x2="30" y2="20" stroke="#1A6EA8" strokeWidth="1.5" opacity="0.6" />
      <line x1="18" y1="28" x2="30" y2="28" stroke="#1A6EA8" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

function RegenerativeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="#2196A6" strokeWidth="1.5" opacity="0.3" />
      <path d="M24 10 L28 18 L36 18 L30 23 L32 32 L24 27 L16 32 L18 23 L12 18 L20 18 Z" fill="#2196A6" opacity="0.25" stroke="#2196A6" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="5" fill="#2196A6" opacity="0.5" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="#94A3B8" strokeWidth="1.5" opacity="0.4" />
      <circle cx="14" cy="24" r="3" fill="#64748B" />
      <circle cx="24" cy="24" r="3" fill="#64748B" />
      <circle cx="34" cy="24" r="3" fill="#64748B" />
    </svg>
  );
}

// ─── World-map dot background (simplified SVG) ────────────────────────────────
function WorldMapDots() {
  // Lightweight dot-grid that suggests a world map
  const dots: { x: number; y: number; r?: number }[] = [
    // North America
    { x: 12, y: 22 }, { x: 15, y: 19 }, { x: 18, y: 20 }, { x: 20, y: 23 }, { x: 16, y: 25 },
    { x: 22, y: 21 }, { x: 14, y: 28 }, { x: 17, y: 30 },
    // South America
    { x: 22, y: 35 }, { x: 24, y: 38 }, { x: 23, y: 42 }, { x: 21, y: 40 },
    // Europe
    { x: 46, y: 18 }, { x: 48, y: 20 }, { x: 50, y: 18 }, { x: 52, y: 19 }, { x: 49, y: 22 },
    { x: 45, y: 21 }, { x: 53, y: 21 },
    // Africa
    { x: 48, y: 28 }, { x: 50, y: 32 }, { x: 49, y: 36 }, { x: 47, y: 30 }, { x: 51, y: 28 },
    // Asia
    { x: 62, y: 18 }, { x: 65, y: 20 }, { x: 68, y: 19 }, { x: 70, y: 22 }, { x: 72, y: 20 },
    { x: 75, y: 22 }, { x: 78, y: 24 }, { x: 74, y: 18 }, { x: 67, y: 24 }, { x: 60, y: 22 },
    { x: 64, y: 26 }, { x: 71, y: 26 },
    // Korea highlight
    { x: 76, y: 24, r: 2.5 },
    // Australia
    { x: 74, y: 38 }, { x: 77, y: 36 }, { x: 79, y: 38 }, { x: 76, y: 40 },
    // More Asia
    { x: 58, y: 25 }, { x: 56, y: 22 }, { x: 63, y: 22 },
    // Southeast Asia
    { x: 70, y: 30 }, { x: 72, y: 32 }, { x: 74, y: 30 },
  ];

  return (
    <svg
      viewBox="0 0 100 55"
      className="absolute inset-0 h-full w-full opacity-[0.12]"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r ?? 1}
          fill="#1A4D8C"
        />
      ))}
      {/* Connection lines from Korea to other regions */}
      <line x1="76" y1="24" x2="50" y2="20" stroke="#2196A6" strokeWidth="0.3" opacity="0.5" />
      <line x1="76" y1="24" x2="18" y2="22" stroke="#2196A6" strokeWidth="0.3" opacity="0.4" />
      <line x1="76" y1="24" x2="48" y2="28" stroke="#2196A6" strokeWidth="0.3" opacity="0.3" />
    </svg>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export function GlobalPartnershipSection() {
  const platforms = [
    { label: "Exosomes", icon: <ExosomeIcon /> },
    { label: "HA & Fillers", icon: <HAIcon /> },
    { label: "Peptides", icon: <PeptideIcon /> },
    { label: "PDRN / PN", icon: <PDRNIcon /> },
    { label: "Regenerative Solutions", icon: <RegenerativeIcon /> },
    { label: "And More", icon: <MoreIcon /> },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F0F6FF] py-20 md:py-28">
      {/* World map dot background */}
      <WorldMapDots />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 md:px-10">

        {/* ── Top: eyebrow + main heading ─────────────────────────────── */}
        <Reveal>
          <div className="text-center">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-teal">
              Global Partnership
            </p>
            {/* Teal underline */}
            <div className="mx-auto mt-2 h-[2px] w-12 bg-teal" />

            {/* PDF: "Vesco Science × EverCeutical" — large heading */}
            <h2 className="mt-6 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-tight text-navy">
              Vesco Science{" "}
              <span className="text-navy">×</span>{" "}
              <span className="text-navy">EverCeutical</span>
            </h2>

            {/* PDF: "STRATEGIC GLOBAL PARTNERSHIP" subtitle */}
            <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-navy/50">
              Strategic Global Partnership
            </p>

            {/* PDF body copy */}
            <p className="mx-auto mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-navy/65">
              EverCeutical has been granted worldwide marketing rights for selected
              Vesco Science products, including exosomes, fillers and peptide-based solutions.
            </p>
          </div>
        </Reveal>

        {/* Korea badge — top-right */}
        <div className="pointer-events-none absolute top-0 right-6 hidden lg:block md:right-10">
          <Reveal delay={200}>
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white shadow-md text-2xl">
                🇰🇷
              </div>
              <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.12em] text-navy/60">
                Korea
              </p>
              <p className="text-center text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-teal">
                Origin of Innovation
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── Middle: Two-logo panel ───────────────────────────────────── */}
        <Reveal delay={100}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[#CBD9EC] bg-[#CBD9EC] sm:grid-cols-[1fr_auto_1fr]">

            {/* Vesco Science side */}
            <div className="flex flex-col justify-center gap-4 bg-white px-8 py-8">
              <div className="flex items-center gap-3">
                {/* Vesco molecule icon mark */}
                <svg viewBox="0 0 36 36" className="h-9 w-9 flex-shrink-0" fill="none" aria-hidden="true">
                  <circle cx="18" cy="6" r="4" fill="#1A3C6E" />
                  <circle cx="6" cy="26" r="4" fill="#1A3C6E" />
                  <circle cx="30" cy="26" r="4" fill="#1A3C6E" />
                  <line x1="18" y1="10" x2="6" y2="22" stroke="#1A3C6E" strokeWidth="2" />
                  <line x1="18" y1="10" x2="30" y2="22" stroke="#1A3C6E" strokeWidth="2" />
                  <line x1="6" y1="26" x2="30" y2="26" stroke="#1A3C6E" strokeWidth="2" />
                </svg>
                <div>
                  <p className="text-[1.15rem] font-extrabold uppercase tracking-[0.14em] text-navy">
                    Vesco Science
                  </p>
                  <div className="mt-0.5 h-[2px] w-10 bg-teal" />
                </div>
              </div>
              <p className="text-[0.82rem] text-navy/55">
                R&amp;D &nbsp;•&nbsp; Technology &nbsp;•&nbsp; Manufacturing
              </p>
            </div>

            {/* × divider */}
            <div className="flex items-center justify-center bg-white px-6 py-6">
              <span className="text-[2rem] font-bold text-navy/30">×</span>
            </div>

            {/* EverCeutical side */}
            <div className="flex flex-col justify-center gap-4 bg-white px-8 py-8">
              <div className="flex items-center gap-3">
                {/* EverCeutical stylised icon */}
                <svg viewBox="0 0 36 36" className="h-9 w-9 flex-shrink-0" fill="none" aria-hidden="true">
                  <circle cx="18" cy="18" r="16" stroke="#4A90C4" strokeWidth="2" />
                  <circle cx="18" cy="18" r="9" stroke="#4A90C4" strokeWidth="1.5" opacity="0.5" />
                  <path d="M12 18 C12 14 15 11 18 11 C21 11 24 14 24 18 C24 22 21 25 18 25 C15 25 12 22 12 18Z" stroke="#4A90C4" strokeWidth="1.5" fill="#4A90C4" fillOpacity="0.1" />
                </svg>
                <div>
                  <p className="text-[1.15rem] font-extrabold tracking-tight">
                    <span className="text-navy">Ever</span>
                    <span className="text-teal">Ceutical</span>
                  </p>
                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-navy/40">
                    True to Science
                  </p>
                  <div className="mt-0.5 h-[2px] w-10 bg-teal" />
                </div>
              </div>
              <p className="text-[0.82rem] text-navy/55">
                Global Marketing &nbsp;•&nbsp; Commercialization &nbsp;•&nbsp; Market Expansion
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Product Platforms panel ──────────────────────────────────── */}
        <Reveal delay={160}>
          <div className="mt-6 rounded-sm border border-[#CBD9EC] bg-white p-6 md:p-8">
            {/* Section header */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#CBD9EC]" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-teal">
                Selected Product Platforms
              </p>
              <div className="h-px flex-1 bg-[#CBD9EC]" />
            </div>

            {/* 6-icon grid */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              {platforms.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF4FF]">
                    {p.icon}
                  </div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-navy">
                    {p.label}
                  </p>
                  {/* Teal underline accent */}
                  <div className="h-[2px] w-5 bg-teal/60" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── EverCeutical link ────────────────────────────────────────── */}
        <Reveal delay={220}>
          <div className="mt-6 flex justify-center">
            <a
              href="https://everceutical.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-sm border border-[#CBD9EC] bg-white px-6 py-4 text-[0.85rem] text-navy transition-colors hover:border-teal hover:text-teal"
            >
              {/* Globe icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
              </svg>
              <span>
                <span className="font-semibold">Learn more about EverCeutical</span>
                <br />
                <span className="text-[0.75rem] text-navy/50">everceutical.com</span>
              </span>
              {/* External link icon */}
              <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4 text-navy/40" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
