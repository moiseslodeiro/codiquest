
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
</script><Page><p>El componente <code>ModalImage</code> sirve para mostrar una imagen que, al hacer clic sobre ella, se abrirá en un tamaño superior (modal).</p>
<File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html">
&lt;script&gt;
  import ModalImage from '$lib/components/ModalImage.svelte';
  import Page from '$lib/templates/Page.svelte';
&lt;/script&gt;
&lt;Page&gt;
  &lt;p&gt;Aquí vemos cómo quedaría Codiquest recién instalado 🤭&lt;/p&gt;
  &lt;ModalImage src="img/install/01.png" alt="Mi descripcion" modal="true" /&gt;
&lt;/Page&gt;
</File><Browser>Aquí vemos cómo quedaría Codiquest recién instalado 🤭<br><ModalImage src="img/install/03.png" alignment="center" width="w-1/2" alt="Mi descripcion" modal="true" /><br></Browser>
<blockquote>
<Message type="CAUTION">El componente no está optimizado, por lo que las imágenes se cargarán a su tamaño original. Evita usar imágenes muy grandes.</Message></blockquote>
<h2>Atributos</h2>
<ul>
<li><code>src</code>: Origen de la imagen. Debe ser una imagen local (ubicada en <code>static</code>) o una URL (HTTP/S).</li>
<li><code>alt</code>: Descripción alternativa de la imagen. No solo mejora el posicionamiento SEO del sitio web, sino que también ayuda a la accesibilidad.</li>
<li><code>width</code>: Atributo para indicar el ancho de la imagen. Para respetar el uso de tailwind que está por encima, se ha hecho uso de los mismos <a href="https://tailwindcss.com/docs/width" class="link link-primary external" target="_blank" rel="noopener noreferrer">parámetros</a>.<ul>
<li>Ejemplo: <code>w-[500px]</code>, <code>w-1/2</code>, etc.</li>
</ul>
</li>
<li><code>modal</code>: <code>true</code> o <code>false</code>. Indica si queremos que la imagen sea modal (es decir, que se abra al hacer clic en la &#39;miniatura&#39;).</li>
<li><code>alignment</code>: <code>left</code>, <code>center</code> o <code>right</code> para alinear la imagen a la izquierda, al centro o a la derecha.</li>
</ul>
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