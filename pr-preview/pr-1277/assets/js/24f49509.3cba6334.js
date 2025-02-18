"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[3036],{362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"tutorials/fetch-mcp","title":"Fetch Extension","description":"Add Fetch MCP Server as a Goose Extension","source":"@site/docs/tutorials/fetch-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/fetch-mcp","permalink":"/goose/pr-preview/pr-1277/docs/tutorials/fetch-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Fetch Extension","description":"Add Fetch MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Developer Extension","permalink":"/goose/pr-preview/pr-1277/docs/tutorials/developer-mcp"},"next":{"title":"Figma Extension","permalink":"/goose/pr-preview/pr-1277/docs/tutorials/figma-mcp"}}');var s=t(4848),i=t(8453),r=t(5537),l=t(9329),a=t(5887);const c={title:"Fetch Extension",description:"Add Fetch MCP Server as a Goose Extension"},d=void 0,h={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3},{value:"Results",id:"results",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{videoUrl:"https://www.youtube.com/embed/_WMm4kDYMog"}),"\n",(0,s.jsx)(n.admonition,{title:"Known Limitation",type:"warning",children:(0,s.jsxs)(n.p,{children:["The Fetch extension ",(0,s.jsx)(n.a,{href:"https://github.com/block/goose/issues/1184",children:"does not work"})," with Google models (e.g. gemini-2.0-flash) because this extension uses ",(0,s.jsx)(n.code,{children:"format: uri"})," in its JSON schema which Google doesn't support."]})}),"\n",(0,s.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,s.jsx)(n.a,{href:"https://github.com/modelcontextprotocol/servers/tree/main/src/fetch",children:"Fetch MCP Server"})," as a Goose extension to retrieve and process content from the web."]}),"\n",(0,s.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Command"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"uvx mcp-server-fetch\n"})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Note that you'll need ",(0,s.jsx)(n.a,{href:"https://docs.astral.sh/uv/#installation",children:"uv"})," installed on your system to run this command, as it uses ",(0,s.jsx)(n.code,{children:"uvx"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(r.A,{groupId:"interface",children:[(0,s.jsxs)(l.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Choose to add a ",(0,s.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  fetch\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  fetch\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  uvx mcp-server-fetch\n  // highlight-end\n  \u2514 \n"})}),(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Choose No when asked to add environment variables"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  fetch\n \u2502\n \u25c7  What command should be run?\n \u2502  uvx mcp-server-fetch\n \u2502\n // highlight-start\n \u25c7  Would you like to add environment variables?\n \u2502  No \n // highlight-end\n \u2502\n \u2514  Added fetch extension \n"})})]}),(0,s.jsx)(l.A,{value:"ui",label:"Goose Desktop",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to the ",(0,s.jsx)(n.a,{href:"https://block.github.io/goose/v1/extensions/",children:"Extensions Directory"})]}),"\n",(0,s.jsxs)(n.li,{children:["Find the ",(0,s.jsx)(n.code,{children:"Fetch"})," extension"]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.code,{children:"Install"})]}),"\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n"]})})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Let's use the Fetch extension to get random programming jokes from the ",(0,s.jsx)(n.a,{href:"https://official-joke-api.appspot.com/random_joke",children:"Official Joke API"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["While this API does not require an API key, many APIs do. If you need to provide an API key, you can set it as an environment variable and tell Goose its name. Example: ",(0,s.jsx)(n.em,{children:"\"get tomorrow's weather for New Orleans from the weatherapi. Don't use the key directly but instead use a script that gets the value from the env var WEATHER_API_KEY\""})]})}),"\n",(0,s.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make a web page that tells jokes for programmers. The page should ask the user the setup of the joke, allow them to guess the punchline and then tell them if they are right or wrong. Include a button that allows them to request another joke. you can fetch the jokes from the official joke api\n"})}),"\n",(0,s.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'I\'ll help you create a web page that uses the Official Joke API to display programming jokes. I\'ll break this down into steps:\n\nFirst, let\'s verify the API endpoint and see what kind of data we get\nThen create an HTML file with the necessary structure\nAdd JavaScript to handle the interactions\n\nLet me check the API first:\n\n\nFETCH\nurl: https://official-joke-api.appspot.com/jokes/programming/random\n\nOutput\nContent type application/json; charset=utf-8 cannot be simplified to markdown, but here is the raw content:\nContents of https://official-joke-api.appspot.com/jokes/programming/random:\n[{"type":"programming","setup":"A SQL query walks into a bar, walks up to two tables and asks...","punchline":"\'Can I join you?\'","id":23}]\n\nPerfect! Now I\'ll create an HTML file with the necessary structure and JavaScript code:\n\nTEXT_EDITOR\ncommand: write\nfile_text:\n<!DOCTYPE html> <html lang="en"> <head> <meta charset="U...\npath:\nprogrammer_jokes.html\n\nOutput\nprogrammer_jokes.html\n\n\n[... contents of programmer_jokes.html ...]\n\nI\'ve created a complete web page that:\n\nFetches random programming jokes from the Official Joke API\nShows the setup of the joke\nProvides an input field for users to guess the punchline\nShows whether they got it right or wrong\nDisplays the actual punchline after they guess\nIncludes a button to get another joke\n\nThe page also includes:\nClean, modern styling\nError handling for API failures\nResponsive design that works on both desktop and mobile\nVisual feedback for correct/incorrect answers\nDisabled input after guessing to prevent multiple attempts\nYou can open the file programmer_jokes.html in your web browser to try it out. Would you like me to help you test it or make any adjustments to the design or functionality?\n'})}),"\n",(0,s.jsx)(n.h3,{id:"results",children:"Results"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"website goose built",src:t(282).A+"",width:"913",height:"360"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Source Code"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="programmer_jokes.html"',children:"\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Programmer Jokes</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            max-width: 800px;\n            margin: 0 auto;\n            padding: 20px;\n            text-align: center;\n        }\n        .container {\n            background-color: #f5f5f5;\n            padding: 20px;\n            border-radius: 10px;\n            margin-top: 20px;\n        }\n        .setup {\n            font-size: 1.2em;\n            margin-bottom: 20px;\n        }\n        .guess-container {\n            margin-bottom: 20px;\n        }\n        #guessInput {\n            padding: 10px;\n            width: 300px;\n            margin-right: 10px;\n        }\n        button {\n            padding: 10px 20px;\n            background-color: #4CAF50;\n            color: white;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n        button:hover {\n            background-color: #45a049;\n        }\n        .result {\n            margin-top: 20px;\n            font-weight: bold;\n        }\n        .correct {\n            color: green;\n        }\n        .incorrect {\n            color: red;\n        }\n        #punchline {\n            display: none;\n            margin-top: 20px;\n            font-style: italic;\n        }\n    </style>\n</head>\n<body>\n    <h1>Programmer Jokes</h1>\n    <div class=\"container\">\n        <div id=\"setup\" class=\"setup\">Loading joke...</div>\n        <div class=\"guess-container\">\n            <input type=\"text\" id=\"guessInput\" placeholder=\"Guess the punchline...\">\n            <button onclick=\"checkGuess()\">Submit Guess</button>\n        </div>\n        <div id=\"result\" class=\"result\"></div>\n        <div id=\"punchline\"></div>\n        <button onclick=\"getNewJoke()\" style=\"margin-top: 20px;\">Get Another Joke</button>\n    </div>\n\n    <script>\n        let currentJoke = null;\n\n        async function getNewJoke() {\n            try {\n                const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');\n                const jokes = await response.json();\n                currentJoke = jokes[0];\n                \n                document.getElementById('setup').textContent = currentJoke.setup;\n                document.getElementById('guessInput').value = '';\n                document.getElementById('result').textContent = '';\n                document.getElementById('punchline').style.display = 'none';\n                document.getElementById('guessInput').disabled = false;\n            } catch (error) {\n                document.getElementById('setup').textContent = 'Error loading joke. Please try again.';\n            }\n        }\n\n        function checkGuess() {\n            const guess = document.getElementById('guessInput').value.trim().toLowerCase();\n            const punchline = currentJoke.punchline.toLowerCase();\n            const resultElement = document.getElementById('result');\n            const punchlineElement = document.getElementById('punchline');\n\n            if (guess === punchline) {\n                resultElement.textContent = 'Correct! You got it! \ud83c\udf89';\n                resultElement.className = 'result correct';\n            } else {\n                resultElement.textContent = 'Not quite! Here\\'s the punchline:';\n                resultElement.className = 'result incorrect';\n            }\n\n            punchlineElement.textContent = currentJoke.punchline;\n            punchlineElement.style.display = 'block';\n            document.getElementById('guessInput').disabled = true;\n        }\n\n        // Load first joke when page loads\n        getNewJoke();\n    <\/script>\n</body>\n</html>\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5887:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var o=t(2362),s=t(4848);const i=e=>{let{videoUrl:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Watch the demo"}),(0,s.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,s.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,s.jsx)("hr",{})]})}},282:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/programmer-jokes-fetch-mcp-ccb6ac3de6a6a9ecec6f529638d2049a.png"}}]);