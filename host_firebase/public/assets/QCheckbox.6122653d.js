import{n as z,E as D,k as l,i as n,B as F,l as Q,D as T,m as E,ao as u,H as x,j as H,s as M}from"./index.76e27e00.js";import{a as N,u as R}from"./use-dark.af351cf8.js";import{t as K,v as L,u as G,w as J}from"./QToolbar.c6373b50.js";const U={...R,...T,...G,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(a,v){const{props:e,slots:c,emit:i,proxy:m}=E(),{$q:V}=m,_=N(e,V),g=z(null),{refocusTargetEl:k,refocusTarget:q}=K(e,g),I=D(e,L),s=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),f=l(()=>{const t=u(e.val);return s.value===!0?e.modelValue.findIndex(r=>u(r)===t):-1}),o=l(()=>s.value===!0?f.value>-1:u(e.modelValue)===u(e.trueValue)),d=l(()=>s.value===!0?f.value===-1:u(e.modelValue)===u(e.falseValue)),h=l(()=>o.value===!1&&d.value===!1),C=l(()=>e.disable===!0?-1:e.tabindex||0),S=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(_.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),y=l(()=>{const t=o.value===!0?"truthy":d.value===!0?"falsy":"indet",r=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?o.value===!0:d.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${r}`}),$=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{"^checked":o.value===!0?"checked":void 0,name:e.name,value:s.value===!0?e.val:e.trueValue}),t}),w=J($),B=l(()=>{const t={tabindex:C.value,role:"checkbox","aria-label":e.label,"aria-checked":h.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function b(t){t!==void 0&&(x(t),q(t)),e.disable!==!0&&i("update:modelValue",O(),t)}function O(){if(s.value===!0){if(o.value===!0){const t=e.modelValue.slice();return t.splice(f.value,1),t}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(d.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function j(t){(t.keyCode===13||t.keyCode===32)&&x(t)}function A(t){(t.keyCode===13||t.keyCode===32)&&b(t)}const P=v(o,h);return Object.assign(m,{toggle:b}),()=>{const t=P();e.disable!==!0&&w(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const r=[n("div",{class:y.value,style:I.value},t)];k.value!==null&&r.push(k.value);const p=e.label!==void 0?F(c.default,[e.label]):Q(c.default);return p!==void 0&&r.push(n("div",{class:`q-${a}__label q-anchor--skip`},p)),n("div",{ref:g,class:S.value,...B.value,onClick:b,onKeydown:j,onKeyup:A},r)}}const Y=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ae=H({name:"QCheckbox",props:U,emits:W,setup(a){function v(e,c){const i=l(()=>(e.value===!0?a.checkedIcon:c.value===!0?a.indeterminateIcon:a.uncheckedIcon)||null);return()=>i.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(M,{class:"q-checkbox__icon",name:i.value})])]:[Y]}return X("checkbox",v)}});export{ae as Q};