"use client";

import Image from "next/image";
import * as React from "react";

export function ProfileAvatar({ border = false }: { border?: boolean }) {
  const [useFallback, setUseFallback] = React.useState(false);
  if (useFallback) {
    return (
      <span className="flex w-6 h-6 shrink-0 items-center justify-center rounded-full text-xxxs font-medium bg-color-border-secondary text-color-text-secondary">
        A
      </span>
    );
  }
  return (
    <Image
      src="/general/ana-profile.png"
      alt="Ana Beverin"
      width={24}
      height={24}
      className={`h-6 w-6 shrink-0 rounded-full object-cover${border ? " border border-color-border-secondary" : ""}`}
      onError={() => setUseFallback(true)}
    />
  );
}
