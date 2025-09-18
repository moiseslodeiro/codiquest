# Guía de desarrollo de módulos

Los **módulos** en *Codiquest* son el corazón del contenido que compartimos. En ellos, organizamos todo lo necesario para aprender de forma **estructurada y práctica**.

Un módulo se compone principalmente de dos partes: el contenido **teórico** y el contenido **práctico**.

## 📚 Contenido teórico

Está formado por páginas que explican conceptos mediante texto, imágenes y —si se desea— actividades interactivas, como preguntas para completar fragmentos de código (lo que llamamos **"Fill the gap"**). Estas actividades **no son obligatorias**, pero ayudan a reforzar lo aprendido sin tener que releer todo el contenido de nuevo.

## 🧪 Contenido práctico

Los módulos también pueden incluir **cuestionarios** de tipo test, a modo de examen. Por hacer un símil,

- La parte teórica es como el **libro de texto** de toda la vida (sí, ese que usábamos cuando *aún no teníamos canas* 😄).
- Y los cuestionarios serían como la clásica **batería de ejercicios** que venía al final del tema.
Lo mejor es que ambas partes pueden existir por separado: puedes tener cuestionarios sin «temario» o temario sin preguntas.

Y todo esto sin necesidad de saber programar, ¡basta con conocer un poquito de **[Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)**!. 😉

# Crear un nuevo módulo

Hay varias formas de crear un módulo. Empezaremos por la forma manual para que luego puedas entender cómo funciona la creación [automática](/modules_auto) a partir de otros medios, como la conversión de Markdown a módulos. Para ilustrarlo, vamos a crear un módulo llamado `dummy`. *¡Allé voy!*

## Pasos a seguir

1. Genera el fichero `src/modules/dummy.js`. # O el nombre que quieras darle a tu nuevo módulo 😊
2. Exporta, al menos, tres elementos: `moduleInfo`, `levels` y `questions`.

Ejemplo de cómo debería verse tu fichero:

```js
export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [{}];
export const questions = []
```

> [!TIP]
> Puedes cambiar la descripción y el título si quieres. Para el ejemplo, hemos quitado el módulo de Documentación.

Aunque sea básico, si ya tenías en ejecución tu entorno de desarrollo y pruebas con `pnpm  run dev`, deberías ver tu nuevo módulo en la pantalla principal, e incluso podrás entrar en él, aunque lo encontrarás vacío. ¿No es maravilloso?

![Visualización de nuestro módulo dummy en Codiquest](/static/img/install/01.png?align=center&size=w-2/3)

---

### Valores de `moduleInfo`

El objeto `moduleInfo` describe los metadatos de cada curso. Sus campos habituales son:

- **title**: nombre visible del módulo.
- **shortDescription**: pequeño resumen que se muestra en las tarjetas.
- **linksTo**: ruta donde se publica el módulo (**debe** coincidir con el nombre de tu módulo (en este caso de ejemplo, `dummy`)).
- **public**: cuando es `true`, el módulo aparece en el listado general; si es `false`, la página existe, pero no se enlaza públicamente (¡aunque sigue siendo accesible!).
- **image** e **icon**: archivos opcionales (con base en la carpeta `static`) para ilustrar el curso.
- **tags**: lista de etiquetas para clasificar y tener una idea visual de de qué se trata.
- **isNew**: indica que el módulo es reciente.

### Constante `levels`

De momento, no entraremos mucho en materia; solo diremos que `levels` contendrá un listado de los **niveles a visitar** (lecciones del módulo). Hablando en términos técnicos, es un array de objetos `clave:valor`, donde la clave define el tipo de contenido que se mostrará (un HTML simple, una página, una prueba de rellenar huecos, un cuestionario, etc.).

> [!IMPORTANT]
> El primer elemento del array no es un nivel en sí, sino que se toma como la descripción del módulo (lo que se verá en la cabecera).

### Constante `questions`

Como mencionábamos en la lección anterior, vamos a disponer de una constante `questions` que nos servirá para almacenar preguntas a modo de cuestionario. Estas preguntas son independientes, pero también puedes crear preguntas de tipo cuestionario e incluirlas como un nivel más. Más adelante, entraremos en detalle.

# Creando nuestra primera página

Vamos a empezar a crear contenido dentro de nuestro módulo. La primera forma que veremos es una manera rápida de crear **pequeños** contenidos sin tener que volverse loco con páginas externas. Para ello, haremos uso del parámetro (clave) `html` dentro de `levels`.

## Parámetro `html`

Para crear nuestra primera página dentro de nuestro módulo y, de paso, darle una descripción interna, vamos a cambiar el contenido de nuestro `dummy.js` por el siguiente:

