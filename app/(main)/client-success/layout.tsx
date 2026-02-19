import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Client Success',
  description: 'Investor outcomes, capital deployment metrics, and case studies from real estate investors scaling with strategic working capital.',
  path: '/client-success',
})

export default function ClientSuccessLayout({ children }: { children: React.ReactNode }) {
  return children
}
