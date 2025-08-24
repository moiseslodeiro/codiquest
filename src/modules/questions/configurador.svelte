
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
</script><Page><p>Aunque esta parte es meramente teórica, ya que no se puede hacer nada, sí me gustaría explicar cómo funciona el configurador de cuestionarios/tests (a pesar de que es bastante intuitivo). Si un módulo tiene contenido en la constante <code>questions</code>, automáticamente se habilita el apartado de <em>Cuestionarios</em>. Si hacemos clic en él, veremos algo similar a esto (adaptado, por supuesto, a cada módulo):</p>
<Browser><ModalImage src="img/install/05.png" alignment="center" width="" alt="Muestra" modal="false" /><br></Browser>
<h2>(1) Personalizar</h2>
<p>En este apartado, podremos personalizar cómo queremos hacer nuestros tests (3), seleccionando de manera manual aquellas preguntas que queramos repasar o realizar e, incluso, configurar si queremos disponer de un tiempo límite en horas y minutos. Además, tendremos la posibilidad de mostrar o no las respuestas correctas.</p>
<Browser><ModalImage src="img/install/06.png" alignment="center" width="" alt="Muestra" modal="false" /><br></Browser>
<hr>
<h2>(2) Modo aleatorio</h2>
<p>El modo aleatorio es incluso más fácil de configurar: solo debes acceder a dicha sección, configurar el número de preguntas aleatorias que quieres que tenga tu cuestionario, marcar el tiempo (opcional) y ¡listo! 🎉 (Y darle al botón de empezar, claro...).</p>
<Browser><ModalImage src="img/install/07.png" alignment="center" width="" alt="Muestra" modal="false" /><br></Browser>
<hr>
<h2>Demo</h2>
<p>Una vez dentro, solo tendrás que completar las preguntas y, una vez que hayas finalizado, darle al botón de comprobar el resultado. 😀</p>
<Browser><ModalImage src="img/install/08.png" alignment="center" width="" alt="Muestra" modal="false" /><br></Browser>
<p>Vaya... creo que debo estudiar más para la próxima vez. 😮‍💨</p>
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