# Hypenova Landing Page

A modern, visually stunning landing page for Hypenova - a decentralized stablecoin protocol built on Hyperliquid's HyperEVM.

## Overview

Hypenova is a pooled-collateral stablecoin protocol featuring:

- **hzUSD** - A $1-pegged stablecoin with no liquidations
- **kHYPE** - Staking token for yield generation and volatility absorption
- **Capital Efficiency** - Shared risk pooling and automated yield generation
- **Liquidation-Free** - Pooled debt model eliminates individual liquidation risk

## Tech Stack

### Core Framework

- **Next.js 14.2** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.1** - Utility-first CSS framework

### UI Components & Design

- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **@paper-design/shaders-react** - WebGL shader backgrounds
- **Lucide React** - Icon library

### Forms & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Libraries

- **next-themes** - Dark mode support
- **sonner** - Toast notifications
- **recharts** - Data visualization
- **date-fns** - Date manipulation
- **class-variance-authority** - Component variants
- **tailwind-merge** - Tailwind class merging utility

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
# Start development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Create production build
pnpm build
# or
npm run build

# Start production server
pnpm start
# or
npm start
```

### Linting

```bash
# Run ESLint
pnpm lint
# or
npm run lint
```

## Project Structure

```
hypezion-lp/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── header.tsx        # Navigation header
│   ├── hero-content.tsx  # Hero section
│   ├── shader-background.tsx  # WebGL background
│   └── theme-provider.tsx     # Theme context
├── lib/                   # Utility functions
├── public/               # Static assets
│   └── assets/images/    # Image files
├── styles/               # Global styles
└── components.json       # shadcn/ui config
```

## Features

### Visual Design

- WebGL shader-powered animated background
- Glassmorphism UI elements
- Smooth hover animations and transitions
- Responsive design for all devices

### Core Sections

- **Hero** - Protocol introduction with key value propositions
- **Features** - Three core benefits (Stable Value, Liquidation-Free, Capital Efficient)
- **Technology** - Built on Hyperliquid with Kinetiq liquidity
- **Footer** - Protocol links, resources, and community

### Interactive Elements

- Disabled "Enter App" button (coming soon)
- "Explore Docs" navigation
- Hover effects on feature cards
- Social media links

## Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```bash
# Add your environment variables here
NEXT_PUBLIC_API_URL=
```

### Tailwind Configuration

Tailwind CSS 4.1 is configured via `postcss.config.mjs` and uses the new CSS-first configuration approach.

### Component Library

Components follow the shadcn/ui pattern. Configuration is in `components.json`:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy

### Other Platforms

The application can be deployed to any platform supporting Next.js:

- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted

Refer to [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

## Performance

- Analytics via Vercel Analytics
- Optimized bundle size with code splitting
- Server Components for improved performance
- Image optimization with Next.js Image component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

WebGL support required for shader backgrounds.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

© 2025 Hypenova – All rights reserved.

## Links

- **Protocol**: [Mint hzUSD](#) | [Stake kHYPE](#)
- **Resources**: [Documentation](#) | [Security](#)
- **Community**: [X (Twitter)](#)

## Acknowledgments

Built on [Hyperliquid](https://hyperliquid.xyz/)
Liquidity via Kinetiq
