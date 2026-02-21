# Website goals
- Build a premium-feeling, modern marketing site.
- Primary CTA: "Book a demo" (sticky in header on desktop).
- Secondary CTA: "View pricing".

# Visual style (non-negotiable)
- Clean, minimal, high whitespace, strong typographic hierarchy.
- Use a restrained color palette: 1 brand color + neutrals.
- Soft borders, subtle shadows, large radius (12–20px).
- Generous spacing (8px system; prefer 24/32/48 gaps).
- Motion: subtle (150–250ms), respect prefers-reduced-motion.

# UX requirements
- Mobile-first responsive.
- Accessible: semantic HTML, keyboard nav, visible focus states, good contrast.
- Performance: optimize images, avoid heavy animation libraries on first load.

# Component rules
- Use reusable components for: Header, Footer, Section, CTA, Card, FeatureList.
- No one-off styling in random files—prefer shared components + utility classes.
- Keep pages composition-only; logic lives in components.

# Page structure (v1)
- Home: Hero → Social proof → Benefits → How it works → Testimonials → Pricing teaser → FAQ → CTA
- Pricing
- About
- Contact

# Definition of done
- Runs without errors
- Looks polished on mobile + desktop
- Lighthouse targets: Performance 90+, Accessibility 95+
- Include a final self-critique + a punch list of improvements
