'use client';

import LuxuryButton from '@/components/LuxuryButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-[100vh]">
        <div className="flex flex-col items-center w-full">
          {/* Centered & Responsive Logo */}
          <div className="relative w-full max-w-[180px] md:max-w-[280px] aspect-square mb-12">
            <Image 
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&h=600&auto=format&fit=crop" 
              alt="Brunst Studios Logo" 
              fill 
              className="object-contain invert brightness-200"
              priority
              data-ai-hint="luxury logo"
            />
          </div>
          
          <div className="space-y-4 w-full px-4">
            <h1 className="fluid-brand-title text-center">
              Brunst Studios
            </h1>
            <p className="font-body text-primary/60 text-[10px] md:text-xs tracking-[0.6em] uppercase text-center mb-12">
              Aiming for only that stands out!
            </p>
          </div>

          <p className="font-headline text-xl md:text-2xl italic text-primary/40 max-w-2xl leading-relaxed tracking-widest text-center mb-16">
            The Brunstverse Of Creativity
          </p>

          {/* 2x2 grid on desktop, 1 per row on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[600px] mx-auto">
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