'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Contact() {
  return (
    <div className="site-main">
      <section className="inner space-y-12 max-w-3xl">
        <div className="space-y-12 text-center w-full">
          <header className="space-y-4">
            <h1 className="luxury-heading text-3xl md:text-4xl">Get in Touch</h1>
          </header>

          <div className="space-y-4 font-body text-sm md:text-base text-primary/60">
            <p>We are new, only on paper.</p>
            <p>The field has been ours for over 730 days.</p>
          </div>

          <div className="divider-line" />

          <p className="font-headline text-2xl md:text-3xl italic text-primary/80">
            A few words from us to you
          </p>

          <div className="divider-line" />

          <div className="space-y-8 font-body text-sm md:text-base text-primary/60 leading-relaxed">
            <p>
              As much as we know you deserve the full-fledged market experience, we are here to show you what a passionate team can do.
            </p>

            <p>
              From the very first step, we promise you will see what sets us apart from the rest.
            </p>

            <p>
              Our only dream is to bring your business and brand closer to the world in a weirdly beautiful and wild way.
            </p>

            <p className="font-headline text-xl md:text-2xl italic text-primary/80 pt-4">
              Together, let’s ace the race, my friend.
            </p>
          </div>

          <div className="divider-line" />

          <div className="space-y-6 pt-12">
            <p className="luxury-heading text-[10px] md:text-xs tracking-[0.2em]">Be part of Team Brunst</p>
            <p className="text-[10px] md:text-xs text-primary/40 uppercase tracking-[0.1em]">
              As a client, friend, author, sponsor, or as a team member.
            </p>
            <div className="pt-8">
              <LuxuryButton href="mailto:concierge@brunststudios.com">Connect Now</LuxuryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}