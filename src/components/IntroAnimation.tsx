'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] rounded-full bg-accent/20 animate-intro-glow blur-[80px]" />
      </div>

      {/* Main Text Animation */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-8">
        <h1 className="animate-intro-text font-headline text-3xl md:text-5xl lg:text-7xl text-primary tracking-[1em] uppercase whitespace-nowrap">
          Brunst Studios
        </h1>
        
        <p className="opacity-0 animate-[textReveal_1s_ease_3.2s_forwards] font-body text-primary/60 text-[10px] md:text-xs tracking-[0.5em] uppercase max-w-lg leading-relaxed">
          Bringing together the world&apos;s creative diversity
        </p>
      </div>
    </div>
  );
}
