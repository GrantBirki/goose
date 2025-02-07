"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[1117],{8755:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"goose-architecture/error-handling","title":"Error Handling","description":"Error handling is a key performance-driving part of Goose. There are many ways that the non-determinism","source":"@site/docs/goose-architecture/error-handling.md","sourceDirName":"goose-architecture","slug":"/goose-architecture/error-handling","permalink":"/goose/pr-preview/pr-1151/docs/goose-architecture/error-handling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Error Handling"},"sidebar":"tutorialSidebar","previous":{"title":"Extensions Design","permalink":"/goose/pr-preview/pr-1151/docs/goose-architecture/extensions-design"},"next":{"title":"Troubleshooting","permalink":"/goose/pr-preview/pr-1151/docs/troubleshooting"}}');var o=n(4848),s=n(8453);const i={title:"Error Handling"},a="Error Handling in Goose",l={},h=[{value:"Traditional Errors",id:"traditional-errors",level:2},{value:"Agent Errors",id:"agent-errors",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"error-handling-in-goose",children:"Error Handling in Goose"})}),"\n",(0,o.jsx)(r.p,{children:"Error handling is a key performance-driving part of Goose. There are many ways that the non-determinism\nin the LLM can introduce an error that it can in turn recover from. In a typical Goose session, it's expected for there\nto be several agent errors that the model can see directly and correct, perhaps entirely behind the scenes."}),"\n",(0,o.jsx)(r.h2,{id:"traditional-errors",children:"Traditional Errors"}),"\n",(0,o.jsxs)(r.p,{children:["While the agent is operating, there can be intermittent issues in the network, availability of the\nfoundational model, etc. These are raised as errors in the agent API to the caller, who can decide\nhow to handle that. We generally handle these with ",(0,o.jsx)(r.a,{href:"https://docs.rs/anyhow/latest/anyhow/",children:"anyhow::Error"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"agent-errors",children:"Agent Errors"}),"\n",(0,o.jsx)(r.p,{children:"There are several types of errors where everything is working correctly, but the model generations\nthemselves are somehow causing errors. Things like generating an unknown tool name, incorrect parameters,\nor a well formed tool call that results in an error in the tool itself. All of these can be surfaced to\nthe LLM to have it attempt to recover."}),"\n",(0,o.jsxs)(r.p,{children:["The error messages are in some ways prompting - they give instructions to the LLM on how it might go\nabout recovering. We handle these with ",(0,o.jsx)(r.a,{href:"https://docs.rs/thiserror/latest/thiserror/",children:"thiserror::Error"})," and carefully maintain a collection."]}),"\n",(0,o.jsxs)(r.p,{children:["To cover all these cases, both ",(0,o.jsx)(r.code,{children:"ToolUse"})," and ",(0,o.jsx)(r.code,{children:"ToolResult"})," are typically passed through the API as part of a\n",(0,o.jsx)(r.code,{children:"Result<T, AgentError>"}),". An error in a ",(0,o.jsx)(r.code,{children:"ToolUse"})," will immediately become an error in a ",(0,o.jsx)(r.code,{children:"ToolResult"})," and\npassed back to the LLM. A valid ",(0,o.jsx)(r.code,{children:"ToolUse"})," might still end up in an error ",(0,o.jsx)(r.code,{children:"ToolResult"}),", which is also passed\nback to the LLM."]}),"\n",(0,o.jsx)(r.p,{children:"The providers then handle translating the agent errors into the various API specs as valid messages."})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(6540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);