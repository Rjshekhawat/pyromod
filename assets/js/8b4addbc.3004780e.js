"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3785],{7667:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(5893),n=s(1151);const i={title:"Listener"},d=void 0,c={id:"reference/modules/types/listener",title:"Listener",description:"class pyromod.types.Listener",source:"@site/docs/reference/modules/types/listener.md",sourceDirName:"reference/modules/types",slug:"/reference/modules/types/listener",permalink:"/reference/modules/types/listener",draft:!1,unlisted:!1,editUrl:"https://github.com/usernein/pyromod/tree/master/docs/docs/reference/modules/types/listener.md",tags:[],version:"current",frontMatter:{title:"Listener"},sidebar:"apiReferenceSidebar",previous:{title:"ListenerTypes",permalink:"/reference/modules/types/listener-types"},next:{title:"monkeypatch utilities",permalink:"/reference/modules/utils/patch"}},o={},l=[{value:"<em>class</em> pyromod.types.Listener",id:"class-pyromodtypeslistener",level:2},{value:"<em>Constructor parameters</em>",id:"constructor-parameters",level:3}];function h(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h2,{id:"class-pyromodtypeslistener",children:[(0,r.jsx)(t.em,{children:"class"})," pyromod.types.Listener"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"pyromod.types.Listener"})," class is designed to manage and handle different types of listeners used in pyromod. It enables\nyou to wait for specific events like messages or callback queries and provides mechanisms for defining the conditions\nand filters that trigger these listeners."]}),"\n",(0,r.jsx)(t.h3,{id:"constructor-parameters",children:(0,r.jsx)(t.em,{children:"Constructor parameters"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"listener_type"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pyromod.types.ListenerTypes"})}),(0,r.jsx)(t.td,{children:'The type of listener that specifies the event you want to listen for. It can be either a "message" or a "callback_query."'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"future"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"asyncio.Future"})}),(0,r.jsxs)(t.td,{children:["A ",(0,r.jsx)(t.code,{children:"Future"})," object representing the asynchronous task that waits for the event. When the event occurs, the ",(0,r.jsx)(t.code,{children:"Future"})," will be resolved, and the listener will be able to proceed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"filters"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pyrogram.filters.Filter"})}),(0,r.jsx)(t.td,{children:"A filter to check the incoming event against. The listener will only be triggered when the event matches the provided filter."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"unallowed_click_alert"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"bool"})}),(0,r.jsxs)(t.td,{children:["A flag that determines whether to send an alert if a button click event doesn't match the filter conditions. Setting this to ",(0,r.jsx)(t.code,{children:"True"})," will send an alert message to the user in such cases."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"identifier"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pyromod.Identifier"})}),(0,r.jsxs)(t.td,{children:["An ",(0,r.jsx)(t.code,{children:"Identifier"})," instance that defines the criteria for the event. It includes properties like ",(0,r.jsx)(t.code,{children:"chat_id"}),", ",(0,r.jsx)(t.code,{children:"message_id"}),", ",(0,r.jsx)(t.code,{children:"from_user_id"}),", and ",(0,r.jsx)(t.code,{children:"inline_message_id"})," that you want to match against the incoming event."]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>d});var r=s(7294);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);