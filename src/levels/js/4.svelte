<script>
	import { base } from '$app/paths';
	import Order from '$lib/Order.svelte';

	let code = `
const $windyCity$
`;

let wrongButtons = ['wC']

</script>

<Order shuffle="true" codeBlock={code} wrongButtons={wrongButtons}>
	<span slot="text">
		Para ayudarnos a comprender qué hay dentro de una variable, elegimos nombres descriptivos
	</span>

	<span slot="back"> XXX por detrás </span>
</Order>
