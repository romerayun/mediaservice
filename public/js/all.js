/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/front/js/app.js":
/*!***********************************!*\
  !*** ./resources/front/js/app.js ***!
  \***********************************/
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! For license information please see app.js.LICENSE.txt */
(function () {
  var e,
    t = {
      465: function _(e, t, n) {
        "use strict";

        var i = n(508);
        n.n(i)().replace(), n(44), n(797);
      },
      44: function _(e, t, n) {
        "use strict";

        n.r(t), n.d(t, {
          setTheme: function setTheme() {
            return a;
          },
          toggleDarkTheme: function toggleDarkTheme() {
            return l;
          }
        });
        var i = "theme",
          o = /\btheme-[a-z0-9]+\b/g,
          r = document.getElementById("toggle-dark");
        function l() {
          a(document.body.classList.contains("theme-dark") ? "theme-light" : "theme-dark");
        }
        function a(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          document.body.className = document.body.className.replace(o, ""), document.body.classList.add(e), r && (r.checked = "theme-dark" == e), t || localStorage.setItem(i, e);
        }
        r && r.addEventListener("input", function (e) {
          a(e.target.checked ? "theme-dark" : "theme-light");
        }), document.addEventListener("DOMContentLoaded", function () {
          var e;
          if (e = localStorage.getItem(i)) return a(e);
          if (window.matchMedia) {
            var t = window.matchMedia("(prefers-color-scheme: dark)");
            return t.addEventListener("change", function (e) {
              return a(e.matches ? "theme-dark" : "theme-light", !0);
            }), a(t.matches ? "theme-dark" : "theme-light", !0);
          }
        });
      },
      750: function _() {
        function e(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }
        function n(e, t, n, i) {
          void 0 === t && (t = 400), void 0 === i && (i = !1), e.style.overflow = "hidden", i && (e.style.display = "block");
          var o,
            r = window.getComputedStyle(e),
            l = parseFloat(r.getPropertyValue("height")),
            a = parseFloat(r.getPropertyValue("padding-top")),
            s = parseFloat(r.getPropertyValue("padding-bottom")),
            c = parseFloat(r.getPropertyValue("margin-top")),
            p = parseFloat(r.getPropertyValue("margin-bottom")),
            d = l / t,
            h = a / t,
            u = s / t,
            y = c / t,
            f = p / t;
          window.requestAnimationFrame(function r(x) {
            void 0 === o && (o = x);
            var m = x - o;
            i ? (e.style.height = d * m + "px", e.style.paddingTop = h * m + "px", e.style.paddingBottom = u * m + "px", e.style.marginTop = y * m + "px", e.style.marginBottom = f * m + "px") : (e.style.height = l - d * m + "px", e.style.paddingTop = a - h * m + "px", e.style.paddingBottom = s - u * m + "px", e.style.marginTop = c - y * m + "px", e.style.marginBottom = p - f * m + "px"), m >= t ? (e.style.height = "", e.style.paddingTop = "", e.style.paddingBottom = "", e.style.marginTop = "", e.style.marginBottom = "", e.style.overflow = "", i || (e.style.display = "none"), "function" == typeof n && n()) : window.requestAnimationFrame(r);
          });
        }
        var i = function () {
            function i(t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              e(this, i), this.sidebarEL = t instanceof HTMLElement ? t : document.querySelector(t), this.options = n, this.init();
            }
            var o, r, l;
            return o = i, (r = [{
              key: "init",
              value: function value() {
                var e = this;
                document.querySelectorAll(".burger-btn").forEach(function (t) {
                  return t.addEventListener("click", e.toggle.bind(e));
                }), document.querySelectorAll(".sidebar-hide").forEach(function (t) {
                  return t.addEventListener("click", e.toggle.bind(e));
                }), window.addEventListener("resize", this.onResize.bind(this));
                for (var t = document.querySelectorAll(".sidebar-item.has-sub"), i = function i() {
                    var i = t[o];
                    t[o].querySelector(".sidebar-link").addEventListener("click", function (t) {
                      t.preventDefault();
                      var o,
                        r,
                        l,
                        a = i.querySelector(".submenu");
                      a.classList.contains("active") && (a.style.display = "block"), "none" == a.style.display ? a.classList.add("active") : a.classList.remove("active"), r = 300, l = function l() {
                        return e.forceElementVisibility(i);
                      }, 0 === (o = a).clientHeight ? n(o, r, l, !0) : n(o, r, l);
                    });
                  }, o = 0; o < t.length; o++) {
                  i();
                }
                if ("function" == typeof PerfectScrollbar) {
                  var r = document.querySelector(".sidebar-wrapper");
                  new PerfectScrollbar(r, {
                    wheelPropagation: !1
                  });
                }
                setTimeout(function () {
                  var e;
                  return null === (e = document.querySelector(".sidebar-item.active")) || void 0 === e ? void 0 : e.scrollIntoView(!1);
                }, 100), this.onFirstLoad();
              }
            }, {
              key: "onFirstLoad",
              value: function value() {
                window.innerWidth < 1200 && this.sidebarEL.classList.remove("active");
              }
            }, {
              key: "onResize",
              value: function value() {
                window.innerWidth < 1200 ? this.sidebarEL.classList.remove("active") : this.sidebarEL.classList.add("active"), this.deleteBackdrop(), this.toggleOverflowBody(!0);
              }
            }, {
              key: "toggle",
              value: function value() {
                this.sidebarEL.classList.contains("active") ? this.hide() : this.show();
              }
            }, {
              key: "show",
              value: function value() {
                this.sidebarEL.classList.add("active"), this.createBackdrop(), this.toggleOverflowBody();
              }
            }, {
              key: "hide",
              value: function value() {
                this.sidebarEL.classList.remove("active"), this.deleteBackdrop(), this.toggleOverflowBody();
              }
            }, {
              key: "createBackdrop",
              value: function value() {
                if (!(document.body.clientWidth < 1200)) {
                  this.deleteBackdrop();
                  var e = document.createElement("div");
                  e.classList.add("sidebar-backdrop"), e.addEventListener("click", this.hide.bind(this)), document.body.appendChild(e);
                }
              }
            }, {
              key: "deleteBackdrop",
              value: function value() {
                var e = document.querySelector(".sidebar-backdrop");
                e && e.remove();
              }
            }, {
              key: "toggleOverflowBody",
              value: function value(e) {
                var t = this.sidebarEL.classList.contains("active"),
                  n = document.querySelector("body");
                n.style.overflowY = void 0 === e ? t ? "hidden" : "auto" : e ? "auto" : "hidden";
              }
            }, {
              key: "isElementInViewport",
              value: function value(e) {
                var t = e.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
              }
            }, {
              key: "forceElementVisibility",
              value: function value(e) {
                this.isElementInViewport(e) || e.scrollIntoView(!1);
              }
            }]) && t(o.prototype, r), l && t(o, l), Object.defineProperty(o, "prototype", {
              writable: !1
            }), i;
          }(),
          o = document.getElementById("sidebar");
        o && (window.sidebar = new i(o));
      },
      797: function _(e, t, n) {
        "use strict";

        n.r(t), n.d(t, {
          Sidebar: function Sidebar() {
            return i;
          }
        }), window.PerfectScrollbar = n(225);
        var i = n(750);
      },
      508: function _(e) {
        var t;
        "undefined" != typeof self && self, t = function t() {
          return function (e) {
            var t = {};
            function n(i) {
              if (t[i]) return t[i].exports;
              var o = t[i] = {
                i: i,
                l: !1,
                exports: {}
              };
              return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
            }
            return n.m = e, n.c = t, n.d = function (e, t, i) {
              n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: i
              });
            }, n.r = function (e) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
            }, n.n = function (e) {
              var t = e && e.__esModule ? function () {
                return e["default"];
              } : function () {
                return e;
              };
              return n.d(t, "a", t), t;
            }, n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }, n.p = "", n(n.s = 0);
          }({
            "./dist/icons.json": function distIconsJson(e) {
              e.exports = {
                activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                check: '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                circle: '<circle cx="12" cy="12" r="10"></circle>',
                clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                table: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',
                tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
              };
            },
            "./node_modules/classnames/dedupe.js": function node_modulesClassnamesDedupeJs(e, t, n) {
              var i;
              !function () {
                "use strict";

                var n = function () {
                  function e() {}
                  function t(e, t) {
                    for (var n = t.length, i = 0; i < n; ++i) {
                      o(e, t[i]);
                    }
                  }
                  e.prototype = Object.create(null);
                  var n = {}.hasOwnProperty,
                    i = /\s+/;
                  function o(e, o) {
                    if (o) {
                      var r = _typeof(o);
                      "string" === r ? function (e, t) {
                        for (var n = t.split(i), o = n.length, r = 0; r < o; ++r) {
                          e[n[r]] = !0;
                        }
                      }(e, o) : Array.isArray(o) ? t(e, o) : "object" === r ? function (e, t) {
                        for (var i in t) {
                          n.call(t, i) && (e[i] = !!t[i]);
                        }
                      }(e, o) : "number" === r && function (e, t) {
                        e[t] = !0;
                      }(e, o);
                    }
                  }
                  return function () {
                    for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) {
                      i[o] = arguments[o];
                    }
                    var r = new e();
                    t(r, i);
                    var l = [];
                    for (var a in r) {
                      r[a] && l.push(a);
                    }
                    return l.join(" ");
                  };
                }();
                void 0 !== e && e.exports ? e.exports = n : void 0 === (i = function () {
                  return n;
                }.apply(t, [])) || (e.exports = i);
              }();
            },
            "./node_modules/core-js/es/array/from.js": function node_modulesCoreJsEsArrayFromJs(e, t, n) {
              n("./node_modules/core-js/modules/es.string.iterator.js"), n("./node_modules/core-js/modules/es.array.from.js");
              var i = n("./node_modules/core-js/internals/path.js");
              e.exports = i.Array.from;
            },
            "./node_modules/core-js/internals/a-function.js": function node_modulesCoreJsInternalsAFunctionJs(e, t) {
              e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                return e;
              };
            },
            "./node_modules/core-js/internals/an-object.js": function node_modulesCoreJsInternalsAnObjectJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/is-object.js");
              e.exports = function (e) {
                if (!i(e)) throw TypeError(String(e) + " is not an object");
                return e;
              };
            },
            "./node_modules/core-js/internals/array-from.js": function node_modulesCoreJsInternalsArrayFromJs(e, t, n) {
              "use strict";

              var i = n("./node_modules/core-js/internals/bind-context.js"),
                o = n("./node_modules/core-js/internals/to-object.js"),
                r = n("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),
                l = n("./node_modules/core-js/internals/is-array-iterator-method.js"),
                a = n("./node_modules/core-js/internals/to-length.js"),
                s = n("./node_modules/core-js/internals/create-property.js"),
                c = n("./node_modules/core-js/internals/get-iterator-method.js");
              e.exports = function (e) {
                var t,
                  n,
                  p,
                  d,
                  h = o(e),
                  u = "function" == typeof this ? this : Array,
                  y = arguments.length,
                  f = y > 1 ? arguments[1] : void 0,
                  x = void 0 !== f,
                  m = 0,
                  g = c(h);
                if (x && (f = i(f, y > 2 ? arguments[2] : void 0, 2)), null == g || u == Array && l(g)) for (n = new u(t = a(h.length)); t > m; m++) {
                  s(n, m, x ? f(h[m], m) : h[m]);
                } else for (d = g.call(h), n = new u(); !(p = d.next()).done; m++) {
                  s(n, m, x ? r(d, f, [p.value, m], !0) : p.value);
                }
                return n.length = m, n;
              };
            },
            "./node_modules/core-js/internals/array-includes.js": function node_modulesCoreJsInternalsArrayIncludesJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/to-indexed-object.js"),
                o = n("./node_modules/core-js/internals/to-length.js"),
                r = n("./node_modules/core-js/internals/to-absolute-index.js");
              e.exports = function (e) {
                return function (t, n, l) {
                  var a,
                    s = i(t),
                    c = o(s.length),
                    p = r(l, c);
                  if (e && n != n) {
                    for (; c > p;) {
                      if ((a = s[p++]) != a) return !0;
                    }
                  } else for (; c > p; p++) {
                    if ((e || p in s) && s[p] === n) return e || p || 0;
                  }
                  return !e && -1;
                };
              };
            },
            "./node_modules/core-js/internals/bind-context.js": function node_modulesCoreJsInternalsBindContextJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/a-function.js");
              e.exports = function (e, t, n) {
                if (i(e), void 0 === t) return e;
                switch (n) {
                  case 0:
                    return function () {
                      return e.call(t);
                    };
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 2:
                    return function (n, i) {
                      return e.call(t, n, i);
                    };
                  case 3:
                    return function (n, i, o) {
                      return e.call(t, n, i, o);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              };
            },
            "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": function node_modulesCoreJsInternalsCallWithSafeIterationClosingJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/an-object.js");
              e.exports = function (e, t, n, o) {
                try {
                  return o ? t(i(n)[0], n[1]) : t(n);
                } catch (t) {
                  var r = e["return"];
                  throw void 0 !== r && i(r.call(e)), t;
                }
              };
            },
            "./node_modules/core-js/internals/check-correctness-of-iteration.js": function node_modulesCoreJsInternalsCheckCorrectnessOfIterationJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/well-known-symbol.js")("iterator"),
                o = !1;
              try {
                var r = 0,
                  l = {
                    next: function next() {
                      return {
                        done: !!r++
                      };
                    },
                    "return": function _return() {
                      o = !0;
                    }
                  };
                l[i] = function () {
                  return this;
                }, Array.from(l, function () {
                  throw 2;
                });
              } catch (e) {}
              e.exports = function (e, t) {
                if (!t && !o) return !1;
                var n = !1;
                try {
                  var r = {};
                  r[i] = function () {
                    return {
                      next: function next() {
                        return {
                          done: n = !0
                        };
                      }
                    };
                  }, e(r);
                } catch (e) {}
                return n;
              };
            },
            "./node_modules/core-js/internals/classof-raw.js": function node_modulesCoreJsInternalsClassofRawJs(e, t) {
              var n = {}.toString;
              e.exports = function (e) {
                return n.call(e).slice(8, -1);
              };
            },
            "./node_modules/core-js/internals/classof.js": function node_modulesCoreJsInternalsClassofJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/classof-raw.js"),
                o = n("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),
                r = "Arguments" == i(function () {
                  return arguments;
                }());
              e.exports = function (e) {
                var t, n, l;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                }(t = Object(e), o)) ? n : r ? i(t) : "Object" == (l = i(t)) && "function" == typeof t.callee ? "Arguments" : l;
              };
            },
            "./node_modules/core-js/internals/copy-constructor-properties.js": function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/has.js"),
                o = n("./node_modules/core-js/internals/own-keys.js"),
                r = n("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),
                l = n("./node_modules/core-js/internals/object-define-property.js");
              e.exports = function (e, t) {
                for (var n = o(t), a = l.f, s = r.f, c = 0; c < n.length; c++) {
                  var p = n[c];
                  i(e, p) || a(e, p, s(t, p));
                }
              };
            },
            "./node_modules/core-js/internals/correct-prototype-getter.js": function node_modulesCoreJsInternalsCorrectPrototypeGetterJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/fails.js");
              e.exports = !i(function () {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
              });
            },
            "./node_modules/core-js/internals/create-iterator-constructor.js": function node_modulesCoreJsInternalsCreateIteratorConstructorJs(e, t, n) {
              "use strict";

              var i = n("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,
                o = n("./node_modules/core-js/internals/object-create.js"),
                r = n("./node_modules/core-js/internals/create-property-descriptor.js"),
                l = n("./node_modules/core-js/internals/set-to-string-tag.js"),
                a = n("./node_modules/core-js/internals/iterators.js"),
                s = function s() {
                  return this;
                };
              e.exports = function (e, t, n) {
                var c = t + " Iterator";
                return e.prototype = o(i, {
                  next: r(1, n)
                }), l(e, c, !1, !0), a[c] = s, e;
              };
            },
            "./node_modules/core-js/internals/create-property-descriptor.js": function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(e, t) {
              e.exports = function (e, t) {
                return {
                  enumerable: !(1 & e),
                  configurable: !(2 & e),
                  writable: !(4 & e),
                  value: t
                };
              };
            },
            "./node_modules/core-js/internals/create-property.js": function node_modulesCoreJsInternalsCreatePropertyJs(e, t, n) {
              "use strict";

              var i = n("./node_modules/core-js/internals/to-primitive.js"),
                o = n("./node_modules/core-js/internals/object-define-property.js"),
                r = n("./node_modules/core-js/internals/create-property-descriptor.js");
              e.exports = function (e, t, n) {
                var l = i(t);
                l in e ? o.f(e, l, r(0, n)) : e[l] = n;
              };
            },
            "./node_modules/core-js/internals/define-iterator.js": function node_modulesCoreJsInternalsDefineIteratorJs(e, t, n) {
              "use strict";

              var i = n("./node_modules/core-js/internals/export.js"),
                o = n("./node_modules/core-js/internals/create-iterator-constructor.js"),
                r = n("./node_modules/core-js/internals/object-get-prototype-of.js"),
                l = n("./node_modules/core-js/internals/object-set-prototype-of.js"),
                a = n("./node_modules/core-js/internals/set-to-string-tag.js"),
                s = n("./node_modules/core-js/internals/hide.js"),
                c = n("./node_modules/core-js/internals/redefine.js"),
                p = n("./node_modules/core-js/internals/well-known-symbol.js"),
                d = n("./node_modules/core-js/internals/is-pure.js"),
                h = n("./node_modules/core-js/internals/iterators.js"),
                u = n("./node_modules/core-js/internals/iterators-core.js"),
                y = u.IteratorPrototype,
                f = u.BUGGY_SAFARI_ITERATORS,
                x = p("iterator"),
                m = "keys",
                g = "values",
                v = "entries",
                j = function j() {
                  return this;
                };
              e.exports = function (e, t, n, p, u, b, w) {
                o(n, t, p);
                var _,
                  M,
                  k,
                  A = function A(e) {
                    if (e === u && O) return O;
                    if (!f && e in S) return S[e];
                    switch (e) {
                      case m:
                      case g:
                      case v:
                        return function () {
                          return new n(this, e);
                        };
                    }
                    return function () {
                      return new n(this);
                    };
                  },
                  L = t + " Iterator",
                  H = !1,
                  S = e.prototype,
                  z = S[x] || S["@@iterator"] || u && S[u],
                  O = !f && z || A(u),
                  Y = "Array" == t && S.entries || z;
                if (Y && (_ = r(Y.call(new e())), y !== Object.prototype && _.next && (d || r(_) === y || (l ? l(_, y) : "function" != typeof _[x] && s(_, x, j)), a(_, L, !0, !0), d && (h[L] = j))), u == g && z && z.name !== g && (H = !0, O = function O() {
                  return z.call(this);
                }), d && !w || S[x] === O || s(S, x, O), h[t] = O, u) if (M = {
                  values: A(g),
                  keys: b ? O : A(m),
                  entries: A(v)
                }, w) for (k in M) {
                  (f || H || !(k in S)) && c(S, k, M[k]);
                } else i({
                  target: t,
                  proto: !0,
                  forced: f || H
                }, M);
                return M;
              };
            },
            "./node_modules/core-js/internals/descriptors.js": function node_modulesCoreJsInternalsDescriptorsJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/fails.js");
              e.exports = !i(function () {
                return 7 != Object.defineProperty({}, "a", {
                  get: function get() {
                    return 7;
                  }
                }).a;
              });
            },
            "./node_modules/core-js/internals/document-create-element.js": function node_modulesCoreJsInternalsDocumentCreateElementJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/is-object.js"),
                r = i.document,
                l = o(r) && o(r.createElement);
              e.exports = function (e) {
                return l ? r.createElement(e) : {};
              };
            },
            "./node_modules/core-js/internals/enum-bug-keys.js": function node_modulesCoreJsInternalsEnumBugKeysJs(e, t) {
              e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            },
            "./node_modules/core-js/internals/export.js": function node_modulesCoreJsInternalsExportJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,
                r = n("./node_modules/core-js/internals/hide.js"),
                l = n("./node_modules/core-js/internals/redefine.js"),
                a = n("./node_modules/core-js/internals/set-global.js"),
                s = n("./node_modules/core-js/internals/copy-constructor-properties.js"),
                c = n("./node_modules/core-js/internals/is-forced.js");
              e.exports = function (e, t) {
                var n,
                  p,
                  d,
                  h,
                  u,
                  y = e.target,
                  f = e.global,
                  x = e.stat;
                if (n = f ? i : x ? i[y] || a(y, {}) : (i[y] || {}).prototype) for (p in t) {
                  if (h = t[p], d = e.noTargetGet ? (u = o(n, p)) && u.value : n[p], !c(f ? p : y + (x ? "." : "#") + p, e.forced) && void 0 !== d) {
                    if (_typeof(h) == _typeof(d)) continue;
                    s(h, d);
                  }
                  (e.sham || d && d.sham) && r(h, "sham", !0), l(n, p, h, e);
                }
              };
            },
            "./node_modules/core-js/internals/fails.js": function node_modulesCoreJsInternalsFailsJs(e, t) {
              e.exports = function (e) {
                try {
                  return !!e();
                } catch (e) {
                  return !0;
                }
              };
            },
            "./node_modules/core-js/internals/function-to-string.js": function node_modulesCoreJsInternalsFunctionToStringJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/shared.js");
              e.exports = i("native-function-to-string", Function.toString);
            },
            "./node_modules/core-js/internals/get-iterator-method.js": function node_modulesCoreJsInternalsGetIteratorMethodJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/classof.js"),
                o = n("./node_modules/core-js/internals/iterators.js"),
                r = n("./node_modules/core-js/internals/well-known-symbol.js")("iterator");
              e.exports = function (e) {
                if (null != e) return e[r] || e["@@iterator"] || o[i(e)];
              };
            },
            "./node_modules/core-js/internals/global.js": function node_modulesCoreJsInternalsGlobalJs(e, t, n) {
              (function (t) {
                var n = "object",
                  i = function i(e) {
                    return e && e.Math == Math && e;
                  };
                e.exports = i((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == n && globalThis) || i((typeof window === "undefined" ? "undefined" : _typeof(window)) == n && window) || i((typeof self === "undefined" ? "undefined" : _typeof(self)) == n && self) || i(_typeof(t) == n && t) || Function("return this")();
              }).call(this, n("./node_modules/webpack/buildin/global.js"));
            },
            "./node_modules/core-js/internals/has.js": function node_modulesCoreJsInternalsHasJs(e, t) {
              var n = {}.hasOwnProperty;
              e.exports = function (e, t) {
                return n.call(e, t);
              };
            },
            "./node_modules/core-js/internals/hidden-keys.js": function node_modulesCoreJsInternalsHiddenKeysJs(e, t) {
              e.exports = {};
            },
            "./node_modules/core-js/internals/hide.js": function node_modulesCoreJsInternalsHideJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/descriptors.js"),
                o = n("./node_modules/core-js/internals/object-define-property.js"),
                r = n("./node_modules/core-js/internals/create-property-descriptor.js");
              e.exports = i ? function (e, t, n) {
                return o.f(e, t, r(1, n));
              } : function (e, t, n) {
                return e[t] = n, e;
              };
            },
            "./node_modules/core-js/internals/html.js": function node_modulesCoreJsInternalsHtmlJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js").document;
              e.exports = i && i.documentElement;
            },
            "./node_modules/core-js/internals/ie8-dom-define.js": function node_modulesCoreJsInternalsIe8DomDefineJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/descriptors.js"),
                o = n("./node_modules/core-js/internals/fails.js"),
                r = n("./node_modules/core-js/internals/document-create-element.js");
              e.exports = !i && !o(function () {
                return 7 != Object.defineProperty(r("div"), "a", {
                  get: function get() {
                    return 7;
                  }
                }).a;
              });
            },
            "./node_modules/core-js/internals/indexed-object.js": function node_modulesCoreJsInternalsIndexedObjectJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/fails.js"),
                o = n("./node_modules/core-js/internals/classof-raw.js"),
                r = "".split;
              e.exports = i(function () {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function (e) {
                return "String" == o(e) ? r.call(e, "") : Object(e);
              } : Object;
            },
            "./node_modules/core-js/internals/internal-state.js": function node_modulesCoreJsInternalsInternalStateJs(e, t, n) {
              var i,
                o,
                r,
                l = n("./node_modules/core-js/internals/native-weak-map.js"),
                a = n("./node_modules/core-js/internals/global.js"),
                s = n("./node_modules/core-js/internals/is-object.js"),
                c = n("./node_modules/core-js/internals/hide.js"),
                p = n("./node_modules/core-js/internals/has.js"),
                d = n("./node_modules/core-js/internals/shared-key.js"),
                h = n("./node_modules/core-js/internals/hidden-keys.js"),
                u = a.WeakMap;
              if (l) {
                var y = new u(),
                  f = y.get,
                  x = y.has,
                  m = y.set;
                i = function i(e, t) {
                  return m.call(y, e, t), t;
                }, o = function o(e) {
                  return f.call(y, e) || {};
                }, r = function r(e) {
                  return x.call(y, e);
                };
              } else {
                var g = d("state");
                h[g] = !0, i = function i(e, t) {
                  return c(e, g, t), t;
                }, o = function o(e) {
                  return p(e, g) ? e[g] : {};
                }, r = function r(e) {
                  return p(e, g);
                };
              }
              e.exports = {
                set: i,
                get: o,
                has: r,
                enforce: function enforce(e) {
                  return r(e) ? o(e) : i(e, {});
                },
                getterFor: function getterFor(e) {
                  return function (t) {
                    var n;
                    if (!s(t) || (n = o(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n;
                  };
                }
              };
            },
            "./node_modules/core-js/internals/is-array-iterator-method.js": function node_modulesCoreJsInternalsIsArrayIteratorMethodJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/well-known-symbol.js"),
                o = n("./node_modules/core-js/internals/iterators.js"),
                r = i("iterator"),
                l = Array.prototype;
              e.exports = function (e) {
                return void 0 !== e && (o.Array === e || l[r] === e);
              };
            },
            "./node_modules/core-js/internals/is-forced.js": function node_modulesCoreJsInternalsIsForcedJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/fails.js"),
                o = /#|\.prototype\./,
                r = function r(e, t) {
                  var n = a[l(e)];
                  return n == c || n != s && ("function" == typeof t ? i(t) : !!t);
                },
                l = r.normalize = function (e) {
                  return String(e).replace(o, ".").toLowerCase();
                },
                a = r.data = {},
                s = r.NATIVE = "N",
                c = r.POLYFILL = "P";
              e.exports = r;
            },
            "./node_modules/core-js/internals/is-object.js": function node_modulesCoreJsInternalsIsObjectJs(e, t) {
              e.exports = function (e) {
                return "object" == _typeof(e) ? null !== e : "function" == typeof e;
              };
            },
            "./node_modules/core-js/internals/is-pure.js": function node_modulesCoreJsInternalsIsPureJs(e, t) {
              e.exports = !1;
            },
            "./node_modules/core-js/internals/iterators-core.js": function node_modulesCoreJsInternalsIteratorsCoreJs(e, t, n) {
              "use strict";

              var i,
                o,
                r,
                l = n("./node_modules/core-js/internals/object-get-prototype-of.js"),
                a = n("./node_modules/core-js/internals/hide.js"),
                s = n("./node_modules/core-js/internals/has.js"),
                c = n("./node_modules/core-js/internals/well-known-symbol.js"),
                p = n("./node_modules/core-js/internals/is-pure.js"),
                d = c("iterator"),
                h = !1;
              [].keys && ("next" in (r = [].keys()) ? (o = l(l(r))) !== Object.prototype && (i = o) : h = !0), null == i && (i = {}), p || s(i, d) || a(i, d, function () {
                return this;
              }), e.exports = {
                IteratorPrototype: i,
                BUGGY_SAFARI_ITERATORS: h
              };
            },
            "./node_modules/core-js/internals/iterators.js": function node_modulesCoreJsInternalsIteratorsJs(e, t) {
              e.exports = {};
            },
            "./node_modules/core-js/internals/native-symbol.js": function node_modulesCoreJsInternalsNativeSymbolJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/fails.js");
              e.exports = !!Object.getOwnPropertySymbols && !i(function () {
                return !String(Symbol());
              });
            },
            "./node_modules/core-js/internals/native-weak-map.js": function node_modulesCoreJsInternalsNativeWeakMapJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/function-to-string.js"),
                r = i.WeakMap;
              e.exports = "function" == typeof r && /native code/.test(o.call(r));
            },
            "./node_modules/core-js/internals/object-create.js": function node_modulesCoreJsInternalsObjectCreateJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/an-object.js"),
                o = n("./node_modules/core-js/internals/object-define-properties.js"),
                r = n("./node_modules/core-js/internals/enum-bug-keys.js"),
                l = n("./node_modules/core-js/internals/hidden-keys.js"),
                a = n("./node_modules/core-js/internals/html.js"),
                s = n("./node_modules/core-js/internals/document-create-element.js"),
                c = n("./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),
                p = function p() {},
                _d = function d() {
                  var e,
                    t = s("iframe"),
                    n = r.length;
                  for (t.style.display = "none", a.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _d = e.F; n--;) {
                    delete _d.prototype[r[n]];
                  }
                  return _d();
                };
              e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (p.prototype = i(e), n = new p(), p.prototype = null, n[c] = e) : n = _d(), void 0 === t ? n : o(n, t);
              }, l[c] = !0;
            },
            "./node_modules/core-js/internals/object-define-properties.js": function node_modulesCoreJsInternalsObjectDefinePropertiesJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/descriptors.js"),
                o = n("./node_modules/core-js/internals/object-define-property.js"),
                r = n("./node_modules/core-js/internals/an-object.js"),
                l = n("./node_modules/core-js/internals/object-keys.js");
              e.exports = i ? Object.defineProperties : function (e, t) {
                r(e);
                for (var n, i = l(t), a = i.length, s = 0; a > s;) {
                  o.f(e, n = i[s++], t[n]);
                }
                return e;
              };
            },
            "./node_modules/core-js/internals/object-define-property.js": function node_modulesCoreJsInternalsObjectDefinePropertyJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/descriptors.js"),
                o = n("./node_modules/core-js/internals/ie8-dom-define.js"),
                r = n("./node_modules/core-js/internals/an-object.js"),
                l = n("./node_modules/core-js/internals/to-primitive.js"),
                a = Object.defineProperty;
              t.f = i ? a : function (e, t, n) {
                if (r(e), t = l(t, !0), r(n), o) try {
                  return a(e, t, n);
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e;
              };
            },
            "./node_modules/core-js/internals/object-get-own-property-descriptor.js": function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/descriptors.js"),
                o = n("./node_modules/core-js/internals/object-property-is-enumerable.js"),
                r = n("./node_modules/core-js/internals/create-property-descriptor.js"),
                l = n("./node_modules/core-js/internals/to-indexed-object.js"),
                a = n("./node_modules/core-js/internals/to-primitive.js"),
                s = n("./node_modules/core-js/internals/has.js"),
                c = n("./node_modules/core-js/internals/ie8-dom-define.js"),
                p = Object.getOwnPropertyDescriptor;
              t.f = i ? p : function (e, t) {
                if (e = l(e), t = a(t, !0), c) try {
                  return p(e, t);
                } catch (e) {}
                if (s(e, t)) return r(!o.f.call(e, t), e[t]);
              };
            },
            "./node_modules/core-js/internals/object-get-own-property-names.js": function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/object-keys-internal.js"),
                o = n("./node_modules/core-js/internals/enum-bug-keys.js").concat("length", "prototype");
              t.f = Object.getOwnPropertyNames || function (e) {
                return i(e, o);
              };
            },
            "./node_modules/core-js/internals/object-get-own-property-symbols.js": function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(e, t) {
              t.f = Object.getOwnPropertySymbols;
            },
            "./node_modules/core-js/internals/object-get-prototype-of.js": function node_modulesCoreJsInternalsObjectGetPrototypeOfJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/has.js"),
                o = n("./node_modules/core-js/internals/to-object.js"),
                r = n("./node_modules/core-js/internals/shared-key.js"),
                l = n("./node_modules/core-js/internals/correct-prototype-getter.js"),
                a = r("IE_PROTO"),
                s = Object.prototype;
              e.exports = l ? Object.getPrototypeOf : function (e) {
                return e = o(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
              };
            },
            "./node_modules/core-js/internals/object-keys-internal.js": function node_modulesCoreJsInternalsObjectKeysInternalJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/has.js"),
                o = n("./node_modules/core-js/internals/to-indexed-object.js"),
                r = n("./node_modules/core-js/internals/array-includes.js"),
                l = n("./node_modules/core-js/internals/hidden-keys.js"),
                a = r(!1);
              e.exports = function (e, t) {
                var n,
                  r = o(e),
                  s = 0,
                  c = [];
                for (n in r) {
                  !i(l, n) && i(r, n) && c.push(n);
                }
                for (; t.length > s;) {
                  i(r, n = t[s++]) && (~a(c, n) || c.push(n));
                }
                return c;
              };
            },
            "./node_modules/core-js/internals/object-keys.js": function node_modulesCoreJsInternalsObjectKeysJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/object-keys-internal.js"),
                o = n("./node_modules/core-js/internals/enum-bug-keys.js");
              e.exports = Object.keys || function (e) {
                return i(e, o);
              };
            },
            "./node_modules/core-js/internals/object-property-is-enumerable.js": function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(e, t, n) {
              "use strict";

              var i = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                r = o && !i.call({
                  1: 2
                }, 1);
              t.f = r ? function (e) {
                var t = o(this, e);
                return !!t && t.enumerable;
              } : i;
            },
            "./node_modules/core-js/internals/object-set-prototype-of.js": function node_modulesCoreJsInternalsObjectSetPrototypeOfJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
              e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var e,
                  t = !1,
                  n = {};
                try {
                  (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array;
                } catch (e) {}
                return function (n, o) {
                  return i(n, o), t ? e.call(n, o) : n.__proto__ = o, n;
                };
              }() : void 0);
            },
            "./node_modules/core-js/internals/own-keys.js": function node_modulesCoreJsInternalsOwnKeysJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/object-get-own-property-names.js"),
                r = n("./node_modules/core-js/internals/object-get-own-property-symbols.js"),
                l = n("./node_modules/core-js/internals/an-object.js"),
                a = i.Reflect;
              e.exports = a && a.ownKeys || function (e) {
                var t = o.f(l(e)),
                  n = r.f;
                return n ? t.concat(n(e)) : t;
              };
            },
            "./node_modules/core-js/internals/path.js": function node_modulesCoreJsInternalsPathJs(e, t, n) {
              e.exports = n("./node_modules/core-js/internals/global.js");
            },
            "./node_modules/core-js/internals/redefine.js": function node_modulesCoreJsInternalsRedefineJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/shared.js"),
                r = n("./node_modules/core-js/internals/hide.js"),
                l = n("./node_modules/core-js/internals/has.js"),
                a = n("./node_modules/core-js/internals/set-global.js"),
                s = n("./node_modules/core-js/internals/function-to-string.js"),
                c = n("./node_modules/core-js/internals/internal-state.js"),
                p = c.get,
                d = c.enforce,
                h = String(s).split("toString");
              o("inspectSource", function (e) {
                return s.call(e);
              }), (e.exports = function (e, t, n, o) {
                var s = !!o && !!o.unsafe,
                  c = !!o && !!o.enumerable,
                  p = !!o && !!o.noTargetGet;
                "function" == typeof n && ("string" != typeof t || l(n, "name") || r(n, "name", t), d(n).source = h.join("string" == typeof t ? t : "")), e !== i ? (s ? !p && e[t] && (c = !0) : delete e[t], c ? e[t] = n : r(e, t, n)) : c ? e[t] = n : a(t, n);
              })(Function.prototype, "toString", function () {
                return "function" == typeof this && p(this).source || s.call(this);
              });
            },
            "./node_modules/core-js/internals/require-object-coercible.js": function node_modulesCoreJsInternalsRequireObjectCoercibleJs(e, t) {
              e.exports = function (e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e;
              };
            },
            "./node_modules/core-js/internals/set-global.js": function node_modulesCoreJsInternalsSetGlobalJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/hide.js");
              e.exports = function (e, t) {
                try {
                  o(i, e, t);
                } catch (n) {
                  i[e] = t;
                }
                return t;
              };
            },
            "./node_modules/core-js/internals/set-to-string-tag.js": function node_modulesCoreJsInternalsSetToStringTagJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/object-define-property.js").f,
                o = n("./node_modules/core-js/internals/has.js"),
                r = n("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");
              e.exports = function (e, t, n) {
                e && !o(e = n ? e : e.prototype, r) && i(e, r, {
                  configurable: !0,
                  value: t
                });
              };
            },
            "./node_modules/core-js/internals/shared-key.js": function node_modulesCoreJsInternalsSharedKeyJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/shared.js"),
                o = n("./node_modules/core-js/internals/uid.js"),
                r = i("keys");
              e.exports = function (e) {
                return r[e] || (r[e] = o(e));
              };
            },
            "./node_modules/core-js/internals/shared.js": function node_modulesCoreJsInternalsSharedJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/set-global.js"),
                r = n("./node_modules/core-js/internals/is-pure.js"),
                l = "__core-js_shared__",
                a = i[l] || o(l, {});
              (e.exports = function (e, t) {
                return a[e] || (a[e] = void 0 !== t ? t : {});
              })("versions", []).push({
                version: "3.1.3",
                mode: r ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
              });
            },
            "./node_modules/core-js/internals/string-at.js": function node_modulesCoreJsInternalsStringAtJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/to-integer.js"),
                o = n("./node_modules/core-js/internals/require-object-coercible.js");
              e.exports = function (e, t, n) {
                var r,
                  l,
                  a = String(o(e)),
                  s = i(t),
                  c = a.length;
                return s < 0 || s >= c ? n ? "" : void 0 : (r = a.charCodeAt(s)) < 55296 || r > 56319 || s + 1 === c || (l = a.charCodeAt(s + 1)) < 56320 || l > 57343 ? n ? a.charAt(s) : r : n ? a.slice(s, s + 2) : l - 56320 + (r - 55296 << 10) + 65536;
              };
            },
            "./node_modules/core-js/internals/to-absolute-index.js": function node_modulesCoreJsInternalsToAbsoluteIndexJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/to-integer.js"),
                o = Math.max,
                r = Math.min;
              e.exports = function (e, t) {
                var n = i(e);
                return n < 0 ? o(n + t, 0) : r(n, t);
              };
            },
            "./node_modules/core-js/internals/to-indexed-object.js": function node_modulesCoreJsInternalsToIndexedObjectJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/indexed-object.js"),
                o = n("./node_modules/core-js/internals/require-object-coercible.js");
              e.exports = function (e) {
                return i(o(e));
              };
            },
            "./node_modules/core-js/internals/to-integer.js": function node_modulesCoreJsInternalsToIntegerJs(e, t) {
              var n = Math.ceil,
                i = Math.floor;
              e.exports = function (e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e);
              };
            },
            "./node_modules/core-js/internals/to-length.js": function node_modulesCoreJsInternalsToLengthJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/to-integer.js"),
                o = Math.min;
              e.exports = function (e) {
                return e > 0 ? o(i(e), 9007199254740991) : 0;
              };
            },
            "./node_modules/core-js/internals/to-object.js": function node_modulesCoreJsInternalsToObjectJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/require-object-coercible.js");
              e.exports = function (e) {
                return Object(i(e));
              };
            },
            "./node_modules/core-js/internals/to-primitive.js": function node_modulesCoreJsInternalsToPrimitiveJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/is-object.js");
              e.exports = function (e, t) {
                if (!i(e)) return e;
                var n, o;
                if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
                if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e))) return o;
                if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            "./node_modules/core-js/internals/uid.js": function node_modulesCoreJsInternalsUidJs(e, t) {
              var n = 0,
                i = Math.random();
              e.exports = function (e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36));
              };
            },
            "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": function node_modulesCoreJsInternalsValidateSetPrototypeOfArgumentsJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/is-object.js"),
                o = n("./node_modules/core-js/internals/an-object.js");
              e.exports = function (e, t) {
                if (o(e), !i(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
              };
            },
            "./node_modules/core-js/internals/well-known-symbol.js": function node_modulesCoreJsInternalsWellKnownSymbolJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/global.js"),
                o = n("./node_modules/core-js/internals/shared.js"),
                r = n("./node_modules/core-js/internals/uid.js"),
                l = n("./node_modules/core-js/internals/native-symbol.js"),
                a = i.Symbol,
                s = o("wks");
              e.exports = function (e) {
                return s[e] || (s[e] = l && a[e] || (l ? a : r)("Symbol." + e));
              };
            },
            "./node_modules/core-js/modules/es.array.from.js": function node_modulesCoreJsModulesEsArrayFromJs(e, t, n) {
              var i = n("./node_modules/core-js/internals/export.js"),
                o = n("./node_modules/core-js/internals/array-from.js");
              i({
                target: "Array",
                stat: !0,
                forced: !n("./node_modules/core-js/internals/check-correctness-of-iteration.js")(function (e) {
                  Array.from(e);
                })
              }, {
                from: o
              });
            },
            "./node_modules/core-js/modules/es.string.iterator.js": function node_modulesCoreJsModulesEsStringIteratorJs(e, t, n) {
              "use strict";

              var i = n("./node_modules/core-js/internals/string-at.js"),
                o = n("./node_modules/core-js/internals/internal-state.js"),
                r = n("./node_modules/core-js/internals/define-iterator.js"),
                l = "String Iterator",
                a = o.set,
                s = o.getterFor(l);
              r(String, "String", function (e) {
                a(this, {
                  type: l,
                  string: String(e),
                  index: 0
                });
              }, function () {
                var e,
                  t = s(this),
                  n = t.string,
                  o = t.index;
                return o >= n.length ? {
                  value: void 0,
                  done: !0
                } : (e = i(n, o, !0), t.index += e.length, {
                  value: e,
                  done: !1
                });
              });
            },
            "./node_modules/webpack/buildin/global.js": function node_modulesWebpackBuildinGlobalJs(e, t) {
              var n;
              n = function () {
                return this;
              }();
              try {
                n = n || Function("return this")() || (0, eval)("this");
              } catch (e) {
                "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
              }
              e.exports = n;
            },
            "./src/default-attrs.json": function srcDefaultAttrsJson(e) {
              e.exports = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              };
            },
            "./src/icon.js": function srcIconJs(e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var i = Object.assign || function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) {
                      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                  }
                  return e;
                },
                o = function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n];
                      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                  };
                }(),
                r = a(n("./node_modules/classnames/dedupe.js")),
                l = a(n("./src/default-attrs.json"));
              function a(e) {
                return e && e.__esModule ? e : {
                  "default": e
                };
              }
              function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }
              var c = function () {
                function e(t, n) {
                  var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                  s(this, e), this.name = t, this.contents = n, this.tags = o, this.attrs = i({}, l["default"], {
                    "class": "feather feather-" + t
                  });
                }
                return o(e, [{
                  key: "toSvg",
                  value: function value() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      t = i({}, this.attrs, e, {
                        "class": (0, r["default"])(this.attrs["class"], e["class"])
                      });
                    return "<svg " + p(t) + ">" + this.contents + "</svg>";
                  }
                }, {
                  key: "toString",
                  value: function value() {
                    return this.contents;
                  }
                }]), e;
              }();
              function p(e) {
                return Object.keys(e).map(function (t) {
                  return t + '="' + e[t] + '"';
                }).join(" ");
              }
              t["default"] = c;
            },
            "./src/icons.js": function srcIconsJs(e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var i = l(n("./src/icon.js")),
                o = l(n("./dist/icons.json")),
                r = l(n("./src/tags.json"));
              function l(e) {
                return e && e.__esModule ? e : {
                  "default": e
                };
              }
              t["default"] = Object.keys(o["default"]).map(function (e) {
                return new i["default"](e, o["default"][e], r["default"][e]);
              }).reduce(function (e, t) {
                return e[t.name] = t, e;
              }, {});
            },
            "./src/index.js": function srcIndexJs(e, t, n) {
              "use strict";

              var i = l(n("./src/icons.js")),
                o = l(n("./src/to-svg.js")),
                r = l(n("./src/replace.js"));
              function l(e) {
                return e && e.__esModule ? e : {
                  "default": e
                };
              }
              e.exports = {
                icons: i["default"],
                toSvg: o["default"],
                replace: r["default"]
              };
            },
            "./src/replace.js": function srcReplaceJs(e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var i = Object.assign || function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) {
                      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                  }
                  return e;
                },
                o = l(n("./node_modules/classnames/dedupe.js")),
                r = l(n("./src/icons.js"));
              function l(e) {
                return e && e.__esModule ? e : {
                  "default": e
                };
              }
              function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = s(e),
                  l = n["data-feather"];
                delete n["data-feather"];
                var a = r["default"][l].toSvg(i({}, t, n, {
                    "class": (0, o["default"])(t["class"], n["class"])
                  })),
                  c = new DOMParser().parseFromString(a, "image/svg+xml"),
                  p = c.querySelector("svg");
                e.parentNode.replaceChild(p, e);
              }
              function s(e) {
                return Array.from(e.attributes).reduce(function (e, t) {
                  return e[t.name] = t.value, e;
                }, {});
              }
              t["default"] = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
                var t = document.querySelectorAll("[data-feather]");
                Array.from(t).forEach(function (t) {
                  return a(t, e);
                });
              };
            },
            "./src/tags.json": function srcTagsJson(e) {
              e.exports = {
                activity: ["pulse", "health", "action", "motion"],
                airplay: ["stream", "cast", "mirroring"],
                "alert-circle": ["warning", "alert", "danger"],
                "alert-octagon": ["warning", "alert", "danger"],
                "alert-triangle": ["warning", "alert", "danger"],
                "align-center": ["text alignment", "center"],
                "align-justify": ["text alignment", "justified"],
                "align-left": ["text alignment", "left"],
                "align-right": ["text alignment", "right"],
                anchor: [],
                archive: ["index", "box"],
                "at-sign": ["mention", "at", "email", "message"],
                award: ["achievement", "badge"],
                aperture: ["camera", "photo"],
                "bar-chart": ["statistics", "diagram", "graph"],
                "bar-chart-2": ["statistics", "diagram", "graph"],
                battery: ["power", "electricity"],
                "battery-charging": ["power", "electricity"],
                bell: ["alarm", "notification", "sound"],
                "bell-off": ["alarm", "notification", "silent"],
                bluetooth: ["wireless"],
                "book-open": ["read", "library"],
                book: ["read", "dictionary", "booklet", "magazine", "library"],
                bookmark: ["read", "clip", "marker", "tag"],
                box: ["cube"],
                briefcase: ["work", "bag", "baggage", "folder"],
                calendar: ["date"],
                camera: ["photo"],
                cast: ["chromecast", "airplay"],
                "chevron-down": ["expand"],
                "chevron-up": ["collapse"],
                circle: ["off", "zero", "record"],
                clipboard: ["copy"],
                clock: ["time", "watch", "alarm"],
                "cloud-drizzle": ["weather", "shower"],
                "cloud-lightning": ["weather", "bolt"],
                "cloud-rain": ["weather"],
                "cloud-snow": ["weather", "blizzard"],
                cloud: ["weather"],
                codepen: ["logo"],
                codesandbox: ["logo"],
                code: ["source", "programming"],
                coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
                columns: ["layout"],
                command: ["keyboard", "cmd", "terminal", "prompt"],
                compass: ["navigation", "safari", "travel", "direction"],
                copy: ["clone", "duplicate"],
                "corner-down-left": ["arrow", "return"],
                "corner-down-right": ["arrow"],
                "corner-left-down": ["arrow"],
                "corner-left-up": ["arrow"],
                "corner-right-down": ["arrow"],
                "corner-right-up": ["arrow"],
                "corner-up-left": ["arrow"],
                "corner-up-right": ["arrow"],
                cpu: ["processor", "technology"],
                "credit-card": ["purchase", "payment", "cc"],
                crop: ["photo", "image"],
                crosshair: ["aim", "target"],
                database: ["storage", "memory"],
                "delete": ["remove"],
                disc: ["album", "cd", "dvd", "music"],
                "dollar-sign": ["currency", "money", "payment"],
                droplet: ["water"],
                edit: ["pencil", "change"],
                "edit-2": ["pencil", "change"],
                "edit-3": ["pencil", "change"],
                eye: ["view", "watch"],
                "eye-off": ["view", "watch", "hide", "hidden"],
                "external-link": ["outbound"],
                facebook: ["logo", "social"],
                "fast-forward": ["music"],
                figma: ["logo", "design", "tool"],
                "file-minus": ["delete", "remove", "erase"],
                "file-plus": ["add", "create", "new"],
                "file-text": ["data", "txt", "pdf"],
                film: ["movie", "video"],
                filter: ["funnel", "hopper"],
                flag: ["report"],
                "folder-minus": ["directory"],
                "folder-plus": ["directory"],
                folder: ["directory"],
                framer: ["logo", "design", "tool"],
                frown: ["emoji", "face", "bad", "sad", "emotion"],
                gift: ["present", "box", "birthday", "party"],
                "git-branch": ["code", "version control"],
                "git-commit": ["code", "version control"],
                "git-merge": ["code", "version control"],
                "git-pull-request": ["code", "version control"],
                github: ["logo", "version control"],
                gitlab: ["logo", "version control"],
                globe: ["world", "browser", "language", "translate"],
                "hard-drive": ["computer", "server", "memory", "data"],
                hash: ["hashtag", "number", "pound"],
                headphones: ["music", "audio", "sound"],
                heart: ["like", "love", "emotion"],
                "help-circle": ["question mark"],
                hexagon: ["shape", "node.js", "logo"],
                home: ["house", "living"],
                image: ["picture"],
                inbox: ["email"],
                instagram: ["logo", "camera"],
                key: ["password", "login", "authentication", "secure"],
                layers: ["stack"],
                layout: ["window", "webpage"],
                "life-bouy": ["help", "life ring", "support"],
                link: ["chain", "url"],
                "link-2": ["chain", "url"],
                linkedin: ["logo", "social media"],
                list: ["options"],
                lock: ["security", "password", "secure"],
                "log-in": ["sign in", "arrow", "enter"],
                "log-out": ["sign out", "arrow", "exit"],
                mail: ["email", "message"],
                "map-pin": ["location", "navigation", "travel", "marker"],
                map: ["location", "navigation", "travel"],
                maximize: ["fullscreen"],
                "maximize-2": ["fullscreen", "arrows", "expand"],
                meh: ["emoji", "face", "neutral", "emotion"],
                menu: ["bars", "navigation", "hamburger"],
                "message-circle": ["comment", "chat"],
                "message-square": ["comment", "chat"],
                "mic-off": ["record", "sound", "mute"],
                mic: ["record", "sound", "listen"],
                minimize: ["exit fullscreen", "close"],
                "minimize-2": ["exit fullscreen", "arrows", "close"],
                minus: ["subtract"],
                monitor: ["tv", "screen", "display"],
                moon: ["dark", "night"],
                "more-horizontal": ["ellipsis"],
                "more-vertical": ["ellipsis"],
                "mouse-pointer": ["arrow", "cursor"],
                move: ["arrows"],
                music: ["note"],
                navigation: ["location", "travel"],
                "navigation-2": ["location", "travel"],
                octagon: ["stop"],
                "package": ["box", "container"],
                paperclip: ["attachment"],
                pause: ["music", "stop"],
                "pause-circle": ["music", "audio", "stop"],
                "pen-tool": ["vector", "drawing"],
                percent: ["discount"],
                "phone-call": ["ring"],
                "phone-forwarded": ["call"],
                "phone-incoming": ["call"],
                "phone-missed": ["call"],
                "phone-off": ["call", "mute"],
                "phone-outgoing": ["call"],
                phone: ["call"],
                play: ["music", "start"],
                "pie-chart": ["statistics", "diagram"],
                "play-circle": ["music", "start"],
                plus: ["add", "new"],
                "plus-circle": ["add", "new"],
                "plus-square": ["add", "new"],
                pocket: ["logo", "save"],
                power: ["on", "off"],
                printer: ["fax", "office", "device"],
                radio: ["signal"],
                "refresh-cw": ["synchronise", "arrows"],
                "refresh-ccw": ["arrows"],
                repeat: ["loop", "arrows"],
                rewind: ["music"],
                "rotate-ccw": ["arrow"],
                "rotate-cw": ["arrow"],
                rss: ["feed", "subscribe"],
                save: ["floppy disk"],
                scissors: ["cut"],
                search: ["find", "magnifier", "magnifying glass"],
                send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
                settings: ["cog", "edit", "gear", "preferences"],
                "share-2": ["network", "connections"],
                shield: ["security", "secure"],
                "shield-off": ["security", "insecure"],
                "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                shuffle: ["music"],
                "skip-back": ["music"],
                "skip-forward": ["music"],
                slack: ["logo"],
                slash: ["ban", "no"],
                sliders: ["settings", "controls"],
                smartphone: ["cellphone", "device"],
                smile: ["emoji", "face", "happy", "good", "emotion"],
                speaker: ["audio", "music"],
                star: ["bookmark", "favorite", "like"],
                "stop-circle": ["media", "music"],
                sun: ["brightness", "weather", "light"],
                sunrise: ["weather", "time", "morning", "day"],
                sunset: ["weather", "time", "evening", "night"],
                tablet: ["device"],
                tag: ["label"],
                target: ["logo", "bullseye"],
                terminal: ["code", "command line", "prompt"],
                thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
                "thumbs-down": ["dislike", "bad", "emotion"],
                "thumbs-up": ["like", "good", "emotion"],
                "toggle-left": ["on", "off", "switch"],
                "toggle-right": ["on", "off", "switch"],
                tool: ["settings", "spanner"],
                trash: ["garbage", "delete", "remove", "bin"],
                "trash-2": ["garbage", "delete", "remove", "bin"],
                triangle: ["delta"],
                truck: ["delivery", "van", "shipping", "transport", "lorry"],
                tv: ["television", "stream"],
                twitch: ["logo"],
                twitter: ["logo", "social"],
                type: ["text"],
                umbrella: ["rain", "weather"],
                unlock: ["security"],
                "user-check": ["followed", "subscribed"],
                "user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
                "user-plus": ["new", "add", "create", "follow", "subscribe"],
                "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
                user: ["person", "account"],
                users: ["group"],
                "video-off": ["camera", "movie", "film"],
                video: ["camera", "movie", "film"],
                voicemail: ["phone"],
                volume: ["music", "sound", "mute"],
                "volume-1": ["music", "sound"],
                "volume-2": ["music", "sound"],
                "volume-x": ["music", "sound", "mute"],
                watch: ["clock", "time"],
                "wifi-off": ["disabled"],
                wifi: ["connection", "signal", "wireless"],
                wind: ["weather", "air"],
                "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
                "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
                "x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
                x: ["cancel", "close", "delete", "remove", "times", "clear"],
                youtube: ["logo", "video", "play"],
                "zap-off": ["flash", "camera", "lightning"],
                zap: ["flash", "camera", "lightning"],
                "zoom-in": ["magnifying glass"],
                "zoom-out": ["magnifying glass"]
              };
            },
            "./src/to-svg.js": function srcToSvgJs(e, t, n) {
              "use strict";

              Object.defineProperty(t, "__esModule", {
                value: !0
              });
              var i,
                o = n("./src/icons.js"),
                r = (i = o) && i.__esModule ? i : {
                  "default": i
                };
              t["default"] = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
                if (!r["default"][e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
                return r["default"][e].toSvg(t);
              };
            },
            0: function _(e, t, n) {
              n("./node_modules/core-js/es/array/from.js"), e.exports = n("./src/index.js");
            }
          });
        }, e.exports = t();
      },
      596: function _() {},
      944: function _() {},
      362: function _() {},
      308: function _() {},
      774: function _() {},
      650: function _() {},
      453: function _() {},
      758: function _() {},
      155: function _() {},
      498: function _() {},
      829: function _() {},
      967: function _() {},
      154: function _() {},
      242: function _() {},
      225: function _(e) {
        e.exports = function () {
          "use strict";

          var e = Math.abs,
            t = Math.floor;
          function n(e) {
            return getComputedStyle(e);
          }
          function i(e, t) {
            for (var n in t) {
              var i = t[n];
              "number" == typeof i && (i += "px"), e.style[n] = i;
            }
            return e;
          }
          function o(e) {
            var t = document.createElement("div");
            return t.className = e, t;
          }
          function r(e, t) {
            if (!b) throw new Error("No element matching method supported");
            return b.call(e, t);
          }
          function l(e) {
            e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
          }
          function a(e, t) {
            return Array.prototype.filter.call(e.children, function (e) {
              return r(e, t);
            });
          }
          function s(e, t) {
            var n = e.element.classList,
              i = w.state.scrolling(t);
            n.contains(i) ? clearTimeout(_[t]) : n.add(i);
          }
          function c(e, t) {
            _[t] = setTimeout(function () {
              return e.isAlive && e.element.classList.remove(w.state.scrolling(t));
            }, e.settings.scrollingThreshold);
          }
          function p(e, t) {
            s(e, t), c(e, t);
          }
          function d(e) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(e, !1, !1, void 0), t;
          }
          function h(e, t, n, i, o) {
            var r;
            if (void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === t) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
              if ("left" !== t) throw new Error("A proper axis should be provided");
              r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
            }
            u(e, n, r, i, o);
          }
          function u(e, t, n, i, o) {
            var r = n[0],
              l = n[1],
              a = n[2],
              s = n[3],
              c = n[4],
              h = n[5];
            void 0 === i && (i = !0), void 0 === o && (o = !1);
            var u = e.element;
            e.reach[s] = null, 1 > u[a] && (e.reach[s] = "start"), u[a] > e[r] - e[l] - 1 && (e.reach[s] = "end"), t && (u.dispatchEvent(d("ps-scroll-" + s)), 0 > t ? u.dispatchEvent(d("ps-scroll-" + c)) : 0 < t && u.dispatchEvent(d("ps-scroll-" + h)), i && p(e, s)), e.reach[s] && (t || o) && u.dispatchEvent(d("ps-" + s + "-reach-" + e.reach[s]));
          }
          function y(e) {
            return parseInt(e, 10) || 0;
          }
          function f(e) {
            return r(e, "input,[contenteditable]") || r(e, "select,[contenteditable]") || r(e, "textarea,[contenteditable]") || r(e, "button,[contenteditable]");
          }
          function x(e) {
            var t = n(e);
            return y(t.width) + y(t.paddingLeft) + y(t.paddingRight) + y(t.borderLeftWidth) + y(t.borderRightWidth);
          }
          function m(e) {
            var n = Math.round,
              i = e.element,
              o = t(i.scrollTop),
              r = i.getBoundingClientRect();
            e.containerWidth = n(r.width), e.containerHeight = n(r.height), e.contentWidth = i.scrollWidth, e.contentHeight = i.scrollHeight, i.contains(e.scrollbarXRail) || (a(i, w.element.rail("x")).forEach(function (e) {
              return l(e);
            }), i.appendChild(e.scrollbarXRail)), i.contains(e.scrollbarYRail) || (a(i, w.element.rail("y")).forEach(function (e) {
              return l(e);
            }), i.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = g(e, y(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = y((e.negativeScrollAdjustment + i.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = g(e, y(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = y(o * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), v(i, e), e.scrollbarXActive ? i.classList.add(w.state.active("x")) : (i.classList.remove(w.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, i.scrollLeft = !0 === e.isRtl ? e.contentWidth : 0), e.scrollbarYActive ? i.classList.add(w.state.active("y")) : (i.classList.remove(w.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, i.scrollTop = 0);
          }
          function g(e, t) {
            var n = Math.min,
              i = Math.max;
            return e.settings.minScrollbarLength && (t = i(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = n(t, e.settings.maxScrollbarLength)), t;
          }
          function v(e, n) {
            var o = {
                width: n.railXWidth
              },
              r = t(e.scrollTop);
            o.left = n.isRtl ? n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : e.scrollLeft, n.isScrollbarXUsingBottom ? o.bottom = n.scrollbarXBottom - r : o.top = n.scrollbarXTop + r, i(n.scrollbarXRail, o);
            var l = {
              top: r,
              height: n.railYHeight
            };
            n.isScrollbarYUsingRight ? n.isRtl ? l.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9 : l.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? l.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : l.left = n.scrollbarYLeft + e.scrollLeft, i(n.scrollbarYRail, l), i(n.scrollbarX, {
              left: n.scrollbarXLeft,
              width: n.scrollbarXWidth - n.railBorderXWidth
            }), i(n.scrollbarY, {
              top: n.scrollbarYTop,
              height: n.scrollbarYHeight - n.railBorderYWidth
            });
          }
          function j(e, t) {
            function n(t) {
              t.touches && t.touches[0] && (t[a] = t.touches[0].pageY), x[u] = g + j * (t[a] - v), s(e, y), m(e), t.stopPropagation(), t.type.startsWith("touch") && 1 < t.changedTouches.length && t.preventDefault();
            }
            function i() {
              c(e, y), e[f].classList.remove(w.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n);
            }
            function o(t, o) {
              g = x[u], o && t.touches && (t[a] = t.touches[0].pageY), v = t[a], j = (e[l] - e[r]) / (e[p] - e[h]), o ? e.event.bind(e.ownerDocument, "touchmove", n) : (e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), t.preventDefault()), e[f].classList.add(w.state.clicking), t.stopPropagation();
            }
            var r = t[0],
              l = t[1],
              a = t[2],
              p = t[3],
              d = t[4],
              h = t[5],
              u = t[6],
              y = t[7],
              f = t[8],
              x = e.element,
              g = null,
              v = null,
              j = null;
            e.event.bind(e[d], "mousedown", function (e) {
              o(e);
            }), e.event.bind(e[d], "touchstart", function (e) {
              o(e, !0);
            });
          }
          var b = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            w = {
              main: "ps",
              rtl: "ps__rtl",
              element: {
                thumb: function thumb(e) {
                  return "ps__thumb-" + e;
                },
                rail: function rail(e) {
                  return "ps__rail-" + e;
                },
                consuming: "ps__child--consume"
              },
              state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function active(e) {
                  return "ps--active-" + e;
                },
                scrolling: function scrolling(e) {
                  return "ps--scrolling-" + e;
                }
              }
            },
            _ = {
              x: null,
              y: null
            },
            M = function M(e) {
              this.element = e, this.handlers = {};
            },
            k = {
              isEmpty: {
                configurable: !0
              }
            };
          M.prototype.bind = function (e, t) {
            void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1);
          }, M.prototype.unbind = function (e, t) {
            var n = this;
            this.handlers[e] = this.handlers[e].filter(function (i) {
              return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1);
            });
          }, M.prototype.unbindAll = function () {
            for (var e in this.handlers) {
              this.unbind(e);
            }
          }, k.isEmpty.get = function () {
            var e = this;
            return Object.keys(this.handlers).every(function (t) {
              return 0 === e.handlers[t].length;
            });
          }, Object.defineProperties(M.prototype, k);
          var A = function A() {
            this.eventElements = [];
          };
          A.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
              return t.element === e;
            })[0];
            return t || (t = new M(e), this.eventElements.push(t)), t;
          }, A.prototype.bind = function (e, t, n) {
            this.eventElement(e).bind(t, n);
          }, A.prototype.unbind = function (e, t, n) {
            var i = this.eventElement(e);
            i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1);
          }, A.prototype.unbindAll = function () {
            this.eventElements.forEach(function (e) {
              return e.unbindAll();
            }), this.eventElements = [];
          }, A.prototype.once = function (e, t, n) {
            var i = this.eventElement(e),
              o = function o(e) {
                i.unbind(t, o), n(e);
              };
            i.bind(t, o);
          };
          var L = {
              isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
              supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && 0 < window.navigator.maxTouchPoints || window.DocumentTouch && document instanceof window.DocumentTouch),
              supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
              isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
            },
            H = function H() {
              return {
                handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollingThreshold: 1e3,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !0,
                wheelSpeed: 1
              };
            },
            S = {
              "click-rail": function clickRail(e) {
                e.element, e.event.bind(e.scrollbarY, "mousedown", function (e) {
                  return e.stopPropagation();
                }), e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                  var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                  e.element.scrollTop += n * e.containerHeight, m(e), t.stopPropagation();
                }), e.event.bind(e.scrollbarX, "mousedown", function (e) {
                  return e.stopPropagation();
                }), e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                  var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                  e.element.scrollLeft += n * e.containerWidth, m(e), t.stopPropagation();
                });
              },
              "drag-thumb": function dragThumb(e) {
                j(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), j(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
              },
              keyboard: function keyboard(e) {
                function n(n, o) {
                  var r = t(i.scrollTop);
                  if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === r && 0 < o || r >= e.contentHeight - e.containerHeight && 0 > o) return !e.settings.wheelPropagation;
                  }
                  var l = i.scrollLeft;
                  if (0 === o) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === l && 0 > n || l >= e.contentWidth - e.containerWidth && 0 < n) return !e.settings.wheelPropagation;
                  }
                  return !0;
                }
                var i = e.element,
                  o = function o() {
                    return r(i, ":hover");
                  },
                  l = function l() {
                    return r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus");
                  };
                e.event.bind(e.ownerDocument, "keydown", function (t) {
                  if (!(t.isDefaultPrevented && t.isDefaultPrevented() || t.defaultPrevented) && (o() || l())) {
                    var r = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                    if (r) {
                      if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;else for (; r.shadowRoot;) {
                        r = r.shadowRoot.activeElement;
                      }
                      if (f(r)) return;
                    }
                    var a = 0,
                      s = 0;
                    switch (t.which) {
                      case 37:
                        a = t.metaKey ? -e.contentWidth : t.altKey ? -e.containerWidth : -30;
                        break;
                      case 38:
                        s = t.metaKey ? e.contentHeight : t.altKey ? e.containerHeight : 30;
                        break;
                      case 39:
                        a = t.metaKey ? e.contentWidth : t.altKey ? e.containerWidth : 30;
                        break;
                      case 40:
                        s = t.metaKey ? -e.contentHeight : t.altKey ? -e.containerHeight : -30;
                        break;
                      case 32:
                        s = t.shiftKey ? e.containerHeight : -e.containerHeight;
                        break;
                      case 33:
                        s = e.containerHeight;
                        break;
                      case 34:
                        s = -e.containerHeight;
                        break;
                      case 36:
                        s = e.contentHeight;
                        break;
                      case 35:
                        s = -e.contentHeight;
                        break;
                      default:
                        return;
                    }
                    e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== s || (i.scrollTop -= s, i.scrollLeft += a, m(e), n(a, s) && t.preventDefault());
                  }
                });
              },
              wheel: function wheel(i) {
                function o(n, o) {
                  var r = t(s.scrollTop),
                    l = 0 === s.scrollTop,
                    a = r + s.offsetHeight === s.scrollHeight,
                    c = 0 === s.scrollLeft,
                    p = s.scrollLeft + s.offsetWidth === s.scrollWidth;
                  return !(e(o) > e(n) ? l || a : c || p) || !i.settings.wheelPropagation;
                }
                function r(e) {
                  var t = e.deltaX,
                    n = -1 * e.deltaY;
                  return (void 0 === t || void 0 === n) && (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n];
                }
                function l(e, t, i) {
                  if (!L.isWebKit && s.querySelector("select:focus")) return !0;
                  if (!s.contains(e)) return !1;
                  for (var o = e; o && o !== s;) {
                    if (o.classList.contains(w.element.consuming)) return !0;
                    var r = n(o);
                    if (i && r.overflowY.match(/(scroll|auto)/)) {
                      var l = o.scrollHeight - o.clientHeight;
                      if (0 < l && (0 < o.scrollTop && 0 > i || o.scrollTop < l && 0 < i)) return !0;
                    }
                    if (t && r.overflowX.match(/(scroll|auto)/)) {
                      var a = o.scrollWidth - o.clientWidth;
                      if (0 < a && (0 < o.scrollLeft && 0 > t || o.scrollLeft < a && 0 < t)) return !0;
                    }
                    o = o.parentNode;
                  }
                  return !1;
                }
                function a(e) {
                  var t = r(e),
                    n = t[0],
                    a = t[1];
                  if (!l(e.target, n, a)) {
                    var c = !1;
                    i.settings.useBothWheelAxes ? i.scrollbarYActive && !i.scrollbarXActive ? (a ? s.scrollTop -= a * i.settings.wheelSpeed : s.scrollTop += n * i.settings.wheelSpeed, c = !0) : i.scrollbarXActive && !i.scrollbarYActive && (n ? s.scrollLeft += n * i.settings.wheelSpeed : s.scrollLeft -= a * i.settings.wheelSpeed, c = !0) : (s.scrollTop -= a * i.settings.wheelSpeed, s.scrollLeft += n * i.settings.wheelSpeed), m(i), (c = c || o(n, a)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault());
                  }
                }
                var s = i.element;
                void 0 === window.onwheel ? void 0 !== window.onmousewheel && i.event.bind(s, "mousewheel", a) : i.event.bind(s, "wheel", a);
              },
              touch: function touch(i) {
                function o(n, o) {
                  var r = t(h.scrollTop),
                    l = h.scrollLeft,
                    a = e(n),
                    s = e(o);
                  if (s > a) {
                    if (0 > o && r === i.contentHeight - i.containerHeight || 0 < o && 0 === r) return 0 === window.scrollY && 0 < o && L.isChrome;
                  } else if (a > s && (0 > n && l === i.contentWidth - i.containerWidth || 0 < n && 0 === l)) return !0;
                  return !0;
                }
                function r(e, t) {
                  h.scrollTop -= t, h.scrollLeft -= e, m(i);
                }
                function l(e) {
                  return e.targetTouches ? e.targetTouches[0] : e;
                }
                function a(e) {
                  return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE));
                }
                function s(e) {
                  if (a(e)) {
                    var t = l(e);
                    u.pageX = t.pageX, u.pageY = t.pageY, y = new Date().getTime(), null !== x && clearInterval(x);
                  }
                }
                function c(e, t, i) {
                  if (!h.contains(e)) return !1;
                  for (var o = e; o && o !== h;) {
                    if (o.classList.contains(w.element.consuming)) return !0;
                    var r = n(o);
                    if (i && r.overflowY.match(/(scroll|auto)/)) {
                      var l = o.scrollHeight - o.clientHeight;
                      if (0 < l && (0 < o.scrollTop && 0 > i || o.scrollTop < l && 0 < i)) return !0;
                    }
                    if (t && r.overflowX.match(/(scroll|auto)/)) {
                      var a = o.scrollWidth - o.clientWidth;
                      if (0 < a && (0 < o.scrollLeft && 0 > t || o.scrollLeft < a && 0 < t)) return !0;
                    }
                    o = o.parentNode;
                  }
                  return !1;
                }
                function p(e) {
                  if (a(e)) {
                    var t = l(e),
                      n = {
                        pageX: t.pageX,
                        pageY: t.pageY
                      },
                      i = n.pageX - u.pageX,
                      s = n.pageY - u.pageY;
                    if (c(e.target, i, s)) return;
                    r(i, s), u = n;
                    var p = new Date().getTime(),
                      d = p - y;
                    0 < d && (f.x = i / d, f.y = s / d, y = p), o(i, s) && e.preventDefault();
                  }
                }
                function d() {
                  i.settings.swipeEasing && (clearInterval(x), x = setInterval(function () {
                    return i.isInitialized ? void clearInterval(x) : f.x || f.y ? .01 > e(f.x) && .01 > e(f.y) ? void clearInterval(x) : i.element ? (r(30 * f.x, 30 * f.y), f.x *= .8, void (f.y *= .8)) : void clearInterval(x) : void clearInterval(x);
                  }, 10));
                }
                if (L.supportsTouch || L.supportsIePointer) {
                  var h = i.element,
                    u = {},
                    y = 0,
                    f = {},
                    x = null;
                  L.supportsTouch ? (i.event.bind(h, "touchstart", s), i.event.bind(h, "touchmove", p), i.event.bind(h, "touchend", d)) : L.supportsIePointer && (window.PointerEvent ? (i.event.bind(h, "pointerdown", s), i.event.bind(h, "pointermove", p), i.event.bind(h, "pointerup", d)) : window.MSPointerEvent && (i.event.bind(h, "MSPointerDown", s), i.event.bind(h, "MSPointerMove", p), i.event.bind(h, "MSPointerUp", d)));
                }
              }
            },
            z = function z(e, r) {
              var l = this;
              if (void 0 === r && (r = {}), "string" == typeof e && (e = document.querySelector(e)), !e || !e.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
              for (var a in this.element = e, e.classList.add(w.main), this.settings = H(), r) {
                this.settings[a] = r[a];
              }
              this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
              var s = function s() {
                  return e.classList.add(w.state.focus);
                },
                c = function c() {
                  return e.classList.remove(w.state.focus);
                };
              this.isRtl = "rtl" === n(e).direction, !0 === this.isRtl && e.classList.add(w.rtl), this.isNegativeScroll = function () {
                var t = e.scrollLeft,
                  n = null;
                return e.scrollLeft = -1, n = 0 > e.scrollLeft, e.scrollLeft = t, n;
              }(), this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, this.event = new A(), this.ownerDocument = e.ownerDocument || document, this.scrollbarXRail = o(w.element.rail("x")), e.appendChild(this.scrollbarXRail), this.scrollbarX = o(w.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", c), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
              var p = n(this.scrollbarXRail);
              this.scrollbarXBottom = parseInt(p.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = y(p.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = y(p.borderLeftWidth) + y(p.borderRightWidth), i(this.scrollbarXRail, {
                display: "block"
              }), this.railXMarginWidth = y(p.marginLeft) + y(p.marginRight), i(this.scrollbarXRail, {
                display: ""
              }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = o(w.element.rail("y")), e.appendChild(this.scrollbarYRail), this.scrollbarY = o(w.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", c), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
              var d = n(this.scrollbarYRail);
              this.scrollbarYRight = parseInt(d.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = y(d.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? x(this.scrollbarY) : null, this.railBorderYWidth = y(d.borderTopWidth) + y(d.borderBottomWidth), i(this.scrollbarYRail, {
                display: "block"
              }), this.railYMarginHeight = y(d.marginTop) + y(d.marginBottom), i(this.scrollbarYRail, {
                display: ""
              }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: 0 >= e.scrollLeft ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: 0 >= e.scrollTop ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
              }, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
                return S[e](l);
              }), this.lastScrollTop = t(e.scrollTop), this.lastScrollLeft = e.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
                return l.onScroll(e);
              }), m(this);
            };
          return z.prototype.update = function () {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, i(this.scrollbarXRail, {
              display: "block"
            }), i(this.scrollbarYRail, {
              display: "block"
            }), this.railXMarginWidth = y(n(this.scrollbarXRail).marginLeft) + y(n(this.scrollbarXRail).marginRight), this.railYMarginHeight = y(n(this.scrollbarYRail).marginTop) + y(n(this.scrollbarYRail).marginBottom), i(this.scrollbarXRail, {
              display: "none"
            }), i(this.scrollbarYRail, {
              display: "none"
            }), m(this), h(this, "top", 0, !1, !0), h(this, "left", 0, !1, !0), i(this.scrollbarXRail, {
              display: ""
            }), i(this.scrollbarYRail, {
              display: ""
            }));
          }, z.prototype.onScroll = function () {
            this.isAlive && (m(this), h(this, "top", this.element.scrollTop - this.lastScrollTop), h(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = t(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft);
          }, z.prototype.destroy = function () {
            this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
          }, z.prototype.removePsClasses = function () {
            this.element.className = this.element.className.split(" ").filter(function (e) {
              return !e.match(/^ps([-_].+|)$/);
            }).join(" ");
          }, z;
        }();
      }
    },
    n = {};
  function i(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var r = n[e] = {
      exports: {}
    };
    return t[e].call(r.exports, r, r.exports, i), r.exports;
  }
  i.m = t, e = [], i.O = function (t, n, o, r) {
    if (!n) {
      var l = 1 / 0;
      for (p = 0; p < e.length; p++) {
        for (var _e$p = _slicedToArray(e[p], 3), n = _e$p[0], o = _e$p[1], r = _e$p[2], a = !0, s = 0; s < n.length; s++) {
          (!1 & r || l >= r) && Object.keys(i.O).every(function (e) {
            return i.O[e](n[s]);
          }) ? n.splice(s--, 1) : (a = !1, r < l && (l = r));
        }
        if (a) {
          e.splice(p--, 1);
          var c = o();
          void 0 !== c && (t = c);
        }
      }
      return t;
    }
    r = r || 0;
    for (var p = e.length; p > 0 && e[p - 1][2] > r; p--) {
      e[p] = e[p - 1];
    }
    e[p] = [n, o, r];
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, {
      a: t
    }), t;
  }, i.d = function (e, t) {
    for (var n in t) {
      i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      });
    }
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, function () {
    var e = {
      449: 0,
      254: 0,
      752: 0,
      751: 0,
      825: 0,
      37: 0,
      438: 0,
      962: 0,
      770: 0,
      376: 0,
      575: 0,
      997: 0,
      44: 0,
      348: 0,
      12: 0,
      739: 0
    };
    i.O.j = function (t) {
      return 0 === e[t];
    };
    var t = function t(_t, n) {
        var o,
          r,
          _n2 = _slicedToArray(n, 3),
          l = _n2[0],
          a = _n2[1],
          s = _n2[2],
          c = 0;
        if (l.some(function (t) {
          return 0 !== e[t];
        })) {
          for (o in a) {
            i.o(a, o) && (i.m[o] = a[o]);
          }
          if (s) var p = s(i);
        }
        for (_t && _t(n); c < l.length; c++) {
          r = l[c], i.o(e, r) && e[r] && e[r][0](), e[r] = 0;
        }
        return i.O(p);
      },
      n = self.webpackChunkmazer = self.webpackChunkmazer || [];
    n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n));
  }(), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(465);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(498);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(829);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(967);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(154);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(242);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(596);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(944);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(362);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(308);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(774);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(650);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(453);
  }), i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(758);
  });
  var o = i.O(void 0, [752, 751, 825, 37, 438, 962, 770, 376, 575, 997, 44, 348, 12, 739], function () {
    return i(155);
  });
  o = i.O(o);
})();

