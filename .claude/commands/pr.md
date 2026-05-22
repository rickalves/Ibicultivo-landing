---
description: Generates a standardized Pull Request title and description in English using gh CLI
allowed-tools:
  - Bash(git log:*)
  - Bash(git diff:*)
  - Bash(git branch:*)
  - Bash(gh pr:*)
  - Bash(gh issue:*)
---

## Context (auto-injected at runtime)

- Current branch: !`git branch --show-current`
- Commits vs main: !`git log main..HEAD --oneline`
- Full diff vs main: !`git diff main...HEAD --stat`
- Changed files: !`git diff main...HEAD --name-only`

---

## Your task

Analyze the commits and diff above, then create a Pull Request using `gh pr create`.

### PR Title format

```
<type>(<scope>): <short summary of the overall change>
```

Same Conventional Commit rules as commit messages: English, imperative, max 72 chars.

### PR Description template (fill every section)

```markdown
## Summary

<!-- 2-3 sentences: what this PR does and why -->

## Changes

<!-- Bullet list of the most important changes. Group by area if needed. -->

-
-

## Related User Stories

<!-- Reference backlog IDs if applicable -->

- US-X.X — [title]

## Testing

<!-- How was this tested? What should the reviewer test manually? -->

- [ ]
- [ ]

## Checklist

- [ ] TypeScript compiles without errors (`pnpm typecheck`)
- [ ] ESLint passes (`pnpm lint`)
- [ ] RLS policies respected in all Supabase queries
- [ ] `trace_events` is append-only (no UPDATE/DELETE)
- [ ] No sensitive data exposed in Client Components
- [ ] Conventional Commit format used in all commit messages
```

### Rules

- **Language: English only** — title and entire description
- **No AI attribution** anywhere in the PR
- **Be specific** — "Add GPS validation to plot creation form" not "Update plots"
- If the branch name contains a US number (e.g. `feat/us-3-1-plots`), reference it in Related User Stories

### Process

1. Generate the title and full description following the template above
2. Show the draft to the user for review
3. After confirmation, run:
   ```bash
   gh pr create --title "<title>" --body "<description>" --base main
   ```
4. Output the PR URL on completion
