
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
</script><Page><p>Aunque ya se explicó en el apartado de <a href="{base}/components/componentes-message" class="link link-primary internal">componentes</a>, los bloques de notificaciones forman parte de la estructura del lenguaje Markdown extendido por GitHub y sirven para mostrar cuadros de diálogo con un mensaje. En este caso, no haremos uso de un bloque HTML, sino que lo pondremos directamente con Markdown.</p>
<p>Toma como ejemplo este fichero Markdown:</p>
<File icon="markdown" route="src,foo" name="test.md" codeLang="markdown">
¡Ahora veremos cómo funcionan estos mensajes!

&gt; [!TIP]
&gt; Este es un mensaje de tipo TIP

&gt; [!NOTE]
&gt; Este es un mensaje de tipo NOTE

&gt; [!IMPORTANT]
&gt; Este es un mensaje de tipo IMPORTANT

&gt; [!WARNING]
&gt; Este es un mensaje de tipo WARNING

&gt; [!CAUTION]
&gt; Este es un mensaje de tipo CAUTION
</File><p>El resultado, al ser procesado, sería:</p>
<hr>
<Browser><p>¡Ahora veremos cómo funcionan estos mensajes!</p>
<blockquote>
<Message type="TIP">Este es un mensaje de tipo TIP</Message></blockquote>
<blockquote>
<Message type="NOTE">Este es un mensaje de tipo NOTE</Message></blockquote>
<blockquote>
<Message type="IMPORTANT">Este es un mensaje de tipo IMPORTANT</Message></blockquote>
<blockquote>
<Message type="WARNING">Este es un mensaje de tipo WARNING</Message></blockquote>
<blockquote>
<Message type="CAUTION">Este es un mensaje de tipo CAUTION</Message></blockquote></Browser>
<hr>
<p>Cabe destacar que estos componentes, tal y como se mencionó, son compatibles con el Markdown de GitHub, y su diseño es muy similar, por lo que no habrá problemas a la hora de utilizarlos en tu página y de que, al mismo tiempo, se vean bien en GitHub.</p>
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