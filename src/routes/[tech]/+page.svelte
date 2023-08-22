<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/icons.js';
	import Load from '$lib/Load.svelte';
	import Error from '$lib/Error.svelte';

	export let id = $page.params.id;
	export let tech = $page.params.tech;
</script>

<h1>{tech}</h1>
