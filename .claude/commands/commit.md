---
description: Stages changes, generates a Conventional Commit message in English, and commits
allowed-tools:
  - Bash(git add:*)
  - Bash(git status:*)
  - Bash(git diff:*)
  - Bash(git log:*)
  - Bash(git commit:*)
---

## Context (auto-injected at runtime)

- Git status: !`git status --short`
- Staged diff: !`git diff --cached`
- Unstaged diff: !`git diff`
- Recent commits (for style reference): !`git log --oneline -8`
- Current branch: !`git branch --show-current`

---

## Your task

Analyze the diff above and create a git commit following these rules **exactly**.

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

| Type       | When to use                                |
| ---------- | ------------------------------------------ |
| `feat`     | New feature or behavior visible to users   |
| `fix`      | Bug fix                                    |
| `refactor` | Code change with no behavior change        |
| `docs`     | Documentation only                         |
| `test`     | Adding or updating tests                   |
| `chore`    | Tooling, deps, config (no production code) |
| `ci`       | CI/CD pipeline changes                     |
| `db`       | Database migrations or schema changes      |

### Scopes (use the closest match)

`auth` | `farm` | `plot` | `batch` | `trace` | `qr` | `admin` | `db` | `ui` | `api`

### Rules — non-negotiable

- **Language: English only** — subject, body, footer
- **Subject:** imperative mood ("add" not "added" / "adds")
- **Subject:** max 72 characters, no period at end
- **Body:** explain WHY, not what (the diff already shows what)
- **Body:** wrap at 72 characters per line
- **No AI attribution** in the message
- **Atomic commits:** if the diff contains unrelated changes, warn the user and suggest splitting before proceeding

### Scope inference

Infer scope from the files changed:

- `src/app/(auth)/` → `auth`
- `src/app/(dashboard)/farms/` or `tenants` → `farm`
- `src/app/(dashboard)/plots/` → `plot`
- `src/app/(dashboard)/batches/` → `batch`
- `src/app/(dashboard)/trace-events/` → `trace`
- `src/app/api/qr/` → `qr`
- `src/app/(dashboard)/admin/` → `admin`
- `supabase/migrations/` → `db`
- `.claude/`, `CLAUDE.md`, CI files → `chore` or `ci`

### Process

1. If nothing is staged, run `git add -A` and confirm with the user
2. Analyze the diff to understand the purpose of the changes
3. Generate **3 candidate messages** ranked by quality
4. Explain briefly why you chose the top candidate
5. Execute `git commit -m "<chosen message>"` with the best candidate
6. Show the final `git log --oneline -1` to confirm

### Examples of good messages

```
feat(plot): add GPS coordinate validation on creation

fix(auth): redirect to login when session expires on dashboard

refactor(batch): extract status transition logic into helper

db(trace): add immutability policy blocking UPDATE on trace_events

docs(farm): update onboarding guide with RLS requirements
```

### Examples of bad messages (never generate these)

```
update code                         ← too vague
fixed bug                           ← past tense, no scope
feat: changes                       ← not imperative, too vague
feat(plot): Add GPS validation.     ← capitalized subject + period
```
