'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function WhyUs() {
  return (
    <div className="site-main">
      <section className="inner pt-40 space-y-12 max-w-3xl">
        <div className="subtle-box space-y-12 text-center w-full">
          <div className="space-y-6 text-primary/60 uppercase tracking-[0.15em] font-body text-sm md:text-base leading-relaxed">
            <p>
              Brunst, earlier, was just an idea born out of the blue.
              And, what’s better than to stick to the moment of blue?
            </p>

            <p className="font-headline text-2xl md:text-3xl italic text-primary/80 normal-case tracking-normal">
              That’s what happened!
            </p>

            <p>
              What just was a fleeting thought now became the moment the world will love!
            </p>
          </div>

          <div className="divider-line" />

          <div className="space-y-8 text-primary/60 uppercase tracking-[0.15em] font-body text-sm md:text-base leading-relaxed">
            <p>
              The Blues know what the market needs.
              You may argue that many understand the market better. So, what’s special here?
            </p>

            <p className="font-headline text-xl md:text-2xl italic text-primary/80 normal-case tracking-normal">
              Well, imagine your business or brand having someone who can not only turn heads but also create a beeline towards your product?
            </p>

            <p>
              And that’s what Brunst does.
            </p>

            <p>
              They not only understand but also plan to improve the business or brand in ways that bring authenticity to the centre stage, and what’s better than attracting the world through nothing but being yourself?
            </p>
          </div>

          <div className="pt-8">
            <LuxuryButton href="/contact">Experience Excellence</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
