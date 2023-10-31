<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	import Card from '$lib/Card.svelte';
</script>

<div class="container is-max-widescreen my-4 px-2 has-background-white">
	<nav class="navbar breadcrumb mb-0" aria-label="breadcrumbs">
		<div class="container is-max-widescreen block px-2">
			<ul>
				<li><a href="{base}/"><b>~</b></a></li>
				<li><a href="{base}/">Inicio</a></li>
			</ul>
		</div>
	</nav>

	<h1 class="is-size-4 has-text-weight-semibold px-1">CodiQuest</h1>

	<div class="block is-size-5-mobile is-size-5-tablet is-size-5-desktop mt-2">
		<strong>¡Hola a tod@s!</strong> ¡Bienvenidos a CodiQuest! Este es un pequeño proyecto personal
		que ha resultado en una mini plataforma interactiva para aprender y reforzar conceptos de
		programación y desarrollo de una manera divertida,
		<a href="https://github.com/moiseslodeiro/codiquest">libre</a>
		y gratuita. Acompaña a Codi en su aprendizaje, explora los diferentes niveles y módulos que
		conforman la plataforma y descubre todo lo que puedes lograr. Si deseas saber más sobre el
		proyecto, no dudes en visitar la sección "<a href="{ base }/about">Acerca de</a>". ¡Nos vemos en la
		pantalla!
	</div>

	<hr />

	<div class="columns px-1">
		<div class="column is-4">
			<Card image="js.webp" alt="NaN NaN NaN NaN Batman!" tech="Javascript Vanilla" linksTo="js">
				<span slot="text"
					>¿Quieres empezar o mejorar tus habilidades básicas en <b>Javascript</b>, de manera
					interactiva y desde cero? Dale una oportunidad a este módulo. Haz clic en
					<b>Información</b> para ver el listado de niveles o bien, empeza a jugar desde el nivel 0</span
				>
				<span slot="tags">
					<div class="tags">
						<span class="tag is-primary">JS</span>
						<span class="tag is-warning">WIP</span>
						<span class="tag is-info">Básico</span>
						<span class="tag is-link">Medio</span>
					</div>
				</span>
			</Card>
		</div>
		<div class="column is-4">
			<Card image="git.webp" alt="Let's git!" tech="Git" linksTo="git">
				<span slot="text"
					>¿Sabes por qué la gente no sabe <b>git</b>? ¡Porque git se enseña mal! Si has entendido
					este meme y quieres perderle el miedo o repasar este sistema de control de versiones, este
					es tu módulo</span
				>
				<span slot="tags">
					<div class="tags">
						<span class="tag is-primary">Git</span>
						<span class="tag is-warning">WIP</span>
						<span class="tag is-info">Básico</span>
						<span class="tag is-link">Medio</span>
					</div>
				</span>
			</Card>
		</div>
	</div>
</div>
