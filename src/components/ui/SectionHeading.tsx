import { AccentVariant } from '@/types'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  accent?: AccentVariant
  centered?: boolean
}

const accentStyles: Record<AccentVariant, string> = {
  quantum: 'bg-quantum-primary',
  cs: 'bg-cs-primary',
  neutral: 'bg-white/30',
}

const subtitleStyles: Record<AccentVariant, string> = {
  quantum: 'text-quantum-secondary',
  cs: 'text-cs-secondary',
  neutral: 'text-text-secondary',
}

export default function SectionHeading({
  title,
  subtitle,
  accent = 'neutral',
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className={`text-sm font-medium uppercase tracking-widest mb-2 font-sans ${subtitleStyles[accent]}`}>
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
        {title}
      </h2>
      <div
        className={`h-1 w-16 rounded-full ${accentStyles[accent]} ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  )
}
