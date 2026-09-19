
import type { ReactNode } from "react";
import { Reveal } from "@/components/site/primitives";

type Platform = {
  label: string;
  icon: ReactNode;
};

// ─── Product Platform Icons ───────────────────────────────────────

function ExosomeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#E8F1FF" stroke="#B8D8F4" />
      <circle cx="24" cy="24" r="14" fill="#B9C8FF" opacity="0.65" />
      <circle cx="24" cy="24" r="7" fill="#4C55D8" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 24 + 18 * Math.cos(angle);
        const y = 24 + 18 * Math.sin(angle);

        return (
          <circle key={i} cx={x} cy={y} r="1.8" fill="#4C55D8" />
        );
      })}
    </svg>
  );
}

function HAIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#E9F4FF" />
      <circle cx="24" cy="24" r="12" stroke="#9EC8ED" strokeWidth="2" />
      <circle cx="24" cy="24" r="6" fill="#B4D9F6" />
      <circle cx="12" cy="15" r="4" stroke="#7FAED8" strokeWidth="1.5" />
      <circle cx="37" cy="14" r="4" stroke="#7FAED8" strokeWidth="1.5" />
      <circle cx="12" cy="34" r="4" stroke="#7FAED8" strokeWidth="1.5" />
      <circle cx="37" cy="34" r="4" stroke="#7FAED8" strokeWidth="1.5" />
    </svg>
  );
}

function PeptideIcon() {
  const nodes: Array<[number, number]> = [
    [10, 30],
    [18, 16],
    [29, 20],
    [38, 11],
    [27, 33],
    [38, 28],
  ];

  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#E8F3FC" />

      <g stroke="#358AB8" strokeWidth="1.8">
        <path d="M10 30 L18 16 L29 20 L38 11" />
        <path d="M18 16 L27 33 L38 28" />
        <path d="M10 30 L27 33" />
      </g>

      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#3186B5" />
      ))}
    </svg>
  );
}

function PDRNIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#DDF2F5" />

      <path
        d="M15 8 C35 14 13 24 33 30 C40 34 27 39 24 40"
        stroke="#2498B0"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M33 8 C13 14 35 24 15 30 C8 34 21 39 24 40"
        stroke="#2498B0"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {[12, 20, 28, 36].map((y) => (
        <line
          key={y}
          x1="17"
          y1={y}
          x2="31"
          y2={y}
          stroke="#2498B0"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

function RegenerativeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#EAF3FC" />
      <circle cx="24" cy="24" r="11" stroke="#91BCE7" strokeWidth="1.5" />

      <path
        d="M24 10 L28 18 L37 18 L30 24 L33 33 L24 28 L15 33 L18 24 L11 18 L20 18 Z"
        fill="#BCD7F5"
        stroke="#679BD2"
        strokeWidth="1.2"
      />

      <circle cx="24" cy="24" r="4" fill="#6598D4" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-14 w-14" aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#EAF1F9" />
      <circle cx="16" cy="24" r="3" fill="#168CB6" />
      <circle cx="24" cy="24" r="3" fill="#168CB6" />
      <circle cx="32" cy="24" r="3" fill="#168CB6" />
    </svg>
  );
}

// ─── World Map Background ─────────────────────────────────────────

function WorldMapDots() {
  const dots: Array<[number, number]> = [];

  for (let x = 5; x <= 95; x += 3.5) {
    for (let y = 5; y <= 48; y += 3.5) {
      const region =
        (x > 5 && x < 27 && y > 10 && y < 27) ||
        (x > 19 && x < 31 && y > 29 && y < 47) ||
        (x > 37 && x < 61 && y > 8 && y < 22) ||
        (x > 40 && x < 57 && y > 20 && y < 39) ||
        (x > 57 && x < 92 && y > 7 && y < 29) ||
        (x > 69 && x < 87 && y > 27 && y < 40);

      if (region) {
        dots.push([x, y]);
      }
    }
  }

  return (
    <svg
      viewBox="0 0 100 55"
      className="pointer-events-none absolute right-0 top-0 h-[260px] w-[75%] opacity-40 sm:h-[380px] sm:w-[60%] lg:h-[440px]"
      aria-hidden="true"
    >
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.55" fill="#75A8D7" />
      ))}

      <g stroke="#2A9FE4" strokeWidth="0.18" fill="none" opacity="0.8">
        <path d="M77 23 Q60 3 44 17" />
        <path d="M77 23 Q52 20 25 17" />
        <path d="M77 23 Q62 35 46 41" />
        <path d="M77 23 Q84 32 84 44" />
        <path d="M77 23 Q92 16 98 9" />
      </g>

      <circle cx="77" cy="23" r="1.1" fill="#1A94E1" />
    </svg>
  );
}

