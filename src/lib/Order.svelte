<script>
	import { page } from '$app/stores';
	import { routes } from '$js/routes.js';

	export let id = $page.params.id;
	export let tech = $page.params.tech;

	console.log('Page params', $page.params);
	console.log('Routes', routes);

	console.log(
		'Has next',
		`/${tech}/level/${parseInt(id) + 1}`,
		routes.includes(`/${tech}/level/${parseInt(id) + 1}`)
	);
	import Button from '$lib/Button.svelte';
	import Input from '$lib/Input.svelte';
	import NextLevel from '$lib/NextLevel.svelte';

	import { onMount } from 'svelte';
	import { icons } from '$lib/icons.js';

	import '$lib/prism.css';
	import '$lib/prism.js';

	import party from 'party-js';

	let solution = '';
	let isSolved = false;
	let isFailed = false;

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

	function checkSolution(e) {
		const solutions = [...new Set(positions)].filter((value) => value >= 0);

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
			console.log(`isFailed value ${isFailed}`);
			setTimeout(() => {
				isFailed = false;
			}, 1000);
		}
	}

	function blockButtons() {
		const buttons = document.querySelectorAll('.button');
		buttons.forEach((button) => {
			button.disabled = true;
		});
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

		_answers = _answers.concat(wrongButtons);

		buttons = shuffle === true ? _answers.sort((a, b) => 0.5 - Math.random()) : _answers;

		gaps = [...gaps];
		console.log('Shuff', shuffle);
		console.log('Answers', _answers);
		console.log('Gaps', gaps);
	});
</script>

<main class="container is-fluid has-background-white">
	<div class="column is-size-6-mobile is-size-5-tablet is-size-5-desktop px-0">
		<slot name="text" />
	</div>

	<div class="code column px-0 py-0" class:failure={isFailed}>
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

	<div class="column field has-addons px-0">
		<p class="control">
			<button
				class="button is-danger is-size-5-mobile is-size-5-tablet is-size-5-desktop"
				disabled={positionToFill === 0}
				on:click={clear}>{@html icons['reset']}</button
			>
		</p>
		<p class="control">
			<button
				class="button is-warning is-size-5-mobile is-size-5-tablet is-size-5-desktop"
				disabled={positionToFill === 0}
				on:click={stepUndo}>{@html icons['undo']}</button
			>
		</p>
		<button
			id="checksolution"
			class="button marginLeft is-link is-active is-size-5-mobile is-size-5-tablet is-size-5-desktop"
			class:show={isSolved}
			disabled={positionToFill < slicedGaps.length}
			on:click={checkSolution}>{@html icons['tick']}</button
		>

		<div id="nextLevel" class="marginLeft" class:show={!isSolved}>
			<NextLevel message="Siguiente nivel" />
		</div>
	</div>

	<section class="column buttons are-medium px-0" id="buttons">
		{#each buttons as button}
			<Button text={button.text} order={button.order} on:message={handleMessage} />
		{/each}
	</section>
</main>

<style>
	.failure {
		animation: shake 0.5s;
		animation-iteration-count: 1;
	}

	@keyframes shake {
		0% {
			transform: translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-1deg);
		}
		20% {
			transform: translate(-3px, 0px) rotate(1deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: translate(1px, -1px) rotate(1deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-1deg);
		}
		60% {
			transform: translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-1deg);
		}
		80% {
			transform: translate(-1px, -1px) rotate(1deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(0deg);
		}
		100% {
			transform: translate(1px, -2px) rotate(-1deg);
		}
	}

	.marginLeft {
		margin-left: auto;
	}

	.show {
		display: none;
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
