'use client'

import { useEffect, useRef, useState } from 'react'

const TARGETS = {
  years: 39,
  volume: 351,
  rate: 5.99,
}

const DURATION_MS = 2200

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export default function StatsStrip() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [counts, setCounts] = useState({ years: 0, volume: 0, rate: 0 })
  const hasCountedRef = useRef(false)
  const reduceMotionRef = useRef(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduceMotionRef.current = media.matches

    const handler = () => {
      reduceMotionRef.current = media.matches
    }

    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasCountedRef.current) return
        hasCountedRef.current = true

        if (reduceMotionRef.current) {
          setCounts({ ...TARGETS })
          observer.disconnect()
          return
        }

        const start = performance.now()
        const animate = (time: number) => {
          const progress = Math.min((time - start) / DURATION_MS, 1)
          const eased = easeOutCubic(progress)

          setCounts({
            years: Math.floor(TARGETS.years * eased),
            volume: Math.floor(TARGETS.volume * eased),
            rate: Number((TARGETS.rate * eased).toFixed(2)),
          })

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      { rootMargin: '-20% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="border-b border-white/5 bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div ref={statsRef} className="grid grid-cols-3 gap-8">
          {[
            { label: 'Founded', value: counts.years, suffix: ' Years Ago' },
            { label: 'Funded Vol', value: '$' + counts.volume, suffix: 'M+' },
            { label: 'Current Rate', value: counts.rate.toFixed(2), suffix: '%' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col border-l border-white/10 pl-6 first:border-l-0 first:pl-0">
              <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">{stat.label}</p>
              <p className="text-3xl md:text-5xl font-serif text-white">
                {stat.value}
                <span className="text-white/30 text-2xl">{stat.suffix}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
