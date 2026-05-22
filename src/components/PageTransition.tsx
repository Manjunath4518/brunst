'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    setTransitionStage('fadeOut');
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
      window.scrollTo(0, 0);
    }, 800);
    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      className={`transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        transitionStage === 'fadeIn' ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
      }`}
    >
      {displayChildren}
    </div>
  );
}