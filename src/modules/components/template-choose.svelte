
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
</script><Page><p>La plantilla <code>Choose</code> ha sido diseñada para crear preguntas de opción simple o múltiple, ya sea de respuesta única (<code>radio button</code>) o de respuesta múltiple (<code>checkbox</code>). Es un componente reutilizable que se puede configurar con diferentes textos, respuestas y comportamientos para construir cuestionarios o ejercicios interactivos.</p>
<Code codeLang="js">
&lt;script&gt;
  import Choose from '$lib/templates/Choose.svelte';

  const chooseConfig = &#123;
    checkboxes: true,
    shuffle: true,
    text: `Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?`,
    answers: [
      &#123; text: `Usar la función setTimeout para simular la espera.`, correct: false &#125;,
      &#123; text: `Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)`, correct: true &#125;,
      &#123;
        text: `Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.`,
        correct: false
      &#125;,
      &#123; text: `Eliminar todas las promesas y usar solo funciones síncronas.`, correct: false &#125;
    ],
    resources: [
      &#123;
        title: '(ENG) Entendiendo async/await en JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises'
      &#125;,
      &#123;
        title: 'Promesas en JavaScript (MDN)',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise'
      &#125;
    ]
  &#125;;

&lt;/script&gt;

&lt;Choose &#123;...chooseConfig&#125; /&gt;
</Code><blockquote>
<Message type="TIP">Si quieres probarlo, la respuesta correcta está marcada con 🤫.</Message></blockquote>
<h2>Choose múltiple</h2>
<p>Además de crear preguntas de una sola respuesta, la plantilla <code>Choose</code> se puede utilizar para crear preguntas de opción múltiple (permitiendo tanto respuestas únicas como múltiples), tal como vemos en el siguiente ejemplo:</p>
<Code codeLang="js">
&lt;script&gt;
  import Choose from '$lib/templates/Choose.svelte';

  const multipleChoose = &#123;
    checkboxes: true,
    shuffle: true,
    text: `Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?`,
    answers: [
      &#123; text: `Crear ramas específicas para cada funcionalidad o corrección 👀`, correct: true &#125;,
      &#123; text: `Hacer commits directamente en la rama main para ahorrar tiempo.`, correct: false &#125;,
      &#123; text: `Escribir mensajes de commit claros y descriptivos 👀`, correct: true &#125;,
      &#123; text: `Fusionar ramas sin revisar los cambios realizados por otros.`, correct: false &#125;
    ]
  &#125;;

&lt;/script&gt;

&lt;Choose &#123;...multipleChoose&#125; /&gt;
</Code><blockquote>
<Message type="TIP">Si quieres probar el resultado, las respuestas correctas están marcadas con 👀.</Message></blockquote>
<h2>Parámetros</h2>
<ul>
<li><code>resources</code>: Es una lista (array) de objetos que contiene recursos adicionales, como enlaces a documentación o artículos. Cada objeto suele tener un title (título) y una url (dirección web). Se muestran en la pestaña &quot;Recursos&quot;.</li>
<li><code>text</code>: Es el texto de la pregunta que se mostrará al usuario.</li>
<li><code>answers</code>: Es la lista (array) de posibles respuestas. Cada respuesta es un objeto que debe contener:<ul>
<li><code>text</code>: Texto de la opción.</li>
<li><code>correct</code>: Un valor booleano (<code>true</code>/<code>false</code>) que indica si esa respuesta es correcta.</li>
</ul>
</li>
<li><code>checkboxes</code>: Un valor booleano (<code>true</code>/<code>false</code>). Aunque su nombre es <code>checkboxes</code>, su función principal es determinar si se pueden seleccionar múltiples respuestas.</li>
<li><code>shuffle</code>:Un valor booleano (<code>true</code>/<code>false</code>) que, si es <code>true</code>, hace que el orden de las respuestas se muestre de forma aleatoria cada vez que se carga el componente.</li>
<li><code>inTestMode</code>: Un valor booleano que cambia la apariencia y el comportamiento del componente. Si es <code>true</code>, se muestra de una forma más simple, ideal para un examen o test. Si es <code>false</code> (el valor por defecto), se muestra con pestañas (&quot;Pregunta&quot; y &quot;Recursos&quot;) y botones para comprobar la solución, ideal para un modo de aprendizaje. Aunque es un parámetro, no se suele usar de manera directa en el componente.</li>
<li><code>showCorrectAnswers</code>: Un valor booleano que, cuando está en <em>modo test</em> (<code>inTestMode</code>), se usa para resaltar visualmente cuáles eran las respuestas correctas.</li>
<li><code>questionNumber</code>: Un número que sirve como identificador único para la pregunta, útil para agrupar los botones de tipo <code>radio</code> y que funcionen correctamente.</li>
<li><code>isCorrect</code>: Esta propiedad se usa principalmente en <code>inTestMode</code>. El componente padre le puede pasar un valor booleano (<code>true</code> o <code>false</code>) para indicar si la respuesta del usuario fue correcta, y el fondo de la pregunta cambiará a verde o rojo.</li>
<li><code>order</code>: Un número que indica la posición de esta pregunta dentro de un conjunto más grande de preguntas (por ejemplo, en un test).</li>
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