'use client'

import { useEffect, useMemo } from 'react'
import Link from 'next/link'

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
    <div className="min-h-screen bg-deep text-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-400/80 mb-4">Submission Received</p>
        <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] tracking-tight text-white mb-4">
          Thank You
        </h1>
        <p className="text-slate-300 leading-relaxed mb-8">
          Your strategy call request was submitted successfully. Our team will review your details and follow up shortly.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href="/workingcapital"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm tracking-[0.04em] border border-white/[0.12] bg-white/[0.03] text-slate-200 hover:bg-white/[0.06] transition-colors"
          >
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  )
}