/***/ }),

/***/ "./resources/front/js/bootstrap.js":
/*!*****************************************!*\
  !*** ./resources/front/js/bootstrap.js ***!
  \*****************************************/
/***/ (() => {

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e19) { throw _e19; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e20) { didErr = true; err = _e20; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! For license information please see bootstrap.js.LICENSE.txt */
(function () {
  var t,
    e = {
      244: function _(t, e, i) {
        "use strict";

        i.r(e), i.d(e, {
          Alert: function Alert() {
            return Ee;
          },
          Button: function Button() {
            return Ce;
          },
          Carousel: function Carousel() {
            return Re;
          },
          Collapse: function Collapse() {
            return Ue;
          },
          Dropdown: function Dropdown() {
            return pi;
          },
          Modal: function Modal() {
            return Wi;
          },
          Offcanvas: function Offcanvas() {
            return Xi;
          },
          Popover: function Popover() {
            return bn;
          },
          ScrollSpy: function ScrollSpy() {
            return Tn;
          },
          Tab: function Tab() {
            return Pn;
          },
          Toast: function Toast() {
            return Bn;
          },
          Tooltip: function Tooltip() {
            return gn;
          }
        });
        var n = {};
        i.r(n), i.d(n, {
          afterMain: function afterMain() {
            return E;
          },
          afterRead: function afterRead() {
            return y;
          },
          afterWrite: function afterWrite() {
            return O;
          },
          applyStyles: function applyStyles() {
            return N;
          },
          arrow: function arrow() {
            return G;
          },
          auto: function auto() {
            return l;
          },
          basePlacements: function basePlacements() {
            return c;
          },
          beforeMain: function beforeMain() {
            return w;
          },
          beforeRead: function beforeRead() {
            return b;
          },
          beforeWrite: function beforeWrite() {
            return T;
          },
          bottom: function bottom() {
            return o;
          },
          clippingParents: function clippingParents() {
            return d;
          },
          computeStyles: function computeStyles() {
            return et;
          },
          createPopper: function createPopper() {
            return St;
          },
          createPopperBase: function createPopperBase() {
            return Dt;
          },
          createPopperLite: function createPopperLite() {
            return It;
          },
          detectOverflow: function detectOverflow() {
            return _t;
          },
          end: function end() {
            return u;
          },
          eventListeners: function eventListeners() {
            return nt;
          },
          flip: function flip() {
            return bt;
          },
          hide: function hide() {
            return wt;
          },
          left: function left() {
            return a;
          },
          main: function main() {
            return A;
          },
          modifierPhases: function modifierPhases() {
            return x;
          },
          offset: function offset() {
            return At;
          },
          placements: function placements() {
            return _;
          },
          popper: function popper() {
            return p;
          },
          popperGenerator: function popperGenerator() {
            return Lt;
          },
          popperOffsets: function popperOffsets() {
            return Et;
          },
          preventOverflow: function preventOverflow() {
            return Tt;
          },
          read: function read() {
            return v;
          },
          reference: function reference() {
            return g;
          },
          right: function right() {
            return r;
          },
          start: function start() {
            return h;
          },
          top: function top() {
            return s;
          },
          variationPlacements: function variationPlacements() {
            return m;
          },
          viewport: function viewport() {
            return f;
          },
          write: function write() {
            return C;
          }
        });
        var s = "top",
          o = "bottom",
          r = "right",
          a = "left",
          l = "auto",
          c = [s, o, r, a],
          h = "start",
          u = "end",
          d = "clippingParents",
          f = "viewport",
          p = "popper",
          g = "reference",
          m = c.reduce(function (t, e) {
            return t.concat([e + "-" + h, e + "-" + u]);
          }, []),
          _ = [].concat(c, [l]).reduce(function (t, e) {
            return t.concat([e, e + "-" + h, e + "-" + u]);
          }, []),
          b = "beforeRead",
          v = "read",
          y = "afterRead",
          w = "beforeMain",
          A = "main",
          E = "afterMain",
          T = "beforeWrite",
          C = "write",
          O = "afterWrite",
          x = [b, v, y, w, A, E, T, C, O];
        function k(t) {
          return t ? (t.nodeName || "").toLowerCase() : null;
        }
        function L(t) {
          if (null == t) return window;
          if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
          }
          return t;
        }
        function D(t) {
          return t instanceof L(t).Element || t instanceof Element;
        }
        function S(t) {
          return t instanceof L(t).HTMLElement || t instanceof HTMLElement;
        }
        function I(t) {
          return "undefined" != typeof ShadowRoot && (t instanceof L(t).ShadowRoot || t instanceof ShadowRoot);
        }
        var N = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function fn(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
              var i = e.styles[t] || {},
                n = e.attributes[t] || {},
                s = e.elements[t];
              S(s) && k(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function (t) {
                var e = n[t];
                !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
              }));
            });
          },
          effect: function effect(t) {
            var e = t.state,
              i = {
                popper: {
                  position: e.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0"
                },
                arrow: {
                  position: "absolute"
                },
                reference: {}
              };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
              Object.keys(e.elements).forEach(function (t) {
                var n = e.elements[t],
                  s = e.attributes[t] || {},
                  o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
                    return t[e] = "", t;
                  }, {});
                S(n) && k(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function (t) {
                  n.removeAttribute(t);
                }));
              });
            };
          },
          requires: ["computeStyles"]
        };
        function P(t) {
          return t.split("-")[0];
        }
        var j = Math.max,
          M = Math.min,
          H = Math.round;
        function $(t, e) {
          void 0 === e && (e = !1);
          var i = t.getBoundingClientRect(),
            n = 1,
            s = 1;
          if (S(t) && e) {
            var o = t.offsetHeight,
              r = t.offsetWidth;
            r > 0 && (n = H(i.width) / r || 1), o > 0 && (s = H(i.height) / o || 1);
          }
          return {
            width: i.width / n,
            height: i.height / s,
            top: i.top / s,
            right: i.right / n,
            bottom: i.bottom / s,
            left: i.left / n,
            x: i.left / n,
            y: i.top / s
          };
        }
        function W(t) {
          var e = $(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
          return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
          };
        }
        function B(t, e) {
          var i = e.getRootNode && e.getRootNode();
          if (t.contains(e)) return !0;
          if (i && I(i)) {
            var n = e;
            do {
              if (n && t.isSameNode(n)) return !0;
              n = n.parentNode || n.host;
            } while (n);
          }
          return !1;
        }
        function F(t) {
          return L(t).getComputedStyle(t);
        }
        function z(t) {
          return ["table", "td", "th"].indexOf(k(t)) >= 0;
        }
        function R(t) {
          return ((D(t) ? t.ownerDocument : t.document) || window.document).documentElement;
        }
        function q(t) {
          return "html" === k(t) ? t : t.assignedSlot || t.parentNode || (I(t) ? t.host : null) || R(t);
        }
        function V(t) {
          return S(t) && "fixed" !== F(t).position ? t.offsetParent : null;
        }
        function K(t) {
          for (var e = L(t), i = V(t); i && z(i) && "static" === F(i).position;) {
            i = V(i);
          }
          return i && ("html" === k(i) || "body" === k(i) && "static" === F(i).position) ? e : i || function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && S(t) && "fixed" === F(t).position) return null;
            var i = q(t);
            for (I(i) && (i = i.host); S(i) && ["html", "body"].indexOf(k(i)) < 0;) {
              var n = F(i);
              if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
              i = i.parentNode;
            }
            return null;
          }(t) || e;
        }
        function Q(t) {
          return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
        }
        function X(t, e, i) {
          return j(t, M(e, i));
        }
        function Y(t) {
          return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }, t);
        }
        function U(t, e) {
          return e.reduce(function (e, i) {
            return e[i] = t, e;
          }, {});
        }
        var G = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function fn(t) {
            var e,
              i = t.state,
              n = t.name,
              l = t.options,
              h = i.elements.arrow,
              u = i.modifiersData.popperOffsets,
              d = P(i.placement),
              f = Q(d),
              p = [a, r].indexOf(d) >= 0 ? "height" : "width";
            if (h && u) {
              var g = function (t, e) {
                  return Y("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                    placement: e.placement
                  })) : t) ? t : U(t, c));
                }(l.padding, i),
                m = W(h),
                _ = "y" === f ? s : a,
                b = "y" === f ? o : r,
                v = i.rects.reference[p] + i.rects.reference[f] - u[f] - i.rects.popper[p],
                y = u[f] - i.rects.reference[f],
                w = K(h),
                A = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
                E = v / 2 - y / 2,
                T = g[_],
                C = A - m[p] - g[b],
                O = A / 2 - m[p] / 2 + E,
                x = X(T, O, C),
                k = f;
              i.modifiersData[n] = ((e = {})[k] = x, e.centerOffset = x - O, e);
            }
          },
          effect: function effect(t) {
            var e = t.state,
              i = t.options.element,
              n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && B(e.elements.popper, n) && (e.elements.arrow = n);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"]
        };
        function J(t) {
          return t.split("-")[1];
        }
        var Z = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        };
        function tt(t) {
          var e,
            i = t.popper,
            n = t.popperRect,
            l = t.placement,
            c = t.variation,
            h = t.offsets,
            d = t.position,
            f = t.gpuAcceleration,
            p = t.adaptive,
            g = t.roundOffsets,
            m = t.isFixed,
            _ = h.x,
            b = void 0 === _ ? 0 : _,
            v = h.y,
            y = void 0 === v ? 0 : v,
            w = "function" == typeof g ? g({
              x: b,
              y: y
            }) : {
              x: b,
              y: y
            };
          b = w.x, y = w.y;
          var A = h.hasOwnProperty("x"),
            E = h.hasOwnProperty("y"),
            T = a,
            C = s,
            O = window;
          if (p) {
            var x = K(i),
              k = "clientHeight",
              D = "clientWidth";
            if (x === L(i) && "static" !== F(x = R(i)).position && "absolute" === d && (k = "scrollHeight", D = "scrollWidth"), l === s || (l === a || l === r) && c === u) C = o, y -= (m && x === O && O.visualViewport ? O.visualViewport.height : x[k]) - n.height, y *= f ? 1 : -1;
            if (l === a || (l === s || l === o) && c === u) T = r, b -= (m && x === O && O.visualViewport ? O.visualViewport.width : x[D]) - n.width, b *= f ? 1 : -1;
          }
          var S,
            I = Object.assign({
              position: d
            }, p && Z),
            N = !0 === g ? function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return {
                x: H(e * n) / n || 0,
                y: H(i * n) / n || 0
              };
            }({
              x: b,
              y: y
            }) : {
              x: b,
              y: y
            };
          return b = N.x, y = N.y, f ? Object.assign({}, I, ((S = {})[C] = E ? "0" : "", S[T] = A ? "0" : "", S.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)", S)) : Object.assign({}, I, ((e = {})[C] = E ? y + "px" : "", e[T] = A ? b + "px" : "", e.transform = "", e));
        }
        var et = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function fn(t) {
            var e = t.state,
              i = t.options,
              n = i.gpuAcceleration,
              s = void 0 === n || n,
              o = i.adaptive,
              r = void 0 === o || o,
              a = i.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: P(e.placement),
                variation: J(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
              };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, tt(Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, tt(Object.assign({}, c, {
              offsets: e.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-placement": e.placement
            });
          },
          data: {}
        };
        var it = {
          passive: !0
        };
        var nt = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function fn() {},
          effect: function effect(t) {
            var e = t.state,
              i = t.instance,
              n = t.options,
              s = n.scroll,
              o = void 0 === s || s,
              r = n.resize,
              a = void 0 === r || r,
              l = L(e.elements.popper),
              c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function (t) {
              t.addEventListener("scroll", i.update, it);
            }), a && l.addEventListener("resize", i.update, it), function () {
              o && c.forEach(function (t) {
                t.removeEventListener("scroll", i.update, it);
              }), a && l.removeEventListener("resize", i.update, it);
            };
          },
          data: {}
        };
        var st = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        function ot(t) {
          return t.replace(/left|right|bottom|top/g, function (t) {
            return st[t];
          });
        }
        var rt = {
          start: "end",
          end: "start"
        };
        function at(t) {
          return t.replace(/start|end/g, function (t) {
            return rt[t];
          });
        }
        function lt(t) {
          var e = L(t);
          return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
          };
        }
        function ct(t) {
          return $(R(t)).left + lt(t).scrollLeft;
        }
        function ht(t) {
          var e = F(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
          return /auto|scroll|overlay|hidden/.test(i + s + n);
        }
        function ut(t) {
          return ["html", "body", "#document"].indexOf(k(t)) >= 0 ? t.ownerDocument.body : S(t) && ht(t) ? t : ut(q(t));
        }
        function dt(t, e) {
          var i;
          void 0 === e && (e = []);
          var n = ut(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = L(n),
            r = s ? [o].concat(o.visualViewport || [], ht(n) ? n : []) : n,
            a = e.concat(r);
          return s ? a : a.concat(dt(q(r)));
        }
        function ft(t) {
          return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
          });
        }
        function pt(t, e) {
          return e === f ? ft(function (t) {
            var e = L(t),
              i = R(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
              width: s,
              height: o,
              x: r + ct(t),
              y: a
            };
          }(t)) : D(e) ? function (t) {
            var e = $(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
          }(e) : ft(function (t) {
            var e,
              i = R(t),
              n = lt(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = j(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
              r = j(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
              a = -n.scrollLeft + ct(t),
              l = -n.scrollTop;
            return "rtl" === F(s || i).direction && (a += j(i.clientWidth, s ? s.clientWidth : 0) - o), {
              width: o,
              height: r,
              x: a,
              y: l
            };
          }(R(t)));
        }
        function gt(t, e, i) {
          var n = "clippingParents" === e ? function (t) {
              var e = dt(q(t)),
                i = ["absolute", "fixed"].indexOf(F(t).position) >= 0 && S(t) ? K(t) : t;
              return D(i) ? e.filter(function (t) {
                return D(t) && B(t, i) && "body" !== k(t);
              }) : [];
            }(t) : [].concat(e),
            s = [].concat(n, [i]),
            o = s[0],
            r = s.reduce(function (e, i) {
              var n = pt(t, i);
              return e.top = j(n.top, e.top), e.right = M(n.right, e.right), e.bottom = M(n.bottom, e.bottom), e.left = j(n.left, e.left), e;
            }, pt(t, o));
          return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
        }
        function mt(t) {
          var e,
            i = t.reference,
            n = t.element,
            l = t.placement,
            c = l ? P(l) : null,
            d = l ? J(l) : null,
            f = i.x + i.width / 2 - n.width / 2,
            p = i.y + i.height / 2 - n.height / 2;
          switch (c) {
            case s:
              e = {
                x: f,
                y: i.y - n.height
              };
              break;
            case o:
              e = {
                x: f,
                y: i.y + i.height
              };
              break;
            case r:
              e = {
                x: i.x + i.width,
                y: p
              };
              break;
            case a:
              e = {
                x: i.x - n.width,
                y: p
              };
              break;
            default:
              e = {
                x: i.x,
                y: i.y
              };
          }
          var g = c ? Q(c) : null;
          if (null != g) {
            var m = "y" === g ? "height" : "width";
            switch (d) {
              case h:
                e[g] = e[g] - (i[m] / 2 - n[m] / 2);
                break;
              case u:
                e[g] = e[g] + (i[m] / 2 - n[m] / 2);
            }
          }
          return e;
        }
        function _t(t, e) {
          void 0 === e && (e = {});
          var i = e,
            n = i.placement,
            a = void 0 === n ? t.placement : n,
            l = i.boundary,
            h = void 0 === l ? d : l,
            u = i.rootBoundary,
            m = void 0 === u ? f : u,
            _ = i.elementContext,
            b = void 0 === _ ? p : _,
            v = i.altBoundary,
            y = void 0 !== v && v,
            w = i.padding,
            A = void 0 === w ? 0 : w,
            E = Y("number" != typeof A ? A : U(A, c)),
            T = b === p ? g : p,
            C = t.rects.popper,
            O = t.elements[y ? T : b],
            x = gt(D(O) ? O : O.contextElement || R(t.elements.popper), h, m),
            k = $(t.elements.reference),
            L = mt({
              reference: k,
              element: C,
              strategy: "absolute",
              placement: a
            }),
            S = ft(Object.assign({}, C, L)),
            I = b === p ? S : k,
            N = {
              top: x.top - I.top + E.top,
              bottom: I.bottom - x.bottom + E.bottom,
              left: x.left - I.left + E.left,
              right: I.right - x.right + E.right
            },
            P = t.modifiersData.offset;
          if (b === p && P) {
            var j = P[a];
            Object.keys(N).forEach(function (t) {
              var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
                i = [s, o].indexOf(t) >= 0 ? "y" : "x";
              N[t] += j[i] * e;
            });
          }
          return N;
        }
        var bt = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function fn(t) {
            var e = t.state,
              i = t.options,
              n = t.name;
            if (!e.modifiersData[n]._skip) {
              for (var u = i.mainAxis, d = void 0 === u || u, f = i.altAxis, p = void 0 === f || f, g = i.fallbackPlacements, b = i.padding, v = i.boundary, y = i.rootBoundary, w = i.altBoundary, A = i.flipVariations, E = void 0 === A || A, T = i.allowedAutoPlacements, C = e.options.placement, O = P(C), x = g || (O === C || !E ? [ot(C)] : function (t) {
                  if (P(t) === l) return [];
                  var e = ot(t);
                  return [at(t), e, at(e)];
                }(C)), k = [C].concat(x).reduce(function (t, i) {
                  return t.concat(P(i) === l ? function (t, e) {
                    void 0 === e && (e = {});
                    var i = e,
                      n = i.placement,
                      s = i.boundary,
                      o = i.rootBoundary,
                      r = i.padding,
                      a = i.flipVariations,
                      l = i.allowedAutoPlacements,
                      h = void 0 === l ? _ : l,
                      u = J(n),
                      d = u ? a ? m : m.filter(function (t) {
                        return J(t) === u;
                      }) : c,
                      f = d.filter(function (t) {
                        return h.indexOf(t) >= 0;
                      });
                    0 === f.length && (f = d);
                    var p = f.reduce(function (e, i) {
                      return e[i] = _t(t, {
                        placement: i,
                        boundary: s,
                        rootBoundary: o,
                        padding: r
                      })[P(i)], e;
                    }, {});
                    return Object.keys(p).sort(function (t, e) {
                      return p[t] - p[e];
                    });
                  }(e, {
                    placement: i,
                    boundary: v,
                    rootBoundary: y,
                    padding: b,
                    flipVariations: E,
                    allowedAutoPlacements: T
                  }) : i);
                }, []), L = e.rects.reference, D = e.rects.popper, S = new Map(), I = !0, N = k[0], j = 0; j < k.length; j++) {
                var M = k[j],
                  H = P(M),
                  $ = J(M) === h,
                  W = [s, o].indexOf(H) >= 0,
                  B = W ? "width" : "height",
                  F = _t(e, {
                    placement: M,
                    boundary: v,
                    rootBoundary: y,
                    altBoundary: w,
                    padding: b
                  }),
                  z = W ? $ ? r : a : $ ? o : s;
                L[B] > D[B] && (z = ot(z));
                var R = ot(z),
                  q = [];
                if (d && q.push(F[H] <= 0), p && q.push(F[z] <= 0, F[R] <= 0), q.every(function (t) {
                  return t;
                })) {
                  N = M, I = !1;
                  break;
                }
                S.set(M, q);
              }
              if (I) for (var V = function V(t) {
                  var e = k.find(function (e) {
                    var i = S.get(e);
                    if (i) return i.slice(0, t).every(function (t) {
                      return t;
                    });
                  });
                  if (e) return N = e, "break";
                }, K = E ? 3 : 1; K > 0; K--) {
                if ("break" === V(K)) break;
              }
              e.placement !== N && (e.modifiersData[n]._skip = !0, e.placement = N, e.reset = !0);
            }
          },
          requiresIfExists: ["offset"],
          data: {
            _skip: !1
          }
        };
        function vt(t, e, i) {
          return void 0 === i && (i = {
            x: 0,
            y: 0
          }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
          };
        }
        function yt(t) {
          return [s, r, o, a].some(function (e) {
            return t[e] >= 0;
          });
        }
        var wt = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function fn(t) {
            var e = t.state,
              i = t.name,
              n = e.rects.reference,
              s = e.rects.popper,
              o = e.modifiersData.preventOverflow,
              r = _t(e, {
                elementContext: "reference"
              }),
              a = _t(e, {
                altBoundary: !0
              }),
              l = vt(r, n),
              c = vt(a, s, o),
              h = yt(l),
              u = yt(c);
            e.modifiersData[i] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: c,
              isReferenceHidden: h,
              hasPopperEscaped: u
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": h,
              "data-popper-escaped": u
            });
          }
        };
        var At = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function fn(t) {
            var e = t.state,
              i = t.options,
              n = t.name,
              o = i.offset,
              l = void 0 === o ? [0, 0] : o,
              c = _.reduce(function (t, i) {
                return t[i] = function (t, e, i) {
                  var n = P(t),
                    o = [a, s].indexOf(n) >= 0 ? -1 : 1,
                    l = "function" == typeof i ? i(Object.assign({}, e, {
                      placement: t
                    })) : i,
                    c = l[0],
                    h = l[1];
                  return c = c || 0, h = (h || 0) * o, [a, r].indexOf(n) >= 0 ? {
                    x: h,
                    y: c
                  } : {
                    x: c,
                    y: h
                  };
                }(i, e.rects, l), t;
              }, {}),
              h = c[e.placement],
              u = h.x,
              d = h.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += d), e.modifiersData[n] = c;
          }
        };
        var Et = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function fn(t) {
            var e = t.state,
              i = t.name;
            e.modifiersData[i] = mt({
              reference: e.rects.reference,
              element: e.rects.popper,
              strategy: "absolute",
              placement: e.placement
            });
          },
          data: {}
        };
        var Tt = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: function fn(t) {
            var e = t.state,
              i = t.options,
              n = t.name,
              l = i.mainAxis,
              c = void 0 === l || l,
              u = i.altAxis,
              d = void 0 !== u && u,
              f = i.boundary,
              p = i.rootBoundary,
              g = i.altBoundary,
              m = i.padding,
              _ = i.tether,
              b = void 0 === _ || _,
              v = i.tetherOffset,
              y = void 0 === v ? 0 : v,
              w = _t(e, {
                boundary: f,
                rootBoundary: p,
                padding: m,
                altBoundary: g
              }),
              A = P(e.placement),
              E = J(e.placement),
              T = !E,
              C = Q(A),
              O = "x" === C ? "y" : "x",
              x = e.modifiersData.popperOffsets,
              k = e.rects.reference,
              L = e.rects.popper,
              D = "function" == typeof y ? y(Object.assign({}, e.rects, {
                placement: e.placement
              })) : y,
              S = "number" == typeof D ? {
                mainAxis: D,
                altAxis: D
              } : Object.assign({
                mainAxis: 0,
                altAxis: 0
              }, D),
              I = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
              N = {
                x: 0,
                y: 0
              };
            if (x) {
              if (c) {
                var H,
                  $ = "y" === C ? s : a,
                  B = "y" === C ? o : r,
                  F = "y" === C ? "height" : "width",
                  z = x[C],
                  R = z + w[$],
                  q = z - w[B],
                  V = b ? -L[F] / 2 : 0,
                  Y = E === h ? k[F] : L[F],
                  U = E === h ? -L[F] : -k[F],
                  G = e.elements.arrow,
                  Z = b && G ? W(G) : {
                    width: 0,
                    height: 0
                  },
                  tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                  },
                  et = tt[$],
                  it = tt[B],
                  nt = X(0, k[F], Z[F]),
                  st = T ? k[F] / 2 - V - nt - et - S.mainAxis : Y - nt - et - S.mainAxis,
                  ot = T ? -k[F] / 2 + V + nt + it + S.mainAxis : U + nt + it + S.mainAxis,
                  rt = e.elements.arrow && K(e.elements.arrow),
                  at = rt ? "y" === C ? rt.clientTop || 0 : rt.clientLeft || 0 : 0,
                  lt = null != (H = null == I ? void 0 : I[C]) ? H : 0,
                  ct = z + ot - lt,
                  ht = X(b ? M(R, z + st - lt - at) : R, z, b ? j(q, ct) : q);
                x[C] = ht, N[C] = ht - z;
              }
              if (d) {
                var ut,
                  dt = "x" === C ? s : a,
                  ft = "x" === C ? o : r,
                  pt = x[O],
                  gt = "y" === O ? "height" : "width",
                  mt = pt + w[dt],
                  bt = pt - w[ft],
                  vt = -1 !== [s, a].indexOf(A),
                  yt = null != (ut = null == I ? void 0 : I[O]) ? ut : 0,
                  wt = vt ? mt : pt - k[gt] - L[gt] - yt + S.altAxis,
                  At = vt ? pt + k[gt] + L[gt] - yt - S.altAxis : bt,
                  Et = b && vt ? function (t, e, i) {
                    var n = X(t, e, i);
                    return n > i ? i : n;
                  }(wt, pt, At) : X(b ? wt : mt, pt, b ? At : bt);
                x[O] = Et, N[O] = Et - pt;
              }
              e.modifiersData[n] = N;
            }
          },
          requiresIfExists: ["offset"]
        };
        function Ct(t, e, i) {
          void 0 === i && (i = !1);
          var n,
            s,
            o = S(e),
            r = S(e) && function (t) {
              var e = t.getBoundingClientRect(),
                i = H(e.width) / t.offsetWidth || 1,
                n = H(e.height) / t.offsetHeight || 1;
              return 1 !== i || 1 !== n;
            }(e),
            a = R(e),
            l = $(t, r),
            c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            h = {
              x: 0,
              y: 0
            };
          return (o || !o && !i) && (("body" !== k(e) || ht(a)) && (c = (n = e) !== L(n) && S(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
          } : lt(n)), S(e) ? ((h = $(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = ct(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
          };
        }
        function Ot(t) {
          var e = new Map(),
            i = new Set(),
            n = [];
          function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
              if (!i.has(t)) {
                var n = e.get(t);
                n && s(n);
              }
            }), n.push(t);
          }
          return t.forEach(function (t) {
            e.set(t.name, t);
          }), t.forEach(function (t) {
            i.has(t.name) || s(t);
          }), n;
        }
        var xt = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute"
        };
        function kt() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
            e[i] = arguments[i];
          }
          return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
          });
        }
        function Lt(t) {
          void 0 === t && (t = {});
          var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? xt : s;
          return function (t, e, i) {
            void 0 === i && (i = o);
            var s,
              r,
              a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, xt, o),
                modifiersData: {},
                elements: {
                  reference: t,
                  popper: e
                },
                attributes: {},
                styles: {}
              },
              l = [],
              c = !1,
              h = {
                state: a,
                setOptions: function setOptions(i) {
                  var s = "function" == typeof i ? i(a.options) : i;
                  u(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                    reference: D(t) ? dt(t) : t.contextElement ? dt(t.contextElement) : [],
                    popper: dt(e)
                  };
                  var r = function (t) {
                    var e = Ot(t);
                    return x.reduce(function (t, i) {
                      return t.concat(e.filter(function (t) {
                        return t.phase === i;
                      }));
                    }, []);
                  }(function (t) {
                    var e = t.reduce(function (t, e) {
                      var i = t[e.name];
                      return t[e.name] = i ? Object.assign({}, i, e, {
                        options: Object.assign({}, i.options, e.options),
                        data: Object.assign({}, i.data, e.data)
                      }) : e, t;
                    }, {});
                    return Object.keys(e).map(function (t) {
                      return e[t];
                    });
                  }([].concat(n, a.options.modifiers)));
                  return a.orderedModifiers = r.filter(function (t) {
                    return t.enabled;
                  }), a.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      i = t.options,
                      n = void 0 === i ? {} : i,
                      s = t.effect;
                    if ("function" == typeof s) {
                      var o = s({
                          state: a,
                          name: e,
                          instance: h,
                          options: n
                        }),
                        r = function r() {};
                      l.push(o || r);
                    }
                  }), h.update();
                },
                forceUpdate: function forceUpdate() {
                  if (!c) {
                    var t = a.elements,
                      e = t.reference,
                      i = t.popper;
                    if (kt(e, i)) {
                      a.rects = {
                        reference: Ct(e, K(i), "fixed" === a.options.strategy),
                        popper: W(i)
                      }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                        return a.modifiersData[t.name] = Object.assign({}, t.data);
                      });
                      for (var n = 0; n < a.orderedModifiers.length; n++) {
                        if (!0 !== a.reset) {
                          var s = a.orderedModifiers[n],
                            o = s.fn,
                            r = s.options,
                            l = void 0 === r ? {} : r,
                            u = s.name;
                          "function" == typeof o && (a = o({
                            state: a,
                            options: l,
                            name: u,
                            instance: h
                          }) || a);
                        } else a.reset = !1, n = -1;
                      }
                    }
                  }
                },
                update: (s = function s() {
                  return new Promise(function (t) {
                    h.forceUpdate(), t(a);
                  });
                }, function () {
                  return r || (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      r = void 0, t(s());
                    });
                  })), r;
                }),
                destroy: function destroy() {
                  u(), c = !0;
                }
              };
            if (!kt(t, e)) return h;
            function u() {
              l.forEach(function (t) {
                return t();
              }), l = [];
            }
            return h.setOptions(i).then(function (t) {
              !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }), h;
          };
        }
        var Dt = Lt(),
          St = Lt({
            defaultModifiers: [nt, Et, et, N, At, bt, Tt, G, wt]
          }),
          It = Lt({
            defaultModifiers: [nt, Et, et, N]
          });
        var Nt = "transitionend",
          Pt = function Pt(t) {
            var e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
              var _i2 = t.getAttribute("href");
              if (!_i2 || !_i2.includes("#") && !_i2.startsWith(".")) return null;
              _i2.includes("#") && !_i2.startsWith("#") && (_i2 = "#".concat(_i2.split("#")[1])), e = _i2 && "#" !== _i2 ? _i2.trim() : null;
            }
            return e;
          },
          jt = function jt(t) {
            var e = Pt(t);
            return e && document.querySelector(e) ? e : null;
          },
          Mt = function Mt(t) {
            var e = Pt(t);
            return e ? document.querySelector(e) : null;
          },
          Ht = function Ht(t) {
            t.dispatchEvent(new Event(Nt));
          },
          $t = function $t(t) {
            return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
          },
          Wt = function Wt(t) {
            return $t(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null;
          },
          Bt = function Bt(t) {
            if (!$t(t) || 0 === t.getClientRects().length) return !1;
            var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
              i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
              var _e2 = t.closest("summary");
              if (_e2 && _e2.parentNode !== i) return !1;
              if (null === _e2) return !1;
            }
            return e;
          },
          Ft = function Ft(t) {
            return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
          },
          zt = function zt(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
              var _e3 = t.getRootNode();
              return _e3 instanceof ShadowRoot ? _e3 : null;
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? zt(t.parentNode) : null;
          },
          Rt = function Rt() {},
          qt = function qt(t) {
            t.offsetHeight;
          },
          Vt = function Vt() {
            return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
          },
          Kt = [],
          Qt = function Qt() {
            return "rtl" === document.documentElement.dir;
          },
          Xt = function Xt(t) {
            var e;
            e = function e() {
              var e = Vt();
              if (e) {
                var _i3 = t.NAME,
                  _n2 = e.fn[_i3];
                e.fn[_i3] = t.jQueryInterface, e.fn[_i3].Constructor = t, e.fn[_i3].noConflict = function () {
                  return e.fn[_i3] = _n2, t.jQueryInterface;
                };
              }
            }, "loading" === document.readyState ? (Kt.length || document.addEventListener("DOMContentLoaded", function () {
              var _iterator = _createForOfIteratorHelper(Kt),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _t2 = _step.value;
                  _t2();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }), Kt.push(e)) : e();
          },
          Yt = function Yt(t) {
            "function" == typeof t && t();
          },
          Ut = function Ut(t, e) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
            if (!i) return void Yt(t);
            var n = function (t) {
              if (!t) return 0;
              var _window$getComputedSt = window.getComputedStyle(t),
                e = _window$getComputedSt.transitionDuration,
                i = _window$getComputedSt.transitionDelay;
              var n = Number.parseFloat(e),
                s = Number.parseFloat(i);
              return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
            }(e) + 5;
            var s = !1;
            var o = function o(_ref) {
              var i = _ref.target;
              i === e && (s = !0, e.removeEventListener(Nt, o), Yt(t));
            };
            e.addEventListener(Nt, o), setTimeout(function () {
              s || Ht(e);
            }, n);
          },
          Gt = function Gt(t, e, i, n) {
            var s = t.length;
            var o = t.indexOf(e);
            return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
          },
          Jt = /[^.]*(?=\..*)\.|.*/,
          Zt = /\..*/,
          te = /::\d+$/,
          ee = {};
        var ie = 1;
        var ne = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
          },
          se = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function oe(t, e) {
          return e && "".concat(e, "::").concat(ie++) || t.uidEvent || ie++;
        }
        function re(t) {
          var e = oe(t);
          return t.uidEvent = e, ee[e] = ee[e] || {}, ee[e];
        }
        function ae(t, e) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return Object.values(t).find(function (t) {
            return t.callable === e && t.delegationSelector === i;
          });
        }
        function le(t, e, i) {
          var n = "string" == typeof e,
            s = n ? i : e || i;
          var o = de(t);
          return se.has(o) || (o = t), [n, s, o];
        }
        function ce(t, e, i, n, s) {
          if ("string" != typeof e || !t) return;
          var _le = le(e, i, n),
            _le2 = _slicedToArray(_le, 3),
            o = _le2[0],
            r = _le2[1],
            a = _le2[2];
          if (e in ne) {
            var _t3 = function _t3(t) {
              return function (e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
              };
            };
            r = _t3(r);
          }
          var l = re(t),
            c = l[a] || (l[a] = {}),
            h = ae(c, r, o ? i : null);
          if (h) return void (h.oneOff = h.oneOff && s);
          var u = oe(r, e.replace(Jt, "")),
            d = o ? function (t, e, i) {
              return function n(s) {
                var o = t.querySelectorAll(e);
                for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) {
                  var _iterator2 = _createForOfIteratorHelper(o),
                    _step2;
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var _a = _step2.value;
                      if (_a === _r) return pe(s, {
                        delegateTarget: _r
                      }), n.oneOff && fe.off(t, s.type, e, i), i.apply(_r, [s]);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              };
            }(t, i, r) : function (t, e) {
              return function i(n) {
                return pe(n, {
                  delegateTarget: t
                }), i.oneOff && fe.off(t, n.type, e), e.apply(t, [n]);
              };
            }(t, r);
          d.delegationSelector = o ? i : null, d.callable = r, d.oneOff = s, d.uidEvent = u, c[u] = d, t.addEventListener(a, d, o);
        }
        function he(t, e, i, n, s) {
          var o = ae(e[i], n, s);
          o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
        }
        function ue(t, e, i, n) {
          var s = e[i] || {};
          for (var _i4 = 0, _Object$keys = Object.keys(s); _i4 < _Object$keys.length; _i4++) {
            var _o = _Object$keys[_i4];
            if (_o.includes(n)) {
              var _n3 = s[_o];
              he(t, e, i, _n3.callable, _n3.delegationSelector);
            }
          }
        }
        function de(t) {
          return t = t.replace(Zt, ""), ne[t] || t;
        }
        var fe = {
          on: function on(t, e, i, n) {
            ce(t, e, i, n, !1);
          },
          one: function one(t, e, i, n) {
            ce(t, e, i, n, !0);
          },
          off: function off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            var _le3 = le(e, i, n),
              _le4 = _slicedToArray(_le3, 3),
              s = _le4[0],
              o = _le4[1],
              r = _le4[2],
              a = r !== e,
              l = re(t),
              c = l[r] || {},
              h = e.startsWith(".");
            if (void 0 === o) {
              if (h) for (var _i5 = 0, _Object$keys2 = Object.keys(l); _i5 < _Object$keys2.length; _i5++) {
                var _i6 = _Object$keys2[_i5];
                ue(t, l, _i6, e.slice(1));
              }
              for (var _i7 = 0, _Object$keys3 = Object.keys(c); _i7 < _Object$keys3.length; _i7++) {
                var _i8 = _Object$keys3[_i7];
                var _n4 = _i8.replace(te, "");
                if (!a || e.includes(_n4)) {
                  var _e4 = c[_i8];
                  he(t, l, r, _e4.callable, _e4.delegationSelector);
                }
              }
            } else {
              if (!Object.keys(c).length) return;
              he(t, l, r, o, s ? i : null);
            }
          },
          trigger: function trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            var n = Vt();
            var s = null,
              o = !0,
              r = !0,
              a = !1;
            e !== de(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            var l = new Event(e, {
              bubbles: o,
              cancelable: !0
            });
            return l = pe(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
          }
        };
        function pe(t, e) {
          var _loop = function _loop() {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i9], 2),
              i = _Object$entries$_i[0],
              n = _Object$entries$_i[1];
            try {
              t[i] = n;
            } catch (e) {
              Object.defineProperty(t, i, {
                configurable: !0,
                get: function get() {
                  return n;
                }
              });
            }
          };
          for (var _i9 = 0, _Object$entries = Object.entries(e || {}); _i9 < _Object$entries.length; _i9++) {
            _loop();
          }
          return t;
        }
        var ge = new Map(),
          me = {
            set: function set(t, e, i) {
              ge.has(t) || ge.set(t, new Map());
              var n = ge.get(t);
              n.has(e) || 0 === n.size ? n.set(e, i) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
            },
            get: function get(t, e) {
              return ge.has(t) && ge.get(t).get(e) || null;
            },
            remove: function remove(t, e) {
              if (!ge.has(t)) return;
              var i = ge.get(t);
              i["delete"](e), 0 === i.size && ge["delete"](t);
            }
          };
        function _e(t) {
          if ("true" === t) return !0;
          if ("false" === t) return !1;
          if (t === Number(t).toString()) return Number(t);
          if ("" === t || "null" === t) return null;
          if ("string" != typeof t) return t;
          try {
            return JSON.parse(decodeURIComponent(t));
          } catch (e) {
            return t;
          }
        }
        function be(t) {
          return t.replace(/[A-Z]/g, function (t) {
            return "-".concat(t.toLowerCase());
          });
        }
        var ve = {
          setDataAttribute: function setDataAttribute(t, e, i) {
            t.setAttribute("data-bs-".concat(be(e)), i);
          },
          removeDataAttribute: function removeDataAttribute(t, e) {
            t.removeAttribute("data-bs-".concat(be(e)));
          },
          getDataAttributes: function getDataAttributes(t) {
            if (!t) return {};
            var e = {},
              i = Object.keys(t.dataset).filter(function (t) {
                return t.startsWith("bs") && !t.startsWith("bsConfig");
              });
            var _iterator3 = _createForOfIteratorHelper(i),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _n5 = _step3.value;
                var _i10 = _n5.replace(/^bs/, "");
                _i10 = _i10.charAt(0).toLowerCase() + _i10.slice(1, _i10.length), e[_i10] = _e(t.dataset[_n5]);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            return e;
          },
          getDataAttribute: function getDataAttribute(t, e) {
            return _e(t.getAttribute("data-bs-".concat(be(e))));
          }
        };
        var ye = /*#__PURE__*/function () {
          function ye() {
            _classCallCheck(this, ye);
          }
          _createClass(ye, [{
            key: "_getConfig",
            value: function _getConfig(t) {
              return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
            }
          }, {
            key: "_configAfterMerge",
            value: function _configAfterMerge(t) {
              return t;
            }
          }, {
            key: "_mergeConfigObj",
            value: function _mergeConfigObj(t, e) {
              var i = $t(e) ? ve.getDataAttribute(e, "config") : {};
              return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(i) ? i : {}), $t(e) ? ve.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
            }
          }, {
            key: "_typeCheckConfig",
            value: function _typeCheckConfig(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
              for (var _i11 = 0, _Object$keys4 = Object.keys(e); _i11 < _Object$keys4.length; _i11++) {
                var _n6 = _Object$keys4[_i11];
                var _s2 = e[_n6],
                  _o2 = t[_n6],
                  _r2 = $t(_o2) ? "element" : null == (i = _o2) ? "".concat(i) : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(_s2).test(_r2)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_n6, "\" provided type \"").concat(_r2, "\" but expected type \"").concat(_s2, "\"."));
              }
              var i;
            }
          }], [{
            key: "Default",
            get: function get() {
              return {};
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return {};
            }
          }, {
            key: "NAME",
            get: function get() {
              throw new Error('You have to implement the static method "NAME", for each component!');
            }
          }]);
          return ye;
        }();
        var we = /*#__PURE__*/function (_ye) {
          _inherits(we, _ye);
          var _super = _createSuper(we);
          function we(t, e) {
            var _this;
            _classCallCheck(this, we);
            _this = _super.call(this), (t = Wt(t)) && (_this._element = t, _this._config = _this._getConfig(e), me.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
            return _this;
          }
          _createClass(we, [{
            key: "dispose",
            value: function dispose() {
              me.remove(this._element, this.constructor.DATA_KEY), fe.off(this._element, this.constructor.EVENT_KEY);
              var _iterator4 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var _t4 = _step4.value;
                  this[_t4] = null;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          }, {
            key: "_queueCallback",
            value: function _queueCallback(t, e) {
              var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
              Ut(t, e, i);
            }
          }, {
            key: "_getConfig",
            value: function _getConfig(t) {
              return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
            }
          }], [{
            key: "getInstance",
            value: function getInstance(t) {
              return me.get(Wt(t), this.DATA_KEY);
            }
          }, {
            key: "getOrCreateInstance",
            value: function getOrCreateInstance(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
            }
          }, {
            key: "VERSION",
            get: function get() {
              return "5.2.0";
            }
          }, {
            key: "DATA_KEY",
            get: function get() {
              return "bs.".concat(this.NAME);
            }
          }, {
            key: "EVENT_KEY",
            get: function get() {
              return ".".concat(this.DATA_KEY);
            }
          }, {
            key: "eventName",
            value: function eventName(t) {
              return "".concat(t).concat(this.EVENT_KEY);
            }
          }]);
          return we;
        }(ye);
        var Ae = function Ae(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
          var i = "click.dismiss".concat(t.EVENT_KEY),
            n = t.NAME;
          fe.on(document, i, "[data-bs-dismiss=\"".concat(n, "\"]"), function (i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Ft(this)) return;
            var s = Mt(this) || this.closest(".".concat(n));
            t.getOrCreateInstance(s)[e]();
          });
        };
        var Ee = /*#__PURE__*/function (_we) {
          _inherits(Ee, _we);
          var _super2 = _createSuper(Ee);
          function Ee() {
            _classCallCheck(this, Ee);
            return _super2.apply(this, arguments);
          }
          _createClass(Ee, [{
            key: "close",
            value: function close() {
              var _this2 = this;
              if (fe.trigger(this._element, "close.bs.alert").defaultPrevented) return;
              this._element.classList.remove("show");
              var t = this._element.classList.contains("fade");
              this._queueCallback(function () {
                return _this2._destroyElement();
              }, this._element, t);
            }
          }, {
            key: "_destroyElement",
            value: function _destroyElement() {
              this._element.remove(), fe.trigger(this._element, "closed.bs.alert"), this.dispose();
            }
          }], [{
            key: "NAME",
            get: function get() {
              return "alert";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = Ee.getOrCreateInstance(this);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t](this);
                }
              });
            }
          }]);
          return Ee;
        }(we);
        Ae(Ee, "close"), Xt(Ee);
        var Te = '[data-bs-toggle="button"]';
        var Ce = /*#__PURE__*/function (_we2) {
          _inherits(Ce, _we2);
          var _super3 = _createSuper(Ce);
          function Ce() {
            _classCallCheck(this, Ce);
            return _super3.apply(this, arguments);
          }
          _createClass(Ce, [{
            key: "toggle",
            value: function toggle() {
              this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            }
          }], [{
            key: "NAME",
            get: function get() {
              return "button";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = Ce.getOrCreateInstance(this);
                "toggle" === t && e[t]();
              });
            }
          }]);
          return Ce;
        }(we);
        fe.on(document, "click.bs.button.data-api", Te, function (t) {
          t.preventDefault();
          var e = t.target.closest(Te);
          Ce.getOrCreateInstance(e).toggle();
        }), Xt(Ce);
        var Oe = {
            find: function find(t) {
              var _ref2;
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
              return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
            },
            findOne: function findOne(t) {
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
              return Element.prototype.querySelector.call(e, t);
            },
            children: function children(t, e) {
              var _ref3;
              return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
                return t.matches(e);
              });
            },
            parents: function parents(t, e) {
              var i = [];
              var n = t.parentNode.closest(e);
              for (; n;) {
                i.push(n), n = n.parentNode.closest(e);
              }
              return i;
            },
            prev: function prev(t, e) {
              var i = t.previousElementSibling;
              for (; i;) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling;
              }
              return [];
            },
            next: function next(t, e) {
              var i = t.nextElementSibling;
              for (; i;) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling;
              }
              return [];
            },
            focusableChildren: function focusableChildren(t) {
              var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
                return "".concat(t, ":not([tabindex^=\"-\"])");
              }).join(",");
              return this.find(e, t).filter(function (t) {
                return !Ft(t) && Bt(t);
              });
            }
          },
          xe = ".bs.swipe",
          ke = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
          },
          Le = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
          };
        var De = /*#__PURE__*/function (_ye2) {
          _inherits(De, _ye2);
          var _super4 = _createSuper(De);
          function De(t, e) {
            var _this3;
            _classCallCheck(this, De);
            _this3 = _super4.call(this), _this3._element = t, t && De.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
            return _this3;
          }
          _createClass(De, [{
            key: "dispose",
            value: function dispose() {
              fe.off(this._element, xe);
            }
          }, {
            key: "_start",
            value: function _start(t) {
              this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
            }
          }, {
            key: "_end",
            value: function _end(t) {
              this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), Yt(this._config.endCallback);
            }
          }, {
            key: "_move",
            value: function _move(t) {
              this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
            }
          }, {
            key: "_handleSwipe",
            value: function _handleSwipe() {
              var t = Math.abs(this._deltaX);
              if (t <= 40) return;
              var e = t / this._deltaX;
              this._deltaX = 0, e && Yt(e > 0 ? this._config.rightCallback : this._config.leftCallback);
            }
          }, {
            key: "_initEvents",
            value: function _initEvents() {
              var _this4 = this;
              this._supportPointerEvents ? (fe.on(this._element, "pointerdown.bs.swipe", function (t) {
                return _this4._start(t);
              }), fe.on(this._element, "pointerup.bs.swipe", function (t) {
                return _this4._end(t);
              }), this._element.classList.add("pointer-event")) : (fe.on(this._element, "touchstart.bs.swipe", function (t) {
                return _this4._start(t);
              }), fe.on(this._element, "touchmove.bs.swipe", function (t) {
                return _this4._move(t);
              }), fe.on(this._element, "touchend.bs.swipe", function (t) {
                return _this4._end(t);
              }));
            }
          }, {
            key: "_eventIsPointerPenTouch",
            value: function _eventIsPointerPenTouch(t) {
              return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
            }
          }], [{
            key: "Default",
            get: function get() {
              return ke;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return Le;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "swipe";
            }
          }, {
            key: "isSupported",
            value: function isSupported() {
              return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
            }
          }]);
          return De;
        }(ye);
        var Se = "next",
          Ie = "prev",
          Ne = "left",
          Pe = "right",
          je = "slid.bs.carousel",
          Me = "carousel",
          He = "active",
          $e = ".active",
          We = ".carousel-item",
          Be = {
            ArrowLeft: Pe,
            ArrowRight: Ne
          },
          Fe = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
          },
          ze = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
          };
        var Re = /*#__PURE__*/function (_we3) {
          _inherits(Re, _we3);
          var _super5 = _createSuper(Re);
          function Re(t, e) {
            var _this5;
            _classCallCheck(this, Re);
            _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = Oe.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === Me && _this5.cycle();
            return _this5;
          }
          _createClass(Re, [{
            key: "next",
            value: function next() {
              this._slide(Se);
            }
          }, {
            key: "nextWhenVisible",
            value: function nextWhenVisible() {
              !document.hidden && Bt(this._element) && this.next();
            }
          }, {
            key: "prev",
            value: function prev() {
              this._slide(Ie);
            }
          }, {
            key: "pause",
            value: function pause() {
              this._isSliding && Ht(this._element), this._clearInterval();
            }
          }, {
            key: "cycle",
            value: function cycle() {
              var _this6 = this;
              this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
                return _this6.nextWhenVisible();
              }, this._config.interval);
            }
          }, {
            key: "_maybeEnableCycle",
            value: function _maybeEnableCycle() {
              var _this7 = this;
              this._config.ride && (this._isSliding ? fe.one(this._element, je, function () {
                return _this7.cycle();
              }) : this.cycle());
            }
          }, {
            key: "to",
            value: function to(t) {
              var _this8 = this;
              var e = this._getItems();
              if (t > e.length - 1 || t < 0) return;
              if (this._isSliding) return void fe.one(this._element, je, function () {
                return _this8.to(t);
              });
              var i = this._getItemIndex(this._getActive());
              if (i === t) return;
              var n = t > i ? Se : Ie;
              this._slide(n, e[t]);
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(Re.prototype), "dispose", this).call(this);
            }
          }, {
            key: "_configAfterMerge",
            value: function _configAfterMerge(t) {
              return t.defaultInterval = t.interval, t;
            }
          }, {
            key: "_addEventListeners",
            value: function _addEventListeners() {
              var _this9 = this;
              this._config.keyboard && fe.on(this._element, "keydown.bs.carousel", function (t) {
                return _this9._keydown(t);
              }), "hover" === this._config.pause && (fe.on(this._element, "mouseenter.bs.carousel", function () {
                return _this9.pause();
              }), fe.on(this._element, "mouseleave.bs.carousel", function () {
                return _this9._maybeEnableCycle();
              })), this._config.touch && De.isSupported() && this._addTouchEventListeners();
            }
          }, {
            key: "_addTouchEventListeners",
            value: function _addTouchEventListeners() {
              var _this10 = this;
              var _iterator5 = _createForOfIteratorHelper(Oe.find(".carousel-item img", this._element)),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _t5 = _step5.value;
                  fe.on(_t5, "dragstart.bs.carousel", function (t) {
                    return t.preventDefault();
                  });
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              var t = {
                leftCallback: function leftCallback() {
                  return _this10._slide(_this10._directionToOrder(Ne));
                },
                rightCallback: function rightCallback() {
                  return _this10._slide(_this10._directionToOrder(Pe));
                },
                endCallback: function endCallback() {
                  "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
                    return _this10._maybeEnableCycle();
                  }, 500 + _this10._config.interval));
                }
              };
              this._swipeHelper = new De(this._element, t);
            }
          }, {
            key: "_keydown",
            value: function _keydown(t) {
              if (/input|textarea/i.test(t.target.tagName)) return;
              var e = Be[t.key];
              e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
            }
          }, {
            key: "_getItemIndex",
            value: function _getItemIndex(t) {
              return this._getItems().indexOf(t);
            }
          }, {
            key: "_setActiveIndicatorElement",
            value: function _setActiveIndicatorElement(t) {
              if (!this._indicatorsElement) return;
              var e = Oe.findOne($e, this._indicatorsElement);
              e.classList.remove(He), e.removeAttribute("aria-current");
              var i = Oe.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
              i && (i.classList.add(He), i.setAttribute("aria-current", "true"));
            }
          }, {
            key: "_updateInterval",
            value: function _updateInterval() {
              var t = this._activeElement || this._getActive();
              if (!t) return;
              var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
              this._config.interval = e || this._config.defaultInterval;
            }
          }, {
            key: "_slide",
            value: function _slide(t) {
              var _this11 = this;
              var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              if (this._isSliding) return;
              var i = this._getActive(),
                n = t === Se,
                s = e || Gt(this._getItems(), i, n, this._config.wrap);
              if (s === i) return;
              var o = this._getItemIndex(s),
                r = function r(e) {
                  return fe.trigger(_this11._element, e, {
                    relatedTarget: s,
                    direction: _this11._orderToDirection(t),
                    from: _this11._getItemIndex(i),
                    to: o
                  });
                };
              if (r("slide.bs.carousel").defaultPrevented) return;
              if (!i || !s) return;
              var a = Boolean(this._interval);
              this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
              var l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
              s.classList.add(c), qt(s), i.classList.add(l), s.classList.add(l);
              this._queueCallback(function () {
                s.classList.remove(l, c), s.classList.add(He), i.classList.remove(He, c, l), _this11._isSliding = !1, r(je);
              }, i, this._isAnimated()), a && this.cycle();
            }
          }, {
            key: "_isAnimated",
            value: function _isAnimated() {
              return this._element.classList.contains("slide");
            }
          }, {
            key: "_getActive",
            value: function _getActive() {
              return Oe.findOne(".active.carousel-item", this._element);
            }
          }, {
            key: "_getItems",
            value: function _getItems() {
              return Oe.find(We, this._element);
            }
          }, {
            key: "_clearInterval",
            value: function _clearInterval() {
              this._interval && (clearInterval(this._interval), this._interval = null);
            }
          }, {
            key: "_directionToOrder",
            value: function _directionToOrder(t) {
              return Qt() ? t === Ne ? Ie : Se : t === Ne ? Se : Ie;
            }
          }, {
            key: "_orderToDirection",
            value: function _orderToDirection(t) {
              return Qt() ? t === Ie ? Ne : Pe : t === Ie ? Pe : Ne;
            }
          }], [{
            key: "Default",
            get: function get() {
              return Fe;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return ze;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "carousel";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = Re.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                  if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
                    e[t]();
                  }
                } else e.to(t);
              });
            }
          }]);
          return Re;
        }(we);
        fe.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {
          var e = Mt(this);
          if (!e || !e.classList.contains(Me)) return;
          t.preventDefault();
          var i = Re.getOrCreateInstance(e),
            n = this.getAttribute("data-bs-slide-to");
          return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === ve.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
        }), fe.on(window, "load.bs.carousel.data-api", function () {
          var t = Oe.find('[data-bs-ride="carousel"]');
          var _iterator6 = _createForOfIteratorHelper(t),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _e5 = _step6.value;
              Re.getOrCreateInstance(_e5);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }), Xt(Re);
        var qe = "show",
          Ve = "collapse",
          Ke = "collapsing",
          Qe = '[data-bs-toggle="collapse"]',
          Xe = {
            parent: null,
            toggle: !0
          },
          Ye = {
            parent: "(null|element)",
            toggle: "boolean"
          };
        var Ue = /*#__PURE__*/function (_we4) {
          _inherits(Ue, _we4);
          var _super6 = _createSuper(Ue);
          function Ue(t, e) {
            var _this12;
            _classCallCheck(this, Ue);
            _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
            var i = Oe.find(Qe);
            var _iterator7 = _createForOfIteratorHelper(i),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _t6 = _step7.value;
                var _e6 = jt(_t6),
                  _i12 = Oe.find(_e6).filter(function (t) {
                    return t === _this12._element;
                  });
                null !== _e6 && _i12.length && _this12._triggerArray.push(_t6);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
            return _this12;
          }
          _createClass(Ue, [{
            key: "toggle",
            value: function toggle() {
              this._isShown() ? this.hide() : this.show();
            }
          }, {
            key: "show",
            value: function show() {
              var _this13 = this;
              if (this._isTransitioning || this._isShown()) return;
              var t = [];
              if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
                return t !== _this13._element;
              }).map(function (t) {
                return Ue.getOrCreateInstance(t, {
                  toggle: !1
                });
              })), t.length && t[0]._isTransitioning) return;
              if (fe.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
              var _iterator8 = _createForOfIteratorHelper(t),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _e7 = _step8.value;
                  _e7.hide();
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
              var e = this._getDimension();
              this._element.classList.remove(Ve), this._element.classList.add(Ke), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
              var i = "scroll".concat(e[0].toUpperCase() + e.slice(1));
              this._queueCallback(function () {
                _this13._isTransitioning = !1, _this13._element.classList.remove(Ke), _this13._element.classList.add(Ve, qe), _this13._element.style[e] = "", fe.trigger(_this13._element, "shown.bs.collapse");
              }, this._element, !0), this._element.style[e] = "".concat(this._element[i], "px");
            }
          }, {
            key: "hide",
            value: function hide() {
              var _this14 = this;
              if (this._isTransitioning || !this._isShown()) return;
              if (fe.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
              var t = this._getDimension();
              this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), qt(this._element), this._element.classList.add(Ke), this._element.classList.remove(Ve, qe);
              var _iterator9 = _createForOfIteratorHelper(this._triggerArray),
                _step9;
              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _t7 = _step9.value;
                  var _e8 = Mt(_t7);
                  _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
              this._isTransitioning = !0;
              this._element.style[t] = "", this._queueCallback(function () {
                _this14._isTransitioning = !1, _this14._element.classList.remove(Ke), _this14._element.classList.add(Ve), fe.trigger(_this14._element, "hidden.bs.collapse");
              }, this._element, !0);
            }
          }, {
            key: "_isShown",
            value: function _isShown() {
              var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
              return t.classList.contains(qe);
            }
          }, {
            key: "_configAfterMerge",
            value: function _configAfterMerge(t) {
              return t.toggle = Boolean(t.toggle), t.parent = Wt(t.parent), t;
            }
          }, {
            key: "_getDimension",
            value: function _getDimension() {
              return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            }
          }, {
            key: "_initializeChildren",
            value: function _initializeChildren() {
              if (!this._config.parent) return;
              var t = this._getFirstLevelChildren(Qe);
              var _iterator10 = _createForOfIteratorHelper(t),
                _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _e9 = _step10.value;
                  var _t8 = Mt(_e9);
                  _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          }, {
            key: "_getFirstLevelChildren",
            value: function _getFirstLevelChildren(t) {
              var e = Oe.find(":scope .collapse .collapse", this._config.parent);
              return Oe.find(t, this._config.parent).filter(function (t) {
                return !e.includes(t);
              });
            }
          }, {
            key: "_addAriaAndCollapsedClass",
            value: function _addAriaAndCollapsedClass(t, e) {
              if (t.length) {
                var _iterator11 = _createForOfIteratorHelper(t),
                  _step11;
                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var _i13 = _step11.value;
                    _i13.classList.toggle("collapsed", !e), _i13.setAttribute("aria-expanded", e);
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }
            }
          }], [{
            key: "Default",
            get: function get() {
              return Xe;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return Ye;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "collapse";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              var e = {};
              return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
                var i = Ue.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                  if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
                  i[t]();
                }
              });
            }
          }]);
          return Ue;
        }(we);
        fe.on(document, "click.bs.collapse.data-api", Qe, function (t) {
          ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
          var e = jt(this),
            i = Oe.find(e);
          var _iterator12 = _createForOfIteratorHelper(i),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _t9 = _step12.value;
              Ue.getOrCreateInstance(_t9, {
                toggle: !1
              }).toggle();
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }), Xt(Ue);
        var Ge = "dropdown",
          Je = "ArrowUp",
          Ze = "ArrowDown",
          ti = "click.bs.dropdown.data-api",
          ei = "keydown.bs.dropdown.data-api",
          ii = "show",
          ni = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
          si = "".concat(ni, ".show"),
          oi = ".dropdown-menu",
          ri = Qt() ? "top-end" : "top-start",
          ai = Qt() ? "top-start" : "top-end",
          li = Qt() ? "bottom-end" : "bottom-start",
          ci = Qt() ? "bottom-start" : "bottom-end",
          hi = Qt() ? "left-start" : "right-start",
          ui = Qt() ? "right-start" : "left-start",
          di = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
          },
          fi = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
          };
        var pi = /*#__PURE__*/function (_we5) {
          _inherits(pi, _we5);
          var _super7 = _createSuper(pi);
          function pi(t, e) {
            var _this15;
            _classCallCheck(this, pi);
            _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = Oe.findOne(oi, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
            return _this15;
          }
          _createClass(pi, [{
            key: "toggle",
            value: function toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
          }, {
            key: "show",
            value: function show() {
              if (Ft(this._element) || this._isShown()) return;
              var t = {
                relatedTarget: this._element
              };
              if (!fe.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
                  var _ref4;
                  var _iterator13 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
                    _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _t10 = _step13.value;
                      fe.on(_t10, "mouseover", Rt);
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                }
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ii), this._element.classList.add(ii), fe.trigger(this._element, "shown.bs.dropdown", t);
              }
            }
          }, {
            key: "hide",
            value: function hide() {
              if (Ft(this._element) || !this._isShown()) return;
              var t = {
                relatedTarget: this._element
              };
              this._completeHide(t);
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this._popper && this._popper.destroy(), _get(_getPrototypeOf(pi.prototype), "dispose", this).call(this);
            }
          }, {
            key: "update",
            value: function update() {
              this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
            }
          }, {
            key: "_completeHide",
            value: function _completeHide(t) {
              if (!fe.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) {
                  var _ref5;
                  var _iterator14 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
                    _step14;
                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _t11 = _step14.value;
                      fe.off(_t11, "mouseover", Rt);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                }
                this._popper && this._popper.destroy(), this._menu.classList.remove(ii), this._element.classList.remove(ii), this._element.setAttribute("aria-expanded", "false"), ve.removeDataAttribute(this._menu, "popper"), fe.trigger(this._element, "hidden.bs.dropdown", t);
              }
            }
          }, {
            key: "_getConfig",
            value: function _getConfig(t) {
              if ("object" == _typeof((t = _get(_getPrototypeOf(pi.prototype), "_getConfig", this).call(this, t)).reference) && !$t(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(Ge.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
              return t;
            }
          }, {
            key: "_createPopper",
            value: function _createPopper() {
              if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
              var t = this._element;
              "parent" === this._config.reference ? t = this._parent : $t(this._config.reference) ? t = Wt(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);
              var e = this._getPopperConfig();
              this._popper = St(t, this._menu, e);
            }
          }, {
            key: "_isShown",
            value: function _isShown() {
              return this._menu.classList.contains(ii);
            }
          }, {
            key: "_getPlacement",
            value: function _getPlacement() {
              var t = this._parent;
              if (t.classList.contains("dropend")) return hi;
              if (t.classList.contains("dropstart")) return ui;
              if (t.classList.contains("dropup-center")) return "top";
              if (t.classList.contains("dropdown-center")) return "bottom";
              var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
              return t.classList.contains("dropup") ? e ? ai : ri : e ? ci : li;
            }
          }, {
            key: "_detectNavbar",
            value: function _detectNavbar() {
              return null !== this._element.closest(".navbar");
            }
          }, {
            key: "_getOffset",
            value: function _getOffset() {
              var _this16 = this;
              var t = this._config.offset;
              return "string" == typeof t ? t.split(",").map(function (t) {
                return Number.parseInt(t, 10);
              }) : "function" == typeof t ? function (e) {
                return t(e, _this16._element);
              } : t;
            }
          }, {
            key: "_getPopperConfig",
            value: function _getPopperConfig() {
              var t = {
                placement: this._getPlacement(),
                modifiers: [{
                  name: "preventOverflow",
                  options: {
                    boundary: this._config.boundary
                  }
                }, {
                  name: "offset",
                  options: {
                    offset: this._getOffset()
                  }
                }]
              };
              return (this._inNavbar || "static" === this._config.display) && (ve.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
              }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
            }
          }, {
            key: "_selectMenuItem",
            value: function _selectMenuItem(_ref6) {
              var t = _ref6.key,
                e = _ref6.target;
              var i = Oe.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
                return Bt(t);
              });
              i.length && Gt(i, e, t === Ze, !i.includes(e)).focus();
            }
          }], [{
            key: "Default",
            get: function get() {
              return di;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return fi;
            }
          }, {
            key: "NAME",
            get: function get() {
              return Ge;
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = pi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t]();
                }
              });
            }
          }, {
            key: "clearMenus",
            value: function clearMenus(t) {
              if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
              var e = Oe.find(si);
              var _iterator15 = _createForOfIteratorHelper(e),
                _step15;
              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _i14 = _step15.value;
                  var _e10 = pi.getInstance(_i14);
                  if (!_e10 || !1 === _e10._config.autoClose) continue;
                  var _n7 = t.composedPath(),
                    _s3 = _n7.includes(_e10._menu);
                  if (_n7.includes(_e10._element) || "inside" === _e10._config.autoClose && !_s3 || "outside" === _e10._config.autoClose && _s3) continue;
                  if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                  var _o3 = {
                    relatedTarget: _e10._element
                  };
                  "click" === t.type && (_o3.clickEvent = t), _e10._completeHide(_o3);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }
          }, {
            key: "dataApiKeydownHandler",
            value: function dataApiKeydownHandler(t) {
              var e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                n = [Je, Ze].includes(t.key);
              if (!n && !i) return;
              if (e && !i) return;
              t.preventDefault();
              var s = Oe.findOne(ni, t.delegateTarget.parentNode),
                o = pi.getOrCreateInstance(s);
              if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
              o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
            }
          }]);
          return pi;
        }(we);
        fe.on(document, ei, ni, pi.dataApiKeydownHandler), fe.on(document, ei, oi, pi.dataApiKeydownHandler), fe.on(document, ti, pi.clearMenus), fe.on(document, "keyup.bs.dropdown.data-api", pi.clearMenus), fe.on(document, ti, ni, function (t) {
          t.preventDefault(), pi.getOrCreateInstance(this).toggle();
        }), Xt(pi);
        var gi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          mi = ".sticky-top",
          _i = "padding-right",
          bi = "margin-right";
        var vi = /*#__PURE__*/function () {
          function vi() {
            _classCallCheck(this, vi);
            this._element = document.body;
          }
          _createClass(vi, [{
            key: "getWidth",
            value: function getWidth() {
              var t = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - t);
            }
          }, {
            key: "hide",
            value: function hide() {
              var t = this.getWidth();
              this._disableOverFlow(), this._setElementAttributes(this._element, _i, function (e) {
                return e + t;
              }), this._setElementAttributes(gi, _i, function (e) {
                return e + t;
              }), this._setElementAttributes(mi, bi, function (e) {
                return e - t;
              });
            }
          }, {
            key: "reset",
            value: function reset() {
              this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, _i), this._resetElementAttributes(gi, _i), this._resetElementAttributes(mi, bi);
            }
          }, {
            key: "isOverflowing",
            value: function isOverflowing() {
              return this.getWidth() > 0;
            }
          }, {
            key: "_disableOverFlow",
            value: function _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
            }
          }, {
            key: "_setElementAttributes",
            value: function _setElementAttributes(t, e, i) {
              var _this17 = this;
              var n = this.getWidth();
              this._applyManipulationCallback(t, function (t) {
                if (t !== _this17._element && window.innerWidth > t.clientWidth + n) return;
                _this17._saveInitialAttribute(t, e);
                var s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, "".concat(i(Number.parseFloat(s)), "px"));
              });
            }
          }, {
            key: "_saveInitialAttribute",
            value: function _saveInitialAttribute(t, e) {
              var i = t.style.getPropertyValue(e);
              i && ve.setDataAttribute(t, e, i);
            }
          }, {
            key: "_resetElementAttributes",
            value: function _resetElementAttributes(t, e) {
              this._applyManipulationCallback(t, function (t) {
                var i = ve.getDataAttribute(t, e);
                null !== i ? (ve.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
              });
            }
          }, {
            key: "_applyManipulationCallback",
            value: function _applyManipulationCallback(t, e) {
              if ($t(t)) e(t);else {
                var _iterator16 = _createForOfIteratorHelper(Oe.find(t, this._element)),
                  _step16;
                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var _i15 = _step16.value;
                    e(_i15);
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              }
            }
          }]);
          return vi;
        }();
        var yi = "backdrop",
          wi = "show",
          Ai = "mousedown.bs.backdrop",
          Ei = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
          },
          Ti = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
          };
        var Ci = /*#__PURE__*/function (_ye3) {
          _inherits(Ci, _ye3);
          var _super8 = _createSuper(Ci);
          function Ci(t) {
            var _this18;
            _classCallCheck(this, Ci);
            _this18 = _super8.call(this), _this18._config = _this18._getConfig(t), _this18._isAppended = !1, _this18._element = null;
            return _this18;
          }
          _createClass(Ci, [{
            key: "show",
            value: function show(t) {
              if (!this._config.isVisible) return void Yt(t);
              this._append();
              var e = this._getElement();
              this._config.isAnimated && qt(e), e.classList.add(wi), this._emulateAnimation(function () {
                Yt(t);
              });
            }
          }, {
            key: "hide",
            value: function hide(t) {
              var _this19 = this;
              this._config.isVisible ? (this._getElement().classList.remove(wi), this._emulateAnimation(function () {
                _this19.dispose(), Yt(t);
              })) : Yt(t);
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this._isAppended && (fe.off(this._element, Ai), this._element.remove(), this._isAppended = !1);
            }
          }, {
            key: "_getElement",
            value: function _getElement() {
              if (!this._element) {
                var _t12 = document.createElement("div");
                _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
              }
              return this._element;
            }
          }, {
            key: "_configAfterMerge",
            value: function _configAfterMerge(t) {
              return t.rootElement = Wt(t.rootElement), t;
            }
          }, {
            key: "_append",
            value: function _append() {
              var _this20 = this;
              if (this._isAppended) return;
              var t = this._getElement();
              this._config.rootElement.append(t), fe.on(t, Ai, function () {
                Yt(_this20._config.clickCallback);
              }), this._isAppended = !0;
            }
          }, {
            key: "_emulateAnimation",
            value: function _emulateAnimation(t) {
              Ut(t, this._getElement(), this._config.isAnimated);
            }
          }], [{
            key: "Default",
            get: function get() {
              return Ei;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return Ti;
            }
          }, {
            key: "NAME",
            get: function get() {
              return yi;
            }
          }]);
          return Ci;
        }(ye);
        var Oi = ".bs.focustrap",
          xi = "backward",
          ki = {
            autofocus: !0,
            trapElement: null
          },
          Li = {
            autofocus: "boolean",
            trapElement: "element"
          };
        var Di = /*#__PURE__*/function (_ye4) {
          _inherits(Di, _ye4);
          var _super9 = _createSuper(Di);
          function Di(t) {
            var _this21;
            _classCallCheck(this, Di);
            _this21 = _super9.call(this), _this21._config = _this21._getConfig(t), _this21._isActive = !1, _this21._lastTabNavDirection = null;
            return _this21;
          }
          _createClass(Di, [{
            key: "activate",
            value: function activate() {
              var _this22 = this;
              this._isActive || (this._config.autofocus && this._config.trapElement.focus(), fe.off(document, Oi), fe.on(document, "focusin.bs.focustrap", function (t) {
                return _this22._handleFocusin(t);
              }), fe.on(document, "keydown.tab.bs.focustrap", function (t) {
                return _this22._handleKeydown(t);
              }), this._isActive = !0);
            }
          }, {
            key: "deactivate",
            value: function deactivate() {
              this._isActive && (this._isActive = !1, fe.off(document, Oi));
            }
          }, {
            key: "_handleFocusin",
            value: function _handleFocusin(t) {
              var e = this._config.trapElement;
              if (t.target === document || t.target === e || e.contains(t.target)) return;
              var i = Oe.focusableChildren(e);
              0 === i.length ? e.focus() : this._lastTabNavDirection === xi ? i[i.length - 1].focus() : i[0].focus();
            }
          }, {
            key: "_handleKeydown",
            value: function _handleKeydown(t) {
              "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? xi : "forward");
            }
          }], [{
            key: "Default",
            get: function get() {
              return ki;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return Li;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "focustrap";
            }
          }]);
          return Di;
        }(ye);
        var Si = ".bs.modal",
          Ii = "hidden.bs.modal",
          Ni = "show.bs.modal",
          Pi = "modal-open",
          ji = "show",
          Mi = "modal-static",
          Hi = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
          },
          $i = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
          };
        var Wi = /*#__PURE__*/function (_we6) {
          _inherits(Wi, _we6);
          var _super10 = _createSuper(Wi);
          function Wi(t, e) {
            var _this23;
            _classCallCheck(this, Wi);
            _this23 = _super10.call(this, t, e), _this23._dialog = Oe.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new vi(), _this23._addEventListeners();
            return _this23;
          }
          _createClass(Wi, [{
            key: "toggle",
            value: function toggle(t) {
              return this._isShown ? this.hide() : this.show(t);
            }
          }, {
            key: "show",
            value: function show(t) {
              var _this24 = this;
              if (this._isShown || this._isTransitioning) return;
              fe.trigger(this._element, Ni, {
                relatedTarget: t
              }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._backdrop.show(function () {
                return _this24._showElement(t);
              }));
            }
          }, {
            key: "hide",
            value: function hide() {
              var _this25 = this;
              if (!this._isShown || this._isTransitioning) return;
              fe.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(ji), this._queueCallback(function () {
                return _this25._hideModal();
              }, this._element, this._isAnimated()));
            }
          }, {
            key: "dispose",
            value: function dispose() {
              for (var _i16 = 0, _arr2 = [window, this._dialog]; _i16 < _arr2.length; _i16++) {
                var _t13 = _arr2[_i16];
                fe.off(_t13, Si);
              }
              this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Wi.prototype), "dispose", this).call(this);
            }
          }, {
            key: "handleUpdate",
            value: function handleUpdate() {
              this._adjustDialog();
            }
          }, {
            key: "_initializeBackDrop",
            value: function _initializeBackDrop() {
              return new Ci({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
              });
            }
          }, {
            key: "_initializeFocusTrap",
            value: function _initializeFocusTrap() {
              return new Di({
                trapElement: this._element
              });
            }
          }, {
            key: "_showElement",
            value: function _showElement(t) {
              var _this26 = this;
              document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
              var e = Oe.findOne(".modal-body", this._dialog);
              e && (e.scrollTop = 0), qt(this._element), this._element.classList.add(ji);
              this._queueCallback(function () {
                _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, fe.trigger(_this26._element, "shown.bs.modal", {
                  relatedTarget: t
                });
              }, this._dialog, this._isAnimated());
            }
          }, {
            key: "_addEventListeners",
            value: function _addEventListeners() {
              var _this27 = this;
              fe.on(this._element, "keydown.dismiss.bs.modal", function (t) {
                if ("Escape" === t.key) return _this27._config.keyboard ? (t.preventDefault(), void _this27.hide()) : void _this27._triggerBackdropTransition();
              }), fe.on(window, "resize.bs.modal", function () {
                _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
              }), fe.on(this._element, "mousedown.dismiss.bs.modal", function (t) {
                t.target === t.currentTarget && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
              });
            }
          }, {
            key: "_hideModal",
            value: function _hideModal() {
              var _this28 = this;
              this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
                document.body.classList.remove(Pi), _this28._resetAdjustments(), _this28._scrollBar.reset(), fe.trigger(_this28._element, Ii);
              });
            }
          }, {
            key: "_isAnimated",
            value: function _isAnimated() {
              return this._element.classList.contains("fade");
            }
          }, {
            key: "_triggerBackdropTransition",
            value: function _triggerBackdropTransition() {
              var _this29 = this;
              if (fe.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
              var t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
              "hidden" === e || this._element.classList.contains(Mi) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Mi), this._queueCallback(function () {
                _this29._element.classList.remove(Mi), _this29._queueCallback(function () {
                  _this29._element.style.overflowY = e;
                }, _this29._dialog);
              }, this._dialog), this._element.focus());
            }
          }, {
            key: "_adjustDialog",
            value: function _adjustDialog() {
              var t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
              if (i && !t) {
                var _t14 = Qt() ? "paddingLeft" : "paddingRight";
                this._element.style[_t14] = "".concat(e, "px");
              }
              if (!i && t) {
                var _t15 = Qt() ? "paddingRight" : "paddingLeft";
                this._element.style[_t15] = "".concat(e, "px");
              }
            }
          }, {
            key: "_resetAdjustments",
            value: function _resetAdjustments() {
              this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
            }
          }], [{
            key: "Default",
            get: function get() {
              return Hi;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return $i;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "modal";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t, e) {
              return this.each(function () {
                var i = Wi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === i[t]) throw new TypeError("No method named \"".concat(t, "\""));
                  i[t](e);
                }
              });
            }
          }]);
          return Wi;
        }(we);
        fe.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
          var _this30 = this;
          var e = Mt(this);
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(), fe.one(e, Ni, function (t) {
            t.defaultPrevented || fe.one(e, Ii, function () {
              Bt(_this30) && _this30.focus();
            });
          });
          var i = Oe.findOne(".modal.show");
          i && Wi.getInstance(i).hide();
          Wi.getOrCreateInstance(e).toggle(this);
        }), Ae(Wi), Xt(Wi);
        var Bi = "show",
          Fi = "showing",
          zi = "hiding",
          Ri = ".offcanvas.show",
          qi = "hidePrevented.bs.offcanvas",
          Vi = "hidden.bs.offcanvas",
          Ki = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
          },
          Qi = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
          };
        var Xi = /*#__PURE__*/function (_we7) {
          _inherits(Xi, _we7);
          var _super11 = _createSuper(Xi);
          function Xi(t, e) {
            var _this31;
            _classCallCheck(this, Xi);
            _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
            return _this31;
          }
          _createClass(Xi, [{
            key: "toggle",
            value: function toggle(t) {
              return this._isShown ? this.hide() : this.show(t);
            }
          }, {
            key: "show",
            value: function show(t) {
              var _this32 = this;
              if (this._isShown) return;
              if (fe.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
              }).defaultPrevented) return;
              this._isShown = !0, this._backdrop.show(), this._config.scroll || new vi().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Fi);
              this._queueCallback(function () {
                _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(Bi), _this32._element.classList.remove(Fi), fe.trigger(_this32._element, "shown.bs.offcanvas", {
                  relatedTarget: t
                });
              }, this._element, !0);
            }
          }, {
            key: "hide",
            value: function hide() {
              var _this33 = this;
              if (!this._isShown) return;
              if (fe.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
              this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(zi), this._backdrop.hide();
              this._queueCallback(function () {
                _this33._element.classList.remove(Bi, zi), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new vi().reset(), fe.trigger(_this33._element, Vi);
              }, this._element, !0);
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(Xi.prototype), "dispose", this).call(this);
            }
          }, {
            key: "_initializeBackDrop",
            value: function _initializeBackDrop() {
              var _this34 = this;
              var t = Boolean(this._config.backdrop);
              return new Ci({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? function () {
                  "static" !== _this34._config.backdrop ? _this34.hide() : fe.trigger(_this34._element, qi);
                } : null
              });
            }
          }, {
            key: "_initializeFocusTrap",
            value: function _initializeFocusTrap() {
              return new Di({
                trapElement: this._element
              });
            }
          }, {
            key: "_addEventListeners",
            value: function _addEventListeners() {
              var _this35 = this;
              fe.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
                "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : fe.trigger(_this35._element, qi));
              });
            }
          }], [{
            key: "Default",
            get: function get() {
              return Ki;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return Qi;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "offcanvas";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = Xi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t](this);
                }
              });
            }
          }]);
          return Xi;
        }(we);
        fe.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
          var _this36 = this;
          var e = Mt(this);
          if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Ft(this)) return;
          fe.one(e, Vi, function () {
            Bt(_this36) && _this36.focus();
          });
          var i = Oe.findOne(Ri);
          i && i !== e && Xi.getInstance(i).hide();
          Xi.getOrCreateInstance(e).toggle(this);
        }), fe.on(window, "load.bs.offcanvas.data-api", function () {
          var _iterator17 = _createForOfIteratorHelper(Oe.find(Ri)),
            _step17;
          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _t16 = _step17.value;
              Xi.getOrCreateInstance(_t16).show();
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
        }), fe.on(window, "resize.bs.offcanvas", function () {
          var _iterator18 = _createForOfIteratorHelper(Oe.find("[aria-modal][class*=show][class*=offcanvas-]")),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _t17 = _step18.value;
              "fixed" !== getComputedStyle(_t17).position && Xi.getOrCreateInstance(_t17).hide();
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }), Ae(Xi), Xt(Xi);
        var Yi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
          Ui = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
          Gi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
          Ji = function Ji(t, e) {
            var i = t.nodeName.toLowerCase();
            return e.includes(i) ? !Yi.has(i) || Boolean(Ui.test(t.nodeValue) || Gi.test(t.nodeValue)) : e.filter(function (t) {
              return t instanceof RegExp;
            }).some(function (t) {
              return t.test(i);
            });
          },
          Zi = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
          };
        var tn = {
            allowList: Zi,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
          },
          en = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
          },
          nn = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
          };
        var sn = /*#__PURE__*/function (_ye5) {
          _inherits(sn, _ye5);
          var _super12 = _createSuper(sn);
          function sn(t) {
            var _this37;
            _classCallCheck(this, sn);
            _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
            return _this37;
          }
          _createClass(sn, [{
            key: "getContent",
            value: function getContent() {
              var _this38 = this;
              return Object.values(this._config.content).map(function (t) {
                return _this38._resolvePossibleFunction(t);
              }).filter(Boolean);
            }
          }, {
            key: "hasContent",
            value: function hasContent() {
              return this.getContent().length > 0;
            }
          }, {
            key: "changeContent",
            value: function changeContent(t) {
              return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
            }
          }, {
            key: "toHtml",
            value: function toHtml() {
              var _e$classList;
              var t = document.createElement("div");
              t.innerHTML = this._maybeSanitize(this._config.template);
              for (var _i17 = 0, _Object$entries2 = Object.entries(this._config.content); _i17 < _Object$entries2.length; _i17++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i17], 2),
                  _e11 = _Object$entries2$_i[0],
                  _i18 = _Object$entries2$_i[1];
                this._setContent(t, _i18, _e11);
              }
              var e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
              return i && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(i.split(" "))), e;
            }
          }, {
            key: "_typeCheckConfig",
            value: function _typeCheckConfig(t) {
              _get(_getPrototypeOf(sn.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
            }
          }, {
            key: "_checkContent",
            value: function _checkContent(t) {
              for (var _i19 = 0, _Object$entries3 = Object.entries(t); _i19 < _Object$entries3.length; _i19++) {
                var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i19], 2),
                  _e12 = _Object$entries3$_i[0],
                  _i20 = _Object$entries3$_i[1];
                _get(_getPrototypeOf(sn.prototype), "_typeCheckConfig", this).call(this, {
                  selector: _e12,
                  entry: _i20
                }, nn);
              }
            }
          }, {
            key: "_setContent",
            value: function _setContent(t, e, i) {
              var n = Oe.findOne(i, t);
              n && ((e = this._resolvePossibleFunction(e)) ? $t(e) ? this._putElementInTemplate(Wt(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
            }
          }, {
            key: "_maybeSanitize",
            value: function _maybeSanitize(t) {
              return this._config.sanitize ? function (t, e, i) {
                var _ref7;
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                var n = new window.DOMParser().parseFromString(t, "text/html"),
                  s = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(n.body.querySelectorAll("*")));
                var _iterator19 = _createForOfIteratorHelper(s),
                  _step19;
                try {
                  for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                    var _ref8;
                    var _t18 = _step19.value;
                    var _i21 = _t18.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(_i21)) {
                      _t18.remove();
                      continue;
                    }
                    var _n8 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t18.attributes)),
                      _s4 = [].concat(e["*"] || [], e[_i21] || []);
                    var _iterator20 = _createForOfIteratorHelper(_n8),
                      _step20;
                    try {
                      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                        var _e13 = _step20.value;
                        Ji(_e13, _s4) || _t18.removeAttribute(_e13.nodeName);
                      }
                    } catch (err) {
                      _iterator20.e(err);
                    } finally {
                      _iterator20.f();
                    }
                  }
                } catch (err) {
                  _iterator19.e(err);
                } finally {
                  _iterator19.f();
                }
                return n.body.innerHTML;
              }(t, this._config.allowList, this._config.sanitizeFn) : t;
            }
          }, {
            key: "_resolvePossibleFunction",
            value: function _resolvePossibleFunction(t) {
              return "function" == typeof t ? t(this) : t;
            }
          }, {
            key: "_putElementInTemplate",
            value: function _putElementInTemplate(t, e) {
              if (this._config.html) return e.innerHTML = "", void e.append(t);
              e.textContent = t.textContent;
            }
          }], [{
            key: "Default",
            get: function get() {
              return tn;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return en;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "TemplateFactory";
            }
          }]);
          return sn;
        }(ye);
        var on = new Set(["sanitize", "allowList", "sanitizeFn"]),
          rn = "fade",
          an = "show",
          ln = ".modal",
          cn = "hide.bs.modal",
          hn = "hover",
          un = "focus",
          dn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: Qt() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: Qt() ? "right" : "left"
          },
          fn = {
            allowList: Zi,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
          },
          pn = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
          };
        var gn = /*#__PURE__*/function (_we8) {
          _inherits(gn, _we8);
          var _super13 = _createSuper(gn);
          function gn(t, e) {
            var _this39;
            _classCallCheck(this, gn);
            if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = !1, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners();
            return _this39;
          }
          _createClass(gn, [{
            key: "enable",
            value: function enable() {
              this._isEnabled = !0;
            }
          }, {
            key: "disable",
            value: function disable() {
              this._isEnabled = !1;
            }
          }, {
            key: "toggleEnabled",
            value: function toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            }
          }, {
            key: "toggle",
            value: function toggle(t) {
              if (this._isEnabled) {
                if (t) {
                  var _e14 = this._initializeOnDelegatedTarget(t);
                  return _e14._activeTrigger.click = !_e14._activeTrigger.click, void (_e14._isWithActiveTrigger() ? _e14._enter() : _e14._leave());
                }
                this._isShown() ? this._leave() : this._enter();
              }
            }
          }, {
            key: "dispose",
            value: function dispose() {
              clearTimeout(this._timeout), fe.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), _get(_getPrototypeOf(gn.prototype), "dispose", this).call(this);
            }
          }, {
            key: "show",
            value: function show() {
              var _this40 = this;
              if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
              if (!this._isWithContent() || !this._isEnabled) return;
              var t = fe.trigger(this._element, this.constructor.eventName("show")),
                e = (zt(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
              if (t.defaultPrevented || !e) return;
              this.tip && (this.tip.remove(), this.tip = null);
              var i = this._getTipElement();
              this._element.setAttribute("aria-describedby", i.getAttribute("id"));
              var n = this._config.container;
              if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), fe.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(an), "ontouchstart" in document.documentElement) {
                var _ref9;
                var _iterator21 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
                  _step21;
                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var _t19 = _step21.value;
                    fe.on(_t19, "mouseover", Rt);
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }
              }
              this._queueCallback(function () {
                var t = _this40._isHovered;
                _this40._isHovered = !1, fe.trigger(_this40._element, _this40.constructor.eventName("shown")), t && _this40._leave();
              }, this.tip, this._isAnimated());
            }
          }, {
            key: "hide",
            value: function hide() {
              var _this41 = this;
              if (!this._isShown()) return;
              if (fe.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
              var t = this._getTipElement();
              if (t.classList.remove(an), "ontouchstart" in document.documentElement) {
                var _ref10;
                var _iterator22 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
                  _step22;
                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var _t20 = _step22.value;
                    fe.off(_t20, "mouseover", Rt);
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }
              }
              this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1;
              this._queueCallback(function () {
                _this41._isWithActiveTrigger() || (_this41._isHovered || t.remove(), _this41._element.removeAttribute("aria-describedby"), fe.trigger(_this41._element, _this41.constructor.eventName("hidden")), _this41._disposePopper());
              }, this.tip, this._isAnimated());
            }
          }, {
            key: "update",
            value: function update() {
              this._popper && this._popper.update();
            }
          }, {
            key: "_isWithContent",
            value: function _isWithContent() {
              return Boolean(this._getTitle());
            }
          }, {
            key: "_getTipElement",
            value: function _getTipElement() {
              return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
            }
          }, {
            key: "_createTipElement",
            value: function _createTipElement(t) {
              var e = this._getTemplateFactory(t).toHtml();
              if (!e) return null;
              e.classList.remove(rn, an), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
              var i = function (t) {
                do {
                  t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
              }(this.constructor.NAME).toString();
              return e.setAttribute("id", i), this._isAnimated() && e.classList.add(rn), e;
            }
          }, {
            key: "setContent",
            value: function setContent(t) {
              this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
            }
          }, {
            key: "_getTemplateFactory",
            value: function _getTemplateFactory(t) {
              return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new sn(_objectSpread(_objectSpread({}, this._config), {}, {
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
              })), this._templateFactory;
            }
          }, {
            key: "_getContentForTemplate",
            value: function _getContentForTemplate() {
              return {
                ".tooltip-inner": this._getTitle()
              };
            }
          }, {
            key: "_getTitle",
            value: function _getTitle() {
              return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle;
            }
          }, {
            key: "_initializeOnDelegatedTarget",
            value: function _initializeOnDelegatedTarget(t) {
              return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
            }
          }, {
            key: "_isAnimated",
            value: function _isAnimated() {
              return this._config.animation || this.tip && this.tip.classList.contains(rn);
            }
          }, {
            key: "_isShown",
            value: function _isShown() {
              return this.tip && this.tip.classList.contains(an);
            }
          }, {
            key: "_createPopper",
            value: function _createPopper(t) {
              var e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                i = dn[e.toUpperCase()];
              return St(this._element, t, this._getPopperConfig(i));
            }
          }, {
            key: "_getOffset",
            value: function _getOffset() {
              var _this42 = this;
              var t = this._config.offset;
              return "string" == typeof t ? t.split(",").map(function (t) {
                return Number.parseInt(t, 10);
              }) : "function" == typeof t ? function (e) {
                return t(e, _this42._element);
              } : t;
            }
          }, {
            key: "_resolvePossibleFunction",
            value: function _resolvePossibleFunction(t) {
              return "function" == typeof t ? t.call(this._element) : t;
            }
          }, {
            key: "_getPopperConfig",
            value: function _getPopperConfig(t) {
              var _this43 = this;
              var e = {
                placement: t,
                modifiers: [{
                  name: "flip",
                  options: {
                    fallbackPlacements: this._config.fallbackPlacements
                  }
                }, {
                  name: "offset",
                  options: {
                    offset: this._getOffset()
                  }
                }, {
                  name: "preventOverflow",
                  options: {
                    boundary: this._config.boundary
                  }
                }, {
                  name: "arrow",
                  options: {
                    element: ".".concat(this.constructor.NAME, "-arrow")
                  }
                }, {
                  name: "preSetPlacement",
                  enabled: !0,
                  phase: "beforeMain",
                  fn: function fn(t) {
                    _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                  }
                }]
              };
              return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
            }
          }, {
            key: "_setListeners",
            value: function _setListeners() {
              var _this44 = this;
              var t = this._config.trigger.split(" ");
              var _iterator23 = _createForOfIteratorHelper(t),
                _step23;
              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var _e15 = _step23.value;
                  if ("click" === _e15) fe.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
                    return _this44.toggle(t);
                  });else if ("manual" !== _e15) {
                    var _t21 = _e15 === hn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                      _i22 = _e15 === hn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    fe.on(this._element, _t21, this._config.selector, function (t) {
                      var e = _this44._initializeOnDelegatedTarget(t);
                      e._activeTrigger["focusin" === t.type ? un : hn] = !0, e._enter();
                    }), fe.on(this._element, _i22, this._config.selector, function (t) {
                      var e = _this44._initializeOnDelegatedTarget(t);
                      e._activeTrigger["focusout" === t.type ? un : hn] = e._element.contains(t.relatedTarget), e._leave();
                    });
                  }
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
              this._hideModalHandler = function () {
                _this44._element && _this44.hide();
              }, fe.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
                trigger: "manual",
                selector: ""
              }) : this._fixTitle();
            }
          }, {
            key: "_fixTitle",
            value: function _fixTitle() {
              var t = this._config.originalTitle;
              t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title"));
            }
          }, {
            key: "_enter",
            value: function _enter() {
              var _this45 = this;
              this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
                _this45._isHovered && _this45.show();
              }, this._config.delay.show));
            }
          }, {
            key: "_leave",
            value: function _leave() {
              var _this46 = this;
              this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
                _this46._isHovered || _this46.hide();
              }, this._config.delay.hide));
            }
          }, {
            key: "_setTimeout",
            value: function _setTimeout(t, e) {
              clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
            }
          }, {
            key: "_isWithActiveTrigger",
            value: function _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0);
            }
          }, {
            key: "_getConfig",
            value: function _getConfig(t) {
              var e = ve.getDataAttributes(this._element);
              for (var _i23 = 0, _Object$keys5 = Object.keys(e); _i23 < _Object$keys5.length; _i23++) {
                var _t22 = _Object$keys5[_i23];
                on.has(_t22) && delete e[_t22];
              }
              return t = _objectSpread(_objectSpread({}, e), "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
            }
          }, {
            key: "_configAfterMerge",
            value: function _configAfterMerge(t) {
              return t.container = !1 === t.container ? document.body : Wt(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
              }), t.originalTitle = this._element.getAttribute("title") || "", "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
            }
          }, {
            key: "_getDelegateConfig",
            value: function _getDelegateConfig() {
              var t = {};
              for (var _e16 in this._config) {
                this.constructor.Default[_e16] !== this._config[_e16] && (t[_e16] = this._config[_e16]);
              }
              return t;
            }
          }, {
            key: "_disposePopper",
            value: function _disposePopper() {
              this._popper && (this._popper.destroy(), this._popper = null);
            }
          }], [{
            key: "Default",
            get: function get() {
              return fn;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return pn;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "tooltip";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = gn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t]();
                }
              });
            }
          }]);
          return gn;
        }(we);
        Xt(gn);
        var mn = _objectSpread(_objectSpread({}, gn.Default), {}, {
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
          }),
          _n = _objectSpread(_objectSpread({}, gn.DefaultType), {}, {
            content: "(null|string|element|function)"
          });
        var bn = /*#__PURE__*/function (_gn) {
          _inherits(bn, _gn);
          var _super14 = _createSuper(bn);
          function bn() {
            _classCallCheck(this, bn);
            return _super14.apply(this, arguments);
          }
          _createClass(bn, [{
            key: "_isWithContent",
            value: function _isWithContent() {
              return this._getTitle() || this._getContent();
            }
          }, {
            key: "_getContentForTemplate",
            value: function _getContentForTemplate() {
              return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
              };
            }
          }, {
            key: "_getContent",
            value: function _getContent() {
              return this._resolvePossibleFunction(this._config.content);
            }
          }], [{
            key: "Default",
            get: function get() {
              return mn;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return _n;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "popover";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = bn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t]();
                }
              });
            }
          }]);
          return bn;
        }(gn);
        Xt(bn);
        var vn = "click.bs.scrollspy",
          yn = "active",
          wn = "[href]",
          An = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null
          },
          En = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element"
          };
        var Tn = /*#__PURE__*/function (_we9) {
          _inherits(Tn, _we9);
          var _super15 = _createSuper(Tn);
          function Tn(t, e) {
            var _this47;
            _classCallCheck(this, Tn);
            _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0
            }, _this47.refresh();
            return _this47;
          }
          _createClass(Tn, [{
            key: "refresh",
            value: function refresh() {
              this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
              var _iterator24 = _createForOfIteratorHelper(this._observableSections.values()),
                _step24;
              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var _t23 = _step24.value;
                  this._observer.observe(_t23);
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this._observer.disconnect(), _get(_getPrototypeOf(Tn.prototype), "dispose", this).call(this);
            }
          }, {
            key: "_configAfterMerge",
            value: function _configAfterMerge(t) {
              return t.target = Wt(t.target) || document.body, t;
            }
          }, {
            key: "_maybeEnableSmoothScroll",
            value: function _maybeEnableSmoothScroll() {
              var _this48 = this;
              this._config.smoothScroll && (fe.off(this._config.target, vn), fe.on(this._config.target, vn, wn, function (t) {
                var e = _this48._observableSections.get(t.target.hash);
                if (e) {
                  t.preventDefault();
                  var _i24 = _this48._rootElement || window,
                    _n9 = e.offsetTop - _this48._element.offsetTop;
                  if (_i24.scrollTo) return void _i24.scrollTo({
                    top: _n9,
                    behavior: "smooth"
                  });
                  _i24.scrollTop = _n9;
                }
              }));
            }
          }, {
            key: "_getNewObserver",
            value: function _getNewObserver() {
              var _this49 = this;
              var t = {
                root: this._rootElement,
                threshold: [.1, .5, 1],
                rootMargin: this._getRootMargin()
              };
              return new IntersectionObserver(function (t) {
                return _this49._observerCallback(t);
              }, t);
            }
          }, {
            key: "_observerCallback",
            value: function _observerCallback(t) {
              var _this50 = this;
              var e = function e(t) {
                  return _this50._targetLinks.get("#".concat(t.target.id));
                },
                i = function i(t) {
                  _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
                },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
              this._previousScrollData.parentScrollTop = n;
              var _iterator25 = _createForOfIteratorHelper(t),
                _step25;
              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var _o4 = _step25.value;
                  if (!_o4.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(_o4));
                    continue;
                  }
                  var _t24 = _o4.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                  if (s && _t24) {
                    if (i(_o4), !n) return;
                  } else s || _t24 || i(_o4);
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }
            }
          }, {
            key: "_getRootMargin",
            value: function _getRootMargin() {
              return this._config.offset ? "".concat(this._config.offset, "px 0px -30%") : this._config.rootMargin;
            }
          }, {
            key: "_initializeTargetsAndObservables",
            value: function _initializeTargetsAndObservables() {
              this._targetLinks = new Map(), this._observableSections = new Map();
              var t = Oe.find(wn, this._config.target);
              var _iterator26 = _createForOfIteratorHelper(t),
                _step26;
              try {
                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  var _e17 = _step26.value;
                  if (!_e17.hash || Ft(_e17)) continue;
                  var _t25 = Oe.findOne(_e17.hash, this._element);
                  Bt(_t25) && (this._targetLinks.set(_e17.hash, _e17), this._observableSections.set(_e17.hash, _t25));
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }
            }
          }, {
            key: "_process",
            value: function _process(t) {
              this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(yn), this._activateParents(t), fe.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
              }));
            }
          }, {
            key: "_activateParents",
            value: function _activateParents(t) {
              if (t.classList.contains("dropdown-item")) Oe.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(yn);else {
                var _iterator27 = _createForOfIteratorHelper(Oe.parents(t, ".nav, .list-group")),
                  _step27;
                try {
                  for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                    var _e18 = _step27.value;
                    var _iterator28 = _createForOfIteratorHelper(Oe.prev(_e18, ".nav-link, .nav-item > .nav-link, .list-group-item")),
                      _step28;
                    try {
                      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                        var _t26 = _step28.value;
                        _t26.classList.add(yn);
                      }
                    } catch (err) {
                      _iterator28.e(err);
                    } finally {
                      _iterator28.f();
                    }
                  }
                } catch (err) {
                  _iterator27.e(err);
                } finally {
                  _iterator27.f();
                }
              }
            }
          }, {
            key: "_clearActiveClass",
            value: function _clearActiveClass(t) {
              t.classList.remove(yn);
              var e = Oe.find("[href].active", t);
              var _iterator29 = _createForOfIteratorHelper(e),
                _step29;
              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  var _t27 = _step29.value;
                  _t27.classList.remove(yn);
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }
            }
          }], [{
            key: "Default",
            get: function get() {
              return An;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return En;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "scrollspy";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = Tn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t]();
                }
              });
            }
          }]);
          return Tn;
        }(we);
        fe.on(window, "load.bs.scrollspy.data-api", function () {
          var _iterator30 = _createForOfIteratorHelper(Oe.find('[data-bs-spy="scroll"]')),
            _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var _t28 = _step30.value;
              Tn.getOrCreateInstance(_t28);
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
        }), Xt(Tn);
        var Cn = "ArrowLeft",
          On = "ArrowRight",
          xn = "ArrowUp",
          kn = "ArrowDown",
          Ln = "active",
          Dn = "fade",
          Sn = "show",
          In = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
          Nn = ".nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role=\"tab\"]:not(.dropdown-toggle), ".concat(In);
        var Pn = /*#__PURE__*/function (_we10) {
          _inherits(Pn, _we10);
          var _super16 = _createSuper(Pn);
          function Pn(t) {
            var _this51;
            _classCallCheck(this, Pn);
            _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), fe.on(_this51._element, "keydown.bs.tab", function (t) {
              return _this51._keydown(t);
            }));
            return _this51;
          }
          _createClass(Pn, [{
            key: "show",
            value: function show() {
              var t = this._element;
              if (this._elemIsActive(t)) return;
              var e = this._getActiveElem(),
                i = e ? fe.trigger(e, "hide.bs.tab", {
                  relatedTarget: t
                }) : null;
              fe.trigger(t, "show.bs.tab", {
                relatedTarget: e
              }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
            }
          }, {
            key: "_activate",
            value: function _activate(t, e) {
              var _this52 = this;
              if (!t) return;
              t.classList.add(Ln), this._activate(Mt(t));
              this._queueCallback(function () {
                "tab" === t.getAttribute("role") ? (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), fe.trigger(t, "shown.bs.tab", {
                  relatedTarget: e
                })) : t.classList.add(Sn);
              }, t, t.classList.contains(Dn));
            }
          }, {
            key: "_deactivate",
            value: function _deactivate(t, e) {
              var _this53 = this;
              if (!t) return;
              t.classList.remove(Ln), t.blur(), this._deactivate(Mt(t));
              this._queueCallback(function () {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), fe.trigger(t, "hidden.bs.tab", {
                  relatedTarget: e
                })) : t.classList.remove(Sn);
              }, t, t.classList.contains(Dn));
            }
          }, {
            key: "_keydown",
            value: function _keydown(t) {
              if (![Cn, On, xn, kn].includes(t.key)) return;
              t.stopPropagation(), t.preventDefault();
              var e = [On, kn].includes(t.key),
                i = Gt(this._getChildren().filter(function (t) {
                  return !Ft(t);
                }), t.target, e, !0);
              i && Pn.getOrCreateInstance(i).show();
            }
          }, {
            key: "_getChildren",
            value: function _getChildren() {
              return Oe.find(Nn, this._parent);
            }
          }, {
            key: "_getActiveElem",
            value: function _getActiveElem() {
              var _this54 = this;
              return this._getChildren().find(function (t) {
                return _this54._elemIsActive(t);
              }) || null;
            }
          }, {
            key: "_setInitialAttributes",
            value: function _setInitialAttributes(t, e) {
              this._setAttributeIfNotExists(t, "role", "tablist");
              var _iterator31 = _createForOfIteratorHelper(e),
                _step31;
              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var _t29 = _step31.value;
                  this._setInitialAttributesOnChild(_t29);
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
            }
          }, {
            key: "_setInitialAttributesOnChild",
            value: function _setInitialAttributesOnChild(t) {
              t = this._getInnerElement(t);
              var e = this._elemIsActive(t),
                i = this._getOuterElement(t);
              t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
            }
          }, {
            key: "_setInitialAttributesOnTargetPanel",
            value: function _setInitialAttributesOnTargetPanel(t) {
              var e = Mt(t);
              e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "#".concat(t.id)));
            }
          }, {
            key: "_toggleDropDown",
            value: function _toggleDropDown(t, e) {
              var i = this._getOuterElement(t);
              if (!i.classList.contains("dropdown")) return;
              var n = function n(t, _n10) {
                var s = Oe.findOne(t, i);
                s && s.classList.toggle(_n10, e);
              };
              n(".dropdown-toggle", Ln), n(".dropdown-menu", Sn), n(".dropdown-item", Ln), i.setAttribute("aria-expanded", e);
            }
          }, {
            key: "_setAttributeIfNotExists",
            value: function _setAttributeIfNotExists(t, e, i) {
              t.hasAttribute(e) || t.setAttribute(e, i);
            }
          }, {
            key: "_elemIsActive",
            value: function _elemIsActive(t) {
              return t.classList.contains(Ln);
            }
          }, {
            key: "_getInnerElement",
            value: function _getInnerElement(t) {
              return t.matches(Nn) ? t : Oe.findOne(Nn, t);
            }
          }, {
            key: "_getOuterElement",
            value: function _getOuterElement(t) {
              return t.closest(".nav-item, .list-group-item") || t;
            }
          }], [{
            key: "NAME",
            get: function get() {
              return "tab";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = Pn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                  if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t]();
                }
              });
            }
          }]);
          return Pn;
        }(we);
        fe.on(document, "click.bs.tab", In, function (t) {
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(), Ft(this) || Pn.getOrCreateInstance(this).show();
        }), fe.on(window, "load.bs.tab", function () {
          var _iterator32 = _createForOfIteratorHelper(Oe.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')),
            _step32;
          try {
            for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
              var _t30 = _step32.value;
              Pn.getOrCreateInstance(_t30);
            }
          } catch (err) {
            _iterator32.e(err);
          } finally {
            _iterator32.f();
          }
        }), Xt(Pn);
        var jn = "hide",
          Mn = "show",
          Hn = "showing",
          $n = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
          },
          Wn = {
            animation: !0,
            autohide: !0,
            delay: 5e3
          };
        var Bn = /*#__PURE__*/function (_we11) {
          _inherits(Bn, _we11);
          var _super17 = _createSuper(Bn);
          function Bn(t, e) {
            var _this55;
            _classCallCheck(this, Bn);
            _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
            return _this55;
          }
          _createClass(Bn, [{
            key: "show",
            value: function show() {
              var _this56 = this;
              if (fe.trigger(this._element, "show.bs.toast").defaultPrevented) return;
              this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
              this._element.classList.remove(jn), qt(this._element), this._element.classList.add(Mn, Hn), this._queueCallback(function () {
                _this56._element.classList.remove(Hn), fe.trigger(_this56._element, "shown.bs.toast"), _this56._maybeScheduleHide();
              }, this._element, this._config.animation);
            }
          }, {
            key: "hide",
            value: function hide() {
              var _this57 = this;
              if (!this.isShown()) return;
              if (fe.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
              this._element.classList.add(Hn), this._queueCallback(function () {
                _this57._element.classList.add(jn), _this57._element.classList.remove(Hn, Mn), fe.trigger(_this57._element, "hidden.bs.toast");
              }, this._element, this._config.animation);
            }
          }, {
            key: "dispose",
            value: function dispose() {
              this._clearTimeout(), this.isShown() && this._element.classList.remove(Mn), _get(_getPrototypeOf(Bn.prototype), "dispose", this).call(this);
            }
          }, {
            key: "isShown",
            value: function isShown() {
              return this._element.classList.contains(Mn);
            }
          }, {
            key: "_maybeScheduleHide",
            value: function _maybeScheduleHide() {
              var _this58 = this;
              this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
                _this58.hide();
              }, this._config.delay)));
            }
          }, {
            key: "_onInteraction",
            value: function _onInteraction(t, e) {
              switch (t.type) {
                case "mouseover":
                case "mouseout":
                  this._hasMouseInteraction = e;
                  break;
                case "focusin":
                case "focusout":
                  this._hasKeyboardInteraction = e;
              }
              if (e) return void this._clearTimeout();
              var i = t.relatedTarget;
              this._element === i || this._element.contains(i) || this._maybeScheduleHide();
            }
          }, {
            key: "_setListeners",
            value: function _setListeners() {
              var _this59 = this;
              fe.on(this._element, "mouseover.bs.toast", function (t) {
                return _this59._onInteraction(t, !0);
              }), fe.on(this._element, "mouseout.bs.toast", function (t) {
                return _this59._onInteraction(t, !1);
              }), fe.on(this._element, "focusin.bs.toast", function (t) {
                return _this59._onInteraction(t, !0);
              }), fe.on(this._element, "focusout.bs.toast", function (t) {
                return _this59._onInteraction(t, !1);
              });
            }
          }, {
            key: "_clearTimeout",
            value: function _clearTimeout() {
              clearTimeout(this._timeout), this._timeout = null;
            }
          }], [{
            key: "Default",
            get: function get() {
              return Wn;
            }
          }, {
            key: "DefaultType",
            get: function get() {
              return $n;
            }
          }, {
            key: "NAME",
            get: function get() {
              return "toast";
            }
          }, {
            key: "jQueryInterface",
            value: function jQueryInterface(t) {
              return this.each(function () {
                var e = Bn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                  if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
                  e[t](this);
                }
              });
            }
          }]);
          return Bn;
        }(we);
        Ae(Bn), Xt(Bn);
      }
    },
    i = {};
  function n(t) {
    var s = i[t];
    if (void 0 !== s) return s.exports;
    var o = i[t] = {
      exports: {}
    };
    return e[t](o, o.exports, n), o.exports;
  }
  n.d = function (t, e) {
    for (var i in e) {
      n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
        enumerable: !0,
        get: e[i]
      });
    }
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, t = n(244), window.bootstrap = t;
})();

