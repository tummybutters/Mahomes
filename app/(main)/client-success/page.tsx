import Link from 'next/link'
import ActionButton from '@/components/ActionButton'

type LabelValue = {
  label: string
  value: string
}

type InvestorOutcome = {
  name: string
  title: string
  strategy: string
  amount: string
  timeline: string
  usedFor: string[]
  result: string[]
  quote: string
  before: string
  after: string
  videoId: string
  proofStats: LabelValue[]
  flowSteps: string[]
}

const INVESTOR_OUTCOMES: InvestorOutcome[] = [
  {
    name: 'Bryce',
    title: 'Real Estate Investor (Texas)',
    strategy: 'BRRRR strategy | Full time real estate professional',
    amount: '$290,000 in Working Capital',
    timeline: 'Secured in 11 days',
    usedFor: [
      'Down payments',
      'Rehab costs',
      'Contractor draws',
      'Materials',
      'Securing additional deals between refinances',
    ],
    result: [
      'Scaled from 1-2 BRRRR deals per year to 6-8 BRRRR deals per year with multiple simultaneous projects',
      'Reached $12,000/month in cash flow',
      'Unlocked $310,000 in cash out capital from refinances',
    ],
    quote: '"Without the capital I was able to secure, I would have failed."',
    before: 'Cash tied up in renovations and down payments, forcing long gaps between deals and keeping him working as a technician.',
    after: 'Running multiple BRRRR projects simultaneously with available working capital and operating as a full time real estate investor.',
    videoId: 'pznzsyy6fg',
    proofStats: [
      { label: 'Capital Accessed', value: '$290K' },
      { label: 'Funding Speed', value: '11 Days' },
      { label: 'Deal Velocity', value: '1-2 to 6-8 per year' },
      { label: 'Cash Out Recycled', value: '$310K' },
    ],
    flowSteps: ['Approval', 'Deployment', 'Parallel Projects', 'Refinance Capital Recycled'],
  },
  {
    name: 'Charlie',
    title: 'Fix & Flip Investor (Arizona)',
    strategy: 'Phoenix metro market | Residential flips',
    amount: '$320,000 in Working Capital',
    timeline: 'Approved across two rounds in a few weeks',
    usedFor: [
      'Down payments',
      'Renovation costs',
      'Contractors',
      'Holding costs',
      'Running multiple flips simultaneously',
    ],
    result: [
      'Scaled from 1-2 flips per year to on pace for 6 flips this year',
      'Deployed capital into 3 projects within 45 days',
      'Projected to earn nearly 3x last year\'s profit',
    ],
    quote: '"Momentum. You gave me the revolving capital I needed to scale my flipping business."',
    before: 'Limited to one flip at a time using personal cash while working a 9-to-5.',
    after: 'Running multiple flips simultaneously with revolving working capital and scaling his business full time.',
    videoId: 'o6bwujd87k',
    proofStats: [
      { label: 'Capital Accessed', value: '$320K' },
      { label: 'Approval Rounds', value: '2 Rounds' },
      { label: 'Deployment Pace', value: '3 Projects in 45 Days' },
      { label: 'Annual Scale', value: '1-2 to 6 flips/year' },
    ],
    flowSteps: ['Round 1 Approved', 'Round 2 Expanded', 'Multi-Flip Deployment', 'Profit Growth Track'],
  },
  {
    name: 'Jason',
    title: 'Real Estate Portfolio Investor (Florida)',
    strategy: 'Long term rentals | Section 8',
    amount: '$125,000 in 0% Working Capital',
    timeline: 'Secured in 8 days',
    usedFor: [
      'Down payments',
      'Closing costs',
      'DSCR rental acquisitions',
    ],
    result: [
      'Acquired first 4 cash flowing rental properties in about 2 months',
      'Now scaling toward 3-5 additional properties this year',
    ],
    quote: '"I went from wanting to be a real estate investor to actually being one."',
    before: 'Waiting to save capital without access to deal structuring or off market opportunities.',
    after: 'Portfolio owner with a repeatable acquisition strategy using strategic working capital and deal structuring guidance.',
    videoId: 'chii35ppsx',
    proofStats: [
      { label: 'Capital Accessed', value: '$125K at 0%' },
      { label: 'Funding Speed', value: '8 Days' },
      { label: 'Acquisitions', value: '4 Rentals in ~2 Months' },
      { label: 'Scale Target', value: '3-5 More This Year' },
    ],
    flowSteps: ['Approval', 'Acquisition Launch', '4 Rentals Closed', 'Portfolio Expansion'],
  },
]

const METRICS = [
  '$351+ million in Working Capital accessed by 800+ real estate investors',
  'Initial approvals: $50K-$500K',
  'Funding timeline: 5-10 business days',
  'No collateral required',
  'No property liens',
]

const STRUCTURE_POINTS = [
  'Strategic working capital',
  'DSCR financing',
  'Deal structuring guidance',
  'Industry connections',
]

const ECOSYSTEM_POINTS = [
  'Real estate agents',
  'Vetted contractors',
  'Property managers',
  'Off market deal flow',
  'DSCR lending',
  'Deal structuring advisory',
]

