(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d2cf62c"],{3125:function(e,t,n){},"3a1f":function(e,t,n){"use strict";var r=n("3125"),a=n.n(r);a.a},"71be":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"transfer-registrar-container"},[n("div",{staticClass:"transfer-registrar-content"},[n("h3",[e._v(e._s(e.$t("ens.domain-old",{domain:e.fullDomainName})))]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isOwner,expression:"isOwner"}]},[e._v(" "+e._s(e.$t("ens.domain-owner",{domain:e.fullDomainName}))+" ")]),n("div",{staticClass:"transfer-registrar-button"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.isOwner,expression:"isOwner"}],class:["large-round-button-green-filled",e.loading?"disabled":""],on:{click:e.transferFunc}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(" "+e._s(e.$t("ens.transfer"))+" ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),n("interface-bottom-text",{attrs:{"link-text":e.$t("common.help-center"),question:e.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},a=[],s=(n("a4d3"),n("99af"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("fc11")),o=n("2f62"),i=n("539d");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={components:{"interface-bottom-text":i["a"]},props:{hostName:{type:String,default:""},deedOwner:{type:String,default:""},transferFunc:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},computed:u({},Object(o["c"])("main",["account"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},isOwner:function(){return this.account.address.toLowerCase()===this.deedOwner.toLowerCase()}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},f=l,d=(n("3a1f"),n("2877")),p=Object(d["a"])(f,r,a,!1,null,"6af5d822",null),m=p.exports;n.d(t,"default",(function(){return m}))}}]);
//# sourceMappingURL=chunk-6d2cf62c.2e9c7a5b.js.map