(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/result/result"],{"0572":function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return u})},"080a":function(n,t,i){"use strict";i.r(t);var e=i("0572"),u=i("cbb6");for(var o in u)"default"!==o&&function(n){i.d(t,n,function(){return u[n]})}(o);var c=i("2877"),l=Object(c["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=l.exports},1918:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return i.e("components/uni-list/uni-list").then(i.bind(null,"1717"))},u=function(){return i.e("components/uni-list-item/uni-list-item").then(i.bind(null,"91a7"))},o=function(){return i.e("components/uni-icon/uni-icon").then(i.bind(null,"aca4"))},c={components:{uniList:e,uniListItem:u,uniIcon:o},data:function(){return{list:[],id:"",icon:{color:"#ddd",size:"22",type:"location-filled"},iconin:{color:"red",size:"22",type:"location-filled"}}},onLoad:function(t){var i=this,e=t.id;this.id=e,n.request({url:"http://www.hu1tong.com/index.php/index/query?id="+e,method:"GET",data:{},success:function(n){i.list=n.data.data},fail:function(){},complete:function(){}})},methods:{}};t.default=c}).call(this,i("6e42")["default"])},cbb6:function(n,t,i){"use strict";i.r(t);var e=i("1918"),u=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);t["default"]=u.a}},[["3922","common/runtime","common/vendor"]]]);