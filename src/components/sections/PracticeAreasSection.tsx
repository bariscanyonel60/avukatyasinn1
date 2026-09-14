"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { practiceAreas } from "@/data/site";
import { cn } from "@/lib/utils";

export function PracticeAreasSection() {
  const [activeId, setActiveId] = useState(practiceAreas[0]?.id ?? "");
  const [openId, setOpenId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const active =
    practiceAreas.find((area) => area.id === activeId) ?? practiceAreas[0];

  return (
    <Section id="calisma-alanlari" className="border-t border-ink/8 py-24 md:py-32">
      <FadeIn>
        <SectionHeading
          eyebrow="Çalışma Alanları"
          title="Hukuki konuların genel çerçevesi"
          description="Aşağıdaki başlıklar bilgilendirme amaçlıdır. Somut dosyanız için uygunluk, görüşme sırasında değerlendirilir."
        />
      </FadeIn>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {practiceAreas.map((area) => {
            const isOpen = openId === area.id;
            const isActive = activeId === area.id;

            return (
              <div
                key={area.id}
                className="group"
                onMouseEnter={() => setActiveId(area.id)}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 py-5 text-left md:py-6"
                  onClick={() =>
                    setOpenId((current) =>
                      current === area.id ? null : area.id,
                    )
                  }
                  aria-expanded={isOpen}
                >
                  <div className="flex min-w-0 items-baseline gap-5 md:gap-8">
                    <span
                      className={cn(
                        "text-[0.7rem] tracking-[0.18em] transition-colors",
                        isActive ? "text-accent" : "text-muted",
                      )}
                    >
                      {area.number}
                    </span>
                    <span
                      className={cn(
                        "font-serif text-2xl transition-colors md:text-3xl",
                        isActive ? "text-ink" : "text-ink/70",
                      )}
                    >
                      {area.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "mt-1 size-5 shrink-0 transition-transform duration-300",
                      isActive
                        ? "translate-x-0.5 -translate-y-0.5 text-ink"
                        : "text-ink/30",
                    )}
                    aria-hidden
                  />
                </button>

                <div className="lg:hidden">
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm leading-relaxed text-muted">
                          {area.description}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        <FadeIn delay={0.1} className="hidden lg:block">
          <div
            className="sticky top-28 overflow-hidden border border-ink/10 bg-ink-soft"
            data-cursor="İNCELE"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(247,246,243,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,246,243,0.4) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative flex min-h-[420px] flex-col justify-end p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-[0.7rem] tracking-[0.2em] text-paper/55 uppercase">
                    {active.number}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-paper">
                    {active.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.15} className="mt-10">
        <Link
          href="/calisma-alanlari"
          className="nav-link text-[0.72rem] tracking-[0.18em] text-ink uppercase"
        >
          Tüm çalışma alanları
        </Link>
      </FadeIn>
    </Section>
  );
}
