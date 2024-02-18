"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[227],{81575:(e,t,i)=>{i.d(t,{AK:()=>_,Mc:()=>o,OS:()=>u,Td:()=>m,Uu:()=>a,XC:()=>d,ZK:()=>g,e8:()=>p,gV:()=>l,hc:()=>f,n0:()=>C,u0:()=>v,xi:()=>c});var s=i(77472),n=i(15010),r=i(35057);function o(e){s.j(e,"add_slack_integration")}function a(e){s.j(e,"remove_slack_integration")}function d(e,t){s.j(e,"slack_notification_create",t)}function c(e,t){s.j(e,"slack_notification_delete",t)}function u(e,t){s.j(e,"slack_notification_update",t)}function l(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_render_button",{subscription_tier:i,domain_type:o,origin:t.origin,invite_flow_id:t.invite_flow_id})}function p(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_render_invite_popup",{subscription_tier:i,domain_type:o,origin:t.origin,invite_flow_id:t.invite_flow_id})}function _(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_click_invite_button",{subscription_tier:i,domain_type:o,invited_user_count:t.invited_user_count,origin:t.origin,invite_token_query:t.inviteTokenQuery,invite_targets:t.inviteTargets,invite_flow_id:t.invite_flow_id})}function v(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_completed",{subscription_tier:i,domain_type:o,invited_user_count:t.invited_user_count,is_success:t.is_success,origin:t.origin,invite_flow_id:t.invite_flow_id,error:t.error,invite_stage:t.invite_stage})}function m(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_dismiss_popup",{subscription_tier:i,domain_type:o,origin:t.origin,invite_flow_id:t.invite_flow_id})}function f(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_click_select_all",{subscription_tier:i,domain_type:o,origin:t.origin,invite_flow_id:t.invite_flow_id,invited_user_count:t.invited_user_count,is_unselect:t.is_unselect,invite_token_query:t.invite_token_query})}function C(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_start_slack_integration",{subscription_tier:i,domain_type:o,origin:t.origin,invite_flow_id:t.invite_flow_id,from:t.from})}function g(e,t){const i=r.zt(),o=n.JF();s.j(e,"slack_imports_invite_complete_slack_integration",{subscription_tier:i,domain_type:o,origin:t.origin,invite_flow_id:t.invite_flow_id,from:t.from,is_success:t.is_success})}},86125:(e,t,i)=>{i.d(t,{Z:()=>o});i(67294);var s=i(9291),n=i(74136),r=i(85893);function o(e){return(0,r.jsx)(n.Z,{...e,children:"membership_admin"===e.role?(0,r.jsx)(s.FormattedMessage,{id:"spacePermissionsSettings.user.membershipAdmin",defaultMessage:"Membership admin"}):(0,r.jsx)(s.FormattedMessage,{id:"spacePermissionsSettings.user.workspaceOwner",defaultMessage:"Workspace owner"})})}},21752:(e,t,i)=>{i.d(t,{K:()=>f,Z:()=>C});i(67294);var s=i(86628),n=i(54368),r=i(77420),o=i(19889),a=i(97880),d=i(9291),c=i(86125),u=i(88198),l=i(70301),p=i(64369),_=i(45653),v=i(85893);function m(e){const{actorStore:t,avatar:i,isLarge:s}=e,d=s?32:28;return t?t.table===r.cZ?(0,v.jsx)(l.Z,{botStore:t,size:d}):t.table===o.KJ?(0,v.jsx)(_.Z,{userStore:t,size:d}):t.table===n.y?(0,v.jsx)(_.Z,{userStore:void 0,size:d}):void(0,a.t1)(t):i?(0,v.jsx)(_.Z,{avatar:i,size:d}):(0,v.jsx)(_.Z,{userStore:void 0,size:d})}function f(e){return"membership_admin"===e?"membership_admin":"editor"===e||"admin"===e?"admin":"none"===e||"guest"===e?"guest":"team_level_guest"===e?"team_level_guest":void("member"!==e&&"read_and_write"!==e&&"no_access"!==e&&"not_in_space"!==e&&e&&(0,a.t1)(e))}const C=function(e){window.__c={n:"CellMemberAvatar"};const t=(0,d.useIntl)(),{actorStore:i,avatar:n,containerStyle:r,id:o,spaceRole:a,avatarBadge:l,caption:_,isLarge:f}=e,C="admin"===a||"membership_admin"===a,g="guest"===a||"team_level_guest"===a,h=(0,s.VK)((()=>i?i.getDisplayName(t):null==n?void 0:n.name),[i,n,t]),b=(0,s.VK)((()=>Boolean(_)?_:i?i.getDetail():null==n?void 0:n.email),[_,i,n]);return(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",maxWidth:f?"unset":300,marginLeft:f?2:0,...r},children:[(0,v.jsxs)("div",{style:{position:"relative",...!f&&{height:28,width:28}},children:[(0,v.jsx)(m,{actorStore:i,avatar:n,isLarge:f}),l]}),(0,v.jsxs)("div",{style:{minWidth:0,marginLeft:f?10:6,marginRight:f?10:6},children:[(0,v.jsxs)("div",{id:o,style:{display:"flex",gap:4},children:[(0,v.jsx)(p.Z,{className:"notranslate",children:h}),C&&(0,v.jsx)(c.Z,{role:a}),g&&(0,v.jsx)(u.b,{labelType:a})]}),(0,v.jsx)(p.Z,{isSmall:!0,style:{display:"flex"},children:(0,v.jsx)(p.Z,{isSmall:!0,children:b})})]})]})}},26907:(e,t,i)=>{i.d(t,{B:()=>r,H:()=>s});const s=e=>{const{target:t,inviteTargetsStore:i}=e;return i.state.inviteTargets.some((e=>"newUser"===t.type?e.type===t.type&&t.value.email===e.value.email:"invalidUser"===t.type?e.type===t.type&&t.value.text===e.value.text:e.type===t.type&&e.value.id===t.value.id))};function n(e){return"invalidUser"!==e.type}const r=e=>{const{inviteTargetsStore:t}=e,{inviteTargets:i}=t.state;return i.filter(n)}},85834:(e,t,i)=>{i.d(t,{TG:()=>o,ZP:()=>d,uq:()=>r});var s=i(49085),n=i(4615);let r=function(e){return e.workspace_member="workspace_member",e.request_workspace_member="request_workspace_member",e.page_guest="page_guest",e.closed="closed",e}({}),o=function(e){return e[e.closed=0]="closed",e[e.share_page=1]="share_page",e[e.share_workspace=2]="share_workspace",e[e.request_workspace=3]="request_workspace",e}({});class a extends s.default{getInitialState(){return{inviteStage:o.closed,selection:r.workspace_member,order:[r.workspace_member,r.page_guest],invitedUsers:[],inviteTargets:[],invitedEmailToUserIdMap:{},flowId:(0,n.ZP)()}}startWorkspaceInvite(){this.setState({...this.state,inviteStage:o.share_workspace,order:[r.workspace_member,r.page_guest],selection:r.workspace_member})}startRequestMembership(){this.setState({...this.state,inviteStage:o.request_workspace,order:[r.request_workspace_member,r.page_guest],selection:r.request_workspace_member})}hasGuests(){return this.state.invitedUsers.some((e=>e.isGuest))}getGuestEmails(){return this.state.invitedUsers.filter((e=>e.isGuest)).map((e=>e.email))}}const d=a},55899:(e,t,i)=>{i.d(t,{KU:()=>r,ZP:()=>a,fZ:()=>n});var s=i(49085);function n(e){return"existingUser"===e.type}function r(e){return"newUser"===e.type&&"email"!==e.source}class o extends s.default{getInitialState(){return{tokenQuery:"",inviteTargets:[]}}}const a=o},87199:(e,t,i)=>{i.d(t,{k:()=>s});const s=(0,i(9291).defineMessages)({paymentMethodUnverified:{id:"subscriptions.paymentMethodUnverified",defaultMessage:"Your payment is being processed. Please try again when your payment has completed."}})},44041:(e,t,i)=>{i.d(t,{y:()=>b});i(67294);var s=i(47425),n=i(9291),r=i(86572),o=i(47307),a=i(33929),d=i(52533),c=i(80444),u=i(92083),l=i(39343),p=i(87199),_=i(70060),v=i(88893),m=i(35057),f=i(88280),C=i(34583),g=i(64891),h=i(85893);const b=async function(e,t){var i;r.sA(e,{from:t.from,for_subscription_tier:t.for,addOnFeature:t.addOnFeature});if((0,m.QM)()&&["block_limit_sidebar","block_limit_settings","block_limit_banner"].includes(t.from)&&!t.addOnFeature&&(0,_.XA)(e))return void u.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0});if(!t.addOnFeature&&(0,s.QM)(t.for))return;const b=(0,d.S$)({environment:e})&&"personal"===t.for;if(e.device.isMobileNative){if("ai"===t.addOnFeature){const t=(0,d.Y2)({environment:e})?(0,h.jsx)(n.FormattedMessage,{id:"upsellActions.noIAPForAIWithExternalPurchaseOption",defaultMessage:"This workspace has used all of its free AI responses. Visit on desktop to purchase Notion AI and go unlimited."}):(0,h.jsx)(n.FormattedMessage,{id:"upsellActions.noIAPForAIWithoutExternalPurchaseOption",defaultMessage:"This workspace has used all of its free AI responses. Unfortunately, additional AI responses cannot be purchased on this platform."});return void o.showErrorMessage(t)}if(!b)return}const M=c.default.state.currentSpaceStore;if(!M)return;if(!M.canAdmin())return;await C.bi(e);const w=f.subscriptionDataStoreInstance.state;if(!w)return;if("unsubscribed_admin"!==w.type&&"subscribed_admin"!==w.type)return void(t.dontOpenPlansOnCancel||u.Z.setState({open:!0,openedFrom:"upsell",currentTab:"plans",defaultSubtab:void 0,highlightedSetting:void 0}));if(v.ri(w))return void o.showErrorMessage(a.default.formatMessage(p.k.paymentMethodUnverified));if(v.Q6(w)){const e=(0,h.jsx)(n.FormattedMessage,{id:"upsellActions.referToSalesRep",defaultMessage:"This workspace is part of a managed account. Please contact your account representative to discuss any changes to your subscription."});return void o.showErrorMessage(e)}if(b)return void(e.mobileNative&&M.id&&e.mobileNative.openUpgradeModal(M.id));if("revenueCat"===(null===(i=w.customerData)||void 0===i?void 0:i.activeSubscriptionPlatform)){const e=(0,h.jsx)(n.FormattedMessage,{id:"upsellActions.switchPlanFromInAppPurchase",defaultMessage:"You're currently subscribed through an in-app purchase with Apple. To switch plans, cancel your subscription with Apple first."});return void o.showErrorMessage(e)}const k=v.XX(w);if(t.addOnFeature&&(0,l.Fk)(k)){const e=(0,h.jsx)(n.FormattedMessage,{id:"upsellActions.noAddOnPurchaseDuringFreeTrial",defaultMessage:"Unfortunately, additional {addOn, select, ai {AI responses} other {features}} cannot be purchased while a workspace is on a free trial.",values:{addOn:t.addOnFeature}});o.showErrorMessage(e)}else{if(k&&v.MM(w))return t.addOnFeature?void g.af({environment:e,from:t.from,view:"add_ons",addOnFeature:t.addOnFeature,billingInterval:k.interval,pageSection:t.pageSection}):void g.af({environment:e,from:t.from,view:"plans",temporarySubscriptionTier:t.for,billingInterval:k.interval,pageSection:t.pageSection});{const i=(0,_.px)(e,t.for)?"ai_fifty_percent":void 0;C.I0(e,{subscriptionTier:t.for,from:t.from,addOnFeature:t.addOnFeature,coupon:i,isTrial:t.isTrial})}}}},39343:(e,t,i)=>{i.d(t,{Fk:()=>o,nx:()=>a});var s=i(30120),n=i(13991),r=i(7057);function o(e){return!(null==e||!e.trialEnd)&&e.trialEnd>=s.ou.now().toSeconds()}function a(e){const t=function(e){if(!o(e))return;const t=1e3*(null==e?void 0:e.trialEnd);return null!=e&&e.periodEnd&&e.periodEnd>=s.ou.now().toSeconds()&&e.periodEnd<t?e.periodEnd:t}(e);return t?(0,r.Yx)(t,"long",n.SP):void 0}},91315:(e,t,i)=>{i.d(t,{r:()=>r});i(67294);var s=i(45238),n=i(85893);const r=(0,s.I)("circleCheckFilled",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8zm-.886-4.165c-.267 0-.487-.11-.69-.384l-1.97-2.416a.852.852 0 01-.187-.51c0-.352.274-.643.627-.643.228 0 .4.07.596.33l1.592 2.055 3.35-5.38c.148-.236.352-.362.556-.362.345 0 .667.236.667.604 0 .173-.102.353-.196.518l-3.686 5.804c-.165.259-.393.384-.66.384z"})})},40462:(e,t,i)=>{i.d(t,{o:()=>r});i(67294);var s=i(45238),n=i(85893);const r=(0,s.I)("globe2",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM3.88477 3.76465C4.56836 3.11523 5.39551 2.61621 6.31836 2.34277C5.83301 2.82812 5.42285 3.51172 5.11523 4.3457C4.63672 4.19531 4.22656 3.99707 3.88477 3.76465ZM9.68848 2.34961C10.6045 2.62305 11.4316 3.11523 12.1084 3.76465C11.7734 4.00391 11.3633 4.19531 10.8848 4.35254C10.5771 3.51172 10.167 2.82812 9.68848 2.34961ZM8.47852 2.56836C9.0459 2.8418 9.56543 3.58008 9.93457 4.58496C9.4834 4.66699 8.99805 4.71484 8.47852 4.73535V2.56836ZM6.06543 4.58496C6.44141 3.58008 6.9541 2.8418 7.52148 2.56836V4.73535C7.00195 4.71484 6.5166 4.66699 6.06543 4.58496ZM2.05273 7.58594C2.14844 6.42383 2.58594 5.35059 3.25586 4.46875C3.67285 4.77637 4.21289 5.04297 4.8418 5.24121C4.66406 5.95215 4.54785 6.74512 4.51367 7.58594H2.05273ZM11.4863 7.58594C11.4521 6.74512 11.3359 5.95215 11.1582 5.24121C11.7871 5.04297 12.3271 4.7832 12.7373 4.46875C13.4141 5.35059 13.8516 6.42383 13.9473 7.58594H11.4863ZM5.49121 7.58594C5.52539 6.84082 5.62793 6.12988 5.78516 5.4873C6.33203 5.59668 6.91309 5.66504 7.52148 5.69238V7.58594H5.49121ZM8.47852 7.58594V5.69238C9.08691 5.66504 9.66797 5.59668 10.2148 5.4873C10.3721 6.12988 10.4746 6.84082 10.5088 7.58594H8.47852ZM2.05273 8.54297H4.51367C4.54785 9.39746 4.66406 10.1973 4.8418 10.915C4.21973 11.1133 3.68652 11.373 3.27637 11.6807C2.59277 10.792 2.14844 9.71191 2.05273 8.54297ZM5.49121 8.54297H7.52148V10.4707C6.91992 10.498 6.33203 10.5664 5.79199 10.6689C5.62793 10.0195 5.51855 9.29492 5.49121 8.54297ZM8.47852 10.4707V8.54297H10.5088C10.4814 9.29492 10.3721 10.0195 10.208 10.6689C9.66797 10.5664 9.08691 10.498 8.47852 10.4707ZM11.1582 10.915C11.3428 10.1973 11.4521 9.39746 11.4863 8.54297H13.9473C13.8516 9.71191 13.4072 10.792 12.7236 11.6807C12.3135 11.373 11.7803 11.1133 11.1582 10.915ZM8.47852 11.4277C8.99121 11.4482 9.47656 11.4961 9.9209 11.5781C9.55176 12.5625 9.03906 13.2939 8.47852 13.5605V11.4277ZM6.0791 11.5781C6.52344 11.4961 7.00879 11.4482 7.52148 11.4277V13.5605C6.96094 13.2939 6.44824 12.5625 6.0791 11.5781ZM3.90527 12.3848C4.24023 12.1523 4.65039 11.9609 5.12207 11.8105C5.42969 12.6309 5.83301 13.3008 6.30469 13.7793C5.40234 13.5059 4.58203 13.0205 3.90527 12.3848ZM10.8779 11.8105C11.3496 11.9609 11.7598 12.1523 12.0947 12.3848C11.418 13.0205 10.5977 13.5059 9.69531 13.7793C10.167 13.3008 10.5703 12.6309 10.8779 11.8105Z"})})},49364:(e,t,i)=>{i.d(t,{R:()=>r});i(67294);var s=i(45238),n=i(85893);const r=(0,s.I)("openTeam",{viewBox:"0 0 28 28",svg:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{d:"M3.24121 21.4326C3.24121 22.4082 3.80371 23.0322 4.7002 23.0322H22.4629C23.3506 23.0322 23.9131 22.4082 23.9131 21.4326V10.2178C23.9131 9.24219 23.3506 8.61816 22.4629 8.61816H17.2334V5.89355C17.2334 4.91797 16.6709 4.29395 15.7832 4.29395H4.7002C3.80371 4.29395 3.24121 4.91797 3.24121 5.89355V21.4326ZM4.65625 21.1074V6.21875C4.65625 5.86719 4.81445 5.70898 5.16602 5.70898H15.3174C15.6602 5.70898 15.8184 5.86719 15.8184 6.21875V21.1074C15.8184 21.4502 15.6602 21.6172 15.3174 21.6172H13.2959V19.0244C13.2959 18.2686 12.9619 17.917 12.2412 17.917H8.2334C7.5127 17.917 7.17871 18.2686 7.17871 19.0244V21.6172H5.16602C4.81445 21.6172 4.65625 21.4502 4.65625 21.1074ZM7.31934 9.5498H9.0332C9.24414 9.5498 9.39355 9.40918 9.39355 9.18945V7.52832C9.39355 7.31738 9.24414 7.16797 9.0332 7.16797H7.31934C7.1084 7.16797 6.97656 7.31738 6.97656 7.52832V9.18945C6.97656 9.40918 7.1084 9.5498 7.31934 9.5498ZM11.4414 9.5498H13.1465C13.3574 9.5498 13.5068 9.40918 13.5068 9.18945V7.52832C13.5068 7.31738 13.3574 7.16797 13.1465 7.16797H11.4414C11.2217 7.16797 11.0898 7.31738 11.0898 7.52832V9.18945C11.0898 9.40918 11.2217 9.5498 11.4414 9.5498ZM17.2334 21.4326V10.0332H21.9971C22.3398 10.0332 22.498 10.2002 22.498 10.543V21.1074C22.498 21.4502 22.3398 21.6172 21.9971 21.6172H17.2246C17.2334 21.5557 17.2334 21.4941 17.2334 21.4326ZM7.31934 13.0303H9.0332C9.24414 13.0303 9.39355 12.8896 9.39355 12.6699V11.0088C9.39355 10.7979 9.24414 10.6484 9.0332 10.6484H7.31934C7.1084 10.6484 6.97656 10.7979 6.97656 11.0088V12.6699C6.97656 12.8896 7.1084 13.0303 7.31934 13.0303ZM11.4414 13.0303H13.1465C13.3574 13.0303 13.5068 12.8896 13.5068 12.6699V11.0088C13.5068 10.7979 13.3574 10.6484 13.1465 10.6484H11.4414C11.2217 10.6484 11.0898 10.7979 11.0898 11.0088V12.6699C11.0898 12.8896 11.2217 13.0303 11.4414 13.0303ZM19.1582 13.4521H20.5732C20.749 13.4521 20.8721 13.3291 20.8721 13.1533V11.7822C20.8721 11.6064 20.749 11.4834 20.5732 11.4834H19.1582C18.9736 11.4834 18.8682 11.6064 18.8682 11.7822V13.1533C18.8682 13.3291 18.9736 13.4521 19.1582 13.4521ZM7.31934 16.5107H9.0332C9.24414 16.5107 9.39355 16.3613 9.39355 16.1504V14.4893C9.39355 14.2695 9.24414 14.1289 9.0332 14.1289H7.31934C7.1084 14.1289 6.97656 14.2695 6.97656 14.4893V16.1504C6.97656 16.3613 7.1084 16.5107 7.31934 16.5107ZM11.4414 16.5107H13.1465C13.3574 16.5107 13.5068 16.3613 13.5068 16.1504V14.4893C13.5068 14.2695 13.3574 14.1289 13.1465 14.1289H11.4414C11.2217 14.1289 11.0898 14.2695 11.0898 14.4893V16.1504C11.0898 16.3613 11.2217 16.5107 11.4414 16.5107ZM19.1582 16.8096H20.5732C20.749 16.8096 20.8721 16.6865 20.8721 16.5107V15.1396C20.8721 14.9639 20.749 14.8408 20.5732 14.8408H19.1582C18.9736 14.8408 18.8682 14.9639 18.8682 15.1396V16.5107C18.8682 16.6865 18.9736 16.8096 19.1582 16.8096ZM19.1582 20.167H20.5732C20.749 20.167 20.8721 20.0439 20.8721 19.8682V18.4971C20.8721 18.3213 20.749 18.1982 20.5732 18.1982H19.1582C18.9736 18.1982 18.8682 18.3213 18.8682 18.4971V19.8682C18.8682 20.0439 18.9736 20.167 19.1582 20.167ZM8.33008 19.3496C8.33008 19.165 8.42676 19.0684 8.61133 19.0684H11.8633C12.0566 19.0684 12.1445 19.165 12.1445 19.3496V21.6172H8.33008V19.3496Z"})})})},22686:(e,t,i)=>{i.d(t,{f:()=>r});i(67294);var s=i(45238),n=i(85893);const r=(0,s.I)("person",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,i)=>{i.d(t,{X:()=>r});i(67294);var s=i(45238),n=i(85893);const r=(0,s.I)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,n.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,n.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})},80503:(e,t,i)=>{i.d(t,{Aj:()=>n,R6:()=>o,TT:()=>s,br:()=>r,u3:()=>a});const s=52,n=45,r=37;function o(e){return e?r:n}function a(e){return 2*o(e)}}}]);