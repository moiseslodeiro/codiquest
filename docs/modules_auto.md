# Guía de desarrollo de módulos automáticos

¿Ya sabes cómo crear módulos de forma [manual](/modules) y entiendes cómo funcionan los componentes? Pues es hora de automatizar la creación de nuevos módulos haciendo uso únicamente de Markdown. 🎉

# Repaso rápido de Markdown

Markdown es el lenguaje que usamos en Codiquest para escribir textos con formato de forma rápida y legible. Es como escribir en texto plano, pero vitaminado con [gofio](https://es.wikipedia.org/wiki/Gofio) una vez que se convierte. Con Markdown (ficheros con extensión `.md`), puedes:

- Poner títulos usando `#`.
- Poner subtítulos (y consecutivos) usando `##`, `###`, etc.
- Poner listas numéricas o normales con `-` o `*`.
- Resaltar cosas en **negrita** o *cursiva* con `**negrita**` y `*cursiva*`, respectivamente.
- E, incluso, meter enlaces, imágenes o bloques de código personalizados.

Aunque a estas alturas ya puedas suponerlo, todos los módulos que puedes ver en la documentación de Codiquest se han hecho así, partiendo de un fichero Markdown. A continuación, se muestra un ejemplo básico de un fichero `.md`:

```` File icon="markdown" route="src,raw,test" name="test.md" codeLang="markdown"
# Título Principal

Este es un archivo Markdown básico. A continuación se muestran algunos ejemplos de sintaxis comunes (más adelante veremos sintaxis extendida)

## Subtítulo

Aquí puedes escribir párrafos normales. Markdown te permite **resaltar en negrita**, *en cursiva*, o incluso ***ambos estilos a la vez***.

### Lista

- Elemento 1
- Elemento 2
- Elemento 3

### Lista numerada

1. Primer paso
2. Segundo paso
3. Tercer paso

### Enlace

Puedes visitar [Codiquest](https://www.codiquest.com) para más información.

### Imagen

![Texto alternativo](/static/img/logo.png)
![Texto alternativo](/static/img/logo.png?size=...&align=...) <-- Este no es un estándar de Markdown, pero se puede usar con total compatibilidad

### Bloque de código

```js
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)));
```

### Cita

> Esto es una cita.
> Se puede extender en varias líneas.

### Línea horizontal

---
````

> [!NOTE]
> Aunque el uso de Markdown no es obligatorio, sí que es recomendable, ya que te ahorra mucho tiempo a la hora de estructurar, vincular y dar formato a las páginas. Además, tiene la ventaja de que es compatible con visores de Markdown como el integrado en GitHub, por lo que el formato que le des aquí, en su mayoría, será compatible con lo que puedas ver de forma remota en GitHub (entre otros).

![Comparativa Markdown en Codiquest y Github](/static/img/install/compare.png?size=w-5/6&align=center)

# Creando un módulo automatizado

Ahora que hemos repasado qué es el formato Markdown y algunas de sus propiedades, vamos a hacer una prueba de conversión de `.md` a módulo. Dentro del entorno de Codiquest, existe una herramienta (un *parser*) de Markdown que se encarga de:

1. Crear el módulo (si no existe).
2. Crear los ficheros `.js` y `.svelte` requeridos.

La herramienta en sí está alojada en `/tools/module.js` y se puede ejecutar de la siguiente manera:

```shell
node tools/module.js </ruta/entrada.md> [nombre] [público]
```

> [!TIP]
> Aunque no es necesario, sí es recomendable establecer los ficheros markdown en la carpeta /src/raw con un formato de <modulo>.module.md para si luego quieres usar la instalación parcial o ejecutar el comando node run module:all lo tengas todo compilado y actualizado de una 😉

Siendo los parámetros:
- `ruta de entrada`: Obligatorio. Indica la ruta al fichero Markdown que se va a convertir en un módulo de Codiquest.
- `nombre`: Opcional. Por defecto, el módulo tomará el nombre del fichero Markdown, salvo que le especifiques lo contrario.
- `público`: Opcional (public|private). Por defecto, un módulo será público, salvo que se indique lo contrario.

> [!IMPORTANT]
> El *parser* no es perfecto; he tenido que lidiar con algunas (muchas) excepciones y me he encontrado con muchos problemas por el camino. Es un kraken de 1000 cabezas, sin arquitectura hexagonal, ni microservicios (what?), ni nada. Pero es mi kraken, y funciona en mayor o menor medida. Se pide paciencia y, si algo no funciona, por favor, abre un *issue* en el repositorio. :-)

Para ponerlo a prueba, vamos a partir de este fragmento de un fichero de ejemplo, sacado directamente de la documentación de Codiquest. Porque sí, como adelantábamos en el módulo anterior, toda la documentación se ha creado en base a la misma premisa que los módulos, haciendo uso de Markdown para aprovechar la compatibilidad con visores como el de GitHub. 🥳

## Fichero de ejemplo

1. Crea este fichero en `src/raw/test.md` (o donde quieras, en realidad).
2. Copia el contenido de aquí abajo.
3. Ejecuta, desde tu directorio de trabajo, `node tools/module.js src/raw/test.md ejemplo_auto public`.

```` File icon="markdown" route="src,raw,test" name="test.md" codeLang="markdown"
# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de `Code` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento `Code`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

## Bloque Code

La primera forma es usar el bloque `Code`, indicando el lenguaje que queramos resaltar y, en su interior, poner el código que queramos resaltar.

```js
<script>
  import Code from '$lib/components/Code.svelte';
  import Page from '$lib/templates/Page.svelte';
</script>

<Page>
  <p>
    En el siguiente bloque podemos ver cómo, haciendo uso de la librería Prisma, podemos pintar
    bloques de código (en este caso, del lenguaje javascript)
  </p>
  <Code codeLang="js">
    const x = 25;
    let y = 2;
    const sum1 = x + y; // sum1 vale 27
    y = 5;
    const sum2 = x + y; // sum2 vale 32
    console.log(sum1, sum2)
  </Code>
</Page>
```

Si ahora recargamos nuestra página, podremos ver el código que acabamos de poner 🤹. ¿Sencillo no? Pues.. no tanto.

⚠️ Debido a **cómo Svelte interpreta algunos caracteres internos** de los scripts, tiene sus limitaciones sobre cómo se interpretan caracteres como las llaves `{}` o los símbolos de menor o mayor que `<>` (necesarios para funciones o bloques HTML, entre otras), teniéndose que reemplazar por sus equivalentes en HTML. Más adelante, cuando veamos cómo automatizar la creación de contenido, esto será un problema del cual **no tendremos que preocuparnos**.

> [!IMPORTANT]
> Hasta la fecha, solo es necesario cambiar `{` por `&#123;` o `&lbrace;`, `}` por `&#125;` o `&rbrace;`, `<` por `&#60;` o `&lt;` y `>` por `&#62;` o `&gt;`. Pero si otro carácter diera problemas, debería solucionarse de igual manera.

````

Si todo ha ido bien, deberías ver algo así en tu árbol de directorios y un nuevo módulo agregado a tu página de inicio en Codiquest.

![Visualización de nuestro módulo dummy en Codiquest](/static/img/auto_module.png?align=center)

---

## Peculiaridades del parser

Hay que tener en cuenta unas cuantas cosas del *parser*. Como te habrás dado cuenta, la estructura de directorios es prácticamente igual a la que hemos usado al crear un módulo manualmente, con la salvedad de que, en este caso, tenemos un `import` dentro del fichero de ejemplo `ejemplo_auto.js`.

```js

export const moduleInfo = {
  title: 'Ejemplo_auto',
  shortDescription: 'Welcome to my ejemplo_auto module!',
  public: true,
  linksTo: 'ejemplo_auto',
  image: 'codibg.webp',
  tags: ["ejemplo_auto"],
  isNew: true
};

import { levels } from './ejemplo_auto/levels.auto.js'; // <-- Aquí importamos los niveles
import { questions } from './ejemplo_auto/questions.auto.js'; // <-- Aquí importamos las preguntas

export { levels, questions };
```

El nombre de los ficheros, tanto de niveles como de preguntas, es `levels.auto.js` y `questions.auto.js`, lo que indica que es un fichero que se ha generado automáticamente, por lo que **no** debe editarse manualmente, ya que, si se vuelve a ejecutar el comando de convertir (ya sea mediante un *workflow* de GitHub, de forma automatizada o por otra vía), **los cambios se perderán**.

Ahora bien, *¿Qué pasa con el fichero `ejemplo_auto.js` de `src/modules`?* En este caso, el fichero es estático e inmutable (desde el punto de vista del *parser*) una vez que se crea. Lo que implica que ese fichero sí puedes modificarlo a tu antojo para, por ejemplo, cambiar los atributos de `moduleInfo` u organizar los niveles de una forma diferente, sin necesidad del fichero `levels.auto.js` (o su equivalente para las preguntas). 😄

> [!IMPORTANT]
> La herramienta `tools/module.js` solo actualiza el contenido del módulo y el fichero `levels.auto.js`, no el `questions.auto.js`. Para eso, ya veremos el equivalente para las preguntas. De esta forma, siempre que quieras actualizar el contenido de tu módulo, podrás usar `tools/module.js` como herramienta sin temor a modificar el resto.

---

## A considerar

> [!CAUTION]
> Es **muy** importante que cada sección tenga un **nombre diferente**. Es decir, no es válido tener dos secciones (`#`) con el mismo nombre (por ejemplo, `Variables`).

❌ Este ejemplo estaría **mal**, ya que tiene dos apartados con el mismo nombre (`# Componentes`).

```` File icon="markdown" route="src,raw,test" name="test.md" codeLang="markdown"
# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de `Code` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento `Code`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

# Componentes
(...)
````

# Recursos

Los recursos son enlaces externos a Codiquest que pueden ser de utilidad en cada página para complementar lo que se trata de enseñar. En la versión manual, a la hora de crear módulos nuevos, veíamos que, añadiendo la variable (o constante) `resources` dentro de la plantilla de `Page`, se creaba una segunda pestaña con un listado de enlaces.

Para que esto se pueda realizar mediante el procesamiento de Markdown, se ha ideado que, dentro de cada sección (`#`), puede haber un subbloque (`##`) llamado **Recursos** o **Resources** que únicamente debe contener un **listado de enlaces**, tal y como se muestra a continuación.

```` File icon="markdown" route="src,raw,demo" name="test.md" codeLang="markdown"

# Bloque principal

Minions ipsum bee do bee do bee do jiji para tú wiiiii pepete potatoooo. La bodaaa belloo! Poopayee underweaaar butt butt jeje hahaha para tú jeje. Para tú me want bananaaa! Hahaha me want bananaaa! Bananaaaa potatoooo baboiii daa potatoooo. Hana dul sae me want bananaaa! Tulaliloo belloo! Me want bananaaa! Hana dul sae. Para tú hana dul sae po kass tulaliloo daa wiiiii tatata bala tu bappleees. La bodaaa uuuhhh wiiiii pepete bananaaaa tatata bala tu para tú chasy. Belloo! po kass jeje bananaaaa potatoooo jeje potatoooo butt butt gelatooo. Uuuhhh ti aamoo! Potatoooo butt po kass chasy para tú poulet tikka masala underweaaar hana dul sae.

## Recursos

- [Minions ipsum](https://www.minionsipsum.com/)
- [Lorem Ipsum](https://www.lipsum.com/)
````

Esto dará como resultado que, a la hora de ejecutar el *parser* y transformar el contenido en HTML, el `##` de recursos se transforme en una pestaña dentro de la página. 😃

# Bloques extendidos

Además del Markdown básico, en Codiquest le damos una vuelta de tuerca, incluyendo algunas cosas como la sintaxis extendida de Markdown que utiliza GitHub, como por ejemplo:

- Los mensajes `[!TIP]`, `[!NOTE]`, `[!IMPORTANT]`, `[!WARNING]` y `[!CAUTION]`.
- Las imágenes modales, los bloques de código/sintaxis y otros tipos de bloques, como los de `Ficheros` (`File`).

Así que olvídate del HTML feo y prepárate para escribir contenido limpio, bonito y potente. 🤟. ¿Empezamos?

# Bloques extendidos - Notificaciones

Aunque ya se explicó en el apartado de [componentes](/components/componentes-message), los bloques de notificaciones forman parte de la estructura del lenguaje Markdown extendido por GitHub y sirven para mostrar cuadros de diálogo con un mensaje. En este caso, no haremos uso de un bloque HTML, sino que lo pondremos directamente con Markdown.

Toma como ejemplo este fichero Markdown:

```` File icon="markdown" route="src,foo" name="test.md" codeLang="markdown"
¡Ahora veremos cómo funcionan estos mensajes!

> [!TIP]
> Este es un mensaje de tipo TIP

> [!NOTE]
> Este es un mensaje de tipo NOTE

> [!IMPORTANT]
> Este es un mensaje de tipo IMPORTANT

> [!WARNING]
> Este es un mensaje de tipo WARNING

> [!CAUTION]
> Este es un mensaje de tipo CAUTION
````

El resultado, al ser procesado, sería:

---

```` Browser
¡Ahora veremos cómo funcionan estos mensajes!

> [!TIP]
> Este es un mensaje de tipo TIP

> [!NOTE]
> Este es un mensaje de tipo NOTE

> [!IMPORTANT]
> Este es un mensaje de tipo IMPORTANT

> [!WARNING]
> Este es un mensaje de tipo WARNING

> [!CAUTION]
> Este es un mensaje de tipo CAUTION
````

---

Cabe destacar que estos componentes, tal y como se mencionó, son compatibles con el Markdown de GitHub, y su diseño es muy similar, por lo que no habrá problemas a la hora de utilizarlos en tu página y de que, al mismo tiempo, se vean bien en GitHub.

# Bloques extendidos - Code

En la introducción a los [componentes](/componentes/componentes-code), pudimos ver el componente `Code`, que resaltaba la sintaxis del lenguaje que pusiéramos. Esto, en sí, no es algo nuevo dentro de la sintaxis, ya que es algo propio de [GitHub Flavored Markdown](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting). La única diferencia es cómo se representa este bloque dentro de la plantilla `Page` en Codiquest.

Dicho de otra manera, si tenemos un fichero Markdown con un contenido similar a este:

```` File icon="markdown" route="src,foo" name="test.md" codeLang="markdown"
¡Y ahora vamos a imprimir los números del 0 al 9 haciendo uso de javascript vanilla!

```js
for(let i = 0; i < 10; i++) {
  console.log(i);
)
```
````

El resultado sería:

---

```` Browser
¡Y ahora vamos a imprimir los números del 0 al 9 haciendo uso de javascript vanilla!

```js
for(let i = 0; i < 10; i++) {
  console.log(i);
)
```
````

---

La sintaxis de este bloque de código es bastante sencilla: se incluye el segmento de código que quieras mostrar entre tres comillas de acento grave (también conocidas como comillas invertidas o, en inglés, *backticks*), seguido del lenguaje que se quiera mostrar (revisa el apartado [Componentes - Code](omponents/componentes-code) para saber cómo agregar más lenguajes al resaltado de sintaxis).

# Bloques extendidos - File

El bloque `File` sí que es «único», ya que no es un formato que pueda representar, por ejemplo, la sintaxis extendida de GitHub. Si quieres representar un fichero de texto o de código, puedes hacerlo con el bloque `File`.

> [!IMPORTANT]
> Si, por un casual, quieres utilizar el bloque `File` dentro de otro bloque `File` para mostrar cómo se vería el bloque (*inception*) y debido a incompatibilidades con los *tokens* a la hora de procesar el fichero Markdown, es necesario escapar las comillas iniciales (`'`). Revisa el fichero `modules_auto.md` de la carpeta `doc` para obtener más información sobre cómo está representado esto. ⬇️

```` File icon="markdown" route="src" name="test.md" codeLang="md"

¡Ahora veremos cómo imprimir los valores del 0 al 9 en javascript!

\`\`\`\` File icon="js" route="src,foo" name="test.js" codeLang="js"
for(let i = 0; i < 10; i++) {
  console.log(i);
)

\`\`\`\`

````

Esto daría como resultado:

---

¡Ahora veremos cómo imprimir los valores del 0 al 9 en javascript!

```` File icon="js" route="src,foo" name="test.js" codeLang="js"
for(let i = 0; i < 10; i++) {
  console.log(i);
)
````

> [!NOTE]
> Es el bloque más inestable; puede que, si le falta alguno de los parámetros, como `codeLang`, `name`, `route` o `icon`, falle y no se visualice bien.

# Automatización de preguntas

Hace un par de niveles, vimos [Creando un módulo automatizado](/modules_auto/creando-un-modulo-automatizado), donde se explicaba el uso de la herramienta `module.js` para automatizar la creación de módulos basados en Markdown (lo que hemos visto hasta ahora, vamos). Pero, ¿qué hay de las preguntas y de la constante `questions`? Pues... ¡Sorpresa! 🥳 También hay un conversor, aunque funciona de manera algo diferente.

Vamos a partir del siguiente bloque de código, un fichero que llamaremos `demo.md`, para, primero, explicar la estructura de las preguntas y, después, ver cómo hacer uso de la herramienta de conversión automática.

```` File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown"
---
# Demo test
---
¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
Este es el texto de descripción

```hcl
resource "google_compute_instance" "codivm" {
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/$debian-12$"
    }
  }

  network_interface {
    network = "$default$"
    access_config {}
  }
}
```
````

## Bloques generales

Como puedes ver, el fichero se inicia con dos separaciones (que, normalmente, se traducirían como elementos `<hr>` en HTML) haciendo uso de `---`. Dentro de esta separación, tenemos el título:

```` File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown"
---
# Demo test
---
````

Luego, cada bloque se separa con el mismo separador (valga la redundancia): `---`. De esta forma, tendremos tantas preguntas como secciones separadas por `---`. Hay que destacar que esto solo ocurre cuando el separador empieza al **principio** de la línea y, acto seguido, tiene un **salto de línea**. Es decir, que no afectará si, en medio de una pregunta, encontramos tres guiones consecutivos.

## Preguntas mono respuesta

Para crear una pregunta de respuesta única (o `monorespuesta`), hay que añadir un bloque como este:

```` File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown"
¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
````

Donde:

- La primera línea es la pregunta que se va a realizar.
- La segunda línea en adelante representará si es una pregunta falsa (`[]`) o verdadera (`[x]`).

Después de esto, y **sin salto de línea**, debe ir otro separador para indicarle al *parser* que hay una nueva pregunta; o bien no se debe poner nada más, para indicar que es la última pregunta.

## Preguntas multirespuesta

Funciona **igual** que la pregunta *monorespuesta*, con la salvedad de que, en esta ocasión, podemos marcar **más** de una opción como correcta.

```` File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown"
¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
````

## Preguntas de tipo fill the gap

Y vamos con el último tipo de preguntas (de momento) que podemos utilizar en Codiquest: las preguntas de rellenar código/huecos, o *fill the gap*. Usemos de ejemplo el siguiente bloque:

```` File icon="markdown" route="src,raw" name="demo.md" codeLang="markdown"
Este es el texto de descripción

```hcl
resource "google_compute_instance" "codivm" {
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/$debian-12$"
    }
  }

  network_interface {
    network = "$default$"
    access_config {}
  }
}
```
````

Donde, en este caso, podemos incluir una descripción de forma **opcional** en la **primera línea** de la pregunta. Además, podemos hacer uso de un bloque de código como lo habíamos hecho hasta ahora (con tres *backticks*, seguido del lenguaje que se quiera resaltar) e incluyendo las opciones de relleno entre símbolos de dólar (`$`).

> [!NOTE]
> De momento, el bloque no admite otras opciones, como `fakeOptions`, y se establecen opciones por defecto, como `shuffle` a `true`, de forma predeterminada.

Cabe comentar que puede tener o no una descripción, y que el bloque debe indicar el lenguaje como si fuera un bloque de código normal.

## Haciendo uso de la herramienta

El uso de la herramienta es muy similar al de la que habíamos utilizado para los módulos, con la salvedad de que, en este caso, el fichero que se modifica es `questions.auto.js`. En caso de que el módulo no exista, la herramienta creará una versión vacía, al igual que pasaba con los módulos.

```shell
node tools/convert.js </ruta/entrada.md> <moduleName>
```

> [!IMPORTANT]
> Si ya existe, no modificará el contenido del módulo (fichero `.js`) ni el de `levels.auto.js`.

# Recap

Hagamos un pequeño repaso de este módulo, que ha sido intenso:

- Si quieres crear un nuevo módulo haciendo uso de Markdown, crea tu fichero Markdown (con extensión `.md`).
  - Separa cada sección con `#`, respetando que la primera sección sea la descripción del módulo.
  - Usa Markdown básico y con bloques extendidos.
  - Convierte el código con `node tools/module.js <tufichero.md> <tuModulo>`.
    - Puedes usarlo cuantas veces quieras, que solo cambiará el contenido del módulo, no el módulo en sí ni las preguntas.
- Si quieres añadir preguntas al módulo (exista o no), puedes hacer uso de otro fichero Markdown con el contenido que se ha explicado anteriormente.
  - Separa las secciones/preguntas con `---`.
  - Pon preguntas de tipo respuesta simple, múltiple o de rellenar huecos.
  - Convierte las preguntas en código con `node tools/convert.js <tufichero.md> <tuModulo>`.
    - Esto creará el módulo en caso de que no exista.

Con todo esto, ya tendremos nuestro módulo funcionando y automatizado con Markdown. ¿No es maravilloso? 🤸‍♂️

# ¿Qué sigue?

![Codi](/static/img/codi/codi.webp?align=left) Lo más importante ya ha pasado: ya sabes cómo crear módulos manualmente, entiendes cómo funcionan los componentes e, incluso, ¡sabes cómo automatizar su creación! ¿Qué te parece si ahora [personalizamos un poco la página](/docs/personalizando-codiquest)? Será un módulo muy breve que nos dirá dónde cambiar el logotipo y el título, y dónde modificar la sección de `Acerca de` para que puedas usar la plataforma con tu propia imagen.
