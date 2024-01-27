"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6785],{9746:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>h,toc:()=>o});var n=t(5893),d=t(1151);const r={title:"Chat"},c=void 0,h={id:"reference/modules/listen/chat",title:"Chat",description:"class pyromod.listen.Chat",source:"@site/docs/reference/modules/listen/chat.md",sourceDirName:"reference/modules/listen",slug:"/reference/modules/listen/chat",permalink:"/reference/modules/listen/chat",draft:!1,unlisted:!1,editUrl:"https://github.com/usernein/pyromod/tree/master/docs/docs/reference/modules/listen/chat.md",tags:[],version:"current",frontMatter:{title:"Chat"},sidebar:"apiReferenceSidebar",previous:{title:"pyromod.helpers",permalink:"/reference/modules/helpers/"},next:{title:"Client",permalink:"/reference/modules/listen/client"}},i={},o=[{value:"<em>class</em> <code>pyromod.listen.Chat</code>",id:"class-pyromodlistenchat",level:2},{value:"<em>bound method</em> <code>listen</code>",id:"bound-method-listen",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<em>bound method</em> <code>ask</code>",id:"bound-method-ask",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<em>bound method</em> <code>stop_listening</code>",id:"bound-method-stop_listening",level:3}];function l(e){const s={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h2,{id:"class-pyromodlistenchat",children:[(0,n.jsx)(s.em,{children:"class"})," ",(0,n.jsx)(s.code,{children:"pyromod.listen.Chat"})]}),"\n",(0,n.jsxs)(s.p,{children:["Bases: ",(0,n.jsx)(s.code,{children:"pyrogram.types.user_and_chats.chat.Chat"})]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"pyromod.listen.Chat"})," class is an extension of the ",(0,n.jsx)(s.code,{children:"pyrogram.types.user_and_chats.chat.Chat"})," class. It provides additional\nmethods for working with chats with pyromod. It is monkeypatched into the ",(0,n.jsx)(s.code,{children:"pyrogram.types.user_and_chats.chat.Chat"})," class, so you get all the\nmethods described here on the original class when you receive the chat object."]}),"\n",(0,n.jsxs)(s.h3,{id:"bound-method-listen",children:[(0,n.jsx)(s.em,{children:"bound method"})," ",(0,n.jsx)(s.code,{children:"listen"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"bound method"})," ",(0,n.jsx)(s.code,{children:"listen(*args, **kwargs)"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Listen for a message or a callback query on the chat. This method is a bound method that calls the ",(0,n.jsx)(s.code,{children:"listen"})," method of\nthe ",(0,n.jsx)(s.code,{children:"Client"}),"\nclass, passing its own ",(0,n.jsx)(s.code,{children:"Chat.id"})," as the ",(0,n.jsx)(s.code,{children:"chat_id"})," parameter."]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"*args"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Any"})}),(0,n.jsxs)(s.td,{children:["The arguments to pass to the ",(0,n.jsx)(s.code,{children:"Client.listen"})," method."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"**kwargs"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Any"})}),(0,n.jsxs)(s.td,{children:["The keyword arguments to pass to the ",(0,n.jsx)(s.code,{children:"Client.listen"})," method."]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:"The message that was listened for."}),"\n",(0,n.jsxs)(s.h3,{id:"bound-method-ask",children:[(0,n.jsx)(s.em,{children:"bound method"})," ",(0,n.jsx)(s.code,{children:"ask"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"bound method"})," ",(0,n.jsx)(s.code,{children:"ask(text: str, *args, **kwargs)"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Sends a message with the specified text and wait for a response from the same chat. This method is a bound method that\ncalls\nthe ",(0,n.jsx)(s.code,{children:"ask"})," method of the ",(0,n.jsx)(s.code,{children:"Client"})," class, passing its own ",(0,n.jsx)(s.code,{children:"Chat.id"})," as the ",(0,n.jsx)(s.code,{children:"chat_id"})," parameter."]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"text"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"str"})}),(0,n.jsx)(s.td,{children:"The text of the message to send."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"*args"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Any"})}),(0,n.jsxs)(s.td,{children:["The arguments to pass to the ",(0,n.jsx)(s.code,{children:"Client.ask"})," method."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"**kwargs"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Any"})}),(0,n.jsxs)(s.td,{children:["The keyword arguments to pass to the ",(0,n.jsx)(s.code,{children:"Client.ask"})," method."]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:["The message that was listened for. In the attribute ",(0,n.jsx)(s.code,{children:"sent_message"}),", you can find Message object of the message that was sent."]}),"\n",(0,n.jsxs)(s.h3,{id:"bound-method-stop_listening",children:[(0,n.jsx)(s.em,{children:"bound method"})," ",(0,n.jsx)(s.code,{children:"stop_listening"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"bound method"})," ",(0,n.jsx)(s.code,{children:"stop_listening()"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Stop listening for messages and/or callback queries. This method is a bound method that calls the ",(0,n.jsx)(s.code,{children:"stop_listening"}),"\nmethod\nof the ",(0,n.jsx)(s.code,{children:"Client"})," class, passing its own ",(0,n.jsx)(s.code,{children:"Chat.id"})," as the ",(0,n.jsx)(s.code,{children:"chat_id"})," parameter."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Returns:"}),"\nNone"]})]})}function a(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>c});var n=t(7294);const d={},r=n.createContext(d);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);