
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
</script><Page><p><strong>Page</strong> es un componente que recibe contenido y lo adapta visualmente al espacio disponible, aplicando los estilos necesarios e incluyendo componentes como <code>NextLevelButton</code> para avanzar de página, por ejemplo.</p>
<p>Hasta ahora, nuestro fichero <code>src/modules/dummy/basic/helloworld.svelte</code> se veía así:</p>
<File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html">
Hola mundo 🌍
</File><p>Vamos a cambiar el contenido del fichero helloworld.svelte para hacerlo visualmente más atractivo.</p>
<File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html">
&lt;script&gt;
  import Page from '$lib/templates/Page.svelte';
&lt;/script&gt;
&lt;Page&gt;
  &lt;p class="mt-4"&gt;Hola mundo 🌍&lt;/p&gt;
&lt;/Page&gt;
</File><p>Si <strong>recargas</strong> ahora tu página (o si el <em>hot-reload</em> está activo) verás que ahora aparecen varios elementos en pantalla que antes no estaban, como las pestañas de &#39;Contenido&#39; y un botón que dice: &#39;Esto es todo, ¡vuelve pronto para más!&#39;, indicando que el módulo ha llegado a su fin. Si haces clic en la pestaña de recursos, verás un enlace a Wikipedia.</p>
<p>Este tipo de plantilla (<code>Page</code>) sirve para mostrar contenido textual en nuestra página y crear referencias que sirvan de apoyo a nuestro material. Puedes agregar nuevos iconos de enlace editando el fichero <code>src/lib/components/IconList.svelte</code>.</p>
<h2>Añadiendo la pestaña de recursos</h2>
<p>Dentro de la plantilla <code>Page</code>, es posible añadir una pestaña que incluya un listado de recursos (enlaces) que pueden ser de utilidad para reforzar el contenido explicado en esta página. Para ello, crea una constante <code>resources</code> y añádela como parámetro al componente Page, tal y como se muestra a continuación.</p>
<File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html">
&lt;script&gt;
  import Page from '$lib/templates/Page.svelte';
  export const resources = [
    &#123;
      url: 'https://es.wikipedia.org/wiki/Hola_mundo',
      title: 'Hello World!'
    &#125;
  ];
&lt;/script&gt;
&lt;Page &#123;resources&#125; &gt;
  &lt;p class="mt-4"&gt;Hola mundo 🌍&lt;/p&gt;
&lt;/Page&gt;
</File><p>Si todo ha ido bien, al recargar la página verás el mismo contenido de antes, <strong>pero</strong> con una nueva pestaña de recursos.</p>
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