# Git Workflow

Enterprise-style branching workflow for this portfolio repository.

## Branch model

| Branch | Purpose | Lifetime |
|---|---|---|
| `main` | Production-ready code. Auto-deploys on push. | Permanent |
| `release/r.x.xx` | Release snapshot cut from `main` for versioning. | Keep until next release |
| `feature/<name>` | New features, UI updates, content changes. | Delete after merge |
| `hotfix/<name>` | Urgent fixes on top of `main`. | Delete after merge |

### Naming examples

- `feature/wipro-experience-update`
- `feature/blog-section`
- `hotfix/share-button-mobile`
- `release/r.1.11`

## Standard development flow

### 1) Start from latest `main`

```bash
git checkout main
git pull origin main
```

### 2) Create a feature branch

```bash
git checkout -b feature/<short-task-name>
```

### 3) Commit changes

```bash
git add <files>
git commit -m "Short summary of why this change was made."
```

Commit message style:

- Use present tense or imperative mood.
- Focus on **why**, not only what changed.
- Keep subject line concise (1 line), add body only if needed.

### 4) Push and open a pull request

```bash
git push -u origin feature/<short-task-name>
gh pr create --base main --head feature/<short-task-name> --title "Your PR title" --body "Summary + test plan"
```

### 5) Merge policy

- Merge only through PR into `main`.
- Prefer **Squash and merge** for feature branches.
- Do not push directly to `main`.
- Delete feature branch after merge.

### 6) Verify deployment

- Run `npm run build` before merge.
- After merge to `main`, confirm GitHub Actions deploy succeeds.
- Verify the site at `https://kamaldev.in` once DNS and HTTPS are active.

## Release workflow

Use this when publishing a version (example: `r.1.10`).

### 1) Ensure `main` is stable

```bash
git checkout main
git pull origin main
npm run build
```

### 2) Create release branch from `main`

```bash
git checkout -b release/r.1.10
git push -u origin release/r.1.10
```

### 3) Tag the release

```bash
git tag -a r.1.10 -m "Release r.1.10"
git push origin r.1.10
```

### 4) Publish GitHub Release

```bash
gh release create r.1.10 \
  --title "Release r.1.10" \
  --target release/r.1.10 \
  --notes "Release notes here"
```

### 5) Next release

For `r.1.11`:

1. Complete features on `main` via PRs.
2. Cut `release/r.1.11` from updated `main`.
3. Tag `r.1.11` and publish release notes.

## Hotfix workflow

For urgent production fixes:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/<issue-name>
# fix + commit
git push -u origin hotfix/<issue-name>
# PR -> main, merge, deploy
```

If needed, tag a patch release (example: `r.1.10.1`).

## Branch hygiene rules

1. Delete merged feature/hotfix branches (local + remote).
2. Keep only active release branch(es).
3. Never keep long-lived branches like `template1` after merge.
4. Sync local branches regularly:

```bash
git fetch --all --prune
```

## Recommended GitHub repository settings

In GitHub repo settings:

1. **Default branch:** `main`
2. **Allow squash merging:** enabled
3. **Allow merge commit:** optional (prefer squash)
4. **Allow rebase merging:** optional
5. **Automatically delete head branches:** enabled

### `main` branch protection (recommended)

- Require a pull request before merging
- Require status checks to pass (`npm run build` via CI)
- Do not allow force pushes
- Do not allow branch deletion

## Current repository baseline

As of release `r.1.10`:

- Production branch: `main`
- Release branch: `release/r.1.10`
- Release tag: `r.1.10`
- Retired branches removed: `template1`, `timeline-skills`

## Quick command reference

```bash
# Update local branches
git fetch --all --prune

# Start feature
git checkout main && git pull origin main
git checkout -b feature/my-change

# Open PR
git push -u origin feature/my-change
gh pr create --base main --head feature/my-change

# Create release from main
git checkout main && git pull origin main
git checkout -b release/r.1.11
git push -u origin release/r.1.11
git tag -a r.1.11 -m "Release r.1.11"
git push origin r.1.11
gh release create r.1.11 --title "Release r.1.11" --target release/r.1.11

# Delete merged branch
git branch -d feature/my-change
git push origin --delete feature/my-change
```

## Do / Don't

### Do

- Branch from `main`
- Use descriptive branch names
- Keep PRs small and focused
- Run `npm run build` before opening PR
- Tag every production release

### Don't

- Commit directly to `main`
- Keep stale merged branches
- Use vague branch names (`template1`, `test`, `new`)
- Force-push `main`
- Mix unrelated changes in one PR
