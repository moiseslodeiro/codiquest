<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
  import Error from '$lib/components/Error.svelte';
  import Tab from '$lib/components/Tab.svelte';
  import Alert from '$lib/components/Alert.svelte';
  import { sanitize } from '$lib/utils/sanitize.js';

  export let tech = $page.params.path;
</script>

<BreadCrumbs {tech} />

{#await import(`../../modules/${tech}.js` /* @vite-ignore */)}
  <span class="loading loading-spinner loading-md m-5"></span>
{:then module}
  {#await import(`../../modules/${tech}/${module.levels[0].page}.svelte` /* @vite-ignore */)}
    <span class="loading loading-spinner loading-md m-5"></span>
  {:then content}
    <svelte:component this={content.default} />
  {:catch}
    {#if module.levels[0].html}
      {@html sanitize(module.levels[0].html)}
    {:else}
      <Alert type="info" message="Parece que el módulo {tech} no tiene una página de inicio" />
    {/if}
  {/await}

  <div role="tablist" class="tabs tabs-bordered mt-5 mx-0">
    <Tab checked="true" title="Contenido">
      <table class="table table-auto table-zebra">
        <thead>
          <tr>
            <th class="w-10">#</th>
            <th class="text-info-content">Título</th>
            <th class="w-1/5 text-info-content">Labels</th>
          </tr>
        </thead>
        <tbody>
          {#each module.levels as level, id}
            {#if id >= 1}
              <tr>
                <td class="badge bg-pink-700 mt-2 ml-2">
                  <a
                    class="text-base-100"
                    href="{base}/{level.module || tech + '/' + (level.page || id)}/"
                  >
                    #{id}
                  </a>
                </td>
                <td class="align-top">
                  <p class="select-none link underline-offset-4">
                    <a href="{base}/{level.module || tech + '/' + (level.page || id)}/">
                      {level.title || `Nivel ` + id}
                    </a>
                  </p>
                </td>
                <td class="w-1/5">
                  {#if level.labels}
                    {#each level.labels as label}
                      <span class="badge mr-1">{label}</span>
                    {/each}
                  {:else}
                    <span class="text-sm italic text-gray-400"></span>
                  {/if}
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </Tab>
    {#if module.questions && module.questions.length >= 1}
      <Tab title="Cuestionarios">
        Este módulo dispone de {module.questions.length} preguntas para practicar tus conocimientos,
        haz click
        <a class="link link-primary underline-offset-4" href="{base}/{tech}/test">aquí</a> para ir al
        configurador.
      </Tab>
    {/if}
  </div>
{:catch error}
  <Error icon="codi/bsod" title="Módulo no encontrado" message="500: {error}" type="error" />
{/await}
