!function(a){var r={};function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=699)}({699:function(e,t,a){"use strict";function p(){$(".base").addClass("baseAnim"),$(".words").addClass("wordsAnim"),$(".tangram").addClass("tangramAnim")}function c(){$(".base").removeClass("baseAnim"),$(".words").removeClass("wordsAnim"),$(".tangram").removeClass("tangramAnim")}var u,f,v,g,m;g=v=u=null,m=f=!1,$(document).ready(function(){var t=$(window),a=$('.stripe[data-parallax="hero"],.parallax-stripe[data-parallax="hero"]'),e=$('.stripe[data-parallax="overlap"],.parallax-stripe[data-parallax="overlap"]'),r=a.attr("data-parallax-method")||"padding",n=parseInt(a.css("padding-top")),o=null;"translate"===r&&(o=a.find(".js-parallax-translate"));var i=$("#js-box-anim-trigger"),l=0;0<i.length&&(l=i.offset().top-100);var s=0;0<e.length&&(s=e.offset().top),(v=document.getElementById("video-game"))&&!isMobile&&(g=$("#js-video-trigger").offset().top-400),p(),timedCarousels.decorateAll();var d=!isMobile;!d||0!==a.length&&(a.height(),a.data("stripe-height")&&parseInt(a.data("stripe-height")),a.clone().css({visibility:"hidden"}).insertAfter(a),a.css({position:"fixed","z-index":-1,width:"100%",overflow:"hidden"}),a.children(".mp-video-play").css({}),$("<div></div>").addClass("parallax-transparent").css({"background-color":"black",opacity:"0",position:"absolute",top:0,left:0,width:"100%",height:"100%"}).appendTo(a)),t.on("scroll",function(){!function(){if(u=t.scrollTop(),!f&&l<u&&(c(),f=!0),f&&u<l&&(p(),f=!1),g&&!m&&g<u&&(v.play(),m=!0),d&&u<s){$(".parallax-transparent").css({opacity:u/s});var e=n*(u/s);"padding"===r?(a.css({"padding-top":n-e}),a.find(".parallax-fixed").css({position:"relative","z-index":-1,top:e})):"translate"===r&&o.css({transform:"translate(0, "+-e+"px)"})}}()}),isTouchDevice||$(".btn-buy").hover(function(){p()},function(){c()})})}});