// Dependencies
import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';
import path from 'path';
import fs from 'fs';
import { glob } from 'glob';

// Configuration
console.log(`[i] NODE_ENV ${process.env.NODE_ENV}`);

// Función para detectar rutas dinámicas
function isDynamicRoute(route) {
  return /\[.*?\]/.test(route);
}

// Do no touch :-)
const config = {
  kit: {
    adapter: adapter({ strict: false }),
    prerender: {
      entries: ['/']
    }
  },
  preprocess: preprocessor()
};

// ------------------------------------------------------------------
// Basic routes
const dirs = await glob('src/routes/**/*.svelte', { ignore: 'node_modules/**' });
dirs.forEach((dir) => {
  const appdir = path.dirname(path.relative('src/routes/', dir));
  if (
    appdir === '.' ||
    isDynamicRoute(appdir) ||
    (process.env.NODE_ENV === 'production')
  )
    return;

  config.kit.prerender.entries.push('/' + appdir);
});

// ------------------------------------------------------------------
// Techs and levels

// Find all .auto.js files
const autoFiles = await glob('src/modules/**/*.auto.js', { ignore: 'node_modules/**' });

// Group them by module directory
const moduleData = {};
for (const file of autoFiles) {
  const relativePath = path.relative('src/modules', file);
  const moduleName = relativePath.split(path.sep)[0];

  console.log(`[i] Found file for module ${moduleName}: ${file}`);

  if (!moduleData[moduleName]) {
    moduleData[moduleName] = {};
  }

  if (file.endsWith('levels.auto.js')) {
    moduleData[moduleName].levelsFile = file;
  } else if (file.endsWith('questions.auto.js')) {
    moduleData[moduleName].questionsFile = file;
  }
}

// Find all manual modules (without .auto.js files)
const moduleDirs = await glob('src/modules/*', { onlyDirectories: true });
for (const dir of moduleDirs) {
  const name = path.basename(dir);
  // Si el módulo ya está en moduleData, está contemplado, sino es manual
  if (!moduleData[name]) {
    moduleData[name] = {}; // Añadir módulo manual
  }
}

// Process each module
for (const moduleName in moduleData) {
  if (isDynamicRoute(moduleName)) continue;

  config.kit.prerender.entries.push('/' + moduleName);
  config.kit.prerender.entries.push('/' + moduleName + '/test');
  config.kit.prerender.entries.push('/' + moduleName + '/test/random');

  const subRoutes = await glob(`src/modules/${moduleName}/**/*.{svelte,+page.js}`, { nodir: true });
  subRoutes.forEach(file => {
    const routePath = file
      .replace('src/modules', '')    // Quitar prefijo base
      .replace(/\/index\.svelte$/, '') // Omitir index.svelte al final
      .replace(/\.svelte$/, '')
      .replace(/\/\+page\.js$/, '')
      .replace(/\\/g, '/'); // Normalizar slashes para Windows

    if (!isDynamicRoute(routePath)) {
      config.kit.prerender.entries.push(routePath);
    }
  });

  const { levelsFile, questionsFile } = moduleData[moduleName];

  // Process levels
  if (levelsFile) {
    try {
      const data = fs.readFileSync(levelsFile, { encoding: 'utf8', flag: 'r' });
      const levelsRegex = /export const levels = (\[.*?\]);/s;
      const matchLevels = data.match(levelsRegex);

      if (matchLevels && matchLevels[1]) {
        const fixedJson = matchLevels[1]
          .replace(/type: (?:Choose|FillCode|Info)\s*,\n/g, '')
          .replace(/component:\s*\w+,\n/g, '');

        let levelsArray;
        try {
          levelsArray = Function(`return ${fixedJson}`)();
        } catch (err) {
          console.error(`[!] Error parsing levels for ${moduleName}`, err);
          config.kit.prerender.entries.push(`/${moduleName}/0`);
          continue;
        }

        for (let i = 0; i < levelsArray.length; i++) {
          const route = `/${moduleName}/${i}`;
          if (!isDynamicRoute(route)) {
            config.kit.prerender.entries.push(route);
          }
        }

        // Añadir subpages
        levelsArray.forEach((level) => {
          const { page, subpage, module: externalModule } = level;

          if (page && subpage && externalModule) {
            const entry = `/${externalModule}/${page}/${subpage}`;
            if (!isDynamicRoute(entry)) config.kit.prerender.entries.push(entry);
          } else if (page && subpage) {
            const entry = `/${moduleName}/${page}/${subpage}`;
            if (!isDynamicRoute(entry)) config.kit.prerender.entries.push(entry);
          } else if (page) {
            const entry = `/${moduleName}/${page}`;
            if (!isDynamicRoute(entry)) config.kit.prerender.entries.push(entry);
          }
        });
      } else {
        config.kit.prerender.entries.push('/' + moduleName + '/0');
      }
    } catch (error) {
      config.kit.prerender.entries.push('/' + moduleName + '/0');
    }
  }

  // Process questions
  if (questionsFile) {
    try {
      const data = fs.readFileSync(questionsFile, { encoding: 'utf8', flag: 'r' });
      const questionsRegex = /export const questions = (\[.*?\]);/s;
      const matchQuestions = data.match(questionsRegex);
      if (matchQuestions && matchQuestions[1]) {
        const fixedQuestions = matchQuestions[1].replace(/type: (?:Choose|Fill|FillCode|Info)\s*,\n/g, '');
        let questionsArray;
        try {
          questionsArray = Function(`return ${fixedQuestions}`)();
          for (let i = 1; i <= questionsArray.length; i++) {
            const routeTest = `/${moduleName}/test/random/${i}`;
            const routeQuestion = `/${moduleName}/${i}`;
            if (!isDynamicRoute(routeTest)) config.kit.prerender.entries.push(routeTest);
            if (!isDynamicRoute(routeQuestion)) config.kit.prerender.entries.push(routeQuestion);
          }
        } catch (err) {
          console.error(`[!] Error parsing questions for ${moduleName}`, err);
          config.kit.prerender.entries.push(`/${moduleName}/test/random/0`);
        }
      } else {
        config.kit.prerender.entries.push('/' + moduleName + '/test/random/0');
      }
    } catch (error) {
      config.kit.prerender.entries.push('/' + moduleName + '/test/random/0');
    }
  }
}

// Unificar y exportar
config.kit.prerender.entries = [...new Set(config.kit.prerender.entries)];
console.dir(config.kit.prerender.entries, {maxArrayLength: null});
//console.log('[i] Prerender entries:', config.kit.prerender.entries);
export default config;
