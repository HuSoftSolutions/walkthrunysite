"use client";

import { useMemo } from "react";

// Robust Calendly iframe embed to avoid external script loaders/overlays
// Usage: <CalendlyEmbed url="https://calendly.com/your-handle/15min" />
export default function CalendlyEmbed({ url, height = "100svh" }) {
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
      style={{ width: "100%", minWidth: "100%", height, minHeight: "100vh", border: 0 }}
      frameBorder="0"
    />
  );
}

