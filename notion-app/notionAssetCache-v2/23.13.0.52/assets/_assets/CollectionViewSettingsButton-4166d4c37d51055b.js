"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7345],{46084:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var n=o(67294),i=o(480),l=o(86628),s=o(24405),c=o(3865),r=o(56666),a=o(9291),u=o(8406),d=o(5149),S=o(91851),p=o(40663),g=o(43250),f=o(12534),C=o(33929),v=o(80444),w=o(58421),x=o(73063),b=o(26388),V=o(85893);const h=(0,a.defineMessages)({tooltipLabel:{defaultMessage:"Edit view layout, grouping and more...",id:"database.collectionViewSettingsButton.openViewSettingsButton.tooltip"}});function k(e){window.__c={n:"CollectionViewSettingsButton"};const{collectionContextStore:t,hideTooltip:o}=e,a=(0,i.O7)(),k=(0,l.VK)((()=>t.collectionViewStore()),[t]),m=(0,l.VK)((()=>null==k?void 0:k.getType()),[k]),y=(0,l.VK)((()=>t.settingsStore),[t]),_=(0,l.VK)((()=>y.state.open),[y]),K=(0,l.VK)((()=>t.permissionScopes.state),[t]),T=(0,l.VK)((()=>(0,w.n)(y)),[y]),j=!(0,c.Cf)({tab:T}),L=(0,l.VK)((()=>t.contextType),[t]),M=(0,n.useCallback)((()=>{const e=v.default.state.currentUserSettingsStore,t=v.default.state.currentSpaceStore;if(e&&t){"click_view_settings"===(0,p.jH)(e,t)&&(0,S.uR)({environment:a,requiredCurrPhase:void 0,nextPhase:"complete",currentUserSettingsStore:e,currentSpaceStore:t})}}),[a]),P=(0,n.useCallback)((e=>{(0,f.ZP)({event:e,context:f.Af.CollectionSettingsClick,callback:()=>{const e=t.settingsStore,o=e.state.open,n=(0,w.n)(e);o&&"main"===(null==n?void 0:n.type)?d.E3({collectionSettingsStore:e}):d.r$({collectionContextStore:t,collectionSettingsStore:e})}}),u.wd({environment:a,collectionContextStore:t,action:"click_topbar_view_settings"}),M()}),[t,a,M]),B=(0,s.yK)((e=>({iconStyle:{width:void 0,height:3,fill:e.mediumTextColor}})),[]);if("page"===m||!K.canEditContent&&"collectionTypedView"!==L)return null;const E=(0,V.jsx)(x.Z,{ariaLabel:C.default.formatMessage(h.tooltipLabel),className:g.xvU,icon:r.o,style:e.style,iconStyle:B.iconStyle,hovered:_&&j,onClick:P});return o?E:(0,V.jsx)(b.ZP,{renderTooltip:()=>C.default.formatMessage(h.tooltipLabel),render:e=>(0,V.jsx)("div",{...e,children:E})})}}}]);