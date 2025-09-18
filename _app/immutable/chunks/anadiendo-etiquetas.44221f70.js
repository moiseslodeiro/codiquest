import{s as j}from"./scheduler.38f5b73a.js";import{S as T,i as B,r as h,u as x,v as y,d as E,t as w,w as C,g as f,s as q,h as g,x as _,c as b,a as r,f as c,m as D,n as H}from"./index.33e8e8ec.js";import{P as L}from"./File.svelte_svelte_type_style_lang.9085771d.js";import"./paths.3b9e6dc4.js";import{F as P}from"./File.c8ff549e.js";function z(u){let e;return{c(){e=D(`export const moduleInfo = {
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
    module: 'chuchu',
    labels: [
      'etiquetaA',
      'etiquetaB'
    ]
  }
];
`)},l(a){e=H(a,`export const moduleInfo = {
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
    module: 'chuchu',
    labels: [
      'etiquetaA',
      'etiquetaB'
    ]
  }
];
`)},m(a,n){r(a,e,n)},d(a){a&&c(e)}}}function A(u){let e,a="¿Has visto la barra superior junto a la sección <strong>Documentación</strong> (o si la ves en móvil, la lupa en la parte superior)? Eso es una <strong>barra de búsqueda</strong> que nos ayuda a <strong>localizar el contenido</strong> de manera rápida y sencilla. Su funcionamiento es sencillo: busca en los <strong>títulos</strong> de los niveles y páginas las palabras que introduzcas.",n,s,m='<strong>¿Y eso es todo?</strong> No, todavía hay más. En cada nivel podemos incluir un campo llamado <code class="svelte-1awqwjz">labels</code>, que permite añadir <strong>palabras clave o etiquetas</strong> relacionadas con ese contenido. Esto facilita que la búsqueda sea más precisa y efectiva, ya que no solo busca en los títulos, sino también en estas etiquetas extras. De este modo, el contenido es mucho más <strong>accesible</strong> y <strong>fácil de encontrar</strong>. ¿No es fantástico? 🤗',d,l,i,$='De esta forma, además de poder encontrar la página por palabras sueltas como "enlace", "módulo" o "chuchu", también podremos localizarla mediante las etiquetas "etiquetaA" y "etiquetaB". Estas etiquetas aparecerán visibles en el listado general cuando se muestre el módulo, facilitando la búsqueda y haciendo el contenido más accesible y fácil de encontrar.',p;return l=new P({props:{icon:"js",route:"src,modules",name:"dummy.js",codeLang:"js",$$slots:{default:[z]},$$scope:{ctx:u}}}),{c(){e=f("p"),e.innerHTML=a,n=q(),s=f("p"),s.innerHTML=m,d=q(),h(l.$$.fragment),i=f("p"),i.textContent=$},l(t){e=g(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-1yllagw"&&(e.innerHTML=a),n=b(t),s=g(t,"P",{"data-svelte-h":!0}),_(s)!=="svelte-7nsgyu"&&(s.innerHTML=m),d=b(t),x(l.$$.fragment,t),i=g(t,"P",{"data-svelte-h":!0}),_(i)!=="svelte-1x55kn5"&&(i.textContent=$)},m(t,o){r(t,e,o),r(t,n,o),r(t,s,o),r(t,d,o),y(l,t,o),r(t,i,o),p=!0},p(t,o){const v={};o&1&&(v.$$scope={dirty:o,ctx:t}),l.$set(v)},i(t){p||(E(l.$$.fragment,t),p=!0)},o(t){w(l.$$.fragment,t),p=!1},d(t){t&&(c(e),c(n),c(s),c(d),c(i)),C(l,t)}}}function I(u){let e,a;return e=new L({props:{$$slots:{default:[A]},$$scope:{ctx:u}}}),{c(){h(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,s){y(e,n,s),a=!0},p(n,[s]){const m={};s&1&&(m.$$scope={dirty:s,ctx:n}),e.$set(m)},i(n){a||(E(e.$$.fragment,n),a=!0)},o(n){w(e.$$.fragment,n),a=!1},d(n){C(e,n)}}}class Y extends T{constructor(e){super(),B(this,e,null,I,j,{})}}export{Y as default};
