<script>
    import OrderLevel from '$lib/Order.svelte'
</script>

<OrderLevel shuffle="true">
    
    <span slot="text">
        Toda variable necesita un <b>nombre</b>. Los <b>nombres</b> de las variables <b>no pueden</b> contener espacios.
    </span>

    <span slot="code">
    let miVariable = 5;
    $const$ MI_CONSTANTE = $5$;
    </span>

    <span slot="card">
        Tarjeta por detrás
    </span>

</OrderLevel>