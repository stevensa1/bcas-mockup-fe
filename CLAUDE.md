# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js 15 website for BCA Syariah (Bank Central Asia Syariah), Indonesia's Islamic banking institution. The site features a premium, Apple-inspired design with smooth animations and an immersive user experience.

## Development Commands

```bash
# Development server (runs on port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **React Version**: 19.0.0

## Architecture

### Color System

The project uses a specific brand color palette defined in `tailwind.config.js`:

- **bca-blue** (`#0077C8`): Primary BCA brand color - used for ~60% of UI elements (main CTAs, navbar buttons, primary actions)
- **bca-syariah-green** (`#00A3AD`): Secondary brand color - used for ~40% of UI elements (accents, secondary actions)
- **bsya-blue** (`#00AAFF`): Exclusive to BSya mobile banking brand elements
- **bsya-yellow** (`#FFE600`): Exclusive to BSya mobile banking brand elements

**Important**: BSya colors (blue/yellow) should ONLY be used for mobile banking-related content, not throughout the general website.

### Layout Structure

The app uses a global layout pattern:
- `app/layout.tsx`: Root layout that wraps all pages with the `Layout` component
- `components/Layout.tsx`: Contains Navbar, Footer, StickyNav, and scroll progress bar
- All pages automatically inherit this layout

### Key Pages

1. **Marketing Pages** (Apple-style, immersive):
   - `/bsya` - BSya mobile banking showcase (dark theme, animated)
   - `/klik-bca-syariah` - Internet banking showcase (light gradient theme)

2. **Product Pages**:
   - `/simpanan` - Savings products
   - `/pembiayaan` - Financing products
   - `/simulasi-kkb` - Car financing calculator with real-time calculation

3. **Content Pages**:
   - `/` - Homepage with hero, features, promos
   - `/articles` - News and education
   - `/about` - About BCA Syariah
   - `/digital` - Digital services overview

### Component Architecture

**Reusable Components** (`/components`):
- `Layout.tsx` - Main layout wrapper with navbar, footer, sticky nav, scroll progress
- `Navbar.tsx` - Responsive navigation with dropdown menus
- `StickyNav.tsx` - Floating right-side navigation (desktop) / FAB menu (mobile)
- `Hero.tsx`, `Features.tsx`, `Products.tsx`, `PromoCarousel.tsx`, `Footer.tsx` - Homepage sections

**Page Components** (`/app/**/page.tsx`):
- Each page is a default export client component
- Use `'use client'` directive for all interactive pages
- Framer Motion is heavily used for scroll animations and transitions

### Sticky Navigation

The `StickyNav` component provides quick access to key actions:
- Positioned on the right edge of viewport (desktop)
- 5 action buttons: BSya Mobile, Branch Locator, KKB Calculator, Internet Banking, Contact
- Mobile version uses floating action button with expandable menu
- Always rendered in `Layout.tsx`, visible on all pages

### Animation Patterns

Standard animation patterns using Framer Motion:

```tsx
// Scroll reveal
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

// Staggered children
transition={{ delay: index * 0.1 }}

// Scroll-based transforms
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
```

### Routing Convention

- Use Next.js App Router file-based routing
- All routes are under `/app` directory
- Pages are named `page.tsx`
- Use TypeScript for all components

### Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Dark backgrounds use `bg-black` or `bg-gray-900`
- Light backgrounds use `bg-white`, `bg-gray-50`, or gradients
- Rounded corners: Use `rounded-3xl`, `rounded-2xl`, `rounded-xl` for modern feel
- Shadows: `shadow-xl`, `shadow-2xl` for depth

### Calculator Features

The KKB simulation page (`/simulasi-kkb`) includes:
- Vehicle condition selector (new/used)
- Dynamic tenor limits based on condition
- Real-time installment calculation
- Minimum down payment validation
- Currency formatting for Indonesian Rupiah
- Sticky results panel on desktop

## Key Conventions

1. **All pages must use `'use client'` directive** for animations and interactivity
2. **Import paths use `@/` alias** for absolute imports from root
3. **Color usage follows 60/40 rule**: 60% BCA Blue, 40% Syariah Green in general UI
4. **BSya branding is isolated** to `/bsya` page and related mobile banking content
5. **Framer Motion is preferred** over CSS animations for consistency
6. **Images use placeholder service** (picsum.photos) - replace with real assets in production

## File Naming

- Components: PascalCase (e.g., `StickyNav.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Utilities/types: camelCase or kebab-case
- All React files use `.tsx` extension
