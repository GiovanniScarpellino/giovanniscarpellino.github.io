(function(e){function n(n){for(var r,a,i=n[0],s=n[1],u=n[2],f=0,d=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,i=1;i<t.length;i++){var s=t[i];0!==o[s]&&(r=!1)}r&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"14a5":function(e,n,t){e.exports=t.p+"img/dualsense.8cf3382b.png"},"2fc3":function(e,n,t){"use strict";t("ec2b")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Playstation")},c=[],a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",{staticClass:"ps5_intro",attrs:{id:"ps5_intro"}},[r("div",{staticClass:"controller_container",attrs:{id:"controller_container"}},[r("img",{attrs:{src:t("14a5"),id:"controller_image"}}),r("div",{class:["glow","left",{connected:e.connected}]}),r("div",{class:["glow","right",{connected:e.connected}]}),r("div",{attrs:{id:"playstation"},on:{click:e.connect}},[r("i",{staticClass:"fab fa-playstation"})])])])])},i=[],s=t("1da1"),u=(t("96cf"),{beforeMount:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$db.onConnectedChange((function(n){return e.connected=n}));case 1:case"end":return n.stop()}}),n)})))()},data:function(){return{connected:!1}},methods:{connect:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$db.setConnected(!e.connected);case 2:case"end":return n.stop()}}),n)})))()}}}),l=u,f=(t("2fc3"),t("2877")),d=Object(f["a"])(l,a,i,!1,null,null,null),p=d.exports,b={components:{Playstation:p}},g=b,h=(t("034f"),Object(f["a"])(g,o,c,!1,null,null,null)),v=h.exports,m=t("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("15f5"),t("7051");var y={apiKey:"AIzaSyCL1Vw-H_vEJkxk0AOZs-eHiZ-m-nPX6Ts",authDomain:"ps5checker-a1510.firebaseapp.com",databaseURL:"https://ps5checker-a1510-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ps5checker-a1510",storageBucket:"ps5checker-a1510.appspot.com",messagingSenderId:"664386577633",appId:"1:664386577633:web:6699461565db13a2c183a0",vapidKey:"BAgvBxSUOmm8ZHtycH_hkDb4ri6AhREtoL76NSRcWd8ZZfudg-Z0el2T1eLTCIt6W8Ly98nVf4uEys22NAjgVn0"},w=y,O=t("260b"),j=(t("741f"),t("66ce")),k=Object(O["a"])(w),_=Object(j["a"])(k),x=Object(j["c"])(_,"/connected");r["a"].prototype.$db={onConnectedChange:function(e){Object(j["b"])(x,(function(n){return e(n.val())}))},setConnected:function(e){return Object(j["d"])(x,e)}},r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,n,t){},ec2b:function(e,n,t){}});
//# sourceMappingURL=app.748f1290.js.map