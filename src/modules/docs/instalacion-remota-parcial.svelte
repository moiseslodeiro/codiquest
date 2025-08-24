
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
</script><Page><p>En el apartado anterior, pudimos ver cómo hacer una instalación remota completa; es decir, copiar el repositorio <strong>entero</strong> de Codiquest para poder modificarlo, añadir recursos, etc. Pero... ¿hay algo más ligero incluso? ¡Sí! Digamos que podemos usar <strong>Codiquest</strong> como si de una librería se tratara, subiendo solo el contenido de tus módulos y preguntas a tu repositorio y haciendo uso de un <em>workflow</em> que:</p>
<ol>
<li>Detecte cambios en tu contenido bajo <code>src/raw</code> (o ejecución manual).</li>
<li>Descargue la última versión de Codiquest.</li>
<li>Compile el contenido de tus ficheros Markdown en módulos.</li>
<li>Publique el contenido.</li>
</ol>
<p>Esta opción, aunque pueda parecer más óptima, puede tener algunos inconvenientes, como que no sería posible editar (en primera instancia) el contenido de los componentes o el de los módulos (ficheros <code>.js</code>) a tu antojo.</p>
<h2>Pasos</h2>
<ul>
<li>Crea tu propio repositorio en GitHub.</li>
<li>Crea una carpeta <code>static</code>.</li>
<li>Crea una carpeta <code>src</code>.<ul>
<li>Crea una carpeta <code>raw</code>: aquí dentro irán los ficheros <code>*.module.md</code> y <code>*.question.md</code>.</li>
<li>Si lo necesitas, crea una carpeta <code>routes</code> e incluye el contenido de los ficheros que quieras sobreescribir, partiendo de los originales de Codiquest.</li>
</ul>
</li>
<li>Crea una carpeta <code>.github/workflows</code> y añade el siguiente <em>workflow</em> a tu repositorio:</li>
</ul>
<File icon="html" route=".github,workflows" name="workflow.yaml" codeLang="yaml">
name: Publish Module Files, Questions and Publish

on:
  push:
    branches:
      - main
    paths:
      - 'src/raw/**'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout self repo
        uses: actions/checkout@v4

      - name: Checkout Codiquest
        uses: actions/checkout@v4
        with:
          repository: 'moiseslodeiro/codiquest'
          path: 'codiquest'
          ref: 'main'

      - name: Installing node
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Copy resources to Codiquest
        run: |
          cp -r src/* codiquest/src/
          cp -r static/* codiquest/static/

      - name: Installing dependencies
        run: npm install
        working-directory: './codiquest'

      - name: Parsing modules
        run: npm run module:all
        working-directory: './codiquest'

      - name: Parsing tests
        run: npm run convert:all
        working-directory: './codiquest'

      - name: Create build folder
        run: npm run build
        working-directory: './codiquest'

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: $&#123;&#123; secrets.GITHUB_TOKEN &#125;&#125;
          publish_dir: ./build
          publish_branch: gh-pages
          force_orphan: true
</File><p>Solo ten en cuenta poner:</p>
<ul>
<li>Los recursos (imágenes, etc.) en la carpeta <strong>static</strong>.</li>
<li>Módulos y cuestionarios, siguiendo el patrón de <code>*.module.md</code> y <code>*.question.md</code> en <code>src/raw/</code>.<ul>
<li>Incluye todo aquello que quieras sobreescribir; por ejemplo, el fichero <code>routes/+layout.svelte</code>, etc.</li>
</ul>
</li>
</ul>
<blockquote>
<Message type="NOTE">No te voy a engañar: he creado el *workflow*, pero no lo he probado aún. Si lo haces y funciona, manda una estrellita ⭐; y si no, crea una *pull request* al repositorio con los cambios que hagan falta. UwU</Message></blockquote>
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