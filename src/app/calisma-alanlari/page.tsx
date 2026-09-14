import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { practiceAreas } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Çalışma Alanları",
  description:
    "Turhal ve Tokat'ta hukuki danışmanlık kapsamında değerlendirilebilecek çalışma alanlarına genel bakış.",
  path: "/calisma-alanlari",
});

export default function PracticeAreasPage() {
  return (
    <div className="pt-[4.5rem]">
      <Section className="py-20 md:py-28">
        <FadeIn>
          <SectionHeading
            eyebrow="Çalışma Alanları"
            title="Hukuki konuların genel çerçevesi"
            description="Bu liste bilgilendirme amaçlıdır ve kesin hizmet beyanı niteliği taşımaz. Somut durumunuz için uygunluk görüşmede değerlendirilir."
          />
        </FadeIn>

        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {practiceAreas.map((area, index) => (
            <FadeIn key={area.id} delay={index * 0.03}>
              <article className="grid gap-4 py-8 md:grid-cols-[88px_1fr_auto] md:items-start">
                <span className="text-[0.7rem] tracking-[0.18em] text-accent">
                  {area.number}
                </span>
                <div>
                  <h2 className="font-serif text-3xl text-ink">{area.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {area.description}
                  </p>
                </div>
                <Link
                  href={`/calisma-alanlari/${area.slug}`}
                  className="nav-link text-[0.7rem] tracking-[0.16em] text-ink uppercase"
                >
                  İncele
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
