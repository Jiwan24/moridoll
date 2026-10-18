"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoImageProps {
  className?: string;
  height?: number;
  width?: number;
}

export default function LogoImage({ className = "h-10 w-auto", height = 40, width = 100 }: LogoImageProps) {
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
    <Image
      src="/logo/logo.jpeg"
      alt="MoriDoll Logo"
      width={1080}
      height={433}
      priority
      className={className}
      onError={() => setImgError(true)}
      style={{ width: "auto", height: `${height}px` }}
    />
  );
}
