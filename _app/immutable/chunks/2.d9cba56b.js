import{s as f,f as r,g as i,u as l,j as c,i as u,z as m,d as p}from"./scheduler.79088197.js";import{S as d,i as _,b as $,d as h,m as b,a as g,t as v,e as x}from"./index.ba584c3d.js";import"./paths.83bd80e9.js";import{O as C}from"./Order.2d5be91e.js";function k(o){let t,n=`TODA variable necesita un <b>nombre</b>. Los <b>nombres</b> de las variables <b>no pueden</b> contener
		espacios.`;return{c(){t=r("span"),t.innerHTML=n,this.h()},l(e){t=i(e,"SPAN",{slot:!0,"data-svelte-h":!0}),l(t)!=="svelte-nea5q3"&&(t.innerHTML=n),this.h()},h(){c(t,"slot","text")},m(e,s){u(e,t,s)},p:m,d(e){e&&p(t)}}}function w(o){let t,n="XXX por detrás";return{c(){t=r("span"),t.textContent=n,this.h()},l(e){t=i(e,"SPAN",{slot:!0,"data-svelte-h":!0}),l(t)!=="svelte-1sp96i"&&(t.textContent=n),this.h()},h(){c(t,"slot","back")},m(e,s){u(e,t,s)},p:m,d(e){e&&p(t)}}}function B(o){let t,n;return t=new C({props:{shuffle:"true",codeBlock:o[0],wrongButtons:o[1],$$slots:{back:[w],text:[k]},$$scope:{ctx:o}}}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,s){b(t,e,s),n=!0},p(e,[s]){const a={};s&4&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function S(o){return[`
let $city$
`,["home city","123value"]]}class T extends d{constructor(t){super(),_(this,t,S,B,f,{})}}export{T as default};