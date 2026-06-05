"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/shared/Header";
import { useState } from "react";

// Category Slider Component
function CategorySlider({
  title,
  subtitle,
  images
}: {
  title: string;
  subtitle: string;
  images: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="mb-32 md:mb-24">
      {/* Title Section */}
      <div className="mb-10 md:mb-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mb-4">
          <div className="hidden md:block h-px w-12 bg-brand-secondary"></div>
          <h3 className="text-3xl md:text-6xl text-brand-primary font-serif italic text-center md:text-left px-2">
            {title}
          </h3>
          <div className="hidden md:block h-px w-12 bg-brand-secondary"></div>
        </div>
        <p className="text-gray-500 text-xs md:text-base tracking-wider md:tracking-widest uppercase text-center md:text-left md:pl-16 px-4">
          {subtitle}
        </p>
      </div>

      <div className="relative group">
        {/* Slider */}
        <div className="relative h-[350px] md:h-[600px] rounded-lg md:rounded-2xl overflow-hidden shadow-2xl">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`${title} ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          ))}

          {/* Gradient overlay for better arrow visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Arrows - Always visible on mobile */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-brand-primary text-brand-primary hover:text-white p-2 md:p-4 rounded-full shadow-xl md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-brand-primary text-brand-primary hover:text-white p-2 md:p-4 rounded-full shadow-xl md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
        </button>

        {/* Dots */}
        <div className="absolute -bottom-10 md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-brand-primary w-8 md:w-12 h-1.5 md:h-2 rounded-full"
                  : "bg-gray-300 hover:bg-brand-secondary w-1.5 md:w-2 h-1.5 md:h-2 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const collectionImages = [
    "/sareeimages/sareeimage1.webp",
    "/sareeimages/saree2.webp",
    "/sareeimages/saree3.webp",
    "/sareeimages/saree4.webp",
    "/sareeimages/saree5.webp",
    "/sareeimages/saree6.webp",
    "/sareeimages/saree7.webp",
    "/sareeimages/saree8.avif",
    "/sareeimages/saree9.webp",
  ];

  return (
    <>
      <Header />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919108157889?text=Hi%2C%20I%27m%20interested%20in%20ARALU%20sarees"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <main className="min-h-screen">
      {/* Hero Section - Simple */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brand/hero.jpeg"
            alt="ARALU Sarees"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Collections - Category Sliders */}
      <section id="collection" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-cream/10 to-white">
        <div className="container mx-auto px-4 md:px-6">

          {/* Silk Sarees Slider */}
          <CategorySlider
            title="Pure Silk Elegance"
            subtitle="Timeless Luxury Woven in Gold"
            images={[collectionImages[0], collectionImages[1], collectionImages[2]]}
          />

          {/* Designer Sarees Slider */}
          <CategorySlider
            title="Designer Dreams"
            subtitle="Where Tradition Meets Couture"
            images={[collectionImages[3], collectionImages[4], collectionImages[5]]}
          />

          {/* Bridal Collection Slider */}
          <CategorySlider
            title="Bridal Grandeur"
            subtitle="For Your Special Day"
            images={[collectionImages[6], collectionImages[7], collectionImages[8]]}
          />

        </div>
      </section>

      {/* Contact Section - Modern Design */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/40 via-white to-brand-rose/20"></div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl text-brand-primary font-serif italic mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {/* Location Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-center text-brand-primary mb-4">
                Visit Our Store
              </h3>
              <address className="text-gray-600 text-center not-italic leading-relaxed">
                Plot no 507, 46th Cross Rd<br />
                5th Block, TMC Layout<br />
                Jayanagar, Bengaluru<br />
                Karnataka 560041
              </address>
            </div>

            {/* Phone Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-center text-brand-primary mb-4">
                Call Us
              </h3>
              <a
                href="tel:+919108157889"
                className="text-2xl text-gray-700 hover:text-brand-accent transition-colors block text-center font-light"
              >
                +91 91081 57889
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-center text-brand-primary mb-4">
                Email Us
              </h3>
              <a
                href="mailto:chaitra@aralu.com"
                className="text-xl text-gray-700 hover:text-brand-accent transition-colors block text-center"
              >
                chaitra@aralu.com
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Footer - Redesigned */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-white mb-6 tracking-widest">
              ARALU
            </div>
            <p className="text-gray-400 mb-8 text-sm">
              © 2026 ARALU. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}

