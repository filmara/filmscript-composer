import{j as e}from"./jsx-runtime-DwRxq3ZX.js";import{C as c}from"./Cell-LKNSYTzX.js";/* empty css              */import"./index-BX3iQpgp.js";import"./Button-CRpRb3oO.js";import"./clsx-B-dksMZM.js";import"./Icon-B01bZypU.js";import"./useFocusRing-4VaKALdW.js";import"./use-resolve-button-type-DBAGrHN0.js";import"./keyboard-Dv8ekvWT.js";import"./use-sync-refs-Bp_oN-Mm.js";import"./use-text-value-C-NF3h40.js";import"./index-DwCBTc21.js";import"./use-tab-direction-BxZ0smMH.js";import"./hidden-DCWq1eXD.js";import"./portal-CtDEOrxV.js";import"./focus-management-BOawEHzT.js";import"./use-server-handoff-complete-ClNWh3JQ.js";import"./open-closed-CWhWCLos.js";import"./close-provider-BlpMjYKc.js";import"./bugs-DpEN4NTH.js";import"./description-t0JnaeEh.js";import"./label-I5ZemZmp.js";import"./Dropdown-LRKPwGOZ.js";import"./transition-BD6XNdYW.js";import"./use-is-mounted-D1xaH38R.js";import"./Person-DPwBOKev.js";import"./Avatar-qFQGMVom.js";import"./Checkbox-DoJezlFV.js";import"./switch-BsTglu9H.js";import"./form-fields-D66muWj_.js";const a=({data:n,component:s,background:m="default"})=>e.jsx("div",{className:`text-p2-medium text-neutral-800 shadow sm:rounded-[20px] ${m==="default"?"bg-neutral-100":"bg-neutral-150"} overflow-hidden`,children:e.jsx("ul",{role:"list",className:"divide-y divide-neutral-50",children:n.map((p,d)=>e.jsx("li",{className:"",children:e.jsx("div",{className:"flex items-center justify-between last:pr-[16px]",children:p.map((r,u)=>e.jsx("div",{className:"",children:e.jsx(c,{value:r.value,type:r.type,component:s})},u))})},d))})});a.__docgenInfo={description:"",methods:[],displayName:"List",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"tuple",raw:`[
  {
    value: string | { text: string, to: string } | any;
    type:
      | 'badge'
      | 'link'
      | 'button'
      | 'simple'
      | 'extended'
      | 'description'
      | 'dropdown'
      | 'image';
  }
]`,elements:[{name:"signature",type:"object",raw:`{
  value: string | { text: string, to: string } | any;
  type:
    | 'badge'
    | 'link'
    | 'button'
    | 'simple'
    | 'extended'
    | 'description'
    | 'dropdown'
    | 'image';
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | { text: string, to: string } | any",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ text: string, to: string }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}}]}},{name:"any"}],required:!0}},{key:"type",value:{name:"union",raw:`| 'badge'
| 'link'
| 'button'
| 'simple'
| 'extended'
| 'description'
| 'dropdown'
| 'image'`,elements:[{name:"literal",value:"'badge'"},{name:"literal",value:"'link'"},{name:"literal",value:"'button'"},{name:"literal",value:"'simple'"},{name:"literal",value:"'extended'"},{name:"literal",value:"'description'"},{name:"literal",value:"'dropdown'"},{name:"literal",value:"'image'"}],required:!0}}]}}]}],raw:`[
  {
    value: string | { text: string, to: string } | any;
    type:
      | 'badge'
      | 'link'
      | 'button'
      | 'simple'
      | 'extended'
      | 'description'
      | 'dropdown'
      | 'image';
  }
][]`},description:""},background:{required:!1,tsType:{name:"union",raw:"'default' | 'light'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'light'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},component:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};const W={component:a,title:"Data Show / List"},g=[[{value:{imageUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",title:"Name"},type:"extended"},{value:[{title:"Edit",type:"button"},{title:"Duplicate",type:"button"}],type:"dropdown"}]],t=n=>e.jsx(a,{...n,data:g});t.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=971%3A68"}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,o,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"(args: any) => <List {...args} data={data} />",...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,W as default};
