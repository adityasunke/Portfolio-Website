import type { Metadata } from 'next'
import QuantumHero from '@/components/quantum/QuantumHero'
import ExperienceTimeline from '@/components/quantum/ExperienceTimeline'
import ProjectsGrid from '@/components/quantum/ProjectsGrid'
import QuantumSkills from '@/components/quantum/QuantumSkills'

export const metadata: Metadata = {
  title: 'Quantum Computing & Research',
  description:
    'Aditya Sunke\'s quantum computing research: VQE algorithms, quantum chemistry, post-quantum cryptography, and NSF-funded research work at Virginia Tech.',
}

export default function QuantumPage() {
  return (
    <>
      <QuantumHero />
      <ExperienceTimeline />
      <ProjectsGrid />
      <QuantumSkills />
    </>
  )
}
