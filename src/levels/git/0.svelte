<script>
import { base } from '$app/paths';
import OrderLevel from '$lib/Order.svelte'

let code = `
git commit -m "$Este es mi mensaje$"
`;
</script>

<OrderLevel shuffle="true" codeBlock="{ code }">
    
    <span slot="text">
        tarjeta de git
    </span>
<!-- eslint-disable -->

    <span slot="back">
        Tarjeta por detrás
    </span>

</OrderLevel>