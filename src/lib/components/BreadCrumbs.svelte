<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { sanitize } from '$lib/utils/sanitize.js';

  export let tech;
  export let title;
  export let subpage;
  export let linksTo = '#';

  let techIcon = 'list';
  let techTitle = onMount(async () => {
    try {
      techIcon = await fetch(`${base}/icons/${tech}.svg`);
      const text = await techIcon.text();
      techIcon = techIcon.status == 200 && text.startsWith('<svg') ? tech : 'undefined';
    } catch (e) {
      techIcon = 'undefined';
    }

    techTitle = tech
      .split('_')
      .map((word) => word.toLowerCase())
      .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
      .join(' ');
  });
</script>

<div class="text-sm breadcrumbs mt-1">
  <ul>
    <li>
      <span class="inline-flex gap-2 items-center">
        <a href="{base}/">~</a>
      </span>
    </li>

    {#if tech !== undefined}
      <li>
        <a href="{base}/{tech}">
          <span class="inline-flex gap-2 items-center">
            <img
              src="{base}/icons/{techIcon}.svg"
              width="14"
              height="14"
              alt="Módulo"
              onerror="this.src='{base}/icons/{techIcon}.svg'"
            />
            {techTitle}
          </span>
        </a>
      </li>
    {/if}

    {#if title !== undefined}
      <li>
        <a href={linksTo}>
          <span class="inline-flex gap-2 items-center">
            {@html sanitize(title)
              .split('-')
              .map((word) => word.toLowerCase())
              .map((word, index) =>
                index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
              )
              .join(' ')}
          </span>
        </a>
      </li>
    {/if}

    {#if subpage !== undefined}
      <li>
        <a href={linksTo}>
          <span class="inline-flex gap-2 items-center">
            {@html sanitize(subpage)
              .split('-')
              .map((word) => word.toLowerCase())
              .map((word, index) =>
                index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
              )
              .join(' ')}
          </span>
        </a>
      </li>
    {/if}
  </ul>
</div>

<hr class="mt-1 mb-2" />

<style>
</style>
