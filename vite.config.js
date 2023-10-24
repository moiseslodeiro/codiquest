import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig({
	plugins: [sveltekit(), removeConsole(), ViteMinifyPlugin({})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		cssMinify: 'lightningcss',
		minify: 'esbuild'
	}
});
