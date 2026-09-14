import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";
import { absoluteUrl, buildMetadata, legalServiceJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const homeTitle = "Av. Yasin Can Köse | Turhal Avukat & Tokat Hukuk Bürosu";
const homeDescription =
  "Av. Yasin Can Köse'nin Turhal, Tokat'taki hukuk bürosu hakkında bilgi alın. Hukuki danışmanlık, çalışma alanları ve iletişim bilgileri.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({
    title: homeTitle,
    description: homeDescription,
    path: "/",
  }),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.siteName,
    title: homeTitle,
    description: homeDescription,
    images: [{ url: "/brand/logo-sign.jpg", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/brand/logo-sign.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F6F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${cormorant.variable} antialiased`}
      >
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            İçeriğe geç
          </a>
          <Header />
          <main id="main" className="page-enter">
            {children}
          </main>
          <Footer />
          <CustomCursor />
          <JsonLd data={legalServiceJsonLd()} />
        </MotionProvider>
      </body>
    </html>
  );
}
