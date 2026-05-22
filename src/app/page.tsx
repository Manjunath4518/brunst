
'use client';

import LuxuryButton from '@/components/LuxuryButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-[100vh]">
        <div className="flex flex-col items-center w-full max-w-[1000px] mx-auto">
          
          {/* Horizontal Branding Block */}
          <div className="flex flex-row items-center justify-center gap-8 mb-12 w-full">
            <div className="relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex-shrink-0">
              <Image
                src="/brunst.png"
                alt="Brunst Studios Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <h1 className="font-headline text-2xl md:text-4xl uppercase tracking-[0.15em] text-primary leading-none">
              BRUNST STUDIOS
            </h1>
          </div>

          {/* Subtext Section */}
          <div className="text-center space-y-6 mb-16">
            <p className="font-body text-primary/60 text-[10px] md:text-xs tracking-[0.4em] uppercase italic">
              Aiming for only that stands out!
            </p>
            <p className="font-headline text-lg md:text-xl italic text-primary/30 tracking-[0.6em]">
              THE BRUNSTVERSE OF CREATIVITY
            </p>
          </div>

          {/* Centered Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[500px]">
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
