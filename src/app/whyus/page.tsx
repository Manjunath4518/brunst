'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function WhyUs() {
  return (
    <div className="site-main">
      <section className="inner space-y-12 max-w-3xl">
        <div className="space-y-12 text-center w-full">
          <header className="space-y-6">
            <h1 className="luxury-heading text-3xl md:text-4xl">Why Us</h1>
          </header>
          
          <div className="space-y-8 text-primary/60 font-body text-sm md:text-base leading-relaxed">
            <p>
              Brunst, Earlier, Was Just An Idea Born Out Of The Blue.
              And, What’s Better Than To Stick To The Moment Of Blue?
            </p>

            <p className="font-headline text-2xl md:text-3xl italic text-primary/80">
              That’s What Happened!
            </p>

            <p>
              What Just Was A Fleeting Thought Now Became The Moment The World Will Love.
            </p>
          </div>

          <div className="divider-line" />

          <div className="space-y-8 text-primary/60 font-body text-sm md:text-base leading-relaxed">
            <p>
              The Blues Know What The Market Needs.
              You May Argue That Many Understand The Market Better. So, What’s Special Here?
            </p>

            <p className="font-headline text-xl md:text-2xl italic text-primary/80">
              Well, Imagine Your Business Or Brand Having Someone Who Can Not Only Turn Heads But Also Create A Beeline Towards Your Product?
            </p>

            <p>
              And That’s What Brunst Does.
            </p>

            <p>
              They Not Only Understand But Also Plan To Improve The Business Or Brand In Ways That Bring Authenticity To The Centre Stage, And What’s Better Than Attracting The World Through Nothing But Being Yourself?
            </p>
          </div>

          <div className="divider-line" />

          <div className="pt-8">
            <LuxuryButton href="/contact">Experience Excellence</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
