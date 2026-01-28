'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const deals = [
  { amount: '$425,000', location: 'Cleveland, OH', label: 'Purchase' },
  { amount: '$312,000', location: 'Detroit, MI', label: 'Refinance' },
  { amount: '$1.2M', location: 'Memphis, TN', label: 'Portfolio' },
  { amount: '$198,000', location: 'Indianapolis, IN', label: 'Bridge' },
  { amount: '$385,000', location: 'Kansas City, MO', label: 'Purchase' },
  { amount: '$342,000', location: 'Columbus, OH', label: 'Working Capital' },
]

const SPEED_PX_PER_SEC = 33

export default function AutoScrollCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    let rafId = 0
    let lastTime = performance.now()
    let paused = false

    const step = (time: number) => {
      if (!container) return
      if (!paused) {
        const delta = time - lastTime
        lastTime = time
        const distance = (delta / 1000) * SPEED_PX_PER_SEC
        const maxScroll = container.scrollWidth - container.clientWidth
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += distance
        }
      } else {
        lastTime = time
      }
      rafId = requestAnimationFrame(step)
    }

    const handleEnter = () => {
      paused = true
    }

    const handleLeave = () => {
      paused = false
      lastTime = performance.now()
    }

    rafId = requestAnimationFrame(step)
    container.addEventListener('mouseenter', handleEnter)
    container.addEventListener('mouseleave', handleLeave)

    return () => {
      cancelAnimationFrame(rafId)
      container.removeEventListener('mouseenter', handleEnter)
      container.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      ref={carouselRef}
      className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-8"
    >
      {deals.map((deal) => (
        <div
          key={`${deal.amount}-${deal.location}`}
          className="min-w-[300px] bg-[#0a0f15] border border-white/10 p-6 hover:border-accent-warm/50 transition-colors group"
        >
          <div className="flex justify-between items-start mb-8">
            <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] uppercase text-white/50 tracking-wider group-hover:bg-accent-warm/10 group-hover:text-accent-warm transition-colors">
              {deal.label}
            </span>
            <div className="w-2 h-2 rounded-full bg-accent-warm opacity-50" />
          </div>
          <p className="text-2xl font-serif text-white mb-1">{deal.amount}</p>
          <p className="text-xs text-white/50 uppercase tracking-widest">{deal.location}</p>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
            <span className="text-xs text-white/30">Status</span>
            <span className="text-xs text-white font-medium flex items-center gap-2">
              Closed <ArrowRight size={12} className="text-accent-warm" />
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
