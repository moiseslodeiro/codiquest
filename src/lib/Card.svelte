<script>
	export let image = '';
	export let alt = '';
	export let linksTo = '';
	export let tech = '';
	import { base } from '$app/paths';
	import { icons } from '$lib/icons.js';
</script>

<div class="card">
	<div class="card-image">
		<figure class="image is128x128">
			<a href={linksTo} alt="Módulo {tech}"><img src="{base}/{image}" {alt} /></a>
		</figure>
	</div>

	<div class="columns is-mobile px-4 pt-3">
		<div class="column is-three-fifths is-size-6 has-text-weight-semibold">
			{@html icons[linksTo]}
			{tech}
		</div>
		<div class="column has-text-right">
			<slot name="tags" />
		</div>
	</div>

	<div class="card-content mt-0 pt-0">
		<div class="content is-size-5-mobile is-size-5-tablet is-size-5-desktop">
			<slot name="text" />
		</div>
	</div>
	<footer class="card-footer">
		<a href={linksTo} class="card-footer-item">Información</a>
		<a href="{linksTo}/level/0" class="card-footer-item">¡A jugar!</a>
	</footer>
</div>
