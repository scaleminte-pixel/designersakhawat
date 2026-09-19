import { query } from "@/lib/db";
import { getSettings } from "@/lib/db/settings";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import HeroSection from "@/components/public/HeroSection";
import KineticProofRibbon from "@/components/public/KineticProofRibbon";
import ProjectsSection from "@/components/public/ProjectsSection";
import UnifiedCapabilitiesBento from "@/components/public/UnifiedCapabilitiesBento";
import CreatorProofSection from "@/components/public/CreatorProofSection";
import FAQSection from "@/components/public/FaqSection";
import ContactCTA from "@/components/public/ContactCTA";
import FloatingWhatsApp from "@/components/public/FloatingWhatsApp";
import type { Project, Testimonial, Service } from "@/types";
import type { Metadata } from "next";

export const revalidate = 60; // ISR

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings([
    "site_name",
    "site_tagline",
    "seo_default_description",
  ]);
  return {
    title: `${settings.site_name || "Md Sakhawat Hossain"} — ${settings.site_tagline || "Creative Graphic Designer"}`,
    description: settings.seo_default_description,
  };
}

export default async function HomePage() {
  const settings = await getSettings([
    "site_name",
    "site_tagline",
    "hero_headline",
    "hero_subline",
    "hero_badge_text",
    "hero_cta_primary_label",
    "hero_cta_primary_href",
    "hero_cta_secondary_label",
    "hero_cta_secondary_href",
    "creator_tagline",
    "creator_philosophy",
    "stat_years_exp",
    "stat_projects",
    "stat_satisfaction",
    "about_bio",
    "contact_whatsapp_url",
    "contact_email",
    "contact_whatsapp",
  ]);

  let featuredProjects: Project[] = [];
  let testimonials: Testimonial[] = [];
  let dbServices: Service[] = [];

  try {
    const [projectsRes, testimonialsRes, servicesRes] = await Promise.all([
      query<Project>(`
        SELECT p.id, p.title, p.slug, p.cover_media_id, p.video_url, p.service_id, 
          p.client, p.short_description, p.featured, p.display_order, p.status,
          m.storage_path as cover_path, m.thumb_path as cover_thumb, m.medium_path as cover_medium, m.alt_text as cover_alt,
          s.name as service_name, s.slug as service_slug
        FROM projects p
        LEFT JOIN media m ON p.cover_media_id = m.id
        LEFT JOIN services s ON p.service_id = s.id
        WHERE p.status = 'published' AND p.featured = 1
        ORDER BY p.display_order ASC
        LIMIT 10
      `),
      query<Testimonial>(`
        SELECT t.id, 
          t.author_name as client_name,
          t.author_role as designation,
          t.company,
          t.content as text,
          t.rating,
          t.photo_media_id
        FROM testimonials t
        WHERE t.deleted_at IS NULL AND t.visible = 1
        ORDER BY t.display_order ASC
      `),
      query<Service>(
        "SELECT id, name, slug, cover_media_id FROM services WHERE deleted_at IS NULL AND visible = 1 ORDER BY display_order ASC"
      ),
    ]);

    featuredProjects = projectsRes;
    testimonials = testimonialsRes;
    dbServices = servicesRes;
  } catch {
    // Graceful fallback
  }

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
        {/* 1. Cinematic Kinetic Hero */}
        <HeroSection settings={settings} featuredProjects={featuredProjects} />

        {/* 2. Seamless Infinite Speed Ticker (Proof & Brands Combined) */}
        <KineticProofRibbon />

        {/* 3. Selected Works Showcase (Visual Masterpieces Front & Center) */}
        <div id="featured-work">
          <ProjectsSection
            projects={featuredProjects}
            title="Selected Commercial Works"
            label="Visual Showcase"
            showViewAll
          />
        </div>

        {/* 4. Unified Capabilities & 4-Step Pipeline Bento */}
        <UnifiedCapabilitiesBento dbServices={dbServices} />

        {/* 5. Creator Spotlight & Client Endorsements */}
        <CreatorProofSection
          settings={settings}
          testimonials={testimonials}
        />

        {/* 6. Interactive FAQ Accordion */}
        <FAQSection whatsappUrl={whatsappUrl} />

        {/* 7. High-Converting Closing CTA */}
        <ContactCTA
          whatsappUrl={whatsappUrl}
          email={email}
        />
      </main>
      <Footer settings={settings} />
      <FloatingWhatsApp number="8801781955355" />
    </>
  );
}
