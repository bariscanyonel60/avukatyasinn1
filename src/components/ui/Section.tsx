import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("relative px-6 md:px-10 lg:px-16", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-[0.7rem] font-medium tracking-[0.22em] uppercase text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-balance text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
