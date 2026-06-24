# Akshin — Architecture & Customization Guide

## 📁 Project Structure

```
akshin-journey-love/
├── src/
│   ├── App.tsx                 ← MAIN PAGE (all sections here)
│   ├── main.tsx                ← React entry point
│   ├── styles.css              ← Design system (colors, animations)
│   ├── assets/                 ← All images (10 JPG files)
│   ├── components/ui/          ← Shadcn UI components (auto-generated)
│   ├── hooks/                  ← Custom React hooks
│   └── lib/                    ← Utilities & helpers
├── index.html                  ← HTML shell (entry point)
├── vite.config.ts              ← Vite configuration
├── tailwind.config.ts          ← Tailwind CSS v4 settings
├── package.json                ← Dependencies & scripts
└── vercel.json                 ← Vercel deployment config
```

**Architecture Type:** Static Vite SPA (no server-side rendering)

---

## 🖼️ Images Organization

All images stored in **`src/assets/`** (10 files):

| Image                      | Usage                        | Edit Where                                 | Size Suggestion        |
| -------------------------- | ---------------------------- | ------------------------------------------ | ---------------------- |
| **hero.jpg**               | Hero section background      | `src/App.tsx` Hero component               | 1920×1080px, <200KB    |
| **y1.jpg - y5.jpg**        | Timeline (2021-2025)         | `src/App.tsx` line ~20-26 (timeline array) | 600×400px each, <100KB |
| **rose.jpg**               | Music player vinyl + moments | `src/App.tsx` MusicPlayer component        | 500×500px, <100KB      |
| **h1.jpg, h2.jpg, h3.jpg** | Gallery images               | `src/App.tsx` Gallery component            | 500×500px each, <100KB |

**To replace images:** Drop new JPG/PNG files into `src/assets/` with same names, then rebuild (`bun run build`).

---

## ✏️ Customize: What Edits Go Where

All customizations are in **`src/App.tsx`** — the single page component.

### 1️⃣ **Names & Dates** → Lines 20-22 (near top)

```typescript
const START = new Date("2021-06-25T00:00:00"); // Edit dates here
const TARGET = new Date("2026-06-25T00:00:00");
```

### 2️⃣ **Timeline Stories** → Lines 24-29

```typescript
const timeline = [
  { year: "2021", title: "The Beginning", text: "...", img: y1 },
  { year: "2022", title: "Growing Together", text: "...", img: y2 },
  // Edit story text here (5 entries total)
];
```

### 3️⃣ **Special Moments** → Lines 31-36

```typescript
const moments = [
  { date: "Jun 25, 2021", title: "First Hello", text: "..." },
  // Edit memories & dates here (5 entries total)
];
```

### 4️⃣ **Love Letter** → Search for `const LETTER` (around line 600)

```typescript
const LETTER = `My dearest,

Five years ago...`; // Edit text here
```

### 5️⃣ **Music Track** → Search for `<audio src="...">`

```typescript
<audio ref={ref} loop src="https://cdn.pixabay.com/download/audio/...mp3" />
// Replace URL with your own audio track
```

### 6️⃣ **Colors & Fonts** → `src/styles.css`

```css
--rose-gold: #e8937d;
--soft-pink: #f5c8d1;
--font-serif: "Playfair Display", serif;
--text-gold: #d4af8c;
/* Edit design tokens here */
```

### 7️⃣ **Hero Text & Footer Names** → `src/App.tsx` around lines 160-165 (Hero section)

```typescript
<span className="text-gold">Anish</span>
<span className="mx-3 text-soft-pink">&amp;</span>
<span className="text-gold">Kinshu</span>
// Replace with your names
```

Footer: Search for the last `<footer>` tag near bottom of file and update names.

---

## 🚀 Deploy to Vercel

### **Deployed! Already Live**

Your site is **live on Vercel** with the latest build:

- ✅ Static Vite build (no SSR issues)
- ✅ Auto-deploys on every GitHub push
- ✅ All animations & interactions working

