'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total duration of 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2600); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none overflow-hidden animate-intro-exit">
      {/* Background Aura */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[100vw] h-[100vw] rounded-full blur-[100px] opacity-20"
          style={{ 
            background: 'radial-gradient(circle, rgba(92,124,229,0.3) 0%, rgba(92,124,229,0) 70%)' 
          }}
        />
      </div>

      {/* Snap-In Brand Presence */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4 w-full">
        <h1 className="animate-snap-entry animate-bounce-settle fluid-brand-title whitespace-nowrap px-4 text-center">
          BRUNST STUDIOS
        </h1>
        
        <p className="opacity-0 animate-tagline-fade font-body text-primary/70 text-[10px] md:text-xs tracking-[0.4em] uppercase max-w-lg leading-relaxed italic">
          Bringing together the world’s creative diversity
        </p>
      </div>
    </div>
  );
}