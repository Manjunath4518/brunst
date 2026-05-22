
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
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background intro-fade-out pointer-events-none">
      <div className="relative flex flex-col items-center">
        {/* Abstract Logo Symbol */}
        <div className="w-24 h-24 border-2 border-primary animate-logo-intro flex items-center justify-center relative">
          <div className="absolute inset-2 border border-accent animate-pulse" />
          <span className="font-headline text-4xl text-primary">B</span>
        </div>
        
        <div className="mt-8 text-center space-y-4">
          <h1 className="luxury-heading text-2xl opacity-0 animate-fade-reveal [animation-delay:1.5s]">
            Brunst Studios
          </h1>
          <p className="font-body text-primary/60 italic tracking-widest opacity-0 animate-fade-reveal [animation-delay:2.2s]">
            Bringing together the world’s creative diversity
          </p>
        </div>
      </div>
    </div>
  );
}
