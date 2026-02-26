import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { quantumExperience } from '@/data/quantum'
import { Calendar, MapPin } from 'lucide-react'

export default function ExperienceTimeline() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Research & Experience"
            subtitle="Work History"
            accent="quantum"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-quantum-primary via-quantum-primary/30 to-transparent"
          />

          <div className="space-y-8">
            {quantumExperience.map((exp, i) => (
              <AnimatedSection key={`${exp.organization}-${exp.dateRange}`} delay={i * 0.1}>
                <div className="relative pl-12 sm:pl-16">
                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[10px] sm:left-[18px] top-2 w-3 h-3 rounded-full bg-quantum-primary border-2 border-base shadow-[0_0_8px_rgba(124,58,237,0.5)]"
                  />

                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-quantum-primary/30 hover:shadow-[0_0_24px_rgba(124,58,237,0.08)] transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-quantum-secondary text-sm font-medium font-sans mt-0.5">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 shrink-0">
                        <span className="flex items-center gap-1.5 text-xs text-text-secondary font-sans whitespace-nowrap">
                          <Calendar size={12} />
                          {exp.dateRange}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1.5 text-xs text-text-secondary font-sans">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-2.5 text-sm text-text-secondary font-sans leading-relaxed">
                          <span className="text-quantum-primary mt-1.5 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} label={tag} variant="quantum" size="sm" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
