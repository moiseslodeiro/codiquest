
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
</script><Page><p>En la introducción a los <a href="{base}/componentes/componentes-code" class="link link-primary internal">componentes</a>, pudimos ver el componente <code>Code</code>, que resaltaba la sintaxis del lenguaje que pusiéramos. Esto, en sí, no es algo nuevo dentro de la sintaxis, ya que es algo propio de <a href="https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting" class="link link-primary github" target="_blank" rel="noopener noreferrer">GitHub Flavored Markdown</a>. La única diferencia es cómo se representa este bloque dentro de la plantilla <code>Page</code> en Codiquest.</p>
<p>Dicho de otra manera, si tenemos un fichero Markdown con un contenido similar a este:</p>
<File icon="markdown" route="src,foo" name="test.md" codeLang="markdown">
¡Y ahora vamos a imprimir los números del 0 al 9 haciendo uso de javascript vanilla!

```js
for(let i = 0; i &lt; 10; i++) &#123;
  console.log(i);
)
```
</File><p>El resultado sería:</p>
<hr>
<Browser><p>¡Y ahora vamos a imprimir los números del 0 al 9 haciendo uso de javascript vanilla!</p>
<Code codeLang="js">
for(let i = 0; i &lt; 10; i++) &#123;
  console.log(i);
)
</Code></Browser>
<hr>
<p>La sintaxis de este bloque de código es bastante sencilla: se incluye el segmento de código que quieras mostrar entre tres comillas de acento grave (también conocidas como comillas invertidas o, en inglés, <em>backticks</em>), seguido del lenguaje que se quiera mostrar (revisa el apartado <a href="omponents/componentes-code" class="link link-primary internal">Componentes - Code</a> para saber cómo agregar más lenguajes al resaltado de sintaxis).</p>
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