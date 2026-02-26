import Link from 'next/link'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-text-primary text-lg mb-1">Aditya Sunke</p>
            <p className="text-text-secondary text-sm font-sans">
              B.S. Computer Science · Quantum Information Science & Engineering Minor
            </p>
            <p className="text-text-secondary text-sm font-sans mt-0.5">Virginia Tech · Blacksburg, VA</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3 font-sans">
              Pages
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Quantum & Research', href: '/quantum' },
                { label: 'Computer Science', href: '/cs' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors font-sans"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resumes & Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3 font-sans">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://linkedin.com/in/adityasunke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-cs-secondary transition-colors font-sans"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com/adityasunke04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors font-sans"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="mailto:aditya@vt.edu"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors font-sans"
              >
                <Mail size={14} />
                Email
              </a>
              <a
                href="/resume-quantum.pdf"
                download="Aditya_Sunke_Quantum_Resume.pdf"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-quantum-secondary transition-colors font-sans"
              >
                <Download size={14} />
                Quantum Resume PDF
              </a>
              <a
                href="/resume-cs.pdf"
                download="Aditya_Sunke_CS_Resume.pdf"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-cs-secondary transition-colors font-sans"
              >
                <Download size={14} />
                CS Resume PDF
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-text-secondary font-sans">
            © {new Date().getFullYear()} Aditya Sunke. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary font-sans">
            Expected Graduation: May 2027 · GPA 3.81/4.0
          </p>
        </div>
      </div>
    </footer>
  )
}
