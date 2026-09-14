import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Section, SectionHeading } from "@/components/ui/Section";
import { blogPosts } from "@/data/site";

export function BlogPreviewSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <Section className="bg-white py-24 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <FadeIn>
          <SectionHeading
            eyebrow="Hukuki Bilgiler"
            title="Bilgilendirici yazılar"
            description="Genel hukuki bilgilendirme içerikleri. Somut durumlar için bireysel değerlendirme gerekir."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Link
            href="/blog"
            className="nav-link text-[0.72rem] tracking-[0.18em] text-ink uppercase"
          >
            Tüm yazılar
          </Link>
        </FadeIn>
      </div>

      <Stagger className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-4 py-8 transition-colors md:grid-cols-[140px_1fr_auto] md:items-center"
              data-cursor="OKU"
            >
              <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
                {post.categoryLabel}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent md:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
              </div>
              <span className="text-[0.7rem] tracking-[0.14em] text-muted uppercase">
                {post.readingTime}
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
