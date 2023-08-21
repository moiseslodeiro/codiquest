<script>
	import { page } from '$app/stores';
	import Error from '../lib/Error.svelte';
</script>

<Error message="{$page.status} {$page.error.message}" />