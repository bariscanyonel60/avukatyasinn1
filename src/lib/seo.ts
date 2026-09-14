import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    title === siteConfig.siteName
      ? title
      : `${title} | ${siteConfig.siteName}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.siteName,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function legalServiceJsonLd() {
  const { contact, lawyerName, lawyerTitle, officeName, url, barAssociation } =
    siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: officeName,
    url,
    image: absoluteUrl("/brand/logo-sign.jpg"),
    description:
      "Tokat'ın Turhal ilçesinde avukatlık ve hukuki danışmanlık hizmetleri.",
    areaServed: [
      { "@type": "City", name: "Turhal" },
      { "@type": "AdministrativeArea", name: "Tokat" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Celal Mah. Cumhuriyet Cad. Eski Belediye Sitesi No:7/106",
      addressLocality: contact.district,
      addressRegion: contact.city,
      addressCountry: "TR",
    },
    ...(contact.phoneDisplay
      ? { telephone: contact.phoneDisplay }
      : contact.phone
        ? { telephone: contact.phone }
        : {}),
    ...(contact.email ? { email: contact.email } : {}),
    founder: {
      "@type": "Person",
      name: lawyerName,
      jobTitle: lawyerTitle,
      memberOf: {
        "@type": "Organization",
        name: barAssociation,
      },
      ...(contact.baroRegistryNo
        ? { identifier: `Baro Sicil No: ${contact.baroRegistryNo}` }
        : {}),
    },
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostJsonLd(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.officeName,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}
