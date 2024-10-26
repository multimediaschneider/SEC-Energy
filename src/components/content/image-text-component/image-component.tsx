"use client";

import React from "react";
import Image from "next/image";

interface ImageComponentProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  maxWidth?: number;
}

export function ImageComponent({
  imageSrc,
  imageAlt,
  className = "",
  maxWidth = 450,
}: ImageComponentProps) {
  return (
    <div
      className={`relative w-full md:w-1/2 ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={maxWidth}
        height={maxWidth}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
