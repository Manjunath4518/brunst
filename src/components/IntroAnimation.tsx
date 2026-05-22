'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4200); 
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none overflow-hidden animate-intro-exit">
      {/* Background Aura */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[120vw] h-[120vw] rounded-full blur-[120px] opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(92,124,229,0.4) 0%, rgba(92,124,229,0) 70%)' 
          }}
        />
      </div>

      {/* Cinematic Presence Wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6 w-full max-w-4xl mx-auto">
        {/* Logo Container */}
        <div className="relative w-[60vw] max-w-[240px] aspect-square animate-cinematic-snap">
          <Image 
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&h=400&auto=format&fit=crop" 
            alt="Brunst Studios Logo" 
            fill 
            className="object-contain invert brightness-200"
            priority
          />
        </div>

        {/* Text Container */}
        <div className="space-y-4 animate-cinematic-snap">
          <h1 className="fluid-brand-title whitespace-nowrap">
            BRUNST STUDIOS
          </h1>
          
          <p className="opacity-0 animate-tagline-reveal font-body text-primary/70 text-[10px] md:text-xs tracking-[0.4em] uppercase leading-relaxed italic">
            Bringing together the world’s creative diversity
          </p>
        </div>
      </div>
    </div>
  );
}
