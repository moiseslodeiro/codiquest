<script>
  import { page } from '$app/stores';
	import { icons } from '$lib/icons.js';
  export let id = $page.params.id;
  </script>
  
  
  <nav>
    <ul>
      <li><a href="#" class="secondary">…</a></li>
    </ul>
    <ul>
      <li><strong>CodiQuest</strong></li>
    </ul>
    <ul>
      <li><a href="#" class="secondary">…</a></li>
    </ul>
    </nav>
  
    <nav aria-label="breadcrumb">
      <ul>
        <li><a href="#">~</a></li>
        <li><a href="#">{@html icons['js']}</a></li>
        <li>Nivel { id }</li>
      </ul>
    </nav>
  


{#await import(`../../../levels/js/${ id }.svelte` /* @vite-ignore */) then module}
  <svelte:component this={ module.default }/>
{/await}