'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Contact() {
  return (
    <div className="site-main">
      <section className="inner space-y-20 max-w-3xl">
        <header className="space-y-6">
          <h1 className="luxury-heading text-4xl tracking-[1.2em]">Contact Us</h1>
        </header>

        <div className="space-y-12 text-center font-body text-lg tracking-widest leading-relaxed text-primary/70">
          <div className="space-y-4">
            <p>We are new, only on paper!</p>
            <p>The field has been ours since the last 730+ days!</p>
          </div>

          <p className="font-headline text-2xl italic text-primary/80">
            A few words from us to you!
          </p>

          <p>
            As much as we know you deserve the full-fledged market experience, we are here to show you what a passionate team can do.
          </p>

          <p>
            From the very first step, we promise you will see what sets us apart from the rest.
          </p>

          <p>
            Our only dream is to bring your business and brand closer to the world in a weirdly beautiful and wild way.
          </p>

          <p className="font-headline text-xl italic text-primary/80">
            Together, let’s ace the race, my friend
          </p>

          <div className="space-y-6 pt-12">
            <p className="luxury-heading text-xs tracking-[0.5em]">Be part of Team Brunst</p>
            <p className="text-sm text-primary/50 uppercase tracking-[0.3em]">
              As a client, friend, author, sponsor, or as a team member!
            </p>
            <div className="pt-8">
              <LuxuryButton href="mailto:concierge@brunststudios.com">Connect Now!</LuxuryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