/***/ }),

/***/ "./resources/front/js/imask.js":
/*!*************************************!*\
  !*** ./resources/front/js/imask.js ***!
  \*************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function (global, factory) {
  ( false ? 0 : _typeof2(exports)) === 'object' && "object" !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (exports) {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);
        var desc;
        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            return false;
          }
          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }
        return true;
      };
    }
    return set(target, property, value, receiver);
  }
  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }
    return value;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.skip] - Can skip chars
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
  */
  var ChangeDetails = /*#__PURE__*/function () {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */
    function ChangeDetails(details) {
      _classCallCheck(this, ChangeDetails);
      Object.assign(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }
    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */

    _createClass(ChangeDetails, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
      /** Total offset considering all changes */
    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);
    return ChangeDetails;
  }();

  /** Checks if value is string */

  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }
  /**
    Direction
    @prop {string} NONE
    @prop {string} LEFT
    @prop {string} FORCE_LEFT
    @prop {string} RIGHT
    @prop {string} FORCE_RIGHT
  */

  var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
  };
  /** */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;
      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;
      default:
        return direction;
    }
  }
  /** Escapes regular expression control chars */

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }
  function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;
    if (arrA && arrB) {
      if (a.length != b.length) return false;
      for (i = 0; i < a.length; i++) {
        if (!objectIncludes(a[i], b[i])) return false;
      }
      return true;
    }
    if (arrA != arrB) return false;
    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) {
        // $FlowFixMe ... ???
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      }
      for (i = 0; i < keys.length; i++) {
        if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      }
      return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
    }
    return false;
  }
  /** Selection range */

  /** Provides details of changing input */

  var ActionDetails = /*#__PURE__*/function () {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */
    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails);
      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }
    /**
      Start changing position
      @readonly
    */

    _createClass(ActionDetails, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      /**
        Inserted symbols count
        @readonly
      */
    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
      /**
        Inserted symbols
        @readonly
      */
    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      /**
        Removed symbols count
        @readonly
      */
    }, {
      key: "removedCount",
      get: function get() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos ||
        // for Delete
        this.oldValue.length - this.value.length, 0);
      }
      /**
        Removed symbols
        @readonly
      */
    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      /**
        Unchanged head symbols
        @readonly
      */
    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
      /**
        Unchanged tail symbols
        @readonly
      */
    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      /**
        Remove direction
        @readonly
      */
    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right

        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
        // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);
    return ActionDetails;
  }();

  /** Provides details of continuous extracted tail */
  var ContinuousTailDetails = /*#__PURE__*/function () {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */
    function ContinuousTailDetails() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var stop = arguments.length > 2 ? arguments[2] : undefined;
      _classCallCheck(this, ContinuousTailDetails);
      this.value = value;
      this.from = from;
      this.stop = stop;
    }
    _createClass(ContinuousTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(tail) {
        this.value += String(tail);
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        }).aggregate(masked._appendPlaceholder());
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
        var shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.value.length) return '';
        var shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
      }
    }]);
    return ContinuousTailDetails;
  }();

  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */
  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
  }

  /** Supported mask type */

  /** Provides common masking stuff */
  var Masked = /*#__PURE__*/function () {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */
    // $FlowFixMe no ideas

    /** Transforms value before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing in the end of editing */

    /** Format typed value to string */

    /** Parse strgin to get typed value */

    /** Enable characters overwriting */

    /** */

    /** */
    function Masked(opts) {
      _classCallCheck(this, Masked);
      this._value = '';
      this._update(Object.assign({}, Masked.DEFAULTS, opts));
      this.isInitialized = true;
    }
    /** Sets and applies new options */

    _createClass(Masked, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length) return; // $FlowFixMe

        this.withValueRefresh(this._update.bind(this, opts));
      }
      /**
        Sets new options
        @protected
      */
    }, {
      key: "_update",
      value: function _update(opts) {
        Object.assign(this, opts);
      }
      /** Mask state */
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(state) {
        this._value = state._value;
      }
      /** Resets value */
    }, {
      key: "reset",
      value: function reset() {
        this._value = '';
      }
      /** */
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        this.resolve(value);
      }
      /** Resolve new value */
    }, {
      key: "resolve",
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, '');
        this.doCommit();
        return this.value;
      }
      /** */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.reset();
        this.append(value, {}, '');
        this.doCommit();
      }
      /** */
    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.value);
      },
      set: function set(value) {
        this.value = this.doFormat(value);
      }
      /** Value that includes raw user input */
    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, '');
        this.doCommit();
      }
      /** */
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
      /** */
    }, {
      key: "isFilled",
      get: function get() {
        return this.isComplete;
      }
      /** Finds nearest input position in direction */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      /** Extracts value in range considering flags */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }
      /** Extracts tail in range */
    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
      /** Appends tail */
      // $FlowFixMe no ideas
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
      /** Appends char */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        if (!ch) return new ChangeDetails();
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
      /** Appends char */
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        var consistentState = this.state;
        var details;
        var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));
        var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
        ch = _normalizePrepare2[0];
        details = _normalizePrepare2[1];
        details = details.aggregate(this._appendCharRaw(ch, flags));
        if (details.inserted) {
          var consistentTail;
          var appended = this.doValidate(flags) !== false;
          if (appended && checkTail != null) {
            // validation ok, check tail
            var beforeTailState = this.state;
            if (this.overwrite === true) {
              consistentTail = checkTail.state;
              checkTail.unshift(this.value.length);
            }
            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

            if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
              this.state = beforeTailState;
              consistentTail = checkTail.state;
              checkTail.shift();
              tailDetails = this.appendTail(checkTail);
              appended = tailDetails.rawInserted === checkTail.toString();
            } // if ok, rollback state after tail

            if (appended && tailDetails.inserted) this.state = beforeTailState;
          } // revert all if something went wrong

          if (!appended) {
            details = new ChangeDetails();
            this.state = consistentState;
            if (checkTail && consistentTail) checkTail.state = consistentTail;
          }
        }
        return details;
      }
      /** Appends optional placeholder at end */
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        return new ChangeDetails();
      }
      /** Appends optional eager placeholder at end */
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }
      /** Appends symbols considering flags */
      // $FlowFixMe no ideas
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        if (!isString(str)) throw new Error('value should be string');
        var details = new ChangeDetails();
        var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
        if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;
        for (var ci = 0; ci < str.length; ++ci) {
          details.aggregate(this._appendChar(str[ci], flags, checkTail));
        } // append tail but aggregate only tailShift

        if (checkTail != null) {
          details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }

        if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
          details.aggregate(this._appendEager());
        }
        return details;
      }
      /** */
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }
      /** Calls function and reapplies current value */
    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        var rawInput = this.rawInputValue;
        var value = this.value;
        var ret = fn();
        this.rawInputValue = rawInput; // append lost trailing chars at end

        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
          this.append(value.slice(this.value.length), {}, '');
        }
        delete this._refreshing;
        return ret;
      }
      /** */
    }, {
      key: "runIsolated",
      value: function runIsolated(fn) {
        if (this._isolated || !this.isInitialized) return fn(this);
        this._isolated = true;
        var state = this.state;
        var ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
      }
      /**
        Prepares string before mask processing
        @protected
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }
      /**
        Validates if value is acceptable
        @protected
      */
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
      /**
        Does additional processing in the end of editing
        @protected
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      /** */
    }, {
      key: "doFormat",
      value: function doFormat(value) {
        return this.format ? this.format(value, this) : value;
      }
      /** */
    }, {
      key: "doParse",
      value: function doParse(str) {
        return this.parse ? this.parse(str, this) : str;
      }
      /** */
    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
          input: true
        };
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var oldRawValue;
        if (this.eager) {
          removeDirection = forceDirection(removeDirection);
          oldRawValue = this.extractInput(0, tailPos, {
            raw: true
          });
        }
        var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
        var details = new ChangeDetails({
          tailShift: startChangePos - start // adjust tailShift if start was aligned
        }).aggregate(this.remove(startChangePos));
        if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
          if (removeDirection === DIRECTION.FORCE_LEFT) {
            var valLength;
            while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
              details.aggregate(new ChangeDetails({
                tailShift: -1
              })).aggregate(this.remove(valLength - 1));
            }
          } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
            tail.unshift();
          }
        }
        return details.aggregate(this.append(inserted, flags, tail));
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return this.mask === mask;
      }
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        var tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
      }
    }]);
    return Masked;
  }();
  Masked.DEFAULTS = {
    format: function format(v) {
      return v;
    },
    parse: function parse(v) {
      return v;
    }
  };
  Masked.EMPTY_VALUES = [undefined, null, ''];
  IMask.Masked = Masked;

  /** Get Masked class by mask type */

  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    } // $FlowFixMe

    if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

    if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

    if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

    if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

    if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

    if (mask instanceof IMask.Masked) return mask.constructor; // $FlowFixMe

    if (mask instanceof Function) return IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    // $FlowFixMe

    return IMask.Masked;
  }
  /** Creates new {@link Masked} depending on mask type */

  function createMask(opts) {
    // $FlowFixMe
    if (IMask.Masked && opts instanceof IMask.Masked) return opts;
    opts = Object.assign({}, opts);
    var mask = opts.mask; // $FlowFixMe

    if (IMask.Masked && mask instanceof IMask.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
    return new MaskedClass(opts);
  }
  IMask.createMask = createMask;
  var _excluded$4 = ["mask"];
  var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };
  /** */

  var PatternInputDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternInputDefinition(opts) {
      _classCallCheck(this, PatternInputDefinition);
      var mask = opts.mask,
        blockOpts = _objectWithoutProperties(opts, _excluded$4);
      this.masked = createMask({
        mask: mask
      });
      Object.assign(this, blockOpts);
    }
    _createClass(PatternInputDefinition, [{
      key: "reset",
      value: function reset() {
        this.isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        if (fromPos === 0 && toPos >= 1) {
          this.isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }
        return new ChangeDetails();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this.isFilled) return new ChangeDetails();
        var state = this.masked.state; // simulate input

        var details = this.masked._appendChar(ch, flags);
        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked;

        // TODO probably should be done via _appendChar
        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this.isFilled || this.isOptional) return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked2;
        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked3;
        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;
          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked4, _this$parent;
        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          isFilled: this.isFilled
        };
      },
      set: function set(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
      }
    }]);
    return PatternInputDefinition;
  }();
  var PatternFixedDefinition = /*#__PURE__*/function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternFixedDefinition(opts) {
      _classCallCheck(this, PatternFixedDefinition);
      Object.assign(this, opts);
      this._value = '';
      this.isFixed = true;
    }
    _createClass(PatternFixedDefinition, [{
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : '';
      }
    }, {
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = '';
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;
          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "isFilled",
      get: function get() {
        return Boolean(this._value);
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = new ChangeDetails();
        if (this._value) return details;
        var appended = this["char"] === ch;
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !this.eager) && !flags.tail;
        if (isResolved) details.rawInserted = this["char"];
        this._value = details.inserted = this["char"];
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return this._appendChar(this["char"], {
          tail: true
        });
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._value) return details;
        this._value = details.inserted = this["char"];
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ContinuousTailDetails('');
      } // $FlowFixMe no ideas
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = this._appendChar(str[0], flags);
        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }
        return details;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(state) {
        Object.assign(this, state);
      }
    }]);
    return PatternFixedDefinition;
  }();
  var _excluded$3 = ["chunks"];
  var ChunksTailDetails = /*#__PURE__*/function () {
    /** */
    function ChunksTailDetails() {
      var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      _classCallCheck(this, ChunksTailDetails);
      this.chunks = chunks;
      this.from = from;
    }
    _createClass(ChunksTailDetails, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join('');
      } // $FlowFixMe no ideas
    }, {
      key: "extend",
      value: function extend(tailChunk) {
        if (!String(tailChunk)) return;
        if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
        var lastChunk = this.chunks[this.chunks.length - 1];
        var extendLast = lastChunk && (
        // if stops are same or tail has no stop
        lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
        // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof ContinuousTailDetails) {
          // check the ability to extend previous chunk
          if (extendLast) {
            // extend previous chunk
            lastChunk.extend(tailChunk.toString());
          } else {
            // append new chunk
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails) {
          if (tailChunk.stop == null) {
            // unwrap floating chunks to parent, keeping `from` pos
            var firstTailChunk;
            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift();
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          } // if tail chunk still has value

          if (tailChunk.toString()) {
            // if chunks contains stops, then popup stop to container
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        // $FlowFixMe
        if (!(masked instanceof IMask.MaskedPattern)) {
          var tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }
        var details = new ChangeDetails();
        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          var chunk = this.chunks[ci];
          var lastBlockIter = masked._mapPosToBlock(masked.value.length);
          var stop = chunk.stop;
          var chunkBlock = void 0;
          if (stop != null && (
          // if block not found or stop is behind lastBlock
          !lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails ||
            // for continuous block also check if stop is exist
            masked._stops.indexOf(stop) >= 0) {
              details.aggregate(masked._appendPlaceholder(stop));
            }
            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
          }
          if (chunkBlock) {
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last

            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted; // get not inserted chars

            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(masked.append(remainChars, {
              tail: true
            }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }
        return details;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function (c) {
            return c.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set(state) {
        var chunks = state.chunks,
          props = _objectWithoutProperties(state, _excluded$3);
        Object.assign(this, props);
        this.chunks = chunks.map(function (cstate) {
          var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

          chunk.state = cstate;
          return chunk;
        });
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
        var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        var ci = 0;
        while (ci < this.chunks.length) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.unshift(chunkShiftPos);
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            ++ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.chunks.length) return '';
        var ci = this.chunks.length - 1;
        while (0 <= ci) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.shift();
          if (chunk.toString()) {
            // chunk still contains value
            // but not shifted - means no more available chars to shift
            if (!shiftChar) break;
            --ci;
          } else {
            // clean if chunk has no value
            this.chunks.splice(ci, 1);
          }
          if (shiftChar) return shiftChar;
        }
        return '';
      }
    }]);
    return ChunksTailDetails;
  }();
  var PatternCursor = /*#__PURE__*/function () {
    function PatternCursor(masked, pos) {
      _classCallCheck(this, PatternCursor);
      this.masked = masked;
      this._log = [];
      var _ref = masked._mapPosToBlock(pos) || (pos < 0 ?
        // first
        {
          index: 0,
          offset: 0
        } :
        // last
        {
          index: this.masked._blocks.length,
          offset: 0
        }),
        offset = _ref.offset,
        index = _ref.index;
      this.offset = offset;
      this.index = index;
      this.ok = false;
    }
    _createClass(PatternCursor, [{
      key: "block",
      get: function get() {
        return this.masked._blocks[this.index];
      }
    }, {
      key: "pos",
      get: function get() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          index: this.index,
          offset: this.offset,
          ok: this.ok
        };
      },
      set: function set(s) {
        Object.assign(this, s);
      }
    }, {
      key: "pushState",
      value: function pushState() {
        this._log.push(this.state);
      }
    }, {
      key: "popState",
      value: function popState() {
        var s = this._log.pop();
        this.state = s;
        return s;
      }
    }, {
      key: "bindBlock",
      value: function bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
          this.index = 0;
          this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
          this.index = this.masked._blocks.length - 1;
          this.offset = this.block.value.length;
        }
      }
    }, {
      key: "_pushLeft",
      value: function _pushLeft(fn) {
        this.pushState();
        for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
          var _this$block;
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
    }, {
      key: "_pushRight",
      value: function _pushRight(fn) {
        this.pushState();
        for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
          if (fn()) return this.ok = true;
        }
        return this.ok = false;
      }
    }, {
      key: "pushLeftBeforeFilled",
      value: function pushLeftBeforeFilled() {
        var _this = this;
        return this._pushLeft(function () {
          if (_this.block.isFixed || !_this.block.value) return;
          _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
          if (_this.offset !== 0) return true;
        });
      }
    }, {
      key: "pushLeftBeforeInput",
      value: function pushLeftBeforeInput() {
        var _this2 = this;

        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(function () {
          if (_this2.block.isFixed) return;
          _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushLeftBeforeRequired",
      value: function pushLeftBeforeRequired() {
        var _this3 = this;
        return this._pushLeft(function () {
          if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
          _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushRightBeforeFilled",
      value: function pushRightBeforeFilled() {
        var _this4 = this;
        return this._pushRight(function () {
          if (_this4.block.isFixed || !_this4.block.value) return;
          _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
          if (_this4.offset !== _this4.block.value.length) return true;
        });
      }
    }, {
      key: "pushRightBeforeInput",
      value: function pushRightBeforeInput() {
        var _this5 = this;
        return this._pushRight(function () {
          if (_this5.block.isFixed) return; // const o = this.offset;

          _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
          // aa|X
          // aa<X|[]>X_    - this will not work
          // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

          return true;
        });
      }
    }, {
      key: "pushRightBeforeRequired",
      value: function pushRightBeforeRequired() {
        var _this6 = this;
        return this._pushRight(function () {
          if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

          _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
          return true;
        });
      }
    }]);
    return PatternCursor;
  }();

  /** Masking by RegExp */

  var MaskedRegExp = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedRegExp, _Masked);
    var _super = _createSuper(MaskedRegExp);
    function MaskedRegExp() {
      _classCallCheck(this, MaskedRegExp);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedRegExp, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        if (opts.mask) opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };
        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
      }
    }]);
    return MaskedRegExp;
  }(Masked);
  IMask.MaskedRegExp = MaskedRegExp;
  var _excluded$2 = ["_blocks"];

  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.blocks
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {boolean} opts.lazy
  */
  var MaskedPattern = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedPattern, _Masked);
    var _super = _createSuper(MaskedPattern);

    /** */

    /** */

    /** Single char for empty input */

    /** Show placeholder only when needed */
    function MaskedPattern() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, MaskedPattern);

      // TODO type $Shape<MaskedPatternOptions>={} does not work
      opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
    }
    /**
      @override
      @param {Object} opts
    */

    _createClass(MaskedPattern, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);
        this._rebuildMask();
      }
      /** */
    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this = this;
        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs) return;
        var unmaskingBlock = false;
        var optionalBlock = false;
        for (var i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            var _ret = function () {
              var p = pattern.slice(i);
              var bNames = Object.keys(_this.blocks).filter(function (bName) {
                return p.indexOf(bName) === 0;
              }); // order by key length

              bNames.sort(function (a, b) {
                return b.length - a.length;
              }); // use block name with max length

              var bName = bNames[0];
              if (bName) {
                // $FlowFixMe no ideas
                var maskedBlock = createMask(Object.assign({
                  parent: _this,
                  lazy: _this.lazy,
                  eager: _this.eager,
                  placeholderChar: _this.placeholderChar,
                  overwrite: _this.overwrite
                }, _this.blocks[bName]));
                if (maskedBlock) {
                  _this._blocks.push(maskedBlock); // store block index

                  if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];
                  _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                }
                i += bName.length - 1;
                return "continue";
              }
            }();
            if (_ret === "continue") continue;
          }
          var _char = pattern[i];
          var isInput = (_char in defs);
          if (_char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if (_char === '{' || _char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }
          if (_char === '[' || _char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }
          if (_char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            _char = pattern[i];
            if (!_char) break;
            isInput = false;
          }
          var def = isInput ? new PatternInputDefinition({
            parent: this,
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            mask: defs[_char],
            isOptional: optionalBlock
          }) : new PatternFixedDefinition({
            "char": _char,
            eager: this.eager,
            isUnmasking: unmaskingBlock
          });
          this._blocks.push(def);
        }
      }
      /**
        @override
      */
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map(function (b) {
            return b.state;
          })
        });
      },
      set: function set(state) {
        var _blocks = state._blocks,
          maskedState = _objectWithoutProperties(state, _excluded$2);
        this._blocks.forEach(function (b, bi) {
          return b.state = _blocks[bi];
        });
        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
      }
      /**
        @override
      */
    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);
        this._blocks.forEach(function (b) {
          return b.reset();
        });
      }
      /**
        @override
      */
    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isComplete;
        });
      }
      /**
        @override
      */
    }, {
      key: "isFilled",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isFilled;
        });
      }
    }, {
      key: "isFixed",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isFixed;
        });
      }
    }, {
      key: "isOptional",
      get: function get() {
        return this._blocks.every(function (b) {
          return b.isOptional;
        });
      }
      /**
        @override
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        this._blocks.forEach(function (b) {
          return b.doCommit();
        });
        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function (str, b) {
          return str += b.unmaskedValue;
        }, '');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */
    }, {
      key: "value",
      get: function get() {
        // TODO return _value when not in change?
        return this._blocks.reduce(function (str, b) {
          return str += b.value;
        }, '');
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
      }
      /**
        @override
      */
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
      }
      /**
        @override
      */
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var _this$_mapPosToBlock;
        var details = new ChangeDetails();
        var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
          var d = this._blocks[bi]._appendEager();
          if (!d.inserted) break;
          details.aggregate(d);
        }
        return details;
      }
      /**
        @override
      */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var blockIter = this._mapPosToBlock(this.value.length);
        var details = new ChangeDetails();
        if (!blockIter) return details;
        for (var bi = blockIter.index;; ++bi) {
          var _flags$_beforeTailSta, _flags$_beforeTailSta2;
          var _block = this._blocks[bi];
          if (!_block) break;
          var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
            _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
          }));
          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted) break; // go next char
        }

        return details;
      }
      /**
        @override
      */
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this2 = this;
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var chunkTail = new ChunksTailDetails();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
          var blockChunk = b.extractTail(bFromPos, bToPos);
          blockChunk.stop = _this2._findStopBefore(bi);
          blockChunk.from = _this2._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });
        return chunkTail;
      }
      /**
        @override
      */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return '';
        var input = '';
        this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
          input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(blockIndex) {
        var stopBefore;
        for (var si = 0; si < this._stops.length; ++si) {
          var stop = this._stops[si];
          if (stop <= blockIndex) stopBefore = stop;else break;
        }
        return stopBefore;
      }
      /** Appends placeholder depending on laziness */
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this3 = this;
        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;
        var startBlockIter = this._mapPosToBlock(this.value.length);
        if (!startBlockIter) return details;
        var startBlockIndex = startBlockIter.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
          if (!b.lazy || toBlockIndex != null) {
            // $FlowFixMe `_blocks` may not be present
            var args = b._blocks != null ? [b._blocks.length] : [];
            var bDetails = b._appendPlaceholder.apply(b, args);
            _this3._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });
        return details;
      }
      /** Finds block in pos */
    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = '';
        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var _block2 = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += _block2.value;
          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      /** */
    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
          return pos += b.value.length;
        }, 0);
      }
      /** */
    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : undefined;
        var fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
          var toBlockIter = this._mapPosToBlock(toPos); // process first block

          var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          var fromBlockStartPos = fromBlockIter.offset;
          var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
          if (toBlockIter && !isSameBlock) {
            // process intermediate blocks
            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
            } // process last block

            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
      /**
        @override
      */
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
      }
      /**
        @override
      */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        if (!this._blocks.length) return 0;
        var cursor = new PatternCursor(this, cursorPos);
        if (direction === DIRECTION.NONE) {
          // -------------------------------------------------
          // NONE should only go out from fixed to the right!
          // -------------------------------------------------
          if (cursor.pushRightBeforeInput()) return cursor.pos;
          cursor.popState();
          if (cursor.pushLeftBeforeInput()) return cursor.pos;
          return this.value.length;
        } // FORCE is only about a|* otherwise is 0

        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // try to break fast when *|a
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeFilled();
            if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
            cursor.popState();
          } // forward flow

          cursor.pushLeftBeforeInput();
          cursor.pushLeftBeforeRequired();
          cursor.pushLeftBeforeFilled(); // backward flow

          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
            cursor.popState();
          }
          if (cursor.ok) return cursor.pos;
          if (direction === DIRECTION.FORCE_LEFT) return 0;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos; // cursor.popState();
          // if (
          //   cursor.pushRightBeforeInput() &&
          //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
          //   (!this.lazy || this.extractInput())
          // ) return cursor.pos;

          return 0;
        }
        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // forward flow
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.pushRightBeforeFilled()) return cursor.pos;
          if (direction === DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

          cursor.popState();
          if (cursor.ok) return cursor.pos;
          cursor.popState();
          if (cursor.ok) return cursor.pos;
          return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
        }
        return cursorPos;
      }
      /** Get block by name */
    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
      /** Get all blocks by name */
    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this4 = this;
        var indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(function (gi) {
          return _this4._blocks[gi];
        });
      }
    }]);
    return MaskedPattern;
  }(Masked);
  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;
  IMask.MaskedPattern = MaskedPattern;

  /** Pattern which accepts ranges */

  var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedRange, _MaskedPattern);
    var _super = _createSuper(MaskedRange);
    function MaskedRange() {
      _classCallCheck(this, MaskedRange);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedRange, [{
      key: "_matchFrom",
      get:
      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */

      /** Min bound */

      /** Max bound */

      /** */
      function get() {
        return this.maxLength - String(this.from).length;
      }
      /**
        @override
      */
    }, {
      key: "_update",
      value: function _update(opts) {
        // TODO type
        opts = Object.assign({
          to: this.to || 0,
          from: this.from || 0,
          maxLength: this.maxLength || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var fromStr = String(opts.from).padStart(maxLength, '0');
        var toStr = String(opts.to).padStart(maxLength, '0');
        var sameCharsCount = 0;
        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
          ++sameCharsCount;
        }
        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);
        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */
    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function boundaries(str) {
        var minstr = '';
        var maxstr = '';
        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = _slicedToArray(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];
        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');
        return [minstr, maxstr];
      } // TODO str is a single char everytime

      /**
        @override
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details;
        var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));
        var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
        ch = _normalizePrepare2[0];
        details = _normalizePrepare2[1];
        if (!this.autofix || !ch) return ch;
        var fromStr = String(this.from).padStart(this.maxLength, '0');
        var toStr = String(this.to).padStart(this.maxLength, '0');
        var nextVal = this.value + ch;
        if (nextVal.length > this.maxLength) return '';
        var _this$boundaries = this.boundaries(nextVal),
          _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
          minstr = _this$boundaries2[0],
          maxstr = _this$boundaries2[1];
        if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
        if (Number(minstr) > this.to) {
          if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
            return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
          }
          return toStr[nextVal.length - 1];
        }
        return ch;
      }
      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;
        var str = this.value;
        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);
    return MaskedRange;
  }(MaskedPattern);
  IMask.MaskedRange = MaskedRange;

  /** Date mask */

  var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedDate, _MaskedPattern);
    var _super = _createSuper(MaskedDate);

    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** */

    /**
      @param {Object} opts
    */
    function MaskedDate(opts) {
      _classCallCheck(this, MaskedDate);
      return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
    }
    /**
      @override
    */

    _createClass(MaskedDate, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;
        if (opts.pattern) opts.mask = opts.pattern;
        var blocks = opts.blocks;
        opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;
          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }
        Object.assign(opts.blocks, this.blocks, blocks); // add autofix

        Object.keys(opts.blocks).forEach(function (bk) {
          var b = opts.blocks[bk];
          if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
        });
        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;
        var date = this.date;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
      /** Checks if date is exists */
    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
      }
      /** Parsed Date */
    }, {
      key: "date",
      get: function get() {
        return this.typedValue;
      },
      set: function set(date) {
        this.typedValue = date;
      }
      /**
        @override
      */
    }, {
      key: "typedValue",
      get: function get() {
        return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
      }
      /**
        @override
      */
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
      }
    }]);
    return MaskedDate;
  }(MaskedPattern);
  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      if (!date) return '';
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
        _str$split2 = _slicedToArray(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];
      return new Date(year, month - 1, day);
    }
  };
  MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };
  IMask.MaskedDate = MaskedDate;

  /**
    Generic element API to use with mask
    @interface
  */
  var MaskElement = /*#__PURE__*/function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement);
    }
    _createClass(MaskElement, [{
      key: "selectionStart",
      get: /** */

      /** */

      /** */

      /** Safely returns selection start */
      function get() {
        var start;
        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}
        return start != null ? start : this.value.length;
      }
      /** Safely returns selection end */
    }, {
      key: "selectionEnd",
      get: function get() {
        var end;
        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}
        return end != null ? end : this.value.length;
      }
      /** Safely sets element selection */
    }, {
      key: "select",
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }
      /** Should be overriden in subclasses */
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {}
      /** Should be overriden in subclasses */
    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
      /** Should be overriden in subclasses */
    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {}
      /** Should be overriden in subclasses */
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }]);
    return MaskElement;
  }();
  IMask.MaskElement = MaskElement;

  /** Bridge between HTMLElement and {@link Masked} */

  var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
    _inherits(HTMLMaskElement, _MaskElement);
    var _super = _createSuper(HTMLMaskElement);

    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
      @param {HTMLInputElement|HTMLTextAreaElement} input
    */
    function HTMLMaskElement(input) {
      var _this;
      _classCallCheck(this, HTMLMaskElement);
      _this = _super.call(this);
      _this.input = input;
      _this._handlers = {};
      return _this;
    }
    /** */
    // $FlowFixMe https://github.com/facebook/flow/issues/2839

    _createClass(HTMLMaskElement, [{
      key: "rootElement",
      get: function get() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
      }
      /**
        Is element in focus
        @readonly
      */
    }, {
      key: "isActive",
      get: function get() {
        //$FlowFixMe
        return this.input === this.rootElement.activeElement;
      }
      /**
        Returns HTMLElement selection start
        @override
      */
    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
      /**
        Returns HTMLElement selection end
        @override
      */
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
      /**
        Sets HTMLElement selection
        @override
      */
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      /**
        HTMLElement value
        @override
      */
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
      /**
        Binds HTMLElement events to mask internal events
        @override
      */
    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {
        var _this2 = this;
        Object.keys(handlers).forEach(function (event) {
          return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }
      /**
        Unbinds HTMLElement events to mask internal events
        @override
      */
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this3 = this;
        Object.keys(this._handlers).forEach(function (event) {
          return _this3._toggleEventHandler(event);
        });
      }
      /** */
    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }
        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }]);
    return HTMLMaskElement;
  }(MaskElement);
  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
  };
  IMask.HTMLMaskElement = HTMLMaskElement;
  var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
    _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);
    var _super = _createSuper(HTMLContenteditableMaskElement);
    function HTMLContenteditableMaskElement() {
      _classCallCheck(this, HTMLContenteditableMaskElement);
      return _super.apply(this, arguments);
    }
    _createClass(HTMLContenteditableMaskElement, [{
      key: "_unsafeSelectionStart",
      get:
      /**
        Returns HTMLElement selection start
        @override
      */
      function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
      /**
        Returns HTMLElement selection end
        @override
      */
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
      /**
        Sets HTMLElement selection
        @override
      */
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        var range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      /**
        HTMLElement value
        @override
      */
    }, {
      key: "value",
      get: function get() {
        // $FlowFixMe
        return this.input.textContent;
      },
      set: function set(value) {
        this.input.textContent = value;
      }
    }]);
    return HTMLContenteditableMaskElement;
  }(HTMLMaskElement);
  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  var _excluded$1 = ["mask"];
  /** Listens to element events and controls changes between element and {@link Masked} */

  var InputMask = /*#__PURE__*/function () {
    /**
      View element
      @readonly
    */

    /**
      Internal {@link Masked} model
      @readonly
    */

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */
    function InputMask(el, opts) {
      _classCallCheck(this, InputMask);
      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
      this._bindEvents(); // refresh

      this.updateValue();
      this._onChange();
    }
    /** Read or update mask */

    _createClass(InputMask, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(mask) {
        if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask: mask
          });
          return;
        }
        var masked = createMask({
          mask: mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
      /** Raw value */
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        var _this$masked;
        return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Unmasked value */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Typed unmasked value */
    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
      /**
        Starts listening to element events
        @protected
      */
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        });
      }
      /**
        Stops listening to element events
        @protected
       */
    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        if (this.el) this.el.unbindEvents();
      }
      /**
        Fires custom event
        @protected
       */
    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(function (l) {
          return l.apply(void 0, args);
        });
      }
      /**
        Current selection start
        @readonly
      */
    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      /** Current cursor position */
    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
      }
      /**
        Stores current selection
        @protected
      */
    }, {
      key: "_saveSelection",
      value: function /* ev */
      _saveSelection() {
        if (this.value !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }

        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
      /** Syncronizes model value from view */
    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
      /** Syncronizes view from model value, fires change events */
    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newValue) this.el.value = newValue;
        if (isChanged) this._fireChangeEvents();
      }
      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */
    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        var mask = opts.mask,
          restOpts = _objectWithoutProperties(opts, _excluded$1);
        var updateMask = !this.maskEquals(mask);
        var updateOpts = !objectIncludes(this.masked, restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts);
        if (updateMask || updateOpts) this.updateControl();
      }
      /** Updates cursor */
    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

        this._delayUpdateCursor(cursorPos);
      }
      /**
        Delays cursor update to support mobile browsers
        @private
      */
    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this.el) return; // if was destroyed

          _this.cursorPos = _this._changingCursorPos;
          _this._abortUpdateCursor();
        }, 10);
      }
      /**
        Fires custom events
        @protected
      */
    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent('accept', this._inputEvent);
        if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
      }
      /**
        Aborts delayed cursor update
        @private
      */
    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
      /** Aligns cursor to nearest available position */
    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
      }
      /** Aligns cursor only if selection is empty */
    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

        this.alignCursor();
      }
      /** Adds listener on custom event */
    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
      }
      /** Removes custom event listener */
    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
          delete this._listeners[ev];
          return this;
        }
        var hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
      /** Handles view input event */
    }, {
      key: "_onInput",
      value: function _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor(); // fix strange IE behavior

        if (!this._selection) return this.updateValue();
        var details = new ActionDetails(
        // new state
        this.el.value, this.cursorPos,
        // old state
        this.value, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
          input: true,
          raw: true
        }).offset; // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
        this.updateControl();
        this.updateCursor(cursorPos);
        delete this._inputEvent;
      }
      /** Handles view change event and commits model value */
    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
      }
      /** Handles view drop event, prevents by default */
    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      /** Restore last selection on focus */
    }, {
      key: "_onFocus",
      value: function _onFocus(ev) {
        this.alignCursorFriendly();
      }
      /** Restore last selection on focus */
    }, {
      key: "_onClick",
      value: function _onClick(ev) {
        this.alignCursorFriendly();
      }
      /** Unbind view events and removes element reference */
    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents(); // $FlowFixMe why not do so?

        this._listeners.length = 0; // $FlowFixMe

        delete this.el;
      }
    }]);
    return InputMask;
  }();
  IMask.InputMask = InputMask;

  /** Pattern which validates enum values */

  var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
    _inherits(MaskedEnum, _MaskedPattern);
    var _super = _createSuper(MaskedEnum);
    function MaskedEnum() {
      _classCallCheck(this, MaskedEnum);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedEnum, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        // TODO type
        if (opts["enum"]) opts.mask = '*'.repeat(opts["enum"][0].length);
        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this = this,
          _get2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this["enum"].some(function (e) {
          return e.indexOf(_this.unmaskedValue) >= 0;
        }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);
    return MaskedEnum;
  }(MaskedPattern);
  IMask.MaskedEnum = MaskedEnum;

  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */
  var MaskedNumber = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedNumber, _Masked);
    var _super = _createSuper(MaskedNumber);

    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */
    function MaskedNumber(opts) {
      _classCallCheck(this, MaskedNumber);
      return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
    }
    /**
      @override
    */

    _createClass(MaskedNumber, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);
        this._updateRegExps();
      }
      /** */
    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        // use different regexp to process user input (more strict, input suffix) and tail shifting
        var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
        var midInput = '(0|([1-9]+\\d*))?';
        var mid = '\\d*';
        var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      /** */
    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      /** */
    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      /**
        @override
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var _get2;
        ch = ch.replace(this._mapToRadixRegExp, this.radix);
        var noSepCh = this._removeThousandsSeparators(ch);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
          _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
          prepCh = _normalizePrepare2[0],
          details = _normalizePrepare2[1];
        if (ch && !noSepCh) details.skip = true;
        return [prepCh, details];
      }
      /** */
    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(to) {
        var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var count = 0;
        for (var pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
          }
        }
        return count;
      }
      /** */
    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
      /**
        @override
      */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
        fromPos = _this$_adjustRangeWit2[0];
        toPos = _this$_adjustRangeWit2[1];
        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
      }
      /**
        @override
      */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
        var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
        this._value = this._insertThousandsSeparators(this._value);
        var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
      }
      /** */
    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          var searchFrom = pos - this.thousandsSeparator.length + 1;
          var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos) return separatorPos;
        }
        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(from, to) {
        var separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        var separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
      /**
        @override
      */
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
        fromPos = _this$_adjustRangeWit4[0];
        toPos = _this$_adjustRangeWit4[1];
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);
        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
      /**
        @override
      */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            {
              var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
              if (separatorAtLeftPos >= 0) {
                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                  return separatorAtLeftPos;
                }
              }
              break;
            }
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            {
              var separatorAtRightPos = this._findSeparatorAround(cursorPos);
              if (separatorAtRightPos >= 0) {
                return separatorAtRightPos + this.thousandsSeparator.length;
              }
            }
        }
        return cursorPos;
      }
      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

        var valid = regexp.test(this._removeThousandsSeparators(this.value));
        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && (
          // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && (
          // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }
        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
      }
      /**
        @override
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var number = this.number;
          var validnum = number; // check bounds

          if (this.min != null) validnum = Math.max(validnum, this.min);
          if (this.max != null) validnum = Math.min(validnum, this.max);
          if (validnum !== number) this.unmaskedValue = String(validnum);
          var formatted = this.value;
          if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }
        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
      }
      /** */
    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros

        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        }); // add leading zero

        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      /** */
    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value) return value;
        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      /**
        @override
      */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
      }
      /**
        @override
      */
    }, {
      key: "typedValue",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set(n) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
      }
      /** Parsed Number */
    }, {
      key: "number",
      get: function get() {
        return this.typedValue;
      },
      set: function set(number) {
        this.typedValue = number;
      }
      /**
        Is negative allowed
        @readonly
      */
    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
      /**
        @override
      */
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (_get(_getPrototypeOf(MaskedNumber.prototype), "typedValueEquals", this).call(this, value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
      }
    }]);
    return MaskedNumber;
  }(Masked);
  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };
  MaskedNumber.EMPTY_VALUES = [].concat(_toConsumableArray(Masked.EMPTY_VALUES), [0]);
  IMask.MaskedNumber = MaskedNumber;

  /** Masking by custom Function */

  var MaskedFunction = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedFunction, _Masked);
    var _super = _createSuper(MaskedFunction);
    function MaskedFunction() {
      _classCallCheck(this, MaskedFunction);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedFunction, [{
      key: "_update",
      value:
      /**
        @override
        @param {Object} opts
      */
      function _update(opts) {
        if (opts.mask) opts.validate = opts.mask;
        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
      }
    }]);
    return MaskedFunction;
  }(Masked);
  IMask.MaskedFunction = MaskedFunction;
  var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

  /** Dynamic mask for choosing apropriate mask in run-time */
  var MaskedDynamic = /*#__PURE__*/function (_Masked) {
    _inherits(MaskedDynamic, _Masked);
    var _super = _createSuper(MaskedDynamic);

    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
      @param {Object} opts
    */
    function MaskedDynamic(opts) {
      var _this;
      _classCallCheck(this, MaskedDynamic);
      _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
      _this.currentMask = null;
      return _this;
    }
    /**
      @override
    */

    _createClass(MaskedDynamic, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);
        if ('mask' in opts) {
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
            return createMask(m);
          }) : [];
        }
      }
      /**
        @override
      */
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var details = this._applyDispatch(ch, flags);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        }
        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && flags._beforeTailState != null ?
        // $FlowFixMe - tired to fight with type system
        flags._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

        this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset();
            if (insertValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              var d = this.currentMask.append(insertValue, {
                raw: true
              });
              details.tailShift = d.inserted.length - prevValueBeforeTail.length;
            }
            if (tailValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
          }
        }
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = this._applyDispatch.apply(this, arguments);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendPlaceholder());
        }
        return details;
      }
      /**
       @override
      */
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var details = this._applyDispatch.apply(this, arguments);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendEager());
        }
        return details;
      }
    }, {
      key: "currentMaskFlags",
      value: function currentMaskFlags(flags) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        return Object.assign({}, flags, {
          _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
        });
      }
      /**
        @override
      */
    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.dispatch(appended, this, flags);
      }
      /**
        @override
      */
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this).call(this, flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
      }
      /**
        @override
      */
    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, str, flags)),
          _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
          s = _normalizePrepare2[0],
          details = _normalizePrepare2[1];
        if (this.currentMask) {
          var currentDetails;
          var _normalizePrepare3 = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, s, this.currentMaskFlags(flags)));
          var _normalizePrepare4 = _slicedToArray(_normalizePrepare3, 2);
          s = _normalizePrepare4[0];
          currentDetails = _normalizePrepare4[1];
          details = details.aggregate(currentDetails);
        }
        return [s, details];
      }
      /**
        @override
      */
    }, {
      key: "reset",
      value: function reset() {
        var _this$currentMask;
        (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
        this.compiledMasks.forEach(function (m) {
          return m.reset();
        });
      }
      /**
        @override
      */
    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set(value) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
      }
      /**
        @override
      */
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */
    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : '';
      } // probably typedValue should not be used with dynamic
      ,

      set: function set(value) {
        var unmaskedValue = String(value); // double check it

        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
      }
      /**
        @override
      */
    }, {
      key: "isComplete",
      get: function get() {
        var _this$currentMask2;
        return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
      }
      /**
        @override
      */
    }, {
      key: "isFilled",
      get: function get() {
        var _this$currentMask3;
        return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
      }
      /**
        @override
      */
    }, {
      key: "remove",
      value: function remove() {
        var details = new ChangeDetails();
        if (this.currentMask) {
          var _this$currentMask4;
          details.aggregate((_this$currentMask4 = this.currentMask).remove.apply(_this$currentMask4, arguments)) // update with dispatch
          .aggregate(this._applyDispatch());
        }
        return details;
      }
      /**
        @override
      */
    }, {
      key: "state",
      get: function get() {
        var _this$currentMask5;
        return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (m) {
            return m.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: (_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.state
        });
      },
      set: function set(state) {
        var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = _objectWithoutProperties(state, _excluded);
        this.compiledMasks.forEach(function (m, mi) {
          return m.state = compiledMasks[mi];
        });
        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }
        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
      }
      /**
        @override
      */
    }, {
      key: "extractInput",
      value: function extractInput() {
        var _this$currentMask6;
        return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
      }
      /**
        @override
      */
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask7, _get2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get2, [this].concat(args));
      }
      /**
        @override
      */
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask8, _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get3, [this].concat(args));
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
      },
      set: function set(overwrite) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "eager",
      get: function get() {
        return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
      },
      set: function set(eager) {
        console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
      }
      /**
        @override
      */
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
          var _mask$mi;
          return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
        });
      }
      /**
        @override
      */
    }, {
      key: "typedValueEquals",
      value: function typedValueEquals(value) {
        var _this$currentMask9;
        return Boolean((_this$currentMask9 = this.currentMask) === null || _this$currentMask9 === void 0 ? void 0 : _this$currentMask9.typedValueEquals(value));
      }
    }]);
    return MaskedDynamic;
  }(Masked);
  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length) return;
      var inputValue = masked.rawInputValue; // simulate input

      var inputs = masked.compiledMasks.map(function (m, index) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
        m.append(appended, masked.currentMaskFlags(flags));
        var weight = m.rawInputValue.length;
        return {
          weight: weight,
          index: index
        };
      }); // pop masks with longer values first

      inputs.sort(function (i1, i2) {
        return i2.weight - i1.weight;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;

  /** Mask pipe source and destination types */

  var PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
  };
  /** Creates new pipe function depending on mask type, source and destination options */

  function createPipe(mask) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
    var masked = createMask(mask);
    return function (value) {
      return masked.runIsolated(function (m) {
        m[from] = value;
        return m[to];
      });
    };
  }
  /** Pipes value through mask depending on mask type, source and destination options */

  function pipe(value) {
    for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipeArgs[_key - 1] = arguments[_key];
    }
    return createPipe.apply(void 0, pipeArgs)(value);
  }
  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;
  try {
    globalThis.IMask = IMask;
  } catch (e) {}
  exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  exports.HTMLMaskElement = HTMLMaskElement;
  exports.InputMask = InputMask;
  exports.MaskElement = MaskElement;
  exports.Masked = Masked;
  exports.MaskedDate = MaskedDate;
  exports.MaskedDynamic = MaskedDynamic;
  exports.MaskedEnum = MaskedEnum;
  exports.MaskedFunction = MaskedFunction;
  exports.MaskedNumber = MaskedNumber;
  exports.MaskedPattern = MaskedPattern;
  exports.MaskedRange = MaskedRange;
  exports.MaskedRegExp = MaskedRegExp;
  exports.PIPE_TYPE = PIPE_TYPE;
  exports.createMask = createMask;
  exports.createPipe = createPipe;
  exports["default"] = IMask;
  exports.pipe = pipe;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./resources/front/js/jquery.min.js":
