"use client";

import React from "react";
import Link from "next/link";
import type { Service } from "@/types";

interface UnifiedCapabilitiesBentoProps {
  dbServices?: Service[];
}

export default function UnifiedCapabilitiesBento({ dbServices = [] }: UnifiedCapabilitiesBentoProps) {
  const staticCapabilities = [
    {
      id: "brand",
      title: "Logo & Brand Systems",
      tagline: "Timeless visual identities & complete brand architecture.",
      image: "/images/projects/project-1.webp",
      badge: "Brand Identity",
      slug: "logo-branding",
      tags: ["Primary & Monogram Marks", "Color & Typography Rules", "Vector AI, SVG, EPS"],
      metric: "100% Vector Precision",
    },
    {
      id: "packaging",
      title: "3D Packaging & Labels",
      tagline: "Shelf-ready dielines calibrated for flawless manufacturing.",
      image: "/images/projects/project-2.webp",
      badge: "Print & 3D",
      slug: "packaging-label-design",
      tags: ["1:1 Manufacturer Dielines", "3D Photorealistic Mockups", "Gold Foil & Spot UV Specs"],
      metric: "Pre-Press Guaranteed",
    },
    {
      id: "social",
      title: "Ads Creative Design",
      tagline: "High-converting social ad creatives engineered to scale revenue.",
      image: "/images/projects/project-3.webp",
      badge: "Direct Response",
      slug: "ads-creative-design",
      tags: ["Meta & TikTok Ad Formats", "Storytelling Carousels", "Layered Photoshop & Figma"],
      metric: "+45% Average CTR",
    },
    {
      id: "video",
      title: "AI Video Editing & Motion",
      tagline: "Cinematic commercial reels & dynamic kinetic typography.",
      image: "/images/projects/project-4.webp",
      badge: "Motion & AI",
      slug: "ai-video-editing",
      tags: ["High-Energy Pacing", "Sound-Synced SFX & Transitions", "4K Vertical & Widescreen"],
      metric: "3-Second Hook Mastery",
    },
  ];

  // Merge DB service cover images into static capabilities
  const capabilities = staticCapabilities.map((cap) => {
    const dbMatch = dbServices.find((s) => s.slug === cap.slug);
    return {
      ...cap,
      title: dbMatch?.name || cap.title,
      image: dbMatch?.cover_media_id
        ? `/api/media/${dbMatch.cover_media_id}?size=medium`
        : cap.image,
    };
  });

  const workflowSteps = [
    { step: "01", name: "Discovery", desc: "Brief & Moodboard" },
    { step: "02", name: "Concepts", desc: "2–3 Unique Routes" },
    { step: "03", name: "Refinements", desc: "Pre-Press Checks" },
    { step: "04", name: "Master Delivery", desc: "100% Vector IP" },
  ];

  return (
    <section
      className="section"
      id="capabilities"
      style={{
        background: "var(--bg-deep)",
        position: "relative",
        paddingTop: "var(--space-2xl)",
        paddingBottom: "var(--space-2xl)",
      }}
      aria-labelledby="capabilities-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="reveal-on-scroll"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div>
            <span className="section-label">Core Specialization</span>
            <h2
              id="capabilities-heading"
              className="section-heading"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                marginBottom: 6,
              }}
            >
              Services Engineered To Scale
            </h2>
            <p className="section-subtext" style={{ margin: 0, maxWidth: 540 }}>
              Zero generic clutter. Every visual asset is mathematically calibrated for high-impact commercial performance.
            </p>
          </div>

          <Link href="/services" className="btn btn-outline soft-hover-lift">
            Explore All Capabilities & Rates →
          </Link>
        </div>

        {/* 4-Tile High-Impact Bento Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 28,
          }}
        >
          {capabilities.map((cap) => (
            <Link
              key={cap.id}
              href={`/services/${cap.slug}`}
              className="soft-hover-lift reveal-on-scroll"
              style={{
                display: "flex",
                flexDirection: "column",
                background:
                  "linear-gradient(180deg, rgba(20, 22, 30, 0.85) 0%, rgba(12, 13, 17, 0.95) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "10px",
                overflow: "hidden",
                textDecoration: "none",
                position: "relative",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  background: "#0a0b0f",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="service-cover-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "20px 22px 22px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: 16,
                      margin: "0 0 14px 0",
                    }}
                  >
                    {cap.tagline}
                  </p>

                  {/* Scannable Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    {cap.tags.map((tag, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        <span style={{ color: "var(--accent)", fontWeight: 800 }}>
                          ✓
                        </span>
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 14,
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  <span>View Details & Packages</span>
                  <span>↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Unified 4-Step Production Pipeline Tracker */}
        <div
          className="reveal-on-scroll"
          style={{
            background:
              "linear-gradient(135deg, rgba(20, 22, 30, 0.6) 0%, rgba(12, 13, 17, 0.8) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "var(--radius-xl)",
            padding: "20px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 20,
            alignItems: "center",
          }}
        >
          {workflowSteps.map((ws) => (
            <div
              key={ws.step}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(212, 255, 0, 0.1)",
                  border: "1px solid rgba(212, 255, 0, 0.3)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "monospace",
                  fontSize: "0.8125rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {ws.step}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {ws.name}
                </h4>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {ws.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
