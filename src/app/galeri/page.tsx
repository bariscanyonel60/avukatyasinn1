import type { Metadata } from "next";
import { GalleryPageContent } from "@/components/sections/GallerySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Galeri",
  description:
    "Köse Hukuk ve Danışmanlık galerisi: marka tabelası, kartvizit ve hukuk çalışma görselleri. Turhal / Tokat.",
  path: "/galeri",
});

export default function GalleryPage() {
  return (
    <div className="pt-[4.75rem]">
      <GalleryPageContent />
    </div>
  );
}
