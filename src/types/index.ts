export interface Experience {
  role: string
  organization: string
  dateRange: string
  location?: string
  bullets: string[]
  tags?: string[]
  type: 'quantum' | 'cs' | 'both'
}

export interface Project {
  name: string
  dateRange: string
  description: string
  bullets: string[]
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  type: 'quantum' | 'cs' | 'both'
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface NavItem {
  label: string
  href: string
}

export type AccentVariant = 'quantum' | 'cs' | 'neutral'
export type ButtonVariant = 'primary' | 'ghost' | 'outline'
export type AnimationDirection = 'up' | 'left' | 'right' | 'none'
