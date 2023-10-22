<script>
	import { createEventDispatcher } from 'svelte';

	export let text = '';
	export let order = 0;
	let domNode;

	const dispatch = createEventDispatcher();

	export let isFocused = false;

	function handleClick() {
		isFocused = !isFocused;

		dispatch('message', {
			order, isFocused
		});

		domNode.focus();
	}
</script>

<button
	class="button is-primary"
	class:is-light={isFocused}
	on:blur={!isFocused}
	class:is-focused={isFocused}
	on:click={handleClick}
>
	{text}
</button>
<input type="hidden" bind:this={domNode} />

<style>
	button:focus:not(:active) {
		outline: none !important;
	}

	/* Apply styles to elements that receive focus through any means */
	button:focus {
		outline: none !important;
	}

	button:focus-visible {
		outline: none !important;
	}
</style>
