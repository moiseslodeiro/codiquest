<script>
  import Tab from '$lib/components/Tab.svelte';
  import IconList from '$lib/components/IconList.svelte';
  import ChooseOption from '$lib/components/ChooseOption.svelte';
  import Alert from '$lib/components/Alert.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { sanitize } from '$lib/utils/sanitize.js';
  import CheckButton from '$lib/components/CheckButton.svelte';
  import NextLevelButton from '$lib/components/NextLevelButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import PrevLevelButton from '$lib/components/PrevLevelButton.svelte';

  export let resources = [];
  export let text = '';
  export let answers = [];
  export let checkboxes = true;
  export let shuffle = false;
  export let inTestMode = false;
  export let showCorrectAnswers = false;
  export let questionNumber = 0;
  export let isCorrect;
  export let order = -1;

  let isFailed = false;
  let isSolved = false;
  let questionType = 'radio';
  let correctAnswersNumber = -1;
  let responsesNumber = -1;
  let enableCheckButton = false;

  const dispatch = createEventDispatcher();

  $: {
    if (correctAnswersNumber === responsesNumber && correctAnswersNumber != -1) {
      enableCheckButton = true;

      if (inTestMode) {
        dispatch('message', {
          isSolved,
          order
        });
      }
    }
  }

  function checkSolution() {
    const correctMarked = answers.filter((a) => a.correct && a.checked).length;
    const incorrectMarked = answers.filter((a) => !a.correct && a.checked).length;
    const totalCorrect = answers.filter((a) => a.correct).length;

    isSolved = correctMarked === totalCorrect && incorrectMarked === 0;

    if (isSolved) {
      if (!inTestMode) {
        blockButtons();
        isFailed = false;
      }
    } else {
      if (!inTestMode) {
        isFailed = true;
      }
    }
  }

  //--[ Handlers ]-------------------------------------------------
  function handleButtonEvent(event, id) {
    // Reset checked if radio type
    if (questionType == 'radio') {
      answers.forEach((answer) => {
        answer.checked = false;
      });
    }

    answers = answers.map((answer) => {
      if (answer.order == id) {
        return { ...answer, checked: event.detail.isFocused };
      }
      return answer;
    });

    if (inTestMode) checkSolution();
    responsesNumber = answers.filter((answer) => answer.checked === true).length;
  }

  //--[ UI Functions ]---------------------------------------------
  function blockButtons() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
      button.disabled = true;
    });

    const radios = document.querySelectorAll('.radio');
    radios.forEach((radio) => {
      radio.disabled = true;
    });

    const checks = document.querySelectorAll('.checkbox');
    checks.forEach((check) => {
      check.disabled = true;
    });
  }

  onMount(async () => {
    inTestMode = inTestMode === 'true';

    showCorrectAnswers = false;

    answers.forEach((element, index) => {
      answers[index].order = index;
      answers[index].checked = false;
    });

    if (shuffle) {
      answers = answers.sort((a, b) => 0.5 - Math.random());
    }

    correctAnswersNumber = answers.filter((answer) => answer.correct === true).length;
    if (correctAnswersNumber > 1) questionType = 'checkbox';
  });
</script>

{#if inTestMode}
  <p
    class="font-normal mb-3 p-3 rounded"
    class:bg-green-300={isCorrect === true}
    class:bg-red-300={isCorrect === false || (showCorrectAnswers && isCorrect == undefined)}
  >
    {@html sanitize(text)}
  </p>

  <div class="form-control">
    {#each answers as answer}
      <div
        class="mb-1 border-green-300 rounded"
        class:border-2={$page.url.searchParams.get('ac') == 'true' &&
          showCorrectAnswers &&
          answer.correct === true}
      >
        <ChooseOption
          {questionType}
          text={answer.text}
          order={answer.order}
          id={questionNumber}
          on:message={(event) => handleButtonEvent(event, answer.order)}
        />
      </div>
    {/each}
  </div>
{:else}
  <div role="tablist" class="tabs tabs-bordered mt-3 overflow-x-hidden">
    <Tab checked="true" title="Pregunta">
      <p
        class="font-medium"
        class:bg-red-100={isCorrect === false || (showCorrectAnswers && isCorrect == undefined)}
      >
        {@html sanitize(text)}
      </p>
      <hr class="my-3" />

      <div class="form-control">
        {#each answers as button}
          <ChooseOption
            {questionType}
            isCheckBox={checkboxes}
            text={button.text}
            order={button.order}
            id={questionNumber}
            on:message={(event) => handleButtonEvent(event, button.order)}
          />
        {/each}
      </div>

      <Alert
        type="warning"
        message="Parece que la respuesta no es correcta, ¡vuelve a intentarlo!"
        visible={isFailed}
      />

      <hr class="my-3" />

      <div class="column field has-addons px-0 overflow-x-hidden">
        <CheckButton
          {enableCheckButton}
          {isSolved}
          on:click={checkSolution}
          on:checkSolution={(event) => {
            checkSolution();
          }}
        />
        <NextLevelButton {isSolved} />
      </div>

      {#if !inTestMode}
        <div class="flex w-full my-3 overflow-x-hidden">
          <div class="grid h-20 flex-grow card rounded-box place-items-center">
            <PrevLevelButton message="Lección anterior" />
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="grid h-20 flex-grow card rounded-box place-items-center"></div>
        </div>
      {/if}
    </Tab>
    <Tab title="Recursos" icon="list">
      <IconList list={resources} />
    </Tab>
  </div>
{/if}
