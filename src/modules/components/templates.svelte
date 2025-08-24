
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
</script><Page><p><ModalImage src="img/codi/nerdy.webp" alignment="left" width="" alt="Codi nerdy" modal="false" /> Dentro de la carpeta <code>src/lib/templates</code> existen plantillas de módulos predefinidos (<code>templates</code>) que se encargan de definir aspectos de la página. Uno de ellos, y el más utilizado, es <code>Page</code> (localizado en <code>src/lib/templates/Page.svelte</code>). Esta parte de la librería (<code>lib</code>) no la tocaremos, pero si quieres echarle un vistazo, adelante 😉.</p>
<p>Así que, <strong>grosso modo</strong>, podemos decir que una plantilla (<code>template</code>) predefine una página o sección, cargando los componentes que necesita.</p>
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