import{$ as W,a as X}from"./useFocusRing-4VaKALdW.js";import{r as e,R as o}from"./index-BX3iQpgp.js";import{w as A,e as Z}from"./use-resolve-button-type-DBAGrHN0.js";import{l as ee,T as te,j as re,p as ae}from"./form-fields-D66muWj_.js";import{K as le,L as T,y as oe,p as se,a as h,_ as ne}from"./use-sync-refs-Bp_oN-Mm.js";import{H as ue,w as ie,a as ce,U as de}from"./description-t0JnaeEh.js";import{Q as fe,K as pe,u as me,I as he}from"./label-I5ZemZmp.js";import{r as be}from"./bugs-DpEN4NTH.js";import{o as F}from"./keyboard-Dv8ekvWT.js";let k=e.createContext(null);k.displayName="GroupContext";let $e=e.Fragment;function ve(l){var i;let[r,c]=e.useState(null),[b,$]=pe(),[v,a]=ie(),d=e.useMemo(()=>({switch:r,setSwitch:c}),[r,c]),x={},g=l,f=T();return o.createElement(a,{name:"Switch.Description",value:v},o.createElement($,{name:"Switch.Label",value:b,props:{htmlFor:(i=d.switch)==null?void 0:i.id,onClick(p){r&&(p.currentTarget instanceof HTMLLabelElement&&p.preventDefault(),r.click(),r.focus({preventScroll:!0}))}}},o.createElement(k.Provider,{value:d},f({ourProps:x,theirProps:g,slot:{},defaultTag:$e,name:"Switch.Group"}))))}let xe="button";function ge(l,i){var r;let c=e.useId(),b=me(),$=ce(),{id:v=b||`headlessui-switch-${c}`,disabled:a=$||!1,checked:d,defaultChecked:x,onChange:g,name:f,value:p,form:L,autoFocus:m=!1,...I}=l,w=e.useContext(k),[K,R]=e.useState(null),G=e.useRef(null),H=oe(G,i,w===null?null:w.setSwitch,R),s=ee(x),[n,u]=te(d,g,s??!1),M=se(),[S,y]=e.useState(!1),C=h(()=>{y(!0),u==null||u(!n),M.nextFrame(()=>{y(!1)})}),j=h(t=>{if(be(t.currentTarget))return t.preventDefault();t.preventDefault(),C()}),U=h(t=>{t.key===F.Space?(t.preventDefault(),C()):t.key===F.Enter&&ae(t.currentTarget)}),N=h(t=>t.preventDefault()),O=he(),V=de(),{isFocusVisible:D,focusProps:Y}=W({autoFocus:m}),{isHovered:P,hoverProps:_}=X({isDisabled:a}),{pressed:E,pressProps:q}=A({disabled:a}),z=e.useMemo(()=>({checked:n,disabled:a,hover:P,focus:D,active:E,autofocus:m,changing:S}),[n,P,D,E,a,S,m]),B=ne({id:v,ref:H,role:"switch",type:Z(l,K),tabIndex:l.tabIndex===-1?0:(r=l.tabIndex)!=null?r:0,"aria-checked":n,"aria-labelledby":O,"aria-describedby":V,disabled:a||void 0,autoFocus:m,onClick:j,onKeyUp:U,onKeyPress:N},Y,_,q),J=e.useCallback(()=>{if(s!==void 0)return u==null?void 0:u(s)},[u,s]),Q=T();return o.createElement(o.Fragment,null,f!=null&&o.createElement(re,{disabled:a,data:{[f]:p||"on"},overrides:{type:"checkbox",checked:n},form:L,onReset:J}),Q({ourProps:B,theirProps:I,slot:z,defaultTag:xe,name:"Switch"}))}let ke=le(ge),we=ve,Se=fe,ye=ue,Re=Object.assign(ke,{Group:we,Label:Se,Description:ye});export{Re as Y};
