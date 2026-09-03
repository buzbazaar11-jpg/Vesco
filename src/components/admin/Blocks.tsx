import React from "react";
import type { Block } from "@/lib/admin";

/** Renders a page-builder block list as the live page body. */
export function BlockList({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {blocks.map((b) => (
        <BlockView key={b.id} block={b} />
      ))}
    </div>
  );
}

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading": {
      const level = block.level ?? 2;
      const sizes: Record<number, string> = {
        1: "text-[clamp(2rem,4vw,3.5rem)] leading-[1.06] font-semibold",
        2: "text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.1] font-semibold",
        3: "text-[1.4rem] font-semibold leading-snug",
        4: "text-[1.15rem] font-semibold",
      };
      const cls = `mt-10 ${sizes[level] ?? sizes[2]} ${
        block.align === "center" ? "text-center" : block.align === "right" ? "text-right" : ""
      }`;
      const style: React.CSSProperties = {
        color: block.color ?? undefined,
        fontSize: block.fontSize ?? undefined,
      };
      if (level === 1) return <h1 className={cls} style={style}>{block.text}</h1>;
      if (level === 3) return <h3 className={cls} style={style}>{block.text}</h3>;
      if (level === 4) return <h4 className={cls} style={style}>{block.text}</h4>;
      return <h2 className={cls} style={style}>{block.text}</h2>;
    }

    case "text":
      return (
        <p
          className={`mt-5 whitespace-pre-wrap text-[1rem] leading-relaxed text-muted-foreground ${block.align === "center" ? "text-center" : block.align === "right" ? "text-right" : ""}`}
          style={{ color: block.color ?? undefined, fontSize: block.fontSize ?? undefined }}
        >
          {block.text}
        </p>
      );

    case "richtext":
      return (
        <div
          className="mt-5 prose prose-navy max-w-none"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case "image":
      return block.url ? (
        <figure className={`mt-8 ${block.width === "full" ? "w-full" : block.width === "half" ? "w-1/2 mx-auto" : "w-full"}`}>
          <img
            src={block.url}
            alt={block.alt ?? ""}
            loading="lazy"
            className={`w-full object-cover border border-hairline ${block.radius === "none" ? "" : block.radius === "lg" ? "rounded-xl" : "rounded-sm"}`}
          />
          {block.caption && <figcaption className="mt-2 text-center text-xs text-muted-foreground">{block.caption}</figcaption>}
        </figure>
      ) : null;

    case "button":
      return (
        <div className={`mt-8 ${block.align === "center" ? "text-center" : block.align === "right" ? "text-right" : ""}`}>
          <a
            href={block.href || "#"}
            className={`inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all ${
              block.variant === "outline"
                ? "border border-navy/25 text-navy hover:border-teal hover:text-science"
                : block.variant === "ghost"
                  ? "border border-white/25 text-white hover:border-teal hover:text-teal"
                  : "bg-teal text-[#05231f] hover:bg-teal/85"
            }`}
          >
            {block.label}
          </a>
        </div>
      );

    case "divider":
      if (block.style === "dots") return <div className="mt-10 flex justify-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-hairline" /><span className="h-1.5 w-1.5 rounded-full bg-hairline" /><span className="h-1.5 w-1.5 rounded-full bg-hairline" /></div>;
      if (block.style === "space") return <div className="mt-10" style={{ height: block.spacing ?? "2rem" }} />;
      return <hr className="mt-10 border-hairline" />;

    case "spacer":
      return <div style={{ height: block.height || "3rem" }} />;

    case "columns":
      return (
        <div className={`mt-8 grid gap-${block.gap ?? "8"} md:grid-cols-${(block.cols ?? []).length}`}>
          {(block.cols ?? []).map((col, i) => (
            <div key={i}>
              {col.map((b) => <BlockView key={b.id} block={b} />)}
            </div>
          ))}
        </div>
      );

    case "card":
      return (
        <div className="mt-8 border border-hairline bg-card p-8">
          {block.num && (
            <span className="font-display text-[0.8rem] font-bold tracking-[0.18em] text-teal">{block.num}</span>
          )}
          <h3 className="mt-4 text-[1.2rem] font-semibold text-navy">{block.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{block.body}</p>
        </div>
      );

    case "hero":
      return (
        <div className="relative mt-8 isolate overflow-hidden bg-navy min-h-[50vh] flex items-center">
          {block.imageUrl && (
            <img src={block.imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 to-navy/50" />
          <div className="relative px-10 py-16">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold text-white">{block.heading}</h1>
            {block.subheading && <p className="mt-4 text-[1.2rem] text-teal">{block.subheading}</p>}
            {block.body && <p className="mt-5 max-w-2xl text-[1rem] text-white/70">{block.body}</p>}
            {block.ctaLabel && (
              <a href={block.ctaHref ?? "#"} className="mt-8 inline-flex bg-teal px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]">
                {block.ctaLabel}
              </a>
            )}
          </div>
        </div>
      );

    case "stats":
      return (
        <div className="mt-8 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {(block.items ?? []).map((item) => (
            <div key={item.label} className="bg-card px-6 py-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-navy">{item.value}</p>
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className={`mt-5 space-y-2 ${block.style === "numbered" ? "list-decimal pl-5" : block.style === "check" ? "" : "list-disc pl-5"}`}>
          {(block.items ?? []).map((item, i) => (
            <li key={i} className={`text-[0.95rem] text-muted-foreground ${block.style === "check" ? "flex items-start gap-2" : ""}`}>
              {block.style === "check" && <span className="mt-0.5 text-teal flex-shrink-0">✓</span>}
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="mt-8 border-l-4 border-teal pl-6">
          <p className="text-[1.1rem] italic text-navy">"{block.text}"</p>
          {block.author && <footer className="mt-3 text-sm text-muted-foreground">— {block.author}</footer>}
        </blockquote>
      );

    case "badge":
      return (
        <div className="mt-5 flex flex-wrap gap-2">
          {(block.items ?? []).map((item) => (
            <span key={item} className="border border-hairline bg-card px-3.5 py-2 text-[0.78rem] font-medium text-navy" style={{ borderColor: block.color ?? undefined }}>
              {item}
            </span>
          ))}
        </div>
      );

    case "accordion":
      return (
        <div className="mt-8 divide-y divide-hairline border border-hairline">
          {(block.items ?? []).map((item, i) => (
            <details key={i} className="group px-6 py-4">
              <summary className="cursor-pointer list-none font-semibold text-navy group-open:text-science">{item.q}</summary>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      );

    case "gallery":
      return (
        <div className={`mt-8 grid gap-2 grid-cols-${block.cols ?? 3}`}>
          {(block.images ?? []).map((img, i) => (
            <img key={i} src={img.url} alt={img.alt ?? ""} loading="lazy" className="aspect-square w-full object-cover" />
          ))}
        </div>
      );

    case "cta":
      return (
        <div className={`mt-8 p-10 ${block.dark ? "bg-navy text-white" : "bg-teal/10 text-navy"}`}>
          <h2 className={`text-[1.6rem] font-semibold ${block.dark ? "text-white" : "text-navy"}`}>{block.heading}</h2>
          {block.body && <p className={`mt-3 text-[1rem] ${block.dark ? "text-white/70" : "text-muted-foreground"}`}>{block.body}</p>}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={block.primaryHref || "#"} className="inline-flex bg-teal px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#05231f]">
              {block.primaryLabel}
            </a>
            {block.secondaryLabel && (
              <a href={block.secondaryHref || "#"} className={`inline-flex border px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] ${block.dark ? "border-white/30 text-white" : "border-navy/25 text-navy"}`}>
                {block.secondaryLabel}
              </a>
            )}
          </div>
        </div>
      );

    case "section_header":
      return (
        <div className={`mt-12 ${block.align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
          {block.eyebrow && (
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-science">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-current opacity-50" />{block.eyebrow}
            </p>
          )}
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.85rem)] font-semibold text-navy">{block.title}</h2>
          {block.intro && <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">{block.intro}</p>}
        </div>
      );

    case "video":
      return (
        <div className="mt-8 aspect-video w-full overflow-hidden bg-black">
          <iframe src={block.url} className="h-full w-full" allowFullScreen title="video" />
          {block.caption && <p className="mt-2 text-center text-xs text-muted-foreground">{block.caption}</p>}
        </div>
      );

    case "embed":
      return (
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: block.html }} />
      );

    case "raw_html":
      return (
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: block.html }} />
      );

    default:
      return null;
  }
}
