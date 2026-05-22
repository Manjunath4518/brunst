
'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface LuxuryButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function LuxuryButton({ href, onClick, children, className, type = "button", disabled = false }: LuxuryButtonProps) {
  const content = (
    <span className="relative z-10">{children}</span>
  );

  const styleClasses = "luxury-button inline-block text-center relative overflow-hidden group " + (className || "");

  if (href) {
    return (
      <Link href={href} className={styleClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styleClasses} disabled={disabled}>
      {content}
    </button>
  );
}
