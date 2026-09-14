"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink-soft border border-ink",
  ghost:
    "bg-transparent text-ink hover:text-accent border border-transparent",
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 px-6 py-3 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
        {showArrow ? (
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        ) : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}
