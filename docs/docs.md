# Introducción a la documentación

¿Listo/a para comenzar a conocer las entrañas de `Codi` para sacarle el máximo partido? 🤩 En esta sección de documentación, podrás encontrar **todo** lo necesario para tu viaje en **Codiquest**, empezando por aspectos tan básicos como la instalación en `local`, profundizando en cómo crear módulos de forma `manual`, conocer los componentes de Codiquest y cómo usarlos, `automatizar` la creación de módulos a partir de Markdown, personalizar tu sitio y... ¡mucho más!

# Instalación en local

En esta parte de la documentación, veremos los requisitos para poder montar Codiquest en local.

## Prerequisitos

- Un sistema operativo compatible con Node (prácticamente todos).
- Git instalado.
- Un editor de código como VSCode (no es imprescindible, pero sí recomendable).
- Versión de Node recomendada: 22+ (probado en la 22.12.0).
  - Recomiendo visitar [este enlace](https://lenguajejs.com/npm/introduccion/instalacion-node-con-nvm/) de lenguajejs.com como guía para instalar node.

> [!NOTE]
> Se asume que para la instalación local (a diferencia de la remota) se presuponen ciertos conocimientos sobre cómo manejar una terminal, clonar un repositorio, etc.

## Clonando el repositorio

Abre una terminal y clona el [repositorio](https://github.com/moiseslodeiro/codiquest) en su rama principal, **main**:

```bash
git clone git@github.com:moiseslodeiro/codiquest.git
```

## Instalando las dependencias

Una vez clonado el repositorio, vamos a proceder a la instalación de las dependencias. Para ello, abre una terminal en la carpeta del repositorio e instala las dependencias con el siguiente comando:

```bash
cd codiquest
npm install -g pnpm
pnpm install
```

Si todo ha ido bien, deberías ver algo así:

```bash
codi@local:~/Workspaces/codiquest$ pnpm install
 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
 WARN  8 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, abab@2.0.6, domexception@4.0.0, glob@7.2.3, inflight@1.0.6, rimraf@2.7.1, rimraf@3.0.2
Packages: +473
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 536, reused 473, downloaded 0, added 473, done

dependencies:
+ @rollup/plugin-dynamic-import-vars 2.1.5
+ gh-pages 6.3.0
+ marked 12.0.2 (16.3.0 is available)
+ sanitize-html 2.17.0

devDependencies:
+ @sveltejs/adapter-auto 2.1.1 (6.1.0 is available)
+ @sveltejs/adapter-static 2.0.3 (3.0.9 is available)
+ @sveltejs/kit 1.30.4 (2.42.1 is available)
+ @tailwindcss/typography 0.5.16
+ @testing-library/svelte 5.2.8
+ autoprefixer 10.4.21
+ chokidar-cli 3.0.0
+ concurrently 9.2.1
+ daisyui 4.12.24 (5.1.13 is available)
+ eslint 8.57.1 (9.35.0 is available) deprecated
+ eslint-config-prettier 9.1.2 (10.1.8 is available)
+ eslint-plugin-svelte 2.46.1 (3.12.3 is available)
+ glob 10.4.5 (11.0.3 is available)
+ jsdom 22.1.0 (27.0.0 is available)
+ postcss 8.5.6
+ preline 2.7.0 (3.2.3 is available)
+ prettier 3.6.2
+ prettier-plugin-svelte 3.4.0
+ svelte 4.2.20 (5.39.2 is available)
+ svelte-preprocess 5.1.4 (6.0.3 is available)
+ tailwindcss 3.4.17 (4.1.13 is available)
+ vite 4.5.14 (7.1.6 is available)
+ vitest 1.6.1 (3.2.4 is available)

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @sveltejs/kit, esbuild, svelte-preprocess.                        │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 3.9s using pnpm v10.17.0
```

> [!IMPORTANT]
> Si hacemos un pnpm audit podremos ver que existen 8 vulnerabilidades. No obstante estas no afectan al entorno final de producción

## Ejecutando Codiquest en local

Ya debería estar todo listo, ¿verdad? Solo nos queda ejecutar el siguiente comando dentro de nuestra carpeta `codiquest` para ver nuestra plataforma de aprendizaje y enseñanza favorita (a partir de ahora). 😍

```bash
pnpm run dev
```

Esto debería arrojar una salida de comando similar a esta:

```bash
codi@local:~/Workspaces/codiquest$ pnpm run dev

> codiquest@2.1.0 dev
> concurrently 'pnpm run watch:md' 'vite dev'

[0]
[0] > codiquest@2.1.0 watch:md
[0] > chokidar 'docs/**/*.md' -c 'node tools/module.js {path}'
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
```

Finalmente, si accedemos a la URL que nos indica (por defecto, `http://localhost:5173`), deberíamos ver algo así:

![Previsualización de la instalación de Codiquest](/static/img/install/03.png?align=center&size=w-1/2)

## Compilando

Una de las características de Codiquest es que, realmente, todo se ejecuta en el *frontend* (es decir, en tu navegador), por lo que no hace falta disponer de un *backend* para almacenar la información, ya que esta es estática.

Para convertir el contenido que tenemos (en formato de desarrollo) a un formato más compacto y óptimo, debemos ejecutar lo siguiente:

```bash
pnpm run build
```

Este comando compilará nuestro contenido y generará una carpeta llamada `build` con todo el contenido **estático**. Es decir, dentro de la carpeta `build` no veremos módulos ni nada del código que hemos agregado o que agregaremos en un futuro. No obstante, que no veamos ese código significa que todo ha ido a la perfección y que podremos publicar el contenido estático como si lo hubiéramos maquetado a mano 😊.

### Previsualización

¡Oye! Pero, ¿y cómo sé si mi página se ve como debe? Lo único que debes hacer es ejecutar el siguiente comando, similar al que vimos de `pnpm  run dev`, pero con la salvedad de que, esta vez, el servidor se va a montar sobre la carpeta `build` para mostrar tus archivos estáticos.

```bash
pnpm run preview
```

> [!NOTE]
> Por defecto, el servidor (a diferencia de `pnpm  run dev`, que se ejecutaba en el puerto 5173) se ejecutará en el puerto **4173** y, posiblemente, en una ruta `/codiquest`.

> [!IMPORTANT]
> Cualquier cambio que ahora hagas a nivel de código NO se mostrará automáticamente en esta previsualización, ya que necesita volver a compilarse con `pnpm  run build`.

## ¿Y Ahora?

Vamos a darle un vistazo a los módulos (vamos a la `Siguiente lección`). 🥳

# Personalizando Codiquest

En este minimódulo, veremos qué archivos son importantes para poder dejar nuestro sitio de enseñanza y aprendizaje lo más personalizado posible. ¡Empecemos por lo básico!

---

## Datos y metadatos

Dentro de la carpeta `src`, encontraremos en el primer nivel el fichero `app.html`, que contiene la información y metadatos de la página. Es el punto de entrada que luego será utilizado para renderizar el contenido. Lo importante de este fichero se encuentra agrupado en un bloque entre las líneas `11` y `21`. Puedes editar cualquier referencia a Codiquest y las descripciones del contenido.

```` File icon="html" route="src" name="app.html" codeLang="html"
<!doctype html>
<html lang="es" class="scroll-smooth" data-theme="light" translate="no">
  <head>
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta charset="utf-8" />
    <meta name="google" content="notranslate" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Cache-Control" content="no-store" />
    <meta http-equiv="Pragma" content="no-cache" />

    <meta property="og:title" content="CodiQuest" />
    <meta property="og:image" content="https://www.codiquest.com/img/header.jpg" />
    <meta property="og:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar :D" />
    <meta property="og:url" content="https://www.codiquest.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Crear módulos educativos interactivos con Markdown | Codiquest" />
    <meta name="twitter:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar." />
    <meta name="description" content="Aprende a crear módulos educativos con contenido teórico y práctico usando Markdown, sin necesidad de programar. Manual y automático." />
    <meta name="keywords" content="codiquest, módulos educativos, contenido interactivo, markdown, cuestionarios, fill the gap, páginas de aprendizaje, educación digital, aprender programando, preguntas dinámicas" />
    <link rel="canonical" href="https://www.codiquest.com" />
    <title>CodiQuest</title>

    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover" class="min-h-screen">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
````

## Estilo global

También dentro de la carpeta `src` encontrarás el fichero `app.css`, que contiene unos estilos básicos extendidos de `tailwind` con alguna configuración particular. Estos estilos se aplican dentro del fichero `+layout.svelte`.

```` File icon="css" route="src" name="app.css" codeLang="css"
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind typography;

:root {
    --rounded-box: 0.2rem;
}

a.link.external::after,
a.link.youtube::after,
a.link.medium::after,
a.link.devto::after,
a.link.wikipedia::after {
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
}

a.link.external::after {
  background-image: url('/icons/external-link.svg');
}

a.link.internal::after {
  background-image: url('/icons/external-link.svg');
}

a.link.github::after {
  background-image: url('/icons/github.svg');
}

a.link.manz::after {
  background-image: url('/icons/manz.svg');
}

a.link.yt::after {
  background-image: url('/icons/youtube.svg');
}

a.link.medium::after {
  background-image: url('/icons/medium.svg');
}

a.link.devto::after {
  background-image: url('/icons/devto.svg');
}

a.link.wikipedia::after {
  background-image: url('/icons/wikipedia.svg');
}

a.link::after {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  margin-left: 0.25rem;
}

````

## Cabeceras y pie de página

Para editar la cabecera y el pie de página, debemos ir al fichero `+layout.svelte`, que está en `src/routes/+layout.svelte`. Dentro de este fichero, edita solo las siguientes líneas (salvo que sepas lo que haces, claro 😅).

### Cabecera

En la cabecera (parte superior de la página), podemos encontrar un pequeño logotipo de Codiquest, así como un nombre descriptivo y el enlace a la sección "Acerca de". Puedes editarlo libremente.

```` File icon="html" route="src,routes" name="+layout.svelte" codeLang="html"
<script>
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';
  export let data;

  // Partials
  import HeaderMessage from '$lib/partials/HeaderMessage.svelte';
</script>

<nav class="navbar bg-base-100" data-theme="synthwave">
  <div class="container md:mx-auto max-w-5xl">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="{base}/">
        <img src="{base}/favicon.png" alt="¡Hola! Soy Codi :-)" width="32" height="32" />
        <span class="max-md:hidden">CodiQuest</span>
        <div class="badge badge-secondary">Alpha</div>
      </a>
    </div>
    <div class="flex-none z-10">
      <ul class="menu menu-horizontal px-1">
        <li><a href="{base}/docs">Documentación</a></li>
        <li><a href="{base}/about">Acerca de</a></li>
      </ul>
    </div>
  </div>
</nav>
````

> [!TIP]
> Por defecto, el tema que trae precargado Codiquest es `synthwave` de DaisyUI. Puedes modificarlo tanto en el propio fichero `app.html` (a nivel de cabecera) como en el fichero `tailwind.config.js`. Consulta la documentación de DaisyUI para más información.

### Animación de entrada

La transición o animación que se muestra aquí abajo sirve para crear un efecto visual de entrada y salida suave cuando el contenido de una página cambia, por ejemplo, al navegar de una página a otra.

```` File icon="html" route="src" name="app.html" codeLang="html"
<main class="container md:mx-auto py-2 md:max-w-5xl sm:px-3">
  {#key data.url}
    <div
      class="max-sm:mx-3"
      in:fly={{ x: -200, duration: 300, delay: 300 }}
      out:fly={{ duration: 300 }} >
      <slot />
    </div>
  {/key}
</main>
````

#### Explicación

Esta es la transición de entrada. Se activa cuando el div se crea (es decir, cuando se navega a la nueva página).

```js
in:fly={{ x: -200, duration: 300, delay: 300 }}:
```

* x: -200 significa que el elemento "volará" desde la izquierda (-200 píxeles) hasta su posición final. Esto crea un efecto de que el nuevo contenido entra desde un lado.
* duration: 300 define que la animación de entrada durará 300 milisegundos.
* delay: 300 agrega una espera de 300 milisegundos antes de que comience la animación de entrada. Esto es crucial para que el contenido que sale tenga tiempo de animarse antes de que entre el nuevo.

```js
out:fly={{ duration: 300 }}
```

Esta es la transición de salida. Se activa cuando Svelte va a destruir el div anterior.

- duration: 300 define que la animación de salida durará 300 milisegundos.

Como no se especifica una dirección, el comportamiento por defecto de fly es que el elemento se mueva hacia la derecha (x: 200 por defecto) y se desvanezca al mismo tiempo.

### Pie de página

Un pie de página (o footer, en inglés) es la sección que se encuentra en la parte inferior de una página web, una aplicación o un documento. Suele contener información complementaria, como enlaces de contacto, términos legales, créditos, navegación secundaria, redes sociales o avisos importantes.

En proyectos de código o sitios web, también se puede usar para mostrar agradecimientos, autoría, versión del software o enlaces útiles. Aunque a veces se subestima, el pie de página es un espacio clave para la identidad y transparencia de un proyecto.

<Message icon="codi" iconSize="10" label="Plsss" colorClass="bg-stone-50 border-pink-800 text-lime-950">Por favor, no elimines ni modifiques este pie de página. Ayuda a dar visibilidad y a apoyar el proyecto CodiQuest. 🫶</Message>

```` File icon="html" route="src" name="app.html" codeLang="html"
<footer class="footer items-center p-4 bg-neutral text-neutral-content sticky top-[100vh] mt-5">
  <div class="flex items-center justify-between w-full container md:mx-auto max-w-5xl">
    <div class="flex items-center">
      <img src="/img/codi/favicon.webp" alt="It's a me! Codi!" class="h-4 w-4" />
      <p class="ml-2">
        Basado en <a
          href="https://github.com/moiseslodeiro/codiquest"
          target="_blank"
          data-svelte-h="svelte-1nqafas">CodiQuest</a
        >
        - <a href="/LICENSE" target="_blank" data-svelte-h="svelte-7quxjq">Licencia MIT</a>
      </p>
    </div>

    <a target="_blank" aria-label="Visítanos en X!" href="https://twitter.com/codiquest">
      <svg alt="Twitter/X" class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        ></path>
      </svg>
    </a>
  </div>
</footer>
````

## Partials

Existe una carpeta dentro de `src/lib/` llamada `partials` con los componentes parciales (normalmente estáticos) que representa algún bloque de texto. En este caso podemos editar el contenido para, por ejemplo, editar el contenido de la cabecera en la página principal (`MainMessage.svelte`), poner un mensaje debajo de la cabecera (`HeaderMessage.svelte`), etc.

## Quitando el módulo Documentación

Ahora mismo, al clonar el repositorio, por defecto, aparecerá la sección `Documentación` en nuestra página.

Quitarla es muy sencillo, basta con:

1. Eliminar el módulo (fichero `.js`) `docs.js` de `src/modules`.
2. Eliminar la carpeta `src/modules/docs`.

Y listo, automáticamente nos habremos deshecho de la referencia a la documentación.

Otra alternativa, más fácil y dejando por si acaso el módulo, es ir al fichero del módulo y cambiar su atributo `public` de true (público) a false (privado). En ambos casos, no te olvides de quitar el enlace de `+layout.svelte` en `src/routes`. En el segundo supuesto, seguirá siendo accesible, pero no estará listado en los módulos principales ni en la cabecera. 🥸

# Publicando la build en Github

## Recursos

- [Primeros pasos en Git](https://terminaldelinux.com/git/primeros-pasos/crear-repositorio/)

## Prefacio

> [!NOTE]
> Antes de empezar este módulo, se asume que ya dispones de una cuenta gratuita de GitHub y que la tienes configurada en tu equipo local. 🐱

En este módulo, no se explicará cómo subir a GitHub los cambios que hayas podido hacer en tu módulo, sino cómo publicar el código de la `build` de una forma limpia. Si tienes dudas de cómo funciona Git, échale un vistazo al enlace de [terminaldelinux](https://www.terminaldelinux.com) que hay en los recursos.

Pero antes de meternos en faena, vamos a repasar lo que hacían los comandos `build` y `preview`.

## Build y preview

¿Recuerdas cuando en el módulo de [instalación local](/docs/instalacion-en-local) vimos el comando `pnpm  run build` y `pnpm  run preview`? Pues era solo un adelanto de lo que vamos a ver a continuación.

### Build

El comando `pnpm  run build` toma todo (módulos, componentes, plantillas, imágenes, etc.) que has utilizado para el desarrollo de tus módulos en Codiquest y lo compacta en una carpeta llamada `build`. Esta carpeta está aislada del resto del código; podrías moverla de directorio y, con tan solo ejecutar un servidor que sirva contenido HTML, podrías ver tu contenido estático. ¡Wow! 🤩

Esta carpeta será la responsable de mostrar tu contenido en lo que se denomina `GitHub Pages`, que no es más que un servidor de contenido estático alojado en el propio GitHub. De esta forma, podremos mostrar el contenido generado de una forma optimizada directamente desde GitHub, sin necesidad de recurrir a un *hosting* externo de pago.

### Preview

Pero antes de subir ningún contenido, repasemos qué hace el comando `pnpm  run preview`:

El comando `pnpm  run preview` crea un servidor local que sirve la carpeta `build` generada anteriormente. Sería el equivalente a lo que podrás ver en GitHub Pages en breve, pero en tu entorno local, para que puedas verificar que todo esté bien antes de subir el contenido.

## Publicando en Gihub

Ahora sí, vamos a subir nuestro contenido de la carpeta `build` a GitHub para preparar el entorno que luego veremos reflejado en GitHub Pages. Aquí hay varias opciones: la más manual y un poco más complicada (con la que vamos a aprender y a nutrir nuestro cerebro de información) o la opción aburrida y automática. ¡Ambas opciones tendrán el mismo resultado! 🤠

### De forma manual

Vamos a crear una rama `gh-pages` (el estándar de GitHub) con el contenido de la carpeta `build`. Si estabas pensando en crear un proyecto temporal con el contenido de la carpeta `build`, copiar el contenido adentro, luego iniciar un repositorio, hacer un *commit*, añadir un remoto y subir los cambios... puede que estés en lo cierto. ¡Pero esa forma es muy básica! ¿Vemos cómo hacerlo como un/a *pro*? 🥊

Para hacerlo más limpio, sin necesidad de crear directorios temporales, vamos a usar ramas sin historial para hacerlo de forma automática.

> [!IMPORTANT]
> A estas alturas, es necesario que ya hayas ejecutado `pnpm  run build` y que tengas la carpeta `build` en tu directorio. 😊

> [!NOTE]
> Se asume que tu remoto se llama, por convención, `origin` y que tu rama actual es `main`. Cámbialo según tus necesidades.

```bash
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
```

De esta forma, tendremos una rama llamada `gh-pages` en nuestro repositorio, con el contenido de la carpeta `build` listo para ser servido por GitHub Pages.

### De forma automática

Dentro de los comandos que pueden ejecutarse en el entorno local, se encuentra `pnpm  run publish:gh`, que, automáticamente, hará lo siguiente:

1. Ejecutará un `pnpm  run build` para crear la carpeta local `build`.
2. Creará una rama llamada `gh-pages` en tu repositorio y subirá **solo** el contenido de la carpeta `build`, sin nada del contenido dinámico de tu página.

Vale, es más cómodo... pero, ¿y lo bien que sienta saber lo que hace algo por dentro? 🙃

> [!IMPORTANT]
> Si la rama remota ya existe, puede que este comando dé problemas. Para asegurarte, borra la rama remota ejecutando `git push origin --delete gh-pages` antes de lanzar `pnpm  run publish:gh`.

# Compilado y publicación - Workflows

Este apartado solo es válido si utilizas GitHub (porque aún no he tenido tiempo de meterme con los ficheros para otras plataformas, como `Gitlab`).

## Recursos

- [Límites de ejecución](https://docs.github.com/es/actions/reference/limits#existing-system-limits)

## Limitaciones

Dentro de los servicios que ofrece GitHub de manera gratuita, existe la ejecución de *Workflows* (básicamente, una máquina que ejecuta instrucciones). En la capa gratuita, existen limitaciones, como 2000 minutos por mes (aproximadamente 33 horas/mes), que, para un uso cotidiano, deberían ser más que suficientes.

> [!NOTE]
> Para que te hagas una idea, el *workflow* que he preparado no debería tardar más de 1 minuto en ejecutarse (aproximadamente).

## Requisitos

Para poder crear contenido en GitHub y publicarlo automáticamente cuando guardes, debes cumplir los siguientes requisitos:

Tus archivos de:

- Módulos deben estar en `src/raw` y seguir el formato `TUMODULO.module.md` (p. ej., `terraform.module.md`).
- Preguntas deben estar en `src/raw` y seguir el formato `TUMODULO.questions.md` (p. ej., `terraform.questions.md`).

El resto de los recursos (imágenes, etc.) pueden permanecer en la carpeta `static`.

## Ejecución del workflow

### De forma manual

Cuando estés haciendo cambios y subas los `commits` a tu rama:

![Localización pestaña de Actions](/static/img/install/09.png?size=5/6)

---

1. Es la pestaña de acciones de GitHub. Aquí podemos ver qué acciones automatizadas, flujos de trabajo o *workflows* hemos llevado a cabo en nuestro repositorio.
2. Haz clic sobre la acción que quieras visualizar. En este caso, sobre `Process Module Files and Publish`. Esta acción servirá para inspeccionar **todos** los ficheros dentro de `src/raw` con el patrón antes mencionado (en este caso, *<nombre_modulo>.module.md*).
3. Por último, selecciona la rama desde la que quieres ejecutar el *workflow* (por defecto, será `main`, `develop` o aquella donde subieras los cambios).

Esto disparará un flujo que transformará tu contenido de Markdown a formato HTML y publicará una rama `gh-pages` (aunque se puede cambiar el nombre) en tu repositorio. Así, el contenido de la carpeta `build` quedará listo para ser servido más adelante. 😊

### De forma automática

Existe otra forma de ejecutar los cambios en los ficheros que subas: crear una rama llamada `publish` (publicar). A diferencia de ejecutar el `workflow` de forma manual, al crear nuevos *commits* o realizar una `pull request` sobre la rama `publish`, no se procesarán todos los ficheros, sino solo aquellos en los que hayas hecho cambios.

## ¿Qué sigue?

Ahora que ya sabemos cómo transformar nuestro contenido (carpeta `build`) y subirlo a nuestro repositorio (u otro), vamos a publicarlo haciendo uso de `GitHub Pages`. 🤟

# Configurando Github pages

¡Nos adentramos en la recta final! 🥳 Vamos a ver qué consideraciones debemos tener para poder publicar nuestra página en GitHub Pages.

## Habilitando Github Pages

En primer lugar, hay que acudir al apartado `Settings > Pages` **dentro de tu repositorio** y, una vez dentro, seleccionar desde qué rama quieres hacer el despliegue del contenido estático creado en la carpeta `build`. Recuerda que, por defecto, la rama que hemos creado ha sido `gh-pages`, aunque puedes seleccionar cualquiera.

![Localización pestaña de Actions](/static/img/install/10.png?size=5/6)

Cuando selecciones la rama destino, podrás darle al botón `Save` y tu página quedará publicada en `https://tunombredeusuario.github.io/turepositorio`. 🤟. ¿Y esto es todo? En parte, sí. Pero sigamos con las consideraciones y la personalización del dominio, si es el caso. 🤗

## Recursos

- [Configurar un dominio personalizado para tu sitio de Páginas de GitHub](https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [DNS Checker](https://dnschecker.org/)

## Consideraciones

`GitHub Pages` es un servicio gratuito de alojamiento de contenido estático, pero tiene varias peculiaridades:

### Capa gratuita

Para poder utilizar la capa gratuita y publicar tu sitio, el repositorio debe ser **público**, o bien debes disponer de la capa `enterprise`. ¿Significa esto que debo publicar mi código, con todo el contenido, etc.? No necesariamente. **Compartir es vivir**, pero si, por un casual, quieres separar la parte *privada* (el código fuente en sí) de la parte visible, siempre puedes publicar la carpeta `build` en otro repositorio, manteniendo el repositorio de código en privado.

```bash
npx gh-pages -d build -f -t -r git@github.com:TU_USUARIO/TU_REPO_PUBLICO.git
```

## Configuración de dominio

Toda la configuración del **dominio** se realiza dentro del apartado *Settings* de tu repositorio (`Settings > Pages > Custom Domain`). A modo de resumen, necesitarás disponer de un **dominio propio** en el que puedas configurar el apartado de **DNS** para poder apuntar un registro a GitHub Pages. Tienes toda la información en los enlaces del apartado **Recursos** de esta página.

### URL en github.io

Por defecto, GitHub Pages asigna un dominio gratuito, a menos que configures uno personalizado.

- Sitio principal (de usuario/organización): `https://tu-usuario.github.io`
- Sitio de un repositorio específico: `https://tu-usuario.github.io/nombre-repositorio`

#### Recomendaciones

- **Siempre** usa HTTPS (GitHub lo habilita automáticamente).
- Si necesitas un dominio propio (p. ej., tudominio.com), configura un dominio personalizado.

### Dominio personalizado y DNS

Dentro de GitHub Pages, es posible configurar un dominio personalizado (del estilo `codiquest.com`, `www.codiquest.com`, etc.). El dominio debe ser **único** dentro de GitHub. Si ya tienes un dominio registrado en GitHub Pages que apunta a otro repositorio, no puedes sobreescribirlo, aunque sea dentro de tu misma cuenta. Para ello, debes quitar el vínculo del anterior y añadirlo al nuevo.

#### Configurar DNS

Configurar las DNS te permitirá redirigir el tráfico de tu dominio a `GitHub Pages`. Para ello:

- Configura el dominio dentro de `GitHub Pages` según tu criterio:
  - **Opción A (Recomendada con subdominio `www`)**
    - Configura un registro `CNAME` de `www.tudominio.com` a `tu-usuario.github.io`.
  - **Opción B (Dominio apex, p. ej., `tudominio.com`)**
    - Configura un registro de tipo A: tudominio.com → 185.199.108.153 (y otros IPs de GitHub -revisa las IPs en el enlace de Github en la pestaña de recursos-).
    - O configura un registro de tipo ALIAS/ANAME: Si tu registrador lo soporta (Cloudflare, etc.).

A modo de ejemplo, mira la siguiente imagen de cómo se configuran las *DNS* para el *subdominio* `demo.codiquest.com`.

![Configuración de un registro CNAME para demo.codiquest.com](img/install/dns.png?size=5/6)

> [!NOTE]
> Este paso hay que hacerlo donde tengas registrado el dominio

Una vez tengas *apuntado* el dominio en tu registro de DNS a tu url en *Github Pages*, deberías ver un tick de confirmación en la propia página de GitHub Pages.

![Comprobación DNS en Github Pages](img/install/dns2.png?size=5/6)

> [!TIP]
> No te olvides de habilitar el enforce HTTPS

#### Fichero CNAME

El fichero `CNAME` (en la carpeta `static`) le indica a GitHub Pages qué dominio personalizado usar (p. ej., `www.tudominio.com`). Aunque GitHub lo crea automáticamente al añadir el dominio en `Settings > Pages`, puedes generarlo tú mismo (editando el fichero que ya existe en el repositorio).

> [!IMPORTANT]
> Es importante que el fichero esté presente en la raíz (`/`) de la rama donde se va a desplegar el contenido estático.

> [!CAUTION]
> Si se borra el fichero `CNAME`, GitHub revertirá los cambios del dominio a `usuario.github.io`.

El contenido del fichero es el dominio en sí, sin nada más (p. ej., `www.codiquest.com`).

## Fichero .nojekyll

Es un fichero vacío cuya función es desactivar el procesamiento de Jekyll (el generador de sitios estáticos de GitHub). Es necesario porque pueden existir carpetas que empiecen por `_` y, además, porque el sitio de Codiquest es un sitio compilado. **Debe** ir en la raíz del repositorio (actualmente, está en la carpeta `assets`, pero a la hora de hacer el `build` se mueve a la raíz).

# Instalación remota completa

Creo que este puede ser el apartado más corto de todos, pero, ¿sabías que es posible utilizar Codiquest sin necesidad de clonar el repositorio en local? Esto es gracias a que GitHub incluye un editor de código.

Basta con:

1. Hacer un *fork* del repositorio y copiarlo a tu cuenta de usuario.
2. Una vez dentro, presiona la tecla `.` para abrir el editor en línea (esto te llevará al dominio `github.dev`).
3. Realiza los cambios que quieras.
4. Ejecuta el *workflow* para publicar los cambios, ya sea de forma manual o automática, mediante la rama `publish`.

# Instalación remota parcial

En el apartado anterior, pudimos ver cómo hacer una instalación remota completa; es decir, copiar el repositorio **entero** de Codiquest para poder modificarlo, añadir recursos, etc. Pero... ¿hay algo más ligero incluso? ¡Sí! Digamos que podemos usar **Codiquest** como si de una librería se tratara, subiendo solo el contenido de tus módulos y preguntas a tu repositorio y haciendo uso de un *workflow* que:

1. Detecte cambios en tu contenido bajo `src/raw` (o ejecución manual).
2. Descargue la última versión de Codiquest.
3. Compile el contenido de tus ficheros Markdown en módulos.
4. Publique el contenido.

Esta opción, aunque pueda parecer más óptima, puede tener algunos inconvenientes, como que no sería posible editar (en primera instancia) el contenido de los componentes o el de los módulos (ficheros `.js`) a tu antojo.

## Pasos

### Opción A - Do it yourself

- Crea tu propio repositorio en GitHub.
- Crea una carpeta `static`.
- Crea una carpeta `src`.
  - Crea una carpeta `raw`: aquí dentro irán los ficheros `*.module.md` y `*.question.md`.
  - Si lo necesitas, crea una carpeta `routes` e incluye el contenido de los ficheros que quieras sobreescribir, partiendo de los originales de Codiquest.
- Crea una carpeta `.github/workflows` y añade el siguiente *workflow* a tu repositorio:

```` File icon="html" route=".github,workflows" name="workflow.yaml" codeLang="yaml"
name: Publish Module Files, Questions and Publish

on:
  push:
    branches:
      - main
    paths:
      - 'src/raw/**'
  workflow_dispatch:
    inputs:
      debug:
        description: 'Enable debug mode'
        type: choice
        options:
          - 'true'
          - 'false'
        required: false
        default: 'false'
      delete_docs:
        description: 'Delete docs module'
        type: choice
        options:
          - 'true'
          - 'false'
        required: false
        default: 'true'

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

      - name: List local resources
        if: ${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR src
          ls -lR static

      - name: Copy resources to Codiquest
        run: |
          cp -r src/* codiquest/src/
          cp -r static/* codiquest/static/

      - name: Check resources on Codiquest
        if: ${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR codiquest/src/raw/
          ls -lR codiquest/static

      - name: Installing dependencies
        run: npm install
        working-directory: './codiquest'

      - name: Parsing modules
        run: pnpm run module:all
        working-directory: './codiquest'
        env:
          PUBLIC: 'true'

      - name: Parsing tests
        run: pnpm run convert:all
        working-directory: './codiquest'

      - name: Check modules before build
        if: ${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR ./codiquest/src/modules

      - name: Clean docs module
        if: ${{ github.event.inputs.delete_docs == 'true' }}
        run: |
          pnpm run clean:doc
          rm -rf src/modules/docs.js
        working-directory: './codiquest'

      - name: Create build folder
        run: pnpm run build
        working-directory: './codiquest'

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./codiquest/build
          publish_branch: gh-pages
          force_orphan: true
````

### Opción B - La fácil

Hay un repositorio creado a modo de demo para este mismo propósido. Sólo debes clonarlo y empezar a jugar 🫶

https://github.com/moiseslodeiro/quests/tree/partial-quest

## Consideraciones

Sólo ten en cuenta poner:

- Los recursos (imágenes, etc.) en la carpeta **static**.
- Módulos y cuestionarios, siguiendo el patrón de `*.module.md` y `*.question.md` en `src/raw/`.
  - Incluye todo aquello que quieras sobreescribir; por ejemplo, el fichero `routes/+layout.svelte`, etc. respecto al [repositorio original](https://github.com/moiseslodeiro/codiquest)

# ¿Algo más?

## ¡Esto es to, esto es todo amigos!

![That's All Devs!](/static/img/codi/thatsall.webp?align=center)

---

Si tienes alguna petición o sugerencia de mejora, no dudes en revisar el apartado de `Acerca de` y en contactarme por cualquiera de las vías que allí aparecen. Si ves alguna **h**errata 😈, crea una `pull request`, y la revisaré tan pronto como sea posible.
