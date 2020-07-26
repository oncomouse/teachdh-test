!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).R={})}(this,function(t){"use strict";function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return null!=t&&"object"===p(t)&&!0===t["@@functional/placeholder"]}function o(e){return function t(n){return 0===arguments.length||f(n)?t:e.apply(this,arguments)}}function s(t,s){switch(t){case 0:return function(){return s.apply(this,arguments)};case 1:return function(t){return s.apply(this,arguments)};case 2:return function(t,n){return s.apply(this,arguments)};case 3:return function(t,n,e){return s.apply(this,arguments)};case 4:return function(t,n,e,r){return s.apply(this,arguments)};case 5:return function(t,n,e,r,u){return s.apply(this,arguments)};case 6:return function(t,n,e,r,u,i){return s.apply(this,arguments)};case 7:return function(t,n,e,r,u,i,o){return s.apply(this,arguments)};case 8:return function(t,n,e,r,u,i,o,a){return s.apply(this,arguments)};case 9:return function(t,n,e,r,u,i,o,a,c){return s.apply(this,arguments)};case 10:return function(t,n,e,r,u,i,o,a,c,f){return s.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function n(r){return function t(n,e){switch(arguments.length){case 0:return t;case 1:return f(n)?t:o(function(t){return r(n,t)});default:return f(n)&&f(e)?t:f(n)?o(function(t){return r(t,e)}):f(e)?o(function(t){return r(n,t)}):r(n,e)}}}var u=n(function(t,n){return 1===t?o(n):s(t,function i(o,a,c){return function(){for(var t,n=[],e=0,r=o,u=0;u<a.length||e<arguments.length;)u<a.length&&(!f(a[u])||arguments.length<=e)?t=a[u]:(t=arguments[e],e+=1),f(n[u]=t)||--r,u+=1;return r<=0?c.apply(this,n):s(r,i(o,n,c))}}(t,[],n))}),e=o(function(t){return u(t.length,t)});function r(t,n){return function(){return n.call(this,t.apply(this,arguments))}}function i(i){return function t(e,r,u){switch(arguments.length){case 0:return t;case 1:return f(e)?t:n(function(t,n){return i(e,t,n)});case 2:return f(e)&&f(r)?t:f(e)?n(function(t,n){return i(t,r,n)}):f(r)?n(function(t,n){return i(e,t,n)}):o(function(t){return i(e,r,t)});default:return f(e)&&f(r)&&f(u)?t:f(e)&&f(r)?n(function(t,n){return i(t,n,u)}):f(e)&&f(u)?n(function(t,n){return i(t,r,n)}):f(r)&&f(u)?n(function(t,n){return i(e,t,n)}):f(e)?o(function(t){return i(t,r,u)}):f(r)?o(function(t){return i(e,t,u)}):f(u)?o(function(t){return i(e,r,t)}):i(e,r,u)}}}var a=Array.isArray||function(t){return null!=t&&0<=t.length&&"[object Array]"===Object.prototype.toString.call(t)};function c(t){return"[object String]"===Object.prototype.toString.call(t)}var l=o(function(t){return!!a(t)||!!t&&("object"===p(t)&&(!c(t)&&(0===t.length||0<t.length&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))});function y(t){this.f=t}y.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},y.prototype["@@transducer/result"]=function(t){return t},y.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)};var h=n(function(t,n){return s(t.length,function(){return t.apply(n,arguments)})});function d(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function g(t,n,e,r){return t["@@transducer/result"](e[r](h(t["@@transducer/step"],t),n))}var v="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function m(t,n,e){if("function"==typeof t&&(t=new y(t)),l(e))return function(t,n,e){for(var r=0,u=e.length;r<u;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"==typeof e["fantasy-land/reduce"])return g(t,n,e,"fantasy-land/reduce");if(null!=e[v])return d(t,n,e[v]());if("function"==typeof e.next)return d(t,n,e);if("function"==typeof e.reduce)return g(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}var b=i(m);function _(e,r){return function(){var t=arguments.length;if(0===t)return r();var n=arguments[t-1];return a(n)||"function"!=typeof n[e]?r.apply(this,arguments):n[e].apply(n,Array.prototype.slice.call(arguments,0,t-1))}}var S=i(_("slice",function(t,n,e){return Array.prototype.slice.call(e,t,n)})),O=o(_("tail",S(1,1/0)));function j(r,u,i){return function(){if(0===arguments.length)return i();var t,n=arguments[arguments.length-1];if(!a(n)){for(var e=0;e<r.length;){if("function"==typeof n[r[e]])return n[r[e]].apply(n,Array.prototype.slice.call(arguments,0,-1));e+=1}if(null!=(t=n)&&"function"==typeof t["@@transducer/step"])return u.apply(null,Array.prototype.slice.call(arguments,0,-1))(n)}return i.apply(this,arguments)}}var w=function(){return this.xf["@@transducer/init"]()},A=function(t){return this.xf["@@transducer/result"](t)};function x(t,n){this.xf=n,this.f=t}x.prototype["@@transducer/init"]=w,x.prototype["@@transducer/result"]=A,x.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))};var q=n(function(t,n){return new x(t,n)});function k(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var E=Object.prototype.toString,z=function(){return"[object Arguments]"===E.call(arguments)?function(t){return"[object Arguments]"===E.call(t)}:function(t){return k("callee",t)}}(),I=!{toString:null}.propertyIsEnumerable("toString"),N=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],P=function(){return arguments.propertyIsEnumerable("length")}(),U="function"!=typeof Object.keys||P?o(function(t){if(Object(t)!==t)return[];var n,e,r=[],u=P&&z(t);for(n in t)!k(n,t)||u&&"length"===n||(r[r.length]=n);if(I)for(e=N.length-1;0<=e;)k(n=N[e],t)&&!function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1}(r,n)&&(r[r.length]=n),--e;return r}):o(function(t){return Object(t)!==t?[]:Object.keys(t)}),F=n(j(["fantasy-land/map","map"],q,function(e,r){switch(Object.prototype.toString.call(r)){case"[object Function]":return u(r.length,function(){return e.call(this,r.apply(this,arguments))});case"[object Object]":return m(function(t,n){return t[n]=e(r[n]),t},{},U(r));default:return function(t,n){for(var e=0,r=n.length,u=Array(r);e<r;)u[e]=t(n[e]),e+=1;return u}(e,r)}})),B=Number.isInteger||function(t){return t<<0===t},C=n(function(t,n){var e=t<0?n.length+t:t;return c(n)?n.charAt(e):n[e]}),R=n(function(t,n){if(null!=n)return B(t)?C(t,n):n[t]}),D=n(function(t,n){return F(R(t),n)});var M,L=o((M=!0,function t(n){for(var e,r,u,i=[],o=0,a=n.length;o<a;){if(l(n[o]))for(u=0,r=(e=M?t(n[o]):n[o]).length;u<r;)i[i.length]=e[u],u+=1;else i[i.length]=n[o];o+=1}return i}));var T=o(function(t){return t});function W(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}function X(t,n,e){for(var r=0,u=e.length;r<u;){if(t(n,e[r]))return 1;r+=1}}var G="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n},H=o(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});function J(t,n,e,r){var u=W(t);function i(t,n){return K(t,n,e.slice(),r.slice())}return!X(function(t,n){return!X(i,n,t)},W(n),u)}function K(t,n,e,r){if(G(t,n))return!0;var u,i,o=H(t);if(o!==H(n))return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(o){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(i=String(u).match(/^function (\w*)/))?"":i[1]))return t===n;break;case"Boolean":case"Number":case"String":if(p(t)!==p(n)||!G(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!G(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var a=e.length-1;0<=a;){if(e[a]===t)return r[a]===n;--a}switch(o){case"Map":return t.size!==n.size?!1:J(t.entries(),n.entries(),e.concat([t]),r.concat([n]));case"Set":return t.size!==n.size?!1:J(t.values(),n.values(),e.concat([t]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=U(t);if(c.length!==U(n).length)return!1;for(var f=e.concat([t]),s=r.concat([n]),a=c.length-1;0<=a;){var l=c[a];if(!k(l,n)||!K(n[l],t[l],f,s))return!1;--a}return!0}var Q=n(function(t,n){return K(t,n,[],[])});function V(t,n,e){var r,u;if("function"==typeof t.indexOf)switch(p(n)){case"number":if(0===n){for(r=1/n;e<t.length;){if(0===(u=t[e])&&1/u==r)return e;e+=1}return-1}if(n==n)return t.indexOf(n,e);for(;e<t.length;){if("number"==typeof(u=t[e])&&u!=u)return e;e+=1}return-1;case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,e);case"object":if(null===n)return t.indexOf(n,e)}for(;e<t.length;){if(Q(t[e],n))return e;e+=1}return-1}function Y(t,n){return 0<=V(n,t,0)}function Z(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}function $(t,n,e){var r,u=p(t);switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!e._items["-0"]||(n&&(e._items["-0"]=!0),!1):null!==e._nativeSet?n?(r=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===r):e._nativeSet.has(t):u in e._items?t in e._items[u]||(n&&(e._items[u][t]=!0),!1):(n&&(e._items[u]={},e._items[u][t]=!0),!1);case"boolean":if(u in e._items){var i=t?1:0;return!!e._items[u][i]||(n&&(e._items[u][i]=!0),!1)}return n&&(e._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==e._nativeSet?n?(r=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===r):e._nativeSet.has(t):u in e._items?!!Y(t,e._items[u])||(n&&e._items[u].push(t),!1):(n&&(e._items[u]=[t]),!1);case"undefined":return!!e._items[u]||(n&&(e._items[u]=!0),!1);case"object":if(null===t)return!!e._items.null||(n&&(e._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in e._items?!!Y(t,e._items[u])||(n&&e._items[u].push(t),!1):(n&&(e._items[u]=[t]),!1)}}Z.prototype.add=function(t){return!$(t,!0,this)},Z.prototype.has=function(t){return $(t,!1,this)};var tt=n(function(t,n){for(var e,r,u=new Z,i=[],o=0;o<n.length;)e=t(r=n[o]),u.add(e)&&i.push(r),o+=1;return i})(T),nt=n(function(t,n){for(var e in t)if(k(e,t)&&!t[e](n[e]))return!1;return!0});var et=o(function(t){return null!=t&&(n=t.length,"[object Number]"===Object.prototype.toString.call(n))?t.length:NaN;var n}),rt=o(function(t){return!t}),ut=n(function(t,u){return t.map(function(t){for(var n,e=u,r=0;r<t.length;){if(null==e)return;n=t[r],e=B(n)?C(n,e):e[n],r+=1}return e})}),it=n(function(t,n){return ut([t],n)[0]}),ot=n(function(t,n){return"function"!=typeof n.indexOf||a(n)?V(n,t,0):n.indexOf(t)}),at=n(function(t,n){return n<=t});function ct(t,n){this.xf=n,this.f=t}ct.prototype["@@transducer/init"]=w,ct.prototype["@@transducer/result"]=A,ct.prototype["@@transducer/step"]=function(t,n){return this.f(n),this.xf["@@transducer/step"](t,n)};var ft=n(function(t,n){return new ct(t,n)}),st=n(j([],ft,function(t,n){return t(n),n})),lt=o(function(t){return function(){return t}});t.curry=e,t.pipe=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return s(arguments[0].length,b(r,arguments[0],O(arguments)))},t.pluck=D,t.flatten=L,t.uniq=tt,t.map=F,t.where=nt,t.length=et,t.equals=Q,t.not=rt,t.prop=R,t.path=it,t.indexOf=ot,t.gte=at,t.__={"@@functional/placeholder":!0},t.tap=st,t.always=lt,t.identity=T,Object.defineProperty(t,"__esModule",{value:!0})});Bacon.$.init($),$(function(){$.fn.scrollTo=function(t){t=t||0,window.scrollTo({top:$(this)[0].getBoundingClientRect().top+window.pageYOffset+t,behavior:"smooth"})},Stickyfill.add($("#controls"));var e=-1*$("#controls").outerHeight(!0),n="white bg-dark-blue black bg-white hover-bg-moon-gray",a=R.curry(function(t,e){switch(t){case"button":return $(e).toggleClass("f6 grow no-underline br-pill ba ph3 pv2 mb2 mr2 black bg-white b--black hover-bg-moon-gray pointer");case"button-active":return $(e).toggleClass(n);case"category-active":return $(e).toggleClass("white bg-dark-blue black bg-white hover-bg-moon-grayb--moon-gray b--dark-blue");case"title-list":return $(e).toggleClass("mw7 center db pl0");case"title-list-item":return $(e).toggleClass("mv1");case"category-list-item":return $(e).toggleClass("dib");case"controls-tray-visible":return $(e).toggleClass("bb b--black-20");case"tray-visible":return $(e).toggleClass("pointer tooltip relative center bg-white black-20 bt-0 ba b--black-20 mw3 tc db dn br--bottom br2");default:return $(e)}}),r=Array.from($("article")).map(function(t){return{id:$(t).attr("id"),title:$(t).find("h1").text(),content:$(t).find("main").text(),categories:Array.from($(t).find("header li")).map(function(t){var e=$(t).text();return $(t).attr("data-category",e),e})}});R.pipe(R.pluck("categories"),R.flatten,R.uniq,R.map(function(t){var e=$("<button />");e.html(t),a("button",e),e.attr("data-target",t);var n=$("<li/>");a("category-list-item",n),n.append(e),$("#categories ul").append(n)}),function(){e=-1*$("#controls").outerHeight(!0)})(r);var i={questions:new Fuse(r,{keys:["title","content"]})};function t(n){return function(){var t=n?[]:arguments[0],e=n?"":arguments[1];$("#questions").trigger("filter",{results:t,input:e})}}function o(t,e){return $(t).asEventStream(e,function(t,e){return{input:e.input,results:e.results}})}var l=R.where({results:R.pipe(R.length,R.equals(0)),input:R.pipe(R.length,R.equals(0))}),s=t(!0),c=t(!1),u=o("#titleList","results");u.filter(l).onValue(function(){$("#titleList").html("")}),u.filter(R.pipe(l,R.not)).map(R.prop("results")).onValue(function(t){$("#titleList").html("<ul></ul>"),a("title-list",$("#titleList ul")),R.map(function(t){var e=$.parseHTML('<li><a href="#">'+t.title+"</a></li>");a("title-list-item",e),$(e).find("a").attr("data-result",t.id),$("#titleList ul").append(e)},t)}),$("#titleList").asEventStream("click","a",function(t){return t.preventDefault(),t.target}).onValue(function(t){$("#titleList").hide(),$("#"+$(t).attr("data-result")).scrollTo(e)});var g=o("#questions","filter");g.filter(l).onValue(function(){$("article").show()}),g.filter(R.pipe(l,R.not)).map(R.prop("results")).map(R.pluck("id")).onValue(function(n){$("article").each(function(t,e){0<=n.indexOf($(e).attr("id"))?$(e).show():$(e).hide()})}),$("#searchBar").on("focus",function(){$("#titleList").show()});var p=$("#searchBar").asEventStream("input");p.debounce(150).map(R.path(["target","value"])).onValue(function(t){var e,n,a=(e=i.questions,n=t,R.pluck("item",e.search(n)));c(a,t),$("#titleList").trigger("results",{results:a,input:t})});function f(t){a("category-active",$("#questions").find('[data-category*="'+t+'"]'))}var b=$("#categories").asEventStream("click","button",function(t){return{target:$(t.target).attr("data-target"),button:t.target}});b.onValue(function(t){a("button-active",t.button),f(t.target)}),Bacon.update(null,[b,function(t,e){return t===e.button?(s(),null):(a("button-active",t),null!==t&&f($(t).attr("data-target")),c(r.filter(R.pipe(R.prop("categories"),R.indexOf(e.target),R.gte(R.__,0))),e.target),e.button)}],[p,R.pipe(R.tap(function(t){f($(t).attr("data-target"))}),a("button-active"),s,R.always(null))]).onValue(R.identity);var d=-23;$("#tray").css("bottom",d).css("margin-top",d);var m=$("#tray").asEventStream("click",function(t,e){return void 0===e||e}),h=m.flatMapLatest(function(t){return t?Bacon.once(!0).merge(Bacon.later(500,!1)):Bacon.constant(!1)}).toProperty(!1),v=Bacon.update(!0,[m,function(t){return $("#controls > *").not("#tray")[t?"hide":"show"](),$("#controls").toggleClass("pv1").css("height",t?"0":"auto"),$("#tray").css("bottom",t?0:d).css("margin-top",t?0:d),$("#tray .content").html(t?"&#9660;":"&#9650;"),$("#tray .tooltip__text").html(t?"Click to open menu":"Click to close menu"),!t}]);v.onValue(R.identity);function y(t){window.requestAnimationFrame(function(){a("tray-visible",$("#tray")),a("controls-tray-visible",$("#controls")),$("#questions").css("margin-top",0),t&&$("#tray").trigger("click")})}var w=$(window).asEventStream("scroll",function(){return window.pageYOffset}),k=Bacon.constant($("#controls").outerHeight());Bacon.update(!1,[w,k,v,h,function(t,e,n,a,r){var i=$("#controls")[0].getBoundingClientRect().top;return t||0!==i?t&&0<i?a?(y(),!1):e<=n?(window.requestAnimationFrame(function(){$("#tray").css("margin-top",-1*(e-n)),$("#questions").css("margin-top",e-n)}),!0):r?(window.requestAnimationFrame(function(){$("#tray").css("margin-top",-1*n),$("#questions").css("margin-top",n)}),!0):(y(!0),!1):t:(y(),!0)}]).onValue(R.identity),$("#categories").asEventStream("click","figcaption").scan(!0,function(t){return!t}).onValue(function(t){e=-1*$("#controls").outerHeight(!0),$("#categories ul")[t?"show":"hide"](),$("#categories figcaption span").text(t?"-":"+"),$("#categories figcaption").attr("aria-label","Click to "+(t?"show":"hide")+" category list")})});