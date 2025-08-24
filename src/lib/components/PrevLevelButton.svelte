<script>
  import { page } from '$app/stores';
  import Alert from '$lib/components/Alert.svelte';

  export let message = 'Nivel anterior';
  export let inTestMode = false;
  export let isSolved = undefined;

  const voidFunction = () => '';
  const path = $page.params.path;
  const pageid = $page.params.pageid;
  const subpage = $page.params.subpage;

  let moduleContent;
  let levelIndex = null;
  let prevLevel = null;

  function findIndex(array, pageid, subpage) {
    const slug = subpage ? `${pageid}/${subpage}` : pageid;
    return array.findIndex((x) => x.page === slug);
  }

  function getPrevLevel(array, index) {
    const prev = array[index - 1];

    if (!prev || index - 1 <= 0) return null;

    if (prev.module && prev.page) {
      return `/${prev.module}/${prev.page}`;
    } else if (prev.page) {
      return `/${path}/${prev.page}`;
    } else {
      return `/${path}/${index - 1}`;
    }
  }
</script>

<div class="w-full float-left" class:hidden={inTestMode == true || isSolved == false}>
  {#await import(`../../modules/${path}.js` /* @vite-ignore */)}
    <span class="loading loading-spinner loading-md m-5"></span>
  {:then module}
    {voidFunction((moduleContent = module.levels))}

    {#if isNaN(pageid)}
      {voidFunction((levelIndex = findIndex(module.levels, pageid, subpage)))}
    {:else}
      {voidFunction((levelIndex = parseInt(pageid)))}
    {/if}

    {#if levelIndex > 1}
      {voidFunction((prevLevel = getPrevLevel(module.levels, levelIndex)))}
      <a class="rounded btn btn-outline btn-primary w-full no-animation" href={prevLevel}
        >{message}</a
      >
    {/if}
  {:catch error}
    <Alert type="error" message={error} showAlert="true" />
  {/await}
</div>
