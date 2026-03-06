"use client";

type HireSectionProps = {
  onOpen: () => void;
};

export function HireSection({ onOpen }: HireSectionProps) {
  return (
    <div className="card-muted flex flex-col gap-4">
      <p className="type-label">Available for hire</p>
      <div className="relative w-full">
        <button className="btn-input w-full" onClick={onOpen}>
          <span className="btn-input-text">Tell me about your project…</span>
        </button>
        <button
          className="btn-input-icon"
          onClick={onOpen}
          aria-label="Open contact form"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
