#!/usr/bin/env bash
# Build the Next.js static export and sync it into docs/ (GitHub Pages root).
# Pages serves this repo from /docs on master under /diamond-landing/.
set -euo pipefail
cd "$(dirname "$0")/.."
export PATH="/root/.hermes/node/bin:$PATH"

BASE_PATH=/diamond-landing npm run build

# Clear only generated artifacts from docs/ (keep PDFs, logos.html, etc.)
rm -rf docs/_next docs/index.html docs/index.txt docs/404
cp -r out/* docs/
touch docs/.nojekyll   # gh-pages must not run Jekyll (it drops _next/)

echo "docs/ updated from out/"
