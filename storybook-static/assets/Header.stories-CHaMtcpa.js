import{j as r}from"./jsx-runtime-DwRxq3ZX.js";import{B as d}from"./Button-CRpRb3oO.js";/* empty css              */import"./index-BX3iQpgp.js";import"./clsx-B-dksMZM.js";import"./Icon-B01bZypU.js";import"./useFocusRing-4VaKALdW.js";import"./use-resolve-button-type-DBAGrHN0.js";import"./keyboard-Dv8ekvWT.js";import"./use-sync-refs-Bp_oN-Mm.js";import"./use-text-value-C-NF3h40.js";import"./index-DwCBTc21.js";import"./use-tab-direction-BxZ0smMH.js";import"./hidden-DCWq1eXD.js";import"./portal-CtDEOrxV.js";import"./focus-management-BOawEHzT.js";import"./use-server-handoff-complete-ClNWh3JQ.js";import"./open-closed-CWhWCLos.js";import"./close-provider-BlpMjYKc.js";import"./bugs-DpEN4NTH.js";import"./description-t0JnaeEh.js";import"./label-I5ZemZmp.js";const n=({type:a="SECTION",section:e,page:g})=>r.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between h-v8 text-neutral-800",children:[r.jsx("div",{className:"text-4xl font-bold leading-6 text-primary",children:e==null?void 0:e.title}),r.jsx("div",{className:"mt-3 flex sm:mt-0 sm:ml-4",children:(e==null?void 0:e.navOptions)&&e.navOptions.map(({title:m,action:l,icon:p},u)=>r.jsx(d,{text:m,icon:p,size:"small",onClick:l},u))})]});n.__docgenInfo={description:"",methods:[],displayName:"Header",props:{type:{required:!1,tsType:{name:"union",raw:"'SECTION' | 'PAGE'",elements:[{name:"literal",value:"'SECTION'"},{name:"literal",value:"'PAGE'"}]},description:"",defaultValue:{value:"'SECTION'",computed:!1}},section:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string;
  navOptions?: {
    title: string;
    type: 'button' | 'link';
    action?: () => void;
    to?: string;
    icon?: any;
  }[];
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"navOptions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  type: 'button' | 'link';
  action?: () => void;
  to?: string;
  icon?: any;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"type",value:{name:"union",raw:"'button' | 'link'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'link'"}],required:!0}},{key:"action",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"to",value:{name:"string",required:!1}},{key:"icon",value:{name:"any",required:!1}}]}}],raw:`{
  title: string;
  type: 'button' | 'link';
  action?: () => void;
  to?: string;
  icon?: any;
}[]`,required:!1}}]}},description:""},page:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}}]}},description:""}}};const G={component:n,title:"Components / Header",args:{section:{title:"Header"}},argTypes:{section:{title:{type:{summary:"string"}}}}},t=a=>r.jsx(n,{...a});t.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129"}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,s,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"(args: any) => <Header {...args} />",...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,G as default};
