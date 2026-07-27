type IconProps = {
  size?: number;
  className?: string;
};

export function Mail({ size = 20, className }: IconProps) {
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
        d="M3.5 5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H15.5C16.0523 4.5 16.5 4.94772 16.5 5.5V14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M4 5.25L10 10.5L16 5.25"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
