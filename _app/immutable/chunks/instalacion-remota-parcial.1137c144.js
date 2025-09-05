import{s as te}from"./scheduler.38f5b73a.js";import{S as ne,i as se,r as V,u as W,v as X,d as Y,t as Z,w as ee,g as r,s as d,h as u,x as c,c as p,k as E,a as n,f as s,m as oe,n as le}from"./index.33e8e8ec.js";import{P as ie}from"./File.svelte_svelte_type_style_lang.e9c0277e.js";import"./paths.e092a00d.js";import{F as ae}from"./File.6bc0c696.js";function re(y){let o;return{c(){o=oe(`name: Publish Module Files, Questions and Publish

on:
  push:
    branches:
      - main
    paths:
      - 'src/raw/**'
  workflow_dispatch:
    inputs:
      debug:
        description: 'Enable debug mode'
        type: choice
        options:
          - 'true'
          - 'false'
        required: false
        default: 'false'
      delete_docs:
        description: 'Delete docs module'
        type: choice
        options:
          - 'true'
          - 'false'
        required: false
        default: 'true'

permissions:
  contents: write

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout self repo
        uses: actions/checkout@v4

      - name: Checkout Codiquest
        uses: actions/checkout@v4
        with:
          repository: 'moiseslodeiro/codiquest'
          path: 'codiquest'
          ref: 'main'

      - name: Installing node
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: List local resources
        if: \${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR src
          ls -lR static

      - name: Copy resources to Codiquest
        run: |
          cp -r src/* codiquest/src/
          cp -r static/* codiquest/static/

      - name: Check resources on Codiquest
        if: \${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR codiquest/src/raw/
          ls -lR codiquest/static

      - name: Installing dependencies
        run: npm install
        working-directory: './codiquest'

      - name: Parsing modules
        run: npm run module:all
        working-directory: './codiquest'
        env:
          PUBLIC: 'true'

      - name: Parsing tests
        run: npm run convert:all
        working-directory: './codiquest'

      - name: Check modules before build
        if: \${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR ./codiquest/src/modules

      - name: Clean docs module
        if: \${{ github.event.inputs.delete_docs == 'true' }}
        run: |
          npm run clean:doc
          rm -rf src/modules/docs.js
        working-directory: './codiquest'

      - name: Create build folder
        run: npm run build
        working-directory: './codiquest'

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./codiquest/build
          publish_branch: gh-pages
          force_orphan: true
`)},l(i){o=le(i,`name: Publish Module Files, Questions and Publish

on:
  push:
    branches:
      - main
    paths:
      - 'src/raw/**'
  workflow_dispatch:
    inputs:
      debug:
        description: 'Enable debug mode'
        type: choice
        options:
          - 'true'
          - 'false'
        required: false
        default: 'false'
      delete_docs:
        description: 'Delete docs module'
        type: choice
        options:
          - 'true'
          - 'false'
        required: false
        default: 'true'

permissions:
  contents: write

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout self repo
        uses: actions/checkout@v4

      - name: Checkout Codiquest
        uses: actions/checkout@v4
        with:
          repository: 'moiseslodeiro/codiquest'
          path: 'codiquest'
          ref: 'main'

      - name: Installing node
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: List local resources
        if: \${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR src
          ls -lR static

      - name: Copy resources to Codiquest
        run: |
          cp -r src/* codiquest/src/
          cp -r static/* codiquest/static/

      - name: Check resources on Codiquest
        if: \${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR codiquest/src/raw/
          ls -lR codiquest/static

      - name: Installing dependencies
        run: npm install
        working-directory: './codiquest'

      - name: Parsing modules
        run: npm run module:all
        working-directory: './codiquest'
        env:
          PUBLIC: 'true'

      - name: Parsing tests
        run: npm run convert:all
        working-directory: './codiquest'

      - name: Check modules before build
        if: \${{ github.event.inputs.debug == 'true' }}
        run: |
          ls -lR ./codiquest/src/modules

      - name: Clean docs module
        if: \${{ github.event.inputs.delete_docs == 'true' }}
        run: |
          npm run clean:doc
          rm -rf src/modules/docs.js
        working-directory: './codiquest'

      - name: Create build folder
        run: npm run build
        working-directory: './codiquest'

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./codiquest/build
          publish_branch: gh-pages
          force_orphan: true
`)},m(i,l){n(i,o,l)},d(i){i&&s(o)}}}function ue(y){let o,i="En el apartado anterior, pudimos ver cómo hacer una instalación remota completa; es decir, copiar el repositorio <strong>entero</strong> de Codiquest para poder modificarlo, añadir recursos, etc. Pero... ¿hay algo más ligero incluso? ¡Sí! Digamos que podemos usar <strong>Codiquest</strong> como si de una librería se tratara, subiendo solo el contenido de tus módulos y preguntas a tu repositorio y haciendo uso de un <em>workflow</em> que:",l,a,j='<li class="svelte-1awqwjz">Detecte cambios en tu contenido bajo <code class="svelte-1awqwjz">src/raw</code> (o ejecución manual).</li> <li class="svelte-1awqwjz">Descargue la última versión de Codiquest.</li> <li class="svelte-1awqwjz">Compile el contenido de tus ficheros Markdown en módulos.</li> <li class="svelte-1awqwjz">Publique el contenido.</li>',$,q,S='Esta opción, aunque pueda parecer más óptima, puede tener algunos inconvenientes, como que no sería posible editar (en primera instancia) el contenido de los componentes o el de los módulos (ficheros <code class="svelte-1awqwjz">.js</code>) a tu antojo.',z,h,U="Pasos",x,v,B="Opción A - Do it yourself",L,m,O='<li class="svelte-1awqwjz">Crea tu propio repositorio en GitHub.</li> <li class="svelte-1awqwjz">Crea una carpeta <code class="svelte-1awqwjz">static</code>.</li> <li class="svelte-1awqwjz">Crea una carpeta <code class="svelte-1awqwjz">src</code>.<ul class="svelte-1awqwjz"><li class="svelte-1awqwjz">Crea una carpeta <code class="svelte-1awqwjz">raw</code>: aquí dentro irán los ficheros <code class="svelte-1awqwjz">*.module.md</code> y <code class="svelte-1awqwjz">*.question.md</code>.</li> <li class="svelte-1awqwjz">Si lo necesitas, crea una carpeta <code class="svelte-1awqwjz">routes</code> e incluye el contenido de los ficheros que quieras sobreescribir, partiendo de los originales de Codiquest.</li></ul></li> <li class="svelte-1awqwjz">Crea una carpeta <code class="svelte-1awqwjz">.github/workflows</code> y añade el siguiente <em>workflow</em> a tu repositorio:</li>',P,w,b,F="Opción B - La fácil",H,g,G="Hay un repositorio creado a modo de demo para este mismo propósido. Sólo debes clonarlo y empezar a jugar 🫶",M,_,K='<a href="https://github.com/moiseslodeiro/quests/tree/partial-quest" class="link link-primary github" target="_blank" rel="noopener noreferrer">https://github.com/moiseslodeiro/quests/tree/partial-quest</a>',T,C,N="Consideraciones",R,k,Q="Sólo ten en cuenta poner:",I,f,A='<li class="svelte-1awqwjz">Los recursos (imágenes, etc.) en la carpeta <strong>static</strong>.</li> <li class="svelte-1awqwjz">Módulos y cuestionarios, siguiendo el patrón de <code class="svelte-1awqwjz">*.module.md</code> y <code class="svelte-1awqwjz">*.question.md</code> en <code class="svelte-1awqwjz">src/raw/</code>.<ul class="svelte-1awqwjz"><li class="svelte-1awqwjz">Incluye todo aquello que quieras sobreescribir; por ejemplo, el fichero <code class="svelte-1awqwjz">routes/+layout.svelte</code>, etc. respecto al <a href="https://github.com/moiseslodeiro/codiquest" class="link link-primary github" target="_blank" rel="noopener noreferrer">repositorio original</a></li></ul></li>',D;return w=new ae({props:{icon:"html",route:".github,workflows",name:"workflow.yaml",codeLang:"yaml",$$slots:{default:[re]},$$scope:{ctx:y}}}),{c(){o=r("p"),o.innerHTML=i,l=d(),a=r("ol"),a.innerHTML=j,$=d(),q=r("p"),q.innerHTML=S,z=d(),h=r("h2"),h.textContent=U,x=d(),v=r("h3"),v.textContent=B,L=d(),m=r("ul"),m.innerHTML=O,P=d(),V(w.$$.fragment),b=r("h3"),b.textContent=F,H=d(),g=r("p"),g.textContent=G,M=d(),_=r("p"),_.innerHTML=K,T=d(),C=r("h2"),C.textContent=N,R=d(),k=r("p"),k.textContent=Q,I=d(),f=r("ul"),f.innerHTML=A,this.h()},l(e){o=u(e,"P",{"data-svelte-h":!0}),c(o)!=="svelte-1cvxt9z"&&(o.innerHTML=i),l=p(e),a=u(e,"OL",{class:!0,"data-svelte-h":!0}),c(a)!=="svelte-sygkwc"&&(a.innerHTML=j),$=p(e),q=u(e,"P",{"data-svelte-h":!0}),c(q)!=="svelte-1e7gnl8"&&(q.innerHTML=S),z=p(e),h=u(e,"H2",{"data-svelte-h":!0}),c(h)!=="svelte-t1pz3c"&&(h.textContent=U),x=p(e),v=u(e,"H3",{"data-svelte-h":!0}),c(v)!=="svelte-1mr73kt"&&(v.textContent=B),L=p(e),m=u(e,"UL",{class:!0,"data-svelte-h":!0}),c(m)!=="svelte-ru240k"&&(m.innerHTML=O),P=p(e),W(w.$$.fragment,e),b=u(e,"H3",{"data-svelte-h":!0}),c(b)!=="svelte-lzi7jx"&&(b.textContent=F),H=p(e),g=u(e,"P",{"data-svelte-h":!0}),c(g)!=="svelte-1p0qhki"&&(g.textContent=G),M=p(e),_=u(e,"P",{"data-svelte-h":!0}),c(_)!=="svelte-66u1zl"&&(_.innerHTML=K),T=p(e),C=u(e,"H2",{"data-svelte-h":!0}),c(C)!=="svelte-r1u6sv"&&(C.textContent=N),R=p(e),k=u(e,"P",{"data-svelte-h":!0}),c(k)!=="svelte-1qyo1xn"&&(k.textContent=Q),I=p(e),f=u(e,"UL",{class:!0,"data-svelte-h":!0}),c(f)!=="svelte-t44bu4"&&(f.innerHTML=A),this.h()},h(){E(a,"class","svelte-1awqwjz"),E(m,"class","svelte-1awqwjz"),E(f,"class","svelte-1awqwjz")},m(e,t){n(e,o,t),n(e,l,t),n(e,a,t),n(e,$,t),n(e,q,t),n(e,z,t),n(e,h,t),n(e,x,t),n(e,v,t),n(e,L,t),n(e,m,t),n(e,P,t),X(w,e,t),n(e,b,t),n(e,H,t),n(e,g,t),n(e,M,t),n(e,_,t),n(e,T,t),n(e,C,t),n(e,R,t),n(e,k,t),n(e,I,t),n(e,f,t),D=!0},p(e,t){const J={};t&1&&(J.$$scope={dirty:t,ctx:e}),w.$set(J)},i(e){D||(Y(w.$$.fragment,e),D=!0)},o(e){Z(w.$$.fragment,e),D=!1},d(e){e&&(s(o),s(l),s(a),s($),s(q),s(z),s(h),s(x),s(v),s(L),s(m),s(P),s(b),s(H),s(g),s(M),s(_),s(T),s(C),s(R),s(k),s(I),s(f)),ee(w,e)}}}function ce(y){let o,i;return o=new ie({props:{$$slots:{default:[ue]},$$scope:{ctx:y}}}),{c(){V(o.$$.fragment)},l(l){W(o.$$.fragment,l)},m(l,a){X(o,l,a),i=!0},p(l,[a]){const j={};a&1&&(j.$$scope={dirty:a,ctx:l}),o.$set(j)},i(l){i||(Y(o.$$.fragment,l),i=!0)},o(l){Z(o.$$.fragment,l),i=!1},d(l){ee(o,l)}}}class qe extends ne{constructor(o){super(),se(this,o,null,ce,te,{})}}export{qe as default};
