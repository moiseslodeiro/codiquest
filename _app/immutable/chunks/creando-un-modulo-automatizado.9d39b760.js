import{s as ao}from"./scheduler.38f5b73a.js";import{S as to,i as so,r as f,u as v,v as $,d as q,t as b,w as g,g as u,s as r,h as m,x as d,c as i,j as ke,f as t,k as se,a as n,m as j,n as w}from"./index.33e8e8ec.js";import{C as oo}from"./Code.7e3a14be.js";import{M as Me}from"./Message.3e138e3b.js";import{M as no}from"./ModalImage.d84ad5a6.js";import{P as lo}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{F as Te}from"./File.6bc0c696.js";import"./paths.e092a00d.js";function ro(c){let a;return{c(){a=j(`node tools/module.js </ruta/entrada.md> [nombre] [público]
`)},l(s){a=w(s,`node tools/module.js </ruta/entrada.md> [nombre] [público]
`)},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function io(c){let a;return{c(){a=j("Aunque no es necesario, sí es recomendable establecer los ficheros markdown en la carpeta /src/raw con un formato de <modulo>.module.md para si luego quieres usar la instalación parcial o ejecutar el comando node run module:all lo tengas todo compilado y actualizado de una 😉")},l(s){a=w(s,"Aunque no es necesario, sí es recomendable establecer los ficheros markdown en la carpeta /src/raw con un formato de <modulo>.module.md para si luego quieres usar la instalación parcial o ejecutar el comando node run module:all lo tengas todo compilado y actualizado de una 😉")},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function uo(c){let a;return{c(){a=j("El *parser* no es perfecto; he tenido que lidiar con algunas (muchas) excepciones y me he encontrado con muchos problemas por el camino. Es un kraken de 1000 cabezas, sin arquitectura hexagonal, ni microservicios (what?), ni nada. Pero es mi kraken, y funciona en mayor o menor medida. Se pide paciencia y, si algo no funciona, por favor, abre un *issue* en el repositorio. :-)")},l(s){a=w(s,"El *parser* no es perfecto; he tenido que lidiar con algunas (muchas) excepciones y me he encontrado con muchos problemas por el camino. Es un kraken de 1000 cabezas, sin arquitectura hexagonal, ni microservicios (what?), ni nada. Pero es mi kraken, y funciona en mayor o menor medida. Se pide paciencia y, si algo no funciona, por favor, abre un *issue* en el repositorio. :-)")},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function mo(c){let a;return{c(){a=j(`# Componentes

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
`)},l(s){a=w(s,`# Componentes

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
`)},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function co(c){let a;return{c(){a=j(`export const moduleInfo = {
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
`)},l(s){a=w(s,`export const moduleInfo = {
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
`)},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function po(c){let a;return{c(){a=j("La herramienta `tools/module.js` solo actualiza el contenido del módulo y el fichero `levels.auto.js`, no el `questions.auto.js`. Para eso, ya veremos el equivalente para las preguntas. De esta forma, siempre que quieras actualizar el contenido de tu módulo, podrás usar `tools/module.js` como herramienta sin temor a modificar el resto.")},l(s){a=w(s,"La herramienta `tools/module.js` solo actualiza el contenido del módulo y el fichero `levels.auto.js`, no el `questions.auto.js`. Para eso, ya veremos el equivalente para las preguntas. De esta forma, siempre que quieras actualizar el contenido de tu módulo, podrás usar `tools/module.js` como herramienta sin temor a modificar el resto.")},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function fo(c){let a;return{c(){a=j("Es **muy** importante que cada sección tenga un **nombre diferente**. Es decir, no es válido tener dos secciones (`#`) con el mismo nombre (por ejemplo, `Variables`).")},l(s){a=w(s,"Es **muy** importante que cada sección tenga un **nombre diferente**. Es decir, no es válido tener dos secciones (`#`) con el mismo nombre (por ejemplo, `Variables`).")},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function vo(c){let a;return{c(){a=j(`# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de \`Code\` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento \`Code\`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

# Componentes
(...)
`)},l(s){a=w(s,`# Componentes

Codiquest se planteó, en sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo que se creó fue el de \`Code\` (código), para poder ilustrar ejemplos en cualquier lenguaje. Vamos a ir paso a paso por los que están disponibles actualmente, con ejemplos breves.

# Componentes - Code

Para hacer uso del elemento \`Code\`, podemos importarlo directamente desde la carpeta de componentes y hacer uso del componente de diferentes maneras, tal y como podemos ver a continuación:

# Componentes
(...)
`)},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function $o(c){let a;return{c(){a=j(`# Componentes :: A,B,C

En este bloque trataremos los temas A, B y C. No aparecen directamente en el título pero se puede usar el buscador para buscar por las labels A, B o C`)},l(s){a=w(s,`# Componentes :: A,B,C

En este bloque trataremos los temas A, B y C. No aparecen directamente en el título pero se puede usar el buscador para buscar por las labels A, B o C`)},m(s,l){n(s,a,l)},d(s){s&&t(a)}}}function qo(c){let a,s='Ahora que hemos repasado qué es el formato Markdown y algunas de sus propiedades, vamos a hacer una prueba de conversión de <code class="svelte-1awqwjz">.md</code> a módulo. Dentro del entorno de Codiquest, existe una herramienta (un <em>parser</em>) de Markdown que se encarga de:',l,p,Y='<li class="svelte-1awqwjz">Crear el módulo (si no existe).</li> <li class="svelte-1awqwjz">Crear los ficheros <code class="svelte-1awqwjz">.js</code> y <code class="svelte-1awqwjz">.svelte</code> requeridos.</li>',ne,H,He='La herramienta en sí está alojada en <code class="svelte-1awqwjz">/tools/module.js</code> y se puede ejecutar de la siguiente manera:',le,C,G,_,re,E,Ee="Siendo los parámetros:",ie,h,Ae='<li class="svelte-1awqwjz"><code class="svelte-1awqwjz">ruta de entrada</code>: Obligatorio. Indica la ruta al fichero Markdown que se va a convertir en un módulo de Codiquest.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">nombre</code>: Opcional. Por defecto, el módulo tomará el nombre del fichero Markdown, salvo que le especifiques lo contrario.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">público</code>: Opcional (public|private). Por defecto, un módulo será público, salvo que se indique lo contrario.</li>',ue,W,z,me,A,Oe="Para ponerlo a prueba, vamos a partir de este fragmento de un fichero de ejemplo, sacado directamente de la documentación de Codiquest. Porque sí, como adelantábamos en el módulo anterior, toda la documentación se ha creado en base a la misma premisa que los módulos, haciendo uso de Markdown para aprovechar la compatibilidad con visores como el de GitHub. 🥳",ce,O,Be="Fichero de ejemplo",de,x,Se='<li class="svelte-1awqwjz">Crea este fichero en <code class="svelte-1awqwjz">src/raw/test.md</code> (o donde quieras, en realidad).</li> <li class="svelte-1awqwjz">Copia el contenido de aquí abajo.</li> <li class="svelte-1awqwjz">Ejecuta, desde tu directorio de trabajo, <code class="svelte-1awqwjz">node tools/module.js src/raw/test.md ejemplo_auto public</code>.</li>',pe,y,B,Ie="Si todo ha ido bien, deberías ver algo así en tu árbol de directorios y un nuevo módulo agregado a tu página de inicio en Codiquest.",fe,S,ve,Z,$e,I,Ne="Peculiaridades del parser",qe,N,De='Hay que tener en cuenta unas cuantas cosas del <em>parser</em>. Como te habrás dado cuenta, la estructura de directorios es prácticamente igual a la que hemos usado al crear un módulo manualmente, con la salvedad de que, en este caso, tenemos un <code class="svelte-1awqwjz">import</code> dentro del fichero de ejemplo <code class="svelte-1awqwjz">ejemplo_auto.js</code>.',be,L,D,Ue='El nombre de los ficheros, tanto de niveles como de preguntas, es <code class="svelte-1awqwjz">levels.auto.js</code> y <code class="svelte-1awqwjz">questions.auto.js</code>, lo que indica que es un fichero que se ha generado automáticamente, por lo que <strong>no</strong> debe editarse manualmente, ya que, si se vuelve a ejecutar el comando de convertir (ya sea mediante un <em>workflow</em> de GitHub, de forma automatizada o por otra vía), <strong>los cambios se perderán</strong>.',ge,U,Ve='Ahora bien, <em>¿Qué pasa con el fichero <code class="svelte-1awqwjz">ejemplo_auto.js</code> de <code class="svelte-1awqwjz">src/modules</code>?</em> En este caso, el fichero es estático e inmutable (desde el punto de vista del <em>parser</em>) una vez que se crea. Lo que implica que ese fichero sí puedes modificarlo a tu antojo para, por ejemplo, cambiar los atributos de <code class="svelte-1awqwjz">moduleInfo</code> u organizar los niveles de una forma diferente, sin necesidad del fichero <code class="svelte-1awqwjz">levels.auto.js</code> (o su equivalente para las preguntas). 😄',je,J,P,we,ee,Ce,V,Re="A considerar",_e,X,k,he,R,Qe='❌ Este ejemplo estaría <strong>mal</strong>, ya que tiene dos apartados con el mismo nombre (<code class="svelte-1awqwjz"># Componentes</code>).',ze,M,Q,Ke="Labels automáticas",xe,K,Fe='Cuando los títulos contienen <code class="svelte-1awqwjz">::</code> (al final), seguidos de etiquetas separadas por comas, como <code class="svelte-1awqwjz">:: a,b,c</code>, los niveles correspondientes de los módulos se generan automáticamente asignando esas palabras como <strong>labels</strong> o <strong>etiquetas</strong>.',ye,F,Ge="Esto permite crear niveles con etiquetas vinculadas directamente desde el título, facilitando la organización y búsqueda del contenido de forma automática a partir de esta sintaxis simple e intuitiva.",Le,T,Pe;return C=new oo({props:{codeLang:"shell",$$slots:{default:[ro]},$$scope:{ctx:c}}}),_=new Me({props:{type:"TIP",$$slots:{default:[io]},$$scope:{ctx:c}}}),z=new Me({props:{type:"IMPORTANT",$$slots:{default:[uo]},$$scope:{ctx:c}}}),y=new Te({props:{icon:"markdown",route:"src,raw,test",name:"test.md",codeLang:"markdown",$$slots:{default:[mo]},$$scope:{ctx:c}}}),S=new no({props:{src:"img/auto_module.png",alignment:"center",width:"",alt:"Visualización de nuestro módulo dummy en Codiquest",modal:"false"}}),L=new oo({props:{codeLang:"js",$$slots:{default:[co]},$$scope:{ctx:c}}}),P=new Me({props:{type:"IMPORTANT",$$slots:{default:[po]},$$scope:{ctx:c}}}),k=new Me({props:{type:"CAUTION",$$slots:{default:[fo]},$$scope:{ctx:c}}}),M=new Te({props:{icon:"markdown",route:"src,raw,test",name:"test.md",codeLang:"markdown",$$slots:{default:[vo]},$$scope:{ctx:c}}}),T=new Te({props:{icon:"markdown",route:"src,raw,test",name:"test.md",codeLang:"markdown",$$slots:{default:[$o]},$$scope:{ctx:c}}}),{c(){a=u("p"),a.innerHTML=s,l=r(),p=u("ol"),p.innerHTML=Y,ne=r(),H=u("p"),H.innerHTML=He,le=r(),f(C.$$.fragment),G=u("blockquote"),f(_.$$.fragment),re=r(),E=u("p"),E.textContent=Ee,ie=r(),h=u("ul"),h.innerHTML=Ae,ue=r(),W=u("blockquote"),f(z.$$.fragment),me=r(),A=u("p"),A.textContent=Oe,ce=r(),O=u("h2"),O.textContent=Be,de=r(),x=u("ol"),x.innerHTML=Se,pe=r(),f(y.$$.fragment),B=u("p"),B.textContent=Ie,fe=r(),f(S.$$.fragment),ve=r(),Z=u("hr"),$e=r(),I=u("h2"),I.textContent=Ne,qe=r(),N=u("p"),N.innerHTML=De,be=r(),f(L.$$.fragment),D=u("p"),D.innerHTML=Ue,ge=r(),U=u("p"),U.innerHTML=Ve,je=r(),J=u("blockquote"),f(P.$$.fragment),we=r(),ee=u("hr"),Ce=r(),V=u("h2"),V.textContent=Re,_e=r(),X=u("blockquote"),f(k.$$.fragment),he=r(),R=u("p"),R.innerHTML=Qe,ze=r(),f(M.$$.fragment),Q=u("h2"),Q.textContent=Ke,xe=r(),K=u("p"),K.innerHTML=Fe,ye=r(),F=u("p"),F.textContent=Ge,Le=r(),f(T.$$.fragment),this.h()},l(e){a=m(e,"P",{"data-svelte-h":!0}),d(a)!=="svelte-1op94o5"&&(a.innerHTML=s),l=i(e),p=m(e,"OL",{class:!0,"data-svelte-h":!0}),d(p)!=="svelte-yyp3nw"&&(p.innerHTML=Y),ne=i(e),H=m(e,"P",{"data-svelte-h":!0}),d(H)!=="svelte-144ncgx"&&(H.innerHTML=He),le=i(e),v(C.$$.fragment,e),G=m(e,"BLOCKQUOTE",{});var o=ke(G);v(_.$$.fragment,o),o.forEach(t),re=i(e),E=m(e,"P",{"data-svelte-h":!0}),d(E)!=="svelte-19rfz1y"&&(E.textContent=Ee),ie=i(e),h=m(e,"UL",{class:!0,"data-svelte-h":!0}),d(h)!=="svelte-4bo6zk"&&(h.innerHTML=Ae),ue=i(e),W=m(e,"BLOCKQUOTE",{});var oe=ke(W);v(z.$$.fragment,oe),oe.forEach(t),me=i(e),A=m(e,"P",{"data-svelte-h":!0}),d(A)!=="svelte-1uzb2xj"&&(A.textContent=Oe),ce=i(e),O=m(e,"H2",{"data-svelte-h":!0}),d(O)!=="svelte-jyrqjh"&&(O.textContent=Be),de=i(e),x=m(e,"OL",{class:!0,"data-svelte-h":!0}),d(x)!=="svelte-1ec9k"&&(x.innerHTML=Se),pe=i(e),v(y.$$.fragment,e),B=m(e,"P",{"data-svelte-h":!0}),d(B)!=="svelte-1vsz334"&&(B.textContent=Ie),fe=i(e),v(S.$$.fragment,e),ve=i(e),Z=m(e,"HR",{class:!0}),$e=i(e),I=m(e,"H2",{"data-svelte-h":!0}),d(I)!=="svelte-k8r29h"&&(I.textContent=Ne),qe=i(e),N=m(e,"P",{"data-svelte-h":!0}),d(N)!=="svelte-1r7sqwl"&&(N.innerHTML=De),be=i(e),v(L.$$.fragment,e),D=m(e,"P",{"data-svelte-h":!0}),d(D)!=="svelte-1x2rmls"&&(D.innerHTML=Ue),ge=i(e),U=m(e,"P",{"data-svelte-h":!0}),d(U)!=="svelte-1swdqkx"&&(U.innerHTML=Ve),je=i(e),J=m(e,"BLOCKQUOTE",{});var ae=ke(J);v(P.$$.fragment,ae),ae.forEach(t),we=i(e),ee=m(e,"HR",{class:!0}),Ce=i(e),V=m(e,"H2",{"data-svelte-h":!0}),d(V)!=="svelte-fvlsbb"&&(V.textContent=Re),_e=i(e),X=m(e,"BLOCKQUOTE",{});var te=ke(X);v(k.$$.fragment,te),te.forEach(t),he=i(e),R=m(e,"P",{"data-svelte-h":!0}),d(R)!=="svelte-1lm2pt3"&&(R.innerHTML=Qe),ze=i(e),v(M.$$.fragment,e),Q=m(e,"H2",{"data-svelte-h":!0}),d(Q)!=="svelte-11xctee"&&(Q.textContent=Ke),xe=i(e),K=m(e,"P",{"data-svelte-h":!0}),d(K)!=="svelte-fm63zx"&&(K.innerHTML=Fe),ye=i(e),F=m(e,"P",{"data-svelte-h":!0}),d(F)!=="svelte-vxrimc"&&(F.textContent=Ge),Le=i(e),v(T.$$.fragment,e),this.h()},h(){se(p,"class","svelte-1awqwjz"),se(h,"class","svelte-1awqwjz"),se(x,"class","svelte-1awqwjz"),se(Z,"class","svelte-1awqwjz"),se(ee,"class","svelte-1awqwjz")},m(e,o){n(e,a,o),n(e,l,o),n(e,p,o),n(e,ne,o),n(e,H,o),n(e,le,o),$(C,e,o),n(e,G,o),$(_,G,null),n(e,re,o),n(e,E,o),n(e,ie,o),n(e,h,o),n(e,ue,o),n(e,W,o),$(z,W,null),n(e,me,o),n(e,A,o),n(e,ce,o),n(e,O,o),n(e,de,o),n(e,x,o),n(e,pe,o),$(y,e,o),n(e,B,o),n(e,fe,o),$(S,e,o),n(e,ve,o),n(e,Z,o),n(e,$e,o),n(e,I,o),n(e,qe,o),n(e,N,o),n(e,be,o),$(L,e,o),n(e,D,o),n(e,ge,o),n(e,U,o),n(e,je,o),n(e,J,o),$(P,J,null),n(e,we,o),n(e,ee,o),n(e,Ce,o),n(e,V,o),n(e,_e,o),n(e,X,o),$(k,X,null),n(e,he,o),n(e,R,o),n(e,ze,o),$(M,e,o),n(e,Q,o),n(e,xe,o),n(e,K,o),n(e,ye,o),n(e,F,o),n(e,Le,o),$(T,e,o),Pe=!0},p(e,o){const oe={};o&1&&(oe.$$scope={dirty:o,ctx:e}),C.$set(oe);const ae={};o&1&&(ae.$$scope={dirty:o,ctx:e}),_.$set(ae);const te={};o&1&&(te.$$scope={dirty:o,ctx:e}),z.$set(te);const We={};o&1&&(We.$$scope={dirty:o,ctx:e}),y.$set(We);const Je={};o&1&&(Je.$$scope={dirty:o,ctx:e}),L.$set(Je);const Xe={};o&1&&(Xe.$$scope={dirty:o,ctx:e}),P.$set(Xe);const Ye={};o&1&&(Ye.$$scope={dirty:o,ctx:e}),k.$set(Ye);const Ze={};o&1&&(Ze.$$scope={dirty:o,ctx:e}),M.$set(Ze);const eo={};o&1&&(eo.$$scope={dirty:o,ctx:e}),T.$set(eo)},i(e){Pe||(q(C.$$.fragment,e),q(_.$$.fragment,e),q(z.$$.fragment,e),q(y.$$.fragment,e),q(S.$$.fragment,e),q(L.$$.fragment,e),q(P.$$.fragment,e),q(k.$$.fragment,e),q(M.$$.fragment,e),q(T.$$.fragment,e),Pe=!0)},o(e){b(C.$$.fragment,e),b(_.$$.fragment,e),b(z.$$.fragment,e),b(y.$$.fragment,e),b(S.$$.fragment,e),b(L.$$.fragment,e),b(P.$$.fragment,e),b(k.$$.fragment,e),b(M.$$.fragment,e),b(T.$$.fragment,e),Pe=!1},d(e){e&&(t(a),t(l),t(p),t(ne),t(H),t(le),t(G),t(re),t(E),t(ie),t(h),t(ue),t(W),t(me),t(A),t(ce),t(O),t(de),t(x),t(pe),t(B),t(fe),t(ve),t(Z),t($e),t(I),t(qe),t(N),t(be),t(D),t(ge),t(U),t(je),t(J),t(we),t(ee),t(Ce),t(V),t(_e),t(X),t(he),t(R),t(ze),t(Q),t(xe),t(K),t(ye),t(F),t(Le)),g(C,e),g(_),g(z),g(y,e),g(S,e),g(L,e),g(P),g(k),g(M,e),g(T,e)}}}function bo(c){let a,s;return a=new lo({props:{$$slots:{default:[qo]},$$scope:{ctx:c}}}),{c(){f(a.$$.fragment)},l(l){v(a.$$.fragment,l)},m(l,p){$(a,l,p),s=!0},p(l,[p]){const Y={};p&1&&(Y.$$scope={dirty:p,ctx:l}),a.$set(Y)},i(l){s||(q(a.$$.fragment,l),s=!0)},o(l){b(a.$$.fragment,l),s=!1},d(l){g(a,l)}}}class yo extends to{constructor(a){super(),so(this,a,null,bo,ao,{})}}export{yo as default};
