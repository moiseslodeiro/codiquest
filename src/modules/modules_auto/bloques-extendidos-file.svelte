
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
</script><Page><p>El bloque <code>File</code> sí que es «único», ya que no es un formato que pueda representar, por ejemplo, la sintaxis extendida de GitHub. Si quieres representar un fichero de texto o de código, puedes hacerlo con el bloque <code>File</code>.</p>
<blockquote>
<Message type="IMPORTANT">Si, por un casual, quieres utilizar el bloque `File` dentro de otro bloque `File` para mostrar cómo se vería el bloque (*inception*) y debido a incompatibilidades con los *tokens* a la hora de procesar el fichero Markdown, es necesario escapar las comillas iniciales (`'`). Revisa el fichero `modules_auto.md` de la carpeta `doc` para obtener más información sobre cómo está representado esto. ⬇️</Message></blockquote>
<File icon="markdown" route="src" name="test.md" codeLang="md">
¡Ahora veremos cómo imprimir los valores del 0 al 9 en javascript!

```` File icon="js" route="src,foo" name="test.js" codeLang="js"
for(let i = 0; i &lt; 10; i++) &#123;
  console.log(i);
)

````
</File><p>Esto daría como resultado:</p>
<hr>
<p>¡Ahora veremos cómo imprimir los valores del 0 al 9 en javascript!</p>
<File icon="js" route="src,foo" name="test.js" codeLang="js">
for(let i = 0; i &lt; 10; i++) &#123;
  console.log(i);
)
</File><blockquote>
<Message type="NOTE">Es el bloque más inestable; puede que, si le falta alguno de los parámetros, como `codeLang`, `name`, `route` o `icon`, falle y no se visualice bien.</Message></blockquote>
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