import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

/** Column + K circular mark — brand emblem */
export function BrandMark({
  className,
  title = "Köse Hukuk ve Danışmanlık logosu",
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={title}
      className={cn("text-accent", className)}
    >
      <title>{title}</title>
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
      />
      {/* Classical column */}
      <g fill="currentColor">
        <rect x="28" y="28" width="18" height="4.5" rx="0.5" />
        <rect x="30" y="32.5" width="14" height="3" />
        <rect x="32.5" y="35.5" width="3.2" height="42" />
        <rect x="38.4" y="35.5" width="3.2" height="42" />
        <rect x="30" y="77.5" width="14" height="3.5" />
        <rect x="28" y="81" width="18" height="5" rx="0.5" />
      </g>
      {/* Serif K */}
      <path
        fill="currentColor"
        d="M52 30h8.5v24.2L82.8 30H93L70.2 55.4 94 90H83.2L60.5 59.8V90H52V30Z"
      />
    </svg>
  );
}

type BrandLockupProps = {
  className?: string;
  compact?: boolean;
  tone?: "light" | "dark";
};

export function BrandLockup({
  className,
  compact = false,
  tone = "light",
}: BrandLockupProps) {
  const text = tone === "dark" ? "text-paper" : "text-ink";
  const muted = tone === "dark" ? "text-paper/55" : "text-muted";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BrandMark className={cn(compact ? "size-9" : "size-11", "shrink-0")} />
      <div className="min-w-0 leading-none">
        <p
          className={cn(
            "font-serif tracking-[0.18em] uppercase",
            compact ? "text-[0.95rem]" : "text-[1.05rem]",
            text,
          )}
        >
          Köse
        </p>
        <p
          className={cn(
            "mt-1.5 tracking-[0.16em] uppercase",
            compact ? "text-[0.55rem]" : "text-[0.58rem]",
            muted,
          )}
        >
          Hukuk ve Danışmanlık
        </p>
      </div>
    </div>
  );
}
