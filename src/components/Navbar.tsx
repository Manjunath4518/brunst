'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-[1000px] mx-auto px-8 py-6">
        <div className="flex items-center justify-center gap-6">
          <Link href="/" className="flex items-center gap-6 group">
            {/* Logo */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/brunst.png" 
                alt="Brunst Studios Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>

            {/* Text Block */}
            <div className="flex flex-col items-start">
              <h1 className="font-headline text-2xl md:text-3xl tracking-[0.02em] text-primary">
                Brunst Studios
              </h1>
              <p className="font-body text-primary/60 text-[10px] md:text-xs tracking-[0.02em] italic">
                Aiming For Only That Stands Out!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
