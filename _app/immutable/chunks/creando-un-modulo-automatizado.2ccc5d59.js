import{s as Qe}from"./scheduler.ddf3e249.js";import{S as Ke,i as Fe,r as f,u as q,v,d as $,t as b,w as g,g as m,s as r,h as u,x as d,c as i,j as Ce,f as s,k as ee,a as n,m as k,n as M}from"./index.3ca611f3.js";import{C as Be}from"./Code.e06be4ef.js";import{M as he}from"./Message.069052d5.js";import{M as Ge}from"./ModalImage.9abc2c0f.js";import{P as We}from"./File.svelte_svelte_type_style_lang.d0caee9a.js";import{F as Re}from"./File.3c661f67.js";import"./paths.8765ca36.js";function Je(c){let a;return{c(){a=k(`node tools/module.js </ruta/entrada.md> [nombre] [público]
`)},l(t){a=M(t,`node tools/module.js </ruta/entrada.md> [nombre] [público]
`)},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function Xe(c){let a;return{c(){a=k("Aunque no es necesario, sí es recomendable establecer los ficheros markdown en la carpeta /src/raw con un formato de <modulo>.module.md para si luego quieres usar la instalación parcial o ejecutar el comando node run module:all lo tengas todo compilado y actualizado de una 😉")},l(t){a=M(t,"Aunque no es necesario, sí es recomendable establecer los ficheros markdown en la carpeta /src/raw con un formato de <modulo>.module.md para si luego quieres usar la instalación parcial o ejecutar el comando node run module:all lo tengas todo compilado y actualizado de una 😉")},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function Ye(c){let a;return{c(){a=k("El *parser* no es perfecto; he tenido que lidiar con algunas (muchas) excepciones y me he encontrado con muchos problemas por el camino. Es un kraken de 1000 cabezas, sin arquitectura hexagonal, ni microservicios (what?), ni nada. Pero es mi kraken, y funciona en mayor o menor medida. Se pide paciencia y, si algo no funciona, por favor, abre un *issue* en el repositorio. :-)")},l(t){a=M(t,"El *parser* no es perfecto; he tenido que lidiar con algunas (muchas) excepciones y me he encontrado con muchos problemas por el camino. Es un kraken de 1000 cabezas, sin arquitectura hexagonal, ni microservicios (what?), ni nada. Pero es mi kraken, y funciona en mayor o menor medida. Se pide paciencia y, si algo no funciona, por favor, abre un *issue* en el repositorio. :-)")},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function Ze(c){let a;return{c(){a=k(`# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de \`Code\` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento \`Code\`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

##  Bloque Code

La primera forma es usar el bloque \`Code\`, indicando el lenguaje que queramos resaltar y, en su interior, poner el código que queramos resaltar.

\`\`\`js
<script>
  import Code from '$lib/components/Code.svelte';
  import Page from '$lib/templates/Page.svelte';
<\/script>

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
\`\`\`

Si ahora recargamos nuestra página, podremos ver el código que acabamos de poner 🤹. ¿Sencillo no? Pues.. no tanto.

⚠️ Debido a **cómo Svelte interpreta algunos caracteres internos** de los scripts, tiene sus limitaciones sobre cómo se interpretan caracteres como las llaves \`{}\` o los símbolos de menor o mayor que \`<>\` (necesarios para funciones o bloques HTML, entre otras), teniéndose que reemplazar por sus equivalentes en HTML. Más adelante, cuando veamos cómo automatizar la creación de contenido, esto será un problema del cual **no tendremos que preocuparnos**.

> [!IMPORTANT]
> Hasta la fecha, solo es necesario cambiar \`{\` por \`&#123;\` o \`&lbrace;\`, \`}\` por \`&#125;\` o \`&rbrace;\`, \`<\` por \`&#60;\` o \`&lt;\` y \`>\` por \`&#62;\` o \`&gt;\`. Pero si otro carácter diera problemas, debería solucionarse de igual manera.
`)},l(t){a=M(t,`# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de \`Code\` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento \`Code\`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

##  Bloque Code

La primera forma es usar el bloque \`Code\`, indicando el lenguaje que queramos resaltar y, en su interior, poner el código que queramos resaltar.

\`\`\`js
<script>
  import Code from '$lib/components/Code.svelte';
  import Page from '$lib/templates/Page.svelte';
<\/script>

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
\`\`\`

Si ahora recargamos nuestra página, podremos ver el código que acabamos de poner 🤹. ¿Sencillo no? Pues.. no tanto.

⚠️ Debido a **cómo Svelte interpreta algunos caracteres internos** de los scripts, tiene sus limitaciones sobre cómo se interpretan caracteres como las llaves \`{}\` o los símbolos de menor o mayor que \`<>\` (necesarios para funciones o bloques HTML, entre otras), teniéndose que reemplazar por sus equivalentes en HTML. Más adelante, cuando veamos cómo automatizar la creación de contenido, esto será un problema del cual **no tendremos que preocuparnos**.

> [!IMPORTANT]
> Hasta la fecha, solo es necesario cambiar \`{\` por \`&#123;\` o \`&lbrace;\`, \`}\` por \`&#125;\` o \`&rbrace;\`, \`<\` por \`&#60;\` o \`&lt;\` y \`>\` por \`&#62;\` o \`&gt;\`. Pero si otro carácter diera problemas, debería solucionarse de igual manera.
`)},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function eo(c){let a;return{c(){a=k(`export const moduleInfo = {
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
`)},l(t){a=M(t,`export const moduleInfo = {
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
`)},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function oo(c){let a;return{c(){a=k("La herramienta `tools/module.js` solo actualiza el contenido del módulo y el fichero `levels.auto.js`, no el `questions.auto.js`. Para eso, ya veremos el equivalente para las preguntas. De esta forma, siempre que quieras actualizar el contenido de tu módulo, podrás usar `tools/module.js` como herramienta sin temor a modificar el resto.")},l(t){a=M(t,"La herramienta `tools/module.js` solo actualiza el contenido del módulo y el fichero `levels.auto.js`, no el `questions.auto.js`. Para eso, ya veremos el equivalente para las preguntas. De esta forma, siempre que quieras actualizar el contenido de tu módulo, podrás usar `tools/module.js` como herramienta sin temor a modificar el resto.")},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function ao(c){let a;return{c(){a=k("Es **muy** importante que cada sección tenga un **nombre diferente**. Es decir, no es válido tener dos secciones (`#`) con el mismo nombre (por ejemplo, `Variables`).")},l(t){a=M(t,"Es **muy** importante que cada sección tenga un **nombre diferente**. Es decir, no es válido tener dos secciones (`#`) con el mismo nombre (por ejemplo, `Variables`).")},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function to(c){let a;return{c(){a=k(`# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de \`Code\` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento \`Code\`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

# Componentes
(...)`)},l(t){a=M(t,`# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de \`Code\` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento \`Code\`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

# Componentes
(...)`)},m(t,l){n(t,a,l)},d(t){t&&s(a)}}}function so(c){let a,t='Ahora que hemos repasado qué es el formato Markdown y algunas de sus propiedades, vamos a hacer una prueba de conversión de <code class="svelte-1awqwjz">.md</code> a módulo. Dentro del entorno de Codiquest, existe una herramienta (un <em>parser</em>) de Markdown que se encarga de:',l,p,G='<li class="svelte-1awqwjz">Crear el módulo (si no existe).</li> <li class="svelte-1awqwjz">Crear los ficheros <code class="svelte-1awqwjz">.js</code> y <code class="svelte-1awqwjz">.svelte</code> requeridos.</li>',oe,T,ze='La herramienta en sí está alojada en <code class="svelte-1awqwjz">/tools/module.js</code> y se puede ejecutar de la siguiente manera:',ae,j,R,w,te,H,ye="Siendo los parámetros:",se,_,xe='<li class="svelte-1awqwjz"><code class="svelte-1awqwjz">ruta de entrada</code>: Obligatorio. Indica la ruta al fichero Markdown que se va a convertir en un módulo de Codiquest.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">nombre</code>: Opcional. Por defecto, el módulo tomará el nombre del fichero Markdown, salvo que le especifiques lo contrario.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">público</code>: Opcional (public|private). Por defecto, un módulo será público, salvo que se indique lo contrario.</li>',ne,Q,C,le,E,Pe="Para ponerlo a prueba, vamos a partir de este fragmento de un fichero de ejemplo, sacado directamente de la documentación de Codiquest. Porque sí, como adelantábamos en el módulo anterior, toda la documentación se ha creado en base a la misma premisa que los módulos, haciendo uso de Markdown para aprovechar la compatibilidad con visores como el de GitHub. 🥳",re,O,Le="Fichero de ejemplo",ie,h,ke='<li class="svelte-1awqwjz">Crea este fichero en <code class="svelte-1awqwjz">src/raw/test.md</code> (o donde quieras, en realidad).</li> <li class="svelte-1awqwjz">Copia el contenido de aquí abajo.</li> <li class="svelte-1awqwjz">Ejecuta, desde tu directorio de trabajo, <code class="svelte-1awqwjz">node tools/module.js src/raw/test.md ejemplo_auto public</code>.</li>',me,z,A,Me="Si todo ha ido bien, deberías ver algo así en tu árbol de directorios y un nuevo módulo agregado a tu página de inicio en Codiquest.",ue,S,ce,W,de,I,Te="Peculiaridades del parser",pe,D,He='Hay que tener en cuenta unas cuantas cosas del <em>parser</em>. Como te habrás dado cuenta, la estructura de directorios es prácticamente igual a la que hemos usado al crear un módulo manualmente, con la salvedad de que, en este caso, tenemos un <code class="svelte-1awqwjz">import</code> dentro del fichero de ejemplo <code class="svelte-1awqwjz">ejemplo_auto.js</code>.',fe,y,N,Ee='El nombre de los ficheros, tanto de niveles como de preguntas, es <code class="svelte-1awqwjz">levels.auto.js</code> y <code class="svelte-1awqwjz">questions.auto.js</code>, lo que indica que es un fichero que se ha generado automáticamente, por lo que <strong>no</strong> debe editarse manualmente, ya que, si se vuelve a ejecutar el comando de convertir (ya sea mediante un <em>workflow</em> de GitHub, de forma automatizada o por otra vía), <strong>los cambios se perderán</strong>.',qe,U,Oe='Ahora bien, <em>¿Qué pasa con el fichero <code class="svelte-1awqwjz">ejemplo_auto.js</code> de <code class="svelte-1awqwjz">src/modules</code>?</em> En este caso, el fichero es estático e inmutable (desde el punto de vista del <em>parser</em>) una vez que se crea. Lo que implica que ese fichero sí puedes modificarlo a tu antojo para, por ejemplo, cambiar los atributos de <code class="svelte-1awqwjz">moduleInfo</code> u organizar los niveles de una forma diferente, sin necesidad del fichero <code class="svelte-1awqwjz">levels.auto.js</code> (o su equivalente para las preguntas). 😄',ve,K,x,$e,J,be,V,Ae="A considerar",ge,F,P,je,B,Se='❌ Este ejemplo estaría <strong>mal</strong>, ya que tiene dos apartados con el mismo nombre (<code class="svelte-1awqwjz"># Componentes</code>).',we,L,_e;return j=new Be({props:{codeLang:"shell",$$slots:{default:[Je]},$$scope:{ctx:c}}}),w=new he({props:{type:"TIP",$$slots:{default:[Xe]},$$scope:{ctx:c}}}),C=new he({props:{type:"IMPORTANT",$$slots:{default:[Ye]},$$scope:{ctx:c}}}),z=new Re({props:{icon:"markdown",route:"src,raw,test",name:"test.md",codeLang:"markdown",$$slots:{default:[Ze]},$$scope:{ctx:c}}}),S=new Ge({props:{src:"img/auto_module.png",alignment:"center",width:"",alt:"Visualización de nuestro módulo dummy en Codiquest",modal:"false"}}),y=new Be({props:{codeLang:"js",$$slots:{default:[eo]},$$scope:{ctx:c}}}),x=new he({props:{type:"IMPORTANT",$$slots:{default:[oo]},$$scope:{ctx:c}}}),P=new he({props:{type:"CAUTION",$$slots:{default:[ao]},$$scope:{ctx:c}}}),L=new Re({props:{icon:"markdown",route:"src,raw,test",name:"test.md",codeLang:"markdown",$$slots:{default:[to]},$$scope:{ctx:c}}}),{c(){a=m("p"),a.innerHTML=t,l=r(),p=m("ol"),p.innerHTML=G,oe=r(),T=m("p"),T.innerHTML=ze,ae=r(),f(j.$$.fragment),R=m("blockquote"),f(w.$$.fragment),te=r(),H=m("p"),H.textContent=ye,se=r(),_=m("ul"),_.innerHTML=xe,ne=r(),Q=m("blockquote"),f(C.$$.fragment),le=r(),E=m("p"),E.textContent=Pe,re=r(),O=m("h2"),O.textContent=Le,ie=r(),h=m("ol"),h.innerHTML=ke,me=r(),f(z.$$.fragment),A=m("p"),A.textContent=Me,ue=r(),f(S.$$.fragment),ce=r(),W=m("hr"),de=r(),I=m("h2"),I.textContent=Te,pe=r(),D=m("p"),D.innerHTML=He,fe=r(),f(y.$$.fragment),N=m("p"),N.innerHTML=Ee,qe=r(),U=m("p"),U.innerHTML=Oe,ve=r(),K=m("blockquote"),f(x.$$.fragment),$e=r(),J=m("hr"),be=r(),V=m("h2"),V.textContent=Ae,ge=r(),F=m("blockquote"),f(P.$$.fragment),je=r(),B=m("p"),B.innerHTML=Se,we=r(),f(L.$$.fragment),this.h()},l(e){a=u(e,"P",{"data-svelte-h":!0}),d(a)!=="svelte-1op94o5"&&(a.innerHTML=t),l=i(e),p=u(e,"OL",{class:!0,"data-svelte-h":!0}),d(p)!=="svelte-yyp3nw"&&(p.innerHTML=G),oe=i(e),T=u(e,"P",{"data-svelte-h":!0}),d(T)!=="svelte-144ncgx"&&(T.innerHTML=ze),ae=i(e),q(j.$$.fragment,e),R=u(e,"BLOCKQUOTE",{});var o=Ce(R);q(w.$$.fragment,o),o.forEach(s),te=i(e),H=u(e,"P",{"data-svelte-h":!0}),d(H)!=="svelte-19rfz1y"&&(H.textContent=ye),se=i(e),_=u(e,"UL",{class:!0,"data-svelte-h":!0}),d(_)!=="svelte-4bo6zk"&&(_.innerHTML=xe),ne=i(e),Q=u(e,"BLOCKQUOTE",{});var X=Ce(Q);q(C.$$.fragment,X),X.forEach(s),le=i(e),E=u(e,"P",{"data-svelte-h":!0}),d(E)!=="svelte-1uzb2xj"&&(E.textContent=Pe),re=i(e),O=u(e,"H2",{"data-svelte-h":!0}),d(O)!=="svelte-jyrqjh"&&(O.textContent=Le),ie=i(e),h=u(e,"OL",{class:!0,"data-svelte-h":!0}),d(h)!=="svelte-1ec9k"&&(h.innerHTML=ke),me=i(e),q(z.$$.fragment,e),A=u(e,"P",{"data-svelte-h":!0}),d(A)!=="svelte-1vsz334"&&(A.textContent=Me),ue=i(e),q(S.$$.fragment,e),ce=i(e),W=u(e,"HR",{class:!0}),de=i(e),I=u(e,"H2",{"data-svelte-h":!0}),d(I)!=="svelte-k8r29h"&&(I.textContent=Te),pe=i(e),D=u(e,"P",{"data-svelte-h":!0}),d(D)!=="svelte-1r7sqwl"&&(D.innerHTML=He),fe=i(e),q(y.$$.fragment,e),N=u(e,"P",{"data-svelte-h":!0}),d(N)!=="svelte-1x2rmls"&&(N.innerHTML=Ee),qe=i(e),U=u(e,"P",{"data-svelte-h":!0}),d(U)!=="svelte-1swdqkx"&&(U.innerHTML=Oe),ve=i(e),K=u(e,"BLOCKQUOTE",{});var Y=Ce(K);q(x.$$.fragment,Y),Y.forEach(s),$e=i(e),J=u(e,"HR",{class:!0}),be=i(e),V=u(e,"H2",{"data-svelte-h":!0}),d(V)!=="svelte-fvlsbb"&&(V.textContent=Ae),ge=i(e),F=u(e,"BLOCKQUOTE",{});var Z=Ce(F);q(P.$$.fragment,Z),Z.forEach(s),je=i(e),B=u(e,"P",{"data-svelte-h":!0}),d(B)!=="svelte-1lm2pt3"&&(B.innerHTML=Se),we=i(e),q(L.$$.fragment,e),this.h()},h(){ee(p,"class","svelte-1awqwjz"),ee(_,"class","svelte-1awqwjz"),ee(h,"class","svelte-1awqwjz"),ee(W,"class","svelte-1awqwjz"),ee(J,"class","svelte-1awqwjz")},m(e,o){n(e,a,o),n(e,l,o),n(e,p,o),n(e,oe,o),n(e,T,o),n(e,ae,o),v(j,e,o),n(e,R,o),v(w,R,null),n(e,te,o),n(e,H,o),n(e,se,o),n(e,_,o),n(e,ne,o),n(e,Q,o),v(C,Q,null),n(e,le,o),n(e,E,o),n(e,re,o),n(e,O,o),n(e,ie,o),n(e,h,o),n(e,me,o),v(z,e,o),n(e,A,o),n(e,ue,o),v(S,e,o),n(e,ce,o),n(e,W,o),n(e,de,o),n(e,I,o),n(e,pe,o),n(e,D,o),n(e,fe,o),v(y,e,o),n(e,N,o),n(e,qe,o),n(e,U,o),n(e,ve,o),n(e,K,o),v(x,K,null),n(e,$e,o),n(e,J,o),n(e,be,o),n(e,V,o),n(e,ge,o),n(e,F,o),v(P,F,null),n(e,je,o),n(e,B,o),n(e,we,o),v(L,e,o),_e=!0},p(e,o){const X={};o&1&&(X.$$scope={dirty:o,ctx:e}),j.$set(X);const Y={};o&1&&(Y.$$scope={dirty:o,ctx:e}),w.$set(Y);const Z={};o&1&&(Z.$$scope={dirty:o,ctx:e}),C.$set(Z);const Ie={};o&1&&(Ie.$$scope={dirty:o,ctx:e}),z.$set(Ie);const De={};o&1&&(De.$$scope={dirty:o,ctx:e}),y.$set(De);const Ne={};o&1&&(Ne.$$scope={dirty:o,ctx:e}),x.$set(Ne);const Ue={};o&1&&(Ue.$$scope={dirty:o,ctx:e}),P.$set(Ue);const Ve={};o&1&&(Ve.$$scope={dirty:o,ctx:e}),L.$set(Ve)},i(e){_e||($(j.$$.fragment,e),$(w.$$.fragment,e),$(C.$$.fragment,e),$(z.$$.fragment,e),$(S.$$.fragment,e),$(y.$$.fragment,e),$(x.$$.fragment,e),$(P.$$.fragment,e),$(L.$$.fragment,e),_e=!0)},o(e){b(j.$$.fragment,e),b(w.$$.fragment,e),b(C.$$.fragment,e),b(z.$$.fragment,e),b(S.$$.fragment,e),b(y.$$.fragment,e),b(x.$$.fragment,e),b(P.$$.fragment,e),b(L.$$.fragment,e),_e=!1},d(e){e&&(s(a),s(l),s(p),s(oe),s(T),s(ae),s(R),s(te),s(H),s(se),s(_),s(ne),s(Q),s(le),s(E),s(re),s(O),s(ie),s(h),s(me),s(A),s(ue),s(ce),s(W),s(de),s(I),s(pe),s(D),s(fe),s(N),s(qe),s(U),s(ve),s(K),s($e),s(J),s(be),s(V),s(ge),s(F),s(je),s(B),s(we)),g(j,e),g(w),g(C),g(z,e),g(S,e),g(y,e),g(x),g(P),g(L,e)}}}function no(c){let a,t;return a=new We({props:{$$slots:{default:[so]},$$scope:{ctx:c}}}),{c(){f(a.$$.fragment)},l(l){q(a.$$.fragment,l)},m(l,p){v(a,l,p),t=!0},p(l,[p]){const G={};p&1&&(G.$$scope={dirty:p,ctx:l}),a.$set(G)},i(l){t||($(a.$$.fragment,l),t=!0)},o(l){b(a.$$.fragment,l),t=!1},d(l){g(a,l)}}}class qo extends Ke{constructor(a){super(),Fe(this,a,null,no,Qe,{})}}export{qo as default};
