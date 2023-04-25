var p=Object.defineProperty;var t=(n,e)=>p(n,"name",{value:e,configurable:!0});import{H as i}from"./styled-components.browser.esm.2fab8b35.js";import{j as s,a as d}from"./jsx-runtime.31915269.js";import"./iframe.af2b89fd.js";var c=(n=>(n.Grey="grey",n.Blue="blue",n.Green="green",n.Orange="orange",n.Red="red",n))(c||{});const m=t(({theme:n,variant:e=c.Grey,disabled:r=!1,onClick:a})=>{const u={"background-color":n.colors[`${e}-300`],color:n.colors[`${e}-700`]};return r||!a?u:{...u,"&:hover":{"background-color":n.colors[`${e}-400`]},"&:active":{color:n.colors[`${e}-800`]}}},"getButtonColors"),B=i.button`
display: inline-flex;
align-items: center;
gap: ${({theme:n})=>n.spacings["space-4"]};
padding: ${({theme:n})=>n.spacings["space-6"]} ${({theme:n})=>n.spacings["space-12"]};
border: none;
border-radius: ${({theme:n})=>n.border.radius["radius-8"]};
font-size: ${({theme:n})=>n.text.sizes["font-15"]};
cursor: ${({onClick:n,disabled:e})=>e||!n?"default":"pointer"};
pointer-events: ${({onClick:n,disabled:e})=>e||!n?"none":"initial"};
opacity: ${({disabled:n})=>n?.7:1};
${n=>({...m(n)})}
user-select: none;
`,o=t(({children:n,variant:e,disabled:r,onClick:a})=>s(B,{variant:e,disabled:r,onClick:a,children:n}),"Button$2"),l=o;try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"ButtonVariant.Grey"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grey"'},{value:'"blue"'},{value:'"green"'},{value:'"orange"'},{value:'"red"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:o.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch{}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"ButtonVariant.Grey"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grey"'},{value:'"blue"'},{value:'"green"'},{value:'"orange"'},{value:'"red"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}const f=i.div`
  display: flex;
  gap: ${({theme:n})=>n.spacings["space-8"]}
`,y=t(n=>d(f,{children:[s(l,{...n,children:"Button"}),s(l,{...n,onClick:void 0,children:"Button with no click"})]}),"Template"),b=y.bind({}),S={parameters:{storySource:{source:`// import { FC } from 'react';
import { ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import ButtonComponent from '../src/components/Button';
import { ButtonProps } from '../src/components/Button/types';

const ButtonsContainer = styled.div\`
  display: flex;
  gap: \${({ theme }) => theme.spacings['space-8'] }
\`

const Template = (args:ButtonProps) => (
  <ButtonsContainer>
    <ButtonComponent {...args}>
      Button
    </ButtonComponent>
    <ButtonComponent {...args} onClick={undefined}>
      Button with no click
    </ButtonComponent>
  </ButtonsContainer>
);

export const Button = Template.bind({});

export default {
  title: 'Components/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;
`,locationsMap:{button:{startLoc:{col:17,line:12},endLoc:{col:1,line:21},startBody:{col:17,line:12},endBody:{col:1,line:21}}}}},title:"Components/Button",component:l},$=["Button"];export{b as Button,$ as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories.b27edecd.js.map
