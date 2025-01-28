"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[7924],{4575:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>g,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"getting-started/installation","title":"Install Goose","description":"Run the following command to install the latest version of Goose:","source":"@site/docs/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/goose/docs/getting-started/installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/goose/docs/category/getting-started"},"next":{"title":"Configure LLM Provider","permalink":"/goose/docs/getting-started/providers"}}');var i=s(4848),t=s(8453),r=s(5537),l=s(9329),a=s(6289),d=s(6960),c=s(5561),h=s(8127);const u={sidebar_position:1},p="Install Goose",g={},x=[{value:"Set LLM Provider",id:"set-llm-provider",level:3},{value:"Update a Provider",id:"update-a-provider",level:3},{value:"Running Goose",id:"running-goose",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function j(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"install-goose",children:"Install Goose"})}),"\n",(0,i.jsx)(c.A,{}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(o.p,{children:"Run the following command to install the latest version of Goose:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | sh\n"})}),(0,i.jsx)(o.p,{children:"This script will fetch the latest version of Goose and set it up on your system."}),(0,i.jsx)(o.admonition,{title:"Best Practice",type:"tip",children:(0,i.jsx)(o.p,{children:"It\u2019s best to keep Goose updated. You can update it by re-running the installation script."})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsxs)(o.p,{children:["To install Goose, click the ",(0,i.jsx)(o.strong,{children:"button"})," below:"]}),(0,i.jsx)("div",{className:"pill-button",children:(0,i.jsxs)(a.A,{className:"button button--primary button--lg",to:"https://github.com/block/goose/releases/download/stable/Goose.zip",children:[(0,i.jsx)(d.i,{}),(0,i.jsx)(o.p,{children:"download goose desktop"})]})}),(0,i.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Unzip the downloaded ",(0,i.jsx)(o.code,{children:"Goose.zip"})," file."]}),"\n",(0,i.jsx)(o.li,{children:"Run the executable file to launch the Goose desktop application."}),"\n"]}),(0,i.jsx)(o.admonition,{title:"Best Practice",type:"tip",children:(0,i.jsxs)(o.p,{children:["It\u2019s best to keep Goose updated. You can do this by checking the ",(0,i.jsx)(o.a,{href:"https://github.com/block/goose/releases/stable",children:"Goose GitHub Release page"})," and downloading updates when available."]})})]})]})]}),"\n",(0,i.jsx)(o.h3,{id:"set-llm-provider",children:"Set LLM Provider"}),"\n",(0,i.jsxs)(o.p,{children:["Goose works with a set of ",(0,i.jsx)(o.a,{href:"/docs/getting-started/providers",children:"supported LLM providers"}),", and you\u2019ll need an API key to get started. When you use Goose for the first time, you\u2019ll be prompted to select a provider and enter your API key."]}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(o.p,{children:"Upon installing, Goose will automatically enter its configuration screen. Here is where you can set up your LLM provider."}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7 What would you like to configure?\n\u2502 Configure Providers\n\u2502\n\u25c7 Which model provider should we use?\n\u2502 OpenAI\n\u2502\n\u25c7 Provider openai requires OPENAI_API_KEY, please enter a value\n\u2502\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n\u2502    \n\u25c7 Enter a model from that provider:\n\u2502 gpt-4o\n\u2502\n\u25c7  Welcome aboard! You're all set to start using this agent\u2014let's achieve great things together!\n\u2502\n\u2514  Configuration saved successfully\n"})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(o.p,{children:"Upon installing, the Provider screen will appear. Here is where you can choose your LLM Provider."}),(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Set Up a Provider UI",src:s(6034).A+"",width:"752",height:"802"})}),(0,i.jsxs)(o.p,{children:["Once selecting your provider, you'll be prompted to enter an API key if applicable. Do so, and click ",(0,i.jsx)(o.code,{children:"Submit"}),"."]})]})]}),"\n",(0,i.jsx)(o.h3,{id:"update-a-provider",children:"Update a Provider"}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"To update your LLM provider and API key:"})}),(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Run the following command:"}),"\n"]}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"goose configure\n"})}),(0,i.jsxs)(o.ol,{start:"2",children:["\n",(0,i.jsxs)(o.li,{children:["Select ",(0,i.jsx)(o.code,{children:"Configure Providers"})," from the menu."]}),"\n",(0,i.jsx)(o.li,{children:"Follow the prompts to choose your LLM provider and enter or update your API key."}),"\n"]}),(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Example:"})}),(0,i.jsx)(o.p,{children:"To select an option during configuration, use the up and down arrows to highlight your choice then press Enter."}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"\u250c   goose-configure\n\u2502\n\u25c7 What would you like to configure?\n\u2502 Configure Providers\n\u2502\n\u25c7 Which model provider should we use?\n\u2502 Google Gemini\n\u2502\n\u25c7 Provider Google Gemini requires GOOGLE_API_KEY, please enter a value\n\u2502\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\u25aa\n\u2502    \n\u25c7 Enter a model from that provider:\n\u2502 gemini-2.0-flash-exp\n\u2502\n\u25c7  Hello there! You're all set to use me, so please ask away!\n\u2502\n\u2514  Configuration saved successfully\n"})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"To update your LLM provider and API key:"})}),(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Click on the three dots in the top-right corner."}),"\n",(0,i.jsxs)(o.li,{children:["Select ",(0,i.jsx)(o.code,{children:"Provider Settings"})," from the menu."]}),"\n",(0,i.jsx)(o.li,{children:"Choose a provider from the list."}),"\n",(0,i.jsxs)(o.li,{children:["Click Edit, enter your API key, and click ",(0,i.jsx)(o.code,{children:"Set as Active"}),"."]}),"\n"]})]})]}),"\n",(0,i.jsx)(h.A,{}),"\n",(0,i.jsx)(o.h2,{id:"running-goose",children:"Running Goose"}),"\n",(0,i.jsxs)(r.A,{groupId:"interface",children:[(0,i.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,i.jsx)(o.p,{children:"From your terminal, navigate to the directory you'd like to start from and run:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"goose session \n"})})]}),(0,i.jsxs)(l.A,{value:"ui",label:"Goose Desktop",children:[(0,i.jsx)(o.p,{children:"Starting a session in the Goose Desktop is straightforward. After choosing your provider, you\u2019ll see the session interface ready for use."}),(0,i.jsx)(o.p,{children:"Type your questions, tasks, or instructions directly into the input field, and Goose will get to work immediately."})]})]}),"\n",(0,i.jsx)(o.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(o.p,{children:["You can also configure Extensions to extend Goose's functionality, including adding new ones or toggling them on and off. For detailed instructions, visit the ",(0,i.jsx)(o.a,{href:"/docs/getting-started/using-extensions",children:"Using Extensions Guide"}),"."]})]})}function f(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},8127:(e,o,s)=>{s.d(o,{A:()=>t});s(6540);var n=s(2362),i=s(4848);const t=()=>(0,i.jsxs)(n.A,{type:"info",title:"Billing",children:[(0,i.jsx)("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",children:"Google Gemini"})," ","offers a free tier you can get started with. Otherwise, you'll need to ensure that you have credits available in your LLM Provider account to successfully make requests.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Some providers also have rate limits on API usage, which can affect your experience. Check out our"," ",(0,i.jsx)("a",{href:"/docs/guides/handling-llm-rate-limits",target:"_blank",children:"Handling Rate Limits"})," ","guide to learn how to efficiently manage these limits while using Goose."]})},5561:(e,o,s)=>{s.d(o,{A:()=>t});s(6540);var n=s(2362),i=s(4848);const t=()=>(0,i.jsxs)(n.A,{type:"info",title:"Supported Environments",children:["Goose currently works on ",(0,i.jsx)("strong",{children:"macOS"})," and ",(0,i.jsx)("strong",{children:"Linux"})," systems and supports both ",(0,i.jsx)("strong",{children:"ARM"})," and ",(0,i.jsx)("strong",{children:"x86"})," architectures. If you'd like to request support for additional operating systems, please"," ",(0,i.jsx)("a",{href:"https://github.com/block/goose/issues/new?template=Blank+issue",target:"_blank",rel:"noopener noreferrer",children:"open an issue on GitHub"}),"."]})},6960:(e,o,s)=>{s.d(o,{i:()=>i});var n=s(4848);const i=e=>{let{className:o=""}=e;return(0,n.jsx)("svg",{width:"1.5rem",height:"1.5rem",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",className:o,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.76 12.15a1 1 0 0 0-1.52-1.3L13 12.296V3a1 1 0 1 0-2 0v9.297l-1.24-1.448a1 1 0 0 0-1.52 1.302l3 3.5a1 1 0 0 0 1.52 0l3-3.5ZM5 16a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v3H5v-3Z",fill:"currentColor"})})}},6034:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/set-up-provider-ui-a6ba5f66d16937ee91dbad22c101c232.png"}}]);