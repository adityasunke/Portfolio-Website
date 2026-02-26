import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import SkillsOverview from '@/components/home/SkillsOverview'
import NavigationCards from '@/components/home/NavigationCards'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Aditya Sunke — Portfolio',
  description:
    'Portfolio of Aditya Sunke — CS student and Quantum Information Science & Engineering minor at Virginia Tech. Building at the intersection of quantum computing, AI, and scalable software systems.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsOverview />
      <NavigationCards />
      <ContactSection />
    </>
  )
}
