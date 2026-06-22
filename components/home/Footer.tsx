import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 w-full pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Call to Action Banner (Bagian Atas Footer) */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl transform -translate-y-24 relative z-10 mx-4 md:mx-0">
          <div className="text-white max-w-xl text-center md:text-left">
            <p className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm mb-2">Dapatkan Layanan Kami</p>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
              Jadwalkan Konsultasi dan Kebersihan Hunianmu Sekarang!
            </h3>
          </div>
          <a 
            href="https://wa.me/6285808463467" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-3 whitespace-nowrap"
          >
            <Phone size={20} className="fill-primary" />
            0858-0846-3467
          </a>
        </div>

        {/* Konten Utama Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 -mt-10">
          
          {/* Kolom 1: Info Perusahaan */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
                <Image 
                    src="/images/logo.webp" 
                    alt="Ikon Aleksa Bali Cleaning Service" 
                    width={48} 
                    height={48} 
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
                    priority 
                    loading="eager"
                />
                <div className="flex flex-col justify-center min-w-0">
                    <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight leading-none truncate">
                    <span className="text-primary">BALI</span>{" "}
                    <span className="text-slate-300">CLEANING</span>
                    </span>
                    <span className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-muted-foreground tracking-widest uppercase hidden sm:block mt-0.5 truncate">
                    Professional Service
                    </span>
                </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400 text-justify">
              Jasa cleaning service profesional di seluruh Bali. Cuci sofa, kasur, karpet, jok mobil & poles lantai dengan hasil bebas kuman & wangi lama. Booking WA cepat.
            </p>
           <div className="flex gap-4">
                {/* TikTok */}
                <a href="https://www.tiktok.com/@dy0000007" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61585620094460" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </a>
                
                {/* Instagram */}
                <a href="https://www.instagram.com/merdy_0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Layanan */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Layanan Kami
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href="/blog/jasa-cuci-sofa-bali" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Cuci Sofa & Kursi</Link></li>
              <li><Link href="/blog/cuci-springbed-kasur-bali" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Cuci Springbed / Kasur</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Cuci Karpet</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Cuci Jok Mobil</Link></li>
              <li><Link href="/blog/poles-lantai-marmer-bali" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>Poles & Perawatan Lantai</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Proses Order */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Proses Order
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">1</span>Booking Mudah</li>
              <li className="text-slate-400 text-sm flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">2</span>Survey & Konsultasi Gratis</li>
              <li className="text-slate-400 text-sm flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">3</span>Deep Cleaning Profesional</li>
              <li className="text-slate-400 text-sm flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">4</span>Hasil Bersih Maksimal</li>
              <li className="text-slate-400 text-sm flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">5</span>Garansi Kebersihan</li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Kontak
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <p className="text-slate-400 text-sm">Dalung, Kabupaten Badung, Bali, Indonesia</p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <p className="text-slate-400 text-sm">0858-0846-3467</p>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <p className="text-slate-400 text-sm">cs@balicleaningservice.com</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Aleksa Bali Cleaning Service. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}