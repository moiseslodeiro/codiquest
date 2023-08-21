/*import adapter from '@sveltejs/adapter-static';*/
/* import adapter from '@sveltejs/adapter-auto';
 */
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://kit.svelte.dev/docs/integrations#preprocessors
 // for more information about preprocessors
 preprocess: vitePreprocess(),

 kit: {
  adapter: adapter(),
  prerender: {
    entries: ['/'] // Adding root to the prerender entries fixes the issue
  },
  paths: {
    base: process.env.NODE_ENV === 'production' ? '/codiquest' : '',
  }
 }
};

config.kit.prerender.entries.push('/level/1', '/level/2', '/about', '/js')

export default config;