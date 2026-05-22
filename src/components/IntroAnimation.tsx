'use client';

import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFBF2] pointer-events-none">
      <div className="animate-landing">
        <h1 className="font-headline text-3xl md:text-5xl text-[#5C7CE5] tracking-[1em] uppercase whitespace-nowrap">
          Brunst Studios
        </h1>
      </div>
    </div>
  );
}
