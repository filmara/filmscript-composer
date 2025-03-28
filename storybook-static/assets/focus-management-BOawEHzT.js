import{u as v,o as x}from"./use-sync-refs-Bp_oN-Mm.js";import{u as m}from"./keyboard-Dv8ekvWT.js";let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),h=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(A||{}),y=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(y||{}),p=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(p||{});function E(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}function S(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(h)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var w=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(w||{});function I(e,t=0){var r;return e===((r=m(e))==null?void 0:r.body)?!1:v(t,{0(){return e.matches(f)},1(){let n=e;for(;n!==null;){if(n.matches(f))return!0;n=n.parentElement}return!1}})}function D(e){let t=m(e);x().nextFrame(()=>{t&&!I(t.activeElement,0)&&O(e)})}var M=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(M||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function O(e){e==null||e.focus({preventScroll:!0})}let _=["textarea","input"].join(",");function P(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,_))!=null?r:!1}function T(e,t=r=>r){return e.slice().sort((r,n)=>{let i=t(r),s=t(n);if(i===null||s===null)return 0;let u=i.compareDocumentPosition(s);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function K(e,t){return L(E(),t,{relativeTo:e})}function L(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:i=[]}={}){let s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?r?T(e):e:t&64?S(e):E(e);i.length>0&&u.length>1&&(u=u.filter(o=>!i.some(d=>d!=null&&"current"in d?(d==null?void 0:d.current)===o:d===o))),n=n??s.activeElement;let b=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),F=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(n))-1;if(t&4)return Math.max(0,u.indexOf(n))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),N=t&32?{preventScroll:!0}:{},c=0,a=u.length,l;do{if(c>=a||c+a<=0)return 0;let o=F+c;if(t&16)o=(o+a)%a;else{if(o<0)return 3;if(o>=a)return 1}l=u[o],l==null||l.focus(N),c+=b}while(l!==s.activeElement);return t&6&&P(l)&&l.select(),2}export{I as A,A as F,D as G,O as I,L as P,y as T,T as _,E as b,f,w as h,K as j};
