import{r as o,R as m}from"./index-BX3iQpgp.js";import{K as x,a as v,y as C,n as g,L as h}from"./use-sync-refs-Bp_oN-Mm.js";let E=o.createContext(void 0);function D(){return o.useContext(E)}let p=o.createContext(null);p.displayName="DescriptionContext";function c(){let r=o.useContext(p);if(r===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,c),e}return r}function T(){var r,e;return(e=(r=o.useContext(p))==null?void 0:r.value)!=null?e:void 0}function $(){let[r,e]=o.useState([]);return[r.length>0?r.join(" "):void 0,o.useMemo(()=>function(t){let l=v(u=>(e(n=>[...n,u]),()=>e(n=>{let a=n.slice(),i=a.indexOf(u);return i!==-1&&a.splice(i,1),a}))),s=o.useMemo(()=>({register:l,slot:t.slot,name:t.name,props:t.props,value:t.value}),[l,t.slot,t.name,t.props,t.value]);return m.createElement(p.Provider,{value:s},t.children)},[e])]}let S="p";function b(r,e){let t=o.useId(),l=D(),{id:s=`headlessui-description-${t}`,...u}=r,n=c(),a=C(e);g(()=>n.register(s),[s,n.register]);let i=l||!1,d=o.useMemo(()=>({...n.slot,disabled:i}),[n.slot,i]),f={ref:a,...n.props,id:s};return h()({ourProps:f,theirProps:u,slot:d,defaultTag:S,name:n.name||"Description"})}let w=x(b),j=Object.assign(w,{});export{j as H,T as U,D as a,$ as w};
