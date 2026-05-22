'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'What We Do', href: '/what-we-do' },
  { name: 'Brunstcam', href: '/brunstcam' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-10 flex items-center justify-between pointer-events-none">
      <Link href="/" className="group flex items-center gap-4 pointer-events-auto">
        <div className="w-8 h-8 border-[0.5px] border-primary/20 flex items-center justify-center text-primary font-headline text-sm group-hover:border-accent group-hover:text-accent transition-all duration-500">
          B
        </div>
      </Link>

      <div className="flex items-center gap-10 pointer-events-auto">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative text-[9px] uppercase tracking-[0.4em] font-medium transition-colors duration-500",
              pathname === link.href ? "text-accent" : "text-primary/50 hover:text-primary"
            )}
          >
            {link.name}
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-[0.5px] bg-accent transition-all duration-700",
              pathname === link.href ? "w-full" : ""
            )} />
          </Link>
        ))}
      </div>
    </nav>
  );
}