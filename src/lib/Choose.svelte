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

	let isFailed = false;

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

		answers = answers.map((a) => {
			if (a.order == id) {
				return { ...a, checked: event.detail.isFocused };
			}
			return a;
		});

		responsesNumber = answers.filter((answer) => answer.checked === true).length;
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
			blockButtons();
		} else {
			console.log('Revisate eso mano');
			console.log(answers.filter((a) => a.correct == a.checked && a.correct == true).length);
			console.log(correctAnswersNumber);
			console.table(answers);
			isFailed = true;
			setTimeout(() => { isFailed = false }, 1000)
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
	<div class="column px-0"><slot name="text" /></div>

	<div class="code column px-0" class:failure={ isFailed } id="code">
		<pre>
        {@html codeBlock}
        </pre>
	</div>

 <div class="column field has-addons px-0">

	<button
		id="checksolution"
		class="button marginLeft is-link is-active is-size-5-mobile is-size-5-tablet is-size-5-desktop"
		class:show={isSolved}
		disabled={correctAnswersNumber != responsesNumber}
		on:click={checkSolution}>{@html icons['check']}</button
	>

	<div id="nextLevel" class="marginLeft" class:show={!isSolved}>
		<NextLevel message="Siguiente nivel" />
	</div>
	</div>

	<section class="column buttons px-0" id="buttons">
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

	.marginLeft {
		margin-left: auto;
	}

	.failure {
		animation: shake 0.5s;
		animation-iteration-count: 1;
	}

	@keyframes shake {
		0% { transform: translate(1px, 1px) rotate(0deg); }
		10% { transform: translate(-1px, -2px) rotate(-1deg); }
		20% { transform: translate(-3px, 0px) rotate(1deg); }
		30% { transform: translate(3px, 2px) rotate(0deg); }
		40% { transform: translate(1px, -1px) rotate(1deg); }
		50% { transform: translate(-1px, 2px) rotate(-1deg); }
		60% { transform: translate(-3px, 1px) rotate(0deg); }
		70% { transform: translate(3px, 1px) rotate(-1deg); }
		80% { transform: translate(-1px, -1px) rotate(1deg); }
		90% { transform: translate(1px, 2px) rotate(0deg); }
		100% { transform: translate(1px, -2px) rotate(-1deg); }
	}
</style>
