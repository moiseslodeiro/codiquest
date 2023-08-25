<script>
	import '../css/bulma/bulma.sass'
	import { base } from '$app/paths';
    import { page } from '$app/stores';

	import {fly} from 'svelte/transition'

	$: console.log($page.url)

	export let data
	import AudioPlayer, { stopAll } from '$lib/AudioPlayer.svelte'
	let audioTracks = [
    'https://sveltejs.github.io/assets/music/strauss.mp3'
  ]

	let isActive = false;

	function toggleActive() {
		isActive = !isActive;
	}

</script>

<!-- <pre>
  { JSON.stringify($page, null, 2)}
</pre> -->

<button on:click={stopAll}>
	Stop all!
  </button>
  
  {#each audioTracks as src}
	<AudioPlayer {src} />
  {/each}

<nav class="navbar is-warning">
	<div class="navbar-brand">
		<a class="navbar-item" href="#">
			<img
				src="{base}/favicon.png"
				alt="Bulma: a modern CSS framework based on Flexbox"
				width="32"
				height="32"
			/>
		</a>

		<div class="navbar-burger"  class:is-active={ isActive } data-target="navbarExampleTransparentExample" on:click={ toggleActive }>
			<span />
			<span />
			<span />
		</div>
	</div>

	<div id="navbarBasicExample" class="navbar-menu" class:is-active={ isActive }>
		<div class="navbar-end">
		  <a class="navbar-item">
			Home
		  </a>
	
		  <a class="navbar-item">
			Documentation
		  </a>
	
		  <div class="navbar-item has-dropdown is-hoverable">
			<a class="navbar-link">
			  More
			</a>
	
			<div class="navbar-dropdown">
			  <a class="navbar-item">
				About
			  </a>
			  <a class="navbar-item">
				Jobs
			  </a>
			  <a class="navbar-item">
				Contact
			  </a>
			  <hr class="navbar-divider">
			  <a class="navbar-item">
				Report an issue
			  </a>
			</div>
		  </div>
		</div>

</nav>


<main>
	{#key data.url}
	<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ duration: 300 }}>
		<slot />
	</div>
	{/key}
</main>

<slot name="footer" />
