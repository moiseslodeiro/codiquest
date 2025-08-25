
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
</script><Page><p>En este minimódulo, veremos qué archivos son importantes para poder dejar nuestro sitio de enseñanza y aprendizaje lo más personalizado posible. ¡Empecemos por lo básico!</p>
<hr>
<h2>Datos y metadatos</h2>
<p>Dentro de la carpeta <code>src</code>, encontraremos en el primer nivel el fichero <code>app.html</code>, que contiene la información y metadatos de la página. Es el punto de entrada que luego será utilizado para renderizar el contenido. Lo importante de este fichero se encuentra agrupado en un bloque entre las líneas <code>11</code> y <code>21</code>. Puedes editar cualquier referencia a Codiquest y las descripciones del contenido.</p>
<File icon="html" route="src" name="app.html" codeLang="html">
&lt;!doctype html&gt;
&lt;html lang="es" class="scroll-smooth" data-theme="light" translate="no"&gt;
  &lt;head&gt;
    &lt;link rel="icon" href="%sveltekit.assets%/favicon.png" /&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;meta name="google" content="notranslate" /&gt;
    &lt;meta name="viewport" content="width=device-width" /&gt;
    &lt;meta http-equiv="Cache-Control" content="no-store" /&gt;
    &lt;meta http-equiv="Pragma" content="no-cache" /&gt;

    &lt;meta property="og:title" content="CodiQuest" /&gt;
    &lt;meta property="og:image" content="https://www.codiquest.com/img/header.jpg" /&gt;
    &lt;meta property="og:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar :D" /&gt;
    &lt;meta property="og:url" content="https://www.codiquest.com" /&gt;
    &lt;meta name="twitter:card" content="summary_large_image" /&gt;
    &lt;meta name="twitter:title" content="Crear módulos educativos interactivos con Markdown | Codiquest" /&gt;
    &lt;meta name="twitter:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar." /&gt;
    &lt;meta name="description" content="Aprende a crear módulos educativos con contenido teórico y práctico usando Markdown, sin necesidad de programar. Manual y automático." /&gt;
    &lt;meta name="keywords" content="codiquest, módulos educativos, contenido interactivo, markdown, cuestionarios, fill the gap, páginas de aprendizaje, educación digital, aprender programando, preguntas dinámicas" /&gt;
    &lt;link rel="canonical" href="https://www.codiquest.com" /&gt;
    &lt;title&gt;CodiQuest&lt;/title&gt;

    %sveltekit.head%
  &lt;/head&gt;
  &lt;body data-sveltekit-preload-data="hover" class="min-h-screen"&gt;
    &lt;div style="display: contents"&gt;%sveltekit.body%&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</File><h2>Estilo global</h2>
<p>También dentro de la carpeta <code>src</code> encontrarás el fichero <code>app.css</code>, que contiene unos estilos básicos extendidos de <code>tailwind</code> con alguna configuración particular. Estos estilos se aplican dentro del fichero <code>+layout.svelte</code>.</p>
<File icon="css" route="src" name="app.css" codeLang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind typography;

:root &#123;
    --rounded-box: 0.2rem;
&#125;

a.link.external::after,
a.link.youtube::after,
a.link.medium::after,
a.link.devto::after,
a.link.wikipedia::after &#123;
  content: '';
  display: inline-block;
  margin-left: 0.25rem;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
&#125;

a.link.external::after &#123;
  background-image: url('/icons/external-link.svg');
&#125;

a.link.internal::after &#123;
  background-image: url('/icons/external-link.svg');
&#125;

a.link.github::after &#123;
  background-image: url('/icons/github.svg');
&#125;

a.link.manz::after &#123;
  background-image: url('/icons/manz.svg');
&#125;

a.link.yt::after &#123;
  background-image: url('/icons/youtube.svg');
&#125;

a.link.medium::after &#123;
  background-image: url('/icons/medium.svg');
&#125;

a.link.devto::after &#123;
  background-image: url('/icons/devto.svg');
