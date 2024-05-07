!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
        ? (exports.logojs = t())
        : (e.logojs = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = "/"),
      r((r.s = 5))
    );
  })([
    function (e, t, r) {
      "use strict";
      e.exports = r(3);
    },
    function (e, t, r) {
      "use strict";
      e.exports = r(4);
    },
    function (e, t, r) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      function c(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, r = 0; r < 10; r++)
            t["_" + String.fromCharCode(r)] = r;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var n = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              n[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, n)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var r, i, u = c(e), l = 1; l < arguments.length; l++) {
              for (var f in (r = Object(arguments[l])))
                o.call(r, f) && (u[f] = r[f]);
              if (n) {
                i = n(r);
                for (var s = 0; s < i.length; s++)
                  a.call(r, i[s]) && (u[i[s]] = r[i[s]]);
              }
            }
            return u;
          };
    },
    function (e, t, r) {
      "use strict";
      /** @license React v16.14.0
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2),
        o = "function" == typeof Symbol && Symbol.for,
        a = o ? Symbol.for("react.element") : 60103,
        c = o ? Symbol.for("react.portal") : 60106,
        i = o ? Symbol.for("react.fragment") : 60107,
        u = o ? Symbol.for("react.strict_mode") : 60108,
        l = o ? Symbol.for("react.profiler") : 60114,
        f = o ? Symbol.for("react.provider") : 60109,
        s = o ? Symbol.for("react.context") : 60110,
        p = o ? Symbol.for("react.forward_ref") : 60112,
        h = o ? Symbol.for("react.suspense") : 60113,
        d = o ? Symbol.for("react.memo") : 60115,
        m = o ? Symbol.for("react.lazy") : 60116,
        y = "function" == typeof Symbol && Symbol.iterator;
      function g(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            r = 1;
          r < arguments.length;
          r++
        )
          t += "&args[]=" + encodeURIComponent(arguments[r]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        b = {};
      function L(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = r || v);
      }
      function O() {}
      function x(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = r || v);
      }
      (L.prototype.isReactComponent = {}),
        (L.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(g(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (L.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (O.prototype = L.prototype);
      var w = (x.prototype = new O());
      (w.constructor = x), n(w, L.prototype), (w.isPureReactComponent = !0);
      var E = { current: null },
        C = Object.prototype.hasOwnProperty,
        j = { key: !0, ref: !0, __self: !0, __source: !0 };
      function S(e, t, r) {
        var n,
          o = {},
          c = null,
          i = null;
        if (null != t)
          for (n in (void 0 !== t.ref && (i = t.ref),
          void 0 !== t.key && (c = "" + t.key),
          t))
            C.call(t, n) && !j.hasOwnProperty(n) && (o[n] = t[n]);
        var u = arguments.length - 2;
        if (1 === u) o.children = r;
        else if (1 < u) {
          for (var l = Array(u), f = 0; f < u; f++) l[f] = arguments[f + 2];
          o.children = l;
        }
        if (e && e.defaultProps)
          for (n in (u = e.defaultProps)) void 0 === o[n] && (o[n] = u[n]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: i,
          props: o,
          _owner: E.current,
        };
      }
      function k(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a;
      }
      var M = /\/+/g,
        P = [];
      function _(e, t, r, n) {
        if (P.length) {
          var o = P.pop();
          return (
            (o.result = e),
            (o.keyPrefix = t),
            (o.func = r),
            (o.context = n),
            (o.count = 0),
            o
          );
        }
        return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
      }
      function A(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > P.length && P.push(e);
      }
      function F(e, t, r) {
        return null == e
          ? 0
          : (function e(t, r, n, o) {
              var i = typeof t;
              ("undefined" !== i && "boolean" !== i) || (t = null);
              var u = !1;
              if (null === t) u = !0;
              else
                switch (i) {
                  case "string":
                  case "number":
                    u = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case a:
                      case c:
                        u = !0;
                    }
                }
              if (u) return n(o, t, "" === r ? "." + N(t, 0) : r), 1;
              if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t)))
                for (var l = 0; l < t.length; l++) {
                  var f = r + N((i = t[l]), l);
                  u += e(i, f, n, o);
                }
              else if (
                (null === t || "object" != typeof t
                  ? (f = null)
                  : (f =
                      "function" == typeof (f = (y && t[y]) || t["@@iterator"])
                        ? f
                        : null),
                "function" == typeof f)
              )
                for (t = f.call(t), l = 0; !(i = t.next()).done; )
                  u += e((i = i.value), (f = r + N(i, l++)), n, o);
              else if ("object" === i)
                throw (
                  ((n = "" + t),
                  Error(
                    g(
                      31,
                      "[object Object]" === n
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : n,
                      ""
                    )
                  ))
                );
              return u;
            })(e, "", t, r);
      }
      function N(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function I(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function R(e, t, r) {
        var n = e.result,
          o = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? D(e, n, r, function (e) {
                return e;
              })
            : null != e &&
              (k(e) &&
                (e = (function (e, t) {
                  return {
                    $$typeof: a,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  e,
                  o +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(M, "$&/") + "/") +
                    r
                )),
              n.push(e));
      }
      function D(e, t, r, n, o) {
        var a = "";
        null != r && (a = ("" + r).replace(M, "$&/") + "/"),
          F(e, R, (t = _(t, a, n, o))),
          A(t);
      }
      var T = { current: null };
      function z() {
        var e = T.current;
        if (null === e) throw Error(g(321));
        return e;
      }
      var $ = {
        ReactCurrentDispatcher: T,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: E,
        IsSomeRendererActing: { current: !1 },
        assign: n,
      };
      (t.Children = {
        map: function (e, t, r) {
          if (null == e) return e;
          var n = [];
          return D(e, n, null, t, r), n;
        },
        forEach: function (e, t, r) {
          if (null == e) return e;
          F(e, I, (t = _(null, null, t, r))), A(t);
        },
        count: function (e) {
          return F(
            e,
            function () {
              return null;
            },
            null
          );
        },
        toArray: function (e) {
          var t = [];
          return (
            D(e, t, null, function (e) {
              return e;
            }),
            t
          );
        },
        only: function (e) {
          if (!k(e)) throw Error(g(143));
          return e;
        },
      }),
        (t.Component = L),
        (t.Fragment = i),
        (t.Profiler = l),
        (t.PureComponent = x),
        (t.StrictMode = u),
        (t.Suspense = h),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
        (t.cloneElement = function (e, t, r) {
          if (null == e) throw Error(g(267, e));
          var o = n({}, e.props),
            c = e.key,
            i = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (u = E.current)),
              void 0 !== t.key && (c = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps;
            for (f in t)
              C.call(t, f) &&
                !j.hasOwnProperty(f) &&
                (o[f] = void 0 === t[f] && void 0 !== l ? l[f] : t[f]);
          }
          var f = arguments.length - 2;
          if (1 === f) o.children = r;
          else if (1 < f) {
            l = Array(f);
            for (var s = 0; s < f; s++) l[s] = arguments[s + 2];
            o.children = l;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: c,
            ref: i,
            props: o,
            _owner: u,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: s,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: f, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = S),
        (t.createFactory = function (e) {
          var t = S.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: p, render: e };
        }),
        (t.isValidElement = k),
        (t.lazy = function (e) {
          return { $$typeof: m, _ctor: e, _status: -1, _result: null };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return z().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return z().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return z().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return z().useImperativeHandle(e, t, r);
        }),
        (t.useLayoutEffect = function (e, t) {
          return z().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return z().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return z().useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return z().useRef(e);
        }),
        (t.useState = function (e) {
          return z().useState(e);
        }),
        (t.version = "16.14.0");
    },
    function (e, t, r) {
      "use strict";
      /** @license React v16.14.0
       * react-dom-server.browser.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2),
        o = r(0);
      function a(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            r = 1;
          r < arguments.length;
          r++
        )
          t += "&args[]=" + encodeURIComponent(arguments[r]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var c = "function" == typeof Symbol && Symbol.for,
        i = c ? Symbol.for("react.portal") : 60106,
        u = c ? Symbol.for("react.fragment") : 60107,
        l = c ? Symbol.for("react.strict_mode") : 60108,
        f = c ? Symbol.for("react.profiler") : 60114,
        s = c ? Symbol.for("react.provider") : 60109,
        p = c ? Symbol.for("react.context") : 60110,
        h = c ? Symbol.for("react.concurrent_mode") : 60111,
        d = c ? Symbol.for("react.forward_ref") : 60112,
        m = c ? Symbol.for("react.suspense") : 60113,
        y = c ? Symbol.for("react.suspense_list") : 60120,
        g = c ? Symbol.for("react.memo") : 60115,
        v = c ? Symbol.for("react.lazy") : 60116,
        b = c ? Symbol.for("react.block") : 60121,
        L = c ? Symbol.for("react.fundamental") : 60117,
        O = c ? Symbol.for("react.scope") : 60119;
      function x(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case u:
            return "Fragment";
          case i:
            return "Portal";
          case f:
            return "Profiler";
          case l:
            return "StrictMode";
          case m:
            return "Suspense";
          case y:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case p:
              return "Context.Consumer";
            case s:
              return "Context.Provider";
            case d:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case g:
              return x(e.type);
            case b:
              return x(e.render);
            case v:
              if ((e = 1 === e._status ? e._result : null)) return x(e);
          }
        return null;
      }
      var w = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      w.hasOwnProperty("ReactCurrentDispatcher") ||
        (w.ReactCurrentDispatcher = { current: null }),
        w.hasOwnProperty("ReactCurrentBatchConfig") ||
          (w.ReactCurrentBatchConfig = { suspense: null });
      var E = {};
      function C(e, t) {
        for (var r = 0 | e._threadCount; r <= t; r++)
          (e[r] = e._currentValue2), (e._threadCount = r + 1);
      }
      for (var j = new Uint16Array(16), S = 0; 15 > S; S++) j[S] = S + 1;
      j[15] = 0;
      var k =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        M = Object.prototype.hasOwnProperty,
        P = {},
        _ = {};
      function A(e) {
        return (
          !!M.call(_, e) ||
          (!M.call(P, e) && (k.test(e) ? (_[e] = !0) : ((P[e] = !0), !1)))
        );
      }
      function F(e, t, r, n, o, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = n),
          (this.attributeNamespace = o),
          (this.mustUseProperty = r),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = a);
      }
      var N = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          N[e] = new F(e, 0, !1, e, null, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          N[t] = new F(t, 1, !1, e[1], null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            N[e] = new F(e, 2, !1, e.toLowerCase(), null, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          N[e] = new F(e, 2, !1, e, null, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            N[e] = new F(e, 3, !1, e.toLowerCase(), null, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          N[e] = new F(e, 3, !0, e, null, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          N[e] = new F(e, 4, !1, e, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          N[e] = new F(e, 6, !1, e, null, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          N[e] = new F(e, 5, !1, e.toLowerCase(), null, !1);
        });
      var I = /[\-:]([a-z])/g;
      function R(e) {
        return e[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(I, R);
          N[t] = new F(t, 1, !1, e, null, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(I, R);
            N[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(I, R);
          N[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          N[e] = new F(e, 1, !1, e.toLowerCase(), null, !1);
        }),
        (N.xlinkHref = new F(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          N[e] = new F(e, 1, !1, e.toLowerCase(), null, !0);
        });
      var D = /["'&<>]/;
      function T(e) {
        if ("boolean" == typeof e || "number" == typeof e) return "" + e;
        e = "" + e;
        var t = D.exec(e);
        if (t) {
          var r,
            n = "",
            o = 0;
          for (r = t.index; r < e.length; r++) {
            switch (e.charCodeAt(r)) {
              case 34:
                t = "&quot;";
                break;
              case 38:
                t = "&amp;";
                break;
              case 39:
                t = "&#x27;";
                break;
              case 60:
                t = "&lt;";
                break;
              case 62:
                t = "&gt;";
                break;
              default:
                continue;
            }
            o !== r && (n += e.substring(o, r)), (o = r + 1), (n += t);
          }
          e = o !== r ? n + e.substring(o, r) : n;
        }
        return e;
      }
      function z(e, t) {
        var r,
          n = N.hasOwnProperty(e) ? N[e] : null;
        return (
          (r = "style" !== e) &&
            (r =
              null !== n
                ? 0 === n.type
                : 2 < e.length &&
                  ("o" === e[0] || "O" === e[0]) &&
                  ("n" === e[1] || "N" === e[1])),
          r ||
          (function (e, t, r, n) {
            if (
              null == t ||
              (function (e, t, r, n) {
                if (null !== r && 0 === r.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !n &&
                      (null !== r
                        ? !r.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, r, n)
            )
              return !0;
            if (n) return !1;
            if (null !== r)
              switch (r.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(e, t, n, !1)
            ? ""
            : null !== n
              ? ((e = n.attributeName),
                3 === (r = n.type) || (4 === r && !0 === t)
                  ? e + '=""'
                  : (n.sanitizeURL && (t = "" + t), e + '="' + T(t) + '"'))
              : A(e)
                ? e + '="' + T(t) + '"'
                : ""
        );
      }
      var $ =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        U = null,
        W = null,
        V = null,
        H = !1,
        q = !1,
        B = null,
        G = 0;
      function Z() {
        if (null === U) throw Error(a(321));
        return U;
      }
      function Y() {
        if (0 < G) throw Error(a(312));
        return { memoizedState: null, queue: null, next: null };
      }
      function Q() {
        return (
          null === V
            ? null === W
              ? ((H = !1), (W = V = Y()))
              : ((H = !0), (V = W))
            : null === V.next
              ? ((H = !1), (V = V.next = Y()))
              : ((H = !0), (V = V.next)),
          V
        );
      }
      function K(e, t, r, n) {
        for (; q; ) (q = !1), (G += 1), (V = null), (r = e(t, n));
        return (W = U = null), (G = 0), (V = B = null), r;
      }
      function X(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function J(e, t, r) {
        if (((U = Z()), (V = Q()), H)) {
          var n = V.queue;
          if (((t = n.dispatch), null !== B && void 0 !== (r = B.get(n)))) {
            B.delete(n), (n = V.memoizedState);
            do {
              (n = e(n, r.action)), (r = r.next);
            } while (null !== r);
            return (V.memoizedState = n), [n, t];
          }
          return [V.memoizedState, t];
        }
        return (
          (e =
            e === X
              ? "function" == typeof t
                ? t()
                : t
              : void 0 !== r
                ? r(t)
                : t),
          (V.memoizedState = e),
          (e = (e = V.queue = { last: null, dispatch: null }).dispatch =
            ee.bind(null, U, e)),
          [V.memoizedState, e]
        );
      }
      function ee(e, t, r) {
        if (!(25 > G)) throw Error(a(301));
        if (e === U)
          if (
            ((q = !0),
            (e = { action: r, next: null }),
            null === B && (B = new Map()),
            void 0 === (r = B.get(t)))
          )
            B.set(t, e);
          else {
            for (t = r; null !== t.next; ) t = t.next;
            t.next = e;
          }
      }
      function te() {}
      var re = 0,
        ne = {
          readContext: function (e) {
            var t = re;
            return C(e, t), e[t];
          },
          useContext: function (e) {
            Z();
            var t = re;
            return C(e, t), e[t];
          },
          useMemo: function (e, t) {
            if (
              ((U = Z()), (t = void 0 === t ? null : t), null !== (V = Q()))
            ) {
              var r = V.memoizedState;
              if (null !== r && null !== t) {
                e: {
                  var n = r[1];
                  if (null === n) n = !1;
                  else {
                    for (var o = 0; o < n.length && o < t.length; o++)
                      if (!$(t[o], n[o])) {
                        n = !1;
                        break e;
                      }
                    n = !0;
                  }
                }
                if (n) return r[0];
              }
            }
            return (e = e()), (V.memoizedState = [e, t]), e;
          },
          useReducer: J,
          useRef: function (e) {
            U = Z();
            var t = (V = Q()).memoizedState;
            return null === t
              ? ((e = { current: e }), (V.memoizedState = e))
              : t;
          },
          useState: function (e) {
            return J(X, e);
          },
          useLayoutEffect: function () {},
          useCallback: function (e) {
            return e;
          },
          useImperativeHandle: te,
          useEffect: te,
          useDebugValue: te,
          useResponder: function (e, t) {
            return { props: t, responder: e };
          },
          useDeferredValue: function (e) {
            return Z(), e;
          },
          useTransition: function () {
            return (
              Z(),
              [
                function (e) {
                  e();
                },
                !1,
              ]
            );
          },
        },
        oe = "http://www.w3.org/1999/xhtml";
      function ae(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      var ce = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
        ie = n({ menuitem: !0 }, ce),
        ue = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        le = ["Webkit", "ms", "Moz", "O"];
      Object.keys(ue).forEach(function (e) {
        le.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ue[t] = ue[e]);
        });
      });
      var fe = /([A-Z])/g,
        se = /^ms-/,
        pe = o.Children.toArray,
        he = w.ReactCurrentDispatcher,
        de = { listing: !0, pre: !0, textarea: !0 },
        me = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        ye = {},
        ge = {};
      var ve = Object.prototype.hasOwnProperty,
        be = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null,
        };
      function Le(e, t) {
        if (void 0 === e) throw Error(a(152, x(t) || "Component"));
      }
      function Oe(e, t, r) {
        function c(o, c) {
          var i = c.prototype && c.prototype.isReactComponent,
            u = (function (e, t, r, n) {
              if (n && "object" == typeof (n = e.contextType) && null !== n)
                return C(n, r), n[r];
              if ((e = e.contextTypes)) {
                for (var o in ((r = {}), e)) r[o] = t[o];
                t = r;
              } else t = E;
              return t;
            })(c, t, r, i),
            l = [],
            f = !1,
            s = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {
                if (null === l) return null;
              },
              enqueueReplaceState: function (e, t) {
                (f = !0), (l = [t]);
              },
              enqueueSetState: function (e, t) {
                if (null === l) return null;
                l.push(t);
              },
            };
          if (i) {
            if (
              ((i = new c(o.props, u, s)),
              "function" == typeof c.getDerivedStateFromProps)
            ) {
              var p = c.getDerivedStateFromProps.call(null, o.props, i.state);
              null != p && (i.state = n({}, i.state, p));
            }
          } else if (
            ((U = {}),
            (i = c(o.props, u, s)),
            null == (i = K(c, o.props, i, u)) || null == i.render)
          )
            return void Le((e = i), c);
          if (
            ((i.props = o.props),
            (i.context = u),
            (i.updater = s),
            void 0 === (s = i.state) && (i.state = s = null),
            "function" == typeof i.UNSAFE_componentWillMount ||
              "function" == typeof i.componentWillMount)
          )
            if (
              ("function" == typeof i.componentWillMount &&
                "function" != typeof c.getDerivedStateFromProps &&
                i.componentWillMount(),
              "function" == typeof i.UNSAFE_componentWillMount &&
                "function" != typeof c.getDerivedStateFromProps &&
                i.UNSAFE_componentWillMount(),
              l.length)
            ) {
              s = l;
              var h = f;
              if (((l = null), (f = !1), h && 1 === s.length)) i.state = s[0];
              else {
                p = h ? s[0] : i.state;
                var d = !0;
                for (h = h ? 1 : 0; h < s.length; h++) {
                  var m = s[h];
                  null !=
                    (m =
                      "function" == typeof m ? m.call(i, p, o.props, u) : m) &&
                    (d ? ((d = !1), (p = n({}, p, m))) : n(p, m));
                }
                i.state = p;
              }
            } else l = null;
          if (
            (Le((e = i.render()), c),
            "function" == typeof i.getChildContext &&
              "object" == typeof (o = c.childContextTypes))
          ) {
            var y = i.getChildContext();
            for (var g in y)
              if (!(g in o)) throw Error(a(108, x(c) || "Unknown", g));
          }
          y && (t = n({}, t, y));
        }
        for (; o.isValidElement(e); ) {
          var i = e,
            u = i.type;
          if ("function" != typeof u) break;
          c(i, u);
        }
        return { child: e, context: t };
      }
      var xe = (function () {
          function e(e, t) {
            o.isValidElement(e)
              ? e.type !== u
                ? (e = [e])
                : ((e = e.props.children),
                  (e = o.isValidElement(e) ? [e] : pe(e)))
              : (e = pe(e)),
              (e = {
                type: null,
                domNamespace: oe,
                children: e,
                childIndex: 0,
                context: E,
                footer: "",
              });
            var r = j[0];
            if (0 === r) {
              var n = j,
                c = 2 * (r = n.length);
              if (!(65536 >= c)) throw Error(a(304));
              var i = new Uint16Array(c);
              for (i.set(n), (j = i)[0] = r + 1, n = r; n < c - 1; n++)
                j[n] = n + 1;
              j[c - 1] = 0;
            } else j[0] = j[r];
            (this.threadID = r),
              (this.stack = [e]),
              (this.exhausted = !1),
              (this.currentSelectValue = null),
              (this.previousWasTextNode = !1),
              (this.makeStaticMarkup = t),
              (this.suspenseDepth = 0),
              (this.contextIndex = -1),
              (this.contextStack = []),
              (this.contextValueStack = []);
          }
          var t = e.prototype;
          return (
            (t.destroy = function () {
              if (!this.exhausted) {
                (this.exhausted = !0), this.clearProviders();
                var e = this.threadID;
                (j[e] = j[0]), (j[0] = e);
              }
            }),
            (t.pushProvider = function (e) {
              var t = ++this.contextIndex,
                r = e.type._context,
                n = this.threadID;
              C(r, n);
              var o = r[n];
              (this.contextStack[t] = r),
                (this.contextValueStack[t] = o),
                (r[n] = e.props.value);
            }),
            (t.popProvider = function () {
              var e = this.contextIndex,
                t = this.contextStack[e],
                r = this.contextValueStack[e];
              (this.contextStack[e] = null),
                (this.contextValueStack[e] = null),
                this.contextIndex--,
                (t[this.threadID] = r);
            }),
            (t.clearProviders = function () {
              for (var e = this.contextIndex; 0 <= e; e--)
                this.contextStack[e][this.threadID] = this.contextValueStack[e];
            }),
            (t.read = function (e) {
              if (this.exhausted) return null;
              var t = re;
              re = this.threadID;
              var r = he.current;
              he.current = ne;
              try {
                for (var n = [""], o = !1; n[0].length < e; ) {
                  if (0 === this.stack.length) {
                    this.exhausted = !0;
                    var c = this.threadID;
                    (j[c] = j[0]), (j[0] = c);
                    break;
                  }
                  var i = this.stack[this.stack.length - 1];
                  if (o || i.childIndex >= i.children.length) {
                    var u = i.footer;
                    if (
                      ("" !== u && (this.previousWasTextNode = !1),
                      this.stack.pop(),
                      "select" === i.type)
                    )
                      this.currentSelectValue = null;
                    else if (
                      null != i.type &&
                      null != i.type.type &&
                      i.type.type.$$typeof === s
                    )
                      this.popProvider(i.type);
                    else if (i.type === m) {
                      this.suspenseDepth--;
                      var l = n.pop();
                      if (o) {
                        o = !1;
                        var f = i.fallbackFrame;
                        if (!f) throw Error(a(303));
                        this.stack.push(f),
                          (n[this.suspenseDepth] += "\x3c!--$!--\x3e");
                        continue;
                      }
                      n[this.suspenseDepth] += l;
                    }
                    n[this.suspenseDepth] += u;
                  } else {
                    var p = i.children[i.childIndex++],
                      h = "";
                    try {
                      h += this.render(p, i.context, i.domNamespace);
                    } catch (e) {
                      if (null != e && "function" == typeof e.then)
                        throw Error(a(294));
                      throw e;
                    }
                    n.length <= this.suspenseDepth && n.push(""),
                      (n[this.suspenseDepth] += h);
                  }
                }
                return n[0];
              } finally {
                (he.current = r), (re = t);
              }
            }),
            (t.render = function (e, t, r) {
              if ("string" == typeof e || "number" == typeof e)
                return "" === (r = "" + e)
                  ? ""
                  : this.makeStaticMarkup
                    ? T(r)
                    : this.previousWasTextNode
                      ? "\x3c!-- --\x3e" + T(r)
                      : ((this.previousWasTextNode = !0), T(r));
              if (
                ((e = (t = Oe(e, t, this.threadID)).child),
                (t = t.context),
                null === e || !1 === e)
              )
                return "";
              if (!o.isValidElement(e)) {
                if (null != e && null != e.$$typeof) {
                  if ((r = e.$$typeof) === i) throw Error(a(257));
                  throw Error(a(258, r.toString()));
                }
                return (
                  (e = pe(e)),
                  this.stack.push({
                    type: null,
                    domNamespace: r,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: "",
                  }),
                  ""
                );
              }
              var c = e.type;
              if ("string" == typeof c) return this.renderDOM(e, t, r);
              switch (c) {
                case l:
                case h:
                case f:
                case y:
                case u:
                  return (
                    (e = pe(e.props.children)),
                    this.stack.push({
                      type: null,
                      domNamespace: r,
                      children: e,
                      childIndex: 0,
                      context: t,
                      footer: "",
                    }),
                    ""
                  );
                case m:
                  throw Error(a(294));
              }
              if ("object" == typeof c && null !== c)
                switch (c.$$typeof) {
                  case d:
                    U = {};
                    var b = c.render(e.props, e.ref);
                    return (
                      (b = K(c.render, e.props, b, e.ref)),
                      (b = pe(b)),
                      this.stack.push({
                        type: null,
                        domNamespace: r,
                        children: b,
                        childIndex: 0,
                        context: t,
                        footer: "",
                      }),
                      ""
                    );
                  case g:
                    return (
                      (e = [
                        o.createElement(c.type, n({ ref: e.ref }, e.props)),
                      ]),
                      this.stack.push({
                        type: null,
                        domNamespace: r,
                        children: e,
                        childIndex: 0,
                        context: t,
                        footer: "",
                      }),
                      ""
                    );
                  case s:
                    return (
                      (r = {
                        type: e,
                        domNamespace: r,
                        children: (c = pe(e.props.children)),
                        childIndex: 0,
                        context: t,
                        footer: "",
                      }),
                      this.pushProvider(e),
                      this.stack.push(r),
                      ""
                    );
                  case p:
                    (c = e.type), (b = e.props);
                    var x = this.threadID;
                    return (
                      C(c, x),
                      (c = pe(b.children(c[x]))),
                      this.stack.push({
                        type: e,
                        domNamespace: r,
                        children: c,
                        childIndex: 0,
                        context: t,
                        footer: "",
                      }),
                      ""
                    );
                  case L:
                    throw Error(a(338));
                  case v:
                    switch (
                      ((function (e) {
                        if (-1 === e._status) {
                          e._status = 0;
                          var t = e._ctor;
                          (t = t()),
                            (e._result = t),
                            t.then(
                              function (t) {
                                0 === e._status &&
                                  ((t = t.default),
                                  (e._status = 1),
                                  (e._result = t));
                              },
                              function (t) {
                                0 === e._status &&
                                  ((e._status = 2), (e._result = t));
                              }
                            );
                        }
                      })((c = e.type)),
                      c._status)
                    ) {
                      case 1:
                        return (
                          (e = [
                            o.createElement(
                              c._result,
                              n({ ref: e.ref }, e.props)
                            ),
                          ]),
                          this.stack.push({
                            type: null,
                            domNamespace: r,
                            children: e,
                            childIndex: 0,
                            context: t,
                            footer: "",
                          }),
                          ""
                        );
                      case 2:
                        throw c._result;
                      default:
                        throw Error(a(295));
                    }
                  case O:
                    throw Error(a(343));
                }
              throw Error(a(130, null == c ? c : typeof c, ""));
            }),
            (t.renderDOM = function (e, t, r) {
              var c = e.type.toLowerCase();
              if ((r === oe && ae(c), !ye.hasOwnProperty(c))) {
                if (!me.test(c)) throw Error(a(65, c));
                ye[c] = !0;
              }
              var i = e.props;
              if ("input" === c)
                i = n({ type: void 0 }, i, {
                  defaultChecked: void 0,
                  defaultValue: void 0,
                  value: null != i.value ? i.value : i.defaultValue,
                  checked: null != i.checked ? i.checked : i.defaultChecked,
                });
              else if ("textarea" === c) {
                var u = i.value;
                if (null == u) {
                  u = i.defaultValue;
                  var l = i.children;
                  if (null != l) {
                    if (null != u) throw Error(a(92));
                    if (Array.isArray(l)) {
                      if (!(1 >= l.length)) throw Error(a(93));
                      l = l[0];
                    }
                    u = "" + l;
                  }
                  null == u && (u = "");
                }
                i = n({}, i, { value: void 0, children: "" + u });
              } else if ("select" === c)
                (this.currentSelectValue =
                  null != i.value ? i.value : i.defaultValue),
                  (i = n({}, i, { value: void 0 }));
              else if ("option" === c) {
                l = this.currentSelectValue;
                var f = (function (e) {
                  if (null == e) return e;
                  var t = "";
                  return (
                    o.Children.forEach(e, function (e) {
                      null != e && (t += e);
                    }),
                    t
                  );
                })(i.children);
                if (null != l) {
                  var s = null != i.value ? i.value + "" : f;
                  if (((u = !1), Array.isArray(l))) {
                    for (var p = 0; p < l.length; p++)
                      if ("" + l[p] === s) {
                        u = !0;
                        break;
                      }
                  } else u = "" + l === s;
                  i = n({ selected: void 0, children: void 0 }, i, {
                    selected: u,
                    children: f,
                  });
                }
              }
              if ((u = i)) {
                if (
                  ie[c] &&
                  (null != u.children || null != u.dangerouslySetInnerHTML)
                )
                  throw Error(a(137, c, ""));
                if (null != u.dangerouslySetInnerHTML) {
                  if (null != u.children) throw Error(a(60));
                  if (
                    "object" != typeof u.dangerouslySetInnerHTML ||
                    !("__html" in u.dangerouslySetInnerHTML)
                  )
                    throw Error(a(61));
                }
                if (null != u.style && "object" != typeof u.style)
                  throw Error(a(62, ""));
              }
              for (L in ((u = i),
              (l = this.makeStaticMarkup),
              (f = 1 === this.stack.length),
              (s = "<" + e.type),
              u))
                if (ve.call(u, L)) {
                  var h = u[L];
                  if (null != h) {
                    if ("style" === L) {
                      p = void 0;
                      var d = "",
                        m = "";
                      for (p in h)
                        if (h.hasOwnProperty(p)) {
                          var y = 0 === p.indexOf("--"),
                            g = h[p];
                          if (null != g) {
                            if (y) var v = p;
                            else if (((v = p), ge.hasOwnProperty(v))) v = ge[v];
                            else {
                              var b = v
                                .replace(fe, "-$1")
                                .toLowerCase()
                                .replace(se, "-ms-");
                              v = ge[v] = b;
                            }
                            (d += m + v + ":"),
                              (m = p),
                              (d += y =
                                null == g || "boolean" == typeof g || "" === g
                                  ? ""
                                  : y ||
                                      "number" != typeof g ||
                                      0 === g ||
                                      (ue.hasOwnProperty(m) && ue[m])
                                    ? ("" + g).trim()
                                    : g + "px"),
                              (m = ";");
                          }
                        }
                      h = d || null;
                    }
                    p = null;
                    e: if (((y = c), (g = u), -1 === y.indexOf("-")))
                      y = "string" == typeof g.is;
                    else
                      switch (y) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                          y = !1;
                          break e;
                        default:
                          y = !0;
                      }
                    y
                      ? be.hasOwnProperty(L) ||
                        (p =
                          A((p = L)) && null != h ? p + '="' + T(h) + '"' : "")
                      : (p = z(L, h)),
                      p && (s += " " + p);
                  }
                }
              l || (f && (s += ' data-reactroot=""'));
              var L = s;
              (u = ""),
                ce.hasOwnProperty(c)
                  ? (L += "/>")
                  : ((L += ">"), (u = "</" + e.type + ">"));
              e: {
                if (null != (l = i.dangerouslySetInnerHTML)) {
                  if (null != l.__html) {
                    l = l.__html;
                    break e;
                  }
                } else if (
                  "string" == typeof (l = i.children) ||
                  "number" == typeof l
                ) {
                  l = T(l);
                  break e;
                }
                l = null;
              }
              return (
                null != l
                  ? ((i = []),
                    de.hasOwnProperty(c) && "\n" === l.charAt(0) && (L += "\n"),
                    (L += l))
                  : (i = pe(i.children)),
                (e = e.type),
                (r =
                  null == r || "http://www.w3.org/1999/xhtml" === r
                    ? ae(e)
                    : "http://www.w3.org/2000/svg" === r &&
                        "foreignObject" === e
                      ? "http://www.w3.org/1999/xhtml"
                      : r),
                this.stack.push({
                  domNamespace: r,
                  type: c,
                  children: i,
                  childIndex: 0,
                  context: t,
                  footer: u,
                }),
                (this.previousWasTextNode = !1),
                L
              );
            }),
            e
          );
        })(),
        we = {
          renderToString: function (e) {
            e = new xe(e, !1);
            try {
              return e.read(1 / 0);
            } finally {
              e.destroy();
            }
          },
          renderToStaticMarkup: function (e) {
            e = new xe(e, !0);
            try {
              return e.read(1 / 0);
            } finally {
              e.destroy();
            }
          },
          renderToNodeStream: function () {
            throw Error(a(207));
          },
          renderToStaticNodeStream: function () {
            throw Error(a(208));
          },
          version: "16.14.0",
        };
      e.exports = we.default || we;
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "Logo", function () {
          return Ft;
        }),
        r.d(t, "ProteinLogo", function () {
          return Ut;
        }),
        r.d(t, "DNALogo", function () {
          return Ht;
        }),
        r.d(t, "RNALogo", function () {
          return Gt;
        }),
        r.d(t, "ProteinAlphabet", function () {
          return $t;
        }),
        r.d(t, "DNAAlphabet", function () {
          return Vt;
        }),
        r.d(t, "RNAAlphabet", function () {
          return Bt;
        }),
        r.d(t, "CompleteLogo", function () {
          return at;
        }),
        r.d(t, "CompleteAlphabet", function () {
          return ot;
        }),
        r.d(t, "INFORMATION_CONTENT", function () {
          return lt;
        }),
        r.d(t, "FREQUENCY", function () {
          return ft;
        }),
        r.d(t, "xrange", function () {
          return mt;
        }),
        r.d(t, "LogoWithNegatives", function () {
          return Tt;
        }),
        r.d(t, "embedDNALogo", function () {
          return Yt;
        }),
        r.d(t, "disymbolAlphabet", function () {
          return gt;
        }),
        r.d(t, "RawLogo", function () {
          return At;
        }),
        r.d(t, "embedRNALogo", function () {
          return Qt;
        }),
        r.d(t, "embedLogoWithNegatives", function () {
          return er;
        }),
        r.d(t, "embedProteinLogo", function () {
          return Kt;
        }),
        r.d(t, "embedLogo", function () {
          return Xt;
        }),
        r.d(t, "embedRawLogo", function () {
          return Jt;
        }),
        r.d(t, "loadGlyphComponents", function () {
          return ht;
        }),
        r.d(t, "A", function () {
          return c;
        }),
        r.d(t, "B", function () {
          return u;
        }),
        r.d(t, "C", function () {
          return f;
        }),
        r.d(t, "D", function () {
          return p;
        }),
        r.d(t, "E", function () {
          return d;
        }),
        r.d(t, "F", function () {
          return y;
        }),
        r.d(t, "G", function () {
          return v;
        }),
        r.d(t, "H", function () {
          return L;
        }),
        r.d(t, "I", function () {
          return x;
        }),
        r.d(t, "J", function () {
          return E;
        }),
        r.d(t, "K", function () {
          return j;
        }),
        r.d(t, "L", function () {
          return k;
        }),
        r.d(t, "M", function () {
          return P;
        }),
        r.d(t, "N", function () {
          return A;
        }),
        r.d(t, "O", function () {
          return N;
        }),
        r.d(t, "P", function () {
          return R;
        }),
        r.d(t, "Q", function () {
          return T;
        }),
        r.d(t, "R", function () {
          return $;
        }),
        r.d(t, "S", function () {
          return U;
        }),
        r.d(t, "T", function () {
          return V;
        }),
        r.d(t, "U", function () {
          return q;
        }),
        r.d(t, "V", function () {
          return G;
        }),
        r.d(t, "W", function () {
          return Y;
        }),
        r.d(t, "X", function () {
          return K;
        }),
        r.d(t, "Y", function () {
          return J;
        }),
        r.d(t, "Z", function () {
          return te;
        }),
        r.d(t, "LC_a", function () {
          return tr;
        }),
        r.d(t, "LC_b", function () {
          return rr;
        }),
        r.d(t, "LC_c", function () {
          return nr;
        }),
        r.d(t, "LC_d", function () {
          return or;
        }),
        r.d(t, "LC_e", function () {
          return ar;
        }),
        r.d(t, "LC_f", function () {
          return cr;
        }),
        r.d(t, "LC_g", function () {
          return ir;
        }),
        r.d(t, "LC_h", function () {
          return ur;
        }),
        r.d(t, "LC_i", function () {
          return lr;
        }),
        r.d(t, "LC_j", function () {
          return fr;
        }),
        r.d(t, "LC_k", function () {
          return sr;
        }),
        r.d(t, "LC_l", function () {
          return pr;
        }),
        r.d(t, "LC_m", function () {
          return hr;
        }),
        r.d(t, "LC_n", function () {
          return dr;
        }),
        r.d(t, "LC_o", function () {
          return mr;
        }),
        r.d(t, "LC_p", function () {
          return yr;
        }),
        r.d(t, "LC_q", function () {
          return gr;
        }),
        r.d(t, "LC_r", function () {
          return vr;
        }),
        r.d(t, "LC_s", function () {
          return br;
        }),
        r.d(t, "LC_t", function () {
          return Lr;
        }),
        r.d(t, "LC_u", function () {
          return Or;
        }),
        r.d(t, "LC_v", function () {
          return xr;
        }),
        r.d(t, "LC_w", function () {
          return wr;
        }),
        r.d(t, "LC_x", function () {
          return Er;
        }),
        r.d(t, "LC_y", function () {
          return Cr;
        }),
        r.d(t, "LC_z", function () {
          return jr;
        }),
        r.d(t, "N0", function () {
          return Sr;
        }),
        r.d(t, "N1", function () {
          return Ue;
        }),
        r.d(t, "N2", function () {
          return Ve;
        }),
        r.d(t, "N3", function () {
          return qe;
        }),
        r.d(t, "N4", function () {
          return Ge;
        }),
        r.d(t, "N5", function () {
          return Ye;
        }),
        r.d(t, "N6", function () {
          return Ke;
        }),
        r.d(t, "N7", function () {
          return Je;
        }),
        r.d(t, "N8", function () {
          return tt;
        }),
        r.d(t, "N9", function () {
          return nt;
        });
      var n = r(0),
        o = r.n(n);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var c = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            a({}, e, {
              d: "M 0 100 L 33 0 L 66 0 L 100 100 L 75 100\n         L 66 75 L 33 75 L 25 100 L 0 100",
            })
          ),
          o.a.createElement("path", {
            fill: "#ffffff",
            d: "M 41 55 L 50 25 L 58 55 L 41 55",
          })
        );
      };
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var u = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            i({}, e, {
              d: "M 0 0 L 80 0 C 105 0 105 50 80 50\n               C 105 50 105 100 80 100 L 00 100\n               L 0 0",
            })
          ),
          o.a.createElement("path", {
            d: "M 20 15 L 70 15 C 80 15 80 35 70 35 L 20 35 L 20 15",
            fill: "#ffffff",
          }),
          o.a.createElement("path", {
            d: "M 20 65 L 70 65 C 80 65 80 85 70 85 L 20 85 L 20 65",
            fill: "#ffffff",
          })
        );
      };
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var f = function (e) {
        return o.a.createElement(
          "path",
          l({}, e, {
            d: "M 100 28 C 100 -13 0 -13 0 50\n         C 0 113 100 113 100 72 L 75 72\n         C 75 90 30 90 30 50 C 30 10 75 10 75 28\n         L 100 28",
          })
        );
      };
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var p = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            s({}, e, {
              d: "M 0 0 L 60 0 C 110 0 110 100 60 100\n               L 0 100 L 0 0",
            })
          ),
          o.a.createElement("path", {
            fill: "#ffffff",
            d: "M 20 15 L 40 15 C 85 15 85 85 40 85\n                    L 20 85 L 20 15",
          })
        );
      };
      function h() {
        return (h = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var d = function (e) {
        return o.a.createElement(
          "path",
          h({}, e, {
            d: "M 0 0 L 100 0 L 100 20 L 20 20 L 20 40\n               L 90 40 L 90 60 L 20 60 L 20 80 L 100 80\n               L 100 100 L 0 100 L 0 0",
          })
        );
      };
      function m() {
        return (m = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var y = function (e) {
        return o.a.createElement(
          "path",
          m({}, e, {
            d: "M 0 0 L 100 0 L 100 20 L 20 20 L 20 40\n               L 80 40 L 80 60 L 20 60 L 20 100 L 0 100\n               L 0 0",
          })
        );
      };
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var v = function (e) {
        return o.a.createElement(
          "path",
          g({}, e, {
            d: "M 100 28 C 100 -13 0 -13 0 50 C 0 113 100 113 100 72\n         L 100 48 L 55 48 L 55 72 L 75 72 C 75 90 30 90 30 50\n         C 30 10 75 5 75 28 L 100 28",
          })
        );
      };
      function b() {
        return (b = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var L = function (e) {
        return o.a.createElement(
          "path",
          b({}, e, {
            d: "M 0 0 L 20 0 L 20 40 L 80 40 L 80 0\n               L 100 0 L 100 100 L 80 100 L 80 60\n               L 20 60 L 20 100 L 0 100 L 0 0",
          })
        );
      };
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var x = function (e) {
        return o.a.createElement(
          "path",
          O({}, e, { d: "M 40 0 L 60 0 L 60 100 L 40 100 L 40 0" })
        );
      };
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var E = function (e) {
        return o.a.createElement(
          "path",
          w({}, e, {
            d: "M 0 60 C 0 111 100 111 100 60\n         L 100 0 L 75 0 L 75 60\n         C 80 90 20 90 25 60",
          })
        );
      };
      function C() {
        return (C = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var j = function (e) {
        return o.a.createElement(
          "path",
          C({}, e, {
            d: "M 0 0 L 20 0 L 20 40 L 75 0 L 100 0\n               L 50 50 L 100 100 L 75 100 L 30 65\n               L 20 75 L 20 100 L 0 100 L 0 0",
          })
        );
      };
      function S() {
        return (S = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var k = function (e) {
        return o.a.createElement(
          "path",
          S({}, e, {
            d: "M 0 0 L 0 100 L 100 100 L 100 80\n               L 20 80 L 20 0 L 0 0",
          })
        );
      };
      function M() {
        return (M = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var P = function (e) {
        return o.a.createElement(
          "path",
          M({}, e, {
            d: "M 0 0 L 20 0 L 50 35 L 80 0 L 100 0 L 100 100\n               L 80 100 L 80 30 L 50 65 L 20 30 L 20 100\n               L 0 100 L 0 0",
          })
        );
      };
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var A = function (e) {
        return o.a.createElement(
          "path",
          _({}, e, {
            d: "M 0 100 L 0 0 L 20 0 L 80 75 L 80 0\n         L 100 0 L 100 100 L 80 100 L 20 25 L 20 100 L 0 100",
          })
        );
      };
      function F() {
        return (F = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var N = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement("circle", F({ cx: "50", cy: "50", r: "50" }, e)),
          o.a.createElement("circle", {
            cx: "50",
            cy: "50",
            r: "32",
            fill: "#ffffff",
          })
        );
      };
      function I() {
        return (I = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var R = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            I({}, e, {
              d: "M 0 0 L 80 0 C 105 0 105 50 80 50\n               L 20 50 L 20 100 L 0 100 L 0 0",
            })
          ),
          o.a.createElement("path", {
            fill: "#ffffff",
            d: "M 20 15 L 70 15 C 80 15 80 35 70 35 L 20 35 L 20 15",
          })
        );
      };
      function D() {
        return (D = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var T = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement("circle", D({ cx: "50", cy: "50", r: "50" }, e)),
          o.a.createElement("circle", {
            cx: "50",
            cy: "50",
            r: "32",
            fill: "#ffffff",
          }),
          o.a.createElement(
            "path",
            D({ d: "M 85 100 L 55 70 L 70 55 L 100 85 L 85 100" }, e)
          )
        );
      };
      function z() {
        return (z = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var $ = function (e) {
          return o.a.createElement(
            "g",
            null,
            o.a.createElement(
              "path",
              z({}, e, {
                d: "M 0 0 L 80 0 C 105 0 105 50 80 50\n                C 100 50 100 70 100 70 L 100 100 L 80 100\n                L 80 80 C 80 80 80 60 50 60 L 20 60\n                L 20 100 L 0 100 L 0 0",
              })
            ),
            o.a.createElement("path", {
              fill: "#ffffff",
              d: "M 20 15 L 70 15 C 80 15 80 35 70 35 L 20 35 L 20 15",
            })
          );
        },
        U = function (e) {
          var t = e.fill,
            r = e.fillOpacity;
          return o.a.createElement("path", {
            fill: "#ffffff",
            stroke: t,
            strokeOpacity: r,
            strokeWidth: "18",
            d: "M92 26 A43 20 0 1 0 43 46 A42 23 0 1 1 9 68",
          });
        };
      function W() {
        return (W = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var V = function (e) {
        return o.a.createElement(
          "path",
          W({}, e, {
            d: "M 0 0 L 0 20 L 35 20 L 35 100\n         L 65 100 L 65 20 L 100 20\n         L 100 0 L 0 0",
          })
        );
      };
      function H() {
        return (H = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var q = function (e) {
        return o.a.createElement(
          "path",
          H({}, e, {
            d: "M 0 0 L 0 60 C 0 111 100 111 100 60\n         L 100 0 L 75 0 L 75 60\n         C 80 90 20 90 25 60 L 25 0 L 0 0",
          })
        );
      };
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var G = function (e) {
        return o.a.createElement(
          "path",
          B({}, e, {
            d: "M 0 0 L 20 0 L 50 80 L 80 0\n               L 100 0 L 60 100 L 40 100 L 0 0",
          })
        );
      };
      function Z() {
        return (Z = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Y = function (e) {
        return o.a.createElement(
          "path",
          Z({}, e, {
            d: "M 0 0 L 20 0 L 30 70 L 50 30 L 70 70 L 80 0\n               L 100 0 L 90 100 L 70 100 L 50 65 L 30 100\n               L 10 100 L 0 0",
          })
        );
      };
      function Q() {
        return (Q = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var K = function (e) {
        return o.a.createElement(
          "path",
          Q({}, e, {
            d: "M 0 0 L 20 0 L 50 40 L 80 0 L 100 0 L 70 50\n               L 100 100 L 80 100 L 50 60 L 20 100 L 0 100\n               L 30 50 L 0 0",
          })
        );
      };
      function X() {
        return (X = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var J = function (e) {
        return o.a.createElement(
          "path",
          X({}, e, {
            d: "M 0 0 L 20 0 L 50 45 L 80 0 L 100 0\n               L 60 60 L 60 100 L 40 100 L 40 60 L 0 0",
          })
        );
      };
      function ee() {
        return (ee = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var te = function (e) {
        return o.a.createElement(
          "path",
          ee({}, e, {
            d: "M 0 0 L 100 0 L 100 20 L 35 80 L 100 80\n               L 100 100 L 0 100 L 0 80 L 65 20 L 0 20\n               L 0 0",
          })
        );
      };
      function re() {
        return (re = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ne = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            re(
              {
                d: "M 10 20 C 5 -5 95 -10 100 35 L 100 100 L 80 100 L 80 90 C 90 105 10 105 0 80 C 0 45 40 40 60 45 L 80 50 C 95 30 40 5 10 35",
              },
              e
            )
          ),
          o.a.createElement("path", {
            fill: "#ffffff",
            d: "M 77 70 C 70 90 30 90 22 80 C 10 50 80 60 77 70",
          })
        );
      };
      function oe() {
        return (oe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ae = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            oe(
              {
                d: "M 20 0 L 0 0 L 0 100 L 20 100 L 20 80 C 10 110 90 110 100 70 L 100 60 C 90 10 10 10 20 40 L 20 40 L 20 0",
              },
              e
            )
          ),
          o.a.createElement("path", {
            d: "M 79 60 C 80 95 20 95 20 65 C 20 30 80 30 79 65",
            fill: "#ffffff",
          })
        );
      };
      function ce() {
        return (ce = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ie = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            ce(
              {
                d: "M 80 0 L 100 0 L 100 100 L 80 100 L 80 80 C 90 110 10 110 0 70 L 0 60 C 10 10 90 10 80 40 L 80 40 L 80 0",
              },
              e
            )
          ),
          o.a.createElement("path", {
            d: "M 79 60 C 80 95 20 95 20 65 C 20 30 80 30 79 65",
            fill: "#ffffff",
          })
        );
      };
      function ue() {
        return (ue = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var le = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            ue(
              {
                d: "M 25 50 L 100 50 C 85 -17 15 -17 0 50 C 0 75 25 100 50 100 L 95 100 L 95 80 L 50 80 Q 25 70 25 50",
              },
              e
            )
          ),
          o.a.createElement("path", {
            d: "M 33 37 L 68 37 C 58 10 42 10 33 37",
            fill: "#ffffff",
          })
        );
      };
      function fe() {
        return (fe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var se = function (e) {
        return o.a.createElement(
          "path",
          fe(
            {
              d: "M 95 32 C 80 -17 20 -5 20 37 L 7 37 L 7 50 L 20 50 L 20 100 L 45 100 L 45 50 L 57 50 L 57 37 L 45 37 C 45 10 70 10 75 32 L 95 32",
            },
            e
          )
        );
      };
      function pe() {
        return (pe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var he = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            pe(
              {
                d: "M 100 15 L 100 0 L 80 0 L 80 15 C 85 -8 15 -8 0 25 C 2 75 80 75 80 50 L 75 65 C 65 85 45 85 10 75 L 10 90 C 25 110 85 110 100 75 L 100 25",
              },
              e
            )
          ),
          o.a.createElement("path", {
            d: "M 67 30 C 70 10 25 10 27 30 C 25 50 70 50 67 30",
            fill: "#ffffff",
          })
        );
      };
      function de() {
        return (de = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var me = function (e) {
        return o.a.createElement(
          "path",
          de(
            {
              d: "M 0 0 L 0 100 L 20 100 L 20 80 C 20 40 80 40 80 80 L 80 100 L 100 100 L 100 50 C 80 20 20 20 20 45 L 20 0 L 0 0",
            },
            e
          )
        );
      };
      function ye() {
        return (ye = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ge = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "rect",
            ye({}, e, { x: 40, y: 20, width: 20, height: 80 })
          ),
          o.a.createElement(
            "rect",
            ye({}, e, { x: 40, y: 0, width: 20, height: 15 })
          )
        );
      };
      function ve() {
        return (ve = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var be = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            ve(
              {
                d: "M 0 60 C 0 115 100 115 100 60 L 100 20 L 80 20 L 80 60 C 80 90 20 90 25 60",
              },
              e
            )
          ),
          o.a.createElement("rect", ve({ x: 80, width: 20, height: 15 }, e))
        );
      };
      function Le() {
        return (Le = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Oe = function (e) {
        return o.a.createElement(
          "path",
          Le(
            {
              d: "M 0 0 L 20 0 L 20 60 L 75 30 L 100 30 L 50 65 L 100 100 L 75 100 L 27 80 L 20 85 L 20 100 L 0 100 L 0 0",
            },
            e
          )
        );
      };
      function xe() {
        return (xe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var we = function (e) {
        return o.a.createElement(
          "rect",
          xe({ x: 40, y: 0, width: 20, height: 100 }, e)
        );
      };
      function Ee() {
        return (Ee = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ce = function (e) {
        return o.a.createElement(
          "path",
          Ee(
            {
              d: "M 0 0 L 0 100 L 20 100 L 20 60 C 20 20 40 20 40 50 L 40 100 L 60 100 L 60 50 C 60 20 80 20 80 50 L 80 100 L 100 100 L 100 50 C 100 -10 40 -10 50 50 C 50 -5 20 -5 20 20 L 20 0 L 0 0",
            },
            e
          )
        );
      };
      function je() {
        return (je = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Se = function (e) {
        return o.a.createElement(
          "path",
          je(
            {
              d: "M 0 0 L 0 100 L 20 100 L 20 60 C 20 0 80 0 80 50 L 80 100 L 100 100 L 100 25 C 80 -10 20 -10 20 20 L 20 0 L 0 0",
            },
            e
          )
        );
      };
      function ke() {
        return (ke = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Me = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            ke(
              {
                d: "M 20 100 L 0 100 L 0 0 L 20 0 L 20 20 C 10 -10 90 -10 100 30 L 100 40 C 90 90 10 90 20 60 L 20 60 L 20 100",
              },
              e
            )
          ),
          o.a.createElement("path", {
            d: "M 79 40 C 80 5 20 5 20 35 C 20 70 80 70 79 35",
            fill: "#ffffff",
          })
        );
      };
      function Pe() {
        return (Pe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var _e = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            Pe(
              {
                d: "M 80 100 L 100 100 L 100 0 L 80 0 L 80 20 C 90 -10 10 -10 0 30 L 0 40 C 10 90 90 90 80 60 L 80 60 L 80 100",
              },
              e
            )
          ),
          o.a.createElement("path", {
            d: "M 79 40 C 80 5 20 5 20 35 C 20 70 80 70 79 35",
            fill: "#ffffff",
          })
        );
      };
      function Ae() {
        return (Ae = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Fe = function (e) {
        return o.a.createElement(
          "path",
          Ae(
            {
              d: "M 0 0 L 0 100 L 20 100 L 20 60 C 20 0 80 0 80 50 L 100 50 L 100 25 C 80 -10 20 -10 20 20 L 20 0 L 0 0",
            },
            e
          )
        );
      };
      function Ne() {
        return (Ne = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ie = function (e) {
        return o.a.createElement(
          "path",
          Ne(
            {
              d: "M 95 68 C 80 117 20 105 20 63 L 20 47 L 7 47 L 7 27 L 20 27 L 20 0 L 45 0 L 45 27 L 57 27 L 57 47 L 45 47 L 45 63 C 45 90 70 90 75 68 L 95 68",
            },
            e
          )
        );
      };
      function Re() {
        return (Re = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var De = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            Re(
              {
                d: "M 0 0 L 0 60 C 0 111 100 111 100 60 L 100 0 L 75 0 L 75 60 C 80 90 20 90 25 60 L 25 0 L 0 0",
              },
              e
            )
          ),
          o.a.createElement(
            "rect",
            Re({}, e, { x: 75, y: 0, height: 100, width: 25 })
          )
        );
      };
      function Te() {
        return (Te = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ze = function (e) {
        return o.a.createElement(
          "path",
          Te(
            {
              d: "M 0 0 L 25 0 L 50 36 L 75 0 L 100 0 L 40 100 L 12 100 L 37 55 L 0 0",
            },
            e
          )
        );
      };
      function $e() {
        return ($e = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ue = function (e) {
        return o.a.createElement(
          "path",
          $e({}, e, {
            d: "M 0 80 L 0 100 L 100 100 L 100 80 L 68 80 L 68 0 L 32 0 L 0 15 L 0 40 L 32 25 L 32 80 L 0 80",
          })
        );
      };
      function We() {
        return (We = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ve = function (e) {
        return o.a.createElement(
          "path",
          We({}, e, {
            d: "M 0 25 C 20 -8 80 -8 100 25 C 100 90 30 50 20 85 L 100 85 L 100 100 L 0 100 L 0 70 C 10 40 75 70 75 25 C 70 10 30 10 25 28 L 0 25",
          })
        );
      };
      function He() {
        return (He = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var qe = function (e) {
        return o.a.createElement(
          "path",
          He({}, e, {
            d: "M 0 35 L 0 25 C 20 -8 80 -8 100 25 C 100 30 100 50 75 50 C 100 50 100 70 100 75 C 80 108 20 108 0 75 L 0 65 L 25 65 L 25 75 C 30 88 70 88 75 75 C 75 68 75 65 47 58 L 47 42 C 75 32 75 35 75 25 C 70 12 30 12 25 25 L 25 35",
          })
        );
      };
      function Be() {
        return (Be = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ge = function (e) {
        return o.a.createElement(
          "path",
          Be({}, e, {
            d: "M 50 0 L 0 50 L 0 70 L 50 70 L 50 100 L 75 100 L 75 70 L 100 70 L 100 50 L 75 50 L 75 0 L 50 15 L 50 50 L 30 50 L 75 0 L 50 0",
          })
        );
      };
      function Ze() {
        return (Ze = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ye = function (e) {
        return o.a.createElement(
          "path",
          Ze({}, e, {
            d: "M 95 20 L 100 0 L 10 0 L 0 60 L 25 60 C 30 45 90 50 75 77 C 66 87 30 90 26 72 L 0 80 C 20 110 80 110 100 70 C 100 25 10 25 25 40 L 30 20 L 95 20",
          })
        );
      };
      function Qe() {
        return (Qe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ke = function (e) {
        return o.a.createElement(
          "path",
          Qe({}, e, {
            d: "M 50 0 C -40 70 10 100 50 100 C 90 100 100 80 100 55 C 80 30 30 30 35 50 L 30 60 C 80 50 80 85 50 80 C 10 80 48 10 90 0 L 50 0",
          })
        );
      };
      function Xe() {
        return (Xe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Je = function (e) {
        return o.a.createElement(
          "path",
          Xe({}, e, {
            d: "M 0 0 L 100 0 L 50 100 L 20 100 L 60 20 L 0 20 L 0 0",
          })
        );
      };
      function et() {
        return (et = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var tt = function (e) {
        return o.a.createElement(
          "g",
          null,
          o.a.createElement(
            "path",
            et({}, e, {
              d: "M 0 35 L 0 25 C 20 -8 80 -8 100 25 C 100 30 100 50 75 50 C 100 50 100 70 100 75 C 80 108 20 108 0 75 L 0 65 L 25 65 L 25 75 C 30 88 70 88 75 75 C 75 68 75 65 47 58 L 47 42 C 75 32 75 35 75 25 C 70 12 30 12 25 25 L 25 35",
            })
          ),
          o.a.createElement(
            "path",
            et({}, e, {
              d: "M 100 35 L 100 25 C 80 -8 20 -8 0 25 C 0 30 0 50 25 50 C 0 50 0 70 0 75 C 20 108 80 108 100 75 L 100 65 L 75 65 L 75 75 C 70 88 30 88 25 75 C 25 68 25 65 53 58 L 53 42 C 25 32 25 35 25 25 C 30 12 70 12 75 25 L 75 35",
            })
          )
        );
      };
      function rt() {
        return (rt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nt = function (e) {
          return o.a.createElement(
            "path",
            rt({}, e, {
              d: "M 50 100 C 140 30 90 0 50 0 C 10 0 0 20 0 45 C 20 70 70 70 65 50 L 70 40 C 20 50 20 15 50 20 C 90 20 52 90 10 100 L 50 100",
            })
          );
        },
        ot = [
          { component: c, regex: "A", color: "red" },
          { component: u, regex: "B", color: "maroon" },
          { component: f, regex: "C", color: "blue" },
          { component: p, regex: "D", color: "green" },
          { component: d, regex: "E", color: "olive" },
          { component: y, regex: "F", color: "navy" },
          { component: v, regex: "G", color: "orange" },
          { component: L, regex: "H", color: "teal" },
          { component: x, regex: "I", color: "cadetblue" },
          { component: E, regex: "J", color: "lavender" },
          { component: j, regex: "K", color: "chocolate" },
          { component: k, regex: "L", color: "coral" },
          { component: P, regex: "M", color: "darkolivegreen" },
          { component: A, regex: "N", color: "darkorange" },
          { component: N, regex: "O", color: "gold" },
          { component: R, regex: "P", color: "darkorchid" },
          { component: T, regex: "Q", color: "darkslateblue" },
          { component: $, regex: "R", color: "firebrick" },
          { component: U, regex: "S", color: "darkslategrey" },
          { component: V, regex: "T", color: "#228b22" },
          { component: q, regex: "U", color: "seagreen" },
          { component: G, regex: "V", color: "indigo" },
          { component: Y, regex: "W", color: "mediumseagreen" },
          { component: K, regex: "X", color: "black" },
          { component: J, regex: "Y", color: "palevioletred" },
          { component: te, regex: "Z", color: "peru" },
          { component: ne, regex: "a", color: "red" },
          { component: ae, regex: "b", color: "maroon" },
          { component: f, regex: "c", color: "purple" },
          { component: ie, regex: "d", color: "green" },
          { component: le, regex: "e", color: "olive" },
          { component: se, regex: "f", color: "navy" },
          { component: he, regex: "g", color: "orange" },
          { component: me, regex: "h", color: "teal" },
          { component: ge, regex: "i", color: "cadetblue" },
          { component: be, regex: "j", color: "lavender" },
          { component: Oe, regex: "k", color: "chocolate" },
          { component: we, regex: "l", color: "coral" },
          { component: Ce, regex: "m", color: "darkolivegreen" },
          { component: Se, regex: "n", color: "darkorange" },
          { component: N, regex: "o", color: "gold" },
          { component: Me, regex: "p", color: "darkorchid" },
          { component: _e, regex: "q", color: "darkslateblue" },
          { component: Fe, regex: "r", color: "firebrick" },
          { component: U, regex: "s", color: "darkslategrey" },
          { component: Ie, regex: "t", color: "#228b22" },
          { component: De, regex: "u", color: "seagreen" },
          { component: G, regex: "v", color: "indigo" },
          { component: Y, regex: "w", color: "mediumseagreen" },
          { component: K, regex: "x", color: "black" },
          { component: ze, regex: "y", color: "palevioletred" },
          { component: te, regex: "z", color: "peru" },
          { component: N, regex: "0", color: "indianred" },
          { component: Ue, regex: "1", color: "red" },
          { component: Ve, regex: "2", color: "green" },
          { component: qe, regex: "3", color: "purple" },
          { component: Ge, regex: "4", color: "navy" },
          { component: Ye, regex: "5", color: "teal" },
          { component: Ke, regex: "6", color: "gold" },
          { component: Je, regex: "7", color: "olive" },
          { component: tt, regex: "8", color: "slate" },
          { component: nt, regex: "9", color: "firebrick" },
        ],
        at = o.a.forwardRef(function (e, t) {
          var r = e.ppm,
            n = e.pfm,
            a = e.scale,
            c = e.startpos,
            i = e.mode;
          return o.a.createElement(Ft, {
            ppm: r,
            alphabet: ot,
            scale: a,
            mode: i,
            startpos: c,
            pfm: n,
            ref: t,
          });
        });
      function ct(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return it(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return it(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return it(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function it(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var ut,
        lt = "INFORMATION_CONTENT",
        ft = "FREQUENCY",
        st = function (e, t) {
          for (var r = ("" + e).length, n = e + 1; n < e + t; ++n)
            ("" + n).length > r && (r = ("" + n).length);
          return r;
        },
        pt =
          ((ut = {}),
          ot.forEach(function (e) {
            ut[e.regex] = e;
          }),
          ut),
        ht = function (e) {
          return e.map(function (e) {
            if (1 === e.regex.length)
              return Object.assign({}, e, { component: pt[e.regex].component });
            for (
              var t =
                  (e.color && e.color.map && e.color.length >= 1
                    ? e.color[0]
                    : e.color) || "#000000",
                r = Object.assign({}, e, {
                  component: [],
                  color:
                    e.color && e.color.map && e.color.length === e.regex.length
                      ? e.color
                      : [],
                }),
                n = 0;
              n < r.regex.length;
              ++n
            )
              r.component.push(pt[r.regex[n]].component),
                r.color.length === n && r.color.push(t);
            return r;
          });
        },
        dt = function (e) {
          return e
            .map(function (e, t) {
              return t;
            })
            .sort(function (t, r) {
              return e[t] < e[r] ? -1 : e[t] === e[r] ? 0 : 1;
            });
        },
        mt = function (e) {
          return ct(Array(Math.floor(e)).keys());
        },
        yt = function (e) {
          var t = 0;
          return (
            e
              .filter(function (e) {
                return e > 0;
              })
              .forEach(function (e) {
                t += e;
              }),
            t
          );
        },
        gt = function (e) {
          return e.reduce(function (t, r) {
            return [].concat(
              ct(t),
              ct(
                e.reduce(function (e, t) {
                  return [].concat(ct(e), [
                    {
                      component: [r.component, t.component],
                      color: [r.color, t.color],
                      regex: r.regex + t.regex,
                    },
                  ]);
                }, [])
              )
            );
          }, []);
        };
      function vt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return bt(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return bt(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return bt(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function bt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var Lt = function (e, t, r) {
          for (
            var n = [],
              o = Math.max.apply(
                Math,
                vt(
                  r.map(function (e) {
                    return e.length;
                  })
                )
              ),
              a = 0;
            a < o;
            ++a
          )
            n.push(
              e.map(function (e) {
                return 0;
              })
            );
          return (
            r.forEach(function (e) {
              for (var r = 0; r < e.length; ++r) ++n[r][t[e[r]]];
            }),
            { count: r.length, pfm: n }
          );
        },
        Ot = function (e, t) {
          var r = {},
            n = [];
          return (
            e.forEach(function (e, t) {
              r[e.regex] = t;
            }),
            t.split("\n").forEach(function (e) {
              ">" === e[0] ? n.push("") : (n[n.length - 1] += e.trim());
            }),
            Lt(e, r, n)
          );
        },
        xt = function (e, t) {
          var r = {};
          return (
            e.forEach(function (e, t) {
              r[e.regex] = t;
            }),
            Lt(
              e,
              r,
              t.split("\n").map(function (e) {
                return e.trim();
              })
            )
          );
        },
        wt = function (e) {
          var t = e.yscale,
            r = e.inverted,
            n = e.xscale,
            a = e.children,
            c = t * (r ? -1 : 1);
          return o.a.createElement(
            "g",
            { transform: "scale(" + n + "," + c + ")" },
            a
          );
        };
      function Et() {
        return (Et = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Ct = function (e) {
          var t = e.height,
            r = e.width,
            n = e.indices,
            a = e.alphabet,
            c = e.lv,
            i = e.transform,
            u = e.alpha,
            l = e.inverted,
            f = e.onSymbolMouseOver,
            s = e.onSymbolMouseOut,
            p = e.onSymbolClick,
            h = t,
            d = r / 100;
          u = u || 1;
          var m = n.map(function (e) {
            if (!a[e] || !a[e].component) return null;
            if (0 === c[e]) return null;
            h -= 100 * c[e];
            var t = l ? h + 100 * c[e] : h;
            if (!a[e].component.map) {
              var n = a[e].component;
              return o.a.createElement(
                "g",
                {
                  transform: "translate(0," + t + ")",
                  key: e,
                  onMouseOver:
                    f &&
                    function () {
                      return f(a[e]);
                    },
                  onMouseOut:
                    s &&
                    function () {
                      return s(a[e]);
                    },
                  onClick:
                    p &&
                    function () {
                      return p(a[e]);
                    },
                },
                o.a.createElement(
                  wt,
                  { xscale: d, yscale: c[e], inverted: l },
                  o.a.createElement(
                    n,
                    Et({ fill: a[e].color, fillOpacity: u }, a[e])
                  )
                )
              );
            }
            var i = (0.8 * d) / a[e].component.length;
            return (
              a[e].color.map ||
                (a[e].color = a[e].component.map(function (t) {
                  return a[e].color;
                })),
              a[e].component.map(function (n, h) {
                return o.a.createElement(
                  "g",
                  {
                    transform:
                      "translate(" +
                      ((h * r * 0.8) / a[e].component.length + 0.1 * r) +
                      "," +
                      t +
                      ")",
                    key: e + "_" + h,
                    onMouseOver:
                      f &&
                      function () {
                        return f(a[e]);
                      },
                    onMouseOut:
                      s &&
                      function () {
                        return s(a[e]);
                      },
                    onClick:
                      p &&
                      function () {
                        return p(a[e]);
                      },
                  },
                  o.a.createElement(
                    wt,
                    { xscale: i, yscale: c[e], inverted: l },
                    o.a.createElement(
                      n,
                      Et({ fill: a[e].color[h], fillOpacity: u }, a[e])
                    )
                  )
                );
              })
            );
          });
          return o.a.createElement("g", { transform: i }, m);
        },
        jt = function (e) {
          var t = e.n,
            r = e.transform,
            n = e.glyphWidth,
            a = e.startpos,
            c = mt(t);
          return o.a.createElement(
            "g",
            { transform: r },
            o.a.createElement(
              "g",
              { transform: "rotate(-90)" },
              c.map(function (e) {
                return o.a.createElement(
                  "text",
                  {
                    x: "0",
                    y: n * (e + 0.66),
                    fontSize: "18",
                    textAnchor: "end",
                    key: e,
                  },
                  e + a
                );
              })
            )
          );
        },
        St = function (e) {
          var t = e.bits,
            r = e.transform,
            n = e.height,
            a = e.width,
            c = e.zeroPoint,
            i = mt(t + 1);
          return (
            void 0 === c && (c = 1),
            o.a.createElement(
              "g",
              { transform: r },
              o.a.createElement("rect", {
                height: n,
                width: 4,
                x: a + 1,
                y: 0,
                fill: "#000000",
              }),
              i.map(function (e) {
                return o.a.createElement(
                  "g",
                  {
                    key: e,
                    transform:
                      "translate(0," +
                      (n * c - Math.floor((e * (n * c)) / t)) +
                      ")",
                  },
                  o.a.createElement(
                    "text",
                    { x: a - 15, textAnchor: "end", y: "4", fontSize: "18" },
                    e
                  ),
                  o.a.createElement("rect", {
                    x: a - 10,
                    width: "15",
                    height: "4",
                    y: "-2",
                    fill: "#000000",
                  })
                );
              }),
              o.a.createElement(
                "g",
                { transform: "rotate(-90)" },
                o.a.createElement(
                  "text",
                  { y: "20", x: -n / 2, textAnchor: "middle", fontSize: "18" },
                  "bits"
                )
              )
            )
          );
        },
        kt = function (e) {
          var t = e.ticks,
            r = e.transform,
            n = e.height,
            a = e.width,
            c = mt(t + 1).map(function (e) {
              return e / t;
            });
          return o.a.createElement(
            "g",
            { transform: r },
            o.a.createElement("rect", {
              height: n,
              width: 4,
              x: a + 1,
              y: "0",
              fill: "#000000",
            }),
            c.map(function (e) {
              return o.a.createElement(
                "g",
                {
                  key: e,
                  transform: "translate(0," + (n - Math.floor(e * n)) + ")",
                },
                o.a.createElement(
                  "text",
                  { x: a - 10, textAnchor: "end", y: "4", fontSize: "18" },
                  (e + "").substring(0, 4)
                ),
                o.a.createElement("rect", {
                  x: a - 5,
                  width: "10",
                  height: "4",
                  y: "-2",
                  fill: "#000000",
                })
              );
            }),
            o.a.createElement(
              "g",
              { transform: "rotate(-90)" },
              o.a.createElement(
                "text",
                { y: "15", x: -n / 2, textAnchor: "middle", fontSize: "18" },
                "frequency"
              )
            )
          );
        },
        Mt = function (e) {
          var t = e.minrange,
            r = e.maxrange,
            n = e.xstart,
            a = e.width,
            c = e.height,
            i = e.xaxis_y,
            u = e.numberofgridlines,
            l = e.stroke,
            f = (function (e, t) {
              return function (r) {
                return t[0] + (t[1] - t[0]) * ((r - e[0]) / (e[1] - e[0]));
              };
            })([t, r], [n, a]),
            s = r - t,
            p = i + c,
            h = Math.ceil(s) / u,
            d = Math.ceil(s / h),
            m = Array.from(Array(d).keys());
          return o.a.createElement(
            "g",
            { stroke: l },
            m.map(function (e) {
              var r = t + h * e;
              return o.a.createElement("line", {
                key: e,
                x1: f(r),
                x2: f(r),
                y1: i,
                y2: p,
              });
            }),
            o.a.createElement("line", { x1: f(r), x2: f(r), y1: i, y2: p }),
            ";"
          );
        };
      function Pt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return _t(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return _t(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return _t(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var At = function (e) {
          var t,
            r,
            n = e.values,
            a = e.glyphWidth,
            c = e.stackHeight,
            i = e.alphabet,
            u = e.onSymbolMouseOver,
            l = e.onSymbolMouseOut,
            f = e.onSymbolClick,
            s =
              ((t = a),
              (r = c),
              function (e, n, a, c, i) {
                var u = dt(e),
                  l = i || {},
                  f = l.onSymbolMouseOver,
                  s = l.onSymbolMouseOut,
                  p = l.onSymbolClick;
                return o.a.createElement(Ct, {
                  indices: u,
                  alphabet: c,
                  onSymbolMouseOver: f
                    ? function (e) {
                        return f(a, e);
                      }
                    : null,
                  onSymbolClick: p
                    ? function (e) {
                        return p(a, e);
                      }
                    : null,
                  onSymbolMouseOut: s
                    ? function (e) {
                        return s(a, e);
                      }
                    : null,
                  lv: e,
                  transform: n,
                  width: t,
                  height: r,
                  key: a,
                });
              });
          for (var p in i)
            if (!p.component) {
              i = ht(i);
              break;
            }
          return n.map(function (e, t) {
            return s(e, "translate(" + a * t + ",0)", t, i, {
              onSymbolMouseOver: u,
              onSymbolMouseOut: l,
              onSymbolClick: f,
            });
          });
        },
        Ft = o.a.forwardRef(function (e, t) {
          var r = e.ppm,
            n = e.pfm,
            a = e.values,
            c = e.fasta,
            i = e.mode,
            u = e.height,
            l = e.width,
            f = e.alphabet,
            s = e.glyphwidth,
            p = e.scale,
            h = e.startpos,
            d = e.showGridLines,
            m = e.backgroundFrequencies,
            y = e.constantPseudocount,
            g = e.smallSampleCorrectionOff,
            v = e.yAxisMax,
            b = e.onSymbolMouseOver,
            L = e.onSymbolMouseOut,
            O = e.onSymbolClick,
            x = e.noFastaNames,
            w = e.countUnaligned,
            E = null,
            C = !((!n && !c) || y || w) && !g,
            j = C ? 0 : (y || 0) / f.length;
          if (!r && !n && c) {
            var S = (x ? xt : Ot)(f, c.toUpperCase());
            (n = S.pfm), (E = S.count || 1);
          }
          var k =
            C &&
            n &&
            n.map &&
            n
              .map(function (e) {
                return e.reduce(function (e, t, r) {
                  return void 0 === r ? e : t + e;
                }, 0);
              })
              .map(function (e) {
                return 0 === e ? 0 : (f.length - 1) / (2 * Math.log(2) * e);
              });
          if (
            (!r &&
              n &&
              n.map &&
              (r = n.map(function (e, t) {
                var r =
                  (E && w
                    ? E
                    : e.reduce(function (e, t) {
                        return e + t;
                      }, 0) +
                      j * f.length) || 1;
                return e.map(function (e) {
                  return (e + j) / r;
                });
              })),
            0 === r.length || 0 === r[0].length)
          )
            return o.a.createElement("div", null);
          var M = r[0].length;
          m ||
            (m = r[0].map(function (e) {
              return 1 / M;
            }));
          var P =
              a ||
              (i !== ft
                ? r.map(function (e, t) {
                    return (function (e) {
                      return function (t, r) {
                        var n = 0,
                          o = r || 0;
                        return (
                          t.map(function (t, r) {
                            return (n +=
                              0 === t ? 0 : t * Math.log2(t / (e[r] || 0.01)));
                          }),
                          t.map(function (e) {
                            var t = e * (n - o);
                            return t <= 0 ? 0 : t;
                          })
                        );
                      };
                    })(m)(e, k[t]);
                  })
                : r.map(function (e) {
                    return e.map(function (e) {
                      return e * Math.log2(M);
                    });
                  })),
            _ =
              i === ft
                ? [Math.log2(M)]
                : m.map(function (e) {
                    return Math.log2(1 / (e || 0.01));
                  }),
            A = v || Math.max.apply(Math, Pt(_)),
            F = Math.min.apply(Math, Pt(_)),
            N = F < 0 ? A / (A - F) : 1;
          h = !isNaN(parseFloat(h)) && isFinite(h) ? h : 1;
          var I = 100 * A,
            R = (I / 6) * (s || 1),
            D = P.length * R + 80,
            T = I + 18 * (st(h, P.length) + 1);
          return (
            p && (D > T ? (l = p) : (u = p)),
            o.a.createElement(
              "svg",
              { width: l, height: u, viewBox: "0 0 " + D + " " + T, ref: t },
              d &&
                o.a.createElement(Mt, {
                  minrange: h,
                  maxrange: h + r.length,
                  xstart: 70,
                  width: D,
                  height: I,
                  xaxis_y: 10,
                  numberofgridlines: 10 * P.length,
                }),
              o.a.createElement(jt, {
                transform: "translate(80," + (I + 20) + ")",
                n: P.length,
                glyphWidth: R,
                startpos: h,
              }),
              i === ft
                ? o.a.createElement(kt, {
                    transform: "translate(0,10)",
                    width: 65,
                    height: I,
                    ticks: 2,
                  })
                : o.a.createElement(St, {
                    transform: "translate(0,10)",
                    width: 65,
                    height: I,
                    bits: A,
                    zeroPoint: N,
                  }),
              o.a.createElement(
                "g",
                { transform: "translate(80,10)" },
                o.a.createElement(At, {
                  values: P,
                  glyphWidth: R,
                  stackHeight: I,
                  alphabet: f,
                  onSymbolMouseOver: b,
                  onSymbolMouseOut: L,
                  onSymbolClick: O,
                })
              )
            )
          );
        }),
        Nt = function (e) {
          var t = e.transform,
            r = e.min,
            n = e.max,
            a = e.width,
            c = e.height,
            i = [r, 0, n];
          return o.a.createElement(
            "g",
            { transform: t },
            o.a.createElement("rect", {
              height: c,
              width: 4,
              x: a + 1,
              y: "0",
              fill: "#000000",
            }),
            i.map(function (e) {
              return o.a.createElement(
                "g",
                {
                  key: e,
                  transform: "translate(0," + (c - (e / n) * c) / 2 + ")",
                },
                o.a.createElement(
                  "text",
                  { x: a - 10, textAnchor: "end", y: "4", fontSize: "18" },
                  (e + "").substring(0, 4)
                ),
                o.a.createElement("rect", {
                  x: a - 5,
                  width: "10",
                  height: "4",
                  y: "-2",
                  fill: "#000000",
                })
              );
            }),
            o.a.createElement(
              "g",
              { transform: "rotate(-90)" },
              o.a.createElement(
                "text",
                { y: "15", x: -c / 2, textAnchor: "middle", fontSize: "18" },
                "frequency"
              )
            )
          );
        };
      function It(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Rt(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Rt(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Rt(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Rt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var Dt = function (e, t, r, n) {
          return function (a, c, i, u, l, f) {
            var s,
              p = l
                ? (s = a)
                    .map(function (e, t) {
                      return t;
                    })
                    .sort(function (e, t) {
                      return s[e] < s[t] ? 1 : s[e] === s[t] ? 0 : -1;
                    })
                : dt(a),
              h = f || {},
              d = h.onSymbolMouseOver,
              m = h.onSymbolMouseOut,
              y = h.onSymbolClick;
            return o.a.createElement(Ct, {
              indices: p,
              alphabet: u,
              alpha: r,
              lv: a,
              transform: c,
              width: e,
              height: t,
              onSymbolMouseOver: d
                ? function (e) {
                    return d(i, e);
                  }
                : null,
              onSymbolClick: y
                ? function (e) {
                    return y(i, e);
                  }
                : null,
              onSymbolMouseOut: m
                ? function (e) {
                    return m(i, e);
                  }
                : null,
              key: i,
              inverted: n,
            });
          };
        },
        Tt = o.a.forwardRef(function (e, t) {
          var r = e.values,
            n = e.height,
            a = e.width,
            c = e.alphabet,
            i = e.scale,
            u = e.startpos,
            l = e.negativealpha,
            f = e.showGridLines,
            s = e.inverted,
            p = e.onSymbolMouseOver,
            h = e.onSymbolMouseOut,
            d = e.onSymbolClick;
          if (0 === r.length || 0 === r[0].length)
            return o.a.createElement("div", null);
          r[0].length;
          for (var m in c)
            if (!m.component) {
              c = ht(c);
              break;
            }
          (u = null != u ? u : 1), (l = (l = l < 0 ? 0 : l) > 255 ? 255 : l);
          var y = r.map(yt),
            g = r.map(function (e) {
              return -(function (e) {
                var t = 0;
                return (
                  e
                    .filter(function (e) {
                      return e < 0;
                    })
                    .forEach(function (e) {
                      t += e;
                    }),
                  t
                );
              })(e);
            }),
            v = Math.max.apply(Math, It(y).concat(It(g))),
            b = r.length * (200 / 6) + 80,
            L = 200 + 18 * (st(u, r.length) + 1),
            O = Dt(200 / 6, 200 / 2.05),
            x = Dt(200 / 6, -200 / 2.05, l / 255, s);
          return (
            i && (b > L ? (a = i) : (n = i)),
            o.a.createElement(
              "svg",
              { ref: t, width: a, height: n, viewBox: "0 0 " + b + " " + L },
              f &&
                o.a.createElement(Mt, {
                  minrange: u,
                  maxrange: u + r.length,
                  xstart: 70,
                  width: b,
                  height: 200,
                  xaxis_y: 10,
                  numberofgridlines: 10 * r.length,
                }),
              o.a.createElement(jt, {
                transform: "translate(80,220)",
                n: r.length,
                glyphWidth: 200 / 6,
                startpos: u,
              }),
              o.a.createElement(Nt, {
                transform: "translate(0,10)",
                width: 65,
                height: 200,
                min: -v,
                max: v,
              }),
              o.a.createElement("line", {
                style: {
                  fill: "none",
                  stroke: "#000000",
                  strokeWidth: 2,
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeOpacity: 1,
                  strokeMiterlimit: 4,
                  strokeDasharray: "0.53,1.59",
                  strokeDashoffset: 0,
                },
                transform: "translate(80,111)",
                x1: 0,
                x2: b - 80,
              }),
              o.a.createElement(
                "g",
                { transform: "translate(80,10)" },
                r.map(function (e, t) {
                  return O(
                    e.map(function (e) {
                      return e > 0 ? e / v : 0;
                    }),
                    "translate(" + (200 / 6) * t + ",0)",
                    t,
                    c,
                    !1,
                    {
                      onSymbolMouseOver: p,
                      onSymbolMouseOut: h,
                      onSymbolClick: d,
                    }
                  );
                }),
                r.map(function (e, t) {
                  return x(
                    e.map(function (e) {
                      return e < 0 ? e / v : 0;
                    }),
                    "translate(" + (200 / 6) * t + ",200)",
                    t,
                    c,
                    !0,
                    {
                      onSymbolMouseOver: p,
                      onSymbolMouseOut: h,
                      onSymbolClick: d,
                    }
                  );
                })
              )
            )
          );
        });
      function zt() {
        return (zt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var $t = [
          { component: c, regex: "A", color: "black" },
          { component: u, regex: "B", color: "#bb8800" },
          { component: f, regex: "C", color: "#008811" },
          { component: p, regex: "D", color: "#ff0000" },
          { component: d, regex: "E", color: "#ff0022" },
          { component: y, regex: "F", color: "#333333" },
          { component: v, regex: "G", color: "#007700" },
          { component: L, regex: "H", color: "#220099" },
          { component: x, regex: "I", color: "#111111" },
          { component: j, regex: "K", color: "#0000aa" },
          { component: k, regex: "L", color: "#002222" },
          { component: P, regex: "M", color: "#220022" },
          { component: A, regex: "N", color: "#009911" },
          { component: R, regex: "P", color: "#080808" },
          { component: T, regex: "Q", color: "#00aa00" },
          { component: $, regex: "R", color: "#0022aa" },
          { component: U, regex: "S", color: "#008f00" },
          { component: V, regex: "T", color: "#006600" },
          { component: G, regex: "V", color: "#222200" },
          { component: Y, regex: "W", color: "#080808" },
          { component: J, regex: "Y", color: "#00a800" },
          { component: te, regex: "Z", color: "#aaaa00" },
        ],
        Ut = o.a.forwardRef(function (e, t) {
          return o.a.createElement(Ft, zt({ alphabet: $t }, e, { ref: t }));
        });
      function Wt() {
        return (Wt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Vt = [
          { component: c, regex: "A", color: "red" },
          { component: f, regex: "C", color: "blue" },
          { component: v, regex: "G", color: "orange" },
          { component: V, regex: "T", color: "#228b22" },
        ],
        Ht = o.a.forwardRef(function (e, t) {
          return o.a.createElement(Ft, Wt({ alphabet: Vt }, e, { ref: t }));
        });
      function qt() {
        return (qt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var Bt = [
          { component: c, regex: "A", color: "red" },
          { component: f, regex: "C", color: "blue" },
          { component: v, regex: "G", color: "orange" },
          { component: q, regex: "U", color: "seagreen" },
        ],
        Gt = o.a.forwardRef(function (e, t) {
          return o.a.createElement(Ft, qt({ alphabet: Bt }, e, { ref: t }));
        }),
        Zt = r(1),
        Yt = function (e, t) {
          e.innerHTML = Object(Zt.renderToStaticMarkup)(
            o.a.createElement(Ht, t)
          );
        },
        Qt = function (e, t) {
          e.innerHTML = Object(Zt.renderToStaticMarkup)(
            o.a.createElement(Gt, t)
          );
        },
        Kt = function (e, t) {
          e.innerHTML = Object(Zt.renderToStaticMarkup)(
            o.a.createElement(Ut, t)
          );
        },
        Xt = function (e, t) {
          e.innerHTML = Object(Zt.renderToStaticMarkup)(
            o.a.createElement(Ft, t)
          );
        },
        Jt = function (e, t) {
          e.innerHTML = Object(Zt.renderToStaticMarkup)(
            o.a.createElement(At, t)
          );
        },
        er = function (e, t) {
          e.innerHTML = Object(Zt.renderToStaticMarkup)(
            o.a.createElement(Tt, t)
          );
        },
        tr = ne,
        rr = ae,
        nr = f,
        or = ie,
        ar = le,
        cr = se,
        ir = he,
        ur = me,
        lr = ge,
        fr = be,
        sr = Oe,
        pr = we,
        hr = Ce,
        dr = Se,
        mr = N,
        yr = Me,
        gr = _e,
        vr = Fe,
        br = U,
        Lr = Ie,
        Or = De,
        xr = G,
        wr = Y,
        Er = K,
        Cr = ze,
        jr = te,
        Sr = N;
    },
  ]);
});
