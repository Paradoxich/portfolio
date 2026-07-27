type IconProps = {
  size?: number;
  className?: string;
};

export function Substack({ size = 20, className }: IconProps) {
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
      <path d="M4 4H16V6.2H4V4Z" fill="currentColor" />
      <path d="M4 7.6H16V9.8H4V7.6Z" fill="currentColor" />
      <path d="M4 11.2H16V16.5L10 13.3L4 16.5V11.2Z" fill="currentColor" />
    </svg>
  );
}
