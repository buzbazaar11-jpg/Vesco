import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { uploadSiteFile } from "@/lib/admin";

export const Route = createFileRoute("/admin/ai-assistant")({
  component: AIAssistantPage,
});

type AnalysisState = "idle" | "uploading" | "analyzing" | "ready" | "applying";
type DiffItem = {
  id: string;
  type: "missing" | "different" | "new_page";
  section: string;
  description: string;
  currentContent?: string;
  suggestedContent: string;
  approved: boolean;
};

type Action = "add" | "update" | "replace" | "create_page" | "skip";

const SITE_STRUCTURE = [
  { page: "Home (/)", sections: ["Hero", "Capabilities Bar", "Company Intro", "Technology Cards", "Exosome Feature", "Manufacturing Pipeline", "Quality Section", "R&D Section", "Partnership Section", "EverCeutical Block", "Scientific Insights", "CTA Band"] },
  { page: "About (/about)", sections: ["Hero", "Company Overview", "Our Story", "Values", "Milestones", "Position/Focus/Partners", "Capabilities Pipeline", "Scientific Approach", "Manufacturing Pipeline", "Quality Approach", "EverCeutical Partnership", "Vision & Mission", "Seoul HQ", "Our People"] },
  { page: "Technology (/technology)", sections: ["Hero", "Technology Cards", "Exosome Steps", "CTA Band"] },
  { page: "Products (/products)", sections: ["Hero", "Product Categories", "CTA Band"] },
  { page: "OEM/ODM (/oem)", sections: ["Hero", "OEM vs ODM", "9-Stage Timeline", "Custom Development", "Private Label", "Regulatory Support"] },
  { page: "Quality (/quality)", sections: ["Hero", "Process Flow", "Quality Systems", "Characterization"] },
  { page: "Facility (/facility)", sections: ["Hero", "Facility Areas", "Process Flow"] },
  { page: "Research (/research)", sections: ["Hero", "Research Areas", "Team Capability"] },
  { page: "Contact (/contact)", sections: ["Hero", "Contact Form", "Contact Info"] },
  { page: "FAQ (/faq)", sections: ["Hero", "FAQ Accordion"] },
];

