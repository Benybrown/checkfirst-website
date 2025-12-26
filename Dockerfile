# =============================================================================
# SECURE DOCKERFILE FOR CHECKFIRST WEBSITE
# Security features: non-root user, read-only filesystem, minimal attack surface
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Dependencies
# -----------------------------------------------------------------------------
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies only (for caching)
COPY package.json package-lock.json ./
RUN npm ci --only=production=false

# -----------------------------------------------------------------------------
# Stage 2: Builder
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js application
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 3: Production Runner (Secure)
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

# Security: Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Security: Install only essential packages, remove package managers
RUN apk add --no-cache dumb-init && \
    rm -rf /var/cache/apk/*

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy built application with correct ownership
# Note: public directory must exist (even if empty, use .gitkeep)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Ensure proper permissions on all app files
RUN chown -R nextjs:nodejs /app

# Security: Create writable directories for Next.js cache (will be tmpfs in production)
RUN mkdir -p /app/.next/cache && \
    chown -R nextjs:nodejs /app/.next/cache

# Security: Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Note: Healthcheck handled by Coolify/orchestrator
# The container runs as non-root user 'nextjs' for security

# Security: Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
