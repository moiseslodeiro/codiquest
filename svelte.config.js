/*import adapter from '@sveltejs/adapter-static';*/
/* import adapter from '@sveltejs/adapter-auto';
 */
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { glob } from 'glob';
import path, { parse } from 'path';
import preprocessor from 'svelte-preprocess';
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
			$routes: './src/routes',
			'$levels/*': './src/levels/*',
			'$js/*': './src/js/*',
			'$assets/*': './src/assets/*'
		}
	}
};

console.log('Pushing dirs');
console.log();
const dirs = await glob('src/routes/**/*.svelte', { ignore: 'node_modules/**' });
dirs.forEach((dir) => {
	const appdir = path.dirname(path.relative('src/routes/', dir));
	if (appdir === '.' || appdir.includes('[id=integer]') || appdir.includes('[tech]')) return;

	console.log(`[+] Adding ${appdir} to entries`);

	config.kit.prerender.entries.push('/' + appdir);
});

console.log();
console.log('Pushing levels');
const levels = await glob('src/levels/**/*.svelte', { ignore: 'node_modules/**' });
levels.forEach((level) => {
	const relativePath = path.relative('src/levels', level);
	const parsedPath = path.parse(relativePath);

	if (parsedPath.name === 'Index') return;

	const levelRoute = `${path.join('/', parsedPath.dir, '/', 'level/', parsedPath.name)}`;

	config.kit.prerender.entries.push(levelRoute);
	console.log(`[+] Adding ${levelRoute} to entries`);

	config.kit.prerender.entries.push('/' + parsedPath.dir);
	console.log(`[+] Adding /${parsedPath.dir} to entries`);

	console.log(`[+] Adding /${parsedPath.dir}/level to entries`);
	config.kit.prerender.entries.push('/' + parsedPath.dir + '/level');
});

if (process.env.NODE_ENV == 'production') {
	console.log(`[+] Adding ${basePath} to entries`);
	config.kit.prerender.entries.push(basePath);
}

config.kit.prerender.entries = [...new Set(config.kit.prerender.entries)];

console.log();
console.log('[+] Routes');
console.log(config.kit.prerender);

// ----------------------

const routesFile = 'src/js/routes.js';
const routesContent = `// Archivo autogenerado. No tocar :-) \nexport const routes = ${JSON.stringify(
	config.kit.prerender.entries
)};\n`;

try {
	writeFileSync(routesFile, routesContent);
} catch (err) {
	console.error('Error al crear el archivo de rutas', err);
}

// --------------------------

export default config;
