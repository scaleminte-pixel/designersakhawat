"use client";

import React from "react";

export default function ServiceGuaranteesSection() {
  const pillars = [
    {
      icon: "📐",
      title: "100% Vector Master Files",
      desc: "Receive clean, organized .AI, .EPS, .SVG, and font packages. Scalable from app icons to skyscraper billboards without quality loss.",
    },
    {
      icon: "🛡️",
      title: "Full Commercial Copyright",
      desc: "100% exclusive intellectual property transfer. You own your brand assets outright for global trademarking and retail.",
    },
    {
      icon: "🎯",
      title: "Pre-Press Manufacturer Ready",
      desc: "Accurate dielines, bleed margins, and finish layers (foil, spot UV, emboss) verified for zero manufacturing errors.",
    },
    {
      icon: "⚡",
      title: "Direct 1-on-1 Designer Access",
      desc: "No account managers or bureaucratic middlemen. You collaborate directly with Sakhawat for fast, agile execution.",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 0",
        background: "linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-surface) 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="soft-hover-lift"
              style={{
                background: "rgba(16, 17, 23, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "var(--radius-xl)",
                padding: "26px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--radius-lg)",
                  background: "rgba(212, 255, 0, 0.08)",
                  border: "1px solid rgba(212, 255, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.35rem",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
