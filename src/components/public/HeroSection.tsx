"use client";

import { useState } from "react";
import CleanPortfolioLightbox, { LightboxItem } from "./CleanPortfolioLightbox";
import type { Project } from "@/types";

interface HeroSectionProps {
  settings: Record<string, string>;
  featuredProjects?: Project[];
}

export default function HeroSection({ settings, featuredProjects = [] }: HeroSectionProps) {
  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);
  const whatsappMsg = encodeURIComponent(
    "Hi Sakhawat, I saw your portfolio and would like to discuss a design project."
  );
  const rawWaNum = settings.contact_whatsapp
    ? settings.contact_whatsapp.replace(/[^0-9]/g, "")
    : "8801781955355";
  const whatsappUrl =
    settings.contact_whatsapp_url || `https://wa.me/${rawWaNum}?text=${whatsappMsg}`;

  const heroHeadline = settings.hero_headline || "Crafting Visual Identities That Demand Attention";
  const heroSubline =
    settings.hero_subline ||
    "Brand identity, 3D packaging, high-converting social creatives & AI motion reels.";
  const primaryCtaLabel = settings.hero_cta_primary_label || "Explore Selected Work";
  const primaryCtaHref = settings.hero_cta_primary_href || "#featured-work";

  // Parse headline to add radiant gradient accent to the end
  const headlineWords = heroHeadline.trim().split(" ");
  const accentWordCount = headlineWords.length > 3 ? 2 : 1;
  const mainWords = headlineWords.slice(0, headlineWords.length - accentWordCount).join(" ");
  const accentWords = headlineWords.slice(headlineWords.length - accentWordCount).join(" ");

  // Static fallback cards (used when no DB projects are available)
  const staticCards = [
    {
      id: 1,
      badge: "Brand Systems",
      title: "Aura Tech Guidelines",
      subtitle: "Minimalist Identity",
      image: "/images/projects/project-1.webp",
      slug: null as string | null,
      videoUrl: null as string | null,
      isVideo: false,
    },
    {
      id: 2,
      badge: "Luxury Packaging",
      title: "Maison Luxe 3D",
      subtitle: "Perfume Dieline & Foil",
      image: "/images/projects/project-2.webp",
      slug: null as string | null,
      videoUrl: null as string | null,
      isVideo: false,
    },
    {
      id: 3,
      badge: "Social Media Ads",
      title: "Apex Athletics Kit",
      subtitle: "High-CTR Carousels",
      image: "/images/projects/project-3.webp",
      slug: null as string | null,
      videoUrl: null as string | null,
      isVideo: false,
    },
    {
      id: 4,
      badge: "AI Motion & Video",
      title: "Zenith AI Launch",
      subtitle: "Kinetic Motion Reel",
      image: "/images/projects/project-4.webp",
      slug: null as string | null,
      videoUrl: "https://www.youtube.com/watch?v=EngW7tLk6R8",
      isVideo: true,
    },
  ];

  // Build cards from DB projects; fall back to static if none
  const showcaseCards =
    featuredProjects.length > 0
      ? featuredProjects.slice(0, 4).map((p) => ({
          id: p.id,
          badge: (p as unknown as { service_name?: string }).service_name || "Portfolio",
          title: p.title,
          subtitle: p.short_description || "",
          image: p.cover_media_id
            ? `/api/media/${p.cover_media_id}?size=medium`
            : "/images/projects/project-1.webp",
          slug: p.slug,
          videoUrl: p.video_url || null,
          isVideo: !!(p.video_url),
        }))
      : staticCards;

  const lightboxItems: LightboxItem[] = showcaseCards.map((c) => ({
    id: c.id,
    image: c.image,
    videoUrl: c.videoUrl,
    isVideo: c.isVideo,
  }));

  return (
    <section
      className="hero"
      id="hero"
      aria-label="Hero section"
      style={{
        paddingTop: "calc(var(--nav-height) + 50px)",
        paddingBottom: "50px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(212, 255, 0, 0.14) 0%, rgba(8, 8, 10, 0) 75%), var(--bg-deep)",
      }}
    >
      {/* Ambient Pulsing Glow Orbs */}
      <div
        className="animate-soft-aura"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 450,
          background:
            "radial-gradient(circle, rgba(212, 255, 0, 0.08) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{ textAlign: "center", position: "relative", zIndex: 2 }}
      >
        {/* Authentic Designer Brand Badge */}
        <div
          className="reveal-on-scroll delay-1 animate-soft-float"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 18px",
            background: "rgba(18, 20, 28, 0.75)",
            border: "1px solid rgba(212, 255, 0, 0.25)",
            borderRadius: "var(--radius-full)",
            marginBottom: 24,
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 24px rgba(212, 255, 0, 0.08)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              color: "#f4f4f5",
              fontWeight: 700,
              letterSpacing: "0.06em",
              fontSize: "12px",
              fontFamily: "var(--font-heading)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>{settings.site_name || "Md Sakhawat Hossain"}</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>
              {settings.hero_badge_text || "Visual Designer"}
            </span>
          </span>
        </div>

        {/* High-Impact Main Headline (Dynamic from Settings) */}
        <h1
          className="reveal-on-scroll delay-2"
          style={{
            fontSize: "clamp(2.5rem, 5.8vw, 4.5rem)",
            fontWeight: 850,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            maxWidth: "24ch",
            margin: "0 auto 18px",
          }}
        >
          {mainWords ? `${mainWords} ` : ""}
          <span
            style={{
              background:
                "linear-gradient(135deg, #ffffff 20%, var(--accent) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 35px rgba(212, 255, 0, 0.35)",
            }}
          >
            {accentWords}
          </span>
        </h1>

        {/* Concise Value Proposition (Dynamic from Settings) */}
        <p
          className="reveal-on-scroll delay-3"
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            color: "var(--text-secondary)",
            maxWidth: "680px",
            margin: "0 auto 34px",
            lineHeight: 1.6,
            textWrap: "balance",
          }}
        >
          {heroSubline}
        </p>

        {/* High-Energy Dual Action CTAs (Dynamic from Settings) */}
        <div
          className="reveal-on-scroll delay-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 44,
          }}
        >
          <a
            href={primaryCtaHref}
            className="btn btn-primary soft-hover-lift"
            style={{
              padding: "14px 30px",
              fontSize: "0.9375rem",
              fontWeight: 800,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 0 28px rgba(212, 255, 0, 0.4)",
            }}
          >
            <span>{primaryCtaLabel}</span>
            <span style={{ fontSize: "1.1rem" }}>↓</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline soft-hover-lift"
            style={{
              padding: "14px 26px",
              fontSize: "0.9375rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderColor: "rgba(37, 211, 102, 0.4)",
              color: "#25D366",
            }}
          >
            <span>💬 Quick Chat on WhatsApp</span>
          </a>
        </div>

        {/* Floating Kinetic Fan-Out Cards with Dynamic Float Animation */}
        <div
          className="hero-deck-container reveal-soft-scale delay-5"
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div className="hero-deck">
            {showcaseCards.map((card, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setActiveLightboxIdx(idx)}
                className="deck-card soft-hover-lift"
                aria-label={`Preview ${card.title}`}
                style={{
                  border: "none",
                  padding: 0,
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div
                  className="deck-card-image"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="eager"
                    className="service-cover-img"
                  />
                  {card.isVideo && (
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        background: "rgba(212, 255, 0, 0.18)",
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                        fontSize: 10,
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: "var(--radius-full)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      ▶ Reel
                    </span>
                  )}
                </div>

                <div className="deck-card-info">
                  <div className="deck-card-title">{card.title}</div>
                  <div className="deck-card-action-btn" aria-hidden="true">
                    {card.isVideo ? "▶" : "↗"}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Portfolio Lightbox Modal */}
      <CleanPortfolioLightbox
        items={lightboxItems}
        currentIndex={activeLightboxIdx}
        onClose={() => setActiveLightboxIdx(null)}
        onNavigate={(idx) => setActiveLightboxIdx(idx)}
      />
    </section>
  );
}
