import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fn = fileURLToPath(import.meta.url);
const dn = path.dirname(fn);
const name = process.argv[2];

if (!name) {
  console.error('[Error] Insert a module name: npm run newmodule your_new_module');
  process.exit(1);
}

const baseDir = path.join(dn, '..', 'src', 'modules');
const moduleFilePath = path.join(baseDir, `${name}.js`);
const moduleFolder = path.join(baseDir, name);
const pageJsPath = path.join(moduleFolder, '+page.js');
const sveltePath = path.join(moduleFolder, 'index.svelte');
const testFolder = path.join(moduleFolder, 'basic');
const testPagePath = path.join(testFolder, '+page.js');
const testSveltePath = path.join(testFolder, 'helloworld.svelte');

const moduleJsContent = `
export const moduleInfo = {
  title: '${name}',
  shortDescription: 'This is my super awesomic new module',
  public: true,
  linksTo: '${name}'
};

export const levels = [
  {
    page: 'index'
  },
  {
    page: 'basic/helloworld',
    title: 'Hello world!'
  }
];
export const questions = [];
`.trim();

const pageJsContent = `export const prerender = true;`;
const svelteContent = `Edit me, ${name}!`;

const testPageContent = `export const prerender = true;`;
const testSvelteContent = `<h1>Hello world! 👋🌍</h1>`;

fs.mkdirSync(moduleFolder, { recursive: true });
fs.mkdirSync(testFolder, { recursive: true });

fs.writeFileSync(moduleFilePath, moduleJsContent);
fs.writeFileSync(pageJsPath, pageJsContent);
fs.writeFileSync(sveltePath, svelteContent);
fs.writeFileSync(testPagePath, testPageContent);
fs.writeFileSync(testSveltePath, testSvelteContent);

console.log(`Module '${name}' created with test/basic/helloworld.svelte!`);
