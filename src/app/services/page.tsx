'use client';

import LuxuryButton from '@/components/LuxuryButton';
import BackButton from '@/components/BackButton';

export default function Services() {
  const sections = [
    {
      title: "Home Of Authors (Write)",
      items: ["Editing And Proofreading", "Design", "Formatting", "Publishing Setup", "Marketing Campaigns", "Optional Add-Ons"]
    },
    {
      title: "Home Of Brands (Create)",
      items: ["Branding And Advertising", "Marketing", "Platform Management", "Wall Branding", "Business Development And Strategy"]
    },
    {
      title: "Home Of Athletes (Play)",
      items: ["Talent Management", "Personal Branding", "Brand Endorsements And Partnerships", "PR And Reputation Management", "Wellness Consulting"]
    },
    {
      title: "Home Of Interiors (Design)",
      items: ["Luxury Interior Styling", "Concept-Based Interiors", "3D Visualization And Rendering", "Interior Consultation", "Custom Design Solutions", "Project Management"]
    }
  ];

  return (
    <div className="site-main">
      <BackButton />
      <section className="inner space-y-20">
        <header className="space-y-4 w-full flex flex-col items-center">
          <h1 className="luxury-heading text-4xl md:text-5xl font-bold">Write. Create. Play. Design.</h1>
          <p className="font-body text-primary/50 text-[12px] md:text-sm font-medium tracking-tight">Home To A World Of Industries</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <div key={index}>
              <div className="subtle-box text-left space-y-8 h-full">
                <h2 className="font-headline text-xl md:text-2xl font-semibold text-primary border-b border-primary/10 pb-6">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="font-body text-sm md:text-base font-normal tracking-tight text-primary/70">
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
