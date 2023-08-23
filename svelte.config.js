/*import adapter from '@sveltejs/adapter-static';*/
/* import adapter from '@sveltejs/adapter-auto';
 */
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { glob } from 'glob';
import path from 'path';
import preprocessor from 'svelte-preprocess'

const basePath = process.env.NODE_ENV === 'production' ? '/codiquest' : '';
console.log(`[+] NODE_ENV ${process.env.NODE_ENV}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocessor(),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['/'] // Adding root to the prerender entries fixes the issue
		},
		paths: {
			base: basePath
		},
		alias: {
			$routes: './src/routes',
			'$levels/*': './src/levels/*'
		}
	}
};

console.log('Pushing dirs');
const dirs = await glob('src/routes/**/*.svelte', { ignore: 'node_modules/**' });
dirs.forEach((dir) => {
	const appdir = path.dirname(path.relative('src/routes/', dir));
	if (appdir === '.' || appdir.includes('[id=integer]') || appdir.includes('[tech]')) return;

	config.kit.prerender.entries.push('/' + appdir);
});

console.log('Pushing levels');
const levels = await glob('src/levels/**/*.svelte', { ignore: 'node_modules/**' });
levels.forEach((level) => {
	const relativePath = path.relative('src/levels', level);
	const parsedPath = path.parse(relativePath);
	const levelRoute = `${path.join('/', parsedPath.dir, '/', 'level/', parsedPath.name)}`;
	config.kit.prerender.entries.push(levelRoute);
	config.kit.prerender.entries.push('/' + parsedPath.dir);
	config.kit.prerender.entries.push('/' + parsedPath.dir + '/level');
});

if (basePath == 'production') config.kit.prerender.entries.push('');

config.kit.prerender.entries.forEach((element, index) => {
	if (element === '/') return;
	config.kit.prerender.entries.push(element + '/');
});

config.kit.prerender.entries = [...new Set(config.kit.prerender.entries)];

console.log('Routes');
console.log(config.kit.prerender);

export default config;