<script>
	import Boton from './Boton.svelte';
	import { icons } from '$lib/icons.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import NextLevel from '$lib/NextLevel.svelte';

	import '$lib/prism.css';
	import '$lib/prism.js';
	import party from 'party-js';

	export let id = $page.params.id;
	export let codeBlock = '';
	export let answers = [];
	export let shuffle = false;

	let isSolved = false;
	let responsesNumber = -1;

	$: {
		if (correctAnswersNumber == responsesNumber) {
			console.log('activamos el boton de comprbar soluciones');
		} else {
			console.log('desactivamos el boton de comprobar soluciones');
		}
	}

	function handleButtonEvent(event, id) {
		//console.log(id)
		// console.log(event);
		//console.log(event.detail);

		answers = answers.map((a) => {
			if (a.order == id) {
				return { ...a, checked: event.detail.isFocused };
			}
			return a;
		});

		responsesNumber = answers.filter((answer) => answer.checked === true).length;
		//console.table(answers);
	}

	let correctAnswersNumber = -1;

	function blockButtons() {
		const buttons = document.querySelectorAll('.button');
		buttons.forEach((button) => {
			button.disabled = true;
		});
	}

	function checkSolution(e) {
		isSolved =
			answers.filter((a) => a.correct == a.checked && a.correct == true).length ==
			correctAnswersNumber;

		if (isSolved) {
			const checkbutton = document.getElementById('nextLevel');
			party.confetti(checkbutton);
			//blockButtons();
		} else {
			console.log('Revisate eso mano');
			console.log(answers.filter((a) => a.correct == a.checked && a.correct == true).length);
			console.log(correctAnswersNumber);
			console.table(answers);
		}

		/* const solutions = [...new Set(positions)].filter((value) => value >= 0);

		console.log('Solutions', solutions);

		isSolved =
			solutions.length === slicedGaps.length &&
			solutions.every((value, index, array) => index === 0 || array[index - 1] <= value);

		console.log('Is solved', isSolved);

		if (isSolved) {
			const checkbutton = document.getElementById('nextLevel');
			party.confetti(checkbutton);
			blockButtons();
		} else { 
			isFailed = true;
		} */
	}

	onMount(async () => {
		codeBlock = Prism.highlight(codeBlock, Prism.languages.javascript, 'javascript');

		answers.forEach((element, index) => {
			answers[index].order = index;
		});

		if (shuffle) {
			answers = answers.sort((a, b) => 0.5 - Math.random());
		}

		correctAnswersNumber = answers.filter((answer) => answer.correct === true).length;
	});
</script>

<main class="container is-fluid">
	<div class="column"><slot name="text" /></div>

	<div class="code column" id="code">
		<pre>
        {@html codeBlock}
        </pre>
	</div>

	<!-- 	<a class="button marginLeft" href={parseInt(id) + 1}>Siguiente nivel</a>
 -->

	<button
		id="checksolution"
		class="button marginLeft is-link is-outlined is-size-5-mobile is-size-5-tablet is-size-5-desktop"
		class:show={isSolved}
		disabled={correctAnswersNumber > responsesNumber}
		on:click={checkSolution}>{@html icons['play']}</button
	>

	<div id="nextLevel" class="marginLeft" class:show={!isSolved}>
		<NextLevel message="Siguiente nivel" />
	</div>

	<section class="column buttons" id="buttons">
		{#each answers as button}
			<Boton
				text={button.text}
				order={button.order}
				on:message={(event) => handleButtonEvent(event, button.order)}
			/>
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

	.show {
		display: none;
	}
</style>