// ─── Korea Badge ──────────────────────────────────────────────────

function KoreaBadge() {
  return (
    <div className="absolute right-4 top-5 z-10 hidden text-center sm:right-8 sm:top-8 lg:block">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D6E0E9] bg-white text-3xl shadow-sm">
        🇰🇷
      </div>

      <p className="mt-3 text-lg font-bold text-[#152B60]">KOREA</p>

      <p className="text-xs font-medium leading-relaxed text-[#152B60]">
        ORIGIN OF
        <br />
        INNOVATION
      </p>
    </div>
  );
}

// ─── Brand Logo Components ────────────────────────────────────────

function VescoLogo() {
  return (
    <div className="relative flex min-h-[150px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#DCE7F3] bg-white/75 p-5 text-center shadow-sm backdrop-blur-sm sm:p-7">
      <img
        src="/images/vesco-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-25px] top-1/2 h-44 w-44 -translate-y-1/2 object-contain opacity-[0.055]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/images/vesco-logo.png"
          alt="Vesco Science"
          className="h-auto max-h-16 w-auto max-w-full object-contain"
        />

        <div className="mt-5 h-0.5 w-20 bg-[#1CA4D5]" />
      </div>
    </div>
  );
}

function EverCeuticalLogo() {
  return (
    <div className="relative flex min-h-[150px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#DCE7F3] bg-white/75 p-5 text-center shadow-sm backdrop-blur-sm sm:p-7">
      <img
        src="/images/everceutical-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-25px] top-1/2 h-44 w-44 -translate-y-1/2 object-contain opacity-[0.055]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/images/everceutical-logo.png"
          alt="EverCeutical"
          className="h-auto max-h-16 w-auto max-w-full object-contain"
        />

        <p className="mt-3 text-[10px] font-semibold tracking-[0.3em] text-[#1595B8] sm:text-xs">
          TRUE TO SCIENCE
        </p>
      </div>
    </div>
  );
}

// ─── Partnership Section ──────────────────────────────────────────

