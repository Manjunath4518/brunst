'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-[90vh] space-y-16">
        <div className="space-y-8 flex flex-col items-center">
          {/* Central Logo */}
          <div className="w-16 h-16 border-[0.5px] border-primary/20 flex items-center justify-center mb-8">
            <span className="font-headline text-2xl text-primary">B</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="luxury-heading text-4xl md:text-5xl lg:text-6xl tracking-[0.8em]">
              Brunst Studios
            </h1>
            <p className="font-body text-primary/50 text-sm md:text-base tracking-[0.4em] uppercase">
              The Brunstverse of Creativity
            </p>
          </div>
        </div>

        <p className="font-headline text-xl md:text-2xl italic text-primary/40 max-w-2xl leading-relaxed">
          "Orchestrating premium narratives where aesthetic purity meets emotional resonance."
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <LuxuryButton href="/what-we-do">What We Do</LuxuryButton>
          <LuxuryButton href="/brunstcam">Brunstcam</LuxuryButton>
          <LuxuryButton href="/why-us">Why Us</LuxuryButton>
          <LuxuryButton href="/contact">Contact</LuxuryButton>
        </div>
      </section>
    </div>
  );
}