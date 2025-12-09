// app/layout.tsx
import "./globals.css";
import { GeistSans } from "geist/font/sans";
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
      <body>
        <Navigation />

        {children}
      </body>
    </html>
  );
}
