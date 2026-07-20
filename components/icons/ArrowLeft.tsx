type ArrowLeftProps = {
  className?: string;
  size?: number;
};

export function ArrowLeft({ className = "", size = 20 }: ArrowLeftProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={{ transform: "scaleX(-1)" }}
    >
      <path
        d="M4.41602 10.5416L13.501 10.5416L9.23331 14.8094L9.99935 15.5833L15.5827 9.99998L9.99935 4.41665L9.23331 5.19061L13.501 9.45831L4.41602 9.45831L4.41602 10.5416Z"
        fill="currentColor"
      />
    </svg>
  );
}
