type DropdownProps = {
  className?: string;
  size?: number;
};

export function Dropdown({ className = "", size = 16 }: DropdownProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M8 14.6667L4 10.6667L4.95 9.71667L8 12.7667L11.05 9.71667L12 10.6667L8 14.6667ZM4.96667 6.26667L4 5.33333L8 1.33333L12 5.33333L11.0333 6.26667L8 3.23333L4.96667 6.26667Z"
        fill="currentColor"
      />
    </svg>
  );
}
