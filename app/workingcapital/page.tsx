'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Play, ChevronLeft, ChevronRight, Check, Lock, Sparkles } from 'lucide-react'
import styles from './SecretLanding.module.css'

const TESTIMONIALS = [
  {
    gradient: 'linear-gradient(145deg, rgba(22, 25, 34, 0.9) 0%, rgba(12, 14, 18, 0.95) 100%)',
    quote: "Malohn Capital helped me secure $350K in working capital. Closed on my first triplex within 3 weeks.",
    reviewer: "Marcus D.",
    location: "Houston, TX",
    image: "/images/testimonials/marcus-d.png",
    imageAlt: "Portrait of Marcus D., real estate investor from Houston, TX",
    amount: "$350K"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(25, 22, 34, 0.9) 0%, rgba(14, 12, 18, 0.95) 100%)',
    quote: "The team walked me through every step. Got funded faster than I thought possible.",
    reviewer: "Jennifer R.",
    location: "Phoenix, AZ",
    image: "/images/testimonials/jennifer-r.png",
    imageAlt: "Portrait of Jennifer R., real estate investor from Phoenix, AZ",
    amount: "$180K"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(22, 34, 28, 0.9) 0%, rgba(12, 18, 14, 0.95) 100%)',
    quote: "Finally found capital partners who understand real estate investors. Game changer.",
    reviewer: "David K.",
    location: "Atlanta, GA",
    image: "/images/testimonials/david-k.png",
    imageAlt: "Portrait of David K., real estate investor from Atlanta, GA",
    amount: "$425K"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(34, 28, 22, 0.9) 0%, rgba(18, 14, 12, 0.95) 100%)',
    quote: "No collateral needed. No property liens. This is how capital should work.",
    reviewer: "Sarah M.",
    location: "Dallas, TX",
    image: "/images/testimonials/sarah-m.png",
    imageAlt: "Portrait of Sarah M., real estate investor from Dallas, TX",
    amount: "$275K"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(22, 28, 34, 0.9) 0%, rgba(12, 16, 20, 0.95) 100%)',
    quote: "Scaled from 2 to 8 units in under a year using their capital stack strategy.",
    reviewer: "Brandon T.",
    location: "Miami, FL",
    image: "/images/testimonials/brandon-t.png",
    imageAlt: "Portrait of Brandon T., real estate investor from Miami, FL",
    amount: "$500K"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(34, 22, 28, 0.9) 0%, rgba(20, 12, 16, 0.95) 100%)',
    quote: "The 0% working capital changed everything for my portfolio growth.",
    reviewer: "Michelle W.",
    location: "Charlotte, NC",
    image: "/images/testimonials/michelle-w.png",
    imageAlt: "Portrait of Michelle W., real estate investor from Charlotte, NC",
    amount: "$220K"
  },
  {
    gradient: 'linear-gradient(145deg, rgba(28, 34, 22, 0.9) 0%, rgba(16, 20, 12, 0.95) 100%)',
    quote: "Professional team. Fast funding. Exactly what I needed to close my deal.",
    reviewer: "Kevin L.",
    location: "Las Vegas, NV",
    image: "/images/testimonials/kevin-l.png",
    imageAlt: "Portrait of Kevin L., real estate investor from Las Vegas, NV",
    amount: "$150K"
  },
]

const QUIZ_QUESTIONS = [
  {
    number: 1,
    question: "Are you a new or existing real estate investor actively looking for capital to invest?",
    options: [
      { letter: 'A', text: 'Yes' },
      { letter: 'B', text: 'No' },
    ]
  },
  {
    number: 2,
    question: "Do you have at least 4 open credit accounts in good standing?",
    options: [
      { letter: 'A', text: 'Yes' },
      { letter: 'B', text: 'No' },
      { letter: 'C', text: 'Not sure' },
    ]
  },
  {
    number: 3,
    question: "Is your current credit score 680 or above?",
    options: [
      { letter: 'A', text: 'Yes, 680+' },
      { letter: 'B', text: 'Between 650-680' },
      { letter: 'C', text: 'Below 650' },
    ]
  },
  {
    number: 4,
    question: "How much capital are you looking to access?",
    options: [
      { letter: 'A', text: '$50,000 - $150,000' },
      { letter: 'B', text: '$150,000 - $300,000' },
      { letter: 'C', text: '$300,000 - $500,000' },
    ]
  },
  {
    number: 5,
    question: "When are you looking to deploy this capital?",
    options: [
      { letter: 'A', text: 'Within 30 days' },
      { letter: 'B', text: '30-90 days' },
      { letter: 'C', text: '3+ months' },
    ]
  },
]

