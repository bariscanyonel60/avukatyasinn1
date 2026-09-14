import { FadeIn } from "@/components/motion/FadeIn";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export function LocalSeoSection() {
  const { contact, officeName } = siteConfig;

  return (
    <Section className="border-t border-ink/8 py-24 md:py-32 lg:py-36">
      <FadeIn>
        <p className="text-[0.7rem] tracking-[0.24em] text-muted uppercase">
          Konum
        </p>
        <h2 className="mt-6 font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.92] tracking-[-0.03em] text-ink">
          TURHAL
          <span className="text-accent"> / </span>
          TOKAT
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Av. Yasin Can Köse, Tokat&apos;ın Turhal ilçesinde {officeName}{" "}
            bünyesinde hukuki danışmanlık ve avukatlık hizmetleri sunmaktadır.
            Turhal avukat ve Tokat hukuk bürosu arayışında olanlar için ofis;
            bireysel ve kurumsal süreçlerde bilgilendirici, kurumsal bir iletişim
            zemini sunar.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="border border-ink/10 bg-white p-6 md:p-8">
            <p className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
              Ofis
            </p>
            <p className="mt-4 font-serif text-2xl text-ink">{officeName}</p>
            <div className="mt-4 space-y-1 text-sm text-muted">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {contact.phoneDisplay ? (
              <p className="mt-4 text-sm text-ink">{contact.phoneDisplay}</p>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
