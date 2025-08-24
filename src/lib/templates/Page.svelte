<script>
  import Tab from '$lib/components/Tab.svelte';
  import IconList from '$lib/components/IconList.svelte';
  import NextLevelButton from '$lib/components/NextLevelButton.svelte';
  import PrevLevelButton from '$lib/components/PrevLevelButton.svelte';

  export let resources = [];
</script>

<div role="tablist" class="tabs tabs-bordered mt-3 overflow-x-hidden">
  <Tab checked="true" title="Contenido">
    <section>
      <slot />
    </section>
    <div class="flex w-full my-3 overflow-x-hidden">
      <div class="grid h-20 flex-grow card rounded-box place-items-center">
        <PrevLevelButton message="Lección anterior" />
      </div>
      <div class="divider divider-horizontal"></div>
      <div class="grid h-20 flex-grow card rounded-box place-items-center">
        <NextLevelButton message="Siguiente lección" />
      </div>
    </div>
  </Tab>

  {#if resources.length >= 1}
    <Tab title="Recursos" icon="list">
      <IconList list={resources} />
    </Tab>
  {/if}
</div>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Victor+Mono:wght@100..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style>
  :global(section > h1) {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
    margin-bottom: 1rem;
    font-weight: 500;
  }

  :global(section > h2) {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    margin-bottom: 1rem;
    font-weight: 500;
  }

  :global(section > h3) {
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
    margin-bottom: 1rem;
    font-weight: 500;
  }

  :global(section > p) {
    line-height: 1.625;
    margin-bottom: 0.5rem;
  }

  :global(section > a) {
    color: #1a73e8;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid #7dd3fc;
  }
</style>
