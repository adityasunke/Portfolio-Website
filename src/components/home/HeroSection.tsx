import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs — pure CSS, no JS required */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-15%] left-[5%] w-[500px] h-[500px] rounded-full bg-quantum-primary opacity-[0.12] blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-quantum-secondary opacity-[0.08] blur-[100px] animate-float-medium" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-cs-primary opacity-[0.06] blur-[80px] animate-float-fast" />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(124,58,237,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content — CSS fade-in animations, no JS dependency */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        <div style={{ animation: 'fadeUp 0.5s ease-out 0.1s both' }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-quantum-secondary bg-quantum-primary/10 border border-quantum-primary/20 rounded-full px-4 py-1.5 mb-6 font-sans">
            Virginia Tech · Blacksburg, VA
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-text-primary mb-4 leading-tight tracking-tight"
          style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
        >
          Aditya{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #a855f7 0%, #7c3aed 40%, #60a5fa 100%)',
            }}
          >
            Sunke
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-text-secondary font-sans mb-3"
          style={{ animation: 'fadeUp 0.6s ease-out 0.3s both' }}
        >
          Computer Science Major · Quantum Information Science &amp; Engineering Minor
        </p>

        <p
          className="text-base sm:text-lg text-text-secondary font-sans max-w-2xl mx-auto mb-10"
          style={{ animation: 'fadeUp 0.6s ease-out 0.4s both' }}
        >
          Building at the intersection of quantum computing, AI, and scalable software systems.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: 'fadeUp 0.6s ease-out 0.5s both' }}
        >
          <Button href="/quantum" variant="primary" accent="quantum" icon="arrow" size="lg">
            Explore Quantum Research
          </Button>
          <Button href="/cs" variant="ghost" accent="cs" icon="arrow" size="lg">
            Explore Computer Science
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2 opacity-50"
          style={{ animation: 'fadeUp 0.6s ease-out 1s both' }}
        >
          <span className="text-xs text-text-secondary font-sans uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-text-secondary/60 to-transparent animate-float-fast" />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
