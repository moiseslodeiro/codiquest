import{s as Je,r as De,f as b,a as O,l as te,g as k,c as A,h as $,d as _,m as le,A as G,j as T,R as Se,i as E,x as g,S as ee,u as Oe,v as Ae,w as Ve,T as xe,F as et,o as tt,e as ie,n as lt,y as ce,q as Ue,U as st}from"./scheduler.fb34ef27.js";import{S as Qe,i as Xe,a as w,g as fe,c as ue,t as I,b as _e,d as ye,m as de,e as pe}from"./index.81d24910.js";import"./singletons.ac929d92.js";import{e as re,I as nt,B as ot,g as Pe}from"./Input.a1d7964f.js";function qe(n,e,t){const l=n.slice();return l[15]=e[t],l}const at=n=>({}),je=n=>({});function ze(n,e,t){const l=n.slice();return l[18]=e[t],l}const rt=n=>({}),Fe=n=>({});function it(n){let e;return{c(){e=te("afaf")},l(t){e=le(t,"afaf")},m(t,l){E(t,e,l)},d(t){t&&_(e)}}}function Re(n){let e;return{c(){e=te("Loading...")},l(t){e=le(t,"Loading...")},m(t,l){E(t,e,l)},d(t){t&&_(e)}}}function ct(n){let e=n[18].element+"",t;return{c(){t=te(e)},l(l){t=le(l,e)},m(l,c){E(l,t,c)},p(l,c){c&1&&e!==(e=l[18].element+"")&&lt(t,e)},i:ce,o:ce,d(l){l&&_(t)}}}function ft(n){let e,t,l;const c=[{id:n[18].value}];var f=n[18].type;function u(a,r){let d={};if(r!==void 0&&r&1)d=Pe(c,[{id:a[18].value}]);else for(let m=0;m<c.length;m+=1)d=st(d,c[m]);return{props:d}}return f&&(e=Ue(f,u(n))),{c(){e&&_e(e.$$.fragment),t=ie()},l(a){e&&ye(e.$$.fragment,a),t=ie()},m(a,r){e&&de(e,a,r),E(a,t,r),l=!0},p(a,r){if(r&1&&f!==(f=a[18].type)){if(e){fe();const d=e;I(d.$$.fragment,1,0,()=>{pe(d,1)}),ue()}f?(e=Ue(f,u(a,r)),_e(e.$$.fragment),w(e.$$.fragment,1),de(e,t.parentNode,t)):e=null}else if(f){const d=r&1?Pe(c,[{id:a[18].value}]):{};e.$set(d)}},i(a){l||(e&&w(e.$$.fragment,a),l=!0)},o(a){e&&I(e.$$.fragment,a),l=!1},d(a){a&&_(t),e&&pe(e,a)}}}function We(n){let e,t,l,c;const f=[ft,ct],u=[];function a(r,d){return r[18].type?0:1}return e=a(n),t=u[e]=f[e](n),{c(){t.c(),l=ie()},l(r){t.l(r),l=ie()},m(r,d){u[e].m(r,d),E(r,l,d),c=!0},p(r,d){let m=e;e=a(r),e===m?u[e].p(r,d):(fe(),I(u[m],1,1,()=>{u[m]=null}),ue(),t=u[e],t?t.p(r,d):(t=u[e]=f[e](r),t.c()),w(t,1),t.m(l.parentNode,l))},i(r){c||(w(t),c=!0)},o(r){I(t),c=!1},d(r){r&&_(l),u[e].d(r)}}}function Ge(n){let e,t;return e=new ot({props:{text:n[15].text,order:n[15].order}}),e.$on("message",n[3]),{c(){_e(e.$$.fragment)},l(l){ye(e.$$.fragment,l)},m(l,c){de(e,l,c),t=!0},p(l,c){const f={};c&2&&(f.text=l[15].text),c&2&&(f.order=l[15].order),e.$set(f)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){pe(e,l)}}}function ut(n){let e,t,l,c,f,u,a,r,d,m,H,V,Y,P,X,N,se="Clic",v,M,y,q,B,K,Le="flip",he,j,Ee='<span class="material-symbols-outlined">task_alt</span>',me,z,Me='<span class="material-symbols-outlined">task_alt</span>',ve,F,Be='<span class="material-symbols-outlined">undo</span>',ge,R,we='<span class="material-symbols-outlined">restart_alt</span>',x,be,Ce;const ke=n[12].code,ne=De(ke,n,n[11],Fe),D=ne||it();let U=re(n[0]),p=[];for(let s=0;s<U.length;s+=1)p[s]=We(ze(n,U,s));const Ye=s=>I(p[s],1,1,()=>{p[s]=null});let L=null;U.length||(L=Re());const Te=n[12].back,C=De(Te,n,n[11],je);let J=re(n[1]),h=[];for(let s=0;s<J.length;s+=1)h[s]=Ge(qe(n,J,s));const Ze=s=>I(h[s],1,1,()=>{h[s]=null});return{c(){e=b("link"),t=O(),l=b("span"),D&&D.c(),c=O(),f=b("main"),u=b("div"),a=b("div"),r=b("div"),d=b("div"),m=b("pre"),H=te("               ");for(let s=0;s<p.length;s+=1)p[s].c();L&&L.c(),V=te(`
              `),Y=O(),P=b("div"),C&&C.c(),X=O(),N=b("button"),N.textContent=se,v=O(),M=b("div"),y=b("div");for(let s=0;s<h.length;s+=1)h[s].c();q=O(),B=b("div"),K=b("span"),K.textContent=Le,he=O(),j=b("button"),j.innerHTML=Ee,me=O(),z=b("button"),z.innerHTML=Me,ve=O(),F=b("button"),F.innerHTML=Be,ge=O(),R=b("button"),R.innerHTML=we,this.h()},l(s){e=k(s,"LINK",{rel:!0,href:!0}),t=A(s),l=k(s,"SPAN",{id:!0});var i=$(l);D&&D.l(i),i.forEach(_),c=A(s),f=k(s,"MAIN",{class:!0});var o=$(f);u=k(o,"DIV",{class:!0});var W=$(u);a=k(W,"DIV",{class:!0});var oe=$(a);r=k(oe,"DIV",{class:!0});var Ie=$(r);d=k(Ie,"DIV",{class:!0});var $e=$(d);m=k($e,"PRE",{class:!0});var Z=$(m);H=le(Z,"               ");for(let Q=0;Q<p.length;Q+=1)p[Q].l(Z);L&&L.l(Z),V=le(Z,`
              `),Z.forEach(_),$e.forEach(_),Ie.forEach(_),Y=A(oe),P=k(oe,"DIV",{class:!0});var He=$(P);C&&C.l(He),He.forEach(_),oe.forEach(_),W.forEach(_),o.forEach(_),X=A(s),N=k(s,"BUTTON",{"data-svelte-h":!0}),G(N)!=="svelte-1oqgvjp"&&(N.textContent=se),v=A(s),M=k(s,"DIV",{class:!0});var ae=$(M);y=k(ae,"DIV",{class:!0});var Ne=$(y);for(let Q=0;Q<h.length;Q+=1)h[Q].l(Ne);Ne.forEach(_),q=A(ae),B=k(ae,"DIV",{class:!0});var S=$(B);K=k(S,"SPAN",{class:!0,"data-svelte-h":!0}),G(K)!=="svelte-1hpi062"&&(K.textContent=Le),he=A(S),j=k(S,"BUTTON",{class:!0,"data-svelte-h":!0}),G(j)!=="svelte-1ths5wx"&&(j.innerHTML=Ee),me=A(S),z=k(S,"BUTTON",{class:!0,"data-svelte-h":!0}),G(z)!=="svelte-4qgc3s"&&(z.innerHTML=Me),ve=A(S),F=k(S,"BUTTON",{class:!0,"data-svelte-h":!0}),G(F)!=="svelte-125gzld"&&(F.innerHTML=Be),ge=A(S),R=k(S,"BUTTON",{class:!0,"data-svelte-h":!0}),G(R)!=="svelte-1cdszhd"&&(R.innerHTML=we),S.forEach(_),ae.forEach(_),this.h()},h(){T(e,"rel","stylesheet"),T(e,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"),T(l,"id","codeElement"),T(m,"class","svelte-1ud1sdt"),T(d,"class","code svelte-1ud1sdt"),T(r,"class","flip-card-front svelte-1ud1sdt"),T(P,"class","flip-card-back svelte-1ud1sdt"),T(a,"class","flip-card-inner svelte-1ud1sdt"),T(u,"class","flip-card svelte-1ud1sdt"),T(f,"class","svelte-1ud1sdt"),Se(f,"flipped",n[2]),T(y,"class","options svelte-1ud1sdt"),T(K,"class","material-symbols-outlined"),T(j,"class","button svelte-1ud1sdt"),T(z,"class","button green svelte-1ud1sdt"),T(F,"class","button svelte-1ud1sdt"),T(R,"class","button svelte-1ud1sdt"),T(B,"class","menu svelte-1ud1sdt"),T(M,"class","botonera svelte-1ud1sdt")},m(s,i){E(s,e,i),E(s,t,i),E(s,l,i),D&&D.m(l,null),E(s,c,i),E(s,f,i),g(f,u),g(u,a),g(a,r),g(r,d),g(d,m),g(m,H);for(let o=0;o<p.length;o+=1)p[o]&&p[o].m(m,null);L&&L.m(m,null),g(m,V),g(a,Y),g(a,P),C&&C.m(P,null),E(s,X,i),E(s,N,i),E(s,v,i),E(s,M,i),g(M,y);for(let o=0;o<h.length;o+=1)h[o]&&h[o].m(y,null);g(M,q),g(M,B),g(B,K),g(B,he),g(B,j),g(B,me),g(B,z),g(B,ve),g(B,F),g(B,ge),g(B,R),x=!0,be||(Ce=[ee(N,"click",n[13]),ee(j,"click",n[4]),ee(z,"click",n[4]),ee(F,"click",n[5]),ee(R,"click",n[6])],be=!0)},p(s,[i]){if(ne&&ne.p&&(!x||i&2048)&&Oe(ne,ke,s,s[11],x?Ve(ke,s[11],i,rt):Ae(s[11]),Fe),i&1){U=re(s[0]);let o;for(o=0;o<U.length;o+=1){const W=ze(s,U,o);p[o]?(p[o].p(W,i),w(p[o],1)):(p[o]=We(W),p[o].c(),w(p[o],1),p[o].m(m,V))}for(fe(),o=U.length;o<p.length;o+=1)Ye(o);ue(),U.length?L&&(L.d(1),L=null):L||(L=Re(),L.c(),L.m(m,V))}if(C&&C.p&&(!x||i&2048)&&Oe(C,Te,s,s[11],x?Ve(Te,s[11],i,at):Ae(s[11]),je),(!x||i&4)&&Se(f,"flipped",s[2]),i&10){J=re(s[1]);let o;for(o=0;o<J.length;o+=1){const W=qe(s,J,o);h[o]?(h[o].p(W,i),w(h[o],1)):(h[o]=Ge(W),h[o].c(),w(h[o],1),h[o].m(y,null))}for(fe(),o=J.length;o<h.length;o+=1)Ze(o);ue()}},i(s){if(!x){w(D,s);for(let i=0;i<U.length;i+=1)w(p[i]);w(C,s);for(let i=0;i<J.length;i+=1)w(h[i]);x=!0}},o(s){I(D,s),p=p.filter(Boolean);for(let i=0;i<p.length;i+=1)I(p[i]);I(C,s),h=h.filter(Boolean);for(let i=0;i<h.length;i+=1)I(h[i]);x=!1},d(s){s&&(_(e),_(t),_(l),_(c),_(f),_(X),_(N),_(v),_(M)),D&&D.d(s),xe(p,s),L&&L.d(),C&&C.d(s),xe(h,s),be=!1,et(Ce)}}}const Ke=/(\$.*?\$)/g;function _t(n,e,t){let{$$slots:l={},$$scope:c}=e,{codeBlock:f}=e,u=[],a=0,r=[],d=[],{shuffle:m=!0}=e,{gaps:H=[]}=e,V=!1;function Y(v){document.getElementById("input-"+a).innerHTML=v.detail.text,r[a]=v.detail.order,t(10,a++,a)}function P(){const v=[...new Set(r)];console.log(v),console.log(v.length==u.length&&v.every((M,y,q)=>!y||q[y-1]<=M))}function X(){a>0&&a<=u.length&&(document.getElementById("input-"+t(10,--a)).innerHTML=" ",r.pop())}function N(){for(;r.length>0;)r.pop(),document.getElementById("input-"+t(10,--a)).innerHTML=" "}tt(async()=>{let v=0,M=[];t(9,u=f.match(Ke)),u.length===0&&console.error("Whoops"),f.split(Ke).forEach(y=>y.startsWith("$")&&y.endsWith("$")?H.push({element:y,type:nt,value:v++}):H.push({element:y})),u.forEach((y,q)=>M.push({order:q,text:y.slice(1,-1)})),t(1,d=m==!0?M.sort((y,q)=>.5-Math.random()):M),t(0,H=[...H])});const se=()=>t(2,V=!V);return n.$$set=v=>{"codeBlock"in v&&t(7,f=v.codeBlock),"shuffle"in v&&t(8,m=v.shuffle),"gaps"in v&&t(0,H=v.gaps),"$$scope"in v&&t(11,c=v.$$scope)},n.$$.update=()=>{n.$$.dirty&1536&&(a<0?t(10,a=0):u!=null&&a>u.length&&t(10,a=u.length))},[H,d,V,Y,P,X,N,f,m,u,a,c,l,se]}class dt extends Qe{constructor(e){super(),Xe(this,e,_t,ut,Je,{codeBlock:7,shuffle:8,gaps:0})}}function pt(n){let e,t="TODA variable necesita un <b>nombre</b>. Los <b>nombres</b> de las variables <b>no pueden</b> contener espacios.";return{c(){e=b("span"),e.innerHTML=t,this.h()},l(l){e=k(l,"SPAN",{slot:!0,"data-svelte-h":!0}),G(e)!=="svelte-1eev8w"&&(e.innerHTML=t),this.h()},h(){T(e,"slot","text")},m(l,c){E(l,e,c)},p:ce,d(l){l&&_(e)}}}function ht(n){let e,t="Tarjeta por detrás";return{c(){e=b("span"),e.textContent=t,this.h()},l(l){e=k(l,"SPAN",{slot:!0,"data-svelte-h":!0}),G(e)!=="svelte-1maymrv"&&(e.textContent=t),this.h()},h(){T(e,"slot","back")},m(l,c){E(l,e,c)},p:ce,d(l){l&&_(e)}}}function mt(n){let e,t;return e=new dt({props:{shuffle:"true",codeBlock:n[0],$$slots:{back:[ht],text:[pt]},$$scope:{ctx:n}}}),{c(){_e(e.$$.fragment)},l(l){ye(e.$$.fragment,l)},m(l,c){de(e,l,c),t=!0},p(l,[c]){const f={};c&2&&(f.$$scope={dirty:c,ctx:l}),e.$set(f)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){pe(e,l)}}}function vt(n){return[`
function $blah$() {
    console.log('hola don pepito')
}`]}class yt extends Qe{constructor(e){super(),Xe(this,e,vt,mt,Je,{})}}export{yt as default};