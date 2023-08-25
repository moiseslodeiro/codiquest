<script>
	import { base } from '$app/paths';
</script>

<div class="columns is-centered">
	<div class="column is-2">
		<img src="{base}/never.gif" />
	</div>
</div>

<style>
	img {
		filter: grayscale(0.76) saturate(1.9) hue-rotate(52deg) sepia(0.23) brightness(0.9)
			contrast(1.3);
	}
</style>
