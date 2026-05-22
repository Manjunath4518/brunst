
'use client';

import { useEffect, useState } from 'react';

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="parallax-bg fixed inset-0 overflow-hidden bg-background">
      <div 
        className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] opacity-[0.04] select-none pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <text x="50" y="60" textAnchor="middle" fontSize="40" className="font-headline">B</text>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 pointer-events-none" />
    </div>
  );
}
