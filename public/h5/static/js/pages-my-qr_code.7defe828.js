(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-qr_code"],{"0634":function(t,e,n){t.exports=n.p+"static/img/2.d2e10cb3.jpg"},"125f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={restUrl:"http://chat.4yop.com/api/v1/",wsUrl:"ws://chat.4yop.com/ws/",friendList:"friends",friend:"friend",friendSearch:"friend/search",friendAdd:"friend/add",chat:"chat",toFriend:"send/friend",chatList:"chat/list",chatHide:"chat/hide"},i=a;e.default=i},"1cfd":function(t,e,n){var a=n("9d18");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d487b4da",a,!0,{sourceMap:!1,shadowMode:!1})},"1ed1":function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.http_request=void 0;var i=a(n("125f")),o=a(n("277c")),r=function(e){var n=i.default.restUrl+e.url;e.type||(e.type="get"),void 0!=e.noToast&&0!=e.noToast||uni.showToast({icon:"loading",mask:!0}),0==e.setUpUrl&&(n=e.url),e.token=o.default.getToken(),uni.request({url:n,data:e.data,method:e.type,header:{"content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+e.token},success:function(t){uni.hideToast(),e.sCallback&&e.sCallback(t.data)},fail:function(n){uni.hideToast(),t.log(n),e.eCallback&&e.eCallback(res.data)},complete:function(t){401==t.statusCode&&(uni.removeStorageSync("_token"),uni.showToast({title:"未登陆",icon:"none",success:function(){setTimeout((function(){uni.redirectTo({url:"/pages/my/login"})}),1e3)}}))}})};e.http_request=r}).call(this,n("5a52")["default"])},"277c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={getToken:function(){var e=uni.getStorageSync("_token");return!e||e.expires_time<Date.parse(new Date)/1e3?(uni.removeStorageSync("_token"),t.log(e.expires_time),t.log(Date.parse(new Date)/1e3),t.log("token过期了"),setTimeout((function(){uni.switchTab({url:"/pages/my/login"})}),100),""):e.token?e.token:(uni.removeStorageSync("_token"),t.log("token 空"),setTimeout((function(){uni.switchTab({url:"/pages/my/login"})}),100),"")}},a=n;e.default=a}).call(this,n("5a52")["default"])},4877:function(t,e,n){"use strict";n.r(e);var a=n("a198"),i=n("fb8b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("84df");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"1d344fa2",null,!1,a["a"],r);e["default"]=s.exports},5964:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("1ed1"),i=(n("a9e6"),n("b512"),{data:function(){return{userInfo:{avatar:"",name:"",email:""},qr_code:""}},onLoad:function(t){this.getQrCode(),this.userInfo=uni.getStorageSync("userInfo"),this.getUserInfo()},onShow:function(){},methods:{getQrCode:function(){var t=this,e={url:"user/qr_code",sCallback:function(e){1==e.code&&(t.qr_code=e.data.qr_code)}};(0,a.http_request)(e)},getUserInfo:function(){var t=this,e={url:"user",noToast:!0,sCallback:function(e){if(1!=e.code)return uni.removeStorageSync("_token"),void uni.showToast({title:e.msg?e.msg:"error",icon:"none",success:function(){setTimeout((function(){uni.redirectTo({url:"/pages/my/login"})}),1e3)}});t.userInfo=e.data,uni.setStorageSync("userInfo",e.data)}};(0,a.http_request)(e)}}});e.default=i},"5df2":function(t,e,n){t.exports=n.p+"static/img/1.773bc5e0.jpg"},"84df":function(t,e,n){"use strict";var a=n("1cfd"),i=n.n(a);i.a},"88b3":function(t,e,n){var a={"./1.jpg":"5df2","./2.jpg":"0634","./3.jpg":"bec0","./4.jpg":"98b1"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id="88b3"},"98b1":function(t,e,n){t.exports=n.p+"static/img/4.04f15fb9.jpg"},"9d18":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-1d344fa2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?60?% %?38?%;background-color:#fff}.header_left[data-v-1d344fa2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header_left_content[data-v-1d344fa2]{padding-left:%?20?%}.header_left_content_name[data-v-1d344fa2]{font-weight:700}.header_left_content_number[data-v-1d344fa2]{color:#969799;font-size:%?26?%}.header_right[data-v-1d344fa2]{font-size:%?28?%;color:#969799}.header uni-image[data-v-1d344fa2]{width:%?100?%;height:%?100?%;border-radius:%?6?%}.status_bar[data-v-1d344fa2]{height:0;width:100%}.qrcode_section[data-v-1d344fa2]{width:90%;padding:5%;border-radius:5px;margin:0 auto;margin-top:20%;background:#fff}.qrcode_section .header1[data-v-1d344fa2]{float:left}.qrcode_section .info[data-v-1d344fa2]{float:left;margin-left:%?20?%}.qrcode_section .info .gender[data-v-1d344fa2]{display:inline-block;width:%?40?%;height:%?40?%;vertical-align:middle;margin-left:%?8?%;margin-top:%?-10?%}.qrcode_section .info .gender-male[data-v-1d344fa2]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAsVBMVEUAAABHtvBGtvBmzP////9It/JGtvBHuPFHt/CA//9Kv/RHt+9Gt/BHtu9It/BHuPFIt+9JufBHuPBOxP9HuPBIt/FMuvFGtvBIt+9Ht/BIt/JGtvBOvPRHt/BKvfdNufBHt/BGt/BIt/JHt+9JtvJGtu////+34vip3fe64/lwxvJHtu/v+P3g8vxMuO9+zPNNuO+EzvTf8vyM0fWR0/VbvvBWvPDl9PyV1fVLuO9It+9EB+HiAAAAJXRSTlMA58gFAV/PbM0CGPF49WNIIEKdDYR8Je+kvzzLF8kfIar+TuZNWbDWOQAAANdJREFUeAHdzWVywzAYBNA1hZk5KazCUIb7H6zGz+qM5P/tu8DD/+CV3XrdLXsoUCsxVqrBqlphqlKFTYuiBQvfoXjwYbamZg2ze2oeYRZQE8CsTU0bZh1qOrBwKVzYdCm6sOox1YNd32HM6aPAgLEBigwZG6LAKOtGsPGD8ecXQ9+v48CH0WxO7j5e3t6fnnfkfAYhVhuGDip2YGizwm9eo8nI8aRCpyMjzYYHzWLJ1FaFtkwtF8hNmbmq0JWZKXIUl7NS5wsFcncUt/3+RnGH3IQWE/xtP2nFNGboYU8HAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-size:contain;background-position:50%}.qrcode_section #qrcode-pic[data-v-1d344fa2]{margin-top:%?40?%}.qrcode_section .desc[data-v-1d344fa2]{font-size:%?24?%;text-align:center;color:#999;margin-top:%?40?%}.clearfix[data-v-1d344fa2]{zoom:1}',""]),t.exports=e},a198:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"qrcode_section"},[n("v-uni-view",{staticClass:"clearfix"},[n("v-uni-view",{staticClass:"header1"},[n("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:t.userInfo.avatar,mode:"aspectFill",alt:""}})],1),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",[n("v-uni-text",[t._v(t._s(t.userInfo.name))]),n("v-uni-text",{staticClass:"gender gender-male"})],1),n("v-uni-text",[t._v("地球 中国")])],1)],1),n("v-uni-view",{attrs:{id:"qrcode-pic"}},[n("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:t.qr_code,mode:"aspectFit",alt:""}})],1),n("v-uni-view",{staticClass:"desc"},[t._v("扫一扫上面的二维码图案，加我")])],1)],1)},o=[]},a9e6:function(t,e,n){"use strict";n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.getUserAvatar=void 0;var a=function(t){var e=parseInt(t)%4;return n("88b3")("./".concat(e,".jpg"))};e.getUserAvatar=a},b512:function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.notifyFriend=e.ws_conn=void 0;var i=a(n("277c")),o=a(n("125f")),r=function(){uni.getStorageSync("userInfo")["id"];var e=o.default.wsUrl+"?token=".concat(i.default.getToken());uni.connectSocket({url:e,header:{"content-type":"application/json"},method:"GET",success:function(){},fail:function(){},complete:function(){}}),uni.onSocketOpen((function(e){t.log("WebSocket连接已打开！")})),uni.onSocketError((function(e){t.log("WebSocket连接打开失败，请检查！")})),uni.onSocketClose((function(e){t.log("WebSocket 已关闭！")}))};e.ws_conn=r;var c=function(t){var e=JSON.stringify(t);uni.sendSocketMessage({data:e})};e.notifyFriend=c}).call(this,n("5a52")["default"])},bec0:function(t,e,n){t.exports=n.p+"static/img/3.e831031b.jpg"},fb8b:function(t,e,n){"use strict";n.r(e);var a=n("5964"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);