"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Service } from "@/types";

interface DisplayService extends Partial<Service> {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  badge: string;
  category: "branding" | "packaging" | "social" | "video";
  default_image: string;
  deliverables: string[];
  specs: string[];
  turnaround: string;
}

interface ServicesInteractiveGridProps {
  services: DisplayService[];
  whatsappUrl: string;
}

export default function ServicesInteractiveGrid({
  services,
  whatsappUrl,
}: ServicesInteractiveGridProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Capabilities" },
    { id: "branding", label: "Brand Systems" },
    { id: "packaging", label: "3D Packaging" },
    { id: "social", label: "Ad Creatives" },
    { id: "video", label: "AI & Motion" },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category === activeTab);

  return (
    <div>
      {/* Category Filter Pills (Minimal & Clean) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 38,
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "var(--radius-full)",
                fontSize: "0.8125rem",
                fontWeight: 650,
                border: isActive
                  ? "1px solid var(--accent)"
                  : "1px solid rgba(255, 255, 255, 0.08)",
                background: isActive
                  ? "rgba(212, 255, 0, 0.12)"
                  : "rgba(16, 17, 23, 0.5)",
                color: isActive ? "var(--accent)" : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                backdropFilter: "blur(10px)",
                boxShadow: isActive
                  ? "0 0 16px rgba(212, 255, 0, 0.15)"
                  : "none",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Clean, Aesthetic Bento Grid - Same as Home Page */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {filteredServices.map((service, idx) => {
          const serviceWhatsappMsg = encodeURIComponent(
            `Hi Sakhawat, I'm interested in your ${service.name} service. Let's discuss details.`
          );
          const serviceWhatsappUrl = `${whatsappUrl.split("?")[0]}?text=${serviceWhatsappMsg}`;

          return (
            <div
              key={service.id}
              className="soft-hover-lift"
              style={{
                display: "flex",
                flexDirection: "column",
                background:
                  "linear-gradient(180deg, rgba(20, 22, 30, 0.85) 0%, rgba(12, 13, 17, 0.95) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Image Preview Container (with 16:10 aspect ratio and sleek badge) */}
              <Link
                href={`/services/${service.slug}`}
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  background: "var(--bg-elevated)",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.default_image}
                  alt={service.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="service-cover-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(12, 13, 17, 0.95) 0%, rgba(12, 13, 17, 0.25) 50%, transparent 100%)",
                  }}
                />

                {/* Top Badge: Category */}
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(7, 7, 9, 0.85)",
                    border: "1px solid rgba(212, 255, 0, 0.3)",
                    color: "var(--accent)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {service.badge}
                </span>

                {/* Turnaround Time Badge */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    background: "rgba(212, 255, 0, 0.12)",
                    border: "1px solid rgba(212, 255, 0, 0.25)",
                    color: "var(--accent)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: "var(--radius-sm)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  ⏱ {service.turnaround}
                </span>
              </Link>

              {/* Service Card Body */}
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h2
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#ffffff",
                          margin: 0,
                          lineHeight: 1.3,
                          transition: "color 0.2s ease",
                        }}
                        className="hover-accent"
                      >
                        {service.name}
                      </h2>
                    </Link>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        fontWeight: 600,
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Clean 1-2 line tagline */}
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      margin: "0 0 16px 0",
                    }}
                  >
                    {service.tagline}
                  </p>

                  {/* Scannable Deliverables List (Clean, Just like Home) */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                      marginBottom: 20,
                    }}
                  >
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          fontSize: "0.75rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontWeight: 800,
                            fontSize: "0.8125rem",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clean Actions: Details Link + Quick WhatsApp button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                    paddingTop: 14,
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.8125rem",
                      fontWeight: 650,
                      color: "var(--accent)",
                      textDecoration: "none",
                      transition: "opacity 0.2s ease",
                    }}
                  >
                    <span>View Packages</span>
                    <span>→</span>
                  </Link>

                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Discuss ${service.name} on WhatsApp`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.75rem",
                      fontWeight: 650,
                      background: "rgba(37, 211, 102, 0.1)",
                      border: "1px solid rgba(37, 211, 102, 0.3)",
                      color: "#25D366",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>💬 Chat</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
