import { writingPosts } from "@/lib/writing";

export function WritingSection() {
  return (
    <section className="px-xl py-6xl md:px-section md:py-section">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex flex-col gap-lg py-2xl md:min-h-[180px] md:flex-1">
          <h2 className="text-xl font-medium leading-heading tracking-tight text-color-text-primary">
            Writing
          </h2>
          <p className="max-w-[254px] type-body-sm leading-ui text-color-text-secondary">
            Thoughts on product design, building software, and whatever
            I&apos;m currently obsessed with.
          </p>
        </div>
        {writingPosts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-lg border-t border-color-border-inset p-2xl md:min-h-[180px] md:flex-1 md:border-l md:border-t-0"
          >
            <p className="text-md leading-snug text-color-text-secondary transition-colors group-hover:text-color-text-primary">
              {post.title}
            </p>
            <p className="type-body-sm tracking-tight text-color-text-tertiary">
              {post.date}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
