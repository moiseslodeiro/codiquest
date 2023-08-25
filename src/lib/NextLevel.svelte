<script>
	import { page } from '$app/stores';
	import { routes } from '$js/routes.js';

    export let message = 'Siguiente nivel'
	const id = $page.params.id;
	const tech = $page.params.tech;
</script>

<div>
	{#if routes.includes(`/${tech}/level/${parseInt(id) + 1}`)}
		<a class="button marginLeft" href={parseInt(id) + 1}>{ message }</a>
	{/if}
</div>
