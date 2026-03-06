type ArrowDownProps = {
  className?: string;
  size?: number;
};

export function ArrowDown({ className = "", size = 20 }: ArrowDownProps) {
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
        d="M9.45768 4.41667V13.5017L5.18997 9.23396L4.41602 10L9.99935 15.5833L15.5827 10L14.8087 9.23396L10.541 13.5017V4.41667H9.45768Z"
        fill="currentColor"
      />
    </svg>
  );
}
