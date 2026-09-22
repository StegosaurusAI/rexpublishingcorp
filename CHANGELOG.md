# CHANGELOG

## 2026-06-08

- added dedicated `/blog/[slug]` and `/blog/` routes for non-review content
- reserved `/book-reviews/` for review content only
- article URLs under `/book-reviews/[slug]/` return 404; articles use `/blog/` only
- updated homepage/latest links, navigation, and RSS to use canonical per-entry routes
