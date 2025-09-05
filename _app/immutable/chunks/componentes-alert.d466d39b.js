import{s as S}from"./scheduler.38f5b73a.js";import{S as B,i as k,r as g,u as _,v as w,d as v,t as A,w as h,g as x,s as M,h as T,x as b,c as y,k as E,a as m,f as i,m as q,n as P}from"./index.33e8e8ec.js";import{A as L}from"./Alert.8ce71778.js";import{C as D}from"./Code.7e3a14be.js";import"./paths.e092a00d.js";import{P as F}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{B as I}from"./Browser.510db479.js";function J(o){let e;return{c(){e=q(`<script>
  import Alert from '$lib/components/Alert.svelte';
  import Page from '$lib/templates/Page.svelte';
<\/script>

<Page>
  <Alert type="success" message="Guardado correctamente" />
  <Alert type="error" message="Ups!" />
  <Alert type="warning" message="Algo ha ido mal..." />
  <Alert type="info" message="Todo ha salido a pedir de Milhouse" />
</Page>
`)},l(t){e=P(t,`<script>
  import Alert from '$lib/components/Alert.svelte';
  import Page from '$lib/templates/Page.svelte';
<\/script>

<Page>
  <Alert type="success" message="Guardado correctamente" />
  <Alert type="error" message="Ups!" />
  <Alert type="warning" message="Algo ha ido mal..." />
  <Alert type="info" message="Todo ha salido a pedir de Milhouse" />
</Page>
`)},m(t,s){m(t,e,s)},d(t){t&&i(e)}}}function K(o){let e;return{c(){e=q(`Guardado correctamente
`)},l(t){e=P(t,`Guardado correctamente
`)},m(t,s){m(t,e,s)},d(t){t&&i(e)}}}function N(o){let e;return{c(){e=q(`Ups!
`)},l(t){e=P(t,`Ups!
`)},m(t,s){m(t,e,s)},d(t){t&&i(e)}}}function O(o){let e;return{c(){e=q(`Algo ha ido mal...
`)},l(t){e=P(t,`Algo ha ido mal...
`)},m(t,s){m(t,e,s)},d(t){t&&i(e)}}}function Q(o){let e;return{c(){e=q("Todo ha salido a pedir de Milhouse")},l(t){e=P(t,"Todo ha salido a pedir de Milhouse")},m(t,s){m(t,e,s)},d(t){t&&i(e)}}}function R(o){let e,t,s,r,$;return e=new L({props:{type:"success",$$slots:{default:[K]},$$scope:{ctx:o}}}),t=new L({props:{type:"error",$$slots:{default:[N]},$$scope:{ctx:o}}}),s=new L({props:{type:"warning",$$slots:{default:[O]},$$scope:{ctx:o}}}),r=new L({props:{type:"info",$$slots:{default:[Q]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment),g(t.$$.fragment),g(s.$$.fragment),g(r.$$.fragment)},l(n){_(e.$$.fragment,n),_(t.$$.fragment,n),_(s.$$.fragment,n),_(r.$$.fragment,n)},m(n,l){w(e,n,l),w(t,n,l),w(s,n,l),w(r,n,l),$=!0},p(n,l){const p={};l&1&&(p.$$scope={dirty:l,ctx:n}),e.$set(p);const d={};l&1&&(d.$$scope={dirty:l,ctx:n}),t.$set(d);const f={};l&1&&(f.$$scope={dirty:l,ctx:n}),s.$set(f);const j={};l&1&&(j.$$scope={dirty:l,ctx:n}),r.$set(j)},i(n){$||(v(e.$$.fragment,n),v(t.$$.fragment,n),v(s.$$.fragment,n),v(r.$$.fragment,n),$=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(s.$$.fragment,n),A(r.$$.fragment,n),$=!1},d(n){h(e,n),h(t,n),h(s,n),h(r,n)}}}function V(o){let e,t='Si quieres incluir un mensaje de alerta en tu sección del módulo, puedes hacer uso del componente <code class="svelte-1awqwjz">Alert</code>.',s,r,$,n="Esto daría un resultado como este:",l,p,d,f,j="Atributos",z,u,H='<li class="svelte-1awqwjz"><code class="svelte-1awqwjz">message</code>: Mensaje que se quiera incluir dentro del cuadro de alerta.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">type</code>: Tipo del mensaje. Puede ser <code class="svelte-1awqwjz">info</code>, <code class="svelte-1awqwjz">success</code>, <code class="svelte-1awqwjz">warning</code> o <code class="svelte-1awqwjz">error</code>.</li>',C;return r=new D({props:{codeLang:"js",$$slots:{default:[J]},$$scope:{ctx:o}}}),p=new I({props:{$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){e=x("p"),e.innerHTML=t,s=M(),g(r.$$.fragment),$=x("p"),$.textContent=n,l=M(),g(p.$$.fragment),d=M(),f=x("h2"),f.textContent=j,z=M(),u=x("ul"),u.innerHTML=H,this.h()},l(a){e=T(a,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1us5o1l"&&(e.innerHTML=t),s=y(a),_(r.$$.fragment,a),$=T(a,"P",{"data-svelte-h":!0}),b($)!=="svelte-vvpzyt"&&($.textContent=n),l=y(a),_(p.$$.fragment,a),d=y(a),f=T(a,"H2",{"data-svelte-h":!0}),b(f)!=="svelte-z7hmm1"&&(f.textContent=j),z=y(a),u=T(a,"UL",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1apjaie"&&(u.innerHTML=H),this.h()},h(){E(u,"class","svelte-1awqwjz")},m(a,c){m(a,e,c),m(a,s,c),w(r,a,c),m(a,$,c),m(a,l,c),w(p,a,c),m(a,d,c),m(a,f,c),m(a,z,c),m(a,u,c),C=!0},p(a,c){const U={};c&1&&(U.$$scope={dirty:c,ctx:a}),r.$set(U);const G={};c&1&&(G.$$scope={dirty:c,ctx:a}),p.$set(G)},i(a){C||(v(r.$$.fragment,a),v(p.$$.fragment,a),C=!0)},o(a){A(r.$$.fragment,a),A(p.$$.fragment,a),C=!1},d(a){a&&(i(e),i(s),i($),i(l),i(d),i(f),i(z),i(u)),h(r,a),h(p,a)}}}function W(o){let e,t;return e=new F({props:{$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(s){_(e.$$.fragment,s)},m(s,r){w(e,s,r),t=!0},p(s,[r]){const $={};r&1&&($.$$scope={dirty:r,ctx:s}),e.$set($)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){h(e,s)}}}class ne extends B{constructor(e){super(),k(this,e,null,W,S,{})}}export{ne as default};
