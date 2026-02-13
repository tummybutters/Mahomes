'use client'

import { useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export default function WorkingCapitalThankYouPage() {
  const { cameFromTypeform, submissionToken } = useMemo(() => {
    if (typeof window === 'undefined') {
      return { cameFromTypeform: false, submissionToken: 'unknown' }
    }
    const url = new URL(window.location.href)
    const hasSourceParam = url.searchParams.get('src') === 'typeform'
    const hasSessionFlag = window.sessionStorage.getItem('wc_typeform_submitted') === '1'
    const token = url.searchParams.get('submission_token') ?? 'unknown'
    return {
      cameFromTypeform: hasSourceParam || hasSessionFlag,
      submissionToken: token,
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.fbq !== 'function' || !cameFromTypeform) return

    const dedupeKey = `wc_thank_you_tracked_${submissionToken}`
    const hasTracked = window.sessionStorage.getItem(dedupeKey) === '1'
    if (hasTracked) return

    const eventPayload = {
      content_name: 'Working Capital Strategy Call',
      page_path: '/workingcapital/thank-you',
    }

    window.fbq('track', 'Lead', eventPayload)
    window.fbq('track', 'Schedule', eventPayload)

    window.sessionStorage.setItem(dedupeKey, '1')
    window.sessionStorage.removeItem('wc_typeform_submitted')
  }, [cameFromTypeform, submissionToken])

  return (
    <div className="min-h-screen bg-deep text-slate-50 selection:bg-amber-500/25 relative flex items-center justify-center px-4 py-12">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/3 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-xl rounded-xl border border-white/[0.08] bg-[#0b0d11]/80 backdrop-blur-sm p-8 md:p-10 text-center shadow-2xl shadow-black/40 relative">
        <div className="relative w-32 h-10 md:w-36 md:h-12 mx-auto mb-6 opacity-90">
          <Image
            src="/images/logo.png"
            alt="Malohn Capital Group"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-amber-400/80 mb-3 font-[family-name:var(--font-outfit)]">
          Submission Received
        </p>
        <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] tracking-tight text-slate-100 mb-4">
          Thank You
        </h1>
        <p className="text-slate-300 leading-relaxed mb-8 text-sm md:text-base max-w-md mx-auto">
          Your strategy call request was submitted successfully. Our team will review your details and follow up shortly.
        </p>

        <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mb-8" />

        <div className="flex items-center justify-center">
          <Link href="/workingcapital" className="btn-primary inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm tracking-[0.04em] font-[family-name:var(--font-outfit)]">
            Back to Landing Page
          </Link>
        </div>

        <p className="text-slate-500 text-xs mt-6 font-[family-name:var(--font-outfit)]">
          If you need immediate assistance, reply to your confirmation email.
        </p>
      </div>
    </div>
  )
}
