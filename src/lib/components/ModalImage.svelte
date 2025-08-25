<script>
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  export let src = '';
  export let alt = '';
  export let width = 'w-1/4';
  export let modal = false;
  export let alignment = 'center';

  let showModal = false;
  let isModalEnabled = undefined;

  function resolveSrc(path) {
    return path.startsWith('http://') || path.startsWith('https://') ? path : `${base}/${path}`;
  }

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  $: alignmentClass = alignment === 'center' ? 'mx-auto block clear-both' : `float-${alignment}`;

  onMount(async () => {
    modal = modal === 'true' ? true : false;
    isModalEnabled = modal && width !== 'w-full';
  });
</script>

{#if isModalEnabled}
  <button
    on:click={openModal}
    aria-label="Abrir imagen ampliada"
    data-testid="image-button"
    class="rounded mx-2 p-2 mb-4 border-2 bg-transparent cursor-pointer w-full sm:{width} {alignmentClass}"
  >
    <img src={resolveSrc(src)} {alt} class="rounded w-full object-cover" loading="lazy" />
  </button>
{:else}
  <img
    src={resolveSrc(src)}
    {alt}
    class="rounded mx-2 border-2 {width} {alignmentClass}"
    loading="lazy"
  />
{/if}

{#if isModalEnabled && showModal}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center"
    aria-modal="true"
    role="dialog"
    data-testid="modal-overlay"
  >
    <button
      type="button"
      aria-label="Cerrar modal"
      class="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm cursor-pointer"
      on:click={closeModal}
    ></button>
    <div
      class="relative z-50 bg-white rounded-lg shadow-lg w-[90vw] max-w-5xl max-h-[90vh] overflow-auto"
    >
      <picture class="p-4">
        <source srcset={resolveSrc(src)} type="image/jpg" />
        <img
          src={resolveSrc(src)}
          {alt}
          loading="lazy"
          class="max-w-full max-h-[80vh] object-contain mx-auto"
        />
      </picture>
      <div class="p-4 text-center">{alt}</div>
    </div>
  </div>
{/if}
