<script>
	import { base } from '$app/paths';
	import Order from '$lib/Order.svelte';

	let code = `
let $city$
`;

	let wrongButtons = ['home city', '123value'];
</script>

<Order shuffle="true" codeBlock={code} {wrongButtons}>
	<span slot="text">
		TODA variable necesita un <b>nombre</b>. Los <b>nombres</b> de las variables <b>no pueden</b> contener
		espacios.
	</span>
</Order>
