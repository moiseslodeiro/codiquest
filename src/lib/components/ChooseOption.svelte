<script>
  import { createEventDispatcher } from 'svelte';
  import { sanitize } from '$lib/utils/sanitize.js';

  export let text = '';
  export let order = 0;
  export let isFocused = false;
  export let questionType = 'radio';
  export let id = 0;

  const dispatch = createEventDispatcher();

  function handleClick() {
    isFocused = !isFocused;

    if (questionType == 'radio') isFocused = true;

    dispatch('message', {
      order,
      isFocused
    });
  }
</script>

<label class="label cursor-pointer" role={questionType}>
  <input
    type={questionType}
    class={questionType}
    on:click={handleClick}
    name={`${questionType}-${id}`}
  />
  <span class="label-text text-base">{@html sanitize(text.trim())}</span>
</label>

<style>
  .label {
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .label-text {
    margin-left: 0.35rem;
  }
</style>
