import{j as c}from"./jsx-runtime-DwRxq3ZX.js";import{F as o}from"./Form-D_N_Cdac.js";/* empty css              */import"./index-BX3iQpgp.js";import"./TimePicker-EiDT2vLZ.js";import"./DatePicker-BBt0UU2I.js";import"./datetime-BDQ5ptpc.js";import"./Button-CRpRb3oO.js";import"./clsx-B-dksMZM.js";import"./Icon-B01bZypU.js";import"./useFocusRing-4VaKALdW.js";import"./use-resolve-button-type-DBAGrHN0.js";import"./keyboard-Dv8ekvWT.js";import"./use-sync-refs-Bp_oN-Mm.js";import"./use-text-value-C-NF3h40.js";import"./index-DwCBTc21.js";import"./use-tab-direction-BxZ0smMH.js";import"./hidden-DCWq1eXD.js";import"./portal-CtDEOrxV.js";import"./focus-management-BOawEHzT.js";import"./use-server-handoff-complete-ClNWh3JQ.js";import"./open-closed-CWhWCLos.js";import"./close-provider-BlpMjYKc.js";import"./bugs-DpEN4NTH.js";import"./description-t0JnaeEh.js";import"./label-I5ZemZmp.js";import"./RCInput-CiujZUGw.js";import"./radio-group-BzlvsJ_q.js";import"./use-by-comparator-Crp3XGDh.js";import"./form-fields-D66muWj_.js";import"./transition-BD6XNdYW.js";import"./use-is-mounted-D1xaH38R.js";import"./Select-D9XxLxH4.js";const M={component:o,title:"Data Handle / Form",argTypes:{type:{options:["stepper","dynamic"],control:{type:"radio"}}},args:{type:"dynamic",debug:!0,button:{text:"Submit",variant:"primary"},preventDefault:!0,afterSubmit:()=>console.log("Hello Submit")}},e=i=>{const r=[{field:{type:"text",id:"description",placeholder:"Description",label:"Description",required:!0},title:"Experience Info",description:"Describe in a few words whats about."},{field:{type:"textarea",id:"description",placeholder:"Description",label:"Description",required:!0},title:"Experience Info",description:"Describe in a few words whats about."},{field:{type:"select",id:"parent",label:"Parent",placeholder:"select",options:[{name:"Option 1",value:1},{name:"Option 2",value:2}]}}];return c.jsx(o,{...i,fields:r})};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129"}};const t=i=>{const r=[{field:{type:"text",id:"description",placeholder:"Description",label:"Description",required:!0},title:"Experience Info",description:"Describe in a few words whats about."}];return c.jsx(o,{...i,fields:r})};t.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129"}};e.__docgenInfo={description:"",methods:[],displayName:"DynamicForm1"};t.__docgenInfo={description:"",methods:[],displayName:"DynamicForm2"};var n,a,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: any) => {
  // const getChild: any = async (e: any) => {
  //   console.log('E', e)
  //   if (e.value === "1") {
  //     return [{ name: 'Option A', value: 1 },{ name: 'Option B', value: 2 }]
  //   } else if (e.value === "2") {
  //     return [{ name: 'Option C', value: 3 },{ name: 'Option D', value: 4 }]
  //   }
  // }

  // const updateGrandchild: any = async (e: any) => {
  //   if (e.value === "1") {
  //     return [{ name: 'Option A 1', value: 5 },{ name: 'Option A 2', value: 6 }]
  //   } else if (e.value === "2") {
  //     return [{ name: 'Option B 1', value: 7 },{ name: 'Option B 2', value: 8 }]
  //   } else if (e.value === "3") {
  //     return [{ name: 'Option C 1', value: 9 },{ name: 'Option C 2', value: 10 }]
  //   } else if (e.value === "4") {
  //     return [{ name: 'Option D 1', value: 11 },{ name: 'Option D 2', value: 12 }]
  //   }
  // }

  const fields = [{
    field: {
      type: 'text',
      id: 'description',
      placeholder: 'Description',
      label: 'Description',
      required: true
    },
    title: 'Experience Info',
    description: 'Describe in a few words whats about.'
  }, {
    field: {
      type: 'textarea',
      id: 'description',
      placeholder: 'Description',
      label: 'Description',
      required: true
    },
    title: 'Experience Info',
    description: 'Describe in a few words whats about.'
  }, {
    field: {
      type: 'select',
      id: 'parent',
      label: 'Parent',
      placeholder: 'select',
      options: [{
        name: 'Option 1',
        value: 1
      }, {
        name: 'Option 2',
        value: 2
      }]
    }
  }
  //   {
  //     field: {
  //       type: 'select',
  //       id: 'child',
  //       label: 'Child',
  //       placeholder: 'select',
  //       belongs_to: 'parent',
  //       populateOptions: getChild
  //     },
  //   },
  //   {
  //     field: {
  //       type: 'select',
  //       id: 'child2',
  //       label: 'Child 2',
  //       placeholder: 'select',
  //       belongs_to: 'child',
  //       populateOptions: updateGrandchild
  //     },
  //   },
  //   { field: {
  //     type: 'time',
  //     id: 'duration',
  //     placeholder: 'Duration',
  //     label: 'Duration',
  //     icon: 'clock',
  //     required: true,
  //   },
  //   title: 'Experience Info',
  //   description: 'Choose the duration of your experience',
  // },
  ];
  return <Form {...args} fields={fields} />;
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,s,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
  const fields = [{
    field: {
      type: 'text',
      id: 'description',
      placeholder: 'Description',
      label: 'Description',
      required: true
    },
    title: 'Experience Info',
    description: 'Describe in a few words whats about.'
  }];
  return <Form {...args} fields={fields} />;
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Q=["DynamicForm1","DynamicForm2"];export{e as DynamicForm1,t as DynamicForm2,Q as __namedExportsOrder,M as default};
