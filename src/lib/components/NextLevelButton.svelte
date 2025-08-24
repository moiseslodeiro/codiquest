<script>
  import { page } from '$app/stores';
  import Alert from '$lib/components/Alert.svelte';

  export let message = 'Siguiente nivel';
  export let inTestMode = false;
  export let isSolved = undefined;

  const voidFunction = () => '';
  const id = $page.params.id || $page.params.pageid;
  const subpage = $page.params.subpage;
  const tech = $page.params.path;

  let nextLevel = null;
  let moduleContent;

  function findIndexBySlug(array, slug) {
    if (subpage != undefined) {
      slug = slug + '/' + subpage;
    }

    return array.findIndex((x) => x.page == slug);
  }

  function getNextLevelById(array, id) {
    let nextId = null;

    if (!parseInt(id) || isNaN(id)) {
      nextId = findIndexBySlug(array, id) + 1;
    } else {
      nextId = parseInt(id) + 1;
    }

    if (array[nextId] === undefined) {
      return undefined;
    } else {
      if (array[nextId].page != undefined) {
        return subpage == undefined ? `${array[nextId].page}` : `../${array[nextId].page}`;
      } else if (array[nextId].module != undefined) {
        return `../${array[nextId].module}`;
      } else if (array[nextId].page != undefined) {
        return `${array[nextId].page}`;
      } else if (subpage == undefined) {
        return nextId;
      } else {
        return nextId;
      }
    }
  }
</script>

<div class="w-full float-right" class:hidden={inTestMode == true || isSolved == false}>
  {#await import(`../../modules/${tech}.js` /* @vite-ignore */)}
    <span class="loading loading-spinner loading-md m-5"></span>
  {:then module}
    {voidFunction((moduleContent = module.levels))}
    {voidFunction((nextLevel = getNextLevelById(module.levels, id)))}

    {#if nextLevel === undefined || nextLevel === 0}
      <span class="rounded btn btn-neutral w-full no-animation"
        >Esto es todo, ¡vuelve pronto para más!</span
      >
    {:else}
      <a class="rounded btn btn-primary w-full no-animation" href={nextLevel}>{message}</a>
    {/if}
  {:catch error}
    <Alert type="error" message={error} showAlert="true" />
  {/await}
</div>
