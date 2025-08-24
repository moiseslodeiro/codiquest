
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
</script><Page><p>Es lo que conocemos como un <code>test</code> o <code>cuestionario</code>. Es una plantilla que hace uso, a su vez, del componente <code>Gap</code> para mostrar un cuestionario donde se rellenan huecos, interpolando las ocurrencias entre símbolos de dólar (<code>$</code>) (por ejemplo, <code>$hola$</code>). Adicionalmente, se pueden pasar opciones para mezclar las respuestas e incluso añadir respuestas falsas.</p>
<blockquote>
<Message type="IMPORTANT">Ten en cuenta que no hay una validación de código como tal, sino que se comprueba que el código original (eliminando las coincidencias `$x$`) sea el mismo que el resultante tras haber rellenado los huecos.</Message></blockquote>
<File icon="svelte" name="fill.svelte" codeLang="javascript">
&lt;script&gt;
  import FillCode from '$lib/templates/FillCode.svelte';

  let title = 'Creando una instancia en GCP';
  let text = 'A continuación vamos a poner a prueba los conocimientos del curso de terraform. ¿Serás capaz de completar bien el código para crear una instancia de tipo e2 que esté en la network default?';
  let codeLang = 'hcl';
  let shuffle = true;

  // Para la indentación, ten en cuenta que la segunda línea del bloque empieza en la línea de `codeBlock`
  let codeBlock = `resource "google_compute_instance" "codivm" &#123;
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk &#123;
    initialize_params &#123;
      image = "debian-cloud/$debian-12$"
    &#125;
  &#125;

  network_interface &#123;
    network = "$default$"
    access_config &#123;&#125;
  &#125;
&#125;`;

  const fakeOptions = ['d1', 'fast', 'e3', 'alpine']

&lt;/script&gt;

&lt;FillCode &#123;text&#125; &#123;title&#125; &#123;codeLang&#125; &#123;codeBlock&#125; &#123;shuffle&#125; &#123;fakeOptions&#125; /&gt;
</File><blockquote>
<Message type="NOTE">Este elemento no está pensado para renderizarse como parte de un componente sino como una template, por lo que la previsualización aquí no sería posible ahora mismo</Message></blockquote>
<h2>Parámetros</h2>
<ul>
<li><code>text</code>: Contenido que se muestra dentro de la descripción cuando no está en modo &quot;examen&quot; (osea, en modo test).</li>
<li><code>title</code>:Título de la pregunta.</li>
<li><code>showLines</code>: Muestra (o no) el número de líneas en el bloque de código.</li>
<li><code>codeLang</code>: Lenguaje de sintaxis que se pasa a Prism para resaltar el código (consulta el <a href="{base}/components/componentes-code" class="link link-primary internal">componente code</a> para más información).</li>
<li><code>shuffle</code>: Determina si las opciones de respuesta se mezclan aleatoriamente (true/false).</li>
<li><code>codeBlock</code>: Código fuente con marcadores <code>($…$)</code> que indican los huecos a rellenar.</li>
<li><code>inTestMode</code>: Establece el modo de prueba (examen): no muestra la descripción, solo el componente Gaps. Se usa, mayormente, cuando se va a la ruta /test/ para establecer los cuestionarios.</li>
<li><code>order</code>: Identificador de la pregunta dentro de una serie. Se envía en el evento message cuando la prueba termina, permitiendo al contenedor saber qué pregunta se acaba de resolver. No se suele establecer manualmente, sólo es de uso interno a la template <code>Gap</code>.</li>
<li><code>resources</code>: Lista de recursos que se muestran en una pestaña adicional.</li>
<li><code>fakeOptions</code>: Opciones de respuesta falsas que se añaden a los botones de selección. 😈</li>
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