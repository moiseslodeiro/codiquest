<script>
  import { page } from '$app/stores';
	import { icons } from '$lib/icons.js';
  import Load from '$lib/Load.svelte';
  import Error from '$lib/Error.svelte';
  
  export let id = $page.params.id;
  </script>
  
  



  <nav class="breadcrumb  container is-fluid" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">~</a></li>
    <li><a href="#">{@html icons['js']}</a></li>
    <li class="is-active"><a href="#" aria-current="page">Nivel { id }</a></li>
  </ul>
</nav>





{#await import(`../../../levels/js/${ id }.svelte` /* @vite-ignore */)}
    <Load />
{:then module}
  <svelte:component this={ module.default }/>
{:catch error}
  <Error message="{ error }" />
{/await}