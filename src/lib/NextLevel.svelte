<script>
	import { page } from '$app/stores';
	import { routes } from '$js/routes.js';

	export let message = 'Siguiente nivel';
	const id = $page.params.id;
	const tech = $page.params.tech;
</script>

<div>
	{#if routes.includes(`/${tech}/level/${parseInt(id) + 1}`)}
		<a
			class="button marginLeft is-link is-size-5-mobile is-size-5-tablet is-size-5-desktop"
			href={parseInt(id) + 1}>{message}</a
		>
	{:else}
		<div class="notification is-primary">De momento esto es todo, ¡vuelve pronto!</div>
	{/if}
</div>
