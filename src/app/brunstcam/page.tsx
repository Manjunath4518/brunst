'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Brunstcam() {
  return (
    <div className="site-main">
      <section className="inner space-y-12 max-w-4xl">
        <div className="space-y-12 text-center w-full">
          <header className="space-y-4">
            <h1 className="luxury-heading text-3xl md:text-4xl">Brunstcam</h1>
          </header>

          <p className="font-headline text-2xl md:text-3xl italic text-primary/70 leading-relaxed max-w-2xl mx-auto">
            All shot through an iPhone, but with a heart full of passion!
          </p>
          
          <div className="divider-line" />

          <div className="space-y-8 font-body text-sm md:text-base text-primary/50 max-w-2xl mx-auto">
            <p>Be it a random click, or an intentional shot.</p>
            <p>Be it just a rough cut clip, or a well curated video.</p>
          </div>

          <div className="divider-line" />

          <p className="font-headline text-xl text-primary/80 leading-relaxed italic max-w-2xl mx-auto">
            Brunstcam not just captures the moment, but it will give you something that’s worth every penny.
          </p>

          <div className="divider-line" />

          <p className="font-body text-xs md:text-sm text-primary/40 leading-loose max-w-2xl mx-auto">
            All we need is one chance, a trial, for you to see what we can do, and for us to create beyond what you expect!
          </p>

          <div className="pt-12">
            <LuxuryButton href="/contact">Book a trail through Brunstcam</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}