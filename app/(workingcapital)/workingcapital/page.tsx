'use client'

import { useState, useRef, useEffect, memo } from 'react'
import Image from 'next/image'
import { Play, ChevronLeft, ChevronRight, Check, Lock, Sparkles } from 'lucide-react'
import { Widget } from '@typeform/embed-react'
import styles from './SecretLanding.module.css'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const TESTIMONIALS = [
  // First-Time Investors / Speed & Guidance
  {
    gradient: 'linear-gradient(145deg, rgba(22, 25, 34, 0.9) 0%, rgba(12, 14, 18, 0.95) 100%)',
    quote: "I was stuck waiting on traditional banks while good deals slipped away. Malohn Capital moved fast—funded my first triplex in 3 weeks. The guidance was incredible.",
    reviewer: "Marcus D.",
    location: "Houston, TX",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2670&auto=format&fit=crop", // Brick/Renovation
    avatar: "/images/testimonials/marcus_d_portrait.png",
    imageAlt: "Renovated brick triplex in Houston",
    amount: "$350K",
    type: "First Deal"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(25, 22, 34, 0.9) 0%, rgba(14, 12, 18, 0.95) 100%)',
    quote: "As a new investor, I didn't have the track record lenders wanted. They looked at the deal, not just my history. Got funded faster than I thought possible.",
    reviewer: "Jennifer R.",
    location: "Phoenix, AZ",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop", // Modern Home
    avatar: "/images/testimonials/jennifer_r_portrait.png",
    imageAlt: "Modern single-story home in Phoenix",
    amount: "$180K",
    type: "New Investor"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(28, 34, 22, 0.9) 0%, rgba(16, 20, 12, 0.95) 100%)',
    quote: "Professional team that actually understands the BRRRR strategy. They provided the gap funding I needed to close my first rehab without stressing my personal cash.",
    reviewer: "Kevin L.",
    location: "Las Vegas, NV",
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2670&auto=format&fit=crop", // Rehab Home
    avatar: "/images/testimonials/kevin_l_portrait.png",
    imageAlt: "Renovation project in Las Vegas",
    amount: "$150K",
    type: "Fix & Flip"
  },

  // Experienced Investors / Scaling & Leverage
  {
    gradient: 'linear-gradient(145deg, rgba(22, 34, 28, 0.9) 0%, rgba(12, 18, 14, 0.95) 100%)',
    quote: "I've done 20+ deals, but liquidity is always the bottleneck. Their unsecured line allowed me to scale from 2 to 8 units in under a year. Game changer for scaling.",
    reviewer: "Brandon T.",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop", // Apartment
    avatar: "/images/testimonials/brandon_t_portrait.png",
    imageAlt: "Small apartment building in Miami",
    amount: "$500K",
    type: "Portfolio Scale"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(34, 28, 22, 0.9) 0%, rgba(18, 14, 12, 0.95) 100%)',
    quote: "No collateral needed. No property liens. This is how capital should work for serious investors. It keeps my equity free for other moves.",
    reviewer: "Sarah M.",
    location: "Dallas, TX",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", // Modern Villa
    avatar: "/images/testimonials/sarah_m_portrait.png",
    imageAlt: "Modern luxury home in Dallas",
    amount: "$275K",
    type: "Unsecured"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(22, 28, 34, 0.9) 0%, rgba(12, 16, 20, 0.95) 100%)',
    quote: "The 0% working capital changed everything for my portfolio growth. I used it for down payments on three separate turn-key properties in one month.",
    reviewer: "Michelle W.",
    location: "Charlotte, NC",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2670&auto=format&fit=crop", // City/Building
    avatar: "/images/testimonials/michelle_w_portrait.png",
    imageAlt: "Multi-unit property in Charlotte",
    amount: "$220K",
    type: "Acquisition"
  },
]

const VIDEO_UNLOCK_THRESHOLD = 0.35
const VSL_DRIVE_FILE_ID = '1G4vYk4u5FIeMbrsEiS00pFFXKv94QTtC'
const VSL_PREVIEW_URL = `https://drive.google.com/file/d/${VSL_DRIVE_FILE_ID}/preview`
const WATCH_TIMER_SECONDS = 40

