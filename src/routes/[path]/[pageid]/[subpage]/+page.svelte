<script>
  import Error from '$lib/components/Error.svelte';
  import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
  import { page } from '$app/stores';

  const allModules = import.meta.glob('../../../../modules/**/*.svelte');

  async function loadSvelteComponent(path) {
    const loader = allModules[path];
    if (!loader) {
      throw new Error(`Archivo no encontrado: ${path}`);
    }
    return await loader();
  }

  export let tech = $page.params.path;
  export let levelParam = $page.params.pageid;
  export let subpage = $page.params.subpage;

  let module;
  let levelIndex = null;

  const modulePromise = import(`../../../../modules/${tech}.js` /* @vite-ignore */).then((mod) => {
    if (!isNaN(levelParam)) {
      levelIndex = +levelParam;
    } else {
      levelIndex = findIndexBySlug(mod.levels, levelParam + '/' + subpage);
    }

    return mod;
  });

  function findIndexBySlug(array, slug) {
    return array.findIndex((item) => item.page === slug);
  }
</script>

{#await modulePromise}
  <span class="loading loading-spinner loading-md m-5"></span>
{:then module}
  {#if levelIndex === null || !module.levels[levelIndex]}
    <Error title="404" icon="storm" message="No son los androides que buscamos..." />
  {:else if module.levels[levelIndex].module}
    {#await loadSvelteComponent(`../../../../modules/${tech}/${levelParam}/${subpage}.svelte` /* @vite-ignore */) then External}
      <BreadCrumbs {tech} title={module.levels[levelIndex].title} />
      <External.default {...module.levels[levelIndex]} />
    {:catch error}
      <Error title="Error cargando módulo externo" message={error.message} />
    {/await}
  {:else}
    {#await loadSvelteComponent(`../../../../modules/${tech}/${levelParam}/${subpage}.svelte` /* @vite-ignore */) then SubPage}
      <BreadCrumbs {tech} title={module.levels[levelIndex].title} {subpage} } />
      <SubPage.default {...module.levels[levelIndex]} />
    {:catch error}
      <Error title="Subnivel no encontrado" message={error.message} />
    {/await}
  {/if}
{:catch error}
  <Error title="Error cargando módulo" message={error.message} />
{/await}
