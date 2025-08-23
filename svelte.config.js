import adapter from '@sveltejs/adapter-node';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			// core
			$lib: 'src/lib',
			$styles: 'src/styles',
			'@/*': 'src/lib/*',

			// convenience by area
			$assets: 'src/lib/assets',
			$components: 'src/lib/components',
			$ui: 'src/lib/components/ui',
			$features: 'src/lib/components/features',
			$hooks: 'src/lib/hooks',
			$utils: 'src/lib/utils',
			$vendor: 'src/lib/vendor',
			$vendorShadcn: 'src/lib/vendor/shadcn',
			$vendorShadcnExtra: 'src/lib/vendor/shadcn-extra'
		}
	}
};

export default config;
