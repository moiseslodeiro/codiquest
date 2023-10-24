<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/icons.js';
	import Load from '$lib/Load.svelte';
	import Error from '$lib/Error.svelte';

	import { base } from '$app/paths';

	export let id = $page.params.id;
	export let tech = $page.params.tech;
</script>

<div class="container is-max-widescreen mt-4 px-2 has-background-white">

<nav class="navbar breadcrumb mb-0" aria-label="breadcrumbs">
	<div class="container is-max-widescreen block px-2">
		<ul>
			<li><a href="{base}/"><b>~</b></a></li>
			<li><a href="{base}/{tech}">{@html icons[tech]}</a></li>
			<li class="is-active">
				<a href="{base}/{tech}/level/{id}" aria-current="page">Nivel {id}</a>
			</li>
		</ul>
	</div>
</nav>

	{#await import(`../../../../levels/${tech}/${id}.svelte` /* @vite-ignore */)}
		<Load />
	{:then module}
		<svelte:component this={module.default} />
	{:catch error}
		<Error message={error} />
	{/await}
</div>
