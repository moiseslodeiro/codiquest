import{s as S}from"./scheduler.38f5b73a.js";import{S as V,i as F,r as b,u as B,v as L,d as M,t as j,w as H,g as _,s as v,h as d,x as g,c as w,a as m,f as c,m as q,n as E}from"./index.33e8e8ec.js";import{C as k}from"./Code.7e3a14be.js";import"./paths.e092a00d.js";import{P as A}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{F as D}from"./File.6bc0c696.js";import{B as G}from"./Browser.510db479.js";function I(f){let e;return{c(){e=q(`<script>
  import Message from '$lib/components/Message.svelte';
  import Page from '$lib/templates/Page.svelte';
  import Code from '$lib/components/Code.svelte';
  import Browser from '$lib/components/Browser.svelte';
<\/script>

<Page>
  <Browser>
    <p>Vamos a ver cómo crear una constante x y asignarle el valor 1+2</p>
    <Code codeLang="js">
      const x = 1 + 2;
    </Code>
  </Browser>
</Page>
`)},l(s){e=E(s,`<script>
  import Message from '$lib/components/Message.svelte';
  import Page from '$lib/templates/Page.svelte';
  import Code from '$lib/components/Code.svelte';
  import Browser from '$lib/components/Browser.svelte';
<\/script>

<Page>
  <Browser>
    <p>Vamos a ver cómo crear una constante x y asignarle el valor 1+2</p>
    <Code codeLang="js">
      const x = 1 + 2;
    </Code>
  </Browser>
</Page>
`)},m(s,n){m(s,e,n)},d(s){s&&c(e)}}}function J(f){let e;return{c(){e=q("const x = 1 + 2;")},l(s){e=E(s,"const x = 1 + 2;")},m(s,n){m(s,e,n)},d(s){s&&c(e)}}}function K(f){let e,s="Vamos a ver cómo crear una constante x y asignarle el valor 1 + 2",n,o,a;return o=new k({props:{codeLang:"js",$$slots:{default:[J]},$$scope:{ctx:f}}}),{c(){e=_("p"),e.textContent=s,n=v(),b(o.$$.fragment)},l(r){e=d(r,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1iwcy84"&&(e.textContent=s),n=w(r),B(o.$$.fragment,r)},m(r,i){m(r,e,i),m(r,n,i),L(o,r,i),a=!0},p(r,i){const p={};i&1&&(p.$$scope={dirty:i,ctx:r}),o.$set(p)},i(r){a||(M(o.$$.fragment,r),a=!0)},o(r){j(o.$$.fragment,r),a=!1},d(r){r&&(c(e),c(n)),H(o,r)}}}function N(f){let e,s='El componente <code class="svelte-1awqwjz">Browser</code> es meramente decorativo. Sirve para encajar contenido (sea HTML o no) dentro de la vista de una ventana de un navegador.',n,o,a,r="El resultado de este fichero sería:",i,p,x,$,y="Atributos",C,u,T='El componente <code class="svelte-1awqwjz">Browser</code> no tiene atributos.',P;return o=new D({props:{icon:"svelte",route:"src,modules,foo",name:"test.svelte",codeLang:"js",$$slots:{default:[I]},$$scope:{ctx:f}}}),p=new G({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),{c(){e=_("p"),e.innerHTML=s,n=v(),b(o.$$.fragment),a=_("p"),a.textContent=r,i=v(),b(p.$$.fragment),x=v(),$=_("h2"),$.textContent=y,C=v(),u=_("p"),u.innerHTML=T},l(t){e=d(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-ctcxph"&&(e.innerHTML=s),n=w(t),B(o.$$.fragment,t),a=d(t,"P",{"data-svelte-h":!0}),g(a)!=="svelte-14ufkmy"&&(a.textContent=r),i=w(t),B(p.$$.fragment,t),x=w(t),$=d(t,"H2",{"data-svelte-h":!0}),g($)!=="svelte-z7hmm1"&&($.textContent=y),C=w(t),u=d(t,"P",{"data-svelte-h":!0}),g(u)!=="svelte-rssypz"&&(u.innerHTML=T)},m(t,l){m(t,e,l),m(t,n,l),L(o,t,l),m(t,a,l),m(t,i,l),L(p,t,l),m(t,x,l),m(t,$,l),m(t,C,l),m(t,u,l),P=!0},p(t,l){const h={};l&1&&(h.$$scope={dirty:l,ctx:t}),o.$set(h);const z={};l&1&&(z.$$scope={dirty:l,ctx:t}),p.$set(z)},i(t){P||(M(o.$$.fragment,t),M(p.$$.fragment,t),P=!0)},o(t){j(o.$$.fragment,t),j(p.$$.fragment,t),P=!1},d(t){t&&(c(e),c(n),c(a),c(i),c(x),c($),c(C),c(u)),H(o,t),H(p,t)}}}function O(f){let e,s;return e=new A({props:{$$slots:{default:[N]},$$scope:{ctx:f}}}),{c(){b(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){L(e,n,o),s=!0},p(n,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){s||(M(e.$$.fragment,n),s=!0)},o(n){j(e.$$.fragment,n),s=!1},d(n){H(e,n)}}}class ee extends V{constructor(e){super(),F(this,e,null,O,S,{})}}export{ee as default};
