<script>
	import { base } from '$app/paths';
	import Order from '$lib/Order.svelte';

	let code = `
function foo($bar$) {
    var a = $42$,
        b = 'Prism';
    return $a$ + bar(b);
}
`;
</script>

<Order shuffle="true" codeBlock={code}>
	<span slot="text">
		TODA variable necesita un <b>nombre</b>. Los <b>nombres</b> de las variables <b>no pueden</b> contener
		espacios.
	</span>

	<span slot="back"> XXX por detrás </span>
</Order>
