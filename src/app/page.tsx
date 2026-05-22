'use client';

import LuxuryButton from '@/components/LuxuryButton';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-[90vh] space-y-24">
        <div className="flex flex-col items-center space-y-12">
          {/* Logo Main */}
          <div className="relative w-32 h-32 mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&h=400&auto=format&fit=crop" 
              alt="Brunst Studios Logo" 
              fill 
              className="object-contain"
              priority
              data-ai-hint="luxury logo"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="luxury-heading text-4xl md:text-5xl lg:text-6xl tracking-[1.2em]">
              Brunst Studios
            </h1>
            <p className="font-body text-primary/60 text-sm md:text-base tracking-[0.5em] uppercase">
              Aiming for only that stands out!
            </p>
          </div>
        </div>

        <p className="font-headline text-2xl md:text-3xl italic text-primary/50 max-w-3xl leading-relaxed">
          The Brunstverse Of Creativity
        </p>

        <div className="flex flex-wrap justify-center gap-8 pt-12">
          <LuxuryButton href="/what-we-do">What We Do</LuxuryButton>
          <LuxuryButton href="/brunstcam">Brunstcam</LuxuryButton>
          <LuxuryButton href="/why-us">Why Us</LuxuryButton>
          <LuxuryButton href="/contact">Contact Us</LuxuryButton>
        </div>
      </section>
    </div>
  );
}
