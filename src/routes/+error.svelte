<script>
	import { page } from '$app/stores';
	import Error from '../lib/Error.svelte';
</script>


asfasf

<Error message="{$page.status} {$page.error.message}" />