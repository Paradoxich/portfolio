// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { ColorSchemeProvider } from "@/components/theme/ColorSchemeProvider";
import { HireDrawerProvider } from "@/components/contact/HireDrawerContext";

const SITE_DESCRIPTION =
  "I design and build products from idea to production. My background is in product design, and over the last year I've moved into design engineering — using AI-assisted development to ship production-ready apps. Case studies, a live design system, and a portfolio built as a real product.";

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
  jobTitle: "Product Designer & Design Engineer",
  description:
    "I design and build products from idea to production. My background is in product design, but over the last year I've moved into design engineering, using AI-assisted development to ship production-ready applications. I work across product strategy, UX, visual craft, design systems, and implementation.",
  knowsAbout: [
    "Product design",
    "Design engineering",
    "Interaction design",
    "0-to-1 product shaping",
    "Systems thinking",
    "User flows and information architecture",
    "Design systems",
    "Frontend implementation",
    "AI-assisted development",
    "Developer tools",
    "AI infrastructure",
    "Marketplace design",
    "Logistics SaaS",
    "Figma",
    "Cursor",
    "Claude Code",
    "ChatGPT",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Vercel",
    "GitHub",
    "Adobe CC",
    "Linear",
    "Notion",
    "Slack",
    "Discord",
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
    description:
      "Independent studio working with startups and technical teams to shape products from idea to launch.",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Faculty of Graphic Arts, University of Zagreb",
      description: "Masters, Multimedia",
    },
    {
      "@type": "EducationalOrganization",
      name: "Infinum Academy",
      description: "Digital Product Design Course",
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
      name: "Santolina — Plant Care Platform",
      url: "https://anabeverin.com/projects/santolina",
      description:
        "Designed and built a plant care platform from concept to production, defining the product strategy, UX, visual design, design system, frontend implementation, and data architecture.",
    },
    {
      "@type": "CreativeWork",
      name: "Shuttle — Developer Console Redesign",
      url: "https://anabeverin.com/projects/shuttle",
      description:
        "Supported the platform's growth from early traction to 20,000+ developers and 120,000+ deployments as a sole product designer across dev console, web and growth surfaces. Led a complete console audit and redesign, introducing consistent UI patterns, design system and information architecture.",
    },
    {
      "@type": "CreativeWork",
      name: "Neptune — AI Infrastructure Brand and Web",
      url: "https://anabeverin.com/projects/neptune",
      description:
        "Designed brand and web experience for an AI infrastructure platform. Built and shipped a scripted agent-chat animation with AI, now live on the platform's website.",
    },
    {
      "@type": "CreativeWork",
      name: "Dealio — Online Marketplace",
      description:
        "Designed an online marketplace platform from concept to launch in under one year. Simplified seller ad creation, improved buyer discovery, and introduced structured buyer-seller communication. Platform launched with 78% CSAT.",
    },
    {
      "@type": "CreativeWork",
      name: "MixLodge — Studio Booking Marketplace",
      url: "https://anabeverin.com/projects/mixlodge",
      description:
        "Defined the MVP structure for a marketplace connecting musicians and producers. Designed end-to-end flows across discovery, booking, and collaboration, delivering implementation-ready product architecture in 3 months.",
    },
    {
      "@type": "CreativeWork",
      name: "OptimoRoute — Route Optimization Platform",
      url: "https://anabeverin.com/projects/optimoroute",
      description:
        "Led end-to-end product design for a route optimization platform used by logistics teams worldwide, managing a two-person design team. Redesign increased returning session duration by 34%, improved discoverability across Analytics, Dispatch, and Planning, and reduced time-to-first-use at the 75th and 90th percentiles.",
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
          <HireDrawerProvider>{children}</HireDrawerProvider>
        </ColorSchemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
