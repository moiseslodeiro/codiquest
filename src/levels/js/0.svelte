<script lang="javascript">
	import Info from '$lib/Info.svelte';
</script>

<Info>
	<span slot="text">
		<div class="block">
			Los programas suelen <b>almacenar información</b> para después ser mostrada, guardada o
			tratada como base para otras cosas. Para ello, se hace uso de <code>variables</code>.
		</div>
		<div class="block">
			Una <code>variable</code> es como una <b>caja</b> en donde pegas una <b>etiqueta</b> para
			saber lo que hay <b>adentro</b>. En esta caja puedes <b>guardar</b> diferentes tipos de cosas como
			números, palabras o pedazos más grandes de información.
		</div>
		<div class="block">
			Cuando quieras usar lo que guardaste, simplemente miras la etiqueta de la caja y sabes qué
			contendrá.
		</div>
	</span>

	<span slot="glossary">
		En un dispositivo digital (ordenadores, móviles, etc.), las variables son asignadas a <code
			>direcciones específicas</code
		>
		en la memoria <code>RAM</code> durante la <b>ejecución</b> de un programa. El programa puede
		acceder y manipular los datos almacenados en esas ubicaciones. Por ejemplo, una variable llamada
		<code>age</code>
		podría estar asociada a una dirección de memoria que almacena el valor numérico <code>43</code>.
	</span>
</Info>
