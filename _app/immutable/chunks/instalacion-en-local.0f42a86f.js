import{s as st}from"./scheduler.38f5b73a.js";import{S as lt,i as rt,r as m,u as f,v as $,d as v,t as g,w as h,g as i,s as d,h as c,x as u,c as p,j as Ee,f as o,k as it,a as s,m as _,n as w}from"./index.33e8e8ec.js";import{C as X}from"./Code.7e3a14be.js";import{M as Me}from"./Message.3e138e3b.js";import{M as dt}from"./ModalImage.d84ad5a6.js";import{P as ct}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import"./paths.e092a00d.js";function pt(r){let n;return{c(){n=_("Se asume que para la instalación local (a diferencia de la remota) se presuponen ciertos conocimientos sobre cómo manejar una terminal, clonar un repositorio, etc.")},l(a){n=w(a,"Se asume que para la instalación local (a diferencia de la remota) se presuponen ciertos conocimientos sobre cómo manejar una terminal, clonar un repositorio, etc.")},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function ut(r){let n;return{c(){n=_(`git clone git@github.com:moiseslodeiro/codiquest.git
`)},l(a){n=w(a,`git clone git@github.com:moiseslodeiro/codiquest.git
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function mt(r){let n;return{c(){n=_(`cd codiquest
npm install
`)},l(a){n=w(a,`cd codiquest
npm install
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function ft(r){let n;return{c(){n=_(`codi@local:~/Workspaces/codiquest$ npm install
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated domexception@4.0.0: Use your platform's native DOMException instead
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 497 packages, and audited 498 packages in 17s

103 packages are looking for funding
  run \`npm fund\` for details

11 vulnerabilities (3 low, 8 moderate)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run \`npm audit\` for details.
`)},l(a){n=w(a,`codi@local:~/Workspaces/codiquest$ npm install
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated domexception@4.0.0: Use your platform's native DOMException instead
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 497 packages, and audited 498 packages in 17s

103 packages are looking for funding
  run \`npm fund\` for details

11 vulnerabilities (3 low, 8 moderate)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run \`npm audit\` for details.
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function $t(r){let n;return{c(){n=_("Sí, aparecen 11 vulnerabilidades (3 de bajo impacto y 8 moderadas), pero no afectan a los despliegues de producción, solo a los entornos de desarrollo, por lo que no deberías preocuparte. Más información en el apartado auditoría de seguridad del README.md.")},l(a){n=w(a,"Sí, aparecen 11 vulnerabilidades (3 de bajo impacto y 8 moderadas), pero no afectan a los despliegues de producción, solo a los entornos de desarrollo, por lo que no deberías preocuparte. Más información en el apartado auditoría de seguridad del README.md.")},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function vt(r){let n;return{c(){n=_(`npm run dev
`)},l(a){n=w(a,`npm run dev
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function gt(r){let n;return{c(){n=_(`codi@local:~/Workspaces/codiquest$ npm run dev

> codiquest@2.1.0 dev
> concurrently 'npm run watch:md' 'vite dev'

[0]
[0] > codiquest@2.1.0 watch:md
[0] > chokidar 'docs/**/*.md' -c 'node tools/module.js {path}'
[0]
[0] Watching "docs/**/*.md" ..
[1] [i] NODE_ENV development
[1]
[1]
[1]   VITE v4.5.14  ready in 913 ms
[1]
[1]   ➜  Local:   http://localhost:5173/
[1]   ➜  Network: use --host to expose
[1]
[1] 🌼   daisyUI 4.12.24
[1] ├─ ✔︎ 4 themes added         https://daisyui.com/docs/themes
[1] ╰─ ❤︎ Support daisyUI project:       https://opencollective.com/daisyui

(...)
`)},l(a){n=w(a,`codi@local:~/Workspaces/codiquest$ npm run dev

> codiquest@2.1.0 dev
> concurrently 'npm run watch:md' 'vite dev'

[0]
[0] > codiquest@2.1.0 watch:md
[0] > chokidar 'docs/**/*.md' -c 'node tools/module.js {path}'
[0]
[0] Watching "docs/**/*.md" ..
[1] [i] NODE_ENV development
[1]
[1]
[1]   VITE v4.5.14  ready in 913 ms
[1]
[1]   ➜  Local:   http://localhost:5173/
[1]   ➜  Network: use --host to expose
[1]
[1] 🌼   daisyUI 4.12.24
[1] ├─ ✔︎ 4 themes added         https://daisyui.com/docs/themes
[1] ╰─ ❤︎ Support daisyUI project:       https://opencollective.com/daisyui

(...)
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function ht(r){let n;return{c(){n=_(`npm run build
`)},l(a){n=w(a,`npm run build
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function bt(r){let n;return{c(){n=_(`npm run preview
`)},l(a){n=w(a,`npm run preview
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function _t(r){let n;return{c(){n=_("Por defecto, el servidor (a diferencia de `npm run dev`, que se ejecutaba en el puerto 5173) se ejecutará en el puerto **4173** y, posiblemente, en una ruta `/codiquest`.")},l(a){n=w(a,"Por defecto, el servidor (a diferencia de `npm run dev`, que se ejecutaba en el puerto 5173) se ejecutará en el puerto **4173** y, posiblemente, en una ruta `/codiquest`.")},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function wt(r){let n;return{c(){n=_("Cualquier cambio que ahora hagas a nivel de código NO se mostrará automáticamente en esta previsualización, ya que necesita volver a compilarse con `npm run build`.")},l(a){n=w(a,"Cualquier cambio que ahora hagas a nivel de código NO se mostrará automáticamente en esta previsualización, ya que necesita volver a compilarse con `npm run build`.")},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function qt(r){let n,a="En esta parte de la documentación, veremos los requisitos para poder montar Codiquest en local.",l,b,ae="Prerequisitos",re,q,Pe='<li class="svelte-1awqwjz">Un sistema operativo compatible con Node (prácticamente todos).</li> <li class="svelte-1awqwjz">Git instalado.</li> <li class="svelte-1awqwjz">Un editor de código como VSCode (no es imprescindible, pero sí recomendable).</li> <li class="svelte-1awqwjz">Versión de Node recomendada: 22+ (probado en la 22.12.0).<ul class="svelte-1awqwjz"><li class="svelte-1awqwjz">Recomiendo visitar <a href="https://lenguajejs.com/npm/introduccion/instalacion-node-con-nvm/" class="link link-primary manz" target="_blank" rel="noopener noreferrer">este enlace</a> de lenguajejs.com como guía para instalar node.</li></ul></li>',ie,Z,C,de,H,He="Clonando el repositorio",ce,U,Ue='Abre una terminal y clona el <a href="https://github.com/moiseslodeiro/codiquest" class="link link-primary github" target="_blank" rel="noopener noreferrer">repositorio</a> en su rama principal, <strong>main</strong>:',pe,x,O,Oe="Instalando las dependencias",ue,N,Ne="Una vez clonado el repositorio, vamos a proceder a la instalación de las dependencias. Para ello, abre una terminal en la carpeta del repositorio e instala las dependencias con el siguiente comando:",me,k,R,Re="Si todo ha ido bien, deberías ver algo así:",fe,j,ee,y,$e,S,Se="Ejecutando Codiquest en local",ve,I,Ie='Ya debería estar todo listo, ¿verdad? Solo nos queda ejecutar el siguiente comando dentro de nuestra carpeta <code class="svelte-1awqwjz">codiquest</code> para ver nuestra plataforma de aprendizaje y enseñanza favorita (a partir de ahora). 😍',ge,T,D,De="Esto debería arrojar una salida de comando similar a esta:",he,L,V,Ve='Finalmente, si accedemos a la URL que nos indica (por defecto, <code class="svelte-1awqwjz">http://localhost:5173</code>), deberíamos ver algo así:',be,A,_e,W,Ae="Compilando",we,G,We="Una de las características de Codiquest es que, realmente, todo se ejecuta en el <em>frontend</em> (es decir, en tu navegador), por lo que no hace falta disponer de un <em>backend</em> para almacenar la información, ya que esta es estática.",qe,B,Ge="Para convertir el contenido que tenemos (en formato de desarrollo) a un formato más compacto y óptimo, debemos ejecutar lo siguiente:",Ce,z,K,Be='Este comando compilará nuestro contenido y generará una carpeta llamada <code class="svelte-1awqwjz">build</code> con todo el contenido <strong>estático</strong>. Es decir, dentro de la carpeta <code class="svelte-1awqwjz">build</code> no veremos módulos ni nada del código que hemos agregado o que agregaremos en un futuro. No obstante, que no veamos ese código significa que todo ha ido a la perfección y que podremos publicar el contenido estático como si lo hubiéramos maquetado a mano 😊.',xe,Q,Ke="Previsualización",ke,Y,Qe='¡Oye! Pero, ¿y cómo sé si mi página se ve como debe? Lo único que debes hacer es ejecutar el siguiente comando, similar al que vimos de <code class="svelte-1awqwjz">npm run dev</code>, pero con la salvedad de que, esta vez, el servidor se va a montar sobre la carpeta <code class="svelte-1awqwjz">build</code> para mostrar tus archivos estáticos.',je,E,te,M,ye,ne,P,Te,F,Ye="¿Y Ahora?",Le,J,Fe='Vamos a darle un vistazo a los módulos (vamos a la <code class="svelte-1awqwjz">Siguiente lección</code>). 🥳',ze;return C=new Me({props:{type:"NOTE",$$slots:{default:[pt]},$$scope:{ctx:r}}}),x=new X({props:{codeLang:"bash",$$slots:{default:[ut]},$$scope:{ctx:r}}}),k=new X({props:{codeLang:"bash",$$slots:{default:[mt]},$$scope:{ctx:r}}}),j=new X({props:{codeLang:"bash",$$slots:{default:[ft]},$$scope:{ctx:r}}}),y=new Me({props:{type:"IMPORTANT",$$slots:{default:[$t]},$$scope:{ctx:r}}}),T=new X({props:{codeLang:"bash",$$slots:{default:[vt]},$$scope:{ctx:r}}}),L=new X({props:{codeLang:"bash",$$slots:{default:[gt]},$$scope:{ctx:r}}}),A=new dt({props:{src:"img/install/03.png",alignment:"center",width:"w-1/2",alt:"Previsualización de la instalación de Codiquest",modal:"false"}}),z=new X({props:{codeLang:"bash",$$slots:{default:[ht]},$$scope:{ctx:r}}}),E=new X({props:{codeLang:"bash",$$slots:{default:[bt]},$$scope:{ctx:r}}}),M=new Me({props:{type:"NOTE",$$slots:{default:[_t]},$$scope:{ctx:r}}}),P=new Me({props:{type:"IMPORTANT",$$slots:{default:[wt]},$$scope:{ctx:r}}}),{c(){n=i("p"),n.textContent=a,l=d(),b=i("h2"),b.textContent=ae,re=d(),q=i("ul"),q.innerHTML=Pe,ie=d(),Z=i("blockquote"),m(C.$$.fragment),de=d(),H=i("h2"),H.textContent=He,ce=d(),U=i("p"),U.innerHTML=Ue,pe=d(),m(x.$$.fragment),O=i("h2"),O.textContent=Oe,ue=d(),N=i("p"),N.textContent=Ne,me=d(),m(k.$$.fragment),R=i("p"),R.textContent=Re,fe=d(),m(j.$$.fragment),ee=i("blockquote"),m(y.$$.fragment),$e=d(),S=i("h2"),S.textContent=Se,ve=d(),I=i("p"),I.innerHTML=Ie,ge=d(),m(T.$$.fragment),D=i("p"),D.textContent=De,he=d(),m(L.$$.fragment),V=i("p"),V.innerHTML=Ve,be=d(),m(A.$$.fragment),_e=d(),W=i("h2"),W.textContent=Ae,we=d(),G=i("p"),G.innerHTML=We,qe=d(),B=i("p"),B.textContent=Ge,Ce=d(),m(z.$$.fragment),K=i("p"),K.innerHTML=Be,xe=d(),Q=i("h3"),Q.textContent=Ke,ke=d(),Y=i("p"),Y.innerHTML=Qe,je=d(),m(E.$$.fragment),te=i("blockquote"),m(M.$$.fragment),ye=d(),ne=i("blockquote"),m(P.$$.fragment),Te=d(),F=i("h2"),F.textContent=Ye,Le=d(),J=i("p"),J.innerHTML=Fe,this.h()},l(e){n=c(e,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1b1ytc8"&&(n.textContent=a),l=p(e),b=c(e,"H2",{"data-svelte-h":!0}),u(b)!=="svelte-1vswz91"&&(b.textContent=ae),re=p(e),q=c(e,"UL",{class:!0,"data-svelte-h":!0}),u(q)!=="svelte-1d8ru9d"&&(q.innerHTML=Pe),ie=p(e),Z=c(e,"BLOCKQUOTE",{});var t=Ee(Z);f(C.$$.fragment,t),t.forEach(o),de=p(e),H=c(e,"H2",{"data-svelte-h":!0}),u(H)!=="svelte-10tz2cy"&&(H.textContent=He),ce=p(e),U=c(e,"P",{"data-svelte-h":!0}),u(U)!=="svelte-715h57"&&(U.innerHTML=Ue),pe=p(e),f(x.$$.fragment,e),O=c(e,"H2",{"data-svelte-h":!0}),u(O)!=="svelte-14eubrq"&&(O.textContent=Oe),ue=p(e),N=c(e,"P",{"data-svelte-h":!0}),u(N)!=="svelte-1ymzrps"&&(N.textContent=Ne),me=p(e),f(k.$$.fragment,e),R=c(e,"P",{"data-svelte-h":!0}),u(R)!=="svelte-ocha41"&&(R.textContent=Re),fe=p(e),f(j.$$.fragment,e),ee=c(e,"BLOCKQUOTE",{});var oe=Ee(ee);f(y.$$.fragment,oe),oe.forEach(o),$e=p(e),S=c(e,"H2",{"data-svelte-h":!0}),u(S)!=="svelte-4p7qh3"&&(S.textContent=Se),ve=p(e),I=c(e,"P",{"data-svelte-h":!0}),u(I)!=="svelte-1gmnp5v"&&(I.innerHTML=Ie),ge=p(e),f(T.$$.fragment,e),D=c(e,"P",{"data-svelte-h":!0}),u(D)!=="svelte-f5bhkv"&&(D.textContent=De),he=p(e),f(L.$$.fragment,e),V=c(e,"P",{"data-svelte-h":!0}),u(V)!=="svelte-8ee4oh"&&(V.innerHTML=Ve),be=p(e),f(A.$$.fragment,e),_e=p(e),W=c(e,"H2",{"data-svelte-h":!0}),u(W)!=="svelte-te6wj2"&&(W.textContent=Ae),we=p(e),G=c(e,"P",{"data-svelte-h":!0}),u(G)!=="svelte-tcnlw3"&&(G.innerHTML=We),qe=p(e),B=c(e,"P",{"data-svelte-h":!0}),u(B)!=="svelte-161zfe2"&&(B.textContent=Ge),Ce=p(e),f(z.$$.fragment,e),K=c(e,"P",{"data-svelte-h":!0}),u(K)!=="svelte-1ywb0m"&&(K.innerHTML=Be),xe=p(e),Q=c(e,"H3",{"data-svelte-h":!0}),u(Q)!=="svelte-636y80"&&(Q.textContent=Ke),ke=p(e),Y=c(e,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-1nxzd7c"&&(Y.innerHTML=Qe),je=p(e),f(E.$$.fragment,e),te=c(e,"BLOCKQUOTE",{});var se=Ee(te);f(M.$$.fragment,se),se.forEach(o),ye=p(e),ne=c(e,"BLOCKQUOTE",{});var le=Ee(ne);f(P.$$.fragment,le),le.forEach(o),Te=p(e),F=c(e,"H2",{"data-svelte-h":!0}),u(F)!=="svelte-9thlce"&&(F.textContent=Ye),Le=p(e),J=c(e,"P",{"data-svelte-h":!0}),u(J)!=="svelte-13gqbtr"&&(J.innerHTML=Fe),this.h()},h(){it(q,"class","svelte-1awqwjz")},m(e,t){s(e,n,t),s(e,l,t),s(e,b,t),s(e,re,t),s(e,q,t),s(e,ie,t),s(e,Z,t),$(C,Z,null),s(e,de,t),s(e,H,t),s(e,ce,t),s(e,U,t),s(e,pe,t),$(x,e,t),s(e,O,t),s(e,ue,t),s(e,N,t),s(e,me,t),$(k,e,t),s(e,R,t),s(e,fe,t),$(j,e,t),s(e,ee,t),$(y,ee,null),s(e,$e,t),s(e,S,t),s(e,ve,t),s(e,I,t),s(e,ge,t),$(T,e,t),s(e,D,t),s(e,he,t),$(L,e,t),s(e,V,t),s(e,be,t),$(A,e,t),s(e,_e,t),s(e,W,t),s(e,we,t),s(e,G,t),s(e,qe,t),s(e,B,t),s(e,Ce,t),$(z,e,t),s(e,K,t),s(e,xe,t),s(e,Q,t),s(e,ke,t),s(e,Y,t),s(e,je,t),$(E,e,t),s(e,te,t),$(M,te,null),s(e,ye,t),s(e,ne,t),$(P,ne,null),s(e,Te,t),s(e,F,t),s(e,Le,t),s(e,J,t),ze=!0},p(e,t){const oe={};t&1&&(oe.$$scope={dirty:t,ctx:e}),C.$set(oe);const se={};t&1&&(se.$$scope={dirty:t,ctx:e}),x.$set(se);const le={};t&1&&(le.$$scope={dirty:t,ctx:e}),k.$set(le);const Je={};t&1&&(Je.$$scope={dirty:t,ctx:e}),j.$set(Je);const Xe={};t&1&&(Xe.$$scope={dirty:t,ctx:e}),y.$set(Xe);const Ze={};t&1&&(Ze.$$scope={dirty:t,ctx:e}),T.$set(Ze);const et={};t&1&&(et.$$scope={dirty:t,ctx:e}),L.$set(et);const tt={};t&1&&(tt.$$scope={dirty:t,ctx:e}),z.$set(tt);const nt={};t&1&&(nt.$$scope={dirty:t,ctx:e}),E.$set(nt);const at={};t&1&&(at.$$scope={dirty:t,ctx:e}),M.$set(at);const ot={};t&1&&(ot.$$scope={dirty:t,ctx:e}),P.$set(ot)},i(e){ze||(v(C.$$.fragment,e),v(x.$$.fragment,e),v(k.$$.fragment,e),v(j.$$.fragment,e),v(y.$$.fragment,e),v(T.$$.fragment,e),v(L.$$.fragment,e),v(A.$$.fragment,e),v(z.$$.fragment,e),v(E.$$.fragment,e),v(M.$$.fragment,e),v(P.$$.fragment,e),ze=!0)},o(e){g(C.$$.fragment,e),g(x.$$.fragment,e),g(k.$$.fragment,e),g(j.$$.fragment,e),g(y.$$.fragment,e),g(T.$$.fragment,e),g(L.$$.fragment,e),g(A.$$.fragment,e),g(z.$$.fragment,e),g(E.$$.fragment,e),g(M.$$.fragment,e),g(P.$$.fragment,e),ze=!1},d(e){e&&(o(n),o(l),o(b),o(re),o(q),o(ie),o(Z),o(de),o(H),o(ce),o(U),o(pe),o(O),o(ue),o(N),o(me),o(R),o(fe),o(ee),o($e),o(S),o(ve),o(I),o(ge),o(D),o(he),o(V),o(be),o(_e),o(W),o(we),o(G),o(qe),o(B),o(Ce),o(K),o(xe),o(Q),o(ke),o(Y),o(je),o(te),o(ye),o(ne),o(Te),o(F),o(Le),o(J)),h(C),h(x,e),h(k,e),h(j,e),h(y),h(T,e),h(L,e),h(A,e),h(z,e),h(E,e),h(M),h(P)}}}function Ct(r){let n,a;return n=new ct({props:{$$slots:{default:[qt]},$$scope:{ctx:r}}}),{c(){m(n.$$.fragment)},l(l){f(n.$$.fragment,l)},m(l,b){$(n,l,b),a=!0},p(l,[b]){const ae={};b&1&&(ae.$$scope={dirty:b,ctx:l}),n.$set(ae)},i(l){a||(v(n.$$.fragment,l),a=!0)},o(l){g(n.$$.fragment,l),a=!1},d(l){h(n,l)}}}class Et extends lt{constructor(n){super(),rt(this,n,null,Ct,st,{})}}export{Et as default};
