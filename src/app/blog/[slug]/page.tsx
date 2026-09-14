import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { blogPosts, getPostBySlug } from "@/data/site";
import { blogPostJsonLd, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-[4.5rem]">
      <Section className="py-20 md:py-28">
        <FadeIn>
          <p className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
            {post.categoryLabel} · {post.readingTime}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.08] text-ink">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <article className="mt-12 max-w-3xl space-y-6 border-t border-ink/10 pt-10 text-base leading-relaxed text-muted md:text-lg">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {post.placeholder ? (
              <p className="border border-dashed border-ink/15 bg-white px-4 py-3 text-sm text-muted">
                Bu yazı örnek/placeholder içeriktir. Nihai metinler daha sonra
                güncellenecektir.
              </p>
            ) : null}
          </article>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          <Link
            href="/blog"
            className="nav-link text-[0.72rem] tracking-[0.18em] text-ink uppercase"
          >
            Tüm yazılara dön
          </Link>
        </FadeIn>
      </Section>
      <JsonLd data={blogPostJsonLd(post)} />
    </div>
  );
}
