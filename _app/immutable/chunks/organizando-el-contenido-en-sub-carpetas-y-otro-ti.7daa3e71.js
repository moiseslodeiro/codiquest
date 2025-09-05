import{s as ze}from"./scheduler.38f5b73a.js";import{S as ye,i as Te,r as q,u as j,v as x,d as C,t as z,w as y,g as c,s as d,h as i,x as m,c as u,j as re,f as n,k as He,a as s,m as S,n as D}from"./index.33e8e8ec.js";import{C as ce}from"./Code.7e3a14be.js";import{M as ie}from"./Message.3e138e3b.js";import{b as Le}from"./paths.e092a00d.js";import{P as Ee}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{F as Me}from"./File.6bc0c696.js";function Pe(r){let t;return{c(){t=S(`export const prerender = true;
`)},l(l){t=D(l,`export const prerender = true;
`)},m(l,a){s(l,t,a)},d(l){l&&n(t)}}}function ke(r){let t;return{c(){t=S(`Hola mundo 🌍
`)},l(l){t=D(l,`Hola mundo 🌍
`)},m(l,a){s(l,t,a)},d(l){l&&n(t)}}}function Ie(r){let t;return{c(){t=S(`export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' },
  {
    page: 'basic/helloworld', // <-- Carpeta basic, dentro del módulo dummy, fichero helloworld.svelte
    title: 'Bienvenid@s'
  }
];
`)},l(l){t=D(l,`export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

export const levels = [
  { page: 'index' },
  {
    page: 'basic/helloworld', // <-- Carpeta basic, dentro del módulo dummy, fichero helloworld.svelte
    title: 'Bienvenid@s'
  }
];
`)},m(l,a){s(l,t,a)},d(l){l&&n(t)}}}function Oe(r){let t;return{c(){t=S("Hay un comando dentro del proyecto que es `npm run newmodule <nombre>` para crear módulos con mayor facilidad 😇 (igual debí haber puesto esto antes...).")},l(l){t=D(l,"Hay un comando dentro del proyecto que es `npm run newmodule <nombre>` para crear módulos con mayor facilidad 😇 (igual debí haber puesto esto antes...).")},m(l,a){s(l,t,a)},d(l){l&&n(t)}}}function Be(r){let t;return{c(){t=S("Por limitaciones de la propia app y de cómo se hace el prerrenderizado estático, solo sería posible establecer un nivel de jerarquía. Es decir, `src/modules/dummy/basic/helloworld` sí es posible, mientras que `src/modules/dummy/basic/otronivel/helloworld` no.")},l(l){t=D(l,"Por limitaciones de la propia app y de cómo se hace el prerrenderizado estático, solo sería posible establecer un nivel de jerarquía. Es decir, `src/modules/dummy/basic/helloworld` sí es posible, mientras que `src/modules/dummy/basic/otronivel/helloworld` no.")},m(l,a){s(l,t,a)},d(l){l&&n(t)}}}function Se(r){let t;return{c(){t=S(`export const moduleInfo = {
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
    title: 'Enlace al módulo chuchu',
    module: 'chuchu' // <-- Enlace al módulo chuchu
  }
];
`)},l(l){t=D(l,`export const moduleInfo = {
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
    title: 'Enlace al módulo chuchu',
    module: 'chuchu' // <-- Enlace al módulo chuchu
  }
];
`)},m(l,a){s(l,t,a)},d(l){l&&n(t)}}}function De(r){let t;return{c(){t=S("En el caso del ejemplo donde se enlaza al módulo `chuchu`, suelo configurar este como `public: false` para que no se muestre en el listado principal de módulos. Sigue siendo accesible, pero no es visible a simple vista.")},l(l){t=D(l,"En el caso del ejemplo donde se enlaza al módulo `chuchu`, suelo configurar este como `public: false` para que no se muestre en el listado principal de módulos. Sigue siendo accesible, pero no es visible a simple vista.")},m(l,a){s(l,t,a)},d(l){l&&n(t)}}}function Ue(r){let t,l='Vamos a dar un salto de calidad. Hasta ahora, los niveles los habíamos definido con la etiqueta <code class="svelte-1awqwjz">html</code>, pero ya sabemos que <code class="svelte-1awqwjz">page</code> sirve para cargar contenido dinámico dentro del módulo. Para tenerlo un poco más organizado, vamos a crear una carpeta dentro del módulo que se llame <code class="svelte-1awqwjz">basic</code> (o como quieras llamarla) y, dentro, un fichero llamado <code class="svelte-1awqwjz">holamundo.svelte</code> y, adicionalmente (y <strong>una vez más</strong>), un fichero <code class="svelte-1awqwjz">+page.js</code> con el mismo contenido de antes (en lugar de crearlo desde cero, puedes copiar el mismo fichero a la carpeta <code class="svelte-1awqwjz">basic</code>).',a,p,K="Creando la carpeta basics",R,T,de="src/modules/dummy/basic/+page.js",V,f,H,ue="src/modules/dummy/basic/helloworld.svelte",Y,$,L,me='Ahora, vamos a cambiar el fichero <code class="svelte-1awqwjz">dummy.js</code> por el siguiente contenido:',G,v,E,pe="Mucho mejor, ¿no? Ahora podemos crear páginas de una manera jerárquica con nuestros módulos e incluso añadirle un título que nos sirva como referencia dentro del propio módulo.",J,U,_,W,A,h,X,M,fe="Otros tipos de enlaces",Z,P,$e='Aparte del contenido <code class="svelte-1awqwjz">html</code> que habíamos comentado en la constante <code class="svelte-1awqwjz">levels</code>, hemos podido ver que también es posible vincular páginas e, incluso, hacer referencia a páginas dentro de un subnivel (una carpeta). No obstante, existe otro tipo de vínculo: el de vincular otro <code class="svelte-1awqwjz">módulo</code>.',ee,k,ve='Supongamos que tenemos otro módulo llamado <code class="svelte-1awqwjz">chuchu</code> y queremos enlazarlo en nuestro índice (es decir, dentro de la lista de niveles del módulo <code class="svelte-1awqwjz">dummy</code>). Bastaría con hacerlo de la siguiente manera:',te,w,I,_e='De esta forma, podemos segmentar un poco más nuestros contenidos y crear vínculos entre ellos. Un ejemplo de esto es el módulo de <code class="svelte-1awqwjz">Documentación</code> de este mismo curso. Si te das cuenta, en el índice existen varios enlaces de tipo <code class="svelte-1awqwjz">module</code>.',oe,O,he="¿Qué criterio debería seguir? ¿Pages o módulos?",le,B,we='Si bien se puede meter todo el contenido directamente en un fichero <code class="svelte-1awqwjz">.md</code> y utilizarlo como <code class="svelte-1awqwjz">pages</code>, no lo recomendaría, para no tener demasiado contenido en el fichero <code class="svelte-1awqwjz">Markdown</code> y poder modularizarlo. De esta forma, y según el criterio que yo he seguido,',ne,g,ge=`<li class="svelte-1awqwjz"><strong>Page</strong>: Para contenido lineal; por ejemplo, un curso donde tienes la lección 1, la lección 2, etc.</li> <li class="svelte-1awqwjz"><strong>Module</strong>: Para contenidos que, a su vez, tengan más subniveles. Por ejemplo, el contenido de &quot;<a href="${Le}/modules" class="link link-primary internal">módulos</a>&quot; es, en sí, un minicurso sobre cómo crear módulos manualmente. En este caso, prefiero crearlo aparte y enlazarlo por otra vía, como, por ejemplo, dentro del módulo <code class="svelte-1awqwjz">docs</code> como parte de su contenido. 😊</li>`,se,Q,b,ae;return f=new ce({props:{codeLang:"js",$$slots:{default:[Pe]},$$scope:{ctx:r}}}),$=new ce({props:{codeLang:"svelte",$$slots:{default:[ke]},$$scope:{ctx:r}}}),v=new ce({props:{codeLang:"js",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),_=new ie({props:{type:"TIP",$$slots:{default:[Oe]},$$scope:{ctx:r}}}),h=new ie({props:{type:"IMPORTANT",$$slots:{default:[Be]},$$scope:{ctx:r}}}),w=new Me({props:{icon:"js",route:"src,modules",name:"test.md",codeLang:"js",$$slots:{default:[Se]},$$scope:{ctx:r}}}),b=new ie({props:{type:"TIP",$$slots:{default:[De]},$$scope:{ctx:r}}}),{c(){t=c("p"),t.innerHTML=l,a=d(),p=c("h2"),p.textContent=K,R=d(),T=c("h3"),T.textContent=de,V=d(),q(f.$$.fragment),H=c("h3"),H.textContent=ue,Y=d(),q($.$$.fragment),L=c("p"),L.innerHTML=me,G=d(),q(v.$$.fragment),E=c("p"),E.textContent=pe,J=d(),U=c("blockquote"),q(_.$$.fragment),W=d(),A=c("blockquote"),q(h.$$.fragment),X=d(),M=c("h2"),M.textContent=fe,Z=d(),P=c("p"),P.innerHTML=$e,ee=d(),k=c("p"),k.innerHTML=ve,te=d(),q(w.$$.fragment),I=c("p"),I.innerHTML=_e,oe=d(),O=c("h3"),O.textContent=he,le=d(),B=c("p"),B.innerHTML=we,ne=d(),g=c("ul"),g.innerHTML=ge,se=d(),Q=c("blockquote"),q(b.$$.fragment),this.h()},l(e){t=i(e,"P",{"data-svelte-h":!0}),m(t)!=="svelte-rjd3tr"&&(t.innerHTML=l),a=u(e),p=i(e,"H2",{"data-svelte-h":!0}),m(p)!=="svelte-mfiw6w"&&(p.textContent=K),R=u(e),T=i(e,"H3",{"data-svelte-h":!0}),m(T)!=="svelte-z4ye04"&&(T.textContent=de),V=u(e),j(f.$$.fragment,e),H=i(e,"H3",{"data-svelte-h":!0}),m(H)!=="svelte-1eulzsa"&&(H.textContent=ue),Y=u(e),j($.$$.fragment,e),L=i(e,"P",{"data-svelte-h":!0}),m(L)!=="svelte-15gyghi"&&(L.innerHTML=me),G=u(e),j(v.$$.fragment,e),E=i(e,"P",{"data-svelte-h":!0}),m(E)!=="svelte-1hb0ej5"&&(E.textContent=pe),J=u(e),U=i(e,"BLOCKQUOTE",{});var o=re(U);j(_.$$.fragment,o),o.forEach(n),W=u(e),A=i(e,"BLOCKQUOTE",{});var F=re(A);j(h.$$.fragment,F),F.forEach(n),X=u(e),M=i(e,"H2",{"data-svelte-h":!0}),m(M)!=="svelte-esihce"&&(M.textContent=fe),Z=u(e),P=i(e,"P",{"data-svelte-h":!0}),m(P)!=="svelte-106nw8m"&&(P.innerHTML=$e),ee=u(e),k=i(e,"P",{"data-svelte-h":!0}),m(k)!=="svelte-mm8gi8"&&(k.innerHTML=ve),te=u(e),j(w.$$.fragment,e),I=i(e,"P",{"data-svelte-h":!0}),m(I)!=="svelte-vqvpcg"&&(I.innerHTML=_e),oe=u(e),O=i(e,"H3",{"data-svelte-h":!0}),m(O)!=="svelte-13ltbod"&&(O.textContent=he),le=u(e),B=i(e,"P",{"data-svelte-h":!0}),m(B)!=="svelte-196r1mg"&&(B.innerHTML=we),ne=u(e),g=i(e,"UL",{class:!0,"data-svelte-h":!0}),m(g)!=="svelte-1uvfiel"&&(g.innerHTML=ge),se=u(e),Q=i(e,"BLOCKQUOTE",{});var N=re(Q);j(b.$$.fragment,N),N.forEach(n),this.h()},h(){He(g,"class","svelte-1awqwjz")},m(e,o){s(e,t,o),s(e,a,o),s(e,p,o),s(e,R,o),s(e,T,o),s(e,V,o),x(f,e,o),s(e,H,o),s(e,Y,o),x($,e,o),s(e,L,o),s(e,G,o),x(v,e,o),s(e,E,o),s(e,J,o),s(e,U,o),x(_,U,null),s(e,W,o),s(e,A,o),x(h,A,null),s(e,X,o),s(e,M,o),s(e,Z,o),s(e,P,o),s(e,ee,o),s(e,k,o),s(e,te,o),x(w,e,o),s(e,I,o),s(e,oe,o),s(e,O,o),s(e,le,o),s(e,B,o),s(e,ne,o),s(e,g,o),s(e,se,o),s(e,Q,o),x(b,Q,null),ae=!0},p(e,o){const F={};o&1&&(F.$$scope={dirty:o,ctx:e}),f.$set(F);const N={};o&1&&(N.$$scope={dirty:o,ctx:e}),$.$set(N);const be={};o&1&&(be.$$scope={dirty:o,ctx:e}),v.$set(be);const qe={};o&1&&(qe.$$scope={dirty:o,ctx:e}),_.$set(qe);const je={};o&1&&(je.$$scope={dirty:o,ctx:e}),h.$set(je);const xe={};o&1&&(xe.$$scope={dirty:o,ctx:e}),w.$set(xe);const Ce={};o&1&&(Ce.$$scope={dirty:o,ctx:e}),b.$set(Ce)},i(e){ae||(C(f.$$.fragment,e),C($.$$.fragment,e),C(v.$$.fragment,e),C(_.$$.fragment,e),C(h.$$.fragment,e),C(w.$$.fragment,e),C(b.$$.fragment,e),ae=!0)},o(e){z(f.$$.fragment,e),z($.$$.fragment,e),z(v.$$.fragment,e),z(_.$$.fragment,e),z(h.$$.fragment,e),z(w.$$.fragment,e),z(b.$$.fragment,e),ae=!1},d(e){e&&(n(t),n(a),n(p),n(R),n(T),n(V),n(H),n(Y),n(L),n(G),n(E),n(J),n(U),n(W),n(A),n(X),n(M),n(Z),n(P),n(ee),n(k),n(te),n(I),n(oe),n(O),n(le),n(B),n(ne),n(g),n(se),n(Q)),y(f,e),y($,e),y(v,e),y(_),y(h),y(w,e),y(b)}}}function Ae(r){let t,l;return t=new Ee({props:{$$slots:{default:[Ue]},$$scope:{ctx:r}}}),{c(){q(t.$$.fragment)},l(a){j(t.$$.fragment,a)},m(a,p){x(t,a,p),l=!0},p(a,[p]){const K={};p&1&&(K.$$scope={dirty:p,ctx:a}),t.$set(K)},i(a){l||(C(t.$$.fragment,a),l=!0)},o(a){z(t.$$.fragment,a),l=!1},d(a){y(t,a)}}}class Ge extends ye{constructor(t){super(),Te(this,t,null,Ae,ze,{})}}export{Ge as default};
