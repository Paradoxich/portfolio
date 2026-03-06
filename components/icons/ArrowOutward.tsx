type ArrowOutwardProps = {
  className?: string;
  size?: number;
};

export function ArrowOutward({ className = "", size = 20 }: ArrowOutwardProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M6.435 14.331L12.8591 7.90696L12.8591 13.9424L13.948 13.948L13.948 6.05199L6.05199 6.05199L6.05758 7.14093L12.093 7.14093L5.66897 13.565L6.435 14.331Z"
        fill="currentColor"
      />
    </svg>
  );
}
