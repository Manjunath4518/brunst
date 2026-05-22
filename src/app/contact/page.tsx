
'use client';

import { useState } from 'react';
import LuxuryButton from '@/components/LuxuryButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Inquiry Received",
      description: "Our curator will contact you shortly to schedule your vision session.",
    });
  };

  if (submitted) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center px-8">
        <div className="text-center space-y-12 animate-fade-reveal">
          <div className="w-24 h-24 border-2 border-accent flex items-center justify-center mx-auto luxury-heading text-4xl text-accent animate-pulse">B</div>
          <div className="space-y-4">
            <h1 className="luxury-heading text-3xl md:text-5xl">Thank You</h1>
            <p className="font-body text-primary/60 tracking-widest max-w-lg mx-auto">
              Your inquiry has been archived in the Brunstverse. A dedicated curator will reach out to orchestrate your next move.
            </p>
          </div>
          <LuxuryButton href="/">Return Home</LuxuryButton>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <header className="space-y-6">
            <h1 className="luxury-heading text-4xl md:text-6xl">Connect</h1>
            <p className="font-headline text-2xl italic text-primary/50 leading-relaxed">
              Define your legacy. Start the conversation with our creative directors today.
            </p>
          </header>

          <div className="space-y-10 pt-10 border-t border-primary/5">
            <div className="space-y-2">
              <p className="luxury-heading text-[10px] text-accent tracking-[0.4em]">Email</p>
              <p className="font-body text-xl tracking-widest">concierge@brunststudios.com</p>
            </div>
            <div className="space-y-2">
              <p className="luxury-heading text-[10px] text-accent tracking-[0.4em]">Studio</p>
              <p className="font-body text-xl tracking-widest">77 Creative Ave, Suite Luxury<br/>Metropolis, BX 1029</p>
            </div>
            <div className="space-y-2">
              <p className="luxury-heading text-[10px] text-accent tracking-[0.4em]">Social</p>
              <div className="flex gap-8">
                {['Instagram', 'LinkedIn', 'Behance'].map(s => (
                  <a key={s} href="#" className="font-body text-sm uppercase tracking-widest hover:text-accent transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-12 space-y-10 rounded-sm border-primary/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label className="luxury-heading text-[10px] tracking-[0.3em]">Full Name</Label>
              <Input placeholder="E.g. Alexander Sterling" className="bg-transparent border-primary/10 rounded-none h-12 focus-visible:ring-accent" required />
            </div>
            <div className="space-y-2">
              <Label className="luxury-heading text-[10px] tracking-[0.3em]">Email Address</Label>
              <Input type="email" placeholder="E.g. a.sterling@brand.com" className="bg-transparent border-primary/10 rounded-none h-12 focus-visible:ring-accent" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="luxury-heading text-[10px] tracking-[0.3em]">Project Type</Label>
            <select className="w-full bg-transparent border-b border-primary/10 py-3 text-sm tracking-widest uppercase focus:outline-none focus:border-accent appearance-none">
              <option className="bg-background">Authorship</option>
              <option className="bg-background">Brand Identity</option>
              <option className="bg-background">Athletic Narrative</option>
              <option className="bg-background">Interior Design</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label className="luxury-heading text-[10px] tracking-[0.3em]">Vision Brief</Label>
            <Textarea placeholder="Tell us about the dream..." className="bg-transparent border-primary/10 rounded-none min-h-[150px] focus-visible:ring-accent" required />
          </div>

          <LuxuryButton type="submit" className="w-full">Submit Inquiry</LuxuryButton>
          <p className="text-[10px] text-center text-primary/30 uppercase tracking-[0.3em]">By submitting, you agree to our privacy standards.</p>
        </form>
      </div>
    </div>
  );
}
