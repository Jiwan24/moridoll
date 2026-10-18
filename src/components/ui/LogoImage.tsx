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
    return (
      <span
        className="font-heading font-extrabold text-2xl"
        style={{
          background: "linear-gradient(90deg, #7B4FBF, #F2603A, #FFC933, #1FB5A8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        MoriDoll
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.webp"
      alt="MoriDoll Logo"
      width={width}
      height={height}
      className={className}
      onError={() => setImgError(true)}
      style={{ width: "auto", height: `${height}px` }}
    />
  );
}
