import Link from 'next/link'
import ActionButton from '@/components/ActionButton'
import { FocusCards } from '@/components/ui/FocusCards'
import { Layers, TrendingUp, Target, ShieldCheck } from 'lucide-react'

const separators = [
  {
    title: 'Structured Capital',
    body: "We don't push products. We design capital structures engineered around cash-flow durability, downside protection, and equity efficiency.",
    icon: <Layers className="w-10 h-10" />,
  },
  {
    title: 'Cycle Tested Philosophy',
    body: 'Markets change. Liquidity tightens. Rates move. We build structures that anticipate stress, not just upside.',
    icon: <ShieldCheck className="w-10 h-10" />,
  },
  {
    title: 'Precision Over Volume',
    body: 'We work selectively, focusing on structure quality, execution timing, and long-term outcomes over transaction count.',
    icon: <Target className="w-10 h-10" />,
  },
  {
    title: 'Clarity with Expertise',
    body: 'Backed by decades of excellence, we simplify complex decisions so clients understand where risk lives and how leverage behaves.',
    icon: <TrendingUp className="w-10 h-10" />,
  },
]

const timeline = [
  {
    title: 'A Pivot in Wall Street Capital',
    year: '1985',
    body: 'In the mid 1980s, as capital markets evolved and financial engineering began reshaping Wall Street, our founders recognized a critical gap: advanced structuring techniques were reserved for large institutions while lower middle market investors were left with rigid financing options. Malohn Capital Group was created to close that gap.',
  },
  {
    title: 'The Foundation Takes Shape',
    year: '1998',
    body: 'From the beginning, the firm focused on disciplined capital structuring that combined leverage, risk management, and long-term strategy. Through multiple economic cycles, we refined a core philosophy: leverage should be a tool, not a risk, and sophisticated capital should not be limited by size.',
  },
  {
    title: 'The Modern Expansion of a Legacy',
    year: 'Today',
    body: 'Today, Malohn Capital Group delivers institutional-grade structuring to the lower middle market, bridging the precision of Wall Street with the agility of modern finance. Our principles remain unchanged: disciplined execution, thoughtful leverage, and structures built to endure.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07080b] selection:bg-white/15">
      {/* Hero */}
      <section
        className="pt-28 md:pt-36 pb-16 px-6 md:px-12 lg:px-20 border-b border-white/5 bg-[#050608]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-4 animate-fade-up">
            About Malohn Capital Group
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.9] max-w-5xl animate-fade-up delay-100">
            Institutional-grade structuring for investors outside the traditional gatekeepers.
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/60 max-w-3xl leading-relaxed animate-fade-up delay-200">
            At Malohn Capital Group, we are redefining lower middle market finance. Our mission is to deliver
            institutional-grade financial strategy to everyday investors, introducing Wall Street-level structuring,
            discipline, and sophistication to markets that have long been underserved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton>Schedule a Meeting</ActionButton>
            <Link
              href="/capital-solutions"
              className="px-5 py-3 rounded-none border border-white/15 text-white/80 text-sm hover:text-white hover:border-white/30 transition-colors"
            >
              Explore Capital Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Grid Layout */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#07080b] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="border-l-2 border-accent-warm pl-6">
            <h2 className="text-xl font-serif text-white mb-4">Our Mission</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              We specialize in innovative multi-tranche debt solutions designed to responsibly increase leverage,
              enhance equity returns, and expand access to capital. By pairing prudent risk management with advanced
              financial engineering, we help investors and businesses unlock growth opportunities that were once
              reserved for elite institutions.
            </p>
          </div>
          <div className="border-l-2 border-white/10 pl-6">
            <h2 className="text-xl font-serif text-white mb-4">Our Vision</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Our vision is simple: a financial ecosystem where proven tools of high finance are no longer exclusive.
              By bridging traditional capital markets with modern innovation, we open new pathways for sustainable
              growth and long-term wealth creation in the lower middle market.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach - Typography Focus */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm font-medium mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Disciplined capital structuring built around long-term performance.</h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-white/60 leading-relaxed">
            <p>
              Malohn Capital Group combines deep industry expertise with a forward vision approach to capital
              structuring. We design flexible, tailored financing solutions that reflect each client's objectives,
              risk profile, and growth strategy.
            </p>
            <div className="pl-6 border-l border-white/10">
              <p className="italic text-white/80">
                "Leverage should be a tool, not a risk."
              </p>
            </div>
            <p>
              Through advanced debt structuring and carefully engineered leverage, we enable investors and small
              businesses to maximize equity efficiency while maintaining a strong emphasis on capital preservation.
              Every solution is built with discipline, transparency, and long-term performance in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Separators - Uses Refactored FocusCards */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#07080b] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-white mb-2">The Malohn Difference</h2>
            <p className="text-sm text-white/50">Institutional discipline, applied with boutique focus.</p>
          </div>
          <FocusCards
            cards={separators.map((item) => ({
              title: item.title,
              description: item.body,
              icon: item.icon,
            }))}
          />
        </div>
      </section>

      {/* Timeline - Refactored to Flat List */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium mb-4">Legacy</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Built through multiple market cycles.</h2>
              <div className="text-6xl font-serif text-white/5">39</div>
              <p className="text-sm text-white/40 uppercase tracking-widest mt-2">Years of Experience</p>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="group relative pl-8 border-l border-white/10 hover:border-accent-warm transition-colors duration-500">
                  <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#050608] border border-white/20 group-hover:border-accent-warm rotate-45 transition-colors duration-500" />

                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                    <span className="text-sm font-mono text-accent-warm">{item.year}</span>
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed max-w-2xl">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5 bg-[#050608] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium mb-6">
            Discuss Your Next Investment
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
            Ready to acquire your next property?
          </h2>
          <div className="flex justify-center">
            <ActionButton>Schedule a Meeting</ActionButton>
          </div>
        </div>
      </section>
    </div>
  )
}
