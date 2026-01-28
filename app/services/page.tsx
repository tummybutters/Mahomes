'use client'

import { useState } from 'react'
import ActionButton from '@/components/ActionButton'
import { ArrowRight, Play, FileCheck, Percent, Home, Key, Calendar, Layers, Zap, Shield, User, Banknote } from 'lucide-react'
import { FocusCards } from '@/components/ui/FocusCards'
import { TiltCard } from '@/components/ui/TiltCard'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<'dscr' | 'capital'>('dscr')
  const stats =
    activeService === 'dscr'
      ? [
        { value: '80% LTV', label: 'Max DSCR' },
        { value: '21-30 Days', label: 'Typical Close' },
        { value: '30-Year', label: 'Fixed Options' },
      ]
      : [
        { value: '$50K-$500K', label: 'Capital Range' },
        { value: '3-7 Days', label: 'Funding Speed' },
        { value: 'Unsecured', label: 'No Collateral' },
      ]

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-accent-primary/10">
      {/* Hero Section - Full Viewport */}
      <section className="h-screen p-4 md:p-6 flex flex-col">
        {/* Main Visual Container */}
        <div
          className="relative flex-1 rounded-none overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] animate-fade-scale-in"
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
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-primary/5 rounded-none blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-warm/5 rounded-none blur-[120px]" />

          {/* Center Video */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="relative w-[92%] md:w-[74%] aspect-[16/9] rounded-none bg-bg-card border border-white/10 overflow-hidden shadow-2xl shadow-black/40 animate-fade-up delay-300">
              <video
                autoPlay
                muted
                playsInline
                loop
                className="h-full w-full object-cover"
              >
                <source src="/videos/NYC_Sunrise_Drone_Shot_Video.mp4" type="video/mp4" />
              </video>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 ring-1 ring-white/10"
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-none bg-black/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/80">
                <Play size={12} className="text-white/80" />
                Service Reel
              </div>
            </div>
          </div>

          {/* Bottom Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
              {/* Left: Label + Headline */}
              <div className="max-w-xl animate-fade-up delay-400">
                {/* Small label */}
                <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted mb-3 md:mb-4">
                  Services
                </p>

                {/* Main headline */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight font-serif">
                  <span className="text-text-secondary">Financing to </span>
                  <span className="text-accent-primary font-medium">Acquire</span>
                  <br />
                  <span className="text-text-secondary">Stabilize, </span>
                  <span className="text-accent-primary font-medium">Scale</span>
                </h1>
              </div>

              {/* Right: Description + CTAs */}
              <div className="flex flex-col items-start lg:items-end gap-5 animate-fade-up delay-500">
                {/* Description */}
                <p className="text-sm md:text-base text-text-muted max-w-xs lg:text-right leading-relaxed">
                  DSCR loans and flexible working capital designed for repeat acquisitions, renovations, and long-term holds.
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 md:px-6 md:py-3 bg-accent-primary text-white text-sm font-medium rounded-none hover:bg-accent-light transition-all duration-200 shadow-lg shadow-black/40">
                    Explore DSCR
                  </button>
                  <button className="group px-5 py-2.5 md:px-6 md:py-3 bg-white/10 text-white text-sm font-medium rounded-none border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-200 flex items-center gap-2">
                    Working Capital
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Toggle Pills - Top Right inside container */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 animate-fade-up delay-600">
            <div className="flex items-center gap-1 p-1 rounded-none bg-white/10 border border-white/10 shadow-sm">
              <button
                onClick={() => setActiveService('dscr')}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-none transition-all duration-300 ${activeService === 'dscr'
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
                  }`}
              >
                DSCR Loans
              </button>
              <button
                onClick={() => setActiveService('capital')}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-none transition-all duration-300 ${activeService === 'capital'
                  ? 'bg-white/15 text-white shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
                  }`}
              >
                Working Capital
              </button>
            </div>
          </div>

          {/* Floating Stats - Bottom Right Corner */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden md:flex items-center gap-8 animate-fade-up delay-700">
            {stats.map((stat) => (
              <div key={stat.label} className="text-right">
                <p className="text-lg md:text-xl font-light text-text-primary">{stat.value}</p>
                <p className="text-[10px] tracking-wider uppercase text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
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
    <div className="animate-fade-up">
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          DSCR Loans
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-text-primary max-w-2xl leading-tight font-serif">
          Finance rentals using property cash flow, not personal income
        </h2>
        <p className="mt-4 text-sm md:text-base text-text-muted max-w-xl leading-relaxed">
          Purchase or cash-out refinance with underwriting based on the asset. Designed for investors scaling
          single-family and small multifamily portfolios.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12">
        <FocusCards
          cards={[
            { title: 'No Income Docs', description: 'Qualify on DSCR, not W-2s or tax returns', icon: <FileCheck className="w-10 h-10" /> },
            { title: 'Up to 80% LTV', description: 'Preserve cash while scaling acquisitions', icon: <Percent className="w-10 h-10" /> },
            { title: 'Purchase or Cash-Out', description: 'Buy, refi, and recycle equity', icon: <Home className="w-10 h-10" /> },
            { title: 'Short-Term Rentals OK', description: 'Airbnb and mid-term income accepted', icon: <Key className="w-10 h-10" /> },
            { title: '30-Year Fixed', description: 'Predictable payments for long holds', icon: <Calendar className="w-10 h-10" /> },
            { title: 'Portfolio Friendly', description: 'Built for multi-property investors', icon: <Layers className="w-10 h-10" /> },
          ]}
        />
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
              '3-6 months reserves',
            ].map((req) => (
              <div key={req} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-none bg-accent-light" />
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
                <div className="w-1.5 h-1.5 rounded-none bg-white/15" />
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
            Ready to move on your next purchase? Get a DSCR quote in under 2 minutes.
          </p>
          <ActionButton className="min-w-[200px]">Get DSCR Quote</ActionButton>
        </div>
      </div>
    </div>
  )
}

// ==========================================
// Working Capital Content Section
// ==========================================
function WorkingCapitalContent() {
  return (
    <div className="animate-fade-up">
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
          Working Capital
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-text-primary max-w-2xl leading-tight font-serif">
          Unsecured capital to bridge down payments, rehab, and reserves
        </h2>
        <p className="mt-4 text-sm md:text-base text-text-muted max-w-xl leading-relaxed">
          Stack flexible capital on top of your primary financing so you can close faster, renovate faster, and keep
          liquidity for the next deal.
        </p>
      </div>

      {/* Value Props */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: 'How It Works',
            icon: <Zap className="w-6 h-6 text-accent-warm mb-4" />,
            items: [
              'Down payment boosts',
              'BRRRR acquisition funding',
              'Renovation budgets',
              'Earnest money & reserves',
            ],
          },
          {
            title: 'Why It Works',
            icon: <Shield className="w-6 h-6 text-accent-warm mb-4" />,
            items: [
              'Preserves cash-on-cash returns',
              'No lien on the property',
              'Use across multiple deals',
              'Built for repeat acquisitions',
            ],
          },
          {
            title: "Who It's For",
            icon: <User className="w-6 h-6 text-accent-warm mb-4" />,
            items: [
              'Active real estate investors',
              'Operators scaling portfolios',
              '680+ credit, $40K+ income',
              'U.S. citizens & residents',
            ],
          },
        ].map((col, i) => (
          <TiltCard key={col.title} className="h-full">
            <div className="h-full rounded-none border border-white/10 bg-[#0e141f] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Banknote className="w-24 h-24" />
              </div>

              {col.icon}
              <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6 font-semibold">{col.title}</p>

              <div className="space-y-4 relative z-10">
                {col.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-none bg-accent-warm" />
                    <span className="text-sm text-white/80 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Process Steps */}
      <div className="rounded-none bg-bg-card border border-white/10 p-8 md:p-12 shadow-xl shadow-black/40">
        <p className="text-xs tracking-[0.2em] uppercase text-text-muted mb-8 font-semibold">The Process</p>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Apply', desc: '2-minute application' },
            { step: '02', title: 'Review', desc: '24-48 hour decision' },
            { step: '03', title: 'Fund', desc: 'Capital in 3-7 days' },
            { step: '04', title: 'Deploy', desc: 'Move on multiple deals' },
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
            Most qualified applicants receive $50K-$500K in unsecured working capital.
          </p>
          <ActionButton className="min-w-[260px]">Get Pre-Approved in 2 Minutes</ActionButton>
        </div>
      </div>
    </div>
  )
}
