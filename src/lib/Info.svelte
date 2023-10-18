<script>
	import NextLevel from '$lib/NextLevel.svelte';
	import { icons } from '$lib/icons.js';
	import { base } from '$app/paths';

	let glossary = false;

</script>

<main class="container is-fluid">
	<div class="columns is-mobile is-centered">
		{@html icons['box']}
	</div>

	<div class="block">
		<div class="is-size-5-mobile is-size-5-tablet is-size-5-desktop">
			<slot name="text" />
		</div>
	</div>
	<div class="block is-full">
		<NextLevel />
	</div>

	<hr />


	<article class="message is-link" style="display: { glossary == false ? 'none' : 'block' }">
		<div class="columns message-body">
			<div class="column is-one-fifth">
				<img src="{base}/favicon.png" alt="Have a Coddy day!" />
			</div>
			<div class="column is-size-5-mobile is-size-5-tablet is-size-5-desktop">
				<slot name="glossary" />
			</div>
		</div>
	</article>

	<div class="column is-mobile is-1 is-offset-11">
		<button class="button is-info is-size-5-mobile is-size-5-tablet is-size-5-desktop" on:click={() => { glossary = !glossary }}>
			{@html icons['white']['info']}
		</button>
	</div>





	


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
