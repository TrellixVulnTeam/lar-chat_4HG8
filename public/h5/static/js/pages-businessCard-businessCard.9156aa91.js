(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-businessCard-businessCard"],{"0043":function(e,t,n){var a=n("6b2a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("68ae50f9",a,!0,{sourceMap:!1,shadowMode:!1})},"125f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={restUrl:"http://chat.4yop.com/api/v1/",wsUrl:"ws://chat.4yop.com/ws/",friendList:"friends",friend:"friend",friendSearch:"friend/search",friendAdd:"friend/add",chat:"chat",toFriend:"send/friend",chatList:"chat/list",chatHide:"chat/hide"},i=a;t.default=i},"1ed1":function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.http_request=void 0;var i=a(n("125f")),r=a(n("277c")),o=function(t){var n=i.default.restUrl+t.url;t.type||(t.type="get"),void 0!=t.noToast&&0!=t.noToast||uni.showToast({icon:"loading",mask:!0}),0==t.setUpUrl&&(n=t.url),t.token=r.default.getToken(),uni.request({url:n,data:t.data,method:t.type,header:{"content-type":"application/json",Accept:"application/json",Authorization:"Bearer "+t.token},success:function(e){uni.hideToast(),t.sCallback&&t.sCallback(e.data)},fail:function(n){uni.hideToast(),e.log(n),t.eCallback&&t.eCallback(res.data)},complete:function(e){401==e.statusCode&&(uni.removeStorageSync("_token"),uni.showToast({title:"未登陆",icon:"none",success:function(){setTimeout((function(){uni.redirectTo({url:"/pages/my/login"})}),1e3)}}))}})};t.http_request=o}).call(this,n("5a52")["default"])},"253a":function(e,t,n){"use strict";n.r(t);var a=n("c8bac"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"277c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={getToken:function(){var t=uni.getStorageSync("_token");return!t||t.expires_time<Date.parse(new Date)/1e3?(uni.removeStorageSync("_token"),e.log(t.expires_time),e.log(Date.parse(new Date)/1e3),e.log("token过期了"),setTimeout((function(){uni.switchTab({url:"/pages/my/login"})}),100),""):t.token?t.token:(uni.removeStorageSync("_token"),e.log("token 空"),setTimeout((function(){uni.switchTab({url:"/pages/my/login"})}),100),"")}},a=n;t.default=a}).call(this,n("5a52")["default"])},"4e1d":function(e,t,n){"use strict";n.r(t);var a=n("97d6"),i=n("253a");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("a227");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"222fdeb0",null,!1,a["a"],o);t["default"]=u.exports},"6b2a":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.perch[data-v-222fdeb0]{height:%?10?%}.userinfo[data-v-222fdeb0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;padding:%?20?% %?30?% %?40?% %?40?%;background-color:#fff}.userinfo .img[data-v-222fdeb0]{display:block;width:%?110?%;height:%?110?%;border-radius:%?10?%}.userinfo-desc[data-v-222fdeb0]{padding-left:%?30?%}.userinfo-desc-name[data-v-222fdeb0]{font-weight:700;font-size:%?36?%;-webkit-transform:translateY(%?-10?%);transform:translateY(%?-10?%)}.userinfo-desc-gray[data-v-222fdeb0]{color:#909399;font-size:%?29?%}',""]),e.exports=t},"97d6":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uCellGroup:n("5d2d").default,uCellItem:n("091d").default,uIcon:n("8f29").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"userinfo"},[n("v-uni-image",{staticClass:"img",attrs:{src:e.userInfo.avatar},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImg(e.userInfo.avatar)}}}),n("v-uni-view",{staticClass:"userinfo-desc"},[n("v-uni-view",{staticClass:"userinfo-desc-name"},[e._v(e._s(e.userInfo.name))]),n("v-uni-view",{staticClass:"userinfo-desc-gray"},[e._v("邮箱："+e._s(e.userInfo.email))])],1)],1),n("v-uni-view",{staticClass:"perch"}),n("u-cell-group",[n("u-cell-item",{attrs:{title:"个性签名",label:e.userInfo.description,"hover-class":"none","title-style":{marginLeft:"10rpx"}}})],1),1==e.userInfo.is_friend?n("v-uni-view",{},[n("v-uni-view",{staticClass:"perch"}),n("u-cell-group",[n("u-cell-item",{attrs:{title:"发消息",arrow:!1,center:!0,"title-style":{marginLeft:"10rpx"}},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.linkToChat.apply(void 0,arguments)}}},[n("u-icon",{attrs:{slot:"icon",name:"chat",color:"#36648B",size:"32"},slot:"icon"})],1)],1)],1):e._e(),0==e.userInfo.is_friend?n("v-uni-view",{},[n("v-uni-view",{staticClass:"perch"}),n("u-cell-group",[n("u-cell-item",{attrs:{title:"添加好友",arrow:!1,center:!0,"title-style":{marginLeft:"10rpx",textAlign:"center"}},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addFriendById(e.userInfo.id)}}},[n("u-icon",{attrs:{slot:"icon",name:"plus",color:"#36648B",size:"32"},slot:"icon"})],1)],1)],1):e._e()],1)},r=[]},a227:function(e,t,n){"use strict";var a=n("0043"),i=n.n(a);i.a},c8bac:function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("125f")),r=n("1ed1"),o={data:function(){return{userInfo:{name:"",email:"",description:"",avatar:""},isItMe:!1}},methods:{linkToChat:function(){var e=this;e.$u.route({url:"pages/chat/chat",params:e.userInfo})},previewImg:function(e){uni.previewImage({urls:[e]})},linkToMoreInfoMation:function(){this.$u.route({url:"pages/moreInforMation/moreInforMation",params:{signature:this.userInfo.signature}})},getFriendById:function(e){var t=this,n={url:"".concat(i.default.friend,"/").concat(e),sCallback:function(e){1==e.code&&e.data&&(t.userInfo=e.data)}};(0,r.http_request)(n)},addFriendById:function(e){var t=this,n={url:i.default.friendAdd,data:{friend_id:e},type:"POST",sCallback:function(e){uni.showToast({title:e.msg?e.msg:"添加失败",duration:2e3,icon:1==e.code?"success":"none",success:function(){1==e.code&&t.linkToChat()}})}};(0,r.http_request)(n)}},onLoad:function(t){e.log(t);var n=this;t&&(n.userInfo=t),n.getFriendById(t.id)}};t.default=o}).call(this,n("5a52")["default"])}}]);