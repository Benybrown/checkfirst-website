# TPRM - Enterprise Third-Party Risk Management SaaS

A professional, modern marketing website for an enterprise TPRM (Third-Party Risk Management) platform, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Homepage** - Hero section with value proposition, trust badges, and company logos
- **Features Section** - 6 key features with icons and descriptions
- **How It Works** - 4-step process visualization
- **Statistics Section** - Key metrics showing customer impact
- **Pricing Section** - 3-tier pricing model (Starter, Professional, Enterprise)
- **Case Studies** - Real-world customer success stories
- **Testimonials** - Customer testimonials with 5-star ratings
- **Resources & Blog** - Knowledge base with sample blog posts and whitepapers
- **Contact Form** - Lead capture form with vendor count selector
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Footer** - Professional footer with multiple link sections

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: CSS animations (fade-in, slide-up, float effects)
- **SEO**: Built-in Next.js metadata and structured data

## Project Structure

```
tprm-saas/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Homepage with all sections
│   ├── globals.css             # Global styles and animations
│   ├── blog/
│   │   └── page.tsx            # Blog listing page
│   └── case-studies/
│       └── page.tsx            # Case studies page
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── HeroSection.tsx         # Hero section with CTA
│   ├── FeaturesSection.tsx     # Feature cards
│   ├── HowItWorks.tsx          # Process steps
│   ├── StatsSection.tsx        # Key metrics
│   ├── PricingSection.tsx      # Pricing tiers
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── ResourcesSection.tsx    # Blog and resources
│   ├── ContactSection.tsx      # Contact form
│   └── Footer.tsx              # Footer navigation
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 18+ (included with npm)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server (port 8888)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:8888`

## Development

### Available Scripts

```bash
# Development server with hot reload (runs on port 8888)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting (if configured)
npm run lint
```

### Customization

#### Change Company Name
Edit the logo in `components/Header.tsx` and `components/Footer.tsx`

#### Change Colors
Modify the color scheme in:
- `tailwind.config.ts` - Color palette
- `components/*.tsx` - Inline colors (replace `#0F4C81`, `#00ACC1`, `#00BFA5`)
- `app/globals.css` - Gradient classes

#### Update Content
- **Homepage**: Edit sections in `app/page.tsx`
- **Features**: Update array in `components/FeaturesSection.tsx`
- **Pricing**: Update plans in `components/PricingSection.tsx`
- **Blog**: Edit blog posts in `app/blog/page.tsx`
- **Case Studies**: Update cases in `app/case-studies/page.tsx`

#### Add New Pages
1. Create new file in `app/` directory (e.g., `app/about/page.tsx`)
2. Add navigation link in `components/Header.tsx`
3. Page will be automatically routed based on filename

## Deployment Options

### Vercel (Recommended - Fastest)

Vercel is the company behind Next.js and provides the best deployment experience.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel

# View live site
vercel --prod
```

**Or connect GitHub:**
1. Push your code to GitHub
2. Go to vercel.com and sign up
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### GitHub Pages

```bash
# Build the project
npm run build

# Upload to GitHub
git push origin main
```

Then enable GitHub Pages in repository settings.

### DigitalOcean App Platform

1. Push to GitHub
2. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
3. Click "Create App"
4. Select your GitHub repository
5. Choose deployment region
6. Click "Deploy"

### Self-Hosted (Linux/Docker)

```bash
# Build
npm run build

# Start server
npm start
# Server runs on port 3000
```

With Docker:

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t tprm-saas .
docker run -p 3000:3000 tprm-saas
```

### AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify publish
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Contact Form Integration

The contact form in `components/ContactSection.tsx` currently logs to console. To integrate with your backend:

```typescript
// In ContactSection.tsx, update the handleSubmit function
const handleSubmit = async (e: any) => {
  e.preventDefault();

  // Send to your API
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  // Handle response
};
```

## Performance

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Inline SVGs and optimized assets
- **CSS**: Minified Tailwind CSS
- **Bundle Size**: ~102KB First Load JS (shared chunks)

## SEO

- Meta tags for homepage
- Open Graph support for social sharing
- Semantic HTML structure
- Heading hierarchy (H1, H2, H3)
- Mobile responsive design

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_API_URL=https://your-api.com
API_SECRET_KEY=your_secret_key
```

## License

© 2024 TPRM. All rights reserved.

## Support

For questions or issues:
- Email: support@tprm.com
- Phone: +1 (555) 123-4567
- Address: 123 Enterprise Way, San Francisco, CA 94105

---

Built with Next.js 15 and Tailwind CSS.
