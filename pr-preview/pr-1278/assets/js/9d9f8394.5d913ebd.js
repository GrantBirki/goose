"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9013],{269:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"Goose, like any system, may run into occasional issues. This guide provides solutions for common problems.","source":"@site/docs/troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/goose/pr-preview/pr-1278/docs/troubleshooting","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Troubleshooting"},"sidebar":"tutorialSidebar","previous":{"title":"Error Handling","permalink":"/goose/pr-preview/pr-1278/docs/goose-architecture/error-handling"}}');var r=s(4848),i=s(8453);const t={title:"Troubleshooting"},l="Troubleshooting",a={},d=[{value:"Goose Edits Files",id:"goose-edits-files",level:3},{value:"Interrupting Goose",id:"interrupting-goose",level:3},{value:"Stuck in a Loop or Unresponsive",id:"stuck-in-a-loop-or-unresponsive",level:3},{value:"Context Length Exceeded Error",id:"context-length-exceeded-error",level:3},{value:"Using Ollama Provider",id:"using-ollama-provider",level:3},{value:"Handling Rate Limit Errors",id:"handling-rate-limit-errors",level:3},{value:"Hermit Errors",id:"hermit-errors",level:3},{value:"API Errors",id:"api-errors",level:3},{value:"Uninstall Goose or Remove Cached Data",id:"uninstall-goose-or-remove-cached-data",level:3},{value:"Keychain/Keyring Errors",id:"keychainkeyring-errors",level:3},{value:"Package Runners",id:"package-runners",level:3},{value:"macOS Permission Issues",id:"macos-permission-issues",level:3},{value:"How to Check and Fix Permissions:",id:"how-to-check-and-fix-permissions",level:4},{value:"How to Grant Read and Write Permissions:",id:"how-to-grant-read-and-write-permissions",level:4},{value:"Connection Error with Ollama Provider on WSL",id:"connection-error-with-ollama-provider-on-wsl",level:3},{value:"Need Further Help?",id:"need-further-help",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,r.jsx)(n.p,{children:"Goose, like any system, may run into occasional issues. This guide provides solutions for common problems."}),"\n",(0,r.jsx)(n.h3,{id:"goose-edits-files",children:"Goose Edits Files"}),"\n",(0,r.jsx)(n.p,{children:"Goose can and will edit files as part of its workflow. To avoid losing personal changes, use version control to stage your personal edits. Leave Goose edits unstaged until reviewed. Consider separate commits for Goose's edits so you can easily revert them if needed."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"interrupting-goose",children:"Interrupting Goose"}),"\n",(0,r.jsxs)(n.p,{children:["If Goose is heading in the wrong direction or gets stuck, you can interrupt it by pressing ",(0,r.jsx)(n.code,{children:"CTRL+C"}),". This will stop Goose and give you the opportunity to correct its actions or provide additional information."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stuck-in-a-loop-or-unresponsive",children:"Stuck in a Loop or Unresponsive"}),"\n",(0,r.jsx)(n.p,{children:'In rare cases, Goose may enter a "doom spiral" or become unresponsive during a long session. This is often resolved by ending the current session, and starting a new session.'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Hold down ",(0,r.jsx)(n.code,{children:"Ctrl+C"})," to cancel"]}),"\n",(0,r.jsx)(n.li,{children:"Start a new session:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose session\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"For particularly large or complex tasks, consider breaking them into smaller sessions."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"context-length-exceeded-error",children:"Context Length Exceeded Error"}),"\n",(0,r.jsxs)(n.p,{children:["This error occurs when the input provided to Goose exceeds the maximum token limit of the LLM being used. To resolve this, try breaking down your input into smaller parts. You can also use ",(0,r.jsx)(n.code,{children:".goosehints"})," as a way to provide goose with detailed context. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/guides/using-goosehints",children:"Using Goosehints Guide"})," for more information."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"using-ollama-provider",children:"Using Ollama Provider"}),"\n",(0,r.jsxs)(n.p,{children:["Ollama provides local LLMs, which means you must first ",(0,r.jsx)(n.a,{href:"/docs/getting-started/providers#local-llms-ollama",children:"download Ollama and run a model"})," before attempting to use this provider with Goose. If you do not have the model downloaded, you'll run into the following error:"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:['ExecutionError("error sending request for url (',(0,r.jsx)(n.a,{href:"http://localhost:11434/v1/chat/completions",children:"http://localhost:11434/v1/chat/completions"}),')")']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Another thing to note is that the DeepSeek models do not support tool calling, so all Goose ",(0,r.jsx)(n.a,{href:"/docs/getting-started/using-extensions#enablingdisabling-extensions",children:"extensions must be disabled"})," to use one of these models. Unfortunately, without the use of tools, there is not much Goose will be able to do autonomously if using DeepSeek. However, Ollama's other models such as ",(0,r.jsx)(n.code,{children:"qwen2.5"})," do support tool calling and can be used with Goose extensions."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"handling-rate-limit-errors",children:"Handling Rate Limit Errors"}),"\n",(0,r.jsxs)(n.p,{children:["Goose may encounter a ",(0,r.jsx)(n.code,{children:"429 error"})," (rate limit exceeded) when interacting with LLM providers. The recommended solution is to use OpenRouter. See ",(0,r.jsx)(n.a,{href:"/docs/guides/handling-llm-rate-limits-with-goose",children:"Handling LLM Rate Limits"})," for more info."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hermit-errors",children:"Hermit Errors"}),"\n",(0,r.jsxs)(n.p,{children:['If you see an issue installing an extension in the app that says "hermit',":fatal",'", you may need to reset your hermit cache. We use\na copy of hermit to ensure npx and uvx are consistently available. If you have already used an older version of hermit, you may\nneed to cleanup the cache - on Mac this cache is at']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo rm -rf ~/Library/Caches/hermit\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"api-errors",children:"API Errors"}),"\n",(0,r.jsx)(n.p,{children:"Users may run into an error like the one below when there are issues with their LLM API tokens, such as running out of credits or incorrect configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"Traceback (most recent call last):\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/exchange/providers/utils.py\",\nline 30, in raise_for_status\n    response.raise_for_status()\n    ~~~~~~~~~~~~~~~~~~~~~~~~~^^\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/httpx/_models.py\",\nline 829, in raise_for_status\n    raise HTTPStatusError(message, request=request, response=self)\nhttpx.HTTPStatusError: Client error '404 Not Found' for url\n'https://api.openai.com/v1/chat/completions'\n\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"This error typically occurs when LLM API credits are exhausted or your API key is invalid. To resolve this issue:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Check Your API Credits:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Log into your LLM provider's dashboard"}),"\n",(0,r.jsx)(n.li,{children:"Verify that you have enough credits. If not, refill them"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Verify API Key:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run the following command to reconfigure your API key:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed steps on updating your LLM provider, refer to the ",(0,r.jsx)(n.a,{href:"/docs/getting-started/installation",children:"Installation"})," Guide."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"uninstall-goose-or-remove-cached-data",children:"Uninstall Goose or Remove Cached Data"}),"\n",(0,r.jsx)(n.p,{children:"You may need to uninstall Goose or clear existing data before re-installing. Goose stores data in a few places. Secrets, such as API keys, are stored exclusively in the system keychain."}),"\n",(0,r.jsxs)(n.p,{children:["Logs and configuration data are stored in ",(0,r.jsx)(n.code,{children:"~/.config/goose"}),". And the app stores a small amount of data in\n",(0,r.jsx)(n.code,{children:"~/Library/Application Support/Goose"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can remove all of this data by following these steps."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["stop any copies of goose running (CLI or GUI)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"consider confirming you've stopped them all via the activity monitor"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'open the keychain and delete the credential called "goose", which contains all secrets stored by goose'}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"rm -rf ~/.config/goose"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you are using Goose Desktop on macOS, you may also need to remove the app itself."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"rm -rf ~/Library/Application Support/Goose"})}),"\n",(0,r.jsx)(n.li,{children:'Delete the "Goose" app from your Applications folder'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After this cleanup, if you are looking to try out a fresh install of Goose, you can now start from the usual\ninstall instructions."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"keychainkeyring-errors",children:"Keychain/Keyring Errors"}),"\n",(0,r.jsx)(n.p,{children:"Goose tries to use the system keyring to store secrets. In environments where there is no keyring support, you may\nsee an error like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Error Failed to access secure storage (keyring): Platform secure storage failure: DBus error: The name org.freedesktop.secrets was not provided by any .service files\nPlease check your system keychain and run 'goose configure' again.\nIf your system is unable to use the keyring, please try setting secret key(s) via environment variables.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this case, you will need to set your provider specific environment variable(s), which can be found at ",(0,r.jsx)(n.a,{href:"/docs/getting-started/providers",children:"Supported LLM Providers"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can set them either by doing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"export GOOGLE_API_KEY=$YOUR_KEY_HERE"})," - for the duration of your session"]}),"\n",(0,r.jsxs)(n.li,{children:["in your ",(0,r.jsx)(n.code,{children:"~/.bashrc"})," or ",(0,r.jsx)(n.code,{children:"~/.zshrc"})," - (or equivalents) so it persists on new shell each new session"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Then select the ",(0,r.jsx)(n.code,{children:"No"})," option when prompted to save the value to your keyring."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ goose configure\n\nWelcome to goose! Let's get you set up with a provider.\n  you can rerun this command later to update your configuration\n\n\u250c   goose-configure\n\u2502\n\u25c7  Which model provider should we use?\n\u2502  Google Gemini\n\u2502\n\u25c7  GOOGLE_API_KEY is set via environment variable\n\u2502\n\u25c7  Would you like to save this value to your keyring?\n\u2502  No\n\u2502\n\u25c7  Enter a model from that provider:\n\u2502  gemini-2.0-flash-exp\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"package-runners",children:"Package Runners"}),"\n",(0,r.jsx)(n.p,{children:"Many of the external extensions require a package runner. For example, if you run into an error like this one:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Failed to start extension: {extension name}, "No such file or directory (os error 2)"\nPlease check extension configuration for {extension name}.\n'})}),"\n",(0,r.jsx)(n.p,{children:"... it signals that the extension may not have been installed and you need the package runner in order to do so."}),"\n",(0,r.jsxs)(n.p,{children:["An example is the GitHub extension whose command is ",(0,r.jsx)(n.code,{children:"npx -y @modelcontextprotocol/server-github"}),". You'd need ",(0,r.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses npx."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"macos-permission-issues",children:"macOS Permission Issues"}),"\n",(0,r.jsxs)(n.p,{children:["If you encounter an issue where the Goose Desktop app shows no window on launch, it may be due to file and folder permissions. This typically happens because Goose needs read and write access to the ",(0,r.jsx)(n.code,{children:"~/.config"})," directory to create its log directory and file."]}),"\n",(0,r.jsx)(n.h4,{id:"how-to-check-and-fix-permissions",children:"How to Check and Fix Permissions:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open Terminal."}),"\n",(0,r.jsx)(n.li,{children:"Run the following command to check the current permissions for ~/.config:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"ls -ld ~/.config\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example output:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"drwx------  7 yourusername  staff  224 Jan 15 12:00 /Users/yourusername/.config\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"rwx"})," indicates you have read (r), write (w), and execute (x) permissions for your user. If you do not see ",(0,r.jsx)(n.code,{children:"rwx"})," for your user, follow the steps below."]}),"\n",(0,r.jsx)(n.h4,{id:"how-to-grant-read-and-write-permissions",children:"How to Grant Read and Write Permissions:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["To add the correct permissions, run the following commands:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"chmod u+rw ~/.config\n"})}),"\n","If the ~/.config directory does not exist, create it and then assign permissions:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"mkdir -p ~/.config\nchmod u+rw ~/.config\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Verify the change:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"ls -ld ~/.config\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you still experience issues after fixing permissions, try launching Goose with superuser (admin) privileges:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"sudo /Applications/Goose.app/Contents/MacOS/Goose\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Running Goose with sudo may create files owned by root, which could lead to further permission issues. Use this as a troubleshooting step rather than a permanent fix."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"connection-error-with-ollama-provider-on-wsl",children:"Connection Error with Ollama Provider on WSL"}),"\n",(0,r.jsx)(n.p,{children:"If you encounter an error like this when setting up Ollama as the provider in Goose:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Execution error: error sending request for url (http://localhost:11434/v1/chat/completions)\n"})}),"\n",(0,r.jsx)(n.p,{children:"This likely means that the local host address is not accessible from WSL."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Check if the service is running:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl http://localhost:11434/api/tags\n"})}),"\n","If you receive a ",(0,r.jsx)(n.code,{children:"failed to connect"})," error, it\u2019s possible that WSL is using a different IP for localhost. In that case, run the following command to find the correct IP address for WSL:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ip route show | grep -i default | awk '{ print $3 }'\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Once you get the IP address, use it in your Goose configuration instead of localhost. For example:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"http://172.24.80.1:11434\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"need-further-help",children:"Need Further Help?"}),"\n",(0,r.jsxs)(n.p,{children:["If you have questions, run into issues, or just need to brainstorm ideas join the ",(0,r.jsx)(n.a,{href:"https://discord.gg/block-opensource",children:"Discord Community"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var o=s(6540);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);