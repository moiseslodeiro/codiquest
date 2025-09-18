
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
    "title": "Primeros pasos en Git",
    "url": "https://terminaldelinux.com/git/primeros-pasos/crear-repositorio/"
  }
];</script><Page {resources}><h2>Prefacio</h2>
<blockquote>
<Message type="NOTE">Antes de empezar este módulo, se asume que ya dispones de una cuenta gratuita de GitHub y que la tienes configurada en tu equipo local. 🐱</Message></blockquote>
<p>En este módulo, no se explicará cómo subir a GitHub los cambios que hayas podido hacer en tu módulo, sino cómo publicar el código de la <code>build</code> de una forma limpia. Si tienes dudas de cómo funciona Git, échale un vistazo al enlace de <a href="https://www.terminaldelinux.com" class="link link-primary external" target="_blank" rel="noopener noreferrer">terminaldelinux</a> que hay en los recursos.</p>
<p>Pero antes de meternos en faena, vamos a repasar lo que hacían los comandos <code>build</code> y <code>preview</code>.</p>
<h2>Build y preview</h2>
<p>¿Recuerdas cuando en el módulo de <a href="{base}/docs/instalacion-en-local" class="link link-primary internal">instalación local</a> vimos el comando <code>pnpm  run build</code> y <code>pnpm  run preview</code>? Pues era solo un adelanto de lo que vamos a ver a continuación.</p>
<h3>Build</h3>
<p>El comando <code>pnpm  run build</code> toma todo (módulos, componentes, plantillas, imágenes, etc.) que has utilizado para el desarrollo de tus módulos en Codiquest y lo compacta en una carpeta llamada <code>build</code>. Esta carpeta está aislada del resto del código; podrías moverla de directorio y, con tan solo ejecutar un servidor que sirva contenido HTML, podrías ver tu contenido estático. ¡Wow! 🤩</p>
<p>Esta carpeta será la responsable de mostrar tu contenido en lo que se denomina <code>GitHub Pages</code>, que no es más que un servidor de contenido estático alojado en el propio GitHub. De esta forma, podremos mostrar el contenido generado de una forma optimizada directamente desde GitHub, sin necesidad de recurrir a un <em>hosting</em> externo de pago.</p>
<h3>Preview</h3>
<p>Pero antes de subir ningún contenido, repasemos qué hace el comando <code>pnpm  run preview</code>:</p>
<p>El comando <code>pnpm  run preview</code> crea un servidor local que sirve la carpeta <code>build</code> generada anteriormente. Sería el equivalente a lo que podrás ver en GitHub Pages en breve, pero en tu entorno local, para que puedas verificar que todo esté bien antes de subir el contenido.</p>
<h2>Publicando en Gihub</h2>
<p>Ahora sí, vamos a subir nuestro contenido de la carpeta <code>build</code> a GitHub para preparar el entorno que luego veremos reflejado en GitHub Pages. Aquí hay varias opciones: la más manual y un poco más complicada (con la que vamos a aprender y a nutrir nuestro cerebro de información) o la opción aburrida y automática. ¡Ambas opciones tendrán el mismo resultado! 🤠</p>
<h3>De forma manual</h3>
<p>Vamos a crear una rama <code>gh-pages</code> (el estándar de GitHub) con el contenido de la carpeta <code>build</code>. Si estabas pensando en crear un proyecto temporal con el contenido de la carpeta <code>build</code>, copiar el contenido adentro, luego iniciar un repositorio, hacer un <em>commit</em>, añadir un remoto y subir los cambios... puede que estés en lo cierto. ¡Pero esa forma es muy básica! ¿Vemos cómo hacerlo como un/a <em>pro</em>? 🥊</p>
<p>Para hacerlo más limpio, sin necesidad de crear directorios temporales, vamos a usar ramas sin historial para hacerlo de forma automática.</p>
<blockquote>
<Message type="IMPORTANT">A estas alturas, es necesario que ya hayas ejecutado `pnpm  run build` y que tengas la carpeta `build` en tu directorio. 😊</Message></blockquote>
<blockquote>
<Message type="NOTE">Se asume que tu remoto se llama, por convención, `origin` y que tu rama actual es `main`. Cámbialo según tus necesidades.</Message></blockquote>
<Code codeLang="bash">
git checkout --orphan gh-pages  # Crea rama SIN historial
git reset --hard
git add build/
git commit -m "Contenido inicial de gh-pages"
git mv build/* ./
git mv build/.nojekyll ./
git rm -rf build/
git commit -m "Mover build/ a raíz"
git push origin gh-pages --force
git switch main
git branch -D gh-pages # Borramos la rama gh-pages
</Code><p>De esta forma, tendremos una rama llamada <code>gh-pages</code> en nuestro repositorio, con el contenido de la carpeta <code>build</code> listo para ser servido por GitHub Pages.</p>
<h3>De forma automática</h3>
<p>Dentro de los comandos que pueden ejecutarse en el entorno local, se encuentra <code>pnpm  run publish:gh</code>, que, automáticamente, hará lo siguiente:</p>
<ol>
<li>Ejecutará un <code>pnpm  run build</code> para crear la carpeta local <code>build</code>.</li>
<li>Creará una rama llamada <code>gh-pages</code> en tu repositorio y subirá <strong>solo</strong> el contenido de la carpeta <code>build</code>, sin nada del contenido dinámico de tu página.</li>
</ol>
<p>Vale, es más cómodo... pero, ¿y lo bien que sienta saber lo que hace algo por dentro? 🙃</p>
<blockquote>
<Message type="IMPORTANT">Si la rama remota ya existe, puede que este comando dé problemas. Para asegurarte, borra la rama remota ejecutando `git push origin --delete gh-pages` antes de lanzar `pnpm  run publish:gh`.</Message></blockquote>
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