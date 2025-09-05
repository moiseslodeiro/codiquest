import{s as K}from"./scheduler.38f5b73a.js";import{S as W,i as V,r as _,u as x,v as C,d as y,t as E,w as S,g as q,s as b,h as $,x as g,c as h,j as B,f as n,k as X,a as r,m as H,n as J}from"./index.33e8e8ec.js";import{C as D}from"./Code.7e3a14be.js";import{M as F}from"./Message.3e138e3b.js";import"./paths.e092a00d.js";import{P as Y}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";function Z(c){let s;return{c(){s=H(`<script>
  import Choose from '$lib/templates/Choose.svelte';

  const chooseConfig = {
    checkboxes: true,
    shuffle: true,
    text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
    answers: [
      { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
      { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
      {
        text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`,
        correct: false
      },
      { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
    ],
    resources: [
      {
        title: '(ENG) Entendiendo async/await en JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises'
      },
      {
        title: 'Promesas en JavaScript (MDN)',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise'
      }
    ]
  };

<\/script>

<Choose {...chooseConfig} />
`)},l(a){s=J(a,`<script>
  import Choose from '$lib/templates/Choose.svelte';

  const chooseConfig = {
    checkboxes: true,
    shuffle: true,
    text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
    answers: [
      { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
      { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
      {
        text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`,
        correct: false
      },
      { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
    ],
    resources: [
      {
        title: '(ENG) Entendiendo async/await en JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises'
      },
      {
        title: 'Promesas en JavaScript (MDN)',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise'
      }
    ]
  };

<\/script>

<Choose {...chooseConfig} />
`)},m(a,o){r(a,s,o)},d(a){a&&n(s)}}}function ee(c){let s;return{c(){s=H("Si quieres probarlo, la respuesta correcta está marcada con 🤫.")},l(a){s=J(a,"Si quieres probarlo, la respuesta correcta está marcada con 🤫.")},m(a,o){r(a,s,o)},d(a){a&&n(s)}}}function se(c){let s;return{c(){s=H(`<script>
  import Choose from '$lib/templates/Choose.svelte';

  const multipleChoose = {
    checkboxes: true,
    shuffle: true,
    text: \`Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?\`,
    answers: [
      { text: \`Crear ramas específicas para cada funcionalidad o corrección 👀\`, correct: true },
      { text: \`Hacer commits directamente en la rama main para ahorrar tiempo.\`, correct: false },
      { text: \`Escribir mensajes de commit claros y descriptivos 👀\`, correct: true },
      { text: \`Fusionar ramas sin revisar los cambios realizados por otros.\`, correct: false }
    ]
  };

<\/script>

<Choose {...multipleChoose} />
`)},l(a){s=J(a,`<script>
  import Choose from '$lib/templates/Choose.svelte';

  const multipleChoose = {
    checkboxes: true,
    shuffle: true,
    text: \`Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?\`,
    answers: [
      { text: \`Crear ramas específicas para cada funcionalidad o corrección 👀\`, correct: true },
      { text: \`Hacer commits directamente en la rama main para ahorrar tiempo.\`, correct: false },
      { text: \`Escribir mensajes de commit claros y descriptivos 👀\`, correct: true },
      { text: \`Fusionar ramas sin revisar los cambios realizados por otros.\`, correct: false }
    ]
  };

<\/script>

<Choose {...multipleChoose} />
`)},m(a,o){r(a,s,o)},d(a){a&&n(s)}}}function ae(c){let s;return{c(){s=H("Si quieres probar el resultado, las respuestas correctas están marcadas con 👀.")},l(a){s=J(a,"Si quieres probar el resultado, las respuestas correctas están marcadas con 👀.")},m(a,o){r(a,s,o)},d(a){a&&n(s)}}}function te(c){let s,a='La plantilla <code class="svelte-1awqwjz">Choose</code> ha sido diseñada para crear preguntas de opción simple o múltiple, ya sea de respuesta única (<code class="svelte-1awqwjz">radio button</code>) o de respuesta múltiple (<code class="svelte-1awqwjz">checkbox</code>). Es un componente reutilizable que se puede configurar con diferentes textos, respuestas y comportamientos para construir cuestionarios o ejercicios interactivos.',o,l,i,u,T,f,A="Choose múltiple",P,w,G='Además de crear preguntas de una sola respuesta, la plantilla <code class="svelte-1awqwjz">Choose</code> se puede utilizar para crear preguntas de opción múltiple (permitiendo tanto respuestas únicas como múltiples), tal como vemos en el siguiente ejemplo:',k,d,j,p,L,v,O="Parámetros",U,m,R='<li class="svelte-1awqwjz"><code class="svelte-1awqwjz">resources</code>: Es una lista (array) de objetos que contiene recursos adicionales, como enlaces a documentación o artículos. Cada objeto suele tener un title (título) y una url (dirección web). Se muestran en la pestaña &quot;Recursos&quot;.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">text</code>: Es el texto de la pregunta que se mostrará al usuario.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">answers</code>: Es la lista (array) de posibles respuestas. Cada respuesta es un objeto que debe contener:<ul class="svelte-1awqwjz"><li class="svelte-1awqwjz"><code class="svelte-1awqwjz">text</code>: Texto de la opción.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">correct</code>: Un valor booleano (<code class="svelte-1awqwjz">true</code>/<code class="svelte-1awqwjz">false</code>) que indica si esa respuesta es correcta.</li></ul></li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">checkboxes</code>: Un valor booleano (<code class="svelte-1awqwjz">true</code>/<code class="svelte-1awqwjz">false</code>). Aunque su nombre es <code class="svelte-1awqwjz">checkboxes</code>, su función principal es determinar si se pueden seleccionar múltiples respuestas.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">shuffle</code>:Un valor booleano (<code class="svelte-1awqwjz">true</code>/<code class="svelte-1awqwjz">false</code>) que, si es <code class="svelte-1awqwjz">true</code>, hace que el orden de las respuestas se muestre de forma aleatoria cada vez que se carga el componente.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">inTestMode</code>: Un valor booleano que cambia la apariencia y el comportamiento del componente. Si es <code class="svelte-1awqwjz">true</code>, se muestra de una forma más simple, ideal para un examen o test. Si es <code class="svelte-1awqwjz">false</code> (el valor por defecto), se muestra con pestañas (&quot;Pregunta&quot; y &quot;Recursos&quot;) y botones para comprobar la solución, ideal para un modo de aprendizaje. Aunque es un parámetro, no se suele usar de manera directa en el componente.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">showCorrectAnswers</code>: Un valor booleano que, cuando está en <em>modo test</em> (<code class="svelte-1awqwjz">inTestMode</code>), se usa para resaltar visualmente cuáles eran las respuestas correctas.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">questionNumber</code>: Un número que sirve como identificador único para la pregunta, útil para agrupar los botones de tipo <code class="svelte-1awqwjz">radio</code> y que funcionen correctamente.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">isCorrect</code>: Esta propiedad se usa principalmente en <code class="svelte-1awqwjz">inTestMode</code>. El componente padre le puede pasar un valor booleano (<code class="svelte-1awqwjz">true</code> o <code class="svelte-1awqwjz">false</code>) para indicar si la respuesta del usuario fue correcta, y el fondo de la pregunta cambiará a verde o rojo.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">order</code>: Un número que indica la posición de esta pregunta dentro de un conjunto más grande de preguntas (por ejemplo, en un test).</li>',M;return l=new D({props:{codeLang:"js",$$slots:{default:[Z]},$$scope:{ctx:c}}}),u=new F({props:{type:"TIP",$$slots:{default:[ee]},$$scope:{ctx:c}}}),d=new D({props:{codeLang:"js",$$slots:{default:[se]},$$scope:{ctx:c}}}),p=new F({props:{type:"TIP",$$slots:{default:[ae]},$$scope:{ctx:c}}}),{c(){s=q("p"),s.innerHTML=a,o=b(),_(l.$$.fragment),i=q("blockquote"),_(u.$$.fragment),T=b(),f=q("h2"),f.textContent=A,P=b(),w=q("p"),w.innerHTML=G,k=b(),_(d.$$.fragment),j=q("blockquote"),_(p.$$.fragment),L=b(),v=q("h2"),v.textContent=O,U=b(),m=q("ul"),m.innerHTML=R,this.h()},l(e){s=$(e,"P",{"data-svelte-h":!0}),g(s)!=="svelte-cs1pex"&&(s.innerHTML=a),o=h(e),x(l.$$.fragment,e),i=$(e,"BLOCKQUOTE",{});var t=B(i);x(u.$$.fragment,t),t.forEach(n),T=h(e),f=$(e,"H2",{"data-svelte-h":!0}),g(f)!=="svelte-3is3ak"&&(f.textContent=A),P=h(e),w=$(e,"P",{"data-svelte-h":!0}),g(w)!=="svelte-ar1f2h"&&(w.innerHTML=G),k=h(e),x(d.$$.fragment,e),j=$(e,"BLOCKQUOTE",{});var z=B(j);x(p.$$.fragment,z),z.forEach(n),L=h(e),v=$(e,"H2",{"data-svelte-h":!0}),g(v)!=="svelte-1tanu2q"&&(v.textContent=O),U=h(e),m=$(e,"UL",{class:!0,"data-svelte-h":!0}),g(m)!=="svelte-cy0sci"&&(m.innerHTML=R),this.h()},h(){X(m,"class","svelte-1awqwjz")},m(e,t){r(e,s,t),r(e,o,t),C(l,e,t),r(e,i,t),C(u,i,null),r(e,T,t),r(e,f,t),r(e,P,t),r(e,w,t),r(e,k,t),C(d,e,t),r(e,j,t),C(p,j,null),r(e,L,t),r(e,v,t),r(e,U,t),r(e,m,t),M=!0},p(e,t){const z={};t&1&&(z.$$scope={dirty:t,ctx:e}),l.$set(z);const N={};t&1&&(N.$$scope={dirty:t,ctx:e}),u.$set(N);const I={};t&1&&(I.$$scope={dirty:t,ctx:e}),d.$set(I);const Q={};t&1&&(Q.$$scope={dirty:t,ctx:e}),p.$set(Q)},i(e){M||(y(l.$$.fragment,e),y(u.$$.fragment,e),y(d.$$.fragment,e),y(p.$$.fragment,e),M=!0)},o(e){E(l.$$.fragment,e),E(u.$$.fragment,e),E(d.$$.fragment,e),E(p.$$.fragment,e),M=!1},d(e){e&&(n(s),n(o),n(i),n(T),n(f),n(P),n(w),n(k),n(j),n(L),n(v),n(U),n(m)),S(l,e),S(u),S(d,e),S(p)}}}function oe(c){let s,a;return s=new Y({props:{$$slots:{default:[te]},$$scope:{ctx:c}}}),{c(){_(s.$$.fragment)},l(o){x(s.$$.fragment,o)},m(o,l){C(s,o,l),a=!0},p(o,[l]){const i={};l&1&&(i.$$scope={dirty:l,ctx:o}),s.$set(i)},i(o){a||(y(s.$$.fragment,o),a=!0)},o(o){E(s.$$.fragment,o),a=!1},d(o){S(s,o)}}}class de extends W{constructor(s){super(),V(this,s,null,oe,K,{})}}export{de as default};
