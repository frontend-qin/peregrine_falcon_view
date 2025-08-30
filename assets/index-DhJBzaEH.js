import{g as Rt,a as kt,b as _t}from"./utils-B_GI1MGF.js";import{c as Dt}from"./theme-D0Tx5aRa.js";import{cW as It,ck as Tt,l as Nt,c as Vt,aK as $t,a3 as Et,f as ne,h as y,u as he,cX as At,j as _,bF as Bt,k as g,q as Qe,s as et,a as Mt,e as d,as as f,d as N,bK as tt,bH as jt,V as Xe,aH as Ke,U as Ot,X as Lt,T as Xt,bc as Ye,Y as Kt,w as Yt,cY as Ft,t as te,ak as Fe,m as nt,cZ as Ht,o as Ut,a2 as ve,b4 as Wt,a1 as Q,$ as ee,z as j,G as M,E as Zt,A as qt,H as ce,I as de,K as He,B as K,D as Ue,L as Gt,_ as Jt}from"./index-D3EkjUs5.js";import{c as Qt}from"./_createCompounder-NjhpeUQm.js";import{u as en}from"./Switch-YmPWNa9t.js";function tn(e){return It(Tt(e).toLowerCase())}var We=Qt(function(e,o,a){return o=o.toLowerCase(),e+(a?tn(o):o)});const ot=Vt("n-carousel-methods");function nn(e){Et(ot,e)}function Te(e="unknown",o="component"){const a=Nt(ot);return a||$t(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}function on(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function an(){return y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const rn=ne({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=he(e),{isVertical:a,isPrevDisabled:s,isNextDisabled:p,prev:u,next:C}=Te();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:s,isNextDisabled:p,prev:u,next:C}},render(){const{mergedClsPrefix:e}=this;return y("div",{class:`${e}-carousel__arrow-group`},y("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},on()),y("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},an()))}}),sn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},ln=ne({name:"CarouselDots",props:sn,setup(e){const{mergedClsPrefixRef:o}=he(e),a=_([]),s=Te();function p(h,v){switch(h.key){case"Enter":case" ":h.preventDefault(),s.to(v);return}e.keyboard&&S(h)}function u(h){e.trigger==="hover"&&s.to(h)}function C(h){e.trigger==="click"&&s.to(h)}function S(h){var v;if(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)return;const m=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(m==="input"||m==="textarea")return;const{code:P}=h,V=P==="PageUp"||P==="ArrowUp",O=P==="PageDown"||P==="ArrowDown",z=P==="PageUp"||P==="ArrowRight",R=P==="PageDown"||P==="ArrowLeft",E=s.isVertical(),L=E?V:z,A=E?O:R;!L&&!A||(h.preventDefault(),L&&!s.isNextDisabled()?(s.next(),w(s.currentIndexRef.value)):A&&!s.isPrevDisabled()&&(s.prev(),w(s.currentIndexRef.value)))}function w(h){var v;(v=a.value[h])===null||v===void 0||v.focus()}return Bt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:p,handleMouseenter:u,handleClick:C}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return y("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},At(this.total,a=>{const s=a===this.currentIndex;return y("div",{"aria-selected":s,ref:p=>o.push(p),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,s&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:p=>{this.handleKeydown(p,a)}})}))}}),pe="CarouselItem";function un(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===pe}const at=ne({name:pe,setup(e){const{mergedClsPrefixRef:o}=he(e),a=Te(We(pe),`n-${We(pe)}`),s=_(),p=g(()=>{const{value:v}=s;return v?a.getSlideIndex(v):-1}),u=g(()=>a.isPrev(p.value)),C=g(()=>a.isNext(p.value)),S=g(()=>a.isActive(p.value)),w=g(()=>a.getSlideStyle(p.value));Qe(()=>{a.addSlide(s.value)}),et(()=>{a.removeSlide(s.value)});function h(v){const{value:m}=p;m!==void 0&&a?.onCarouselItemClick(m,v)}return{mergedClsPrefix:o,selfElRef:s,isPrev:u,isNext:C,isActive:S,index:p,style:w,handleClick:h}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:s,isNext:p,isActive:u,index:C,style:S}=this,w=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:u,[`${a}-carousel__slide--prev`]:s,[`${a}-carousel__slide--next`]:p}];return y("div",{ref:"selfElRef",class:w,role:"option",tabindex:"-1","data-index":C,"aria-hidden":!u,style:S,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:s,isNext:p,isActive:u,index:C}))}}),cn=Mt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[d("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[d("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[N("> img",`
 display: block;
 `)])]),d("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[d("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[d("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),d("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[N("svg",`
 height: 1em;
 width: 1em;
 `),N("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[d("slides",`
 flex-direction: column;
 `),f("fade",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[d("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[d("slides",[N(">",[N("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `)]),d("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[d("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[d("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[d("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[d("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[d("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[d("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[d("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),d("dot",`
 margin: 4px 0;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[d("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 top: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[d("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[d("dot",`
 margin: 0 4px;
 `)])]),d("dot",`
 margin: 0 4px;
 `),d("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[d("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[d("slides",`
 perspective: 1000px;
 `),d("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function dn(e){const{length:o}=e;return o>1&&(e.push(Ze(e[0],0,"append")),e.unshift(Ze(e[o-1],o-1,"prepend"))),e}function Ze(e,o,a){return tt(e,{key:`carousel-item-duplicate-${o}-${a}`})}function qe(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function De(e,o){return o?e+1:e}function fn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function vn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function pn(e,o){return o&&e>3?e-2:e}function Ge(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Je(e,o){let{offsetWidth:a,offsetHeight:s}=e;if(o){const p=getComputedStyle(e);a=a-Number.parseFloat(p.getPropertyValue("padding-left"))-Number.parseFloat(p.getPropertyValue("padding-right")),s=s-Number.parseFloat(p.getPropertyValue("padding-top"))-Number.parseFloat(p.getPropertyValue("padding-bottom"))}return{width:a,height:s}}function fe(e,o,a){return e<o?o:e>a?a:e}function hn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,s,,p="ms"]=a;return Number(s)*(p==="ms"?1:1e3)}return 0}const gn=["transitionDuration","transitionTimingFunction"],mn=Object.assign(Object.assign({},nt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const xn=ne({name:"Carousel",props:mn,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=he(e),s=_(null),p=_(null),u=_([]),C={value:[]},S=g(()=>e.direction==="vertical"),w=g(()=>S.value?"height":"width"),h=g(()=>S.value?"bottom":"right"),v=g(()=>e.effect==="slide"),m=g(()=>e.loop&&e.slidesPerView===1&&v.value),P=g(()=>e.effect==="custom"),V=g(()=>!v.value||e.centeredSlides?1:e.slidesPerView),O=g(()=>P.value?1:e.slidesPerView),z=g(()=>V.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),R=_({width:0,height:0}),E=_(0),L=g(()=>{const{value:t}=u;if(!t.length)return[];E.value;const{value:n}=z;if(n)return t.map(b=>Je(b));const{value:r}=O,{value:l}=R,{value:c}=w;let i=l[c];if(r!=="auto"){const{spaceBetween:b}=e,k=i-(r-1)*b,ue=1/Math.max(1,r);i=k*ue}const x=Object.assign(Object.assign({},l),{[c]:i});return t.map(()=>x)}),A=g(()=>{const{value:t}=L;if(!t.length)return[];const{centeredSlides:n,spaceBetween:r}=e,{value:l}=w,{[l]:c}=R.value;let i=0;return t.map(({[l]:x})=>{let b=i;return n&&(b+=(x-c)/2),i+=x+r,b})}),Ne=_(!1),ge=g(()=>{const{transitionStyle:t}=e;return t?Ye(t,gn):{}}),me=g(()=>P.value?0:hn(ge.value.transitionDuration)),Ve=g(()=>{const{value:t}=u;if(!t.length)return[];const n=!(z.value||O.value===1),r=x=>{if(n){const{value:b}=w;return{[b]:`${L.value[x][b]}px`}}};if(P.value)return t.map((x,b)=>r(b));const{effect:l,spaceBetween:c}=e,{value:i}=h;return t.reduce((x,b,k)=>{const ue=Object.assign(Object.assign({},r(k)),{[`margin-${i}`]:`${c}px`});return x.push(ue),Ne.value&&(l==="fade"||l==="card")&&Object.assign(ue,ge.value),x},[])}),D=g(()=>{const{value:t}=V,{length:n}=u.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:r}=L,{length:l}=r;if(!l)return n;const{value:c}=A,{value:i}=w,x=R.value[i];let b=r[r.length-1][i],k=l;for(;k>1&&b<x;)k--,b+=c[k]-c[k-1];return fe(k+1,1,l)}}),xe=g(()=>pn(D.value,m.value)),rt=De(e.defaultIndex,m.value),be=_(qe(rt,D.value,m.value)),$=en(Kt(e,"currentIndex"),be),I=g(()=>De($.value,m.value));function Z(t){var n,r;t=fe(t,0,D.value-1);const l=qe(t,D.value,m.value),{value:c}=$;l!==$.value&&(be.value=l,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,l,c),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,l,c))}function we(t=I.value){return fn(t,D.value,e.loop)}function ye(t=I.value){return vn(t,D.value,e.loop)}function it(t){const n=F(t);return n!==null&&we()===n}function st(t){const n=F(t);return n!==null&&ye()===n}function $e(t){return I.value===F(t)}function lt(t){return $.value===t}function Ee(){return we()===null}function Ae(){return ye()===null}let Y=0;function Se(t){const n=fe(De(t,m.value),0,D.value);(t!==$.value||n!==I.value)&&Z(n)}function oe(){const t=we();t!==null&&(Y=-1,Z(t))}function q(){const t=ye();t!==null&&(Y=1,Z(t))}let T=!1;function ut(){(!T||!m.value)&&oe()}function ct(){(!T||!m.value)&&q()}let X=0;const Ce=_({});function ae(t,n=0){Ce.value=Object.assign({},ge.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function G(t=0){v.value?Pe(I.value,t):X!==0&&(!T&&t>0&&(T=!0),ae(X=0,t))}function Pe(t,n){const r=Be(t);r!==X&&n>0&&(T=!0),X=Be(I.value),ae(r,n)}function Be(t){let n;return t>=D.value-1?n=Me():n=A.value[t]||0,n}function Me(){if(V.value==="auto"){const{value:t}=w,{[t]:n}=R.value,{value:r}=A,l=r[r.length-1];let c;if(l===void 0)c=n;else{const{value:i}=L;c=l+i[i.length-1][t]}return c-n}else{const{value:t}=A;return t[D.value-1]||0}}const J={currentIndexRef:$,to:Se,prev:ut,next:ct,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:it,isNext:st,isActive:$e,isPrevDisabled:Ee,isNextDisabled:Ae,getSlideIndex:F,getSlideStyle:vt,addSlide:dt,removeSlide:ft,onCarouselItemClick:pt};nn(J);function dt(t){t&&u.value.push(t)}function ft(t){if(!t)return;const n=F(t);n!==-1&&u.value.splice(n,1)}function F(t){return typeof t=="number"?t:t?u.value.indexOf(t):-1}function vt(t){const n=F(t);if(n!==-1){const r=[Ve.value[n]],l=J.isPrev(n),c=J.isNext(n);return l&&r.push(e.prevSlideStyle||""),c&&r.push(e.nextSlideStyle||""),ve(r)}}let ze=0,Re=0,B=0,ke=0,re=!1,_e=!1;function pt(t,n){let r=!T&&!re&&!_e;e.effect==="card"&&r&&!$e(t)&&(Se(t),r=!1),r||(n.preventDefault(),n.stopPropagation())}let ie=null;function se(){ie&&(clearInterval(ie),ie=null)}function H(){se(),!e.autoplay||xe.value<2||(ie=window.setInterval(q,e.interval))}function je(t){var n;if(Ie||!(!((n=p.value)===null||n===void 0)&&n.contains(Wt(t))))return;Ie=!0,re=!0,_e=!1,ke=Date.now(),se(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=Ge(t)?t.touches[0]:t;S.value?Re=r.clientY:ze=r.clientX,e.touchable&&(Q("touchmove",document,le),Q("touchend",document,U),Q("touchcancel",document,U)),e.draggable&&(Q("mousemove",document,le),Q("mouseup",document,U))}function le(t){const{value:n}=S,{value:r}=w,l=Ge(t)?t.touches[0]:t,c=n?l.clientY-Re:l.clientX-ze,i=R.value[r];B=fe(c,-i,i),t.cancelable&&t.preventDefault(),v.value&&ae(X-B,0)}function U(){const{value:t}=I;let n=t;if(!T&&B!==0&&v.value){const r=X-B,l=[...A.value.slice(0,D.value-1),Me()];let c=null;for(let i=0;i<l.length;i++){const x=Math.abs(l[i]-r);if(c!==null&&c<x)break;c=x,n=i}}if(n===t){const r=Date.now()-ke,{value:l}=w,c=R.value[l];B>c/2||B/r>.4?oe():(B<-c/2||B/r<-.4)&&q()}n!==null&&n!==t?(_e=!0,Z(n),Fe(()=>{(!m.value||be.value!==$.value)&&G(me.value)})):G(me.value),Oe(),H()}function Oe(){re&&(Ie=!1),re=!1,ze=0,Re=0,B=0,ke=0,ee("touchmove",document,le),ee("touchend",document,U),ee("touchcancel",document,U),ee("mousemove",document,le),ee("mouseup",document,U)}function ht(){if(v.value&&T){const{value:t}=I;Pe(t,0)}else H();v.value&&(Ce.value.transitionDuration="0ms"),T=!1}function gt(t){if(t.preventDefault(),T)return;let{deltaX:n,deltaY:r}=t;t.shiftKey&&!n&&(n=r);const l=-1,c=1,i=(n||r)>0?c:l;let x=0,b=0;S.value?b=i:x=i;const k=10;(b*r>=k||x*n>=k)&&(i===c&&!Ae()?q():i===l&&!Ee()&&oe())}function mt(){R.value=Je(s.value,!0),H()}function xt(){z.value&&E.value++}function bt(){e.autoplay&&se()}function wt(){e.autoplay&&H()}Qe(()=>{Yt(H),requestAnimationFrame(()=>Ne.value=!0)}),et(()=>{Oe(),se()}),Ft(()=>{const{value:t}=u,{value:n}=C,r=new Map,l=i=>r.has(i)?r.get(i):-1;let c=!1;for(let i=0;i<t.length;i++){const x=n.findIndex(b=>b.el===t[i]);x!==i&&(c=!0),r.set(t[i],x)}c&&t.sort((i,x)=>l(i)-l(x))}),te(I,(t,n)=>{if(t===n){Y=0;return}if(H(),v.value){if(m.value){const{value:r}=D;Y===-1&&n===1&&t===r-2?t=0:Y===1&&n===r-2&&t===1&&(t=r-1)}Pe(t,me.value)}else G();Y=0},{immediate:!0}),te([m,V],()=>void Fe(()=>{Z(I.value)})),te(A,()=>{v.value&&G()},{deep:!0}),te(v,t=>{t?G():(T=!1,ae(X=0))});const yt=g(()=>({onTouchstartPassive:e.touchable?je:void 0,onMousedown:e.draggable?je:void 0,onWheel:e.mousewheel?gt:void 0})),St=g(()=>Object.assign(Object.assign({},Ye(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:xe.value,currentIndex:$.value})),Ct=g(()=>({total:xe.value,currentIndex:$.value,to:J.to})),Pt={getCurrentIndex:()=>$.value,to:Se,prev:oe,next:q},zt=nt("Carousel","-carousel",cn,Ht,e,o),Le=g(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:r,dotColorActive:l,dotColorFocus:c,dotLineWidth:i,dotLineWidthActive:x,arrowColor:b}}=zt.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":c,"--n-dot-color-active":l,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":x,"--n-arrow-color":b}}),W=a?Ut("carousel",void 0,Le,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:s,slidesElRef:p,slideVNodes:C,duplicatedable:m,userWantsControl:P,autoSlideSize:z,realIndex:I,slideStyles:Ve,translateStyle:Ce,slidesControlListeners:yt,handleTransitionEnd:ht,handleResize:mt,handleSlideResize:xt,handleMouseenter:bt,handleMouseleave:wt,isActive:lt,arrowSlotProps:St,dotSlotProps:Ct},Pt),{cssVars:a?void 0:Le,themeClass:W?.themeClass,onRender:W?.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:s,slideStyles:p,dotType:u,dotPlacement:C,slidesControlListeners:S,transitionProps:w={},arrowSlotProps:h,dotSlotProps:v,$slots:{default:m,dots:P,arrow:V}}=this,O=m&&jt(m())||[];let z=bn(O);return z.length||(z=O.map(R=>y(at,null,{default:()=>tt(R)}))),this.duplicatedable&&(z=dn(z)),this.slideVNodes.value=z,this.autoSlideSize&&(z=z.map(R=>y(Xe,{onResize:this.handleSlideResize},{default:()=>R}))),(e=this.onRender)===null||e===void 0||e.call(this),y("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${C}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,s&&`${o}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),y(Xe,{onResize:this.handleResize},{default:()=>y("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},s?z.map((R,E)=>y("div",{style:p[E],key:E},Ot(y(Xt,Object.assign({},w),{default:()=>R}),[[Lt,this.isActive(E)]]))):z)}),this.showDots&&v.total>1&&Ke(P,v,()=>[y(ln,{key:u+C,total:v.total,currentIndex:v.currentIndex,dotType:u,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ke(V,h,()=>[y(rn,null)]))}});function bn(e){return e.reduce((o,a)=>(un(a)&&o.push(a),o),[])}const wn={class:"list-warp"},yn=ne({__name:"index",props:{config:{},theme:{}},setup(e){const o=e,a=_(20),s=_([]),p=g(()=>{const{headerHeight:u}=o.config.options;return{height:o.config.height-u+"px"}});return te(()=>o.config,u=>{const C=u.data.data,{headerHeight:S,pageSize:w}=o.config.options;s.value=Dt(C,w),a.value=(o.config.height-S)/w},{immediate:!0,deep:!0}),(u,C)=>{const S=at,w=xn;return M(),j("div",wn,[Zt("ul",{class:"header",style:ve(K(Rt)(u.config.options))},[(M(!0),j(ce,null,de(u.config.options.columns,h=>(M(),j("li",{key:h},He(h),1))),128))],4),qt(w,{mousewheel:u.config.options.mousewheel,autoplay:u.config.options.autoplay,draggable:u.config.options.draggable,"show-dots":!1,direction:"vertical",interval:u.config.options.interval*1e3,style:ve(K(p))},{default:Ue(()=>[(M(!0),j(ce,null,de(K(s),h=>(M(),Gt(S,{key:h.id},{default:Ue(()=>[(M(!0),j(ce,null,de(h,(v,m)=>(M(),j("ul",{key:m,class:"warp-item",style:ve({height:K(a)+"px",lineHeight:K(a)+"px",borderColor:u.config.options.borderColor,fontSize:u.config.options.fontSize+"px",color:K(_t)(m,u.config.options,u.theme.color),backgroundColor:K(kt)(m,u.config.options,u.theme.color)})},[(M(!0),j(ce,null,de(v,(P,V)=>(M(),j("li",{key:V},He(P),1))),128))],4))),128))]),_:2},1024))),128))]),_:1},8,["mousewheel","autoplay","draggable","interval","style"])])}}}),kn=Jt(yn,[["__scopeId","data-v-0532e778"]]);export{kn as default};
