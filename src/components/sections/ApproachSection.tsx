import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Section, SectionHeading } from "@/components/ui/Section";
import { approachPrinciples } from "@/data/site";

export function ApproachSection() {
  return (
    <Section className="bg-white py-24 md:py-32">
      <FadeIn>
        <SectionHeading
          eyebrow="Çalışma Yaklaşımı"
          title="Ölçülü, net ve meslek etiğine bağlı bir çerçeve"
        />
      </FadeIn>

      <Stagger className="mt-14 grid gap-8 md:grid-cols-2" delay={0.05}>
        {approachPrinciples.map((item) => (
          <StaggerItem key={item.number}>
            <article className="border-t border-ink/10 pt-6">
              <p className="text-[0.7rem] tracking-[0.2em] text-accent uppercase">
                {item.number}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-ink md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                {item.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
