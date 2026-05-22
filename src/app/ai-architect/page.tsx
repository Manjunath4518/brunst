
'use client';

import { useState } from 'react';
import { generateNarrative, AiNarrativeArchitectOutput } from '@/ai/flows/ai-narrative-architect-flow';
import LuxuryButton from '@/components/LuxuryButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, Sparkles } from 'lucide-react';

export default function AiArchitect() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AiNarrativeArchitectOutput | null>(null);
  const [tones, setTones] = useState<string[]>([]);

  const toneOptions = ['Luxury', 'Avant-garde', 'Minimalist', 'Empowering', 'Classic', 'Seductive'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const output = await generateNarrative({
        brandName: formData.get('brandName') as string,
        projectDescription: formData.get('projectDescription') as string,
        targetAudience: formData.get('targetAudience') as string,
        desiredEmotionalTones: tones,
        keywords: (formData.get('keywords') as string).split(',').map(k => k.trim())
      });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-40 px-8 max-w-6xl mx-auto">
      <header className="text-center mb-20 space-y-6">
        <div className="inline-flex items-center gap-2 text-accent luxury-heading text-[10px]">
          <Sparkles className="w-3 h-3" />
          Powered by Brunstverse AI
        </div>
        <h1 className="luxury-heading text-4xl md:text-5xl">Narrative Architect</h1>
        <p className="font-body text-primary/60 tracking-widest max-w-2xl mx-auto">
          Articulate your brand's emotional soul. Our AI creative director helps you craft editorial copy and conceptual narratives.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 glass-card p-10 rounded-sm border-primary/5">
          <div className="space-y-2">
            <Label className="luxury-heading text-[10px] tracking-[0.3em]">Brand Name</Label>
            <Input name="brandName" placeholder="e.g. AURUM" className="bg-transparent border-primary/10 rounded-none h-12 focus-visible:ring-accent" required />
          </div>

          <div className="space-y-2">
            <Label className="luxury-heading text-[10px] tracking-[0.3em]">Project Essence</Label>
            <Textarea name="projectDescription" placeholder="What story are we telling?" className="bg-transparent border-primary/10 rounded-none min-h-[120px] focus-visible:ring-accent" required />
          </div>

          <div className="space-y-2">
            <Label className="luxury-heading text-[10px] tracking-[0.3em]">Audience</Label>
            <Input name="targetAudience" placeholder="Who defines this space?" className="bg-transparent border-primary/10 rounded-none h-12 focus-visible:ring-accent" required />
          </div>

          <div className="space-y-4">
            <Label className="luxury-heading text-[10px] tracking-[0.3em]">Emotional Tones</Label>
            <div className="grid grid-cols-2 gap-4">
              {toneOptions.map(tone => (
                <div key={tone} className="flex items-center space-x-2">
                  <Checkbox 
                    id={tone} 
                    onCheckedChange={(checked) => {
                      if (checked) setTones([...tones, tone]);
                      else setTones(tones.filter(t => t !== tone));
                    }}
                  />
                  <label htmlFor={tone} className="text-xs uppercase tracking-widest text-primary/70">{tone}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="luxury-heading text-[10px] tracking-[0.3em]">Key Phrases (Comma separated)</Label>
            <Input name="keywords" placeholder="Excellence, Timeless, Motion" className="bg-transparent border-primary/10 rounded-none h-12 focus-visible:ring-accent" />
          </div>

          <LuxuryButton type="submit" disabled={loading} className="w-full">
            {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Orchestrate Narrative"}
          </LuxuryButton>
        </form>

        {/* Results */}
        <div className="space-y-12">
          {!result && !loading && (
            <div className="h-full min-h-[600px] flex flex-col items-center justify-center text-center space-y-6 border border-dashed border-primary/10 rounded-sm p-12 opacity-50">
              <Sparkles className="w-12 h-12 text-accent/30" />
              <p className="luxury-heading text-sm">Your Architect is Ready</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase">Fill out the brief to begin the orchestration</p>
            </div>
          )}

          {loading && (
            <div className="h-full min-h-[600px] flex flex-col items-center justify-center text-center space-y-6 bg-accent/5 animate-pulse rounded-sm p-12">
              <Loader2 className="w-12 h-12 animate-spin text-accent" />
              <p className="luxury-heading text-sm">Orchestrating Narrative...</p>
            </div>
          )}

          {result && (
            <div className="space-y-16 animate-fade-reveal">
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="luxury-heading text-[10px] text-accent">Conceptual Summary</span>
                  <div className="flex-1 h-px bg-primary/5" />
                </div>
                <p className="font-headline text-3xl italic leading-tight text-primary/80">
                  {result.narrativeSummary}
                </p>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="luxury-heading text-[10px] text-accent">High Fashion Copy</span>
                  <div className="flex-1 h-px bg-primary/5" />
                </div>
                <div className="space-y-8">
                  {result.highFashionCopy.map((copy, i) => (
                    <div key={i} className="pl-6 border-l-2 border-accent/20">
                      <p className="font-body text-lg leading-relaxed tracking-wide text-primary/70 italic">
                        "{copy}"
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="luxury-heading text-[10px] text-accent">Brunstverse Connection</span>
                  <div className="flex-1 h-px bg-primary/5" />
                </div>
                <p className="font-body text-sm leading-relaxed tracking-widest text-primary/60 uppercase">
                  {result.brunstverseConnection}
                </p>
              </section>

              <div className="flex flex-wrap gap-3">
                {result.suggestedTones.map(tone => (
                  <span key={tone} className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-[10px] luxury-heading text-accent">{tone}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
