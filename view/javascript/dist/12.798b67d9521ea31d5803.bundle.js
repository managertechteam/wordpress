(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{103:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i(2),o=i(44),a=i(5),s=i(4),r=i(1),c=i(25),l=i(137),h="BTooltip",u=n.a.extend({name:h,props:{title:{type:String},target:{type:[String,c.b,c.c,Function,Object],required:!0},triggers:{type:[String,Array],default:"hover focus"},placement:{type:String,default:"top"},fallbackPlacement:{type:[String,Array],default:"flip",validator:function(t){return Object(a.d)(t)&&t.every((function(t){return Object(r.j)(t)}))||Object(a.a)(["flip","clockwise","counterclockwise"],t)}},variant:{type:String,default:function(){return Object(s.c)(h,"variant")}},customClass:{type:String,default:function(){return Object(s.c)(h,"customClass")}},delay:{type:[Number,Object,String],default:function(){return Object(s.c)(h,"delay")}},boundary:{type:[String,c.b,Object],default:function(){return Object(s.c)(h,"boundary")}},boundaryPadding:{type:[Number,String],default:function(){return Object(s.c)(h,"boundaryPadding")}},offset:{type:[Number,String],default:0},noFade:{type:Boolean,default:!1},container:{type:[String,c.b,Object]},show:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},data:function(){return{localShow:this.show,localTitle:"",localContent:""}},computed:{templateData:function(){return{title:this.localTitle,content:this.localContent,target:this.target,triggers:this.triggers,placement:this.placement,fallbackPlacement:this.fallbackPlacement,variant:this.variant,customClass:this.customClass,container:this.container,boundary:this.boundary,boundaryPadding:this.boundaryPadding,delay:this.delay,offset:this.offset,noFade:this.noFade,disabled:this.disabled,id:this.id}},templateTitleContent:function(){return{title:this.title,content:this.content}}},watch:{show:function(t,e){t!==e&&t!==this.localShow&&this.$_bv_toolpop&&(t?this.$_bv_toolpop.show():this.$_bv_toolpop.forceHide())},disabled:function(t,e){t?this.doDisable():this.doEnable()},localShow:function(t,e){this.$emit("update:show",t)},templateData:function(t,e){var i=this;this.$nextTick((function(){i.$_bv_toolpop&&i.$_bv_toolpop.updateData(i.templateData)}))},templateTitleContent:function(t,e){this.$nextTick(this.updateContent)}},created:function(){this.$_bv_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off("open",this.doOpen),this.$off("close",this.doClose),this.$off("disable",this.doDisable),this.$off("enable",this.doEnable),this.$_bv_toolpop&&this.$_bv_toolpop.$destroy(),this.$_bv_toolpop=null},mounted:function(){var t=this;this.$nextTick((function(){var e=t.getComponent();t.updateContent();var i=Object(o.a)(t)||Object(o.a)(t.$parent),n=t.$_bv_toolpop=new e({parent:t,_scopeId:i||void 0});n.updateData(t.templateData),n.$on("show",t.onShow),n.$on("shown",t.onShown),n.$on("hide",t.onHide),n.$on("hidden",t.onHidden),n.$on("disabled",t.onDisabled),n.$on("enabled",t.onEnabled),t.disabled&&t.doDisable(),t.$on("open",t.doOpen),t.$on("close",t.doClose),t.$on("disable",t.doDisable),t.$on("enable",t.doEnable),t.localShow&&t.$_bv_toolpop&&t.$_bv_toolpop.show()}))},methods:{getComponent:function(){return l.a},updateContent:function(){this.setTitle(this.$scopedSlots.default||this.title)},setTitle:function(t){t=Object(r.l)(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=Object(r.l)(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit("show",t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit("shown",t)},onHide:function(t){this.$emit("hide",t)},onHidden:function(t){this.$emit("hidden",t),this.localShow=!1},onDisabled:function(t){t&&"disabled"===t.type&&(this.$emit("update:disabled",!0),this.$emit("disabled",t))},onEnabled:function(t){t&&"enabled"===t.type&&(this.$emit("update:disabled",!1),this.$emit("enabled",t))},doOpen:function(){!this.localShow&&this.$_bv_toolpop&&this.$_bv_toolpop.show()},doClose:function(){this.localShow&&this.$_bv_toolpop&&this.$_bv_toolpop.hide()},doDisable:function(t){this.$_bv_toolpop&&this.$_bv_toolpop.disable()},doEnable:function(){this.$_bv_toolpop&&this.$_bv_toolpop.enable()}},render:function(t){return t()}})},137:function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var n=i(2),o=i(44),a=i(20),s=i(5),r=i(0),c=i(3),l=i(1),h=i(17),u=i(51),d=i(281);function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(i,!0).forEach((function(e){b(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m={passive:!0,capture:!1},v={title:"",content:"",variant:null,customClass:null,triggers:"",placement:"auto",fallbackPlacement:"flip",target:null,container:null,noFade:!1,boundary:"scrollParent",boundaryPadding:5,offset:0,delay:0,arrowPadding:6,disabled:!1,id:null,html:!1},g=n.a.extend({name:"BVTooltip",props:{},data:function(){return f({},v,{activeTrigger:{hover:!1,click:!1,focus:!1},localShow:!1})},computed:{templateType:function(){return"tooltip"},computedId:function(){return this.id||"__bv_".concat(this.templateType,"_").concat(this._uid,"__")},computedDelay:function(){var t={show:0,hide:0};return Object(c.j)(this.delay)?(t.show=Math.max(parseInt(this.delay.show,10)||0,0),t.hide=Math.max(parseInt(this.delay.hide,10)||0,0)):(Object(l.g)(this.delay)||Object(l.j)(this.delay))&&(t.show=t.hide=Math.max(parseInt(this.delay,10)||0,0)),t},computedTriggers:function(){return Object(s.b)(this.triggers).filter(Boolean).join(" ").trim().toLowerCase().split(/\s+/).sort()},isWithActiveTrigger:function(){for(var t in this.activeTrigger)if(this.activeTrigger[t])return!0;return!1},computedTemplateData:function(){return{title:this.title,content:this.content,variant:this.variant,customClass:this.customClass,noFade:this.noFade}}},watch:{computedTriggers:function(t,e){var i=this;Object(a.a)(t,e)||this.$nextTick((function(){i.unListen(),e.forEach((function(e){Object(s.a)(t,e)||i.activeTrigger[e]&&(i.activeTrigger[e]=!1)})),i.listen()}))},computedTemplateData:function(){this.handleTemplateUpdate()},disabled:function(t){t?this.disable():this.enable()}},created:function(){var t=this;this.$_tip=null,this.$_hoverTimeout=null,this.$_hoverState="",this.$_visibleInterval=null,this.$_enabled=!this.disabled,this.$_noop=function(){},this.$parent&&this.$parent.$once("hook:beforeDestroy",this.$destroy),this.$nextTick((function(){var e=t.getTarget();e&&Object(r.d)(document.body,e)?(t.scopeId=Object(o.a)(t.$parent),t.listen()):Object(h.b)("".concat(t.templateType," unable to find target element in document"))}))},updated:function(){this.$nextTick(this.handleTemplateUpdate)},deactivated:function(){this.forceHide()},beforeDestroy:function(){this.unListen(),this.setWhileOpenListeners(!1),clearTimeout(this.$_hoverTimeout),this.$_hoverTimeout=null,this.destroyTemplate(),this.restoreTitle()},methods:{getTemplate:function(){return d.a},updateData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!1;Object(c.k)(v).forEach((function(n){Object(l.k)(e[n])||t[n]===e[n]||(t[n]=e[n],"title"===n&&(i=!0))})),i&&this.localShow&&this.fixTitle()},createTemplateAndShow:function(){var t=this.getContainer(),e=this.getTemplate(),i=this.$_tip=new e({parent:this,propsData:{id:this.computedId,html:this.html,placement:this.placement,fallbackPlacement:this.fallbackPlacement,target:this.getPlacementTarget(),boundary:this.getBoundary(),offset:parseInt(this.offset,10)||0,arrowPadding:parseInt(this.arrowPadding,10)||0,boundaryPadding:parseInt(this.boundaryPadding,10)||0}});this.handleTemplateUpdate(),i.$once("show",this.onTemplateShow),i.$once("shown",this.onTemplateShown),i.$once("hide",this.onTemplateHide),i.$once("hidden",this.onTemplateHidden),i.$once("hook:destroyed",this.destroyTemplate),i.$on("focusin",this.handleEvent),i.$on("focusout",this.handleEvent),i.$on("mouseenter",this.handleEvent),i.$on("mouseleave",this.handleEvent),i.$mount(t.appendChild(document.createElement("div")))},hideTemplate:function(){this.$_tip&&this.$_tip.hide()},destroyTemplate:function(){this.setWhileOpenListeners(!1),clearTimeout(this.$_hoverTimeout),this.$_hoverTimout=null,this.$_hoverState="",this.clearActiveTriggers(),this.localPlacementTarget=null;try{this.$_tip&&this.$_tip.$destroy()}catch(t){}this.$_tip=null,this.localShow=!1},getTemplateElement:function(){return this.$_tip?this.$_tip.$el:null},handleTemplateUpdate:function(){var t=this,e=this.$_tip;if(e){["title","content","variant","customClass","noFade"].forEach((function(i){e[i]!==t[i]&&(e[i]=t[i])}))}},show:function(){var t=this.getTarget();if(t&&Object(r.d)(document.body,t)&&Object(r.p)(t)&&!this.dropdownOpen()&&(!Object(l.l)(this.title)&&""!==this.title||!Object(l.l)(this.content)&&""!==this.content)&&!this.$_tip&&!this.localShow){this.localShow=!0;var e=this.buildEvent("show",{cancelable:!0});if(this.emitEvent(e),e.defaultPrevented)return this.destroyTemplate(),void(this.localShow=!1);this.fixTitle(),this.addAriaDescribedby(),this.createTemplateAndShow()}},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.getTemplateElement();if(e&&this.localShow){var i=this.buildEvent("hide",{cancelable:!t});this.emitEvent(i),i.defaultPrevented||(this.hideTemplate(),this.clearActiveTriggers(),this.$_hoverState="")}else this.restoreTitle()},forceHide:function(){this.getTemplateElement()&&this.localShow&&(this.setWhileOpenListeners(!1),clearTimeout(this.hoverTimeout),this.$_hoverTimeout=null,this.$_hoverState="",this.clearActiveTriggers(),this.$_tip&&(this.$_tip.noFade=!0),this.hide(!0))},enable:function(){this.$_enabled=!0,this.emitEvent(this.buildEvent("enabled",{}))},disable:function(){this.$_enabled=!1,this.emitEvent(this.buildEvent("disabled",{}))},onTemplateShow:function(){this.setWhileOpenListeners(!0)},onTemplateShown:function(){var t=this.$_hoverState;this.$_hoverState="","out"===t&&this.leave(null),this.emitEvent(this.buildEvent("shown",{}))},onTemplateHide:function(){this.setWhileOpenListeners(!1)},onTemplateHidden:function(){this.removeAriaDescribedby(),this.restoreTitle(),this.destroyTemplate(),this.emitEvent(this.buildEvent("hidden",{}))},getTarget:function(){var t=this.target?this.target.$el||this.target:null;return t=Object(l.j)(t)?Object(r.i)(t.replace(/^#/,"")):t,t=Object(l.e)(t)?t():t,Object(r.o)(t)?t:null},getPlacementTarget:function(){return this.getTarget()},getTargetId:function(){var t=this.getTarget();return t&&t.id?t.id:null},getContainer:function(){var t=!!this.container&&(this.container.$el||this.container),e=document.body,i=this.getTarget();return!1===t?Object(r.c)(".modal-content",i)||e:Object(l.j)(t)&&Object(r.i)(t.replace(/^#/,""))||e},getBoundary:function(){return this.boundary?this.boundary.$el||this.boundary:"scrollParent"},isInModal:function(){var t=this.getTarget();return t&&Object(r.c)(".modal-content",t)},isDropdown:function(){var t=this.getTarget();return t&&Object(r.m)(t,"dropdown")},dropdownOpen:function(){var t=this.getTarget();return this.isDropdown()&&t&&Object(r.x)(".dropdown-menu.show",t)},clearActiveTriggers:function(){for(var t in this.activeTrigger)this.activeTrigger[t]=!1},addAriaDescribedby:function(){var t=this.getTarget(),e=Object(r.g)(t,"aria-describedby")||"";e=e.split(/\s+/).concat(this.computedId).join(" ").trim(),Object(r.z)(t,"aria-describedby",e)},removeAriaDescribedby:function(){var t=this,e=this.getTarget(),i=Object(r.g)(e,"aria-describedby")||"";(i=i.split(/\s+/).filter((function(e){return e!==t.computedId})).join(" ").trim())?Object(r.z)(e,"aria-describedby",i):Object(r.u)(e,"aria-describedby")},fixTitle:function(){var t=this.getTarget();t&&Object(r.g)(t,"title")&&(Object(r.z)(t,"data-original-title",Object(r.g)(t,"title")||""),Object(r.z)(t,"title",""))},restoreTitle:function(){var t=this.getTarget();t&&Object(r.l)(t,"data-original-title")&&(Object(r.z)(t,"title",Object(r.g)(t,"data-original-title")||""),Object(r.u)(t,"data-original-title"))},buildEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new u.a(t,f({cancelable:!1,target:this.getTarget(),relatedTarget:this.getTemplateElement()||null,componentId:this.computedId,vueTarget:this},e))},emitEvent:function(t){var e=t.type,i=this.$root;i&&i.$emit&&i.$emit("bv::".concat(this.templateType,"::").concat(e),t),this.$emit(e,t)},listen:function(){var t=this,e=this.getTarget();e&&(this.setRootListener(!0),this.computedTriggers.forEach((function(i){"click"===i?Object(r.f)(e,"click",t.handleEvent,m):"focus"===i?(Object(r.f)(e,"focusin",t.handleEvent,m),Object(r.f)(e,"focusout",t.handleEvent,m)):"blur"===i?Object(r.f)(e,"focusout",t.handleEvent,m):"hover"===i&&(Object(r.f)(e,"mouseenter",t.handleEvent,m),Object(r.f)(e,"mouseleave",t.handleEvent,m))}),this))},unListen:function(){var t=this,e=this.getTarget();this.setRootListener(!1),["click","focusin","focusout","mouseenter","mouseleave"].forEach((function(i){e&&Object(r.e)(e,i,t.handleEvent,m)}),this)},setRootListener:function(t){var e=this.$root;if(e){var i=t?"$on":"$off",n=this.templateType;e[i]("bv::hide::".concat(n),this.doHide),e[i]("bv::show::".concat(n),this.doShow),e[i]("bv::disable::".concat(n),this.doDisable),e[i]("bv::enable::".concat(n),this.doEnable)}},setWhileOpenListeners:function(t){this.setModalListener(t),this.setDropdownListener(t),this.visibleCheck(t),this.setOnTouchStartListener(t)},visibleCheck:function(t){var e=this;clearInterval(this.$_visibleInterval),this.$_visibleInterval=null;var i=this.getTarget(),n=this.getTemplateElement();t&&(this.visibleInterval=setInterval((function(){!n||!e.localShow||i.parentNode&&Object(r.p)(i)||e.forceHide()}),100))},setModalListener:function(t){this.isInModal()&&this.$root[t?"$on":"$off"]("bv::modal::hidden",this.forceHide)},setOnTouchStartListener:function(t){var e=this;if("ontouchstart"in document.documentElement){var i=t?r.f:r.e;Object(s.c)(document.body.children).forEach((function(t){i(t,"mouseover",e.$_noop)}))}},setDropdownListener:function(t){var e=this.getTarget();e&&this.$root&&this.isDropdown&&e.__vue__&&e.__vue__[t?"$on":"$off"]("shown",this.forceHide)},handleEvent:function(t){var e=this.getTarget();if(e&&!Object(r.n)(e)&&this.$_enabled&&!this.dropdownOpen()){var i=t.type,n=this.computedTriggers;if("click"===i&&Object(s.a)(n,"click"))this.click(t);else if("mouseenter"===i&&Object(s.a)(n,"hover"))this.enter(t);else if("focusin"===i&&Object(s.a)(n,"focus"))this.enter(t);else if("focusout"===i&&(Object(s.a)(n,"focus")||Object(s.a)(n,"blur"))||"mouseleave"===i&&Object(s.a)(n,"hover")){var o=this.getTemplateElement(),a=t.target,c=t.relatedTarget;if(o&&Object(r.d)(o,a)&&Object(r.d)(e,c)||o&&Object(r.d)(e,a)&&Object(r.d)(o,c)||o&&Object(r.d)(o,a)&&Object(r.d)(o,c)||Object(r.d)(e,a)&&Object(r.d)(e,c))return;this.leave(t)}}},doHide:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.forceHide()},doShow:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.show()},doDisable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.disable()},doEnable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.enable()},click:function(t){this.$_enabled&&!this.dropdownOpen()&&(this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger?this.enter(null):this.leave(null))},toggle:function(){this.$_enabled&&!this.dropdownOpen()&&(this.localShow?this.leave(null):this.enter(null))},enter:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusin"===e.type?"focus":"hover"]=!0),this.localShow||"in"===this.$_hoverState?this.$_hoverState="in":(clearTimeout(this.hoverTimeout),this.$_hoverState="in",this.computedDelay.show?(this.fixTitle(),this.hoverTimeout=setTimeout((function(){"in"===t.$_hoverState?t.show():t.localShow||t.restoreTitle()}),this.computedDelay.show)):this.show())},leave:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusout"===e.type?"focus":"hover"]=!1,"focusout"===e.type&&Object(s.a)(this.computedTriggers,"blur")&&(this.activeTrigger.click=!1,this.activeTrigger.hover=!1)),this.isWithActiveTrigger||(clearTimeout(this.hoverTimeout),this.$_hoverState="out",this.computedDelay.hide?this.$hoverTimeout=setTimeout((function(){"out"===t.$_hoverState&&t.hide()}),this.computedDelay.hide):this.hide())}}})},240:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(103),o=i(133),a=i(7),s=Object(a.b)({components:{BTooltip:n.a},plugins:{VBTooltipPlugin:o.a}})},281:function(t,e,i){"use strict";var n=i(2),o=i(136),a=i(1),s=i(180),r=i(0),c=i(25),l=i(52),h={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},u={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},d=n.a.extend({name:"BVPopper",props:{target:{type:[c.b,c.c],default:null},placement:{type:String,default:"top"},fallbackPlacement:{type:[String,Array],default:"flip"},offset:{type:Number,default:0},boundary:{type:[String,c.b],default:"scrollParent"},boundaryPadding:{type:Number,default:5},arrowPadding:{type:Number,default:6}},data:function(){return{noFade:!1,localShow:!0,attachment:this.getAttachment(this.placement)}},computed:{templateType:function(){return"unknown"},popperConfig:function(){var t=this,e=this.placement;return{placement:this.getAttachment(e),modifiers:{offset:{offset:this.getOffset(e)},flip:{behavior:this.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.boundaryPadding,boundariesElement:this.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t.popperPlacementChange(e)},onUpdate:function(e){t.popperPlacementChange(e)}}}},created:function(){var t=this;this.$_popper=null,this.localShow=!0,this.$on("show",(function(e){t.popperCreate(e)})),this.$on("hidden",(function(){t.$nextTick(t.$destroy)})),this.$parent.$once("hook:destroyed",this.$destroy)},beforeMount:function(){this.attachment=this.getAttachment(this.placement)},mounted:function(){},updated:function(){this.popperUpdate()},beforeDestroy:function(){this.popperDestroy()},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},methods:{hide:function(){this.localShow=!1},getAttachment:function(t){return h[String(t).toUpperCase()]||"auto"},getOffset:function(t){if(!this.offset){var e=this.$refs.arrow||Object(r.x)(".arrow",this.$el),i=(parseFloat(Object(r.j)(e).width)||0)+(parseFloat(this.arrowPadding)||0);switch(u[String(t).toUpperCase()]||0){case 1:return"+50%p - ".concat(i,"px");case-1:return"-50%p + ".concat(i,"px");default:return 0}}return this.offset},popperCreate:function(t){this.popperDestroy(),this.$_popper=new s.a(this.target,t,this.popperConfig)},popperDestroy:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},popperUpdate:function(){this.$_popper&&this.$_popper.scheduleUpdate()},popperPlacementChange:function(t){this.attachment=this.getAttachment(t.placement)},renderTemplate:function(t){return t("div")}},render:function(t){var e=this;return t(l.a,{props:{appear:!0,noFade:this.noFade},on:{beforeEnter:function(t){return e.$emit("show",t)},afterEnter:function(t){return e.$emit("shown",t)},beforeLeave:function(t){return e.$emit("hide",t)},afterLeave:function(t){return e.$emit("hidden",t)}}},[this.localShow?this.renderTemplate(t):t()])}});function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,"a",(function(){return b}));var b=n.a.extend({name:"BVTooltipTemplate",extends:d,mixins:[o.a],props:{id:{type:String,default:null},html:{type:Boolean,default:!1}},data:function(){return{title:"",content:"",variant:null,customClass:null}},computed:{templateType:function(){return"tooltip"},templateClasses:function(){var t;return[(t={},f(t,"b-".concat(this.templateType,"-").concat(this.variant),this.variant),f(t,"bs-".concat(this.templateType,"-").concat(this.attachment),this.attachment),t),this.customClass]},templateAttributes:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(i,!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({id:this.id,role:"tooltip",tabindex:"-1"},this.scopedStyleAttrs)},templateListeners:function(){var t=this;return{mouseenter:function(e){t.$emit("mouseenter",e)},mouseleave:function(e){t.$emit("mouseleave",e)},focusin:function(e){t.$emit("focusin",e)},focusout:function(e){t.$emit("focusout",e)}}}},methods:{renderTemplate:function(t){var e=Object(a.e)(this.title)?this.title({}):Object(a.l)(this.title)?t():this.title,i=this.html&&!Object(a.e)(this.title)?{innerHTML:this.title}:{};return t("div",{staticClass:"tooltip b-tooltip",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{ref:"arrow",staticClass:"arrow"}),t("div",{staticClass:"tooltip-inner",domProps:i},[e])])}}})}}]);