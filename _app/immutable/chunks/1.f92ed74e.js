import{s as E,g as f,l as _,h as v,i as q,m as p,q as C,k as h,A as R}from"./scheduler.27b199b9.js";import{S as B,i as D,d as b,v as N,j as A,k as U,m as G,b as J,t as L,l as P,e as j,g as T,a as z,n as d}from"./index.5efd09c5.js";import{O as k}from"./Order.8622f262.js";const $="src/levels/js/1.svelte";function S(s){let t,c,o,r="let",e,n,a="const",g,l,w="crear",x;const O={c:function(){t=f("span"),c=_("Usamos "),o=f("code"),o.textContent=r,e=_(" y "),n=f("code"),n.textContent=a,g=_(" para "),l=f("strong"),l.textContent=w,x=_(` nuevas variables y constantes
		(ya veremos la diferencia más adelante)`),this.h()},l:function(u){t=v(u,"SPAN",{slot:!0});var i=q(t);c=p(i,"Usamos "),o=v(i,"CODE",{"data-svelte-h":!0}),C(o)!=="svelte-1we7w11"&&(o.textContent=r),e=p(i," y "),n=v(i,"CODE",{"data-svelte-h":!0}),C(n)!=="svelte-eqsq03"&&(n.textContent=a),g=p(i," para "),l=v(i,"STRONG",{"data-svelte-h":!0}),C(l)!=="svelte-1bok473"&&(l.textContent=w),x=p(i,` nuevas variables y constantes
		(ya veremos la diferencia más adelante)`),i.forEach(j),this.h()},h:function(){h(o,$,12,9,196),h(n,$,12,28,215),h(l,$,12,52,239),T(t,"slot","text"),h(t,$,11,1,168)},m:function(u,i){z(u,t,i),d(t,c),d(t,o),d(t,e),d(t,n),d(t,g),d(t,l),d(t,x)},p:R,d:function(u){u&&j(t)}};return b("SvelteRegisterBlock",{block:O,id:S.name,type:"slot",source:"(12:1) ",ctx:s}),O}function y(s){let t,c;t=new k({props:{shuffle:"true",codeBlock:s[0],$$slots:{text:[S]},$$scope:{ctx:s}},$$inline:!0});const o={c:function(){A(t.$$.fragment)},l:function(e){U(t.$$.fragment,e)},m:function(e,n){G(t,e,n),c=!0},p:function(e,[n]){const a={};n&2&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i:function(e){c||(J(t.$$.fragment,e),c=!0)},o:function(e){L(t.$$.fragment,e),c=!1},d:function(e){P(t,e)}};return b("SvelteRegisterBlock",{block:o,id:y.name,type:"component",source:"",ctx:s}),o}function F(s,t,c){let{$$slots:o={},$$scope:r}=t;N("_1",o,[]);let e=`
// En Javascript usamos...
const
$let$
`;const n=[];return Object.keys(t).forEach(a=>{!~n.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<_1> was created with unknown prop '${a}'`)}),s.$capture_state=()=>({OrderLevel:k,code:e}),s.$inject_state=a=>{"code"in a&&c(0,e=a.code)},t&&"$$inject"in t&&s.$inject_state(t.$$inject),[e]}class M extends B{constructor(t){super(t),D(this,t,F,y,E,{}),b("SvelteRegisterComponent",{component:this,tagName:"_1",options:t,id:y.name})}}export{M as default};