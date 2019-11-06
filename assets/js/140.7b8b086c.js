(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{337:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("router-link",{attrs:{to:"/vue-identicon/"}},[t._v("Polkadot JS UI libraries")]),t._v(" › "),n("router-link",{attrs:{to:"/vue-identicon/globals.html"}},[t._v("Globals")]),t._v(" › "),n("router-link",{attrs:{to:"/vue-identicon/modules/_identicon_.html"}},[t._v('"Identicon"')])],1),t._v(" "),n("h1",{attrs:{id:"external-module-identicon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-module-identicon"}},[t._v("#")]),t._v(' External module: "Identicon"')]),t._v(" "),n("h2",{attrs:{id:"index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),n("h3",{attrs:{id:"variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/vue-identicon/modules/_identicon_.html#const-identicon"}},[t._v("Identicon")])],1)]),t._v(" "),n("h2",{attrs:{id:"variables-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables-2"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),n("h3",{attrs:{id:"const-identicon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const-identicon"}},[t._v("#")]),t._v(" "),n("code",[t._v("Const")]),t._v(" Identicon")]),t._v(" "),n("p",[t._v("• "),n("strong",[t._v("Identicon")]),t._v(": "),n("em",[t._v("VueConstructor‹Data & object & object & Vue‹››")]),t._v(" =  Vue.extend({\n// FIXME These nested divs are not correct, would like a different way\n// here so we don't create a div wrapped for the div wrapper of the icon\ntemplate: "),n("code",[t._v('<div v-if="type === \'empty\' || address === \'\'"> <Empty :key="address" :size="iconSize" /> </div> <div v-else-if="type === \'beachball\'"> <Beachball :key="address" :address="address" :size="iconSize" /> </div> <div v-else-if="type === \'polkadot\'"> <Polkadot :key="address" :address="address" :size="iconSize" /> </div> <div v-else> <Jdenticon :key="address" :publicKey="publicKey" :size="iconSize" /> </div>')]),t._v(",\nprops: ['prefix', 'size', 'theme', 'value'],\ncomponents: {\nBeachball,\nEmpty,\nJdenticon,\nPolkadot\n},\ndata: function (): Data {\nreturn {\naddress: '',\niconSize: DEFAULT_SIZE,\npublicKey: '0x',\ntype: 'empty'\n};\n},\ncreated: function (): void {\nthis.createData();\n},\nmethods: {\ncreateData: function (): void {\nthis.iconSize = this.size || DEFAULT_SIZE;\nthis.type = this.theme;")]),t._v(" "),n("pre",[n("code",[t._v("  this.recodeAddress();\n},\nrecodeAddress: function (): void {\n  const { address, publicKey } = encodeAccount(this.value);\n\n  this.address = address;\n  this.publicKey = publicKey;\n}\n")])]),t._v(" "),n("p",[t._v("},\nwatch: {\nvalue: function (): void {\nthis.recodeAddress();\n}\n}\n})")]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/ui/blob/f6c85f27/packages/vue-identicon/src/Identicon.ts#L48",target:"_blank",rel:"noopener noreferrer"}},[t._v("Identicon.ts:48"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[n("code",[t._v("name")])]),t._v(" Identicon")]),t._v(" "),n("p",[n("strong",[n("code",[t._v("description")])]),t._v(" The main Identicon component, taking a number of properties")]),t._v(" "),n("p",[n("strong",[n("code",[t._v("example")])])]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Identicon")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":size")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("128"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":theme")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("polkadot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);