import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { quantumProjects } from '@/data/quantum'
import { Github, Calendar, ExternalLink } from 'lucide-react'

export default function ProjectsGrid() {
  return (
    <section className="py-20 bg-surface/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="Research & Development"
            accent="quantum"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quantumProjects.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.1}>
              <div className="group bg-surface border border-border rounded-xl p-6 h-full flex flex-col hover:border-quantum-primary/40 hover:shadow-[0_0_28px_rgba(124,58,237,0.12)] transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-quantum-light transition-colors">
                    {project.name}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors shrink-0 mt-0.5"
                      aria-label={`GitHub repo for ${project.name}`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-text-secondary font-sans mb-3">
                  <Calendar size={11} />
                  {project.dateRange}
                </div>

                <p className="text-text-secondary text-sm font-sans leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex gap-2 text-xs text-text-secondary font-sans leading-relaxed">
                      <span className="text-quantum-primary mt-1 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} label={tech} variant="quantum" size="sm" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
