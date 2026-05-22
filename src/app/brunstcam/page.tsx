
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import LuxuryButton from '@/components/LuxuryButton';
import { useRef, useEffect } from 'react';

export default function Brunstcam() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const galleryItems = [
    { id: 'cam-1', title: 'Eternal Dusk', category: 'Film' },
    { id: 'cam-2', title: 'Textured Soul', category: 'Still' },
    { id: 'cam-3', title: 'Minimal Geometry', category: 'Architect' },
    { id: 'cam-1', title: 'Shadow Play', category: 'Film' },
    { id: 'cam-2', title: 'Organic Flow', category: 'Still' },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 3,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <div className="pt-32 min-h-screen flex flex-col">
      <div className="px-8 space-y-4 mb-16 text-center">
        <h1 className="luxury-heading text-4xl">Brunstcam</h1>
        <p className="font-body text-primary/60 tracking-widest italic max-w-xl mx-auto">
          Cinematic storytelling through the lens. Inertia, light, and movement frozen in time.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="scroll-container flex gap-12 px-8 overflow-x-auto pb-20 items-end flex-1 snap-x snap-mandatory"
      >
        {galleryItems.map((item, idx) => {
          const img = PlaceHolderImages.find(i => i.id === item.id);
          return (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] snap-center group space-y-6"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-primary/5">
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[4s] group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000" />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
              </div>
              <div className="flex justify-between items-end border-b border-primary/10 pb-4 px-2">
                <div className="space-y-1">
                  <p className="luxury-heading text-[10px] text-accent">{item.category}</p>
                  <h3 className="luxury-heading text-xl">{item.title}</h3>
                </div>
                <span className="font-headline text-primary/30 italic text-sm">0{idx + 1}</span>
              </div>
            </div>
          );
        })}
        {/* Contact CTA card at end */}
        <div className="flex-shrink-0 w-[40vw] flex items-center justify-center snap-center">
          <div className="text-center space-y-8">
            <h2 className="luxury-heading text-3xl">Your Vision<br/>Awaits</h2>
            <LuxuryButton href="/contact">Book a Trial</LuxuryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