&#125;

a.link.wikipedia::after &#123;
  background-image: url('/icons/wikipedia.svg');
&#125;

a.link::after &#123;
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  margin-left: 0.25rem;
&#125;
</File><h2>Cabeceras y pie de página</h2>
<p>Para editar la cabecera y el pie de página, debemos ir al fichero <code>+layout.svelte</code>, que está en <code>src/routes/+layout.svelte</code>. Dentro de este fichero, edita solo las siguientes líneas (salvo que sepas lo que haces, claro 😅).</p>
<h3>Cabecera</h3>
<p>En la cabecera (parte superior de la página), podemos encontrar un pequeño logotipo de Codiquest, así como un nombre descriptivo y el enlace a la sección &quot;Acerca de&quot;. Puedes editarlo libremente.</p>
<File icon="html" route="src,routes" name="+layout.svelte" codeLang="html">
&lt;script&gt;
  import &#123; base &#125; from '$app/paths';
  import &#123; fly &#125; from 'svelte/transition';
  import '../app.css';
  export let data;

  // Partials
  import HeaderMessage from '$lib/partials/HeaderMessage.svelte';
&lt;/script&gt;

&lt;nav class="navbar bg-base-100" data-theme="synthwave"&gt;
  &lt;div class="container md:mx-auto max-w-5xl"&gt;
    &lt;div class="flex-1"&gt;
      &lt;a class="btn btn-ghost text-xl" href="{base}/"&gt;
        &lt;img src="{base}/favicon.png" alt="¡Hola! Soy Codi :-)" width="32" height="32" /&gt;
        &lt;span class="max-md:hidden"&gt;CodiQuest&lt;/span&gt;
        &lt;div class="badge badge-secondary"&gt;Alpha&lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="flex-none z-10"&gt;
      &lt;ul class="menu menu-horizontal px-1"&gt;
        &lt;li&gt;&lt;a href="{base}/docs"&gt;Documentación&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="{base}/about"&gt;Acerca de&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;
</File><blockquote>
<Message type="TIP">Por defecto, el tema que trae precargado Codiquest es `synthwave` de DaisyUI. Puedes modificarlo tanto en el propio fichero `app.html` (a nivel de cabecera) como en el fichero `tailwind.config.js`. Consulta la documentación de DaisyUI para más información.</Message></blockquote>
<h3>Animación de entrada</h3>
<p>La transición o animación que se muestra aquí abajo sirve para crear un efecto visual de entrada y salida suave cuando el contenido de una página cambia, por ejemplo, al navegar de una página a otra.</p>
<File icon="html" route="src" name="app.html" codeLang="html">
&lt;main class="container md:mx-auto py-2 md:max-w-5xl sm:px-3"&gt;
  &#123;#key data.url&#125;
    &lt;div
      class="max-sm:mx-3"
      in:fly=&#123;&#123; x: -200, duration: 300, delay: 300 &#125;&#125;
      out:fly=&#123;&#123; duration: 300 &#125;&#125; &gt;
      &lt;slot /&gt;
    &lt;/div&gt;
  &#123;/key&#125;
