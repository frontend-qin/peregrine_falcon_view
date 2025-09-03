import{f as ue,aD as st,h as c,a_ as rn,j as A,a9 as ln,q as We,cp as Ye,t as ye,s as xt,a as I,e as $,d as Q,R as Ct,u as He,m as ve,cq as an,k as L,n as de,o as Ge,ae as Fe,l as St,aj as Je,T as Ot,af as J,Q as rt,P as Ft,g as ct,bC as sn,aG as dn,r as un,aJ as Rt,Y as q,cr as cn,aX as fn,aK as Ae,a3 as ft,cs as hn,H as vn,ct as gn,w as pn,U as bn,X as mn,ci as ht,cu as yn,bz as wn,a0 as xn,bs as Cn,cv as Sn,aq as oe}from"./index-BtR9Uj1U.js";import{c as On,a as Fn,i as dt,e as Rn,B as kn,V as Pn,d as Tn,u as lt}from"./Follower-C3kpDkLj.js";import{u as kt,N as Mn}from"./FormItem-5FzppkHZ.js";import{N as Qe}from"./Tag-BRLV7GqA.js";import{N as zn,u as _n}from"./Popover-Cee3FC9k.js";import{V as In,F as An}from"./FocusDetector-DZ4v2m1k.js";import{h as Be}from"./happens-in-CM8LO42l.js";import{u as vt}from"./use-merged-state-D64qCWZu.js";const se="v-hidden",Bn=On("[v-hidden]",{display:"none!important"}),gt=ue({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=A(null),i=A(null);function r(l){const{value:a}=n,{getCounter:y,getTail:p}=e;let u;if(y!==void 0?u=y():u=i.value,!a||!u)return;u.hasAttribute(se)&&u.removeAttribute(se);const{children:g}=a;if(l.showAllItemsBeforeCalculate)for(const S of g)S.hasAttribute(se)&&S.removeAttribute(se);const C=a.offsetWidth,F=[],w=t.tail?p?.():null;let T=w?w.offsetWidth:0,D=!1;const k=a.children.length-(t.tail?1:0);for(let S=0;S<k-1;++S){if(S<0)continue;const h=g[S];if(D){h.hasAttribute(se)||h.setAttribute(se,"");continue}else h.hasAttribute(se)&&h.removeAttribute(se);const b=h.offsetWidth;if(T+=b,F[S]=b,T>C){const{updateCounter:N}=e;for(let E=S;E>=0;--E){const K=k-1-E;N!==void 0?N(K):u.textContent=`${K}`;const W=u.offsetWidth;if(T-=F[E],T+W<=C||E===0){D=!0,S=E-1,w&&(S===-1?(w.style.maxWidth=`${C-W}px`,w.style.boxSizing="border-box"):w.style.maxWidth="");const{onUpdateCount:B}=e;B&&B(K);break}}}}const{onUpdateOverflow:R}=e;D?R!==void 0&&R(!0):(R!==void 0&&R(!1),u.setAttribute(se,""))}const d=ln();return Bn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Fn,ssr:d}),We(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:i,sync:r}},render(){const{$slots:e}=this;return st(()=>this.sync({showAllItemsBeforeCalculate:!1})),c("div",{class:"v-overflow",ref:"selfRef"},[rn(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Pt(e,t){t&&(We(()=>{const{value:n}=e;n&&Ye.registerHandler(n,t)}),ye(e,(n,i)=>{i&&Ye.unregisterHandler(i)},{deep:!1}),xt(()=>{const{value:n}=e;n&&Ye.unregisterHandler(n)}))}function pt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function et(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(i=>{i&&i(n)})}}const Nn=ue({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),En=ue({name:"Empty",render(){return c("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),c("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}});function bt(e){return Array.isArray(e)?e:[e]}const at={STOP:"STOP"};function Tt(e,t){const n=t(e);e.children!==void 0&&n!==at.STOP&&e.children.forEach(i=>Tt(i,t))}function $n(e,t={}){const{preserveGroup:n=!1}=t,i=[],r=n?l=>{l.isLeaf||(i.push(l.key),d(l.children))}:l=>{l.isLeaf||(l.isGroup||i.push(l.key),d(l.children))};function d(l){l.forEach(r)}return d(e),i}function Ln(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Dn(e){return e.children}function Kn(e){return e.key}function Vn(){return!1}function jn(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Wn(e){return e.disabled===!0}function Hn(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function tt(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function nt(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function Gn(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)||n.add(i)}),Array.from(n)}function Un(e,t){const n=new Set(e);return t.forEach(i=>{n.has(i)&&n.delete(i)}),Array.from(n)}function qn(e){return e?.type==="group"}function Zn(e){const t=new Map;return e.forEach((n,i)=>{t.set(n.key,i)}),n=>{var i;return(i=t.get(n))!==null&&i!==void 0?i:null}}class Xn extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Yn(e,t,n,i){return Ve(t.concat(e),n,i,!1)}function Jn(e,t){const n=new Set;return e.forEach(i=>{const r=t.treeNodeMap.get(i);if(r!==void 0){let d=r.parent;for(;d!==null&&!(d.disabled||n.has(d.key));)n.add(d.key),d=d.parent}}),n}function Qn(e,t,n,i){const r=Ve(t,n,i,!1),d=Ve(e,n,i,!0),l=Jn(e,n),a=[];return r.forEach(y=>{(d.has(y)||l.has(y))&&a.push(y)}),a.forEach(y=>r.delete(y)),r}function ot(e,t){const{checkedKeys:n,keysToCheck:i,keysToUncheck:r,indeterminateKeys:d,cascade:l,leafOnly:a,checkStrategy:y,allowNotLoaded:p}=e;if(!l)return i!==void 0?{checkedKeys:Gn(n,i),indeterminateKeys:Array.from(d)}:r!==void 0?{checkedKeys:Un(n,r),indeterminateKeys:Array.from(d)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(d)};const{levelTreeNodeMap:u}=t;let g;r!==void 0?g=Qn(r,n,t,p):i!==void 0?g=Yn(i,n,t,p):g=Ve(n,t,p,!1);const C=y==="parent",F=y==="child"||a,w=g,T=new Set,D=Math.max.apply(null,Array.from(u.keys()));for(let k=D;k>=0;k-=1){const R=k===0,S=u.get(k);for(const h of S){if(h.isLeaf)continue;const{key:b,shallowLoaded:N}=h;if(F&&N&&h.children.forEach(B=>{!B.disabled&&!B.isLeaf&&B.shallowLoaded&&w.has(B.key)&&w.delete(B.key)}),h.disabled||!N)continue;let E=!0,K=!1,W=!0;for(const B of h.children){const X=B.key;if(!B.disabled){if(W&&(W=!1),w.has(X))K=!0;else if(T.has(X)){K=!0,E=!1;break}else if(E=!1,K)break}}E&&!W?(C&&h.children.forEach(B=>{!B.disabled&&w.has(B.key)&&w.delete(B.key)}),w.add(b)):K&&T.add(b),R&&F&&w.has(b)&&w.delete(b)}}return{checkedKeys:Array.from(w),indeterminateKeys:Array.from(T)}}function Ve(e,t,n,i){const{treeNodeMap:r,getChildren:d}=t,l=new Set,a=new Set(e);return e.forEach(y=>{const p=r.get(y);p!==void 0&&Tt(p,u=>{if(u.disabled)return at.STOP;const{key:g}=u;if(!l.has(g)&&(l.add(g),a.add(g),Hn(u.rawNode,d))){if(i)return at.STOP;if(!n)throw new Xn}})}),a}function eo(e,{includeGroup:t=!1,includeSelf:n=!0},i){var r;const d=i.treeNodeMap;let l=e==null?null:(r=d.get(e))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:l};if(l?.ignored)return a.treeNode=null,a;for(;l;)!l.ignored&&(t||!l.isGroup)&&a.treeNodePath.push(l),l=l.parent;return a.treeNodePath.reverse(),n||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(y=>y.key),a}function to(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function no(e,t){const n=e.siblings,i=n.length,{index:r}=e;return t?n[(r+1)%i]:r===n.length-1?null:n[r+1]}function mt(e,t,{loop:n=!1,includeDisabled:i=!1}={}){const r=t==="prev"?oo:no,d={reverse:t==="prev"};let l=!1,a=null;function y(p){if(p!==null){if(p===e){if(!l)l=!0;else if(!e.disabled&&!e.isGroup){a=e;return}}else if((!p.disabled||i)&&!p.ignored&&!p.isGroup){a=p;return}if(p.isGroup){const u=ut(p,d);u!==null?a=u:y(r(p,n))}else{const u=r(p,!1);if(u!==null)y(u);else{const g=io(p);g?.isGroup?y(r(g,n)):n&&y(r(p,!0))}}}}return y(e),a}function oo(e,t){const n=e.siblings,i=n.length,{index:r}=e;return t?n[(r-1+i)%i]:r===0?null:n[r-1]}function io(e){return e.parent}function ut(e,t={}){const{reverse:n=!1}=t,{children:i}=e;if(i){const{length:r}=i,d=n?r-1:0,l=n?-1:r,a=n?-1:1;for(let y=d;y!==l;y+=a){const p=i[y];if(!p.disabled&&!p.ignored)if(p.isGroup){const u=ut(p,t);if(u!==null)return u}else return p}}return null}const ro={getChild(){return this.ignored?null:ut(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return mt(this,"next",e)},getPrev(e={}){return mt(this,"prev",e)}};function lo(e,t){const n=t?new Set(t):void 0,i=[];function r(d){d.forEach(l=>{i.push(l),!(l.isLeaf||!l.children||l.ignored)&&(l.isGroup||n===void 0||n.has(l.key))&&r(l.children)})}return r(e),i}function ao(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Mt(e,t,n,i,r,d=null,l=0){const a=[];return e.forEach((y,p)=>{var u;const g=Object.create(i);if(g.rawNode=y,g.siblings=a,g.level=l,g.index=p,g.isFirstChild=p===0,g.isLastChild=p+1===e.length,g.parent=d,!g.ignored){const C=r(y);Array.isArray(C)&&(g.children=Mt(C,t,n,i,r,g,l+1))}a.push(g),t.set(g.key,g),n.has(l)||n.set(l,[]),(u=n.get(l))===null||u===void 0||u.push(g)}),a}function so(e,t={}){var n;const i=new Map,r=new Map,{getDisabled:d=Wn,getIgnored:l=Vn,getIsGroup:a=qn,getKey:y=Kn}=t,p=(n=t.getChildren)!==null&&n!==void 0?n:Dn,u=t.ignoreEmptyChildren?h=>{const b=p(h);return Array.isArray(b)?b.length?b:null:b}:p,g=Object.assign({get key(){return y(this.rawNode)},get disabled(){return d(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return Ln(this.rawNode,u)},get shallowLoaded(){return jn(this.rawNode,u)},get ignored(){return l(this.rawNode)},contains(h){return ao(this,h)}},ro),C=Mt(e,i,r,g,u);function F(h){if(h==null)return null;const b=i.get(h);return b&&!b.isGroup&&!b.ignored?b:null}function w(h){if(h==null)return null;const b=i.get(h);return b&&!b.ignored?b:null}function T(h,b){const N=w(h);return N?N.getPrev(b):null}function D(h,b){const N=w(h);return N?N.getNext(b):null}function k(h){const b=w(h);return b?b.getParent():null}function R(h){const b=w(h);return b?b.getChild():null}const S={treeNodes:C,treeNodeMap:i,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(h){return lo(C,h)},getNode:F,getPrev:T,getNext:D,getParent:k,getChild:R,getFirstAvailableNode(){return to(C)},getPath(h,b={}){return eo(h,b,S)},getCheckedKeys(h,b={}){const{cascade:N=!0,leafOnly:E=!1,checkStrategy:K="all",allowNotLoaded:W=!1}=b;return ot({checkedKeys:tt(h),indeterminateKeys:nt(h),cascade:N,leafOnly:E,checkStrategy:K,allowNotLoaded:W},S)},check(h,b,N={}){const{cascade:E=!0,leafOnly:K=!1,checkStrategy:W="all",allowNotLoaded:B=!1}=N;return ot({checkedKeys:tt(b),indeterminateKeys:nt(b),keysToCheck:h==null?[]:bt(h),cascade:E,leafOnly:K,checkStrategy:W,allowNotLoaded:B},S)},uncheck(h,b,N={}){const{cascade:E=!0,leafOnly:K=!1,checkStrategy:W="all",allowNotLoaded:B=!1}=N;return ot({checkedKeys:tt(b),indeterminateKeys:nt(b),keysToUncheck:h==null?[]:bt(h),cascade:E,leafOnly:K,checkStrategy:W,allowNotLoaded:B},S)},getNonLeafKeys(h={}){return $n(C,h)}};return S}const uo=I("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[$("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Q("+",[$("description",`
 margin-top: 8px;
 `)])]),$("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),$("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),co=Object.assign(Object.assign({},ve.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),fo=ue({name:"Empty",props:co,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:i}=He(e),r=ve("Empty","-empty",uo,an,e,t),{localeRef:d}=kt("Empty"),l=L(()=>{var u,g,C;return(u=e.description)!==null&&u!==void 0?u:(C=(g=i?.value)===null||g===void 0?void 0:g.Empty)===null||C===void 0?void 0:C.description}),a=L(()=>{var u,g;return((g=(u=i?.value)===null||u===void 0?void 0:u.Empty)===null||g===void 0?void 0:g.renderIcon)||(()=>c(En,null))}),y=L(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:g},self:{[de("iconSize",u)]:C,[de("fontSize",u)]:F,textColor:w,iconColor:T,extraTextColor:D}}=r.value;return{"--n-icon-size":C,"--n-font-size":F,"--n-bezier":g,"--n-text-color":w,"--n-icon-color":T,"--n-extra-text-color":D}}),p=n?Ge("empty",L(()=>{let u="";const{size:g}=e;return u+=g[0],u}),y,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:a,localizedDescription:L(()=>l.value||d.value.description),cssVars:n?void 0:y,themeClass:p?.themeClass,onRender:p?.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),c("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?c("div",{class:`${t}-empty__icon`},e.icon?e.icon():c(Ct,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?c("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?c("div",{class:`${t}-empty__extra`},e.extra()):null)}}),yt=ue({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:i}=St(dt);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:i,tmNode:{rawNode:r}}=this,d=i?.(r),l=t?t(r,!1):Fe(r[this.labelField],r,!1),a=c("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d?.class]}),l);return r.render?r.render({node:a,option:r}):n?n({node:a,option:r,selected:!1}):a}});function ho(e,t){return c(Ot,{name:"fade-in-scale-up-transition"},{default:()=>e?c(Ct,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>c(Nn)}):null})}const wt=ue({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:i,valueSetRef:r,renderLabelRef:d,renderOptionRef:l,labelFieldRef:a,valueFieldRef:y,showCheckmarkRef:p,nodePropsRef:u,handleOptionClick:g,handleOptionMouseEnter:C}=St(dt),F=Je(()=>{const{value:k}=n;return k?e.tmNode.key===k.key:!1});function w(k){const{tmNode:R}=e;R.disabled||g(k,R)}function T(k){const{tmNode:R}=e;R.disabled||C(k,R)}function D(k){const{tmNode:R}=e,{value:S}=F;R.disabled||S||C(k,R)}return{multiple:i,isGrouped:Je(()=>{const{tmNode:k}=e,{parent:R}=k;return R&&R.rawNode.type==="group"}),showCheckmark:p,nodeProps:u,isPending:F,isSelected:Je(()=>{const{value:k}=t,{value:R}=i;if(k===null)return!1;const S=e.tmNode.rawNode[y.value];if(R){const{value:h}=r;return h.has(S)}else return k===S}),labelField:a,renderLabel:d,renderOption:l,handleMouseMove:D,handleMouseEnter:T,handleClick:w}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:i,isGrouped:r,showCheckmark:d,nodeProps:l,renderOption:a,renderLabel:y,handleClick:p,handleMouseEnter:u,handleMouseMove:g}=this,C=ho(n,e),F=y?[y(t,n),d&&C]:[Fe(t[this.labelField],t,n),d&&C],w=l?.(t),T=c("div",Object.assign({},w,{class:[`${e}-base-select-option`,t.class,w?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:d}],style:[w?.style||"",t.style||""],onClick:et([p,w?.onClick]),onMouseenter:et([u,w?.onMouseenter]),onMousemove:et([g,w?.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},F));return t.render?t.render({node:T,option:t,selected:n}):a?a({node:T,option:t,selected:n}):T}}),vo=I("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[I("scrollbar",`
 max-height: var(--n-height);
 `),I("virtual-list",`
 max-height: var(--n-height);
 `),I("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[$("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),I("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),I("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),$("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),$("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),$("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),I("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),I("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[J("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Q("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Q("&:active",`
 color: var(--n-option-text-color-pressed);
 `),J("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),J("pending",[Q("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),J("selected",`
 color: var(--n-option-text-color-active);
 `,[Q("&::before",`
 background-color: var(--n-option-color-active);
 `),J("pending",[Q("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),J("disabled",`
 cursor: not-allowed;
 `,[rt("selected",`
 color: var(--n-option-text-color-disabled);
 `),J("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),$("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ft({enterScale:"0.5"})])])]),go=ue({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ve.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=He(e),i=Rt("InternalSelectMenu",n,t),r=ve("InternalSelectMenu","-internal-select-menu",vo,cn,e,q(e,"clsPrefix")),d=A(null),l=A(null),a=A(null),y=L(()=>e.treeMate.getFlattenedNodes()),p=L(()=>Zn(y.value)),u=A(null);function g(){const{treeMate:f}=e;let m=null;const{value:j}=e;j===null?m=f.getFirstAvailableNode():(e.multiple?m=f.getNode((j||[])[(j||[]).length-1]):m=f.getNode(j),(!m||m.disabled)&&(m=f.getFirstAvailableNode())),ee(m||null)}function C(){const{value:f}=u;f&&!e.treeMate.getNode(f.key)&&(u.value=null)}let F;ye(()=>e.show,f=>{f?F=ye(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():C(),st(ge)):C()},{immediate:!0}):F?.()},{immediate:!0}),xt(()=>{F?.()});const w=L(()=>fn(r.value.self[de("optionHeight",e.size)])),T=L(()=>Ae(r.value.self[de("padding",e.size)])),D=L(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=L(()=>{const f=y.value;return f&&f.length===0});function R(f){const{onToggle:m}=e;m&&m(f)}function S(f){const{onScroll:m}=e;m&&m(f)}function h(f){var m;(m=a.value)===null||m===void 0||m.sync(),S(f)}function b(){var f;(f=a.value)===null||f===void 0||f.sync()}function N(){const{value:f}=u;return f||null}function E(f,m){m.disabled||ee(m,!1)}function K(f,m){m.disabled||R(m)}function W(f){var m;Be(f,"action")||(m=e.onKeyup)===null||m===void 0||m.call(e,f)}function B(f){var m;Be(f,"action")||(m=e.onKeydown)===null||m===void 0||m.call(e,f)}function X(f){var m;(m=e.onMousedown)===null||m===void 0||m.call(e,f),!e.focusable&&f.preventDefault()}function ie(){const{value:f}=u;f&&ee(f.getNext({loop:!0}),!0)}function V(){const{value:f}=u;f&&ee(f.getPrev({loop:!0}),!0)}function ee(f,m=!1){u.value=f,m&&ge()}function ge(){var f,m;const j=u.value;if(!j)return;const le=p.value(j.key);le!==null&&(e.virtualScroll?(f=l.value)===null||f===void 0||f.scrollTo({index:le}):(m=a.value)===null||m===void 0||m.scrollTo({index:le,elSize:w.value}))}function ce(f){var m,j;!((m=d.value)===null||m===void 0)&&m.contains(f.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,f))}function Re(f){var m,j;!((m=d.value)===null||m===void 0)&&m.contains(f.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,f)}ft(dt,{handleOptionMouseEnter:E,handleOptionClick:K,valueSetRef:D,pendingTmNodeRef:u,nodePropsRef:q(e,"nodeProps"),showCheckmarkRef:q(e,"showCheckmark"),multipleRef:q(e,"multiple"),valueRef:q(e,"value"),renderLabelRef:q(e,"renderLabel"),renderOptionRef:q(e,"renderOption"),labelFieldRef:q(e,"labelField"),valueFieldRef:q(e,"valueField")}),ft(Rn,d),We(()=>{const{value:f}=a;f&&f.sync()});const re=L(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:m},self:{height:j,borderRadius:le,color:xe,groupHeaderTextColor:Ce,actionDividerColor:ae,optionTextColorPressed:Y,optionTextColor:Se,optionTextColorDisabled:fe,optionTextColorActive:ke,optionOpacityDisabled:Pe,optionCheckColor:Te,actionTextColor:Me,optionColorPending:pe,optionColorActive:be,loadingColor:ze,loadingSize:_e,optionColorActivePending:Ie,[de("optionFontSize",f)]:Oe,[de("optionHeight",f)]:me,[de("optionPadding",f)]:U}}=r.value;return{"--n-height":j,"--n-action-divider-color":ae,"--n-action-text-color":Me,"--n-bezier":m,"--n-border-radius":le,"--n-color":xe,"--n-option-font-size":Oe,"--n-group-header-text-color":Ce,"--n-option-check-color":Te,"--n-option-color-pending":pe,"--n-option-color-active":be,"--n-option-color-active-pending":Ie,"--n-option-height":me,"--n-option-opacity-disabled":Pe,"--n-option-text-color":Se,"--n-option-text-color-active":ke,"--n-option-text-color-disabled":fe,"--n-option-text-color-pressed":Y,"--n-option-padding":U,"--n-option-padding-left":Ae(U,"left"),"--n-option-padding-right":Ae(U,"right"),"--n-loading-color":ze,"--n-loading-size":_e}}),{inlineThemeDisabled:we}=e,Z=we?Ge("internal-select-menu",L(()=>e.size[0]),re,e):void 0,te={selfRef:d,next:ie,prev:V,getPendingTmNode:N};return Pt(d,e.onResize),Object.assign({mergedTheme:r,mergedClsPrefix:t,rtlEnabled:i,virtualListRef:l,scrollbarRef:a,itemSize:w,padding:T,flattenedNodes:y,empty:k,virtualListContainer(){const{value:f}=l;return f?.listElRef},virtualListContent(){const{value:f}=l;return f?.itemsElRef},doScroll:S,handleFocusin:ce,handleFocusout:Re,handleKeyUp:W,handleKeyDown:B,handleMouseDown:X,handleVirtualListResize:b,handleVirtualListScroll:h,cssVars:we?void 0:re,themeClass:Z?.themeClass,onRender:Z?.onRender},te)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:i,themeClass:r,onRender:d}=this;return d?.(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,r,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},ct(e.header,l=>l&&c("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?c("div",{class:`${n}-base-select-menu__loading`},c(sn,{clsPrefix:n,strokeWidth:20})):this.empty?c("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},un(e.empty,()=>[c(fo,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):c(dn,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?c(In,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?c(yt,{key:l.key,clsPrefix:n,tmNode:l}):l.ignored?null:c(wt,{clsPrefix:n,key:l.key,tmNode:l})}):c("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?c(yt,{key:l.key,clsPrefix:n,tmNode:l}):c(wt,{clsPrefix:n,key:l.key,tmNode:l})))}),ct(e.action,l=>l&&[c("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},l),c(An,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),po=Q([I("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[I("base-loading",`
 color: var(--n-loading-color);
 `),I("base-selection-tags","min-height: var(--n-height);"),$("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),$("state-border",`
 z-index: 1;
 border-color: #0000;
 `),I("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[$("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),I("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[$("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),I("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[$("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),I("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),I("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[I("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[$("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),$("render-label",`
 color: var(--n-text-color);
 `)]),rt("disabled",[Q("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),J("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),J("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),I("base-selection-label","background-color: var(--n-color-active);"),I("base-selection-tags","background-color: var(--n-color-active);")])]),J("disabled","cursor: not-allowed;",[$("arrow",`
 color: var(--n-arrow-color-disabled);
 `),I("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[I("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),$("render-label",`
 color: var(--n-text-color-disabled);
 `)]),I("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),I("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),I("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[$("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),$("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>J(`${e}-status`,[$("state-border",`border: var(--n-border-${e});`),rt("disabled",[Q("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),J("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),I("base-selection-label",`background-color: var(--n-color-active-${e});`),I("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),J("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),I("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),I("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Q("&:last-child","padding-right: 0;"),I("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[$("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),bo=ue({name:"InternalSelection",props:Object.assign(Object.assign({},ve.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=He(e),i=Rt("InternalSelection",n,t),r=A(null),d=A(null),l=A(null),a=A(null),y=A(null),p=A(null),u=A(null),g=A(null),C=A(null),F=A(null),w=A(!1),T=A(!1),D=A(!1),k=ve("InternalSelection","-internal-selection",po,gn,e,q(e,"clsPrefix")),R=L(()=>e.clearable&&!e.disabled&&(D.value||e.active)),S=L(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Fe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),h=L(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),b=L(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function N(){var s;const{value:x}=r;if(x){const{value:H}=d;H&&(H.style.width=`${x.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=C.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!1})))}}function E(){const{value:s}=F;s&&(s.style.display="none")}function K(){const{value:s}=F;s&&(s.style.display="inline-block")}ye(q(e,"active"),s=>{s||E()}),ye(q(e,"pattern"),()=>{e.multiple&&st(N)});function W(s){const{onFocus:x}=e;x&&x(s)}function B(s){const{onBlur:x}=e;x&&x(s)}function X(s){const{onDeleteOption:x}=e;x&&x(s)}function ie(s){const{onClear:x}=e;x&&x(s)}function V(s){const{onPatternInput:x}=e;x&&x(s)}function ee(s){var x;(!s.relatedTarget||!(!((x=l.value)===null||x===void 0)&&x.contains(s.relatedTarget)))&&W(s)}function ge(s){var x;!((x=l.value)===null||x===void 0)&&x.contains(s.relatedTarget)||B(s)}function ce(s){ie(s)}function Re(){D.value=!0}function re(){D.value=!1}function we(s){!e.active||!e.filterable||s.target!==d.value&&s.preventDefault()}function Z(s){X(s)}const te=A(!1);function f(s){if(s.key==="Backspace"&&!te.value&&!e.pattern.length){const{selectedOptions:x}=e;x?.length&&Z(x[x.length-1])}}let m=null;function j(s){const{value:x}=r;if(x){const H=s.target.value;x.textContent=H,N()}e.ignoreComposition&&te.value?m=s:V(s)}function le(){te.value=!0}function xe(){te.value=!1,e.ignoreComposition&&V(m),m=null}function Ce(s){var x;T.value=!0,(x=e.onPatternFocus)===null||x===void 0||x.call(e,s)}function ae(s){var x;T.value=!1,(x=e.onPatternBlur)===null||x===void 0||x.call(e,s)}function Y(){var s,x;if(e.filterable)T.value=!1,(s=p.value)===null||s===void 0||s.blur(),(x=d.value)===null||x===void 0||x.blur();else if(e.multiple){const{value:H}=a;H?.blur()}else{const{value:H}=y;H?.blur()}}function Se(){var s,x,H;e.filterable?(T.value=!1,(s=p.value)===null||s===void 0||s.focus()):e.multiple?(x=a.value)===null||x===void 0||x.focus():(H=y.value)===null||H===void 0||H.focus()}function fe(){const{value:s}=d;s&&(K(),s.focus())}function ke(){const{value:s}=d;s&&s.blur()}function Pe(s){const{value:x}=u;x&&x.setTextContent(`+${s}`)}function Te(){const{value:s}=g;return s}function Me(){return d.value}let pe=null;function be(){pe!==null&&window.clearTimeout(pe)}function ze(){e.active||(be(),pe=window.setTimeout(()=>{b.value&&(w.value=!0)},100))}function _e(){be()}function Ie(s){s||(be(),w.value=!1)}ye(b,s=>{s||(w.value=!1)}),We(()=>{pn(()=>{const s=p.value;s&&(e.disabled?s.removeAttribute("tabindex"):s.tabIndex=T.value?-1:0)})}),Pt(l,e.onResize);const{inlineThemeDisabled:Oe}=e,me=L(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:x},self:{fontWeight:H,borderRadius:Ue,color:qe,placeholderColor:Ne,textColor:Ee,paddingSingle:$e,paddingMultiple:Ze,caretColor:Xe,colorDisabled:Le,textColorDisabled:he,placeholderColorDisabled:o,colorActive:v,boxShadowFocus:O,boxShadowActive:_,boxShadowHover:M,border:P,borderFocus:z,borderHover:G,borderActive:ne,arrowColor:_t,arrowColorDisabled:It,loadingColor:At,colorActiveWarning:Bt,boxShadowFocusWarning:Nt,boxShadowActiveWarning:Et,boxShadowHoverWarning:$t,borderWarning:Lt,borderFocusWarning:Dt,borderHoverWarning:Kt,borderActiveWarning:Vt,colorActiveError:jt,boxShadowFocusError:Wt,boxShadowActiveError:Ht,boxShadowHoverError:Gt,borderError:Ut,borderFocusError:qt,borderHoverError:Zt,borderActiveError:Xt,clearColor:Yt,clearColorHover:Jt,clearColorPressed:Qt,clearSize:en,arrowSize:tn,[de("height",s)]:nn,[de("fontSize",s)]:on}}=k.value,De=Ae($e),Ke=Ae(Ze);return{"--n-bezier":x,"--n-border":P,"--n-border-active":ne,"--n-border-focus":z,"--n-border-hover":G,"--n-border-radius":Ue,"--n-box-shadow-active":_,"--n-box-shadow-focus":O,"--n-box-shadow-hover":M,"--n-caret-color":Xe,"--n-color":qe,"--n-color-active":v,"--n-color-disabled":Le,"--n-font-size":on,"--n-height":nn,"--n-padding-single-top":De.top,"--n-padding-multiple-top":Ke.top,"--n-padding-single-right":De.right,"--n-padding-multiple-right":Ke.right,"--n-padding-single-left":De.left,"--n-padding-multiple-left":Ke.left,"--n-padding-single-bottom":De.bottom,"--n-padding-multiple-bottom":Ke.bottom,"--n-placeholder-color":Ne,"--n-placeholder-color-disabled":o,"--n-text-color":Ee,"--n-text-color-disabled":he,"--n-arrow-color":_t,"--n-arrow-color-disabled":It,"--n-loading-color":At,"--n-color-active-warning":Bt,"--n-box-shadow-focus-warning":Nt,"--n-box-shadow-active-warning":Et,"--n-box-shadow-hover-warning":$t,"--n-border-warning":Lt,"--n-border-focus-warning":Dt,"--n-border-hover-warning":Kt,"--n-border-active-warning":Vt,"--n-color-active-error":jt,"--n-box-shadow-focus-error":Wt,"--n-box-shadow-active-error":Ht,"--n-box-shadow-hover-error":Gt,"--n-border-error":Ut,"--n-border-focus-error":qt,"--n-border-hover-error":Zt,"--n-border-active-error":Xt,"--n-clear-size":en,"--n-clear-color":Yt,"--n-clear-color-hover":Jt,"--n-clear-color-pressed":Qt,"--n-arrow-size":tn,"--n-font-weight":H}}),U=Oe?Ge("internal-selection",L(()=>e.size[0]),me,e):void 0;return{mergedTheme:k,mergedClearable:R,mergedClsPrefix:t,rtlEnabled:i,patternInputFocused:T,filterablePlaceholder:S,label:h,selected:b,showTagsPanel:w,isComposing:te,counterRef:u,counterWrapperRef:g,patternInputMirrorRef:r,patternInputRef:d,selfRef:l,multipleElRef:a,singleElRef:y,patternInputWrapperRef:p,overflowRef:C,inputTagElRef:F,handleMouseDown:we,handleFocusin:ee,handleClear:ce,handleMouseEnter:Re,handleMouseLeave:re,handleDeleteOption:Z,handlePatternKeyDown:f,handlePatternInputInput:j,handlePatternInputBlur:ae,handlePatternInputFocus:Ce,handleMouseEnterCounter:ze,handleMouseLeaveCounter:_e,handleFocusout:ge,handleCompositionEnd:xe,handleCompositionStart:le,onPopoverUpdateShow:Ie,focus:Se,focusInput:fe,blur:Y,blurInput:ke,updateCounter:Pe,getCounter:Te,getTail:Me,renderLabel:e.renderLabel,cssVars:Oe?void 0:me,themeClass:U?.themeClass,onRender:U?.onRender}},render(){const{status:e,multiple:t,size:n,disabled:i,filterable:r,maxTagCount:d,bordered:l,clsPrefix:a,ellipsisTagPopoverProps:y,onRender:p,renderTag:u,renderLabel:g}=this;p?.();const C=d==="responsive",F=typeof d=="number",w=C||F,T=c(hn,null,{default:()=>c(Mn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,R;return(R=(k=this.$slots).arrow)===null||R===void 0?void 0:R.call(k)}})});let D;if(t){const{labelField:k}=this,R=V=>c("div",{class:`${a}-base-selection-tag-wrapper`,key:V.value},u?u({option:V,handleClose:()=>{this.handleDeleteOption(V)}}):c(Qe,{size:n,closable:!V.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(V)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>g?g(V,!0):Fe(V[k],V,!0)})),S=()=>(F?this.selectedOptions.slice(0,d):this.selectedOptions).map(R),h=r?c("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,b=C?()=>c("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(Qe,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let N;if(F){const V=this.selectedOptions.length-d;V>0&&(N=c("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},c(Qe,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${V}`})))}const E=C?r?c(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:b,tail:()=>h}):c(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:b}):F&&N?S().concat(N):S(),K=w?()=>c("div",{class:`${a}-base-selection-popover`},C?S():this.selectedOptions.map(R)):void 0,W=w?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},y):null,X=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,ie=r?c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},E,C?null:h,T):c("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},E,T);D=c(vn,null,w?c(zn,Object.assign({},W,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ie,default:K}):ie,X)}else if(r){const k=this.pattern||this.isComposing,R=this.active?!k:!this.selected,S=this.active?!1:this.selected;D=c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:pt(this.label)},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),S?c("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},c("div",{class:`${a}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):Fe(this.label,this.selectedOption,!0))):null,R?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,T)}else D=c("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${a}-base-selection-input`,title:pt(this.label),key:"input"},c("div",{class:`${a}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):Fe(this.label,this.selectedOption,!0))):c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),T);return c("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},D,l?c("div",{class:`${a}-base-selection__border`}):null,l?c("div",{class:`${a}-base-selection__state-border`}):null)}});function je(e){return e.type==="group"}function zt(e){return e.type==="ignored"}function it(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function mo(e,t){return{getIsGroup:je,getIgnored:zt,getKey(i){return je(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[t]}}}function yo(e,t,n,i){if(!t)return e;function r(d){if(!Array.isArray(d))return[];const l=[];for(const a of d)if(je(a)){const y=r(a[i]);y.length&&l.push(Object.assign({},a,{[i]:y}))}else{if(zt(a))continue;t(n,a)&&l.push(a)}return l}return r(e)}function wo(e,t,n){const i=new Map;return e.forEach(r=>{je(r)?r[n].forEach(d=>{i.set(d[t],d)}):i.set(r[t],r)}),i}const xo=Q([I("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),I("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Ft({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Co=Object.assign(Object.assign({},ve.props),{to:lt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),zo=ue({name:"Select",props:Co,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:i,inlineThemeDisabled:r}=He(e),d=ve("Select","-select",xo,yn,e,t),l=A(e.defaultValue),a=q(e,"value"),y=vt(a,l),p=A(!1),u=A(""),g=_n(e,["items","options"]),C=A([]),F=A([]),w=L(()=>F.value.concat(C.value).concat(g.value)),T=L(()=>{const{filter:o}=e;if(o)return o;const{labelField:v,valueField:O}=e;return(_,M)=>{if(!M)return!1;const P=M[v];if(typeof P=="string")return it(_,P);const z=M[O];return typeof z=="string"?it(_,z):typeof z=="number"?it(_,String(z)):!1}}),D=L(()=>{if(e.remote)return g.value;{const{value:o}=w,{value:v}=u;return!v.length||!e.filterable?o:yo(o,T.value,v,e.childrenField)}}),k=L(()=>{const{valueField:o,childrenField:v}=e,O=mo(o,v);return so(D.value,O)}),R=L(()=>wo(w.value,e.valueField,e.childrenField)),S=A(!1),h=vt(q(e,"show"),S),b=A(null),N=A(null),E=A(null),{localeRef:K}=kt("Select"),W=L(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:K.value.placeholder}),B=[],X=A(new Map),ie=L(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:v,valueField:O}=e;return _=>({[v]:String(_),[O]:_})}return o===!1?!1:v=>Object.assign(o(v),{value:v})});function V(o){const v=e.remote,{value:O}=X,{value:_}=R,{value:M}=ie,P=[];return o.forEach(z=>{if(_.has(z))P.push(_.get(z));else if(v&&O.has(z))P.push(O.get(z));else if(M){const G=M(z);G&&P.push(G)}}),P}const ee=L(()=>{if(e.multiple){const{value:o}=y;return Array.isArray(o)?V(o):[]}return null}),ge=L(()=>{const{value:o}=y;return!e.multiple&&!Array.isArray(o)?o===null?null:V([o])[0]||null:null}),ce=wn(e),{mergedSizeRef:Re,mergedDisabledRef:re,mergedStatusRef:we}=ce;function Z(o,v){const{onChange:O,"onUpdate:value":_,onUpdateValue:M}=e,{nTriggerFormChange:P,nTriggerFormInput:z}=ce;O&&oe(O,o,v),M&&oe(M,o,v),_&&oe(_,o,v),l.value=o,P(),z()}function te(o){const{onBlur:v}=e,{nTriggerFormBlur:O}=ce;v&&oe(v,o),O()}function f(){const{onClear:o}=e;o&&oe(o)}function m(o){const{onFocus:v,showOnFocus:O}=e,{nTriggerFormFocus:_}=ce;v&&oe(v,o),_(),O&&ae()}function j(o){const{onSearch:v}=e;v&&oe(v,o)}function le(o){const{onScroll:v}=e;v&&oe(v,o)}function xe(){var o;const{remote:v,multiple:O}=e;if(v){const{value:_}=X;if(O){const{valueField:M}=e;(o=ee.value)===null||o===void 0||o.forEach(P=>{_.set(P[M],P)})}else{const M=ge.value;M&&_.set(M[e.valueField],M)}}}function Ce(o){const{onUpdateShow:v,"onUpdate:show":O}=e;v&&oe(v,o),O&&oe(O,o),S.value=o}function ae(){re.value||(Ce(!0),S.value=!0,e.filterable&&$e())}function Y(){Ce(!1)}function Se(){u.value="",F.value=B}const fe=A(!1);function ke(){e.filterable&&(fe.value=!0)}function Pe(){e.filterable&&(fe.value=!1,h.value||Se())}function Te(){re.value||(h.value?e.filterable?$e():Y():ae())}function Me(o){var v,O;!((O=(v=E.value)===null||v===void 0?void 0:v.selfRef)===null||O===void 0)&&O.contains(o.relatedTarget)||(p.value=!1,te(o),Y())}function pe(o){m(o),p.value=!0}function be(){p.value=!0}function ze(o){var v;!((v=b.value)===null||v===void 0)&&v.$el.contains(o.relatedTarget)||(p.value=!1,te(o),Y())}function _e(){var o;(o=b.value)===null||o===void 0||o.focus(),Y()}function Ie(o){var v;h.value&&(!((v=b.value)===null||v===void 0)&&v.$el.contains(Cn(o))||Y())}function Oe(o){if(!Array.isArray(o))return[];if(ie.value)return Array.from(o);{const{remote:v}=e,{value:O}=R;if(v){const{value:_}=X;return o.filter(M=>O.has(M)||_.has(M))}else return o.filter(_=>O.has(_))}}function me(o){U(o.rawNode)}function U(o){if(re.value)return;const{tag:v,remote:O,clearFilterAfterSelect:_,valueField:M}=e;if(v&&!O){const{value:P}=F,z=P[0]||null;if(z){const G=C.value;G.length?G.push(z):C.value=[z],F.value=B}}if(O&&X.value.set(o[M],o),e.multiple){const P=Oe(y.value),z=P.findIndex(G=>G===o[M]);if(~z){if(P.splice(z,1),v&&!O){const G=s(o[M]);~G&&(C.value.splice(G,1),_&&(u.value=""))}}else P.push(o[M]),_&&(u.value="");Z(P,V(P))}else{if(v&&!O){const P=s(o[M]);~P?C.value=[C.value[P]]:C.value=B}Ee(),Y(),Z(o[M],o)}}function s(o){return C.value.findIndex(O=>O[e.valueField]===o)}function x(o){h.value||ae();const{value:v}=o.target;u.value=v;const{tag:O,remote:_}=e;if(j(v),O&&!_){if(!v){F.value=B;return}const{onCreate:M}=e,P=M?M(v):{[e.labelField]:v,[e.valueField]:v},{valueField:z,labelField:G}=e;g.value.some(ne=>ne[z]===P[z]||ne[G]===P[G])||C.value.some(ne=>ne[z]===P[z]||ne[G]===P[G])?F.value=B:F.value=[P]}}function H(o){o.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&Y(),f(),v?Z([],[]):Z(null,null)}function Ue(o){!Be(o,"action")&&!Be(o,"empty")&&!Be(o,"header")&&o.preventDefault()}function qe(o){le(o)}function Ne(o){var v,O,_,M,P;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((v=b.value)===null||v===void 0)&&v.isComposing)){if(h.value){const z=(O=E.value)===null||O===void 0?void 0:O.getPendingTmNode();z?me(z):e.filterable||(Y(),Ee())}else if(ae(),e.tag&&fe.value){const z=F.value[0];if(z){const G=z[e.valueField],{value:ne}=y;e.multiple&&Array.isArray(ne)&&ne.includes(G)||U(z)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;h.value&&((_=E.value)===null||_===void 0||_.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;h.value?(M=E.value)===null||M===void 0||M.next():ae();break;case"Escape":h.value&&(Sn(o),Y()),(P=b.value)===null||P===void 0||P.focus();break}}function Ee(){var o;(o=b.value)===null||o===void 0||o.focus()}function $e(){var o;(o=b.value)===null||o===void 0||o.focusInput()}function Ze(){var o;h.value&&((o=N.value)===null||o===void 0||o.syncPosition())}xe(),ye(q(e,"options"),xe);const Xe={focus:()=>{var o;(o=b.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=b.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=b.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=b.value)===null||o===void 0||o.blurInput()}},Le=L(()=>{const{self:{menuBoxShadow:o}}=d.value;return{"--n-menu-box-shadow":o}}),he=r?Ge("select",void 0,Le,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:we,mergedClsPrefix:t,mergedBordered:n,namespace:i,treeMate:k,isMounted:xn(),triggerRef:b,menuRef:E,pattern:u,uncontrolledShow:S,mergedShow:h,adjustedTo:lt(e),uncontrolledValue:l,mergedValue:y,followerRef:N,localizedPlaceholder:W,selectedOption:ge,selectedOptions:ee,mergedSize:Re,mergedDisabled:re,focused:p,activeWithoutMenuOpen:fe,inlineThemeDisabled:r,onTriggerInputFocus:ke,onTriggerInputBlur:Pe,handleTriggerOrMenuResize:Ze,handleMenuFocus:be,handleMenuBlur:ze,handleMenuTabOut:_e,handleTriggerClick:Te,handleToggle:me,handleDeleteOption:U,handlePatternInput:x,handleClear:H,handleTriggerBlur:Me,handleTriggerFocus:pe,handleKeydown:Ne,handleMenuAfterLeave:Se,handleMenuClickOutside:Ie,handleMenuScroll:qe,handleMenuKeydown:Ne,handleMenuMousedown:Ue,mergedTheme:d,cssVars:r?void 0:Le,themeClass:he?.themeClass,onRender:he?.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(kn,null,{default:()=>[c(Pn,null,{default:()=>c(bo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),c(Tn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===lt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(Ot,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),bn(c(go,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},header:()=>{var i,r;return[(r=(i=this.$slots).header)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[mn,this.mergedShow],[ht,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ht,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{zo as _,so as c};
