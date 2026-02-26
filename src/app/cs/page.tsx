import type { Metadata } from 'next'
import CSHero from '@/components/cs/CSHero'
import CSExperience from '@/components/cs/CSExperience'
import CSProjects from '@/components/cs/CSProjects'
import CSSkills from '@/components/cs/CSSkills'

export const metadata: Metadata = {
  title: 'Computer Science',
  description:
    "Aditya Sunke's computer science work: full-stack mobile apps, AI/ML systems, computer vision, and software engineering projects at Virginia Tech.",
}

export default function CSPage() {
  return (
    <>
      <CSHero />
      <CSExperience />
      <CSProjects />
      <CSSkills />
    </>
  )
}
