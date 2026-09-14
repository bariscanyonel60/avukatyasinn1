import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "İletişim",
  description:
    "Turhal / Tokat avukat iletişim bilgileri. Av. Yasin Can Köse hukuk bürosuna ulaşın.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <div className="pt-[4.5rem]">
      <ContactSection />
    </div>
  );
}
