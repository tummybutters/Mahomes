import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark, Wall Street-inspired palette
        'bg-primary': '#0A0B0D',      // Near black
        'bg-secondary': '#0F1217',    // Charcoal
        'bg-tertiary': '#141A22',     // Deep slate
        'bg-card': '#0F151F',         // Navy-black card

        // Accent colors
        'accent-primary': '#0B1F3A',  // Deep navy
        'accent-light': '#163A63',    // Lighter navy
        'accent-warm': '#B08A3C',     // Minimal gold

        // Text colors for dark backgrounds
        'text-primary': '#F5F7FA',    // Off-white
        'text-secondary': '#D6DDE6',  // Soft gray
        'text-muted': '#9AA6B2',      // Muted gray
        'text-light': '#6F7B88',      // Cool gray
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Times New Roman', 'serif'],
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
    },
  },
  plugins: [],
}

export default config
