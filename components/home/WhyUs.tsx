import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    "Hasil deep cleaning bersih tuntas dan bebas kuman.",
    "Tim lokal cleaning service Bali yang sigap, jujur & ramah.",
    "Garansi kepuasan 100% untuk setiap layanan properti.",
    "Harga cuci sofa & poles lantai transparan, tanpa biaya sembunyi.",
    "Siap melayani skala corporate, kos eksklusif, & villa premium.",
  ];

  return (
    <section id="kenapa-kami" className="w-full py-24 bg-white dark:bg-background overflow-hidden relative text-justify">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Kiri: Teks & SEO Keywords */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary"></div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Kenapa Aleksa Bali</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Mengapa Ribuan Orang Memilih <span className="text-primary">Aleksa Bali Cleaning?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sebagai penyedia jasa <strong className="font-semibold text-foreground text-primary">cleaning service profesional di Bali</strong>, kami memahami bahwa kebersihan bukan sekadar menyapu dan mengepel. Kami menghadirkan standar sterilisasi tinggi untuk kenyamanan dan kesehatan hunian Anda.
            </p>

            <div className="space-y-4 mb-10">
              <p className="font-semibold text-foreground text-lg mb-4">Kami menjamin pelayanan terbaik seperti:</p>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={24} className="text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Visual & Statistik (Pie Chart Style) */}
          <div className="relative">
            {/* Gambar Utama */}
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/whyus.webp" 
                alt="Layanan kebersihan profesional Aleksa Bali" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Kotak Statistik 1: 100% Home Cleaning */}
            <div className="absolute -left-4 md:-left-10 top-10 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl flex items-center gap-5 border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-1000 delay-300">
              {/* SVG Circular Progress (Mirip Elementor Pie Chart) */}
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-100 dark:text-slate-800" strokeWidth="3.8" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-primary" strokeDasharray="100, 100" strokeWidth="3.8" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">100%</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg leading-tight">Home Cleaning</h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">200+ Klien Puas</p>
              </div>
            </div>

            {/* Kotak Statistik 2: 100% Success Project */}
            <div className="absolute -right-4 md:-right-8 bottom-10 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl flex items-center gap-5 border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-1000 delay-500">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-100 dark:text-slate-800" strokeWidth="3.8" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  {/* Angka 98 untuk variasi agar terlihat realistis, namun tetap penuh */}
                  <path className="text-primary" strokeDasharray="100, 100" strokeWidth="3.8" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">100%</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg leading-tight">Proyek Sukses</h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">500+ Deep Cleaning</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}