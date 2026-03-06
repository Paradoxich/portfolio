"use client";

import { useRef, useEffect } from "react";

const commits = [
  "added scroll-aware navigation behavior",
  "improved mobile UX across layouts and modals",
  "refactored case studies from modals to routes",
  "reduced navigation complexity",
];

export function ChangelogSection() {
  const firstCircleRef = useRef<HTMLDivElement>(null);
  const lastCircleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLinePosition = () => {
      if (
        firstCircleRef.current &&
        lastCircleRef.current &&
        lineRef.current &&
        containerRef.current
      ) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const firstRect = firstCircleRef.current.getBoundingClientRect();
        const lastRect = lastCircleRef.current.getBoundingClientRect();

        const firstCenter =
          firstRect.top - containerRect.top + firstRect.height / 2;
        const lastCenter =
          lastRect.top - containerRect.top + lastRect.height / 2;

        lineRef.current.style.top = `${firstCenter}px`;
        lineRef.current.style.height = `${lastCenter - firstCenter}px`;
      }
    };

    const timeoutId = setTimeout(updateLinePosition, 0);
    window.addEventListener("resize", updateLinePosition);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateLinePosition);
    };
  }, []);

  return (
    <section className="card-i-design h-[112px] card pb-0 relative flex flex-col">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(var(--color-0-rgb), 0) 50.48%, var(--color-0) 100%)",
        }}
      />
      <p className="type-label relative z-20">Changelog</p>
      <div className="flex-1 min-h-0 relative z-[2] pt-3">
        <div
          ref={containerRef}
          className="flex flex-col gap-2 overflow-hidden h-full pb-0 relative z-0 pl-6"
        >
          <div
            ref={lineRef}
            className="absolute left-[3.5px] w-px bg-[var(--color-60)]"
          />
          {commits.map((commit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 relative"
              ref={
                index === 0
                  ? firstCircleRef
                  : index === commits.length - 1
                  ? lastCircleRef
                  : undefined
              }
            >
              <svg
                className="absolute left-[-20px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] pointer-events-none"
                viewBox="0 0 7 7"
              >
                <circle
                  cx="3.5"
                  cy="3.5"
                  r="3"
                  fill="var(--color-0)"
                  stroke="var(--color-60)"
                  strokeWidth="1"
                />
              </svg>
              <span
                className="type-body-xs text-color-text-secondary font-normal"
                style={{ lineHeight: "130%" }}
              >
                {commit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
