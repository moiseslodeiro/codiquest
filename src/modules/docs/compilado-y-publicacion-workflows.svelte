
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

  const resources = [
  {
    "title": "Límites de ejecución",
    "url": "https://docs.github.com/es/actions/reference/limits#existing-system-limits"
  }
];</script><Page {resources}><p>Este apartado solo es válido si utilizas GitHub (porque aún no he tenido tiempo de meterme con los ficheros para otras plataformas, como <code>Gitlab</code>).</p>
<h2>Limitaciones</h2>
<p>Dentro de los servicios que ofrece GitHub de manera gratuita, existe la ejecución de <em>Workflows</em> (básicamente, una máquina que ejecuta instrucciones). En la capa gratuita, existen limitaciones, como 2000 minutos por mes (aproximadamente 33 horas/mes), que, para un uso cotidiano, deberían ser más que suficientes.</p>
<blockquote>
<Message type="NOTE">Para que te hagas una idea, el *workflow* que he preparado no debería tardar más de 1 minuto en ejecutarse (aproximadamente).</Message></blockquote>
<h2>Requisitos</h2>
<p>Para poder crear contenido en GitHub y publicarlo automáticamente cuando guardes, debes cumplir los siguientes requisitos:</p>
<p>Tus archivos de:</p>
<ul>
<li>Módulos deben estar en <code>src/raw</code> y seguir el formato <code>TUMODULO.module.md</code> (p. ej., <code>terraform.module.md</code>).</li>
<li>Preguntas deben estar en <code>src/raw</code> y seguir el formato <code>TUMODULO.questions.md</code> (p. ej., <code>terraform.questions.md</code>).</li>
</ul>
<p>El resto de los recursos (imágenes, etc.) pueden permanecer en la carpeta <code>static</code>.</p>
<h2>Ejecución del workflow</h2>
<h3>De forma manual</h3>
<p>Cuando estés haciendo cambios y subas los <code>commits</code> a tu rama:</p>
<ModalImage src="img/install/09.png" alignment="" width="5/6" alt="Localización pestaña de Actions" modal="true" />

<hr>
<ol>
<li>Es la pestaña de acciones de GitHub. Aquí podemos ver qué acciones automatizadas, flujos de trabajo o <em>workflows</em> hemos llevado a cabo en nuestro repositorio.</li>
<li>Haz clic sobre la acción que quieras visualizar. En este caso, sobre <code>Process Module Files and Publish</code>. Esta acción servirá para inspeccionar <strong>todos</strong> los ficheros dentro de <code>src/raw</code> con el patrón antes mencionado (en este caso, <em><nombre_modulo>.module.md</em>).</li>
<li>Por último, selecciona la rama desde la que quieres ejecutar el <em>workflow</em> (por defecto, será <code>main</code>, <code>develop</code> o aquella donde subieras los cambios).</li>
</ol>
<p>Esto disparará un flujo que transformará tu contenido de Markdown a formato HTML y publicará una rama <code>gh-pages</code> (aunque se puede cambiar el nombre) en tu repositorio. Así, el contenido de la carpeta <code>build</code> quedará listo para ser servido más adelante. 😊</p>
<h3>De forma automática</h3>
<p>Existe otra forma de ejecutar los cambios en los ficheros que subas: crear una rama llamada <code>publish</code> (publicar). A diferencia de ejecutar el <code>workflow</code> de forma manual, al crear nuevos <em>commits</em> o realizar una <code>pull request</code> sobre la rama <code>publish</code>, no se procesarán todos los ficheros, sino solo aquellos en los que hayas hecho cambios.</p>
<h2>¿Qué sigue?</h2>
<p>Ahora que ya sabemos cómo transformar nuestro contenido (carpeta <code>build</code>) y subirlo a nuestro repositorio (u otro), vamos a publicarlo haciendo uso de <code>GitHub Pages</code>. 🤟</p>
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