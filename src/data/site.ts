import type {
  ApproachPrinciple,
  BlogPost,
  FaqItem,
  GalleryItem,
  PracticeArea,
  SiteConfig,
} from "@/types";

export const siteConfig: SiteConfig = {
  siteName: "Av. Yasin Can Köse",
  lawyerName: "Yasin Can Köse",
  lawyerTitle: "Avukat",
  officeName: "Köse Hukuk ve Danışmanlık",
  brandShortName: "KÖSE",
  serviceLine: "Hukuk ve Danışmanlık",
  tagline: "Hukuki Güven, Sağlam Bir Yaklaşım.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yasincankose.com",
  locale: "tr_TR",
  barAssociation: "Tokat Barosu",
  education: ["Pamukkale Üniversitesi Hukuk Fakültesi"],
  contact: {
    phone: "+905435249728",
    phoneDisplay: "+90 543 524 97 28",
    email: "avyasincankose@gmail.com",
    address:
      "Celal Mah. Cumhuriyet Cad. Eski Belediye Sitesi No:7/106 Turhal/TOKAT",
    addressLines: [
      "Celal Mah. Cumhuriyet Cad.",
      "Eski Belediye Sitesi No:7/106",
      "Turhal / TOKAT",
    ],
    city: "Tokat",
    district: "Turhal",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Celal%20Mah.%20Cumhuriyet%20Cad.%20Eski%20Belediye%20Sitesi%20No%3A7%2F106%20Turhal%20Tokat&z=16&output=embed",
    mapSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Celal+Mah.+Cumhuriyet+Cad.+Eski+Belediye+Sitesi+No:7/106+Turhal+Tokat",
    whatsapp: "905435249728",
    baroRegistryNo: "1352",
  },
  social: {
    instagram: null,
    linkedin: null,
  },
  nav: [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "Çalışma Alanları", href: "/calisma-alanlari" },
    { label: "Galeri", href: "/galeri" },
    { label: "Hukuki Bilgiler", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
  footerNav: [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımda", href: "/hakkimda" },
    { label: "Çalışma Alanları", href: "/calisma-alanlari" },
    { label: "Galeri", href: "/galeri" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
};

/**
 * Çalışma alanları — içerik doğrulanana kadar genel bilgilendirme amaçlıdır.
 * Gerçek hizmet kapsamı güncellendiğinde bu listeyi düzenleyin.
 */
export const practiceAreas: PracticeArea[] = [
  {
    id: "ceza",
    number: "01",
    title: "Ceza Hukuku",
    description:
      "Ceza soruşturma ve kovuşturma süreçlerinde hukuki değerlendirme ve temsil.",
    slug: "ceza-hukuku",
  },
  {
    id: "aile",
    number: "02",
    title: "Aile Hukuku",
    description:
      "Aile hukuku uyuşmazlıklarında süreç yönetimi ve hukuki danışmanlık.",
    slug: "aile-hukuku",
  },
  {
    id: "is",
    number: "03",
    title: "İş Hukuku",
    description:
      "İş ilişkilerinden doğan uyuşmazlıklarda hukuki çerçeve ve başvuru yolları.",
    slug: "is-hukuku",
  },
  {
    id: "borclar",
    number: "04",
    title: "Borçlar Hukuku",
    description:
      "Sözleşme ve borç ilişkilerinden kaynaklanan uyuşmazlıkların değerlendirilmesi.",
    slug: "borclar-hukuku",
  },
  {
    id: "icra",
    number: "05",
    title: "İcra ve İflas Hukuku",
    description:
      "Alacak takibi ve icra süreçlerinde hukuki destek.",
    slug: "icra-ve-iflas-hukuku",
  },
  {
    id: "ticaret",
    number: "06",
    title: "Ticaret Hukuku",
    description:
      "Ticari ilişkiler ve şirket süreçlerinde hukuki danışmanlık.",
    slug: "ticaret-hukuku",
  },
  {
    id: "gayrimenkul",
    number: "07",
    title: "Gayrimenkul ve Kira Hukuku",
    description:
      "Taşınmaz ve kira ilişkilerinden doğan hukuki süreçler.",
    slug: "gayrimenkul-ve-kira-hukuku",
  },
  {
    id: "miras",
    number: "08",
    title: "Miras Hukuku",
    description:
      "Miras paylaşımı ve ilgili uyuşmazlıklarda hukuki değerlendirme.",
    slug: "miras-hukuku",
  },
  {
    id: "sozlesmeler",
    number: "09",
    title: "Sözleşmeler Hukuku",
    description:
      "Sözleşme hazırlama, inceleme ve uyuşmazlık süreçleri.",
    slug: "sozlesmeler-hukuku",
  },
  {
    id: "tazminat",
    number: "10",
    title: "Tazminat Hukuku",
    description:
      "Maddi ve manevi tazminat taleplerinin hukuki değerlendirmesi.",
    slug: "tazminat-hukuku",
  },
];

export const approachPrinciples: ApproachPrinciple[] = [
  {
    number: "01",
    title: "Özenli İnceleme",
    description:
      "Her dosya, somut olgular ve yürürlükteki mevzuat çerçevesinde ayrıntılı biçimde ele alınır.",
  },
  {
    number: "02",
    title: "Açık İletişim",
    description:
      "Süreç boyunca durum, seçenekler ve olası sonuçlar anlaşılır bir dille paylaşılır.",
  },
  {
    number: "03",
    title: "Hukuki Çerçeve",
    description:
      "Değerlendirmeler, hukukun temel ilkeleri ve meslek kuralları doğrultusunda yürütülür.",
  },
  {
    number: "04",
    title: "Gizlilik",
    description:
      "Müvekkil bilgileri ve dosya içeriği, avukatlık meslek sırları kapsamında korunur.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Turhal'da avukat ile nasıl iletişime geçebilirim?",
    answer:
      "İletişim sayfasındaki formu kullanabilir veya paylaşılmış telefon ve e-posta bilgileri üzerinden ofise ulaşabilirsiniz. Görüşme öncesi konu hakkında kısa bir özet iletmeniz süreci kolaylaştırır.",
  },
  {
    question: "Tokat'ta hukuki danışmanlık için randevu gerekli midir?",
    answer:
      "Yoğunluğa göre yüz yüze veya uzaktan görüşme planlanabilir. Önceden iletişim kurmanız, uygun zamanın belirlenmesine yardımcı olur.",
  },
  {
    question: "İlk görüşmede hangi belgeleri getirmeliyim?",
    answer:
      "Konuya ilişkin sözleşmeler, tebligatlar, dilekçeler ve kimlik bilgilerinizi yanınızda bulundurmanız değerlendirmeyi hızlandırır. Eksik belgeler sonradan da tamamlanabilir.",
  },
  {
    question: "Hukuki süreç ne kadar sürer?",
    answer:
      "Süre; uyuşmazlığın türü, mahkeme yoğunluğu ve tarafların tutumuna göre değişir. İlk değerlendirmede genel bir çerçeve paylaşılabilir; kesin süre taahhüdü verilmez.",
  },
  {
    question: "Turhal hukuk bürosu hangi konularda destek sunar?",
    answer:
      "Çalışma alanları sayfasında yer alan başlıklar genel çerçeveyi gösterir. Somut durumunuz için uygunluk, görüşme sırasında değerlendirilir.",
  },
  {
    question: "Ücretlendirme nasıl belirlenir?",
    answer:
      "Ücret; işin niteliği, kapsamı ve Avukatlık Asgari Ücret Tarifesi çerçevesinde değerlendirilir. Detaylar görüşmede açıklanır.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "turhalda-hukuki-danismanlik-sureci",
    title: "Turhal'da Hukuki Danışmanlık Süreci Nasıl İşler?",
    description:
      "Turhal ve Tokat'ta hukuki danışmanlık almak isteyenler için sürecin genel adımlarına dair bilgilendirici bir özet.",
    category: "hukuki-bilgiler",
    categoryLabel: "Hukuki Bilgiler",
    publishedAt: "2026-03-01",
    author: "Av. Yasin Can Köse",
    readingTime: "4 dk",
    placeholder: true,
    content: [
      "Hukuki bir meselede ilk adım, somut olguların ve ilgili belgelerin düzenli biçimde derlenmesidir.",
      "Turhal ve Tokat'ta avukatlık hizmeti almak isteyenler için görüşme öncesi kısa bir özet hazırlamak, değerlendirmeyi kolaylaştırır.",
      "Bu yazı genel bilgilendirme amaçlıdır; somut durumlar için bireysel hukuki değerlendirme gerekir.",
    ],
  },
  {
    slug: "tokatta-avukat-secerken-dikkat-edilecekler",
    title: "Tokat'ta Avukat Seçerken Dikkat Edilebilecek Noktalar",
    description:
      "Avukat seçiminde meslek kuralları, iletişim ve dosya kapsamı açısından değerlendirilebilecek temel hususlar.",
    category: "sss",
    categoryLabel: "Sıkça Sorulan Sorular",
    publishedAt: "2026-02-15",
    author: "Av. Yasin Can Köse",
    readingTime: "5 dk",
    placeholder: true,
    content: [
      "Avukat seçiminde konunun uzmanlık alanıyla uyumu, iletişim netliği ve meslek etiği öne çıkar.",
      "Karşılaştırmalı veya garantili sonuç vaat eden ifadelerden uzak durmak, sağlıklı bir değerlendirme için önemlidir.",
      "Bu içerik bilgilendirme niteliğindedir ve tavsiye yerine geçmez.",
    ],
  },
  {
    slug: "kira-uyusmazliklarinda-genel-bilgiler",
    title: "Kira Uyuşmazlıklarında Genel Bilgiler",
    description:
      "Kira ilişkilerinden doğan uyuşmazlıklarda sık karşılaşılan konulara dair genel bir çerçeve.",
    category: "guncel-hukuk",
    categoryLabel: "Güncel Hukuk",
    publishedAt: "2026-01-20",
    author: "Av. Yasin Can Köse",
    readingTime: "6 dk",
    placeholder: true,
    content: [
      "Kira sözleşmeleri, tarafların hak ve yükümlülüklerini belirleyen temel belgelerdir.",
      "Uyuşmazlık durumunda tebligatlar, ödeme kayıtları ve sözleşme metni önemli delil niteliği taşıyabilir.",
      "Somut olayın koşulları değiştikçe uygulanacak hukuki yollar da farklılaşabilir.",
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "brand-sign",
    src: "/gallery/brand-sign.jpg",
    alt: "Köse Hukuk ve Danışmanlık marka tabelası",
    title: "Marka Tabelası",
    caption: "Köse Hukuk ve Danışmanlık",
    width: 768,
    height: 1024,
    span: "tall",
  },
  {
    id: "books-stack",
    src: "/gallery/books-stack.png",
    alt: "Hukuk kitapları yığını",
    title: "Hukuk Kaynakları",
    caption: "Çalışma masasında hukuk kitapları",
    width: 1152,
    height: 864,
    span: "wide",
  },
  {
    id: "open-book",
    src: "/gallery/open-book.png",
    alt: "Açık hukuk kitabı",
    title: "Açık Kaynak",
    caption: "Mevzuat ve akademik kaynaklar",
    width: 864,
    height: 1152,
    span: "tall",
  },
  {
    id: "bookshelf",
    src: "/gallery/bookshelf.png",
    alt: "Ofis kitaplığı",
    title: "Ofis Kitaplığı",
    caption: "Referans ve mevzuat kütüphanesi",
    width: 1152,
    height: 864,
    span: "normal",
  },
  {
    id: "desk-still",
    src: "/gallery/desk-still.png",
    alt: "Çalışma masası detayı",
    title: "Çalışma Masası",
    caption: "Dosya, not ve kaynaklar",
    width: 1280,
    height: 720,
    span: "wide",
  },
  {
    id: "business-card",
    src: "/gallery/business-card.jpg",
    alt: "Av. Yasin Can Köse kartviziti",
    title: "Kartvizit",
    caption: "Av. Yasin Can Köse",
    width: 768,
    height: 1024,
    span: "tall",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((area) => area.slug === slug);
}
