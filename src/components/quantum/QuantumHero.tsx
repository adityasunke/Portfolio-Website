import Button from '@/components/ui/Button'
import { Atom } from 'lucide-react'

export default function QuantumHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-quantum-primary opacity-[0.10] blur-[130px] animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-quantum-secondary opacity-[0.08] blur-[110px] animate-float-medium" />
      </div>

      {/* Quantum grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          style={{ animation: 'fadeUp 0.4s ease-out 0.1s both' }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-quantum-secondary bg-quantum-primary/10 border border-quantum-primary/20 rounded-full px-4 py-1.5 mb-6 font-sans"
        >
          <Atom size={13} />
          Research &amp; Quantum Computing
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary mb-5 leading-tight"
          style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
        >
          Quantum Computing &amp;{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}
          >
            Research
          </span>
        </h1>

        <p
          className="text-base sm:text-lg text-text-secondary font-sans max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ animation: 'fadeUp 0.6s ease-out 0.3s both' }}
        >
          Designing and implementing quantum algorithms, hybrid quantum-classical systems, and
          post-quantum cryptographic protocols — from NSF-funded research labs to startup R&amp;D.
        </p>

        <div style={{ animation: 'fadeUp 0.5s ease-out 0.4s both' }}>
          <Button
            href="/resume-quantum.pdf"
            download
            variant="primary"
            accent="quantum"
            icon="download"
            size="lg"
          >
            Download Quantum Resume
          </Button>
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