&lt;/main&gt;
</File><h4>Explicación</h4>
<p>Esta es la transición de entrada. Se activa cuando el div se crea (es decir, cuando se navega a la nueva página).</p>
<Code codeLang="js">
in:fly=&#123;&#123; x: -200, duration: 300, delay: 300 &#125;&#125;:
</Code><ul>
<li>x: -200 significa que el elemento &quot;volará&quot; desde la izquierda (-200 píxeles) hasta su posición final. Esto crea un efecto de que el nuevo contenido entra desde un lado.</li>
<li>duration: 300 define que la animación de entrada durará 300 milisegundos.</li>
<li>delay: 300 agrega una espera de 300 milisegundos antes de que comience la animación de entrada. Esto es crucial para que el contenido que sale tenga tiempo de animarse antes de que entre el nuevo.</li>
</ul>
<Code codeLang="js">
out:fly=&#123;&#123; duration: 300 &#125;&#125;
</Code><p>Esta es la transición de salida. Se activa cuando Svelte va a destruir el div anterior.</p>
<ul>
<li>duration: 300 define que la animación de salida durará 300 milisegundos.</li>
</ul>
<p>Como no se especifica una dirección, el comportamiento por defecto de fly es que el elemento se mueva hacia la derecha (x: 200 por defecto) y se desvanezca al mismo tiempo.</p>
<h3>Pie de página</h3>
<p>Un pie de página (o footer, en inglés) es la sección que se encuentra en la parte inferior de una página web, una aplicación o un documento. Suele contener información complementaria, como enlaces de contacto, términos legales, créditos, navegación secundaria, redes sociales o avisos importantes.</p>
<p>En proyectos de código o sitios web, también se puede usar para mostrar agradecimientos, autoría, versión del software o enlaces útiles. Aunque a veces se subestima, el pie de página es un espacio clave para la identidad y transparencia de un proyecto.</p>
<p><Message icon="codi" iconSize="10" label="Plsss" colorClass="bg-stone-50 border-pink-800 text-lime-950">Por favor, no elimines ni modifiques este pie de página. Ayuda a dar visibilidad y a apoyar el proyecto CodiQuest. 🫶</Message></p>
<File icon="html" route="src" name="app.html" codeLang="html">
&lt;footer class="footer items-center p-4 bg-neutral text-neutral-content sticky top-[100vh] mt-5"&gt;
  &lt;div class="flex items-center justify-between w-full container md:mx-auto max-w-5xl"&gt;
    &lt;div class="flex items-center"&gt;
      &lt;img src="/img/codi/favicon.webp" alt="It's a me! Codi!" class="h-4 w-4" /&gt;
      &lt;p class="ml-2"&gt;
        Basado en &lt;a
          href="https://github.com/moiseslodeiro/codiquest"
          target="_blank"
          data-svelte-h="svelte-1nqafas"&gt;CodiQuest&lt;/a
        &gt;
        - &lt;a href="/LICENSE" target="_blank" data-svelte-h="svelte-7quxjq"&gt;Licencia MIT&lt;/a&gt;
      &lt;/p&gt;
    &lt;/div&gt;

    &lt;a target="_blank" aria-label="Visítanos en X!" href="https://twitter.com/codiquest"&gt;
      &lt;svg alt="Twitter/X" class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path
          fill="currentColor"
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        &gt;&lt;/path&gt;
      &lt;/svg&gt;
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/footer&gt;
</File><h2>Partials</h2>
<p>Existe una carpeta dentro de <code>src/lib/</code> llamada <code>partials</code> con los componentes parciales (normalmente estáticos) que representa algún bloque de texto. En este caso podemos editar el contenido para, por ejemplo, editar el contenido de la cabecera en la página principal (<code>MainMessage.svelte</code>), poner un mensaje debajo de la cabecera (<code>HeaderMessage.svelte</code>), etc.</p>
<h2>Quitando el módulo Documentación</h2>
<p>Ahora mismo, al clonar el repositorio, por defecto, aparecerá la sección <code>Documentación</code> en nuestra página.</p>
<p>Quitarla es muy sencillo, basta con:</p>
<ol>
<li>Eliminar el módulo (fichero <code>.js</code>) <code>docs.js</code> de <code>src/modules</code>.</li>
<li>Eliminar la carpeta <code>src/modules/docs</code>.</li>
</ol>
<p>Y listo, automáticamente nos habremos deshecho de la referencia a la documentación.</p>
<p>Otra alternativa, más fácil y dejando por si acaso el módulo, es ir al fichero del módulo y cambiar su atributo <code>public</code> de true (público) a false (privado). En ambos casos, no te olvides de quitar el enlace de <code>+layout.svelte</code> en <code>src/routes</code>. En el segundo supuesto, seguirá siendo accesible, pero no estará listado en los módulos principales ni en la cabecera. 🥸</p>
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