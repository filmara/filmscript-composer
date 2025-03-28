import{j as e}from"./jsx-runtime-DwRxq3ZX.js";import{B as c}from"./Button-CRpRb3oO.js";/* empty css              */import{r as n}from"./index-BX3iQpgp.js";import{c as x}from"./clsx-B-dksMZM.js";import{z as o}from"./transition-BD6XNdYW.js";import"./Icon-B01bZypU.js";import"./useFocusRing-4VaKALdW.js";import"./use-resolve-button-type-DBAGrHN0.js";import"./keyboard-Dv8ekvWT.js";import"./use-sync-refs-Bp_oN-Mm.js";import"./use-text-value-C-NF3h40.js";import"./index-DwCBTc21.js";import"./use-tab-direction-BxZ0smMH.js";import"./hidden-DCWq1eXD.js";import"./portal-CtDEOrxV.js";import"./focus-management-BOawEHzT.js";import"./use-server-handoff-complete-ClNWh3JQ.js";import"./open-closed-CWhWCLos.js";import"./close-provider-BlpMjYKc.js";import"./bugs-DpEN4NTH.js";import"./description-t0JnaeEh.js";import"./label-I5ZemZmp.js";import"./use-is-mounted-D1xaH38R.js";const a=({initialState:r=!1,user:i,items:f,component:g,closeSidebar:m,children:d})=>{const u=x("rounded-t-[12px] bg-neutral-100 p-[2px] drop-shadow border-b border-neutral-150");return e.jsx(e.Fragment,{children:e.jsx(o.Root,{show:r,as:n.Fragment,children:e.jsx(o.Child,{as:n.Fragment,enter:"ease-out duration-500",enterFrom:"opacity-0 translate-x-[200px]",enterTo:"opacity-100 translate-x-[0px]",leave:"ease-in duration-500",leaveFrom:"opacity-100 translate-x-[0px]",leaveTo:"opacity-0 translate-x-[200px]",children:e.jsxs("div",{className:"absolute h-v92 top-0 right-0 w-[200px] bg-neutral-50 border border-neutral-200 rounded-[12px] my-[20px] mr-[20px] text-neutral-600 overflow-y-auto",children:[e.jsx("div",{className:u,children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("div",{className:"flex justify-start",children:e.jsx("button",{type:"button",className:"bg-neutral-150 text-neutral-200 p-[2px] rounded-full hover:text-red-100 hover:bg-red-400 focus:outline-none",onClick:m,children:e.jsx("span",{className:"sr-only",children:"Close"})})})})}),e.jsx("div",{className:"p-[8px]",children:d})]})})})})};a.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{user:{required:!1,tsType:{name:"union",raw:"any | undefined",elements:[{name:"any"},{name:"undefined"}]},description:""},initialState:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  type: 'button' | 'link' | 'action';
  action?: () => void;
  to?: string;
  icon?: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:"'button' | 'link' | 'action'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'link'"},{name:"literal",value:"'action'"}],required:!0}},{key:"action",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"to",value:{name:"string",required:!1}},{key:"icon",value:{name:"string",required:!1}}]}}],raw:`{
  text: string;
  type: 'button' | 'link' | 'action';
  action?: () => void;
  to?: string;
  icon?: string;
}[]`},description:""},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},closeSidebar:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showFeature:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z={component:a,title:"Components / Sidebar"},t=()=>{const[r,i]=n.useState(!0);return e.jsxs("div",{children:[e.jsx("div",{className:"text-neutral-800",children:r?"OPEN":"CLOSED"}),e.jsx(c,{text:"toggle",onClick:()=>i(!r)}),e.jsxs(a,{initialState:r,children:[e.jsx("li",{children:"Home Page"}),e.jsx("li",{children:"Example 1"}),e.jsx("li",{children:"Example 2"}),e.jsx("li",{children:"Example 3"})]})]})};t.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129"}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,l,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  return <div>
    <div className="text-neutral-800">{open ? 'OPEN' : 'CLOSED'}</div>
    <Button text="toggle" onClick={() => setOpen(!open)} />
    <Sidebar initialState={open}>
      <li>Home Page</li>
      <li>Example 1</li>
      <li>Example 2</li>
      <li>Example 3</li>
    </Sidebar>
  </div>;
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,z as default};
