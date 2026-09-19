"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  category: "all" | "deliverables" | "process" | "packaging" | "pricing";
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "deliverables",
    question: "What exact source files and deliverables will I receive?",
    answer:
      "Upon final sign-off, you receive full master production packages: 100% editable vector source files (.AI, .EPS, .SVG, .PDF), print-ready CMYK files at 300 DPI with trim marks and bleeds, web-optimized RGB assets (.PNG with transparent background, .JPG, .WebP), and comprehensive brand guideline documentation detailing font pairings, color hex codes, and spacing rules.",
    highlight: "100% Vector Masters (.AI, .EPS, .SVG) + Print-Ready PDFs",
  },
  {
    id: "faq-2",
    category: "process",
    question: "What is your typical project turnaround time?",
    answer:
      "Turnaround depends on project scope. Initial logo concepts and ad creative sets are delivered within 24 to 48 hours. Comprehensive visual identities or complex packaging suites take 3 to 5 business days. Urgent expedited deliveries (under 24 hours) can be arranged upon request.",
    highlight: "24–48 Hours for Initial Concepts",
  },
  {
    id: "faq-3",
    category: "process",
    question: "How do revisions work if I need changes?",
    answer:
      "Every project begins with 2 to 3 distinct visual directions so you can choose the best route. We then work through structured revision rounds covering typography, color nuances, sizing, and layout adjustments until you are completely thrilled with the final result.",
    highlight: "Structured Revision Rounds to Guarantee Perfection",
  },
  {
    id: "faq-4",
    category: "packaging",
    question: "Can you design 100% accurate print-ready dielines for my manufacturer?",
    answer:
      "Yes! I build exact 1:1 manufacturer dielines for boxes, cosmetic bottles, pouches, tubes, and labels. Files include precise cut lines, crease/fold indicators, bleed margins, and dedicated separation layers for special finishes like gold foil stamping, spot UV gloss, and embossing.",
    highlight: "Zero-Error Manufacturer Dieline Compatibility",
  },
  {
    id: "faq-5",
    category: "pricing",
    question: "Do I own 100% commercial rights and intellectual property?",
    answer:
      "Absolutely. Once final payment is completed, 100% full commercial copyright and intellectual property rights are officially transferred to you. You are free to trademark, manufacture, and distribute your designs globally without any recurring royalties or licensing fees.",
    highlight: "100% Exclusive Commercial IP Ownership",
  },
  {
    id: "faq-6",
    category: "pricing",
    question: "What information or materials do I need to get started?",
    answer:
      "To hit the ground running, simply share your business name, target demographic, any preferred color ideas or moodboard references, and your timeline. For packaging projects, having your container dimensions or manufacturer template is ideal. If you don't have all details yet, I will gladly guide you through the discovery phase.",
    highlight: "Quick 5-Minute Creative Brief",
  },
];

interface FAQSectionProps {
  whatsappUrl?: string;
}

export default function FAQSection({
  whatsappUrl = "https://wa.me/8801781955355",
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "deliverables", label: "Deliverables & Files" },
    { id: "process", label: "Process & Timing" },
    { id: "packaging", label: "Packaging Specs" },
    { id: "pricing", label: "Rights & Pricing" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      className="section"
      id="faq"
      style={{
        background: "var(--bg-deep)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "var(--space-2xl)",
        paddingBottom: "var(--space-3xl)",
      }}
      aria-labelledby="faq-heading"
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 350,
          background: "radial-gradient(ellipse, rgba(212, 255, 0, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center reveal-on-scroll" style={{ marginBottom: 40 }}>
          <span className="section-label">Clarity & Confidence</span>
          <h2
            id="faq-heading"
            className="section-heading"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              marginBottom: 12,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="section-subtext"
            style={{ maxWidth: 620, margin: "0 auto", fontSize: "1rem" }}
          >
            Everything you need to know about working with Sakhawat — from deliverables and dielines to turnaround times and copyright ownership.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 24,
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    border: isActive
                      ? "1px solid var(--accent)"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    background: isActive
                      ? "rgba(212, 255, 0, 0.12)"
                      : "rgba(16, 17, 23, 0.6)",
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {filteredFaqs.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg, rgba(22, 24, 34, 0.95) 0%, rgba(13, 14, 20, 0.9) 100%)"
                    : "rgba(16, 17, 23, 0.65)",
                  border: isOpen
                    ? "1px solid rgba(212, 255, 0, 0.35)"
                    : "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isOpen
                    ? "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 255, 0, 0.08)"
                    : "none",
                }}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: isOpen ? "var(--accent)" : "var(--text-muted)",
                        background: isOpen
                          ? "rgba(212, 255, 0, 0.1)"
                          : "rgba(255, 255, 255, 0.04)",
                        padding: "3px 8px",
                        borderRadius: 4,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.0625rem",
                        fontWeight: 600,
                        color: isOpen ? "#ffffff" : "var(--text-primary)",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Sleek Plus/Minus Toggle Icon */}
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isOpen
                        ? "var(--accent)"
                        : "rgba(255, 255, 255, 0.06)",
                      color: isOpen ? "#070709" : "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    +
                  </div>
                </button>

                {/* Animated Answer Body */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 58px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                      marginTop: 4,
                      paddingTop: 16,
                      animation: "fadeIn 0.25s ease-in-out",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        margin: 0,
                        marginBottom: item.highlight ? 14 : 0,
                      }}
                    >
                      {item.answer}
                    </p>

                    {item.highlight && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          background: "rgba(212, 255, 0, 0.08)",
                          border: "1px solid rgba(212, 255, 0, 0.25)",
                          padding: "6px 12px",
                          borderRadius: "var(--radius-sm)",
                          color: "var(--accent)",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                        }}
                      >
                        <span>✓</span>
                        <span>{item.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Inquiries Callout */}
        <div
          style={{
            maxWidth: 860,
            margin: "36px auto 0",
            background: "linear-gradient(135deg, rgba(212, 255, 0, 0.06) 0%, rgba(13, 14, 20, 0.6) 100%)",
            border: "1px solid rgba(212, 255, 0, 0.2)",
            borderRadius: "var(--radius-xl)",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 4,
              }}
            >
              Have a question not listed here?
            </h4>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              Get a direct, friendly answer regarding your specific project within an hour.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary soft-hover-lift"
            style={{
              padding: "10px 22px",
              fontSize: "0.875rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>Ask Sakhawat on WhatsApp</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
