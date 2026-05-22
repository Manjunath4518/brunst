'use client';

import LuxuryButton from '@/components/LuxuryButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-[100vh] space-y-20 pt-20">
        <div className="flex flex-col items-center space-y-12">
          {/* Logo Main */}
          <div className="relative w-28 h-28 mb-4">
            <Image 
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=300&h=300&auto=format&fit=crop" 
              alt="Brunst Studios Logo" 
              fill 
              className="object-contain invert brightness-200"
              priority
              data-ai-hint="luxury logo"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="luxury-heading text-3xl md:text-5xl tracking-[1.5em] leading-tight">
              Brunst Studios
            </h1>
            <p className="font-body text-primary/60 text-[10px] md:text-xs tracking-[0.6em] uppercase">
              Aiming for only that stands out!
            </p>
          </div>
        </div>

        <p className="font-headline text-xl md:text-2xl italic text-primary/40 max-w-2xl leading-relaxed tracking-widest">
          The Brunstverse Of Creativity
        </p>

        {/* 2x2 grid on desktop, 1 per row on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mx-auto pt-12">
          <LuxuryButton href="/services" className="w-full">What We Do</LuxuryButton>
          <LuxuryButton href="/brunstcam" className="w-full">Brunstcam</LuxuryButton>
          <LuxuryButton href="/whyus" className="w-full">Why Us</LuxuryButton>
          <LuxuryButton href="/contact" className="w-full">Contact Us</LuxuryButton>
        </div>
      </section>
    </div>
  );
}
