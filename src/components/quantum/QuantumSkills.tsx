import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'
import { quantumSkills } from '@/data/quantum'

export default function QuantumSkills() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Technical Skills"
            subtitle="Capabilities"
            accent="quantum"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quantumSkills.map((category, i) => (
            <AnimatedSection key={category.label} delay={i * 0.07}>
              <div className="bg-surface border border-border rounded-xl p-5 h-full hover:border-quantum-primary/30 transition-colors duration-200">
                <h3 className="text-sm font-semibold text-quantum-secondary font-sans mb-3">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} label={skill} variant="quantum" size="sm" />
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
