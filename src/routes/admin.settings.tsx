import { createFileRoute } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { uploadSiteFile, STORAGE_BUCKET } from "@/lib/admin";
import { supabase } from "@/integrations/supabase/client";
import {
  useAdminSiteSettings,
  saveSiteSettings,
  SETTINGS_DEFAULTS,
  type SiteSettings,
} from "@/lib/siteSettings";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsPage,
});

// ─── Field definitions ────────────────────────────────────────────────────────

type FieldDef = { key: keyof SiteSettings; label: string; group: string; placeholder?: string; type?: string };

const FIELDS: FieldDef[] = [
  // Company
  { key: "companyName",   label: "Company name (EN)", group: "Company" },
  { key: "companyNameKo", label: "회사명 (KO)",          group: "Company" },
  { key: "tagline",       label: "Tagline",             group: "Company" },
  // Contact
  { key: "email",   label: "Email",          group: "Contact", type: "email",   placeholder: "contact@example.com" },
  { key: "phone",   label: "Phone",          group: "Contact", type: "tel",     placeholder: "+82 10 0000 0000" },
  { key: "address", label: "Address",        group: "Contact", placeholder: "Republic of Korea" },
  { key: "hours",   label: "Business hours", group: "Contact", placeholder: "Mon–Fri, 09:00–18:00 KST" },
  // Social
  { key: "linkedin",  label: "LinkedIn URL",   group: "Social", placeholder: "https://linkedin.com/company/…" },
  { key: "instagram", label: "Instagram URL",  group: "Social", placeholder: "https://instagram.com/…" },
  { key: "youtube",   label: "YouTube URL",    group: "Social", placeholder: "https://youtube.com/@…" },
  { key: "facebook",  label: "Facebook URL",   group: "Social", placeholder: "https://facebook.com/…" },
  { key: "twitter",   label: "X / Twitter URL",group: "Social", placeholder: "https://x.com/…" },
  { key: "kakao",     label: "KakaoTalk link", group: "Social", placeholder: "https://open.kakao.com/…" },
];

const GROUPS = ["Company", "Contact", "Social"] as const;

// ─── Component ────────────────────────────────────────────────────────────────

