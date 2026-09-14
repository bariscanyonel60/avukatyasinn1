import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";

export function IntroSection() {
  return (
    <Section className="border-t border-ink/8 py-24 md:py-32 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
        <FadeIn>
          <p className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.12] text-ink">
            Her hukuki mesele,
            <br />
            özenli bir değerlendirmeyi gerektirir.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Süreçler; olgular, belgeler ve yürürlükteki hukuki çerçeve
            doğrultusunda sakin ve ölçülü bir yaklaşımla ele alınır.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:text-right">
          <p className="font-serif text-6xl text-ink/15 md:text-7xl">01</p>
          <p className="mt-3 text-[0.7rem] tracking-[0.22em] text-muted uppercase">
            Yaklaşım
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
