
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
</script><Page><p>Además del Markdown básico, en Codiquest le damos una vuelta de tuerca, incluyendo algunas cosas como la sintaxis extendida de Markdown que utiliza GitHub, como por ejemplo:</p>
<ul>
<li>Los mensajes <code>[!TIP]</code>, <code>[!NOTE]</code>, <code>[!IMPORTANT]</code>, <code>[!WARNING]</code> y <code>[!CAUTION]</code>.</li>
<li>Las imágenes modales, los bloques de código/sintaxis y otros tipos de bloques, como los de <code>Ficheros</code> (<code>File</code>).</li>
</ul>
<p>Así que olvídate del HTML feo y prepárate para escribir contenido limpio, bonito y potente. 🤟. ¿Empezamos?</p>
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