export function GlobalPartnershipSection() {
  const platforms: Platform[] = [
    { label: "EXOSOMES", icon: <ExosomeIcon /> },
    { label: "HA & FILLERS", icon: <HAIcon /> },
    { label: "PEPTIDES", icon: <PeptideIcon /> },
    { label: "PDRN / PN", icon: <PDRNIcon /> },
    {
      label: "REGENERATIVE SOLUTIONS",
      icon: <RegenerativeIcon />,
    },
    { label: "AND MORE", icon: <MoreIcon /> },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#F5F9FD] py-14 sm:py-20 md:py-24 lg:py-28">
      {/* Background Image */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage: "url('/images/science-bg.jpg')",
        }}
      />

      {/* Readability Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/90 to-[#F2F8FF]/95" />

      {/* Decorative Map */}
      <WorldMapDots />

      {/* Korea */}
      <KoreaBadge />

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-12">
        {/* ─── Header ─────────────────────────────────────────── */}

        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1489B1] sm:text-sm md:text-base">
              GLOBAL PARTNERSHIP
            </p>

            <div className="mx-auto mt-4 h-0.5 w-24 bg-[#20A8D5] sm:mt-5 sm:w-28" />

            <h2 className="mx-auto mt-5 max-w-5xl text-3xl font-bold leading-tight tracking-tight text-[#12285C] sm:text-4xl md:text-5xl lg:text-6xl">
              Vesco Science{" "}
              <span className="font-normal text-[#159BDE]">×</span>{" "}
              EverCeutical
            </h2>

            <p className="mt-5 text-[10px] font-medium tracking-[0.24em] text-[#142956] sm:text-xs md:text-base md:tracking-[0.32em]">
              STRATEGIC GLOBAL PARTNERSHIP
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-[#172A50] sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
              EverCeutical has been granted worldwide marketing rights for
              selected Vesco Science products, including exosomes, fillers
              and peptide-based solutions.
            </p>
          </div>
        </Reveal>

        {/* ─── Partnership Logos ──────────────────────────────── */}

        <Reveal>
          <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 items-center gap-5 sm:mt-14 md:grid-cols-[1fr_auto_1fr] md:gap-5 lg:gap-8">
            {/* Vesco */}
            <div className="flex min-w-0 flex-col">
              <VescoLogo />

              <p className="mt-4 text-center text-xs leading-6 text-[#162B50] sm:text-sm sm:leading-7 md:text-left">
                R&D
                <span className="mx-2 text-[#159FE1]">•</span>
                Technology
                <span className="mx-2 text-[#159FE1]">•</span>
                Manufacturing
              </p>
            </div>

            {/* Center Symbol */}
            <div className="flex items-center justify-center py-1 md:py-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE7F3] bg-white text-3xl font-light text-[#1D426C] shadow-sm sm:h-14 sm:w-14 sm:text-4xl md:h-16 md:w-16">
                ×
              </div>
            </div>

            {/* EverCeutical */}
            <div className="flex min-w-0 flex-col">
              <EverCeuticalLogo />

              <p className="mt-4 text-center text-xs leading-6 text-[#162B50] sm:text-sm sm:leading-7 md:text-left">
                Global Marketing
                <span className="mx-2 text-[#159FE1]">•</span>
                Commercialization
                <span className="mx-2 text-[#159FE1]">•</span>
                Market Expansion
              </p>
            </div>
          </div>
        </Reveal>

        {/* ─── Product Platforms ──────────────────────────────── */}

        <Reveal>
          <div className="mt-12 rounded-2xl border border-[#DCE7F3] bg-white/80 px-3 py-7 shadow-[0_10px_35px_rgba(47,91,140,0.07)] backdrop-blur-sm sm:mt-14 sm:px-6 sm:py-8 md:px-8 lg:px-10">
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <div className="hidden h-px w-16 bg-[#9EDCEB] xs:block sm:block sm:w-24" />

              <h3 className="text-center text-xs font-bold tracking-[0.06em] text-[#1789AC] sm:text-sm md:text-base lg:text-lg">
                SELECTED PRODUCT PLATFORMS
              </h3>

              <div className="hidden h-px w-16 bg-[#9EDCEB] sm:block sm:w-24" />
            </div>

            <div className="mt-7 grid grid-cols-2 divide-x divide-y divide-[#DCE7F3] sm:mt-9 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
              {platforms.map((platform) => (
                <div
                  key={platform.label}
                  className="flex min-h-[160px] flex-col items-center justify-center px-2 py-6 text-center sm:min-h-[175px] sm:px-3"
                >
                  <div>{platform.icon}</div>

                  <p className="mt-4 text-[10px] font-bold leading-5 text-[#142653] sm:mt-5 sm:text-xs md:text-sm">
                    {platform.label}
                  </p>

                  <div className="mt-3 h-0.5 w-9 bg-[#1BA5D2] sm:mt-4" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── CTA ────────────────────────────────────────────── */}

        <Reveal>
          <a
            href="https://www.everceutical.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 flex w-full max-w-[610px] items-center justify-between gap-3 rounded-xl border border-[#159DC8] bg-white px-4 py-4 transition-colors duration-300 hover:bg-[#F2FAFE] sm:mt-9 sm:gap-4 sm:px-7 sm:py-5"
          >
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <svg
                viewBox="0 0 48 48"
                className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#1499B8"
                  strokeWidth="2"
                />

                <path
                  d="M4 24 H44 M24 4 V44 M10 10 Q24 24 10 38 M38 10 Q24 24 38 38"
                  stroke="#1499B8"
                  strokeWidth="1.5"
                />
              </svg>

              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#162A52] sm:text-base">
                  Learn more about EverCeutical
                </p>

                <p className="mt-1 text-xs text-[#079CC9] sm:text-base">
                  everceutical.com
                </p>
              </div>
            </div>

            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 text-[#159DC8] sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M14 3 H21 V10" />
              <path d="M10 14 L21 3" />
              <path d="M21 14 V21 H3 V3 H10" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}