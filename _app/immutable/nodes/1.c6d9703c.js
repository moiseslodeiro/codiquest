import{s as p,A as _,B as d,l as $,m as g}from"../chunks/scheduler.138eaff3.js";import{S as v,i as E,d as f,v as b,j as h,k as w,a as S,m as j,b as k,t as x,e as y,l as B}from"../chunks/index.d71bb2e6.js";import{p as c}from"../chunks/stores.e67ff172.js";import{E as l}from"../chunks/Error.50088b5e.js";function m(s){let t,r,o;r=new l({props:{message:s[0].status+" "+s[0].error.message},$$inline:!0});const i={c:function(){t=$(`asfasf

`),h(r.$$.fragment)},l:function(e){t=g(e,`asfasf

`),w(r.$$.fragment,e)},m:function(e,n){S(e,t,n),j(r,e,n),o=!0},p:function(e,[n]){const u={};n&1&&(u.message=e[0].status+" "+e[0].error.message),r.$set(u)},i:function(e){o||(k(r.$$.fragment,e),o=!0)},o:function(e){x(r.$$.fragment,e),o=!1},d:function(e){e&&y(t),B(r,e)}};return f("SvelteRegisterBlock",{block:i,id:m.name,type:"component",source:"",ctx:s}),i}function C(s,t,r){let o;_(c,"page"),d(s,c,n=>r(0,o=n));let{$$slots:i={},$$scope:a}=t;b("Error",i,[]);const e=[];return Object.keys(t).forEach(n=>{!~e.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Error> was created with unknown prop '${n}'`)}),s.$capture_state=()=>({page:c,Error:l,$page:o}),[o]}class D extends v{constructor(t){super(t),E(this,t,C,m,p,{}),f("SvelteRegisterComponent",{component:this,tagName:"Error_1",options:t,id:m.name})}}export{D as component};
