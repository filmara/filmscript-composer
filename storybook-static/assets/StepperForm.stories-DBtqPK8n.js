import{j as n}from"./jsx-runtime-DwRxq3ZX.js";import{F as d}from"./Form-D_N_Cdac.js";/* empty css              */import"./index-BX3iQpgp.js";import"./TimePicker-EiDT2vLZ.js";import"./DatePicker-BBt0UU2I.js";import"./datetime-BDQ5ptpc.js";import"./Button-CRpRb3oO.js";import"./clsx-B-dksMZM.js";import"./Icon-B01bZypU.js";import"./useFocusRing-4VaKALdW.js";import"./use-resolve-button-type-DBAGrHN0.js";import"./keyboard-Dv8ekvWT.js";import"./use-sync-refs-Bp_oN-Mm.js";import"./use-text-value-C-NF3h40.js";import"./index-DwCBTc21.js";import"./use-tab-direction-BxZ0smMH.js";import"./hidden-DCWq1eXD.js";import"./portal-CtDEOrxV.js";import"./focus-management-BOawEHzT.js";import"./use-server-handoff-complete-ClNWh3JQ.js";import"./open-closed-CWhWCLos.js";import"./close-provider-BlpMjYKc.js";import"./bugs-DpEN4NTH.js";import"./description-t0JnaeEh.js";import"./label-I5ZemZmp.js";import"./RCInput-CiujZUGw.js";import"./radio-group-BzlvsJ_q.js";import"./use-by-comparator-Crp3XGDh.js";import"./form-fields-D66muWj_.js";import"./transition-BD6XNdYW.js";import"./use-is-mounted-D1xaH38R.js";import"./Select-D9XxLxH4.js";const K={component:d,title:"Data Handle / Form",args:{button:{text:"Create",variant:"primary"}}},r=t=>{if((t==null?void 0:t.length)>3)return new Promise((i,a)=>{setTimeout(()=>{i(!0)},800)})},e=t=>{const a=[{field:{type:"id",id:"id",hidden:!0}},[{field:{type:"text",id:"id-1",label:"ID 1",validation:{fn:r},placeholder:"example@email.com"}},{field:{type:"text",id:"id-2",label:"ID 2",validation:{fn:r},placeholder:"example@email.com"}}],{field:{type:"select",id:"category",label:"Category",options:[{name:"Option 1",value:"1"},{name:"Option 2",value:"2"}]}},{field:{type:"select",id:"subcategory",label:"Sub Category",belongs_to:"category",populateOptions:async o=>{if(o.value==="1")return[{name:"Option A",value:"1"},{name:"Option B",value:"2"}];if(o.value==="2")return[{name:"Option C",value:"3"},{name:"Option D",value:"4"}]}}},{field:{type:"textarea",id:"textarea",label:"Text Area",placeholder:"Set a description"}}];return n.jsx(d,{...t,type:"stepper",fields:a})};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129"}};e.__docgenInfo={description:"",methods:[],displayName:"StepperForm"};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => {
  const getChild: any = async (e: any) => {
    // console.log('Get Child', e)
    if (e.value === "1") {
      return [{
        name: 'Option A',
        value: '1'
      }, {
        name: 'Option B',
        value: '2'
      }];
    } else if (e.value === "2") {
      return [{
        name: 'Option C',
        value: '3'
      }, {
        name: 'Option D',
        value: '4'
      }];
    }
  };
  const fields = [{
    field: {
      type: 'id',
      id: 'id',
      hidden: true
    }
  }, [{
    field: {
      type: 'text',
      id: 'id-1',
      label: 'ID 1',
      validation: {
        fn: validateText
      },
      placeholder: 'example@email.com'
    }
  }, {
    field: {
      type: 'text',
      id: 'id-2',
      label: 'ID 2',
      validation: {
        fn: validateText
      },
      placeholder: 'example@email.com'
    }
  }], {
    field: {
      type: 'select',
      id: 'category',
      label: 'Category',
      options: [{
        name: 'Option 1',
        value: '1'
      }, {
        name: 'Option 2',
        value: '2'
      }]
    }
  }, {
    field: {
      type: 'select',
      id: 'subcategory',
      label: 'Sub Category',
      belongs_to: 'category',
      populateOptions: getChild
    }
  }, {
    field: {
      type: 'textarea',
      id: 'textarea',
      label: 'Text Area',
      placeholder: 'Set a description'
    }
  }
  // {
  //   field: {type: 'datepicker',
  //   id: 'datepicker',
  //   label: 'Date Picker'}
  // }
  ];
  return <Form {...args} type='stepper' fields={fields} />;
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const M=["StepperForm"];export{e as StepperForm,M as __namedExportsOrder,K as default};
