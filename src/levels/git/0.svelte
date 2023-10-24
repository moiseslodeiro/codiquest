<script>
	import OrderLevel from '$lib/Order.svelte';

	let code = `
git commit -m "$Este es mi mensaje$"
`;
</script>

<OrderLevel shuffle="true" codeBlock={code} />
