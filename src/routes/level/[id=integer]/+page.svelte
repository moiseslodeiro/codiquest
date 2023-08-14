<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  export let id = $page.params.id;
  let LevelComponent;
  import Load from '$lib/Load.svelte'
  //
  // Cargamos el componente de nivel dinámicamente al inicializar la página
  async function loadLevelComponent() {
    const getComponent = () => import(`../../../levels/js/${id}.svelte`)
    if (getComponent) {
      try {
        const component = await getComponent();
        LevelComponent = component.default || component;
      } catch(e) {
        LevelComponent = null;
      }
    } else {
      LevelComponent = 1;
    }
  }
  //
  loadLevelComponent();
  </script>
  
  <nav>
    <ul>
      <li><a href="#" class="secondary">…</a></li>
    </ul>
    <ul>
      <li><strong>x</strong></li>
    </ul>
    <ul>
      <li><a href="#" class="secondary">…</a></li>
    </ul>
    </nav>
  
  <h1>Nivel: {id}</h1>
  
  {#if LevelComponent}
    <svelte:component this={ LevelComponent } />
  {:else}
    <Load />
  {/if} 