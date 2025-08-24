<script>
  import Error from '$lib/components/Error.svelte';
  import Alert from '$lib/components/Alert.svelte';
  import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
  import NextLevelButton from '$lib/components/NextLevelButton.svelte';
  import { page } from '$app/stores';

  const allModules = import.meta.glob('../../../modules/**/*.svelte');

  export let tech = $page.params.path;
  export let levelParam = $page.params.pageid;

  function findIndexBySlug(array, slug) {
    return array.findIndex((item) => item.page === slug);
  }

  async function loadSvelteComponent(path) {
    const loader = allModules[path];
    if (!loader) {
      throw new Error(`Archivo no encontrado: ${path}`);
    }
    return await loader();
  }

  async function loadModuleAndData() {
    let module = null;
    let levelIndex = null;
    let componentToRender = null;
    let title = null;

    const directPath = `../../../modules/${tech}/${levelParam}.svelte`;
    try {
      const loader = allModules[directPath];
      if (loader) {
        componentToRender = (await loader()).default;
        title = levelParam;
        return { module: null, levelIndex: null, componentToRender, title };
      }
    } catch (e) {
      console.warn(`No se pudo cargar el componente directamente: ${directPath}`);
    }

    try {
      const mainModule = await import(`../../../modules/${tech}.js` /* @vite-ignore */);
      module = mainModule;

      if (!isNaN(levelParam)) {
        levelIndex = +levelParam;
      } else {
        levelIndex = findIndexBySlug(module.levels, levelParam);
      }

      if (levelIndex !== -1 && module.levels[levelIndex]) {
        const levelData = module.levels[levelIndex];

        if (levelData.module) {
          componentToRender = (
            await loadSvelteComponent(
              `../../../modules/${levelData.module}/${levelParam}.svelte` /* @vite-ignore */
            )
          ).default;
        } else if (levelData.page) {
          componentToRender = (
            await loadSvelteComponent(
              `../../../modules/${tech}/${levelData.page}.svelte` /* @vite-ignore */
            )
          ).default;
        } else if (levelData.html) {
        } else if (levelData.question != null) {
        }
        title = levelData.title;
      } else {
        throw new Error(`Nivel "${levelParam}" no encontrado en el módulo "${tech}".`);
      }
    } catch (e) {
      throw e;
    }

    return { module, levelIndex, componentToRender, title };
  }

  const modulePromise = loadModuleAndData();
</script>

{#await modulePromise}
  <span class="loading loading-spinner loading-md m-5"></span>
{:then data}
  {#if data.componentToRender}
    <BreadCrumbs {tech} title={data.title} />
    <svelte:component this={data.componentToRender} {...data.module?.levels?.[data.levelIndex]} />
  {:else if data.module?.levels?.[data.levelIndex]?.html}
    <BreadCrumbs {tech} title={data.title} />
    {@html data.module.levels[data.levelIndex].html}
    <NextLevelButton isSolved="true" />
  {:else if data.module?.levels?.[data.levelIndex]?.question != null}
    <BreadCrumbs {tech} title={data.title} />
    {#if data.module.questions.length > data.module.levels[data.levelIndex].question}
      <svelte:component
        this={data.module.questions[data.module.levels[data.levelIndex].question].type}
        {...data.module.questions[data.module.levels[data.levelIndex].question].content}
        inTestMode="false"
        showCorrectAnswers="true"
      />
    {:else}
      <Alert
        type="error"
        message="El array de preguntas no tiene un elemento {data.module.levels[data.levelIndex]
          .question}"
      />
    {/if}
  {:else}
    <Error
      title="Contenido vacío"
      message="El índice {data.levelIndex} no tiene una página, html o pregunta definida."
    />
    <NextLevelButton isSolved="true" />
  {/if}
{:catch error}
  <Error title="Error cargando módulo" message={error.message} />
  <Alert
    type="info"
    message="Tip: ¿Has comprobado que exista la página a cargar en el levels y en la carpeta?"
  />
{/await}
