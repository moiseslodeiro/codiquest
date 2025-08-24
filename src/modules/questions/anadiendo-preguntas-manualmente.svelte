
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
</script><Page><p>Para añadir preguntas de forma manual a nuestra lista de niveles, solo debes saber el índice (es decir, el número de la pregunta) que quieres agregar (sí, igual esto puede ser un poco tedioso). Además, puedes añadir un título descriptivo de lo que la persona se va a encontrar al abrir ese apartado del módulo. ¡Veámoslo con un ejemplo!</p>
<p>En este caso, queremos introducir un ejercicio de rellenar los huecos del código (<em>fill the gap</em>) entre el nivel 1 y el 3. Para ello, localizamos el índice del array de nuestra constante <code>questions</code> (recuerda que empieza en <strong>0</strong>) e ingresaremos un bloque como el que vemos a continuación dentro de nuestra constante <code>levels</code>:</p>
<Code codeLang="js">
&#123;
  question: 2,
  title: 'Ejercicio: Rellenar código terraform'
&#125;
</Code><p>De forma que nuestro módulo <strong>dummy.js</strong> quedaría así:</p>
<File icon="js" name="dummy.js" route="src,modules" codeLang="js">
import Choose from '$lib/templates/Choose.svelte';
import FillCode from '$lib/templates/FillCode.svelte';

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
  &#125;,
  &#123;
    title: 'Ejercicio: Rellenar código terraform',
    question: 2 // &lt;-- Identificador de la pregunta.
  &#125;,
  &#123;
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  &#125;
];

export const questions = [

  // Índice 0
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
  // Índice 1
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
  // Índice 2
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
</File><p>Haciendo esto, podemos dar un poco más de dinamismo al contenido meramente teórico, metiendo alguna preguntilla por el medio. 🫣</p>
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