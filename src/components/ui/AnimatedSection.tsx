'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimationDirection } from '@/types'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: AnimationDirection
}

const directionMap: Record<AnimationDirection, { x?: number; y?: number }> = {
  up: { y: 24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const offset = directionMap[direction]

  // Before JS hydrates, render fully visible (no opacity:0 flash)
  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
