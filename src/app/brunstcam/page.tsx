'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Brunstcam() {
  return (
    <div className="site-main">
      <section className="inner space-y-20 max-w-4xl">
        <header className="space-y-6">
          <h1 className="luxury-heading text-3xl md:text-4xl tracking-[1.2em]">Brunstcam</h1>
        </header>

        <div className="space-y-12 text-center">
          <p className="font-headline text-2xl md:text-3xl italic text-primary/70 leading-relaxed max-w-2xl mx-auto">
            All shot through an iPhone, but with a heart full of passion!
          </p>
          
          <div className="space-y-8 font-body text-sm md:text-base tracking-[0.2em] text-primary/50 max-w-2xl mx-auto uppercase">
            <p>Be it a random click, or an intentional shot!</p>
            <p>Be it just a rough cut clip, or a well curated video!</p>
          </div>

          <p className="font-headline text-xl text-primary/80 leading-relaxed italic max-w-2xl mx-auto">
            Brunstcam not just captures the moment, but it will give you something that’s worth every penny.
          </p>

          <p className="font-body text-xs md:text-sm tracking-[0.3em] text-primary/40 leading-loose max-w-2xl mx-auto uppercase">
            All we need is one chance, a trial, for you to see what we can do, and for us to create beyond what you expect!
          </p>

          <div className="pt-12">
            <LuxuryButton href="/contact">Connect with us this instant, for booking a trail through Brunstcam!</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
