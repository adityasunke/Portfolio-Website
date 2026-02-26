'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AccentVariant, ButtonVariant } from '@/types'
import { Download, ArrowRight, ExternalLink } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  accent?: AccentVariant
  download?: boolean
  external?: boolean
  icon?: 'arrow' | 'download' | 'external' | 'none'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles: Record<ButtonVariant, Record<AccentVariant, string>> = {
  primary: {
    quantum: 'bg-quantum-primary text-white hover:bg-quantum-secondary shadow-[0_0_24px_rgba(124,58,237,0.3)] hover:shadow-[0_0_32px_rgba(168,85,247,0.4)]',
    cs: 'bg-cs-primary text-white hover:bg-cs-secondary shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_32px_rgba(96,165,250,0.4)]',
    neutral: 'bg-white text-base hover:bg-white/90 shadow-[0_0_24px_rgba(255,255,255,0.1)]',
  },
  ghost: {
    quantum: 'bg-quantum-primary/10 text-quantum-secondary border border-quantum-primary/30 hover:bg-quantum-primary/20 hover:border-quantum-primary/60',
    cs: 'bg-cs-primary/10 text-cs-secondary border border-cs-primary/30 hover:bg-cs-primary/20 hover:border-cs-primary/60',
    neutral: 'bg-white/5 text-text-primary border border-white/10 hover:bg-white/10 hover:border-white/20',
  },
  outline: {
    quantum: 'border border-quantum-primary/50 text-quantum-secondary hover:bg-quantum-primary/10 hover:border-quantum-primary',
    cs: 'border border-cs-primary/50 text-cs-secondary hover:bg-cs-primary/10 hover:border-cs-primary',
    neutral: 'border border-white/20 text-text-primary hover:bg-white/5 hover:border-white/40',
  },
}

const sizeStyles = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-base px-6 py-2.5 gap-2',
  lg: 'text-base px-8 py-3.5 gap-2',
}

const iconComponents = {
  arrow: <ArrowRight size={16} />,
  download: <Download size={16} />,
  external: <ExternalLink size={16} />,
  none: null,
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  accent = 'quantum',
  download = false,
  external = false,
  icon = 'none',
  className = '',
  size = 'md',
}: ButtonProps) {
  const styles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 font-sans
    ${variantStyles[variant][accent]}
    ${sizeStyles[size]}
    ${className}
  `

  const iconEl = iconComponents[icon]

  const content = (
    <>
      {children}
      {iconEl}
    </>
  )

  if (href) {
    if (download || external) {
      return (
        <motion.a
          href={href}
          download={download ? true : undefined}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={styles}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      )
    }
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={styles}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={styles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
