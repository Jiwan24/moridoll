"use client";

import { useState } from "react";

interface LogoImageProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function LogoImage({ className = "h-10 w-auto", height = 40, width = 120 }: LogoImageProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // SVG fallback — matches the real MoriDoll logo colors
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="MoriDoll Logo"
      >
        <text
          x="4"
          y="44"
          fontFamily="'Baloo 2', ui-rounded, system-ui, sans-serif"
          fontSize="42"
          fontWeight="800"
          fill="#7B4FBF"
        >
          Mori
        </text>
        <text
          x="104"
          y="44"
          fontFamily="'Baloo 2', ui-rounded, system-ui, sans-serif"
          fontSize="42"
          fontWeight="800"
          fill="#F2603A"
        >
          Doll
        </text>
      </svg>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo/logo.jpeg"
      alt="MoriDoll Logo"
      width={width}
      height={height}
      className={className}
      onError={() => setImgError(true)}
    />
  );
}
