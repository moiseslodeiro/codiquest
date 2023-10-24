<script>
	export let image = '';
	export let alt = '';
	export let linksTo = '';
	import { base } from '$app/paths';
</script>

<div class="card">
	<div class="card-image">
		<figure class="image is-2by2">
			<img src="{base}/{image}" {alt} />
		</figure>
	</div>
	<div class="card-content">
		<div class="content">
			<slot name="text" />
		</div>
	</div>
	<footer class="card-footer">
		<a href={linksTo} class="card-footer-item">Información</a>
		<a href="{linksTo}/level/0" class="card-footer-item">¡A jugar!</a>
	</footer>
</div>
