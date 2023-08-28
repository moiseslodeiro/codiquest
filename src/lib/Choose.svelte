<script>
	import { icons } from '$lib/icons.js';
	import Boton from './Boton.svelte';
	import { onMount } from 'svelte';

	import '$lib/prism.css';
	import '$lib/prism.js';

	import { page } from '$app/stores';
	export let id = $page.params.id;

	async function fetchData() {
    const res = await fetch("7");
    const data = await res.data;

    if (res.status) {
      return data
    } else {
      throw new Error(data);
    }
  }

	function handlePingas(event, id) {
		console.log(event);
		console.log(id)


	}

	export let codeBlock = '';
	export let answers = [];
	
	onMount(async () => {
		codeBlock = Prism.highlight(codeBlock, Prism.languages.javascript, 'javascript');

		answers.forEach((element, index) => {
			answers[index].order = index;
		});

	});

  </script>


  <main class="container is-fluid">
	<div class="column"><slot name="text" /></div>

	<div class="code column" id="code">
		<pre>
        {@html codeBlock}
        </pre>
	</div>	



	{#await fetchData()}
		...
	{:then a} 
		{ JSON.stringify(a, '', 2) }
		<a class="button marginLeft" href="{parseInt(id) + 1}">Siguiente nivel</a>
		
	{:catch error}
		xxx { error }
	{/await}

	<section class="column buttons" id="buttons">
		{#each answers as button}
			<Boton text={button.text} order={button.order} on:message={(event) => handlePingas(event, button.order)} />
		{/each}
	</section>
</main>

  <style>




	.code {
		background-color: #f6f7fb;
		font-family: 'Courier New', Courier, monospace;
	}

	.code > pre {
		text-align: left;
		padding: 5px 10px 5px 15px;
		font-size: large;
		border-left: 3px solid sandybrown;
		background-color: #26212f;
		color: white;
		width: 100%;
	}
  </style>