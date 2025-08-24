
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
</script><Page><h2>publish:gh</h2>
<h3>Publica la carpeta <code>build</code></h3>
<p>Para compilar los recursos de tu aplicación, ejecuta el comando <code>npm run publish:gh</code> desde tu terminal. Esto creará la carpeta <code>build</code> y la subirá a GitHub Pages. Adicionalmente, prepara todo lo necesario, como, por ejemplo, crear el fichero <code>.nojekyll</code> en la carpeta <code>build</code>.</p>
<h3>Configura tu GitHub Pages con la rama <code>gh-pages</code></h3>
<ul>
<li>Ve al repositorio en GitHub.</li>
<li>Haz clic en <strong>Settings</strong>.<ul>
<li>En el menú lateral, selecciona <strong>Pages</strong>.</li>
<li>En la sección <strong>Source</strong>, selecciona:<ul>
<li><strong>Branch</strong>: <code>gh-pages</code>.</li>
<li><strong>Folder</strong>: <code>/</code> (root).</li>
</ul>
</li>
<li>Haz clic en <strong>Save</strong>.</li>
</ul>
</li>
</ul>
<blockquote>
<Message type="IMPORTANT">Debes tener tu repositorio público si quieres poder acceder a la URL; de lo contrario, no te será posible configurar la URL de GitHub Pages.</Message></blockquote>
<h3>Verificar el sitio publicado</h3>
<h4>URL pública de GitHub</h4>
<p>Podrás ver el contenido de tu página web en <code>https://&lt;usuario&gt;.github.io/&lt;repositorio&gt;/</code> o, si tu repositorio es de tipo &quot;organización&quot;, en <code>https://&lt;usuario&gt;.github.io/</code>.</p>
<h4>Dominio personalizado</h4>
<p>Si dispones de un dominio personalizado (del estilo <code>codiquest.com</code>), podrás vincularlo mediante <a href="https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site" class="link link-primary github" target="_blank" rel="noopener noreferrer">DNS</a>.</p>
<blockquote>
<Message type="CAUTION">Cambia el fichero `CNAME` que hay dentro de la carpeta `static` para enlazarlo al dominio que desees.</Message></blockquote>
<h2>publish:prod</h2>
<p>En este caso, se realiza el mismo proceso que con <code>publish:gh</code>, pero...</p>
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