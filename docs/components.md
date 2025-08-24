# Componentes

Codiquest se concibió, desde sus inicios, como una herramienta para enseñar programación de forma dinámica y divertida. El primer módulo creado fue el de `Code` (código), diseñado para ilustrar ejemplos de código de manera sencilla y visual.

# Componentes - Code

Para utilizar el elemento `Code`, puedes importarlo directamente desde la carpeta de componentes y emplearlo de diversas maneras, como se muestra a continuación:

## Bloque Code

La primera forma es usar el bloque `Code`, indicando el lenguaje que queramos resaltar y, en su interior, el código que queramos mostrar.

> [!NOTE]
> Aunque lo mencionaremos más adelante, en este segmento también importamos el template `Page`, que servirá para añadir algo de estilo a esa página en concreto y, además, añadir, de forma automática, componentes como los botones para avanzar o retroceder de página.

```js
<script>
  import Code from '$lib/components/Code.svelte';
  import Page from '$lib/templates/Page.svelte';
</script>

<Page>
  <p>
    En el siguiente bloque podemos ver cómo, haciendo uso de la librería Prisma, podemos mostrar
    bloques de código (en este caso, del lenguaje javascript)
  </p>
  <Code codeLang="js">
    const x = 25;
    let y = 2;
    const sum1 = x + y; // sum1 vale 27
    y = 5;
    const sum2 = x + y; // sum2 vale 32; console.log(sum1, sum2)
  </Code>
</Page>
```

Si ahora recargamos nuestra página, podremos ver el código que acabamos de poner 🤹. ¿Sencillo, no? Pues... no tanto.

⚠️ Debido a **cómo Svelte interpreta algunos caracteres internos** de los scripts, existen limitaciones con caracteres como las llaves `{}` o los símbolos de menor o mayor que `<>` (necesarios para funciones o bloques HTML, entre otras), teniéndose que reemplazar por sus equivalentes en HTML. Más adelante, cuando veamos cómo automatizar la creación de contenido, esto será un problema del cual **no tendremos que preocuparnos**.

> [!IMPORTANT]
> Hasta la fecha, solo es necesario reemplazar `{` por `&#123;` o `&lbrace;`, `}` por `&#125;` o `&rbrace;`, `<` por `&#60;` o `&lt;` y `>` por `&#62;` o `&gt;`. Si algún otro carácter causa problemas, habría que encontrar una solución similar.

De este modo, si quieres mostrar una función, el resultado **dentro** del bloque `Code` debería verse así:

```js
function suma(a, b) &lbrace; // <-- lbrace es {
  return a + b;
&rbrace; // <-- rbrace es }

if (suma(1, 2) &lt; 4) &lbrace; // <-- lt es < , lbrace es {
  console.log('Las matemáticas siguen siendo matemáticas');
&rbrace; // <-- rbrace es }
```

Para que se muestre así:

```` Browser
```js
function suma(a, b) {
  return a + b;
}

if (suma(1, 2) < 4) {
  console.log('Las matemáticas siguen siendo matemáticas');
}
```
````

Para que luego pueda aparecer así:

```` Browser
```js
function suma(a, b) {
  return a + b;
}

if (suma(1, 2) < 4) {
  console.log('Las matemáticas siguen siendo matemáticas');
}
```
````

## Usando codeBlock

La primera opción es limpia en cuanto a formato, pero, como habíamos comentado, algo engorrosa si se quiere hacer uso de elementos que pueden ser disruptivos para Svelte (como los `{}`). ¡Pero existen alternativas! En lugar de hacer uso del bloque `Code` tal cual, con el código dentro, se puede incluir el código dentro del atributo `codeBlock` o utilizar una `constante` con una `string multilínea` y pasar esa variable como parámetro al componente. Dos ejemplos:

```js
<script>
  import Code from '$lib/components/Code.svelte';
  import Page from '$lib/templates/Page.svelte';
</script>

<Page>
  <p>
    En el siguiente bloque podemos ver cómo, haciendo uso de la librería Prisma, podemos mostrar
    bloques de código (en este caso, del lenguaje javascript)
  </p>
  <!-- Fíjate que estamos metiendo el bloque de código directamente en `codeBlock` -->
  <Code codeLang="js" codeBlock={`function suma(a, b) {
  return a + b;
}

if (suma(1, 2) < 4) {
  console.log('Las matemáticas siguen siendo matemáticas');
}`} />
</Page>

```

