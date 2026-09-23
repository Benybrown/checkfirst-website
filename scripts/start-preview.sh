#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Website port is specified in CLAUDE.md; keep SaaS services separate.
if [[ "${WEBSITE_PREVIEW_MODE:-production}" == "development" ]]; then
  exec ./node_modules/.bin/next dev --hostname 127.0.0.1 --port "${WEBSITE_PREVIEW_PORT:-6670}"
fi
exec ./node_modules/.bin/next start --hostname 127.0.0.1 --port "${WEBSITE_PREVIEW_PORT:-6670}"
