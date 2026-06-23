# Akshin — Anish & Kinshu · 5 Years of Us 💖

A cinematic, romantic single-page anniversary website celebrating 5 years together.
**25 June 2021 → 25 June 2026**

Built with React, TanStack Start (Vite), Framer Motion, and Tailwind CSS v4.

---

## ✨ Features

- Cinematic hero with parallax & entrance animation
- Live countdown to 25 June 2026
- 5-chapter love-story timeline with hover glow
- Masonry memory gallery with lightbox
- Special-moments cards
- Animated love-statistics counters
- Envelope letter with typewriter effect
- Floating music player with rotating vinyl
- Fireflies finale + "Replay Our Story"
- Cursor glow, floating particles, glassmorphism

---

## 🚀 Run locally

Requires **Node 20+** and **[Bun](https://bun.sh)** (or use npm).

```bash
# 1. Install dependencies
bun install

# 2. Start the dev server
bun run dev

# 3. Open the preview
# → http://localhost:8080
```

If you prefer npm:

```bash
npm install
npm run dev
```

---

## 📦 Build for production

```bash
bun run build
bun run start    # preview the production build
```

---

## 🌍 Deploying

This project uses **TanStack Start (SSR)**, which is not a pure static export, so it does **not** drop straight onto GitHub Pages.

### Option A — Lovable / Vercel / Netlify / Cloudflare (recommended)
Push the repo and connect it. Build command `bun run build` is auto-detected.

### Option B — Make it static for GitHub Pages
If you only need the single page (no server functions):

1. Replace TanStack Start with a plain `vite + @vitejs/plugin-react` setup.
2. Move the page content from `src/routes/index.tsx` into `src/App.tsx`.
3. Build with `vite build` (outputs `dist/`).
4. Publish with `gh-pages`:

```bash
npm i -D gh-pages
# add to package.json:
#   "scripts": { "deploy": "vite build && gh-pages -d dist" }
npm run deploy
```

Then in your repo: **Settings → Pages → Source: `gh-pages` branch**.

> Ask the assistant and I can convert the project to a static SPA layout for you.

---

## 🗂 Project structure

```
src/
├─ assets/                # hero & timeline images
├─ routes/
│  ├─ __root.tsx          # html shell, fonts, meta
│  └─ index.tsx           # the whole Akshin page (all sections)
├─ styles.css             # design system (colors, glass, animations)
```

---

## 🎨 Customize

| What                | Where                                                             |
| ------------------- | ----------------------------------------------------------------- |
| Names               | `src/routes/index.tsx` (hero, footer, letter)                     |
| Anniversary dates   | `START` and `TARGET` constants near the top of `index.tsx`        |
| Timeline chapters   | `timeline` array                                                  |
| Special moments     | `moments` array                                                   |
| Letter text         | `LETTER` constant                                                 |
| Photos              | replace files in `src/assets/`                                    |
| Colors / fonts      | `src/styles.css` (`--rose-gold`, `--soft-pink`, `--font-serif`)   |
| Music track         | `<audio src="...">` inside `MusicPlayer`                          |

---

Made with ♥ for **Anish & Kinshu**.
