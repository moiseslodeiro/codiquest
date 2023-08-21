import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig({
	plugins: [sveltekit(), removeConsole()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
