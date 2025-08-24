
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
</script><Page><p>Hace un par de niveles, vimos <a href="{base}/modules_auto/creando-un-modulo-automatizado" class="link link-primary internal">Creando un módulo automatizado</a>, donde se explicaba el uso de la herramienta <code>module.js</code> para automatizar la creación de módulos basados en Markdown (lo que hemos visto hasta ahora, vamos). Pero, ¿qué hay de las preguntas y de la constante <code>questions</code>? Pues... ¡Sorpresa! 🥳 También hay un conversor, aunque funciona de manera algo diferente.</p>
<p>Vamos a partir del siguiente bloque de código, un fichero que llamaremos <code>demo.md</code>, para, primero, explicar la estructura de las preguntas y, después, ver cómo hacer uso de la herramienta de conversión automática.</p>
<File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown">
---
# Demo test
---
¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
Este es el texto de descripción

```hcl
resource "google_compute_instance" "codivm" &#123;
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk &#123;
    initialize_params &#123;
      image = "debian-cloud/$debian-12$"
    &#125;
  &#125;

  network_interface &#123;
    network = "$default$"
    access_config &#123;&#125;
  &#125;
&#125;
```
</File><h2>Bloques generales</h2>
<p>Como puedes ver, el fichero se inicia con dos separaciones (que, normalmente, se traducirían como elementos <code>&lt;hr&gt;</code> en HTML) haciendo uso de <code>---</code>. Dentro de esta separación, tenemos el título:</p>
<File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown">
---
# Demo test
---
</File><p>Luego, cada bloque se separa con el mismo separador (valga la redundancia): <code>---</code>. De esta forma, tendremos tantas preguntas como secciones separadas por <code>---</code>. Hay que destacar que esto solo ocurre cuando el separador empieza al <strong>principio</strong> de la línea y, acto seguido, tiene un <strong>salto de línea</strong>. Es decir, que no afectará si, en medio de una pregunta, encontramos tres guiones consecutivos.</p>
<h2>Preguntas mono respuesta</h2>
<p>Para crear una pregunta de respuesta única (o <code>monorespuesta</code>), hay que añadir un bloque como este:</p>
<File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown">
¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
</File><p>Donde:</p>
<ul>
<li>La primera línea es la pregunta que se va a realizar.</li>
<li>La segunda línea en adelante representará si es una pregunta falsa (<code>[]</code>) o verdadera (<code>[x]</code>).</li>
</ul>
<p>Después de esto, y <strong>sin salto de línea</strong>, debe ir otro separador para indicarle al <em>parser</em> que hay una nueva pregunta; o bien no se debe poner nada más, para indicar que es la última pregunta.</p>
<h2>Preguntas multirespuesta</h2>
<p>Funciona <strong>igual</strong> que la pregunta <em>monorespuesta</em>, con la salvedad de que, en esta ocasión, podemos marcar <strong>más</strong> de una opción como correcta.</p>
<File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown">
¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
</File><h2>Preguntas de tipo fill the gap</h2>
<p>Y vamos con el último tipo de preguntas (de momento) que podemos utilizar en Codiquest: las preguntas de rellenar código/huecos, o <em>fill the gap</em>. Usemos de ejemplo el siguiente bloque:</p>
<File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown">
Este es el texto de descripción

```hcl
resource "google_compute_instance" "codivm" &#123;
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk &#123;
    initialize_params &#123;
      image = "debian-cloud/$debian-12$"
    &#125;
  &#125;

  network_interface &#123;
    network = "$default$"
    access_config &#123;&#125;
  &#125;
&#125;
```
</File><p>Donde, en este caso, podemos incluir una descripción de forma <strong>opcional</strong> en la <strong>primera línea</strong> de la pregunta. Además, podemos hacer uso de un bloque de código como lo habíamos hecho hasta ahora (con tres <em>backticks</em>, seguido del lenguaje que se quiera resaltar) e incluyendo las opciones de relleno entre símbolos de dólar (<code>$</code>).</p>
<blockquote>
<Message type="NOTE">De momento, el bloque no admite otras opciones, como `fakeOptions`, y se establecen opciones por defecto, como `shuffle` a `true`, de forma predeterminada.</Message></blockquote>
<p>Cabe comentar que puede tener o no una descripción, y que el bloque debe indicar el lenguaje como si fuera un bloque de código normal.</p>
<h2>Haciendo uso de la herramienta</h2>
<p>El uso de la herramienta es muy similar al de la que habíamos utilizado para los módulos, con la salvedad de que, en este caso, el fichero que se modifica es <code>questions.auto.js</code>. En caso de que el módulo no exista, la herramienta creará una versión vacía, al igual que pasaba con los módulos.</p>
<Code codeLang="shell">
node tools/convert.js &lt;/ruta/entrada.md&gt; &lt;moduleName&gt;
</Code><blockquote>
<Message type="IMPORTANT">Si ya existe, no modificará el contenido del módulo (fichero `.js`) ni el de `levels.auto.js`.</Message></blockquote>
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