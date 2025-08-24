
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
</script><Page><p>Si quieres incluir un mensaje de alerta en tu sección del módulo, puedes hacer uso del componente <code>Alert</code>.</p>
<Code codeLang="js">
&lt;script&gt;
  import Alert from '$lib/components/Alert.svelte';
  import Page from '$lib/templates/Page.svelte';
&lt;/script&gt;

&lt;Page&gt;
  &lt;Alert type="success" message="Guardado correctamente" /&gt;
  &lt;Alert type="error" message="Ups!" /&gt;
  &lt;Alert type="warning" message="Algo ha ido mal..." /&gt;
  &lt;Alert type="info" message="Todo ha salido a pedir de Milhouse" /&gt;
&lt;/Page&gt;
</Code><p>Esto daría un resultado como este:</p>
<Browser>
<Alert type="success">
Guardado correctamente
</Alert><Alert type="error">
Ups!
</Alert><Alert type="warning">
Algo ha ido mal...
</Alert><Alert type="info">
Todo ha salido a pedir de Milhouse
</Alert></Browser>
<h2>Atributos</h2>
<ul>
<li><code>message</code>: Mensaje que se quiera incluir dentro del cuadro de alerta.</li>
<li><code>type</code>: Tipo del mensaje. Puede ser <code>info</code>, <code>success</code>, <code>warning</code> o <code>error</code>.</li>
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