const SchedulerEmbed = memo(function SchedulerEmbed({
  typeformId,
  isOpen,
  schedulerRef,
}: {
  typeformId: string
  isOpen: boolean
  schedulerRef: React.RefObject<HTMLDivElement>
}) {
  return (
    <div
      ref={schedulerRef}
      aria-hidden={!isOpen}
      className={`mx-auto w-full max-w-[520px] transition-opacity duration-200 ${
        isOpen
          ? 'relative opacity-100 mt-4 pointer-events-auto visible'
          : 'fixed -left-[9999px] top-0 opacity-0 pointer-events-none invisible'
      }`}
    >
      <div className="rounded-xl border border-white/[0.12] bg-[#0b0d11] shadow-2xl shadow-black/50 overflow-hidden">
        <div className="px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <p className="text-xs tracking-[0.08em] uppercase text-slate-300 font-[family-name:var(--font-outfit)]">
            Schedule Your Call
          </p>
        </div>
        <Widget
          id={typeformId}
          style={{ width: '100%', height: '620px' }}
          className="w-full"
          transitiveSearchParams
          hideFooter
          inlineOnMobile
          lazy={false}
        />
      </div>
    </div>
  )
})

export default function SecretLandingPage() {
  const TYPEFORM_ID = 'lGiCs1cM'
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [scheduleClickLocked, setScheduleClickLocked] = useState(false)
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const schedulerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined' || typeof window.fbq !== 'function') return
    if (params) {
      window.fbq('trackCustom', eventName, params)
      return
    }
    window.fbq('trackCustom', eventName)
  }

  // Simulate watched progress for the embedded VSL.
  // Drive preview iframe does not provide playback progress callbacks.
  useEffect(() => {
    if (!isVideoPlaying) return

    const startedAt = Date.now()
    const interval = window.setInterval(() => {
      const elapsed = (Date.now() - startedAt) / 1000
      const progress = Math.min(elapsed / WATCH_TIMER_SECONDS, 1)
      setVideoProgress(progress)
      if (progress >= VIDEO_UNLOCK_THRESHOLD) {
        setIsUnlocked(true)
      }
    }, 250)

    return () => {
      window.clearInterval(interval)
    }
  }, [isVideoPlaying])

  useEffect(() => {
    if (isUnlocked && scheduleClickLocked) {
      setScheduleClickLocked(false)
    }
  }, [isUnlocked, scheduleClickLocked])

  useEffect(() => {
    if (typeof document === 'undefined') return

    const preconnectTargets = ['https://form.typeform.com', 'https://embed.typeform.com']
    const appendedLinks: HTMLLinkElement[] = []

    preconnectTargets.forEach((href) => {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
      appendedLinks.push(link)
    })

    return () => {
      appendedLinks.forEach((link) => link.remove())
    }
  }, [])

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  const handleScheduleMeetingClick = () => {
    if (isUnlocked) return
    setScheduleClickLocked(true)
    videoContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleTypeformOpen = () => {
    if (!isUnlocked) return

    trackMetaEvent('ScheduleMeetingClick', { page: '/workingcapital' })
    setIsSchedulerOpen(true)
    requestAnimationFrame(() => {
      schedulerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  // Auto-scroll carousel
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollInterval: NodeJS.Timeout
    let lastScrollTime = Date.now()
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const autoScroll = () => {
      if (isPaused || isScrolling) return
      const now = Date.now()
      if (now - lastScrollTime < 3500) return

      const itemWidth = carousel.querySelector('button')?.offsetWidth || 300
      const gap = 12
      const scrollAmount = itemWidth + gap

      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      lastScrollTime = now
    }

    const checkReset = () => {
      if (isScrolling) return
      const scrollWidth = carousel.scrollWidth
      const scrollLeft = carousel.scrollLeft
      const itemsWidth = scrollWidth / 2
      const resetThreshold = itemsWidth * 0.8

      if (scrollLeft >= resetThreshold) {
        carousel.scrollTo({ left: 0, behavior: 'auto' })
      }
    }

    const handleScroll = () => {
      isScrolling = true
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 150)
    }

    carousel.addEventListener('scroll', handleScroll)
    scrollInterval = setInterval(autoScroll, 4000)
    const resetInterval = setInterval(checkReset, 200)

    const handleInteractionStart = () => {
      setIsPaused(true)
      lastScrollTime = Date.now()
    }

    const handleInteractionEnd = () => {
      setTimeout(() => {
        setIsPaused(false)
        lastScrollTime = Date.now()
      }, 2000)
    }

    carousel.addEventListener('touchstart', handleInteractionStart)
    carousel.addEventListener('mousedown', handleInteractionStart)
    carousel.addEventListener('touchend', handleInteractionEnd)
    carousel.addEventListener('mouseup', handleInteractionEnd)

    return () => {
      clearInterval(scrollInterval)
      clearInterval(resetInterval)
      clearTimeout(scrollTimeout)
      carousel.removeEventListener('scroll', handleScroll)
      carousel.removeEventListener('touchstart', handleInteractionStart)
      carousel.removeEventListener('mousedown', handleInteractionStart)
      carousel.removeEventListener('touchend', handleInteractionEnd)
      carousel.removeEventListener('mouseup', handleInteractionEnd)
    }
  }, [isPaused])

  const scrollToNext = () => {
    const carousel = carouselRef.current
    if (!carousel) return
    const itemWidth = carousel.querySelector('button')?.offsetWidth || 300
    carousel.scrollBy({ left: itemWidth + 12, behavior: 'smooth' })
  }

  const scrollToPrev = () => {
    const carousel = carouselRef.current
    if (!carousel) return
    const itemWidth = carousel.querySelector('button')?.offsetWidth || 300
    if (carousel.scrollLeft < itemWidth + 12) {
      const totalItemsWidth = carousel.scrollWidth / 2
      carousel.scrollTo({ left: totalItemsWidth - (itemWidth + 12), behavior: 'auto' })
      setTimeout(() => {
        carousel.scrollBy({ left: -(itemWidth + 12), behavior: 'smooth' })
      }, 50)
    } else {
      carousel.scrollBy({ left: -(itemWidth + 12), behavior: 'smooth' })
    }
  }

  const remainingUnlockPercent = Math.max(0, Math.ceil((VIDEO_UNLOCK_THRESHOLD - videoProgress) * 100))
  const watchedPercent = Math.round(videoProgress * 100)

  return (
    <div className="min-h-screen bg-deep text-slate-50 selection:bg-amber-500/25 relative">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/3 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative py-0.5 md:py-1 border-b border-white/[0.06] backdrop-blur-sm bg-[#08090c]/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-center">
          <div className="relative w-20 h-7 md:w-24 md:h-8 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="Malohn Capital Group"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-0 md:pt-1 pb-3 md:pb-5 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] via-transparent to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4">
          {/* Requirements Badge */}
          <div className="flex justify-center mb-1.5 md:mb-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-amber-500/20 backdrop-blur-sm">
              <Sparkles className="w-2.5 h-2.5 text-amber-400/80 shrink-0" />
              <p className="text-[10px] sm:text-xs text-slate-300">
                680+ Credit and 4+ Open Accounts Preferred
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-2 md:mb-3">
            <h1 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05] mb-1.5 md:mb-2">
              <span className="text-gradient-gold">SECURE $50,000–$500,000</span>
              <br />
              <span className="text-slate-100">IN 0% WORKING CAPITAL</span>
            </h1>
            <h2 className="max-w-4xl mx-auto font-[family-name:var(--font-outfit)] text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-light tracking-tight leading-snug">
              START OR SCALE YOUR REAL ESTATE BUSINESS
              <br />
              <span className="border-b-2 border-amber-500/40 pb-0.5">IN 7 - 14 DAYS</span>
            </h2>
          </div>



          {/* Video Section */}
          <div ref={videoContainerRef} className="max-w-[680px] mx-auto mt-[75px] md:mt-0">
            {/* Video label */}
            <div className="bg-white/[0.03] border border-white/[0.08] text-slate-300 text-center py-1 px-3 text-[10px] sm:text-[11px] font-medium tracking-wide flex items-center justify-center rounded-lg mb-1.5">
              WATCH THE VIDEO BELOW TO SEE HOW THE PROGRAM WORKS
            </div>

            <div className="relative aspect-video bg-gradient-to-br from-[#0c0e12] to-[#08090c] rounded-lg border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/50">
              {/* Video element */}
              <iframe
                title="Working Capital VSL"
                src={VSL_PREVIEW_URL}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />

              {/* Play overlay */}
              {!isVideoPlaying && (
                <button
                  type="button"
                  onClick={handlePlayVideo}
                  onPointerDown={handlePlayVideo}
                  className="absolute inset-0 bg-[#08090c]/90 flex flex-col items-center justify-center backdrop-blur-sm cursor-pointer"
                  aria-label="Play video presentation"
                >
                  <span className="group relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300">
                    <Play className="w-8 h-8 text-[#08090c] ml-1" fill="currentColor" />
                    <span className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping opacity-20" />
                  </span>
                  <p className="mt-6 text-slate-400 font-[family-name:var(--font-outfit)] text-sm tracking-wide">
                    Click to watch presentation
                  </p>
                </button>
              )}

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
                  style={{ width: `${videoProgress * 100}%` }}
                />
                <div
                  className="absolute top-0 h-full w-0.5 bg-white/40"
                  style={{ left: `${VIDEO_UNLOCK_THRESHOLD * 100}%` }}
                />
              </div>

              {/* Unlock badge */}
              {!isUnlocked && videoProgress > 0 && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2">
                  <Lock className="w-3 h-3 text-amber-400" />
                  <span className="text-xs text-slate-300 font-[family-name:var(--font-outfit)]">
                    {Math.round((VIDEO_UNLOCK_THRESHOLD - videoProgress) * 100)}% more to unlock
                  </span>
                </div>
              )}
              {isUnlocked && (
                <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-full px-3 py-1.5 flex items-center gap-2">
                  <Check className="w-3 h-3 text-amber-400" />
                  <span className="text-xs text-amber-200 font-[family-name:var(--font-outfit)]">Unlocked</span>
                </div>
              )}
            </div>

          </div>

          <div className="flex flex-col items-center mt-[75px] md:mt-1.5 mb-3">
            {isUnlocked ? (
              <button
                type="button"
                onClick={handleTypeformOpen}
                className="btn-primary inline-flex flex-col items-center justify-center rounded-lg px-8 py-3 font-[family-name:var(--font-outfit)]"
              >
                <span className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase leading-none">
                  FUND YOUR FUTURE
                </span>
                <span className="mt-1 text-sm tracking-[0.04em] leading-none">
                  SCHEDULE A CALL
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleScheduleMeetingClick}
                className="btn-primary inline-flex flex-col items-center justify-center rounded-lg px-8 py-3 font-[family-name:var(--font-outfit)]"
              >
                <span className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase leading-none">
                  FUND YOUR FUTURE
                </span>
                <span className="mt-1 inline-flex items-center gap-2 text-sm tracking-[0.04em] leading-none">
                  <Lock className="w-4 h-4 text-[#08090c]" />
                  SCHEDULE A CALL
                </span>
              </button>
            )}
            {!isUnlocked && scheduleClickLocked && (
              <p className="text-center text-xs text-amber-300/80 mt-3 font-[family-name:var(--font-outfit)]">
                Watch {remainingUnlockPercent}% more of the video to unlock scheduling ({watchedPercent}% watched).
              </p>
            )}
          </div>

          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
            Our real estate working capital program helps you secure fast, flexible funding in 7-14 days. No collateral required and no property liens.
          </p>

          <SchedulerEmbed
            typeformId={TYPEFORM_ID}
            isOpen={isSchedulerOpen}
            schedulerRef={schedulerRef}
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-24 overflow-hidden bg-[#08090c]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(212,168,83,0.02)_0%,_transparent_50%)]" />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400/50 mb-3 block font-[family-name:var(--font-outfit)]">
              Real Results
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-xl md:text-2xl font-medium text-slate-100">
              Investors Who Took Action
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Click to read their stories
            </p>
          </div>
        </div>

        {/* Testimonial Collage */}
        <div className={styles.collageContainer}>
          <div className="relative">
            {/* Mobile Navigation */}
            <button
              onClick={scrollToPrev}
              className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0c0e12]/90 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-[#11141a] hover:border-amber-500/30 hover:text-amber-400 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div ref={carouselRef} className={styles.collageGrid}>
              {[...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => {
                const isOpen = openIndex === index
                const isDuplicate = index >= TESTIMONIALS.length
                return (
                  <button
                    key={`${item.reviewer}-${index}`}
                    type="button"
                    className={`${styles.collageItem} ${isOpen ? styles.isOpen : ''} ${isDuplicate ? 'md:hidden' : ''}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-pressed={isOpen}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className={styles.collageImage}
                      sizes="(max-width: 767px) 85vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient background */}
                    <div
                      className={styles.collageGradient}
                      style={{ background: item.gradient }}
                    />
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-lg border border-white/[0.06] hover:border-amber-500/20 transition-colors" />
                    {/* Amount badge */}
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-amber-400/80 font-[family-name:var(--font-outfit)]">
                      {item.amount} Funded
                    </div>

                    {/* Type Badge (Bottom Left of Image) */}
                    <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full px-3 py-1 text-[10px] uppercase tracking-wider text-white/70 font-[family-name:var(--font-outfit)]">
                      {item.type}
                    </div>

                    <div className={styles.collageReview}>
                      <p className="text-slate-200 font-light leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>

                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                          <Image
                            src={item.avatar}
                            alt={item.reviewer}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-slate-100">{item.reviewer}</span>
                          <span className="text-xs text-slate-500">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <button
              onClick={scrollToNext}
              className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0c0e12]/90 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-[#11141a] hover:border-amber-500/30 hover:text-amber-400 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-b from-[#08090c] to-[#050507]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.04)_0%,_transparent_60%)]" />

        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl md:text-3xl font-medium text-slate-100 mb-4 tracking-tight">
            Ready to Access Your Capital?
          </h2>
          <p className="text-slate-500 mb-10 text-sm max-w-md mx-auto leading-relaxed">
            Join hundreds of real estate investors who have scaled their portfolios with our 0% working capital program.
          </p>

          {isUnlocked ? (
            <button
              type="button"
              onClick={handleTypeformOpen}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#08090c] font-medium rounded-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 font-[family-name:var(--font-outfit)]"
            >
              Book Your Free Strategy Call
            </button>
          ) : (
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/5 text-slate-600 border border-white/10 rounded-lg cursor-not-allowed font-[family-name:var(--font-outfit)]"
            >
              <Lock className="w-4 h-4" />
              Watch Video to Unlock
            </button>
          )}

          <p className="text-slate-700 text-xs mt-8 font-[family-name:var(--font-outfit)]">
            Limited spots available. Must meet credit requirements.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/[0.04] bg-[#050507]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="relative w-32 h-10 mx-auto mb-6 opacity-40">
            <Image
              src="/images/logo.png"
              alt="Malohn Capital Group"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-slate-700 text-xs font-[family-name:var(--font-outfit)]">
            © 2026 Malohn Capital Group. All rights reserved.
          </p>
          <p className="text-slate-800 text-[11px] mt-3 max-w-md mx-auto leading-relaxed">
            This is not an offer to lend. All loans subject to credit approval. Terms and conditions apply.
          </p>
        </div>
      </footer>
    </div>
  )
}
