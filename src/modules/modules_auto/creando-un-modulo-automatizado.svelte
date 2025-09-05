
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
</script><Page><p>Ahora que hemos repasado qué es el formato Markdown y algunas de sus propiedades, vamos a hacer una prueba de conversión de <code>.md</code> a módulo. Dentro del entorno de Codiquest, existe una herramienta (un <em>parser</em>) de Markdown que se encarga de:</p>
<ol>
<li>Crear el módulo (si no existe).</li>
<li>Crear los ficheros <code>.js</code> y <code>.svelte</code> requeridos.</li>
</ol>
<p>La herramienta en sí está alojada en <code>/tools/module.js</code> y se puede ejecutar de la siguiente manera:</p>
<Code codeLang="shell">
node tools/module.js &lt;/ruta/entrada.md&gt; [nombre] [público]
</Code><blockquote>
<Message type="TIP">Aunque no es necesario, sí es recomendable establecer los ficheros markdown en la carpeta /src/raw con un formato de &lt;modulo&gt;.module.md para si luego quieres usar la instalación parcial o ejecutar el comando node run module:all lo tengas todo compilado y actualizado de una 😉</Message></blockquote>
<p>Siendo los parámetros:</p>
<ul>
<li><code>ruta de entrada</code>: Obligatorio. Indica la ruta al fichero Markdown que se va a convertir en un módulo de Codiquest.</li>
<li><code>nombre</code>: Opcional. Por defecto, el módulo tomará el nombre del fichero Markdown, salvo que le especifiques lo contrario.</li>
<li><code>público</code>: Opcional (public|private). Por defecto, un módulo será público, salvo que se indique lo contrario.</li>
</ul>
<blockquote>
<Message type="IMPORTANT">El *parser* no es perfecto; he tenido que lidiar con algunas (muchas) excepciones y me he encontrado con muchos problemas por el camino. Es un kraken de 1000 cabezas, sin arquitectura hexagonal, ni microservicios (what?), ni nada. Pero es mi kraken, y funciona en mayor o menor medida. Se pide paciencia y, si algo no funciona, por favor, abre un *issue* en el repositorio. :-)</Message></blockquote>
<p>Para ponerlo a prueba, vamos a partir de este fragmento de un fichero de ejemplo, sacado directamente de la documentación de Codiquest. Porque sí, como adelantábamos en el módulo anterior, toda la documentación se ha creado en base a la misma premisa que los módulos, haciendo uso de Markdown para aprovechar la compatibilidad con visores como el de GitHub. 🥳</p>
<h2>Fichero de ejemplo</h2>
<ol>
<li>Crea este fichero en <code>src/raw/test.md</code> (o donde quieras, en realidad).</li>
<li>Copia el contenido de aquí abajo.</li>
<li>Ejecuta, desde tu directorio de trabajo, <code>node tools/module.js src/raw/test.md ejemplo_auto public</code>.</li>
</ol>
<File icon="markdown" route="src,raw,test" name="test.md" codeLang="markdown">
# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de `Code` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento `Code`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

##  Bloque Code

La primera forma es usar el bloque `Code`, indicando el lenguaje que queramos resaltar y, en su interior, poner el código que queramos resaltar.

```js
&lt;script&gt;
  import Code from '$lib/components/Code.svelte';
  import Page from '$lib/templates/Page.svelte';
&lt;/script&gt;

&lt;Page&gt;
  &lt;p&gt;
    En el siguiente bloque podemos ver cómo, haciendo uso de la librería Prisma, podemos pintar
    bloques de código (en este caso, del lenguaje javascript)
  &lt;/p&gt;
  &lt;Code codeLang="js"&gt;
    const x = 25;
    let y = 2;
    const sum1 = x + y; // sum1 vale 27
    y = 5;
    const sum2 = x + y; // sum2 vale 32
    console.log(sum1, sum2)
  &lt;/Code&gt;
&lt;/Page&gt;
```

Si ahora recargamos nuestra página, podremos ver el código que acabamos de poner 🤹. ¿Sencillo no? Pues.. no tanto.

⚠️ Debido a **cómo Svelte interpreta algunos caracteres internos** de los scripts, tiene sus limitaciones sobre cómo se interpretan caracteres como las llaves `&#123;&#125;` o los símbolos de menor o mayor que `&lt;&gt;` (necesarios para funciones o bloques HTML, entre otras), teniéndose que reemplazar por sus equivalentes en HTML. Más adelante, cuando veamos cómo automatizar la creación de contenido, esto será un problema del cual **no tendremos que preocuparnos**.

