
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
</script><Page><p>El componente <code>Message</code>, o en su equivalencia al Markdown <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts" class="link link-primary github" target="_blank" rel="noopener noreferrer">extendido de GitHub</a>, equivale a mostrar un mensaje en pantalla de un tipo en concreto como consejos (tips), anotaciones (note), mensajes importantes (important), alertas (warning) y cosas con las que hay que tener precaución (caution).</p>
<p>Toma como ejemplo este fichero svelte:</p>
<File icon="svelte" route="src,modules,foo" name="test.svelte" codeLang="javascript">
&lt;script&gt;
  import Message from '$lib/components/Message.svelte';
  import Page from '$lib/templates/Page.svelte';
&lt;/script&gt;

&lt;Page&gt;
  &lt;p&gt;¡Ahora veremos cómo funcionan estos mensajes!&lt;/p&gt;
  &lt;blockquote&gt;
  &lt;Message type="TIP"&gt;Este es un mensaje de tipo TIP&lt;/Message&gt;&lt;/blockquote&gt;
  &lt;blockquote&gt;
  &lt;Message type="NOTE"&gt;Este es un mensaje de tipo NOTE&lt;/Message&gt;&lt;/blockquote&gt;
  &lt;blockquote&gt;
  &lt;Message type="IMPORTANT"&gt;Este es un mensaje de tipo IMPORTANT&lt;/Message&gt;&lt;/blockquote&gt;
  &lt;blockquote&gt;
  &lt;Message type="WARNING"&gt;Este es un mensaje de tipo WARNING&lt;/Message&gt;&lt;/blockquote&gt;
  &lt;blockquote&gt;
  &lt;Message type="CAUTION"&gt;Este es un mensaje de tipo CAUTION&lt;/Message&gt;&lt;/blockquote&gt;
&lt;/Page&gt;
</File><p>El resultado, al ser procesado, sería:</p>
<hr>
<Browser><p>¡Ahora veremos cómo funcionan estos mensajes!</p>
<blockquote>
<Message type="TIP">Este es un mensaje de tipo TIP</Message></blockquote>
<blockquote>
<Message type="NOTE">Este es un mensaje de tipo NOTE</Message></blockquote>
<blockquote>
<Message type="IMPORTANT">Este es un mensaje de tipo IMPORTANT</Message></blockquote>
<blockquote>
<Message type="WARNING">Este es un mensaje de tipo WARNING</Message></blockquote>
<blockquote>
<Message type="CAUTION">Este es un mensaje de tipo CAUTION</Message></blockquote></Browser>
<p>Cabe destacar que estos componentes, tal y como se mencionó, son compatibles con el Markdown de GitHub y su diseño es muy similar, por lo que no habrá problemas a la hora de utilizarlos en tu página y que al mismo tiempo se vean bien en GitHub.</p>
<p>No obstante, también podemos personalizarlo haciendo uso de sus atributos como icon, label, etc de la siguiente manera</p>
<Code codeLang="html">
&lt;Message icon="quote" label="Cita" colorClass="bg-amber-100 border-amber-900 text-amber-950"&gt;Un libro es un sueño que tienes en tus manos - Neil Gaiman&lt;/Message&gt;
</Code><p>Cuyo resultado sería</p>
<Browser><Message icon="quote" label="Cita" colorClass="bg-amber-100 border-amber-900 text-amber-950">Un libro es un sueño que tienes en tus manos - Neil Gaiman</Message><br></Browser>
<blockquote>
<Message type="CAUTION">A pesar de ser un contenido estático y no recibir input por parte de los usuarios, estamos incluyendo HTML dentro de nuestro Markdown, por lo que usa esto con cuidado para no cargar contenido indebido.</Message></blockquote>
<h2>Atributos</h2>
<ul>
<li><code>type</code>: Indica el tipo de mensaje de alerta:<ul>
<li><code>TIP</code>, <code>NOTE</code>, <code>IMPORTANT</code>, <code>WARNING</code> y <code>CAUTION</code></li>
</ul>
</li>
<li><code>icon</code>: Por defecto, tendrá el valor del tipo (<code>tip</code>, <code>info</code>, <code>warning</code>, etc.), aunque puedes especificarle uno <strong>sin</strong> indicar la extensión, ya que lo buscará dentro de <code>static/icons</code>. Ejemplo: <code>quote</code>.</li>
<li><code>label</code>: Texto que se mostrará como etiqueta (encabezado) del mensaje.</li>
<li><code>colorClass</code>: Define el color del borde (<code>border-</code>), el color del fondo (<code>bg-</code>) y el color del texto (<code>text-</code>) haciendo uso de la paleta de colores definida en Tailwind.</li>
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