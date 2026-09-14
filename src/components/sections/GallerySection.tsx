"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { galleryItems } from "@/data/site";
import type { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  items: GalleryItem[];
  preview?: boolean;
};

function GalleryGrid({ items, preview = false }: GalleryGridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const active = items.find((item) => item.id === activeId) ?? null;

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeId, close]);

  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {items.map((item, index) => (
          <FadeIn
            key={item.id}
            delay={index * 0.04}
            className={cn(
              "group relative overflow-hidden bg-ink-soft",
              item.span === "wide" && "lg:col-span-7",
              item.span === "tall" && "lg:col-span-5",
              item.span === "normal" && "lg:col-span-5",
              !item.span && "lg:col-span-4",
            )}
          >
            <button
              type="button"
              onClick={() => setActiveId(item.id)}
              className="relative block w-full text-left"
              data-cursor="İNCELE"
              aria-label={`${item.title} görselini büyüt`}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  item.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]",
                  item.id === "desk-still" && "aspect-[16/9]",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-[0.65rem] tracking-[0.18em] text-paper/65 uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-serif text-xl text-paper md:text-2xl">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-paper/70">{item.caption}</p>
                </div>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {preview ? (
        <FadeIn delay={0.1} className="mt-10">
          <Link
            href="/galeri"
            className="nav-link text-[0.72rem] tracking-[0.18em] text-ink uppercase"
          >
            Tüm galeri
          </Link>
        </FadeIn>
      ) : null}

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-4 md:p-10"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 inline-flex size-11 items-center justify-center border border-paper/20 text-paper transition-colors hover:border-paper/50"
              aria-label="Galeriyi kapat"
            >
              <X className="size-5" />
            </button>
            <motion.div
              className="relative max-h-[85vh] w-full max-w-5xl"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="max-h-[75vh] w-full object-contain"
                priority
              />
              <div className="mt-4 flex flex-col gap-1 text-paper md:flex-row md:items-baseline md:justify-between">
                <p className="font-serif text-2xl">{active.title}</p>
                <p className="text-sm text-paper/65">{active.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function GallerySection({ preview = false }: { preview?: boolean }) {
  const items = preview ? galleryItems.slice(0, 4) : galleryItems;

  return (
    <Section id="galeri" className="border-t border-ink/8 py-24 md:py-32">
      <FadeIn>
        <SectionHeading
          eyebrow="Galeri"
          title="Ofis ve çalışma atmosferi"
          description="Marka tabelası, kartvizit ve hukuk kaynaklarından oluşan seçilmiş görseller."
        />
      </FadeIn>
      <GalleryGrid items={items} preview={preview} />
    </Section>
  );
}

export function GalleryPageContent() {
  return (
    <Section className="py-20 md:py-28">
      <FadeIn>
        <SectionHeading
          eyebrow="Galeri"
          title="Görsel arşiv"
          description="Köse Hukuk ve Danışmanlık markası, çalışma masası ve hukuk kaynaklarından görseller."
        />
      </FadeIn>
      <GalleryGrid items={galleryItems} />
    </Section>
  );
}
