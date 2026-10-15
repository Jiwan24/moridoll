interface SmileDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export default function SmileDivider({
  color = "#FFF9F0",
  flip = false,
  className,
}: SmileDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-12 md:h-16 ${flip ? "scale-y-[-1]" : ""}`}
      >
        <path d="M0,0 Q600,60 1200,0 L1200,60 L0,60 Z" fill={color} />
      </svg>
    </div>
  );
}
