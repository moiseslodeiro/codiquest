import{s as d,f as r,g as c,y as l,j as i,i as m,w as u,d as f}from"./scheduler.7f939d22.js";import{S as p,i as _,b as $,d as h,m as v,a as g,t as x,e as y}from"./index.b344778f.js";import{O as b}from"./Order.3364ad4d.js";function C(a){let t,s=`Usamos <code>let</code> y <code>const</code> para <strong>crear</strong> nuevas variables y constantes
		(ya veremos la diferencia más adelante)`;return{c(){t=r("span"),t.innerHTML=s,this.h()},l(e){t=c(e,"SPAN",{slot:!0,"data-svelte-h":!0}),l(t)!=="svelte-uvr9ay"&&(t.innerHTML=s),this.h()},h(){i(t,"slot","text")},m(e,n){m(e,t,n)},p:u,d(e){e&&f(t)}}}function k(a){let t,s="Tarjeta por detrás";return{c(){t=r("span"),t.textContent=s,this.h()},l(e){t=c(e,"SPAN",{slot:!0,"data-svelte-h":!0}),l(t)!=="svelte-j1279v"&&(t.textContent=s),this.h()},h(){i(t,"slot","back")},m(e,n){m(e,t,n)},p:u,d(e){e&&f(t)}}}function S(a){let t,s;return t=new b({props:{shuffle:"true",codeBlock:a[0],$$slots:{back:[k],text:[C]},$$scope:{ctx:a}}}),{c(){$(t.$$.fragment)},l(e){h(t.$$.fragment,e)},m(e,n){v(t,e,n),s=!0},p(e,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){x(t.$$.fragment,e),s=!1},d(e){y(t,e)}}}function j(a){return[`
// En Javascript usamos...
const
$let$
`]}class H extends p{constructor(t){super(),_(this,t,j,S,d,{})}}export{H as default};
