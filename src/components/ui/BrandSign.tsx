import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandSignProps = {
  className?: string;
  priority?: boolean;
};

/** Physical brand plaque photography */
export function BrandSign({ className, priority = false }: BrandSignProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ink shadow-[0_24px_80px_rgba(17,17,17,0.18)]",
        className,
      )}
      data-cursor="İNCELE"
    >
      <Image
        src="/brand/logo-sign.jpg"
        alt="Köse Hukuk ve Danışmanlık — Av. Yasin Can Köse marka tabelası"
        width={1200}
        height={1200}
        priority={priority}
        sizes="(max-width: 1024px) 90vw, 42vw"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/25" />
    </div>
  );
}
