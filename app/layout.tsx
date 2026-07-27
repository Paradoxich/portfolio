// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { TopStickyBar } from "@/components/layout/TopStickyBar";
import { MobileFooter } from "@/components/layout/MobileFooter";
import { ColorSchemeProvider } from "@/components/theme/ColorSchemeProvider";
import { HireDrawerProvider } from "@/components/contact/HireDrawerContext";

const SITE_DESCRIPTION =
  "Senior product designer with 9 years of experience, now shipping production React alongside the design work. Case studies, a live design system, and a portfolio built as a real product.";

export const metadata: Metadata = {
  metadataBase: new URL("https://anabeverin.com"),
  title: {
    default: "Ana Beverin — Product Designer & Design Engineer",
    template: "%s — Ana Beverin",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Ana Beverin",
    title: "Ana Beverin — Product Designer & Design Engineer",
    description: SITE_DESCRIPTION,
    url: "https://anabeverin.com",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "Ana Beverin — Product Designer & Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Beverin — Product Designer & Design Engineer",
    description: SITE_DESCRIPTION,
    images: ["/og/og-default.png"],
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ana Beverin",
  url: "https://anabeverin.com",
  email: "ana.beverin@gmail.com",
  jobTitle: "Senior Product Designer",
  description:
    "Senior product designer with 9 years of experience. Turns ambiguity into clear direction, shaped flows, and visual systems ready to ship. Works across the full design spectrum — product, visual, brand, and illustration — typically as the sole designer embedded with founders and engineering.",
  knowsAbout: [
    "Product design",
    "Visual design",
    "Brand identity",
    "Illustration",
    "Interaction design",
    "0-to-1 product shaping",
    "Design systems",
    "User flows and information architecture",
    "Interactive prototyping",
    "Developer tools",
    "AI infrastructure",
    "Marketplace design",
    "Logistics SaaS",
    "Design-to-code workflows",
    "Figma",
    "Framer",
    "Cursor",
    "Claude Code",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Vercel",
    "GitHub",
    "Adobe CC",
    "Linear",
    "Notion",
  ],
  sameAs: ["https://linkedin.com/in/paradoxich"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Opatija",
    addressCountry: "HR",
  },
  worksFor: {
    "@type": "Organization",
    name: "Kofa Design",
    description: "Independent product design consultancy for international remote work",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Faculty of Graphic Arts, University of Zagreb",
      description: "Masters, Multimedia",
    },
    {
      "@type": "EducationalOrganization",
      name: "University of Applied Sciences",
      description: "Bachelors, IT Design",
    },
  ],
  workExample: [
    {
      "@type": "CreativeWork",
      name: "Shuttle — Developer Console Redesign",
      url: "https://anabeverin.com/projects/shuttle",
      description:
        "Sole product designer supporting platform growth to 20,000+ developers and 120,000+ deployments. Led complete console audit and redesign, introducing consistent UI patterns, design system, and information architecture across dev console, web, and growth surfaces.",
    },
    {
      "@type": "CreativeWork",
      name: "Neptune — AI Infrastructure Brand and Web",
      url: "https://anabeverin.com/projects/neptune",
      description:
        "Designed brand identity and web experience for an AI infrastructure platform. Built and shipped a scripted agent-chat animation with AI, live on the platform website.",
    },
    {
      "@type": "CreativeWork",
      name: "OptimoRoute — Route Optimization Platform",
      url: "https://anabeverin.com/projects/optimoroute",
      description:
        "Lead product designer for a logistics route optimization platform used worldwide. Managed a two-person design team. Redesign increased returning session duration by 34% and improved discoverability across Analytics, Dispatch, and Planning.",
    },
    {
      "@type": "CreativeWork",
      name: "Dealio — Mobile Marketplace",
      description:
        "Designed end-to-end mobile marketplace experience from concept to launch in under one year. Simplified seller ad creation, improved buyer discovery, and introduced structured buyer-seller communication. Launched with 78% CSAT.",
    },
    {
      "@type": "CreativeWork",
      name: "MixLodge — Studio Booking Marketplace",
      url: "https://anabeverin.com/projects/mixlodge",
      description:
        "Defined MVP structure for a marketplace connecting musicians and producers. Designed end-to-end flows across discovery, booking, and collaboration. Delivered implementation-ready product architecture in 3 months.",
    },
    {
      "@type": "CreativeWork",
      name: "Portfolio — anabeverin.com",
      url: "https://anabeverin.com/projects/portfolio",
      description:
        "Custom-built portfolio using Next.js, React, and Tailwind CSS. Developed with AI-assisted tooling including a bidirectional Figma MCP design-to-code workflow.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="warm" className={`${GeistSans.variable} ${GeistSans.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </head>
      <body className={GeistMono.variable}>
        <ColorSchemeProvider>
          <HireDrawerProvider>
            <div className="flex h-screen print:h-auto flex-col overflow-hidden print:overflow-visible">
              <Sidebar />
              <MobileNav />
              <main className="flex min-h-0 flex-1 flex-col min-w-0 overflow-y-auto print:overflow-visible with-sidebar print:ml-0">
                <TopStickyBar />
                {children}
                <MobileFooter />
              </main>
            </div>
          </HireDrawerProvider>
        </ColorSchemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
