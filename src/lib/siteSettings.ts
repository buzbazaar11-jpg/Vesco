/**
 * siteSettings.ts
 *
 * Single source of truth for public.site_settings key="general".
 * All public components (Header, Footer, Contact, etc.) use this hook.
 * Uses React Query so only ONE Supabase request is made per page load,
 * shared across all components via the shared QueryClient.
 */

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type SiteSettings = {
  // Company
  companyName: string;
  companyNameKo: string;
  logoUrl: string;
  tagline: string;
  // Contact
  email: string;
  phone: string;
  address: string;
  hours: string;
  // Social
  kakao: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  facebook: string;
  twitter: string;
};

/** Fallback values used when the admin has not configured a setting yet. */
export const SETTINGS_DEFAULTS: SiteSettings = {
  companyName: "Vesco Science Co., Ltd.",
  companyNameKo: "베스코 사이언스",
  logoUrl: "",
  tagline: "Advanced Biotechnology for Regenerative Medicine",
  email: "contact@vescoscience.com",
  phone: "",
  address: "Republic of Korea",
  hours: "Mon–Fri, 09:00–18:00 KST",
  kakao: "",
  linkedin: "",
  instagram: "",
  youtube: "",
  facebook: "",
  twitter: "",
};

/** React Query key used by both admin and public components. */
export const SETTINGS_QUERY_KEY = ["site_settings", "general"] as const;

/** Fetch settings from Supabase. Returns merged defaults + saved values. */
async function fetchSettings(): Promise<SiteSettings> {
  const { data, error } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", "general")
    .maybeSingle();

  if (error) {
    // If the table doesn't exist yet, return defaults gracefully.
    console.warn("[siteSettings] fetch error:", error.message);
    return SETTINGS_DEFAULTS;
  }

  const saved = (data?.value ?? {}) as Partial<SiteSettings>;
  return { ...SETTINGS_DEFAULTS, ...saved };
}

/**
 * Public hook — use this in Header, Footer, Contact, Homepage, etc.
 * staleTime: 60 s so a page visit never makes more than 1 request/minute.
 */
export function useSiteSettings() {
  return useQuery({
    queryKey: SETTINGS_QUERY_KEY,
    queryFn: fetchSettings,
    staleTime: 60_000,
    // Don't throw — return defaults on error so the site never breaks.
    throwOnError: false,
  });
}

/**
 * Admin hook — same data but no staleTime so it always reflects the
 * latest saved value after invalidation.
 */
export function useAdminSiteSettings() {
  return useQuery({
    queryKey: SETTINGS_QUERY_KEY,
    queryFn: fetchSettings,
    staleTime: 0,
    throwOnError: false,
  });
}

/** Save settings and invalidate so all components re-fetch immediately. */
export async function saveSiteSettings(
  qc: ReturnType<typeof useQueryClient>,
  values: SiteSettings,
): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from("site_settings")
    .upsert(
      {
        key: "general",
        value: values as unknown as never,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    );

  if (error) return { error: error.message };

  // Invalidate so both admin panel AND public components re-fetch the new data.
  await qc.invalidateQueries({ queryKey: SETTINGS_QUERY_KEY });
  return { error: null };
}
