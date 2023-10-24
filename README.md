
# CodiQuest

CodiQuest es un pet-project basado en Svelte que sirve para la creación de sitios web estáticos (SPA) orientados, en un inicio, a recursos para el aprendizaje y mejora en lenguajes de programación y otras tecnologías. La idea partió de disponer de una plataforma que sea medianamente personalizable y de fácil configuración para la creación de diferentes recursos como preguntas de una a varias respuestas, paneles para completar código y todo sin la necesidad de utilizar un backend como validador.

Obviamente está pensado para un uso didáctico, por lo que la potencia recae en los componentes que forman los cuestionarios.

¿Y tú, ayudarás a Codi a completar su misión?


## Demo

Puedes visualizar, ver, probar y aprender en la página de [codiquest](https://www.codiquest.com). Se encuentra alojada en Github pages dado que no necesita de un backend para procesar la información. ¡Espero que te diviertas!

## Instalación

**Requisitos:**
- Disponer de [npm](https://lenguajejs.com/npm/introduccion/instalacion-node-con-nvm/]) (Desarrollado en 9.8.1)
- Disponer de [node](https://lenguajejs.com/npm/introduccion/instalacion-node-con-nvm/]) (Desarrollado en 18.7.1)

Para realizar una instalación o prueba en local, clona el repositorio a tu dispositivo. 

```bash
  git clone https://github.com/moiseslodeiro/codiquest.git
  cd codiquest
  npm i
  npm run dev
```

Si quieres exponer la aplicación a tu red para poder probar desde otros dispositivos, cambia el `npm run dev` por `npx vite dev --host 0.0.0.0`.

## Despliegue en Github Pages

El sistema está pensado para montar en un clic y ser desplegado de manera estática en Github Pages. Para ello debes disponer de una cuenta en Github (oh, qué sorpresa).

Para desplegar el proyecto en Github Pages sólo debes realizar un build del proyecto, tal y como te comentamos a continuación, subirlo a una rama y habilitar las páginas.

```bash
npm run build
npm run publish:gh
```

Una vez realizado estos dos pasos, habilita la página en el `settings` de tu proyecto (si tienes cuenta gratuita, debes tener el proyecto como público)

Nota: Por defecto la ruta dentro de tu github pages será <usuario>.github.io/codiquest . Si quieres cambiar el sufijo, edita el fichero `svelte.config.js` como se indica a continuación:

```js
const basePath = process.env.NODE_ENV === 'production' ? '/AQUI_TU_SUFIJO' : '';
```

Una vez lo edites, puedes realizar el build y el publish de nuevo y comprobar que los cambios se realicen correctamente.
## Agrega nuevos proyectos y niveles

El sistema recopila automáticamente (en cada ejecución o compilación) todo el contenido dentro del directorio `src/levels` de forma que, si quieres añadir un enrutado dinámico por ejemplo a `php`, basta con crea una carpeta php dentro de levels y empezar a poner componentes de svelte dentro.

### ¿Todo tipo de componentes?

No, de momento sólo admite como niveles aquellos que sean numéricos. Como mucho, obtendrá el Index.svelte como descripción de esa tecnología (es un pet project, ¡recuerda!)

### ¿Qué tipo de preguntas puedo introducir?

Hasta la fecha, salvo que recuerde actualizar el README, hay dos tipos de pregunta. Las de selección simple/múltiple y las de poner las piezas en su sitio (ordenar código).

En ambos casos se pueden configurar los niveles para que las respuestas salgan al azar mezcladas (shuffle).

Mira los niveles dentro del módulo de js, te será fácil comprender cómo funcionan y editarlos a tu gusto.
## 🔗 Links

La única red social que usaré para el proyecto (y ya veremos si aguanta) es Twitter. ¡Sigue a Codi!

[![X (formerly Twitter) URL](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.twitter.com%2FMoisesLodeiro&style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/codiquest)

## Licencia

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
