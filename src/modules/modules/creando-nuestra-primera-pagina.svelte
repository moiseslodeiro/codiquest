
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
</script><Page><p>Vamos a empezar a crear contenido dentro de nuestro módulo. La primera forma que veremos es una manera rápida de crear <strong>pequeños</strong> contenidos sin tener que volverse loco con páginas externas. Para ello, haremos uso del parámetro (clave) <code>html</code> dentro de <code>levels</code>.</p>
<h2>Parámetro <code>html</code></h2>
<p>Para crear nuestra primera página dentro de nuestro módulo y, de paso, darle una descripción interna, vamos a cambiar el contenido de nuestro <code>dummy.js</code> por el siguiente:</p>
<Code codeLang="js">
export const moduleInfo = &#123;
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
&#125;;

export const levels = [
  &#123;
    html: '¡Hola! Este es mi primer &lt;b&gt;nivel&lt;/b&gt;' // Recuerda, este nivel es la descripción del módulo
  &#125;,
  &#123;
    html: 'Esta es mi primera página'
  &#125;
];
</Code><p>Si recargamos y accedemos a nuestro módulo, podremos ver una breve descripción a modo de cabecera del módulo y, además, un Nivel 1 que, si entramos, veremos el texto &quot;Esta es mi primera página&quot;. ¡Genial! ¿No? Pero igual es un poco engorroso estar definiendo todo el contenido HTML dentro del fichero JavaScript en lugar de tenerlo modularizado. Pero ¡no te preocupes!, ahora veremos cómo mejorarlo.</p>
<blockquote>
<Message type="NOTE">Recuerda: La etiqueta `html` está pensada para *pequeños* mensajes (pequeñísimos) o por si no quieres disponer de un fichero `index.svelte` para la página principal por un motivo u otro.</Message></blockquote>
<ModalImage src="img/install/02.png" alignment="center" width="w-1/3" alt="Visualización del contenido del módulo" modal="false" />

<h3>Clave tipo <code>page</code></h3>
<p>Dado que tener todo el contenido dentro del tipo <code>html</code> puede ser muy engorroso, hagamos uso del tipo <code>page</code> para poder referenciar páginas dentro de Codiquest. Para crear nuestra primera página de manera modular, vamos a crear una <strong>carpeta <code>dummy</code> dentro de <code>src/modules</code></strong>. El nombre de la carpeta <strong>debe</strong> coincidir con el del fichero de JavaScript (en este caso, <strong>dummy</strong>).</p>
<p>Dentro de la carpeta, vamos a crear dos archivos: <code>+page.js</code> (sí, con el <code>+</code>) e <code>index.svelte</code>, con este contenido, respectivamente:</p>
<h3>📄 src/modules/dummy/+page.js</h3>
<Code codeLang="js">
export const prerender = true;
</Code><h3>📄 src/modules/dummy/index.svelte</h3>
<Code codeLang="html">
&lt;b&gt;¡Mi primer módulo!&lt;/b&gt;
&lt;br&gt;&lt;br&gt;
Aquí va la introducción a lo que será mi módulo. Puedes usar contenido html pero nada más.
</Code><p>Ahora, una vez creados esos ficheros, vamos a modificar el fichero <code>dummy.js</code> (de la carpeta <code>src/modules</code>) por el siguiente contenido:</p>
<Code codeLang="js">
export const moduleInfo = &#123;
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
&#125;;

export const levels = [
  &#123; page: 'index' &#125;, // &lt;-- Hemos cambiado el contenido de html a page, indicando que es la página "index.svelte" del módulo
  &#123; html: 'Esta es mi primera página' &#125;
];
</Code><p>Si todo ha ido bien, el contenido que antes estaba definido en <code>html</code> para el bloque de la cabecera del módulo debería verse reflejado por el contenido del fichero <code>index.svelte</code> que acabamos de crear.</p>
<h2>Creando páginas dinámicas</h2>
<p>Aunque no es lo recomendable, es posible crear páginas dinámicas dentro de un módulo <strong>sin</strong> que estén enlazadas en la constante <code>levels</code>. Para ello, lo único que tienes que hacer (y esto solo es válido en el primer nivel del módulo) es crear tu página dentro de la carpeta del módulo, con la extensión <code>.svelte</code> y con el contenido que desees.</p>
<blockquote>
<Message type="IMPORTANT">El fichero **no** debe llamarse `test.svelte`, ya que entra en conflicto con la ruta `/test` asignada para los tests del módulo.</Message></blockquote>
<p>Ejemplo:</p>
<File icon="svelte" route="src,modules,dummy" name="demo.svelte" codeLang="html">
&lt;script&gt;
  import Page from '$lib/templates/Page.svelte';
&lt;/script&gt;
&lt;Page&gt;
  &lt;p&gt;Esta página no se mostraría en el índice de niveles pero es accesible 🫥&lt;/p&gt;
&lt;/Page&gt;
</File><p>Ahora, ve a la URL de tu módulo <code>dummy</code> (<code>localhost:5173/dummy/demo</code>) para poder visualizar el contenido.</p>
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