import{s as T}from"./scheduler.ddf3e249.js";import{S as k,i as A,r as h,u as q,v as j,d as y,t as w,w as E,g as $,s as C,h as v,x as _,c as b,a as r,f as l,m as I,n as L}from"./index.3ca611f3.js";import{C as R}from"./Code.e06be4ef.js";import"./paths.8765ca36.js";import{P as M}from"./File.svelte_svelte_type_style_lang.d0caee9a.js";import{F as B}from"./File.3c661f67.js";function S(u){let n;return{c(){n=I(`{
  question: 2,
  title: 'Ejercicio: Rellenar código terraform'
}
`)},l(a){n=L(a,`{
  question: 2,
  title: 'Ejercicio: Rellenar código terraform'
}
`)},m(a,t){r(a,n,t)},d(a){a&&l(n)}}}function D(u){let n;return{c(){n=I(`import Choose from '$lib/templates/Choose.svelte';
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
      text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
      answers: [
        { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
        { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
        { text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`, correct: false },
        { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
      ]
    }
  },
  // Índice 1
  {
    type: Choose,
    content: {
      checkboxes: true,
      shuffle: true,
      text: \`Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?\`,
      answers: [
        { text: \`Crear ramas específicas para cada funcionalidad o corrección 👀\`, correct: true },
        { text: \`Hacer commits directamente en la rama main para ahorrar tiempo.\`, correct: false },
        { text: \`Escribir mensajes de commit claros y descriptivos 👀\`, correct: true },
        { text: \`Fusionar ramas sin revisar los cambios realizados por otros.\`, correct: false }
      ]
    }
  },
  // Índice 2
  {
    type: FillCode,
    content: {
      codeLang: 'hcl',
      text: '',
      codeBlock: \`(...)\`,
      shuffle: true,
    }
  }
];
`)},l(a){n=L(a,`import Choose from '$lib/templates/Choose.svelte';
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
      text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
      answers: [
        { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
        { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
        { text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`, correct: false },
        { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
      ]
    }
  },
  // Índice 1
  {
    type: Choose,
    content: {
      checkboxes: true,
      shuffle: true,
      text: \`Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?\`,
      answers: [
        { text: \`Crear ramas específicas para cada funcionalidad o corrección 👀\`, correct: true },
        { text: \`Hacer commits directamente en la rama main para ahorrar tiempo.\`, correct: false },
        { text: \`Escribir mensajes de commit claros y descriptivos 👀\`, correct: true },
        { text: \`Fusionar ramas sin revisar los cambios realizados por otros.\`, correct: false }
      ]
    }
  },
  // Índice 2
  {
    type: FillCode,
    content: {
      codeLang: 'hcl',
      text: '',
      codeBlock: \`(...)\`,
      shuffle: true,
    }
  }
];
`)},m(a,t){r(a,n,t)},d(a){a&&l(n)}}}function G(u){let n,a="Para añadir preguntas de forma manual a nuestra lista de niveles, solo debes saber el índice (es decir, el número de la pregunta) que quieres agregar (sí, igual esto puede ser un poco tedioso). Además, puedes añadir un título descriptivo de lo que la persona se va a encontrar al abrir ese apartado del módulo. ¡Veámoslo con un ejemplo!",t,s,p='En este caso, queremos introducir un ejercicio de rellenar los huecos del código (<em>fill the gap</em>) entre el nivel 1 y el 3. Para ello, localizamos el índice del array de nuestra constante <code class="svelte-1awqwjz">questions</code> (recuerda que empieza en <strong>0</strong>) e ingresaremos un bloque como el que vemos a continuación dentro de nuestra constante <code class="svelte-1awqwjz">levels</code>:',f,i,d,P="De forma que nuestro módulo <strong>dummy.js</strong> quedaría así:",g,c,m,F="Haciendo esto, podemos dar un poco más de dinamismo al contenido meramente teórico, metiendo alguna preguntilla por el medio. 🫣",x;return i=new R({props:{codeLang:"js",$$slots:{default:[S]},$$scope:{ctx:u}}}),c=new B({props:{icon:"js",name:"dummy.js",route:"src,modules",codeLang:"js",$$slots:{default:[D]},$$scope:{ctx:u}}}),{c(){n=$("p"),n.textContent=a,t=C(),s=$("p"),s.innerHTML=p,f=C(),h(i.$$.fragment),d=$("p"),d.innerHTML=P,g=C(),h(c.$$.fragment),m=$("p"),m.textContent=F},l(e){n=v(e,"P",{"data-svelte-h":!0}),_(n)!=="svelte-97ght9"&&(n.textContent=a),t=b(e),s=v(e,"P",{"data-svelte-h":!0}),_(s)!=="svelte-hxaxcv"&&(s.innerHTML=p),f=b(e),q(i.$$.fragment,e),d=v(e,"P",{"data-svelte-h":!0}),_(d)!=="svelte-12d68as"&&(d.innerHTML=P),g=b(e),q(c.$$.fragment,e),m=v(e,"P",{"data-svelte-h":!0}),_(m)!=="svelte-14ujdhd"&&(m.textContent=F)},m(e,o){r(e,n,o),r(e,t,o),r(e,s,o),r(e,f,o),j(i,e,o),r(e,d,o),r(e,g,o),j(c,e,o),r(e,m,o),x=!0},p(e,o){const H={};o&1&&(H.$$scope={dirty:o,ctx:e}),i.$set(H);const z={};o&1&&(z.$$scope={dirty:o,ctx:e}),c.$set(z)},i(e){x||(y(i.$$.fragment,e),y(c.$$.fragment,e),x=!0)},o(e){w(i.$$.fragment,e),w(c.$$.fragment,e),x=!1},d(e){e&&(l(n),l(t),l(s),l(f),l(d),l(g),l(m)),E(i,e),E(c,e)}}}function J(u){let n,a;return n=new M({props:{$$slots:{default:[G]},$$scope:{ctx:u}}}),{c(){h(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,s){j(n,t,s),a=!0},p(t,[s]){const p={};s&1&&(p.$$scope={dirty:s,ctx:t}),n.$set(p)},i(t){a||(y(n.$$.fragment,t),a=!0)},o(t){w(n.$$.fragment,t),a=!1},d(t){E(n,t)}}}class W extends k{constructor(n){super(),A(this,n,null,J,T,{})}}export{W as default};
