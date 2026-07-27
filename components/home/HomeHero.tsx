import Link from "next/link";

const heroLink =
  "type-body text-color-text-secondary underline decoration-dotted underline-offset-4 transition-colors hover:text-color-text-primary";

export function HomeHero() {
  return (
    <section className="px-xl py-6xl md:px-section md:py-section">
      <h1 className="text-3xl font-medium leading-heading tracking-tight text-color-text-primary md:text-4xl">
        I&apos;m Ana.
        <br />
        I design products.
      </h1>
      <p className="mt-lg max-w-[476px] type-body text-color-text-secondary">
        Recently I&apos;ve been learning what happens when you stop handing them
        over and start building them yourself.
      </p>
      <div className="mt-lg flex gap-lg">
        <Link href="/cv" className={heroLink}>
          Resume
        </Link>
        <a
          href="https://github.com/Paradoxich"
          target="_blank"
          rel="noreferrer"
          className={heroLink}
        >
          Github
        </a>
      </div>
    </section>
  );
}
