'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Home() {
  return (
    <div className="site-main">
      <section className="inner min-h-screen pt-40">
        <div className="subtle-box max-w-[800px] w-full space-y-12">
          <div className="text-center space-y-6">
            <p className="font-headline text-xl md:text-2xl font-medium italic text-primary/40 tracking-tight">
              The Brunstverse Of Creativity
            </p>
          </div>

          <div className="divider-line" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[500px] mx-auto">
            <LuxuryButton href="/services" className="w-full">What We Do</LuxuryButton>
            <LuxuryButton href="/brunstcam" className="w-full">Brunstcam</LuxuryButton>
            <LuxuryButton href="/whyus" className="w-full">Why Us</LuxuryButton>
            <LuxuryButton href="/contact" className="w-full">Contact Us</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
