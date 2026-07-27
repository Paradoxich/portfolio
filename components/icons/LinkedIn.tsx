type IconProps = {
  size?: number;
  className?: string;
};

export function LinkedIn({ size = 20, className }: IconProps) {
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
      <path
        d="M6.23 7.62H3.62V16.5H6.23V7.62Z"
        fill="currentColor"
      />
      <path
        d="M4.93 6.5C5.75 6.5 6.42 5.83 6.42 5C6.42 4.17 5.75 3.5 4.93 3.5C4.1 3.5 3.43 4.17 3.43 5C3.43 5.83 4.1 6.5 4.93 6.5Z"
        fill="currentColor"
      />
      <path
        d="M10.98 7.62H8.5V16.5H11.11V12.03C11.11 10.77 11.35 9.55 12.91 9.55C14.45 9.55 14.47 10.99 14.47 12.11V16.5H17.08V11.6C17.08 9.34 16.59 7.4 13.94 7.4C12.67 7.4 11.82 8.1 11.47 8.76H11.43V7.62H10.98Z"
        fill="currentColor"
      />
    </svg>
  );
}
