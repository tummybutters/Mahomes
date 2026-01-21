'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<'dscr' | 'capital'>('dscr')

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-accent-primary/10">
      {/* Hero Section - Full Viewport */}
      <section className="h-screen p-4 md:p-6 flex flex-col">
        {/* Main Visual Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 rounded-xl md:rounded-2xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]"
          style={{
            background: 'linear-gradient(135deg, #050608 0%, #0a0f15 55%, #0b1320 100%)',
          }}
        >
          {/* Subtle grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Ambient glow effects */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-warm/5 rounded-full blur-[120px]" />

          {/* Center Image Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-[90%] md:w-[70%] aspect-[16/9] rounded-xl md:rounded-2xl bg-bg-card border border-white/10 flex items-center justify-center shadow-2xl shadow-black/40"
            >
              {/* Play button placeholder */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent-primary/5 border border-accent-primary/10 flex items-center justify-center cursor-pointer hover:bg-accent-primary/10 hover:scale-105 transition-all duration-300 group">
                <Play size={28} className="text-accent-primary ml-1 group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
              {/* Left: Label + Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-xl"
              >
                {/* Small label */}
                <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted mb-3 md:mb-4">
                  Real Estate Investor Financing
                </p>

                {/* Main headline */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight font-serif">
                  <span className="text-text-secondary">Where </span>
                  <span className="text-accent-primary font-medium">Capital</span>
                  <br />
                  <span className="text-text-secondary">Meets </span>
                  <span className="text-accent-primary font-medium">Opportunity</span>
                </h1>
              </motion.div>

              {/* Right: Description + CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col items-start lg:items-end gap-5"
              >
                {/* Description */}
                <p className="text-sm md:text-base text-text-muted max-w-xs lg:text-right leading-relaxed">
                  Unlock equity from your properties. No tax returns, no income verification, funding in 21–30 days.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 md:px-6 md:py-3 bg-accent-primary text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-all duration-200 shadow-lg shadow-black/40">
                    Get Started
                  </button>
                  <button className="group px-5 py-2.5 md:px-6 md:py-3 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-200 flex items-center gap-2">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Service Toggle Pills - Top Right inside container */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute top-6 right-6 md:top-8 md:right-8"
          >
            <div className="flex items-center gap-1 p-1 rounded-lg bg-white/10 border border-white/10 shadow-sm">
              <button
                onClick={() => setActiveService('dscr')}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-md transition-all duration-300 ${activeService === 'dscr'
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
                  }`}
              >
                DSCR Loans
              </button>
              <button
                onClick={() => setActiveService('capital')}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-md transition-all duration-300 ${activeService === 'capital'
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
                  }`}
              >
                Working Capital
              </button>
            </div>
          </motion.div>

          {/* Floating Stats - Bottom Right Corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden md:flex items-center gap-8"
          >
            {[
              { value: '$200M+', label: 'Funded' },
              { value: '21 Days', label: 'Avg. Close' },
              { value: '48', label: 'States' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-right">
                <p className="text-lg md:text-xl font-light text-text-primary">{stat.value}</p>
                <p className="text-[10px] tracking-wider uppercase text-text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections Below */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section based on active service */}
          {activeService === 'dscr' ? (
            <DSCRContent />
          ) : (
            <WorkingCapitalContent />
          )}
        </div>
      </section>
    </div>
  )
}

// ==========================================
// DSCR Content Section
// ==========================================
function DSCRContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      key="dscr"
    >
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Cash-Out Refinance
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-text-primary max-w-2xl leading-tight font-serif">
          Pull tax-free equity from your rental properties
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
        {[
          { title: 'No Income Docs', desc: 'Qualify on property cash flow, not personal income' },
          { title: 'Up to 80% LTV', desc: 'Maximize your equity extraction on rentals' },
          { title: '3-4 Week Close', desc: 'Fast funding without traditional bank delays' },
          { title: 'Airbnb Accepted', desc: 'Short-term rental income qualifies' },
          { title: '30-Year Fixed', desc: 'Long-term stability with predictable payments' },
          { title: 'Unlimited Properties', desc: 'No cap on the number of assets you can finance' },
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 md:p-10 bg-bg-card hover:bg-bg-tertiary transition-colors duration-300"
          >
            <h3 className="text-lg font-medium text-text-primary mb-2">{feature.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Requirements */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">Requirements</p>
          <div className="space-y-4">
            {[
              '660+ credit score',
              'DSCR of 1.0 or higher',
              'Investment property only',
              '3-12 months reserves',
            ].map((req) => (
              <div key={req} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                <span className="text-text-secondary font-medium">{req}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">Not Required</p>
          <div className="space-y-4">
            {[
              'Tax returns',
              'W-2s or pay stubs',
              'Employment verification',
              'Personal income documentation',
            ].map((req) => (
              <div key={req} className="flex items-center gap-3 opacity-60">
                <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
                <span className="text-text-light line-through">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-text-muted max-w-md">
            Ready to unlock your equity? Get a personalized quote in under 2 minutes.
          </p>
          <button className="px-8 py-4 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-light transition-all duration-200 self-start shadow-lg shadow-black/40">
            Get Cash-Out Quote
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ==========================================
// Working Capital Content Section
// ==========================================
function WorkingCapitalContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      key="capital"
    >
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Investor Capital Program
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-text-primary max-w-2xl leading-tight font-serif">
          $50K–$500K unsecured capital in under 14 days
        </h2>
      </div>

      {/* Value Props */}
      <div className="grid md:grid-cols-3 gap-12 mb-20">
        {[
          {
            title: 'How It Works',
            items: [
              'Down payment assistance',
              'BRRRR strategy funding',
              'Fix-and-flip renovations',
              'Holding costs & earnest money',
            ],
          },
          {
            title: 'Why It Works',
            items: [
              'Minimizes over-leveraging',
              'Perfect for cash-flowing assets',
              'Build equity, then refinance',
              'Based on "good debt" principles',
            ],
          },
          {
            title: "Who It's For",
            items: [
              'Active real estate investors',
              'New investors ready to start',
              '680+ credit, $40K+ income',
              'U.S. citizens & residents',
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-6">{col.title}</p>
            <div className="space-y-4">
              {col.items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                  <span className="text-text-secondary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Process Steps */}
      <div className="rounded-xl bg-bg-card border border-white/10 p-8 md:p-12 shadow-xl shadow-black/40">
        <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-8 font-semibold">The Process</p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Apply', desc: '2-minute application' },
            { step: '02', title: 'Approval', desc: '24-48 hour review' },
            { step: '03', title: 'Funding', desc: 'Capital in 3-7 days' },
            { step: '04', title: 'Deploy', desc: 'Close deals faster' },
          ].map((item) => (
            <div key={item.step}>
              <span className="text-2xl font-light text-accent-light">{item.step}</span>
              <h4 className="text-lg font-medium text-text-primary mt-3 mb-1">{item.title}</h4>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-text-muted max-w-md">
            90% of qualified applicants receive $50K-$500K in unsecured capital.
          </p>
          <button className="px-8 py-4 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-light transition-all duration-200 self-start shadow-lg shadow-black/40">
            Get Pre-Approved in 2 Minutes
          </button>
        </div>
      </div>
    </motion.div>
  )
}
