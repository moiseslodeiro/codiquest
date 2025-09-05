import{s as R}from"./scheduler.38f5b73a.js";import{S as U,i as X,r as j,u as z,v as k,d as S,t as W,w as E,g as u,s as H,h as d,x as f,c as x,a as l,f as o,m as A,n as B}from"./index.33e8e8ec.js";import{P as Y}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import"./paths.e092a00d.js";import{F}from"./File.6bc0c696.js";function Z(i){let t;return{c(){t=A(`Hola mundo 🌍
`)},l(a){t=B(a,`Hola mundo 🌍
`)},m(a,n){l(a,t,n)},d(a){a&&o(t)}}}function ee(i){let t;return{c(){t=A(`<script>
  import Page from '$lib/templates/Page.svelte';
<\/script>
<Page>
  <p class="mt-4">Hola mundo 🌍</p>
</Page>
`)},l(a){t=B(a,`<script>
  import Page from '$lib/templates/Page.svelte';
<\/script>
<Page>
  <p class="mt-4">Hola mundo 🌍</p>
</Page>
`)},m(a,n){l(a,t,n)},d(a){a&&o(t)}}}function te(i){let t;return{c(){t=A(`<script>
  import Page from '$lib/templates/Page.svelte';
  export const resources = [
    {
      url: 'https://es.wikipedia.org/wiki/Hola_mundo',
      title: 'Hello World!'
    }
  ];
<\/script>
<Page {resources} >
  <p class="mt-4">Hola mundo 🌍</p>
</Page>
`)},l(a){t=B(a,`<script>
  import Page from '$lib/templates/Page.svelte';
  export const resources = [
    {
      url: 'https://es.wikipedia.org/wiki/Hola_mundo',
      title: 'Hello World!'
    }
  ];
<\/script>
<Page {resources} >
  <p class="mt-4">Hola mundo 🌍</p>
</Page>
`)},m(a,n){l(a,t,n)},d(a){a&&o(t)}}}function ae(i){let t,a='<strong>Page</strong> es un componente que recibe contenido y lo adapta visualmente al espacio disponible, aplicando los estilos necesarios e incluyendo componentes como <code class="svelte-1awqwjz">NextLevelButton</code> para avanzar de página, por ejemplo.',n,r,h='Hasta ahora, nuestro fichero <code class="svelte-1awqwjz">src/modules/dummy/basic/helloworld.svelte</code> se veía así:',b,c,$,D="Vamos a cambiar el contenido del fichero helloworld.svelte para hacerlo visualmente más atractivo.",q,p,v,I="Si <strong>recargas</strong> ahora tu página (o si el <em>hot-reload</em> está activo) verás que ahora aparecen varios elementos en pantalla que antes no estaban, como las pestañas de &#39;Contenido&#39; y un botón que dice: &#39;Esto es todo, ¡vuelve pronto para más!&#39;, indicando que el módulo ha llegado a su fin. Si haces clic en la pestaña de recursos, verás un enlace a Wikipedia.",L,g,N='Este tipo de plantilla (<code class="svelte-1awqwjz">Page</code>) sirve para mostrar contenido textual en nuestra página y crear referencias que sirvan de apoyo a nuestro material. Puedes agregar nuevos iconos de enlace editando el fichero <code class="svelte-1awqwjz">src/lib/components/IconList.svelte</code>.',C,_,V="Añadiendo la pestaña de recursos",T,P,G='Dentro de la plantilla <code class="svelte-1awqwjz">Page</code>, es posible añadir una pestaña que incluya un listado de recursos (enlaces) que pueden ser de utilidad para reforzar el contenido explicado en esta página. Para ello, crea una constante <code class="svelte-1awqwjz">resources</code> y añádela como parámetro al componente Page, tal y como se muestra a continuación.',M,m,w,J="Si todo ha ido bien, al recargar la página verás el mismo contenido de antes, <strong>pero</strong> con una nueva pestaña de recursos.",y;return c=new F({props:{icon:"svelte",route:"src,modules,dummy,basic",name:"helloworld.svelte",codeLang:"html",$$slots:{default:[Z]},$$scope:{ctx:i}}}),p=new F({props:{icon:"svelte",route:"src,modules,dummy,basic",name:"helloworld.svelte",codeLang:"html",$$slots:{default:[ee]},$$scope:{ctx:i}}}),m=new F({props:{icon:"svelte",route:"src,modules,dummy,basic",name:"helloworld.svelte",codeLang:"html",$$slots:{default:[te]},$$scope:{ctx:i}}}),{c(){t=u("p"),t.innerHTML=a,n=H(),r=u("p"),r.innerHTML=h,b=H(),j(c.$$.fragment),$=u("p"),$.textContent=D,q=H(),j(p.$$.fragment),v=u("p"),v.innerHTML=I,L=H(),g=u("p"),g.innerHTML=N,C=H(),_=u("h2"),_.textContent=V,T=H(),P=u("p"),P.innerHTML=G,M=H(),j(m.$$.fragment),w=u("p"),w.innerHTML=J},l(e){t=d(e,"P",{"data-svelte-h":!0}),f(t)!=="svelte-w2265m"&&(t.innerHTML=a),n=x(e),r=d(e,"P",{"data-svelte-h":!0}),f(r)!=="svelte-vtbgsr"&&(r.innerHTML=h),b=x(e),z(c.$$.fragment,e),$=d(e,"P",{"data-svelte-h":!0}),f($)!=="svelte-1qqojxj"&&($.textContent=D),q=x(e),z(p.$$.fragment,e),v=d(e,"P",{"data-svelte-h":!0}),f(v)!=="svelte-14mmcy"&&(v.innerHTML=I),L=x(e),g=d(e,"P",{"data-svelte-h":!0}),f(g)!=="svelte-180m355"&&(g.innerHTML=N),C=x(e),_=d(e,"H2",{"data-svelte-h":!0}),f(_)!=="svelte-v8cmh"&&(_.textContent=V),T=x(e),P=d(e,"P",{"data-svelte-h":!0}),f(P)!=="svelte-161pp96"&&(P.innerHTML=G),M=x(e),z(m.$$.fragment,e),w=d(e,"P",{"data-svelte-h":!0}),f(w)!=="svelte-bf5mie"&&(w.innerHTML=J)},m(e,s){l(e,t,s),l(e,n,s),l(e,r,s),l(e,b,s),k(c,e,s),l(e,$,s),l(e,q,s),k(p,e,s),l(e,v,s),l(e,L,s),l(e,g,s),l(e,C,s),l(e,_,s),l(e,T,s),l(e,P,s),l(e,M,s),k(m,e,s),l(e,w,s),y=!0},p(e,s){const K={};s&1&&(K.$$scope={dirty:s,ctx:e}),c.$set(K);const O={};s&1&&(O.$$scope={dirty:s,ctx:e}),p.$set(O);const Q={};s&1&&(Q.$$scope={dirty:s,ctx:e}),m.$set(Q)},i(e){y||(S(c.$$.fragment,e),S(p.$$.fragment,e),S(m.$$.fragment,e),y=!0)},o(e){W(c.$$.fragment,e),W(p.$$.fragment,e),W(m.$$.fragment,e),y=!1},d(e){e&&(o(t),o(n),o(r),o(b),o($),o(q),o(v),o(L),o(g),o(C),o(_),o(T),o(P),o(M),o(w)),E(c,e),E(p,e),E(m,e)}}}function se(i){let t,a;return t=new Y({props:{$$slots:{default:[ae]},$$scope:{ctx:i}}}),{c(){j(t.$$.fragment)},l(n){z(t.$$.fragment,n)},m(n,r){k(t,n,r),a=!0},p(n,[r]){const h={};r&1&&(h.$$scope={dirty:r,ctx:n}),t.$set(h)},i(n){a||(S(t.$$.fragment,n),a=!0)},o(n){W(t.$$.fragment,n),a=!1},d(n){E(t,n)}}}class ce extends U{constructor(t){super(),X(this,t,null,se,R,{})}}export{ce as default};
