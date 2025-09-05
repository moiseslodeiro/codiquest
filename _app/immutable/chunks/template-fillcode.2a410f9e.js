import{s as H}from"./scheduler.38f5b73a.js";import{S as A,i as N,r as j,u as k,v as C,d as x,t as L,w as T,g as w,s as b,h as q,x as O,c as h,j as S,f as o,k as U,a as l,m as E,n as P}from"./index.33e8e8ec.js";import{P as I}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{M as G}from"./Message.3e138e3b.js";import{b as K}from"./paths.e092a00d.js";import{F as Q}from"./File.6bc0c696.js";function D(r){let a;return{c(){a=E("Ten en cuenta que no hay una validación de código como tal, sino que se comprueba que el código original (eliminando las coincidencias `$x$`) sea el mismo que el resultante tras haber rellenado los huecos.")},l(n){a=P(n,"Ten en cuenta que no hay una validación de código como tal, sino que se comprueba que el código original (eliminando las coincidencias `$x$`) sea el mismo que el resultante tras haber rellenado los huecos.")},m(n,t){l(n,a,t)},d(n){n&&o(a)}}}function R(r){let a;return{c(){a=E(`<script>
  import FillCode from '$lib/templates/FillCode.svelte';

  let title = 'Creando una instancia en GCP';
  let text = 'A continuación vamos a poner a prueba los conocimientos del curso de terraform. ¿Serás capaz de completar bien el código para crear una instancia de tipo e2 que esté en la network default?';
  let codeLang = 'hcl';
  let shuffle = true;

  // Para la indentación, ten en cuenta que la segunda línea del bloque empieza en la línea de \`codeBlock\`
  let codeBlock = \`resource "google_compute_instance" "codivm" {
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
}\`;

  const fakeOptions = ['d1', 'fast', 'e3', 'alpine']

<\/script>

<FillCode {text} {title} {codeLang} {codeBlock} {shuffle} {fakeOptions} />
`)},l(n){a=P(n,`<script>
  import FillCode from '$lib/templates/FillCode.svelte';

  let title = 'Creando una instancia en GCP';
  let text = 'A continuación vamos a poner a prueba los conocimientos del curso de terraform. ¿Serás capaz de completar bien el código para crear una instancia de tipo e2 que esté en la network default?';
  let codeLang = 'hcl';
  let shuffle = true;

  // Para la indentación, ten en cuenta que la segunda línea del bloque empieza en la línea de \`codeBlock\`
  let codeBlock = \`resource "google_compute_instance" "codivm" {
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
}\`;

  const fakeOptions = ['d1', 'fast', 'e3', 'alpine']

<\/script>

<FillCode {text} {title} {codeLang} {codeBlock} {shuffle} {fakeOptions} />
`)},m(n,t){l(n,a,t)},d(n){n&&o(a)}}}function J(r){let a;return{c(){a=E("Este elemento no está pensado para renderizarse como parte de un componente sino como una template, por lo que la previsualización aquí no sería posible ahora mismo")},l(n){a=P(n,"Este elemento no está pensado para renderizarse como parte de un componente sino como una template, por lo que la previsualización aquí no sería posible ahora mismo")},m(n,t){l(n,a,t)},d(n){n&&o(a)}}}function V(r){let a,n='Es lo que conocemos como un <code class="svelte-1awqwjz">test</code> o <code class="svelte-1awqwjz">cuestionario</code>. Es una plantilla que hace uso, a su vez, del componente <code class="svelte-1awqwjz">Gap</code> para mostrar un cuestionario donde se rellenan huecos, interpolando las ocurrencias entre símbolos de dólar (<code class="svelte-1awqwjz">$</code>) (por ejemplo, <code class="svelte-1awqwjz">$hola$</code>). Adicionalmente, se pueden pasar opciones para mezclar las respuestas e incluso añadir respuestas falsas.',t,c,i,v,d,f,u,g,p,B="Parámetros",_,m,F=`<li class="svelte-1awqwjz"><code class="svelte-1awqwjz">text</code>: Contenido que se muestra dentro de la descripción cuando no está en modo &quot;examen&quot; (osea, en modo test).</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">title</code>:Título de la pregunta.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">showLines</code>: Muestra (o no) el número de líneas en el bloque de código.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">codeLang</code>: Lenguaje de sintaxis que se pasa a Prism para resaltar el código (consulta el <a href="${K}/components/componentes-code" class="link link-primary internal">componente code</a> para más información).</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">shuffle</code>: Determina si las opciones de respuesta se mezclan aleatoriamente (true/false).</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">codeBlock</code>: Código fuente con marcadores <code class="svelte-1awqwjz">($…$)</code> que indican los huecos a rellenar.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">inTestMode</code>: Establece el modo de prueba (examen): no muestra la descripción, solo el componente Gaps. Se usa, mayormente, cuando se va a la ruta /test/ para establecer los cuestionarios.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">order</code>: Identificador de la pregunta dentro de una serie. Se envía en el evento message cuando la prueba termina, permitiendo al contenedor saber qué pregunta se acaba de resolver. No se suele establecer manualmente, sólo es de uso interno a la template <code class="svelte-1awqwjz">Gap</code>.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">resources</code>: Lista de recursos que se muestran en una pestaña adicional.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">fakeOptions</code>: Opciones de respuesta falsas que se añaden a los botones de selección. 😈</li>`,z;return i=new G({props:{type:"IMPORTANT",$$slots:{default:[D]},$$scope:{ctx:r}}}),d=new Q({props:{icon:"svelte",name:"fill.svelte",codeLang:"javascript",$$slots:{default:[R]},$$scope:{ctx:r}}}),u=new G({props:{type:"NOTE",$$slots:{default:[J]},$$scope:{ctx:r}}}),{c(){a=w("p"),a.innerHTML=n,t=b(),c=w("blockquote"),j(i.$$.fragment),v=b(),j(d.$$.fragment),f=w("blockquote"),j(u.$$.fragment),g=b(),p=w("h2"),p.textContent=B,_=b(),m=w("ul"),m.innerHTML=F,this.h()},l(e){a=q(e,"P",{"data-svelte-h":!0}),O(a)!=="svelte-1jrtpwz"&&(a.innerHTML=n),t=h(e),c=q(e,"BLOCKQUOTE",{});var s=S(c);k(i.$$.fragment,s),s.forEach(o),v=h(e),k(d.$$.fragment,e),f=q(e,"BLOCKQUOTE",{});var $=S(f);k(u.$$.fragment,$),$.forEach(o),g=h(e),p=q(e,"H2",{"data-svelte-h":!0}),O(p)!=="svelte-1tanu2q"&&(p.textContent=B),_=h(e),m=q(e,"UL",{class:!0,"data-svelte-h":!0}),O(m)!=="svelte-woayv6"&&(m.innerHTML=F),this.h()},h(){U(m,"class","svelte-1awqwjz")},m(e,s){l(e,a,s),l(e,t,s),l(e,c,s),C(i,c,null),l(e,v,s),C(d,e,s),l(e,f,s),C(u,f,null),l(e,g,s),l(e,p,s),l(e,_,s),l(e,m,s),z=!0},p(e,s){const $={};s&1&&($.$$scope={dirty:s,ctx:e}),i.$set($);const M={};s&1&&(M.$$scope={dirty:s,ctx:e}),d.$set(M);const y={};s&1&&(y.$$scope={dirty:s,ctx:e}),u.$set(y)},i(e){z||(x(i.$$.fragment,e),x(d.$$.fragment,e),x(u.$$.fragment,e),z=!0)},o(e){L(i.$$.fragment,e),L(d.$$.fragment,e),L(u.$$.fragment,e),z=!1},d(e){e&&(o(a),o(t),o(c),o(v),o(f),o(g),o(p),o(_),o(m)),T(i),T(d,e),T(u)}}}function W(r){let a,n;return a=new I({props:{$$slots:{default:[V]},$$scope:{ctx:r}}}),{c(){j(a.$$.fragment)},l(t){k(a.$$.fragment,t)},m(t,c){C(a,t,c),n=!0},p(t,[c]){const i={};c&1&&(i.$$scope={dirty:c,ctx:t}),a.$set(i)},i(t){n||(x(a.$$.fragment,t),n=!0)},o(t){L(a.$$.fragment,t),n=!1},d(t){T(a,t)}}}class te extends A{constructor(a){super(),N(this,a,null,W,H,{})}}export{te as default};
