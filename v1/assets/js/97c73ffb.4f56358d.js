"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6950],{6614:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"getting-started/providers","title":"Configure LLM Provider","description":"Goose is compatible with a wide range of LLM providers, allowing you to choose and integrate your preferred model.","source":"@site/docs/getting-started/providers.md","sourceDirName":"getting-started","slug":"/getting-started/providers","permalink":"/goose/v1/docs/getting-started/providers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Configure LLM Provider"},"sidebar":"tutorialSidebar","previous":{"title":"Install Goose","permalink":"/goose/v1/docs/getting-started/installation"},"next":{"title":"Using Extensions","permalink":"/goose/v1/docs/getting-started/using-extensions"}}');var t=r(4848),s=r(8453),i=r(5537),l=r(9329);const a={sidebar_position:2,title:"Configure LLM Provider"},d="Supported LLM Providers",c={},u=[{value:"Available Providers",id:"available-providers",level:2},{value:"Configure Provider",id:"configure-provider",level:2},{value:"Local LLMs (Ollama)",id:"local-llms-ollama",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"supported-llm-providers",children:"Supported LLM Providers"})}),"\n",(0,t.jsx)(n.p,{children:"Goose is compatible with a wide range of LLM providers, allowing you to choose and integrate your preferred model."}),"\n",(0,t.jsx)(n.h2,{id:"available-providers",children:"Available Providers"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Provider"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Parameters"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.anthropic.com/",children:"Anthropic"})}),(0,t.jsx)(n.td,{children:"Offers Claude, an advanced AI model for natural language tasks."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ANTHROPIC_API_KEY"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://www.databricks.com/",children:"Databricks"})}),(0,t.jsx)(n.td,{children:"Unified data analytics and AI platform for building and deploying models."}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"DATABRICKS_HOST"}),", ",(0,t.jsx)(n.code,{children:"DATABRICKS_TOKEN"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ai.google.dev/gemini-api/docs",children:"Gemini"})}),(0,t.jsx)(n.td,{children:"Advanced LLMs by Google with multimodal capabilities (text, images)."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GOOGLE_API_KEY"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://groq.com/",children:"Groq"})}),(0,t.jsx)(n.td,{children:"High-performance inference hardware and tools for LLMs."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"GROQ_API_KEY"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://ollama.com/",children:"Ollama"})}),(0,t.jsxs)(n.td,{children:["Local model runner supporting Qwen, Llama, DeepSeek, and other open-source models. ",(0,t.jsxs)(n.strong,{children:["Because this provider runs locally, you must first ",(0,t.jsx)(n.a,{href:"/docs/getting-started/providers#local-llms-ollama",children:"download and run a model"}),"."]})]}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI"})}),(0,t.jsx)(n.td,{children:"Provides GPT-4, GPT-3.5-turbo, and other advanced language models."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OPENAI_API_KEY"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openrouter.ai/",children:"OpenRouter"})}),(0,t.jsx)(n.td,{children:"API gateway for unified access to various models with features like rate-limiting management."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OPENROUTER_API_KEY"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"configure-provider",children:"Configure Provider"}),"\n",(0,t.jsxs)(n.p,{children:["To configure your chosen provider or see available options, run ",(0,t.jsx)(n.code,{children:"goose configure"})," in the CLI or visit the ",(0,t.jsx)(n.code,{children:"Provider Settings"})," page in the Goose Desktop."]}),"\n",(0,t.jsxs)(i.A,{groupId:"interface",children:[(0,t.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Run the following command:"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Configure Providers"})," from the menu and press Enter."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c6  What would you like to configure?\n\u2502  \u25cf Configure Providers (Change provider or update credentials)\n\u2502  \u25cb Toggle Extensions \n\u2502  \u25cb Add Extension \n\u2514  \n"})}),(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Choose a model provider and press Enter."}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c6  Which model provider should we use?\n\u2502  \u25cf Anthropic (Claude and other models from Anthropic)\n\u2502  \u25cb Databricks \n\u2502  \u25cb Google Gemini \n\u2502  \u25cb Groq \n\u2502  \u25cb Ollama \n\u2502  \u25cb OpenAI \n\u2502  \u25cb OpenRouter \n\u2514  \n"})}),(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Enter you API key (and any other configuration details) when prompted"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Anthropic \n\u2502\n\u25c6  Provider Anthropic requires ANTHROPIC_API_KEY, please enter a value\n\u2502   \n\u2514  \n"})})]}),(0,t.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To update your LLM provider and API key:"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the three dots (",(0,t.jsx)(n.code,{children:"..."}),") in the top-right corner."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Provider Settings"})," from the menu."]}),"\n",(0,t.jsxs)(n.li,{children:["Click Edit, enter your API key, and click ",(0,t.jsx)(n.code,{children:"Set as Active"}),"."]}),"\n"]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"local-llms-ollama",children:"Local LLMs (Ollama)"}),"\n",(0,t.jsx)(n.p,{children:"Ollama provides local LLMs, which requires a bit more set up before you can use it with Goose."}),"\n",(0,t.jsx)(n.admonition,{title:"Extensions Not Supported with DeepSeek",type:"warning",children:(0,t.jsxs)(n.p,{children:["DeepSeek models do not support tool calling. So if using one of these models, all Goose ",(0,t.jsx)(n.a,{href:"/docs/getting-started/using-extensions#enablingdisabling-extensions",children:"extensions must be disabled"}),"."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://ollama.com/download",children:"Download Ollama"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Run the ",(0,t.jsx)(n.a,{href:"https://ollama.com/search",children:"model of your choice"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"ollama run qwen2.5\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"In a separate terminal window, configure with Goose:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Choose to ",(0,t.jsx)(n.code,{children:"Configure Providers"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c6  What would you like to configure?\n\u2502  \u25cf Configure Providers (Change provider or update credentials)\n\u2502  \u25cb Toggle Extensions \n\u2502  \u25cb Add Extension \n\u2514  \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.code,{children:"Ollama"})," as the model provider"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c6  Which model provider should we use?\n\u2502  \u25cb Anthropic \n\u2502  \u25cb Databricks \n\u2502  \u25cb Google Gemini \n\u2502  \u25cb Groq \n\u2502  \u25cf Ollama (Local open source models)\n\u2502  \u25cb OpenAI \n\u2502  \u25cb OpenRouter \n\u2514  \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Enter the model you have running"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Configure Providers \n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Ollama \n\u2502\n\u25c7  Enter a model from that provider:\n\u2502  qwen2.5\n\u2502\n\u25c7  Welcome! You're all set to explore and utilize my capabilities. Let's get started on solving your problems together!\n\u2502\n\u2514  Configuration saved successfully\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var o=r(4164);const t={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,i),hidden:r,children:n})}},5537:(e,n,r)=>{r.d(n,{A:()=>y});var o=r(6540),t=r(4164),s=r(5627),i=r(6347),l=r(372),a=r(604),d=r(1861),c=r(8749);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:t}}=e;return{value:n,label:r,attributes:o,default:t}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[i,a]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[d,u]=g({queryString:r,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Dv)(r);return[t,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),f=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=r(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function v(e){let{className:n,block:r,selectedValue:o,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=a.indexOf(n),t=l[r].value;t!==o&&(d(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{a.push(e)},onKeyDown:u,onClick:c,...s,className:(0,t.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(6540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);