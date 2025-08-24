
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
</script><Page><p>Este bloque simula un archivo dentro de un editor de código. Se puede personalizar para agregar un icono, mostrar las líneas, cambiar el lenguaje, incluir la ruta donde está el archivo, etc.</p>
<Code codeLang="js">
&lt;script&gt;
import File from '$lib/components/File.svelte';
import Page from '$lib/templates/Page.svelte';
const codeBlock = `export let moduleInfo = &#123;
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
&#125;;

export const levels = [
  &#123; page: 'index' &#125;,
  &#123;
    page: 'basic/helloworld',
    title: 'Bienvenid@s'
  &#125;,
  &#123;
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  &#125;
];`
&lt;/script&gt;

&lt;Page&gt;
  &lt;File name="dummy.js" codeLang="js" icon="js" route="src,modules" content=&#123; codeBlock &#125; /&gt;
&lt;/Page&gt;
</Code><p>Esto daría como resultado el siguiente bloque:</p>
<File name="dummy.js" codeLang="js" icon="js" route="src,modules">
export let moduleInfo = &#123;
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
&#125;;

export const levels = [
  &#123; page: 'index' &#125;,
  &#123;
    page: 'basic/helloworld',
    title: 'Bienvenid@s'
  &#125;,
  &#123;
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  &#125;
];
</File><blockquote>
<Message type="NOTE">Aunque suene repetitivo, no hay que olvidar escapar las llaves (`&#123;&#125;` y `&#125;`) y los símbolos de menor/mayor que (`&lt;` y `&gt;`).</Message></blockquote>
<h2>Atributos</h2>
<ul>
<li><code>showLines</code>: <code>true</code> o <code>false</code>. Determina si se muestran las líneas junto al código. Por defecto, el valor es <code>true</code>.</li>
<li><code>codeLang</code>: Lenguaje o sintaxis que quiera resaltarse. Consulta el apartado superior <code>Añadiendo lenguajes al resaltado de sintaxis</code> para más información.</li>
<li><code>codeBlock</code>: Bloque de código a través del atributo <code>codeBlock</code> si no se ha utilizado desde dentro del propio componente <code>&lt;Code&gt;&lt;/Code&gt;</code>.</li>
<li><code>icon</code>: Icono (de la carpeta <code>static/icons</code>) que represente el fichero (por ejemplo, <code>js</code>).</li>
<li><code>route</code>: Ruta, separada por comas (<code>,</code>), donde se quiere mostrar el fichero.</li>
<li><code>name</code>: Nombre del fichero que se va a representar.</li>
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