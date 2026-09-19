import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import ContactCTA from "@/components/public/ContactCTA";
import TestimonialsSection from "@/components/public/TestimonialsSection";
import ClientLogosSection from "@/components/public/ClientLogosSection";
import FAQSection from "@/components/public/FAQSection";
import ProcessWorkflowSection from "@/components/public/ProcessWorkflowSection";
import ServiceGuaranteesSection from "@/components/public/ServiceGuaranteesSection";
import ServicesInteractiveGrid from "@/components/public/ServicesInteractiveGrid";
import { query } from "@/lib/db";
import { getSettings } from "@/lib/db/settings";
import type { Service, Testimonial, ClientLogo } from "@/types";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Design Services & Capabilities | Md Sakhawat Hossain",
  description:
    "Explore elite graphic design services engineered to convert — custom logo & branding, shelf-ready packaging & 3D mockups, direct-response ad creatives, and AI video editing.",
};

export default async function ServicesPage() {
  const settings = await getSettings([
    "contact_whatsapp_url",
    "contact_email",
    "site_name",
    "contact_whatsapp",
  ]);

  let dbServices: Service[] = [];
  let testimonials: Testimonial[] = [];
  let clientLogos: ClientLogo[] = [];

  try {
    const [servicesRes, testimonialsRes, logosRes] = await Promise.all([
      query<Service>(`
        SELECT s.*, m.storage_path, m.thumb_path, m.medium_path, m.alt_text
        FROM services s
        LEFT JOIN media m ON s.cover_media_id = m.id
        WHERE s.deleted_at IS NULL AND s.visible = 1
        ORDER BY s.display_order ASC
      `),
      query<Testimonial>(`
        SELECT * FROM testimonials
        WHERE visible = 1 AND deleted_at IS NULL
        ORDER BY display_order ASC
      `),
      query<ClientLogo>(`
        SELECT * FROM client_logos
        WHERE visible = 1 AND deleted_at IS NULL
        ORDER BY display_order ASC
      `),
    ]);

    dbServices = servicesRes;
    testimonials = testimonialsRes;
    clientLogos = logosRes;
  } catch {
    // Graceful fallback if database connection drops
  }

  // Curated showcase specifications with punchy scannable content
  const defaultServices = [
    {
      id: 1,
      name: "Logo & Branding",
      slug: "logo-branding",
      category: "branding" as const,
      tagline:
        "Timeless visual identities, vector trademarks, and authoritative brand guideline systems built to scale.",
      badge: "Brand Systems",
      turnaround: "24–48 Hours",
      default_image: "/images/projects/project-1.webp",
      deliverables: [
        "Primary & Secondary Vector Logomarks",
        "Comprehensive Brand Guidelines Book (PDF)",
        "Typography Hierarchy & Color Harmony Codes",
        "100% Vector Master Files (.AI, .EPS, .SVG, .PNG)",
      ],
      specs: ["100% Vector", "Print & Web Ready", "Full Commercial License"],
    },
    {
      id: 2,
      name: "Ads Creative Design",
      slug: "ads-creative-design",
      category: "social" as const,
      tagline:
        "High-converting visual creatives and scroll-stopping carousel kits engineered to maximize digital ad ROI.",
      badge: "Direct Response",
      turnaround: "24–48 Hours",
      default_image: "/images/projects/project-3.webp",
      deliverables: [
        "High-CTR Meta (FB/IG) & TikTok Ad Creatives",
        "Multi-Slide Storytelling Carousel Systems",
        "Promotional Product Launch Banners",
        "Layered Source Files (Photoshop & Figma)",
      ],
      specs: ["Hook-First Layouts", "Editable Source Files", "Split-Test Ready"],
    },
    {
      id: 3,
      name: "Packaging & Label Design",
      slug: "packaging-label-design",
      category: "packaging" as const,
      tagline:
        "Shelf-ready packaging and luxury label designs calibrated for zero-error commercial manufacturing.",
      badge: "Print & 3D",
      turnaround: "3–5 Days",
      default_image: "/images/projects/project-2.webp",
      deliverables: [
        "1:1 Accurate Manufacturer Print Dielines",
        "Photorealistic 3D Bottle & Box Mockups",
        "Finishing Specs (Gold Foil, Spot UV, Emboss)",
        "Press-Ready 300 DPI CMYK Production Files",
      ],
      specs: ["Dieline Accuracy", "3D Renders Included", "Pre-Press Verified"],
    },
    {
      id: 4,
      name: "AI Video Editing",
      slug: "ai-video-editing",
      category: "video" as const,
      tagline:
        "High-energy promotional video edits, kinetic motion typography, and sound-synced AI commercial reels.",
      badge: "Motion & Video",
      turnaround: "2–4 Days",
      default_image: "/images/projects/project-4.webp",
      deliverables: [
        "Cinematic Product Launch Reels & Shorts",
        "Sound-Synced Kinetic Typography & SFX",
        "AI Motion Graphics & Visual Synthesis",
        "Multi-Ratio Exports (9:16 Vertical, 16:9 Cinema)",
      ],
      specs: ["Dynamic Pacing", "SFX & Sound Design", "4K Ultra HD Exports"],
    },
  ];

  // Merge database items if exists
  const displayServices = defaultServices.map((def) => {
    const dbMatch = dbServices.find((s) => s.slug === def.slug || s.id === def.id);
    if (!dbMatch) return def;
    return {
      ...def,
      ...dbMatch,
      default_image: dbMatch.cover_media_id
        ? `/api/media/${dbMatch.cover_media_id}?size=medium`
        : def.default_image,
    };
  });

  const whatsappUrl =
    settings.contact_whatsapp_url ||
    (settings.contact_whatsapp
      ? `https://wa.me/${settings.contact_whatsapp.replace(/[^0-9]/g, "")}`
      : "https://wa.me/8801781955355");

  const email = settings.contact_email || "designersakhawat86@gmail.com";

  return (
    <>
      <Navbar />
      <main>
        {/* Modern Atmospheric Hero Header */}
        <section
          style={{
            paddingTop: "calc(var(--nav-height) + 54px)",
            paddingBottom: "48px",
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212, 255, 0, 0.1) 0%, transparent 70%), var(--bg-deep)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container reveal-on-scroll">
            {/* Top Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(212, 255, 0, 0.08)",
                border: "1px solid rgba(212, 255, 0, 0.25)",
                padding: "6px 16px",
                borderRadius: "var(--radius-full)",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 10px var(--accent)",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Services & Creative Capabilities
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)",
                fontWeight: 850,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                marginBottom: 16,
                lineHeight: 1.12,
              }}
            >
              Design Services Engineered <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 30%, var(--accent) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                to Build Authority & Convert
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                color: "var(--text-secondary)",
                maxWidth: "64ch",
                margin: "0 auto 36px",
                lineHeight: 1.65,
              }}
            >
              From custom vector brand systems and shelf-ready packaging dielines
              to high-converting direct-response ad creatives and AI-assisted motion reels.
            </p>

            {/* Live Trust Metrics Ticker Bar */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "24px 40px",
                background: "rgba(16, 17, 23, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-xl)",
                padding: "16px 32px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    fontFamily: "monospace",
                  }}
                >
                  150+
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  Projects Delivered
                </span>
              </div>

              <div
                style={{
                  width: 1,
                  height: 28,
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "monospace",
                  }}
                >
                  99.4%
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  Client Satisfaction
                </span>
              </div>

              <div
                style={{
                  width: 1,
                  height: 28,
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    fontFamily: "monospace",
                  }}
                >
                  24–48h
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  Rapid Turnaround
                </span>
              </div>

              <div
                style={{
                  width: 1,
                  height: 28,
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFamily: "monospace",
                  }}
                >
                  100%
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  IP Commercial Rights
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Services Showcase Grid */}
        <section
          style={{
            padding: "20px 0 80px",
            background: "var(--bg-deep)",
          }}
        >
          <div className="container">
            <ServicesInteractiveGrid
              services={displayServices}
              whatsappUrl={whatsappUrl}
            />
          </div>
        </section>

        {/* Client Logos Trust Marquee */}
        <ClientLogosSection logos={clientLogos} />

        {/* Quality Pillars & Guarantees */}
        <ServiceGuaranteesSection />

        {/* 4-Step Strategic Workflow Section */}
        <ProcessWorkflowSection />

        {/* Real Client Testimonials Slider */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Interactive FAQ Accordion */}
        <FAQSection whatsappUrl={whatsappUrl} />

        {/* Final Conversion Call to Action */}
        <ContactCTA whatsappUrl={whatsappUrl} email={email} />
      </main>
      <Footer settings={settings} />
    </>
  );
}