### **To Deploy Updates:**

1. **Make edits** to `src/App.tsx` or images
2. **Test locally**:
   ```bash
   bun run dev
   # Visit http://localhost:5173
   ```
3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update [what changed]"
   git push origin main
   ```
4. **Vercel auto-redeploys** (watch dashboard in ~1-2 min)

### **Add Custom Domain:**

- In Vercel dashboard: **Settings → Domains**
- Add your domain (e.g., `anish-kinshu.com`)
- Configure DNS at your registrar

---

## 🔧 Build & Development Commands

```bash
# Start dev server (hot reload)
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Format code
bun run format

# Lint code
bun run lint
```

---

## 📝 Quick Edit Checklist

- [ ] Replace images in `src/assets/`
- [ ] Update START/TARGET dates (line 20-22)
- [ ] Update timeline array (5 stories)
- [ ] Update moments array (5 memories)
- [ ] Update love letter text
- [ ] Change music track URL
- [ ] Customize colors in `src/styles.css`
- [ ] Update names in Hero section
- [ ] Test locally with `bun run dev`
- [ ] Push to GitHub → Vercel auto-deploys

---

## 🆘 Troubleshooting

| Issue                      | Solution                                                  |
| -------------------------- | --------------------------------------------------------- |
| Images not showing locally | Run `bun install` to ensure all deps installed            |
| Dev server won't start     | Kill port 5173: `lsof -ti:5173 \| xargs kill`             |
| Build fails locally        | Delete `node_modules/` and `bun.lock`, then `bun install` |
| Vercel build error         | Check Build Logs in Vercel dashboard                      |
| Dates showing wrong        | Edit START/TARGET constants (line 20-22 in App.tsx)       |
| Music not playing          | Verify audio URL is public & accessible                   |
| Animation stutters         | Check browser dev tools for console errors                |

---

## 📚 Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool (near-instant HMR)
- **Tailwind CSS 4** — Styling
- **Framer Motion 12** — Smooth animations
- **TypeScript** — Type safety
- **Bun** — Fast package manager & runtime

---

**Made with ♥ for Anish & Kinshu** • Live on Vercel 🚀

- **Build command:** `bun run build` (or `npm run build`)
- **Output directory:** `dist/client`
- Click **Deploy** ✅

3. **Set Custom Domain** (optional):
   - In Vercel dashboard: **Settings → Domains**
   - Add your domain (e.g., `anish-kinshu.com`)
   - Configure DNS at registrar

---

## 🔧 Environment & Build Details

- **Node:** 20+
- **Package manager:** Bun (or npm)
- **Framework:** TanStack Start + React 18 + Vite
- **Build output:** `dist/client/` (static files) + `dist/server/` (optional server)
- **Deployment:** SSR-ready (works on any Node.js host)

---

## 📝 Quick Edit Checklist

- [ ] Replace images in `src/assets/`
- [ ] Update names in `index.tsx` (hero, footer, letter)
- [ ] Update START/TARGET dates
- [ ] Update timeline array (5 stories)
- [ ] Update moments array (memories)
- [ ] Update love letter text
- [ ] Change music track URL
- [ ] Customize colors in `styles.css`
- [ ] Push to GitHub
- [ ] Deploy on Vercel

---

## 🆘 Troubleshooting

| Issue              | Solution                                                                        |
| ------------------ | ------------------------------------------------------------------------------- |
| Images not showing | Check `src/assets/` folder, filenames match `index.tsx` imports                 |
| Build fails        | Run `bun install` (clear `node_modules/` if needed)                             |
| Vercel build error | Check Build Logs → ensure `bun run build` or `npm run build` runs locally first |
| Music doesn't play | Verify audio URL is public & CORS-enabled                                       |
| Dates wrong        | Edit `START` and `TARGET` constants (line 25-27)                                |

---

**Made with ♥ for Anish & Kinshu**