const VIDEO_UNLOCK_THRESHOLD = 0.35

export default function SecretLandingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [quizComplete, setQuizComplete] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Track video progress
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.duration > 0) {
        const progress = video.currentTime / video.duration
        setVideoProgress(progress)
        if (progress >= VIDEO_UNLOCK_THRESHOLD && !isUnlocked) {
          setIsUnlocked(true)
        }
      }
    }

    const handlePlay = () => setIsVideoPlaying(true)
    const handlePause = () => setIsVideoPlaying(false)
    const handleEnded = () => {
      setIsVideoPlaying(false)
      setIsUnlocked(true)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
    }
  }, [isUnlocked])

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
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

  const handleAnswer = (questionNum: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionNum]: answer }))

    if (questionNum < QUIZ_QUESTIONS.length) {
      setTimeout(() => {
        if (questionNum === QUIZ_QUESTIONS.length) {
          setQuizComplete(true)
        } else {
          setCurrentQuestion(questionNum)
        }
      }, 300)
    } else {
      setQuizComplete(true)
    }
  }

  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100

  return (
    <div className="min-h-screen bg-deep text-slate-50 selection:bg-amber-500/25 relative">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/3 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative py-6 border-b border-white/[0.06] backdrop-blur-sm bg-[#08090c]/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-center">
          <div className="relative w-44 h-16 opacity-90 hover:opacity-100 transition-opacity">
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
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] via-transparent to-transparent" />
        
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Requirements Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-amber-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400/80" />
              <p className="text-sm text-slate-400">
                Requires <span className="text-slate-200 font-medium">680+ Credit</span>, 4+ Accounts & Verified Income
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] mb-6">
              <span className="text-gradient-gold">ACCESS $50,000–$500,000</span>
              <br />
              <span className="text-slate-100">IN 0% WORKING CAPITAL</span>
            </h1>
            <h2 className="font-[family-name:var(--font-outfit)] text-xl md:text-2xl lg:text-3xl text-slate-400 font-light tracking-tight">
              TO START OR SCALE YOUR REAL ESTATE BUSINESS
              <br />
              <span className="border-b-2 border-amber-500/40 pb-1">IN LESS THAN 14 DAYS</span>
            </h2>
          </div>

          {/* Video Section */}
          <div className="max-w-3xl mx-auto">
            {/* Video label */}
            <div className="bg-white/[0.03] border border-white/[0.08] text-slate-300 text-center py-3 px-4 text-xs font-medium tracking-wide flex items-center justify-center gap-2 rounded-lg">
              <span className="text-base">🔊</span>
              WATCH THIS VIDEO BELOW TO DISCOVER HOW TO SCALE YOUR REAL ESTATE BUSINESS
            </div>
            <div className="mt-4" />

            <div className="relative aspect-video bg-gradient-to-br from-[#0c0e12] to-[#08090c] rounded-lg border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/50">
              {/* Video element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                preload="metadata"
              >
                <source src="/videos/capital-intro.mp4" type="video/mp4" />
              </video>

              {/* Play overlay */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-[#08090c]/90 flex flex-col items-center justify-center backdrop-blur-sm">
                  <button
                    onClick={handlePlayVideo}
                    className="group relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-[#08090c] ml-1" fill="currentColor" />
                    <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-ping opacity-20" />
                  </button>
                  <p className="mt-6 text-slate-400 font-[family-name:var(--font-outfit)] text-sm tracking-wide">Click to watch presentation</p>
                </div>
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

          {/* Subheadline */}
          <p className="text-center text-slate-500 max-w-2xl mx-auto mt-12 text-base leading-relaxed">
            Our Real Estate capital stack program helps you unlock fast, flexible capital for real estate use. No collateral. No property liens. No experience needed.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="relative py-24 bg-gradient-to-b from-[#0c0e12] to-[#08090c]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.03)_0%,_transparent_70%)]" />
        
        <div className="relative max-w-xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-amber-400/60 mb-4 font-[family-name:var(--font-outfit)]">
              Get Started
            </span>
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl md:text-4xl font-medium text-slate-100 tracking-tight">
              BOOK A CALL & FUND YOUR FUTURE
            </h2>
          </div>

          {/* Locked State */}
          {!isUnlocked ? (
            <div className="glass-premium rounded-xl p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-amber-400/60" />
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-slate-200 mb-2">
                Watch the Video to Continue
              </h3>
              <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">
                Please watch at least 35% of the presentation to unlock your application.
              </p>
              <div className="max-w-xs mx-auto">
                <div className="flex justify-between text-xs text-slate-600 mb-2 font-[family-name:var(--font-outfit)]">
                  <span>Progress</span>
                  <span>{Math.round(videoProgress * 100)}% / 35%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400/50 to-amber-500/50 rounded-full transition-all duration-300"
                    style={{ width: `${(videoProgress / VIDEO_UNLOCK_THRESHOLD) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-premium rounded-xl p-8 md:p-10">
              {/* Progress Bar */}
              <div className="h-0.5 bg-white/5 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${quizComplete ? 100 : progress}%` }}
                />
              </div>

              {/* Logo badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-amber-400 font-semibold text-lg">M</span>
                </div>
                <span className="text-xs text-slate-600 uppercase tracking-wider font-[family-name:var(--font-outfit)]">Malohn Capital</span>
              </div>

              {!quizComplete ? (
                <div className="space-y-6">
                  {/* Current Question */}
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-medium text-sm font-[family-name:var(--font-outfit)]">
                      {currentQuestion + 1}
                    </span>
                    <p className="text-slate-300 pt-1 leading-relaxed font-light">
                      {QUIZ_QUESTIONS[currentQuestion].question}
                      <span className="text-amber-400/80 ml-1">*</span>
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-3 pl-12">
                    {QUIZ_QUESTIONS[currentQuestion].options.map((option) => (
                      <button
                        key={option.letter}
                        onClick={() => handleAnswer(currentQuestion + 1, option.letter)}
                        className={`group flex items-center gap-4 w-full px-5 py-4 rounded-lg border text-left transition-all duration-200 ${
                          answers[currentQuestion + 1] === option.letter 
                            ? 'bg-amber-500/10 border-amber-500/30' 
                            : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-medium transition-colors ${
                          answers[currentQuestion + 1] === option.letter
                            ? 'bg-amber-500/20 text-amber-400'
                            : 'bg-white/5 text-slate-500 group-hover:text-slate-400'
                        }`}>
                          {option.letter}
                        </span>
                        <span className={`text-sm ${
                          answers[currentQuestion + 1] === option.letter ? 'text-slate-200' : 'text-slate-400'
                        }`}>
                          {option.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Quiz Complete */
                <div className="text-center py-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                    <Check className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-slate-100 mb-3">
                    You May Qualify
                  </h3>
                  <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                    Based on your responses, you could be eligible for up to $500,000 in working capital.
                  </p>
                  <a
                    href="/schedule"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#08090c] font-medium text-sm rounded-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 font-[family-name:var(--font-outfit)]"
                  >
                    Book Your Strategy Call
                  </a>
                </div>
              )}
            </div>
          )}
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
                    <div className={styles.collageReview}>
                      <p className="text-slate-200 font-light leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                      <div className={styles.collageReviewer}>
                        {item.reviewer} — {item.location}
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
            <a
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#08090c] font-medium rounded-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 font-[family-name:var(--font-outfit)]"
            >
              Book Your Free Strategy Call
            </a>
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