```js
export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  {
    html: '¡Hola! Este es mi primer <b>nivel</b>' // Recuerda, este nivel es la descripción del módulo
  },
  {
    html: 'Esta es mi primera página'
  }
];
```

Si recargamos y accedemos a nuestro módulo, podremos ver una breve descripción a modo de cabecera del módulo y, además, un Nivel 1 que, si entramos, veremos el texto "Esta es mi primera página". ¡Genial! ¿No? Pero igual es un poco engorroso estar definiendo todo el contenido HTML dentro del fichero JavaScript en lugar de tenerlo modularizado. Pero ¡no te preocupes!, ahora veremos cómo mejorarlo.

> [!NOTE]
> Recuerda: La etiqueta `html` está pensada para *pequeños* mensajes (pequeñísimos) o por si no quieres disponer de un fichero `index.svelte` para la página principal por un motivo u otro.

![Visualización del contenido del módulo](/static/img/install/02.png?align=center&size=w-1/3)

### Clave tipo `page`

Dado que tener todo el contenido dentro del tipo `html` puede ser muy engorroso, hagamos uso del tipo `page` para poder referenciar páginas dentro de Codiquest. Para crear nuestra primera página de manera modular, vamos a crear una **carpeta `dummy` dentro de `src/modules`**. El nombre de la carpeta **debe** coincidir con el del fichero de JavaScript (en este caso, **dummy**).

Dentro de la carpeta, vamos a crear dos archivos: `+page.js` (sí, con el `+`) e `index.svelte`, con este contenido, respectivamente:

### 📄 src/modules/dummy/+page.js

```js
export const prerender = true;
```

### 📄 src/modules/dummy/index.svelte

```html
<b>¡Mi primer módulo!</b>
<br><br>
Aquí va la introducción a lo que será mi módulo. Puedes usar contenido html pero nada más.
```

Ahora, una vez creados esos ficheros, vamos a modificar el fichero `dummy.js` (de la carpeta `src/modules`) por el siguiente contenido:

```js
export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' }, // <-- Hemos cambiado el contenido de html a page, indicando que es la página "index.svelte" del módulo
  { html: 'Esta es mi primera página' }
];
```

Si todo ha ido bien, el contenido que antes estaba definido en `html` para el bloque de la cabecera del módulo debería verse reflejado por el contenido del fichero `index.svelte` que acabamos de crear.

## Creando páginas dinámicas

Aunque no es lo recomendable, es posible crear páginas dinámicas dentro de un módulo **sin** que estén enlazadas en la constante `levels`. Para ello, lo único que tienes que hacer (y esto solo es válido en el primer nivel del módulo) es crear tu página dentro de la carpeta del módulo, con la extensión `.svelte` y con el contenido que desees.

> [!IMPORTANT]
> El fichero **no** debe llamarse `test.svelte`, ya que entra en conflicto con la ruta `/test` asignada para los tests del módulo.

Ejemplo:

```` File icon="svelte" route="src,modules,dummy" name="demo.svelte" codeLang="html"
<script>
  import Page from '$lib/templates/Page.svelte';
</script>
<Page>
  <p>Esta página no se mostraría en el índice de niveles pero es accesible 🫥</p>
</Page>
````

Ahora, ve a la URL de tu módulo `dummy` (`localhost:5173/dummy/demo`) para poder visualizar el contenido.

# Organizando el contenido en sub carpetas y otro tipo de enlaces internos

Vamos a dar un salto de calidad. Hasta ahora, los niveles los habíamos definido con la etiqueta `html`, pero ya sabemos que `page` sirve para cargar contenido dinámico dentro del módulo. Para tenerlo un poco más organizado, vamos a crear una carpeta dentro del módulo que se llame `basic` (o como quieras llamarla) y, dentro, un fichero llamado `holamundo.svelte` y, adicionalmente (y **una vez más**), un fichero `+page.js` con el mismo contenido de antes (en lugar de crearlo desde cero, puedes copiar el mismo fichero a la carpeta `basic`).

## Creando la carpeta basics

### src/modules/dummy/basic/+page.js

```js
export const prerender = true;
```

### src/modules/dummy/basic/helloworld.svelte

```svelte
Hola mundo 🌍
```

Ahora, vamos a cambiar el fichero `dummy.js` por el siguiente contenido:

```js
export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' },
  {
    page: 'basic/helloworld', // <-- Carpeta basic, dentro del módulo dummy, fichero helloworld.svelte
    title: 'Bienvenid@s'
  }
];
```

Mucho mejor, ¿no? Ahora podemos crear páginas de una manera jerárquica con nuestros módulos e incluso añadirle un título que nos sirva como referencia dentro del propio módulo.

