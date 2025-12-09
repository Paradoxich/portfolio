"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="layout-container py-5 flex items-center justify-between">
      <Link href="/" className="text-color-text-secondary">
        Hi, I'm Ana
      </Link>

      <div className="nav-pill">
        <Link
          href="/"
          className={isActive("/") ? "nav-link-active" : "nav-link"}
        >
          About
        </Link>

        <Link
          href="/projects"
          className={isActive("/projects") ? "nav-link-active" : "nav-link"}
        >
          Projects
        </Link>

        <Link
          href="/illustrations"
          className={
            isActive("/illustrations") ? "nav-link-active" : "nav-link"
          }
        >
          Graphics
        </Link>

        <Link href="/#contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}
