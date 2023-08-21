<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

    export let isFocused = false;
  
    export let id = 0;

    function handleClick() {
      isFocused = !isFocused;

      dispatch('message', {
		id
	  });

    }
  </script>
  
  <button class:selected={isFocused} on:click={handleClick}>
    <slot></slot>
  </button>
  
  <style>
    .selected {
      background-color: yellow; /* Cambia el estilo aquí según tus necesidades */
    }
  </style>