!function(c){function e(e){for(var t,r,o=e[0],n=e[1],i=e[2],s=0,a=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(f,r)&&f[r]&&a.push(f[r][0]),f[r]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(c[t]=n[t]);for(d&&d(e);a.length;)a.shift()();return u.push.apply(u,i||[]),l()}function l(){for(var e,t=0;t<u.length;t++){for(var r=u[t],o=!0,n=1;n<r.length;n++){var i=r[n];0!==f[i]&&(o=!1)}o&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var r={},f={40:0},u=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=c,s.c=r,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var t=window.webpackJsonp=window.webpackJsonp||[],o=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var d=o;u.push([773,0]),l()}({729:function(e,t){var r,o,n,i,s,a;window.twttr=(r=document,o="script",n="twitter-wjs",s=r.getElementsByTagName(o)[0],a=window.twttr||{},r.getElementById(n)||((i=r.createElement(o)).id=n,i.src="https://platform.twitter.com/widgets.js",s.parentNode.insertBefore(i,s),a._e=[],a.ready=function(e){a._e.push(e)}),a)},773:function(e,t,r){"use strict";r.r(t);r(729);var o=r(96),s=r.n(o);function C(){$(".js-schools-stripe-four-cs-slider").each(function(e,t){var n=$(t);function i(e){var t=n.find(".js-schools-stripe-four-cs-slider-item").length,r=s()(e,t);n.attr("data-position",""+r)}n.find(".js-schools-stripe-four-cs-slider-arrow").each(function(e,t){var r=$(t),o=r.attr("data-direction");r.click(function(){i(parseInt(n.attr("data-position"))+("left"===o?-1:1))})}),n.find(".js-schools-stripe-four-cs-slider-dot").each(function(e,t){var r=$(t),o=parseInt(r.attr("data-item"));r.click(function(){i(o)})})})}$(function(){var r=$(window);shared.showBanner();var e=$("#teacher-guide");if(0<e.length){var t=e.find(".animated-book");e.find(".btn").mouseover(function(){t.addClass("open")}).mouseout(function(){t.removeClass("open")})}if(0<$(".schools-stripe-for-grades-k-6").length){var o=function(e){if(isMobile){var t=e.find(".js-timed-carousel");0<t.length&&timedCarousels.decorate(t[0],!0)}else{var r=e.find(".js-triggered-video");0<r.length&&r[0].play()}},n=$(".schools-stripe-for-grades-k-6-games-list li"),i=$(".schools-stripe-for-grades-k-6-game"),s=function(e){n.removeClass("active"),e.addClass("active"),i.removeClass("active");var t=$(".schools-stripe-for-grades-k-6-game-"+e.attr("data-game-id"));t.addClass("active");var r=t.find(".schools-stripe-for-grades-k-6-game-main-image-container:first");o(r)},a=window.setInterval(function(){var e=n.filter(".active").next("li");0===e.length&&(e=n),s($(e[0]))},5e3);n.on("click",function(e){e.preventDefault(),window.clearInterval(a),s($(this))}),shared.onScrollInScrollOut(i,function(e,t){if(0<i.length){var r=i.filter(".active").find(".schools-stripe-for-grades-k-6-game-main-image-container:first");o(r),t()}},function(){},.3),$(".schools-stripe-for-grades-k-6-game-images").each(function(){var e=$(this),r=e.find(".schools-stripe-for-grades-k-6-game-previews a"),o=e.find(".schools-stripe-for-grades-k-6-game-main-image-container");r.on("click",function(e){e.preventDefault(),window.clearInterval(a),r.removeClass("active"),o.removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-id");o.filter('[data-id="'+t+'"]').addClass("active")})})}var c=$(".schools-carousel");if(0<c.length){var l=c.find(".schools-carousel-container"),f=l.children().first(),u=c.find(".schools-carousel-previous-button"),d=c.find(".schools-carousel-next-button"),h=f.width(),p=parseInt(f.css("margin-right"));d.on("click",function(e){e.preventDefault(),l.animate({"margin-left":-1*(h+p/2)},600,function(){$(this).css("margin-left",p/2).children().last().after($(this).children().first())})}),u.on("click",function(e){e.preventDefault(),l.css("margin-left",-1*(h+p/2)).children().first().before(l.children().last()),l.animate({"margin-left":p/2},600)})}if(0<$(".schools-stripe-join-community").length){var v=$(".schools-stripe-join-community .js-learn-more-community"),g=$(".schools-stripe-join-community .learn-more-content");v.on("click",function(e){e.preventDefault(),v.hasClass("active")?(v.removeClass("active"),g.slideUp()):(v.addClass("active"),g.slideDown())})}var m=$(".schools-navbar");if(0<m.length){var w,b,y=function(){var e=r.scrollTop()+w,t=b<e;m.toggleClass("navbar-visible",t),m.css("top",t?shared.getTotalToolbarHeight():"")},j=function(){w=m.outerHeight()+shared.getTotalToolbarHeight(),b=k.offset().top+k.outerHeight(),y()},k=$(".stripe-header .osmo-schools-logo");r.on("scroll",y),r.on("resize",j),j()}C()})},96:function(e,t,r){"use strict";var o=r(69);e.exports=function(e,t){if(!t||!o(t)||!o(e))return 0;for(;t<=e;)e-=t;for(;e<0;)e+=t;return e}}});