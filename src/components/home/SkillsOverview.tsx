import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

const skillGroups = [
  {
    label: 'Quantum & Research',
    variant: 'quantum' as const,
    skills: ['Qiskit', 'Cirq', 'PennyLane', 'VQE', 'QAOA', 'AWS Braket', 'Post-Quantum Cryptography'],
  },
  {
    label: 'Programming Languages',
    variant: 'neutral' as const,
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'RISC-V Assembly'],
  },
  {
    label: 'Machine Learning & AI',
    variant: 'cs' as const,
    skills: ['PyTorch', 'scikit-learn', 'OpenCV', 'CNN', 'SVM', 'Google Gemini API', 'Hugging Face'],
  },
  {
    label: 'Software Engineering',
    variant: 'cs' as const,
    skills: ['React Native', 'Expo', 'Firebase', 'Node.js', 'TypeScript', 'Modular Architecture'],
  },
  {
    label: 'Scientific Computing',
    variant: 'quantum' as const,
    skills: ['NumPy', 'SciPy', 'Pandas', 'SageMath', 'PySCF', 'Matplotlib', 'Jupyter'],
  },
  {
    label: 'Developer Tools',
    variant: 'neutral' as const,
    skills: ['Git', 'Docker', 'Linux', 'Google Cloud', 'Azure', 'VS Code'],
  },
]

export default function SkillsOverview() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Technical Skills"
            subtitle="Expertise"
            accent="neutral"
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.label} delay={i * 0.07}>
              <div className="bg-surface border border-border rounded-xl p-5 h-full hover:border-white/20 transition-colors duration-200">
                <h3 className="text-sm font-semibold text-text-primary font-sans mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} label={skill} variant={group.variant} size="sm" />
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
