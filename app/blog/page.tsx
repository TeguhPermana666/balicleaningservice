import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; 
import { getAllPostsMeta } from "@/lib/mdx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

// --- INJEKSI SEO: STATIS METADATA ---
export const metadata: Metadata = {
  title: "Tips & Inspirasi Kebersihan",
  description: "Kumpulan panduan praktis, tips perawatan properti, dan wawasan seputar dunia cleaning service dari tim profesional Aleksa Bali.",
  alternates: {
    canonical: "https://balicleaningservice.com/blog",
  }
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <main className="min-h-screen py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Tips & Inspirasi Kebersihan</h1>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Kumpulan panduan praktis dan tips perawatan properti dari tim profesional kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <Card className="h-full border-slate-200 shadow-sm group-hover:shadow-md group-hover:border-primary/50 transition-all duration-300 bg-white overflow-hidden flex flex-col">
                
                {post.image && (
                  <div className="w-full relative aspect-video overflow-hidden bg-slate-100">
                    <Image 
                      src={post.image} 
                      alt={`Thumbnail: ${post.title}`} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="eager"
                    />
                  </div>
                )}

                <CardHeader className="flex-none pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <CalendarDays size={16} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow pb-6">
                  <CardDescription className="text-base line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardContent>
                
              </Card>
            </Link>
          ))}
        </div>
        
        {posts.length === 0 && (
           <p className="text-center text-muted-foreground mt-10">Belum ada artikel yang dipublikasikan.</p>
        )}
      </div>
    </main>
  );
}