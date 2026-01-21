import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { siteConfig, footerLinks } from '@/lib/constants'

export default function Footer() {
  const socialIcons = {
    Instagram: Instagram,
    Facebook: Facebook,
    LinkedIn: Linkedin,
  }

  return (
    <footer
      className="relative"
      style={{
        background: 'linear-gradient(180deg, #0a111b 0%, #0a0f15 40%, #07090d 70%, #050608 100%)',
      }}
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-xl mb-4 text-white">{siteConfig.name}</h3>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              A hand-holding creative finance solution for real estate investors.
              Building wealth through cash-flowing properties.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-5 font-medium">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-5 font-medium">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>{footerLinks.contact.phone}</li>
              <li>{footerLinks.contact.email}</li>
              <li>{footerLinks.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-5">
            {footerLinks.social.map((social) => {
              const Icon = socialIcons[social.platform as keyof typeof socialIcons]
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label={social.platform}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-white/40 text-center max-w-3xl mx-auto leading-relaxed">
          This website is for informational purposes only. All investments involve risk.
          Past performance does not guarantee future results. Consult with a financial
          advisor before making investment decisions.
        </p>
      </div>
    </footer>
  )
}
