(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e1317f5"],{"48fe":function(t,e,n){"use strict";var r=n("dd38"),a=n.n(r);a.a},dd38:function(t,e,n){},e814:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"500px"}},[n("div",{staticClass:"d-flex align-items-center mb-3"},[n("h3",{staticClass:"mr-2 "},[t._v(t._s(t.$t("dappsMCDMaker.upgrade-sai-to-dai")))]),n("img",{staticClass:"icon-size",attrs:{src:t.DaiIcon}})]),n("div",{staticClass:"mb-5",staticStyle:{"max-width":"500px"}},[t._v(" "+t._s(t.$t("dappsMCDMaker.upgrade-informational"))+" ")]),n("div",{staticClass:"top-buttons"},[n("p",{on:{click:t.setMax}},[t._v(t._s(t.$t("dappsMCDMaker.entire-sai-balance")))])]),n("div",{staticClass:"dropdown-text-container dropdown-container no-point"},[n("p",[n("span",{staticClass:"cc DAI cc-icon cc-icon-dai currency-symbol"}),t._v(" "+t._s(t.$t("dappsMCDMaker.sai"))+" ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.daiQty,expression:"daiQty"}],class:["currency-picker-container","dropdown-text-container","dropdown-container"],domProps:{value:t.daiQty},on:{input:function(e){e.target.composing||(t.daiQty=e.target.value)}}}),n("div",{staticClass:"buttons-container"},[n("div",{class:[t.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.submitTransaction}},[t._v(" "+t._s(t.$t("dappsMCDMaker.upgrade"))+" ")])])])},a=[],i=(n("a4d3"),n("4de4"),n("7db0"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("3ca3"),n("159b"),n("ddb0"),n("96cf"),n("c964")),c=n("fc11"),s=n("2f62"),o=n("9b76"),u=n.n(o),d=n("901e"),p=n.n(d),l=n("d1fb"),f=n("70c1"),b=n.n(f),h=n("ce96");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=function(t){return new p.a(t)},y={props:{tokensWithBalance:{type:Array,default:function(){return[]}},ethPrice:{type:p.a,default:function(){return new p.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1}},data:function(){return{daiQty:0,gasLimit:-1,DaiIcon:u.a}},computed:v({},Object(s["c"])("main",["account","gasPrice","web3","network","ens"]),{validInputs:function(){return w(this.daiQty).gt(0)}}),mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{migrate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new this.web3.eth.Contract(l["B"],l["h"].MIGRATION),r=n.methods.swapSaiToDai(e).encodeABI(),t.abrupt("return",{from:this.account.address,to:l["h"].MIGRATION,value:0,gas:5e5,data:r});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),setMax:function(){var t=this.tokensWithBalance.find((function(t){return"SAI"===t.symbol}));this.daiQty=t?t.balance:0},approve:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new this.web3.eth.Contract(l["c"],l["h"].SAI),r=n.methods.approve(l["h"].MIGRATION,e).encodeABI(),t.abrupt("return",{from:this.account.address,to:l["h"].SAI,value:0,data:r});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),submitTransaction:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),t.prev=1,e=b.a.toWei(this.daiQty,"ether").toString(),t.next=5,Promise.all([this.approve(e),this.migrate(e)]);case 5:n=t.sent,this.web3.mew.sendBatchTransactions(n).catch((function(t){h["e"].responseHandler(t,h["e"].ERROR)})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),h["e"].responseHandler(t.t0,h["e"].ERROR);case 12:case"end":return t.stop()}}),t,this,[[1,9]])})));function e(){return t.apply(this,arguments)}return e}(),displayPercentValue:function(t){return p.a.isBigNumber(t)||(t=new p.a(t)),t.times(100).toString()},displayFixedValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return p.a.isBigNumber(t)||(t=new p.a(t)),t.toFixed(e).toString()}}},g=y,O=(n("48fe"),n("2877")),k=Object(O["a"])(g,r,a,!1,null,"47cd2ff8",null),x=k.exports;e["default"]=x}}]);
//# sourceMappingURL=chunk-4e1317f5.b1b196dd.js.map