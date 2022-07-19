/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(n,e){if(!n)throw Hi(e)},Hi=function(n){return new Error("Firebase Database ("+i_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},bb=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ph={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(r_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bb(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},o_=function(n){const e=r_(n);return Ph.encodeByteArray(e,!0)},ja=function(n){return o_(n).replace(/\./g,"")},Au=function(n){try{return Ph.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(n){return Xr(void 0,n)}function Xr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Sb(t)||(n[t]=Xr(n[t],e[t]));return n}function Sb(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[ja(JSON.stringify(t)),ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Lh(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cb(){return typeof self=="object"&&self.self===self}function Mh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kb(){return ne().indexOf("Electron/")>=0}function Fh(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ab(){return ne().indexOf("MSAppHost/")>=0}function a_(){return i_.NODE_ADMIN===!0}function Rb(){return!Lh()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zr(){return typeof indexedDB=="object"}function Nb(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="FirebaseError";class ut extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=xb,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Db(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ut(i,a,s)}}function Db(n,e){return n.replace(Pb,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Pb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){return JSON.parse(n)}function ye(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=eo(Au(r[0])||""),t=eo(Au(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ob=function(n){const e=c_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Lb=function(n){const e=c_(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Rs(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Wa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ga(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ru(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(fp(r)&&fp(o)){if(!Ru(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function fp(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _i(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function xr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function l_(n,e){const t=new Fb(n,e);return t.subscribe.bind(t)}class Fb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ub(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ql),i.error===void 0&&(i.error=Ql),i.complete===void 0&&(i.complete=Ql);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ub(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ql(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(n,e,t,s){let i;if(s<e?i="at least "+e:s>t&&(i=t===0?"none":"no more than "+t),i){const r=n+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(r)}};function ht(n,e){return`${n} failed: ${e} argument `}function be(n,e,t,s){if(!(s&&!t)&&typeof t!="function")throw new Error(ht(n,e)+"must be a valid function.")}function pp(n,e,t,s){if(!(s&&!t)&&(typeof t!="object"||t===null))throw new Error(ht(n,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fc=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ot;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qb(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bb(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bb(n){return n===us?void 0:n}function qb(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new u_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=[];var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const d_={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},$b=j.INFO,jb={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Wb=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=jb[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qi{constructor(e){this.name=e,this._logLevel=$b,this._logHandler=Wb,this._userLogHandler=null,Uh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}function Gb(n){Uh.forEach(e=>{e.setLogLevel(n)})}function Kb(n,e){for(const t of Uh){let s=null;e&&e.level&&(s=d_[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,r,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");r>=(s!=null?s:i.logLevel)&&n({level:j[r].toLowerCase(),message:a,args:o,type:i.name})}}}const zb=(n,e)=>e.some(t=>n instanceof t);let gp,mp;function Hb(){return gp||(gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qb(){return mp||(mp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f_=new WeakMap,Nu=new WeakMap,p_=new WeakMap,Yl=new WeakMap,Vh=new WeakMap;function Yb(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(On(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&f_.set(t,n)}).catch(()=>{}),Vh.set(e,n),e}function Jb(n){if(Nu.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Nu.set(n,e)}let xu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Nu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||p_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return On(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xb(n){xu=n(xu)}function Zb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Jl(this),e,...t);return p_.set(s,e.sort?e.sort():[e]),On(s)}:Qb().includes(n)?function(...e){return n.apply(Jl(this),e),On(f_.get(this))}:function(...e){return On(n.apply(Jl(this),e))}}function eT(n){return typeof n=="function"?Zb(n):(n instanceof IDBTransaction&&Jb(n),zb(n,Hb())?new Proxy(n,xu):n)}function On(n){if(n instanceof IDBRequest)return Yb(n);if(Yl.has(n))return Yl.get(n);const e=eT(n);return e!==n&&(Yl.set(n,e),Vh.set(e,n)),e}const Jl=n=>Vh.get(n);function tT(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=On(o);return s&&o.addEventListener("upgradeneeded",c=>{s(On(o.result),c.oldVersion,c.newVersion,On(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const nT=["get","getKey","getAll","getAllKeys","count"],sT=["put","add","delete","clear"],Xl=new Map;function _p(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xl.get(e))return Xl.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=sT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||nT.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Xl.set(e,r),r}Xb(n=>({...n,get:(e,t,s)=>_p(e,t)||n.get(e,t,s),has:(e,t)=>!!_p(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function rT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Du="@firebase/app",yp="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Qi("@firebase/app"),oT="@firebase/app-compat",aT="@firebase/analytics-compat",cT="@firebase/analytics",lT="@firebase/app-check-compat",uT="@firebase/app-check",hT="@firebase/auth",dT="@firebase/auth-compat",fT="@firebase/database",pT="@firebase/database-compat",gT="@firebase/functions",mT="@firebase/functions-compat",_T="@firebase/installations",yT="@firebase/installations-compat",vT="@firebase/messaging",wT="@firebase/messaging-compat",IT="@firebase/performance",ET="@firebase/performance-compat",bT="@firebase/remote-config",TT="@firebase/remote-config-compat",ST="@firebase/storage",CT="@firebase/storage-compat",kT="@firebase/firestore",AT="@firebase/firestore-compat",RT="firebase",NT="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]",xT={[Du]:"fire-core",[oT]:"fire-core-compat",[cT]:"fire-analytics",[aT]:"fire-analytics-compat",[uT]:"fire-app-check",[lT]:"fire-app-check-compat",[hT]:"fire-auth",[dT]:"fire-auth-compat",[fT]:"fire-rtdb",[pT]:"fire-rtdb-compat",[gT]:"fire-fn",[mT]:"fire-fn-compat",[_T]:"fire-iid",[yT]:"fire-iid-compat",[vT]:"fire-fcm",[wT]:"fire-fcm-compat",[IT]:"fire-perf",[ET]:"fire-perf-compat",[bT]:"fire-rc",[TT]:"fire-rc-compat",[ST]:"fire-gcs",[CT]:"fire-gcs-compat",[kT]:"fire-fst",[AT]:"fire-fst-compat","fire-js":"fire-js",[RT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Map,to=new Map;function Ka(n,e){try{n.container.addComponent(e)}catch(t){Bh.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function g_(n,e){n.container.addOrOverwriteComponent(e)}function Jt(n){const e=n.name;if(to.has(e))return Bh.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,n);for(const t of Vn.values())Ka(t,n);return!0}function m_(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function DT(n,e,t=Ns){m_(n,e).clearInstance(t)}function PT(){to.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Bn=new Js("app","Firebase",OT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=NT;function __(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Ns,automaticDataCollectionEnabled:!1},e),s=t.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});const i=Vn.get(s);if(i){if(Ru(n,i.options)&&Ru(t,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const r=new h_(s);for(const a of to.values())r.addComponent(a);const o=new LT(n,t,r);return Vn.set(s,o),o}function MT(n=Ns){const e=Vn.get(n);if(!e)throw Bn.create("no-app",{appName:n});return e}function FT(){return Array.from(Vn.values())}async function y_(n){const e=n.name;Vn.has(e)&&(Vn.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function dt(n,e,t){var s;let i=(s=xT[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bh.warn(a.join(" "));return}Jt(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function v_(n,e){if(n!==null&&typeof n!="function")throw Bn.create("invalid-log-argument");Kb(n,e)}function w_(n){Gb(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebase-heartbeat-database",VT=1,no="firebase-heartbeat-store";let Zl=null;function I_(){return Zl||(Zl=tT(UT,VT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(no)}}}).catch(n=>{throw Bn.create("storage-open",{originalErrorMessage:n.message})})),Zl}async function BT(n){var e;try{return(await I_()).transaction(no).objectStore(no).get(E_(n))}catch(t){throw Bn.create("storage-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message})}}async function vp(n,e){var t;try{const i=(await I_()).transaction(no,"readwrite");return await i.objectStore(no).put(e,E_(n)),i.done}catch(s){throw Bn.create("storage-set",{originalErrorMessage:(t=s)===null||t===void 0?void 0:t.message})}}function E_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=1024,$T=30*24*60*60*1e3;class jT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=$T}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wp(),{heartbeatsToSend:t,unsentEntries:s}=WT(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wp(){return new Date().toISOString().substring(0,10)}function WT(n,e=qT){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ip(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ip(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zr()?Nb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return vp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return vp(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ip(n){return ja(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n){Jt(new st("platform-logger",e=>new iT(e),"PRIVATE")),Jt(new st("heartbeat",e=>new jT(e),"PRIVATE")),dt(Du,yp,n),dt(Du,yp,"esm2017"),dt("fire-js","")}KT("");var zT=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:yn,_DEFAULT_ENTRY_NAME:Ns,_addComponent:Ka,_addOrOverwriteComponent:g_,_apps:Vn,_clearComponents:PT,_components:to,_getProvider:m_,_registerComponent:Jt,_removeServiceInstance:DT,deleteApp:y_,getApp:MT,getApps:FT,initializeApp:__,onLog:v_,registerVersion:dt,setLogLevel:w_,FirebaseError:ut},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t){this._delegate=e,this.firebase=t,Ka(e,new st("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),y_(this._delegate)))}_getService(e,t=Ns){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ns){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ka(this._delegate,e)}_addOrOverwriteComponent(e){g_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ep=new Js("app-compat","Firebase",QT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){const e={},t={__esModule:!0,initializeApp:r,app:i,registerVersion:dt,setLogLevel:w_,onLog:v_,apps:null,SDK_VERSION:yn,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:zT}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(l){delete e[l]}function i(l){if(l=l||Ns,!vt(e,l))throw Ep.create("no-app",{appName:l});return e[l]}i.App=n;function r(l,u={}){const h=__(l,u);if(vt(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(Jt(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Ep.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Xr(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){const n=YT(HT);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:b_,extendNamespace:e,createSubscribe:l_,ErrorFactory:Js,deepExtend:Xr});function e(t){Xr(n,t)}return n}const JT=b_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=new Qi("@firebase/app-compat"),XT="@firebase/app-compat",ZT="0.1.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(n){dt(XT,ZT,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Cb()&&self.firebase!==void 0){bp.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&bp.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Nt=JT;eS();var tS="firebase",nS="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.registerVersion(tS,nS,"app-compat");var sS=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},C,qh=qh||{},O=sS||self;function za(){}function Pu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Vo(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function iS(n){return Object.prototype.hasOwnProperty.call(n,eu)&&n[eu]||(n[eu]=++rS)}var eu="closure_uid_"+(1e9*Math.random()>>>0),rS=0;function oS(n,e,t){return n.call.apply(n.bind,arguments)}function aS(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ve(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=oS:Ve=aS,Ve.apply(null,arguments)}function va(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function je(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Xn(){this.s=this.s,this.o=this.o}var cS=0;Xn.prototype.s=!1;Xn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),cS!=0)&&iS(this)};Xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T_=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},S_=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const s=n.length,i=typeof n=="string"?n.split(""):n;for(let r=0;r<s;r++)r in i&&e.call(t,i[r],r,n)};function lS(n){e:{var e=e0;const t=n.length,s=typeof n=="string"?n.split(""):n;for(let i=0;i<t;i++)if(i in s&&e.call(void 0,s[i],i,n)){e=i;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Tp(n){return Array.prototype.concat.apply([],arguments)}function $h(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Ha(n){return/^[\s\xa0]*$/.test(n)}var Sp=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Xe(n,e){return n.indexOf(e)!=-1}function tu(n,e){return n<e?-1:n>e?1:0}var Ze;e:{var Cp=O.navigator;if(Cp){var kp=Cp.userAgent;if(kp){Ze=kp;break e}}Ze=""}function jh(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function C_(n){const e={};for(const t in n)e[t]=n[t];return e}var Ap="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k_(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<Ap.length;r++)t=Ap[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Wh(n){return Wh[" "](n),n}Wh[" "]=za;function uS(n){var e=fS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var hS=Xe(Ze,"Opera"),Ri=Xe(Ze,"Trident")||Xe(Ze,"MSIE"),A_=Xe(Ze,"Edge"),Ou=A_||Ri,R_=Xe(Ze,"Gecko")&&!(Xe(Ze.toLowerCase(),"webkit")&&!Xe(Ze,"Edge"))&&!(Xe(Ze,"Trident")||Xe(Ze,"MSIE"))&&!Xe(Ze,"Edge"),dS=Xe(Ze.toLowerCase(),"webkit")&&!Xe(Ze,"Edge");function N_(){var n=O.document;return n?n.documentMode:void 0}var Qa;e:{var nu="",su=function(){var n=Ze;if(R_)return/rv:([^\);]+)(\)|;)/.exec(n);if(A_)return/Edge\/([\d\.]+)/.exec(n);if(Ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(dS)return/WebKit\/(\S+)/.exec(n);if(hS)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(su&&(nu=su?su[1]:""),Ri){var iu=N_();if(iu!=null&&iu>parseFloat(nu)){Qa=String(iu);break e}}Qa=nu}var fS={};function pS(){return uS(function(){let n=0;const e=Sp(String(Qa)).split("."),t=Sp("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=tu(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||tu(i[2].length==0,r[2].length==0)||tu(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Lu;if(O.document&&Ri){var Rp=N_();Lu=Rp||parseInt(Qa,10)||void 0}else Lu=void 0;var gS=Lu,mS=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{O.addEventListener("test",za,e),O.removeEventListener("test",za,e)}catch{}return n}();function Ge(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};function so(n,e){if(Ge.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(R_){e:{try{Wh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:_S[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&so.Z.h.call(this)}}je(so,Ge);var _S={2:"touch",3:"pen",4:"mouse"};so.prototype.h=function(){so.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Bo="closure_listenable_"+(1e6*Math.random()|0),yS=0;function vS(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ia=i,this.key=++yS,this.ca=this.fa=!1}function Uc(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function Vc(n){this.src=n,this.g={},this.h=0}Vc.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Fu(n,e,s,i);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new vS(e,this.src,r,!!s,i),e.fa=t,n.push(e)),e};function Mu(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=T_(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Uc(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Fu(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ca&&r.listener==e&&r.capture==!!t&&r.ia==s)return i}return-1}var Gh="closure_lm_"+(1e6*Math.random()|0),ru={};function x_(n,e,t,s,i){if(s&&s.once)return P_(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)x_(n,e[r],t,s,i);return null}return t=Hh(t),n&&n[Bo]?n.N(e,t,Vo(s)?!!s.capture:!!s,i):D_(n,e,t,!1,s,i)}function D_(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=Vo(i)?!!i.capture:!!i,a=zh(n);if(a||(n[Gh]=a=new Vc(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=wS(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)mS||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(L_(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function wS(){function n(t){return e.call(n.src,n.listener,t)}var e=IS;return n}function P_(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)P_(n,e[r],t,s,i);return null}return t=Hh(t),n&&n[Bo]?n.O(e,t,Vo(s)?!!s.capture:!!s,i):D_(n,e,t,!0,s,i)}function O_(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)O_(n,e[r],t,s,i);else s=Vo(s)?!!s.capture:!!s,t=Hh(t),n&&n[Bo]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Fu(r,t,s,i),-1<t&&(Uc(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=zh(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Fu(e,t,s,i)),(t=-1<n?e[n]:null)&&Kh(t))}function Kh(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[Bo])Mu(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(L_(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=zh(e))?(Mu(t,n),t.h==0&&(t.src=null,e[Gh]=null)):Uc(n)}}}function L_(n){return n in ru?ru[n]:ru[n]="on"+n}function IS(n,e){if(n.ca)n=!0;else{e=new so(e,this);var t=n.listener,s=n.ia||n.src;n.fa&&Kh(n),n=t.call(s,e)}return n}function zh(n){return n=n[Gh],n instanceof Vc?n:null}var ou="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hh(n){return typeof n=="function"?n:(n[ou]||(n[ou]=function(e){return n.handleEvent(e)}),n[ou])}function Re(){Xn.call(this),this.i=new Vc(this),this.P=this,this.I=null}je(Re,Xn);Re.prototype[Bo]=!0;Re.prototype.removeEventListener=function(n,e,t,s){O_(this,n,e,t,s)};function Be(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Ge(e,n);else if(e instanceof Ge)e.target=e.target||n;else{var i=e;e=new Ge(s,n),k_(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=wa(o,s,!0,e)&&i}if(o=e.g=n,i=wa(o,s,!0,e)&&i,i=wa(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=wa(o,s,!1,e)&&i}Re.prototype.M=function(){if(Re.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Uc(t[s]);delete n.g[e],n.h--}}this.I=null};Re.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Re.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function wa(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&Mu(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Qh=O.JSON.stringify;function ES(){var n=F_;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class bS{constructor(){this.h=this.g=null}add(e,t){const s=M_.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var M_=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new TS,n=>n.reset());class TS{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function SS(n){O.setTimeout(()=>{throw n},0)}function Yh(n,e){Uu||CS(),Vu||(Uu(),Vu=!0),F_.add(n,e)}var Uu;function CS(){var n=O.Promise.resolve(void 0);Uu=function(){n.then(kS)}}var Vu=!1,F_=new bS;function kS(){for(var n;n=ES();){try{n.h.call(n.g)}catch(t){SS(t)}var e=M_;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Vu=!1}function Bc(n,e){Re.call(this),this.h=n||1,this.g=e||O,this.j=Ve(this.kb,this),this.l=Date.now()}je(Bc,Re);C=Bc.prototype;C.da=!1;C.S=null;C.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Be(this,"tick"),this.da&&(Jh(this),this.start()))}};C.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jh(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}C.M=function(){Bc.Z.M.call(this),Jh(this),delete this.g};function Xh(n,e,t){if(typeof n=="function")t&&(n=Ve(n,t));else if(n&&typeof n.handleEvent=="function")n=Ve(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:O.setTimeout(n,e||0)}function U_(n){n.g=Xh(()=>{n.g=null,n.i&&(n.i=!1,U_(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class AS extends Xn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:U_(this)}M(){super.M(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(n){Xn.call(this),this.h=n,this.g={}}je(io,Xn);var Np=[];function V_(n,e,t,s){Array.isArray(t)||(t&&(Np[0]=t.toString()),t=Np);for(var i=0;i<t.length;i++){var r=x_(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function B_(n){jh(n.g,function(e,t){this.g.hasOwnProperty(t)&&Kh(e)},n),n.g={}}io.prototype.M=function(){io.Z.M.call(this),B_(this)};io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qc(){this.g=!0}qc.prototype.Aa=function(){this.g=!1};function RS(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function NS(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function yi(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+DS(n,t)+(s?" "+s:"")})}function xS(n,e){n.info(function(){return"TIMEOUT: "+e})}qc.prototype.info=function(){};function DS(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qh(t)}catch{return e}}var Zs={},xp=null;function $c(){return xp=xp||new Re}Zs.Ma="serverreachability";function q_(n){Ge.call(this,Zs.Ma,n)}je(q_,Ge);function ro(n){const e=$c();Be(e,new q_(e))}Zs.STAT_EVENT="statevent";function $_(n,e){Ge.call(this,Zs.STAT_EVENT,n),this.stat=e}je($_,Ge);function et(n){const e=$c();Be(e,new $_(e,n))}Zs.Na="timingevent";function j_(n,e){Ge.call(this,Zs.Na,n),this.size=e}je(j_,Ge);function qo(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return O.setTimeout(function(){n()},e)}var jc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},W_={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zh(){}Zh.prototype.h=null;function Dp(n){return n.h||(n.h=n.i())}function G_(){}var $o={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ed(){Ge.call(this,"d")}je(ed,Ge);function td(){Ge.call(this,"c")}je(td,Ge);var Bu;function Wc(){}je(Wc,Zh);Wc.prototype.g=function(){return new XMLHttpRequest};Wc.prototype.i=function(){return{}};Bu=new Wc;function jo(n,e,t,s){this.l=n,this.j=e,this.m=t,this.X=s||1,this.V=new io(this),this.P=PS,n=Ou?125:void 0,this.W=new Bc(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new K_}function K_(){this.i=null,this.g="",this.h=!1}var PS=45e3,qu={},Ya={};C=jo.prototype;C.setTimeout=function(n){this.P=n};function $u(n,e,t){n.K=1,n.v=Kc(fn(e)),n.s=t,n.U=!0,z_(n,null)}function z_(n,e){n.F=Date.now(),Wo(n),n.A=fn(n.v);var t=n.A,s=n.X;Array.isArray(s)||(s=[String(s)]),ey(t.h,"t",s),n.C=0,t=n.l.H,n.h=new K_,n.g=wy(n.l,t?e:null,!n.s),0<n.O&&(n.L=new AS(Ve(n.Ia,n,n.g),n.O)),V_(n.V,n.g,"readystatechange",n.gb),e=n.H?C_(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),ro(),RS(n.j,n.u,n.A,n.m,n.X,n.s)}C.gb=function(n){n=n.target;const e=this.L;e&&on(n)==3?e.l():this.Ia(n)};C.Ia=function(n){try{if(n==this.g)e:{const u=on(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ou||this.g&&(this.h.h||this.g.ga()||Mp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ro(3):ro(2)),Gc(this);var t=this.g.ba();this.N=t;t:if(H_(this)){var s=Mp(this.g);n="";var i=s.length,r=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ys(this),Mr(this);var o="";break t}this.h.i=new O.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,NS(this.j,this.u,this.A,this.m,this.X,u,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var l=a;break t}}l=null}if(t=l)yi(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ju(this,t);else{this.i=!1,this.o=3,et(12),ys(this),Mr(this);break e}}this.U?(Q_(this,u,o),Ou&&this.i&&u==3&&(V_(this.V,this.W,"tick",this.fb),this.W.start())):(yi(this.j,this.m,o,null),ju(this,o)),u==4&&ys(this),this.i&&!this.I&&(u==4?my(this.l,this):(this.i=!1,Wo(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),ys(this),Mr(this)}}}catch{}finally{}};function H_(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function Q_(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=OS(n,t),i==Ya){e==4&&(n.o=4,et(14),s=!1),yi(n.j,n.m,null,"[Incomplete Response]");break}else if(i==qu){n.o=4,et(15),yi(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else yi(n.j,n.m,i,null),ju(n,i);H_(n)&&i!=Ya&&i!=qu&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,et(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),ud(e),e.L=!0,et(11))):(yi(n.j,n.m,t,"[Invalid Chunked Response]"),ys(n),Mr(n))}C.fb=function(){if(this.g){var n=on(this.g),e=this.g.ga();this.C<e.length&&(Gc(this),Q_(this,n,e),this.i&&n!=4&&Wo(this))}};function OS(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Ya:(t=Number(e.substring(t,s)),isNaN(t)?qu:(s+=1,s+t>e.length?Ya:(e=e.substr(s,t),n.C=s+t,e)))}C.cancel=function(){this.I=!0,ys(this)};function Wo(n){n.Y=Date.now()+n.P,Y_(n,n.P)}function Y_(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=qo(Ve(n.eb,n),e)}function Gc(n){n.B&&(O.clearTimeout(n.B),n.B=null)}C.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(xS(this.j,this.A),this.K!=2&&(ro(),et(17)),ys(this),this.o=2,Mr(this)):Y_(this,this.Y-n)};function Mr(n){n.l.G==0||n.I||my(n.l,n)}function ys(n){Gc(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Jh(n.W),B_(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function ju(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Wu(t.i,n))){if(t.I=n.N,!n.J&&Wu(t.i,n)&&t.G==3){try{var s=t.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)ec(t),Qc(t);else break e;ld(t),et(18)}}else t.ta=i[1],0<t.ta-t.U&&37500>i[2]&&t.N&&t.A==0&&!t.v&&(t.v=qo(Ve(t.ab,t),6e3));if(1>=sy(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else vs(t,11)}else if((n.J||t.g==n)&&ec(t),!Ha(e))for(i=t.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.U=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.J=l[1],t.la=l[2];const u=l[3];u!=null&&(t.ma=u,t.h.info("VER="+t.ma));const h=l[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.K=s,t.h.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.i;!r.g&&(Xe(p,"spdy")||Xe(p,"quic")||Xe(p,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(id(r,r.h),r.h=null))}if(s.D){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.sa=_,se(s.F,s.D,_))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),s=t;var o=n;if(s.oa=vy(s,s.H?s.la:null,s.W),o.J){iy(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Gc(a),Wo(a)),s.g=o}else py(s);0<t.l.length&&Yc(t)}else l[0]!="stop"&&l[0]!="close"||vs(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vs(t,7):cd(t):l[0]!="noop"&&t.j&&t.j.wa(l),t.A=0)}}ro(4)}catch{}}function LS(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(Pu(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function nd(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Pu(n)||typeof n=="string")S_(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(Pu(n)||typeof n=="string"){t=[];for(var s=n.length,i=0;i<s;i++)t.push(i)}else for(i in t=[],s=0,n)t[s++]=i;s=LS(n),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}}function Yi(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var s=0;s<t;s+=2)this.set(arguments[s],arguments[s+1])}else if(n)if(n instanceof Yi)for(t=n.T(),s=0;s<t.length;s++)this.set(t[s],n.get(t[s]));else for(s in n)this.set(s,n[s])}C=Yi.prototype;C.R=function(){sd(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};C.T=function(){return sd(this),this.g.concat()};function sd(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var s=n.g[e];xs(n.h,s)&&(n.g[t++]=s),e++}n.g.length=t}if(n.i!=n.g.length){var i={};for(t=e=0;e<n.g.length;)s=n.g[e],xs(i,s)||(n.g[t++]=s,i[s]=1),e++;n.g.length=t}}C.get=function(n,e){return xs(this.h,n)?this.h[n]:e};C.set=function(n,e){xs(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};C.forEach=function(n,e){for(var t=this.T(),s=0;s<t.length;s++){var i=t[s],r=this.get(i);n.call(e,r,i,this)}};function xs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var J_=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function MS(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ds(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof Ds){this.g=e!==void 0?e:n.g,Ja(this,n.j),this.s=n.s,Xa(this,n.i),Za(this,n.m),this.l=n.l,e=n.h;var t=new oo;t.i=e.i,e.g&&(t.g=new Yi(e.g),t.h=e.h),Pp(this,t),this.o=n.o}else n&&(t=String(n).match(J_))?(this.g=!!e,Ja(this,t[1]||"",!0),this.s=Fr(t[2]||""),Xa(this,t[3]||"",!0),Za(this,t[4]),this.l=Fr(t[5]||"",!0),Pp(this,t[6]||"",!0),this.o=Fr(t[7]||"")):(this.g=!!e,this.h=new oo(null,this.g))}Ds.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Dr(e,Op,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Dr(e,Op,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Dr(t,t.charAt(0)=="/"?qS:BS,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Dr(t,jS)),n.join("")};function fn(n){return new Ds(n)}function Ja(n,e,t){n.j=t?Fr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Xa(n,e,t){n.i=t?Fr(e,!0):e}function Za(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Pp(n,e,t){e instanceof oo?(n.h=e,WS(n.h,n.g)):(t||(e=Dr(e,$S)),n.h=new oo(e,n.g))}function se(n,e,t){n.h.set(e,t)}function Kc(n){return se(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function FS(n){return n instanceof Ds?fn(n):new Ds(n,void 0)}function US(n,e,t,s){var i=new Ds(null,void 0);return n&&Ja(i,n),e&&Xa(i,e),t&&Za(i,t),s&&(i.l=s),i}function Fr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Dr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,VS),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function VS(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Op=/[#\/\?@]/g,BS=/[#\?:]/g,qS=/[#\?]/g,$S=/[#\?@]/g,jS=/#/g;function oo(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Zn(n){n.g||(n.g=new Yi,n.h=0,n.i&&MS(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}C=oo.prototype;C.add=function(n,e){Zn(this),this.i=null,n=Ji(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function X_(n,e){Zn(n),e=Ji(n,e),xs(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,xs(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&sd(n)))}function Z_(n,e){return Zn(n),e=Ji(n,e),xs(n.g.h,e)}C.forEach=function(n,e){Zn(this),this.g.forEach(function(t,s){S_(t,function(i){n.call(e,i,s,this)},this)},this)};C.T=function(){Zn(this);for(var n=this.g.R(),e=this.g.T(),t=[],s=0;s<e.length;s++)for(var i=n[s],r=0;r<i.length;r++)t.push(e[s]);return t};C.R=function(n){Zn(this);var e=[];if(typeof n=="string")Z_(this,n)&&(e=Tp(e,this.g.get(Ji(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Tp(e,n[t])}return e};C.set=function(n,e){return Zn(this),this.i=null,n=Ji(this,n),Z_(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};C.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function ey(n,e,t){X_(n,e),0<t.length&&(n.i=null,n.g.set(Ji(n,e),$h(t)),n.h+=t.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var s=e[t],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),n.push(o)}}return this.i=n.join("&")};function Ji(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function WS(n,e){e&&!n.j&&(Zn(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(X_(this,s),ey(this,i,t))},n)),n.j=e}var GS=class{constructor(n,e){this.h=n,this.g=e}};function ty(n){this.l=n||KS,O.PerformanceNavigationTiming?(n=O.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(O.g&&O.g.Ea&&O.g.Ea()&&O.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KS=10;function ny(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function sy(n){return n.h?1:n.g?n.g.size:0}function Wu(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function id(n,e){n.g?n.g.add(e):n.h=e}function iy(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}ty.prototype.cancel=function(){if(this.i=ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ry(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return $h(n.i)}function rd(){}rd.prototype.stringify=function(n){return O.JSON.stringify(n,void 0)};rd.prototype.parse=function(n){return O.JSON.parse(n,void 0)};function zS(){this.g=new rd}function HS(n,e,t){const s=t||"";try{nd(n,function(i,r){let o=i;Vo(i)&&(o=Qh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function QS(n,e){const t=new qc;if(O.Image){const s=new Image;s.onload=va(Ia,t,s,"TestLoadImage: loaded",!0,e),s.onerror=va(Ia,t,s,"TestLoadImage: error",!1,e),s.onabort=va(Ia,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=va(Ia,t,s,"TestLoadImage: timeout",!1,e),O.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Ia(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Go(n){this.l=n.$b||null,this.j=n.ib||!1}je(Go,Zh);Go.prototype.g=function(){return new zc(this.l,this.j)};Go.prototype.i=function(n){return function(){return n}}({});function zc(n,e){Re.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=od,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(zc,Re);var od=0;C=zc.prototype;C.open=function(n,e){if(this.readyState!=od)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ao(this)};C.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||O).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=od};C.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof O.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oy(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function oy(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}C.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ko(this):ao(this),this.readyState==3&&oy(this)}};C.Ua=function(n){this.g&&(this.response=this.responseText=n,Ko(this))};C.Ta=function(n){this.g&&(this.response=n,Ko(this))};C.ha=function(){this.g&&Ko(this)};function Ko(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ao(n)}C.setRequestHeader=function(n,e){this.v.append(n,e)};C.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ao(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(zc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var YS=O.JSON.parse;function me(n){Re.call(this),this.headers=new Yi,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ay,this.K=this.L=!1}je(me,Re);var ay="",JS=/^https?$/i,XS=["POST","PUT"];C=me.prototype;C.ea=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bu.g(),this.C=this.u?Dp(this.u):Dp(Bu),this.g.onreadystatechange=Ve(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Lp(this,r);return}n=t||"";const i=new Yi(this.headers);s&&nd(s,function(r,o){i.set(o,r)}),s=lS(i.T()),t=O.FormData&&n instanceof O.FormData,!(0<=T_(XS,e))||s||t||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uy(this),0<this.B&&((this.K=ZS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.pa,this)):this.A=Xh(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Lp(this,r)}};function ZS(n){return Ri&&pS()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function e0(n){return n.toLowerCase()=="content-type"}C.pa=function(){typeof qh!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Lp(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,cy(n),Hc(n)}function cy(n){n.D||(n.D=!0,Be(n,"complete"),Be(n,"error"))}C.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Be(this,"complete"),Be(this,"abort"),Hc(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hc(this,!0)),me.Z.M.call(this)};C.Fa=function(){this.s||(this.F||this.v||this.l?ly(this):this.cb())};C.cb=function(){ly(this)};function ly(n){if(n.h&&typeof qh!="undefined"&&(!n.C[1]||on(n)!=4||n.ba()!=2)){if(n.v&&on(n)==4)Xh(n.Fa,0,n);else if(Be(n,"readystatechange"),on(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(J_)[1]||null;if(!i&&O.self&&O.self.location){var r=O.self.location.protocol;i=r.substr(0,r.length-1)}s=!JS.test(i?i.toLowerCase():"")}t=s}if(t)Be(n,"complete"),Be(n,"success");else{n.m=6;try{var o=2<on(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",cy(n)}}finally{Hc(n)}}}}function Hc(n,e){if(n.g){uy(n);const t=n.g,s=n.C[0]?za:null;n.g=null,n.C=null,e||Be(n,"ready");try{t.onreadystatechange=s}catch{}}}function uy(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(O.clearTimeout(n.A),n.A=null)}function on(n){return n.g?n.g.readyState:0}C.ba=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};C.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),YS(e)}};function Mp(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case ay:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}C.Da=function(){return this.m};C.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function t0(n){let e="";return jh(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function ad(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=t0(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):se(n,e,t))}function gr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function hy(n){this.za=0,this.l=[],this.h=new qc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=gr("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=gr("baseRetryDelayMs",5e3,n),this.$a=gr("retryDelaySeedMs",1e4,n),this.Ya=gr("forwardChannelMaxRetries",2,n),this.ra=gr("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new ty(n&&n.concurrentRequestLimit),this.Ca=new zS,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}C=hy.prototype;C.ma=8;C.G=1;function cd(n){if(dy(n),n.G==3){var e=n.V++,t=fn(n.F);se(t,"SID",n.J),se(t,"RID",e),se(t,"TYPE","terminate"),zo(n,t),e=new jo(n,n.h,e,void 0),e.K=2,e.v=Kc(fn(t)),t=!1,O.navigator&&O.navigator.sendBeacon&&(t=O.navigator.sendBeacon(e.v.toString(),"")),!t&&O.Image&&(new Image().src=e.v,t=!0),t||(e.g=wy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Wo(e)}yy(n)}C.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Qc(n){n.g&&(ud(n),n.g.cancel(),n.g=null)}function dy(n){Qc(n),n.u&&(O.clearTimeout(n.u),n.u=null),ec(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&O.clearTimeout(n.m),n.m=null)}function au(n,e){n.l.push(new GS(n.Za++,e)),n.G==3&&Yc(n)}function Yc(n){ny(n.i)||n.m||(n.m=!0,Yh(n.Ha,n),n.C=0)}function n0(n,e){return sy(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=qo(Ve(n.Ha,n,e),_y(n,n.C)),n.C++,!0)}C.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const i=new jo(this,this.h,n,void 0);let r=this.s;if(this.P&&(r?(r=C_(r),k_(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var s=this.l[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=fy(this,i,e),t=fn(this.F),se(t,"RID",n),se(t,"CVER",22),this.D&&se(t,"X-HTTP-Session-Id",this.D),zo(this,t),this.o&&r&&ad(t,this.o,r),id(this.i,i),this.Ra&&se(t,"TYPE","init"),this.ja?(se(t,"$req",e),se(t,"SID","null"),i.$=!0,$u(i,t,null)):$u(i,t,e),this.G=2}}else this.G==3&&(n?Fp(this,n):this.l.length==0||ny(this.i)||Fp(this))};function Fp(n,e){var t;e?t=e.m:t=n.V++;const s=fn(n.F);se(s,"SID",n.J),se(s,"RID",t),se(s,"AID",n.U),zo(n,s),n.o&&n.s&&ad(s,n.o,n.s),t=new jo(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=fy(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),id(n.i,t),$u(t,s,e)}function zo(n,e){n.j&&nd({},function(t,s){se(e,s,t)})}function fy(n,e,t){t=Math.min(n.l.length,t);var s=n.j?Ve(n.j.Oa,n.j,n):null;e:{var i=n.l;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{HS(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,s}function py(n){n.g||n.u||(n.Y=1,Yh(n.Ga,n),n.A=0)}function ld(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=qo(Ve(n.Ga,n),_y(n,n.A)),n.A++,!0)}C.Ga=function(){if(this.u=null,gy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=qo(Ve(this.bb,this),n)}};C.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,et(10),Qc(this),gy(this))};function ud(n){n.B!=null&&(O.clearTimeout(n.B),n.B=null)}function gy(n){n.g=new jo(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=fn(n.oa);se(e,"RID","rpc"),se(e,"SID",n.J),se(e,"CI",n.N?"0":"1"),se(e,"AID",n.U),zo(n,e),se(e,"TYPE","xmlhttp"),n.o&&n.s&&ad(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Kc(fn(e)),t.s=null,t.U=!0,z_(t,n)}C.ab=function(){this.v!=null&&(this.v=null,Qc(this),ld(this),et(19))};function ec(n){n.v!=null&&(O.clearTimeout(n.v),n.v=null)}function my(n,e){var t=null;if(n.g==e){ec(n),ud(n),n.g=null;var s=2}else if(Wu(n.i,e))t=e.D,iy(n.i,e),s=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=$c(),Be(s,new j_(s,t)),Yc(n)}else py(n);else if(i=e.o,i==3||i==0&&0<n.I||!(s==1&&n0(n,e)||s==2&&ld(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:vs(n,5);break;case 4:vs(n,10);break;case 3:vs(n,6);break;default:vs(n,2)}}}function _y(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function vs(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var s=Ve(n.jb,n);t||(t=new Ds("//www.google.com/images/cleardot.gif"),O.location&&O.location.protocol=="http"||Ja(t,"https"),Kc(t)),QS(t.toString(),s)}else et(2);n.G=0,n.j&&n.j.va(e),yy(n),dy(n)}C.jb=function(n){n?(this.h.info("Successfully pinged google.com"),et(2)):(this.h.info("Failed to ping google.com"),et(1))};function yy(n){n.G=0,n.I=-1,n.j&&((ry(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,$h(n.l),n.l.length=0),n.j.ua())}function vy(n,e,t){let s=FS(t);if(s.i!="")e&&Xa(s,e+"."+s.i),Za(s,s.m);else{const i=O.location;s=US(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,t)}return n.aa&&jh(n.aa,function(i,r){se(s,r,i)}),e=n.D,t=n.sa,e&&t&&se(s,e,t),se(s,"VER",n.ma),zo(n,s),s}function wy(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new me(new Go({ib:!0})):new me(n.qa),e.L=n.H,e}function Iy(){}C=Iy.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Oa=function(){};function tc(){if(Ri&&!(10<=Number(gS)))throw Error("Environmental error: no available transport.")}tc.prototype.g=function(n,e){return new wt(n,e)};function wt(n,e){Re.call(this),this.g=new hy(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Ha(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Xi(this)}je(wt,Re);wt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),Yh(Ve(n.hb,n,e))),et(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=vy(n,null,n.W),Yc(n)};wt.prototype.close=function(){cd(this.g)};wt.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,au(this.g,e)}else this.v?(e={},e.__data__=Qh(n),au(this.g,e)):au(this.g,n)};wt.prototype.M=function(){this.g.j=null,delete this.j,cd(this.g),delete this.g,wt.Z.M.call(this)};function Ey(n){ed.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}je(Ey,ed);function by(){td.call(this),this.status=1}je(by,td);function Xi(n){this.g=n}je(Xi,Iy);Xi.prototype.xa=function(){Be(this.g,"a")};Xi.prototype.wa=function(n){Be(this.g,new Ey(n))};Xi.prototype.va=function(n){Be(this.g,new by)};Xi.prototype.ua=function(){Be(this.g,"b")};tc.prototype.createWebChannel=tc.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;jc.NO_ERROR=0;jc.TIMEOUT=8;jc.HTTP_ERROR=6;W_.COMPLETE="complete";G_.EventType=$o;$o.OPEN="a";$o.CLOSE="b";$o.ERROR="c";$o.MESSAGE="d";Re.prototype.listen=Re.prototype.N;me.prototype.listenOnce=me.prototype.O;me.prototype.getLastError=me.prototype.La;me.prototype.getLastErrorCode=me.prototype.Da;me.prototype.getStatus=me.prototype.ba;me.prototype.getResponseJson=me.prototype.Qa;me.prototype.getResponseText=me.prototype.ga;me.prototype.send=me.prototype.ea;var s0=function(){return new tc},i0=function(){return $c()},cu=jc,r0=W_,o0=Zs,Up={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},a0=Go,Ea=G_,c0=me;const Vp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Qi("@firebase/firestore");function Gu(){return qn.logLevel}function l0(n){qn.setLogLevel(n)}function v(n,...e){if(qn.logLevel<=j.DEBUG){const t=e.map(hd);qn.debug(`Firestore (${Zi}): ${n}`,...t)}}function ge(n,...e){if(qn.logLevel<=j.ERROR){const t=e.map(hd);qn.error(`Firestore (${Zi}): ${n}`,...t)}}function co(n,...e){if(qn.logLevel<=j.WARN){const t=e.map(hd);qn.warn(`Firestore (${Zi}): ${n}`,...t)}}function hd(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(n="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+n;throw ge(e),new Error(e)}function D(n,e){n||k()}function u0(n,e){n||k()}function T(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class d0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class f0{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new ke;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ke,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ke)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new Ty(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new Te(e)}}class p0{constructor(e,t,s){this.type="FirstParty",this.user=Te.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class g0{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new p0(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class m0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _0{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const s=r=>{r.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(D(typeof t.token=="string"),this.p=t.token,new m0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=y0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function L(n,e){return n<e?-1:n>e?1:0}function Ni(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}function Cy(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new re(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new re(0,0))}static max(){return new x(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,s){t===void 0?t=0:t>e.length&&k(),s===void 0?s=e.length-t:s>e.length-t&&k(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class W extends lo{construct(e,t,s){return new W(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new W(t)}static emptyPath(){return new W([])}}const v0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends lo{construct(e,t,s){return new fe(e,t,s)}static isValidIdentifier(e){return v0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(W.fromString(e))}static fromName(e){return new b(W.fromString(e).popFirst(5))}static empty(){return new b(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&W.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return W.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new W(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,s,i){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=i}}function Ku(n){return n.fields.find(e=>e.kind===2)}function hs(n){return n.fields.filter(e=>e.kind!==2)}ky.UNKNOWN_ID=-1;class w0{constructor(e,t){this.fieldPath=e,this.kind=t}}class nc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new nc(0,It.min())}}function Ay(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new re(t+1,0):new re(t,s));return new It(i,b.empty(),e)}function Ry(n){return new It(n.readTime,n.key,-1)}class It{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new It(x.min(),b.empty(),-1)}static max(){return new It(x.max(),b.empty(),-1)}}function dd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=b.comparator(n.documentKey,e.documentKey),t!==0?t:L(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Ny)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof g?t:g.resolve(t)}catch(t){return g.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):g.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):g.reject(t)}static resolve(e){return new g((t,s)=>{t(e)})}static reject(e){return new g((t,s)=>{s(e)})}static waitFor(e){return new g((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=g.resolve(!1);for(const s of e)t=t.next(i=>i?g.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new g((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new g((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new ke,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new Ur(e,t.error)):this.T.resolve()},this.transaction.onerror=s=>{const i=fd(s.target.error);this.T.reject(new Ur(e,i))}}static open(e,t,s,i){try{return new Jc(t,e.transaction(i,s))}catch(r){throw new Ur(t,r)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new E0(t)}}class Pt{constructor(e,t,s){this.name=e,this.version=t,this.P=s,Pt.v(ne())===12.2&&ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),fs(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!Zr())return!1;if(Pt.S())return!0;const e=ne(),t=Pt.v(e),s=0<t&&t<10,i=Pt.D(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static S(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.C)==="YES"}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static D(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async k(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;t(o)},i.onblocked=()=>{s(new Ur(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Ur(e,o))},i.onupgradeneeded=r=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.P.O(o,i.transaction,r.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.M&&(this.db.onversionchange=t=>this.M(t)),this.db}F(e){this.M=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=Jc.open(this.db,e,r?"readonly":"readwrite",s),c=i(a).next(l=>(a.R(),l)).catch(l=>(a.abort(l),g.reject(l))).toPromise();return c.catch(()=>{}),await a.A,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class I0{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return fs(this.$.delete())}}class Ur extends y{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ts(n){return n.name==="IndexedDbTransactionError"}class E0{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),fs(s)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),fs(this.store.add(e))}get(e){return fs(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),fs(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),fs(this.store.count())}K(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const i=this.cursor(s),r=[];return this.G(i,(o,a)=>{r.push(a)}).next(()=>r)}{const i=this.store.getAll(s.range);return new g((r,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{r(a.target.result)}})}}j(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new g((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}W(e,t){v("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.H=!1;const i=this.cursor(s);return this.G(i,(r,o,a)=>a.delete())}J(e,t){let s;t?s=e:(s={},t=e);const i=this.cursor(s);return this.G(i,t)}Y(e){const t=this.cursor({});return new g((s,i)=>{t.onerror=r=>{const o=fd(r.target.error);i(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}G(e,t){const s=[];return new g((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new I0(a),l=t(a.primaryKey,a.value,c);if(l instanceof g){const u=l.catch(h=>(c.done(),g.reject(h)));s.push(u)}c.isDone?i():c.U===null?a.continue():a.continue(c.U)}}).next(()=>g.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.H?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function fs(n){return new g((e,t)=>{n.onsuccess=s=>{const i=s.target.result;e(i)},n.onerror=s=>{const i=fd(s.target.error);t(i)}})}let Bp=!1;function fd(n){const e=Pt.v(ne());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Bp||(Bp=!0,setTimeout(()=>{throw s},0)),s}}return n}class b0{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}Z(e){v("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{v("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(t){ts(t)?v("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await es(t)}await this.Z(1)})}}class T0{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.et(t,e))}et(e,t){const s=new Set;let i=t,r=!0;return g.doWhile(()=>r===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return v("IndexBackiller",`Processing collection: ${o}`),this.nt(e,o,i).next(a=>{i-=a,s.add(o)});r=!1})).next(()=>t-i)}nt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,s).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.st(i,r)).next(a=>(v("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}st(e,t){let s=e;return t.changes.forEach((i,r)=>{const o=Ry(r);dd(o,s)>0&&(s=o)}),new It(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.it(s),this.rt=s=>t.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ei(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at.ot=-1;class le{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ba(this.root,e,this.comparator,!0)}}class ba{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:Me.RED,this.left=i!=null?i:Me.EMPTY,this.right=r!=null?r:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Me(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const e=this.left.check();if(e!==this.right.check())throw k();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(n,e,t,s,i){return this}insert(n,e,t){return new Me(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $p(this.data.getIterator())}getIteratorFrom(e){return new $p(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Q(this.comparator);return t.data=e,t}}class $p{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function li(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new yt([])}unionWith(e){let t=new Q(fe.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new yt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const C0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(n){if(D(!!n),typeof n=="string"){let e=0;const t=C0.exec(n);if(D(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ps(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Py(n){const e=n.mapValue.fields.__previous_value__;return pd(e)?Py(e):e}function uo(n){const e=$n(n.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,t,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class pn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){return n==null}function ho(n){return n===0&&1/n==-1/0}function Oy(n){return typeof n=="number"&&Number.isInteger(n)&&!ho(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Oa={nullValue:"NULL_VALUE"};function Os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pd(n)?4:Ly(n)?9007199254740991:10:k()}function Xt(n,e){if(n===e)return!0;const t=Os(n);if(t!==Os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return uo(n).isEqual(uo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=$n(s.timestampValue),o=$n(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Ps(s.bytesValue).isEqual(Ps(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ce(s.doubleValue),o=ce(i.doubleValue);return r===o?ho(r)===ho(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return Ni(n.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qp(r)!==qp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Xt(r[a],o[a])))return!1;return!0}(n,e);default:return k()}}function fo(n,e){return(n.values||[]).find(t=>Xt(t,e))!==void 0}function jn(n,e){if(n===e)return 0;const t=Os(n),s=Os(e);if(t!==s)return L(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return L(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ce(i.integerValue||i.doubleValue),a=ce(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return jp(n.timestampValue,e.timestampValue);case 4:return jp(uo(n),uo(e));case 5:return L(n.stringValue,e.stringValue);case 6:return function(i,r){const o=Ps(i),a=Ps(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=L(o[c],a[c]);if(l!==0)return l}return L(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=L(ce(i.latitude),ce(r.latitude));return o!==0?o:L(ce(i.longitude),ce(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=jn(o[c],a[c]);if(l)return l}return L(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Nn.mapValue&&r===Nn.mapValue)return 0;if(i===Nn.mapValue)return 1;if(r===Nn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=L(a[u],l[u]);if(h!==0)return h;const d=jn(o[a[u]],c[l[u]]);if(d!==0)return d}return L(a.length,l.length)}(n.mapValue,e.mapValue);default:throw k()}}function jp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return L(n,e);const t=$n(n),s=$n(e),i=L(t.seconds,s.seconds);return i!==0?i:L(t.nanos,s.nanos)}function wi(n){return zu(n)}function zu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=$n(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ps(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,b.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=zu(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${zu(s.fields[a])}`;return r+"}"}(n.mapValue):k();var e,t}function Ls(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Hu(n){return!!n&&"integerValue"in n}function po(n){return!!n&&"arrayValue"in n}function Wp(n){return!!n&&"nullValue"in n}function Gp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function La(n){return!!n&&"mapValue"in n}function Vr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ei(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Vr(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ly(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function A0(n){return"nullValue"in n?Oa:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ls(pn.empty(),b.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:k()}function R0(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ls(pn.empty(),b.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Nn:k()}function Kp(n,e){const t=jn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function zp(n,e){const t=jn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!La(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vr(t)}setAll(e){let t=fe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=Vr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());La(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];La(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){ei(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Fe(Vr(this.value))}}function My(n){const e=[];return ei(n.fields,(t,s)=>{const i=new fe([t]);if(La(s)){const r=My(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,s,i,r,o){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Z(e,0,x.min(),x.min(),Fe.empty(),0)}static newFoundDocument(e,t,s){return new Z(e,1,t,x.min(),s,0)}static newNoDocument(e,t){return new Z(e,2,t,x.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new Z(e,3,t,x.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ut=null}}function Hp(n,e=null,t=[],s=[],i=null,r=null,o=null){return new N0(n,e,t,s,i,r,o)}function Ms(n){const e=T(n);if(e.ut===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+wi(i.value);var i}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ho(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>wi(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>wi(s)).join(",")),e.ut=t}return e.ut}function x0(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${wi(s.value)}`;var s}).join(", ")}]`),Ho(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>wi(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>wi(t)).join(",")),`Target(${e})`}function Qo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<n.orderBy.length;i++)if(!V0(n.orderBy[i],e.orderBy[i]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let i=0;i<n.filters.length;i++)if(t=n.filters[i],s=e.filters[i],t.op!==s.op||!t.field.isEqual(s.field)||!Xt(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xp(n.startAt,e.startAt)&&Xp(n.endAt,e.endAt)}function sc(n){return b.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ic(n,e){return n.filters.filter(t=>t instanceof Ue&&t.field.isEqual(e))}function Qp(n,e,t){let s=Oa,i=!0;for(const r of ic(n,e)){let o=Oa,a=!0;switch(r.op){case"<":case"<=":o=A0(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=Oa}Kp({value:s,inclusive:i},{value:o,inclusive:a})<0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];Kp({value:s,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}function Yp(n,e,t){let s=Nn,i=!0;for(const r of ic(n,e)){let o=Nn,a=!0;switch(r.op){case">=":case">":o=R0(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=Nn}zp({value:s,inclusive:i},{value:o,inclusive:a})>0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];zp({value:s,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}class Ue extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.ct(e,t,s):new D0(e,t,s):t==="array-contains"?new L0(e,s):t==="in"?new M0(e,s):t==="not-in"?new F0(e,s):t==="array-contains-any"?new U0(e,s):new Ue(e,t,s)}static ct(e,t,s){return t==="in"?new P0(e,s):new O0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.at(jn(t,this.value)):t!==null&&Os(this.value)===Os(t)&&this.at(jn(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return k()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class D0 extends Ue{constructor(e,t,s){super(e,t,s),this.key=b.fromName(s.referenceValue)}matches(e){const t=b.comparator(e.key,this.key);return this.at(t)}}class P0 extends Ue{constructor(e,t){super(e,"in",t),this.keys=Fy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class O0 extends Ue{constructor(e,t){super(e,"not-in",t),this.keys=Fy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fy(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>b.fromName(s.referenceValue))}class L0 extends Ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return po(t)&&fo(t.arrayValue,this.value)}}class M0 extends Ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fo(this.value.arrayValue,t)}}class F0 extends Ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(fo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!fo(this.value.arrayValue,t)}}class U0 extends Ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!po(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>fo(this.value.arrayValue,s))}}class Wn{constructor(e,t){this.position=e,this.inclusive=t}}class Ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function V0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function Jp(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),t.key):s=jn(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Uy(n,e,t,s,i,r,o,a){return new vn(n,e,t,s,i,r,o,a)}function er(n){return new vn(n)}function B0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gd(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function md(n){for(const e of n.filters)if(e.ht())return e.field;return null}function _d(n){return n.collectionGroup!==null}function xi(n){const e=T(n);if(e.lt===null){e.lt=[];const t=md(e),s=gd(e);if(t!==null&&s===null)t.isKeyField()||e.lt.push(new Ii(t)),e.lt.push(new Ii(fe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.lt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ii(fe.keyField(),r))}}}return e.lt}function kt(n){const e=T(n);if(!e.ft)if(e.limitType==="F")e.ft=Hp(e.path,e.collectionGroup,xi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of xi(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Ii(r.field,o))}const s=e.endAt?new Wn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Wn(e.startAt.position,e.startAt.inclusive):null;e.ft=Hp(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e.ft}function Vy(n,e,t){return new vn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yo(n,e){return Qo(kt(n),kt(e))&&n.limitType===e.limitType}function By(n){return`${Ms(kt(n))}|lt:${n.limitType}`}function Qu(n){return`Query(target=${x0(kt(n))}; limitType=${n.limitType})`}function yd(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):b.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of t.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=Jp(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,xi(t),s)||t.endAt&&!function(i,r,o){const a=Jp(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,xi(t),s))}(n,e)}function qy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $y(n){return(e,t)=>{let s=!1;for(const i of xi(n)){const r=q0(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function q0(n,e,t){const s=n.field.isKeyField()?b.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?jn(a,c):k()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return k()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n,e){if(n.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ho(e)?"-0":e}}function Wy(n){return{integerValue:""+n}}function Gy(n,e){return Oy(e)?Wy(e):jy(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this._=void 0}}function $0(n,e,t){return n instanceof Di?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof Fs?zy(n,e):n instanceof Us?Hy(n,e):function(s,i){const r=Ky(s,i),o=Zp(r)+Zp(s._t);return Hu(r)&&Hu(s._t)?Wy(o):jy(s.wt,o)}(n,e)}function j0(n,e,t){return n instanceof Fs?zy(n,e):n instanceof Us?Hy(n,e):t}function Ky(n,e){return n instanceof Pi?Hu(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Di extends Xc{}class Fs extends Xc{constructor(e){super(),this.elements=e}}function zy(n,e){const t=Qy(e);for(const s of n.elements)t.some(i=>Xt(i,s))||t.push(s);return{arrayValue:{values:t}}}class Us extends Xc{constructor(e){super(),this.elements=e}}function Hy(n,e){let t=Qy(e);for(const s of n.elements)t=t.filter(i=>!Xt(i,s));return{arrayValue:{values:t}}}class Pi extends Xc{constructor(e,t){super(),this.wt=e,this._t=t}}function Zp(n){return ce(n.integerValue||n.doubleValue)}function Qy(n){return po(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.field=e,this.transform=t}}function W0(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Fs&&s instanceof Fs||t instanceof Us&&s instanceof Us?Ni(t.elements,s.elements,Xt):t instanceof Pi&&s instanceof Pi?Xt(t._t,s._t):t instanceof Di&&s instanceof Di}(n.transform,e.transform)}class G0{constructor(e,t){this.version=e,this.transformResults=t}}class ae{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ae}static exists(e){return new ae(void 0,e)}static updateTime(e){return new ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zc{}function Yy(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nr(n.key,ae.none()):new tr(n.key,n.data,ae.none());{const t=n.data,s=Fe.empty();let i=new Q(fe.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new wn(n.key,s,new yt(i.toArray()),ae.none())}}function K0(n,e,t){n instanceof tr?function(s,i,r){const o=s.value.clone(),a=tg(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof wn?function(s,i,r){if(!Ma(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=tg(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Jy(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Br(n,e,t,s){return n instanceof tr?function(i,r,o,a){if(!Ma(i.precondition,r))return o;const c=i.value.clone(),l=ng(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof wn?function(i,r,o,a){if(!Ma(i.precondition,r))return o;const c=ng(i.fieldTransforms,a,r),l=r.data;return l.setAll(Jy(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return Ma(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function z0(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Ky(s.transform,i||null);r!=null&&(t===null&&(t=Fe.empty()),t.set(s.field,r))}return t||null}function eg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Ni(t,s,(i,r)=>W0(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tr extends Zc{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wn extends Zc{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Jy(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function tg(n,e,t){const s=new Map;D(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,j0(o,a,t[i]))}return s}function ng(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,$0(r,o,e))}return s}class nr extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vd extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,$;function Xy(n){switch(n){default:return k();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Zy(n){if(n===void 0)return ge("GRPC error has no .code"),m.UNKNOWN;switch(n){case pe.OK:return m.OK;case pe.CANCELLED:return m.CANCELLED;case pe.UNKNOWN:return m.UNKNOWN;case pe.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case pe.INTERNAL:return m.INTERNAL;case pe.UNAVAILABLE:return m.UNAVAILABLE;case pe.UNAUTHENTICATED:return m.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case pe.NOT_FOUND:return m.NOT_FOUND;case pe.ALREADY_EXISTS:return m.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return m.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case pe.ABORTED:return m.ABORTED;case pe.OUT_OF_RANGE:return m.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return m.UNIMPLEMENTED;case pe.DATA_LOSS:return m.DATA_LOSS;default:return k()}}($=pe||(pe={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Dy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new le(b.comparator);function ct(){return Q0}const ev=new le(b.comparator);function Pr(...n){let e=ev;for(const t of n)e=e.insert(t.key,t);return e}function tv(n){let e=ev;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Wt(){return qr()}function nv(){return qr()}function qr(){return new ns(n=>n.toString(),(n,e)=>n.isEqual(e))}const Y0=new le(b.comparator),J0=new Q(b.comparator);function M(...n){let e=J0;for(const t of n)e=e.add(t);return e}const X0=new Q(L);function el(){return X0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const s=new Map;return s.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,t)),new Xo(x.min(),s,el(),ct(),M())}}class Zo{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Zo(ve.EMPTY_BYTE_STRING,t,M(),M(),M())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,s,i){this.gt=e,this.removedTargetIds=t,this.key=s,this.yt=i}}class sv{constructor(e,t){this.targetId=e,this.It=t}}class iv{constructor(e,t,s=ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class sg{constructor(){this.Tt=0,this.Et=rg(),this.At=ve.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=M(),t=M(),s=M();return this.Et.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:k()}}),new Zo(this.At,this.Rt,e,t,s)}Dt(){this.bt=!1,this.Et=rg()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Z0{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=ct(),this.Bt=ig(),this.Lt=new Q(L)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,t=>{const s=this.Qt(t);switch(e.state){case 0:this.jt(t)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),s.Vt(e.resumeToken));break;default:k()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach((s,i)=>{this.jt(i)&&t(i)})}zt(e){const t=e.targetId,s=e.It.count,i=this.Ht(t);if(i){const r=i.target;if(sc(r))if(s===0){const o=new b(r.path);this.Kt(t,o,Z.newNoDocument(o,x.min()))}else D(s===1);else this.Jt(t)!==s&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach((r,o)=>{const a=this.Ht(o);if(a){if(r.current&&sc(a.target)){const c=new b(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Z.newNoDocument(c,e))}r.vt&&(t.set(o,r.St()),r.Dt())}});let s=M();this.Bt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.$t.forEach((r,o)=>o.setReadTime(e));const i=new Xo(e,t,this.Lt,this.$t,s);return this.$t=ct(),this.Bt=ig(),this.Lt=new Q(L),i}qt(e,t){if(!this.jt(e))return;const s=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,s),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,s){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,t)?i.Ct(t,1):i.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),s&&(this.$t=this.$t.insert(t,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new sg,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new Q(L),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=this.Ht(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new sg),this.Mt.getRemoteKeysForTarget(e).forEach(t=>{this.Kt(e,t,null)})}Xt(e,t){return this.Mt.getRemoteKeysForTarget(e).has(t)}}function ig(){return new le(b.comparator)}function rg(){return new le(b.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class nC{constructor(e,t){this.databaseId=e,this.dt=t}}function go(n,e){return n.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rv(n,e){return n.dt?e.toBase64():e.toUint8Array()}function sC(n,e){return go(n,e.toTimestamp())}function Ae(n){return D(!!n),x.fromTimestamp(function(e){const t=$n(e);return new re(t.seconds,t.nanos)}(n))}function wd(n,e){return function(t){return new W(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function ov(n){const e=W.fromString(n);return D(pv(e)),e}function mo(n,e){return wd(n.databaseId,e.path)}function zt(n,e){const t=ov(e);if(t.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new b(cv(t))}function Yu(n,e){return wd(n.databaseId,e)}function av(n){const e=ov(n);return e.length===4?W.emptyPath():cv(e)}function _o(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cv(n){return D(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function og(n,e,t){return{name:mo(n,e),fields:t.value.mapValue.fields}}function lv(n,e,t){const s=zt(n,e.name),i=Ae(e.updateTime),r=new Fe({mapValue:{fields:e.fields}}),o=Z.newFoundDocument(s,i,r);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function iC(n,e){return"found"in e?function(t,s){D(!!s.found),s.found.name,s.found.updateTime;const i=zt(t,s.found.name),r=Ae(s.found.updateTime),o=new Fe({mapValue:{fields:s.found.fields}});return Z.newFoundDocument(i,r,o)}(n,e):"missing"in e?function(t,s){D(!!s.missing),D(!!s.readTime);const i=zt(t,s.missing),r=Ae(s.readTime);return Z.newNoDocument(i,r)}(n,e):k()}function rC(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:k()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.dt?(D(l===void 0||typeof l=="string"),ve.fromBase64String(l||"")):(D(l===void 0||l instanceof Uint8Array),ve.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?m.UNKNOWN:Zy(c.code);return new y(l,c.message||"")}(o);t=new iv(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=zt(n,s.document.name),r=Ae(s.document.updateTime),o=new Fe({mapValue:{fields:s.document.fields}}),a=Z.newFoundDocument(i,r,o),c=s.targetIds||[],l=s.removedTargetIds||[];t=new Fa(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=zt(n,s.document),r=s.readTime?Ae(s.readTime):x.min(),o=Z.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=zt(n,s.document),r=s.removedTargetIds||[];t=new Fa([],r,i,null)}else{if(!("filter"in e))return k();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new H0(i),o=s.targetId;t=new sv(o,r)}}return t}function yo(n,e){let t;if(e instanceof tr)t={update:og(n,e.key,e.value)};else if(e instanceof nr)t={delete:mo(n,e.key)};else if(e instanceof wn)t={update:og(n,e.key,e.data),updateMask:dC(e.fieldMask)};else{if(!(e instanceof vd))return k();t={verify:mo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Di)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fs)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Us)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pi)return{fieldPath:r.field.canonicalString(),increment:o._t};throw k()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:k()}(n,e.precondition)),t}function Ju(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ae.updateTime(Ae(i.updateTime)):i.exists!==void 0?ae.exists(i.exists):ae.none()}(e.currentDocument):ae.none(),s=e.updateTransforms?e.updateTransforms.map(i=>function(r,o){let a=null;if("setToServerValue"in o)D(o.setToServerValue==="REQUEST_TIME"),a=new Di;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Fs(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Us(l)}else"increment"in o?a=new Pi(r,o.increment):k();const c=fe.fromServerFormat(o.fieldPath);return new Jo(c,a)}(n,i)):[];if(e.update){e.update.name;const i=zt(n,e.update.name),r=new Fe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new yt(c.map(l=>fe.fromServerFormat(l)))}(e.updateMask);return new wn(i,r,o,t,s)}return new tr(i,r,t,s)}if(e.delete){const i=zt(n,e.delete);return new nr(i,t)}if(e.verify){const i=zt(n,e.verify);return new vd(i,t)}return k()}function oC(n,e){return n&&n.length>0?(D(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?Ae(s.updateTime):Ae(i);return r.isEqual(x.min())&&(r=Ae(i)),new G0(r,s.transformResults||[])}(t,e))):[]}function uv(n,e){return{documents:[Yu(n,e.path)]}}function hv(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Yu(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Yu(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Gp(h.value))return{unaryFilter:{field:ui(h.field),op:"IS_NAN"}};if(Wp(h.value))return{unaryFilter:{field:ui(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Gp(h.value))return{unaryFilter:{field:ui(h.field),op:"IS_NOT_NAN"}};if(Wp(h.value))return{unaryFilter:{field:ui(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(h.field),op:lC(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:ui(u.field),direction:cC(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,l){return c.dt||Ho(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function dv(n){let e=av(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){D(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=fv(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new Ii(vi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ho(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Wn(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Wn(d,h)}(t.endAt)),Uy(e,i,o,r,a,"F",c,l)}function aC(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return k()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function fv(n){return n?n.unaryFilter!==void 0?[hC(n)]:n.fieldFilter!==void 0?[uC(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>fv(e)).reduce((e,t)=>e.concat(t)):k():[]}function cC(n){return eC[n]}function lC(n){return tC[n]}function ui(n){return{fieldPath:n.canonicalString()}}function vi(n){return fe.fromServerFormat(n.fieldPath)}function uC(n){return Ue.create(vi(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(n.fieldFilter.op),n.fieldFilter.value)}function hC(n){switch(n.unaryFilter.op){case"IS_NAN":const e=vi(n.unaryFilter.field);return Ue.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=vi(n.unaryFilter.field);return Ue.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vi(n.unaryFilter.field);return Ue.create(i,"!=",{nullValue:"NULL_VALUE"});default:return k()}}function dC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ag(e)),e=fC(n.get(t),e);return ag(e)}function fC(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function ag(n){return n+""}function Gt(n){const e=n.length;if(D(e>=2),e===2)return D(n.charAt(0)===""&&n.charAt(1)===""),W.emptyPath();const t=e-2,s=[];let i="";for(let r=0;r<e;){const o=n.indexOf("",r);switch((o<0||o>t)&&k(),n.charAt(o+1)){case"":const a=n.substring(r,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),s.push(c);break;case"":i+=n.substring(r,o),i+="\0";break;case"":i+=n.substring(r,o+1);break;default:k()}r=o+2}return new W(s)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n,e){return[n,nt(e)]}function gv(n,e,t){return[n,nt(e),t]}const pC={},gC=["prefixPath","collectionGroup","readTime","documentId"],mC=["prefixPath","collectionGroup","documentId"],_C=["collectionGroup","readTime","prefixPath","documentId"],yC=["canonicalId","targetId"],vC=["targetId","path"],wC=["path","targetId"],IC=["collectionId","parent"],EC=["indexId","uid"],bC=["uid","sequenceNumber"],TC=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],SC=["indexId","uid","orderedDocumentKey"],CC=["userId","collectionPath","documentId"],kC=["userId","collectionPath","largestBatchId"],AC=["userId","collectionGroup","largestBatchId"],mv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],RC=[...mv,"documentOverlays"],_v=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yv=_v,NC=[...yv,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends xy{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function De(n,e){const t=T(n);return Pt.N(t.ee,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&K0(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Br(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Br(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=nv();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=Yy(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),M())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(t,s)=>eg(t,s))&&Ni(this.baseMutations,e.baseMutations,(t,s)=>eg(t,s))}}class Ed{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){D(e.mutations.length===s.length);let i=Y0;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Ed(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t,s,i,r=x.min(),o=x.min(),a=ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.ne=e}}function xC(n,e){let t;if(e.document)t=lv(n.ne,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=b.fromSegments(e.noDocument.path),i=Bs(e.noDocument.readTime);t=Z.newNoDocument(s,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return k();{const s=b.fromSegments(e.unknownDocument.path),i=Bs(e.unknownDocument.version);t=Z.newUnknownDocument(s,i)}}return e.readTime&&t.setReadTime(function(s){const i=new re(s[0],s[1]);return x.fromTimestamp(i)}(e.readTime)),t}function lg(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:rc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(i,r){return{name:mo(i,r.key),fields:r.data.value.mapValue.fields,updateTime:go(i,r.version.toTimestamp())}}(n.ne,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:Vs(e.version)};else{if(!e.isUnknownDocument())return k();s.unknownDocument={path:t.path.toArray(),version:Vs(e.version)}}return s}function rc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Vs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bs(n){const e=new re(n.seconds,n.nanoseconds);return x.fromTimestamp(e)}function ps(n,e){const t=(e.baseMutations||[]).map(r=>Ju(n.ne,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const s=e.mutations.map(r=>Ju(n.ne,r)),i=re.fromMillis(e.localWriteTimeMs);return new Id(e.batchId,i,t,s)}function Or(n){const e=Bs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Bs(n.lastLimboFreeSnapshotVersion):x.min();let s;var i;return n.query.documents!==void 0?(D((i=n.query).documents.length===1),s=kt(er(av(i.documents[0])))):s=function(r){return kt(dv(r))}(n.query),new Ln(s,n.targetId,0,n.lastListenSequenceNumber,e,t,ve.fromBase64String(n.resumeToken))}function wv(n,e){const t=Vs(e.snapshotVersion),s=Vs(e.lastLimboFreeSnapshotVersion);let i;i=sc(e.target)?uv(n.ne,e.target):hv(n.ne,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ms(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function Td(n){const e=dv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vy(e,e.limit,"L"):e}function lu(n,e){return new bd(e.largestBatchId,Ju(n.ne,e.overlayMutation))}function ug(n,e){const t=e.path.lastSegment();return[n,nt(e.path.popLast()),t]}function hg(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Vs(s.readTime),documentKey:nt(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{getBundleMetadata(e,t){return dg(e).get(t).next(s=>{if(s)return{id:(i=s).bundleId,createTime:Bs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return dg(e).put({bundleId:(s=t).id,createTime:Vs(Ae(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return fg(e).get(t).next(s=>{if(s)return{name:(i=s).name,query:Td(i.bundledQuery),readTime:Bs(i.readTime)};var i})}saveNamedQuery(e,t){return fg(e).put(function(s){return{name:s.name,readTime:Vs(Ae(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function dg(n){return De(n,"bundles")}function fg(n){return De(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const s=t.uid||"";return new tl(e,s)}getOverlay(e,t){return mr(e).get(ug(this.userId,t)).next(s=>s?lu(this.wt,s):null)}getOverlays(e,t){const s=Wt();return g.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){const i=[];return s.forEach((r,o)=>{const a=new bd(t,o);i.push(this.ie(e,a))}),g.waitFor(i)}removeOverlaysForBatchId(e,t,s){const i=new Set;t.forEach(o=>i.add(nt(o.getCollectionPath())));const r=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);r.push(mr(e).W("collectionPathOverlayIndex",a))}),g.waitFor(r)}getOverlaysForCollection(e,t,s){const i=Wt(),r=nt(t),o=IDBKeyRange.bound([this.userId,r,s],[this.userId,r,Number.POSITIVE_INFINITY],!0);return mr(e).K("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=lu(this.wt,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,s,i){const r=Wt();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return mr(e).J({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=lu(this.wt,l);r.size()<i||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}ie(e,t){return mr(e).put(function(s,i,r){const[o,a,c]=ug(i,r.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:yo(s.ne,r.mutation)}}(this.wt,this.userId,t))}}function mr(n){return De(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(ce(e.integerValue));else if("doubleValue"in e){const s=ce(e.doubleValue);isNaN(s)?this.ce(t,13):(this.ce(t,15),ho(s)?t.ae(0):t.ae(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ce(t,20),typeof s=="string"?t.he(s):(t.he(`${s.seconds||""}`),t.ae(s.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(Ps(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.ce(t,45),t.ae(s.latitude||0),t.ae(s.longitude||0)}else"mapValue"in e?Ly(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):k()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const s=e.fields||{};this.ce(t,55);for(const i of Object.keys(s))this.le(i,t),this.oe(s[i],t)}me(e,t){const s=e.values||[];this.ce(t,50);for(const i of s)this.oe(i,t)}_e(e,t){this.ce(t,37),b.fromName(e).path.forEach(s=>{this.ce(t,60),this.ge(s,t)})}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}gs.ye=new gs;function PC(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function pg(n){const e=64-function(t){let s=0;for(let i=0;i<8;++i){const r=PC(255&t[i]);if(s+=r,r!==8)break}return s}(n);return Math.ceil(e/8)}class OC{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ie(s.value),s=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ae(s.value),s=t.next();this.Re()}be(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ie(s);else if(s<2048)this.Ie(960|s>>>6),this.Ie(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ie(480|s>>>12),this.Ie(128|63&s>>>6),this.Ie(128|63&s);else{const i=t.codePointAt(0);this.Ie(240|i>>>18),this.Ie(128|63&i>>>12),this.Ie(128|63&i>>>6),this.Ie(128|63&i)}}this.Te()}Pe(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ae(s);else if(s<2048)this.Ae(960|s>>>6),this.Ae(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ae(480|s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s);else{const i=t.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}ve(e){const t=this.Ve(e),s=pg(t);this.Se(1+s),this.buffer[this.position++]=255&s;for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=255&t[i]}De(e){const t=this.Ve(e),s=pg(t);this.Se(1+s),this.buffer[this.position++]=~(255&s);for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Oe(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(i){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,i,!1),new Uint8Array(r.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let i=1;i<t.length;++i)t[i]^=s?255:0;return t}Ie(e){const t=255&e;t===0?(this.xe(0),this.xe(255)):t===255?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;t===0?(this.ke(0),this.ke(255)):t===255?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const i=new Uint8Array(s);i.set(this.buffer),this.buffer=i}}class LC{constructor(e){this.Me=e}de(e){this.Me.pe(e)}he(e){this.Me.be(e)}ae(e){this.Me.ve(e)}ue(){this.Me.Ce()}}class MC{constructor(e){this.Me=e}de(e){this.Me.Ee(e)}he(e){this.Me.Pe(e)}ae(e){this.Me.De(e)}ue(){this.Me.Ne()}}class _r{constructor(){this.Me=new OC,this.Fe=new LC(this.Me),this.$e=new MC(this.Me)}seed(e){this.Me.seed(e)}Be(e){return e===0?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,s,i){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=i}Le(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new ms(this.indexId,this.documentKey,this.arrayValue,s)}}function cs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=gg(n.arrayValue,e.arrayValue),t!==0?t:(t=gg(n.directionalValue,e.directionalValue),t!==0?t:b.comparator(n.documentKey,e.documentKey)))}function gg(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const s=t;s.ht()?this.Ke=s:this.qe.push(s)}}Ge(e){const t=Ku(e);if(t!==void 0&&!this.Qe(t))return!1;const s=hs(e);let i=0,r=0;for(;i<s.length&&this.Qe(s[i]);++i);if(i===s.length)return!0;if(this.Ke!==void 0){const o=s[i];if(!this.je(this.Ke,o)||!this.We(this.Ue[r++],o))return!1;++i}for(;i<s.length;++i){const o=s[i];if(r>=this.Ue.length||!this.We(this.Ue[r++],o))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.ze=new Sd}addToCollectionParentIndex(e,t){return this.ze.add(t),g.resolve()}getCollectionParents(e,t){return g.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return g.resolve()}deleteFieldIndex(e,t){return g.resolve()}getDocumentsMatchingTarget(e,t){return g.resolve(null)}getIndexType(e,t){return g.resolve(0)}getFieldIndexes(e,t){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,t){return g.resolve(It.min())}getMinOffsetFromCollectionGroup(e,t){return g.resolve(It.min())}updateCollectionGroup(e,t,s){return g.resolve()}updateIndexEntries(e,t){return g.resolve()}}class Sd{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Q(W.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Q(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Uint8Array(0);class VC{constructor(e,t){this.user=e,this.databaseId=t,this.He=new Sd,this.Je=new ns(s=>Ms(s),(s,i)=>Qo(s,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const s=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.He.add(t)});const r={collectionId:s,parent:nt(i)};return mg(e).put(r)}return g.resolve()}getCollectionParents(e,t){const s=[],i=IDBKeyRange.bound([t,""],[Cy(t),""],!1,!0);return mg(e).K(i).next(r=>{for(const o of r){if(o.collectionId!==t)break;s.push(Gt(o.parent))}return s})}addFieldIndex(e,t){const s=Sa(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const r=s.add(i);if(t.indexState){const o=vr(e);return r.next(a=>{o.put(hg(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const s=Sa(e),i=vr(e),r=yr(e);return s.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=yr(e);let i=!0;const r=new Map;return g.forEach(this.Ye(t),o=>this.Xe(e,o).next(a=>{i&&(i=!!a),r.set(o,a)})).next(()=>{if(i){let o=M();const a=[];return g.forEach(r,(c,l)=>{var u;v("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(R=>`${R.fieldPath}:${R.kind}`).join(",")}`} to execute ${Ms(t)}`);const h=function(R,B){const Y=Ku(B);if(Y===void 0)return null;for(const K of ic(R,Y.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(l,c),d=function(R,B){const Y=new Map;for(const K of hs(B))for(const de of ic(R,K.fieldPath))switch(de.op){case"==":case"in":Y.set(K.fieldPath.canonicalString(),de.value);break;case"not-in":case"!=":return Y.set(K.fieldPath.canonicalString(),de.value),Array.from(Y.values())}return null}(l,c),f=function(R,B){const Y=[];let K=!0;for(const de of hs(B)){const pt=de.kind===0?Qp(R,de.fieldPath,R.startAt):Yp(R,de.fieldPath,R.startAt);Y.push(pt.value),K&&(K=pt.inclusive)}return new Wn(Y,K)}(l,c),p=function(R,B){const Y=[];let K=!0;for(const de of hs(B)){const pt=de.kind===0?Yp(R,de.fieldPath,R.endAt):Qp(R,de.fieldPath,R.endAt);Y.push(pt.value),K&&(K=pt.inclusive)}return new Wn(Y,K)}(l,c),_=this.Ze(c,l,f),w=this.Ze(c,l,p),P=this.tn(c,l,d),F=this.en(c.indexId,h,_,f.inclusive,w,p.inclusive,P);return g.forEach(F,R=>s.j(R,t.limit).next(B=>{B.forEach(Y=>{const K=b.fromSegments(Y.documentKey);o.has(K)||(o=o.add(K),a.push(K))})}))}).next(()=>a)}return g.resolve(null)})}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,s,i,r,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,r.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.nn(t[h/l]):Ta,f=this.sn(e,d,s[h%l],i),p=this.rn(e,d,r[h%l],o),_=a.map(w=>this.sn(e,d,w,!0));u.push(...this.createRange(f,p,_))}return u}sn(e,t,s,i){const r=new ms(e,b.empty(),t,s);return i?r:r.Le()}rn(e,t,s,i){const r=new ms(e,b.empty(),t,s);return i?r.Le():r}Xe(e,t){const s=new FC(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(r=>{let o=null;for(const a of r)s.Ge(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;return g.forEach(this.Ye(t),i=>this.Xe(e,i).next(r=>{r?s!==0&&r.fields.length<function(o){let a=new Q(fe.comparator),c=!1;for(const l of o.filters){const u=l;u.field.isKeyField()||(u.op==="array-contains"||u.op==="array-contains-any"?c=!0:a=a.add(u.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(c?1:0)}(i)&&(s=1):s=0})).next(()=>s)}on(e,t){const s=new _r;for(const i of hs(e)){const r=t.data.field(i.fieldPath);if(r==null)return null;const o=s.Be(i.kind);gs.ye.re(r,o)}return s.Oe()}nn(e){const t=new _r;return gs.ye.re(e,t.Be(0)),t.Oe()}un(e,t){const s=new _r;return gs.ye.re(Ls(this.databaseId,t),s.Be(function(i){const r=hs(i);return r.length===0?0:r[r.length-1].kind}(e))),s.Oe()}tn(e,t,s){if(s===null)return[];let i=[];i.push(new _r);let r=0;for(const o of hs(e)){const a=s[r++];for(const c of i)if(this.cn(t,o.fieldPath)&&po(a))i=this.an(i,o,a);else{const l=c.Be(o.kind);gs.ye.re(a,l)}}return this.hn(i)}Ze(e,t,s){return this.tn(e,t,s.position)}hn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Oe();return t}an(e,t,s){const i=[...e],r=[];for(const o of s.arrayValue.values||[])for(const a of i){const c=new _r;c.seed(a.Oe()),gs.ye.re(o,c.Be(t.kind)),r.push(c)}return r}cn(e,t){return!!e.filters.find(s=>s instanceof Ue&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Sa(e),i=vr(e);return(t?s.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.K()).next(r=>{const o=[];return g.forEach(r,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new nc(u.sequenceNumber,new It(Bs(u.readTime),new b(Gt(u.documentKey)),u.largestBatchId)):nc.empty(),d=l.fields.map(([f,p])=>new w0(fe.fromServerFormat(f),p));return new ky(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,i)=>{const r=s.indexState.sequenceNumber-i.indexState.sequenceNumber;return r!==0?r:L(s.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const i=Sa(e),r=vr(e);return this.ln(e).next(o=>i.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>g.forEach(a,c=>r.put(hg(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return g.forEach(t,(i,r)=>{const o=s.get(i.collectionGroup);return(o?g.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(s.set(i.collectionGroup,a),g.forEach(a,c=>this.fn(e,i,c).next(l=>{const u=this.dn(r,c);return l.isEqual(u)?g.resolve():this._n(e,r,c,l,u)}))))})}wn(e,t,s,i){return yr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.un(s,t.key),documentKey:t.key.path.toArray()})}mn(e,t,s,i){return yr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.un(s,t.key),t.key.path.toArray()])}fn(e,t,s){const i=yr(e);let r=new Q(cs);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.un(s,t)])},(o,a)=>{r=r.add(new ms(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>r)}dn(e,t){let s=new Q(cs);const i=this.on(t,e);if(i==null)return s;const r=Ku(t);if(r!=null){const o=e.data.field(r.fieldPath);if(po(o))for(const a of o.arrayValue.values||[])s=s.add(new ms(t.indexId,e.key,this.nn(a),i))}else s=s.add(new ms(t.indexId,e.key,Ta,i));return s}_n(e,t,s,i,r){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let p=li(d),_=li(f);for(;p||_;){let w=!1,P=!1;if(p&&_){const F=l(p,_);F<0?P=!0:F>0&&(w=!0)}else p!=null?P=!0:w=!0;w?(u(_),_=li(f)):P?(h(p),p=li(d)):(p=li(d),_=li(f))}}(i,r,cs,a=>{o.push(this.wn(e,t,s,a))},a=>{o.push(this.mn(e,t,s,a))}),g.waitFor(o)}ln(e){let t=1;return vr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,i,r)=>{r.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>cs(o,a)).filter((o,a,c)=>!a||cs(o,c[a-1])!==0);const i=[];i.push(e);for(const o of s){const a=cs(o,e),c=cs(o,t);if(a===0)i[0]=e.Le();else if(a>0&&c<0)i.push(o),i.push(o.Le());else if(c>0)break}i.push(t);const r=[];for(let o=0;o<i.length;o+=2)r.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ta,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ta,[]]));return r}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(_g)}getMinOffset(e,t){return g.mapArray(this.Ye(t),s=>this.Xe(e,s).next(i=>i||k())).next(_g)}}function mg(n){return De(n,"collectionParents")}function yr(n){return De(n,"indexEntries")}function Sa(n){return De(n,"indexConfiguration")}function vr(n){return De(n,"indexState")}function _g(n){D(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const i=n[s].indexState.offset;dd(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new It(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class it{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n,e,t){const s=n.store("mutations"),i=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.J({range:o},(u,h,d)=>(a++,d.delete()));r.push(c.next(()=>{D(a===1)}));const l=[];for(const u of t.mutations){const h=gv(e,u.key.path,t.batchId);r.push(i.delete(h)),l.push(u.key)}return g.waitFor(r).next(()=>l)}function oc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw k();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(41943040,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);class nl{constructor(e,t,s,i){this.userId=e,this.wt=t,this.indexManager=s,this.referenceDelegate=i,this.gn={}}static se(e,t,s,i){D(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new nl(r,t,s,i)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Sn(e).J({index:"userMutationsIndex",range:s},(i,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,i){const r=mi(e),o=Sn(e);return o.add({}).next(a=>{D(typeof a=="number");const c=new Id(a,t,s,i),l=function(d,f,p){const _=p.baseMutations.map(P=>yo(d.ne,P)),w=p.mutations.map(P=>yo(d.ne,P));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:_,mutations:w}}(this.wt,this.userId,c),u=[];let h=new Q((d,f)=>L(d.canonicalString(),f.canonicalString()));for(const d of i){const f=gv(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(r.put(f,pC))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.gn[a]=c.keys()}),g.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Sn(e).get(t).next(s=>s?(D(s.userId===this.userId),ps(this.wt,s)):null)}yn(e,t){return this.gn[t]?g.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const i=s.keys();return this.gn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=IDBKeyRange.lowerBound([this.userId,s]);let r=null;return Sn(e).J({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(D(a.batchId>=s),r=ps(this.wt,a)),c.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Sn(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,r,o)=>{s=r.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Sn(e).K("userMutationsIndex",t).next(s=>s.map(i=>ps(this.wt,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=Ua(this.userId,t.path),i=IDBKeyRange.lowerBound(s),r=[];return mi(e).J({range:i},(o,a,c)=>{const[l,u,h]=o,d=Gt(u);if(l===this.userId&&t.path.isEqual(d))return Sn(e).get(h).next(f=>{if(!f)throw k();D(f.userId===this.userId),r.push(ps(this.wt,f))});c.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Q(L);const i=[];return t.forEach(r=>{const o=Ua(this.userId,r.path),a=IDBKeyRange.lowerBound(o),c=mi(e).J({range:a},(l,u,h)=>{const[d,f,p]=l,_=Gt(f);d===this.userId&&r.path.isEqual(_)?s=s.add(p):h.done()});i.push(c)}),g.waitFor(i).next(()=>this.pn(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1,r=Ua(this.userId,s),o=IDBKeyRange.lowerBound(r);let a=new Q(L);return mi(e).J({range:o},(c,l,u)=>{const[h,d,f]=c,p=Gt(d);h===this.userId&&s.isPrefixOf(p)?p.length===i&&(a=a.add(f)):u.done()}).next(()=>this.pn(e,a))}pn(e,t){const s=[],i=[];return t.forEach(r=>{i.push(Sn(e).get(r).next(o=>{if(o===null)throw k();D(o.userId===this.userId),s.push(ps(this.wt,o))}))}),g.waitFor(i).next(()=>s)}removeMutationBatch(e,t){return Iv(e.ee,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.In(t.batchId)}),g.forEach(s,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return g.resolve();const s=IDBKeyRange.lowerBound([this.userId]),i=[];return mi(e).J({range:s},(r,o,a)=>{if(r[0]===this.userId){const c=Gt(r[1]);i.push(c)}else a.done()}).next(()=>{D(i.length===0)})})}containsKey(e,t){return Ev(e,this.userId,t)}Tn(e){return bv(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ev(n,e,t){const s=Ua(e,t.path),i=s[1],r=IDBKeyRange.lowerBound(s);let o=!1;return mi(n).J({range:r,H:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Sn(n){return De(n,"mutations")}function mi(n){return De(n,"documentMutations")}function bv(n){return De(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new qs(0)}static Rn(){return new qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next(t=>{const s=new qs(t.highestTargetId);return t.highestTargetId=s.next(),this.Pn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.bn(e).next(t=>x.fromTimestamp(new re(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.bn(e).next(i=>(i.highestListenSequenceNumber=t,s&&(i.lastRemoteSnapshotVersion=s.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Pn(e,i)))}addTargetData(e,t){return this.vn(e,t).next(()=>this.bn(e).next(s=>(s.targetCount+=1,this.Vn(t,s),this.Pn(e,s))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>hi(e).delete(t.targetId)).next(()=>this.bn(e)).next(s=>(D(s.targetCount>0),s.targetCount-=1,this.Pn(e,s)))}removeTargets(e,t,s){let i=0;const r=[];return hi(e).J((o,a)=>{const c=Or(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(i++,r.push(this.removeTargetData(e,c)))}).next(()=>g.waitFor(r)).next(()=>i)}forEachTarget(e,t){return hi(e).J((s,i)=>{const r=Or(i);t(r)})}bn(e){return vg(e).get("targetGlobalKey").next(t=>(D(t!==null),t))}Pn(e,t){return vg(e).put("targetGlobalKey",t)}vn(e,t){return hi(e).put(wv(this.wt,t))}Vn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.bn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Ms(t),i=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let r=null;return hi(e).J({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=Or(a);Qo(t,l.target)&&(r=l,c.done())}).next(()=>r)}addMatchingKeys(e,t,s){const i=[],r=An(e);return t.forEach(o=>{const a=nt(o.path);i.push(r.put({targetId:s,path:a})),i.push(this.referenceDelegate.addReference(e,s,o))}),g.waitFor(i)}removeMatchingKeys(e,t,s){const i=An(e);return g.forEach(t,r=>{const o=nt(r.path);return g.waitFor([i.delete([s,o]),this.referenceDelegate.removeReference(e,s,r)])})}removeMatchingKeysForTargetId(e,t){const s=An(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(i)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),i=An(e);let r=M();return i.J({range:s,H:!0},(o,a,c)=>{const l=Gt(o[1]),u=new b(l);r=r.add(u)}).next(()=>r)}containsKey(e,t){const s=nt(t.path),i=IDBKeyRange.bound([s],[Cy(s)],!1,!0);let r=0;return An(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],c,l)=>{o!==0&&(r++,l.done())}).next(()=>r>0)}te(e,t){return hi(e).get(t).next(s=>s?Or(s):null)}}function hi(n){return De(n,"targets")}function vg(n){return De(n,"targetGlobal")}function An(n){return De(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg([n,e],[t,s]){const i=L(n,t);return i===0?L(e,s):i}class qC{constructor(e){this.Sn=e,this.buffer=new Q(wg),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();wg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $C{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Nn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return this.Nn!==null}kn(e){v("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ts(t)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await es(t)}await this.kn(3e5)})}}class jC{constructor(e,t){this.On=e,this.params=t}calculateTargetCount(e,t){return this.On.Mn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return g.resolve(at.ot);const s=new qC(t);return this.On.forEachTarget(e,i=>s.xn(i.sequenceNumber)).next(()=>this.On.Fn(e,i=>s.xn(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.On.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.On.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),g.resolve(yg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yg):this.$n(e,t))}getCacheSize(e){return this.On.getCacheSize(e)}$n(e,t){let s,i,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),Gu()<=j.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),g.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,t){this.db=e,this.garbageCollector=function(s,i){return new jC(s,i)}(this,t)}Mn(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}Bn(e){let t=0;return this.Fn(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,(s,i)=>t(i))}addReference(e,t,s){return Ca(e,s)}removeReference(e,t,s){return Ca(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Ca(e,t)}Un(e,t){return function(s,i){let r=!1;return bv(s).Y(o=>Ev(s,o,i).next(a=>(a&&(r=!0),g.resolve(!a)))).next(()=>r)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Ln(e,(o,a)=>{if(a<=t){const c=this.Un(e,o).next(l=>{if(!l)return r++,s.getEntry(e,o).next(()=>(s.removeEntry(o,x.min()),An(e).delete([0,nt(o.path)])))});i.push(c)}}).next(()=>g.waitFor(i)).next(()=>s.apply(e)).next(()=>r)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Ca(e,t)}Ln(e,t){const s=An(e);let i,r=at.ot;return s.J({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(r!==at.ot&&t(new b(Gt(i)),r),r=l,i=c):r=at.ot}).next(()=>{r!==at.ot&&t(new b(Gt(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ca(n,e){return An(n).put(function(t,s){return{targetId:0,path:nt(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.changes=new ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Z.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?g.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return ls(e).put(s)}removeEntry(e,t,s){return ls(e).delete(function(i,r){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],rc(r),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.qn(e,s)))}getEntry(e,t){let s=Z.newInvalidDocument(t);return ls(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(wr(t))},(i,r)=>{s=this.Kn(t,r)}).next(()=>s)}Gn(e,t){let s={size:0,document:Z.newInvalidDocument(t)};return ls(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(wr(t))},(i,r)=>{s={document:this.Kn(t,r),size:oc(r)}}).next(()=>s)}getEntries(e,t){let s=ct();return this.Qn(e,t,(i,r)=>{const o=this.Kn(i,r);s=s.insert(i,o)}).next(()=>s)}jn(e,t){let s=ct(),i=new le(b.comparator);return this.Qn(e,t,(r,o)=>{const a=this.Kn(r,o);s=s.insert(r,a),i=i.insert(r,oc(o))}).next(()=>({documents:s,Wn:i}))}Qn(e,t,s){if(t.isEmpty())return g.resolve();let i=new Q(bg);t.forEach(c=>i=i.add(c));const r=IDBKeyRange.bound(wr(i.first()),wr(i.last())),o=i.getIterator();let a=o.getNext();return ls(e).J({index:"documentKeyIndex",range:r},(c,l,u)=>{const h=b.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&bg(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.q(wr(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,s){const i=[t.popLast().toArray(),t.lastSegment(),rc(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],r=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ls(e).K(IDBKeyRange.bound(i,r,!0)).next(o=>{let a=ct();for(const c of o){const l=this.Kn(b.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,t,s,i){let r=ct();const o=Eg(t,s),a=Eg(t,It.max());return ls(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.Kn(b.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(h.key,h),r.size===i&&u.done()}).next(()=>r)}newChangeBuffer(e){return new KC(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ig(e).get("remoteDocumentGlobalKey").next(t=>(D(!!t),t))}qn(e,t){return Ig(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const s=xC(this.wt,t);if(!(s.isNoDocument()&&s.version.isEqual(x.min())))return s}return Z.newInvalidDocument(e)}}function Sv(n){return new GC(n)}class KC extends Tv{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new ns(s=>s.toString(),(s,i)=>s.isEqual(i))}applyChanges(e){const t=[];let s=0,i=new Q((r,o)=>L(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.Hn.get(r);if(t.push(this.zn.removeEntry(e,r,a.readTime)),o.isValidDocument()){const c=lg(this.zn.wt,o);i=i.add(r.path.popLast()),s+=oc(c)-a.size,t.push(this.zn.addEntry(e,r,c))}else if(s-=a.size,this.trackRemovals){const c=lg(this.zn.wt,o.convertToNoDocument(x.min()));t.push(this.zn.addEntry(e,r,c))}}),i.forEach(r=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.zn.updateMetadata(e,s)),g.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next(s=>(this.Hn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.zn.jn(e,t).next(({documents:s,Wn:i})=>(i.forEach((r,o)=>{this.Hn.set(r,{size:o,readTime:s.get(r).readTime})}),s))}}function Ig(n){return De(n,"remoteDocumentGlobal")}function ls(n){return De(n,"remoteDocumentsV14")}function wr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Eg(n,e){const t=e.documentKey.path.toArray();return[n,rc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function bg(n,e){const t=n.path.toArray(),s=e.path.toArray();let i=0;for(let r=0;r<t.length-2&&r<s.length-2;++r)if(i=L(t[r],s[r]),i)return i;return i=L(t.length,s.length),i||(i=L(t[t.length-2],s[s.length-2]),i||L(t[t.length-1],s[s.length-1]))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.getBaseDocument(e,t,s))).next(i=>(s!==null&&Br(s.mutation,i,yt.empty(),re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,M()).next(()=>s))}getLocalViewOfDocuments(e,t,s=M()){const i=Wt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Pr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Wt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,M()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=ct();const o=qr(),a=qr();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof wn)?r=r.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Br(u.mutation,l,u.mutation.getFieldMask(),re.now()))}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new zC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=qr();let i=new le((o,a)=>o-a),r=M();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||yt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||M()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=nv();u.forEach(d=>{if(!r.has(d)){const f=Yy(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return b.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_d(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):g.resolve(Wt());let a=-1,c=r;return o.next(l=>g.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?g.resolve():this.getBaseDocument(e,u,h).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,M())).next(u=>({batchId:a,changes:tv(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new b(t)).next(s=>{let i=Pr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Pr();return this.indexManager.getCollectionParents(e,i).next(o=>g.forEach(o,a=>{const c=function(l,u){return new vn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId))).next(r=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Z.newInvalidDocument(l)))});let o=Pr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Br(l.mutation,c,yt.empty(),re.now()),yd(t,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,t,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,t):g.resolve(Z.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return g.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var s;return this.Jn.set(t.id,{id:(s=t).id,version:s.version,createTime:Ae(s.createTime)}),g.resolve()}getNamedQuery(e,t){return g.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(s){return{name:s.name,query:Td(s.bundledQuery),readTime:Ae(s.readTime)}}(t)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.overlays=new le(b.comparator),this.Xn=new Map}getOverlay(e,t){return g.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Wt();return g.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ie(e,t,r)}),g.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Xn.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Xn.delete(s)),g.resolve()}getOverlaysForCollection(e,t,s){const i=Wt(),r=t.length+1,o=new b(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new le((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Wt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Wt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return g.resolve(a)}ie(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(s.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new bd(t,s));let r=this.Xn.get(t);r===void 0&&(r=M(),this.Xn.set(t,r)),this.Xn.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Zn=new Q(Ee.ts),this.es=new Q(Ee.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const s=new Ee(e,t);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.rs(new Ee(e,t))}os(e,t){e.forEach(s=>this.removeReference(s,t))}us(e){const t=new b(new W([])),s=new Ee(t,e),i=new Ee(t,e+1),r=[];return this.es.forEachInRange([s,i],o=>{this.rs(o),r.push(o.key)}),r}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new b(new W([])),s=new Ee(t,e),i=new Ee(t,e+1);let r=M();return this.es.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Ee(e,0),s=this.Zn.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return b.comparator(e.key,t.key)||L(e.ls,t.ls)}static ns(e,t){return L(e.ls,t.ls)||b.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new Q(Ee.ts)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Id(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Ee(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(e,t){return g.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ws(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ee(t,0),i=new Ee(t,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([s,i],o=>{const a=this._s(o.ls);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Q(L);return t.forEach(i=>{const r=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([r,o],a=>{s=s.add(a.ls)})}),g.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;b.isDocumentKey(r)||(r=r.child(""));const o=new Ee(new b(r),0);let a=new Q(L);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),g.resolve(this.gs(a))}gs(e){const t=[];return e.forEach(s=>{const i=this._s(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){D(this.ys(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return g.forEach(t.mutations,i=>{const r=new Ee(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,t){const s=new Ee(t,0),i=this.ds.firstAfterOrEqual(s);return g.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}ys(e,t){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.ps=e,this.docs=new le(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ps(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return g.resolve(s?s.document.mutableCopy():Z.newInvalidDocument(t))}getEntries(e,t){let s=ct();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Z.newInvalidDocument(i))}),g.resolve(s)}getAllFromCollection(e,t,s){let i=ct();const r=new b(t.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||dd(Ry(c),s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,t,s,i){k()}Is(e,t){return g.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new XC(this)}getSize(e){return g.resolve(this.size)}}class XC extends Tv{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.zn.addEntry(e,i)):this.zn.removeEntry(s)}),g.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.persistence=e,this.Ts=new ns(t=>Ms(t),Qo),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Es=0,this.As=new Cd,this.targetCount=0,this.Rs=qs.An()}forEachTarget(e,t){return this.Ts.forEach((s,i)=>t(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Es&&(this.Es=t),g.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new qs(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,g.resolve()}updateTargetData(e,t){return this.vn(t),g.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Ts.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,t){const s=this.Ts.get(t)||null;return g.resolve(s)}addMatchingKeys(e,t,s){return this.As.ss(t,s),g.resolve()}removeMatchingKeys(e,t,s){this.As.os(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),g.resolve()}getMatchingKeysForTargetId(e,t){const s=this.As.hs(t);return g.resolve(s)}containsKey(e,t){return g.resolve(this.As.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t){this.bs={},this.overlays={},this.Ps=new at(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new ZC(this),this.indexManager=new UC,this.remoteDocumentCache=function(s){return new JC(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new vv(t),this.Ds=new HC(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.bs[e.toKey()];return s||(s=new YC(t,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,s){v("MemoryPersistence","Starting transaction:",e);const i=new ek(this.Ps.next());return this.referenceDelegate.Cs(),s(i).next(r=>this.referenceDelegate.xs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ns(e,t){return g.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,t)))}}class ek extends xy{constructor(e){super(),this.currentSequenceNumber=e}}class sl{constructor(e){this.persistence=e,this.ks=new Cd,this.Os=null}static Ms(e){return new sl(e)}get Fs(){if(this.Os)return this.Os;throw k()}addReference(e,t,s){return this.ks.addReference(s,t),this.Fs.delete(s.toString()),g.resolve()}removeReference(e,t,s){return this.ks.removeReference(s,t),this.Fs.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),g.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach(i=>this.Fs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Fs.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Cs(){this.Os=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Fs,s=>{const i=b.fromPath(s);return this.$s(e,i).next(r=>{r||t.removeEntry(i,x.min())})}).next(()=>(this.Os=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(s=>{s?this.Fs.delete(t.toString()):this.Fs.add(t.toString())})}Ss(e){return 0}$s(e,t){return g.or([()=>g.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.wt=e}O(e,t,s,i){const r=new Jc("createOrUpgrade",t);s<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cg,{unique:!0}),a.createObjectStore("documentMutations")}(e),Tg(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=g.resolve();return s<3&&i>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Tg(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:x.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(r))),s<4&&i>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").K().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cg,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return g.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&i>=5&&(o=o.next(()=>this.Bs(r))),s<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(r)))),s<7&&i>=7&&(o=o.next(()=>this.Us(r))),s<8&&i>=8&&(o=o.next(()=>this.qs(e,r))),s<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&i>=10&&(o=o.next(()=>this.Ks(r))),s<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:CC});c.createIndex("collectionPathOverlayIndex",kC,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",AC,{unique:!1})})(e)})),s<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:gC});c.createIndex("documentKeyIndex",mC),c.createIndex("collectionGroupIndex",_C)}(e)).next(()=>this.Gs(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&i>=14&&(o=o.next(()=>this.Qs(e,r))),s<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:EC}).createIndex("sequenceNumberIndex",bC,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:TC}).createIndex("documentKeyIndex",SC,{unique:!1})}(e))),o}Ls(e){let t=0;return e.store("remoteDocuments").J((s,i)=>{t+=oc(i)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Bs(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.K().next(i=>g.forEach(i,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return s.K("userMutationsIndex",o).next(a=>g.forEach(a,c=>{D(c.userId===r.userId);const l=ps(this.wt,c);return Iv(e,r.userId,l).next(()=>{})}))}))}Us(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const r=[];return s.J((o,a)=>{const c=new W(o),l=function(u){return[0,nt(u)]}(c);r.push(t.get(l).next(u=>u?g.resolve():(h=>t.put({targetId:0,path:nt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>g.waitFor(r))})}qs(e,t){e.createObjectStore("collectionParents",{keyPath:IC});const s=t.store("collectionParents"),i=new Sd,r=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:nt(c)})}};return t.store("remoteDocuments").J({H:!0},(o,a)=>{const c=new W(o);return r(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,a,c],l)=>{const u=Gt(a);return r(u.popLast())}))}Ks(e){const t=e.store("targets");return t.J((s,i)=>{const r=Or(i),o=wv(this.wt,r);return t.put(o)})}Gs(e,t){const s=t.store("remoteDocuments"),i=[];return s.J((r,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new b(W.fromString(l.document.name).popFirst(5)):l.noDocument?b.fromSegments(l.noDocument.path):l.unknownDocument?b.fromSegments(l.unknownDocument.path):k()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>g.waitFor(i))}Qs(e,t){const s=t.store("mutations"),i=Sv(this.wt),r=new kv(sl.Ms,this.wt.ne);return s.K().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:M();ps(this.wt,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),g.forEach(a,(c,l)=>{const u=new Te(l),h=tl.se(this.wt,u),d=r.getIndexManager(u),f=nl.se(u,this.wt,d,r.referenceDelegate);return new Cv(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Xu(t,at.ot),c).next()})})}}function Tg(n){n.createObjectStore("targetDocuments",{keyPath:vC}).createIndex("documentTargetsIndex",wC,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",yC,{unique:!0}),n.createObjectStore("targetGlobal")}const uu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class kd{constructor(e,t,s,i,r,o,a,c,l,u,h=14){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.js=r,this.window=o,this.document=a,this.Ws=l,this.zs=u,this.Hs=h,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=d=>Promise.resolve(),!kd.V())throw new y(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new WC(this,i),this.ei=t+"main",this.wt=new vv(c),this.ni=new Pt(this.ei,this.Hs,new tk(this.wt)),this.Vs=new BC(this.referenceDelegate,this.wt),this.remoteDocumentCache=Sv(this.wt),this.Ds=new DC,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,u===!1&&ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,uu);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Vs.getHighestSequenceNumber(e))}).then(e=>{this.Ps=new at(e,this.Ws)}).then(()=>{this.vs=!0}).catch(e=>(this.ni&&this.ni.close(),Promise.reject(e)))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ka(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(e).next(t=>{t||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(e)).next(t=>this.isPrimary&&!t?this.li(e).next(()=>!1):!!t&&this.fi(e).next(()=>!0))).catch(e=>{if(ts(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.js.enqueueRetryable(()=>this.ti(e)),this.isPrimary=e})}ai(e){return Ir(e).get("owner").next(t=>g.resolve(this.di(t)))}_i(e){return ka(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=De(t,"clientMetadata");return s.K().next(i=>{const r=this.gi(i,18e5),o=i.filter(a=>r.indexOf(a)===-1);return g.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?g.resolve(!0):Ir(e).get("owner").next(t=>{if(t!==null&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new y(m.FAILED_PRECONDITION,uu);return!1}}return!(!this.networkEnabled||!this.inForeground)||ka(e).K().next(s=>this.gi(s,5e3).find(i=>{if(this.clientId!==i.clientId){const r=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Xu(e,at.ot);return this.li(t).next(()=>this._i(t))}),this.ni.close(),this.Ai()}gi(e,t){return e.filter(s=>this.mi(s.updateTimeMs,t)&&!this.pi(s.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",e=>ka(e).K().next(t=>this.gi(t,18e5).map(s=>s.clientId)))}get started(){return this.vs}getMutationQueue(e,t){return nl.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VC(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return tl.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,s){v("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",r=(o=this.Hs)===15?NC:o===14?yv:o===13?_v:o===12?RC:o===11?mv:void k();var o;let a;return this.ni.runTransaction(e,i,r,c=>(a=new Xu(c,this.Ps?this.Ps.next():at.ot),t==="readwrite-primary"?this.ai(a).next(l=>!!l||this.hi(a)).next(l=>{if(!l)throw ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new y(m.FAILED_PRECONDITION,Ny);return s(a)}).next(l=>this.fi(a).next(()=>l)):this.bi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}bi(e){return Ir(e).get("owner").next(t=>{if(t!==null&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)&&!this.di(t)&&!(this.zs||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(m.FAILED_PRECONDITION,uu)})}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ir(e).put("owner",t)}static V(){return Pt.V()}li(e){const t=Ir(e);return t.get("owner").next(s=>this.di(s)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):g.resolve())}mi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(ge(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground=this.document.visibilityState==="visible")}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Js=()=>{this.Ii(),Rb()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const s=((t=this.si)===null||t===void 0?void 0:t.getItem(this.yi(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return ge("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(e){ge("Failed to set zombie client id.",e)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch{}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ir(n){return De(n,"owner")}function ka(n){return De(n,"clientMetadata")}function Ad(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Pi=s,this.vi=i}static Vi(e,t){let s=M(),i=M();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Rd(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Ci(e,t).next(r=>r||this.xi(e,t,i,s)).next(r=>r||this.Ni(e,t))}Ci(e,t){return g.resolve(null)}xi(e,t,s,i){return B0(t)||i.isEqual(x.min())?this.Ni(e,t):this.Di.getDocuments(e,s).next(r=>{const o=this.ki(t,r);return this.Oi(t,o,s,i)?this.Ni(e,t):(Gu()<=j.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qu(t)),this.Mi(e,o,t,Ay(i,-1)))})}ki(e,t){let s=new Q($y(e));return t.forEach((i,r)=>{yd(e,r)&&(s=s.add(r))}),s}Oi(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ni(e,t){return Gu()<=j.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Qu(t)),this.Di.getDocumentsMatchingQuery(e,t,It.min())}Mi(e,t,s,i){return this.Di.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,t,s,i){this.persistence=e,this.Fi=t,this.wt=i,this.$i=new le(L),this.Bi=new ns(r=>Ms(r),Qo),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Cv(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$i))}}function Rv(n,e,t,s){return new nk(n,e,t,s)}async function Nv(n,e){const t=T(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.qi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=M();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function sk(n,e){const t=T(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=g.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const _=c.docVersions.get(f);D(_!==null),p.version.compareTo(_)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=M();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function xv(n){const e=T(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Vs.getLastRemoteSnapshotVersion(t))}function ik(n,e){const t=T(n),s=e.snapshotVersion;let i=t.$i;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Ui.newChangeBuffer({trackRemovals:!0});i=t.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Vs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Vs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ve.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,_,w){return p.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(t.Vs.updateTargetData(r,f))});let c=ct(),l=M();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Dv(r,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(x.min())){const u=t.Vs.getLastRemoteSnapshotVersion(r).next(h=>t.Vs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.$i=i,r))}function Dv(n,e,t){let s=M(),i=M();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=ct();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:i}})}function rk(n,e){const t=T(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Oi(n,e){const t=T(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Vs.getTargetData(s,e).next(r=>r?(i=r,g.resolve(i)):t.Vs.allocateTargetId(s).next(o=>(i=new Ln(e,o,0,s.currentSequenceNumber),t.Vs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.$i.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.$i=t.$i.insert(s.targetId,s),t.Bi.set(e,s.targetId)),s})}async function Li(n,e,t){const s=T(n),i=s.$i.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ts(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function ac(n,e,t){const s=T(n);let i=x.min(),r=M();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=T(a),h=u.Bi.get(l);return h!==void 0?g.resolve(u.$i.get(h)):u.Vs.getTargetData(c,l)}(s,o,kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,t?i:x.min(),t?r:M())).next(a=>(Lv(s,qy(e),a),{documents:a,ji:r})))}function Pv(n,e){const t=T(n),s=T(t.Vs),i=t.$i.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",r=>s.te(r,e).next(o=>o?o.target:null))}function Ov(n,e){const t=T(n),s=t.Li.get(e)||x.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Ui.getAllFromCollectionGroup(i,e,Ay(s,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Lv(t,e,i),i))}function Lv(n,e,t){let s=x.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Li.set(e,s)}async function ok(n,e,t,s){const i=T(n);let r=M(),o=ct();for(const l of t){const u=e.Wi(l.metadata.name);l.document&&(r=r.add(u));const h=e.zi(l);h.setReadTime(e.Hi(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Ui.newChangeBuffer({trackRemovals:!0}),c=await Oi(i,function(l){return kt(er(W.fromString(`__bundle__/docs/${l}`)))}(s));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>Dv(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Vs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Vs.addMatchingKeys(l,r,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.Gi,u.Qi)).next(()=>u.Gi)))}async function ak(n,e,t=M()){const s=await Oi(n,kt(Td(e.bundledQuery))),i=T(n);return i.persistence.runTransaction("Save named query","readwrite",r=>{const o=Ae(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return i.Ds.saveNamedQuery(r,e);const a=s.withResumeToken(ve.EMPTY_BYTE_STRING,o);return i.$i=i.$i.insert(a.targetId,a),i.Vs.updateTargetData(r,a).next(()=>i.Vs.removeMatchingKeysForTargetId(r,s.targetId)).next(()=>i.Vs.addMatchingKeys(r,t,s.targetId)).next(()=>i.Ds.saveNamedQuery(r,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n,e){return`firestore_clients_${n}_${e}`}function Cg(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function hu(n,e){return`firestore_targets_${n}_${e}`}class cc{constructor(e,t,s,i){this.user=e,this.batchId=t,this.state=s,this.error=i}static Ji(e,t,s){const i=JSON.parse(s);let r,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(r=new y(i.error.code,i.error.message))),o?new cc(e,t,i.state,r):(ge("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $r{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Ji(e,t){const s=JSON.parse(t);let i,r=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return r&&s.error&&(r=typeof s.error.message=="string"&&typeof s.error.code=="string",r&&(i=new y(s.error.code,s.error.message))),r?new $r(e,s.state,i):(ge("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const s=JSON.parse(t);let i=typeof s=="object"&&s.activeTargetIds instanceof Array,r=el();for(let o=0;i&&o<s.activeTargetIds.length;++o)i=Oy(s.activeTargetIds[o]),r=r.add(s.activeTargetIds[o]);return i?new lc(e,r):(ge("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Nd{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Nd(t.clientId,t.onlineState):(ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Zu{constructor(){this.activeTargetIds=el()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class du{constructor(e,t,s,i,r){this.window=e,this.js=t,this.persistenceKey=s,this.tr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new le(L),this.started=!1,this.ir=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.rr=Sg(this.persistenceKey,this.tr),this.ur=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.sr=this.sr.insert(this.tr,new Zu),this.cr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.lr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.dr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const s of e){if(s===this.tr)continue;const i=this.getItem(Sg(this.persistenceKey,s));if(i){const r=lc.Ji(s,i);r&&(this.sr=this.sr.insert(r.clientId,r))}}this._r();const t=this.storage.getItem(this.lr);if(t){const s=this.wr(t);s&&this.mr(s)}for(const s of this.ir)this.nr(s);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach((s,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,s){this.yr(e,t,s),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(hu(this.persistenceKey,e));if(s){const i=$r.Ji(e,s);i&&(t=i.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(hu(this.persistenceKey,e))}updateQueryState(e,t,s){this.Tr(e,t,s)}handleUserChange(e,t,s){t.forEach(i=>{this.pr(i)}),this.currentUser=e,s.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.cr.test(t.key)){if(t.newValue==null){const s=this.Rr(t.key);return this.br(s,null)}{const s=this.Pr(t.key,t.newValue);if(s)return this.br(s.clientId,s)}}else if(this.ar.test(t.key)){if(t.newValue!==null){const s=this.vr(t.key,t.newValue);if(s)return this.Vr(s)}}else if(this.hr.test(t.key)){if(t.newValue!==null){const s=this.Sr(t.key,t.newValue);if(s)return this.Dr(s)}}else if(t.key===this.lr){if(t.newValue!==null){const s=this.wr(t.newValue);if(s)return this.mr(s)}}else if(t.key===this.ur){const s=function(i){let r=at.ot;if(i!=null)try{const o=JSON.parse(i);D(typeof o=="number"),r=o}catch(o){ge("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(t.newValue);s!==at.ot&&this.sequenceNumberHandler(s)}else if(t.key===this.dr){const s=this.Cr(t.newValue);await Promise.all(s.map(i=>this.syncEngine.Nr(i)))}}}else this.ir.push(t)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,s){const i=new cc(this.currentUser,e,t,s),r=Cg(this.persistenceKey,this.currentUser,e);this.setItem(r,i.Yi())}pr(e){const t=Cg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,s){const i=hu(this.persistenceKey,e),r=new $r(e,t,s);this.setItem(i,r.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const s=this.Rr(e);return lc.Ji(s,t)}vr(e,t){const s=this.ar.exec(e),i=Number(s[1]),r=s[2]!==void 0?s[2]:null;return cc.Ji(new Te(r),i,t)}Sr(e,t){const s=this.hr.exec(e),i=Number(s[1]);return $r.Ji(i,t)}wr(e){return Nd.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(e,t){const s=t?this.sr.insert(e,t):this.sr.remove(e),i=this.gr(this.sr),r=this.gr(s),o=[],a=[];return r.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{r.has(c)||a.push(c)}),this.syncEngine.Mr(o,a).then(()=>{this.sr=s})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=el();return e.forEach((s,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Mv{constructor(){this.Fr=new Zu,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,s){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Zu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,s,i,r){const o=this.oo(e,t);v("RestConnection","Sending: ",o,s);const a={};return this.uo(a,i,r),this.co(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw co("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,t,s,i,r,o){return this.ro(e,t,s,i,r)}uo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}oo(e,t){const s=lk[e];return`${this.so}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,s,i){return new Promise((r,o)=>{const a=new c0;a.listenOnce(r0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case cu.NO_ERROR:const l=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(l)),r(l);break;case cu.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const u=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const p=f.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(p)>=0?p:m.UNKNOWN}(h.status);o(new y(d,h.message))}else o(new y(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(m.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,s,15)})}ho(e,t,s){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=s0(),o=i0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new a0({})),this.uo(a.initMessageHeaders,t,s),Mc()||Uo()||kb()||Fh()||Ab()||Mh()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");v("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new uk({jr:p=>{h?v("Connection","Not sending because WebChannel is closed:",p):(u||(v("Connection","Opening WebChannel transport."),l.open(),u=!0),v("Connection","WebChannel sending:",p),l.send(p))},Wr:()=>l.close()}),f=(p,_,w)=>{p.listen(_,P=>{try{w(P)}catch(F){setTimeout(()=>{throw F},0)}})};return f(l,Ea.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),f(l,Ea.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.eo())}),f(l,Ea.EventType.ERROR,p=>{h||(h=!0,co("Connection","WebChannel transport errored:",p),d.eo(new y(m.UNAVAILABLE,"The operation could not be completed")))}),f(l,Ea.EventType.MESSAGE,p=>{var _;if(!h){const w=p.data[0];D(!!w);const P=w,F=P.error||((_=P[0])===null||_===void 0?void 0:_.error);if(F){v("Connection","WebChannel received error:",F);const R=F.status;let B=function(K){const de=pe[K];if(de!==void 0)return Zy(de)}(R),Y=F.message;B===void 0&&(B=m.INTERNAL,Y="Unknown error status: "+R+" with message "+F.message),h=!0,d.eo(new y(B,Y)),l.close()}else v("Connection","WebChannel received:",w),d.no(w)}}),f(o,o0.STAT_EVENT,p=>{p.stat===Up.PROXY?v("Connection","Detected buffering proxy"):p.stat===Up.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(){return typeof window!="undefined"?window:null}function Va(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){return new nC(n,!0)}class xd{constructor(e,t,s=1e3,i=1.5,r=6e4){this.js=e,this.timerId=t,this.lo=s,this.fo=i,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),i=Math.max(0,t-s);i>0&&v("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,t,s,i,r,o,a,c){this.js=e,this.Ao=s,this.Ro=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new xd(e,t)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(ge(t.toString()),ge("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Po===t&&this.Uo(s,i)},s=>{e(()=>{const i=new y(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(i)})})}Uo(e,t){const s=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{s(()=>this.qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget(()=>this.Po===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dk extends Uv{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.wt=r}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=rC(this.wt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?Ae(r.readTime):x.min()}(e);return this.listener.Go(t,s)}Qo(e){const t={};t.database=_o(this.wt),t.addTarget=function(i,r){let o;const a=r.target;return o=sc(a)?{documents:uv(i,a)}:{query:hv(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=rv(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=go(i,r.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=aC(this.wt,e);s&&(t.labels=s),this.Mo(t)}jo(e){const t={};t.database=_o(this.wt),t.removeTarget=e,this.Mo(t)}}class fk extends Uv{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=oC(e.writeResults,e.commitTime),s=Ae(e.commitTime);return this.listener.Jo(s,t)}return D(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=_o(this.wt),this.Mo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>yo(this.wt,s))};this.Mo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=s,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ro(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}ao(e,t,s,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.bo.ao(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(m.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class gk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(ge(t),this.su=!1):v("OnlineStateTracker",t)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br(o=>{s.enqueueAndForget(async()=>{ss(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=T(a);c.lu.add(4),await sr(c),c._u.set("Unknown"),c.lu.delete(4),await ta(c)}(this))})}),this._u=new gk(s,i)}}async function ta(n){if(ss(n))for(const e of n.fu)await e(!0)}async function sr(n){for(const e of n.fu)await e(!1)}function il(n,e){const t=T(n);t.hu.has(e.targetId)||(t.hu.set(e.targetId,e),Od(t)?Pd(t):rr(t).Co()&&Dd(t,e))}function vo(n,e){const t=T(n),s=rr(t);t.hu.delete(e),s.Co()&&Vv(t,e),t.hu.size===0&&(s.Co()?s.ko():ss(t)&&t._u.set("Unknown"))}function Dd(n,e){n.wu.Nt(e.targetId),rr(n).Qo(e)}function Vv(n,e){n.wu.Nt(e),rr(n).jo(e)}function Pd(n){n.wu=new Z0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),te:e=>n.hu.get(e)||null}),rr(n).start(),n._u.iu()}function Od(n){return ss(n)&&!rr(n).Do()&&n.hu.size>0}function ss(n){return T(n).lu.size===0}function Bv(n){n.wu=void 0}async function _k(n){n.hu.forEach((e,t)=>{Dd(n,e)})}async function yk(n,e){Bv(n),Od(n)?(n._u.uu(e),Pd(n)):n._u.set("Unknown")}async function vk(n,e,t){if(n._u.set("Online"),e instanceof iv&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.hu.delete(o),s.wu.removeTarget(o))}(n,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uc(n,s)}else if(e instanceof Fa?n.wu.Ut(e):e instanceof sv?n.wu.zt(e):n.wu.Gt(e),!t.isEqual(x.min()))try{const s=await xv(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.wu.Yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.hu.get(c);l&&i.hu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.hu.get(a);if(!c)return;i.hu.set(a,c.withResumeToken(ve.EMPTY_BYTE_STRING,c.snapshotVersion)),Vv(i,a);const l=new Ln(c.target,a,1,c.sequenceNumber);Dd(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await uc(n,s)}}async function uc(n,e,t){if(!ts(e))throw e;n.lu.add(1),await sr(n),n._u.set("Offline"),t||(t=()=>xv(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.lu.delete(1),await ta(n)})}function qv(n,e){return e().catch(t=>uc(n,t,e))}async function ir(n){const e=T(n),t=Gn(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;wk(e);)try{const i=await rk(e.localStore,s);if(i===null){e.au.length===0&&t.ko();break}s=i.batchId,Ik(e,i)}catch(i){await uc(e,i)}$v(e)&&jv(e)}function wk(n){return ss(n)&&n.au.length<10}function Ik(n,e){n.au.push(e);const t=Gn(n);t.Co()&&t.zo&&t.Ho(e.mutations)}function $v(n){return ss(n)&&!Gn(n).Do()&&n.au.length>0}function jv(n){Gn(n).start()}async function Ek(n){Gn(n).Xo()}async function bk(n){const e=Gn(n);for(const t of n.au)e.Ho(t.mutations)}async function Tk(n,e,t){const s=n.au.shift(),i=Ed.from(s,e,t);await qv(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ir(n)}async function Sk(n,e){e&&Gn(n).zo&&await async function(t,s){if(i=s.code,Xy(i)&&i!==m.ABORTED){const r=t.au.shift();Gn(t).No(),await qv(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ir(t)}var i}(n,e),$v(n)&&jv(n)}async function Ag(n,e){const t=T(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=ss(t);t.lu.add(3),await sr(t),s&&t._u.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.lu.delete(3),await ta(t)}async function eh(n,e){const t=T(n);e?(t.lu.delete(2),await ta(t)):e||(t.lu.add(2),await sr(t),t._u.set("Unknown"))}function rr(n){return n.mu||(n.mu=function(e,t,s){const i=T(e);return i.tu(),new dk(t,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(n.datastore,n.asyncQueue,{zr:_k.bind(null,n),Jr:yk.bind(null,n),Go:vk.bind(null,n)}),n.fu.push(async e=>{e?(n.mu.No(),Od(n)?Pd(n):n._u.set("Unknown")):(await n.mu.stop(),Bv(n))})),n.mu}function Gn(n){return n.gu||(n.gu=function(e,t,s){const i=T(e);return i.tu(),new fk(t,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,s)}(n.datastore,n.asyncQueue,{zr:Ek.bind(null,n),Jr:Sk.bind(null,n),Yo:bk.bind(null,n),Jo:Tk.bind(null,n)}),n.fu.push(async e=>{e?(n.gu.No(),await ir(n)):(await n.gu.stop(),n.au.length>0&&(v("RemoteStore",`Stopping write stream with ${n.au.length} pending writes`),n.au=[]))})),n.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new Ld(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function or(n,e){if(ge("AsyncQueue",`${e}: ${n}`),ts(n))return new y(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.comparator=e?(t,s)=>e(t,s)||b.comparator(t.key,s.key):(t,s)=>b.comparator(t.key,s.key),this.keyedMap=Pr(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new Ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ei;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.yu=new le(b.comparator)}track(e){const t=e.doc.key,s=this.yu.get(t);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(t,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(t):e.type===1&&s.type===2?this.yu=this.yu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):k():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal((t,s)=>{e.push(s)}),e}}class Mi{constructor(e,t,s,i,r,o,a,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,s,i){const r=[];return t.forEach(o=>{r.push({type:0,doc:o})}),new Mi(e,t,Ei.emptySet(t),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.Iu=void 0,this.listeners=[]}}class kk{constructor(){this.queries=new ns(e=>By(e),Yo),this.onlineState="Unknown",this.Tu=new Set}}async function Md(n,e){const t=T(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new Ck),i)try{r.Iu=await t.onListen(s)}catch(o){const a=or(o,`Initialization of query '${Qu(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.Eu(t.onlineState),r.Iu&&e.Au(r.Iu)&&Ud(t)}async function Fd(n,e){const t=T(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function Ak(n,e){const t=T(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Au(i)&&(s=!0);o.Iu=i}}s&&Ud(t)}function Rk(n,e,t){const s=T(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function Ud(n){n.Tu.forEach(e=>{e.next()})}class Vd{constructor(e,t,s){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Mi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||t==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Su(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.wt=e}Wi(e){return zt(this.wt,e)}zi(e){return e.metadata.exists?lv(this.wt,e.document,!1):Z.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return Ae(e)}}class xk{constructor(e,t,s){this.xu=e,this.localStore=t,this.wt=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Wv(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const s=W.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,s=new Ng(this.wt);for(const i of e)if(i.metadata.queries){const r=s.Wi(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||M()).add(r);t.set(o,a)}}return t}async complete(){const e=await ok(this.localStore,new Ng(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const s of this.queries)await ak(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Mu:e}}}function Wv(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.key=e}}class Kv{constructor(e){this.key=e}}class zv{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=M(),this.mutatedKeys=M(),this.Lu=$y(e),this.Uu=new Ei(this.Lu)}get qu(){return this.Fu}Ku(e,t){const s=t?t.Gu:new Rg,i=t?t.Uu:this.Uu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=yd(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?p!==_&&(s.track({type:3,doc:f}),w=!0):this.Qu(d,f)||(s.track({type:2,doc:f}),w=!0,(c&&this.Lu(f,c)>0||l&&this.Lu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),w=!0):d&&!f&&(s.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:r}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const r=e.Gu.pu();r.sort((l,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return f(h)-f(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=t?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,r.length!==0||c?{snapshot:new Mi(this.query,e.Uu,i,r,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Rg,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=M(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const t=[];return e.forEach(s=>{this.Bu.has(s)||t.push(new Kv(s))}),this.Bu.forEach(s=>{e.has(s)||t.push(new Gv(s))}),t}Ju(e){this.Fu=e.ji,this.Bu=M();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Mi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Dk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Pk{constructor(e){this.key=e,this.Xu=!1}}class Ok{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new ns(a=>By(a),Yo),this.ec=new Map,this.nc=new Set,this.sc=new le(b.comparator),this.ic=new Map,this.rc=new Cd,this.oc={},this.uc=new Map,this.cc=qs.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Lk(n,e){const t=Wd(n);let s,i;const r=t.tc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const o=await Oi(t.localStore,kt(e));t.isPrimaryClient&&il(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Bd(t,e,s,a==="current")}return i}async function Bd(n,e,t,s){n.hc=(u,h,d)=>async function(f,p,_,w){let P=p.view.Ku(_);P.Oi&&(P=await ac(f.localStore,p.query,!1).then(({documents:B})=>p.view.Ku(B,P)));const F=w&&w.targetChanges.get(p.targetId),R=p.view.applyChanges(P,f.isPrimaryClient,F);return th(f,p.targetId,R.zu),R.snapshot}(n,u,h,d);const i=await ac(n.localStore,e,!0),r=new zv(e,i.ji),o=r.Ku(i.documents),a=Zo.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline"),c=r.applyChanges(o,n.isPrimaryClient,a);th(n,t,c.zu);const l=new Dk(e,t,r);return n.tc.set(e,l),n.ec.has(t)?n.ec.get(t).push(e):n.ec.set(t,[e]),c.snapshot}async function Mk(n,e){const t=T(n),s=t.tc.get(e),i=t.ec.get(s.targetId);if(i.length>1)return t.ec.set(s.targetId,i.filter(r=>!Yo(r,e))),void t.tc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Li(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),vo(t.remoteStore,s.targetId),Fi(t,s.targetId)}).catch(es)):(Fi(t,s.targetId),await Li(t.localStore,s.targetId,!0))}async function Fk(n,e,t){const s=Gd(n);try{const i=await function(r,o){const a=T(r),c=re.now(),l=o.reduce((d,f)=>d.add(f.key),M());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=ct(),p=M();return a.Ui.getEntries(d,l).next(_=>{f=_,f.forEach((w,P)=>{P.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(_=>{u=_;const w=[];for(const P of o){const F=z0(P,u.get(P.key).overlayedDocument);F!=null&&w.push(new wn(P.key,F,My(F.value.mapValue),ae.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(_=>{h=_;const w=_.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,_.batchId,w)})}).then(()=>({batchId:h.batchId,changes:tv(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.oc[r.currentUser.toKey()];c||(c=new le(L)),c=c.insert(o,a),r.oc[r.currentUser.toKey()]=c}(s,i.batchId,t),await In(s,i.changes),await ir(s.remoteStore)}catch(i){const r=or(i,"Failed to persist write");t.reject(r)}}async function Hv(n,e){const t=T(n);try{const s=await ik(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.ic.get(r);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?D(o.Xu):i.removedDocuments.size>0&&(D(o.Xu),o.Xu=!1))}),await In(t,s,e)}catch(s){await es(s)}}function xg(n,e,t){const s=T(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.tc.forEach((r,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=T(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Ud(a)}(s.eventManager,e),i.length&&s.Zu.Go(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Uk(n,e,t){const s=T(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.ic.get(e),r=i&&i.key;if(r){let o=new le(b.comparator);o=o.insert(r,Z.newNoDocument(r,x.min()));const a=M().add(r),c=new Xo(x.min(),new Map,new Q(L),o,a);await Hv(s,c),s.sc=s.sc.remove(r),s.ic.delete(e),jd(s)}else await Li(s.localStore,e,!1).then(()=>Fi(s,e,t)).catch(es)}async function Vk(n,e){const t=T(n),s=e.batch.batchId;try{const i=await sk(t.localStore,e);$d(t,s,null),qd(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await In(t,i)}catch(i){await es(i)}}async function Bk(n,e,t){const s=T(n);try{const i=await function(r,o){const a=T(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(D(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);$d(s,e,t),qd(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await In(s,i)}catch(i){await es(i)}}async function qk(n,e){const t=T(n);ss(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(r){const o=T(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const i=t.uc.get(s)||[];i.push(e),t.uc.set(s,i)}catch(s){const i=or(s,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function qd(n,e){(n.uc.get(e)||[]).forEach(t=>{t.resolve()}),n.uc.delete(e)}function $d(n,e,t){const s=T(n);let i=s.oc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.oc[s.currentUser.toKey()]=i}}function Fi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.ec.get(e))n.tc.delete(s),t&&n.Zu.lc(s,t);n.ec.delete(e),n.isPrimaryClient&&n.rc.us(e).forEach(s=>{n.rc.containsKey(s)||Qv(n,s)})}function Qv(n,e){n.nc.delete(e.path.canonicalString());const t=n.sc.get(e);t!==null&&(vo(n.remoteStore,t),n.sc=n.sc.remove(e),n.ic.delete(t),jd(n))}function th(n,e,t){for(const s of t)s instanceof Gv?(n.rc.addReference(s.key,e),$k(n,s)):s instanceof Kv?(v("SyncEngine","Document no longer in limbo: "+s.key),n.rc.removeReference(s.key,e),n.rc.containsKey(s.key)||Qv(n,s.key)):k()}function $k(n,e){const t=e.key,s=t.path.canonicalString();n.sc.get(t)||n.nc.has(s)||(v("SyncEngine","New document in limbo: "+t),n.nc.add(s),jd(n))}function jd(n){for(;n.nc.size>0&&n.sc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new b(W.fromString(e)),s=n.cc.next();n.ic.set(s,new Pk(t)),n.sc=n.sc.insert(t,s),il(n.remoteStore,new Ln(kt(er(t.path)),s,2,at.ot))}}async function In(n,e,t){const s=T(n),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,t).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=Rd.Vi(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.Zu.Go(i),await async function(a,c){const l=T(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>g.forEach(c,h=>g.forEach(h.Pi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>g.forEach(h.vi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ts(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.$i.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.$i=l.$i.insert(h,p)}}}(s.localStore,r))}async function jk(n,e){const t=T(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await Nv(t.localStore,e);t.currentUser=e,function(i,r){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new y(m.CANCELLED,r))})}),i.uc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await In(t,s.Ki)}}function Wk(n,e){const t=T(n),s=t.ic.get(e);if(s&&s.Xu)return M().add(s.key);{let i=M();const r=t.ec.get(e);if(!r)return i;for(const o of r){const a=t.tc.get(o);i=i.unionWith(a.view.qu)}return i}}async function Gk(n,e){const t=T(n),s=await ac(t.localStore,e.query,!0),i=e.view.Ju(s);return t.isPrimaryClient&&th(t,e.targetId,i.zu),i}async function Kk(n,e){const t=T(n);return Ov(t.localStore,e).then(s=>In(t,s))}async function zk(n,e,t,s){const i=T(n),r=await function(o,a){const c=T(o),l=T(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.yn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):g.resolve(null)))}(i.localStore,e);r!==null?(t==="pending"?await ir(i.remoteStore):t==="acknowledged"||t==="rejected"?($d(i,e,s||null),qd(i,e),function(o,a){T(T(o).mutationQueue).In(a)}(i.localStore,e)):k(),await In(i,r)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Hk(n,e){const t=T(n);if(Wd(t),Gd(t),e===!0&&t.ac!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),i=await Dg(t,s.toArray());t.ac=!0,await eh(t.remoteStore,!0);for(const r of i)il(t.remoteStore,r)}else if(e===!1&&t.ac!==!1){const s=[];let i=Promise.resolve();t.ec.forEach((r,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):i=i.then(()=>(Fi(t,o),Li(t.localStore,o,!0))),vo(t.remoteStore,o)}),await i,await Dg(t,s),function(r){const o=T(r);o.ic.forEach((a,c)=>{vo(o.remoteStore,c)}),o.rc.cs(),o.ic=new Map,o.sc=new le(b.comparator)}(t),t.ac=!1,await eh(t.remoteStore,!1)}}async function Dg(n,e,t){const s=T(n),i=[],r=[];for(const o of e){let a;const c=s.ec.get(o);if(c&&c.length!==0){a=await Oi(s.localStore,kt(c[0]));for(const l of c){const u=s.tc.get(l),h=await Gk(s,u);h.snapshot&&r.push(h.snapshot)}}else{const l=await Pv(s.localStore,o);a=await Oi(s.localStore,l),await Bd(s,Yv(l),o,!1)}i.push(a)}return s.Zu.Go(r),i}function Yv(n){return Uy(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Qk(n){const e=T(n);return T(T(e.localStore).persistence).Ri()}async function Yk(n,e,t,s){const i=T(n);if(i.ac)return void v("SyncEngine","Ignoring unexpected query state notification.");const r=i.ec.get(e);if(r&&r.length>0)switch(t){case"current":case"not-current":{const o=await Ov(i.localStore,qy(r[0])),a=Xo.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await In(i,o,a);break}case"rejected":await Li(i.localStore,e,!0),Fi(i,e,s);break;default:k()}}async function Jk(n,e,t){const s=Wd(n);if(s.ac){for(const i of e){if(s.ec.has(i)){v("SyncEngine","Adding an already active target "+i);continue}const r=await Pv(s.localStore,i),o=await Oi(s.localStore,r);await Bd(s,Yv(r),o.targetId,!1),il(s.remoteStore,o)}for(const i of t)s.ec.has(i)&&await Li(s.localStore,i,!1).then(()=>{vo(s.remoteStore,i),Fi(s,i)}).catch(es)}}function Wd(n){const e=T(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uk.bind(null,e),e.Zu.Go=Ak.bind(null,e.eventManager),e.Zu.lc=Rk.bind(null,e.eventManager),e}function Gd(n){const e=T(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bk.bind(null,e),e}function Xk(n,e,t){const s=T(n);(async function(i,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=T(h),p=Ae(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",_=>f.Ds.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(p)>=0)}(i.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Wv(a));const c=new xk(a,i.localStore,r.wt);let l=await r.fc();for(;l;){const h=await c.Nu(l);h&&o._updateProgress(h),l=await r.fc()}const u=await c.complete();return await In(i,u.Mu,void 0),await function(h,d){const f=T(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ds.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Ou)}catch(a){return co("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(i=>{s.sharedClientState.notifyBundleLoaded(i)})}class Jv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=ea(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return Rv(this.persistence,new Av,e.initialUser,this.wt)}_c(e){return new kv(sl.Ms,this.wt)}dc(e){return new Mv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xv extends Jv{constructor(e,t,s){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Gd(this.yc.syncEngine),await ir(this.yc.remoteStore),await this.persistence.ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}wc(e){return Rv(this.persistence,new Av,e.initialUser,this.wt)}mc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new $C(s,e.asyncQueue,t)}gc(e,t){const s=new T0(t,this.persistence);return new b0(e.asyncQueue,s)}_c(e){const t=Ad(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new kd(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,Fv(),Va(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new Mv}}class Zk extends Xv{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof du&&(this.sharedClientState.syncEngine={kr:zk.bind(null,t),Or:Yk.bind(null,t),Mr:Jk.bind(null,t),Ri:Qk.bind(null,t),Nr:Kk.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci(async s=>{await Hk(this.yc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}dc(e){const t=Fv();if(!du.V(t))throw new y(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Ad(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new du(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class Kd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jk.bind(null,this.syncEngine),await eh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new kk}createDatastore(e){const t=ea(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new hk(i));var i;return function(r,o,a,c){return new pk(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>xg(this.syncEngine,a,0),o=kg.V()?new kg:new ck,new mk(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,l){const u=new Ok(s,i,r,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=T(e);v("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await sr(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new ke,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then(s=>{s&&s.Cu()?this.metadata.resolve(s.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.payload)}`))},s=>this.metadata.reject(s))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(e===null)return null;const t=this.Ac.decode(e),s=Number(t);isNaN(s)&&this.Pc(`length string (${t}) is not valid number`);const i=await this.vc(s);return new Nk(JSON.parse(i),e.length+s)}Vc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async bc(){for(;this.Vc()<0&&!await this.Sc(););if(this.buffer.length===0)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,i){const r=T(s),o=_o(r.wt)+"/documents",a={documents:i.map(h=>mo(r.wt,h))},c=await r.ao("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=iC(r.wt,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());D(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new nr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const i=b.fromPath(s);this.mutations.push(new vd(i,this.precondition(i)))}),await async function(t,s){const i=T(t),r=_o(i.wt)+"/documents",o={writes:s.map(a=>yo(i.wt,a))};await i.ro("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw k();t=x.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?ae.updateTime(t):ae.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(x.min()))throw new y(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ae.updateTime(t)}return ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,t,s,i,r){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=i,this.deferred=r,this.Dc=s.maxAttempts,this.So=new xd(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io(async()=>{const e=new tA(this.datastore),t=this.xc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Nc(i)}))}).catch(s=>{this.Nc(s)})})}xc(e){try{const t=this.updateFunction(e);return!Ho(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Cc(),Promise.resolve()))):this.deferred.reject(e)}kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!Xy(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=Sy.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{v("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(v("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=or(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zv(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Nv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function ew(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zd(n);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>Ag(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Ag(e.remoteStore,r)),n.onlineComponents=e}async function zd(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Zv(n,new Jv)),n.offlineComponents}async function ol(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await ew(n,new Kd)),n.onlineComponents}function tw(n){return zd(n).then(e=>e.persistence)}function Hd(n){return zd(n).then(e=>e.localStore)}function nw(n){return ol(n).then(e=>e.remoteStore)}function Qd(n){return ol(n).then(e=>e.syncEngine)}async function Ui(n){const e=await ol(n),t=e.eventManager;return t.onListen=Lk.bind(null,e.syncEngine),t.onUnlisten=Mk.bind(null,e.syncEngine),t}function iA(n){return n.asyncQueue.enqueue(async()=>{const e=await tw(n),t=await nw(n);return e.setNetworkEnabled(!0),function(s){const i=T(s);return i.lu.delete(0),ta(i)}(t)})}function rA(n){return n.asyncQueue.enqueue(async()=>{const e=await tw(n),t=await nw(n);return e.setNetworkEnabled(!1),async function(s){const i=T(s);i.lu.add(0),await sr(i),i._u.set("Offline")}(t)})}function oA(n,e){const t=new ke;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await function(a,c){const l=T(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,i);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new y(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=or(o,`Failed to get document '${i} from cache`);r.reject(a)}}(await Hd(n),e,t)),t.promise}function sw(n,e,t={}){const s=new ke;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new rl({next:h=>{r.enqueueAndForget(()=>Fd(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Vd(er(o.path),l,{includeMetadataChanges:!0,Du:!0});return Md(i,u)}(await Ui(n),n.asyncQueue,e,t,s)),s.promise}function aA(n,e){const t=new ke;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await ac(s,i,!0),a=new zv(i,o.ji),c=a.Ku(o.documents),l=a.applyChanges(c,!1);r.resolve(l.snapshot)}catch(o){const a=or(o,`Failed to execute query '${i} against cache`);r.reject(a)}}(await Hd(n),e,t)),t.promise}function iw(n,e,t={}){const s=new ke;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new rl({next:h=>{r.enqueueAndForget(()=>Fd(i,u)),h.fromCache&&a.source==="server"?c.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Vd(o,l,{includeMetadataChanges:!0,Du:!0});return Md(i,u)}(await Ui(n),n.asyncQueue,e,t,s)),s.promise}function cA(n,e){const t=new rl(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){T(s).Tu.add(i),i.next()}(await Ui(n),t)),()=>{t.Tc(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){T(s).Tu.delete(i)}(await Ui(n),t))}}function lA(n,e,t){const s=new ke;return n.asyncQueue.enqueueAndForget(async()=>{const i=await function(r){return ol(r).then(o=>o.datastore)}(n);new nA(n.asyncQueue,i,t,e,s).run()}),s.promise}function uA(n,e,t,s){const i=function(r,o){let a;return a=typeof r=="string"?new TextEncoder().encode(r):r,function(c,l){return new eA(c,l)}(function(c,l){if(c instanceof Uint8Array)return Pg(c,l);if(c instanceof ArrayBuffer)return Pg(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ea(e));n.asyncQueue.enqueueAndForget(async()=>{Xk(await Qd(n),i,s)})}function hA(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const i=T(t);return i.persistence.runTransaction("Get named query","readonly",r=>i.Ds.getNamedQuery(r,s))}(await Hd(n),e))}const Og=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n,e,t){if(!t)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rw(n,e,t,s){if(e===!0&&s===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Lg(n){if(!b.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Mg(n){if(b.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function al(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":k()}function G(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=al(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ow(n,e){if(e<=0)throw new y(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,rw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,s){this._authCredentials=t,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fg({}),this._settingsFrozen=!1,e instanceof pn?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(i.options.projectId)}(e))}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fg(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new h0;switch(t.type){case"gapi":const s=t.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new g0(s,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Og.get(e);t&&(v("ComponentProvider","Removing Datastore"),Og.delete(e),t.terminate())}(this),Promise.resolve()}}function dA(n,e,t,s={}){var i;const r=(n=G(n,na))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&co("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Te.MOCK_USER;else{o=Oh(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Te(c)}n._authCredentials=new d0(new Ty(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new te(this.firestore,e,this._key)}}class ze{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ze(this.firestore,e,this._query)}}class Ht extends ze{constructor(e,t,s){super(e,t,er(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new te(this.firestore,null,new b(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function aw(n,e,...t){if(n=S(n),Yd("collection","path",e),n instanceof na){const s=W.fromString(e,...t);return Mg(s),new Ht(n,null,s)}{if(!(n instanceof te||n instanceof Ht))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(W.fromString(e,...t));return Mg(s),new Ht(n.firestore,null,s)}}function fA(n,e){if(n=G(n,na),Yd("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ze(n,null,function(t){return new vn(W.emptyPath(),t)}(e))}function hc(n,e,...t){if(n=S(n),arguments.length===1&&(e=Sy.I()),Yd("doc","path",e),n instanceof na){const s=W.fromString(e,...t);return Lg(s),new te(n,null,new b(s))}{if(!(n instanceof te||n instanceof Ht))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(W.fromString(e,...t));return Lg(s),new te(n.firestore,n instanceof Ht?n.converter:null,new b(s))}}function cw(n,e){return n=S(n),e=S(e),(n instanceof te||n instanceof Ht)&&(e instanceof te||e instanceof Ht)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function lw(n,e){return n=S(n),e=S(e),n instanceof ze&&e instanceof ze&&n.firestore===e.firestore&&Yo(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new xd(this,"async_queue_retry"),this.Kc=()=>{const t=Va();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const e=Va();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const t=new ke;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!ts(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const t=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ge("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Lc=!1,s))));return this.Oc=t,t}enqueueAfterDelay(e,t,s){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const i=Ld.createAndSchedule(this,e,t,s,r=>this.Wc(r));return this.$c.push(i),i}Gc(){this.Bc&&k()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function nh(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class gA{constructor(){this._progressObserver={},this._taskCompletionResolver=new ke,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=-1;class ue extends na{constructor(e,t,s){super(e,t,s),this.type="firestore",this._queue=new pA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||uw(this),this._firestoreClient.terminate()}}function Pe(n){return n._firestoreClient||uw(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function uw(n){var e;const t=n._freezeSettings(),s=function(i,r,o,a){return new k0(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new sA(n._authCredentials,n._appCheckCredentials,n._queue,s)}function _A(n,e){dw(n=G(n,ue));const t=Pe(n),s=n._freezeSettings(),i=new Kd;return hw(t,i,new Xv(i,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function yA(n){dw(n=G(n,ue));const e=Pe(n),t=n._freezeSettings(),s=new Kd;return hw(e,s,new Zk(s,t.cacheSizeBytes))}function hw(n,e,t){const s=new ke;return n.asyncQueue.enqueue(async()=>{try{await Zv(n,t),await ew(n,e),s.resolve()}catch(i){const r=i;if(!function(o){return o.name==="FirebaseError"?o.code===m.FAILED_PRECONDITION||o.code===m.UNIMPLEMENTED:typeof DOMException!="undefined"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(r))throw r;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function vA(n){if(n._initialized&&!n._terminated)throw new y(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ke;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Pt.V())return Promise.resolve();const s=t+"main";await Pt.delete(s)}(Ad(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function wA(n){return function(e){const t=new ke;return e.asyncQueue.enqueueAndForget(async()=>qk(await Qd(e),t)),t.promise}(Pe(n=G(n,ue)))}function IA(n){return iA(Pe(n=G(n,ue)))}function EA(n){return rA(Pe(n=G(n,ue)))}function bA(n,e){const t=Pe(n=G(n,ue)),s=new gA;return uA(t,n._databaseId,e,s),s}function TA(n,e){return hA(Pe(n=G(n,ue)),e).then(t=>t?new ze(n,null,t.query):null)}function dw(n){if(n._initialized||n._terminated)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zt(ve.fromBase64String(e))}catch(t){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zt(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=/^__.*__$/;class CA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}class fw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class ll{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.wt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ta({path:s,na:!1});return i.sa(e),i}ia(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ta({path:s,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return dc(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(pw(this.Zc)&&SA.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class kA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=s||ea(e)}aa(e,t,s,i=!1){return new ll({Zc:e,methodName:t,ca:s,path:fe.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ni(n){const e=n._freezeSettings(),t=ea(n._databaseId);return new kA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ul(n,e,t,s,i,r={}){const o=n.aa(r.merge||r.mergeFields?2:0,e,t,i);ef("Data must be an object, but it was:",o,s);const a=_w(s,o);let c,l;if(r.merge)c=new yt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=sh(e,h,t);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);vw(u,d)||u.push(d)}c=new yt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new CA(new Fe(a),c,l)}class sa extends ti{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sa}}function gw(n,e,t){return new ll({Zc:3,ca:e.settings.ca,methodName:n._methodName,na:t},e.databaseId,e.wt,e.ignoreUndefinedProperties)}class Jd extends ti{_toFieldTransform(e){return new Jo(e.path,new Di)}isEqual(e){return e instanceof Jd}}class AA extends ti{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=gw(this,e,!0),s=this.ha.map(r=>si(r,t)),i=new Fs(s);return new Jo(e.path,i)}isEqual(e){return this===e}}class RA extends ti{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=gw(this,e,!0),s=this.ha.map(r=>si(r,t)),i=new Us(s);return new Jo(e.path,i)}isEqual(e){return this===e}}class NA extends ti{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new Pi(e.wt,Gy(e.wt,this.la));return new Jo(e.path,t)}isEqual(e){return this===e}}function Xd(n,e,t,s){const i=n.aa(1,e,t);ef("Data must be an object, but it was:",i,s);const r=[],o=Fe.empty();ei(s,(c,l)=>{const u=tf(e,c,t);l=S(l);const h=i.ia(u);if(l instanceof sa)r.push(u);else{const d=si(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new yt(r);return new fw(o,a,i.fieldTransforms)}function Zd(n,e,t,s,i,r){const o=n.aa(1,e,t),a=[sh(e,s,t)],c=[i];if(r.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(sh(e,r[d])),c.push(r[d+1]);const l=[],u=Fe.empty();for(let d=a.length-1;d>=0;--d)if(!vw(l,a[d])){const f=a[d];let p=c[d];p=S(p);const _=o.ia(f);if(p instanceof sa)l.push(f);else{const w=si(p,_);w!=null&&(l.push(f),u.set(f,w))}}const h=new yt(l);return new fw(u,h,o.fieldTransforms)}function mw(n,e,t,s=!1){return si(t,n.aa(s?4:3,e))}function si(n,e){if(yw(n=S(n)))return ef("Unsupported field value:",e,n),_w(n,e);if(n instanceof ti)return function(t,s){if(!pw(s.Zc))throw s.oa(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=si(o,s.ra(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=S(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Gy(s.wt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=re.fromDate(t);return{timestampValue:go(s.wt,i)}}if(t instanceof re){const i=new re(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:go(s.wt,i)}}if(t instanceof cl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Zt)return{bytesValue:rv(s.wt,t._byteString)};if(t instanceof te){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wd(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.oa(`Unsupported field value: ${al(t)}`)}(n,e)}function _w(n,e){const t={};return Dy(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(n,(s,i)=>{const r=si(i,e.ea(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function yw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof cl||n instanceof Zt||n instanceof te||n instanceof ti)}function ef(n,e,t){if(!yw(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=al(t);throw s==="an object"?e.oa(n+" a custom object"):e.oa(n+" "+s)}}function sh(n,e,t){if((e=S(e))instanceof Kn)return e._internalPath;if(typeof e=="string")return tf(n,e);throw dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const xA=new RegExp("[~\\*/\\[\\]]");function tf(n,e,t){if(e.search(xA)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kn(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dc(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new y(m.INVALID_ARGUMENT,a+n+c)}function vw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DA extends wo{data(){return super.data()}}function hl(n,e){return typeof e=="string"?tf(n,e):e instanceof Kn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gn extends wo{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(hl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class jr extends gn{data(e={}){return super.data(e)}}class zn{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ws(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new jr(this._firestore,this._userDataWriter,s.key,s,new ws(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new jr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ws(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new jr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ws(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:PA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function PA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}function ww(n,e){return n instanceof gn&&e instanceof gn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof zn&&e instanceof zn&&n._firestore===e._firestore&&lw(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ia{}function Cn(n,...e){for(const t of e)n=t._apply(n);return n}class OA extends ia{constructor(e,t,s){super(),this.fa=e,this.da=t,this._a=s,this.type="where"}_apply(e){const t=ni(e.firestore),s=function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Vg(u,l);const f=[];for(const p of u)f.push(Ug(a,i,p));h={arrayValue:{values:f}}}else h=Ug(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Vg(u,l),h=mw(o,r,u,l==="in"||l==="not-in");const d=Ue.create(c,l,h);return function(f,p){if(p.ht()){const w=md(f);if(w!==null&&!w.isEqual(p.field))throw new y(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${p.field.toString()}'`);const P=gd(f);P!==null&&Cw(f,p.field,P)}const _=function(w,P){for(const F of w.filters)if(P.indexOf(F.op)>=0)return F.op;return null}(f,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(_!==null)throw _===p.op?new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new y(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${_.toString()}' filters.`)}(i,d),d}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new ze(e.firestore,e.converter,function(i,r){const o=i.filters.concat([r]);return new vn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,s))}}function LA(n,e,t){const s=e,i=hl("where",n);return new OA(i,s,t)}class MA extends ia{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(s,i,r){if(s.startAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ii(i,r);return function(a,c){if(gd(a)===null){const l=md(a);l!==null&&Cw(a,l,c.field)}}(s,o),o}(e._query,this.fa,this.wa);return new ze(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new vn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function FA(n,e="asc"){const t=e,s=hl("orderBy",n);return new MA(s,t)}class Ew extends ia{constructor(e,t,s){super(),this.type=e,this.ma=t,this.ga=s}_apply(e){return new ze(e.firestore,e.converter,Vy(e._query,this.ma,this.ga))}}function UA(n){return ow("limit",n),new Ew("limit",n,"F")}function VA(n){return ow("limitToLast",n),new Ew("limitToLast",n,"L")}class bw extends ia{constructor(e,t,s){super(),this.type=e,this.ya=t,this.pa=s}_apply(e){const t=Sw(e,this.type,this.ya,this.pa);return new ze(e.firestore,e.converter,function(s,i){return new vn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function BA(...n){return new bw("startAt",n,!0)}function qA(...n){return new bw("startAfter",n,!1)}class Tw extends ia{constructor(e,t,s){super(),this.type=e,this.ya=t,this.pa=s}_apply(e){const t=Sw(e,this.type,this.ya,this.pa);return new ze(e.firestore,e.converter,function(s,i){return new vn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function $A(...n){return new Tw("endBefore",n,!1)}function jA(...n){return new Tw("endAt",n,!0)}function Sw(n,e,t,s){if(t[0]=S(t[0]),t[0]instanceof wo)return function(i,r,o,a,c){if(!a)throw new y(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of xi(i))if(u.field.isKeyField())l.push(Ls(r,a.key));else{const h=a.data.field(u.field);if(pd(h))throw new y(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new y(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Wn(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const i=ni(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new y(m.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const p=l[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new y(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!_d(r)&&p.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const _=r.path.child(W.fromString(p));if(!b.isDocumentKey(_))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const w=new b(_);d.push(Ls(o,w))}else{const _=mw(a,c,p);d.push(_)}}return new Wn(d,u)}(n._query,n.firestore._databaseId,i,e,t,s)}}function Ug(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new y(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_d(e)&&t.indexOf("/")!==-1)throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(W.fromString(t));if(!b.isDocumentKey(s))throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ls(n,new b(s))}if(t instanceof te)return Ls(n,t._key);throw new y(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${al(t)}.`)}function Vg(n,e){if(!Array.isArray(n)||n.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Cw(n,e,t){if(!t.isEqual(e))throw new y(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{convertValue(e,t="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw k()}}convertObject(e,t){const s={};return ei(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new cl(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Py(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const t=$n(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=W.fromString(e);D(pv(s));const i=new pn(s.get(1),s.get(3)),r=new b(s.popFirst(5));return i.isEqual(t)||ge(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class GA extends nf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new te(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ni(e)}set(e,t,s){this._verifyNotCommitted();const i=Rn(e,this._firestore),r=dl(i.converter,t,s),o=ul(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,s);return this._mutations.push(o.toMutation(i._key,ae.none())),this}update(e,t,s,...i){this._verifyNotCommitted();const r=Rn(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Kn?Zd(this._dataReader,"WriteBatch.update",r._key,t,s,i):Xd(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Rn(e,this._firestore);return this._mutations=this._mutations.concat(new nr(t._key,ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Rn(n,e){if((n=S(n)).firestore!==e)throw new y(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){n=G(n,te);const e=G(n.firestore,ue);return sw(Pe(e),n._key).then(t=>sf(e,n,t))}class ii extends nf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new te(this.firestore,null,t)}}function HA(n){n=G(n,te);const e=G(n.firestore,ue),t=Pe(e),s=new ii(e);return oA(t,n._key).then(i=>new gn(e,s,n._key,i,new ws(i!==null&&i.hasLocalMutations,!0),n.converter))}function QA(n){n=G(n,te);const e=G(n.firestore,ue);return sw(Pe(e),n._key,{source:"server"}).then(t=>sf(e,n,t))}function YA(n){n=G(n,ze);const e=G(n.firestore,ue),t=Pe(e),s=new ii(e);return Iw(n._query),iw(t,n._query).then(i=>new zn(e,s,n,i))}function JA(n){n=G(n,ze);const e=G(n.firestore,ue),t=Pe(e),s=new ii(e);return aA(t,n._query).then(i=>new zn(e,s,n,i))}function XA(n){n=G(n,ze);const e=G(n.firestore,ue),t=Pe(e),s=new ii(e);return iw(t,n._query,{source:"server"}).then(i=>new zn(e,s,n,i))}function Bg(n,e,t){n=G(n,te);const s=G(n.firestore,ue),i=dl(n.converter,e,t);return ra(s,[ul(ni(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ae.none())])}function qg(n,e,t,...s){n=G(n,te);const i=G(n.firestore,ue),r=ni(i);let o;return o=typeof(e=S(e))=="string"||e instanceof Kn?Zd(r,"updateDoc",n._key,e,t,s):Xd(r,"updateDoc",n._key,e),ra(i,[o.toMutation(n._key,ae.exists(!0))])}function ZA(n){return ra(G(n.firestore,ue),[new nr(n._key,ae.none())])}function eR(n,e){const t=G(n.firestore,ue),s=hc(n),i=dl(n.converter,e);return ra(t,[ul(ni(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,ae.exists(!1))]).then(()=>s)}function kw(n,...e){var t,s,i;n=S(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||nh(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(nh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof te)l=G(n.firestore,ue),u=er(n._key.path),c={next:h=>{e[o]&&e[o](sf(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=G(n,ze);l=G(h.firestore,ue),u=h._query;const d=new ii(l);c={next:f=>{e[o]&&e[o](new zn(l,d,h,f))},error:e[o+1],complete:e[o+2]},Iw(n._query)}return function(h,d,f,p){const _=new rl(p),w=new Vd(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>Md(await Ui(h),w)),()=>{_.Tc(),h.asyncQueue.enqueueAndForget(async()=>Fd(await Ui(h),w))}}(Pe(l),u,a,c)}function tR(n,e){return cA(Pe(n=G(n,ue)),nh(e)?e:{next:e})}function ra(n,e){return function(t,s){const i=new ke;return t.asyncQueue.enqueueAndForget(async()=>Fk(await Qd(t),s,i)),i.promise}(Pe(n),e)}function sf(n,e,t){const s=t.docs.get(e._key),i=new ii(n);return new gn(n,i,e._key,s,new ws(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ni(e)}get(e){const t=Rn(e,this._firestore),s=new GA(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return k();const r=i[0];if(r.isFoundDocument())return new wo(this._firestore,s,r.key,r,t.converter);if(r.isNoDocument())return new wo(this._firestore,s,t._key,null,t.converter);throw k()})}set(e,t,s){const i=Rn(e,this._firestore),r=dl(i.converter,t,s),o=ul(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(e,t,s,...i){const r=Rn(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Kn?Zd(this._dataReader,"Transaction.update",r._key,t,s,i):Xd(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=Rn(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Rn(e,this._firestore),s=new ii(this._firestore);return super.get(e).then(i=>new gn(this._firestore,s,t._key,i._document,new ws(!1,!1),t.converter))}}function sR(n,e,t){n=G(n,ue);const s=Object.assign(Object.assign({},WA),t);return function(i){if(i.maxAttempts<1)throw new y(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),lA(Pe(n),i=>e(new nR(n,i)),s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){return new sa("deleteField")}function rR(){return new Jd("serverTimestamp")}function oR(...n){return new AA("arrayUnion",n)}function aR(...n){return new RA("arrayRemove",n)}function cR(n){return new NA("increment",n)}(function(n,e=!0){(function(t){Zi=t})(yn),Jt(new st("firestore",(t,{options:s})=>{const i=t.getProvider("app").getImmediate(),r=new ue(i,new f0(t.getProvider("auth-internal")),new _0(t.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r},"PUBLIC")),dt(Vp,"3.4.11",n),dt(Vp,"3.4.11","esm2017")})();const lR="@firebase/firestore-compat",uR="0.1.20";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){if(typeof Uint8Array=="undefined")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function jg(){if(!S0())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Io{constructor(e){this._delegate=e}static fromBase64String(e){return jg(),new Io(Zt.fromBase64String(e))}static fromUint8Array(e){return $g(),new Io(Zt.fromUint8Array(e))}toBase64(){return jg(),this._delegate.toBase64()}toUint8Array(){return $g(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n){return hR(n,["next","error","complete"])}function hR(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{enableIndexedDbPersistence(e,t){return _A(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return yA(e._delegate)}clearIndexedDbPersistence(e){return vA(e._delegate)}}class Aw{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof pn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&co("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){dA(this._delegate,e,t,s)}enableNetwork(){return IA(this._delegate)}disableNetwork(){return EA(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,rw("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return wA(this._delegate)}onSnapshotsInSync(e){return tR(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Vi(this,aw(this._delegate,e))}catch(t){throw Ye(t,"collection()","Firestore.collection()")}}doc(e){try{return new bt(this,hc(this._delegate,e))}catch(t){throw Ye(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Qe(this,fA(this._delegate,e))}catch(t){throw Ye(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return sR(this._delegate,t=>e(new Rw(this,t)))}batch(){return Pe(this._delegate),new Nw(new KA(this._delegate,e=>ra(this._delegate,e)))}loadBundle(e){return bA(this._delegate,e)}namedQuery(e){return TA(this._delegate,e).then(t=>t?new Qe(this,t):null)}}class fl extends nf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(new Zt(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return bt.forKey(t,this.firestore,null)}}function fR(n){l0(n)}class Rw{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new fl(e)}get(e){const t=Is(e);return this._delegate.get(t).then(s=>new Eo(this._firestore,new gn(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const i=Is(e);return s?(rf("Transaction.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=Is(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=Is(e);return this._delegate.delete(t),this}}class Nw{constructor(e){this._delegate=e}set(e,t,s){const i=Is(e);return s?(rf("WriteBatch.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=Is(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=Is(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class $s{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new jr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new bo(this._firestore,s),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=$s.INSTANCES;let i=s.get(e);i||(i=new WeakMap,s.set(e,i));let r=i.get(t);return r||(r=new $s(e,new fl(e),t),i.set(t,r)),r}}$s.INSTANCES=new WeakMap;class bt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new fl(e)}static forPath(e,t,s){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bt(t,new te(t._delegate,s,new b(e)))}static forKey(e,t,s){return new bt(t,new te(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Vi(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Vi(this.firestore,aw(this._delegate,e))}catch(t){throw Ye(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof te?cw(this._delegate,e):!1}set(e,t){t=rf("DocumentReference.set",t);try{return t?Bg(this._delegate,e,t):Bg(this._delegate,e)}catch(s){throw Ye(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?qg(this._delegate,e):qg(this._delegate,e,t,...s)}catch(i){throw Ye(i,"updateDoc()","DocumentReference.update()")}}delete(){return ZA(this._delegate)}onSnapshot(...e){const t=xw(e),s=Dw(e,i=>new Eo(this.firestore,new gn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return kw(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=HA(this._delegate):(e==null?void 0:e.source)==="server"?t=QA(this._delegate):t=zA(this._delegate),t.then(s=>new Eo(this.firestore,new gn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new bt(this.firestore,e?this._delegate.withConverter($s.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ye(n,e,t){return n.message=n.message.replace(e,t),n}function xw(n){for(const e of n)if(typeof e=="object"&&!ih(e))return e;return{}}function Dw(n,e){var t,s;let i;return ih(n[0])?i=n[0]:ih(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:r=>{i.next&&i.next(e(r))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(s=i.complete)===null||s===void 0?void 0:s.bind(i)}}class Eo{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new bt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return ww(this._delegate,e._delegate)}}class bo extends Eo{data(e){const t=this._delegate.data(e);return u0(t!==void 0),t}}class Qe{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new fl(e)}where(e,t,s){try{return new Qe(this.firestore,Cn(this._delegate,LA(e,t,s)))}catch(i){throw Ye(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Qe(this.firestore,Cn(this._delegate,FA(e,t)))}catch(s){throw Ye(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Qe(this.firestore,Cn(this._delegate,UA(e)))}catch(t){throw Ye(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Qe(this.firestore,Cn(this._delegate,VA(e)))}catch(t){throw Ye(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Qe(this.firestore,Cn(this._delegate,BA(...e)))}catch(t){throw Ye(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Qe(this.firestore,Cn(this._delegate,qA(...e)))}catch(t){throw Ye(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Qe(this.firestore,Cn(this._delegate,$A(...e)))}catch(t){throw Ye(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Qe(this.firestore,Cn(this._delegate,jA(...e)))}catch(t){throw Ye(t,"endAt()","Query.endAt()")}}isEqual(e){return lw(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=JA(this._delegate):(e==null?void 0:e.source)==="server"?t=XA(this._delegate):t=YA(this._delegate),t.then(s=>new rh(this.firestore,new zn(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=xw(e),s=Dw(e,i=>new rh(this.firestore,new zn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return kw(this._delegate,t,s)}withConverter(e){return new Qe(this.firestore,e?this._delegate.withConverter($s.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class pR{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new bo(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class rh{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Qe(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new bo(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new pR(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new bo(this._firestore,s))})}isEqual(e){return ww(this._delegate,e._delegate)}}class Vi extends Qe{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bt(this.firestore,e):null}doc(e){try{return e===void 0?new bt(this.firestore,hc(this._delegate)):new bt(this.firestore,hc(this._delegate,e))}catch(t){throw Ye(t,"doc()","CollectionReference.doc()")}}add(e){return eR(this._delegate,e).then(t=>new bt(this.firestore,t))}isEqual(e){return cw(this._delegate,e._delegate)}withConverter(e){return new Vi(this.firestore,e?this._delegate.withConverter($s.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Is(n){return G(n,te)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(...e){this._delegate=new Kn(...e)}static documentId(){return new of(fe.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof Kn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this._delegate=e}static serverTimestamp(){const e=rR();return e._methodName="FieldValue.serverTimestamp",new _s(e)}static delete(){const e=iR();return e._methodName="FieldValue.delete",new _s(e)}static arrayUnion(...e){const t=oR(...e);return t._methodName="FieldValue.arrayUnion",new _s(t)}static arrayRemove(...e){const t=aR(...e);return t._methodName="FieldValue.arrayRemove",new _s(t)}static increment(e){const t=cR(e);return t._methodName="FieldValue.increment",new _s(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR={Firestore:Aw,GeoPoint:cl,Timestamp:re,Blob:Io,Transaction:Rw,WriteBatch:Nw,DocumentReference:bt,DocumentSnapshot:Eo,Query:Qe,QueryDocumentSnapshot:bo,QuerySnapshot:rh,CollectionReference:Vi,FieldPath:of,FieldValue:_s,setLogLevel:fR,CACHE_SIZE_UNLIMITED:mA};function mR(n,e){n.INTERNAL.registerComponent(new st("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(s,i)},"PUBLIC").setServiceProps(Object.assign({},gR)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(n){mR(n,(e,t)=>new Aw(e,t,new dR)),n.registerVersion(lR,uR)}_R(Nt);const Wg="@firebase/database",Gg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pw="";function Ow(n){Pw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:eo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yR(e)}}catch{}return new vR},Es=Lw("localStorage"),oh=Lw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Qi("@firebase/database"),Mw=function(){let n=1;return function(){return n++}}(),Fw=function(n){const e=Vb(n),t=new Mb;t.update(e);const s=t.digest();return Ph.encodeByteArray(s)},oa=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=oa.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let Ts=null,Kg=!0;const Uw=function(n,e){E(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(bi.logLevel=j.VERBOSE,Ts=bi.log.bind(bi),e&&oh.set("logging_enabled",!0)):typeof n=="function"?Ts=n:(Ts=null,oh.remove("logging_enabled"))},Ce=function(...n){if(Kg===!0&&(Kg=!1,Ts===null&&oh.get("logging_enabled")===!0&&Uw(!0)),Ts){const e=oa.apply(null,n);Ts(e)}},aa=function(n){return function(...e){Ce(n,...e)}},ah=function(...n){const e="FIREBASE INTERNAL ERROR: "+oa(...n);bi.error(e)},en=function(...n){const e=`FIREBASE FATAL ERROR: ${oa(...n)}`;throw bi.error(e),new Error(e)},Ke=function(...n){const e="FIREBASE WARNING: "+oa(...n);bi.warn(e)},wR=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pl=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},IR=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},mn="[MIN_NAME]",tn="[MAX_NAME]",ri=function(n,e){if(n===e)return 0;if(n===mn||e===tn)return-1;if(e===mn||n===tn)return 1;{const t=fc(n),s=fc(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},ER=function(n,e){return n===e?0:n<e?-1:1},Er=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ye(e))},af=function(n){if(typeof n!="object"||n===null)return ye(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ye(e[s]),t+=":",t+=af(n[e[s]]);return t+="}",t},Vw=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Bw=function(n){E(!pl(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},bR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function SR(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const CR=new RegExp("^-?(0*)\\d{1,10}$"),qw=-2147483648,cf=2147483647,fc=function(n){if(CR.test(n)){const e=Number(n);if(e>=qw&&e<=cf)return e}return null},ar=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ke("Exception was thrown by user callback.",t),e},Math.floor(0))}},kR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wr=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Ti{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ti.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="5",$w="v",jw="s",Ww="r",Gw="f",Kw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zw="ls",Hw="p",ch="ac",Qw="websocket",Yw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t,s,i,r=!1,o="",a=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Es.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Es.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function NR(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Xw(n,e,t){E(typeof e=="string","typeof type must == string"),E(typeof t=="object","typeof params must == object");let s;if(e===Qw)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Yw)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NR(n)&&(t.ns=n.namespace);const i=[];return Ne(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.counters_={}}incrementCounter(e,t=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Tb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu={},pu={};function uf(n){const e=n.toString();return fu[e]||(fu[e]=new xR),fu[e]}function DR(n,e){const t=n.toString();return pu[t]||(pu[t]=e()),pu[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ar(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="start",OR="close",LR="pLPCommand",MR="pRTLPCB",Zw="id",eI="pw",tI="ser",FR="cb",UR="seg",VR="ts",BR="d",qR="dframe",nI=1870,sI=30,$R=nI-sI,jR=25e3,WR=3e4;class xn{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=aa(e),this.stats_=uf(t),this.urlFn=c=>(this.appCheckToken&&(c[ch]=this.appCheckToken),Xw(t,Yw,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new PR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WR)),IR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hf((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zg)this.id=a,this.password=c;else if(o===OR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[zg]="t",s[tI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[FR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$w]=lf,this.transportSessionId&&(s[jw]=this.transportSessionId),this.lastSessionId&&(s[zw]=this.lastSessionId),this.applicationId&&(s[Hw]=this.applicationId),this.appCheckToken&&(s[ch]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Kw.test(location.hostname)&&(s[Ww]=Gw);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xn.forceAllow_=!0}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){return xn.forceAllow_?!0:!xn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!bR()&&!TR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=o_(t),i=Vw(s,$R);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[qR]="t",s[Zw]=e,s[eI]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ye(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hf{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mw(),window[LR+this.uniqueCallbackIdentifier]=e,window[MR+this.uniqueCallbackIdentifier]=t,this.myIFrame=hf.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zw]=this.myID,e[eI]=this.myPW,e[tI]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sI+s.length<=nI;){const o=this.pendingSegs.shift();s=s+"&"+UR+i+"="+o.seg+"&"+VR+i+"="+o.ts+"&"+BR+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(jR)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=16384,KR=45e3;let pc=null;typeof MozWebSocket!="undefined"?pc=MozWebSocket:typeof WebSocket!="undefined"&&(pc=WebSocket);class Et{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=aa(this.connId),this.stats_=uf(t),this.connURL=Et.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[$w]=lf,typeof location!="undefined"&&location.hostname&&Kw.test(location.hostname)&&(o[Ww]=Gw),t&&(o[jw]=t),s&&(o[zw]=s),i&&(o[ch]=i),r&&(o[Hw]=r),Xw(e,Qw,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Es.set("previous_websocket_failure",!0);try{let s;a_(),this.mySock=new pc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pc!==null&&!Et.forceDisallow_}static previouslyFailed(){return Es.isInMemoryStorage||Es.get("previous_websocket_failure")===!0}markConnectionHealthy(){Es.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=eo(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Vw(t,GR);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xn,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Et&&Et.isAvailable();let s=t&&!Et.previouslyFailed();if(e.webSocketOnly&&(t||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Et];else{const i=this.transports_=[];for(const r of Bi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Bi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=6e4,HR=5e3,QR=10*1024,YR=100*1024,gu="t",Hg="d",JR="s",Qg="r",XR="e",Yg="o",Jg="a",Xg="n",Zg="p",ZR="h";class eN{constructor(e,t,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=aa("c:"+this.id+":"),this.transportManager_=new Bi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gu in e){const t=e[gu];t===Jg?this.upgradeIfSecondaryHealthy_():t===Qg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Yg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Er("t",e),s=Er("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Er("t",e),s=Er("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Er(gu,e);if(Hg in e){const s=e[Hg];if(t===ZR)this.onHandshake_(s);else if(t===Xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===JR?this.onConnectionShutdown_(s):t===Qg?this.onReset_(s):t===XR?ah("Server Error: "+s):t===Yg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ah("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),lf!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Wr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Es.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends rI{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Mc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gc}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=32,tm=768;class H{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function z(){return new H("")}function U(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Hn(n){return n.pieces_.length-n.pieceNum_}function J(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new H(n.pieces_,e)}function df(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function tN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function To(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function oI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new H(e,0)}function ie(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof H)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new H(t,0)}function V(n){return n.pieceNum_>=n.pieces_.length}function tt(n,e){const t=U(n),s=U(e);if(t===null)return e;if(t===s)return tt(J(n),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function nN(n,e){const t=To(n,0),s=To(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=ri(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function ff(n,e){if(Hn(n)!==Hn(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Tt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Hn(n)>Hn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class sN{constructor(e,t){this.errorPrefix_=t,this.parts_=To(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fc(this.parts_[s]);aI(this)}}function iN(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fc(e),aI(n)}function rN(n){const e=n.parts_.pop();n.byteLength_-=Fc(e),n.parts_.length>0&&(n.byteLength_-=1)}function aI(n){if(n.byteLength_>tm)throw new Error(n.errorPrefix_+"has a key path longer than "+tm+" bytes ("+n.byteLength_+").");if(n.parts_.length>em)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+em+") or object contains a cycle "+ds(n))}function ds(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends rI{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new pf}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=1e3,oN=60*5*1e3,aN=3*1e3,nm=30*1e3,cN=1.3,lN=3e4,uN="server_kill",sm=3;class un extends iI{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=un.nextPersistentConnectionId_++,this.log_=aa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=br,this.maxReconnectDelay_=oN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!a_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ye(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ot,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},aN),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;un.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vt(e,"w")){const s=Rs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ob(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ah("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lN&&(this.reconnectDelay_=br),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+un.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){E(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new eN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Ke(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(uN)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),c())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wa(this.interruptReasons_)&&(this.reconnectDelay_=br,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>af(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new H(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Ce("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sm&&(this.reconnectDelay_=nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ce("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Pw.replace(/\./g,"-")]=1,Mc()?e["framework.cordova"]=1:Uo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gc.getInstance().currentlyOnline();return Wa(this.interruptReasons_)&&e}}un.nextPersistentConnectionId_=0;un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new q(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new q(mn,e),i=new q(mn,t);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class cI extends gl{static get __EMPTY_NODE(){return Aa}static set __EMPTY_NODE(e){Aa=e}compare(e,t){return ri(e.name,t.name)}isDefinedOn(e){throw Hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return q.MIN}maxPost(){return new q(tn,Aa)}makePost(e,t){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Aa)}toString(){return".key"}}const Qt=new cI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:Se.RED,this.left=i!=null?i:lt.EMPTY_NODE,this.right=r!=null?r:lt.EMPTY_NODE}copy(e,t,s,i,r){return new Se(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class hN{copy(e,t,s,i,r){return this}insert(e,t,s){return new Se(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class lt{constructor(e,t=lt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new lt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ra(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ra(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ra(this.root_,null,this.comparator_,!0,e)}}lt.EMPTY_NODE=new hN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(n,e){return ri(n.name,e.name)}function gf(n,e){return ri(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;function fN(n){lh=n}const lI=function(n){return typeof n=="number"?"number:"+Bw(n):"string:"+n},uI=function(n){if(n.isLeafNode()){const e=n.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else E(n===lh||n.isEmpty(),"priority of unexpected type.");E(n===lh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;class Ie{constructor(e,t=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uI(this.priorityNode_)}static set __childrenNodeConstructor(e){im=e}static get __childrenNodeConstructor(){return im}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:U(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=U(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Bw(this.value_):e+=this.value_,this.lazyHash_=Fw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=Ie.VALUE_TYPE_ORDER.indexOf(t),r=Ie.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+t),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hI,dI;function pN(n){hI=n}function gN(n){dI=n}class mN extends gl{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ri(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return q.MIN}maxPost(){return new q(tn,new Ie("[PRIORITY-POST]",dI))}makePost(e,t){const s=hI(e);return new q(t,new Ie("[PRIORITY-POST]",s))}toString(){return".priority"}}const ee=new mN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=Math.log(2);class yN{constructor(e){const t=r=>parseInt(Math.log(r)/_N,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mc=function(n,e,t,s){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new Se(d,h.node,Se.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=i(c,f),_=i(f+1,l);return h=n[f],d=t?t(h):h,new Se(d,h.node,Se.BLACK,p,_)}},r=function(c){let l=null,u=null,h=n.length;const d=function(p,_){const w=h-p,P=h;h-=p;const F=i(w+1,P),R=n[w],B=t?t(R):R;f(new Se(B,R.node,_,null,F))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const _=c.nextBitIsOne(),w=Math.pow(2,c.count-(p+1));_?d(w,Se.BLACK):(d(w,Se.BLACK),d(w,Se.RED))}return u},o=new yN(n.length),a=r(o);return new lt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu;const di={};class an{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return E(di&&ee,"ChildrenNode.ts has not been loaded"),mu=mu||new an({".priority":di},{".priority":ee}),mu}get(e){const t=Rs(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof lt?t:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,t){E(e!==Qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=mc(s,e.getCompare()):a=di;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new an(u,l)}addToIndexes(e,t){const s=Ga(this.indexes_,(i,r)=>{const o=Rs(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===di)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(q.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),mc(a,o.getCompare())}else return di;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new q(e.name,a))),c.insert(e,e.node)}});return new an(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ga(this.indexes_,i=>{if(i===di)return i;{const r=t.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new an(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;class A{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&uI(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tr||(Tr=new A(new lt(gf),null,an.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tr}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Tr:t}}getChild(e){const t=U(e);return t===null?this:this.getImmediateChild(t).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(E(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new q(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tr:this.priorityNode_;return new A(i,o,r)}}updateChild(e,t){const s=U(e);if(s===null)return t;{E(U(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(J(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(ee,(o,a)=>{t[o]=a.val(e),s++,r&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lI(this.getPriority().val())+":"),this.forEachChild(ee,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Fw(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new q(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new q(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ca?-1:0}withIndex(e){if(e===Qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(ee),i=t.getIterator(ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qt?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vN extends A{constructor(){super(new lt(gf),A.EMPTY_NODE,an.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const ca=new vN;Object.defineProperties(q,{MIN:{value:new q(mn,A.EMPTY_NODE)},MAX:{value:new q(tn,ca)}});cI.__EMPTY_NODE=A.EMPTY_NODE;Ie.__childrenNodeConstructor=A;fN(ca);gN(ca);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=!0;function oe(n,e=null){if(n===null)return A.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ie(t,oe(e))}if(!(n instanceof Array)&&wN){const t=[];let s=!1;if(Ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=oe(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new q(o,c)))}}),t.length===0)return A.EMPTY_NODE;const r=mc(t,dN,o=>o.name,gf);if(s){const o=mc(t,ee.getCompare());return new A(r,oe(e),new an({".priority":o},{".priority":ee}))}else return new A(r,oe(e),an.Default)}else{let t=A.EMPTY_NODE;return Ne(n,(s,i)=>{if(vt(n,s)&&s.substring(0,1)!=="."){const r=oe(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(oe(e))}}pN(oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends gl{constructor(e){super(),this.indexPath_=e,E(!V(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ri(e.name,t.name):r}makePost(e,t){const s=oe(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(t,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,ca);return new q(tn,e)}toString(){return To(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN extends gl{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ri(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,t){const s=oe(e);return new q(t,s)}toString(){return".value"}}const _f=new IN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",uh="-",fI="z",pI=786,EN=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=qi.charAt(t%64),t=Math.floor(t/64);E(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=qi.charAt(e[i]);return E(o.length===20,"nextPushId: Length should be 20."),o}}(),rm=function(n){if(n===""+cf)return uh;const e=fc(n);if(e!=null)return""+(e+1);const t=new Array(n.length);for(let o=0;o<t.length;o++)t[o]=n.charAt(o);if(t.length<pI)return t.push(uh),t.join("");let s=t.length-1;for(;s>=0&&t[s]===fI;)s--;if(s===-1)return tn;const i=t[s],r=qi.charAt(qi.indexOf(i)+1);return t[s]=r,t.slice(0,s+1).join("")},om=function(n){if(n===""+qw)return mn;const e=fc(n);if(e!=null)return""+(e-1);const t=new Array(n.length);for(let s=0;s<t.length;s++)t[s]=n.charAt(s);return t[t.length-1]===uh?t.length===1?""+cf:(delete t[t.length-1],t.join("")):(t[t.length-1]=qi.charAt(qi.indexOf(t[t.length-1])-1),t.join("")+fI.repeat(pI-t.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n){return{type:"value",snapshotNode:n}}function $i(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function So(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Co(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function bN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(So(t,a)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange($i(t,s)):o.trackChildChange(Co(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,r)=>{t.hasChild(i)||s.trackChildChange(So(i,r))}),t.isLeafNode()||t.forEachChild(ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Co(i,r,o))}else s.trackChildChange($i(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.indexedFilter_=new yf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ko.getStartPost_(e),this.endPost_=ko.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,s,i,r,o){return this.matches(new q(t,s))||(s=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=A.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const r=this;return t.forEachChild(ee,(o,a)=>{r.matches(new q(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e){this.rangedFilter_=new ko(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new q(t,s))||(s=A.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=t.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let r,o,a,c;if(this.reverse_){c=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else c=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let l=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&a(r,h)<=0&&(u=!0),u&&l<this.limit_&&a(h,o)<=0?l++:i=i.updateImmediateChild(h.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;E(a.numChildren()===this.limit_,"");const c=new q(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Co(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(So(t,h));const _=a.updateImmediateChild(t,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange($i(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(So(l.name,l.node)),r.trackChildChange($i(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new ml;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SN(n){return n.loadsAllData()?new yf(n.getIndex()):n.hasLimit()?new TN(n):new ko(n)}function CN(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function kN(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function hh(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function AN(n,e,t){let s;if(n.index_===Qt)typeof e=="string"&&(e=rm(e)),s=hh(n,e,t);else{let i;t==null?i=tn:i=rm(t),s=hh(n,e,i)}return s.startAfterSet_=!0,s}function dh(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function RN(n,e,t){let s,i;return n.index_===Qt?(typeof e=="string"&&(e=om(e)),i=dh(n,e,t)):(t==null?s=mn:s=om(t),i=dh(n,e,s)),i.endBeforeSet_=!0,i}function _l(n,e){const t=n.copy();return t.index_=e,t}function am(n){const e={};if(n.isDefault())return e;let t;return n.index_===ee?t="$priority":n.index_===_f?t="$value":n.index_===Qt?t="$key":(E(n.index_ instanceof mf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ye(t),n.startSet_&&(e.startAt=ye(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+ye(n.indexStartName_))),n.endSet_&&(e.endAt=ye(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+ye(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function cm(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ee&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends iI{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=aa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_c.getListenId_(e,s),a={};this.listens_[o]=a;const c=am(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),Rs(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=_c.getListenId_(e,t);delete this.listens_[s]}get(e){const t=am(e._queryParams),s=e._path.toString(),i=new ot;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=eo(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return{value:null,children:new Map}}function cr(n,e,t){if(V(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=U(e);n.children.has(s)||n.children.set(s,yc());const i=n.children.get(s);e=J(e),cr(i,e,t)}}function fh(n,e){if(V(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ee,(s,i)=>{cr(n,new H(s),i)}),fh(n,e)}}else if(n.children.size>0){const t=U(e);return e=J(e),n.children.has(t)&&fh(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function ph(n,e,t){n.value!==null?t(e,n.value):xN(n,(s,i)=>{const r=new H(e.toString()+"/"+s);ph(i,r,t)})}function xN(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ne(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=10*1e3,PN=30*1e3,ON=5*60*1e3;class LN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new DN(e);const s=lm+(PN-lm)*Math.random();Wr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Ne(e,(i,r)=>{r>0&&vt(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Wr(this.reportStats_.bind(this),Math.floor(Math.random()*2*ON))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ot||(Ot={}));function vf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function If(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ot.ACK_USER_WRITE,this.source=vf()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new H(e));return new vc(z(),t,this.revert)}}else return E(U(this.path)===e,"operationForChild called for unrelated child."),new vc(J(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this.source=e,this.path=t,this.type=Ot.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Ao(this.source,z()):new Ao(this.source,J(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ot.OVERWRITE}operationForChild(e){return V(this.path)?new js(this.source,z(),this.snap.getImmediateChild(e)):new js(this.source,J(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ot.MERGE}operationForChild(e){if(V(this.path)){const t=this.children.subtree(new H(e));return t.isEmpty()?null:t.value?new js(this.source,z(),t.value):new ji(this.source,z(),t)}else return E(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ji(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const t=U(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function FN(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bN(o.childName,o.snapshotNode))}),Sr(n,i,"child_removed",e,s,t),Sr(n,i,"child_added",e,s,t),Sr(n,i,"child_moved",r,s,t),Sr(n,i,"child_changed",e,s,t),Sr(n,i,"value",e,s,t),i}function Sr(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>VN(n,a,c)),o.forEach(a=>{const c=UN(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function UN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function VN(n,e,t){if(e.childName==null||t.childName==null)throw Hi("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n,e){return{eventCache:n,serverCache:e}}function Gr(n,e,t,s){return yl(new Qn(e,t,s),n.serverCache)}function mI(n,e,t,s){return yl(n.eventCache,new Qn(e,t,s))}function wc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ws(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u;const BN=()=>(_u||(_u=new lt(ER)),_u);class X{constructor(e,t=BN()){this.value=e,this.children=t}static fromObject(e){let t=new X(null);return Ne(e,(s,i)=>{t=t.set(new H(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:z(),value:this.value};if(V(e))return null;{const s=U(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(J(e),t);return r!=null?{path:ie(new H(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const t=U(e),s=this.children.get(t);return s!==null?s.subtree(J(e)):new X(null)}}set(e,t){if(V(e))return new X(t,this.children);{const s=U(e),r=(this.children.get(s)||new X(null)).set(J(e),t),o=this.children.insert(s,r);return new X(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const t=U(e),s=this.children.get(t);if(s){const i=s.remove(J(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new X(null):new X(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const t=U(e),s=this.children.get(t);return s?s.get(J(e)):null}}setTree(e,t){if(V(e))return t;{const s=U(e),r=(this.children.get(s)||new X(null)).setTree(J(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new X(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ie(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,z(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(V(e))return null;{const r=U(e),o=this.children.get(r);return o?o.findOnPath_(J(e),ie(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,z(),t)}foreachOnPath_(e,t,s){if(V(e))return this;{this.value&&s(t,this.value);const i=U(e),r=this.children.get(i);return r?r.foreachOnPath_(J(e),ie(t,i),s):new X(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(ie(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new X(null))}}function Kr(n,e,t){if(V(e))return new Lt(new X(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=tt(i,e);return r=r.updateChild(o,t),new Lt(n.writeTree_.set(i,r))}else{const i=new X(t),r=n.writeTree_.setTree(e,i);return new Lt(r)}}}function gh(n,e,t){let s=n;return Ne(t,(i,r)=>{s=Kr(s,ie(e,i),r)}),s}function um(n,e){if(V(e))return Lt.empty();{const t=n.writeTree_.setTree(e,new X(null));return new Lt(t)}}function mh(n,e){return oi(n,e)!=null}function oi(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(tt(t.path,e)):null}function hm(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ee,(s,i)=>{e.push(new q(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Mn(n,e){if(V(e))return n;{const t=oi(n,e);return t!=null?new Lt(new X(t)):new Lt(n.writeTree_.subtree(e))}}function _h(n){return n.writeTree_.isEmpty()}function Wi(n,e){return _I(z(),n.writeTree_,e)}function _I(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=_I(ie(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ie(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n,e){return II(e,n)}function qN(n,e,t,s,i){E(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Kr(n.visibleWrites,e,t)),n.lastWriteId=s}function $N(n,e,t,s){E(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=gh(n.visibleWrites,e,t),n.lastWriteId=s}function jN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function WN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);E(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&GN(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return KN(n),!0;if(s.snap)n.visibleWrites=um(n.visibleWrites,s.path);else{const a=s.children;Ne(a,c=>{n.visibleWrites=um(n.visibleWrites,ie(s.path,c))})}return!0}else return!1}function GN(n,e){if(n.snap)return Tt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Tt(ie(n.path,t),e))return!0;return!1}function KN(n){n.visibleWrites=yI(n.allWrites,zN,z()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function zN(n){return n.visible}function yI(n,e,t){let s=Lt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(t,o)?(a=tt(t,o),s=Kr(s,a,r.snap)):Tt(o,t)&&(a=tt(o,t),s=Kr(s,z(),r.snap.getChild(a)));else if(r.children){if(Tt(t,o))a=tt(t,o),s=gh(s,a,r.children);else if(Tt(o,t))if(a=tt(o,t),V(a))s=gh(s,z(),r.children);else{const c=Rs(r.children,U(a));if(c){const l=c.getChild(J(a));s=Kr(s,z(),l)}}}else throw Hi("WriteRecord should have .snap or .children")}}return s}function vI(n,e,t,s,i){if(!s&&!i){const r=oi(n.visibleWrites,e);if(r!=null)return r;{const o=Mn(n.visibleWrites,e);if(_h(o))return t;if(t==null&&!mh(o,z()))return null;{const a=t||A.EMPTY_NODE;return Wi(o,a)}}}else{const r=Mn(n.visibleWrites,e);if(!i&&_h(r))return t;if(!i&&t==null&&!mh(r,z()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Tt(l.path,e)||Tt(e,l.path))},a=yI(n.allWrites,o,e),c=t||A.EMPTY_NODE;return Wi(a,c)}}}function HN(n,e,t){let s=A.EMPTY_NODE;const i=oi(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Mn(n.visibleWrites,e);return t.forEachChild(ee,(o,a)=>{const c=Wi(Mn(r,new H(o)),a);s=s.updateImmediateChild(o,c)}),hm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Mn(n.visibleWrites,e);return hm(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function QN(n,e,t,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,t);if(mh(n.visibleWrites,r))return null;{const o=Mn(n.visibleWrites,r);return _h(o)?i.getChild(t):Wi(o,i.getChild(t))}}function YN(n,e,t,s){const i=ie(e,t),r=oi(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Mn(n.visibleWrites,i);return Wi(o,s.getNode().getImmediateChild(t))}else return null}function JN(n,e){return oi(n.visibleWrites,e)}function XN(n,e,t,s,i,r,o){let a;const c=Mn(n.visibleWrites,e),l=oi(c,z());if(l!=null)a=l;else if(t!=null)a=Wi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function ZN(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function Ic(n,e,t,s){return vI(n.writeTree,n.treePath,e,t,s)}function Ef(n,e){return HN(n.writeTree,n.treePath,e)}function dm(n,e,t,s){return QN(n.writeTree,n.treePath,e,t,s)}function Ec(n,e){return JN(n.writeTree,ie(n.treePath,e))}function ex(n,e,t,s,i,r){return XN(n.writeTree,n.treePath,e,t,s,i,r)}function bf(n,e,t){return YN(n.writeTree,n.treePath,e,t)}function wI(n,e){return II(ie(n.treePath,e),n.writeTree)}function II(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;E(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Co(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,So(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,$i(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Co(s,e.snapshotNode,i.oldSnap));else throw Hi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const EI=new nx;class Tf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bf(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ws(this.viewCache_),r=ex(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(n){return{filter:n}}function ix(n,e){E(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function rx(n,e,t,s,i){const r=new tx;let o,a;if(t.type===Ot.OVERWRITE){const l=t;l.source.fromUser?o=yh(n,e,l.path,l.snap,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!V(l.path),o=bc(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===Ot.MERGE){const l=t;l.source.fromUser?o=ax(n,e,l.path,l.children,s,i,r):(E(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=vh(n,e,l.path,l.children,s,i,a,r))}else if(t.type===Ot.ACK_USER_WRITE){const l=t;l.revert?o=ux(n,e,l.path,s,i,r):o=cx(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===Ot.LISTEN_COMPLETE)o=lx(n,e,t.path,s,r);else throw Hi("Unknown operation type: "+t.type);const c=r.getChanges();return ox(e,o,c),{viewCache:o,changes:c}}function ox(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wc(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(gI(wc(e)))}}function bI(n,e,t,s,i,r){const o=e.eventCache;if(Ec(s,t)!=null)return e;{let a,c;if(V(t))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ws(e),u=l instanceof A?l:A.EMPTY_NODE,h=Ef(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Ic(s,Ws(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=U(t);if(l===".priority"){E(Hn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=dm(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=J(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=dm(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=bf(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Gr(e,a,o.isFullyInitialized()||V(t),n.filter.filtersNodes())}}function bc(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(V(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=U(t);if(!c.isCompleteForPath(t)&&Hn(t)>1)return e;const p=J(t),w=c.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?l=u.updatePriority(c.getNode(),w):l=u.updateChild(c.getNode(),f,w,p,EI,null)}const h=mI(e,l,c.isFullyInitialized()||V(t),u.filtersNodes()),d=new Tf(i,h,r);return bI(n,h,t,i,d,a)}function yh(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const u=new Tf(i,e,r);if(V(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Gr(e,l,!0,n.filter.filtersNodes());else{const h=U(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Gr(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=J(t),f=a.getNode().getImmediateChild(h);let p;if(V(d))p=s;else{const _=u.getCompleteChild(h);_!=null?df(d)===".priority"&&_.getChild(oI(d)).isEmpty()?p=_:p=_.updateChild(d,s):p=A.EMPTY_NODE}if(f.equals(p))c=e;else{const _=n.filter.updateChild(a.getNode(),h,p,d,u,o);c=Gr(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function fm(n,e){return n.eventCache.isCompleteForChild(e)}function ax(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=ie(t,c);fm(e,U(u))&&(a=yh(n,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=ie(t,c);fm(e,U(u))||(a=yh(n,a,u,l,i,r,o))}),a}function pm(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function vh(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;V(t)?l=s:l=new X(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=pm(n,f,d);c=bc(n,c,new H(h),p,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),_=pm(n,p,d);c=bc(n,c,new H(h),_,i,r,o,a)}}),c}function cx(n,e,t,s,i,r,o){if(Ec(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(V(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return bc(n,e,t,c.getNode().getChild(t),i,r,a,o);if(V(t)){let l=new X(null);return c.getNode().forEachChild(Qt,(u,h)=>{l=l.set(new H(u),h)}),vh(n,e,t,l,i,r,a,o)}else return e}else{let l=new X(null);return s.foreach((u,h)=>{const d=ie(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),vh(n,e,t,l,i,r,a,o)}}function lx(n,e,t,s,i){const r=e.serverCache,o=mI(e,r.getNode(),r.isFullyInitialized()||V(t),r.isFiltered());return bI(n,o,t,s,EI,i)}function ux(n,e,t,s,i,r){let o;if(Ec(s,t)!=null)return e;{const a=new Tf(s,e,i),c=e.eventCache.getNode();let l;if(V(t)||U(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ic(s,Ws(e));else{const h=e.serverCache.getNode();E(h instanceof A,"serverChildren would be complete if leaf node"),u=Ef(s,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=U(t);let h=bf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,J(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,A.EMPTY_NODE,J(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ic(s,Ws(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ec(s,z())!=null,Gr(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new yf(s.getIndex()),r=SN(s);this.processor_=sx(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(A.EMPTY_NODE,a.getNode(),null),u=new Qn(c,o.isFullyInitialized(),i.filtersNodes()),h=new Qn(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=yl(h,u),this.eventGenerator_=new MN(this.query_)}get query(){return this.query_}}function dx(n){return n.viewCache_.serverCache.getNode()}function fx(n){return wc(n.viewCache_)}function px(n,e){const t=Ws(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!V(e)&&!t.getImmediateChild(U(e)).isEmpty())?t.getChild(e):null}function gm(n){return n.eventRegistrations_.length===0}function gx(n,e){n.eventRegistrations_.push(e)}function mm(n,e,t){const s=[];if(t){E(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function _m(n,e,t,s){e.type===Ot.MERGE&&e.source.queryId!==null&&(E(Ws(n.viewCache_),"We should always have a full cache before handling merges"),E(wc(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=rx(n.processor_,i,e,t,s);return ix(n.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,TI(n,r.changes,r.viewCache.eventCache.getNode(),null)}function mx(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ee,(r,o)=>{s.push($i(r,o))}),t.isFullyInitialized()&&s.push(gI(t.getNode())),TI(n,s,t.getNode(),e)}function TI(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return FN(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc;class SI{constructor(){this.views=new Map}}function _x(n){E(!Tc,"__referenceConstructor has already been defined"),Tc=n}function yx(){return E(Tc,"Reference.ts has not been loaded"),Tc}function vx(n){return n.views.size===0}function Sf(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),_m(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(_m(o,e,t,s));return r}}function Cf(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ic(t,i?s:null),c=!1;a?c=!0:s instanceof A?(a=Ef(t,s),c=!1):(a=A.EMPTY_NODE,c=!1);const l=yl(new Qn(a,c,!1),new Qn(s,i,!1));return new hx(e,l)}return o}function wx(n,e,t,s,i,r){const o=Cf(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),gx(o,t),mx(o,t)}function Ix(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Yn(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(mm(l,t,s)),gm(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(mm(c,t,s)),gm(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Yn(n)&&r.push(new(yx())(e._repo,e._path)),{removed:r,events:o}}function CI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Fn(n,e){let t=null;for(const s of n.views.values())t=t||px(s,e);return t}function kI(n,e){if(e._queryParams.loadsAllData())return wl(n);{const s=e._queryIdentifier;return n.views.get(s)}}function AI(n,e){return kI(n,e)!=null}function Yn(n){return wl(n)!=null}function wl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;function Ex(n){E(!Sc,"__referenceConstructor has already been defined"),Sc=n}function bx(){return E(Sc,"Reference.ts has not been loaded"),Sc}let Tx=1;class ym{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=ZN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kf(n,e,t,s,i){return qN(n.pendingWriteTree_,e,t,s,i),i?lr(n,new js(vf(),e,t)):[]}function Sx(n,e,t,s){$N(n.pendingWriteTree_,e,t,s);const i=X.fromObject(t);return lr(n,new ji(vf(),e,i))}function Dn(n,e,t=!1){const s=jN(n.pendingWriteTree_,e);if(WN(n.pendingWriteTree_,e)){let r=new X(null);return s.snap!=null?r=r.set(z(),!0):Ne(s.children,o=>{r=r.set(new H(o),!0)}),lr(n,new vc(s.path,r,t))}else return[]}function la(n,e,t){return lr(n,new js(wf(),e,t))}function Cx(n,e,t){const s=X.fromObject(t);return lr(n,new ji(wf(),e,s))}function kx(n,e){return lr(n,new Ao(wf(),e))}function Ax(n,e,t){const s=Af(n,t);if(s){const i=Rf(s),r=i.path,o=i.queryId,a=tt(r,e),c=new Ao(If(o),a);return Nf(n,r,c)}else return[]}function Cc(n,e,t,s){const i=e._path,r=n.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||AI(r,e))){const a=Ix(r,e,t,s);vx(r)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const c=a.removed;o=a.events;const l=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(i,(h,d)=>Yn(d));if(l&&!u){const h=n.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=Dx(h);for(let f=0;f<d.length;++f){const p=d[f],_=p.query,w=PI(n,p);n.listenProvider_.startListening(zr(_),Ro(n,_),w.hashFn,w.onComplete)}}}!u&&c.length>0&&!s&&(l?n.listenProvider_.stopListening(zr(e),null):c.forEach(h=>{const d=n.queryToTagMap.get(El(h));n.listenProvider_.stopListening(zr(h),d)})),Px(n,c)}return o}function Rx(n,e){const{syncPoint:t,serverCache:s,writesCache:i,serverCacheComplete:r}=NI(e,n),o=Cf(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:Ro(n,e)}function RI(n,e,t,s){const i=Af(n,s);if(i!=null){const r=Rf(i),o=r.path,a=r.queryId,c=tt(o,e),l=new js(If(a),c,t);return Nf(n,o,l)}else return[]}function Nx(n,e,t,s){const i=Af(n,s);if(i){const r=Rf(i),o=r.path,a=r.queryId,c=tt(o,e),l=X.fromObject(t),u=new ji(If(a),c,l);return Nf(n,o,u)}else return[]}function NI(n,e){const t=n._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=tt(l,t);s=s||Fn(u,h),i=i||Yn(u)});let r=e.syncPointTree_.get(t);r?(i=i||Yn(r),s=s||Fn(r,z())):(r=new SI,e.syncPointTree_=e.syncPointTree_.set(t,r));let o;s!=null?o=!0:(o=!1,s=A.EMPTY_NODE,e.syncPointTree_.subtree(t).foreachChild((u,h)=>{const d=Fn(h,z());d&&(s=s.updateImmediateChild(u,d))}));const a=AI(r,n);if(!a&&!n._queryParams.loadsAllData()){const l=El(n);E(!e.queryToTagMap.has(l),"View does not exist, but we have a tag");const u=Ox();e.queryToTagMap.set(l,u),e.tagToQueryMap.set(u,l)}const c=vl(e.pendingWriteTree_,t);return{syncPoint:r,writesCache:c,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:a}}function vm(n,e,t){const{syncPoint:s,serverCache:i,writesCache:r,serverCacheComplete:o,viewAlreadyExists:a,foundAncestorDefaultView:c}=NI(e,n);let l=wx(s,e,t,r,i,o);if(!a&&!c){const u=kI(s,e);l=l.concat(Lx(n,e,u))}return l}function Il(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=tt(o,e),l=Fn(a,c);if(l)return l});return vI(i,e,r,t,!0)}function xx(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=tt(l,t);s=s||Fn(u,h)});let i=n.syncPointTree_.get(t);i?s=s||Fn(i,z()):(i=new SI,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Qn(s,!0,!1):null,a=vl(n.pendingWriteTree_,e._path),c=Cf(i,e,a,r?o.getNode():A.EMPTY_NODE,r);return fx(c)}function lr(n,e){return xI(e,n.syncPointTree_,null,vl(n.pendingWriteTree_,z()))}function xI(n,e,t,s){if(V(n.path))return DI(n,e,t,s);{const i=e.get(z());t==null&&i!=null&&(t=Fn(i,z()));let r=[];const o=U(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=wI(s,o);r=r.concat(xI(a,c,l,u))}return i&&(r=r.concat(Sf(i,n,s,t))),r}}function DI(n,e,t,s){const i=e.get(z());t==null&&i!=null&&(t=Fn(i,z()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=wI(s,o),u=n.operationForChild(o);u&&(r=r.concat(DI(u,a,c,l)))}),i&&(r=r.concat(Sf(i,n,s,t))),r}function PI(n,e){const t=e.query,s=Ro(n,t);return{hashFn:()=>(dx(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ax(n,t._path,s):kx(n,t._path);{const r=SR(i,t);return Cc(n,t,null,r)}}}}function Ro(n,e){const t=El(e);return n.queryToTagMap.get(t)}function El(n){return n._path.toString()+"$"+n._queryIdentifier}function Af(n,e){return n.tagToQueryMap.get(e)}function Rf(n){const e=n.indexOf("$");return E(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new H(n.substr(0,e))}}function Nf(n,e,t){const s=n.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=vl(n.pendingWriteTree_,e);return Sf(s,t,i,null)}function Dx(n){return n.fold((e,t,s)=>{if(t&&Yn(t))return[wl(t)];{let i=[];return t&&(i=CI(t)),Ne(s,(r,o)=>{i=i.concat(o)}),i}})}function zr(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(bx())(n._repo,n._path):n}function Px(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=El(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ox(){return Tx++}function Lx(n,e,t){const s=e._path,i=Ro(n,e),r=PI(n,t),o=n.listenProvider_.startListening(zr(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)E(!Yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!V(l)&&u&&Yn(u))return[wl(u).query];{let d=[];return u&&(d=d.concat(CI(u).map(f=>f.query))),Ne(h,(f,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(zr(u),Ro(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xf(t)}node(){return this.node_}}class Df{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ie(this.path_,e);return new Df(this.syncTree_,t)}node(){return Il(this.syncTree_,this.path_)}}const Mx=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},wm=function(n,e,t){if(!n||typeof n!="object")return n;if(E(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Fx(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Ux(n[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Fx=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:E(!1,"Unexpected server value: "+n)}},Ux=function(n,e,t){n.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},OI=function(n,e,t,s){return Of(e,new Df(t,n),s)},Pf=function(n,e,t){return Of(n,new xf(e),t)};function Of(n,e,t){const s=n.getPriority().val(),i=wm(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=wm(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Ie(a,oe(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ie(i))),o.forEachChild(ee,(a,c)=>{const l=Of(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function bl(n,e){let t=e instanceof H?e:new H(e),s=n,i=U(t);for(;i!==null;){const r=Rs(s.node.children,i)||{children:{},childCount:0};s=new Lf(i,s,r),t=J(t),i=U(t)}return s}function ai(n){return n.node.value}function Mf(n,e){n.node.value=e,wh(n)}function LI(n){return n.node.childCount>0}function Vx(n){return ai(n)===void 0&&!LI(n)}function Tl(n,e){Ne(n.node.children,(t,s)=>{e(new Lf(t,n,s))})}function MI(n,e,t,s){t&&!s&&e(n),Tl(n,i=>{MI(i,e,!0,s)}),t&&s&&e(n)}function Bx(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ua(n){return new H(n.parent===null?n.name:ua(n.parent)+"/"+n.name)}function wh(n){n.parent!==null&&qx(n.parent,n.name,n)}function qx(n,e,t){const s=Vx(t),i=vt(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,wh(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,wh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=/[\[\].#$\/\u0000-\u001F\u007F]/,jx=/[\[\].#$\u0000-\u001F\u007F]/,yu=10*1024*1024,Sl=function(n){return typeof n=="string"&&n.length!==0&&!$x.test(n)},FI=function(n){return typeof n=="string"&&n.length!==0&&!jx.test(n)},Wx=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),FI(n)},No=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!pl(n)||n&&typeof n=="object"&&vt(n,".sv")},nn=function(n,e,t,s){s&&e===void 0||ha(ht(n,"value"),e,t)},ha=function(n,e,t){const s=t instanceof H?new sN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ds(s));if(typeof e=="function")throw new Error(n+"contains a function "+ds(s)+" with contents = "+e.toString());if(pl(e))throw new Error(n+"contains "+e.toString()+" "+ds(s));if(typeof e=="string"&&e.length>yu/3&&Fc(e)>yu)throw new Error(n+"contains a string greater than "+yu+" utf8 bytes "+ds(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sl(o)))throw new Error(n+" contains an invalid key ("+o+") "+ds(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iN(s,o),ha(n,a,s),rN(s)}),i&&r)throw new Error(n+' contains ".value" child '+ds(s)+" in addition to actual children.")}},Gx=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=To(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Sl(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nN);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Tt(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},UI=function(n,e,t,s){if(s&&e===void 0)return;const i=ht(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ne(e,(o,a)=>{const c=new H(o);if(ha(i,a,ie(t,c)),df(c)===".priority"&&!No(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Gx(i,r)},Ff=function(n,e,t){if(!(t&&e===void 0)){if(pl(e))throw new Error(ht(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!No(e))throw new Error(ht(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},da=function(n,e,t,s){if(!(s&&t===void 0)&&!Sl(t))throw new Error(ht(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},xo=function(n,e,t,s){if(!(s&&t===void 0)&&!FI(t))throw new Error(ht(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kx=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),xo(n,e,t,s)},St=function(n,e){if(U(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},VI=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Wx(t))throw new Error(ht(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cl(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ff(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function BI(n,e,t){Cl(n,t),qI(n,s=>ff(s,e))}function At(n,e,t){Cl(n,t),qI(n,s=>Tt(s,e)||Tt(e,s))}function qI(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Hx(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Hx(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ts&&Ce("event: "+t.toString()),ar(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="repo_interrupt",Qx=25;class Yx{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yc(),this.transactionQueueTree_=new Lf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jx(n,e,t){if(n.stats_=uf(n.repoInfo_),n.forceRestClient_||kR())n.server_=new _c(n.repoInfo_,(s,i,r,o)=>{Im(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Em(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new un(n.repoInfo_,e,(s,i,r,o)=>{Im(n,s,i,r,o)},s=>{Em(n,s)},s=>{Xx(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=DR(n.repoInfo_,()=>new LN(n.stats_,n.server_)),n.infoData_=new NN,n.infoSyncTree_=new ym({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=la(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uf(n,"connected",!1),n.serverSyncTree_=new ym({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);At(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function jI(n){const t=n.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function fa(n){return Mx({timestamp:jI(n)})}function Im(n,e,t,s,i){n.dataUpdateCount++;const r=new H(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Ga(t,l=>oe(l));o=Nx(n.serverSyncTree_,r,c,i)}else{const c=oe(t);o=RI(n.serverSyncTree_,r,c,i)}else if(s){const c=Ga(t,l=>oe(l));o=Cx(n.serverSyncTree_,r,c)}else{const c=oe(t);o=la(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Gi(n,r)),At(n.eventQueue_,a,o)}function Em(n,e){Uf(n,"connected",e),e===!1&&tD(n)}function Xx(n,e){Ne(e,(t,s)=>{Uf(n,t,s)})}function Uf(n,e,t){const s=new H("/.info/"+e),i=oe(t);n.infoData_.updateSnapshot(s,i);const r=la(n.infoSyncTree_,s,i);At(n.eventQueue_,s,r)}function kl(n){return n.nextWriteId_++}function Zx(n,e){const t=xx(n.serverSyncTree_,e);return t!=null?Promise.resolve(t):n.server_.get(e).then(s=>{const i=oe(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())la(n.serverSyncTree_,e._path,i);else{const o=Rx(n.serverSyncTree_,e);RI(n.serverSyncTree_,e._path,i,o)}return Cc(n.serverSyncTree_,e,null).length>0&&Gs(n,"unexpected cancel events in repoGetValue"),i},s=>(Gs(n,"get for query "+ye(e)+" failed: "+s),Promise.reject(new Error(s))))}function Vf(n,e,t,s,i){Gs(n,"set",{path:e.toString(),value:t,priority:s});const r=fa(n),o=oe(t,s),a=Il(n.serverSyncTree_,e),c=Pf(o,a,r),l=kl(n),u=kf(n.serverSyncTree_,e,c,l,!0);Cl(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Ke("set at "+e+" failed: "+d);const _=Dn(n.serverSyncTree_,l,!p);At(n.eventQueue_,e,_),Jn(n,i,d,f)});const h=qf(n,e);Gi(n,h),At(n.eventQueue_,h,[])}function eD(n,e,t,s){Gs(n,"update",{path:e.toString(),value:t});let i=!0;const r=fa(n),o={};if(Ne(t,(a,c)=>{i=!1,o[a]=OI(ie(e,a),oe(c),n.serverSyncTree_,r)}),i)Ce("update() called with empty data.  Don't do anything."),Jn(n,s,"ok",void 0);else{const a=kl(n),c=Sx(n.serverSyncTree_,e,o,a);Cl(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||Ke("update at "+e+" failed: "+l);const d=Dn(n.serverSyncTree_,a,!h),f=d.length>0?Gi(n,e):e;At(n.eventQueue_,f,d),Jn(n,s,l,u)}),Ne(t,l=>{const u=qf(n,ie(e,l));Gi(n,u)}),At(n.eventQueue_,e,[])}}function tD(n){Gs(n,"onDisconnectEvents");const e=fa(n),t=yc();ph(n.onDisconnect_,z(),(i,r)=>{const o=OI(i,r,n.serverSyncTree_,e);cr(t,i,o)});let s=[];ph(t,z(),(i,r)=>{s=s.concat(la(n.serverSyncTree_,i,r));const o=qf(n,i);Gi(n,o)}),n.onDisconnect_=yc(),At(n.eventQueue_,z(),s)}function nD(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&fh(n.onDisconnect_,e),Jn(n,t,s,i)})}function bm(n,e,t,s){const i=oe(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&cr(n.onDisconnect_,e,i),Jn(n,s,r,o)})}function sD(n,e,t,s,i){const r=oe(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&cr(n.onDisconnect_,e,r),Jn(n,i,o,a)})}function iD(n,e,t,s){if(Wa(t)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),Jn(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&Ne(t,(o,a)=>{const c=oe(a);cr(n.onDisconnect_,ie(e,o),c)}),Jn(n,s,i,r)})}function rD(n,e,t){let s;U(e._path)===".info"?s=vm(n.infoSyncTree_,e,t):s=vm(n.serverSyncTree_,e,t),BI(n.eventQueue_,e._path,s)}function Ih(n,e,t){let s;U(e._path)===".info"?s=Cc(n.infoSyncTree_,e,t):s=Cc(n.serverSyncTree_,e,t),BI(n.eventQueue_,e._path,s)}function WI(n){n.persistentConnection_&&n.persistentConnection_.interrupt($I)}function oD(n){n.persistentConnection_&&n.persistentConnection_.resume($I)}function Gs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ce(t,...e)}function Jn(n,e,t,s){e&&ar(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function aD(n,e,t,s,i,r){Gs(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:Mw(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Bf(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{ha("transaction failed: Data returned ",c,o.path),o.status=0;const l=bl(n.transactionQueueTree_,e),u=ai(l)||[];u.push(o),Mf(l,u);let h;typeof c=="object"&&c!==null&&vt(c,".priority")?(h=Rs(c,".priority"),E(No(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(Il(n.serverSyncTree_,e)||A.EMPTY_NODE).getPriority().val();const d=fa(n),f=oe(c,h),p=Pf(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=p,o.currentWriteId=kl(n);const _=kf(n.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);At(n.eventQueue_,e,_),Al(n,n.transactionQueueTree_)}}function Bf(n,e,t){return Il(n.serverSyncTree_,e,t)||A.EMPTY_NODE}function Al(n,e=n.transactionQueueTree_){if(e||Rl(n,e),ai(e)){const t=KI(n,e);E(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&cD(n,ua(e),t)}else LI(e)&&Tl(e,t=>{Al(n,t)})}function cD(n,e,t){const s=t.map(l=>l.currentWriteId),i=Bf(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=tt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{Gs(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Dn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Rl(n,bl(n.transactionQueueTree_,e)),Al(n,n.transactionQueueTree_),At(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)ar(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ke("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Gi(n,e)}},o)}function Gi(n,e){const t=GI(n,e),s=ua(t),i=KI(n,t);return lD(n,i,s),s}function lD(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=tt(t,c.path);let u=!1,h;if(E(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Dn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Qx)u=!0,h="maxretry",i=i.concat(Dn(n.serverSyncTree_,c.currentWriteId,!0));else{const d=Bf(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ha("transaction failed: Data returned ",f,c.path);let p=oe(f);typeof f=="object"&&f!=null&&vt(f,".priority")||(p=p.updatePriority(d.getPriority()));const w=c.currentWriteId,P=fa(n),F=Pf(p,d,P);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=F,c.currentWriteId=kl(n),o.splice(o.indexOf(w),1),i=i.concat(kf(n.serverSyncTree_,c.path,F,c.currentWriteId,c.applyLocally)),i=i.concat(Dn(n.serverSyncTree_,w,!0))}else u=!0,h="nodata",i=i.concat(Dn(n.serverSyncTree_,c.currentWriteId,!0))}At(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Rl(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)ar(s[a]);Al(n,n.transactionQueueTree_)}function GI(n,e){let t,s=n.transactionQueueTree_;for(t=U(e);t!==null&&ai(s)===void 0;)s=bl(s,t),e=J(e),t=U(e);return s}function KI(n,e){const t=[];return zI(n,e,t),t.sort((s,i)=>s.order-i.order),t}function zI(n,e,t){const s=ai(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Tl(e,i=>{zI(n,i,t)})}function Rl(n,e){const t=ai(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Mf(e,t.length>0?t:void 0)}Tl(e,s=>{Rl(n,s)})}function qf(n,e){const t=ua(GI(n,e)),s=bl(n.transactionQueueTree_,e);return Bx(s,i=>{vu(n,i)}),vu(n,s),MI(s,i=>{vu(n,i)}),t}function vu(n,e){const t=ai(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(E(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Dn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mf(e,void 0):t.length=r+1,At(n.eventQueue_,ua(e),i);for(let o=0;o<s.length;o++)ar(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hD(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${t}' in query '${n}'`)}return e}const Eh=function(n,e){const t=dD(n),s=t.namespace;t.domain==="firebase.com"&&en(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||wR();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Jw(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new H(t.pathString)}},dD=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=uD(n.substring(u,h)));const d=hD(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class QI{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ot;return nD(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){St("OnDisconnect.remove",this._path);const e=new ot;return bm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){St("OnDisconnect.set",this._path),nn("OnDisconnect.set",e,this._path,!1);const t=new ot;return bm(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){St("OnDisconnect.setWithPriority",this._path),nn("OnDisconnect.setWithPriority",e,this._path,!1),Ff("OnDisconnect.setWithPriority",t,!1);const s=new ot;return sD(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){St("OnDisconnect.update",this._path),UI("OnDisconnect.update",e,this._path,!1);const t=new ot;return iD(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:df(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const e=cm(this._queryParams),t=af(e);return t==="{}"?"default":t}get _queryObject(){return cm(this._queryParams)}isEqual(e){if(e=S(e),!(e instanceof ft))return!1;const t=this._repo===e._repo,s=ff(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tN(this._path)}}function Nl(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function is(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Qt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==mn)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==tn)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===ee){if(e!=null&&!No(e)||t!=null&&!No(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(E(n.getIndex()instanceof mf||n.getIndex()===_f,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function xl(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class xt extends ft{constructor(e,t){super(e,t,new ml,!1)}get parent(){const e=oI(this._path);return e===null?null:new xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ks{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new H(e),s=zs(this.ref,e);return new Ks(this._node.getChild(t),s,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ks(i,zs(this.ref,s),ee)))}hasChild(e){const t=new H(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function JI(n,e){return n=S(n),n._checkNotDeleted("ref"),e!==void 0?zs(n._root,e):n._root}function Tm(n,e){n=S(n),n._checkNotDeleted("refFromURL");const t=Eh(e,n._repo.repoInfo_.nodeAdmin);VI("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&en("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),JI(n,t.path.toString())}function zs(n,e){return n=S(n),U(n._path)===null?Kx("child","path",e,!1):xo("child","path",e,!1),new xt(n._repo,ie(n._path,e))}function pD(n,e){n=S(n),St("push",n._path),nn("push",e,n._path,!0);const t=jI(n._repo),s=EN(t),i=zs(n,s),r=zs(n,s);let o;return e!=null?o=$f(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function gD(n){return St("remove",n._path),$f(n,null)}function $f(n,e){n=S(n),St("set",n._path),nn("set",e,n._path,!1);const t=new ot;return Vf(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function mD(n,e){n=S(n),St("setPriority",n._path),Ff("setPriority",e,!1);const t=new ot;return Vf(n._repo,ie(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function _D(n,e,t){if(St("setWithPriority",n._path),nn("setWithPriority",e,n._path,!1),Ff("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new ot;return Vf(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function yD(n,e){UI("update",e,n._path,!1);const t=new ot;return eD(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function vD(n){return n=S(n),Zx(n._repo,n).then(e=>new Ks(e,new xt(n._repo,n._path),n._queryParams.getIndex()))}class Dl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new HI("value",this,new Ks(e.snapshotNode,new xt(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new QI(this,e,t):null}matches(e){return e instanceof Dl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Pl{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new QI(this,e,t):null}createEvent(e,t){E(e.childName!=null,"Child events should have a childName.");const s=zs(new xt(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new HI(e.type,this,new Ks(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Pl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function pa(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(u,h)=>{Ih(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new YI(t,r||void 0),a=e==="value"?new Dl(o):new Pl(e,o);return rD(n._repo,n,a),()=>Ih(n._repo,n,a)}function bh(n,e,t,s){return pa(n,"value",e,t,s)}function Sm(n,e,t,s){return pa(n,"child_added",e,t,s)}function Cm(n,e,t,s){return pa(n,"child_changed",e,t,s)}function km(n,e,t,s){return pa(n,"child_moved",e,t,s)}function Am(n,e,t,s){return pa(n,"child_removed",e,t,s)}function Rm(n,e,t){let s=null;const i=t?new YI(t):null;e==="value"?s=new Dl(i):e&&(s=new Pl(e,i)),Ih(n._repo,n,s)}class Ut{}class XI extends Ut{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){nn("endAt",this._value,e._path,!0);const t=dh(e._queryParams,this._value,this._key);if(xl(t),is(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ft(e._repo,e._path,t,e._orderByCalled)}}function wD(n,e){return da("endAt","key",e,!0),new XI(n,e)}class ID extends Ut{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){nn("endBefore",this._value,e._path,!1);const t=RN(e._queryParams,this._value,this._key);if(xl(t),is(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ft(e._repo,e._path,t,e._orderByCalled)}}function ED(n,e){return da("endBefore","key",e,!0),new ID(n,e)}class ZI extends Ut{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){nn("startAt",this._value,e._path,!0);const t=hh(e._queryParams,this._value,this._key);if(xl(t),is(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ft(e._repo,e._path,t,e._orderByCalled)}}function bD(n=null,e){return da("startAt","key",e,!0),new ZI(n,e)}class TD extends Ut{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){nn("startAfter",this._value,e._path,!1);const t=AN(e._queryParams,this._value,this._key);if(xl(t),is(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ft(e._repo,e._path,t,e._orderByCalled)}}function SD(n,e){return da("startAfter","key",e,!0),new TD(n,e)}class CD extends Ut{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ft(e._repo,e._path,CN(e._queryParams,this._limit),e._orderByCalled)}}function kD(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new CD(n)}class AD extends Ut{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ft(e._repo,e._path,kN(e._queryParams,this._limit),e._orderByCalled)}}function RD(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new AD(n)}class ND extends Ut{constructor(e){super(),this._path=e}_apply(e){Nl(e,"orderByChild");const t=new H(this._path);if(V(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new mf(t),i=_l(e._queryParams,s);return is(i),new ft(e._repo,e._path,i,!0)}}function xD(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return xo("orderByChild","path",n,!1),new ND(n)}class DD extends Ut{_apply(e){Nl(e,"orderByKey");const t=_l(e._queryParams,Qt);return is(t),new ft(e._repo,e._path,t,!0)}}function PD(){return new DD}class OD extends Ut{_apply(e){Nl(e,"orderByPriority");const t=_l(e._queryParams,ee);return is(t),new ft(e._repo,e._path,t,!0)}}function LD(){return new OD}class MD extends Ut{_apply(e){Nl(e,"orderByValue");const t=_l(e._queryParams,_f);return is(t),new ft(e._repo,e._path,t,!0)}}function FD(){return new MD}class UD extends Ut{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(nn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new XI(this._value,this._key)._apply(new ZI(this._value,this._key)._apply(e))}}function VD(n,e){return da("equalTo","key",e,!0),new UD(n,e)}function Dt(n,...e){let t=S(n);for(const s of e)t=s._apply(t);return t}_x(xt);Ex(xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="FIREBASE_DATABASE_EMULATOR_HOST",Th={};let qD=!1;function $D(n,e,t,s){n.repoInfo_=new Jw(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams),s&&(n.authTokenProvider_=s)}function eE(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Eh(r,i),a=o.repoInfo,c,l;typeof process!="undefined"&&process.env&&(l=process.env[BD]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Eh(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Ti(Ti.OWNER):new RR(n.name,n.options,e);VI("Invalid Firebase Database URL",o),V(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const h=WD(a,n,u,new AR(n.name,t));return new GD(h,n)}function jD(n,e){const t=Th[e];(!t||t[n.key]!==n)&&en(`Database ${e}(${n.repoInfo_}) has already been deleted.`),WI(n),delete t[n.key]}function WD(n,e,t,s){let i=Th[e.name];i||(i={},Th[e.name]=i);let r=i[n.toURLString()];return r&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Yx(n,qD,t,s),i[n.toURLString()]=r,r}class GD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function tE(){Bi.IS_TRANSPORT_INITIALIZED&&Ke("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function KD(){tE(),xn.forceDisallow()}function zD(){tE(),Et.forceDisallow(),xn.forceAllow()}function HD(n,e,t,s={}){n=S(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ti(Ti.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Oh(s.mockUserToken,n.app.options.projectId);r=new Ti(o)}$D(i,e,t,r)}function QD(n){n=S(n),n._checkNotDeleted("goOffline"),WI(n._repo)}function YD(n){n=S(n),n._checkNotDeleted("goOnline"),oD(n._repo)}function JD(n,e){Uw(n,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(n){Ow(yn),Jt(new st("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return eE(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),dt(Wg,Gg,n),dt(Wg,Gg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD={".sv":"timestamp"};function eP(){return ZD}function tP(n){return{".sv":{increment:n}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function sP(n,e,t){var s;if(n=S(n),St("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,r=new ot,o=(c,l,u)=>{let h=null;c?r.reject(c):(h=new Ks(u,new xt(n._repo,n._path),ee),r.resolve(new nP(l,h)))},a=bh(n,()=>{});return aD(n._repo,n._path,e,o,a,i),r.promise}un.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};un.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};XD();const iP="@firebase/database-compat",rP="0.2.2";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new Qi("@firebase/database-compat"),nE=function(n){const e="FIREBASE WARNING: "+n;oP.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(ht(n,e)+"must be a boolean.")},cP=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(ht(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this._delegate=e}cancel(e){N("OnDisconnect.cancel",0,1,arguments.length),be("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){N("OnDisconnect.remove",0,1,arguments.length),be("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){N("OnDisconnect.set",1,2,arguments.length),be("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){N("OnDisconnect.setWithPriority",2,3,arguments.length),be("OnDisconnect.setWithPriority","onComplete",s,!0);const i=this._delegate.setWithPriority(e,t);return s&&i.then(()=>s(null),r=>s(r)),i}update(e,t){if(N("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,nE("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}be("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),i=>t(i)),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return N("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this._database=e,this._delegate=t}val(){return N("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return N("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return N("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return N("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return N("DataSnapshot.child",0,1,arguments.length),e=String(e),xo("DataSnapshot.child","path",e,!1),new Un(this._database,this._delegate.child(e))}hasChild(e){return N("DataSnapshot.hasChild",1,1,arguments.length),xo("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return N("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return N("DataSnapshot.forEach",1,1,arguments.length),be("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new Un(this._database,t)))}hasChildren(){return N("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return N("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return N("DataSnapshot.ref",0,0,arguments.length),new mt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Le{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,i){var r;N("Query.on",2,4,arguments.length),be("Query.on","callback",t,!1);const o=Le.getCancelAndContextArgs_("Query.on",s,i),a=(l,u)=>{t.call(o.context,new Un(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(r=o.cancel)===null||r===void 0?void 0:r.bind(o.context);switch(e){case"value":return bh(this._delegate,a,c),t;case"child_added":return Sm(this._delegate,a,c),t;case"child_removed":return Am(this._delegate,a,c),t;case"child_changed":return Cm(this._delegate,a,c),t;case"child_moved":return km(this._delegate,a,c),t;default:throw new Error(ht("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(N("Query.off",0,3,arguments.length),cP("Query.off",e,!0),be("Query.off","callback",t,!0),pp("Query.off","context",s,!0),t){const i=()=>{};i.userCallback=t,i.context=s,Rm(this._delegate,e,i)}else Rm(this._delegate,e)}get(){return vD(this._delegate).then(e=>new Un(this.database,e))}once(e,t,s,i){N("Query.once",1,4,arguments.length),be("Query.once","callback",t,!0);const r=Le.getCancelAndContextArgs_("Query.once",s,i),o=new ot,a=(l,u)=>{const h=new Un(this.database,l);t&&t.call(r.context,h,u),o.resolve(h)};a.userCallback=t,a.context=r.context;const c=l=>{r.cancel&&r.cancel.call(r.context,l),o.reject(l)};switch(e){case"value":bh(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Sm(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":Am(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":Cm(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":km(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(ht("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return N("Query.limitToFirst",1,1,arguments.length),new Le(this.database,Dt(this._delegate,kD(e)))}limitToLast(e){return N("Query.limitToLast",1,1,arguments.length),new Le(this.database,Dt(this._delegate,RD(e)))}orderByChild(e){return N("Query.orderByChild",1,1,arguments.length),new Le(this.database,Dt(this._delegate,xD(e)))}orderByKey(){return N("Query.orderByKey",0,0,arguments.length),new Le(this.database,Dt(this._delegate,PD()))}orderByPriority(){return N("Query.orderByPriority",0,0,arguments.length),new Le(this.database,Dt(this._delegate,LD()))}orderByValue(){return N("Query.orderByValue",0,0,arguments.length),new Le(this.database,Dt(this._delegate,FD()))}startAt(e=null,t){return N("Query.startAt",0,2,arguments.length),new Le(this.database,Dt(this._delegate,bD(e,t)))}startAfter(e=null,t){return N("Query.startAfter",0,2,arguments.length),new Le(this.database,Dt(this._delegate,SD(e,t)))}endAt(e=null,t){return N("Query.endAt",0,2,arguments.length),new Le(this.database,Dt(this._delegate,wD(e,t)))}endBefore(e=null,t){return N("Query.endBefore",0,2,arguments.length),new Le(this.database,Dt(this._delegate,ED(e,t)))}equalTo(e,t){return N("Query.equalTo",1,2,arguments.length),new Le(this.database,Dt(this._delegate,VD(e,t)))}toString(){return N("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return N("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(N("Query.isEqual",1,1,arguments.length),!(e instanceof Le)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const i={cancel:void 0,context:void 0};if(t&&s)i.cancel=t,be(e,"cancel",i.cancel,!0),i.context=s,pp(e,"context",i.context,!0);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(ht(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new mt(this.database,new xt(this._delegate._repo,this._delegate._path))}}class mt extends Le{constructor(e,t){super(e,new ft(t._repo,t._path,new ml,!1)),this.database=e,this._delegate=t}getKey(){return N("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return N("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new mt(this.database,zs(this._delegate,e))}getParent(){N("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new mt(this.database,e):null}getRoot(){return N("Reference.root",0,0,arguments.length),new mt(this.database,this._delegate.root)}set(e,t){N("Reference.set",1,2,arguments.length),be("Reference.set","onComplete",t,!0);const s=$f(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}update(e,t){if(N("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,nE("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}St("Reference.update",this._delegate._path),be("Reference.update","onComplete",t,!0);const s=yD(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){N("Reference.setWithPriority",2,3,arguments.length),be("Reference.setWithPriority","onComplete",s,!0);const i=_D(this._delegate,e,t);return s&&i.then(()=>s(null),r=>s(r)),i}remove(e){N("Reference.remove",0,1,arguments.length),be("Reference.remove","onComplete",e,!0);const t=gD(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){N("Reference.transaction",1,3,arguments.length),be("Reference.transaction","transactionUpdate",e,!1),be("Reference.transaction","onComplete",t,!0),aP("Reference.transaction","applyLocally",s,!0);const i=sP(this._delegate,e,{applyLocally:s}).then(r=>new uP(r.committed,new Un(this.database,r.snapshot)));return t&&i.then(r=>t(null,r.committed,r.snapshot),r=>t(r,!1,null)),i}setPriority(e,t){N("Reference.setPriority",1,2,arguments.length),be("Reference.setPriority","onComplete",t,!0);const s=mD(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}push(e,t){N("Reference.push",0,2,arguments.length),be("Reference.push","onComplete",t,!0);const s=pD(this._delegate,e),i=s.then(o=>new mt(this.database,o));t&&i.then(()=>t(null),o=>t(o));const r=new mt(this.database,s);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return St("Reference.onDisconnect",this._delegate._path),new lP(new fD(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:KD,forceLongPolling:zD}}useEmulator(e,t,s={}){HD(this._delegate,e,t,s)}ref(e){if(N("database.ref",0,1,arguments.length),e instanceof mt){const t=Tm(this._delegate,e.toString());return new mt(this,t)}else{const t=JI(this._delegate,e);return new mt(this,t)}}refFromURL(e){N("database.refFromURL",1,1,arguments.length);const s=Tm(this._delegate,e);return new mt(this,s)}goOffline(){return N("database.goOffline",0,0,arguments.length),QD(this._delegate)}goOnline(){return N("database.goOnline",0,0,arguments.length),YD(this._delegate)}}Do.ServerValue={TIMESTAMP:eP(),increment:n=>tP(n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP({app:n,url:e,version:t,customAuthImpl:s,namespace:i,nodeAdmin:r=!1}){Ow(t);const o=new u_("auth-internal",new h_("database-standalone"));return o.setComponent(new st("auth-internal",()=>s,"PRIVATE")),{instance:new Do(eE(n,o,void 0,e,r),n),namespace:i}}var dP=Object.freeze({__proto__:null,initStandalone:hP});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=Do.ServerValue;function pP(n){n.INTERNAL.registerComponent(new st("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new Do(i,s)},"PUBLIC").setServiceProps({Reference:mt,Query:Le,Database:Do,DataSnapshot:Un,enableLogging:JD,INTERNAL:dP,ServerValue:fP}).setMultipleInstances(!0)),n.registerVersion(iP,rP)}pP(Nt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebasestorage.googleapis.com",iE="storageBucket",gP=2*60*1e3,mP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends ut{constructor(e,t){super(wu(e),`Firebase Storage: ${t} (${wu(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}_codeEquals(e){return wu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function wu(n){return"storage/"+n}function jf(){const n="An unknown error occurred, please check the error payload for server response.";return new he("unknown",n)}function _P(n){return new he("object-not-found","Object '"+n+"' does not exist.")}function yP(n){return new he("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function vP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he("unauthenticated",n)}function wP(){return new he("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function IP(n){return new he("unauthorized","User does not have permission to access '"+n+"'.")}function EP(){return new he("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function rE(){return new he("canceled","User canceled the upload/download.")}function bP(n){return new he("invalid-url","Invalid URL '"+n+"'.")}function TP(n){return new he("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function SP(){return new he("no-default-bucket","No default bucket found. Did you set the '"+iE+"' property when initializing the app?")}function oE(){return new he("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function CP(){return new he("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function kP(){return new he("no-download-url","The given file does not have any download URLs.")}function Si(n){return new he("invalid-argument",n)}function aE(){return new he("app-deleted","The Firebase app was deleted.")}function cE(n){return new he("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hr(n,e){return new he("invalid-format","String does not match format '"+n+"': "+e)}function Cr(n){throw new he("internal-error","Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=We.makeFromUrl(e,t)}catch{return new We(e,"")}if(s.path==="")return s;throw TP(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},_=t===sE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,w="([^?#]*)",P=new RegExp(`^https?://${_}/${i}/${w}`,"i"),R=[{regex:a,indices:c,postModify:r},{regex:f,indices:p,postModify:l},{regex:P,indices:{bucket:1,path:2},postModify:l}];for(let B=0;B<R.length;B++){const Y=R[B],K=Y.regex.exec(e);if(K){const de=K[Y.indices.bucket];let pt=K[Y.indices.path];pt||(pt=""),s=new We(de,pt),Y.postModify(s);break}}if(s==null)throw bP(e);return s}}class AP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,n(f,c())},w)}function d(){r&&clearTimeout(r)}function f(w,...P){if(l){d();return}if(w){d(),u.call(null,w,...P);return}if(c()||o){d(),u.call(null,w,...P);return}s<64&&(s*=2);let R;a===1?(a=2,R=0):R=(s+Math.random())*1e3,h(R)}let p=!1;function _(w){p||(p=!0,d(),!l&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},t),_}function NP(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(n){return n!==void 0}function DP(n){return typeof n=="function"}function PP(n){return typeof n=="object"&&!Array.isArray(n)}function Ol(n){return typeof n=="string"||n instanceof String}function Nm(n){return Wf()&&n instanceof Blob}function Wf(){return typeof Blob!="undefined"}function Sh(n,e,t,s){if(s<e)throw Si(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Si(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function lE(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ss||(Ss={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,t,s,i,r,o,a,c,l,u,h){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Na(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ss.NO_ERROR,c=r.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=r.getErrorCode()===Ss.ABORT;s(!1,new Na(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Na(l,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xP(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=jf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?aE():rE();o(c)}else{const c=EP();o(c)}};this.canceled_?t(!1,new Na(!1,null,!0)):this.backoffId_=RP(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,r=this.additionalRetryCodes_.indexOf(e)!==-1;return t||i||r}}class Na{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function LP(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function MP(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function FP(n,e){e&&(n["X-Firebase-GMPID"]=e)}function UP(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function VP(n,e,t,s,i,r){const o=lE(n.urlParams),a=n.url+o,c=Object.assign({},n.headers);return FP(c,e),LP(c,t),MP(c,r),UP(c,s),new OP(a,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function qP(...n){const e=BP();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Wf())return new Blob(n);throw new he("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function $P(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(n){return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Iu{constructor(e,t){this.data=e,this.contentType=t||null}}function uE(n,e){switch(n){case Ct.RAW:return new Iu(hE(e));case Ct.BASE64:case Ct.BASE64URL:return new Iu(dE(n,e));case Ct.DATA_URL:return new Iu(GP(e),KP(e))}throw jf()}function hE(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function WP(n){let e;try{e=decodeURIComponent(n)}catch{throw Hr(Ct.DATA_URL,"Malformed data URL.")}return hE(e)}function dE(n,e){switch(n){case Ct.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Hr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ct.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Hr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=jP(e)}catch{throw Hr(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class fE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Hr(Ct.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=zP(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function GP(n){const e=new fE(n);return e.base64?dE(Ct.BASE64,e.rest):WP(e.rest)}function KP(n){return new fE(n).contentType}function zP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){let s=0,i="";Nm(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Nm(this.data_)){const s=this.data_,i=$P(s,e,t);return i===null?null:new rn(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new rn(s,!0)}}static getBlob(...e){if(Wf()){const t=e.map(s=>s instanceof rn?s.data_:s);return new rn(qP.apply(null,t))}else{const t=e.map(o=>Ol(o)?uE(Ct.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new rn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n){let e;try{e=JSON.parse(n)}catch{return null}return PP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function QP(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function pE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(n,e){return e}class He{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||YP}}let xa=null;function JP(n){return!Ol(n)||n.length<2?n:pE(n)}function Ll(){if(xa)return xa;const n=[];n.push(new He("bucket")),n.push(new He("generation")),n.push(new He("metageneration")),n.push(new He("name","fullPath",!0));function e(r,o){return JP(o)}const t=new He("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new He("size");return i.xform=s,n.push(i),n.push(new He("timeCreated")),n.push(new He("updated")),n.push(new He("md5Hash",null,!0)),n.push(new He("cacheControl",null,!0)),n.push(new He("contentDisposition",null,!0)),n.push(new He("contentEncoding",null,!0)),n.push(new He("contentLanguage",null,!0)),n.push(new He("contentType",null,!0)),n.push(new He("metadata","customMetadata",!0)),xa=n,xa}function XP(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new We(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function ZP(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return XP(s,n),s}function gE(n,e,t){const s=Gf(e);return s===null?null:ZP(n,s,t)}function eO(n,e,t,s){const i=Gf(e);if(i===null||!Ol(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const u=n.bucket,h=n.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=rs(d,t,s),p=lE({alt:"media",token:l});return f+p})[0]}function Kf(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="prefixes",Dm="items";function tO(n,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[xm])for(const i of t[xm]){const r=i.replace(/\/$/,""),o=n._makeStorageReference(new We(e,r));s.prefixes.push(o)}if(t[Dm])for(const i of t[Dm]){const r=n._makeStorageReference(new We(e,i.name));s.items.push(r)}return s}function nO(n,e,t){const s=Gf(t);return s===null?null:tO(n,e,s)}class En{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){if(!n)throw jf()}function Ml(n,e){function t(s,i){const r=gE(n,i,e);return Yt(r!==null),r}return t}function sO(n,e){function t(s,i){const r=nO(n,e,i);return Yt(r!==null),r}return t}function iO(n,e){function t(s,i){const r=gE(n,i,e);return Yt(r!==null),eO(r,i,n.host,n._protocol)}return t}function ur(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=wP():i=vP():t.getStatus()===402?i=yP(n.bucket):t.getStatus()===403?i=IP(n.path):i=s,i.serverResponse=s.serverResponse,i}return e}function Fl(n){const e=ur(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=_P(n.path)),r.serverResponse=i.serverResponse,r}return t}function mE(n,e,t){const s=e.fullServerUrl(),i=rs(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new En(i,r,Ml(n,t),o);return a.errorHandler=Fl(e),a}function rO(n,e,t,s,i){const r={};e.isRoot?r.prefix="":r.prefix=e.path+"/",t&&t.length>0&&(r.delimiter=t),s&&(r.pageToken=s),i&&(r.maxResults=i);const o=e.bucketOnlyServerUrl(),a=rs(o,n.host,n._protocol),c="GET",l=n.maxOperationRetryTime,u=new En(a,c,sO(n,e.bucket),l);return u.urlParams=r,u.errorHandler=ur(e),u}function oO(n,e,t){const s=e.fullServerUrl(),i=rs(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new En(i,r,iO(n,t),o);return a.errorHandler=Fl(e),a}function aO(n,e,t,s){const i=e.fullServerUrl(),r=rs(i,n.host,n._protocol),o="PATCH",a=Kf(t,s),c={"Content-Type":"application/json; charset=utf-8"},l=n.maxOperationRetryTime,u=new En(r,o,Ml(n,s),l);return u.headers=c,u.body=a,u.errorHandler=Fl(e),u}function cO(n,e){const t=e.fullServerUrl(),s=rs(t,n.host,n._protocol),i="DELETE",r=n.maxOperationRetryTime;function o(c,l){}const a=new En(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=Fl(e),a}function lO(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function _E(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=lO(null,e)),s}function uO(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let B=0;B<2;B++)R=R+Math.random().toString().slice(2);return R}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=_E(e,s,i),u=Kf(l,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=rn.getBlob(h,s,d);if(f===null)throw oE();const p={name:l.fullPath},_=rs(r,n.host,n._protocol),w="POST",P=n.maxUploadRetryTime,F=new En(_,w,Ml(n,t),P);return F.urlParams=p,F.headers=o,F.body=f.uploadData(),F.errorHandler=ur(e),F}class kc{constructor(e,t,s,i){this.current=e,this.total=t,this.finalized=!!s,this.metadata=i||null}}function zf(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Yt(!1)}return Yt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function hO(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o=_E(e,s,i),a={name:o.fullPath},c=rs(r,n.host,n._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Kf(o,t),d=n.maxUploadRetryTime;function f(_){zf(_);let w;try{w=_.getResponseHeader("X-Goog-Upload-URL")}catch{Yt(!1)}return Yt(Ol(w)),w}const p=new En(c,l,f,d);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=ur(e),p}function dO(n,e,t,s){const i={"X-Goog-Upload-Command":"query"};function r(l){const u=zf(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Yt(!1)}h||Yt(!1);const d=Number(h);return Yt(!isNaN(d)),new kc(d,s.size(),u==="final")}const o="POST",a=n.maxUploadRetryTime,c=new En(t,o,r,a);return c.headers=i,c.errorHandler=ur(e),c}const Pm=256*1024;function fO(n,e,t,s,i,r,o,a){const c=new kc(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw CP();const l=c.total-c.current;let u=l;i>0&&(u=Math.min(u,i));const h=c.current,d=h+u,p={"X-Goog-Upload-Command":u===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},_=s.slice(h,d);if(_===null)throw oE();function w(B,Y){const K=zf(B,["active","final"]),de=c.current+u,pt=s.size();let as;return K==="final"?as=Ml(e,r)(B,Y):as=null,new kc(de,pt,K==="final",as)}const P="POST",F=e.maxUploadRetryTime,R=new En(t,P,w,F);return R.headers=p,R.body=_.uploadData(),R.progressCallback=a||null,R.errorHandler=ur(n),R}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={STATE_CHANGED:"state_changed"},Je={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Eu(n){switch(n){case"running":case"pausing":case"canceling":return Je.RUNNING;case"paused":return Je.PAUSED;case"success":return Je.SUCCESS;case"canceled":return Je.CANCELED;case"error":return Je.ERROR;default:return Je.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,t,s){if(DP(e)||t!=null||s!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=s!=null?s:void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class mO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw Cr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Cr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Cr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Cr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Cr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _O extends mO{initXhr(){this.xhr_.responseType="text"}}function Vt(){return new _O}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=Ll(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=hO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Vt,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const i=dO(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,Vt,t,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Pm*this._chunkMultiplier,t=new kc(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=fO(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Vt,i,r);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Pm*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=mE(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,Vt,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=uO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,Vt,e,t);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=rE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Eu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,i){const r=new gO(t||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Eu(this._state)){case Je.SUCCESS:fi(this._resolve.bind(null,this.snapshot))();break;case Je.CANCELED:case Je.ERROR:const t=this._reject;fi(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Eu(this._state)){case Je.RUNNING:case Je.PAUSED:e.next&&fi(e.next.bind(e,this.snapshot))();break;case Je.SUCCESS:e.complete&&fi(e.complete.bind(e))();break;case Je.CANCELED:case Je.ERROR:e.error&&fi(e.error.bind(e,this._error))();break;default:e.error&&fi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t){this._service=e,t instanceof We?this._location=t:this._location=We.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Hs(e,t)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pE(this._location.path)}get storage(){return this._service}get parent(){const e=HP(this._location.path);if(e===null)return null;const t=new We(this._location.bucket,e);return new Hs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw cE(e)}}function yO(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new yE(n,new rn(e),t)}function vO(n){const e={prefixes:[],items:[]};return vE(n,e).then(()=>e)}async function vE(n,e,t){const i=await wE(n,{pageToken:t});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await vE(n,e,i.nextPageToken)}function wE(n,e){e!=null&&typeof e.maxResults=="number"&&Sh("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=rO(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(s,Vt)}function wO(n){n._throwIfRoot("getMetadata");const e=mE(n.storage,n._location,Ll());return n.storage.makeRequestWithTokens(e,Vt)}function IO(n,e){n._throwIfRoot("updateMetadata");const t=aO(n.storage,n._location,e,Ll());return n.storage.makeRequestWithTokens(t,Vt)}function EO(n){n._throwIfRoot("getDownloadURL");const e=oO(n.storage,n._location,Ll());return n.storage.makeRequestWithTokens(e,Vt).then(t=>{if(t===null)throw kP();return t})}function bO(n){n._throwIfRoot("deleteObject");const e=cO(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Vt)}function IE(n,e){const t=QP(n._location.path,e),s=new We(n._location.bucket,t);return new Hs(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(n){return/^[A-Za-z]+:\/\//.test(n)}function SO(n,e){return new Hs(n,e)}function EE(n,e){if(n instanceof Hf){const t=n;if(t._bucket==null)throw SP();const s=new Hs(t,t._bucket);return e!=null?EE(s,e):s}else return e!==void 0?IE(n,e):n}function CO(n,e){if(e&&TO(e)){if(n instanceof Hf)return SO(n,e);throw Si("To use ref(service, url), the first argument must be a Storage instance.")}else return EE(n,e)}function Om(n,e){const t=e==null?void 0:e[iE];return t==null?null:We.makeFromBucketSpec(t,n)}function kO(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Oh(i,n.app.options.projectId))}class Hf{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=sE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gP,this._maxUploadRetryTime=mP,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=Om(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=Om(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hs(this,e)}_makeRequest(e,t,s,i){if(this._deleted)return new AP(aE());{const r=VP(e,this._appId,s,i,t,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Lm="@firebase/storage",Mm="0.9.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO="storage";function RO(n,e,t){return n=S(n),yO(n,e,t)}function NO(n){return n=S(n),wO(n)}function xO(n,e){return n=S(n),IO(n,e)}function DO(n,e){return n=S(n),wE(n,e)}function PO(n){return n=S(n),vO(n)}function OO(n){return n=S(n),EO(n)}function LO(n){return n=S(n),bO(n)}function Fm(n,e){return n=S(n),CO(n,e)}function MO(n,e){return IE(n,e)}function FO(n,e,t,s={}){kO(n,e,t,s)}function UO(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Hf(t,s,i,e,yn)}function VO(){Jt(new st(AO,UO,"PUBLIC").setMultipleInstances(!0)),dt(Lm,Mm,""),dt(Lm,Mm,"esm2017")}VO();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,s){this._delegate=e,this.task=t,this.ref=s}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Da(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(s=>{if(e)return e(new Da(s,this,this._ref))},t)}on(e,t,s,i){let r;return t&&(typeof t=="function"?r=o=>t(new Da(o,this,this._ref)):r={next:t.next?o=>t.next(new Da(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,r,s||void 0,i||void 0)}}class Vm{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new hn(e,this._service))}get items(){return this._delegate.items.map(e=>new hn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=MO(this._delegate,e);return new hn(t,this.storage)}get root(){return new hn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new hn(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Um(RO(this._delegate,e,t),this)}putString(e,t=Ct.RAW,s){this._throwIfRoot("putString");const i=uE(t,e),r=Object.assign({},s);return r.contentType==null&&i.contentType!=null&&(r.contentType=i.contentType),new Um(new yE(this._delegate,new rn(i.data,!0),r),this)}listAll(){return PO(this._delegate).then(e=>new Vm(e,this.storage))}list(e){return DO(this._delegate,e||void 0).then(t=>new Vm(t,this.storage))}getMetadata(){return NO(this._delegate)}updateMetadata(e){return xO(this._delegate,e)}getDownloadURL(){return OO(this._delegate)}delete(){return this._throwIfRoot("delete"),LO(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw cE(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Bm(e))throw Si("ref() expected a child path but got a URL, use refFromURL instead.");return new hn(Fm(this._delegate,e),this)}refFromURL(e){if(!Bm(e))throw Si("refFromURL() expected a full URL but got a child path, use ref() instead.");try{We.makeFromUrl(e,this._delegate.host)}catch{throw Si("refFromUrl() expected a valid full URL but got an invalid one.")}return new hn(Fm(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,s={}){FO(this._delegate,e,t,s)}}function Bm(n){return/^[A-Za-z]+:\/\//.test(n)}const BO="@firebase/storage-compat",qO="0.1.16";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="storage-compat";function jO(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),s=n.getProvider("storage").getImmediate({identifier:e});return new bE(t,s)}function WO(n){const e={TaskState:Je,TaskEvent:pO,StringFormat:Ct,Storage:bE,Reference:hn};n.INTERNAL.registerComponent(new st($O,jO,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(BO,qO)}WO(Nt);function Qf(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}const kr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},pi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function TE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KO=GO,zO=TE,SE=new Js("auth","Firebase",TE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new Qi("@firebase/auth");function Ba(n,...e){qm.logLevel<=j.ERROR&&qm.error(`Auth (${yn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,...e){throw Yf(n,...e)}function qe(n,...e){return Yf(n,...e)}function CE(n,e,t){const s=Object.assign(Object.assign({},zO()),{[e]:t});return new Js("auth","Firebase",s).create(e,{appName:n.name})}function hr(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&$e(n,"argument-error"),CE(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yf(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return SE.create(n,...e)}function I(n,e,...t){if(!n)throw Yf(e,...t)}function Kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ba(e),new Error(e)}function Ft(n,e){n||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Map;function _t(n){Ft(n instanceof Function,"Expected a class definition");let e=$m.get(n);return e?(Ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$m.set(n,e),e)}function HO(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jf(){return jm()==="http:"||jm()==="https:"}function jm(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jf()||Mh()||"connection"in navigator)?navigator.onLine:!0}function YO(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Mc()||Uo()}get(){return QO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e){Ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=new ga(3e4,6e4);function we(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Oe(n,e,t,s,i={}){return AE(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),kE.fetch()(RE(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function AE(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},JO),e);try{const i=new ZO(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Lr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Lr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Lr(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw CE(n,u,l);$e(n,u)}}catch(i){if(i instanceof ut)throw i;$e(n,"network-request-failed")}}async function bn(n,e,t,s,i={}){const r=await Oe(n,e,t,s,i);return"mfaPendingCredential"in r&&$e(n,"multi-factor-auth-required",{_serverResponse:r}),r}function RE(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Xf(n.config,i):`${n.config.apiScheme}://${i}`}class ZO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(qe(this.auth,"network-request-failed")),XO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=qe(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(n,e){return Oe(n,"POST","/v1/accounts:delete",e)}async function t1(n,e){return Oe(n,"POST","/v1/accounts:update",e)}async function n1(n,e){return Oe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s1(n,e=!1){const t=S(n),s=await t.getIdToken(e),i=Ul(s);I(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qr(bu(i.auth_time)),issuedAtTime:Qr(bu(i.iat)),expirationTime:Qr(bu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function bu(n){return Number(n)*1e3}function Ul(n){var e;const[t,s,i]=n.split(".");if(t===void 0||s===void 0||i===void 0)return Ba("JWT malformed, contained fewer than 3 sections"),null;try{const r=Au(s);return r?JSON.parse(r):(Ba("Failed to decode base64 JWT payload"),null)}catch(r){return Ba("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function i1(n){const e=Ul(n);return I(e,"internal-error"),I(typeof e.exp!="undefined","internal-error"),I(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ut&&r1(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function r1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n){var e;const t=n.auth,s=await n.getIdToken(),i=await _n(n,n1(t,{idToken:s}));I(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?l1(r.providerUserInfo):[],a=c1(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new NE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function a1(n){const e=S(n);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function c1(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function l1(n){return n.map(e=>{var{providerId:t}=e,s=Qf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(n,e){const t=await AE(n,{},async()=>{const s=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=RE(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken!="undefined","internal-error"),I(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):i1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await u1(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Lo;return s&&(I(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(I(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n,e){I(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Cs{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new NE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await _n(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return s1(this,e)}reload(){return a1(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Oo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _n(this,e1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=t.createdAt)!==null&&l!==void 0?l:void 0,F=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:B,isAnonymous:Y,providerData:K,stsTokenManager:de}=t;I(R&&de,e,"internal-error");const pt=Lo.fromJSON(this.name,de);I(typeof R=="string",e,"internal-error"),kn(h,e.name),kn(d,e.name),I(typeof B=="boolean",e,"internal-error"),I(typeof Y=="boolean",e,"internal-error"),kn(f,e.name),kn(p,e.name),kn(_,e.name),kn(w,e.name),kn(P,e.name),kn(F,e.name);const as=new Cs({uid:R,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:Y,photoURL:p,phoneNumber:f,tenantId:_,stsTokenManager:pt,createdAt:P,lastLoginAt:F});return K&&Array.isArray(K)&&(as.providerData=K.map(Eb=>Object.assign({},Eb))),w&&(as._redirectEventId=w),as}static async _fromIdTokenResponse(e,t,s=!1){const i=new Lo;i.updateFromServerResponse(t);const r=new Cs({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Oo(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xE.type="NONE";const Ki=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e,t){return`firebase:${n}:${e}:${t}`}class Ci{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ks(this.userKey,i.apiKey,r),this.fullPersistenceKey=ks("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ci(_t(Ki),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||_t(Ki);const o=ks(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=Cs._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ci(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ci(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LE(e))return"Blackberry";if(ME(e))return"Webos";if(Zf(e))return"Safari";if((e.includes("chrome/")||PE(e))&&!e.includes("edge/"))return"Chrome";if(ma(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function DE(n=ne()){return/firefox\//i.test(n)}function Zf(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PE(n=ne()){return/crios\//i.test(n)}function OE(n=ne()){return/iemobile/i.test(n)}function ma(n=ne()){return/android/i.test(n)}function LE(n=ne()){return/blackberry/i.test(n)}function ME(n=ne()){return/webos/i.test(n)}function dr(n=ne()){return/iphone|ipad|ipod/i.test(n)}function h1(n=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function d1(n=ne()){var e;return dr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function f1(){return Fh()&&document.documentMode===10}function FE(n=ne()){return dr(n)||ma(n)||ME(n)||LE(n)||/windows phone/i.test(n)||OE(n)}function p1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n,e=[]){let t;switch(n){case"Browser":t=Wm(ne());break;case"Worker":t=`${Wm(ne())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=i)===null||t===void 0?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gm(this),this.idTokenSubscription=new Gm(this),this.beforeStateQueue=new g1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Oo(e)}catch(s){if(((t=s)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function xe(n){return S(n)}class Gm{constructor(e){this.auth=e,this.observer=null,this.addObserver=l_(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _1(n,e,t){const s=xe(n);I(s._canInitEmulator,s,"emulator-config-failed"),I(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=VE(e),{host:o,port:a}=y1(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||v1()}function VE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function y1(n){const e=VE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Km(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Km(o)}}}function Km(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function v1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,t){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n,e){return Oe(n,"POST","/v1/accounts:resetPassword",we(n,e))}async function qE(n,e){return Oe(n,"POST","/v1/accounts:update",e)}async function w1(n,e){return Oe(n,"POST","/v1/accounts:update",we(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(n,e){return bn(n,"POST","/v1/accounts:signInWithPassword",we(n,e))}async function Vl(n,e){return Oe(n,"POST","/v1/accounts:sendOobCode",we(n,e))}async function E1(n,e){return Vl(n,e)}async function b1(n,e){return Vl(n,e)}async function T1(n,e){return Vl(n,e)}async function S1(n,e){return Vl(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(n,e){return bn(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}async function k1(n,e){return bn(n,"POST","/v1/accounts:signInWithEmailLink",we(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends fr{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Mo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Mo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return I1(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return C1(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qE(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return k1(e,{idToken:t,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(n,e){return bn(n,"POST","/v1/accounts:signInWithIdp",we(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="http://localhost";class sn extends fr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Qf(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new sn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return dn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,dn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dn(e,t)}buildRequest(){const e={requestUri:A1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e){return Oe(n,"POST","/v1/accounts:sendVerificationCode",we(n,e))}async function N1(n,e){return bn(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e))}async function x1(n,e){const t=await bn(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,e));if(t.temporaryProof)throw Lr(n,"account-exists-with-different-credential",t);return t}const D1={USER_NOT_FOUND:"user-not-found"};async function P1(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return bn(n,"POST","/v1/accounts:signInWithPhoneNumber",we(n,t),D1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends fr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new As({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new As({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return N1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return x1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return P1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r}=e;return!s&&!t&&!i&&!r?null:new As({verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function L1(n){const e=_i(xr(n)).link,t=e?_i(xr(e)).deep_link_id:null,s=_i(xr(n)).deep_link_id;return(s?_i(xr(s)).link:null)||s||t||e||n}class Bl{constructor(e){var t,s,i,r,o,a;const c=_i(xr(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=O1((i=c.mode)!==null&&i!==void 0?i:null);I(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=L1(e);try{return new Bl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,t){return Mo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Bl.parseLink(t);return I(s,"argument-error"),Mo._fromEmailAndCode(e,s.code,s.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Tn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ki extends pr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),sn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),sn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ki.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ki.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:a}=e;if(!s&&!i&&!t&&!r||!a)return null;try{return new ki(a)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends pr{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return sn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return qt.credential(t,s)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends pr{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="http://localhost";class zi extends fr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return dn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,dn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,pendingToken:r}=t;return!s||!i||!r||s!==i?null:new zi(s,r)}static _create(e,t){return new zi(e,t)}buildRequest(){return{requestUri:M1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="saml.";class Ac extends Tn{constructor(e){I(e.startsWith(F1),"argument-error"),super(e)}static credentialFromResult(e){return Ac.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ac.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=zi.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return zi._create(s,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends pr{constructor(){super("twitter.com")}static credential(e,t){return sn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return jt.credential(t,s)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(n,e){return bn(n,"POST","/v1/accounts:signUp",we(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Cs._fromIdTokenResponse(e,s,i),o=zm(s);return new Rt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=zm(s);return new Rt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function zm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(n){var e;const t=xe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Rt({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await $E(t,{returnSecureToken:!0}),i=await Rt._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends ut{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Rc(e,t,s,i)}}function jE(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(n,r,e,s):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(n,e){const t=S(n);await ql(!0,t,e);const{providerUserInfo:s}=await t1(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=WE(s||[]);return t.providerData=t.providerData.filter(r=>i.has(r.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function ep(n,e,t=!1){const s=await _n(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rt._forOperation(n,"link",s)}async function ql(n,e,t){await Oo(e);const s=WE(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";I(s.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(n,e,t=!1){var s;const{auth:i}=n,r="reauthenticate";try{const o=await _n(n,jE(i,r,e,n),t);I(o.idToken,i,"internal-error");const a=Ul(o.idToken);I(a,i,"internal-error");const{sub:c}=a;return I(n.uid===c,i,"user-mismatch"),Rt._forOperation(n,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&$e(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(n,e,t=!1){const s="signIn",i=await jE(n,s,e),r=await Rt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function $l(n,e){return KE(xe(n),e)}async function zE(n,e){const t=S(n);return await ql(!1,t,e.providerId),ep(t,e)}async function HE(n,e){return GE(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(n,e){return bn(n,"POST","/v1/accounts:signInWithCustomToken",we(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(n,e){const t=xe(n),s=await B1(t,{token:e,returnSecureToken:!0}),i=await Rt._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tp._fromServerResponse(e,t):$e(e,"internal-error")}}class tp extends jl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tp(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(n,e,t){var s;I(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),I(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(I(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(I(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(n,e,t){const s=S(n),i={requestType:"PASSWORD_RESET",email:e};t&&Wl(s,i,t),await b1(s,i)}async function j1(n,e,t){await BE(S(n),{oobCode:e,newPassword:t})}async function W1(n,e){await w1(S(n),{oobCode:e})}async function QE(n,e){const t=S(n),s=await BE(t,{oobCode:e}),i=s.requestType;switch(I(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(s.mfaInfo,t,"internal-error");default:I(s.email,t,"internal-error")}let r=null;return s.mfaInfo&&(r=jl._fromServerResponse(xe(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:r},operation:i}}async function G1(n,e){const{data:t}=await QE(S(n),e);return t.email}async function K1(n,e,t){const s=xe(n),i=await $E(s,{returnSecureToken:!0,email:e,password:t}),r=await Rt._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function z1(n,e,t){return $l(S(n),os.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(n,e,t){const s=S(n),i={requestType:"EMAIL_SIGNIN",email:e};I(t.handleCodeInApp,s,"argument-error"),t&&Wl(s,i,t),await T1(s,i)}function Q1(n,e){const t=Bl.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Y1(n,e,t){const s=S(n),i=os.credentialWithLink(e,t||Po());return I(i._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),$l(s,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(n,e){return Oe(n,"POST","/v1/accounts:createAuthUri",we(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(n,e){const t=Jf()?Po():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:i}=await J1(S(n),s);return i||[]}async function Z1(n,e){const t=S(n),s=await n.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:s};e&&Wl(t.auth,i,e);const{email:r}=await E1(t.auth,i);r!==n.email&&await n.reload()}async function eL(n,e,t){const s=S(n),i=await n.getIdToken(),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};t&&Wl(s.auth,r,t);const{email:o}=await S1(s.auth,r);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(n,e){return Oe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=S(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await _n(s,tL(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function sL(n,e){return YE(S(n),e,null)}function iL(n,e){return YE(S(n),null,e)}async function YE(n,e,t){const{auth:s}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const o=await _n(n,qE(s,r));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(n){var e,t;if(!n)return null;const{providerId:s}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(n==null?void 0:n.idToken)){const o=(t=(e=Ul(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ai(r,a)}}if(!s)return null;switch(s){case"facebook.com":return new oL(r,i);case"github.com":return new aL(r,i);case"google.com":return new cL(r,i);case"twitter.com":return new lL(r,i,n.screenName||null);case"custom":case"anonymous":return new Ai(r,null);default:return new Ai(r,s,i)}}class Ai{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class JE extends Ai{constructor(e,t,s,i){super(e,t,s),this.username=i}}class oL extends Ai{constructor(e,t){super(e,"facebook.com",t)}}class aL extends JE{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class cL extends Ai{constructor(e,t){super(e,"google.com",t)}}class lL extends JE{constructor(e,t,s){super(e,"twitter.com",t,s)}}function uL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:rL(t)}class bs{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new bs("enroll",e)}static _fromMfaPendingCredential(e){return new bs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return bs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return bs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=xe(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map(a=>jl._fromServerResponse(s,a));I(i.mfaPendingCredential,s,"internal-error");const o=bs._fromMfaPendingCredential(i.mfaPendingCredential);return new np(o,r,async a=>{const c=await a._process(s,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await Rt._fromIdTokenResponse(s,t.operationType,l);return await s._updateCurrentUser(u.user),u;case"reauthenticate":return I(t.user,s,"internal-error"),Rt._forOperation(t.user,t.operationType,l);default:$e(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function hL(n,e){var t;const s=S(n),i=e;return I(e.customData.operationType,s,"argument-error"),I((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),np._fromError(s,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(n,e){return Oe(n,"POST","/v2/accounts/mfaEnrollment:start",we(n,e))}function fL(n,e){return Oe(n,"POST","/v2/accounts/mfaEnrollment:finalize",we(n,e))}function pL(n,e){return Oe(n,"POST","/v2/accounts/mfaEnrollment:withdraw",we(n,e))}class sp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>jl._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new sp(e)}async getSession(){return bs._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const s=e,i=await this.getSession(),r=await _n(this.user,s._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t;const s=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),r=await _n(this.user,pL(this.user.auth,{idToken:i,mfaEnrollmentId:s}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==s),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(o){if(((t=o)===null||t===void 0?void 0:t.code)!=="auth/user-token-expired")throw o}}}const Tu=new WeakMap;function gL(n){const e=S(n);return Tu.has(e)||Tu.set(e,sp._fromUser(e)),Tu.get(e)}const Nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nc,"1"),this.storage.removeItem(Nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(){const n=ne();return Zf(n)||dr(n)}const _L=1e3,yL=10;class ZE extends XE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mL()&&p1(),this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);f1()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yL):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},_L)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZE.type="LOCAL";const ip=ZE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb extends XE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eb.type="SESSION";const Qs=eb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Gl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await vL(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=_a("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return window}function IL(n){_e().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof _e().WorkerGlobalScope!="undefined"&&typeof _e().importScripts=="function"}async function EL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function TL(){return rp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="firebaseLocalStorageDb",SL=1,xc="firebaseLocalStorage",nb="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kl(n,e){return n.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function CL(){const n=indexedDB.deleteDatabase(tb);return new ya(n).toPromise()}function Ch(){const n=indexedDB.open(tb,SL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(xc,{keyPath:nb})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(xc)?e(s):(s.close(),await CL(),e(await Ch()))})})}async function Hm(n,e,t){const s=Kl(n,!0).put({[nb]:e,value:t});return new ya(s).toPromise()}async function kL(n,e){const t=Kl(n,!1).get(e),s=await new ya(t).toPromise();return s===void 0?null:s.value}function Qm(n,e){const t=Kl(n,!0).delete(e);return new ya(t).toPromise()}const AL=800,RL=3;class sb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>RL)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gl._getInstance(TL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await EL(),!this.activeServiceWorker)return;this.sender=new wL(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((t=s[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ch();return await Hm(e,Nc,"1"),await Qm(e,Nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kL(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Kl(i,!1).getAll();return new ya(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sb.type="LOCAL";const Fo=sb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(n,e){return Oe(n,"POST","/v2/accounts/mfaSignIn:start",we(n,e))}function xL(n,e){return Oe(n,"POST","/v2/accounts/mfaSignIn:finalize",we(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DL(n){return(await Oe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ib(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=qe("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",PL().appendChild(s)})}function rb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=500,LL=6e4,Pa=1e12;class ML{constructor(e){this.auth=e,this.counter=Pa,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new FL(e,this.auth.name,t||{})),this.counter++,s}reset(e){var t;const s=e||Pa;(t=this._widgets.get(s))===null||t===void 0||t.delete(),this._widgets.delete(s)}getResponse(e){var t;const s=e||Pa;return((t=this._widgets.get(s))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const s=e||Pa;return(t=this._widgets.get(s))===null||t===void 0||t.execute(),""}}class FL{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=UL(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},LL)},OL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function UL(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=rb("rcb"),VL=new ga(3e4,6e4),BL="https://www.google.com/recaptcha/api.js?";class qL{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!_e().grecaptcha}load(e,t=""){return I($L(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(_e().grecaptcha):new Promise((s,i)=>{const r=_e().setTimeout(()=>{i(qe(e,"network-request-failed"))},VL.get());_e()[Su]=()=>{_e().clearTimeout(r),delete _e()[Su];const a=_e().grecaptcha;if(!a){i(qe(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,s(a)};const o=`${BL}?${Xs({onload:Su,render:"explicit",hl:t})}`;ib(o).catch(()=>{clearTimeout(r),i(qe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!_e().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $L(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class jL{async load(e){return new ML(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="recaptcha",WL={theme:"light",type:"image"};class GL{constructor(e,t=Object.assign({},WL),s){this.parameters=t,this.type=ob,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(s),this.isInvisible=this.parameters.size==="invisible",I(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jL:new qL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(i=>{const r=o=>{!o||(this.tokenChangeListeners.delete(r),i(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=_e()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Jf()&&!rp(),this.auth,"internal-error"),await KL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await DL(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function KL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=As._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function zL(n,e,t){const s=xe(n),i=await zl(s,e,S(t));return new op(i,r=>$l(s,r))}async function HL(n,e,t){const s=S(n);await ql(!1,s,"phone");const i=await zl(s.auth,e,S(t));return new op(i,r=>zE(s,r))}async function QL(n,e,t){const s=S(n),i=await zl(s.auth,e,S(t));return new op(i,r=>HE(s,r))}async function zl(n,e,t){var s;const i=await t.verify();try{I(typeof i=="string",n,"argument-error"),I(t.type===ob,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return I(o.type==="enroll",n,"internal-error"),(await dL(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{I(o.type==="signin",n,"internal-error");const a=((s=r.multiFactorHint)===null||s===void 0?void 0:s.uid)||r.multiFactorUid;return I(a,n,"missing-multi-factor-info"),(await NL(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await R1(n,{phoneNumber:r.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function YL(n,e){await ep(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.providerId=Mt.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return zl(this.auth,e,S(t))}static credential(e,t){return As._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Mt.credentialFromTaggedObject(t)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?As._fromTokenResponse(t,s):null}}Mt.PROVIDER_ID="phone";Mt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,e){return e?_t(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends fr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JL(n){return KE(n.auth,new ap(n),n.bypassAuthState)}function XL(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),GE(t,new ap(n),n.bypassAuthState)}async function ZL(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),ep(t,new ap(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JL;case"linkViaPopup":case"linkViaRedirect":return ZL;case"reauthViaPopup":case"reauthViaRedirect":return XL;default:$e(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=new ga(2e3,1e4);async function tM(n,e,t){const s=xe(n);hr(n,e,Tn);const i=ci(s,t);return new cn(s,"signInViaPopup",e,i).executeNotNull()}async function nM(n,e,t){const s=S(n);hr(s.auth,e,Tn);const i=ci(s.auth,t);return new cn(s.auth,"reauthViaPopup",e,i,s).executeNotNull()}async function sM(n,e,t){const s=S(n);hr(s.auth,e,Tn);const i=ci(s.auth,t);return new cn(s.auth,"linkViaPopup",e,i,s).executeNotNull()}class cn extends ab{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=_a();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eM.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM="pendingRedirect",Yr=new Map;class rM extends ab{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Yr.get(this.auth._key());if(!e){try{const s=await oM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Yr.set(this.auth._key(),e)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oM(n,e){const t=lb(e),s=cb(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function cp(n,e){return cb(n)._set(lb(e),"true")}function aM(){Yr.clear()}function lp(n,e){Yr.set(n._key(),e)}function cb(n){return _t(n._redirectPersistence)}function lb(n){return ks(iM,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cM(n,e,t){return lM(n,e,t)}async function lM(n,e,t){const s=xe(n);hr(n,e,Tn);const i=ci(s,t);return await cp(i,s),i._openRedirect(s,e,"signInViaRedirect")}function uM(n,e,t){return hM(n,e,t)}async function hM(n,e,t){const s=S(n);hr(s.auth,e,Tn);const i=ci(s.auth,t);await cp(i,s.auth);const r=await ub(s);return i._openRedirect(s.auth,e,"reauthViaRedirect",r)}function dM(n,e,t){return fM(n,e,t)}async function fM(n,e,t){const s=S(n);hr(s.auth,e,Tn);const i=ci(s.auth,t);await ql(!1,s,e.providerId),await cp(i,s.auth);const r=await ub(s);return i._openRedirect(s.auth,e,"linkViaRedirect",r)}async function pM(n,e){return await xe(n)._initializationPromise,Hl(n,e,!1)}async function Hl(n,e,t=!1){const s=xe(n),i=ci(s,e),o=await new rM(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}async function ub(n){const e=_a(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM=10*60*1e3;class hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!db(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ym(e))}saveEventToCache(e){this.cachedEventUids.add(Ym(e)),this.lastProcessedEventTime=Date.now()}}function Ym(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function db({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return db(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(n,e={}){return Oe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yM=/^https?/;async function vM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fb(n);for(const t of e)try{if(wM(t))return}catch{}$e(n,"unauthorized-domain")}function wM(n){const e=Po(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!yM.test(t))return!1;if(_M.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=new ga(3e4,6e4);function Jm(){const n=_e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function EM(n){return new Promise((e,t)=>{var s,i,r;function o(){Jm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jm(),t(qe(n,"network-request-failed"))},timeout:IM.get()})}if(!((i=(s=_e().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=_e().gapi)===null||r===void 0)&&r.load)o();else{const a=rb("iframefcb");return _e()[a]=()=>{gapi.load?o():t(qe(n,"network-request-failed"))},ib(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw qa=null,e})}let qa=null;function bM(n){return qa=qa||EM(n),qa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=new ga(5e3,15e3),SM="__/auth/iframe",CM="emulator/auth/iframe",kM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RM(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xf(e,CM):`https://${n.config.authDomain}/${SM}`,s={apiKey:e.apiKey,appName:n.name,v:yn},i=AM.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Xs(s).slice(1)}`}async function NM(n){const e=await bM(n),t=_e().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:RM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kM,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=qe(n,"network-request-failed"),a=_e().setTimeout(()=>{r(o)},TM.get());function c(){_e().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DM=500,PM=600,OM="_blank",LM="http://localhost";class Xm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MM(n,e,t,s=DM,i=PM){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xM),{width:s.toString(),height:i.toString(),top:r,left:o}),l=ne().toLowerCase();t&&(a=PE(l)?OM:t),DE(l)&&(e=e||LM,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(d1(l)&&a!=="_self")return FM(e||"",a),new Xm(null);const h=window.open(e||"",a,u);I(h,n,"popup-blocked");try{h.focus()}catch{}return new Xm(h)}function FM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM="__/auth/handler",VM="emulator/auth/handler";function kh(n,e,t,s,i,r){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:yn,eventId:i};if(e instanceof Tn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Wa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof pr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${BM(n)}?${Xs(a).slice(1)}`}function BM({config:n}){return n.emulator?Xf(n,VM):`https://${n.authDomain}/${UM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="webStorageSupport";class qM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qs,this._completeRedirectFn=Hl,this._overrideRedirectResult=lp}async _openPopup(e,t,s,i){var r;Ft((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=kh(e,t,s,Po(),i);return MM(e,o,_a())}async _openRedirect(e,t,s,i){return await this._originValidation(e),IL(kh(e,t,s,Po(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Ft(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await NM(e),s=new hb(e);return t.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cu,{type:Cu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Cu];o!==void 0&&t(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return FE()||Zf()||dr()}}const $M=qM;class jM{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Kt("unexpected MultiFactorSessionType")}}}class up extends jM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new up(e)}_finalizeEnroll(e,t,s){return fL(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return xL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pb{constructor(){}static assertion(e){return up._fromCredential(e)}}pb.FACTOR_ID="phone";var Zm="@firebase/auth",e_="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KM(n){Jt(new st("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{I(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),I(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UE(n)},u=new m1(a,c,l);return HO(u,t),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Jt(new st("auth-internal",e=>{const t=xe(e.getProvider("auth").getImmediate());return(s=>new WM(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dt(Zm,e_,GM(n)),dt(Zm,e_,"esm2017")}KM("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=2e3;async function HM(n,e,t){var s;const{BuildInfo:i}=Ys();Ft(e.sessionId,"AuthEvent did not contain a session ID");const r=await ZM(e.sessionId),o={};return dr()?o.ibi=i.packageName:ma()?o.apn=i.packageName:$e(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=r,kh(n,t,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,o)}async function QM(n){const{BuildInfo:e}=Ys(),t={};dr()?t.iosBundleId=e.packageName:ma()?t.androidPackageName=e.packageName:$e(n,"operation-not-supported-in-this-environment"),await fb(n,t)}function YM(n){const{cordova:e}=Ys();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let i=null;s?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,h1()?"_blank":"_system","location=yes"),t(i)})})}async function JM(n,e,t){const{cordova:s}=Ys();let i=()=>{};try{await new Promise((r,o)=>{let a=null;function c(){var h;r();const d=(h=s.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(qe(n,"redirect-cancelled-by-user"))},zM))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),ma()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function XM(n){var e,t,s,i,r,o,a,c,l,u;const h=Ys();I(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)!="undefined",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((r=(i=(s=h==null?void 0:h.cordova)===null||s===void 0?void 0:s.plugins)===null||i===void 0?void 0:i.browsertab)===null||r===void 0?void 0:r.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ZM(n){const e=eF(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function eF(n){if(Ft(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let s=0;s<n.length;s++)t[s]=n.charCodeAt(s);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=20;class nF extends hb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function sF(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:oF(),postBody:null,tenantId:n.tenantId,error:qe(n,"no-auth-event")}}function iF(n,e){return Ah()._set(Rh(n),e)}async function t_(n){const e=await Ah()._get(Rh(n));return e&&await Ah()._remove(Rh(n)),e}function rF(n,e){var t,s;const i=cF(e);if(i.includes("/__/auth/callback")){const r=$a(i),o=r.firebaseError?aF(decodeURIComponent(r.firebaseError)):null,a=(s=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||s===void 0?void 0:s[1],c=a?qe(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function oF(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<tF;t++){const s=Math.floor(Math.random()*e.length);n.push(e.charAt(s))}return n.join("")}function Ah(){return _t(ip)}function Rh(n){return ks("authEvent",n.config.apiKey,n.name)}function aF(n){try{return JSON.parse(n)}catch{return null}}function cF(n){const e=$a(n),t=e.link?decodeURIComponent(e.link):void 0,s=$a(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $a(i).link||i||s||t||n}function $a(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return _i(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF=500;class uF{constructor(){this._redirectPersistence=Qs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Hl,this._overrideRedirectResult=lp}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new nF(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){$e(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,i){XM(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),aM(),await this._originValidation(e);const o=sF(e,s,i);await iF(e,o);const a=await HM(e,o,t),c=await YM(a);return JM(e,r,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QM(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:i,BuildInfo:r}=Ys(),o=setTimeout(async()=>{await t_(e),t.onEvent(n_())},lF),a=async u=>{clearTimeout(o);const h=await t_(e);let d=null;h&&(u==null?void 0:u.url)&&(d=rF(h,u.url)),t.onEvent(d||n_())};typeof s!="undefined"&&typeof s.subscribe=="function"&&s.subscribe(null,a);const c=i,l=`${r.packageName.toLowerCase()}://`;Ys().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const hF=uF;function n_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:qe("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dF(n,e){xe(n)._logFramework(e)}var fF="@firebase/auth-compat",pF="0.2.17";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=1e3;function Jr(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function mF(){return Jr()==="http:"||Jr()==="https:"}function gb(n=ne()){return!!((Jr()==="file:"||Jr()==="ionic:"||Jr()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function _F(){return Uo()||Lh()}function yF(){return Fh()&&(document==null?void 0:document.documentMode)===11}function vF(n=ne()){return/Edge\/\d+/.test(n)}function wF(n=ne()){return yF()||vF(n)}function mb(){try{const n=self.localStorage,e=_a();if(n)return n.setItem(e,"1"),n.removeItem(e),wF()?Zr():!0}catch{return hp()&&Zr()}return!1}function hp(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ku(){return(mF()||Mh()||gb())&&!_F()&&mb()&&!hp()}function _b(){return gb()&&typeof document!="undefined"}async function IF(){return _b()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},gF);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function EF(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={LOCAL:"local",NONE:"none",SESSION:"session"},Ar=I,yb="persistence";function bF(n,e){if(Ar(Object.values(gt).includes(e),n,"invalid-persistence-type"),Uo()){Ar(e!==gt.SESSION,n,"unsupported-persistence-type");return}if(Lh()){Ar(e===gt.NONE,n,"unsupported-persistence-type");return}if(hp()){Ar(e===gt.NONE||e===gt.LOCAL&&Zr(),n,"unsupported-persistence-type");return}Ar(e===gt.NONE||mb(),n,"unsupported-persistence-type")}async function Nh(n){await n._initializationPromise;const e=vb(),t=ks(yb,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function TF(n,e){const t=vb();if(!t)return[];const s=ks(yb,n,e);switch(t.getItem(s)){case gt.NONE:return[Ki];case gt.LOCAL:return[Fo,Qs];case gt.SESSION:return[Qs];default:return[]}}function vb(){var n;try{return((n=EF())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF=I;class Pn{constructor(){this.browserResolver=_t($M),this.cordovaResolver=_t(hF),this.underlyingResolver=null,this._redirectPersistence=Qs,this._completeRedirectFn=Hl,this._overrideRedirectResult=lp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,i)}async _openRedirect(e,t,s,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return _b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return SF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await IF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(n){return n.unwrap()}function CF(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kF(n){return Ib(n)}function AF(n,e){var t,s;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(((s=e)===null||s===void 0?void 0:s.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new RF(n,hL(n,e))}else if(i){const r=Ib(e),o=e;r&&(o.credential=r,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function Ib(n){const{_tokenResponse:e}=n instanceof ut?n.customData:n;if(!e)return null;if(!(n instanceof ut)&&"temporaryProof"in e&&"phoneNumber"in e)return Mt.credentialFromResult(n);const t=e.providerId;if(!t||t===kr.PASSWORD)return null;let s;switch(t){case kr.GOOGLE:s=qt;break;case kr.FACEBOOK:s=Bt;break;case kr.GITHUB:s=$t;break;case kr.TWITTER:s=jt;break;default:const{oauthIdToken:i,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!r&&!o&&!i&&!a?null:a?t.startsWith("saml.")?zi._create(t,a):sn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:r}):new ki(t).credential({idToken:i,accessToken:r,rawNonce:c})}return n instanceof ut?s.credentialFromError(n):s.credentialFromResult(n)}function rt(n,e){return e.catch(t=>{throw t instanceof ut&&AF(n,t),t}).then(t=>{const s=t.operationType,i=t.user;return{operationType:s,credential:kF(t),additionalUserInfo:uL(t),user:ln.getOrCreate(i)}})}async function xh(n,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>rt(n,t.confirm(s))}}class RF{constructor(e,t){this.resolver=t,this.auth=CF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return rt(wb(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this._delegate=e,this.multiFactor=gL(e)}static getOrCreate(e){return ln.USER_MAP.has(e)||ln.USER_MAP.set(e,new ln(e)),ln.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return rt(this.auth,zE(this._delegate,e))}async linkWithPhoneNumber(e,t){return xh(this.auth,HL(this._delegate,e,t))}async linkWithPopup(e){return rt(this.auth,sM(this._delegate,e,Pn))}async linkWithRedirect(e){return await Nh(xe(this.auth)),dM(this._delegate,e,Pn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return rt(this.auth,HE(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return xh(this.auth,QL(this._delegate,e,t))}reauthenticateWithPopup(e){return rt(this.auth,nM(this._delegate,e,Pn))}async reauthenticateWithRedirect(e){return await Nh(xe(this.auth)),uM(this._delegate,e,Pn)}sendEmailVerification(e){return Z1(this._delegate,e)}async unlink(e){return await V1(this._delegate,e),this}updateEmail(e){return sL(this._delegate,e)}updatePassword(e){return iL(this._delegate,e)}updatePhoneNumber(e){return YL(this._delegate,e)}updateProfile(e){return nL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return eL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ln.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=I;class Dh{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;Rr(s,"invalid-api-key",{appName:e.name}),Rr(s,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Pn:void 0;this._delegate=t.initialize({options:{persistence:NF(s,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(KO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ln.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){_1(this._delegate,e,t)}applyActionCode(e){return W1(this._delegate,e)}checkActionCode(e){return QE(this._delegate,e)}confirmPasswordReset(e,t){return j1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return rt(this._delegate,K1(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return X1(this._delegate,e)}isSignInWithEmailLink(e){return Q1(this._delegate,e)}async getRedirectResult(){Rr(ku(),this._delegate,"operation-not-supported-in-this-environment");const e=await pM(this._delegate,Pn);return e?rt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){dF(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:i,error:r,complete:o}=s_(e,t,s);return this._delegate.onAuthStateChanged(i,r,o)}onIdTokenChanged(e,t,s){const{next:i,error:r,complete:o}=s_(e,t,s);return this._delegate.onIdTokenChanged(i,r,o)}sendSignInLinkToEmail(e,t){return H1(this._delegate,e,t)}sendPasswordResetEmail(e,t){return $1(this._delegate,e,t||void 0)}async setPersistence(e){bF(this._delegate,e);let t;switch(e){case gt.SESSION:t=Qs;break;case gt.LOCAL:t=await _t(Fo)._isAvailable()?Fo:ip;break;case gt.NONE:t=Ki;break;default:return $e("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return rt(this._delegate,U1(this._delegate))}signInWithCredential(e){return rt(this._delegate,$l(this._delegate,e))}signInWithCustomToken(e){return rt(this._delegate,q1(this._delegate,e))}signInWithEmailAndPassword(e,t){return rt(this._delegate,z1(this._delegate,e,t))}signInWithEmailLink(e,t){return rt(this._delegate,Y1(this._delegate,e,t))}signInWithPhoneNumber(e,t){return xh(this._delegate,zL(this._delegate,e,t))}async signInWithPopup(e){return Rr(ku(),this._delegate,"operation-not-supported-in-this-environment"),rt(this._delegate,tM(this._delegate,e,Pn))}async signInWithRedirect(e){return Rr(ku(),this._delegate,"operation-not-supported-in-this-environment"),await Nh(this._delegate),cM(this._delegate,e,Pn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return G1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Dh.Persistence=gt;function s_(n,e,t){let s=n;typeof n!="function"&&({next:s,error:e,complete:t}=n);const i=s;return{next:o=>i(o&&ln.getOrCreate(o)),error:e,complete:t}}function NF(n,e){const t=TF(n,e);if(typeof self!="undefined"&&!t.includes(Fo)&&t.push(Fo),typeof window!="undefined")for(const s of[ip,Qs])t.includes(s)||t.push(s);return t.includes(Ki)||t.push(Ki),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.providerId="phone",this._delegate=new Mt(wb(Nt.auth()))}static credential(e,t){return Mt.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}dp.PHONE_SIGN_IN_METHOD=Mt.PHONE_SIGN_IN_METHOD;dp.PROVIDER_ID=Mt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF=I;class DF{constructor(e,t,s=Nt.app()){var i;xF((i=s.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new GL(e,t,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF="auth-compat";function OF(n){n.INTERNAL.registerComponent(new st(PF,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new Dh(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:pi.EMAIL_SIGNIN,PASSWORD_RESET:pi.PASSWORD_RESET,RECOVER_EMAIL:pi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:pi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:pi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:pi.VERIFY_EMAIL}},EmailAuthProvider:os,FacebookAuthProvider:Bt,GithubAuthProvider:$t,GoogleAuthProvider:qt,OAuthProvider:ki,SAMLAuthProvider:Ac,PhoneAuthProvider:dp,PhoneMultiFactorGenerator:pb,RecaptchaVerifier:DF,TwitterAuthProvider:jt,Auth:Dh,AuthCredential:fr,Error:ut}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(fF,pF)}OF(Nt);function Dc(){const n=["prj-enade-prd","1683KltZAs","18dPaKoq","prj-enade-prd.firebaseapp.com","94560JwbZDb","62674LCzbtO","85PyqOZw","159mNLKCI","https://prj-enade-prd-default-rtdb.firebaseio.com","660830QhKLhY","96deLtSV","151193OzztzI","1020RpjBvM","24714teSPfM","prj-enade-prd.appspot.com","6472OtJwEZ","857281947455"];return Dc=function(){return n},Dc()}function Pc(n,e){const t=Dc();return Pc=function(s,i){return s=s-136,t[s]},Pc(n,e)}const Nr=Pc;(function(n,e){const t=Pc,s=n();for(;[];)try{if(parseInt(t(144))/1+-parseInt(t(143))/2+parseInt(t(146))/3*(-parseInt(t(137))/4)+-parseInt(t(145))/5*(-parseInt(t(152))/6)+-parseInt(t(150))/7*(-parseInt(t(149))/8)+parseInt(t(141))/9*(-parseInt(t(148))/10)+-parseInt(t(140))/11*(-parseInt(t(151))/12)===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Dc,139690);const LF={apiKey:"AIzaSyC9Nc9jKj_ZEFvjOt-JONoWeM_KYMaooQE",authDomain:Nr(142),databaseURL:Nr(147),projectId:Nr(139),storageBucket:Nr(136),messagingSenderId:Nr(138),appId:"1:857281947455:web:f6edffe2b7323bf6c0558a"};function Oc(n,e){const t=Lc();return Oc=function(s,i){return s=s-225,t[s]},Oc(n,e)}const gi=Oc;function Lc(){const n=["18isTPSL","1902iDXwnz","2091465GiWbcy","89228Ozyaxl","569026LILrks","prj-anim-p-appintegra.appspot.com","14966thbAke","AIzaSyA8NpjKfRUjcqZirXG6K0khjTbd_FwKLSM","1:123219769717:web:15a6c86f7ca661e89f7b3c","1vonbWV","https://prj-anim-p-appintegra-default-rtdb.firebaseio.com","8gVlBUN","1671570laAQIW","123219769717","prj-anim-p-appintegra","9160029lPAQfW","34188649yYOZfY"];return Lc=function(){return n},Lc()}(function(n,e){const t=Oc,s=n();for(;[];)try{if(-parseInt(t(238))/1*(parseInt(t(233))/2)+parseInt(t(229))/3*(parseInt(t(232))/4)+-parseInt(t(231))/5+parseInt(t(230))/6*(-parseInt(t(235))/7)+-parseInt(t(240))/8*(parseInt(t(227))/9)+-parseInt(t(241))/10+parseInt(t(228))/11===e)break;s.push(s.shift())}catch{s.push(s.shift())}})(Lc,676411);const MF={apiKey:gi(236),authDomain:"prj-anim-p-appintegra.firebaseapp.com",databaseURL:gi(239),projectId:gi(226),storageBucket:gi(234),messagingSenderId:gi(225),appId:gi(237)};Nt.initializeApp(LF);const FF=Nt.initializeApp(MF,"secondary");Nt.firestore();const UF=Nt.database();Nt.storage();const VF=FF.database();function BF(n){if(n.val()==null)return[];let e=[],t=n.val();for(let s in t)e.push(t[s]);return e}var qF=(n,e)=>{const t=n.__vccOpts||n;for(const[s,i]of e)t[s]=i;return t};export{qF as _,VF as a,bh as b,$f as c,UF as d,VD as e,vD as g,xD as o,Dt as q,JI as r,BF as s};