&gt; [!IMPORTANT]
&gt; Hasta la fecha, solo es necesario cambiar `&#123;` por `&amp;#123;` o `&amp;lbrace;`, `&#125;` por `&amp;#125;` o `&amp;rbrace;`, `&lt;` por `&amp;#60;` o `&amp;lt;` y `&gt;` por `&amp;#62;` o `&amp;gt;`. Pero si otro carácter diera problemas, debería solucionarse de igual manera.
</File><p>Si todo ha ido bien, deberías ver algo así en tu árbol de directorios y un nuevo módulo agregado a tu página de inicio en Codiquest.</p>
<ModalImage src="img/auto_module.png" alignment="center" width="" alt="Visualización de nuestro módulo dummy en Codiquest" modal="false" />

<hr>
<h2>Peculiaridades del parser</h2>
<p>Hay que tener en cuenta unas cuantas cosas del <em>parser</em>. Como te habrás dado cuenta, la estructura de directorios es prácticamente igual a la que hemos usado al crear un módulo manualmente, con la salvedad de que, en este caso, tenemos un <code>import</code> dentro del fichero de ejemplo <code>ejemplo_auto.js</code>.</p>
<Code codeLang="js">

export const moduleInfo = &#123;
  title: 'Ejemplo_auto',
  shortDescription: 'Welcome to my ejemplo_auto module!',
  public: true,
  linksTo: 'ejemplo_auto',
  image: 'codibg.webp',
  tags: ["ejemplo_auto"],
  isNew: true
&#125;;

import &#123; levels &#125; from './ejemplo_auto/levels.auto.js'; // &lt;-- Aquí importamos los niveles
import &#123; questions &#125; from './ejemplo_auto/questions.auto.js'; // &lt;-- Aquí importamos las preguntas

export &#123; levels, questions &#125;;
</Code><p>El nombre de los ficheros, tanto de niveles como de preguntas, es <code>levels.auto.js</code> y <code>questions.auto.js</code>, lo que indica que es un fichero que se ha generado automáticamente, por lo que <strong>no</strong> debe editarse manualmente, ya que, si se vuelve a ejecutar el comando de convertir (ya sea mediante un <em>workflow</em> de GitHub, de forma automatizada o por otra vía), <strong>los cambios se perderán</strong>.</p>
<p>Ahora bien, <em>¿Qué pasa con el fichero <code>ejemplo_auto.js</code> de <code>src/modules</code>?</em> En este caso, el fichero es estático e inmutable (desde el punto de vista del <em>parser</em>) una vez que se crea. Lo que implica que ese fichero sí puedes modificarlo a tu antojo para, por ejemplo, cambiar los atributos de <code>moduleInfo</code> u organizar los niveles de una forma diferente, sin necesidad del fichero <code>levels.auto.js</code> (o su equivalente para las preguntas). 😄</p>
<blockquote>
<Message type="IMPORTANT">La herramienta `tools/module.js` solo actualiza el contenido del módulo y el fichero `levels.auto.js`, no el `questions.auto.js`. Para eso, ya veremos el equivalente para las preguntas. De esta forma, siempre que quieras actualizar el contenido de tu módulo, podrás usar `tools/module.js` como herramienta sin temor a modificar el resto.</Message></blockquote>
<hr>
<h2>A considerar</h2>
<blockquote>
<Message type="CAUTION">Es **muy** importante que cada sección tenga un **nombre diferente**. Es decir, no es válido tener dos secciones (`#`) con el mismo nombre (por ejemplo, `Variables`).</Message></blockquote>
<p>❌ Este ejemplo estaría <strong>mal</strong>, ya que tiene dos apartados con el mismo nombre (<code># Componentes</code>).</p>
<File icon="markdown" route="src,raw,test" name="test.md" codeLang="markdown">
# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de `Code` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento `Code`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

# Componentes
(...)
</File><h2>Labels automáticas</h2>
<p>Cuando los títulos contienen <code>::</code> (al final), seguidos de etiquetas separadas por comas, como <code>:: a,b,c</code>, los niveles correspondientes de los módulos se generan automáticamente asignando esas palabras como <strong>labels</strong> o <strong>etiquetas</strong>.</p>
<p>Esto permite crear niveles con etiquetas vinculadas directamente desde el título, facilitando la organización y búsqueda del contenido de forma automática a partir de esta sintaxis simple e intuitiva.</p>
<File icon="markdown" route="src,raw,test" name="test.md" codeLang="markdown">
# Componentes :: A,B,C

En este bloque trataremos los temas A, B y C. No aparecen directamente en el título pero se puede usar el buscador para buscar por las labels A, B o C
</File>
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