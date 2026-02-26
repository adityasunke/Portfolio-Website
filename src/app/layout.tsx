import type { Metadata } from 'next'
import { inter, spaceGrotesk } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Aditya Sunke — Portfolio',
    template: '%s | Aditya Sunke',
  },
  description:
    'Portfolio of Aditya Sunke — Computer Science student and Quantum Information Science & Engineering minor at Virginia Tech. Researcher in quantum computing, post-quantum cryptography, and AI.',
  keywords: [
    'Aditya Sunke',
    'Virginia Tech',
    'Quantum Computing',
    'Computer Science',
    'Portfolio',
    'Research',
    'Qiskit',
    'Machine Learning',
  ],
  authors: [{ name: 'Aditya Sunke' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aditya Sunke — Portfolio',
    description:
      'Building at the intersection of quantum computing, AI, and scalable software systems.',
    siteName: 'Aditya Sunke Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-base text-text-primary font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
