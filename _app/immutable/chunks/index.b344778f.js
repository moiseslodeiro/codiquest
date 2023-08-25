var W=Object.defineProperty;var X=(t,e,n)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(X(t,typeof e!="symbol"?e+"":e,n),n);import{w,O as Y,d as U,P as Z,G as v,Q as b,I as k,R as q,S as V,T as z,h as H,N as J,U as K,V as tt,W as et,M as A,X as nt,Y as it,Z as st,_ as rt,$ as at}from"./scheduler.7f939d22.js";const B=typeof window<"u";let D=B?()=>window.performance.now():()=>Date.now(),N=B?t=>requestAnimationFrame(t):w;const p=new Set;function F(t){p.forEach(e=>{e.c(t)||(p.delete(e),e.f())}),p.size!==0&&N(F)}function G(t){let e;return p.size===0&&N(F),{promise:new Promise(n=>{p.add(e={c:t,f:n})}),abort(){p.delete(e)}}}const O=new Map;let P=0;function ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:Z(e),rules:{}};return O.set(t,n),n}function L(t,e,n,i,r,a,u,l=0){const d=16.666/i;let s=`{
`;for(let g=0;g<=1;g+=d){const m=e+(n-e)*a(g);s+=g*100+`%{${u(m,1-m)}}
`}const f=s+`100% {${u(n,1-n)}}
}`,o=`__svelte_${ot(f)}_${l}`,_=Y(t),{stylesheet:c,rules:$}=O.get(_)||ft(_,t);$[o]||($[o]=!0,c.insertRule(`@keyframes ${o} ${f}`,c.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${i}ms linear ${r}ms 1 both`,P+=1,o}function M(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),P-=r,P||ut())}function ut(){N(()=>{P||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&U(e)}),O.clear())})}let x;function Q(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function R(t,e,n){t.dispatchEvent(q(`${e?"intro":"outro"}${n}`))}const E=new Set;let y;function gt(){y={r:0,c:[],p:y}}function yt(){y.r||v(y.c),y=y.p}function ct(t,e){t&&t.i&&(E.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),y.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const T={duration:0};function wt(t,e,n){const i={direction:"in"};let r=e(t,n,i),a=!1,u,l,d=0;function s(){u&&M(t,u)}function f(){const{delay:_=0,duration:c=300,easing:$=V,tick:h=w,css:g}=r||T;g&&(u=L(t,0,1,c,_,$,g,d++)),h(0,1);const m=D()+_,S=m+c;l&&l.abort(),a=!0,k(()=>R(t,!0,"start")),l=G(C=>{if(a){if(C>=S)return h(1,0),R(t,!0,"end"),s(),a=!1;if(C>=m){const j=$((C-m)/c);h(j,1-j)}}return a})}let o=!1;return{start(){o||(o=!0,M(t),b(r)?(r=r(i),Q().then(f)):f())},invalidate(){o=!1},end(){a&&(s(),a=!1)}}}function xt(t,e,n){const i={direction:"out"};let r=e(t,n,i),a=!0,u;const l=y;l.r+=1;let d;function s(){const{delay:f=0,duration:o=300,easing:_=V,tick:c=w,css:$}=r||T;$&&(u=L(t,1,0,o,f,_,$));const h=D()+f,g=h+o;k(()=>R(t,!1,"start")),"inert"in t&&(d=t.inert,t.inert=!0),G(m=>{if(a){if(m>=g)return c(0,1),R(t,!1,"end"),--l.r||v(l.c),!1;if(m>=h){const S=_((m-h)/o);c(1-S,S)}}return a})}return b(r)?Q().then(()=>{r=r(i),s()}):s(),{end(f){f&&"inert"in t&&(t.inert=d),f&&r.tick&&r.tick(1,0),a&&(u&&M(t,u),a=!1)}}}function vt(t){t&&t.c()}function St(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),k(()=>{const a=t.$$.on_mount.map(nt).filter(b);t.$$.on_destroy?t.$$.on_destroy.push(...a):v(a),t.$$.on_mount=[]}),r.forEach(k)}function dt(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(it.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(t,e,n,i,r,a,u,l=[-1]){const d=et;A(t);const s=t.$$={fragment:null,ctx:[],props:a,update:w,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(o,_,...c)=>{const $=c.length?c[0]:_;return s.ctx&&r(s.ctx[o],s.ctx[o]=$)&&(!s.skip_bound&&s.bound[o]&&s.bound[o]($),f&&_t(t,o)),_}):[],s.update(),f=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){rt();const o=H(e.target);s.fragment&&s.fragment.l(o),o.forEach(U)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),lt(t,e.target,e.anchor),at(),J()}A(d)}class kt{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){dt(this,1),this.$destroy=w}$on(e,n){if(!b(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);export{kt as S,ct as a,vt as b,yt as c,St as d,dt as e,wt as f,gt as g,xt as h,Et as i,lt as m,pt as t};
