# CHECKFIRST - AI-Powered Third-Party Risk Management

A professional marketing website for CHECKFIRST, showcasing our AI-powered TPRM solution.

## 🚀 Features

- **Modern Design**: Built with Next.js 16 and Tailwind CSS v4
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags and semantic HTML for better search rankings
- **Fast Performance**: Server-side rendering and optimized assets
- **Type-Safe**: Written in TypeScript for better developer experience

## 📦 Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Google Material Symbols
- **Deployment Ready**: Static export for easy deployment

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server on port 9000:

```bash
npm run dev
```

Open [http://localhost:9000](http://localhost:9000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Production

Run the production server:

```bash
npm start
```

## 📄 Pages

- **Homepage** (`/`): Complete marketing site with all sections
  - Hero section
  - Features showcase
  - Services overview
  - Pricing tiers
  - Contact form

- **Blog** (`/blog`): Blog listing page with articles about TPRM and AI security

## 🎨 Design System

- **Primary Color**: `#135bec` (Blue)
- **Background Dark**: `#101622`
- **Typography**: Space Grotesk font family
- **Components**: Reusable React components in `/components`

## 📁 Project Structure

```
checkfirst-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── blog/
│       └── page.tsx         # Blog page
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/                  # Static assets
```

## 🚀 Deployment

This site can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Digital Ocean**: Deploy as a static site
- **Any static hosting**: Use `npm run build` and deploy the `out` folder

### Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

## 🔧 Configuration

- **Port**: Configure in `package.json` scripts (default: 9000)
- **Tailwind**: Customize in `tailwind.config.js`
- **Next.js**: Configure in `next.config.js`

## 📝 License

© 2024 CHECKFIRST. All Rights Reserved.

## 🤖 Built with Claude Code

This website was generated using Claude Code Directory Builder - an automated system for creating complete directory websites with AI.
