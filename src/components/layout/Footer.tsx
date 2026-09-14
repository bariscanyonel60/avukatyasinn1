import Link from "next/link";
import { BrandLockup } from "@/components/ui/BrandLogo";
import { siteConfig } from "@/data/site";
import { formatTelHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <BrandLockup tone="dark" />
            <p className="mt-6 text-sm text-paper/65">
              Av. {siteConfig.lawyerName}
            </p>
            {contact.baroRegistryNo ? (
              <p className="mt-2 text-[0.7rem] tracking-[0.12em] text-paper/45 uppercase">
                Tokat Barosu · Sicil No {contact.baroRegistryNo}
              </p>
            ) : null}
          </div>

          <nav
            aria-label="Footer menü"
            className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3"
          >
            {siteConfig.footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.72rem] tracking-[0.14em] text-paper/70 uppercase transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="max-w-xs space-y-3 text-sm text-paper/65">
            {contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {contact.phoneDisplay && contact.phone ? (
              <a
                href={formatTelHref(contact.phone)}
                className="block transition-colors hover:text-paper"
              >
                {contact.phoneDisplay}
              </a>
            ) : null}
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="block transition-colors hover:text-paper"
              >
                {contact.email}
              </a>
            ) : null}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-6 text-[0.7rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.officeName}
          </p>
          <p className="tracking-[0.08em]">
            Bilgilendirme amaçlı kurumsal web sitesi
          </p>
        </div>
      </div>
    </footer>
  );
}
