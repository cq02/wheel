webpackJsonp([2],{28:function(t,i,e){"use strict";function s(t){e(50)}Object.defineProperty(i,"__esModule",{value:!0});var r=e(36),n=e(56),a=e(6),o=s,c=a(r.a,n.a,!1,o,null,null);i.default=c.exports},36:function(t,i,e){"use strict";var s=e(7),r=(e(0),e(52)),n=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t};i.a={name:"",data:function(){return{id:0,isshow:!1,ind:[],ids:0,iscity:!1,isc:"",isAlert:!1}},components:{city:r.a,alert:alert},created:function(){this.id=this.$route.query.id},computed:n({},Object(s.d)({list:function(t){return t.index.getCarid}})),methods:n({},Object(s.b)({getCarids:"index/getCarids"}),{cityss:function(t){console.log(t)},aa:function(t){this.iscity=!1},city:function(){this.iscity=!0},alert:function(){this.isAlert=!0},adds:function(t){var i=this,e=[];e.push(t),e.forEach(function(e,s){-1==i.ind.indexOf(e)?i.ind.push(t):(1==i.ind.length?i.ind=[]:i.ind.splice(t,1),i.isshow=!1)}),this.isshow=!0}}),mounted:function(){this.getCarids({id:this.id,remo:"201"})}}},37:function(t,i,e){"use strict";var s=e(7),r=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t};i.a={name:"",data:function(){return{show:!1}},props:["id"],computed:r({},Object(s.d)({cityList:function(t){return t.index.getcityList},cityprivin:function(t){return t.index.cityprivin}})),methods:r({},Object(s.b)({getcity:"index/getcity",getCarids:"index/getCarids",getprovin:"index/getprovin"}),{add:function(t){this.show=!0,this.getprovin(t),this.$refs.part.style.transform="translate3d(0,0,0)",this.$refs.part.style.transition=""},ass:function(){this.show=!1,this.$refs.part.style.transform="translate3d(100%,0,0)",this.$refs.part.style.transition="all 2s ease"},remove:function(t,i){this.show=!1,this.$emit("aa",this.show),this.$emit("cityss",i),this.getCarids({id:this.id,remo:t})}}),mounted:function(){this.getcity()}}},50:function(t,i,e){var s=e(51);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(5)("434875cc",s,!0,{})},51:function(t,i,e){i=t.exports=e(4)(!1),i.push([t.i,"#app,body,html{width:100%;height:100%}#app{background:#eee;font-size:.35rem}.page{width:100%;height:100%;display:flex;position:relative;flex-direction:column;overflow-x:hidden}.page header{width:100%;text-align:center;background:#79cd92;color:#fff}.page header,.page header p{height:.6rem;line-height:.6rem}.page header p{font-size:.25rem;display:flex;justify-content:center;align-items:center}section{flex:1;width:100%;height:100%;overflow-y:auto}section .img{background:#fff}section .img,section .img dl{width:100%;align-items:center;display:flex;font-size:.35rem;height:2rem}section .img dl dt{width:33%;height:183px;margin-left:.25rem;margin-right:.3rem}section .img dl dt img{width:100%;height:100%;border:1px solid #ccc}section .img dl dd{flex:1;padding-right:.2rem;display:flex;align-items:center;justify-content:space-between}section .img dl dd .right{color:#ccc}section .img dl dd .left{line-height:.6rem;font-size:.45rem}section .img dl dd .left .left_two{font-size:.32rem;color:#959595}section .user{width:100%;height:4.9rem;display:flex;flex-direction:column;line-height:.6rem;font-size:.25rem}section .user .user_into{background:#fff;width:100%;font-size:.35rem;padding-top:.2rem}section .user .user_into li{width:96%;margin:0 auto;height:.8rem;line-height:.8rem;border-bottom:1px solid #ccc;background:#fff;padding:.1rem 0}section .user .user_into li span{display:inline-block;width:26%;padding-left:.2rem}section .user .user_into li input{background:#fff;border:0;width:70%;height:.6rem;font-size:.34rem}section .user .user_into .btn{width:100%;display:flex;height:.8rem;align-items:center;justify-content:space-around}section .user .user_into .btn button{width:77%;height:.6rem;background:#3aacff;color:#fff;font-size:.35rem;border:0;border-radius:.2rem}section .user span{padding-left:.2rem}.pri{width:100%;background:#fff}.pri>span{width:100%;height:.6rem;font-size:.28rem;color:#959595;display:inline-block;background:#eee;line-height:.6rem}.pri .pri_into{margin:0 10px;margin-left:1rem}.pri .pri_into li{width:100%;height:2rem;line-height:.6rem;background:#fff;position:relative;border-bottom:3px solid #ccc}.pri .pri_into li div{align-items:center;justify-content:space-between;display:flex;font-size:.29rem}.pri .pri_into li div .top{width:70%;margin-right:10px}.pri .pri_into li .once .top,.top_col{color:#a2a2a2}.pri .pri_into li .pri_col{width:97px;color:#f77}.read{height:.5rem;border-radius:50%;border:2px solid #ccc;position:absolute;top:50%;left:-99px;margin-top:-.6rem;text-align:center;color:#fff}.add,.read,.read span{width:.5rem}.add{text-align:center;height:.5rem;border-radius:50%;border:2px solid #ccc;position:absolute;top:50%;left:-99px;margin-top:-.6rem;background:#3aacff;color:#fff;line-height:.5rem}.add span{width:.5rem}",""])},52:function(t,i,e){"use strict";function s(t){e(53)}var r=e(37),n=e(55),a=e(6),o=s,c=a(r.a,n.a,!1,o,null,null);i.a=c.exports},53:function(t,i,e){var s=e(54);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(5)("f9185374",s,!0,{})},54:function(t,i,e){i=t.exports=e(4)(!1),i.push([t.i,"body,html{width:100%;height:100%}#app{position:relative}#app,.cityList{width:100%;height:100%;overflow-x:hidden}.cityList{position:absolute;top:0;left:0;font-size:.339rem;background:#fff;z-index:99}.cityList li{height:1rem;line-height:1rem;border:1px solid #ccc}.cityList li,.cityList p{width:100%;padding-left:.3rem}.cityList p{height:.6rem;line-height:.6rem;background:#eee;font-size:.28rem}.mask{width:100%;background:rgba(0,0,0,.3);left:0}.mask,.part{height:100%;position:fixed;top:0;overflow-y:auto}.part{width:70%;transform:translate3d(100%,0,0);transition:all 3s ease;right:0;background:#fff}",""])},55:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"cityList"},[e("p",[t._v("自动定位")]),t._v(" "),e("li",[t._v("北京")]),t._v(" "),e("p",[t._v("省市")]),t._v(" "),e("ul",t._l(t.cityList,function(i,s){return e("li",{key:s,on:{click:function(e){t.add(i.CityID,i.CityName)}}},[t._v("\n      "+t._s(i.CityName)+"\n    ")])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mask",on:{click:t.ass}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"part",staticClass:"part"},t._l(t.cityprivin,function(i,s){return e("li",{key:s,on:{click:function(e){t.remove(i.CityID)}}},[t._v("\n      "+t._s(i.CityName)+"\n    ")])}))])},r=[],n={render:s,staticRenderFns:r};i.a=n},56:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page"},[t._m(0),t._v(" "),e("section",[e("div",{staticClass:"img"},[e("dl",[e("dt",[e("img",{attrs:{src:t.list.details.serial.Picture,alt:""}})]),t._v(" "),e("dd",[e("div",{staticClass:"left"},[e("p",{staticClass:"left_one"},[t._v(t._s(t.list.details.serial.AliasName))]),t._v(" "),e("p",{staticClass:"left_two"},[t._v(t._s(t.list.details.market_attribute.year)+"年"+t._s(t.list.details.car_name))])]),t._v(" "),e("div",{staticClass:"right"},[t._v(">")])])])]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v("个人信息")]),t._v(" "),e("ul",{staticClass:"user_into"},[e("li",{on:{click:t.alert}},[e("span",[t._v("姓名")]),e("input",{attrs:{type:"text",placeholder:"输入你的真实中文名字"}})]),t._v(" "),t._m(1),t._v(" "),e("li",{on:{click:t.city}},[e("span",[t._v("城市")]),e("input",{attrs:{type:"text",placeholder:""}})]),t._v(" "),t._m(2)])]),t._v(" "),e("div",{staticClass:"pri"},[e("span",[t._v("选择报价经销商")]),t._v(" "),e("ul",{staticClass:"pri_into"},t._l(t.list.list,function(i,s){return e("li",{key:s},[e("div",{staticClass:"read",on:{click:function(i){t.adds(s)}}},[e("span",[t._v("✔")])]),t._v(" "),-1!=t.ind.indexOf(s)?e("div",{class:t.isshow?"add":"read",on:{click:function(i){t.adds(s)}}},[e("span",[t._v("✔")])]):t._e(),t._v(" "),e("div",[e("p",{staticClass:"top"},[t._v(t._s(i.dealerShortName))]),t._v(" "),e("p",{staticClass:"pri_col"},[t._v(t._s(parseInt(i.promotePrice))+"万")])]),t._v(" "),e("div",{staticClass:"once"},[e("p",{staticClass:"top"},[t._v(t._s(i.address))]),t._v(" "),e("p",{staticClass:"top_col"},[t._v("售"+t._s(i.saleRange))])])])}))])]),t._v(" "),t.iscity?e("city",{ref:"citys",attrs:{id:t.id},on:{aa:t.aa,cityss:t.cityss}}):t._e()],1)},r=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("header",[s("p",[t._v("可向多个商家咨询最低价，商家及时回复"),s("img",{attrs:{src:e(57),alt:""}})])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",[e("span",[t._v("手机")]),e("input",{attrs:{type:"text",placeholder:"输入你的真实手机号码"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"btn"},[e("button",[t._v("询最低价")])])}],n={render:s,staticRenderFns:r};i.a=n},57:function(t,i,e){t.exports=e.p+"user.png?90156ca6e39d4c446d4c69911712954f"}});
//# sourceMappingURL=2.build.js.map