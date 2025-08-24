<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  export let image = 'codibg.webp';
  export let hasShadow = false;
  export let linksTo = '';
  export let isNew = false;
  export let title = '';
  export let tags = [];
  export let color = 'decoration-amber-300';

  onMount(async () => {
    try {
      const _tmpImg = image;
      image = await fetch(`${base}/img/${image}`);
      image = image.status == 200 ? _tmpImg : 'undefined';
    } catch (e) {
      image = 'list.svg';
    }
  });
</script>

<div
  class="card flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 py-2 px-4 bg-base-100 {hasShadow
    ? 'shadow-xl'
    : ''}"
>
  <figure class="max-h-40">
    <img src="{base}/img/{image}" onerror="this.src='{base}/img/codibg.webp'" alt={title} />
  </figure>
  <div class="card-body px-0 py-2">
    <h2 class="card-title">
      <a class="underline decoration-1 {color} underline-offset-8" href="{base}/{linksTo}"
        >{title}</a
      >
      {#if isNew}<div class="badge badge-secondary">Nuevo</div>{/if}
    </h2>
    <p><a href="{base}/{linksTo}"><slot /></a></p>
    {#if tags.length > 0}
      <div class="card-actions justify-end">
        {#each tags as tag}
          <div class="badge badge-outline">{tag}</div>
        {/each}
      </div>
    {/if}
  </div>
</div>
