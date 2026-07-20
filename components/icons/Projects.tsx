type ProjectsProps = {
  className?: string;
  size?: number;
};

export function Projects({ className = "", size = 20 }: ProjectsProps) {
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
        d="M3.41602 9.00001V3.41667H8.99935V9.00001H3.41602ZM3.41602 16.5833V11H8.99935V16.5833H3.41602ZM10.9993 9.00001V3.41667H16.5827V9.00001H10.9993ZM10.9993 16.5833V11H16.5827V16.5833H10.9993ZM4.49935 7.91667H7.91602V4.50001H4.49935V7.91667ZM12.0827 7.91667H15.4993V4.50001H12.0827V7.91667ZM12.0827 15.5H15.4993V12.0833H12.0827V15.5ZM4.49935 15.5H7.91602V12.0833H4.49935V15.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
