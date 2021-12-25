import{r as ref,a as reactive,t as toRef,o as openBlock,c as createElementBlock,b as createBaseVNode,d as renderSlot,e as toRefs,f as computed,w as withDirectives,v as vModelDynamic,m as mergeProps,g as withModifiers,h as createBlock,i as withCtx,j as createCommentVNode,T as Transition,k as createTextVNode,l as resolveComponent,n as createVNode,p as toDisplayString,F as Fragment,q as renderList,s as createRouter,u as createWebHistory,x as createApp}from"./vendor.691d522f.js";const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};p();let createCalculator=()=>{const expression=ref(""),expressionError=reactive({error:!1,message:"Empty message"}),optionsList=ref(["*","/","+","-","**",".",")","("]),numbersList=ref([7,8,9,4,5,6,1,2,3,0]);let setToExpression=r=>{expression.value+=r},clearExpression=()=>{expression.value=""},getExpressionResult=exp=>{let result=0;try{result=eval(exp),Number.isInteger(result)||(result=result.toFixed(2))}catch(r){throw new EvalError("Expression is not valid!")}return String(result)};return{expression,optionsList,numbersList,setToExpression,clearExpression,getExpressionResult,expressionError}},switcher=(r,t,o,e)=>{const s=toRef(r,t);let n=setTimeout(()=>{s.value=e,clearTimeout(n)},o);return n},debounce=(r,t)=>{let o=!0;return(...e)=>{!o||(r.apply(window,e),o=!1,setTimeout(()=>{o=!0},t))}};var ButtonsPanel_vue_vue_type_style_index_0_lang="",_export_sfc=(r,t)=>{const o=r.__vccOpts||r;for(const[e,s]of t)o[e]=s;return o};const _sfc_main$4={},_hoisted_1$3={class:"btns-panel"},_hoisted_2$2={class:"btns-panel__btns-list"},_hoisted_3$1=createBaseVNode("p",null," No numbers list ",-1),_hoisted_4$1={class:"btns-panel__operations-list"},_hoisted_5$1=createBaseVNode("p",null," No options ",-1);function _sfc_render$4(r,t,o,e,s,n){return openBlock(),createElementBlock("article",_hoisted_1$3,[createBaseVNode("section",_hoisted_2$2,[renderSlot(r.$slots,"numbers-list",{},()=>[_hoisted_3$1])]),createBaseVNode("section",_hoisted_4$1,[renderSlot(r.$slots,"options-list",{},()=>[_hoisted_5$1])])])}var ButtonsPanel=_export_sfc(_sfc_main$4,[["render",_sfc_render$4]]),MaterialInput_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$3={props:{excludePattern:{type:RegExp,required:!1,default:/[^*]/},valueModel:{type:String,required:!0,default:""}},emits:["update:valueModel"],setup(r,{attrs:t,emit:o}){const{excludePattern:e,valueModel:s}=toRefs(r);let n=computed({get(){return s.value.replace(e.value,"")},set(i){o("update:valueModel",i)}});return{attrs:t,model:n,setPatternInput:(i,c)=>{const l=i.currentTarget;l.value=l.value.replace(c,"")}}}};function _sfc_render$3(r,t,o,e,s,n){return withDirectives((openBlock(),createElementBlock("input",mergeProps({"onUpdate:modelValue":t[0]||(t[0]=a=>e.model=a)},e.attrs,{class:"material-input",onInput:t[1]||(t[1]=withModifiers(a=>e.setPatternInput(a,o.excludePattern),["prevent"]))}),null,16)),[[vModelDynamic,e.model]])}var MaterialInput=_export_sfc(_sfc_main$3,[["render",_sfc_render$3],["__scopeId","data-v-eaffa648"]]),Message_vue_vue_type_style_index_0_lang="";const _sfc_main$2={props:{visibleCondition:{type:Boolean,required:!0,default:!1},yPos:{type:Number,required:!0,default:0}},setup(r,{attrs:t}){const{visibleCondition:o}=toRefs(r);return{isVisible:computed(()=>!!o.value),attrs:t}}},_hoisted_1$2={class:"message__content"},_hoisted_2$1=createTextVNode(" Empty message ");function _sfc_render$2(r,t,o,e,s,n){return openBlock(),createBlock(Transition,{name:"slide-down",mode:"out-in",appear:""},{default:withCtx(()=>[e.isVisible?(openBlock(),createElementBlock("article",mergeProps({key:0,class:"message"},e.attrs,{style:{top:`${o.yPos}%`}}),[createBaseVNode("h2",_hoisted_1$2,[renderSlot(r.$slots,"default",{},()=>[_hoisted_2$1])])],16)):createCommentVNode("",!0)]),_:3})}var Message=_export_sfc(_sfc_main$2,[["render",_sfc_render$2]]),CalculatePage_vue_vue_type_style_index_0_lang="";const _sfc_main$1={components:{ButtonsPanel,MaterialInput,Message},setup(){const{expression:r,optionsList:t,numbersList:o,setToExpression:e,clearExpression:s,getExpressionResult:n,expressionError:a}=createCalculator(),i=debounce(switcher,1500),c=new RegExp(/[^0-9|{\u002b, \u002d, \u002a, \u0028, \u0029, \u002f, \u005e, \u002e, \u002c}]/gi);return{expression:r,optionsList:t,numbersList:o,setToExpression:e,clearValue:()=>{if(!r.value.length)return a.error=!0,a.message="Expression empty!",i(a,"error",1500,!1);s()},getResult:_=>{s();let d=null;try{d=n(_)}catch(m){return a.error=!0,a.message=m.message,i(a,"error",1500,!1)}e(d)},expressionError:a,excludePattern:c}}},_hoisted_1$1={class:"calculate-page"},_hoisted_2=createBaseVNode("h1",{class:"calculate-page__title"}," Vue.js-Calculator ",-1),_hoisted_3={class:"twl-flex twl-flex-col twl-items-center twl-relative"},_hoisted_4=["onClick"],_hoisted_5=["onClick"];function _sfc_render$1(r,t,o,e,s,n){const a=resolveComponent("Message"),i=resolveComponent("MaterialInput"),c=resolveComponent("ButtonsPanel");return openBlock(),createElementBlock("article",_hoisted_1$1,[_hoisted_2,createBaseVNode("section",_hoisted_3,[createVNode(a,{"visible-condition":e.expressionError.error,"y-pos":-100,class:"twl-bg-red twl-text-white twl-shadow-custom-red"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.expressionError.message),1)]),_:1},8,["visible-condition"]),createVNode(i,{"value-model":e.expression,"onUpdate:value-model":t[0]||(t[0]=l=>e.expression=l),"value-modelModifiers":{trim:!0},"exclude-pattern":e.excludePattern,type:"text",autofocus:"",inputmode:"none"},null,8,["value-model","exclude-pattern"])]),createVNode(c,null,{"numbers-list":withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.numbersList,l=>(openBlock(),createElementBlock("button",{key:l,class:"btns-panel__btn",onClick:u=>e.setToExpression(l)},toDisplayString(l),9,_hoisted_4))),128))]),"options-list":withCtx(()=>[createBaseVNode("button",{class:"btns-panel__btn",onClick:t[1]||(t[1]=l=>e.getResult(e.expression))}," = "),(openBlock(!0),createElementBlock(Fragment,null,renderList(e.optionsList,l=>(openBlock(),createElementBlock("button",{key:l,class:"btns-panel__btn",onClick:u=>e.setToExpression(l)},toDisplayString(l),9,_hoisted_5))),128)),createBaseVNode("button",{class:"btns-panel__btn twl-bg-red twl-text-white active:twl-shadow-custom-red",onClick:t[2]||(t[2]=(...l)=>e.clearValue&&e.clearValue(...l))}," C ")]),_:1})])}var CalculatePage=_export_sfc(_sfc_main$1,[["render",_sfc_render$1]]);let routes=[{path:"/",alias:"/home",component:CalculatePage}];const domain="/vue-calculate/",router=createRouter({routes,history:createWebHistory(domain)}),_sfc_main={setup(){}},_hoisted_1={class:"main"};function _sfc_render(r,t,o,e,s,n){const a=resolveComponent("router-view");return openBlock(),createElementBlock("main",_hoisted_1,[createVNode(a)])}var App=_export_sfc(_sfc_main,[["render",_sfc_render]]),main="";const app=createApp(App);app.use(router);app.directive("focus",(r,{value:t})=>{r.focus(),r.value=t});app.mount("#app");
