'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Brunstcam() {
  return (
    <div className="site-main">
      <section className="inner space-y-16">
        <header className="space-y-4">
          <h1 className="luxury-heading text-4xl tracking-[1.2em]">Brunstcam</h1>
          <p className="font-body text-primary/40 text-[10px] tracking-[0.4em] uppercase">Cinematic Authorship</p>
        </header>

        <div className="max-w-3xl space-y-12">
          <p className="font-headline text-2xl md:text-3xl italic text-primary/60 leading-relaxed text-center">
            Through the lens, we capture motion, emotion, and the silent narratives of luxury. A cinematic approach to storytelling that transcends the frame.
          </p>
          
          <div className="w-px h-24 bg-primary/10 mx-auto" />
          
          <div className="flex justify-center">
            <LuxuryButton href="/contact">Inquire for Film</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}