> [!TIP]
> Hay un comando dentro del proyecto que es `pnpm  run newmodule <nombre>` para crear módulos con mayor facilidad 😇 (igual debí haber puesto esto antes...).

> [!IMPORTANT]
> Por limitaciones de la propia app y de cómo se hace el prerrenderizado estático, solo sería posible establecer un nivel de jerarquía. Es decir, `src/modules/dummy/basic/helloworld` sí es posible, mientras que `src/modules/dummy/basic/otronivel/helloworld` no.

## Otros tipos de enlaces

Aparte del contenido `html` que habíamos comentado en la constante `levels`, hemos podido ver que también es posible vincular páginas e, incluso, hacer referencia a páginas dentro de un subnivel (una carpeta). No obstante, existe otro tipo de vínculo: el de vincular otro `módulo`.

Supongamos que tenemos otro módulo llamado `chuchu` y queremos enlazarlo en nuestro índice (es decir, dentro de la lista de niveles del módulo `dummy`). Bastaría con hacerlo de la siguiente manera:

```` File icon="js" route="src,modules" name="test.md" codeLang="js"
export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' },
  {
    page: 'basic/helloworld',
    title: 'Bienvenid@s'
  },
  {
    title: 'Enlace al módulo chuchu',
    module: 'chuchu' // <-- Enlace al módulo chuchu
  }
];
````

De esta forma, podemos segmentar un poco más nuestros contenidos y crear vínculos entre ellos. Un ejemplo de esto es el módulo de `Documentación` de este mismo curso. Si te das cuenta, en el índice existen varios enlaces de tipo `module`.

### ¿Qué criterio debería seguir? ¿Pages o módulos?

Si bien se puede meter todo el contenido directamente en un fichero `.md` y utilizarlo como `pages`, no lo recomendaría, para no tener demasiado contenido en el fichero `Markdown` y poder modularizarlo. De esta forma, y según el criterio que yo he seguido,

- **Page**: Para contenido lineal; por ejemplo, un curso donde tienes la lección 1, la lección 2, etc.
- **Module**: Para contenidos que, a su vez, tengan más subniveles. Por ejemplo, el contenido de "[módulos](/modules)" es, en sí, un minicurso sobre cómo crear módulos manualmente. En este caso, prefiero crearlo aparte y enlazarlo por otra vía, como, por ejemplo, dentro del módulo `docs` como parte de su contenido. 😊

> [!TIP]
> En el caso del ejemplo donde se enlaza al módulo `chuchu`, suelo configurar este como `public: false` para que no se muestre en el listado principal de módulos. Sigue siendo accesible, pero no es visible a simple vista.

# Añadiendo etiquetas

¿Has visto la barra superior junto a la sección **Documentación** (o si la ves en móvil, la lupa en la parte superior)? Eso es una **barra de búsqueda** que nos ayuda a **localizar el contenido** de manera rápida y sencilla. Su funcionamiento es sencillo: busca en los **títulos** de los niveles y páginas las palabras que introduzcas.

**¿Y eso es todo?** No, todavía hay más. En cada nivel podemos incluir un campo llamado `labels`, que permite añadir **palabras clave o etiquetas** relacionadas con ese contenido. Esto facilita que la búsqueda sea más precisa y efectiva, ya que no solo busca en los títulos, sino también en estas etiquetas extras. De este modo, el contenido es mucho más **accesible** y **fácil de encontrar**. ¿No es fantástico? 🤗


```` File icon="js" route="src,modules" name="dummy.js" codeLang="js"
export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' },
  {
    page: 'basic/helloworld',
    title: 'Bienvenid@s'
  },
  {
    title: 'Enlace al módulo chuchu',
    module: 'chuchu',
    labels: [
      'etiquetaA',
      'etiquetaB'
    ]
  }
];
````

De esta forma, además de poder encontrar la página por palabras sueltas como "enlace", "módulo" o "chuchu", también podremos localizarla mediante las etiquetas "etiquetaA" y "etiquetaB". Estas etiquetas aparecerán visibles en el listado general cuando se muestre el módulo, facilitando la búsqueda y haciendo el contenido más accesible y fácil de encontrar.

# ¿Qué sigue?

![Codi Teacher](/static/img/codi/wink.webp?align=left&size=w-1/5)

**¡Wow!** ¡Ese módulo pinta muy bien!

 Ahora, es el momento de dar un paso adelante y de echarle un vistazo a los [componentes](/components/) de Codiquest. Seguiremos con el ejemplo de `dummy`, pero explicando de una forma práctica cómo sacarle partido a nuestro módulo.
