import ActionButton from '@/components/ActionButton'
import { FocusCards } from '@/components/ui/FocusCards'
import { Building2, ShieldCheck, Zap } from 'lucide-react'

const pillars = [
  {
    title: 'Capital Advisory',
    description: 'Strategic guidance that aligns underwriting discipline with investor objectives.',
    icon: <Building2 className="w-10 h-10" />
  },
  {
    title: 'Institutional Structure',
    description: 'Multi-tranche solutions engineered for cash-flow durability and downside protection.',
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: 'Execution Clarity',
    description: 'Transparent decision paths, underwriting assumptions, and closing timelines.',
    icon: <Zap className="w-10 h-10" />
  },
]

export default function CapitalGroupPage() {
  return (
    <div className="min-h-screen bg-[#07080b] selection:bg-white/15">
      {/* Hero */}
      <section
        className="pt-32 md:pt-36 pb-16 px-6 md:px-12 lg:px-20 border-b border-white/5 bg-[#050608]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-4 animate-fade-up">
            Capital Group
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.9] max-w-4xl animate-fade-up delay-100">
            Advisory leadership with <span className="text-accent-warm italic">precision.</span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/60 max-w-2xl leading-relaxed animate-fade-up delay-200">
            Our capital advisory group pairs Wall Street-level structuring with boutique focus. We guide sophisticated
            investors through disciplined leverage design, risk positioning, and long-term portfolio growth.
          </p>
          <div className="mt-8">
            <ActionButton href="/workingcapital">Schedule a Strategy Call</ActionButton>
          </div>
        </div>
      </section>

      {/* Advisory Pillars (Using FocusCards for consistency) */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#07080b] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-white mb-2">Our Discipline</h2>
            <p className="text-sm text-white/50">Three pillars of advisory execellence.</p>
          </div>
          <FocusCards cards={pillars} />
        </div>
      </section>

      {/* Philosophy - Technical Layout */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-4">Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Strategic guidance with accountability.
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              We advise investors who understand that disciplined leverage is a strategic tool. Our role is to
              translate market dynamics, underwriting assumptions, and capital structuring behavior into clear decisions that
              protect the portfolio and unlock growth.
            </p>
            <div className="p-6 border border-white/10 bg-[#0a0f15]">
              <p className="text-sm font-medium text-white mb-4">Core Focus Areas</p>
              <div className="space-y-3">
                {[
                  { l: 'Portfolio Growth', r: 'Scalable frameworks' },
                  { l: 'Risk Discipline', r: 'Downside protection' },
                  { l: 'Execution', r: 'Closing readiness' },
                  { l: 'Alignment', r: 'Matched strategy' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-xs pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-white/50 uppercase tracking-wider">{item.l}</span>
                    <span className="text-white font-mono">{item.r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Team Section Integrated */}
            <div className="space-y-6">
              <div className="border border-white/10 bg-[#07080b] p-8 relative group hover:border-accent-warm/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent-warm/50 transition-colors">
                    <img
                      src="/images/miles-malohn.png"
                      alt="Miles Malohn"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-2">Managing Partner</p>
                    <h3 className="text-2xl font-serif text-white mb-3">Miles Malohn</h3>
                    <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                      Miles leads the firm's strategic direction and capital structuring initiatives. With extensive experience in real estate financing and investment strategies, he focuses on delivering tailored capital solutions that empower investors to scale their portfolios efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-[#07080b] p-8 relative group hover:border-accent-warm/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent-warm/50 transition-colors">
                    <img
                      src="/images/jeff-barak.png"
                      alt="Jeff Barak"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-2">Director of Capital Markets</p>
                    <h3 className="text-2xl font-serif text-white mb-3">Jeff Barak</h3>
                    <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                      Jeff oversees capital market relationships and debt placement strategies. His expertise in structuring complex transactions ensures that clients access the most competitive leverage terms available in the market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-[#07080b] p-8 relative group hover:border-accent-warm/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent-warm/50 transition-colors">
                    <img
                      src="/images/lucas-rabbani.png"
                      alt="Lucas Rabbani"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-2">Director of Capital Advisory</p>
                    <h3 className="text-2xl font-serif text-white mb-3">Lucas Rabbani</h3>
                    <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                      Lucas specializes in client advisory and portfolio analysis. He works closely with investors to align their capital stacks with long-term growth objectives, providing clear guidance on execution and risk management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#050608] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium mb-6">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
            Connect with the capital advisory group.
          </h2>
          <div className="flex justify-center">
            <ActionButton href="/workingcapital">Schedule a Strategy Call</ActionButton>
          </div>
        </div>
      </section>
    </div>
  )
}
