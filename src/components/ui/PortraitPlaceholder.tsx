import { cn } from "@/lib/utils";

type PortraitPlaceholderProps = {
  className?: string;
  label?: string;
  priority?: boolean;
};

export function PortraitPlaceholder({
  className,
  label = "Av. Yasin Can Köse",
}: PortraitPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ink-soft",
        className,
      )}
      role="img"
      aria-label={`${label} için portre görseli alanı`}
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(247,246,243,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,246,243,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-paper/70">
          Portre
        </p>
        <p className="mt-2 font-serif text-2xl text-paper md:text-3xl">
          {label}
        </p>
      </div>
    </div>
  );
}
