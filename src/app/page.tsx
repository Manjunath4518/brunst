'use client';

import LuxuryButton from '@/components/LuxuryButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-[100vh]">
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
          
          {/* Horizontal Landing Layout */}
          <div className="flex flex-row items-center justify-center gap-8 md:gap-12 w-full mb-16">
            <div className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex-shrink-0">
              <Image
                src="/brunst.png"
                alt="Brunst Studios Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col items-start">
              <h1 className="fluid-brand-title text-left">
                BRUNST STUDIOS
              </h1>
              <p className="font-body text-primary/60 text-[10px] md:text-xs tracking-[0.5em] uppercase italic mt-2">
                Aiming for only that stands out!
              </p>
            </div>
          </div>

          <p className="font-headline text-xl md:text-2xl italic text-primary/40 max-w-2xl leading-relaxed tracking-widest text-center mb-16 px-4">
            The Brunstverse Of Creativity
          </p>

          {/* 2x2 grid on desktop, 1 per row on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[600px] px-6">
            <LuxuryButton href="/services" className="w-full">What We Do</LuxuryButton>
            <LuxuryButton href="/brunstcam" className="w-full">Brunstcam</LuxuryButton>
            <LuxuryButton href="/whyus" className="w-full">Why Us</LuxuryButton>
            <LuxuryButton href="/contact" className="w-full">Contact Us</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}