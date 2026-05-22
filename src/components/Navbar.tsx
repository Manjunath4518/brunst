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
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8 md:px-12 md:py-10 flex items-center justify-between pointer-events-auto">
      <Link href="/" className="group flex items-center gap-4">
        <div className="relative w-8 h-8 transition-transform duration-500 group-hover:scale-110">
           <Image 
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=100&h=100&auto=format&fit=crop" 
            alt="Brunst Logo" 
            fill 
            className="object-contain invert brightness-200"
            data-ai-hint="luxury logo"
          />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative text-[8px] uppercase tracking-[0.4em] font-medium transition-colors duration-500",
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
      </div>
    </nav>
  );
}
