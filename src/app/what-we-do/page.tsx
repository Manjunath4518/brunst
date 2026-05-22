'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function WhatWeDo() {
  const categories = [
    { title: 'Authors', subtitle: 'Manuscript Architect' },
    { title: 'Brands', subtitle: 'Identity Design' },
    { title: 'Athletes', subtitle: 'Personal Legacy' },
    { title: 'Interiors', subtitle: 'Spatial Curator' }
  ];

  return (
    <div className="site-main">
      <section className="inner space-y-24">
        <header className="space-y-4">
          <h1 className="luxury-heading text-4xl tracking-[1em]">Disciplines</h1>
          <p className="font-body text-primary/40 text-xs tracking-[0.3em] uppercase">Creative Excellence Across Domains</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full max-w-5xl">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-6 group">
              <div className="space-y-2">
                <p className="font-body text-[10px] text-accent tracking-[0.5em] uppercase">{cat.subtitle}</p>
                <h2 className="luxury-heading text-2xl tracking-[0.6em] group-hover:text-accent transition-colors duration-500">
                  {cat.title}
                </h2>
              </div>
              <div className="h-px w-8 bg-primary/20 mx-auto group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
            </div>
          ))}
        </div>

        <div className="pt-20">
          <LuxuryButton href="/contact">Begin a Project</LuxuryButton>
        </div>
      </section>
    </div>
  );
}