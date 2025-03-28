import{j as L}from"./jsx-runtime-DwRxq3ZX.js";import{r as c,R as k}from"./index-BX3iQpgp.js";import{$ as $e,a as Ie}from"./useFocusRing-4VaKALdW.js";import{r as A}from"./index-DwCBTc21.js";import{w as Te,e as Pe}from"./use-resolve-button-type-DBAGrHN0.js";import{u as we}from"./use-by-comparator-Crp3XGDh.js";import{l as Le,T as Me,j as De,p as ke}from"./form-fields-D66muWj_.js";import{M as Ce,y as _e,F as Fe,x as je,s as Ne,R as Ae,b as qe,d as Be,a as Qe,u as Ke,c as E,f as le}from"./use-text-value-C-NF3h40.js";import{O as ce,K as H,y as z,u as Q,n as ue,a as S,p as fe,L as U,_ as me,b as He,o as ze}from"./use-sync-refs-Bp_oN-Mm.js";import{R as Ue,n as Ve,m as Ge,f as Je,y as Xe,r as We}from"./portal-CtDEOrxV.js";import{c as Ze,i as X,u as Ye,x as et,R as tt}from"./open-closed-CWhWCLos.js";import{a as nt,U as ot}from"./description-t0JnaeEh.js";import{Q as rt,K as at,u as it,I as lt}from"./label-I5ZemZmp.js";import{r as st}from"./bugs-DpEN4NTH.js";import{A as ut,h as dt,j as ct,F as pe,_ as pt}from"./focus-management-BOawEHzT.js";import{u as ft,o as I}from"./keyboard-Dv8ekvWT.js";import{z as mt}from"./transition-BD6XNdYW.js";function bt(e,n){let[i,t]=c.useState(n);return!e&&i!==n&&t(n),e?i:n}var vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vt||{}),xt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(xt||{}),gt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(gt||{}),St=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetOptionsElement=8]="SetOptionsElement",e))(St||{});function se(e,n=i=>i){let i=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=pt(n(e.options.slice()),v=>v.dataRef.current.domRef.current),r=i?t.indexOf(i):null;return r===-1&&(r=null),{options:t,activeOptionIndex:r}}let yt={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1,__demoMode:!1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:i}=e.dataRef.current,t=e.options.findIndex(r=>i(r.dataRef.current.value));return t!==-1&&(n=t),{...e,listboxState:0,activeOptionIndex:n,__demoMode:!1}},2(e,n){var i,t,r,v,y;if(e.dataRef.current.disabled||e.listboxState===1)return e;let p={...e,searchQuery:"",activationTrigger:(i=n.trigger)!=null?i:1,__demoMode:!1};if(n.focus===E.Nothing)return{...p,activeOptionIndex:null};if(n.focus===E.Specific)return{...p,activeOptionIndex:e.options.findIndex(a=>a.id===n.id)};if(n.focus===E.Previous){let a=e.activeOptionIndex;if(a!==null){let u=e.options[a].dataRef.current.domRef,m=le(n,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled});if(m!==null){let f=e.options[m].dataRef.current.domRef;if(((t=u.current)==null?void 0:t.previousElementSibling)===f.current||((r=f.current)==null?void 0:r.previousElementSibling)===null)return{...p,activeOptionIndex:m}}}}else if(n.focus===E.Next){let a=e.activeOptionIndex;if(a!==null){let u=e.options[a].dataRef.current.domRef,m=le(n,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled});if(m!==null){let f=e.options[m].dataRef.current.domRef;if(((v=u.current)==null?void 0:v.nextElementSibling)===f.current||((y=f.current)==null?void 0:y.nextElementSibling)===null)return{...p,activeOptionIndex:m}}}}let s=se(e),x=le(n,{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...p,...s,activeOptionIndex:x}},3:(e,n)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let i=e.searchQuery!==""?0:1,t=e.searchQuery+n.value.toLowerCase(),r=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+i).concat(e.options.slice(0,e.activeOptionIndex+i)):e.options).find(y=>{var p;return!y.dataRef.current.disabled&&((p=y.dataRef.current.textValue)==null?void 0:p.startsWith(t))}),v=r?e.options.indexOf(r):-1;return v===-1||v===e.activeOptionIndex?{...e,searchQuery:t}:{...e,searchQuery:t,activeOptionIndex:v,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,n)=>{let i={id:n.id,dataRef:n.dataRef},t=se(e,r=>[...r,i]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(n.dataRef.current.value)&&(t.activeOptionIndex=t.options.indexOf(i)),{...e,...t}},6:(e,n)=>{let i=se(e,t=>{let r=t.findIndex(v=>v.id===n.id);return r!==-1&&t.splice(r,1),t});return{...e,...i,activationTrigger:1}},7:(e,n)=>e.buttonElement===n.element?e:{...e,buttonElement:n.element},8:(e,n)=>e.optionsElement===n.element?e:{...e,optionsElement:n.element}},de=c.createContext(null);de.displayName="ListboxActionsContext";function W(e){let n=c.useContext(de);if(n===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,W),i}return n}let Z=c.createContext(null);Z.displayName="ListboxDataContext";function V(e){let n=c.useContext(Z);if(n===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,V),i}return n}function ht(e,n){return Q(n.type,yt,e,n)}let Ot=c.Fragment;function Et(e,n){var i;let t=nt(),{value:r,defaultValue:v,form:y,name:p,onChange:s,by:x,invalid:a=!1,disabled:u=t||!1,horizontal:m=!1,multiple:f=!1,__demoMode:o=!1,...h}=e;const N=m?"horizontal":"vertical";let _=z(n),T=Le(v),[R=f?[]:void 0,P]=Me(r,s,T),[D,O]=c.useReducer(ht,{dataRef:c.createRef(),listboxState:o?0:1,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1,optionsVisible:!1,buttonElement:null,optionsElement:null,__demoMode:o}),F=c.useRef({static:!1,hold:!1}),j=c.useRef(new Map),g=we(x),M=c.useCallback(b=>Q(l.mode,{1:()=>R.some($=>g($,b)),0:()=>g(R,b)}),[R]),l=c.useMemo(()=>({...D,value:R,disabled:u,invalid:a,mode:f?1:0,orientation:N,compare:g,isSelected:M,optionsPropsRef:F,listRef:j}),[R,u,a,f,D,j]);ue(()=>{D.dataRef.current=l},[l]);let q=l.listboxState===0;Ue(q,[l.buttonElement,l.optionsElement],(b,$)=>{var C;O({type:1}),ut($,dt.Loose)||(b.preventDefault(),(C=l.buttonElement)==null||C.focus())});let Y=c.useMemo(()=>({open:l.listboxState===0,disabled:u,invalid:a,value:R}),[l,u,R,a]),ee=S(b=>{let $=l.options.find(C=>C.id===b);$&&K($.dataRef.current.value)}),te=S(()=>{if(l.activeOptionIndex!==null){let{dataRef:b,id:$}=l.options[l.activeOptionIndex];K(b.current.value),O({type:2,focus:E.Specific,id:$})}}),ne=S(()=>O({type:0})),G=S(()=>O({type:1})),J=fe(),oe=S((b,$,C)=>{J.dispose(),J.microTask(()=>b===E.Specific?O({type:2,focus:E.Specific,id:$,trigger:C}):O({type:2,focus:b,trigger:C}))}),re=S((b,$)=>(O({type:5,id:b,dataRef:$}),()=>O({type:6,id:b}))),K=S(b=>Q(l.mode,{0(){return P==null?void 0:P(b)},1(){let $=l.value.slice(),C=$.findIndex(Re=>g(Re,b));return C===-1?$.push(b):$.splice(C,1),P==null?void 0:P($)}})),ae=S(b=>O({type:3,value:b})),d=S(()=>O({type:4})),w=S(b=>{O({type:7,element:b})}),B=S(b=>{O({type:8,element:b})}),ie=c.useMemo(()=>({onChange:K,registerOption:re,goToOption:oe,closeListbox:G,openListbox:ne,selectActiveOption:te,selectOption:ee,search:ae,clearSearch:d,setButtonElement:w,setOptionsElement:B}),[]),[Se,ye]=at({inherit:!0}),he={ref:_},Oe=c.useCallback(()=>{if(T!==void 0)return P==null?void 0:P(T)},[P,T]),Ee=U();return k.createElement(ye,{value:Se,props:{htmlFor:(i=l.buttonElement)==null?void 0:i.id},slot:{open:l.listboxState===0,disabled:u}},k.createElement(Ce,null,k.createElement(de.Provider,{value:ie},k.createElement(Z.Provider,{value:l},k.createElement(Ze,{value:Q(l.listboxState,{0:X.Open,1:X.Closed})},p!=null&&R!=null&&k.createElement(De,{disabled:u,data:{[p]:R},form:y,onReset:Oe}),Ee({ourProps:he,theirProps:h,slot:Y,defaultTag:Ot,name:"Listbox"}))))))}let Rt="button";function $t(e,n){var i;let t=V("Listbox.Button"),r=W("Listbox.Button"),v=c.useId(),y=it(),{id:p=y||`headlessui-listbox-button-${v}`,disabled:s=t.disabled||!1,autoFocus:x=!1,...a}=e,u=z(n,_e(),r.setButtonElement),m=Fe(),f=S(l=>{switch(l.key){case I.Enter:ke(l.currentTarget);break;case I.Space:case I.ArrowDown:l.preventDefault(),A.flushSync(()=>r.openListbox()),t.value||r.goToOption(E.First);break;case I.ArrowUp:l.preventDefault(),A.flushSync(()=>r.openListbox()),t.value||r.goToOption(E.Last);break}}),o=S(l=>{switch(l.key){case I.Space:l.preventDefault();break}}),h=S(l=>{var q;if(st(l.currentTarget))return l.preventDefault();t.listboxState===0?(A.flushSync(()=>r.closeListbox()),(q=t.buttonElement)==null||q.focus({preventScroll:!0})):(l.preventDefault(),r.openListbox())}),N=S(l=>l.preventDefault()),_=lt([p]),T=ot(),{isFocusVisible:R,focusProps:P}=$e({autoFocus:x}),{isHovered:D,hoverProps:O}=Ie({isDisabled:s}),{pressed:F,pressProps:j}=Te({disabled:s}),g=c.useMemo(()=>({open:t.listboxState===0,active:F||t.listboxState===0,disabled:s,invalid:t.invalid,value:t.value,hover:D,focus:R,autofocus:x}),[t.listboxState,t.value,s,D,R,F,t.invalid,x]),M=me(m(),{ref:u,id:p,type:Pe(e,t.buttonElement),"aria-haspopup":"listbox","aria-controls":(i=t.optionsElement)==null?void 0:i.id,"aria-expanded":t.listboxState===0,"aria-labelledby":_,"aria-describedby":T,disabled:s||void 0,autoFocus:x,onKeyDown:f,onKeyUp:o,onKeyPress:N,onClick:h},P,O,j);return U()({ourProps:M,theirProps:a,slot:g,defaultTag:Rt,name:"Listbox.Button"})}let be=c.createContext(!1),It="div",Tt=ce.RenderStrategy|ce.Static;function Pt(e,n){var i,t;let r=c.useId(),{id:v=`headlessui-listbox-options-${r}`,anchor:y,portal:p=!1,modal:s=!0,transition:x=!1,...a}=e,u=je(y),[m,f]=c.useState(null);u&&(p=!0);let o=V("Listbox.Options"),h=W("Listbox.Options"),N=Ve(o.optionsElement),_=Ye(),[T,R]=et(x,m,_!==null?(_&X.Open)===X.Open:o.listboxState===0);Ge(T,o.buttonElement,h.closeListbox);let P=o.__demoMode?!1:s&&o.listboxState===0;Je(P,N);let D=o.__demoMode?!1:s&&o.listboxState===0;Xe(D,{allowed:c.useCallback(()=>[o.buttonElement,o.optionsElement],[o.buttonElement,o.optionsElement])});let O=o.listboxState!==0,F=Ne(O,o.buttonElement)?!1:T,j=T&&o.listboxState===1,g=bt(j,o.value),M=S(d=>o.compare(g,d)),l=c.useMemo(()=>{var d;if(u==null||!((d=u==null?void 0:u.to)!=null&&d.includes("selection")))return null;let w=o.options.findIndex(B=>M(B.dataRef.current.value));return w===-1&&(w=0),w},[u,o.options]),q=(()=>{if(u==null)return;if(l===null)return{...u,inner:void 0};let d=Array.from(o.listRef.current.values());return{...u,inner:{listRef:{current:d},index:l}}})(),[Y,ee]=Ae(q),te=qe(),ne=z(n,u?Y:null,h.setOptionsElement,f),G=fe();c.useEffect(()=>{var d;let w=o.optionsElement;w&&o.listboxState===0&&w!==((d=ft(w))==null?void 0:d.activeElement)&&(w==null||w.focus({preventScroll:!0}))},[o.listboxState,o.optionsElement]);let J=S(d=>{var w,B;switch(G.dispose(),d.key){case I.Space:if(o.searchQuery!=="")return d.preventDefault(),d.stopPropagation(),h.search(d.key);case I.Enter:if(d.preventDefault(),d.stopPropagation(),o.activeOptionIndex!==null){let{dataRef:ie}=o.options[o.activeOptionIndex];h.onChange(ie.current.value)}o.mode===0&&(A.flushSync(()=>h.closeListbox()),(w=o.buttonElement)==null||w.focus({preventScroll:!0}));break;case Q(o.orientation,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return d.preventDefault(),d.stopPropagation(),h.goToOption(E.Next);case Q(o.orientation,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return d.preventDefault(),d.stopPropagation(),h.goToOption(E.Previous);case I.Home:case I.PageUp:return d.preventDefault(),d.stopPropagation(),h.goToOption(E.First);case I.End:case I.PageDown:return d.preventDefault(),d.stopPropagation(),h.goToOption(E.Last);case I.Escape:d.preventDefault(),d.stopPropagation(),A.flushSync(()=>h.closeListbox()),(B=o.buttonElement)==null||B.focus({preventScroll:!0});return;case I.Tab:d.preventDefault(),d.stopPropagation(),A.flushSync(()=>h.closeListbox()),ct(o.buttonElement,d.shiftKey?pe.Previous:pe.Next);break;default:d.key.length===1&&(h.search(d.key),G.setTimeout(()=>h.clearSearch(),350));break}}),oe=(i=o.buttonElement)==null?void 0:i.id,re=c.useMemo(()=>({open:o.listboxState===0}),[o.listboxState]),K=me(u?te():{},{id:v,ref:ne,"aria-activedescendant":o.activeOptionIndex===null||(t=o.options[o.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":o.mode===1?!0:void 0,"aria-labelledby":oe,"aria-orientation":o.orientation,onKeyDown:J,role:"listbox",tabIndex:o.listboxState===0?0:void 0,style:{...a.style,...ee,"--button-width":Be(o.buttonElement,!0).width},...tt(R)}),ae=U();return k.createElement(We,{enabled:p?e.static||T:!1},k.createElement(Z.Provider,{value:o.mode===1?o:{...o,isSelected:M}},ae({ourProps:K,theirProps:a,slot:re,defaultTag:It,features:Tt,visible:F,name:"Listbox.Options"})))}let wt="div";function Lt(e,n){let i=c.useId(),{id:t=`headlessui-listbox-option-${i}`,disabled:r=!1,value:v,...y}=e,p=c.useContext(be)===!0,s=V("Listbox.Option"),x=W("Listbox.Option"),a=s.activeOptionIndex!==null?s.options[s.activeOptionIndex].id===t:!1,u=s.isSelected(v),m=c.useRef(null),f=Qe(m),o=He({disabled:r,value:v,domRef:m,get textValue(){return f()}}),h=z(n,m,g=>{g?s.listRef.current.set(t,g):s.listRef.current.delete(t)});ue(()=>{if(!s.__demoMode&&s.listboxState===0&&a&&s.activationTrigger!==0)return ze().requestAnimationFrame(()=>{var g,M;(M=(g=m.current)==null?void 0:g.scrollIntoView)==null||M.call(g,{block:"nearest"})})},[m,a,s.__demoMode,s.listboxState,s.activationTrigger,s.activeOptionIndex]),ue(()=>{if(!p)return x.registerOption(t,o)},[o,t,p]);let N=S(g=>{var M;if(r)return g.preventDefault();x.onChange(v),s.mode===0&&(A.flushSync(()=>x.closeListbox()),(M=s.buttonElement)==null||M.focus({preventScroll:!0}))}),_=S(()=>{if(r)return x.goToOption(E.Nothing);x.goToOption(E.Specific,t)}),T=Ke(),R=S(g=>{T.update(g),!r&&(a||x.goToOption(E.Specific,t,0))}),P=S(g=>{T.wasMoved(g)&&(r||a||x.goToOption(E.Specific,t,0))}),D=S(g=>{T.wasMoved(g)&&(r||a&&x.goToOption(E.Nothing))}),O=c.useMemo(()=>({active:a,focus:a,selected:u,disabled:r,selectedOption:u&&p}),[a,u,r,p]),F=p?{}:{id:t,ref:h,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":u,disabled:void 0,onClick:N,onFocus:_,onPointerEnter:R,onMouseEnter:R,onPointerMove:P,onMouseMove:P,onPointerLeave:D,onMouseLeave:D},j=U();return!u&&p?null:j({ourProps:F,theirProps:y,slot:O,defaultTag:wt,name:"Listbox.Option"})}let Mt=c.Fragment;function Dt(e,n){let{options:i,placeholder:t,...r}=e,v={ref:z(n)},y=V("ListboxSelectedOption"),p=c.useMemo(()=>({}),[]),s=y.value===void 0||y.value===null||y.mode===1&&Array.isArray(y.value)&&y.value.length===0,x=U();return k.createElement(be.Provider,{value:!0},x({ourProps:v,theirProps:{...r,children:k.createElement(k.Fragment,null,t&&s?t:i)},slot:p,defaultTag:Mt,name:"ListboxSelectedOption"}))}let kt=H(Et),ve=H($t),Ct=rt,xe=H(Pt),ge=H(Lt),_t=H(Dt),Ft=Object.assign(kt,{Button:ve,Label:Ct,Options:xe,Option:ge,SelectedOption:_t});const jt=({id:e,defaultValue:n,debug:i,options:t,afterUpdate:r,mRef:v,multiple:y=!1})=>{const[p,s]=c.useState(n?t.find(({value:a})=>String(a)===String(n)):t[0]);c.useEffect(()=>{const a=n?t.find(({value:u})=>String(u)===String(n)):t[0];s(a),r&&r(a)},[n]);const x=a=>{console.log("event",a),s(a),r&&r(a)};return L.jsx(L.Fragment,{children:L.jsx(Ft,{value:p,onChange:a=>x(a),multiple:y,children:({open:a})=>L.jsxs("div",{className:"relative mt-1",children:[L.jsxs(ve,{className:`${a?"bg-neutral-50":"bg-neutral-100 border-neutral-200"} relative w-full shadow-sm py-2 pl-3 pr-10 text-left text-neutral-800 rounded-md cursor-default open:bg-neutral-50 active:ring-1 active:ring-offset-1 active:ring-blue-500 sm:text-sm border`,children:[L.jsxs("span",{className:"block truncate",children:[p==null?void 0:p.name," ",!p&&"Select your option"]}),L.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"})]}),L.jsx(mt,{as:c.Fragment,show:a,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:L.jsx(xe,{className:"absolute w-full py-1 mt-1 overflow-auto text-base bg-neutral-100 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50 py-[8px] border border-neutral-200",children:Array.isArray(t)&&t.map(u=>L.jsx(ge,{className:({active:m})=>`${m?"text-neutral-600 font-bold bg-primary-300":"text-neutral-800"}
                          cursor-default select-none relative py-2 pl-10 pr-4`,value:u,children:({selected:m,active:f})=>L.jsxs(L.Fragment,{children:[L.jsx("span",{className:`${m?"font-medium":"font-normal"} block truncate`,children:u.name}),m?L.jsx("span",{className:`${f&&"text-neutral-600"}
                                absolute inset-y-0 left-0 flex items-center pl-3`}):null]})},u.value))})})]})})})};jt.__docgenInfo={description:"",methods:[],displayName:"Select",props:{id:{required:!0,tsType:{name:"string"},description:""},defaultValue:{required:!0,tsType:{name:"string"},description:""},debug:{required:!0,tsType:{name:"boolean"},description:""},parentValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; description: string, value: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ name: string; description: string, value: string }[]"},description:""},afterUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: any) => void",signature:{arguments:[{type:{name:"any"},name:"e"}],return:{name:"void"}}},description:""},mRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{jt as S};
