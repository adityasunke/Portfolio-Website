'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { ArrowRight, Atom, Code2 } from 'lucide-react'

const cards = [
  {
    href: '/quantum',
    title: 'Quantum Computing & Research',
    description:
      'Explore quantum algorithms, chemistry simulations, post-quantum cryptography, and research experience at the frontier of quantum information science.',
    icon: Atom,
    highlights: ['VQE · QAOA · Hybrid Algorithms', 'NSF-funded Research', 'Post-Quantum Cryptography', 'Quantum Chemistry Simulation'],
    accentFrom: '#7c3aed',
    accentTo: '#a855f7',
    borderHover: 'hover:border-quantum-primary/60',
    glowColor: 'rgba(124,58,237,0.2)',
    iconColor: 'text-quantum-secondary',
    tagBg: 'bg-quantum-primary/10 text-quantum-light border-quantum-primary/20',
    buttonBg: 'bg-quantum-primary hover:bg-quantum-secondary',
    shadowColor: 'hover:shadow-[0_0_48px_rgba(124,58,237,0.2)]',
  },
  {
    href: '/cs',
    title: 'Computer Science',
    description:
      'Discover full-stack applications, AI/ML systems, mobile development, and software engineering projects spanning computer vision, mobile apps, and cloud-native solutions.',
    icon: Code2,
    highlights: ['Full-Stack Mobile Apps', 'Computer Vision & ML', 'React Native · Firebase', 'Cloud APIs & Architecture'],
    accentFrom: '#3b82f6',
    accentTo: '#60a5fa',
    borderHover: 'hover:border-cs-primary/60',
    glowColor: 'rgba(59,130,246,0.2)',
    iconColor: 'text-cs-secondary',
    tagBg: 'bg-cs-primary/10 text-cs-light border-cs-primary/20',
    buttonBg: 'bg-cs-primary hover:bg-cs-secondary',
    shadowColor: 'hover:shadow-[0_0_48px_rgba(59,130,246,0.2)]',
  },
]

export default function NavigationCards() {
  return (
    <section className="py-24 bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2 font-sans">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            Two Tracks, One Vision
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <AnimatedSection key={card.href} delay={i * 0.1}>
                <Link href={card.href} className="block group">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`
                      relative overflow-hidden rounded-2xl border border-border bg-surface
                      transition-all duration-300 p-8
                      ${card.borderHover} ${card.shadowColor}
                    `}
                  >
                    {/* Background gradient */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${card.glowColor}, transparent 70%)`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 border ${card.tagBg.split(' ')[0]} ${card.tagBg.split(' ')[2]}`}
                    >
                      <Icon size={24} className={card.iconColor} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-3 group-hover:text-text-accent transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed font-sans mb-6">
                      {card.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {card.highlights.map((h) => (
                        <span
                          key={h}
                          className={`text-xs px-3 py-1 rounded-full border font-sans ${card.tagBg}`}
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 font-sans ${card.buttonBg}`}
                      >
                        Enter {card.title.split(' ')[0]} Section
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
