import{s as kt,n as qt}from"./scheduler.38f5b73a.js";import{S as _t,i as zt,r as b,u as y,v as C,d as k,t as q,w as _,g as o,s as c,h as r,x as m,c as d,j as bt,f as n,k as Be,a,m as f,n as v}from"./index.33e8e8ec.js";import{C as yt}from"./Code.7e3a14be.js";import{M as Ct}from"./Message.3e138e3b.js";import{b as U}from"./paths.e092a00d.js";import{P as jt}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import{F as pe}from"./File.6bc0c696.js";function Lt(p){let i;return{c(){i=f(`<!doctype html>
<html lang="es" class="scroll-smooth" data-theme="light" translate="no">
  <head>
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta charset="utf-8" />
    <meta name="google" content="notranslate" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Cache-Control" content="no-store" />
    <meta http-equiv="Pragma" content="no-cache" />

    <meta property="og:title" content="CodiQuest" />
    <meta property="og:image" content="https://www.codiquest.com/img/header.jpg" />
    <meta property="og:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar :D" />
    <meta property="og:url" content="https://www.codiquest.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Crear módulos educativos interactivos con Markdown | Codiquest" />
    <meta name="twitter:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar." />
    <meta name="description" content="Aprende a crear módulos educativos con contenido teórico y práctico usando Markdown, sin necesidad de programar. Manual y automático." />
    <meta name="keywords" content="codiquest, módulos educativos, contenido interactivo, markdown, cuestionarios, fill the gap, páginas de aprendizaje, educación digital, aprender programando, preguntas dinámicas" />
    <link rel="canonical" href="https://www.codiquest.com" />
    <title>CodiQuest</title>

    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover" class="min-h-screen">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
`)},l(l){i=v(l,`<!doctype html>
<html lang="es" class="scroll-smooth" data-theme="light" translate="no">
  <head>
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta charset="utf-8" />
    <meta name="google" content="notranslate" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Cache-Control" content="no-store" />
    <meta http-equiv="Pragma" content="no-cache" />

    <meta property="og:title" content="CodiQuest" />
    <meta property="og:image" content="https://www.codiquest.com/img/header.jpg" />
    <meta property="og:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar :D" />
    <meta property="og:url" content="https://www.codiquest.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Crear módulos educativos interactivos con Markdown | Codiquest" />
    <meta name="twitter:description" content="Crea módulos de aprendizaje con texto, imágenes, ejercicios y cuestionarios gratis y sin saber programar." />
    <meta name="description" content="Aprende a crear módulos educativos con contenido teórico y práctico usando Markdown, sin necesidad de programar. Manual y automático." />
    <meta name="keywords" content="codiquest, módulos educativos, contenido interactivo, markdown, cuestionarios, fill the gap, páginas de aprendizaje, educación digital, aprender programando, preguntas dinámicas" />
    <link rel="canonical" href="https://www.codiquest.com" />
    <title>CodiQuest</title>

    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover" class="min-h-screen">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
`)},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function Mt(p){let i;return{c(){i=f(`@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind typography;

:root {
    --rounded-box: 0.2rem;
}

a.link.external::after,
a.link.youtube::after,
a.link.medium::after,
a.link.devto::after,
a.link.wikipedia::after {
  content: '';
  display: inline-block;
  margin-left: 0.25rem;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
}

a.link.external::after {
  background-image: url('/icons/external-link.svg');
}

a.link.internal::after {
  background-image: url('/icons/external-link.svg');
}

a.link.github::after {
  background-image: url('/icons/github.svg');
}

a.link.manz::after {
  background-image: url('/icons/manz.svg');
}

a.link.yt::after {
  background-image: url('/icons/youtube.svg');
}

a.link.medium::after {
  background-image: url('/icons/medium.svg');
}

a.link.devto::after {
  background-image: url('/icons/devto.svg');
}

a.link.wikipedia::after {
  background-image: url('/icons/wikipedia.svg');
}

a.link::after {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  margin-left: 0.25rem;
}
`)},l(l){i=v(l,`@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind typography;

:root {
    --rounded-box: 0.2rem;
}

a.link.external::after,
a.link.youtube::after,
a.link.medium::after,
a.link.devto::after,
a.link.wikipedia::after {
  content: '';
  display: inline-block;
  margin-left: 0.25rem;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
}

a.link.external::after {
  background-image: url('/icons/external-link.svg');
}

a.link.internal::after {
  background-image: url('/icons/external-link.svg');
}

a.link.github::after {
  background-image: url('/icons/github.svg');
}

a.link.manz::after {
  background-image: url('/icons/manz.svg');
}

a.link.yt::after {
  background-image: url('/icons/youtube.svg');
}

a.link.medium::after {
  background-image: url('/icons/medium.svg');
}

a.link.devto::after {
  background-image: url('/icons/devto.svg');
}

a.link.wikipedia::after {
  background-image: url('/icons/wikipedia.svg');
}

a.link::after {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  margin-left: 0.25rem;
}
`)},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function Ht(p){let i,l,s,g,h,$,B,z,x;return{c(){i=f(`<script>
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';
  export let data;

  // Partials
  import HeaderMessage from '$lib/partials/HeaderMessage.svelte';
<\/script>

<nav class="navbar bg-base-100" data-theme="synthwave">
  <div class="container md:mx-auto max-w-5xl">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="`),l=f(U),s=f(`/">
        <img src="`),g=f(U),h=f(`/favicon.png" alt="¡Hola! Soy Codi :-)" width="32" height="32" />
        <span class="max-md:hidden">CodiQuest</span>
        <div class="badge badge-secondary">Alpha</div>
      </a>
    </div>
    <div class="flex-none z-10">
      <ul class="menu menu-horizontal px-1">
        <li><a href="`),$=f(U),B=f(`/docs">Documentación</a></li>
        <li><a href="`),z=f(U),x=f(`/about">Acerca de</a></li>
      </ul>
    </div>
  </div>
</nav>
`)},l(u){i=v(u,`<script>
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';
  export let data;

  // Partials
  import HeaderMessage from '$lib/partials/HeaderMessage.svelte';
<\/script>

<nav class="navbar bg-base-100" data-theme="synthwave">
  <div class="container md:mx-auto max-w-5xl">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="`),l=v(u,U),s=v(u,`/">
        <img src="`),g=v(u,U),h=v(u,`/favicon.png" alt="¡Hola! Soy Codi :-)" width="32" height="32" />
        <span class="max-md:hidden">CodiQuest</span>
        <div class="badge badge-secondary">Alpha</div>
      </a>
    </div>
    <div class="flex-none z-10">
      <ul class="menu menu-horizontal px-1">
        <li><a href="`),$=v(u,U),B=v(u,`/docs">Documentación</a></li>
        <li><a href="`),z=v(u,U),x=v(u,`/about">Acerca de</a></li>
      </ul>
    </div>
  </div>
</nav>
`)},m(u,w){a(u,i,w),a(u,l,w),a(u,s,w),a(u,g,w),a(u,h,w),a(u,$,w),a(u,B,w),a(u,z,w),a(u,x,w)},p:qt,d(u){u&&(n(i),n(l),n(s),n(g),n(h),n($),n(B),n(z),n(x))}}}function Pt(p){let i;return{c(){i=f("Por defecto, el tema que trae precargado Codiquest es `synthwave` de DaisyUI. Puedes modificarlo tanto en el propio fichero `app.html` (a nivel de cabecera) como en el fichero `tailwind.config.js`. Consulta la documentación de DaisyUI para más información.")},l(l){i=v(l,"Por defecto, el tema que trae precargado Codiquest es `synthwave` de DaisyUI. Puedes modificarlo tanto en el propio fichero `app.html` (a nivel de cabecera) como en el fichero `tailwind.config.js`. Consulta la documentación de DaisyUI para más información.")},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function Et(p){let i;return{c(){i=f(`<main class="container md:mx-auto py-2 md:max-w-5xl sm:px-3">
  {#key data.url}
    <div
      class="max-sm:mx-3"
      in:fly={{ x: -200, duration: 300, delay: 300 }}
      out:fly={{ duration: 300 }} >
      <slot />
    </div>
  {/key}
</main>
`)},l(l){i=v(l,`<main class="container md:mx-auto py-2 md:max-w-5xl sm:px-3">
  {#key data.url}
    <div
      class="max-sm:mx-3"
      in:fly={{ x: -200, duration: 300, delay: 300 }}
      out:fly={{ duration: 300 }} >
      <slot />
    </div>
  {/key}
</main>
`)},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function Tt(p){let i;return{c(){i=f(`in:fly={{ x: -200, duration: 300, delay: 300 }}:
`)},l(l){i=v(l,`in:fly={{ x: -200, duration: 300, delay: 300 }}:
`)},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function Dt(p){let i;return{c(){i=f(`out:fly={{ duration: 300 }}
`)},l(l){i=v(l,`out:fly={{ duration: 300 }}
`)},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function Qt(p){let i;return{c(){i=f("Por favor, no elimines ni modifiques este pie de página. Ayuda a dar visibilidad y a apoyar el proyecto CodiQuest. 🫶")},l(l){i=v(l,"Por favor, no elimines ni modifiques este pie de página. Ayuda a dar visibilidad y a apoyar el proyecto CodiQuest. 🫶")},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function At(p){let i;return{c(){i=f(`<footer class="footer items-center p-4 bg-neutral text-neutral-content sticky top-[100vh] mt-5">
  <div class="flex items-center justify-between w-full container md:mx-auto max-w-5xl">
    <div class="flex items-center">
      <img src="/img/codi/favicon.webp" alt="It's a me! Codi!" class="h-4 w-4" />
      <p class="ml-2">
        Basado en <a
          href="https://github.com/moiseslodeiro/codiquest"
          target="_blank"
          data-svelte-h="svelte-1nqafas">CodiQuest</a
        >
        - <a href="/LICENSE" target="_blank" data-svelte-h="svelte-7quxjq">Licencia MIT</a>
      </p>
    </div>

    <a target="_blank" aria-label="Visítanos en X!" href="https://twitter.com/codiquest">
      <svg alt="Twitter/X" class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        ></path>
      </svg>
    </a>
  </div>
</footer>
`)},l(l){i=v(l,`<footer class="footer items-center p-4 bg-neutral text-neutral-content sticky top-[100vh] mt-5">
  <div class="flex items-center justify-between w-full container md:mx-auto max-w-5xl">
    <div class="flex items-center">
      <img src="/img/codi/favicon.webp" alt="It's a me! Codi!" class="h-4 w-4" />
      <p class="ml-2">
        Basado en <a
          href="https://github.com/moiseslodeiro/codiquest"
          target="_blank"
          data-svelte-h="svelte-1nqafas">CodiQuest</a
        >
        - <a href="/LICENSE" target="_blank" data-svelte-h="svelte-7quxjq">Licencia MIT</a>
      </p>
    </div>

    <a target="_blank" aria-label="Visítanos en X!" href="https://twitter.com/codiquest">
      <svg alt="Twitter/X" class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        ></path>
      </svg>
    </a>
  </div>
</footer>
`)},m(l,s){a(l,i,s)},d(l){l&&n(i)}}}function It(p){let i,l="En este minimódulo, veremos qué archivos son importantes para poder dejar nuestro sitio de enseñanza y aprendizaje lo más personalizado posible. ¡Empecemos por lo básico!",s,g,h,$,B="Datos y metadatos",z,x,u='Dentro de la carpeta <code class="svelte-1awqwjz">src</code>, encontraremos en el primer nivel el fichero <code class="svelte-1awqwjz">app.html</code>, que contiene la información y metadatos de la página. Es el punto de entrada que luego será utilizado para renderizar el contenido. Lo importante de este fichero se encuentra agrupado en un bloque entre las líneas <code class="svelte-1awqwjz">11</code> y <code class="svelte-1awqwjz">21</code>. Puedes editar cualquier referencia a Codiquest y las descripciones del contenido.',w,j,O,Oe="Estilo global",fe,X,Xe='También dentro de la carpeta <code class="svelte-1awqwjz">src</code> encontrarás el fichero <code class="svelte-1awqwjz">app.css</code>, que contiene unos estilos básicos extendidos de <code class="svelte-1awqwjz">tailwind</code> con alguna configuración particular. Estos estilos se aplican dentro del fichero <code class="svelte-1awqwjz">+layout.svelte</code>.',ve,L,F,Fe="Cabeceras y pie de página",ge,N,Ne='Para editar la cabecera y el pie de página, debemos ir al fichero <code class="svelte-1awqwjz">+layout.svelte</code>, que está en <code class="svelte-1awqwjz">src/routes/+layout.svelte</code>. Dentro de este fichero, edita solo las siguientes líneas (salvo que sepas lo que haces, claro 😅).',we,V,Ve="Cabecera",he,K,Ke='En la cabecera (parte superior de la página), podemos encontrar un pequeño logotipo de Codiquest, así como un nombre descriptivo y el enlace a la sección "Acerca de". Puedes editarlo libremente.',$e,M,de,H,xe,R,Re="Animación de entrada",be,Y,Ye="La transición o animación que se muestra aquí abajo sirve para crear un efecto visual de entrada y salida suave cuando el contenido de una página cambia, por ejemplo, al navegar de una página a otra.",ye,P,G,Ge="Explicación",Ce,J,Je="Esta es la transición de entrada. Se activa cuando el div se crea (es decir, cuando se navega a la nueva página).",ke,E,T,We='<li class="svelte-1awqwjz">x: -200 significa que el elemento &quot;volará&quot; desde la izquierda (-200 píxeles) hasta su posición final. Esto crea un efecto de que el nuevo contenido entra desde un lado.</li> <li class="svelte-1awqwjz">duration: 300 define que la animación de entrada durará 300 milisegundos.</li> <li class="svelte-1awqwjz">delay: 300 agrega una espera de 300 milisegundos antes de que comience la animación de entrada. Esto es crucial para que el contenido que sale tenga tiempo de animarse antes de que entre el nuevo.</li>',qe,D,W,Ze="Esta es la transición de salida. Se activa cuando Svelte va a destruir el div anterior.",_e,Q,et='<li class="svelte-1awqwjz">duration: 300 define que la animación de salida durará 300 milisegundos.</li>',ze,Z,tt="Como no se especifica una dirección, el comportamiento por defecto de fly es que el elemento se mueva hacia la derecha (x: 200 por defecto) y se desvanezca al mismo tiempo.",je,ee,nt="Pie de página",Le,te,at="Un pie de página (o footer, en inglés) es la sección que se encuentra en la parte inferior de una página web, una aplicación o un documento. Suele contener información complementaria, como enlaces de contacto, términos legales, créditos, navegación secundaria, redes sociales o avisos importantes.",Me,ne,it="En proyectos de código o sitios web, también se puede usar para mostrar agradecimientos, autoría, versión del software o enlaces útiles. Aunque a veces se subestima, el pie de página es un espacio clave para la identidad y transparencia de un proyecto.",He,me,A,Pe,I,ae,lt="Partials",Ee,ie,st='Existe una carpeta dentro de <code class="svelte-1awqwjz">src/lib/</code> llamada <code class="svelte-1awqwjz">partials</code> con los componentes parciales (normalmente estáticos) que representa algún bloque de texto. En este caso podemos editar el contenido para, por ejemplo, editar el contenido de la cabecera en la página principal (<code class="svelte-1awqwjz">MainMessage.svelte</code>), poner un mensaje debajo de la cabecera (<code class="svelte-1awqwjz">HeaderMessage.svelte</code>), etc.',Te,le,ot="Quitando el módulo Documentación",De,se,rt='Ahora mismo, al clonar el repositorio, por defecto, aparecerá la sección <code class="svelte-1awqwjz">Documentación</code> en nuestra página.',Qe,oe,ct="Quitarla es muy sencillo, basta con:",Ae,S,dt='<li class="svelte-1awqwjz">Eliminar el módulo (fichero <code class="svelte-1awqwjz">.js</code>) <code class="svelte-1awqwjz">docs.js</code> de <code class="svelte-1awqwjz">src/modules</code>.</li> <li class="svelte-1awqwjz">Eliminar la carpeta <code class="svelte-1awqwjz">src/modules/docs</code>.</li>',Ie,re,mt="Y listo, automáticamente nos habremos deshecho de la referencia a la documentación.",Se,ce,ut='Otra alternativa, más fácil y dejando por si acaso el módulo, es ir al fichero del módulo y cambiar su atributo <code class="svelte-1awqwjz">public</code> de true (público) a false (privado). En ambos casos, no te olvides de quitar el enlace de <code class="svelte-1awqwjz">+layout.svelte</code> en <code class="svelte-1awqwjz">src/routes</code>. En el segundo supuesto, seguirá siendo accesible, pero no estará listado en los módulos principales ni en la cabecera. 🥸',Ue;return j=new pe({props:{icon:"html",route:"src",name:"app.html",codeLang:"html",$$slots:{default:[Lt]},$$scope:{ctx:p}}}),L=new pe({props:{icon:"css",route:"src",name:"app.css",codeLang:"css",$$slots:{default:[Mt]},$$scope:{ctx:p}}}),M=new pe({props:{icon:"html",route:"src,routes",name:"+layout.svelte",codeLang:"html",$$slots:{default:[Ht]},$$scope:{ctx:p}}}),H=new Ct({props:{type:"TIP",$$slots:{default:[Pt]},$$scope:{ctx:p}}}),P=new pe({props:{icon:"html",route:"src",name:"app.html",codeLang:"html",$$slots:{default:[Et]},$$scope:{ctx:p}}}),E=new yt({props:{codeLang:"js",$$slots:{default:[Tt]},$$scope:{ctx:p}}}),D=new yt({props:{codeLang:"js",$$slots:{default:[Dt]},$$scope:{ctx:p}}}),A=new Ct({props:{icon:"codi",iconSize:"10",label:"Plsss",colorClass:"bg-stone-50 border-pink-800 text-lime-950",$$slots:{default:[Qt]},$$scope:{ctx:p}}}),I=new pe({props:{icon:"html",route:"src",name:"app.html",codeLang:"html",$$slots:{default:[At]},$$scope:{ctx:p}}}),{c(){i=o("p"),i.textContent=l,s=c(),g=o("hr"),h=c(),$=o("h2"),$.textContent=B,z=c(),x=o("p"),x.innerHTML=u,w=c(),b(j.$$.fragment),O=o("h2"),O.textContent=Oe,fe=c(),X=o("p"),X.innerHTML=Xe,ve=c(),b(L.$$.fragment),F=o("h2"),F.textContent=Fe,ge=c(),N=o("p"),N.innerHTML=Ne,we=c(),V=o("h3"),V.textContent=Ve,he=c(),K=o("p"),K.textContent=Ke,$e=c(),b(M.$$.fragment),de=o("blockquote"),b(H.$$.fragment),xe=c(),R=o("h3"),R.textContent=Re,be=c(),Y=o("p"),Y.textContent=Ye,ye=c(),b(P.$$.fragment),G=o("h4"),G.textContent=Ge,Ce=c(),J=o("p"),J.textContent=Je,ke=c(),b(E.$$.fragment),T=o("ul"),T.innerHTML=We,qe=c(),b(D.$$.fragment),W=o("p"),W.textContent=Ze,_e=c(),Q=o("ul"),Q.innerHTML=et,ze=c(),Z=o("p"),Z.textContent=tt,je=c(),ee=o("h3"),ee.textContent=nt,Le=c(),te=o("p"),te.textContent=at,Me=c(),ne=o("p"),ne.textContent=it,He=c(),me=o("p"),b(A.$$.fragment),Pe=c(),b(I.$$.fragment),ae=o("h2"),ae.textContent=lt,Ee=c(),ie=o("p"),ie.innerHTML=st,Te=c(),le=o("h2"),le.textContent=ot,De=c(),se=o("p"),se.innerHTML=rt,Qe=c(),oe=o("p"),oe.textContent=ct,Ae=c(),S=o("ol"),S.innerHTML=dt,Ie=c(),re=o("p"),re.textContent=mt,Se=c(),ce=o("p"),ce.innerHTML=ut,this.h()},l(e){i=r(e,"P",{"data-svelte-h":!0}),m(i)!=="svelte-n1cf4v"&&(i.textContent=l),s=d(e),g=r(e,"HR",{class:!0}),h=d(e),$=r(e,"H2",{"data-svelte-h":!0}),m($)!=="svelte-jtysce"&&($.textContent=B),z=d(e),x=r(e,"P",{"data-svelte-h":!0}),m(x)!=="svelte-hcq33d"&&(x.innerHTML=u),w=d(e),y(j.$$.fragment,e),O=r(e,"H2",{"data-svelte-h":!0}),m(O)!=="svelte-iiaisl"&&(O.textContent=Oe),fe=d(e),X=r(e,"P",{"data-svelte-h":!0}),m(X)!=="svelte-ci5h1d"&&(X.innerHTML=Xe),ve=d(e),y(L.$$.fragment,e),F=r(e,"H2",{"data-svelte-h":!0}),m(F)!=="svelte-16q4z4n"&&(F.textContent=Fe),ge=d(e),N=r(e,"P",{"data-svelte-h":!0}),m(N)!=="svelte-1qqmasb"&&(N.innerHTML=Ne),we=d(e),V=r(e,"H3",{"data-svelte-h":!0}),m(V)!=="svelte-6u2vfo"&&(V.textContent=Ve),he=d(e),K=r(e,"P",{"data-svelte-h":!0}),m(K)!=="svelte-dw4rtn"&&(K.textContent=Ke),$e=d(e),y(M.$$.fragment,e),de=r(e,"BLOCKQUOTE",{});var t=bt(de);y(H.$$.fragment,t),t.forEach(n),xe=d(e),R=r(e,"H3",{"data-svelte-h":!0}),m(R)!=="svelte-evjyqz"&&(R.textContent=Re),be=d(e),Y=r(e,"P",{"data-svelte-h":!0}),m(Y)!=="svelte-1orlaoy"&&(Y.textContent=Ye),ye=d(e),y(P.$$.fragment,e),G=r(e,"H4",{"data-svelte-h":!0}),m(G)!=="svelte-2yvpjx"&&(G.textContent=Ge),Ce=d(e),J=r(e,"P",{"data-svelte-h":!0}),m(J)!=="svelte-gg4r4q"&&(J.textContent=Je),ke=d(e),y(E.$$.fragment,e),T=r(e,"UL",{class:!0,"data-svelte-h":!0}),m(T)!=="svelte-1yds3q8"&&(T.innerHTML=We),qe=d(e),y(D.$$.fragment,e),W=r(e,"P",{"data-svelte-h":!0}),m(W)!=="svelte-7v7l22"&&(W.textContent=Ze),_e=d(e),Q=r(e,"UL",{class:!0,"data-svelte-h":!0}),m(Q)!=="svelte-1cy1awk"&&(Q.innerHTML=et),ze=d(e),Z=r(e,"P",{"data-svelte-h":!0}),m(Z)!=="svelte-1whh0nf"&&(Z.textContent=tt),je=d(e),ee=r(e,"H3",{"data-svelte-h":!0}),m(ee)!=="svelte-1lyh1ed"&&(ee.textContent=nt),Le=d(e),te=r(e,"P",{"data-svelte-h":!0}),m(te)!=="svelte-18e6okb"&&(te.textContent=at),Me=d(e),ne=r(e,"P",{"data-svelte-h":!0}),m(ne)!=="svelte-1x4i6l3"&&(ne.textContent=it),He=d(e),me=r(e,"P",{});var ue=bt(me);y(A.$$.fragment,ue),ue.forEach(n),Pe=d(e),y(I.$$.fragment,e),ae=r(e,"H2",{"data-svelte-h":!0}),m(ae)!=="svelte-x1yfv4"&&(ae.textContent=lt),Ee=d(e),ie=r(e,"P",{"data-svelte-h":!0}),m(ie)!=="svelte-3gn7s7"&&(ie.innerHTML=st),Te=d(e),le=r(e,"H2",{"data-svelte-h":!0}),m(le)!=="svelte-116szn7"&&(le.textContent=ot),De=d(e),se=r(e,"P",{"data-svelte-h":!0}),m(se)!=="svelte-1rptkz1"&&(se.innerHTML=rt),Qe=d(e),oe=r(e,"P",{"data-svelte-h":!0}),m(oe)!=="svelte-lsvq7e"&&(oe.textContent=ct),Ae=d(e),S=r(e,"OL",{class:!0,"data-svelte-h":!0}),m(S)!=="svelte-1jl73cp"&&(S.innerHTML=dt),Ie=d(e),re=r(e,"P",{"data-svelte-h":!0}),m(re)!=="svelte-1v57e90"&&(re.textContent=mt),Se=d(e),ce=r(e,"P",{"data-svelte-h":!0}),m(ce)!=="svelte-1sli01b"&&(ce.innerHTML=ut),this.h()},h(){Be(g,"class","svelte-1awqwjz"),Be(T,"class","svelte-1awqwjz"),Be(Q,"class","svelte-1awqwjz"),Be(S,"class","svelte-1awqwjz")},m(e,t){a(e,i,t),a(e,s,t),a(e,g,t),a(e,h,t),a(e,$,t),a(e,z,t),a(e,x,t),a(e,w,t),C(j,e,t),a(e,O,t),a(e,fe,t),a(e,X,t),a(e,ve,t),C(L,e,t),a(e,F,t),a(e,ge,t),a(e,N,t),a(e,we,t),a(e,V,t),a(e,he,t),a(e,K,t),a(e,$e,t),C(M,e,t),a(e,de,t),C(H,de,null),a(e,xe,t),a(e,R,t),a(e,be,t),a(e,Y,t),a(e,ye,t),C(P,e,t),a(e,G,t),a(e,Ce,t),a(e,J,t),a(e,ke,t),C(E,e,t),a(e,T,t),a(e,qe,t),C(D,e,t),a(e,W,t),a(e,_e,t),a(e,Q,t),a(e,ze,t),a(e,Z,t),a(e,je,t),a(e,ee,t),a(e,Le,t),a(e,te,t),a(e,Me,t),a(e,ne,t),a(e,He,t),a(e,me,t),C(A,me,null),a(e,Pe,t),C(I,e,t),a(e,ae,t),a(e,Ee,t),a(e,ie,t),a(e,Te,t),a(e,le,t),a(e,De,t),a(e,se,t),a(e,Qe,t),a(e,oe,t),a(e,Ae,t),a(e,S,t),a(e,Ie,t),a(e,re,t),a(e,Se,t),a(e,ce,t),Ue=!0},p(e,t){const ue={};t&1&&(ue.$$scope={dirty:t,ctx:e}),j.$set(ue);const pt={};t&1&&(pt.$$scope={dirty:t,ctx:e}),L.$set(pt);const ft={};t&1&&(ft.$$scope={dirty:t,ctx:e}),M.$set(ft);const vt={};t&1&&(vt.$$scope={dirty:t,ctx:e}),H.$set(vt);const gt={};t&1&&(gt.$$scope={dirty:t,ctx:e}),P.$set(gt);const wt={};t&1&&(wt.$$scope={dirty:t,ctx:e}),E.$set(wt);const ht={};t&1&&(ht.$$scope={dirty:t,ctx:e}),D.$set(ht);const $t={};t&1&&($t.$$scope={dirty:t,ctx:e}),A.$set($t);const xt={};t&1&&(xt.$$scope={dirty:t,ctx:e}),I.$set(xt)},i(e){Ue||(k(j.$$.fragment,e),k(L.$$.fragment,e),k(M.$$.fragment,e),k(H.$$.fragment,e),k(P.$$.fragment,e),k(E.$$.fragment,e),k(D.$$.fragment,e),k(A.$$.fragment,e),k(I.$$.fragment,e),Ue=!0)},o(e){q(j.$$.fragment,e),q(L.$$.fragment,e),q(M.$$.fragment,e),q(H.$$.fragment,e),q(P.$$.fragment,e),q(E.$$.fragment,e),q(D.$$.fragment,e),q(A.$$.fragment,e),q(I.$$.fragment,e),Ue=!1},d(e){e&&(n(i),n(s),n(g),n(h),n($),n(z),n(x),n(w),n(O),n(fe),n(X),n(ve),n(F),n(ge),n(N),n(we),n(V),n(he),n(K),n($e),n(de),n(xe),n(R),n(be),n(Y),n(ye),n(G),n(Ce),n(J),n(ke),n(T),n(qe),n(W),n(_e),n(Q),n(ze),n(Z),n(je),n(ee),n(Le),n(te),n(Me),n(ne),n(He),n(me),n(Pe),n(ae),n(Ee),n(ie),n(Te),n(le),n(De),n(se),n(Qe),n(oe),n(Ae),n(S),n(Ie),n(re),n(Se),n(ce)),_(j,e),_(L,e),_(M,e),_(H),_(P,e),_(E,e),_(D,e),_(A),_(I,e)}}}function St(p){let i,l;return i=new jt({props:{$$slots:{default:[It]},$$scope:{ctx:p}}}),{c(){b(i.$$.fragment)},l(s){y(i.$$.fragment,s)},m(s,g){C(i,s,g),l=!0},p(s,[g]){const h={};g&1&&(h.$$scope={dirty:g,ctx:s}),i.$set(h)},i(s){l||(k(i.$$.fragment,s),l=!0)},o(s){q(i.$$.fragment,s),l=!1},d(s){_(i,s)}}}class Kt extends _t{constructor(i){super(),zt(this,i,null,St,kt,{})}}export{Kt as default};
