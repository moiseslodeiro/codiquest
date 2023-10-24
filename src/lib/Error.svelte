<script>
	import { base } from '$app/paths';
	export let message;
	export let icon = 'bsod';

	const SENTENCES = [
		'Los herrores son como oportunidades, siempre ay más',
		'Siempre que cierro un error, se abre una ventana de soluciones',
		'Un programador nunca comete errores, solo crea experiencias de usuario inesperadas',
		'Los errores son como pequeños enigmas que solo los desarrolladores pueden resolver',
		'¿Qué es un error? Una lección que aún no has entendido',
		'No hay errores, solo diferentes niveles de logros en el aprendizaje',
		'El software sin errores es como un unicornio: suena genial, pero no existe',
		'La belleza está en el ojo del programador, incluso en los errores del código'
	];

	const val = Math.floor(Math.random() * SENTENCES.length);
	const randomSentence = SENTENCES[val];
</script>

<main class="container">
	<div class="card">
		<div class="card-content columns is-1 is-mobile">
			<div class="column is-narrow p-0">
				<img src="{base}/{icon}.png" alt="Have a Codi day!" width="128" height="128" />
			</div>
			<div class="column is-align-items-self-start">
				<blockquote>{randomSentence}</blockquote>
			</div>
		</div>
		<footer class="card-footer">
			<p class="card-footer-item">
				<span>{message}</span>
			</p>
		</footer>
	</div>
</main>

<style>
	.card {
		box-shadow: none;
	}

	img {
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}
</style>
