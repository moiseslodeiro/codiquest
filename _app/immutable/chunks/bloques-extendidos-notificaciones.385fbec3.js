import{s as y}from"./scheduler.38f5b73a.js";import{S as z,i as F,r as k,u as A,v as w,d as P,t as x,w as h,g as T,s as b,h as E,x as W,c as j,k as Q,a as l,f as o,m as U,n as G,j as B}from"./index.33e8e8ec.js";import{P as S}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{M as H}from"./Message.3e138e3b.js";import{b as D}from"./paths.e092a00d.js";import{F as J}from"./File.6bc0c696.js";import{B as V}from"./Browser.510db479.js";function X(r){let t;return{c(){t=U(`¡Ahora veremos cómo funcionan estos mensajes!

> [!TIP]
> Este es un mensaje de tipo TIP

> [!NOTE]
> Este es un mensaje de tipo NOTE

> [!IMPORTANT]
> Este es un mensaje de tipo IMPORTANT

> [!WARNING]
> Este es un mensaje de tipo WARNING

> [!CAUTION]
> Este es un mensaje de tipo CAUTION
`)},l(n){t=G(n,`¡Ahora veremos cómo funcionan estos mensajes!

> [!TIP]
> Este es un mensaje de tipo TIP

> [!NOTE]
> Este es un mensaje de tipo NOTE

> [!IMPORTANT]
> Este es un mensaje de tipo IMPORTANT

> [!WARNING]
> Este es un mensaje de tipo WARNING

> [!CAUTION]
> Este es un mensaje de tipo CAUTION
`)},m(n,a){l(n,t,a)},d(n){n&&o(t)}}}function Y(r){let t;return{c(){t=U("Este es un mensaje de tipo TIP")},l(n){t=G(n,"Este es un mensaje de tipo TIP")},m(n,a){l(n,t,a)},d(n){n&&o(t)}}}function Z(r){let t;return{c(){t=U("Este es un mensaje de tipo NOTE")},l(n){t=G(n,"Este es un mensaje de tipo NOTE")},m(n,a){l(n,t,a)},d(n){n&&o(t)}}}function ee(r){let t;return{c(){t=U("Este es un mensaje de tipo IMPORTANT")},l(n){t=G(n,"Este es un mensaje de tipo IMPORTANT")},m(n,a){l(n,t,a)},d(n){n&&o(t)}}}function te(r){let t;return{c(){t=U("Este es un mensaje de tipo WARNING")},l(n){t=G(n,"Este es un mensaje de tipo WARNING")},m(n,a){l(n,t,a)},d(n){n&&o(t)}}}function se(r){let t;return{c(){t=U("Este es un mensaje de tipo CAUTION")},l(n){t=G(n,"Este es un mensaje de tipo CAUTION")},m(n,a){l(n,t,a)},d(n){n&&o(t)}}}function ne(r){let t,n="¡Ahora veremos cómo funcionan estos mensajes!",a,u,c,q,i,$,M,g,_,I,p,d,O,N,f,R;return c=new H({props:{type:"TIP",$$slots:{default:[Y]},$$scope:{ctx:r}}}),$=new H({props:{type:"NOTE",$$slots:{default:[Z]},$$scope:{ctx:r}}}),_=new H({props:{type:"IMPORTANT",$$slots:{default:[ee]},$$scope:{ctx:r}}}),d=new H({props:{type:"WARNING",$$slots:{default:[te]},$$scope:{ctx:r}}}),f=new H({props:{type:"CAUTION",$$slots:{default:[se]},$$scope:{ctx:r}}}),{c(){t=T("p"),t.textContent=n,a=b(),u=T("blockquote"),k(c.$$.fragment),q=b(),i=T("blockquote"),k($.$$.fragment),M=b(),g=T("blockquote"),k(_.$$.fragment),I=b(),p=T("blockquote"),k(d.$$.fragment),O=b(),N=T("blockquote"),k(f.$$.fragment)},l(s){t=E(s,"P",{"data-svelte-h":!0}),W(t)!=="svelte-4i4rmb"&&(t.textContent=n),a=j(s),u=E(s,"BLOCKQUOTE",{});var e=B(u);A(c.$$.fragment,e),e.forEach(o),q=j(s),i=E(s,"BLOCKQUOTE",{});var m=B(i);A($.$$.fragment,m),m.forEach(o),M=j(s),g=E(s,"BLOCKQUOTE",{});var v=B(g);A(_.$$.fragment,v),v.forEach(o),I=j(s),p=E(s,"BLOCKQUOTE",{});var C=B(p);A(d.$$.fragment,C),C.forEach(o),O=j(s),N=E(s,"BLOCKQUOTE",{});var L=B(N);A(f.$$.fragment,L),L.forEach(o)},m(s,e){l(s,t,e),l(s,a,e),l(s,u,e),w(c,u,null),l(s,q,e),l(s,i,e),w($,i,null),l(s,M,e),l(s,g,e),w(_,g,null),l(s,I,e),l(s,p,e),w(d,p,null),l(s,O,e),l(s,N,e),w(f,N,null),R=!0},p(s,e){const m={};e&1&&(m.$$scope={dirty:e,ctx:s}),c.$set(m);const v={};e&1&&(v.$$scope={dirty:e,ctx:s}),$.$set(v);const C={};e&1&&(C.$$scope={dirty:e,ctx:s}),_.$set(C);const L={};e&1&&(L.$$scope={dirty:e,ctx:s}),d.$set(L);const K={};e&1&&(K.$$scope={dirty:e,ctx:s}),f.$set(K)},i(s){R||(P(c.$$.fragment,s),P($.$$.fragment,s),P(_.$$.fragment,s),P(d.$$.fragment,s),P(f.$$.fragment,s),R=!0)},o(s){x(c.$$.fragment,s),x($.$$.fragment,s),x(_.$$.fragment,s),x(d.$$.fragment,s),x(f.$$.fragment,s),R=!1},d(s){s&&(o(t),o(a),o(u),o(q),o(i),o(M),o(g),o(I),o(p),o(O),o(N)),h(c),h($),h(_),h(d),h(f)}}}function oe(r){let t,n=`Aunque ya se explicó en el apartado de <a href="${D}/components/componentes-message" class="link link-primary internal">componentes</a>, los bloques de notificaciones forman parte de la estructura del lenguaje Markdown extendido por GitHub y sirven para mostrar cuadros de diálogo con un mensaje. En este caso, no haremos uso de un bloque HTML, sino que lo pondremos directamente con Markdown.`,a,u,c="Toma como ejemplo este fichero Markdown:",q,i,$,M="El resultado, al ser procesado, sería:",g,_,I,p,d,O,N,f,R="Cabe destacar que estos componentes, tal y como se mencionó, son compatibles con el Markdown de GitHub, y su diseño es muy similar, por lo que no habrá problemas a la hora de utilizarlos en tu página y de que, al mismo tiempo, se vean bien en GitHub.",s;return i=new J({props:{icon:"markdown",route:"src,foo",name:"test.md",codeLang:"markdown",$$slots:{default:[X]},$$scope:{ctx:r}}}),p=new V({props:{$$slots:{default:[ne]},$$scope:{ctx:r}}}),{c(){t=T("p"),t.innerHTML=n,a=b(),u=T("p"),u.textContent=c,q=b(),k(i.$$.fragment),$=T("p"),$.textContent=M,g=b(),_=T("hr"),I=b(),k(p.$$.fragment),d=b(),O=T("hr"),N=b(),f=T("p"),f.textContent=R,this.h()},l(e){t=E(e,"P",{"data-svelte-h":!0}),W(t)!=="svelte-1cgjcla"&&(t.innerHTML=n),a=j(e),u=E(e,"P",{"data-svelte-h":!0}),W(u)!=="svelte-1qodm7t"&&(u.textContent=c),q=j(e),A(i.$$.fragment,e),$=E(e,"P",{"data-svelte-h":!0}),W($)!=="svelte-c0q4kx"&&($.textContent=M),g=j(e),_=E(e,"HR",{class:!0}),I=j(e),A(p.$$.fragment,e),d=j(e),O=E(e,"HR",{class:!0}),N=j(e),f=E(e,"P",{"data-svelte-h":!0}),W(f)!=="svelte-1dhjsuu"&&(f.textContent=R),this.h()},h(){Q(_,"class","svelte-1awqwjz"),Q(O,"class","svelte-1awqwjz")},m(e,m){l(e,t,m),l(e,a,m),l(e,u,m),l(e,q,m),w(i,e,m),l(e,$,m),l(e,g,m),l(e,_,m),l(e,I,m),w(p,e,m),l(e,d,m),l(e,O,m),l(e,N,m),l(e,f,m),s=!0},p(e,m){const v={};m&1&&(v.$$scope={dirty:m,ctx:e}),i.$set(v);const C={};m&1&&(C.$$scope={dirty:m,ctx:e}),p.$set(C)},i(e){s||(P(i.$$.fragment,e),P(p.$$.fragment,e),s=!0)},o(e){x(i.$$.fragment,e),x(p.$$.fragment,e),s=!1},d(e){e&&(o(t),o(a),o(u),o(q),o($),o(g),o(_),o(I),o(d),o(O),o(N),o(f)),h(i,e),h(p,e)}}}function ae(r){let t,n;return t=new S({props:{$$slots:{default:[oe]},$$scope:{ctx:r}}}),{c(){k(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,u){w(t,a,u),n=!0},p(a,[u]){const c={};u&1&&(c.$$scope={dirty:u,ctx:a}),t.$set(c)},i(a){n||(P(t.$$.fragment,a),n=!0)},o(a){x(t.$$.fragment,a),n=!1},d(a){h(t,a)}}}class pe extends z{constructor(t){super(),F(this,t,null,ae,y,{})}}export{pe as default};
