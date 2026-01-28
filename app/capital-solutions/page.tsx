import Link from 'next/link'
import ActionButton from '@/components/ActionButton'
import { Coins, Building2, Landmark, Layers, ShieldCheck, Zap, TrendingUp } from 'lucide-react'
import { FocusCards } from '@/components/ui/FocusCards'

const solutions = [
  {
    title: 'Working Capital',
    description: 'Investment-focused liquidity to bridge down payments, reserves, and execution timing.',
    href: '/capital-solutions/working-capital',
    icon: <Coins className="w-10 h-10" />,
    action: <span className="text-sm font-medium text-accent-warm">Explore Working Capital -&gt;</span>
  },
  {
    title: 'DSCR Cash Out Loan',
    description: 'Asset-based underwriting designed to recycle equity without personal income constraints.',
    href: '/capital-solutions/dscr-cash-out-loan',
    icon: <Building2 className="w-10 h-10" />,
    action: <span className="text-sm font-medium text-accent-warm">Explore DSCR Purchase -&gt;</span>
  },
  {
    title: 'DSCR Cash Out',
    description: 'Structured capital that unlocks liquidity while protecting long-term portfolio performance.',
    href: '/capital-solutions/dscr-cash-out',
    icon: <Landmark className="w-10 h-10" />,
    action: <span className="text-sm font-medium text-accent-warm">Explore Refinance -&gt;</span>
  },
]

export default function CapitalSolutionsPage() {
  return (
    <div className="min-h-screen bg-[#07080b] selection:bg-white/15">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-20 border-b border-white/5 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-4 animate-fade-up">
            Capital Solutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.9] max-w-4xl animate-fade-up delay-100">
            Leverage built for <span className="text-accent-warm italic">scale.</span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/60 max-w-2xl leading-relaxed animate-fade-up delay-200">
            We align DSCR financing with investment-focused working capital to unlock scalable liquidity, preserve
            equity efficiency, and build a capital architecture designed for long-term portfolio growth.
          </p>
        </div>
      </section>

      {/* Solutions Grid (Centerpiece) */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#07080b] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-white mb-2">Primary Capital Lines</h2>
            <p className="text-sm text-white/50">Core financing capabilities for active investors.</p>
          </div>
          <FocusCards cards={solutions} />
        </div>
      </section>

      {/* Technical Diagrams Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Column 1: Architecture List */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-6">Structuring Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Engineering efficiency into every deal.</h2>

            <div className="space-y-6">
              {[
                { title: 'Multi-Tranche Integration', desc: 'Seamlessly blending senior debt with mezzanine working capital.', icon: <Layers className="w-5 h-5" /> },
                { title: 'Cash Flow Durability', desc: 'Stress-tested DSCR requirements to ensure portfolio resilience.', icon: <ShieldCheck className="w-5 h-5" /> },
                { title: 'Execution Speed', desc: ' streamlined underwriting designed for acquisition timelines.', icon: <Zap className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-none">
                  <div className="text-accent-warm mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Schematic Stack (Replaced 3D Tilt with Flat Technical Diagram) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent opacity-20 pointer-events-none" />
            <div className="border border-white/10 bg-[#0a0f15] p-8 h-full relative">
              <p className="text-xs font-mono text-white/40 mb-8 border-b border-white/10 pb-4">FIG 1.0 — CAPITAL STACK STRUCTURE</p>

              <div className="space-y-1">
                {/* Senior Debt */}
                <div className="p-6 border border-white/20 bg-[#151b26] flex justify-between items-center group hover:border-accent-warm/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/30">01</span>
                    <div>
                      <p className="text-white font-medium">Senior DSCR Debt</p>
                      <p className="text-xs text-white/50">LTV: 65-80%</p>
                    </div>
                  </div>
                  <Building2 className="text-white/20 group-hover:text-accent-warm transition-colors" size={24} />
                </div>

                {/* Mezzanine */}
                <div className="mx-4 p-5 border border-dashed border-accent-warm/30 bg-accent-warm/5 flex justify-between items-center group relative">
                  <div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-accent-warm/30"></div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-accent-warm/50">02</span>
                    <div>
                      <p className="text-accent-warm font-medium">Working Capital Tranche</p>
                      <p className="text-xs text-accent-warm/60">Gap Funding / Reserves</p>
                    </div>
                  </div>
                  <Layers className="text-accent-warm/60" size={20} />
                </div>

                {/* Equity */}
                <div className="p-6 border border-white/20 bg-[#0e121a] flex justify-between items-center group hover:border-white/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/30">03</span>
                    <div>
                      <p className="text-white font-medium">Sponsor Equity</p>
                      <p className="text-xs text-white/50">Remaining Requirement</p>
                    </div>
                  </div>
                  <TrendingUp className="text-white/20 group-hover:text-white transition-colors" size={24} />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase text-white/40 mb-1">Total Leverage</p>
                    <p className="text-xl text-white font-mono">Up to 85%</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-white/40 mb-1">Blended Rate</p>
                    <p className="text-xl text-white font-mono">Market Weighted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Profile - Clean List */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#07080b]">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-2 border-accent-warm pl-6 mb-12">
            <h2 className="text-3xl font-serif text-white">Ideal Partner Profile</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Portfolio Builders', text: 'Investors scaling from 5 to 50+ units requiring repeatable capital structures.' },
              { title: 'BRRRR Operators', text: 'Teams needing agile bridge debt with committed takeout financing.' },
              { title: 'Full-Time Pros', text: 'Sponsors who value execution certainty over maximized leverage.' },
            ].map((profile, i) => (
              <div key={i} className="group p-6 border-t border-white/10 hover:border-accent-warm transition-colors duration-300">
                <h3 className="text-lg text-white font-medium mb-3 group-hover:text-accent-warm transition-colors">{profile.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{profile.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-[#050608] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Precision financing for your next deal.</h2>
          <div className="flex justify-center gap-6">
            <ActionButton>Get a Strategy Review</ActionButton>
            <Link
              href="/transactions"
              className="px-6 py-3 border border-white/15 text-white/60 text-sm hover:text-white hover:border-white transition-colors duration-300"
            >
              See Recent Deals
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
