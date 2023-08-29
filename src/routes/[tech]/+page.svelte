<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/icons.js';
	import Load from '$lib/Load.svelte';
	import Error from '$lib/Error.svelte';
	import { routes } from '$js/routes.js';

	import { base } from '$app/paths';

	export let tech = $page.params.tech;
	

	let techRoutes = routes.filter((word) => word.includes(tech+'/level/')).reverse()

</script>

<h1>{tech}</h1>

<ul>
{#each techRoutes as level}
	<li><a href="{ base }{ level }">{level}</a></li>
{/each}
</ul>

