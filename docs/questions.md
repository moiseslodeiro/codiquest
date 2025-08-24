# Creación de cuestionarios

En Codiquest, los módulos no solo sirven para mostrar contenido teórico, sino también para evaluar los conocimientos a través de preguntas interactivas. Estas preguntas se pueden integrar de dos maneras:

- **Como un nivel individual**: puedes intercalar una pregunta entre las lecciones teóricas para que el usuario la resuelva antes de continuar.
- **Como un cuestionario final**: todas las preguntas que definas se agruparán automáticamente en una página de test al final del módulo.

Vamos a ver cómo podemos sacarle provecho a esta funcionalidad. 😊

# La constante questions

Cuando creábamos un módulo de [forma manual](/modules/crear-un-nuevo-modulo), inicialmente, exportábamos una constante `level` para disponer de un listado de niveles y una constante `questions` que dijimos que comentaríamos más adelante. ¡Pues ha llegado ese momento! 🥳

## Estructura

La estructura de la constante `questions` es muy similar a la de los niveles, pero, en este caso, define el tipo de pregunta y la pregunta en sí. Sigamos con el ejemplo del módulo `dummy` que habíamos empezado.

```` File icon="js" name="dummy.js" route="src,modules" codeLang="js"
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
  }
];

export const questions = []; // <-- Hemos añadido esta constante
````

Ahora, como habíamos comentado, la constante `questions` tendrá un `array` de `objetos` con los siguientes atributos:

## Atributos

- `type`: Indica el tipo de pregunta. Actualmente, puede ser de tipo [Choose](/components/template-choose) o [FillCode](/components/template-fillcode).
- `content`: El contenido de la pregunta, representado por los atributos de cada tipo de pregunta. Es decir, el contenido del objeto `content` deben ser los propios atributos que le pasarías a la plantilla correspondiente.

> [!IMPORTANT]
> No te olvides de importar la plantilla correspondiente al inicio de la definición del módulo.

## Ejemplo

Vamos a definir tres preguntas: una de tipo `Choose` simple, otra de `Choose` múltiple y otra de rellenar código.

```` File icon="js" name="dummy.js" route="src,modules" codeLang="js"
import Choose from '$lib/templates/Choose.svelte'; // No te olvides de importar esto.
import FillCode from '$lib/templates/FillCode.svelte'; // Y esto.

export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

// Esto no cambia
export const levels = [
  (...)
];

export const questions = [

  {
    type: Choose,
    content: {
      text: `Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?`,
      answers: [
        { text: `Usar la función setTimeout para simular la espera.`, correct: false },
        { text: `Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)`, correct: true },
        { text: `Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.`, correct: false },
        { text: `Eliminar todas las promesas y usar solo funciones síncronas.`, correct: false }
      ]
    }
  },
  {
    type: Choose,
    content: {
      checkboxes: true,
      shuffle: true,
      text: `Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?`,
      answers: [
        { text: `Crear ramas específicas para cada funcionalidad o corrección 👀`, correct: true },
        { text: `Hacer commits directamente en la rama main para ahorrar tiempo.`, correct: false },
        { text: `Escribir mensajes de commit claros y descriptivos 👀`, correct: true },
        { text: `Fusionar ramas sin revisar los cambios realizados por otros.`, correct: false }
      ]
    }
  },
  {
    // Sí, es un poco feo poner el código así... ¯\_(ツ)_/¯
    type: FillCode,
    content: {
      codeLang: 'hcl',
      text: '',
      codeBlock: `# Alineado a la izquierda para mantener la identación
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
}`,
    shuffle: true,
    }
  }
];
````

Si todo ha ido bien, al actualizar tu módulo `dummy`, verás que ahora aparece una nueva pestaña, "**Cuestionarios**", tal y como vemos a continuación:

![Muestra](/static/img/install/04.png?align=center)

> [!WARNING]
> La ruta que se utiliza por defecto para la página de los cuestionarios es `test`, de forma que ninguna de nuestras secciones o páginas debe llamarse así.

# Configurador

Aunque esta parte es meramente teórica, ya que no se puede hacer nada, sí me gustaría explicar cómo funciona el configurador de cuestionarios/tests (a pesar de que es bastante intuitivo). Si un módulo tiene contenido en la constante `questions`, automáticamente se habilita el apartado de *Cuestionarios*. Si hacemos clic en él, veremos algo similar a esto (adaptado, por supuesto, a cada módulo):

```` Browser
![Muestra](/static/img/install/05.png?align=center)
````

## (1) Personalizar

En este apartado, podremos personalizar cómo queremos hacer nuestros tests (3), seleccionando de manera manual aquellas preguntas que queramos repasar o realizar e, incluso, configurar si queremos disponer de un tiempo límite en horas y minutos. Además, tendremos la posibilidad de mostrar o no las respuestas correctas.

```` Browser
![Muestra](/static/img/install/06.png?align=center)
````

---

## (2) Modo aleatorio

El modo aleatorio es incluso más fácil de configurar: solo debes acceder a dicha sección, configurar el número de preguntas aleatorias que quieres que tenga tu cuestionario, marcar el tiempo (opcional) y ¡listo! 🎉 (Y darle al botón de empezar, claro...).

```` Browser
![Muestra](/static/img/install/07.png?align=center)
````

---

## Demo

Una vez dentro, solo tendrás que completar las preguntas y, una vez que hayas finalizado, darle al botón de comprobar el resultado. 😀

