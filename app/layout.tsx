// app/layout.tsx
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { TopStickyBar } from "@/components/layout/TopStickyBar";
import { ColorSchemeProvider } from "@/components/ColorSchemeProvider";
import { HireDrawerProvider } from "@/components/HireDrawerContext";

export const metadata = {
  title: "Ana — Product Designer",
  description: "Portfolio & experiments",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistSans.className}`}>
      <body className={GeistMono.variable}>
        <ColorSchemeProvider>
          <HireDrawerProvider>
            <div className="flex h-screen flex-col overflow-hidden">
              <Sidebar />
              <MobileNav />
              <main className="flex min-h-0 flex-1 flex-col min-w-0 overflow-y-auto with-sidebar">
                <TopStickyBar />
                {children}
              </main>
            </div>
          </HireDrawerProvider>
        </ColorSchemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
