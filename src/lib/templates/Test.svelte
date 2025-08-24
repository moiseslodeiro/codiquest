<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  export let questions = [];

  let correctAnswers = 0;
  let answers = [];
  let checkAnswers = [];

  let hoursLeft = 0;
  let minutesLeft = 0;
  let secondsLeft = 0;

  const paramHours = $page.url.searchParams.get('h');
  const paramMinutes = $page.url.searchParams.get('m');
  let timeHidden = false;
  let questionsIds = [];
  let tech = $page.params.path;

  const voidFunction = () => '';

  function handleMessage(e) {
    answers[e.detail.order] = e.detail.isSolved;
  }

  let timer;
  function countdownTimer() {
    timer = setInterval(() => {
      if (secondsLeft === 0 && minutesLeft > 0) {
        minutesLeft -= 1;
        secondsLeft = 59;
      } else if (secondsLeft === 0 && minutesLeft === 0 && hoursLeft > 0) {
        hoursLeft -= 1;
        minutesLeft = 59;
      } else if (secondsLeft === 0 && minutesLeft === 0 && hoursLeft === 0) {
        if (paramHours > 0 || paramMinutes > 0) {
          blockButtons();
          checkSolution();
        }

        clearInterval(timer);
        return;
      } else {
        secondsLeft -= 1;
      }
    }, 1000);
  }

  let showCorrectAnswers = false;
  function checkSolution() {
    correctAnswers = answers.filter((answer) => answer == true).length;
    checkAnswers = [...answers];
    clearInterval(timer);
    blockButtons();
    showCorrectAnswers = true;
  }

  function blockButtons() {
    const buttons = document.querySelectorAll('.btn');
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
    answers = new Array(questions.length);

    hoursLeft = parseInt(paramHours == null ? 0 : paramHours);
    minutesLeft = parseInt(paramMinutes == null ? 0 : paramMinutes);

    if (hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) timeHidden = true;

    countdownTimer();
  });
</script>

<div class="stats shadow flex flex-row">
  <div class="stat">
    <div class="stat-title">Resultado</div>
    <div class="stat-value">{correctAnswers}/{questions.length}</div>
  </div>

  <div class="stat" class:hidden={timeHidden}>
    <div class="stat-title">Tiempo restante</div>
    <div class="stat-value">
      {hoursLeft.toString().padStart(2, 0)}:{minutesLeft.toString().padStart(2, 0)}:{secondsLeft
        .toString()
        .padStart(2, 0)}
    </div>
  </div>
</div>

{#each questions as question, id}
  {voidFunction((question.content.order = id))}
  {voidFunction(questionsIds.push(question.realId))}
  <div class="divider divider-start">
    <div class="badge badge-secondary badge-outline tooltip" data-tip="Id real: {question.realId}">
      #{id + 1}
    </div>
  </div>

  <svelte:component
    this={question.type}
    {...question.content}
    on:message={handleMessage}
    inTestMode="true"
    {showCorrectAnswers}
    questionNumber={id}
    bind:isCorrect={checkAnswers[id]}
  />
{/each}

<hr class="my-4" />
<button
  class="btn btn-lg btn-primary btn-block"
  on:click={() => {
    blockButtons();
    checkSolution();
  }}
>
  Comprobar resultado
</button>
