"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { Testimonial } from "@/types";

interface CreatorProofSectionProps {
  settings: Record<string, string>;
  testimonials: Testimonial[];
}

export default function CreatorProofSection({
  settings,
  testimonials,
}: CreatorProofSectionProps) {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  const fallbackReviews = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO, Aura Tech",
      quote:
        "Sakhawat transformed our brand identity completely. The visual guidelines and vector assets elevated our product to compete on a global scale.",
    },
    {
      name: "Sophie Laurent",
      role: "Creative Director, Maison Luxe",
      quote:
        "His eye for luxury packaging, precision dielines, and 3D photorealistic mockups exceeded every benchmark we set.",
    },
    {
      name: "Rahim Ahmed",
      role: "Co-Founder, QuickMart",
      quote:
        "The promotional ad creatives and social media post kits Sakhawat created gave us an instant 45% bump in click-through rates. Our go-to designer!",
    },
    {
      name: "Marcus Vance",
      role: "Lead Producer, Pulse Media",
      quote:
        "Mesmerizing AI video motion graphics with an international standard of rhythm, pacing, and visual storytelling.",
    },
  ];

  const reviews =
    testimonials && testimonials.length > 0
      ? testimonials.map((t) => ({
          name: t.client_name || (t as unknown as { author_name?: string }).author_name || "Verified Client",
          role: `${t.designation || (t as unknown as { author_role?: string }).author_role || "Founder"}${t.company ? `, ${t.company}` : ""}`,
          quote: t.text || (t as unknown as { content?: string }).content || "",
        }))
      : fallbackReviews;

  // Auto-advance review every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const tools = [
    { name: "Photoshop", icon: "Ps" },
    { name: "Illustrator", icon: "Ai" },
    { name: "Figma", icon: "Fg" },
    { name: "After Effects", icon: "Ae" },
    { name: "Midjourney", icon: "Mj" },
    { name: "ChatGPT", icon: "GPT" },
    { name: "Google Flow", icon: "GF" },
  ];

  const activeReview = reviews[currentReviewIdx];

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
      aria-labelledby="creator-proof-heading"
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* Left Card: Modern Creator Identity */}
          <div
            className="soft-hover-lift reveal-on-scroll"
            style={{
              background: "rgba(16, 18, 26, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              padding: "36px 32px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
            }}
          >
            <div>
              {/* Creator Header with Avatar & Live Availability */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  marginBottom: 26,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    padding: 2,
                    background: "linear-gradient(135deg, var(--accent) 0%, rgba(212,255,0,0.2) 100%)",
                    boxShadow: "0 0 20px rgba(212, 255, 0, 0.2)",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/images/profile-square.jpg"
                      alt="Md Sakhawat Hossain"
                      fill
                      sizes="64px"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  </div>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(34, 197, 94, 0.1)",
                      border: "1px solid rgba(34, 197, 94, 0.25)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#22c55e",
                        boxShadow: "0 0 6px #22c55e",
                        animation: "pulse 2s infinite",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: "#22c55e",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Available For Projects
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      margin: "0 0 2px 0",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {settings.site_name || "Md Sakhawat Hossain"}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    {settings.creator_tagline || "Visual Designer & Brand Architect"}
                  </div>
                </div>
              </div>

              {/* Designer Philosophy Quote Box */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.025)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderLeft: "3px solid var(--accent)",
                  borderRadius: "0 12px 12px 0",
                  padding: "14px 18px",
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255, 255, 255, 0.85)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  &ldquo;{settings.creator_philosophy || "I craft visual systems that do not just look aesthetic — they command attention, establish instant credibility, and drive real conversions."}&rdquo;
                </p>
              </div>

              {/* Toolset Pills */}
              <div style={{ marginBottom: 24 }}>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  Core Toolstack:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {tools.map((t) => (
                    <span
                      key={t.name}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.07)",
                        borderRadius: "8px",
                        padding: "5px 10px",
                        fontSize: "0.75rem",
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        transition: "border-color 0.2s ease",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontWeight: 800,
                          fontSize: "0.6875rem",
                          fontFamily: "monospace",
                        }}
                      >
                        {t.icon}
                      </span>
                      <span>{t.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom 3 Stats Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                paddingTop: 20,
                borderTop: "1px solid rgba(255, 255, 255, 0.07)",
                textAlign: "center",
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {settings.stat_years_exp || "3+"}
                </span>
                <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Years Exp
                </span>
              </div>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {settings.stat_projects || "590+"}
                </span>
                <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Projects
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    fontFamily: "var(--font-heading)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {settings.stat_satisfaction || "99%"}
                </span>
                <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Right Card: Modern Client Testimonial Spotlight */}
          <div
            className="soft-hover-lift reveal-on-scroll"
            style={{
              background: "rgba(16, 18, 26, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "24px",
              padding: "36px 32px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
            }}
          >
            <div>
              {/* Card Header: Label & Modern Star Rating */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 26,
                }}
              >
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Verified Endorsements
                </span>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "rgba(212, 255, 0, 0.08)",
                    border: "1px solid rgba(212, 255, 0, 0.2)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                  }}
                >
                  <span style={{ color: "var(--accent)", fontSize: "0.75rem", letterSpacing: 1 }}>
                    ★★★★★
                  </span>
                  <span style={{ color: "#ffffff", fontSize: "0.6875rem", fontWeight: 700, marginLeft: 2 }}>
                    5.0
                  </span>
                </div>
              </div>

              {/* Testimonial Quote Body with Modern Typography */}
              <div
                style={{
                  minHeight: 180,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    color: "var(--accent)",
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    fontFamily: "serif",
                    opacity: 0.35,
                    marginBottom: -8,
                  }}
                >
                  “
                </div>
                <p
                  style={{
                    fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                    lineHeight: 1.55,
                    color: "#f4f4f5",
                    fontWeight: 500,
                    margin: "0 0 24px 0",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {activeReview.quote}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "rgba(212, 255, 0, 0.1)",
                      border: "1px solid rgba(212, 255, 0, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                    }}
                  >
                    {activeReview.name.charAt(0)}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {activeReview.name}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {activeReview.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation Dots & Modern WhatsApp Trigger */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 20,
                borderTop: "1px solid rgba(255, 255, 255, 0.07)",
                marginTop: 20,
              }}
            >
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                {reviews.map((_, rIdx) => (
                  <button
                    key={rIdx}
                    onClick={() => setCurrentReviewIdx(rIdx)}
                    style={{
                      width: currentReviewIdx === rIdx ? 22 : 6,
                      height: 6,
                      borderRadius: 3,
                      background:
                        currentReviewIdx === rIdx
                          ? "var(--accent)"
                          : "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    aria-label={`View review ${rIdx + 1}`}
                  />
                ))}
              </div>

              <a
                href={
                  settings.contact_whatsapp_url ||
                  "https://wa.me/8801781955355"
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 650,
                  color: "#25D366",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(37, 211, 102, 0.08)",
                  border: "1px solid rgba(37, 211, 102, 0.25)",
                  transition: "all 0.25s ease",
                }}
              >
                <span>💬 Direct WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
