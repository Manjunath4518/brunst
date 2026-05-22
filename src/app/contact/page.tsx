'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Contact() {
  return (
    <div className="site-main">
      <section className="inner space-y-16">
        <header className="space-y-4">
          <h1 className="luxury-heading text-4xl tracking-[1.2em]">Connect</h1>
          <p className="font-body text-primary/40 text-[10px] tracking-[0.4em] uppercase">Studio Concierge</p>
        </header>

        <div className="max-w-2xl space-y-12">
          <p className="font-headline text-2xl italic text-primary/50 leading-relaxed">
            Your vision deserves orchestration. Start the conversation with our creative directors.
          </p>

          <div className="space-y-8 pt-12">
            <div className="space-y-2">
              <p className="luxury-heading text-[10px] text-accent tracking-[0.4em] mb-0">Email</p>
              <p className="font-body text-xl tracking-widest text-primary/80">concierge@brunststudios.com</p>
            </div>
            
            <div className="pt-8">
              <LuxuryButton href="mailto:concierge@brunststudios.com">Send Inquiry</LuxuryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}