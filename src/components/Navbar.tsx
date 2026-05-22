'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-[1000px] mx-auto px-8 py-6">
        
        {/* Branding Only */}
        <div className="flex items-center justify-center gap-6">
          
          {/* Logo */}
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image 
              src="/brunst.png" 
              alt="Brunst Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>

          {/* Brand Name (UNCHANGED FONT) */}
          <h1 className="font-headline text-2xl md:text-3xl uppercase tracking-[0.2em] text-primary">
            BRUNST STUDIOS
          </h1>

        </div>

      </div>
    </header>
  );
}