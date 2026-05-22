'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { name: 'What We Do', href: '/what-we-do' },
  { name: 'Brunstcam', href: '/brunstcam' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-10 flex items-center justify-between">
      <Link href="/" className="group flex items-center gap-4">
        <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
           <Image 
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=200&h=200&auto=format&fit=crop" 
            alt="Brunst Logo" 
            fill 
            className="object-contain"
            data-ai-hint="logo icon"
          />
        </div>
      </Link>

      <div className="flex items-center gap-10">
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
      </div>
    </nav>
  );
}
