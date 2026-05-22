'use client';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#FDFBF2] pointer-events-none">
      {/* Soft noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Subtle Blue Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(92,124,229,0.05)_0%,transparent_70%)]" />

      {/* Blurred Background Logo Element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] blur-[100px]">
        <div className="w-[80vw] h-[80vw] max-w-[800px] border border-primary flex items-center justify-center rounded-full" />
      </div>
    </div>
  );
}
