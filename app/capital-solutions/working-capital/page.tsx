import Link from 'next/link'
import ActionButton from '@/components/ActionButton'

const useCases = [
  'Bridge down payments for acquisitions',
  'Create renovation and stabilization reserves',
  'Cover earnest money and closing expenses',
  'Support multi-property acquisition timelines',
]

const structurePoints = [
  {
    title: 'Liquidity without property liens',
    body: 'Unsecured working capital designed to layer cleanly within the capital stack.',
  },
  {
    title: 'Flexible deployment',
    body: 'Capital can be staged across multiple deals to maintain execution momentum.',
  },
  {
    title: 'Portfolio-level discipline',
    body: 'Structures aligned to cash flow durability and long-term portfolio performance.',
  },
]

const qualifications = [
  '680+ credit profile',
  'Documented acquisition or portfolio plan',
  'Demonstrated liquidity management',
  'U.S. based investors and operators',
]

const faqItems = [
  {
    q: 'How is working capital used in the capital stack?',
    a: 'Working capital is positioned as a supplemental tranche to support reserves, down payments, or execution timing without over-levering the asset.',
  },
  {
    q: 'Is this tied to a specific property?',
    a: 'No. It is structured to support portfolio strategy rather than a single asset, allowing flexibility across acquisitions.',
  },
  {
    q: 'How fast can capital be deployed?',
    a: 'Deployment timelines are aligned to underwriting and documentation readiness, typically within days after approval.',
  },
]

export default function WorkingCapitalPage() {
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
            Working Capital
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white font-serif animate-fade-up delay-100">
            Investment-focused liquidity built for disciplined growth.
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/70 max-w-3xl leading-relaxed animate-fade-up delay-200">
            Working capital solutions provide a strategic liquidity layer that supports acquisitions, reserves, and
            execution timing without compromising the integrity of the capital stack.
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

      {/* Use Cases */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0b1320 0%, #0a0f15 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Use Cases</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Liquidity engineered for execution.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              Working capital is designed to remove friction points in the acquisition cycle. It ensures you can move
              quickly, preserve equity efficiency, and remain capital ready.
            </p>
            <div className="mt-6 space-y-3">
              {useCases.map((item) => (
                <div key={item} className="rounded-none border border-white/15 bg-white/5 px-4 py-3">
                  <p className="text-sm text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Structure Snapshot</p>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <p>
                <span className="text-white/50">Capital Range:</span> $50K - $500K
              </p>
              <p>
                <span className="text-white/50">Deployment:</span> Staged across multiple deals
              </p>
              <p>
                <span className="text-white/50">Position:</span> Supplemental liquidity tranche
              </p>
              <p>
                <span className="text-white/50">Outcome:</span> Protects equity and execution speed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0a0f15 0%, #07080b 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Capital Structure</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Built to complement DSCR financing.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {structurePoints.map((item) => (
              <div key={item.title} className="rounded-none border border-white/15 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #07080b 0%, #0a111b 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Qualification Profile</p>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
              Designed for disciplined investors and operators.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              Working capital solutions are best suited for sophisticated investors with a clear acquisition plan and
              defined portfolio strategy.
            </p>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Core Requirements</p>
            <div className="mt-6 space-y-3">
              {qualifications.map((item) => (
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
              Liquidity that preserved momentum.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              An investor group required fast, flexible liquidity to secure a multi-property pipeline. We structured a
              working capital facility aligned to their DSCR financing, enabling continuous acquisitions while
              maintaining reserve discipline.
            </p>
          </div>
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-7">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Highlights</p>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <p>
                <span className="text-white/50">Capital Deployed:</span> $380K
              </p>
              <p>
                <span className="text-white/50">Timeline:</span> 9 days from approval
              </p>
              <p>
                <span className="text-white/50">Outcome:</span> 3 acquisitions executed
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
              Questions about working capital structuring.
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
            Working Capital Strategy
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
            Evaluate liquidity solutions designed for scalable growth.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-3xl mx-auto">
            Connect with our advisory team to review working capital options aligned to your portfolio objectives.
          </p>
          <div className="mt-8 flex justify-center">
            <ActionButton>Schedule a Strategy Call</ActionButton>
          </div>
        </div>
      </section>
    </div>
  )
}
