
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
</script><Page><p>Los recursos son enlaces externos a Codiquest que pueden ser de utilidad en cada página para complementar lo que se trata de enseñar. En la versión manual, a la hora de crear módulos nuevos, veíamos que, añadiendo la variable (o constante) <code>resources</code> dentro de la plantilla de <code>Page</code>, se creaba una segunda pestaña con un listado de enlaces.</p>
<p>Para que esto se pueda realizar mediante el procesamiento de Markdown, se ha ideado que, dentro de cada sección (<code>#</code>), puede haber un subbloque (<code>##</code>) llamado <strong>Recursos</strong> o <strong>Resources</strong> que únicamente debe contener un <strong>listado de enlaces</strong>, tal y como se muestra a continuación.</p>
<File icon="markdown" route="src,raw,demo" name="test.md" codeLang="markdown">
# Bloque principal

Minions ipsum bee do bee do bee do jiji para tú wiiiii pepete potatoooo. La bodaaa belloo! Poopayee underweaaar butt butt jeje hahaha para tú jeje. Para tú me want bananaaa! Hahaha me want bananaaa! Bananaaaa potatoooo baboiii daa potatoooo. Hana dul sae me want bananaaa! Tulaliloo belloo! Me want bananaaa! Hana dul sae. Para tú hana dul sae po kass tulaliloo daa wiiiii tatata bala tu bappleees. La bodaaa uuuhhh wiiiii pepete bananaaaa tatata bala tu para tú chasy. Belloo! po kass jeje bananaaaa potatoooo jeje potatoooo butt butt gelatooo. Uuuhhh ti aamoo! Potatoooo butt po kass chasy para tú poulet tikka masala underweaaar hana dul sae.

##  Recursos

- [Minions ipsum](https://www.minionsipsum.com/)
- [Lorem Ipsum](https://www.lipsum.com/)
</File><p>Esto dará como resultado que, a la hora de ejecutar el <em>parser</em> y transformar el contenido en HTML, el <code>##</code> de recursos se transforme en una pestaña dentro de la página. 😃</p>
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