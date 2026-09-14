import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { BrandSign } from "@/components/ui/BrandSign";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <Section id="hakkimda" className="bg-white py-24 md:py-32">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <FadeIn>
          <BrandSign className="aspect-square w-full" />
        </FadeIn>

        <div>
          <FadeIn>
            <SectionHeading
              eyebrow="Hakkımda"
              title={`Av. ${siteConfig.lawyerName}`}
              description="Hukuka akademik birikim ve güncel bir bakış."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Av. Yasin Can Köse, Tokat&apos;ın Turhal ilçesinde{" "}
                {siteConfig.officeName} bünyesinde avukatlık ve hukuki
                danışmanlık hizmetleri sunmaktadır.
              </p>
              <p>
                Pamukkale Üniversitesi Hukuk Fakültesi mezunu olup, Tokat Barosu
                bünyesinde mesleğini sürdürmektedir
                {siteConfig.contact.baroRegistryNo
                  ? ` (Sicil No: ${siteConfig.contact.baroRegistryNo})`
                  : ""}
                .
              </p>
              <p>
                Çalışmalarında; net iletişim, dosyaya özgü değerlendirme ve
                meslek kurallarına bağlılık esas alınır.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <dl className="mt-12 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
              {[
                { label: "Ünvan", value: siteConfig.lawyerTitle },
                {
                  label: "Baro",
                  value: siteConfig.contact.baroRegistryNo
                    ? `${siteConfig.barAssociation} · ${siteConfig.contact.baroRegistryNo}`
                    : siteConfig.barAssociation,
                },
                { label: "Eğitim", value: siteConfig.education[0] },
                {
                  label: "Adres",
                  value: siteConfig.contact.addressLines.join(", "),
                },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10">
            <Link
              href="/hakkimda"
              className="nav-link text-[0.72rem] tracking-[0.18em] text-ink uppercase"
            >
              Daha fazla bilgi
            </Link>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
