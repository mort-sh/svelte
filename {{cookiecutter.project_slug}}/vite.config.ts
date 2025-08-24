import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vite';

const plugins: PluginOption[] = [
	sveltekit() as PluginOption,
	tailwindcss() as PluginOption
];

export default defineConfig({
	plugins,
	server: { port: {{cookiecutter.dev_port}}, host: true },
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: false,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	},
	build: {
		minify: true,
		watch: {
			clearScreen: false,
			exclude: ['**/*.spec.ts', '**/*.md', 'node_modules/**'],
			include: ['**/*.ts', '**/*.css', '**/*.svelte']
		}
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$styles: path.resolve('./src/styles'),
			$assets: path.resolve('./src/lib/assets'),
			$components: path.resolve('./src/lib/components'),
			$ui: path.resolve('./src/lib/components/ui'),
			$features: path.resolve('./src/lib/components/features'),
			$hooks: path.resolve('./src/lib/hooks'),
			$utils: path.resolve('./src/lib/utils'),
			$vendor: path.resolve('./src/lib/vendor'),
			$vendorShadcn: path.resolve('./src/lib/vendor/shadcn'),
			$mist: path.resolve('./src/lib/vendor/components/mist'),
			$magic: path.resolve('./src/lib/vendor/components/magic')
		}
	}
});
