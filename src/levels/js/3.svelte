<script>
	import { base } from '$app/paths';
	import Order from '$lib/Order.svelte';

	let code = `
let $homeCity$
`;

	let wrongButtons = ['home city'];
</script>

<Order shuffle="true" codeBlock={code} {wrongButtons}>
	<span slot="text">
		Para crear nombres de variables con varias palabras usamos <code>camel case</code>. Empezamos
		con una letra minúscula y ponemos en mayúscula las palabras adicionales
	</span>
</Order>
