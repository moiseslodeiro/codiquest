<script>
	import 'bulma';
</script>

<nav class="navbar is-warning">
	<div class="navbar-brand">
		<a class="navbar-item" href="https://bulma.io">
			<img
				src="https://bulma.io/images/bulma-logo.png"
				alt="Bulma: a modern CSS framework based on Flexbox"
				width="112"
				height="28"
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
