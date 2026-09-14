"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <Section id="sss" className="border-t border-ink/8 py-24 md:py-32">
      <FadeIn>
        <SectionHeading
          eyebrow="Sıkça Sorulan Sorular"
          title="İletişim ve süreç hakkında"
        />
      </FadeIn>

      <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
        {faqItems.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
                aria-expanded={open}
                onClick={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              >
                <span className="font-serif text-xl text-ink md:text-2xl">
                  {item.question}
                </span>
                <Plus
                  className={cn(
                    "mt-1 size-5 shrink-0 text-muted transition-transform duration-300",
                    open && "rotate-45",
                  )}
                  aria-hidden
                />
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted md:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
