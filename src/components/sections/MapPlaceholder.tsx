import { siteConfig } from "@/data/site";

export function MapPlaceholder() {
  const { contact } = siteConfig;

  if (contact.mapEmbedUrl) {
    return (
      <div className="overflow-hidden border border-ink/10">
        <iframe
          title="Köse Hukuk ve Danışmanlık ofis konumu"
          src={contact.mapEmbedUrl}
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        {contact.mapSearchUrl ? (
          <a
            href={contact.mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-t border-ink/10 bg-paper px-4 py-3 text-center text-[0.7rem] tracking-[0.16em] text-ink uppercase transition-colors hover:bg-white"
          >
            Haritada aç
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex h-64 items-center justify-center border border-dashed border-ink/15 bg-paper">
      <div className="text-center">
        <p className="text-[0.7rem] tracking-[0.2em] text-muted uppercase">
          MAP_PLACEHOLDER
        </p>
        <p className="mt-3 text-sm text-muted">
          Gerçek adres paylaşıldığında harita eklenecektir.
        </p>
      </div>
    </div>
  );
}
