var to=Object.defineProperty,eo=Object.defineProperties;var no=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var so=Object.prototype.hasOwnProperty,lo=Object.prototype.propertyIsEnumerable;var E=(o,t,e)=>t in o?to(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,z=(o,t)=>{for(var e in t||(t={}))so.call(t,e)&&E(o,e,t[e]);if(P)for(var e of P(t))lo.call(t,e)&&E(o,e,t[e]);return o},S=(o,t)=>eo(o,no(t));import{d as g,_ as B,o as c,c as v,e as y,l as ao,g as d,i as ro,V as io,v as H,W as j,X as m,u as a,k as co,Y as uo,q as bo,s as q,Z as po,G as vo,I as $,K as h,w as G,L as K,H as C,M as V,F,P as fo,Q as R,$ as mo,r as _o,C as N,T as go,a0 as yo}from"./index.a29a7a26.js";const ho=g({name:"CircleCheck"}),$o={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Co=y("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),ko=y("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"},null,-1),zo=[Co,ko];function So(o,t,e,l,n,r){return c(),v("svg",$o,zo)}var wo=B(ho,[["render",So]]);const Bo=g({name:"CircleClose"}),xo={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Io=y("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"},null,-1),Lo=y("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),To=[Io,Lo];function Mo(o,t,e,l,n,r){return c(),v("svg",xo,To)}var Po=B(Bo,[["render",Mo]]);const Eo=g({name:"Loading"}),Go={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ko=y("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),Vo=[Ko];function Fo(o,t,e,l,n,r){return c(),v("svg",Go,Vo)}var A=B(Eo,[["render",Fo]]);const D=ao([String,Object,Function]),et={validating:A,success:wo,error:Po},No=["","default","small","large"],O=Symbol("buttonGroupContextKey"),x=Symbol("formContextKey"),Q=Symbol("formItemContextKey"),U=o=>{const t=ro();return d(()=>{var e,l;return(l=(e=t.proxy)==null?void 0:e.$props[o])!=null?l:void 0})},Do=io({type:String,values:No,required:!1}),Ho=(o,t={})=>{const e=H(void 0),l=t.prop?e:U("size"),n=t.global?e:j("size"),r=t.form?{size:void 0}:m(x,void 0),b=t.formItem?{size:void 0}:m(Q,void 0);return d(()=>l.value||a(o)||(b==null?void 0:b.size)||(r==null?void 0:r.size)||n.value||"")},W=o=>{const t=U("disabled"),e=m(x,void 0);return d(()=>t.value||a(o)||(e==null?void 0:e.disabled)||!1)},jo=()=>{const o=m(x,void 0),t=m(Q,void 0);return{form:o,formItem:t}},qo=["default","primary","success","warning","info","danger","text",""],Ro=["button","submit","reset"],w=co({size:Do,disabled:Boolean,type:{type:String,values:qo,default:""},icon:{type:D,default:""},nativeType:{type:String,values:Ro,default:"button"},loading:Boolean,loadingIcon:{type:D,default:()=>A},plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),Ao={click:o=>o instanceof MouseEvent};function u(o,t=20){return o.mix("#141414",t).toString()}function Oo(o){const t=W();return d(()=>{let e={};const l=o.color;if(l){const n=new uo(l),r=o.dark?n.tint(20).toString():u(n,20);if(o.plain)e={"--el-button-bg-color":o.dark?u(n,90):n.tint(90).toString(),"--el-button-text-color":l,"--el-button-border-color":o.dark?u(n,50):n.tint(50).toString(),"--el-button-hover-text-color":"var(--el-color-white)","--el-button-hover-bg-color":l,"--el-button-hover-border-color":l,"--el-button-active-bg-color":r,"--el-button-active-text-color":"var(--el-color-white)","--el-button-active-border-color":r},t.value&&(e["--el-button-disabled-bg-color"]=o.dark?u(n,90):n.tint(90).toString(),e["--el-button-disabled-text-color"]=o.dark?u(n,50):n.tint(50).toString(),e["--el-button-disabled-border-color"]=o.dark?u(n,80):n.tint(80).toString());else{const b=o.dark?u(n,30):n.tint(30).toString(),i=n.isDark()?"var(--el-color-white)":"var(--el-color-black)";if(e={"--el-button-bg-color":l,"--el-button-text-color":i,"--el-button-border-color":l,"--el-button-hover-bg-color":b,"--el-button-hover-text-color":i,"--el-button-hover-border-color":b,"--el-button-active-bg-color":r,"--el-button-active-border-color":r},t.value){const _=o.dark?u(n,50):n.tint(50).toString();e["--el-button-disabled-bg-color"]=_,e["--el-button-disabled-text-color"]=o.dark?"rgba(255, 255, 255, 0.5)":"var(--el-color-white)",e["--el-button-disabled-border-color"]=_}}}return e})}const Qo=["disabled","autofocus","type"],Uo={name:"ElButton"},Wo=g(S(z({},Uo),{props:w,emits:Ao,setup(o,{expose:t,emit:e}){const l=o,n=bo(),r=m(O,void 0),b=j("button"),i=q("button"),{form:_}=jo(),I=Ho(d(()=>r==null?void 0:r.size)),k=W(),L=H(),T=d(()=>l.type||(r==null?void 0:r.type)||""),Y=d(()=>{var s,p,f;return(f=(p=l.autoInsertSpace)!=null?p:(s=b.value)==null?void 0:s.autoInsertSpace)!=null?f:!1}),M=d(()=>{var s;const p=(s=n.default)==null?void 0:s.call(n);if(Y.value&&(p==null?void 0:p.length)===1){const f=p[0];if((f==null?void 0:f.type)===po){const oo=f.children;return/^\p{Unified_Ideograph}{2}$/u.test(oo.trim())}}return!1}),Z=Oo(l),J=s=>{l.nativeType==="reset"&&(_==null||_.resetFields()),e("click",s)};return t({ref:L,size:I,type:T,disabled:k,shouldAddSpace:M}),(s,p)=>(c(),v("button",{ref_key:"_ref",ref:L,class:C([a(i).b(),a(i).m(a(T)),a(i).m(a(I)),a(i).is("disabled",a(k)),a(i).is("loading",s.loading),a(i).is("plain",s.plain),a(i).is("round",s.round),a(i).is("circle",s.circle)]),disabled:a(k)||s.loading,autofocus:s.autofocus,type:s.nativeType,style:fo(a(Z)),onClick:J},[s.loading?(c(),v(vo,{key:0},[s.$slots.loading?$(s.$slots,"loading",{key:0}):(c(),h(a(V),{key:1,class:C(a(i).is("loading"))},{default:G(()=>[(c(),h(K(s.loadingIcon)))]),_:1},8,["class"]))],2112)):s.icon||s.$slots.icon?(c(),h(a(V),{key:1},{default:G(()=>[s.icon?(c(),h(K(s.icon),{key:0})):$(s.$slots,"icon",{key:1})]),_:3})):F("v-if",!0),s.$slots.default?(c(),v("span",{key:2,class:C({[a(i).em("text","expand")]:a(M)})},[$(s.$slots,"default")],2)):F("v-if",!0)],14,Qo))}}));var Xo=R(Wo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const Yo={size:w.size,type:w.type},Zo={name:"ElButtonGroup"},Jo=g(S(z({},Zo),{props:Yo,setup(o){const t=o;mo(O,_o({size:N(t,"size"),type:N(t,"type")}));const e=q("button");return(l,n)=>(c(),v("div",{class:C(`${a(e).b("group")}`)},[$(l.$slots,"default")],2))}}));var X=R(Jo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const nt=go(Xo,{ButtonGroup:X});yo(X);export{nt as E,et as V,jo as a,Ho as b,W as c,Po as d,D as i,Do as u};