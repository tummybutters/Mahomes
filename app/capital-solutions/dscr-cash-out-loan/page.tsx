import Link from 'next/link'
import ActionButton from '@/components/ActionButton'

const benefits = [
  {
    title: 'Asset-based underwriting',
    body: 'Qualification based on property cash flow rather than personal income documentation.',
  },
  {
    title: 'Equity efficiency',
    body: 'Reposition equity while maintaining disciplined leverage and reserve protection.',
  },
  {
    title: 'Portfolio scalability',
    body: 'Designed for repeat acquisitions and long-term portfolio expansion strategies.',
  },
]

const criteria = [
  'Investment property focus',
  'DSCR aligned to cash flow durability',
  'Reserve planning for cycle protection',
  'Clear portfolio strategy and exit assumptions',
]

const faqItems = [
  {
    q: 'How is a DSCR cash-out loan structured?',
    a: 'We align senior DSCR debt with portfolio objectives, ensuring leverage remains disciplined while liquidity is released.',
  },
  {
    q: 'Is personal income required?',
    a: 'No. Underwriting is primarily driven by property cash flow and asset performance.',
  },
  {
    q: 'How fast can a cash-out close?',
    a: 'Timelines vary by documentation readiness and asset complexity, typically within a few weeks.',
  },
]

export default function DscrCashOutLoanPage() {
  return (
    <div className="min-h-screen bg-[#07080b] selection:bg-white/15">
      {/* Hero */}
      <section
        className="px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-16"
        style={{
          background: 'linear-gradient(180deg, #050608 0%, #0a1018 70%, #0b1320 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/60 font-medium animate-fade-up">
            DSCR Cash Out Loan
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white font-serif animate-fade-up delay-100">
            Unlock equity with disciplined DSCR structuring.
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/70 max-w-3xl leading-relaxed animate-fade-up delay-200">
            Our DSCR cash-out loans deliver liquidity without compromising the capital architecture. We structure
            asset-based financing around cash flow durability, reserves, and long-term portfolio performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton>Schedule a Strategy Call</ActionButton>
            <Link
              href="/capital-solutions"
              className="px-5 py-3 rounded-none border border-white/15 text-white/80 text-sm hover:text-white hover:border-white/30 transition-colors"
            >
              View Capital Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0b1320 0%, #0a0f15 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Overview</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Cash-out financing designed for portfolio strategy.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              DSCR cash-out loans allow investors to unlock equity while preserving disciplined leverage. We evaluate
              cash flow strength, asset performance, and portfolio objectives before structuring liquidity release.
            </p>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Structure Snapshot</p>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <p>
                <span className="text-white/50">Underwriting:</span> Property cash flow
              </p>
              <p>
                <span className="text-white/50">Primary Use:</span> Equity recycling
              </p>
              <p>
                <span className="text-white/50">Focus:</span> Long-term portfolio leverage
              </p>
              <p>
                <span className="text-white/50">Discipline:</span> Reserve and risk protections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0a0f15 0%, #07080b 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Benefits</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Liquidity without compromising structure.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-none border border-white/15 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #07080b 0%, #0a111b 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Investor Criteria</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Structured for sophisticated investors.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              We prioritize investors with a clear portfolio strategy and disciplined approach to leverage. Capital
              structures are engineered to support long-term growth with risk awareness.
            </p>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Core Requirements</p>
            <div className="mt-6 space-y-3">
              {criteria.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-none bg-accent-warm" />
                  <p className="text-sm text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0a111b 0%, #050608 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Case Study</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Equity recycled with disciplined leverage.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              A stabilized rental portfolio needed liquidity to fund new acquisitions. We structured a DSCR cash-out
              loan that preserved reserve strength and unlocked capital for the next phase of growth.
            </p>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Highlights</p>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <p>
                <span className="text-white/50">Equity Unlocked:</span> $620K
              </p>
              <p>
                <span className="text-white/50">Closing Timeline:</span> 23 days
              </p>
              <p>
                <span className="text-white/50">Outcome:</span> 2 additional acquisitions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #050608 0%, #040507 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">FAQ</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              DSCR cash-out loan questions.
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-none border border-white/15 bg-white/5 px-6 py-5">
                <h3 className="text-sm md:text-base font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20"
        style={{
          background: 'linear-gradient(180deg, #040507 0%, #030405 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">
            Capital Advisory
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
            Evaluate DSCR cash-out structuring with confidence.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-3xl mx-auto">
            Connect with our advisory team to review DSCR cash-out strategies aligned to your portfolio objectives.
          </p>
          <div className="mt-8 flex justify-center">
            <ActionButton>Schedule a Strategy Call</ActionButton>
          </div>
        </div>
      </section>
    </div>
  )
}
