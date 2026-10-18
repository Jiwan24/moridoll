"use client";

interface LogoImageProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function LogoImage({ className = "h-10 w-auto", height = 40, width = 120 }: LogoImageProps) {
  return (
    <svg
      viewBox="0 0 200 80"
      height={height}
      width={width}
      className={className}
      aria-label="MoriDoll Logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* M - Purple */}
      <text x="10" y="65" fontSize="60" fontWeight="800" fill="#7B4FBF" fontFamily="Baloo 2, sans-serif">
        M
      </text>
      {/* ori - Mixed colors */}
      <text x="60" y="65" fontSize="60" fontWeight="800" fill="#F2603A" fontFamily="Baloo 2, sans-serif">
        ori
      </text>
      {/* D - Orange */}
      <text x="110" y="65" fontSize="60" fontWeight="800" fill="#F2603A" fontFamily="Baloo 2, sans-serif">
        D
      </text>
      {/* oll - Mixed */}
      <text x="155" y="65" fontSize="60" fontWeight="800" fill="#FFC933" fontFamily="Baloo 2, sans-serif">
        oll
      </text>
    </svg>
  );
}
