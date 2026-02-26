import Button from '@/components/ui/Button'
import { Code2 } from 'lucide-react'

export default function CSHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden cs-grid-bg">
      {/* Background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cs-primary opacity-[0.09] blur-[130px] animate-float-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cs-secondary opacity-[0.07] blur-[110px] animate-float-medium" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          style={{ animation: 'fadeUp 0.4s ease-out 0.1s both' }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cs-secondary bg-cs-primary/10 border border-cs-primary/20 rounded-full px-4 py-1.5 mb-6 font-sans"
        >
          <Code2 size={13} />
          Software Engineering &amp; AI
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary mb-5 leading-tight"
          style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
        >
          Computer{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #3b82f6)' }}
          >
            Science
          </span>
        </h1>

        <p
          className="text-base sm:text-lg text-text-secondary font-sans max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ animation: 'fadeUp 0.6s ease-out 0.3s both' }}
        >
          Building full-stack applications, AI/ML systems, and computer vision tools — from
          mobile safety apps to real-time sign language translation and hybrid quantum-classical
          drug discovery pipelines.
        </p>

        <div style={{ animation: 'fadeUp 0.5s ease-out 0.4s both' }}>
          <Button
            href="/resume-cs.pdf"
            download
            variant="primary"
            accent="cs"
            icon="download"
            size="lg"
          >
            Download CS Resume
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
