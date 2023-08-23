<script>
	import '../css/bulma/bulma.sass'
	import { base } from '$app/paths';

</script>

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
		<div class="navbar-burger" data-target="navbarExampleTransparentExample">
			<span />
			<span />
			<span />
		</div>
	</div>
</nav>

<slot />

<slot name="footer" />
