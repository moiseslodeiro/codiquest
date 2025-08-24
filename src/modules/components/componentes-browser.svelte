
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
</script><Page><p>El componente <code>Browser</code> es meramente decorativo. Sirve para encajar contenido (sea HTML o no) dentro de la vista de una ventana de un navegador.</p>
<File icon="svelte" route="src,modules,foo" name="test.svelte" codeLang="js">
&lt;script&gt;
  import Message from '$lib/components/Message.svelte';
  import Page from '$lib/templates/Page.svelte';
  import Code from '$lib/components/Code.svelte';
  import Browser from '$lib/components/Browser.svelte';
&lt;/script&gt;

&lt;Page&gt;
  &lt;Browser&gt;
    &lt;p&gt;Vamos a ver cómo crear una constante x y asignarle el valor 1+2&lt;/p&gt;
    &lt;Code codeLang="js"&gt;
      const x = 1 + 2;
    &lt;/Code&gt;
  &lt;/Browser&gt;
&lt;/Page&gt;
</File><p>El resultado de este fichero sería:</p>
<Browser><p>Vamos a ver cómo crear una constante x y asignarle el valor 1 + 2</p>
<Code codeLang="js">
const x = 1 + 2;
</Code></Browser>
<h2>Atributos</h2>
<p>El componente <code>Browser</code> no tiene atributos.</p>
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