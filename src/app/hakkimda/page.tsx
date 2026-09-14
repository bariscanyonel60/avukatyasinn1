import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { BrandSign } from "@/components/ui/BrandSign";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımda",
  description:
    "Av. Yasin Can Köse hakkında bilgi: Pamukkale Üniversitesi Hukuk Fakültesi mezunu, Tokat Barosu avukatı. Turhal / Tokat.",
  path: "/hakkimda",
});

export default function AboutPage() {
  return (
    <div className="pt-[4.5rem]">
      <Section className="py-20 md:py-28">
        <FadeIn>
          <SectionHeading
            eyebrow="Hakkımda"
            title={`Av. ${siteConfig.lawyerName}`}
            description="Hukuka akademik birikim ve güncel bir bakış."
          />
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeIn>
            <BrandSign className="aspect-square w-full" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Av. Yasin Can Köse, Tokat&apos;ın Turhal ilçesinde avukatlık ve
                hukuki danışmanlık hizmetleri sunmaktadır.
              </p>
              <p>
                Pamukkale Üniversitesi Hukuk Fakültesi mezunudur. Mesleğini
                Tokat Barosu bünyesinde sürdürmektedir.
              </p>
              <p>
                Ofis; bireysel ve kurumsal hukuki süreçlerde bilgilendirici,
                ölçülü ve meslek kurallarına uygun bir iletişim dili benimser.
              </p>
              <p>
                Doğrulanmamış başarı oranı, dava sayısı veya karşılaştırmalı
                iddialar paylaşılmaz. Her dosya kendi koşulları içinde
                değerlendirilir.
              </p>
            </div>

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
                {
                  label: "Telefon",
                  value: siteConfig.contact.phoneDisplay ?? "—",
                },
                {
                  label: "E-posta",
                  value: siteConfig.contact.email ?? "—",
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

            <div className="mt-10">
              <ButtonLink href="/iletisim" showArrow>
                İletişime Geç
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
