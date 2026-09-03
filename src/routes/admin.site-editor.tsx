import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/site-editor")({
  component: SiteEditorPage,
});

// ─── Site pages that can be content-edited ─────────────────────────────────

const EDITABLE_PAGES = [
  {
    key: "page_home",
    label: "Home",
    path: "/",
    sections: [
      { key: "hero", label: "Hero Section", fields: [
        { key: "eyebrow", label: "Eyebrow Text", type: "text" },
        { key: "title", label: "Main Heading", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "text" },
        { key: "body", label: "Body Text", type: "textarea" },
        { key: "ctaPrimary", label: "Primary CTA Label", type: "text" },
        { key: "ctaSecondary", label: "Secondary CTA Label", type: "text" },
      ]},
      { key: "cta", label: "CTA Band", fields: [
        { key: "title", label: "CTA Heading", type: "text" },
        { key: "body", label: "CTA Body", type: "textarea" },
        { key: "primary", label: "Primary Button", type: "text" },
        { key: "secondary", label: "Secondary Button", type: "text" },
      ]},
    ],
  },
  {
    key: "page_about",
    label: "About",
    path: "/about",
    sections: [
      { key: "hero", label: "Hero Section", fields: [
        { key: "eyebrow", label: "Eyebrow", type: "text" },
        { key: "title", label: "Title", type: "text" },
        { key: "lead", label: "Lead Text", type: "textarea" },
      ]},
      { key: "story", label: "Our Story", fields: [
        { key: "eyebrow", label: "Eyebrow", type: "text" },
        { key: "title", label: "Title", type: "text" },
        { key: "body1", label: "Paragraph 1", type: "textarea" },
        { key: "body2", label: "Paragraph 2", type: "textarea" },
      ]},
    ],
  },
  {
    key: "page_contact",
    label: "Contact",
    path: "/contact",
    sections: [
      { key: "main", label: "Contact Info", fields: [
        { key: "eyebrow", label: "Eyebrow", type: "text" },
        { key: "title", label: "Heading", type: "text" },
        { key: "intro", label: "Intro", type: "textarea" },
        { key: "infoEmailValue", label: "Email Address", type: "text" },
        { key: "infoAddressValue", label: "Address", type: "text" },
        { key: "infoHoursValue", label: "Business Hours", type: "text" },
      ]},
    ],
  },
  {
    key: "page_oem",
    label: "OEM / ODM",
    path: "/oem",
    sections: [
      { key: "hero", label: "Hero Section", fields: [
        { key: "eyebrow", label: "Eyebrow", type: "text" },
        { key: "title", label: "Heading", type: "text" },
        { key: "subtitle", label: "Subtitle", type: "textarea" },
      ]},
    ],
  },
  {
    key: "page_footer",
    label: "Footer & Header",
    path: "global",
    sections: [
      { key: "contact", label: "Footer Contact Info", fields: [
        { key: "address", label: "Address", type: "text" },
        { key: "email", label: "Email", type: "text" },
        { key: "phone", label: "Phone", type: "text" },
        { key: "kakao", label: "KakaoTalk", type: "text" },
        { key: "linkedin", label: "LinkedIn", type: "text" },
        { key: "instagram", label: "Instagram", type: "text" },
        { key: "youtube", label: "YouTube", type: "text" },
      ]},
    ],
  },
] as const;

type PageConfig = typeof EDITABLE_PAGES[number];
type SectionConfig = PageConfig["sections"][number];
type FieldType = "text" | "textarea";

// ─── Component ───────────────────────────────────────────────────────────────