function VideoFrame({ name, videoId }: { name: string; videoId: string }) {
  return (
    <div className="aspect-video border border-white/10 bg-black overflow-hidden">
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=false&videoFoam=true`}
        title={`${name} Investor Outcome Video`}
        className="w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

function SnapshotHeader({ outcome }: { outcome: InvestorOutcome }) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg text-white font-medium">{outcome.title}</h3>
        <p className="text-sm text-white/60 mt-1">{outcome.strategy}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border border-white/10 bg-[#050608] p-4">
          <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Capital Secured</p>
          <p className="text-sm text-white">{outcome.amount}</p>
        </div>
        <div className="border border-white/10 bg-[#050608] p-4">
          <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Timeline</p>
          <p className="text-sm text-white">{outcome.timeline}</p>
        </div>
      </div>
    </div>
  )
}

function OutcomeProofStack({ outcome }: { outcome: InvestorOutcome }) {
  return (
    <div className="grid lg:grid-cols-2 gap-px bg-white/10">
      <div className="bg-[#050608] p-5 md:p-8 space-y-5">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Video + Proof Stack</p>
        <VideoFrame name={outcome.name} videoId={outcome.videoId} />

        <div className="grid sm:grid-cols-2 gap-3">
          {outcome.proofStats.map((stat) => (
            <div key={stat.label} className="border border-white/10 bg-[#07080b] p-4">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{stat.label}</p>
              <p className="text-sm text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="border border-white/10 bg-[#07080b] p-4">
          <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3">Deal Timeline</p>
          <div className="flex flex-wrap gap-2">
            {outcome.flowSteps.map((step) => (
              <span key={step} className="text-xs px-3 py-1 border border-white/10 text-white/70 bg-[#050608]">
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#07080b] p-6 md:p-8">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/50 mb-4">Case Snapshot</p>

        <div className="space-y-5">
          <SnapshotHeader outcome={outcome} />

          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3">Used For</p>
            <ul className="space-y-2">
              {outcome.usedFor.map((item) => (
                <li key={item} className="text-sm text-white/75 flex items-start gap-3">
                  <span className="w-1 h-1 bg-accent-warm mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40 mb-3">Result</p>
            <ul className="space-y-2">
              {outcome.result.map((item) => (
                <li key={item} className="text-sm text-white/75 flex items-start gap-3">
                  <span className="w-1 h-1 bg-accent-warm mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-accent-warm pl-4 py-1">
            <p className="text-sm italic text-white/90">{outcome.quote}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-white/10 bg-[#050608] p-4">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">Constraints Before Capital</p>
              <p className="text-sm text-white/70 leading-relaxed">{outcome.before}</p>
            </div>
            <div className="border border-accent-warm/35 bg-accent-warm/[0.05] p-4">
              <p className="text-[10px] uppercase tracking-wider text-accent-warm/90 mb-2">Expansion After Capital</p>
              <p className="text-sm text-white/85 leading-relaxed">{outcome.after}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CaseLayout({ outcome }: { outcome: InvestorOutcome }) {
  return <OutcomeProofStack outcome={outcome} />
}

export default function ClientSuccessPage() {
  return (
    <div className="min-h-screen bg-[#050608] selection:bg-white/15">
      <section className="pt-32 md:pt-36 pb-20 px-6 md:px-12 lg:px-20 border-b border-white/5 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-4 animate-fade-up">
            Client Success
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.92] max-w-5xl animate-fade-up delay-100">
            Investor Capital Outcomes
          </h1>
          <p className="mt-6 text-sm md:text-base text-white/60 max-w-3xl leading-relaxed animate-fade-up delay-200">
            Review documented investor outcomes and verified case studies from markets nationwide. Each file is structured in a standardized format to ensure clarity, comparability, and transparency.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#07080b] border-b border-white/5" id="investor-capital-outcomes">
        <div className="max-w-7xl mx-auto space-y-12">
          {INVESTOR_OUTCOMES.map((outcome, index) => (
            <article key={outcome.name} className="border border-white/10 bg-[#0a0f15]">
              <div className="border-b border-white/10 px-6 md:px-8 py-5 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-2">Investor Outcome</p>
                  <h2 className="text-2xl md:text-3xl font-serif text-white">{outcome.name}</h2>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-mono text-white/40">CASE FILE {String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <CaseLayout outcome={outcome} />
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#050608] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-accent-warm" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Capital Deployment Metrics</p>
          </div>
          <div className="border border-white/10 bg-[#0a0f15]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {METRICS.map((metric) => (
                <div key={metric} className="bg-[#07080b] p-6">
                  <p className="text-sm text-white/80 leading-relaxed">{metric}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-white/55 mt-6 max-w-4xl">
            Investors securing capital with various strategies across multiple markets nationwide.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#07080b] border-b border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-4">The Capital Structure Investors Use to Scale</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Real estate investors scale through repeatable access to capital.</h2>
            <p className="text-sm md:text-base text-white/65 leading-relaxed mb-4">
              Real estate investors don\'t scale because they find better deals. They scale because they gain
              repeatable access to capital.
            </p>
            <p className="text-sm md:text-base text-white/65 leading-relaxed">
              This is the difference between doing one deal at a time and building a portfolio.
            </p>
          </div>

          <div className="lg:col-span-5 border border-white/10 bg-[#050608] p-7">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-5">We Help Investors Combine</p>
            <ul className="space-y-3">
              {STRUCTURE_POINTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="w-1 h-1 bg-accent-warm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#050608] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">Investor Ecosystem</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Inside Malohn Capital Group, investors gain access to:</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {ECOSYSTEM_POINTS.map((item) => (
              <div key={item} className="bg-[#07080b] p-6 hover:bg-[#0a0f15] transition-colors duration-300">
                <p className="text-sm text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-[#050608] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium mb-6">
            See What Capital You Qualify For
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Most investors initially qualify for $50K-$500K in working capital.
          </h2>
          <p className="text-sm text-white/60 mb-10">
            Book a strategy call to see what\'s possible.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <ActionButton href="https://form.typeform.com/to/lGiCs1cM">Book Strategy Call</ActionButton>
            <Link
              href="/transactions"
              className="px-6 py-3 border border-white/15 text-white/60 text-sm hover:text-white hover:border-white transition-colors duration-300"
            >
              View Transactions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
