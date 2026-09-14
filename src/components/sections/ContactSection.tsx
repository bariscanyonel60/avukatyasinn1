import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandMark } from "@/components/ui/BrandLogo";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { formatTelHref } from "@/lib/utils";

export function ContactSection() {
  const { contact, lawyerName, officeName } = siteConfig;

  return (
    <Section id="iletisim" className="bg-white py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <FadeIn>
            <div className="mb-8 flex items-center gap-4">
              <BrandMark className="size-14" />
              <div>
                <p className="font-serif text-xl tracking-[0.12em] text-ink uppercase">
                  {siteConfig.brandShortName}
                </p>
                <p className="mt-1 text-[0.65rem] tracking-[0.18em] text-muted uppercase">
                  {siteConfig.serviceLine}
                </p>
              </div>
            </div>
            <SectionHeading
              title="Bir hukuki mesele hakkında görüşmek ister misiniz?"
              description="İletişim bilgilerinden ofise ulaşabilir veya iletişim formunu kullanabilirsiniz."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <dl className="mt-12 space-y-6 border-t border-ink/10 pt-8">
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                  Avukat
                </dt>
                <dd className="mt-2 text-ink">Av. {lawyerName}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                  Büro
                </dt>
                <dd className="mt-2 text-ink">{officeName}</dd>
              </div>
              {contact.baroRegistryNo ? (
                <div>
                  <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                    Baro Sicil No
                  </dt>
                  <dd className="mt-2 text-ink">
                    {siteConfig.barAssociation} · {contact.baroRegistryNo}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                  Telefon
                </dt>
                <dd className="mt-2 text-ink">
                  {contact.phone && contact.phoneDisplay ? (
                    <a
                      href={formatTelHref(contact.phone)}
                      className="transition-colors hover:text-accent"
                    >
                      {contact.phoneDisplay}
                    </a>
                  ) : (
                    <span className="text-muted">Bilgi güncellenecek</span>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                  E-posta
                </dt>
                <dd className="mt-2 text-ink">
                  {contact.email ? (
                    <a
                      href={`mailto:${contact.email}`}
                      className="transition-colors hover:text-accent"
                    >
                      {contact.email}
                    </a>
                  ) : (
                    <span className="text-muted">Bilgi güncellenecek</span>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                  Adres
                </dt>
                <dd className="mt-2 space-y-1 text-ink">
                  {contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </div>
            </dl>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10 flex flex-wrap gap-3">
            {contact.phone ? (
              <ButtonLink
                href={formatTelHref(contact.phone)}
                variant="primary"
                external
              >
                Ara
              </ButtonLink>
            ) : null}
            {contact.whatsapp ? (
              <ButtonLink
                href={`https://wa.me/${contact.whatsapp}`}
                variant="outline"
                showArrow
                external
              >
                WhatsApp
              </ButtonLink>
            ) : null}
            {contact.email ? (
              <ButtonLink
                href={`mailto:${contact.email}`}
                variant="ghost"
                external
              >
                E-posta
              </ButtonLink>
            ) : null}
          </FadeIn>

          <FadeIn delay={0.2} className="mt-10">
            <MapPlaceholder />
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </div>
    </Section>
  );
}
