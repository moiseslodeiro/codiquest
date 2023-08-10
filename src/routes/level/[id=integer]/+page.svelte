<script>
  import { page } from '$app/stores';
  export let id = $page.params.id;
  let LevelComponent;
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
  
  <h1>Nivel: {id}</h1>
  
  {#if LevelComponent}
    <svelte:component this={ LevelComponent } />
  {:else}
    <p><img src="/favicon.png" alt="Have a Coddy day!"/></p>
  {/if} 