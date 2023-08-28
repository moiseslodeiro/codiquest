<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/icons.js';
	import Load from '$lib/Load.svelte';
	import Error from '$lib/Error.svelte';

	export let id = $page.params.id;
	export let tech = $page.params.tech;
</script>

<div class="block">
	<nav class="breadcrumb container is-fluid" aria-label="breadcrumbs">
		<ul>
			<li><a href="/">~</a></li>
			<li><a href="/{tech}">{@html icons[tech]}</a></li>
			<li class="is-active"><a href="/{tech}/level/{id}" aria-current="page">Nivel {id}</a></li>
		</ul>
	</nav>
</div>

{#await import(`../../../../levels/${tech}/${id}.svelte` /* @vite-ignore */)}
	<Load />
{:then module}
	<svelte:component this={module.default} />
{:catch error}
	<Error message={error} />
{/await}
