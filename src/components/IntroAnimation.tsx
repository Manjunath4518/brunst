'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const brandName = "BRUNST STUDIOS";
  const letterDelay = 80; // ms
  const buildTime = brandName.length * letterDelay;
  const holdTime = 2000; // 2 seconds hold after full text
  const totalIntroTime = buildTime + holdTime + 800; // buffer for tagline/exit

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, totalIntroTime + 1000); 
    return () => clearTimeout(timer);
  }, [totalIntroTime]);

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

      {/* Typewriter Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6 w-full max-w-4xl mx-auto">
        <h1 
          className="fluid-brand-title whitespace-nowrap animate-brand-settle"
          style={{ animationDelay: `${buildTime + 300}ms` }}
        >
          {brandName.split('').map((char, index) => (
            <span 
              key={index} 
              className="animate-letter-emerge"
              style={{ animationDelay: `${index * letterDelay}ms` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <p 
          className="opacity-0 animate-tagline-reveal font-body text-primary/70 text-[10px] md:text-xs tracking-[0.4em] uppercase leading-relaxed italic"
          style={{ animationDelay: `${buildTime + 800}ms` }}
        >
          Bringing together the world’s creative diversity
        </p>
      </div>
    </div>
  );
}