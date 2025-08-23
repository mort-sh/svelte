# webbuddy (Svelte)

Minimal docs

## Prerequisites

- Node.js (LTS)
- npm or pnpm

## Quick start

1. Install dependencies

   ```sh
   npm install
   ```

2. Run development server

   ```sh
   npm run dev
   ```

3. Build for production

   ```sh
   npm run build
   npm run preview
   ```

## Notes

- Main stylesheet: `src/app.css` — it imports Tailwind and local styles.
- Local style files: `src/styles/{theme.css, base.css, components.css, utilities.css}`
- Vendor/style source path: `src/lib/vendor/**`
- Tailwind/PostCSS should be configured in the project root (`postcss.config.cjs` / `tailwind.config.cjs` or `tailwind.config.js`).

## Customize

- Edit the files in `src/styles/` to change themes, base layout, components, or utilities.
- If you add new CSS entry points, import them from `src/app.css` so the build pipeline processes them.
