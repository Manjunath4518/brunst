'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Brunstcam() {
  return (
    <div className="site-main">
      <section className="inner space-y-12 max-w-4xl">
        <div className="space-y-12 text-center w-full">
          <header className="space-y-4">
            <h1 className="luxury-heading text-4xl md:text-5xl">Brunstcam</h1>
          </header>

          <p className="font-headline text-2xl md:text-3xl font-medium italic text-primary/70 leading-relaxed max-w-2xl mx-auto tracking-tight">
            All Shot Through An iPhone, But With A Heart Full Of Passion!
          </p>
          
          <div className="divider-line" />

          <div className="space-y-8 font-body text-base md:text-lg font-normal text-primary/50 max-w-2xl mx-auto">
            <p>Be It A Random Click, Or An Intentional Shot.</p>
            <p>Be It Just A Rough Cut Clip, Or A Well Curated Video.</p>
          </div>

          <div className="divider-line" />

          <p className="font-headline text-xl md:text-2xl font-medium text-primary/80 leading-relaxed italic max-w-2xl mx-auto tracking-tight">
            Brunstcam Not Just Captures The Moment, But It Will Give You Something That’s Worth Every Penny.
          </p>

          <div className="divider-line" />

          <p className="font-body text-sm md:text-base font-normal text-primary/40 leading-loose max-w-2xl mx-auto">
            All We Need Is One Chance, A Trial, For You To See What We Can Do, And For Us To Create Beyond What You Expect!
          </p>

          <div className="pt-12">
            <LuxuryButton href="/contact">Book A Trial Through Brunstcam</LuxuryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
