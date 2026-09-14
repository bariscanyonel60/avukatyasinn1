"use client";

import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandSign } from "@/components/ui/BrandSign";
import { HeroFade, LineReveal, RevealText } from "@/components/motion/RevealText";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-paper pt-[4.75rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(155,128,96,0.08), transparent 40%), linear-gradient(to right, rgba(17,17,17,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.03) 1px, transparent 1px)",
          backgroundSize: "auto, 72px 72px, 72px 72px",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(92vh-4.75rem)] max-w-7xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16 lg:px-16 lg:pb-20 lg:pt-16">
        <div className="pb-4">
          <HeroFade delay={0.05}>
            <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
              Av. {siteConfig.lawyerName}
            </p>
            <p className="mt-2 text-[0.68rem] tracking-[0.24em] text-accent uppercase">
              {siteConfig.serviceLine}
            </p>
          </HeroFade>

          <div className="mt-8 md:mt-12">
            <RevealText
              text={"Hukuki Güven,\nSağlam Bir Yaklaşım."}
              className="font-serif text-[clamp(2.6rem,7vw,5.4rem)] leading-[1.02] tracking-[-0.02em] text-ink"
            />
          </div>

          <LineReveal className="mt-8 h-px w-24 bg-accent/70" delay={0.55} />

          <HeroFade delay={0.7} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Tokat ve Turhal&apos;da bireysel ve kurumsal hukuki süreçlerde,
              hukukun temel ilkeleri doğrultusunda profesyonel hukuki hizmet.
            </p>
          </HeroFade>

          <HeroFade delay={0.85} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/hakkimda" variant="primary">
              Hakkımda
            </ButtonLink>
            <ButtonLink href="/iletisim" variant="outline" showArrow>
              İletişime Geç
            </ButtonLink>
          </HeroFade>
        </div>

        <HeroFade delay={0.35} className="relative">
          <motion.div
            initial={reduceMotion ? false : { scale: 1.04, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-md lg:ml-auto lg:max-w-none"
          >
            <BrandSign
              priority
              className="aspect-square w-full"
            />
          </motion.div>
          <div className="pointer-events-none absolute -top-4 -right-4 hidden h-24 w-24 border border-ink/10 lg:block" />
        </HeroFade>
      </div>
    </section>
  );
}
