(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,6],{260:function(t,n,e){var content=e(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(83).default)("62df22da",content,!0,{sourceMap:!1})},261:function(t,n,e){var content=e(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(83).default)("14eb153f",content,!0,{sourceMap:!1})},262:function(t,n,e){"use strict";e(260)},263:function(t,n,e){var r=e(82)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nnav[data-v-2d43dafa]{\n  justify-content:space-around\n}\nnav[data-v-2d43dafa],nav ul[data-v-2d43dafa]{\n  display:flex\n}\nnav ul[data-v-2d43dafa]{\n  justify-content:space-between\n}\nnav li[data-v-2d43dafa]{\n  margin:20px 50px;\n  font-size:20px;\n  list-style:none\n}\n.nav-link[data-v-2d43dafa]{\n  text-decoration:none;\n  color:#fff\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},264:function(t,n,e){"use strict";e(261)},265:function(t,n,e){var r=e(82)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-efac8a88]{\n  text-align:center\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},266:function(t,n,e){"use strict";e.r(n);e(262);var r=e(33),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("nav",[e("ul",[e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog/"}},[t._v("Articles")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/gallery/"}},[t._v("Gallery")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"#"}},[t._v("Contact")])],1)])])])}),[],!1,null,"2d43dafa",null);n.default=component.exports},267:function(t,n,e){"use strict";e.r(n);e(264);var r=e(33),component=Object(r.a)({},(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("p",[t._v("Lucas Cummings ©2021")])])}],!1,null,"efac8a88",null);n.default=component.exports},276:function(t,n,e){var content=e(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(83).default)("69009bfe",content,!0,{sourceMap:!1})},285:function(t,n,e){"use strict";e(276)},286:function(t,n,e){var r=e(82)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\narticle[data-v-c91f74ee]{\n  margin-bottom:33rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},307:function(t,n,e){"use strict";e.r(n);var r=e(7),o=(e(41),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,t.error,n.prev=1,n.next=4,e("blog/".concat(r.slug)).fetch();case 4:return o=n.sent,n.abrupt("return",{post:o});case 8:n.prev=8,n.t0=n.catch(1),n.t0("No article found");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}),c=(e(285),e(33)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("GlobalNav"),t._v(" "),e("article",[e("h2",{staticClass:"text-6xl"},[t._v(t._s(t.post.title))]),t._v(" "),e("p",[t._v(t._s(t.post.description))]),t._v(" "),e("nuxt-content",{attrs:{document:t.post}})],1),t._v(" "),e("MyFooter")],1)}),[],!1,null,"c91f74ee",null);n.default=component.exports;installComponents(component,{GlobalNav:e(266).default,MyFooter:e(267).default})}}]);