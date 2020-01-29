(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a547c432"],{1835:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"max-width":"500px"}},[n("div",{staticClass:"d-flex align-items-center mb-5"},[n("h3",{staticClass:"mr-2 "},[e._v(" "+e._s(e.$t("dappsMCDMaker.migrate-single-collateral-to-multi-collateral"))+" ")]),n("img",{staticClass:"icon-size",attrs:{src:e.DaiIcon,height:"26",width:"26"}})]),n("div",[n("div",{staticClass:"mb-5"},[n("div",{staticClass:"mb-2"},[n("b",[e._v(e._s(e.$t("dappsMCDMaker.migration-contract-balance")))])]),n("b-form-input",{staticClass:"mb-1",attrs:{readonly:""},model:{value:e.migrateContractBalance,callback:function(t){e.migrateContractBalance=t},expression:"migrateContractBalance"}}),n("b-button",{attrs:{variant:"secondary"},on:{click:e.checkMigrateContractSaiBalance}},[e._v(e._s(e.$t("dappsMCDMaker.check-balance")))])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.noSaiAvailable&&!e.needsAtLeast20,expression:"noSaiAvailable && !needsAtLeast20"}]},[e._v(" "+e._s(e.$t("dappsMCDMaker.not-enough-sai"))+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.needsAtLeast20,expression:"needsAtLeast20"}],staticStyle:{padding:"10px"}},[e._v(" "+e._s(e.$t("dappsMCDMaker.needs-at-least-20",{value:e.migrateContractBalance}))+" ")])]),n("div",{staticClass:"currency-picker-container"},[n("div",{staticClass:"mb-2"},[n("b",[e._v(e._s(e.$t("dappsMCDMaker.your-cdps")))])]),e.cdpDetailsLoaded?e._e():n("div",{staticClass:"d-flex align-items-center"},[n("b-spinner",{staticClass:"mr-3",attrs:{variant:"primary",label:"Spinning"}}),n("div",[e._v(" "+e._s(e.$t("dappsMCDMaker.loading-your-cdps"))+" ")])],1),e._l(e.cdps,(function(t){return n("div",{key:t},[n("div",{class:["dropdown-text-container","dropdown-container","no-point",t===e.selectedCdp?"selectedCDP":""],on:{click:function(n){return e.selectCDP(t)}}},[n("p",[n("span",{staticClass:"cc DAI cc-icon cc-icon-dai currency-symbol"}),e._v(" "+e._s(t)+" "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.$t("dappsMCDMaker.cdp"))+" ")])])])])})),n("div",{directives:[{name:"show",rawName:"v-show",value:e.noCdpsToMigrateFound,expression:"noCdpsToMigrateFound"}]},[e._v(" "+e._s(e.$t("dappsMCDMaker.no-cdps-to-migrate-found"))+" ")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.mkrNeeded,expression:"mkrNeeded"}]},[e._v(e._s(e.$t("dappsMCDMaker.get-maker-to-migrate")))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.mkrNeeded,expression:"mkrNeeded"}],staticClass:"buttons-container"},[n("div",{class:["submit-button large-round-button-green-filled"],on:{click:e.getMkr}},[e._v(" "+e._s(e.$t("dappsMCDMaker.get-mkr"))+" ")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.approvalNeeded&&!e.mkrNeeded,expression:"approvalNeeded && !mkrNeeded"}]},[e._v(" "+e._s(e.$t("dappsMCDMaker.approve-maker-to-migrate"))+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.approvalNeeded&&!e.mkrNeeded,expression:"approvalNeeded && !mkrNeeded"}],staticClass:"buttons-container"},[n("div",{class:["submit-button large-round-button-green-filled"],on:{click:e.beginMigration}},[e._v(" "+e._s(e.$t("dappsMCDMaker.approve-maker"))+" ")])]),n("div",{staticClass:"buttons-container"},[n("div",{class:[e.validInputs?"":"disabled","submit-button large-round-button-green-filled"],on:{click:e.beginMigration}},[e._v(" "+e._s(e.$t("dappsMCDMaker.migrate"))+" ")])])],2)])},a=[],s=(n("a4d3"),n("99af"),n("4de4"),n("a9e3"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("3ca3"),n("159b"),n("ddb0"),n("96cf"),n("c964")),i=n("fc11"),c=n("2f62"),o=n("901e"),u=n.n(o),d=n("d1fb"),p=n("70c1"),l=n.n(p),h=n("ce96"),m=n("9b76"),v=n.n(m);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){return new u.a(e)},w={props:{ethPrice:{type:u.a,default:function(){return new u.a(0)}},makerActive:{type:Boolean,default:!1},availableCdps:{type:Object,default:function(){return{}}},getCdp:{type:Function,default:function(){}},valuesUpdated:{type:Number,default:0},getValueOrFunction:{type:Function,default:function(){}}},data:function(){return{DaiIcon:v.a,cdps:[],daiGenerated:0,migrateContractBalance:0,selectedCdp:0,proxyAddress:"",cdpBalances:{},migrationNotPossible:!1,cdpDetailsLoaded:!1,noSaiAvailable:!1,needsAtLeast20:!1,approvalNeeded:!1,governanceFee:f(0),mkrBalance:f(0)}},computed:b({},Object(c["c"])("main",["account","gasPrice","web3","network","ens"]),{migrationPossible:function(){return f(this.daiGenerated).lt(f(this.migrateContractBalance))&&this.cdpDetailsLoaded&&f(this.daiGenerated).gte(20)},validInputs:function(){return 0!==this.selectedCdp&&this.migrationPossible&&!this.mkrNeeded&&!this.approvalNeeded},noCdpsToMigrateFound:function(){return 0===this.cdps.length&&this.cdpDetailsLoaded},mkrNeeded:function(){return f(this.mkrBalance).lt(this.governanceFee)}}),watch:{$route:"setup",makerActive:"setup",valuesUpdated:function(){this.findCdps()}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.setup();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{setup:function(){var e=this;this.makerActive&&(this.migrateContractBalance=0,this.maker=this.getValueOrFunction("maker"),this._mcdManager=this.getValueOrFunction("_mcdManager"),this.getProxy=this.getValueOrFunction("getProxy"),this.proxyAllowances=this.getValueOrFunction("proxyAllowances"),this.proxyAddress=this.getValueOrFunction("proxyAddress"),this.findCdps(),this.getMigrationContractBalance().then((function(t){return e.migrateContractBalance=t})),this.checkMigrateContractSaiBalance(),this.getMkrBalance())},findCdps:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["y"])(this,this.getValueOrFunction("_cdpService"));case 2:t=e.sent,n=t.withProxy,r=t.withoutProxy,this.cdpDetailsLoaded=!0,this.cdps=n.concat(r);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beginMigration:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0===this.selectedCdp){e.next=37;break}return this.proxyAddress=this.getValueOrFunction("proxyAddress"),e.next=4,this.getValueOrFunction("_cdpService").getCdp(this.selectedCdp,this.proxyAddress);case 4:return t=e.sent,this.getMkrBalance(),e.next=8,t.getGovernanceFee();case 8:return this.governanceFee=e.sent.toBigNumber(),e.next=11,t.getDebtValue();case 11:return n=e.sent.toBigNumber(),this.cdpBalances[this.selectedCdp]={balance:n},e.next=15,this.checkMigrateContractSaiBalance(n);case 15:if(r=e.sent,n.lt(20)&&(this.needsAtLeast20=!0),!r){e.next=37;break}return e.next=20,this.needsApproval(this.governanceFee);case 20:if(this.approvalNeeded=e.sent,!this.approvalNeeded){e.next=29;break}return a=f(this.governanceFee).gt(1e6)?this.governanceFee:1e6,e.next=25,this.approveMkr(a);case 25:s=e.sent,this.web3.eth.sendTransaction(s).catch((function(e){h["e"].responseHandler(e,h["e"].ERROR)})),e.next=37;break;case 29:return e.prev=29,e.next=32,this.migrate(this.selectedCdp);case 32:e.next=37;break;case 34:e.prev=34,e.t0=e["catch"](29),h["e"].responseHandler(e.t0,h["e"].ERROR);case 37:case"end":return e.stop()}}),e,this,[[29,34]])})));function t(){return e.apply(this,arguments)}return t}(),getMkr:function(){var e=this.governanceFee;f(this.mkrBalance).lt(e)&&(this.suppliedToAmount=f(e).minus(f(this.mkrBalance)).plus(f(e).times(.01)).toNumber(),f(this.suppliedToAmount).lt(1e-6)&&(this.suppliedToAmount=1e-6),this.suppliedFrom={symbol:"ETH",name:"Ethereum"},this.suppliedTo={symbol:"MKR",name:"Maker"},this.$eventHub.$emit("showSwapWidgetTo",this.account.address,this.suppliedFrom,this.suppliedTo,this.suppliedToAmount))},migrate:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.maker.service("migration").getMigration("single-to-multi-cdp"),e.next=3,n.execute(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getMkrBalance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new this.web3.eth.Contract(d["c"],d["h"].MCD_GOV),e.next=3,t.methods.balanceOf(this.account.address).call();case 3:n=e.sent,this.mkrBalance=f(n);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),needsApproval:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new this.web3.eth.Contract(d["c"],d["h"].MCD_GOV),e.next=3,n.methods.allowance(this.account.address,this.proxyAddress).call();case 3:return r=e.sent,e.abrupt("return",f(r).lt(f(t)));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),approveMkr:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new this.web3.eth.Contract(d["c"],d["h"].MCD_GOV),r=n.methods.approve(this.proxyAddress,l.a.toWei(t,"ether").toString()).encodeABI(),e.abrupt("return",{from:this.account.address,to:d["h"].MCD_GOV,value:0,data:r});case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),selectCDP:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.selectedCdp=t,!this.cdpBalances[this.selectedCdp]){e.next=14;break}return this.checkMigrateContractSaiBalance(this.cdpBalances[this.selectedCdp].balance),f(this.cdpBalances[this.selectedCdp].balance).lt(20)?this.needsAtLeast20=!0:this.needsAtLeast20=!1,this.daiGenerated=this.cdpBalances[this.selectedCdp],e.next=7,this.getValueOrFunction("_cdpService").getCdp(t,this.proxyAddress);case 7:return n=e.sent,this.getMkrBalance(),e.next=11,n.getGovernanceFee();case 11:this.governanceFee=e.sent.toBigNumber(),e.next=31;break;case 14:return e.next=16,this.getValueOrFunction("_cdpService").getCdp(t,this.proxyAddress);case 16:return r=e.sent,this.getMkrBalance(),e.next=20,r.getGovernanceFee();case 20:return this.governanceFee=e.sent.toBigNumber(),e.next=23,r.getDebtValue();case 23:return a=e.sent.toBigNumber(),this.checkMigrateContractSaiBalance(a),a.lt(20)?this.needsAtLeast20=!0:this.needsAtLeast20=!1,this.daiGenerated=a.toString(),this.cdpBalances[this.selectedCdp]={balance:a,fee:this.governanceFee},e.next=30,this.needsApproval(this.governanceFee||1e6);case 30:this.approvalNeeded=e.sent;case 31:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkMigrateContractSaiBalance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,this.getMigrationContractBalance();case 3:if(this.migrateContractBalance=e.sent,!f(this.migrateContractBalance).lt(20)){e.next=7;break}return this.noSaiAvailable=!0,e.abrupt("return",!1);case 7:if(!f(t).lt(f(this.migrateContractBalance))){e.next=9;break}return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getMigrationContractBalance:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new this.web3.eth.Contract(d["c"],d["h"].SAI).methods.balanceOf(d["h"].MCD_JOIN_SAI).call();case 2:return t=e.sent,e.abrupt("return",l.a.fromWei(t,"ether").toString());case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submitTransaction:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return window.scrollTo(0,0),e.prev=1,t=l.a.toWei(this.daiGenerated,"ether").toString(),e.next=5,Promise.all([this.approve(t),this.migrate(t)]);case 5:n=e.sent,this.web3.mew.sendBatchTransactions(n).catch((function(e){h["e"].responseHandler(e,h["e"].ERROR)})),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),h["e"].responseHandler(e.t0,h["e"].ERROR);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),displayPercentValue:function(e){return u.a.isBigNumber(e)||(e=new u.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return u.a.isBigNumber(e)||(e=new u.a(e)),e.toFixed(t).toString()}}},k=w,C=(n("5337f"),n("2877")),x=Object(C["a"])(k,r,a,!1,null,"acf21b36",null),M=x.exports;t["default"]=M},"5337f":function(e,t,n){"use strict";var r=n("5f46"),a=n.n(r);a.a},"5f46":function(e,t,n){}}]);
//# sourceMappingURL=chunk-a547c432.10a2d6c6.js.map