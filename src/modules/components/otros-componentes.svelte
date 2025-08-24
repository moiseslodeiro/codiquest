
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
</script><Page><p>Si bien hay más componentes dentro de la carpeta <code>lib/components</code>, están más orientados a la maquetación de plantillas (<code>templates</code>) que a su uso directo dentro de una sección como <code>Page</code>. Estos componentes son:</p>
<ul>
<li><strong>BreadCrumbs</strong>: Las &#39;migas de pan&#39; (breadcrumbs) que aparecen debajo de la barra de título y sirven para saber dónde estamos.</li>
<li><strong>Card</strong>: Una tarjeta de estilo Material Design con imagen incluida (como las de la portada).</li>
<li><strong>CheckButton</strong>: Un componente de tipo botón con funcionalidades adicionales (utilizado en los tests).</li>
<li><strong>ChooseOption</strong>: Componente de tipo &#39;radio button&#39; utilizado en los tests (en la plantilla <code>Choose</code>).</li>
<li><strong>Error</strong>: Un mensaje de error, similar a las alertas, pero con un toque de humor.</li>
<li><strong>Gap</strong>: Representa visualmente la sección de los tests de rellenar huecos.</li>
<li><strong>IconList</strong>: Renderiza una lista de enlaces con su icono correspondiente al lado.</li>
<li><strong>NextLevelButton</strong>: Botón para avanzar de nivel.</li>
<li><strong>PrevLevelButton</strong>: Botón para volver atrás en el nivel.</li>
<li><strong>Tab</strong>: Se usan en plantillas como <code>Page</code> o <code>FillCode</code> para disponer de una sección de pestañas (<code>tabs</code>).</li>
</ul>
<p>Estos componentes no tienen mucho sentido por sí solos, ya que suelen ser parte de otros componentes o plantillas. Por ejemplo, el componente <code>BreadCrumbs</code> se utiliza dentro de la plantilla <code>Page</code> para mostrar la ubicación actual en la página. ¿Se puede usar aparte? ¡Claro! ¿Tiene sentido? Igual no mucho... pero que el límite lo ponga tu imaginación 😁.</p>
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