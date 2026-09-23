

## VoxAura website redesign — PARTIAL (2026-09-23)

### Completed
- Applied approved VoxAura styling across existing main website routes and WordPress blog source, preserving content, logo assets and SEO.
- Secured original Git history/source, production image and public/source blog exports with checksums and rollback instructions.
- Verified main route preservation, mobile overflow, representative complete page templates and checkout keyboard behavior.
- Added versioned WordPress presentation plugin and reproducible preservation checker.

### Pending
- Final cookie contrast/decorative-opacity cleanup deployment and final report.

### Production progress
- Main redesign release 98aedb7 is live and healthy.
- Blog release 8b14b692 is live; scoped FlowSEO exporter fix d4c6b434 preserves complete content, schema URLs and configured redirects.
- Combined production preservation: 59/59 URL checks pass.

### Files modified
- src/app/globals.css, src/app/layout.tsx, presentation pages and shared components.
- wordpress/, scripts/, verification/, package manifest and lockfile.
- No API, content-data, sitemap, robots, schema or database changes.
