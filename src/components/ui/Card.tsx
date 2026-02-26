'use client'

import { motion } from 'framer-motion'
import { AccentVariant } from '@/types'

interface CardProps {
  children: React.ReactNode
  className?: string
  glowVariant?: AccentVariant | 'none'
  hoverable?: boolean
}

const glowStyles: Record<AccentVariant | 'none', string> = {
  quantum: 'hover:shadow-[0_0_32px_rgba(124,58,237,0.2)] hover:border-quantum-primary/40',
  cs: 'hover:shadow-[0_0_32px_rgba(59,130,246,0.2)] hover:border-cs-primary/40',
  neutral: 'hover:shadow-[0_0_24px_rgba(255,255,255,0.05)] hover:border-white/20',
  none: '',
}

export default function Card({
  children,
  className = '',
  glowVariant = 'neutral',
  hoverable = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, scale: 1.005 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`
        bg-surface border border-border rounded-xl p-6
        transition-all duration-300
        ${hoverable ? `cursor-default ${glowStyles[glowVariant]}` : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
