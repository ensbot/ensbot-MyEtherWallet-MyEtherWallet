(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a11a179"],{"0355":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"send-offline-container"},[s("interface-container-title",{attrs:{title:t.$t("sendTx.send-offline")}}),s("div",{staticClass:"generate-tx"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"send-form"},[s("div",{staticClass:"form-block amount-to-address"},[s("ul",{staticClass:"type-amount"},[s("li",{staticClass:"type"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("sendTx.type")))])]),s("currency-picker",{attrs:{currency:t.allTokens,token:!0,default:t.selectedCoinType.hasOwnProperty("symbol")?t.selectedCoinType:{},page:"sendOfflineGenTx"},on:{selectedCurrency:t.setSelectedCurrency}})],1),s("li",{staticClass:"amount"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("sendTx.amount")))])]),s("div",{staticClass:"the-form amount-number"},[s("input",{attrs:{placeholder:t.$t("sendTx.dep-amount"),type:"number",step:"any",name:""},domProps:{value:t.toAmt},on:{input:t.debouncedAmount}})])])]),s("div",{staticClass:"to-address"},[s("dropdown-address-selector",{attrs:{"clear-address":t.clearAddress,title:t.$t("sendTx.to-addr")},on:{toAddress:function(e){return t.getToAddress(e)}}})],1)])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("sendTx.data")))])])])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{disabled:t.selectedCoinType.symbol!==t.network.type.name,type:"string",placeholder:"e.g. 0x65746865726d696e652d657531"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),s("p",{directives:[{name:"show",rawName:"v-show",value:!t.validData,expression:"!validData"}]},[t._v(" "+t._s(t.$t("sendTx.invalid-data"))+" ")]),s("div",{staticClass:"good-button-container"},[s("i",{class:[t.validData&&t.toData.length>=2?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("common.gas.limit")))]),s("popover",{attrs:{popcontent:t.$t("popover.gas-limit")}})],1)])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.gasLimit,expression:"gasLimit"}],attrs:{placeholder:t.$t("common.gas.limit"),type:"number"},domProps:{value:t.gasLimit},on:{input:function(e){e.target.composing||(t.gasLimit=e.target.value)}}}),s("div",{staticClass:"good-button-container"},[s("i",{class:["fa fa-check-circle good-button",t.gasLimit>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("sendTx.nonce")))]),s("popover",{attrs:{popcontent:t.$t("popover.nonce")}})],1)])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localNonce,expression:"localNonce"}],attrs:{placeholder:t.$t("sendTx.nonce"),type:"number"},domProps:{value:t.localNonce},on:{input:function(e){e.target.composing||(t.localNonce=e.target.value)}}}),s("div",{staticClass:"good-button-container"},[s("i",{class:["fa fa-check-circle good-button",t.localNonce>=0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("div",{staticClass:"title-helper"},[s("h4",[t._v(t._s(t.$t("common.gas.price")))]),s("popover",{attrs:{popcontent:t.txSpeedMsg}})],1)])]),s("div",{staticClass:"the-form gas-amount"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.localGasPrice,expression:"localGasPrice"}],attrs:{placeholder:t.$t("common.gas.price"),type:"number"},domProps:{value:t.localGasPrice},on:{input:function(e){e.target.composing||(t.localGasPrice=e.target.value)}}}),s("div",{staticClass:"good-button-container"},[s("i",{class:["fa fa-check-circle good-button",t.localGasPrice>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),s("div",{staticClass:"submit-button-container"},[s("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),s("div",{staticClass:"submit-button large-round-button-green-border",on:{click:t.uploadClick}},[t._v(" "+t._s(t.$t("sendTx.import-json"))+" ")]),s("div",{class:[t.isAllInputValid?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.generateTx}},[t._v(" "+t._s(t.$t("sendTx.generate-tx"))+" ")]),s("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.clear()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])]),s("signed-tx-modal",{ref:"signedTxModal",attrs:{"signed-tx":t.signed,"raw-tx":t.raw}})],1)],1)},n=[],i=(s("a4d3"),s("99af"),s("4de4"),s("7db0"),s("4e82"),s("b0c0"),s("a9e3"),s("b680"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("e25e"),s("ac1f"),s("25f0"),s("5319"),s("498a"),s("159b"),s("96cf"),s("c964")),o=s("fc11"),r=s("55c1"),l=s("d7a2"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{ref:"signedTx",staticClass:"bootstrap-modal signed-tx-modal",attrs:{title:t.$t("sendTx.signed.tx"),"hide-footer":"",static:"",lazy:""}},[s("div",{staticClass:"d-block"},[s("div",{staticClass:"title-block"},[s("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("sendTx.signed.tx")))])]),s("div",{staticClass:"signed-tx-container"},[s("code",[t._v(t._s(JSON.parse(t.signedTx).rawTransaction))]),s("input",{ref:"signedTxInput",staticStyle:{position:"absolute",top:"0",opacity:"0"},attrs:{autocomplete:"off"},domProps:{value:JSON.parse(t.signedTx).rawTransaction}})]),s("div",{staticClass:"scan-download-container"},[s("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("sendTx.signed.scan")))]),""!==t.signedTx?s("div",{staticClass:"scan-download-items"},[s("qrcode",{attrs:{value:JSON.parse(t.signedTx).rawTransaction,options:{size:200},head:""}}),t._v(t._s(t.$t("sendTx.signed.or"))+" "),s("a",{attrs:{href:t.jsonFile,download:t.jsonFileName,rel:"noopener noreferrer"}},[t._v(t._s(t.$t("sendTx.signed.download")))])],1):t._e()]),s("div",{staticClass:"raw"},[s("div",{staticClass:"title-block"},[s("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("sendTx.signed.raw")))]),s("div",{staticClass:"sliding-switch-white"},[s("label",{staticClass:"switch"},[s("input",{attrs:{type:"checkbox"},on:{click:function(e){t.showRaw=!t.showRaw}}}),s("span",{staticClass:"slider round"})])])]),t.showRaw?s("div",{staticClass:"raw-tx-container"},[s("code",[t._v(t._s(t.rawTx))])]):t._e()])]),s("div",{staticClass:"button-container"},[s("b-btn",{staticClass:"mid-round-button-green-filled close-button",on:{click:t.copyAndContinue}},[t._v(t._s(t.$t("sendTx.signed.button-copy-cont")))])],1)])},d=[],u=(s("3ca3"),s("ddb0"),s("2b3d"),{name:"SignedTxModal",props:{signedTx:{type:String,default:""},rawTx:{type:Object,default:function(){return{}}},pathUpdate:{type:Function,default:function(){}}},data:function(){return{showRaw:!1,jsonFile:"",jsonFileName:"signedTransactionObject-".concat(+new Date,".json")}},watch:{signedTx:function(t){var e=JSON.parse(t),s=this.rawTx;delete s["generateOnly"];var a=Object.assign({},e.tx,s);delete e["tx"],e["tx"]=a;var n=JSON.stringify(e),i=new Blob([n],{type:"mime"});this.jsonFileName="signedTransactionObject-".concat(+new Date,".json"),this.jsonFile=window.URL.createObjectURL(i)}},methods:{copyAndContinue:function(){this.$refs.signedTxInput.select(),document.execCommand("copy"),this.$refs.signedTx.hide()}}}),p=u,h=(s("f762"),s("2877")),m=Object(h["a"])(p,c,d,!1,null,null,null),f=m.exports,g=s("901e"),v=s.n(g),y=s("70c1"),b=s("2f62"),w=s("8ded"),C=s.n(w),x=s("ce96"),T=s("1131"),k=s.n(T),_=s("94b2");function N(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?N(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):N(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var O={components:{"signed-tx-modal":f,"currency-picker":l["a"],"interface-container-title":r["a"],"dropdown-address-selector":_["a"]},props:{checkPrefilled:{type:Function,default:function(){}},clearPrefilled:{type:Function,default:function(){}},isPrefilled:{type:Boolean,default:!1},value:{type:String,default:"0"},data:{type:String,default:""},to:{type:String,default:""},gaslimit:{type:String,default:""},gas:{type:Number,default:0},tokensymbol:{type:String,default:""},tokens:{type:Array,default:function(){return[]}},nonce:{type:String,default:"0"},highestGas:{type:String,default:"0"}},data:function(){return{toAmt:0,address:"",toData:"0x",gasLimit:21e3,selectedCoinType:{},raw:{},signed:"{}",localNonce:this.nonce,file:"",localGasPrice:this.highestGas,clearAddress:!1}},computed:P({},Object(b["c"])("main",["wallet","network","web3","linkQuery"]),{txSpeedMsg:function(){var t=this.network.type.name,e="".concat(this.$t("popover.tx-speed-pt-1").replace("{0}",t)," ").concat(this.$t("popover.tx-speed-pt-2").replace("{0}",t));return e},allTokens:function(){var t=C.a.get("customTokens"),e=this.tokens.concat(t[this.network.type.name]),s=e.sort((function(t,e){return t.symbol.toUpperCase()<e.symbol.toUpperCase()?-1:t.symbol.toUpperCase()>e.symbol.toUpperCase()?1:0}));return s},isAllInputValid:function(){return this.toData.length>=2&&this.address.length>0&&this.validAddress&&this.toAmt>=0&&this.gasLimit>0&&this.localNonce>=0&&this.localGasPrice},validData:function(){return x["d"].validateHexString(this.toData)}}),watch:{highestGas:function(t){this.localGasPrice=t},nonce:function(t){this.localNonce=t},toAmt:function(t){this.createDataHex(t,null,null)},address:function(t){this.validAddress&&this.createDataHex(null,t,null)},selectedCoinType:function(t){this.createDataHex(null,null,t)},isPrefilled:function(){this.prefillForm()}},mounted:function(){this.checkPrefilled()},methods:{clear:function(){this.toAmt=0,this.address="",this.toData="0x",this.gasLimit=21e3,this.localNonce=this.nonce,this.localGasPrice=this.highestGas,this.clearAddress=!this.clearAddress,this.selectedCoinType={name:this.network.type.name_long,symbol:this.network.type.currencyName}},prefillForm:function(){var t=this;if(this.tokens.length>0&&this.isPrefilled){var e=this.tokensymbol?this.tokens.find((function(e){return e.symbol.toLowerCase()===t.tokensymbol.toLowerCase()})):void 0;this.toAmt=new v.a(this.value).toFixed(),this.toData=x["d"].validateHexString(this.data)?this.data:"",this.address=this.to,this.gasLimit=this.gaslimit?new v.a(this.gaslimit).toString():"21000",this.localGasPrice=new v.a(this.gas).toFixed(),this.selectedCoinType=e||this.selectedCoinType,x["e"].responseHandler("Form has been prefilled. Please proceed with caution!",x["e"].WARN),this.clearPrefilled()}},debouncedAmount:k.a._.debounce((function(t){var e=this.network.type.currencyName,s=this.selectedCoinType.symbol===e?18:parseInt(this.selectedCoinType.decimals);this.toAmt=t.target.valueAsNumber<0||isNaN(t.target.valueAsNumber)?0:new v.a(t.target.valueAsNumber).decimalPlaces(s).toFixed()}),300),createDataHex:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,s,a){var n,i,o,r,l,c,d,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=null!==e?e:this.toAmt,i=null!==s?s:this.address,o=null!==a?a:this.selectedCoinType,r=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],l=this.network.type.currencyName,o.symbol!==l&&""!==i&&(c=""===n||null===n?"0":n,d=new this.web3.eth.Contract(r,o.address),u=new v.a(c).times(new v.a(10).pow(o.decimals)),this.toData=d.methods.transfer(i,u.toFixed()).encodeABI());case 6:case"end":return t.stop()}}),t,this)})));function e(e,s,a){return t.apply(this,arguments)}return e}(),getToAddress:function(t){this.address=t.address,this.validAddress=t.valid},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,s=new FileReader;s.onloadend=function(s){try{var a=JSON.parse(s.target.result);e.localGasPrice=y["fromWei"](a.gasPrice,"gwei"),e.localNonce=a.nonce}catch(t){x["e"].responseHandler(t,x["e"].WARN)}},s.readAsBinaryString(t.target.files[0])},generateTx:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,s,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.network.type.currencyName,s=this.selectedCoinType.symbol!==e,a=y["toWei"](this.toAmt,"ether"),n={nonce:x["d"].sanitizeHex(new v.a(this.localNonce).toString(16)),gasLimit:x["d"].sanitizeHex(new v.a(this.gasLimit).toString(16)),gasPrice:x["d"].sanitizeHex(new v.a(y["toWei"](this.localGasPrice,"gwei")).toString(16)),to:s?this.selectedCoinType.address:this.address.toLowerCase().trim(),value:s?0:a,data:this.toData,chainId:this.network.type.chainID},this.raw=n,t.next=7,this.wallet.signTransaction(this.raw);case 7:i=t.sent,this.signed=JSON.stringify(i),this.$refs.signedTxModal.$refs.signedTx.show(),window.scrollTo(0,0),this.clear();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setSelectedCurrency:function(t){var e=this.network.type.currencyName;this.selectedCoinType=t,t.symbol===e&&(this.toData="0x")}}},$=O,A=(s("97b5"),Object(h["a"])($,a,n,!1,null,"347523db",null)),j=A.exports;s.d(e,"default",(function(){return j}))},"73cf":function(t,e,s){},"8e44d":function(t,e,s){},"97b5":function(t,e,s){"use strict";var a=s("73cf"),n=s.n(a);n.a},f762:function(t,e,s){"use strict";var a=s("8e44d"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-2a11a179.6e865c6d.js.map