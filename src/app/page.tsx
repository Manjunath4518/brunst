'use client';

import LuxuryButton from '@/components/LuxuryButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-[100vh]">
        <div className="flex flex-col items-center w-full max-w-[1000px] mx-auto space-y-8">
          
          {/* Top Logo */}
          <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
            <Image
              src="/brunst.png"
              alt="Brunst Studios Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Brand Name */}
          <div className="text-center space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl uppercase tracking-[0.25em] text-primary">
              BRUNST STUDIOS
            </h1>
            <p className="font-body text-primary/60 text-[10px] md:text-xs tracking-[0.4em] uppercase italic">
              Aiming for only that stands out!
            </p>
          </div>

          {/* Subtext */}
          <p className="font-headline text-lg md:text-xl italic text-primary/30 tracking-[0.6em] text-center pt-4">
            THE BRUNSTVERSE OF CREATIVITY
          </p>

          {/* Centered Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[500px] pt-12">
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
