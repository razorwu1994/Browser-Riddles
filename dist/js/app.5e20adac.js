(function(e){function t(t){for(var n,c,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)c=u[l],o[c]&&p.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d3989ccd"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e),a=function(t){i.onerror=i.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0317":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"0892":function(e,t,r){"use strict";var n=r("0317"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],c=(r("034f"),r("2877")),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),s=i.exports,l=r("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:r("cf05")}})])}],d={name:"home"},h=d,m=Object(c["a"])(h,f,p,!1,null,null,null),v=m.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"tripletsWrapper"}},[r("img",{staticClass:"logo triplets",attrs:{id:"bigbrohda",alt:"Vue logo",src:"https://cdn.worldvectorlogo.com/logos/react.svg"}}),r("img",{staticClass:"logo triplets",attrs:{id:"middlebrohda",alt:"Vue logo",src:"https://cdn.worldvectorlogo.com/logos/react.svg"}}),r("img",{staticClass:"logo triplets",attrs:{id:"lilbrohda",alt:"Vue logo",src:"https://cdn.worldvectorlogo.com/logos/react.svg"}})])}],w=(r("0892"),{}),y=Object(c["a"])(w,g,b,!1,null,"3798f9d3",null),_=y.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.data[0].current))]),r("h3",{attrs:{id:"hide"}},[e._v("This text seems come from somewhere but where???")])])},x=[],O=(r("96cf"),r("3b8d")),I={data:function(){return{data:"dd"}},name:"LevelIII",asyncComputed:{getData:function(){var e=Object(O["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/razorwu1994/fakeDB/info");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,this.data=t;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},C=I,E=(r("c9ed"),Object(c["a"])(C,j,x,!1,null,"7722d5c3",null)),P=E.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("What keeps me fresh")])},k=[],L={name:"LevelIV"},M=L,S=Object(c["a"])(M,$,k,!1,null,"54ce63bc",null),T=S.exports;n["a"].use(l["a"]);var V=new l["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/vue"},{path:"/vue",name:"LevelI",component:v},{path:"/react",redirect:"/howManyCircles"},{path:"/howManyCircles",name:"LevelII",component:_},{path:"/12",name:"LevelIII",component:P},{path:"/realDB",name:"LevelIV",component:T},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),D=r("2f62");n["a"].use(D["a"]);var B=new D["a"].Store({state:{},mutations:{},actions:{}}),J=r("3003");n["a"].use(J["a"]),n["a"].config.productionTip=!1,new n["a"]({router:V,store:B,render:function(e){return e(s)}}).$mount("#app")},5890:function(e,t,r){},"64a9":function(e,t,r){},c9ed:function(e,t,r){"use strict";var n=r("5890"),o=r.n(n);o.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5e20adac.js.map