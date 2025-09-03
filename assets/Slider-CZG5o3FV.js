import{d as D,a,i as We,b as qe,af as v,e as P,P as de,bo as Ge,f as Je,h as f,r as Qe,T as Ze,u as eo,m as ve,cY as oo,j as k,bz as to,k as w,Y as no,t as ce,s as ao,o as ue,a0 as ro,aq as N,a1 as _,$ as j,aD as q}from"./index-BtR9Uj1U.js";import{B as io,V as lo,d as so,u as G}from"./Follower-C3kpDkLj.js";import{u as co}from"./use-merged-state-D64qCWZu.js";const uo=D([a("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[v("reverse",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),v("vertical",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),a("slider-marks",[a("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),v("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[a("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[a("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),a("slider-rail",`
 height: 100%;
 `,[P("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),v("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),a("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[a("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),a("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[a("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),v("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[a("slider-handle",`
 cursor: not-allowed;
 `)]),v("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),D("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),v("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[a("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),a("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[P("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),a("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[a("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[a("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[D("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),D("&:focus",[a("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[D("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),a("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[v("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[v("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[de()]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[v("top",`
 margin-bottom: 12px;
 `),v("right",`
 margin-left: 12px;
 `),v("bottom",`
 margin-top: 12px;
 `),v("left",`
 margin-right: 12px;
 `),de()]),We(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),qe(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function he(n){return window.TouchEvent&&n instanceof window.TouchEvent}function fe(){const n=new Map,l=S=>p=>{n.set(S,p)};return Ge(()=>{n.clear()}),[n,l]}const ho=0,fo=Object.assign(Object.assign({},ve.props),{to:G.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),go=Je({name:"Slider",props:fo,slots:Object,setup(n){const{mergedClsPrefixRef:l,namespaceRef:S,inlineThemeDisabled:p}=eo(n),s=ve("Slider","-slider",uo,oo,n,l),u=k(null),[V,C]=fe(),[me,be]=fe(),ge=k(new Set),J=to(n),{mergedDisabledRef:M}=J,Q=w(()=>{const{step:e}=n;if(Number(e)<=0||e==="mark")return 0;const o=e.toString();let t=0;return o.includes(".")&&(t=o.length-o.indexOf(".")-1),t}),U=k(n.defaultValue),we=no(n,"value"),O=co(we,U),m=w(()=>{const{value:e}=O;return(n.range?e:[e]).map(re)}),Z=w(()=>m.value.length>2),pe=w(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),ee=w(()=>{const{marks:e}=n;return e?Object.keys(e).map(Number.parseFloat):null}),b=k(-1),oe=k(-1),y=k(-1),R=k(!1),$=k(!1),Y=w(()=>{const{vertical:e,reverse:o}=n;return e?o?"top":"bottom":o?"right":"left"}),xe=w(()=>{if(Z.value)return;const e=m.value,o=B(n.range?Math.min(...e):n.min),t=B(n.range?Math.max(...e):e[0]),{value:r}=Y;return n.vertical?{[r]:`${o}%`,height:`${t-o}%`}:{[r]:`${o}%`,width:`${t-o}%`}}),ke=w(()=>{const e=[],{marks:o}=n;if(o){const t=m.value.slice();t.sort((h,c)=>h-c);const{value:r}=Y,{value:i}=Z,{range:d}=n,g=i?()=>!1:h=>d?h>=t[0]&&h<=t[t.length-1]:h<=t[0];for(const h of Object.keys(o)){const c=Number(h);e.push({active:g(c),key:c,label:o[h],style:{[r]:`${B(c)}%`}})}}return e});function ye(e,o){const t=B(e),{value:r}=Y;return{[r]:`${t}%`,zIndex:o===b.value?1:0}}function te(e){return n.showTooltip||y.value===e||b.value===e&&R.value}function Re(e){return R.value?!(b.value===e&&oe.value===e):!0}function ze(e){var o;~e&&(b.value=e,(o=V.get(e))===null||o===void 0||o.focus())}function Te(){me.forEach((e,o)=>{te(o)&&e.syncPosition()})}function ne(e){const{"onUpdate:value":o,onUpdateValue:t}=n,{nTriggerFormInput:r,nTriggerFormChange:i}=J;t&&N(t,e),o&&N(o,e),U.value=e,r(),i()}function ae(e){const{range:o}=n;if(o){if(Array.isArray(e)){const{value:t}=m;e.join()!==t.join()&&ne(e)}}else Array.isArray(e)||m.value[0]!==e&&ne(e)}function L(e,o){if(n.range){const t=m.value.slice();t.splice(o,1,e),ae(t)}else ae(e)}function K(e,o,t){const r=t!==void 0;t||(t=e-o>0?1:-1);const i=ee.value||[],{step:d}=n;if(d==="mark"){const c=I(e,i.concat(o),r?t:void 0);return c?c.value:o}if(d<=0)return o;const{value:g}=Q;let h;if(r){const c=Number((o/d).toFixed(g)),x=Math.floor(c),X=c>x?x:x-1,W=c<x?x:x+1;h=I(o,[Number((X*d).toFixed(g)),Number((W*d).toFixed(g)),...i],t)}else{const c=Ce(e);h=I(e,[...i,c])}return h?re(h.value):o}function re(e){return Math.min(n.max,Math.max(n.min,e))}function B(e){const{max:o,min:t}=n;return(e-t)/(o-t)*100}function Se(e){const{max:o,min:t}=n;return t+(o-t)*e}function Ce(e){const{step:o,min:t}=n;if(Number(o)<=0||o==="mark")return e;const r=Math.round((e-t)/o)*o+t;return Number(r.toFixed(Q.value))}function I(e,o=ee.value,t){if(!o?.length)return null;let r=null,i=-1;for(;++i<o.length;){const d=o[i]-e,g=Math.abs(d);(t===void 0||d*t>0)&&(r===null||g<r.distance)&&(r={index:i,distance:g,value:o[i]})}return r}function ie(e){const o=u.value;if(!o)return;const t=he(e)?e.touches[0]:e,r=o.getBoundingClientRect();let i;return n.vertical?i=(r.bottom-t.clientY)/r.height:i=(t.clientX-r.left)/r.width,n.reverse&&(i=1-i),Se(i)}function De(e){if(M.value||!n.keyboard)return;const{vertical:o,reverse:t}=n;switch(e.key){case"ArrowUp":e.preventDefault(),F(o&&t?-1:1);break;case"ArrowRight":e.preventDefault(),F(!o&&t?-1:1);break;case"ArrowDown":e.preventDefault(),F(o&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),F(!o&&t?1:-1);break}}function F(e){const o=b.value;if(o===-1)return;const{step:t}=n,r=m.value[o],i=Number(t)<=0||t==="mark"?r:r+t*e;L(K(i,r,e>0?1:-1),o)}function Ve(e){var o,t;if(M.value||!he(e)&&e.button!==ho)return;const r=ie(e);if(r===void 0)return;const i=m.value.slice(),d=n.range?(t=(o=I(r,i))===null||o===void 0?void 0:o.index)!==null&&t!==void 0?t:-1:0;d!==-1&&(e.preventDefault(),ze(d),Me(),L(K(r,m.value[d]),d))}function Me(){R.value||(R.value=!0,n.onDragstart&&N(n.onDragstart),_("touchend",document,E),_("mouseup",document,E),_("touchmove",document,A),_("mousemove",document,A))}function H(){R.value&&(R.value=!1,n.onDragend&&N(n.onDragend),j("touchend",document,E),j("mouseup",document,E),j("touchmove",document,A),j("mousemove",document,A))}function A(e){const{value:o}=b;if(!R.value||o===-1){H();return}const t=ie(e);t!==void 0&&L(K(t,m.value[o]),o)}function E(){H()}function $e(e){b.value=e,M.value||(y.value=e)}function Be(e){b.value===e&&(b.value=-1,H()),y.value===e&&(y.value=-1)}function Ie(e){y.value=e}function Fe(e){y.value===e&&(y.value=-1)}ce(b,(e,o)=>void q(()=>oe.value=o)),ce(O,()=>{if(n.marks){if($.value)return;$.value=!0,q(()=>{$.value=!1})}q(Te)}),ao(()=>{H()});const le=w(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:t,fillColor:r,fillColorHover:i,handleColor:d,opacityDisabled:g,dotColor:h,dotColorModal:c,handleBoxShadow:x,handleBoxShadowHover:X,handleBoxShadowActive:W,handleBoxShadowFocus:He,dotBorder:Ae,dotBoxShadow:Ee,railHeight:Pe,railWidthVertical:Ne,handleSize:_e,dotHeight:je,dotWidth:Ue,dotBorderRadius:Oe,fontSize:Ye,dotBorderActive:Le,dotColorPopover:Ke},common:{cubicBezierEaseInOut:Xe}}=s.value;return{"--n-bezier":Xe,"--n-dot-border":Ae,"--n-dot-border-active":Le,"--n-dot-border-radius":Oe,"--n-dot-box-shadow":Ee,"--n-dot-color":h,"--n-dot-color-modal":c,"--n-dot-color-popover":Ke,"--n-dot-height":je,"--n-dot-width":Ue,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":Ye,"--n-handle-box-shadow":x,"--n-handle-box-shadow-active":W,"--n-handle-box-shadow-focus":He,"--n-handle-box-shadow-hover":X,"--n-handle-color":d,"--n-handle-size":_e,"--n-opacity-disabled":g,"--n-rail-color":o,"--n-rail-color-hover":t,"--n-rail-height":Pe,"--n-rail-width-vertical":Ne,"--n-mark-font-size":e}}),z=p?ue("slider",void 0,le,n):void 0,se=w(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:t,indicatorTextColor:r,indicatorBorderRadius:i}}=s.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":t,"--n-indicator-color":o,"--n-indicator-text-color":r}}),T=p?ue("slider-indicator",void 0,se,n):void 0;return{mergedClsPrefix:l,namespace:S,uncontrolledValue:U,mergedValue:O,mergedDisabled:M,mergedPlacement:pe,isMounted:ro(),adjustedTo:G(n),dotTransitionDisabled:$,markInfos:ke,isShowTooltip:te,shouldKeepTooltipTransition:Re,handleRailRef:u,setHandleRefs:C,setFollowerRefs:be,fillStyle:xe,getHandleStyle:ye,activeIndex:b,arrifiedValues:m,followerEnabledIndexSet:ge,handleRailMouseDown:Ve,handleHandleFocus:$e,handleHandleBlur:Be,handleHandleMouseEnter:Ie,handleHandleMouseLeave:Fe,handleRailKeyDown:De,indicatorCssVars:p?void 0:se,indicatorThemeClass:T?.themeClass,indicatorOnRender:T?.onRender,cssVars:p?void 0:le,themeClass:z?.themeClass,onRender:z?.onRender}},render(){var n;const{mergedClsPrefix:l,themeClass:S,formatTooltip:p}=this;return(n=this.onRender)===null||n===void 0||n.call(this),f("div",{class:[`${l}-slider`,S,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},f("div",{class:`${l}-slider-rail`},f("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?f("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(s=>f("div",{key:s.key,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:s.active}],style:s.style}))):null,f("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((s,u)=>{const V=this.isShowTooltip(u);return f(io,null,{default:()=>[f(lo,null,{default:()=>f("div",{ref:this.setHandleRefs(u),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":s,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(s,u),onFocus:()=>{this.handleHandleFocus(u)},onBlur:()=>{this.handleHandleBlur(u)},onMouseenter:()=>{this.handleHandleMouseEnter(u)},onMouseleave:()=>{this.handleHandleMouseLeave(u)}},Qe(this.$slots.thumb,()=>[f("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&f(so,{ref:this.setFollowerRefs(u),show:V,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(u),teleportDisabled:this.adjustedTo===G.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>f(Ze,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(u),onEnter:()=>{this.followerEnabledIndexSet.add(u)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(u)}},{default:()=>{var C;return V?((C=this.indicatorOnRender)===null||C===void 0||C.call(this),f("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(s):s)):null}})})]})})),this.marks?f("div",{class:`${l}-slider-marks`},this.markInfos.map(s=>f("div",{key:s.key,class:`${l}-slider-mark`,style:s.style},typeof s.label=="function"?s.label():s.label))):null))}});export{go as _};