```js
<script>
  import Code from '$lib/components/Code.svelte';
  import Page from '$lib/templates/Page.svelte';

  const codeBlock = `function suma(a, b) {
  return a + b;
}

if (suma(1, 2) < 4) {
  console.log('Las matemáticas siguen siendo matemáticas');
}`
</script>

<Page>
  <p>
    En el siguiente bloque podemos ver cómo, haciendo uso de la librería Prisma, podemos mostrar
    bloques de código (en este caso, del lenguaje javascript)
  </p>
  <Code codeLang="js" codeBlock={codeBlock} />
</Page>
```

> [!TIP]
> Aquí lo único que hay que tener en cuenta es que se debe tener cuidado con las comillas de acento grave (backtick) (`), debido a que es el carácter que se utiliza como inicio y fin de una `string` multilínea.

## Añadiendo lenguajes al resaltado de sintaxis

Por motivos de optimización, no todos los lenguajes o sintaxis se encuentran dentro de la lista de posibles lenguajes. Por defecto, el módulo que le da color al código, `prismjs`, viene cargado con los siguientes lenguajes (y sintaxis): `html`, `xml`, `bash`, `svg`, `css`, `c-like`, `javascript`, `docker`, `git`, `go`, `hcl`, `java`, `kotlin`, `markdown`, `php`, `psql`, `powershell`, `python`, `regex`, `ruby`, `rust`, `sql`, `typescript` y `yaml`. En resumen, aquellos pertenecientes al top 10 de 2025 y los que he considerado útiles para esta plataforma 😄.

Lo bueno es que añadir o quitar un lenguaje es trivial. Primero, visita la página de [prismjs](https://prismjs.com/download#themes=prism-funky&languages=markup+css+clike+javascript+docker+git+go+go-module+hcl+java+kotlin+markdown+markup-templating+php+plsql+powershell+python+regex+ruby+rust+sql+typescript+yaml
) con los lenguajes comentados con anterioridad premarcados.

Una vez abierta la página, solo debes seleccionar aquellos lenguajes o sintaxis que quieras resaltar, copiar el bloque de `javascript` que aparece en la parte inferior y pegarlo en el fichero `prism.js`, que se encuentra dentro de `src/lib/third/prism/prism.js`. Salvo que se quiera cambiar el esquema de colores o añadir alguno de los plugins que ofrece prismjs, no es necesario modificar el fichero CSS, localizado también bajo `src/lib/third/prism/`.

Una vez que el lenguaje se incluya dentro del fichero `prism.js`, se puede usar dentro de los bloques, en el atributo `codeLang` del componente.

### Ejemplo

Vamos a ilustrar cómo meter un nuevo lenguaje o resaltado de sintaxis en nuestro código. Para ello, tal y como comentamos en el apartado anterior, abriremos el archivo `prism.js`.

```` File icon="js" name="prism.js" route="src,lib,third,prism" codeLang="js"
/* PrismJS 1.30.0
https://prismjs.com/download#themes=prism-funky&languages=markup+css+clike+javascript+bash+c+csharp+cpp+django+docker+git+go+graphql+hcl+http+java+makefile+markdown+markup-templating+pcaxis+php+plsql+regex+ruby+rust+sql+typescript+yaml */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var P=w.value;if(n.length>e.length)return;if(!(P instanceof i)){var E,S=1;if(y){if(!(E=l(b,A,e,m))||E.index>=e.length)break;var L=E.index,O=E.index+E[0].length,C=A;for(C+=w.value.length;L>=C;)C+=(w=w.next).value.length;if(A=C-=w.value.length,w.value instanceof i)continue;for(var j=w;j!==n.tail&&(C<O||"string"==typeof j.value);j=j.next)S++,C+=j.value.length;S--,P=e.slice(A,C),E.index-=A}else if(!(E=l(b,0,P,m)))continue;L=E.index;var N=E[0],_=P.slice(0,L),M=P.slice(L+N.length),W=A+P.length;g&&W>g.reach&&(g.reach=W);var I=w.prev;if(_&&(I=u(n,I,_),A+=_.length),c(n,I,S),w=u(n,I,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),S>1){var T={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,T),g&&T.reach>g.reach&&(g.reach=T.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
````

Ahora iremos al final del fichero y añadiremos el lenguaje o la sintaxis que queramos resaltar. Supongamos que queremos introducir `Smali` (código "ensamblador" para `Android`).

1. Vamos a [prism.js](https://prismjs.com/download#themes=prism-okaidia&languages=smali)
2. Seleccionamos el código `Smali`
3. Copiamos el fragmento de código que aparece en la parte inferior, **descartando** los comentarios y la línea que empieza por `var _self="undefined"!=type...`
4. Pegamos el código al **final** de nuestro fichero `prism.js`

```js
// Ignoramos este comentario ⬇️
/* PrismJS 1.30.0
https://prismjs.com/download#themes=prism-okaidia&languages=smali */

// Ignoramos esta línea ⬇️
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var P=w.value;if(n.length>e.length)return;if(!(P instanceof i)){var E,S=1;if(y){if(!(E=l(b,A,e,m))||E.index>=e.length)break;var L=E.index,O=E.index+E[0].length,C=A;for(C+=w.value.length;L>=C;)C+=(w=w.next).value.length;if(A=C-=w.value.length,w.value instanceof i)continue;for(var j=w;j!==n.tail&&(C<O||"string"==typeof j.value);j=j.next)S++,C+=j.value.length;S--,P=e.slice(A,C),E.index-=A}else if(!(E=l(b,0,P,m)))continue;L=E.index;var N=E[0],_=P.slice(0,L),M=P.slice(L+N.length),W=A+P.length;g&&W>g.reach&&(g.reach=W);var I=w.prev;if(_&&(I=u(n,I,_),A+=_.length),c(n,I,S),w=u(n,I,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),S>1){var T={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,T),g&&T.reach>g.reach&&(g.reach=T.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);

// Copiamos a partir de aquí ⬇️
Prism.languages.smali={comment:/#.*/,string:{pattern:/"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,greedy:!0},"class-name":{pattern:/(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,lookbehind:!0,inside:{"class-name":{pattern:/(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,lookbehind:!0},namespace:{pattern:/^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,lookbehind:!0,inside:{punctuation:/\//}},builtin:/^L/}},builtin:[{pattern:/([();\[])[BCDFIJSVZ]+/,lookbehind:!0},{pattern:/([\w$>]:)[BCDFIJSVZ]/,lookbehind:!0}],keyword:[{pattern:/(\.end\s+)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])\.(?!\d)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,lookbehind:!0}],function:{pattern:/(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,lookbehind:!0},field:{pattern:/[\w$]+(?=:)/,alias:"variable"},register:{pattern:/(^|[^\w.-])[vp]\d(?![\w.-])/,lookbehind:!0,alias:"variable"},boolean:{pattern:/(^|[^\w.-])(?:false|true)(?![\w.-])/,lookbehind:!0},number:{pattern:/(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,lookbehind:!0},label:{pattern:/(:)\w+/,lookbehind:!0,alias:"property"},operator:/->|\.\.|[\[=]/,punctuation:/[{}(),;:]/};
```

De forma que nuestro archivo quedaría así:


```` File icon="js" name="prism.js" route="src,lib,third,prism" codeLang="js"
/* PrismJS 1.30.0
https://prismjs.com/download#themes=prism-funky&languages=markup+css+clike+javascript+bash+c+csharp+cpp+django+docker+git+go+graphql+hcl+http+java+makefile+markdown+markup-templating+pcaxis+php+plsql+regex+ruby+rust+sql+typescript+yaml */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var P=w.value;if(n.length>e.length)return;if(!(P instanceof i)){var E,S=1;if(y){if(!(E=l(b,A,e,m))||E.index>=e.length)break;var L=E.index,O=E.index+E[0].length,C=A;for(C+=w.value.length;L>=C;)C+=(w=w.next).value.length;if(A=C-=w.value.length,w.value instanceof i)continue;for(var j=w;j!==n.tail&&(C<O||"string"==typeof j.value);j=j.next)S++,C+=j.value.length;S--,P=e.slice(A,C),E.index-=A}else if(!(E=l(b,0,P,m)))continue;L=E.index;var N=E[0],_=P.slice(0,L),M=P.slice(L+N.length),W=A+P.length;g&&W>g.reach&&(g.reach=W);var I=w.prev;if(_&&(I=u(n,I,_),A+=_.length),c(n,I,S),w=u(n,I,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),S>1){var T={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,T),g&&T.reach>g.reach&&(g.reach=T.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};

// Código Smali ⬇️
Prism.languages.smali={comment:/#.*/,string:{pattern:/"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,greedy:!0},"class-name":{pattern:/(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,lookbehind:!0,inside:{"class-name":{pattern:/(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,lookbehind:!0},namespace:{pattern:/^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,lookbehind:!0,inside:{punctuation:/\//}},builtin:/^L/}},builtin:[{pattern:/([();\[])[BCDFIJSVZ]+/,lookbehind:!0},{pattern:/([\w$>]:)[BCDFIJSVZ]/,lookbehind:!0}],keyword:[{pattern:/(\.end\s+)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])\.(?!\d)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,lookbehind:!0}],function:{pattern:/(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,lookbehind:!0},field:{pattern:/[\w$]+(?=:)/,alias:"variable"},register:{pattern:/(^|[^\w.-])[vp]\d(?![\w.-])/,lookbehind:!0,alias:"variable"},boolean:{pattern:/(^|[^\w.-])(?:false|true)(?![\w.-])/,lookbehind:!0},number:{pattern:/(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,lookbehind:!0},label:{pattern:/(:)\w+/,lookbehind:!0,alias:"property"},operator:/->|\.\.|[\[=]/,punctuation:/[{}(),;:]/};
````

Para usarlo, ahora podemos crear un componente de tipo `Code` donde `codeLang` sea **`smali`** 😄.

## Atributos del bloque Code

- `showLines`: `true` o `false`. Determina si se muestran las líneas junto al código. Por defecto, el valor es `true`.
- `codeLang`: Lenguaje o sintaxis que se quiera resaltar. Consulta el apartado superior `Añadiendo lenguajes al resaltado de sintaxis` para más información.
- `codeBlock`: Bloque de código a través del atributo `codeBlock` si no se ha utilizado desde dentro del propio componente `<Code></Code>`.

# Componentes - Alert

Si quieres incluir un mensaje de alerta en tu sección del módulo, puedes hacer uso del componente `Alert`.

```js
<script>
  import Alert from '$lib/components/Alert.svelte';
  import Page from '$lib/templates/Page.svelte';
</script>

<Page>
  <Alert type="success" message="Guardado correctamente" />
  <Alert type="error" message="Ups!" />
  <Alert type="warning" message="Algo ha ido mal..." />
  <Alert type="info" message="Todo ha salido a pedir de Milhouse" />
</Page>
```

Esto daría un resultado como este:

```` Browser
``` Alert type="success"
Guardado correctamente
```

``` Alert type="error"
Ups!
```

``` Alert type="warning"
Algo ha ido mal...
```

``` Alert type="info"
Todo ha salido a pedir de Milhouse
```
````

## Atributos

- `message`: Mensaje que se quiera incluir dentro del cuadro de alerta.
- `type`: Tipo del mensaje. Puede ser `info`, `success`, `warning` o `error`.


# Componentes - Files

Este bloque simula un archivo dentro de un editor de código. Se puede personalizar para agregar un icono, mostrar las líneas, cambiar el lenguaje, incluir la ruta donde está el archivo, etc.

```js
<script>
import File from '$lib/components/File.svelte';
import Page from '$lib/templates/Page.svelte';
const codeBlock = `export let moduleInfo = {
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
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  }
];`
</script>

<Page>
  <File name="dummy.js" codeLang="js" icon="js" route="src,modules" content={ codeBlock } />
</Page>
```

Esto daría como resultado el siguiente bloque:

```` File name="dummy.js" codeLang="js" icon="js" route="src,modules"
export let moduleInfo = {
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
    page: 'basic/goodbyeworld',
    title: 'Adios!'
  }
];
````

> [!Note]
> Aunque suene repetitivo, no hay que olvidar escapar las llaves (`{}` y `}`) y los símbolos de menor/mayor que (`<` y `>`).

## Atributos

- `showLines`: `true` o `false`. Determina si se muestran las líneas junto al código. Por defecto, el valor es `true`.
- `codeLang`: Lenguaje o sintaxis que quiera resaltarse. Consulta el apartado superior `Añadiendo lenguajes al resaltado de sintaxis` para más información.
- `codeBlock`: Bloque de código a través del atributo `codeBlock` si no se ha utilizado desde dentro del propio componente `<Code></Code>`.
- `icon`: Icono (de la carpeta `static/icons`) que represente el fichero (por ejemplo, `js`).
- `route`: Ruta, separada por comas (`,`), donde se quiere mostrar el fichero.
- `name`: Nombre del fichero que se va a representar.

# Componentes - Message

El componente `Message`, o en su equivalencia al Markdown [extendido de GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts), equivale a mostrar un mensaje en pantalla de un tipo en concreto como consejos (tips), anotaciones (note), mensajes importantes (important), alertas (warning) y cosas con las que hay que tener precaución (caution).

Toma como ejemplo este fichero svelte:

```` File icon="svelte" route="src,modules,foo" name="test.svelte" codeLang="javascript"
<script>
  import Message from '$lib/components/Message.svelte';
  import Page from '$lib/templates/Page.svelte';
</script>

<Page>
  <p>¡Ahora veremos cómo funcionan estos mensajes!</p>
  <blockquote>
  <Message type="TIP">Este es un mensaje de tipo TIP</Message></blockquote>
  <blockquote>
  <Message type="NOTE">Este es un mensaje de tipo NOTE</Message></blockquote>
  <blockquote>
  <Message type="IMPORTANT">Este es un mensaje de tipo IMPORTANT</Message></blockquote>
  <blockquote>
  <Message type="WARNING">Este es un mensaje de tipo WARNING</Message></blockquote>
  <blockquote>
  <Message type="CAUTION">Este es un mensaje de tipo CAUTION</Message></blockquote>
</Page>
````

El resultado, al ser procesado, sería:

---

```` Browser
¡Ahora veremos cómo funcionan estos mensajes!

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
````

Cabe destacar que estos componentes, tal y como se mencionó, son compatibles con el Markdown de GitHub y su diseño es muy similar, por lo que no habrá problemas a la hora de utilizarlos en tu página y que al mismo tiempo se vean bien en GitHub.

No obstante, también podemos personalizarlo haciendo uso de sus atributos como icon, label, etc de la siguiente manera

```html
<Message icon="quote" label="Cita" colorClass="bg-amber-100 border-amber-900 text-amber-950">Un libro es un sueño que tienes en tus manos - Neil Gaiman</Message>
```

Cuyo resultado sería

```` Browser
<Message icon="quote" label="Cita" colorClass="bg-amber-100 border-amber-900 text-amber-950">Un libro es un sueño que tienes en tus manos - Neil Gaiman</Message>
````

> [!CAUTION]
> A pesar de ser un contenido estático y no recibir input por parte de los usuarios, estamos incluyendo HTML dentro de nuestro Markdown, por lo que usa esto con cuidado para no cargar contenido indebido.

## Atributos

- `type`: Indica el tipo de mensaje de alerta:
  - `TIP`, `NOTE`, `IMPORTANT`, `WARNING` y `CAUTION`
- `icon`: Por defecto, tendrá el valor del tipo (`tip`, `info`, `warning`, etc.), aunque puedes especificarle uno **sin** indicar la extensión, ya que lo buscará dentro de `static/icons`. Ejemplo: `quote`.
- `label`: Texto que se mostrará como etiqueta (encabezado) del mensaje.
- `colorClass`: Define el color del borde (`border-`), el color del fondo (`bg-`) y el color del texto (`text-`) haciendo uso de la paleta de colores definida en Tailwind.

## Recursos

- Paleta de colores de Tailwind: https://tailwindcss.com/docs/colors
- Colores de borde de Tailwind: https://tailwindcss.com/docs/border-color

# Componentes - Browser

El componente `Browser` es meramente decorativo. Sirve para encajar contenido (sea HTML o no) dentro de la vista de una ventana de un navegador.

```` File icon="svelte" route="src,modules,foo" name="test.svelte" codeLang="js"
<script>
  import Message from '$lib/components/Message.svelte';
  import Page from '$lib/templates/Page.svelte';
  import Code from '$lib/components/Code.svelte';
  import Browser from '$lib/components/Browser.svelte';
</script>

<Page>
  <Browser>
    <p>Vamos a ver cómo crear una constante x y asignarle el valor 1+2</p>
    <Code codeLang="js">
      const x = 1 + 2;
    </Code>
  </Browser>
</Page>
````

El resultado de este fichero sería:

```` Browser
Vamos a ver cómo crear una constante x y asignarle el valor 1 + 2
```js
const x = 1 + 2;
```
````

## Atributos

El componente `Browser` no tiene atributos.

# Componentes - ModalImage

El componente `ModalImage` sirve para mostrar una imagen que, al hacer clic sobre ella, se abrirá en un tamaño superior (modal).

```` File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html"
<script>
  import ModalImage from '$lib/components/ModalImage.svelte';
  import Page from '$lib/templates/Page.svelte';
</script>
<Page>
  <p>Aquí vemos cómo quedaría Codiquest recién instalado 🤭</p>
  <ModalImage src="img/install/01.png" alt="Mi descripcion" modal="true" />
</Page>
````

```` Browser
Aquí vemos cómo quedaría Codiquest recién instalado 🤭
![Mi descripcion](/static/img/install/03.png?size=w-1/2&align=center)
````

> [!CAUTION]
> El componente no está optimizado, por lo que las imágenes se cargarán a su tamaño original. Evita usar imágenes muy grandes.

## Atributos

- `src`: Origen de la imagen. Debe ser una imagen local (ubicada en `static`) o una URL (HTTP/S).
- `alt`: Descripción alternativa de la imagen. No solo mejora el posicionamiento SEO del sitio web, sino que también ayuda a la accesibilidad.
- `width`: Atributo para indicar el ancho de la imagen. Para respetar el uso de tailwind que está por encima, se ha hecho uso de los mismos [parámetros](https://tailwindcss.com/docs/width).
  - Ejemplo: `w-[500px]`, `w-1/2`, etc.
- `modal`: `true` o `false`. Indica si queremos que la imagen sea modal (es decir, que se abra al hacer clic en la 'miniatura').
- `alignment`: `left`, `center` o `right` para alinear la imagen a la izquierda, al centro o a la derecha.

# Otros componentes

Si bien hay más componentes dentro de la carpeta `lib/components`, están más orientados a la maquetación de plantillas (`templates`) que a su uso directo dentro de una sección como `Page`. Estos componentes son:

- **BreadCrumbs**: Las 'migas de pan' (breadcrumbs) que aparecen debajo de la barra de título y sirven para saber dónde estamos.
- **Card**: Una tarjeta de estilo Material Design con imagen incluida (como las de la portada).
- **CheckButton**: Un componente de tipo botón con funcionalidades adicionales (utilizado en los tests).
- **ChooseOption**: Componente de tipo 'radio button' utilizado en los tests (en la plantilla `Choose`).
- **Error**: Un mensaje de error, similar a las alertas, pero con un toque de humor.
- **Gap**: Representa visualmente la sección de los tests de rellenar huecos.
- **IconList**: Renderiza una lista de enlaces con su icono correspondiente al lado.
- **NextLevelButton**: Botón para avanzar de nivel.
- **PrevLevelButton**: Botón para volver atrás en el nivel.
- **Tab**: Se usan en plantillas como `Page` o `FillCode` para disponer de una sección de pestañas (`tabs`).

Estos componentes no tienen mucho sentido por sí solos, ya que suelen ser parte de otros componentes o plantillas. Por ejemplo, el componente `BreadCrumbs` se utiliza dentro de la plantilla `Page` para mostrar la ubicación actual en la página. ¿Se puede usar aparte? ¡Claro! ¿Tiene sentido? Igual no mucho... pero que el límite lo ponga tu imaginación 😁.

# Templates

![Codi nerdy](/static/img/codi/nerdy.webp?align=left) Dentro de la carpeta `src/lib/templates` existen plantillas de módulos predefinidos (`templates`) que se encargan de definir aspectos de la página. Uno de ellos, y el más utilizado, es `Page` (localizado en `src/lib/templates/Page.svelte`). Esta parte de la librería (`lib`) no la tocaremos, pero si quieres echarle un vistazo, adelante 😉.

Así que, **grosso modo**, podemos decir que una plantilla (`template`) predefine una página o sección, cargando los componentes que necesita.

# Template - Page

**Page** es un componente que recibe contenido y lo adapta visualmente al espacio disponible, aplicando los estilos necesarios e incluyendo componentes como `NextLevelButton` para avanzar de página, por ejemplo.

Hasta ahora, nuestro fichero `src/modules/dummy/basic/helloworld.svelte` se veía así:

```` File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html"
Hola mundo 🌍
````

Vamos a cambiar el contenido del fichero helloworld.svelte para hacerlo visualmente más atractivo.

```` File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html"
<script>
  import Page from '$lib/templates/Page.svelte';
</script>
<Page>
  <p class="mt-4">Hola mundo 🌍</p>
</Page>
````

Si **recargas** ahora tu página (o si el *hot-reload* está activo) verás que ahora aparecen varios elementos en pantalla que antes no estaban, como las pestañas de 'Contenido' y un botón que dice: 'Esto es todo, ¡vuelve pronto para más!', indicando que el módulo ha llegado a su fin. Si haces clic en la pestaña de recursos, verás un enlace a Wikipedia.

Este tipo de plantilla (`Page`) sirve para mostrar contenido textual en nuestra página y crear referencias que sirvan de apoyo a nuestro material. Puedes agregar nuevos iconos de enlace editando el fichero `src/lib/components/IconList.svelte`.

## Añadiendo la pestaña de recursos

Dentro de la plantilla `Page`, es posible añadir una pestaña que incluya un listado de recursos (enlaces) que pueden ser de utilidad para reforzar el contenido explicado en esta página. Para ello, crea una constante `resources` y añádela como parámetro al componente Page, tal y como se muestra a continuación.

```` File icon="svelte" route="src,modules,dummy,basic" name="helloworld.svelte" codeLang="html"
<script>
  import Page from '$lib/templates/Page.svelte';
  export const resources = [
    {
      url: 'https://es.wikipedia.org/wiki/Hola_mundo',
      title: 'Hello World!'
    }
  ];
</script>
<Page {resources} >
  <p class="mt-4">Hola mundo 🌍</p>
</Page>
````

Si todo ha ido bien, al recargar la página verás el mismo contenido de antes, **pero** con una nueva pestaña de recursos.

# Template - FillCode

Es lo que conocemos como un `test` o `cuestionario`. Es una plantilla que hace uso, a su vez, del componente `Gap` para mostrar un cuestionario donde se rellenan huecos, interpolando las ocurrencias entre símbolos de dólar (`$`) (por ejemplo, `$hola$`). Adicionalmente, se pueden pasar opciones para mezclar las respuestas e incluso añadir respuestas falsas.

> [!IMPORTANT]
> Ten en cuenta que no hay una validación de código como tal, sino que se comprueba que el código original (eliminando las coincidencias `$x$`) sea el mismo que el resultante tras haber rellenado los huecos.

```` File icon="svelte" name="fill.svelte" codeLang="javascript"
<script>
  import FillCode from '$lib/templates/FillCode.svelte';

  let title = 'Creando una instancia en GCP';
  let text = 'A continuación vamos a poner a prueba los conocimientos del curso de terraform. ¿Serás capaz de completar bien el código para crear una instancia de tipo e2 que esté en la network default?';
  let codeLang = 'hcl';
  let shuffle = true;

  // Para la indentación, ten en cuenta que la segunda línea del bloque empieza en la línea de `codeBlock`
  let codeBlock = `resource "google_compute_instance" "codivm" {
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
}`;

  const fakeOptions = ['d1', 'fast', 'e3', 'alpine']

</script>

<FillCode {text} {title} {codeLang} {codeBlock} {shuffle} {fakeOptions} />
````

> [!Note]
> Este elemento no está pensado para renderizarse como parte de un componente sino como una template, por lo que la previsualización aquí no sería posible ahora mismo

## Parámetros

- `text`: Contenido que se muestra dentro de la descripción cuando no está en modo "examen" (osea, en modo test).
- `title`:Título de la pregunta.
- `showLines`: Muestra (o no) el número de líneas en el bloque de código.
- `codeLang`: Lenguaje de sintaxis que se pasa a Prism para resaltar el código (consulta el [componente code](/components/componentes-code) para más información).
- `shuffle`: Determina si las opciones de respuesta se mezclan aleatoriamente (true/false).
- `codeBlock`: Código fuente con marcadores `($…$)` que indican los huecos a rellenar.
- `inTestMode`: Establece el modo de prueba (examen): no muestra la descripción, solo el componente Gaps. Se usa, mayormente, cuando se va a la ruta /test/ para establecer los cuestionarios.
- `order`: Identificador de la pregunta dentro de una serie. Se envía en el evento message cuando la prueba termina, permitiendo al contenedor saber qué pregunta se acaba de resolver. No se suele establecer manualmente, sólo es de uso interno a la template `Gap`.
- `resources`: Lista de recursos que se muestran en una pestaña adicional.
- `fakeOptions`: Opciones de respuesta falsas que se añaden a los botones de selección. 😈

# Template - Choose

La plantilla `Choose` ha sido diseñada para crear preguntas de opción simple o múltiple, ya sea de respuesta única (`radio button`) o de respuesta múltiple (`checkbox`). Es un componente reutilizable que se puede configurar con diferentes textos, respuestas y comportamientos para construir cuestionarios o ejercicios interactivos.

```js
<script>
  import Choose from '$lib/templates/Choose.svelte';

  const chooseConfig = {
    checkboxes: true,
    shuffle: true,
    text: `Estás desarrollando una aplicación web en JavaScript que hace múltiples llamadas a una API externa. Has notado que algunas funciones no esperan a que las respuestas lleguen antes de continuar. ¿Qué deberías hacer para asegurar un flujo de ejecución correcto?`,
    answers: [
      { text: `Usar la función setTimeout para simular la espera.`, correct: false },
      { text: `Convertir las funciones en asincrónicas utilizando async/await (esta es la correcta 🤫)`, correct: true },
      {
        text: `Reducir la velocidad de la conexión para que las respuestas lleguen más tarde.`,
        correct: false
      },
      { text: `Eliminar todas las promesas y usar solo funciones síncronas.`, correct: false }
    ],
    resources: [
      {
        title: '(ENG) Entendiendo async/await en JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises'
      },
      {
        title: 'Promesas en JavaScript (MDN)',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise'
      }
    ]
  };

</script>

<Choose {...chooseConfig} />
```

> [!TIP]
> Si quieres probarlo, la respuesta correcta está marcada con 🤫.

## Choose múltiple

Además de crear preguntas de una sola respuesta, la plantilla `Choose` se puede utilizar para crear preguntas de opción múltiple (permitiendo tanto respuestas únicas como múltiples), tal como vemos en el siguiente ejemplo:

```js
<script>
  import Choose from '$lib/templates/Choose.svelte';

  const multipleChoose = {
    checkboxes: true,
    shuffle: true,
    text: `Estás colaborando en un proyecto con Git y varios desarrolladores. ¿Cuáles de las siguientes son buenas prácticas recomendadas para mantener un flujo de trabajo limpio y eficiente?`,
    answers: [
      { text: `Crear ramas específicas para cada funcionalidad o corrección 👀`, correct: true },
      { text: `Hacer commits directamente en la rama main para ahorrar tiempo.`, correct: false },
      { text: `Escribir mensajes de commit claros y descriptivos 👀`, correct: true },
      { text: `Fusionar ramas sin revisar los cambios realizados por otros.`, correct: false }
    ]
  };

</script>

<Choose {...multipleChoose} />
```

> [!TIP]
> Si quieres probar el resultado, las respuestas correctas están marcadas con 👀.

## Parámetros

- `resources`: Es una lista (array) de objetos que contiene recursos adicionales, como enlaces a documentación o artículos. Cada objeto suele tener un title (título) y una url (dirección web). Se muestran en la pestaña "Recursos".
- `text`: Es el texto de la pregunta que se mostrará al usuario.
- `answers`: Es la lista (array) de posibles respuestas. Cada respuesta es un objeto que debe contener:
  - `text`: Texto de la opción.
  - `correct`: Un valor booleano (`true`/`false`) que indica si esa respuesta es correcta.
- `checkboxes`: Un valor booleano (`true`/`false`). Aunque su nombre es `checkboxes`, su función principal es determinar si se pueden seleccionar múltiples respuestas.
- `shuffle`:Un valor booleano (`true`/`false`) que, si es `true`, hace que el orden de las respuestas se muestre de forma aleatoria cada vez que se carga el componente.
- `inTestMode`: Un valor booleano que cambia la apariencia y el comportamiento del componente. Si es `true`, se muestra de una forma más simple, ideal para un examen o test. Si es `false` (el valor por defecto), se muestra con pestañas ("Pregunta" y "Recursos") y botones para comprobar la solución, ideal para un modo de aprendizaje. Aunque es un parámetro, no se suele usar de manera directa en el componente.
- `showCorrectAnswers`: Un valor booleano que, cuando está en *modo test* (`inTestMode`), se usa para resaltar visualmente cuáles eran las respuestas correctas.
- `questionNumber`: Un número que sirve como identificador único para la pregunta, útil para agrupar los botones de tipo `radio` y que funcionen correctamente.
- `isCorrect`: Esta propiedad se usa principalmente en `inTestMode`. El componente padre le puede pasar un valor booleano (`true` o `false`) para indicar si la respuesta del usuario fue correcta, y el fondo de la pregunta cambiará a verde o rojo.
- `order`: Un número que indica la posición de esta pregunta dentro de un conjunto más grande de preguntas (por ejemplo, en un test).

# ¿Qué sigue?

Ahora que ya sabes cómo funciona todo a bajo nivel, ¿qué tal si nos ahorramos unos minutos montando toda la estructura, buscando componentes, añadiéndolos, probando, enlazando, etc.? 😜 Desde aquí podemos dar dos saltos:

- Añadir [preguntas de tipo cuestionario](/questions) a nuestra constante `questions`.
- Crear módulos de contenido [automatizados con Markdown](/modules_auto) en Codiquest.