function SiteEditorPage() {
  const qc = useQueryClient();
  const [activePage, setActivePage] = useState<string>(EDITABLE_PAGES[0].key);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, Record<string, string>>>({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const pageConfig = EDITABLE_PAGES.find((p) => p.key === activePage)!;

  const query = useQuery({
    queryKey: ["admin", "site_editor", activePage],
    queryFn: async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", activePage)
        .maybeSingle();
      return (data?.value ?? {}) as Record<string, Record<string, string>>;
    },
  });

  useEffect(() => {
    if (query.data) {
      setFormData(query.data);
      setActiveSection(pageConfig.sections[0]?.key ?? null);
    }
  }, [query.data, pageConfig]);

  const getValue = (section: string, field: string): string => {
    return formData[section]?.[field] ?? "";
  };

  const setValue = (section: string, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...(prev[section] ?? {}), [field]: value },
    }));
  };

  const save = async () => {
    setSaving(true);
    setMsg(null);
    const { error } = await supabase.from("site_settings").upsert(
      { key: activePage, value: formData as unknown as never, updated_at: new Date().toISOString() },
      { onConflict: "key" },
    );
    setSaving(false);
    if (error) return setMsg(error.message);
    setMsg("Changes saved. They will appear on the live site after reload.");
    qc.invalidateQueries({ queryKey: ["admin", "site_editor", activePage] });
    setTimeout(() => setMsg(null), 4000);
  };

  const activeSectionConfig = pageConfig.sections.find((s) => s.key === activeSection);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-navy">Site Page Editor</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Edit content on the existing static pages. Changes are saved to the database and override the defaults.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {pageConfig.path !== "global" && (
            <a
              href={pageConfig.path}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:text-science"
            >
              View page ↗
            </a>
          )}
          <button
            onClick={save}
            disabled={saving}
            className="rounded-sm bg-teal px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </div>
      {msg && <div className="mt-3 rounded-sm border border-teal/30 bg-teal/10 px-4 py-2.5 text-sm text-science">{msg}</div>}

      <div className="mt-8 flex gap-6">
        {/* Page selector sidebar */}
        <div className="w-48 flex-shrink-0">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Pages</p>
          <nav className="space-y-1">
            {EDITABLE_PAGES.map((p) => (
              <button
                key={p.key}
                onClick={() => { setActivePage(p.key); setActiveSection(p.sections[0]?.key ?? null); }}
                className={`w-full rounded-sm px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                  activePage === p.key ? "bg-navy text-white" : "text-navy hover:bg-navy/5"
                }`}
              >
                {p.label}
                <span className="ml-2 text-[0.65rem] opacity-50">{p.path}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Section tabs */}
          <div className="flex gap-1 flex-wrap mb-6 border-b border-hairline pb-3">
            {pageConfig.sections.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`rounded-sm px-4 py-2 text-[0.75rem] font-medium transition-colors ${
                  activeSection === s.key ? "bg-navy text-white" : "border border-hairline text-navy hover:bg-navy/5"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {activeSectionConfig ? (
            <div className="space-y-5 border border-hairline bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-science">
                  {activeSectionConfig.label}
                </h2>
                <span className="text-[0.65rem] text-muted-foreground">
                  Page: {pageConfig.label} › Section: {activeSectionConfig.key}
                </span>
              </div>
              {activeSectionConfig.fields.map((field) => (
                <label key={field.key} className="block space-y-1.5">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy/70">
                    {field.label}
                  </span>
                  {field.type === "textarea" ? (
                    <textarea
                      value={getValue(activeSectionConfig.key, field.key)}
                      onChange={(e) => setValue(activeSectionConfig.key, field.key, e.target.value)}
                      rows={4}
                      placeholder={`Default: (from locale file)`}
                      className="w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal resize-y"
                    />
                  ) : (
                    <input
                      value={getValue(activeSectionConfig.key, field.key)}
                      onChange={(e) => setValue(activeSectionConfig.key, field.key, e.target.value)}
                      placeholder={`Default: (from locale file)`}
                      className="w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
                    />
                  )}
                  <p className="text-[0.65rem] text-muted-foreground">
                    Leave blank to use the default value from the locale file.
                  </p>
                </label>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Select a section to edit.</p>
          )}

          <div className="mt-6 rounded-sm border border-hairline bg-secondary/50 p-4">
            <p className="text-[0.72rem] font-semibold text-navy">How this works</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Values saved here are stored in the database and take priority over the default locale file values.
              Leave a field blank to use the built-in default. Use the <strong>Site Settings</strong> page for
              company name, logo, email and social links.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
