'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Unmount after 3 seconds to ensure exit animation finishes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none overflow-hidden animate-intro-exit">
      {/* Background Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center animate-glow-spread">
        <div 
          className="w-[120vw] h-[120vw] rounded-full blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, rgba(92,124,229,0.2) 0%, rgba(92,124,229,0) 70%)' 
          }}
        />
      </div>

      {/* Instant Brand Presence */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-8">
        <h1 className="animate-snap-in font-headline text-4xl md:text-7xl lg:text-9xl text-primary tracking-[1.2em] uppercase whitespace-nowrap">
          BRUNST STUDIOS
        </h1>
        
        <p className="opacity-0 animate-tagline-entry font-body text-primary/70 text-[10px] md:text-xs tracking-[0.6em] uppercase max-w-lg leading-relaxed italic">
          Bringing together the world’s creative diversity
        </p>
      </div>
    </div>
  );
}
