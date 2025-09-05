import{s as ce}from"./scheduler.38f5b73a.js";import{S as ue,i as de,r as k,u as L,v as E,d as T,t as H,w as M,g as c,s as u,h as d,x as p,c as m,j as le,f as s,k as me,a as o,m as J,n as K}from"./index.33e8e8ec.js";import{P as pe}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{M as re}from"./Message.3e138e3b.js";import{M as fe}from"./ModalImage.d84ad5a6.js";import{F as ie}from"./File.6bc0c696.js";import{b as Y}from"./paths.e092a00d.js";function $e(i){let t;return{c(){t=J(`export const moduleInfo = {
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
  }
];

export const questions = []; // <-- Hemos añadido esta constante
`)},l(a){t=K(a,`export const moduleInfo = {
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
  }
];

export const questions = []; // <-- Hemos añadido esta constante
`)},m(a,l){o(a,t,l)},d(a){a&&s(t)}}}function ve(i){let t;return{c(){t=J("No te olvides de importar la plantilla correspondiente al inicio de la definición del módulo.")},l(a){t=K(a,"No te olvides de importar la plantilla correspondiente al inicio de la definición del módulo.")},m(a,l){o(a,t,l)},d(a){a&&s(t)}}}function _e(i){let t;return{c(){t=J(`import Choose from '$lib/templates/Choose.svelte'; // No te olvides de importar esto.
import FillCode from '$lib/templates/FillCode.svelte'; // Y esto.

export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

// Esto no cambia
export const levels = [
  (...)
];

export const questions = [

  {
    type: Choose,
    content: {
      text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
      answers: [
        { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
        { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
        { text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`, correct: false },
        { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
      ]
    }
  },
  {
    type: Choose,
    content: {
      checkboxes: true,
      shuffle: true,
      text: \`Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?\`,
      answers: [
        { text: \`Crear ramas específicas para cada funcionalidad o corrección 👀\`, correct: true },
        { text: \`Hacer commits directamente en la rama main para ahorrar tiempo.\`, correct: false },
        { text: \`Escribir mensajes de commit claros y descriptivos 👀\`, correct: true },
        { text: \`Fusionar ramas sin revisar los cambios realizados por otros.\`, correct: false }
      ]
    }
  },
  {
    // Sí, es un poco feo poner el código así... ¯\\_(ツ)_/¯
    type: FillCode,
    content: {
      codeLang: 'hcl',
      text: '',
      codeBlock: \`# Alineado a la izquierda para mantener la identación
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
}\`,
    shuffle: true,
    }
  }
];
`)},l(a){t=K(a,`import Choose from '$lib/templates/Choose.svelte'; // No te olvides de importar esto.
import FillCode from '$lib/templates/FillCode.svelte'; // Y esto.

export const moduleInfo = {
  title: 'Instalando Codiquest',
  shortDescription: 'Este es mi módulo de ejemplo, de momento un poco vacío, ¿no?',
  public: true,
  linksTo: 'dummy'
};

// Esto no cambia
export const levels = [
  (...)
];

export const questions = [

  {
    type: Choose,
    content: {
      text: \`Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?\`,
      answers: [
        { text: \`Usar la función setTimeout para simular la espera.\`, correct: false },
        { text: \`Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)\`, correct: true },
        { text: \`Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.\`, correct: false },
        { text: \`Eliminar todas las promesas y usar solo funciones síncronas.\`, correct: false }
      ]
    }
  },
  {
    type: Choose,
    content: {
      checkboxes: true,
      shuffle: true,
      text: \`Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?\`,
      answers: [
        { text: \`Crear ramas específicas para cada funcionalidad o corrección 👀\`, correct: true },
        { text: \`Hacer commits directamente en la rama main para ahorrar tiempo.\`, correct: false },
        { text: \`Escribir mensajes de commit claros y descriptivos 👀\`, correct: true },
        { text: \`Fusionar ramas sin revisar los cambios realizados por otros.\`, correct: false }
      ]
    }
  },
  {
    // Sí, es un poco feo poner el código así... ¯\\_(ツ)_/¯
    type: FillCode,
    content: {
      codeLang: 'hcl',
      text: '',
      codeBlock: \`# Alineado a la izquierda para mantener la identación
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
}\`,
    shuffle: true,
    }
  }
];
`)},m(a,l){o(a,t,l)},d(a){a&&s(t)}}}function ge(i){let t;return{c(){t=J("La ruta que se utiliza por defecto para la página de los cuestionarios es `test`, de forma que ninguna de nuestras secciones o páginas debe llamarse así.")},l(a){t=K(a,"La ruta que se utiliza por defecto para la página de los cuestionarios es `test`, de forma que ninguna de nuestras secciones o páginas debe llamarse así.")},m(a,l){o(a,t,l)},d(a){a&&s(t)}}}function xe(i){let t,a=`Cuando creábamos un módulo de <a href="${Y}/modules/crear-un-nuevo-modulo" class="link link-primary internal">forma manual</a>, inicialmente, exportábamos una constante <code class="svelte-1awqwjz">level</code> para disponer de un listado de niveles y una constante <code class="svelte-1awqwjz">questions</code> que dijimos que comentaríamos más adelante. ¡Pues ha llegado ese momento! 🥳`,l,r,I="Estructura",P,x,V='La estructura de la constante <code class="svelte-1awqwjz">questions</code> es muy similar a la de los niveles, pero, en este caso, define el tipo de pregunta y la pregunta en sí. Sigamos con el ejemplo del módulo <code class="svelte-1awqwjz">dummy</code> que habíamos empezado.',A,f,q,W='Ahora, como habíamos comentado, la constante <code class="svelte-1awqwjz">questions</code> tendrá un <code class="svelte-1awqwjz">array</code> de <code class="svelte-1awqwjz">objetos</code> con los siguientes atributos:',S,b,X="Atributos",N,$,Z=`<li class="svelte-1awqwjz"><code class="svelte-1awqwjz">type</code>: Indica el tipo de pregunta. Actualmente, puede ser de tipo <a href="${Y}/components/template-choose" class="link link-primary internal">Choose</a> o <a href="${Y}/components/template-fillcode" class="link link-primary internal">FillCode</a>.</li> <li class="svelte-1awqwjz"><code class="svelte-1awqwjz">content</code>: El contenido de la pregunta, representado por los atributos de cada tipo de pregunta. Es decir, el contenido del objeto <code class="svelte-1awqwjz">content</code> deben ser los propios atributos que le pasarías a la plantilla correspondiente.</li>`,B,y,v,O,w,ee="Ejemplo",Q,h,te='Vamos a definir tres preguntas: una de tipo <code class="svelte-1awqwjz">Choose</code> simple, otra de <code class="svelte-1awqwjz">Choose</code> múltiple y otra de rellenar código.',U,_,C,ne='Si todo ha ido bien, al actualizar tu módulo <code class="svelte-1awqwjz">dummy</code>, verás que ahora aparece una nueva pestaña, &quot;<strong>Cuestionarios</strong>&quot;, tal y como vemos a continuación:',D,j,R,z,g,G;return f=new ie({props:{icon:"js",name:"dummy.js",route:"src,modules",codeLang:"js",$$slots:{default:[$e]},$$scope:{ctx:i}}}),v=new re({props:{type:"IMPORTANT",$$slots:{default:[ve]},$$scope:{ctx:i}}}),_=new ie({props:{icon:"js",name:"dummy.js",route:"src,modules",codeLang:"js",$$slots:{default:[_e]},$$scope:{ctx:i}}}),j=new fe({props:{src:"img/install/04.png",alignment:"center",width:"",alt:"Muestra",modal:"false"}}),g=new re({props:{type:"WARNING",$$slots:{default:[ge]},$$scope:{ctx:i}}}),{c(){t=c("p"),t.innerHTML=a,l=u(),r=c("h2"),r.textContent=I,P=u(),x=c("p"),x.innerHTML=V,A=u(),k(f.$$.fragment),q=c("p"),q.innerHTML=W,S=u(),b=c("h2"),b.textContent=X,N=u(),$=c("ul"),$.innerHTML=Z,B=u(),y=c("blockquote"),k(v.$$.fragment),O=u(),w=c("h2"),w.textContent=ee,Q=u(),h=c("p"),h.innerHTML=te,U=u(),k(_.$$.fragment),C=c("p"),C.innerHTML=ne,D=u(),k(j.$$.fragment),R=u(),z=c("blockquote"),k(g.$$.fragment),this.h()},l(e){t=d(e,"P",{"data-svelte-h":!0}),p(t)!=="svelte-ictzez"&&(t.innerHTML=a),l=m(e),r=d(e,"H2",{"data-svelte-h":!0}),p(r)!=="svelte-9idy36"&&(r.textContent=I),P=m(e),x=d(e,"P",{"data-svelte-h":!0}),p(x)!=="svelte-1s2w6dx"&&(x.innerHTML=V),A=m(e),L(f.$$.fragment,e),q=d(e,"P",{"data-svelte-h":!0}),p(q)!=="svelte-2k1o3t"&&(q.innerHTML=W),S=m(e),b=d(e,"H2",{"data-svelte-h":!0}),p(b)!=="svelte-z7hmm1"&&(b.textContent=X),N=m(e),$=d(e,"UL",{class:!0,"data-svelte-h":!0}),p($)!=="svelte-pahnk3"&&($.innerHTML=Z),B=m(e),y=d(e,"BLOCKQUOTE",{});var n=le(y);L(v.$$.fragment,n),n.forEach(s),O=m(e),w=d(e,"H2",{"data-svelte-h":!0}),p(w)!=="svelte-qjlmoo"&&(w.textContent=ee),Q=m(e),h=d(e,"P",{"data-svelte-h":!0}),p(h)!=="svelte-1gphjla"&&(h.innerHTML=te),U=m(e),L(_.$$.fragment,e),C=d(e,"P",{"data-svelte-h":!0}),p(C)!=="svelte-1cshwl6"&&(C.innerHTML=ne),D=m(e),L(j.$$.fragment,e),R=m(e),z=d(e,"BLOCKQUOTE",{});var F=le(z);L(g.$$.fragment,F),F.forEach(s),this.h()},h(){me($,"class","svelte-1awqwjz")},m(e,n){o(e,t,n),o(e,l,n),o(e,r,n),o(e,P,n),o(e,x,n),o(e,A,n),E(f,e,n),o(e,q,n),o(e,S,n),o(e,b,n),o(e,N,n),o(e,$,n),o(e,B,n),o(e,y,n),E(v,y,null),o(e,O,n),o(e,w,n),o(e,Q,n),o(e,h,n),o(e,U,n),E(_,e,n),o(e,C,n),o(e,D,n),E(j,e,n),o(e,R,n),o(e,z,n),E(g,z,null),G=!0},p(e,n){const F={};n&1&&(F.$$scope={dirty:n,ctx:e}),f.$set(F);const ae={};n&1&&(ae.$$scope={dirty:n,ctx:e}),v.$set(ae);const se={};n&1&&(se.$$scope={dirty:n,ctx:e}),_.$set(se);const oe={};n&1&&(oe.$$scope={dirty:n,ctx:e}),g.$set(oe)},i(e){G||(T(f.$$.fragment,e),T(v.$$.fragment,e),T(_.$$.fragment,e),T(j.$$.fragment,e),T(g.$$.fragment,e),G=!0)},o(e){H(f.$$.fragment,e),H(v.$$.fragment,e),H(_.$$.fragment,e),H(j.$$.fragment,e),H(g.$$.fragment,e),G=!1},d(e){e&&(s(t),s(l),s(r),s(P),s(x),s(A),s(q),s(S),s(b),s(N),s($),s(B),s(y),s(O),s(w),s(Q),s(h),s(U),s(C),s(D),s(R),s(z)),M(f,e),M(v),M(_,e),M(j,e),M(g)}}}function qe(i){let t,a;return t=new pe({props:{$$slots:{default:[xe]},$$scope:{ctx:i}}}),{c(){k(t.$$.fragment)},l(l){L(t.$$.fragment,l)},m(l,r){E(t,l,r),a=!0},p(l,[r]){const I={};r&1&&(I.$$scope={dirty:r,ctx:l}),t.$set(I)},i(l){a||(T(t.$$.fragment,l),a=!0)},o(l){H(t.$$.fragment,l),a=!1},d(l){M(t,l)}}}class ke extends ue{constructor(t){super(),de(this,t,null,qe,ce,{})}}export{ke as default};
