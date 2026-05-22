'use client';

import LuxuryButton from '@/components/LuxuryButton';

export default function Services() {
  const sections = [
    {
      title: "Home of Authors (Write)",
      items: ["Editing & Proofreading", "Design", "Formatting", "Publishing Setup", "Marketing Campaigns", "Optional Add-ons"]
    },
    {
      title: "Home of Brands(Create)",
      items: ["Branding & Advertising", "Marketing", "Platform Management", "Wall Branding", "Business Development & Strategy"]
    },
    {
      title: "Home of Athletes(Play)",
      items: ["Talent Management", "Personal Branding", "Brand Endorsements & Partnerships", "PR & Reputation Management", "Wellness Consulting"]
    },
    {
      title: "Home of Interiors (Design)",
      items: ["Luxury Interior Styling", "Concept-Based Interiors", "3D Visualization & Rendering", "Interior Consultation", "Custom Design Solutions", "Project Management"]
    }
  ];

  return (
    <div className="site-main">
      <section className="inner pt-40 space-y-12">
        <div className="space-y-4">
          <h1 className="luxury-heading text-3xl md:text-4xl tracking-[1em]">Write. Create. Play. Design</h1>
          <p className="font-body text-primary/40 text-[10px] tracking-[0.4em] uppercase">Home to a world of industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {sections.map((section, index) => (
            <div key={index} className="subtle-box text-left space-y-8 h-full">
              <h2 className="luxury-heading text-lg md:text-xl tracking-[0.5em] border-b border-primary/10 pb-6">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="font-body text-xs md:text-sm tracking-[0.3em] text-primary/60 uppercase">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12">
          <LuxuryButton href="/contact">Connect Now!</LuxuryButton>
        </div>
      </section>
    </div>
  );
}