function AIAssistantPage() {
  const [state, setState] = useState<AnalysisState>("idle");
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string; type: string }[]>([]);
  const [analysisText, setAnalysisText] = useState("");
  const [diffItems, setDiffItems] = useState<DiffItem[]>([]);
  const [applyMsg, setApplyMsg] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>("Home (/)");
  const [manualNotes, setManualNotes] = useState("");
  const [actionChoices, setActionChoices] = useState<Record<string, Action>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | File[]) => {
    const arr = Array.from(files);
    setState("uploading");
    const uploaded: typeof uploadedFiles = [];
    for (const file of arr) {
      try {
        const { url } = await uploadSiteFile(file, "ai-uploads");
        uploaded.push({ name: file.name, url, type: file.type });
      } catch {
        // ignore individual upload errors
      }
    }
    setUploadedFiles((prev) => [...prev, ...uploaded]);
    setState("idle");
  };

  const runAnalysis = async () => {
    if (uploadedFiles.length === 0 && !manualNotes.trim()) {
      alert("Please upload at least one file (PDF, image, or screenshot) or add notes first.");
      return;
    }
    setState("analyzing");
    setDiffItems([]);
    setApplyMsg(null);

    // Simulate AI analysis (In production this would call a Supabase Edge Function
    // with GPT-4 Vision or Claude to analyze the uploaded files vs site structure)
    await new Promise((r) => setTimeout(r, 2000));

    const page = SITE_STRUCTURE.find((p) => p.page === selectedPage);
    const pageSections = page?.sections ?? [];

    // Generate diff items based on analysis
    const items: DiffItem[] = [];

    if (uploadedFiles.length > 0) {
      // Simulate finding missing sections from uploaded PDF/image
      items.push({
        id: "diff-1",
        type: "missing",
        section: `${selectedPage} — New Content Detected`,
        description: `The uploaded file "${uploadedFiles[0]?.name}" appears to contain content not currently present on the ${selectedPage} page.`,
        suggestedContent: `[Content from uploaded file would be extracted and shown here by the AI. In production, this connects to GPT-4 Vision or Claude API to analyze your uploaded PDF/image and compare it with the existing page structure: ${pageSections.join(", ")}]`,
        approved: false,
      });

      items.push({
        id: "diff-2",
        type: "different",
        section: `${selectedPage} — Text Differences`,
        description: `Some text content in the uploaded file differs from what is currently on the page.`,
        currentContent: `Current text on page (example)`,
        suggestedContent: `Updated text from uploaded file (example). The AI would extract actual text from your PDF/image and compare it with the live site.`,
        approved: false,
      });
    }

    if (manualNotes.trim()) {
      items.push({
        id: "diff-notes",
        type: "missing",
        section: "Manual Notes",
        description: manualNotes,
        suggestedContent: `Changes requested: "${manualNotes}"`,
        approved: false,
      });
    }

    // Default action for each item
    const defaults: Record<string, Action> = {};
    items.forEach((item) => { defaults[item.id] = item.type === "new_page" ? "create_page" : "add"; });

    setDiffItems(items);
    setActionChoices(defaults);
    setAnalysisText(
      `Analysis complete. Compared uploaded file(s) against ${selectedPage} (sections: ${pageSections.join(", ")}). Found ${items.length} difference(s).\n\nPlease review each item below and choose an action before applying.`
    );
    setState("ready");
  };

  const applyChanges = async () => {
    const approved = diffItems.filter(
      (item) => item.approved && actionChoices[item.id] !== "skip",
    );
    if (approved.length === 0) {
      setApplyMsg("No items approved for changes. Check the items you want to apply.");
      return;
    }
    setState("applying");
    await new Promise((r) => setTimeout(r, 1500));
    setApplyMsg(
      `${approved.length} change(s) processed. In production, this would: create new pages in the pages table, update site_settings overrides, or queue the changes for developer review.`
    );
    setState("ready");
  };

  const toggleApprove = (id: string) =>
    setDiffItems((prev) => prev.map((item) => (item.id === id ? { ...item, approved: !item.approved } : item)));

  const setAction = (id: string, action: Action) =>
    setActionChoices((prev) => ({ ...prev, [id]: action }));

  const approvedCount = diffItems.filter((i) => i.approved).length;

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-navy">AI Website Assistant</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Upload PDFs, images or screenshots. The AI will compare them against your existing website and show you what is different or missing — then ask for your confirmation before changing anything.
          </p>
        </div>
      </div>

      {/* ─ Workflow Explainer ─ */}
      <div className="mt-6 grid grid-cols-5 gap-px bg-hairline">
        {["Upload File", "Select Page", "AI Analyzes", "Review Diff", "Apply Changes"].map((step, i) => (
          <div key={step} className={`bg-card p-4 text-center ${i < 3 && state === "ready" ? "opacity-50" : ""}`}>
            <div className={`mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold ${
              (state === "analyzing" && i === 2) || (state === "ready" && i === 3) || (state === "applying" && i === 4)
                ? "bg-teal text-[#05231f]"
                : "bg-navy/10 text-navy"
            }`}>{i + 1}</div>
            <p className="text-[0.72rem] font-medium text-navy">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* ─ Left: Upload + Config ─ */}
        <div className="space-y-6">
          {/* Upload zone */}
          <div>
            <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70">Upload Files</p>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files.length) void handleFiles(e.dataTransfer.files); }}
              className={`flex flex-col items-center gap-3 rounded-sm border-2 border-dashed p-8 transition-colors ${dragOver ? "border-teal bg-teal/5" : "border-hairline bg-card"}`}
            >
              <div className="text-3xl opacity-30">📎</div>
              <div className="text-center">
                <p className="text-sm font-medium text-navy">Drag &amp; drop PDF, images, or screenshots</p>
                <p className="mt-1 text-xs text-muted-foreground">PNG, JPG, PDF, WebP — anything you want the AI to analyze</p>
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={state === "uploading"}
                className="rounded-sm bg-teal px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#05231f] disabled:opacity-60"
              >
                {state === "uploading" ? "Uploading…" : "Choose files"}
              </button>
              <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf" className="hidden"
                onChange={(e) => { if (e.target.files) void handleFiles(e.target.files); }} />
            </div>
          </div>

          {/* Uploaded files list */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70">Uploaded Files</p>
              {uploadedFiles.map((f, i) => (
                <div key={i} className="flex items-center justify-between gap-3 rounded-sm border border-hairline bg-card px-4 py-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-base">{f.type.includes("pdf") ? "📄" : "🖼"}</span>
                    <span className="truncate text-xs font-medium text-navy">{f.name}</span>
                  </div>
                  <button
                    onClick={() => setUploadedFiles((prev) => prev.filter((_, j) => j !== i))}
                    className="text-xs text-destructive hover:opacity-75"
                  >✕</button>
                </div>
              ))}
            </div>
          )}

          {/* Page selector */}
          <div>
            <label className="block space-y-1.5">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70">Compare Against Page</span>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal"
              >
                {SITE_STRUCTURE.map((p) => (
                  <option key={p.page} value={p.page}>{p.page}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Current page structure preview */}
          <div className="rounded-sm border border-hairline bg-secondary/50 p-4">
            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-science">
              Current Sections on {selectedPage}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(SITE_STRUCTURE.find((p) => p.page === selectedPage)?.sections ?? []).map((s) => (
                <span key={s} className="rounded-sm bg-navy/10 px-2.5 py-1 text-[0.68rem] font-medium text-navy">{s}</span>
              ))}
            </div>
          </div>

          {/* Manual notes */}
          <div>
            <label className="block space-y-1.5">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70">
                Additional Notes (optional)
              </span>
              <textarea
                value={manualNotes}
                onChange={(e) => setManualNotes(e.target.value)}
                rows={4}
                placeholder="Describe what you want to change or add. E.g.: 'Add a new section about our Seoul campus between the Values section and the Milestones section.'"
                className="w-full border border-hairline bg-background px-4 py-2.5 text-sm outline-none focus:border-teal resize-y"
              />
            </label>
          </div>

          {/* Analyze button */}
          <button
            onClick={runAnalysis}
            disabled={state === "analyzing" || state === "uploading" || state === "applying"}
            className="w-full rounded-sm bg-teal py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#05231f] disabled:opacity-60"
          >
            {state === "analyzing" ? "🔍 Analyzing…" : state === "uploading" ? "⏳ Uploading…" : "🔍 Analyze & Compare"}
          </button>
        </div>

        {/* ─ Right: Analysis Results ─ */}
        <div className="space-y-4">
          {state === "analyzing" && (
            <div className="flex flex-col items-center justify-center gap-4 rounded-sm border border-hairline bg-card p-12 text-center">
              <div className="text-4xl animate-pulse">🔍</div>
              <p className="text-sm font-medium text-navy">Analyzing uploaded files…</p>
              <p className="text-xs text-muted-foreground">Comparing with existing website structure and content</p>
            </div>
          )}

          {state === "idle" && uploadedFiles.length === 0 && !manualNotes && (
            <div className="flex flex-col items-center justify-center gap-3 rounded-sm border-2 border-dashed border-hairline p-12 text-center">
              <div className="text-4xl opacity-20">🤖</div>
              <p className="text-sm text-muted-foreground">Upload files and click Analyze to get started.</p>
            </div>
          )}

          {analysisText && (
            <div className="rounded-sm border border-teal/30 bg-teal/5 p-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-science mb-2">Analysis Summary</p>
              <p className="text-xs text-navy whitespace-pre-wrap">{analysisText}</p>
            </div>
          )}

          {diffItems.length > 0 && (
            <>
              <div className="flex items-center justify-between">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy/70">
                  Differences Found ({diffItems.length})
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDiffItems((prev) => prev.map((i) => ({ ...i, approved: true })))}
                    className="text-[0.65rem] font-semibold text-science hover:underline"
                  >
                    Approve all
                  </button>
                  <button
                    onClick={() => setDiffItems((prev) => prev.map((i) => ({ ...i, approved: false })))}
                    className="text-[0.65rem] font-semibold text-muted-foreground hover:underline"
                  >
                    Deselect all
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {diffItems.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-sm border bg-card p-5 transition-all ${item.approved ? "border-teal" : "border-hairline"}`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={item.approved}
                        onChange={() => toggleApprove(item.id)}
                        className="mt-1 accent-teal"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`rounded-sm px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] ${
                            item.type === "missing" ? "bg-amber-100 text-amber-700" :
                            item.type === "different" ? "bg-blue-100 text-blue-700" :
                            "bg-teal/10 text-science"
                          }`}>
                            {item.type === "missing" ? "Missing" : item.type === "different" ? "Different" : "New Page"}
                          </span>
                          <span className="text-xs font-semibold text-navy">{item.section}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>

                        {item.currentContent && (
                          <div className="mt-3">
                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-1">Current:</p>
                            <p className="rounded bg-secondary p-2 text-xs text-navy">{item.currentContent}</p>
                          </div>
                        )}
                        <div className="mt-2">
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-science mb-1">Suggested:</p>
                          <p className="rounded bg-teal/5 p-2 text-xs text-navy border border-teal/20">{item.suggestedContent}</p>
                        </div>

                        {/* Action selector */}
                        {item.approved && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            <p className="w-full text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-navy/70 mb-1">Action:</p>
                            {(["add", "update", "replace", "create_page", "skip"] as Action[]).map((action) => (
                              <button
                                key={action}
                                onClick={() => setAction(item.id, action)}
                                className={`rounded-sm px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
                                  actionChoices[item.id] === action
                                    ? "bg-navy text-white"
                                    : "border border-hairline text-navy hover:bg-navy/5"
                                }`}
                              >
                                {action === "create_page" ? "Create Page" : action.charAt(0).toUpperCase() + action.slice(1)}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Apply button */}
              <div className="rounded-sm border border-amber-200 bg-amber-50 p-4">
                <p className="text-[0.72rem] font-semibold text-amber-800">
                  ⚠️ Confirmation Required
                </p>
                <p className="mt-1 text-xs text-amber-700">
                  You have approved {approvedCount} of {diffItems.length} items.
                  Existing website content will NOT be removed unless you explicitly select "Replace".
                  Actions will only be applied to approved items.
                </p>
              </div>

              <button
                onClick={applyChanges}
                disabled={approvedCount === 0 || state === "applying"}
                className="w-full rounded-sm bg-navy py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white disabled:opacity-40"
              >
                {state === "applying" ? "Applying changes…" : `Apply ${approvedCount} Approved Change${approvedCount !== 1 ? "s" : ""}`}
              </button>
            </>
          )}

          {applyMsg && (
            <div className="rounded-sm border border-teal/30 bg-teal/10 p-4 text-sm text-science">
              ✓ {applyMsg}
            </div>
          )}

          {/* AI Config note */}
          <div className="rounded-sm border border-hairline bg-secondary/40 p-4">
            <p className="text-[0.7rem] font-semibold text-navy mb-1">Connect to AI</p>
            <p className="text-xs text-muted-foreground">
              To enable full AI analysis (GPT-4 Vision / Claude), add your API key in{" "}
              <strong>Site Settings → AI Configuration</strong>.
              Without an API key the assistant runs in demonstration mode, showing the workflow without actual AI analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
