import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Outfit } from 'next/font/google'
import '../globals.css'
import './secret-landing-globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Exclusive Capital Access | Malohn Capital Group',
  description: 'Access $50,000-$500,000 in 0% working capital for your real estate business.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function SecretLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${outfit.variable} bg-deep text-slate-50 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
