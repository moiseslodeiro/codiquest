<script>
	import '../css/bulma/bulma.sass';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import { fly } from 'svelte/transition';
	import { icons } from '$lib/icons.js';
	//$: console.log($page.url)

	export let data;
	import AudioPlayer, { stopAll, playAll, xx} from '$lib/AudioPlayer.svelte';
	import aaa from '$assets/aaa.mp3'

	let audioTracks = [aaa];

	let isActive = false;

	function toggleActive() {
		isActive = !isActive;
	}

	$: console.log(xx)

</script>

<!--  <pre>
  { JSON.stringify($page, null, 2)}
</pre> 
  -->


 
<nav class="navbar is-warning">
	<div class="container is-max-widescreen">
	<div class="navbar-brand">
		<a class="navbar-item" href="#">
			<img
				src="{base}/favicon.png"
				alt="Bulma: a modern CSS framework based on Flexbox"
				width="32"
				height="32"
			/>
		</a>

		<div
			class="navbar-burger"
			class:is-active={isActive}
			data-target="navbarExampleTransparentExample"
			on:click={toggleActive}
		>
			<span />
			<span />
			<span />
		</div>
	</div>

	<div id="navbarBasicExample" class="navbar-menu" class:is-active={isActive}>
		<div class="navbar-end">
			<a class="navbar-item" on:click={playAll} class:show={xx}>
				{@html icons['musicoff']}
			</a>

			<a class="navbar-item" on:click={stopAll} class:show={!xx}>
				{@html icons['music']}
			</a>

			<a class="navbar-item">
				<button on:click={stopAll}> Stop all! </button>

				{#each audioTracks as src}
					<AudioPlayer {src} />
				{/each}
			</a>

			<a class="navbar-item"> Documentation </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link"> More </a>

				<div class="navbar-dropdown">
					<a class="navbar-item"> About </a>
					<a class="navbar-item"> Jobs </a>
					<a class="navbar-item"> Contact </a>
					<hr class="navbar-divider" />
					<a class="navbar-item"> Report an issue </a>
				</div>
			</div>
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


<style>
	.show {
		display: none;
	}
</style>