<script>
	import Boton from './Boton.svelte';

	function handlePingas(event) {
		console.log(event);
	}

  </script>
  
  <div>
	{#each [1, 2, 3] as id}
	  <Boton id="{id}" on:message={handlePingas}>
		Botón {id}
	  </Boton>
	{/each}
  </div>
  
  <style>
	div {
	  display: flex;
	  gap: 10px;
	}
  </style>