function SettingsPage() {
  const qc = useQueryClient();
  const { data: loaded, isLoading } = useAdminSiteSettings();

  const [form, setForm] = useState<SiteSettings>(SETTINGS_DEFAULTS);
  const [msg, setMsg]   = useState<{ text: string; ok: boolean } | null>(null);
  const [saving, setSaving] = useState(false);
  const [logoUploading, setLogoUploading] = useState(false);
  const logoFileRef = useRef<HTMLInputElement>(null);

  // Populate form once data arrives
  useEffect(() => {
    if (loaded) setForm({ ...SETTINGS_DEFAULTS, ...loaded });
  }, [loaded]);

  const set = (k: keyof SiteSettings, v: string) => setForm((f) => ({ ...f, [k]: v }));

  // ── Logo upload ────────────────────────────────────────────────────────────
  const handleLogoUpload = async (file: File) => {
    setLogoUploading(true);
    setMsg(null);
    try {
      // Overwrite any existing logo by using a fixed path so old URLs are
      // replaced and don't accumulate in storage.
      const ext  = file.name.split(".").pop() ?? "png";
      const path = `logo/site-logo.${ext}`;
      const { error: upErr } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(path, file, { cacheControl: "31536000", upsert: true });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
      // Append a cache-buster so the browser picks up the new file immediately.
      const url = `${data.publicUrl}?t=${Date.now()}`;
      setForm((f) => ({ ...f, logoUrl: url }));
      setMsg({ text: "Logo uploaded. Click Save settings to apply.", ok: true });
    } catch (e) {
      setMsg({ text: (e as Error).message, ok: false });
    } finally {
      setLogoUploading(false);
    }
  };

  // ── Save ───────────────────────────────────────────────────────────────────
  const save = async () => {
    setSaving(true);
    setMsg(null);
    const { error } = await saveSiteSettings(qc, form);
    setSaving(false);
    if (error) {
      setMsg({ text: error, ok: false });
    } else {
      setMsg({ text: "Settings saved. Public website is updated.", ok: true });
    }
    // Auto-dismiss after 5 s
    setTimeout(() => setMsg(null), 5000);
  };

  if (isLoading) {
    return <div className="py-16 text-center text-sm text-muted-foreground">Loading settings…</div>;
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-navy">Site Settings</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Logo, company details, contact info and social links.
            Changes are saved to Supabase and appear on the public website immediately.
          </p>
        </div>
        <button
          onClick={save}
          disabled={saving}
          className="rounded-sm bg-teal px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save settings"}
        </button>
      </div>

      {/* Message */}
      {msg && (
        <div className={`mt-4 rounded-sm border px-4 py-3 text-sm font-medium ${
          msg.ok
            ? "border-teal/30 bg-teal/10 text-science"
            : "border-destructive/30 bg-destructive/10 text-destructive"
        }`}>
          {msg.text}
        </div>
      )}

      {/* ── LOGO ── */}
      <section className="mt-8 border border-hairline bg-card p-6">
        <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-science">
          Logo
        </h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Uploaded to the public <code className="rounded bg-navy/10 px-1 py-0.5 font-mono">{STORAGE_BUCKET}</code> bucket.
          Use PNG or SVG with a transparent background for best results.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-6">
          {/* Preview */}
          <div className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded border border-hairline bg-navy p-3">
            {form.logoUrl ? (
              <img
                src={form.logoUrl}
                alt="Logo preview"
                className="h-full w-auto max-w-full object-contain"
              />
            ) : (
              <p className="text-center text-[0.65rem] text-white/40">No logo uploaded</p>
            )}
          </div>

          <div className="grid gap-3 flex-1 min-w-[260px]">
            {/* Upload button */}
            <div>
              <input
                ref={logoFileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void handleLogoUpload(f);
                  e.target.value = "";
                }}
              />
              <button
                type="button"
                disabled={logoUploading}
                onClick={() => logoFileRef.current?.click()}
                className="rounded-sm bg-navy px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white hover:bg-navy/80 disabled:opacity-60"
              >
                {logoUploading ? "Uploading…" : form.logoUrl ? "Replace logo" : "Upload logo"}
              </button>
              {form.logoUrl && (
                <button
                  type="button"
                  onClick={() => set("logoUrl", "")}
                  className="ml-3 text-xs font-semibold text-destructive hover:opacity-75"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Or paste URL */}
            <label className="grid gap-1.5">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy/70">
                Or paste logo URL
              </span>
              <input
                value={form.logoUrl}
                onChange={(e) => set("logoUrl", e.target.value)}
                placeholder="https://…"
                className="w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
              />
            </label>
          </div>
        </div>
      </section>

      {/* ── Field groups ── */}
      {GROUPS.map((group) => {
        const groupFields = FIELDS.filter((f) => f.group === group);
        return (
          <section key={group} className="mt-6 border border-hairline bg-card p-6">
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-science">
              {group}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {groupFields.map((f) => (
                <label key={f.key} className="grid gap-1.5">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-navy/70">
                    {f.label}
                  </span>
                  <input
                    type={f.type ?? "text"}
                    value={form[f.key]}
                    onChange={(e) => set(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
                  />
                </label>
              ))}
            </div>
          </section>
        );
      })}

      {/* ── Save (bottom duplicate for convenience) ── */}
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-hairline pt-6">
        <p className="text-xs text-muted-foreground">
          All changes are stored in <code className="rounded bg-navy/10 px-1 font-mono">public.site_settings</code> key <code className="rounded bg-navy/10 px-1 font-mono">"general"</code> and take effect on the public website immediately after saving.
        </p>
        <button
          onClick={save}
          disabled={saving}
          className="flex-shrink-0 rounded-sm bg-teal px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save settings"}
        </button>
      </div>
    </div>
  );
}
