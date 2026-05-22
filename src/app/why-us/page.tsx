'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function WhyUs() {
  const principles = [
    "Aesthetic Intentionality",
    "Emotional Soul",
    "Technical Precision"
  ];

  return (
    <div className="site-main">
      <section className="inner space-y-24">
        <header className="space-y-4">
          <h1 className="luxury-heading text-4xl tracking-[1em]">Philosophy</h1>
          <p className="font-body text-primary/40 text-[10px] tracking-[0.3em] uppercase">The Brunst Standard</p>
        </header>

        <div className="space-y-20 max-w-2xl text-center">
          <p className="font-body text-lg md:text-xl text-primary/70 tracking-wide leading-relaxed">
            We believe that true luxury lies in the space between the notes. Our philosophy rejects the noise of commonality to find the singular, powerful purpose of your brand.
          </p>

          <div className="flex flex-col items-center gap-8">
            {principles.map((p, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-8 h-[0.5px] bg-accent/40" />
                <span className="luxury-heading text-xs tracking-[0.6em] mb-0">{p}</span>
                <span className="w-8 h-[0.5px] bg-accent/40" />
              </div>
            ))}
          </div>

          <div className="pt-12">
            <LuxuryButton href="/contact">Experience Excellence</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}