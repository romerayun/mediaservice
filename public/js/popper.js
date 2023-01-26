!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,(function(){"use strict";function e(e){return e&&"[object Function]"==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function n(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function o(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var i=t(e),r=i.overflow,s=i.overflowX,a=i.overflowY;return/(auto|scroll|overlay)/.test(r+a+s)?e:o(n(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?K:10===e?Q:K||Q}function s(e){if(!e)return document.documentElement;for(var n=r(10)?document.body:null,o=e.offsetParent||null;o===n&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var i=o&&o.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===t(o,"position")?s(o):o:e?e.ownerDocument.documentElement:document.documentElement}function a(e){return null===e.parentNode?e:a(e.parentNode)}function p(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,i=n?t:e,r=document.createRange();r.setStart(o,0),r.setEnd(i,0);var f=r.commonAncestorContainer;if(e!==f&&t!==f||o.contains(i))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||s(e.firstElementChild)===e)}(f)?f:s(f);var l=a(e);return l.host?p(l.host,t):p(e,a(t).host)}function f(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[n]}return e[n]}function l(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=f(t,"top"),i=f(t,"left"),r=n?-1:1;return e.top+=o*r,e.bottom+=o*r,e.left+=i*r,e.right+=i*r,e}function u(e,t){var n="x"===t?"Left":"Top",o="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+o+"Width"])}function d(e,t,n,o){return z(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],r(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function c(e){var t=e.body,n=e.documentElement,o=r(10)&&getComputedStyle(n);return{height:d("Height",t,n,o),width:d("Width",t,n,o)}}function h(e){return te({},e,{right:e.left+e.width,bottom:e.top+e.height})}function m(e){var n={};try{if(r(10)){n=e.getBoundingClientRect();var o=f(e,"top"),i=f(e,"left");n.top+=o,n.left+=i,n.bottom+=o,n.right+=i}else n=e.getBoundingClientRect()}catch(e){}var s={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},a="HTML"===e.nodeName?c(e.ownerDocument):{},p=a.width||e.clientWidth||s.width,l=a.height||e.clientHeight||s.height,d=e.offsetWidth-p,m=e.offsetHeight-l;if(d||m){var v=t(e);d-=u(v,"x"),m-=u(v,"y"),s.width-=d,s.height-=m}return h(s)}function v(e,n){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],s=r(10),a="HTML"===n.nodeName,p=m(e),f=m(n),u=o(e),d=t(n),c=parseFloat(d.borderTopWidth),v=parseFloat(d.borderLeftWidth);i&&a&&(f.top=z(f.top,0),f.left=z(f.left,0));var g=h({top:p.top-f.top-c,left:p.left-f.left-v,width:p.width,height:p.height});if(g.marginTop=0,g.marginLeft=0,!s&&a){var b=parseFloat(d.marginTop),w=parseFloat(d.marginLeft);g.top-=c-b,g.bottom-=c-b,g.left-=v-w,g.right-=v-w,g.marginTop=b,g.marginLeft=w}return(s&&!i?n.contains(u):n===u&&"BODY"!==u.nodeName)&&(g=l(g,n)),g}function g(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=v(e,n),i=z(n.clientWidth,window.innerWidth||0),r=z(n.clientHeight,window.innerHeight||0),s=t?0:f(n),a=t?0:f(n,"left"),p={top:s-o.top+o.marginTop,left:a-o.left+o.marginLeft,width:i,height:r};return h(p)}function b(e){var o=e.nodeName;if("BODY"===o||"HTML"===o)return!1;if("fixed"===t(e,"position"))return!0;var i=n(e);return!!i&&b(i)}function w(e){if(!e||!e.parentElement||r())return document.documentElement;for(var n=e.parentElement;n&&"none"===t(n,"transform");)n=n.parentElement;return n||document.documentElement}function y(e,t,r,s){var a=4<arguments.length&&void 0!==arguments[4]&&arguments[4],f={top:0,left:0},l=a?w(e):p(e,i(t));if("viewport"===s)f=g(l,a);else{var u;"scrollParent"===s?"BODY"===(u=o(n(t))).nodeName&&(u=e.ownerDocument.documentElement):u="window"===s?e.ownerDocument.documentElement:s;var d=v(u,l,a);if("HTML"!==u.nodeName||b(l))f=d;else{var h=c(e.ownerDocument),m=h.height,y=h.width;f.top+=d.top-d.marginTop,f.bottom=m+d.top,f.left+=d.left-d.marginLeft,f.right=y+d.left}}var O="number"==typeof(r=r||0);return f.left+=O?r:r.left||0,f.top+=O?r:r.top||0,f.right-=O?r:r.right||0,f.bottom-=O?r:r.bottom||0,f}function O(e){return e.width*e.height}function _(e,t,n,o,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=y(n,o,r,i),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map((function(e){return te({key:e},a[e],{area:O(a[e])})})).sort((function(e,t){return t.area-e.area})),f=p.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),l=0<f.length?f[0].key:p[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function E(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=o?w(t):p(t,i(n));return v(n,r,o)}function T(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function x(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function N(e,t,n){n=n.split("-")[0];var o=T(e),i={width:o.width,height:o.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",p=r?"height":"width",f=r?"width":"height";return i[s]=t[s]+t[p]/2-o[p]/2,i[a]=n===a?t[a]-o[f]:t[x(a)],i}function L(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function k(t,n,o){var i=void 0===o?t:t.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=L(e,(function(e){return e[t]===n}));return e.indexOf(o)}(t,"name",o));return i.forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&e(o)&&(n.offsets.popper=h(n.offsets.popper),n.offsets.reference=h(n.offsets.reference),n=o(n,t))})),n}function C(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=E(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=_(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=N(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=k(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function D(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function S(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var i=t[o],r=i?""+i+n:e;if(void 0!==document.body.style[r])return r}return null}function F(){return this.state.isDestroyed=!0,D(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[S("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e){var t=e.ownerDocument;return t?t.defaultView:window}function A(e,t,n,i){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(t,n,{passive:!0}),r||A(o(s.parentNode),t,n,i),i.push(s)}function M(e,t,n,i){n.updateBound=i,H(e).addEventListener("resize",n.updateBound,{passive:!0});var r=o(e);return A(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function P(){this.state.eventsEnabled||(this.state=M(this.reference,this.options,this.state,this.scheduleUpdate))}function B(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return H(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function j(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function W(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&j(t[n])&&(o="px"),e.style[n]=t[n]+o}))}function I(e,t,n){var o=L(e,(function(e){return e.name===t})),i=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!i){var r="`"+t+"`";console.warn("`"+n+"` modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return i}function R(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=ie.indexOf(e),o=ie.slice(n+1).concat(ie.slice(0,n));return t?o.reverse():o}function q(e,t,n,o){var i=[0,0],r=-1!==["right","left"].indexOf(o),s=e.split(/(\+|\-)/).map((function(e){return e.trim()})),a=s.indexOf(L(s,(function(e){return-1!==e.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var p=/\s*,\s*|\s+/,f=-1===a?[s]:[s.slice(0,a).concat([s[a].split(p)[0]]),[s[a].split(p)[1]].concat(s.slice(a+1))];return f=f.map((function(e,o){var i=(1===o?!r:r)?"height":"width",s=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],s=i[2];if(!r)return e;if(0===s.indexOf("%")){return h("%p"===s?n:o)[t]/100*r}return"vh"===s||"vw"===s?("vh"===s?z(document.documentElement.clientHeight,window.innerHeight||0):z(document.documentElement.clientWidth,window.innerWidth||0))/100*r:r}(e,i,t,n)}))})),f.forEach((function(e,t){e.forEach((function(n,o){j(n)&&(i[t]+=n*("-"===e[o-1]?-1:1))}))})),i}var U=Math.min,Y=Math.floor,V=Math.round,z=Math.max,G="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,X=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(G&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),J=G&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),X))}},K=G&&!(!window.MSInputMethodContext||!document.documentMode),Q=G&&/MSIE 10/.test(navigator.userAgent),Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),ee=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},te=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ne=G&&/Firefox/i.test(navigator.userAgent),oe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ie=oe.slice(3),re="flip",se="clockwise",ae="counterclockwise",pe=function(){function t(n,o){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Z(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=J(this.update.bind(this)),this.options=te({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=n&&n.jquery?n[0]:n,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(te({},t.Defaults.modifiers,r.modifiers)).forEach((function(e){i.options.modifiers[e]=te({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return te({name:e},i.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return $(t,[{key:"update",value:function(){return C.call(this)}},{key:"destroy",value:function(){return F.call(this)}},{key:"enableEventListeners",value:function(){return P.call(this)}},{key:"disableEventListeners",value:function(){return B.call(this)}}]),t}();return pe.Utils=("undefined"==typeof window?global:window).PopperUtils,pe.placements=oe,pe.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var i=e.offsets,r=i.reference,s=i.popper,a=-1!==["bottom","top"].indexOf(n),p=a?"left":"top",f=a?"width":"height",l={start:ee({},p,r[p]),end:ee({},p,r[p]+r[f]-s[f])};e.offsets.popper=te({},s,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,i=e.placement,r=e.offsets,s=r.popper,a=r.reference,p=i.split("-")[0];return n=j(+o)?[+o,0]:q(o,s,a,p),"left"===p?(s.top+=n[0],s.left-=n[1]):"right"===p?(s.top+=n[0],s.left+=n[1]):"top"===p?(s.left+=n[0],s.top-=n[1]):"bottom"===p&&(s.left+=n[0],s.top+=n[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||s(e.instance.popper);e.instance.reference===n&&(n=s(n));var o=S("transform"),i=e.instance.popper.style,r=i.top,a=i.left,p=i[o];i.top="",i.left="",i[o]="";var f=y(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);i.top=r,i.left=a,i[o]=p,t.boundaries=f;var l=t.priority,u=e.offsets.popper,d={primary:function(e){var n=u[e];return u[e]<f[e]&&!t.escapeWithReference&&(n=z(u[e],f[e])),ee({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=u[n];return u[e]>f[e]&&!t.escapeWithReference&&(o=U(u[n],f[e]-("right"===e?u.width:u.height))),ee({},n,o)}};return l.forEach((function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";u=te({},u,d[t](e))})),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,i=e.placement.split("-")[0],r=Y,s=-1!==["top","bottom"].indexOf(i),a=s?"right":"bottom",p=s?"left":"top",f=s?"width":"height";return n[a]<r(o[p])&&(e.offsets.popper[p]=r(o[p])-n[f]),n[p]>r(o[a])&&(e.offsets.popper[p]=r(o[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,n){var o;if(!I(e.instance.modifiers,"arrow","keepTogether"))return e;var i=n.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],s=e.offsets,a=s.popper,p=s.reference,f=-1!==["left","right"].indexOf(r),l=f?"height":"width",u=f?"Top":"Left",d=u.toLowerCase(),c=f?"left":"top",m=f?"bottom":"right",v=T(i)[l];p[m]-v<a[d]&&(e.offsets.popper[d]-=a[d]-(p[m]-v)),p[d]+v>a[m]&&(e.offsets.popper[d]+=p[d]+v-a[m]),e.offsets.popper=h(e.offsets.popper);var g=p[d]+p[l]/2-v/2,b=t(e.instance.popper),w=parseFloat(b["margin"+u]),y=parseFloat(b["border"+u+"Width"]),O=g-e.offsets.popper[d]-w-y;return O=z(U(a[l]-v,O),0),e.arrowElement=i,e.offsets.arrow=(ee(o={},d,V(O)),ee(o,c,""),o),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(D(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],i=x(o),r=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case re:s=[o,i];break;case se:s=R(o);break;case ae:s=R(o,!0);break;default:s=t.behavior}return s.forEach((function(a,p){if(o!==a||s.length===p+1)return e;o=e.placement.split("-")[0],i=x(o);var f=e.offsets.popper,l=e.offsets.reference,u=Y,d="left"===o&&u(f.right)>u(l.left)||"right"===o&&u(f.left)<u(l.right)||"top"===o&&u(f.bottom)>u(l.top)||"bottom"===o&&u(f.top)<u(l.bottom),c=u(f.left)<u(n.left),h=u(f.right)>u(n.right),m=u(f.top)<u(n.top),v=u(f.bottom)>u(n.bottom),g="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===r&&c||b&&"end"===r&&h||!b&&"start"===r&&m||!b&&"end"===r&&v),y=!!t.flipVariationsByContent&&(b&&"start"===r&&h||b&&"end"===r&&c||!b&&"start"===r&&v||!b&&"end"===r&&m),O=w||y;(d||g||O)&&(e.flipped=!0,(d||g)&&(o=s[p+1]),O&&(r=function(e){return"end"===e?"start":"start"===e?"end":e}(r)),e.placement=o+(r?"-"+r:""),e.offsets.popper=te({},e.offsets.popper,N(e.instance.popper,e.offsets.reference,e.placement)),e=k(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,i=o.popper,r=o.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return i[s?"left":"top"]=r[n]-(a?i[s?"width":"height"]:0),e.placement=x(t),e.offsets.popper=h(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!I(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=L(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,i=e.offsets.popper,r=L(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,p,f=void 0===r?t.gpuAcceleration:r,l=s(e.instance.popper),u=m(l),d={position:i.position},c=function(e,t){var n=e.offsets,o=n.popper,i=n.reference,r=V,s=function(e){return e},a=r(i.width),p=r(o.width),f=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),u=t?f||l||a%2==p%2?r:Y:s,d=t?r:s;return{left:u(1==a%2&&1==p%2&&!l&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:u(o.right)}}(e,2>window.devicePixelRatio||!ne),h="bottom"===n?"top":"bottom",v="right"===o?"left":"right",g=S("transform");if(p="bottom"==h?"HTML"===l.nodeName?-l.clientHeight+c.bottom:-u.height+c.bottom:c.top,a="right"==v?"HTML"===l.nodeName?-l.clientWidth+c.right:-u.width+c.right:c.left,f&&g)d[g]="translate3d("+a+"px, "+p+"px, 0)",d[h]=0,d[v]=0,d.willChange="transform";else{var b="bottom"==h?-1:1,w="right"==v?-1:1;d[h]=p*b,d[v]=a*w,d.willChange=h+", "+v}var y={"x-placement":e.placement};return e.attributes=te({},y,e.attributes),e.styles=te({},d,e.styles),e.arrowStyles=te({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return W(e.instance.popper,e.styles),function(e,t){Object.keys(t).forEach((function(n){!1===t[n]?e.removeAttribute(n):e.setAttribute(n,t[n])}))}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&W(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,i){var r=E(i,t,e,n.positionFixed),s=_(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),W(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},pe})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("popper.js")):"function"==typeof define&&define.amd?define(["popper.js"],t):e.Tooltip=t(e.Popper)}(this,(function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(){function e(e,t){for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),n=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0,arrowSelector:".tooltip-arrow, .tooltip__arrow",innerSelector:".tooltip-inner, .tooltip__inner"},i=function(){function i(e,t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,i),r.call(this),t=n({},o,t),e.jquery&&(e=e[0]),this.reference=e,this.options=t;var s="string"==typeof t.trigger?t.trigger.split(" ").filter((function(e){return-1!==["click","hover","focus"].indexOf(e)})):[];this._isOpen=!1,this._popperOptions={},this._setEventListeners(e,s,t)}return t(i,[{key:"_create",value:function(e,t,n,o){var i=window.document.createElement("div");i.innerHTML=t.trim();var r=i.childNodes[0];r.id="tooltip_"+Math.random().toString(36).substr(2,10),r.setAttribute("aria-hidden","false");var s=i.querySelector(this.options.innerSelector);return this._addTitleContent(e,n,o,s),r}},{key:"_addTitleContent",value:function(e,t,n,o){1===t.nodeType||11===t.nodeType?n&&o.appendChild(t):function(e){return e&&"[object Function]"==={}.toString.call(e)}(t)?this._addTitleContent(e,t.call(e),n,o):n?o.innerHTML=t:o.textContent=t}},{key:"_show",value:function(t,o){if(this._isOpen&&!this._isOpening)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.visibility="visible",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.update(),this;var i=t.getAttribute("title")||o.title;if(!i)return this;var r=this._create(t,o.template,i,o.html);t.setAttribute("aria-describedby",r.id);var s=this._findContainer(o.container,t);return this._append(r,s),this._popperOptions=n({},o.popperOptions,{placement:o.placement}),this._popperOptions.modifiers=n({},this._popperOptions.modifiers,{arrow:n({},this._popperOptions.modifiers&&this._popperOptions.modifiers.arrow,{element:o.arrowSelector}),offset:n({},this._popperOptions.modifiers&&this._popperOptions.modifiers.offset,{offset:o.offset||this._popperOptions.modifiers&&this._popperOptions.modifiers.offset&&this._popperOptions.modifiers.offset.offset||o.offset})}),o.boundariesElement&&(this._popperOptions.modifiers.preventOverflow={boundariesElement:o.boundariesElement}),this.popperInstance=new e(t,r,this._popperOptions),this._tooltipNode=r,this}},{key:"_hide",value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.visibility="hidden",this._tooltipNode.setAttribute("aria-hidden","true"),this):this}},{key:"_dispose",value:function(){var e=this;return this._events.forEach((function(t){var n=t.func,o=t.event;e.reference.removeEventListener(o,n)})),this._events=[],this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),!this.popperInstance.options.removeOnDestroy&&(this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null)),this}},{key:"_findContainer",value:function(e,t){return"string"==typeof e?e=window.document.querySelector(e):!1===e&&(e=t.parentNode),e}},{key:"_append",value:function(e,t){t.appendChild(e)}},{key:"_setEventListeners",value:function(e,t,n){var o=this,i=[],r=[];t.forEach((function(e){"hover"===e?(i.push("mouseenter"),r.push("mouseleave")):"focus"===e?(i.push("focus"),r.push("blur")):"click"===e&&(i.push("click"),r.push("click"))})),i.forEach((function(t){var i=function(t){!0===o._isOpening||(t.usedByTooltip=!0,o._scheduleShow(e,n.delay,n,t))};o._events.push({event:t,func:i}),e.addEventListener(t,i)})),r.forEach((function(t){var i=function(t){!0===t.usedByTooltip||o._scheduleHide(e,n.delay,n,t)};o._events.push({event:t,func:i}),e.addEventListener(t,i),"click"===t&&n.closeOnClickOutside&&document.addEventListener("mousedown",(function(t){if(o._isOpening){var n=o.popperInstance.popper;e.contains(t.target)||n.contains(t.target)||i(t)}}),!0)}))}},{key:"_scheduleShow",value:function(e,t,n){var o=this;this._isOpening=!0;var i=t&&t.show||t||0;this._showTimeout=window.setTimeout((function(){return o._show(e,n)}),i)}},{key:"_scheduleHide",value:function(e,t,n,o){var i=this;this._isOpening=!1;var r=t&&t.hide||t||0;window.clearTimeout(this._showTimeout),window.setTimeout((function(){if(!1!==i._isOpen&&document.body.contains(i._tooltipNode)){if("mouseleave"===o.type)if(i._setTooltipNodeEvent(o,e,t,n))return;i._hide(e,n)}}),r)}},{key:"_updateTitleContent",value:function(e){if(void 0!==this._tooltipNode){var t=this._tooltipNode.querySelector(this.options.innerSelector);this._clearTitleContent(t,this.options.html,this.reference.getAttribute("title")||this.options.title),this._addTitleContent(this.reference,e,this.options.html,t),this.options.title=e,this.popperInstance.update()}else void 0!==this.options.title&&(this.options.title=e)}},{key:"_clearTitleContent",value:function(e,t,n){1===n.nodeType||11===n.nodeType?t&&e.removeChild(n):t?e.innerHTML="":e.textContent=""}}]),i}(),r=function(){var e=this;this.show=function(){return e._show(e.reference,e.options)},this.hide=function(){return e._hide()},this.dispose=function(){return e._dispose()},this.toggle=function(){return e._isOpen?e.hide():e.show()},this.updateTitleContent=function(t){return e._updateTitleContent(t)},this._events=[],this._setTooltipNodeEvent=function(t,n,o,i){var r=t.relatedreference||t.toElement||t.relatedTarget;return!!e._tooltipNode.contains(r)&&(e._tooltipNode.addEventListener(t.type,(function o(r){var s=r.relatedreference||r.toElement||r.relatedTarget;e._tooltipNode.removeEventListener(t.type,o),n.contains(s)||e._scheduleHide(n,i.delay,i,r)})),!0)}};return i}));
