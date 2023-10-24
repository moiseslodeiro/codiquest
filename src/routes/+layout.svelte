<script>
	import '../css/bulma/bulma.sass';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import { fly } from 'svelte/transition';
	import { icons } from '$lib/icons.js';

	export let data;

	let isActive = false;

	function toggleActive() {
		isActive = !isActive;
	}
</script>

<nav class="navbar is-warning">
	<div class="container is-max-widescreen">
		<div class="navbar-brand">
			<a class="navbar-item" href="{base}/">
				<img src="{base}/favicon.png" alt="¡Hola! Soy Codi :-)" width="32" height="32" />
			</a>

			<div
				class="navbar-burger"
				class:is-active={isActive}
				data-target="navbarExampleTransparentExample"
				on:click={toggleActive}
				on:keydown={toggleActive}
				role="button"
				aria-pressed="false"
				tabindex="0"
			>
				<span />
				<span />
				<span />
			</div>
		</div>

		<div id="navbarBasicExample" class="navbar-menu" class:is-active={isActive}>
			<div class="navbar-end">
				<a class="navbar-item" href="{base}/"> Inicio </a>
				<a class="navbar-item" href="{base}/about"> Acerca de </a>
			</div>
		</div>
	</div>
</nav>

<main class="">
	{#key data.url}
		<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
</main>

<slot name="footer" />


