import Link from "next/link";

export default function NotFound() {
  return (
    <div className="layout-container flex-1 flex flex-col items-center justify-center text-center">
      <div className="stack-lg max-w-md">
        <div className="stack-sm">
          <p className="type-body-sm text-color-text-secondary">404</p>
          <h1 className="type-h2">Page not found</h1>
          <p className="type-body text-color-text-secondary">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              rounded-full
              bg-color-text-primary
              text-color-bg
              type-body-sm
              hover:opacity-90
              transition-opacity
            "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back home
          </Link>
          
          <Link
            href="/projects"
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              rounded-full
              border border-color-border
              text-color-text-primary
              type-body-sm
              hover:border-[var(--color-50)]
              transition-colors
            "
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
}
