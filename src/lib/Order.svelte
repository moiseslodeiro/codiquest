<script>
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import { onMount } from 'svelte';
	import { icons } from '$lib/icons.js';

	import '$lib/prism.css';
	import '$lib/prism.js';

	let solution = '';

	const re = /(\$.*?\$)/g;

	export let codeBlock;
	let slicedGaps = [];

	let positionToFill = 0;
	let positions = [];
	let buttons = [];

	export let wrongButtons = [];

	export let shuffle = true;
	export let gaps = [];

	$: if (positionToFill < 0) {
		positionToFill = 0;
	} else if (slicedGaps != null && positionToFill > slicedGaps.length) {
		positionToFill = slicedGaps.length;
	}

	function handleMessage(event) {
		const buttons = document.querySelectorAll('#buttons button');

		if (positionToFill < slicedGaps.length) {
			buttons.forEach((button) => {
				if (button.textContent === event.detail.text) {
					button.disabled = true;
				}
			});

			document.getElementById('input-' + positionToFill).innerHTML = event.detail.text;
			positions[positionToFill] = event.detail.order;
			positionToFill++;
		}
	}

	function stepUndo() {
		if (positionToFill > 0 && positionToFill <= slicedGaps.length) {
			const buttons = document.querySelectorAll('#buttons button');
			const undo = document.getElementById('input-' + --positionToFill);
			buttons.forEach((button) => {
				if (button.textContent === undo.innerHTML) {
					button.disabled = false;
				}
			});

			undo.innerHTML = ' ';
			positions.pop();
		}
	}

	function checkSolution() {
		const solutions = [...new Set(positions)].filter((value) => value >= 0);

		console.log(solutions);
		console.log(
			solutions.length === slicedGaps.length &&
				solutions.every((value, index, array) => index === 0 || array[index - 1] <= value)
		);
	}

	function clear() {
		while (positions.length > 0) {
			positions.pop();
			document.getElementById('input-' + --positionToFill).innerHTML = ' ';
		}

		const buttons = document.querySelectorAll('#buttons button');
		buttons.forEach((button) => {
			button.disabled = false;
		});
	}

	onMount(async () => {
		let _order = 0;
		let _answers = [];

		solution = Prism.highlight(codeBlock, Prism.languages.javascript, 'javascript');
		codeBlock = Prism.highlight(codeBlock, Prism.languages.javascript, 'javascript');
		slicedGaps = codeBlock.match(re);

		if (slicedGaps.length === 0) {
			console.error('Whoops');
		}

		codeBlock
			.split(re)
			.forEach((match) =>
				match.startsWith('$') && match.endsWith('$')
					? gaps.push({ element: match, type: Input, value: _order++ })
					: gaps.push({ element: match })
			);
		slicedGaps.forEach((value, o) => _answers.push({ order: o, text: value.slice(1, -1) }));
		_answers.forEach((answer) => {
			answer.text = answer.text.replace(/<\/?[^>]+(>|$)/g, '');
		});

		wrongButtons.forEach((element, index) => {
			wrongButtons[index] = {
				text: element,
				order: -(index + 1)
			};
		});

		console.log(wrongButtons);
		_answers = _answers.concat(wrongButtons);

		buttons = shuffle === true ? _answers.sort((a, b) => 0.5 - Math.random()) : _answers;
		console.log(_answers.sort((a, b) => 0.5 - Math.random()));

		gaps = [...gaps];
		console.log(shuffle);
		console.log(_answers);

		console.log(gaps);
	});
</script>

<main class="container is-fluid">
	<div class="column"><slot name="text" /></div>

	<div class="code column">
		<pre>
        {#each gaps as i}
				{#if i.type}
					<svelte:component this={i.type} {...{ id: i.value }} />
				{:else}
					{@html i.element}
				{/if}
			{:else}
				Loading...
			{/each}
        </pre>
	</div>

	<div class="column field has-addons">
		<p class="control">
			<button class="button is-danger" on:click={clear}>{@html icons['reset']}</button>
		</p>
		<p class="control">
			<button class="button is-warning" on:click={stepUndo}>{@html icons['undo']}</button>
		</p>
		<button class="button marginLeft" on:click={checkSolution}>{@html icons['play']}</button>
	</div>

	<section class="column buttons" id="buttons">
		{#each buttons as button}
			<Button text={button.text} order={button.order} on:message={handleMessage} />
		{/each}
	</section>
</main>

<style>
	.marginLeft {
		margin-left: auto;
	}

	:global(body) {
		background-color: #f6f7fb;
		font-family: 'Rubik', sans-serif;
		font-weight: normal;
		letter-spacing: 0.05rem;
	}

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
