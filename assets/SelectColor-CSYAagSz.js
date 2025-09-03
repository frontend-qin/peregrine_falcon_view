import{a as c,d as x,e as v,f as $,h as i,u as Te,bN as it,cC as G,cD as q,cE as be,cF as I,cG as T,cH as E,cI as re,cJ as X,cK as qe,cL as ye,cA as F,cM as Ce,cN as Se,j as C,k as A,a1 as oe,$ as ne,c as st,l as Ee,w as Ne,cO as ie,cP as Ue,cQ as _e,cR as Ae,ag as ut,P as dt,af as De,T as ct,U as pt,ci as ht,bz as ft,m as Oe,cS as bt,a3 as gt,Y as we,t as mt,n as Pe,o as vt,a0 as xt,bs as kt,aq as ce,a6 as pe,aD as wt,b3 as Fe,b4 as yt,L as Ie,D as Ct,A as St,G as Me,_ as Ut}from"./index-BtR9Uj1U.js";import{b as _t,u as At,a as $t}from"./FormItem-5FzppkHZ.js";import{B as Rt,V as Vt,d as zt,u as $e}from"./Follower-C3kpDkLj.js";import{u as Be}from"./use-merged-state-D64qCWZu.js";const Dt=c("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[x(">",[c("input",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),c("button",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),x("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),x("*",[x("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[x(">",[c("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),x("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[x(">",[c("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection",[c("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),c("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Pt={},Ft=$({name:"InputGroup",props:Pt,setup(e){const{mergedClsPrefixRef:t}=Te(e);return it("-input-group",Dt,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return i("div",{class:`${e}-input-group`},this.$slots)}});function It(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function se(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Mt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Bt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Ht={rgb:{hex(e){return E(F(e))},hsl(e){const[t,a,o,l]=F(e);return q([...Se(t,a,o),l])},hsv(e){const[t,a,o,l]=F(e);return X([...Ce(t,a,o),l])}},hex:{rgb(e){return I(F(e))},hsl(e){const[t,a,o,l]=F(e);return q([...Se(t,a,o),l])},hsv(e){const[t,a,o,l]=F(e);return X([...Ce(t,a,o),l])}},hsl:{hex(e){const[t,a,o,l]=re(e);return E([...ye(t,a,o),l])},rgb(e){const[t,a,o,l]=re(e);return I([...ye(t,a,o),l])},hsv(e){const[t,a,o,l]=re(e);return X([...qe(t,a,o),l])}},hsv:{hex(e){const[t,a,o,l]=G(e);return E([...T(t,a,o),l])},rgb(e){const[t,a,o,l]=G(e);return I([...T(t,a,o),l])},hsl(e){const[t,a,o,l]=G(e);return q([...be(t,a,o),l])}}};function Le(e,t,a){return a=a||se(e),a?a===t?e:Ht[a][t](e):null}const le="12px",Tt=12,j="6px",qt=$({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=C(null);function a(n){!t.value||!e.rgba||(oe("mousemove",document,o),oe("mouseup",document,l),o(n))}function o(n){const{value:s}=t;if(!s)return;const{width:u,left:p}=s.getBoundingClientRect(),V=(n.clientX-p)/(u-Tt);e.onUpdateAlpha(Bt(V))}function l(){var n;ne("mousemove",document,o),ne("mouseup",document,l),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,railBackgroundImage:A(()=>{const{rgba:n}=e;return n?`linear-gradient(to right, rgba(${n[0]}, ${n[1]}, ${n[2]}, 0) 0%, rgba(${n[0]}, ${n[1]}, ${n[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:le,borderRadius:j},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:j,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:j,right:j,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${j})`,borderRadius:j,width:le,height:le}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:I(this.rgba),borderRadius:j,width:le,height:le}}))))}}),Re=st("n-color-picker");function Et(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Nt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Ot(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Lt(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function jt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const Kt={paddingSmall:"0 4px"},He=$({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=C(""),{themeRef:a}=Ee(Re,null);Ne(()=>{t.value=o()});function o(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function l(s){t.value=s}function n(s){let u,p;switch(e.label){case"HEX":p=Lt(s),p&&e.onUpdateValue(s),t.value=o();break;case"H":u=Nt(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Ot(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"A":u=jt(s),u===!1?t.value=o():e.onUpdateValue(u);break;case"R":case"G":case"B":u=Et(s),u===!1?t.value=o():e.onUpdateValue(u);break}}return{mergedTheme:a,inputValue:t,handleInputChange:n,handleInputUpdateValue:l}},render(){const{mergedTheme:e}=this;return i(_t,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Kt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Gt=$({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,a){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?E:ie)(a));return}let l;switch(e.valueArr===null?l=[0,0,0,0]:l=Array.from(e.valueArr),e.mode){case"hsv":l[t]=a,e.onUpdateValue((o?X:Ae)(l));break;case"rgb":l[t]=a,e.onUpdateValue((o?I:_e)(l));break;case"hsl":l[t]=a,e.onUpdateValue((o?q:Ue)(l));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(Ft,null,{default:()=>{const{mode:a,valueArr:o,showAlpha:l}=this;if(a==="hex"){let n=null;try{n=o===null?null:(l?E:ie)(o)}catch{}return i(He,{label:"HEX",showAlpha:l,value:n,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(a+(l?"a":"")).split("").map((n,s)=>i(He,{label:n.toUpperCase(),value:o===null?null:o[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}});function Xt(e,t){if(t==="hsv"){const[a,o,l,n]=G(e);return I([...T(a,o,l),n])}return e}function Zt(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Yt=$({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=A(()=>e.swatches.map(n=>{const s=se(n);return{value:n,mode:s,legalValue:Xt(n,s)}}));function a(n){const{mode:s}=e;let{value:u,mode:p}=n;return p||(p="hex",/^[a-zA-Z]+$/.test(u)?u=Zt(u):(ut("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),p===s?u:Le(u,s,p)}function o(n){e.onUpdateColor(a(n))}function l(n,s){n.key==="Enter"&&o(s)}return{parsedSwatchesRef:t,handleSwatchSelect:o,handleSwatchKeyDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:a=>{this.handleSwatchKeyDown(a,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Jt=$({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:a}=Ee(Re,null);return()=>{const{hsla:o,value:l,clsPrefix:n,onClick:s,disabled:u}=e,p=t.label||a.value;return i("div",{class:[`${n}-color-picker-trigger`,u&&`${n}-color-picker-trigger--disabled`],onClick:u?void 0:s},i("div",{class:`${n}-color-picker-trigger__fill`},i("div",{class:`${n}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?q(o):""}}),l&&o?i("div",{class:`${n}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},p?p(l):l):null))}}}),Qt=$({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=se(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(a){var o;const l=a.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,Le(l.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),te="12px",Wt=12,K="6px",er=6,tr="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",rr=$({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=C(null);function a(n){t.value&&(oe("mousemove",document,o),oe("mouseup",document,l),o(n))}function o(n){const{value:s}=t;if(!s)return;const{width:u,left:p}=s.getBoundingClientRect(),V=Mt((n.clientX-p-er)/(u-Wt)*360);e.onUpdateHue(V)}function l(){var n;ne("mousemove",document,o),ne("mouseup",document,l),(n=e.onComplete)===null||n===void 0||n.call(e)}return{railRef:t,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:te,borderRadius:K}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:tr,height:te,borderRadius:K,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:K,right:K,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${K})`,borderRadius:K,width:te,height:te}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:K,width:te,height:te}})))))}}),he="12px",fe="6px",or=$({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=C(null);function a(n){t.value&&(oe("mousemove",document,o),oe("mouseup",document,l),o(n))}function o(n){const{value:s}=t;if(!s)return;const{width:u,height:p,left:V,bottom:z}=s.getBoundingClientRect(),N=(z-n.clientY)/p,Z=(n.clientX-V)/u,ue=100*(Z>1?1:Z<0?0:Z),Y=100*(N>1?1:N<0?0:N);e.onUpdateSV(ue,Y)}function l(){var n;ne("mousemove",document,o),ne("mouseup",document,l),(n=e.onComplete)===null||n===void 0||n.call(e)}return{palleteRef:t,handleColor:A(()=>{const{rgba:n}=e;return n?`rgb(${n[0]}, ${n[1]}, ${n[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:he,height:he,borderRadius:fe,left:`calc(${this.displayedSv[0]}% - ${fe})`,bottom:`calc(${this.displayedSv[1]}% - ${fe})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:fe,width:he,height:he}})))}}),nr=x([c("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),c("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[dt(),c("input",`
 text-align: center;
 `)]),c("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[x("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),c("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[v("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),x("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),c("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[v("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),c("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[v("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[De("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),c("color-picker-preview",`
 display: flex;
 `,[v("sliders",`
 flex: 1 0 auto;
 `),v("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),v("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),v("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),c("color-picker-input",`
 display: flex;
 align-items: center;
 `,[c("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),v("mode",`
 width: 72px;
 text-align: center;
 `)]),c("color-picker-control",`
 padding: 12px;
 `),c("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[c("button","margin-left: 8px;")]),c("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[v("value",`
 white-space: nowrap;
 position: relative;
 `),v("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),De("disabled","cursor: not-allowed"),c("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[x("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),c("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[c("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[v("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),x("&:focus",`
 outline: none;
 `,[v("fill",[x("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),ar=Object.assign(Object.assign({},Oe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:$e.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),lr=$({name:"ColorPicker",props:ar,slots:Object,setup(e,{slots:t}){const a=C(null);let o=null;const l=ft(e),{mergedSizeRef:n,mergedDisabledRef:s}=l,{localeRef:u}=At("global"),{mergedClsPrefixRef:p,namespaceRef:V,inlineThemeDisabled:z}=Te(e),N=Oe("ColorPicker","-color-picker",nr,bt,e,p);gt(Re,{themeRef:N,renderLabelRef:we(e,"renderLabel"),colorPickerSlots:t});const Z=C(e.defaultShow),ue=Be(we(e,"show"),Z);function Y(r){const{onUpdateShow:d,"onUpdate:show":f}=e;d&&ce(d,r),f&&ce(f,r),Z.value=r}const{defaultValue:Ve}=e,ze=C(Ve===void 0?It(e.modes,e.showAlpha):Ve),w=Be(we(e,"value"),ze),J=C([w.value]),D=C(0),ge=A(()=>se(w.value)),{modes:je}=e,R=C(se(w.value)||je[0]||"rgb");function Ke(){const{modes:r}=e,{value:d}=R,f=r.findIndex(b=>b===d);~f?R.value=r[(f+1)%r.length]:R.value="rgb"}let S,U,Q,W,M,B,H,_;const ae=A(()=>{const{value:r}=w;if(!r)return null;switch(ge.value){case"hsv":return G(r);case"hsl":return[S,U,Q,_]=re(r),[...qe(S,U,Q),_];case"rgb":case"hex":return[M,B,H,_]=F(r),[...Ce(M,B,H),_]}}),O=A(()=>{const{value:r}=w;if(!r)return null;switch(ge.value){case"rgb":case"hex":return F(r);case"hsv":return[S,U,W,_]=G(r),[...T(S,U,W),_];case"hsl":return[S,U,Q,_]=re(r),[...ye(S,U,Q),_]}}),me=A(()=>{const{value:r}=w;if(!r)return null;switch(ge.value){case"hsl":return re(r);case"hsv":return[S,U,W,_]=G(r),[...be(S,U,W),_];case"rgb":case"hex":return[M,B,H,_]=F(r),[...Se(M,B,H),_]}}),Ge=A(()=>{switch(R.value){case"rgb":case"hex":return O.value;case"hsv":return ae.value;case"hsl":return me.value}}),de=C(0),ve=C(1),xe=C([0,0]);function Xe(r,d){const{value:f}=ae,b=de.value,g=f?f[3]:1;xe.value=[r,d];const{showAlpha:h}=e;switch(R.value){case"hsv":m((h?X:Ae)([b,r,d,g]),"cursor");break;case"hsl":m((h?q:Ue)([...be(b,r,d),g]),"cursor");break;case"rgb":m((h?I:_e)([...T(b,r,d),g]),"cursor");break;case"hex":m((h?E:ie)([...T(b,r,d),g]),"cursor");break}}function Ze(r){de.value=r;const{value:d}=ae;if(!d)return;const[,f,b,g]=d,{showAlpha:h}=e;switch(R.value){case"hsv":m((h?X:Ae)([r,f,b,g]),"cursor");break;case"rgb":m((h?I:_e)([...T(r,f,b),g]),"cursor");break;case"hex":m((h?E:ie)([...T(r,f,b),g]),"cursor");break;case"hsl":m((h?q:Ue)([...be(r,f,b),g]),"cursor");break}}function Ye(r){switch(R.value){case"hsv":[S,U,W]=ae.value,m(X([S,U,W,r]),"cursor");break;case"rgb":[M,B,H]=O.value,m(I([M,B,H,r]),"cursor");break;case"hex":[M,B,H]=O.value,m(E([M,B,H,r]),"cursor");break;case"hsl":[S,U,Q]=me.value,m(q([S,U,Q,r]),"cursor");break}ve.value=r}function m(r,d){d==="cursor"?o=r:o=null;const{nTriggerFormChange:f,nTriggerFormInput:b}=l,{onUpdateValue:g,"onUpdate:value":h}=e;g&&ce(g,r),h&&ce(h,r),f(),b(),ze.value=r}function Je(r){m(r,"input"),wt(ee)}function ee(r=!0){const{value:d}=w;if(d){const{nTriggerFormChange:f,nTriggerFormInput:b}=l,{onComplete:g}=e;g&&g(d);const{value:h}=J,{value:y}=D;r&&(h.splice(y+1,h.length,d),D.value=y+1),f(),b()}}function Qe(){const{value:r}=D;r-1<0||(m(J.value[r-1],"input"),ee(!1),D.value=r-1)}function We(){const{value:r}=D;r<0||r+1>=J.value.length||(m(J.value[r+1],"input"),ee(!1),D.value=r+1)}function et(){m(null,"input");const{onClear:r}=e;r&&r(),Y(!1)}function tt(){const{value:r}=w,{onConfirm:d}=e;d&&d(r),Y(!1)}const rt=A(()=>D.value>=1),ot=A(()=>{const{value:r}=J;return r.length>1&&D.value<r.length-1});mt(ue,r=>{r||(J.value=[w.value],D.value=0)}),Ne(()=>{if(!(o&&o===w.value)){const{value:r}=ae;r&&(de.value=r[0],ve.value=r[3],xe.value=[r[1],r[2]])}o=null});const ke=A(()=>{const{value:r}=n,{common:{cubicBezierEaseInOut:d},self:{textColor:f,color:b,panelFontSize:g,boxShadow:h,border:y,borderRadius:k,dividerColor:L,[Pe("height",r)]:at,[Pe("fontSize",r)]:lt}}=N.value;return{"--n-bezier":d,"--n-text-color":f,"--n-color":b,"--n-panel-font-size":g,"--n-font-size":lt,"--n-box-shadow":h,"--n-border":y,"--n-border-radius":k,"--n-height":at,"--n-divider-color":L}}),P=z?vt("color-picker",A(()=>n.value[0]),ke,e):void 0;function nt(){var r;const{value:d}=O,{value:f}=de,{internalActions:b,modes:g,actions:h}=e,{value:y}=N,{value:k}=p;return i("div",{class:[`${k}-color-picker-panel`,P?.themeClass.value],onDragstart:L=>{L.preventDefault()},style:z?void 0:ke.value},i("div",{class:`${k}-color-picker-control`},i(or,{clsPrefix:k,rgba:d,displayedHue:f,displayedSv:xe.value,onUpdateSV:Xe,onComplete:ee}),i("div",{class:`${k}-color-picker-preview`},i("div",{class:`${k}-color-picker-preview__sliders`},i(rr,{clsPrefix:k,hue:f,onUpdateHue:Ze,onComplete:ee}),e.showAlpha?i(qt,{clsPrefix:k,rgba:d,alpha:ve.value,onUpdateAlpha:Ye,onComplete:ee}):null),e.showPreview?i(Qt,{clsPrefix:k,mode:R.value,color:O.value&&ie(O.value),onUpdateColor:L=>{m(L,"input")}}):null),i(Gt,{clsPrefix:k,showAlpha:e.showAlpha,mode:R.value,modes:g,onUpdateMode:Ke,value:w.value,valueArr:Ge.value,onUpdateValue:Je}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&i(Yt,{clsPrefix:k,mode:R.value,swatches:e.swatches,onUpdateColor:L=>{m(L,"input")}})),h?.length?i("div",{class:`${k}-color-picker-action`},h.includes("confirm")&&i(pe,{size:"small",onClick:tt,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.confirm}),h.includes("clear")&&i(pe,{size:"small",onClick:et,disabled:!w.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.clear})):null,t.action?i("div",{class:`${k}-color-picker-action`},{default:t.action}):b?i("div",{class:`${k}-color-picker-action`},b.includes("undo")&&i(pe,{size:"small",onClick:Qe,disabled:!rt.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.undo}),b.includes("redo")&&i(pe,{size:"small",onClick:We,disabled:!ot.value,theme:y.peers.Button,themeOverrides:y.peerOverrides.Button},{default:()=>u.value.redo})):null)}return{mergedClsPrefix:p,namespace:V,selfRef:a,hsla:me,rgba:O,mergedShow:ue,mergedDisabled:s,isMounted:xt(),adjustedTo:$e(e),mergedValue:w,handleTriggerClick(){Y(!0)},handleClickOutside(r){var d;!((d=a.value)===null||d===void 0)&&d.contains(kt(r))||Y(!1)},renderPanel:nt,cssVars:z?void 0:ke,themeClass:P?.themeClass,onRender:P?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),i("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},i(Rt,null,{default:()=>[i(Vt,null,{default:()=>i(Jt,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),i(zt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===$e.tdkey,to:this.adjustedTo},{default:()=>i(ct,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?pt(this.renderPanel(),[[ht,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),ir=$({__name:"SelectColor",props:Fe({size:{default:"medium"},label:{}},{modelValue:{type:String,default:"#000"},modelModifiers:{}}),emits:Fe(["change"],["update:modelValue"]),setup(e,{emit:t}){const a=yt(e,"modelValue"),o=["#18A058","#F0A020","#ffd166","#06d6a0","#ef476f","#2A8BFD","#BAFF7F","#00FAC1","#00CAFF","#FDE056","#4ED33C","#FF8A26","#FF5252","#9689FF","#CB00FF","#339ca8"],l=t,n=s=>l("change",s);return(s,u)=>{const p=lr,V=$t;return s.label?(Me(),Ie(V,{key:0,label:s.label,class:"cpwarp"},{default:Ct(()=>[St(p,{size:s.size,value:a.value,"onUpdate:value":[u[0]||(u[0]=z=>a.value=z),n],swatches:o},null,8,["size","value"])]),_:1},8,["label"])):(Me(),Ie(p,{key:1,size:s.size,value:a.value,"onUpdate:value":[u[1]||(u[1]=z=>a.value=z),n],swatches:o},null,8,["size","value"]))}}}),pr=Ut(ir,[["__scopeId","data-v-1e5d82fa"]]);export{pr as _,lr as a,Ft as b};
