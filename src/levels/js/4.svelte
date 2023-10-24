<script>
	import { base } from '$app/paths';
	import Order from '$lib/Order.svelte';

	let code = `
const $windyCity$
`;

	let wrongButtons = ['wC'];
</script>

<Order shuffle="true" codeBlock={code} {wrongButtons}>
	<span slot="text">
		Para ayudarnos a comprender qué hay dentro de una variable, elegimos nombres descriptivos
	</span>
</Order>
