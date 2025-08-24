<script>
  import { onMount } from 'svelte';
  import { sanitize } from '$lib/utils/sanitize.js';
  import { base } from '$app/paths';

  import '$lib/third/prism/prism.css';
  import '$lib/third/prism/prism.js';

  export let showLines = true;
  export let codeLang = 'hcl';
  export let codeBlock = ``;
  export let icon = 'list';
  export let route;
  export let name;

  let data;
  let prismBlock = '';
  let isReady = false;
  const nullishLang = { comment: /^$/ };

  function decodeHTMLEntities(str) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = str;
    return textarea.value;
  }

  function removeSharedIndentation(lines) {
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');
    const minIndent = nonEmptyLines.reduce((min, line) => {
      const match = line.match(/^ */);
      return match ? Math.min(min, match[0].length) : min;
    }, Infinity);
    return lines.map((line) => line.slice(minIndent));
  }

  async function render(code) {
    await waitForPrism();

    const lang = Prism.languages[codeLang] || nullishLang;
    const cleanedLines = removeSharedIndentation(code.split('\n'));

    if (showLines) {
      const highlightedLines = cleanedLines.map((line, idx) => {
        const html = Prism.highlight(line || ' ', lang, codeLang);
        return `<span class="line" data-line-number="${idx + 1}"><span>${html}</span></span>`;
      });
      prismBlock = highlightedLines.join('\n');
    } else {
      prismBlock = Prism.highlight(cleanedLines.join('\n'), lang, codeLang);
    }

    isReady = true;
  }

  function waitForPrism() {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (window.Prism?.highlight) {
          clearInterval(interval);
          resolve();
        }
      }, 10);
    });
  }

  onMount(async () => {
    if (typeof showLines === 'string') showLines = showLines === 'true';

    if (codeBlock?.trim()) {
      await render(codeBlock.trimEnd());
      return;
    }

    if ($$slots.default) {
      const interval = setInterval(async () => {
        if (data?.innerHTML?.trim()) {
          const raw = data.innerHTML
            .replace(/^<div[^>]*>/, '')
            .replace(/<\/div>$/, '')
            .trim();
          const decoded = decodeHTMLEntities(raw);
          await render(decoded);
          clearInterval(interval);
        }
      }, 50);
    }
  });
</script>

<div class="hidden" bind:this={data}><slot /></div>

{#if isReady}
  <div translate="no" class="mockup-file overflow-x-auto bg-slate-900 rounded-sm mb-2">
    {#if name || (route && route.length > 0)}
      <div
        class="bg-slate-950 text-slate-100 flex items-center px-4 py-2 border-t-2 border-amber-500 rounded-t-sm"
      >
        <img class="h-4 mr-2" alt="Icono de {icon}" src="{base}/icons/{icon}.svg" />
        <span class="text-cyan-300 text-sm font-semibold">{name || 'file'}</span>
      </div>
    {/if}

    {#if route && route.length > 0}
      <div
        class="text-xs breadcrumbs bg-slate-900 pl-5 pt-1 pb-1 select-none text-slate-300 font-mono"
      >
        <ul>
          {#each route.split(',') as path, i (path)}
            <li>{path}</li>
          {/each}
        </ul>
      </div>
    {/if}

    <pre class="md:text-sm m-0 px-5 py-1"><code class={'language-' + codeLang}
        >{@html sanitize(prismBlock)}</code
      ></pre>
  </div>
{:else}
  <div class="mockup-file overflow-x-auto my-3">
    <pre class="md:text-sm px-4 py-2 text-sm italic text-gray-500">Cargando…</pre>
  </div>
{/if}

<style>
  .mockup-file {
    background-color: #1b1825;
  }

  .hidden {
    display: none;
  }

  pre {
    background-color: #1b1825;
    white-space: pre;
    margin: 0 0 10 0;
    overflow-x: auto;
  }

  pre code {
    background-color: #1b1825;
    font-family: 'Victor Mono', 'Consolas', monospace;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: block;
    margin-bottom: 10px;
  }

  :global(.line) {
    padding-left: 1rem;
    position: relative;
  }

  :global(.line)::before {
    content: attr(data-line-number);
    position: sticky;
    left: 0;
    width: 2rem;
    display: inline-block;
    text-align: right;
    padding-right: 0.5rem;
    background-color: #1b1825;
    margin-left: -2rem;
    color: #999;
    user-select: none;
    font-variant-numeric: tabular-nums;
    z-index: 1;
  }

  :global(.line > span:first-child) {
    margin-left: 1rem;
  }

  .breadcrumbs ul {
    display: flex;
    gap: 0.5rem;
    padding-left: 0;
    list-style: none;
  }

  .breadcrumbs li::after {
    content: '';
    margin-left: 0.25rem;
  }

  .breadcrumbs li:last-child::after {
    content: '';
  }
</style>
