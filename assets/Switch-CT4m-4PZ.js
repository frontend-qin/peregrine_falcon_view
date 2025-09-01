import{t as ue,k as V,a9 as he,f as ee,bH as fe,h as o,cQ as be,u as te,m as G,av as ge,n as $,cR as ve,ai as f,cS as pe,a as J,e as t,d as K,as as p,Q as q,cC as Z,cG as O,g as B,b2 as me,j as L,Y as we,aj as Y,o as ye,cD as xe,at as ke,cT as Se,aE as Q}from"./index-B3dBGKOB.js";function $e(e,i){return ue(e,l=>{l!==void 0&&(i.value=l)}),V(()=>e.value===void 0?i.value:e.value)}function Ce(e,i="default",l=[]){const a=e.$slots[i];return a===void 0?l:a()}let X;function Be(){if(!he)return!0;if(X===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const i=e.scrollHeight===1;return document.body.removeChild(e),X=i}return X}const _e=Object.assign(Object.assign({},G.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Fe=ee({name:"Space",props:_e,setup(e){const{mergedClsPrefixRef:i,mergedRtlRef:l}=te(e),m=G("Space","-space",void 0,pe,e,i),a=ge("Space",l,i);return{useGap:Be(),rtlEnabled:a,mergedClsPrefix:i,margin:V(()=>{const{size:s}=e;if(Array.isArray(s))return{horizontal:s[0],vertical:s[1]};if(typeof s=="number")return{horizontal:s,vertical:s};const{self:{[$("gap",s)]:h}}=m.value,{row:c,col:w}=ve(h);return{horizontal:f(w),vertical:f(c)}})}},render(){const{vertical:e,reverse:i,align:l,inline:m,justify:a,itemClass:s,itemStyle:h,margin:c,wrap:w,mergedClsPrefix:b,rtlEnabled:y,useGap:u,wrapItem:r,internalUseGap:g}=this,d=fe(Ce(this),!1);if(!d.length)return null;const P=`${c.horizontal}px`,_=`${c.horizontal/2}px`,M=`${c.vertical}px`,x=`${c.vertical/2}px`,C=d.length-1,z=a.startsWith("space-");return o("div",{role:"none",class:[`${b}-space`,y&&`${b}-space--rtl`],style:{display:m?"inline-flex":"flex",flexDirection:e&&!i?"column":e&&i?"column-reverse":!e&&i?"row-reverse":"row",justifyContent:["start","end"].includes(a)?`flex-${a}`:a,flexWrap:!w||e?"nowrap":"wrap",marginTop:u||e?"":`-${x}`,marginBottom:u||e?"":`-${x}`,alignItems:l,gap:u?`${c.vertical}px ${c.horizontal}px`:""}},!r&&(u||g)?d:d.map((F,v)=>F.type===be?F:o("div",{role:"none",class:s,style:[h,{maxWidth:"100%"},u?"":e?{marginBottom:v!==C?M:""}:y?{marginLeft:z?a==="space-between"&&v===C?"":_:v!==C?P:"",marginRight:z?a==="space-between"&&v===0?"":_:"",paddingTop:x,paddingBottom:x}:{marginRight:z?a==="space-between"&&v===C?"":_:v!==C?P:"",marginLeft:z?a==="space-between"&&v===0?"":_:"",paddingTop:x,paddingBottom:x}]},F)))}}),ze=J("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),J("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Z({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
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
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),K("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),p("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),q("disabled",[q("icon",[p("rubber-band",[p("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[K("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),p("active",[p("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[K("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),p("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
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
 `,[t("button-icon",`
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
 `,[Z()]),t("button",`
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
 `)]),p("active",[t("rail","background-color: var(--n-rail-color-active);")]),p("loading",[t("rail",`
 cursor: wait;
 `)]),p("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Re=Object.assign(Object.assign({},G.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let T;const je=ee({name:"Switch",props:Re,slots:Object,setup(e){T===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?T=CSS.supports("width","max(1px)"):T=!1:T=!0);const{mergedClsPrefixRef:i,inlineThemeDisabled:l}=te(e),m=G("Switch","-switch",ze,Se,e,i),a=me(e),{mergedSizeRef:s,mergedDisabledRef:h}=a,c=L(e.defaultValue),w=we(e,"value"),b=$e(w,c),y=V(()=>b.value===e.checkedValue),u=L(!1),r=L(!1),g=V(()=>{const{railStyle:n}=e;if(n)return n({focused:r.value,checked:y.value})});function d(n){const{"onUpdate:value":W,onChange:D,onUpdateValue:E}=e,{nTriggerFormInput:H,nTriggerFormChange:I}=a;W&&Q(W,n),E&&Q(E,n),D&&Q(D,n),c.value=n,H(),I()}function P(){const{nTriggerFormFocus:n}=a;n()}function _(){const{nTriggerFormBlur:n}=a;n()}function M(){e.loading||h.value||(b.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue))}function x(){r.value=!0,P()}function C(){r.value=!1,_(),u.value=!1}function z(n){e.loading||h.value||n.key===" "&&(b.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue),u.value=!1)}function F(n){e.loading||h.value||n.key===" "&&(n.preventDefault(),u.value=!0)}const v=V(()=>{const{value:n}=s,{self:{opacityDisabled:W,railColor:D,railColorActive:E,buttonBoxShadow:H,buttonColor:I,boxShadowFocus:ne,loadingColor:ae,textColor:ie,iconColor:re,[$("buttonHeight",n)]:k,[$("buttonWidth",n)]:oe,[$("buttonWidthPressed",n)]:le,[$("railHeight",n)]:S,[$("railWidth",n)]:j,[$("railBorderRadius",n)]:se,[$("buttonBorderRadius",n)]:ce},common:{cubicBezierEaseInOut:de}}=m.value;let N,U,A;return T?(N=`calc((${S} - ${k}) / 2)`,U=`max(${S}, ${k})`,A=`max(${j}, calc(${j} + ${k} - ${S}))`):(N=Y((f(S)-f(k))/2),U=Y(Math.max(f(S),f(k))),A=f(S)>f(k)?j:Y(f(j)+f(k)-f(S))),{"--n-bezier":de,"--n-button-border-radius":ce,"--n-button-box-shadow":H,"--n-button-color":I,"--n-button-width":oe,"--n-button-width-pressed":le,"--n-button-height":k,"--n-height":U,"--n-offset":N,"--n-opacity-disabled":W,"--n-rail-border-radius":se,"--n-rail-color":D,"--n-rail-color-active":E,"--n-rail-height":S,"--n-rail-width":j,"--n-width":A,"--n-box-shadow-focus":ne,"--n-loading-color":ae,"--n-text-color":ie,"--n-icon-color":re}}),R=l?ye("switch",V(()=>s.value[0]),v,e):void 0;return{handleClick:M,handleBlur:C,handleFocus:x,handleKeyup:z,handleKeydown:F,mergedRailStyle:g,pressed:u,mergedClsPrefix:i,mergedValue:b,checked:y,mergedDisabled:h,cssVars:l?void 0:v,themeClass:R?.themeClass,onRender:R?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:i,checked:l,mergedRailStyle:m,onRender:a,$slots:s}=this;a?.();const{checked:h,unchecked:c,icon:w,"checked-icon":b,"unchecked-icon":y}=s,u=!(O(w)&&O(b)&&O(y));return o("div",{role:"switch","aria-checked":l,class:[`${e}-switch`,this.themeClass,u&&`${e}-switch--icon`,l&&`${e}-switch--active`,i&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:m},B(h,r=>B(c,g=>r||g?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),r),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),g)):null)),o("div",{class:`${e}-switch__button`},B(w,r=>B(b,g=>B(y,d=>o(xe,null,{default:()=>this.loading?o(ke,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(g||r)?o("div",{class:`${e}-switch__button-icon`,key:g?"checked-icon":"icon"},g||r):!this.checked&&(d||r)?o("div",{class:`${e}-switch__button-icon`,key:d?"unchecked-icon":"icon"},d||r):null})))),B(h,r=>r&&o("div",{key:"checked",class:`${e}-switch__checked`},r)),B(c,r=>r&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},r)))))}});export{je as _,Fe as a,Ce as g,$e as u};
