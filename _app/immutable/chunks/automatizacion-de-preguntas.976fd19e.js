import{s as Ue}from"./scheduler.38f5b73a.js";import{S as Fe,i as Ke,r as f,u as $,v as _,d as v,t as g,w as q,g as i,s as u,h as r,x as d,c as m,j as Oe,f as o,k as Qe,a as s,m as j,n as T}from"./index.33e8e8ec.js";import{C as Ie}from"./Code.7e3a14be.js";import{M as Be}from"./Message.3e138e3b.js";import{b as Re}from"./paths.e092a00d.js";import{P as Ve}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{F as J}from"./File.6bc0c696.js";function Ye(c){let n;return{c(){n=j(`---
# Demo test
---
¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
Este es el texto de descripción

\`\`\`hcl
resource "google_compute_instance" "codivm" {
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/$debian-12$"
    }
  }

  network_interface {
    network = "$default$"
    access_config {}
  }
}
\`\`\`
`)},l(a){n=T(a,`---
# Demo test
---
¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
Este es el texto de descripción

\`\`\`hcl
resource "google_compute_instance" "codivm" {
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/$debian-12$"
    }
  }

  network_interface {
    network = "$default$"
    access_config {}
  }
}
\`\`\`
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function Ge(c){let n;return{c(){n=j(`---
# Demo test
---
`)},l(a){n=T(a,`---
# Demo test
---
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function Je(c){let n;return{c(){n=j(`¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
`)},l(a){n=T(a,`¿De qué color es el caballo blanco de Santiago?
[] Estilo unicornio con mechas rosas
[] Negro
[x] Blanco
---
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function We(c){let n;return{c(){n=j(`¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
`)},l(a){n=T(a,`¿A qué se debe la lluvia?
[x] A la condensación
[x] A la presión atmosférica
[x] A la humedad atmosférica
[] Nadie sabe por qué llueve
---
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function Xe(c){let n;return{c(){n=j(`Este es el texto de descripción

\`\`\`hcl
resource "google_compute_instance" "codivm" {
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/$debian-12$"
    }
  }

  network_interface {
    network = "$default$"
    access_config {}
  }
}
\`\`\`
`)},l(a){n=T(a,`Este es el texto de descripción

\`\`\`hcl
resource "google_compute_instance" "codivm" {
  name         = "codivm"
  machine_type = "$e2$-micro"
  zone         = var.zone
  tags         = ["demo", "codi"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/$debian-12$"
    }
  }

  network_interface {
    network = "$default$"
    access_config {}
  }
}
\`\`\`
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function Ze(c){let n;return{c(){n=j("De momento, el bloque no admite otras opciones, como `fakeOptions`, y se establecen opciones por defecto, como `shuffle` a `true`, de forma predeterminada.")},l(a){n=T(a,"De momento, el bloque no admite otras opciones, como `fakeOptions`, y se establecen opciones por defecto, como `shuffle` a `true`, de forma predeterminada.")},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function et(c){let n;return{c(){n=j(`node tools/convert.js </ruta/entrada.md> <moduleName>
`)},l(a){n=T(a,`node tools/convert.js </ruta/entrada.md> <moduleName>
`)},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function tt(c){let n;return{c(){n=j("Si ya existe, no modificará el contenido del módulo (fichero `.js`) ni el de `levels.auto.js`.")},l(a){n=T(a,"Si ya existe, no modificará el contenido del módulo (fichero `.js`) ni el de `levels.auto.js`.")},m(a,l){s(a,n,l)},d(a){a&&o(n)}}}function nt(c){let n,a=`Hace un par de niveles, vimos <a href="${Re}/modules_auto/creando-un-modulo-automatizado" class="link link-primary internal">Creando un módulo automatizado</a>, donde se explicaba el uso de la herramienta <code class="svelte-1awqwjz">module.js</code> para automatizar la creación de módulos basados en Markdown (lo que hemos visto hasta ahora, vamos). Pero, ¿qué hay de las preguntas y de la constante <code class="svelte-1awqwjz">questions</code>? Pues... ¡Sorpresa! 🥳 También hay un conversor, aunque funciona de manera algo diferente.`,l,p,Y='Vamos a partir del siguiente bloque de código, un fichero que llamaremos <code class="svelte-1awqwjz">demo.md</code>, para, primero, explicar la estructura de las preguntas y, después, ver cómo hacer uso de la herramienta de conversión automática.',W,w,M,_e="Bloques generales",X,P,ve='Como puedes ver, el fichero se inicia con dos separaciones (que, normalmente, se traducirían como elementos <code class="svelte-1awqwjz">&lt;hr&gt;</code> en HTML) haciendo uso de <code class="svelte-1awqwjz">---</code>. Dentro de esta separación, tenemos el título:',Z,b,A,ge='Luego, cada bloque se separa con el mismo separador (valga la redundancia): <code class="svelte-1awqwjz">---</code>. De esta forma, tendremos tantas preguntas como secciones separadas por <code class="svelte-1awqwjz">---</code>. Hay que destacar que esto solo ocurre cuando el separador empieza al <strong>principio</strong> de la línea y, acto seguido, tiene un <strong>salto de línea</strong>. Es decir, que no afectará si, en medio de una pregunta, encontramos tres guiones consecutivos.',ee,D,qe="Preguntas mono respuesta",te,E,we='Para crear una pregunta de respuesta única (o <code class="svelte-1awqwjz">monorespuesta</code>), hay que añadir un bloque como este:',ne,x,y,be="Donde:",ae,h,xe='<li class="svelte-1awqwjz">La primera línea es la pregunta que se va a realizar.</li> <li class="svelte-1awqwjz">La segunda línea en adelante representará si es una pregunta falsa (<code class="svelte-1awqwjz">[]</code>) o verdadera (<code class="svelte-1awqwjz">[x]</code>).</li>',oe,N,he="Después de esto, y <strong>sin salto de línea</strong>, debe ir otro separador para indicarle al <em>parser</em> que hay una nueva pregunta; o bien no se debe poner nada más, para indicar que es la última pregunta.",se,S,Ce="Preguntas multirespuesta",le,O,ke="Funciona <strong>igual</strong> que la pregunta <em>monorespuesta</em>, con la salvedad de que, en esta ocasión, podemos marcar <strong>más</strong> de una opción como correcta.",ie,C,B,ze="Preguntas de tipo fill the gap",re,U,Le="Y vamos con el último tipo de preguntas (de momento) que podemos utilizar en Codiquest: las preguntas de rellenar código/huecos, o <em>fill the gap</em>. Usemos de ejemplo el siguiente bloque:",ce,k,F,He='Donde, en este caso, podemos incluir una descripción de forma <strong>opcional</strong> en la <strong>primera línea</strong> de la pregunta. Además, podemos hacer uso de un bloque de código como lo habíamos hecho hasta ahora (con tres <em>backticks</em>, seguido del lenguaje que se quiera resaltar) e incluyendo las opciones de relleno entre símbolos de dólar (<code class="svelte-1awqwjz">$</code>).',ue,R,z,me,K,je="Cabe comentar que puede tener o no una descripción, y que el bloque debe indicar el lenguaje como si fuera un bloque de código normal.",de,Q,Te="Haciendo uso de la herramienta",pe,I,Me='El uso de la herramienta es muy similar al de la que habíamos utilizado para los módulos, con la salvedad de que, en este caso, el fichero que se modifica es <code class="svelte-1awqwjz">questions.auto.js</code>. En caso de que el módulo no exista, la herramienta creará una versión vacía, al igual que pasaba con los módulos.',fe,L,V,H,$e;return w=new J({props:{icon:"markdown",route:"src,raw",name:"demo.md",codeLang:"markdown",$$slots:{default:[Ye]},$$scope:{ctx:c}}}),b=new J({props:{icon:"markdown",route:"src,raw",name:"demo.md",codeLang:"markdown",$$slots:{default:[Ge]},$$scope:{ctx:c}}}),x=new J({props:{icon:"markdown",route:"src,raw",name:"demo.md",codeLang:"markdown",$$slots:{default:[Je]},$$scope:{ctx:c}}}),C=new J({props:{icon:"markdown",route:"src,raw",name:"demo.md",codeLang:"markdown",$$slots:{default:[We]},$$scope:{ctx:c}}}),k=new J({props:{icon:"markdown",route:"src,raw",name:"demo.md",codeLang:"markdown",$$slots:{default:[Xe]},$$scope:{ctx:c}}}),z=new Be({props:{type:"NOTE",$$slots:{default:[Ze]},$$scope:{ctx:c}}}),L=new Ie({props:{codeLang:"shell",$$slots:{default:[et]},$$scope:{ctx:c}}}),H=new Be({props:{type:"IMPORTANT",$$slots:{default:[tt]},$$scope:{ctx:c}}}),{c(){n=i("p"),n.innerHTML=a,l=u(),p=i("p"),p.innerHTML=Y,W=u(),f(w.$$.fragment),M=i("h2"),M.textContent=_e,X=u(),P=i("p"),P.innerHTML=ve,Z=u(),f(b.$$.fragment),A=i("p"),A.innerHTML=ge,ee=u(),D=i("h2"),D.textContent=qe,te=u(),E=i("p"),E.innerHTML=we,ne=u(),f(x.$$.fragment),y=i("p"),y.textContent=be,ae=u(),h=i("ul"),h.innerHTML=xe,oe=u(),N=i("p"),N.innerHTML=he,se=u(),S=i("h2"),S.textContent=Ce,le=u(),O=i("p"),O.innerHTML=ke,ie=u(),f(C.$$.fragment),B=i("h2"),B.textContent=ze,re=u(),U=i("p"),U.innerHTML=Le,ce=u(),f(k.$$.fragment),F=i("p"),F.innerHTML=He,ue=u(),R=i("blockquote"),f(z.$$.fragment),me=u(),K=i("p"),K.textContent=je,de=u(),Q=i("h2"),Q.textContent=Te,pe=u(),I=i("p"),I.innerHTML=Me,fe=u(),f(L.$$.fragment),V=i("blockquote"),f(H.$$.fragment),this.h()},l(e){n=r(e,"P",{"data-svelte-h":!0}),d(n)!=="svelte-1xbrg1"&&(n.innerHTML=a),l=m(e),p=r(e,"P",{"data-svelte-h":!0}),d(p)!=="svelte-1u3fuaw"&&(p.innerHTML=Y),W=m(e),$(w.$$.fragment,e),M=r(e,"H2",{"data-svelte-h":!0}),d(M)!=="svelte-15skj7d"&&(M.textContent=_e),X=m(e),P=r(e,"P",{"data-svelte-h":!0}),d(P)!=="svelte-zo2v9n"&&(P.innerHTML=ve),Z=m(e),$(b.$$.fragment,e),A=r(e,"P",{"data-svelte-h":!0}),d(A)!=="svelte-17bwtyu"&&(A.innerHTML=ge),ee=m(e),D=r(e,"H2",{"data-svelte-h":!0}),d(D)!=="svelte-79z8c6"&&(D.textContent=qe),te=m(e),E=r(e,"P",{"data-svelte-h":!0}),d(E)!=="svelte-jnrvtm"&&(E.innerHTML=we),ne=m(e),$(x.$$.fragment,e),y=r(e,"P",{"data-svelte-h":!0}),d(y)!=="svelte-b1oky4"&&(y.textContent=be),ae=m(e),h=r(e,"UL",{class:!0,"data-svelte-h":!0}),d(h)!=="svelte-1vwyey6"&&(h.innerHTML=xe),oe=m(e),N=r(e,"P",{"data-svelte-h":!0}),d(N)!=="svelte-x2b13z"&&(N.innerHTML=he),se=m(e),S=r(e,"H2",{"data-svelte-h":!0}),d(S)!=="svelte-18sgnbe"&&(S.textContent=Ce),le=m(e),O=r(e,"P",{"data-svelte-h":!0}),d(O)!=="svelte-1pru6qi"&&(O.innerHTML=ke),ie=m(e),$(C.$$.fragment,e),B=r(e,"H2",{"data-svelte-h":!0}),d(B)!=="svelte-mt63s"&&(B.textContent=ze),re=m(e),U=r(e,"P",{"data-svelte-h":!0}),d(U)!=="svelte-1u088lh"&&(U.innerHTML=Le),ce=m(e),$(k.$$.fragment,e),F=r(e,"P",{"data-svelte-h":!0}),d(F)!=="svelte-ram8bx"&&(F.innerHTML=He),ue=m(e),R=r(e,"BLOCKQUOTE",{});var t=Oe(R);$(z.$$.fragment,t),t.forEach(o),me=m(e),K=r(e,"P",{"data-svelte-h":!0}),d(K)!=="svelte-lxbdj3"&&(K.textContent=je),de=m(e),Q=r(e,"H2",{"data-svelte-h":!0}),d(Q)!=="svelte-qif3nk"&&(Q.textContent=Te),pe=m(e),I=r(e,"P",{"data-svelte-h":!0}),d(I)!=="svelte-1wh364q"&&(I.innerHTML=Me),fe=m(e),$(L.$$.fragment,e),V=r(e,"BLOCKQUOTE",{});var G=Oe(V);$(H.$$.fragment,G),G.forEach(o),this.h()},h(){Qe(h,"class","svelte-1awqwjz")},m(e,t){s(e,n,t),s(e,l,t),s(e,p,t),s(e,W,t),_(w,e,t),s(e,M,t),s(e,X,t),s(e,P,t),s(e,Z,t),_(b,e,t),s(e,A,t),s(e,ee,t),s(e,D,t),s(e,te,t),s(e,E,t),s(e,ne,t),_(x,e,t),s(e,y,t),s(e,ae,t),s(e,h,t),s(e,oe,t),s(e,N,t),s(e,se,t),s(e,S,t),s(e,le,t),s(e,O,t),s(e,ie,t),_(C,e,t),s(e,B,t),s(e,re,t),s(e,U,t),s(e,ce,t),_(k,e,t),s(e,F,t),s(e,ue,t),s(e,R,t),_(z,R,null),s(e,me,t),s(e,K,t),s(e,de,t),s(e,Q,t),s(e,pe,t),s(e,I,t),s(e,fe,t),_(L,e,t),s(e,V,t),_(H,V,null),$e=!0},p(e,t){const G={};t&1&&(G.$$scope={dirty:t,ctx:e}),w.$set(G);const Pe={};t&1&&(Pe.$$scope={dirty:t,ctx:e}),b.$set(Pe);const Ae={};t&1&&(Ae.$$scope={dirty:t,ctx:e}),x.$set(Ae);const De={};t&1&&(De.$$scope={dirty:t,ctx:e}),C.$set(De);const Ee={};t&1&&(Ee.$$scope={dirty:t,ctx:e}),k.$set(Ee);const ye={};t&1&&(ye.$$scope={dirty:t,ctx:e}),z.$set(ye);const Ne={};t&1&&(Ne.$$scope={dirty:t,ctx:e}),L.$set(Ne);const Se={};t&1&&(Se.$$scope={dirty:t,ctx:e}),H.$set(Se)},i(e){$e||(v(w.$$.fragment,e),v(b.$$.fragment,e),v(x.$$.fragment,e),v(C.$$.fragment,e),v(k.$$.fragment,e),v(z.$$.fragment,e),v(L.$$.fragment,e),v(H.$$.fragment,e),$e=!0)},o(e){g(w.$$.fragment,e),g(b.$$.fragment,e),g(x.$$.fragment,e),g(C.$$.fragment,e),g(k.$$.fragment,e),g(z.$$.fragment,e),g(L.$$.fragment,e),g(H.$$.fragment,e),$e=!1},d(e){e&&(o(n),o(l),o(p),o(W),o(M),o(X),o(P),o(Z),o(A),o(ee),o(D),o(te),o(E),o(ne),o(y),o(ae),o(h),o(oe),o(N),o(se),o(S),o(le),o(O),o(ie),o(B),o(re),o(U),o(ce),o(F),o(ue),o(R),o(me),o(K),o(de),o(Q),o(pe),o(I),o(fe),o(V)),q(w,e),q(b,e),q(x,e),q(C,e),q(k,e),q(z),q(L,e),q(H)}}}function at(c){let n,a;return n=new Ve({props:{$$slots:{default:[nt]},$$scope:{ctx:c}}}),{c(){f(n.$$.fragment)},l(l){$(n.$$.fragment,l)},m(l,p){_(n,l,p),a=!0},p(l,[p]){const Y={};p&1&&(Y.$$scope={dirty:p,ctx:l}),n.$set(Y)},i(l){a||(v(n.$$.fragment,l),a=!0)},o(l){g(n.$$.fragment,l),a=!1},d(l){q(n,l)}}}class mt extends Fe{constructor(n){super(),Ke(this,n,null,at,Ue,{})}}export{mt as default};
