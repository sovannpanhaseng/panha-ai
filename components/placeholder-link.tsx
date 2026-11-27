"use client";

import type { ReactNode } from "react";

type PlaceholderLinkProps = {
  className?: string;
  children: ReactNode;
};

export function PlaceholderLink({
  className,
  children,
}: PlaceholderLinkProps) {
  return (
    <a
      className={className}
      href="#"
      onClick={(event) => event.preventDefault()}
    >
      {children}
    </a>
  );
}
