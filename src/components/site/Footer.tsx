import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useSiteSettings } from "@/lib/siteSettings";

const COLUMNS = [
  {
    titleKey: "footer.company",
    linksKey: "footer.companyLinks",
    to: ["/about", "/research", "/facility", "/quality", "/about/network"],
  },
  {
    titleKey: "footer.technology",
    linksKey: "footer.technologyLinks",
    to: [
      "/technology/exosome",
      "/technology/pdrn-pn",
      "/technology/lyophilization",
      "/technology/formulation",
    ],
  },
  {
    titleKey: "footer.business",
    linksKey: "footer.businessLinks",
    to: ["/oem", "/oem", "/custom-development", "/about/network"],
  },
  {
    titleKey: "footer.resources",
    linksKey: "footer.resourcesLinks",
    to: ["/insights", "/research", "/resources", "/faq"],
  },
] as const;

// Social platform config — icon + label.
// Each entry is hidden automatically when the URL is empty.
type SocialKey = "linkedin" | "instagram" | "youtube" | "facebook" | "twitter" | "kakao";

const SOCIAL_PLATFORMS: { key: SocialKey; label: string; icon: string }[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  },
  {
    key: "twitter",
    label: "X / Twitter",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  },
  {
    key: "kakao",
    label: "KakaoTalk",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.736 1.706 5.132 4.29 6.615-.162.594-.578 2.138-.662 2.471-.102.412.151.406.317.296.13-.088 2.073-1.404 2.908-1.97.36.05.729.078 1.107.078 5.523 0 10-3.477 10-7.8C22 6.477 17.523 3 12 3z"/></svg>`,
  },
];

export function Footer() {
  const { t, tx } = useI18n();
  const { data: settings } = useSiteSettings();

  // Use settings if available, else fall back to i18n values
  const address = settings?.address || t("footer.addressValue");
  const email   = settings?.email   || t("footer.emailValue");
  const phone   = settings?.phone   || "";
  const tagline = settings?.tagline || t("meta.tagline");
  const logoUrl = settings?.logoUrl ?? "";

  const coName = settings?.companyName || t("meta.company");
  const [firstWord, ...rest] = coName.split(" ");
  const secondPart = rest.join(" ");

  return (
    <footer className="relative bg-navy-deep text-white">
      <div className="absolute inset-0 navy-grid opacity-50" />
      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_2.6fr]">

          {/* Left column: brand + contact */}
          <div>
            {/* Logo / brand */}
            <Link to="/" className="inline-flex items-center gap-2.5">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={coName}
                  className="h-9 w-auto max-w-[160px] object-contain brightness-0 invert"
                  loading="lazy"
                />
              ) : (
                <>
                  <span className="font-display text-[1.05rem] font-bold tracking-[0.18em] uppercase">
                    {firstWord}
                  </span>
                  {secondPart && (
                    <span className="font-display text-[1.05rem] font-light tracking-[0.18em] text-teal uppercase">
                      {" "}{secondPart}
                    </span>
                  )}
                </>
              )}
            </Link>

            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-white/55">
              {tagline}
            </p>

            {/* Contact DL */}
            <dl className="mt-8 space-y-3 text-[0.85rem]">
              {address && (
                <div>
                  <dt className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-teal">
                    {t("footer.address")}
                  </dt>
                  <dd className="mt-1 text-white/65">{address}</dd>
                </div>
              )}
              {email && (
                <div>
                  <dt className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-teal">
                    {t("footer.email")}
                  </dt>
                  <dd className="mt-1 text-white/65">
                    <a href={`mailto:${email}`} className="hover:text-teal transition-colors">
                      {email}
                    </a>
                  </dd>
                </div>
              )}
              {phone && (
                <div>
                  <dt className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-teal">
                    Phone
                  </dt>
                  <dd className="mt-1 text-white/65">
                    <a href={`tel:${phone}`} className="hover:text-teal transition-colors">
                      {phone}
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            {/* Social icons — only rendered when URL is set */}
            {(() => {
              const activeSocials = SOCIAL_PLATFORMS.filter(
                (p) => settings && settings[p.key] && settings[p.key].trim() !== "",
              );
              if (activeSocials.length === 0) return null;
              return (
                <div className="mt-8 flex flex-wrap gap-3">
                  {activeSocials.map((p) => (
                    <a
                      key={p.key}
                      href={settings![p.key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={p.label}
                      className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 text-white/60 transition-all hover:border-teal hover:text-teal"
                    >
                      <span
                        className="block h-4 w-4"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: p.icon }}
                      />
                    </a>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Right columns: nav links */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COLUMNS.map((col) => {
              const labels = tx<readonly string[]>(col.linksKey);
              return (
                <div key={col.titleKey}>
                  <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-white/45">
                    {t(col.titleKey)}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {labels.map((label, i) => (
                      <li key={label}>
                        <Link
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          to={(col.to[i] ?? "/") as any}
                          className="text-[0.88rem] text-white/70 transition-colors hover:text-teal"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-[0.78rem] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {coName} {t("footer.rights")}
          </p>
          <p>{t("footer.demo")}</p>
        </div>
      </div>
    </footer>
  );
}
