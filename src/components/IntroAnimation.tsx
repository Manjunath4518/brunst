'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5500); // Allow time for the fade-out exit animation
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none overflow-hidden animate-cinematic-exit">
      {/* Background Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center animate-cinematic-aura">
        <div 
          className="w-[100vw] h-[100vw] rounded-full opacity-30 blur-[100px]"
          style={{ 
            background: 'radial-gradient(circle, rgba(92,124,229,0.4) 0%, rgba(92,124,229,0) 70%)' 
          }}
        />
      </div>

      {/* Cinematic Title & Tagline */}
      <div className="relative z-10 flex flex-col items-center gap-12 text-center px-8">
        <h1 className="animate-cinematic-title font-headline text-4xl md:text-6xl lg:text-8xl text-primary tracking-[1em] uppercase whitespace-nowrap">
          Brunst Studios
        </h1>
        
        <p className="opacity-0 animate-cinematic-tagline font-body text-primary/70 text-[10px] md:text-xs tracking-[0.5em] uppercase max-w-lg leading-relaxed italic">
          Bringing together the world&apos;s creative diversity
        </p>
      </div>
    </div>
  );
}
