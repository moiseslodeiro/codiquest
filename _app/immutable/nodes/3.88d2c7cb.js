import{_ as f}from"../chunks/preload-helper.a2197ef0.js";import{B as q,C as H,D as b,E as M,s as S,f as $,a as w,l as j,e as k,g as P,A as z,c as T,h as B,m as y,d as v,i as h,x as A,n as U,z as F,y as _,q as D}from"../chunks/scheduler.fb34ef27.js";import{g as x,t as g,c as C,a as E,S as G,i as J,b as L,d as K,m as O,e as I}from"../chunks/index.81d24910.js";import{p as Q}from"../chunks/stores.96eac52a.js";import"../chunks/singletons.d2cfef59.js";function R(t,e){const c=e.token={};function r(l,a,n,m){if(e.token!==c)return;e.resolved=m;let u=e.ctx;n!==void 0&&(u=u.slice(),u[n]=m);const p=l&&(e.current=l)(u);let d=!1;e.block&&(e.blocks?e.blocks.forEach((o,s)=>{s!==a&&o&&(x(),g(o,1,1,()=>{e.blocks[s]===o&&(e.blocks[s]=null)}),C())}):e.block.d(1),p.c(),E(p,1),p.m(e.mount(),e.anchor),d=!0),e.block=p,e.blocks&&(e.blocks[a]=p),d&&M()}if(q(t)){const l=H();if(t.then(a=>{b(l),r(e.then,1,e.value,a),b(null)},a=>{if(b(l),r(e.catch,2,e.error,a),b(null),!e.hasCatch)throw a}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function W(t,e,c){const r=e.slice(),{resolved:l}=t;t.current===t.then&&(r[t.value]=l),t.current===t.catch&&(r[t.error]=l),t.block.p(r,c)}const V=(t,e)=>{const c=t[e];return c?typeof c=="function"?c():Promise.resolve(c):new Promise((r,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function X(t){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function Y(t){let e,c,r;var l=t[3].default;function a(n,m){return{}}return l&&(e=D(l,a())),{c(){e&&L(e.$$.fragment),c=k()},l(n){e&&K(e.$$.fragment,n),c=k()},m(n,m){e&&O(e,n,m),h(n,c,m),r=!0},p(n,m){if(m&1&&l!==(l=n[3].default)){if(e){x();const u=e;g(u.$$.fragment,1,0,()=>{I(u,1)}),C()}l?(e=D(l,a()),L(e.$$.fragment),E(e.$$.fragment,1),O(e,c.parentNode,c)):e=null}},i(n){r||(e&&E(e.$$.fragment,n),r=!0)},o(n){e&&g(e.$$.fragment,n),r=!1},d(n){n&&v(c),e&&I(e,n)}}}function Z(t){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function ee(t){let e,c='<ul><li><a href="#" class="secondary">…</a></li></ul> <ul><li><strong>x</strong></li></ul> <ul><li><a href="#" class="secondary">…</a></li></ul>',r,l,a,n,m,u,p,d,o={ctx:t,current:null,token:null,hasCatch:!1,pending:Z,then:Y,catch:X,value:3,blocks:[,,,]};return R(p=V(Object.assign({"../../../levels/js/1.svelte":()=>f(()=>import("../chunks/1.f5387e93.js"),["_app/immutable/chunks/1.f5387e93.js","_app/immutable/chunks/scheduler.fb34ef27.js","_app/immutable/chunks/index.81d24910.js","_app/immutable/chunks/singletons.d2cfef59.js","_app/immutable/chunks/Input.a1d7964f.js","_app/immutable/assets/Input.63564b48.css","_app/immutable/assets/1.0a6ce8b4.css"]),"../../../levels/js/2.svelte":()=>f(()=>import("../chunks/2.7819619f.js"),["_app/immutable/chunks/2.7819619f.js","_app/immutable/chunks/scheduler.fb34ef27.js","_app/immutable/chunks/index.81d24910.js","_app/immutable/chunks/singletons.d2cfef59.js","_app/immutable/chunks/Input.a1d7964f.js","_app/immutable/assets/Input.63564b48.css","_app/immutable/assets/2.d9fe45e5.css"]),"../../../levels/js/3.svelte":()=>f(()=>import("../chunks/3.c50b6ca3.js"),["_app/immutable/chunks/3.c50b6ca3.js","_app/immutable/chunks/scheduler.fb34ef27.js","_app/immutable/chunks/index.81d24910.js","_app/immutable/assets/3.1453329d.css"])}),`../../../levels/js/${t[0]}.svelte`),o),{c(){e=$("nav"),e.innerHTML=c,r=w(),l=$("h1"),a=j("Nivel: "),n=j(t[0]),m=w(),u=k(),o.block.c()},l(s){e=P(s,"NAV",{"data-svelte-h":!0}),z(e)!=="svelte-1dgllwx"&&(e.innerHTML=c),r=T(s),l=P(s,"H1",{});var i=B(l);a=y(i,"Nivel: "),n=y(i,t[0]),i.forEach(v),m=T(s),u=k(),o.block.l(s)},m(s,i){h(s,e,i),h(s,r,i),h(s,l,i),A(l,a),A(l,n),h(s,m,i),h(s,u,i),o.block.m(s,o.anchor=i),o.mount=()=>u.parentNode,o.anchor=u,d=!0},p(s,[i]){t=s,(!d||i&1)&&U(n,t[0]),o.ctx=t,i&1&&p!==(p=V(Object.assign({"../../../levels/js/1.svelte":()=>f(()=>import("../chunks/1.f5387e93.js"),["_app/immutable/chunks/1.f5387e93.js","_app/immutable/chunks/scheduler.fb34ef27.js","_app/immutable/chunks/index.81d24910.js","_app/immutable/chunks/singletons.d2cfef59.js","_app/immutable/chunks/Input.a1d7964f.js","_app/immutable/assets/Input.63564b48.css","_app/immutable/assets/1.0a6ce8b4.css"]),"../../../levels/js/2.svelte":()=>f(()=>import("../chunks/2.7819619f.js"),["_app/immutable/chunks/2.7819619f.js","_app/immutable/chunks/scheduler.fb34ef27.js","_app/immutable/chunks/index.81d24910.js","_app/immutable/chunks/singletons.d2cfef59.js","_app/immutable/chunks/Input.a1d7964f.js","_app/immutable/assets/Input.63564b48.css","_app/immutable/assets/2.d9fe45e5.css"]),"../../../levels/js/3.svelte":()=>f(()=>import("../chunks/3.c50b6ca3.js"),["_app/immutable/chunks/3.c50b6ca3.js","_app/immutable/chunks/scheduler.fb34ef27.js","_app/immutable/chunks/index.81d24910.js","_app/immutable/assets/3.1453329d.css"])}),`../../../levels/js/${t[0]}.svelte`))&&R(p,o)||W(o,t,i)},i(s){d||(E(o.block),d=!0)},o(s){for(let i=0;i<3;i+=1){const N=o.blocks[i];g(N)}d=!1},d(s){s&&(v(e),v(r),v(l),v(m),v(u)),o.block.d(s),o.token=null,o=null}}}function te(t,e,c){let r;F(t,Q,a=>c(1,r=a));let{id:l=r.params.id}=e;return t.$$set=a=>{"id"in a&&c(0,l=a.id)},[l]}class ae extends G{constructor(e){super(),J(this,e,te,ee,S,{id:0})}}export{ae as component};
