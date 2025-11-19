import Link from "next/link";

interface CTAWithIconProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function CTAWithIcon({
  label,
  href,
  onClick,
}: CTAWithIconProps) {
  const isInternalLink = typeof href === "string" && href.startsWith("/");

  const Primary = (() => {
    if (isInternalLink && href) {
      return (
        <Link href={href} onClick={onClick} className="btn-cta">
          {label}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} onClick={onClick} className="btn-cta">
          {label}
        </a>
      );
    }

    return (
      <button onClick={onClick} className="btn-cta">
        {label}
      </button>
    );
  })();

  return (
    <div className="relative inline-flex items-center">
      {Primary}

      <button aria-hidden="true" className="btn-cta-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
          />
        </svg>
      </button>
    </div>
  );
}
