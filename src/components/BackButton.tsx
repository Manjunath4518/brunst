'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="flex items-center gap-2 text-primary/40 hover:text-accent transition-all duration-300 group mb-12 self-start"
      aria-label="Go Back"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/10 group-hover:border-accent transition-colors">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      </div>
      <span className="font-body text-xs font-medium tracking-tight">Back To Previous</span>
    </button>
  );
}
