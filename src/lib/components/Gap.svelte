<script>
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import { sanitize } from '$lib/utils/sanitize.js';

  import NextLevelButton from '$lib/components/NextLevelButton.svelte';
  import Alert from '$lib/components/Alert.svelte';

  import '$lib/third/prism/prism.css';
  import '$lib/third/prism/prism.js';

  export let showLines = true;
  export let codeLang = 'hcl';
  export let isSolved = false;
  export let inTestMode = false;
  export let shuffle = true;
  export let codeBlock = ``;
  export let order = -1;
  export let fakeOptions = [];

  let isFailed = false;
  let prismBLock = '';

  const nullishLang = { comment: /^$/ };
  const reCode = /(\$.*?\$)/g;
  const reButton = /\$(.*?)\$/g;
  const dispatch = createEventDispatcher();
  const gaps = [];
  let buttonsGaps = codeBlock.match(reCode);

  let showButtons = [];
  let answers = [];
  let tmpSplit = [];

  let buttonArray = [];
  let _order = 0;
  let gapSize = 0;
  let splittedByLines = [];

  try {
    fakeOptions = fakeOptions.map(
      (s) => (s.startsWith('$') ? '' : '$') + s + (s.endsWith('$') ? '' : '$')
    );

    showButtons =
      shuffle === true
        ? [...buttonsGaps, ...fakeOptions].sort((a, b) => 0.5 - Math.random())
        : [...buttonsGaps, ...fakeOptions];
  } catch (e) {
    showButtons = [];
    buttonsGaps = [];
  }

  onMount(async () => {
    inTestMode = inTestMode === 'true';
  });

  try {
    prismBLock = Prism.highlight(codeBlock, Prism.languages[codeLang], codeLang);
  } catch (e) {
    prismBLock = Prism.highlight(codeBlock, nullishLang, '');
    console.warn(`Warning! "${codeLang}" is not valid Prism language for Codi :(`);
  }

  splittedByLines = prismBLock.split('\n');
  splittedByLines.forEach((element) => {
    if (element.match(reCode)) {
      tmpSplit = element.split(reCode);
      gaps.push([]);
      tmpSplit.forEach((match) =>
        match.startsWith('$') && match.endsWith('$')
          ? gaps[gaps.length - 1].push({ element: match, type: 'input', value: _order++ })
          : gaps[gaps.length - 1].push({ element: match })
      );
    } else {
      gaps.push([element]);
    }
  });

  if (splittedByLines[0].length === 0) {
    splittedByLines[0] = 'asfasf';
  }

  function blockButtons() {
    const buttonsGaps = document.querySelectorAll('.btn');
    buttonsGaps.forEach((button) => {
      button.disabled = true;
    });
  }

  function handleClick(value, element) {
    answers = [...answers];
    buttonArray.push(element);
    document.querySelectorAll('span.input')[gapSize++].innerText = value.replace(reButton, '$1');
    if (answers.length < buttonsGaps.length) {
      answers.push(value);
      element.disabled = true;
    }
  }

  function checkSolution() {
    isSolved = answers.toString() === buttonsGaps.toString();

    if (isSolved) {
      if (!inTestMode) {
        blockButtons();
        isFailed = false;
      } else {
        dispatch('message', {
          isSolved,
          order
        });
      }
    } else {
      isFailed = true;
    }
  }

  function undo() {
    document.querySelectorAll('span.input')[--gapSize].innerText = '';
    buttonArray[gapSize].disabled = false;
    buttonArray.pop();
    answers.pop();
  }

  function reset() {
    buttonArray.forEach((element) => {
      element.removeAttribute('disabled');
      document.querySelectorAll('span.input')[--gapSize].innerText = '';
    });
    answers = [];
    buttonArray = [];
    gapSize = 0;
  }

  $: {
    if (inTestMode && answers.length == buttonsGaps.length) {
      checkSolution();
    }
  }
</script>

<div translate="no" class="mockup-code overflow-x-auto">
  {#each gaps as line, lineNumber}
    <!-- Do not indent "if" conditional line on this block -->
    <pre class="md:text-sm" data-prefix={showLines ? lineNumber + 1 : ''}>
{#if line.length == 1}
        {@html sanitize(line[0])}
      {:else}
        {#each line as gapLine}
          {#if gapLine.type}
            <span class="input input-bordered rounded input-xs min-w-1 min-h-1"></span>
          {:else}
            {@html sanitize(gapLine.element)}
          {/if}
        {/each}
      {/if}
</pre>
  {:else}
    <span class="loading loading-spinner loading-md m-5"></span>
  {/each}
</div>

<Alert
  type="warning"
  message="Parece que la respuesta no es correcta, ¡vuelve a intentarlo!"
  visible={isFailed}
/>

<div class="flow-root mt-2 overflow-x-hidden">
  <div class="float-left flex-wrap flex gap-2 sm:w-full sm:w-auto md:w-2/3">
    {#each showButtons as button}
      <button
        class="btn no-animation w-1/4"
        on:click={(e) => {
          handleClick(button, e.target);
        }}>{button.replace(reButton, '$1')}</button
      >
    {/each}
  </div>
  <div class="float-right flex w-full sm:w-auto md:w-1/3 gap-2 mt-2 sm:mt-auto overflow-hidden">
    <button
      class="btn btn-primary w-fit flex-auto"
      on:click={checkSolution}
      class:btn-disabled={answers.length <= buttonsGaps.length - 1 || isSolved}
      class:hidden={inTestMode === true || isSolved}>Comprobar</button
    >

    <button
      class="btn btn-accent no-animation w-fit flex-auto"
      class:btn-disabled={answers.length == 0 || gapSize == 0}
      class:hidden={isSolved && !inTestMode}
      on:click={undo}>Back</button
    >
    <button
      class="btn btn-secondary no-animation w-fit flex-auto"
      class:btn-disabled={answers.length == 0 || gapSize == 0}
      class:hidden={isSolved && !inTestMode}
      on:click={reset}>Reset</button
    >

    <div class:w-full={isSolved} class="overflow-x-hidden">
      <NextLevelButton {isSolved} {inTestMode} />
    </div>
  </div>
</div>

<style>
  .mockup-code {
    background-color: #1b1825;
  }

  .mockup-code:before {
    opacity: 1;
    box-shadow:
      1.4em 0 #fc5e56,
      2.8em 0 #ffbd30,
      4.2em 0 #26ca3f;
    height: 1;
    margin-bottom: 1;
  }

  .input {
    color: black;
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
