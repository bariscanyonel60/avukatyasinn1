import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { getPracticeAreaBySlug, practiceAreas, siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return {};

  return buildMetadata({
    title: area.title,
    description: `${area.title} hakkında genel bilgilendirme. ${siteConfig.contact.district} / ${siteConfig.contact.city}.`,
    path: `/calisma-alanlari/${area.slug}`,
  });
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  return (
    <div className="pt-[4.5rem]">
      <Section className="py-20 md:py-28">
        <FadeIn>
          <p className="text-[0.7rem] tracking-[0.2em] text-accent uppercase">
            {area.number} · Çalışma Alanı
          </p>
          <h1 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] text-ink">
            {area.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {area.description}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Bu sayfa genel bilgilendirme amaçlıdır. Turhal ve Tokat&apos;ta
            ilgili konuda görüşmek için iletişim kanallarını kullanabilirsiniz.
            Somut hukuki tavsiye, dosyanın incelenmesi sonrasında verilir.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/iletisim" showArrow>
              İletişime Geç
            </ButtonLink>
            <Link
              href="/calisma-alanlari"
              className="nav-link inline-flex items-center px-2 text-[0.72rem] tracking-[0.18em] text-ink uppercase"
            >
              Tüm alanlar
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
