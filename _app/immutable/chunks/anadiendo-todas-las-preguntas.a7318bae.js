import{s as H}from"./scheduler.ddf3e249.js";import{S as I,i as L,r as g,u as v,v as h,d as C,t as _,w as b,g as f,s as w,h as $,x,c as F,a as u,f as m,m as P,n as k}from"./index.3ca611f3.js";import{C as T}from"./Code.e06be4ef.js";import"./paths.8765ca36.js";import{P as z}from"./File.svelte_svelte_type_style_lang.d0caee9a.js";import{F as S}from"./File.3c661f67.js";function A(l){let e;return{c(){e=P("questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));\n")},l(a){e=k(a,"questions.forEach((_, i) => levels.push({ question: i, title: `Pregunta ${i + 1}` }));\n")},m(a,t){u(a,e,t)},d(a){a&&m(e)}}}function B(l){let e;return{c(){e=P(`import Choose from '$lib/templates/Choose.svelte';
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
      text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
      answers: [
        { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
        { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
        { text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`, correct: false },
        { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
      ]
    }
  },
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

// Código nuevo añadido.
for(let i = 0; i < questions.length; i++) { levels.push({ question: i }) }
`)},l(a){e=k(a,`import Choose from '$lib/templates/Choose.svelte';
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
      text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
      answers: [
        { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
        { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
        { text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`, correct: false },
        { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
      ]
    }
  },
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

// Código nuevo añadido.
for(let i = 0; i < questions.length; i++) { levels.push({ question: i }) }
`)},m(a,t){u(a,e,t)},d(a){a&&m(e)}}}function J(l){let e,a="Esto puede ser un poco caótico si se plantea mal y tenemos miles de preguntas, pero es una forma fácil de agregar <strong>todas</strong> las preguntas de nuestro índice al contenido teórico. Basta con añadir el siguiente fragmento de código al final de tu módulo",t,s,r,q="de forma que quedaría algo así:",d,i,c,y="Esto nos puede servir siempre que queramos repasar todas las preguntas de un módulo de forma secuencial. 🤠. Justo a continuación, veremos cómo podemos automatizar módulos, niveles y preguntas haciendo uso de Markdown (con su explicación incluida).",p;return s=new T({props:{codeLang:"js",$$slots:{default:[A]},$$scope:{ctx:l}}}),i=new S({props:{icon:"js",name:"dummy.js",route:"src,modules",codeLang:"js",$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){e=f("p"),e.innerHTML=a,t=w(),g(s.$$.fragment),r=f("p"),r.textContent=q,d=w(),g(i.$$.fragment),c=f("p"),c.textContent=y},l(n){e=$(n,"P",{"data-svelte-h":!0}),x(e)!=="svelte-hjbvdt"&&(e.innerHTML=a),t=F(n),v(s.$$.fragment,n),r=$(n,"P",{"data-svelte-h":!0}),x(r)!=="svelte-1wi98gx"&&(r.textContent=q),d=F(n),v(i.$$.fragment,n),c=$(n,"P",{"data-svelte-h":!0}),x(c)!=="svelte-1droypd"&&(c.textContent=y)},m(n,o){u(n,e,o),u(n,t,o),h(s,n,o),u(n,r,o),u(n,d,o),h(i,n,o),u(n,c,o),p=!0},p(n,o){const j={};o&1&&(j.$$scope={dirty:o,ctx:n}),s.$set(j);const E={};o&1&&(E.$$scope={dirty:o,ctx:n}),i.$set(E)},i(n){p||(C(s.$$.fragment,n),C(i.$$.fragment,n),p=!0)},o(n){_(s.$$.fragment,n),_(i.$$.fragment,n),p=!1},d(n){n&&(m(e),m(t),m(r),m(d),m(c)),b(s,n),b(i,n)}}}function M(l){let e,a;return e=new z({props:{$$slots:{default:[J]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,s){h(e,t,s),a=!0},p(t,[s]){const r={};s&1&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){a||(C(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){b(e,t)}}}class N extends I{constructor(e){super(),L(this,e,null,M,H,{})}}export{N as default};
