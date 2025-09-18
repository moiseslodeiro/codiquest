import{s as lt}from"./scheduler.38f5b73a.js";import{S as ot,i as it,r as m,u as v,v as f,d as $,t as b,w as g,g as r,s as c,h as p,x as u,c as d,j as Te,f as s,k as rt,a as l,m as h,n as q}from"./index.33e8e8ec.js";import{C as X}from"./Code.2fe2a1f6.js";import{M as He}from"./Message.34a2efb6.js";import{M as ct}from"./ModalImage.664be71b.js";import{P as pt}from"./File.svelte_svelte_type_style_lang.9085771d.js";import"./paths.3b9e6dc4.js";function dt(i){let n;return{c(){n=h("Se asume que para la instalación local (a diferencia de la remota) se presuponen ciertos conocimientos sobre cómo manejar una terminal, clonar un repositorio, etc.")},l(a){n=q(a,"Se asume que para la instalación local (a diferencia de la remota) se presuponen ciertos conocimientos sobre cómo manejar una terminal, clonar un repositorio, etc.")},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function ut(i){let n;return{c(){n=h(`git clone git@github.com:moiseslodeiro/codiquest.git
`)},l(a){n=q(a,`git clone git@github.com:moiseslodeiro/codiquest.git
`)},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function mt(i){let n;return{c(){n=h(`cd codiquest
npm install -g pnpm
pnpm install
`)},l(a){n=q(a,`cd codiquest
npm install -g pnpm
pnpm install
`)},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function vt(i){let n;return{c(){n=h(`codi@local:~/Workspaces/codiquest$ pnpm install
 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
 WARN  8 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, abab@2.0.6, domexception@4.0.0, glob@7.2.3, inflight@1.0.6, rimraf@2.7.1, rimraf@3.0.2
Packages: +473
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 536, reused 473, downloaded 0, added 473, done

dependencies:
+ @rollup/plugin-dynamic-import-vars 2.1.5
+ gh-pages 6.3.0
+ marked 12.0.2 (16.3.0 is available)
+ sanitize-html 2.17.0

devDependencies:
+ @sveltejs/adapter-auto 2.1.1 (6.1.0 is available)
+ @sveltejs/adapter-static 2.0.3 (3.0.9 is available)
+ @sveltejs/kit 1.30.4 (2.42.1 is available)
+ @tailwindcss/typography 0.5.16
+ @testing-library/svelte 5.2.8
+ autoprefixer 10.4.21
+ chokidar-cli 3.0.0
+ concurrently 9.2.1
+ daisyui 4.12.24 (5.1.13 is available)
+ eslint 8.57.1 (9.35.0 is available) deprecated
+ eslint-config-prettier 9.1.2 (10.1.8 is available)
+ eslint-plugin-svelte 2.46.1 (3.12.3 is available)
+ glob 10.4.5 (11.0.3 is available)
+ jsdom 22.1.0 (27.0.0 is available)
+ postcss 8.5.6
+ preline 2.7.0 (3.2.3 is available)
+ prettier 3.6.2
+ prettier-plugin-svelte 3.4.0
+ svelte 4.2.20 (5.39.2 is available)
+ svelte-preprocess 5.1.4 (6.0.3 is available)
+ tailwindcss 3.4.17 (4.1.13 is available)
+ vite 4.5.14 (7.1.6 is available)
+ vitest 1.6.1 (3.2.4 is available)

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @sveltejs/kit, esbuild, svelte-preprocess.                        │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 3.9s using pnpm v10.17.0
`)},l(a){n=q(a,`codi@local:~/Workspaces/codiquest$ pnpm install
 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
 WARN  8 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, abab@2.0.6, domexception@4.0.0, glob@7.2.3, inflight@1.0.6, rimraf@2.7.1, rimraf@3.0.2
Packages: +473
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 536, reused 473, downloaded 0, added 473, done

dependencies:
+ @rollup/plugin-dynamic-import-vars 2.1.5
+ gh-pages 6.3.0
+ marked 12.0.2 (16.3.0 is available)
+ sanitize-html 2.17.0

devDependencies:
+ @sveltejs/adapter-auto 2.1.1 (6.1.0 is available)
+ @sveltejs/adapter-static 2.0.3 (3.0.9 is available)
+ @sveltejs/kit 1.30.4 (2.42.1 is available)
+ @tailwindcss/typography 0.5.16
+ @testing-library/svelte 5.2.8
+ autoprefixer 10.4.21
+ chokidar-cli 3.0.0
+ concurrently 9.2.1
+ daisyui 4.12.24 (5.1.13 is available)
+ eslint 8.57.1 (9.35.0 is available) deprecated
+ eslint-config-prettier 9.1.2 (10.1.8 is available)
+ eslint-plugin-svelte 2.46.1 (3.12.3 is available)
+ glob 10.4.5 (11.0.3 is available)
+ jsdom 22.1.0 (27.0.0 is available)
+ postcss 8.5.6
+ preline 2.7.0 (3.2.3 is available)
+ prettier 3.6.2
+ prettier-plugin-svelte 3.4.0
+ svelte 4.2.20 (5.39.2 is available)
+ svelte-preprocess 5.1.4 (6.0.3 is available)
+ tailwindcss 3.4.17 (4.1.13 is available)
+ vite 4.5.14 (7.1.6 is available)
+ vitest 1.6.1 (3.2.4 is available)

╭ Warning ───────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│   Ignored build scripts: @sveltejs/kit, esbuild, svelte-preprocess.                        │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.   │
│                                                                                            │
╰────────────────────────────────────────────────────────────────────────────────────────────╯

Done in 3.9s using pnpm v10.17.0
`)},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function ft(i){let n;return{c(){n=h("Si hacemos un pnpm audit podremos ver que existen 8 vulnerabilidades. No obstante estas no afectan al entorno final de producción")},l(a){n=q(a,"Si hacemos un pnpm audit podremos ver que existen 8 vulnerabilidades. No obstante estas no afectan al entorno final de producción")},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function $t(i){let n;return{c(){n=h(`pnpm run dev
`)},l(a){n=q(a,`pnpm run dev
`)},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function bt(i){let n;return{c(){n=h(`codi@local:~/Workspaces/codiquest$ pnpm run dev

> codiquest@2.1.0 dev
> concurrently 'pnpm run watch:md' 'vite dev'

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
`)},l(a){n=q(a,`codi@local:~/Workspaces/codiquest$ pnpm run dev

> codiquest@2.1.0 dev
> concurrently 'pnpm run watch:md' 'vite dev'

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
`)},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function gt(i){let n;return{c(){n=h(`pnpm run build
`)},l(a){n=q(a,`pnpm run build
`)},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function _t(i){let n;return{c(){n=h(`pnpm run preview
`)},l(a){n=q(a,`pnpm run preview
`)},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function ht(i){let n;return{c(){n=h("Por defecto, el servidor (a diferencia de `pnpm  run dev`, que se ejecutaba en el puerto 5173) se ejecutará en el puerto **4173** y, posiblemente, en una ruta `/codiquest`.")},l(a){n=q(a,"Por defecto, el servidor (a diferencia de `pnpm  run dev`, que se ejecutaba en el puerto 5173) se ejecutará en el puerto **4173** y, posiblemente, en una ruta `/codiquest`.")},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function qt(i){let n;return{c(){n=h("Cualquier cambio que ahora hagas a nivel de código NO se mostrará automáticamente en esta previsualización, ya que necesita volver a compilarse con `pnpm  run build`.")},l(a){n=q(a,"Cualquier cambio que ahora hagas a nivel de código NO se mostrará automáticamente en esta previsualización, ya que necesita volver a compilarse con `pnpm  run build`.")},m(a,o){l(a,n,o)},d(a){a&&s(n)}}}function wt(i){let n,a="En esta parte de la documentación, veremos los requisitos para poder montar Codiquest en local.",o,_,ae="Prerequisitos",ie,w,Ee='<li class="svelte-1awqwjz">Un sistema operativo compatible con Node (prácticamente todos).</li> <li class="svelte-1awqwjz">Git instalado.</li> <li class="svelte-1awqwjz">Un editor de código como VSCode (no es imprescindible, pero sí recomendable).</li> <li class="svelte-1awqwjz">Versión de Node recomendada: 22+ (probado en la 22.12.0).<ul class="svelte-1awqwjz"><li class="svelte-1awqwjz">Recomiendo visitar <a href="https://lenguajejs.com/npm/introduccion/instalacion-node-con-nvm/" class="link link-primary manz" target="_blank" rel="noopener noreferrer">este enlace</a> de lenguajejs.com como guía para instalar node.</li></ul></li>',re,Z,C,ce,M,Me="Clonando el repositorio",pe,N,Ne='Abre una terminal y clona el <a href="https://github.com/moiseslodeiro/codiquest" class="link link-primary github" target="_blank" rel="noopener noreferrer">repositorio</a> en su rama principal, <strong>main</strong>:',de,j,O,Oe="Instalando las dependencias",ue,U,Ue="Una vez clonado el repositorio, vamos a proceder a la instalación de las dependencias. Para ello, abre una terminal en la carpeta del repositorio e instala las dependencias con el siguiente comando:",me,x,I,Ie="Si todo ha ido bien, deberías ver algo así:",ve,k,ee,L,fe,S,Se="Ejecutando Codiquest en local",$e,W,We='Ya debería estar todo listo, ¿verdad? Solo nos queda ejecutar el siguiente comando dentro de nuestra carpeta <code class="svelte-1awqwjz">codiquest</code> para ver nuestra plataforma de aprendizaje y enseñanza favorita (a partir de ahora). 😍',be,y,R,Re="Esto debería arrojar una salida de comando similar a esta:",ge,z,A,Ae='Finalmente, si accedemos a la URL que nos indica (por defecto, <code class="svelte-1awqwjz">http://localhost:5173</code>), deberíamos ver algo así:',_e,V,he,D,Ve="Compilando",qe,B,De="Una de las características de Codiquest es que, realmente, todo se ejecuta en el <em>frontend</em> (es decir, en tu navegador), por lo que no hace falta disponer de un <em>backend</em> para almacenar la información, ya que esta es estática.",we,K,Be="Para convertir el contenido que tenemos (en formato de desarrollo) a un formato más compacto y óptimo, debemos ejecutar lo siguiente:",Ce,P,Q,Ke='Este comando compilará nuestro contenido y generará una carpeta llamada <code class="svelte-1awqwjz">build</code> con todo el contenido <strong>estático</strong>. Es decir, dentro de la carpeta <code class="svelte-1awqwjz">build</code> no veremos módulos ni nada del código que hemos agregado o que agregaremos en un futuro. No obstante, que no veamos ese código significa que todo ha ido a la perfección y que podremos publicar el contenido estático como si lo hubiéramos maquetado a mano 😊.',je,Y,Qe="Previsualización",xe,F,Ye='¡Oye! Pero, ¿y cómo sé si mi página se ve como debe? Lo único que debes hacer es ejecutar el siguiente comando, similar al que vimos de <code class="svelte-1awqwjz">pnpm  run dev</code>, pero con la salvedad de que, esta vez, el servidor se va a montar sobre la carpeta <code class="svelte-1awqwjz">build</code> para mostrar tus archivos estáticos.',ke,T,te,H,Le,ne,E,ye,G,Fe="¿Y Ahora?",ze,J,Ge='Vamos a darle un vistazo a los módulos (vamos a la <code class="svelte-1awqwjz">Siguiente lección</code>). 🥳',Pe;return C=new He({props:{type:"NOTE",$$slots:{default:[dt]},$$scope:{ctx:i}}}),j=new X({props:{codeLang:"bash",$$slots:{default:[ut]},$$scope:{ctx:i}}}),x=new X({props:{codeLang:"bash",$$slots:{default:[mt]},$$scope:{ctx:i}}}),k=new X({props:{codeLang:"bash",$$slots:{default:[vt]},$$scope:{ctx:i}}}),L=new He({props:{type:"IMPORTANT",$$slots:{default:[ft]},$$scope:{ctx:i}}}),y=new X({props:{codeLang:"bash",$$slots:{default:[$t]},$$scope:{ctx:i}}}),z=new X({props:{codeLang:"bash",$$slots:{default:[bt]},$$scope:{ctx:i}}}),V=new ct({props:{src:"img/install/03.png",alignment:"center",width:"w-1/2",alt:"Previsualización de la instalación de Codiquest",modal:"false"}}),P=new X({props:{codeLang:"bash",$$slots:{default:[gt]},$$scope:{ctx:i}}}),T=new X({props:{codeLang:"bash",$$slots:{default:[_t]},$$scope:{ctx:i}}}),H=new He({props:{type:"NOTE",$$slots:{default:[ht]},$$scope:{ctx:i}}}),E=new He({props:{type:"IMPORTANT",$$slots:{default:[qt]},$$scope:{ctx:i}}}),{c(){n=r("p"),n.textContent=a,o=c(),_=r("h2"),_.textContent=ae,ie=c(),w=r("ul"),w.innerHTML=Ee,re=c(),Z=r("blockquote"),m(C.$$.fragment),ce=c(),M=r("h2"),M.textContent=Me,pe=c(),N=r("p"),N.innerHTML=Ne,de=c(),m(j.$$.fragment),O=r("h2"),O.textContent=Oe,ue=c(),U=r("p"),U.textContent=Ue,me=c(),m(x.$$.fragment),I=r("p"),I.textContent=Ie,ve=c(),m(k.$$.fragment),ee=r("blockquote"),m(L.$$.fragment),fe=c(),S=r("h2"),S.textContent=Se,$e=c(),W=r("p"),W.innerHTML=We,be=c(),m(y.$$.fragment),R=r("p"),R.textContent=Re,ge=c(),m(z.$$.fragment),A=r("p"),A.innerHTML=Ae,_e=c(),m(V.$$.fragment),he=c(),D=r("h2"),D.textContent=Ve,qe=c(),B=r("p"),B.innerHTML=De,we=c(),K=r("p"),K.textContent=Be,Ce=c(),m(P.$$.fragment),Q=r("p"),Q.innerHTML=Ke,je=c(),Y=r("h3"),Y.textContent=Qe,xe=c(),F=r("p"),F.innerHTML=Ye,ke=c(),m(T.$$.fragment),te=r("blockquote"),m(H.$$.fragment),Le=c(),ne=r("blockquote"),m(E.$$.fragment),ye=c(),G=r("h2"),G.textContent=Fe,ze=c(),J=r("p"),J.innerHTML=Ge,this.h()},l(e){n=p(e,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1b1ytc8"&&(n.textContent=a),o=d(e),_=p(e,"H2",{"data-svelte-h":!0}),u(_)!=="svelte-1vswz91"&&(_.textContent=ae),ie=d(e),w=p(e,"UL",{class:!0,"data-svelte-h":!0}),u(w)!=="svelte-1d8ru9d"&&(w.innerHTML=Ee),re=d(e),Z=p(e,"BLOCKQUOTE",{});var t=Te(Z);v(C.$$.fragment,t),t.forEach(s),ce=d(e),M=p(e,"H2",{"data-svelte-h":!0}),u(M)!=="svelte-10tz2cy"&&(M.textContent=Me),pe=d(e),N=p(e,"P",{"data-svelte-h":!0}),u(N)!=="svelte-715h57"&&(N.innerHTML=Ne),de=d(e),v(j.$$.fragment,e),O=p(e,"H2",{"data-svelte-h":!0}),u(O)!=="svelte-14eubrq"&&(O.textContent=Oe),ue=d(e),U=p(e,"P",{"data-svelte-h":!0}),u(U)!=="svelte-1ymzrps"&&(U.textContent=Ue),me=d(e),v(x.$$.fragment,e),I=p(e,"P",{"data-svelte-h":!0}),u(I)!=="svelte-ocha41"&&(I.textContent=Ie),ve=d(e),v(k.$$.fragment,e),ee=p(e,"BLOCKQUOTE",{});var se=Te(ee);v(L.$$.fragment,se),se.forEach(s),fe=d(e),S=p(e,"H2",{"data-svelte-h":!0}),u(S)!=="svelte-4p7qh3"&&(S.textContent=Se),$e=d(e),W=p(e,"P",{"data-svelte-h":!0}),u(W)!=="svelte-1gmnp5v"&&(W.innerHTML=We),be=d(e),v(y.$$.fragment,e),R=p(e,"P",{"data-svelte-h":!0}),u(R)!=="svelte-f5bhkv"&&(R.textContent=Re),ge=d(e),v(z.$$.fragment,e),A=p(e,"P",{"data-svelte-h":!0}),u(A)!=="svelte-8ee4oh"&&(A.innerHTML=Ae),_e=d(e),v(V.$$.fragment,e),he=d(e),D=p(e,"H2",{"data-svelte-h":!0}),u(D)!=="svelte-te6wj2"&&(D.textContent=Ve),qe=d(e),B=p(e,"P",{"data-svelte-h":!0}),u(B)!=="svelte-tcnlw3"&&(B.innerHTML=De),we=d(e),K=p(e,"P",{"data-svelte-h":!0}),u(K)!=="svelte-161zfe2"&&(K.textContent=Be),Ce=d(e),v(P.$$.fragment,e),Q=p(e,"P",{"data-svelte-h":!0}),u(Q)!=="svelte-1ywb0m"&&(Q.innerHTML=Ke),je=d(e),Y=p(e,"H3",{"data-svelte-h":!0}),u(Y)!=="svelte-636y80"&&(Y.textContent=Qe),xe=d(e),F=p(e,"P",{"data-svelte-h":!0}),u(F)!=="svelte-8x1jx6"&&(F.innerHTML=Ye),ke=d(e),v(T.$$.fragment,e),te=p(e,"BLOCKQUOTE",{});var le=Te(te);v(H.$$.fragment,le),le.forEach(s),Le=d(e),ne=p(e,"BLOCKQUOTE",{});var oe=Te(ne);v(E.$$.fragment,oe),oe.forEach(s),ye=d(e),G=p(e,"H2",{"data-svelte-h":!0}),u(G)!=="svelte-9thlce"&&(G.textContent=Fe),ze=d(e),J=p(e,"P",{"data-svelte-h":!0}),u(J)!=="svelte-13gqbtr"&&(J.innerHTML=Ge),this.h()},h(){rt(w,"class","svelte-1awqwjz")},m(e,t){l(e,n,t),l(e,o,t),l(e,_,t),l(e,ie,t),l(e,w,t),l(e,re,t),l(e,Z,t),f(C,Z,null),l(e,ce,t),l(e,M,t),l(e,pe,t),l(e,N,t),l(e,de,t),f(j,e,t),l(e,O,t),l(e,ue,t),l(e,U,t),l(e,me,t),f(x,e,t),l(e,I,t),l(e,ve,t),f(k,e,t),l(e,ee,t),f(L,ee,null),l(e,fe,t),l(e,S,t),l(e,$e,t),l(e,W,t),l(e,be,t),f(y,e,t),l(e,R,t),l(e,ge,t),f(z,e,t),l(e,A,t),l(e,_e,t),f(V,e,t),l(e,he,t),l(e,D,t),l(e,qe,t),l(e,B,t),l(e,we,t),l(e,K,t),l(e,Ce,t),f(P,e,t),l(e,Q,t),l(e,je,t),l(e,Y,t),l(e,xe,t),l(e,F,t),l(e,ke,t),f(T,e,t),l(e,te,t),f(H,te,null),l(e,Le,t),l(e,ne,t),f(E,ne,null),l(e,ye,t),l(e,G,t),l(e,ze,t),l(e,J,t),Pe=!0},p(e,t){const se={};t&1&&(se.$$scope={dirty:t,ctx:e}),C.$set(se);const le={};t&1&&(le.$$scope={dirty:t,ctx:e}),j.$set(le);const oe={};t&1&&(oe.$$scope={dirty:t,ctx:e}),x.$set(oe);const Je={};t&1&&(Je.$$scope={dirty:t,ctx:e}),k.$set(Je);const Xe={};t&1&&(Xe.$$scope={dirty:t,ctx:e}),L.$set(Xe);const Ze={};t&1&&(Ze.$$scope={dirty:t,ctx:e}),y.$set(Ze);const et={};t&1&&(et.$$scope={dirty:t,ctx:e}),z.$set(et);const tt={};t&1&&(tt.$$scope={dirty:t,ctx:e}),P.$set(tt);const nt={};t&1&&(nt.$$scope={dirty:t,ctx:e}),T.$set(nt);const at={};t&1&&(at.$$scope={dirty:t,ctx:e}),H.$set(at);const st={};t&1&&(st.$$scope={dirty:t,ctx:e}),E.$set(st)},i(e){Pe||($(C.$$.fragment,e),$(j.$$.fragment,e),$(x.$$.fragment,e),$(k.$$.fragment,e),$(L.$$.fragment,e),$(y.$$.fragment,e),$(z.$$.fragment,e),$(V.$$.fragment,e),$(P.$$.fragment,e),$(T.$$.fragment,e),$(H.$$.fragment,e),$(E.$$.fragment,e),Pe=!0)},o(e){b(C.$$.fragment,e),b(j.$$.fragment,e),b(x.$$.fragment,e),b(k.$$.fragment,e),b(L.$$.fragment,e),b(y.$$.fragment,e),b(z.$$.fragment,e),b(V.$$.fragment,e),b(P.$$.fragment,e),b(T.$$.fragment,e),b(H.$$.fragment,e),b(E.$$.fragment,e),Pe=!1},d(e){e&&(s(n),s(o),s(_),s(ie),s(w),s(re),s(Z),s(ce),s(M),s(pe),s(N),s(de),s(O),s(ue),s(U),s(me),s(I),s(ve),s(ee),s(fe),s(S),s($e),s(W),s(be),s(R),s(ge),s(A),s(_e),s(he),s(D),s(qe),s(B),s(we),s(K),s(Ce),s(Q),s(je),s(Y),s(xe),s(F),s(ke),s(te),s(Le),s(ne),s(ye),s(G),s(ze),s(J)),g(C),g(j,e),g(x,e),g(k,e),g(L),g(y,e),g(z,e),g(V,e),g(P,e),g(T,e),g(H),g(E)}}}function Ct(i){let n,a;return n=new pt({props:{$$slots:{default:[wt]},$$scope:{ctx:i}}}),{c(){m(n.$$.fragment)},l(o){v(n.$$.fragment,o)},m(o,_){f(n,o,_),a=!0},p(o,[_]){const ae={};_&1&&(ae.$$scope={dirty:_,ctx:o}),n.$set(ae)},i(o){a||($(n.$$.fragment,o),a=!0)},o(o){b(n.$$.fragment,o),a=!1},d(o){g(n,o)}}}class Tt extends ot{constructor(n){super(),it(this,n,null,Ct,lt,{})}}export{Tt as default};
