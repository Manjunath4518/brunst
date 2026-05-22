
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import LuxuryButton from '@/components/LuxuryButton';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="relative pt-32 px-8">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-12">
        <div className="space-y-4 max-w-4xl mx-auto">
          <h2 className="luxury-heading text-5xl md:text-7xl leading-tight animate-fade-reveal">
            The Brunstverse<br />Of Creativity
          </h2>
          <p className="font-body text-primary/60 text-lg tracking-widest max-w-2xl mx-auto animate-fade-reveal [animation-delay:0.3s]">
            A sanctuary where high-fashion aesthetics meet world-class storytelling. We orchestrate narratives for those who define excellence.
          </p>
        </div>

        <div className="flex gap-6 animate-fade-reveal [animation-delay:0.6s]">
          <LuxuryButton href="/what-we-do">Explore Services</LuxuryButton>
          <LuxuryButton href="/contact">Inquire Now</LuxuryButton>
        </div>
      </section>

      {/* Categories Preview - Grid based */}
      <section className="py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Authors', category: 'Write', id: 'write' },
            { title: 'Brands', category: 'Create', id: 'create' },
            { title: 'Athletes', category: 'Play', id: 'play' },
            { title: 'Interiors', category: 'Design', id: 'design' }
          ].map((item, idx) => {
            const img = PlaceHolderImages.find(i => i.id === item.id);
            return (
              <Link 
                key={item.id} 
                href="/what-we-do"
                className="group relative h-[500px] overflow-hidden rounded-sm border border-primary/10 transition-all duration-700 hover:border-accent hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]"
              >
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                    data-ai-hint={img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-8 right-8 space-y-2">
                  <p className="luxury-heading text-[10px] text-accent">{item.category}</p>
                  <h3 className="luxury-heading text-xl">{item.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cinematic Preview Text */}
      <section className="py-40 text-center max-w-3xl mx-auto">
        <blockquote className="font-headline text-3xl md:text-5xl italic text-primary/40 leading-relaxed">
          "Simplicity is the ultimate sophistication, but emotion is the soul of luxury."
        </blockquote>
      </section>
    </div>
  );
}
