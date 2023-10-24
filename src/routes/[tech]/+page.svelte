<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/icons.js';
	import Load from '$lib/Load.svelte';
	import Error from '$lib/Error.svelte';
	import { routes } from '$js/routes.js';
	import { base } from '$app/paths';
	export let tech = $page.params.tech;

	let techRoutes = routes
		.filter((word) => word.includes(tech + '/level/') && !word.endsWith('Index'))
		.reverse();

	console.log(techRoutes);
</script>

<div class="container is-max-widescreen my-4 px-2 has-background-white">
	<nav class="navbar breadcrumb" aria-label="breadcrumbs">
		<div class="container is-max-widescreen block px-2">
			<ul>
				<li><a href="{base}/"><b>~</b></a></li>
				<li><a href="#">{@html icons[tech]}&nbsp;{tech}</a></li>
			</ul>
		</div>
	</nav>

	{#await import(`../../levels/${tech}/Index.svelte` /* @vite-ignore */)}
		<progress class="progress is-small is-primary" max="100" />
	{:then module}
		<svelte:component this={module.default} />
	{/await}

	<hr />

	<h2>Lista de niveles</h2>

	<div class="columns my-1">
		{#each techRoutes as level}
			<div class="column">
				<a href="{base}{level}" class="button is-medium is-primary is-outlined is-fullwidth"
					>{level.split('/')[3]}</a
				>
			</div>
		{/each}
	</div>
</div>
