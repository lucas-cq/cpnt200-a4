(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5],{270:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("f9baf2d0",content,!0,{sourceMap:!1})},271:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("6cdf5f06",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n(270)},273:function(t,e,n){var r=n(82)(!1);r.push([t.i,"nav[data-v-2d43dafa]{justify-content:space-around}nav[data-v-2d43dafa],nav ul[data-v-2d43dafa]{display:flex}nav ul[data-v-2d43dafa]{justify-content:space-between}nav li[data-v-2d43dafa]{margin:20px 50px;font-size:20px;list-style:none}.nav-link[data-v-2d43dafa]{text-decoration:none;color:#fff}",""]),t.exports=r},274:function(t,e,n){"use strict";n(271)},275:function(t,e,n){var r=n(82)(!1);r.push([t.i,"footer[data-v-efac8a88]{text-align:center}",""]),t.exports=r},276:function(t,e,n){"use strict";n.r(e);n(272);var r=n(33),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("ul",[n("li",[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog/"}},[t._v("Articles")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"/gallery/"}},[t._v("Gallery")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"nav-link",attrs:{to:"#"}},[t._v("Contact")])],1)])])])}),[],!1,null,"2d43dafa",null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);n(274);var r=n(33),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("Lucas Cummings ©2021")])])}],!1,null,"efac8a88",null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var r=n(7),l=(n(41),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,t.error,e.prev=1,e.next=4,n("gallery/".concat(r.slug)).fetch();case 4:return l=e.sent,e.abrupt("return",{post:l});case 8:e.prev=8,e.t0=e.catch(1),e.t0("Gallery Not found");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}),o=n(33),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GlobalNav"),t._v(" "),n("section",[n("h2",[t._v(t._s(t.post.title))]),t._v(" "),n("nuxt-img",{attrs:{src:t.post.image}}),t._v(" "),n("p",[t._v("Date Added: "+t._s(t.post.date))])],1),t._v(" "),n("MyFooter")],1)}),[],!1,null,"011a2345",null);e.default=component.exports;installComponents(component,{GlobalNav:n(276).default,MyFooter:n(277).default})}}]);