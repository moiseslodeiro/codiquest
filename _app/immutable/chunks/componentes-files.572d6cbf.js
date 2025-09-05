import{s as M}from"./scheduler.38f5b73a.js";import{S as H,i as O,r as h,u as z,v as C,d as y,t as k,w as P,g as v,s as _,h as $,x as b,c as x,j as S,f as a,k as N,a as i,m as B,n as L}from"./index.33e8e8ec.js";import{C as U}from"./Code.7e3a14be.js";import{M as K}from"./Message.3e138e3b.js";import"./paths.e092a00d.js";import{P as Q}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{F as R}from"./File.6bc0c696.js";function G(r){let t;return{c(){t=B(`<script>
import File from '$lib/components/File.svelte';
import Page from '$lib/templates/Page.svelte';
const codeBlock = \`export let moduleInfo = {
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
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  }
];\`
<\/script>

<Page>
  <File name="dummy.js" codeLang="js" icon="js" route="src,modules" content={ codeBlock } />
</Page>
`)},l(o){t=L(o,`<script>
import File from '$lib/components/File.svelte';
import Page from '$lib/templates/Page.svelte';
const codeBlock = \`export let moduleInfo = {
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
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  }
];\`
<\/script>

<Page>
  <File name="dummy.js" codeLang="js" icon="js" route="src,modules" content={ codeBlock } />
</Page>
`)},m(o,s){i(o,t,s)},d(o){o&&a(t)}}}function J(r){let t;return{c(){t=B(`export let moduleInfo = {
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
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  }
];
`)},l(o){t=L(o,`export let moduleInfo = {
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
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  }
];
`)},m(o,s){i(o,t,s)},d(o){o&&a(t)}}}function V(r){let t;return{c(){t=B("Aunque suene repetitivo, no hay que olvidar escapar las llaves (`{}` y `}`) y los símbolos de menor/mayor que (`<` y `>`).")},l(o){t=L(o,"Aunque suene repetitivo, no hay que olvidar escapar las llaves (`{}` y `}`) y los símbolos de menor/mayor que (`<` y `>`).")},m(o,s){i(o,t,s)},d(o){o&&a(t)}}}function W(r){let t,o="Este bloque simula un archivo dentro de un editor de código. Se puede personalizar para agregar un icono, mostrar las líneas, cambiar el lenguaje, incluir la ruta donde está el archivo, etc.",s,l,c,E="Esto daría como resultado el siguiente bloque:",g,d,f,m,w,p,F="Atributos",q,u,I='<li class="svelte-1awqwjz"><code class="svelte-1awqwjz">showLines</code>: <code class="svelte-1awqwjz">true</code> o <code class="svelte-1awqwjz">false</code>. Determina si se muestran las líneas junto al código. Por defecto, el valor es <code class="svelte-1awqwjz">true</code>.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">codeLang</code>: Lenguaje o sintaxis que quiera resaltarse. Consulta el apartado superior <code class="svelte-1awqwjz">Añadiendo lenguajes al resaltado de sintaxis</code> para más información.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">codeBlock</code>: Bloque de código a través del atributo <code class="svelte-1awqwjz">codeBlock</code> si no se ha utilizado desde dentro del propio componente <code class="svelte-1awqwjz">&lt;Code&gt;&lt;/Code&gt;</code>.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">icon</code>: Icono (de la carpeta <code class="svelte-1awqwjz">static/icons</code>) que represente el fichero (por ejemplo, <code class="svelte-1awqwjz">js</code>).</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">route</code>: Ruta, separada por comas (<code class="svelte-1awqwjz">,</code>), donde se quiere mostrar el fichero.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">name</code>: Nombre del fichero que se va a representar.</li>',j;return l=new U({props:{codeLang:"js",$$slots:{default:[G]},$$scope:{ctx:r}}}),d=new R({props:{name:"dummy.js",codeLang:"js",icon:"js",route:"src,modules",$$slots:{default:[J]},$$scope:{ctx:r}}}),m=new K({props:{type:"NOTE",$$slots:{default:[V]},$$scope:{ctx:r}}}),{c(){t=v("p"),t.textContent=o,s=_(),h(l.$$.fragment),c=v("p"),c.textContent=E,g=_(),h(d.$$.fragment),f=v("blockquote"),h(m.$$.fragment),w=_(),p=v("h2"),p.textContent=F,q=_(),u=v("ul"),u.innerHTML=I,this.h()},l(e){t=$(e,"P",{"data-svelte-h":!0}),b(t)!=="svelte-136p6bt"&&(t.textContent=o),s=x(e),z(l.$$.fragment,e),c=$(e,"P",{"data-svelte-h":!0}),b(c)!=="svelte-1y7tofn"&&(c.textContent=E),g=x(e),z(d.$$.fragment,e),f=$(e,"BLOCKQUOTE",{});var n=S(f);z(m.$$.fragment,n),n.forEach(a),w=x(e),p=$(e,"H2",{"data-svelte-h":!0}),b(p)!=="svelte-z7hmm1"&&(p.textContent=F),q=x(e),u=$(e,"UL",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-evpoq3"&&(u.innerHTML=I),this.h()},h(){N(u,"class","svelte-1awqwjz")},m(e,n){i(e,t,n),i(e,s,n),C(l,e,n),i(e,c,n),i(e,g,n),C(d,e,n),i(e,f,n),C(m,f,null),i(e,w,n),i(e,p,n),i(e,q,n),i(e,u,n),j=!0},p(e,n){const A={};n&1&&(A.$$scope={dirty:n,ctx:e}),l.$set(A);const T={};n&1&&(T.$$scope={dirty:n,ctx:e}),d.$set(T);const D={};n&1&&(D.$$scope={dirty:n,ctx:e}),m.$set(D)},i(e){j||(y(l.$$.fragment,e),y(d.$$.fragment,e),y(m.$$.fragment,e),j=!0)},o(e){k(l.$$.fragment,e),k(d.$$.fragment,e),k(m.$$.fragment,e),j=!1},d(e){e&&(a(t),a(s),a(c),a(g),a(f),a(w),a(p),a(q),a(u)),P(l,e),P(d,e),P(m)}}}function X(r){let t,o;return t=new Q({props:{$$slots:{default:[W]},$$scope:{ctx:r}}}),{c(){h(t.$$.fragment)},l(s){z(t.$$.fragment,s)},m(s,l){C(t,s,l),o=!0},p(s,[l]){const c={};l&1&&(c.$$scope={dirty:l,ctx:s}),t.$set(c)},i(s){o||(y(t.$$.fragment,s),o=!0)},o(s){k(t.$$.fragment,s),o=!1},d(s){P(t,s)}}}class le extends H{constructor(t){super(),O(this,t,null,X,M,{})}}export{le as default};
