// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";

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
        <nav className="layout-container py-5 flex items-center justify-between">
          <Link href="/" className="text-color-text-secondary">
            Hi, I’m Ana
          </Link>

          <div className="nav-pill">
            <Link href="/" className="nav-link-active">
              About
            </Link>

            <Link href="/projects" className="nav-link">
              Work
            </Link>

             <Link href="/illustrations" className="nav-link">
              Illustrations
            </Link>

            <Link href="/#experiments" className="nav-link">
              Experiments
            </Link>

            <Link href="/#contact" className="nav-link">
              Contact
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
