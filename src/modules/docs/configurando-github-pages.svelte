
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
    "title": "Configurar un dominio personalizado para tu sitio de Páginas de GitHub",
    "url": "https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"
  },
  {
    "title": "DNS Checker",
    "url": "https://dnschecker.org/"
  }
];</script><Page {resources}><p>¡Nos adentramos en la recta final! 🥳 Vamos a ver qué consideraciones debemos tener para poder publicar nuestra página en GitHub Pages.</p>
<h2>Habilitando Github Pages</h2>
<p>En primer lugar, hay que acudir al apartado <code>Settings &gt; Pages</code> <strong>dentro de tu repositorio</strong> y, una vez dentro, seleccionar desde qué rama quieres hacer el despliegue del contenido estático creado en la carpeta <code>build</code>. Recuerda que, por defecto, la rama que hemos creado ha sido <code>gh-pages</code>, aunque puedes seleccionar cualquiera.</p>
<ModalImage src="img/install/10.png" alignment="" width="5/6" alt="Localización pestaña de Actions" modal="false" />

<p>Cuando selecciones la rama destino, podrás darle al botón <code>Save</code> y tu página quedará publicada en <code>https://tunombredeusuario.github.io/turepositorio</code>. 🤟. ¿Y esto es todo? En parte, sí. Pero sigamos con las consideraciones y la personalización del dominio, si es el caso. 🤗</p>
<h2>Consideraciones</h2>
<p><code>GitHub Pages</code> es un servicio gratuito de alojamiento de contenido estático, pero tiene varias peculiaridades:</p>
<h3>Capa gratuita</h3>
<p>Para poder utilizar la capa gratuita y publicar tu sitio, el repositorio debe ser <strong>público</strong>, o bien debes disponer de la capa <code>enterprise</code>. ¿Significa esto que debo publicar mi código, con todo el contenido, etc.? No necesariamente. <strong>Compartir es vivir</strong>, pero si, por un casual, quieres separar la parte <em>privada</em> (el código fuente en sí) de la parte visible, siempre puedes publicar la carpeta <code>build</code> en otro repositorio, manteniendo el repositorio de código en privado.</p>
<Code codeLang="bash">
npx gh-pages -d build -f -t -r git@github.com:TU_USUARIO/TU_REPO_PUBLICO.git
</Code><h2>Configuración de dominio</h2>
<p>Toda la configuración del <strong>dominio</strong> se realiza dentro del apartado <em>Settings</em> de tu repositorio (<code>Settings &gt; Pages &gt; Custom Domain</code>). A modo de resumen, necesitarás disponer de un <strong>dominio propio</strong> en el que puedas configurar el apartado de <strong>DNS</strong> para poder apuntar un registro a GitHub Pages. Tienes toda la información en los enlaces del apartado <strong>Recursos</strong> de esta página.</p>
<h3>URL en github.io</h3>
<p>Por defecto, GitHub Pages asigna un dominio gratuito, a menos que configures uno personalizado.</p>
<ul>
<li>Sitio principal (de usuario/organización): <code>https://tu-usuario.github.io</code></li>
<li>Sitio de un repositorio específico: <code>https://tu-usuario.github.io/nombre-repositorio</code></li>
</ul>
<h4>Recomendaciones</h4>
<ul>
<li><strong>Siempre</strong> usa HTTPS (GitHub lo habilita automáticamente).</li>
<li>Si necesitas un dominio propio (p. ej., tudominio.com), configura un dominio personalizado.</li>
</ul>
<h3>Dominio personalizado y DNS</h3>
<p>Dentro de GitHub Pages, es posible configurar un dominio personalizado (del estilo <code>codiquest.com</code>, <code>www.codiquest.com</code>, etc.). El dominio debe ser <strong>único</strong> dentro de GitHub. Si ya tienes un dominio registrado en GitHub Pages que apunta a otro repositorio, no puedes sobreescribirlo, aunque sea dentro de tu misma cuenta. Para ello, debes quitar el vínculo del anterior y añadirlo al nuevo.</p>
<h4>Configurar DNS</h4>
<p>Configurar las DNS te permitirá redirigir el tráfico de tu dominio a <code>GitHub Pages</code>. Para ello:</p>
<ul>
<li>Configura el dominio dentro de <code>GitHub Pages</code> según tu criterio:<ul>
<li><strong>Opción A (Recomendada con subdominio <code>www</code>)</strong><ul>
<li>Configura un registro <code>CNAME</code> de <code>www.tudominio.com</code> a <code>tu-usuario.github.io</code>.</li>
</ul>
</li>
<li><strong>Opción B (Dominio apex, p. ej., <code>tudominio.com</code>)</strong><ul>
<li>Configura un registro de tipo A: tudominio.com → 185.199.108.153 (y otros IPs de GitHub -revisa las IPs en el enlace de Github en la pestaña de recursos-).</li>
<li>O configura un registro de tipo ALIAS/ANAME: Si tu registrador lo soporta (Cloudflare, etc.).</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>A modo de ejemplo, mira la siguiente imagen de cómo se configuran las <em>DNS</em> para el <em>subdominio</em> <code>demo.codiquest.com</code>.</p>
<ModalImage src="img/install/dns.png" alignment="" width="5/6" alt="Configuración de un registro CNAME para demo.codiquest.com" modal="false" />

<blockquote>
<Message type="NOTE">Este paso hay que hacerlo donde tengas registrado el dominio</Message></blockquote>
<p>Una vez tengas <em>apuntado</em> el dominio en tu registro de DNS a tu url en <em>Github Pages</em>, deberías ver un tick de confirmación en la propia página de GitHub Pages.</p>
<ModalImage src="img/install/dns2.png" alignment="" width="5/6" alt="Comprobación DNS en Github Pages" modal="false" />

<blockquote>
<Message type="TIP">No te olvides de habilitar el enforce HTTPS</Message></blockquote>
<h4>Fichero CNAME</h4>
<p>El fichero <code>CNAME</code> (en la carpeta <code>static</code>) le indica a GitHub Pages qué dominio personalizado usar (p. ej., <code>www.tudominio.com</code>). Aunque GitHub lo crea automáticamente al añadir el dominio en <code>Settings &gt; Pages</code>, puedes generarlo tú mismo (editando el fichero que ya existe en el repositorio).</p>
<blockquote>
<Message type="IMPORTANT">Es importante que el fichero esté presente en la raíz (`/`) de la rama donde se va a desplegar el contenido estático.</Message></blockquote>
<blockquote>
<Message type="CAUTION">Si se borra el fichero `CNAME`, GitHub revertirá los cambios del dominio a `usuario.github.io`.</Message></blockquote>
<p>El contenido del fichero es el dominio en sí, sin nada más (p. ej., <code>www.codiquest.com</code>).</p>
<h2>Fichero .nojekyll</h2>
<p>Es un fichero vacío cuya función es desactivar el procesamiento de Jekyll (el generador de sitios estáticos de GitHub). Es necesario porque pueden existir carpetas que empiecen por <code>_</code> y, además, porque el sitio de Codiquest es un sitio compilado. <strong>Debe</strong> ir en la raíz del repositorio (actualmente, está en la carpeta <code>assets</code>, pero a la hora de hacer el <code>build</code> se mueve a la raíz).</p>
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