'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import ActionButton from '@/components/ActionButton'
import { TransactionCard } from '@/components/ui/TransactionCard'
import { Percent, Activity, Layers, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const transactions = [
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Single-family portfolio acquisition',
    location: 'Columbus, OH',
    date: '10/12/2025',
    amount: '$3.2M',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop', // House
    metrics: [
      { label: 'LTV', value: '75%', icon: <Percent /> },
      { label: 'Rate', value: '6.875%', icon: <Activity /> },
      { label: 'Cash Flow', value: '$12k/mo', icon: <DollarSign /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Bridge liquidity for renovation',
    location: 'Tampa, FL',
    date: '09/28/2025',
    amount: '$420,000',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop', // Modern Home
    metrics: [
      { label: 'Term', value: '12 Mo', icon: <Calendar /> },
      { label: 'LTV', value: 'N/A', icon: <Percent /> },
      { label: 'Draw', value: '48 Hrs', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Small multifamily refinance',
    location: 'Phoenix, AZ',
    date: '08/15/2025',
    amount: '$1.1M',
    imageUrl: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop', // Apt Building
    metrics: [
      { label: 'LTV', value: '70%', icon: <Percent /> },
      { label: 'DSCR', value: '1.25x', icon: <TrendingUp /> },
      { label: 'Cash Out', value: '$340k', icon: <DollarSign /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Acquisition reserves',
    location: 'Cleveland, OH',
    date: '07/10/2025',
    amount: '$260,000',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2670&auto=format&fit=crop', // Brick House
    metrics: [
      { label: 'Term', value: '18 Mo', icon: <Calendar /> },
      { label: 'Usage', value: 'Rehab', icon: <Layers /> },
      { label: 'Funding', value: '5 Days', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Stabilized rental portfolio',
    location: 'Nashville, TN',
    date: '06/22/2025',
    amount: '$5.8M',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop', // Luxury House
    metrics: [
      { label: 'LTV', value: '80%', icon: <Percent /> },
      { label: 'Rate', value: '6.5%', icon: <Activity /> },
      { label: 'Units', value: '42', icon: <Layers /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Liquidity buffer',
    location: 'Dallas, TX',
    date: '05/30/2025',
    amount: '$350,000',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop', // Modern Villa
    metrics: [
      { label: 'Term', value: '24 Mo', icon: <Calendar /> },
      { label: 'Type', value: 'Unsecured', icon: <Layers /> },
      { label: 'Rate', value: 'Fixed', icon: <Activity /> },
    ]
  },
  // NEW TRANSACTIONS START HERE
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Turnkey rental acquisition',
    location: 'Indianapolis, IN',
    date: '11/15/2025',
    amount: '$185,000',
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop', // Midwest Home 1
    metrics: [
      { label: 'LTV', value: '80%', icon: <Percent /> },
      { label: 'Rate', value: '7.125%', icon: <Activity /> },
      { label: 'Cash Flow', value: '$850/mo', icon: <DollarSign /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Duplex portfolio refinance',
    location: 'Kansas City, MO',
    date: '10/30/2025',
    amount: '$320,000',
    imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2670&auto=format&fit=crop', // Real Midwest Duplex/House
    metrics: [
      { label: 'LTV', value: '75%', icon: <Percent /> },
      { label: 'DSCR', value: '1.40x', icon: <TrendingUp /> },
      { label: 'Units', value: '2', icon: <Layers /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Fix & flip renovation',
    location: 'Detroit, MI',
    date: '09/20/2025',
    amount: '$150,000',
    imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2670&auto=format&fit=crop', // Brick/Renovation
    metrics: [
      { label: 'Term', value: '9 Mo', icon: <Calendar /> },
      { label: 'Usage', value: 'Rehab', icon: <Layers /> },
      { label: 'Funding', value: '3 Days', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: '5-Unit portfolio loan',
    location: 'Columbus, OH',
    date: '08/14/2025',
    amount: '$650,000',
    imageUrl: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2670&auto=format&fit=crop', // Apartment Building
    metrics: [
      { label: 'LTV', value: '70%', icon: <Percent /> },
      { label: 'Rate', value: '7.25%', icon: <Activity /> },
      { label: 'Units', value: '5', icon: <Layers /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'BRRRR refinance',
    location: 'Milwaukee, WI',
    date: '07/11/2025',
    amount: '$210,000',
    imageUrl: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2670&auto=format&fit=crop', // Real Midwest Home
    metrics: [
      { label: 'LTV', value: '75%', icon: <Percent /> },
      { label: 'Cash Out', value: '$45k', icon: <DollarSign /> },
      { label: 'Rate', value: '7.5%', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Garden style apartment multifamily',
    location: 'Atlanta, GA',
    date: '06/05/2025',
    amount: '$2.4M',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop', // Apartment
    metrics: [
      { label: 'LTV', value: '65%', icon: <Percent /> },
      { label: 'DSCR', value: '1.30x', icon: <TrendingUp /> },
      { label: 'Units', value: '24', icon: <Layers /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Bridge to perm liquidity',
    location: 'Miami, FL',
    date: '05/22/2025',
    amount: '$900,000',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop', // Modern Miami Home
    metrics: [
      { label: 'Term', value: '6 Mo', icon: <Calendar /> },
      { label: 'Type', value: 'Unsecured', icon: <Layers /> },
      { label: 'Speed', value: '24 Hrs', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Luxury Airbnb refinance',
    location: 'Austin, TX',
    date: '04/18/2025',
    amount: '$1.1M',
    imageUrl: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2670&auto=format&fit=crop', // Luxury
    metrics: [
      { label: 'LTV', value: '70%', icon: <Percent /> },
      { label: 'Type', value: 'Short Term', icon: <Layers /> },
      { label: 'Rate', value: '6.99%', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Value-add multifamily acquisition',
    location: 'Charlotte, NC',
    date: '03/30/2025',
    amount: '$3.5M',
    imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2670&auto=format&fit=crop', // City/Building
    metrics: [
      { label: 'LTV', value: '75%', icon: <Percent /> },
      { label: 'Capex', value: '$450k', icon: <DollarSign /> },
      { label: 'Units', value: '48', icon: <Layers /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Gap funding for construction',
    location: 'Denver, CO',
    date: '02/10/2025',
    amount: '$450,000',
    imageUrl: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=2670&auto=format&fit=crop', // Construction
    metrics: [
      { label: 'Term', value: '12 Mo', icon: <Calendar /> },
      { label: 'Position', value: '2nd', icon: <Layers /> },
      { label: 'Rate', value: '10%', icon: <Activity /> },
    ]
  },
]

const filters = ['All', 'DSCR', 'Working Capital', 'Multi-Family'] as const

type Filter = typeof filters[number]

type Transaction = (typeof transactions)[number] & {
  id: string
}

type RenderItem = Transaction & {
  state: 'enter' | 'stable'
}

type ExitItem = {
  item: Transaction
  rect: { top: number; left: number; width: number; height: number }
}

const DURATION_MS = 300

const normalizeId = (title: string, date: string) =>
  `${title}-${date}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const allItems: Transaction[] = transactions.map((item) => ({
  ...item,
  id: normalizeId(item.title, item.date),
}))

const filterTransactions = (filter: Filter) => {
  if (filter === 'All') return allItems
  if (filter === 'Multi-Family') {
    return allItems.filter((t) => t.title.toLowerCase().includes('multifamily') || t.title.toLowerCase().includes('portfolio'))
  }
  return allItems.filter((t) => t.category === filter)
}

export default function TransactionsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [items, setItems] = useState<RenderItem[]>(() =>
    filterTransactions('All').map((item) => ({ ...item, state: 'enter' }))
  )
  const [exitItems, setExitItems] = useState<ExitItem[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const prevRectsRef = useRef<Map<string, DOMRect>>(new Map())
  const enterTimeoutRef = useRef<number | null>(null)
  const exitTimeoutRef = useRef<number | null>(null)

  const filteredCount = items.length

  useEffect(() => {
    if (enterTimeoutRef.current) {
      window.clearTimeout(enterTimeoutRef.current)
    }
    enterTimeoutRef.current = window.setTimeout(() => {
      setItems((prev) => prev.map((item) => (item.state === 'enter' ? { ...item, state: 'stable' } : item)))
    }, DURATION_MS)

    return () => {
      if (enterTimeoutRef.current) window.clearTimeout(enterTimeoutRef.current)
    }
  }, [])

  useLayoutEffect(() => {
    const prevRects = prevRectsRef.current
    if (!prevRects.size) return

    const animations: Animation[] = []
    itemRefs.current.forEach((el, id) => {
      const prevRect = prevRects.get(id)
      if (!prevRect) return

      const nextRect = el.getBoundingClientRect()
      const deltaX = prevRect.left - nextRect.left
      const deltaY = prevRect.top - nextRect.top

      if (deltaX || deltaY) {
        const animation = el.animate(
          [
            { transform: `translate(${deltaX}px, ${deltaY}px)` },
            { transform: 'translate(0, 0)' },
          ],
          {
            duration: DURATION_MS,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }
        )
        animations.push(animation)
      }
    })

    prevRectsRef.current = new Map()

    return () => animations.forEach((animation) => animation.cancel())
  }, [items])

  const handleFilterChange = (filter: Filter) => {
    if (filter === activeFilter) return

    const nextItems = filterTransactions(filter)
    const nextIds = new Set(nextItems.map((item) => item.id))
    const currentIds = new Set(items.map((item) => item.id))

    const prevRects = new Map<string, DOMRect>()
    itemRefs.current.forEach((el, id) => {
      prevRects.set(id, el.getBoundingClientRect())
    })
    prevRectsRef.current = prevRects

    const exiting = items.filter((item) => !nextIds.has(item.id))

    if (containerRef.current && exiting.length) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const overlays = exiting
        .map((item) => {
          const rect = prevRects.get(item.id)
          if (!rect) return null
          return {
            item,
            rect: {
              top: rect.top - containerRect.top,
              left: rect.left - containerRect.left,
              width: rect.width,
              height: rect.height,
            },
          }
        })
        .filter(Boolean) as ExitItem[]

      setExitItems(overlays)

      if (exitTimeoutRef.current) {
        window.clearTimeout(exitTimeoutRef.current)
      }
      exitTimeoutRef.current = window.setTimeout(() => setExitItems([]), DURATION_MS)
    } else {
      setExitItems([])
    }

    setItems(
      nextItems.map((item) => ({
        ...item,
        state: currentIds.has(item.id) ? 'stable' : 'enter',
      }))
    )
    setActiveFilter(filter)

    if (enterTimeoutRef.current) {
      window.clearTimeout(enterTimeoutRef.current)
    }
    enterTimeoutRef.current = window.setTimeout(() => {
      setItems((prev) => prev.map((item) => (item.state === 'enter' ? { ...item, state: 'stable' } : item)))
    }, DURATION_MS)
  }

  useEffect(() => {
    return () => {
      if (enterTimeoutRef.current) window.clearTimeout(enterTimeoutRef.current)
      if (exitTimeoutRef.current) window.clearTimeout(exitTimeoutRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#07080b] selection:bg-white/15">
      {/* Hero Header - Condensed */}
      <section className="pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-4 animate-fade-up">
              Munoz Ghezlan Transactions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.9] animate-fade-up delay-100">
              Capital <span className="text-accent-warm italic">Deployed.</span>
            </h1>
          </div>

          {/* Legacy Metrics (Optional - kept small) */}
          <div className="flex gap-8 text-white/60 animate-fade-up delay-200">
            <div>
              <p className="text-[10px] uppercase tracking-wider opacity-50">Volume</p>
              <p className="text-xl font-serif text-white">$351M+</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider opacity-50">Deals</p>
              <p className="text-xl font-serif text-white">420+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-[#07080b]/90 backdrop-blur-md border-b border-white/5 px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Filter Toggle */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-none w-full sm:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={cn(
                  'px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-300 flex-1 sm:flex-none text-center',
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Result Count */}
          <p className="text-xs text-white/40 font-mono hidden sm:block">
            Showing {filteredCount} Results
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div ref={containerRef} className="tx-grid">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((t) => (
                <div
                  key={t.id}
                  ref={(el) => {
                    if (el) {
                      itemRefs.current.set(t.id, el)
                    } else {
                      itemRefs.current.delete(t.id)
                    }
                  }}
                  className="tx-item"
                >
                  <div className={t.state === 'enter' ? 'tx-enter' : undefined}>
                    <TransactionCard
                      type={t.type}
                      title={t.title}
                      amount={t.amount}
                      location={t.location}
                      date={t.date}
                      metrics={t.metrics}
                      imageUrl={t.imageUrl}
                    />
                  </div>
                </div>
              ))}
            </div>

            {exitItems.map((exit) => (
              <div
                key={exit.item.id}
                className="absolute tx-item pointer-events-none z-10"
                style={{
                  top: `${exit.rect.top}px`,
                  left: `${exit.rect.left}px`,
                  width: `${exit.rect.width}px`,
                  height: `${exit.rect.height}px`,
                }}
              >
                <div className="tx-exit">
                  <TransactionCard
                    type={exit.item.type}
                    title={exit.item.title}
                    amount={exit.item.amount}
                    location={exit.item.location}
                    date={exit.item.date}
                    metrics={exit.item.metrics}
                    imageUrl={exit.item.imageUrl}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer - Simplified */}
      <section className="py-24 border-t border-white/5 px-6 bg-[#050608]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Start your next transaction.</h2>
          <div className="flex justify-center gap-4">
            <ActionButton>Submit a Deal</ActionButton>
            <Link href="/capital-solutions" className="px-6 py-3 border border-white/20 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