```` Browser
![Muestra](/static/img/install/08.png?align=center)
````

Vaya... creo que debo estudiar más para la próxima vez. 😮‍💨

# Añadiendo todas las preguntas a los niveles

Hasta ahora, hemos visto cómo podemos hacer cuestionarios con las preguntas que hemos añadido a los niveles, pero, ¿y si queremos que todas o algunas de estas preguntas formen parte de nuestro contenido teórico? ¡Vamos a ver cómo podemos hacerlo de una forma fácil y sencilla para toda la familia! 🤠

# Añadiendo preguntas manualmente

Para añadir preguntas de forma manual a nuestra lista de niveles, solo debes saber el índice (es decir, el número de la pregunta) que quieres agregar (sí, igual esto puede ser un poco tedioso). Además, puedes añadir un título descriptivo de lo que la persona se va a encontrar al abrir ese apartado del módulo. ¡Veámoslo con un ejemplo!

En este caso, queremos introducir un ejercicio de rellenar los huecos del código (*fill the gap*) entre el nivel 1 y el 3. Para ello, localizamos el índice del array de nuestra constante `questions` (recuerda que empieza en **0**) e ingresaremos un bloque como el que vemos a continuación dentro de nuestra constante `levels`:

```js
{
  question: 2,
  title: 'Ejercicio: Rellenar código terraform'
}
```

De forma que nuestro módulo **dummy.js** quedaría así:

```` File icon="js" name="dummy.js" route="src,modules" codeLang="js"
import Choose from '$lib/templates/Choose.svelte';
import FillCode from '$lib/templates/FillCode.svelte';

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
    title: 'Ejercicio: Rellenar código terraform',
    question: 2 // <-- Identificador de la pregunta.
  },
  {
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  }
];

export const questions = [

  // Índice 0
  {
    type: Choose,
    content: {
      text: `Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?`,
      answers: [
        { text: `Usar la función setTimeout para simular la espera.`, correct: false },
        { text: `Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)`, correct: true },
        { text: `Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.`, correct: false },
        { text: `Eliminar todas las promesas y usar solo funciones síncronas.`, correct: false }
      ]
    }
  },
  // Índice 1
  {
    type: Choose,
    content: {
      checkboxes: true,
      shuffle: true,
      text: `Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?`,
      answers: [
        { text: `Crear ramas específicas para cada funcionalidad o corrección 👀`, correct: true },
        { text: `Hacer commits directamente en la rama main para ahorrar tiempo.`, correct: false },
        { text: `Escribir mensajes de commit claros y descriptivos 👀`, correct: true },
        { text: `Fusionar ramas sin revisar los cambios realizados por otros.`, correct: false }
      ]
    }
  },
  // Índice 2
  {
    type: FillCode,
    content: {
      codeLang: 'hcl',
      text: '',
      codeBlock: `(...)`,
      shuffle: true,
    }
  }
];
````

Haciendo esto, podemos dar un poco más de dinamismo al contenido meramente teórico, metiendo alguna preguntilla por el medio. 🫣

# Añadiendo todas las preguntas

Esto puede ser un poco caótico si se plantea mal y tenemos miles de preguntas, pero es una forma fácil de agregar **todas** las preguntas de nuestro índice al contenido teórico. Basta con añadir el siguiente fragmento de código al final de tu módulo

```js
questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));
```

de forma que quedaría algo así:

```` File icon="js" name="dummy.js" route="src,modules" codeLang="js"
import Choose from '$lib/templates/Choose.svelte';
import FillCode from '$lib/templates/FillCode.svelte';

export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

// Esto no cambia
export const levels = [
  (...)
];

export const questions = [

  {
    type: Choose,
    content: {
      text: `Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?`,
      answers: [
        { text: `Usar la función setTimeout para simular la espera.`, correct: false },
        { text: `Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)`, correct: true },
        { text: `Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.`, correct: false },
        { text: `Eliminar todas las promesas y usar solo funciones síncronas.`, correct: false }
      ]
    }
  },
  {
    type: Choose,
    content: {
      checkboxes: true,
      shuffle: true,
      text: `Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?`,
      answers: [
        { text: `Crear ramas específicas para cada funcionalidad o corrección 👀`, correct: true },
        { text: `Hacer commits directamente en la rama main para ahorrar tiempo.`, correct: false },
        { text: `Escribir mensajes de commit claros y descriptivos 👀`, correct: true },
        { text: `Fusionar ramas sin revisar los cambios realizados por otros.`, correct: false }
      ]
    }
  },
  {
    type: FillCode,
    content: {
      codeLang: 'hcl',
      text: '',
      codeBlock: `(...)`,
      shuffle: true,
    }
  }
];

// Código nuevo añadido.
for(let i = 0; i < questions.length; i++) { levels.push({ question: i }) }
````

Esto nos puede servir siempre que queramos repasar todas las preguntas de un módulo de forma secuencial. 🤠. Justo a continuación, veremos cómo podemos automatizar módulos, niveles y preguntas haciendo uso de Markdown (con su explicación incluida).

# ¿Qué sigue?

**Voz en off e imágenes en blanco y negro**: ¿Harto/a de crear módulos y preguntas a mano? **No sufras más**: con el nuevo automatizador de Codiquest, ¡tu vida estará resuelta! Veamos cómo crear módulos de contenido [automatizados con Markdown](/modules_auto) en Codiquest. 🥳
