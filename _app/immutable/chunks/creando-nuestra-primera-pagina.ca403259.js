import{s as Ee}from"./scheduler.38f5b73a.js";import{S as ye,i as ke,r as f,u as $,v,d as g,t as _,w as q,g as i,s as m,h as d,x as p,c,j as ze,f as o,a,m as N,n as U}from"./index.33e8e8ec.js";import{C as de}from"./Code.7e3a14be.js";import{M as Me}from"./Message.3e138e3b.js";import{M as Ie}from"./ModalImage.d84ad5a6.js";import{P as Ae}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{F as De}from"./File.6bc0c696.js";import"./paths.e092a00d.js";function Oe(r){let n;return{c(){n=N(`export const moduleInfo = {
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
`)},l(s){n=U(s,`export const moduleInfo = {
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
`)},m(s,l){a(s,n,l)},d(s){s&&o(n)}}}function Re(r){let n;return{c(){n=N("Recuerda: La etiqueta `html` está pensada para *pequeños* mensajes (pequeñísimos) o por si no quieres disponer de un fichero `index.svelte` para la página principal por un motivo u otro.")},l(s){n=U(s,"Recuerda: La etiqueta `html` está pensada para *pequeños* mensajes (pequeñísimos) o por si no quieres disponer de un fichero `index.svelte` para la página principal por un motivo u otro.")},m(s,l){a(s,n,l)},d(s){s&&o(n)}}}function Se(r){let n;return{c(){n=N(`export const prerender = true;
`)},l(s){n=U(s,`export const prerender = true;
`)},m(s,l){a(s,n,l)},d(s){s&&o(n)}}}function Ne(r){let n;return{c(){n=N(`<b>¡Mi primer módulo!</b>
<br><br>
Aquí va la introducción a lo que será mi módulo. Puedes usar contenido html pero nada más.
`)},l(s){n=U(s,`<b>¡Mi primer módulo!</b>
<br><br>
Aquí va la introducción a lo que será mi módulo. Puedes usar contenido html pero nada más.
`)},m(s,l){a(s,n,l)},d(s){s&&o(n)}}}function Ue(r){let n;return{c(){n=N(`export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' }, // <-- Hemos cambiado el contenido de html a page, indicando que es la página "index.svelte" del módulo
  { html: 'Esta es mi primera página' }
];
`)},l(s){n=U(s,`export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' }, // <-- Hemos cambiado el contenido de html a page, indicando que es la página "index.svelte" del módulo
  { html: 'Esta es mi primera página' }
];
`)},m(s,l){a(s,n,l)},d(s){s&&o(n)}}}function Be(r){let n;return{c(){n=N("El fichero **no** debe llamarse `test.svelte`, ya que entra en conflicto con la ruta `/test` asignada para los tests del módulo.")},l(s){n=U(s,"El fichero **no** debe llamarse `test.svelte`, ya que entra en conflicto con la ruta `/test` asignada para los tests del módulo.")},m(s,l){a(s,n,l)},d(s){s&&o(n)}}}function Fe(r){let n;return{c(){n=N(`<script>
  import Page from '$lib/templates/Page.svelte';
<\/script>
<Page>
  <p>Esta página no se mostraría en el índice de niveles pero es accesible 🫥</p>
</Page>
`)},l(s){n=U(s,`<script>
  import Page from '$lib/templates/Page.svelte';
<\/script>
<Page>
  <p>Esta página no se mostraría en el índice de niveles pero es accesible 🫥</p>
</Page>
`)},m(s,l){a(s,n,l)},d(s){s&&o(n)}}}function Je(r){let n,s='Vamos a empezar a crear contenido dentro de nuestro módulo. La primera forma que veremos es una manera rápida de crear <strong>pequeños</strong> contenidos sin tener que volverse loco con páginas externas. Para ello, haremos uso del parámetro (clave) <code class="svelte-1awqwjz">html</code> dentro de <code class="svelte-1awqwjz">levels</code>.',l,u,J='Parámetro <code class="svelte-1awqwjz">html</code>',Q,P,ce='Para crear nuestra primera página dentro de nuestro módulo y, de paso, darle una descripción interna, vamos a cambiar el contenido de nuestro <code class="svelte-1awqwjz">dummy.js</code> por el siguiente:',V,w,H,pe='Si recargamos y accedemos a nuestro módulo, podremos ver una breve descripción a modo de cabecera del módulo y, además, un Nivel 1 que, si entramos, veremos el texto "Esta es mi primera página". ¡Genial! ¿No? Pero igual es un poco engorroso estar definiendo todo el contenido HTML dentro del fichero JavaScript en lugar de tenerlo modularizado. Pero ¡no te preocupes!, ahora veremos cómo mejorarlo.',G,B,x,W,T,X,z,ue='Clave tipo <code class="svelte-1awqwjz">page</code>',Y,M,fe='Dado que tener todo el contenido dentro del tipo <code class="svelte-1awqwjz">html</code> puede ser muy engorroso, hagamos uso del tipo <code class="svelte-1awqwjz">page</code> para poder referenciar páginas dentro de Codiquest. Para crear nuestra primera página de manera modular, vamos a crear una <strong>carpeta <code class="svelte-1awqwjz">dummy</code> dentro de <code class="svelte-1awqwjz">src/modules</code></strong>. El nombre de la carpeta <strong>debe</strong> coincidir con el del fichero de JavaScript (en este caso, <strong>dummy</strong>).',Z,E,$e='Dentro de la carpeta, vamos a crear dos archivos: <code class="svelte-1awqwjz">+page.js</code> (sí, con el <code class="svelte-1awqwjz">+</code>) e <code class="svelte-1awqwjz">index.svelte</code>, con este contenido, respectivamente:',ee,y,ve="📄 src/modules/dummy/+page.js",te,b,k,ge="📄 src/modules/dummy/index.svelte",ne,h,I,_e='Ahora, una vez creados esos ficheros, vamos a modificar el fichero <code class="svelte-1awqwjz">dummy.js</code> (de la carpeta <code class="svelte-1awqwjz">src/modules</code>) por el siguiente contenido:',se,j,A,qe='Si todo ha ido bien, el contenido que antes estaba definido en <code class="svelte-1awqwjz">html</code> para el bloque de la cabecera del módulo debería verse reflejado por el contenido del fichero <code class="svelte-1awqwjz">index.svelte</code> que acabamos de crear.',oe,D,we="Creando páginas dinámicas",ae,O,xe='Aunque no es lo recomendable, es posible crear páginas dinámicas dentro de un módulo <strong>sin</strong> que estén enlazadas en la constante <code class="svelte-1awqwjz">levels</code>. Para ello, lo único que tienes que hacer (y esto solo es válido en el primer nivel del módulo) es crear tu página dentro de la carpeta del módulo, con la extensión <code class="svelte-1awqwjz">.svelte</code> y con el contenido que desees.',le,F,C,re,R,be="Ejemplo:",ie,L,S,he='Ahora, ve a la URL de tu módulo <code class="svelte-1awqwjz">dummy</code> (<code class="svelte-1awqwjz">localhost:5173/dummy/demo</code>) para poder visualizar el contenido.',me;return w=new de({props:{codeLang:"js",$$slots:{default:[Oe]},$$scope:{ctx:r}}}),x=new Me({props:{type:"NOTE",$$slots:{default:[Re]},$$scope:{ctx:r}}}),T=new Ie({props:{src:"img/install/02.png",alignment:"center",width:"w-1/3",alt:"Visualización del contenido del módulo",modal:"false"}}),b=new de({props:{codeLang:"js",$$slots:{default:[Se]},$$scope:{ctx:r}}}),h=new de({props:{codeLang:"html",$$slots:{default:[Ne]},$$scope:{ctx:r}}}),j=new de({props:{codeLang:"js",$$slots:{default:[Ue]},$$scope:{ctx:r}}}),C=new Me({props:{type:"IMPORTANT",$$slots:{default:[Be]},$$scope:{ctx:r}}}),L=new De({props:{icon:"svelte",route:"src,modules,dummy",name:"demo.svelte",codeLang:"html",$$slots:{default:[Fe]},$$scope:{ctx:r}}}),{c(){n=i("p"),n.innerHTML=s,l=m(),u=i("h2"),u.innerHTML=J,Q=m(),P=i("p"),P.innerHTML=ce,V=m(),f(w.$$.fragment),H=i("p"),H.textContent=pe,G=m(),B=i("blockquote"),f(x.$$.fragment),W=m(),f(T.$$.fragment),X=m(),z=i("h3"),z.innerHTML=ue,Y=m(),M=i("p"),M.innerHTML=fe,Z=m(),E=i("p"),E.innerHTML=$e,ee=m(),y=i("h3"),y.textContent=ve,te=m(),f(b.$$.fragment),k=i("h3"),k.textContent=ge,ne=m(),f(h.$$.fragment),I=i("p"),I.innerHTML=_e,se=m(),f(j.$$.fragment),A=i("p"),A.innerHTML=qe,oe=m(),D=i("h2"),D.textContent=we,ae=m(),O=i("p"),O.innerHTML=xe,le=m(),F=i("blockquote"),f(C.$$.fragment),re=m(),R=i("p"),R.textContent=be,ie=m(),f(L.$$.fragment),S=i("p"),S.innerHTML=he},l(e){n=d(e,"P",{"data-svelte-h":!0}),p(n)!=="svelte-4sf0m0"&&(n.innerHTML=s),l=c(e),u=d(e,"H2",{"data-svelte-h":!0}),p(u)!=="svelte-asb6ip"&&(u.innerHTML=J),Q=c(e),P=d(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-qnt741"&&(P.innerHTML=ce),V=c(e),$(w.$$.fragment,e),H=d(e,"P",{"data-svelte-h":!0}),p(H)!=="svelte-zy3n90"&&(H.textContent=pe),G=c(e),B=d(e,"BLOCKQUOTE",{});var t=ze(B);$(x.$$.fragment,t),t.forEach(o),W=c(e),$(T.$$.fragment,e),X=c(e),z=d(e,"H3",{"data-svelte-h":!0}),p(z)!=="svelte-ps97mv"&&(z.innerHTML=ue),Y=c(e),M=d(e,"P",{"data-svelte-h":!0}),p(M)!=="svelte-2fw72w"&&(M.innerHTML=fe),Z=c(e),E=d(e,"P",{"data-svelte-h":!0}),p(E)!=="svelte-hmiazr"&&(E.innerHTML=$e),ee=c(e),y=d(e,"H3",{"data-svelte-h":!0}),p(y)!=="svelte-1r0nibm"&&(y.textContent=ve),te=c(e),$(b.$$.fragment,e),k=d(e,"H3",{"data-svelte-h":!0}),p(k)!=="svelte-kaoxjs"&&(k.textContent=ge),ne=c(e),$(h.$$.fragment,e),I=d(e,"P",{"data-svelte-h":!0}),p(I)!=="svelte-uy7w40"&&(I.innerHTML=_e),se=c(e),$(j.$$.fragment,e),A=d(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-k1rful"&&(A.innerHTML=qe),oe=c(e),D=d(e,"H2",{"data-svelte-h":!0}),p(D)!=="svelte-ukq1ni"&&(D.textContent=we),ae=c(e),O=d(e,"P",{"data-svelte-h":!0}),p(O)!=="svelte-3uhx8w"&&(O.innerHTML=xe),le=c(e),F=d(e,"BLOCKQUOTE",{});var K=ze(F);$(C.$$.fragment,K),K.forEach(o),re=c(e),R=d(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-vzkens"&&(R.textContent=be),ie=c(e),$(L.$$.fragment,e),S=d(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-xl058i"&&(S.innerHTML=he)},m(e,t){a(e,n,t),a(e,l,t),a(e,u,t),a(e,Q,t),a(e,P,t),a(e,V,t),v(w,e,t),a(e,H,t),a(e,G,t),a(e,B,t),v(x,B,null),a(e,W,t),v(T,e,t),a(e,X,t),a(e,z,t),a(e,Y,t),a(e,M,t),a(e,Z,t),a(e,E,t),a(e,ee,t),a(e,y,t),a(e,te,t),v(b,e,t),a(e,k,t),a(e,ne,t),v(h,e,t),a(e,I,t),a(e,se,t),v(j,e,t),a(e,A,t),a(e,oe,t),a(e,D,t),a(e,ae,t),a(e,O,t),a(e,le,t),a(e,F,t),v(C,F,null),a(e,re,t),a(e,R,t),a(e,ie,t),v(L,e,t),a(e,S,t),me=!0},p(e,t){const K={};t&1&&(K.$$scope={dirty:t,ctx:e}),w.$set(K);const je={};t&1&&(je.$$scope={dirty:t,ctx:e}),x.$set(je);const Ce={};t&1&&(Ce.$$scope={dirty:t,ctx:e}),b.$set(Ce);const Le={};t&1&&(Le.$$scope={dirty:t,ctx:e}),h.$set(Le);const Pe={};t&1&&(Pe.$$scope={dirty:t,ctx:e}),j.$set(Pe);const He={};t&1&&(He.$$scope={dirty:t,ctx:e}),C.$set(He);const Te={};t&1&&(Te.$$scope={dirty:t,ctx:e}),L.$set(Te)},i(e){me||(g(w.$$.fragment,e),g(x.$$.fragment,e),g(T.$$.fragment,e),g(b.$$.fragment,e),g(h.$$.fragment,e),g(j.$$.fragment,e),g(C.$$.fragment,e),g(L.$$.fragment,e),me=!0)},o(e){_(w.$$.fragment,e),_(x.$$.fragment,e),_(T.$$.fragment,e),_(b.$$.fragment,e),_(h.$$.fragment,e),_(j.$$.fragment,e),_(C.$$.fragment,e),_(L.$$.fragment,e),me=!1},d(e){e&&(o(n),o(l),o(u),o(Q),o(P),o(V),o(H),o(G),o(B),o(W),o(X),o(z),o(Y),o(M),o(Z),o(E),o(ee),o(y),o(te),o(k),o(ne),o(I),o(se),o(A),o(oe),o(D),o(ae),o(O),o(le),o(F),o(re),o(R),o(ie),o(S)),q(w,e),q(x),q(T,e),q(b,e),q(h,e),q(j,e),q(C),q(L,e)}}}function Ke(r){let n,s;return n=new Ae({props:{$$slots:{default:[Je]},$$scope:{ctx:r}}}),{c(){f(n.$$.fragment)},l(l){$(n.$$.fragment,l)},m(l,u){v(n,l,u),s=!0},p(l,[u]){const J={};u&1&&(J.$$scope={dirty:u,ctx:l}),n.$set(J)},i(l){s||(g(n.$$.fragment,l),s=!0)},o(l){_(n.$$.fragment,l),s=!1},d(l){q(n,l)}}}class tt extends ye{constructor(n){super(),ke(this,n,null,Ke,Ee,{})}}export{tt as default};
