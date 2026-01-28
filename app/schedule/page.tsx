import ActionButton from '@/components/ActionButton'

const expectations = [
  {
    title: 'Structure Review',
    body: 'We review your portfolio objectives, liquidity needs, and risk profile to align the right capital stack.',
  },
  {
    title: 'Strategy Alignment',
    body: 'You receive a clear path forward with disciplined leverage guidance and realistic execution timelines.',
  },
  {
    title: 'Case Study Access',
    body: 'Qualified investors receive relevant case studies and capital structure examples.',
  },
]

export default function SchedulePage() {
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
            Schedule a Meeting
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white font-serif animate-fade-up delay-100">
            Connect with our capital advisory group.
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/70 max-w-3xl leading-relaxed animate-fade-up delay-200">
            Schedule a strategy call to review your next acquisition, capital structure, or portfolio growth plan.
            Expect a disciplined, advisory-first conversation focused on long-term performance.
          </p>
        </div>
      </section>

      {/* Form + Expectations */}
      <section
        className="px-6 md:px-12 lg:px-20 py-18"
        style={{
          background: 'linear-gradient(180deg, #0b1320 0%, #0a0f15 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-none border border-white/15 bg-white/5 p-6 md:p-8">
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Meeting Request</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-light text-white font-serif">
              Share your capital objectives.
            </h2>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              This form is a placeholder until the full scheduling workflow and custom questions are provided.
            </p>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-none text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-none text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-none text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <input
                type="text"
                placeholder="Portfolio Size or Capital Target"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-none text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <textarea
                rows={4}
                placeholder="Briefly describe your investment goals"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-none text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <div className="pt-2">
                <ActionButton>Request a Strategy Call</ActionButton>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">What to Expect</p>
            <h3 className="mt-4 text-2xl md:text-3xl font-light text-white font-serif">
              Advisory-first guidance with institutional discipline.
            </h3>
            <div className="mt-6 space-y-4">
              {expectations.map((item) => (
                <div key={item.title} className="rounded-none border border-white/15 bg-white/5 p-5">
                  <h4 className="text-sm md:text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-none border border-white/15 bg-white/5 p-6">
              <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">Response Time</p>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Our team responds within 1 business day to confirm next steps and schedule availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20"
        style={{
          background: 'linear-gradient(180deg, #0a0f15 0%, #050608 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-white/50 font-medium">
            Capital Advisory
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-light text-white font-serif">
            Explore disciplined capital solutions with confidence.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-3xl mx-auto">
            We help investors structure capital for long-term performance, not short-term volume. Schedule a strategy
            call to evaluate your next move.
          </p>
          <div className="mt-8 flex justify-center">
            <ActionButton>Schedule a Strategy Call</ActionButton>
          </div>
        </div>
      </section>
    </div>
  )
}
