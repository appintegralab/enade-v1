import{j as te,n as C,k as f,w as E,p as x,aa as H,ab as j,i as A,T as ae,m as oe,l as ne,H as ie}from"./index.76e27e00.js";import{u as le,v as q,a as se,b as re,c as ue,r as D,s as ce,d as M,p as L,e as de}from"./QMenu.6f04a9e2.js";import{b as fe,c as ve,d as he,e as me,f as ge,h as Te,i as ye,j as pe,g as be}from"./QToolbar.c6373b50.js";var Oe=te({name:"QTooltip",inheritAttrs:!1,props:{...le,...fe,...ve,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:se},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...he],setup(e,{slots:Q,emit:y,attrs:v}){let i,l;const h=oe(),{proxy:{$q:o}}=h,s=C(null),r=C(!1),W=f(()=>L(e.anchor,o.lang.rtl)),N=f(()=>L(e.self,o.lang.rtl)),R=f(()=>e.persistent!==!0),{registerTick:_,removeTick:p}=me(),{registerTimeout:d,removeTimeout:m}=ge(),{transition:B,transitionStyle:I}=Te(e,r),{localScrollTarget:b,changeScrollEvent:U,unconfigureScrollTarget:V}=re(e,O),{anchorEl:a,canShow:$,anchorEvents:u}=ue({showing:r,configureAnchorEl:Y}),{show:z,hide:g}=ye({showing:r,canShow:$,handleShow:G,handleHide:J,hideOnRouteChange:R,processOnMount:!0});Object.assign(u,{delayShow:K,delayHide:X});const{showPortal:S,hidePortal:P,renderPortal:F}=pe(h,s,ee);if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ie(n),!0}},T=f(()=>e.modelValue===null&&e.persistent!==!0&&r.value===!0);E(T,n=>{(n===!0?de:D)(t)}),x(()=>{D(t)})}function G(t){p(),m(),S(),_(()=>{l=new MutationObserver(()=>c()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),c(),O()}),i===void 0&&(i=E(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,c)),d(()=>{S(!0),y("show",t)},e.transitionDuration)}function J(t){p(),m(),P(),w(),d(()=>{P(!0),y("hide",t)},e.transitionDuration)}function w(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),V(),H(u,"tooltipTemp")}function c(){const t=s.value;a.value===null||!t||ce({el:t,offset:e.offset,anchorEl:a.value,anchorOrigin:W.value,selfOrigin:N.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function K(t){if(o.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const T=a.value,n=["touchmove","touchcancel","touchend","click"].map(k=>[T,k,"delayHide","passiveCapture"]);j(u,"tooltipTemp",n)}d(()=>{z(t)},e.delay)}function X(t){m(),o.platform.is.mobile===!0&&(H(u,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function Y(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];j(u,"anchor",t)}function O(){if(a.value!==null||e.scrollTarget!==void 0){b.value=be(a.value,e.scrollTarget);const t=e.noParentEvent===!0?c:g;U(b.value,t)}}function Z(){return r.value===!0?A("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,I.value],role:"complementary"},ne(Q.default)):null}function ee(){return A(ae,{name:B.value,appear:!0},Z)}return x(w),Object.assign(h.proxy,{updatePosition:c}),F}});export{Oe as Q};