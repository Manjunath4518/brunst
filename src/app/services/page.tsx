'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Services() {
  const sections = [
    {
      title: "Home Of Authors (Write)",
      items: ["Editing & Proofreading", "Design", "Formatting", "Publishing Setup", "Marketing Campaigns", "Optional Add-Ons"]
    },
    {
      title: "Home Of Brands (Create)",
      items: ["Branding & Advertising", "Marketing", "Platform Management", "Wall Branding", "Business Development & Strategy"]
    },
    {
      title: "Home Of Athletes (Play)",
      items: ["Talent Management", "Personal Branding", "Brand Endorsements & Partnerships", "PR & Reputation Management", "Wellness Consulting"]
    },
    {
      title: "Home Of Interiors (Design)",
      items: ["Luxury Interior Styling", "Concept-Based Interiors", "3D Visualization & Rendering", "Interior Consultation", "Custom Design Solutions", "Project Management"]
    }
  ];

  return (
    <div className="site-main">
      <section className="inner space-y-20">
        <header className="space-y-4">
          <h1 className="luxury-heading text-3xl md:text-4xl">Write. Create. Play. Design.</h1>
          <p className="font-body text-primary/40 text-[10px] md:text-xs tracking-[0.08em]">Home To A World Of Industries</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="subtle-box text-left space-y-8 h-full">
                <h2 className="luxury-heading text-lg md:text-xl border-b border-primary/10 pb-6">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="font-body text-xs md:text-sm tracking-wide text-primary/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="divider-line" />

        <div className="pt-4">
          <LuxuryButton href="/contact">Connect Now</LuxuryButton>
        </div>
      </section>
    </div>
  );
}
