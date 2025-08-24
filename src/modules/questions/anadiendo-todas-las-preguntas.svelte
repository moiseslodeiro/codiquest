
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
</script><Page><p>Esto puede ser un poco caótico si se plantea mal y tenemos miles de preguntas, pero es una forma fácil de agregar <strong>todas</strong> las preguntas de nuestro índice al contenido teórico. Basta con añadir el siguiente fragmento de código al final de tu módulo</p>
<Code codeLang="js">
questions.forEach((_, i) =&gt; levels.push(&#123; question: i, title: `Pregunta $&#123;i + 1&#125;` &#125;));
</Code><p>de forma que quedaría algo así:</p>
<File icon="js" name="dummy.js" route="src,modules" codeLang="js">
import Choose from '$lib/templates/Choose.svelte';
import FillCode from '$lib/templates/FillCode.svelte';

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
    type: FillCode,
    content: &#123;
      codeLang: 'hcl',
      text: '',
      codeBlock: `(...)`,
      shuffle: true,
    &#125;
  &#125;
];

// Código nuevo añadido.
for(let i = 0; i &lt; questions.length; i++) &#123; levels.push(&#123; question: i &#125;) &#125;
</File><p>Esto nos puede servir siempre que queramos repasar todas las preguntas de un módulo de forma secuencial. 🤠. Justo a continuación, veremos cómo podemos automatizar módulos, niveles y preguntas haciendo uso de Markdown (con su explicación incluida).</p>
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