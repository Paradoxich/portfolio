import { writingPosts } from "@/lib/writing";

export function WritingSection() {
  return (
    <section className="px-xl py-6xl md:px-section md:py-[200px]">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex flex-col gap-md py-2xl md:min-h-[180px] md:flex-1 md:pr-2xl">
          <h2 className="text-xl font-medium leading-heading tracking-tight text-color-text-primary">
            Writing
          </h2>
          <p className="type-body leading-ui text-color-text-secondary md:max-w-[254px]">
            Thoughts on building Santolina. Published on{" "}
            <a
              href="https://paradoxich.substack.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-4 transition-colors hover:text-color-text-primary"
            >
              Substack
            </a>
            .
          </p>
        </div>
        {writingPosts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-md border-t border-color-border-inset py-lg md:min-h-[180px] md:flex-1 md:gap-lg md:border-l md:border-t-0 md:p-2xl"
          >
            <p className="text-base leading-snug text-color-text-secondary transition-colors group-hover:text-color-text-primary md:text-md">
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
