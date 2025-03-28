import{j as e}from"./jsx-runtime-DwRxq3ZX.js";import{C as f}from"./Cell-LKNSYTzX.js";/* empty css              */import"./index-BX3iQpgp.js";import"./Button-CRpRb3oO.js";import"./clsx-B-dksMZM.js";import"./Icon-B01bZypU.js";import"./useFocusRing-4VaKALdW.js";import"./use-resolve-button-type-DBAGrHN0.js";import"./keyboard-Dv8ekvWT.js";import"./use-sync-refs-Bp_oN-Mm.js";import"./use-text-value-C-NF3h40.js";import"./index-DwCBTc21.js";import"./use-tab-direction-BxZ0smMH.js";import"./hidden-DCWq1eXD.js";import"./portal-CtDEOrxV.js";import"./focus-management-BOawEHzT.js";import"./use-server-handoff-complete-ClNWh3JQ.js";import"./open-closed-CWhWCLos.js";import"./close-provider-BlpMjYKc.js";import"./bugs-DpEN4NTH.js";import"./description-t0JnaeEh.js";import"./label-I5ZemZmp.js";import"./Dropdown-LRKPwGOZ.js";import"./transition-BD6XNdYW.js";import"./use-is-mounted-D1xaH38R.js";import"./Person-DPwBOKev.js";import"./Avatar-qFQGMVom.js";import"./Checkbox-DoJezlFV.js";import"./switch-BsTglu9H.js";import"./form-fields-D66muWj_.js";const r=({header:a,data:s,component:v,background:p="default",customCss:x})=>e.jsx(e.Fragment,{children:s.length!==0?e.jsx("div",{className:`flex flex-col ${x}`,children:e.jsx("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"pt-4 pb-12 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:e.jsx("div",{className:"shadow-xl overflow-hidden border border-primary-200 sm:rounded-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-primary-200",children:[e.jsx("thead",{className:`${p==="default"?"bg-primary-800":"bg-primary-100"}`,children:e.jsx("tr",{children:a.map((i,l)=>e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-sm font-bold text-primary-1600 uppercase tracking-wider",children:i},l))})}),e.jsx("tbody",{className:"bg-primary-300 divide-y divide-primary-700",children:s.map((i,l)=>e.jsx("tr",{className:"hover:bg-primary-800 transition duration-150 ease-in-out",children:i.map((m,b)=>e.jsx("td",{className:`px-6 py-4 whitespace-nowrap ${p==="default"?"bg-primary-200":"bg-primary-1200"} text-primary-2400`,children:e.jsx(f,{type:m.type,value:m.value,component:v})},b))},l))})]})})})})}):e.jsx("div",{className:"text-center text-neutral-500",children:"No data available"})});r.__docgenInfo={description:"",methods:[],displayName:"Table",props:{header:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"tuple",raw:`[
  {
    value: string | any;
    type: 'simple'
    | 'link'
    | 'description'
    | 'extended'
    | 'button'
    | 'badge'
    | 'icon'
    | 'dropdown'
    | 'person'
    | 'image';
  }
]`,elements:[{name:"signature",type:"object",raw:`{
  value: string | any;
  type: 'simple'
  | 'link'
  | 'description'
  | 'extended'
  | 'button'
  | 'badge'
  | 'icon'
  | 'dropdown'
  | 'person'
  | 'image';
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}],required:!0}},{key:"type",value:{name:"union",raw:`'simple'
| 'link'
| 'description'
| 'extended'
| 'button'
| 'badge'
| 'icon'
| 'dropdown'
| 'person'
| 'image'`,elements:[{name:"literal",value:"'simple'"},{name:"literal",value:"'link'"},{name:"literal",value:"'description'"},{name:"literal",value:"'extended'"},{name:"literal",value:"'button'"},{name:"literal",value:"'badge'"},{name:"literal",value:"'icon'"},{name:"literal",value:"'dropdown'"},{name:"literal",value:"'person'"},{name:"literal",value:"'image'"}],required:!0}}]}}]}],raw:`[
  {
    value: string | any;
    type: 'simple'
    | 'link'
    | 'description'
    | 'extended'
    | 'button'
    | 'badge'
    | 'icon'
    | 'dropdown'
    | 'person'
    | 'image';
  }
][]`},description:""},background:{required:!1,tsType:{name:"union",raw:"'default' | 'light'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'light'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},customCss:{required:!1,tsType:{name:"string"},description:""}}};const ee={component:r,title:"Data Show / Table",args:{headers:["ID","Title"]},argTypes:{headers:{type:{summary:"array"}}}},h=["id","titles"],w=[[{value:"20042",type:"simple"},{value:"Once upon a time in the web.",type:"simple"}],[{value:"20042",type:"simple"},{value:"Once upon a time in the web.",type:"simple"}],[{value:"20042",type:"simple"},{value:"Once upon a time in the web.",type:"simple"}],[{value:"20042",type:"simple"},{value:"Once upon a time in the web.",type:"simple"}],[{value:"20042",type:"simple"},{value:"Once upon a time in the web.",type:"simple"}],[{value:{text:"Text",imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},type:"image"},{value:"Once upon a time in the web.",type:"simple"}]],t=a=>e.jsx(r,{...a,header:h,data:w});t.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68"}};const j=[[{value:{text:"Algo",content:"X",onClick:a=>console.log("hola",a)},type:"checkbox"},{value:"Once upon a time in the web.",type:"simple"}]],n=a=>e.jsx(r,{...a,header:h,data:j});n.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68"}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Default2"};var o,d,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"(args: any) => <Table {...args} header={header} data={data} />",...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,y,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"(args: any) => <Table {...args} header={header} data={d} />",...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const ae=["Default","Default2"];export{t as Default,n as Default2,ae as __namedExportsOrder,ee as default};
