
'use client';

import { useEffect, useState } from 'react';

export default function WhyUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const philosophy = [
    {
      title: "Less but Better",
      content: "We reject the noise. Our design philosophy is rooted in intentionality, ensuring every pixel and every word serves a singular, powerful purpose."
    },
    {
      title: "Emotional Resonance",
      content: "We don't just build brands; we build emotional worlds. Luxury isn't a price tag—it's how a story makes the target feel when they interact with it."
    },
    {
      title: "Technical Mastery",
      content: "Combining aesthetic purity with cutting-edge technology. Our digital experiences are fluid, performant, and future-proof."
    }
  ];

  return (
    <div className="pt-32 pb-40 px-8">
      <div className="max-w-4xl mx-auto space-y-40">
        <header className="space-y-8 text-center">
          <h1 className="luxury-heading text-4xl md:text-6xl">Philosophy</h1>
          <p className="font-headline text-2xl md:text-4xl italic text-primary/50 leading-relaxed">
            "We believe that true luxury lies in the space between the notes."
          </p>
        </header>

        <div className="space-y-32">
          {philosophy.map((item, idx) => (
            <div 
              key={idx}
              className="group space-y-12 transition-all duration-1000"
              style={{
                opacity: Math.max(0.1, Math.min(1, (scrollY - (idx * 300) + 400) / 400)),
                transform: `translateY(${Math.max(0, 100 - (scrollY - (idx * 300) + 400) / 4)}px)`
              }}
            >
              <div className="flex items-center gap-6">
                <span className="w-12 h-px bg-accent" />
                <h2 className="luxury-heading text-2xl md:text-3xl">{item.title}</h2>
              </div>
              <p className="font-body text-primary/70 text-2xl md:text-4xl leading-snug max-w-3xl pl-20 tracking-wide font-light">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <footer className="pt-40 text-center space-y-12">
          <div className="w-16 h-16 border border-primary flex items-center justify-center mx-auto luxury-heading text-2xl">B</div>
          <div className="space-y-4">
            <h3 className="luxury-heading text-2xl">The Brunstverse</h3>
            <p className="font-body text-primary/60 tracking-widest max-w-lg mx-auto italic">
              A diverse ecosystem of creativity where your brand becomes the masterpiece.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
