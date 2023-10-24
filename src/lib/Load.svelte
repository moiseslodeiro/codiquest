<script>
	import { base } from '$app/paths';

	const SENTENCES = [
		'La vida es corta, usa atajos de teclado',
		'No es un bug, es una característica no documentada',
		'Ctrl + Alt + Suprimir mis problemas',
		"La clave para la felicidad está en 'Ctrl' y 'Z'",
		'Mi código funciona, no sé por qué',
		'La única constante en la programación es el café',
		'Mi otro coche es un Tesla... en Minecraft',
		'0 y 1 son todo lo que necesito para ser feliz.',
		'Tengo 99 problemas y todos son de sintaxis',
		'Debugueo, luego existo',
		'La paciencia es el tiempo que tarda en cargarse la página',
		'Mi software nunca tiene errores, solo sorpresas inesperadas',
		'Los errores son como oportunidades, hay un montón de ellos',
		"En mi mundo, 'Hello World' es un saludo amistoso",
		'La mejor terapia es el código limpio',
		'Programadores: el único grupo que piensa que contar empieza en 0',
		'La contraseña incorrecta es mi mantra matutino',
		'Cuida tus bits y tus bytes cuidarán de ti',
		'El silicio es más dulce que el azúcar',
		'Si te equivocas en el código, siempre puedes decir que estás experimentando',
		'Las nubes en mi mundo son servidores remotos',
		'Hazlo bien a la primera, no tendrás que depurarlo después',
		'Código, café, repetir',
		'Cuando nada va bien, ¡ve a la terminal!',
		'Programo, luego existo.',
		'Eres mi tipo de dato favorito',
		'Un programa sin errores es como una vida sin desafíos',
		'La vida es demasiado corta para escribir documentación',
		'No es un error, es un easter egg.',
		"Mis superpoderes son 'Ctrl', 'C' y 'Ctrl', 'V'"
	];

	const val = Math.floor(Math.random() * (SENTENCES.length + 1)) - 1;
	const randomSentence = SENTENCES[val];
</script>

<main class="container">
	<div class="card">
		<div class="card-content columns is-1 is-mobile">
			<div class="column is-one-quarter p-0">
				<img src="{base}/loading.png" alt="Have a Codi day!" />
			</div>
			<div class="column is-align-items-self-start">
				<blockquote>{randomSentence}</blockquote>
			</div>
		</div>
	</div>
</main>

<style>
	.card {
		box-shadow: none;
	}
</style>
