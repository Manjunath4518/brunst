
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'What We Do', href: '/what-we-do' },
  { name: 'Brunstcam', href: '/brunstcam' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Narrative Architect', href: '/ai-architect' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference">
      <Link href="/" className="group flex items-center gap-3">
        <div className="w-10 h-10 border border-primary flex items-center justify-center text-primary font-headline text-xl group-hover:bg-primary group-hover:text-background transition-all duration-500">
          B
        </div>
        <span className="luxury-heading text-sm hidden sm:block">Brunst</span>
      </Link>

      <div className="flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300",
              pathname === link.href ? "text-accent" : "text-primary/70 hover:text-primary"
            )}
          >
            {link.name}
            <span className={cn(
              "absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500",
              pathname === link.href ? "w-full" : "group-hover:w-full"
            )} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
