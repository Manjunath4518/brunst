'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { name: 'What We Do', href: '/services' },
  { name: 'Brunstcam', href: '/brunstcam' },
  { name: 'Why Us', href: '/whyus' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/5">
      <div className="max-w-[1000px] mx-auto px-8 py-6">
        {/* Branding Block - Shared Header Layout */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <Link href="/" className="relative w-16 h-16 md:w-20 md:h-20 transition-transform hover:scale-105">
             <Image 
              src="/brunst.png" 
              alt="Brunst Logo" 
              fill 
              className="object-contain"
              priority
            />
          </Link>
          <Link href="/" className="font-headline text-2xl md:text-3xl uppercase tracking-[0.2em] text-primary hover:opacity-80 transition-opacity">
            BRUNST STUDIOS
          </Link>
        </div>

        {/* Global Navigation Links */}
        <nav className="flex items-center justify-center gap-6 md:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-[9px] uppercase tracking-[0.4em] font-medium transition-colors duration-500",
                pathname === link.href ? "text-primary" : "text-primary/40 hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[0.5px] bg-primary transition-all duration-700",
                pathname === link.href ? "w-full" : ""
              )} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
