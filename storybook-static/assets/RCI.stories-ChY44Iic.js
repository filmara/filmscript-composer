import{j as d}from"./jsx-runtime-DwRxq3ZX.js";import{r as m}from"./index-BX3iQpgp.js";import{R as r}from"./RCInput-CiujZUGw.js";/* empty css              */import"./Icon-B01bZypU.js";import"./clsx-B-dksMZM.js";const C={component:r,title:"Data Handle / Input",args:{type:"rci",id:"code",maxLength:6}},t=a=>{const[c,e]=m.useState("input"),i=p=>{e(p==="123456"?"success":"error")};return d.jsx(r,{config:{...a,validation:{state:c,fn:i}}})};t.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129"}};t.__docgenInfo={description:"",methods:[],displayName:"RCI"};var s,o,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`(args: any) => {
  const [state, setState] = React.useState('input');
  const checkCodeApiMock = (code: string) => {
    if (code === '123456') {
      setState('success');
    } else {
      setState('error');
    }
  };
  return <RCInput config={{
    ...args,
    validation: {
      state: state,
      fn: checkCodeApiMock
    }
  }} />;
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const h=["RCI"];export{t as RCI,h as __namedExportsOrder,C as default};
