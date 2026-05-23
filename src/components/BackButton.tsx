'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="fixed top-28 left-6 md:top-32 md:left-12 z-[40] flex items-center gap-2 text-primary/40 hover:text-accent transition-all duration-500 group"
      aria-label="Go Back"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/10 bg-background/50 backdrop-blur-md group-hover:border-accent group-hover:scale-110 transition-all duration-500">
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
      </div>
      <span className="hidden md:block font-body text-[10px] font-medium tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        Back
      </span>
    </button>
  );
}
