import ActionButton from '@/components/ActionButton'
import FormSubmitButton from '@/components/FormSubmitButton'
import AutoScrollCarousel from '@/components/home/AutoScrollCarousel'
import StatsStrip from '@/components/home/StatsStrip'
import { Play } from 'lucide-react'

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Strategy & Objectives',
    body: 'We review your strategy, portfolio goals, capital requirements, and liquidity targets to define the optimal deal structure.',
  },
  {
    step: '02',
    title: 'Structure Design',
    body: 'We engineer a multi-tranche solution aligning DSCR financing and working capital with your cash flow models.',
  },
  {
    step: '03',
    title: 'Execution & Close',
    body: 'We confirm terms, coordinate underwriting, and manage the closing process with disciplined precision.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050608] selection:bg-white/15">
      {/* Hero Section - Sharp Technical Layout */}
      <section className="pt-28 md:pt-36 pb-0 flex flex-col border-b border-white/5">
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
            <div className="max-w-3xl">
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-6 animate-fade-up">
                Malohn Capital Group
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.95] animate-fade-up delay-100">
                Build a Cash Flowing Real Estate Empire Without the Traditional <span className="text-accent-warm italic">Roadblocks</span>
              </h1>
            </div>

            <div className="max-w-sm pb-2 animate-fade-up delay-200">
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Unlock powerful working capital that lets you scale faster with less money down, no collateral, and fewer income docs for real estate investors and business owners.
              </p>
              <div className="flex gap-4">
                <ActionButton href="/schedule">Get Started</ActionButton>
                <a href="#process" className="px-5 py-3 text-xs uppercase tracking-wider text-white/50 hover:text-white border border-transparent hover:border-white/10 transition-all">
                  How it Works
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sharp Video Container */}
        <div className="w-full border-y border-white/10 bg-[#0a0f15] relative group">
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-[50vh] md:h-[70vh] object-cover opacity-80"
          >
            <source src="/videos/hero-video.mov" type="video/quicktime" />
          </video>

          {/* Technical Overlays */}
          <div className="absolute bottom-0 left-0 p-8 z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <Play size={16} className="text-white ml-1" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/70">Institutional Focus</p>
                <p className="text-white font-serif">Capital Deployment Reel 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <StatsStrip />
      </section>

      {/* Process Section - Sharp Grid */}
      <section id="process" className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-4">The Process</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white">Disciplined execution from start to close.</h2>
            </div>
            <p className="text-sm text-white/50 max-w-sm text-right md:text-left">
              We align structure, pricing, and timing with your objectives, keeping every step transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="group bg-[#07080b] p-8 md:p-10 hover:bg-[#0a0f15] transition-colors duration-500 relative">
                <span className="text-xs font-mono text-white/30 mb-6 block group-hover:text-accent-warm transition-colors">{step.step}</span>
                <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-xs">{step.body}</p>

                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-warm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Transactions - Technical Carousel */}
      <section className="py-24 bg-[#07080b] border-b border-white/5 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-accent-warm" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Track Record</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Recent Deployments</h2>
        </div>

        <AutoScrollCarousel />
      </section>

      {/* Lead Magnet - Technical Layout */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 bg-[#0a0f15] p-8 md:p-16 grid lg:grid-cols-2 gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" className="text-white fill-current">
                <circle cx="50" cy="50" r="20" />
                <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div>
              <span className="text-accent-warm font-mono text-xs mb-4 block">04 // RESOURCES</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The Smarter Way to Buy Real Estate with Less Than 15% Down</h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Traditional financing is working against investors. Learn how working capital coupled with DSCR Loans allows you to bypass traditional lending hurdles and acquire cash flowing rentals with little to no money down.
              </p>
              <ul className="space-y-3 mb-8">
                {['No collateral required', 'Scale faster with more leverage', 'Protect liquid cash reserves'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1 h-1 bg-accent-warm" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 bg-[#050608] border border-white/10 p-8">
              <h3 className="text-white font-medium mb-6">Get the Free Guide</h3>
              <div className="space-y-4">
                <input
                  type="text" placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors placeholder:text-white/30"
                />
                <input
                  type="email" placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors placeholder:text-white/30"
                />
                <FormSubmitButton text="Download PDF" sentText="Access Granted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Sharp Accordion Style */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#07080b] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif text-white">Common Questions</h2>
          </div>
          <div className="space-y-px bg-white/10 border border-white/10">
            {[
              { q: 'What qualifies for a strategy call?', a: 'Active investors looking to deploy capital in the next 7-90 days.' },
              { q: 'Do you work with new investors?', a: 'Yes, we work with new and seasoned investors provided there is a clear strategy and strong credit profile.' },
              { q: 'How fast can we fund?', a: 'Working capital can be funded in as soon as 7-14 days. Typical DSCR funding timelines are 7-21 days.' },
              { q: 'How much can we fund?', a: 'We can fund $50 to $500k in working capital for your first round and $10M+ in DSCR loans.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-[#050608] p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between group hover:bg-[#0a0f15] transition-colors">
                <p className="text-white font-medium">{faq.q}</p>
                <p className="text-sm text-white/50 text-right group-hover:text-white/80 transition-colors max-w-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
