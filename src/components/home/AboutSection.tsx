import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

// ── PUT YOUR LINKEDIN PHOTO URL OR LOCAL PATH HERE ──────────────────────────
// Option A – local file: save the image to public/profile.jpg and use '/profile.jpg'
// Option B – LinkedIn CDN URL: paste the direct image URL (right-click → Copy image address)
const PROFILE_IMAGE_SRC = 'https://media.licdn.com/dms/image/v2/D4E03AQHYEnFOTPYG6w/profile-displayphoto-scale_400_400/B4EZp54g08KcAk-/0/1762981450032?e=1773878400&v=beta&t=vwtfjuFjvW3adqZSMGXpHfzA9TToPKYXgJjZX2I8uQg' // e.g. '/profile.jpg' or 'https://...'
// ────────────────────────────────────────────────────────────────────────────

const coursework = [
  'Data Structures & Algorithms',
  'Software Design',
  'Computer Organization',
  'Computer Systems',
  'Quantum Software',
  'Quantum Computation',
  'Quantum Information Technologies',
  'Graph Theory',
  'Applied Combinatorics',
  'Discrete Mathematics',
  'Linear Algebra',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="Background"
            accent="quantum"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder */}
          <AnimatedSection direction="left" delay={0.1} className="lg:col-span-2">
            <div className="max-w-xs mx-auto lg:mx-0">
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-surface border border-border overflow-hidden flex items-center justify-center">
                  {PROFILE_IMAGE_SRC ? (
                    <Image
                      src={PROFILE_IMAGE_SRC}
                      alt="Aditya Sunke"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-quantum-primary/20 border-2 border-quantum-primary/40 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl font-heading font-bold text-quantum-secondary">AS</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-3xl bg-quantum-primary/5 blur-xl -z-10"
                />
              </div>

              {/* Education card */}
              <div className="mt-6 bg-surface border border-border rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-quantum-secondary">
                <GraduationCap size={18} />
                <span className="text-sm font-semibold font-sans">Virginia Tech</span>
              </div>
              <div className="space-y-1">
                <p className="text-text-primary text-sm font-sans font-medium">B.S. Computer Science</p>
                <p className="text-text-secondary text-xs font-sans">Minor: Quantum Information Science &amp; Engineering</p>
                <p className="text-text-secondary text-xs font-sans">Expected Graduation: May 2027</p>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Award size={14} className="text-yellow-400 flex-shrink-0" />
                <span className="text-yellow-400 text-xs font-medium font-sans">GPA: 3.81/4.0</span>
              </div>
              <div className="flex flex-wrap gap-1 pt-1">
                {['Fall 2023', 'Spring 2024', 'Fall 2024', 'Spring 2025', 'Fall 2025'].map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-yellow-400/10 text-yellow-300 border border-yellow-400/20 rounded-full px-2 py-0.5 font-sans"
                  >
                    Dean&apos;s List {s}
                  </span>
                ))}
              </div>
            </div>{/* end education card */}
            </div>{/* end max-w-xs wrapper */}
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3 space-y-5">
            <p className="text-text-secondary text-base leading-relaxed font-sans">
              I&apos;m a student at Virginia Tech pursuing a degree in Computer Science with a minor in
              Quantum Information Science and Engineering. My work sits at the intersection of two
              rapidly evolving fields: quantum computing and modern software engineering. I&apos;m driven
              by the challenge of building systems that tackle real-world problems: from simulating
              molecular systems at the quantum level to developing full-stack applications that serve
              diverse communities.
            </p>
            <p className="text-text-secondary text-base leading-relaxed font-sans">
              On the research side, I&apos;ve worked on quantum chemistry simulations using hybrid
              VQE-SQD algorithms, post-quantum cryptography under an NSF-funded grant, and
              quantum-enhanced drug discovery. I&apos;m passionate about near-term quantum applications,
              particularly at the boundary where classical and quantum computation meet. I co-founded
              CarbonQapture to explore how quantum computing and AI can address carbon capture — one
              of the defining challenges of our time.
            </p>
            <p className="text-text-secondary text-base leading-relaxed font-sans">
              Beyond research, I build software with purpose: from AI-powered navigation for visually
              impaired users, to full-stack mobile safety applications, to real-time sign language
              translation systems. My long-term goal is to contribute to quantum algorithm development
              and applied quantum software at the frontier of both academia and industry.
            </p>

            {/* Coursework */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-text-secondary mb-3">
                <BookOpen size={15} />
                <span className="text-xs font-semibold uppercase tracking-widest font-sans">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <Badge key={c} label={c} variant="neutral" size="sm" />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
