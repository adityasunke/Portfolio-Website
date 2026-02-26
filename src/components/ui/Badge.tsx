import { AccentVariant } from '@/types'

interface BadgeProps {
  label: string
  variant?: AccentVariant
  size?: 'sm' | 'md'
}

const variantStyles: Record<AccentVariant, string> = {
  quantum: 'bg-quantum-primary/15 text-quantum-light border border-quantum-primary/30',
  cs: 'bg-cs-primary/15 text-cs-light border border-cs-primary/30',
  neutral: 'bg-white/5 text-text-secondary border border-white/10',
}

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
}

export default function Badge({ label, variant = 'neutral', size = 'sm' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {label}
    </span>
  )
}
