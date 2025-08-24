# Svelte 5 Cookiecutter Template

A modern **[cookiecutter](https://cookiecutter.readthedocs.io/)** template for **Svelte 5** projects with **TypeScript**, **Tailwind CSS**, and **Bun**.

## Features

- 🚀 **Svelte 5** with SvelteKit
- 📘 **TypeScript** support
- 🎨 **Tailwind CSS** for styling
- ⚡ **Bun** for fast package management and runtime
- 🧪 **Vitest** for testing (optional)
- 🐳 **Docker** support (optional)
- 🔧 **ESLint** and **Prettier** for code quality
- 📁 **Well-organized project structure** with useful path aliases
- 🎯 **Modern tooling** with optimized configurations

## Project Structure

The generated project includes:

```
your-project/
├── src/
│   ├── lib/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/             # Basic UI elements
│   │   │   └── features/       # Feature-specific components
│   │   ├── utils/              # Utility functions
│   │   ├── hooks/              # Custom Svelte 5 runes/hooks
│   │   ├── stores/             # Svelte stores
│   │   ├── api/                # API functions
│   │   ├── config/             # Application configuration
│   │   ├── assets/             # Static assets
│   │   └── vendor/             # Third-party components
│   ├── routes/                 # SvelteKit routes
│   ├── styles/                 # Global styles
│   ├── app.html               # HTML template
│   ├── app.css               # Main CSS entry point
│   └── app.d.ts              # TypeScript declarations
├── static/                     # Static files
├── package.json
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Quick Start

### Prerequisites

- [Python](https://python.org) with [cookiecutter](https://cookiecutter.readthedocs.io/) installed, OR
- [uv](https://docs.astral.sh/uv/) for the fastest setup

### Generate a New Project

#### Using uv (recommended)

```bash
uvx cookiecutter https://github.com/mort-sh/svelte.git
```

#### Using cookiecutter

```bash
pip install cookiecutter
cookiecutter https://github.com/mort-sh/svelte.git
```

#### Using cookiecutter directly from GitHub

```bash
cookiecutter gh:mort-sh/svelte
```

### Project Setup

After generating your project:

1. Navigate to your project directory:
   ```bash
   cd your-project-name
   ```

2. Install [Bun](https://bun.sh/) if you haven't already:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. Install dependencies:
   ```bash
   bun install
   ```

4. Start the development server:
   ```bash
   bun dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port you configured)

## Template Configuration

When you run the cookiecutter command, you'll be prompted to configure:

- **project_name**: The display name of your project
- **project_slug**: The directory/package name (auto-generated from project_name)  
- **project_description**: A brief description of your project
- **author_name**: Your name
- **author_email**: Your email address
- **author_github_handle**: Your GitHub username
- **dev_port**: Development server port (default: 5173)
- **preview_port**: Preview server port (default: 3000)
- **include_docker**: Include Docker configuration (y/n)
- **include_testing**: Include Vitest testing setup (y/n)
- **open_source_license**: Choose your license type

## Available Scripts

The generated project includes these scripts:

- `bun dev` - Start development server
- `bun run build` - Build for production  
- `bun run preview` - Preview production build
- `bun run check` - Run TypeScript and Svelte checks
- `bun run format` - Format code with Prettier
- `bun run lint` - Lint code with ESLint
- `bun run test` - Run tests (if testing is enabled)

## Docker Support

If you enabled Docker support, you can:

```bash
# Build the image
docker build -t your-app .

# Run the container  
docker run -p 3000:3000 your-app
```

## Path Aliases

The template sets up convenient path aliases:

- `$lib` → `src/lib`
- `$components` → `src/lib/components`
- `$ui` → `src/lib/components/ui`
- `$features` → `src/lib/components/features`
- `$utils` → `src/lib/utils`
- `$assets` → `src/lib/assets`
- `$hooks` → `src/lib/hooks`
- `$stores` → `src/lib/stores`
- `$api` → `src/lib/api`
- `$config` → `src/lib/config`
- `$vendor` → `src/lib/vendor`

Use them in your imports:
```typescript
import Button from '$ui/Button.svelte';
import { formatDate } from '$utils/date.js';
```

## Learn More

- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [SvelteKit Documentation](https://svelte.dev/docs/kit)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Vitest Documentation](https://vitest.dev/)

## Contributing

Issues and pull requests are welcome! Please feel free to contribute to make this template even better.

## License

This template is released under the MIT License.
