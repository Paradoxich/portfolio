type IconProps = {
  size?: number;
  className?: string;
};

export function Globe({ size = 20, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M10 3.5C11.5 5.2 12.3 7.4 12.3 10C12.3 12.6 11.5 14.8 10 16.5C8.5 14.8 7.7 12.6 7.7 10C7.7 7.4 8.5 5.2 10 3.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M3.7 10H16.3" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
