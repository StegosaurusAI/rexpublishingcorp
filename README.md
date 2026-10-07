# Astro Starter Kit: Blog

## Rex publication repair and release

`npm run build` repairs only emitted HTML, at Astro's `build:done` hook. Anchors
to absent emitted routes under `/blog` and `/book-reviews` on exactly
`rexpublishingcorp.com` or `www.rexpublishingcorp.com` are unwrapped. Only the
opening and closing anchor tags are removed; all intervening bytes survive.
Relative URLs, HTML attribute entities, percent-encoded paths, queries and
fragments are resolved against the page URL (and any HTML base URL). Fragments
do not change route membership. External hosts and other namespaces are outside
this repair. No article sources, draft flags, publication queues or holds are
modified. Actual emitted HTML, including section indexes, defines the inventory.

- `dist/link-repair-report.json`: deterministic page/href/target/offset report.
- `npm run preflight`: builds, independently verifies emitted internal links,
  and checks routes, RSS, sitemap, index membership, draft exclusion and assets.
- `npm test`: byte-preservation and isolated publisher fixtures; deployment
  and npm commands in publisher tests are stubs.
- `npm run verify:live`: compares the current build's article bodies to live
  bodies, checks live sitemap membership/internal links, and checks draft 404s.

The release operator (main) runs this exact command from a clean committed tree:

```sh
npm run publish -- <full40HEADSHA>
```

Replace `<full40HEADSHA>` with the full lowercase 40-character current `HEAD`
commit SHA. `npm run publish` is the package-script command (bare `npm publish`
is npm's registry publishing command). Exactly one SHA argument is accepted.
The ignored, regular, untracked `.vercel/project.json` must identify:

```json
{"projectId":"prj_h2kdCPNPVxUwY6EDp0cEQz2q4xI4","orgId":"team_E3GGoyWVFdoPzDhyaZRQYzaO","projectName":"rexpublishingcorp"}
```

The wrapper refuses project/org/team/scope environment overrides and dirty
checkouts. A site-specific atomic directory lock in the **common Git directory**
serializes linked worktrees. It archives committed source, excludes ignored
env/link/build output, rejects committed env/link/build artifacts (except
`.env.example`), runs `npm ci` and preflight inside the snapshot, and moves the
validated `dist` outside deployment source. It removes `.astro`, runs exactly
`vercel deploy --prod --yes`, restores that same `dist`, and runs
`npm run verify:live` before releasing the lock. It uploads source, not a
prebuilt deployment. Authentication must already be available to the Vercel CLI.

`rexpublishingcorp-publication-last.json` in the common Git directory records
SHA, deployment URL and status. `verified` is success; `deployed-verify-failed`
means deployment succeeded but live verification did not; `deployment-unconfirmed`
means the deploy command outcome was unsuccessful or interrupted. Pre-deploy
failures are recorded separately. A CLI success without a deployment URL is a
verification failure. This command performs a production deployment; release
authority remains with main.

Catchable signals drain owned process groups with bounded TERM/KILL escalation.
Leader exit alone is insufficient. Unconfirmed groups retain snapshot and lock;
cleanup failure also retains the lock. Inspect `owner.json`, the status record
and any remaining processes before manual orphan recovery. Descendants that
create a new session/group and uncatchable SIGKILL are outside this guarantee.

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
