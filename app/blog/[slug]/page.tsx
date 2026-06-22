import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image"; 
import { ArrowLeft, CalendarDays } from "lucide-react";

// --- INJEKSI SEO 1: DYNAMIC METADATA & OPEN GRAPH ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const { meta } = getPostBySlug(resolvedParams.slug);
  const postMeta = meta as any;

  return {
    title: postMeta.title,
    description: postMeta.description,
    alternates: {
      canonical: `https://balicleaningservice.com/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: postMeta.title,
      description: postMeta.description,
      url: `https://balicleaningservice.com/blog/${resolvedParams.slug}`,
      type: 'article',
      publishedTime: postMeta.date,
      images: [
        {
          url: postMeta.image || 'https://balicleaningservice.com/images/default-og.webp',
          width: 1200,
          height: 630,
          alt: postMeta.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { meta, content } = getPostBySlug(resolvedParams.slug);
  const postMeta = meta as any;

  // --- INJEKSI SEO 2: JSON-LD SCHEMA BLOG POSTING ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postMeta.title,
    "image": postMeta.image ? [`https://balicleaningservice.com${postMeta.image}`] : [],
    "datePublished": postMeta.date,
    "dateModified": postMeta.date,
    "author": [{
        "@type": "Organization",
        "name": "Aleksa Bali Cleaning Service",
        "url": "https://balicleaningservice.com"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Aleksa Bali Cleaning Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://balicleaningservice.com/images/logo.webp"
      }
    },
    "description": postMeta.description
  };

  return (
    <main className="min-h-screen py-24 bg-white dark:bg-background">
      
      {/* Script JSON-LD untuk Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} />
          Kembali ke Blog
        </Link>

        {/* Header Artikel */}
        <header className="mb-10 text-center sm:text-left border-b pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            {postMeta.title}
          </h1>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
            <CalendarDays size={18} />
            <time dateTime={postMeta.date}>
              {new Date(postMeta.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>
        </header>

        {/* Gambar Cover Artikel */}
        {postMeta.image && (
          <div className="w-full rounded-2xl overflow-hidden mb-12 shadow-md">
            <Image 
              src={postMeta.image} 
              alt={`Cover: ${postMeta.title}`} 
              width={1200} 
              height={800} 
              priority 
              className="w-full h-auto object-cover" 
              sizes="(max-width: 1024px) 100vw, 768px"
              loading="eager"
            />
          </div>
        )}

        {/* Konten MDX */}
        <div className="prose prose-lg dark:prose-invert prose-primary max-w-none prose-headings:font-bold prose-a:text-primary text-justify [&>p]:indent-8 prose-ol:pl-6 prose-ol:list-decimal prose-li:my-4">
          <MDXRemote source={content} />
        </div>
        
      </article>
    </main>
  );
}