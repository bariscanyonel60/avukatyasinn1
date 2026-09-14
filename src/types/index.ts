export type NavItem = {
  label: string;
  href: string;
};

export type PracticeArea = {
  id: string;
  number: string;
  title: string;
  description: string;
  slug: string;
};

export type ApproachPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  span?: "normal" | "wide" | "tall";
};

export type BlogCategory =
  | "hukuki-bilgiler"
  | "guncel-hukuk"
  | "sss"
  | "mevzuat";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  categoryLabel: string;
  publishedAt: string;
  author: string;
  readingTime: string;
  ogImage?: string;
  content: string[];
  placeholder?: boolean;
};

export type ContactInfo = {
  phone: string | null;
  phoneDisplay: string | null;
  email: string | null;
  address: string | null;
  addressLines: string[];
  city: string;
  district: string;
  mapEmbedUrl: string | null;
  mapSearchUrl: string | null;
  whatsapp: string | null;
  baroRegistryNo: string | null;
};

export type SocialLinks = {
  instagram: string | null;
  linkedin: string | null;
};

export type SiteConfig = {
  siteName: string;
  lawyerName: string;
  lawyerTitle: string;
  officeName: string;
  brandShortName: string;
  serviceLine: string;
  tagline: string;
  url: string;
  locale: string;
  barAssociation: string;
  education: string[];
  contact: ContactInfo;
  social: SocialLinks;
  nav: NavItem[];
  footerNav: NavItem[];
};
