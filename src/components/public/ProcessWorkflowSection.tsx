"use client";

import React from "react";

export default function ProcessWorkflowSection() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Briefing",
      desc: "We analyze your brand vision, target demographic, market competitors, and aesthetic preferences through a streamlined 5-minute brief.",
      badge: "Strategy First",
      deliverable: "Creative Direction & Moodboard",
    },
    {
      step: "02",
      title: "Concept Exploration",
      desc: "I develop 2 to 3 distinct, high-impact creative directions showcased with realistic 3D mockups so you visualize the real-world impact.",
      badge: "2-3 Unique Routes",
      deliverable: "Initial Presentations (24–48h)",
    },
    {
      step: "03",
      title: "Precision Refinement",
      desc: "We fine-tune typography, color palettes, spacing, and packaging dielines until every millimeter aligns perfectly with your expectations.",
      badge: "Structured Feedback",
      deliverable: "Pre-Press Manufacturer Check",
    },
    {
      step: "04",
      title: "Final Handoff & Rights",
      desc: "You receive organized production files (AI, EPS, SVG, PDF, PNG), 3D renders, font documentation, and full commercial copyright transfer.",
      badge: "100% Vector Masters",
      deliverable: "Lifetime Commercial IP",
    },
  ];

  return (
    <section
      className="section"
      id="process"
      style={{
        background: "var(--bg-surface)",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
      aria-labelledby="workflow-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: 48 }}>
          <span className="section-label">Proven Methodology</span>
          <h2
            id="workflow-heading"
            className="section-heading"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: 12,
            }}
          >
            How We Turn Ideas Into Iconic Brands
          </h2>
          <p
            className="section-subtext"
            style={{ maxWidth: 640, margin: "0 auto", fontSize: "1rem" }}
          >
            A disciplined, 4-step creative pipeline that eliminates guesswork, minimizes delays, and guarantees world-class results.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            position: "relative",
          }}
        >
          {steps.map((item) => (
            <div
              key={item.step}
              className="soft-hover-lift reveal-on-scroll"
              style={{
                background: "rgba(13, 14, 20, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: "var(--radius-xl)",
                padding: "32px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Watermark Step Number */}
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  right: 12,
                  fontSize: "4.5rem",
                  fontWeight: 900,
                  fontFamily: "monospace",
                  color: "rgba(255, 255, 255, 0.03)",
                  userSelect: "none",
                  pointerEvents: "none",
                  lineHeight: 1,
                }}
              >
                {item.step}
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.875rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      background: "rgba(212, 255, 0, 0.1)",
                      border: "1px solid rgba(212, 255, 0, 0.25)",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    STEP {item.step}
                  </span>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: "0.875rem" }}>✓</span>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
