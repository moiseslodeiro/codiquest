/*import adapter from '@sveltejs/adapter-static';*/
/* import adapter from '@sveltejs/adapter-auto';
 */
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { glob } from 'glob';
import path from 'path';
import preprocessor from 'svelte-preprocess'
import { writeFileSync } from 'fs';

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
			'$routes': './src/routes',
			'$levels/*': './src/levels/*',
			'$js/*': './src/js/*',
			'$assets/*': './src/js/*',
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

if (process.env.NODE_ENV == 'production') config.kit.prerender.entries.push(basePath);

// config.kit.prerender.entries.forEach((element, index) => {
// 	if (element === '/') return;
// 	config.kit.prerender.entries.push(element + '/');
// });

config.kit.prerender.entries = [...new Set(config.kit.prerender.entries)];

console.log('Routes');
console.log(config.kit.prerender);

// ----------------------

const routesFile = 'src/js/routes.js';
const routesContent = `// Archivo autogenerado. No tocar :-) \nexport const routes = ${JSON.stringify(config.kit.prerender.entries)};\n`;

try {
  writeFileSync(routesFile, routesContent);
} catch (err) {
  console.error('Error al crear el archivo de rutas', err);
}

// --------------------------

export default config;
