"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7471],{54281:(e,t,o)=>{o.d(t,{$o:()=>Y,Fv:()=>F,IL:()=>N,J4:()=>G,KA:()=>D,Nf:()=>z,_p:()=>Q,cQ:()=>U,f$:()=>O,fX:()=>X,j2:()=>R,k2:()=>W,mg:()=>J,mz:()=>A,oP:()=>j,tF:()=>$,td:()=>q,x:()=>E});o(57658);var r=o(30120),n=o(1302),a=o(15145),i=o(92996),s=o(72621),l=o(53877),c=o(42875),d=o(15157),u=o(72126),C=o(97880),m=o(75754),g=o(26999),p=o(75079),f=o(65742),S=o(78316),v=o(88632),y=o(77080),L=o(26136),h=o(27724),b=o(34583),k=o(50906),M=o(8406),w=o(49865),x=o(75134),V=o(5149),H=o(14900),_=o(96802),P=o(9953),Z=o(79978),I=o(24677),B=o(98104),T=o(82530);function R(e){const{collectionViewStore:t,collectionContextStore:o,timelineState:r,environment:n}=e,a=n.currentUser.id,i=(0,f.B8)(t.id),s=(0,f.pQ)(t,n),l=o.permissionScopes.state,c=u.Ds((()=>{if(r.destroyed)return;const e={zoomLevel:r.zoomLevel.state,centerTimestamp:(0,f.al)(r)};d.Z.set({userId:a,key:i,value:e})}),1e3),C=u.Ds((()=>{if(r.destroyed||!v.Z.state.online||!n.currentUser.isLoggedIn()||!l.canConfigureBlock)return;const e={zoomLevel:r.zoomLevel.state,centerTimestamp:(0,f.al)(r)},o=t.getFormat().timeline_preference;u.Xy(o,e)||T.createAndCommit({userAction:"collectionTimelineViewActions.setRemotePreference",environment:n,perform:o=>{_.FH({stores:[t],update:{timeline_preference:e},transaction:o})}})}),5e3);r.savePreference=()=>{c(),C()},z({timelineState:r,environment:n,...s})}function z(e){const{timelineState:t,zoomLevel:o,centerTimestamp:r,environment:a}=e,{savePreference:i}=t,s=a.WindowSizeStore.state.width+2*f.Ge,l=(0,f.x2)(o,s),c=r-l/2,d=r+l/2;t.zoomLevel.setState(o),t.currentRange.setState({startTimestamp:c,endTimestamp:d}),n.default.afterNextFlush((()=>{D({timelineState:t,centerTimestamp:r}),i&&i()}))}function D(e){const{timelineState:t,centerTimestamp:o}=e,{horizontalScroller:r,outerSizeObserver:n}=t;if(!r)return;const a=t.zoomLevel.state,{startTimestamp:i,endTimestamp:s}=t.currentRange.state,l=n.rect.state.width;if(l===(0,f.e$)(a,s-i))return;const c=(0,f.e$)(a,o-i)-l/2;r.scrollLeft=c,t.scrollLeft.setState(c)}function j(e){const{environment:t,store:o,query:r,date:n,schema:a,transaction:i}=e,{timeline_by:s}=r;if(!s)return;const l=(0,f.TW)({store:o,dateValue:n,query:r,schema:a}),c=o.getPropertyValue(s),d=r.timeline_by_end?o.getPropertyValue(r.timeline_by_end):void 0;return P.sW({store:o.getPropertiesStore(),data:l,transaction:i}),x.H({environment:t,store:o,dateProperty:{id:s,newValue:(null==l?void 0:l[s])??[],oldValue:c},otherDateProperty:r.timeline_by_end?{id:r.timeline_by_end,newValue:(null==l?void 0:l[r.timeline_by_end])??[],oldValue:d}:void 0}),o}function F(e){var t;const{environment:o,timelineState:n,collectionStore:a,collectionContextStore:i,store:s,query:d,groupFormat:u,transaction:C}=e,m=n.zoomLevel.state,g=(0,f.al)(n),{snapUnit:p,getDateRangePlaceholderDuration:S}=f.BJ[m],{timeline_by:v}=d;if(!v)return;const y=null===(t=i.groupsStore.getGroupState(u))||void 0===t?void 0:t.resultsStore.state;if(!y)return;const L=r.ou.fromMillis(g),h=(0,f.DS)(L,p),b=(0,f.DS)(S(L),p),k=(0,f.AZ)({startValue:(0,l.Lg)((0,c.r)()),snapUnit:p,desiredStart:h,desiredEnd:b});return j({environment:o,store:s,query:d,schema:a.getSchema(),date:k,transaction:C}),w.$T({environment:o,collectionStore:a,before:!0,store:y[0],insertStores:[s],collectionContextStore:i,groupsPointer:u?[u]:[],transaction:C}),s}function O(e){const{type:t,timelineState:o,store:r,startX:n,query:a,schema:i,intl:s,environment:l}=e,{horizontalScroller:c}=o,{startTimestamp:d}=o.currentRange.state;if(!c)return;I.Ys({environment:l,store:r});const C=c.scrollLeft,{stores:m}=h.default.state,g=u.oA(m.map((e=>{const t=(0,f.bk)({store:e,query:a,schema:i,userId:l.currentUser.id,intl:s});if(t)return{startValue:t,store:e}})));o.dragState.setState({type:t,startStore:r,stores:g.map((e=>{let{store:t}=e;return t})),startValues:g.map((e=>{let{startValue:t}=e;return t})),temporaryValues:g.map((e=>{let{startValue:t}=e;return t})),startX:n,startStartTimestamp:d,startScrollLeft:C})}function G(e){const{timelineState:t,store:o,startX:r,startY:n,schema:a,collectionContextStore:i,verticalScroller:s}=e,{horizontalScroller:l}=t,{startTimestamp:c}=t.currentRange.state;if(!l||!s)return;const d=l.scrollLeft,u=s.scrollTop,C=(0,f.YE)(i,o,a);t.drawState.setState({startStore:o,startDependencyRelationPointers:C,temporaryDependencyRelationPointers:[...C],startX:r,startY:n,startScrollLeft:d,startScrollTop:u,startStartTimestamp:c,xOffsetPx:0,yOffsetPx:0,tryToCompleteDrawnArrow:!1})}function q(e){const{timelineState:t,currentX:o}=e,{horizontalScroller:r}=t,n=t.zoomLevel.state,a=t.dragState.state,{startTimestamp:i}=t.currentRange.state;if(!a||!r)return;const{type:s,startStartTimestamp:c,startValues:d,startScrollLeft:m,startX:g,startStore:p,stores:S}=a,v=f.BJ[n],{snapUnit:y}=v,L=r.scrollLeft-m+(o-g)+(0,f.e$)(n,i-c),h=(0,f.x2)(n,L),b=d[S.indexOf(p)];let k;if(s===f.px.LeftResizer){const{start:e}=(0,f.XO)(b,y),t=e.plus(h);k=d.map((e=>{const o=(0,f.AZ)({startValue:e,snapUnit:y,desiredStart:t});return(0,l.gW)(o)}))}else if(s===f.px.RightResizer){const{end:e}=(0,f.XO)(b,y),t=e.plus(h);k=d.map((e=>{const o=(0,f.AZ)({startValue:e,snapUnit:y,desiredEnd:t});return(0,l.Qq)(o)}))}else s===f.px.ItemDrag?k=d.map((e=>{const{start:t,end:o}=(0,f.XO)(e,y),r=t.plus(h),n=r.plus(o.valueOf()-t.valueOf());return(0,f.AZ)({startValue:e,snapUnit:y,desiredStart:r,desiredEnd:n})})):(0,C.t1)(s);u.Xy(a.temporaryValues,k)||t.dragState.setState({...a,temporaryValues:k})}function A(e){const{timelineState:t,currentX:o,currentY:r,verticalScroller:n}=e,a=t.drawState.state,i=t.zoomLevel.state,{startTimestamp:s}=t.currentRange.state,{horizontalScroller:l}=t;if(!a||!l||!n)return;const{startDependencyRelationPointers:c,startStore:d,startX:C,startY:m,startScrollLeft:g,startScrollTop:p,startStartTimestamp:S}=a,v=l.scrollLeft,y=n.scrollTop,L=v-g+(o-C)+(0,f.e$)(i,s-S),h=y-p+(r-m),b=t.hoveredItem.state;if(b&&b!==d&&!c.some((e=>e.id===b.id))){const e=[...c,{table:"block",id:b.id,spaceId:b.getSpaceId()}];u.Xy(a.temporaryDependencyRelationPointers,e)||t.drawState.setState({...a,temporaryDependencyRelationPointers:e,xOffsetPx:void 0,yOffsetPx:void 0})}else t.drawState.setState({...a,temporaryDependencyRelationPointers:[...c],xOffsetPx:L,yOffsetPx:h})}function X(e){const{environment:t,collectionContextStore:o,timelineState:r,query:n,schema:a,transaction:i}=e,s=r.dragState.state,{timeline_by:l}=n;if(!s||!l)return;const{temporaryValues:c,stores:d}=s;c.forEach(((e,r)=>{const s=d[r];j({environment:t,store:s,query:n,schema:a,transaction:i,date:e}),M.rv({environment:t,collectionContextStore:o,block_id:s.id,property:l,property_type:"date",from:"timeline"})})),r.dragState.setState(void 0)}function Y(e){var t;const{timelineState:o,environment:r,transaction:n,collectionContextStore:a,isFullScreen:i,isRootChild:s}=e,l=o.drawState.state,c=o.dateRangePlaceholder.state;if(!l)return;const{startStore:d,startDependencyRelationPointers:u,temporaryDependencyRelationPointers:C}=l;if(!d)return void o.drawState.setState(void 0);let m;if(c.active){const{date:e,store:t,parentStore:i,groupFormat:s,newTimelineItemProps:l,existingTimelineItemProps:u}=c;if(t&&u){const{query:o,schema:a}=u;j({environment:r,store:t,query:o,schema:a,date:e,transaction:n}),m={table:"block",id:t.id,spaceId:d.getSpaceId()}}else if(l){const{query:o,schema:c,isFullScreen:u,canEditTimelineItems:C,subitemPath:g}=l,p=J({environment:r,date:e,store:t,parentStore:i,query:o,schema:c,isFullScreen:u,groupFormat:s,canEditTimelineItems:C,collectionContextStore:a,subitemPath:g,transaction:n,from:"timeline_complete_draw"});p&&(m={table:"block",id:p.id,spaceId:d.getSpaceId()})}o.dateRangePlaceholder.setState({active:!1})}else m=C.find((e=>!u.includes(e)));const g=(0,f._e)(a);if(g){const{property:e}=g;m&&(Z.hE({environment:r,propertyWithInverse:g,sourceStore:d,destStore:L.G.createChildStore(d,m),position:{type:"after"},transaction:n}),M.rv({environment:r,collectionContextStore:a,block_id:d.id,property:e,property_type:"relation",from:"timeline",isFromBulkActionsToolbar:!1,isUnthrottled:!0})),o.drawState.setState(void 0)}else V.wl({item:{type:y.default.checkGate("dependency_date_shifting_by_space")?"dependencies":"arrowsBy"},collectionSettingsStore:a.settingsStore}),o.drawState.setState({...l,tryToCompleteDrawnArrow:!0});const S=null===(t=m)||void 0===t?void 0:t.id;S&&k.LEn(r,{...(0,p.Pn)(a),...(0,f.Ii)({environment:r,collectionContextStore:a,timelineState:o,isFullScreen:i,isRootChild:s}),dependenciesPropertyID:null==g?void 0:g.property,blockedByStoreID:d.id,blockingStoreID:S})}function U(e){const{timelineState:t,environment:o}=e;t.dragState.state&&(t.dragState.setState(void 0),I.ZH(o))}function E(e){const{timelineState:t,environment:o}=e;t.drawState.state&&(t.drawState.setState(void 0),I.ZH(o))}function W(e){const{stores:t,collectionViewStore:o,schema:r,transaction:n}=e,a=o.getType(),i=o.getQuery(r),s=[];i&&("calendar"===a?i.calendar_by&&s.push(i.calendar_by):"timeline"===a&&(i.timeline_by&&s.push(i.timeline_by),i.timeline_by_end&&s.push(i.timeline_by_end)));for(const l of t)for(const e of s)P.sO({store:l.getPropertyStore(e),value:void 0,transaction:n})}function N(e){const{dependency:t,collectionContextStore:o,environment:r,timelineState:n,isFullScreen:a,isRootChild:i}=e,s=(0,f._e)(o),l=o.collectionStore();if(!s||!l)return;const{property:c}=s,{store:d,relationPointer:u}=t,C=d.getSchema()[c];C&&"relation"===C.type&&(T.createAndCommit({userAction:"CollectionTimelineDependenciesOverlay.handleRemoveRelation",environment:r,perform:e=>{Z.Bl({environment:r,propertyWithInverse:s,sourceStore:d,destStore:L.G.createChildStore(d,u),transaction:e}),M.rv({environment:r,block_id:u.id,property:c,property_type:C.type,from:"timeline",collectionContextStore:o,isFromBulkActionsToolbar:!1,isUnthrottled:!0})}}),k.lfq(r,{...(0,p.Pn)(o),...(0,f.Ii)({environment:r,collectionContextStore:o,timelineState:n,isFullScreen:a,isRootChild:i}),dependenciesPropertyID:c,blockedByStoreID:d.id,blockingStoreID:u.id}))}function $(e){const{collectionViewStore:t,newProperty:o,transaction:r}=e;_.FH({stores:[t],update:{timeline_arrows_by:{property:o}},transaction:r})}function Q(e){var t;const{collectionContextStore:o,relationPropertyId:r,transaction:n}=e,a=o.collectionStore();if(!a)return;const l=r?a.getSchema()[r]:void 0,c="relation"===(null==l?void 0:l.type)&&l.property&&"relation"===(null===(t=a.getSchema()[l.property])||void 0===t?void 0:t.type)?l.property:void 0;_.FH({stores:[a],update:{collection_default_arrows_by:r,...a.getFormat().app_config_uri===s.iS?{app_uri_map:{...a.getFormat().app_uri_map?a.getFormat().app_uri_map:{},[i.Es.BlockingRelation]:r,[i.Es.BlockedRelation]:c}}:{}},transaction:n})}function J(e){const{environment:t,transaction:o,date:r,parentStore:n,query:i,schema:s,isFullScreen:l,groupFormat:c,canEditTimelineItems:d,collectionContextStore:u,from:C}=e;if(!b.M_(t))return;const p=c?[c]:[],f=u.groupsStore.getGroupState(p);if(!f)return;if(n)return function(e){const{environment:t,transaction:o,date:r,store:n,parentStore:i,query:s,schema:l,groupFormat:c,canEditTimelineItems:d,collectionContextStore:u,subitemPath:C}=e;if(!n||!i)return;const g=c?[c]:[],p=w.yk({environment:t,collectionContextStore:u,groupsPointer:g,store:n,before:!1,collectionStore:i,transaction:o,subitemPath:C,subitemInsertDirection:"into"});if(p){if(j({environment:t,store:p,query:s,schema:l,date:r,transaction:o}),t.device.isMobile)m._({environment:t,store:p,pageVisitSource:a.tY.Create});else if(p&&d){const e=p.getBlockTitleStore();B.N_({store:e})}return p}}(e);u.searchQuery.state&&H.Ug({searchQuery:"",collectionContextStore:u,isFullScreen:l});const v=w.IW({environment:t,collectionContextStore:u,groupsPointer:p,shouldCoerce:!0,initializeDefaultTemplate:!0,transaction:o,from:C});if(!v)return;const y=v.coercionSucceeded,L=v.newStore;if(j({environment:t,store:L,query:i,schema:s,date:r,transaction:o}),t.device.isMobile)m._({environment:t,store:L,pageVisitSource:a.tY.Create});else if(y&&d){const e=L.getBlockTitleStore();B.NX({store:e})}else g.CH({environment:t,store:L,peekMode:(0,S.kr)(u.collectionViewStore()),resultsStore:null==f?void 0:f.resultsStore,collectionContextStore:u,pageVisitSource:a.tY.Create});return L}},69872:(e,t,o)=>{o.d(t,{L:()=>d,Z:()=>u});o(67294);var r=o(480),n=o(24405),a=o(39068),i=o(52821),s=o(52275),l=o(28992),c=o(85893);let d=function(e){return e[e.Name=0]="Name",e[e.Type=1]="Type",e}({});const u=function(e){window.__c={n:"PropertyMenuItem"};const{propertySchema:t,format:o,locked:u}=e,C=(0,n.Fg)(),m=(0,r.O7)(),{name:g,type:p,icon:f}=t,S=o===d.Name?g:i.SO[p];return u?(0,c.jsx)(l.Z,{title:S,icon:(0,c.jsx)(a.ZP,{icon:f,type:p,size:m.device.isMobile?18:16,theme:C,style:{fill:C.regularIconColor}}),...e}):(0,c.jsx)(s.Z,{title:S,icon:(0,c.jsx)(a.ZP,{icon:f,type:p,size:m.device.isMobile?18:16,theme:C,style:{fill:C.regularIconColor,marginLeft:6,marginRight:2}}),...e})}},60442:(e,t,o)=>{o.d(t,{Z:()=>i});o(67294);var r=o(82990),n=o(47853),a=o(85893);const i=function(e){let{imageURL:t,imageWidth:o,imageHeight:r,caption:i,title:l}=e;if(t){const e=(0,n.D)(t);return(0,a.jsxs)("div",{style:{width:o||200,marginTop:4,marginBottom:4},children:[(0,a.jsx)("div",{style:{width:"100%",height:r||100,borderRadius:4,backgroundImage:`url(${e})`,backgroundSize:"cover",marginBottom:6}}),(0,a.jsx)(s,{caption:i,title:l})]})}return(0,a.jsx)(s,{caption:i,title:l,style:{width:o}})};function s(e){let{style:t,caption:o,title:n}=e;return(0,a.jsxs)("div",{style:{whiteSpace:"normal",lineHeight:1.4,...t},children:[n&&(0,a.jsx)("header",{style:{fontWeight:r.Z.fontWeight.bold,marginBottom:4},children:n}),o]})}},80025:(e,t,o)=>{o.d(t,{Vn:()=>i,mF:()=>s,qf:()=>c});var r=o(9291),n=o(33929);const a=(0,r.defineMessages)({default:{defaultMessage:"Light gray",id:"colors.select.lightGray"},gray:{defaultMessage:"Gray",id:"colors.select.gray"},translucentGray:{defaultMessage:"Gray",id:"colors.select.gray"},brown:{defaultMessage:"Brown",id:"colors.select.brown"},orange:{defaultMessage:"Orange",id:"colors.select.orange"},yellow:{defaultMessage:"Yellow",id:"colors.select.yellow"},green:{defaultMessage:"Green",id:"colors.select.green"},blue:{defaultMessage:"Blue",id:"colors.select.blue"},purple:{defaultMessage:"Purple",id:"colors.select.purple"},pink:{defaultMessage:"Pink",id:"colors.select.pink"},red:{defaultMessage:"Red",id:"colors.select.red"}});function i(e){const t=a[e]||a.gray;return n.default.formatMessage(t)}const s=(0,r.defineMessages)({foregroundColorDefault:{id:"action.foregroundColor.default.name",defaultMessage:"Default"},foregroundColorGray:{id:"action.foregroundColor.gray.name",defaultMessage:"Gray"},foregroundColorBrown:{id:"action.foregroundColor.brown.name",defaultMessage:"Brown"},foregroundColorOrange:{id:"action.foregroundColor.orange.name",defaultMessage:"Orange"},foregroundColorYellow:{id:"action.foregroundColor.yellow.name",defaultMessage:"Yellow"},foregroundColorGreen:{id:"action.foregroundColor.green.name",defaultMessage:"Green"},foregroundColorBlue:{id:"action.foregroundColor.blue.name",defaultMessage:"Blue"},foregroundColorPurple:{id:"action.foregroundColor.purple.name",defaultMessage:"Purple"},foregroundColorPink:{id:"action.foregroundColor.pink.name",defaultMessage:"Pink"},foregroundColorRed:{id:"action.foregroundColor.red.name",defaultMessage:"Red"},backgroundColorGray:{id:"action.backgroundColor.gray.name",defaultMessage:"Gray background"},backgroundColorBrown:{id:"action.backgroundColor.brown.name",defaultMessage:"Brown background"},backgroundColorOrange:{id:"action.backgroundColor.orange.name",defaultMessage:"Orange background"},backgroundColorYellow:{id:"action.backgroundColor.yellow.name",defaultMessage:"Yellow background"},backgroundColorGreen:{id:"action.backgroundColor.green.name",defaultMessage:"Green background"},backgroundColorBlue:{id:"action.backgroundColor.blue.name",defaultMessage:"Blue background"},backgroundColorPurple:{id:"action.backgroundColor.purple.name",defaultMessage:"Purple background"},backgroundColorPink:{id:"action.backgroundColor.pink.name",defaultMessage:"Pink background"},backgroundColorRed:{id:"action.backgroundColor.red.name",defaultMessage:"Red background"},backgroundColorDefault:{id:"action.backgroundColor.default.name",defaultMessage:"Default background"}}),l={default:{...s.foregroundColorDefault},gray:{...s.foregroundColorGray},brown:{...s.foregroundColorBrown},orange:{...s.foregroundColorOrange},yellow:{...s.foregroundColorYellow},teal:{...s.foregroundColorGreen},blue:{...s.foregroundColorBlue},purple:{...s.foregroundColorPurple},pink:{...s.foregroundColorPink},red:{...s.foregroundColorRed},gray_background:{...s.backgroundColorGray},brown_background:{...s.backgroundColorBrown},orange_background:{...s.backgroundColorOrange},yellow_background:{...s.backgroundColorYellow},teal_background:{...s.backgroundColorGreen},blue_background:{...s.backgroundColorBlue},purple_background:{...s.backgroundColorPurple},pink_background:{...s.backgroundColorPink},red_background:{...s.backgroundColorRed}};function c(e){return l[e]}},40745:(e,t,o)=>{o.d(t,{M:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("arrowDown",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 1.57715C7.5625 1.57715 7.25488 1.88477 7.25488 2.33594V10.8262L7.30957 12.3027L5.50488 10.2861L3.95312 8.75488C3.82324 8.625 3.63184 8.53613 3.42676 8.53613C3.0166 8.53613 2.70898 8.85059 2.70898 9.26758C2.70898 9.46582 2.78418 9.64355 2.94141 9.80762L7.44629 14.3193C7.59668 14.4697 7.79492 14.5586 8 14.5586C8.20508 14.5586 8.40332 14.4697 8.55371 14.3193L13.0586 9.80762C13.2158 9.64355 13.291 9.46582 13.291 9.26758C13.291 8.85059 12.9902 8.53613 12.5801 8.53613C12.3682 8.53613 12.1836 8.625 12.0469 8.75488L10.4951 10.2861L8.69043 12.2959L8.74512 10.8262V2.33594C8.74512 1.88477 8.44434 1.57715 8 1.57715Z"})})},80988:(e,t,o)=>{o.d(t,{U:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("blockColor",{viewBox:"0 0 30 30",svg:(0,n.jsx)("path",{d:"M25,5c0-2.2-1.8-4-4-4H6C3.8,1,2,2.8,2,5H1v2h1c0,2.2,1.8,4,4,4h15c2.2,0,4-1.8,4-4h2v6H14v4h-2v9c0,1.657,1.344,3,3,3 s3-1.343,3-3v-9h-2v-2h13V5H25z M23,7c0,1.103-0.896,2-2,2H6C4.896,9,4,8.103,4,7V5c0-1.103,0.896-2,2-2h15c1.104,0,2,0.897,2,2V7z M16,26c0,0.552-0.449,1-1,1s-1-0.448-1-1v-7h2V26z"})})},94491:(e,t,o)=>{o.d(t,{h:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("editPage",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM5.97656 7.44922C6.40723 7.44922 6.79004 7.05957 6.79004 6.51953C6.79004 5.97949 6.41406 5.58984 5.97656 5.58984C5.55273 5.58984 5.18359 5.97949 5.18359 6.51953C5.18359 7.05957 5.55273 7.44922 5.97656 7.44922ZM10.0098 7.44922C10.4404 7.44922 10.8232 7.05957 10.8232 6.51953C10.8232 5.97949 10.4404 5.58984 10.0098 5.58984C9.5791 5.58984 9.2168 5.97949 9.2168 6.51953C9.2168 7.05957 9.58594 7.44922 10.0098 7.44922ZM7.99316 11.4277C9.42871 11.4277 10.3926 10.4775 10.3926 10.0195C10.3926 9.85547 10.2285 9.78027 10.0713 9.84863C9.57227 10.1084 8.99121 10.416 7.99316 10.416C7.00195 10.416 6.41406 10.1084 5.91504 9.84863C5.76465 9.77344 5.60059 9.85547 5.60059 10.0195C5.60059 10.4775 6.56445 11.4277 7.99316 11.4277Z"})})},4970:(e,t,o)=>{o.d(t,{A:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("fullscreen",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M1.25293 6.82031C1.25293 9.88965 3.74805 12.3848 6.81738 12.3848C7.95898 12.3848 9.00488 12.0361 9.87988 11.4414L13.0244 14.5859C13.2158 14.7842 13.4824 14.873 13.749 14.873C14.3301 14.873 14.7471 14.4355 14.7471 13.8682C14.7471 13.5947 14.6514 13.3418 14.4668 13.1504L11.3428 10.0195C11.9922 9.12402 12.3818 8.0166 12.3818 6.82031C12.3818 3.75098 9.88672 1.25586 6.81738 1.25586C3.74805 1.25586 1.25293 3.75098 1.25293 6.82031ZM2.70215 6.82031C2.70215 4.55078 4.54102 2.70508 6.81738 2.70508C9.08691 2.70508 10.9326 4.55078 10.9326 6.82031C10.9326 9.08984 9.08691 10.9355 6.81738 10.9355C4.54102 10.9355 2.70215 9.08984 2.70215 6.82031ZM4.52051 6.82031C4.52051 7.12109 4.75293 7.35352 5.05371 7.35352H6.27734V8.58398C6.27734 8.88477 6.5166 9.11719 6.81738 9.11719C7.11816 9.11719 7.35059 8.87793 7.35059 8.58398V7.35352H8.58105C8.875 7.35352 9.11426 7.12109 9.11426 6.82031C9.11426 6.51953 8.875 6.28711 8.58105 6.28711H7.35059V5.05664C7.35059 4.7627 7.11133 4.52344 6.81738 4.52344C6.5166 4.52344 6.27734 4.7627 6.27734 5.05664V6.28711H5.05371C4.75293 6.28711 4.52051 6.51953 4.52051 6.82031Z"})})},62208:(e,t,o)=>{o.d(t,{z:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("loop",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M5.80371 3.12305C5.81006 3.50391 6.05762 3.74512 6.47656 3.74512H11.3643C11.9546 3.74512 12.2783 4.0498 12.2783 4.66553V11.2925L11.377 10.3149L10.8628 9.80078C10.5962 9.54688 10.2344 9.52783 9.96777 9.78809C9.71387 10.0483 9.72021 10.4229 9.98047 10.6831L12.145 12.8413C12.6211 13.311 13.167 13.311 13.6431 12.8413L15.8076 10.6831C16.0679 10.4229 16.0742 10.0483 15.8203 9.78809C15.5537 9.52783 15.1919 9.54688 14.9253 9.80078L14.4111 10.3149L13.5161 11.2861V4.56396C13.5161 3.20557 12.8052 2.50098 11.4341 2.50098H6.47656C6.05762 2.50098 5.79736 2.74219 5.80371 3.12305ZM0.186035 7.05859C0.446289 7.3252 0.808105 7.30615 1.07471 7.0459L1.59521 6.53809L2.48389 5.56689V12.2891C2.48389 13.6475 3.19482 14.3521 4.56592 14.3521H9.52344C9.94238 14.3521 10.2026 14.1108 10.1963 13.73C10.1899 13.3428 9.94238 13.1079 9.52344 13.1079H4.64209C4.05176 13.1079 3.72803 12.7969 3.72803 12.1812V5.5542L4.62305 6.53809L5.14355 7.0459C5.40381 7.30615 5.77197 7.3252 6.03223 7.05859C6.29248 6.79834 6.28613 6.43018 6.01953 6.16992L3.85498 4.01172C3.37891 3.53564 2.83936 3.53564 2.36328 4.01172L0.19873 6.16992C-0.0678711 6.43018 -0.0742188 6.79834 0.186035 7.05859Z"})})},21566:(e,t,o)=>{o.d(t,{q:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("moveTo",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M2.34668 13.5469C2.78418 13.5469 3.07812 13.2393 3.07812 12.8018C3.07812 12.542 3.05762 12.2754 3.05762 11.8994C3.05762 9.60254 3.86426 8.67285 6.14062 8.67285H10.5771L12.2109 8.57031L10.1738 10.4297L8.64941 11.9678C8.5127 12.1045 8.43066 12.2891 8.43066 12.501C8.43066 12.9111 8.73828 13.2188 9.16895 13.2188C9.35352 13.2188 9.53809 13.1436 9.70215 12.9863L14.207 8.48145C14.3711 8.33105 14.4531 8.12598 14.4531 7.9209C14.4531 7.71582 14.3711 7.51758 14.207 7.36035L9.71582 2.86914C9.53809 2.70508 9.35352 2.62305 9.16895 2.62305C8.73828 2.62305 8.43066 2.93066 8.43066 3.34082C8.43066 3.55273 8.5127 3.7373 8.64941 3.87402L10.1738 5.41895L12.2041 7.27148L10.5771 7.17578H6.04492C2.87988 7.17578 1.54688 8.63184 1.54688 11.8516C1.54688 12.2549 1.56055 12.6035 1.61523 12.877C1.67676 13.2051 1.88184 13.5469 2.34668 13.5469Z"})})},21158:(e,t,o)=>{o.d(t,{h:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("openAsPage",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M3.22605 12.855C3.36623 12.9952 3.55957 13.0822 3.77226 13.0725L8.83802 13.0338C9.04103 13.0338 9.24405 12.9468 9.36973 12.8212C9.67425 12.5166 9.65975 12.1058 9.36973 11.8157C9.21988 11.6659 9.05553 11.6079 8.86702 11.6127L6.79818 11.6417L5.26105 11.7577L6.39215 10.7136L10.7087 6.39712L11.7528 5.26603L11.6319 6.80799L11.6029 8.87683C11.6029 9.06051 11.6561 9.22969 11.8059 9.37954C12.096 9.66956 12.5117 9.67923 12.8162 9.3747C12.9419 9.24902 13.0289 9.04601 13.024 8.84782L13.0675 3.77723C13.0724 3.56938 12.9902 3.3712 12.85 3.23102C12.7098 3.09084 12.5165 3.0135 12.3038 3.0135L7.23805 3.06184C7.03987 3.05701 6.83685 3.14401 6.71117 3.26969C6.40665 3.57422 6.41631 3.98992 6.70634 4.27994C6.85618 4.42979 7.02536 4.48296 7.20905 4.48296L9.27789 4.45396L10.8198 4.33311L9.68392 5.37237L5.36739 9.6889L4.32814 10.8248L4.44415 9.28769L4.47315 7.21886C4.47799 7.03034 4.41998 6.86599 4.27013 6.71615C3.98011 6.42612 3.56924 6.41162 3.26472 6.71615C3.13904 6.84182 3.05203 7.04484 3.05203 7.24786L3.00853 12.3088C3.0037 12.5263 3.08587 12.7148 3.22605 12.855Z"})})},84199:(e,t,o)=>{o.d(t,{N:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("properties",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z"})})},35582:(e,t,o)=>{o.d(t,{O:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("quote",{viewBox:"0 0 20 20",svg:(0,n.jsx)("path",{d:"M9.061 9.12c.987 0 1.79-.675 1.79-1.7 0-.973-.662-1.626-1.56-1.626-.438 0-.802.163-1.04.498.23-.995 1.003-1.656 2.065-1.708.304-.022.527-.238.527-.527 0-.35-.29-.557-.683-.557-1.67 0-3.163 1.425-3.163 3.334 0 1.388.891 2.286 2.064 2.286zm-4.648 0c.988 0 1.79-.675 1.79-1.7 0-.973-.661-1.626-1.56-1.626-.445 0-.801.163-1.039.498.23-.995 1.002-1.649 2.072-1.708.296-.022.512-.238.512-.527 0-.35-.29-.557-.676-.557-1.678 0-3.163 1.425-3.163 3.334 0 1.388.891 2.286 2.064 2.286zM12.84 4.83h4.165a.66.66 0 00.668-.66.664.664 0 00-.668-.662H12.84a.664.664 0 00-.668.661c0 .371.297.66.668.66zm0 3.89h4.165a.66.66 0 00.668-.66.66.66 0 00-.668-.661H12.84a.66.66 0 00-.668.66c0 .372.297.661.668.661zm-9.852 3.89h14.017a.66.66 0 00.668-.66.66.66 0 00-.668-.66H2.988c-.371 0-.66.289-.66.66 0 .371.289.66.66.66zm0 3.891h14.017a.664.664 0 00.668-.66.66.66 0 00-.668-.662H2.988c-.371 0-.66.29-.66.661 0 .364.289.661.66.661z"})})},38491:(e,t,o)=>{o.d(t,{N:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("redo",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M1.45117 10.6826C1.45117 13.4102 3.24219 15.208 6.29785 15.208H7.93848C8.38281 15.208 8.69727 14.873 8.69727 14.4629C8.69727 14.0459 8.38281 13.7109 7.93848 13.7109H6.3457C4.14453 13.7109 2.92773 12.4053 2.92773 10.6211C2.92773 8.84375 4.14453 7.59277 6.3457 7.59277H10.7002L12.2793 7.52441L11.0762 8.53613L9.31934 10.252C9.18262 10.3887 9.10059 10.5527 9.10059 10.7715C9.10059 11.1953 9.39453 11.5029 9.83203 11.5029C10.0234 11.5029 10.2285 11.4141 10.3721 11.2705L14.3027 7.40137C14.46 7.25098 14.542 7.05273 14.542 6.84766C14.542 6.64258 14.46 6.4375 14.3027 6.29395L10.3721 2.4248C10.2285 2.28125 10.0234 2.19238 9.83203 2.19238C9.39453 2.19238 9.10059 2.5 9.10059 2.91699C9.10059 3.14258 9.18262 3.30664 9.31934 3.43652L11.0762 5.15234L12.2793 6.1709L10.7002 6.10254H6.38672C3.2832 6.10254 1.45117 7.96875 1.45117 10.6826Z"})})},53470:(e,t,o)=>{o.d(t,{H:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("rename",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M14.7881 2.5752L15.3008 2.04199C15.5605 1.76855 15.5742 1.39941 15.3213 1.13965L15.1436 0.955078C14.9111 0.722656 14.5283 0.763672 14.2754 1.00977L13.749 1.5293L14.7881 2.5752ZM6.68066 9.87598L8.0752 9.28809L14.2891 3.06738L13.25 2.03516L7.03613 8.25586L6.4209 9.60254C6.35254 9.75977 6.52344 9.9375 6.68066 9.87598ZM4.09668 14.4355H12.0674C13.373 14.4355 14.1387 13.6768 14.1387 12.2207V4.99512L12.7988 6.33496V12.1045C12.7988 12.7676 12.4434 13.1025 11.9854 13.1025H4.17871C3.54297 13.1025 3.19434 12.7676 3.19434 12.1045V4.49609C3.19434 3.83301 3.54297 3.49805 4.17871 3.49805H10.0234L11.3633 2.1582H4.09668C2.62695 2.1582 1.85449 2.91699 1.85449 4.37988V12.2207C1.85449 13.6836 2.62695 14.4355 4.09668 14.4355Z"})})},45137:(e,t,o)=>{o.d(t,{o:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("speechBubbleThin",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M4.73926 15.6797C5.12207 15.6797 5.40918 15.4951 5.87402 15.085L8.21875 13.0068H12.3545C14.4121 13.0068 15.5674 11.8311 15.5674 9.80078V4.49609C15.5674 2.46582 14.4121 1.29004 12.3545 1.29004H3.63867C1.58105 1.29004 0.425781 2.46582 0.425781 4.49609V9.80078C0.425781 11.8311 1.6084 13.0068 3.59082 13.0068H3.87109V14.6953C3.87109 15.3037 4.19238 15.6797 4.73926 15.6797ZM5.07422 14.1758V12.2275C5.07422 11.8242 4.90332 11.667 4.51367 11.667H3.67285C2.38086 11.667 1.76562 11.0176 1.76562 9.75977V4.53711C1.76562 3.2793 2.38086 2.62988 3.67285 2.62988H12.3135C13.6055 2.62988 14.2275 3.2793 14.2275 4.53711V9.75977C14.2275 11.0176 13.6055 11.667 12.3135 11.667H8.14355C7.7334 11.667 7.52832 11.7354 7.24121 12.0361L5.07422 14.1758ZM4.51367 5.35059H11.4043C11.6367 5.35059 11.8281 5.15918 11.8281 4.91992C11.8281 4.69434 11.6367 4.50293 11.4043 4.50293H4.51367C4.28125 4.50293 4.09668 4.69434 4.09668 4.91992C4.09668 5.15918 4.28125 5.35059 4.51367 5.35059ZM4.51367 7.53125H11.4043C11.6367 7.53125 11.8281 7.33301 11.8281 7.10059C11.8281 6.86816 11.6367 6.67676 11.4043 6.67676H4.51367C4.28125 6.67676 4.09668 6.86816 4.09668 7.10059C4.09668 7.33301 4.28125 7.53125 4.51367 7.53125ZM4.51367 9.70508H9.00488C9.2373 9.70508 9.42188 9.51367 9.42188 9.28125C9.42188 9.04199 9.2373 8.85742 9.00488 8.85742H4.51367C4.28125 8.85742 4.09668 9.04199 4.09668 9.28125C4.09668 9.51367 4.28125 9.70508 4.51367 9.70508Z"})})},91427:(e,t,o)=>{o.d(t,{e:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("star",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M3.2627 14.7637C3.58398 15.0098 3.98047 14.9277 4.44531 14.5928L8 11.9814L11.5547 14.5928C12.0195 14.9277 12.4229 15.0098 12.7441 14.7637C13.0586 14.5244 13.127 14.1279 12.9424 13.5879L11.541 9.41113L15.1299 6.83398C15.5879 6.50586 15.7861 6.14355 15.6562 5.76074C15.5264 5.38477 15.1641 5.2002 14.5967 5.20703L10.1943 5.23438L8.85449 1.03711C8.68359 0.490234 8.40332 0.196289 8 0.196289C7.60352 0.196289 7.32324 0.490234 7.14551 1.03711L5.80566 5.23438L1.40332 5.20703C0.835938 5.2002 0.480469 5.38477 0.350586 5.76074C0.220703 6.14355 0.412109 6.50586 0.876953 6.83398L4.46582 9.41113L3.05762 13.5879C2.87305 14.1279 2.94141 14.5244 3.2627 14.7637ZM4.45898 13.1162C4.45215 13.1025 4.45215 13.0957 4.45898 13.0615L5.75781 9.39062C5.87402 9.05566 5.83301 8.84375 5.52539 8.63867L2.3125 6.4375C2.28516 6.42383 2.27148 6.41016 2.27832 6.38965C2.29199 6.37598 2.30566 6.36914 2.33984 6.36914L6.22949 6.45801C6.58496 6.47168 6.7627 6.35547 6.86523 6.01367L7.96582 2.28125C7.97266 2.24023 7.98633 2.2334 8 2.2334C8.02051 2.2334 8.02734 2.24023 8.04102 2.28125L9.13477 6.01367C9.2373 6.35547 9.42188 6.47168 9.77051 6.45801L13.6602 6.36914C13.7012 6.36914 13.7148 6.37598 13.7217 6.38965C13.7285 6.41016 13.7217 6.41699 13.6875 6.4375L10.4814 8.63867C10.167 8.85059 10.126 9.05566 10.2422 9.39062L11.541 13.0615C11.5547 13.0957 11.5547 13.1025 11.541 13.1162C11.5273 13.1367 11.5137 13.123 11.4863 13.1094L8.40332 10.7305C8.12305 10.5117 7.87695 10.5117 7.60352 10.7305L4.52051 13.1094C4.49316 13.123 4.47266 13.1367 4.45898 13.1162Z"})})},82825:(e,t,o)=>{o.d(t,{S:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("timeBy",{viewBox:"0 0 30 30",svg:(0,n.jsx)("path",{d:"M14 25H16V15H14C13.919 15.164 13.209 15.698 12 15.909V17.94C12.743 17.85 13.416 17.652 14 17.388V25ZM25 4C25 2.343 23.657 1 22 1C20.343 1 19 2.343 19 4H11C11 2.343 9.657 1 8 1C6.343 1 5 2.343 5 4H1V29H29V4H25ZM21 4C21 3.449 21.448 3 22 3C22.552 3 23 3.449 23 4V6C23 6.551 22.552 7 22 7C21.448 7 21 6.551 21 6V4ZM7 4C7 3.449 7.448 3 8 3C8.552 3 9 3.449 9 4V6C9 6.551 8.552 7 8 7C7.448 7 7 6.551 7 6V4ZM27 27H3V13H27V27ZM27 11H3V6H5C5 7.657 6.343 9 8 9C9.657 9 11 7.657 11 6H19C19 7.657 20.343 9 22 9C23.657 9 25 7.657 25 6H27V11Z"})})},37888:(e,t,o)=>{o.d(t,{U:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("unlocked",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M2.49023 14.7227H8.89551C9.94824 14.7227 10.4746 14.1963 10.4746 13.0479V8.20801C10.4746 7.22363 10.085 6.69727 9.29883 6.57422V4.83105C9.29883 3.22461 10.3174 2.35645 11.541 2.35645C12.7646 2.35645 13.79 3.22461 13.79 4.83105V6.28711C13.79 6.76562 14.0703 7.01855 14.4395 7.01855C14.8018 7.01855 15.082 6.7793 15.082 6.28711V4.96094C15.082 2.36328 13.3525 1.1123 11.541 1.1123C9.72949 1.1123 8 2.36328 8 4.96094V6.54004H2.49023C1.43066 6.54004 0.911133 7.06641 0.911133 8.20801V13.0479C0.911133 14.1963 1.43066 14.7227 2.49023 14.7227ZM2.68848 13.5059C2.3877 13.5059 2.2373 13.3623 2.2373 13V8.25586C2.2373 7.89355 2.3877 7.76367 2.68848 7.76367H8.7041C9.00488 7.76367 9.14844 7.89355 9.14844 8.25586V13C9.14844 13.3623 9.00488 13.5059 8.7041 13.5059H2.68848ZM7.99316 21.1123C6.5918 21.1123 5.2793 21.8779 4.75293 23.375L5.78516 24.4141C5.94922 23.0811 6.87891 22.3564 7.99316 22.3564C9.2168 22.3564 10.2422 23.2246 10.2422 24.8311V26.54H7.9248L9.1416 27.7637H11.0078C11.3086 27.7637 11.4521 27.8936 11.4521 28.2559V30.0742L12.7783 31.4072V28.208C12.7783 27.2031 12.3682 26.6768 11.541 26.5674V24.9609C11.541 22.3633 9.81152 21.1123 7.99316 21.1123ZM13.749 35.126C13.9609 35.3379 14.3164 35.3379 14.5215 35.126C14.7266 34.9072 14.7334 34.5723 14.5215 34.3535L2.46973 22.3154C2.25781 22.1035 1.90918 22.0967 1.69043 22.3154C1.48535 22.5205 1.48535 22.876 1.69043 23.0811L13.749 35.126ZM4.79395 34.7227H11.1992C11.5 34.7227 11.7598 34.6816 11.9785 34.5928L10.8711 33.4922C10.8096 33.499 10.7549 33.5059 10.6865 33.5059H4.99219C4.69141 33.5059 4.54102 33.3623 4.54102 33V28.2559C4.54102 27.9004 4.68457 27.7637 4.97852 27.7637H5.14258L4.04883 26.6631C3.48828 26.8818 3.21484 27.3809 3.21484 28.208V33.0479C3.21484 34.1963 3.73438 34.7227 4.79395 34.7227Z"})})},69619:(e,t,o)=>{o.d(t,{T:()=>a});o(67294);var r=o(45238),n=o(85893);const a=(0,r.I)("unsync",{viewBox:"0 0 30 30",svg:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.768 23.295l1.353 1.351a11.298 11.298 0 01-6.118 1.81c-5.862 0-10.781-4.538-11.387-10.254h-1.55c-.809 0-1.011-.55-.573-1.168l2.516-3.572c.37-.527.91-.516 1.269 0l2.515 3.583c.427.606.225 1.157-.572 1.157H5.536a9.496 9.496 0 009.467 8.344c1.74 0 3.366-.454 4.765-1.251zM10.233 6.723l-1.361-1.36a11.26 11.26 0 016.131-1.818c5.851 0 10.782 4.548 11.388 10.265h1.539c.808 0 1.021.539.572 1.167l-2.504 3.572c-.37.528-.91.516-1.27 0l-2.515-3.583c-.427-.617-.224-1.156.573-1.156h1.673a9.503 9.503 0 00-9.456-8.356 9.55 9.55 0 00-4.77 1.27z"}),(0,n.jsx)("path",{d:"M27.067 28.551c.41.41 1.094.41 1.49 0 .41-.41.41-1.08 0-1.49L2.937 1.454a1.06 1.06 0 00-1.505 0c-.396.396-.396 1.08 0 1.49l25.635 25.607z"})]})})}}]);