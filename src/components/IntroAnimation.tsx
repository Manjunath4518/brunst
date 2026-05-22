'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background intro-fade-out pointer-events-none">
      <div className="relative flex flex-col items-center">
        {/* Brunst Logo Symbol */}
        <div className="w-20 h-20 border-[0.5px] border-primary/30 flex items-center justify-center relative animate-logo-sequence opacity-0">
          <div className="absolute inset-0 border-[0.5px] border-accent/20 scale-110" />
          <span className="font-headline text-3xl text-primary tracking-widest">B</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes logoSequence {
          0% { 
            opacity: 0; 
            filter: blur(80px); 
            transform: scale(0.6); 
          }
          40% { 
            opacity: 1; 
            filter: blur(0px); 
            transform: scale(1.2); 
          }
          70% { 
            opacity: 1; 
            filter: blur(0px); 
            transform: scale(1); 
          }
          100% { 
            opacity: 1; 
            filter: blur(0px); 
            transform: scale(1); 
          }
        }
        .animate-logo-sequence {
          animation: logoSequence 4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </div>
  );
}