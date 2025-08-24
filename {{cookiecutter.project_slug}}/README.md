# {{cookiecutter.project_name}}

{{cookiecutter.project_description}}

## Prerequisites

- [Bun](https://bun.sh/) (latest version)

## Quick start

1. Install dependencies

   ```sh
   bun install
   ```

2. Run development server

   ```sh
   bun dev
   ```

   The app will be available at `http://localhost:{{cookiecutter.dev_port}}`

3. Build for production

   ```sh
   bun run build
   bun run preview
   ```

   The preview server will be available at `http://localhost:{{cookiecutter.preview_port}}`

## Development

- **Main stylesheet**: `src/app.css` — it imports Tailwind and local styles
- **Local style files**: `src/styles/{theme.css, base.css, components.css, utilities.css}`
- **Vendor/style source path**: `src/lib/vendor/**`
- **Tailwind/PostCSS**: configured in the project root (`tailwind.config.js`)

## Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI elements
│   │   └── features/       # Feature-specific components
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom Svelte 5 runes/hooks
│   ├── stores/             # Svelte stores (when runes aren't suitable)
│   ├── api/                # API functions
│   ├── config/             # Application configuration
│   ├── assets/             # Static assets (images, fonts, etc.)
│   └── vendor/             # Third-party components
├── routes/                 # SvelteKit routes
├── styles/                 # Global styles
├── app.html               # HTML template
├── app.css               # Main CSS entry point
└── app.d.ts              # TypeScript declarations
```

## Scripts

- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Run TypeScript and Svelte checks
- `bun run format` - Format code with Prettier
- `bun run lint` - Lint code with ESLint{% if cookiecutter.include_testing == 'y' %}
- `bun run test` - Run tests
- `bun run test:unit` - Run tests in watch mode{% endif %}

## Customize

- Edit the files in `src/styles/` to change themes, base layout, components, or utilities
- If you add new CSS entry points, import them from `src/app.css` so the build pipeline processes them
- Use the convenient path aliases defined in `svelte.config.js` and `vite.config.ts`:
  - `$lib` - `src/lib`
  - `$components` - `src/lib/components`
  - `$ui` - `src/lib/components/ui`
  - `$features` - `src/lib/components/features`
  - `$utils` - `src/lib/utils`
  - `$assets` - `src/lib/assets`
  - And more...

{% if cookiecutter.include_docker == 'y' %}## Docker

Build and run with Docker:

```sh
docker build -t {{cookiecutter.project_slug}} .
docker run -p {{cookiecutter.preview_port}}:{{cookiecutter.preview_port}} {{cookiecutter.project_slug}}
```
{% endif %}

## Learn More

- [SvelteKit Documentation](https://svelte.dev/docs/kit)
- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)