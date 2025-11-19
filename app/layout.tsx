// app/layout.tsx
import "./globals.css";
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
          <a href="/" className="text-color-text-secondary">
            Hi, I’m Ana
          </a>

          <div className="nav-pill">
            <a href="/" className="nav-link-active">
              About
            </a>

            <a href="/projects" className="nav-link">
              Projects
            </a>

            <a href="/#contact" className="nav-link">
              Contact
            </a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
