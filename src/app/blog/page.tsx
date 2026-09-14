import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { blogPosts } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hukuki Bilgiler",
  description:
    "Turhal ve Tokat odaklı hukuki bilgilendirme yazıları. Genel içerikler; somut durumlar için bireysel değerlendirme gerekir.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="pt-[4.5rem]">
      <Section className="py-20 md:py-28">
        <FadeIn>
          <SectionHeading
            eyebrow="Hukuki Bilgiler"
            title="Blog"
            description="Placeholder içerikler SEO altyapısı için hazırlanmıştır. Gerçek yazılar eklendiğinde buradan yönetilir."
          />
        </FadeIn>

        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-[160px_1fr_auto]"
              >
                <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
                  {post.categoryLabel}
                </span>
                <div>
                  <h2 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                </div>
                <div className="text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                  <p>{post.publishedAt}</p>
                  <p className="mt-1">{post.readingTime}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
