(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{318:function(e,t,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("12e546d9",content,!0,{sourceMap:!1})},348:function(e,t,n){"use strict";n(318)},349:function(e,t,n){var o=n(46)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n.exchange-selector-list-element[data-v-170a4014]{\n  box-sizing:border-box;\n  margin:0;\n  min-width:0;\n  width:100%;\n  display:flex;\n  justify-content:flex-start;\n  background-color:#edeef2;\n  opacity:1;\n  transition:all .2s ease 0s;\n  align-items:center;\n  padding:1rem;\n  border-radius:20px\n}\n.exchange-selector-list-element--active[data-v-170a4014]{\n  background-color:#2172e5\n}\n.exchange-selector-list-element--active .exchange-selector-list-element__name span[data-v-170a4014],.exchange-selector-list-element--active .exchange-selector-list-element__tokens span[data-v-170a4014]{\n  color:#fff\n}\n.exchange-selector-list-element__img[data-v-170a4014]{\n  width:40px;\n  height:40px\n}\n.exchange-selector-list-element__name__tokens[data-v-170a4014]{\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  flex:1 1 0%\n}\n.exchange-selector-list-element__name span[data-v-170a4014]{\n  font-size:16px;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  font-weight:600;\n  color:#565a69\n}\n.exchange-selector-list-element__tokens span[data-v-170a4014]{\n  box-sizing:border-box;\n  margin:0 6px 0 0;\n  min-width:0;\n  font-weight:500;\n  font-size:12px;\n  color:#565a69\n}\n.exchange-selector-list-element button[data-v-170a4014]{\n  border-radius:20px;\n  border:none;\n  background:#f7f8fa;\n  display:flex;\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n  cursor:pointer;\n  outline:none;\n  padding:.4rem;\n  align-items:center;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none\n}\n.exchange-selector-list-element button.on>span[data-v-170a4014]{\n  width:24px;\n  color:#000;\n  box-sizing:border-box;\n  min-width:0;\n  font-weight:600;\n  margin:0 6px\n}\n.exchange-selector-list-element button.on>div[data-v-170a4014]{\n  border-radius:50%;\n  height:24px;\n  width:24px;\n  background-color:#2172e5\n}\n.exchange-selector-list-element button.off>span[data-v-170a4014]{\n  width:24px;\n  color:#6e727d;\n  box-sizing:border-box;\n  min-width:0;\n  font-weight:600;\n  margin:0 6px\n}\n.exchange-selector-list-element button.off>div[data-v-170a4014]{\n  border-radius:50%;\n  height:24px;\n  width:24px;\n  background-color:#888d9b\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},408:function(e,t,n){"use strict";n.r(t);n(297);var o=n(137),c=n(138),r=n(300),l=n(301),d=n(298),f=n(15),h=(n(51),n(207),n(43),n(299));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(e,t,n,desc){var o,c=arguments.length,r=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(c<3?o(r):c>3?o(t,n,r):o(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},m=function(e){Object(r.a)(n,e);var t=x(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"exchangeValue",get:function(){return Object.values(this.exchange)[0]}},{key:"exchangeData",get:function(){return this.exchangeValue.data}},{key:"exchangeClass",get:function(){return this.activeState?"exchange-selector-list-element--active":""}},{key:"buttonText",get:function(){return this.activeState?"On":"Off"}},{key:"buttonClass",get:function(){return this.activeState?"on":"off"}},{key:"exchangeKey",get:function(){return Object.keys(this.exchange)[0]}},{key:"activeState",get:function(){return this.exchangeValue.active}},{key:"clickHandler",value:function(){var e=!this.activeState,t=this.exchangeKey;this.$store.commit("SWITCH_EXCHANGE_ACTIVE_STATE",{exchange:t,payload:e})}}]),n}(h.Vue);v([Object(h.Prop)({type:Object,required:!0})],m.prototype,"exchange",void 0);var _=m=v([h.Component],m),y=(n(348),n(21)),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exchange-selector-list-element",class:e.exchangeClass},[e.exchangeData.logoURI?n("img",{staticClass:"exchange-selector-list-element__img",staticStyle:{"margin-right":"1rem"},attrs:{alt:e.exchangeData.name+" logo",src:e.exchangeData.logoURI}}):e._e(),e._v(" "),n("div",{staticClass:"exchange-selector-list-element__name__tokens"},[n("div",{staticClass:"exchange-selector-list-element__name"},[n("span",[e._v(e._s(e.exchangeData.name))])]),e._v(" "),n("div",{staticClass:"exchange-selector-list-element__tokens"},[n("span",[e._v(e._s(e.exchangeData.tokens.length)+" tokens")])])]),e._v(" "),n("button",{class:e.buttonClass,on:{click:e.clickHandler}},[e.activeState?[n("span",[e._v(e._s(e.buttonText))]),e._v(" "),n("div")]:e._e(),e._v(" "),e.activeState?e._e():[n("div"),e._v(" "),n("span",[e._v(e._s(e.buttonText))])]],2)])}),[],!1,null,"170a4014",null);t.default=component.exports}}]);