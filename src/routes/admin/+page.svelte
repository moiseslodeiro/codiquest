<script>
	import { base } from '$app/paths';
</script>

<div class="container is-max-desktop my-4 px-2 has-background-white">
	<nav class="navbar breadcrumb mb-0" aria-label="breadcrumbs">
		<div class="container is-max-widescreen block px-2">
			<ul>
				<li><a href="{base}/"><b>~</b></a></li>
				<li><a href="{base}/admin">Secret zone</a></li>
			</ul>
		</div>
	</nav>

	<div>
		<h1 class="is-size-4">I never gonna <code>git</code> you up!</h1>
	</div>

	<div class="columns mt-2">
		<div class="column is-3">
			<figure class="image is-narrow">
				<img src="{base}/nev.webp" alt="Never gonna git you up!" />
			</figure>
		</div>
		<div class="column">
			<article class="message is-link">
				<div class="message-body">
					Si has llegado hasta aquí, ya sea porque eres una persona curiosa, un juanquer o un amante
					de los admins (😏) te diré que... ¡has sido <b>rickrollead@</b> y es hora de seguir la
					cadena! Ayúdame a seguir repartiendo bits y bytes de conocimiento a todos tus conocidos
					haciendo clic en el siguiente botón: <br /><br />
					<a
						href="https://twitter.com/intent/tweet?button_hashtag=codiquest&ref_src=twsrc%5Etfw"
						class="twitter-hashtag-button"
						data-size="large"
						data-text="@Codiquest me ha #rickrolleado ! Never gonna git me up 💻"
						data-url="https://codiquest.com"
						data-related="Codiquest"
						data-lang="es"
						data-show-count="true">Tweet #codiquest</a
					><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				</div>
			</article>
		</div>
	</div>
</div>
