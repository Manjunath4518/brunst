'use client';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none">
      {/* Soft blue ivory gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(187,255,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,transparent,rgba(17,45,110,0.02))]" />
      
      {/* Blurred Logo Layer */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] blur-[80px]">
        <div className="w-[60vw] h-[60vw] max-w-[600px] border border-primary flex items-center justify-center">
          <span className="font-headline text-[30vw] md:text-[250px] text-primary">B</span>
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </div>
  );
}