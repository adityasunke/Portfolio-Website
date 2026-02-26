'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Atom, Code2 } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Quantum & Research', href: '/quantum' },
  { label: 'Computer Science', href: '/cs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isQuantumPage = pathname === '/quantum'
  const isCSPage = pathname === '/cs'

  const accentColor = isQuantumPage
    ? 'text-quantum-secondary'
    : isCSPage
    ? 'text-cs-secondary'
    : 'text-text-primary'

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Atom
                size={20}
                className={`absolute transition-all duration-300 ${
                  isCSPage ? 'opacity-0 scale-75' : `${accentColor} opacity-100 scale-100`
                }`}
              />
              <Code2
                size={20}
                className={`absolute transition-all duration-300 ${
                  isCSPage ? `${accentColor} opacity-100 scale-100` : 'opacity-0 scale-75'
                }`}
              />
            </div>
            <span className="font-heading font-bold text-lg text-text-primary group-hover:text-text-accent transition-colors">
              Aditya Sunke
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 font-sans
                    ${isActive
                      ? isQuantumPage
                        ? 'text-quantum-secondary bg-quantum-primary/10'
                        : isCSPage
                        ? 'text-cs-secondary bg-cs-primary/10'
                        : 'text-text-primary bg-white/5'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }
                  `}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4/5 rounded-full ${
                        isQuantumPage
                          ? 'bg-quantum-primary'
                          : isCSPage
                          ? 'bg-cs-primary'
                          : 'bg-white/40'
                      }`}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-base/95 backdrop-blur-md border-b border-border"
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-3 rounded-lg text-sm font-medium transition-colors font-sans
                  ${isActive ? 'text-text-primary bg-white/5' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}
                `}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </motion.div>
    </motion.header>
  )
}
