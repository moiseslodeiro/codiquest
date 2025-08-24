<script>
  import { createEventDispatcher } from 'svelte';
  export let enableCheckButton;
  export let isSolved = false;
  export let inTestMode = false;
  export let text = 'Comprobar';

  const dispatch = createEventDispatcher();
  function handleClick() {
    dispatch('checkSolution', {
      checkSolution: 1
    });
  }
</script>

<button
  disabled={!enableCheckButton}
  id="checksolution"
  on:click={handleClick}
  class="btn btn-primary w-full lg:w-1/4"
  class:hidden={isSolved || inTestMode}>{text}</button
>
