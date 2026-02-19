export const siteConfig = {
  name: "Malohn Capital Group",
  description: "Unlock powerful working capital that lets you scale faster with less money down, no collateral, and fewer income docs for real estate investors and business owners.",
  tagline: "Disciplined capital architecture for long-term portfolio growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://malohncapital.com",
  ogImage: "/images/logo.png",
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/capital-solutions", label: "Capital Solutions" },
  { href: "/transactions", label: "Transactions" },
  { href: "/client-success", label: "Client Success" },
  { href: "/about", label: "About" },
  { href: "/capital-group", label: "Capital Group" },
  { href: "/workingcapital", label: "Schedule a Meeting" },
]

export const stats = [
  { value: "85+", label: "Years Combined Experience" },
  { value: "$500M+", label: "Funded Volume" },
  { value: "6.5%", label: "Current Rate" },
]

export const productCards = [
  {
    title: "Syndicated DSCR Loans",
    description: "Multi-tranche debt financing for real estate investors",
    benefits: [
      "Invest with as little as 10% down",
      "Competitive rates, minimal paperwork",
      "3-4 week closings",
      "Full capital structuring handled for you",
    ],
  },
  {
    title: "Working Capital Support",
    description: "Unsecured funding to scale your portfolio",
    benefits: [
      "Up to $500K unsecured funding",
      "No collateral required",
      "Funding in as fast as 2 weeks",
      "Leverage to scale your portfolio",
    ],
  },
]

export const fundedDeals = [
  {
    id: 1,
    amount: "$425,000",
    downPayment: "10%",
    cashOnCash: "32%",
    location: "Cleveland, OH",
  },
  {
    id: 2,
    amount: "$312,000",
    downPayment: "15%",
    cashOnCash: "28%",
    location: "Detroit, MI",
  },
  {
    id: 3,
    amount: "$275,000",
    downPayment: "10%",
    cashOnCash: "35%",
    location: "Memphis, TN",
  },
  {
    id: 4,
    amount: "$198,000",
    downPayment: "12%",
    cashOnCash: "30%",
    location: "Indianapolis, IN",
  },
  {
    id: 5,
    amount: "$385,000",
    downPayment: "10%",
    cashOnCash: "29%",
    location: "Kansas City, MO",
  },
]

export const mediaLogos = [
  "Forbes",
  "BiggerPockets",
  "Yahoo Finance",
  "NBC",
  "BBB",
]

export const footerLinks = {
  navigation: navLinks,
  contact: {
    phone: "(646) 809-5505",
    email: "support@malohncapital.com",
    address: "48 Wall Street, Suite 1100, New York, NY 10005",
  },
  social: [
    { platform: "Instagram", href: "#" },
    { platform: "Facebook", href: "#" },
    { platform: "LinkedIn", href: "#" },
  ],
}

export const valueCards = [
  {
    icon: "Lightbulb",
    title: "Innovation",
    description: "Creative financing structures others don't offer",
  },
  {
    icon: "DoorOpen",
    title: "Accessibility",
    description: "Low barriers - 10% down, minimal paperwork",
  },
  {
    icon: "Zap",
    title: "Speed",
    description: "3-4 week closings, fast funding decisions",
  },
  {
    icon: "Award",
    title: "Expertise",
    description: "85+ years combined mortgage experience",
  },
]

export const services = {
  dscrLoans: {
    icon: "Building2",
    title: "Syndicated DSCR Loans",
    description: "We structure debt financing that helps real estate investors scale faster. With our multi-tranche DSCR loans, you can invest with as little as 10% down while keeping capital free for new opportunities.",
    benefits: [
      "As little as 10% down payment",
      "No income verification required",
      "30-year fixed terms available",
      "No limit on number of properties",
      "Competitive rates starting at 6.5%",
      "3-4 week closings",
      "Full capital structuring handled by our advisors",
    ],
    requirements: [
      "$50K+ liquid capital",
      "Investment property only (no owner-occupied)",
    ],
  },
  workingCapital: {
    icon: "Wallet",
    title: "Working Capital Support Loan",
    description: "Up to $500,000 in unsecured funding, eliminating lack of capital as a barrier to buying real estate, starting a business, or pursuing new opportunities.",
    benefits: [
      "Up to $500K unsecured funding",
      "No collateral required",
      "Funding available in 2 weeks",
      "Use for real estate, business, or investments",
      "Fast, reliable approval process",
    ],
    requirements: [
      "Minimum 680 credit score",
      "Strong business plan or investment thesis",
    ],
    scarcityLine: "Due to limited capital, funding is reserved for the most motivated individuals with clear vision for growth.",
  },
  insurance: {
    icon: "Shield",
    title: "Real Estate Investment Insurance",
    description: "Comprehensive property and casualty coverage designed for first-time investors, professional investors, REITs, and owners of vacant properties.",
    benefits: [
      "Rental income protection",
      "Liability coverage",
      "Property safeguards",
      "Tailored policies for your portfolio",
      "White-glove service experience",
    ],
    forTypes: [
      "First-time rental investors",
      "Professional investors with multiple properties",
      "REITs and institutional holders",
      "Vacant property owners",
    ],
  },
}
