!function(s){function e(e){for(var t,r,n=e[0],a=e[1],c=e[2],o=0,i=[];o<n.length;o++)r=n[o],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&i.push(u[r][0]),u[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t]);for(f&&f(e);i.length;)i.shift()();return d.push.apply(d,c||[]),l()}function l(){for(var e,t=0;t<d.length;t++){for(var r=d[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==u[c]&&(n=!1)}n&&(d.splice(t--,1),e=o(o.s=r[0]))}return e}var r={},u={31:0},d=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=s,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var f=n;d.push([772,0]),l()}({772:function(e,t,r){"use strict";r.r(t);var o=r(0),i=r(13),s=r(16),l=r(2),u=r(27),d=r(74),n=r(92),f=r.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach(function(e){p(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=["blitzspeeder","dragonblaster","futurismo","purrfectspeed","rocketbox","turbot"],g={blitzspeeder:"Blitzspeeder™",dragonblaster:"Dragon Blaster™",futurismo:"Futurismo™",purrfectspeed:"Purrfect Speed™",rocketbox:"Rocket Box™",turbot:"Turbot™"},w=1e3;function k(e){var t="car"+w++,r=j[e];return{index:e,type:r,name:g[r],key:t}}var x=function(){function c(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=v(this,(e=m(c)).call.apply(e,[this].concat(n))))._mounted=!1,t.state={currentCar:k(0),carStack:[],currentThrowDirection:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,o["a"]),function(e,t,r){t&&y(e.prototype,t),r&&y(e,r)}(c,[{key:"componentDidMount",value:function(){this._mounted=!0}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var r=this,e=this.state,n=e.currentCar,t=e.carStack;e.currentThrowDirection;return Object(o.h)("div",{class:"mindracers-car-selection"},Object(o.h)("div",{class:"mindracers-car-selection-heading"},Object(o.h)("div",{class:"mindracers-car-selection-heading-logo"})),Object(o.h)("div",{class:"mindracers-car-selection-showcase"},[].concat(b(t),[n]).map(function(e){return Object(o.h)("div",{key:e.key,class:"mindracers-car-selection-bg","data-car-type":e.type,"data-throw":e.throw||void 0,"data-arrive":e.arrive||void 0})}),Object(o.h)("div",{class:"container mindracers-car-selection-fg"},Object(o.h)("div",{class:"mindracers-car-selection-car-name-holder"},[].concat(b(t),[n]).map(function(e){return Object(o.h)("h3",{key:e.key,class:"mindracers-car-selection-car-name","data-car-type":e.type,"data-throw":e.throw||void 0,"data-arrive":e.arrive||void 0},Object(o.h)("span",{class:"sr-only"},e.name))})),Object(o.h)("div",{class:"osmo-row","data-justify":"space-evenly","data-wrap":"nowrap","data-v-align":"middle"},Object(o.h)("div",{class:"osmo-col","data-width":"auto"},Object(o.h)("div",{class:"mindracers-car-selection-arrow","data-arrow":"left",onClick:function(){return r.handleClickLeft()}})),Object(o.h)("div",{class:"osmo-col","data-width":"grow-shrink"},Object(o.h)("div",{class:"mindracers-car-selection-car-holder"},[].concat(b(t),[n]).map(function(e){return Object(o.h)("div",{key:e.key,class:"mindracers-car-selection-car","data-car-type":e.type,"data-throw":e.throw||void 0,"data-arrive":e.arrive||void 0})}))),Object(o.h)("div",{class:"osmo-col","data-width":"auto"},Object(o.h)("div",{class:"mindracers-car-selection-arrow","data-arrow":"right",onClick:function(){return r.handleClickRight()}}))))),Object(o.h)("div",{class:"mindracers-car-selection-dots-area"},Object(o.h)("div",{class:"container"},Object(o.h)("div",{class:"mindracers-car-selection-dots"},j.map(function(e,t){return Object(o.h)("div",{key:""+t,class:"mindracers-car-selection-dot-holder osmo-clickable-link",onClick:function(){return r.handleClickDot(t)}},Object(o.h)("div",{class:"mindracers-car-selection-dot","data-selected":t===n.index?"true":void 0}))})))),n.index+1<j.length?Object(o.h)("div",{class:"mindracers-car-selection-precache"},Object(o.h)("div",{class:"mindracers-car-selection-bg","data-car-type":j[n.index+1]}),Object(o.h)("div",{class:"mindracers-car-selection-car","data-car-type":j[n.index+1]}),Object(o.h)("div",{class:"mindracers-car-selection-car-name","data-car-type":j[n.index+1]})):null)}},{key:"setCarIndex",value:function(e,t){var r=this;e=(e%j.length+j.length)%j.length;var n=this.state,a=n.currentCar,c=n.carStack;if(a.index!==e){var o=h({},k(e),{arrive:t}),i=[].concat(b(c),[h({},a,{arrive:null,throw:t})]);this.setState({carStack:i,currentCar:o,currentThrowDirection:t||null}),f()(2e3).then(function(){if(r._mounted){var e=r.state.carStack;0<e.length&&r.setState({carStack:e.slice(1)})}})}}},{key:"handleClickLeft",value:function(){this.setCarIndex(this.state.currentCar.index-1,"right")}},{key:"handleClickRight",value:function(){this.setCarIndex(this.state.currentCar.index+1,"left")}},{key:"handleClickDot",value:function(e){var t=this.state.currentCar.index;e!==t&&this.setCarIndex(e,e<t?"right":"left")}}]),c}();$(function(){$(".js-mindracers-car-selection-target").each(function(e,t){Object(o.j)(Object(o.h)(x,null),t)});var c=void 0;$(".js-mindracers-buy-target").each(function(e,t){var r=$(t);c=c||Object(s.a)();var n="show"===r.attr("data-descr"),a="osmo_mindracers";Object(i.a)(r,c,Object(o.h)(d.a,{skuKey:a,title:Object(u.a)(a),description:Object(l.a)("games.mindracers.stripe.video.text"),gameName:"MindRacers",showDescription:n,buyButtonString:Object(l.a)("landing.general.buyNow.buttonText"),showAgesPlatforms:!0,showRender:!0}),function(e){return!!e.shoppingCart})})})}});