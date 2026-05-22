'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const brandName = "Brunst Studios";
  const letterDelay = 80;
  const buildTime = brandName.length * letterDelay;
  const holdTime = 2000;
  const totalIntroTime = buildTime + holdTime + 800;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, totalIntroTime + 1000); 
    return () => clearTimeout(timer);
  }, [totalIntroTime]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none overflow-hidden animate-intro-exit">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[120vw] h-[120vw] rounded-full blur-[120px] opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(92,124,229,0.4) 0%, rgba(92,124,229,0) 70%)' 
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6 w-full max-w-4xl mx-auto">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-headline tracking-[0.02em] text-primary animate-brand-settle"
          style={{ animationDelay: `${buildTime + 300}ms` }}
        >
          {brandName.split('').map((char, index) => (
            <span 
              key={index} 
              className="animate-letter-emerge"
              style={{ 
                animationDelay: `${index * letterDelay}ms`,
                fontWeight: 300
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <p 
          className="opacity-0 animate-tagline-reveal font-body text-primary/70 text-[10px] md:text-sm tracking-[0.05em] leading-relaxed italic"
          style={{ animationDelay: `${buildTime + 800}ms` }}
        >
          Bringing Together The World’s Creative Diversity
        </p>
      </div>
    </div>
  );
}
