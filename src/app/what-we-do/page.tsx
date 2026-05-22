'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function WhatWeDo() {
  const sections = [
    {
      title: "Home of Authors (Write)",
      items: ["Editing & Proofreading", "Design", "Formatting", "Publishing Setup", "Marketing Campaigns", "Optional Add-ons"]
    },
    {
      title: "Home of Brands (Create)",
      items: ["Branding & Advertising", "Marketing", "Platform Management", "Wall Branding", "Business Development & Strategy"]
    },
    {
      title: "Home of Athletes (Play)",
      items: ["Talent Management", "Personal Branding", "Brand Endorsements & Partnerships", "PR & Reputation Management", "Wellness Consulting"]
    },
    {
      title: "Home of Interiors (Design)",
      items: ["Luxury Interior Styling", "Concept-Based Interiors", "3D Visualization & Rendering", "Interior Consultation", "Custom Design Solutions", "Project Management"]
    }
  ];

  return (
    <div className="site-main">
      <section className="inner space-y-24">
        <header className="space-y-6">
          <h1 className="luxury-heading text-4xl tracking-[1em]">Write. Create. Play. Design</h1>
          <p className="font-body text-primary/40 text-xs tracking-[0.4em] uppercase">Home to a world of industries</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 w-full text-left">
          {sections.map((section, index) => (
            <div key={index} className="space-y-8">
              <h2 className="luxury-heading text-xl tracking-[0.5em] border-b border-primary/10 pb-4">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="font-body text-sm tracking-widest text-primary/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-20">
          <LuxuryButton href="/contact">Begin a Project</LuxuryButton>
        </div>
      </section>
    </div>
  );
}
