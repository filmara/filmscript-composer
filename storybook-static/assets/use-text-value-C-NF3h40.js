import{r as g,a as at}from"./index-BX3iQpgp.js";import{n as Q,a as Ae,p as dt}from"./use-sync-refs-Bp_oN-Mm.js";import{r as ce}from"./index-DwCBTc21.js";function gt(e){if(e===null)return{width:0,height:0};let{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function Tn(e,t=!1){let[n,o]=g.useReducer(()=>({}),{}),r=g.useMemo(()=>gt(e),[e,n]);return Q(()=>{if(!e)return;let i=new ResizeObserver(o);return i.observe(e),()=>{i.disconnect()}},[e]),t?{width:`${r.width}px`,height:`${r.height}px`}:r}function Le(e){return[e.screenX,e.screenY]}function On(){let e=g.useRef([-1,-1]);return{wasMoved(t){let n=Le(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=Le(t)}}}function de(){return typeof window<"u"}function Z(e){return Ke(e)?(e.nodeName||"").toLowerCase():"#document"}function I(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function j(e){var t;return(t=(Ke(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ke(e){return de()?e instanceof Node||e instanceof I(e).Node:!1}function $(e){return de()?e instanceof Element||e instanceof I(e).Element:!1}function _(e){return de()?e instanceof HTMLElement||e instanceof I(e).HTMLElement:!1}function He(e){return!de()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof I(e).ShadowRoot}function re(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function mt(e){return["table","td","th"].includes(Z(e))}function ge(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Fe(e){const t=Se(),n=$(e)?W(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ht(e){let t=Y(e);for(;_(t)&&!J(t);){if(Fe(t))return t;if(ge(t))return null;t=Y(t)}return null}function Se(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(e){return["html","body","#document"].includes(Z(e))}function W(e){return I(e).getComputedStyle(e)}function me(e){return $(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Y(e){if(Z(e)==="html")return e;const t=e.assignedSlot||e.parentNode||He(e)&&e.host||j(e);return He(t)?t.host:t}function Ge(e){const t=Y(e);return J(t)?e.ownerDocument?e.ownerDocument.body:e.body:_(t)&&re(t)?t:Ge(t)}function ne(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Ge(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),l=I(r);if(i){const s=Re(l);return t.concat(l,l.visualViewport||[],re(r)?r:[],s&&n?ne(s):[])}return t.concat(r,ne(r,[],n))}function Re(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function pt(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:o}=t;return n+"/"+o}).join(" "):navigator.userAgent}const U=Math.min,P=Math.max,oe=Math.round,le=Math.floor,V=e=>({x:e,y:e}),xt={left:"right",right:"left",bottom:"top",top:"bottom"},wt={start:"end",end:"start"};function $e(e,t,n){return P(e,U(t,n))}function ee(e,t){return typeof e=="function"?e(t):e}function q(e){return e.split("-")[0]}function ie(e){return e.split("-")[1]}function Je(e){return e==="x"?"y":"x"}function Qe(e){return e==="y"?"height":"width"}function X(e){return["top","bottom"].includes(q(e))?"y":"x"}function Ze(e){return Je(X(e))}function yt(e,t,n){n===void 0&&(n=!1);const o=ie(e),r=Ze(e),i=Qe(r);let l=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=fe(l)),[l,fe(l)]}function bt(e){const t=fe(e);return[Ce(e),t,Ce(t)]}function Ce(e){return e.replace(/start|end/g,t=>wt[t])}function vt(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:l;default:return[]}}function Rt(e,t,n,o){const r=ie(e);let i=vt(q(e),n==="start",o);return r&&(i=i.map(l=>l+"-"+r),t&&(i=i.concat(i.map(Ce)))),i}function fe(e){return e.replace(/left|right|bottom|top/g,t=>xt[t])}function Ct(e){return{top:0,right:0,bottom:0,left:0,...e}}function Et(e){return typeof e!="number"?Ct(e):{top:e,right:e,bottom:e,left:e}}function ue(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Be(e,t,n){let{reference:o,floating:r}=e;const i=X(t),l=Ze(t),s=Qe(l),f=q(t),c=i==="y",u=o.x+o.width/2-r.width/2,m=o.y+o.height/2-r.height/2,h=o[s]/2-r[s]/2;let a;switch(f){case"top":a={x:u,y:o.y-r.height};break;case"bottom":a={x:u,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:m};break;case"left":a={x:o.x-r.width,y:m};break;default:a={x:o.x,y:o.y}}switch(ie(t)){case"start":a[l]-=h*(n&&c?-1:1);break;case"end":a[l]+=h*(n&&c?-1:1);break}return a}const At=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,s=i.filter(Boolean),f=await(l.isRTL==null?void 0:l.isRTL(t));let c=await l.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:m}=Be(c,o,f),h=o,a={},d=0;for(let p=0;p<s.length;p++){const{name:x,fn:y}=s[p],{x:b,y:w,data:v,reset:R}=await y({x:u,y:m,initialPlacement:o,placement:h,strategy:r,middlewareData:a,rects:c,platform:l,elements:{reference:e,floating:t}});u=b??u,m=w??m,a={...a,[x]:{...a[x],...v}},R&&d<=50&&(d++,typeof R=="object"&&(R.placement&&(h=R.placement),R.rects&&(c=R.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:r}):R.rects),{x:u,y:m}=Be(c,h,f)),p=-1)}return{x:u,y:m,placement:h,strategy:r,middlewareData:a}};async function he(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:l,elements:s,strategy:f}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:h=!1,padding:a=0}=ee(t,e),d=Et(a),x=s[h?m==="floating"?"reference":"floating":m],y=ue(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:f})),b=m==="floating"?{x:o,y:r,width:l.floating.width,height:l.floating.height}:l.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),v=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},R=ue(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:b,offsetParent:w,strategy:f}):b);return{top:(y.top-R.top+d.top)/v.y,bottom:(R.bottom-y.bottom+d.bottom)/v.y,left:(y.left-R.left+d.left)/v.x,right:(R.right-y.right+d.right)/v.x}}const Ft=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:l,initialPlacement:s,platform:f,elements:c}=t,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:p=!0,...x}=ee(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const y=q(r),b=X(s),w=q(s)===s,v=await(f.isRTL==null?void 0:f.isRTL(c.floating)),R=h||(w||!p?[fe(s)]:bt(s)),E=d!=="none";!h&&E&&R.push(...Rt(s,p,d,v));const A=[s,...R],L=await he(t,x),k=[];let D=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&k.push(L[y]),m){const T=yt(r,l,v);k.push(L[T[0]],L[T[1]])}if(D=[...D,{placement:r,overflows:k}],!k.every(T=>T<=0)){var S,B;const T=(((S=i.flip)==null?void 0:S.index)||0)+1,z=A[T];if(z)return{data:{index:T,overflows:D},reset:{placement:z}};let O=(B=D.filter(N=>N.overflows[0]<=0).sort((N,C)=>N.overflows[1]-C.overflows[1])[0])==null?void 0:B.placement;if(!O)switch(a){case"bestFit":{var M;const N=(M=D.filter(C=>{if(E){const F=X(C.placement);return F===b||F==="y"}return!0}).map(C=>[C.placement,C.overflows.filter(F=>F>0).reduce((F,H)=>F+H,0)]).sort((C,F)=>C[1]-F[1])[0])==null?void 0:M[0];N&&(O=N);break}case"initialPlacement":O=s;break}if(r!==O)return{reset:{placement:O}}}return{}}}};async function St(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),l=q(n),s=ie(n),f=X(n)==="y",c=["left","top"].includes(l)?-1:1,u=i&&f?-1:1,m=ee(t,e);let{mainAxis:h,crossAxis:a,alignmentAxis:d}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return s&&typeof d=="number"&&(a=s==="end"?d*-1:d),f?{x:a*u,y:h*c}:{x:h*c,y:a*u}}const Tt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:l,middlewareData:s}=t,f=await St(t,e);return l===((n=s.offset)==null?void 0:n.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+f.x,y:i+f.y,data:{...f,placement:l}}}}},Ot=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:x=>{let{x:y,y:b}=x;return{x:y,y:b}}},...f}=ee(e,t),c={x:n,y:o},u=await he(t,f),m=X(q(r)),h=Je(m);let a=c[h],d=c[m];if(i){const x=h==="y"?"top":"left",y=h==="y"?"bottom":"right",b=a+u[x],w=a-u[y];a=$e(b,a,w)}if(l){const x=m==="y"?"top":"left",y=m==="y"?"bottom":"right",b=d+u[x],w=d-u[y];d=$e(b,d,w)}const p=s.fn({...t,[h]:a,[m]:d});return{...p,data:{x:p.x-n,y:p.y-o,enabled:{[h]:i,[m]:l}}}}}},Dt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:i,platform:l,elements:s}=t,{apply:f=()=>{},...c}=ee(e,t),u=await he(t,c),m=q(r),h=ie(r),a=X(r)==="y",{width:d,height:p}=i.floating;let x,y;m==="top"||m==="bottom"?(x=m,y=h===(await(l.isRTL==null?void 0:l.isRTL(s.floating))?"start":"end")?"left":"right"):(y=m,x=h==="end"?"top":"bottom");const b=p-u.top-u.bottom,w=d-u.left-u.right,v=U(p-u[x],b),R=U(d-u[y],w),E=!t.middlewareData.shift;let A=v,L=R;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(L=w),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(A=b),E&&!h){const D=P(u.left,0),S=P(u.right,0),B=P(u.top,0),M=P(u.bottom,0);a?L=d-2*(D!==0||S!==0?D+S:P(u.left,u.right)):A=p-2*(B!==0||M!==0?B+M:P(u.top,u.bottom))}await f({...t,availableWidth:L,availableHeight:A});const k=await l.getDimensions(s.floating);return d!==k.width||p!==k.height?{reset:{rects:!0}}:{}}}};function et(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=_(e),i=r?e.offsetWidth:n,l=r?e.offsetHeight:o,s=oe(n)!==i||oe(o)!==l;return s&&(n=i,o=l),{width:n,height:o,$:s}}function Te(e){return $(e)?e:e.contextElement}function G(e){const t=Te(e);if(!_(t))return V(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=et(t);let l=(i?oe(n.width):n.width)/o,s=(i?oe(n.height):n.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const Mt=V(0);function tt(e){const t=I(e);return!Se()||!t.visualViewport?Mt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Pt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==I(e)?!1:t}function K(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Te(e);let l=V(1);t&&(o?$(o)&&(l=G(o)):l=G(e));const s=Pt(i,n,o)?tt(i):V(0);let f=(r.left+s.x)/l.x,c=(r.top+s.y)/l.y,u=r.width/l.x,m=r.height/l.y;if(i){const h=I(i),a=o&&$(o)?I(o):o;let d=h,p=Re(d);for(;p&&o&&a!==d;){const x=G(p),y=p.getBoundingClientRect(),b=W(p),w=y.left+(p.clientLeft+parseFloat(b.paddingLeft))*x.x,v=y.top+(p.clientTop+parseFloat(b.paddingTop))*x.y;f*=x.x,c*=x.y,u*=x.x,m*=x.y,f+=w,c+=v,d=I(p),p=Re(d)}}return ue({width:u,height:m,x:f,y:c})}function Oe(e,t){const n=me(e).scrollLeft;return t?t.left+n:K(j(e)).left+n}function nt(e,t,n){n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(n?0:Oe(e,o)),i=o.top+t.scrollTop;return{x:r,y:i}}function Lt(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",l=j(o),s=t?ge(t.floating):!1;if(o===l||s&&i)return n;let f={scrollLeft:0,scrollTop:0},c=V(1);const u=V(0),m=_(o);if((m||!m&&!i)&&((Z(o)!=="body"||re(l))&&(f=me(o)),_(o))){const a=K(o);c=G(o),u.x=a.x+o.clientLeft,u.y=a.y+o.clientTop}const h=l&&!m&&!i?nt(l,f,!0):V(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-f.scrollLeft*c.x+u.x+h.x,y:n.y*c.y-f.scrollTop*c.y+u.y+h.y}}function Ht(e){return Array.from(e.getClientRects())}function $t(e){const t=j(e),n=me(e),o=e.ownerDocument.body,r=P(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=P(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+Oe(e);const s=-n.scrollTop;return W(o).direction==="rtl"&&(l+=P(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:l,y:s}}function Bt(e,t){const n=I(e),o=j(e),r=n.visualViewport;let i=o.clientWidth,l=o.clientHeight,s=0,f=0;if(r){i=r.width,l=r.height;const c=Se();(!c||c&&t==="fixed")&&(s=r.offsetLeft,f=r.offsetTop)}return{width:i,height:l,x:s,y:f}}function It(e,t){const n=K(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=_(e)?G(e):V(1),l=e.clientWidth*i.x,s=e.clientHeight*i.y,f=r*i.x,c=o*i.y;return{width:l,height:s,x:f,y:c}}function Ie(e,t,n){let o;if(t==="viewport")o=Bt(e,n);else if(t==="document")o=$t(j(e));else if($(t))o=It(t,n);else{const r=tt(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return ue(o)}function ot(e,t){const n=Y(e);return n===t||!$(n)||J(n)?!1:W(n).position==="fixed"||ot(n,t)}function kt(e,t){const n=t.get(e);if(n)return n;let o=ne(e,[],!1).filter(s=>$(s)&&Z(s)!=="body"),r=null;const i=W(e).position==="fixed";let l=i?Y(e):e;for(;$(l)&&!J(l);){const s=W(l),f=Fe(l);!f&&s.position==="fixed"&&(r=null),(i?!f&&!r:!f&&s.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||re(l)&&!f&&ot(e,l))?o=o.filter(u=>u!==l):r=s,l=Y(l)}return t.set(e,o),o}function Nt(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const l=[...n==="clippingAncestors"?ge(t)?[]:kt(t,this._c):[].concat(n),o],s=l[0],f=l.reduce((c,u)=>{const m=Ie(t,u,r);return c.top=P(m.top,c.top),c.right=U(m.right,c.right),c.bottom=U(m.bottom,c.bottom),c.left=P(m.left,c.left),c},Ie(t,s,r));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function Wt(e){const{width:t,height:n}=et(e);return{width:t,height:n}}function Vt(e,t,n){const o=_(t),r=j(t),i=n==="fixed",l=K(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const f=V(0);if(o||!o&&!i)if((Z(t)!=="body"||re(r))&&(s=me(t)),o){const h=K(t,!0,i,t);f.x=h.x+t.clientLeft,f.y=h.y+t.clientTop}else r&&(f.x=Oe(r));const c=r&&!o&&!i?nt(r,s):V(0),u=l.left+s.scrollLeft-f.x-c.x,m=l.top+s.scrollTop-f.y-c.y;return{x:u,y:m,width:l.width,height:l.height}}function xe(e){return W(e).position==="static"}function ke(e,t){if(!_(e)||W(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return j(e)===n&&(n=n.ownerDocument.body),n}function rt(e,t){const n=I(e);if(ge(e))return n;if(!_(e)){let r=Y(e);for(;r&&!J(r);){if($(r)&&!xe(r))return r;r=Y(r)}return n}let o=ke(e,t);for(;o&&mt(o)&&xe(o);)o=ke(o,t);return o&&J(o)&&xe(o)&&!Fe(o)?n:o||ht(e)||n}const _t=async function(e){const t=this.getOffsetParent||rt,n=this.getDimensions,o=await n(e.floating);return{reference:Vt(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function jt(e){return W(e).direction==="rtl"}const zt={convertOffsetParentRelativeRectToViewportRelativeRect:Lt,getDocumentElement:j,getClippingRect:Nt,getOffsetParent:rt,getElementRects:_t,getClientRects:Ht,getDimensions:Wt,getScale:G,isElement:$,isRTL:jt};function it(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Yt(e,t){let n=null,o;const r=j(e);function i(){var s;clearTimeout(o),(s=n)==null||s.disconnect(),n=null}function l(s,f){s===void 0&&(s=!1),f===void 0&&(f=1),i();const c=e.getBoundingClientRect(),{left:u,top:m,width:h,height:a}=c;if(s||t(),!h||!a)return;const d=le(m),p=le(r.clientWidth-(u+h)),x=le(r.clientHeight-(m+a)),y=le(u),w={rootMargin:-d+"px "+-p+"px "+-x+"px "+-y+"px",threshold:P(0,U(1,f))||1};let v=!0;function R(E){const A=E[0].intersectionRatio;if(A!==f){if(!v)return l();A?l(!1,A):o=setTimeout(()=>{l(!1,1e-7)},1e3)}A===1&&!it(c,e.getBoundingClientRect())&&l(),v=!1}try{n=new IntersectionObserver(R,{...w,root:r.ownerDocument})}catch{n=new IntersectionObserver(R,w)}n.observe(e)}return l(!0),i}function qt(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:f=!1}=o,c=Te(e),u=r||i?[...c?ne(c):[],...ne(t)]:[];u.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),i&&y.addEventListener("resize",n)});const m=c&&s?Yt(c,n):null;let h=-1,a=null;l&&(a=new ResizeObserver(y=>{let[b]=y;b&&b.target===c&&a&&(a.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=a)==null||w.observe(t)})),n()}),c&&!f&&a.observe(c),a.observe(t));let d,p=f?K(e):null;f&&x();function x(){const y=K(e);p&&!it(p,y)&&n(),p=y,d=requestAnimationFrame(x)}return n(),()=>{var y;u.forEach(b=>{r&&b.removeEventListener("scroll",n),i&&b.removeEventListener("resize",n)}),m==null||m(),(y=a)==null||y.disconnect(),a=null,f&&cancelAnimationFrame(d)}}const we=he,Ut=Tt,Xt=Ot,Kt=Ft,Gt=Dt,Jt=(e,t,n)=>{const o=new Map,r={platform:zt,...n},i={...r.platform,_c:o};return At(e,t,{...r,platform:i})};var se=typeof document<"u"?g.useLayoutEffect:g.useEffect;function ae(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!ae(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!ae(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function lt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ne(e,t){const n=lt(e);return Math.round(t*n)/n}function ye(e){const t=g.useRef(e);return se(()=>{t.current=e}),t}function Qt(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:l}={},transform:s=!0,whileElementsMounted:f,open:c}=e,[u,m]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,a]=g.useState(o);ae(h,o)||a(o);const[d,p]=g.useState(null),[x,y]=g.useState(null),b=g.useCallback(C=>{C!==E.current&&(E.current=C,p(C))},[]),w=g.useCallback(C=>{C!==A.current&&(A.current=C,y(C))},[]),v=i||d,R=l||x,E=g.useRef(null),A=g.useRef(null),L=g.useRef(u),k=f!=null,D=ye(f),S=ye(r),B=ye(c),M=g.useCallback(()=>{if(!E.current||!A.current)return;const C={placement:t,strategy:n,middleware:h};S.current&&(C.platform=S.current),Jt(E.current,A.current,C).then(F=>{const H={...F,isPositioned:B.current!==!1};T.current&&!ae(L.current,H)&&(L.current=H,ce.flushSync(()=>{m(H)}))})},[h,t,n,S,B]);se(()=>{c===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,m(C=>({...C,isPositioned:!1})))},[c]);const T=g.useRef(!1);se(()=>(T.current=!0,()=>{T.current=!1}),[]),se(()=>{if(v&&(E.current=v),R&&(A.current=R),v&&R){if(D.current)return D.current(v,R,M);M()}},[v,R,M,D,k]);const z=g.useMemo(()=>({reference:E,floating:A,setReference:b,setFloating:w}),[b,w]),O=g.useMemo(()=>({reference:v,floating:R}),[v,R]),N=g.useMemo(()=>{const C={position:n,left:0,top:0};if(!O.floating)return C;const F=Ne(O.floating,u.x),H=Ne(O.floating,u.y);return s?{...C,transform:"translate("+F+"px, "+H+"px)",...lt(O.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:F,top:H}},[n,s,O.floating,u.x,u.y]);return g.useMemo(()=>({...u,update:M,refs:z,elements:O,floatingStyles:N}),[u,M,z,O,N])}const st=(e,t)=>({...Ut(e),options:[e,t]}),Zt=(e,t)=>({...Xt(e),options:[e,t]}),en=(e,t)=>({...Kt(e),options:[e,t]}),tn=(e,t)=>({...Gt(e),options:[e,t]}),ct={...at},nn=ct.useInsertionEffect,on=nn||(e=>e());function ft(e){const t=g.useRef(()=>{});return on(()=>{t.current=e}),g.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}var Ee=typeof document<"u"?g.useLayoutEffect:g.useEffect;let We=!1,rn=0;const Ve=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+rn++;function ln(){const[e,t]=g.useState(()=>We?Ve():void 0);return Ee(()=>{e==null&&t(Ve())},[]),g.useEffect(()=>{We=!0},[]),e}const sn=ct.useId,cn=sn||ln;function fn(){const e=new Map;return{emit(t,n){var o;(o=e.get(t))==null||o.forEach(r=>r(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(r=>r!==n))||[])}}}const un=g.createContext(null),an=g.createContext(null),dn=()=>{var e;return((e=g.useContext(un))==null?void 0:e.id)||null},gn=()=>g.useContext(an),mn="data-floating-ui-focusable";function hn(e){const{open:t=!1,onOpenChange:n,elements:o}=e,r=cn(),i=g.useRef({}),[l]=g.useState(()=>fn()),s=dn()!=null,[f,c]=g.useState(o.reference),u=ft((a,d,p)=>{i.current.openEvent=a?d:void 0,l.emit("openchange",{open:a,event:d,reason:p,nested:s}),n==null||n(a,d,p)}),m=g.useMemo(()=>({setPositionReference:c}),[]),h=g.useMemo(()=>({reference:f||o.reference||null,floating:o.floating||null,domReference:o.reference}),[f,o.reference,o.floating]);return g.useMemo(()=>({dataRef:i,open:t,onOpenChange:u,elements:h,events:l,floatingId:r,refs:m}),[t,u,h,l,r,m])}function pn(e){e===void 0&&(e={});const{nodeId:t}=e,n=hn({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,r=o.elements,[i,l]=g.useState(null),[s,f]=g.useState(null),u=(r==null?void 0:r.domReference)||i,m=g.useRef(null),h=gn();Ee(()=>{u&&(m.current=u)},[u]);const a=Qt({...e,elements:{...r,...s&&{reference:s}}}),d=g.useCallback(w=>{const v=$(w)?{getBoundingClientRect:()=>w.getBoundingClientRect(),contextElement:w}:w;f(v),a.refs.setReference(v)},[a.refs]),p=g.useCallback(w=>{($(w)||w===null)&&(m.current=w,l(w)),($(a.refs.reference.current)||a.refs.reference.current===null||w!==null&&!$(w))&&a.refs.setReference(w)},[a.refs]),x=g.useMemo(()=>({...a.refs,setReference:p,setPositionReference:d,domReference:m}),[a.refs,p,d]),y=g.useMemo(()=>({...a.elements,domReference:u}),[a.elements,u]),b=g.useMemo(()=>({...a,...o,refs:x,elements:y,nodeId:t}),[a,x,y,t,o]);return Ee(()=>{o.dataRef.current.floatingContext=b;const w=h==null?void 0:h.nodesRef.current.find(v=>v.id===t);w&&(w.context=b)}),g.useMemo(()=>({...a,context:b,refs:x,elements:y}),[a,x,y,b])}const _e="active",je="selected";function be(e,t,n){const o=new Map,r=n==="item";let i=e;if(r&&e){const{[_e]:l,[je]:s,...f}=e;i=f}return{...n==="floating"&&{tabIndex:-1,[mn]:""},...i,...t.map(l=>{const s=l?l[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((l,s)=>(s&&Object.entries(s).forEach(f=>{let[c,u]=f;if(!(r&&[_e,je].includes(c)))if(c.indexOf("on")===0){if(o.has(c)||o.set(c,[]),typeof u=="function"){var m;(m=o.get(c))==null||m.push(u),l[c]=function(){for(var h,a=arguments.length,d=new Array(a),p=0;p<a;p++)d[p]=arguments[p];return(h=o.get(c))==null?void 0:h.map(x=>x(...d)).find(x=>x!==void 0)}}}else l[c]=u}),l),{})}}function xn(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),o=e.map(s=>s==null?void 0:s.item),r=g.useCallback(s=>be(s,e,"reference"),t),i=g.useCallback(s=>be(s,e,"floating"),n),l=g.useCallback(s=>be(s,e,"item"),o);return g.useMemo(()=>({getReferenceProps:r,getFloatingProps:i,getItemProps:l}),[r,i,l])}function ze(e,t){return{...e,rects:{...e.rects,floating:{...e.rects.floating,height:t}}}}const wn=e=>({name:"inner",options:e,async fn(t){const{listRef:n,overflowRef:o,onFallbackChange:r,offset:i=0,index:l=0,minItemsVisible:s=4,referenceOverflowThreshold:f=0,scrollRef:c,...u}=ee(e,t),{rects:m,elements:{floating:h}}=t,a=n.current[l],d=(c==null?void 0:c.current)||h,p=h.clientTop||d.clientTop,x=h.clientTop!==0,y=d.clientTop!==0,b=h===d;if(!a)return{};const w={...t,...await st(-a.offsetTop-h.clientTop-m.reference.height/2-a.offsetHeight/2-i).fn(t)},v=await we(ze(w,d.scrollHeight+p+h.clientTop),u),R=await we(w,{...u,elementContext:"reference"}),E=P(0,v.top),A=w.y+E,D=(d.scrollHeight>d.clientHeight?S=>S:oe)(P(0,d.scrollHeight+(x&&b||y?p*2:0)-E-P(0,v.bottom)));if(d.style.maxHeight=D+"px",d.scrollTop=E,r){const S=d.offsetHeight<a.offsetHeight*U(s,n.current.length)-1||R.top>=-f||R.bottom>=-f;ce.flushSync(()=>r(S))}return o&&(o.current=await we(ze({...w,y:A},d.offsetHeight+p+h.clientTop),u)),{y:A}}});function yn(e,t){const{open:n,elements:o}=e,{enabled:r=!0,overflowRef:i,scrollRef:l,onChange:s}=t,f=ft(s),c=g.useRef(!1),u=g.useRef(null),m=g.useRef(null);g.useEffect(()=>{if(!r)return;function a(p){if(p.ctrlKey||!d||i.current==null)return;const x=p.deltaY,y=i.current.top>=-.5,b=i.current.bottom>=-.5,w=d.scrollHeight-d.clientHeight,v=x<0?-1:1,R=x<0?"max":"min";d.scrollHeight<=d.clientHeight||(!y&&x>0||!b&&x<0?(p.preventDefault(),ce.flushSync(()=>{f(E=>E+Math[R](x,w*v))})):/firefox/i.test(pt())&&(d.scrollTop+=x))}const d=(l==null?void 0:l.current)||o.floating;if(n&&d)return d.addEventListener("wheel",a),requestAnimationFrame(()=>{u.current=d.scrollTop,i.current!=null&&(m.current={...i.current})}),()=>{u.current=null,m.current=null,d.removeEventListener("wheel",a)}},[r,n,o.floating,i,l,f]);const h=g.useMemo(()=>({onKeyDown(){c.current=!0},onWheel(){c.current=!1},onPointerMove(){c.current=!1},onScroll(){const a=(l==null?void 0:l.current)||o.floating;if(!(!i.current||!a||!c.current)){if(u.current!==null){const d=a.scrollTop-u.current;(i.current.bottom<-.5&&d<-1||i.current.top<-.5&&d>1)&&ce.flushSync(()=>f(p=>p+d))}requestAnimationFrame(()=>{u.current=a.scrollTop})}}}),[o.floating,f,i,l]);return g.useMemo(()=>r?{floating:h}:{},[r,h])}let te=g.createContext({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});te.displayName="FloatingContext";let De=g.createContext(null);De.displayName="PlacementContext";function Dn(e){return g.useMemo(()=>e?typeof e=="string"?{to:e}:e:null,[e])}function Mn(){return g.useContext(te).setReference}function Pn(){return g.useContext(te).getReferenceProps}function Ln(){let{getFloatingProps:e,slot:t}=g.useContext(te);return g.useCallback((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function Hn(e=null){e===!1&&(e=null),typeof e=="string"&&(e={to:e});let t=g.useContext(De),n=g.useMemo(()=>e,[JSON.stringify(e,(r,i)=>{var l;return(l=i==null?void 0:i.outerHTML)!=null?l:i})]);Q(()=>{t==null||t(n??null)},[t,n]);let o=g.useContext(te);return g.useMemo(()=>[o.setFloating,e?o.styles:{}],[o.setFloating,e,o.styles])}let Ye=4;function $n({children:e,enabled:t=!0}){let[n,o]=g.useState(null),[r,i]=g.useState(0),l=g.useRef(null),[s,f]=g.useState(null);bn(s);let c=t&&n!==null&&s!==null,{to:u="bottom",gap:m=0,offset:h=0,padding:a=0,inner:d}=vn(n,s),[p,x="center"]=u.split(" ");Q(()=>{c&&i(0)},[c]);let{refs:y,floatingStyles:b,context:w}=pn({open:c,placement:p==="selection"?x==="center"?"bottom":`bottom-${x}`:x==="center"?`${p}`:`${p}-${x}`,strategy:"absolute",transform:!1,middleware:[st({mainAxis:p==="selection"?0:m,crossAxis:h}),Zt({padding:a}),p!=="selection"&&en({padding:a}),p==="selection"&&d?wn({...d,padding:a,overflowRef:l,offset:r,minItemsVisible:Ye,referenceOverflowThreshold:a,onFallbackChange(S){var B,M;if(!S)return;let T=w.elements.floating;if(!T)return;let z=parseFloat(getComputedStyle(T).scrollPaddingBottom)||0,O=Math.min(Ye,T.childElementCount),N=0,C=0;for(let F of(M=(B=w.elements.floating)==null?void 0:B.childNodes)!=null?M:[])if(F instanceof HTMLElement){let H=F.offsetTop,Me=H+F.clientHeight+z,pe=T.scrollTop,Pe=pe+T.clientHeight;if(H>=pe&&Me<=Pe)O--;else{C=Math.max(0,Math.min(Me,Pe)-Math.max(H,pe)),N=F.clientHeight;break}}O>=1&&i(F=>{let H=N*O-C+z;return F>=H?F:H})}}):null,tn({padding:a,apply({availableWidth:S,availableHeight:B,elements:M}){Object.assign(M.floating.style,{overflow:"auto",maxWidth:`${S}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${B}px)`})}})].filter(Boolean),whileElementsMounted:qt}),[v=p,R=x]=w.placement.split("-");p==="selection"&&(v="selection");let E=g.useMemo(()=>({anchor:[v,R].filter(Boolean).join(" ")}),[v,R]),A=yn(w,{overflowRef:l,onChange:i}),{getReferenceProps:L,getFloatingProps:k}=xn([A]),D=Ae(S=>{f(S),y.setFloating(S)});return g.createElement(De.Provider,{value:o},g.createElement(te.Provider,{value:{setFloating:D,setReference:y.setReference,styles:b,getReferenceProps:L,getFloatingProps:k,slot:E}},e))}function bn(e){Q(()=>{if(!e)return;let t=new MutationObserver(()=>{let n=window.getComputedStyle(e).maxHeight,o=parseFloat(n);if(isNaN(o))return;let r=parseInt(n);isNaN(r)||o!==r&&(e.style.maxHeight=`${Math.ceil(o)}px`)});return t.observe(e,{attributes:!0,attributeFilter:["style"]}),()=>{t.disconnect()}},[e])}function vn(e,t){var n,o,r;let i=ve((n=e==null?void 0:e.gap)!=null?n:"var(--anchor-gap, 0)",t),l=ve((o=e==null?void 0:e.offset)!=null?o:"var(--anchor-offset, 0)",t),s=ve((r=e==null?void 0:e.padding)!=null?r:"var(--anchor-padding, 0)",t);return{...e,gap:i,offset:l,padding:s}}function ve(e,t,n=void 0){let o=dt(),r=Ae((f,c)=>{if(f==null)return[n,null];if(typeof f=="number")return[f,null];if(typeof f=="string"){if(!c)return[n,null];let u=qe(f,c);return[u,m=>{let h=ut(f);{let a=h.map(d=>window.getComputedStyle(c).getPropertyValue(d));o.requestAnimationFrame(function d(){o.nextFrame(d);let p=!1;for(let[y,b]of h.entries()){let w=window.getComputedStyle(c).getPropertyValue(b);if(a[y]!==w){a[y]=w,p=!0;break}}if(!p)return;let x=qe(f,c);u!==x&&(m(x),u=x)})}return o.dispose}]}return[n,null]}),i=g.useMemo(()=>r(e,t)[0],[e,t]),[l=i,s]=g.useState();return Q(()=>{let[f,c]=r(e,t);if(s(f),!!c)return c(s)},[e,t]),l}function ut(e){let t=/var\((.*)\)/.exec(e);if(t){let n=t[1].indexOf(",");if(n===-1)return[t[1]];let o=t[1].slice(0,n).trim(),r=t[1].slice(n+1).trim();return r?[o,...ut(r)]:[o]}return[]}function qe(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let o=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),o}function Rn(e){throw new Error("Unexpected object: "+e)}var Cn=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Cn||{});function Bn(e,t){let n=t.resolveItems();if(n.length<=0)return null;let o=t.resolveActiveIndex(),r=o??-1;switch(e.focus){case 0:{for(let i=0;i<n.length;++i)if(!t.resolveDisabled(n[i],i,n))return i;return o}case 1:{r===-1&&(r=n.length);for(let i=r-1;i>=0;--i)if(!t.resolveDisabled(n[i],i,n))return i;return o}case 2:{for(let i=r+1;i<n.length;++i)if(!t.resolveDisabled(n[i],i,n))return i;return o}case 3:{for(let i=n.length-1;i>=0;--i)if(!t.resolveDisabled(n[i],i,n))return i;return o}case 4:{for(let i=0;i<n.length;++i)if(t.resolveId(n[i],i,n)===e.id)return i;return o}case 5:return null;default:Rn(e)}}function In(e,t){let n=g.useRef({left:0,top:0});if(Q(()=>{if(!t)return;let r=t.getBoundingClientRect();r&&(n.current=r)},[e,t]),t==null||!e||t===document.activeElement)return!1;let o=t.getBoundingClientRect();return o.top!==n.current.top||o.left!==n.current.left}let Ue=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Xe(e){var t,n;let o=(t=e.innerText)!=null?t:"",r=e.cloneNode(!0);if(!(r instanceof HTMLElement))return o;let i=!1;for(let s of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),i=!0;let l=i?(n=r.innerText)!=null?n:"":o;return Ue.test(l)&&(l=l.replace(Ue,"")),l}function En(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let o=n.split(" ").map(r=>{let i=document.getElementById(r);if(i){let l=i.getAttribute("aria-label");return typeof l=="string"?l.trim():Xe(i).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return Xe(e).trim()}function kn(e){let t=g.useRef(""),n=g.useRef("");return Ae(()=>{let o=e.current;if(!o)return"";let r=o.innerText;if(t.current===r)return n.current;let i=En(o).trim().toLowerCase();return t.current=r,n.current=i,i})}export{Pn as F,$n as M,Hn as R,kn as a,Ln as b,Cn as c,Tn as d,Bn as f,In as s,On as u,Dn as x,Mn as y};
