// Dependencies
import adapter from '@sveltejs/adapter-static';
import preprocessor from 'svelte-preprocess';
import path from 'path';
import fs from 'fs';
import { glob } from 'glob';

// Configuration
const basePath = process.env.BASE_PATH || '';
console.log(`[i] NODE_ENV ${process.env.NODE_ENV}`);

// Do no touch :-)
const config = {
  kit: {
    adapter: adapter({ strict: false }),
    prerender: {
      entries: ['/']
    },
    paths: {
      base: basePath
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
    appdir.includes('[') ||
    (process.env.NODE_ENV === 'production' && appdir === 'mocks')
  )
    return;

  config.kit.prerender.entries.push('/' + appdir);
});

// ------------------------------------------------------------------
// Techs and levels
const modules = await glob('src/modules/*.js');
for (const module of modules) {
  const moduleName = path.parse(module).name;
  config.kit.prerender.entries.push('/' + moduleName);
  config.kit.prerender.entries.push('/' + moduleName + '/test');
  config.kit.prerender.entries.push('/' + moduleName + '/test/random');

  try {
    const data = fs.readFileSync('./src/modules/' + moduleName + '.js', {
      encoding: 'utf8',
      flag: 'r'
    });

    // Extraer levels
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
        config.kit.prerender.entries.push(`/${moduleName}/${i}`);
      }

      // Añadir subpages
      levelsArray.forEach((level) => {
        const { page, subpage, module: externalModule } = level;

        if (page && subpage && externalModule) {
          const entry = `/${externalModule}/${page}/${subpage}`;
          config.kit.prerender.entries.push(entry);
        } else if (page && subpage) {
          const entry = `/${moduleName}/${page}/${subpage}`;
          config.kit.prerender.entries.push(entry);
        }
      });

    } else {
      config.kit.prerender.entries.push('/' + moduleName + '/0');
    }

    // Extraer preguntas
    const questionsRegex = /export const questions = (\[.*?\]);/s;
    const matchQuestions = data.match(questionsRegex);
    if (matchQuestions && matchQuestions[1]) {
      const fixedQuestions = matchQuestions[1].replace(/type: (?:Choose|Fill|FillCode|Info)\s*,\n/g, '');
      let questionsArray;
      try {
        questionsArray = Function(`return ${fixedQuestions}`)();
        for (let i = 1; i <= questionsArray.length; i++) {
          config.kit.prerender.entries.push(`/${moduleName}/test/random/${i}`);
          config.kit.prerender.entries.push(`/${moduleName}/${i}`);
        }
      } catch (err) {
        console.error(`[!] Error parsing questions for ${moduleName}`, err);
        config.kit.prerender.entries.push(`/${moduleName}/test/random/0`);
      }
    } else {
      config.kit.prerender.entries.push('/' + moduleName + '/test/random/0');
    }
  } catch (error) {
    config.kit.prerender.entries.push('/' + moduleName + '/0');
    config.kit.prerender.entries.push('/' + moduleName + '/test/random/0');
  }
}

// Unificar y exportar
config.kit.prerender.entries = [...new Set(config.kit.prerender.entries)];
export default config;
