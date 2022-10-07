(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[609],{6801:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>Kt});var o=r(8218),n=r(2232),i=r(5466),a=r.n(i),s=r(6813),l=r(2649),p=r(2855),u=r(4913),c=r(4296),f=r(8270),y=r(2240),d=r(9498),h=r.n(d),v=r(920),m=r(2320),g=r(2026),b=r(7731);function w(t,e,r,o){!function(t){if(void 0!==t)throw new Error(g.Cl)}(e),D(m.LD,t,r.toString(),o)}function O(t){var e=[];if(Array.isArray(t)){var r=function(t){for(var e=new Set,r=0,o=t;r<o.length;r++){var n=o[r];if(e.has(n))return n;e.add(n)}}((e=t).map((function(t){return t.key})));if(void 0!==r)throw new Error(g.O8+" "+r.toString())}else e=[t];return e}function D(t,e,r,o){var n=O(o),i={};Reflect.hasOwnMetadata(t,e)&&(i=Reflect.getMetadata(t,e));var a=i[r];if(void 0===a)a=[];else for(var s=function(t){if(n.some((function(e){return e.key===t.key})))throw new Error(g.O8+" "+t.key.toString())},l=0,p=a;l<p.length;l++){s(p[l])}a.push.apply(a,n),i[r]=a,Reflect.defineMetadata(t,i,e)}function Z(t){return function(e,r,o){"number"==typeof o?w(e,r,o,t):function(t,e,r){if(void 0!==t.prototype)throw new Error(g.Cl);D(m.Sy,t.constructor,e,r)}(e,r,t)}}var k,_=(k=m.B8,function(t){return function(e,r,o){if(void 0===t){var n="function"==typeof e?e.name:e.constructor.name;throw new Error((0,g.MS)(n))}return Z(new b.S(k,t))(e,r,o)}}),E=r(2885),C=r(3584),j=r(3876),P=r(8211);var T=r(7012),V=r(1883);function I(t){return function(t){if(Array.isArray(t))return(0,P.Z)(t)}(t)||(0,T.Z)(t)||(0,V.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A,F,S,L,x,R,N=r(2551),B=r(5147),z=r(7571),M=(A=E.LO.shallow,F=E.LO.shallow,S=function(){function t(){(0,u.Z)(this,t),(0,f.Z)(this,"getCheckData",void 0),(0,p.Z)(this,"rules",L,this),(0,p.Z)(this,"errors",x,this),(0,f.Z)(this,"locale",z.Z.ru),this.rules=[],this.errors=[],this.getCheckData=function(){},(0,E.rC)(this)}return(0,c.Z)(t,[{key:"isValid",get:function(){return null===this.firstError}},{key:"isInvalid",get:function(){return null!==this.firstError}},{key:"firstError",get:function(){return this.errors.length>0&&this.errors[0]||null}},{key:"reset",value:function(){this.errors=[]}},{key:"removeRule",value:function(t){var e=this.rules.indexOf(t);return-1!==e&&this.rules.splice(e,1),this}},{key:"registerRule",value:function(t){var e;this.getCheckData=t;for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return this.rules=(e=this.rules).concat.apply(e,o),this}},{key:"validate",value:function(){var t=this;this.errors=[];var e=!0;return this.rules.forEach((function(r){var o=r(t.getCheckData(),t.locale),n=t.errors.indexOf(!0===o?"Validation error":o||"");-1!==n?t.errors.splice(n,1):o&&t.errors.push(!0===o?"Validation error":o),e=e&&!o})),e}}]),t}(),L=(0,y.Z)(S.prototype,"rules",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=(0,y.Z)(S.prototype,"errors",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,y.Z)(S.prototype,"isValid",[E.Fl],Object.getOwnPropertyDescriptor(S.prototype,"isValid"),S.prototype),(0,y.Z)(S.prototype,"isInvalid",[E.Fl],Object.getOwnPropertyDescriptor(S.prototype,"isInvalid"),S.prototype),(0,y.Z)(S.prototype,"firstError",[E.Fl],Object.getOwnPropertyDescriptor(S.prototype,"firstError"),S.prototype),(0,y.Z)(S.prototype,"reset",[E.aD],Object.getOwnPropertyDescriptor(S.prototype,"reset"),S.prototype),(0,y.Z)(S.prototype,"removeRule",[E.aD],Object.getOwnPropertyDescriptor(S.prototype,"removeRule"),S.prototype),(0,y.Z)(S.prototype,"registerRule",[E.aD],Object.getOwnPropertyDescriptor(S.prototype,"registerRule"),S.prototype),(0,y.Z)(S.prototype,"validate",[E.aD],Object.getOwnPropertyDescriptor(S.prototype,"validate"),S.prototype),S),U=r(3974),G=r(3670),H=r.n(G);!function(t){t.VALIDATE="validate",t.CHANGE="change"}(R||(R={}));var W,J,K,X,$,q,Q,Y,tt,et,rt,ot,nt=function(){function t(e){(0,u.Z)(this,t),this._transformers=e}return(0,c.Z)(t,[{key:"getTransformers",value:function(t){return(H()(this._transformers)||(0,U.isFunction)(this._transformers))&&t===R.VALIDATE?this._transformers:(0,U.isFunction)(this._transformers)||H()(this._transformers)||null===(e=this._transformers)||void 0===e?void 0:e[t];var e}},{key:"hasTransformer",value:function(t){var e=this.getTransformers(t);return H()(e)?e.length>0:!!e}},{key:"hasValidateTransformer",get:function(){return this.hasTransformer(R.VALIDATE)}},{key:"hasChangeTransformer",get:function(){return this.hasTransformer(R.CHANGE)}},{key:"makeTransform",value:function(t,e){var r=this.getTransformers(t);return H()(r)?r.reduce((function(t,e){return e(t)}),e):r?r(e):e}},{key:"makeTransformOnValidate",value:function(t){return this.makeTransform(R.VALIDATE,t)}},{key:"makeTransformOnChange",value:function(t){return this.makeTransform(R.CHANGE,t)}}]),t}(),it=(W=(0,E.Fl)({equals:function(){return!1}}),J=function(){function t(e,r,o){var n,i=this;(0,u.Z)(this,t),this.options=o,(0,f.Z)(this,"onValueChangeAfter",void 0),(0,f.Z)(this,"onValueChangeBefore",void 0),(0,f.Z)(this,"_value",void 0),(0,f.Z)(this,"transformer",void 0),(0,f.Z)(this,"validator",void 0),(0,p.Z)(this,"_isDirty",K,this),(0,p.Z)(this,"data",X,this),this.data={value:e},this._value=e,this._isDirty=!1,this.onValueChangeAfter=null==o?void 0:o.onValueChangeAfter,this.onValueChangeBefore=null==o?void 0:o.onValueChangeBefore;var a=N.Z.get(B.Z);this.validator=new M,this.transformer=new nt(null==o?void 0:o.transform),(n=this.validator).registerRule.apply(n,[function(){return i.value}].concat(I(r||[]))),this.applyLocale(a.locale),(0,E.rC)(this)}return(0,c.Z)(t,[{key:"value",get:function(){return this.data.value}},{key:"isValid",get:function(){return this.validator.isValid}},{key:"errors",get:function(){return this.validator.errors.length>0?this.validator.errors:[]}},{key:"isDirty",get:function(){return this._isDirty}},{key:"applyLocale",value:function(t){this.validator.locale=t,this.isValid||this.validate()}},{key:"validate",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t&&(this._isDirty=!0),this.data={value:this.transformer.makeTransformOnValidate(this.value)},this.validator.validate()}},{key:"reset",value:function(){this.validatorReset(),this.updateInitial(),this.resetDirty()}},{key:"validatorReset",value:function(){this.validator.reset()}},{key:"updateInitial",value:function(){this.data={value:this._value}}},{key:"resetDirty",value:function(){this._isDirty=!1}},{key:"set",value:function(t){this._isDirty=!0,this.onValueChangeBefore&&this.onValueChangeBefore(t),this.data={value:this.transformer.makeTransformOnChange(t)},this.onValueChangeAfter&&this.onValueChangeAfter(this.value)}}]),t}(),K=(0,y.Z)(J.prototype,"_isDirty",[E.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=(0,y.Z)(J.prototype,"data",[E.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,y.Z)(J.prototype,"value",[W],Object.getOwnPropertyDescriptor(J.prototype,"value"),J.prototype),(0,y.Z)(J.prototype,"isValid",[E.Fl],Object.getOwnPropertyDescriptor(J.prototype,"isValid"),J.prototype),(0,y.Z)(J.prototype,"errors",[E.Fl],Object.getOwnPropertyDescriptor(J.prototype,"errors"),J.prototype),(0,y.Z)(J.prototype,"isDirty",[E.Fl],Object.getOwnPropertyDescriptor(J.prototype,"isDirty"),J.prototype),(0,y.Z)(J.prototype,"applyLocale",[E.aD],Object.getOwnPropertyDescriptor(J.prototype,"applyLocale"),J.prototype),(0,y.Z)(J.prototype,"validate",[E.aD],Object.getOwnPropertyDescriptor(J.prototype,"validate"),J.prototype),(0,y.Z)(J.prototype,"reset",[E.aD],Object.getOwnPropertyDescriptor(J.prototype,"reset"),J.prototype),(0,y.Z)(J.prototype,"validatorReset",[E.aD],Object.getOwnPropertyDescriptor(J.prototype,"validatorReset"),J.prototype),(0,y.Z)(J.prototype,"updateInitial",[E.aD],Object.getOwnPropertyDescriptor(J.prototype,"updateInitial"),J.prototype),(0,y.Z)(J.prototype,"resetDirty",[E.aD],Object.getOwnPropertyDescriptor(J.prototype,"resetDirty"),J.prototype),(0,y.Z)(J.prototype,"set",[E.aD],Object.getOwnPropertyDescriptor(J.prototype,"set"),J.prototype),J),at=($=function(){function t(e){(0,u.Z)(this,t),(0,f.Z)(this,"setLocaleReactionDisposer",void 0),(0,p.Z)(this,"_fields",q,this),this._fields=e;var r=N.Z.get(B.Z);this.applyLocale(r.locale),(0,E.rC)(this)}return(0,c.Z)(t,[{key:"fields",get:function(){return this._fields}},{key:"isValid",get:function(){return this.allFields.every((function(t){return t.isValid}))}},{key:"isDirty",get:function(){return this.allFields.some((function(t){return t.isDirty}))}},{key:"allFields",get:function(){var t=[];return this._runThrowFields(this._fields,(function(e){return t.push(e)})),t}},{key:"applyLocale",value:function(t){this._runThrowFields(this._fields,(function(e){return e.applyLocale(t)}))}},{key:"reset",value:function(){this._runThrowFields(this._fields,(function(t){return t.reset()}))}},{key:"resetValidation",value:function(){this._runThrowFields(this._fields,(function(t){return t.validatorReset()}))}},{key:"updateInitialValues",value:function(){this._runThrowFields(this._fields,(function(t){return t.updateInitial()}))}},{key:"resetDirty",value:function(){this._runThrowFields(this._fields,(function(t){return t.resetDirty()}))}},{key:"swap",value:function(t,e){var r=this._fields[t];this._fields[t]=this._fields[e],this._fields[e]=r}},{key:"validate",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._runThrowFields(this._fields,(function(e){return e.validate(t)})),this.isValid}},{key:"_runThrowFields",value:function(t,e){var r=this;Object.values(t).forEach((function(t){t instanceof it?null==e||e(t):Array.isArray(t)?t.forEach((function(t){null==e||e(t)})):t&&r._runThrowFields(t,e)}))}}]),t}(),q=(0,y.Z)($.prototype,"_fields",[E.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,y.Z)($.prototype,"fields",[E.Fl],Object.getOwnPropertyDescriptor($.prototype,"fields"),$.prototype),(0,y.Z)($.prototype,"isValid",[E.Fl],Object.getOwnPropertyDescriptor($.prototype,"isValid"),$.prototype),(0,y.Z)($.prototype,"isDirty",[E.Fl],Object.getOwnPropertyDescriptor($.prototype,"isDirty"),$.prototype),(0,y.Z)($.prototype,"allFields",[E.Fl],Object.getOwnPropertyDescriptor($.prototype,"allFields"),$.prototype),(0,y.Z)($.prototype,"applyLocale",[E.aD],Object.getOwnPropertyDescriptor($.prototype,"applyLocale"),$.prototype),(0,y.Z)($.prototype,"reset",[E.aD],Object.getOwnPropertyDescriptor($.prototype,"reset"),$.prototype),(0,y.Z)($.prototype,"resetValidation",[E.aD],Object.getOwnPropertyDescriptor($.prototype,"resetValidation"),$.prototype),(0,y.Z)($.prototype,"updateInitialValues",[E.aD],Object.getOwnPropertyDescriptor($.prototype,"updateInitialValues"),$.prototype),(0,y.Z)($.prototype,"resetDirty",[E.aD],Object.getOwnPropertyDescriptor($.prototype,"resetDirty"),$.prototype),(0,y.Z)($.prototype,"swap",[E.aD],Object.getOwnPropertyDescriptor($.prototype,"swap"),$.prototype),(0,y.Z)($.prototype,"validate",[E.aD],Object.getOwnPropertyDescriptor($.prototype,"validate"),$.prototype),$),st=r(7181),lt=(Q=function(){function t(){(0,u.Z)(this,t),(0,f.Z)(this,"form",void 0),(0,E.rC)(this),this.form=new at({name:new it("",[function(t){var e=st.Z.t("Обязательное поле");return""===t?e:null}]),type:new it(""),birthDate:new it("")})}return(0,c.Z)(t,[{key:"fullInfo",get:function(){var t=this.form.fields,e=t.name,r=t.type,o=t.birthDate;return"".concat(e.value," - ").concat(r.value," - ").concat(o.value)}}]),t}(),(0,y.Z)(Q.prototype,"fullInfo",[E.Fl],Object.getOwnPropertyDescriptor(Q.prototype,"fullInfo"),Q.prototype),Q);const pt=(Y=(0,v.b)(),tt=E.LO.shallow,Y((rt=function(){function t(e){var r=this;(0,u.Z)(this,t),(0,p.Z)(this,"passengers",ot,this),(0,f.Z)(this,"appStore",void 0),this.appStore=e,(0,E.rC)(this),(0,C.Ko)(this,{name:"BookingStore",properties:["passengers"],storage:h()?localStorage:void 0}).then((function(t){t.getPersistedStore().then((0,E.aD)((function(t){r.passengers=null==t?void 0:t.passengers.map((function(t){var e=new lt;return console.log(t.formData),e}))})))}))}return t=_(j.Z)(t,void 0,0)||t,(0,c.Z)(t,[{key:"info",get:function(){return this.passengers.map((function(t){return t.fullInfo}))}},{key:"addPassenger",value:function(){this.passengers.push(new lt)}}]),t}(),ot=(0,y.Z)(rt.prototype,"passengers",[tt],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),(0,y.Z)(rt.prototype,"info",[E.Fl],Object.getOwnPropertyDescriptor(rt.prototype,"info"),rt.prototype),(0,y.Z)(rt.prototype,"addPassenger",[E.aD],Object.getOwnPropertyDescriptor(rt.prototype,"addPassenger"),rt.prototype),et=rt))||et);var ut=r(5043),ct=r(2303),ft=r.n(ct),yt=r(3725),dt=r(9454),ht=r(3123),vt=r(7253),mt=r(5044),gt=r(1139),bt=r(4613),wt=r(6640),Ot=(0,gt.ZP)(bt.Z).withConfig({displayName:"style__Popover",componentId:"sc-1gm6njw-0"})((function(t){var e=t.intent,r=t.theme;return{"&.popover-target-wrapper":{display:"block"},"&.popover-content-wrapper":(0,f.Z)({backgroundColor:e?(0,mt.$n)(.2,r.color.intents[e]):r.components.tooltip.defaultBackgroundColor,color:e?r.color.intents[e]:r.components.tooltip.defaultColor},wt.Eh,{"&:before":{backgroundColor:e?(0,mt.$n)(.2,r.color.intents[e]):r.components.tooltip.defaultBackgroundColor}})}})),Dt=["children"],Zt=function(t){var e=t.children,r=(0,vt.Z)(t,Dt);return a().createElement(Ot,(0,ht.Z)({},r,{showArrow:!0}),e)};const kt=(0,i.memo)(Zt);const _t=(0,i.createContext)({id:"",onBlur:function(){return{}},onFocus:function(){return{}}});var Et=gt.ZP.div.withConfig({displayName:"style__StyledFormField",componentId:"sc-ld0wi5-0"})((function(t){var e=t.colsSpan,r=t.theme;return(0,gt.iv)(["&:not(:last-child){margin-bottom:",";}grid-column-start:"," span;.form-field-input-wrapper{display:block;width:100%;& > *{width:100%;}}"],r.spacing.md,e)})),Ct=gt.ZP.label.withConfig({displayName:"style__Label",componentId:"sc-ld0wi5-1"})(["display:inline;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-family:'Lato',sans-serif;font-style:normal;font-weight:400;font-size:12px;line-height:21px;"]),jt=gt.ZP.div.withConfig({displayName:"style__LabelWrapper",componentId:"sc-ld0wi5-2"})((function(t){var e=t.theme;return(0,gt.iv)(["margin-bottom:",";"],e.spacing.sm)})),Pt=gt.ZP.div.withConfig({displayName:"style__Description",componentId:"sc-ld0wi5-3"})([""]),Tt=gt.ZP.div.withConfig({displayName:"style__InvalidMessage",componentId:"sc-ld0wi5-4"})((function(){return(0,gt.iv)([""])})),Vt=function(t){var e=t.children,r=t.description,o=t.label,n=t.className,a=t.field,s=t.colsSpan,l=void 0===s?1:s,p=(0,i.useState)(!1),u=(0,ut.Z)(p,2),c=u[0],f=u[1],y=(0,i.useMemo)((function(){return ft()("form-input-")}),[]),d=(0,i.useCallback)((function(){f(!0)}),[]),h=(0,i.useCallback)((function(){f(!1)}),[]);function v(){return i.createElement(Tt,null,a.errors[0])}return i.createElement(Et,{isFocused:c,className:n,colsSpan:l},o?i.createElement(jt,null,i.createElement(Ct,{htmlFor:y},o)):null,i.createElement(_t.Provider,{value:{id:y,onBlur:h,onFocus:d}},i.createElement(kt,{intent:yt.Z.DANGER,placement:dt.u.TOP,showOnHover:!c&&!a.isValid,Content:v},e)),r?i.createElement(Pt,null,r):null)};const It=(0,i.memo)(Vt);var At=r(7107),Ft=r(3405);function St(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function Lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?St(Object(r),!0).forEach((function(e){(0,f.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var xt=gt.ZP.div.withConfig({displayName:"style__Wrapper",componentId:"sc-139t4xv-0"})((function(t){var e=t.size,r=t.colsMobile,o=t.colsTablet,n=t.colsDesktop,i=t.colsSpacing;return Lt(Lt(Lt({display:"grid"},(0,Ft.c6)(e,Lt({gridTemplateColumns:"repeat(".concat(r,", 1fr)")},(0,Ft.XJ)(1!==r,{gridColumnGap:i})))),(0,Ft.Wb)(e,Lt({gridTemplateColumns:"repeat(".concat(o,", 1fr)")},(0,Ft.XJ)(1!==o,{gridColumnGap:i})))),(0,Ft.m4)(e,Lt({gridTemplateColumns:"repeat(".concat(n,", 1fr)")},(0,Ft.XJ)(1!==n,{gridColumnGap:i}))))})),Rt=gt.ZP.div.withConfig({displayName:"style__DummyChild",componentId:"sc-139t4xv-1"})((function(){return{display:"none"}})),Nt=(0,n.Pi)((function(t){var e=(0,gt.Fg)(),r=t.children,n=t.colsTablet,i=void 0===n?1:n,s=t.colsMobile,l=void 0===s?1:s,p=t.colsDesktop,u=void 0===p?1:p,c=t.colsSpacing,f=void 0===c?Number((0,mt.wA)(e.spacing.sm)):c,y=t.disableDummyChild,d=(0,o.useInjection)(At.Z);return a().createElement(xt,{size:d.size,colsTablet:i,colsMobile:l,colsDesktop:u,colsSpacing:f},r,!y&&a().createElement(Rt,null))})),Bt=gt.ZP.div.withConfig({displayName:"style__Wrapper",componentId:"sc-upz8e9-0"})((function(){return{marginTop:20}})),zt=gt.ZP.div.withConfig({displayName:"style__Info",componentId:"sc-upz8e9-1"})((function(){return{marginBottom:40}})),Mt=gt.ZP.h2.withConfig({displayName:"style__Title",componentId:"sc-upz8e9-2"})((function(){return{fontSize:"1em",marginBottom:"0.5em"}}));const Ut=(0,n.Pi)((function(){var t=(0,o.useInjection)(pt);return a().createElement(Bt,null,a().createElement(zt,null,t.info.join(", ")),a().createElement("div",null,a().createElement("button",{onClick:function(){t.addPassenger()},type:"button"},"Добавить")),t.passengers.map((function(t,e){var r=t.form.fields,o=r.name,n=r.type,i=r.birthDate;return a().createElement("form",{style:{maxWidth:500,display:"block",margin:"0 auto"}},a().createElement(Mt,null,"passenger number №",e+1),a().createElement(Nt,{colsDesktop:3},a().createElement(It,{field:i,label:"birthDate"},a().createElement("input",{type:"date",id:"date",value:i.value,onChange:function(t){return i.set(t.target.value)}})),a().createElement(It,{field:n,label:"type"},a().createElement("input",{type:"text",value:n.value,onChange:function(t){return n.set(t.target.value)}})),a().createElement(It,{field:o,label:"name"},a().createElement("input",{type:"text",value:o.value,onChange:function(t){o.set(t.target.value),o.validate()}}))),a().createElement("button",{onClick:function(){return t.form.validate()},type:"button"},"Validate"))})))}));var Gt=r(6276);const Ht=new(r(2646).n)((function(t){t(pt).toSelf().inSingletonScope()}));var Wt=N.Z.createChild();Wt.load(Ht);const Jt=Wt;const Kt=(0,s.EN)((0,n.Pi)((function(){var t=(0,o.useInjection)(j.Z),e=(0,o.useInjection)(B.Z),r=(0,s.TH)();return a().createElement(o.Provider,{container:Jt,standalone:!0},a().createElement(l.T3,null,a().createElement(l.h4,null,a().createElement(l.TR,{src:"/assets/images/logo192.png",className:"App-logo",alt:"logo"}),a().createElement("h1",null,"Its OTHER PAGE asdsd (",r.pathname,")"),a().createElement(Gt.Z,{onClick:function(){return e.set(z.Z.ru)}},"RU RU RU RU RU"),a().createElement(Gt.Z,{onClick:function(){return e.set(z.Z.en)}},"EN"),a().createElement("p",null,"Edit"," ",a().createElement("code",null,"src/App.tsx")," ","and save to reload."),a().createElement(l.rU,{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React +"," ",t.counter," ","+"," ",t.counterV2),a().createElement(Ut,null),a().createElement("div",null,a().createElement("button",{onClick:t.inc,type:"button"},"+1")))))})))},2773:(t,e,r)=>{var o=r(4362).Symbol;t.exports=o},9258:t=>{t.exports=function(t,e){for(var r=-1,o=null==t?0:t.length,n=Array(o);++r<o;)n[r]=e(t[r],r,t);return n}},1185:(t,e,r)=>{var o=r(2773),n=r(3888),i=r(2299),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?n(t):i(t)}},8257:(t,e,r)=>{var o=r(2773),n=r(9258),i=r(3670),a=r(4655),s=o?o.prototype:void 0,l=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return n(e,t)+"";if(a(e))return l?l.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r}},8556:(t,e,r)=>{var o="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=o},3888:(t,e,r)=>{var o=r(2773),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,s=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),r=t[s];try{t[s]=void 0;var o=!0}catch(t){}var n=a.call(t);return o&&(e?t[s]=r:delete t[s]),n}},2299:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},4362:(t,e,r)=>{var o=r(8556),n="object"==typeof self&&self&&self.Object===Object&&self,i=o||n||Function("return this")();t.exports=i},3670:t=>{var e=Array.isArray;t.exports=e},4939:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},4655:(t,e,r)=>{var o=r(1185),n=r(4939);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==o(t)}},2049:(t,e,r)=>{var o=r(8257);t.exports=function(t){return null==t?"":o(t)}},2303:(t,e,r)=>{var o=r(2049),n=0;t.exports=function(t){var e=++n;return o(t)+e}}}]);
//# sourceMappingURL=pages-booking.100230ee4d5aa984160f.js.map