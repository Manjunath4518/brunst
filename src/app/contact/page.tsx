'use client';

import LuxuryButton from '@/components/LuxuryButton';
import BackButton from '@/components/BackButton';

export default function Contact() {
  return (
    <div className="site-main">
      <BackButton />
      <section className="inner space-y-12 max-w-3xl">
        <div className="space-y-12 text-center w-full flex flex-col items-center">
          <header className="space-y-4">
            <h1 className="luxury-heading text-4xl md:text-5xl font-bold">Get In Touch</h1>
          </header>

          <div className="space-y-4 font-body text-base md:text-lg font-normal text-primary/60">
            <p>We Are New, Only On Paper. </p>
            <p>The Field Has Been Ours For Over 730 Days.</p>
          </div>

          <div className="divider-line" />

          <p className="font-headline text-2xl md:text-3xl font-semibold italic text-primary/80 tracking-tight">
            A Few Words From Us To You
          </p>

          <div className="divider-line" />

          <div className="space-y-8 font-body text-base md:text-lg font-normal text-primary/70 leading-relaxed">
            <p>
              As Much As We Know You Deserve The Full-Fledged Market Experience, We Are Here To Show You What A Passionate Team Can Do.
            </p>

            <p>
              From The Very First Step, We Promise You Will See What Sets Us Apart From The Rest.
            </p>

            <p>
              Our Only Dream Is To Bring Your Business And Brand Closer To The World In A Weirdly Beautiful And Wild Way.
            </p>

            <p className="font-headline text-xl md:text-2xl font-medium italic text-primary/80 pt-4 tracking-tight">
              Together, Let’s Ace The Race, My Friend.
            </p>
          </div>

          <div className="divider-line" />

          <div className="space-y-6 pt-12">
            <p className="font-headline text-base font-semibold text-primary tracking-tight">Be Part Of Team Brunst</p>
            <p className="text-sm font-medium text-primary/50 tracking-tight">
              As A Client, Friend, Author, Sponsor, Or As A Team Member.
            </p>
            <div className="pt-8">
              <LuxuryButton href="mailto:chandrika@brunststudios.com">Connect Now</LuxuryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
