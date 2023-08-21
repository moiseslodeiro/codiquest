<script>
import { base } from '$app/paths';
import OrderLevel from '$lib/Order.svelte'

let code = `
$let$
const
`;
</script>

<OrderLevel shuffle="true" codeBlock="{ code }">
    
    <span slot="text">
        Usamos <code>let</code> y <code>const</code> para <strong>crear</strong> nuevas variables y constantes (ya veremos la diferencia más adelante)
    </span>
<!-- eslint-disable -->

    <span slot="back">
        Tarjeta por detrás
    </span>

</OrderLevel>