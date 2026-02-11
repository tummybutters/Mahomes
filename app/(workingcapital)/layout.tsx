import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Outfit } from 'next/font/google'
import Script from 'next/script'
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
        <Script id="meta-pixel-workingcapital" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1284052240208847');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1284052240208847&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
