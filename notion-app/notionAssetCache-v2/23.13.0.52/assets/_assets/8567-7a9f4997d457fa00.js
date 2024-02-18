"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8567],{10912:(e,t,r)=>{r.d(t,{Z:()=>k});r(57658),r(67294);var o=r(83355),i=r(27531),n=r(86628),s=r(24405),a=r(41432),l=r(80951),d=r(95538),c=r(21202),p=r(97880),u=r(12457),h=r(78316),m=r(17311),g=r(35328),v=r(26136),y=r(40971),f=r(12981),x=r(43568),S=r(81865),j=r(35541),b=r(85893);function C(e){return"number"==typeof e}class w extends o.Z{constructor(){super(...arguments),this.renderContentBlock=e=>{const{store:t,renderAdditionalBlocks:r,rendererBlockStyle:o}=this.props,n=v.G.createChildStore(t,{table:c.iU,id:e}),s=n.getType(),a=r&&void 0!==s?(0,j.u)(n):(0,y.h)(n);if(a)return(0,b.jsx)(i.D,{value:this.restrictedContentStore,children:(0,b.jsx)(a,{store:n,disabled:!0,disableCommentMenu:!0,disableHoverMenu:!0,hideContent:(0,g.BX)(n),style:{fontSize:12,opacity:.8,pointerEvents:"none",...o},isQuickFind:!0,numberedListCounterStore:this.createComputedStore((()=>({depth:0,numberedListBlockIdsWithFormat:this.createNumberedListCounterStore(e)})))})},e)},this.coverStore=this.createComputedStore((()=>{const{store:e,renderAdditionalBlocks:t=!1}=this.props,{ThemeStore:r}=this.environment,o=(0,h.NU)({rootStore:e,renderAdditionalBlocks:t,theme:r.state.mode});return o.image?o.image:!(this.props.showLoadingShimmer&&0===o.blockIds.length&&!o.isDefined)&&o.blockIds})),this.restrictedContentStore=this.createComputedStore((()=>{const{store:e,renderAdditionalBlocks:t=!1}=this.props,r=(0,h.wK)(e,t);return r.image?void 0:r.blockIds})),this.numberedLists=this.createComputedStore((()=>{const{store:e}=this.props,t=this.coverStore.state,r=[];if(Array.isArray(t)){let o=0;for(;o<t.length;){let i=t[o],n=v.G.createChildStore(e,{table:c.iU,id:i});if(n.getType()===a.Ti.numberedList){const s=[{blockId:i,idx:1}],l=[{id:i,format:void 0,depth:s.length-1,index:s[0].idx}];for(o+=1;o<t.length&&(i=t[o],n=v.G.createChildStore(e,{table:c.iU,id:i}),n.getType()===a.Ti.numberedList);){{const e=n.getParentId();if(n.getParentId()===s[s.length-1].blockId)s.push({blockId:i,idx:1});else{let t=s[s.length-1].idx;for(;s.length>0&&s[s.length-1].blockId!==e;)t=s[s.length-1].idx,s.pop();s.push({blockId:i,idx:t+1})}l.push({id:i,format:void 0,depth:s.length-1,index:s[s.length-1].idx})}o+=1}r.push(l)}else o+=1}}return r}))}didUpdate(e){this.props.coverFormat.type!==e.coverFormat.type&&this.props.onLoadProxiedImage()}renderComponent(){const{coverFormat:e}=this.props;return"page_cover"===e.type?(0,b.jsx)(M,{store:this.props.store,coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,imageCoverWrapStyle:this.props.imageCoverWrapStyle,coverWidth:this.props.coverWidth,onLoadProxiedImage:this.props.onLoadProxiedImage,style:this.props.style,variant:this.props.variant,coverAspectFormat:this.props.coverAspectFormat,coverPosition:this.props.coverPosition,showEmptyGalleryCover:this.props.showEmptyGalleryCover,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle}):"page_content"===e.type?this.renderPageContent():"property"===e.type?(0,b.jsx)(O,{store:this.props.store,coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,imageCoverWrapStyle:this.props.imageCoverWrapStyle,onLoadProxiedImage:this.props.onLoadProxiedImage,coverWidth:this.props.coverWidth,style:this.props.style,variant:this.props.variant,coverAspectFormat:this.props.coverAspectFormat,coverPosition:this.props.coverPosition,showEmptyGalleryCover:this.props.showEmptyGalleryCover,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle,property:e.property}):void 0}renderPageContent(){const e=this.coverStore.state,t=this.restrictedContentStore.state,r=this.props.renderAdditionalBlocks&&this.props.store.isCollectionView();if(!1===e)return(0,b.jsx)(R,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,loadingShimmerStyle:this.props.loadingShimmerStyle});if(e){if(!Array.isArray(e))return r?(0,b.jsxs)("div",{style:L(this.props.variant,this.environment,this.theme,this.props.coverHeight,this.props.coverSizeFormat,this.props.coverContentFadedOverlay,this.props.contentWrapStyle),children:[(0,b.jsx)(S.Z,{url:e.url,onFinishedLoadingProxyUrl:e=>this.props.onLoadProxiedImage(e),isAuthenticated:!0,permissionRecord:e.pointer,width:F(),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...P(),...V({renderCollectionImage:!0},this.props.variant,this.theme,this.props.coverHeight,this.props.coverSizeFormat),...Z(),objectPosition:`center ${100*(1-I(this.props.store,this.props.coverPosition))}%`},placeholderLoadedStyle:{display:"flex",justifyContent:"center",alignItems:"end"},src:t})}}),(0,b.jsx)(K,{variant:this.props.variant}),(0,b.jsx)("div",{style:U(this.theme,this.props.coverContentFadedOverlayStyle)})]}):(0,b.jsxs)("div",{style:T(this.props.coverHeight,this.props.coverSizeFormat,this.props.imageCoverWrapStyle),children:[(0,b.jsx)(S.Z,{url:e.url,onFinishedLoadingProxyUrl:e=>this.props.onLoadProxiedImage(e),isAuthenticated:!0,permissionRecord:e.pointer,width:F(this.props.coverWidth,this.props.coverSizeFormat),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...P(this.props.style),...V({renderCollectionImage:!1},this.props.variant,this.theme,this.props.coverHeight,this.props.coverSizeFormat),...Z(this.props.coverAspectFormat),objectPosition:`center ${100*(1-I(this.props.store,this.props.coverPosition))}%`},src:t,loading:"lazy"})}}),(0,b.jsx)(K,{variant:this.props.variant})]});if(e.length>0)return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{style:L(this.props.variant,this.environment,this.theme,this.props.coverHeight,this.props.coverSizeFormat,this.props.coverContentFadedOverlay,this.props.contentWrapStyle),children:[t?e.filter((e=>t.indexOf(e)>=0)).map(this.renderContentBlock):e.map(this.renderContentBlock),this.props.coverContentFadedOverlay&&(0,b.jsx)("div",{style:U(this.theme,this.props.coverContentFadedOverlayStyle)})]})});if(this.props.showEmptyGalleryCover)return(0,b.jsx)(z,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle})}else if(this.props.showEmptyGalleryCover)return(0,b.jsx)(z,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle})}createNumberedListCounterStore(e){const t=this.numberedLists.state;for(const r of t)if(r.find((t=>t.id===e)))return r;return[]}}w.displayName="CollectionItemCover";const k=w;function I(e,t){if(C(t))return t;if(e.getFormatStore().isDefined()){const{page_cover_position:t,card_cover_position:r}=e.getFormat();if(C(r))return r;if(C(t))return t}return.5}function P(e){return e||{}}function _(e,t){if(e)return e;switch(t){case"large":return m.Z.card.desktop.large.height;case"small":return m.Z.card.desktop.small.height;case"medium":default:return m.Z.card.desktop.medium.height}}function F(e,t){return e||(0,h.rD)(t)}function Z(e){return{objectFit:void 0===e?"cover":e}}function T(e,t,r){return{height:_(e,t),position:"relative",pointerEvents:"none",overflow:"hidden",...r}}function z(e){let{coverHeight:t,coverSizeFormat:r,emptyGalleryCoverStyle:o}=e;return(0,b.jsx)("div",{style:{height:_(t,r),...o}})}function R(e){let{coverHeight:t,coverSizeFormat:r,loadingShimmerStyle:o}=e;return(0,b.jsx)("div",{style:{height:_(t,r),...o},children:(0,b.jsx)(u.Z,{show:!0,showDelay:100,showHold:0,render:e=>e?(0,b.jsx)(x.Z,{paragraphs:[{lineHeight:12,lineMargin:6,sectionWidths:[100,100,50],repeat:1,sectionMargin:0}]}):void 0})})}function H(e,t,r,o){const{ThemeStore:i}=t,n="dark"===i.state.mode;switch(e){case"default":return{};case"gallery":return{background:r.collectionGalleryPreviewCardCover,padding:"8px 8px 0",boxShadow:n?"transparent":`inset 0 -1px 0 0 ${r.regularDividerColor}`,...o};default:(0,p.t1)(e)}}function U(e,t){return{width:"100%",height:40,position:"absolute",bottom:0,left:0,background:`linear-gradient(to bottom, transparent, ${e.accentColors.gray[30]} 100%)`,...t}}function B(e,t){switch(e){case"default":return{border:`1px solid ${t.stroke.regular}`,borderTopLeftRadius:4,borderTopRightRadius:4,borderBottomRightRadius:4,borderBottomLeftRadius:4};case"gallery":return{borderRadius:0,borderTopLeftRadius:1,borderTopRightRadius:1};default:(0,p.t1)(e)}}function K(e){let{variant:t}=e;window.__c={n:"ImageBorderComponent"};const r=(0,s.Fg)();switch(t){case"default":return null;case"gallery":return(0,b.jsx)("div",{style:{position:"absolute",left:0,right:0,bottom:0,borderBottom:`1px solid ${r.regularDividerColor}`}});default:(0,p.t1)(t)}return null}function L(e,t,r,o,i,n,s){return{height:_(o,i),pointerEvents:"none",overflow:"hidden",position:n?"relative":"static",...H(e,t,r,s),...s}}function W(e,t,r,o){return{width:"100%",height:_(r,o),...B(e,t),objectPosition:"center"}}function M(e){let{store:t,coverHeight:r,coverSizeFormat:o,imageCoverWrapStyle:i,coverWidth:a,onLoadProxiedImage:l,style:d,variant:c,coverAspectFormat:p,coverPosition:u,showEmptyGalleryCover:h,emptyGalleryCoverStyle:m}=e;window.__c={n:"PageCoverComponent"};const g=(0,s.Fg)(),v=(0,n.VK)((()=>{var e;return null===(e=t.getCover())||void 0===e?void 0:e.cover}),[t]),y=(0,n.VK)((()=>t.pointer),[t]),x=(0,n.VK)((()=>I(t,u)),[u,t]);return v?(0,b.jsxs)("div",{style:T(r,o,i),children:[(0,b.jsx)(S.Z,{url:v,isAuthenticated:!0,permissionRecord:y,width:F(a,o),onFinishedLoadingProxyUrl:e=>l(e),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...P(d),...W(c,g,r,o),...Z(p),objectPosition:`center ${100*(1-x)}%`},src:t,loading:"lazy"})}}),(0,b.jsx)(K,{variant:c})]}):h?(0,b.jsx)(z,{coverHeight:r,coverSizeFormat:o,emptyGalleryCoverStyle:m}):null}function O(e){let{property:t,store:r,coverHeight:o,coverSizeFormat:i,imageCoverWrapStyle:a,onLoadProxiedImage:c,coverWidth:p,style:u,variant:h,coverAspectFormat:m,coverPosition:g,showEmptyGalleryCover:v,emptyGalleryCoverStyle:y}=e;window.__c={n:"PropertyComponent"};const x=(0,s.Fg)(),j=(0,n.VK)((()=>(0,l.g)(r.getPropertyValue(t)).find((e=>(0,d.SR)({url:e.url})))),[t,r]),C=(0,n.VK)((()=>r.pointer),[r]),w=(0,n.VK)((()=>I(r,g)),[g,r]);return j?(0,b.jsxs)("div",{style:T(o,i,a),children:[(0,b.jsx)(S.Z,{onFinishedLoadingProxyUrl:e=>c(e),url:j.url,isAuthenticated:!0,permissionRecord:C,width:F(p,i),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...P(u),...W(h,x,o,i),...Z(m),objectPosition:`center ${100*(1-w)}%`},src:t,loading:"lazy"})}}),(0,b.jsx)(K,{variant:h})]}):v?(0,b.jsx)(z,{coverHeight:o,coverSizeFormat:i,emptyGalleryCoverStyle:y}):null}function V(e,t,r,o,i){const{renderCollectionImage:n}=e;return{...W(t,r,o,i),objectPosition:"center center",...n&&{height:void 0,border:`1px solid ${r.lightDividerColor}`,borderBottom:"none",borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},98567:(e,t,r)=>{r.d(t,{D5:()=>Ie,E5:()=>Ze,s6:()=>Se,Tq:()=>Fe});var o=r(67294),i=r(1302),n=r(480),s=r(86628),a=r(24405),l=r(15145),d=r(1800),c=r(7057),p=r(78601),u=r(66673),h=r(69651),m=r(75553),g=r(56666),v=r(40462),y=r(64572),f=r(76725),x=r(72126),S=r(4615),j=r(99405),b=r(21202),C=r(70279),w=r(70203),k=r(44805),I=r(82990),P=r(44876),_=r(9291),F=r(50906),Z=r(893),T=r(45990),z=r(993),R=r(32741),H=r(30583),U=r(95477),B=r(60682),K=r(24990),L=r(49616),W=r(4708),M=r(73744),O=r(41232),V=r(6398),E=r(88804),A=r(75024),G=r(4023),D=r(15723),q=r(80444),N=r(77080),$=r(96049),Y=r(42653),J=r(72014),X=r(26136),Q=r(48588),ee=r(10912),te=r(18746),re=r(64921),oe=r(31945),ie=r(51077),ne=r(73063),se=r(12981),ae=r(53437),le=r(31278),de=r(76798),ce=r(94096),pe=r(19987),ue=r(69255),he=r(25735),me=r(19889),ge=r(12740),ve=r(85893);function ye(e){window.__c={n:"HoverUserPreviewOverlayRenderer"};const t=(0,s.VK)((()=>q.default.state.currentSpaceStore),[]),r=(0,s.VK)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.annotation}),[e.state]),o=(0,u.Rm)(r,void 0,600,Object.is),i=(0,s.VK)((()=>{if(t&&o)return X.U6.createChildStore(t,{id:o[1],table:me.KJ})}),[t,o]),n=(0,s.VK)((()=>!!i&&i.isDefined()),[i]);return i&&n&&t?(0,ve.jsx)(ge.Z,{targetUserStore:i}):null}var fe=r(29551),xe=r(65496);function Se(e){window.__c={n:"HoverPreviewOverlay"};const t=(0,n.O7)(),r=(0,s.Kw)($.Z,{debugName:"HoverPreviewOverlay"}),{state:i,pinPopup:a,unpinPopup:l,hasBeenHovering:d,isPinned:c,dismissPopup:p}=function(){const[e,t]=(0,o.useState)(!1),[r]=(0,s.AF)(Q.Z),i=(0,u.Kt)(r,400,Object.is),[n,a]=(0,o.useState)(void 0),l=n||(e?void 0:i),d=(0,o.useCallback)((()=>a(l)),[l]),c=(0,o.useCallback)((()=>{a(void 0)}),[]),p=(0,o.useCallback)((()=>{c(),t(!0)}),[c]);return(0,o.useEffect)((()=>{t(!1)}),[i]),{state:l,pinPopup:d,unpinPopup:c,hasBeenHovering:r&&r===l,isPinned:Boolean(n),dismissPopup:p}}(),h=(0,s.VK)((()=>N.default.checkGate("first_party_links")),[]),m=(0,s.VK)((()=>(0,W.En)()),[]),g=function(e){const t=(0,n.O7)();return(0,s.VK)((()=>!!e&&(0,E.E)(t,e.store)),[e,t])}(i),v=(0,o.useMemo)((()=>Boolean(i&&function(e,t){return e.annotations.some(w.j0F)||t&&e.annotations.some(w.nSN)}(i,g))),[i,g]),y=(0,o.useMemo)((()=>i&&i.token.node.getBoundingClientRect()),[i]),f=y&&0===y.width&&0===y.height&&0===y.left&&0===y.top,S=v?!f:Boolean(!r&&d&&!f),[,j]=(0,s.AF)(Y.Z);(0,o.useEffect)((()=>(j({isPinned:c}),()=>j({isPinned:!1}))),[c,j]);const b=!(null!=i&&i.annotations.some(w.nSN))&&h&&!(null!=i&&i.annotations.some(w.STW)),C=(m&&(null==i?void 0:i.annotations.some(w.IWo)))??!1,k=(0,s.VK)((()=>t.RouterStore.state),[t.RouterStore]);return(0,o.useEffect)((()=>{p()}),[k,p]),(0,o.useEffect)((()=>{const e=x.P2((()=>{R.lY(),p()}),200,{leading:!0});return M.lj(window,"scroll",e,!0),()=>M.ZV(window,"scroll",e,!0)}),[p]),(0,ve.jsx)(ae.ZP,{disableMouseCapture:!0,preventCaptureEsc:!0,preventPointerEvents:!v,preventScaleTransition:!0,preventOpacityTransition:!0,popupType:ae.ZP.PopupType.Popup,open:S,originRect:y,originGap:6,alignmentToOrigin:C?ae.ZP.Alignment.End:ae.ZP.Alignment.Start,placementToOrigin:C?ae.ZP.Placement.Top:ae.ZP.Placement.Bottom,useLightBoxShadow:b,render:()=>i&&(0,ve.jsx)("div",{onMouseEnter:a,onMouseLeave:l,children:(0,ve.jsx)(je,{state:i,isHoveredTokenEditable:g,onDismiss:l})})})}function je(e){window.__c={n:"HoverPreviewOverlayRenderer"};const t=(0,s.VK)((()=>N.default.checkGate("first_party_links")),[]),r=(0,s.VK)((()=>(0,W.En)()),[]),o=(0,n.Fy)(),i=(0,s.VK)((()=>{const{currentSpaceStore:e}=q.default.state;return e?e.getPermissionGroups():[]}),[]),l=(0,a.yK)((e=>({noMembersInGroupStyle:{fontSize:I.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"}})),[]),d=e.state.annotations,c=d.find(w.j0F),p=d.find(w.fpG),u=d.find(w._bk),h=d.find(w.aq),m=w.frE(d),g=t?d.find(w.STW):void 0,v=r?d.find(w.IWo):void 0;if(c&&e.state.store.table!==C.x_)return(0,ve.jsx)(be,{...e,state:{...e.state,annotation:c}});if(p)return(0,ve.jsx)(Ce,{...e,state:{...e.state,annotation:p}});if(u){const e=w.kxk(u);if(e){const t=e.groupId,r=i.find((e=>e.id===t));if(r)return(0,ve.jsx)(he.Y,{group:r,limit:10,color:"white_background",trackHover:!0,noMembersMessage:(0,ve.jsx)(fe.gq,{style:l.noMembersInGroupStyle,children:(0,ve.jsx)("div",{style:I.Z.textOverflowStyle,children:(0,ve.jsx)(_.FormattedMessage,{id:"groupPreview.noUsers",defaultMessage:"No users in this group"})})})})}}return h?(0,ve.jsx)(we,{...e,state:{...e.state,annotation:h}}):m&&!o.isMobile?(0,ve.jsx)(Ie,{...e,state:{...e.state,annotation:m},onDismiss:e.onDismiss}):t&&g&&!o.isMobile?(0,ve.jsx)(_e,{...e,state:{...e.state,annotation:g},onDismiss:e.onDismiss}):v&&!o.isMobile?(0,ve.jsx)(ye,{...e,state:{...e.state,annotation:v},onDismiss:e.onDismiss}):null}function be(e){window.__c={n:"HoverLinkPreviewOverlayRenderer"};const{onDismiss:t}=e,{annotation:r,store:c,token:p}=e.state,u=(0,n.O7)(),h=(0,a.Fg)(),g=w.zW$(r),f=(0,y.A5)({url:g,baseUrl:U.default.domainBaseUrl,publicDomainName:U.default.publicDomainName}),x=(0,o.useCallback)((async()=>{t(),z.AE({token:p,store:c,readOnly:!1}),await i.default.afterNextFlush(),T.dz({type:"focusOnly",focus:!0})}),[t,c,p]),S=(0,o.useCallback)((async()=>{t(),await i.default.afterNextFlush();const e=Z.tq.copiedLinkToClipboard;let r=g;const o=(0,j.Wj)({url:g,baseUrl:U.default.domainBaseUrl,publicDomainName:U.default.publicDomainName,isMobile:u.device.isMobile,protocol:U.default.protocol,currentUrl:window.location.href});if("page"===o.name){const e=X.G.createChildStore(c,{table:b.iU,id:o.blockId});r=(0,d.Z)({pageId:o.blockId,pageModel:e.getModel(),baseUrl:U.default.domainBaseUrl,discussionId:o.discussionId,scrollToBlockId:o.scrollToBlockId,peekViewBlockId:o.peekViewBlockId,peekMode:o.peekMode,pageVisitSource:l.tY.CopyLink})}Z.RD({environment:u,stringValue:r,copiedMessage:e})}),[u,t,c,g]),C=(0,a.yK)((e=>({wrapper:{fontSize:I.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,fontWeight:I.Z.fontWeight.regular,fill:e.mediumIconColor},destination:{padding:"4px 0 4px 6px"},button:{display:"flex",alignItems:"center",padding:"2px 6px",whiteSpace:"nowrap",marginRight:2,borderRadius:4,color:e.regularTextColor},destinationText:{paddingRight:6,maxWidth:250,...I.Z.textOverflowStyle},icon:{height:"1em",width:"1em",marginRight:"0.25em",fill:e.mediumIconColor}})),[]),P=(0,_.useIntl)(),F=(0,_.defineMessages)({copyLink:{defaultMessage:"Copy link",id:"hoverPreviewOverlay.copyLink"}}),R=(0,s.VK)((()=>{if(!f)return;const e=X.G.createChildStore(c,{table:b.iU,id:f});return{pageIcon:(0,k.tp)({pageModel:e.getModel(),pageRole:e.getRole(),baseUrl:U.default.domainBaseUrl,getRecordModel:c.getRecordModel,emojiType:(0,B.e_)(u),isSafariOrIOS:u.device.isSafari||u.device.isIOS,isClient:!0,showEmojiInline:u.device.isWindows,currentUserId:u.currentUser.id,theme:h,emojiData:K.Z.state}),title:(0,ve.jsx)(de.Z,{style:C.destinationText,store:e})}}),[u,c,f,C,h])||{pageIcon:(0,v.o)(C.icon),title:(0,ve.jsx)("div",{style:C.destinationText,children:g})};return(0,ve.jsxs)(fe.gq,{style:C.wrapper,alignItems:"center",children:[(0,ve.jsxs)(fe.gq,{style:C.destination,alignItems:"center",children:[R.pageIcon,R.title]}),(0,ve.jsx)(ne.Z,{onClick:S,icon:m.U,isDarkIconColor:!0,ariaLabel:P.formatMessage(F.copyLink)}),e.isHoveredTokenEditable&&(0,ve.jsx)(re.Z,{style:C.button,onClick:x,children:(0,ve.jsx)(_.FormattedMessage,{defaultMessage:"Edit",id:"hoverPreviewOverlay.editButton.label"})})]})}function Ce(e){window.__c={n:"HoverDatePreviewOverlayRenderer"};const{annotation:t}=e.state,r=w.zyO(t),o=(0,a.yK)((e=>({container:{fontSize:I.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"},icon:{height:"1em",width:"1em",marginRight:"0.25em",fill:e.mediumIconColor}})),[]),i=(0,_.useIntl)(),n="relative"===r.date_format?"ll":"relative",s=(0,c.ZV)({value:r,date_format:n,time_format:"h:mm A",allowRelativeDates:!0,intl:i});return s===(0,c.ZV)({value:r,date_format:r.date_format,time_format:r.time_format,allowRelativeDates:!0,intl:i})?null:(0,ve.jsxs)(fe.gq,{style:o.container,alignItems:"center",children:[(0,h.C)(o.icon),(0,ve.jsx)("div",{style:I.Z.textOverflowStyle,children:s})]})}function we(e){window.__c={n:"HoverTemplateVariablePreviewOverlayRenderer"};const{annotation:t}=e.state,r=w.fsE(t),o=(0,_.useIntl)(),i=w.Z08(r.type,o),n=(0,a.yK)((e=>({container:{fontSize:I.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"}})),[]);return(0,ve.jsx)(fe.gq,{style:n.container,alignItems:"center",children:(0,ve.jsx)("div",{style:I.Z.textOverflowStyle,children:i})})}function ke(e){var t;window.__c={n:"ExternalObjectInstancePreviewContent"};const{renderConfig:r,store:o}=e,i=(0,a.yK)((e=>({title:{color:e.regularTextColor,fontWeight:I.Z.fontWeight.semibold,whiteSpace:"initial",fontSize:13,padding:"4px 0",width:"100%"},header:{color:e.mediumTextColor,fontSize:I.Z.fontSize.UISmall.desktop},dictionaryKey:{color:e.lightTextColor,fontWeight:I.Z.fontWeight.regular,fontSize:I.Z.fontSize.UISmall.desktop},dictionaryValue:{color:e.mediumTextColor,fontSize:I.Z.fontSize.UISmall.desktop,whiteSpace:"normal",wordBreak:"break-word"}})),[]);return(0,ve.jsxs)(ve.Fragment,{children:[r.title&&(0,ve.jsx)(fe.gq,{children:(0,ve.jsx)(V.ox,{...r.title,store:o,style:i.title})}),r.headerAttributes&&r.headerAttributes.length>0&&(0,ve.jsx)(fe.gq,{alignItems:"center",style:{...i.header,marginBottom:8},children:(0,f.Z)(r.headerAttributes.map(((e,t)=>(0,ve.jsx)(V.ox,{...e,store:o,style:{...i.header,...I.Z.textOverflowStyle}},`attribute-${t}`)))||[],(e=>(0,ve.jsxs)("span",{children:[" ","·"," "]},`dot-${e}`)))}),r.dictionaryAttributes&&r.dictionaryAttributes.length>0&&(0,ve.jsx)(fe.Ht,{children:r.dictionaryAttributes.map(((e,t)=>{var n;let{key:s,value:a}=e;return(0,ve.jsxs)(fe.gq,{style:{marginBottom:t!==((null===(n=r.dictionaryAttributes)||void 0===n?void 0:n.length)??0)-1?4:8},children:[(0,ve.jsx)("div",{style:{marginRight:8,width:"30%",display:"flex",alignItems:"center"},children:(0,ve.jsx)("span",{style:i.dictionaryKey,children:(0,ve.jsx)(_.FormattedMessage,{...s.formatter,values:{value:a.attribute.name}})})}),(0,ve.jsxs)("div",{style:{width:"70%",display:"flex",alignItems:"center"},children:[a.icon&&(0,P.li)(a.icon)&&(0,ve.jsx)(ie.Z,{type:"image_url",imageURL:a.icon.values[0],size:16,style:{marginRight:6}}),(0,ve.jsx)(V.ox,{...a,store:o,style:i.dictionaryValue,avatarStyle:{marginRight:6}})]})]},t)}))}),r.bodyAttribute&&(0,ve.jsx)(fe.gq,{style:((null===(t=r.dictionaryAttributes)||void 0===t?void 0:t.length)??0)>0?{marginTop:3}:{},children:(0,ve.jsx)(V.hx,{attribute:r.bodyAttribute})}),r.previewImageAttribute&&(0,ve.jsx)("div",{style:{marginTop:r.dictionaryAttributes?6:0,marginBottom:4,display:"flex",justifyContent:"center"},children:(0,ve.jsx)("div",{children:(0,ve.jsx)(se.Z,{src:r.previewImageAttribute.values[0],style:{width:"100%",maxHeight:200}})})})]})}function Ie(e){window.__c={n:"HoverExternalObjectInstanceOverlayRenderer"};const{state:{annotation:t,store:r,token:i},onDismiss:l}=e,d=w.frW(t),c=(0,n.O7)(),u=(0,a.Fg)(),h=(0,o.useRef)(null),m=(0,s.VK)((()=>{const t=X.G.createChildStore(r,{table:b.iU,id:d,spaceId:r.pointer.spaceId}),o=t.canEdit(),n=(0,O._F)({store:t,isInDarkMode:"dark"===u.mode,canEdit:o,currentUserId:c.currentUser.id,getRenderFn:e=>t=>{var r,o;return(null===(r=e.hover)||void 0===r?void 0:r.call(e,t))||(null===(o=p.j.hover)||void 0===o?void 0:o.call(p.j,t))},showAction:void 0});if(!n)return;const{renderConfig:s,integration:a}=n,m=Boolean(n.action),v=e.isHoveredTokenEditable,y=r.recordStoreUIParentStore&&r.recordStoreUIParentStore instanceof X.G?r.recordStoreUIParentStore:void 0;return(0,ve.jsxs)("div",{style:{display:"flex",flexDirection:"column"},ref:h,children:[(0,ve.jsxs)(fe.gq,{alignItems:"center",style:{fontSize:12},children:[(0,ve.jsx)(ie.Z,{type:"image_url",imageURL:a.icon,size:16,style:{margin:4}}),(0,ve.jsx)("div",{style:{flexGrow:1,fontWeight:I.Z.fontWeight.medium},children:a.name}),i&&!m&&v&&(0,ve.jsx)("div",{children:(0,ve.jsx)(oe.ZP,{popupType:oe.Z4.Popup,placementToOrigin:G.u.Right,alignmentToOrigin:G.v.Start,originGap:4,onClose:()=>{let e=!1;const t=h.current;t&&(e=(0,D.uh)(t.getBoundingClientRect(),H.IL.x,H.IL.y)),e||null==l||l()},renderOrigin:e=>(0,ve.jsx)(re.Z,{style:{display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:4,fill:u.lightIconColor},...e,children:(0,g.o)({width:14})}),render:e=>(0,ve.jsx)(ue.default,{titleForReloadMenuOption:(0,ve.jsx)(_.FormattedMessage,{id:"linkMention.reload",defaultMessage:"Reload mention"}),parentBlockStore:y,store:t,token:i,onAccept:()=>e.close(),extraSecondaryItemKey:"mention_to_preview"})})})]}),m&&v?(0,ve.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"6px 0"},children:(0,ve.jsx)(pe.Z,{canEdit:o,store:t,isHoverPreview:!0,postActionCallback:l})}):(0,ve.jsx)(ke,{renderConfig:s,store:t})]})}),[d,r,c,u,i,l,e.isHoveredTokenEditable,h]);return m?(0,ve.jsx)("div",{style:{padding:"12px 16px",minWidth:260,maxWidth:320},children:m}):null}function Pe(e){window.__c={n:"HoverPagePreviewContent"};const t=(0,n.O7)(),{store:r}=e,i=(0,s.VK)((()=>L.TP(r)),[r]),l=(0,a.yK)((e=>({icon:{height:16,width:16,fill:e.icon.purple,marginRight:2},title:{fontSize:12,color:e.icon.purple},summary:{...(0,A.pd)(4),fontSize:12,lineHeight:1.35,color:e.text.secondary,marginBottom:12},contentCover:{color:e.text.primary,fontSize:11,lineHeight:1.5,marginBottom:0,width:"110%",transform:"translateX(-13px) translateY(-2px) scale(0.91)"},contentCoverEmpty:{height:16},imageCoverWrap:{marginBottom:16},contentCoverFade:{height:48,background:`linear-gradient(to bottom, transparent, ${e.surface.elevated} 100%)`},loadingShimmer:{marginBottom:0},rendererBlockStyle:{fontSize:9}})),[]),d=i&&w.Vkf(i)>=20,c=(0,o.useMemo)((()=>(0,S.ZP)()),[]);return(0,o.useEffect)((()=>{const e=J.$g.getCurrentPageVisitId();return F.piO(t,{hover_session_id:c,mentioned_page_id:r.pointer.id,hover_content_type:d?"ai_summary":"content_preview",page_visit_id:e}),()=>{F.Yo0(t,{hover_session_id:c,hover_content_type:d?"ai_summary":"content_preview",mentioned_page_id:r.pointer.id,page_visit_id:e})}}),[t,c,d,r.pointer.id]),d?(0,ve.jsx)("div",{children:(0,ve.jsx)("div",{style:l.summary,children:(0,ve.jsx)(te.A,{textValue:i,parentStore:r})})}):(0,ve.jsx)(ee.Z,{variant:"default",store:r,coverFormat:{type:"page_content"},coverContentFadedOverlay:!0,coverContentFadedOverlayStyle:l.contentCoverFade,coverHeight:86,contentWrapStyle:l.contentCover,imageCoverWrapStyle:l.imageCoverWrap,emptyGalleryCoverStyle:l.contentCoverEmpty,loadingShimmerStyle:l.loadingShimmer,showLoadingShimmer:!0,showEmptyGalleryCover:!0,onLoadProxiedImage:()=>{},rendererBlockStyle:l.rendererBlockStyle})}function _e(e){window.__c={n:"HoverPagePreviewOverlayRenderer"};const t=(0,s.VK)((()=>{const t=q.default.state.currentSpaceStore;if(!t)return;const r=X.G.createChildStore(t,{id:e.state.annotation[1],table:"block"});return r.isNavigableBlock()&&r.isDefined()?r:void 0}),[e.state.annotation]);return(0,ve.jsx)(Ze,{store:t})}const Fe=260;function Ze(e){let{store:t,events:r}=e;window.__c={n:"HoverPagePreview"};const o=(0,a.yK)((e=>({wrapper:{width:Fe},coverContainer:{height:36},content:{padding:"0 16px"},breadcrumb:{color:e.text.tertiary,fontSize:11,marginBottom:-2},pageTitle:{display:"inline",fontWeight:I.Z.fontWeight.semibold,color:e.text.primary,fontSize:13,lineHeight:1.15},pageTitleIcon:{position:"relative",marginLeft:16,marginTop:-15,marginBottom:8},pageTitleContainer:{...(0,A.pd)(2),verticalAlign:"top",lineHeight:1.15},description:{fontSize:I.Z.fontSize.UISmall.desktop,color:e.icon.primary,lineHeight:1.2},empty:{height:16}})),[]),[i,n,l]=(0,s.VK)((()=>{if(!t)return[void 0,!1,null,null];const e=t.isEmptyPage(),r=e?(0,ve.jsx)("div",{style:{height:24}}):(0,ve.jsx)(Pe,{store:t});return[t.getIcon(),e,r]}),[t]);return t?(0,ve.jsxs)("div",{style:o.wrapper,...r,children:[(0,ve.jsx)("div",{style:o.coverContainer,children:(0,ve.jsx)(xe.Z,{store:t,disabled:!0,paddingLeft:0,paddingRight:0,height:36,proxyWidth:260})}),(0,ve.jsx)(le.Z,{disabled:!0,icon:i,isEmptyPage:n,isLarge:!0,disableShrinking:!0,size:26,emojiSize:26,largeIcon:!0,style:o.pageTitleIcon}),(0,ve.jsxs)(fe.Ht,{gap:4,style:o.content,children:[(0,ve.jsxs)(fe.Ht,{gap:2,children:[(0,ve.jsx)(ce.Z,{store:t,style:o.breadcrumb}),(0,ve.jsx)("div",{style:o.pageTitleContainer,children:(0,ve.jsx)(de.Z,{shouldWrap:!0,maxLines:2,store:t,style:o.pageTitle})})]}),l]})]}):null}},12740:(e,t,r)=>{r.d(t,{Z:()=>U});r(57658);var o=r(67294),i=r(480),n=r(86628),s=r(24405),a=r(6695),l=r(72126),d=r(4615),c=r(21202),p=r(19889),u=r(82990),h=r(9291),m=(r(95477),r(66890)),g=r(80444),v=r(77556),y=r(88632),f=r(77080),x=r(19671),S=r(26136),j=r(76117),b=r(88893),C=r(88280),w=r(97039),k=r(78030),I=r(45653),P=r(29551),_=r(99036),F=(r(51365),r(33929)),Z=(r(61766),r(13023),r(24118)),T=(r(53876),r(12867),r(85893));Z.Ae;function z(e){return(0,n.VK)((()=>{if(!e)return{collectionStore:void 0,schema:void 0,format:void 0};const t=e.getAssociatedCollectionStore();let r,o;return r=t?t.getSchema():_.Kc(F.default.getIntl()),t&&(o=a.iB(t.getFormat(),r,void 0,a.j5.Collection)),{collectionStore:t,schema:r,format:o}}),[e])}const R=["Title","Pronoun","Teams (via Teams DB)","Office","Manager","Languages (Fluency)","Tenure"],H={"Teams (via Teams DB)":"Teams","Languages (Fluency)":"Languages"};function U(e){let{targetUserStore:t}=e;window.__c={n:"PeopleProfilePopup"};const r=(0,s.yK)((e=>({wrapper:{minWidth:100,maxWidth:300},profile:{padding:"10px 12px 12px 10px"},content:{padding:"8px 10px 10px"},breadcrumb:{color:e.text.secondary},profileTitle:{paddingLeft:20,fontSize:18,lineHeight:1.25,fontWeight:u.Z.fontWeight.semibold,color:e.text.primary},profileSubtitle:{paddingLeft:20,paddingTop:2,fontSize:u.Z.fontSize.UISmall.desktop,color:e.icon.primary,paddingBottom:1},profileKeyRow:{minWidth:80},profileKeyText:{textTransform:"capitalize",fontWeight:500},description:{padding:"6px 8px 12px 20px",fontSize:u.Z.fontSize.UISmall.desktop,color:e.icon.primary,borderTop:`1px solid ${e.regularDividerColor}`}})),[]),l=(0,n.VK)((()=>g.default.state.currentSpaceStore),[]),p=(0,n.VK)((()=>g.default.state.currentUserStore),[]),h=(0,n.VK)((()=>!!t&&t.isDefined()),[t]),y=(0,n.VK)((()=>{if(!t)return;const e=t.getEmail();if(!e)return;const r=f.default.getConfigKey("notion_people_block_id","data")[e];if(!r)return;return S.G.createChildStore(t,{table:c.iU,id:(0,d.Mt)(r)})}),[t]),{collectionStore:j,schema:b,format:C}=z(y),I=function(e){let{collectionStore:t,format:r,schema:o,userPeopleCollectionPage:i}=e;return(0,n.VK)((()=>{var e;if(!(t&&r&&o&&i))return;const n=a.iB(r,o,void 0,a.j5.Collection),s=null==n||null===(e=n.collection_page_properties)||void 0===e?void 0:e.filter((e=>{var t;const r=null===(t=o[e.property])||void 0===t?void 0:t.name;return void 0!==r&&R.includes(r)}));if(!s)return;const l={};return s.forEach((e=>{var r;l[(null===(r=o[e.property])||void 0===r?void 0:r.name)||""]=(0,T.jsx)(w.Z,{store:i,property:e.property,locked:!0,disabled:!0,format:k.C.Page,onTab:()=>{},onUntab:()=>{},tableWrap:!1,blockPropertyValueOverlayStore:x.Z,showRelationTooltip:!1,collectionStore:t})})),l}),[t,o,r,i])}({collectionStore:j,format:C,schema:b,userPeopleCollectionPage:y}),_=(0,i.O7)(),F=(0,o.useMemo)((()=>new v.Z(_)),[_]);(0,o.useEffect)((()=>{j&&F.setContext({type:"collectionPage",collectionStore:j})}),[F,j]);const Z=(0,n.VK)((()=>!!(t&&p&&h)&&t.id===p.id),[t,p,h]);return t&&h&&l?y&&F&&I?(0,T.jsx)("div",{style:r.wrapper,children:(0,T.jsx)(m.L1,{value:F,children:(0,T.jsxs)(P.Ht,{children:[(0,T.jsx)(P.gq,{gap:3,alignItems:"center",style:r.profile,children:(0,T.jsx)(B,{userStore:t,styles:r})}),(0,T.jsxs)("div",{style:r.description,children:[(0,T.jsx)(K,{userProfile:I,styles:r}),Z?(0,T.jsx)(P.gq,{gap:1,alignItems:"center",children:(0,T.jsx)(L,{spaceStore:l,limit:5,styles:r})}):void 0]})]})})}):(0,T.jsx)("div",{style:r.wrapper,children:(0,T.jsxs)(P.Ht,{children:[(0,T.jsx)(P.gq,{gap:3,alignItems:"center",style:r.profile,children:(0,T.jsx)(B,{userStore:t,styles:r})}),Z?(0,T.jsx)("div",{style:r.description,children:(0,T.jsx)(P.gq,{gap:1,alignItems:"center",children:(0,T.jsx)(L,{spaceStore:l,limit:5,styles:r})})}):void 0]})}):null}function B(e){let{userStore:t,styles:r}=e;window.__c={n:"UserContactCard"};const o=(0,h.useIntl)(),{name:i,email:s}=(0,n.VK)((()=>({name:t.getFullName(o),email:t.getEmail()})),[t,o]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(I.Z,{userStore:t,size:70,borderStyle:"none"}),(0,T.jsxs)(P.Ht,{gap:1,children:[(0,T.jsx)("div",{style:r.profileTitle,children:i}),(0,T.jsx)("div",{style:r.profileSubtitle,children:s})]})]})}function K(e){let{userProfile:t,styles:r}=e;return t?(0,T.jsx)(T.Fragment,{children:R.filter((e=>t[e])).map((e=>(0,T.jsxs)(P.gq,{gap:1,alignItems:"center",children:[(0,T.jsx)(P.Ht,{children:(0,T.jsx)(P.gq,{style:r.profileKeyRow,children:(0,T.jsx)("div",{style:r.profileKeyText,children:H[e]?H[e]:e})})}),(0,T.jsx)(P.Ht,{style:{transform:"scale(0.9)",transformOrigin:"center left"},children:t[e]})]},e)))}):null}function L(e){let{spaceStore:t,limit:r,styles:o}=e;window.__c={n:"UserSimilarity"};const{userSimilarityList:i}=(0,n.VK)((()=>{const e=C.subscriptionDataStoreInstance.state,o=e?b.CM(e):[],i=j.p.state||{},n=o.map((e=>{const t=i[e.userId];return{id:e.userId,similarity:t||0}})).sort(((e,t)=>t.similarity-e.similarity)).slice(0,r),s=[],a=l.yW(n.map((e=>{const r=S.U6.createChildStore(t,{table:p.KJ,id:e.id});return s.push({id:e.id,similarity:e.similarity,userStore:r}),r.isReady()})));return{isOnline:y.Z.state.online,subscriptionDataStoreData:e,userSimilarityData:j.p.state||{},visibleUsersLoaded:a,visibleUsers:o,userSimilarityList:s}}),[t,r]);return t&&i&&0!==i.length?(0,T.jsxs)(P.gq,{gap:1,alignItems:"center",style:{paddingTop:4},children:[(0,T.jsx)(P.Ht,{children:(0,T.jsx)(P.gq,{style:o.profileKeyRow,children:(0,T.jsx)("div",{style:o.profileKeyText,children:"Coworkers"})})}),(0,T.jsx)(P.Ht,{children:(0,T.jsx)(P.gq,{gap:5,children:(0,T.jsx)("div",{children:(0,T.jsx)("div",{style:{display:"flex",position:"relative",float:"right"},children:i.map((e=>(0,T.jsx)("div",{style:{marginLeft:1.5},children:(0,T.jsx)(I.Z,{userStore:e.userStore,size:18})},e.id)))})})})})]}):null}},25735:(e,t,r)=>{r.d(t,{Y:()=>h});r(67294);var o=r(480),i=r(86628),n=r(24405),s=r(82990),a=r(9291),l=r(50906),d=r(16639),c=r(80444),p=r(29302),u=r(85893);function h(e){window.__c={n:"GroupMembersListTooltip"};const{group:t,limit:r,noMembersMessage:h,color:m,trackHover:g}=e,v=(0,n.yK)((e=>({container:{marginBottom:4,..."white_background"===m?{fontSize:s.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"}:{}},userContainer:{display:"flex",alignContent:"flex-end",minWidth:140,width:"100%",marginTop:4},user:{flexGrow:1},moreMessage:{marginLeft:2,marginTop:4,..."white_background"===m?{fontSize:s.Z.fontSize.UISmall.desktop,color:e.mediumTextColor}:{color:e.mediumInvertedTextColor}}})),[m]),y=(0,i.VK)((()=>c.default.state.currentSpaceStore),[]),f=(0,o.O7)();(0,i.VK)((()=>{g&&l.iHH(f,{group_id:t.id})}),[g,t.id,f]);const{countRemainingUsers:x,limitedUserStores:S}=(0,i.VK)((()=>(0,d.rm)({group:t,spaceStore:y,limit:r})),[t,y,r]);return 0===S.length?(0,u.jsx)(u.Fragment,{children:h}):(0,u.jsxs)("div",{style:v.container,children:[S.map((e=>(0,u.jsx)("div",{style:v.userContainer,children:(0,u.jsx)(p.Z,{style:v.user,userStore:e,avatarSize:18})},e.id))),x>0&&(0,u.jsx)("div",{style:v.moreMessage,children:(0,u.jsx)(a.FormattedMessage,{id:"blockPermissionsSettings.groupPermissionUsers.tooltip",defaultMessage:"{countRemainingUsers} more…",values:{countRemainingUsers:x}})})]})}},88804:(e,t,r)=>{r.d(t,{E:()=>l,N:()=>a});var o=r(83212),i=r(26136),n=r(98165),s=r(67669);function a(e,t){const r=t.getRecordStoreUIRoot(),a=r instanceof i.G&&r.isPageBlock()&&r.isLocked(),l=(0,n.n3)(r)&&o.Z.getMode(e,r),d=Boolean((0,s.YF)(l));return!t.canEdit()||a||d}function l(e,t){return!a(e,t)}}}]);