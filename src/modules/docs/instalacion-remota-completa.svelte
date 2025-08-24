
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
</script><Page><p>Creo que este puede ser el apartado más corto de todos, pero, ¿sabías que es posible utilizar Codiquest sin necesidad de clonar el repositorio en local? Esto es gracias a que GitHub incluye un editor de código.</p>
<p>Basta con:</p>
<ol>
<li>Hacer un <em>fork</em> del repositorio y copiarlo a tu cuenta de usuario.</li>
<li>Una vez dentro, presiona la tecla <code>.</code> para abrir el editor en línea (esto te llevará al dominio <code>github.dev</code>).</li>
<li>Realiza los cambios que quieras.</li>
<li>Ejecuta el <em>workflow</em> para publicar los cambios, ya sea de forma manual o automática, mediante la rama <code>publish</code>.</li>
</ol>
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