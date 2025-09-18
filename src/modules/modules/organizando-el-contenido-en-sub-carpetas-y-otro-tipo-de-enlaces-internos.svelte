
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
</script><Page><p>Vamos a dar un salto de calidad. Hasta ahora, los niveles los habíamos definido con la etiqueta <code>html</code>, pero ya sabemos que <code>page</code> sirve para cargar contenido dinámico dentro del módulo. Para tenerlo un poco más organizado, vamos a crear una carpeta dentro del módulo que se llame <code>basic</code> (o como quieras llamarla) y, dentro, un fichero llamado <code>holamundo.svelte</code> y, adicionalmente (y <strong>una vez más</strong>), un fichero <code>+page.js</code> con el mismo contenido de antes (en lugar de crearlo desde cero, puedes copiar el mismo fichero a la carpeta <code>basic</code>).</p>
<h2>Creando la carpeta basics</h2>
<h3>src/modules/dummy/basic/+page.js</h3>
<Code codeLang="js">
export const prerender = true;
</Code><h3>src/modules/dummy/basic/helloworld.svelte</h3>
<Code codeLang="svelte">
Hola mundo 🌍
</Code><p>Ahora, vamos a cambiar el fichero <code>dummy.js</code> por el siguiente contenido:</p>
<Code codeLang="js">
export const moduleInfo = &#123;
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
&#125;;

export const levels = [
  &#123; page: 'index' &#125;,
  &#123;
    page: 'basic/helloworld', // &lt;-- Carpeta basic, dentro del módulo dummy, fichero helloworld.svelte
    title: 'Bienvenid@s'
  &#125;
];
</Code><p>Mucho mejor, ¿no? Ahora podemos crear páginas de una manera jerárquica con nuestros módulos e incluso añadirle un título que nos sirva como referencia dentro del propio módulo.</p>
<blockquote>
<Message type="TIP">Hay un comando dentro del proyecto que es `pnpm  run newmodule &lt;nombre&gt;` para crear módulos con mayor facilidad 😇 (igual debí haber puesto esto antes...).</Message></blockquote>
<blockquote>
<Message type="IMPORTANT">Por limitaciones de la propia app y de cómo se hace el prerrenderizado estático, solo sería posible establecer un nivel de jerarquía. Es decir, `src/modules/dummy/basic/helloworld` sí es posible, mientras que `src/modules/dummy/basic/otronivel/helloworld` no.</Message></blockquote>
<h2>Otros tipos de enlaces</h2>
<p>Aparte del contenido <code>html</code> que habíamos comentado en la constante <code>levels</code>, hemos podido ver que también es posible vincular páginas e, incluso, hacer referencia a páginas dentro de un subnivel (una carpeta). No obstante, existe otro tipo de vínculo: el de vincular otro <code>módulo</code>.</p>
<p>Supongamos que tenemos otro módulo llamado <code>chuchu</code> y queremos enlazarlo en nuestro índice (es decir, dentro de la lista de niveles del módulo <code>dummy</code>). Bastaría con hacerlo de la siguiente manera:</p>
<File icon="js" route="src,modules" name="test.md" codeLang="js">
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
    title: 'Enlace al módulo chuchu',
    module: 'chuchu' // &lt;-- Enlace al módulo chuchu
  &#125;
];
</File><p>De esta forma, podemos segmentar un poco más nuestros contenidos y crear vínculos entre ellos. Un ejemplo de esto es el módulo de <code>Documentación</code> de este mismo curso. Si te das cuenta, en el índice existen varios enlaces de tipo <code>module</code>.</p>
<h3>¿Qué criterio debería seguir? ¿Pages o módulos?</h3>
<p>Si bien se puede meter todo el contenido directamente en un fichero <code>.md</code> y utilizarlo como <code>pages</code>, no lo recomendaría, para no tener demasiado contenido en el fichero <code>Markdown</code> y poder modularizarlo. De esta forma, y según el criterio que yo he seguido,</p>
<ul>
<li><strong>Page</strong>: Para contenido lineal; por ejemplo, un curso donde tienes la lección 1, la lección 2, etc.</li>
<li><strong>Module</strong>: Para contenidos que, a su vez, tengan más subniveles. Por ejemplo, el contenido de &quot;<a href="{base}/modules" class="link link-primary internal">módulos</a>&quot; es, en sí, un minicurso sobre cómo crear módulos manualmente. En este caso, prefiero crearlo aparte y enlazarlo por otra vía, como, por ejemplo, dentro del módulo <code>docs</code> como parte de su contenido. 😊</li>
</ul>
<blockquote>
<Message type="TIP">En el caso del ejemplo donde se enlaza al módulo `chuchu`, suelo configurar este como `public: false` para que no se muestre en el listado principal de módulos. Sigue siendo accesible, pero no es visible a simple vista.</Message></blockquote>
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