import { TopBanner } from "./components/TopBanner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FormModalProvider } from "./components/FormModalContext";
import { FormModal } from "./components/FormModal";
import { ThemeProvider } from "./components/ThemeContext";
import { lazy, Suspense, useState, useEffect } from "react";

// Lazy-load below-fold sections for faster initial paint (LCP)
const BuildSection = lazy(() => import("./components/BuildSection").then(m => ({ default: m.BuildSection })));
const StatsSection = lazy(() => import("./components/StatsSection").then(m => ({ default: m.StatsSection })));
const FeatureCards = lazy(() => import("./components/FeatureCards").then(m => ({ default: m.FeatureCards })));
const CoursesSection = lazy(() => import("./components/CoursesSection").then(m => ({ default: m.CoursesSection })));
const StudentWork = lazy(() => import("./components/StudentWork").then(m => ({ default: m.StudentWork })));
const WhyJDSection = lazy(() => import("./components/WhyJDSection").then(m => ({ default: m.WhyJDSection })));
const AlumniSection = lazy(() => import("./components/AlumniSection").then(m => ({ default: m.AlumniSection })));
const TestimonialSection = lazy(() => import("./components/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const AdmissionSteps = lazy(() => import("./components/AdmissionSteps").then(m => ({ default: m.AdmissionSteps })));
const FAQSection = lazy(() => import("./components/FAQSection").then(m => ({ default: m.FAQSection })));
const ContactForm = lazy(() => import("./components/ContactForm").then(m => ({ default: m.ContactForm })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const MobileStickyButton = lazy(() => import("./components/MobileStickyButton").then(m => ({ default: m.MobileStickyButton })));
const MobileMenu = lazy(() => import("./components/MobileMenu").then(m => ({ default: m.MobileMenu })));

/* ─────────────────────────────────────────────
 * CAMPAIGN SEO CONFIG
 * ─────────────────────────────────────────────
 * Update these values per campaign.
 * Everything below feeds into <head> meta tags,
 * Open Graph, Twitter Cards, and structured data.
 */
const SEO = {
  // Page basics
  title: "",            // e.g. "B.Des Fashion Design Degree | JD Institute"
  description: "",      // ~155 chars for Google snippet
  keywords: "",         // comma-separated target keywords
  canonicalUrl: "",     // e.g. "https://www.jdinstitute.co/campaign-slug"
  ogImage: "",          // absolute URL to a 1200×630 social share image
  themeColor: "#141201",

  // Organization info (for structured data)
  org: {
    name: "",           // "JD Institute of Fashion Technology"
    url: "",            // "https://www.jdinstitute.co"
    logo: "",           // absolute URL to logo
    phone: "",          // "+91-70426-30100"
    email: "",          // "admissions@jdinstitute.co"
    foundingDate: "",   // "1988"
    streetAddress: "",  // "#39, Daryacha Building, Hauz Khas Village"
    city: "",           // "New Delhi"
    region: "",         // "Delhi"
    postalCode: "",     // "110016"
    country: "",        // "IN"
    lat: 0,             // 28.5494
    lng: 0,             // 77.1991
    socialLinks: [] as string[], // social profile URLs
  },

  // Programs (for EducationalOrganization schema)
  programs: [] as { name: string; duration: string; credential: string }[],
  // e.g. [{ name: "B.Des in Fashion Design", duration: "P4Y", credential: "Bachelor of Design" }]

  // FAQs (for FAQPage rich snippet schema)
  faqs: [] as { question: string; answer: string }[],
  // Pull from your actual FAQ content per campaign
};

/* ─────────────────────────────────────────────
 * Schema generators (only render when config is filled)
 */
function buildOrgSchema() {
  const o = SEO.org;
  if (!o.name) return null;
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: o.name,
    url: o.url,
    logo: o.logo,
    description: SEO.description,
    foundingDate: o.foundingDate,
    telephone: o.phone,
    email: o.email,
    address: o.streetAddress ? {
      "@type": "PostalAddress",
      streetAddress: o.streetAddress,
      addressLocality: o.city,
      addressRegion: o.region,
      postalCode: o.postalCode,
      addressCountry: o.country,
    } : undefined,
    sameAs: o.socialLinks.length ? o.socialLinks : undefined,
    hasOfferCatalog: SEO.programs.length ? {
      "@type": "OfferCatalog",
      name: "Programs",
      itemListElement: SEO.programs.map(p => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: p.name,
          timeToComplete: p.duration,
          educationalProgramMode: "Full-time",
          educationalCredentialAwarded: p.credential,
        },
      })),
    } : undefined,
  };
}

function buildFaqSchema() {
  if (!SEO.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SEO.faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

function buildLocalBusinessSchema() {
  const o = SEO.org;
  if (!o.name || !o.streetAddress) return null;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: o.name,
    telephone: o.phone,
    email: o.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.streetAddress,
      addressLocality: o.city,
      addressRegion: o.region,
      postalCode: o.postalCode,
      addressCountry: o.country,
    },
    geo: o.lat ? {
      "@type": "GeoCoordinates",
      latitude: o.lat,
      longitude: o.lng,
    } : undefined,
  };
}

// Invisible loading placeholder for Suspense
function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden="true" />;
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Inject SEO meta tags into <head> — driven by SEO config above
  useEffect(() => {
    if (SEO.title) document.title = SEO.title;

    const setMeta = (name: string, content: string, attr = "name") => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // Primary SEO meta
    setMeta("description", SEO.description);
    setMeta("keywords", SEO.keywords);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    setMeta("og:type", "website", "property");
    setMeta("og:url", SEO.canonicalUrl, "property");
    setMeta("og:title", SEO.title, "property");
    setMeta("og:description", SEO.description, "property");
    setMeta("og:image", SEO.ogImage, "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", SEO.title);
    setMeta("twitter:description", SEO.description);
    setMeta("twitter:image", SEO.ogImage);

    // Mobile
    setMeta("theme-color", SEO.themeColor);
    setMeta("mobile-web-app-capable", "yes");
    setMeta("format-detection", "telephone=yes");

    // Canonical URL
    if (SEO.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = SEO.canonicalUrl;
    }

    // Preconnect hints for faster resource loading
    ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://images.unsplash.com"].forEach((href) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      }
    });

    // Set lang attribute
    document.documentElement.lang = "en";
  }, []);

  const orgSchema = buildOrgSchema();
  const faqSchema = buildFaqSchema();
  const localSchema = buildLocalBusinessSchema();

  return (
    <ThemeProvider>
    <FormModalProvider>
    <div style={{ backgroundColor: 'var(--t-body-bg, #fff9e4)', color: 'var(--t-text, #141201)' }} className="min-h-screen w-full overflow-x-clip font-['Roboto',sans-serif] transition-colors duration-500">
      {/* Structured Data — only rendered when SEO config is populated */}
      {orgSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {localSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      )}

      {/* Above-the-fold: loaded eagerly */}
      <TopBanner />
      <Navbar />
      <main>
        <HeroSection />

        {/* Below-the-fold: code-split & lazy-loaded */}
        <Suspense fallback={<SectionFallback />}>
          <BuildSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <StatsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FeatureCards />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CoursesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <StudentWork />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyJDSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AlumniSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AdmissionSteps />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <MobileStickyButton mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      </Suspense>
      <FormModal />
    </div>
    </FormModalProvider>
    </ThemeProvider>
  );
}