/*!******************************************!*\
  !*** ./resources/front/js/jquery.min.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? 0 : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat ? function (e) {
      return t.flat.call(e);
    } : function (e) {
      return t.concat.apply([], e);
    },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function m(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    x = function x(e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }
  var f = "3.6.0",
    S = function S(e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }
    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;
      for (t in e) {
        return !1;
      }
      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
        r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }
      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }
      return r;
    },
    map: function map(e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var d = function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function j(e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }
        return -1;
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function ne(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function ie(e, t) {
        return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      oe = function oe() {
        T();
      },
      ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]) {
            ;
          }
          e.length = n - 1;
        }
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }
        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function le(e) {
      return e[S] = !0, e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }
    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }
          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }
          return r;
        }
        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
          r = 0,
          i = e.parentNode,
          o = t.parentNode,
          a = [e],
          s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;
        while (n = n.parentNode) {
          a.unshift(n);
        }
        n = t;
        while (n = n.parentNode) {
          s.unshift(n);
        }
        while (a[r] === s[r]) {
          r++;
        }
        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }
        while (r--) {
          e.splice(n[r], 1);
        }
      }
      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }
      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
            m = "last" !== h.slice(-4),
            x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l = y !== m ? "nextSibling" : "previousSibling",
              c = e.parentNode,
              f = x && e.nodeName.toLowerCase(),
              p = !n && !x,
              d = !1;
            if (c) {
              if (y) {
                while (l) {
                  a = e;
                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }
                  u = l = "only" === h && !u && "nextSibling";
                }
                return !0;
              }
              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }
              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }
          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }
          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }
          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }
    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o,
          a = [k, p];
        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }
        return !1;
      };
    }
    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }
        return !0;
      } : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
          o,
          a,
          s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
              se(e, t[r], n);
            }
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }
              y(null, p = [], i, r);
            }
            o = p.length;
            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }
    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i;
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }
            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }
          c.push(t);
        }
      }
      return we(c);
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }
        if (!n) break;
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = A[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }
        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = k += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);
              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);
                  break;
                }
              }
              i && (k = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) {
              s(c, f, t, n);
            }
            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }
            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }
          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }
      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function h(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) {
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      }
      return r;
    },
    T = function T(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }
  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }
      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
    H = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }
    return e;
  }
  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function c() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) {
            !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
          }
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function add() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            S.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function remove() {
          return S.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = S.inArray(t, s, n))) {
              s.splice(n, 1), n <= l && l--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function empty() {
          return s && (s = []), this;
        },
        disable: function disable() {
          return a = u = [], s = t = "", this;
        },
        disabled: function disabled() {
          return !s;
        },
        lock: function lock() {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function locked() {
          return !!a;
        },
        fireWith: function fireWith(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function fire() {
          return f.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!o;
        }
      };
    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function state() {
            return i;
          },
          always: function always() {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return a.then(null, e);
          },
          pipe: function pipe() {
            var i = arguments;
            return S.Deferred(function (r) {
              S.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function then(t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
              };
            }
            return S.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? S.extend(e, a) : a;
          }
        },
        s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = S.Deferred(),
        a = function a(t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) {
        I(i[t], a(t), o.reject);
      }
      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }
  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function $(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n)) for (s in i = !0, n) {
        $(e, t, s, n[s], !0, o, a);
      } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(S(e), n);
      })), t)) for (; s < u; s++) {
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      }
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
          while (n--) {
            delete r[t[n]];
          }
        }
        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }
          Y.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";
      var n = S.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = S._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
        r = 1,
        i = S.Deferred(),
        o = this,
        a = this.length,
        s = function s() {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }
      return s(), i.promise(t);
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function ie(e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = {
      composed: !0
    };
  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });
  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return S.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }
      c *= 2, S.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }
    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }
    return e;
  }
  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
        while (c--) {
          a = a.lastChild;
        }
        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }
    f.textContent = "", d = 0;
    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;
        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ee(e, s, n, r, t[s], o);
      }
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }
  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
          n,
          r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;
        while (l--) {
          d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--) {
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }
          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Se(this, e, Ce), !1;
      },
      trigger: function trigger() {
        return Se(this, e), !0;
      },
      _default: function _default() {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }
  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }
      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l));
      }
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }
    return e;
  }
  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Le(o[r], a[r]);
      } else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }
      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }
      return this.pushStack(n);
    };
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function Re(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e);
    },
    Me = function Me(e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) {
        o[i] = e.style[i], e.style[i] = t[i];
      }
      for (i in r = n.call(e), t) {
        e.style[i] = o[i];
      }
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Fe(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Be.length;
      while (n--) {
        if ((e = Be[n] + t) in $e) return e;
      }
    }(e) || e);
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ge = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }
  function Je(e, t, n) {
    var r = Re(e),
      i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
          i = Re(e),
          o = !y.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
          s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }
        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }
          return o;
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
        n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }
  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }
  function st(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function u() {
        if (a) return !1;
        for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
          l.tweens[r].run(n);
        }
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function createTween(e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function stop(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) {
            l.tweens[t].run(1);
          }
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }
    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        v = Y.get(e, "fxshow");
      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }
          d[r] = v && v[r] || S.style(e, r);
        }
      }
      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
        o = S.speed(e, n, r),
        a = function a() {
          var e = lt(this, S.extend({}, t), o);
          (i || Y.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = S.timers,
          r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && it.test(t) && a(r[t]);
        }
        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }
        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = Y.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = S.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }
        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }
        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];
    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
      t = 0,
      n = S.timers;
    for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }
    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
        r = 0,
        i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ct = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;
    ft[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }
  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;
          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }
          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;
          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }
          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
        a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = S(this), r = vt(i);
          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      }
      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }
          return s;
        },
        set: function set(e, t) {
          var n,
            r,
            i = e.options,
            o = S.makeArray(t),
            a = i.length;
          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function xt(e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };
    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
    wt = {
      guid: Date.now()
    },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      At(n + "[" + t + "]", e[t], r, i);
    }
  }
  S.param = function (e, t) {
    var n,
      r = [],
      i = function i(e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      At(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }
    return r && S.extend(!0, e, r), e;
  }
  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = S.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
        x = S.Deferred(),
        b = S.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = qt.exec(p)) {
                  n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                }
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return h ? p : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) {
              w[t] = [w[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }
          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();
          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) {
          e = e.firstElementChild;
        }
        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
      0: 200,
      1223: 204
    },
    $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var _o, a;
    if (y.cors || $t && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }
        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = S.css(e, "position"),
        c = S(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
          t,
          n,
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }
          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }
        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return S;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Vt = C.jQuery,
    Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./resources/front/js/jquery.min.js");
/******/ 	__webpack_require__("./resources/front/js/bootstrap.js");
/******/ 	__webpack_require__("./resources/front/js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/front/js/imask.js");
/******/ 	
/******/ })()
;