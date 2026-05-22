'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0f1a] pointer-events-none overflow-hidden animate-cinematic-exit">
      {/* Background Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center animate-aura-spread">
        <div 
          className="w-[120vw] h-[120vw] rounded-full blur-[120px]"
          style={{ 
            background: 'radial-gradient(circle, rgba(92,124,229,0.25) 0%, rgba(92,124,229,0) 70%)' 
          }}
        />
      </div>

      {/* Cinematic Title & Tagline */}
      <div className="relative z-10 flex flex-col items-center gap-12 text-center px-8">
        <h1 className="animate-cinematic-title font-headline text-4xl md:text-7xl lg:text-9xl text-[#FDFBF2] tracking-[1.2em] uppercase whitespace-nowrap">
          BRUNST STUDIOS
        </h1>
        
        <p className="opacity-0 animate-cinematic-tagline font-body text-[#FDFBF2]/80 text-[10px] md:text-xs tracking-[0.6em] uppercase max-w-lg leading-relaxed italic">
          Bringing together the world’s creative diversity
        </p>
      </div>
    </div>
  );
}
