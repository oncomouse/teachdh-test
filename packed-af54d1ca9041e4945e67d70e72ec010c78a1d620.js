$(function(){$.fn.scrollTo=function(t){t=t||0,window.scrollTo({top:$(this)[0].getBoundingClientRect().top+window.pageYOffset+t,behavior:"smooth"})},Bacon.$.init($),Stickyfill.add($("#controls"));var e=-1*$("#controls").outerHeight(!0),i=R.curry(function(t,e){switch(t){case"button":return $(e).toggleClass("f6 grow no-underline br-pill ba ph3 pv2 mb2 mr2 black bg-white b--black hover-bg-moon-gray pointer");case"button-active":return $(e).toggleClass("white bg-dark-blue black bg-white hover-bg-moon-gray");case"title-list":return $(e).toggleClass("mw7 center db pl0");case"title-list-item":return $(e).toggleClass("mv1");case"category-list-item":return $(e).toggleClass("dib");default:return $(e)}}),n=Array.from($("article")).map(function(t){return{id:$(t).attr("id"),title:$(t).find("h1").text(),content:$(t).find("main").text(),categories:Array.from($(t).find("header li")).map(function(t){return t.innerText})}});R.pipe(R.pluck("categories"),R.flatten,R.uniq,R.map(function(t){var e=$("<button />");e.html(t),i("button",e),e.attr("data-target",t);var n=$("<li/>");i("category-list-item",n),n.append(e),$("#categories ul").append(n)}))(n);var r={questions:new Fuse(n,{keys:["title","content"]})};function t(n){return function(){var t=n?[]:arguments[0],e=n?"":arguments[1];$("#questions").trigger("filter",{results:t,input:e})}}function a(t,e){return $(t).asEventStream(e,function(t,e){return{input:e.input,results:e.results}})}var l=R.where({results:R.pipe(R.length,R.equals(0)),input:R.pipe(R.length,R.equals(0))}),o=t(!0),u=t(!1),s=a("#titleList","results");s.filter(l).onValue(function(){$("#titleList").html("")}),s.filter(R.pipe(l,R.not)).map(R.prop("results")).onValue(function(t){$("#titleList").html("<ul></ul>"),i("title-list",$("#titleList ul")),R.map(function(t){var e=$.parseHTML('<li><a href="#">'+t.title+"</a></li>");i("title-list-item",e),$(e).find("a").attr("data-result",t.id),$("#titleList ul").append(e)},t)}),$("#titleList").asEventStream("click","a",function(t){return t.preventDefault(),t.target}).onValue(function(t){$("#titleList").hide(),$("#"+$(t).attr("data-result")).scrollTo(e)});var c=a("#questions","filter");c.filter(l).onValue(function(){$("article").show()}),c.filter(R.pipe(l,R.not)).map(R.prop("results")).map(R.pluck("id")).onValue(function(n){$("article").each(function(t,e){0<=n.indexOf($(e).attr("id"))?$(e).show():$(e).hide()})}),$("#searchBar").on("focus",function(){$("#titleList").show()});var p=$("#searchBar").asEventStream("input");p.map(R.path(["target","value"])).onValue(function(t){var e,n,i=(e=r.questions,n=t,R.pluck("item",e.search(n)));u(i,t),$("#titleList").trigger("results",{results:i,input:t})});var f=$("#categories").asEventStream("click","button",function(t){return{target:$(t.target).attr("data-target"),button:t.target}});f.onValue(function(t){i("button-active",t.button)}),Bacon.update(null,[f,function(t,e){return t===e.button?(o(),null):(i("button-active",t),u(n.filter(R.pipe(R.prop("categories"),R.indexOf(e.target),R.gte(R.__,0))),e.target),e.button)}],[p,R.pipe(i("button-active"),o,R.always(null))]).onValue(R.identity)});