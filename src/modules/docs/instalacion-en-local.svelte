
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
</script><Page><p>En esta parte de la documentación, veremos los requisitos para poder montar Codiquest en local.</p>
<h2>Prerequisitos</h2>
<ul>
<li>Un sistema operativo compatible con Node (prácticamente todos).</li>
<li>Git instalado.</li>
<li>Un editor de código como VSCode (no es imprescindible, pero sí recomendable).</li>
<li>Versión de Node recomendada: 22+ (probado en la 22.12.0).<ul>
<li>Recomiendo visitar <a href="https://lenguajejs.com/npm/introduccion/instalacion-node-con-nvm/" class="link link-primary manz" target="_blank" rel="noopener noreferrer">este enlace</a> de lenguajejs.com como guía para instalar node.</li>
</ul>
</li>
</ul>
<blockquote>
<Message type="NOTE">Se asume que para la instalación local (a diferencia de la remota) se presuponen ciertos conocimientos sobre cómo manejar una terminal, clonar un repositorio, etc.</Message></blockquote>
<h2>Clonando el repositorio</h2>
<p>Abre una terminal y clona el <a href="https://github.com/moiseslodeiro/codiquest" class="link link-primary github" target="_blank" rel="noopener noreferrer">repositorio</a> en su rama principal, <strong>main</strong>:</p>
<Code codeLang="bash">
git clone git@github.com:moiseslodeiro/codiquest.git
</Code><h2>Instalando las dependencias</h2>
<p>Una vez clonado el repositorio, vamos a proceder a la instalación de las dependencias. Para ello, abre una terminal en la carpeta del repositorio e instala las dependencias con el siguiente comando:</p>
<Code codeLang="bash">
cd codiquest
npm install
</Code><p>Si todo ha ido bien, deberías ver algo así:</p>
<Code codeLang="bash">
codi@local:~/Workspaces/codiquest$ npm install
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated domexception@4.0.0: Use your platform's native DOMException instead
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 497 packages, and audited 498 packages in 17s

103 packages are looking for funding
  run `npm fund` for details

11 vulnerabilities (3 low, 8 moderate)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
</Code><blockquote>
<Message type="IMPORTANT">Sí, aparecen 11 vulnerabilidades (3 de bajo impacto y 8 moderadas), pero no afectan a los despliegues de producción, solo a los entornos de desarrollo, por lo que no deberías preocuparte. Más información en el apartado auditoría de seguridad del README.md.</Message></blockquote>
<h2>Ejecutando Codiquest en local</h2>
<p>Ya debería estar todo listo, ¿verdad? Solo nos queda ejecutar el siguiente comando dentro de nuestra carpeta <code>codiquest</code> para ver nuestra plataforma de aprendizaje y enseñanza favorita (a partir de ahora). 😍</p>
<Code codeLang="bash">
npm run dev
</Code><p>Esto debería arrojar una salida de comando similar a esta:</p>
<Code codeLang="bash">
codi@local:~/Workspaces/codiquest$ npm run dev

&gt; codiquest@2.1.0 dev
&gt; concurrently 'npm run watch:md' 'vite dev'

[0]
[0] &gt; codiquest@2.1.0 watch:md
[0] &gt; chokidar 'docs/**/*.md' -c 'node tools/module.js &#123;path&#125;'
[0]
[0] Watching "docs/**/*.md" ..
[1] [i] NODE_ENV development
[1]
[1]
[1]   VITE v4.5.14  ready in 913 ms
[1]
[1]   ➜  Local:   http://localhost:5173/
[1]   ➜  Network: use --host to expose
[1]
[1] 🌼   daisyUI 4.12.24
[1] ├─ ✔︎ 4 themes added         https://daisyui.com/docs/themes
[1] ╰─ ❤︎ Support daisyUI project:       https://opencollective.com/daisyui

(...)
</Code><p>Finalmente, si accedemos a la URL que nos indica (por defecto, <code>http://localhost:5173</code>), deberíamos ver algo así:</p>
<ModalImage src="img/install/03.png" alignment="center" width="w-1/2" alt="Previsualización de la instalación de Codiquest" modal="false" />

<h2>Compilando</h2>
<p>Una de las características de Codiquest es que, realmente, todo se ejecuta en el <em>frontend</em> (es decir, en tu navegador), por lo que no hace falta disponer de un <em>backend</em> para almacenar la información, ya que esta es estática.</p>
<p>Para convertir el contenido que tenemos (en formato de desarrollo) a un formato más compacto y óptimo, debemos ejecutar lo siguiente:</p>
<Code codeLang="bash">
npm run build
</Code><p>Este comando compilará nuestro contenido y generará una carpeta llamada <code>build</code> con todo el contenido <strong>estático</strong>. Es decir, dentro de la carpeta <code>build</code> no veremos módulos ni nada del código que hemos agregado o que agregaremos en un futuro. No obstante, que no veamos ese código significa que todo ha ido a la perfección y que podremos publicar el contenido estático como si lo hubiéramos maquetado a mano 😊.</p>
<h3>Previsualización</h3>
<p>¡Oye! Pero, ¿y cómo sé si mi página se ve como debe? Lo único que debes hacer es ejecutar el siguiente comando, similar al que vimos de <code>npm run dev</code>, pero con la salvedad de que, esta vez, el servidor se va a montar sobre la carpeta <code>build</code> para mostrar tus archivos estáticos.</p>
<Code codeLang="bash">
npm run preview
</Code><blockquote>
<Message type="NOTE">Por defecto, el servidor (a diferencia de `npm run dev`, que se ejecutaba en el puerto 5173) se ejecutará en el puerto **4173** y, posiblemente, en una ruta `/codiquest`.</Message></blockquote>
<blockquote>
<Message type="IMPORTANT">Cualquier cambio que ahora hagas a nivel de código NO se mostrará automáticamente en esta previsualización, ya que necesita volver a compilarse con `npm run build`.</Message></blockquote>
<h2>¿Y Ahora?</h2>
<p>Vamos a darle un vistazo a los módulos (vamos a la <code>Siguiente lección</code>). 🥳</p>
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