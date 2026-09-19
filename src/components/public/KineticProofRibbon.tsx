"use client";

import React from "react";

export default function KineticProofRibbon() {
  const items = [
    { type: "stat", text: "590+ Projects Delivered", icon: "⚡" },
    { type: "brand", text: "AURA TECHNOLOGIES", icon: "✦" },
    { type: "stat", text: "99.4% Client Satisfaction", icon: "★" },
    { type: "brand", text: "MAISON LUXE", icon: "✦" },
    { type: "stat", text: "100% Vector Master Files", icon: "📐" },
    { type: "brand", text: "APEX ATHLETICS", icon: "✦" },
    { type: "stat", text: "3+ Years Commercial Mastery", icon: "⚡" },
    { type: "brand", text: "ZENITH AI LABS", icon: "✦" },
    { type: "stat", text: "24–48h Concept Delivery", icon: "⏱️" },
    { type: "brand", text: "PULSE MEDIA GLOBAL", icon: "✦" },
  ];

  // Repeat for seamless gapless loop
  const loopItems = [...items, ...items, ...items];

  return (
    <div
      style={{
        position: "relative",
        background: "rgba(10, 11, 15, 0.95)",
        borderTop: "1px solid rgba(212, 255, 0, 0.15)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        padding: "16px 0",
        overflow: "hidden",
        display: "flex",
        userSelect: "none",
        zIndex: 5,
      }}
      aria-label="Key Proof and Brand Partners"
    >
      {/* Edge gradient masks for cinematic blur fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(to right, #08080a 20%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(to left, #08080a 20%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 35s linear infinite",
          gap: 36,
        }}
      >
        {loopItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-heading)",
              color: item.type === "stat" ? "var(--accent)" : "rgba(255, 255, 255, 0.8)",
            }}
          >
            <span
              style={{
                color: item.type === "stat" ? "var(--accent)" : "rgba(212, 255, 0, 0.6)",
                fontSize: item.type === "stat" ? "1rem" : "0.75rem",
              }}
            >
              {item.icon}
            </span>
            <span>{item.text}</span>
            <span style={{ color: "rgba(255, 255, 255, 0.15)", fontSize: "0.8rem" }}>
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
