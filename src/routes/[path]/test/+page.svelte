<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  export let tech = $page.params.path;
  import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
  import Tab from '$lib/components/Tab.svelte';

  let questionsNumber = 0;
  let selectedNumber = 1;
  let selectedMinutes = 0;
  let selectedHours = 0;
  let autoCorrect = true;
  let urlParams = '';
  let selectedQuestions = [];
  let selectedQuestionsAsText = '';

  $: selectedNumber = questionsNumber >= 10 ? 10 : questionsNumber;

  let paramsObj = {};
  $: {
    paramsObj = { m: selectedMinutes, h: selectedHours, ac: autoCorrect };
    urlParams = new URLSearchParams(paramsObj).toString();
  }

  onMount(async () => {
    const _tech = await import(`../../../modules/${tech}.js`);
    questionsNumber = _tech.questions.length;
  });

  function toggleSelectedQuestion(id) {
    if (selectedQuestions.includes(id)) {
      selectedQuestions.splice(selectedQuestions.indexOf(id), 1);
    } else {
      selectedQuestions.push(id);
    }
    selectedQuestionsAsText = selectedQuestions.join(',');
  }

  function clearText(text, cut = 200) {

    text = text || 'Pregunta sin enunciado';

    let cleanText = text.replace(/<[^>]*>/g, '');
    if (cleanText.length > cut) {
      cleanText = cleanText.substring(0, cut) + '...';
    }
    return cleanText;
  }
</script>

<BreadCrumbs {tech} title="Cuestionarios" linksTo="test/" />

{#await import(`../../../modules/${tech}.js` /* @vite-ignore */)}
  <span class="loading loading-spinner loading-md m-5"></span>
{:then module}
  <h3 class="font-bold text-lg">Cuestionarios módulo <span class="text-primary">{tech}</span></h3>

  <article class="mt-2">
    El módulo {tech} dispone de {questionsNumber} preguntas. Puedes personalizar el cuestionario (y compartirlo
    mediante la url generada) haciendo clic en
    <span class="underline decoration-2 decoration-blue-500 underline-offset-4">Personalizar</span>
    o bien crear uno
    <span class="underline decoration-2 decoration-pink-500 underline-offset-4">Aleatorio</span>.
  </article>

  <div role="tablist" class="tabs tabs-bordered mt-3">
    <Tab checked="true" title="Personalizar">
      <p>
        Selecciona, al menos, una pregunta para empezar el test. Puedes configurar el tiempo del
        examen y otros parámetros haciendo clic en el botón de configuración.
      </p>

      <div class="flex justify-end gap-2">
        <div>
          <a
            href="test/{selectedQuestionsAsText}?{urlParams}"
            class="btn btn-primary"
            class:btn-disabled={selectedQuestionsAsText.length == 0}>Empezar</a
          >
        </div>
        <div>
          <label for="my-modal" class="btn modal-button"
            ><img src="{base}/icons/gear.svg" class="h-6 w-6" alt="Botón de configuración" /></label
          >
        </div>
      </div>
      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Opciones</h3>

          <div class="form-control w-100 py-4">
            <label class="">
              <div class="label">
                <span class="label-text">Horas (opcional)</span>
              </div>
              <input
                class="input input-bordered join-item w-full max-w-xs input-accent border-stone-400"
                bind:value={selectedHours}
                type="number"
                max="24"
                min="0"
                placeholder="Horas"
              />
            </label>
          </div>
          <div class="form-control w-100">
            <label class="">
              <div class="label">
                <span class="label-text">Minutos (opcional)</span>
              </div>
              <input
                class="input input-bordered join-item w-full max-w-xs input-accent border-stone-400"
                bind:value={selectedMinutes}
                type="number"
                max="59"
                min="0"
                placeholder="Minutos"
              />
            </label>
          </div>
          <div class="form-control w-80 mt-4">
            <label class="cursor-pointer label">
              <span class="label-text">Mostrar respuestas correctas al comprobar resultado</span>
              <input
                type="checkbox"
                class="toggle toggle-md toggle-primary"
                on:click={() => {
                  autoCorrect = !autoCorrect;
                }}
                checked
              />
            </label>
          </div>

          <div class="modal-action">
            <label for="my-modal" class="btn btn-primary">Aceptar</label>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Enunciado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {#each module.questions as question, id}
              <tr>
                <td class="badge badge-secondary badge-outline mt-4">#{id + 1}</td>
                <td><p class="select-none">{clearText(question.content.text)}</p></td>
                <td>
                  <input
                    type="checkbox"
                    on:click={() => {
                      toggleSelectedQuestion(id);
                    }}
                    class="checkbox checkbox-primary"
                  />
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </Tab>

    <!---------------------------------------------->

    <Tab title="Aleatorio">
      Selecciona el número de preguntas que deseas en tu cuestionario y, a continuación, haz clic en
      el botón para empezar.

      <div class="flex flex-col bg-base-200 p-5 mt-5 rounded-lg">
        <div class="form-control w-80">
          <label class="form-control w-full max-w-xs">
            <div class="label">
              <span class="label-text">Número de preguntas</span>
              <span class="label-text-alt">&nbsp;(de 1 a {questionsNumber})</span>
            </div>
            <input
              type="number"
              placeholder="Número de preguntas"
              min="1"
              bind:value={selectedNumber}
              max={questionsNumber}
              class="input input-bordered border-stone-400 input-accent w-full max-w-xs"
            />
          </label>
        </div>
        <div class="form-control w-80">
          <label class="">
            <div class="label">
              <span class="label-text">Horas (opcional)</span>
            </div>
            <input
              class="input input-bordered join-item w-full max-w-xs input-accent border-stone-400"
              bind:value={selectedHours}
              type="number"
              max="24"
              min="0"
              placeholder="Horas"
            />
          </label>
        </div>
        <div class="form-control w-80">
          <label class="">
            <div class="label">
              <span class="label-text">Minutos (opcional)</span>
            </div>
            <input
              class="input input-bordered join-item w-full max-w-xs input-accent border-stone-400"
              bind:value={selectedMinutes}
              type="number"
              max="59"
              min="0"
              placeholder="Minutos"
            />
          </label>
        </div>
        <div class="form-control w-80 mt-4">
          <label class="cursor-pointer label">
            <span class="label-text">Mostrar respuestas correctas al comprobar resultado</span>
            <input
              type="checkbox"
              class="toggle toggle-md toggle-primary"
              on:click={() => {
                autoCorrect = !autoCorrect;
              }}
              checked
            />
          </label>
        </div>
        <div class="form-control w-80 mt-5">
          <a href="test/random/{selectedNumber}?{urlParams}" class="btn btn-primary">Empezar</a>
        </div>
      </div>
    </Tab>
  </div>
{:catch error}
  {error}
{/await}
