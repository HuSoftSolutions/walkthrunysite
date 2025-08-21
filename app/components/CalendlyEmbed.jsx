"use client";

import { useMemo } from "react";

// Calendly inline iframe that scrolls with the page (avoid internal iframe scrolling)
// Provide a generous default height so users scroll the page to view more/less of the scheduler.
export default function CalendlyEmbed({ url, height = "clamp(1200px, 160svh, 2400px)" }) {
  const src = useMemo(() => {
    const domain = typeof window !== "undefined" ? window.location.hostname : "localhost";
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}embed_domain=${encodeURIComponent(domain)}&embed_type=InlineWidget`;
  }, [url]);

  return (
    <iframe
      title="Schedule with WalkThruNY"
      src={src}
      width="100%"
      style={{ width: "100%", minWidth: "100%", height, border: 0, display: "block" }}
      frameBorder="0"
    />
  );
}
