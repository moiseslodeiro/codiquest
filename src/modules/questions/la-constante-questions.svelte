
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
</script><Page><p>Cuando creábamos un módulo de <a href="{base}/modules/crear-un-nuevo-modulo" class="link link-primary internal">forma manual</a>, inicialmente, exportábamos una constante <code>level</code> para disponer de un listado de niveles y una constante <code>questions</code> que dijimos que comentaríamos más adelante. ¡Pues ha llegado ese momento! 🥳</p>
<h2>Estructura</h2>
<p>La estructura de la constante <code>questions</code> es muy similar a la de los niveles, pero, en este caso, define el tipo de pregunta y la pregunta en sí. Sigamos con el ejemplo del módulo <code>dummy</code> que habíamos empezado.</p>
<File icon="js" name="dummy.js" route="src,modules" codeLang="js">
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
  &#125;
];

export const questions = []; // &lt;-- Hemos añadido esta constante
</File><p>Ahora, como habíamos comentado, la constante <code>questions</code> tendrá un <code>array</code> de <code>objetos</code> con los siguientes atributos:</p>
<h2>Atributos</h2>
<ul>
<li><code>type</code>: Indica el tipo de pregunta. Actualmente, puede ser de tipo <a href="{base}/components/template-choose" class="link link-primary internal">Choose</a> o <a href="{base}/components/template-fillcode" class="link link-primary internal">FillCode</a>.</li>
<li><code>content</code>: El contenido de la pregunta, representado por los atributos de cada tipo de pregunta. Es decir, el contenido del objeto <code>content</code> deben ser los propios atributos que le pasarías a la plantilla correspondiente.</li>
</ul>
<blockquote>
<Message type="IMPORTANT">No te olvides de importar la plantilla correspondiente al inicio de la definición del módulo.</Message></blockquote>
<h2>Ejemplo</h2>
<p>Vamos a definir tres preguntas: una de tipo <code>Choose</code> simple, otra de <code>Choose</code> múltiple y otra de rellenar código.</p>
<File icon="js" name="dummy.js" route="src,modules" codeLang="js">
import Choose from '$lib/templates/Choose.svelte'; // No te olvides de importar esto.
import FillCode from '$lib/templates/FillCode.svelte'; // Y esto.

export const moduleInfo = &#123;
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
&#125;;

// Esto no cambia
export const levels = [
  (...)
];

export const questions = [

  &#123;
    type: Choose,
    content: &#123;
      text: `Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?`,
      answers: [
        &#123; text: `Usar la función setTimeout para simular la espera.`, correct: false &#125;,
        &#123; text: `Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)`, correct: true &#125;,
        &#123; text: `Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.`, correct: false &#125;,
        &#123; text: `Eliminar todas las promesas y usar solo funciones síncronas.`, correct: false &#125;
      ]
    &#125;
  &#125;,
  &#123;
    type: Choose,
    content: &#123;
      checkboxes: true,
      shuffle: true,
      text: `Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?`,
      answers: [
        &#123; text: `Crear ramas específicas para cada funcionalidad o corrección 👀`, correct: true &#125;,
        &#123; text: `Hacer commits directamente en la rama main para ahorrar tiempo.`, correct: false &#125;,
        &#123; text: `Escribir mensajes de commit claros y descriptivos 👀`, correct: true &#125;,
        &#123; text: `Fusionar ramas sin revisar los cambios realizados por otros.`, correct: false &#125;
      ]
    &#125;
  &#125;,
  &#123;
    // Sí, es un poco feo poner el código así... ¯\_(ツ)_/¯
    type: FillCode,
    content: &#123;
      codeLang: 'hcl',
      text: '',
      codeBlock: `# Alineado a la izquierda para mantener la identación
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
&#125;`,
    shuffle: true,
    &#125;
  &#125;
];
</File><p>Si todo ha ido bien, al actualizar tu módulo <code>dummy</code>, verás que ahora aparece una nueva pestaña, &quot;<strong>Cuestionarios</strong>&quot;, tal y como vemos a continuación:</p>
<ModalImage src="img/install/04.png" alignment="center" width="" alt="Muestra" modal="false" />

<blockquote>
<Message type="WARNING">La ruta que se utiliza por defecto para la página de los cuestionarios es `test`, de forma que ninguna de nuestras secciones o páginas debe llamarse así.</Message></blockquote>
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