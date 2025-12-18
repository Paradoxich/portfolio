// app/layout.tsx
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Ana — Product Designer",
  description: "Portfolio & experiments",
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
        <Navigation />

        {children}
      </body>
    </html>
  );
}
