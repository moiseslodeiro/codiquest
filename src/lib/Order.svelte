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

	export let shuffle = true;
	export let gaps = [];

	$: if (positionToFill < 0) {
		positionToFill = 0;
	} else if (slicedGaps != null && positionToFill > slicedGaps.length) {
		positionToFill = slicedGaps.length;
	}

	function handleMessage(event) {
		document.getElementById('input-' + positionToFill).innerHTML = event.detail.text;
		positions[positionToFill] = event.detail.order;
		positionToFill++;
	}

	function checkSolution() {
		const solutions = [...new Set(positions)];
		console.log(solutions);
		console.log(
			solutions.length == slicedGaps.length && solutions.every((v, i, a) => !i || a[i - 1] <= v)
		);
	}

	function stepUndo() {
		if (positionToFill > 0 && positionToFill <= slicedGaps.length) {
			document.getElementById('input-' + --positionToFill).innerHTML = ' ';
			positions.pop();
		}
	}

	function clear() {
		while (positions.length > 0) {
			positions.pop();
			document.getElementById('input-' + --positionToFill).innerHTML = ' ';
		}
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

	<div class="menu column">
		<button class="button is-danger" on:click={clear}>{@html icons['reset']}</button>
		<button class="button is-warning" on:click={stepUndo}>{@html icons['undo']}</button>
		<button class="button is- marginLeft" on:click={checkSolution}>{@html icons['check']}</button>
	</div>

	<hr />

	<section class="buttons">
		{#each buttons as button}
			<Button text={button.text} order={button.order} on:message={handleMessage} />
		{/each}
	</section>
</main>

<style>
	.menu {
		grid-area: menu;
		display: flex;
		gap: 16px;
		width: 100%;
		justify-content: flex-start;
		align-items: flex-start;
	}

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
		font-size: medium;
		border-left: 3px solid sandybrown;
		background-color: #26212f;
		color: white;
		width: 100%;
	}

	/* 	.button {
		background-color: #ffffff;
		border: 0;
		border-radius: 0.5rem;
		box-sizing: border-box;
		color: #111827;
		font-family: 'Courier New', Courier, monospace;
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1.25rem;
		padding: 0.75rem 1rem;
		text-align: center;
		text-decoration: none #d1d5db solid;
		text-decoration-thickness: auto;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		margin: 3px;
	} */
</style>
