<script>
  import { onMount } from 'svelte';
  import { sanitize } from '$lib/utils/sanitize.js';

  import '$lib/third/prism/prism.css';
  import '$lib/third/prism/prism.js';

  export let showLines = true;
  export let codeLang = 'hcl';
  export let codeBlock = ``;

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
  <div translate="no" class="mockup-code overflow-x-auto my-3">
    <pre class="md:text-sm">
      <code class={'language-' + codeLang}>{@html sanitize(prismBlock)}</code></pre>
  </div>
{:else}
  <div class="mockup-code overflow-x-auto my-3">
    <pre class="md:text-sm px-4 py-2 text-sm italic text-gray-500">Cargando…</pre>
  </div>
{/if}

<style>
  .mockup-code {
    background-color: #1b1825;
    padding: 0px;
  }

  .mockup-code::before {
    content: '';
    position: absolute;
    top: 0.75rem;
    left: 1rem;
    display: flex;
    gap: 0.5rem;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    margin-bottom: 1;
    opacity: 1;
    background: #fc5e56;
    box-shadow:
      1.4em 0 #ffbd30,
      2.8em 0 #26ca3f;
  }

  @media (max-width: 640px) {
    .mockup-code::before {
      top: 0.8rem;
      left: 0.8rem;
      width: 0.3rem;
      height: 0.3rem;
      background: #fc5e56;
      box-shadow:
        1rem 0 #ffbd30,
        2rem 0 #26ca3f;
    }
  }

  .hidden {
    display: none;
  }

  pre {
    background-color: #1b1825;
    white-space: pre;
    padding: 0.5rem 1rem 0.5rem 0 !important;
    margin: 0 !important;
    overflow-x: auto;
  }

  pre code {
    background-color: #1b1825;
    font-family: 'Victor Mono', 'Consolas', monospace;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-style: normal;
    display: block;
    margin-left: 20px;
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
</style>
