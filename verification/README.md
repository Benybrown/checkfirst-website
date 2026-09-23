# VoxAura redesign verification — 23 September 2026

## Scope and invariants

The original website source commit is 6264699c66943e07cc4c5dd534bc228bb7509bda. Presentation changed across all existing page families; public assets, logo source, content data, API routes, payment plan values, metadata declarations, schema generation, robots and sitemap logic remain unchanged. One development-only dependency, @types/react-dom, supports the accessible checkout portal.

## Checks completed before publication

- Main HTTP baseline comparison: 22/22 passed (16 successful routes and six pre-existing Arabic subpage 404s). Compares status, title, headings, metadata, canonical/hreflang links, structured data, all text tokens, image src/alt and link targets. Cloudflare email obfuscation is decoded before comparison.
- Blog comparison: 36 successful URLs preserve all original text and SEO fields. Exactly four navigation links are added: CheckFirst, TPRM software, Pricing, Book a demo. Category page 2 may reorder two equal-date articles; heading multiset and content are preserved. The original /blog/author/ 404 is retained.
- Mobile DOM width checks at 390px across all 16 successful main routes: no document overflow. Fixed a min-content grid overflow in the shared commercial hero.
- Browser inspection: homepage hero through metrics, capabilities, workflow, testimonials, pricing, related links, FAQ, final CTA and footer; commercial template through all sections and footer; contact form; pricing and checkout modal; Arabic RTL and consultant mobile heroes; blog archive, pagination, article callout, complete long article through related reading, adjacent articles and footer. Article mobile reading width checked.
- Interaction checks: main mobile menu opens/closes with Escape; checkout focus starts on Close, Escape dismisses and returns focus; dialog renders above sticky navigation and fits mobile; existing French language selection updates translated content.
- Built CSS is static-first with reduced-motion support. Homepage atmosphere pauses when offscreen, hidden, or reduced-motion is requested. Interior atmosphere is static.
- PHP syntax check passes for the WordPress MU plugin. Static export reports zero SEO validation errors. Version-query CSS/JS paths are normalized in the plugin. The current publisher retains its existing asset-path normalization. Existing shared light-theme overrides and inline article callout colors are superseded in scoped theme CSS.

## Limits and existing issues

No real payment was made and no unsolicited test email was sent. Checkout, email and analytics backend code is unchanged; local previews deliberately have no production credentials. Local PostHog reports its missing preview token. Dependency audit reports 18 pre-existing advisories (13 moderate, 3 high, 2 critical); broad dependency upgrades are outside this visual release. Existing partial translations, claims, copy and seven known 404s are preserved. Lab performance scores and post-release search ranking changes have not been measured.

## Recovery

A separate recovery folder contains the verified Git bundle, source archive, exact production Docker image, public blog copy, WordPress-source static export, checksums and rollback guide. No production database or existing WordPress theme files were modified. Original dirty local repositories were left untouched.

## Production verification

- Main release 98aedb7: 22/22 preservation checks pass. Combined public site after blog publication: 59/59 pass, including seven original 404s.
- Blog publication: https://8b14b692.checkfirst-blog-pages.pages.dev (GitHub run 35864573651). Scoped FlowSEO exporter correction d4c6b43483b86d00d46957eb4112907a0d6dede8 preserves redirects, normalizes source-host schema URLs, and fetches canonical trailing-slash source pages. Other publishing targets are unchanged.
- Public responsive checks: six representative route families at 360, 768, 1024 and 1440px, all 24 without document overflow. Public homepage console has no errors. Desktop menu Escape behavior and required contact form validation pass.
- Google PageSpeed API returned HTTP 429 quota exceeded; no performance score is claimed.
- Final contrast cleanup changes the cookie Accept button to the shared primary style and corrects four invalid decorative opacity utilities. Final release verification is recorded in the external release report.

Final website release `a73a3082af1371d99f66a90c873f42ca94b8c373` is healthy. Repeated combined production verification passes 59/59. All three sitemap page inventories match the baseline; both legacy redirects pass in slash and non-slash forms.

## Hero correction requested after initial release

Release `377a1b4bd36ba8570f1574d7ae86fd700547d923` removes the homepage dashboard image and restores the exact original VoxAura fragment shader and 0.002 time multiplier using native WebGL. The original image asset remains available; only its homepage placement was removed. Native renderer avoids an external Three.js download. CSS fallback, reduced-motion preference, visibility and intersection controls remain.

Build/TypeScript pass. Template shader equality verified directly. Local 22-route and final live 59-route preservation pass with `--hero-image-removed`, which allows only this named homepage image removal. Live 1280px desktop and 390px mobile show WebGL active, zero hero images, no overflow and no console errors/warnings. Distinct live frames visibly confirm flow. Local scroll-away/back and route-away/back confirm pause/resume and recreation. Reduced-motion branch was reviewed in code, not emulated in the browser.

Local desktop visual inspection covered hero, metrics, evaluation paths, problem, capabilities, platform, workflow, testimonials, pricing, related workflow links, articles, FAQ, final CTA and footer. Live hero rechecked desktop/mobile.
