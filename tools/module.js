import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2);
console.log(process.argv)

if (args.length === 0) {
  console.log(`
Codiquest markdown module parser

Usage:
  node tools/module.js <path> [module_name] [public/private]

Example:
  node tools/module.js docs/modules
  node tools/module.js docs/publish publicar
  node tools/module.js docs/publish publicar private
  `.trim());
  process.exit(0);
}

const inputPath = args[0];
const fullPath = path.join(__dirname, '..', inputPath);

if (!fs.existsSync(fullPath)) {
  console.error(`ಠᴥಠ ERROR: File not found: ${fullPath}`);
  process.exit(1);
}


// Functions
function parseBrowserBlocks(content) {
  return content.replace(
    /````[ \t]*Browser[^\n]*\n([\s\S]*?)````/g,
    (_, inner) => {
      return `:::BROWSER:::\n${inner.trim()}\n:::_BROWSER:::`;
    }
  );
}

function maskHashesInFileBlocks(content) {
  return content.replace(
    /````\s*File\b([^\n]*)\n([\s\S]*?)\n````/g,
    (match, props, body) => {
      let maskedBody = body
        .replaceAll(/^# /gm, ':::FILE_HASH::: ')
        .replaceAll(/^#{2}/gm, ':::FILE_2HASH::: ')
        .replaceAll(/^#{3}/gm, ':::FILE_3HASH::: ')
        .replaceAll(/^#{4}/gm, ':::FILE_4HASH::: ')
        .replaceAll(/\$/gm, ':::DOLLAR:::')
        .replaceAll(/!\[/g, ':::FILE_IMG:::');
      return `\`\`\`\` File${props}\n${maskedBody}\n\`\`\`\``;
    }
  );
}

function slugify(text, maxLength = 100) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s\-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, maxLength);
}

function parseMessageBlocks(content) {
  return content.replace(
    /^\[!(\w+)\]\s+(.+)$/gm,
    (_, type, text) => `<Message type="${type.toUpperCase()}">${text.trim()}</Message>`
  );
}

function parseImagesToModal(content) {
  const re = /!\[(.*?)\]\(([^)\s]+)\)/g;
  return content.replaceAll(re, (match, alt, rawPath) => {
    const [srcRaw, query = ""] = rawPath.split("?");
    const src = srcRaw.replace(/^\/?static\//, "");
    const params = new URLSearchParams(query);
    const size = params.get("s") || params.get("size") || "";
    const align = params.get("align") || "";
    const modal = params.get("modal") || "false";
    return `<ModalImage src="${src}" alignment="${align}" width="${size}" alt="${alt}" modal="${modal}" />`;
  });
}

function isTestBlock(content) {
  let insideCodeBlock = false;

  const lines = content.split('\n');
  for (let line of lines) {
    if (/^\s*```/.test(line)) {
      insideCodeBlock = !insideCodeBlock;
      continue;
    }

    if (insideCodeBlock) continue;

    if (/^\s*\[[x ]]/i.test(line)) {
      return true;
    }
  }

  return false;
}

function parseTestBlock(content, index) {
  const lines = content.trim().split('\n').filter(Boolean);
  const [text, ...answerLines] = lines;
  const answers = answerLines.map(line => {
    const match = line.match(/^\[(x| )\] (.+)/i);
    if (!match) return null;
    const correct = match[1].toLowerCase() === 'x';
    const answerText = match[2].trim();
    return `{ text: \`${answerText}\`, correct: ${correct} }`;
  }).filter(Boolean);

  return `
<!-- File created automatically by Codiquest Converter, do not modify because changes may be lost -->
<script>
  import Choose from '$lib/templates/Choose.svelte';
  const quiz_${index} = {
    checkboxes: true,
    shuffle: true,
    text: \`${text.trim()}\`,
    answers: [
      ${answers.join(',\n      ')}
    ]
  };
</script>
<Choose {...quiz_${index}} />`.trim();
}

function isFillCodeBlock(content) {
  const match = content.match(/```(\w*)\n([\s\S]+?)\n```/m);
  if (!match) return false;
  return /\$[^$\n]+\$/m.test(match[2]);
}

function parseFillCodeBlock(content, title, index) {
  const match = content.match(/^(.*?)(```(\w*)\n([\s\S]+?)\n```)([\s\S]*)$/ms);
  if (!match) return null;

  const [, rawBefore, , codeLang = 'txt', codeBlock, rawAfter] = match;

  const before = marked.parse(parseImagesToModal(parseMessageBlocks(rawBefore.trim()))).trim();
  const after = marked.parse(parseImagesToModal(parseMessageBlocks(rawAfter.trim()))).trim();

  return `
<!-- File created automatically by Codiquest Converter, do not modify because changes may be lost -->
<script>
  import FillCode from '$lib/templates/FillCode.svelte';
  import Message from '$lib/components/Message.svelte';

  let title = ${JSON.stringify(title)};
  let codeLang = ${JSON.stringify(codeLang)};
  let shuffle = true;
  let codeBlock = \`${codeBlock.replace(/`/g, '\\`')}\`;
</script>

${before}
<FillCode {title} {codeLang} {codeBlock} {shuffle} />
${after}
`.trim();
}

function extractResourcesSection(markdown) {
  const lines = markdown.split('\n');
  const resources = [];
  let insideResources = false;

  for (let line of lines) {
    if (/^##\s+(Recursos|Resources)/i.test(line)) {
      insideResources = true;
      continue;
    }

    if (insideResources) {
      if (/^#{1,6}\s+/.test(line)) break;
      const match = line.match(/^- \[(.+?)\]\((.+?)\)/);
      if (match) {
        resources.push({
          title: match[1],
          url: match[2]
        });
      }
    }
  }

  return resources;
}

function removeResourcesSection(markdown) {
  const lines = markdown.split('\n');
  const newLines = [];
  let insideResources = false;

  for (let line of lines) {
    if (/^##\s+(Recursos|Resources)/i.test(line)) {
      insideResources = true;
      continue;
    }

    if (insideResources) {
      if (/^#{1,6}\s+/.test(line)) {
        insideResources = false;
        newLines.push(line);
      }
      continue;
    }

    newLines.push(line);
  }

  return newLines.join('\n');
}

// Defs
let markdown = fs.readFileSync(fullPath, 'utf-8');
markdown = maskHashesInFileBlocks(markdown);

const renderer = new marked.Renderer();

renderer.code = (code, language = '') => {
  const escapeHtml = str =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;');

  const componentMatch = language.match(/^([A-Z][\w]*)\s+(.*)/);
  if (componentMatch) {
    const [, component, props] = componentMatch;

    const escapeSlotContent = str =>
      str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;');

    const safeContent = escapeSlotContent(code.trim());

    return `<${component} ${props}>
${safeContent}
</${component}>`;
  }

  const escaped = escapeHtml(code);
  return `<Code codeLang="${language}">
${escaped}
</Code>`;
};

renderer.link = (href, title, text) => {
  const escapeHtml = str =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const safeHref = ((href.startsWith('/')) ? '{base}' : '') + escapeHtml(href);
  const safeTitle = title ? ` title="${escapeHtml(title)}"` : '';
  const safeText = escapeHtml(text);
  const url = new URL(href, 'https://codiquest.com'); // fallback url
  const hostname = url.hostname;

  let domainClass = '';

  if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
    domainClass = 'yt';
  } else if (hostname.includes('medium.com')) {
    domainClass = 'medium';
  } else if (hostname.includes('dev.to')) {
    domainClass = 'devto';
  } else if (hostname.includes('wikipedia.org')) {
    domainClass = 'wikipedia';
  } else if (hostname.includes('lenguajejs.com') || hostname.includes('lenguajecss.com')) {
    domainClass = 'manz';
  } else if (hostname.includes('github.com')) {
    domainClass = 'github';
  } else if (/^https?:/.test(href)) {
    domainClass = 'external';
  } else if (hostname.includes('codiquest.com') || hostname.startsWith('/')) {
    domainClass = 'internal';
  } else {
    console.log(hostname)
  }

  const rel = /^https?:/.test(href) ? ' rel="noopener noreferrer"' : '';
  const target = /^https?:/.test(href) ? ' target="_blank"' : '';

  return `<a href="${safeHref}" class="link link-primary ${domainClass}"${safeTitle}${target}${rel}>${safeText}</a>`;
};


marked.setOptions({ gfm: true, breaks: true, renderer });

marked.use({
  walkTokens(token) {
    if (token.type === 'paragraph' && /^::: code\s*/.test(token.raw)) {
      const match = token.raw.match(/^::: code\s*(\w*)\n([\s\S]+?)\n:::/);
      if (match) {
        token.type = 'code';
        token.lang = match[1] || '';
        token.text = match[2].trim();
        token.tokens = [];
        token.fenced = true;
      }
    }
    if (token.type === 'paragraph' && token.text?.startsWith('[!')) {
      const match = token.text.match(/^\[!(\w+)\]\s+([\s\S]+)/);
      if (match) {
        token.type = 'message';
        token.messageType = match[1].toUpperCase();
        token.text = match[2].trim();
      }
    }
  },
  extensions: [
    {
      name: 'message',
      level: 'block',
      start(src) {
        return src.match(/^\[!(\w+)\]/)?.index;
      },
      tokenizer(src) {
        const rule = /^\[!(\w+)\]\s+(.+?)(?:\n|$)/;
        const match = rule.exec(src);
        if (match) {
          return {
            type: 'message',
            raw: match[0],
            messageType: match[1].toUpperCase(),
            text: match[2].trim()
          };
        }
      },
      renderer(token) {
        const escapedText = token.text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/{/g, '&#123;')
          .replace(/}/g, '&#125;');

        return `<Message type="${token.messageType}">${escapedText}</Message>`;
      }
    }
  ]
});



const lines = markdown.split('\n');
const sections = [];
let current = null;

for (const line of lines) {
  const match = line.match(/^# (.+)/);
  if (match) {
    if (current) sections.push(current);
    const title = match[1].trim();
    current = { title, slug: slugify(title), content: '' };
  } else if (current) {
    current.content += line + '\n';
  }
}
if (current) sections.push(current);

const [introSection, ...contentSections] = sections;
let moduleName = (args[1] || path.basename(fullPath, '.md')).replace('.module', '');

const moduleBaseDir = path.join(__dirname, '..', 'src', 'modules');
const moduleFolder = path.join(moduleBaseDir, moduleName);
fs.mkdirSync(moduleFolder, { recursive: true });
const outputDir = moduleFolder;

contentSections.forEach((section, i) => {
  const raw = section.content.trim();
  const resources = extractResourcesSection(raw);

  let parsed = '';

  if (isTestBlock(raw)) {
    parsed = parseTestBlock(raw, i);
  } else if (isFillCodeBlock(raw)) {
    parsed = parseFillCodeBlock(raw, section.title, i);
  } else {
    const enhanced = parseImagesToModal(parseMessageBlocks(parseBrowserBlocks(removeResourcesSection(raw))));
    const safeHtml = marked.parse(enhanced).trim()
      .replaceAll(/(?<!\\)\{/g, '&#123;')
      .replaceAll(/(?<!\\)\}/g, '&#125;')
      .replaceAll(/:::FILE_HASH:::/g, '#')
      .replaceAll(/:::FILE_2HASH:::/g, '##')
      .replaceAll(/:::FILE_3HASH:::/g, '###')
      .replaceAll(/:::FILE_4HASH:::/g, '####')
      .replaceAll(/:::FILE_IMG:::/g, '![')
      .replaceAll(/:::DOLLAR:::/g, '$')
      .replaceAll(/\\`/g, '`')
      // Fixes of shame
      .replaceAll(/(\<p\>)?:::BROWSER:::(\<\/p\>|\<br\>)?/g, '<Browser>')
      .replaceAll(/(\<p\>)?:::_BROWSER:::(\<\/p\>)?/g, '</Browser>')
      .replaceAll(':::BROWSER:::<br>', '<Browser>')
      .replaceAll(/<\/Message><\/Browser>\n?<\/blockquote>/gm, '</Message></blockquote></Browser>')
      .replaceAll('<p><Browser>', '<Browser><p>')
      .replaceAll('<br>:::_BROWSER:::</p>', '</p></Browser>')
      .replaceAll(/\<Browser\>(.*)?\<\/p\>/g, '<Browser><p>$1</p>')
      .replaceAll('&#123;base&#125;', '{base}');

    parsed = `
<!-- File created automatically by Codiquest Converter, do not modify because changes may be lost -->
<script>
  import Alert from '$lib/components/Alert.svelte';
  import Code from '$lib/components/Code.svelte';
  import Message from '$lib/components/Message.svelte';
  import ModalImage from '$lib/components/ModalImage.svelte';
  import Page from '$lib/templates/Page.svelte';
  import File from '$lib/components/File.svelte';
  import Browser from '$lib/components/Browser.svelte';
  import { base } from '$app/paths';
`

    if (resources.length > 0) {
      parsed += `
  const resources = ${JSON.stringify(resources, null, 2)};`;
    }

    parsed += `</script>`.trim();
    const pageOpenTag = resources.length > 0 ? '<Page {resources}>' : '<Page>';
    parsed += pageOpenTag + `
${safeHtml}
</Page>
<style>
ul,
ol {
  padding-left: 1.5rem;
  margin-left: 0;
  margin-bottom: 10px;
}

ul > li,
ol > li {
  #list-style-position: inside;
}

ol > li {
  list-style-type: decimal-leading-zero;
}

ul {
  list-style-type: disc;
  margin-bottom: 10px;
}

ul ul {
  padding-left: 1.25rem;
  list-style-type: circle;
}

ul ul ul {
  padding-left: 1.25rem;
  list-style-type: square;
}

ul ul ul ul {
  padding-left: 1.25rem;
  list-style-type: disc;
}

hr {
  margin: 10px 0 10px 0;
  clear: both;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;}
</style>
`.trim();
  }

  const outPath = path.join(outputDir, `${section.slug}.svelte`);
  fs.writeFileSync(outPath, parsed, 'utf-8');
});

// index.svelte
const introRaw = introSection.content.trim();
const enhancedIntro = parseImagesToModal(parseMessageBlocks(introRaw));

const parsedIntro = `
<!-- File created automatically by Codiquest Converter, do not modify because changes may be lost -->
<section>
${marked.parse(enhancedIntro).trim()}
</section>
<style>
	p {
		line-height: 1.625;
		margin-bottom: 0.5rem;
	}
	ul > li {
		list-style: inside;
	}
  ol > li {
  		list-style: decimal-leading-zero;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 10px;

  }
</style>
`.trim();

const indexPath = path.join(outputDir, 'index.svelte');
fs.writeFileSync(indexPath, parsedIntro, 'utf-8');

// +page.js
const prerenderPagePath = path.join(moduleFolder, '+page.js');
const prerenderPageContent =
  `// This file has been automatically generated by Codiquest parser. Do not edit it by hand or your changes will be lost\n` +
  `export const prerender = true;`;
fs.writeFileSync(prerenderPagePath, prerenderPageContent, 'utf-8');

// levels.auto.js
const levelsArray = sections.map((section, i) => {
  const isIndex = i === 0;
  const page = isIndex ? 'index' : section.slug;
  const title = isIndex ? null : section.title;
  return title ? { page, title } : { page };
});

const levelsJsPath = path.join(moduleFolder, 'levels.auto.js');
const levelsContent =
  `// This file has been automatically generated by Codiquest parser. Do not edit it by hand or your changes will be lost\n\n` +
  `export const levels = ${JSON.stringify(levelsArray, null, 2)};\n`;
fs.writeFileSync(levelsJsPath, levelsContent, 'utf-8');

// questions.auto.js
const questionsJsPath = path.join(moduleFolder, 'questions.auto.js');
const questionsContent =
  `// This file has been automatically generated by Codiquest parser. Do not edit it by hand or your changes will be lost\n\n` +
  `export const questions = ${JSON.stringify([], null, 2)};\n`;

if (!fs.existsSync(questionsJsPath)) {
  fs.writeFileSync(questionsJsPath, questionsContent, 'utf-8');
} else {
  console.info(`[+] File ` + questionsJsPath + ` already exists, skipping creation. If you want to recreate it, delete the file first or use convert.js script to parse the module questions`);
}

const mainModulePath = path.join(moduleBaseDir, `${moduleName}.js`);
if (!fs.existsSync(mainModulePath)) {
  const moduleJsContent = `
// Created using Codiquest Markdown Parser. You can edit this file safely (it won't be overwritten by the parser),
// Drink water, stay active and keep coding! | •⩊• |

export const moduleInfo = {
  title: '${moduleName[0].toUpperCase() + moduleName.slice(1)}',
  shortDescription: 'Welcome to my ${moduleName} module!',
  public: ${(args[2] === 'public' || process.env.PUBLIC === 'true') ? 'true' : 'false'},
  linksTo: '${moduleName}',
  image: 'codibg.webp',
  tags: ["${moduleName}"],
  isNew: true
};

import { levels } from './${moduleName}/levels.auto.js';
import { questions } from './${moduleName}/questions.auto.js';

export { levels, questions };

// Uncomment the following lines to automatically add all questions to the levels array
// questions.forEach((_, i) => levels.push({ question: i, title: \`Pregunta \${i + 1}\` }));
`;

  fs.writeFileSync(mainModulePath, moduleJsContent, 'utf-8');
}
