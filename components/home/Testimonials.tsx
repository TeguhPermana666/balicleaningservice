"use client";

import { Star } from "lucide-react";

const testimonialsData = [
  {
    name: "I Made Wirawan",
    role: "Pemilik Villa di Canggu",
    text: "Sangat puas dengan hasilnya. Sofa di villa yang tadinya kusam dan berdebu sekarang kembali bersih seperti baru. Tim Aleksa sangat profesional dan on-time! 👍🏽",
  },
  {
    name: "Sarah Jenkins",
    role: "Expat / Resident",
    text: "Very good experience, very clean result and positive attitudes. Highly recommended for deep cleaning and mattress cleaning.",
  },
  {
    name: "Budi Santoso",
    role: "Manajer Guest House",
    text: "Pelayanan sangat memuaskan, staf sopan dan sabar membersihkan kerak kamar mandi yang sudah menahun. Bakal jadi langganan tetap untuk properti kami.",
  },
  {
    name: "Ni Wayan Lestari",
    role: "Ibu Rumah Tangga",
    text: "Luar biasa, rumah dan springbed jadi super bersih dan wangi bebas tungau. Proses booking via WA juga gampang dan adminnya *fast respon*.",
  },
  {
    name: "Reza Aditya",
    role: "Pemilik Bisnis Kafe",
    text: "Poles lantai teraso di kafe kami hasilnya sangat maksimal. Lantai kembali mengkilap alami tanpa merusak tekstur. Mantap buat timnya, sukses terus!",
  },
];

// Komponen SVG Logo Google Resmi (Diperbarui agar lebih identik)
const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimoni" className="w-full py-24 bg-white dark:bg-background overflow-hidden border-t border-slate-100 dark:border-slate-800 relative">
      
      {/* 1. Header Testimoni */}
      <div className="container mx-auto px-4 max-w-7xl mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary"></div>
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Testimoni Pelanggan</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Ini Kata Mereka Tentang <span className="text-primary">Layanan Kami</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-lg text-muted-foreground">
              Kami berpengalaman dan akan membawa standar kebersihan tertinggi ke tempat Anda. Ratusan pelanggan di Bali telah membuktikan kualitas kami.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Marquee Container (Otomatis Bergerak) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative w-full flex items-center">
        
        {/* Efek Blur di Kiri dan Kanan Layar */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-background to-transparent z-10 pointer-events-none"></div>

        {/* Track Animasi */}
        <div className="flex w-max animate-scroll hover:pause gap-6 px-4">
          {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[400px] shrink-0 bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                
                {/* Header Card: Profil Pelanggan + Logo Google & 5 Bintang */}
                <div className="flex justify-between items-start mb-6">
                    {/* Info Pengguna */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-base">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-foreground text-base leading-tight">{testimonial.name}</h4>
                            <p className="text-xs font-medium text-muted-foreground mt-0.5">{testimonial.role}</p>
                        </div>
                    </div>
                    {/* Ikon G */}
                    <GoogleLogo />
                </div>
                
                {/* 5 Bintang */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                {/* Teks Review */}
                <p className="text-base text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}