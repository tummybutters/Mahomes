import Link from 'next/link'
import ActionButton from '@/components/ActionButton'

const valuePoints = [
  {
    title: 'Liquidity unlock',
    body: 'Release capital from stabilized assets while protecting long-term cash flow.',
  },
  {
    title: 'Strategic leverage',
    body: 'Structured for scalable growth with reserves and risk buffers aligned to the cycle.',
  },
  {
    title: 'Portfolio optionality',
    body: 'Deploy cash-out proceeds across acquisitions, renovations, or reserve planning.',
  },
]

const guardrails = [
  'Cash flow durability and DSCR coverage review',
  'Reserve planning aligned to market volatility',
  'Portfolio-level leverage modeling',
  'Exit strategy and refinance assumptions',
]

const faqItems = [
  {
    q: 'How is DSCR cash-out different from DSCR cash-out loans?',
    a: 'This solution focuses on the strategic use of cash-out proceeds and portfolio-level leverage planning, not just the loan mechanics.',
  },
  {
    q: 'Can proceeds be used across multiple assets?',
    a: 'Yes. The structure is designed around portfolio strategy, allowing capital deployment across multiple investments.',
  },
  {
    q: 'What risks are evaluated?',
    a: 'We focus on cash flow durability, reserve sufficiency, and leverage behavior through market cycles.',
  },
]

export default function DscrCashOutPage() {
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
            DSCR Cash Out
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white font-serif animate-fade-up delay-100">
            Strategic liquidity for long-term portfolio growth.
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/70 max-w-3xl leading-relaxed animate-fade-up delay-200">
            DSCR cash-out solutions align liquidity release with disciplined leverage planning. We evaluate cash flow
            durability, reserve coverage, and portfolio objectives to ensure long-term resilience.
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

      {/* Value */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0b1320 0%, #0a0f15 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Value Proposition</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Liquidity aligned to disciplined capital architecture.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {valuePoints.map((item) => (
              <div key={item.title} className="rounded-none border border-white/15 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guardrails */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0a0f15 0%, #07080b 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Risk Discipline</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Guardrails that protect downside.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              Our DSCR cash-out approach includes portfolio-level stress testing and reserve planning to ensure leverage
              remains resilient across market shifts.
            </p>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Structural Guardrails</p>
            <div className="mt-6 space-y-3">
              {guardrails.map((item) => (
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
          background: 'linear-gradient(180deg, #07080b 0%, #0a111b 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Case Study</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Cash-out structured for multi-cycle durability.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              An investor group used DSCR cash-out proceeds to secure new acquisitions while maintaining reserve
              targets and protecting portfolio cash flow across multiple markets.
            </p>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Highlights</p>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <p>
                <span className="text-white/50">Liquidity Released:</span> $910K
              </p>
              <p>
                <span className="text-white/50">Portfolio Size:</span> 11 properties
              </p>
              <p>
                <span className="text-white/50">Outcome:</span> 4 acquisitions executed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0a111b 0%, #050608 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">FAQ</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              DSCR cash-out structuring questions.
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
          background: 'linear-gradient(180deg, #050608 0%, #040507 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">
            Capital Advisory
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
            Plan DSCR cash-out liquidity with precision.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-3xl mx-auto">
            Connect with our advisory team to align cash-out structuring with your portfolio growth strategy.
          </p>
          <div className="mt-8 flex justify-center">
            <ActionButton>Schedule a Strategy Call</ActionButton>
          </div>
        </div>
      </section>
    </div>
  )
}
