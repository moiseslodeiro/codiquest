<script>
import OrderLevel from '$lib/Order.svelte'

let code = `
function $blah$() {
    console.log('hola don pepito')
}`;
</script>

<OrderLevel shuffle="true" codeBlock="{ code }">
    
    <span slot="text">
        TODA variable necesita un <b>nombre</b>. Los <b>nombres</b> de las variables <b>no pueden</b> contener espacios.
    </span>
<!-- eslint-disable -->
    <span slot="code">xxx</span>

    <span slot="card">
        Tarjeta por detrás
    </span>

</OrderLevel>