// app/layout.tsx
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navigation from "@/components/Navigation";
import { ColorSchemeProvider, ColorSchemeSwitcher } from "@/components/ColorSchemeProvider";
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
    // GeistSans već nosi font-family + varijacije
    <html lang="en" className={GeistSans.className}>
      <body className={GeistMono.variable}>
        <ColorSchemeProvider>
          <HireDrawerProvider>
            <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
              <Navigation />
              <main className="flex flex-col">
                {children}
              </main>
              <ColorSchemeSwitcher />
            </div>
          </HireDrawerProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
