
'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    const handleScroll = () => {
      const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const indicator = document.getElementById('scroll-progress');
      if (indicator) indicator.style.width = `${progress}%`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-glow"
        style={{ 
          left: pos.x, 
          top: pos.y,
          width: isPointer ? '80px' : '40px',
          height: isPointer ? '80px' : '40px'
        }}
      />
      <div 
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}
