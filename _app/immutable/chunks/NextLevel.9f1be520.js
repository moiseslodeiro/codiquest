import{s as S,A as j,B as C,g as p,h as _,i as k,k as g,q as f,u as E,l as I,m as B}from"./scheduler.138eaff3.js";import{S as D,i as R,d as m,v as z,e as u,a as b,g as h,n as q,s as A}from"./index.d71bb2e6.js";import{p as d}from"./stores.e67ff172.js";import{r as w}from"./routes.267ff4af.js";const y="src/lib/NextLevel.svelte";function x(n){let e,i="De momento esto es todo, ¡vuelve pronto!";const c={c:function(){e=p("div"),e.textContent=i,this.h()},l:function(o){e=_(o,"DIV",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-1owooom"&&(e.textContent=i),this.h()},h:function(){h(e,"class","notification is-primary"),g(e,y,13,1,412)},m:function(o,t){b(o,e,t)},p:f,d:function(o){o&&u(e)}};return m("SvelteRegisterBlock",{block:c,id:x.name,type:"else",source:"(13:1) {:else}",ctx:n}),c}function N(n){let e,i;const c={c:function(){e=p("a"),i=I(n[0]),this.h()},l:function(o){e=_(o,"A",{class:!0,href:!0});var t=k(e);i=B(t,n[0]),t.forEach(u),this.h()},h:function(){h(e,"class","button marginLeft is-link is-size-5-mobile is-size-5-tablet is-size-5-desktop"),h(e,"href",parseInt(n[1])+1),g(e,y,11,2,273)},m:function(o,t){b(o,e,t),q(e,i)},p:function(o,t){t&1&&A(i,o[0])},d:function(o){o&&u(e)}};return m("SvelteRegisterBlock",{block:c,id:N.name,type:"if",source:"(11:1) {#if routes.includes(`/${tech}/level/${parseInt(id) + 1}`)}",ctx:n}),c}function v(n){let e;function i(t,r){return w.includes(`/${t[2]}/level/${parseInt(t[1])+1}`)?N:x}let s=i(n)(n);const o={c:function(){e=p("div"),s.c(),this.h()},l:function(r){e=_(r,"DIV",{});var l=k(e);s.l(l),l.forEach(u),this.h()},h:function(){g(e,y,9,0,204)},m:function(r,l){b(r,e,l),s.m(e,null)},p:function(r,[l]){s.p(r,l)},i:f,o:f,d:function(r){r&&u(e),s.d()}};return m("SvelteRegisterBlock",{block:o,id:v.name,type:"component",source:"",ctx:n}),o}function O(n,e,i){let c;j(d,"page"),C(n,d,a=>i(3,c=a));let{$$slots:s={},$$scope:o}=e;z("NextLevel",s,[]);let{message:t="Siguiente nivel"}=e;const r=c.params.id,l=c.params.tech,L=["message"];return Object.keys(e).forEach(a=>{!~L.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<NextLevel> was created with unknown prop '${a}'`)}),n.$$set=a=>{"message"in a&&i(0,t=a.message)},n.$capture_state=()=>({page:d,routes:w,message:t,id:r,tech:l,$page:c}),n.$inject_state=a=>{"message"in a&&i(0,t=a.message)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[t,r,l]}class H extends D{constructor(e){super(e),R(this,e,O,v,S,{message:0}),m("SvelteRegisterComponent",{component:this,tagName:"NextLevel",options:e,id:v.name})}get message(){throw new Error("<NextLevel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set message(e){throw new Error("<NextLevel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{H as N};
