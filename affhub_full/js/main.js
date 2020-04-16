(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var noScroll = createCommonjsModule(function (module) {
	  (function (e) {

	    function t() {
	      if (void 0 !== l) return l;
	      var e = document.documentElement,
	          t = document.createElement("div");
	      return t.setAttribute("style", "width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"), e.appendChild(t), l = t.offsetWidth - t.clientWidth, e.removeChild(t), l;
	    }

	    function o() {
	      return document.documentElement.scrollHeight > window.innerHeight;
	    }

	    function n(e) {
	      if ("undefined" != typeof document && !c) {
	        var n = document.documentElement;
	        u = window.pageYOffset, o() ? n.style.width = "calc(100% - " + t() + "px)" : n.style.width = "100%", n.style.position = "fixed", n.style.top = -u + "px", n.style.overflow = "hidden", c = !0;
	      }
	    }

	    function i() {
	      if ("undefined" != typeof document && c) {
	        var e = document.documentElement;
	        e.style.width = "", e.style.position = "", e.style.top = "", e.style.overflow = "", window.scroll(0, u), c = !1;
	      }
	    }

	    function d() {
	      c ? i() : n();
	    }

	    var l,
	        u,
	        c = !1,
	        f = {
	      on: n,
	      off: i,
	      toggle: d
	    };
	     void 0 !== module.exports ? module.exports = f : e.noScroll = f;
	  })(window);
	});

	var Menu = function () {

	  var links = $('.js-scroll');
	  var burgerMenu = $('.js-burger');
	  var navMenuMobile = $('#js-mobile-menu');
	  var blockForHide = $('.js-hide-content');
	  return {
	    scrollToTarget: function scrollToTarget() {
	      links.click(function (e) {
	        e.preventDefault();

	        var _this = $(this);

	        var href = _this.attr("href");

	        if (href.length <= 1) return;
	        var target = $(href);
	        if (!target.length) return;
	        var top = target.offset().top;
	        burgerMenu.removeClass('active');
	        navMenuMobile.removeClass('active');
	        blockForHide.removeClass('hide');
	        noScroll.off();
	        $("html, body").animate({
	          scrollTop: top
	        }, 800);
	      });
	    },
	    showMobileMenu: function showMobileMenu() {
	      burgerMenu.click(function (e) {
	        e.preventDefault();

	        var _this = $(this);

	        _this.toggleClass('active');

	        navMenuMobile.toggleClass('active');
	        blockForHide.toggleClass('hide');
	        noScroll.toggle();
	      });
	    },
	    init: function init() {
	      Menu.scrollToTarget();
	      Menu.showMobileMenu();
	    }
	  };
	}();

	var Sliders = function () {

	  var reviewsSlider = $('.js-reviews-slider');
	  return {
	    initReviewsSlider: function initReviewsSlider() {
	      reviewsSlider.slick({
	        dots: true,
	        infinite: false,
	        speed: 500,
	        variableWidth: true,
	        cssEase: "linear",
	        swipeToSlide: true,
	        arrows: true,
	        responsive: [{
	          breakpoint: 1025,
	          settings: {
	            variableWidth: false,
	            slidesToShow: 2,
	            slidesToScroll: 1,
	            adaptiveHeight: true
	          }
	        }, {
	          breakpoint: 901,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            adaptiveHeight: true,
	            variableWidth: false
	          }
	        }]
	      });
	    },
	    init: function init() {
	      Sliders.initReviewsSlider();
	    }
	  };
	}();

	var Submit = function () {

	  var errorMessages = {
	    name: {
	      regExp: /([A-Za-zА-ЯЄІЇа-яєії])+$/,
	      empty: "Имя обязательно",
	      notValid: "Некорректное имя"
	    },
	    phone: {
	      regExp: /[0-9+()-\s]{5,}/,
	      empty: "Номер телефона или телеграм логин обязателен",
	      notValid: "Некорректный номер телефона",
	      group: 1
	    },
	    telegram: {
	      regExp: /\@?[\d\w]{5,}/,
	      empty: "Номер телефона или телеграм логин обязателен",
	      notValid: "Некорректный telegram",
	      group: 1
	    }
	  };
	  var form = $('#registration_form');
	  var thanksForm = $('#thanks-form-message');
	  var inputsForm = $('.js-input');
	  return {
	    labelFormActive: function labelFormActive() {
	      inputsForm.keyup(function () {
	        var _this = $(this);

	        _this.val() ? _this.addClass("active") : _this.removeClass("active");
	      });
	    },
	    submitHandler: function submitHandler() {
	      form.submit(function (e) {
	        e.preventDefault();
	        $(".form_error").remove();
	        var errorFields = Submit.validateForm(form);

	        if (errorFields.length) {
	          Submit.showErrorFields(errorFields);
	        } else {
	          var ajaxData = {};
	          var serializeData = form.serialize();
	          var dataArr = serializeData.split("&");

	          for (var i = 0; i < dataArr.length; i++) {
	            var item = dataArr[i].split("=");
	            var name = item[0];
	            var value = item[1];
	            ajaxData[name] = value;
	          }

	          form.hide();
	          thanksForm.show();
	        }
	      });
	    },
	    showErrorFields: function showErrorFields(errorFields) {
	      for (var i = 0; i < errorFields.length; i++) {
	        var _errorFields$i = errorFields[i],
	            name = _errorFields$i.name,
	            msg = _errorFields$i.msg;
	        var field = $("[name=".concat(name, "]"));
	        field.parents(".input").append("<div class=\"form_error\"> ".concat(msg, "</div >"));
	      }
	    },
	    validateInput: function validateInput(input) {
	      if (!input.length) {
	        return false;
	      }

	      var error = "";
	      var value = input.val();
	      var name = input.attr("name");

	      if (!errorMessages[name]) {
	        return false;
	      }

	      var _errorMessages$name = errorMessages[name],
	          regExp = _errorMessages$name.regExp,
	          empty = _errorMessages$name.empty,
	          notValid = _errorMessages$name.notValid;

	      if (value.length < 1) {
	        error = empty;
	      } else {
	        var isValid = regExp.test(value);

	        if (!isValid) {
	          error = notValid;
	        }
	      }

	      return error;
	    },
	    validateForm: function validateForm(form) {
	      var inputs = form.find(".js-input");
	      var errors = [];
	      var validGroups = [];

	      for (var i = 0; i < inputs.length; i++) {
	        var input = $(inputs[i]);
	        var name = input.attr("name");
	        var group = "";

	        if (errorMessages[name]) {
	          group = errorMessages[name].group;
	        }

	        var error = Submit.validateInput(input);

	        if (error) {
	          if (group) {
	            errors.push({
	              name: name,
	              msg: error,
	              group: group
	            });
	          } else {
	            errors.push({
	              name: name,
	              msg: error
	            });
	          }
	        } else {
	          if (group && validGroups.indexOf(group) === -1) {
	            validGroups.push(group);
	          }
	        }
	      }

	      var filteredErrors = errors.filter(function (error) {
	        var group = error.group;

	        if (!group) {
	          return error;
	        } else {
	          if (validGroups.indexOf(group) !== -1) {
	            return false;
	          } else {
	            return error;
	          }
	        }
	      });
	      return filteredErrors;
	    },
	    showRepeatForm: function showRepeatForm() {
	      $('#repeat-form').click(function (e) {
	        e.preventDefault();
	        inputsForm.val('');
	        inputsForm.removeClass('active');
	        thanksForm.hide();
	        form.show();
	      });
	    },
	    init: function init() {
	      Submit.labelFormActive();
	      Submit.submitHandler();
	      Submit.showRepeatForm();
	    }
	  };
	}();

	var parallax = createCommonjsModule(function (module, exports) {
	  !function (t) {
	    module.exports = t();
	  }(function () {
	    return function t(e, i, n) {
	      function o(r, a) {
	        if (!i[r]) {
	          if (!e[r]) {
	            var l = "function" == typeof commonjsRequire && commonjsRequire;
	            if (!a && l) return l(r, !0);
	            if (s) return s(r, !0);
	            var h = new Error("Cannot find module '" + r + "'");
	            throw h.code = "MODULE_NOT_FOUND", h;
	          }

	          var u = i[r] = {
	            exports: {}
	          };
	          e[r][0].call(u.exports, function (t) {
	            var i = e[r][1][t];
	            return o(i || t);
	          }, u, u.exports, t, e, i, n);
	        }

	        return i[r].exports;
	      }

	      for (var s = "function" == typeof commonjsRequire && commonjsRequire, r = 0; r < n.length; r++) {
	        o(n[r]);
	      }

	      return o;
	    }({
	      1: [function (t, e, i) {

	        function n(t) {
	          if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
	          return Object(t);
	        }

	        var o = Object.getOwnPropertySymbols,
	            s = Object.prototype.hasOwnProperty,
	            r = Object.prototype.propertyIsEnumerable;
	        e.exports = function () {
	          try {
	            if (!Object.assign) return !1;
	            var t = new String("abc");
	            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;

	            for (var e = {}, i = 0; i < 10; i++) {
	              e["_" + String.fromCharCode(i)] = i;
	            }

	            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
	              return e[t];
	            }).join("")) return !1;
	            var n = {};
	            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
	              n[t] = t;
	            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
	          } catch (t) {
	            return !1;
	          }
	        }() ? Object.assign : function (t, e) {
	          for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
	            i = Object(arguments[h]);

	            for (var u in i) {
	              s.call(i, u) && (l[u] = i[u]);
	            }

	            if (o) {
	              a = o(i);

	              for (var c = 0; c < a.length; c++) {
	                r.call(i, a[c]) && (l[a[c]] = i[a[c]]);
	              }
	            }
	          }

	          return l;
	        };
	      }, {}],
	      2: [function (t, e, i) {
	        (function (t) {
	          (function () {
	            var i, n, o, s, r, a;
	            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
	              return performance.now();
	            } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
	              return (i() - r) / 1e6;
	            }, n = t.hrtime, s = (i = function i() {
	              var t;
	              return 1e9 * (t = n())[0] + t[1];
	            })(), a = 1e9 * t.uptime(), r = s - a) : Date.now ? (e.exports = function () {
	              return Date.now() - o;
	            }, o = Date.now()) : (e.exports = function () {
	              return new Date().getTime() - o;
	            }, o = new Date().getTime());
	          }).call(this);
	        }).call(this, t("_process"));
	      }, {
	        _process: 3
	      }],
	      3: [function (t, e, i) {
	        function n() {
	          throw new Error("setTimeout has not been defined");
	        }

	        function o() {
	          throw new Error("clearTimeout has not been defined");
	        }

	        function s(t) {
	          if (c === setTimeout) return setTimeout(t, 0);
	          if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);

	          try {
	            return c(t, 0);
	          } catch (e) {
	            try {
	              return c.call(null, t, 0);
	            } catch (e) {
	              return c.call(this, t, 0);
	            }
	          }
	        }

	        function r(t) {
	          if (d === clearTimeout) return clearTimeout(t);
	          if ((d === o || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);

	          try {
	            return d(t);
	          } catch (e) {
	            try {
	              return d.call(null, t);
	            } catch (e) {
	              return d.call(this, t);
	            }
	          }
	        }

	        function a() {
	          v && p && (v = !1, p.length ? f = p.concat(f) : y = -1, f.length && l());
	        }

	        function l() {
	          if (!v) {
	            var t = s(a);
	            v = !0;

	            for (var e = f.length; e;) {
	              for (p = f, f = []; ++y < e;) {
	                p && p[y].run();
	              }

	              y = -1, e = f.length;
	            }

	            p = null, v = !1, r(t);
	          }
	        }

	        function h(t, e) {
	          this.fun = t, this.array = e;
	        }

	        function u() {}

	        var c,
	            d,
	            m = e.exports = {};
	        !function () {
	          try {
	            c = "function" == typeof setTimeout ? setTimeout : n;
	          } catch (t) {
	            c = n;
	          }

	          try {
	            d = "function" == typeof clearTimeout ? clearTimeout : o;
	          } catch (t) {
	            d = o;
	          }
	        }();
	        var p,
	            f = [],
	            v = !1,
	            y = -1;
	        m.nextTick = function (t) {
	          var e = new Array(arguments.length - 1);
	          if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) {
	            e[i - 1] = arguments[i];
	          }
	          f.push(new h(t, e)), 1 !== f.length || v || s(l);
	        }, h.prototype.run = function () {
	          this.fun.apply(null, this.array);
	        }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = u, m.addListener = u, m.once = u, m.off = u, m.removeListener = u, m.removeAllListeners = u, m.emit = u, m.prependListener = u, m.prependOnceListener = u, m.listeners = function (t) {
	          return [];
	        }, m.binding = function (t) {
	          throw new Error("process.binding is not supported");
	        }, m.cwd = function () {
	          return "/";
	        }, m.chdir = function (t) {
	          throw new Error("process.chdir is not supported");
	        }, m.umask = function () {
	          return 0;
	        };
	      }, {}],
	      4: [function (t, e, i) {
	        (function (i) {
	          for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++) {
	            a = o[s[h] + "Request" + r], l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
	          }

	          if (!a || !l) {
	            var u = 0,
	                c = 0,
	                d = [];
	            a = function a(t) {
	              if (0 === d.length) {
	                var e = n(),
	                    i = Math.max(0, 1e3 / 60 - (e - u));
	                u = i + e, setTimeout(function () {
	                  var t = d.slice(0);
	                  d.length = 0;

	                  for (var e = 0; e < t.length; e++) {
	                    if (!t[e].cancelled) try {
	                      t[e].callback(u);
	                    } catch (t) {
	                      setTimeout(function () {
	                        throw t;
	                      }, 0);
	                    }
	                  }
	                }, Math.round(i));
	              }

	              return d.push({
	                handle: ++c,
	                callback: t,
	                cancelled: !1
	              }), c;
	            }, l = function l(t) {
	              for (var e = 0; e < d.length; e++) {
	                d[e].handle === t && (d[e].cancelled = !0);
	              }
	            };
	          }

	          e.exports = function (t) {
	            return a.call(o, t);
	          }, e.exports.cancel = function () {
	            l.apply(o, arguments);
	          }, e.exports.polyfill = function () {
	            o.requestAnimationFrame = a, o.cancelAnimationFrame = l;
	          };
	        }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
	      }, {
	        "performance-now": 2
	      }],
	      5: [function (t, e, i) {

	        function n(t, e) {
	          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	        }

	        var o = function () {
	          function t(t, e) {
	            for (var i = 0; i < e.length; i++) {
	              var n = e[i];
	              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
	            }
	          }

	          return function (e, i, n) {
	            return i && t(e.prototype, i), n && t(e, n), e;
	          };
	        }(),
	            s = t("raf"),
	            r = t("object-assign"),
	            a = {
	          propertyCache: {},
	          vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
	          clamp: function clamp(t, e, i) {
	            return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t;
	          },
	          data: function data(t, e) {
	            return a.deserialize(t.getAttribute("data-" + e));
	          },
	          deserialize: function deserialize(t) {
	            return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t);
	          },
	          camelCase: function camelCase(t) {
	            return t.replace(/-+(.)?/g, function (t, e) {
	              return e ? e.toUpperCase() : "";
	            });
	          },
	          accelerate: function accelerate(t) {
	            a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), a.css(t, "transform-style", "preserve-3d"), a.css(t, "backface-visibility", "hidden");
	          },
	          transformSupport: function transformSupport(t) {
	            for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++) {
	              if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform", r = a.vendors[l][1] + "Transform") : (s = "transform", r = "transform"), void 0 !== e.style[r]) {
	                i = !0;
	                break;
	              }
	            }

	            switch (t) {
	              case "2D":
	                o = i;
	                break;

	              case "3D":
	                if (i) {
	                  var u = document.body || document.createElement("body"),
	                      c = document.documentElement,
	                      d = c.style.overflow,
	                      m = !1;
	                  document.body || (m = !0, c.style.overflow = "hidden", c.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[r] = "translate3d(1px,1px,1px)", o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n, c.style.overflow = d, u.removeChild(e), m && (u.removeAttribute("style"), u.parentNode.removeChild(u));
	                }

	            }

	            return o;
	          },
	          css: function css(t, e, i) {
	            var n = a.propertyCache[e];
	            if (!n) for (var o = 0, s = a.vendors.length; o < s; o++) {
	              if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e, void 0 !== t.style[n]) {
	                a.propertyCache[e] = n;
	                break;
	              }
	            }
	            t.style[n] = i;
	          }
	        },
	            l = {
	          relativeInput: !1,
	          clipRelativeInput: !1,
	          inputElement: null,
	          hoverOnly: !1,
	          calibrationThreshold: 100,
	          calibrationDelay: 500,
	          supportDelay: 500,
	          calibrateX: !1,
	          calibrateY: !0,
	          invertX: !0,
	          invertY: !0,
	          limitX: !1,
	          limitY: !1,
	          scalarX: 10,
	          scalarY: 10,
	          frictionX: .1,
	          frictionY: .1,
	          originX: .5,
	          originY: .5,
	          pointerEvents: !1,
	          precision: 1,
	          onReady: null,
	          selector: null
	        },
	            h = function () {
	          function t(e, i) {
	            n(this, t), this.element = e;
	            var o = {
	              calibrateX: a.data(this.element, "calibrate-x"),
	              calibrateY: a.data(this.element, "calibrate-y"),
	              invertX: a.data(this.element, "invert-x"),
	              invertY: a.data(this.element, "invert-y"),
	              limitX: a.data(this.element, "limit-x"),
	              limitY: a.data(this.element, "limit-y"),
	              scalarX: a.data(this.element, "scalar-x"),
	              scalarY: a.data(this.element, "scalar-y"),
	              frictionX: a.data(this.element, "friction-x"),
	              frictionY: a.data(this.element, "friction-y"),
	              originX: a.data(this.element, "origin-x"),
	              originY: a.data(this.element, "origin-y"),
	              pointerEvents: a.data(this.element, "pointer-events"),
	              precision: a.data(this.element, "precision"),
	              relativeInput: a.data(this.element, "relative-input"),
	              clipRelativeInput: a.data(this.element, "clip-relative-input"),
	              hoverOnly: a.data(this.element, "hover-only"),
	              inputElement: document.querySelector(a.data(this.element, "input-element")),
	              selector: a.data(this.element, "selector")
	            };

	            for (var s in o) {
	              null === o[s] && delete o[s];
	            }

	            r(this, l, o, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise();
	          }

	          return o(t, [{
	            key: "initialise",
	            value: function value() {
	              void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"), this.transform3DSupport = a.transformSupport("3D")), this.transform3DSupport && a.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay);
	            }
	          }, {
	            key: "doReadyCallback",
	            value: function value() {
	              this.onReady && this.onReady();
	            }
	          }, {
	            key: "updateLayers",
	            value: function value() {
	              this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];

	              for (var t = 0; t < this.layers.length; t++) {
	                var e = this.layers[t];
	                this.transform3DSupport && a.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
	                var i = a.data(e, "depth") || 0;
	                this.depthsX.push(a.data(e, "depth-x") || i), this.depthsY.push(a.data(e, "depth-y") || i);
	              }
	            }
	          }, {
	            key: "updateDimensions",
	            value: function value() {
	              this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY);
	            }
	          }, {
	            key: "updateBounds",
	            value: function value() {
	              this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY);
	            }
	          }, {
	            key: "queueCalibration",
	            value: function value(t) {
	              clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t);
	            }
	          }, {
	            key: "enable",
	            value: function value() {
	              this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = s(this.onAnimationFrame));
	            }
	          }, {
	            key: "disable",
	            value: function value() {
	              this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), s.cancel(this.raf));
	            }
	          }, {
	            key: "calibrate",
	            value: function value(t, e) {
	              this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e;
	            }
	          }, {
	            key: "invert",
	            value: function value(t, e) {
	              this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e;
	            }
	          }, {
	            key: "friction",
	            value: function value(t, e) {
	              this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e;
	            }
	          }, {
	            key: "scalar",
	            value: function value(t, e) {
	              this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e;
	            }
	          }, {
	            key: "limit",
	            value: function value(t, e) {
	              this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e;
	            }
	          }, {
	            key: "origin",
	            value: function value(t, e) {
	              this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e;
	            }
	          }, {
	            key: "setInputElement",
	            value: function value(t) {
	              this.inputElement = t, this.updateDimensions();
	            }
	          }, {
	            key: "setPosition",
	            value: function value(t, e, i) {
	              e = e.toFixed(this.precision) + "px", i = i.toFixed(this.precision) + "px", this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i);
	            }
	          }, {
	            key: "onOrientationTimer",
	            value: function value() {
	              this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback();
	            }
	          }, {
	            key: "onMotionTimer",
	            value: function value() {
	              this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback();
	            }
	          }, {
	            key: "onCalibrationTimer",
	            value: function value() {
	              this.calibrationFlag = !0;
	            }
	          }, {
	            key: "onWindowResize",
	            value: function value() {
	              this.updateDimensions();
	            }
	          }, {
	            key: "onAnimationFrame",
	            value: function value() {
	              this.updateBounds();
	              var t = this.inputX - this.calibrationX,
	                  e = this.inputY - this.calibrationY;
	              (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;

	              for (var i = 0; i < this.layers.length; i++) {
	                var n = this.layers[i],
	                    o = this.depthsX[i],
	                    r = this.depthsY[i],
	                    l = this.velocityX * (o * (this.invertX ? -1 : 1)),
	                    h = this.velocityY * (r * (this.invertY ? -1 : 1));
	                this.setPosition(n, l, h);
	              }

	              this.raf = s(this.onAnimationFrame);
	            }
	          }, {
	            key: "rotate",
	            value: function value(t, e) {
	              var i = (t || 0) / 30,
	                  n = (e || 0) / 30,
	                  o = this.windowHeight > this.windowWidth;
	              this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = i, this.calibrationY = n), this.inputX = i, this.inputY = n;
	            }
	          }, {
	            key: "onDeviceOrientation",
	            value: function value(t) {
	              var e = t.beta,
	                  i = t.gamma;
	              null !== e && null !== i && (this.orientationStatus = 1, this.rotate(e, i));
	            }
	          }, {
	            key: "onDeviceMotion",
	            value: function value(t) {
	              var e = t.rotationRate.beta,
	                  i = t.rotationRate.gamma;
	              null !== e && null !== i && (this.motionStatus = 1, this.rotate(e, i));
	            }
	          }, {
	            key: "onMouseMove",
	            value: function value(t) {
	              var e = t.clientX,
	                  i = t.clientY;
	              if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void (this.inputY = 0);
	              this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), i = Math.max(i, this.elementPositionY), i = Math.min(i, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (i - this.windowCenterY) / this.windowRadiusY);
	            }
	          }, {
	            key: "destroy",
	            value: function value() {
	              this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");

	              for (var t = 0; t < this.layers.length; t++) {
	                this.layers[t].removeAttribute("style");
	              }

	              delete this.element, delete this.layers;
	            }
	          }, {
	            key: "version",
	            value: function value() {
	              return "3.1.0";
	            }
	          }]), t;
	        }();

	        e.exports = h;
	      }, {
	        "object-assign": 1,
	        raf: 4
	      }]
	    }, {}, [5])(5);
	  });
	});

	var Gallery = function () {

	  var reportItem = $('.report');
	  var imageGallery = $(".wrap-img");
	  var btnShowInfo = $('.js-show-info');
	  var btnMap = $('.js-show-gallery');

	  function loadLazyImages(imgs) {
	    for (var i = 0; i < imgs.length; i++) {
	      var image = $(imgs[i]);
	      var realSrc = image.data('lazy-src');
	      image.attr("src", realSrc);
	    }
	  }

	  return {
	    showListPhotos: function showListPhotos() {
	      var lazyImgs = $("[data-lazy-src]");
	      loadLazyImages(lazyImgs);
	    },
	    showGallery: function showGallery() {
	      btnMap.click(function (e) {
	        e.preventDefault();

	        var _this = $(this);

	        var href = _this.attr("href");

	        if (href.length <= 1) return;
	        var target = $(href);
	        if (!target.length) return;
	        var top = target.offset().top;
	        reportItem.removeClass('active');
	        Gallery.showListPhotos();
	        target.addClass('active');
	        target.addClass('show-slider');
	        Gallery.destroySlick();
	        Gallery.initSliderGallery();
	        $("html, body").animate({
	          scrollTop: top
	        }, 800);
	      });
	    },
	    animateGallery: function animateGallery() {
	      btnShowInfo.click(function (e) {
	        e.preventDefault();

	        var _this = $(this);

	        var parent = _this.parents('.report');

	        Gallery.showListPhotos();
	        reportItem.removeClass('active');
	        parent.removeClass("show-slider");
	        parent.addClass("animate");
	        parent.addClass('active');
	        Gallery.destroySlick();
	        Gallery.initSliderGallery();
	      });
	      $('.report__close').click(function (e) {
	        e.preventDefault();

	        var _this = $(this);

	        var parent = _this.parents('.report');

	        parent.removeClass('active');
	        parent.removeClass("show-slider");
	        parent.addClass("animate");
	      });
	      imageGallery.click(function () {
	        var _this = $(this);

	        var slidePhoto = _this.find("img").data("scr");

	        var parent = _this.parents('.report');

	        parent.removeClass("animate");
	        parent.addClass('show-slider');
	        setTimeout(function () {
	          $(".slider").fadeIn(500);
	          $(".slider-for").slick("slickGoTo", slidePhoto);
	        }, 0);
	      });
	    },
	    initSliderGallery: function initSliderGallery() {
	      $(".slider-for").slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: true,
	        fade: true,
	        asNavFor: ".slider-nav"
	      });
	      $(".slider-nav").slick({
	        slidesToShow: 13,
	        slidesToScroll: 1,
	        asNavFor: ".slider-for",
	        dots: false,
	        arrows: false,
	        centerMode: true,
	        focusOnSelect: true,
	        responsive: [{
	          breakpoint: 1681,
	          settings: {
	            slidesToShow: 10
	          }
	        }, {
	          breakpoint: 1281,
	          settings: {
	            slidesToShow: 8
	          }
	        }, {
	          breakpoint: 1025,
	          settings: {
	            slidesToShow: 7
	          }
	        }, {
	          breakpoint: 901,
	          settings: {
	            slidesToShow: 6
	          }
	        }, {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 5
	          }
	        }, {
	          breakpoint: 641,
	          settings: {
	            slidesToShow: 4
	          }
	        }, {
	          breakpoint: 481,
	          settings: {
	            slidesToShow: 3
	          }
	        }]
	      });
	    },
	    destroySlick: function destroySlick() {
	      $(".slider-for").slick("unslick");
	      $(".slider-nav").slick("unslick");
	    },
	    initParallax: function initParallax(id) {
	      var scene = document.getElementById(id);
	      new parallax(scene);
	    },
	    init: function init() {
	      Gallery.animateGallery();

	      if ($(window).width() < 900) {
	        $(".slider").fadeIn(500);
	      } else {
	        $(".slider").fadeOut(500);
	      }

	      Gallery.initSliderGallery();
	      Gallery.showGallery();
	      if ($('#scene1')) return;
	      Gallery.initParallax('scene1');
	      if ($('#scene2')) return;
	      Gallery.initParallax('scene2');
	      if ($('#scene3')) return;
	      Gallery.initParallax('scene3');
	      if ($('#scene4')) return;
	      Gallery.initParallax('scene4');
	      if ($('#scene5')) return;
	      Gallery.initParallax('scene5');
	      if ($('#scene6')) return;
	      Gallery.initParallax('scene6');
	      if ($('#scene7')) return;
	      Gallery.initParallax('scene7');
	    }
	  };
	}();

	var Timer = function () {

	  var daysTo = $('.days').find('.timer__item');
	  var hoursTo = $('.hours').find('.timer__item');
	  var minutesTo = $('.minutes').find('.timer__item');
	  return {
	    timerMeetup: function timerMeetup() {
	      function timer() {
	        var today = new Date();
	        var countDownDate = new Date(2020, 4, 1, 18, 0);
	        var distance = countDownDate - today;
	        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
	        days = days < 10 ? ('0' + days).slice(-2) : days;
	        hours = hours < 10 ? ('0' + hours).slice(-2) : hours;
	        minutes = minutes < 10 ? ('0' + minutes).slice(-2) : minutes;
	        Timer.timeToHtml(daysTo, days);
	        Timer.timeToHtml(hoursTo, hours);
	        Timer.timeToHtml(minutesTo, minutes);
	      }

	      setInterval(timer, 1000);
	    },
	    timeToHtml: function timeToHtml(container, time) {
	      for (var i = 0; i < container.length; i++) {
	        var element = container[i];
	        element.textContent = time.toString()[i];
	      }
	    },
	    init: function init() {
	      Timer.timerMeetup();
	    }
	  };
	}();

	$(document).ready(function () {
	  Menu.init();
	  Sliders.init();
	  Submit.init();
	  Gallery.init();
	  Timer.init();
	});

	document.body.onload = function () {
	  setTimeout(function () {
	    var preloader = document.getElementById('preloader');

	    if (!preloader.classList.contains('cansel')) {
	      preloader.classList.add('cansel');
	    }
	  }, 500);
	};

}());
