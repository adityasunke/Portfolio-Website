'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeading from '@/components/ui/SectionHeading'
import { Mail, Linkedin, Github, MapPin, Send, Download } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionHeading
            title="Get in Touch"
            subtitle="Contact"
            accent="quantum"
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimatedSection direction="left" delay={0.1} className="space-y-6">
            <p className="text-text-secondary font-sans leading-relaxed">
              I&apos;m always open to research collaborations, internship opportunities, and
              conversations about quantum computing, AI, and software engineering. Feel free to
              reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:adityasunke2004@vt.edu"
                className="flex items-center gap-3 text-text-secondary hover:text-quantum-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-quantum-primary/10 border border-quantum-primary/20 flex items-center justify-center group-hover:bg-quantum-primary/20 transition-colors">
                  <Mail size={18} className="text-quantum-secondary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-sans">Email</p>
                  <p className="text-text-primary text-sm font-medium font-sans">adityasunke2004@vt.edu</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-sunke/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-cs-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cs-primary/10 border border-cs-primary/20 flex items-center justify-center group-hover:bg-cs-primary/20 transition-colors">
                  <Linkedin size={18} className="text-cs-secondary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-sans">LinkedIn</p>
                  <p className="text-text-primary text-sm font-medium font-sans">linkedin.com/in/aditya-sunke</p>
                </div>
              </a>

              <a
                href="https://github.com/adityasunke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Github size={18} className="text-text-secondary group-hover:text-text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-sans">GitHub</p>
                  <p className="text-text-primary text-sm font-medium font-sans">github.com/adityasunke</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={18} className="text-text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-sans">Location</p>
                  <p className="text-text-primary text-sm font-medium font-sans">Blacksburg, VA</p>
                </div>
              </div>
            </div>

            {/* Resume downloads */}
            <div className="pt-2 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary font-sans mb-3">
                Download Resumes
              </p>
              <a
                href="/resume-quantum.pdf"
                download="Aditya_Sunke_Quantum_Resume.pdf"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg bg-quantum-primary/10 border border-quantum-primary/20 text-quantum-secondary text-sm font-medium hover:bg-quantum-primary/20 hover:border-quantum-primary/40 transition-all font-sans"
              >
                <Download size={15} />
                Quantum / Research Resume (PDF)
              </a>
              <a
                href="/resume-cs.pdf"
                download="Aditya_Sunke_CS_Resume.pdf"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg bg-cs-primary/10 border border-cs-primary/20 text-cs-secondary text-sm font-medium hover:bg-cs-primary/20 hover:border-cs-primary/40 transition-all font-sans"
              >
                <Download size={15} />
                Computer Science Resume (PDF)
              </a>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5 font-sans">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 font-sans focus:outline-none focus:border-quantum-primary/60 focus:ring-1 focus:ring-quantum-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5 font-sans">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 font-sans focus:outline-none focus:border-quantum-primary/60 focus:ring-1 focus:ring-quantum-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5 font-sans">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your opportunity, collaboration idea, or question..."
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 font-sans focus:outline-none focus:border-quantum-primary/60 focus:ring-1 focus:ring-quantum-primary/30 transition-all resize-none"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm font-sans text-center">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={loading || submitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all duration-200 font-sans ${
                  submitted
                    ? 'bg-green-600 cursor-default'
                    : loading
                    ? 'bg-quantum-primary/60 cursor-not-allowed'
                    : 'bg-quantum-primary hover:bg-quantum-secondary shadow-[0_0_24px_rgba(124,58,237,0.25)] hover:shadow-[0_0_32px_rgba(168,85,247,0.35)]'
                }`}
              >
                {submitted ? (
                  <>Message sent!</>
                ) : loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
