
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
</script><Page><p>¿Has visto la barra superior junto a la sección <strong>Documentación</strong> (o si la ves en móvil, la lupa en la parte superior)? Eso es una <strong>barra de búsqueda</strong> que nos ayuda a <strong>localizar el contenido</strong> de manera rápida y sencilla. Su funcionamiento es sencillo: busca en los <strong>títulos</strong> de los niveles y páginas las palabras que introduzcas.</p>
<p><strong>¿Y eso es todo?</strong> No, todavía hay más. En cada nivel podemos incluir un campo llamado <code>labels</code>, que permite añadir <strong>palabras clave o etiquetas</strong> relacionadas con ese contenido. Esto facilita que la búsqueda sea más precisa y efectiva, ya que no solo busca en los títulos, sino también en estas etiquetas extras. De este modo, el contenido es mucho más <strong>accesible</strong> y <strong>fácil de encontrar</strong>. ¿No es fantástico? 🤗</p>
<File icon="js" route="src,modules" name="dummy.js" codeLang="js">
export const moduleInfo = &#123;
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
    title: 'Enlace al módulo chuchu',
    module: 'chuchu',
    labels: [
      'etiquetaA',
      'etiquetaB'
    ]
  &#125;
];
</File><p>De esta forma, además de poder encontrar la página por palabras sueltas como &quot;enlace&quot;, &quot;módulo&quot; o &quot;chuchu&quot;, también podremos localizarla mediante las etiquetas &quot;etiquetaA&quot; y &quot;etiquetaB&quot;. Estas etiquetas aparecerán visibles en el listado general cuando se muestre el módulo, facilitando la búsqueda y haciendo el contenido más accesible y fácil de encontrar.</p>
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