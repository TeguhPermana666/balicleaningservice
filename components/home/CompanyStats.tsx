"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, CalendarCheck, MapPin } from "lucide-react";

export default function CompanyStats() {
  // Setup Sensor Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan 1 kali saja
    threshold: 0.3,    // Animasi mulai saat 30% bagian kotak ini terlihat di layar
  });

  const stats = [
    {
      icon: <Users size={40} strokeWidth={1.5} />,
      endValue: 200,
      suffix: "+",
      title: "Klien Puas",
      description: "Telah menggunakan jasa kami",
    },
    {
      icon: <CalendarCheck size={40} strokeWidth={1.5} />,
      endValue: 2019,
      suffix: "",
      title: "Tahun Berdiri",
      description: "Konsisten melayani dengan hati",
    },
    {
      icon: <MapPin size={40} strokeWidth={1.5} />,
      endValue: 100,
      suffix: "%",
      title: "Area Bali",
      description: "Cakupan layanan seluruh area",
    },
  ];

  return (
    // Pasang 'ref' di sini agar sistem tahu elemen mana yang sedang dipantau
    <section ref={ref} className="w-full py-16 bg-white dark:bg-background border-b border-slate-100 dark:border-slate-800 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0">
                
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <div className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center justify-center">
                  {/* Logika: Jika terlihat di layar (inView), jalankan CountUp. Jika tidak, tampilkan 0 */}
                  {inView ? (
                    <CountUp 
                      end={stat.endValue} 
                      duration={2.5} 
                      separator="" 
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span className="text-primary ml-1">{stat.suffix}</span>
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-foreground uppercase mb-2">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.description}
                </p>
                
              </div>
            ))}

          </div>
        </div>
        
      </div>
    </section>
  );
}