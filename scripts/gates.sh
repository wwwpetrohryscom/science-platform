#!/usr/bin/env bash
#
# Every gate CI runs, in CI's order, failing on the first one that fails.
#
# This exists because of a specific mistake. The verification gate was run
# locally as
#
#     npm run content:verification -- --require-full | grep coverage
#
# which printed "coverage 100.0%" and hid the "✗ [ledger-method-missing]"
# line above it. The gate had failed; the filter made it look like it had
# passed, and CI found it after the push.
#
# Reading a gate's output is not the same as checking whether it passed.
# `set -e` here makes the exit code the answer, so "did the gates pass" is
# one command and not a question about what was on screen.
#
# Usage: npm run gates
#        npm run gates -- --fast    # skip the build and the rendered audit
#
# --fast is for the middle of a change. It is not the check before a push:
# the rendered audit reads the HTML the build wrote, and it is the only
# gate that sees what a visitor sees.
set -euo pipefail

FAST=0
for arg in "$@"; do
  [ "$arg" = "--fast" ] && FAST=1
done

run() {
  printf '\n\033[1m── %s\033[0m\n' "$*"
  npm run --silent "$@"
}

# Static analysis and the content rules.
run typecheck
run lint
run content:validate
run editorial:validate
run data:validate
run tools:test
run content:originality

# Translation fidelity: the rules first, then the corpus they judge.
run content:translations:test
run content:translations

# Graph, registry and reference layers.
run content:links
run evidence:check
run evidence:validate
run entities:check
run entities:validate
run glossary:validate
run glossary:link:test
run search:test
run content:link:test
run faqs:validate

# Verification coverage. --require-full is the point of running it here.
printf '\n\033[1m── content:verification --require-full\033[0m\n'
npm run --silent content:verification -- --require-full

run content:depth

if [ "$FAST" = "1" ]; then
  printf '\n\033[1;33m--fast: skipped build, artefacts and the rendered audit.\033[0m\n'
  printf 'Run without --fast before pushing.\n'
  exit 0
fi

# Build artefacts, then the audit that reads what the build actually wrote.
run build
run og:generate
run feed:generate
run search:check
run seo:validate
run seo:audit

printf '\n\033[1;32mAll gates passed.\033[0m\n'
