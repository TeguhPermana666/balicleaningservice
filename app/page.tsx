import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import WhyUs from "@/components/home/WhyUs";
import CompanyStats from "@/components/home/CompanyStats"; 
import OurServices from "@/components/home/OurServices";
import Testimonials from "@/components/home/Testimonials"; 
import Portfolio from "@/components/home/Portfolio";

export default function Home() {
  
  // TASK 5.1: Data Schema JSON-LD (Updated Domain)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aleksa Bali Cleaning Service",
    "image": "https://balicleaningservice.com/images/logo.webp", 
    "@id": "https://balicleaningservice.com",
    "url": "https://balicleaningservice.com",
    "telephone": "6285726868969", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Canggu", 
      "addressLocality": "Badung",
      "addressRegion": "Bali",
      "postalCode": "80361",
      "addressCountry": "ID"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Kebersihan",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cuci Sofa Bali" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cuci Springbed & Kasur" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Poles Lantai Marmer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning Villa" } }
      ]
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      <AboutUs />
      <WhyUs />
      <CompanyStats />
      <OurServices />
      <Testimonials />
      <Portfolio />
    </main>
  );
}