import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { siteConfig } from '@/lib/constants'
import { metadataBase, sharedOpenGraph, sharedTwitter } from '@/lib/seo'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
})

const FAVICON_VERSION = '20260308'

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: `/site.webmanifest?v=${FAVICON_VERSION}`,
  icons: {
    icon: [
      { url: `/favicon.ico?v=${FAVICON_VERSION}` },
      { url: `/favicon-16x16.png?v=${FAVICON_VERSION}`, sizes: '16x16', type: 'image/png' },
      { url: `/favicon-32x32.png?v=${FAVICON_VERSION}`, sizes: '32x32', type: 'image/png' },
      { url: `/favicon-48x48.png?v=${FAVICON_VERSION}`, sizes: '48x48', type: 'image/png' },
    ],
    shortcut: `/favicon.ico?v=${FAVICON_VERSION}`,
    apple: [{ url: `/apple-touch-icon.png?v=${FAVICON_VERSION}`, sizes: '180x180', type: 'image/png' }],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    ...sharedOpenGraph,
    title: 'DSCR Loans & Working Capital for Investors',
    description: siteConfig.description,
    url: '/',
  },
  twitter: {
    ...sharedTwitter,
    title: 'DSCR Loans & Working Capital for Investors',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-bg-primary text-text-primary min-h-screen`}>
        <Script id="meta-pixel-main" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1279587374031641');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1279587374031641&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
