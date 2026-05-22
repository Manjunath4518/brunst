
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import LuxuryButton from '@/components/LuxuryButton';

export default function WhatWeDo() {
  const services = [
    {
      id: 'write',
      title: 'Authors',
      subtitle: 'Manuscript Architect',
      desc: 'Crafting timeless narratives and literary legacies for the next generation of authors.',
      tags: ['Editorial', 'Publishing', 'Ghostwriting']
    },
    {
      id: 'create',
      title: 'Brands',
      subtitle: 'Identity Design',
      desc: 'Curating prestigious brand worlds that resonate with global luxury audiences.',
      tags: ['Branding', 'Strategy', 'Curation']
    },
    {
      id: 'play',
      title: 'Athletes',
      subtitle: 'Personal Legacy',
      desc: 'Orchestrating the public narratives and personal branding for world-class sports icons.',
      tags: ['Publicity', 'Partnerships', 'Lifestyle']
    },
    {
      id: 'design',
      title: 'Interiors',
      subtitle: 'Spatial Curator',
      desc: 'Designing sensory-driven architectural spaces and minimalist luxury interiors.',
      tags: ['Architecture', 'Furniture', 'Space']
    }
  ];

  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto space-y-32">
      <header className="space-y-6 text-center">
        <h1 className="luxury-heading text-4xl md:text-6xl">Disciplines</h1>
        <p className="font-body text-primary/60 tracking-[0.2em] uppercase text-xs">A multi-disciplinary studio of creative excellence</p>
      </header>

      <div className="space-y-40">
        {services.map((service, idx) => {
          const img = PlaceHolderImages.find(i => i.id === service.id);
          const isEven = idx % 2 === 0;
          return (
            <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
              <div className="flex-1 w-full group overflow-hidden border border-primary/5 rounded-sm relative h-[600px]">
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-105"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-1000" />
              </div>
              <div className="flex-1 space-y-8">
                <div className="space-y-2">
                  <p className="luxury-heading text-[10px] text-accent tracking-[0.5em]">{service.subtitle}</p>
                  <h2 className="luxury-heading text-3xl md:text-5xl">{service.title}</h2>
                </div>
                <p className="font-body text-primary/70 text-lg leading-relaxed tracking-wide">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-4">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.3em] px-4 py-2 border border-primary/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <LuxuryButton href="/contact">Begin Project</LuxuryButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
