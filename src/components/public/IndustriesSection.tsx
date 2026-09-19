import React from "react";
import type { Industry } from "@/types";

export default function IndustriesSection({
  industries,
}: {
  industries: Industry[];
}) {
  if (!industries || industries.length === 0) return null;

  return (
    <section
      className="section"
      style={{
        background: "var(--bg-deep)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "var(--space-xl)",
        paddingBottom: "var(--space-2xl)",
      }}
      aria-labelledby="industries-heading"
    >
      <div className="container">
        <div className="text-center reveal-on-scroll" style={{ marginBottom: 36 }}>
          <span className="section-label">Domain Specialization</span>
          <h2
            id="industries-heading"
            className="section-heading"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              marginBottom: 10,
            }}
          >
            Industries Engineered For Growth
          </h2>
          <p
            className="section-subtext"
            style={{ maxWidth: 580, margin: "0 auto", fontSize: "0.9375rem" }}
          >
            Bespoke design strategies tailored to the unique packaging standards, market trends, and visual benchmarks of key commercial verticals.
          </p>
        </div>

        {/* Floating Industry Pills Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {industries.map((ind, idx) => (
            <div
              key={ind.id || idx}
              className="soft-hover-lift reveal-on-scroll"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(16, 17, 23, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-full)",
                padding: "10px 22px",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                backdropFilter: "blur(10px)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
              }}
            >
              {ind.icon && (
                <span
                  style={{
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                  aria-hidden="true"
                >
                  {ind.icon}
                </span>
              )}
              <span>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
