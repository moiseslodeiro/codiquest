
<!-- File created automatically by Codiquest Converter, do not modify because changes may be lost -->
<script>
  import Alert from '$lib/components/Alert.svelte';
  import Code from '$lib/components/Code.svelte';
  import Message from '$lib/components/Message.svelte';
  import ModalImage from '$lib/components/ModalImage.svelte';
  import Page from '$lib/templates/Page.svelte';
  import File from '$lib/components/File.svelte';
  import Browser from '$lib/components/Browser.svelte';
  import { base } from '$app/paths';
</script><Page><p>Hagamos un pequeño repaso de este módulo, que ha sido intenso:</p>
<ul>
<li>Si quieres crear un nuevo módulo haciendo uso de Markdown, crea tu fichero Markdown (con extensión <code>.md</code>).<ul>
<li>Separa cada sección con <code>#</code>, respetando que la primera sección sea la descripción del módulo.</li>
<li>Usa Markdown básico y con bloques extendidos.</li>
<li>Convierte el código con <code>node tools/module.js &lt;tufichero.md&gt; &lt;tuModulo&gt;</code>.<ul>
<li>Puedes usarlo cuantas veces quieras, que solo cambiará el contenido del módulo, no el módulo en sí ni las preguntas.</li>
</ul>
</li>
</ul>
</li>
<li>Si quieres añadir preguntas al módulo (exista o no), puedes hacer uso de otro fichero Markdown con el contenido que se ha explicado anteriormente.<ul>
<li>Separa las secciones/preguntas con <code>---</code>.</li>
<li>Pon preguntas de tipo respuesta simple, múltiple o de rellenar huecos.</li>
<li>Convierte las preguntas en código con <code>node tools/convert.js &lt;tufichero.md&gt; &lt;tuModulo&gt;</code>.<ul>
<li>Esto creará el módulo en caso de que no exista.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Con todo esto, ya tendremos nuestro módulo funcionando y automatizado con Markdown. ¿No es maravilloso? 🤸‍♂️</p>
</Page>
<style>
ul,
ol {
  padding-left: 1.5rem;
  margin-left: 0;
  margin-bottom: 10px;
}

ul > li,
ol > li {
  #list-style-position: inside;
}

ol > li {
  list-style-type: decimal-leading-zero;
}

ul {
  list-style-type: disc;
  margin-bottom: 10px;
}

ul ul {
  padding-left: 1.25rem;
  list-style-type: circle;
}

ul ul ul {
  padding-left: 1.25rem;
  list-style-type: square;
}

ul ul ul ul {
  padding-left: 1.25rem;
  list-style-type: disc;
}

hr {
  margin: 10px 0 10px 0;
  clear: both;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;}
</style>