'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-[1000px] mx-auto px-8 py-6">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-6 group">
            <div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/brunst.png" 
                alt="Brunst Studios Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col items-start">
              <h1 className="font-headline text-2xl font-bold tracking-tight text-primary leading-none">
                Brunst Studios
              </h1>
              <p className="font-body text-primary/60 text-[11px] font-medium italic tracking-tight">
                Aiming For Only That Stands Out!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
