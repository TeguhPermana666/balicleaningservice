import Image from "next/image";
import Link from "next/link";
import { Sofa, Bed, Sparkles, Building2, ArrowUpRight } from "lucide-react";

// Data layanan dipindahkan ke dalam komponen agar lebih rapi
const servicesData = [
  {
    title: "Layanan Cuci Sofa Bali",
    description: "Layanan cuci sofa panggilan di Bali. Ampuh angkat noda membandel, debu, dan tungau. Sofa langsung bersih, kering, dan wangi.",
    icon: <Sofa className="w-8 h-8 text-white" />,
    image: "/images/before_after2.webp", // Menggunakan gambar yang sudah ada sebagai placeholder
    link: "/blog/jasa-cuci-sofa-bali",   // Arahkan ke file SEO MDX yang sudah kita buat
  },
  {
    title: "Cuci Springbed & Kasur",
    description: "Cuci kasur dan springbed panggilan. Bebaskan tempat tidur Anda dari kutu busuk, bakteri, dan kotoran penyebab gatal alergi.",
    icon: <Bed className="w-8 h-8 text-white" />,
    image: "/images/before_after1.webp",
    link: "/blog/cuci-springbed-kasur-bali",
  },
  {
    title: "Poles Lantai Marmer",
    description: "Jasa poles marmer, granit, dan teraso di Bali. Kembalikan kilau lantai Anda yang kusam menjadi mengkilap seperti baru.",
    icon: <Sparkles className="w-8 h-8 text-white" />,
    image: "/images/before_after3.webp",
    link: "/blog/poles-lantai-marmer-bali",
  },
  {
    title: "Deep Cleaning Villa",
    description: "Pembersihan total ke seluruh sudut ruangan. Sangat cocok untuk pindahan rumah, villa pasca renovasi, atau pembersihan rutin bulanan.",
    icon: <Building2 className="w-8 h-8 text-white" />,
    image: "/images/before_after4.webp",
    link: "/blog/deep-cleaning-villa-bali",
  },
];

export default function OurServices() {
  return (
    <section id="layanan" className="w-full py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Layanan Kebersihan Kami</p>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Solusi <span className="text-primary">Kebersihan</span> Properti
          </h2>
        </div>

        {/* Grid Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              
              {/* Bagian Atas: Gambar (Featured Image) */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="eager"
                />
                {/* Overlay Gelap Transparan */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Bagian Bawah: Konten Card */}
              <div className="relative p-6 pt-12 flex-grow flex flex-col bg-white dark:bg-slate-900">
                
                {/* Ikon Mengambang di tengah garis batas gambar dan teks */}
                <div className="absolute -top-10 left-6 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 border-4 border-white dark:border-slate-900">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                {/* Tombol Discover More */}
                <Link 
                  href={service.link} 
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors mt-auto w-fit"
                >
                  <span className="relative">
                    Discover More
                    {/* Garis bawah animasi saat di-hover */}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} className="transition-transform group-hover:rotate-12" />
                  </div>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}