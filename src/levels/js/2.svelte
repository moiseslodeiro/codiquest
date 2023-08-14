<script>
import { base } from '$app/paths';
import XXX from '$lib/XXX.svelte'

let code = `
function foo($bar$) {
    var a = $42$,
        b = 'Prism';
    return $a$ + bar(b);
}
`;
</script>

<XXX shuffle="true" codeBlock="{ code }">
    
    <span slot="text">
        TODA variable necesita un <b>nombre</b>. Los <b>nombres</b> de las variables <b>no pueden</b> contener espacios.
    </span>
<!-- eslint-disable -->

    <span slot="back">
        XXX por detrás
    </span>

</XXX>