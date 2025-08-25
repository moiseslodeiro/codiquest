
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
</script><Page><p>Hay varias formas de crear un módulo. Empezaremos por la forma manual para que luego puedas entender cómo funciona la creación <a href="{base}/modules_auto" class="link link-primary internal">automática</a> a partir de otros medios, como la conversión de Markdown a módulos. Para ilustrarlo, vamos a crear un módulo llamado <code>dummy</code>. <em>¡Allé voy!</em></p>
<h2>Pasos a seguir</h2>
<ol>
<li>Genera el fichero <code>src/modules/dummy.js</code>. # O el nombre que quieras darle a tu nuevo módulo 😊</li>
<li>Exporta, al menos, tres elementos: <code>moduleInfo</code>, <code>levels</code> y <code>questions</code>.</li>
</ol>
<p>Ejemplo de cómo debería verse tu fichero:</p>
<Code codeLang="js">
export const moduleInfo = &#123;
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
&#125;;

export const levels = [&#123;&#125;];
export const questions = []
</Code><blockquote>
<Message type="TIP">Puedes cambiar la descripción y el título si quieres. Para el ejemplo, hemos quitado el módulo de Documentación.</Message></blockquote>
<p>Aunque sea básico, si ya tenías en ejecución tu entorno de desarrollo y pruebas con <code>npm run dev</code>, deberías ver tu nuevo módulo en la pantalla principal, e incluso podrás entrar en él, aunque lo encontrarás vacío. ¿No es maravilloso?</p>
<ModalImage src="img/install/01.png" alignment="center" width="w-2/3" alt="Visualización de nuestro módulo dummy en Codiquest" modal="false" />

<hr>
<h3>Valores de <code>moduleInfo</code></h3>
<p>El objeto <code>moduleInfo</code> describe los metadatos de cada curso. Sus campos habituales son:</p>
<ul>
<li><strong>title</strong>: nombre visible del módulo.</li>
<li><strong>shortDescription</strong>: pequeño resumen que se muestra en las tarjetas.</li>
<li><strong>linksTo</strong>: ruta donde se publica el módulo (<strong>debe</strong> coincidir con el nombre de tu módulo (en este caso de ejemplo, <code>dummy</code>)).</li>
<li><strong>public</strong>: cuando es <code>true</code>, el módulo aparece en el listado general; si es <code>false</code>, la página existe, pero no se enlaza públicamente (¡aunque sigue siendo accesible!).</li>
<li><strong>image</strong> e <strong>icon</strong>: archivos opcionales (con base en la carpeta <code>static</code>) para ilustrar el curso.</li>
<li><strong>tags</strong>: lista de etiquetas para clasificar y tener una idea visual de de qué se trata.</li>
<li><strong>isNew</strong>: indica que el módulo es reciente.</li>
</ul>
<h3>Constante <code>levels</code></h3>
<p>De momento, no entraremos mucho en materia; solo diremos que <code>levels</code> contendrá un listado de los <strong>niveles a visitar</strong> (lecciones del módulo). Hablando en términos técnicos, es un array de objetos <code>clave:valor</code>, donde la clave define el tipo de contenido que se mostrará (un HTML simple, una página, una prueba de rellenar huecos, un cuestionario, etc.).</p>
<blockquote>
<Message type="IMPORTANT">El primer elemento del array no es un nivel en sí, sino que se toma como la descripción del módulo (lo que se verá en la cabecera).</Message></blockquote>
<h3>Constante <code>questions</code></h3>
<p>Como mencionábamos en la lección anterior, vamos a disponer de una constante <code>questions</code> que nos servirá para almacenar preguntas a modo de cuestionario. Estas preguntas son independientes, pero también puedes crear preguntas de tipo cuestionario e incluirlas como un nivel más. Más adelante, entraremos en detalle.</p>
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