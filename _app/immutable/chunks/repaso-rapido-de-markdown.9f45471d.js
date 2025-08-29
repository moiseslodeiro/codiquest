import{s as H}from"./scheduler.ddf3e249.js";import{S,i as G,r as k,u as j,v as M,d as x,t as z,w as E,g as q,s as _,h as b,x as T,c as h,j as B,f as r,k as I,a as i,m as P,n as A}from"./index.3ca611f3.js";import{P as O}from"./File.svelte_svelte_type_style_lang.d0caee9a.js";import{M as R}from"./Message.069052d5.js";import{M as F}from"./ModalImage.9abc2c0f.js";import{F as U}from"./File.3c661f67.js";import"./paths.8765ca36.js";function D(c){let n;return{c(){n=P(`# Título Principal

Este es un archivo Markdown básico. A continuación se muestran algunos ejemplos de sintaxis comunes (más adelante veremos sintaxis extendida)

##  Subtítulo

Aquí puedes escribir párrafos normales. Markdown te permite **resaltar en negrita**, *en cursiva*, o incluso ***ambos estilos a la vez***.

## # Lista

- Elemento 1
- Elemento 2
- Elemento 3

## # Lista numerada

1. Primer paso
2. Segundo paso
3. Tercer paso

## # Enlace

Puedes visitar [Codiquest](https://www.codiquest.com) para más información.

## # Imagen

![Texto alternativo](/static/img/logo.png)
![Texto alternativo](/static/img/logo.png?size=...&align=...) <-- Este no es un estándar de Markdown, pero se puede usar con total compatibilidad

## # Bloque de código

\`\`\`js
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)));
\`\`\`

## # Cita

> Esto es una cita.
> Se puede extender en varias líneas.

## # Línea horizontal

---
`)},l(t){n=A(t,`# Título Principal

Este es un archivo Markdown básico. A continuación se muestran algunos ejemplos de sintaxis comunes (más adelante veremos sintaxis extendida)

##  Subtítulo

Aquí puedes escribir párrafos normales. Markdown te permite **resaltar en negrita**, *en cursiva*, o incluso ***ambos estilos a la vez***.

## # Lista

- Elemento 1
- Elemento 2
- Elemento 3

## # Lista numerada

1. Primer paso
2. Segundo paso
3. Tercer paso

## # Enlace

Puedes visitar [Codiquest](https://www.codiquest.com) para más información.

## # Imagen

![Texto alternativo](/static/img/logo.png)
![Texto alternativo](/static/img/logo.png?size=...&align=...) <-- Este no es un estándar de Markdown, pero se puede usar con total compatibilidad

## # Bloque de código

\`\`\`js
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)));
\`\`\`

## # Cita

> Esto es una cita.
> Se puede extender en varias líneas.

## # Línea horizontal

---
`)},m(t,a){i(t,n,a)},d(t){t&&r(n)}}}function K(c){let n;return{c(){n=P("Aunque el uso de Markdown no es obligatorio, sí que es recomendable, ya que te ahorra mucho tiempo a la hora de estructurar, vincular y dar formato a las páginas. Además, tiene la ventaja de que es compatible con visores de Markdown como el integrado en GitHub, por lo que el formato que le des aquí, en su mayoría, será compatible con lo que puedas ver de forma remota en GitHub (entre otros).")},l(t){n=A(t,"Aunque el uso de Markdown no es obligatorio, sí que es recomendable, ya que te ahorra mucho tiempo a la hora de estructurar, vincular y dar formato a las páginas. Además, tiene la ventaja de que es compatible con visores de Markdown como el integrado en GitHub, por lo que el formato que le des aquí, en su mayoría, será compatible con lo que puedas ver de forma remota en GitHub (entre otros).")},m(t,a){i(t,n,a)},d(t){t&&r(n)}}}function N(c){let n,t='Markdown es el lenguaje que usamos en Codiquest para escribir textos con formato de forma rápida y legible. Es como escribir en texto plano, pero vitaminado con <a href="https://es.wikipedia.org/wiki/Gofio" class="link link-primary wikipedia" target="_blank" rel="noopener noreferrer">gofio</a> una vez que se convierte. Con Markdown (ficheros con extensión <code class="svelte-1awqwjz">.md</code>), puedes:',a,o,f='<li class="svelte-1awqwjz">Poner títulos usando <code class="svelte-1awqwjz">#</code>.</li> <li class="svelte-1awqwjz">Poner subtítulos (y consecutivos) usando <code class="svelte-1awqwjz">##</code>, <code class="svelte-1awqwjz">###</code>, etc.</li> <li class="svelte-1awqwjz">Poner listas numéricas o normales con <code class="svelte-1awqwjz">-</code> o <code class="svelte-1awqwjz">*</code>.</li> <li class="svelte-1awqwjz">Resaltar cosas en <strong>negrita</strong> o <em>cursiva</em> con <code class="svelte-1awqwjz">**negrita**</code> y <code class="svelte-1awqwjz">*cursiva*</code>, respectivamente.</li> <li class="svelte-1awqwjz">E, incluso, meter enlaces, imágenes o bloques de código personalizados.</li>',g,m,L='Aunque a estas alturas ya puedas suponerlo, todos los módulos que puedes ver en la documentación de Codiquest se han hecho así, partiendo de un fichero Markdown. A continuación, se muestra un ejemplo básico de un fichero <code class="svelte-1awqwjz">.md</code>:',w,l,p,u,v,d,$;return l=new U({props:{icon:"markdown",route:"src,raw,test",name:"test.md",codeLang:"markdown",$$slots:{default:[D]},$$scope:{ctx:c}}}),u=new R({props:{type:"NOTE",$$slots:{default:[K]},$$scope:{ctx:c}}}),d=new F({props:{src:"img/install/compare.png",alignment:"center",width:"w-5/6",alt:"Comparativa Markdown en Codiquest y Github",modal:"true"}}),{c(){n=q("p"),n.innerHTML=t,a=_(),o=q("ul"),o.innerHTML=f,g=_(),m=q("p"),m.innerHTML=L,w=_(),k(l.$$.fragment),p=q("blockquote"),k(u.$$.fragment),v=_(),k(d.$$.fragment),this.h()},l(e){n=b(e,"P",{"data-svelte-h":!0}),T(n)!=="svelte-e5ejos"&&(n.innerHTML=t),a=h(e),o=b(e,"UL",{class:!0,"data-svelte-h":!0}),T(o)!=="svelte-3psal8"&&(o.innerHTML=f),g=h(e),m=b(e,"P",{"data-svelte-h":!0}),T(m)!=="svelte-8rmr7m"&&(m.innerHTML=L),w=h(e),j(l.$$.fragment,e),p=b(e,"BLOCKQUOTE",{});var s=B(p);j(u.$$.fragment,s),s.forEach(r),v=h(e),j(d.$$.fragment,e),this.h()},h(){I(o,"class","svelte-1awqwjz")},m(e,s){i(e,n,s),i(e,a,s),i(e,o,s),i(e,g,s),i(e,m,s),i(e,w,s),M(l,e,s),i(e,p,s),M(u,p,null),i(e,v,s),M(d,e,s),$=!0},p(e,s){const C={};s&1&&(C.$$scope={dirty:s,ctx:e}),l.$set(C);const y={};s&1&&(y.$$scope={dirty:s,ctx:e}),u.$set(y)},i(e){$||(x(l.$$.fragment,e),x(u.$$.fragment,e),x(d.$$.fragment,e),$=!0)},o(e){z(l.$$.fragment,e),z(u.$$.fragment,e),z(d.$$.fragment,e),$=!1},d(e){e&&(r(n),r(a),r(o),r(g),r(m),r(w),r(p),r(v)),E(l,e),E(u),E(d,e)}}}function Q(c){let n,t;return n=new O({props:{$$slots:{default:[N]},$$scope:{ctx:c}}}),{c(){k(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,o){M(n,a,o),t=!0},p(a,[o]){const f={};o&1&&(f.$$scope={dirty:o,ctx:a}),n.$set(f)},i(a){t||(x(n.$$.fragment,a),t=!0)},o(a){z(n.$$.fragment,a),t=!1},d(a){E(n,a)}}}class ne extends S{constructor(n){super(),G(this,n,null,Q,H,{})}}export{ne as default};
