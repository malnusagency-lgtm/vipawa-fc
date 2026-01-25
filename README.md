# Vipawa Ladies FC - Next.js 14 Premium Version

This is a high-performance, modern migration of the Vipawa Ladies FC website, built with **Next.js 14 (App Router)**.

## 🚀 Performance Optimizations

### 1. Image Optimization (`next/image`)
- All <img> tags have been replaced with the `next/image` component.
- **Priority Loading**: Hero images are set to `priority` to ensure the fastest possible Largest Contentful Paint (LCP).
- **Responsive Sizing**: Explicit `sizes` attributes ensure the browser downloads the smallest possible image for the device's viewport.
- **Lazy Loading**: Non-critical images are lazy-loaded by default.

### 2. Smooth Scrolling (Lenis)
- Integrated **Lenis** for ultra-smooth scrolling interactions, providing a premium, fluid feel throughout the platform.
- Wrapped in a global `LenisProvider` logic to maintain consistent behavior across routes.

### 3. High-End Animations (GSAP + ScrollTrigger)
- **Scroll Reveals**: Used **GSAP ScrollTrigger** for complex, scroll-based reveal animations.
- **Staggered Entrance**: Elements slide and fade in with staggered timing for a choreographed visual experience.
- **Efficiency**: GSAP animations are initialized only when needed and cleaned up on component unmount using `useLayoutEffect`.

### 4. Code Splitting & Dynamic Imports
- Leveraged Next.js App Router for automatic route-based code splitting.
- Heavy interactive components are moved to Client Components, while content-heavy sections remain as Server Components for faster TTI (Time to Interactive).

### 5. Font Optimization (`next/font`)
- Utilizes `next/font/google` to optimize **Outfit** and **Inter** fonts.
- Zero Layout Shift: Fonts are self-hosted and optimized to prevent flash of unstyled text (FOUT).

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP, Framer Motion
- **Icons**: Lucide React
- **Scrolling**: Lenis

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## 🌐 Deployment
Optimized for hosting on **Vercel**. Simply push to a repository and connect to Vercel for automatic CI/CD and edge-optimized delivery.
