import{J as m,K as p,L as a,M as b}from"./scheduler.278578d3.js";import{g as v,t as i,c as g,a as w}from"./index.19cc91ee.js";function M(t,e){const s=e.token={};function c(r,u,h,d){if(e.token!==s)return;e.resolved=d;let n=e.ctx;h!==void 0&&(n=n.slice(),n[h]=d);const l=r&&(e.current=r)(n);let k=!1;e.block&&(e.blocks?e.blocks.forEach((o,_)=>{_!==u&&o&&(v(),i(o,1,1,()=>{e.blocks[_]===o&&(e.blocks[_]=null)}),g())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),k=!0),e.block=l,e.blocks&&(e.blocks[u]=l),k&&b()}if(m(t)){const r=p();if(t.then(u=>{a(r),c(e.then,1,e.value,u),a(null)},u=>{if(a(r),c(e.catch,2,e.error,u),a(null),!e.hasCatch)throw u}),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved=t}}function q(t,e,s){const c=e.slice(),{resolved:r}=t;t.current===t.then&&(c[t.value]=r),t.current===t.catch&&(c[t.error]=r),t.block.p(c,s)}const E=(t,e)=>{const s=t[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((c,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};export{E as _,M as h,q as u};