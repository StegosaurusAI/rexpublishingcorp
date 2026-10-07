# CHANGELOG

## 2026-10-06

- added emitted-HTML-only dead-anchor repair for exact Rex hosts and the blog/review namespaces, preserving child/text bytes and draft exclusion
- added deterministic repair reports and independent emitted/live internal-link verification, plus live sitemap membership comparison
- added SHA-locked committed-source publication, exact Rex project identity validation, shared linked-worktree locking and hardened process-group draining
- retain the snapshot's validated build outside deployment source, then restore it for same-snapshot live verification before unlocking; record deployment and verification status separately
- added byte-preservation and isolated publisher-stub tests; documented the release command and recovery behavior

## 2026-06-08

- added dedicated `/blog/[slug]` and `/blog/` routes for non-review content
- reserved `/book-reviews/` for review content only
- article URLs under `/book-reviews/[slug]/` return 404; articles use `/blog/` only
- updated homepage/latest links, navigation, and RSS to use canonical per-entry routes
