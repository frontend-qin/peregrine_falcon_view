import{v as me,l as T,a as se,aW as b,f as n,aX as W,e as I,g as ce,h as _,j as c,c7 as ke,k as X,u as de,n as E,cU as xe,a2 as ye,a9 as ge,a$ as be,o as u,b1 as Ce,p as ve,q as ue,be as Y,c as we,i as $e,bP as ze,cV as Be,cW as Se,af as w,cX as _e,aQ as he,b7 as ae,bk as Re,ag as ie,cY as Pe,aR as Ve,aZ as Fe}from"./index-D0m-mupX.js";function Te(e,i){return me(e,t=>{t!==void 0&&(i.value=t)}),T(()=>e.value===void 0?i.value:e.value)}function je(e,i="default",t=[]){const a=e.$slots[i];return a===void 0?t:a()}const Ie={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Me=se("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[b("strong",`
 font-weight: var(--n-font-weight-strong);
 `),n("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),n("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),n("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),n("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),b("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[n("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),n("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),b("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),b("icon, avatar",[b("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),b("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),b("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[W("disabled",[I("&:hover","background-color: var(--n-color-hover-checkable);",[W("checked","color: var(--n-text-color-hover-checkable);")]),I("&:active","background-color: var(--n-color-pressed-checkable);",[W("checked","color: var(--n-text-color-pressed-checkable);")])]),b("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[W("disabled",[I("&:hover","background-color: var(--n-color-checked-hover);"),I("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Oe=Object.assign(Object.assign(Object.assign({},E.props),Ie),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),He=we("n-tag"),Ke=ce({name:"Tag",props:Oe,slots:Object,setup(e){const i=X(null),{mergedBorderedRef:t,mergedClsPrefixRef:p,inlineThemeDisabled:a,mergedRtlRef:g}=de(e),v=E("Tag","-tag",Me,xe,e,p);ye(He,{roundRef:ge(e,"round")});function h(){if(!e.disabled&&e.checkable){const{checked:o,onCheckedChange:r,onUpdateChecked:C,"onUpdate:checked":m}=e;C&&C(!o),m&&m(!o),r&&r(!o)}}function k(o){if(e.triggerClickOnClose||o.stopPropagation(),!e.disabled){const{onClose:r}=e;r&&Y(r,o)}}const f={setTextContent(o){const{value:r}=i;r&&(r.textContent=o)}},x=be("Tag",g,p),d=T(()=>{const{type:o,size:r,color:{color:C,textColor:m}={}}=e,{common:{cubicBezierEaseInOut:R},self:{padding:$,closeMargin:S,borderRadius:P,opacityDisabled:j,textColorCheckable:y,textColorHoverCheckable:V,textColorPressedCheckable:s,textColorChecked:M,colorCheckable:O,colorHoverCheckable:H,colorPressedCheckable:N,colorChecked:D,colorCheckedHover:q,colorCheckedPressed:J,closeBorderRadius:Q,fontWeightStrong:Z,[u("colorBordered",o)]:z,[u("closeSize",r)]:ee,[u("closeIconSize",r)]:oe,[u("fontSize",r)]:B,[u("height",r)]:F,[u("color",o)]:te,[u("textColor",o)]:ne,[u("border",o)]:re,[u("closeIconColor",o)]:U,[u("closeIconColorHover",o)]:K,[u("closeIconColorPressed",o)]:A,[u("closeColorHover",o)]:fe,[u("closeColorPressed",o)]:pe}}=v.value,L=Ce(S);return{"--n-font-weight-strong":Z,"--n-avatar-size-override":`calc(${F} - 8px)`,"--n-bezier":R,"--n-border-radius":P,"--n-border":re,"--n-close-icon-size":oe,"--n-close-color-pressed":pe,"--n-close-color-hover":fe,"--n-close-border-radius":Q,"--n-close-icon-color":U,"--n-close-icon-color-hover":K,"--n-close-icon-color-pressed":A,"--n-close-icon-color-disabled":U,"--n-close-margin-top":L.top,"--n-close-margin-right":L.right,"--n-close-margin-bottom":L.bottom,"--n-close-margin-left":L.left,"--n-close-size":ee,"--n-color":C||(t.value?z:te),"--n-color-checkable":O,"--n-color-checked":D,"--n-color-checked-hover":q,"--n-color-checked-pressed":J,"--n-color-hover-checkable":H,"--n-color-pressed-checkable":N,"--n-font-size":B,"--n-height":F,"--n-opacity-disabled":j,"--n-padding":$,"--n-text-color":m||ne,"--n-text-color-checkable":y,"--n-text-color-checked":M,"--n-text-color-hover-checkable":V,"--n-text-color-pressed-checkable":s}}),l=a?ve("tag",T(()=>{let o="";const{type:r,size:C,color:{color:m,textColor:R}={}}=e;return o+=r[0],o+=C[0],m&&(o+=`a${ue(m)}`),R&&(o+=`b${ue(R)}`),t.value&&(o+="c"),o}),d,e):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:x,mergedClsPrefix:p,contentRef:i,mergedBordered:t,handleClick:h,handleCloseClick:k,cssVars:a?void 0:d,themeClass:l?.themeClass,onRender:l?.onRender})},render(){var e,i;const{mergedClsPrefix:t,rtlEnabled:p,closable:a,color:{borderColor:g}={},round:v,onRender:h,$slots:k}=this;h?.();const f=_(k.avatar,d=>d&&c("div",{class:`${t}-tag__avatar`},d)),x=_(k.icon,d=>d&&c("div",{class:`${t}-tag__icon`},d));return c("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:p,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:v,[`${t}-tag--avatar`]:f,[`${t}-tag--icon`]:x,[`${t}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||f,c("span",{class:`${t}-tag__content`,ref:"contentRef"},(i=(e=this.$slots).default)===null||i===void 0?void 0:i.call(e)),!this.checkable&&a?c(ke,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:v,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${t}-tag__border`,style:{borderColor:g}}):null)}});let le;function Ue(){if(!$e)return!0;if(le===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const i=e.scrollHeight===1;return document.body.removeChild(e),le=i}return le}const We=Object.assign(Object.assign({},E.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Ae=ce({name:"Space",props:We,setup(e){const{mergedClsPrefixRef:i,mergedRtlRef:t}=de(e),p=E("Space","-space",void 0,_e,e,i),a=be("Space",t,i);return{useGap:Ue(),rtlEnabled:a,mergedClsPrefix:i,margin:T(()=>{const{size:g}=e;if(Array.isArray(g))return{horizontal:g[0],vertical:g[1]};if(typeof g=="number")return{horizontal:g,vertical:g};const{self:{[u("gap",g)]:v}}=p.value,{row:h,col:k}=Se(v);return{horizontal:w(k),vertical:w(h)}})}},render(){const{vertical:e,reverse:i,align:t,inline:p,justify:a,itemClass:g,itemStyle:v,margin:h,wrap:k,mergedClsPrefix:f,rtlEnabled:x,useGap:d,wrapItem:l,internalUseGap:o}=this,r=ze(je(this),!1);if(!r.length)return null;const C=`${h.horizontal}px`,m=`${h.horizontal/2}px`,R=`${h.vertical}px`,$=`${h.vertical/2}px`,S=r.length-1,P=a.startsWith("space-");return c("div",{role:"none",class:[`${f}-space`,x&&`${f}-space--rtl`],style:{display:p?"inline-flex":"flex",flexDirection:e&&!i?"column":e&&i?"column-reverse":!e&&i?"row-reverse":"row",justifyContent:["start","end"].includes(a)?`flex-${a}`:a,flexWrap:!k||e?"nowrap":"wrap",marginTop:d||e?"":`-${$}`,marginBottom:d||e?"":`-${$}`,alignItems:t,gap:d?`${h.vertical}px ${h.horizontal}px`:""}},!l&&(d||o)?r:r.map((j,y)=>j.type===Be?j:c("div",{role:"none",class:g,style:[v,{maxWidth:"100%"},d?"":e?{marginBottom:y!==S?R:""}:x?{marginLeft:P?a==="space-between"&&y===S?"":m:y!==S?C:"",marginRight:P?a==="space-between"&&y===0?"":m:"",paddingTop:$,paddingBottom:$}:{marginRight:P?a==="space-between"&&y===S?"":m:y!==S?C:"",marginLeft:P?a==="space-between"&&y===0?"":m:"",paddingTop:$,paddingBottom:$}]},j)))}}),Ee=se("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),n("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),se("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[he({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),n("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),I("&:focus",[n("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),b("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),W("disabled",[W("icon",[b("rubber-band",[b("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[I("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),b("active",[b("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[I("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),b("active",[n("rail",[n("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),n("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[n("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[he()]),n("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),b("active",[n("rail","background-color: var(--n-rail-color-active);")]),b("loading",[n("rail",`
 cursor: wait;
 `)]),b("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ne=Object.assign(Object.assign({},E.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let G;const Ge=ce({name:"Switch",props:Ne,slots:Object,setup(e){G===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?G=CSS.supports("width","max(1px)"):G=!1:G=!0);const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=de(e),p=E("Switch","-switch",Ee,Pe,e,i),a=Re(e),{mergedSizeRef:g,mergedDisabledRef:v}=a,h=X(e.defaultValue),k=ge(e,"value"),f=Te(k,h),x=T(()=>f.value===e.checkedValue),d=X(!1),l=X(!1),o=T(()=>{const{railStyle:s}=e;if(s)return s({focused:l.value,checked:x.value})});function r(s){const{"onUpdate:value":M,onChange:O,onUpdateValue:H}=e,{nTriggerFormInput:N,nTriggerFormChange:D}=a;M&&Y(M,s),H&&Y(H,s),O&&Y(O,s),h.value=s,N(),D()}function C(){const{nTriggerFormFocus:s}=a;s()}function m(){const{nTriggerFormBlur:s}=a;s()}function R(){e.loading||v.value||(f.value!==e.checkedValue?r(e.checkedValue):r(e.uncheckedValue))}function $(){l.value=!0,C()}function S(){l.value=!1,m(),d.value=!1}function P(s){e.loading||v.value||s.key===" "&&(f.value!==e.checkedValue?r(e.checkedValue):r(e.uncheckedValue),d.value=!1)}function j(s){e.loading||v.value||s.key===" "&&(s.preventDefault(),d.value=!0)}const y=T(()=>{const{value:s}=g,{self:{opacityDisabled:M,railColor:O,railColorActive:H,buttonBoxShadow:N,buttonColor:D,boxShadowFocus:q,loadingColor:J,textColor:Q,iconColor:Z,[u("buttonHeight",s)]:z,[u("buttonWidth",s)]:ee,[u("buttonWidthPressed",s)]:oe,[u("railHeight",s)]:B,[u("railWidth",s)]:F,[u("railBorderRadius",s)]:te,[u("buttonBorderRadius",s)]:ne},common:{cubicBezierEaseInOut:re}}=p.value;let U,K,A;return G?(U=`calc((${B} - ${z}) / 2)`,K=`max(${B}, ${z})`,A=`max(${F}, calc(${F} + ${z} - ${B}))`):(U=ie((w(B)-w(z))/2),K=ie(Math.max(w(B),w(z))),A=w(B)>w(z)?F:ie(w(F)+w(z)-w(B))),{"--n-bezier":re,"--n-button-border-radius":ne,"--n-button-box-shadow":N,"--n-button-color":D,"--n-button-width":ee,"--n-button-width-pressed":oe,"--n-button-height":z,"--n-height":K,"--n-offset":U,"--n-opacity-disabled":M,"--n-rail-border-radius":te,"--n-rail-color":O,"--n-rail-color-active":H,"--n-rail-height":B,"--n-rail-width":F,"--n-width":A,"--n-box-shadow-focus":q,"--n-loading-color":J,"--n-text-color":Q,"--n-icon-color":Z}}),V=t?ve("switch",T(()=>g.value[0]),y,e):void 0;return{handleClick:R,handleBlur:S,handleFocus:$,handleKeyup:P,handleKeydown:j,mergedRailStyle:o,pressed:d,mergedClsPrefix:i,mergedValue:f,checked:x,mergedDisabled:v,cssVars:t?void 0:y,themeClass:V?.themeClass,onRender:V?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:i,checked:t,mergedRailStyle:p,onRender:a,$slots:g}=this;a?.();const{checked:v,unchecked:h,icon:k,"checked-icon":f,"unchecked-icon":x}=g,d=!(ae(k)&&ae(f)&&ae(x));return c("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,d&&`${e}-switch--icon`,t&&`${e}-switch--active`,i&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},c("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:p},_(v,l=>_(h,o=>l||o?c("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),l),c("div",{class:`${e}-switch__rail-placeholder`},c("div",{class:`${e}-switch__button-placeholder`}),o)):null)),c("div",{class:`${e}-switch__button`},_(k,l=>_(f,o=>_(x,r=>c(Ve,null,{default:()=>this.loading?c(Fe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(o||l)?c("div",{class:`${e}-switch__button-icon`,key:o?"checked-icon":"icon"},o||l):!this.checked&&(r||l)?c("div",{class:`${e}-switch__button-icon`,key:r?"unchecked-icon":"icon"},r||l):null})))),_(v,l=>l&&c("div",{key:"checked",class:`${e}-switch__checked`},l)),_(h,l=>l&&c("div",{key:"unchecked",class:`${e}-switch__unchecked`},l)))))}});export{Ke as N,Ge as _,Ae as a,je as g,He as t,Te as u};
