import * as qt from "react";
import Yt, { useContext as Lo, useState as Fi, useRef as Ln, useLayoutEffect as Hv, forwardRef as Zg, createContext as NS, createElement as Ql, Fragment as $g, useMemo as js, useEffect as id, useImperativeHandle as C3 } from "react";
import MS from "react-dom";
var ot = function() {
  return ot = Object.assign || function(e) {
    for (var a, s = 1, u = arguments.length; s < u; s++) {
      a = arguments[s];
      for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && (e[d] = a[d]);
    }
    return e;
  }, ot.apply(this, arguments);
};
function ea(o, e, a) {
  if (a || arguments.length === 2)
    for (var s = 0, u = e.length, d; s < u; s++)
      (d || !(s in e)) && (d || (d = Array.prototype.slice.call(e, 0, s)), d[s] = e[s]);
  return o.concat(d || Array.prototype.slice.call(e));
}
function _r(o, e) {
  return Object.defineProperty ? Object.defineProperty(o, "raw", { value: e }) : o.raw = e, o;
}
function E3(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ld = {}, b3 = {
  get exports() {
    return ld;
  },
  set exports(o) {
    ld = o;
  }
}, Gf = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n2;
function T3() {
  if (n2)
    return Gf;
  n2 = 1;
  var o = Yt, e = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(g, _, m) {
    var E, T = {}, w = null, M = null;
    m !== void 0 && (w = "" + m), _.key !== void 0 && (w = "" + _.key), _.ref !== void 0 && (M = _.ref);
    for (E in _)
      s.call(_, E) && !d.hasOwnProperty(E) && (T[E] = _[E]);
    if (g && g.defaultProps)
      for (E in _ = g.defaultProps, _)
        T[E] === void 0 && (T[E] = _[E]);
    return { $$typeof: e, type: g, key: w, ref: M, props: T, _owner: u.current };
  }
  return Gf.Fragment = a, Gf.jsx = v, Gf.jsxs = v, Gf;
}
var jf = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r2;
function R3() {
  return r2 || (r2 = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Yt, e = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), R = Symbol.iterator, z = "@@iterator";
    function k(A) {
      if (A === null || typeof A != "object")
        return null;
      var he = R && A[R] || A[z];
      return typeof he == "function" ? he : null;
    }
    var I = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(A) {
      {
        for (var he = arguments.length, we = new Array(he > 1 ? he - 1 : 0), Je = 1; Je < he; Je++)
          we[Je - 1] = arguments[Je];
        G("error", A, we);
      }
    }
    function G(A, he, we) {
      {
        var Je = I.ReactDebugCurrentFrame, Ot = Je.getStackAddendum();
        Ot !== "" && (he += "%s", we = we.concat([Ot]));
        var bt = we.map(function(St) {
          return String(St);
        });
        bt.unshift("Warning: " + he), Function.prototype.apply.call(console[A], console, bt);
      }
    }
    var Z = !1, U = !1, V = !1, X = !1, le = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Q(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === s || A === d || le || A === u || A === m || A === E || X || A === M || Z || U || V || typeof A == "object" && A !== null && (A.$$typeof === w || A.$$typeof === T || A.$$typeof === v || A.$$typeof === g || A.$$typeof === _ || A.$$typeof === ee || A.getModuleId !== void 0));
    }
    function K(A, he, we) {
      var Je = A.displayName;
      if (Je)
        return Je;
      var Ot = he.displayName || he.name || "";
      return Ot !== "" ? we + "(" + Ot + ")" : we;
    }
    function xe(A) {
      return A.displayName || "Context";
    }
    function pe(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case d:
          return "Profiler";
        case u:
          return "StrictMode";
        case m:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case g:
            var he = A;
            return xe(he) + ".Consumer";
          case v:
            var we = A;
            return xe(we._context) + ".Provider";
          case _:
            return K(A, A.render, "ForwardRef");
          case T:
            var Je = A.displayName || null;
            return Je !== null ? Je : pe(A.type) || "Memo";
          case w: {
            var Ot = A, bt = Ot._payload, St = Ot._init;
            try {
              return pe(St(bt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ke = Object.assign, lt = 0, Ie, Le, oe, fe, de, Se, Xe;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Re() {
      {
        if (lt === 0) {
          Ie = console.log, Le = console.info, oe = console.warn, fe = console.error, de = console.group, Se = console.groupCollapsed, Xe = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        lt++;
      }
    }
    function nt() {
      {
        if (lt--, lt === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ke({}, A, {
              value: Ie
            }),
            info: ke({}, A, {
              value: Le
            }),
            warn: ke({}, A, {
              value: oe
            }),
            error: ke({}, A, {
              value: fe
            }),
            group: ke({}, A, {
              value: de
            }),
            groupCollapsed: ke({}, A, {
              value: Se
            }),
            groupEnd: ke({}, A, {
              value: Xe
            })
          });
        }
        lt < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ct = I.ReactCurrentDispatcher, Ue;
    function st(A, he, we) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (Ot) {
            var Je = Ot.stack.trim().match(/\n( *(at )?)/);
            Ue = Je && Je[1] || "";
          }
        return `
` + Ue + A;
      }
    }
    var rn = !1, cn;
    {
      var Ft = typeof WeakMap == "function" ? WeakMap : Map;
      cn = new Ft();
    }
    function Ce(A, he) {
      if (!A || rn)
        return "";
      {
        var we = cn.get(A);
        if (we !== void 0)
          return we;
      }
      var Je;
      rn = !0;
      var Ot = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var bt;
      bt = Ct.current, Ct.current = null, Re();
      try {
        if (he) {
          var St = function() {
            throw Error();
          };
          if (Object.defineProperty(St.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(St, []);
            } catch (Pa) {
              Je = Pa;
            }
            Reflect.construct(A, [], St);
          } else {
            try {
              St.call();
            } catch (Pa) {
              Je = Pa;
            }
            A.call(St.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pa) {
            Je = Pa;
          }
          A();
        }
      } catch (Pa) {
        if (Pa && Je && typeof Pa.stack == "string") {
          for (var gt = Pa.stack.split(`
`), Rn = Je.stack.split(`
`), an = gt.length - 1, ln = Rn.length - 1; an >= 1 && ln >= 0 && gt[an] !== Rn[ln]; )
            ln--;
          for (; an >= 1 && ln >= 0; an--, ln--)
            if (gt[an] !== Rn[ln]) {
              if (an !== 1 || ln !== 1)
                do
                  if (an--, ln--, ln < 0 || gt[an] !== Rn[ln]) {
                    var bn = `
` + gt[an].replace(" at new ", " at ");
                    return A.displayName && bn.includes("<anonymous>") && (bn = bn.replace("<anonymous>", A.displayName)), typeof A == "function" && cn.set(A, bn), bn;
                  }
                while (an >= 1 && ln >= 0);
              break;
            }
        }
      } finally {
        rn = !1, Ct.current = bt, nt(), Error.prepareStackTrace = Ot;
      }
      var ji = A ? A.displayName || A.name : "", xl = ji ? st(ji) : "";
      return typeof A == "function" && cn.set(A, xl), xl;
    }
    function Gt(A, he, we) {
      return Ce(A, !1);
    }
    function fn(A) {
      var he = A.prototype;
      return !!(he && he.isReactComponent);
    }
    function Cn(A, he, we) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Ce(A, fn(A));
      if (typeof A == "string")
        return st(A);
      switch (A) {
        case m:
          return st("Suspense");
        case E:
          return st("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case _:
            return Gt(A.render);
          case T:
            return Cn(A.type, he, we);
          case w: {
            var Je = A, Ot = Je._payload, bt = Je._init;
            try {
              return Cn(bt(Ot), he, we);
            } catch {
            }
          }
        }
      return "";
    }
    var ar = Object.prototype.hasOwnProperty, ir = {}, Qn = I.ReactDebugCurrentFrame;
    function Ee(A) {
      if (A) {
        var he = A._owner, we = Cn(A.type, A._source, he ? he.type : null);
        Qn.setExtraStackFrame(we);
      } else
        Qn.setExtraStackFrame(null);
    }
    function Me(A, he, we, Je, Ot) {
      {
        var bt = Function.call.bind(ar);
        for (var St in A)
          if (bt(A, St)) {
            var gt = void 0;
            try {
              if (typeof A[St] != "function") {
                var Rn = Error((Je || "React class") + ": " + we + " type `" + St + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[St] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              gt = A[St](he, St, Je, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              gt = an;
            }
            gt && !(gt instanceof Error) && (Ee(Ot), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Je || "React class", we, St, typeof gt), Ee(null)), gt instanceof Error && !(gt.message in ir) && (ir[gt.message] = !0, Ee(Ot), j("Failed %s type: %s", we, gt.message), Ee(null));
          }
      }
    }
    var dt = Array.isArray;
    function Ke(A) {
      return dt(A);
    }
    function Wt(A) {
      {
        var he = typeof Symbol == "function" && Symbol.toStringTag, we = he && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return we;
      }
    }
    function _n(A) {
      try {
        return Oa(A), !1;
      } catch {
        return !0;
      }
    }
    function Oa(A) {
      return "" + A;
    }
    function pa(A) {
      if (_n(A))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wt(A)), Oa(A);
    }
    var Cr = I.ReactCurrentOwner, Gi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Za, $l, be;
    be = {};
    function rt(A) {
      if (ar.call(A, "ref")) {
        var he = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (he && he.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function yt(A) {
      if (ar.call(A, "key")) {
        var he = Object.getOwnPropertyDescriptor(A, "key").get;
        if (he && he.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function $e(A, he) {
      if (typeof A.ref == "string" && Cr.current && he && Cr.current.stateNode !== he) {
        var we = pe(Cr.current.type);
        be[we] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', pe(Cr.current.type), A.ref), be[we] = !0);
      }
    }
    function En(A, he) {
      {
        var we = function() {
          Za || (Za = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", he));
        };
        we.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function Er(A, he) {
      {
        var we = function() {
          $l || ($l = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", he));
        };
        we.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var Ye = function(A, he, we, Je, Ot, bt, St) {
      var gt = {
        $$typeof: e,
        type: A,
        key: he,
        ref: we,
        props: St,
        _owner: bt
      };
      return gt._store = {}, Object.defineProperty(gt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(gt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.defineProperty(gt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ot
      }), Object.freeze && (Object.freeze(gt.props), Object.freeze(gt)), gt;
    };
    function Ge(A, he, we, Je, Ot) {
      {
        var bt, St = {}, gt = null, Rn = null;
        we !== void 0 && (pa(we), gt = "" + we), yt(he) && (pa(he.key), gt = "" + he.key), rt(he) && (Rn = he.ref, $e(he, Ot));
        for (bt in he)
          ar.call(he, bt) && !Gi.hasOwnProperty(bt) && (St[bt] = he[bt]);
        if (A && A.defaultProps) {
          var an = A.defaultProps;
          for (bt in an)
            St[bt] === void 0 && (St[bt] = an[bt]);
        }
        if (gt || Rn) {
          var ln = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          gt && En(St, ln), Rn && Er(St, ln);
        }
        return Ye(A, gt, Rn, Ot, Je, Cr.current, St);
      }
    }
    var pn = I.ReactCurrentOwner, Xt = I.ReactDebugCurrentFrame;
    function pt(A) {
      if (A) {
        var he = A._owner, we = Cn(A.type, A._source, he ? he.type : null);
        Xt.setExtraStackFrame(we);
      } else
        Xt.setExtraStackFrame(null);
    }
    var ma;
    ma = !1;
    function hi(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function yl() {
      {
        if (pn.current) {
          var A = pe(pn.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Dt(A) {
      {
        if (A !== void 0) {
          var he = A.fileName.replace(/^.*[\\\/]/, ""), we = A.lineNumber;
          return `

Check your code at ` + he + ":" + we + ".";
        }
        return "";
      }
    }
    var ga = {};
    function ya(A) {
      {
        var he = yl();
        if (!he) {
          var we = typeof A == "string" ? A : A.displayName || A.name;
          we && (he = `

Check the top-level render call using <` + we + ">.");
        }
        return he;
      }
    }
    function La(A, he) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var we = ya(he);
        if (ga[we])
          return;
        ga[we] = !0;
        var Je = "";
        A && A._owner && A._owner !== pn.current && (Je = " It was passed a child from " + pe(A._owner.type) + "."), pt(A), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Je), pt(null);
      }
    }
    function Mr(A, he) {
      {
        if (typeof A != "object")
          return;
        if (Ke(A))
          for (var we = 0; we < A.length; we++) {
            var Je = A[we];
            hi(Je) && La(Je, he);
          }
        else if (hi(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var Ot = k(A);
          if (typeof Ot == "function" && Ot !== A.entries)
            for (var bt = Ot.call(A), St; !(St = bt.next()).done; )
              hi(St.value) && La(St.value, he);
        }
      }
    }
    function Aa(A) {
      {
        var he = A.type;
        if (he == null || typeof he == "string")
          return;
        var we;
        if (typeof he == "function")
          we = he.propTypes;
        else if (typeof he == "object" && (he.$$typeof === _ || he.$$typeof === T))
          we = he.propTypes;
        else
          return;
        if (we) {
          var Je = pe(he);
          Me(we, A.props, "prop", Je, A);
        } else if (he.PropTypes !== void 0 && !ma) {
          ma = !0;
          var Ot = pe(he);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ot || "Unknown");
        }
        typeof he.getDefaultProps == "function" && !he.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pi(A) {
      {
        for (var he = Object.keys(A.props), we = 0; we < he.length; we++) {
          var Je = he[we];
          if (Je !== "children" && Je !== "key") {
            pt(A), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Je), pt(null);
            break;
          }
        }
        A.ref !== null && (pt(A), j("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    function Sl(A, he, we, Je, Ot, bt) {
      {
        var St = Q(A);
        if (!St) {
          var gt = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (gt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = Dt(Ot);
          Rn ? gt += Rn : gt += yl();
          var an;
          A === null ? an = "null" : Ke(A) ? an = "array" : A !== void 0 && A.$$typeof === e ? (an = "<" + (pe(A.type) || "Unknown") + " />", gt = " Did you accidentally export a JSX literal instead of a component?") : an = typeof A, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, gt);
        }
        var ln = Ge(A, he, we, Ot, bt);
        if (ln == null)
          return ln;
        if (St) {
          var bn = he.children;
          if (bn !== void 0)
            if (Je)
              if (Ke(bn)) {
                for (var ji = 0; ji < bn.length; ji++)
                  Mr(bn[ji], A);
                Object.freeze && Object.freeze(bn);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mr(bn, A);
        }
        return A === s ? pi(ln) : Aa(ln), ln;
      }
    }
    function Fo(A, he, we) {
      return Sl(A, he, we, !0);
    }
    function qs(A, he, we) {
      return Sl(A, he, we, !1);
    }
    var _l = qs, lr = Fo;
    jf.Fragment = s, jf.jsx = _l, jf.jsxs = lr;
  }()), jf;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = T3() : o.exports = R3();
})(b3);
const OS = ld.Fragment, vt = ld.jsx, Na = ld.jsxs;
var LS = Yt.createContext({
  width: 0,
  height: 0,
  pencilConfig: {
    stroke: "#df4b26",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round"
  },
  blurConfig: {
    stroke: "#fff",
    strokeWidth: 40,
    lineCap: "round",
    lineJoin: "round"
  },
  textConfig: {
    fill: "#df4b26",
    fontSize: 30,
    width: 300
  },
  editorColors: [
    "#FF2A1A",
    "#000000",
    "#999999",
    "#FF9416",
    "#F7673D",
    "#F9CA5A",
    "#19A049",
    "#24A8D0"
  ],
  activeTool: null,
  changeColor: function() {
  },
  handleSelectTool: function() {
  }
}), uc = function() {
  var o = Lo(LS);
  return o;
}, w3 = function(o) {
  var e = o.width, a = e === void 0 ? 0 : e, s = o.height, u = s === void 0 ? 0 : s, d = o.editorColors, v = d === void 0 ? [
    "#FF2A1A",
    "#000000",
    "#999999",
    "#FF9416",
    "#F7673D",
    "#F9CA5A",
    "#19A049",
    "#24A8D0"
  ] : d, g = o.blurConfig, _ = g === void 0 ? {
    stroke: "#eaeaeaeb",
    strokeWidth: 30,
    lineCap: "round",
    lineJoin: "round"
  } : g, m = o.children, E = Fi({
    stroke: v[0],
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round"
  }), T = E[0], w = E[1], M = Fi({
    fontSize: 30,
    fill: v[0],
    wrap: "word",
    width: a * 0.9
  }), R = M[0], z = M[1], k = Fi(null), I = k[0], j = k[1], G = function(U) {
    j(function(V) {
      return V === U ? null : U;
    });
  }, Z = function(U) {
    w(function(V) {
      return ot({}, Object.assign(V, {
        stroke: U
      }));
    }), z(function(V) {
      return ot({}, Object.assign(V, {
        fill: U
      }));
    });
  };
  return vt(LS.Provider, ot({ value: {
    width: a,
    height: u,
    pencilConfig: T,
    blurConfig: _,
    textConfig: R,
    editorColors: v,
    activeTool: I,
    changeColor: Z,
    handleSelectTool: G
  } }, { children: m }));
}, e0 = function(o, e, a, s) {
  var u = o / e, d = a / s;
  return u < d ? [u * s, s] : [a, 1 / u * a];
}, AS = function(o, e, a) {
  var s = a * (Math.PI / 180), u = o * Math.cos(s) - e * Math.sin(s), d = o * Math.sin(s) + e * Math.cos(s);
  return [u, d];
}, PS = function(o, e) {
  return Math.sqrt(Math.pow(e.x - o.x, 2) + Math.pow(e.y - o.y, 2));
}, D3 = function(o, e) {
  return {
    x: (o.x + e.x) / 2,
    y: (o.y + e.y) / 2
  };
}, a2 = function(o, e, a) {
  var s = a / 90 % 4 + 1;
  switch (s) {
    case 1:
      return [o, e];
    case 2:
      return [e, -o];
    case 3:
      return [-o, -e];
    case 4:
      return [-e, o];
    default:
      return [o, e];
  }
}, N3 = function(o, e, a) {
  var s = document.createElement("canvas");
  s.width = e, s.height = a;
  var u = s.getContext("2d");
  return u.drawImage(o, 0, 0, e, a), u.getImageData(0, 0, e, a);
}, kS = {};
Object.defineProperty(kS, "__esModule", { value: !0 });
var M3 = function(e) {
  for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = e.length, u = a ^ s, d = 0, v = void 0; s >= 4; )
    v = e.charCodeAt(d) & 255 | (e.charCodeAt(++d) & 255) << 8 | (e.charCodeAt(++d) & 255) << 16 | (e.charCodeAt(++d) & 255) << 24, v = (v & 65535) * 1540483477 + (((v >>> 16) * 1540483477 & 65535) << 16), v ^= v >>> 24, v = (v & 65535) * 1540483477 + (((v >>> 16) * 1540483477 & 65535) << 16), u = (u & 65535) * 1540483477 + (((u >>> 16) * 1540483477 & 65535) << 16) ^ v, s -= 4, ++d;
  switch (s) {
    case 3:
      u ^= (e.charCodeAt(d + 2) & 255) << 16;
    case 2:
      u ^= (e.charCodeAt(d + 1) & 255) << 8;
    case 1:
      u ^= e.charCodeAt(d) & 255, u = (u & 65535) * 1540483477 + (((u >>> 16) * 1540483477 & 65535) << 16);
  }
  return u ^= u >>> 13, u = (u & 65535) * 1540483477 + (((u >>> 16) * 1540483477 & 65535) << 16), u ^= u >>> 15, u >>> 0;
}, O3 = M3, L3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
  return typeof o;
} : function(o) {
  return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};
function A3(o) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, a = /* @__PURE__ */ new Set(), s = JSON.stringify(o, function(u, d) {
    return (typeof d > "u" ? "undefined" : L3(d)) === "object" && d !== null ? a.has(d) ? void 0 : a.add(d) && d : d;
  }, e);
  return a = null, s;
}
var i2 = Object.assign || function(o) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e];
    for (var s in a)
      Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
  }
  return o;
};
function P3(o) {
  if (Array.isArray(o)) {
    for (var e = 0, a = Array(o.length); e < o.length; e++)
      a[e] = o[e];
    return a;
  } else
    return Array.from(o);
}
var zS = {
  toRecord: function(e) {
    return {
      chunks: [i2({}, e, { children: void 0 })],
      children: e.children
    };
  },
  fromRecord: function(e) {
    var a = e.chunks, s = e.children;
    return i2({}, a[0], { children: s });
  }
}, k3 = function o(e, a) {
  for (var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1, v = s.findIndex(function(I) {
    var j = I.match;
    return j(e);
  }), g = s[v] || zS, _ = g.toRecord(e), m = _.chunks, E = _.children, T = E, w = [], M = 0; M < m.length; M++) {
    var R = A3(m[M], 0), z = O3(R);
    w.push(z), a[z] = R;
  }
  if (d !== -1 && Array.isArray(u && u.children)) {
    var k = [].concat(P3(u.children));
    return k[d] = o(T[d], a, s), { hashes: w, ruleIndex: v, children: k };
  } else
    return {
      hashes: w,
      ruleIndex: v,
      children: E && E.map(function(I) {
        return o(I, a, s);
      })
    };
}, z3 = function o(e, a) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], u = e.hashes, d = e.ruleIndex, v = e.children, g = u.map(function(m) {
    return JSON.parse(a[m]);
  }), _ = s[d] || zS;
  return _.fromRecord({
    chunks: g,
    children: v && v.map(function(m) {
      return o(m, a, s);
    })
  });
}, U3 = function() {
  function o(e, a) {
    for (var s = 0; s < a.length; s++) {
      var u = a[s];
      u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(e, u.key, u);
    }
  }
  return function(e, a, s) {
    return a && o(e.prototype, a), s && o(e, s), e;
  };
}();
function F3(o, e) {
  if (!(o instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var l2 = function() {
}, H3 = function() {
  function o() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      initialState: void 0,
      rules: [],
      delay: 50,
      maxLength: 100,
      onChange: l2,
      useChunks: !0
    };
    F3(this, o), this.rules = e.rules || [], this.delay = e.delay || 50, this.maxLength = e.maxLength || 100, this.useChunks = e.useChunks === void 0 ? !0 : e.useChunks, this.onChange = l2, this.$index = -1, this.$records = [], this.$chunks = {}, this.$pending = {
      state: null,
      pickIndex: null,
      onResolves: [],
      timer: null
    }, this.$debounceTime = null, e.initialState !== void 0 && this.pushSync(e.initialState), e.onChange && (this.onChange = e.onChange);
  }
  return U3(o, [{
    key: "get",
    value: function() {
      var a = this.$records[this.$index], s = void 0;
      return a ? this.useChunks ? s = z3(a, this.$chunks, this.rules) : s = a : s = null, this.onChange(s), s;
    }
  }, {
    key: "pushSync",
    value: function(a) {
      var s = this, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, d = this.$records[this.$index] || null, v = this.useChunks ? k3(a, this.$chunks, this.rules, d, u) : a;
      this.$index++, this.$records[this.$index] = v;
      for (var g = this.$index + 1; g < this.$records.length; g++)
        this.$records[g] = null;
      return this.$index >= this.maxLength && (this.$records[this.$index - this.maxLength] = null), this.$pending.timer && (clearTimeout(this.$pending.timer), this.$pending.state = null, this.$pending.pickIndex = null, this.$pending.timer = null, this.$debounceTime = null, this.$pending.onResolves.forEach(function(_) {
        return _(s);
      }), this.$pending.onResolves = []), this.onChange(a), this;
    }
  }, {
    key: "push",
    value: function(a) {
      var s = this, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, d = +new Date(), v = function() {
        s.$pending.state = a, s.$pending.pickIndex = u, s.$debounceTime = d;
        var _ = new Promise(function(m, E) {
          s.$pending.onResolves.push(m), s.$pending.timer = setTimeout(function() {
            s.pushSync(s.$pending.state, s.$pending.pickIndex);
          }, s.delay);
        });
        return _;
      };
      return this.$pending.timer === null ? v() : d - this.$debounceTime < this.delay ? (clearTimeout(this.$pending.timer), this.$pending.timer = null, v()) : Promise.reject(new Error("Invalid push ops"));
    }
  }, {
    key: "undo",
    value: function() {
      return this.hasUndo && this.$index--, this;
    }
  }, {
    key: "redo",
    value: function() {
      return this.hasRedo && this.$index++, this;
    }
  }, {
    key: "reset",
    value: function() {
      var a = this;
      return this.$index = -1, this.$records.forEach(function(s) {
      }), Object.keys(this.$chunks).forEach(function(s) {
        a.$chunks[s] = null;
      }), this.$records = [], this.$chunks = {}, clearTimeout(this.$pending.timer), this.$pending = {
        state: null,
        pickIndex: null,
        onResolves: [],
        timer: null
      }, this.$debounceTime = null, this;
    }
  }, {
    key: "hasRedo",
    get: function() {
      if (this.$index === this.$records.length - 1)
        return !1;
      for (var a = !1, s = this.$index + 1; s < this.$records.length; s++)
        this.$records[s] !== null && (a = !0);
      return a;
    }
  }, {
    key: "hasUndo",
    get: function() {
      var a = Math.max(this.$records.length - this.maxLength, 0);
      return this.$index > a;
    }
  }, {
    key: "length",
    get: function() {
      return Math.min(this.$records.length, this.maxLength);
    }
  }]), o;
}(), G3 = kS.History = H3, Do = Yt, j3 = function(e, a, s) {
  const u = Do.useRef("loading"), d = Do.useRef(), [v, g] = Do.useState(0), _ = Do.useRef(), m = Do.useRef(), E = Do.useRef();
  return (_.current !== e || m.current !== a || E.current !== s) && (u.current = "loading", d.current = void 0, _.current = e, m.current = a, E.current = s), Do.useLayoutEffect(
    function() {
      if (!e)
        return;
      var T = document.createElement("img");
      function w() {
        u.current = "loaded", d.current = T, g(Math.random());
      }
      function M() {
        u.current = "failed", d.current = void 0, g(Math.random());
      }
      return T.addEventListener("load", w), T.addEventListener("error", M), a && (T.crossOrigin = a), s && (T.referrerpolicy = s), T.src = e, function() {
        T.removeEventListener("load", w), T.removeEventListener("error", M);
      };
    },
    [e, a, s]
  ), [d.current, u.current];
}, US = Yt.createContext({
  image: null,
  group: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    rotation: 0
  },
  clipRect: {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  },
  texts: [],
  lines: [],
  blurs: [],
  setLines: function() {
  },
  setTexts: function() {
  },
  setImage: function() {
  },
  setGroup: function() {
  },
  setBlurs: function() {
  },
  redo: function() {
  },
  undo: function() {
  }
}), Gv = function() {
  var o = Lo(US);
  return o;
}, B3 = function(o) {
  var e = o.children, a = o.image, s = uc(), u = s.width, d = s.height, v = Fi({
    group: {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      rotation: 0
    },
    clipRect: {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    },
    lines: [],
    texts: [],
    blurs: []
  }), g = v[0], _ = v[1], m = Fi(!1), E = m[0], T = m[1], w = Ln(g);
  w.current = g;
  var M = j3(a), R = M[0], z = M[1], k = function(ee) {
    _(ee), w.current = ee;
  }, I = Ln(), j = function(ee) {
    var Q;
    (Q = I.current) === null || Q === void 0 || Q.pushSync(ot(ot({}, w.current), { lines: ee(w.current.lines) }));
  }, G = function(ee) {
    var Q;
    (Q = I.current) === null || Q === void 0 || Q.pushSync(ot(ot({}, w.current), { blurs: ee(w.current.blurs) }));
  }, Z = function(ee) {
    var Q;
    (Q = I.current) === null || Q === void 0 || Q.pushSync(ot(ot({}, w.current), { texts: ee(w.current.texts) }));
  }, U = function(ee, Q) {
    var K;
    (K = I.current) === null || K === void 0 || K.pushSync(ot(ot({}, w.current), { clipRect: Object.assign({}, w.current.clipRect, ee), group: Object.assign({}, w.current.group, { rotation: Q }) }));
  }, V = function(ee) {
    var Q;
    (Q = I.current) === null || Q === void 0 || Q.pushSync(ot(ot({}, w.current), { group: Object.assign({}, w.current.group, ee) }));
  }, X = function() {
    var ee, Q;
    !((ee = I.current) === null || ee === void 0) && ee.hasRedo && ((Q = I.current) === null || Q === void 0 || Q.redo().get());
  }, le = function() {
    var ee, Q;
    !((ee = I.current) === null || ee === void 0) && ee.hasUndo && ((Q = I.current) === null || Q === void 0 || Q.undo().get());
  };
  return Hv(function() {
    if (z === "loaded" && R) {
      var ee = e0(R.width, R.height, u, d), Q = ee[0], K = ee[1];
      I.current = new G3({
        initialState: ot(ot({}, w.current), { image: R, group: {
          width: Q,
          height: K,
          x: 0,
          y: 0,
          rotation: 0
        }, clipRect: {
          width: Q,
          height: K,
          x: 0,
          y: 0
        } }),
        delay: 0,
        onChange: k
      }), _(function(xe) {
        return ot(ot({}, xe), { group: {
          width: Q,
          height: K,
          x: 0,
          y: 0,
          rotation: 0
        }, clipRect: {
          width: Q,
          height: K,
          x: 0,
          y: 0
        } });
      }), T(!0);
    }
  }, [z]), vt(US.Provider, ot({ value: ot(ot({}, g), { image: R, setGroup: V, setLines: j, setBlurs: G, setTexts: Z, setImage: U, redo: X, undo: le }) }, { children: E && e }));
}, I3 = Math.PI / 180;
function V3() {
  return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
}
const rc = typeof global < "u" ? global : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, Be = {
  _global: rc,
  version: "8.3.14",
  isBrowser: V3(),
  isUnminified: /param/.test(function(o) {
  }.toString()),
  dblClickWindow: 400,
  getAngle(o) {
    return Be.angleDeg ? o * I3 : o;
  },
  enableTrace: !1,
  pointerEventsEnabled: !0,
  autoDrawEnabled: !0,
  hitOnDragEnabled: !1,
  capturePointerEventsEnabled: !1,
  _mouseListenClick: !1,
  _touchListenClick: !1,
  _pointerListenClick: !1,
  _mouseInDblClickWindow: !1,
  _touchInDblClickWindow: !1,
  _pointerInDblClickWindow: !1,
  _mouseDblClickPointerId: null,
  _touchDblClickPointerId: null,
  _pointerDblClickPointerId: null,
  pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
  dragDistance: 3,
  angleDeg: !0,
  showWarnings: !0,
  dragButtons: [0, 1],
  isDragging() {
    return Be.DD.isDragging;
  },
  isDragReady() {
    return !!Be.DD.node;
  },
  releaseCanvasOnDestroy: !0,
  document: rc.document,
  _injectGlobal(o) {
    rc.Konva = o;
  }
}, Pn = (o) => {
  Be[o.prototype.getClassName()] = o;
};
Be._injectGlobal(Be);
class Qa {
  constructor(e = [1, 0, 0, 1, 0, 0]) {
    this.dirty = !1, this.m = e && e.slice() || [1, 0, 0, 1, 0, 0];
  }
  reset() {
    this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
  }
  copy() {
    return new Qa(this.m);
  }
  copyInto(e) {
    e.m[0] = this.m[0], e.m[1] = this.m[1], e.m[2] = this.m[2], e.m[3] = this.m[3], e.m[4] = this.m[4], e.m[5] = this.m[5];
  }
  point(e) {
    var a = this.m;
    return {
      x: a[0] * e.x + a[2] * e.y + a[4],
      y: a[1] * e.x + a[3] * e.y + a[5]
    };
  }
  translate(e, a) {
    return this.m[4] += this.m[0] * e + this.m[2] * a, this.m[5] += this.m[1] * e + this.m[3] * a, this;
  }
  scale(e, a) {
    return this.m[0] *= e, this.m[1] *= e, this.m[2] *= a, this.m[3] *= a, this;
  }
  rotate(e) {
    var a = Math.cos(e), s = Math.sin(e), u = this.m[0] * a + this.m[2] * s, d = this.m[1] * a + this.m[3] * s, v = this.m[0] * -s + this.m[2] * a, g = this.m[1] * -s + this.m[3] * a;
    return this.m[0] = u, this.m[1] = d, this.m[2] = v, this.m[3] = g, this;
  }
  getTranslation() {
    return {
      x: this.m[4],
      y: this.m[5]
    };
  }
  skew(e, a) {
    var s = this.m[0] + this.m[2] * a, u = this.m[1] + this.m[3] * a, d = this.m[2] + this.m[0] * e, v = this.m[3] + this.m[1] * e;
    return this.m[0] = s, this.m[1] = u, this.m[2] = d, this.m[3] = v, this;
  }
  multiply(e) {
    var a = this.m[0] * e.m[0] + this.m[2] * e.m[1], s = this.m[1] * e.m[0] + this.m[3] * e.m[1], u = this.m[0] * e.m[2] + this.m[2] * e.m[3], d = this.m[1] * e.m[2] + this.m[3] * e.m[3], v = this.m[0] * e.m[4] + this.m[2] * e.m[5] + this.m[4], g = this.m[1] * e.m[4] + this.m[3] * e.m[5] + this.m[5];
    return this.m[0] = a, this.m[1] = s, this.m[2] = u, this.m[3] = d, this.m[4] = v, this.m[5] = g, this;
  }
  invert() {
    var e = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), a = this.m[3] * e, s = -this.m[1] * e, u = -this.m[2] * e, d = this.m[0] * e, v = e * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), g = e * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    return this.m[0] = a, this.m[1] = s, this.m[2] = u, this.m[3] = d, this.m[4] = v, this.m[5] = g, this;
  }
  getMatrix() {
    return this.m;
  }
  decompose() {
    var e = this.m[0], a = this.m[1], s = this.m[2], u = this.m[3], d = this.m[4], v = this.m[5], g = e * u - a * s;
    let _ = {
      x: d,
      y: v,
      rotation: 0,
      scaleX: 0,
      scaleY: 0,
      skewX: 0,
      skewY: 0
    };
    if (e != 0 || a != 0) {
      var m = Math.sqrt(e * e + a * a);
      _.rotation = a > 0 ? Math.acos(e / m) : -Math.acos(e / m), _.scaleX = m, _.scaleY = g / m, _.skewX = (e * s + a * u) / g, _.skewY = 0;
    } else if (s != 0 || u != 0) {
      var E = Math.sqrt(s * s + u * u);
      _.rotation = Math.PI / 2 - (u > 0 ? Math.acos(-s / E) : -Math.acos(s / E)), _.scaleX = g / E, _.scaleY = E, _.skewX = 0, _.skewY = (e * s + a * u) / g;
    }
    return _.rotation = B._getRotation(_.rotation), _;
  }
}
var Y3 = "[object Array]", q3 = "[object Number]", W3 = "[object String]", X3 = "[object Boolean]", Q3 = Math.PI / 180, K3 = 180 / Math.PI, bg = "#", J3 = "", Z3 = "0", $3 = "Konva warning: ", s2 = "Konva error: ", e5 = "rgb(", Tg = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  transparent: [255, 255, 255, 0],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
}, t5 = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, vv = [];
const n5 = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(o) {
  setTimeout(o, 60);
}, B = {
  _isElement(o) {
    return !!(o && o.nodeType == 1);
  },
  _isFunction(o) {
    return !!(o && o.constructor && o.call && o.apply);
  },
  _isPlainObject(o) {
    return !!o && o.constructor === Object;
  },
  _isArray(o) {
    return Object.prototype.toString.call(o) === Y3;
  },
  _isNumber(o) {
    return Object.prototype.toString.call(o) === q3 && !isNaN(o) && isFinite(o);
  },
  _isString(o) {
    return Object.prototype.toString.call(o) === W3;
  },
  _isBoolean(o) {
    return Object.prototype.toString.call(o) === X3;
  },
  isObject(o) {
    return o instanceof Object;
  },
  isValidSelector(o) {
    if (typeof o != "string")
      return !1;
    var e = o[0];
    return e === "#" || e === "." || e === e.toUpperCase();
  },
  _sign(o) {
    return o === 0 || o > 0 ? 1 : -1;
  },
  requestAnimFrame(o) {
    vv.push(o), vv.length === 1 && n5(function() {
      const e = vv;
      vv = [], e.forEach(function(a) {
        a();
      });
    });
  },
  createCanvasElement() {
    var o = document.createElement("canvas");
    try {
      o.style = o.style || {};
    } catch {
    }
    return o;
  },
  createImageElement() {
    return document.createElement("img");
  },
  _isInDocument(o) {
    for (; o = o.parentNode; )
      if (o == document)
        return !0;
    return !1;
  },
  _urlToImage(o, e) {
    var a = B.createImageElement();
    a.onload = function() {
      e(a);
    }, a.src = o;
  },
  _rgbToHex(o, e, a) {
    return ((1 << 24) + (o << 16) + (e << 8) + a).toString(16).slice(1);
  },
  _hexToRgb(o) {
    o = o.replace(bg, J3);
    var e = parseInt(o, 16);
    return {
      r: e >> 16 & 255,
      g: e >> 8 & 255,
      b: e & 255
    };
  },
  getRandomColor() {
    for (var o = (Math.random() * 16777215 << 0).toString(16); o.length < 6; )
      o = Z3 + o;
    return bg + o;
  },
  getRGB(o) {
    var e;
    return o in Tg ? (e = Tg[o], {
      r: e[0],
      g: e[1],
      b: e[2]
    }) : o[0] === bg ? this._hexToRgb(o.substring(1)) : o.substr(0, 4) === e5 ? (e = t5.exec(o.replace(/ /g, "")), {
      r: parseInt(e[1], 10),
      g: parseInt(e[2], 10),
      b: parseInt(e[3], 10)
    }) : {
      r: 0,
      g: 0,
      b: 0
    };
  },
  colorToRGBA(o) {
    return o = o || "black", B._namedColorToRBA(o) || B._hex3ColorToRGBA(o) || B._hex6ColorToRGBA(o) || B._rgbColorToRGBA(o) || B._rgbaColorToRGBA(o) || B._hslColorToRGBA(o);
  },
  _namedColorToRBA(o) {
    var e = Tg[o.toLowerCase()];
    return e ? {
      r: e[0],
      g: e[1],
      b: e[2],
      a: 1
    } : null;
  },
  _rgbColorToRGBA(o) {
    if (o.indexOf("rgb(") === 0) {
      o = o.match(/rgb\(([^)]+)\)/)[1];
      var e = o.split(/ *, */).map(Number);
      return {
        r: e[0],
        g: e[1],
        b: e[2],
        a: 1
      };
    }
  },
  _rgbaColorToRGBA(o) {
    if (o.indexOf("rgba(") === 0) {
      o = o.match(/rgba\(([^)]+)\)/)[1];
      var e = o.split(/ *, */).map((a, s) => a.slice(-1) === "%" ? s === 3 ? parseInt(a) / 100 : parseInt(a) / 100 * 255 : Number(a));
      return {
        r: e[0],
        g: e[1],
        b: e[2],
        a: e[3]
      };
    }
  },
  _hex6ColorToRGBA(o) {
    if (o[0] === "#" && o.length === 7)
      return {
        r: parseInt(o.slice(1, 3), 16),
        g: parseInt(o.slice(3, 5), 16),
        b: parseInt(o.slice(5, 7), 16),
        a: 1
      };
  },
  _hex3ColorToRGBA(o) {
    if (o[0] === "#" && o.length === 4)
      return {
        r: parseInt(o[1] + o[1], 16),
        g: parseInt(o[2] + o[2], 16),
        b: parseInt(o[3] + o[3], 16),
        a: 1
      };
  },
  _hslColorToRGBA(o) {
    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(o)) {
      const [e, ...a] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(o), s = Number(a[0]) / 360, u = Number(a[1]) / 100, d = Number(a[2]) / 100;
      let v, g, _;
      if (u === 0)
        return _ = d * 255, {
          r: Math.round(_),
          g: Math.round(_),
          b: Math.round(_),
          a: 1
        };
      d < 0.5 ? v = d * (1 + u) : v = d + u - d * u;
      const m = 2 * d - v, E = [0, 0, 0];
      for (let T = 0; T < 3; T++)
        g = s + 1 / 3 * -(T - 1), g < 0 && g++, g > 1 && g--, 6 * g < 1 ? _ = m + (v - m) * 6 * g : 2 * g < 1 ? _ = v : 3 * g < 2 ? _ = m + (v - m) * (2 / 3 - g) * 6 : _ = m, E[T] = _ * 255;
      return {
        r: Math.round(E[0]),
        g: Math.round(E[1]),
        b: Math.round(E[2]),
        a: 1
      };
    }
  },
  haveIntersection(o, e) {
    return !(e.x > o.x + o.width || e.x + e.width < o.x || e.y > o.y + o.height || e.y + e.height < o.y);
  },
  cloneObject(o) {
    var e = {};
    for (var a in o)
      this._isPlainObject(o[a]) ? e[a] = this.cloneObject(o[a]) : this._isArray(o[a]) ? e[a] = this.cloneArray(o[a]) : e[a] = o[a];
    return e;
  },
  cloneArray(o) {
    return o.slice(0);
  },
  degToRad(o) {
    return o * Q3;
  },
  radToDeg(o) {
    return o * K3;
  },
  _degToRad(o) {
    return B.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), B.degToRad(o);
  },
  _radToDeg(o) {
    return B.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), B.radToDeg(o);
  },
  _getRotation(o) {
    return Be.angleDeg ? B.radToDeg(o) : o;
  },
  _capitalize(o) {
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  throw(o) {
    throw new Error(s2 + o);
  },
  error(o) {
    console.error(s2 + o);
  },
  warn(o) {
    Be.showWarnings && console.warn($3 + o);
  },
  each(o, e) {
    for (var a in o)
      e(a, o[a]);
  },
  _inRange(o, e, a) {
    return e <= o && o < a;
  },
  _getProjectionToSegment(o, e, a, s, u, d) {
    var v, g, _, m = (o - a) * (o - a) + (e - s) * (e - s);
    if (m == 0)
      v = o, g = e, _ = (u - a) * (u - a) + (d - s) * (d - s);
    else {
      var E = ((u - o) * (a - o) + (d - e) * (s - e)) / m;
      E < 0 ? (v = o, g = e, _ = (o - u) * (o - u) + (e - d) * (e - d)) : E > 1 ? (v = a, g = s, _ = (a - u) * (a - u) + (s - d) * (s - d)) : (v = o + E * (a - o), g = e + E * (s - e), _ = (v - u) * (v - u) + (g - d) * (g - d));
    }
    return [v, g, _];
  },
  _getProjectionToLine(o, e, a) {
    var s = B.cloneObject(o), u = Number.MAX_VALUE;
    return e.forEach(function(d, v) {
      if (!(!a && v === e.length - 1)) {
        var g = e[(v + 1) % e.length], _ = B._getProjectionToSegment(d.x, d.y, g.x, g.y, o.x, o.y), m = _[0], E = _[1], T = _[2];
        T < u && (s.x = m, s.y = E, u = T);
      }
    }), s;
  },
  _prepareArrayForTween(o, e, a) {
    var s, u = [], d = [];
    if (o.length > e.length) {
      var v = e;
      e = o, o = v;
    }
    for (s = 0; s < o.length; s += 2)
      u.push({
        x: o[s],
        y: o[s + 1]
      });
    for (s = 0; s < e.length; s += 2)
      d.push({
        x: e[s],
        y: e[s + 1]
      });
    var g = [];
    return d.forEach(function(_) {
      var m = B._getProjectionToLine(_, u, a);
      g.push(m.x), g.push(m.y);
    }), g;
  },
  _prepareToStringify(o) {
    var e;
    o.visitedByCircularReferenceRemoval = !0;
    for (var a in o)
      if (o.hasOwnProperty(a) && o[a] && typeof o[a] == "object") {
        if (e = Object.getOwnPropertyDescriptor(o, a), o[a].visitedByCircularReferenceRemoval || B._isElement(o[a]))
          if (e.configurable)
            delete o[a];
          else
            return null;
        else if (B._prepareToStringify(o[a]) === null)
          if (e.configurable)
            delete o[a];
          else
            return null;
      }
    return delete o.visitedByCircularReferenceRemoval, o;
  },
  _assign(o, e) {
    for (var a in e)
      o[a] = e[a];
    return o;
  },
  _getFirstPointerId(o) {
    return o.touches ? o.changedTouches[0].identifier : o.pointerId || 999;
  },
  releaseCanvas(...o) {
    Be.releaseCanvasOnDestroy && o.forEach((e) => {
      e.width = 0, e.height = 0;
    });
  }
};
function Bs(o) {
  return B._isString(o) ? '"' + o + '"' : Object.prototype.toString.call(o) === "[object Number]" || B._isBoolean(o) ? o : Object.prototype.toString.call(o);
}
function FS(o) {
  return o > 255 ? 255 : o < 0 ? 0 : Math.round(o);
}
function ye() {
  if (Be.isUnminified)
    return function(o, e) {
      return B._isNumber(o) || B.warn(Bs(o) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), o;
    };
}
function HS(o) {
  if (Be.isUnminified)
    return function(e, a) {
      let s = B._isNumber(e), u = B._isArray(e) && e.length == o;
      return !s && !u && B.warn(Bs(e) + ' is a not valid value for "' + a + '" attribute. The value should be a number or Array<number>(' + o + ")"), e;
    };
}
function t0() {
  if (Be.isUnminified)
    return function(o, e) {
      var a = B._isNumber(o), s = o === "auto";
      return a || s || B.warn(Bs(o) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), o;
    };
}
function cc() {
  if (Be.isUnminified)
    return function(o, e) {
      return B._isString(o) || B.warn(Bs(o) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), o;
    };
}
function GS() {
  if (Be.isUnminified)
    return function(o, e) {
      const a = B._isString(o), s = Object.prototype.toString.call(o) === "[object CanvasGradient]" || o && o.addColorStop;
      return a || s || B.warn(Bs(o) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), o;
    };
}
function r5() {
  if (Be.isUnminified)
    return function(o, e) {
      const a = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return a && o instanceof a || (B._isArray(o) ? o.forEach(function(s) {
        B._isNumber(s) || B.warn('"' + e + '" attribute has non numeric element ' + s + ". Make sure that all elements are numbers.");
      }) : B.warn(Bs(o) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), o;
    };
}
function Hi() {
  if (Be.isUnminified)
    return function(o, e) {
      var a = o === !0 || o === !1;
      return a || B.warn(Bs(o) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), o;
    };
}
function a5(o) {
  if (Be.isUnminified)
    return function(e, a) {
      return e == null || B.isObject(e) || B.warn(Bs(e) + ' is a not valid value for "' + a + '" attribute. The value should be an object with properties ' + o), e;
    };
}
var Bf = "get", If = "set";
const L = {
  addGetterSetter(o, e, a, s, u) {
    L.addGetter(o, e, a), L.addSetter(o, e, s, u), L.addOverloadedGetterSetter(o, e);
  },
  addGetter(o, e, a) {
    var s = Bf + B._capitalize(e);
    o.prototype[s] = o.prototype[s] || function() {
      var u = this.attrs[e];
      return u === void 0 ? a : u;
    };
  },
  addSetter(o, e, a, s) {
    var u = If + B._capitalize(e);
    o.prototype[u] || L.overWriteSetter(o, e, a, s);
  },
  overWriteSetter(o, e, a, s) {
    var u = If + B._capitalize(e);
    o.prototype[u] = function(d) {
      return a && d !== void 0 && d !== null && (d = a.call(this, d, e)), this._setAttr(e, d), s && s.call(this), this;
    };
  },
  addComponentsGetterSetter(o, e, a, s, u) {
    var d = a.length, v = B._capitalize, g = Bf + v(e), _ = If + v(e), m, E;
    o.prototype[g] = function() {
      var w = {};
      for (m = 0; m < d; m++)
        E = a[m], w[E] = this.getAttr(e + v(E));
      return w;
    };
    var T = a5(a);
    o.prototype[_] = function(w) {
      var M = this.attrs[e], R;
      s && (w = s.call(this, w)), T && T.call(this, w, e);
      for (R in w)
        w.hasOwnProperty(R) && this._setAttr(e + v(R), w[R]);
      return w || a.forEach((z) => {
        this._setAttr(e + v(z), void 0);
      }), this._fireChangeEvent(e, M, w), u && u.call(this), this;
    }, L.addOverloadedGetterSetter(o, e);
  },
  addOverloadedGetterSetter(o, e) {
    var a = B._capitalize(e), s = If + a, u = Bf + a;
    o.prototype[e] = function() {
      return arguments.length ? (this[s](arguments[0]), this) : this[u]();
    };
  },
  addDeprecatedGetterSetter(o, e, a, s) {
    B.error("Adding deprecated " + e);
    var u = Bf + B._capitalize(e), d = e + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
    o.prototype[u] = function() {
      B.error(d);
      var v = this.attrs[e];
      return v === void 0 ? a : v;
    }, L.addSetter(o, e, s, function() {
      B.error(d);
    }), L.addOverloadedGetterSetter(o, e);
  },
  backCompat(o, e) {
    B.each(e, function(a, s) {
      var u = o.prototype[s], d = Bf + B._capitalize(a), v = If + B._capitalize(a);
      function g() {
        u.apply(this, arguments), B.error('"' + a + '" method is deprecated and will be removed soon. Use ""' + s + '" instead.');
      }
      o.prototype[a] = g, o.prototype[d] = g, o.prototype[v] = g;
    });
  },
  afterSetFilter() {
    this._filterUpToDate = !1;
  }
};
function i5(o) {
  var e = [], a = o.length, s = B, u, d;
  for (u = 0; u < a; u++)
    d = o[u], s._isNumber(d) ? d = Math.round(d * 1e3) / 1e3 : s._isString(d) || (d = d + ""), e.push(d);
  return e;
}
var o2 = ",", l5 = "(", s5 = ")", o5 = "([", u5 = "])", c5 = ";", f5 = "()", d5 = "=", u2 = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], h5 = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const v5 = 100;
class jv {
  constructor(e) {
    this.canvas = e, Be.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(e) {
    e.fillEnabled() && this._fill(e);
  }
  _fill(e) {
  }
  strokeShape(e) {
    e.hasStroke() && this._stroke(e);
  }
  _stroke(e) {
  }
  fillStrokeShape(e) {
    e.attrs.fillAfterStrokeEnabled ? (this.strokeShape(e), this.fillShape(e)) : (this.fillShape(e), this.strokeShape(e));
  }
  getTrace(e, a) {
    var s = this.traceArr, u = s.length, d = "", v, g, _, m;
    for (v = 0; v < u; v++)
      g = s[v], _ = g.method, _ ? (m = g.args, d += _, e ? d += f5 : B._isArray(m[0]) ? d += o5 + m.join(o2) + u5 : (a && (m = m.map((E) => typeof E == "number" ? Math.floor(E) : E)), d += l5 + m.join(o2) + s5)) : (d += g.property, e || (d += d5 + g.val)), d += c5;
    return d;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(e) {
    var a = this.traceArr, s;
    a.push(e), s = a.length, s >= v5 && a.shift();
  }
  reset() {
    var e = this.getCanvas().getPixelRatio();
    this.setTransform(1 * e, 0, 0, 1 * e, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(e) {
    var a = this.getCanvas();
    e ? this.clearRect(e.x || 0, e.y || 0, e.width || 0, e.height || 0) : this.clearRect(0, 0, a.getWidth() / a.pixelRatio, a.getHeight() / a.pixelRatio);
  }
  _applyLineCap(e) {
    var a = e.getLineCap();
    a && this.setAttr("lineCap", a);
  }
  _applyOpacity(e) {
    var a = e.getAbsoluteOpacity();
    a !== 1 && this.setAttr("globalAlpha", a);
  }
  _applyLineJoin(e) {
    var a = e.attrs.lineJoin;
    a && this.setAttr("lineJoin", a);
  }
  setAttr(e, a) {
    this._context[e] = a;
  }
  arc(e, a, s, u, d, v) {
    this._context.arc(e, a, s, u, d, v);
  }
  arcTo(e, a, s, u, d) {
    this._context.arcTo(e, a, s, u, d);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(e, a, s, u, d, v) {
    this._context.bezierCurveTo(e, a, s, u, d, v);
  }
  clearRect(e, a, s, u) {
    this._context.clearRect(e, a, s, u);
  }
  clip() {
    this._context.clip();
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(e, a) {
    var s = arguments;
    if (s.length === 2)
      return this._context.createImageData(e, a);
    if (s.length === 1)
      return this._context.createImageData(e);
  }
  createLinearGradient(e, a, s, u) {
    return this._context.createLinearGradient(e, a, s, u);
  }
  createPattern(e, a) {
    return this._context.createPattern(e, a);
  }
  createRadialGradient(e, a, s, u, d, v) {
    return this._context.createRadialGradient(e, a, s, u, d, v);
  }
  drawImage(e, a, s, u, d, v, g, _, m) {
    var E = arguments, T = this._context;
    E.length === 3 ? T.drawImage(e, a, s) : E.length === 5 ? T.drawImage(e, a, s, u, d) : E.length === 9 && T.drawImage(e, a, s, u, d, v, g, _, m);
  }
  ellipse(e, a, s, u, d, v, g, _) {
    this._context.ellipse(e, a, s, u, d, v, g, _);
  }
  isPointInPath(e, a) {
    return this._context.isPointInPath(e, a);
  }
  fill(e) {
    e ? this._context.fill(e) : this._context.fill();
  }
  fillRect(e, a, s, u) {
    this._context.fillRect(e, a, s, u);
  }
  strokeRect(e, a, s, u) {
    this._context.strokeRect(e, a, s, u);
  }
  fillText(e, a, s, u) {
    u ? this._context.fillText(e, a, s, u) : this._context.fillText(e, a, s);
  }
  measureText(e) {
    return this._context.measureText(e);
  }
  getImageData(e, a, s, u) {
    return this._context.getImageData(e, a, s, u);
  }
  lineTo(e, a) {
    this._context.lineTo(e, a);
  }
  moveTo(e, a) {
    this._context.moveTo(e, a);
  }
  rect(e, a, s, u) {
    this._context.rect(e, a, s, u);
  }
  putImageData(e, a, s) {
    this._context.putImageData(e, a, s);
  }
  quadraticCurveTo(e, a, s, u) {
    this._context.quadraticCurveTo(e, a, s, u);
  }
  restore() {
    this._context.restore();
  }
  rotate(e) {
    this._context.rotate(e);
  }
  save() {
    this._context.save();
  }
  scale(e, a) {
    this._context.scale(e, a);
  }
  setLineDash(e) {
    this._context.setLineDash ? this._context.setLineDash(e) : "mozDash" in this._context ? this._context.mozDash = e : "webkitLineDash" in this._context && (this._context.webkitLineDash = e);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(e, a, s, u, d, v) {
    this._context.setTransform(e, a, s, u, d, v);
  }
  stroke(e) {
    e ? this._context.stroke(e) : this._context.stroke();
  }
  strokeText(e, a, s, u) {
    this._context.strokeText(e, a, s, u);
  }
  transform(e, a, s, u, d, v) {
    this._context.transform(e, a, s, u, d, v);
  }
  translate(e, a) {
    this._context.translate(e, a);
  }
  _enableTrace() {
    var e = this, a = u2.length, s = this.setAttr, u, d, v = function(g) {
      var _ = e[g], m;
      e[g] = function() {
        return d = i5(Array.prototype.slice.call(arguments, 0)), m = _.apply(e, arguments), e._trace({
          method: g,
          args: d
        }), m;
      };
    };
    for (u = 0; u < a; u++)
      v(u2[u]);
    e.setAttr = function() {
      s.apply(e, arguments);
      var g = arguments[0], _ = arguments[1];
      (g === "shadowOffsetX" || g === "shadowOffsetY" || g === "shadowBlur") && (_ = _ / this.canvas.getPixelRatio()), e._trace({
        property: g,
        val: _
      });
    };
  }
  _applyGlobalCompositeOperation(e) {
    const a = e.attrs.globalCompositeOperation;
    var s = !a || a === "source-over";
    s || this.setAttr("globalCompositeOperation", a);
  }
}
h5.forEach(function(o) {
  Object.defineProperty(jv.prototype, o, {
    get() {
      return this._context[o];
    },
    set(e) {
      this._context[o] = e;
    }
  });
});
class p5 extends jv {
  constructor(e) {
    super(e), this._context = e._canvas.getContext("2d");
  }
  _fillColor(e) {
    var a = e.fill();
    this.setAttr("fillStyle", a), e._fillFunc(this);
  }
  _fillPattern(e) {
    this.setAttr("fillStyle", e._getFillPattern()), e._fillFunc(this);
  }
  _fillLinearGradient(e) {
    var a = e._getLinearGradient();
    a && (this.setAttr("fillStyle", a), e._fillFunc(this));
  }
  _fillRadialGradient(e) {
    var a = e._getRadialGradient();
    a && (this.setAttr("fillStyle", a), e._fillFunc(this));
  }
  _fill(e) {
    var a = e.fill(), s = e.getFillPriority();
    if (a && s === "color") {
      this._fillColor(e);
      return;
    }
    var u = e.getFillPatternImage();
    if (u && s === "pattern") {
      this._fillPattern(e);
      return;
    }
    var d = e.getFillLinearGradientColorStops();
    if (d && s === "linear-gradient") {
      this._fillLinearGradient(e);
      return;
    }
    var v = e.getFillRadialGradientColorStops();
    if (v && s === "radial-gradient") {
      this._fillRadialGradient(e);
      return;
    }
    a ? this._fillColor(e) : u ? this._fillPattern(e) : d ? this._fillLinearGradient(e) : v && this._fillRadialGradient(e);
  }
  _strokeLinearGradient(e) {
    var a = e.getStrokeLinearGradientStartPoint(), s = e.getStrokeLinearGradientEndPoint(), u = e.getStrokeLinearGradientColorStops(), d = this.createLinearGradient(a.x, a.y, s.x, s.y);
    if (u) {
      for (var v = 0; v < u.length; v += 2)
        d.addColorStop(u[v], u[v + 1]);
      this.setAttr("strokeStyle", d);
    }
  }
  _stroke(e) {
    var a = e.dash(), s = e.getStrokeScaleEnabled();
    if (e.hasStroke()) {
      if (!s) {
        this.save();
        var u = this.getCanvas().getPixelRatio();
        this.setTransform(u, 0, 0, u, 0, 0);
      }
      this._applyLineCap(e), a && e.dashEnabled() && (this.setLineDash(a), this.setAttr("lineDashOffset", e.dashOffset())), this.setAttr("lineWidth", e.strokeWidth()), e.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var d = e.getStrokeLinearGradientColorStops();
      d ? this._strokeLinearGradient(e) : this.setAttr("strokeStyle", e.stroke()), e._strokeFunc(this), s || this.restore();
    }
  }
  _applyShadow(e) {
    var a, s, u, d = (a = e.getShadowRGBA()) !== null && a !== void 0 ? a : "black", v = (s = e.getShadowBlur()) !== null && s !== void 0 ? s : 5, g = (u = e.getShadowOffset()) !== null && u !== void 0 ? u : {
      x: 0,
      y: 0
    }, _ = e.getAbsoluteScale(), m = this.canvas.getPixelRatio(), E = _.x * m, T = _.y * m;
    this.setAttr("shadowColor", d), this.setAttr("shadowBlur", v * Math.min(Math.abs(E), Math.abs(T))), this.setAttr("shadowOffsetX", g.x * E), this.setAttr("shadowOffsetY", g.y * T);
  }
}
class m5 extends jv {
  constructor(e) {
    super(e), this._context = e._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(e) {
    this.save(), this.setAttr("fillStyle", e.colorKey), e._fillFuncHit(this), this.restore();
  }
  strokeShape(e) {
    e.hasHitStroke() && this._stroke(e);
  }
  _stroke(e) {
    if (e.hasHitStroke()) {
      var a = e.getStrokeScaleEnabled();
      if (!a) {
        this.save();
        var s = this.getCanvas().getPixelRatio();
        this.setTransform(s, 0, 0, s, 0, 0);
      }
      this._applyLineCap(e);
      var u = e.hitStrokeWidth(), d = u === "auto" ? e.strokeWidth() : u;
      this.setAttr("lineWidth", d), this.setAttr("strokeStyle", e.colorKey), e._strokeFuncHit(this), a || this.restore();
    }
  }
}
var pv;
function g5() {
  if (pv)
    return pv;
  var o = B.createCanvasElement(), e = o.getContext("2d");
  return pv = function() {
    var a = Be._global.devicePixelRatio || 1, s = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return a / s;
  }(), B.releaseCanvas(o), pv;
}
class Bv {
  constructor(e) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    var a = e || {}, s = a.pixelRatio || Be.pixelRatio || g5();
    this.pixelRatio = s, this._canvas = B.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(e) {
    var a = this.pixelRatio;
    this.pixelRatio = e, this.setSize(this.getWidth() / a, this.getHeight() / a);
  }
  setWidth(e) {
    this.width = this._canvas.width = e * this.pixelRatio, this._canvas.style.width = e + "px";
    var a = this.pixelRatio, s = this.getContext()._context;
    s.scale(a, a);
  }
  setHeight(e) {
    this.height = this._canvas.height = e * this.pixelRatio, this._canvas.style.height = e + "px";
    var a = this.pixelRatio, s = this.getContext()._context;
    s.scale(a, a);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(e, a) {
    this.setWidth(e || 0), this.setHeight(a || 0);
  }
  toDataURL(e, a) {
    try {
      return this._canvas.toDataURL(e, a);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (u) {
        return B.error("Unable to get data URL. " + u.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
L.addGetterSetter(Bv, "pixelRatio", void 0, ye());
class ac extends Bv {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.context = new p5(this), this.setSize(e.width, e.height);
  }
}
class n0 extends Bv {
  constructor(e = { width: 0, height: 0 }) {
    super(e), this.hitCanvas = !0, this.context = new m5(this), this.setSize(e.width, e.height);
  }
}
const Bt = {
  get isDragging() {
    var o = !1;
    return Bt._dragElements.forEach((e) => {
      e.dragStatus === "dragging" && (o = !0);
    }), o;
  },
  justDragged: !1,
  get node() {
    var o;
    return Bt._dragElements.forEach((e) => {
      o = e.node;
    }), o;
  },
  _dragElements: /* @__PURE__ */ new Map(),
  _drag(o) {
    const e = [];
    Bt._dragElements.forEach((a, s) => {
      const { node: u } = a, d = u.getStage();
      d.setPointersPositions(o), a.pointerId === void 0 && (a.pointerId = B._getFirstPointerId(o));
      const v = d._changedPointerPositions.find((m) => m.id === a.pointerId);
      if (v) {
        if (a.dragStatus !== "dragging") {
          var g = u.dragDistance(), _ = Math.max(Math.abs(v.x - a.startPointerPos.x), Math.abs(v.y - a.startPointerPos.y));
          if (_ < g || (u.startDrag({ evt: o }), !u.isDragging()))
            return;
        }
        u._setDragPosition(o, a), e.push(u);
      }
    }), e.forEach((a) => {
      a.fire("dragmove", {
        type: "dragmove",
        target: a,
        evt: o
      }, !0);
    });
  },
  _endDragBefore(o) {
    const e = [];
    Bt._dragElements.forEach((a) => {
      const { node: s } = a, u = s.getStage();
      if (o && u.setPointersPositions(o), !u._changedPointerPositions.find((g) => g.id === a.pointerId))
        return;
      (a.dragStatus === "dragging" || a.dragStatus === "stopped") && (Bt.justDragged = !0, Be._mouseListenClick = !1, Be._touchListenClick = !1, Be._pointerListenClick = !1, a.dragStatus = "stopped");
      const v = a.node.getLayer() || a.node instanceof Be.Stage && a.node;
      v && e.indexOf(v) === -1 && e.push(v);
    }), e.forEach((a) => {
      a.draw();
    });
  },
  _endDragAfter(o) {
    Bt._dragElements.forEach((e, a) => {
      e.dragStatus === "stopped" && e.node.fire("dragend", {
        type: "dragend",
        target: e.node,
        evt: o
      }, !0), e.dragStatus !== "dragging" && Bt._dragElements.delete(a);
    });
  }
};
Be.isBrowser && (window.addEventListener("mouseup", Bt._endDragBefore, !0), window.addEventListener("touchend", Bt._endDragBefore, !0), window.addEventListener("mousemove", Bt._drag), window.addEventListener("touchmove", Bt._drag), window.addEventListener("mouseup", Bt._endDragAfter, !1), window.addEventListener("touchend", Bt._endDragAfter, !1));
var wv = "absoluteOpacity", mv = "allEventListeners", Xl = "absoluteTransform", c2 = "absoluteScale", No = "canvas", y5 = "Change", S5 = "children", _5 = "konva", Fg = "listening", f2 = "mouseenter", d2 = "mouseleave", h2 = "set", v2 = "Shape", Dv = " ", p2 = "stage", Gs = "transform", x5 = "Stage", Hg = "visible", C5 = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(Dv);
let E5 = 1;
class _e {
  constructor(e) {
    this._id = E5++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(e), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(e) {
    (e === Gs || e === Xl) && this._cache.get(e) ? this._cache.get(e).dirty = !0 : e ? this._cache.delete(e) : this._cache.clear();
  }
  _getCache(e, a) {
    var s = this._cache.get(e), u = e === Gs || e === Xl, d = s === void 0 || u && s.dirty === !0;
    return d && (s = a.call(this), this._cache.set(e, s)), s;
  }
  _calculate(e, a, s) {
    if (!this._attachedDepsListeners.get(e)) {
      const u = a.map((d) => d + "Change.konva").join(Dv);
      this.on(u, () => {
        this._clearCache(e);
      }), this._attachedDepsListeners.set(e, !0);
    }
    return this._getCache(e, s);
  }
  _getCanvasCache() {
    return this._cache.get(No);
  }
  _clearSelfAndDescendantCache(e) {
    this._clearCache(e), e === Xl && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(No)) {
      const { scene: e, filter: a, hit: s } = this._cache.get(No);
      B.releaseCanvas(e, a, s), this._cache.delete(No);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(e) {
    var a = e || {}, s = {};
    (a.x === void 0 || a.y === void 0 || a.width === void 0 || a.height === void 0) && (s = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent()
    }));
    var u = Math.ceil(a.width || s.width), d = Math.ceil(a.height || s.height), v = a.pixelRatio, g = a.x === void 0 ? Math.floor(s.x) : a.x, _ = a.y === void 0 ? Math.floor(s.y) : a.y, m = a.offset || 0, E = a.drawBorder || !1, T = a.hitCanvasPixelRatio || 1;
    if (!u || !d) {
      B.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    u += m * 2 + 1, d += m * 2 + 1, g -= m, _ -= m;
    var w = new ac({
      pixelRatio: v,
      width: u,
      height: d
    }), M = new ac({
      pixelRatio: v,
      width: 0,
      height: 0
    }), R = new n0({
      pixelRatio: T,
      width: u,
      height: d
    }), z = w.getContext(), k = R.getContext();
    return R.isCache = !0, w.isCache = !0, this._cache.delete(No), this._filterUpToDate = !1, a.imageSmoothingEnabled === !1 && (w.getContext()._context.imageSmoothingEnabled = !1, M.getContext()._context.imageSmoothingEnabled = !1), z.save(), k.save(), z.translate(-g, -_), k.translate(-g, -_), this._isUnderCache = !0, this._clearSelfAndDescendantCache(wv), this._clearSelfAndDescendantCache(c2), this.drawScene(w, this), this.drawHit(R, this), this._isUnderCache = !1, z.restore(), k.restore(), E && (z.save(), z.beginPath(), z.rect(0, 0, u, d), z.closePath(), z.setAttr("strokeStyle", "red"), z.setAttr("lineWidth", 5), z.stroke(), z.restore()), this._cache.set(No, {
      scene: w,
      filter: M,
      hit: R,
      x: g,
      y: _
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(No);
  }
  getClientRect(e) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(e, a) {
    var s = [
      { x: e.x, y: e.y },
      { x: e.x + e.width, y: e.y },
      { x: e.x + e.width, y: e.y + e.height },
      { x: e.x, y: e.y + e.height }
    ], u, d, v, g, _ = this.getAbsoluteTransform(a);
    return s.forEach(function(m) {
      var E = _.point(m);
      u === void 0 && (u = v = E.x, d = g = E.y), u = Math.min(u, E.x), d = Math.min(d, E.y), v = Math.max(v, E.x), g = Math.max(g, E.y);
    }), {
      x: u,
      y: d,
      width: v - u,
      height: g - d
    };
  }
  _drawCachedSceneCanvas(e) {
    e.save(), e._applyOpacity(this), e._applyGlobalCompositeOperation(this);
    const a = this._getCanvasCache();
    e.translate(a.x, a.y);
    var s = this._getCachedSceneCanvas(), u = s.pixelRatio;
    e.drawImage(s._canvas, 0, 0, s.width / u, s.height / u), e.restore();
  }
  _drawCachedHitCanvas(e) {
    var a = this._getCanvasCache(), s = a.hit;
    e.save(), e.translate(a.x, a.y), e.drawImage(s._canvas, 0, 0, s.width / s.pixelRatio, s.height / s.pixelRatio), e.restore();
  }
  _getCachedSceneCanvas() {
    var e = this.filters(), a = this._getCanvasCache(), s = a.scene, u = a.filter, d = u.getContext(), v, g, _, m;
    if (e) {
      if (!this._filterUpToDate) {
        var E = s.pixelRatio;
        u.setSize(s.width / s.pixelRatio, s.height / s.pixelRatio);
        try {
          for (v = e.length, d.clear(), d.drawImage(s._canvas, 0, 0, s.getWidth() / E, s.getHeight() / E), g = d.getImageData(0, 0, u.getWidth(), u.getHeight()), _ = 0; _ < v; _++) {
            if (m = e[_], typeof m != "function") {
              B.error("Filter should be type of function, but got " + typeof m + " instead. Please check correct filters");
              continue;
            }
            m.call(this, g), d.putImageData(g, 0, 0);
          }
        } catch (T) {
          B.error("Unable to apply filter. " + T.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return u;
    }
    return s;
  }
  on(e, a) {
    if (this._cache && this._cache.delete(mv), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    var s = e.split(Dv), u = s.length, d, v, g, _, m;
    for (d = 0; d < u; d++)
      v = s[d], g = v.split("."), _ = g[0], m = g[1] || "", this.eventListeners[_] || (this.eventListeners[_] = []), this.eventListeners[_].push({
        name: m,
        handler: a
      });
    return this;
  }
  off(e, a) {
    var s = (e || "").split(Dv), u = s.length, d, v, g, _, m, E;
    if (this._cache && this._cache.delete(mv), !e)
      for (v in this.eventListeners)
        this._off(v);
    for (d = 0; d < u; d++)
      if (g = s[d], _ = g.split("."), m = _[0], E = _[1], m)
        this.eventListeners[m] && this._off(m, E, a);
      else
        for (v in this.eventListeners)
          this._off(v, E, a);
    return this;
  }
  dispatchEvent(e) {
    var a = {
      target: this,
      type: e.type,
      evt: e
    };
    return this.fire(e.type, a), this;
  }
  addEventListener(e, a) {
    return this.on(e, function(s) {
      a.call(this, s.evt);
    }), this;
  }
  removeEventListener(e) {
    return this.off(e), this;
  }
  _delegate(e, a, s) {
    var u = this;
    this.on(e, function(d) {
      for (var v = d.target.findAncestors(a, !0, u), g = 0; g < v.length; g++)
        d = B.cloneObject(d), d.currentTarget = v[g], s.call(v[g], d);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), Bt._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Xl), this._clearSelfAndDescendantCache(wv), this._clearSelfAndDescendantCache(c2), this._clearSelfAndDescendantCache(p2), this._clearSelfAndDescendantCache(Hg), this._clearSelfAndDescendantCache(Fg);
  }
  _remove() {
    this._clearCaches();
    var e = this.getParent();
    e && e.children && (e.children.splice(this.index, 1), e._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(e) {
    var a = "get" + B._capitalize(e);
    return B._isFunction(this[a]) ? this[a]() : this.attrs[e];
  }
  getAncestors() {
    for (var e = this.getParent(), a = []; e; )
      a.push(e), e = e.getParent();
    return a;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(e) {
    return this._batchTransformChanges(() => {
      var a, s;
      if (!e)
        return this;
      for (a in e)
        a !== S5 && (s = h2 + B._capitalize(a), B._isFunction(this[s]) ? this[s](e[a]) : this._setAttr(a, e[a]));
    }), this;
  }
  isListening() {
    return this._getCache(Fg, this._isListening);
  }
  _isListening(e) {
    if (!this.listening())
      return !1;
    const s = this.getParent();
    return s && s !== e && this !== e ? s._isListening(e) : !0;
  }
  isVisible() {
    return this._getCache(Hg, this._isVisible);
  }
  _isVisible(e) {
    if (!this.visible())
      return !1;
    const s = this.getParent();
    return s && s !== e && this !== e ? s._isVisible(e) : !0;
  }
  shouldDrawHit(e, a = !1) {
    if (e)
      return this._isVisible(e) && this._isListening(e);
    var s = this.getLayer(), u = !1;
    Bt._dragElements.forEach((v) => {
      v.dragStatus === "dragging" && (v.node.nodeType === "Stage" || v.node.getLayer() === s) && (u = !0);
    });
    var d = !a && !Be.hitOnDragEnabled && u;
    return this.isListening() && this.isVisible() && !d;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var e = this.getDepth(), a = this, s = 0, u, d, v, g;
    function _(m) {
      for (u = [], d = m.length, v = 0; v < d; v++)
        g = m[v], s++, g.nodeType !== v2 && (u = u.concat(g.getChildren().slice())), g._id === a._id && (v = d);
      u.length > 0 && u[0].getDepth() <= e && _(u);
    }
    return a.nodeType !== x5 && _(a.getStage().getChildren()), s;
  }
  getDepth() {
    for (var e = 0, a = this.parent; a; )
      e++, a = a.parent;
    return e;
  }
  _batchTransformChanges(e) {
    this._batchingTransformChange = !0, e(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Gs), this._clearSelfAndDescendantCache(Xl)), this._needClearTransformCache = !1;
  }
  setPosition(e) {
    return this._batchTransformChanges(() => {
      this.x(e.x), this.y(e.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    if (!this.getStage())
      return null;
    var e = this.getStage().getPointerPosition();
    if (!e)
      return null;
    var a = this.getAbsoluteTransform().copy();
    return a.invert(), a.point(e);
  }
  getAbsolutePosition(e) {
    let a = !1, s = this.parent;
    for (; s; ) {
      if (s.isCached()) {
        a = !0;
        break;
      }
      s = s.parent;
    }
    a && !e && (e = !0);
    var u = this.getAbsoluteTransform(e).getMatrix(), d = new Qa(), v = this.offset();
    return d.m = u.slice(), d.translate(v.x, v.y), d.getTranslation();
  }
  setAbsolutePosition(e) {
    var a = this._clearTransform();
    this.attrs.x = a.x, this.attrs.y = a.y, delete a.x, delete a.y, this._clearCache(Gs);
    var s = this._getAbsoluteTransform().copy();
    return s.invert(), s.translate(e.x, e.y), e = {
      x: this.attrs.x + s.getTranslation().x,
      y: this.attrs.y + s.getTranslation().y
    }, this._setTransform(a), this.setPosition({ x: e.x, y: e.y }), this._clearCache(Gs), this._clearSelfAndDescendantCache(Xl), this;
  }
  _setTransform(e) {
    var a;
    for (a in e)
      this.attrs[a] = e[a];
  }
  _clearTransform() {
    var e = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, e;
  }
  move(e) {
    var a = e.x, s = e.y, u = this.x(), d = this.y();
    return a !== void 0 && (u += a), s !== void 0 && (d += s), this.setPosition({ x: u, y: d }), this;
  }
  _eachAncestorReverse(e, a) {
    var s = [], u = this.getParent(), d, v;
    if (!(a && a._id === this._id)) {
      for (s.unshift(this); u && (!a || u._id !== a._id); )
        s.unshift(u), u = u.parent;
      for (d = s.length, v = 0; v < d; v++)
        e(s[v]);
    }
  }
  rotate(e) {
    return this.rotation(this.rotation() + e), this;
  }
  moveToTop() {
    if (!this.parent)
      return B.warn("Node has no parent. moveToTop function is ignored."), !1;
    var e = this.index, a = this.parent.getChildren().length;
    return e < a - 1 ? (this.parent.children.splice(e, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return B.warn("Node has no parent. moveUp function is ignored."), !1;
    var e = this.index, a = this.parent.getChildren().length;
    return e < a - 1 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return B.warn("Node has no parent. moveDown function is ignored."), !1;
    var e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.splice(e - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return B.warn("Node has no parent. moveToBottom function is ignored."), !1;
    var e = this.index;
    return e > 0 ? (this.parent.children.splice(e, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(e) {
    if (!this.parent)
      return B.warn("Node has no parent. zIndex parameter is ignored."), this;
    (e < 0 || e >= this.parent.children.length) && B.warn("Unexpected value " + e + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    var a = this.index;
    return this.parent.children.splice(a, 1), this.parent.children.splice(e, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(wv, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var e = this.opacity(), a = this.getParent();
    return a && !a._isUnderCache && (e *= a.getAbsoluteOpacity()), e;
  }
  moveTo(e) {
    return this.getParent() !== e && (this._remove(), e.add(this)), this;
  }
  toObject() {
    var e = {}, a = this.getAttrs(), s, u, d, v, g;
    e.attrs = {};
    for (s in a)
      u = a[s], g = B.isObject(u) && !B._isPlainObject(u) && !B._isArray(u), !g && (d = typeof this[s] == "function" && this[s], delete a[s], v = d ? d.call(this) : null, a[s] = u, v !== u && (e.attrs[s] = u));
    return e.className = this.getClassName(), B._prepareToStringify(e);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(e, a, s) {
    var u = [];
    a && this._isMatch(e) && u.push(this);
    for (var d = this.parent; d; ) {
      if (d === s)
        return u;
      d._isMatch(e) && u.push(d), d = d.parent;
    }
    return u;
  }
  isAncestorOf(e) {
    return !1;
  }
  findAncestor(e, a, s) {
    return this.findAncestors(e, a, s)[0];
  }
  _isMatch(e) {
    if (!e)
      return !1;
    if (typeof e == "function")
      return e(this);
    var a = e.replace(/ /g, "").split(","), s = a.length, u, d;
    for (u = 0; u < s; u++)
      if (d = a[u], B.isValidSelector(d) || (B.warn('Selector "' + d + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), B.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), B.warn("Konva is awesome, right?")), d.charAt(0) === "#") {
        if (this.id() === d.slice(1))
          return !0;
      } else if (d.charAt(0) === ".") {
        if (this.hasName(d.slice(1)))
          return !0;
      } else if (this.className === d || this.nodeType === d)
        return !0;
    return !1;
  }
  getLayer() {
    var e = this.getParent();
    return e ? e.getLayer() : null;
  }
  getStage() {
    return this._getCache(p2, this._getStage);
  }
  _getStage() {
    var e = this.getParent();
    if (e)
      return e.getStage();
  }
  fire(e, a = {}, s) {
    return a.target = a.target || this, s ? this._fireAndBubble(e, a) : this._fire(e, a), this;
  }
  getAbsoluteTransform(e) {
    return e ? this._getAbsoluteTransform(e) : this._getCache(Xl, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(e) {
    var a;
    if (e)
      return a = new Qa(), this._eachAncestorReverse(function(u) {
        var d = u.transformsEnabled();
        d === "all" ? a.multiply(u.getTransform()) : d === "position" && a.translate(u.x() - u.offsetX(), u.y() - u.offsetY());
      }, e), a;
    a = this._cache.get(Xl) || new Qa(), this.parent ? this.parent.getAbsoluteTransform().copyInto(a) : a.reset();
    var s = this.transformsEnabled();
    if (s === "all")
      a.multiply(this.getTransform());
    else if (s === "position") {
      const u = this.attrs.x || 0, d = this.attrs.y || 0, v = this.attrs.offsetX || 0, g = this.attrs.offsetY || 0;
      a.translate(u - v, d - g);
    }
    return a.dirty = !1, a;
  }
  getAbsoluteScale(e) {
    for (var a = this; a; )
      a._isUnderCache && (e = a), a = a.getParent();
    const u = this.getAbsoluteTransform(e).decompose();
    return {
      x: u.scaleX,
      y: u.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(Gs, this._getTransform);
  }
  _getTransform() {
    var e, a, s = this._cache.get(Gs) || new Qa();
    s.reset();
    var u = this.x(), d = this.y(), v = Be.getAngle(this.rotation()), g = (e = this.attrs.scaleX) !== null && e !== void 0 ? e : 1, _ = (a = this.attrs.scaleY) !== null && a !== void 0 ? a : 1, m = this.attrs.skewX || 0, E = this.attrs.skewY || 0, T = this.attrs.offsetX || 0, w = this.attrs.offsetY || 0;
    return (u !== 0 || d !== 0) && s.translate(u, d), v !== 0 && s.rotate(v), (m !== 0 || E !== 0) && s.skew(m, E), (g !== 1 || _ !== 1) && s.scale(g, _), (T !== 0 || w !== 0) && s.translate(-1 * T, -1 * w), s.dirty = !1, s;
  }
  clone(e) {
    var a = B.cloneObject(this.attrs), s, u, d, v, g;
    for (s in e)
      a[s] = e[s];
    var _ = new this.constructor(a);
    for (s in this.eventListeners)
      for (u = this.eventListeners[s], d = u.length, v = 0; v < d; v++)
        g = u[v], g.name.indexOf(_5) < 0 && (_.eventListeners[s] || (_.eventListeners[s] = []), _.eventListeners[s].push(g));
    return _;
  }
  _toKonvaCanvas(e) {
    e = e || {};
    var a = this.getClientRect(), s = this.getStage(), u = e.x !== void 0 ? e.x : Math.floor(a.x), d = e.y !== void 0 ? e.y : Math.floor(a.y), v = e.pixelRatio || 1, g = new ac({
      width: e.width || Math.ceil(a.width) || (s ? s.width() : 0),
      height: e.height || Math.ceil(a.height) || (s ? s.height() : 0),
      pixelRatio: v
    }), _ = g.getContext();
    return e.imageSmoothingEnabled === !1 && (_._context.imageSmoothingEnabled = !1), _.save(), (u || d) && _.translate(-1 * u, -1 * d), this.drawScene(g), _.restore(), g;
  }
  toCanvas(e) {
    return this._toKonvaCanvas(e)._canvas;
  }
  toDataURL(e) {
    e = e || {};
    var a = e.mimeType || null, s = e.quality || null, u = this._toKonvaCanvas(e).toDataURL(a, s);
    return e.callback && e.callback(u), u;
  }
  toImage(e) {
    return new Promise((a, s) => {
      try {
        const u = e == null ? void 0 : e.callback;
        u && delete e.callback, B._urlToImage(this.toDataURL(e), function(d) {
          a(d), u == null || u(d);
        });
      } catch (u) {
        s(u);
      }
    });
  }
  toBlob(e) {
    return new Promise((a, s) => {
      try {
        const u = e == null ? void 0 : e.callback;
        u && delete e.callback, this.toCanvas(e).toBlob((d) => {
          a(d), u == null || u(d);
        });
      } catch (u) {
        s(u);
      }
    });
  }
  setSize(e) {
    return this.width(e.width), this.height(e.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Be.dragDistance;
  }
  _off(e, a, s) {
    var u = this.eventListeners[e], d, v, g;
    for (d = 0; d < u.length; d++)
      if (v = u[d].name, g = u[d].handler, (v !== "konva" || a === "konva") && (!a || v === a) && (!s || s === g)) {
        if (u.splice(d, 1), u.length === 0) {
          delete this.eventListeners[e];
          break;
        }
        d--;
      }
  }
  _fireChangeEvent(e, a, s) {
    this._fire(e + y5, {
      oldVal: a,
      newVal: s
    });
  }
  addName(e) {
    if (!this.hasName(e)) {
      var a = this.name(), s = a ? a + " " + e : e;
      this.name(s);
    }
    return this;
  }
  hasName(e) {
    if (!e)
      return !1;
    const a = this.name();
    if (!a)
      return !1;
    var s = (a || "").split(/\s/g);
    return s.indexOf(e) !== -1;
  }
  removeName(e) {
    var a = (this.name() || "").split(/\s/g), s = a.indexOf(e);
    return s !== -1 && (a.splice(s, 1), this.name(a.join(" "))), this;
  }
  setAttr(e, a) {
    var s = this[h2 + B._capitalize(e)];
    return B._isFunction(s) ? s.call(this, a) : this._setAttr(e, a), this;
  }
  _requestDraw() {
    if (Be.autoDrawEnabled) {
      const e = this.getLayer() || this.getStage();
      e == null || e.batchDraw();
    }
  }
  _setAttr(e, a) {
    var s = this.attrs[e];
    s === a && !B.isObject(a) || (a == null ? delete this.attrs[e] : this.attrs[e] = a, this._shouldFireChangeEvents && this._fireChangeEvent(e, s, a), this._requestDraw());
  }
  _setComponentAttr(e, a, s) {
    var u;
    s !== void 0 && (u = this.attrs[e], u || (this.attrs[e] = this.getAttr(e)), this.attrs[e][a] = s, this._fireChangeEvent(e, u, s));
  }
  _fireAndBubble(e, a, s) {
    a && this.nodeType === v2 && (a.target = this);
    var u = (e === f2 || e === d2) && (s && (this === s || this.isAncestorOf && this.isAncestorOf(s)) || this.nodeType === "Stage" && !s);
    if (!u) {
      this._fire(e, a);
      var d = (e === f2 || e === d2) && s && s.isAncestorOf && s.isAncestorOf(this) && !s.isAncestorOf(this.parent);
      (a && !a.cancelBubble || !a) && this.parent && this.parent.isListening() && !d && (s && s.parent ? this._fireAndBubble.call(this.parent, e, a, s) : this._fireAndBubble.call(this.parent, e, a));
    }
  }
  _getProtoListeners(e) {
    let a = this._cache.get(mv);
    if (!a) {
      a = {};
      let u = Object.getPrototypeOf(this);
      for (; u; ) {
        if (!u.eventListeners) {
          u = Object.getPrototypeOf(u);
          continue;
        }
        for (var s in u.eventListeners) {
          const d = u.eventListeners[s], v = a[s] || [];
          a[s] = d.concat(v);
        }
        u = Object.getPrototypeOf(u);
      }
      this._cache.set(mv, a);
    }
    return a[e];
  }
  _fire(e, a) {
    a = a || {}, a.currentTarget = this, a.type = e;
    const s = this._getProtoListeners(e);
    if (s)
      for (var u = 0; u < s.length; u++)
        s[u].handler.call(this, a);
    const d = this.eventListeners[e];
    if (d)
      for (var u = 0; u < d.length; u++)
        d[u].handler.call(this, a);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(e) {
    var a = e ? e.pointerId : void 0, s = this.getStage(), u = this.getAbsolutePosition(), d = s._getPointerById(a) || s._changedPointerPositions[0] || u;
    Bt._dragElements.set(this._id, {
      node: this,
      startPointerPos: d,
      offset: {
        x: d.x - u.x,
        y: d.y - u.y
      },
      dragStatus: "ready",
      pointerId: a
    });
  }
  startDrag(e, a = !0) {
    Bt._dragElements.has(this._id) || this._createDragElement(e);
    const s = Bt._dragElements.get(this._id);
    s.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: e && e.evt
    }, a);
  }
  _setDragPosition(e, a) {
    const s = this.getStage()._getPointerById(a.pointerId);
    if (s) {
      var u = {
        x: s.x - a.offset.x,
        y: s.y - a.offset.y
      }, d = this.dragBoundFunc();
      if (d !== void 0) {
        const v = d.call(this, u, e);
        v ? u = v : B.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== u.x || this._lastPos.y !== u.y) && (this.setAbsolutePosition(u), this._requestDraw()), this._lastPos = u;
    }
  }
  stopDrag(e) {
    const a = Bt._dragElements.get(this._id);
    a && (a.dragStatus = "stopped"), Bt._endDragBefore(e), Bt._endDragAfter(e);
  }
  setDraggable(e) {
    this._setAttr("draggable", e), this._dragChange();
  }
  isDragging() {
    const e = Bt._dragElements.get(this._id);
    return e ? e.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(e) {
      var a = e.evt.button !== void 0, s = !a || Be.dragButtons.indexOf(e.evt.button) >= 0;
      if (s && !this.isDragging()) {
        var u = !1;
        Bt._dragElements.forEach((d) => {
          this.isAncestorOf(d.node) && (u = !0);
        }), u || this._createDragElement(e);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      this._dragCleanup();
      var e = this.getStage();
      if (!e)
        return;
      const a = Bt._dragElements.get(this._id), s = a && a.dragStatus === "dragging", u = a && a.dragStatus === "ready";
      s ? this.stopDrag() : u && Bt._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(e = { x: 0, y: 0 }) {
    const a = this.getStage();
    if (!a)
      return !1;
    const s = {
      x: -e.x,
      y: -e.y,
      width: a.width() + 2 * e.x,
      height: a.height() + 2 * e.y
    };
    return B.haveIntersection(s, this.getClientRect());
  }
  static create(e, a) {
    return B._isString(e) && (e = JSON.parse(e)), this._createNode(e, a);
  }
  static _createNode(e, a) {
    var s = _e.prototype.getClassName.call(e), u = e.children, d, v, g;
    a && (e.attrs.container = a), Be[s] || (B.warn('Can not find a node with class name "' + s + '". Fallback to "Shape".'), s = "Shape");
    const _ = Be[s];
    if (d = new _(e.attrs), u)
      for (v = u.length, g = 0; g < v; g++)
        d.add(_e._createNode(u[g]));
    return d;
  }
}
_e.prototype.nodeType = "Node";
_e.prototype._attrsAffectingSize = [];
_e.prototype.eventListeners = {};
_e.prototype.on.call(_e.prototype, C5, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Gs), this._clearSelfAndDescendantCache(Xl);
});
_e.prototype.on.call(_e.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(Hg);
});
_e.prototype.on.call(_e.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(Fg);
});
_e.prototype.on.call(_e.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(wv);
});
const Sn = L.addGetterSetter;
Sn(_e, "zIndex");
Sn(_e, "absolutePosition");
Sn(_e, "position");
Sn(_e, "x", 0, ye());
Sn(_e, "y", 0, ye());
Sn(_e, "globalCompositeOperation", "source-over", cc());
Sn(_e, "opacity", 1, ye());
Sn(_e, "name", "", cc());
Sn(_e, "id", "", cc());
Sn(_e, "rotation", 0, ye());
L.addComponentsGetterSetter(_e, "scale", ["x", "y"]);
Sn(_e, "scaleX", 1, ye());
Sn(_e, "scaleY", 1, ye());
L.addComponentsGetterSetter(_e, "skew", ["x", "y"]);
Sn(_e, "skewX", 0, ye());
Sn(_e, "skewY", 0, ye());
L.addComponentsGetterSetter(_e, "offset", ["x", "y"]);
Sn(_e, "offsetX", 0, ye());
Sn(_e, "offsetY", 0, ye());
Sn(_e, "dragDistance", null, ye());
Sn(_e, "width", 0, ye());
Sn(_e, "height", 0, ye());
Sn(_e, "listening", !0, Hi());
Sn(_e, "preventDefault", !0, Hi());
Sn(_e, "filters", null, function(o) {
  return this._filterUpToDate = !1, o;
});
Sn(_e, "visible", !0, Hi());
Sn(_e, "transformsEnabled", "all", cc());
Sn(_e, "size");
Sn(_e, "dragBoundFunc");
Sn(_e, "draggable", !1, Hi());
L.backCompat(_e, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
class Ka extends _e {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(e) {
    if (!e)
      return this.children || [];
    const a = this.children || [];
    var s = [];
    return a.forEach(function(u) {
      e(u) && s.push(u);
    }), s;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((e) => {
      e.parent = null, e.index = 0, e.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...e) {
    if (arguments.length > 1) {
      for (var a = 0; a < arguments.length; a++)
        this.add(arguments[a]);
      return this;
    }
    var s = e[0];
    return s.getParent() ? (s.moveTo(this), this) : (this._validateAdd(s), s.index = this.getChildren().length, s.parent = this, s._clearCaches(), this.getChildren().push(s), this._fire("add", {
      child: s
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(e) {
    return this._generalFind(e, !1);
  }
  findOne(e) {
    var a = this._generalFind(e, !0);
    return a.length > 0 ? a[0] : void 0;
  }
  _generalFind(e, a) {
    var s = [];
    return this._descendants((u) => {
      const d = u._isMatch(e);
      return d && s.push(u), !!(d && a);
    }), s;
  }
  _descendants(e) {
    let a = !1;
    const s = this.getChildren();
    for (const u of s) {
      if (a = e(u), a)
        return !0;
      if (u.hasChildren() && (a = u._descendants(e), a))
        return !0;
    }
    return !1;
  }
  toObject() {
    var e = _e.prototype.toObject.call(this);
    return e.children = [], this.getChildren().forEach((a) => {
      e.children.push(a.toObject());
    }), e;
  }
  isAncestorOf(e) {
    for (var a = e.getParent(); a; ) {
      if (a._id === this._id)
        return !0;
      a = a.getParent();
    }
    return !1;
  }
  clone(e) {
    var a = _e.prototype.clone.call(this, e);
    return this.getChildren().forEach(function(s) {
      a.add(s.clone());
    }), a;
  }
  getAllIntersections(e) {
    var a = [];
    return this.find("Shape").forEach(function(s) {
      s.isVisible() && s.intersects(e) && a.push(s);
    }), a;
  }
  _clearSelfAndDescendantCache(e) {
    var a;
    super._clearSelfAndDescendantCache(e), !this.isCached() && ((a = this.children) === null || a === void 0 || a.forEach(function(s) {
      s._clearSelfAndDescendantCache(e);
    }));
  }
  _setChildrenIndices() {
    var e;
    (e = this.children) === null || e === void 0 || e.forEach(function(a, s) {
      a.index = s;
    }), this._requestDraw();
  }
  drawScene(e, a) {
    var s = this.getLayer(), u = e || s && s.getCanvas(), d = u && u.getContext(), v = this._getCanvasCache(), g = v && v.scene, _ = u && u.isCache;
    if (!this.isVisible() && !_)
      return this;
    if (g) {
      d.save();
      var m = this.getAbsoluteTransform(a).getMatrix();
      d.transform(m[0], m[1], m[2], m[3], m[4], m[5]), this._drawCachedSceneCanvas(d), d.restore();
    } else
      this._drawChildren("drawScene", u, a);
    return this;
  }
  drawHit(e, a) {
    if (!this.shouldDrawHit(a))
      return this;
    var s = this.getLayer(), u = e || s && s.hitCanvas, d = u && u.getContext(), v = this._getCanvasCache(), g = v && v.hit;
    if (g) {
      d.save();
      var _ = this.getAbsoluteTransform(a).getMatrix();
      d.transform(_[0], _[1], _[2], _[3], _[4], _[5]), this._drawCachedHitCanvas(d), d.restore();
    } else
      this._drawChildren("drawHit", u, a);
    return this;
  }
  _drawChildren(e, a, s) {
    var u, d = a && a.getContext(), v = this.clipWidth(), g = this.clipHeight(), _ = this.clipFunc(), m = v && g || _;
    const E = s === this;
    if (m) {
      d.save();
      var T = this.getAbsoluteTransform(s), w = T.getMatrix();
      if (d.transform(w[0], w[1], w[2], w[3], w[4], w[5]), d.beginPath(), _)
        _.call(this, d, this);
      else {
        var M = this.clipX(), R = this.clipY();
        d.rect(M, R, v, g);
      }
      d.clip(), w = T.copy().invert().getMatrix(), d.transform(w[0], w[1], w[2], w[3], w[4], w[5]);
    }
    var z = !E && this.globalCompositeOperation() !== "source-over" && e === "drawScene";
    z && (d.save(), d._applyGlobalCompositeOperation(this)), (u = this.children) === null || u === void 0 || u.forEach(function(k) {
      k[e](a, s);
    }), z && d.restore(), m && d.restore();
  }
  getClientRect(e) {
    var a;
    e = e || {};
    var s = e.skipTransform, u = e.relativeTo, d, v, g, _, m = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    }, E = this;
    (a = this.children) === null || a === void 0 || a.forEach(function(z) {
      if (z.visible()) {
        var k = z.getClientRect({
          relativeTo: E,
          skipShadow: e.skipShadow,
          skipStroke: e.skipStroke
        });
        k.width === 0 && k.height === 0 || (d === void 0 ? (d = k.x, v = k.y, g = k.x + k.width, _ = k.y + k.height) : (d = Math.min(d, k.x), v = Math.min(v, k.y), g = Math.max(g, k.x + k.width), _ = Math.max(_, k.y + k.height)));
      }
    });
    for (var T = this.find("Shape"), w = !1, M = 0; M < T.length; M++) {
      var R = T[M];
      if (R._isVisible(this)) {
        w = !0;
        break;
      }
    }
    return w && d !== void 0 ? m = {
      x: d,
      y: v,
      width: g - d,
      height: _ - v
    } : m = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, s ? m : this._transformedRect(m, u);
  }
}
L.addComponentsGetterSetter(Ka, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
L.addGetterSetter(Ka, "clipX", void 0, ye());
L.addGetterSetter(Ka, "clipY", void 0, ye());
L.addGetterSetter(Ka, "clipWidth", void 0, ye());
L.addGetterSetter(Ka, "clipHeight", void 0, ye());
L.addGetterSetter(Ka, "clipFunc");
const sd = /* @__PURE__ */ new Map(), jS = Be._global.PointerEvent !== void 0;
function Rg(o) {
  return sd.get(o);
}
function r0(o) {
  return {
    evt: o,
    pointerId: o.pointerId
  };
}
function BS(o, e) {
  return sd.get(o) === e;
}
function IS(o, e) {
  nd(o), e.getStage() && (sd.set(o, e), jS && e._fire("gotpointercapture", r0(new PointerEvent("gotpointercapture"))));
}
function nd(o, e) {
  const a = sd.get(o);
  if (!a)
    return;
  const s = a.getStage();
  s && s.content, sd.delete(o), jS && a._fire("lostpointercapture", r0(new PointerEvent("lostpointercapture")));
}
var b5 = "Stage", T5 = "string", m2 = "px", R5 = "mouseout", VS = "mouseleave", YS = "mouseover", qS = "mouseenter", WS = "mousemove", XS = "mousedown", QS = "mouseup", Xf = "pointermove", Qf = "pointerdown", nc = "pointerup", Kf = "pointercancel", w5 = "lostpointercapture", gv = "pointerout", yv = "pointerleave", Sv = "pointerover", _v = "pointerenter", Gg = "contextmenu", KS = "touchstart", JS = "touchend", ZS = "touchmove", $S = "touchcancel", jg = "wheel", D5 = 5, N5 = [
  [qS, "_pointerenter"],
  [XS, "_pointerdown"],
  [WS, "_pointermove"],
  [QS, "_pointerup"],
  [VS, "_pointerleave"],
  [KS, "_pointerdown"],
  [ZS, "_pointermove"],
  [JS, "_pointerup"],
  [$S, "_pointercancel"],
  [YS, "_pointerover"],
  [jg, "_wheel"],
  [Gg, "_contextmenu"],
  [Qf, "_pointerdown"],
  [Xf, "_pointermove"],
  [nc, "_pointerup"],
  [Kf, "_pointercancel"],
  [w5, "_lostpointercapture"]
];
const wg = {
  mouse: {
    [gv]: R5,
    [yv]: VS,
    [Sv]: YS,
    [_v]: qS,
    [Xf]: WS,
    [Qf]: XS,
    [nc]: QS,
    [Kf]: "mousecancel",
    pointerclick: "click",
    pointerdblclick: "dblclick"
  },
  touch: {
    [gv]: "touchout",
    [yv]: "touchleave",
    [Sv]: "touchover",
    [_v]: "touchenter",
    [Xf]: ZS,
    [Qf]: KS,
    [nc]: JS,
    [Kf]: $S,
    pointerclick: "tap",
    pointerdblclick: "dbltap"
  },
  pointer: {
    [gv]: gv,
    [yv]: yv,
    [Sv]: Sv,
    [_v]: _v,
    [Xf]: Xf,
    [Qf]: Qf,
    [nc]: nc,
    [Kf]: Kf,
    pointerclick: "pointerclick",
    pointerdblclick: "pointerdblclick"
  }
}, Jf = (o) => o.indexOf("pointer") >= 0 ? "pointer" : o.indexOf("touch") >= 0 ? "touch" : "mouse", ec = (o) => {
  const e = Jf(o);
  if (e === "pointer")
    return Be.pointerEventsEnabled && wg.pointer;
  if (e === "touch")
    return wg.touch;
  if (e === "mouse")
    return wg.mouse;
};
function g2(o = {}) {
  return (o.clipFunc || o.clipWidth || o.clipHeight) && B.warn("Stage does not support clipping. Please use clip for Layers or Groups."), o;
}
const M5 = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);", Nv = [];
let Iv = class extends Ka {
  constructor(e) {
    super(g2(e)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), Nv.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
      g2(this.attrs);
    }), this._checkVisibility();
  }
  _validateAdd(e) {
    const a = e.getType() === "Layer", s = e.getType() === "FastLayer";
    a || s || B.throw("You may only add layers to the stage.");
  }
  _checkVisibility() {
    if (!this.content)
      return;
    const e = this.visible() ? "" : "none";
    this.content.style.display = e;
  }
  setContainer(e) {
    if (typeof e === T5) {
      if (e.charAt(0) === ".") {
        var a = e.slice(1);
        e = document.getElementsByClassName(a)[0];
      } else {
        var s;
        e.charAt(0) !== "#" ? s = e : s = e.slice(1), e = document.getElementById(s);
      }
      if (!e)
        throw "Can not find container in document with id " + s;
    }
    return this._setAttr("container", e), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), e.appendChild(this.content)), this;
  }
  shouldDrawHit() {
    return !0;
  }
  clear() {
    var e = this.children, a = e.length, s;
    for (s = 0; s < a; s++)
      e[s].clear();
    return this;
  }
  clone(e) {
    return e || (e = {}), e.container = typeof document < "u" && document.createElement("div"), Ka.prototype.clone.call(this, e);
  }
  destroy() {
    super.destroy();
    var e = this.content;
    e && B._isInDocument(e) && this.container().removeChild(e);
    var a = Nv.indexOf(this);
    return a > -1 && Nv.splice(a, 1), B.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
  }
  getPointerPosition() {
    const e = this._pointerPositions[0] || this._changedPointerPositions[0];
    return e ? {
      x: e.x,
      y: e.y
    } : (B.warn(M5), null);
  }
  _getPointerById(e) {
    return this._pointerPositions.find((a) => a.id === e);
  }
  getPointersPositions() {
    return this._pointerPositions;
  }
  getStage() {
    return this;
  }
  getContent() {
    return this.content;
  }
  _toKonvaCanvas(e) {
    e = e || {}, e.x = e.x || 0, e.y = e.y || 0, e.width = e.width || this.width(), e.height = e.height || this.height();
    var a = new ac({
      width: e.width,
      height: e.height,
      pixelRatio: e.pixelRatio || 1
    }), s = a.getContext()._context, u = this.children;
    return (e.x || e.y) && s.translate(-1 * e.x, -1 * e.y), u.forEach(function(d) {
      if (d.isVisible()) {
        var v = d._toKonvaCanvas(e);
        s.drawImage(v._canvas, e.x, e.y, v.getWidth() / v.getPixelRatio(), v.getHeight() / v.getPixelRatio());
      }
    }), a;
  }
  getIntersection(e) {
    if (!e)
      return null;
    var a = this.children, s = a.length, u = s - 1, d;
    for (d = u; d >= 0; d--) {
      const v = a[d].getIntersection(e);
      if (v)
        return v;
    }
    return null;
  }
  _resizeDOM() {
    var e = this.width(), a = this.height();
    this.content && (this.content.style.width = e + m2, this.content.style.height = a + m2), this.bufferCanvas.setSize(e, a), this.bufferHitCanvas.setSize(e, a), this.children.forEach((s) => {
      s.setSize({ width: e, height: a }), s.draw();
    });
  }
  add(e, ...a) {
    if (arguments.length > 1) {
      for (var s = 0; s < arguments.length; s++)
        this.add(arguments[s]);
      return this;
    }
    super.add(e);
    var u = this.children.length;
    return u > D5 && B.warn("The stage has " + u + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), e.setSize({ width: this.width(), height: this.height() }), e.draw(), Be.isBrowser && this.content.appendChild(e.canvas._canvas), this;
  }
  getParent() {
    return null;
  }
  getLayer() {
    return null;
  }
  hasPointerCapture(e) {
    return BS(e, this);
  }
  setPointerCapture(e) {
    IS(e, this);
  }
  releaseCapture(e) {
    nd(e);
  }
  getLayers() {
    return this.children;
  }
  _bindContentEvents() {
    Be.isBrowser && N5.forEach(([e, a]) => {
      this.content.addEventListener(e, (s) => {
        this[a](s);
      }, { passive: !1 });
    });
  }
  _pointerenter(e) {
    this.setPointersPositions(e);
    const a = ec(e.type);
    this._fire(a.pointerenter, {
      evt: e,
      target: this,
      currentTarget: this
    });
  }
  _pointerover(e) {
    this.setPointersPositions(e);
    const a = ec(e.type);
    this._fire(a.pointerover, {
      evt: e,
      target: this,
      currentTarget: this
    });
  }
  _getTargetShape(e) {
    let a = this[e + "targetShape"];
    return a && !a.getStage() && (a = null), a;
  }
  _pointerleave(e) {
    const a = ec(e.type), s = Jf(e.type);
    if (a) {
      this.setPointersPositions(e);
      var u = this._getTargetShape(s), d = !Bt.isDragging || Be.hitOnDragEnabled;
      u && d ? (u._fireAndBubble(a.pointerout, { evt: e }), u._fireAndBubble(a.pointerleave, { evt: e }), this._fire(a.pointerleave, {
        evt: e,
        target: this,
        currentTarget: this
      }), this[s + "targetShape"] = null) : d && (this._fire(a.pointerleave, {
        evt: e,
        target: this,
        currentTarget: this
      }), this._fire(a.pointerout, {
        evt: e,
        target: this,
        currentTarget: this
      })), this.pointerPos = void 0, this._pointerPositions = [];
    }
  }
  _pointerdown(e) {
    const a = ec(e.type), s = Jf(e.type);
    if (a) {
      this.setPointersPositions(e);
      var u = !1;
      this._changedPointerPositions.forEach((d) => {
        var v = this.getIntersection(d);
        if (Bt.justDragged = !1, Be["_" + s + "ListenClick"] = !0, !(v && v.isListening()))
          return;
        Be.capturePointerEventsEnabled && v.setPointerCapture(d.id), this[s + "ClickStartShape"] = v, v._fireAndBubble(a.pointerdown, {
          evt: e,
          pointerId: d.id
        }), u = !0;
        const _ = e.type.indexOf("touch") >= 0;
        v.preventDefault() && e.cancelable && _ && e.preventDefault();
      }), u || this._fire(a.pointerdown, {
        evt: e,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
  }
  _pointermove(e) {
    const a = ec(e.type), s = Jf(e.type);
    if (!a)
      return;
    Bt.isDragging && Bt.node.preventDefault() && e.cancelable && e.preventDefault(), this.setPointersPositions(e);
    var u = !Bt.isDragging || Be.hitOnDragEnabled;
    if (!u)
      return;
    var d = {};
    let v = !1;
    var g = this._getTargetShape(s);
    this._changedPointerPositions.forEach((_) => {
      const m = Rg(_.id) || this.getIntersection(_), E = _.id, T = { evt: e, pointerId: E };
      var w = g !== m;
      if (w && g && (g._fireAndBubble(a.pointerout, Object.assign({}, T), m), g._fireAndBubble(a.pointerleave, Object.assign({}, T), m)), m) {
        if (d[m._id])
          return;
        d[m._id] = !0;
      }
      m && m.isListening() ? (v = !0, w && (m._fireAndBubble(a.pointerover, Object.assign({}, T), g), m._fireAndBubble(a.pointerenter, Object.assign({}, T), g), this[s + "targetShape"] = m), m._fireAndBubble(a.pointermove, Object.assign({}, T))) : g && (this._fire(a.pointerover, {
        evt: e,
        target: this,
        currentTarget: this,
        pointerId: E
      }), this[s + "targetShape"] = null);
    }), v || this._fire(a.pointermove, {
      evt: e,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    });
  }
  _pointerup(e) {
    const a = ec(e.type), s = Jf(e.type);
    if (!a)
      return;
    this.setPointersPositions(e);
    const u = this[s + "ClickStartShape"], d = this[s + "ClickEndShape"];
    var v = {};
    let g = !1;
    this._changedPointerPositions.forEach((_) => {
      const m = Rg(_.id) || this.getIntersection(_);
      if (m) {
        if (m.releaseCapture(_.id), v[m._id])
          return;
        v[m._id] = !0;
      }
      const E = _.id, T = { evt: e, pointerId: E };
      let w = !1;
      Be["_" + s + "InDblClickWindow"] ? (w = !0, clearTimeout(this[s + "DblTimeout"])) : Bt.justDragged || (Be["_" + s + "InDblClickWindow"] = !0, clearTimeout(this[s + "DblTimeout"])), this[s + "DblTimeout"] = setTimeout(function() {
        Be["_" + s + "InDblClickWindow"] = !1;
      }, Be.dblClickWindow), m && m.isListening() ? (g = !0, this[s + "ClickEndShape"] = m, m._fireAndBubble(a.pointerup, Object.assign({}, T)), Be["_" + s + "ListenClick"] && u && u === m && (m._fireAndBubble(a.pointerclick, Object.assign({}, T)), w && d && d === m && m._fireAndBubble(a.pointerdblclick, Object.assign({}, T)))) : (this[s + "ClickEndShape"] = null, Be["_" + s + "ListenClick"] && this._fire(a.pointerclick, {
        evt: e,
        target: this,
        currentTarget: this,
        pointerId: E
      }), w && this._fire(a.pointerdblclick, {
        evt: e,
        target: this,
        currentTarget: this,
        pointerId: E
      }));
    }), g || this._fire(a.pointerup, {
      evt: e,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    }), Be["_" + s + "ListenClick"] = !1, e.cancelable && s !== "touch" && e.preventDefault();
  }
  _contextmenu(e) {
    this.setPointersPositions(e);
    var a = this.getIntersection(this.getPointerPosition());
    a && a.isListening() ? a._fireAndBubble(Gg, { evt: e }) : this._fire(Gg, {
      evt: e,
      target: this,
      currentTarget: this
    });
  }
  _wheel(e) {
    this.setPointersPositions(e);
    var a = this.getIntersection(this.getPointerPosition());
    a && a.isListening() ? a._fireAndBubble(jg, { evt: e }) : this._fire(jg, {
      evt: e,
      target: this,
      currentTarget: this
    });
  }
  _pointercancel(e) {
    this.setPointersPositions(e);
    const a = Rg(e.pointerId) || this.getIntersection(this.getPointerPosition());
    a && a._fireAndBubble(nc, r0(e)), nd(e.pointerId);
  }
  _lostpointercapture(e) {
    nd(e.pointerId);
  }
  setPointersPositions(e) {
    var a = this._getContentPosition(), s = null, u = null;
    e = e || window.event, e.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(e.touches, (d) => {
      this._pointerPositions.push({
        id: d.identifier,
        x: (d.clientX - a.left) / a.scaleX,
        y: (d.clientY - a.top) / a.scaleY
      });
    }), Array.prototype.forEach.call(e.changedTouches || e.touches, (d) => {
      this._changedPointerPositions.push({
        id: d.identifier,
        x: (d.clientX - a.left) / a.scaleX,
        y: (d.clientY - a.top) / a.scaleY
      });
    })) : (s = (e.clientX - a.left) / a.scaleX, u = (e.clientY - a.top) / a.scaleY, this.pointerPos = {
      x: s,
      y: u
    }, this._pointerPositions = [{ x: s, y: u, id: B._getFirstPointerId(e) }], this._changedPointerPositions = [
      { x: s, y: u, id: B._getFirstPointerId(e) }
    ]);
  }
  _setPointerPosition(e) {
    B.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(e);
  }
  _getContentPosition() {
    if (!this.content || !this.content.getBoundingClientRect)
      return {
        top: 0,
        left: 0,
        scaleX: 1,
        scaleY: 1
      };
    var e = this.content.getBoundingClientRect();
    return {
      top: e.top,
      left: e.left,
      scaleX: e.width / this.content.clientWidth || 1,
      scaleY: e.height / this.content.clientHeight || 1
    };
  }
  _buildDOM() {
    if (this.bufferCanvas = new ac({
      width: this.width(),
      height: this.height()
    }), this.bufferHitCanvas = new n0({
      pixelRatio: 1,
      width: this.width(),
      height: this.height()
    }), !!Be.isBrowser) {
      var e = this.container();
      if (!e)
        throw "Stage has no container. A container is required.";
      e.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), e.appendChild(this.content), this._resizeDOM();
    }
  }
  cache() {
    return B.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
  }
  clearCache() {
    return this;
  }
  batchDraw() {
    return this.getChildren().forEach(function(e) {
      e.batchDraw();
    }), this;
  }
};
Iv.prototype.nodeType = b5;
Pn(Iv);
L.addGetterSetter(Iv, "container");
var e_ = "hasShadow", t_ = "shadowRGBA", n_ = "patternImage", r_ = "linearGradient", a_ = "radialGradient";
let xv;
function Dg() {
  return xv || (xv = B.createCanvasElement().getContext("2d"), xv);
}
const rd = {};
function O5(o) {
  o.fill();
}
function L5(o) {
  o.stroke();
}
function A5(o) {
  o.fill();
}
function P5(o) {
  o.stroke();
}
function k5() {
  this._clearCache(e_);
}
function z5() {
  this._clearCache(t_);
}
function U5() {
  this._clearCache(n_);
}
function F5() {
  this._clearCache(r_);
}
function H5() {
  this._clearCache(a_);
}
class ve extends _e {
  constructor(e) {
    super(e);
    let a;
    for (; a = B.getRandomColor(), !(a && !(a in rd)); )
      ;
    this.colorKey = a, rd[a] = this;
  }
  getContext() {
    return B.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
  }
  getCanvas() {
    return B.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
  }
  getSceneFunc() {
    return this.attrs.sceneFunc || this._sceneFunc;
  }
  getHitFunc() {
    return this.attrs.hitFunc || this._hitFunc;
  }
  hasShadow() {
    return this._getCache(e_, this._hasShadow);
  }
  _hasShadow() {
    return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
  }
  _getFillPattern() {
    return this._getCache(n_, this.__getFillPattern);
  }
  __getFillPattern() {
    if (this.fillPatternImage()) {
      var e = Dg();
      const a = e.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
      if (a && a.setTransform) {
        const s = new Qa();
        s.translate(this.fillPatternX(), this.fillPatternY()), s.rotate(Be.getAngle(this.fillPatternRotation())), s.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), s.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
        const u = s.getMatrix(), d = typeof DOMMatrix > "u" ? {
          a: u[0],
          b: u[1],
          c: u[2],
          d: u[3],
          e: u[4],
          f: u[5]
        } : new DOMMatrix(u);
        a.setTransform(d);
      }
      return a;
    }
  }
  _getLinearGradient() {
    return this._getCache(r_, this.__getLinearGradient);
  }
  __getLinearGradient() {
    var e = this.fillLinearGradientColorStops();
    if (e) {
      for (var a = Dg(), s = this.fillLinearGradientStartPoint(), u = this.fillLinearGradientEndPoint(), d = a.createLinearGradient(s.x, s.y, u.x, u.y), v = 0; v < e.length; v += 2)
        d.addColorStop(e[v], e[v + 1]);
      return d;
    }
  }
  _getRadialGradient() {
    return this._getCache(a_, this.__getRadialGradient);
  }
  __getRadialGradient() {
    var e = this.fillRadialGradientColorStops();
    if (e) {
      for (var a = Dg(), s = this.fillRadialGradientStartPoint(), u = this.fillRadialGradientEndPoint(), d = a.createRadialGradient(s.x, s.y, this.fillRadialGradientStartRadius(), u.x, u.y, this.fillRadialGradientEndRadius()), v = 0; v < e.length; v += 2)
        d.addColorStop(e[v], e[v + 1]);
      return d;
    }
  }
  getShadowRGBA() {
    return this._getCache(t_, this._getShadowRGBA);
  }
  _getShadowRGBA() {
    if (this.hasShadow()) {
      var e = B.colorToRGBA(this.shadowColor());
      if (e)
        return "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a * (this.shadowOpacity() || 1) + ")";
    }
  }
  hasFill() {
    return this._calculate("hasFill", [
      "fillEnabled",
      "fill",
      "fillPatternImage",
      "fillLinearGradientColorStops",
      "fillRadialGradientColorStops"
    ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
  }
  hasStroke() {
    return this._calculate("hasStroke", [
      "strokeEnabled",
      "strokeWidth",
      "stroke",
      "strokeLinearGradientColorStops"
    ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
  }
  hasHitStroke() {
    const e = this.hitStrokeWidth();
    return e === "auto" ? this.hasStroke() : this.strokeEnabled() && !!e;
  }
  intersects(e) {
    var a = this.getStage(), s = a.bufferHitCanvas, u;
    return s.getContext().clear(), this.drawHit(s, null, !0), u = s.context.getImageData(Math.round(e.x), Math.round(e.y), 1, 1).data, u[3] > 0;
  }
  destroy() {
    return _e.prototype.destroy.call(this), delete rd[this.colorKey], delete this.colorKey, this;
  }
  _useBufferCanvas(e) {
    var a;
    if (!this.getStage() || !((a = this.attrs.perfectDrawEnabled) !== null && a !== void 0 ? a : !0))
      return !1;
    const u = e || this.hasFill(), d = this.hasStroke(), v = this.getAbsoluteOpacity() !== 1;
    if (u && d && v)
      return !0;
    const g = this.hasShadow(), _ = this.shadowForStrokeEnabled();
    return !!(u && d && g && _);
  }
  setStrokeHitEnabled(e) {
    B.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), e ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
  }
  getStrokeHitEnabled() {
    return this.hitStrokeWidth() !== 0;
  }
  getSelfRect() {
    var e = this.size();
    return {
      x: this._centroid ? -e.width / 2 : 0,
      y: this._centroid ? -e.height / 2 : 0,
      width: e.width,
      height: e.height
    };
  }
  getClientRect(e = {}) {
    const a = e.skipTransform, s = e.relativeTo, u = this.getSelfRect(), v = !e.skipStroke && this.hasStroke() && this.strokeWidth() || 0, g = u.width + v, _ = u.height + v, m = !e.skipShadow && this.hasShadow(), E = m ? this.shadowOffsetX() : 0, T = m ? this.shadowOffsetY() : 0, w = g + Math.abs(E), M = _ + Math.abs(T), R = m && this.shadowBlur() || 0, z = w + R * 2, k = M + R * 2, I = {
      width: z,
      height: k,
      x: -(v / 2 + R) + Math.min(E, 0) + u.x,
      y: -(v / 2 + R) + Math.min(T, 0) + u.y
    };
    return a ? I : this._transformedRect(I, s);
  }
  drawScene(e, a) {
    var s = this.getLayer(), u = e || s.getCanvas(), d = u.getContext(), v = this._getCanvasCache(), g = this.getSceneFunc(), _ = this.hasShadow(), m, E, T, w = u.isCache, M = a === this;
    if (!this.isVisible() && !M)
      return this;
    if (v) {
      d.save();
      var R = this.getAbsoluteTransform(a).getMatrix();
      return d.transform(R[0], R[1], R[2], R[3], R[4], R[5]), this._drawCachedSceneCanvas(d), d.restore(), this;
    }
    if (!g)
      return this;
    if (d.save(), this._useBufferCanvas() && !w) {
      m = this.getStage(), E = m.bufferCanvas, T = E.getContext(), T.clear(), T.save(), T._applyLineJoin(this);
      var z = this.getAbsoluteTransform(a).getMatrix();
      T.transform(z[0], z[1], z[2], z[3], z[4], z[5]), g.call(this, T, this), T.restore();
      var k = E.pixelRatio;
      _ && d._applyShadow(this), d._applyOpacity(this), d._applyGlobalCompositeOperation(this), d.drawImage(E._canvas, 0, 0, E.width / k, E.height / k);
    } else {
      if (d._applyLineJoin(this), !M) {
        var z = this.getAbsoluteTransform(a).getMatrix();
        d.transform(z[0], z[1], z[2], z[3], z[4], z[5]), d._applyOpacity(this), d._applyGlobalCompositeOperation(this);
      }
      _ && d._applyShadow(this), g.call(this, d, this);
    }
    return d.restore(), this;
  }
  drawHit(e, a, s = !1) {
    if (!this.shouldDrawHit(a, s))
      return this;
    var u = this.getLayer(), d = e || u.hitCanvas, v = d && d.getContext(), g = this.hitFunc() || this.sceneFunc(), _ = this._getCanvasCache(), m = _ && _.hit;
    if (this.colorKey || B.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), m) {
      v.save();
      var E = this.getAbsoluteTransform(a).getMatrix();
      return v.transform(E[0], E[1], E[2], E[3], E[4], E[5]), this._drawCachedHitCanvas(v), v.restore(), this;
    }
    if (!g)
      return this;
    if (v.save(), v._applyLineJoin(this), !(this === a)) {
      var w = this.getAbsoluteTransform(a).getMatrix();
      v.transform(w[0], w[1], w[2], w[3], w[4], w[5]);
    }
    return g.call(this, v, this), v.restore(), this;
  }
  drawHitFromCache(e = 0) {
    var a = this._getCanvasCache(), s = this._getCachedSceneCanvas(), u = a.hit, d = u.getContext(), v = u.getWidth(), g = u.getHeight(), _, m, E, T, w, M;
    d.clear(), d.drawImage(s._canvas, 0, 0, v, g);
    try {
      for (_ = d.getImageData(0, 0, v, g), m = _.data, E = m.length, T = B._hexToRgb(this.colorKey), w = 0; w < E; w += 4)
        M = m[w + 3], M > e ? (m[w] = T.r, m[w + 1] = T.g, m[w + 2] = T.b, m[w + 3] = 255) : m[w + 3] = 0;
      d.putImageData(_, 0, 0);
    } catch (R) {
      B.error("Unable to draw hit graph from cached scene canvas. " + R.message);
    }
    return this;
  }
  hasPointerCapture(e) {
    return BS(e, this);
  }
  setPointerCapture(e) {
    IS(e, this);
  }
  releaseCapture(e) {
    nd(e);
  }
}
ve.prototype._fillFunc = O5;
ve.prototype._strokeFunc = L5;
ve.prototype._fillFuncHit = A5;
ve.prototype._strokeFuncHit = P5;
ve.prototype._centroid = !1;
ve.prototype.nodeType = "Shape";
Pn(ve);
ve.prototype.eventListeners = {};
ve.prototype.on.call(ve.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", k5);
ve.prototype.on.call(ve.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", z5);
ve.prototype.on.call(ve.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", U5);
ve.prototype.on.call(ve.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", F5);
ve.prototype.on.call(ve.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", H5);
L.addGetterSetter(ve, "stroke", void 0, GS());
L.addGetterSetter(ve, "strokeWidth", 2, ye());
L.addGetterSetter(ve, "fillAfterStrokeEnabled", !1);
L.addGetterSetter(ve, "hitStrokeWidth", "auto", t0());
L.addGetterSetter(ve, "strokeHitEnabled", !0, Hi());
L.addGetterSetter(ve, "perfectDrawEnabled", !0, Hi());
L.addGetterSetter(ve, "shadowForStrokeEnabled", !0, Hi());
L.addGetterSetter(ve, "lineJoin");
L.addGetterSetter(ve, "lineCap");
L.addGetterSetter(ve, "sceneFunc");
L.addGetterSetter(ve, "hitFunc");
L.addGetterSetter(ve, "dash");
L.addGetterSetter(ve, "dashOffset", 0, ye());
L.addGetterSetter(ve, "shadowColor", void 0, cc());
L.addGetterSetter(ve, "shadowBlur", 0, ye());
L.addGetterSetter(ve, "shadowOpacity", 1, ye());
L.addComponentsGetterSetter(ve, "shadowOffset", ["x", "y"]);
L.addGetterSetter(ve, "shadowOffsetX", 0, ye());
L.addGetterSetter(ve, "shadowOffsetY", 0, ye());
L.addGetterSetter(ve, "fillPatternImage");
L.addGetterSetter(ve, "fill", void 0, GS());
L.addGetterSetter(ve, "fillPatternX", 0, ye());
L.addGetterSetter(ve, "fillPatternY", 0, ye());
L.addGetterSetter(ve, "fillLinearGradientColorStops");
L.addGetterSetter(ve, "strokeLinearGradientColorStops");
L.addGetterSetter(ve, "fillRadialGradientStartRadius", 0);
L.addGetterSetter(ve, "fillRadialGradientEndRadius", 0);
L.addGetterSetter(ve, "fillRadialGradientColorStops");
L.addGetterSetter(ve, "fillPatternRepeat", "repeat");
L.addGetterSetter(ve, "fillEnabled", !0);
L.addGetterSetter(ve, "strokeEnabled", !0);
L.addGetterSetter(ve, "shadowEnabled", !0);
L.addGetterSetter(ve, "dashEnabled", !0);
L.addGetterSetter(ve, "strokeScaleEnabled", !0);
L.addGetterSetter(ve, "fillPriority", "color");
L.addComponentsGetterSetter(ve, "fillPatternOffset", ["x", "y"]);
L.addGetterSetter(ve, "fillPatternOffsetX", 0, ye());
L.addGetterSetter(ve, "fillPatternOffsetY", 0, ye());
L.addComponentsGetterSetter(ve, "fillPatternScale", ["x", "y"]);
L.addGetterSetter(ve, "fillPatternScaleX", 1, ye());
L.addGetterSetter(ve, "fillPatternScaleY", 1, ye());
L.addComponentsGetterSetter(ve, "fillLinearGradientStartPoint", [
  "x",
  "y"
]);
L.addComponentsGetterSetter(ve, "strokeLinearGradientStartPoint", [
  "x",
  "y"
]);
L.addGetterSetter(ve, "fillLinearGradientStartPointX", 0);
L.addGetterSetter(ve, "strokeLinearGradientStartPointX", 0);
L.addGetterSetter(ve, "fillLinearGradientStartPointY", 0);
L.addGetterSetter(ve, "strokeLinearGradientStartPointY", 0);
L.addComponentsGetterSetter(ve, "fillLinearGradientEndPoint", [
  "x",
  "y"
]);
L.addComponentsGetterSetter(ve, "strokeLinearGradientEndPoint", [
  "x",
  "y"
]);
L.addGetterSetter(ve, "fillLinearGradientEndPointX", 0);
L.addGetterSetter(ve, "strokeLinearGradientEndPointX", 0);
L.addGetterSetter(ve, "fillLinearGradientEndPointY", 0);
L.addGetterSetter(ve, "strokeLinearGradientEndPointY", 0);
L.addComponentsGetterSetter(ve, "fillRadialGradientStartPoint", [
  "x",
  "y"
]);
L.addGetterSetter(ve, "fillRadialGradientStartPointX", 0);
L.addGetterSetter(ve, "fillRadialGradientStartPointY", 0);
L.addComponentsGetterSetter(ve, "fillRadialGradientEndPoint", [
  "x",
  "y"
]);
L.addGetterSetter(ve, "fillRadialGradientEndPointX", 0);
L.addGetterSetter(ve, "fillRadialGradientEndPointY", 0);
L.addGetterSetter(ve, "fillPatternRotation", 0);
L.backCompat(ve, {
  dashArray: "dash",
  getDashArray: "getDash",
  setDashArray: "getDash",
  drawFunc: "sceneFunc",
  getDrawFunc: "getSceneFunc",
  setDrawFunc: "setSceneFunc",
  drawHitFunc: "hitFunc",
  getDrawHitFunc: "getHitFunc",
  setDrawHitFunc: "setHitFunc"
});
var G5 = "#", j5 = "beforeDraw", B5 = "draw", i_ = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], I5 = i_.length;
let Ao = class extends Ka {
  constructor(e) {
    super(e), this.canvas = new ac(), this.hitCanvas = new n0({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(e) {
    return this.getContext().clear(e), this.getHitCanvas().getContext().clear(e), this;
  }
  setZIndex(e) {
    super.setZIndex(e);
    var a = this.getStage();
    return a && a.content && (a.content.removeChild(this.getNativeCanvasElement()), e < a.children.length - 1 ? a.content.insertBefore(this.getNativeCanvasElement(), a.children[e + 1].getCanvas()._canvas) : a.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    _e.prototype.moveToTop.call(this);
    var e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    var e = _e.prototype.moveUp.call(this);
    if (!e)
      return !1;
    var a = this.getStage();
    return !a || !a.content ? !1 : (a.content.removeChild(this.getNativeCanvasElement()), this.index < a.children.length - 1 ? a.content.insertBefore(this.getNativeCanvasElement(), a.children[this.index + 1].getCanvas()._canvas) : a.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (_e.prototype.moveDown.call(this)) {
      var e = this.getStage();
      if (e) {
        var a = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), a[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (_e.prototype.moveToBottom.call(this)) {
      var e = this.getStage();
      if (e) {
        var a = e.children;
        e.content && (e.content.removeChild(this.getNativeCanvasElement()), e.content.insertBefore(this.getNativeCanvasElement(), a[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var e = this.getNativeCanvasElement();
    return _e.prototype.remove.call(this), e && e.parentNode && B._isInDocument(e) && e.parentNode.removeChild(e), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: e, height: a }) {
    return this.canvas.setSize(e, a), this.hitCanvas.setSize(e, a), this._setSmoothEnabled(), this;
  }
  _validateAdd(e) {
    var a = e.getType();
    a !== "Group" && a !== "Shape" && B.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(e) {
    return e = e || {}, e.width = e.width || this.getWidth(), e.height = e.height || this.getHeight(), e.x = e.x !== void 0 ? e.x : this.x(), e.y = e.y !== void 0 ? e.y : this.y(), _e.prototype._toKonvaCanvas.call(this, e);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    B.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    B.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, B.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(e) {
    if (!this.isListening() || !this.isVisible())
      return null;
    for (var a = 1, s = !1; ; ) {
      for (let u = 0; u < I5; u++) {
        const d = i_[u], v = this._getIntersection({
          x: e.x + d.x * a,
          y: e.y + d.y * a
        }), g = v.shape;
        if (g)
          return g;
        if (s = !!v.antialiased, !v.antialiased)
          break;
      }
      if (s)
        a += 1;
      else
        return null;
    }
  }
  _getIntersection(e) {
    const a = this.hitCanvas.pixelRatio, s = this.hitCanvas.context.getImageData(Math.round(e.x * a), Math.round(e.y * a), 1, 1).data, u = s[3];
    if (u === 255) {
      const d = B._rgbToHex(s[0], s[1], s[2]), v = rd[G5 + d];
      return v ? {
        shape: v
      } : {
        antialiased: !0
      };
    } else if (u > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(e, a) {
    var s = this.getLayer(), u = e || s && s.getCanvas();
    return this._fire(j5, {
      node: this
    }), this.clearBeforeDraw() && u.getContext().clear(), Ka.prototype.drawScene.call(this, u, a), this._fire(B5, {
      node: this
    }), this;
  }
  drawHit(e, a) {
    var s = this.getLayer(), u = e || s && s.hitCanvas;
    return s && s.clearBeforeDraw() && s.getHitCanvas().getContext().clear(), Ka.prototype.drawHit.call(this, u, a), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(e) {
    B.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(e);
  }
  getHitGraphEnabled(e) {
    return B.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var e = this.parent, a = !!this.hitCanvas._canvas.parentNode;
      a ? e.content.removeChild(this.hitCanvas._canvas) : e.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return B.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
};
Ao.prototype.nodeType = "Layer";
Pn(Ao);
L.addGetterSetter(Ao, "imageSmoothingEnabled", !0);
L.addGetterSetter(Ao, "clearBeforeDraw", !0);
L.addGetterSetter(Ao, "hitGraphEnabled", !0, Hi());
class a0 extends Ao {
  constructor(e) {
    super(e), this.listening(!1), B.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
a0.prototype.nodeType = "FastLayer";
Pn(a0);
let lc = class extends Ka {
  _validateAdd(e) {
    var a = e.getType();
    a !== "Group" && a !== "Shape" && B.throw("You may only add groups and shapes to groups.");
  }
};
lc.prototype.nodeType = "Group";
Pn(lc);
var Ng = function() {
  return rc.performance && rc.performance.now ? function() {
    return rc.performance.now();
  } : function() {
    return new Date().getTime();
  };
}();
class di {
  constructor(e, a) {
    this.id = di.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: Ng(),
      frameRate: 0
    }, this.func = e, this.setLayers(a);
  }
  setLayers(e) {
    var a = [];
    return e ? e.length > 0 ? a = e : a = [e] : a = [], this.layers = a, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(e) {
    var a = this.layers, s = a.length, u;
    for (u = 0; u < s; u++)
      if (a[u]._id === e._id)
        return !1;
    return this.layers.push(e), !0;
  }
  isRunning() {
    var e = di, a = e.animations, s = a.length, u;
    for (u = 0; u < s; u++)
      if (a[u].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = Ng(), di._addAnimation(this), this;
  }
  stop() {
    return di._removeAnimation(this), this;
  }
  _updateFrameObject(e) {
    this.frame.timeDiff = e - this.frame.lastTime, this.frame.lastTime = e, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(e) {
    this.animations.push(e), this._handleAnimation();
  }
  static _removeAnimation(e) {
    var a = e.id, s = this.animations, u = s.length, d;
    for (d = 0; d < u; d++)
      if (s[d].id === a) {
        this.animations.splice(d, 1);
        break;
      }
  }
  static _runFrames() {
    var e = {}, a = this.animations, s, u, d, v, g, _, m, E, T;
    for (v = 0; v < a.length; v++)
      if (s = a[v], u = s.layers, d = s.func, s._updateFrameObject(Ng()), _ = u.length, d ? T = d.call(s, s.frame) !== !1 : T = !0, !!T)
        for (g = 0; g < _; g++)
          m = u[g], m._id !== void 0 && (e[m._id] = m);
    for (E in e)
      e.hasOwnProperty(E) && e[E].batchDraw();
  }
  static _animationLoop() {
    var e = di;
    e.animations.length ? (e._runFrames(), B.requestAnimFrame(e._animationLoop)) : e.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, B.requestAnimFrame(this._animationLoop));
  }
}
di.animations = [];
di.animIdCounter = 0;
di.animRunning = !1;
var V5 = {
  node: 1,
  duration: 1,
  easing: 1,
  onFinish: 1,
  yoyo: 1
}, Y5 = 1, y2 = 2, S2 = 3, q5 = 0, _2 = ["fill", "stroke", "shadowColor"];
class W5 {
  constructor(e, a, s, u, d, v, g) {
    this.prop = e, this.propFunc = a, this.begin = u, this._pos = u, this.duration = v, this._change = 0, this.prevPos = 0, this.yoyo = g, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = s, this._change = d - this.begin, this.pause();
  }
  fire(e) {
    var a = this[e];
    a && a();
  }
  setTime(e) {
    e > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : e < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = e, this.update());
  }
  getTime() {
    return this._time;
  }
  setPosition(e) {
    this.prevPos = this._pos, this.propFunc(e), this._pos = e;
  }
  getPosition(e) {
    return e === void 0 && (e = this._time), this.func(e, this.begin, this._change, this.duration);
  }
  play() {
    this.state = y2, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
  }
  reverse() {
    this.state = S2, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
  }
  seek(e) {
    this.pause(), this._time = e, this.update(), this.fire("onSeek");
  }
  reset() {
    this.pause(), this._time = 0, this.update(), this.fire("onReset");
  }
  finish() {
    this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
  }
  update() {
    this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
  }
  onEnterFrame() {
    var e = this.getTimer() - this._startTime;
    this.state === y2 ? this.setTime(e) : this.state === S2 && this.setTime(this.duration - e);
  }
  pause() {
    this.state = Y5, this.fire("onPause");
  }
  getTimer() {
    return new Date().getTime();
  }
}
class Xn {
  constructor(e) {
    var a = this, s = e.node, u = s._id, d, v = e.easing || ad.Linear, g = !!e.yoyo, _;
    typeof e.duration > "u" ? d = 0.3 : e.duration === 0 ? d = 1e-3 : d = e.duration, this.node = s, this._id = q5++;
    var m = s.getLayer() || (s instanceof Be.Stage ? s.getLayers() : null);
    m || B.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new di(function() {
      a.tween.onEnterFrame();
    }, m), this.tween = new W5(_, function(E) {
      a._tweenFunc(E);
    }, v, 0, 1, d * 1e3, g), this._addListeners(), Xn.attrs[u] || (Xn.attrs[u] = {}), Xn.attrs[u][this._id] || (Xn.attrs[u][this._id] = {}), Xn.tweens[u] || (Xn.tweens[u] = {});
    for (_ in e)
      V5[_] === void 0 && this._addAttr(_, e[_]);
    this.reset(), this.onFinish = e.onFinish, this.onReset = e.onReset, this.onUpdate = e.onUpdate;
  }
  _addAttr(e, a) {
    var s = this.node, u = s._id, d, v, g, _, m, E, T, w;
    if (g = Xn.tweens[u][e], g && delete Xn.attrs[u][g][e], d = s.getAttr(e), B._isArray(a))
      if (v = [], m = Math.max(a.length, d.length), e === "points" && a.length !== d.length && (a.length > d.length ? (T = d, d = B._prepareArrayForTween(d, a, s.closed())) : (E = a, a = B._prepareArrayForTween(a, d, s.closed()))), e.indexOf("fill") === 0)
        for (_ = 0; _ < m; _++)
          if (_ % 2 === 0)
            v.push(a[_] - d[_]);
          else {
            var M = B.colorToRGBA(d[_]);
            w = B.colorToRGBA(a[_]), d[_] = M, v.push({
              r: w.r - M.r,
              g: w.g - M.g,
              b: w.b - M.b,
              a: w.a - M.a
            });
          }
      else
        for (_ = 0; _ < m; _++)
          v.push(a[_] - d[_]);
    else
      _2.indexOf(e) !== -1 ? (d = B.colorToRGBA(d), w = B.colorToRGBA(a), v = {
        r: w.r - d.r,
        g: w.g - d.g,
        b: w.b - d.b,
        a: w.a - d.a
      }) : v = a - d;
    Xn.attrs[u][this._id][e] = {
      start: d,
      diff: v,
      end: a,
      trueEnd: E,
      trueStart: T
    }, Xn.tweens[u][e] = this._id;
  }
  _tweenFunc(e) {
    var a = this.node, s = Xn.attrs[a._id][this._id], u, d, v, g, _, m, E, T;
    for (u in s) {
      if (d = s[u], v = d.start, g = d.diff, T = d.end, B._isArray(v))
        if (_ = [], E = Math.max(v.length, T.length), u.indexOf("fill") === 0)
          for (m = 0; m < E; m++)
            m % 2 === 0 ? _.push((v[m] || 0) + g[m] * e) : _.push("rgba(" + Math.round(v[m].r + g[m].r * e) + "," + Math.round(v[m].g + g[m].g * e) + "," + Math.round(v[m].b + g[m].b * e) + "," + (v[m].a + g[m].a * e) + ")");
        else
          for (m = 0; m < E; m++)
            _.push((v[m] || 0) + g[m] * e);
      else
        _2.indexOf(u) !== -1 ? _ = "rgba(" + Math.round(v.r + g.r * e) + "," + Math.round(v.g + g.g * e) + "," + Math.round(v.b + g.b * e) + "," + (v.a + g.a * e) + ")" : _ = v + g * e;
      a.setAttr(u, _);
    }
  }
  _addListeners() {
    this.tween.onPlay = () => {
      this.anim.start();
    }, this.tween.onReverse = () => {
      this.anim.start();
    }, this.tween.onPause = () => {
      this.anim.stop();
    }, this.tween.onFinish = () => {
      var e = this.node, a = Xn.attrs[e._id][this._id];
      a.points && a.points.trueEnd && e.setAttr("points", a.points.trueEnd), this.onFinish && this.onFinish.call(this);
    }, this.tween.onReset = () => {
      var e = this.node, a = Xn.attrs[e._id][this._id];
      a.points && a.points.trueStart && e.points(a.points.trueStart), this.onReset && this.onReset();
    }, this.tween.onUpdate = () => {
      this.onUpdate && this.onUpdate.call(this);
    };
  }
  play() {
    return this.tween.play(), this;
  }
  reverse() {
    return this.tween.reverse(), this;
  }
  reset() {
    return this.tween.reset(), this;
  }
  seek(e) {
    return this.tween.seek(e * 1e3), this;
  }
  pause() {
    return this.tween.pause(), this;
  }
  finish() {
    return this.tween.finish(), this;
  }
  destroy() {
    var e = this.node._id, a = this._id, s = Xn.tweens[e], u;
    this.pause();
    for (u in s)
      delete Xn.tweens[e][u];
    delete Xn.attrs[e][a];
  }
}
Xn.attrs = {};
Xn.tweens = {};
_e.prototype.to = function(o) {
  var e = o.onFinish;
  o.node = this, o.onFinish = function() {
    this.destroy(), e && e();
  };
  var a = new Xn(o);
  a.play();
};
const ad = {
  BackEaseIn(o, e, a, s) {
    var u = 1.70158;
    return a * (o /= s) * o * ((u + 1) * o - u) + e;
  },
  BackEaseOut(o, e, a, s) {
    var u = 1.70158;
    return a * ((o = o / s - 1) * o * ((u + 1) * o + u) + 1) + e;
  },
  BackEaseInOut(o, e, a, s) {
    var u = 1.70158;
    return (o /= s / 2) < 1 ? a / 2 * (o * o * (((u *= 1.525) + 1) * o - u)) + e : a / 2 * ((o -= 2) * o * (((u *= 1.525) + 1) * o + u) + 2) + e;
  },
  ElasticEaseIn(o, e, a, s, u, d) {
    var v = 0;
    return o === 0 ? e : (o /= s) === 1 ? e + a : (d || (d = s * 0.3), !u || u < Math.abs(a) ? (u = a, v = d / 4) : v = d / (2 * Math.PI) * Math.asin(a / u), -(u * Math.pow(2, 10 * (o -= 1)) * Math.sin((o * s - v) * (2 * Math.PI) / d)) + e);
  },
  ElasticEaseOut(o, e, a, s, u, d) {
    var v = 0;
    return o === 0 ? e : (o /= s) === 1 ? e + a : (d || (d = s * 0.3), !u || u < Math.abs(a) ? (u = a, v = d / 4) : v = d / (2 * Math.PI) * Math.asin(a / u), u * Math.pow(2, -10 * o) * Math.sin((o * s - v) * (2 * Math.PI) / d) + a + e);
  },
  ElasticEaseInOut(o, e, a, s, u, d) {
    var v = 0;
    return o === 0 ? e : (o /= s / 2) === 2 ? e + a : (d || (d = s * (0.3 * 1.5)), !u || u < Math.abs(a) ? (u = a, v = d / 4) : v = d / (2 * Math.PI) * Math.asin(a / u), o < 1 ? -0.5 * (u * Math.pow(2, 10 * (o -= 1)) * Math.sin((o * s - v) * (2 * Math.PI) / d)) + e : u * Math.pow(2, -10 * (o -= 1)) * Math.sin((o * s - v) * (2 * Math.PI) / d) * 0.5 + a + e);
  },
  BounceEaseOut(o, e, a, s) {
    return (o /= s) < 1 / 2.75 ? a * (7.5625 * o * o) + e : o < 2 / 2.75 ? a * (7.5625 * (o -= 1.5 / 2.75) * o + 0.75) + e : o < 2.5 / 2.75 ? a * (7.5625 * (o -= 2.25 / 2.75) * o + 0.9375) + e : a * (7.5625 * (o -= 2.625 / 2.75) * o + 0.984375) + e;
  },
  BounceEaseIn(o, e, a, s) {
    return a - ad.BounceEaseOut(s - o, 0, a, s) + e;
  },
  BounceEaseInOut(o, e, a, s) {
    return o < s / 2 ? ad.BounceEaseIn(o * 2, 0, a, s) * 0.5 + e : ad.BounceEaseOut(o * 2 - s, 0, a, s) * 0.5 + a * 0.5 + e;
  },
  EaseIn(o, e, a, s) {
    return a * (o /= s) * o + e;
  },
  EaseOut(o, e, a, s) {
    return -a * (o /= s) * (o - 2) + e;
  },
  EaseInOut(o, e, a, s) {
    return (o /= s / 2) < 1 ? a / 2 * o * o + e : -a / 2 * (--o * (o - 2) - 1) + e;
  },
  StrongEaseIn(o, e, a, s) {
    return a * (o /= s) * o * o * o * o + e;
  },
  StrongEaseOut(o, e, a, s) {
    return a * ((o = o / s - 1) * o * o * o * o + 1) + e;
  },
  StrongEaseInOut(o, e, a, s) {
    return (o /= s / 2) < 1 ? a / 2 * o * o * o * o * o + e : a / 2 * ((o -= 2) * o * o * o * o + 2) + e;
  },
  Linear(o, e, a, s) {
    return a * o / s + e;
  }
}, Mo = B._assign(Be, {
  Util: B,
  Transform: Qa,
  Node: _e,
  Container: Ka,
  Stage: Iv,
  stages: Nv,
  Layer: Ao,
  FastLayer: a0,
  Group: lc,
  DD: Bt,
  Shape: ve,
  shapes: rd,
  Animation: di,
  Tween: Xn,
  Easings: ad,
  Context: jv,
  Canvas: Bv
});
class Kl extends ve {
  _sceneFunc(e) {
    var a = Be.getAngle(this.angle()), s = this.clockwise();
    e.beginPath(), e.arc(0, 0, this.outerRadius(), 0, a, s), e.arc(0, 0, this.innerRadius(), a, 0, !s), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
  getSelfRect() {
    const e = this.innerRadius(), a = this.outerRadius(), s = this.clockwise(), u = Be.getAngle(s ? 360 - this.angle() : this.angle()), d = Math.cos(Math.min(u, Math.PI)), v = 1, g = Math.sin(Math.min(Math.max(Math.PI, u), 3 * Math.PI / 2)), _ = Math.sin(Math.min(u, Math.PI / 2)), m = d * (d > 0 ? e : a), E = v * a, T = g * (g > 0 ? e : a), w = _ * (_ > 0 ? a : e);
    return {
      x: m,
      y: s ? -1 * w : T,
      width: E - m,
      height: w - T
    };
  }
}
Kl.prototype._centroid = !0;
Kl.prototype.className = "Arc";
Kl.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
Pn(Kl);
L.addGetterSetter(Kl, "innerRadius", 0, ye());
L.addGetterSetter(Kl, "outerRadius", 0, ye());
L.addGetterSetter(Kl, "angle", 0, ye());
L.addGetterSetter(Kl, "clockwise", !1, Hi());
function Bg(o, e, a, s, u, d, v) {
  var g = Math.sqrt(Math.pow(a - o, 2) + Math.pow(s - e, 2)), _ = Math.sqrt(Math.pow(u - a, 2) + Math.pow(d - s, 2)), m = v * g / (g + _), E = v * _ / (g + _), T = a - m * (u - o), w = s - m * (d - e), M = a + E * (u - o), R = s + E * (d - e);
  return [T, w, M, R];
}
function x2(o, e) {
  var a = o.length, s = [], u, d;
  for (u = 2; u < a - 2; u += 2)
    d = Bg(o[u - 2], o[u - 1], o[u], o[u + 1], o[u + 2], o[u + 3], e), !isNaN(d[0]) && (s.push(d[0]), s.push(d[1]), s.push(o[u]), s.push(o[u + 1]), s.push(d[2]), s.push(d[3]));
  return s;
}
let Jl = class extends ve {
  constructor(e) {
    super(e), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(e) {
    var a = this.points(), s = a.length, u = this.tension(), d = this.closed(), v = this.bezier(), g, _, m;
    if (s) {
      if (e.beginPath(), e.moveTo(a[0], a[1]), u !== 0 && s > 4) {
        for (g = this.getTensionPoints(), _ = g.length, m = d ? 0 : 4, d || e.quadraticCurveTo(g[0], g[1], g[2], g[3]); m < _ - 2; )
          e.bezierCurveTo(g[m++], g[m++], g[m++], g[m++], g[m++], g[m++]);
        d || e.quadraticCurveTo(g[_ - 2], g[_ - 1], a[s - 2], a[s - 1]);
      } else if (v)
        for (m = 2; m < s; )
          e.bezierCurveTo(a[m++], a[m++], a[m++], a[m++], a[m++], a[m++]);
      else
        for (m = 2; m < s; m += 2)
          e.lineTo(a[m], a[m + 1]);
      d ? (e.closePath(), e.fillStrokeShape(this)) : e.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : x2(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var e = this.points(), a = e.length, s = this.tension(), u = Bg(e[a - 2], e[a - 1], e[0], e[1], e[2], e[3], s), d = Bg(e[a - 4], e[a - 3], e[a - 2], e[a - 1], e[0], e[1], s), v = x2(e, s), g = [u[2], u[3]].concat(v).concat([
      d[0],
      d[1],
      e[a - 2],
      e[a - 1],
      d[2],
      d[3],
      u[0],
      u[1],
      e[0],
      e[1]
    ]);
    return g;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var e = this.points();
    if (e.length < 4)
      return {
        x: e[0] || 0,
        y: e[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? e = [
      e[0],
      e[1],
      ...this._getTensionPoints(),
      e[e.length - 2],
      e[e.length - 1]
    ] : e = this.points();
    for (var a = e[0], s = e[0], u = e[1], d = e[1], v, g, _ = 0; _ < e.length / 2; _++)
      v = e[_ * 2], g = e[_ * 2 + 1], a = Math.min(a, v), s = Math.max(s, v), u = Math.min(u, g), d = Math.max(d, g);
    return {
      x: a,
      y: u,
      width: s - a,
      height: d - u
    };
  }
};
Jl.prototype.className = "Line";
Jl.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
Pn(Jl);
L.addGetterSetter(Jl, "closed", !1);
L.addGetterSetter(Jl, "bezier", !1);
L.addGetterSetter(Jl, "tension", 0, ye());
L.addGetterSetter(Jl, "points", [], r5());
class vn extends ve {
  constructor(e) {
    super(e), this.dataArray = [], this.pathLength = 0, this.dataArray = vn.parsePathData(this.data()), this.pathLength = 0;
    for (var a = 0; a < this.dataArray.length; ++a)
      this.pathLength += this.dataArray[a].pathLength;
    this.on("dataChange.konva", function() {
      this.dataArray = vn.parsePathData(this.data()), this.pathLength = 0;
      for (var s = 0; s < this.dataArray.length; ++s)
        this.pathLength += this.dataArray[s].pathLength;
    });
  }
  _sceneFunc(e) {
    var a = this.dataArray;
    e.beginPath();
    for (var s = !1, u = 0; u < a.length; u++) {
      var d = a[u].command, v = a[u].points;
      switch (d) {
        case "L":
          e.lineTo(v[0], v[1]);
          break;
        case "M":
          e.moveTo(v[0], v[1]);
          break;
        case "C":
          e.bezierCurveTo(v[0], v[1], v[2], v[3], v[4], v[5]);
          break;
        case "Q":
          e.quadraticCurveTo(v[0], v[1], v[2], v[3]);
          break;
        case "A":
          var g = v[0], _ = v[1], m = v[2], E = v[3], T = v[4], w = v[5], M = v[6], R = v[7], z = m > E ? m : E, k = m > E ? 1 : m / E, I = m > E ? E / m : 1;
          e.translate(g, _), e.rotate(M), e.scale(k, I), e.arc(0, 0, z, T, T + w, 1 - R), e.scale(1 / k, 1 / I), e.rotate(-M), e.translate(-g, -_);
          break;
        case "z":
          s = !0, e.closePath();
          break;
      }
    }
    !s && !this.hasFill() ? e.strokeShape(this) : e.fillStrokeShape(this);
  }
  getSelfRect() {
    var e = [];
    this.dataArray.forEach(function(m) {
      if (m.command === "A") {
        var E = m.points[4], T = m.points[5], w = m.points[4] + T, M = Math.PI / 180;
        if (Math.abs(E - w) < M && (M = Math.abs(E - w)), T < 0)
          for (let R = E - M; R > w; R -= M) {
            const z = vn.getPointOnEllipticalArc(m.points[0], m.points[1], m.points[2], m.points[3], R, 0);
            e.push(z.x, z.y);
          }
        else
          for (let R = E + M; R < w; R += M) {
            const z = vn.getPointOnEllipticalArc(m.points[0], m.points[1], m.points[2], m.points[3], R, 0);
            e.push(z.x, z.y);
          }
      } else if (m.command === "C")
        for (let R = 0; R <= 1; R += 0.01) {
          const z = vn.getPointOnCubicBezier(R, m.start.x, m.start.y, m.points[0], m.points[1], m.points[2], m.points[3], m.points[4], m.points[5]);
          e.push(z.x, z.y);
        }
      else
        e = e.concat(m.points);
    });
    for (var a = e[0], s = e[0], u = e[1], d = e[1], v, g, _ = 0; _ < e.length / 2; _++)
      v = e[_ * 2], g = e[_ * 2 + 1], isNaN(v) || (a = Math.min(a, v), s = Math.max(s, v)), isNaN(g) || (u = Math.min(u, g), d = Math.max(d, g));
    return {
      x: a,
      y: u,
      width: s - a,
      height: d - u
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(e) {
    var a, s = 0, u = this.dataArray.length;
    if (!u)
      return null;
    for (; s < u && e > this.dataArray[s].pathLength; )
      e -= this.dataArray[s].pathLength, ++s;
    if (s === u)
      return a = this.dataArray[s - 1].points.slice(-2), {
        x: a[0],
        y: a[1]
      };
    if (e < 0.01)
      return a = this.dataArray[s].points.slice(0, 2), {
        x: a[0],
        y: a[1]
      };
    var d = this.dataArray[s], v = d.points;
    switch (d.command) {
      case "L":
        return vn.getPointOnLine(e, d.start.x, d.start.y, v[0], v[1]);
      case "C":
        return vn.getPointOnCubicBezier(e / d.pathLength, d.start.x, d.start.y, v[0], v[1], v[2], v[3], v[4], v[5]);
      case "Q":
        return vn.getPointOnQuadraticBezier(e / d.pathLength, d.start.x, d.start.y, v[0], v[1], v[2], v[3]);
      case "A":
        var g = v[0], _ = v[1], m = v[2], E = v[3], T = v[4], w = v[5], M = v[6];
        return T += w * e / d.pathLength, vn.getPointOnEllipticalArc(g, _, m, E, T, M);
    }
    return null;
  }
  static getLineLength(e, a, s, u) {
    return Math.sqrt((s - e) * (s - e) + (u - a) * (u - a));
  }
  static getPointOnLine(e, a, s, u, d, v, g) {
    v === void 0 && (v = a), g === void 0 && (g = s);
    var _ = (d - s) / (u - a + 1e-8), m = Math.sqrt(e * e / (1 + _ * _));
    u < a && (m *= -1);
    var E = _ * m, T;
    if (u === a)
      T = {
        x: v,
        y: g + E
      };
    else if ((g - s) / (v - a + 1e-8) === _)
      T = {
        x: v + m,
        y: g + E
      };
    else {
      var w, M, R = this.getLineLength(a, s, u, d), z = (v - a) * (u - a) + (g - s) * (d - s);
      z = z / (R * R), w = a + z * (u - a), M = s + z * (d - s);
      var k = this.getLineLength(v, g, w, M), I = Math.sqrt(e * e - k * k);
      m = Math.sqrt(I * I / (1 + _ * _)), u < a && (m *= -1), E = _ * m, T = {
        x: w + m,
        y: M + E
      };
    }
    return T;
  }
  static getPointOnCubicBezier(e, a, s, u, d, v, g, _, m) {
    function E(k) {
      return k * k * k;
    }
    function T(k) {
      return 3 * k * k * (1 - k);
    }
    function w(k) {
      return 3 * k * (1 - k) * (1 - k);
    }
    function M(k) {
      return (1 - k) * (1 - k) * (1 - k);
    }
    var R = _ * E(e) + v * T(e) + u * w(e) + a * M(e), z = m * E(e) + g * T(e) + d * w(e) + s * M(e);
    return {
      x: R,
      y: z
    };
  }
  static getPointOnQuadraticBezier(e, a, s, u, d, v, g) {
    function _(M) {
      return M * M;
    }
    function m(M) {
      return 2 * M * (1 - M);
    }
    function E(M) {
      return (1 - M) * (1 - M);
    }
    var T = v * _(e) + u * m(e) + a * E(e), w = g * _(e) + d * m(e) + s * E(e);
    return {
      x: T,
      y: w
    };
  }
  static getPointOnEllipticalArc(e, a, s, u, d, v) {
    var g = Math.cos(v), _ = Math.sin(v), m = {
      x: s * Math.cos(d),
      y: u * Math.sin(d)
    };
    return {
      x: e + (m.x * g - m.y * _),
      y: a + (m.x * _ + m.y * g)
    };
  }
  static parsePathData(e) {
    if (!e)
      return [];
    var a = e, s = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    a = a.replace(new RegExp(" ", "g"), ",");
    for (var u = 0; u < s.length; u++)
      a = a.replace(new RegExp(s[u], "g"), "|" + s[u]);
    var d = a.split("|"), v = [], g = [], _ = 0, m = 0, E = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, T;
    for (u = 1; u < d.length; u++) {
      var w = d[u], M = w.charAt(0);
      for (w = w.slice(1), g.length = 0; T = E.exec(w); )
        g.push(T[0]);
      for (var R = [], z = 0, k = g.length; z < k; z++) {
        if (g[z] === "00") {
          R.push(0, 0);
          continue;
        }
        var I = parseFloat(g[z]);
        isNaN(I) ? R.push(0) : R.push(I);
      }
      for (; R.length > 0 && !isNaN(R[0]); ) {
        var j = null, G = [], Z = _, U = m, V, X, le, ee, Q, K, xe, pe, ke, lt;
        switch (M) {
          case "l":
            _ += R.shift(), m += R.shift(), j = "L", G.push(_, m);
            break;
          case "L":
            _ = R.shift(), m = R.shift(), G.push(_, m);
            break;
          case "m":
            var Ie = R.shift(), Le = R.shift();
            if (_ += Ie, m += Le, j = "M", v.length > 2 && v[v.length - 1].command === "z") {
              for (var oe = v.length - 2; oe >= 0; oe--)
                if (v[oe].command === "M") {
                  _ = v[oe].points[0] + Ie, m = v[oe].points[1] + Le;
                  break;
                }
            }
            G.push(_, m), M = "l";
            break;
          case "M":
            _ = R.shift(), m = R.shift(), j = "M", G.push(_, m), M = "L";
            break;
          case "h":
            _ += R.shift(), j = "L", G.push(_, m);
            break;
          case "H":
            _ = R.shift(), j = "L", G.push(_, m);
            break;
          case "v":
            m += R.shift(), j = "L", G.push(_, m);
            break;
          case "V":
            m = R.shift(), j = "L", G.push(_, m);
            break;
          case "C":
            G.push(R.shift(), R.shift(), R.shift(), R.shift()), _ = R.shift(), m = R.shift(), G.push(_, m);
            break;
          case "c":
            G.push(_ + R.shift(), m + R.shift(), _ + R.shift(), m + R.shift()), _ += R.shift(), m += R.shift(), j = "C", G.push(_, m);
            break;
          case "S":
            X = _, le = m, V = v[v.length - 1], V.command === "C" && (X = _ + (_ - V.points[2]), le = m + (m - V.points[3])), G.push(X, le, R.shift(), R.shift()), _ = R.shift(), m = R.shift(), j = "C", G.push(_, m);
            break;
          case "s":
            X = _, le = m, V = v[v.length - 1], V.command === "C" && (X = _ + (_ - V.points[2]), le = m + (m - V.points[3])), G.push(X, le, _ + R.shift(), m + R.shift()), _ += R.shift(), m += R.shift(), j = "C", G.push(_, m);
            break;
          case "Q":
            G.push(R.shift(), R.shift()), _ = R.shift(), m = R.shift(), G.push(_, m);
            break;
          case "q":
            G.push(_ + R.shift(), m + R.shift()), _ += R.shift(), m += R.shift(), j = "Q", G.push(_, m);
            break;
          case "T":
            X = _, le = m, V = v[v.length - 1], V.command === "Q" && (X = _ + (_ - V.points[0]), le = m + (m - V.points[1])), _ = R.shift(), m = R.shift(), j = "Q", G.push(X, le, _, m);
            break;
          case "t":
            X = _, le = m, V = v[v.length - 1], V.command === "Q" && (X = _ + (_ - V.points[0]), le = m + (m - V.points[1])), _ += R.shift(), m += R.shift(), j = "Q", G.push(X, le, _, m);
            break;
          case "A":
            ee = R.shift(), Q = R.shift(), K = R.shift(), xe = R.shift(), pe = R.shift(), ke = _, lt = m, _ = R.shift(), m = R.shift(), j = "A", G = this.convertEndpointToCenterParameterization(ke, lt, _, m, xe, pe, ee, Q, K);
            break;
          case "a":
            ee = R.shift(), Q = R.shift(), K = R.shift(), xe = R.shift(), pe = R.shift(), ke = _, lt = m, _ += R.shift(), m += R.shift(), j = "A", G = this.convertEndpointToCenterParameterization(ke, lt, _, m, xe, pe, ee, Q, K);
            break;
        }
        v.push({
          command: j || M,
          points: G,
          start: {
            x: Z,
            y: U
          },
          pathLength: this.calcLength(Z, U, j || M, G)
        });
      }
      (M === "z" || M === "Z") && v.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return v;
  }
  static calcLength(e, a, s, u) {
    var d, v, g, _, m = vn;
    switch (s) {
      case "L":
        return m.getLineLength(e, a, u[0], u[1]);
      case "C":
        for (d = 0, v = m.getPointOnCubicBezier(0, e, a, u[0], u[1], u[2], u[3], u[4], u[5]), _ = 0.01; _ <= 1; _ += 0.01)
          g = m.getPointOnCubicBezier(_, e, a, u[0], u[1], u[2], u[3], u[4], u[5]), d += m.getLineLength(v.x, v.y, g.x, g.y), v = g;
        return d;
      case "Q":
        for (d = 0, v = m.getPointOnQuadraticBezier(0, e, a, u[0], u[1], u[2], u[3]), _ = 0.01; _ <= 1; _ += 0.01)
          g = m.getPointOnQuadraticBezier(_, e, a, u[0], u[1], u[2], u[3]), d += m.getLineLength(v.x, v.y, g.x, g.y), v = g;
        return d;
      case "A":
        d = 0;
        var E = u[4], T = u[5], w = u[4] + T, M = Math.PI / 180;
        if (Math.abs(E - w) < M && (M = Math.abs(E - w)), v = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], E, 0), T < 0)
          for (_ = E - M; _ > w; _ -= M)
            g = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], _, 0), d += m.getLineLength(v.x, v.y, g.x, g.y), v = g;
        else
          for (_ = E + M; _ < w; _ += M)
            g = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], _, 0), d += m.getLineLength(v.x, v.y, g.x, g.y), v = g;
        return g = m.getPointOnEllipticalArc(u[0], u[1], u[2], u[3], w, 0), d += m.getLineLength(v.x, v.y, g.x, g.y), d;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(e, a, s, u, d, v, g, _, m) {
    var E = m * (Math.PI / 180), T = Math.cos(E) * (e - s) / 2 + Math.sin(E) * (a - u) / 2, w = -1 * Math.sin(E) * (e - s) / 2 + Math.cos(E) * (a - u) / 2, M = T * T / (g * g) + w * w / (_ * _);
    M > 1 && (g *= Math.sqrt(M), _ *= Math.sqrt(M));
    var R = Math.sqrt((g * g * (_ * _) - g * g * (w * w) - _ * _ * (T * T)) / (g * g * (w * w) + _ * _ * (T * T)));
    d === v && (R *= -1), isNaN(R) && (R = 0);
    var z = R * g * w / _, k = R * -_ * T / g, I = (e + s) / 2 + Math.cos(E) * z - Math.sin(E) * k, j = (a + u) / 2 + Math.sin(E) * z + Math.cos(E) * k, G = function(Q) {
      return Math.sqrt(Q[0] * Q[0] + Q[1] * Q[1]);
    }, Z = function(Q, K) {
      return (Q[0] * K[0] + Q[1] * K[1]) / (G(Q) * G(K));
    }, U = function(Q, K) {
      return (Q[0] * K[1] < Q[1] * K[0] ? -1 : 1) * Math.acos(Z(Q, K));
    }, V = U([1, 0], [(T - z) / g, (w - k) / _]), X = [(T - z) / g, (w - k) / _], le = [(-1 * T - z) / g, (-1 * w - k) / _], ee = U(X, le);
    return Z(X, le) <= -1 && (ee = Math.PI), Z(X, le) >= 1 && (ee = 0), v === 0 && ee > 0 && (ee = ee - 2 * Math.PI), v === 1 && ee < 0 && (ee = ee + 2 * Math.PI), [I, j, g, _, V, ee, E, v];
  }
}
vn.prototype.className = "Path";
vn.prototype._attrsAffectingSize = ["data"];
Pn(vn);
L.addGetterSetter(vn, "data");
class Po extends Jl {
  _sceneFunc(e) {
    super._sceneFunc(e);
    var a = Math.PI * 2, s = this.points(), u = s, d = this.tension() !== 0 && s.length > 4;
    d && (u = this.getTensionPoints());
    var v = this.pointerLength(), g = s.length, _, m;
    if (d) {
      const w = [
        u[u.length - 4],
        u[u.length - 3],
        u[u.length - 2],
        u[u.length - 1],
        s[g - 2],
        s[g - 1]
      ], M = vn.calcLength(u[u.length - 4], u[u.length - 3], "C", w), R = vn.getPointOnQuadraticBezier(Math.min(1, 1 - v / M), w[0], w[1], w[2], w[3], w[4], w[5]);
      _ = s[g - 2] - R.x, m = s[g - 1] - R.y;
    } else
      _ = s[g - 2] - s[g - 4], m = s[g - 1] - s[g - 3];
    var E = (Math.atan2(m, _) + a) % a, T = this.pointerWidth();
    this.pointerAtEnding() && (e.save(), e.beginPath(), e.translate(s[g - 2], s[g - 1]), e.rotate(E), e.moveTo(0, 0), e.lineTo(-v, T / 2), e.lineTo(-v, -T / 2), e.closePath(), e.restore(), this.__fillStroke(e)), this.pointerAtBeginning() && (e.save(), e.beginPath(), e.translate(s[0], s[1]), d ? (_ = (u[0] + u[2]) / 2 - s[0], m = (u[1] + u[3]) / 2 - s[1]) : (_ = s[2] - s[0], m = s[3] - s[1]), e.rotate((Math.atan2(-m, -_) + a) % a), e.moveTo(0, 0), e.lineTo(-v, T / 2), e.lineTo(-v, -T / 2), e.closePath(), e.restore(), this.__fillStroke(e));
  }
  __fillStroke(e) {
    var a = this.dashEnabled();
    a && (this.attrs.dashEnabled = !1, e.setLineDash([])), e.fillStrokeShape(this), a && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const e = super.getSelfRect(), a = this.pointerWidth() / 2;
    return {
      x: e.x - a,
      y: e.y - a,
      width: e.width + a * 2,
      height: e.height + a * 2
    };
  }
}
Po.prototype.className = "Arrow";
Pn(Po);
L.addGetterSetter(Po, "pointerLength", 10, ye());
L.addGetterSetter(Po, "pointerWidth", 10, ye());
L.addGetterSetter(Po, "pointerAtBeginning", !1);
L.addGetterSetter(Po, "pointerAtEnding", !0);
class fc extends ve {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
  setHeight(e) {
    this.radius() !== e / 2 && this.radius(e / 2);
  }
}
fc.prototype._centroid = !0;
fc.prototype.className = "Circle";
fc.prototype._attrsAffectingSize = ["radius"];
Pn(fc);
L.addGetterSetter(fc, "radius", 0, ye());
class Is extends ve {
  _sceneFunc(e) {
    var a = this.radiusX(), s = this.radiusY();
    e.beginPath(), e.save(), a !== s && e.scale(1, s / a), e.arc(0, 0, a, 0, Math.PI * 2, !1), e.restore(), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(e) {
    this.radiusX(e / 2);
  }
  setHeight(e) {
    this.radiusY(e / 2);
  }
}
Is.prototype.className = "Ellipse";
Is.prototype._centroid = !0;
Is.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
Pn(Is);
L.addComponentsGetterSetter(Is, "radius", ["x", "y"]);
L.addGetterSetter(Is, "radiusX", 0, ye());
L.addGetterSetter(Is, "radiusY", 0, ye());
let ml = class extends ve {
  constructor(e) {
    super(e), this.on("imageChange.konva", () => {
      this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const e = this.image();
    e && e.complete || e && e.readyState === 4 || e && e.addEventListener && e.addEventListener("load", () => {
      this._requestDraw();
    });
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(e) {
    const a = this.getWidth(), s = this.getHeight(), u = this.attrs.image;
    let d;
    if (u) {
      const v = this.attrs.cropWidth, g = this.attrs.cropHeight;
      v && g ? d = [
        u,
        this.cropX(),
        this.cropY(),
        v,
        g,
        0,
        0,
        a,
        s
      ] : d = [u, 0, 0, a, s];
    }
    (this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, a, s), e.closePath(), e.fillStrokeShape(this)), u && e.drawImage.apply(e, d);
  }
  _hitFunc(e) {
    var a = this.width(), s = this.height();
    e.beginPath(), e.rect(0, 0, a, s), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    var e, a;
    return (e = this.attrs.width) !== null && e !== void 0 ? e : (a = this.image()) === null || a === void 0 ? void 0 : a.width;
  }
  getHeight() {
    var e, a;
    return (e = this.attrs.height) !== null && e !== void 0 ? e : (a = this.image()) === null || a === void 0 ? void 0 : a.height;
  }
  static fromURL(e, a, s = null) {
    var u = B.createImageElement();
    u.onload = function() {
      var d = new ml({
        image: u
      });
      a(d);
    }, u.onerror = s, u.crossOrigin = "Anonymous", u.src = e;
  }
};
ml.prototype.className = "Image";
Pn(ml);
L.addGetterSetter(ml, "image");
L.addComponentsGetterSetter(ml, "crop", ["x", "y", "width", "height"]);
L.addGetterSetter(ml, "cropX", 0, ye());
L.addGetterSetter(ml, "cropY", 0, ye());
L.addGetterSetter(ml, "cropWidth", 0, ye());
L.addGetterSetter(ml, "cropHeight", 0, ye());
var l_ = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], X5 = "Change.konva", Q5 = "none", Ig = "up", Vg = "right", Yg = "down", qg = "left", K5 = l_.length;
class i0 extends lc {
  constructor(e) {
    super(e), this.on("add.konva", function(a) {
      this._addListeners(a.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(e) {
    var a = this, s, u = function() {
      a._sync();
    };
    for (s = 0; s < K5; s++)
      e.on(l_[s] + X5, u);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var e = this.getText(), a = this.getTag(), s, u, d, v, g, _, m;
    if (e && a) {
      switch (s = e.width(), u = e.height(), d = a.pointerDirection(), v = a.pointerWidth(), m = a.pointerHeight(), g = 0, _ = 0, d) {
        case Ig:
          g = s / 2, _ = -1 * m;
          break;
        case Vg:
          g = s + v, _ = u / 2;
          break;
        case Yg:
          g = s / 2, _ = u + m;
          break;
        case qg:
          g = -1 * v, _ = u / 2;
          break;
      }
      a.setAttrs({
        x: -1 * g,
        y: -1 * _,
        width: s,
        height: u
      }), e.setAttrs({
        x: -1 * g,
        y: -1 * _
      });
    }
  }
}
i0.prototype.className = "Label";
Pn(i0);
class ko extends ve {
  _sceneFunc(e) {
    var a = this.width(), s = this.height(), u = this.pointerDirection(), d = this.pointerWidth(), v = this.pointerHeight(), g = this.cornerRadius();
    let _ = 0, m = 0, E = 0, T = 0;
    typeof g == "number" ? _ = m = E = T = Math.min(g, a / 2, s / 2) : (_ = Math.min(g[0] || 0, a / 2, s / 2), m = Math.min(g[1] || 0, a / 2, s / 2), T = Math.min(g[2] || 0, a / 2, s / 2), E = Math.min(g[3] || 0, a / 2, s / 2)), e.beginPath(), e.moveTo(_, 0), u === Ig && (e.lineTo((a - d) / 2, 0), e.lineTo(a / 2, -1 * v), e.lineTo((a + d) / 2, 0)), e.lineTo(a - m, 0), e.arc(a - m, m, m, Math.PI * 3 / 2, 0, !1), u === Vg && (e.lineTo(a, (s - v) / 2), e.lineTo(a + d, s / 2), e.lineTo(a, (s + v) / 2)), e.lineTo(a, s - T), e.arc(a - T, s - T, T, 0, Math.PI / 2, !1), u === Yg && (e.lineTo((a + d) / 2, s), e.lineTo(a / 2, s + v), e.lineTo((a - d) / 2, s)), e.lineTo(E, s), e.arc(E, s - E, E, Math.PI / 2, Math.PI, !1), u === qg && (e.lineTo(0, (s + v) / 2), e.lineTo(-1 * d, s / 2), e.lineTo(0, (s - v) / 2)), e.lineTo(0, _), e.arc(_, _, _, Math.PI, Math.PI * 3 / 2, !1), e.closePath(), e.fillStrokeShape(this);
  }
  getSelfRect() {
    var e = 0, a = 0, s = this.pointerWidth(), u = this.pointerHeight(), d = this.pointerDirection(), v = this.width(), g = this.height();
    return d === Ig ? (a -= u, g += u) : d === Yg ? g += u : d === qg ? (e -= s * 1.5, v += s) : d === Vg && (v += s * 1.5), {
      x: e,
      y: a,
      width: v,
      height: g
    };
  }
}
ko.prototype.className = "Tag";
Pn(ko);
L.addGetterSetter(ko, "pointerDirection", Q5);
L.addGetterSetter(ko, "pointerWidth", 0, ye());
L.addGetterSetter(ko, "pointerHeight", 0, ye());
L.addGetterSetter(ko, "cornerRadius", 0, HS(4));
let fd = class extends ve {
  _sceneFunc(e) {
    var a = this.cornerRadius(), s = this.width(), u = this.height();
    if (e.beginPath(), !a)
      e.rect(0, 0, s, u);
    else {
      let d = 0, v = 0, g = 0, _ = 0;
      typeof a == "number" ? d = v = g = _ = Math.min(a, s / 2, u / 2) : (d = Math.min(a[0] || 0, s / 2, u / 2), v = Math.min(a[1] || 0, s / 2, u / 2), _ = Math.min(a[2] || 0, s / 2, u / 2), g = Math.min(a[3] || 0, s / 2, u / 2)), e.moveTo(d, 0), e.lineTo(s - v, 0), e.arc(s - v, v, v, Math.PI * 3 / 2, 0, !1), e.lineTo(s, u - _), e.arc(s - _, u - _, _, 0, Math.PI / 2, !1), e.lineTo(g, u), e.arc(g, u - g, g, Math.PI / 2, Math.PI, !1), e.lineTo(0, d), e.arc(d, d, d, Math.PI, Math.PI * 3 / 2, !1);
    }
    e.closePath(), e.fillStrokeShape(this);
  }
};
fd.prototype.className = "Rect";
Pn(fd);
L.addGetterSetter(fd, "cornerRadius", 0, HS(4));
class zo extends ve {
  _sceneFunc(e) {
    const a = this._getPoints();
    e.beginPath(), e.moveTo(a[0].x, a[0].y);
    for (var s = 1; s < a.length; s++)
      e.lineTo(a[s].x, a[s].y);
    e.closePath(), e.fillStrokeShape(this);
  }
  _getPoints() {
    const e = this.attrs.sides, a = this.attrs.radius || 0, s = [];
    for (var u = 0; u < e; u++)
      s.push({
        x: a * Math.sin(u * 2 * Math.PI / e),
        y: -1 * a * Math.cos(u * 2 * Math.PI / e)
      });
    return s;
  }
  getSelfRect() {
    const e = this._getPoints();
    var a = e[0].x, s = e[0].y, u = e[0].x, d = e[0].y;
    return e.forEach((v) => {
      a = Math.min(a, v.x), s = Math.max(s, v.x), u = Math.min(u, v.y), d = Math.max(d, v.y);
    }), {
      x: a,
      y: u,
      width: s - a,
      height: d - u
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
zo.prototype.className = "RegularPolygon";
zo.prototype._centroid = !0;
zo.prototype._attrsAffectingSize = ["radius"];
Pn(zo);
L.addGetterSetter(zo, "radius", 0, ye());
L.addGetterSetter(zo, "sides", 0, ye());
var C2 = Math.PI * 2;
class Uo extends ve {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.innerRadius(), 0, C2, !1), e.moveTo(this.outerRadius(), 0), e.arc(0, 0, this.outerRadius(), C2, 0, !0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
}
Uo.prototype.className = "Ring";
Uo.prototype._centroid = !0;
Uo.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
Pn(Uo);
L.addGetterSetter(Uo, "innerRadius", 0, ye());
L.addGetterSetter(Uo, "outerRadius", 0, ye());
class gl extends ve {
  constructor(e) {
    super(e), this._updated = !0, this.anim = new di(() => {
      var a = this._updated;
      return this._updated = !1, a;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(e) {
    var a = this.animation(), s = this.frameIndex(), u = s * 4, d = this.animations()[a], v = this.frameOffsets(), g = d[u + 0], _ = d[u + 1], m = d[u + 2], E = d[u + 3], T = this.image();
    if ((this.hasFill() || this.hasStroke()) && (e.beginPath(), e.rect(0, 0, m, E), e.closePath(), e.fillStrokeShape(this)), T)
      if (v) {
        var w = v[a], M = s * 2;
        e.drawImage(T, g, _, m, E, w[M + 0], w[M + 1], m, E);
      } else
        e.drawImage(T, g, _, m, E, 0, 0, m, E);
  }
  _hitFunc(e) {
    var a = this.animation(), s = this.frameIndex(), u = s * 4, d = this.animations()[a], v = this.frameOffsets(), g = d[u + 2], _ = d[u + 3];
    if (e.beginPath(), v) {
      var m = v[a], E = s * 2;
      e.rect(m[E + 0], m[E + 1], g, _);
    } else
      e.rect(0, 0, g, _);
    e.closePath(), e.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var e = this;
    this.interval = setInterval(function() {
      e._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var e = this.getLayer();
      this.anim.setLayers(e), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var e = this.frameIndex(), a = this.animation(), s = this.animations(), u = s[a], d = u.length / 4;
    e < d - 1 ? this.frameIndex(e + 1) : this.frameIndex(0);
  }
}
gl.prototype.className = "Sprite";
Pn(gl);
L.addGetterSetter(gl, "animation");
L.addGetterSetter(gl, "animations");
L.addGetterSetter(gl, "frameOffsets");
L.addGetterSetter(gl, "image");
L.addGetterSetter(gl, "frameIndex", 0, ye());
L.addGetterSetter(gl, "frameRate", 17, ye());
L.backCompat(gl, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
class Vs extends ve {
  _sceneFunc(e) {
    var a = this.innerRadius(), s = this.outerRadius(), u = this.numPoints();
    e.beginPath(), e.moveTo(0, 0 - s);
    for (var d = 1; d < u * 2; d++) {
      var v = d % 2 === 0 ? s : a, g = v * Math.sin(d * Math.PI / u), _ = -1 * v * Math.cos(d * Math.PI / u);
      e.lineTo(g, _);
    }
    e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(e) {
    this.outerRadius(e / 2);
  }
  setHeight(e) {
    this.outerRadius(e / 2);
  }
}
Vs.prototype.className = "Star";
Vs.prototype._centroid = !0;
Vs.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
Pn(Vs);
L.addGetterSetter(Vs, "numPoints", 5, ye());
L.addGetterSetter(Vs, "innerRadius", 0, ye());
L.addGetterSetter(Vs, "outerRadius", 0, ye());
function s_(o) {
  return Array.from(o);
}
var tc = "auto", J5 = "center", Vf = "justify", Z5 = "Change.konva", $5 = "2d", E2 = "-", o_ = "left", e4 = "text", t4 = "Text", n4 = "top", r4 = "bottom", b2 = "middle", u_ = "normal", a4 = "px ", Cv = " ", i4 = "right", l4 = "word", s4 = "char", T2 = "none", Mg = "…", c_ = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], o4 = c_.length;
function u4(o) {
  return o.split(",").map((e) => {
    e = e.trim();
    const a = e.indexOf(" ") >= 0, s = e.indexOf('"') >= 0 || e.indexOf("'") >= 0;
    return a && !s && (e = `"${e}"`), e;
  }).join(", ");
}
var Ev;
function Og() {
  return Ev || (Ev = B.createCanvasElement().getContext($5), Ev);
}
function c4(o) {
  o.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function f4(o) {
  o.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function d4(o) {
  return o = o || {}, !o.fillLinearGradientColorStops && !o.fillRadialGradientColorStops && !o.fillPatternImage && (o.fill = o.fill || "black"), o;
}
let An = class extends ve {
  constructor(e) {
    super(d4(e)), this._partialTextX = 0, this._partialTextY = 0;
    for (var a = 0; a < o4; a++)
      this.on(c_[a] + Z5, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(e) {
    var a = this.textArr, s = a.length;
    if (this.text()) {
      var u = this.padding(), d = this.fontSize(), v = this.lineHeight() * d, g = this.verticalAlign(), _ = 0, m = this.align(), E = this.getWidth(), T = this.letterSpacing(), w = this.fill(), M = this.textDecoration(), R = M.indexOf("underline") !== -1, z = M.indexOf("line-through") !== -1, k, I = 0, I = v / 2, j = 0, G = 0;
      for (e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", b2), e.setAttr("textAlign", o_), g === b2 ? _ = (this.getHeight() - s * v - u * 2) / 2 : g === r4 && (_ = this.getHeight() - s * v - u * 2), e.translate(u, _ + u), k = 0; k < s; k++) {
        var j = 0, G = 0, Z = a[k], U = Z.text, V = Z.width, X = Z.lastInParagraph, le, ee, Q;
        if (e.save(), m === i4 ? j += E - V - u * 2 : m === J5 && (j += (E - V - u * 2) / 2), R && (e.save(), e.beginPath(), e.moveTo(j, I + G + Math.round(d / 2)), le = U.split(" ").length - 1, ee = le === 0, Q = m === Vf && X && !ee ? E - u * 2 : V, e.lineTo(j + Math.round(Q), I + G + Math.round(d / 2)), e.lineWidth = d / 15, e.strokeStyle = w, e.stroke(), e.restore()), z && (e.save(), e.beginPath(), e.moveTo(j, I + G), le = U.split(" ").length - 1, ee = le === 0, Q = m === Vf && X && !ee ? E - u * 2 : V, e.lineTo(j + Math.round(Q), I + G), e.lineWidth = d / 15, e.strokeStyle = w, e.stroke(), e.restore()), T !== 0 || m === Vf) {
          le = U.split(" ").length - 1;
          for (var K = s_(U), xe = 0; xe < K.length; xe++) {
            var pe = K[xe];
            pe === " " && !X && m === Vf && (j += (E - u * 2 - V) / le), this._partialTextX = j, this._partialTextY = I + G, this._partialText = pe, e.fillStrokeShape(this), j += this.measureSize(pe).width + T;
          }
        } else
          this._partialTextX = j, this._partialTextY = I + G, this._partialText = U, e.fillStrokeShape(this);
        e.restore(), s > 1 && (I += v);
      }
    }
  }
  _hitFunc(e) {
    var a = this.getWidth(), s = this.getHeight();
    e.beginPath(), e.rect(0, 0, a, s), e.closePath(), e.fillStrokeShape(this);
  }
  setText(e) {
    var a = B._isString(e) ? e : e == null ? "" : e + "";
    return this._setAttr(e4, a), this;
  }
  getWidth() {
    var e = this.attrs.width === tc || this.attrs.width === void 0;
    return e ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var e = this.attrs.height === tc || this.attrs.height === void 0;
    return e ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return B.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(e) {
    var a = Og(), s = this.fontSize(), u;
    return a.save(), a.font = this._getContextFont(), u = a.measureText(e), a.restore(), {
      width: u.width,
      height: s
    };
  }
  _getContextFont() {
    return this.fontStyle() + Cv + this.fontVariant() + Cv + (this.fontSize() + a4) + u4(this.fontFamily());
  }
  _addTextLine(e) {
    this.align() === Vf && (e = e.trim());
    var a = this._getTextWidth(e);
    return this.textArr.push({
      text: e,
      width: a,
      lastInParagraph: !1
    });
  }
  _getTextWidth(e) {
    var a = this.letterSpacing(), s = e.length;
    return Og().measureText(e).width + (s ? a * (s - 1) : 0);
  }
  _setTextData() {
    var e = this.text().split(`
`), a = +this.fontSize(), s = 0, u = this.lineHeight() * a, d = this.attrs.width, v = this.attrs.height, g = d !== tc && d !== void 0, _ = v !== tc && v !== void 0, m = this.padding(), E = d - m * 2, T = v - m * 2, w = 0, M = this.wrap(), R = M !== T2, z = M !== s4 && R, k = this.ellipsis();
    this.textArr = [], Og().font = this._getContextFont();
    for (var I = k ? this._getTextWidth(Mg) : 0, j = 0, G = e.length; j < G; ++j) {
      var Z = e[j], U = this._getTextWidth(Z);
      if (g && U > E)
        for (; Z.length > 0; ) {
          for (var V = 0, X = Z.length, le = "", ee = 0; V < X; ) {
            var Q = V + X >>> 1, K = Z.slice(0, Q + 1), xe = this._getTextWidth(K) + I;
            xe <= E ? (V = Q + 1, le = K, ee = xe) : X = Q;
          }
          if (le) {
            if (z) {
              var pe, ke = Z[le.length], lt = ke === Cv || ke === E2;
              lt && ee <= E ? pe = le.length : pe = Math.max(le.lastIndexOf(Cv), le.lastIndexOf(E2)) + 1, pe > 0 && (V = pe, le = le.slice(0, V), ee = this._getTextWidth(le));
            }
            le = le.trimRight(), this._addTextLine(le), s = Math.max(s, ee), w += u;
            var Ie = this._shouldHandleEllipsis(w);
            if (Ie) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (Z = Z.slice(V), Z = Z.trimLeft(), Z.length > 0 && (U = this._getTextWidth(Z), U <= E)) {
              this._addTextLine(Z), w += u, s = Math.max(s, U);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(Z), w += u, s = Math.max(s, U), this._shouldHandleEllipsis(w) && j < G - 1 && this._tryToAddEllipsisToLastLine();
      if (_ && w + u > T)
        break;
      this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0);
    }
    this.textHeight = a, this.textWidth = s;
  }
  _shouldHandleEllipsis(e) {
    var a = +this.fontSize(), s = this.lineHeight() * a, u = this.attrs.height, d = u !== tc && u !== void 0, v = this.padding(), g = u - v * 2, _ = this.wrap(), m = _ !== T2;
    return !m || d && e + s > g;
  }
  _tryToAddEllipsisToLastLine() {
    var e = this.attrs.width, a = e !== tc && e !== void 0, s = this.padding(), u = e - s * 2, d = this.ellipsis(), v = this.textArr[this.textArr.length - 1];
    if (!(!v || !d)) {
      if (a) {
        var g = this._getTextWidth(v.text + Mg) < u;
        g || (v.text = v.text.slice(0, v.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(v.text + Mg);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
};
An.prototype._fillFunc = c4;
An.prototype._strokeFunc = f4;
An.prototype.className = t4;
An.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
Pn(An);
L.overWriteSetter(An, "width", t0());
L.overWriteSetter(An, "height", t0());
L.addGetterSetter(An, "fontFamily", "Arial");
L.addGetterSetter(An, "fontSize", 12, ye());
L.addGetterSetter(An, "fontStyle", u_);
L.addGetterSetter(An, "fontVariant", u_);
L.addGetterSetter(An, "padding", 0, ye());
L.addGetterSetter(An, "align", o_);
L.addGetterSetter(An, "verticalAlign", n4);
L.addGetterSetter(An, "lineHeight", 1, ye());
L.addGetterSetter(An, "wrap", l4);
L.addGetterSetter(An, "ellipsis", !1, Hi());
L.addGetterSetter(An, "letterSpacing", 0, ye());
L.addGetterSetter(An, "text", "", cc());
L.addGetterSetter(An, "textDecoration", "");
var h4 = "", f_ = "normal";
function d_(o) {
  o.fillText(this.partialText, 0, 0);
}
function h_(o) {
  o.strokeText(this.partialText, 0, 0);
}
class xr extends ve {
  constructor(e) {
    super(e), this.dummyCanvas = B.createCanvasElement(), this.dataArray = [], this.dataArray = vn.parsePathData(this.attrs.data), this.on("dataChange.konva", function() {
      this.dataArray = vn.parsePathData(this.attrs.data), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _sceneFunc(e) {
    e.setAttr("font", this._getContextFont()), e.setAttr("textBaseline", this.textBaseline()), e.setAttr("textAlign", "left"), e.save();
    var a = this.textDecoration(), s = this.fill(), u = this.fontSize(), d = this.glyphInfo;
    a === "underline" && e.beginPath();
    for (var v = 0; v < d.length; v++) {
      e.save();
      var g = d[v].p0;
      e.translate(g.x, g.y), e.rotate(d[v].rotation), this.partialText = d[v].text, e.fillStrokeShape(this), a === "underline" && (v === 0 && e.moveTo(0, u / 2 + 1), e.lineTo(u, u / 2 + 1)), e.restore();
    }
    a === "underline" && (e.strokeStyle = s, e.lineWidth = u / 20, e.stroke()), e.restore();
  }
  _hitFunc(e) {
    e.beginPath();
    var a = this.glyphInfo;
    if (a.length >= 1) {
      var s = a[0].p0;
      e.moveTo(s.x, s.y);
    }
    for (var u = 0; u < a.length; u++) {
      var d = a[u].p1;
      e.lineTo(d.x, d.y);
    }
    e.setAttr("lineWidth", this.fontSize()), e.setAttr("strokeStyle", this.colorKey), e.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return B.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(e) {
    return An.prototype.setText.call(this, e);
  }
  _getContextFont() {
    return An.prototype._getContextFont.call(this);
  }
  _getTextSize(e) {
    var a = this.dummyCanvas, s = a.getContext("2d");
    s.save(), s.font = this._getContextFont();
    var u = s.measureText(e);
    return s.restore(), {
      width: u.width,
      height: parseInt(this.attrs.fontSize, 10)
    };
  }
  _setTextData() {
    var e = this, a = this._getTextSize(this.attrs.text), s = this.letterSpacing(), u = this.align(), d = this.kerningFunc();
    this.textWidth = a.width, this.textHeight = a.height;
    var v = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * s, 0);
    this.glyphInfo = [];
    for (var g = 0, _ = 0; _ < e.dataArray.length; _++)
      e.dataArray[_].pathLength > 0 && (g += e.dataArray[_].pathLength);
    var m = 0;
    u === "center" && (m = Math.max(0, g / 2 - v / 2)), u === "right" && (m = Math.max(0, g - v));
    for (var E = s_(this.text()), T = this.text().split(" ").length - 1, w, M, R, z = -1, k = 0, I = function() {
      k = 0;
      for (var xe = e.dataArray, pe = z + 1; pe < xe.length; pe++) {
        if (xe[pe].pathLength > 0)
          return z = pe, xe[pe];
        xe[pe].command === "M" && (w = {
          x: xe[pe].points[0],
          y: xe[pe].points[1]
        });
      }
      return {};
    }, j = function(xe) {
      var pe = e._getTextSize(xe).width + s;
      xe === " " && u === "justify" && (pe += (g - v) / T);
      var ke = 0, lt = 0;
      for (M = void 0; Math.abs(pe - ke) / pe > 0.01 && lt < 20; ) {
        lt++;
        for (var Ie = ke; R === void 0; )
          R = I(), R && Ie + R.pathLength < pe && (Ie += R.pathLength, R = void 0);
        if (Object.keys(R).length === 0 || w === void 0)
          return;
        var Le = !1;
        switch (R.command) {
          case "L":
            vn.getLineLength(w.x, w.y, R.points[0], R.points[1]) > pe ? M = vn.getPointOnLine(pe, w.x, w.y, R.points[0], R.points[1], w.x, w.y) : R = void 0;
            break;
          case "A":
            var oe = R.points[4], fe = R.points[5], de = R.points[4] + fe;
            k === 0 ? k = oe + 1e-8 : pe > ke ? k += Math.PI / 180 * fe / Math.abs(fe) : k -= Math.PI / 360 * fe / Math.abs(fe), (fe < 0 && k < de || fe >= 0 && k > de) && (k = de, Le = !0), M = vn.getPointOnEllipticalArc(R.points[0], R.points[1], R.points[2], R.points[3], k, R.points[6]);
            break;
          case "C":
            k === 0 ? pe > R.pathLength ? k = 1e-8 : k = pe / R.pathLength : pe > ke ? k += (pe - ke) / R.pathLength / 2 : k = Math.max(k - (ke - pe) / R.pathLength / 2, 0), k > 1 && (k = 1, Le = !0), M = vn.getPointOnCubicBezier(k, R.start.x, R.start.y, R.points[0], R.points[1], R.points[2], R.points[3], R.points[4], R.points[5]);
            break;
          case "Q":
            k === 0 ? k = pe / R.pathLength : pe > ke ? k += (pe - ke) / R.pathLength : k -= (ke - pe) / R.pathLength, k > 1 && (k = 1, Le = !0), M = vn.getPointOnQuadraticBezier(k, R.start.x, R.start.y, R.points[0], R.points[1], R.points[2], R.points[3]);
            break;
        }
        M !== void 0 && (ke = vn.getLineLength(w.x, w.y, M.x, M.y)), Le && (Le = !1, R = void 0);
      }
    }, G = "C", Z = e._getTextSize(G).width + s, U = m / Z - 1, V = 0; V < U && (j(G), !(w === void 0 || M === void 0)); V++)
      w = M;
    for (var X = 0; X < E.length && (j(E[X]), !(w === void 0 || M === void 0)); X++) {
      var le = vn.getLineLength(w.x, w.y, M.x, M.y), ee = 0;
      if (d)
        try {
          ee = d(E[X - 1], E[X]) * this.fontSize();
        } catch {
          ee = 0;
        }
      w.x += ee, M.x += ee, this.textWidth += ee;
      var Q = vn.getPointOnLine(ee + le / 2, w.x, w.y, M.x, M.y), K = Math.atan2(M.y - w.y, M.x - w.x);
      this.glyphInfo.push({
        transposeX: Q.x,
        transposeY: Q.y,
        text: E[X],
        rotation: K,
        p0: w,
        p1: M
      }), w = M;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    var e = [];
    this.glyphInfo.forEach(function(E) {
      e.push(E.p0.x), e.push(E.p0.y), e.push(E.p1.x), e.push(E.p1.y);
    });
    for (var a = e[0] || 0, s = e[0] || 0, u = e[1] || 0, d = e[1] || 0, v, g, _ = 0; _ < e.length / 2; _++)
      v = e[_ * 2], g = e[_ * 2 + 1], a = Math.min(a, v), s = Math.max(s, v), u = Math.min(u, g), d = Math.max(d, g);
    var m = this.fontSize();
    return {
      x: a - m / 2,
      y: u - m / 2,
      width: s - a + m,
      height: d - u + m
    };
  }
  destroy() {
    return B.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
xr.prototype._fillFunc = d_;
xr.prototype._strokeFunc = h_;
xr.prototype._fillFuncHit = d_;
xr.prototype._strokeFuncHit = h_;
xr.prototype.className = "TextPath";
xr.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
Pn(xr);
L.addGetterSetter(xr, "data");
L.addGetterSetter(xr, "fontFamily", "Arial");
L.addGetterSetter(xr, "fontSize", 12, ye());
L.addGetterSetter(xr, "fontStyle", f_);
L.addGetterSetter(xr, "align", "left");
L.addGetterSetter(xr, "letterSpacing", 0, ye());
L.addGetterSetter(xr, "textBaseline", "middle");
L.addGetterSetter(xr, "fontVariant", f_);
L.addGetterSetter(xr, "text", h4);
L.addGetterSetter(xr, "textDecoration", null);
L.addGetterSetter(xr, "kerningFunc", null);
var v_ = "tr-konva", v4 = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange"
].map((o) => o + `.${v_}`).join(" "), R2 = "nodesRect", p4 = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
], m4 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
const g4 = "ontouchstart" in Be._global;
function y4(o, e) {
  if (o === "rotater")
    return "crosshair";
  e += B.degToRad(m4[o] || 0);
  var a = (B.radToDeg(e) % 360 + 360) % 360;
  return B._inRange(a, 315 + 22.5, 360) || B._inRange(a, 0, 22.5) ? "ns-resize" : B._inRange(a, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : B._inRange(a, 90 - 22.5, 90 + 22.5) ? "ew-resize" : B._inRange(a, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : B._inRange(a, 180 - 22.5, 180 + 22.5) ? "ns-resize" : B._inRange(a, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : B._inRange(a, 270 - 22.5, 270 + 22.5) ? "ew-resize" : B._inRange(a, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (B.error("Transformer has unknown angle for cursor detection: " + a), "pointer");
}
var Av = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], w2 = 1e8;
function S4(o) {
  return {
    x: o.x + o.width / 2 * Math.cos(o.rotation) + o.height / 2 * Math.sin(-o.rotation),
    y: o.y + o.height / 2 * Math.cos(o.rotation) + o.width / 2 * Math.sin(o.rotation)
  };
}
function p_(o, e, a) {
  const s = a.x + (o.x - a.x) * Math.cos(e) - (o.y - a.y) * Math.sin(e), u = a.y + (o.x - a.x) * Math.sin(e) + (o.y - a.y) * Math.cos(e);
  return Object.assign(Object.assign({}, o), {
    rotation: o.rotation + e,
    x: s,
    y: u
  });
}
function _4(o, e) {
  const a = S4(o);
  return p_(o, e, a);
}
function x4(o, e, a) {
  let s = e;
  for (let u = 0; u < o.length; u++) {
    const d = Be.getAngle(o[u]), v = Math.abs(d - e) % (Math.PI * 2);
    Math.min(v, Math.PI * 2 - v) < a && (s = d);
  }
  return s;
}
let nn = class extends lc {
  constructor(e) {
    super(e), this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(v4, this.update), this.getNode() && this.update();
  }
  attachTo(e) {
    return this.setNode(e), this;
  }
  setNode(e) {
    return B.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([e]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return v_ + this._id;
  }
  setNodes(e = []) {
    this._nodes && this._nodes.length && this.detach(), this._nodes = e, e.length === 1 && this.useSingleNodeRotation() ? this.rotation(e[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((s) => {
      const u = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      }, d = s._attrsAffectingSize.map((v) => v + "Change." + this._getEventNamespace()).join(" ");
      s.on(d, u), s.on(p4.map((v) => v + `.${this._getEventNamespace()}`).join(" "), u), s.on(`absoluteTransformChange.${this._getEventNamespace()}`, u), this._proxyDrag(s);
    }), this._resetTransformCache();
    var a = !!this.findOne(".top-left");
    return a && this.update(), this;
  }
  _proxyDrag(e) {
    let a;
    e.on(`dragstart.${this._getEventNamespace()}`, (s) => {
      a = e.getAbsolutePosition(), !this.isDragging() && e !== this.findOne(".back") && this.startDrag(s, !1);
    }), e.on(`dragmove.${this._getEventNamespace()}`, (s) => {
      if (!a)
        return;
      const u = e.getAbsolutePosition(), d = u.x - a.x, v = u.y - a.y;
      this.nodes().forEach((g) => {
        if (g === e || g.isDragging())
          return;
        const _ = g.getAbsolutePosition();
        g.setAbsolutePosition({
          x: _.x + d,
          y: _.y + v
        }), g.startDrag(s);
      }), a = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((e) => {
      e.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(R2), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(R2, this.__getNodeRect);
  }
  __getNodeShape(e, a = this.rotation(), s) {
    var u = e.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), d = e.getAbsoluteScale(s), v = e.getAbsolutePosition(s), g = u.x * d.x - e.offsetX() * d.x, _ = u.y * d.y - e.offsetY() * d.y;
    const m = (Be.getAngle(e.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), E = {
      x: v.x + g * Math.cos(m) + _ * Math.sin(-m),
      y: v.y + _ * Math.cos(m) + g * Math.sin(m),
      width: u.width * d.x,
      height: u.height * d.y,
      rotation: m
    };
    return p_(E, -Be.getAngle(a), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    var e = this.getNode();
    if (!e)
      return {
        x: -w2,
        y: -w2,
        width: 0,
        height: 0,
        rotation: 0
      };
    const a = [];
    this.nodes().map((m) => {
      const E = m.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      });
      var T = [
        { x: E.x, y: E.y },
        { x: E.x + E.width, y: E.y },
        { x: E.x + E.width, y: E.y + E.height },
        { x: E.x, y: E.y + E.height }
      ], w = m.getAbsoluteTransform();
      T.forEach(function(M) {
        var R = w.point(M);
        a.push(R);
      });
    });
    const s = new Qa();
    s.rotate(-Be.getAngle(this.rotation()));
    var u, d, v, g;
    a.forEach(function(m) {
      var E = s.point(m);
      u === void 0 && (u = v = E.x, d = g = E.y), u = Math.min(u, E.x), d = Math.min(d, E.y), v = Math.max(v, E.x), g = Math.max(g, E.y);
    }), s.invert();
    const _ = s.point({ x: u, y: d });
    return {
      x: _.x,
      y: _.y,
      width: v - u,
      height: g - d,
      rotation: Be.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), Av.forEach(function(e) {
      this._createAnchor(e);
    }.bind(this)), this._createAnchor("rotater");
  }
  _createAnchor(e) {
    var a = new fd({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: e + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: g4 ? 10 : "auto"
    }), s = this;
    a.on("mousedown touchstart", function(u) {
      s._handleMouseDown(u);
    }), a.on("dragstart", (u) => {
      a.stopDrag(), u.cancelBubble = !0;
    }), a.on("dragend", (u) => {
      u.cancelBubble = !0;
    }), a.on("mouseenter", () => {
      var u = Be.getAngle(this.rotation()), d = y4(e, u);
      a.getStage().content && (a.getStage().content.style.cursor = d), this._cursorChange = !0;
    }), a.on("mouseout", () => {
      a.getStage().content && (a.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(a);
  }
  _createBack() {
    var e = new ve({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(a) {
        var s = this.getParent(), u = s.padding();
        a.beginPath(), a.rect(-u, -u, this.width() + u * 2, this.height() + u * 2), a.moveTo(this.width() / 2, -u), s.rotateEnabled() && a.lineTo(this.width() / 2, -s.rotateAnchorOffset() * B._sign(this.height()) - u), a.fillStrokeShape(this);
      },
      hitFunc: (a, s) => {
        if (this.shouldOverdrawWholeArea()) {
          var u = this.padding();
          a.beginPath(), a.rect(-u, -u, s.width() + u * 2, s.height() + u * 2), a.fillStrokeShape(s);
        }
      }
    });
    this.add(e), this._proxyDrag(e), e.on("dragstart", (a) => {
      a.cancelBubble = !0;
    }), e.on("dragmove", (a) => {
      a.cancelBubble = !0;
    }), e.on("dragend", (a) => {
      a.cancelBubble = !0;
    }), this.on("dragmove", (a) => {
      this.update();
    });
  }
  _handleMouseDown(e) {
    this._movingAnchorName = e.target.name().split(" ")[0];
    var a = this._getNodeRect(), s = a.width, u = a.height, d = Math.sqrt(Math.pow(s, 2) + Math.pow(u, 2));
    this.sin = Math.abs(u / d), this.cos = Math.abs(s / d), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    var v = e.target.getAbsolutePosition(), g = e.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: g.x - v.x,
      y: g.y - v.y
    }, this._fire("transformstart", { evt: e.evt, target: this.getNode() }), this._nodes.forEach((_) => {
      _._fire("transformstart", { evt: e.evt, target: _ });
    });
  }
  _handleMouseMove(e) {
    var a, s, u, d = this.findOne("." + this._movingAnchorName), v = d.getStage();
    v.setPointersPositions(e);
    const g = v.getPointerPosition();
    let _ = {
      x: g.x - this._anchorDragOffset.x,
      y: g.y - this._anchorDragOffset.y
    };
    const m = d.getAbsolutePosition();
    this.anchorDragBoundFunc() && (_ = this.anchorDragBoundFunc()(m, _, e)), d.setAbsolutePosition(_);
    const E = d.getAbsolutePosition();
    if (!(m.x === E.x && m.y === E.y)) {
      if (this._movingAnchorName === "rotater") {
        var T = this._getNodeRect();
        a = d.x() - T.width / 2, s = -d.y() + T.height / 2;
        let xe = Math.atan2(-s, a) + Math.PI / 2;
        T.height < 0 && (xe -= Math.PI);
        var w = Be.getAngle(this.rotation());
        const pe = w + xe, ke = Be.getAngle(this.rotationSnapTolerance()), Ie = x4(this.rotationSnaps(), pe, ke) - T.rotation, Le = _4(T, Ie);
        this._fitNodesInto(Le, e);
        return;
      }
      var M = this.keepRatio() || e.shiftKey, j = this.centeredScaling() || e.altKey;
      if (this._movingAnchorName === "top-left") {
        if (M) {
          var R = j ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          u = Math.sqrt(Math.pow(R.x - d.x(), 2) + Math.pow(R.y - d.y(), 2));
          var z = this.findOne(".top-left").x() > R.x ? -1 : 1, k = this.findOne(".top-left").y() > R.y ? -1 : 1;
          a = u * this.cos * z, s = u * this.sin * k, this.findOne(".top-left").x(R.x - a), this.findOne(".top-left").y(R.y - s);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(d.y());
      else if (this._movingAnchorName === "top-right") {
        if (M) {
          var R = j ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          u = Math.sqrt(Math.pow(d.x() - R.x, 2) + Math.pow(R.y - d.y(), 2));
          var z = this.findOne(".top-right").x() < R.x ? -1 : 1, k = this.findOne(".top-right").y() > R.y ? -1 : 1;
          a = u * this.cos * z, s = u * this.sin * k, this.findOne(".top-right").x(R.x + a), this.findOne(".top-right").y(R.y - s);
        }
        var I = d.position();
        this.findOne(".top-left").y(I.y), this.findOne(".bottom-right").x(I.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(d.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(d.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (M) {
          var R = j ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          u = Math.sqrt(Math.pow(R.x - d.x(), 2) + Math.pow(d.y() - R.y, 2));
          var z = R.x < d.x() ? -1 : 1, k = d.y() < R.y ? -1 : 1;
          a = u * this.cos * z, s = u * this.sin * k, d.x(R.x - a), d.y(R.y + s);
        }
        I = d.position(), this.findOne(".top-left").x(I.x), this.findOne(".bottom-right").y(I.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(d.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (M) {
          var R = j ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          u = Math.sqrt(Math.pow(d.x() - R.x, 2) + Math.pow(d.y() - R.y, 2));
          var z = this.findOne(".bottom-right").x() < R.x ? -1 : 1, k = this.findOne(".bottom-right").y() < R.y ? -1 : 1;
          a = u * this.cos * z, s = u * this.sin * k, this.findOne(".bottom-right").x(R.x + a), this.findOne(".bottom-right").y(R.y + s);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var j = this.centeredScaling() || e.altKey;
      if (j) {
        var G = this.findOne(".top-left"), Z = this.findOne(".bottom-right"), U = G.x(), V = G.y(), X = this.getWidth() - Z.x(), le = this.getHeight() - Z.y();
        Z.move({
          x: -U,
          y: -V
        }), G.move({
          x: X,
          y: le
        });
      }
      var ee = this.findOne(".top-left").getAbsolutePosition();
      a = ee.x, s = ee.y;
      var Q = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), K = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: a,
        y: s,
        width: Q,
        height: K,
        rotation: Be.getAngle(this.rotation())
      }, e);
    }
  }
  _handleMouseUp(e) {
    this._removeEvents(e);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(e) {
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      var a = this.getNode();
      this._fire("transformend", { evt: e, target: a }), a && this._nodes.forEach((s) => {
        s._fire("transformend", { evt: e, target: s });
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(e, a) {
    var s = this._getNodeRect();
    const u = 1;
    if (B._inRange(e.width, -this.padding() * 2 - u, u)) {
      this.update();
      return;
    }
    if (B._inRange(e.height, -this.padding() * 2 - u, u)) {
      this.update();
      return;
    }
    const d = this.flipEnabled();
    var v = new Qa();
    if (v.rotate(Be.getAngle(this.rotation())), this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const T = v.point({
        x: -this.padding() * 2,
        y: 0
      });
      if (e.x += T.x, e.y += T.y, e.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= T.x, this._anchorDragOffset.y -= T.y, !d) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && e.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const T = v.point({
        x: this.padding() * 2,
        y: 0
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= T.x, this._anchorDragOffset.y -= T.y, e.width += this.padding() * 2, !d) {
        this.update();
        return;
      }
    }
    if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const T = v.point({
        x: 0,
        y: -this.padding() * 2
      });
      if (e.x += T.x, e.y += T.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= T.x, this._anchorDragOffset.y -= T.y, e.height += this.padding() * 2, !d) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && e.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const T = v.point({
        x: 0,
        y: this.padding() * 2
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= T.x, this._anchorDragOffset.y -= T.y, e.height += this.padding() * 2, !d) {
        this.update();
        return;
      }
    }
    if (this.boundBoxFunc()) {
      const T = this.boundBoxFunc()(s, e);
      T ? e = T : B.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const g = 1e7, _ = new Qa();
    _.translate(s.x, s.y), _.rotate(s.rotation), _.scale(s.width / g, s.height / g);
    const m = new Qa();
    m.translate(e.x, e.y), m.rotate(e.rotation), m.scale(e.width / g, e.height / g);
    const E = m.multiply(_.invert());
    this._nodes.forEach((T) => {
      var w;
      const M = T.getParent().getAbsoluteTransform(), R = T.getTransform().copy();
      R.translate(T.offsetX(), T.offsetY());
      const z = new Qa();
      z.multiply(M.copy().invert()).multiply(E).multiply(M).multiply(R);
      const k = z.decompose();
      T.setAttrs(k), this._fire("transform", { evt: a, target: T }), T._fire("transform", { evt: a, target: T }), (w = T.getLayer()) === null || w === void 0 || w.batchDraw();
    }), this.rotation(B._getRotation(e.rotation)), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(e, a) {
    this.findOne(e).setAttrs(a);
  }
  update() {
    var e, a = this._getNodeRect();
    this.rotation(B._getRotation(a.rotation));
    var s = a.width, u = a.height, d = this.enabledAnchors(), v = this.resizeEnabled(), g = this.padding(), _ = this.anchorSize();
    this.find("._anchor").forEach((m) => {
      m.setAttrs({
        width: _,
        height: _,
        offsetX: _ / 2,
        offsetY: _ / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: _ / 2 + g,
      offsetY: _ / 2 + g,
      visible: v && d.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: s / 2,
      y: 0,
      offsetY: _ / 2 + g,
      visible: v && d.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: s,
      y: 0,
      offsetX: _ / 2 - g,
      offsetY: _ / 2 + g,
      visible: v && d.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: u / 2,
      offsetX: _ / 2 + g,
      visible: v && d.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: s,
      y: u / 2,
      offsetX: _ / 2 - g,
      visible: v && d.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: u,
      offsetX: _ / 2 + g,
      offsetY: _ / 2 - g,
      visible: v && d.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: s / 2,
      y: u,
      offsetY: _ / 2 - g,
      visible: v && d.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: s,
      y: u,
      offsetX: _ / 2 - g,
      offsetY: _ / 2 - g,
      visible: v && d.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: s / 2,
      y: -this.rotateAnchorOffset() * B._sign(u) - g,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: s,
      height: u,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    }), (e = this.getLayer()) === null || e === void 0 || e.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var e = this.findOne("." + this._movingAnchorName);
      e && e.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), lc.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return _e.prototype.toObject.call(this);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
};
function C4(o) {
  return o instanceof Array || B.warn("enabledAnchors value should be an array"), o instanceof Array && o.forEach(function(e) {
    Av.indexOf(e) === -1 && B.warn("Unknown anchor name: " + e + ". Available names are: " + Av.join(", "));
  }), o || [];
}
nn.prototype.className = "Transformer";
Pn(nn);
L.addGetterSetter(nn, "enabledAnchors", Av, C4);
L.addGetterSetter(nn, "flipEnabled", !0, Hi());
L.addGetterSetter(nn, "resizeEnabled", !0);
L.addGetterSetter(nn, "anchorSize", 10, ye());
L.addGetterSetter(nn, "rotateEnabled", !0);
L.addGetterSetter(nn, "rotationSnaps", []);
L.addGetterSetter(nn, "rotateAnchorOffset", 50, ye());
L.addGetterSetter(nn, "rotationSnapTolerance", 5, ye());
L.addGetterSetter(nn, "borderEnabled", !0);
L.addGetterSetter(nn, "anchorStroke", "rgb(0, 161, 255)");
L.addGetterSetter(nn, "anchorStrokeWidth", 1, ye());
L.addGetterSetter(nn, "anchorFill", "white");
L.addGetterSetter(nn, "anchorCornerRadius", 0, ye());
L.addGetterSetter(nn, "borderStroke", "rgb(0, 161, 255)");
L.addGetterSetter(nn, "borderStrokeWidth", 1, ye());
L.addGetterSetter(nn, "borderDash");
L.addGetterSetter(nn, "keepRatio", !0);
L.addGetterSetter(nn, "centeredScaling", !1);
L.addGetterSetter(nn, "ignoreStroke", !1);
L.addGetterSetter(nn, "padding", 0, ye());
L.addGetterSetter(nn, "node");
L.addGetterSetter(nn, "nodes");
L.addGetterSetter(nn, "boundBoxFunc");
L.addGetterSetter(nn, "anchorDragBoundFunc");
L.addGetterSetter(nn, "shouldOverdrawWholeArea", !1);
L.addGetterSetter(nn, "useSingleNodeRotation", !0);
L.backCompat(nn, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
class Zl extends ve {
  _sceneFunc(e) {
    e.beginPath(), e.arc(0, 0, this.radius(), 0, Be.getAngle(this.angle()), this.clockwise()), e.lineTo(0, 0), e.closePath(), e.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(e) {
    this.radius(e / 2);
  }
  setHeight(e) {
    this.radius(e / 2);
  }
}
Zl.prototype.className = "Wedge";
Zl.prototype._centroid = !0;
Zl.prototype._attrsAffectingSize = ["radius"];
Pn(Zl);
L.addGetterSetter(Zl, "radius", 0, ye());
L.addGetterSetter(Zl, "angle", 0, ye());
L.addGetterSetter(Zl, "clockwise", !1);
L.backCompat(Zl, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
function D2() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
var E4 = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], b4 = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function T4(o, e) {
  var a = o.data, s = o.width, u = o.height, d, v, g, _, m, E, T, w, M, R, z, k, I, j, G, Z, U, V, X, le, ee, Q, K, xe, pe = e + e + 1, ke = s - 1, lt = u - 1, Ie = e + 1, Le = Ie * (Ie + 1) / 2, oe = new D2(), fe = null, de = oe, Se = null, Xe = null, Ne = E4[e], Re = b4[e];
  for (g = 1; g < pe; g++)
    de = de.next = new D2(), g === Ie && (fe = de);
  for (de.next = oe, T = E = 0, v = 0; v < u; v++) {
    for (Z = U = V = X = w = M = R = z = 0, k = Ie * (le = a[E]), I = Ie * (ee = a[E + 1]), j = Ie * (Q = a[E + 2]), G = Ie * (K = a[E + 3]), w += Le * le, M += Le * ee, R += Le * Q, z += Le * K, de = oe, g = 0; g < Ie; g++)
      de.r = le, de.g = ee, de.b = Q, de.a = K, de = de.next;
    for (g = 1; g < Ie; g++)
      _ = E + ((ke < g ? ke : g) << 2), w += (de.r = le = a[_]) * (xe = Ie - g), M += (de.g = ee = a[_ + 1]) * xe, R += (de.b = Q = a[_ + 2]) * xe, z += (de.a = K = a[_ + 3]) * xe, Z += le, U += ee, V += Q, X += K, de = de.next;
    for (Se = oe, Xe = fe, d = 0; d < s; d++)
      a[E + 3] = K = z * Ne >> Re, K !== 0 ? (K = 255 / K, a[E] = (w * Ne >> Re) * K, a[E + 1] = (M * Ne >> Re) * K, a[E + 2] = (R * Ne >> Re) * K) : a[E] = a[E + 1] = a[E + 2] = 0, w -= k, M -= I, R -= j, z -= G, k -= Se.r, I -= Se.g, j -= Se.b, G -= Se.a, _ = T + ((_ = d + e + 1) < ke ? _ : ke) << 2, Z += Se.r = a[_], U += Se.g = a[_ + 1], V += Se.b = a[_ + 2], X += Se.a = a[_ + 3], w += Z, M += U, R += V, z += X, Se = Se.next, k += le = Xe.r, I += ee = Xe.g, j += Q = Xe.b, G += K = Xe.a, Z -= le, U -= ee, V -= Q, X -= K, Xe = Xe.next, E += 4;
    T += s;
  }
  for (d = 0; d < s; d++) {
    for (U = V = X = Z = M = R = z = w = 0, E = d << 2, k = Ie * (le = a[E]), I = Ie * (ee = a[E + 1]), j = Ie * (Q = a[E + 2]), G = Ie * (K = a[E + 3]), w += Le * le, M += Le * ee, R += Le * Q, z += Le * K, de = oe, g = 0; g < Ie; g++)
      de.r = le, de.g = ee, de.b = Q, de.a = K, de = de.next;
    for (m = s, g = 1; g <= e; g++)
      E = m + d << 2, w += (de.r = le = a[E]) * (xe = Ie - g), M += (de.g = ee = a[E + 1]) * xe, R += (de.b = Q = a[E + 2]) * xe, z += (de.a = K = a[E + 3]) * xe, Z += le, U += ee, V += Q, X += K, de = de.next, g < lt && (m += s);
    for (E = d, Se = oe, Xe = fe, v = 0; v < u; v++)
      _ = E << 2, a[_ + 3] = K = z * Ne >> Re, K > 0 ? (K = 255 / K, a[_] = (w * Ne >> Re) * K, a[_ + 1] = (M * Ne >> Re) * K, a[_ + 2] = (R * Ne >> Re) * K) : a[_] = a[_ + 1] = a[_ + 2] = 0, w -= k, M -= I, R -= j, z -= G, k -= Se.r, I -= Se.g, j -= Se.b, G -= Se.a, _ = d + ((_ = v + Ie) < lt ? _ : lt) * s << 2, w += Z += Se.r = a[_], M += U += Se.g = a[_ + 1], R += V += Se.b = a[_ + 2], z += X += Se.a = a[_ + 3], Se = Se.next, k += le = Xe.r, I += ee = Xe.g, j += Q = Xe.b, G += K = Xe.a, Z -= le, U -= ee, V -= Q, X -= K, Xe = Xe.next, E += s;
  }
}
const R4 = function(e) {
  var a = Math.round(this.blurRadius());
  a > 0 && T4(e, a);
};
L.addGetterSetter(_e, "blurRadius", 0, ye(), L.afterSetFilter);
const w4 = function(o) {
  var e = this.brightness() * 255, a = o.data, s = a.length, u;
  for (u = 0; u < s; u += 4)
    a[u] += e, a[u + 1] += e, a[u + 2] += e;
};
L.addGetterSetter(_e, "brightness", 0, ye(), L.afterSetFilter);
const D4 = function(o) {
  var e = Math.pow((this.contrast() + 100) / 100, 2), a = o.data, s = a.length, u = 150, d = 150, v = 150, g;
  for (g = 0; g < s; g += 4)
    u = a[g], d = a[g + 1], v = a[g + 2], u /= 255, u -= 0.5, u *= e, u += 0.5, u *= 255, d /= 255, d -= 0.5, d *= e, d += 0.5, d *= 255, v /= 255, v -= 0.5, v *= e, v += 0.5, v *= 255, u = u < 0 ? 0 : u > 255 ? 255 : u, d = d < 0 ? 0 : d > 255 ? 255 : d, v = v < 0 ? 0 : v > 255 ? 255 : v, a[g] = u, a[g + 1] = d, a[g + 2] = v;
};
L.addGetterSetter(_e, "contrast", 0, ye(), L.afterSetFilter);
const N4 = function(o) {
  var e = this.embossStrength() * 10, a = this.embossWhiteLevel() * 255, s = this.embossDirection(), u = this.embossBlend(), d = 0, v = 0, g = o.data, _ = o.width, m = o.height, E = _ * 4, T = m;
  switch (s) {
    case "top-left":
      d = -1, v = -1;
      break;
    case "top":
      d = -1, v = 0;
      break;
    case "top-right":
      d = -1, v = 1;
      break;
    case "right":
      d = 0, v = 1;
      break;
    case "bottom-right":
      d = 1, v = 1;
      break;
    case "bottom":
      d = 1, v = 0;
      break;
    case "bottom-left":
      d = 1, v = -1;
      break;
    case "left":
      d = 0, v = -1;
      break;
    default:
      B.error("Unknown emboss direction: " + s);
  }
  do {
    var w = (T - 1) * E, M = d;
    T + M < 1 && (M = 0), T + M > m && (M = 0);
    var R = (T - 1 + M) * _ * 4, z = _;
    do {
      var k = w + (z - 1) * 4, I = v;
      z + I < 1 && (I = 0), z + I > _ && (I = 0);
      var j = R + (z - 1 + I) * 4, G = g[k] - g[j], Z = g[k + 1] - g[j + 1], U = g[k + 2] - g[j + 2], V = G, X = V > 0 ? V : -V, le = Z > 0 ? Z : -Z, ee = U > 0 ? U : -U;
      if (le > X && (V = Z), ee > X && (V = U), V *= e, u) {
        var Q = g[k] + V, K = g[k + 1] + V, xe = g[k + 2] + V;
        g[k] = Q > 255 ? 255 : Q < 0 ? 0 : Q, g[k + 1] = K > 255 ? 255 : K < 0 ? 0 : K, g[k + 2] = xe > 255 ? 255 : xe < 0 ? 0 : xe;
      } else {
        var pe = a - V;
        pe < 0 ? pe = 0 : pe > 255 && (pe = 255), g[k] = g[k + 1] = g[k + 2] = pe;
      }
    } while (--z);
  } while (--T);
};
L.addGetterSetter(_e, "embossStrength", 0.5, ye(), L.afterSetFilter);
L.addGetterSetter(_e, "embossWhiteLevel", 0.5, ye(), L.afterSetFilter);
L.addGetterSetter(_e, "embossDirection", "top-left", null, L.afterSetFilter);
L.addGetterSetter(_e, "embossBlend", !1, null, L.afterSetFilter);
function Lg(o, e, a, s, u) {
  var d = a - e, v = u - s, g;
  return d === 0 ? s + v / 2 : v === 0 ? s : (g = (o - e) / d, g = v * g + s, g);
}
const M4 = function(o) {
  var e = o.data, a = e.length, s = e[0], u = s, d, v = e[1], g = v, _, m = e[2], E = m, T, w, M = this.enhance();
  if (M !== 0) {
    for (w = 0; w < a; w += 4)
      d = e[w + 0], d < s ? s = d : d > u && (u = d), _ = e[w + 1], _ < v ? v = _ : _ > g && (g = _), T = e[w + 2], T < m ? m = T : T > E && (E = T);
    u === s && (u = 255, s = 0), g === v && (g = 255, v = 0), E === m && (E = 255, m = 0);
    var R, z, k, I, j, G, Z, U, V;
    for (M > 0 ? (z = u + M * (255 - u), k = s - M * (s - 0), j = g + M * (255 - g), G = v - M * (v - 0), U = E + M * (255 - E), V = m - M * (m - 0)) : (R = (u + s) * 0.5, z = u + M * (u - R), k = s + M * (s - R), I = (g + v) * 0.5, j = g + M * (g - I), G = v + M * (v - I), Z = (E + m) * 0.5, U = E + M * (E - Z), V = m + M * (m - Z)), w = 0; w < a; w += 4)
      e[w + 0] = Lg(e[w + 0], s, u, k, z), e[w + 1] = Lg(e[w + 1], v, g, G, j), e[w + 2] = Lg(e[w + 2], m, E, V, U);
  }
};
L.addGetterSetter(_e, "enhance", 0, ye(), L.afterSetFilter);
const O4 = function(o) {
  var e = o.data, a = e.length, s, u;
  for (s = 0; s < a; s += 4)
    u = 0.34 * e[s] + 0.5 * e[s + 1] + 0.16 * e[s + 2], e[s] = u, e[s + 1] = u, e[s + 2] = u;
};
L.addGetterSetter(_e, "hue", 0, ye(), L.afterSetFilter);
L.addGetterSetter(_e, "saturation", 0, ye(), L.afterSetFilter);
L.addGetterSetter(_e, "luminance", 0, ye(), L.afterSetFilter);
const L4 = function(o) {
  var e = o.data, a = e.length, s = 1, u = Math.pow(2, this.saturation()), d = Math.abs(this.hue() + 360) % 360, v = this.luminance() * 127, g, _ = s * u * Math.cos(d * Math.PI / 180), m = s * u * Math.sin(d * Math.PI / 180), E = 0.299 * s + 0.701 * _ + 0.167 * m, T = 0.587 * s - 0.587 * _ + 0.33 * m, w = 0.114 * s - 0.114 * _ - 0.497 * m, M = 0.299 * s - 0.299 * _ - 0.328 * m, R = 0.587 * s + 0.413 * _ + 0.035 * m, z = 0.114 * s - 0.114 * _ + 0.293 * m, k = 0.299 * s - 0.3 * _ + 1.25 * m, I = 0.587 * s - 0.586 * _ - 1.05 * m, j = 0.114 * s + 0.886 * _ - 0.2 * m, G, Z, U, V;
  for (g = 0; g < a; g += 4)
    G = e[g + 0], Z = e[g + 1], U = e[g + 2], V = e[g + 3], e[g + 0] = E * G + T * Z + w * U + v, e[g + 1] = M * G + R * Z + z * U + v, e[g + 2] = k * G + I * Z + j * U + v, e[g + 3] = V;
}, A4 = function(o) {
  var e = o.data, a = e.length, s = Math.pow(2, this.value()), u = Math.pow(2, this.saturation()), d = Math.abs(this.hue() + 360) % 360, v, g = s * u * Math.cos(d * Math.PI / 180), _ = s * u * Math.sin(d * Math.PI / 180), m = 0.299 * s + 0.701 * g + 0.167 * _, E = 0.587 * s - 0.587 * g + 0.33 * _, T = 0.114 * s - 0.114 * g - 0.497 * _, w = 0.299 * s - 0.299 * g - 0.328 * _, M = 0.587 * s + 0.413 * g + 0.035 * _, R = 0.114 * s - 0.114 * g + 0.293 * _, z = 0.299 * s - 0.3 * g + 1.25 * _, k = 0.587 * s - 0.586 * g - 1.05 * _, I = 0.114 * s + 0.886 * g - 0.2 * _, j, G, Z, U;
  for (v = 0; v < a; v += 4)
    j = e[v + 0], G = e[v + 1], Z = e[v + 2], U = e[v + 3], e[v + 0] = m * j + E * G + T * Z, e[v + 1] = w * j + M * G + R * Z, e[v + 2] = z * j + k * G + I * Z, e[v + 3] = U;
};
L.addGetterSetter(_e, "hue", 0, ye(), L.afterSetFilter);
L.addGetterSetter(_e, "saturation", 0, ye(), L.afterSetFilter);
L.addGetterSetter(_e, "value", 0, ye(), L.afterSetFilter);
const P4 = function(o) {
  var e = o.data, a = e.length, s;
  for (s = 0; s < a; s += 4)
    e[s] = 255 - e[s], e[s + 1] = 255 - e[s + 1], e[s + 2] = 255 - e[s + 2];
};
var k4 = function(o, e, a) {
  var s = o.data, u = e.data, d = o.width, v = o.height, g = a.polarCenterX || d / 2, _ = a.polarCenterY || v / 2, m, E, T, w = 0, M = 0, R = 0, z = 0, k, I = Math.sqrt(g * g + _ * _);
  E = d - g, T = v - _, k = Math.sqrt(E * E + T * T), I = k > I ? k : I;
  var j = v, G = d, Z, U, V = 360 / G * Math.PI / 180, X, le;
  for (U = 0; U < G; U += 1)
    for (X = Math.sin(U * V), le = Math.cos(U * V), Z = 0; Z < j; Z += 1)
      E = Math.floor(g + I * Z / j * le), T = Math.floor(_ + I * Z / j * X), m = (T * d + E) * 4, w = s[m + 0], M = s[m + 1], R = s[m + 2], z = s[m + 3], m = (U + Z * d) * 4, u[m + 0] = w, u[m + 1] = M, u[m + 2] = R, u[m + 3] = z;
}, z4 = function(o, e, a) {
  var s = o.data, u = e.data, d = o.width, v = o.height, g = a.polarCenterX || d / 2, _ = a.polarCenterY || v / 2, m, E, T, w, M, R = 0, z = 0, k = 0, I = 0, j, G = Math.sqrt(g * g + _ * _);
  E = d - g, T = v - _, j = Math.sqrt(E * E + T * T), G = j > G ? j : G;
  var Z = v, U = d, V, X, le = a.polarRotation || 0, ee, Q;
  for (E = 0; E < d; E += 1)
    for (T = 0; T < v; T += 1)
      w = E - g, M = T - _, V = Math.sqrt(w * w + M * M) * Z / G, X = (Math.atan2(M, w) * 180 / Math.PI + 360 + le) % 360, X = X * U / 360, ee = Math.floor(X), Q = Math.floor(V), m = (Q * d + ee) * 4, R = s[m + 0], z = s[m + 1], k = s[m + 2], I = s[m + 3], m = (T * d + E) * 4, u[m + 0] = R, u[m + 1] = z, u[m + 2] = k, u[m + 3] = I;
};
const U4 = function(o) {
  var e = o.width, a = o.height, s, u, d, v, g, _, m, E, T, w, M = Math.round(this.kaleidoscopePower()), R = Math.round(this.kaleidoscopeAngle()), z = Math.floor(e * (R % 360) / 360);
  if (!(M < 1)) {
    var k = B.createCanvasElement();
    k.width = e, k.height = a;
    var I = k.getContext("2d").getImageData(0, 0, e, a);
    B.releaseCanvas(k), k4(o, I, {
      polarCenterX: e / 2,
      polarCenterY: a / 2
    });
    for (var j = e / Math.pow(2, M); j <= 8; )
      j = j * 2, M -= 1;
    j = Math.ceil(j);
    var G = j, Z = 0, U = G, V = 1;
    for (z + j > e && (Z = G, U = 0, V = -1), u = 0; u < a; u += 1)
      for (s = Z; s !== U; s += V)
        d = Math.round(s + z) % e, T = (e * u + d) * 4, g = I.data[T + 0], _ = I.data[T + 1], m = I.data[T + 2], E = I.data[T + 3], w = (e * u + s) * 4, I.data[w + 0] = g, I.data[w + 1] = _, I.data[w + 2] = m, I.data[w + 3] = E;
    for (u = 0; u < a; u += 1)
      for (G = Math.floor(j), v = 0; v < M; v += 1) {
        for (s = 0; s < G + 1; s += 1)
          T = (e * u + s) * 4, g = I.data[T + 0], _ = I.data[T + 1], m = I.data[T + 2], E = I.data[T + 3], w = (e * u + G * 2 - s - 1) * 4, I.data[w + 0] = g, I.data[w + 1] = _, I.data[w + 2] = m, I.data[w + 3] = E;
        G *= 2;
      }
    z4(I, o, { polarRotation: 0 });
  }
};
L.addGetterSetter(_e, "kaleidoscopePower", 2, ye(), L.afterSetFilter);
L.addGetterSetter(_e, "kaleidoscopeAngle", 0, ye(), L.afterSetFilter);
function bv(o, e, a) {
  var s = (a * o.width + e) * 4, u = [];
  return u.push(o.data[s++], o.data[s++], o.data[s++], o.data[s++]), u;
}
function Yf(o, e) {
  return Math.sqrt(Math.pow(o[0] - e[0], 2) + Math.pow(o[1] - e[1], 2) + Math.pow(o[2] - e[2], 2));
}
function F4(o) {
  for (var e = [0, 0, 0], a = 0; a < o.length; a++)
    e[0] += o[a][0], e[1] += o[a][1], e[2] += o[a][2];
  return e[0] /= o.length, e[1] /= o.length, e[2] /= o.length, e;
}
function H4(o, e) {
  var a = bv(o, 0, 0), s = bv(o, o.width - 1, 0), u = bv(o, 0, o.height - 1), d = bv(o, o.width - 1, o.height - 1), v = e || 10;
  if (Yf(a, s) < v && Yf(s, d) < v && Yf(d, u) < v && Yf(u, a) < v) {
    for (var g = F4([s, a, d, u]), _ = [], m = 0; m < o.width * o.height; m++) {
      var E = Yf(g, [
        o.data[m * 4],
        o.data[m * 4 + 1],
        o.data[m * 4 + 2]
      ]);
      _[m] = E < v ? 0 : 255;
    }
    return _;
  }
}
function G4(o, e) {
  for (var a = 0; a < o.width * o.height; a++)
    o.data[4 * a + 3] = e[a];
}
function j4(o, e, a) {
  for (var s = [1, 1, 1, 1, 0, 1, 1, 1, 1], u = Math.round(Math.sqrt(s.length)), d = Math.floor(u / 2), v = [], g = 0; g < a; g++)
    for (var _ = 0; _ < e; _++) {
      for (var m = g * e + _, E = 0, T = 0; T < u; T++)
        for (var w = 0; w < u; w++) {
          var M = g + T - d, R = _ + w - d;
          if (M >= 0 && M < a && R >= 0 && R < e) {
            var z = M * e + R, k = s[T * u + w];
            E += o[z] * k;
          }
        }
      v[m] = E === 255 * 8 ? 255 : 0;
    }
  return v;
}
function B4(o, e, a) {
  for (var s = [1, 1, 1, 1, 1, 1, 1, 1, 1], u = Math.round(Math.sqrt(s.length)), d = Math.floor(u / 2), v = [], g = 0; g < a; g++)
    for (var _ = 0; _ < e; _++) {
      for (var m = g * e + _, E = 0, T = 0; T < u; T++)
        for (var w = 0; w < u; w++) {
          var M = g + T - d, R = _ + w - d;
          if (M >= 0 && M < a && R >= 0 && R < e) {
            var z = M * e + R, k = s[T * u + w];
            E += o[z] * k;
          }
        }
      v[m] = E >= 255 * 4 ? 255 : 0;
    }
  return v;
}
function I4(o, e, a) {
  for (var s = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], u = Math.round(Math.sqrt(s.length)), d = Math.floor(u / 2), v = [], g = 0; g < a; g++)
    for (var _ = 0; _ < e; _++) {
      for (var m = g * e + _, E = 0, T = 0; T < u; T++)
        for (var w = 0; w < u; w++) {
          var M = g + T - d, R = _ + w - d;
          if (M >= 0 && M < a && R >= 0 && R < e) {
            var z = M * e + R, k = s[T * u + w];
            E += o[z] * k;
          }
        }
      v[m] = E;
    }
  return v;
}
const V4 = function(o) {
  var e = this.threshold(), a = H4(o, e);
  return a && (a = j4(a, o.width, o.height), a = B4(a, o.width, o.height), a = I4(a, o.width, o.height), G4(o, a)), o;
};
L.addGetterSetter(_e, "threshold", 0, ye(), L.afterSetFilter);
const Y4 = function(o) {
  var e = this.noise() * 255, a = o.data, s = a.length, u = e / 2, d;
  for (d = 0; d < s; d += 4)
    a[d + 0] += u - 2 * u * Math.random(), a[d + 1] += u - 2 * u * Math.random(), a[d + 2] += u - 2 * u * Math.random();
};
L.addGetterSetter(_e, "noise", 0.2, ye(), L.afterSetFilter);
const q4 = function(o) {
  var e = Math.ceil(this.pixelSize()), a = o.width, s = o.height, u, d, v, g, _, m, E, T = Math.ceil(a / e), w = Math.ceil(s / e), M, R, z, k, I, j, G, Z = o.data;
  if (e <= 0) {
    B.error("pixelSize value can not be <= 0");
    return;
  }
  for (I = 0; I < T; I += 1)
    for (j = 0; j < w; j += 1) {
      for (g = 0, _ = 0, m = 0, E = 0, M = I * e, R = M + e, z = j * e, k = z + e, G = 0, u = M; u < R; u += 1)
        if (!(u >= a))
          for (d = z; d < k; d += 1)
            d >= s || (v = (a * d + u) * 4, g += Z[v + 0], _ += Z[v + 1], m += Z[v + 2], E += Z[v + 3], G += 1);
      for (g = g / G, _ = _ / G, m = m / G, E = E / G, u = M; u < R; u += 1)
        if (!(u >= a))
          for (d = z; d < k; d += 1)
            d >= s || (v = (a * d + u) * 4, Z[v + 0] = g, Z[v + 1] = _, Z[v + 2] = m, Z[v + 3] = E);
    }
};
L.addGetterSetter(_e, "pixelSize", 8, ye(), L.afterSetFilter);
const W4 = function(o) {
  var e = Math.round(this.levels() * 254) + 1, a = o.data, s = a.length, u = 255 / e, d;
  for (d = 0; d < s; d += 1)
    a[d] = Math.floor(a[d] / u) * u;
};
L.addGetterSetter(_e, "levels", 0.5, ye(), L.afterSetFilter);
const X4 = function(o) {
  var e = o.data, a = e.length, s = this.red(), u = this.green(), d = this.blue(), v, g;
  for (v = 0; v < a; v += 4)
    g = (0.34 * e[v] + 0.5 * e[v + 1] + 0.16 * e[v + 2]) / 255, e[v] = g * s, e[v + 1] = g * u, e[v + 2] = g * d, e[v + 3] = e[v + 3];
};
L.addGetterSetter(_e, "red", 0, function(o) {
  return this._filterUpToDate = !1, o > 255 ? 255 : o < 0 ? 0 : Math.round(o);
});
L.addGetterSetter(_e, "green", 0, function(o) {
  return this._filterUpToDate = !1, o > 255 ? 255 : o < 0 ? 0 : Math.round(o);
});
L.addGetterSetter(_e, "blue", 0, FS, L.afterSetFilter);
const Q4 = function(o) {
  var e = o.data, a = e.length, s = this.red(), u = this.green(), d = this.blue(), v = this.alpha(), g, _;
  for (g = 0; g < a; g += 4)
    _ = 1 - v, e[g] = s * v + e[g] * _, e[g + 1] = u * v + e[g + 1] * _, e[g + 2] = d * v + e[g + 2] * _;
};
L.addGetterSetter(_e, "red", 0, function(o) {
  return this._filterUpToDate = !1, o > 255 ? 255 : o < 0 ? 0 : Math.round(o);
});
L.addGetterSetter(_e, "green", 0, function(o) {
  return this._filterUpToDate = !1, o > 255 ? 255 : o < 0 ? 0 : Math.round(o);
});
L.addGetterSetter(_e, "blue", 0, FS, L.afterSetFilter);
L.addGetterSetter(_e, "alpha", 1, function(o) {
  return this._filterUpToDate = !1, o > 1 ? 1 : o < 0 ? 0 : o;
});
const K4 = function(o) {
  var e = o.data, a = e.length, s, u, d, v;
  for (s = 0; s < a; s += 4)
    u = e[s + 0], d = e[s + 1], v = e[s + 2], e[s + 0] = Math.min(255, u * 0.393 + d * 0.769 + v * 0.189), e[s + 1] = Math.min(255, u * 0.349 + d * 0.686 + v * 0.168), e[s + 2] = Math.min(255, u * 0.272 + d * 0.534 + v * 0.131);
}, J4 = function(o) {
  var e = o.data, a = o.width, s = o.height, u = a * 4, d = s;
  do {
    var v = (d - 1) * u, g = a;
    do {
      var _ = v + (g - 1) * 4, m = e[_], E = e[_ + 1], T = e[_ + 2];
      m > 127 && (m = 255 - m), E > 127 && (E = 255 - E), T > 127 && (T = 255 - T), e[_] = m, e[_ + 1] = E, e[_ + 2] = T;
    } while (--g);
  } while (--d);
}, Z4 = function(o) {
  var e = this.threshold() * 255, a = o.data, s = a.length, u;
  for (u = 0; u < s; u += 1)
    a[u] = a[u] < e ? 0 : 255;
};
L.addGetterSetter(_e, "threshold", 0.5, ye(), L.afterSetFilter);
const $4 = Mo.Util._assign(Mo, {
  Arc: Kl,
  Arrow: Po,
  Circle: fc,
  Ellipse: Is,
  Image: ml,
  Label: i0,
  Tag: ko,
  Line: Jl,
  Path: vn,
  Rect: fd,
  RegularPolygon: zo,
  Ring: Uo,
  Sprite: gl,
  Star: Vs,
  Text: An,
  TextPath: xr,
  Transformer: nn,
  Wedge: Zl,
  Filters: {
    Blur: R4,
    Brighten: w4,
    Contrast: D4,
    Emboss: N4,
    Enhance: M4,
    Grayscale: O4,
    HSL: L4,
    HSV: A4,
    Invert: P4,
    Kaleidoscope: U4,
    Mask: V4,
    Noise: Y4,
    Pixelate: q4,
    Posterize: W4,
    RGB: X4,
    RGBA: Q4,
    Sepia: K4,
    Solarize: J4,
    Threshold: Z4
  }
});
var Wg = {}, eb = {
  get exports() {
    return Wg;
  },
  set exports(o) {
    Wg = o;
  }
}, Pv = {}, tb = {
  get exports() {
    return Pv;
  },
  set exports(o) {
    Pv = o;
  }
}, Ag = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N2;
function nb() {
  return N2 || (N2 = 1, function(o) {
    function e(oe, fe) {
      var de = oe.length;
      oe.push(fe);
      e:
        for (; 0 < de; ) {
          var Se = de - 1 >>> 1, Xe = oe[Se];
          if (0 < u(Xe, fe))
            oe[Se] = fe, oe[de] = Xe, de = Se;
          else
            break e;
        }
    }
    function a(oe) {
      return oe.length === 0 ? null : oe[0];
    }
    function s(oe) {
      if (oe.length === 0)
        return null;
      var fe = oe[0], de = oe.pop();
      if (de !== fe) {
        oe[0] = de;
        e:
          for (var Se = 0, Xe = oe.length, Ne = Xe >>> 1; Se < Ne; ) {
            var Re = 2 * (Se + 1) - 1, nt = oe[Re], Ct = Re + 1, Ue = oe[Ct];
            if (0 > u(nt, de))
              Ct < Xe && 0 > u(Ue, nt) ? (oe[Se] = Ue, oe[Ct] = de, Se = Ct) : (oe[Se] = nt, oe[Re] = de, Se = Re);
            else if (Ct < Xe && 0 > u(Ue, de))
              oe[Se] = Ue, oe[Ct] = de, Se = Ct;
            else
              break e;
          }
      }
      return fe;
    }
    function u(oe, fe) {
      var de = oe.sortIndex - fe.sortIndex;
      return de !== 0 ? de : oe.id - fe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      o.unstable_now = function() {
        return d.now();
      };
    } else {
      var v = Date, g = v.now();
      o.unstable_now = function() {
        return v.now() - g;
      };
    }
    var _ = [], m = [], E = 1, T = null, w = 3, M = !1, R = !1, z = !1, k = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(oe) {
      for (var fe = a(m); fe !== null; ) {
        if (fe.callback === null)
          s(m);
        else if (fe.startTime <= oe)
          s(m), fe.sortIndex = fe.expirationTime, e(_, fe);
        else
          break;
        fe = a(m);
      }
    }
    function Z(oe) {
      if (z = !1, G(oe), !R)
        if (a(_) !== null)
          R = !0, Ie(U);
        else {
          var fe = a(m);
          fe !== null && Le(Z, fe.startTime - oe);
        }
    }
    function U(oe, fe) {
      R = !1, z && (z = !1, I(le), le = -1), M = !0;
      var de = w;
      try {
        for (G(fe), T = a(_); T !== null && (!(T.expirationTime > fe) || oe && !K()); ) {
          var Se = T.callback;
          if (typeof Se == "function") {
            T.callback = null, w = T.priorityLevel;
            var Xe = Se(T.expirationTime <= fe);
            fe = o.unstable_now(), typeof Xe == "function" ? T.callback = Xe : T === a(_) && s(_), G(fe);
          } else
            s(_);
          T = a(_);
        }
        if (T !== null)
          var Ne = !0;
        else {
          var Re = a(m);
          Re !== null && Le(Z, Re.startTime - fe), Ne = !1;
        }
        return Ne;
      } finally {
        T = null, w = de, M = !1;
      }
    }
    var V = !1, X = null, le = -1, ee = 5, Q = -1;
    function K() {
      return !(o.unstable_now() - Q < ee);
    }
    function xe() {
      if (X !== null) {
        var oe = o.unstable_now();
        Q = oe;
        var fe = !0;
        try {
          fe = X(!0, oe);
        } finally {
          fe ? pe() : (V = !1, X = null);
        }
      } else
        V = !1;
    }
    var pe;
    if (typeof j == "function")
      pe = function() {
        j(xe);
      };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), lt = ke.port2;
      ke.port1.onmessage = xe, pe = function() {
        lt.postMessage(null);
      };
    } else
      pe = function() {
        k(xe, 0);
      };
    function Ie(oe) {
      X = oe, V || (V = !0, pe());
    }
    function Le(oe, fe) {
      le = k(function() {
        oe(o.unstable_now());
      }, fe);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(oe) {
      oe.callback = null;
    }, o.unstable_continueExecution = function() {
      R || M || (R = !0, Ie(U));
    }, o.unstable_forceFrameRate = function(oe) {
      0 > oe || 125 < oe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < oe ? Math.floor(1e3 / oe) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, o.unstable_getFirstCallbackNode = function() {
      return a(_);
    }, o.unstable_next = function(oe) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var fe = 3;
          break;
        default:
          fe = w;
      }
      var de = w;
      w = fe;
      try {
        return oe();
      } finally {
        w = de;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(oe, fe) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          oe = 3;
      }
      var de = w;
      w = oe;
      try {
        return fe();
      } finally {
        w = de;
      }
    }, o.unstable_scheduleCallback = function(oe, fe, de) {
      var Se = o.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? Se + de : Se) : de = Se, oe) {
        case 1:
          var Xe = -1;
          break;
        case 2:
          Xe = 250;
          break;
        case 5:
          Xe = 1073741823;
          break;
        case 4:
          Xe = 1e4;
          break;
        default:
          Xe = 5e3;
      }
      return Xe = de + Xe, oe = { id: E++, callback: fe, priorityLevel: oe, startTime: de, expirationTime: Xe, sortIndex: -1 }, de > Se ? (oe.sortIndex = de, e(m, oe), a(_) === null && oe === a(m) && (z ? (I(le), le = -1) : z = !0, Le(Z, de - Se))) : (oe.sortIndex = Xe, e(_, oe), R || M || (R = !0, Ie(U))), oe;
    }, o.unstable_shouldYield = K, o.unstable_wrapCallback = function(oe) {
      var fe = w;
      return function() {
        var de = w;
        w = fe;
        try {
          return oe.apply(this, arguments);
        } finally {
          w = de;
        }
      };
    };
  }(Ag)), Ag;
}
var Pg = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M2;
function rb() {
  return M2 || (M2 = 1, function(o) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var e = !1, a = !1, s = 5;
      function u(be, rt) {
        var yt = be.length;
        be.push(rt), g(be, rt, yt);
      }
      function d(be) {
        return be.length === 0 ? null : be[0];
      }
      function v(be) {
        if (be.length === 0)
          return null;
        var rt = be[0], yt = be.pop();
        return yt !== rt && (be[0] = yt, _(be, yt, 0)), rt;
      }
      function g(be, rt, yt) {
        for (var $e = yt; $e > 0; ) {
          var En = $e - 1 >>> 1, Er = be[En];
          if (m(Er, rt) > 0)
            be[En] = rt, be[$e] = Er, $e = En;
          else
            return;
        }
      }
      function _(be, rt, yt) {
        for (var $e = yt, En = be.length, Er = En >>> 1; $e < Er; ) {
          var Ye = ($e + 1) * 2 - 1, Ge = be[Ye], pn = Ye + 1, Xt = be[pn];
          if (m(Ge, rt) < 0)
            pn < En && m(Xt, Ge) < 0 ? (be[$e] = Xt, be[pn] = rt, $e = pn) : (be[$e] = Ge, be[Ye] = rt, $e = Ye);
          else if (pn < En && m(Xt, rt) < 0)
            be[$e] = Xt, be[pn] = rt, $e = pn;
          else
            return;
        }
      }
      function m(be, rt) {
        var yt = be.sortIndex - rt.sortIndex;
        return yt !== 0 ? yt : be.id - rt.id;
      }
      var E = 1, T = 2, w = 3, M = 4, R = 5;
      function z(be, rt) {
      }
      var k = typeof performance == "object" && typeof performance.now == "function";
      if (k) {
        var I = performance;
        o.unstable_now = function() {
          return I.now();
        };
      } else {
        var j = Date, G = j.now();
        o.unstable_now = function() {
          return j.now() - G;
        };
      }
      var Z = 1073741823, U = -1, V = 250, X = 5e3, le = 1e4, ee = Z, Q = [], K = [], xe = 1, pe = null, ke = w, lt = !1, Ie = !1, Le = !1, oe = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Se(be) {
        for (var rt = d(K); rt !== null; ) {
          if (rt.callback === null)
            v(K);
          else if (rt.startTime <= be)
            v(K), rt.sortIndex = rt.expirationTime, u(Q, rt);
          else
            return;
          rt = d(K);
        }
      }
      function Xe(be) {
        if (Le = !1, Se(be), !Ie)
          if (d(Q) !== null)
            Ie = !0, pa(Ne);
          else {
            var rt = d(K);
            rt !== null && Cr(Xe, rt.startTime - be);
          }
      }
      function Ne(be, rt) {
        Ie = !1, Le && (Le = !1, Gi()), lt = !0;
        var yt = ke;
        try {
          var $e;
          if (!a)
            return Re(be, rt);
        } finally {
          pe = null, ke = yt, lt = !1;
        }
      }
      function Re(be, rt) {
        var yt = rt;
        for (Se(yt), pe = d(Q); pe !== null && !e && !(pe.expirationTime > yt && (!be || Ee())); ) {
          var $e = pe.callback;
          if (typeof $e == "function") {
            pe.callback = null, ke = pe.priorityLevel;
            var En = pe.expirationTime <= yt, Er = $e(En);
            yt = o.unstable_now(), typeof Er == "function" ? pe.callback = Er : pe === d(Q) && v(Q), Se(yt);
          } else
            v(Q);
          pe = d(Q);
        }
        if (pe !== null)
          return !0;
        var Ye = d(K);
        return Ye !== null && Cr(Xe, Ye.startTime - yt), !1;
      }
      function nt(be, rt) {
        switch (be) {
          case E:
          case T:
          case w:
          case M:
          case R:
            break;
          default:
            be = w;
        }
        var yt = ke;
        ke = be;
        try {
          return rt();
        } finally {
          ke = yt;
        }
      }
      function Ct(be) {
        var rt;
        switch (ke) {
          case E:
          case T:
          case w:
            rt = w;
            break;
          default:
            rt = ke;
            break;
        }
        var yt = ke;
        ke = rt;
        try {
          return be();
        } finally {
          ke = yt;
        }
      }
      function Ue(be) {
        var rt = ke;
        return function() {
          var yt = ke;
          ke = rt;
          try {
            return be.apply(this, arguments);
          } finally {
            ke = yt;
          }
        };
      }
      function st(be, rt, yt) {
        var $e = o.unstable_now(), En;
        if (typeof yt == "object" && yt !== null) {
          var Er = yt.delay;
          typeof Er == "number" && Er > 0 ? En = $e + Er : En = $e;
        } else
          En = $e;
        var Ye;
        switch (be) {
          case E:
            Ye = U;
            break;
          case T:
            Ye = V;
            break;
          case R:
            Ye = ee;
            break;
          case M:
            Ye = le;
            break;
          case w:
          default:
            Ye = X;
            break;
        }
        var Ge = En + Ye, pn = {
          id: xe++,
          callback: rt,
          priorityLevel: be,
          startTime: En,
          expirationTime: Ge,
          sortIndex: -1
        };
        return En > $e ? (pn.sortIndex = En, u(K, pn), d(Q) === null && pn === d(K) && (Le ? Gi() : Le = !0, Cr(Xe, En - $e))) : (pn.sortIndex = Ge, u(Q, pn), !Ie && !lt && (Ie = !0, pa(Ne))), pn;
      }
      function rn() {
      }
      function cn() {
        !Ie && !lt && (Ie = !0, pa(Ne));
      }
      function Ft() {
        return d(Q);
      }
      function Ce(be) {
        be.callback = null;
      }
      function Gt() {
        return ke;
      }
      var fn = !1, Cn = null, ar = -1, ir = s, Qn = -1;
      function Ee() {
        var be = o.unstable_now() - Qn;
        return !(be < ir);
      }
      function Me() {
      }
      function dt(be) {
        if (be < 0 || be > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        be > 0 ? ir = Math.floor(1e3 / be) : ir = s;
      }
      var Ke = function() {
        if (Cn !== null) {
          var be = o.unstable_now();
          Qn = be;
          var rt = !0, yt = !0;
          try {
            yt = Cn(rt, be);
          } finally {
            yt ? Wt() : (fn = !1, Cn = null);
          }
        } else
          fn = !1;
      }, Wt;
      if (typeof de == "function")
        Wt = function() {
          de(Ke);
        };
      else if (typeof MessageChannel < "u") {
        var _n = new MessageChannel(), Oa = _n.port2;
        _n.port1.onmessage = Ke, Wt = function() {
          Oa.postMessage(null);
        };
      } else
        Wt = function() {
          oe(Ke, 0);
        };
      function pa(be) {
        Cn = be, fn || (fn = !0, Wt());
      }
      function Cr(be, rt) {
        ar = oe(function() {
          be(o.unstable_now());
        }, rt);
      }
      function Gi() {
        fe(ar), ar = -1;
      }
      var Za = Me, $l = null;
      o.unstable_IdlePriority = R, o.unstable_ImmediatePriority = E, o.unstable_LowPriority = M, o.unstable_NormalPriority = w, o.unstable_Profiling = $l, o.unstable_UserBlockingPriority = T, o.unstable_cancelCallback = Ce, o.unstable_continueExecution = cn, o.unstable_forceFrameRate = dt, o.unstable_getCurrentPriorityLevel = Gt, o.unstable_getFirstCallbackNode = Ft, o.unstable_next = Ct, o.unstable_pauseExecution = rn, o.unstable_requestPaint = Za, o.unstable_runWithPriority = nt, o.unstable_scheduleCallback = st, o.unstable_shouldYield = Ee, o.unstable_wrapCallback = Ue, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Pg)), Pg;
}
var O2;
function l0() {
  return O2 || (O2 = 1, function(o) {
    process.env.NODE_ENV === "production" ? o.exports = nb() : o.exports = rb();
  }(tb)), Pv;
}
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kg, L2;
function ab() {
  return L2 || (L2 = 1, kg = function(e) {
    var a = {}, s = Yt, u = l0(), d = Object.assign;
    function v(r) {
      for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, f = 1; f < arguments.length; f++)
        i += "&args[]=" + encodeURIComponent(arguments[f]);
      return "Minified React error #" + r + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var g = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = Symbol.for("react.element"), m = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), R = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), U = Symbol.iterator;
    function V(r) {
      return r === null || typeof r != "object" ? null : (r = U && r[U] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    function X(r) {
      if (r == null)
        return null;
      if (typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case E:
          return "Fragment";
        case m:
          return "Portal";
        case w:
          return "Profiler";
        case T:
          return "StrictMode";
        case k:
          return "Suspense";
        case I:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case R:
            return (r.displayName || "Context") + ".Consumer";
          case M:
            return (r._context.displayName || "Context") + ".Provider";
          case z:
            var i = r.render;
            return r = r.displayName, r || (r = i.displayName || i.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case j:
            return i = r.displayName || null, i !== null ? i : X(r.type) || "Memo";
          case G:
            i = r._payload, r = r._init;
            try {
              return X(r(i));
            } catch {
            }
        }
      return null;
    }
    function le(r) {
      var i = r.type;
      switch (r.tag) {
        case 24:
          return "Cache";
        case 9:
          return (i.displayName || "Context") + ".Consumer";
        case 10:
          return (i._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return r = i.render, r = r.displayName || r.name || "", i.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return i;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return X(i);
        case 8:
          return i === T ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
      }
      return null;
    }
    function ee(r) {
      var i = r, f = r;
      if (r.alternate)
        for (; i.return; )
          i = i.return;
      else {
        r = i;
        do
          i = r, i.flags & 4098 && (f = i.return), r = i.return;
        while (r);
      }
      return i.tag === 3 ? f : null;
    }
    function Q(r) {
      if (ee(r) !== r)
        throw Error(v(188));
    }
    function K(r) {
      var i = r.alternate;
      if (!i) {
        if (i = ee(r), i === null)
          throw Error(v(188));
        return i !== r ? null : r;
      }
      for (var f = r, p = i; ; ) {
        var S = f.return;
        if (S === null)
          break;
        var x = S.alternate;
        if (x === null) {
          if (p = S.return, p !== null) {
            f = p;
            continue;
          }
          break;
        }
        if (S.child === x.child) {
          for (x = S.child; x; ) {
            if (x === f)
              return Q(S), r;
            if (x === p)
              return Q(S), i;
            x = x.sibling;
          }
          throw Error(v(188));
        }
        if (f.return !== p.return)
          f = S, p = x;
        else {
          for (var N = !1, F = S.child; F; ) {
            if (F === f) {
              N = !0, f = S, p = x;
              break;
            }
            if (F === p) {
              N = !0, p = S, f = x;
              break;
            }
            F = F.sibling;
          }
          if (!N) {
            for (F = x.child; F; ) {
              if (F === f) {
                N = !0, f = x, p = S;
                break;
              }
              if (F === p) {
                N = !0, p = x, f = S;
                break;
              }
              F = F.sibling;
            }
            if (!N)
              throw Error(v(189));
          }
        }
        if (f.alternate !== p)
          throw Error(v(190));
      }
      if (f.tag !== 3)
        throw Error(v(188));
      return f.stateNode.current === f ? r : i;
    }
    function xe(r) {
      return r = K(r), r !== null ? pe(r) : null;
    }
    function pe(r) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      for (r = r.child; r !== null; ) {
        var i = pe(r);
        if (i !== null)
          return i;
        r = r.sibling;
      }
      return null;
    }
    function ke(r) {
      if (r.tag === 5 || r.tag === 6)
        return r;
      for (r = r.child; r !== null; ) {
        if (r.tag !== 4) {
          var i = ke(r);
          if (i !== null)
            return i;
        }
        r = r.sibling;
      }
      return null;
    }
    var lt = Array.isArray, Ie = e.getPublicInstance, Le = e.getRootHostContext, oe = e.getChildHostContext, fe = e.prepareForCommit, de = e.resetAfterCommit, Se = e.createInstance, Xe = e.appendInitialChild, Ne = e.finalizeInitialChildren, Re = e.prepareUpdate, nt = e.shouldSetTextContent, Ct = e.createTextInstance, Ue = e.scheduleTimeout, st = e.cancelTimeout, rn = e.noTimeout, cn = e.isPrimaryRenderer, Ft = e.supportsMutation, Ce = e.supportsPersistence, Gt = e.supportsHydration, fn = e.getInstanceFromNode, Cn = e.preparePortalMount, ar = e.getCurrentEventPriority, ir = e.detachDeletedInstance, Qn = e.supportsMicrotasks, Ee = e.scheduleMicrotask, Me = e.supportsTestSelectors, dt = e.findFiberRoot, Ke = e.getBoundingRect, Wt = e.getTextContent, _n = e.isHiddenSubtree, Oa = e.matchAccessibilityRole, pa = e.setFocusIfFocusable, Cr = e.setupIntersectionObserver, Gi = e.appendChild, Za = e.appendChildToContainer, $l = e.commitTextUpdate, be = e.commitMount, rt = e.commitUpdate, yt = e.insertBefore, $e = e.insertInContainerBefore, En = e.removeChild, Er = e.removeChildFromContainer, Ye = e.resetTextContent, Ge = e.hideInstance, pn = e.hideTextInstance, Xt = e.unhideInstance, pt = e.unhideTextInstance, ma = e.clearContainer, hi = e.cloneInstance, yl = e.createContainerChildSet, Dt = e.appendChildToContainerChildSet, ga = e.finalizeContainerChildren, ya = e.replaceContainerChildren, La = e.cloneHiddenInstance, Mr = e.cloneHiddenTextInstance, Aa = e.canHydrateInstance, pi = e.canHydrateTextInstance, Sl = e.canHydrateSuspenseInstance, Fo = e.isSuspenseInstancePending, qs = e.isSuspenseInstanceFallback, _l = e.getSuspenseInstanceFallbackErrorDetails, lr = e.registerSuspenseInstanceRetry, A = e.getNextHydratableSibling, he = e.getFirstHydratableChild, we = e.getFirstHydratableChildWithinContainer, Je = e.getFirstHydratableChildWithinSuspenseInstance, Ot = e.hydrateInstance, bt = e.hydrateTextInstance, St = e.hydrateSuspenseInstance, gt = e.getNextHydratableInstanceAfterSuspenseInstance, Rn = e.commitHydratedContainer, an = e.commitHydratedSuspenseInstance, ln = e.clearSuspenseBoundary, bn = e.clearSuspenseBoundaryFromContainer, ji = e.shouldDeleteUnhydratedTailInstances, xl = e.didNotMatchHydratedContainerTextInstance, Pa = e.didNotMatchHydratedTextInstance, hc;
    function es(r) {
      if (hc === void 0)
        try {
          throw Error();
        } catch (f) {
          var i = f.stack.trim().match(/\n( *(at )?)/);
          hc = i && i[1] || "";
        }
      return `
` + hc + r;
    }
    var Ho = !1;
    function Ws(r, i) {
      if (!r || Ho)
        return "";
      Ho = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (i)
          if (i = function() {
            throw Error();
          }, Object.defineProperty(i.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (me) {
              var p = me;
            }
            Reflect.construct(r, [], i);
          } else {
            try {
              i.call();
            } catch (me) {
              p = me;
            }
            r.call(i.prototype);
          }
        else {
          try {
            throw Error();
          } catch (me) {
            p = me;
          }
          r();
        }
      } catch (me) {
        if (me && p && typeof me.stack == "string") {
          for (var S = me.stack.split(`
`), x = p.stack.split(`
`), N = S.length - 1, F = x.length - 1; 1 <= N && 0 <= F && S[N] !== x[F]; )
            F--;
          for (; 1 <= N && 0 <= F; N--, F--)
            if (S[N] !== x[F]) {
              if (N !== 1 || F !== 1)
                do
                  if (N--, F--, 0 > F || S[N] !== x[F]) {
                    var te = `
` + S[N].replace(" at new ", " at ");
                    return r.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", r.displayName)), te;
                  }
                while (1 <= N && 0 <= F);
              break;
            }
        }
      } finally {
        Ho = !1, Error.prepareStackTrace = f;
      }
      return (r = r ? r.displayName || r.name : "") ? es(r) : "";
    }
    var pd = Object.prototype.hasOwnProperty, vc = [], Cl = -1;
    function Bi(r) {
      return { current: r };
    }
    function Tt(r) {
      0 > Cl || (r.current = vc[Cl], vc[Cl] = null, Cl--);
    }
    function Qt(r, i) {
      Cl++, vc[Cl] = r.current, r.current = i;
    }
    var Ii = {}, br = Bi(Ii), jr = Bi(!1), El = Ii;
    function ts(r, i) {
      var f = r.type.contextTypes;
      if (!f)
        return Ii;
      var p = r.stateNode;
      if (p && p.__reactInternalMemoizedUnmaskedChildContext === i)
        return p.__reactInternalMemoizedMaskedChildContext;
      var S = {}, x;
      for (x in f)
        S[x] = i[x];
      return p && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = i, r.__reactInternalMemoizedMaskedChildContext = S), S;
    }
    function Tr(r) {
      return r = r.childContextTypes, r != null;
    }
    function Xs() {
      Tt(jr), Tt(br);
    }
    function pc(r, i, f) {
      if (br.current !== Ii)
        throw Error(v(168));
      Qt(br, i), Qt(jr, f);
    }
    function Go(r, i, f) {
      var p = r.stateNode;
      if (i = i.childContextTypes, typeof p.getChildContext != "function")
        return f;
      p = p.getChildContext();
      for (var S in p)
        if (!(S in i))
          throw Error(v(108, le(r) || "Unknown", S));
      return d({}, f, p);
    }
    function Qs(r) {
      return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Ii, El = br.current, Qt(br, r), Qt(jr, jr.current), !0;
    }
    function mc(r, i, f) {
      var p = r.stateNode;
      if (!p)
        throw Error(v(169));
      f ? (r = Go(r, i, El), p.__reactInternalMemoizedMergedChildContext = r, Tt(jr), Tt(br), Qt(br, r)) : Tt(jr), Qt(jr, f);
    }
    var ka = Math.clz32 ? Math.clz32 : Jv, gc = Math.log, jo = Math.LN2;
    function Jv(r) {
      return r >>>= 0, r === 0 ? 32 : 31 - (gc(r) / jo | 0) | 0;
    }
    var Rr = 64, bl = 4194304;
    function wr(r) {
      switch (r & -r) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return r & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return r;
      }
    }
    function Bo(r, i) {
      var f = r.pendingLanes;
      if (f === 0)
        return 0;
      var p = 0, S = r.suspendedLanes, x = r.pingedLanes, N = f & 268435455;
      if (N !== 0) {
        var F = N & ~S;
        F !== 0 ? p = wr(F) : (x &= N, x !== 0 && (p = wr(x)));
      } else
        N = f & ~S, N !== 0 ? p = wr(N) : x !== 0 && (p = wr(x));
      if (p === 0)
        return 0;
      if (i !== 0 && i !== p && !(i & S) && (S = p & -p, x = i & -i, S >= x || S === 16 && (x & 4194240) !== 0))
        return i;
      if (p & 4 && (p |= f & 16), i = r.entangledLanes, i !== 0)
        for (r = r.entanglements, i &= p; 0 < i; )
          f = 31 - ka(i), S = 1 << f, p |= r[f], i &= ~S;
      return p;
    }
    function Zv(r, i) {
      switch (r) {
        case 1:
        case 2:
        case 4:
          return i + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return i + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function $v(r, i) {
      for (var f = r.suspendedLanes, p = r.pingedLanes, S = r.expirationTimes, x = r.pendingLanes; 0 < x; ) {
        var N = 31 - ka(x), F = 1 << N, te = S[N];
        te === -1 ? (!(F & f) || F & p) && (S[N] = Zv(F, i)) : te <= i && (r.expiredLanes |= F), x &= ~F;
      }
    }
    function yc(r) {
      return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
    }
    function md() {
      var r = Rr;
      return Rr <<= 1, !(Rr & 4194240) && (Rr = 64), r;
    }
    function Sc(r) {
      for (var i = [], f = 0; 31 > f; f++)
        i.push(r);
      return i;
    }
    function $a(r, i, f) {
      r.pendingLanes |= i, i !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, i = 31 - ka(i), r[i] = f;
    }
    function ep(r, i) {
      var f = r.pendingLanes & ~i;
      r.pendingLanes = i, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= i, r.mutableReadLanes &= i, r.entangledLanes &= i, i = r.entanglements;
      var p = r.eventTimes;
      for (r = r.expirationTimes; 0 < f; ) {
        var S = 31 - ka(f), x = 1 << S;
        i[S] = 0, p[S] = -1, r[S] = -1, f &= ~x;
      }
    }
    function _c(r, i) {
      var f = r.entangledLanes |= i;
      for (r = r.entanglements; f; ) {
        var p = 31 - ka(f), S = 1 << p;
        S & i | r[p] & i && (r[p] |= i), f &= ~S;
      }
    }
    var kt = 0;
    function ns(r) {
      return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var xc = u.unstable_scheduleCallback, gd = u.unstable_cancelCallback, tp = u.unstable_shouldYield, np = u.unstable_requestPaint, Kn = u.unstable_now, Cc = u.unstable_ImmediatePriority, rp = u.unstable_UserBlockingPriority, Ec = u.unstable_NormalPriority, ap = u.unstable_IdlePriority, Io = null, ei = null;
    function ip(r) {
      if (ei && typeof ei.onCommitFiberRoot == "function")
        try {
          ei.onCommitFiberRoot(Io, r, void 0, (r.current.flags & 128) === 128);
        } catch {
        }
    }
    function yd(r, i) {
      return r === i && (r !== 0 || 1 / r === 1 / i) || r !== r && i !== i;
    }
    var za = typeof Object.is == "function" ? Object.is : yd, mi = null, Vo = !1, bc = !1;
    function Sd(r) {
      mi === null ? mi = [r] : mi.push(r);
    }
    function lp(r) {
      Vo = !0, Sd(r);
    }
    function Ua() {
      if (!bc && mi !== null) {
        bc = !0;
        var r = 0, i = kt;
        try {
          var f = mi;
          for (kt = 1; r < f.length; r++) {
            var p = f[r];
            do
              p = p(!0);
            while (p !== null);
          }
          mi = null, Vo = !1;
        } catch (S) {
          throw mi !== null && (mi = mi.slice(r + 1)), xc(Cc, Ua), S;
        } finally {
          kt = i, bc = !1;
        }
      }
      return null;
    }
    var Tl = [], rs = 0, as = null, Ks = 0, na = [], Sa = 0, Rl = null, gi = 1, ti = "";
    function yi(r, i) {
      Tl[rs++] = Ks, Tl[rs++] = as, as = r, Ks = i;
    }
    function _d(r, i, f) {
      na[Sa++] = gi, na[Sa++] = ti, na[Sa++] = Rl, Rl = r;
      var p = gi;
      r = ti;
      var S = 32 - ka(p) - 1;
      p &= ~(1 << S), f += 1;
      var x = 32 - ka(i) + S;
      if (30 < x) {
        var N = S - S % 5;
        x = (p & (1 << N) - 1).toString(32), p >>= N, S -= N, gi = 1 << 32 - ka(i) + S | f << S | p, ti = x + r;
      } else
        gi = 1 << x | f << S | p, ti = r;
    }
    function Tc(r) {
      r.return !== null && (yi(r, 1), _d(r, 1, 0));
    }
    function is(r) {
      for (; r === as; )
        as = Tl[--rs], Tl[rs] = null, Ks = Tl[--rs], Tl[rs] = null;
      for (; r === Rl; )
        Rl = na[--Sa], na[Sa] = null, ti = na[--Sa], na[Sa] = null, gi = na[--Sa], na[Sa] = null;
    }
    var ra = null, _a = null, xn = !1, Js = !1, Fa = null;
    function xd(r, i) {
      var f = ba(5, null, null, 0);
      f.elementType = "DELETED", f.stateNode = i, f.return = r, i = r.deletions, i === null ? (r.deletions = [f], r.flags |= 16) : i.push(f);
    }
    function Cd(r, i) {
      switch (r.tag) {
        case 5:
          return i = Aa(i, r.type, r.pendingProps), i !== null ? (r.stateNode = i, ra = r, _a = he(i), !0) : !1;
        case 6:
          return i = pi(i, r.pendingProps), i !== null ? (r.stateNode = i, ra = r, _a = null, !0) : !1;
        case 13:
          if (i = Sl(i), i !== null) {
            var f = Rl !== null ? { id: gi, overflow: ti } : null;
            return r.memoizedState = { dehydrated: i, treeContext: f, retryLane: 1073741824 }, f = ba(18, null, null, 0), f.stateNode = i, f.return = r, r.child = f, ra = r, _a = null, !0;
          }
          return !1;
        default:
          return !1;
      }
    }
    function Rc(r) {
      return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
    }
    function wc(r) {
      if (xn) {
        var i = _a;
        if (i) {
          var f = i;
          if (!Cd(r, i)) {
            if (Rc(r))
              throw Error(v(418));
            i = A(f);
            var p = ra;
            i && Cd(r, i) ? xd(p, f) : (r.flags = r.flags & -4097 | 2, xn = !1, ra = r);
          }
        } else {
          if (Rc(r))
            throw Error(v(418));
          r.flags = r.flags & -4097 | 2, xn = !1, ra = r;
        }
      }
    }
    function Ed(r) {
      for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
        r = r.return;
      ra = r;
    }
    function Yo(r) {
      if (!Gt || r !== ra)
        return !1;
      if (!xn)
        return Ed(r), xn = !0, !1;
      if (r.tag !== 3 && (r.tag !== 5 || ji(r.type) && !nt(r.type, r.memoizedProps))) {
        var i = _a;
        if (i) {
          if (Rc(r))
            throw bd(), Error(v(418));
          for (; i; )
            xd(r, i), i = A(i);
        }
      }
      if (Ed(r), r.tag === 13) {
        if (!Gt)
          throw Error(v(316));
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r)
          throw Error(v(317));
        _a = gt(r);
      } else
        _a = ra ? A(r.stateNode) : null;
      return !0;
    }
    function bd() {
      for (var r = _a; r; )
        r = A(r);
    }
    function ls() {
      Gt && (_a = ra = null, Js = xn = !1);
    }
    function Dc(r) {
      Fa === null ? Fa = [r] : Fa.push(r);
    }
    var sp = g.ReactCurrentBatchConfig;
    function qo(r, i) {
      if (za(r, i))
        return !0;
      if (typeof r != "object" || r === null || typeof i != "object" || i === null)
        return !1;
      var f = Object.keys(r), p = Object.keys(i);
      if (f.length !== p.length)
        return !1;
      for (p = 0; p < f.length; p++) {
        var S = f[p];
        if (!pd.call(i, S) || !za(r[S], i[S]))
          return !1;
      }
      return !0;
    }
    function op(r) {
      switch (r.tag) {
        case 5:
          return es(r.type);
        case 16:
          return es("Lazy");
        case 13:
          return es("Suspense");
        case 19:
          return es("SuspenseList");
        case 0:
        case 2:
        case 15:
          return r = Ws(r.type, !1), r;
        case 11:
          return r = Ws(r.type.render, !1), r;
        case 1:
          return r = Ws(r.type, !0), r;
        default:
          return "";
      }
    }
    function Ha(r, i) {
      if (r && r.defaultProps) {
        i = d({}, i), r = r.defaultProps;
        for (var f in r)
          i[f] === void 0 && (i[f] = r[f]);
        return i;
      }
      return i;
    }
    var Wo = Bi(null), Xo = null, ss = null, Nc = null;
    function Mc() {
      Nc = ss = Xo = null;
    }
    function Td(r, i, f) {
      cn ? (Qt(Wo, i._currentValue), i._currentValue = f) : (Qt(Wo, i._currentValue2), i._currentValue2 = f);
    }
    function Oc(r) {
      var i = Wo.current;
      Tt(Wo), cn ? r._currentValue = i : r._currentValue2 = i;
    }
    function Lc(r, i, f) {
      for (; r !== null; ) {
        var p = r.alternate;
        if ((r.childLanes & i) !== i ? (r.childLanes |= i, p !== null && (p.childLanes |= i)) : p !== null && (p.childLanes & i) !== i && (p.childLanes |= i), r === f)
          break;
        r = r.return;
      }
    }
    function os(r, i) {
      Xo = r, Nc = ss = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & i && (sr = !0), r.firstContext = null);
    }
    function Dr(r) {
      var i = cn ? r._currentValue : r._currentValue2;
      if (Nc !== r)
        if (r = { context: r, memoizedValue: i, next: null }, ss === null) {
          if (Xo === null)
            throw Error(v(308));
          ss = r, Xo.dependencies = { lanes: 0, firstContext: r };
        } else
          ss = ss.next = r;
      return i;
    }
    var Vi = null;
    function Qo(r) {
      Vi === null ? Vi = [r] : Vi.push(r);
    }
    function Ac(r, i, f, p) {
      var S = i.interleaved;
      return S === null ? (f.next = f, Qo(i)) : (f.next = S.next, S.next = f), i.interleaved = f, Ga(r, p);
    }
    function Ga(r, i) {
      r.lanes |= i;
      var f = r.alternate;
      for (f !== null && (f.lanes |= i), f = r, r = r.return; r !== null; )
        r.childLanes |= i, f = r.alternate, f !== null && (f.childLanes |= i), f = r, r = r.return;
      return f.tag === 3 ? f.stateNode : null;
    }
    var Si = !1;
    function Ko(r) {
      r.updateQueue = { baseState: r.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function Pc(r, i) {
      r = r.updateQueue, i.updateQueue === r && (i.updateQueue = { baseState: r.baseState, firstBaseUpdate: r.firstBaseUpdate, lastBaseUpdate: r.lastBaseUpdate, shared: r.shared, effects: r.effects });
    }
    function ni(r, i) {
      return { eventTime: r, lane: i, tag: 0, payload: null, callback: null, next: null };
    }
    function Yi(r, i, f) {
      var p = r.updateQueue;
      if (p === null)
        return null;
      if (p = p.shared, Et & 2) {
        var S = p.pending;
        return S === null ? i.next = i : (i.next = S.next, S.next = i), p.pending = i, Ga(r, f);
      }
      return S = p.interleaved, S === null ? (i.next = i, Qo(p)) : (i.next = S.next, S.next = i), p.interleaved = i, Ga(r, f);
    }
    function Jo(r, i, f) {
      if (i = i.updateQueue, i !== null && (i = i.shared, (f & 4194240) !== 0)) {
        var p = i.lanes;
        p &= r.pendingLanes, f |= p, i.lanes = f, _c(r, f);
      }
    }
    function Zo(r, i) {
      var f = r.updateQueue, p = r.alternate;
      if (p !== null && (p = p.updateQueue, f === p)) {
        var S = null, x = null;
        if (f = f.firstBaseUpdate, f !== null) {
          do {
            var N = { eventTime: f.eventTime, lane: f.lane, tag: f.tag, payload: f.payload, callback: f.callback, next: null };
            x === null ? S = x = N : x = x.next = N, f = f.next;
          } while (f !== null);
          x === null ? S = x = i : x = x.next = i;
        } else
          S = x = i;
        f = { baseState: p.baseState, firstBaseUpdate: S, lastBaseUpdate: x, shared: p.shared, effects: p.effects }, r.updateQueue = f;
        return;
      }
      r = f.lastBaseUpdate, r === null ? f.firstBaseUpdate = i : r.next = i, f.lastBaseUpdate = i;
    }
    function us(r, i, f, p) {
      var S = r.updateQueue;
      Si = !1;
      var x = S.firstBaseUpdate, N = S.lastBaseUpdate, F = S.shared.pending;
      if (F !== null) {
        S.shared.pending = null;
        var te = F, me = te.next;
        te.next = null, N === null ? x = me : N.next = me, N = te;
        var He = r.alternate;
        He !== null && (He = He.updateQueue, F = He.lastBaseUpdate, F !== N && (F === null ? He.firstBaseUpdate = me : F.next = me, He.lastBaseUpdate = te));
      }
      if (x !== null) {
        var Qe = S.baseState;
        N = 0, He = me = te = null, F = x;
        do {
          var Oe = F.lane, gn = F.eventTime;
          if ((p & Oe) === Oe) {
            He !== null && (He = He.next = {
              eventTime: gn,
              lane: 0,
              tag: F.tag,
              payload: F.payload,
              callback: F.callback,
              next: null
            });
            e: {
              var on = r, Kt = F;
              switch (Oe = i, gn = f, Kt.tag) {
                case 1:
                  if (on = Kt.payload, typeof on == "function") {
                    Qe = on.call(gn, Qe, Oe);
                    break e;
                  }
                  Qe = on;
                  break e;
                case 3:
                  on.flags = on.flags & -65537 | 128;
                case 0:
                  if (on = Kt.payload, Oe = typeof on == "function" ? on.call(gn, Qe, Oe) : on, Oe == null)
                    break e;
                  Qe = d({}, Qe, Oe);
                  break e;
                case 2:
                  Si = !0;
              }
            }
            F.callback !== null && F.lane !== 0 && (r.flags |= 64, Oe = S.effects, Oe === null ? S.effects = [F] : Oe.push(F));
          } else
            gn = { eventTime: gn, lane: Oe, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, He === null ? (me = He = gn, te = Qe) : He = He.next = gn, N |= Oe;
          if (F = F.next, F === null) {
            if (F = S.shared.pending, F === null)
              break;
            Oe = F, F = Oe.next, Oe.next = null, S.lastBaseUpdate = Oe, S.shared.pending = null;
          }
        } while (1);
        if (He === null && (te = Qe), S.baseState = te, S.firstBaseUpdate = me, S.lastBaseUpdate = He, i = S.shared.interleaved, i !== null) {
          S = i;
          do
            N |= S.lane, S = S.next;
          while (S !== i);
        } else
          x === null && (S.shared.lanes = 0);
        kl |= N, r.lanes = N, r.memoizedState = Qe;
      }
    }
    function _i(r, i, f) {
      if (r = i.effects, i.effects = null, r !== null)
        for (i = 0; i < r.length; i++) {
          var p = r[i], S = p.callback;
          if (S !== null) {
            if (p.callback = null, p = f, typeof S != "function")
              throw Error(v(191, S));
            S.call(p);
          }
        }
    }
    var $o = new s.Component().refs;
    function cs(r, i, f, p) {
      i = r.memoizedState, f = f(p, i), f = f == null ? i : d({}, i, f), r.memoizedState = f, r.lanes === 0 && (r.updateQueue.baseState = f);
    }
    var eu = { isMounted: function(r) {
      return (r = r._reactInternals) ? ee(r) === r : !1;
    }, enqueueSetState: function(r, i, f) {
      r = r._reactInternals;
      var p = dr(), S = hr(r), x = ni(p, S);
      x.payload = i, f != null && (x.callback = f), i = Yi(r, x, S), i !== null && (oa(i, r, S, p), Jo(i, r, S));
    }, enqueueReplaceState: function(r, i, f) {
      r = r._reactInternals;
      var p = dr(), S = hr(r), x = ni(p, S);
      x.tag = 1, x.payload = i, f != null && (x.callback = f), i = Yi(r, x, S), i !== null && (oa(i, r, S, p), Jo(i, r, S));
    }, enqueueForceUpdate: function(r, i) {
      r = r._reactInternals;
      var f = dr(), p = hr(r), S = ni(f, p);
      S.tag = 2, i != null && (S.callback = i), i = Yi(r, S, p), i !== null && (oa(i, r, p, f), Jo(i, r, p));
    } };
    function tu(r, i, f, p, S, x, N) {
      return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(p, x, N) : i.prototype && i.prototype.isPureReactComponent ? !qo(f, p) || !qo(S, x) : !0;
    }
    function Rd(r, i, f) {
      var p = !1, S = Ii, x = i.contextType;
      return typeof x == "object" && x !== null ? x = Dr(x) : (S = Tr(i) ? El : br.current, p = i.contextTypes, x = (p = p != null) ? ts(r, S) : Ii), i = new i(f, x), r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = eu, r.stateNode = i, i._reactInternals = r, p && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = S, r.__reactInternalMemoizedMaskedChildContext = x), i;
    }
    function nu(r, i, f, p) {
      r = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(f, p), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(f, p), i.state !== r && eu.enqueueReplaceState(i, i.state, null);
    }
    function kc(r, i, f, p) {
      var S = r.stateNode;
      S.props = f, S.state = r.memoizedState, S.refs = $o, Ko(r);
      var x = i.contextType;
      typeof x == "object" && x !== null ? S.context = Dr(x) : (x = Tr(i) ? El : br.current, S.context = ts(r, x)), S.state = r.memoizedState, x = i.getDerivedStateFromProps, typeof x == "function" && (cs(r, i, x, f), S.state = r.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function" || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (i = S.state, typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount(), i !== S.state && eu.enqueueReplaceState(S, S.state, null), us(r, f, S, p), S.state = r.memoizedState), typeof S.componentDidMount == "function" && (r.flags |= 4194308);
    }
    function wl(r, i, f) {
      if (r = f.ref, r !== null && typeof r != "function" && typeof r != "object") {
        if (f._owner) {
          if (f = f._owner, f) {
            if (f.tag !== 1)
              throw Error(v(309));
            var p = f.stateNode;
          }
          if (!p)
            throw Error(v(147, r));
          var S = p, x = "" + r;
          return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === x ? i.ref : (i = function(N) {
            var F = S.refs;
            F === $o && (F = S.refs = {}), N === null ? delete F[x] : F[x] = N;
          }, i._stringRef = x, i);
        }
        if (typeof r != "string")
          throw Error(v(284));
        if (!f._owner)
          throw Error(v(290, r));
      }
      return r;
    }
    function Zs(r, i) {
      throw r = Object.prototype.toString.call(i), Error(v(31, r === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : r));
    }
    function zc(r) {
      var i = r._init;
      return i(r._payload);
    }
    function Uc(r) {
      function i(J, H) {
        if (r) {
          var ne = J.deletions;
          ne === null ? (J.deletions = [H], J.flags |= 16) : ne.push(H);
        }
      }
      function f(J, H) {
        if (!r)
          return null;
        for (; H !== null; )
          i(J, H), H = H.sibling;
        return null;
      }
      function p(J, H) {
        for (J = /* @__PURE__ */ new Map(); H !== null; )
          H.key !== null ? J.set(H.key, H) : J.set(H.index, H), H = H.sibling;
        return J;
      }
      function S(J, H) {
        return J = si(J, H), J.index = 0, J.sibling = null, J;
      }
      function x(J, H, ne) {
        return J.index = ne, r ? (ne = J.alternate, ne !== null ? (ne = ne.index, ne < H ? (J.flags |= 2, H) : ne) : (J.flags |= 2, H)) : (J.flags |= 1048576, H);
      }
      function N(J) {
        return r && J.alternate === null && (J.flags |= 2), J;
      }
      function F(J, H, ne, Ae) {
        return H === null || H.tag !== 6 ? (H = go(ne, J.mode, Ae), H.return = J, H) : (H = S(H, ne), H.return = J, H);
      }
      function te(J, H, ne, Ae) {
        var qe = ne.type;
        return qe === E ? He(J, H, ne.props.children, Ae, ne.key) : H !== null && (H.elementType === qe || typeof qe == "object" && qe !== null && qe.$$typeof === G && zc(qe) === H.type) ? (Ae = S(H, ne.props), Ae.ref = wl(J, H, ne), Ae.return = J, Ae) : (Ae = mo(ne.type, ne.key, ne.props, null, J.mode, Ae), Ae.ref = wl(J, H, ne), Ae.return = J, Ae);
      }
      function me(J, H, ne, Ae) {
        return H === null || H.tag !== 4 || H.stateNode.containerInfo !== ne.containerInfo || H.stateNode.implementation !== ne.implementation ? (H = yo(ne, J.mode, Ae), H.return = J, H) : (H = S(H, ne.children || []), H.return = J, H);
      }
      function He(J, H, ne, Ae, qe) {
        return H === null || H.tag !== 7 ? (H = nl(ne, J.mode, Ae, qe), H.return = J, H) : (H = S(H, ne), H.return = J, H);
      }
      function Qe(J, H, ne) {
        if (typeof H == "string" && H !== "" || typeof H == "number")
          return H = go("" + H, J.mode, ne), H.return = J, H;
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case _:
              return ne = mo(H.type, H.key, H.props, null, J.mode, ne), ne.ref = wl(J, null, H), ne.return = J, ne;
            case m:
              return H = yo(H, J.mode, ne), H.return = J, H;
            case G:
              var Ae = H._init;
              return Qe(J, Ae(H._payload), ne);
          }
          if (lt(H) || V(H))
            return H = nl(H, J.mode, ne, null), H.return = J, H;
          Zs(J, H);
        }
        return null;
      }
      function Oe(J, H, ne, Ae) {
        var qe = H !== null ? H.key : null;
        if (typeof ne == "string" && ne !== "" || typeof ne == "number")
          return qe !== null ? null : F(J, H, "" + ne, Ae);
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case _:
              return ne.key === qe ? te(J, H, ne, Ae) : null;
            case m:
              return ne.key === qe ? me(J, H, ne, Ae) : null;
            case G:
              return qe = ne._init, Oe(
                J,
                H,
                qe(ne._payload),
                Ae
              );
          }
          if (lt(ne) || V(ne))
            return qe !== null ? null : He(J, H, ne, Ae, null);
          Zs(J, ne);
        }
        return null;
      }
      function gn(J, H, ne, Ae, qe) {
        if (typeof Ae == "string" && Ae !== "" || typeof Ae == "number")
          return J = J.get(ne) || null, F(H, J, "" + Ae, qe);
        if (typeof Ae == "object" && Ae !== null) {
          switch (Ae.$$typeof) {
            case _:
              return J = J.get(Ae.key === null ? ne : Ae.key) || null, te(H, J, Ae, qe);
            case m:
              return J = J.get(Ae.key === null ? ne : Ae.key) || null, me(H, J, Ae, qe);
            case G:
              var mt = Ae._init;
              return gn(J, H, ne, mt(Ae._payload), qe);
          }
          if (lt(Ae) || V(Ae))
            return J = J.get(ne) || null, He(H, J, Ae, qe, null);
          Zs(H, Ae);
        }
        return null;
      }
      function on(J, H, ne, Ae) {
        for (var qe = null, mt = null, ct = H, Nt = H = 0, Tn = null; ct !== null && Nt < ne.length; Nt++) {
          ct.index > Nt ? (Tn = ct, ct = null) : Tn = ct.sibling;
          var Mt = Oe(J, ct, ne[Nt], Ae);
          if (Mt === null) {
            ct === null && (ct = Tn);
            break;
          }
          r && ct && Mt.alternate === null && i(J, ct), H = x(Mt, H, Nt), mt === null ? qe = Mt : mt.sibling = Mt, mt = Mt, ct = Tn;
        }
        if (Nt === ne.length)
          return f(J, ct), xn && yi(J, Nt), qe;
        if (ct === null) {
          for (; Nt < ne.length; Nt++)
            ct = Qe(J, ne[Nt], Ae), ct !== null && (H = x(ct, H, Nt), mt === null ? qe = ct : mt.sibling = ct, mt = ct);
          return xn && yi(J, Nt), qe;
        }
        for (ct = p(J, ct); Nt < ne.length; Nt++)
          Tn = gn(ct, J, Nt, ne[Nt], Ae), Tn !== null && (r && Tn.alternate !== null && ct.delete(Tn.key === null ? Nt : Tn.key), H = x(Tn, H, Nt), mt === null ? qe = Tn : mt.sibling = Tn, mt = Tn);
        return r && ct.forEach(function(Ta) {
          return i(J, Ta);
        }), xn && yi(J, Nt), qe;
      }
      function Kt(J, H, ne, Ae) {
        var qe = V(ne);
        if (typeof qe != "function")
          throw Error(v(150));
        if (ne = qe.call(ne), ne == null)
          throw Error(v(151));
        for (var mt = qe = null, ct = H, Nt = H = 0, Tn = null, Mt = ne.next(); ct !== null && !Mt.done; Nt++, Mt = ne.next()) {
          ct.index > Nt ? (Tn = ct, ct = null) : Tn = ct.sibling;
          var Ta = Oe(J, ct, Mt.value, Ae);
          if (Ta === null) {
            ct === null && (ct = Tn);
            break;
          }
          r && ct && Ta.alternate === null && i(J, ct), H = x(Ta, H, Nt), mt === null ? qe = Ta : mt.sibling = Ta, mt = Ta, ct = Tn;
        }
        if (Mt.done)
          return f(
            J,
            ct
          ), xn && yi(J, Nt), qe;
        if (ct === null) {
          for (; !Mt.done; Nt++, Mt = ne.next())
            Mt = Qe(J, Mt.value, Ae), Mt !== null && (H = x(Mt, H, Nt), mt === null ? qe = Mt : mt.sibling = Mt, mt = Mt);
          return xn && yi(J, Nt), qe;
        }
        for (ct = p(J, ct); !Mt.done; Nt++, Mt = ne.next())
          Mt = gn(ct, J, Nt, Mt.value, Ae), Mt !== null && (r && Mt.alternate !== null && ct.delete(Mt.key === null ? Nt : Mt.key), H = x(Mt, H, Nt), mt === null ? qe = Mt : mt.sibling = Mt, mt = Mt);
        return r && ct.forEach(function(Bl) {
          return i(J, Bl);
        }), xn && yi(J, Nt), qe;
      }
      function It(J, H, ne, Ae) {
        if (typeof ne == "object" && ne !== null && ne.type === E && ne.key === null && (ne = ne.props.children), typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case _:
              e: {
                for (var qe = ne.key, mt = H; mt !== null; ) {
                  if (mt.key === qe) {
                    if (qe = ne.type, qe === E) {
                      if (mt.tag === 7) {
                        f(J, mt.sibling), H = S(mt, ne.props.children), H.return = J, J = H;
                        break e;
                      }
                    } else if (mt.elementType === qe || typeof qe == "object" && qe !== null && qe.$$typeof === G && zc(qe) === mt.type) {
                      f(J, mt.sibling), H = S(mt, ne.props), H.ref = wl(J, mt, ne), H.return = J, J = H;
                      break e;
                    }
                    f(J, mt);
                    break;
                  } else
                    i(J, mt);
                  mt = mt.sibling;
                }
                ne.type === E ? (H = nl(ne.props.children, J.mode, Ae, ne.key), H.return = J, J = H) : (Ae = mo(ne.type, ne.key, ne.props, null, J.mode, Ae), Ae.ref = wl(J, H, ne), Ae.return = J, J = Ae);
              }
              return N(J);
            case m:
              e: {
                for (mt = ne.key; H !== null; ) {
                  if (H.key === mt)
                    if (H.tag === 4 && H.stateNode.containerInfo === ne.containerInfo && H.stateNode.implementation === ne.implementation) {
                      f(J, H.sibling), H = S(H, ne.children || []), H.return = J, J = H;
                      break e;
                    } else {
                      f(J, H);
                      break;
                    }
                  else
                    i(J, H);
                  H = H.sibling;
                }
                H = yo(ne, J.mode, Ae), H.return = J, J = H;
              }
              return N(J);
            case G:
              return mt = ne._init, It(J, H, mt(ne._payload), Ae);
          }
          if (lt(ne))
            return on(J, H, ne, Ae);
          if (V(ne))
            return Kt(J, H, ne, Ae);
          Zs(J, ne);
        }
        return typeof ne == "string" && ne !== "" || typeof ne == "number" ? (ne = "" + ne, H !== null && H.tag === 6 ? (f(J, H.sibling), H = S(H, ne), H.return = J, J = H) : (f(J, H), H = go(ne, J.mode, Ae), H.return = J, J = H), N(J)) : f(J, H);
      }
      return It;
    }
    var xi = Uc(!0), xa = Uc(!1), Dl = {}, Or = Bi(Dl), aa = Bi(Dl), ia = Bi(Dl);
    function mn(r) {
      if (r === Dl)
        throw Error(v(174));
      return r;
    }
    function jn(r, i) {
      Qt(ia, i), Qt(aa, r), Qt(Or, Dl), r = Le(i), Tt(Or), Qt(Or, r);
    }
    function qi() {
      Tt(Or), Tt(aa), Tt(ia);
    }
    function Br(r) {
      var i = mn(ia.current), f = mn(Or.current);
      i = oe(f, r.type, i), f !== i && (Qt(aa, r), Qt(Or, i));
    }
    function ja(r) {
      aa.current === r && (Tt(Or), Tt(aa));
    }
    var zt = Bi(0);
    function fs(r) {
      for (var i = r; i !== null; ) {
        if (i.tag === 13) {
          var f = i.memoizedState;
          if (f !== null && (f = f.dehydrated, f === null || Fo(f) || qs(f)))
            return i;
        } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
          if (i.flags & 128)
            return i;
        } else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === r)
          break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === r)
            return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return null;
    }
    var Wi = [];
    function ru() {
      for (var r = 0; r < Wi.length; r++) {
        var i = Wi[r];
        cn ? i._workInProgressVersionPrimary = null : i._workInProgressVersionSecondary = null;
      }
      Wi.length = 0;
    }
    var Ci = g.ReactCurrentDispatcher, ds = g.ReactCurrentBatchConfig, Nr = 0, dn = null, wn = null, Bn = null, $s = !1, Xi = !1, hs = 0, up = 0;
    function Dn() {
      throw Error(v(321));
    }
    function au(r, i) {
      if (i === null)
        return !1;
      for (var f = 0; f < i.length && f < r.length; f++)
        if (!za(r[f], i[f]))
          return !1;
      return !0;
    }
    function et(r, i, f, p, S, x) {
      if (Nr = x, dn = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, Ci.current = r === null || r.memoizedState === null ? Bc : Ic, r = f(p, S), Xi) {
        x = 0;
        do {
          if (Xi = !1, hs = 0, 25 <= x)
            throw Error(v(301));
          x += 1, Bn = wn = null, i.updateQueue = null, Ci.current = Vc, r = f(p, S);
        } while (Xi);
      }
      if (Ci.current = bi, i = wn !== null && wn.next !== null, Nr = 0, Bn = wn = dn = null, $s = !1, i)
        throw Error(v(300));
      return r;
    }
    function Rt() {
      var r = hs !== 0;
      return hs = 0, r;
    }
    function _t() {
      var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Bn === null ? dn.memoizedState = Bn = r : Bn = Bn.next = r, Bn;
    }
    function Ht() {
      if (wn === null) {
        var r = dn.alternate;
        r = r !== null ? r.memoizedState : null;
      } else
        r = wn.next;
      var i = Bn === null ? dn.memoizedState : Bn.next;
      if (i !== null)
        Bn = i, wn = r;
      else {
        if (r === null)
          throw Error(v(310));
        wn = r, r = { memoizedState: wn.memoizedState, baseState: wn.baseState, baseQueue: wn.baseQueue, queue: wn.queue, next: null }, Bn === null ? dn.memoizedState = Bn = r : Bn = Bn.next = r;
      }
      return Bn;
    }
    function Ir(r, i) {
      return typeof i == "function" ? i(r) : i;
    }
    function iu(r) {
      var i = Ht(), f = i.queue;
      if (f === null)
        throw Error(v(311));
      f.lastRenderedReducer = r;
      var p = wn, S = p.baseQueue, x = f.pending;
      if (x !== null) {
        if (S !== null) {
          var N = S.next;
          S.next = x.next, x.next = N;
        }
        p.baseQueue = S = x, f.pending = null;
      }
      if (S !== null) {
        x = S.next, p = p.baseState;
        var F = N = null, te = null, me = x;
        do {
          var He = me.lane;
          if ((Nr & He) === He)
            te !== null && (te = te.next = { lane: 0, action: me.action, hasEagerState: me.hasEagerState, eagerState: me.eagerState, next: null }), p = me.hasEagerState ? me.eagerState : r(p, me.action);
          else {
            var Qe = {
              lane: He,
              action: me.action,
              hasEagerState: me.hasEagerState,
              eagerState: me.eagerState,
              next: null
            };
            te === null ? (F = te = Qe, N = p) : te = te.next = Qe, dn.lanes |= He, kl |= He;
          }
          me = me.next;
        } while (me !== null && me !== x);
        te === null ? N = p : te.next = F, za(p, i.memoizedState) || (sr = !0), i.memoizedState = p, i.baseState = N, i.baseQueue = te, f.lastRenderedState = p;
      }
      if (r = f.interleaved, r !== null) {
        S = r;
        do
          x = S.lane, dn.lanes |= x, kl |= x, S = S.next;
        while (S !== r);
      } else
        S === null && (f.lanes = 0);
      return [i.memoizedState, f.dispatch];
    }
    function Fc(r) {
      var i = Ht(), f = i.queue;
      if (f === null)
        throw Error(v(311));
      f.lastRenderedReducer = r;
      var p = f.dispatch, S = f.pending, x = i.memoizedState;
      if (S !== null) {
        f.pending = null;
        var N = S = S.next;
        do
          x = r(x, N.action), N = N.next;
        while (N !== S);
        za(x, i.memoizedState) || (sr = !0), i.memoizedState = x, i.baseQueue === null && (i.baseState = x), f.lastRenderedState = x;
      }
      return [x, p];
    }
    function wd() {
    }
    function Dd(r, i) {
      var f = dn, p = Ht(), S = i(), x = !za(p.memoizedState, S);
      if (x && (p.memoizedState = S, sr = !0), p = p.queue, eo(In.bind(null, f, p, r), [r]), p.getSnapshot !== i || x || Bn !== null && Bn.memoizedState.tag & 1) {
        if (f.flags |= 2048, Ba(9, ue.bind(null, f, p, S, i), void 0, null), Zn === null)
          throw Error(v(349));
        Nr & 30 || lu(f, i, S);
      }
      return S;
    }
    function lu(r, i, f) {
      r.flags |= 16384, r = { getSnapshot: i, value: f }, i = dn.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, dn.updateQueue = i, i.stores = [r]) : (f = i.stores, f === null ? i.stores = [r] : f.push(r));
    }
    function ue(r, i, f, p) {
      i.value = f, i.getSnapshot = p, it(i) && Nl(r);
    }
    function In(r, i, f) {
      return f(function() {
        it(i) && Nl(r);
      });
    }
    function it(r) {
      var i = r.getSnapshot;
      r = r.value;
      try {
        var f = i();
        return !za(r, f);
      } catch {
        return !0;
      }
    }
    function Nl(r) {
      var i = Ga(r, 1);
      i !== null && oa(i, r, 1, -1);
    }
    function ri(r) {
      var i = _t();
      return typeof r == "function" && (r = r()), i.memoizedState = i.baseState = r, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ir, lastRenderedState: r }, i.queue = r, r = r.dispatch = jc.bind(null, dn, r), [i.memoizedState, r];
    }
    function Ba(r, i, f, p) {
      return r = { tag: r, create: i, destroy: f, deps: p, next: null }, i = dn.updateQueue, i === null ? (i = { lastEffect: null, stores: null }, dn.updateQueue = i, i.lastEffect = r.next = r) : (f = i.lastEffect, f === null ? i.lastEffect = r.next = r : (p = f.next, f.next = r, r.next = p, i.lastEffect = r)), r;
    }
    function Ia() {
      return Ht().memoizedState;
    }
    function Qi(r, i, f, p) {
      var S = _t();
      dn.flags |= r, S.memoizedState = Ba(1 | i, f, void 0, p === void 0 ? null : p);
    }
    function Ei(r, i, f, p) {
      var S = Ht();
      p = p === void 0 ? null : p;
      var x = void 0;
      if (wn !== null) {
        var N = wn.memoizedState;
        if (x = N.destroy, p !== null && au(p, N.deps)) {
          S.memoizedState = Ba(i, f, x, p);
          return;
        }
      }
      dn.flags |= r, S.memoizedState = Ba(1 | i, f, x, p);
    }
    function vs(r, i) {
      return Qi(8390656, 8, r, i);
    }
    function eo(r, i) {
      return Ei(2048, 8, r, i);
    }
    function su(r, i) {
      return Ei(4, 2, r, i);
    }
    function ou(r, i) {
      return Ei(4, 4, r, i);
    }
    function uu(r, i) {
      if (typeof i == "function")
        return r = r(), i(r), function() {
          i(null);
        };
      if (i != null)
        return r = r(), i.current = r, function() {
          i.current = null;
        };
    }
    function cu(r, i, f) {
      return f = f != null ? f.concat([r]) : null, Ei(4, 4, uu.bind(null, i, r), f);
    }
    function to() {
    }
    function fu(r, i) {
      var f = Ht();
      i = i === void 0 ? null : i;
      var p = f.memoizedState;
      return p !== null && i !== null && au(i, p[1]) ? p[0] : (f.memoizedState = [r, i], r);
    }
    function du(r, i) {
      var f = Ht();
      i = i === void 0 ? null : i;
      var p = f.memoizedState;
      return p !== null && i !== null && au(i, p[1]) ? p[0] : (r = r(), f.memoizedState = [r, i], r);
    }
    function hu(r, i, f) {
      return Nr & 21 ? (za(f, i) || (f = md(), dn.lanes |= f, kl |= f, r.baseState = !0), i) : (r.baseState && (r.baseState = !1, sr = !0), r.memoizedState = f);
    }
    function Hc(r, i) {
      var f = kt;
      kt = f !== 0 && 4 > f ? f : 4, r(!0);
      var p = ds.transition;
      ds.transition = {};
      try {
        r(!1), i();
      } finally {
        kt = f, ds.transition = p;
      }
    }
    function vu() {
      return Ht().memoizedState;
    }
    function Gc(r, i, f) {
      var p = hr(r);
      if (f = { lane: p, action: f, hasEagerState: !1, eagerState: null, next: null }, pu(r))
        mu(i, f);
      else if (f = Ac(r, i, f, p), f !== null) {
        var S = dr();
        oa(f, r, p, S), no(f, i, p);
      }
    }
    function jc(r, i, f) {
      var p = hr(r), S = { lane: p, action: f, hasEagerState: !1, eagerState: null, next: null };
      if (pu(r))
        mu(i, S);
      else {
        var x = r.alternate;
        if (r.lanes === 0 && (x === null || x.lanes === 0) && (x = i.lastRenderedReducer, x !== null))
          try {
            var N = i.lastRenderedState, F = x(N, f);
            if (S.hasEagerState = !0, S.eagerState = F, za(F, N)) {
              var te = i.interleaved;
              te === null ? (S.next = S, Qo(i)) : (S.next = te.next, te.next = S), i.interleaved = S;
              return;
            }
          } catch {
          } finally {
          }
        f = Ac(r, i, S, p), f !== null && (S = dr(), oa(f, r, p, S), no(f, i, p));
      }
    }
    function pu(r) {
      var i = r.alternate;
      return r === dn || i !== null && i === dn;
    }
    function mu(r, i) {
      Xi = $s = !0;
      var f = r.pending;
      f === null ? i.next = i : (i.next = f.next, f.next = i), r.pending = i;
    }
    function no(r, i, f) {
      if (f & 4194240) {
        var p = i.lanes;
        p &= r.pendingLanes, f |= p, i.lanes = f, _c(r, f);
      }
    }
    var bi = { readContext: Dr, useCallback: Dn, useContext: Dn, useEffect: Dn, useImperativeHandle: Dn, useInsertionEffect: Dn, useLayoutEffect: Dn, useMemo: Dn, useReducer: Dn, useRef: Dn, useState: Dn, useDebugValue: Dn, useDeferredValue: Dn, useTransition: Dn, useMutableSource: Dn, useSyncExternalStore: Dn, useId: Dn, unstable_isNewReconciler: !1 }, Bc = { readContext: Dr, useCallback: function(r, i) {
      return _t().memoizedState = [r, i === void 0 ? null : i], r;
    }, useContext: Dr, useEffect: vs, useImperativeHandle: function(r, i, f) {
      return f = f != null ? f.concat([r]) : null, Qi(
        4194308,
        4,
        uu.bind(null, i, r),
        f
      );
    }, useLayoutEffect: function(r, i) {
      return Qi(4194308, 4, r, i);
    }, useInsertionEffect: function(r, i) {
      return Qi(4, 2, r, i);
    }, useMemo: function(r, i) {
      var f = _t();
      return i = i === void 0 ? null : i, r = r(), f.memoizedState = [r, i], r;
    }, useReducer: function(r, i, f) {
      var p = _t();
      return i = f !== void 0 ? f(i) : i, p.memoizedState = p.baseState = i, r = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r, lastRenderedState: i }, p.queue = r, r = r.dispatch = Gc.bind(null, dn, r), [p.memoizedState, r];
    }, useRef: function(r) {
      var i = _t();
      return r = { current: r }, i.memoizedState = r;
    }, useState: ri, useDebugValue: to, useDeferredValue: function(r) {
      return _t().memoizedState = r;
    }, useTransition: function() {
      var r = ri(!1), i = r[0];
      return r = Hc.bind(null, r[1]), _t().memoizedState = r, [i, r];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(r, i, f) {
      var p = dn, S = _t();
      if (xn) {
        if (f === void 0)
          throw Error(v(407));
        f = f();
      } else {
        if (f = i(), Zn === null)
          throw Error(v(349));
        Nr & 30 || lu(p, i, f);
      }
      S.memoizedState = f;
      var x = { value: f, getSnapshot: i };
      return S.queue = x, vs(In.bind(
        null,
        p,
        x,
        r
      ), [r]), p.flags |= 2048, Ba(9, ue.bind(null, p, x, f, i), void 0, null), f;
    }, useId: function() {
      var r = _t(), i = Zn.identifierPrefix;
      if (xn) {
        var f = ti, p = gi;
        f = (p & ~(1 << 32 - ka(p) - 1)).toString(32) + f, i = ":" + i + "R" + f, f = hs++, 0 < f && (i += "H" + f.toString(32)), i += ":";
      } else
        f = up++, i = ":" + i + "r" + f.toString(32) + ":";
      return r.memoizedState = i;
    }, unstable_isNewReconciler: !1 }, Ic = {
      readContext: Dr,
      useCallback: fu,
      useContext: Dr,
      useEffect: eo,
      useImperativeHandle: cu,
      useInsertionEffect: su,
      useLayoutEffect: ou,
      useMemo: du,
      useReducer: iu,
      useRef: Ia,
      useState: function() {
        return iu(Ir);
      },
      useDebugValue: to,
      useDeferredValue: function(r) {
        var i = Ht();
        return hu(i, wn.memoizedState, r);
      },
      useTransition: function() {
        var r = iu(Ir)[0], i = Ht().memoizedState;
        return [r, i];
      },
      useMutableSource: wd,
      useSyncExternalStore: Dd,
      useId: vu,
      unstable_isNewReconciler: !1
    }, Vc = { readContext: Dr, useCallback: fu, useContext: Dr, useEffect: eo, useImperativeHandle: cu, useInsertionEffect: su, useLayoutEffect: ou, useMemo: du, useReducer: Fc, useRef: Ia, useState: function() {
      return Fc(Ir);
    }, useDebugValue: to, useDeferredValue: function(r) {
      var i = Ht();
      return wn === null ? i.memoizedState = r : hu(i, wn.memoizedState, r);
    }, useTransition: function() {
      var r = Fc(Ir)[0], i = Ht().memoizedState;
      return [r, i];
    }, useMutableSource: wd, useSyncExternalStore: Dd, useId: vu, unstable_isNewReconciler: !1 };
    function Ki(r, i) {
      try {
        var f = "", p = i;
        do
          f += op(p), p = p.return;
        while (p);
        var S = f;
      } catch (x) {
        S = `
Error generating stack: ` + x.message + `
` + x.stack;
      }
      return { value: r, source: i, stack: S, digest: null };
    }
    function gu(r, i, f) {
      return { value: r, source: null, stack: f ?? null, digest: i ?? null };
    }
    function Ml(r, i) {
      try {
        console.error(i.value);
      } catch (f) {
        setTimeout(function() {
          throw f;
        });
      }
    }
    var Nd = typeof WeakMap == "function" ? WeakMap : Map;
    function ps(r, i, f) {
      f = ni(-1, f), f.tag = 3, f.payload = { element: null };
      var p = i.value;
      return f.callback = function() {
        Nu || (Nu = !0, nf = p), Ml(r, i);
      }, f;
    }
    function Ji(r, i, f) {
      f = ni(-1, f), f.tag = 3;
      var p = r.type.getDerivedStateFromError;
      if (typeof p == "function") {
        var S = i.value;
        f.payload = function() {
          return p(S);
        }, f.callback = function() {
          Ml(r, i);
        };
      }
      var x = r.stateNode;
      return x !== null && typeof x.componentDidCatch == "function" && (f.callback = function() {
        Ml(r, i), typeof p != "function" && (ii === null ? ii = /* @__PURE__ */ new Set([this]) : ii.add(this));
        var N = i.stack;
        this.componentDidCatch(i.value, { componentStack: N !== null ? N : "" });
      }), f;
    }
    function Vr(r, i, f) {
      var p = r.pingCache;
      if (p === null) {
        p = r.pingCache = new Nd();
        var S = /* @__PURE__ */ new Set();
        p.set(i, S);
      } else
        S = p.get(i), S === void 0 && (S = /* @__PURE__ */ new Set(), p.set(i, S));
      S.has(f) || (S.add(f), r = qa.bind(null, r, i, f), i.then(r, r));
    }
    function Md(r) {
      do {
        var i;
        if ((i = r.tag === 13) && (i = r.memoizedState, i = i !== null ? i.dehydrated !== null : !0), i)
          return r;
        r = r.return;
      } while (r !== null);
      return null;
    }
    function sn(r, i, f, p, S) {
      return r.mode & 1 ? (r.flags |= 65536, r.lanes = S, r) : (r === i ? r.flags |= 65536 : (r.flags |= 128, f.flags |= 131072, f.flags &= -52805, f.tag === 1 && (f.alternate === null ? f.tag = 17 : (i = ni(-1, 1), i.tag = 2, Yi(f, i, 1))), f.lanes |= 1), r);
    }
    var yu = g.ReactCurrentOwner, sr = !1;
    function Vn(r, i, f, p) {
      i.child = r === null ? xa(i, null, f, p) : xi(i, r.child, f, p);
    }
    function ro(r, i, f, p, S) {
      f = f.render;
      var x = i.ref;
      return os(i, S), p = et(r, i, f, p, x, S), f = Rt(), r !== null && !sr ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~S, Nn(r, i, S)) : (xn && f && Tc(i), i.flags |= 1, Vn(r, i, p, S), i.child);
    }
    function Od(r, i, f, p, S) {
      if (r === null) {
        var x = f.type;
        return typeof x == "function" && !Pu(x) && x.defaultProps === void 0 && f.compare === null && f.defaultProps === void 0 ? (i.tag = 15, i.type = x, Ld(r, i, x, p, S)) : (r = mo(f.type, null, p, i, i.mode, S), r.ref = i.ref, r.return = i, i.child = r);
      }
      if (x = r.child, !(r.lanes & S)) {
        var N = x.memoizedProps;
        if (f = f.compare, f = f !== null ? f : qo, f(N, p) && r.ref === i.ref)
          return Nn(r, i, S);
      }
      return i.flags |= 1, r = si(x, p), r.ref = i.ref, r.return = i, i.child = r;
    }
    function Ld(r, i, f, p, S) {
      if (r !== null) {
        var x = r.memoizedProps;
        if (qo(x, p) && r.ref === i.ref)
          if (sr = !1, i.pendingProps = p = x, (r.lanes & S) !== 0)
            r.flags & 131072 && (sr = !0);
          else
            return i.lanes = r.lanes, Nn(r, i, S);
      }
      return ao(r, i, f, p, S);
    }
    function Ad(r, i, f) {
      var p = i.pendingProps, S = p.children, x = r !== null ? r.memoizedState : null;
      if (p.mode === "hidden")
        if (!(i.mode & 1))
          i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qt(Es, sa), sa |= f;
        else {
          if (!(f & 1073741824))
            return r = x !== null ? x.baseLanes | f : f, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: r, cachePool: null, transitions: null }, i.updateQueue = null, Qt(Es, sa), sa |= r, null;
          i.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, p = x !== null ? x.baseLanes : f, Qt(Es, sa), sa |= p;
        }
      else
        x !== null ? (p = x.baseLanes | f, i.memoizedState = null) : p = f, Qt(Es, sa), sa |= p;
      return Vn(r, i, S, f), i.child;
    }
    function Pd(r, i) {
      var f = i.ref;
      (r === null && f !== null || r !== null && r.ref !== f) && (i.flags |= 512, i.flags |= 2097152);
    }
    function ao(r, i, f, p, S) {
      var x = Tr(f) ? El : br.current;
      return x = ts(i, x), os(i, S), f = et(r, i, f, p, x, S), p = Rt(), r !== null && !sr ? (i.updateQueue = r.updateQueue, i.flags &= -2053, r.lanes &= ~S, Nn(r, i, S)) : (xn && p && Tc(i), i.flags |= 1, Vn(r, i, f, S), i.child);
    }
    function kd(r, i, f, p, S) {
      if (Tr(f)) {
        var x = !0;
        Qs(i);
      } else
        x = !1;
      if (os(i, S), i.stateNode === null)
        gs(r, i), Rd(i, f, p), kc(i, f, p, S), p = !0;
      else if (r === null) {
        var N = i.stateNode, F = i.memoizedProps;
        N.props = F;
        var te = N.context, me = f.contextType;
        typeof me == "object" && me !== null ? me = Dr(me) : (me = Tr(f) ? El : br.current, me = ts(i, me));
        var He = f.getDerivedStateFromProps, Qe = typeof He == "function" || typeof N.getSnapshotBeforeUpdate == "function";
        Qe || typeof N.UNSAFE_componentWillReceiveProps != "function" && typeof N.componentWillReceiveProps != "function" || (F !== p || te !== me) && nu(i, N, p, me), Si = !1;
        var Oe = i.memoizedState;
        N.state = Oe, us(i, p, N, S), te = i.memoizedState, F !== p || Oe !== te || jr.current || Si ? (typeof He == "function" && (cs(i, f, He, p), te = i.memoizedState), (F = Si || tu(i, f, F, p, Oe, te, me)) ? (Qe || typeof N.UNSAFE_componentWillMount != "function" && typeof N.componentWillMount != "function" || (typeof N.componentWillMount == "function" && N.componentWillMount(), typeof N.UNSAFE_componentWillMount == "function" && N.UNSAFE_componentWillMount()), typeof N.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof N.componentDidMount == "function" && (i.flags |= 4194308), i.memoizedProps = p, i.memoizedState = te), N.props = p, N.state = te, N.context = me, p = F) : (typeof N.componentDidMount == "function" && (i.flags |= 4194308), p = !1);
      } else {
        N = i.stateNode, Pc(r, i), F = i.memoizedProps, me = i.type === i.elementType ? F : Ha(i.type, F), N.props = me, Qe = i.pendingProps, Oe = N.context, te = f.contextType, typeof te == "object" && te !== null ? te = Dr(te) : (te = Tr(f) ? El : br.current, te = ts(i, te));
        var gn = f.getDerivedStateFromProps;
        (He = typeof gn == "function" || typeof N.getSnapshotBeforeUpdate == "function") || typeof N.UNSAFE_componentWillReceiveProps != "function" && typeof N.componentWillReceiveProps != "function" || (F !== Qe || Oe !== te) && nu(i, N, p, te), Si = !1, Oe = i.memoizedState, N.state = Oe, us(i, p, N, S);
        var on = i.memoizedState;
        F !== Qe || Oe !== on || jr.current || Si ? (typeof gn == "function" && (cs(i, f, gn, p), on = i.memoizedState), (me = Si || tu(i, f, me, p, Oe, on, te) || !1) ? (He || typeof N.UNSAFE_componentWillUpdate != "function" && typeof N.componentWillUpdate != "function" || (typeof N.componentWillUpdate == "function" && N.componentWillUpdate(p, on, te), typeof N.UNSAFE_componentWillUpdate == "function" && N.UNSAFE_componentWillUpdate(p, on, te)), typeof N.componentDidUpdate == "function" && (i.flags |= 4), typeof N.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof N.componentDidUpdate != "function" || F === r.memoizedProps && Oe === r.memoizedState || (i.flags |= 4), typeof N.getSnapshotBeforeUpdate != "function" || F === r.memoizedProps && Oe === r.memoizedState || (i.flags |= 1024), i.memoizedProps = p, i.memoizedState = on), N.props = p, N.state = on, N.context = te, p = me) : (typeof N.componentDidUpdate != "function" || F === r.memoizedProps && Oe === r.memoizedState || (i.flags |= 4), typeof N.getSnapshotBeforeUpdate != "function" || F === r.memoizedProps && Oe === r.memoizedState || (i.flags |= 1024), p = !1);
      }
      return io(r, i, f, p, x, S);
    }
    function io(r, i, f, p, S, x) {
      Pd(r, i);
      var N = (i.flags & 128) !== 0;
      if (!p && !N)
        return S && mc(i, f, !1), Nn(r, i, x);
      p = i.stateNode, yu.current = i;
      var F = N && typeof f.getDerivedStateFromError != "function" ? null : p.render();
      return i.flags |= 1, r !== null && N ? (i.child = xi(i, r.child, null, x), i.child = xi(i, null, F, x)) : Vn(r, i, F, x), i.memoizedState = p.state, S && mc(i, f, !0), i.child;
    }
    function Yc(r) {
      var i = r.stateNode;
      i.pendingContext ? pc(r, i.pendingContext, i.pendingContext !== i.context) : i.context && pc(r, i.context, !1), jn(r, i.containerInfo);
    }
    function zd(r, i, f, p, S) {
      return ls(), Dc(S), i.flags |= 256, Vn(r, i, f, p), i.child;
    }
    var qc = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ms(r) {
      return { baseLanes: r, cachePool: null, transitions: null };
    }
    function Ud(r, i, f) {
      var p = i.pendingProps, S = zt.current, x = !1, N = (i.flags & 128) !== 0, F;
      if ((F = N) || (F = r !== null && r.memoizedState === null ? !1 : (S & 2) !== 0), F ? (x = !0, i.flags &= -129) : (r === null || r.memoizedState !== null) && (S |= 1), Qt(zt, S & 1), r === null)
        return wc(i), r = i.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (i.mode & 1 ? qs(r) ? i.lanes = 8 : i.lanes = 1073741824 : i.lanes = 1, null) : (N = p.children, r = p.fallback, x ? (p = i.mode, x = i.child, N = { mode: "hidden", children: N }, !(p & 1) && x !== null ? (x.childLanes = 0, x.pendingProps = N) : x = ws(N, p, 0, null), r = nl(r, p, f, null), x.return = i, r.return = i, x.sibling = r, i.child = x, i.child.memoizedState = ms(f), i.memoizedState = qc, r) : Su(i, N));
      if (S = r.memoizedState, S !== null && (F = S.dehydrated, F !== null))
        return cp(r, i, N, p, F, S, f);
      if (x) {
        x = p.fallback, N = i.mode, S = r.child, F = S.sibling;
        var te = { mode: "hidden", children: p.children };
        return !(N & 1) && i.child !== S ? (p = i.child, p.childLanes = 0, p.pendingProps = te, i.deletions = null) : (p = si(S, te), p.subtreeFlags = S.subtreeFlags & 14680064), F !== null ? x = si(F, x) : (x = nl(x, N, f, null), x.flags |= 2), x.return = i, p.return = i, p.sibling = x, i.child = p, p = x, x = i.child, N = r.child.memoizedState, N = N === null ? ms(f) : { baseLanes: N.baseLanes | f, cachePool: null, transitions: N.transitions }, x.memoizedState = N, x.childLanes = r.childLanes & ~f, i.memoizedState = qc, p;
      }
      return x = r.child, r = x.sibling, p = si(x, { mode: "visible", children: p.children }), !(i.mode & 1) && (p.lanes = f), p.return = i, p.sibling = null, r !== null && (f = i.deletions, f === null ? (i.deletions = [r], i.flags |= 16) : f.push(r)), i.child = p, i.memoizedState = null, p;
    }
    function Su(r, i) {
      return i = ws({ mode: "visible", children: i }, r.mode, 0, null), i.return = r, r.child = i;
    }
    function lo(r, i, f, p) {
      return p !== null && Dc(p), xi(i, r.child, null, f), r = Su(i, i.pendingProps.children), r.flags |= 2, i.memoizedState = null, r;
    }
    function cp(r, i, f, p, S, x, N) {
      if (f)
        return i.flags & 256 ? (i.flags &= -257, p = gu(Error(v(422))), lo(r, i, N, p)) : i.memoizedState !== null ? (i.child = r.child, i.flags |= 128, null) : (x = p.fallback, S = i.mode, p = ws({ mode: "visible", children: p.children }, S, 0, null), x = nl(x, S, N, null), x.flags |= 2, p.return = i, x.return = i, p.sibling = x, i.child = p, i.mode & 1 && xi(i, r.child, null, N), i.child.memoizedState = ms(N), i.memoizedState = qc, x);
      if (!(i.mode & 1))
        return lo(r, i, N, null);
      if (qs(S))
        return p = _l(S).digest, x = Error(v(419)), p = gu(
          x,
          p,
          void 0
        ), lo(r, i, N, p);
      if (f = (N & r.childLanes) !== 0, sr || f) {
        if (p = Zn, p !== null) {
          switch (N & -N) {
            case 4:
              S = 2;
              break;
            case 16:
              S = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              S = 32;
              break;
            case 536870912:
              S = 268435456;
              break;
            default:
              S = 0;
          }
          S = S & (p.suspendedLanes | N) ? 0 : S, S !== 0 && S !== x.retryLane && (x.retryLane = S, Ga(r, S), oa(
            p,
            r,
            S,
            -1
          ));
        }
        return wi(), p = gu(Error(v(421))), lo(r, i, N, p);
      }
      return Fo(S) ? (i.flags |= 128, i.child = r.child, i = tl.bind(null, r), lr(S, i), null) : (r = x.treeContext, Gt && (_a = Je(S), ra = i, xn = !0, Fa = null, Js = !1, r !== null && (na[Sa++] = gi, na[Sa++] = ti, na[Sa++] = Rl, gi = r.id, ti = r.overflow, Rl = i)), i = Su(i, p.children), i.flags |= 4096, i);
    }
    function Zi(r, i, f) {
      r.lanes |= i;
      var p = r.alternate;
      p !== null && (p.lanes |= i), Lc(r.return, i, f);
    }
    function Ol(r, i, f, p, S) {
      var x = r.memoizedState;
      x === null ? r.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: p, tail: f, tailMode: S } : (x.isBackwards = i, x.rendering = null, x.renderingStartTime = 0, x.last = p, x.tail = f, x.tailMode = S);
    }
    function $i(r, i, f) {
      var p = i.pendingProps, S = p.revealOrder, x = p.tail;
      if (Vn(r, i, p.children, f), p = zt.current, p & 2)
        p = p & 1 | 2, i.flags |= 128;
      else {
        if (r !== null && r.flags & 128)
          e:
            for (r = i.child; r !== null; ) {
              if (r.tag === 13)
                r.memoizedState !== null && Zi(r, f, i);
              else if (r.tag === 19)
                Zi(r, f, i);
              else if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === i)
                break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === i)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
        p &= 1;
      }
      if (Qt(zt, p), !(i.mode & 1))
        i.memoizedState = null;
      else
        switch (S) {
          case "forwards":
            for (f = i.child, S = null; f !== null; )
              r = f.alternate, r !== null && fs(r) === null && (S = f), f = f.sibling;
            f = S, f === null ? (S = i.child, i.child = null) : (S = f.sibling, f.sibling = null), Ol(i, !1, S, f, x);
            break;
          case "backwards":
            for (f = null, S = i.child, i.child = null; S !== null; ) {
              if (r = S.alternate, r !== null && fs(r) === null) {
                i.child = S;
                break;
              }
              r = S.sibling, S.sibling = f, f = S, S = r;
            }
            Ol(i, !0, f, null, x);
            break;
          case "together":
            Ol(i, !1, null, null, void 0);
            break;
          default:
            i.memoizedState = null;
        }
      return i.child;
    }
    function gs(r, i) {
      !(i.mode & 1) && r !== null && (r.alternate = null, i.alternate = null, i.flags |= 2);
    }
    function Nn(r, i, f) {
      if (r !== null && (i.dependencies = r.dependencies), kl |= i.lanes, !(f & i.childLanes))
        return null;
      if (r !== null && i.child !== r.child)
        throw Error(v(153));
      if (i.child !== null) {
        for (r = i.child, f = si(r, r.pendingProps), i.child = f, f.return = i; r.sibling !== null; )
          r = r.sibling, f = f.sibling = si(r, r.pendingProps), f.return = i;
        f.sibling = null;
      }
      return i.child;
    }
    function ys(r, i, f) {
      switch (i.tag) {
        case 3:
          Yc(i), ls();
          break;
        case 5:
          Br(i);
          break;
        case 1:
          Tr(i.type) && Qs(i);
          break;
        case 4:
          jn(i, i.stateNode.containerInfo);
          break;
        case 10:
          Td(i, i.type._context, i.memoizedProps.value);
          break;
        case 13:
          var p = i.memoizedState;
          if (p !== null)
            return p.dehydrated !== null ? (Qt(zt, zt.current & 1), i.flags |= 128, null) : f & i.child.childLanes ? Ud(r, i, f) : (Qt(zt, zt.current & 1), r = Nn(r, i, f), r !== null ? r.sibling : null);
          Qt(zt, zt.current & 1);
          break;
        case 19:
          if (p = (f & i.childLanes) !== 0, r.flags & 128) {
            if (p)
              return $i(
                r,
                i,
                f
              );
            i.flags |= 128;
          }
          var S = i.memoizedState;
          if (S !== null && (S.rendering = null, S.tail = null, S.lastEffect = null), Qt(zt, zt.current), p)
            break;
          return null;
        case 22:
        case 23:
          return i.lanes = 0, Ad(r, i, f);
      }
      return Nn(r, i, f);
    }
    function at(r) {
      r.flags |= 4;
    }
    function so(r, i) {
      if (r !== null && r.child === i.child)
        return !0;
      if (i.flags & 16)
        return !1;
      for (r = i.child; r !== null; ) {
        if (r.flags & 12854 || r.subtreeFlags & 12854)
          return !1;
        r = r.sibling;
      }
      return !0;
    }
    var Ss, _u, xu, _s;
    if (Ft)
      Ss = function(r, i) {
        for (var f = i.child; f !== null; ) {
          if (f.tag === 5 || f.tag === 6)
            Xe(r, f.stateNode);
          else if (f.tag !== 4 && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === i)
            break;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === i)
              return;
            f = f.return;
          }
          f.sibling.return = f.return, f = f.sibling;
        }
      }, _u = function() {
      }, xu = function(r, i, f, p, S) {
        if (r = r.memoizedProps, r !== p) {
          var x = i.stateNode, N = mn(Or.current);
          f = Re(x, f, r, p, S, N), (i.updateQueue = f) && at(i);
        }
      }, _s = function(r, i, f, p) {
        f !== p && at(i);
      };
    else if (Ce) {
      Ss = function(r, i, f, p) {
        for (var S = i.child; S !== null; ) {
          if (S.tag === 5) {
            var x = S.stateNode;
            f && p && (x = La(x, S.type, S.memoizedProps, S)), Xe(r, x);
          } else if (S.tag === 6)
            x = S.stateNode, f && p && (x = Mr(x, S.memoizedProps, S)), Xe(r, x);
          else if (S.tag !== 4) {
            if (S.tag === 22 && S.memoizedState !== null)
              x = S.child, x !== null && (x.return = S), Ss(r, S, !0, !0);
            else if (S.child !== null) {
              S.child.return = S, S = S.child;
              continue;
            }
          }
          if (S === i)
            break;
          for (; S.sibling === null; ) {
            if (S.return === null || S.return === i)
              return;
            S = S.return;
          }
          S.sibling.return = S.return, S = S.sibling;
        }
      };
      var xs = function(r, i, f, p) {
        for (var S = i.child; S !== null; ) {
          if (S.tag === 5) {
            var x = S.stateNode;
            f && p && (x = La(x, S.type, S.memoizedProps, S)), Dt(r, x);
          } else if (S.tag === 6)
            x = S.stateNode, f && p && (x = Mr(x, S.memoizedProps, S)), Dt(r, x);
          else if (S.tag !== 4) {
            if (S.tag === 22 && S.memoizedState !== null)
              x = S.child, x !== null && (x.return = S), xs(r, S, !0, !0);
            else if (S.child !== null) {
              S.child.return = S, S = S.child;
              continue;
            }
          }
          if (S === i)
            break;
          for (; S.sibling === null; ) {
            if (S.return === null || S.return === i)
              return;
            S = S.return;
          }
          S.sibling.return = S.return, S = S.sibling;
        }
      };
      _u = function(r, i) {
        var f = i.stateNode;
        if (!so(r, i)) {
          r = f.containerInfo;
          var p = yl(r);
          xs(p, i, !1, !1), f.pendingChildren = p, at(i), ga(r, p);
        }
      }, xu = function(r, i, f, p, S) {
        var x = r.stateNode, N = r.memoizedProps;
        if ((r = so(r, i)) && N === p)
          i.stateNode = x;
        else {
          var F = i.stateNode, te = mn(Or.current), me = null;
          N !== p && (me = Re(F, f, N, p, S, te)), r && me === null ? i.stateNode = x : (x = hi(x, me, f, N, p, i, r, F), Ne(x, f, p, S, te) && at(i), i.stateNode = x, r ? at(i) : Ss(x, i, !1, !1));
        }
      }, _s = function(r, i, f, p) {
        f !== p ? (r = mn(ia.current), f = mn(Or.current), i.stateNode = Ct(p, r, f, i), at(i)) : i.stateNode = r.stateNode;
      };
    } else
      _u = function() {
      }, xu = function() {
      }, _s = function() {
      };
    function oo(r, i) {
      if (!xn)
        switch (r.tailMode) {
          case "hidden":
            i = r.tail;
            for (var f = null; i !== null; )
              i.alternate !== null && (f = i), i = i.sibling;
            f === null ? r.tail = null : f.sibling = null;
            break;
          case "collapsed":
            f = r.tail;
            for (var p = null; f !== null; )
              f.alternate !== null && (p = f), f = f.sibling;
            p === null ? i || r.tail === null ? r.tail = null : r.tail.sibling = null : p.sibling = null;
        }
    }
    function or(r) {
      var i = r.alternate !== null && r.alternate.child === r.child, f = 0, p = 0;
      if (i)
        for (var S = r.child; S !== null; )
          f |= S.lanes | S.childLanes, p |= S.subtreeFlags & 14680064, p |= S.flags & 14680064, S.return = r, S = S.sibling;
      else
        for (S = r.child; S !== null; )
          f |= S.lanes | S.childLanes, p |= S.subtreeFlags, p |= S.flags, S.return = r, S = S.sibling;
      return r.subtreeFlags |= p, r.childLanes = f, i;
    }
    function fp(r, i, f) {
      var p = i.pendingProps;
      switch (is(i), i.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return or(i), null;
        case 1:
          return Tr(i.type) && Xs(), or(i), null;
        case 3:
          return f = i.stateNode, qi(), Tt(jr), Tt(br), ru(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (r === null || r.child === null) && (Yo(i) ? at(i) : r === null || r.memoizedState.isDehydrated && !(i.flags & 256) || (i.flags |= 1024, Fa !== null && (Rs(Fa), Fa = null))), _u(r, i), or(i), null;
        case 5:
          ja(i), f = mn(ia.current);
          var S = i.type;
          if (r !== null && i.stateNode != null)
            xu(r, i, S, p, f), r.ref !== i.ref && (i.flags |= 512, i.flags |= 2097152);
          else {
            if (!p) {
              if (i.stateNode === null)
                throw Error(v(166));
              return or(i), null;
            }
            if (r = mn(Or.current), Yo(i)) {
              if (!Gt)
                throw Error(v(175));
              r = Ot(i.stateNode, i.type, i.memoizedProps, f, r, i, !Js), i.updateQueue = r, r !== null && at(i);
            } else {
              var x = Se(S, p, f, r, i);
              Ss(x, i, !1, !1), i.stateNode = x, Ne(x, S, p, f, r) && at(i);
            }
            i.ref !== null && (i.flags |= 512, i.flags |= 2097152);
          }
          return or(i), null;
        case 6:
          if (r && i.stateNode != null)
            _s(r, i, r.memoizedProps, p);
          else {
            if (typeof p != "string" && i.stateNode === null)
              throw Error(v(166));
            if (r = mn(ia.current), f = mn(Or.current), Yo(i)) {
              if (!Gt)
                throw Error(v(176));
              if (r = i.stateNode, f = i.memoizedProps, (p = bt(r, f, i, !Js)) && (S = ra, S !== null))
                switch (S.tag) {
                  case 3:
                    xl(S.stateNode.containerInfo, r, f, (S.mode & 1) !== 0);
                    break;
                  case 5:
                    Pa(S.type, S.memoizedProps, S.stateNode, r, f, (S.mode & 1) !== 0);
                }
              p && at(i);
            } else
              i.stateNode = Ct(p, r, f, i);
          }
          return or(i), null;
        case 13:
          if (Tt(zt), p = i.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
            if (xn && _a !== null && i.mode & 1 && !(i.flags & 128))
              bd(), ls(), i.flags |= 98560, S = !1;
            else if (S = Yo(i), p !== null && p.dehydrated !== null) {
              if (r === null) {
                if (!S)
                  throw Error(v(318));
                if (!Gt)
                  throw Error(v(344));
                if (S = i.memoizedState, S = S !== null ? S.dehydrated : null, !S)
                  throw Error(v(317));
                St(S, i);
              } else
                ls(), !(i.flags & 128) && (i.memoizedState = null), i.flags |= 4;
              or(i), S = !1;
            } else
              Fa !== null && (Rs(Fa), Fa = null), S = !0;
            if (!S)
              return i.flags & 65536 ? i : null;
          }
          return i.flags & 128 ? (i.lanes = f, i) : (f = p !== null, f !== (r !== null && r.memoizedState !== null) && f && (i.child.flags |= 8192, i.mode & 1 && (r === null || zt.current & 1 ? Fn === 0 && (Fn = 3) : wi())), i.updateQueue !== null && (i.flags |= 4), or(i), null);
        case 4:
          return qi(), _u(r, i), r === null && Cn(i.stateNode.containerInfo), or(i), null;
        case 10:
          return Oc(i.type._context), or(i), null;
        case 17:
          return Tr(i.type) && Xs(), or(i), null;
        case 19:
          if (Tt(zt), S = i.memoizedState, S === null)
            return or(i), null;
          if (p = (i.flags & 128) !== 0, x = S.rendering, x === null)
            if (p)
              oo(S, !1);
            else {
              if (Fn !== 0 || r !== null && r.flags & 128)
                for (r = i.child; r !== null; ) {
                  if (x = fs(r), x !== null) {
                    for (i.flags |= 128, oo(S, !1), r = x.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), i.subtreeFlags = 0, r = f, f = i.child; f !== null; )
                      p = f, S = r, p.flags &= 14680066, x = p.alternate, x === null ? (p.childLanes = 0, p.lanes = S, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = x.childLanes, p.lanes = x.lanes, p.child = x.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = x.memoizedProps, p.memoizedState = x.memoizedState, p.updateQueue = x.updateQueue, p.type = x.type, S = x.dependencies, p.dependencies = S === null ? null : { lanes: S.lanes, firstContext: S.firstContext }), f = f.sibling;
                    return Qt(zt, zt.current & 1 | 2), i.child;
                  }
                  r = r.sibling;
                }
              S.tail !== null && Kn() > Du && (i.flags |= 128, p = !0, oo(S, !1), i.lanes = 4194304);
            }
          else {
            if (!p)
              if (r = fs(x), r !== null) {
                if (i.flags |= 128, p = !0, r = r.updateQueue, r !== null && (i.updateQueue = r, i.flags |= 4), oo(S, !0), S.tail === null && S.tailMode === "hidden" && !x.alternate && !xn)
                  return or(i), null;
              } else
                2 * Kn() - S.renderingStartTime > Du && f !== 1073741824 && (i.flags |= 128, p = !0, oo(S, !1), i.lanes = 4194304);
            S.isBackwards ? (x.sibling = i.child, i.child = x) : (r = S.last, r !== null ? r.sibling = x : i.child = x, S.last = x);
          }
          return S.tail !== null ? (i = S.tail, S.rendering = i, S.tail = i.sibling, S.renderingStartTime = Kn(), i.sibling = null, r = zt.current, Qt(zt, p ? r & 1 | 2 : r & 1), i) : (or(i), null);
        case 22:
        case 23:
          return Ya(), f = i.memoizedState !== null, r !== null && r.memoizedState !== null !== f && (i.flags |= 8192), f && i.mode & 1 ? sa & 1073741824 && (or(i), Ft && i.subtreeFlags & 6 && (i.flags |= 8192)) : or(i), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(v(
        156,
        i.tag
      ));
    }
    function Wc(r, i) {
      switch (is(i), i.tag) {
        case 1:
          return Tr(i.type) && Xs(), r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 3:
          return qi(), Tt(jr), Tt(br), ru(), r = i.flags, r & 65536 && !(r & 128) ? (i.flags = r & -65537 | 128, i) : null;
        case 5:
          return ja(i), null;
        case 13:
          if (Tt(zt), r = i.memoizedState, r !== null && r.dehydrated !== null) {
            if (i.alternate === null)
              throw Error(v(340));
            ls();
          }
          return r = i.flags, r & 65536 ? (i.flags = r & -65537 | 128, i) : null;
        case 19:
          return Tt(zt), null;
        case 4:
          return qi(), null;
        case 10:
          return Oc(i.type._context), null;
        case 22:
        case 23:
          return Ya(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Cu = !1, ur = !1, Fd = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
    function Lr(r, i) {
      var f = r.ref;
      if (f !== null)
        if (typeof f == "function")
          try {
            f(null);
          } catch (p) {
            Lt(r, i, p);
          }
        else
          f.current = null;
    }
    function Ll(r, i, f) {
      try {
        f();
      } catch (p) {
        Lt(r, i, p);
      }
    }
    var Cs = !1;
    function Xc(r, i) {
      for (fe(r.containerInfo), Fe = i; Fe !== null; )
        if (r = Fe, i = r.child, (r.subtreeFlags & 1028) !== 0 && i !== null)
          i.return = r, Fe = i;
        else
          for (; Fe !== null; ) {
            r = Fe;
            try {
              var f = r.alternate;
              if (r.flags & 1024)
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (f !== null) {
                      var p = f.memoizedProps, S = f.memoizedState, x = r.stateNode, N = x.getSnapshotBeforeUpdate(r.elementType === r.type ? p : Ha(r.type, p), S);
                      x.__reactInternalSnapshotBeforeUpdate = N;
                    }
                    break;
                  case 3:
                    Ft && ma(r.stateNode.containerInfo);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(v(163));
                }
            } catch (F) {
              Lt(r, r.return, F);
            }
            if (i = r.sibling, i !== null) {
              i.return = r.return, Fe = i;
              break;
            }
            Fe = r.return;
          }
      return f = Cs, Cs = !1, f;
    }
    function Ti(r, i, f) {
      var p = i.updateQueue;
      if (p = p !== null ? p.lastEffect : null, p !== null) {
        var S = p = p.next;
        do {
          if ((S.tag & r) === r) {
            var x = S.destroy;
            S.destroy = void 0, x !== void 0 && Ll(i, f, x);
          }
          S = S.next;
        } while (S !== p);
      }
    }
    function Yr(r, i) {
      if (i = i.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
        var f = i = i.next;
        do {
          if ((f.tag & r) === r) {
            var p = f.create;
            f.destroy = p();
          }
          f = f.next;
        } while (f !== i);
      }
    }
    function kn(r) {
      var i = r.ref;
      if (i !== null) {
        var f = r.stateNode;
        switch (r.tag) {
          case 5:
            r = Ie(f);
            break;
          default:
            r = f;
        }
        typeof i == "function" ? i(r) : i.current = r;
      }
    }
    function Hd(r) {
      var i = r.alternate;
      i !== null && (r.alternate = null, Hd(i)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (i = r.stateNode, i !== null && ir(i)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
    }
    function Gd(r) {
      return r.tag === 5 || r.tag === 3 || r.tag === 4;
    }
    function jd(r) {
      e:
        for (; ; ) {
          for (; r.sibling === null; ) {
            if (r.return === null || Gd(r.return))
              return null;
            r = r.return;
          }
          for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
            if (r.flags & 2 || r.child === null || r.tag === 4)
              continue e;
            r.child.return = r, r = r.child;
          }
          if (!(r.flags & 2))
            return r.stateNode;
        }
    }
    function Eu(r, i, f) {
      var p = r.tag;
      if (p === 5 || p === 6)
        r = r.stateNode, i ? $e(f, r, i) : Za(f, r);
      else if (p !== 4 && (r = r.child, r !== null))
        for (Eu(r, i, f), r = r.sibling; r !== null; )
          Eu(r, i, f), r = r.sibling;
    }
    function bu(r, i, f) {
      var p = r.tag;
      if (p === 5 || p === 6)
        r = r.stateNode, i ? yt(f, r, i) : Gi(f, r);
      else if (p !== 4 && (r = r.child, r !== null))
        for (bu(r, i, f), r = r.sibling; r !== null; )
          bu(r, i, f), r = r.sibling;
    }
    var Jn = null, Va = !1;
    function ai(r, i, f) {
      for (f = f.child; f !== null; )
        Qc(r, i, f), f = f.sibling;
    }
    function Qc(r, i, f) {
      if (ei && typeof ei.onCommitFiberUnmount == "function")
        try {
          ei.onCommitFiberUnmount(Io, f);
        } catch {
        }
      switch (f.tag) {
        case 5:
          ur || Lr(f, i);
        case 6:
          if (Ft) {
            var p = Jn, S = Va;
            Jn = null, ai(r, i, f), Jn = p, Va = S, Jn !== null && (Va ? Er(Jn, f.stateNode) : En(Jn, f.stateNode));
          } else
            ai(r, i, f);
          break;
        case 18:
          Ft && Jn !== null && (Va ? bn(Jn, f.stateNode) : ln(Jn, f.stateNode));
          break;
        case 4:
          Ft ? (p = Jn, S = Va, Jn = f.stateNode.containerInfo, Va = !0, ai(r, i, f), Jn = p, Va = S) : (Ce && (p = f.stateNode.containerInfo, S = yl(p), ya(p, S)), ai(r, i, f));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!ur && (p = f.updateQueue, p !== null && (p = p.lastEffect, p !== null))) {
            S = p = p.next;
            do {
              var x = S, N = x.destroy;
              x = x.tag, N !== void 0 && (x & 2 || x & 4) && Ll(f, i, N), S = S.next;
            } while (S !== p);
          }
          ai(r, i, f);
          break;
        case 1:
          if (!ur && (Lr(f, i), p = f.stateNode, typeof p.componentWillUnmount == "function"))
            try {
              p.props = f.memoizedProps, p.state = f.memoizedState, p.componentWillUnmount();
            } catch (F) {
              Lt(f, i, F);
            }
          ai(r, i, f);
          break;
        case 21:
          ai(r, i, f);
          break;
        case 22:
          f.mode & 1 ? (ur = (p = ur) || f.memoizedState !== null, ai(r, i, f), ur = p) : ai(r, i, f);
          break;
        default:
          ai(
            r,
            i,
            f
          );
      }
    }
    function Yn(r) {
      var i = r.updateQueue;
      if (i !== null) {
        r.updateQueue = null;
        var f = r.stateNode;
        f === null && (f = r.stateNode = new Fd()), i.forEach(function(p) {
          var S = vp.bind(null, r, p);
          f.has(p) || (f.add(p), p.then(S, S));
        });
      }
    }
    function qr(r, i) {
      var f = i.deletions;
      if (f !== null)
        for (var p = 0; p < f.length; p++) {
          var S = f[p];
          try {
            var x = r, N = i;
            if (Ft) {
              var F = N;
              e:
                for (; F !== null; ) {
                  switch (F.tag) {
                    case 5:
                      Jn = F.stateNode, Va = !1;
                      break e;
                    case 3:
                      Jn = F.stateNode.containerInfo, Va = !0;
                      break e;
                    case 4:
                      Jn = F.stateNode.containerInfo, Va = !0;
                      break e;
                  }
                  F = F.return;
                }
              if (Jn === null)
                throw Error(v(160));
              Qc(x, N, S), Jn = null, Va = !1;
            } else
              Qc(x, N, S);
            var te = S.alternate;
            te !== null && (te.return = null), S.return = null;
          } catch (me) {
            Lt(S, i, me);
          }
        }
      if (i.subtreeFlags & 12854)
        for (i = i.child; i !== null; )
          Kc(i, r), i = i.sibling;
    }
    function Kc(r, i) {
      var f = r.alternate, p = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (qr(i, r), Ar(r), p & 4) {
            try {
              Ti(3, r, r.return), Yr(3, r);
            } catch (Oe) {
              Lt(r, r.return, Oe);
            }
            try {
              Ti(5, r, r.return);
            } catch (Oe) {
              Lt(r, r.return, Oe);
            }
          }
          break;
        case 1:
          qr(i, r), Ar(r), p & 512 && f !== null && Lr(f, f.return);
          break;
        case 5:
          if (qr(i, r), Ar(r), p & 512 && f !== null && Lr(f, f.return), Ft) {
            if (r.flags & 32) {
              var S = r.stateNode;
              try {
                Ye(S);
              } catch (Oe) {
                Lt(r, r.return, Oe);
              }
            }
            if (p & 4 && (S = r.stateNode, S != null)) {
              var x = r.memoizedProps;
              if (f = f !== null ? f.memoizedProps : x, p = r.type, i = r.updateQueue, r.updateQueue = null, i !== null)
                try {
                  rt(S, i, p, f, x, r);
                } catch (Oe) {
                  Lt(r, r.return, Oe);
                }
            }
          }
          break;
        case 6:
          if (qr(i, r), Ar(r), p & 4 && Ft) {
            if (r.stateNode === null)
              throw Error(v(162));
            S = r.stateNode, x = r.memoizedProps, f = f !== null ? f.memoizedProps : x;
            try {
              $l(S, f, x);
            } catch (Oe) {
              Lt(r, r.return, Oe);
            }
          }
          break;
        case 3:
          if (qr(i, r), Ar(r), p & 4) {
            if (Ft && Gt && f !== null && f.memoizedState.isDehydrated)
              try {
                Rn(i.containerInfo);
              } catch (Oe) {
                Lt(r, r.return, Oe);
              }
            if (Ce) {
              S = i.containerInfo, x = i.pendingChildren;
              try {
                ya(S, x);
              } catch (Oe) {
                Lt(r, r.return, Oe);
              }
            }
          }
          break;
        case 4:
          if (qr(
            i,
            r
          ), Ar(r), p & 4 && Ce) {
            x = r.stateNode, S = x.containerInfo, x = x.pendingChildren;
            try {
              ya(S, x);
            } catch (Oe) {
              Lt(r, r.return, Oe);
            }
          }
          break;
        case 13:
          qr(i, r), Ar(r), S = r.child, S.flags & 8192 && (x = S.memoizedState !== null, S.stateNode.isHidden = x, !x || S.alternate !== null && S.alternate.memoizedState !== null || (tf = Kn())), p & 4 && Yn(r);
          break;
        case 22:
          var N = f !== null && f.memoizedState !== null;
          if (r.mode & 1 ? (ur = (f = ur) || N, qr(i, r), ur = f) : qr(i, r), Ar(r), p & 8192) {
            if (f = r.memoizedState !== null, (r.stateNode.isHidden = f) && !N && r.mode & 1)
              for (Fe = r, p = r.child; p !== null; ) {
                for (i = Fe = p; Fe !== null; ) {
                  N = Fe;
                  var F = N.child;
                  switch (N.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Ti(4, N, N.return);
                      break;
                    case 1:
                      Lr(N, N.return);
                      var te = N.stateNode;
                      if (typeof te.componentWillUnmount == "function") {
                        var me = N, He = N.return;
                        try {
                          var Qe = me;
                          te.props = Qe.memoizedProps, te.state = Qe.memoizedState, te.componentWillUnmount();
                        } catch (Oe) {
                          Lt(me, He, Oe);
                        }
                      }
                      break;
                    case 5:
                      Lr(N, N.return);
                      break;
                    case 22:
                      if (N.memoizedState !== null) {
                        Al(i);
                        continue;
                      }
                  }
                  F !== null ? (F.return = N, Fe = F) : Al(i);
                }
                p = p.sibling;
              }
            if (Ft) {
              e:
                if (p = null, Ft)
                  for (i = r; ; ) {
                    if (i.tag === 5) {
                      if (p === null) {
                        p = i;
                        try {
                          S = i.stateNode, f ? Ge(S) : Xt(i.stateNode, i.memoizedProps);
                        } catch (Oe) {
                          Lt(r, r.return, Oe);
                        }
                      }
                    } else if (i.tag === 6) {
                      if (p === null)
                        try {
                          x = i.stateNode, f ? pn(x) : pt(x, i.memoizedProps);
                        } catch (Oe) {
                          Lt(r, r.return, Oe);
                        }
                    } else if ((i.tag !== 22 && i.tag !== 23 || i.memoizedState === null || i === r) && i.child !== null) {
                      i.child.return = i, i = i.child;
                      continue;
                    }
                    if (i === r)
                      break e;
                    for (; i.sibling === null; ) {
                      if (i.return === null || i.return === r)
                        break e;
                      p === i && (p = null), i = i.return;
                    }
                    p === i && (p = null), i.sibling.return = i.return, i = i.sibling;
                  }
            }
          }
          break;
        case 19:
          qr(i, r), Ar(r), p & 4 && Yn(r);
          break;
        case 21:
          break;
        default:
          qr(i, r), Ar(r);
      }
    }
    function Ar(r) {
      var i = r.flags;
      if (i & 2) {
        try {
          if (Ft) {
            e: {
              for (var f = r.return; f !== null; ) {
                if (Gd(f)) {
                  var p = f;
                  break e;
                }
                f = f.return;
              }
              throw Error(v(160));
            }
            switch (p.tag) {
              case 5:
                var S = p.stateNode;
                p.flags & 32 && (Ye(S), p.flags &= -33);
                var x = jd(r);
                bu(r, x, S);
                break;
              case 3:
              case 4:
                var N = p.stateNode.containerInfo, F = jd(r);
                Eu(r, F, N);
                break;
              default:
                throw Error(v(161));
            }
          }
        } catch (te) {
          Lt(r, r.return, te);
        }
        r.flags &= -3;
      }
      i & 4096 && (r.flags &= -4097);
    }
    function Bd(r, i, f) {
      Fe = r, Id(r);
    }
    function Id(r, i, f) {
      for (var p = (r.mode & 1) !== 0; Fe !== null; ) {
        var S = Fe, x = S.child;
        if (S.tag === 22 && p) {
          var N = S.memoizedState !== null || Cu;
          if (!N) {
            var F = S.alternate, te = F !== null && F.memoizedState !== null || ur;
            F = Cu;
            var me = ur;
            if (Cu = N, (ur = te) && !me)
              for (Fe = S; Fe !== null; )
                N = Fe, te = N.child, N.tag === 22 && N.memoizedState !== null ? cr(S) : te !== null ? (te.return = N, Fe = te) : cr(S);
            for (; x !== null; )
              Fe = x, Id(x), x = x.sibling;
            Fe = S, Cu = F, ur = me;
          }
          Vd(r);
        } else
          S.subtreeFlags & 8772 && x !== null ? (x.return = S, Fe = x) : Vd(r);
      }
    }
    function Vd(r) {
      for (; Fe !== null; ) {
        var i = Fe;
        if (i.flags & 8772) {
          var f = i.alternate;
          try {
            if (i.flags & 8772)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  ur || Yr(5, i);
                  break;
                case 1:
                  var p = i.stateNode;
                  if (i.flags & 4 && !ur)
                    if (f === null)
                      p.componentDidMount();
                    else {
                      var S = i.elementType === i.type ? f.memoizedProps : Ha(i.type, f.memoizedProps);
                      p.componentDidUpdate(S, f.memoizedState, p.__reactInternalSnapshotBeforeUpdate);
                    }
                  var x = i.updateQueue;
                  x !== null && _i(i, x, p);
                  break;
                case 3:
                  var N = i.updateQueue;
                  if (N !== null) {
                    if (f = null, i.child !== null)
                      switch (i.child.tag) {
                        case 5:
                          f = Ie(i.child.stateNode);
                          break;
                        case 1:
                          f = i.child.stateNode;
                      }
                    _i(i, N, f);
                  }
                  break;
                case 5:
                  var F = i.stateNode;
                  f === null && i.flags & 4 && be(F, i.type, i.memoizedProps, i);
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (Gt && i.memoizedState === null) {
                    var te = i.alternate;
                    if (te !== null) {
                      var me = te.memoizedState;
                      if (me !== null) {
                        var He = me.dehydrated;
                        He !== null && an(He);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(v(163));
              }
            ur || i.flags & 512 && kn(i);
          } catch (Qe) {
            Lt(i, i.return, Qe);
          }
        }
        if (i === r) {
          Fe = null;
          break;
        }
        if (f = i.sibling, f !== null) {
          f.return = i.return, Fe = f;
          break;
        }
        Fe = i.return;
      }
    }
    function Al(r) {
      for (; Fe !== null; ) {
        var i = Fe;
        if (i === r) {
          Fe = null;
          break;
        }
        var f = i.sibling;
        if (f !== null) {
          f.return = i.return, Fe = f;
          break;
        }
        Fe = i.return;
      }
    }
    function cr(r) {
      for (; Fe !== null; ) {
        var i = Fe;
        try {
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              var f = i.return;
              try {
                Yr(4, i);
              } catch (te) {
                Lt(i, f, te);
              }
              break;
            case 1:
              var p = i.stateNode;
              if (typeof p.componentDidMount == "function") {
                var S = i.return;
                try {
                  p.componentDidMount();
                } catch (te) {
                  Lt(i, S, te);
                }
              }
              var x = i.return;
              try {
                kn(i);
              } catch (te) {
                Lt(i, x, te);
              }
              break;
            case 5:
              var N = i.return;
              try {
                kn(i);
              } catch (te) {
                Lt(i, N, te);
              }
          }
        } catch (te) {
          Lt(i, i.return, te);
        }
        if (i === r) {
          Fe = null;
          break;
        }
        var F = i.sibling;
        if (F !== null) {
          F.return = i.return, Fe = F;
          break;
        }
        Fe = i.return;
      }
    }
    var De = 0, la = 1, Wr = 2, Tu = 3, Ru = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var uo = Symbol.for;
      De = uo("selector.component"), la = uo("selector.has_pseudo_class"), Wr = uo("selector.role"), Tu = uo("selector.test_id"), Ru = uo("selector.text");
    }
    function Jc(r) {
      var i = fn(r);
      if (i != null) {
        if (typeof i.memoizedProps["data-testname"] != "string")
          throw Error(v(364));
        return i;
      }
      if (r = dt(r), r === null)
        throw Error(v(362));
      return r.stateNode.current;
    }
    function Zc(r, i) {
      switch (i.$$typeof) {
        case De:
          if (r.type === i.value)
            return !0;
          break;
        case la:
          e: {
            i = i.value, r = [r, 0];
            for (var f = 0; f < r.length; ) {
              var p = r[f++], S = r[f++], x = i[S];
              if (p.tag !== 5 || !_n(p)) {
                for (; x != null && Zc(p, x); )
                  S++, x = i[S];
                if (S === i.length) {
                  i = !0;
                  break e;
                } else
                  for (p = p.child; p !== null; )
                    r.push(p, S), p = p.sibling;
              }
            }
            i = !1;
          }
          return i;
        case Wr:
          if (r.tag === 5 && Oa(r.stateNode, i.value))
            return !0;
          break;
        case Ru:
          if ((r.tag === 5 || r.tag === 6) && (r = Wt(r), r !== null && 0 <= r.indexOf(i.value)))
            return !0;
          break;
        case Tu:
          if (r.tag === 5 && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === i.value.toLowerCase()))
            return !0;
          break;
        default:
          throw Error(v(365));
      }
      return !1;
    }
    function zn(r) {
      switch (r.$$typeof) {
        case De:
          return "<" + (X(r.value) || "Unknown") + ">";
        case la:
          return ":has(" + (zn(r) || "") + ")";
        case Wr:
          return '[role="' + r.value + '"]';
        case Ru:
          return '"' + r.value + '"';
        case Tu:
          return '[data-testname="' + r.value + '"]';
        default:
          throw Error(v(365));
      }
    }
    function Yd(r, i) {
      var f = [];
      r = [r, 0];
      for (var p = 0; p < r.length; ) {
        var S = r[p++], x = r[p++], N = i[x];
        if (S.tag !== 5 || !_n(S)) {
          for (; N != null && Zc(S, N); )
            x++, N = i[x];
          if (x === i.length)
            f.push(S);
          else
            for (S = S.child; S !== null; )
              r.push(S, x), S = S.sibling;
        }
      }
      return f;
    }
    function $c(r, i) {
      if (!Me)
        throw Error(v(363));
      r = Jc(r), r = Yd(r, i), i = [], r = Array.from(r);
      for (var f = 0; f < r.length; ) {
        var p = r[f++];
        if (p.tag === 5)
          _n(p) || i.push(p.stateNode);
        else
          for (p = p.child; p !== null; )
            r.push(p), p = p.sibling;
      }
      return i;
    }
    var dp = Math.ceil, co = g.ReactCurrentDispatcher, Pl = g.ReactCurrentOwner, hn = g.ReactCurrentBatchConfig, Et = 0, Zn = null, Un = null, fr = 0, sa = 0, Es = Bi(0), Fn = 0, bs = null, kl = 0, wu = 0, ef = 0, fo = null, Xr = null, tf = 0, Du = 1 / 0, Ri = null;
    function zl() {
      Du = Kn() + 500;
    }
    var Nu = !1, nf = null, ii = null, Mu = !1, Hn = null, Ca = 0, Ul = 0, ho = null, vo = -1, Ou = 0;
    function dr() {
      return Et & 6 ? Kn() : vo !== -1 ? vo : vo = Kn();
    }
    function hr(r) {
      return r.mode & 1 ? Et & 2 && fr !== 0 ? fr & -fr : sp.transition !== null ? (Ou === 0 && (Ou = md()), Ou) : (r = kt, r !== 0 ? r : ar()) : 1;
    }
    function oa(r, i, f, p) {
      if (50 < Ul)
        throw Ul = 0, ho = null, Error(v(185));
      $a(r, f, p), (!(Et & 2) || r !== Zn) && (r === Zn && (!(Et & 2) && (wu |= f), Fn === 4 && Wn(r, fr)), qn(r, p), f === 1 && Et === 0 && !(i.mode & 1) && (zl(), Vo && Ua()));
    }
    function qn(r, i) {
      var f = r.callbackNode;
      $v(r, i);
      var p = Bo(r, r === Zn ? fr : 0);
      if (p === 0)
        f !== null && gd(f), r.callbackNode = null, r.callbackPriority = 0;
      else if (i = p & -p, r.callbackPriority !== i) {
        if (f != null && gd(f), i === 1)
          r.tag === 0 ? lp(el.bind(null, r)) : Sd(el.bind(null, r)), Qn ? Ee(function() {
            !(Et & 6) && Ua();
          }) : xc(Cc, Ua), f = null;
        else {
          switch (ns(p)) {
            case 1:
              f = Cc;
              break;
            case 4:
              f = rp;
              break;
            case 16:
              f = Ec;
              break;
            case 536870912:
              f = ap;
              break;
            default:
              f = Ec;
          }
          f = Qd(f, Fl.bind(null, r));
        }
        r.callbackPriority = i, r.callbackNode = f;
      }
    }
    function Fl(r, i) {
      if (vo = -1, Ou = 0, Et & 6)
        throw Error(v(327));
      var f = r.callbackNode;
      if (ua() && r.callbackNode !== f)
        return null;
      var p = Bo(r, r === Zn ? fr : 0);
      if (p === 0)
        return null;
      if (p & 30 || p & r.expiredLanes || i)
        i = po(r, p);
      else {
        i = p;
        var S = Et;
        Et |= 2;
        var x = Wd();
        (Zn !== r || fr !== i) && (Ri = null, zl(), Hl(r, i));
        do
          try {
            Lu();
            break;
          } catch (F) {
            qd(r, F);
          }
        while (1);
        Mc(), co.current = x, Et = S, Un !== null ? i = 0 : (Zn = null, fr = 0, i = Fn);
      }
      if (i !== 0) {
        if (i === 2 && (S = yc(r), S !== 0 && (p = S, i = Ts(r, S))), i === 1)
          throw f = bs, Hl(r, 0), Wn(r, p), qn(r, Kn()), f;
        if (i === 6)
          Wn(r, p);
        else {
          if (S = r.current.alternate, !(p & 30) && !Ea(S) && (i = po(r, p), i === 2 && (x = yc(r), x !== 0 && (p = x, i = Ts(r, x))), i === 1))
            throw f = bs, Hl(r, 0), Wn(r, p), qn(r, Kn()), f;
          switch (r.finishedWork = S, r.finishedLanes = p, i) {
            case 0:
            case 1:
              throw Error(v(345));
            case 2:
              Gl(r, Xr, Ri);
              break;
            case 3:
              if (Wn(r, p), (p & 130023424) === p && (i = tf + 500 - Kn(), 10 < i)) {
                if (Bo(r, 0) !== 0)
                  break;
                if (S = r.suspendedLanes, (S & p) !== p) {
                  dr(), r.pingedLanes |= r.suspendedLanes & S;
                  break;
                }
                r.timeoutHandle = Ue(Gl.bind(null, r, Xr, Ri), i);
                break;
              }
              Gl(r, Xr, Ri);
              break;
            case 4:
              if (Wn(r, p), (p & 4194240) === p)
                break;
              for (i = r.eventTimes, S = -1; 0 < p; ) {
                var N = 31 - ka(p);
                x = 1 << N, N = i[N], N > S && (S = N), p &= ~x;
              }
              if (p = S, p = Kn() - p, p = (120 > p ? 120 : 480 > p ? 480 : 1080 > p ? 1080 : 1920 > p ? 1920 : 3e3 > p ? 3e3 : 4320 > p ? 4320 : 1960 * dp(p / 1960)) - p, 10 < p) {
                r.timeoutHandle = Ue(Gl.bind(null, r, Xr, Ri), p);
                break;
              }
              Gl(r, Xr, Ri);
              break;
            case 5:
              Gl(r, Xr, Ri);
              break;
            default:
              throw Error(v(329));
          }
        }
      }
      return qn(r, Kn()), r.callbackNode === f ? Fl.bind(null, r) : null;
    }
    function Ts(r, i) {
      var f = fo;
      return r.current.memoizedState.isDehydrated && (Hl(r, i).flags |= 256), r = po(r, i), r !== 2 && (i = Xr, Xr = f, i !== null && Rs(i)), r;
    }
    function Rs(r) {
      Xr === null ? Xr = r : Xr.push.apply(Xr, r);
    }
    function Ea(r) {
      for (var i = r; ; ) {
        if (i.flags & 16384) {
          var f = i.updateQueue;
          if (f !== null && (f = f.stores, f !== null))
            for (var p = 0; p < f.length; p++) {
              var S = f[p], x = S.getSnapshot;
              S = S.value;
              try {
                if (!za(x(), S))
                  return !1;
              } catch {
                return !1;
              }
            }
        }
        if (f = i.child, i.subtreeFlags & 16384 && f !== null)
          f.return = i, i = f;
        else {
          if (i === r)
            break;
          for (; i.sibling === null; ) {
            if (i.return === null || i.return === r)
              return !0;
            i = i.return;
          }
          i.sibling.return = i.return, i = i.sibling;
        }
      }
      return !0;
    }
    function Wn(r, i) {
      for (i &= ~ef, i &= ~wu, r.suspendedLanes |= i, r.pingedLanes &= ~i, r = r.expirationTimes; 0 < i; ) {
        var f = 31 - ka(i), p = 1 << f;
        r[f] = -1, i &= ~p;
      }
    }
    function el(r) {
      if (Et & 6)
        throw Error(v(327));
      ua();
      var i = Bo(r, 0);
      if (!(i & 1))
        return qn(r, Kn()), null;
      var f = po(r, i);
      if (r.tag !== 0 && f === 2) {
        var p = yc(r);
        p !== 0 && (i = p, f = Ts(r, p));
      }
      if (f === 1)
        throw f = bs, Hl(r, 0), Wn(r, i), qn(r, Kn()), f;
      if (f === 6)
        throw Error(v(345));
      return r.finishedWork = r.current.alternate, r.finishedLanes = i, Gl(r, Xr, Ri), qn(r, Kn()), null;
    }
    function li(r) {
      Hn !== null && Hn.tag === 0 && !(Et & 6) && ua();
      var i = Et;
      Et |= 1;
      var f = hn.transition, p = kt;
      try {
        if (hn.transition = null, kt = 1, r)
          return r();
      } finally {
        kt = p, hn.transition = f, Et = i, !(Et & 6) && Ua();
      }
    }
    function Ya() {
      sa = Es.current, Tt(Es);
    }
    function Hl(r, i) {
      r.finishedWork = null, r.finishedLanes = 0;
      var f = r.timeoutHandle;
      if (f !== rn && (r.timeoutHandle = rn, st(f)), Un !== null)
        for (f = Un.return; f !== null; ) {
          var p = f;
          switch (is(p), p.tag) {
            case 1:
              p = p.type.childContextTypes, p != null && Xs();
              break;
            case 3:
              qi(), Tt(jr), Tt(br), ru();
              break;
            case 5:
              ja(p);
              break;
            case 4:
              qi();
              break;
            case 13:
              Tt(zt);
              break;
            case 19:
              Tt(zt);
              break;
            case 10:
              Oc(p.type._context);
              break;
            case 22:
            case 23:
              Ya();
          }
          f = f.return;
        }
      if (Zn = r, Un = r = si(r.current, null), fr = sa = i, Fn = 0, bs = null, ef = wu = kl = 0, Xr = fo = null, Vi !== null) {
        for (i = 0; i < Vi.length; i++)
          if (f = Vi[i], p = f.interleaved, p !== null) {
            f.interleaved = null;
            var S = p.next, x = f.pending;
            if (x !== null) {
              var N = x.next;
              x.next = S, p.next = N;
            }
            f.pending = p;
          }
        Vi = null;
      }
      return r;
    }
    function qd(r, i) {
      do {
        var f = Un;
        try {
          if (Mc(), Ci.current = bi, $s) {
            for (var p = dn.memoizedState; p !== null; ) {
              var S = p.queue;
              S !== null && (S.pending = null), p = p.next;
            }
            $s = !1;
          }
          if (Nr = 0, Bn = wn = dn = null, Xi = !1, hs = 0, Pl.current = null, f === null || f.return === null) {
            Fn = 1, bs = i, Un = null;
            break;
          }
          e: {
            var x = r, N = f.return, F = f, te = i;
            if (i = fr, F.flags |= 32768, te !== null && typeof te == "object" && typeof te.then == "function") {
              var me = te, He = F, Qe = He.tag;
              if (!(He.mode & 1) && (Qe === 0 || Qe === 11 || Qe === 15)) {
                var Oe = He.alternate;
                Oe ? (He.updateQueue = Oe.updateQueue, He.memoizedState = Oe.memoizedState, He.lanes = Oe.lanes) : (He.updateQueue = null, He.memoizedState = null);
              }
              var gn = Md(N);
              if (gn !== null) {
                gn.flags &= -257, sn(gn, N, F, x, i), gn.mode & 1 && Vr(x, me, i), i = gn, te = me;
                var on = i.updateQueue;
                if (on === null) {
                  var Kt = /* @__PURE__ */ new Set();
                  Kt.add(te), i.updateQueue = Kt;
                } else
                  on.add(te);
                break e;
              } else {
                if (!(i & 1)) {
                  Vr(x, me, i), wi();
                  break e;
                }
                te = Error(v(426));
              }
            } else if (xn && F.mode & 1) {
              var It = Md(N);
              if (It !== null) {
                !(It.flags & 65536) && (It.flags |= 256), sn(It, N, F, x, i), Dc(Ki(te, F));
                break e;
              }
            }
            x = te = Ki(te, F), Fn !== 4 && (Fn = 2), fo === null ? fo = [x] : fo.push(x), x = N;
            do {
              switch (x.tag) {
                case 3:
                  x.flags |= 65536, i &= -i, x.lanes |= i;
                  var J = ps(x, te, i);
                  Zo(x, J);
                  break e;
                case 1:
                  F = te;
                  var H = x.type, ne = x.stateNode;
                  if (!(x.flags & 128) && (typeof H.getDerivedStateFromError == "function" || ne !== null && typeof ne.componentDidCatch == "function" && (ii === null || !ii.has(ne)))) {
                    x.flags |= 65536, i &= -i, x.lanes |= i;
                    var Ae = Ji(x, F, i);
                    Zo(x, Ae);
                    break e;
                  }
              }
              x = x.return;
            } while (x !== null);
          }
          Au(f);
        } catch (qe) {
          i = qe, Un === f && f !== null && (Un = f = f.return);
          continue;
        }
        break;
      } while (1);
    }
    function Wd() {
      var r = co.current;
      return co.current = bi, r === null ? bi : r;
    }
    function wi() {
      (Fn === 0 || Fn === 3 || Fn === 2) && (Fn = 4), Zn === null || !(kl & 268435455) && !(wu & 268435455) || Wn(Zn, fr);
    }
    function po(r, i) {
      var f = Et;
      Et |= 2;
      var p = Wd();
      (Zn !== r || fr !== i) && (Ri = null, Hl(r, i));
      do
        try {
          rf();
          break;
        } catch (S) {
          qd(r, S);
        }
      while (1);
      if (Mc(), Et = f, co.current = p, Un !== null)
        throw Error(v(261));
      return Zn = null, fr = 0, Fn;
    }
    function rf() {
      for (; Un !== null; )
        Xd(Un);
    }
    function Lu() {
      for (; Un !== null && !tp(); )
        Xd(Un);
    }
    function Xd(r) {
      var i = af(r.alternate, r, sa);
      r.memoizedProps = r.pendingProps, i === null ? Au(r) : Un = i, Pl.current = null;
    }
    function Au(r) {
      var i = r;
      do {
        var f = i.alternate;
        if (r = i.return, i.flags & 32768) {
          if (f = Wc(f, i), f !== null) {
            f.flags &= 32767, Un = f;
            return;
          }
          if (r !== null)
            r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
          else {
            Fn = 6, Un = null;
            return;
          }
        } else if (f = fp(f, i, sa), f !== null) {
          Un = f;
          return;
        }
        if (i = i.sibling, i !== null) {
          Un = i;
          return;
        }
        Un = i = r;
      } while (i !== null);
      Fn === 0 && (Fn = 5);
    }
    function Gl(r, i, f) {
      var p = kt, S = hn.transition;
      try {
        hn.transition = null, kt = 1, hp(r, i, f, p);
      } finally {
        hn.transition = S, kt = p;
      }
      return null;
    }
    function hp(r, i, f, p) {
      do
        ua();
      while (Hn !== null);
      if (Et & 6)
        throw Error(v(327));
      f = r.finishedWork;
      var S = r.finishedLanes;
      if (f === null)
        return null;
      if (r.finishedWork = null, r.finishedLanes = 0, f === r.current)
        throw Error(v(177));
      r.callbackNode = null, r.callbackPriority = 0;
      var x = f.lanes | f.childLanes;
      if (ep(r, x), r === Zn && (Un = Zn = null, fr = 0), !(f.subtreeFlags & 2064) && !(f.flags & 2064) || Mu || (Mu = !0, Qd(Ec, function() {
        return ua(), null;
      })), x = (f.flags & 15990) !== 0, f.subtreeFlags & 15990 || x) {
        x = hn.transition, hn.transition = null;
        var N = kt;
        kt = 1;
        var F = Et;
        Et |= 4, Pl.current = null, Xc(r, f), Kc(f, r), de(r.containerInfo), r.current = f, Bd(f), np(), Et = F, kt = N, hn.transition = x;
      } else
        r.current = f;
      if (Mu && (Mu = !1, Hn = r, Ca = S), x = r.pendingLanes, x === 0 && (ii = null), ip(f.stateNode), qn(r, Kn()), i !== null)
        for (p = r.onRecoverableError, f = 0; f < i.length; f++)
          S = i[f], p(S.value, { componentStack: S.stack, digest: S.digest });
      if (Nu)
        throw Nu = !1, r = nf, nf = null, r;
      return Ca & 1 && r.tag !== 0 && ua(), x = r.pendingLanes, x & 1 ? r === ho ? Ul++ : (Ul = 0, ho = r) : Ul = 0, Ua(), null;
    }
    function ua() {
      if (Hn !== null) {
        var r = ns(Ca), i = hn.transition, f = kt;
        try {
          if (hn.transition = null, kt = 16 > r ? 16 : r, Hn === null)
            var p = !1;
          else {
            if (r = Hn, Hn = null, Ca = 0, Et & 6)
              throw Error(v(331));
            var S = Et;
            for (Et |= 4, Fe = r.current; Fe !== null; ) {
              var x = Fe, N = x.child;
              if (Fe.flags & 16) {
                var F = x.deletions;
                if (F !== null) {
                  for (var te = 0; te < F.length; te++) {
                    var me = F[te];
                    for (Fe = me; Fe !== null; ) {
                      var He = Fe;
                      switch (He.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ti(8, He, x);
                      }
                      var Qe = He.child;
                      if (Qe !== null)
                        Qe.return = He, Fe = Qe;
                      else
                        for (; Fe !== null; ) {
                          He = Fe;
                          var Oe = He.sibling, gn = He.return;
                          if (Hd(He), He === me) {
                            Fe = null;
                            break;
                          }
                          if (Oe !== null) {
                            Oe.return = gn, Fe = Oe;
                            break;
                          }
                          Fe = gn;
                        }
                    }
                  }
                  var on = x.alternate;
                  if (on !== null) {
                    var Kt = on.child;
                    if (Kt !== null) {
                      on.child = null;
                      do {
                        var It = Kt.sibling;
                        Kt.sibling = null, Kt = It;
                      } while (Kt !== null);
                    }
                  }
                  Fe = x;
                }
              }
              if (x.subtreeFlags & 2064 && N !== null)
                N.return = x, Fe = N;
              else
                e:
                  for (; Fe !== null; ) {
                    if (x = Fe, x.flags & 2048)
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ti(9, x, x.return);
                      }
                    var J = x.sibling;
                    if (J !== null) {
                      J.return = x.return, Fe = J;
                      break e;
                    }
                    Fe = x.return;
                  }
            }
            var H = r.current;
            for (Fe = H; Fe !== null; ) {
              N = Fe;
              var ne = N.child;
              if (N.subtreeFlags & 2064 && ne !== null)
                ne.return = N, Fe = ne;
              else
                e:
                  for (N = H; Fe !== null; ) {
                    if (F = Fe, F.flags & 2048)
                      try {
                        switch (F.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Yr(9, F);
                        }
                      } catch (qe) {
                        Lt(F, F.return, qe);
                      }
                    if (F === N) {
                      Fe = null;
                      break e;
                    }
                    var Ae = F.sibling;
                    if (Ae !== null) {
                      Ae.return = F.return, Fe = Ae;
                      break e;
                    }
                    Fe = F.return;
                  }
            }
            if (Et = S, Ua(), ei && typeof ei.onPostCommitFiberRoot == "function")
              try {
                ei.onPostCommitFiberRoot(Io, r);
              } catch {
              }
            p = !0;
          }
          return p;
        } finally {
          kt = f, hn.transition = i;
        }
      }
      return !1;
    }
    function $n(r, i, f) {
      i = Ki(f, i), i = ps(r, i, 1), r = Yi(r, i, 1), i = dr(), r !== null && ($a(r, 1, i), qn(r, i));
    }
    function Lt(r, i, f) {
      if (r.tag === 3)
        $n(r, r, f);
      else
        for (; i !== null; ) {
          if (i.tag === 3) {
            $n(i, r, f);
            break;
          } else if (i.tag === 1) {
            var p = i.stateNode;
            if (typeof i.type.getDerivedStateFromError == "function" || typeof p.componentDidCatch == "function" && (ii === null || !ii.has(p))) {
              r = Ki(f, r), r = Ji(i, r, 1), i = Yi(i, r, 1), r = dr(), i !== null && ($a(i, 1, r), qn(i, r));
              break;
            }
          }
          i = i.return;
        }
    }
    function qa(r, i, f) {
      var p = r.pingCache;
      p !== null && p.delete(i), i = dr(), r.pingedLanes |= r.suspendedLanes & f, Zn === r && (fr & f) === f && (Fn === 4 || Fn === 3 && (fr & 130023424) === fr && 500 > Kn() - tf ? Hl(r, 0) : ef |= f), qn(r, i);
    }
    function Di(r, i) {
      i === 0 && (r.mode & 1 ? (i = bl, bl <<= 1, !(bl & 130023424) && (bl = 4194304)) : i = 1);
      var f = dr();
      r = Ga(r, i), r !== null && ($a(r, i, f), qn(r, f));
    }
    function tl(r) {
      var i = r.memoizedState, f = 0;
      i !== null && (f = i.retryLane), Di(r, f);
    }
    function vp(r, i) {
      var f = 0;
      switch (r.tag) {
        case 13:
          var p = r.stateNode, S = r.memoizedState;
          S !== null && (f = S.retryLane);
          break;
        case 19:
          p = r.stateNode;
          break;
        default:
          throw Error(v(314));
      }
      p !== null && p.delete(i), Di(r, f);
    }
    var af;
    af = function(r, i, f) {
      if (r !== null)
        if (r.memoizedProps !== i.pendingProps || jr.current)
          sr = !0;
        else {
          if (!(r.lanes & f) && !(i.flags & 128))
            return sr = !1, ys(r, i, f);
          sr = !!(r.flags & 131072);
        }
      else
        sr = !1, xn && i.flags & 1048576 && _d(i, Ks, i.index);
      switch (i.lanes = 0, i.tag) {
        case 2:
          var p = i.type;
          gs(r, i), r = i.pendingProps;
          var S = ts(i, br.current);
          os(i, f), S = et(null, i, p, r, S, f);
          var x = Rt();
          return i.flags |= 1, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0 ? (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Tr(p) ? (x = !0, Qs(i)) : x = !1, i.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, Ko(i), S.updater = eu, i.stateNode = S, S._reactInternals = i, kc(i, p, r, f), i = io(null, i, p, !0, x, f)) : (i.tag = 0, xn && x && Tc(i), Vn(null, i, S, f), i = i.child), i;
        case 16:
          p = i.elementType;
          e: {
            switch (gs(r, i), r = i.pendingProps, S = p._init, p = S(p._payload), i.type = p, S = i.tag = Kd(p), r = Ha(p, r), S) {
              case 0:
                i = ao(null, i, p, r, f);
                break e;
              case 1:
                i = kd(null, i, p, r, f);
                break e;
              case 11:
                i = ro(null, i, p, r, f);
                break e;
              case 14:
                i = Od(null, i, p, Ha(p.type, r), f);
                break e;
            }
            throw Error(v(
              306,
              p,
              ""
            ));
          }
          return i;
        case 0:
          return p = i.type, S = i.pendingProps, S = i.elementType === p ? S : Ha(p, S), ao(r, i, p, S, f);
        case 1:
          return p = i.type, S = i.pendingProps, S = i.elementType === p ? S : Ha(p, S), kd(r, i, p, S, f);
        case 3:
          e: {
            if (Yc(i), r === null)
              throw Error(v(387));
            p = i.pendingProps, x = i.memoizedState, S = x.element, Pc(r, i), us(i, p, null, f);
            var N = i.memoizedState;
            if (p = N.element, Gt && x.isDehydrated)
              if (x = { element: p, isDehydrated: !1, cache: N.cache, pendingSuspenseBoundaries: N.pendingSuspenseBoundaries, transitions: N.transitions }, i.updateQueue.baseState = x, i.memoizedState = x, i.flags & 256) {
                S = Ki(Error(v(423)), i), i = zd(r, i, p, f, S);
                break e;
              } else if (p !== S) {
                S = Ki(Error(v(424)), i), i = zd(r, i, p, f, S);
                break e;
              } else
                for (Gt && (_a = we(i.stateNode.containerInfo), ra = i, xn = !0, Fa = null, Js = !1), f = xa(i, null, p, f), i.child = f; f; )
                  f.flags = f.flags & -3 | 4096, f = f.sibling;
            else {
              if (ls(), p === S) {
                i = Nn(r, i, f);
                break e;
              }
              Vn(r, i, p, f);
            }
            i = i.child;
          }
          return i;
        case 5:
          return Br(i), r === null && wc(i), p = i.type, S = i.pendingProps, x = r !== null ? r.memoizedProps : null, N = S.children, nt(p, S) ? N = null : x !== null && nt(p, x) && (i.flags |= 32), Pd(r, i), Vn(r, i, N, f), i.child;
        case 6:
          return r === null && wc(i), null;
        case 13:
          return Ud(r, i, f);
        case 4:
          return jn(i, i.stateNode.containerInfo), p = i.pendingProps, r === null ? i.child = xi(i, null, p, f) : Vn(r, i, p, f), i.child;
        case 11:
          return p = i.type, S = i.pendingProps, S = i.elementType === p ? S : Ha(p, S), ro(r, i, p, S, f);
        case 7:
          return Vn(r, i, i.pendingProps, f), i.child;
        case 8:
          return Vn(r, i, i.pendingProps.children, f), i.child;
        case 12:
          return Vn(r, i, i.pendingProps.children, f), i.child;
        case 10:
          e: {
            if (p = i.type._context, S = i.pendingProps, x = i.memoizedProps, N = S.value, Td(i, p, N), x !== null)
              if (za(x.value, N)) {
                if (x.children === S.children && !jr.current) {
                  i = Nn(r, i, f);
                  break e;
                }
              } else
                for (x = i.child, x !== null && (x.return = i); x !== null; ) {
                  var F = x.dependencies;
                  if (F !== null) {
                    N = x.child;
                    for (var te = F.firstContext; te !== null; ) {
                      if (te.context === p) {
                        if (x.tag === 1) {
                          te = ni(-1, f & -f), te.tag = 2;
                          var me = x.updateQueue;
                          if (me !== null) {
                            me = me.shared;
                            var He = me.pending;
                            He === null ? te.next = te : (te.next = He.next, He.next = te), me.pending = te;
                          }
                        }
                        x.lanes |= f, te = x.alternate, te !== null && (te.lanes |= f), Lc(x.return, f, i), F.lanes |= f;
                        break;
                      }
                      te = te.next;
                    }
                  } else if (x.tag === 10)
                    N = x.type === i.type ? null : x.child;
                  else if (x.tag === 18) {
                    if (N = x.return, N === null)
                      throw Error(v(341));
                    N.lanes |= f, F = N.alternate, F !== null && (F.lanes |= f), Lc(N, f, i), N = x.sibling;
                  } else
                    N = x.child;
                  if (N !== null)
                    N.return = x;
                  else
                    for (N = x; N !== null; ) {
                      if (N === i) {
                        N = null;
                        break;
                      }
                      if (x = N.sibling, x !== null) {
                        x.return = N.return, N = x;
                        break;
                      }
                      N = N.return;
                    }
                  x = N;
                }
            Vn(r, i, S.children, f), i = i.child;
          }
          return i;
        case 9:
          return S = i.type, p = i.pendingProps.children, os(i, f), S = Dr(S), p = p(S), i.flags |= 1, Vn(r, i, p, f), i.child;
        case 14:
          return p = i.type, S = Ha(p, i.pendingProps), S = Ha(p.type, S), Od(r, i, p, S, f);
        case 15:
          return Ld(r, i, i.type, i.pendingProps, f);
        case 17:
          return p = i.type, S = i.pendingProps, S = i.elementType === p ? S : Ha(p, S), gs(r, i), i.tag = 1, Tr(p) ? (r = !0, Qs(i)) : r = !1, os(i, f), Rd(i, p, S), kc(i, p, S, f), io(null, i, p, !0, r, f);
        case 19:
          return $i(r, i, f);
        case 22:
          return Ad(r, i, f);
      }
      throw Error(v(156, i.tag));
    };
    function Qd(r, i) {
      return xc(r, i);
    }
    function pp(r, i, f, p) {
      this.tag = r, this.key = f, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = p, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ba(r, i, f, p) {
      return new pp(r, i, f, p);
    }
    function Pu(r) {
      return r = r.prototype, !(!r || !r.isReactComponent);
    }
    function Kd(r) {
      if (typeof r == "function")
        return Pu(r) ? 1 : 0;
      if (r != null) {
        if (r = r.$$typeof, r === z)
          return 11;
        if (r === j)
          return 14;
      }
      return 2;
    }
    function si(r, i) {
      var f = r.alternate;
      return f === null ? (f = ba(r.tag, i, r.key, r.mode), f.elementType = r.elementType, f.type = r.type, f.stateNode = r.stateNode, f.alternate = r, r.alternate = f) : (f.pendingProps = i, f.type = r.type, f.flags = 0, f.subtreeFlags = 0, f.deletions = null), f.flags = r.flags & 14680064, f.childLanes = r.childLanes, f.lanes = r.lanes, f.child = r.child, f.memoizedProps = r.memoizedProps, f.memoizedState = r.memoizedState, f.updateQueue = r.updateQueue, i = r.dependencies, f.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, f.sibling = r.sibling, f.index = r.index, f.ref = r.ref, f;
    }
    function mo(r, i, f, p, S, x) {
      var N = 2;
      if (p = r, typeof r == "function")
        Pu(r) && (N = 1);
      else if (typeof r == "string")
        N = 5;
      else
        e:
          switch (r) {
            case E:
              return nl(f.children, S, x, i);
            case T:
              N = 8, S |= 8;
              break;
            case w:
              return r = ba(12, f, i, S | 2), r.elementType = w, r.lanes = x, r;
            case k:
              return r = ba(13, f, i, S), r.elementType = k, r.lanes = x, r;
            case I:
              return r = ba(19, f, i, S), r.elementType = I, r.lanes = x, r;
            case Z:
              return ws(f, S, x, i);
            default:
              if (typeof r == "object" && r !== null)
                switch (r.$$typeof) {
                  case M:
                    N = 10;
                    break e;
                  case R:
                    N = 9;
                    break e;
                  case z:
                    N = 11;
                    break e;
                  case j:
                    N = 14;
                    break e;
                  case G:
                    N = 16, p = null;
                    break e;
                }
              throw Error(v(130, r == null ? r : typeof r, ""));
          }
      return i = ba(N, f, i, S), i.elementType = r, i.type = p, i.lanes = x, i;
    }
    function nl(r, i, f, p) {
      return r = ba(7, r, p, i), r.lanes = f, r;
    }
    function ws(r, i, f, p) {
      return r = ba(22, r, p, i), r.elementType = Z, r.lanes = f, r.stateNode = { isHidden: !1 }, r;
    }
    function go(r, i, f) {
      return r = ba(6, r, null, i), r.lanes = f, r;
    }
    function yo(r, i, f) {
      return i = ba(4, r.children !== null ? r.children : [], r.key, i), i.lanes = f, i.stateNode = { containerInfo: r.containerInfo, pendingChildren: null, implementation: r.implementation }, i;
    }
    function mp(r, i, f, p, S) {
      this.tag = i, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = rn, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sc(0), this.expirationTimes = Sc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sc(0), this.identifierPrefix = p, this.onRecoverableError = S, Gt && (this.mutableSourceEagerHydrationData = null);
    }
    function Jd(r, i, f, p, S, x, N, F, te) {
      return r = new mp(r, i, f, F, te), i === 1 ? (i = 1, x === !0 && (i |= 8)) : i = 0, x = ba(3, null, null, i), r.current = x, x.stateNode = r, x.memoizedState = { element: p, isDehydrated: f, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ko(x), r;
    }
    function Zd(r) {
      if (!r)
        return Ii;
      r = r._reactInternals;
      e: {
        if (ee(r) !== r || r.tag !== 1)
          throw Error(v(170));
        var i = r;
        do {
          switch (i.tag) {
            case 3:
              i = i.stateNode.context;
              break e;
            case 1:
              if (Tr(i.type)) {
                i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
        throw Error(v(171));
      }
      if (r.tag === 1) {
        var f = r.type;
        if (Tr(f))
          return Go(r, f, i);
      }
      return i;
    }
    function $d(r) {
      var i = r._reactInternals;
      if (i === void 0)
        throw typeof r.render == "function" ? Error(v(188)) : (r = Object.keys(r).join(","), Error(v(268, r)));
      return r = xe(i), r === null ? null : r.stateNode;
    }
    function lf(r, i) {
      if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
        var f = r.retryLane;
        r.retryLane = f !== 0 && f < i ? f : i;
      }
    }
    function jl(r, i) {
      lf(r, i), (r = r.alternate) && lf(r, i);
    }
    function gp(r) {
      return r = xe(r), r === null ? null : r.stateNode;
    }
    function eh() {
      return null;
    }
    return a.attemptContinuousHydration = function(r) {
      if (r.tag === 13) {
        var i = Ga(r, 134217728);
        if (i !== null) {
          var f = dr();
          oa(i, r, 134217728, f);
        }
        jl(r, 134217728);
      }
    }, a.attemptDiscreteHydration = function(r) {
      if (r.tag === 13) {
        var i = Ga(r, 1);
        if (i !== null) {
          var f = dr();
          oa(i, r, 1, f);
        }
        jl(r, 1);
      }
    }, a.attemptHydrationAtCurrentPriority = function(r) {
      if (r.tag === 13) {
        var i = hr(r), f = Ga(r, i);
        if (f !== null) {
          var p = dr();
          oa(f, r, i, p);
        }
        jl(r, i);
      }
    }, a.attemptSynchronousHydration = function(r) {
      switch (r.tag) {
        case 3:
          var i = r.stateNode;
          if (i.current.memoizedState.isDehydrated) {
            var f = wr(i.pendingLanes);
            f !== 0 && (_c(i, f | 1), qn(i, Kn()), !(Et & 6) && (zl(), Ua()));
          }
          break;
        case 13:
          li(function() {
            var p = Ga(r, 1);
            if (p !== null) {
              var S = dr();
              oa(p, r, 1, S);
            }
          }), jl(r, 1);
      }
    }, a.batchedUpdates = function(r, i) {
      var f = Et;
      Et |= 1;
      try {
        return r(i);
      } finally {
        Et = f, Et === 0 && (zl(), Vo && Ua());
      }
    }, a.createComponentSelector = function(r) {
      return { $$typeof: De, value: r };
    }, a.createContainer = function(r, i, f, p, S, x, N) {
      return Jd(r, i, !1, null, f, p, S, x, N);
    }, a.createHasPseudoClassSelector = function(r) {
      return { $$typeof: la, value: r };
    }, a.createHydrationContainer = function(r, i, f, p, S, x, N, F, te) {
      return r = Jd(f, p, !0, r, S, x, N, F, te), r.context = Zd(null), f = r.current, p = dr(), S = hr(f), x = ni(p, S), x.callback = i ?? null, Yi(f, x, S), r.current.lanes = S, $a(r, S, p), qn(r, p), r;
    }, a.createPortal = function(r, i, f) {
      var p = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: m, key: p == null ? null : "" + p, children: r, containerInfo: i, implementation: f };
    }, a.createRoleSelector = function(r) {
      return { $$typeof: Wr, value: r };
    }, a.createTestNameSelector = function(r) {
      return { $$typeof: Tu, value: r };
    }, a.createTextSelector = function(r) {
      return { $$typeof: Ru, value: r };
    }, a.deferredUpdates = function(r) {
      var i = kt, f = hn.transition;
      try {
        return hn.transition = null, kt = 16, r();
      } finally {
        kt = i, hn.transition = f;
      }
    }, a.discreteUpdates = function(r, i, f, p, S) {
      var x = kt, N = hn.transition;
      try {
        return hn.transition = null, kt = 1, r(i, f, p, S);
      } finally {
        kt = x, hn.transition = N, Et === 0 && zl();
      }
    }, a.findAllNodes = $c, a.findBoundingRects = function(r, i) {
      if (!Me)
        throw Error(v(363));
      i = $c(r, i), r = [];
      for (var f = 0; f < i.length; f++)
        r.push(Ke(i[f]));
      for (i = r.length - 1; 0 < i; i--) {
        f = r[i];
        for (var p = f.x, S = p + f.width, x = f.y, N = x + f.height, F = i - 1; 0 <= F; F--)
          if (i !== F) {
            var te = r[F], me = te.x, He = me + te.width, Qe = te.y, Oe = Qe + te.height;
            if (p >= me && x >= Qe && S <= He && N <= Oe) {
              r.splice(i, 1);
              break;
            } else if (p !== me || f.width !== te.width || Oe < x || Qe > N) {
              if (!(x !== Qe || f.height !== te.height || He < p || me > S)) {
                me > p && (te.width += me - p, te.x = p), He < S && (te.width = S - me), r.splice(i, 1);
                break;
              }
            } else {
              Qe > x && (te.height += Qe - x, te.y = x), Oe < N && (te.height = N - Qe), r.splice(i, 1);
              break;
            }
          }
      }
      return r;
    }, a.findHostInstance = $d, a.findHostInstanceWithNoPortals = function(r) {
      return r = K(r), r = r !== null ? ke(r) : null, r === null ? null : r.stateNode;
    }, a.findHostInstanceWithWarning = function(r) {
      return $d(r);
    }, a.flushControlled = function(r) {
      var i = Et;
      Et |= 1;
      var f = hn.transition, p = kt;
      try {
        hn.transition = null, kt = 1, r();
      } finally {
        kt = p, hn.transition = f, Et = i, Et === 0 && (zl(), Ua());
      }
    }, a.flushPassiveEffects = ua, a.flushSync = li, a.focusWithin = function(r, i) {
      if (!Me)
        throw Error(v(363));
      for (r = Jc(r), i = Yd(r, i), i = Array.from(i), r = 0; r < i.length; ) {
        var f = i[r++];
        if (!_n(f)) {
          if (f.tag === 5 && pa(f.stateNode))
            return !0;
          for (f = f.child; f !== null; )
            i.push(f), f = f.sibling;
        }
      }
      return !1;
    }, a.getCurrentUpdatePriority = function() {
      return kt;
    }, a.getFindAllNodesFailureDescription = function(r, i) {
      if (!Me)
        throw Error(v(363));
      var f = 0, p = [];
      r = [Jc(r), 0];
      for (var S = 0; S < r.length; ) {
        var x = r[S++], N = r[S++], F = i[N];
        if ((x.tag !== 5 || !_n(x)) && (Zc(x, F) && (p.push(zn(F)), N++, N > f && (f = N)), N < i.length))
          for (x = x.child; x !== null; )
            r.push(x, N), x = x.sibling;
      }
      if (f < i.length) {
        for (r = []; f < i.length; f++)
          r.push(zn(i[f]));
        return `findAllNodes was able to match part of the selector:
  ` + (p.join(" > ") + `

No matching component was found for:
  `) + r.join(" > ");
      }
      return null;
    }, a.getPublicRootInstance = function(r) {
      if (r = r.current, !r.child)
        return null;
      switch (r.child.tag) {
        case 5:
          return Ie(r.child.stateNode);
        default:
          return r.child.stateNode;
      }
    }, a.injectIntoDevTools = function(r) {
      if (r = { bundleType: r.bundleType, version: r.version, rendererPackageName: r.rendererPackageName, rendererConfig: r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: g.ReactCurrentDispatcher, findHostInstanceByFiber: gp, findFiberByHostInstance: r.findFiberByHostInstance || eh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0" }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        r = !1;
      else {
        var i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (i.isDisabled || !i.supportsFiber)
          r = !0;
        else {
          try {
            Io = i.inject(r), ei = i;
          } catch {
          }
          r = !!i.checkDCE;
        }
      }
      return r;
    }, a.isAlreadyRendering = function() {
      return !1;
    }, a.observeVisibleRects = function(r, i, f, p) {
      if (!Me)
        throw Error(v(363));
      r = $c(r, i);
      var S = Cr(r, f, p).disconnect;
      return { disconnect: function() {
        S();
      } };
    }, a.registerMutableSourceForHydration = function(r, i) {
      var f = i._getVersion;
      f = f(i._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [i, f] : r.mutableSourceEagerHydrationData.push(i, f);
    }, a.runWithPriority = function(r, i) {
      var f = kt;
      try {
        return kt = r, i();
      } finally {
        kt = f;
      }
    }, a.shouldError = function() {
      return null;
    }, a.shouldSuspend = function() {
      return !1;
    }, a.updateContainer = function(r, i, f, p) {
      var S = i.current, x = dr(), N = hr(S);
      return f = Zd(f), i.context === null ? i.context = f : i.pendingContext = f, i = ni(x, N), i.payload = { element: r }, p = p === void 0 ? null : p, p !== null && (i.callback = p), r = Yi(S, i, N), r !== null && (oa(r, S, N, x), Jo(r, S, N)), N;
    }, a;
  }), kg;
}
var kv = {}, ib = {
  get exports() {
    return kv;
  },
  set exports(o) {
    kv = o;
  }
};
/**
 * @license React
 * react-reconciler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A2;
function lb() {
  return A2 || (A2 = 1, process.env.NODE_ENV !== "production" && (ib.exports = function(e) {
    var a = {}, s = Yt, u = l0(), d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = !1;
    function g(t) {
      v = t;
    }
    function _(t) {
      if (!v) {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++)
          l[c - 1] = arguments[c];
        E("warn", t, l);
      }
    }
    function m(t) {
      if (!v) {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++)
          l[c - 1] = arguments[c];
        E("error", t, l);
      }
    }
    function E(t, n, l) {
      {
        var c = d.ReactDebugCurrentFrame, h = c.getStackAddendum();
        h !== "" && (n += "%s", l = l.concat([h]));
        var y = l.map(function(C) {
          return String(C);
        });
        y.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, y);
      }
    }
    var T = Object.assign;
    function w(t) {
      return t._reactInternals;
    }
    function M(t, n) {
      t._reactInternals = n;
    }
    var R = !1, z = !1, k = !1, I = !1, j = !1, G = !0, Z = !0, U = !0, V = 0, X = 1, le = 2, ee = 3, Q = 4, K = 5, xe = 6, pe = 7, ke = 8, lt = 9, Ie = 10, Le = 11, oe = 12, fe = 13, de = 14, Se = 15, Xe = 16, Ne = 17, Re = 18, nt = 19, Ct = 21, Ue = 22, st = 23, rn = 24, cn = 25, Ft = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), Gt = Symbol.for("react.fragment"), fn = Symbol.for("react.strict_mode"), Cn = Symbol.for("react.profiler"), ar = Symbol.for("react.provider"), ir = Symbol.for("react.context"), Qn = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), dt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), Wt = Symbol.for("react.scope"), _n = Symbol.for("react.debug_trace_mode"), Oa = Symbol.for("react.offscreen"), pa = Symbol.for("react.legacy_hidden"), Cr = Symbol.for("react.cache"), Gi = Symbol.for("react.tracing_marker"), Za = Symbol.iterator, $l = "@@iterator";
    function be(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = Za && t[Za] || t[$l];
      return typeof n == "function" ? n : null;
    }
    function rt(t, n, l) {
      var c = t.displayName;
      if (c)
        return c;
      var h = n.displayName || n.name || "";
      return h !== "" ? l + "(" + h + ")" : l;
    }
    function yt(t) {
      return t.displayName || "Context";
    }
    function $e(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Gt:
          return "Fragment";
        case Ce:
          return "Portal";
        case Cn:
          return "Profiler";
        case fn:
          return "StrictMode";
        case Ee:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ir:
            var n = t;
            return yt(n) + ".Consumer";
          case ar:
            var l = t;
            return yt(l._context) + ".Provider";
          case Qn:
            return rt(t, t.render, "ForwardRef");
          case dt:
            var c = t.displayName || null;
            return c !== null ? c : $e(t.type) || "Memo";
          case Ke: {
            var h = t, y = h._payload, C = h._init;
            try {
              return $e(C(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function En(t, n, l) {
      var c = n.displayName || n.name || "";
      return t.displayName || (c !== "" ? l + "(" + c + ")" : l);
    }
    function Er(t) {
      return t.displayName || "Context";
    }
    function Ye(t) {
      var n = t.tag, l = t.type;
      switch (n) {
        case rn:
          return "Cache";
        case lt:
          var c = l;
          return Er(c) + ".Consumer";
        case Ie:
          var h = l;
          return Er(h._context) + ".Provider";
        case Re:
          return "DehydratedFragment";
        case Le:
          return En(l, l.render, "ForwardRef");
        case pe:
          return "Fragment";
        case K:
          return l;
        case Q:
          return "Portal";
        case ee:
          return "Root";
        case xe:
          return "Text";
        case Xe:
          return $e(l);
        case ke:
          return l === fn ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case oe:
          return "Profiler";
        case Ct:
          return "Scope";
        case fe:
          return "Suspense";
        case nt:
          return "SuspenseList";
        case cn:
          return "TracingMarker";
        case X:
        case V:
        case Ne:
        case le:
        case de:
        case Se:
          if (typeof l == "function")
            return l.displayName || l.name || null;
          if (typeof l == "string")
            return l;
          break;
      }
      return null;
    }
    var Ge = 0, pn = 1, Xt = 2, pt = 4, ma = 16, hi = 32, yl = 64, Dt = 128, ga = 256, ya = 512, La = 1024, Mr = 2048, Aa = 4096, pi = 8192, Sl = 16384, Fo = Mr | pt | yl | ya | La | Sl, qs = 32767, _l = 32768, lr = 65536, A = 131072, he = 1048576, we = 2097152, Je = 4194304, Ot = 8388608, bt = 16777216, St = 33554432, gt = pt | La | 0, Rn = Xt | pt | ma | hi | ya | Aa | pi, an = pt | yl | ya | pi, ln = Mr | ma, bn = Je | Ot | we, ji = d.ReactCurrentOwner;
    function xl(t) {
      var n = t, l = t;
      if (t.alternate)
        for (; n.return; )
          n = n.return;
      else {
        var c = n;
        do
          n = c, (n.flags & (Xt | Aa)) !== Ge && (l = n.return), c = n.return;
        while (c);
      }
      return n.tag === ee ? l : null;
    }
    function Pa(t) {
      return xl(t) === t;
    }
    function hc(t) {
      {
        var n = ji.current;
        if (n !== null && n.tag === X) {
          var l = n, c = l.stateNode;
          c._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(l) || "A component"), c._warnedAboutRefsInRender = !0;
        }
      }
      var h = w(t);
      return h ? xl(h) === h : !1;
    }
    function es(t) {
      if (xl(t) !== t)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Ho(t) {
      var n = t.alternate;
      if (!n) {
        var l = xl(t);
        if (l === null)
          throw new Error("Unable to find node on an unmounted component.");
        return l !== t ? null : t;
      }
      for (var c = t, h = n; ; ) {
        var y = c.return;
        if (y === null)
          break;
        var C = y.alternate;
        if (C === null) {
          var b = y.return;
          if (b !== null) {
            c = h = b;
            continue;
          }
          break;
        }
        if (y.child === C.child) {
          for (var D = y.child; D; ) {
            if (D === c)
              return es(y), t;
            if (D === h)
              return es(y), n;
            D = D.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (c.return !== h.return)
          c = y, h = C;
        else {
          for (var O = !1, P = y.child; P; ) {
            if (P === c) {
              O = !0, c = y, h = C;
              break;
            }
            if (P === h) {
              O = !0, h = y, c = C;
              break;
            }
            P = P.sibling;
          }
          if (!O) {
            for (P = C.child; P; ) {
              if (P === c) {
                O = !0, c = C, h = y;
                break;
              }
              if (P === h) {
                O = !0, h = C, c = y;
                break;
              }
              P = P.sibling;
            }
            if (!O)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (c.alternate !== h)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (c.tag !== ee)
        throw new Error("Unable to find node on an unmounted component.");
      return c.stateNode.current === c ? t : n;
    }
    function Ws(t) {
      var n = Ho(t);
      return n !== null ? pd(n) : null;
    }
    function pd(t) {
      if (t.tag === K || t.tag === xe)
        return t;
      for (var n = t.child; n !== null; ) {
        var l = pd(n);
        if (l !== null)
          return l;
        n = n.sibling;
      }
      return null;
    }
    function vc(t) {
      var n = Ho(t);
      return n !== null ? Cl(n) : null;
    }
    function Cl(t) {
      if (t.tag === K || t.tag === xe)
        return t;
      for (var n = t.child; n !== null; ) {
        if (n.tag !== Q) {
          var l = Cl(n);
          if (l !== null)
            return l;
        }
        n = n.sibling;
      }
      return null;
    }
    var Bi = Array.isArray;
    function Tt(t) {
      return Bi(t);
    }
    var Qt = e.getPublicInstance, Ii = e.getRootHostContext, br = e.getChildHostContext, jr = e.prepareForCommit, El = e.resetAfterCommit, ts = e.createInstance, Tr = e.appendInitialChild, Xs = e.finalizeInitialChildren, pc = e.prepareUpdate, Go = e.shouldSetTextContent, Qs = e.createTextInstance, mc = e.scheduleTimeout, ka = e.cancelTimeout, gc = e.noTimeout, jo = e.isPrimaryRenderer, Jv = e.warnsIfNotActing, Rr = e.supportsMutation, bl = e.supportsPersistence, wr = e.supportsHydration, Bo = e.getInstanceFromNode;
    e.beforeActiveInstanceBlur, e.afterActiveInstanceBlur;
    var Zv = e.preparePortalMount;
    e.prepareScopeUpdate, e.getInstanceFromScope;
    var $v = e.getCurrentEventPriority, yc = e.detachDeletedInstance, md = e.supportsMicrotasks, Sc = e.scheduleMicrotask, $a = e.supportsTestSelectors, ep = e.findFiberRoot, _c = e.getBoundingRect, kt = e.getTextContent, ns = e.isHiddenSubtree, xc = e.matchAccessibilityRole, gd = e.setFocusIfFocusable, tp = e.setupIntersectionObserver, np = e.appendChild, Kn = e.appendChildToContainer, Cc = e.commitTextUpdate, rp = e.commitMount, Ec = e.commitUpdate, ap = e.insertBefore, Io = e.insertInContainerBefore, ei = e.removeChild, ip = e.removeChildFromContainer, yd = e.resetTextContent, za = e.hideInstance, mi = e.hideTextInstance, Vo = e.unhideInstance, bc = e.unhideTextInstance, Sd = e.clearContainer, lp = e.cloneInstance, Ua = e.createContainerChildSet, Tl = e.appendChildToContainerChildSet, rs = e.finalizeContainerChildren, as = e.replaceContainerChildren, Ks = e.cloneHiddenInstance, na = e.cloneHiddenTextInstance, Sa = e.canHydrateInstance, Rl = e.canHydrateTextInstance, gi = e.canHydrateSuspenseInstance, ti = e.isSuspenseInstancePending, yi = e.isSuspenseInstanceFallback, _d = e.getSuspenseInstanceFallbackErrorDetails, Tc = e.registerSuspenseInstanceRetry, is = e.getNextHydratableSibling, ra = e.getFirstHydratableChild, _a = e.getFirstHydratableChildWithinContainer, xn = e.getFirstHydratableChildWithinSuspenseInstance, Js = e.hydrateInstance, Fa = e.hydrateTextInstance, xd = e.hydrateSuspenseInstance, Cd = e.getNextHydratableInstanceAfterSuspenseInstance, Rc = e.commitHydratedContainer, wc = e.commitHydratedSuspenseInstance, Ed = e.clearSuspenseBoundary, Yo = e.clearSuspenseBoundaryFromContainer, bd = e.shouldDeleteUnhydratedTailInstances, ls = e.didNotMatchHydratedContainerTextInstance, Dc = e.didNotMatchHydratedTextInstance, sp = e.didNotHydrateInstanceWithinContainer, qo = e.didNotHydrateInstanceWithinSuspenseInstance, op = e.didNotHydrateInstance, Ha = e.didNotFindHydratableInstanceWithinContainer, Wo = e.didNotFindHydratableTextInstanceWithinContainer, Xo = e.didNotFindHydratableSuspenseInstanceWithinContainer, ss = e.didNotFindHydratableInstanceWithinSuspenseInstance, Nc = e.didNotFindHydratableTextInstanceWithinSuspenseInstance, Mc = e.didNotFindHydratableSuspenseInstanceWithinSuspenseInstance, Td = e.didNotFindHydratableInstance, Oc = e.didNotFindHydratableTextInstance, Lc = e.didNotFindHydratableSuspenseInstance, os = e.errorHydratingContainer, Dr = 0, Vi, Qo, Ac, Ga, Si, Ko, Pc;
    function ni() {
    }
    ni.__reactDisabledLog = !0;
    function Yi() {
      {
        if (Dr === 0) {
          Vi = console.log, Qo = console.info, Ac = console.warn, Ga = console.error, Si = console.group, Ko = console.groupCollapsed, Pc = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: ni,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Dr++;
      }
    }
    function Jo() {
      {
        if (Dr--, Dr === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, t, {
              value: Vi
            }),
            info: T({}, t, {
              value: Qo
            }),
            warn: T({}, t, {
              value: Ac
            }),
            error: T({}, t, {
              value: Ga
            }),
            group: T({}, t, {
              value: Si
            }),
            groupCollapsed: T({}, t, {
              value: Ko
            }),
            groupEnd: T({}, t, {
              value: Pc
            })
          });
        }
        Dr < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Zo = d.ReactCurrentDispatcher, us;
    function _i(t, n, l) {
      {
        if (us === void 0)
          try {
            throw Error();
          } catch (h) {
            var c = h.stack.trim().match(/\n( *(at )?)/);
            us = c && c[1] || "";
          }
        return `
` + us + t;
      }
    }
    var $o = !1, cs;
    {
      var eu = typeof WeakMap == "function" ? WeakMap : Map;
      cs = new eu();
    }
    function tu(t, n) {
      if (!t || $o)
        return "";
      {
        var l = cs.get(t);
        if (l !== void 0)
          return l;
      }
      var c;
      $o = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = Zo.current, Zo.current = null, Yi();
      try {
        if (n) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (ce) {
              c = ce;
            }
            Reflect.construct(t, [], C);
          } else {
            try {
              C.call();
            } catch (ce) {
              c = ce;
            }
            t.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            c = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && c && typeof ce.stack == "string") {
          for (var b = ce.stack.split(`
`), D = c.stack.split(`
`), O = b.length - 1, P = D.length - 1; O >= 1 && P >= 0 && b[O] !== D[P]; )
            P--;
          for (; O >= 1 && P >= 0; O--, P--)
            if (b[O] !== D[P]) {
              if (O !== 1 || P !== 1)
                do
                  if (O--, P--, P < 0 || b[O] !== D[P]) {
                    var Y = `
` + b[O].replace(" at new ", " at ");
                    return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), typeof t == "function" && cs.set(t, Y), Y;
                  }
                while (O >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        $o = !1, Zo.current = y, Jo(), Error.prepareStackTrace = h;
      }
      var $ = t ? t.displayName || t.name : "", ie = $ ? _i($) : "";
      return typeof t == "function" && cs.set(t, ie), ie;
    }
    function Rd(t, n, l) {
      return tu(t, !0);
    }
    function nu(t, n, l) {
      return tu(t, !1);
    }
    function kc(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function wl(t, n, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return tu(t, kc(t));
      if (typeof t == "string")
        return _i(t);
      switch (t) {
        case Ee:
          return _i("Suspense");
        case Me:
          return _i("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Qn:
            return nu(t.render);
          case dt:
            return wl(t.type, n, l);
          case Ke: {
            var c = t, h = c._payload, y = c._init;
            try {
              return wl(y(h), n, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Zs = Object.prototype.hasOwnProperty, zc = {}, Uc = d.ReactDebugCurrentFrame;
    function xi(t) {
      if (t) {
        var n = t._owner, l = wl(t.type, t._source, n ? n.type : null);
        Uc.setExtraStackFrame(l);
      } else
        Uc.setExtraStackFrame(null);
    }
    function xa(t, n, l, c, h) {
      {
        var y = Function.call.bind(Zs);
        for (var C in t)
          if (y(t, C)) {
            var b = void 0;
            try {
              if (typeof t[C] != "function") {
                var D = Error((c || "React class") + ": " + l + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              b = t[C](n, C, c, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              b = O;
            }
            b && !(b instanceof Error) && (xi(h), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", l, C, typeof b), xi(null)), b instanceof Error && !(b.message in zc) && (zc[b.message] = !0, xi(h), m("Failed %s type: %s", l, b.message), xi(null));
          }
      }
    }
    var Dl = [], Or;
    Or = [];
    var aa = -1;
    function ia(t) {
      return {
        current: t
      };
    }
    function mn(t, n) {
      if (aa < 0) {
        m("Unexpected pop.");
        return;
      }
      n !== Or[aa] && m("Unexpected Fiber popped."), t.current = Dl[aa], Dl[aa] = null, Or[aa] = null, aa--;
    }
    function jn(t, n, l) {
      aa++, Dl[aa] = t.current, Or[aa] = l, t.current = n;
    }
    var qi;
    qi = {};
    var Br = {};
    Object.freeze(Br);
    var ja = ia(Br), zt = ia(!1), fs = Br;
    function Wi(t, n, l) {
      return l && Nr(n) ? fs : ja.current;
    }
    function ru(t, n, l) {
      {
        var c = t.stateNode;
        c.__reactInternalMemoizedUnmaskedChildContext = n, c.__reactInternalMemoizedMaskedChildContext = l;
      }
    }
    function Ci(t, n) {
      {
        var l = t.type, c = l.contextTypes;
        if (!c)
          return Br;
        var h = t.stateNode;
        if (h && h.__reactInternalMemoizedUnmaskedChildContext === n)
          return h.__reactInternalMemoizedMaskedChildContext;
        var y = {};
        for (var C in c)
          y[C] = n[C];
        {
          var b = Ye(t) || "Unknown";
          xa(c, y, "context", b);
        }
        return h && ru(t, n, y), y;
      }
    }
    function ds() {
      return zt.current;
    }
    function Nr(t) {
      {
        var n = t.childContextTypes;
        return n != null;
      }
    }
    function dn(t) {
      mn(zt, t), mn(ja, t);
    }
    function wn(t) {
      mn(zt, t), mn(ja, t);
    }
    function Bn(t, n, l) {
      {
        if (ja.current !== Br)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        jn(ja, n, t), jn(zt, l, t);
      }
    }
    function $s(t, n, l) {
      {
        var c = t.stateNode, h = n.childContextTypes;
        if (typeof c.getChildContext != "function") {
          {
            var y = Ye(t) || "Unknown";
            qi[y] || (qi[y] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", y, y));
          }
          return l;
        }
        var C = c.getChildContext();
        for (var b in C)
          if (!(b in h))
            throw new Error((Ye(t) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
        {
          var D = Ye(t) || "Unknown";
          xa(h, C, "child context", D);
        }
        return T({}, l, C);
      }
    }
    function Xi(t) {
      {
        var n = t.stateNode, l = n && n.__reactInternalMemoizedMergedChildContext || Br;
        return fs = ja.current, jn(ja, l, t), jn(zt, zt.current, t), !0;
      }
    }
    function hs(t, n, l) {
      {
        var c = t.stateNode;
        if (!c)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (l) {
          var h = $s(t, n, fs);
          c.__reactInternalMemoizedMergedChildContext = h, mn(zt, t), mn(ja, t), jn(ja, h, t), jn(zt, l, t);
        } else
          mn(zt, t), jn(zt, l, t);
      }
    }
    function up(t) {
      {
        if (!Pa(t) || t.tag !== X)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var n = t;
        do {
          switch (n.tag) {
            case ee:
              return n.stateNode.context;
            case X: {
              var l = n.type;
              if (Nr(l))
                return n.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          n = n.return;
        } while (n !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Dn = 0, au = 1, et = 0, Rt = 1, _t = 2, Ht = 8, Ir = 16, iu = Math.clz32 ? Math.clz32 : Dd, Fc = Math.log, wd = Math.LN2;
    function Dd(t) {
      var n = t >>> 0;
      return n === 0 ? 32 : 31 - (Fc(n) / wd | 0) | 0;
    }
    var lu = 31, ue = 0, In = 0, it = 1, Nl = 2, ri = 4, Ba = 8, Ia = 16, Qi = 32, Ei = 4194240, vs = 64, eo = 128, su = 256, ou = 512, uu = 1024, cu = 2048, to = 4096, fu = 8192, du = 16384, hu = 32768, Hc = 65536, vu = 131072, Gc = 262144, jc = 524288, pu = 1048576, mu = 2097152, no = 130023424, bi = 4194304, Bc = 8388608, Ic = 16777216, Vc = 33554432, Ki = 67108864, gu = bi, Ml = 134217728, Nd = 268435455, ps = 268435456, Ji = 536870912, Vr = 1073741824;
    function Md(t) {
      {
        if (t & it)
          return "Sync";
        if (t & Nl)
          return "InputContinuousHydration";
        if (t & ri)
          return "InputContinuous";
        if (t & Ba)
          return "DefaultHydration";
        if (t & Ia)
          return "Default";
        if (t & Qi)
          return "TransitionHydration";
        if (t & Ei)
          return "Transition";
        if (t & no)
          return "Retry";
        if (t & Ml)
          return "SelectiveHydration";
        if (t & ps)
          return "IdleHydration";
        if (t & Ji)
          return "Idle";
        if (t & Vr)
          return "Offscreen";
      }
    }
    var sn = -1, yu = vs, sr = bi;
    function Vn(t) {
      switch (Zi(t)) {
        case it:
          return it;
        case Nl:
          return Nl;
        case ri:
          return ri;
        case Ba:
          return Ba;
        case Ia:
          return Ia;
        case Qi:
          return Qi;
        case vs:
        case eo:
        case su:
        case ou:
        case uu:
        case cu:
        case to:
        case fu:
        case du:
        case hu:
        case Hc:
        case vu:
        case Gc:
        case jc:
        case pu:
        case mu:
          return t & Ei;
        case bi:
        case Bc:
        case Ic:
        case Vc:
        case Ki:
          return t & no;
        case Ml:
          return Ml;
        case ps:
          return ps;
        case Ji:
          return Ji;
        case Vr:
          return Vr;
        default:
          return m("Should have found matching lanes. This is a bug in React."), t;
      }
    }
    function ro(t, n) {
      var l = t.pendingLanes;
      if (l === ue)
        return ue;
      var c = ue, h = t.suspendedLanes, y = t.pingedLanes, C = l & Nd;
      if (C !== ue) {
        var b = C & ~h;
        if (b !== ue)
          c = Vn(b);
        else {
          var D = C & y;
          D !== ue && (c = Vn(D));
        }
      } else {
        var O = l & ~h;
        O !== ue ? c = Vn(O) : y !== ue && (c = Vn(y));
      }
      if (c === ue)
        return ue;
      if (n !== ue && n !== c && (n & h) === ue) {
        var P = Zi(c), Y = Zi(n);
        if (P >= Y || P === Ia && (Y & Ei) !== ue)
          return n;
      }
      (c & ri) !== ue && (c |= l & Ia);
      var $ = t.entangledLanes;
      if ($ !== ue)
        for (var ie = t.entanglements, ce = c & $; ce > 0; ) {
          var se = $i(ce), We = 1 << se;
          c |= ie[se], ce &= ~We;
        }
      return c;
    }
    function Od(t, n) {
      for (var l = t.eventTimes, c = sn; n > 0; ) {
        var h = $i(n), y = 1 << h, C = l[h];
        C > c && (c = C), n &= ~y;
      }
      return c;
    }
    function Ld(t, n) {
      switch (t) {
        case it:
        case Nl:
        case ri:
          return n + 250;
        case Ba:
        case Ia:
        case Qi:
        case vs:
        case eo:
        case su:
        case ou:
        case uu:
        case cu:
        case to:
        case fu:
        case du:
        case hu:
        case Hc:
        case vu:
        case Gc:
        case jc:
        case pu:
        case mu:
          return n + 5e3;
        case bi:
        case Bc:
        case Ic:
        case Vc:
        case Ki:
          return sn;
        case Ml:
        case ps:
        case Ji:
        case Vr:
          return sn;
        default:
          return m("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function Ad(t, n) {
      for (var l = t.pendingLanes, c = t.suspendedLanes, h = t.pingedLanes, y = t.expirationTimes, C = l; C > 0; ) {
        var b = $i(C), D = 1 << b, O = y[b];
        O === sn ? ((D & c) === ue || (D & h) !== ue) && (y[b] = Ld(D, n)) : O <= n && (t.expiredLanes |= D), C &= ~D;
      }
    }
    function Pd(t) {
      return Vn(t.pendingLanes);
    }
    function ao(t) {
      var n = t.pendingLanes & ~Vr;
      return n !== ue ? n : n & Vr ? Vr : ue;
    }
    function kd(t) {
      return (t & it) !== ue;
    }
    function io(t) {
      return (t & Nd) !== ue;
    }
    function Yc(t) {
      return (t & no) === t;
    }
    function zd(t) {
      var n = it | ri | Ia;
      return (t & n) === ue;
    }
    function qc(t) {
      return (t & Ei) === t;
    }
    function ms(t, n) {
      var l = Nl | ri | Ba | Ia;
      return (n & l) !== ue;
    }
    function Ud(t, n) {
      return (n & t.expiredLanes) !== ue;
    }
    function Su(t) {
      return (t & Ei) !== ue;
    }
    function lo() {
      var t = yu;
      return yu <<= 1, (yu & Ei) === ue && (yu = vs), t;
    }
    function cp() {
      var t = sr;
      return sr <<= 1, (sr & no) === ue && (sr = bi), t;
    }
    function Zi(t) {
      return t & -t;
    }
    function Ol(t) {
      return Zi(t);
    }
    function $i(t) {
      return 31 - iu(t);
    }
    function gs(t) {
      return $i(t);
    }
    function Nn(t, n) {
      return (t & n) !== ue;
    }
    function ys(t, n) {
      return (t & n) === n;
    }
    function at(t, n) {
      return t | n;
    }
    function so(t, n) {
      return t & ~n;
    }
    function Ss(t, n) {
      return t & n;
    }
    function _u(t) {
      return t;
    }
    function xu(t, n) {
      return t !== In && t < n ? t : n;
    }
    function _s(t) {
      for (var n = [], l = 0; l < lu; l++)
        n.push(t);
      return n;
    }
    function xs(t, n, l) {
      t.pendingLanes |= n, n !== Ji && (t.suspendedLanes = ue, t.pingedLanes = ue);
      var c = t.eventTimes, h = gs(n);
      c[h] = l;
    }
    function oo(t, n) {
      t.suspendedLanes |= n, t.pingedLanes &= ~n;
      for (var l = t.expirationTimes, c = n; c > 0; ) {
        var h = $i(c), y = 1 << h;
        l[h] = sn, c &= ~y;
      }
    }
    function or(t, n, l) {
      t.pingedLanes |= t.suspendedLanes & n;
    }
    function fp(t, n) {
      var l = t.pendingLanes & ~n;
      t.pendingLanes = n, t.suspendedLanes = ue, t.pingedLanes = ue, t.expiredLanes &= n, t.mutableReadLanes &= n, t.entangledLanes &= n;
      for (var c = t.entanglements, h = t.eventTimes, y = t.expirationTimes, C = l; C > 0; ) {
        var b = $i(C), D = 1 << b;
        c[b] = ue, h[b] = sn, y[b] = sn, C &= ~D;
      }
    }
    function Wc(t, n) {
      for (var l = t.entangledLanes |= n, c = t.entanglements, h = l; h; ) {
        var y = $i(h), C = 1 << y;
        C & n | c[y] & n && (c[y] |= n), h &= ~C;
      }
    }
    function Cu(t, n) {
      var l = Zi(n), c;
      switch (l) {
        case ri:
          c = Nl;
          break;
        case Ia:
          c = Ba;
          break;
        case vs:
        case eo:
        case su:
        case ou:
        case uu:
        case cu:
        case to:
        case fu:
        case du:
        case hu:
        case Hc:
        case vu:
        case Gc:
        case jc:
        case pu:
        case mu:
        case bi:
        case Bc:
        case Ic:
        case Vc:
        case Ki:
          c = Qi;
          break;
        case Ji:
          c = ps;
          break;
        default:
          c = In;
          break;
      }
      return (c & (t.suspendedLanes | n)) !== In ? In : c;
    }
    function ur(t, n, l) {
      if (Wr)
        for (var c = t.pendingUpdatersLaneMap; l > 0; ) {
          var h = gs(l), y = 1 << h, C = c[h];
          C.add(n), l &= ~y;
        }
    }
    function Fd(t, n) {
      if (Wr)
        for (var l = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; n > 0; ) {
          var h = gs(n), y = 1 << h, C = l[h];
          C.size > 0 && (C.forEach(function(b) {
            var D = b.alternate;
            (D === null || !c.has(D)) && c.add(b);
          }), C.clear()), n &= ~y;
        }
    }
    function Fe(t, n) {
      return null;
    }
    var Lr = it, Ll = ri, Cs = Ia, Xc = Ji, Ti = In;
    function Yr() {
      return Ti;
    }
    function kn(t) {
      Ti = t;
    }
    function Hd(t, n) {
      var l = Ti;
      try {
        return Ti = t, n();
      } finally {
        Ti = l;
      }
    }
    function Gd(t, n) {
      return t !== 0 && t < n ? t : n;
    }
    function jd(t, n) {
      return t === 0 || t > n ? t : n;
    }
    function Eu(t, n) {
      return t !== 0 && t < n;
    }
    function bu(t) {
      var n = Zi(t);
      return Eu(Lr, n) ? Eu(Ll, n) ? io(n) ? Cs : Xc : Ll : Lr;
    }
    var Jn = u.unstable_scheduleCallback, Va = u.unstable_cancelCallback, ai = u.unstable_shouldYield, Qc = u.unstable_requestPaint, Yn = u.unstable_now, qr = u.unstable_ImmediatePriority, Kc = u.unstable_UserBlockingPriority, Ar = u.unstable_NormalPriority, Bd = u.unstable_IdlePriority, Id = u.unstable_yieldValue, Vd = u.unstable_setDisableYieldValue, Al = null, cr = null, De = null, la = !1, Wr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Tu(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (n.isDisabled)
        return !0;
      if (!n.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        G && (t = T({}, t, {
          getLaneLabelMap: $c,
          injectProfilingHooks: Yd
        })), Al = n.inject(t), cr = n;
      } catch (l) {
        m("React instrumentation encountered an error: %s.", l);
      }
      return !!n.checkDCE;
    }
    function Ru(t, n) {
      if (cr && typeof cr.onScheduleFiberRoot == "function")
        try {
          cr.onScheduleFiberRoot(Al, t, n);
        } catch (l) {
          la || (la = !0, m("React instrumentation encountered an error: %s", l));
        }
    }
    function uo(t, n) {
      if (cr && typeof cr.onCommitFiberRoot == "function")
        try {
          var l = (t.current.flags & Dt) === Dt;
          if (Z) {
            var c;
            switch (n) {
              case Lr:
                c = qr;
                break;
              case Ll:
                c = Kc;
                break;
              case Cs:
                c = Ar;
                break;
              case Xc:
                c = Bd;
                break;
              default:
                c = Ar;
                break;
            }
            cr.onCommitFiberRoot(Al, t, c, l);
          }
        } catch (h) {
          la || (la = !0, m("React instrumentation encountered an error: %s", h));
        }
    }
    function Jc(t) {
      if (cr && typeof cr.onPostCommitFiberRoot == "function")
        try {
          cr.onPostCommitFiberRoot(Al, t);
        } catch (n) {
          la || (la = !0, m("React instrumentation encountered an error: %s", n));
        }
    }
    function Zc(t) {
      if (cr && typeof cr.onCommitFiberUnmount == "function")
        try {
          cr.onCommitFiberUnmount(Al, t);
        } catch (n) {
          la || (la = !0, m("React instrumentation encountered an error: %s", n));
        }
    }
    function zn(t) {
      if (typeof Id == "function" && (Vd(t), g(t)), cr && typeof cr.setStrictMode == "function")
        try {
          cr.setStrictMode(Al, t);
        } catch (n) {
          la || (la = !0, m("React instrumentation encountered an error: %s", n));
        }
    }
    function Yd(t) {
      De = t;
    }
    function $c() {
      {
        for (var t = /* @__PURE__ */ new Map(), n = 1, l = 0; l < lu; l++) {
          var c = Md(n);
          t.set(n, c), n *= 2;
        }
        return t;
      }
    }
    function dp(t) {
      De !== null && typeof De.markCommitStarted == "function" && De.markCommitStarted(t);
    }
    function co() {
      De !== null && typeof De.markCommitStopped == "function" && De.markCommitStopped();
    }
    function Pl(t) {
      De !== null && typeof De.markComponentRenderStarted == "function" && De.markComponentRenderStarted(t);
    }
    function hn() {
      De !== null && typeof De.markComponentRenderStopped == "function" && De.markComponentRenderStopped();
    }
    function Et(t) {
      De !== null && typeof De.markComponentPassiveEffectMountStarted == "function" && De.markComponentPassiveEffectMountStarted(t);
    }
    function Zn() {
      De !== null && typeof De.markComponentPassiveEffectMountStopped == "function" && De.markComponentPassiveEffectMountStopped();
    }
    function Un(t) {
      De !== null && typeof De.markComponentPassiveEffectUnmountStarted == "function" && De.markComponentPassiveEffectUnmountStarted(t);
    }
    function fr() {
      De !== null && typeof De.markComponentPassiveEffectUnmountStopped == "function" && De.markComponentPassiveEffectUnmountStopped();
    }
    function sa(t) {
      De !== null && typeof De.markComponentLayoutEffectMountStarted == "function" && De.markComponentLayoutEffectMountStarted(t);
    }
    function Es() {
      De !== null && typeof De.markComponentLayoutEffectMountStopped == "function" && De.markComponentLayoutEffectMountStopped();
    }
    function Fn(t) {
      De !== null && typeof De.markComponentLayoutEffectUnmountStarted == "function" && De.markComponentLayoutEffectUnmountStarted(t);
    }
    function bs() {
      De !== null && typeof De.markComponentLayoutEffectUnmountStopped == "function" && De.markComponentLayoutEffectUnmountStopped();
    }
    function kl(t, n, l) {
      De !== null && typeof De.markComponentErrored == "function" && De.markComponentErrored(t, n, l);
    }
    function wu(t, n, l) {
      De !== null && typeof De.markComponentSuspended == "function" && De.markComponentSuspended(t, n, l);
    }
    function ef(t) {
      De !== null && typeof De.markLayoutEffectsStarted == "function" && De.markLayoutEffectsStarted(t);
    }
    function fo() {
      De !== null && typeof De.markLayoutEffectsStopped == "function" && De.markLayoutEffectsStopped();
    }
    function Xr(t) {
      De !== null && typeof De.markPassiveEffectsStarted == "function" && De.markPassiveEffectsStarted(t);
    }
    function tf() {
      De !== null && typeof De.markPassiveEffectsStopped == "function" && De.markPassiveEffectsStopped();
    }
    function Du(t) {
      De !== null && typeof De.markRenderStarted == "function" && De.markRenderStarted(t);
    }
    function Ri() {
      De !== null && typeof De.markRenderYielded == "function" && De.markRenderYielded();
    }
    function zl() {
      De !== null && typeof De.markRenderStopped == "function" && De.markRenderStopped();
    }
    function Nu(t) {
      De !== null && typeof De.markRenderScheduled == "function" && De.markRenderScheduled(t);
    }
    function nf(t, n) {
      De !== null && typeof De.markForceUpdateScheduled == "function" && De.markForceUpdateScheduled(t, n);
    }
    function ii(t, n) {
      De !== null && typeof De.markStateUpdateScheduled == "function" && De.markStateUpdateScheduled(t, n);
    }
    function Mu(t, n) {
      return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n;
    }
    var Hn = typeof Object.is == "function" ? Object.is : Mu, Ca = null, Ul = !1, ho = !1;
    function vo(t) {
      Ca === null ? Ca = [t] : Ca.push(t);
    }
    function Ou(t) {
      Ul = !0, vo(t);
    }
    function dr() {
      Ul && hr();
    }
    function hr() {
      if (!ho && Ca !== null) {
        ho = !0;
        var t = 0, n = Yr();
        try {
          var l = !0, c = Ca;
          for (kn(Lr); t < c.length; t++) {
            var h = c[t];
            do
              h = h(l);
            while (h !== null);
          }
          Ca = null, Ul = !1;
        } catch (y) {
          throw Ca !== null && (Ca = Ca.slice(t + 1)), Jn(qr, hr), y;
        } finally {
          kn(n), ho = !1;
        }
      }
      return null;
    }
    function oa(t) {
      var n = t.current.memoizedState;
      return n.isDehydrated;
    }
    var qn = [], Fl = 0, Ts = null, Rs = 0, Ea = [], Wn = 0, el = null, li = 1, Ya = "";
    function Hl(t) {
      return ua(), (t.flags & he) !== Ge;
    }
    function qd(t) {
      return ua(), Rs;
    }
    function Wd() {
      var t = Ya, n = li, l = n & ~Xd(n);
      return l.toString(32) + t;
    }
    function wi(t, n) {
      ua(), qn[Fl++] = Rs, qn[Fl++] = Ts, Ts = t, Rs = n;
    }
    function po(t, n, l) {
      ua(), Ea[Wn++] = li, Ea[Wn++] = Ya, Ea[Wn++] = el, el = t;
      var c = li, h = Ya, y = Lu(c) - 1, C = c & ~(1 << y), b = l + 1, D = Lu(n) + y;
      if (D > 30) {
        var O = y - y % 5, P = (1 << O) - 1, Y = (C & P).toString(32), $ = C >> O, ie = y - O, ce = Lu(n) + ie, se = b << ie, We = se | $, ut = Y + h;
        li = 1 << ce | We, Ya = ut;
      } else {
        var Ze = b << y, Zt = Ze | C, Pt = h;
        li = 1 << D | Zt, Ya = Pt;
      }
    }
    function rf(t) {
      ua();
      var n = t.return;
      if (n !== null) {
        var l = 1, c = 0;
        wi(t, l), po(t, l, c);
      }
    }
    function Lu(t) {
      return 32 - iu(t);
    }
    function Xd(t) {
      return 1 << Lu(t) - 1;
    }
    function Au(t) {
      for (; t === Ts; )
        Ts = qn[--Fl], qn[Fl] = null, Rs = qn[--Fl], qn[Fl] = null;
      for (; t === el; )
        el = Ea[--Wn], Ea[Wn] = null, Ya = Ea[--Wn], Ea[Wn] = null, li = Ea[--Wn], Ea[Wn] = null;
    }
    function Gl() {
      return ua(), el !== null ? {
        id: li,
        overflow: Ya
      } : null;
    }
    function hp(t, n) {
      ua(), Ea[Wn++] = li, Ea[Wn++] = Ya, Ea[Wn++] = el, li = n.id, Ya = n.overflow, el = t;
    }
    function ua() {
      f() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var $n = null, Lt = null, qa = !1, Di = !1, tl = null;
    function vp() {
      qa && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function af() {
      Di = !0;
    }
    function Qd() {
      return Di;
    }
    function pp(t) {
      if (!wr)
        return !1;
      var n = t.stateNode.containerInfo;
      return Lt = _a(n), $n = t, qa = !0, tl = null, Di = !1, !0;
    }
    function ba(t, n, l) {
      return wr ? (Lt = xn(n), $n = t, qa = !0, tl = null, Di = !1, l !== null && hp(t, l), !0) : !1;
    }
    function Pu(t, n) {
      switch (t.tag) {
        case ee: {
          sp(t.stateNode.containerInfo, n);
          break;
        }
        case K: {
          var l = (t.mode & Rt) !== et;
          op(
            t.type,
            t.memoizedProps,
            t.stateNode,
            n,
            l
          );
          break;
        }
        case fe: {
          var c = t.memoizedState;
          c.dehydrated !== null && qo(c.dehydrated, n);
          break;
        }
      }
    }
    function Kd(t, n) {
      Pu(t, n);
      var l = t3();
      l.stateNode = n, l.return = t;
      var c = t.deletions;
      c === null ? (t.deletions = [l], t.flags |= ma) : c.push(l);
    }
    function si(t, n) {
      {
        if (Di)
          return;
        switch (t.tag) {
          case ee: {
            var l = t.stateNode.containerInfo;
            switch (n.tag) {
              case K:
                var c = n.type, h = n.pendingProps;
                Ha(l, c, h);
                break;
              case xe:
                var y = n.pendingProps;
                Wo(l, y);
                break;
              case fe:
                Xo(l);
                break;
            }
            break;
          }
          case K: {
            var C = t.type, b = t.memoizedProps, D = t.stateNode;
            switch (n.tag) {
              case K: {
                var O = n.type, P = n.pendingProps, Y = (t.mode & Rt) !== et;
                Td(
                  C,
                  b,
                  D,
                  O,
                  P,
                  Y
                );
                break;
              }
              case xe: {
                var $ = n.pendingProps, ie = (t.mode & Rt) !== et;
                Oc(
                  C,
                  b,
                  D,
                  $,
                  ie
                );
                break;
              }
              case fe: {
                Lc(C, b, D);
                break;
              }
            }
            break;
          }
          case fe: {
            var ce = t.memoizedState, se = ce.dehydrated;
            if (se !== null)
              switch (n.tag) {
                case K:
                  var We = n.type, ut = n.pendingProps;
                  ss(se, We, ut);
                  break;
                case xe:
                  var Ze = n.pendingProps;
                  Nc(se, Ze);
                  break;
                case fe:
                  Mc(se);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function mo(t, n) {
      n.flags = n.flags & ~Aa | Xt, si(t, n);
    }
    function nl(t, n) {
      switch (t.tag) {
        case K: {
          var l = t.type, c = t.pendingProps, h = Sa(n, l, c);
          return h !== null ? (t.stateNode = h, $n = t, Lt = ra(h), !0) : !1;
        }
        case xe: {
          var y = t.pendingProps, C = Rl(n, y);
          return C !== null ? (t.stateNode = C, $n = t, Lt = null, !0) : !1;
        }
        case fe: {
          var b = gi(n);
          if (b !== null) {
            var D = {
              dehydrated: b,
              treeContext: Gl(),
              retryLane: Vr
            };
            t.memoizedState = D;
            var O = n3(b);
            return O.return = t, t.child = O, $n = t, Lt = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ws(t) {
      return (t.mode & Rt) !== et && (t.flags & Dt) === Ge;
    }
    function go(t) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function yo(t) {
      if (qa) {
        var n = Lt;
        if (!n) {
          ws(t) && (si($n, t), go()), mo($n, t), qa = !1, $n = t;
          return;
        }
        var l = n;
        if (!nl(t, n)) {
          ws(t) && (si($n, t), go()), n = is(l);
          var c = $n;
          if (!n || !nl(t, n)) {
            mo($n, t), qa = !1, $n = t;
            return;
          }
          Kd(c, l);
        }
      }
    }
    function mp(t, n, l) {
      if (!wr)
        throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var c = t.stateNode, h = !Di, y = Js(c, t.type, t.memoizedProps, n, l, t, h);
      return t.updateQueue = y, y !== null;
    }
    function Jd(t) {
      if (!wr)
        throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.stateNode, l = t.memoizedProps, c = !Di, h = Fa(n, l, t, c);
      if (h) {
        var y = $n;
        if (y !== null)
          switch (y.tag) {
            case ee: {
              var C = y.stateNode.containerInfo, b = (y.mode & Rt) !== et;
              ls(
                C,
                n,
                l,
                b
              );
              break;
            }
            case K: {
              var D = y.type, O = y.memoizedProps, P = y.stateNode, Y = (y.mode & Rt) !== et;
              Dc(
                D,
                O,
                P,
                n,
                l,
                Y
              );
              break;
            }
          }
      }
      return h;
    }
    function Zd(t) {
      if (!wr)
        throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.memoizedState, l = n !== null ? n.dehydrated : null;
      if (!l)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      xd(l, t);
    }
    function $d(t) {
      if (!wr)
        throw new Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
      var n = t.memoizedState, l = n !== null ? n.dehydrated : null;
      if (!l)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Cd(l);
    }
    function lf(t) {
      for (var n = t.return; n !== null && n.tag !== K && n.tag !== ee && n.tag !== fe; )
        n = n.return;
      $n = n;
    }
    function jl(t) {
      if (!wr || t !== $n)
        return !1;
      if (!qa)
        return lf(t), qa = !0, !1;
      if (t.tag !== ee && (t.tag !== K || bd(t.type) && !Go(t.type, t.memoizedProps))) {
        var n = Lt;
        if (n)
          if (ws(t))
            eh(t), go();
          else
            for (; n; )
              Kd(t, n), n = is(n);
      }
      return lf(t), t.tag === fe ? Lt = $d(t) : Lt = $n ? is(t.stateNode) : null, !0;
    }
    function gp() {
      return qa && Lt !== null;
    }
    function eh(t) {
      for (var n = Lt; n; )
        Pu(t, n), n = is(n);
    }
    function r() {
      wr && ($n = null, Lt = null, qa = !1, Di = !1);
    }
    function i() {
      tl !== null && (h1(tl), tl = null);
    }
    function f() {
      return qa;
    }
    function p(t) {
      tl === null ? tl = [t] : tl.push(t);
    }
    var S = d.ReactCurrentBatchConfig, x = null;
    function N() {
      return S.transition;
    }
    function F(t, n) {
      if (Hn(t, n))
        return !0;
      if (typeof t != "object" || t === null || typeof n != "object" || n === null)
        return !1;
      var l = Object.keys(t), c = Object.keys(n);
      if (l.length !== c.length)
        return !1;
      for (var h = 0; h < l.length; h++) {
        var y = l[h];
        if (!Zs.call(n, y) || !Hn(t[y], n[y]))
          return !1;
      }
      return !0;
    }
    function te(t) {
      switch (t._debugOwner && t._debugOwner.type, t._debugSource, t.tag) {
        case K:
          return _i(t.type);
        case Xe:
          return _i("Lazy");
        case fe:
          return _i("Suspense");
        case nt:
          return _i("SuspenseList");
        case V:
        case le:
        case Se:
          return nu(t.type);
        case Le:
          return nu(t.type.render);
        case X:
          return Rd(t.type);
        default:
          return "";
      }
    }
    function me(t) {
      try {
        var n = "", l = t;
        do
          n += te(l), l = l.return;
        while (l);
        return n;
      } catch (c) {
        return `
Error generating stack: ` + c.message + `
` + c.stack;
      }
    }
    var He = d.ReactDebugCurrentFrame, Qe = null, Oe = !1;
    function gn() {
      {
        if (Qe === null)
          return null;
        var t = Qe._debugOwner;
        if (t !== null && typeof t < "u")
          return Ye(t);
      }
      return null;
    }
    function on() {
      return Qe === null ? "" : me(Qe);
    }
    function Kt() {
      He.getCurrentStack = null, Qe = null, Oe = !1;
    }
    function It(t) {
      He.getCurrentStack = t === null ? null : on, Qe = t, Oe = !1;
    }
    function J() {
      return Qe;
    }
    function H(t) {
      Oe = t;
    }
    var ne = {
      recordUnsafeLifecycleWarnings: function(t, n) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(t, n) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Ae = function(t) {
        for (var n = null, l = t; l !== null; )
          l.mode & Ht && (n = l), l = l.return;
        return n;
      }, qe = function(t) {
        var n = [];
        return t.forEach(function(l) {
          n.push(l);
        }), n.sort().join(", ");
      }, mt = [], ct = [], Nt = [], Tn = [], Mt = [], Ta = [], Bl = /* @__PURE__ */ new Set();
      ne.recordUnsafeLifecycleWarnings = function(t, n) {
        Bl.has(t.type) || (typeof n.componentWillMount == "function" && n.componentWillMount.__suppressDeprecationWarning !== !0 && mt.push(t), t.mode & Ht && typeof n.UNSAFE_componentWillMount == "function" && ct.push(t), typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Nt.push(t), t.mode & Ht && typeof n.UNSAFE_componentWillReceiveProps == "function" && Tn.push(t), typeof n.componentWillUpdate == "function" && n.componentWillUpdate.__suppressDeprecationWarning !== !0 && Mt.push(t), t.mode & Ht && typeof n.UNSAFE_componentWillUpdate == "function" && Ta.push(t));
      }, ne.flushPendingUnsafeLifecycleWarnings = function() {
        var t = /* @__PURE__ */ new Set();
        mt.length > 0 && (mt.forEach(function($) {
          t.add(Ye($) || "Component"), Bl.add($.type);
        }), mt = []);
        var n = /* @__PURE__ */ new Set();
        ct.length > 0 && (ct.forEach(function($) {
          n.add(Ye($) || "Component"), Bl.add($.type);
        }), ct = []);
        var l = /* @__PURE__ */ new Set();
        Nt.length > 0 && (Nt.forEach(function($) {
          l.add(Ye($) || "Component"), Bl.add($.type);
        }), Nt = []);
        var c = /* @__PURE__ */ new Set();
        Tn.length > 0 && (Tn.forEach(function($) {
          c.add(Ye($) || "Component"), Bl.add($.type);
        }), Tn = []);
        var h = /* @__PURE__ */ new Set();
        Mt.length > 0 && (Mt.forEach(function($) {
          h.add(Ye($) || "Component"), Bl.add($.type);
        }), Mt = []);
        var y = /* @__PURE__ */ new Set();
        if (Ta.length > 0 && (Ta.forEach(function($) {
          y.add(Ye($) || "Component"), Bl.add($.type);
        }), Ta = []), n.size > 0) {
          var C = qe(n);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, C);
        }
        if (c.size > 0) {
          var b = qe(c);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, b);
        }
        if (y.size > 0) {
          var D = qe(y);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, D);
        }
        if (t.size > 0) {
          var O = qe(t);
          _(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
        if (l.size > 0) {
          var P = qe(l);
          _(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, P);
        }
        if (h.size > 0) {
          var Y = qe(h);
          _(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, Y);
        }
      };
      var th = /* @__PURE__ */ new Map(), g0 = /* @__PURE__ */ new Set();
      ne.recordLegacyContextWarning = function(t, n) {
        var l = Ae(t);
        if (l === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!g0.has(t.type)) {
          var c = th.get(l);
          (t.type.contextTypes != null || t.type.childContextTypes != null || n !== null && typeof n.getChildContext == "function") && (c === void 0 && (c = [], th.set(l, c)), c.push(t));
        }
      }, ne.flushLegacyContextWarning = function() {
        th.forEach(function(t, n) {
          if (t.length !== 0) {
            var l = t[0], c = /* @__PURE__ */ new Set();
            t.forEach(function(y) {
              c.add(Ye(y) || "Component"), g0.add(y.type);
            });
            var h = qe(c);
            try {
              It(l), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, h);
            } finally {
              Kt();
            }
          }
        });
      }, ne.discardPendingWarnings = function() {
        mt = [], ct = [], Nt = [], Tn = [], Mt = [], Ta = [], th = /* @__PURE__ */ new Map();
      };
    }
    function y0(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, l = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function S0(t) {
      try {
        return yp(t), !1;
      } catch {
        return !0;
      }
    }
    function yp(t) {
      return "" + t;
    }
    function I_(t) {
      if (S0(t))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", y0(t)), yp(t);
    }
    function V_(t, n) {
      if (S0(t))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", n, y0(t)), yp(t);
    }
    function Ni(t, n) {
      if (t && t.defaultProps) {
        var l = T({}, n), c = t.defaultProps;
        for (var h in c)
          l[h] === void 0 && (l[h] = c[h]);
        return l;
      }
      return n;
    }
    var nh = ia(null), sf;
    sf = {};
    var rh = null, ku = null, Sp = null, ah = !1;
    function ih() {
      rh = null, ku = null, Sp = null, ah = !1;
    }
    function _0() {
      ah = !0;
    }
    function x0() {
      ah = !1;
    }
    function C0(t, n, l) {
      jo ? (jn(nh, n._currentValue, t), n._currentValue = l, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== sf && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = sf) : (jn(nh, n._currentValue2, t), n._currentValue2 = l, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== sf && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = sf);
    }
    function _p(t, n) {
      var l = nh.current;
      mn(nh, n), jo ? t._currentValue = l : t._currentValue2 = l;
    }
    function xp(t, n, l) {
      for (var c = t; c !== null; ) {
        var h = c.alternate;
        if (ys(c.childLanes, n) ? h !== null && !ys(h.childLanes, n) && (h.childLanes = at(h.childLanes, n)) : (c.childLanes = at(c.childLanes, n), h !== null && (h.childLanes = at(h.childLanes, n))), c === l)
          break;
        c = c.return;
      }
      c !== l && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Y_(t, n, l) {
      q_(t, n, l);
    }
    function q_(t, n, l) {
      var c = t.child;
      for (c !== null && (c.return = t); c !== null; ) {
        var h = void 0, y = c.dependencies;
        if (y !== null) {
          h = c.child;
          for (var C = y.firstContext; C !== null; ) {
            if (C.context === n) {
              if (c.tag === X) {
                var b = Ol(l), D = Il(sn, b);
                D.tag = sh;
                var O = c.updateQueue;
                if (O !== null) {
                  var P = O.shared, Y = P.pending;
                  Y === null ? D.next = D : (D.next = Y.next, Y.next = D), P.pending = D;
                }
              }
              c.lanes = at(c.lanes, l);
              var $ = c.alternate;
              $ !== null && ($.lanes = at($.lanes, l)), xp(c.return, l, t), y.lanes = at(y.lanes, l);
              break;
            }
            C = C.next;
          }
        } else if (c.tag === Ie)
          h = c.type === t.type ? null : c.child;
        else if (c.tag === Re) {
          var ie = c.return;
          if (ie === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          ie.lanes = at(ie.lanes, l);
          var ce = ie.alternate;
          ce !== null && (ce.lanes = at(ce.lanes, l)), xp(ie, l, t), h = c.sibling;
        } else
          h = c.child;
        if (h !== null)
          h.return = c;
        else
          for (h = c; h !== null; ) {
            if (h === t) {
              h = null;
              break;
            }
            var se = h.sibling;
            if (se !== null) {
              se.return = h.return, h = se;
              break;
            }
            h = h.return;
          }
        c = h;
      }
    }
    function zu(t, n) {
      rh = t, ku = null, Sp = null;
      var l = t.dependencies;
      if (l !== null) {
        var c = l.firstContext;
        c !== null && (Nn(l.lanes, n) && Cf(), l.firstContext = null);
      }
    }
    function er(t) {
      ah && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var n = jo ? t._currentValue : t._currentValue2;
      if (Sp !== t) {
        var l = {
          context: t,
          memoizedValue: n,
          next: null
        };
        if (ku === null) {
          if (rh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          ku = l, rh.dependencies = {
            lanes: ue,
            firstContext: l
          };
        } else
          ku = ku.next = l;
      }
      return n;
    }
    var So = null;
    function Cp(t) {
      So === null ? So = [t] : So.push(t);
    }
    function W_() {
      if (So !== null) {
        for (var t = 0; t < So.length; t++) {
          var n = So[t], l = n.interleaved;
          if (l !== null) {
            n.interleaved = null;
            var c = l.next, h = n.pending;
            if (h !== null) {
              var y = h.next;
              h.next = c, l.next = y;
            }
            n.pending = l;
          }
        }
        So = null;
      }
    }
    function E0(t, n, l, c) {
      var h = n.interleaved;
      return h === null ? (l.next = l, Cp(n)) : (l.next = h.next, h.next = l), n.interleaved = l, lh(t, c);
    }
    function X_(t, n, l, c) {
      var h = n.interleaved;
      h === null ? (l.next = l, Cp(n)) : (l.next = h.next, h.next = l), n.interleaved = l;
    }
    function Q_(t, n, l, c) {
      var h = n.interleaved;
      return h === null ? (l.next = l, Cp(n)) : (l.next = h.next, h.next = l), n.interleaved = l, lh(t, c);
    }
    function ca(t, n) {
      return lh(t, n);
    }
    var K_ = lh;
    function lh(t, n) {
      t.lanes = at(t.lanes, n);
      var l = t.alternate;
      l !== null && (l.lanes = at(l.lanes, n)), l === null && (t.flags & (Xt | Aa)) !== Ge && b1(t);
      for (var c = t, h = t.return; h !== null; )
        h.childLanes = at(h.childLanes, n), l = h.alternate, l !== null ? l.childLanes = at(l.childLanes, n) : (h.flags & (Xt | Aa)) !== Ge && b1(t), c = h, h = h.return;
      if (c.tag === ee) {
        var y = c.stateNode;
        return y;
      } else
        return null;
    }
    var b0 = 0, T0 = 1, sh = 2, Ep = 3, oh = !1, bp, uh;
    bp = !1, uh = null;
    function Tp(t) {
      var n = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ue
        },
        effects: null
      };
      t.updateQueue = n;
    }
    function R0(t, n) {
      var l = n.updateQueue, c = t.updateQueue;
      if (l === c) {
        var h = {
          baseState: c.baseState,
          firstBaseUpdate: c.firstBaseUpdate,
          lastBaseUpdate: c.lastBaseUpdate,
          shared: c.shared,
          effects: c.effects
        };
        n.updateQueue = h;
      }
    }
    function Il(t, n) {
      var l = {
        eventTime: t,
        lane: n,
        tag: b0,
        payload: null,
        callback: null,
        next: null
      };
      return l;
    }
    function Ds(t, n, l) {
      var c = t.updateQueue;
      if (c === null)
        return null;
      var h = c.shared;
      if (uh === h && !bp && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), bp = !0), uE()) {
        var y = h.pending;
        return y === null ? n.next = n : (n.next = y.next, y.next = n), h.pending = n, K_(t, l);
      } else
        return Q_(t, h, n, l);
    }
    function ch(t, n, l) {
      var c = n.updateQueue;
      if (c !== null) {
        var h = c.shared;
        if (Su(l)) {
          var y = h.lanes;
          y = Ss(y, t.pendingLanes);
          var C = at(y, l);
          h.lanes = C, Wc(t, C);
        }
      }
    }
    function Rp(t, n) {
      var l = t.updateQueue, c = t.alternate;
      if (c !== null) {
        var h = c.updateQueue;
        if (l === h) {
          var y = null, C = null, b = l.firstBaseUpdate;
          if (b !== null) {
            var D = b;
            do {
              var O = {
                eventTime: D.eventTime,
                lane: D.lane,
                tag: D.tag,
                payload: D.payload,
                callback: D.callback,
                next: null
              };
              C === null ? y = C = O : (C.next = O, C = O), D = D.next;
            } while (D !== null);
            C === null ? y = C = n : (C.next = n, C = n);
          } else
            y = C = n;
          l = {
            baseState: h.baseState,
            firstBaseUpdate: y,
            lastBaseUpdate: C,
            shared: h.shared,
            effects: h.effects
          }, t.updateQueue = l;
          return;
        }
      }
      var P = l.lastBaseUpdate;
      P === null ? l.firstBaseUpdate = n : P.next = n, l.lastBaseUpdate = n;
    }
    function J_(t, n, l, c, h, y) {
      switch (l.tag) {
        case T0: {
          var C = l.payload;
          if (typeof C == "function") {
            _0();
            var b = C.call(y, c, h);
            {
              if (t.mode & Ht) {
                zn(!0);
                try {
                  C.call(y, c, h);
                } finally {
                  zn(!1);
                }
              }
              x0();
            }
            return b;
          }
          return C;
        }
        case Ep:
          t.flags = t.flags & ~lr | Dt;
        case b0: {
          var D = l.payload, O;
          if (typeof D == "function") {
            _0(), O = D.call(y, c, h);
            {
              if (t.mode & Ht) {
                zn(!0);
                try {
                  D.call(y, c, h);
                } finally {
                  zn(!1);
                }
              }
              x0();
            }
          } else
            O = D;
          return O == null ? c : T({}, c, O);
        }
        case sh:
          return oh = !0, c;
      }
      return c;
    }
    function fh(t, n, l, c) {
      var h = t.updateQueue;
      oh = !1, uh = h.shared;
      var y = h.firstBaseUpdate, C = h.lastBaseUpdate, b = h.shared.pending;
      if (b !== null) {
        h.shared.pending = null;
        var D = b, O = D.next;
        D.next = null, C === null ? y = O : C.next = O, C = D;
        var P = t.alternate;
        if (P !== null) {
          var Y = P.updateQueue, $ = Y.lastBaseUpdate;
          $ !== C && ($ === null ? Y.firstBaseUpdate = O : $.next = O, Y.lastBaseUpdate = D);
        }
      }
      if (y !== null) {
        var ie = h.baseState, ce = ue, se = null, We = null, ut = null, Ze = y;
        do {
          var Zt = Ze.lane, Pt = Ze.eventTime;
          if (ys(c, Zt)) {
            if (ut !== null) {
              var re = {
                eventTime: Pt,
                lane: In,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              ut = ut.next = re;
            }
            ie = J_(t, h, Ze, ie, n, l);
            var q = Ze.callback;
            if (q !== null && Ze.lane !== In) {
              t.flags |= yl;
              var ge = h.effects;
              ge === null ? h.effects = [Ze] : ge.push(Ze);
            }
          } else {
            var W = {
              eventTime: Pt,
              lane: Zt,
              tag: Ze.tag,
              payload: Ze.payload,
              callback: Ze.callback,
              next: null
            };
            ut === null ? (We = ut = W, se = ie) : ut = ut.next = W, ce = at(ce, Zt);
          }
          if (Ze = Ze.next, Ze === null) {
            if (b = h.shared.pending, b === null)
              break;
            var Ve = b, ze = Ve.next;
            Ve.next = null, Ze = ze, h.lastBaseUpdate = Ve, h.shared.pending = null;
          }
        } while (!0);
        ut === null && (se = ie), h.baseState = se, h.firstBaseUpdate = We, h.lastBaseUpdate = ut;
        var At = h.shared.interleaved;
        if (At !== null) {
          var ft = At;
          do
            ce = at(ce, ft.lane), ft = ft.next;
          while (ft !== At);
        } else
          y === null && (h.shared.lanes = ue);
        zf(ce), t.lanes = ce, t.memoizedState = ie;
      }
      uh = null;
    }
    function Z_(t, n) {
      if (typeof t != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + t));
      t.call(n);
    }
    function w0() {
      oh = !1;
    }
    function dh() {
      return oh;
    }
    function D0(t, n, l) {
      var c = n.effects;
      if (n.effects = null, c !== null)
        for (var h = 0; h < c.length; h++) {
          var y = c[h], C = y.callback;
          C !== null && (y.callback = null, Z_(C, l));
        }
    }
    var wp = {}, N0 = new s.Component().refs, Dp, Np, Mp, Op, Lp, M0, hh, Ap, Pp, kp;
    {
      Dp = /* @__PURE__ */ new Set(), Np = /* @__PURE__ */ new Set(), Mp = /* @__PURE__ */ new Set(), Op = /* @__PURE__ */ new Set(), Ap = /* @__PURE__ */ new Set(), Lp = /* @__PURE__ */ new Set(), Pp = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var O0 = /* @__PURE__ */ new Set();
      hh = function(t, n) {
        if (!(t === null || typeof t == "function")) {
          var l = n + "_" + t;
          O0.has(l) || (O0.add(l), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, t));
        }
      }, M0 = function(t, n) {
        if (n === void 0) {
          var l = $e(t) || "Component";
          Lp.has(l) || (Lp.add(l), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", l));
        }
      }, Object.defineProperty(wp, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(wp);
    }
    function zp(t, n, l, c) {
      var h = t.memoizedState, y = l(c, h);
      {
        if (t.mode & Ht) {
          zn(!0);
          try {
            y = l(c, h);
          } finally {
            zn(!1);
          }
        }
        M0(n, y);
      }
      var C = y == null ? h : T({}, h, y);
      if (t.memoizedState = C, t.lanes === ue) {
        var b = t.updateQueue;
        b.baseState = C;
      }
    }
    var Up = {
      isMounted: hc,
      enqueueSetState: function(t, n, l) {
        var c = w(t), h = Kr(), y = ks(c), C = Il(h, y);
        C.payload = n, l != null && (hh(l, "setState"), C.callback = l);
        var b = Ds(c, C, y);
        b !== null && (nr(b, c, y, h), ch(b, c, y)), ii(c, y);
      },
      enqueueReplaceState: function(t, n, l) {
        var c = w(t), h = Kr(), y = ks(c), C = Il(h, y);
        C.tag = T0, C.payload = n, l != null && (hh(l, "replaceState"), C.callback = l);
        var b = Ds(c, C, y);
        b !== null && (nr(b, c, y, h), ch(b, c, y)), ii(c, y);
      },
      enqueueForceUpdate: function(t, n) {
        var l = w(t), c = Kr(), h = ks(l), y = Il(c, h);
        y.tag = sh, n != null && (hh(n, "forceUpdate"), y.callback = n);
        var C = Ds(l, y, h);
        C !== null && (nr(C, l, h, c), ch(C, l, h)), nf(l, h);
      }
    };
    function L0(t, n, l, c, h, y, C) {
      var b = t.stateNode;
      if (typeof b.shouldComponentUpdate == "function") {
        var D = b.shouldComponentUpdate(c, y, C);
        {
          if (t.mode & Ht) {
            zn(!0);
            try {
              D = b.shouldComponentUpdate(c, y, C);
            } finally {
              zn(!1);
            }
          }
          D === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", $e(n) || "Component");
        }
        return D;
      }
      return n.prototype && n.prototype.isPureReactComponent ? !F(l, c) || !F(h, y) : !0;
    }
    function $_(t, n, l) {
      var c = t.stateNode;
      {
        var h = $e(n) || "Component", y = c.render;
        y || (n.prototype && typeof n.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", h) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", h)), c.getInitialState && !c.getInitialState.isReactClassApproved && !c.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", h), c.getDefaultProps && !c.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", h), c.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", h), c.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", h), c.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", h), n.contextType && n.contextTypes && !Pp.has(n) && (Pp.add(n), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", h)), typeof c.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", h), n.prototype && n.prototype.isPureReactComponent && typeof c.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", $e(n) || "A pure component"), typeof c.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", h), typeof c.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", h), typeof c.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", h), typeof c.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", h);
        var C = c.props !== l;
        c.props !== void 0 && C && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", h, h), c.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", h, h), typeof c.getSnapshotBeforeUpdate == "function" && typeof c.componentDidUpdate != "function" && !Mp.has(n) && (Mp.add(n), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", $e(n))), typeof c.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", h), typeof c.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", h), typeof n.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", h);
        var b = c.state;
        b && (typeof b != "object" || Tt(b)) && m("%s.state: must be set to an object or null", h), typeof c.getChildContext == "function" && typeof n.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", h);
      }
    }
    function A0(t, n) {
      n.updater = Up, t.stateNode = n, M(n, t), n._reactInternalInstance = wp;
    }
    function P0(t, n, l) {
      var c = !1, h = Br, y = Br, C = n.contextType;
      if ("contextType" in n) {
        var b = C === null || C !== void 0 && C.$$typeof === ir && C._context === void 0;
        if (!b && !kp.has(n)) {
          kp.add(n);
          var D = "";
          C === void 0 ? D = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof C != "object" ? D = " However, it is set to a " + typeof C + "." : C.$$typeof === ar ? D = " Did you accidentally pass the Context.Provider instead?" : C._context !== void 0 ? D = " Did you accidentally pass the Context.Consumer instead?" : D = " However, it is set to an object with keys {" + Object.keys(C).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", $e(n) || "Component", D);
        }
      }
      if (typeof C == "object" && C !== null)
        y = er(C);
      else {
        h = Wi(t, n, !0);
        var O = n.contextTypes;
        c = O != null, y = c ? Ci(t, h) : Br;
      }
      var P = new n(l, y);
      if (t.mode & Ht) {
        zn(!0);
        try {
          P = new n(l, y);
        } finally {
          zn(!1);
        }
      }
      var Y = t.memoizedState = P.state !== null && P.state !== void 0 ? P.state : null;
      A0(t, P);
      {
        if (typeof n.getDerivedStateFromProps == "function" && Y === null) {
          var $ = $e(n) || "Component";
          Np.has($) || (Np.add($), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, P.state === null ? "null" : "undefined", $));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof P.getSnapshotBeforeUpdate == "function") {
          var ie = null, ce = null, se = null;
          if (typeof P.componentWillMount == "function" && P.componentWillMount.__suppressDeprecationWarning !== !0 ? ie = "componentWillMount" : typeof P.UNSAFE_componentWillMount == "function" && (ie = "UNSAFE_componentWillMount"), typeof P.componentWillReceiveProps == "function" && P.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ce = "componentWillReceiveProps" : typeof P.UNSAFE_componentWillReceiveProps == "function" && (ce = "UNSAFE_componentWillReceiveProps"), typeof P.componentWillUpdate == "function" && P.componentWillUpdate.__suppressDeprecationWarning !== !0 ? se = "componentWillUpdate" : typeof P.UNSAFE_componentWillUpdate == "function" && (se = "UNSAFE_componentWillUpdate"), ie !== null || ce !== null || se !== null) {
            var We = $e(n) || "Component", ut = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Op.has(We) || (Op.add(We), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, We, ut, ie !== null ? `
  ` + ie : "", ce !== null ? `
  ` + ce : "", se !== null ? `
  ` + se : ""));
          }
        }
      }
      return c && ru(t, h, y), P;
    }
    function ex(t, n) {
      var l = n.state;
      typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(t) || "Component"), Up.enqueueReplaceState(n, n.state, null));
    }
    function k0(t, n, l, c) {
      var h = n.state;
      if (typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(l, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(l, c), n.state !== h) {
        {
          var y = Ye(t) || "Component";
          Dp.has(y) || (Dp.add(y), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", y));
        }
        Up.enqueueReplaceState(n, n.state, null);
      }
    }
    function Fp(t, n, l, c) {
      $_(t, n, l);
      var h = t.stateNode;
      h.props = l, h.state = t.memoizedState, h.refs = N0, Tp(t);
      var y = n.contextType;
      if (typeof y == "object" && y !== null)
        h.context = er(y);
      else {
        var C = Wi(t, n, !0);
        h.context = Ci(t, C);
      }
      {
        if (h.state === l) {
          var b = $e(n) || "Component";
          Ap.has(b) || (Ap.add(b), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
        }
        t.mode & Ht && ne.recordLegacyContextWarning(t, h), ne.recordUnsafeLifecycleWarnings(t, h);
      }
      h.state = t.memoizedState;
      var D = n.getDerivedStateFromProps;
      if (typeof D == "function" && (zp(t, n, D, l), h.state = t.memoizedState), typeof n.getDerivedStateFromProps != "function" && typeof h.getSnapshotBeforeUpdate != "function" && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function") && (ex(t, h), fh(t, l, h, c), h.state = t.memoizedState), typeof h.componentDidMount == "function") {
        var O = pt;
        O |= Je, (t.mode & Ir) !== et && (O |= bt), t.flags |= O;
      }
    }
    function tx(t, n, l, c) {
      var h = t.stateNode, y = t.memoizedProps;
      h.props = y;
      var C = h.context, b = n.contextType, D = Br;
      if (typeof b == "object" && b !== null)
        D = er(b);
      else {
        var O = Wi(t, n, !0);
        D = Ci(t, O);
      }
      var P = n.getDerivedStateFromProps, Y = typeof P == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      !Y && (typeof h.UNSAFE_componentWillReceiveProps == "function" || typeof h.componentWillReceiveProps == "function") && (y !== l || C !== D) && k0(t, h, l, D), w0();
      var $ = t.memoizedState, ie = h.state = $;
      if (fh(t, l, h, c), ie = t.memoizedState, y === l && $ === ie && !ds() && !dh()) {
        if (typeof h.componentDidMount == "function") {
          var ce = pt;
          ce |= Je, (t.mode & Ir) !== et && (ce |= bt), t.flags |= ce;
        }
        return !1;
      }
      typeof P == "function" && (zp(t, n, P, l), ie = t.memoizedState);
      var se = dh() || L0(t, n, y, l, $, ie, D);
      if (se) {
        if (!Y && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function") && (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function") {
          var We = pt;
          We |= Je, (t.mode & Ir) !== et && (We |= bt), t.flags |= We;
        }
      } else {
        if (typeof h.componentDidMount == "function") {
          var ut = pt;
          ut |= Je, (t.mode & Ir) !== et && (ut |= bt), t.flags |= ut;
        }
        t.memoizedProps = l, t.memoizedState = ie;
      }
      return h.props = l, h.state = ie, h.context = D, se;
    }
    function nx(t, n, l, c, h) {
      var y = n.stateNode;
      R0(t, n);
      var C = n.memoizedProps, b = n.type === n.elementType ? C : Ni(n.type, C);
      y.props = b;
      var D = n.pendingProps, O = y.context, P = l.contextType, Y = Br;
      if (typeof P == "object" && P !== null)
        Y = er(P);
      else {
        var $ = Wi(n, l, !0);
        Y = Ci(n, $);
      }
      var ie = l.getDerivedStateFromProps, ce = typeof ie == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      !ce && (typeof y.UNSAFE_componentWillReceiveProps == "function" || typeof y.componentWillReceiveProps == "function") && (C !== D || O !== Y) && k0(n, y, c, Y), w0();
      var se = n.memoizedState, We = y.state = se;
      if (fh(n, c, y, h), We = n.memoizedState, C === D && se === We && !ds() && !dh() && !z)
        return typeof y.componentDidUpdate == "function" && (C !== t.memoizedProps || se !== t.memoizedState) && (n.flags |= pt), typeof y.getSnapshotBeforeUpdate == "function" && (C !== t.memoizedProps || se !== t.memoizedState) && (n.flags |= La), !1;
      typeof ie == "function" && (zp(n, l, ie, c), We = n.memoizedState);
      var ut = dh() || L0(n, l, b, c, se, We, Y) || z;
      return ut ? (!ce && (typeof y.UNSAFE_componentWillUpdate == "function" || typeof y.componentWillUpdate == "function") && (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(c, We, Y), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(c, We, Y)), typeof y.componentDidUpdate == "function" && (n.flags |= pt), typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= La)) : (typeof y.componentDidUpdate == "function" && (C !== t.memoizedProps || se !== t.memoizedState) && (n.flags |= pt), typeof y.getSnapshotBeforeUpdate == "function" && (C !== t.memoizedProps || se !== t.memoizedState) && (n.flags |= La), n.memoizedProps = c, n.memoizedState = We), y.props = c, y.state = We, y.context = Y, ut;
    }
    var Hp, Gp, jp, Bp, Ip, z0 = function(t, n) {
    };
    Hp = !1, Gp = !1, jp = {}, Bp = {}, Ip = {}, z0 = function(t, n) {
      if (!(t === null || typeof t != "object") && !(!t._store || t._store.validated || t.key != null)) {
        if (typeof t._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        t._store.validated = !0;
        var l = Ye(n) || "Component";
        Bp[l] || (Bp[l] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function of(t, n, l) {
      var c = l.ref;
      if (c !== null && typeof c != "function" && typeof c != "object") {
        if ((t.mode & Ht || j) && !(l._owner && l._self && l._owner.stateNode !== l._self)) {
          var h = Ye(t) || "Component";
          jp[h] || (m('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', c), jp[h] = !0);
        }
        if (l._owner) {
          var y = l._owner, C;
          if (y) {
            var b = y;
            if (b.tag !== X)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            C = b.stateNode;
          }
          if (!C)
            throw new Error("Missing owner for string ref " + c + ". This error is likely caused by a bug in React. Please file an issue.");
          var D = C;
          V_(c, "ref");
          var O = "" + c;
          if (n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === O)
            return n.ref;
          var P = function(Y) {
            var $ = D.refs;
            $ === N0 && ($ = D.refs = {}), Y === null ? delete $[O] : $[O] = Y;
          };
          return P._stringRef = O, P;
        } else {
          if (typeof c != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!l._owner)
            throw new Error("Element ref was specified as a string (" + c + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return c;
    }
    function vh(t, n) {
      var l = Object.prototype.toString.call(n);
      throw new Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ph(t) {
      {
        var n = Ye(t) || "Component";
        if (Ip[n])
          return;
        Ip[n] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function U0(t) {
      var n = t._payload, l = t._init;
      return l(n);
    }
    function F0(t) {
      function n(W, re) {
        if (t) {
          var q = W.deletions;
          q === null ? (W.deletions = [re], W.flags |= ma) : q.push(re);
        }
      }
      function l(W, re) {
        if (!t)
          return null;
        for (var q = re; q !== null; )
          n(W, q), q = q.sibling;
        return null;
      }
      function c(W, re) {
        for (var q = /* @__PURE__ */ new Map(), ge = re; ge !== null; )
          ge.key !== null ? q.set(ge.key, ge) : q.set(ge.index, ge), ge = ge.sibling;
        return q;
      }
      function h(W, re) {
        var q = wo(W, re);
        return q.index = 0, q.sibling = null, q;
      }
      function y(W, re, q) {
        if (W.index = q, !t)
          return W.flags |= he, re;
        var ge = W.alternate;
        if (ge !== null) {
          var Ve = ge.index;
          return Ve < re ? (W.flags |= Xt, re) : Ve;
        } else
          return W.flags |= Xt, re;
      }
      function C(W) {
        return t && W.alternate === null && (W.flags |= Xt), W;
      }
      function b(W, re, q, ge) {
        if (re === null || re.tag !== xe) {
          var Ve = Sg(q, W.mode, ge);
          return Ve.return = W, Ve;
        } else {
          var ze = h(re, q);
          return ze.return = W, ze;
        }
      }
      function D(W, re, q, ge) {
        var Ve = q.type;
        if (Ve === Gt)
          return P(W, re, q.props.children, ge, q.key);
        if (re !== null && (re.elementType === Ve || D1(re, q) || typeof Ve == "object" && Ve !== null && Ve.$$typeof === Ke && U0(Ve) === re.type)) {
          var ze = h(re, q.props);
          return ze.ref = of(W, re, q), ze.return = W, ze._debugSource = q._source, ze._debugOwner = q._owner, ze;
        }
        var At = yg(q, W.mode, ge);
        return At.ref = of(W, re, q), At.return = W, At;
      }
      function O(W, re, q, ge) {
        if (re === null || re.tag !== Q || re.stateNode.containerInfo !== q.containerInfo || re.stateNode.implementation !== q.implementation) {
          var Ve = _g(q, W.mode, ge);
          return Ve.return = W, Ve;
        } else {
          var ze = h(re, q.children || []);
          return ze.return = W, ze;
        }
      }
      function P(W, re, q, ge, Ve) {
        if (re === null || re.tag !== pe) {
          var ze = Us(q, W.mode, ge, Ve);
          return ze.return = W, ze;
        } else {
          var At = h(re, q);
          return At.return = W, At;
        }
      }
      function Y(W, re, q) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var ge = Sg("" + re, W.mode, q);
          return ge.return = W, ge;
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case Ft: {
              var Ve = yg(re, W.mode, q);
              return Ve.ref = of(W, null, re), Ve.return = W, Ve;
            }
            case Ce: {
              var ze = _g(re, W.mode, q);
              return ze.return = W, ze;
            }
            case Ke: {
              var At = re._payload, ft = re._init;
              return Y(W, ft(At), q);
            }
          }
          if (Tt(re) || be(re)) {
            var Ut = Us(re, W.mode, q, null);
            return Ut.return = W, Ut;
          }
          vh(W, re);
        }
        return typeof re == "function" && ph(W), null;
      }
      function $(W, re, q, ge) {
        var Ve = re !== null ? re.key : null;
        if (typeof q == "string" && q !== "" || typeof q == "number")
          return Ve !== null ? null : b(W, re, "" + q, ge);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ft:
              return q.key === Ve ? D(W, re, q, ge) : null;
            case Ce:
              return q.key === Ve ? O(W, re, q, ge) : null;
            case Ke: {
              var ze = q._payload, At = q._init;
              return $(W, re, At(ze), ge);
            }
          }
          if (Tt(q) || be(q))
            return Ve !== null ? null : P(W, re, q, ge, null);
          vh(W, q);
        }
        return typeof q == "function" && ph(W), null;
      }
      function ie(W, re, q, ge, Ve) {
        if (typeof ge == "string" && ge !== "" || typeof ge == "number") {
          var ze = W.get(q) || null;
          return b(re, ze, "" + ge, Ve);
        }
        if (typeof ge == "object" && ge !== null) {
          switch (ge.$$typeof) {
            case Ft: {
              var At = W.get(ge.key === null ? q : ge.key) || null;
              return D(re, At, ge, Ve);
            }
            case Ce: {
              var ft = W.get(ge.key === null ? q : ge.key) || null;
              return O(re, ft, ge, Ve);
            }
            case Ke:
              var Ut = ge._payload, wt = ge._init;
              return ie(W, re, q, wt(Ut), Ve);
          }
          if (Tt(ge) || be(ge)) {
            var yn = W.get(q) || null;
            return P(re, yn, ge, Ve, null);
          }
          vh(re, ge);
        }
        return typeof ge == "function" && ph(re), null;
      }
      function ce(W, re, q) {
        {
          if (typeof W != "object" || W === null)
            return re;
          switch (W.$$typeof) {
            case Ft:
            case Ce:
              z0(W, q);
              var ge = W.key;
              if (typeof ge != "string")
                break;
              if (re === null) {
                re = /* @__PURE__ */ new Set(), re.add(ge);
                break;
              }
              if (!re.has(ge)) {
                re.add(ge);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ge);
              break;
            case Ke:
              var Ve = W._payload, ze = W._init;
              ce(ze(Ve), re, q);
              break;
          }
        }
        return re;
      }
      function se(W, re, q, ge) {
        for (var Ve = null, ze = 0; ze < q.length; ze++) {
          var At = q[ze];
          Ve = ce(At, Ve, W);
        }
        for (var ft = null, Ut = null, wt = re, yn = 0, tt = 0, Gn = null; wt !== null && tt < q.length; tt++) {
          wt.index > tt ? (Gn = wt, wt = null) : Gn = wt.sibling;
          var Jr = $(W, wt, q[tt], ge);
          if (Jr === null) {
            wt === null && (wt = Gn);
            break;
          }
          t && wt && Jr.alternate === null && n(W, wt), yn = y(Jr, yn, tt), Ut === null ? ft = Jr : Ut.sibling = Jr, Ut = Jr, wt = Gn;
        }
        if (tt === q.length) {
          if (l(W, wt), f()) {
            var Hr = tt;
            wi(W, Hr);
          }
          return ft;
        }
        if (wt === null) {
          for (; tt < q.length; tt++) {
            var Xa = Y(W, q[tt], ge);
            Xa !== null && (yn = y(Xa, yn, tt), Ut === null ? ft = Xa : Ut.sibling = Xa, Ut = Xa);
          }
          if (f()) {
            var ha = tt;
            wi(W, ha);
          }
          return ft;
        }
        for (var va = c(W, wt); tt < q.length; tt++) {
          var Zr = ie(va, W, tt, q[tt], ge);
          Zr !== null && (t && Zr.alternate !== null && va.delete(Zr.key === null ? tt : Zr.key), yn = y(Zr, yn, tt), Ut === null ? ft = Zr : Ut.sibling = Zr, Ut = Zr);
        }
        if (t && va.forEach(function($u) {
          return n(W, $u);
        }), f()) {
          var Wl = tt;
          wi(W, Wl);
        }
        return ft;
      }
      function We(W, re, q, ge) {
        var Ve = be(q);
        if (typeof Ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && q[Symbol.toStringTag] === "Generator" && (Gp || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Gp = !0), q.entries === Ve && (Hp || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Hp = !0);
          var ze = Ve.call(q);
          if (ze)
            for (var At = null, ft = ze.next(); !ft.done; ft = ze.next()) {
              var Ut = ft.value;
              At = ce(Ut, At, W);
            }
        }
        var wt = Ve.call(q);
        if (wt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var yn = null, tt = null, Gn = re, Jr = 0, Hr = 0, Xa = null, ha = wt.next(); Gn !== null && !ha.done; Hr++, ha = wt.next()) {
          Gn.index > Hr ? (Xa = Gn, Gn = null) : Xa = Gn.sibling;
          var va = $(W, Gn, ha.value, ge);
          if (va === null) {
            Gn === null && (Gn = Xa);
            break;
          }
          t && Gn && va.alternate === null && n(W, Gn), Jr = y(va, Jr, Hr), tt === null ? yn = va : tt.sibling = va, tt = va, Gn = Xa;
        }
        if (ha.done) {
          if (l(W, Gn), f()) {
            var Zr = Hr;
            wi(W, Zr);
          }
          return yn;
        }
        if (Gn === null) {
          for (; !ha.done; Hr++, ha = wt.next()) {
            var Wl = Y(W, ha.value, ge);
            Wl !== null && (Jr = y(Wl, Jr, Hr), tt === null ? yn = Wl : tt.sibling = Wl, tt = Wl);
          }
          if (f()) {
            var $u = Hr;
            wi(W, $u);
          }
          return yn;
        }
        for (var Hf = c(W, Gn); !ha.done; Hr++, ha = wt.next()) {
          var hl = ie(Hf, W, Hr, ha.value, ge);
          hl !== null && (t && hl.alternate !== null && Hf.delete(hl.key === null ? Hr : hl.key), Jr = y(hl, Jr, Hr), tt === null ? yn = hl : tt.sibling = hl, tt = hl);
        }
        if (t && Hf.forEach(function(x3) {
          return n(W, x3);
        }), f()) {
          var _3 = Hr;
          wi(W, _3);
        }
        return yn;
      }
      function ut(W, re, q, ge) {
        if (re !== null && re.tag === xe) {
          l(W, re.sibling);
          var Ve = h(re, q);
          return Ve.return = W, Ve;
        }
        l(W, re);
        var ze = Sg(q, W.mode, ge);
        return ze.return = W, ze;
      }
      function Ze(W, re, q, ge) {
        for (var Ve = q.key, ze = re; ze !== null; ) {
          if (ze.key === Ve) {
            var At = q.type;
            if (At === Gt) {
              if (ze.tag === pe) {
                l(W, ze.sibling);
                var ft = h(ze, q.props.children);
                return ft.return = W, ft._debugSource = q._source, ft._debugOwner = q._owner, ft;
              }
            } else if (ze.elementType === At || D1(ze, q) || typeof At == "object" && At !== null && At.$$typeof === Ke && U0(At) === ze.type) {
              l(W, ze.sibling);
              var Ut = h(ze, q.props);
              return Ut.ref = of(W, ze, q), Ut.return = W, Ut._debugSource = q._source, Ut._debugOwner = q._owner, Ut;
            }
            l(W, ze);
            break;
          } else
            n(W, ze);
          ze = ze.sibling;
        }
        if (q.type === Gt) {
          var wt = Us(q.props.children, W.mode, ge, q.key);
          return wt.return = W, wt;
        } else {
          var yn = yg(q, W.mode, ge);
          return yn.ref = of(W, re, q), yn.return = W, yn;
        }
      }
      function Zt(W, re, q, ge) {
        for (var Ve = q.key, ze = re; ze !== null; ) {
          if (ze.key === Ve)
            if (ze.tag === Q && ze.stateNode.containerInfo === q.containerInfo && ze.stateNode.implementation === q.implementation) {
              l(W, ze.sibling);
              var At = h(ze, q.children || []);
              return At.return = W, At;
            } else {
              l(W, ze);
              break;
            }
          else
            n(W, ze);
          ze = ze.sibling;
        }
        var ft = _g(q, W.mode, ge);
        return ft.return = W, ft;
      }
      function Pt(W, re, q, ge) {
        var Ve = typeof q == "object" && q !== null && q.type === Gt && q.key === null;
        if (Ve && (q = q.props.children), typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ft:
              return C(Ze(W, re, q, ge));
            case Ce:
              return C(Zt(W, re, q, ge));
            case Ke:
              var ze = q._payload, At = q._init;
              return Pt(W, re, At(ze), ge);
          }
          if (Tt(q))
            return se(W, re, q, ge);
          if (be(q))
            return We(W, re, q, ge);
          vh(W, q);
        }
        return typeof q == "string" && q !== "" || typeof q == "number" ? C(ut(W, re, "" + q, ge)) : (typeof q == "function" && ph(W), l(W, re));
      }
      return Pt;
    }
    var Uu = F0(!0), H0 = F0(!1);
    function rx(t, n) {
      if (t !== null && n.child !== t.child)
        throw new Error("Resuming work not yet implemented.");
      if (n.child !== null) {
        var l = n.child, c = wo(l, l.pendingProps);
        for (n.child = c, c.return = n; l.sibling !== null; )
          l = l.sibling, c = c.sibling = wo(l, l.pendingProps), c.return = n;
        c.sibling = null;
      }
    }
    function ax(t, n) {
      for (var l = t.child; l !== null; )
        KE(l, n), l = l.sibling;
    }
    var uf = {}, Ns = ia(uf), cf = ia(uf), mh = ia(uf);
    function gh(t) {
      if (t === uf)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return t;
    }
    function Vp() {
      var t = gh(mh.current);
      return t;
    }
    function Yp(t, n) {
      jn(mh, n, t), jn(cf, t, t), jn(Ns, uf, t);
      var l = Ii(n);
      mn(Ns, t), jn(Ns, l, t);
    }
    function Fu(t) {
      mn(Ns, t), mn(cf, t), mn(mh, t);
    }
    function ff() {
      var t = gh(Ns.current);
      return t;
    }
    function G0(t) {
      var n = gh(mh.current), l = gh(Ns.current), c = br(l, t.type, n);
      l !== c && (jn(cf, t, t), jn(Ns, c, t));
    }
    function qp(t) {
      cf.current === t && (mn(Ns, t), mn(cf, t));
    }
    var ix = 0, j0 = 1, B0 = 1, df = 2, Mi = ia(ix);
    function Wp(t, n) {
      return (t & n) !== 0;
    }
    function Hu(t) {
      return t & j0;
    }
    function Xp(t, n) {
      return t & j0 | n;
    }
    function lx(t, n) {
      return t | n;
    }
    function Ms(t, n) {
      jn(Mi, n, t);
    }
    function Gu(t) {
      mn(Mi, t);
    }
    function sx(t, n) {
      var l = t.memoizedState;
      return l !== null ? l.dehydrated !== null : (t.memoizedProps, !0);
    }
    function yh(t) {
      for (var n = t; n !== null; ) {
        if (n.tag === fe) {
          var l = n.memoizedState;
          if (l !== null) {
            var c = l.dehydrated;
            if (c === null || ti(c) || yi(c))
              return n;
          }
        } else if (n.tag === nt && n.memoizedProps.revealOrder !== void 0) {
          var h = (n.flags & Dt) !== Ge;
          if (h)
            return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === t)
          return null;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
            return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    var Ra = 0, vr = 1, rl = 2, pr = 4, Pr = 8, Qp = [];
    function Kp() {
      for (var t = 0; t < Qp.length; t++) {
        var n = Qp[t];
        jo ? n._workInProgressVersionPrimary = null : n._workInProgressVersionSecondary = null;
      }
      Qp.length = 0;
    }
    function ox(t, n) {
      var l = n._getVersion, c = l(n._source);
      t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, c] : t.mutableSourceEagerHydrationData.push(n, c);
    }
    var Pe = d.ReactCurrentDispatcher, hf = d.ReactCurrentBatchConfig, Jp, ju;
    Jp = /* @__PURE__ */ new Set();
    var _o = ue, Jt = null, mr = null, gr = null, Sh = !1, vf = !1, pf = 0, ux = 0, cx = 25, ae = null, oi = null, Os = -1, Zp = !1;
    function jt() {
      {
        var t = ae;
        oi === null ? oi = [t] : oi.push(t);
      }
    }
    function Te() {
      {
        var t = ae;
        oi !== null && (Os++, oi[Os] !== t && fx(t));
      }
    }
    function Bu(t) {
      t != null && !Tt(t) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof t);
    }
    function fx(t) {
      {
        var n = Ye(Jt);
        if (!Jp.has(n) && (Jp.add(n), oi !== null)) {
          for (var l = "", c = 30, h = 0; h <= Os; h++) {
            for (var y = oi[h], C = h === Os ? t : y, b = h + 1 + ". " + y; b.length < c; )
              b += " ";
            b += C + `
`, l += b;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, n, l);
        }
      }
    }
    function Qr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function $p(t, n) {
      if (Zp)
        return !1;
      if (n === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      t.length !== n.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + n.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var l = 0; l < n.length && l < t.length; l++)
        if (!Hn(t[l], n[l]))
          return !1;
      return !0;
    }
    function Iu(t, n, l, c, h, y) {
      _o = y, Jt = n, oi = t !== null ? t._debugHookTypes : null, Os = -1, Zp = t !== null && t.type !== n.type, n.memoizedState = null, n.updateQueue = null, n.lanes = ue, t !== null && t.memoizedState !== null ? Pe.current = cy : oi !== null ? Pe.current = uy : Pe.current = oy;
      var C = l(c, h);
      if (vf) {
        var b = 0;
        do {
          if (vf = !1, pf = 0, b >= cx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          b += 1, Zp = !1, mr = null, gr = null, n.updateQueue = null, Os = -1, Pe.current = fy, C = l(c, h);
        } while (vf);
      }
      Pe.current = Lh, n._debugHookTypes = oi;
      var D = mr !== null && mr.next !== null;
      if (_o = ue, Jt = null, mr = null, gr = null, ae = null, oi = null, Os = -1, t !== null && (t.flags & bn) !== (n.flags & bn) && (t.mode & Rt) !== et && m("Internal React error: Expected static flag was missing. Please notify the React team."), Sh = !1, D)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return C;
    }
    function Vu() {
      var t = pf !== 0;
      return pf = 0, t;
    }
    function I0(t, n, l) {
      n.updateQueue = t.updateQueue, (n.mode & Ir) !== et ? n.flags &= ~(St | bt | Mr | pt) : n.flags &= ~(Mr | pt), t.lanes = so(t.lanes, l);
    }
    function V0() {
      if (Pe.current = Lh, Sh) {
        for (var t = Jt.memoizedState; t !== null; ) {
          var n = t.queue;
          n !== null && (n.pending = null), t = t.next;
        }
        Sh = !1;
      }
      _o = ue, Jt = null, mr = null, gr = null, oi = null, Os = -1, ae = null, ry = !1, vf = !1, pf = 0;
    }
    function al() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return gr === null ? Jt.memoizedState = gr = t : gr = gr.next = t, gr;
    }
    function ui() {
      var t;
      if (mr === null) {
        var n = Jt.alternate;
        n !== null ? t = n.memoizedState : t = null;
      } else
        t = mr.next;
      var l;
      if (gr === null ? l = Jt.memoizedState : l = gr.next, l !== null)
        gr = l, l = gr.next, mr = t;
      else {
        if (t === null)
          throw new Error("Rendered more hooks than during the previous render.");
        mr = t;
        var c = {
          memoizedState: mr.memoizedState,
          baseState: mr.baseState,
          baseQueue: mr.baseQueue,
          queue: mr.queue,
          next: null
        };
        gr === null ? Jt.memoizedState = gr = c : gr = gr.next = c;
      }
      return gr;
    }
    function Y0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function em(t, n) {
      return typeof n == "function" ? n(t) : n;
    }
    function tm(t, n, l) {
      var c = al(), h;
      l !== void 0 ? h = l(n) : h = n, c.memoizedState = c.baseState = h;
      var y = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: h
      };
      c.queue = y;
      var C = y.dispatch = px.bind(null, Jt, y);
      return [c.memoizedState, C];
    }
    function nm(t, n, l) {
      var c = ui(), h = c.queue;
      if (h === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      h.lastRenderedReducer = t;
      var y = mr, C = y.baseQueue, b = h.pending;
      if (b !== null) {
        if (C !== null) {
          var D = C.next, O = b.next;
          C.next = O, b.next = D;
        }
        y.baseQueue !== C && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), y.baseQueue = C = b, h.pending = null;
      }
      if (C !== null) {
        var P = C.next, Y = y.baseState, $ = null, ie = null, ce = null, se = P;
        do {
          var We = se.lane;
          if (ys(_o, We)) {
            if (ce !== null) {
              var Ze = {
                lane: In,
                action: se.action,
                hasEagerState: se.hasEagerState,
                eagerState: se.eagerState,
                next: null
              };
              ce = ce.next = Ze;
            }
            if (se.hasEagerState)
              Y = se.eagerState;
            else {
              var Zt = se.action;
              Y = t(Y, Zt);
            }
          } else {
            var ut = {
              lane: We,
              action: se.action,
              hasEagerState: se.hasEagerState,
              eagerState: se.eagerState,
              next: null
            };
            ce === null ? (ie = ce = ut, $ = Y) : ce = ce.next = ut, Jt.lanes = at(Jt.lanes, We), zf(We);
          }
          se = se.next;
        } while (se !== null && se !== P);
        ce === null ? $ = Y : ce.next = ie, Hn(Y, c.memoizedState) || Cf(), c.memoizedState = Y, c.baseState = $, c.baseQueue = ce, h.lastRenderedState = Y;
      }
      var Pt = h.interleaved;
      if (Pt !== null) {
        var W = Pt;
        do {
          var re = W.lane;
          Jt.lanes = at(Jt.lanes, re), zf(re), W = W.next;
        } while (W !== Pt);
      } else
        C === null && (h.lanes = ue);
      var q = h.dispatch;
      return [c.memoizedState, q];
    }
    function rm(t, n, l) {
      var c = ui(), h = c.queue;
      if (h === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      h.lastRenderedReducer = t;
      var y = h.dispatch, C = h.pending, b = c.memoizedState;
      if (C !== null) {
        h.pending = null;
        var D = C.next, O = D;
        do {
          var P = O.action;
          b = t(b, P), O = O.next;
        } while (O !== D);
        Hn(b, c.memoizedState) || Cf(), c.memoizedState = b, c.baseQueue === null && (c.baseState = b), h.lastRenderedState = b;
      }
      return [b, y];
    }
    function nw(t, n, l) {
    }
    function rw(t, n, l) {
    }
    function am(t, n, l) {
      var c = Jt, h = al(), y, C = f();
      if (C) {
        if (l === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        y = l(), ju || y !== l() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), ju = !0);
      } else {
        if (y = n(), !ju) {
          var b = n();
          Hn(y, b) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), ju = !0);
        }
        var D = lv();
        if (D === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ms(D, _o) || q0(c, n, y);
      }
      h.memoizedState = y;
      var O = {
        value: y,
        getSnapshot: n
      };
      return h.queue = O, bh(X0.bind(null, c, O, t), [t]), c.flags |= Mr, mf(vr | Pr, W0.bind(null, c, O, y, n), void 0, null), y;
    }
    function _h(t, n, l) {
      var c = Jt, h = ui(), y = n();
      if (!ju) {
        var C = n();
        Hn(y, C) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), ju = !0);
      }
      var b = h.memoizedState, D = !Hn(b, y);
      D && (h.memoizedState = y, Cf());
      var O = h.queue;
      if (yf(X0.bind(null, c, O, t), [t]), O.getSnapshot !== n || D || gr !== null && gr.memoizedState.tag & vr) {
        c.flags |= Mr, mf(vr | Pr, W0.bind(null, c, O, y, n), void 0, null);
        var P = lv();
        if (P === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ms(P, _o) || q0(c, n, y);
      }
      return y;
    }
    function q0(t, n, l) {
      t.flags |= Sl;
      var c = {
        getSnapshot: n,
        value: l
      }, h = Jt.updateQueue;
      if (h === null)
        h = Y0(), Jt.updateQueue = h, h.stores = [c];
      else {
        var y = h.stores;
        y === null ? h.stores = [c] : y.push(c);
      }
    }
    function W0(t, n, l, c) {
      n.value = l, n.getSnapshot = c, Q0(n) && K0(t);
    }
    function X0(t, n, l) {
      var c = function() {
        Q0(n) && K0(t);
      };
      return l(c);
    }
    function Q0(t) {
      var n = t.getSnapshot, l = t.value;
      try {
        var c = n();
        return !Hn(l, c);
      } catch {
        return !0;
      }
    }
    function K0(t) {
      var n = ca(t, it);
      n !== null && nr(n, t, it, sn);
    }
    function xh(t) {
      var n = al();
      typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t;
      var l = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: em,
        lastRenderedState: t
      };
      n.queue = l;
      var c = l.dispatch = mx.bind(null, Jt, l);
      return [n.memoizedState, c];
    }
    function im(t) {
      return nm(em);
    }
    function lm(t) {
      return rm(em);
    }
    function mf(t, n, l, c) {
      var h = {
        tag: t,
        create: n,
        destroy: l,
        deps: c,
        next: null
      }, y = Jt.updateQueue;
      if (y === null)
        y = Y0(), Jt.updateQueue = y, y.lastEffect = h.next = h;
      else {
        var C = y.lastEffect;
        if (C === null)
          y.lastEffect = h.next = h;
        else {
          var b = C.next;
          C.next = h, h.next = b, y.lastEffect = h;
        }
      }
      return h;
    }
    function sm(t) {
      var n = al();
      {
        var l = {
          current: t
        };
        return n.memoizedState = l, l;
      }
    }
    function Ch(t) {
      var n = ui();
      return n.memoizedState;
    }
    function gf(t, n, l, c) {
      var h = al(), y = c === void 0 ? null : c;
      Jt.flags |= t, h.memoizedState = mf(vr | n, l, void 0, y);
    }
    function Eh(t, n, l, c) {
      var h = ui(), y = c === void 0 ? null : c, C = void 0;
      if (mr !== null) {
        var b = mr.memoizedState;
        if (C = b.destroy, y !== null) {
          var D = b.deps;
          if ($p(y, D)) {
            h.memoizedState = mf(n, l, C, y);
            return;
          }
        }
      }
      Jt.flags |= t, h.memoizedState = mf(vr | n, l, C, y);
    }
    function bh(t, n) {
      return (Jt.mode & Ir) !== et ? gf(St | Mr | Ot, Pr, t, n) : gf(Mr | Ot, Pr, t, n);
    }
    function yf(t, n) {
      return Eh(Mr, Pr, t, n);
    }
    function om(t, n) {
      return gf(pt, rl, t, n);
    }
    function Th(t, n) {
      return Eh(pt, rl, t, n);
    }
    function um(t, n) {
      var l = pt;
      return l |= Je, (Jt.mode & Ir) !== et && (l |= bt), gf(l, pr, t, n);
    }
    function Rh(t, n) {
      return Eh(pt, pr, t, n);
    }
    function J0(t, n) {
      if (typeof n == "function") {
        var l = n, c = t();
        return l(c), function() {
          l(null);
        };
      } else if (n != null) {
        var h = n;
        h.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(h).join(", ") + "}");
        var y = t();
        return h.current = y, function() {
          h.current = null;
        };
      }
    }
    function cm(t, n, l) {
      typeof n != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var c = l != null ? l.concat([t]) : null, h = pt;
      return h |= Je, (Jt.mode & Ir) !== et && (h |= bt), gf(h, pr, J0.bind(null, n, t), c);
    }
    function wh(t, n, l) {
      typeof n != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var c = l != null ? l.concat([t]) : null;
      return Eh(pt, pr, J0.bind(null, n, t), c);
    }
    function dx(t, n) {
    }
    var Dh = dx;
    function fm(t, n) {
      var l = al(), c = n === void 0 ? null : n;
      return l.memoizedState = [t, c], t;
    }
    function Nh(t, n) {
      var l = ui(), c = n === void 0 ? null : n, h = l.memoizedState;
      if (h !== null && c !== null) {
        var y = h[1];
        if ($p(c, y))
          return h[0];
      }
      return l.memoizedState = [t, c], t;
    }
    function dm(t, n) {
      var l = al(), c = n === void 0 ? null : n, h = t();
      return l.memoizedState = [h, c], h;
    }
    function Mh(t, n) {
      var l = ui(), c = n === void 0 ? null : n, h = l.memoizedState;
      if (h !== null && c !== null) {
        var y = h[1];
        if ($p(c, y))
          return h[0];
      }
      var C = t();
      return l.memoizedState = [C, c], C;
    }
    function hm(t) {
      var n = al();
      return n.memoizedState = t, t;
    }
    function Z0(t) {
      var n = ui(), l = mr, c = l.memoizedState;
      return ey(n, c, t);
    }
    function $0(t) {
      var n = ui();
      if (mr === null)
        return n.memoizedState = t, t;
      var l = mr.memoizedState;
      return ey(n, l, t);
    }
    function ey(t, n, l) {
      var c = !zd(_o);
      if (c) {
        if (!Hn(l, n)) {
          var h = lo();
          Jt.lanes = at(Jt.lanes, h), zf(h), t.baseState = !0;
        }
        return n;
      } else
        return t.baseState && (t.baseState = !1, Cf()), t.memoizedState = l, l;
    }
    function hx(t, n, l) {
      var c = Yr();
      kn(Gd(c, Ll)), t(!0);
      var h = hf.transition;
      hf.transition = {};
      var y = hf.transition;
      hf.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        t(!1), n();
      } finally {
        if (kn(c), hf.transition = h, h === null && y._updatedFibers) {
          var C = y._updatedFibers.size;
          C > 10 && _("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), y._updatedFibers.clear();
        }
      }
    }
    function vm() {
      var t = xh(!1), n = t[0], l = t[1], c = hx.bind(null, l), h = al();
      return h.memoizedState = c, [n, c];
    }
    function ty() {
      var t = im(), n = t[0], l = ui(), c = l.memoizedState;
      return [n, c];
    }
    function ny() {
      var t = lm(), n = t[0], l = ui(), c = l.memoizedState;
      return [n, c];
    }
    var ry = !1;
    function vx() {
      return ry;
    }
    function pm() {
      var t = al(), n = lv(), l = n.identifierPrefix, c;
      if (f()) {
        var h = Wd();
        c = ":" + l + "R" + h;
        var y = pf++;
        y > 0 && (c += "H" + y.toString(32)), c += ":";
      } else {
        var C = ux++;
        c = ":" + l + "r" + C.toString(32) + ":";
      }
      return t.memoizedState = c, c;
    }
    function Oh() {
      var t = ui(), n = t.memoizedState;
      return n;
    }
    function px(t, n, l) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var c = ks(t), h = {
        lane: c,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ay(t))
        iy(n, h);
      else {
        var y = E0(t, n, h, c);
        if (y !== null) {
          var C = Kr();
          nr(y, t, c, C), ly(y, n, c);
        }
      }
      sy(t, c);
    }
    function mx(t, n, l) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var c = ks(t), h = {
        lane: c,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ay(t))
        iy(n, h);
      else {
        var y = t.alternate;
        if (t.lanes === ue && (y === null || y.lanes === ue)) {
          var C = n.lastRenderedReducer;
          if (C !== null) {
            var b;
            b = Pe.current, Pe.current = Oi;
            try {
              var D = n.lastRenderedState, O = C(D, l);
              if (h.hasEagerState = !0, h.eagerState = O, Hn(O, D)) {
                X_(t, n, h, c);
                return;
              }
            } catch {
            } finally {
              Pe.current = b;
            }
          }
        }
        var P = E0(t, n, h, c);
        if (P !== null) {
          var Y = Kr();
          nr(P, t, c, Y), ly(P, n, c);
        }
      }
      sy(t, c);
    }
    function ay(t) {
      var n = t.alternate;
      return t === Jt || n !== null && n === Jt;
    }
    function iy(t, n) {
      vf = Sh = !0;
      var l = t.pending;
      l === null ? n.next = n : (n.next = l.next, l.next = n), t.pending = n;
    }
    function ly(t, n, l) {
      if (Su(l)) {
        var c = n.lanes;
        c = Ss(c, t.pendingLanes);
        var h = at(c, l);
        n.lanes = h, Wc(t, h);
      }
    }
    function sy(t, n, l) {
      ii(t, n);
    }
    var Lh = {
      readContext: er,
      useCallback: Qr,
      useContext: Qr,
      useEffect: Qr,
      useImperativeHandle: Qr,
      useInsertionEffect: Qr,
      useLayoutEffect: Qr,
      useMemo: Qr,
      useReducer: Qr,
      useRef: Qr,
      useState: Qr,
      useDebugValue: Qr,
      useDeferredValue: Qr,
      useTransition: Qr,
      useMutableSource: Qr,
      useSyncExternalStore: Qr,
      useId: Qr,
      unstable_isNewReconciler: R
    }, oy = null, uy = null, cy = null, fy = null, il = null, Oi = null, Ah = null;
    {
      var mm = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ht = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      oy = {
        readContext: function(t) {
          return er(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", jt(), Bu(n), fm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", jt(), er(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", jt(), Bu(n), bh(t, n);
        },
        useImperativeHandle: function(t, n, l) {
          return ae = "useImperativeHandle", jt(), Bu(l), cm(t, n, l);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", jt(), Bu(n), om(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", jt(), Bu(n), um(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", jt(), Bu(n);
          var l = Pe.current;
          Pe.current = il;
          try {
            return dm(t, n);
          } finally {
            Pe.current = l;
          }
        },
        useReducer: function(t, n, l) {
          ae = "useReducer", jt();
          var c = Pe.current;
          Pe.current = il;
          try {
            return tm(t, n, l);
          } finally {
            Pe.current = c;
          }
        },
        useRef: function(t) {
          return ae = "useRef", jt(), sm(t);
        },
        useState: function(t) {
          ae = "useState", jt();
          var n = Pe.current;
          Pe.current = il;
          try {
            return xh(t);
          } finally {
            Pe.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", jt(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", jt(), hm(t);
        },
        useTransition: function() {
          return ae = "useTransition", jt(), vm();
        },
        useMutableSource: function(t, n, l) {
          return ae = "useMutableSource", jt(), void 0;
        },
        useSyncExternalStore: function(t, n, l) {
          return ae = "useSyncExternalStore", jt(), am(t, n, l);
        },
        useId: function() {
          return ae = "useId", jt(), pm();
        },
        unstable_isNewReconciler: R
      }, uy = {
        readContext: function(t) {
          return er(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), fm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), er(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Te(), bh(t, n);
        },
        useImperativeHandle: function(t, n, l) {
          return ae = "useImperativeHandle", Te(), cm(t, n, l);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", Te(), om(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", Te(), um(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", Te();
          var l = Pe.current;
          Pe.current = il;
          try {
            return dm(t, n);
          } finally {
            Pe.current = l;
          }
        },
        useReducer: function(t, n, l) {
          ae = "useReducer", Te();
          var c = Pe.current;
          Pe.current = il;
          try {
            return tm(t, n, l);
          } finally {
            Pe.current = c;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), sm(t);
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = Pe.current;
          Pe.current = il;
          try {
            return xh(t);
          } finally {
            Pe.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", Te(), hm(t);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), vm();
        },
        useMutableSource: function(t, n, l) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(t, n, l) {
          return ae = "useSyncExternalStore", Te(), am(t, n, l);
        },
        useId: function() {
          return ae = "useId", Te(), pm();
        },
        unstable_isNewReconciler: R
      }, cy = {
        readContext: function(t) {
          return er(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), Nh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), er(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Te(), yf(t, n);
        },
        useImperativeHandle: function(t, n, l) {
          return ae = "useImperativeHandle", Te(), wh(t, n, l);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", Te(), Th(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", Te(), Rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", Te();
          var l = Pe.current;
          Pe.current = Oi;
          try {
            return Mh(t, n);
          } finally {
            Pe.current = l;
          }
        },
        useReducer: function(t, n, l) {
          ae = "useReducer", Te();
          var c = Pe.current;
          Pe.current = Oi;
          try {
            return nm(t, n, l);
          } finally {
            Pe.current = c;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), Ch();
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = Pe.current;
          Pe.current = Oi;
          try {
            return im(t);
          } finally {
            Pe.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", Te(), Dh();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", Te(), Z0(t);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), ty();
        },
        useMutableSource: function(t, n, l) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(t, n, l) {
          return ae = "useSyncExternalStore", Te(), _h(t, n);
        },
        useId: function() {
          return ae = "useId", Te(), Oh();
        },
        unstable_isNewReconciler: R
      }, fy = {
        readContext: function(t) {
          return er(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", Te(), Nh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", Te(), er(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", Te(), yf(t, n);
        },
        useImperativeHandle: function(t, n, l) {
          return ae = "useImperativeHandle", Te(), wh(t, n, l);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", Te(), Th(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", Te(), Rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", Te();
          var l = Pe.current;
          Pe.current = Ah;
          try {
            return Mh(t, n);
          } finally {
            Pe.current = l;
          }
        },
        useReducer: function(t, n, l) {
          ae = "useReducer", Te();
          var c = Pe.current;
          Pe.current = Ah;
          try {
            return rm(t, n, l);
          } finally {
            Pe.current = c;
          }
        },
        useRef: function(t) {
          return ae = "useRef", Te(), Ch();
        },
        useState: function(t) {
          ae = "useState", Te();
          var n = Pe.current;
          Pe.current = Ah;
          try {
            return lm(t);
          } finally {
            Pe.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", Te(), Dh();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", Te(), $0(t);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), ny();
        },
        useMutableSource: function(t, n, l) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(t, n, l) {
          return ae = "useSyncExternalStore", Te(), _h(t, n);
        },
        useId: function() {
          return ae = "useId", Te(), Oh();
        },
        unstable_isNewReconciler: R
      }, il = {
        readContext: function(t) {
          return mm(), er(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", ht(), jt(), fm(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", ht(), jt(), er(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", ht(), jt(), bh(t, n);
        },
        useImperativeHandle: function(t, n, l) {
          return ae = "useImperativeHandle", ht(), jt(), cm(t, n, l);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", ht(), jt(), om(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", ht(), jt(), um(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", ht(), jt();
          var l = Pe.current;
          Pe.current = il;
          try {
            return dm(t, n);
          } finally {
            Pe.current = l;
          }
        },
        useReducer: function(t, n, l) {
          ae = "useReducer", ht(), jt();
          var c = Pe.current;
          Pe.current = il;
          try {
            return tm(t, n, l);
          } finally {
            Pe.current = c;
          }
        },
        useRef: function(t) {
          return ae = "useRef", ht(), jt(), sm(t);
        },
        useState: function(t) {
          ae = "useState", ht(), jt();
          var n = Pe.current;
          Pe.current = il;
          try {
            return xh(t);
          } finally {
            Pe.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", ht(), jt(), void 0;
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", ht(), jt(), hm(t);
        },
        useTransition: function() {
          return ae = "useTransition", ht(), jt(), vm();
        },
        useMutableSource: function(t, n, l) {
          return ae = "useMutableSource", ht(), jt(), void 0;
        },
        useSyncExternalStore: function(t, n, l) {
          return ae = "useSyncExternalStore", ht(), jt(), am(t, n, l);
        },
        useId: function() {
          return ae = "useId", ht(), jt(), pm();
        },
        unstable_isNewReconciler: R
      }, Oi = {
        readContext: function(t) {
          return mm(), er(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", ht(), Te(), Nh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", ht(), Te(), er(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", ht(), Te(), yf(t, n);
        },
        useImperativeHandle: function(t, n, l) {
          return ae = "useImperativeHandle", ht(), Te(), wh(t, n, l);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", ht(), Te(), Th(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", ht(), Te(), Rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", ht(), Te();
          var l = Pe.current;
          Pe.current = Oi;
          try {
            return Mh(t, n);
          } finally {
            Pe.current = l;
          }
        },
        useReducer: function(t, n, l) {
          ae = "useReducer", ht(), Te();
          var c = Pe.current;
          Pe.current = Oi;
          try {
            return nm(t, n, l);
          } finally {
            Pe.current = c;
          }
        },
        useRef: function(t) {
          return ae = "useRef", ht(), Te(), Ch();
        },
        useState: function(t) {
          ae = "useState", ht(), Te();
          var n = Pe.current;
          Pe.current = Oi;
          try {
            return im(t);
          } finally {
            Pe.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", ht(), Te(), Dh();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", ht(), Te(), Z0(t);
        },
        useTransition: function() {
          return ae = "useTransition", ht(), Te(), ty();
        },
        useMutableSource: function(t, n, l) {
          return ae = "useMutableSource", ht(), Te(), void 0;
        },
        useSyncExternalStore: function(t, n, l) {
          return ae = "useSyncExternalStore", ht(), Te(), _h(t, n);
        },
        useId: function() {
          return ae = "useId", ht(), Te(), Oh();
        },
        unstable_isNewReconciler: R
      }, Ah = {
        readContext: function(t) {
          return mm(), er(t);
        },
        useCallback: function(t, n) {
          return ae = "useCallback", ht(), Te(), Nh(t, n);
        },
        useContext: function(t) {
          return ae = "useContext", ht(), Te(), er(t);
        },
        useEffect: function(t, n) {
          return ae = "useEffect", ht(), Te(), yf(t, n);
        },
        useImperativeHandle: function(t, n, l) {
          return ae = "useImperativeHandle", ht(), Te(), wh(t, n, l);
        },
        useInsertionEffect: function(t, n) {
          return ae = "useInsertionEffect", ht(), Te(), Th(t, n);
        },
        useLayoutEffect: function(t, n) {
          return ae = "useLayoutEffect", ht(), Te(), Rh(t, n);
        },
        useMemo: function(t, n) {
          ae = "useMemo", ht(), Te();
          var l = Pe.current;
          Pe.current = Oi;
          try {
            return Mh(t, n);
          } finally {
            Pe.current = l;
          }
        },
        useReducer: function(t, n, l) {
          ae = "useReducer", ht(), Te();
          var c = Pe.current;
          Pe.current = Oi;
          try {
            return rm(t, n, l);
          } finally {
            Pe.current = c;
          }
        },
        useRef: function(t) {
          return ae = "useRef", ht(), Te(), Ch();
        },
        useState: function(t) {
          ae = "useState", ht(), Te();
          var n = Pe.current;
          Pe.current = Oi;
          try {
            return lm(t);
          } finally {
            Pe.current = n;
          }
        },
        useDebugValue: function(t, n) {
          return ae = "useDebugValue", ht(), Te(), Dh();
        },
        useDeferredValue: function(t) {
          return ae = "useDeferredValue", ht(), Te(), $0(t);
        },
        useTransition: function() {
          return ae = "useTransition", ht(), Te(), ny();
        },
        useMutableSource: function(t, n, l) {
          return ae = "useMutableSource", ht(), Te(), void 0;
        },
        useSyncExternalStore: function(t, n, l) {
          return ae = "useSyncExternalStore", ht(), Te(), _h(t, n);
        },
        useId: function() {
          return ae = "useId", ht(), Te(), Oh();
        },
        unstable_isNewReconciler: R
      };
    }
    var Ls = u.unstable_now, dy = 0, Ph = -1, Sf = -1, kh = -1, gm = !1, zh = !1;
    function hy() {
      return gm;
    }
    function gx() {
      zh = !0;
    }
    function yx() {
      gm = !1, zh = !1;
    }
    function Sx() {
      gm = zh, zh = !1;
    }
    function vy() {
      return dy;
    }
    function py() {
      dy = Ls();
    }
    function ym(t) {
      Sf = Ls(), t.actualStartTime < 0 && (t.actualStartTime = Ls());
    }
    function my(t) {
      Sf = -1;
    }
    function Uh(t, n) {
      if (Sf >= 0) {
        var l = Ls() - Sf;
        t.actualDuration += l, n && (t.selfBaseDuration = l), Sf = -1;
      }
    }
    function ll(t) {
      if (Ph >= 0) {
        var n = Ls() - Ph;
        Ph = -1;
        for (var l = t.return; l !== null; ) {
          switch (l.tag) {
            case ee:
              var c = l.stateNode;
              c.effectDuration += n;
              return;
            case oe:
              var h = l.stateNode;
              h.effectDuration += n;
              return;
          }
          l = l.return;
        }
      }
    }
    function Sm(t) {
      if (kh >= 0) {
        var n = Ls() - kh;
        kh = -1;
        for (var l = t.return; l !== null; ) {
          switch (l.tag) {
            case ee:
              var c = l.stateNode;
              c !== null && (c.passiveEffectDuration += n);
              return;
            case oe:
              var h = l.stateNode;
              h !== null && (h.passiveEffectDuration += n);
              return;
          }
          l = l.return;
        }
      }
    }
    function sl() {
      Ph = Ls();
    }
    function _m() {
      kh = Ls();
    }
    function xm(t) {
      for (var n = t.child; n; )
        t.actualDuration += n.actualDuration, n = n.sibling;
    }
    function xo(t, n) {
      return {
        value: t,
        source: n,
        stack: me(n),
        digest: null
      };
    }
    function Cm(t, n, l) {
      return {
        value: t,
        source: null,
        stack: l ?? null,
        digest: n ?? null
      };
    }
    function _x(t, n) {
      return !0;
    }
    function Em(t, n) {
      try {
        var l = _x(t, n);
        if (l === !1)
          return;
        var c = n.value, h = n.source, y = n.stack, C = y !== null ? y : "";
        if (c != null && c._suppressLogging) {
          if (t.tag === X)
            return;
          console.error(c);
        }
        var b = h ? Ye(h) : null, D = b ? "The above error occurred in the <" + b + "> component:" : "The above error occurred in one of your React components:", O;
        if (t.tag === ee)
          O = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var P = Ye(t) || "Anonymous";
          O = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + P + ".");
        }
        var Y = D + `
` + C + `

` + ("" + O);
        console.error(Y);
      } catch ($) {
        setTimeout(function() {
          throw $;
        });
      }
    }
    var xx = typeof WeakMap == "function" ? WeakMap : Map;
    function gy(t, n, l) {
      var c = Il(sn, l);
      c.tag = Ep, c.payload = {
        element: null
      };
      var h = n.value;
      return c.callback = function() {
        ME(h), Em(t, n);
      }, c;
    }
    function bm(t, n, l) {
      var c = Il(sn, l);
      c.tag = Ep;
      var h = t.type.getDerivedStateFromError;
      if (typeof h == "function") {
        var y = n.value;
        c.payload = function() {
          return h(y);
        }, c.callback = function() {
          N1(t), Em(t, n);
        };
      }
      var C = t.stateNode;
      return C !== null && typeof C.componentDidCatch == "function" && (c.callback = function() {
        N1(t), Em(t, n), typeof h != "function" && DE(this);
        var D = n.value, O = n.stack;
        this.componentDidCatch(D, {
          componentStack: O !== null ? O : ""
        }), typeof h != "function" && (Nn(t.lanes, it) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(t) || "Unknown"));
      }), c;
    }
    function yy(t, n, l) {
      var c = t.pingCache, h;
      if (c === null ? (c = t.pingCache = new xx(), h = /* @__PURE__ */ new Set(), c.set(n, h)) : (h = c.get(n), h === void 0 && (h = /* @__PURE__ */ new Set(), c.set(n, h))), !h.has(l)) {
        h.add(l);
        var y = OE.bind(null, t, n, l);
        Wr && Uf(t, l), n.then(y, y);
      }
    }
    function Cx(t, n, l, c) {
      var h = t.updateQueue;
      if (h === null) {
        var y = /* @__PURE__ */ new Set();
        y.add(l), t.updateQueue = y;
      } else
        h.add(l);
    }
    function Ex(t, n) {
      var l = t.tag;
      if ((t.mode & Rt) === et && (l === V || l === Le || l === Se)) {
        var c = t.alternate;
        c ? (t.updateQueue = c.updateQueue, t.memoizedState = c.memoizedState, t.lanes = c.lanes) : (t.updateQueue = null, t.memoizedState = null);
      }
    }
    function Sy(t) {
      var n = t;
      do {
        if (n.tag === fe && sx(n))
          return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function _y(t, n, l, c, h) {
      if ((t.mode & Rt) === et) {
        if (t === n)
          t.flags |= lr;
        else {
          if (t.flags |= Dt, l.flags |= A, l.flags &= ~(Fo | _l), l.tag === X) {
            var y = l.alternate;
            if (y === null)
              l.tag = Ne;
            else {
              var C = Il(sn, it);
              C.tag = sh, Ds(l, C, it);
            }
          }
          l.lanes = at(l.lanes, it);
        }
        return t;
      }
      return t.flags |= lr, t.lanes = h, t;
    }
    function bx(t, n, l, c, h) {
      if (l.flags |= _l, Wr && Uf(t, h), c !== null && typeof c == "object" && typeof c.then == "function") {
        var y = c;
        Ex(l), f() && l.mode & Rt && af();
        var C = Sy(n);
        if (C !== null) {
          C.flags &= ~ga, _y(C, n, l, t, h), C.mode & Rt && yy(t, y, h), Cx(C, t, y);
          return;
        } else {
          if (!kd(h)) {
            yy(t, y, h), sg();
            return;
          }
          var b = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          c = b;
        }
      } else if (f() && l.mode & Rt) {
        af();
        var D = Sy(n);
        if (D !== null) {
          (D.flags & lr) === Ge && (D.flags |= ga), _y(D, n, l, t, h), p(xo(c, l));
          return;
        }
      }
      c = xo(c, l), _E(c);
      var O = n;
      do {
        switch (O.tag) {
          case ee: {
            var P = c;
            O.flags |= lr;
            var Y = Ol(h);
            O.lanes = at(O.lanes, Y);
            var $ = gy(O, P, Y);
            Rp(O, $);
            return;
          }
          case X:
            var ie = c, ce = O.type, se = O.stateNode;
            if ((O.flags & Dt) === Ge && (typeof ce.getDerivedStateFromError == "function" || se !== null && typeof se.componentDidCatch == "function" && !_1(se))) {
              O.flags |= lr;
              var We = Ol(h);
              O.lanes = at(O.lanes, We);
              var ut = bm(O, ie, We);
              Rp(O, ut);
              return;
            }
            break;
        }
        O = O.return;
      } while (O !== null);
    }
    function Tx() {
      return null;
    }
    var _f = d.ReactCurrentOwner, Li = !1, Tm, xf, Rm, wm, Dm, Co, Nm, Fh;
    Tm = {}, xf = {}, Rm = {}, wm = {}, Dm = {}, Co = !1, Nm = {}, Fh = {};
    function fa(t, n, l, c) {
      t === null ? n.child = H0(n, null, l, c) : n.child = Uu(n, t.child, l, c);
    }
    function Rx(t, n, l, c) {
      n.child = Uu(n, t.child, null, c), n.child = Uu(n, null, l, c);
    }
    function xy(t, n, l, c, h) {
      if (n.type !== n.elementType) {
        var y = l.propTypes;
        y && xa(
          y,
          c,
          "prop",
          $e(l)
        );
      }
      var C = l.render, b = n.ref, D, O;
      zu(n, h), Pl(n);
      {
        if (_f.current = n, H(!0), D = Iu(t, n, C, c, b, h), O = Vu(), n.mode & Ht) {
          zn(!0);
          try {
            D = Iu(t, n, C, c, b, h), O = Vu();
          } finally {
            zn(!1);
          }
        }
        H(!1);
      }
      return hn(), t !== null && !Li ? (I0(t, n, h), Vl(t, n, h)) : (f() && O && rf(n), n.flags |= pn, fa(t, n, D, h), n.child);
    }
    function Cy(t, n, l, c, h) {
      if (t === null) {
        var y = l.type;
        if (XE(y) && l.compare === null && l.defaultProps === void 0) {
          var C = y;
          return C = Zu(y), n.tag = Se, n.type = C, Lm(n, y), Ey(t, n, C, c, h);
        }
        {
          var b = y.propTypes;
          b && xa(
            b,
            c,
            "prop",
            $e(y)
          );
        }
        var D = gg(l.type, null, c, n, n.mode, h);
        return D.ref = n.ref, D.return = n, n.child = D, D;
      }
      {
        var O = l.type, P = O.propTypes;
        P && xa(
          P,
          c,
          "prop",
          $e(O)
        );
      }
      var Y = t.child, $ = Fm(t, h);
      if (!$) {
        var ie = Y.memoizedProps, ce = l.compare;
        if (ce = ce !== null ? ce : F, ce(ie, c) && t.ref === n.ref)
          return Vl(t, n, h);
      }
      n.flags |= pn;
      var se = wo(Y, c);
      return se.ref = n.ref, se.return = n, n.child = se, se;
    }
    function Ey(t, n, l, c, h) {
      if (n.type !== n.elementType) {
        var y = n.elementType;
        if (y.$$typeof === Ke) {
          var C = y, b = C._payload, D = C._init;
          try {
            y = D(b);
          } catch {
            y = null;
          }
          var O = y && y.propTypes;
          O && xa(
            O,
            c,
            "prop",
            $e(y)
          );
        }
      }
      if (t !== null) {
        var P = t.memoizedProps;
        if (F(P, c) && t.ref === n.ref && n.type === t.type)
          if (Li = !1, n.pendingProps = c = P, Fm(t, h))
            (t.flags & A) !== Ge && (Li = !0);
          else
            return n.lanes = t.lanes, Vl(t, n, h);
      }
      return Mm(t, n, l, c, h);
    }
    function by(t, n, l) {
      var c = n.pendingProps, h = c.children, y = t !== null ? t.memoizedState : null;
      if (c.mode === "hidden" || k)
        if ((n.mode & Rt) === et) {
          var C = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          n.memoizedState = C, ov(n, l);
        } else if (Nn(l, Vr)) {
          var Y = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          n.memoizedState = Y;
          var $ = y !== null ? y.baseLanes : l;
          ov(n, $);
        } else {
          var b = null, D;
          if (y !== null) {
            var O = y.baseLanes;
            D = at(O, l);
          } else
            D = l;
          n.lanes = n.childLanes = Vr;
          var P = {
            baseLanes: D,
            cachePool: b,
            transitions: null
          };
          return n.memoizedState = P, n.updateQueue = null, ov(n, D), null;
        }
      else {
        var ie;
        y !== null ? (ie = at(y.baseLanes, l), n.memoizedState = null) : ie = l, ov(n, ie);
      }
      return fa(t, n, h, l), n.child;
    }
    function wx(t, n, l) {
      var c = n.pendingProps;
      return fa(t, n, c, l), n.child;
    }
    function Dx(t, n, l) {
      var c = n.pendingProps.children;
      return fa(t, n, c, l), n.child;
    }
    function Nx(t, n, l) {
      {
        n.flags |= pt;
        {
          var c = n.stateNode;
          c.effectDuration = 0, c.passiveEffectDuration = 0;
        }
      }
      var h = n.pendingProps, y = h.children;
      return fa(t, n, y, l), n.child;
    }
    function Ty(t, n) {
      var l = n.ref;
      (t === null && l !== null || t !== null && t.ref !== l) && (n.flags |= ya, n.flags |= we);
    }
    function Mm(t, n, l, c, h) {
      if (n.type !== n.elementType) {
        var y = l.propTypes;
        y && xa(
          y,
          c,
          "prop",
          $e(l)
        );
      }
      var C;
      {
        var b = Wi(n, l, !0);
        C = Ci(n, b);
      }
      var D, O;
      zu(n, h), Pl(n);
      {
        if (_f.current = n, H(!0), D = Iu(t, n, l, c, C, h), O = Vu(), n.mode & Ht) {
          zn(!0);
          try {
            D = Iu(t, n, l, c, C, h), O = Vu();
          } finally {
            zn(!1);
          }
        }
        H(!1);
      }
      return hn(), t !== null && !Li ? (I0(t, n, h), Vl(t, n, h)) : (f() && O && rf(n), n.flags |= pn, fa(t, n, D, h), n.child);
    }
    function Ry(t, n, l, c, h) {
      {
        switch (F1(n)) {
          case !1: {
            var y = n.stateNode, C = n.type, b = new C(n.memoizedProps, y.context), D = b.state;
            y.updater.enqueueSetState(y, D, null);
            break;
          }
          case !0: {
            n.flags |= Dt, n.flags |= lr;
            var O = new Error("Simulated error coming from DevTools"), P = Ol(h);
            n.lanes = at(n.lanes, P);
            var Y = bm(n, xo(O, n), P);
            Rp(n, Y);
            break;
          }
        }
        if (n.type !== n.elementType) {
          var $ = l.propTypes;
          $ && xa(
            $,
            c,
            "prop",
            $e(l)
          );
        }
      }
      var ie;
      Nr(l) ? (ie = !0, Xi(n)) : ie = !1, zu(n, h);
      var ce = n.stateNode, se;
      ce === null ? (Gh(t, n), P0(n, l, c), Fp(n, l, c, h), se = !0) : t === null ? se = tx(n, l, c, h) : se = nx(t, n, l, c, h);
      var We = Om(t, n, l, se, ie, h);
      {
        var ut = n.stateNode;
        se && ut.props !== c && (Co || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(n) || "a component"), Co = !0);
      }
      return We;
    }
    function Om(t, n, l, c, h, y) {
      Ty(t, n);
      var C = (n.flags & Dt) !== Ge;
      if (!c && !C)
        return h && hs(n, l, !1), Vl(t, n, y);
      var b = n.stateNode;
      _f.current = n;
      var D;
      if (C && typeof l.getDerivedStateFromError != "function")
        D = null, my();
      else {
        Pl(n);
        {
          if (H(!0), D = b.render(), n.mode & Ht) {
            zn(!0);
            try {
              b.render();
            } finally {
              zn(!1);
            }
          }
          H(!1);
        }
        hn();
      }
      return n.flags |= pn, t !== null && C ? Rx(t, n, D, y) : fa(t, n, D, y), n.memoizedState = b.state, h && hs(n, l, !0), n.child;
    }
    function wy(t) {
      var n = t.stateNode;
      n.pendingContext ? Bn(t, n.pendingContext, n.pendingContext !== n.context) : n.context && Bn(t, n.context, !1), Yp(t, n.containerInfo);
    }
    function Mx(t, n, l) {
      if (wy(n), t === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var c = n.pendingProps, h = n.memoizedState, y = h.element;
      R0(t, n), fh(n, c, null, l);
      var C = n.memoizedState;
      n.stateNode;
      var b = C.element;
      if (wr && h.isDehydrated) {
        var D = {
          element: b,
          isDehydrated: !1,
          cache: C.cache,
          pendingSuspenseBoundaries: C.pendingSuspenseBoundaries,
          transitions: C.transitions
        }, O = n.updateQueue;
        if (O.baseState = D, n.memoizedState = D, n.flags & ga) {
          var P = xo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), n);
          return Dy(t, n, b, l, P);
        } else if (b !== y) {
          var Y = xo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), n);
          return Dy(t, n, b, l, Y);
        } else {
          pp(n);
          var $ = H0(n, null, b, l);
          n.child = $;
          for (var ie = $; ie; )
            ie.flags = ie.flags & ~Xt | Aa, ie = ie.sibling;
        }
      } else {
        if (r(), b === y)
          return Vl(t, n, l);
        fa(t, n, b, l);
      }
      return n.child;
    }
    function Dy(t, n, l, c, h) {
      return r(), p(h), n.flags |= ga, fa(t, n, l, c), n.child;
    }
    function Ox(t, n, l) {
      G0(n), t === null && yo(n);
      var c = n.type, h = n.pendingProps, y = t !== null ? t.memoizedProps : null, C = h.children, b = Go(c, h);
      return b ? C = null : y !== null && Go(c, y) && (n.flags |= hi), Ty(t, n), fa(t, n, C, l), n.child;
    }
    function Lx(t, n) {
      return t === null && yo(n), null;
    }
    function Ax(t, n, l, c) {
      Gh(t, n);
      var h = n.pendingProps, y = l, C = y._payload, b = y._init, D = b(C);
      n.type = D;
      var O = n.tag = QE(D), P = Ni(D, h), Y;
      switch (O) {
        case V:
          return Lm(n, D), n.type = D = Zu(D), Y = Mm(null, n, D, P, c), Y;
        case X:
          return n.type = D = fg(D), Y = Ry(null, n, D, P, c), Y;
        case Le:
          return n.type = D = dg(D), Y = xy(null, n, D, P, c), Y;
        case de: {
          if (n.type !== n.elementType) {
            var $ = D.propTypes;
            $ && xa(
              $,
              P,
              "prop",
              $e(D)
            );
          }
          return Y = Cy(
            null,
            n,
            D,
            Ni(D.type, P),
            c
          ), Y;
        }
      }
      var ie = "";
      throw D !== null && typeof D == "object" && D.$$typeof === Ke && (ie = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + D + ". " + ("Lazy element type must resolve to a class or function." + ie));
    }
    function Px(t, n, l, c, h) {
      Gh(t, n), n.tag = X;
      var y;
      return Nr(l) ? (y = !0, Xi(n)) : y = !1, zu(n, h), P0(n, l, c), Fp(n, l, c, h), Om(null, n, l, !0, y, h);
    }
    function kx(t, n, l, c) {
      Gh(t, n);
      var h = n.pendingProps, y;
      {
        var C = Wi(n, l, !1);
        y = Ci(n, C);
      }
      zu(n, c);
      var b, D;
      Pl(n);
      {
        if (l.prototype && typeof l.prototype.render == "function") {
          var O = $e(l) || "Unknown";
          Tm[O] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", O, O), Tm[O] = !0);
        }
        n.mode & Ht && ne.recordLegacyContextWarning(n, null), H(!0), _f.current = n, b = Iu(null, n, l, h, y, c), D = Vu(), H(!1);
      }
      if (hn(), n.flags |= pn, typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
        var P = $e(l) || "Unknown";
        xf[P] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), xf[P] = !0);
      }
      if (typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
        {
          var Y = $e(l) || "Unknown";
          xf[Y] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Y, Y, Y), xf[Y] = !0);
        }
        n.tag = X, n.memoizedState = null, n.updateQueue = null;
        var $ = !1;
        return Nr(l) ? ($ = !0, Xi(n)) : $ = !1, n.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, Tp(n), A0(n, b), Fp(n, l, h, c), Om(null, n, l, !0, $, c);
      } else {
        if (n.tag = V, n.mode & Ht) {
          zn(!0);
          try {
            b = Iu(null, n, l, h, y, c), D = Vu();
          } finally {
            zn(!1);
          }
        }
        return f() && D && rf(n), fa(null, n, b, c), Lm(n, l), n.child;
      }
    }
    function Lm(t, n) {
      {
        if (n && n.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), t.ref !== null) {
          var l = "", c = gn();
          c && (l += `

Check the render method of \`` + c + "`.");
          var h = c || "", y = t._debugSource;
          y && (h = y.fileName + ":" + y.lineNumber), Dm[h] || (Dm[h] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", l));
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var C = $e(n) || "Unknown";
          wm[C] || (m("%s: Function components do not support getDerivedStateFromProps.", C), wm[C] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var b = $e(n) || "Unknown";
          Rm[b] || (m("%s: Function components do not support contextType.", b), Rm[b] = !0);
        }
      }
    }
    var Am = {
      dehydrated: null,
      treeContext: null,
      retryLane: In
    };
    function Pm(t) {
      return {
        baseLanes: t,
        cachePool: Tx(),
        transitions: null
      };
    }
    function zx(t, n) {
      var l = null;
      return {
        baseLanes: at(t.baseLanes, n),
        cachePool: l,
        transitions: t.transitions
      };
    }
    function Ux(t, n, l, c) {
      if (n !== null) {
        var h = n.memoizedState;
        if (h === null)
          return !1;
      }
      return Wp(t, df);
    }
    function Fx(t, n) {
      return so(t.childLanes, n);
    }
    function Ny(t, n, l) {
      var c = n.pendingProps;
      G1(n) && (n.flags |= Dt);
      var h = Mi.current, y = !1, C = (n.flags & Dt) !== Ge;
      if (C || Ux(h, t) ? (y = !0, n.flags &= ~Dt) : (t === null || t.memoizedState !== null) && (h = lx(h, B0)), h = Hu(h), Ms(n, h), t === null) {
        yo(n);
        var b = n.memoizedState;
        if (b !== null) {
          var D = b.dehydrated;
          if (D !== null)
            return Ix(n, D);
        }
        var O = c.children, P = c.fallback;
        if (y) {
          var Y = Hx(n, O, P, l), $ = n.child;
          return $.memoizedState = Pm(l), n.memoizedState = Am, Y;
        } else
          return km(n, O);
      } else {
        var ie = t.memoizedState;
        if (ie !== null) {
          var ce = ie.dehydrated;
          if (ce !== null)
            return Vx(t, n, C, c, ce, ie, l);
        }
        if (y) {
          var se = c.fallback, We = c.children, ut = jx(t, n, We, se, l), Ze = n.child, Zt = t.child.memoizedState;
          return Ze.memoizedState = Zt === null ? Pm(l) : zx(Zt, l), Ze.childLanes = Fx(t, l), n.memoizedState = Am, ut;
        } else {
          var Pt = c.children, W = Gx(t, n, Pt, l);
          return n.memoizedState = null, W;
        }
      }
    }
    function km(t, n, l) {
      var c = t.mode, h = {
        mode: "visible",
        children: n
      }, y = zm(h, c);
      return y.return = t, t.child = y, y;
    }
    function Hx(t, n, l, c) {
      var h = t.mode, y = t.child, C = {
        mode: "hidden",
        children: n
      }, b, D;
      return (h & Rt) === et && y !== null ? (b = y, b.childLanes = ue, b.pendingProps = C, t.mode & _t && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = 0, b.treeBaseDuration = 0), D = Us(l, h, c, null)) : (b = zm(C, h), D = Us(l, h, c, null)), b.return = t, D.return = t, b.sibling = D, t.child = b, D;
    }
    function zm(t, n, l) {
      return O1(t, n, ue, null);
    }
    function My(t, n) {
      return wo(t, n);
    }
    function Gx(t, n, l, c) {
      var h = t.child, y = h.sibling, C = My(h, {
        mode: "visible",
        children: l
      });
      if ((n.mode & Rt) === et && (C.lanes = c), C.return = n, C.sibling = null, y !== null) {
        var b = n.deletions;
        b === null ? (n.deletions = [y], n.flags |= ma) : b.push(y);
      }
      return n.child = C, C;
    }
    function jx(t, n, l, c, h) {
      var y = n.mode, C = t.child, b = C.sibling, D = {
        mode: "hidden",
        children: l
      }, O;
      if ((y & Rt) === et && n.child !== C) {
        var P = n.child;
        O = P, O.childLanes = ue, O.pendingProps = D, n.mode & _t && (O.actualDuration = 0, O.actualStartTime = -1, O.selfBaseDuration = C.selfBaseDuration, O.treeBaseDuration = C.treeBaseDuration), n.deletions = null;
      } else
        O = My(C, D), O.subtreeFlags = C.subtreeFlags & bn;
      var Y;
      return b !== null ? Y = wo(b, c) : (Y = Us(c, y, h, null), Y.flags |= Xt), Y.return = n, O.return = n, O.sibling = Y, n.child = O, Y;
    }
    function Hh(t, n, l, c) {
      c !== null && p(c), Uu(n, t.child, null, l);
      var h = n.pendingProps, y = h.children, C = km(n, y);
      return C.flags |= Xt, n.memoizedState = null, C;
    }
    function Bx(t, n, l, c, h) {
      var y = n.mode, C = {
        mode: "visible",
        children: l
      }, b = zm(C, y), D = Us(c, y, h, null);
      return D.flags |= Xt, b.return = n, D.return = n, b.sibling = D, n.child = b, (n.mode & Rt) !== et && Uu(n, t.child, null, h), D;
    }
    function Ix(t, n, l) {
      return (t.mode & Rt) === et ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), t.lanes = it) : yi(n) ? t.lanes = Ba : t.lanes = Vr, null;
    }
    function Vx(t, n, l, c, h, y, C) {
      if (l)
        if (n.flags & ga) {
          n.flags &= ~ga;
          var W = Cm(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Hh(t, n, C, W);
        } else {
          if (n.memoizedState !== null)
            return n.child = t.child, n.flags |= Dt, null;
          var re = c.children, q = c.fallback, ge = Bx(t, n, re, q, C), Ve = n.child;
          return Ve.memoizedState = Pm(C), n.memoizedState = Am, ge;
        }
      else {
        if (vp(), (n.mode & Rt) === et)
          return Hh(
            t,
            n,
            C,
            null
          );
        if (yi(h)) {
          var b, D, O;
          {
            var P = _d(h);
            b = P.digest, D = P.message, O = P.stack;
          }
          var Y;
          D ? Y = new Error(D) : Y = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var $ = Cm(Y, b, O);
          return Hh(t, n, C, $);
        }
        var ie = Nn(C, t.childLanes);
        if (Li || ie) {
          var ce = lv();
          if (ce !== null) {
            var se = Cu(ce, C);
            if (se !== In && se !== y.retryLane) {
              y.retryLane = se;
              var We = sn;
              ca(t, se), nr(ce, t, se, We);
            }
          }
          sg();
          var ut = Cm(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Hh(t, n, C, ut);
        } else if (ti(h)) {
          n.flags |= Dt, n.child = t.child;
          var Ze = LE.bind(null, t);
          return Tc(h, Ze), null;
        } else {
          ba(n, h, y.treeContext);
          var Zt = c.children, Pt = km(n, Zt);
          return Pt.flags |= Aa, Pt;
        }
      }
    }
    function Oy(t, n, l) {
      t.lanes = at(t.lanes, n);
      var c = t.alternate;
      c !== null && (c.lanes = at(c.lanes, n)), xp(t.return, n, l);
    }
    function Yx(t, n, l) {
      for (var c = n; c !== null; ) {
        if (c.tag === fe) {
          var h = c.memoizedState;
          h !== null && Oy(c, l, t);
        } else if (c.tag === nt)
          Oy(c, l, t);
        else if (c.child !== null) {
          c.child.return = c, c = c.child;
          continue;
        }
        if (c === t)
          return;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === t)
            return;
          c = c.return;
        }
        c.sibling.return = c.return, c = c.sibling;
      }
    }
    function qx(t) {
      for (var n = t, l = null; n !== null; ) {
        var c = n.alternate;
        c !== null && yh(c) === null && (l = n), n = n.sibling;
      }
      return l;
    }
    function Wx(t) {
      if (t !== void 0 && t !== "forwards" && t !== "backwards" && t !== "together" && !Nm[t])
        if (Nm[t] = !0, typeof t == "string")
          switch (t.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', t, t.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', t, t.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', t);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', t);
    }
    function Xx(t, n) {
      t !== void 0 && !Fh[t] && (t !== "collapsed" && t !== "hidden" ? (Fh[t] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', t)) : n !== "forwards" && n !== "backwards" && (Fh[t] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', t)));
    }
    function Ly(t, n) {
      {
        var l = Tt(t), c = !l && typeof be(t) == "function";
        if (l || c) {
          var h = l ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", h, n, h), !1;
        }
      }
      return !0;
    }
    function Qx(t, n) {
      if ((n === "forwards" || n === "backwards") && t !== void 0 && t !== null && t !== !1)
        if (Tt(t)) {
          for (var l = 0; l < t.length; l++)
            if (!Ly(t[l], l))
              return;
        } else {
          var c = be(t);
          if (typeof c == "function") {
            var h = c.call(t);
            if (h)
              for (var y = h.next(), C = 0; !y.done; y = h.next()) {
                if (!Ly(y.value, C))
                  return;
                C++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', n);
        }
    }
    function Um(t, n, l, c, h) {
      var y = t.memoizedState;
      y === null ? t.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: l,
        tailMode: h
      } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = c, y.tail = l, y.tailMode = h);
    }
    function Ay(t, n, l) {
      var c = n.pendingProps, h = c.revealOrder, y = c.tail, C = c.children;
      Wx(h), Xx(y, h), Qx(C, h), fa(t, n, C, l);
      var b = Mi.current, D = Wp(b, df);
      if (D)
        b = Xp(b, df), n.flags |= Dt;
      else {
        var O = t !== null && (t.flags & Dt) !== Ge;
        O && Yx(n, n.child, l), b = Hu(b);
      }
      if (Ms(n, b), (n.mode & Rt) === et)
        n.memoizedState = null;
      else
        switch (h) {
          case "forwards": {
            var P = qx(n.child), Y;
            P === null ? (Y = n.child, n.child = null) : (Y = P.sibling, P.sibling = null), Um(
              n,
              !1,
              Y,
              P,
              y
            );
            break;
          }
          case "backwards": {
            var $ = null, ie = n.child;
            for (n.child = null; ie !== null; ) {
              var ce = ie.alternate;
              if (ce !== null && yh(ce) === null) {
                n.child = ie;
                break;
              }
              var se = ie.sibling;
              ie.sibling = $, $ = ie, ie = se;
            }
            Um(
              n,
              !0,
              $,
              null,
              y
            );
            break;
          }
          case "together": {
            Um(
              n,
              !1,
              null,
              null,
              void 0
            );
            break;
          }
          default:
            n.memoizedState = null;
        }
      return n.child;
    }
    function Kx(t, n, l) {
      Yp(n, n.stateNode.containerInfo);
      var c = n.pendingProps;
      return t === null ? n.child = Uu(n, null, c, l) : fa(t, n, c, l), n.child;
    }
    var Py = !1;
    function Jx(t, n, l) {
      var c = n.type, h = c._context, y = n.pendingProps, C = n.memoizedProps, b = y.value;
      {
        "value" in y || Py || (Py = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var D = n.type.propTypes;
        D && xa(D, y, "prop", "Context.Provider");
      }
      if (C0(n, h, b), C !== null) {
        var O = C.value;
        if (Hn(O, b)) {
          if (C.children === y.children && !ds())
            return Vl(t, n, l);
        } else
          Y_(n, h, l);
      }
      var P = y.children;
      return fa(t, n, P, l), n.child;
    }
    var ky = !1;
    function Zx(t, n, l) {
      var c = n.type;
      c._context === void 0 ? c !== c.Consumer && (ky || (ky = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : c = c._context;
      var h = n.pendingProps, y = h.children;
      typeof y != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zu(n, l);
      var C = er(c);
      Pl(n);
      var b;
      return _f.current = n, H(!0), b = y(C), H(!1), hn(), n.flags |= pn, fa(t, n, b, l), n.child;
    }
    function Cf() {
      Li = !0;
    }
    function Gh(t, n) {
      (n.mode & Rt) === et && t !== null && (t.alternate = null, n.alternate = null, n.flags |= Xt);
    }
    function Vl(t, n, l) {
      return t !== null && (n.dependencies = t.dependencies), my(), zf(n.lanes), Nn(l, n.childLanes) ? (rx(t, n), n.child) : null;
    }
    function $x(t, n, l) {
      {
        var c = n.return;
        if (c === null)
          throw new Error("Cannot swap the root fiber.");
        if (t.alternate = null, n.alternate = null, l.index = n.index, l.sibling = n.sibling, l.return = n.return, l.ref = n.ref, n === c.child)
          c.child = l;
        else {
          var h = c.child;
          if (h === null)
            throw new Error("Expected parent to have a child.");
          for (; h.sibling !== n; )
            if (h = h.sibling, h === null)
              throw new Error("Expected to find the previous sibling.");
          h.sibling = l;
        }
        var y = c.deletions;
        return y === null ? (c.deletions = [t], c.flags |= ma) : y.push(t), l.flags |= Xt, l;
      }
    }
    function Fm(t, n) {
      var l = t.lanes;
      return !!Nn(l, n);
    }
    function eC(t, n, l) {
      switch (n.tag) {
        case ee:
          wy(n), n.stateNode, r();
          break;
        case K:
          G0(n);
          break;
        case X: {
          var c = n.type;
          Nr(c) && Xi(n);
          break;
        }
        case Q:
          Yp(n, n.stateNode.containerInfo);
          break;
        case Ie: {
          var h = n.memoizedProps.value, y = n.type._context;
          C0(n, y, h);
          break;
        }
        case oe:
          {
            var C = Nn(l, n.childLanes);
            C && (n.flags |= pt);
            {
              var b = n.stateNode;
              b.effectDuration = 0, b.passiveEffectDuration = 0;
            }
          }
          break;
        case fe: {
          var D = n.memoizedState;
          if (D !== null) {
            if (D.dehydrated !== null)
              return Ms(n, Hu(Mi.current)), n.flags |= Dt, null;
            var O = n.child, P = O.childLanes;
            if (Nn(l, P))
              return Ny(t, n, l);
            Ms(n, Hu(Mi.current));
            var Y = Vl(t, n, l);
            return Y !== null ? Y.sibling : null;
          } else
            Ms(n, Hu(Mi.current));
          break;
        }
        case nt: {
          var $ = (t.flags & Dt) !== Ge, ie = Nn(l, n.childLanes);
          if ($) {
            if (ie)
              return Ay(t, n, l);
            n.flags |= Dt;
          }
          var ce = n.memoizedState;
          if (ce !== null && (ce.rendering = null, ce.tail = null, ce.lastEffect = null), Ms(n, Mi.current), ie)
            break;
          return null;
        }
        case Ue:
        case st:
          return n.lanes = ue, by(t, n, l);
      }
      return Vl(t, n, l);
    }
    function zy(t, n, l) {
      if (n._debugNeedsRemount && t !== null)
        return $x(t, n, gg(n.type, n.key, n.pendingProps, n._debugOwner || null, n.mode, n.lanes));
      if (t !== null) {
        var c = t.memoizedProps, h = n.pendingProps;
        if (c !== h || ds() || n.type !== t.type)
          Li = !0;
        else {
          var y = Fm(t, l);
          if (!y && (n.flags & Dt) === Ge)
            return Li = !1, eC(t, n, l);
          (t.flags & A) !== Ge ? Li = !0 : Li = !1;
        }
      } else if (Li = !1, f() && Hl(n)) {
        var C = n.index, b = qd();
        po(n, b, C);
      }
      switch (n.lanes = ue, n.tag) {
        case le:
          return kx(t, n, n.type, l);
        case Xe: {
          var D = n.elementType;
          return Ax(t, n, D, l);
        }
        case V: {
          var O = n.type, P = n.pendingProps, Y = n.elementType === O ? P : Ni(O, P);
          return Mm(t, n, O, Y, l);
        }
        case X: {
          var $ = n.type, ie = n.pendingProps, ce = n.elementType === $ ? ie : Ni($, ie);
          return Ry(t, n, $, ce, l);
        }
        case ee:
          return Mx(t, n, l);
        case K:
          return Ox(t, n, l);
        case xe:
          return Lx(t, n);
        case fe:
          return Ny(t, n, l);
        case Q:
          return Kx(t, n, l);
        case Le: {
          var se = n.type, We = n.pendingProps, ut = n.elementType === se ? We : Ni(se, We);
          return xy(t, n, se, ut, l);
        }
        case pe:
          return wx(t, n, l);
        case ke:
          return Dx(t, n, l);
        case oe:
          return Nx(t, n, l);
        case Ie:
          return Jx(t, n, l);
        case lt:
          return Zx(t, n, l);
        case de: {
          var Ze = n.type, Zt = n.pendingProps, Pt = Ni(Ze, Zt);
          if (n.type !== n.elementType) {
            var W = Ze.propTypes;
            W && xa(
              W,
              Pt,
              "prop",
              $e(Ze)
            );
          }
          return Pt = Ni(Ze.type, Pt), Cy(t, n, Ze, Pt, l);
        }
        case Se:
          return Ey(t, n, n.type, n.pendingProps, l);
        case Ne: {
          var re = n.type, q = n.pendingProps, ge = n.elementType === re ? q : Ni(re, q);
          return Px(t, n, re, ge, l);
        }
        case nt:
          return Ay(t, n, l);
        case Ct:
          break;
        case Ue:
          return by(t, n, l);
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ol(t) {
      t.flags |= pt;
    }
    function Uy(t) {
      t.flags |= ya, t.flags |= we;
    }
    function Fy(t, n) {
      var l = t !== null && t.child === n.child;
      if (l)
        return !0;
      if ((n.flags & ma) !== Ge)
        return !1;
      for (var c = n.child; c !== null; ) {
        if ((c.flags & Rn) !== Ge || (c.subtreeFlags & Rn) !== Ge)
          return !1;
        c = c.sibling;
      }
      return !0;
    }
    var Ef, bf, jh, Bh;
    if (Rr)
      Ef = function(t, n, l, c) {
        for (var h = n.child; h !== null; ) {
          if (h.tag === K || h.tag === xe)
            Tr(t, h.stateNode);
          else if (h.tag !== Q) {
            if (h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
          }
          if (h === n)
            return;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === n)
              return;
            h = h.return;
          }
          h.sibling.return = h.return, h = h.sibling;
        }
      }, bf = function(t, n) {
      }, jh = function(t, n, l, c, h) {
        var y = t.memoizedProps;
        if (y !== c) {
          var C = n.stateNode, b = ff(), D = pc(C, l, y, c, h, b);
          n.updateQueue = D, D && ol(n);
        }
      }, Bh = function(t, n, l, c) {
        l !== c && ol(n);
      };
    else if (bl) {
      Ef = function(t, n, l, c) {
        for (var h = n.child; h !== null; ) {
          if (h.tag === K) {
            var y = h.stateNode;
            if (l && c) {
              var C = h.memoizedProps, b = h.type;
              y = Ks(y, b, C, h);
            }
            Tr(t, y);
          } else if (h.tag === xe) {
            var D = h.stateNode;
            if (l && c) {
              var O = h.memoizedProps;
              D = na(D, O, h);
            }
            Tr(t, D);
          } else if (h.tag !== Q) {
            if (h.tag === Ue && h.memoizedState !== null) {
              var P = h.child;
              P !== null && (P.return = h), Ef(t, h, !0, !0);
            } else if (h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
          }
          if (h = h, h === n)
            return;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === n)
              return;
            h = h.return;
          }
          h.sibling.return = h.return, h = h.sibling;
        }
      };
      var Hy = function(t, n, l, c) {
        for (var h = n.child; h !== null; ) {
          if (h.tag === K) {
            var y = h.stateNode;
            if (l && c) {
              var C = h.memoizedProps, b = h.type;
              y = Ks(y, b, C, h);
            }
            Tl(t, y);
          } else if (h.tag === xe) {
            var D = h.stateNode;
            if (l && c) {
              var O = h.memoizedProps;
              D = na(D, O, h);
            }
            Tl(t, D);
          } else if (h.tag !== Q) {
            if (h.tag === Ue && h.memoizedState !== null) {
              var P = h.child;
              P !== null && (P.return = h), Hy(t, h, !0, !0);
            } else if (h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
          }
          if (h = h, h === n)
            return;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === n)
              return;
            h = h.return;
          }
          h.sibling.return = h.return, h = h.sibling;
        }
      };
      bf = function(t, n) {
        var l = n.stateNode, c = Fy(t, n);
        if (!c) {
          var h = l.containerInfo, y = Ua(h);
          Hy(y, n, !1, !1), l.pendingChildren = y, ol(n), rs(h, y);
        }
      }, jh = function(t, n, l, c, h) {
        var y = t.stateNode, C = t.memoizedProps, b = Fy(t, n);
        if (b && C === c) {
          n.stateNode = y;
          return;
        }
        var D = n.stateNode, O = ff(), P = null;
        if (C !== c && (P = pc(D, l, C, c, h, O)), b && P === null) {
          n.stateNode = y;
          return;
        }
        var Y = lp(y, P, l, C, c, n, b, D);
        Xs(Y, l, c, h, O) && ol(n), n.stateNode = Y, b ? ol(n) : Ef(Y, n, !1, !1);
      }, Bh = function(t, n, l, c) {
        if (l !== c) {
          var h = Vp(), y = ff();
          n.stateNode = Qs(c, h, y, n), ol(n);
        } else
          n.stateNode = t.stateNode;
      };
    } else
      bf = function(t, n) {
      }, jh = function(t, n, l, c, h) {
      }, Bh = function(t, n, l, c) {
      };
    function Tf(t, n) {
      if (!f())
        switch (t.tailMode) {
          case "hidden": {
            for (var l = t.tail, c = null; l !== null; )
              l.alternate !== null && (c = l), l = l.sibling;
            c === null ? t.tail = null : c.sibling = null;
            break;
          }
          case "collapsed": {
            for (var h = t.tail, y = null; h !== null; )
              h.alternate !== null && (y = h), h = h.sibling;
            y === null ? !n && t.tail !== null ? t.tail.sibling = null : t.tail = null : y.sibling = null;
            break;
          }
        }
    }
    function kr(t) {
      var n = t.alternate !== null && t.alternate.child === t.child, l = ue, c = Ge;
      if (n) {
        if ((t.mode & _t) !== et) {
          for (var D = t.selfBaseDuration, O = t.child; O !== null; )
            l = at(l, at(O.lanes, O.childLanes)), c |= O.subtreeFlags & bn, c |= O.flags & bn, D += O.treeBaseDuration, O = O.sibling;
          t.treeBaseDuration = D;
        } else
          for (var P = t.child; P !== null; )
            l = at(l, at(P.lanes, P.childLanes)), c |= P.subtreeFlags & bn, c |= P.flags & bn, P.return = t, P = P.sibling;
        t.subtreeFlags |= c;
      } else {
        if ((t.mode & _t) !== et) {
          for (var h = t.actualDuration, y = t.selfBaseDuration, C = t.child; C !== null; )
            l = at(l, at(C.lanes, C.childLanes)), c |= C.subtreeFlags, c |= C.flags, h += C.actualDuration, y += C.treeBaseDuration, C = C.sibling;
          t.actualDuration = h, t.treeBaseDuration = y;
        } else
          for (var b = t.child; b !== null; )
            l = at(l, at(b.lanes, b.childLanes)), c |= b.subtreeFlags, c |= b.flags, b.return = t, b = b.sibling;
        t.subtreeFlags |= c;
      }
      return t.childLanes = l, n;
    }
    function tC(t, n, l) {
      if (gp() && (n.mode & Rt) !== et && (n.flags & Dt) === Ge)
        return eh(n), r(), n.flags |= ga | _l | lr, !1;
      var c = jl(n);
      if (l !== null && l.dehydrated !== null)
        if (t === null) {
          if (!c)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Zd(n), kr(n), (n.mode & _t) !== et) {
            var h = l !== null;
            if (h) {
              var y = n.child;
              y !== null && (n.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (r(), (n.flags & Dt) === Ge && (n.memoizedState = null), n.flags |= pt, kr(n), (n.mode & _t) !== et) {
            var C = l !== null;
            if (C) {
              var b = n.child;
              b !== null && (n.treeBaseDuration -= b.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return i(), !0;
    }
    function Gy(t, n, l) {
      var c = n.pendingProps;
      switch (Au(n), n.tag) {
        case le:
        case Xe:
        case Se:
        case V:
        case Le:
        case pe:
        case ke:
        case oe:
        case lt:
        case de:
          return kr(n), null;
        case X: {
          var h = n.type;
          return Nr(h) && dn(n), kr(n), null;
        }
        case ee: {
          var y = n.stateNode;
          if (Fu(n), wn(n), Kp(), y.pendingContext && (y.context = y.pendingContext, y.pendingContext = null), t === null || t.child === null) {
            var C = jl(n);
            if (C)
              ol(n);
            else if (t !== null) {
              var b = t.memoizedState;
              (!b.isDehydrated || (n.flags & ga) !== Ge) && (n.flags |= La, i());
            }
          }
          return bf(t, n), kr(n), null;
        }
        case K: {
          qp(n);
          var D = Vp(), O = n.type;
          if (t !== null && n.stateNode != null)
            jh(t, n, O, c, D), t.ref !== n.ref && Uy(n);
          else {
            if (!c) {
              if (n.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return kr(n), null;
            }
            var P = ff(), Y = jl(n);
            if (Y)
              mp(n, D, P) && ol(n);
            else {
              var $ = ts(O, c, D, P, n);
              Ef($, n, !1, !1), n.stateNode = $, Xs($, O, c, D, P) && ol(n);
            }
            n.ref !== null && Uy(n);
          }
          return kr(n), null;
        }
        case xe: {
          var ie = c;
          if (t && n.stateNode != null) {
            var ce = t.memoizedProps;
            Bh(t, n, ce, ie);
          } else {
            if (typeof ie != "string" && n.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var se = Vp(), We = ff(), ut = jl(n);
            ut ? Jd(n) && ol(n) : n.stateNode = Qs(ie, se, We, n);
          }
          return kr(n), null;
        }
        case fe: {
          Gu(n);
          var Ze = n.memoizedState;
          if (t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            var Zt = tC(t, n, Ze);
            if (!Zt)
              return n.flags & lr ? n : null;
          }
          if ((n.flags & Dt) !== Ge)
            return n.lanes = l, (n.mode & _t) !== et && xm(n), n;
          var Pt = Ze !== null, W = t !== null && t.memoizedState !== null;
          if (Pt !== W && Pt) {
            var re = n.child;
            if (re.flags |= pi, (n.mode & Rt) !== et) {
              var q = t === null && (n.memoizedProps.unstable_avoidThisFallback !== !0 || !I);
              q || Wp(Mi.current, B0) ? SE() : sg();
            }
          }
          var ge = n.updateQueue;
          if (ge !== null && (n.flags |= pt), kr(n), (n.mode & _t) !== et && Pt) {
            var Ve = n.child;
            Ve !== null && (n.treeBaseDuration -= Ve.treeBaseDuration);
          }
          return null;
        }
        case Q:
          return Fu(n), bf(t, n), t === null && Zv(n.stateNode.containerInfo), kr(n), null;
        case Ie:
          var ze = n.type._context;
          return _p(ze, n), kr(n), null;
        case Ne: {
          var At = n.type;
          return Nr(At) && dn(n), kr(n), null;
        }
        case nt: {
          Gu(n);
          var ft = n.memoizedState;
          if (ft === null)
            return kr(n), null;
          var Ut = (n.flags & Dt) !== Ge, wt = ft.rendering;
          if (wt === null)
            if (Ut)
              Tf(ft, !1);
            else {
              var yn = xE() && (t === null || (t.flags & Dt) === Ge);
              if (!yn)
                for (var tt = n.child; tt !== null; ) {
                  var Gn = yh(tt);
                  if (Gn !== null) {
                    Ut = !0, n.flags |= Dt, Tf(ft, !1);
                    var Jr = Gn.updateQueue;
                    return Jr !== null && (n.updateQueue = Jr, n.flags |= pt), n.subtreeFlags = Ge, ax(n, l), Ms(n, Xp(Mi.current, df)), n.child;
                  }
                  tt = tt.sibling;
                }
              ft.tail !== null && Yn() > c1() && (n.flags |= Dt, Ut = !0, Tf(ft, !1), n.lanes = gu);
            }
          else {
            if (!Ut) {
              var Hr = yh(wt);
              if (Hr !== null) {
                n.flags |= Dt, Ut = !0;
                var Xa = Hr.updateQueue;
                if (Xa !== null && (n.updateQueue = Xa, n.flags |= pt), Tf(ft, !0), ft.tail === null && ft.tailMode === "hidden" && !wt.alternate && !f())
                  return kr(n), null;
              } else
                Yn() * 2 - ft.renderingStartTime > c1() && l !== Vr && (n.flags |= Dt, Ut = !0, Tf(ft, !1), n.lanes = gu);
            }
            if (ft.isBackwards)
              wt.sibling = n.child, n.child = wt;
            else {
              var ha = ft.last;
              ha !== null ? ha.sibling = wt : n.child = wt, ft.last = wt;
            }
          }
          if (ft.tail !== null) {
            var va = ft.tail;
            ft.rendering = va, ft.tail = va.sibling, ft.renderingStartTime = Yn(), va.sibling = null;
            var Zr = Mi.current;
            return Ut ? Zr = Xp(Zr, df) : Zr = Hu(Zr), Ms(n, Zr), va;
          }
          return kr(n), null;
        }
        case Ct:
          break;
        case Ue:
        case st: {
          lg(n);
          var Wl = n.memoizedState, $u = Wl !== null;
          if (t !== null) {
            var Hf = t.memoizedState, hl = Hf !== null;
            hl !== $u && !k && (n.flags |= pi);
          }
          return !$u || (n.mode & Rt) === et ? kr(n) : Nn(fl, Vr) && (kr(n), Rr && n.subtreeFlags & (Xt | pt) && (n.flags |= pi)), null;
        }
        case rn:
          return null;
        case cn:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nC(t, n, l) {
      switch (Au(n), n.tag) {
        case X: {
          var c = n.type;
          Nr(c) && dn(n);
          var h = n.flags;
          return h & lr ? (n.flags = h & ~lr | Dt, (n.mode & _t) !== et && xm(n), n) : null;
        }
        case ee: {
          n.stateNode, Fu(n), wn(n), Kp();
          var y = n.flags;
          return (y & lr) !== Ge && (y & Dt) === Ge ? (n.flags = y & ~lr | Dt, n) : null;
        }
        case K:
          return qp(n), null;
        case fe: {
          Gu(n);
          var C = n.memoizedState;
          if (C !== null && C.dehydrated !== null) {
            if (n.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            r();
          }
          var b = n.flags;
          return b & lr ? (n.flags = b & ~lr | Dt, (n.mode & _t) !== et && xm(n), n) : null;
        }
        case nt:
          return Gu(n), null;
        case Q:
          return Fu(n), null;
        case Ie:
          var D = n.type._context;
          return _p(D, n), null;
        case Ue:
        case st:
          return lg(n), null;
        case rn:
          return null;
        default:
          return null;
      }
    }
    function jy(t, n, l) {
      switch (Au(n), n.tag) {
        case X: {
          var c = n.type.childContextTypes;
          c != null && dn(n);
          break;
        }
        case ee: {
          n.stateNode, Fu(n), wn(n), Kp();
          break;
        }
        case K: {
          qp(n);
          break;
        }
        case Q:
          Fu(n);
          break;
        case fe:
          Gu(n);
          break;
        case nt:
          Gu(n);
          break;
        case Ie:
          var h = n.type._context;
          _p(h, n);
          break;
        case Ue:
        case st:
          lg(n);
          break;
      }
    }
    function By(t, n, l, c, h, y, C, b, D) {
      var O = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(l, O);
      } catch (P) {
        this.onError(P);
      }
    }
    var Iy = By;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Hm = document.createElement("react");
      Iy = function(n, l, c, h, y, C, b, D, O) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var P = document.createEvent("Event"), Y = !1, $ = !0, ie = window.event, ce = Object.getOwnPropertyDescriptor(window, "event");
        function se() {
          Hm.removeEventListener(re, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = ie);
        }
        var We = Array.prototype.slice.call(arguments, 3);
        function ut() {
          Y = !0, se(), l.apply(c, We), $ = !1;
        }
        var Ze, Zt = !1, Pt = !1;
        function W(q) {
          if (Ze = q.error, Zt = !0, Ze === null && q.colno === 0 && q.lineno === 0 && (Pt = !0), q.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var re = "react-" + (n || "invokeguardedcallback");
        if (window.addEventListener("error", W), Hm.addEventListener(re, ut, !1), P.initEvent(re, !1, !1), Hm.dispatchEvent(P), ce && Object.defineProperty(window, "event", ce), Y && $ && (Zt ? Pt && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", W), !Y)
          return se(), By.apply(this, arguments);
      };
    }
    var rC = Iy, Rf = !1, Ih = null, aC = {
      onError: function(t) {
        Rf = !0, Ih = t;
      }
    };
    function Vy(t, n, l, c, h, y, C, b, D) {
      Rf = !1, Ih = null, rC.apply(aC, arguments);
    }
    function iC() {
      return Rf;
    }
    function Yy() {
      if (Rf) {
        var t = Ih;
        return Rf = !1, Ih = null, t;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var qy = null;
    qy = /* @__PURE__ */ new Set();
    var Vh = !1, zr = !1, lC = typeof WeakSet == "function" ? WeakSet : Set, je = null, Yu = null, qu = null;
    function sC(t) {
      Vy(null, function() {
        throw t;
      }), Yy();
    }
    var oC = function(t, n) {
      if (n.props = t.memoizedProps, n.state = t.memoizedState, t.mode & _t)
        try {
          sl(), n.componentWillUnmount();
        } finally {
          ll(t);
        }
      else
        n.componentWillUnmount();
    };
    function Wy(t, n) {
      try {
        As(pr, t);
      } catch (l) {
        un(t, n, l);
      }
    }
    function Gm(t, n, l) {
      try {
        oC(t, l);
      } catch (c) {
        un(t, n, c);
      }
    }
    function uC(t, n, l) {
      try {
        l.componentDidMount();
      } catch (c) {
        un(t, n, c);
      }
    }
    function Xy(t, n) {
      try {
        Ky(t);
      } catch (l) {
        un(t, n, l);
      }
    }
    function Wu(t, n) {
      var l = t.ref;
      if (l !== null)
        if (typeof l == "function") {
          var c;
          try {
            if (Z && U && t.mode & _t)
              try {
                sl(), c = l(null);
              } finally {
                ll(t);
              }
            else
              c = l(null);
          } catch (h) {
            un(t, n, h);
          }
          typeof c == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(t));
        } else
          l.current = null;
    }
    function Yh(t, n, l) {
      try {
        l();
      } catch (c) {
        un(t, n, c);
      }
    }
    var Qy = !1;
    function cC(t, n) {
      jr(t.containerInfo), je = n, fC();
      var l = Qy;
      return Qy = !1, l;
    }
    function fC() {
      for (; je !== null; ) {
        var t = je, n = t.child;
        (t.subtreeFlags & gt) !== Ge && n !== null ? (n.return = t, je = n) : dC();
      }
    }
    function dC() {
      for (; je !== null; ) {
        var t = je;
        It(t);
        try {
          hC(t);
        } catch (l) {
          un(t, t.return, l);
        }
        Kt();
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, je = n;
          return;
        }
        je = t.return;
      }
    }
    function hC(t) {
      var n = t.alternate, l = t.flags;
      if ((l & La) !== Ge) {
        switch (It(t), t.tag) {
          case V:
          case Le:
          case Se:
            break;
          case X: {
            if (n !== null) {
              var c = n.memoizedProps, h = n.memoizedState, y = t.stateNode;
              t.type === t.elementType && !Co && (y.props !== t.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(t) || "instance"), y.state !== t.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(t) || "instance"));
              var C = y.getSnapshotBeforeUpdate(t.elementType === t.type ? c : Ni(t.type, c), h);
              {
                var b = qy;
                C === void 0 && !b.has(t.type) && (b.add(t.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(t)));
              }
              y.__reactInternalSnapshotBeforeUpdate = C;
            }
            break;
          }
          case ee: {
            if (Rr) {
              var D = t.stateNode;
              Sd(D.containerInfo);
            }
            break;
          }
          case K:
          case xe:
          case Q:
          case Ne:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Kt();
      }
    }
    function Ai(t, n, l) {
      var c = n.updateQueue, h = c !== null ? c.lastEffect : null;
      if (h !== null) {
        var y = h.next, C = y;
        do {
          if ((C.tag & t) === t) {
            var b = C.destroy;
            C.destroy = void 0, b !== void 0 && ((t & Pr) !== Ra ? Un(n) : (t & pr) !== Ra && Fn(n), (t & rl) !== Ra && Ff(!0), Yh(n, l, b), (t & rl) !== Ra && Ff(!1), (t & Pr) !== Ra ? fr() : (t & pr) !== Ra && bs());
          }
          C = C.next;
        } while (C !== y);
      }
    }
    function As(t, n) {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var h = c.next, y = h;
        do {
          if ((y.tag & t) === t) {
            (t & Pr) !== Ra ? Et(n) : (t & pr) !== Ra && sa(n);
            var C = y.create;
            (t & rl) !== Ra && Ff(!0), y.destroy = C(), (t & rl) !== Ra && Ff(!1), (t & Pr) !== Ra ? Zn() : (t & pr) !== Ra && Es();
            {
              var b = y.destroy;
              if (b !== void 0 && typeof b != "function") {
                var D = void 0;
                (y.tag & pr) !== Ge ? D = "useLayoutEffect" : (y.tag & rl) !== Ge ? D = "useInsertionEffect" : D = "useEffect";
                var O = void 0;
                b === null ? O = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof b.then == "function" ? O = `

It looks like you wrote ` + D + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + D + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : O = " You returned: " + b, m("%s must not return anything besides a function, which is used for clean-up.%s", D, O);
              }
            }
          }
          y = y.next;
        } while (y !== h);
      }
    }
    function vC(t, n) {
      if ((n.flags & pt) !== Ge)
        switch (n.tag) {
          case oe: {
            var l = n.stateNode.passiveEffectDuration, c = n.memoizedProps, h = c.id, y = c.onPostCommit, C = vy(), b = n.alternate === null ? "mount" : "update";
            hy() && (b = "nested-update"), typeof y == "function" && y(h, b, l, C);
            var D = n.return;
            e:
              for (; D !== null; ) {
                switch (D.tag) {
                  case ee:
                    var O = D.stateNode;
                    O.passiveEffectDuration += l;
                    break e;
                  case oe:
                    var P = D.stateNode;
                    P.passiveEffectDuration += l;
                    break e;
                }
                D = D.return;
              }
            break;
          }
        }
    }
    function pC(t, n, l, c) {
      if ((l.flags & an) !== Ge)
        switch (l.tag) {
          case V:
          case Le:
          case Se: {
            if (!zr)
              if (l.mode & _t)
                try {
                  sl(), As(pr | vr, l);
                } finally {
                  ll(l);
                }
              else
                As(pr | vr, l);
            break;
          }
          case X: {
            var h = l.stateNode;
            if (l.flags & pt && !zr)
              if (n === null)
                if (l.type === l.elementType && !Co && (h.props !== l.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(l) || "instance"), h.state !== l.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(l) || "instance")), l.mode & _t)
                  try {
                    sl(), h.componentDidMount();
                  } finally {
                    ll(l);
                  }
                else
                  h.componentDidMount();
              else {
                var y = l.elementType === l.type ? n.memoizedProps : Ni(l.type, n.memoizedProps), C = n.memoizedState;
                if (l.type === l.elementType && !Co && (h.props !== l.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(l) || "instance"), h.state !== l.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(l) || "instance")), l.mode & _t)
                  try {
                    sl(), h.componentDidUpdate(y, C, h.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ll(l);
                  }
                else
                  h.componentDidUpdate(y, C, h.__reactInternalSnapshotBeforeUpdate);
              }
            var b = l.updateQueue;
            b !== null && (l.type === l.elementType && !Co && (h.props !== l.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(l) || "instance"), h.state !== l.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(l) || "instance")), D0(l, b, h));
            break;
          }
          case ee: {
            var D = l.updateQueue;
            if (D !== null) {
              var O = null;
              if (l.child !== null)
                switch (l.child.tag) {
                  case K:
                    O = Qt(l.child.stateNode);
                    break;
                  case X:
                    O = l.child.stateNode;
                    break;
                }
              D0(l, D, O);
            }
            break;
          }
          case K: {
            var P = l.stateNode;
            if (n === null && l.flags & pt) {
              var Y = l.type, $ = l.memoizedProps;
              rp(P, Y, $, l);
            }
            break;
          }
          case xe:
            break;
          case Q:
            break;
          case oe: {
            {
              var ie = l.memoizedProps, ce = ie.onCommit, se = ie.onRender, We = l.stateNode.effectDuration, ut = vy(), Ze = n === null ? "mount" : "update";
              hy() && (Ze = "nested-update"), typeof se == "function" && se(l.memoizedProps.id, Ze, l.actualDuration, l.treeBaseDuration, l.actualStartTime, ut);
              {
                typeof ce == "function" && ce(l.memoizedProps.id, Ze, We, ut), RE(l);
                var Zt = l.return;
                e:
                  for (; Zt !== null; ) {
                    switch (Zt.tag) {
                      case ee:
                        var Pt = Zt.stateNode;
                        Pt.effectDuration += We;
                        break e;
                      case oe:
                        var W = Zt.stateNode;
                        W.effectDuration += We;
                        break e;
                    }
                    Zt = Zt.return;
                  }
              }
            }
            break;
          }
          case fe: {
            bC(t, l);
            break;
          }
          case nt:
          case Ne:
          case Ct:
          case Ue:
          case st:
          case cn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zr || l.flags & ya && Ky(l);
    }
    function mC(t) {
      switch (t.tag) {
        case V:
        case Le:
        case Se: {
          if (t.mode & _t)
            try {
              sl(), Wy(t, t.return);
            } finally {
              ll(t);
            }
          else
            Wy(t, t.return);
          break;
        }
        case X: {
          var n = t.stateNode;
          typeof n.componentDidMount == "function" && uC(t, t.return, n), Xy(t, t.return);
          break;
        }
        case K: {
          Xy(t, t.return);
          break;
        }
      }
    }
    function gC(t, n) {
      var l = null;
      if (Rr)
        for (var c = t; ; ) {
          if (c.tag === K) {
            if (l === null) {
              l = c;
              try {
                var h = c.stateNode;
                n ? za(h) : Vo(c.stateNode, c.memoizedProps);
              } catch (C) {
                un(t, t.return, C);
              }
            }
          } else if (c.tag === xe) {
            if (l === null)
              try {
                var y = c.stateNode;
                n ? mi(y) : bc(y, c.memoizedProps);
              } catch (C) {
                un(t, t.return, C);
              }
          } else if (!((c.tag === Ue || c.tag === st) && c.memoizedState !== null && c !== t)) {
            if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === t)
            return;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t)
              return;
            l === c && (l = null), c = c.return;
          }
          l === c && (l = null), c.sibling.return = c.return, c = c.sibling;
        }
    }
    function Ky(t) {
      var n = t.ref;
      if (n !== null) {
        var l = t.stateNode, c;
        switch (t.tag) {
          case K:
            c = Qt(l);
            break;
          default:
            c = l;
        }
        if (typeof n == "function") {
          var h;
          if (t.mode & _t)
            try {
              sl(), h = n(c);
            } finally {
              ll(t);
            }
          else
            h = n(c);
          typeof h == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(t));
        } else
          n.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(t)), n.current = c;
      }
    }
    function yC(t) {
      var n = t.alternate;
      n !== null && (n.return = null), t.return = null;
    }
    function Jy(t) {
      var n = t.alternate;
      n !== null && (t.alternate = null, Jy(n));
      {
        if (t.child = null, t.deletions = null, t.sibling = null, t.tag === K) {
          var l = t.stateNode;
          l !== null && yc(l);
        }
        t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
      }
    }
    function SC(t) {
      if (bl) {
        var n = t.stateNode, l = n.containerInfo, c = Ua(l);
        as(l, c);
      }
    }
    function _C(t) {
      for (var n = t.return; n !== null; ) {
        if (Zy(n))
          return n;
        n = n.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zy(t) {
      return t.tag === K || t.tag === ee || t.tag === Q;
    }
    function $y(t) {
      var n = t;
      e:
        for (; ; ) {
          for (; n.sibling === null; ) {
            if (n.return === null || Zy(n.return))
              return null;
            n = n.return;
          }
          for (n.sibling.return = n.return, n = n.sibling; n.tag !== K && n.tag !== xe && n.tag !== Re; ) {
            if (n.flags & Xt || n.child === null || n.tag === Q)
              continue e;
            n.child.return = n, n = n.child;
          }
          if (!(n.flags & Xt))
            return n.stateNode;
        }
    }
    function xC(t) {
      if (Rr) {
        var n = _C(t);
        switch (n.tag) {
          case K: {
            var l = n.stateNode;
            n.flags & hi && (yd(l), n.flags &= ~hi);
            var c = $y(t);
            Bm(t, c, l);
            break;
          }
          case ee:
          case Q: {
            var h = n.stateNode.containerInfo, y = $y(t);
            jm(t, y, h);
            break;
          }
          default:
            throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
        }
      }
    }
    function jm(t, n, l) {
      var c = t.tag, h = c === K || c === xe;
      if (h) {
        var y = t.stateNode;
        n ? Io(l, y, n) : Kn(l, y);
      } else if (c !== Q) {
        var C = t.child;
        if (C !== null) {
          jm(C, n, l);
          for (var b = C.sibling; b !== null; )
            jm(b, n, l), b = b.sibling;
        }
      }
    }
    function Bm(t, n, l) {
      var c = t.tag, h = c === K || c === xe;
      if (h) {
        var y = t.stateNode;
        n ? ap(l, y, n) : np(l, y);
      } else if (c !== Q) {
        var C = t.child;
        if (C !== null) {
          Bm(C, n, l);
          for (var b = C.sibling; b !== null; )
            Bm(b, n, l), b = b.sibling;
        }
      }
    }
    var Ur = null, Pi = !1;
    function CC(t, n, l) {
      if (Rr) {
        var c = n;
        e:
          for (; c !== null; ) {
            switch (c.tag) {
              case K: {
                Ur = c.stateNode, Pi = !1;
                break e;
              }
              case ee: {
                Ur = c.stateNode.containerInfo, Pi = !0;
                break e;
              }
              case Q: {
                Ur = c.stateNode.containerInfo, Pi = !0;
                break e;
              }
            }
            c = c.return;
          }
        if (Ur === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Im(t, n, l), Ur = null, Pi = !1;
      } else
        Im(t, n, l);
      yC(l);
    }
    function ul(t, n, l) {
      for (var c = l.child; c !== null; )
        Im(t, n, c), c = c.sibling;
    }
    function Im(t, n, l) {
      switch (Zc(l), l.tag) {
        case K:
          zr || Wu(l, n);
        case xe: {
          if (Rr) {
            var c = Ur, h = Pi;
            Ur = null, ul(t, n, l), Ur = c, Pi = h, Ur !== null && (Pi ? ip(Ur, l.stateNode) : ei(Ur, l.stateNode));
          } else
            ul(t, n, l);
          return;
        }
        case Re: {
          Rr && Ur !== null && (Pi ? Yo(Ur, l.stateNode) : Ed(Ur, l.stateNode));
          return;
        }
        case Q: {
          if (Rr) {
            var y = Ur, C = Pi;
            Ur = l.stateNode.containerInfo, Pi = !0, ul(t, n, l), Ur = y, Pi = C;
          } else
            SC(l), ul(t, n, l);
          return;
        }
        case V:
        case Le:
        case de:
        case Se: {
          if (!zr) {
            var b = l.updateQueue;
            if (b !== null) {
              var D = b.lastEffect;
              if (D !== null) {
                var O = D.next, P = O;
                do {
                  var Y = P, $ = Y.destroy, ie = Y.tag;
                  $ !== void 0 && ((ie & rl) !== Ra ? Yh(l, n, $) : (ie & pr) !== Ra && (Fn(l), l.mode & _t ? (sl(), Yh(l, n, $), ll(l)) : Yh(l, n, $), bs())), P = P.next;
                } while (P !== O);
              }
            }
          }
          ul(t, n, l);
          return;
        }
        case X: {
          if (!zr) {
            Wu(l, n);
            var ce = l.stateNode;
            typeof ce.componentWillUnmount == "function" && Gm(l, n, ce);
          }
          ul(t, n, l);
          return;
        }
        case Ct: {
          ul(t, n, l);
          return;
        }
        case Ue: {
          if (l.mode & Rt) {
            var se = zr;
            zr = se || l.memoizedState !== null, ul(t, n, l), zr = se;
          } else
            ul(t, n, l);
          break;
        }
        default: {
          ul(t, n, l);
          return;
        }
      }
    }
    function EC(t) {
      t.memoizedState;
    }
    function bC(t, n) {
      if (wr) {
        var l = n.memoizedState;
        if (l === null) {
          var c = n.alternate;
          if (c !== null) {
            var h = c.memoizedState;
            if (h !== null) {
              var y = h.dehydrated;
              y !== null && wc(y);
            }
          }
        }
      }
    }
    function e1(t) {
      var n = t.updateQueue;
      if (n !== null) {
        t.updateQueue = null;
        var l = t.stateNode;
        l === null && (l = t.stateNode = new lC()), n.forEach(function(c) {
          var h = AE.bind(null, t, c);
          if (!l.has(c)) {
            if (l.add(c), Wr)
              if (Yu !== null && qu !== null)
                Uf(qu, Yu);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            c.then(h, h);
          }
        });
      }
    }
    function TC(t, n, l) {
      Yu = l, qu = t, It(n), t1(n, t), It(n), Yu = null, qu = null;
    }
    function ki(t, n, l) {
      var c = n.deletions;
      if (c !== null)
        for (var h = 0; h < c.length; h++) {
          var y = c[h];
          try {
            CC(t, n, y);
          } catch (D) {
            un(y, n, D);
          }
        }
      var C = J();
      if (n.subtreeFlags & Rn)
        for (var b = n.child; b !== null; )
          It(b), t1(b, t), b = b.sibling;
      It(C);
    }
    function t1(t, n, l) {
      var c = t.alternate, h = t.flags;
      switch (t.tag) {
        case V:
        case Le:
        case de:
        case Se: {
          if (ki(n, t), cl(t), h & pt) {
            try {
              Ai(rl | vr, t, t.return), As(rl | vr, t);
            } catch (tt) {
              un(t, t.return, tt);
            }
            if (t.mode & _t) {
              try {
                sl(), Ai(pr | vr, t, t.return);
              } catch (tt) {
                un(t, t.return, tt);
              }
              ll(t);
            } else
              try {
                Ai(pr | vr, t, t.return);
              } catch (tt) {
                un(t, t.return, tt);
              }
          }
          return;
        }
        case X: {
          ki(n, t), cl(t), h & ya && c !== null && Wu(c, c.return);
          return;
        }
        case K: {
          if (ki(n, t), cl(t), h & ya && c !== null && Wu(c, c.return), Rr) {
            if (t.flags & hi) {
              var y = t.stateNode;
              try {
                yd(y);
              } catch (tt) {
                un(t, t.return, tt);
              }
            }
            if (h & pt) {
              var C = t.stateNode;
              if (C != null) {
                var b = t.memoizedProps, D = c !== null ? c.memoizedProps : b, O = t.type, P = t.updateQueue;
                if (t.updateQueue = null, P !== null)
                  try {
                    Ec(C, P, O, D, b, t);
                  } catch (tt) {
                    un(t, t.return, tt);
                  }
              }
            }
          }
          return;
        }
        case xe: {
          if (ki(n, t), cl(t), h & pt && Rr) {
            if (t.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var Y = t.stateNode, $ = t.memoizedProps, ie = c !== null ? c.memoizedProps : $;
            try {
              Cc(Y, ie, $);
            } catch (tt) {
              un(t, t.return, tt);
            }
          }
          return;
        }
        case ee: {
          if (ki(n, t), cl(t), h & pt) {
            if (Rr && wr && c !== null) {
              var ce = c.memoizedState;
              if (ce.isDehydrated)
                try {
                  Rc(n.containerInfo);
                } catch (tt) {
                  un(t, t.return, tt);
                }
            }
            if (bl) {
              var se = n.containerInfo, We = n.pendingChildren;
              try {
                as(se, We);
              } catch (tt) {
                un(t, t.return, tt);
              }
            }
          }
          return;
        }
        case Q: {
          if (ki(n, t), cl(t), h & pt && bl) {
            var ut = t.stateNode, Ze = ut.containerInfo, Zt = ut.pendingChildren;
            try {
              as(Ze, Zt);
            } catch (tt) {
              un(t, t.return, tt);
            }
          }
          return;
        }
        case fe: {
          ki(n, t), cl(t);
          var Pt = t.child;
          if (Pt.flags & pi) {
            var W = Pt.stateNode, re = Pt.memoizedState, q = re !== null;
            if (W.isHidden = q, q) {
              var ge = Pt.alternate !== null && Pt.alternate.memoizedState !== null;
              ge || yE();
            }
          }
          if (h & pt) {
            try {
              EC(t);
            } catch (tt) {
              un(t, t.return, tt);
            }
            e1(t);
          }
          return;
        }
        case Ue: {
          var Ve = c !== null && c.memoizedState !== null;
          if (t.mode & Rt) {
            var ze = zr;
            zr = ze || Ve, ki(n, t), zr = ze;
          } else
            ki(n, t);
          if (cl(t), h & pi) {
            var At = t.stateNode, ft = t.memoizedState, Ut = ft !== null, wt = t;
            if (At.isHidden = Ut, Ut && !Ve && (wt.mode & Rt) !== et) {
              je = wt;
              for (var yn = wt.child; yn !== null; )
                je = yn, wC(yn), yn = yn.sibling;
            }
            Rr && gC(wt, Ut);
          }
          return;
        }
        case nt: {
          ki(n, t), cl(t), h & pt && e1(t);
          return;
        }
        case Ct:
          return;
        default: {
          ki(n, t), cl(t);
          return;
        }
      }
    }
    function cl(t) {
      var n = t.flags;
      if (n & Xt) {
        try {
          xC(t);
        } catch (l) {
          un(t, t.return, l);
        }
        t.flags &= ~Xt;
      }
      n & Aa && (t.flags &= ~Aa);
    }
    function RC(t, n, l) {
      Yu = l, qu = n, je = t, n1(t, n, l), Yu = null, qu = null;
    }
    function n1(t, n, l) {
      for (var c = (t.mode & Rt) !== et; je !== null; ) {
        var h = je, y = h.child;
        if (h.tag === Ue && c) {
          var C = h.memoizedState !== null, b = C || Vh;
          if (b) {
            Vm(t, n, l);
            continue;
          } else {
            var D = h.alternate, O = D !== null && D.memoizedState !== null, P = O || zr, Y = Vh, $ = zr;
            Vh = b, zr = P, zr && !$ && (je = h, DC(h));
            for (var ie = y; ie !== null; )
              je = ie, n1(
                ie,
                n,
                l
              ), ie = ie.sibling;
            je = h, Vh = Y, zr = $, Vm(t, n, l);
            continue;
          }
        }
        (h.subtreeFlags & an) !== Ge && y !== null ? (y.return = h, je = y) : Vm(t, n, l);
      }
    }
    function Vm(t, n, l) {
      for (; je !== null; ) {
        var c = je;
        if ((c.flags & an) !== Ge) {
          var h = c.alternate;
          It(c);
          try {
            pC(n, h, c, l);
          } catch (C) {
            un(c, c.return, C);
          }
          Kt();
        }
        if (c === t) {
          je = null;
          return;
        }
        var y = c.sibling;
        if (y !== null) {
          y.return = c.return, je = y;
          return;
        }
        je = c.return;
      }
    }
    function wC(t) {
      for (; je !== null; ) {
        var n = je, l = n.child;
        switch (n.tag) {
          case V:
          case Le:
          case de:
          case Se: {
            if (n.mode & _t)
              try {
                sl(), Ai(pr, n, n.return);
              } finally {
                ll(n);
              }
            else
              Ai(pr, n, n.return);
            break;
          }
          case X: {
            Wu(n, n.return);
            var c = n.stateNode;
            typeof c.componentWillUnmount == "function" && Gm(n, n.return, c);
            break;
          }
          case K: {
            Wu(n, n.return);
            break;
          }
          case Ue: {
            var h = n.memoizedState !== null;
            if (h) {
              r1(t);
              continue;
            }
            break;
          }
        }
        l !== null ? (l.return = n, je = l) : r1(t);
      }
    }
    function r1(t) {
      for (; je !== null; ) {
        var n = je;
        if (n === t) {
          je = null;
          return;
        }
        var l = n.sibling;
        if (l !== null) {
          l.return = n.return, je = l;
          return;
        }
        je = n.return;
      }
    }
    function DC(t) {
      for (; je !== null; ) {
        var n = je, l = n.child;
        if (n.tag === Ue) {
          var c = n.memoizedState !== null;
          if (c) {
            a1(t);
            continue;
          }
        }
        l !== null ? (l.return = n, je = l) : a1(t);
      }
    }
    function a1(t) {
      for (; je !== null; ) {
        var n = je;
        It(n);
        try {
          mC(n);
        } catch (c) {
          un(n, n.return, c);
        }
        if (Kt(), n === t) {
          je = null;
          return;
        }
        var l = n.sibling;
        if (l !== null) {
          l.return = n.return, je = l;
          return;
        }
        je = n.return;
      }
    }
    function NC(t, n, l, c) {
      je = n, MC(n, t, l, c);
    }
    function MC(t, n, l, c) {
      for (; je !== null; ) {
        var h = je, y = h.child;
        (h.subtreeFlags & ln) !== Ge && y !== null ? (y.return = h, je = y) : OC(t, n, l, c);
      }
    }
    function OC(t, n, l, c) {
      for (; je !== null; ) {
        var h = je;
        if ((h.flags & Mr) !== Ge) {
          It(h);
          try {
            LC(n, h, l, c);
          } catch (C) {
            un(h, h.return, C);
          }
          Kt();
        }
        if (h === t) {
          je = null;
          return;
        }
        var y = h.sibling;
        if (y !== null) {
          y.return = h.return, je = y;
          return;
        }
        je = h.return;
      }
    }
    function LC(t, n, l, c) {
      switch (n.tag) {
        case V:
        case Le:
        case Se: {
          if (n.mode & _t) {
            _m();
            try {
              As(Pr | vr, n);
            } finally {
              Sm(n);
            }
          } else
            As(Pr | vr, n);
          break;
        }
      }
    }
    function AC(t) {
      je = t, PC();
    }
    function PC() {
      for (; je !== null; ) {
        var t = je, n = t.child;
        if ((je.flags & ma) !== Ge) {
          var l = t.deletions;
          if (l !== null) {
            for (var c = 0; c < l.length; c++) {
              var h = l[c];
              je = h, UC(h, t);
            }
            {
              var y = t.alternate;
              if (y !== null) {
                var C = y.child;
                if (C !== null) {
                  y.child = null;
                  do {
                    var b = C.sibling;
                    C.sibling = null, C = b;
                  } while (C !== null);
                }
              }
            }
            je = t;
          }
        }
        (t.subtreeFlags & ln) !== Ge && n !== null ? (n.return = t, je = n) : kC();
      }
    }
    function kC() {
      for (; je !== null; ) {
        var t = je;
        (t.flags & Mr) !== Ge && (It(t), zC(t), Kt());
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, je = n;
          return;
        }
        je = t.return;
      }
    }
    function zC(t) {
      switch (t.tag) {
        case V:
        case Le:
        case Se: {
          t.mode & _t ? (_m(), Ai(Pr | vr, t, t.return), Sm(t)) : Ai(Pr | vr, t, t.return);
          break;
        }
      }
    }
    function UC(t, n) {
      for (; je !== null; ) {
        var l = je;
        It(l), HC(l, n), Kt();
        var c = l.child;
        c !== null ? (c.return = l, je = c) : FC(t);
      }
    }
    function FC(t) {
      for (; je !== null; ) {
        var n = je, l = n.sibling, c = n.return;
        if (Jy(n), n === t) {
          je = null;
          return;
        }
        if (l !== null) {
          l.return = c, je = l;
          return;
        }
        je = c;
      }
    }
    function HC(t, n) {
      switch (t.tag) {
        case V:
        case Le:
        case Se: {
          t.mode & _t ? (_m(), Ai(Pr, t, n), Sm(t)) : Ai(Pr, t, n);
          break;
        }
      }
    }
    function GC(t) {
      switch (t.tag) {
        case V:
        case Le:
        case Se: {
          try {
            As(pr | vr, t);
          } catch (l) {
            un(t, t.return, l);
          }
          break;
        }
        case X: {
          var n = t.stateNode;
          try {
            n.componentDidMount();
          } catch (l) {
            un(t, t.return, l);
          }
          break;
        }
      }
    }
    function jC(t) {
      switch (t.tag) {
        case V:
        case Le:
        case Se: {
          try {
            As(Pr | vr, t);
          } catch (n) {
            un(t, t.return, n);
          }
          break;
        }
      }
    }
    function BC(t) {
      switch (t.tag) {
        case V:
        case Le:
        case Se: {
          try {
            Ai(pr | vr, t, t.return);
          } catch (l) {
            un(t, t.return, l);
          }
          break;
        }
        case X: {
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Gm(t, t.return, n);
          break;
        }
      }
    }
    function IC(t) {
      switch (t.tag) {
        case V:
        case Le:
        case Se:
          try {
            Ai(Pr | vr, t, t.return);
          } catch (n) {
            un(t, t.return, n);
          }
      }
    }
    var qh = 0, Wh = 1, Xh = 2, Qh = 3, Kh = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var wf = Symbol.for;
      qh = wf("selector.component"), Wh = wf("selector.has_pseudo_class"), Xh = wf("selector.role"), Qh = wf("selector.test_id"), Kh = wf("selector.text");
    }
    function VC(t) {
      return {
        $$typeof: qh,
        value: t
      };
    }
    function YC(t) {
      return {
        $$typeof: Wh,
        value: t
      };
    }
    function qC(t) {
      return {
        $$typeof: Xh,
        value: t
      };
    }
    function WC(t) {
      return {
        $$typeof: Kh,
        value: t
      };
    }
    function XC(t) {
      return {
        $$typeof: Qh,
        value: t
      };
    }
    function Ym(t) {
      var n = Bo(t);
      if (n != null) {
        if (typeof n.memoizedProps["data-testname"] != "string")
          throw new Error("Invalid host root specified. Should be either a React container or a node with a testname attribute.");
        return n;
      } else {
        var l = ep(t);
        if (l === null)
          throw new Error("Could not find React container within specified host subtree.");
        return l.stateNode.current;
      }
    }
    function qm(t, n) {
      switch (n.$$typeof) {
        case qh:
          if (t.type === n.value)
            return !0;
          break;
        case Wh:
          return QC(t, n.value);
        case Xh:
          if (t.tag === K) {
            var l = t.stateNode;
            if (xc(l, n.value))
              return !0;
          }
          break;
        case Kh:
          if (t.tag === K || t.tag === xe) {
            var c = kt(t);
            if (c !== null && c.indexOf(n.value) >= 0)
              return !0;
          }
          break;
        case Qh:
          if (t.tag === K) {
            var h = t.memoizedProps["data-testname"];
            if (typeof h == "string" && h.toLowerCase() === n.value.toLowerCase())
              return !0;
          }
          break;
        default:
          throw new Error("Invalid selector type specified.");
      }
      return !1;
    }
    function Wm(t) {
      switch (t.$$typeof) {
        case qh:
          var n = $e(t.value) || "Unknown";
          return "<" + n + ">";
        case Wh:
          return ":has(" + (Wm(t) || "") + ")";
        case Xh:
          return '[role="' + t.value + '"]';
        case Kh:
          return '"' + t.value + '"';
        case Qh:
          return '[data-testname="' + t.value + '"]';
        default:
          throw new Error("Invalid selector type specified.");
      }
    }
    function i1(t, n) {
      for (var l = [], c = [t, 0], h = 0; h < c.length; ) {
        var y = c[h++], C = c[h++], b = n[C];
        if (!(y.tag === K && ns(y))) {
          for (; b != null && qm(y, b); )
            C++, b = n[C];
          if (C === n.length)
            l.push(y);
          else
            for (var D = y.child; D !== null; )
              c.push(D, C), D = D.sibling;
        }
      }
      return l;
    }
    function QC(t, n) {
      for (var l = [t, 0], c = 0; c < l.length; ) {
        var h = l[c++], y = l[c++], C = n[y];
        if (!(h.tag === K && ns(h))) {
          for (; C != null && qm(h, C); )
            y++, C = n[y];
          if (y === n.length)
            return !0;
          for (var b = h.child; b !== null; )
            l.push(b, y), b = b.sibling;
        }
      }
      return !1;
    }
    function Jh(t, n) {
      if (!$a)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var l = Ym(t), c = i1(l, n), h = [], y = Array.from(c), C = 0; C < y.length; ) {
        var b = y[C++];
        if (b.tag === K) {
          if (ns(b))
            continue;
          h.push(b.stateNode);
        } else
          for (var D = b.child; D !== null; )
            y.push(D), D = D.sibling;
      }
      return h;
    }
    function KC(t, n) {
      if (!$a)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var l = Ym(t), c = 0, h = [], y = [l, 0], C = 0; C < y.length; ) {
        var b = y[C++], D = y[C++], O = n[D];
        if (!(b.tag === K && ns(b)) && (qm(b, O) && (h.push(Wm(O)), D++, D > c && (c = D)), D < n.length))
          for (var P = b.child; P !== null; )
            y.push(P, D), P = P.sibling;
      }
      if (c < n.length) {
        for (var Y = [], $ = c; $ < n.length; $++)
          Y.push(Wm(n[$]));
        return `findAllNodes was able to match part of the selector:
` + ("  " + h.join(" > ") + `

`) + `No matching component was found for:
` + ("  " + Y.join(" > "));
      }
      return null;
    }
    function JC(t, n) {
      if (!$a)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var l = Jh(t, n), c = [], h = 0; h < l.length; h++)
        c.push(_c(l[h]));
      for (var y = c.length - 1; y > 0; y--)
        for (var C = c[y], b = C.x, D = b + C.width, O = C.y, P = O + C.height, Y = y - 1; Y >= 0; Y--)
          if (y !== Y) {
            var $ = c[Y], ie = $.x, ce = ie + $.width, se = $.y, We = se + $.height;
            if (b >= ie && O >= se && D <= ce && P <= We) {
              c.splice(y, 1);
              break;
            } else if (b === ie && C.width === $.width && !(We < O) && !(se > P)) {
              se > O && ($.height += se - O, $.y = O), We < P && ($.height = P - se), c.splice(y, 1);
              break;
            } else if (O === se && C.height === $.height && !(ce < b) && !(ie > D)) {
              ie > b && ($.width += ie - b, $.x = b), ce < D && ($.width = D - ie), c.splice(y, 1);
              break;
            }
          }
      return c;
    }
    function ZC(t, n) {
      if (!$a)
        throw new Error("Test selector API is not supported by this renderer.");
      for (var l = Ym(t), c = i1(l, n), h = Array.from(c), y = 0; y < h.length; ) {
        var C = h[y++];
        if (!ns(C)) {
          if (C.tag === K) {
            var b = C.stateNode;
            if (gd(b))
              return !0;
          }
          for (var D = C.child; D !== null; )
            h.push(D), D = D.sibling;
        }
      }
      return !1;
    }
    var Zh = [];
    function $C() {
      $a && Zh.forEach(function(t) {
        return t();
      });
    }
    function eE(t, n, l, c) {
      if (!$a)
        throw new Error("Test selector API is not supported by this renderer.");
      var h = Jh(t, n), y = tp(h, l, c), C = y.disconnect, b = y.observe, D = y.unobserve, O = function() {
        var P = Jh(t, n);
        h.forEach(function(Y) {
          P.indexOf(Y) < 0 && D(Y);
        }), P.forEach(function(Y) {
          h.indexOf(Y) < 0 && b(Y);
        });
      };
      return Zh.push(O), {
        disconnect: function() {
          var P = Zh.indexOf(O);
          P >= 0 && Zh.splice(P, 1), C();
        }
      };
    }
    var tE = d.ReactCurrentActQueue;
    function nE(t) {
      {
        var n = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, l = typeof jest < "u";
        return Jv && l && n !== !1;
      }
    }
    function l1() {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !t && tE.current !== null && m("The current testing environment is not configured to support act(...)"), t;
      }
    }
    var rE = Math.ceil, Xm = d.ReactCurrentDispatcher, Qm = d.ReactCurrentOwner, Mn = d.ReactCurrentBatchConfig, zi = d.ReactCurrentActQueue, tr = 0, Km = 1, Fr = 2, ci = 4, Yl = 0, Df = 1, Eo = 2, $h = 3, Nf = 4, s1 = 5, Jm = 6, xt = tr, da = null, On = null, yr = ue, fl = ue, Zm = ia(ue), Sr = Yl, Mf = null, ev = ue, Of = ue, tv = ue, Lf = null, wa = null, $m = 0, o1 = 500, u1 = 1 / 0, aE = 500, ql = null;
    function Xu() {
      u1 = Yn() + aE;
    }
    function c1() {
      return u1;
    }
    var nv = !1, eg = null, Qu = null, bo = !1, Ps = null, Af = ue, tg = [], ng = null, iE = 50, Pf = 0, rg = null, ag = !1, rv = !1, lE = 50, Ku = 0, av = null, kf = sn, iv = ue, f1 = !1;
    function lv() {
      return da;
    }
    function Kr() {
      return (xt & (Fr | ci)) !== tr ? Yn() : (kf !== sn || (kf = Yn()), kf);
    }
    function ks(t) {
      var n = t.mode;
      if ((n & Rt) === et)
        return it;
      if ((xt & Fr) !== tr && yr !== ue)
        return Ol(yr);
      var l = N() !== x;
      if (l) {
        if (Mn.transition !== null) {
          var c = Mn.transition;
          c._updatedFibers || (c._updatedFibers = /* @__PURE__ */ new Set()), c._updatedFibers.add(t);
        }
        return iv === In && (iv = lo()), iv;
      }
      var h = Yr();
      if (h !== In)
        return h;
      var y = $v();
      return y;
    }
    function sE(t) {
      var n = t.mode;
      return (n & Rt) === et ? it : cp();
    }
    function nr(t, n, l, c) {
      kE(), f1 && m("useInsertionEffect must not schedule updates."), ag && (rv = !0), xs(t, l, c), (xt & Fr) !== ue && t === da ? FE(n) : (Wr && ur(t, n, l), HE(n), t === da && ((xt & Fr) === tr && (Of = at(Of, l)), Sr === Nf && zs(t, yr)), Da(t, c), l === it && xt === tr && (n.mode & Rt) === et && !zi.isBatchingLegacy && (Xu(), dr()));
    }
    function oE(t, n, l) {
      var c = t.current;
      c.lanes = n, xs(t, n, l), Da(t, l);
    }
    function uE(t) {
      return (xt & Fr) !== tr;
    }
    function Da(t, n) {
      var l = t.callbackNode;
      Ad(t, n);
      var c = ro(t, t === da ? yr : ue);
      if (c === ue) {
        l !== null && R1(l), t.callbackNode = null, t.callbackPriority = In;
        return;
      }
      var h = Zi(c), y = t.callbackPriority;
      if (y === h && !(zi.current !== null && l !== cg)) {
        l == null && y !== it && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      l != null && R1(l);
      var C;
      if (h === it)
        t.tag === Dn ? (zi.isBatchingLegacy !== null && (zi.didScheduleLegacyUpdate = !0), Ou(v1.bind(null, t))) : vo(v1.bind(null, t)), md ? zi.current !== null ? zi.current.push(hr) : Sc(function() {
          (xt & (Fr | ci)) === tr && hr();
        }) : dv(qr, hr), C = null;
      else {
        var b;
        switch (bu(c)) {
          case Lr:
            b = qr;
            break;
          case Ll:
            b = Kc;
            break;
          case Cs:
            b = Ar;
            break;
          case Xc:
            b = Bd;
            break;
          default:
            b = Ar;
            break;
        }
        C = dv(b, d1.bind(null, t));
      }
      t.callbackPriority = h, t.callbackNode = C;
    }
    function d1(t, n) {
      if (yx(), kf = sn, iv = ue, (xt & (Fr | ci)) !== tr)
        throw new Error("Should not already be working.");
      var l = t.callbackNode, c = dl();
      if (c && t.callbackNode !== l)
        return null;
      var h = ro(t, t === da ? yr : ue);
      if (h === ue)
        return null;
      var y = !ms(t, h) && !Ud(t, h) && !n, C = y ? EE(t, h) : uv(t, h);
      if (C !== Yl) {
        if (C === Eo) {
          var b = ao(t);
          b !== ue && (h = b, C = ig(t, b));
        }
        if (C === Df) {
          var D = Mf;
          throw To(t, ue), zs(t, h), Da(t, Yn()), D;
        }
        if (C === Jm)
          zs(t, h);
        else {
          var O = !ms(t, h), P = t.current.alternate;
          if (O && !fE(P)) {
            if (C = uv(t, h), C === Eo) {
              var Y = ao(t);
              Y !== ue && (h = Y, C = ig(t, Y));
            }
            if (C === Df) {
              var $ = Mf;
              throw To(t, ue), zs(t, h), Da(t, Yn()), $;
            }
          }
          t.finishedWork = P, t.finishedLanes = h, cE(t, C, h);
        }
      }
      return Da(t, Yn()), t.callbackNode === l ? d1.bind(null, t) : null;
    }
    function ig(t, n) {
      var l = Lf;
      if (oa(t)) {
        var c = To(t, n);
        c.flags |= ga, os(t.containerInfo);
      }
      var h = uv(t, n);
      if (h !== Eo) {
        var y = wa;
        wa = l, y !== null && h1(y);
      }
      return h;
    }
    function h1(t) {
      wa === null ? wa = t : wa.push.apply(wa, t);
    }
    function cE(t, n, l) {
      switch (n) {
        case Yl:
        case Df:
          throw new Error("Root did not complete. This is a bug in React.");
        case Eo: {
          Ro(t, wa, ql);
          break;
        }
        case $h: {
          if (zs(t, l), Yc(l) && !w1()) {
            var c = $m + o1 - Yn();
            if (c > 10) {
              var h = ro(t, ue);
              if (h !== ue)
                break;
              var y = t.suspendedLanes;
              if (!ys(y, l)) {
                Kr(), or(t, y);
                break;
              }
              t.timeoutHandle = mc(Ro.bind(null, t, wa, ql), c);
              break;
            }
          }
          Ro(t, wa, ql);
          break;
        }
        case Nf: {
          if (zs(t, l), qc(l))
            break;
          if (!w1()) {
            var C = Od(t, l), b = C, D = Yn() - b, O = PE(D) - D;
            if (O > 10) {
              t.timeoutHandle = mc(Ro.bind(null, t, wa, ql), O);
              break;
            }
          }
          Ro(t, wa, ql);
          break;
        }
        case s1: {
          Ro(t, wa, ql);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function fE(t) {
      for (var n = t; ; ) {
        if (n.flags & Sl) {
          var l = n.updateQueue;
          if (l !== null) {
            var c = l.stores;
            if (c !== null)
              for (var h = 0; h < c.length; h++) {
                var y = c[h], C = y.getSnapshot, b = y.value;
                try {
                  if (!Hn(C(), b))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var D = n.child;
        if (n.subtreeFlags & Sl && D !== null) {
          D.return = n, n = D;
          continue;
        }
        if (n === t)
          return !0;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return !0;
    }
    function zs(t, n) {
      n = so(n, tv), n = so(n, Of), oo(t, n);
    }
    function v1(t) {
      if (Sx(), (xt & (Fr | ci)) !== tr)
        throw new Error("Should not already be working.");
      dl();
      var n = ro(t, ue);
      if (!Nn(n, it))
        return Da(t, Yn()), null;
      var l = uv(t, n);
      if (t.tag !== Dn && l === Eo) {
        var c = ao(t);
        c !== ue && (n = c, l = ig(t, c));
      }
      if (l === Df) {
        var h = Mf;
        throw To(t, ue), zs(t, n), Da(t, Yn()), h;
      }
      if (l === Jm)
        throw new Error("Root did not complete. This is a bug in React.");
      var y = t.current.alternate;
      return t.finishedWork = y, t.finishedLanes = n, Ro(t, wa, ql), Da(t, Yn()), null;
    }
    function dE(t, n) {
      n !== ue && (Wc(t, at(n, it)), Da(t, Yn()), (xt & (Fr | ci)) === tr && (Xu(), hr()));
    }
    function hE(t) {
      var n = Yr(), l = Mn.transition;
      try {
        return Mn.transition = null, kn(Cs), t();
      } finally {
        kn(n), Mn.transition = l;
      }
    }
    function vE(t, n) {
      var l = xt;
      xt |= Km;
      try {
        return t(n);
      } finally {
        xt = l, xt === tr && !zi.isBatchingLegacy && (Xu(), dr());
      }
    }
    function pE(t, n, l, c, h) {
      var y = Yr(), C = Mn.transition;
      try {
        return Mn.transition = null, kn(Lr), t(n, l, c, h);
      } finally {
        kn(y), Mn.transition = C, xt === tr && Xu();
      }
    }
    function sv(t) {
      Ps !== null && Ps.tag === Dn && (xt & (Fr | ci)) === tr && dl();
      var n = xt;
      xt |= Km;
      var l = Mn.transition, c = Yr();
      try {
        return Mn.transition = null, kn(Lr), t ? t() : void 0;
      } finally {
        kn(c), Mn.transition = l, xt = n, (xt & (Fr | ci)) === tr && hr();
      }
    }
    function mE() {
      return (xt & (Fr | ci)) !== tr;
    }
    function gE(t) {
      var n = xt;
      xt |= Km;
      var l = Mn.transition, c = Yr();
      try {
        Mn.transition = null, kn(Lr), t();
      } finally {
        kn(c), Mn.transition = l, xt = n, xt === tr && (Xu(), hr());
      }
    }
    function ov(t, n) {
      jn(Zm, fl, t), fl = at(fl, n);
    }
    function lg(t) {
      fl = Zm.current, mn(Zm, t);
    }
    function To(t, n) {
      t.finishedWork = null, t.finishedLanes = ue;
      var l = t.timeoutHandle;
      if (l !== gc && (t.timeoutHandle = gc, ka(l)), On !== null)
        for (var c = On.return; c !== null; ) {
          var h = c.alternate;
          jy(h, c), c = c.return;
        }
      da = t;
      var y = wo(t.current, null);
      return On = y, yr = fl = n, Sr = Yl, Mf = null, ev = ue, Of = ue, tv = ue, Lf = null, wa = null, W_(), ne.discardPendingWarnings(), y;
    }
    function p1(t, n) {
      do {
        var l = On;
        try {
          if (ih(), V0(), Kt(), Qm.current = null, l === null || l.return === null) {
            Sr = Df, Mf = n, On = null;
            return;
          }
          if (Z && l.mode & _t && Uh(l, !0), G)
            if (hn(), n !== null && typeof n == "object" && typeof n.then == "function") {
              var c = n;
              wu(l, c, yr);
            } else
              kl(l, n, yr);
          bx(t, l.return, l, n, yr), S1(l);
        } catch (h) {
          n = h, On === l && l !== null ? (l = l.return, On = l) : l = On;
          continue;
        }
        return;
      } while (!0);
    }
    function m1() {
      var t = Xm.current;
      return Xm.current = Lh, t === null ? Lh : t;
    }
    function g1(t) {
      Xm.current = t;
    }
    function yE() {
      $m = Yn();
    }
    function zf(t) {
      ev = at(t, ev);
    }
    function SE() {
      Sr === Yl && (Sr = $h);
    }
    function sg() {
      (Sr === Yl || Sr === $h || Sr === Eo) && (Sr = Nf), da !== null && (io(ev) || io(Of)) && zs(da, yr);
    }
    function _E(t) {
      Sr !== Nf && (Sr = Eo), Lf === null ? Lf = [t] : Lf.push(t);
    }
    function xE() {
      return Sr === Yl;
    }
    function uv(t, n) {
      var l = xt;
      xt |= Fr;
      var c = m1();
      if (da !== t || yr !== n) {
        if (Wr) {
          var h = t.memoizedUpdaters;
          h.size > 0 && (Uf(t, yr), h.clear()), Fd(t, n);
        }
        ql = Fe(), To(t, n);
      }
      Du(n);
      do
        try {
          CE();
          break;
        } catch (y) {
          p1(t, y);
        }
      while (!0);
      if (ih(), xt = l, g1(c), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return zl(), da = null, yr = ue, Sr;
    }
    function CE() {
      for (; On !== null; )
        y1(On);
    }
    function EE(t, n) {
      var l = xt;
      xt |= Fr;
      var c = m1();
      if (da !== t || yr !== n) {
        if (Wr) {
          var h = t.memoizedUpdaters;
          h.size > 0 && (Uf(t, yr), h.clear()), Fd(t, n);
        }
        ql = Fe(), Xu(), To(t, n);
      }
      Du(n);
      do
        try {
          bE();
          break;
        } catch (y) {
          p1(t, y);
        }
      while (!0);
      return ih(), g1(c), xt = l, On !== null ? (Ri(), Yl) : (zl(), da = null, yr = ue, Sr);
    }
    function bE() {
      for (; On !== null && !ai(); )
        y1(On);
    }
    function y1(t) {
      var n = t.alternate;
      It(t);
      var l;
      (t.mode & _t) !== et ? (ym(t), l = og(n, t, fl), Uh(t, !0)) : l = og(n, t, fl), Kt(), t.memoizedProps = t.pendingProps, l === null ? S1(t) : On = l, Qm.current = null;
    }
    function S1(t) {
      var n = t;
      do {
        var l = n.alternate, c = n.return;
        if ((n.flags & _l) === Ge) {
          It(n);
          var h = void 0;
          if ((n.mode & _t) === et ? h = Gy(l, n, fl) : (ym(n), h = Gy(l, n, fl), Uh(n, !1)), Kt(), h !== null) {
            On = h;
            return;
          }
        } else {
          var y = nC(l, n);
          if (y !== null) {
            y.flags &= qs, On = y;
            return;
          }
          if ((n.mode & _t) !== et) {
            Uh(n, !1);
            for (var C = n.actualDuration, b = n.child; b !== null; )
              C += b.actualDuration, b = b.sibling;
            n.actualDuration = C;
          }
          if (c !== null)
            c.flags |= _l, c.subtreeFlags = Ge, c.deletions = null;
          else {
            Sr = Jm, On = null;
            return;
          }
        }
        var D = n.sibling;
        if (D !== null) {
          On = D;
          return;
        }
        n = c, On = n;
      } while (n !== null);
      Sr === Yl && (Sr = s1);
    }
    function Ro(t, n, l) {
      var c = Yr(), h = Mn.transition;
      try {
        Mn.transition = null, kn(Lr), TE(t, n, l, c);
      } finally {
        Mn.transition = h, kn(c);
      }
      return null;
    }
    function TE(t, n, l, c) {
      do
        dl();
      while (Ps !== null);
      if (zE(), (xt & (Fr | ci)) !== tr)
        throw new Error("Should not already be working.");
      var h = t.finishedWork, y = t.finishedLanes;
      if (dp(y), h === null)
        return co(), null;
      if (y === ue && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), t.finishedWork = null, t.finishedLanes = ue, h === t.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      t.callbackNode = null, t.callbackPriority = In;
      var C = at(h.lanes, h.childLanes);
      fp(t, C), t === da && (da = null, On = null, yr = ue), ((h.subtreeFlags & ln) !== Ge || (h.flags & ln) !== Ge) && (bo || (bo = !0, ng = l, dv(Ar, function() {
        return dl(), null;
      })));
      var b = (h.subtreeFlags & (gt | Rn | an | ln)) !== Ge, D = (h.flags & (gt | Rn | an | ln)) !== Ge;
      if (b || D) {
        var O = Mn.transition;
        Mn.transition = null;
        var P = Yr();
        kn(Lr);
        var Y = xt;
        xt |= ci, Qm.current = null, cC(t, h), py(), TC(t, h, y), El(t.containerInfo), t.current = h, ef(y), RC(h, t, y), fo(), Qc(), xt = Y, kn(P), Mn.transition = O;
      } else
        t.current = h, py();
      var $ = bo;
      if (bo ? (bo = !1, Ps = t, Af = y) : (Ku = 0, av = null), C = t.pendingLanes, C === ue && (Qu = null), $ || E1(t.current, !1), uo(h.stateNode, c), Wr && t.memoizedUpdaters.clear(), $C(), Da(t, Yn()), n !== null)
        for (var ie = t.onRecoverableError, ce = 0; ce < n.length; ce++) {
          var se = n[ce], We = se.stack, ut = se.digest;
          ie(se.value, {
            componentStack: We,
            digest: ut
          });
        }
      if (nv) {
        nv = !1;
        var Ze = eg;
        throw eg = null, Ze;
      }
      return Nn(Af, it) && t.tag !== Dn && dl(), C = t.pendingLanes, Nn(C, it) ? (gx(), t === rg ? Pf++ : (Pf = 0, rg = t)) : Pf = 0, hr(), co(), null;
    }
    function dl() {
      if (Ps !== null) {
        var t = bu(Af), n = jd(Cs, t), l = Mn.transition, c = Yr();
        try {
          return Mn.transition = null, kn(n), wE();
        } finally {
          kn(c), Mn.transition = l;
        }
      }
      return !1;
    }
    function RE(t) {
      tg.push(t), bo || (bo = !0, dv(Ar, function() {
        return dl(), null;
      }));
    }
    function wE() {
      if (Ps === null)
        return !1;
      var t = ng;
      ng = null;
      var n = Ps, l = Af;
      if (Ps = null, Af = ue, (xt & (Fr | ci)) !== tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      ag = !0, rv = !1, Xr(l);
      var c = xt;
      xt |= ci, AC(n.current), NC(n, n.current, l, t);
      {
        var h = tg;
        tg = [];
        for (var y = 0; y < h.length; y++) {
          var C = h[y];
          vC(n, C);
        }
      }
      tf(), E1(n.current, !0), xt = c, hr(), rv ? n === av ? Ku++ : (Ku = 0, av = n) : Ku = 0, ag = !1, rv = !1, Jc(n);
      {
        var b = n.current.stateNode;
        b.effectDuration = 0, b.passiveEffectDuration = 0;
      }
      return !0;
    }
    function _1(t) {
      return Qu !== null && Qu.has(t);
    }
    function DE(t) {
      Qu === null ? Qu = /* @__PURE__ */ new Set([t]) : Qu.add(t);
    }
    function NE(t) {
      nv || (nv = !0, eg = t);
    }
    var ME = NE;
    function x1(t, n, l) {
      var c = xo(l, n), h = gy(t, c, it), y = Ds(t, h, it), C = Kr();
      y !== null && (xs(y, it, C), Da(y, C));
    }
    function un(t, n, l) {
      if (sC(l), Ff(!1), t.tag === ee) {
        x1(t, t, l);
        return;
      }
      var c = null;
      for (c = n; c !== null; ) {
        if (c.tag === ee) {
          x1(c, t, l);
          return;
        } else if (c.tag === X) {
          var h = c.type, y = c.stateNode;
          if (typeof h.getDerivedStateFromError == "function" || typeof y.componentDidCatch == "function" && !_1(y)) {
            var C = xo(l, t), b = bm(c, C, it), D = Ds(c, b, it), O = Kr();
            D !== null && (xs(D, it, O), Da(D, O));
            return;
          }
        }
        c = c.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, l);
    }
    function OE(t, n, l) {
      var c = t.pingCache;
      c !== null && c.delete(n);
      var h = Kr();
      or(t, l), GE(t), da === t && ys(yr, l) && (Sr === Nf || Sr === $h && Yc(yr) && Yn() - $m < o1 ? To(t, ue) : tv = at(tv, l)), Da(t, h);
    }
    function C1(t, n) {
      n === In && (n = sE(t));
      var l = Kr(), c = ca(t, n);
      c !== null && (xs(c, n, l), Da(c, l));
    }
    function LE(t) {
      var n = t.memoizedState, l = In;
      n !== null && (l = n.retryLane), C1(t, l);
    }
    function AE(t, n) {
      var l = In, c;
      switch (t.tag) {
        case fe:
          c = t.stateNode;
          var h = t.memoizedState;
          h !== null && (l = h.retryLane);
          break;
        case nt:
          c = t.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      c !== null && c.delete(n), C1(t, l);
    }
    function PE(t) {
      return t < 120 ? 120 : t < 480 ? 480 : t < 1080 ? 1080 : t < 1920 ? 1920 : t < 3e3 ? 3e3 : t < 4320 ? 4320 : rE(t / 1960) * 1960;
    }
    function kE() {
      if (Pf > iE)
        throw Pf = 0, rg = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ku > lE && (Ku = 0, av = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function zE() {
      ne.flushLegacyContextWarning(), ne.flushPendingUnsafeLifecycleWarnings();
    }
    function E1(t, n) {
      It(t), cv(t, bt, BC), n && cv(t, St, IC), cv(t, bt, GC), n && cv(t, St, jC), Kt();
    }
    function cv(t, n, l) {
      for (var c = t, h = null; c !== null; ) {
        var y = c.subtreeFlags & n;
        c !== h && c.child !== null && y !== Ge ? c = c.child : ((c.flags & n) !== Ge && l(c), c.sibling !== null ? c = c.sibling : c = h = c.return);
      }
    }
    var fv = null;
    function b1(t) {
      {
        if ((xt & Fr) !== tr || !(t.mode & Rt))
          return;
        var n = t.tag;
        if (n !== le && n !== ee && n !== X && n !== V && n !== Le && n !== de && n !== Se)
          return;
        var l = Ye(t) || "ReactComponent";
        if (fv !== null) {
          if (fv.has(l))
            return;
          fv.add(l);
        } else
          fv = /* @__PURE__ */ new Set([l]);
        var c = Qe;
        try {
          It(t), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          c ? It(t) : Kt();
        }
      }
    }
    var og;
    {
      var UE = null;
      og = function(t, n, l) {
        var c = L1(UE, n);
        try {
          return zy(t, n, l);
        } catch (y) {
          if (Qd() || y !== null && typeof y == "object" && typeof y.then == "function")
            throw y;
          if (ih(), V0(), jy(t, n), L1(n, c), n.mode & _t && ym(n), Vy(null, zy, null, t, n, l), iC()) {
            var h = Yy();
            typeof h == "object" && h !== null && h._suppressLogging && typeof y == "object" && y !== null && !y._suppressLogging && (y._suppressLogging = !0);
          }
          throw y;
        }
      };
    }
    var T1 = !1, ug;
    ug = /* @__PURE__ */ new Set();
    function FE(t) {
      if (Oe && !vx())
        switch (t.tag) {
          case V:
          case Le:
          case Se: {
            var n = On && Ye(On) || "Unknown", l = n;
            if (!ug.has(l)) {
              ug.add(l);
              var c = Ye(t) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", c, n, n);
            }
            break;
          }
          case X: {
            T1 || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), T1 = !0);
            break;
          }
        }
    }
    function Uf(t, n) {
      if (Wr) {
        var l = t.memoizedUpdaters;
        l.forEach(function(c) {
          ur(t, c, n);
        });
      }
    }
    var cg = {};
    function dv(t, n) {
      {
        var l = zi.current;
        return l !== null ? (l.push(n), cg) : Jn(t, n);
      }
    }
    function R1(t) {
      if (t !== cg)
        return Va(t);
    }
    function w1() {
      return zi.current !== null;
    }
    function HE(t) {
      {
        if (t.mode & Rt) {
          if (!l1())
            return;
        } else if (!nE() || xt !== tr || t.tag !== V && t.tag !== Le && t.tag !== Se)
          return;
        if (zi.current === null) {
          var n = Qe;
          try {
            It(t), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(t));
          } finally {
            n ? It(t) : Kt();
          }
        }
      }
    }
    function GE(t) {
      t.tag !== Dn && l1() && zi.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ff(t) {
      f1 = t;
    }
    var fi = null, Ju = null, jE = function(t) {
      fi = t;
    };
    function Zu(t) {
      {
        if (fi === null)
          return t;
        var n = fi(t);
        return n === void 0 ? t : n.current;
      }
    }
    function fg(t) {
      return Zu(t);
    }
    function dg(t) {
      {
        if (fi === null)
          return t;
        var n = fi(t);
        if (n === void 0) {
          if (t != null && typeof t.render == "function") {
            var l = Zu(t.render);
            if (t.render !== l) {
              var c = {
                $$typeof: Qn,
                render: l
              };
              return t.displayName !== void 0 && (c.displayName = t.displayName), c;
            }
          }
          return t;
        }
        return n.current;
      }
    }
    function D1(t, n) {
      {
        if (fi === null)
          return !1;
        var l = t.elementType, c = n.type, h = !1, y = typeof c == "object" && c !== null ? c.$$typeof : null;
        switch (t.tag) {
          case X: {
            typeof c == "function" && (h = !0);
            break;
          }
          case V: {
            (typeof c == "function" || y === Ke) && (h = !0);
            break;
          }
          case Le: {
            (y === Qn || y === Ke) && (h = !0);
            break;
          }
          case de:
          case Se: {
            (y === dt || y === Ke) && (h = !0);
            break;
          }
          default:
            return !1;
        }
        if (h) {
          var C = fi(l);
          if (C !== void 0 && C === fi(c))
            return !0;
        }
        return !1;
      }
    }
    function N1(t) {
      {
        if (fi === null || typeof WeakSet != "function")
          return;
        Ju === null && (Ju = /* @__PURE__ */ new WeakSet()), Ju.add(t);
      }
    }
    var BE = function(t, n) {
      {
        if (fi === null)
          return;
        var l = n.staleFamilies, c = n.updatedFamilies;
        dl(), sv(function() {
          hg(t.current, c, l);
        });
      }
    }, IE = function(t, n) {
      {
        if (t.context !== Br)
          return;
        dl(), sv(function() {
          k1(n, t, null, null);
        });
      }
    };
    function hg(t, n, l) {
      {
        var c = t.alternate, h = t.child, y = t.sibling, C = t.tag, b = t.type, D = null;
        switch (C) {
          case V:
          case Se:
          case X:
            D = b;
            break;
          case Le:
            D = b.render;
            break;
        }
        if (fi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var O = !1, P = !1;
        if (D !== null) {
          var Y = fi(D);
          Y !== void 0 && (l.has(Y) ? P = !0 : n.has(Y) && (C === X ? P = !0 : O = !0));
        }
        if (Ju !== null && (Ju.has(t) || c !== null && Ju.has(c)) && (P = !0), P && (t._debugNeedsRemount = !0), P || O) {
          var $ = ca(t, it);
          $ !== null && nr($, t, it, sn);
        }
        h !== null && !P && hg(h, n, l), y !== null && hg(y, n, l);
      }
    }
    var VE = function(t, n) {
      {
        var l = /* @__PURE__ */ new Set(), c = new Set(n.map(function(h) {
          return h.current;
        }));
        return vg(t.current, c, l), l;
      }
    };
    function vg(t, n, l) {
      {
        var c = t.child, h = t.sibling, y = t.tag, C = t.type, b = null;
        switch (y) {
          case V:
          case Se:
          case X:
            b = C;
            break;
          case Le:
            b = C.render;
            break;
        }
        var D = !1;
        b !== null && n.has(b) && (D = !0), D ? YE(t, l) : c !== null && vg(c, n, l), h !== null && vg(h, n, l);
      }
    }
    function YE(t, n) {
      {
        var l = qE(t, n);
        if (l)
          return;
        for (var c = t; ; ) {
          switch (c.tag) {
            case K:
              n.add(c.stateNode);
              return;
            case Q:
              n.add(c.stateNode.containerInfo);
              return;
            case ee:
              n.add(c.stateNode.containerInfo);
              return;
          }
          if (c.return === null)
            throw new Error("Expected to reach root first.");
          c = c.return;
        }
      }
    }
    function qE(t, n) {
      for (var l = t, c = !1; ; ) {
        if (l.tag === K)
          c = !0, n.add(l.stateNode);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t)
          return c;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return c;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      return !1;
    }
    var pg;
    {
      pg = !1;
      try {
        var M1 = Object.preventExtensions({});
      } catch {
        pg = !0;
      }
    }
    function WE(t, n, l, c) {
      this.tag = t, this.key = l, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = n, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = c, this.flags = Ge, this.subtreeFlags = Ge, this.deletions = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !pg && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Wa = function(t, n, l, c) {
      return new WE(t, n, l, c);
    };
    function mg(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function XE(t) {
      return typeof t == "function" && !mg(t) && t.defaultProps === void 0;
    }
    function QE(t) {
      if (typeof t == "function")
        return mg(t) ? X : V;
      if (t != null) {
        var n = t.$$typeof;
        if (n === Qn)
          return Le;
        if (n === dt)
          return de;
      }
      return le;
    }
    function wo(t, n) {
      var l = t.alternate;
      l === null ? (l = Wa(t.tag, n, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l._debugSource = t._debugSource, l._debugOwner = t._debugOwner, l._debugHookTypes = t._debugHookTypes, l.alternate = t, t.alternate = l) : (l.pendingProps = n, l.type = t.type, l.flags = Ge, l.subtreeFlags = Ge, l.deletions = null, l.actualDuration = 0, l.actualStartTime = -1), l.flags = t.flags & bn, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue;
      var c = t.dependencies;
      switch (l.dependencies = c === null ? null : {
        lanes: c.lanes,
        firstContext: c.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.selfBaseDuration = t.selfBaseDuration, l.treeBaseDuration = t.treeBaseDuration, l._debugNeedsRemount = t._debugNeedsRemount, l.tag) {
        case le:
        case V:
        case Se:
          l.type = Zu(t.type);
          break;
        case X:
          l.type = fg(t.type);
          break;
        case Le:
          l.type = dg(t.type);
          break;
      }
      return l;
    }
    function KE(t, n) {
      t.flags &= bn | Xt;
      var l = t.alternate;
      if (l === null)
        t.childLanes = ue, t.lanes = n, t.child = null, t.subtreeFlags = Ge, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0;
      else {
        t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = Ge, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type;
        var c = l.dependencies;
        t.dependencies = c === null ? null : {
          lanes: c.lanes,
          firstContext: c.firstContext
        }, t.selfBaseDuration = l.selfBaseDuration, t.treeBaseDuration = l.treeBaseDuration;
      }
      return t;
    }
    function JE(t, n, l) {
      var c;
      return t === au ? (c = Rt, n === !0 && (c |= Ht, c |= Ir)) : c = et, Wr && (c |= _t), Wa(ee, null, null, c);
    }
    function gg(t, n, l, c, h, y) {
      var C = le, b = t;
      if (typeof t == "function")
        mg(t) ? (C = X, b = fg(b)) : b = Zu(b);
      else if (typeof t == "string")
        C = K;
      else {
        e:
          switch (t) {
            case Gt:
              return Us(l.children, h, y, n);
            case fn:
              C = ke, h |= Ht, (h & Rt) !== et && (h |= Ir);
              break;
            case Cn:
              return ZE(l, h, y, n);
            case Ee:
              return $E(l, h, y, n);
            case Me:
              return e3(l, h, y, n);
            case Oa:
              return O1(l, h, y, n);
            case pa:
            case Wt:
            case Cr:
            case Gi:
            case _n:
            default: {
              if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                  case ar:
                    C = Ie;
                    break e;
                  case ir:
                    C = lt;
                    break e;
                  case Qn:
                    C = Le, b = dg(b);
                    break e;
                  case dt:
                    C = de;
                    break e;
                  case Ke:
                    C = Xe, b = null;
                    break e;
                }
              var D = "";
              {
                (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var O = c ? Ye(c) : null;
                O && (D += `

Check the render method of \`` + O + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + D));
            }
          }
      }
      var P = Wa(C, l, n, h);
      return P.elementType = t, P.type = b, P.lanes = y, P._debugOwner = c, P;
    }
    function yg(t, n, l) {
      var c = null;
      c = t._owner;
      var h = t.type, y = t.key, C = t.props, b = gg(h, y, C, c, n, l);
      return b._debugSource = t._source, b._debugOwner = t._owner, b;
    }
    function Us(t, n, l, c) {
      var h = Wa(pe, t, c, n);
      return h.lanes = l, h;
    }
    function ZE(t, n, l, c) {
      typeof t.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof t.id);
      var h = Wa(oe, t, c, n | _t);
      return h.elementType = Cn, h.lanes = l, h.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, h;
    }
    function $E(t, n, l, c) {
      var h = Wa(fe, t, c, n);
      return h.elementType = Ee, h.lanes = l, h;
    }
    function e3(t, n, l, c) {
      var h = Wa(nt, t, c, n);
      return h.elementType = Me, h.lanes = l, h;
    }
    function O1(t, n, l, c) {
      var h = Wa(Ue, t, c, n);
      h.elementType = Oa, h.lanes = l;
      var y = {
        isHidden: !1
      };
      return h.stateNode = y, h;
    }
    function Sg(t, n, l) {
      var c = Wa(xe, t, null, n);
      return c.lanes = l, c;
    }
    function t3() {
      var t = Wa(K, null, null, et);
      return t.elementType = "DELETED", t;
    }
    function n3(t) {
      var n = Wa(Re, null, null, et);
      return n.stateNode = t, n;
    }
    function _g(t, n, l) {
      var c = t.children !== null ? t.children : [], h = Wa(Q, c, t.key, n);
      return h.lanes = l, h.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, h;
    }
    function L1(t, n) {
      return t === null && (t = Wa(le, null, null, et)), t.tag = n.tag, t.key = n.key, t.elementType = n.elementType, t.type = n.type, t.stateNode = n.stateNode, t.return = n.return, t.child = n.child, t.sibling = n.sibling, t.index = n.index, t.ref = n.ref, t.pendingProps = n.pendingProps, t.memoizedProps = n.memoizedProps, t.updateQueue = n.updateQueue, t.memoizedState = n.memoizedState, t.dependencies = n.dependencies, t.mode = n.mode, t.flags = n.flags, t.subtreeFlags = n.subtreeFlags, t.deletions = n.deletions, t.lanes = n.lanes, t.childLanes = n.childLanes, t.alternate = n.alternate, t.actualDuration = n.actualDuration, t.actualStartTime = n.actualStartTime, t.selfBaseDuration = n.selfBaseDuration, t.treeBaseDuration = n.treeBaseDuration, t._debugSource = n._debugSource, t._debugOwner = n._debugOwner, t._debugNeedsRemount = n._debugNeedsRemount, t._debugHookTypes = n._debugHookTypes, t;
    }
    function r3(t, n, l, c, h) {
      this.tag = n, this.containerInfo = t, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = gc, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = In, this.eventTimes = _s(ue), this.expirationTimes = _s(sn), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = _s(ue), this.identifierPrefix = c, this.onRecoverableError = h, wr && (this.mutableSourceEagerHydrationData = null), this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var y = this.pendingUpdatersLaneMap = [], C = 0; C < lu; C++)
          y.push(/* @__PURE__ */ new Set());
      }
      switch (n) {
        case au:
          this._debugRootType = l ? "hydrateRoot()" : "createRoot()";
          break;
        case Dn:
          this._debugRootType = l ? "hydrate()" : "render()";
          break;
      }
    }
    function A1(t, n, l, c, h, y, C, b, D, O) {
      var P = new r3(t, n, l, b, D), Y = JE(n, y);
      P.current = Y, Y.stateNode = P;
      {
        var $ = {
          element: c,
          isDehydrated: l,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        Y.memoizedState = $;
      }
      return Tp(Y), P;
    }
    var a3 = "18.2.0";
    function i3(t, n, l) {
      var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return I_(c), {
        $$typeof: Ce,
        key: c == null ? null : "" + c,
        children: t,
        containerInfo: n,
        implementation: l
      };
    }
    var xg, Cg;
    xg = !1, Cg = {};
    function P1(t) {
      if (!t)
        return Br;
      var n = w(t), l = up(n);
      if (n.tag === X) {
        var c = n.type;
        if (Nr(c))
          return $s(n, c, l);
      }
      return l;
    }
    function l3(t) {
      var n = w(t);
      if (n === void 0) {
        if (typeof t.render == "function")
          throw new Error("Unable to find node on an unmounted component.");
        var l = Object.keys(t).join(",");
        throw new Error("Argument appears to not be a ReactComponent. Keys: " + l);
      }
      var c = Ws(n);
      return c === null ? null : c.stateNode;
    }
    function s3(t, n) {
      {
        var l = w(t);
        if (l === void 0) {
          if (typeof t.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var c = Object.keys(t).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + c);
        }
        var h = Ws(l);
        if (h === null)
          return null;
        if (h.mode & Ht) {
          var y = Ye(l) || "Component";
          if (!Cg[y]) {
            Cg[y] = !0;
            var C = Qe;
            try {
              It(h), l.mode & Ht ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, y) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", n, n, y);
            } finally {
              C ? It(C) : Kt();
            }
          }
        }
        return h.stateNode;
      }
    }
    function o3(t, n, l, c, h, y, C, b) {
      var D = !1, O = null;
      return A1(t, n, D, O, l, c, h, y, C);
    }
    function u3(t, n, l, c, h, y, C, b, D, O) {
      var P = !0, Y = A1(l, c, P, t, h, y, C, b, D);
      Y.context = P1(null);
      var $ = Y.current, ie = Kr(), ce = ks($), se = Il(ie, ce);
      return se.callback = n ?? null, Ds($, se, ce), oE(Y, ce, ie), Y;
    }
    function k1(t, n, l, c) {
      Ru(n, t);
      var h = n.current, y = Kr(), C = ks(h);
      Nu(C);
      var b = P1(l);
      n.context === null ? n.context = b : n.pendingContext = b, Oe && Qe !== null && !xg && (xg = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(Qe) || "Unknown"));
      var D = Il(y, C);
      D.payload = {
        element: t
      }, c = c === void 0 ? null : c, c !== null && (typeof c != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", c), D.callback = c);
      var O = Ds(h, D, C);
      return O !== null && (nr(O, h, C, y), ch(O, h, C)), C;
    }
    function c3(t) {
      var n = t.current;
      if (!n.child)
        return null;
      switch (n.child.tag) {
        case K:
          return Qt(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }
    function f3(t) {
      switch (t.tag) {
        case ee: {
          var n = t.stateNode;
          if (oa(n)) {
            var l = Pd(n);
            dE(n, l);
          }
          break;
        }
        case fe: {
          sv(function() {
            var h = ca(t, it);
            if (h !== null) {
              var y = Kr();
              nr(h, t, it, y);
            }
          });
          var c = it;
          hv(t, c);
          break;
        }
      }
    }
    function z1(t, n) {
      var l = t.memoizedState;
      l !== null && l.dehydrated !== null && (l.retryLane = xu(l.retryLane, n));
    }
    function hv(t, n) {
      z1(t, n);
      var l = t.alternate;
      l && z1(l, n);
    }
    function d3(t) {
      if (t.tag === fe) {
        var n = it, l = ca(t, n);
        if (l !== null) {
          var c = Kr();
          nr(l, t, n, c);
        }
        hv(t, n);
      }
    }
    function h3(t) {
      if (t.tag === fe) {
        var n = Ml, l = ca(t, n);
        if (l !== null) {
          var c = Kr();
          nr(l, t, n, c);
        }
        hv(t, n);
      }
    }
    function v3(t) {
      if (t.tag === fe) {
        var n = ks(t), l = ca(t, n);
        if (l !== null) {
          var c = Kr();
          nr(l, t, n, c);
        }
        hv(t, n);
      }
    }
    function p3(t) {
      var n = vc(t);
      return n === null ? null : n.stateNode;
    }
    var U1 = function(t) {
      return null;
    };
    function F1(t) {
      return U1(t);
    }
    var H1 = function(t) {
      return !1;
    };
    function G1(t) {
      return H1(t);
    }
    var j1 = null, B1 = null, I1 = null, V1 = null, Y1 = null, q1 = null, W1 = null, X1 = null, Q1 = null;
    {
      var K1 = function(t, n, l) {
        var c = n[l], h = Tt(t) ? t.slice() : T({}, t);
        return l + 1 === n.length ? (Tt(h) ? h.splice(c, 1) : delete h[c], h) : (h[c] = K1(t[c], n, l + 1), h);
      }, J1 = function(t, n) {
        return K1(t, n, 0);
      }, Z1 = function(t, n, l, c) {
        var h = n[c], y = Tt(t) ? t.slice() : T({}, t);
        if (c + 1 === n.length) {
          var C = l[c];
          y[C] = y[h], Tt(y) ? y.splice(h, 1) : delete y[h];
        } else
          y[h] = Z1(
            t[h],
            n,
            l,
            c + 1
          );
        return y;
      }, $1 = function(t, n, l) {
        if (n.length !== l.length) {
          _("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var c = 0; c < l.length - 1; c++)
            if (n[c] !== l[c]) {
              _("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Z1(t, n, l, 0);
      }, e2 = function(t, n, l, c) {
        if (l >= n.length)
          return c;
        var h = n[l], y = Tt(t) ? t.slice() : T({}, t);
        return y[h] = e2(t[h], n, l + 1, c), y;
      }, t2 = function(t, n, l) {
        return e2(t, n, 0, l);
      }, Eg = function(t, n) {
        for (var l = t.memoizedState; l !== null && n > 0; )
          l = l.next, n--;
        return l;
      };
      j1 = function(t, n, l, c) {
        var h = Eg(t, n);
        if (h !== null) {
          var y = t2(h.memoizedState, l, c);
          h.memoizedState = y, h.baseState = y, t.memoizedProps = T({}, t.memoizedProps);
          var C = ca(t, it);
          C !== null && nr(C, t, it, sn);
        }
      }, B1 = function(t, n, l) {
        var c = Eg(t, n);
        if (c !== null) {
          var h = J1(c.memoizedState, l);
          c.memoizedState = h, c.baseState = h, t.memoizedProps = T({}, t.memoizedProps);
          var y = ca(t, it);
          y !== null && nr(y, t, it, sn);
        }
      }, I1 = function(t, n, l, c) {
        var h = Eg(t, n);
        if (h !== null) {
          var y = $1(h.memoizedState, l, c);
          h.memoizedState = y, h.baseState = y, t.memoizedProps = T({}, t.memoizedProps);
          var C = ca(t, it);
          C !== null && nr(C, t, it, sn);
        }
      }, V1 = function(t, n, l) {
        t.pendingProps = t2(t.memoizedProps, n, l), t.alternate && (t.alternate.pendingProps = t.pendingProps);
        var c = ca(t, it);
        c !== null && nr(c, t, it, sn);
      }, Y1 = function(t, n) {
        t.pendingProps = J1(t.memoizedProps, n), t.alternate && (t.alternate.pendingProps = t.pendingProps);
        var l = ca(t, it);
        l !== null && nr(l, t, it, sn);
      }, q1 = function(t, n, l) {
        t.pendingProps = $1(t.memoizedProps, n, l), t.alternate && (t.alternate.pendingProps = t.pendingProps);
        var c = ca(t, it);
        c !== null && nr(c, t, it, sn);
      }, W1 = function(t) {
        var n = ca(t, it);
        n !== null && nr(n, t, it, sn);
      }, X1 = function(t) {
        U1 = t;
      }, Q1 = function(t) {
        H1 = t;
      };
    }
    function m3(t) {
      var n = Ws(t);
      return n === null ? null : n.stateNode;
    }
    function g3(t) {
      return null;
    }
    function y3() {
      return Qe;
    }
    function S3(t) {
      var n = t.findFiberByHostInstance, l = d.ReactCurrentDispatcher;
      return Tu({
        bundleType: t.bundleType,
        version: t.version,
        rendererPackageName: t.rendererPackageName,
        rendererConfig: t.rendererConfig,
        overrideHookState: j1,
        overrideHookStateDeletePath: B1,
        overrideHookStateRenamePath: I1,
        overrideProps: V1,
        overridePropsDeletePath: Y1,
        overridePropsRenamePath: q1,
        setErrorHandler: X1,
        setSuspenseHandler: Q1,
        scheduleUpdate: W1,
        currentDispatcherRef: l,
        findHostInstanceByFiber: m3,
        findFiberByHostInstance: n || g3,
        findHostInstancesForRefresh: VE,
        scheduleRefresh: BE,
        scheduleRoot: IE,
        setRefreshHandler: jE,
        getCurrentFiber: y3,
        reconcilerVersion: a3
      });
    }
    return a.attemptContinuousHydration = h3, a.attemptDiscreteHydration = d3, a.attemptHydrationAtCurrentPriority = v3, a.attemptSynchronousHydration = f3, a.batchedUpdates = vE, a.createComponentSelector = VC, a.createContainer = o3, a.createHasPseudoClassSelector = YC, a.createHydrationContainer = u3, a.createPortal = i3, a.createRoleSelector = qC, a.createTestNameSelector = XC, a.createTextSelector = WC, a.deferredUpdates = hE, a.discreteUpdates = pE, a.findAllNodes = Jh, a.findBoundingRects = JC, a.findHostInstance = l3, a.findHostInstanceWithNoPortals = p3, a.findHostInstanceWithWarning = s3, a.flushControlled = gE, a.flushPassiveEffects = dl, a.flushSync = sv, a.focusWithin = ZC, a.getCurrentUpdatePriority = Yr, a.getFindAllNodesFailureDescription = KC, a.getPublicRootInstance = c3, a.injectIntoDevTools = S3, a.isAlreadyRendering = mE, a.observeVisibleRects = eE, a.registerMutableSourceForHydration = ox, a.runWithPriority = Hd, a.shouldError = F1, a.shouldSuspend = G1, a.updateContainer = k1, a;
  })), kv;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = ab() : o.exports = lb();
})(eb);
const sb = /* @__PURE__ */ E3(Wg);
var zv = {}, ob = {
  get exports() {
    return zv;
  },
  set exports(o) {
    zv = o;
  }
}, Fs = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P2;
function ub() {
  return P2 || (P2 = 1, Fs.ConcurrentRoot = 1, Fs.ContinuousEventPriority = 4, Fs.DefaultEventPriority = 16, Fs.DiscreteEventPriority = 1, Fs.IdleEventPriority = 536870912, Fs.LegacyRoot = 0), Fs;
}
var Hs = {};
/**
 * @license React
 * react-reconciler-constants.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k2;
function cb() {
  return k2 || (k2 = 1, process.env.NODE_ENV !== "production" && function() {
    var o = 1, e = 4, a = 16, s = 536870912, u = o, d = e, v = a, g = s, _ = 0, m = 1;
    Hs.ConcurrentRoot = m, Hs.ContinuousEventPriority = d, Hs.DefaultEventPriority = v, Hs.DiscreteEventPriority = u, Hs.IdleEventPriority = g, Hs.LegacyRoot = _;
  }()), Hs;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = ub() : o.exports = cb();
})(ob);
const z2 = {
  children: !0,
  ref: !0,
  key: !0,
  style: !0,
  forwardedRef: !0,
  unstable_applyCache: !0,
  unstable_applyDrawHitFromCache: !0
};
let U2 = !1, F2 = !1;
const s0 = ".react-konva-event", fb = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`, db = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`, hb = {};
function Vv(o, e, a = hb) {
  if (!U2 && "zIndex" in e && (console.warn(db), U2 = !0), !F2 && e.draggable) {
    var s = e.x !== void 0 || e.y !== void 0, u = e.onDragEnd || e.onDragMove;
    s && !u && (console.warn(fb), F2 = !0);
  }
  for (var d in a)
    if (!z2[d]) {
      var v = d.slice(0, 2) === "on", g = a[d] !== e[d];
      if (v && g) {
        var _ = d.substr(2).toLowerCase();
        _.substr(0, 7) === "content" && (_ = "content" + _.substr(7, 1).toUpperCase() + _.substr(8)), o.off(_, a[d]);
      }
      var m = !e.hasOwnProperty(d);
      m && o.setAttr(d, void 0);
    }
  var E = e._useStrictMode, T = {}, w = !1;
  const M = {};
  for (var d in e)
    if (!z2[d]) {
      var v = d.slice(0, 2) === "on", R = a[d] !== e[d];
      if (v && R) {
        var _ = d.substr(2).toLowerCase();
        _.substr(0, 7) === "content" && (_ = "content" + _.substr(7, 1).toUpperCase() + _.substr(8)), e[d] && (M[_] = e[d]);
      }
      !v && (e[d] !== a[d] || E && e[d] !== o.getAttr(d)) && (w = !0, T[d] = e[d]);
    }
  w && (o.setAttrs(T), Ys(o));
  for (var _ in M)
    o.on(_ + s0, M[_]);
}
function Ys(o) {
  if (!Be.autoDrawEnabled) {
    var e = o.getLayer() || o.getStage();
    e && e.batchDraw();
  }
}
var zg = l0();
const m_ = {}, vb = {};
Mo.Node.prototype._applyProps = Vv;
function pb(o, e) {
  if (typeof e == "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${e}`);
    return;
  }
  o.add(e), Ys(o);
}
function mb(o, e, a) {
  let s = Mo[o];
  s || (console.error(`Konva has no node with the type ${o}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${o}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`), s = Mo.Group);
  const u = {}, d = {};
  for (var v in e) {
    var g = v.slice(0, 2) === "on";
    g ? d[v] = e[v] : u[v] = e[v];
  }
  const _ = new s(u);
  return Vv(_, d), _;
}
function gb(o, e, a) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${o}"`);
}
function yb(o, e, a) {
  return !1;
}
function Sb(o) {
  return o;
}
function _b() {
  return null;
}
function xb() {
  return null;
}
function Cb(o, e, a, s) {
  return vb;
}
function Eb() {
}
function bb(o) {
}
function Tb(o, e) {
  return !1;
}
function Rb() {
  return m_;
}
function wb() {
  return m_;
}
const Db = setTimeout, Nb = clearTimeout, Mb = -1;
function Ob(o, e) {
  return !1;
}
const Lb = !1, Ab = !0, Pb = !0;
function kb(o, e) {
  e.parent === o ? e.moveToTop() : o.add(e), Ys(o);
}
function zb(o, e) {
  e.parent === o ? e.moveToTop() : o.add(e), Ys(o);
}
function g_(o, e, a) {
  e._remove(), o.add(e), e.setZIndex(a.getZIndex()), Ys(o);
}
function Ub(o, e, a) {
  g_(o, e, a);
}
function Fb(o, e) {
  e.destroy(), e.off(s0), Ys(o);
}
function Hb(o, e) {
  e.destroy(), e.off(s0), Ys(o);
}
function Gb(o, e, a) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${a}"`);
}
function jb(o, e, a) {
}
function Bb(o, e, a, s, u) {
  Vv(o, u, s);
}
function Ib(o) {
  o.hide(), Ys(o);
}
function Vb(o) {
}
function Yb(o, e) {
  (e.visible == null || e.visible) && o.show();
}
function qb(o, e) {
}
function Wb(o) {
}
function Xb() {
}
const Qb = () => zv.DefaultEventPriority, Kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild: kb,
  appendChildToContainer: zb,
  appendInitialChild: pb,
  cancelTimeout: Nb,
  clearContainer: Wb,
  commitMount: jb,
  commitTextUpdate: Gb,
  commitUpdate: Bb,
  createInstance: mb,
  createTextInstance: gb,
  detachDeletedInstance: Xb,
  finalizeInitialChildren: yb,
  getChildHostContext: wb,
  getCurrentEventPriority: Qb,
  getPublicInstance: Sb,
  getRootHostContext: Rb,
  hideInstance: Ib,
  hideTextInstance: Vb,
  idlePriority: zg.unstable_IdlePriority,
  insertBefore: g_,
  insertInContainerBefore: Ub,
  isPrimaryRenderer: Lb,
  noTimeout: Mb,
  now: zg.unstable_now,
  prepareForCommit: _b,
  preparePortalMount: xb,
  prepareUpdate: Cb,
  removeChild: Fb,
  removeChildFromContainer: Hb,
  resetAfterCommit: Eb,
  resetTextContent: bb,
  run: zg.unstable_runWithPriority,
  scheduleTimeout: Db,
  shouldDeprioritizeSubtree: Tb,
  shouldSetTextContent: Ob,
  supportsMutation: Pb,
  unhideInstance: Yb,
  unhideTextInstance: qb,
  warnsIfNotActing: Ab
}, Symbol.toStringTag, { value: "Module" }));
var Jb = Object.defineProperty, Zb = Object.defineProperties, $b = Object.getOwnPropertyDescriptors, H2 = Object.getOwnPropertySymbols, eT = Object.prototype.hasOwnProperty, tT = Object.prototype.propertyIsEnumerable, G2 = (o, e, a) => e in o ? Jb(o, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[e] = a, j2 = (o, e) => {
  for (var a in e || (e = {}))
    eT.call(e, a) && G2(o, a, e[a]);
  if (H2)
    for (var a of H2(e))
      tT.call(e, a) && G2(o, a, e[a]);
  return o;
}, nT = (o, e) => Zb(o, $b(e));
function y_(o, e, a) {
  if (!o)
    return;
  if (a(o) === !0)
    return o;
  let s = e ? o.return : o.child;
  for (; s; ) {
    const u = y_(s, e, a);
    if (u)
      return u;
    s = e ? null : s.sibling;
  }
}
function S_(o) {
  try {
    return Object.defineProperties(o, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch {
    return o;
  }
}
const o0 = S_(qt.createContext(null));
class __ extends qt.Component {
  render() {
    return /* @__PURE__ */ qt.createElement(o0.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
const { ReactCurrentOwner: rT, ReactCurrentDispatcher: aT } = qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function iT() {
  const o = qt.useContext(o0);
  if (!o)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const e = qt.useId();
  return qt.useMemo(
    () => {
      var s;
      return (s = rT.current) != null ? s : y_(o, !1, (u) => {
        let d = u.memoizedState;
        for (; d; ) {
          if (d.memoizedState === e)
            return !0;
          d = d.next;
        }
      });
    },
    [o, e]
  );
}
function lT() {
  var o, e;
  const a = iT(), [s] = qt.useState(() => /* @__PURE__ */ new Map());
  s.clear();
  let u = a;
  for (; u; ) {
    const d = (o = u.type) == null ? void 0 : o._context;
    d && d !== o0 && !s.has(d) && s.set(d, (e = aT.current) == null ? void 0 : e.readContext(S_(d))), u = u.return;
  }
  return qt.useMemo(
    () => Array.from(s.keys()).reduce(
      (d, v) => (g) => /* @__PURE__ */ qt.createElement(d, null, /* @__PURE__ */ qt.createElement(v.Provider, nT(j2({}, g), {
        value: s.get(v)
      }))),
      (d) => /* @__PURE__ */ qt.createElement(__, j2({}, d))
    ),
    [s]
  );
}
function sT(o) {
  const e = Yt.useRef();
  return Yt.useLayoutEffect(() => {
    e.current = o;
  }), e.current;
}
const oT = (o) => {
  const e = Yt.useRef(), a = Yt.useRef(), s = Yt.useRef(), u = sT(o), d = lT(), v = (g) => {
    const { forwardedRef: _ } = o;
    _ && (typeof _ == "function" ? _(g) : _.current = g);
  };
  return Yt.useLayoutEffect(() => (a.current = new Mo.Stage({
    width: o.width,
    height: o.height,
    container: e.current
  }), v(a.current), s.current = Zf.createContainer(a.current, zv.LegacyRoot, !1, null), Zf.updateContainer(Yt.createElement(d, {}, o.children), s.current), () => {
    Mo.isBrowser && (v(null), Zf.updateContainer(null, s.current, null), a.current.destroy());
  }), []), Yt.useLayoutEffect(() => {
    v(a.current), Vv(a.current, o, u), Zf.updateContainer(Yt.createElement(d, {}, o.children), s.current, null);
  }), Yt.createElement("div", {
    ref: e,
    accessKey: o.accessKey,
    className: o.className,
    role: o.role,
    style: o.style,
    tabIndex: o.tabIndex,
    title: o.title
  });
}, x_ = "Layer", Oo = "Group", C_ = "Rect", E_ = "Line", b_ = "Image", T_ = "Text", R_ = "Transformer", Zf = sb(Kb);
Zf.injectIntoDevTools({
  findHostInstanceByFiber: () => null,
  bundleType: process.env.NODE_ENV !== "production" ? 1 : 0,
  version: Yt.version,
  rendererPackageName: "react-konva"
});
const w_ = Yt.forwardRef((o, e) => Yt.createElement(__, {}, Yt.createElement(oT, { ...o, forwardedRef: e })));
function Xg() {
  return Xg = Object.assign ? Object.assign.bind() : function(o) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
    }
    return o;
  }, Xg.apply(this, arguments);
}
function D_(o) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(a) {
    return e[a] === void 0 && (e[a] = o(a)), e[a];
  };
}
var uT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cT = /* @__PURE__ */ D_(
  function(o) {
    return uT.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91;
  }
);
function fT(o) {
  if (o.sheet)
    return o.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === o)
      return document.styleSheets[e];
}
function dT(o) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", o.key), o.nonce !== void 0 && e.setAttribute("nonce", o.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var hT = /* @__PURE__ */ function() {
  function o(a) {
    var s = this;
    this._insertTag = function(u) {
      var d;
      s.tags.length === 0 ? s.insertionPoint ? d = s.insertionPoint.nextSibling : s.prepend ? d = s.container.firstChild : d = s.before : d = s.tags[s.tags.length - 1].nextSibling, s.container.insertBefore(u, d), s.tags.push(u);
    }, this.isSpeedy = a.speedy === void 0 ? process.env.NODE_ENV === "production" : a.speedy, this.tags = [], this.ctr = 0, this.nonce = a.nonce, this.key = a.key, this.container = a.container, this.prepend = a.prepend, this.insertionPoint = a.insertionPoint, this.before = null;
  }
  var e = o.prototype;
  return e.hydrate = function(s) {
    s.forEach(this._insertTag);
  }, e.insert = function(s) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(dT(this));
    var u = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var d = s.charCodeAt(0) === 64 && s.charCodeAt(1) === 105;
      d && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + s + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !d;
    }
    if (this.isSpeedy) {
      var v = fT(u);
      try {
        v.insertRule(s, v.cssRules.length);
      } catch (g) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(s) && console.error('There was a problem inserting the following rule: "' + s + '"', g);
      }
    } else
      u.appendChild(document.createTextNode(s));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(s) {
      return s.parentNode && s.parentNode.removeChild(s);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, o;
}(), $r = "-ms-", Uv = "-moz-", Vt = "-webkit-", u0 = "comm", c0 = "rule", f0 = "decl", vT = "@import", N_ = "@keyframes", pT = Math.abs, Yv = String.fromCharCode, mT = Object.assign;
function gT(o, e) {
  return Gr(o, 0) ^ 45 ? (((e << 2 ^ Gr(o, 0)) << 2 ^ Gr(o, 1)) << 2 ^ Gr(o, 2)) << 2 ^ Gr(o, 3) : 0;
}
function M_(o) {
  return o.trim();
}
function yT(o, e) {
  return (o = e.exec(o)) ? o[0] : o;
}
function tn(o, e, a) {
  return o.replace(e, a);
}
function Qg(o, e) {
  return o.indexOf(e);
}
function Gr(o, e) {
  return o.charCodeAt(e) | 0;
}
function od(o, e, a) {
  return o.slice(e, a);
}
function vl(o) {
  return o.length;
}
function d0(o) {
  return o.length;
}
function Tv(o, e) {
  return e.push(o), o;
}
function ST(o, e) {
  return o.map(e).join("");
}
var qv = 1, sc = 1, O_ = 0, Ma = 0, rr = 0, dc = "";
function Wv(o, e, a, s, u, d, v) {
  return { value: o, root: e, parent: a, type: s, props: u, children: d, line: qv, column: sc, length: v, return: "" };
}
function qf(o, e) {
  return mT(Wv("", null, null, "", null, null, 0), o, { length: -o.length }, e);
}
function _T() {
  return rr;
}
function xT() {
  return rr = Ma > 0 ? Gr(dc, --Ma) : 0, sc--, rr === 10 && (sc = 1, qv--), rr;
}
function Ja() {
  return rr = Ma < O_ ? Gr(dc, Ma++) : 0, sc++, rr === 10 && (sc = 1, qv++), rr;
}
function pl() {
  return Gr(dc, Ma);
}
function Mv() {
  return Ma;
}
function dd(o, e) {
  return od(dc, o, e);
}
function ud(o) {
  switch (o) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function L_(o) {
  return qv = sc = 1, O_ = vl(dc = o), Ma = 0, [];
}
function A_(o) {
  return dc = "", o;
}
function Ov(o) {
  return M_(dd(Ma - 1, Kg(o === 91 ? o + 2 : o === 40 ? o + 1 : o)));
}
function CT(o) {
  for (; (rr = pl()) && rr < 33; )
    Ja();
  return ud(o) > 2 || ud(rr) > 3 ? "" : " ";
}
function ET(o, e) {
  for (; --e && Ja() && !(rr < 48 || rr > 102 || rr > 57 && rr < 65 || rr > 70 && rr < 97); )
    ;
  return dd(o, Mv() + (e < 6 && pl() == 32 && Ja() == 32));
}
function Kg(o) {
  for (; Ja(); )
    switch (rr) {
      case o:
        return Ma;
      case 34:
      case 39:
        o !== 34 && o !== 39 && Kg(rr);
        break;
      case 40:
        o === 41 && Kg(o);
        break;
      case 92:
        Ja();
        break;
    }
  return Ma;
}
function bT(o, e) {
  for (; Ja() && o + rr !== 47 + 10; )
    if (o + rr === 42 + 42 && pl() === 47)
      break;
  return "/*" + dd(e, Ma - 1) + "*" + Yv(o === 47 ? o : Ja());
}
function TT(o) {
  for (; !ud(pl()); )
    Ja();
  return dd(o, Ma);
}
function RT(o) {
  return A_(Lv("", null, null, null, [""], o = L_(o), 0, [0], o));
}
function Lv(o, e, a, s, u, d, v, g, _) {
  for (var m = 0, E = 0, T = v, w = 0, M = 0, R = 0, z = 1, k = 1, I = 1, j = 0, G = "", Z = u, U = d, V = s, X = G; k; )
    switch (R = j, j = Ja()) {
      case 40:
        if (R != 108 && Gr(X, T - 1) == 58) {
          Qg(X += tn(Ov(j), "&", "&\f"), "&\f") != -1 && (I = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        X += Ov(j);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        X += CT(R);
        break;
      case 92:
        X += ET(Mv() - 1, 7);
        continue;
      case 47:
        switch (pl()) {
          case 42:
          case 47:
            Tv(wT(bT(Ja(), Mv()), e, a), _);
            break;
          default:
            X += "/";
        }
        break;
      case 123 * z:
        g[m++] = vl(X) * I;
      case 125 * z:
      case 59:
      case 0:
        switch (j) {
          case 0:
          case 125:
            k = 0;
          case 59 + E:
            M > 0 && vl(X) - T && Tv(M > 32 ? I2(X + ";", s, a, T - 1) : I2(tn(X, " ", "") + ";", s, a, T - 2), _);
            break;
          case 59:
            X += ";";
          default:
            if (Tv(V = B2(X, e, a, m, E, u, g, G, Z = [], U = [], T), d), j === 123)
              if (E === 0)
                Lv(X, e, V, V, Z, d, T, g, U);
              else
                switch (w === 99 && Gr(X, 3) === 110 ? 100 : w) {
                  case 100:
                  case 109:
                  case 115:
                    Lv(o, V, V, s && Tv(B2(o, V, V, 0, 0, u, g, G, u, Z = [], T), U), u, U, T, g, s ? Z : U);
                    break;
                  default:
                    Lv(X, V, V, V, [""], U, 0, g, U);
                }
        }
        m = E = M = 0, z = I = 1, G = X = "", T = v;
        break;
      case 58:
        T = 1 + vl(X), M = R;
      default:
        if (z < 1) {
          if (j == 123)
            --z;
          else if (j == 125 && z++ == 0 && xT() == 125)
            continue;
        }
        switch (X += Yv(j), j * z) {
          case 38:
            I = E > 0 ? 1 : (X += "\f", -1);
            break;
          case 44:
            g[m++] = (vl(X) - 1) * I, I = 1;
            break;
          case 64:
            pl() === 45 && (X += Ov(Ja())), w = pl(), E = T = vl(G = X += TT(Mv())), j++;
            break;
          case 45:
            R === 45 && vl(X) == 2 && (z = 0);
        }
    }
  return d;
}
function B2(o, e, a, s, u, d, v, g, _, m, E) {
  for (var T = u - 1, w = u === 0 ? d : [""], M = d0(w), R = 0, z = 0, k = 0; R < s; ++R)
    for (var I = 0, j = od(o, T + 1, T = pT(z = v[R])), G = o; I < M; ++I)
      (G = M_(z > 0 ? w[I] + " " + j : tn(j, /&\f/g, w[I]))) && (_[k++] = G);
  return Wv(o, e, a, u === 0 ? c0 : g, _, m, E);
}
function wT(o, e, a) {
  return Wv(o, e, a, u0, Yv(_T()), od(o, 2, -2), 0);
}
function I2(o, e, a, s) {
  return Wv(o, e, a, f0, od(o, 0, s), od(o, s + 1, -1), s);
}
function ic(o, e) {
  for (var a = "", s = d0(o), u = 0; u < s; u++)
    a += e(o[u], u, o, e) || "";
  return a;
}
function DT(o, e, a, s) {
  switch (o.type) {
    case vT:
    case f0:
      return o.return = o.return || o.value;
    case u0:
      return "";
    case N_:
      return o.return = o.value + "{" + ic(o.children, s) + "}";
    case c0:
      o.value = o.props.join(",");
  }
  return vl(a = ic(o.children, s)) ? o.return = o.value + "{" + a + "}" : "";
}
function NT(o) {
  var e = d0(o);
  return function(a, s, u, d) {
    for (var v = "", g = 0; g < e; g++)
      v += o[g](a, s, u, d) || "";
    return v;
  };
}
function MT(o) {
  return function(e) {
    e.root || (e = e.return) && o(e);
  };
}
var OT = function(e, a, s) {
  for (var u = 0, d = 0; u = d, d = pl(), u === 38 && d === 12 && (a[s] = 1), !ud(d); )
    Ja();
  return dd(e, Ma);
}, LT = function(e, a) {
  var s = -1, u = 44;
  do
    switch (ud(u)) {
      case 0:
        u === 38 && pl() === 12 && (a[s] = 1), e[s] += OT(Ma - 1, a, s);
        break;
      case 2:
        e[s] += Ov(u);
        break;
      case 4:
        if (u === 44) {
          e[++s] = pl() === 58 ? "&\f" : "", a[s] = e[s].length;
          break;
        }
      default:
        e[s] += Yv(u);
    }
  while (u = Ja());
  return e;
}, AT = function(e, a) {
  return A_(LT(L_(e), a));
}, V2 = /* @__PURE__ */ new WeakMap(), PT = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var a = e.value, s = e.parent, u = e.column === s.column && e.line === s.line; s.type !== "rule"; )
      if (s = s.parent, !s)
        return;
    if (!(e.props.length === 1 && a.charCodeAt(0) !== 58 && !V2.get(s)) && !u) {
      V2.set(e, !0);
      for (var d = [], v = AT(a, d), g = s.props, _ = 0, m = 0; _ < v.length; _++)
        for (var E = 0; E < g.length; E++, m++)
          e.props[m] = d[_] ? v[_].replace(/&\f/g, g[E]) : g[E] + " " + v[_];
    }
  }
}, kT = function(e) {
  if (e.type === "decl") {
    var a = e.value;
    a.charCodeAt(0) === 108 && a.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, zT = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", UT = function(e) {
  return e.type === "comm" && e.children.indexOf(zT) > -1;
}, FT = function(e) {
  return function(a, s, u) {
    if (!(a.type !== "rule" || e.compat)) {
      var d = a.value.match(/(:first|:nth|:nth-last)-child/g);
      if (d) {
        for (var v = a.parent === u[0], g = v ? u[0].children : u, _ = g.length - 1; _ >= 0; _--) {
          var m = g[_];
          if (m.line < a.line)
            break;
          if (m.column < a.column) {
            if (UT(m))
              return;
            break;
          }
        }
        d.forEach(function(E) {
          console.error('The pseudo class "' + E + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + E.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, P_ = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, HT = function(e, a) {
  for (var s = e - 1; s >= 0; s--)
    if (!P_(a[s]))
      return !0;
  return !1;
}, Y2 = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, GT = function(e, a, s) {
  P_(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Y2(e)) : HT(a, s) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Y2(e)));
};
function k_(o, e) {
  switch (gT(o, e)) {
    case 5103:
      return Vt + "print-" + o + o;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Vt + o + o;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Vt + o + Uv + o + $r + o + o;
    case 6828:
    case 4268:
      return Vt + o + $r + o + o;
    case 6165:
      return Vt + o + $r + "flex-" + o + o;
    case 5187:
      return Vt + o + tn(o, /(\w+).+(:[^]+)/, Vt + "box-$1$2" + $r + "flex-$1$2") + o;
    case 5443:
      return Vt + o + $r + "flex-item-" + tn(o, /flex-|-self/, "") + o;
    case 4675:
      return Vt + o + $r + "flex-line-pack" + tn(o, /align-content|flex-|-self/, "") + o;
    case 5548:
      return Vt + o + $r + tn(o, "shrink", "negative") + o;
    case 5292:
      return Vt + o + $r + tn(o, "basis", "preferred-size") + o;
    case 6060:
      return Vt + "box-" + tn(o, "-grow", "") + Vt + o + $r + tn(o, "grow", "positive") + o;
    case 4554:
      return Vt + tn(o, /([^-])(transform)/g, "$1" + Vt + "$2") + o;
    case 6187:
      return tn(tn(tn(o, /(zoom-|grab)/, Vt + "$1"), /(image-set)/, Vt + "$1"), o, "") + o;
    case 5495:
    case 3959:
      return tn(o, /(image-set\([^]*)/, Vt + "$1$`$1");
    case 4968:
      return tn(tn(o, /(.+:)(flex-)?(.*)/, Vt + "box-pack:$3" + $r + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Vt + o + o;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return tn(o, /(.+)-inline(.+)/, Vt + "$1$2") + o;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (vl(o) - 1 - e > 6)
        switch (Gr(o, e + 1)) {
          case 109:
            if (Gr(o, e + 4) !== 45)
              break;
          case 102:
            return tn(o, /(.+:)(.+)-([^]+)/, "$1" + Vt + "$2-$3$1" + Uv + (Gr(o, e + 3) == 108 ? "$3" : "$2-$3")) + o;
          case 115:
            return ~Qg(o, "stretch") ? k_(tn(o, "stretch", "fill-available"), e) + o : o;
        }
      break;
    case 4949:
      if (Gr(o, e + 1) !== 115)
        break;
    case 6444:
      switch (Gr(o, vl(o) - 3 - (~Qg(o, "!important") && 10))) {
        case 107:
          return tn(o, ":", ":" + Vt) + o;
        case 101:
          return tn(o, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Vt + (Gr(o, 14) === 45 ? "inline-" : "") + "box$3$1" + Vt + "$2$3$1" + $r + "$2box$3") + o;
      }
      break;
    case 5936:
      switch (Gr(o, e + 11)) {
        case 114:
          return Vt + o + $r + tn(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case 108:
          return Vt + o + $r + tn(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 45:
          return Vt + o + $r + tn(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
      return Vt + o + $r + o + o;
  }
  return o;
}
var jT = function(e, a, s, u) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case f0:
        e.return = k_(e.value, e.length);
        break;
      case N_:
        return ic([qf(e, {
          value: tn(e.value, "@", "@" + Vt)
        })], u);
      case c0:
        if (e.length)
          return ST(e.props, function(d) {
            switch (yT(d, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ic([qf(e, {
                  props: [tn(d, /:(read-\w+)/, ":" + Uv + "$1")]
                })], u);
              case "::placeholder":
                return ic([qf(e, {
                  props: [tn(d, /:(plac\w+)/, ":" + Vt + "input-$1")]
                }), qf(e, {
                  props: [tn(d, /:(plac\w+)/, ":" + Uv + "$1")]
                }), qf(e, {
                  props: [tn(d, /:(plac\w+)/, $r + "input-$1")]
                })], u);
            }
            return "";
          });
    }
}, BT = [jT], IT = function(e) {
  var a = e.key;
  if (process.env.NODE_ENV !== "production" && !a)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (a === "css") {
    var s = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s, function(z) {
      var k = z.getAttribute("data-emotion");
      k.indexOf(" ") !== -1 && (document.head.appendChild(z), z.setAttribute("data-s", ""));
    });
  }
  var u = e.stylisPlugins || BT;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(a))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + a + '" was passed');
  var d = {}, v, g = [];
  v = e.container || document.head, Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
    function(z) {
      for (var k = z.getAttribute("data-emotion").split(" "), I = 1; I < k.length; I++)
        d[k[I]] = !0;
      g.push(z);
    }
  );
  var _, m = [PT, kT];
  process.env.NODE_ENV !== "production" && m.push(FT({
    get compat() {
      return R.compat;
    }
  }), GT);
  {
    var E, T = [DT, process.env.NODE_ENV !== "production" ? function(z) {
      z.root || (z.return ? E.insert(z.return) : z.value && z.type !== u0 && E.insert(z.value + "{}"));
    } : MT(function(z) {
      E.insert(z);
    })], w = NT(m.concat(u, T)), M = function(k) {
      return ic(RT(k), w);
    };
    _ = function(k, I, j, G) {
      E = j, process.env.NODE_ENV !== "production" && I.map !== void 0 && (E = {
        insert: function(U) {
          j.insert(U + I.map);
        }
      }), M(k ? k + "{" + I.styles + "}" : I.styles), G && (R.inserted[I.name] = !0);
    };
  }
  var R = {
    key: a,
    sheet: new hT({
      key: a,
      container: v,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: d,
    registered: {},
    insert: _
  };
  return R.sheet.hydrate(g), R;
}, Jg = {}, VT = {
  get exports() {
    return Jg;
  },
  set exports(o) {
    Jg = o;
  }
}, $t = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q2;
function YT() {
  if (q2)
    return $t;
  q2 = 1;
  var o = typeof Symbol == "function" && Symbol.for, e = o ? Symbol.for("react.element") : 60103, a = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, u = o ? Symbol.for("react.strict_mode") : 60108, d = o ? Symbol.for("react.profiler") : 60114, v = o ? Symbol.for("react.provider") : 60109, g = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, m = o ? Symbol.for("react.concurrent_mode") : 60111, E = o ? Symbol.for("react.forward_ref") : 60112, T = o ? Symbol.for("react.suspense") : 60113, w = o ? Symbol.for("react.suspense_list") : 60120, M = o ? Symbol.for("react.memo") : 60115, R = o ? Symbol.for("react.lazy") : 60116, z = o ? Symbol.for("react.block") : 60121, k = o ? Symbol.for("react.fundamental") : 60117, I = o ? Symbol.for("react.responder") : 60118, j = o ? Symbol.for("react.scope") : 60119;
  function G(U) {
    if (typeof U == "object" && U !== null) {
      var V = U.$$typeof;
      switch (V) {
        case e:
          switch (U = U.type, U) {
            case _:
            case m:
            case s:
            case d:
            case u:
            case T:
              return U;
            default:
              switch (U = U && U.$$typeof, U) {
                case g:
                case E:
                case R:
                case M:
                case v:
                  return U;
                default:
                  return V;
              }
          }
        case a:
          return V;
      }
    }
  }
  function Z(U) {
    return G(U) === m;
  }
  return $t.AsyncMode = _, $t.ConcurrentMode = m, $t.ContextConsumer = g, $t.ContextProvider = v, $t.Element = e, $t.ForwardRef = E, $t.Fragment = s, $t.Lazy = R, $t.Memo = M, $t.Portal = a, $t.Profiler = d, $t.StrictMode = u, $t.Suspense = T, $t.isAsyncMode = function(U) {
    return Z(U) || G(U) === _;
  }, $t.isConcurrentMode = Z, $t.isContextConsumer = function(U) {
    return G(U) === g;
  }, $t.isContextProvider = function(U) {
    return G(U) === v;
  }, $t.isElement = function(U) {
    return typeof U == "object" && U !== null && U.$$typeof === e;
  }, $t.isForwardRef = function(U) {
    return G(U) === E;
  }, $t.isFragment = function(U) {
    return G(U) === s;
  }, $t.isLazy = function(U) {
    return G(U) === R;
  }, $t.isMemo = function(U) {
    return G(U) === M;
  }, $t.isPortal = function(U) {
    return G(U) === a;
  }, $t.isProfiler = function(U) {
    return G(U) === d;
  }, $t.isStrictMode = function(U) {
    return G(U) === u;
  }, $t.isSuspense = function(U) {
    return G(U) === T;
  }, $t.isValidElementType = function(U) {
    return typeof U == "string" || typeof U == "function" || U === s || U === m || U === d || U === u || U === T || U === w || typeof U == "object" && U !== null && (U.$$typeof === R || U.$$typeof === M || U.$$typeof === v || U.$$typeof === g || U.$$typeof === E || U.$$typeof === k || U.$$typeof === I || U.$$typeof === j || U.$$typeof === z);
  }, $t.typeOf = G, $t;
}
var en = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W2;
function qT() {
  return W2 || (W2 = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, e = o ? Symbol.for("react.element") : 60103, a = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, u = o ? Symbol.for("react.strict_mode") : 60108, d = o ? Symbol.for("react.profiler") : 60114, v = o ? Symbol.for("react.provider") : 60109, g = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, m = o ? Symbol.for("react.concurrent_mode") : 60111, E = o ? Symbol.for("react.forward_ref") : 60112, T = o ? Symbol.for("react.suspense") : 60113, w = o ? Symbol.for("react.suspense_list") : 60120, M = o ? Symbol.for("react.memo") : 60115, R = o ? Symbol.for("react.lazy") : 60116, z = o ? Symbol.for("react.block") : 60121, k = o ? Symbol.for("react.fundamental") : 60117, I = o ? Symbol.for("react.responder") : 60118, j = o ? Symbol.for("react.scope") : 60119;
    function G(Ce) {
      return typeof Ce == "string" || typeof Ce == "function" || Ce === s || Ce === m || Ce === d || Ce === u || Ce === T || Ce === w || typeof Ce == "object" && Ce !== null && (Ce.$$typeof === R || Ce.$$typeof === M || Ce.$$typeof === v || Ce.$$typeof === g || Ce.$$typeof === E || Ce.$$typeof === k || Ce.$$typeof === I || Ce.$$typeof === j || Ce.$$typeof === z);
    }
    function Z(Ce) {
      if (typeof Ce == "object" && Ce !== null) {
        var Gt = Ce.$$typeof;
        switch (Gt) {
          case e:
            var fn = Ce.type;
            switch (fn) {
              case _:
              case m:
              case s:
              case d:
              case u:
              case T:
                return fn;
              default:
                var Cn = fn && fn.$$typeof;
                switch (Cn) {
                  case g:
                  case E:
                  case R:
                  case M:
                  case v:
                    return Cn;
                  default:
                    return Gt;
                }
            }
          case a:
            return Gt;
        }
      }
    }
    var U = _, V = m, X = g, le = v, ee = e, Q = E, K = s, xe = R, pe = M, ke = a, lt = d, Ie = u, Le = T, oe = !1;
    function fe(Ce) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), de(Ce) || Z(Ce) === _;
    }
    function de(Ce) {
      return Z(Ce) === m;
    }
    function Se(Ce) {
      return Z(Ce) === g;
    }
    function Xe(Ce) {
      return Z(Ce) === v;
    }
    function Ne(Ce) {
      return typeof Ce == "object" && Ce !== null && Ce.$$typeof === e;
    }
    function Re(Ce) {
      return Z(Ce) === E;
    }
    function nt(Ce) {
      return Z(Ce) === s;
    }
    function Ct(Ce) {
      return Z(Ce) === R;
    }
    function Ue(Ce) {
      return Z(Ce) === M;
    }
    function st(Ce) {
      return Z(Ce) === a;
    }
    function rn(Ce) {
      return Z(Ce) === d;
    }
    function cn(Ce) {
      return Z(Ce) === u;
    }
    function Ft(Ce) {
      return Z(Ce) === T;
    }
    en.AsyncMode = U, en.ConcurrentMode = V, en.ContextConsumer = X, en.ContextProvider = le, en.Element = ee, en.ForwardRef = Q, en.Fragment = K, en.Lazy = xe, en.Memo = pe, en.Portal = ke, en.Profiler = lt, en.StrictMode = Ie, en.Suspense = Le, en.isAsyncMode = fe, en.isConcurrentMode = de, en.isContextConsumer = Se, en.isContextProvider = Xe, en.isElement = Ne, en.isForwardRef = Re, en.isFragment = nt, en.isLazy = Ct, en.isMemo = Ue, en.isPortal = st, en.isProfiler = rn, en.isStrictMode = cn, en.isSuspense = Ft, en.isValidElementType = G, en.typeOf = Z;
  }()), en;
}
(function(o) {
  process.env.NODE_ENV === "production" ? o.exports = YT() : o.exports = qT();
})(VT);
var z_ = Jg, WT = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, XT = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, U_ = {};
U_[z_.ForwardRef] = WT;
U_[z_.Memo] = XT;
var QT = !0;
function h0(o, e, a) {
  var s = "";
  return a.split(" ").forEach(function(u) {
    o[u] !== void 0 ? e.push(o[u] + ";") : s += u + " ";
  }), s;
}
var Xv = function(e, a, s) {
  var u = e.key + "-" + a.name;
  (s === !1 || QT === !1) && e.registered[u] === void 0 && (e.registered[u] = a.styles);
}, Qv = function(e, a, s) {
  Xv(e, a, s);
  var u = e.key + "-" + a.name;
  if (e.inserted[a.name] === void 0) {
    var d = a;
    do
      e.insert(a === d ? "." + u : "", d, e.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function KT(o) {
  for (var e = 0, a, s = 0, u = o.length; u >= 4; ++s, u -= 4)
    a = o.charCodeAt(s) & 255 | (o.charCodeAt(++s) & 255) << 8 | (o.charCodeAt(++s) & 255) << 16 | (o.charCodeAt(++s) & 255) << 24, a = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), a ^= a >>> 24, e = (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (u) {
    case 3:
      e ^= (o.charCodeAt(s + 2) & 255) << 16;
    case 2:
      e ^= (o.charCodeAt(s + 1) & 255) << 8;
    case 1:
      e ^= o.charCodeAt(s) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var JT = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, X2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ZT = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", $T = /[A-Z]|^ms/g, F_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g, v0 = function(e) {
  return e.charCodeAt(1) === 45;
}, Q2 = function(e) {
  return e != null && typeof e != "boolean";
}, Ug = /* @__PURE__ */ D_(function(o) {
  return v0(o) ? o : o.replace($T, "-$&").toLowerCase();
}), Fv = function(e, a) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof a == "string")
        return a.replace(F_, function(s, u, d) {
          return Ui = {
            name: u,
            styles: d,
            next: Ui
          }, u;
        });
  }
  return JT[e] !== 1 && !v0(e) && typeof a == "number" && a !== 0 ? a + "px" : a;
};
if (process.env.NODE_ENV !== "production") {
  var eR = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, tR = ["normal", "none", "initial", "inherit", "unset"], nR = Fv, rR = /^-ms-/, aR = /-(.)/g, K2 = {};
  Fv = function(e, a) {
    if (e === "content" && (typeof a != "string" || tR.indexOf(a) === -1 && !eR.test(a) && (a.charAt(0) !== a.charAt(a.length - 1) || a.charAt(0) !== '"' && a.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + a + "\"'`");
    var s = nR(e, a);
    return s !== "" && !v0(e) && e.indexOf("-") !== -1 && K2[e] === void 0 && (K2[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(rR, "ms-").replace(aR, function(u, d) {
      return d.toUpperCase();
    }) + "?")), s;
  };
}
var H_ = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function cd(o, e, a) {
  if (a == null)
    return "";
  if (a.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && a.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(H_);
    return a;
  }
  switch (typeof a) {
    case "boolean":
      return "";
    case "object": {
      if (a.anim === 1)
        return Ui = {
          name: a.name,
          styles: a.styles,
          next: Ui
        }, a.name;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ui = {
              name: s.name,
              styles: s.styles,
              next: Ui
            }, s = s.next;
        var u = a.styles + ";";
        return process.env.NODE_ENV !== "production" && a.map !== void 0 && (u += a.map), u;
      }
      return iR(o, e, a);
    }
    case "function": {
      if (o !== void 0) {
        var d = Ui, v = a(o);
        return Ui = d, cd(o, e, v);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var g = [], _ = a.replace(F_, function(E, T, w) {
          var M = "animation" + g.length;
          return g.push("const " + M + " = keyframes`" + w.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + M + "}";
        });
        g.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(g, ["`" + _ + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + _ + "`"));
      }
      break;
  }
  if (e == null)
    return a;
  var m = e[a];
  return m !== void 0 ? m : a;
}
function iR(o, e, a) {
  var s = "";
  if (Array.isArray(a))
    for (var u = 0; u < a.length; u++)
      s += cd(o, e, a[u]) + ";";
  else
    for (var d in a) {
      var v = a[d];
      if (typeof v != "object")
        e != null && e[v] !== void 0 ? s += d + "{" + e[v] + "}" : Q2(v) && (s += Ug(d) + ":" + Fv(d, v) + ";");
      else {
        if (d === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(H_);
        if (Array.isArray(v) && typeof v[0] == "string" && (e == null || e[v[0]] === void 0))
          for (var g = 0; g < v.length; g++)
            Q2(v[g]) && (s += Ug(d) + ":" + Fv(d, v[g]) + ";");
        else {
          var _ = cd(o, e, v);
          switch (d) {
            case "animation":
            case "animationName": {
              s += Ug(d) + ":" + _ + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && d === "undefined" && console.error(ZT), s += d + "{" + _ + "}";
          }
        }
      }
    }
  return s;
}
var J2 = /label:\s*([^\s;\n{]+)\s*(;|$)/g, G_;
process.env.NODE_ENV !== "production" && (G_ = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ui, oc = function(e, a, s) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var u = !0, d = "";
  Ui = void 0;
  var v = e[0];
  v == null || v.raw === void 0 ? (u = !1, d += cd(s, a, v)) : (process.env.NODE_ENV !== "production" && v[0] === void 0 && console.error(X2), d += v[0]);
  for (var g = 1; g < e.length; g++)
    d += cd(s, a, e[g]), u && (process.env.NODE_ENV !== "production" && v[g] === void 0 && console.error(X2), d += v[g]);
  var _;
  process.env.NODE_ENV !== "production" && (d = d.replace(G_, function(w) {
    return _ = w, "";
  })), J2.lastIndex = 0;
  for (var m = "", E; (E = J2.exec(d)) !== null; )
    m += "-" + E[1];
  var T = KT(d) + m;
  return process.env.NODE_ENV !== "production" ? {
    name: T,
    styles: d,
    map: _,
    next: Ui,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: T,
    styles: d,
    next: Ui
  };
}, lR = function(e) {
  return e();
}, j_ = qt["useInsertionEffect"] ? qt["useInsertionEffect"] : !1, p0 = j_ || lR, Z2 = j_ || Hv, sR = {}.hasOwnProperty, m0 = /* @__PURE__ */ NS(
  typeof HTMLElement < "u" ? /* @__PURE__ */ IT({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (m0.displayName = "EmotionCacheContext");
m0.Provider;
var Kv = function(e) {
  return /* @__PURE__ */ Zg(function(a, s) {
    var u = Lo(m0);
    return e(a, u, s);
  });
}, hd = /* @__PURE__ */ NS({});
process.env.NODE_ENV !== "production" && (hd.displayName = "EmotionThemeContext");
var $2 = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", eS = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", oR = function(e) {
  var a = e.cache, s = e.serialized, u = e.isStringTag;
  return Xv(a, s, u), p0(function() {
    return Qv(a, s, u);
  }), null;
}, uR = /* @__PURE__ */ Kv(function(o, e, a) {
  var s = o.css;
  typeof s == "string" && e.registered[s] !== void 0 && (s = e.registered[s]);
  var u = o[$2], d = [s], v = "";
  typeof o.className == "string" ? v = h0(e.registered, d, o.className) : o.className != null && (v = o.className + " ");
  var g = oc(d, void 0, Lo(hd));
  if (process.env.NODE_ENV !== "production" && g.name.indexOf("-") === -1) {
    var _ = o[eS];
    _ && (g = oc([g, "label:" + _ + ";"]));
  }
  v += e.key + "-" + g.name;
  var m = {};
  for (var E in o)
    sR.call(o, E) && E !== "css" && E !== $2 && (process.env.NODE_ENV === "production" || E !== eS) && (m[E] = o[E]);
  return m.ref = a, m.className = v, /* @__PURE__ */ Ql($g, null, /* @__PURE__ */ Ql(oR, {
    cache: e,
    serialized: g,
    isStringTag: typeof u == "string"
  }), /* @__PURE__ */ Ql(u, m));
});
process.env.NODE_ENV !== "production" && (uR.displayName = "EmotionCssPropInternal");
var cR = {
  name: "@emotion/react",
  version: "11.10.5",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.5",
    "@emotion/cache": "^11.10.5",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: !0
    },
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@babel/core": "^7.18.5",
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.5",
    "@emotion/css-prettifier": "1.1.1",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.5",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
}, tS = !1, fR = /* @__PURE__ */ Kv(function(o, e) {
  process.env.NODE_ENV !== "production" && !tS && (o.className || o.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), tS = !0);
  var a = o.styles, s = oc([a], void 0, Lo(hd)), u = Ln();
  return Z2(function() {
    var d = e.key + "-global", v = new e.sheet.constructor({
      key: d,
      nonce: e.sheet.nonce,
      container: e.sheet.container,
      speedy: e.sheet.isSpeedy
    }), g = !1, _ = document.querySelector('style[data-emotion="' + d + " " + s.name + '"]');
    return e.sheet.tags.length && (v.before = e.sheet.tags[0]), _ !== null && (g = !0, _.setAttribute("data-emotion", d), v.hydrate([_])), u.current = [v, g], function() {
      v.flush();
    };
  }, [e]), Z2(function() {
    var d = u.current, v = d[0], g = d[1];
    if (g) {
      d[1] = !1;
      return;
    }
    if (s.next !== void 0 && Qv(e, s.next, !0), v.tags.length) {
      var _ = v.tags[v.tags.length - 1].nextElementSibling;
      v.before = _, v.flush();
    }
    e.insert("", s, v, !1);
  }, [e, s.name]), null;
});
process.env.NODE_ENV !== "production" && (fR.displayName = "EmotionGlobal");
function vd() {
  for (var o = arguments.length, e = new Array(o), a = 0; a < o; a++)
    e[a] = arguments[a];
  return oc(e);
}
var dR = function o(e) {
  for (var a = e.length, s = 0, u = ""; s < a; s++) {
    var d = e[s];
    if (d != null) {
      var v = void 0;
      switch (typeof d) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(d))
            v = o(d);
          else {
            process.env.NODE_ENV !== "production" && d.styles !== void 0 && d.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), v = "";
            for (var g in d)
              d[g] && g && (v && (v += " "), v += g);
          }
          break;
        }
        default:
          v = d;
      }
      v && (u && (u += " "), u += v);
    }
  }
  return u;
};
function hR(o, e, a) {
  var s = [], u = h0(o, s, a);
  return s.length < 2 ? a : u + e(s);
}
var vR = function(e) {
  var a = e.cache, s = e.serializedArr;
  return p0(function() {
    for (var u = 0; u < s.length; u++)
      Qv(a, s[u], !1);
  }), null;
}, pR = /* @__PURE__ */ Kv(function(o, e) {
  var a = !1, s = [], u = function() {
    if (a && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var m = arguments.length, E = new Array(m), T = 0; T < m; T++)
      E[T] = arguments[T];
    var w = oc(E, e.registered);
    return s.push(w), Xv(e, w, !1), e.key + "-" + w.name;
  }, d = function() {
    if (a && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var m = arguments.length, E = new Array(m), T = 0; T < m; T++)
      E[T] = arguments[T];
    return hR(e.registered, u, dR(E));
  }, v = {
    css: u,
    cx: d,
    theme: Lo(hd)
  }, g = o.children(v);
  return a = !0, /* @__PURE__ */ Ql($g, null, /* @__PURE__ */ Ql(vR, {
    cache: e,
    serializedArr: s
  }), g);
});
process.env.NODE_ENV !== "production" && (pR.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var nS = !0, mR = typeof jest < "u" || typeof vi < "u";
  if (nS && !mR) {
    var rS = typeof globalThis < "u" ? globalThis : nS ? window : global, aS = "__EMOTION_REACT_" + cR.version.split(".")[0] + "__";
    rS[aS] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), rS[aS] = !0;
  }
}
var gR = cT, yR = function(e) {
  return e !== "theme";
}, iS = function(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96 ? gR : yR;
}, lS = function(e, a, s) {
  var u;
  if (a) {
    var d = a.shouldForwardProp;
    u = e.__emotion_forwardProp && d ? function(v) {
      return e.__emotion_forwardProp(v) && d(v);
    } : d;
  }
  return typeof u != "function" && s && (u = e.__emotion_forwardProp), u;
}, sS = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, SR = function(e) {
  var a = e.cache, s = e.serialized, u = e.isStringTag;
  return Xv(a, s, u), p0(function() {
    return Qv(a, s, u);
  }), null;
}, _R = function o(e, a) {
  if (process.env.NODE_ENV !== "production" && e === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var s = e.__emotion_real === e, u = s && e.__emotion_base || e, d, v;
  a !== void 0 && (d = a.label, v = a.target);
  var g = lS(e, a, s), _ = g || iS(u), m = !_("as");
  return function() {
    var E = arguments, T = s && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
    if (d !== void 0 && T.push("label:" + d + ";"), E[0] == null || E[0].raw === void 0)
      T.push.apply(T, E);
    else {
      process.env.NODE_ENV !== "production" && E[0][0] === void 0 && console.error(sS), T.push(E[0][0]);
      for (var w = E.length, M = 1; M < w; M++)
        process.env.NODE_ENV !== "production" && E[0][M] === void 0 && console.error(sS), T.push(E[M], E[0][M]);
    }
    var R = Kv(function(z, k, I) {
      var j = m && z.as || u, G = "", Z = [], U = z;
      if (z.theme == null) {
        U = {};
        for (var V in z)
          U[V] = z[V];
        U.theme = Lo(hd);
      }
      typeof z.className == "string" ? G = h0(k.registered, Z, z.className) : z.className != null && (G = z.className + " ");
      var X = oc(T.concat(Z), k.registered, U);
      G += k.key + "-" + X.name, v !== void 0 && (G += " " + v);
      var le = m && g === void 0 ? iS(j) : _, ee = {};
      for (var Q in z)
        m && Q === "as" || le(Q) && (ee[Q] = z[Q]);
      return ee.className = G, ee.ref = I, /* @__PURE__ */ Ql($g, null, /* @__PURE__ */ Ql(SR, {
        cache: k,
        serialized: X,
        isStringTag: typeof j == "string"
      }), /* @__PURE__ */ Ql(j, ee));
    });
    return R.displayName = d !== void 0 ? d : "Styled(" + (typeof u == "string" ? u : u.displayName || u.name || "Component") + ")", R.defaultProps = e.defaultProps, R.__emotion_real = R, R.__emotion_base = u, R.__emotion_styles = T, R.__emotion_forwardProp = g, Object.defineProperty(R, "toString", {
      value: function() {
        return v === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + v;
      }
    }), R.withComponent = function(z, k) {
      return o(z, Xg({}, a, k, {
        shouldForwardProp: lS(R, k, !0)
      })).apply(void 0, T);
    }, R;
  };
}, xR = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ta = _R.bind();
xR.forEach(function(o) {
  ta[o] = ta(o);
});
const CR = (o) => /* @__PURE__ */ qt.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...o }, /* @__PURE__ */ qt.createElement("path", { d: "M2.6291474,37.1542473 C2.9932144,37.5181419 3.53021322,37.645505 4.0308053,37.4817524 L17.4131966,33.8993297 C17.4131966,33.8993297 17.5042133,33.8629403 17.5315183,33.8538429 C17.7681619,33.7537718 17.9501954,33.5718245 17.9501954,33.5718245 L34.7520665,16.6052398 C34.7611681,16.5870451 33.1513228,18.3974222 35.1161335,16.186761 C35.8169624,15.3589008 37.3005354,13.3301883 37.3370253,10.5281998 C37.3460438,8.71782408 36.6088081,6.66181954 34.7520665,4.81505444 C32.9044265,2.95009459 30.847448,2.213208 29.0362148,2.22222222 C25.4137483,2.26779219 23.0746179,4.73317815 22.9562961,4.81505444 L6.14532327,21.7816392 C6.14532327,21.7816392 5.94508643,21.999976 5.86317135,22.200118 C5.84496798,22.2456049 5.81766296,22.3183838 5.81766296,22.3183838 L2.29238543,35.7623504 C2.12855527,36.2536081 2.25597869,36.7903527 2.6291474,37.1542473 Z M6.13205996,32.2561442 C6.13205996,32.2561442 6.7113846,32.12009 7.10863582,32.5191822 C7.4810588,32.8910636 7.4810588,33.4806316 7.4810588,33.4806316 L5.54445923,34.1881132 L6.13205996,32.2561442 Z M8.81716912,26.1591263 L12.1091434,27.6061887 L13.5568913,30.9026087 L9.65217723,32.2055653 C9.51401044,31.8092744 9.27972757,31.3169129 8.88324892,30.9146175 C8.45072674,30.4762958 7.92809578,30.260137 7.48956636,30.1460533 L8.81716912,26.1591263 Z M31.825925,8.12414251 C33.2973685,9.58179838 33.3085455,11.9563025 31.8508896,13.4277459 C31.8252594,13.4536186 31.7992536,13.4791166 31.7728806,13.5042317 L16.9707393,27.6003858 L15.361832,24.3334134 L11.7499499,22.3126037 L26.3187959,8.10275617 C27.8529745,6.60638208 30.3034146,6.6158981 31.825925,8.12414251 Z", id: "Shape", fillRule: "nonzero" })), ER = (o) => /* @__PURE__ */ qt.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 41 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...o }, /* @__PURE__ */ qt.createElement("path", { d: "M14.0136054,25.4618474 L11.4739229,31.2851406 C10.6273578,33.0968408 9.53893333,34.2614878 8.20861678,34.7791165 C7.24111383,35.2967451 5.24566893,35.5555556 2.22222222,35.5555556 C2.58503583,35.0379269 3.1897161,33.8732799 4.03628118,32.0615797 C4.64097052,30.8969152 5.12471474,29.9910786 5.48752834,29.3440428 L16.1904762,3.33333333 L23.6281179,3.52744311 L34.6938776,29.5381526 C35.177629,31.0910386 35.9637134,32.7086038 37.0521542,34.3908969 C37.2940299,35.0379327 37.535902,35.4261484 37.7777778,35.5555556 C33.907766,35.5555556 31.5495129,35.3614477 30.7029478,34.9732262 C29.614507,34.4555976 28.5865506,32.9027349 27.6190476,30.3145917 L25.8049887,25.4618474 L14.0136054,25.4618474 Z M25.0793651,23.5207497 L20,9.9330656 L14.5578231,23.5207497 L25.0793651,23.5207497 Z", id: "A\\u5907\\u4EFD", fillRule: "nonzero" })), bR = (o) => /* @__PURE__ */ qt.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...o }, /* @__PURE__ */ qt.createElement("polygon", { id: "\\u8DEF\\u5F84", fillRule: "nonzero", points: "12.4894587 12.4501424 12.4894587 3.33333333 7.93105415 3.33333333 7.93105415 7.89173791 3.37264957 7.89173791 3.37264957 12.4501424 7.93105415 12.4501424 7.93105415 31.5954416 27.0763533 31.5954416 27.0763533 27.0370371 12.4894587 27.0370371" }), /* @__PURE__ */ qt.createElement("polygon", { id: "\\u8DEF\\u5F84", fillRule: "nonzero", points: "38.0165242 27.0370371 33.4581197 27.0370371 33.4581197 7.89173791 14.3128205 7.89173791 14.3128205 12.4501424 28.8997151 12.4501424 28.8997151 36.1538462 33.4581197 36.1538462 33.4581197 31.5954416 38.0165242 31.5954416" })), TR = (o) => /* @__PURE__ */ qt.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 41 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...o }, /* @__PURE__ */ qt.createElement("path", { d: "M19.5555556,8.44444444 L30.6666667,8.44444444 L30.6666667,19.5555556 L19.5555556,19.5555556 L19.5555556,8.44444444 Z M8.44444444,19.5555556 L19.5555556,19.5555556 L19.5555556,30.6666667 L8.44444444,30.6666667 L8.44444444,19.5555556 Z", id: "\\u5F62\\u72B6", fillRule: "nonzero" }), /* @__PURE__ */ qt.createElement("path", { d: "M31.1111111,37.7777778 L8.88888889,37.7777778 C5.20699056,37.7777778 2.22222222,34.7930094 2.22222222,31.1111111 L2.22222222,8.88888889 C2.22222222,5.20699056 5.20699056,2.22222222 8.88888889,2.22222222 L31.1111111,2.22222222 C34.7930094,2.22222222 37.7777778,5.20699056 37.7777778,8.88888889 L37.7777778,31.1111111 C37.7777778,34.7930094 34.7930094,37.7777778 31.1111111,37.7777778 Z M7.96296296,5.55555556 C6.63338857,5.55555556 5.55555556,6.63338857 5.55555556,7.96296296 L5.55555556,32.037037 C5.55555556,33.3666114 6.63338857,34.4444444 7.96296296,34.4444444 L32.037037,34.4444444 C33.3666114,34.4444444 34.4444444,33.3666114 34.4444444,32.037037 L34.4444444,7.96296296 C34.4444444,6.63338857 33.3666114,5.55555556 32.037037,5.55555556 L7.96296296,5.55555556 Z", id: "\\u5F62\\u72B6", fillRule: "nonzero" })), RR = (o) => /* @__PURE__ */ qt.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...o }, /* @__PURE__ */ qt.createElement("path", { d: "M17.5779596,8.54958017 L17.5779596,9.78258063 C17.5779596,10.8408584 18.4358632,11.6987621 19.494141,11.6987621 C20.5524188,11.6987621 21.4103224,10.8408584 21.4103224,9.78258063 L21.4103224,4.72371845 C21.4103224,3.496419 20.4153996,2.50149623 19.1881002,2.50149623 C18.5763176,2.50149623 17.9915961,2.75371146 17.5717539,3.19869512 L3.2331148,18.3959752 C2.0630494,19.6361077 2.0174257,21.5592807 3.12736825,22.8535021 L15.8639539,37.7046866 C16.6629229,38.6363048 18.065841,38.7438383 18.9974592,37.9448694 C19.4897309,37.5226902 19.7730202,36.9065365 19.7730202,36.2580253 L19.7730202,25.2321054 L19.7730202,25.2321054 C23.2058426,25.6262204 26.0618735,26.3972435 28.3411128,27.5451747 C28.3411128,27.5451747 28.3411128,27.5451747 28.3411128,27.5451747 C30.4830369,28.6239474 33.0939274,27.7620931 34.1727002,25.620169 C34.9201963,24.1360011 34.7551232,22.3553848 33.7475296,21.0339235 C33.0553456,20.1261947 32.2868819,19.29897 31.4421037,18.5522758 C28.2479816,15.7290114 24.3482408,13.9602893 19.742881,13.2461093 C18.8736739,13.111306 18.0597695,13.7066674 17.9249762,14.5758761 C17.9124536,14.6566279 17.9061644,14.7382238 17.9061644,14.8199408 C17.9061644,15.7914187 18.6317736,16.609832 19.5962554,16.726211 C22.0019735,17.0164528 24.3663523,17.8958982 26.6893918,19.3645475 C29.5542619,21.1757476 31.6020001,23.472523 32.8326067,26.2548737 C29.0492033,24.5029085 25.9618566,23.3648044 23.5705665,22.8405615 C22.0855021,22.5149906 20.6358973,22.2470078 19.2217523,22.0366132 C18.0078183,21.856015 16.8773204,22.6936906 16.696713,23.9076233 C16.680606,24.0158849 16.6725195,24.1251885 16.6725195,24.2346417 L16.6725195,33.6727049 L16.6725195,33.6727049 L7.30858708,22.4534377 C6.59165669,21.5944573 6.62515013,20.3364185 7.3867707,19.5168025 L17.5779596,8.54958017 L17.5779596,8.54958017 Z", id: "Path-9" }));
var wR = [
  { icon: vt(CR, {}), name: "Pencil" },
  { icon: vt(ER, {}), name: "Words" },
  { icon: vt(bR, {}), name: "Cut" },
  { icon: vt(TR, {}), name: "Blur" },
  { icon: vt(RR, {}), name: "Recall" }
], DR = ta.div(oS || (oS = _r([`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 20px;
  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);
`], [`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 20px;
  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);
`]))), NR = ta.div(uS || (uS = _r([`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
`], [`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
`]))), MR = Yt.memo(ta.div(fS || (fS = _r([`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    fill: #fff;
  }
  `, `
`], [`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    fill: #fff;
  }
  `, `
`])), function(o) {
  return o.isActive && vd(cS || (cS = _r([`
      color: #0096ff;
      background: #e6f5ff;
      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
      border-radius: 5px;
      border: 1px solid #0096ff;
      svg {
        fill: #0096ff;
      }
    `], [`
      color: #0096ff;
      background: #e6f5ff;
      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
      border-radius: 5px;
      border: 1px solid #0096ff;
      svg {
        fill: #0096ff;
      }
    `])));
})), OR = ta.div(hS || (hS = _r([`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  `, `
`], [`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  `, `
`])), function(o) {
  return vd(dS || (dS = _r([`
      background: `, `;
      box-shadow: `, `;
      border: `, `;
    `], [`
      background: `, `;
      box-shadow: `, `;
      border: `, `;
    `])), o.color, o.color === o.currentColor ? "0px 0px 4px 0px #0096ff" : "none", o.color === o.currentColor ? "1px solid #0096FF;" : "1px solid #FFFFFF");
}), LR = ta.div(vS || (vS = _r([`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`], [`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`]))), AR = function(o) {
  var e = o.onSelect, a = uc(), s = a.activeTool, u = a.pencilConfig, d = a.editorColors, v = a.handleSelectTool, g = a.changeColor, _ = Gv().undo, m = js(function() {
    return ["Pencil"].includes(s);
  }, [s]), E = function(T) {
    switch (T) {
      case "Recall":
        _();
        break;
      case "Words":
        v("Words");
        break;
      case "Cut":
        v(T);
        break;
      default:
        v(T);
    }
    e == null || e();
  };
  return Na(DR, { children: [m && vt(LR, { children: d == null ? void 0 : d.map(function(T) {
    return vt(OR, { color: T, currentColor: u.stroke, onClick: function() {
      return g(T);
    } }, T);
  }) }), !["Words", "Cut"].includes(s) && vt(NR, { children: wR.map(function(T) {
    return Na(MR, ot({ onClick: function() {
      return E(T.name);
    }, isActive: T.name === s }, { children: [T.icon, vt("span", { children: T.name })] }), T.name);
  }) })] });
}, oS, uS, cS, fS, dS, hS, vS, $f = 10, ed = 10, pS = function(o) {
  var e = o.tile;
  if (e.isFilled && vt(OS, {}), !e.color) {
    for (var a = e.data.length, s = 0, u = 0, d = 0, v = 0, g = 0; g < a; g += 4)
      s += e.data[g], u += e.data[g + 1], d += e.data[g + 2], v += e.data[g + 3];
    var _ = a / 4;
    e.color = {
      r: Math.round(s / _),
      g: Math.round(u / _),
      b: Math.round(d / _),
      a: Math.round(v / _)
    };
  }
  var m = e.color, E = e.column * ed, T = e.row * $f, w = e.pixelWidth, M = e.pixelHeight;
  return vt(C_, { globalCompositeOperation: "source-over", x: E, y: T, width: w, height: M, fill: "rgba(".concat(m.r, ", ").concat(m.g, ", ").concat(m.b, ", ").concat(m.a / 255, ")") });
}, B_ = function(o) {
  var e = o.currentBlur, a = e === void 0 ? [] : e, s = uc(), u = s.width, d = s.height, v = Gv(), g = v.image, _ = v.group, m = v.blurs, E = Ln([]), T = Math.ceil(d / $f), w = Math.ceil(u / ed), M = Fi(!1), R = M[0], z = M[1], k = function(G, Z, U) {
    for (var V = [], X = Math.max(0, Math.floor(Z / $f) - Math.floor(U / 2)), le = Math.max(0, Math.floor(G / ed) - Math.floor(U / 2)), ee = Math.min(T, X + U), Q = Math.min(w, le + U); X < ee; ) {
      for (var K = le; K < Q; )
        V.push(E.current[X * w + K]), K += 1;
      X += 1;
    }
    return V;
  }, I = js(function() {
    var G = [];
    return R && a.forEach(function(Z) {
      G.push.apply(G, k(Z.x, Z.y, 5));
    }), G;
  }, [a, R]), j = js(function() {
    var G = [];
    return R && m.forEach(function(Z) {
      Z.forEach(function(U) {
        G.push.apply(G, k(U.x, U.y, 5));
      });
    }), G;
  }, [m, R]);
  return id(function() {
    for (var G = N3(g, _.width, _.height), Z = 0; Z < T; Z++)
      for (var U = 0; U < w; U++) {
        for (var V = {
          row: Z,
          column: U,
          pixelWidth: ed,
          pixelHeight: $f,
          data: []
        }, X = [], le = (u * $f * V.row + V.column * ed) * 4, ee = V.pixelHeight, Q = 0; Q < ee; Q++) {
          var K = le + u * 4 * Q;
          X = ea(ea([], X, !0), G.data.slice(K, K + V.pixelWidth * 4), !0);
        }
        V.data = X, E.current.push(V);
      }
    z(!0);
  }, [g]), Na(OS, { children: [I.length > 0 && vt(Oo, { children: I.map(function(G, Z) {
    return G && vt(pS, { tile: G }, "".concat(Z, "-").concat(G.row, "-").concat(G.column));
  }) }), j.length > 0 && vt(Oo, { children: j.map(function(G, Z) {
    return G && vt(pS, { tile: G }, "".concat(Z, "-").concat(G.row, "-").concat(G.column));
  }) })] });
}, PR = function(o) {
  var e = Fi({
    width: window.innerWidth,
    height: window.innerHeight
  }), a = e[0], s = e[1];
  return id(function() {
    var u, d, v = function() {
      window.visualViewport && s({
        width: window.visualViewport.width,
        height: window.visualViewport.height
      });
    };
    return (u = window.visualViewport) === null || u === void 0 || u.addEventListener("resize", v), (d = window.visualViewport) === null || d === void 0 || d.addEventListener("scroll", v), function() {
      var g, _;
      (g = window.visualViewport) === null || g === void 0 || g.removeEventListener("resize", v), (_ = window.visualViewport) === null || _ === void 0 || _.removeEventListener("scroll", v);
    };
  }, []), id(function() {
    o == null || o();
  }, [a]), a;
}, kR = function(o) {
  return vd(mS || (mS = _r([`
  background: `, `;
  box-shadow: `, `;
  border: `, `;
`], [`
  background: `, `;
  box-shadow: `, `;
  border: `, `;
`])), o.color, o.color === o.currentColor ? "0px 0px 4px 0px rgba(0,150,255,1)" : "none", o.color === o.currentColor ? "1px solid #0096FF;" : "1px solid #FFFFFF");
}, zR = ta.div(gS || (gS = _r([`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #fff;
  background: #fff;
  box-sizing: border-box;
  `, `
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    content: '';
  }
`], [`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: #fff;
  background: #fff;
  box-sizing: border-box;
  `, `
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    content: '';
  }
`])), kR), UR = function(o) {
  return vd(yS || (yS = _r([`
  transform: translateY(calc(`, `px - 100%));
`], [`
  transform: translateY(calc(`, `px - 100%));
`])), o.viewprotHeight - 20);
}, FR = ta.div(SS || (SS = _r([`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  transition: transform 0.2s ease;
  `, `
`], [`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  transition: transform 0.2s ease;
  `, `
`])), UR), HR = ta.div(_S || (_S = _r([`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 100px 15px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
`], [`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 100px 15px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
`]))), GR = ta.textarea(xS || (xS = _r([`
  width: 100%;
  height: 105px;
  padding: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);
  border-radius: 8px;
  border: 1px solid #38a1f6;
  resize: none;
  font-size: 30px;
  font-weight: 500;
  color: #222222;
  line-height: 42px;
`], [`
  width: 100%;
  height: 105px;
  padding: 0 12px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);
  border-radius: 8px;
  border: 1px solid #38a1f6;
  resize: none;
  font-size: 30px;
  font-weight: 500;
  color: #222222;
  line-height: 42px;
`]))), jR = ta.div(CS || (CS = _r([`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: '';
      transform: translate(-50%, -50%);
    }
  }
`], [`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: '';
      transform: translate(-50%, -50%);
    }
  }
`]))), BR = function(o) {
  var e = o.defaultWord, a = e === void 0 ? "" : e, s = o.onDone, u = o.onCancel, d = Ln(null), v = PR(function() {
    var R;
    (R = d.current) === null || R === void 0 || R.focus();
  }), g = uc(), _ = g.editorColors, m = g.textConfig, E = g.changeColor, T = function(R) {
    R.stopPropagation(), u == null || u();
  }, w = function(R) {
    R.stopPropagation(), s == null || s(d.current.value);
  }, M = function(R, z) {
    var k;
    R.preventDefault(), R.stopPropagation(), E(z), (k = d.current) === null || k === void 0 || k.focus();
  };
  return id(function() {
    var R;
    (R = d.current) === null || R === void 0 || R.focus(), d.current.value = a;
  }, []), MS.createPortal(Na(HR, ot({ onClick: function(R) {
    return R.stopPropagation();
  } }, { children: [Na(jR, { children: [vt("div", ot({ onClick: T }, { children: "Cancel" })), vt("div", ot({ onClick: w }, { children: "Done" }))] }), vt(GR, { ref: d, autoComplete: "off", wrap: "hard", style: { color: m.fill } }), vt(FR, ot({ viewprotHeight: v.height }, { children: _ == null ? void 0 : _.map(function(R) {
    return vt(zR, { color: R, currentColor: m.fill, onClick: function(z) {
      return M(z, R);
    } }, R);
  }) }))] })), document.body);
}, mS, gS, yS, SS, _S, xS, CS;
const IR = (o) => /* @__PURE__ */ qt.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...o }, /* @__PURE__ */ qt.createElement("path", { d: "M5.18286303,19.7599081 L30.5474794,19.7599081 C31.1080723,19.7599081 31.6457047,19.9826027 32.0421038,20.3790017 C32.4385028,20.7754008 32.6611974,21.3130332 32.6611974,21.8736261 L32.6611974,40.8970884 C32.6611974,42.0644626 31.7148536,43.0108064 30.5474794,43.0108064 L5.18286303,43.0108064 C4.01548881,43.0108064 3.06914498,42.0644626 3.06914498,40.8970884 L3.06914498,21.8736261 C3.06914498,21.3130332 3.29183964,20.7754008 3.68823867,20.3790017 C4.08463769,19.9826027 4.62227015,19.7599081 5.18286303,19.7599081 L5.18286303,19.7599081 Z M7.29658108,23.9873441 L7.29658108,38.7833703 L28.4337613,38.7833703 L28.4337613,23.9873441 L7.29658108,23.9873441 Z", id: "\\u5F62\\u72B6", fill: "#FFFFFF", fillRule: "nonzero" }), /* @__PURE__ */ qt.createElement("path", { d: "M26.0389188,13.171449 L26.0389188,16.3779592 C26.0389188,16.5380827 25.9484507,16.6844632 25.8052319,16.7560726 C25.6620132,16.827682 25.4906279,16.8122282 25.3625291,16.7161541 L18.0342686,11.2204872 C17.9278193,11.1406503 17.8651712,11.015354 17.8651712,10.8822923 C17.8651712,10.7492307 17.9278193,10.6239344 18.0342686,10.5440974 L25.3625291,5.04843056 C25.4906279,4.95235648 25.6620132,4.93690268 25.8052319,5.00851207 C25.9484507,5.08012147 26.0389188,5.226502 26.0389188,5.38662547 L26.0389188,8.94401291 C36.5395083,8.95218005 45.0475851,17.4668826 45.0475851,27.9674752 C45.0475851,28.722711 44.6448536,29.4206271 43.9908195,29.7982784 C43.3367854,30.1759296 42.5309487,30.1759296 41.8769146,29.7982784 C41.2228805,29.4206271 40.8200334,28.722711 40.820149,27.9674752 C40.8201531,19.8016303 34.2047597,13.1796148 26.0389188,13.171449 Z", id: "\\u8DEF\\u5F84", fill: "#FFFFFF", fillRule: "nonzero" }));
var ES = [
  "top-left",
  "top-center",
  "top-right",
  "middle-left",
  "middle-right",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], VR = function() {
  var o = Ln({}), e = function(a) {
    for (var s = 0, u = ES; s < u.length; s++) {
      var d = u[s], v = a.findOne(".".concat(d));
      v == null || v.fillPriority("pattern"), v == null || v.fillPatternRepeat("no-repeat"), v == null || v.fillPatternImage(o.current[d]), v == null || v.strokeEnabled(!1);
    }
    a == null || a.getLayer().batchDraw();
  };
  return Hv(function() {
    for (var a = 0, s = ES; a < s.length; a++) {
      var u = s[a];
      o.current[u] = YR(u);
    }
  }, []), e;
}, YR = function(o, e) {
  e === void 0 && (e = "#0096FF");
  var a = document.createElement("canvas");
  a.width = 24, a.height = 24;
  var s = a.getContext("2d");
  switch (s.fillStyle = e, s.lineCap = "round", s.beginPath(), o) {
    case "top-left":
      s.lineTo(10, 10), s.lineTo(24, 10), s.lineTo(24, 12), s.lineTo(12, 12), s.lineTo(12, 24), s.lineTo(10, 24);
      break;
    case "top-center":
      s.lineTo(0, 14), s.lineTo(24, 14), s.lineTo(24, 12), s.lineTo(0, 12);
      break;
    case "top-right":
      s.lineTo(0, 10), s.lineTo(14, 10), s.lineTo(14, 24), s.lineTo(12, 24), s.lineTo(12, 12), s.lineTo(0, 12);
      break;
    case "bottom-center":
      s.lineTo(0, 10), s.lineTo(24, 10), s.lineTo(24, 12), s.lineTo(0, 12);
      break;
    case "middle-left":
      s.lineTo(12, 0), s.lineTo(12, 24), s.lineTo(14, 24), s.lineTo(14, 0);
      break;
    case "middle-right":
      s.lineTo(12, 0), s.lineTo(12, 24), s.lineTo(10, 24), s.lineTo(10, 0);
      break;
    case "bottom-left":
      s.lineTo(12, 0), s.lineTo(12, 12), s.lineTo(24, 12), s.lineTo(24, 14), s.lineTo(10, 14), s.lineTo(10, 0);
      break;
    case "bottom-right":
      s.lineTo(12, 12), s.lineTo(12, 0), s.lineTo(14, 0), s.lineTo(14, 14), s.lineTo(0, 14), s.lineTo(0, 12);
      break;
  }
  return s.closePath(), s.fill(), a;
}, qR = ta.div(bS || (bS = _r([`
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
`], [`
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
`]))), WR = ta.div(TS || (TS = _r([`
  position: absolute;
  bottom: 20px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: "";
      transform: translate(-50%, -50%);
    }
  }
`], [`
  position: absolute;
  bottom: 20px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  box-sizing: border-box;
  div {
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 200%;
      height: 200%;
      content: "";
      transform: translate(-50%, -50%);
    }
  }
`]))), XR = function(o) {
  var e = o.onCutDone, a = Gv(), s = a.image, u = a.texts, d = a.lines, v = a.group, g = a.clipRect, _ = uc(), m = _.width, E = _.height, T = _.handleSelectTool, w = VR(), M = Ln(null), R = Ln(null), z = Ln(null), k = Ln(null), I = Ln(null), j = Ln(null), G = Ln(0), Z = Fi(g), U = Z[0], V = Z[1], X = Fi(v.rotation), le = X[0], ee = X[1], Q = js(function() {
    var Ne = le / 90 % 4 + 1, Re = [m, E * 0.8];
    Ne % 2 === 0 && (Re = [E * 0.8, m]);
    var nt = e0.apply(void 0, ea([
      U.width,
      U.height
    ], Re, !1))[0];
    return nt / U.width;
  }, [U, le]), K = js(function() {
    var Ne = m / 2, Re = E * 0.8 / 2, nt = v.x + (U.x + U.width / 2) * Q, Ct = v.y + (U.y + U.height / 2) * Q, Ue = AS(nt, Ct, le), st = Ue[0], rn = Ue[1], cn = isNaN(nt - Ne) ? 0 : st - Ne, Ft = isNaN(Ct - Re) ? 0 : rn - Re;
    return [cn, Ft];
  }, [v, U, le, Q]), xe = K[0], pe = K[1], ke = v.x - xe, lt = v.y - pe, Ie = js(function() {
    var Ne = document.createElement("canvas");
    Ne.width = U.width * Q, Ne.height = U.height * Q;
    var Re = Ne.getContext("2d");
    return Re.strokeStyle = "#0096FF", Re.lineWidth = 1, Re.lineCap = "round", Re.beginPath(), Re.lineTo(0, Ne.height / 3), Re.lineTo(m, Ne.height / 3), Re.stroke(), Re.beginPath(), Re.lineTo(0, Ne.height / 3 * 2), Re.lineTo(m, Ne.height / 3 * 2), Re.stroke(), Re.beginPath(), Re.lineTo(Ne.width / 3, 0), Re.lineTo(Ne.width / 3, E), Re.stroke(), Re.beginPath(), Re.lineTo(Ne.width / 3 * 2, 0), Re.lineTo(Ne.width / 3 * 2, E), Re.stroke(), Ne;
  }, [U.width, U.height, le]), Le = function() {
    var Ne, Re, nt = k.current, Ct = nt.scaleX(), Ue = nt.scaleY(), st = {
      width: nt.width() * Ct,
      height: nt.height() * Ue,
      x: +((Ne = nt.position().x) === null || Ne === void 0 ? void 0 : Ne.toFixed(5)),
      y: +((Re = nt.position().y) === null || Re === void 0 ? void 0 : Re.toFixed(5))
    };
    nt.scaleX(1), nt.scaleY(1), st.x < 0 && (st.width += st.x, st.x = 0, nt.x(0)), st.y < 0 && (st.height += st.y, st.y = 0, nt.y(0)), st.x + st.width > v.width && (st.width = v.width - st.x), st.y + st.height > v.height && (st.height = v.height - st.y), st.height = st.height < 0 ? -st.height : st.height, st.width = st.width < 0 ? -st.width : st.width, V(st);
  }, oe = function() {
    e(U, le);
  }, fe = function() {
    T(null);
  }, de = function() {
    ee(function(Ne) {
      return Ne + 90;
    });
  }, Se = function(Ne) {
    var Re, nt, Ct, Ue, st;
    Ne.evt.preventDefault();
    var rn = M.current, cn = Ne.evt.touches[0], Ft = Ne.evt.touches[1];
    if (cn && Ft) {
      !((Ct = z.current) === null || Ct === void 0) && Ct.isDragging() && ((Ue = z.current) === null || Ue === void 0 || Ue.stopDrag());
      var Ce = {
        x: cn.clientX,
        y: cn.clientY
      }, Gt = {
        x: Ft.clientX,
        y: Ft.clientY
      }, fn = D3(Ce, Gt);
      if (!j.current) {
        j.current = fn;
        return;
      }
      var Cn = PS(Ce, Gt);
      G.current || (G.current = Cn);
      var ar = {
        x: (fn.x - rn.x()) / rn.scaleX(),
        y: (fn.y - rn.y()) / rn.scaleX()
      }, ir = rn.scaleX() * (Cn / G.current);
      rn.scaleX(ir), rn.scaleY(ir);
      var Qn = fn.x - j.current.x, Ee = fn.y - j.current.y;
      Re = a2(Qn, Ee, le), Qn = Re[0], Ee = Re[1];
      var Me = {
        x: fn.x - ar.x * ir + Qn,
        y: fn.y - ar.y * ir + Ee
      };
      rn.position(Me), G.current = Cn, j.current = fn;
      return;
    }
    if (cn) {
      if (!((st = I.current) === null || st === void 0) && st.isTransforming())
        return;
      var Ce = {
        x: cn.clientX,
        y: cn.clientY
      };
      if (!j.current)
        return j.current = Ce;
      var dt = Ce.x - j.current.x, Ke = Ce.y - j.current.y;
      nt = a2(dt, Ke, le), dt = nt[0], Ke = nt[1], rn.move({
        x: dt,
        y: Ke
      }), j.current = Ce;
    }
  }, Xe = function() {
    G.current = 0, j.current = null;
    var Ne = k.current, Re = M.current, nt = Re.scaleX(), Ct = Re.scaleY(), Ue = {
      width: Ne.width() / nt,
      height: Ne.height() / Ct,
      x: (Ne.position().x - Re.x()) / nt,
      y: (Ne.position().y - Re.y()) / Ct
    };
    Re.scaleX(1), Re.scaleY(1), Re.position({
      x: 0,
      y: 0
    }), Ue.x < 0 && (Ue.width += Ue.x, Ue.x = 0, Ne.x(0)), Ue.y < 0 && (Ue.height += Ue.y, Ue.y = 0, Ne.y(0)), Ue.x + Ue.width > v.width && (Ue.width = v.width - Ue.x), Ue.y + Ue.height > v.height && (Ue.height = v.height - Ue.y), Ue.height = Ue.height < 0 ? -Ue.height : Ue.height, Ue.width = Ue.width < 0 ? -Ue.width : Ue.width, V(Ue);
  };
  return Hv(function() {
    var Ne;
    (Ne = I.current) === null || Ne === void 0 || Ne.nodes([k.current]), w(I.current);
  }, []), Na(qR, { children: [vt(w_, ot({ ref: z, width: m, height: E, scale: {
    x: 0.96,
    y: 0.96
  }, x: m * 0.02, y: E * 0.02, onTouchMove: Se, onTouchEnd: Xe }, { children: Na(x_, { children: [Na(Oo, ot({ x: ke, y: lt, width: v.width, height: v.height, scaleX: Q, scaleY: Q, rotation: le }, { children: [Na(Oo, ot({ ref: M }, { children: [vt(b_, { ref: R, image: s, width: v.width, height: v.height }), vt(B_, {}, "clipBlur"), u.map(function(Ne, Re) {
    return vt(T_, ot({ draggable: !0 }, Ne), Re);
  }), d.map(function(Ne, Re) {
    return vt(E_, ot({}, Ne), Re);
  })] })), vt(C_, { ref: k, x: U.x, y: U.y, width: U.width, height: U.height, fillPriority: "pattern", fillPatternImage: Ie, fillPatternRepeat: "no-repeat", fillPatternScale: {
    x: 1 / Q,
    y: 1 / Q
  }, onTransformEnd: Le })] })), vt(R_, { ref: I, rotateEnabled: !1, anchorSize: 24 })] }) })), Na(WR, { children: [vt("div", ot({ onClick: fe }, { children: "Cancel" })), vt(IR, { width: 24, height: 24, onClick: de }), vt("div", ot({ onClick: oe }, { children: "Done" }))] })] });
}, bS, TS;
const QR = (o) => /* @__PURE__ */ qt.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...o }, /* @__PURE__ */ qt.createElement("path", { d: "M32.5688783,3 C33.3575889,3 33.9969652,3.64172519 33.9969652,4.43333333 L33.9969652,4.43333333 L33.9969652,8.01666667 L42.572627,8.01666667 C43.0828333,8.01692271 43.5541473,8.29035109 43.8090295,8.73395398 C44.0639117,9.17755688 44.0636395,9.72394046 43.8083154,10.1672873 C43.5529914,10.6106342 43.0814052,10.8835894 42.5711989,10.8833333 L42.5711989,10.8833333 L41.0659953,10.8833333 L37.5886037,42.1773 C37.3457385,44.3538608 35.5121996,46 33.3300486,46 L33.3300486,46 L14.6692372,46 C12.4873832,46 10.6542959,44.3536371 10.4121101,42.1773 L10.4121101,42.1773 L6.93471856,10.8833333 L5.42808689,10.8833333 C4.63937628,10.8833333 4,10.2416081 4,9.45 C4,8.65839186 4.63937628,8.01666667 5.42808689,8.01666667 L5.42808689,8.01666667 L14.0037487,8.01666667 L14.0037487,4.43333333 C14.0037487,3.64172519 14.643125,3 15.4318356,3 L15.4318356,3 Z M38.1926845,10.8833333 L9.80802939,10.8833333 L13.2497188,41.8591 C13.3304676,42.5847271 13.9417707,43.1333334 14.6692372,43.1333334 L14.6692372,43.1333334 L33.3314767,43.1333334 C34.0589432,43.1333334 34.6702463,42.5847271 34.7509951,41.8591 L34.7509951,41.8591 L38.1926845,10.8833333 Z M28.2846176,14.4265333 C29.0733282,14.4265333 29.7127045,15.0682585 29.7127045,15.8598667 L29.7127045,15.8598667 L29.7127045,36.9040667 C29.7127045,37.6956748 29.0733282,38.3374 28.2846176,38.3374 C27.495907,38.3374 26.8565307,37.6956748 26.8565307,36.9040667 L26.8565307,36.9040667 L26.8565307,15.8598667 C26.8565307,15.0682585 27.495907,14.4265333 28.2846176,14.4265333 Z M20.4301397,14.4265333 C21.2188503,14.4265333 21.8582266,15.0682585 21.8582266,15.8598667 L21.8582266,15.8598667 L21.8582266,36.9040667 C21.8582266,37.6956748 21.2188503,38.3374 20.4301397,38.3374 C19.6414291,38.3374 19.0020528,37.6956748 19.0020528,36.9040667 L19.0020528,36.9040667 L19.0020528,15.8598667 C19.0020528,15.0682585 19.6414291,14.4265333 20.4301397,14.4265333 Z M31.1407914,5.86666667 L16.8599225,5.86666667 L16.8599225,8.01666667 L31.1407914,8.01666667 L31.1407914,5.86666667 Z", fillRule: "nonzero" }));
var td = {}, Wf = MS;
if (process.env.NODE_ENV === "production")
  td.createRoot = Wf.createRoot, td.hydrateRoot = Wf.hydrateRoot;
else {
  var Rv = Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  td.createRoot = function(o, e) {
    Rv.usingClientEntryPoint = !0;
    try {
      return Wf.createRoot(o, e);
    } finally {
      Rv.usingClientEntryPoint = !1;
    }
  }, td.hydrateRoot = function(o, e, a) {
    Rv.usingClientEntryPoint = !0;
    try {
      return Wf.hydrateRoot(o, e, a);
    } finally {
      Rv.usingClientEntryPoint = !1;
    }
  };
}
var KR = globalThis && globalThis.__rest || function(o, e) {
  var a = {};
  for (var s in o)
    Object.prototype.hasOwnProperty.call(o, s) && e.indexOf(s) < 0 && (a[s] = o[s]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, s = Object.getOwnPropertySymbols(o); u < s.length; u++)
      e.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(o, s[u]) && (a[s[u]] = o[s[u]]);
  return a;
};
const JR = (o) => {
  const e = window.getComputedStyle(o).position;
  return !(e === "absolute" || e === "relative");
}, ZR = ({ children: o, groupProps: e, divProps: a, transform: s, transformFunc: u }) => {
  const d = Yt.useRef(null);
  Yt.useRef();
  const [v] = Yt.useState(() => document.createElement("div")), g = Yt.useMemo(() => td.createRoot(v), [v]), _ = s ?? !0, m = () => {
    if (_ && d.current) {
      let R = d.current.getAbsoluteTransform().decompose();
      u && (R = u(R)), v.style.position = "absolute", v.style.zIndex = "10", v.style.top = "0px", v.style.left = "0px", v.style.transform = `translate(${R.x}px, ${R.y}px) rotate(${R.rotation}deg) scaleX(${R.scaleX}) scaleY(${R.scaleY})`, v.style.transformOrigin = "top left";
    } else
      v.style.position = "", v.style.zIndex = "", v.style.top = "", v.style.left = "", v.style.transform = "", v.style.transformOrigin = "";
    const E = a || {}, { style: T } = E, w = KR(E, ["style"]);
    Object.assign(v.style, T), Object.assign(v, w);
  };
  return Yt.useLayoutEffect(() => {
    var E;
    const T = d.current;
    if (!T)
      return;
    const w = (E = T.getStage()) === null || E === void 0 ? void 0 : E.container();
    if (w)
      return w.appendChild(v), _ && JR(w) && (w.style.position = "relative"), T.on("absoluteTransformChange", m), m(), () => {
        var M;
        T.off("absoluteTransformChange", m), (M = v.parentNode) === null || M === void 0 || M.removeChild(v);
      };
  }, [_]), Yt.useLayoutEffect(() => {
    m();
  }, [a]), Yt.useLayoutEffect(() => {
    g.render(o);
  }), Yt.useLayoutEffect(() => () => {
    g.unmount();
  }, []), Yt.createElement(Oo, Object.assign({ ref: d }, e));
};
var $R = ta.div(RS || (RS = _r([`
  position: relative;
  background: #000;
`], [`
  position: relative;
  background: #000;
`]))), ew = ta.div(DS || (DS = _r([`
  `, `
  display: var(--is-show);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 80px;
  padding: 14px 0 15px;
  background: #e2f0fe;
  box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
  border-radius: 10px;
  border: 1px solid var(--fill-color);
  font-size: 14px;
  font-weight: 500;
  color: var(--fill-color);
  line-height: 20px;
  opacity: var(--optaicy);
  transition: all 0.1s ease;
  box-sizing: border-box;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--fill-color);
    transition: inherit;
  }
`], [`
  `, `
  display: var(--is-show);
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 80px;
  padding: 14px 0 15px;
  background: #e2f0fe;
  box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);
  border-radius: 10px;
  border: 1px solid var(--fill-color);
  font-size: 14px;
  font-weight: 500;
  color: var(--fill-color);
  line-height: 20px;
  opacity: var(--optaicy);
  transition: all 0.1s ease;
  box-sizing: border-box;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--fill-color);
    transition: inherit;
  }
`])), function(o) {
  return vd(wS || (wS = _r([`
    --optaicy: `, `;
    --fill-color: `, `;
    --is-show: `, `;
  `], [`
    --optaicy: `, `;
    --fill-color: `, `;
    --is-show: `, `;
  `])), o.deleteAreaStatus === "active" ? 0.9 : 1, o.deleteAreaStatus === "active" ? "#ff6650" : "#0096ff", o.deleteAreaStatus === "none" ? "none" : "flex");
}), tw = Zg(function(o, e) {
  var a = uc(), s = a.width, u = a.height, d = a.activeTool, v = a.pencilConfig, g = a.textConfig, _ = a.handleSelectTool, m = Gv(), E = m.image, T = m.texts, w = m.lines, M = m.group, R = m.clipRect, z = m.setLines, k = m.setTexts, I = m.setImage, j = m.setBlurs, G = Fi([]), Z = G[0], U = G[1], V = Fi("none"), X = V[0], le = V[1], ee = Ln(null), Q = Ln(null), K = Ln(null), xe = Ln(null), pe = Ln(null), ke = Ln(null), lt = Ln(null), Ie = Ln(0), Le = Ln(1), oe = Ln(null), fe = js(function() {
    var Ee = M.rotation / 90 % 4 + 1, Me = [s, u * 0.8];
    Ee % 2 === 0 && (Me = [u * 0.8, s]);
    var dt = e0.apply(void 0, ea([
      R.width,
      R.height
    ], Me, !1))[0];
    return dt / R.width;
  }, [R, M.rotation]), de = js(function() {
    var Ee = s / 2, Me = u * 0.8 / 2, dt = M.x + (R.x + R.width / 2) * fe, Ke = M.y + (R.y + R.height / 2) * fe, Wt = AS(dt, Ke, M.rotation), _n = Wt[0], Oa = Wt[1], pa = isNaN(dt - Ee) ? 0 : _n - Ee, Cr = isNaN(Ke - Me) ? 0 : Oa - Me;
    return [pa, Cr];
  }, [M, R, M.rotation, fe]), Se = de[0], Xe = de[1], Ne = M.x - Se, Re = M.y - Xe, nt = function() {
    var Ee = K.current, Me = Ee.getRelativePointerPosition();
    d === "Pencil" ? (ke.current = new $4.Line(ot(ot({}, v), { strokeWidth: v.strokeWidth / fe, points: Me ? [Me.x, Me.y, Me.x, Me.y] : [] })), Ee.add(ke.current)) : d === "Blur" && U(function(dt) {
      return ea(ea([], dt, !0), [Me], !1);
    });
  }, Ct = function() {
    var Ee, Me = ke.current, dt = (Ee = K.current) === null || Ee === void 0 ? void 0 : Ee.getRelativePointerPosition();
    if (d === "Pencil" && Me) {
      var Ke = Me.points().concat([dt.x, dt.y]);
      Me.points(Ke);
    }
    d === "Blur" && Z.length && U(function(Wt) {
      return ea(ea([], Wt, !0), [dt], !1);
    });
  }, Ue = function() {
    var Ee = ke.current;
    d === "Pencil" && Ee && (z(function(Me) {
      return ea(ea([], Me, !0), [
        ot(ot({}, v), { strokeWidth: v.strokeWidth / fe, points: Ee.points() })
      ], !1);
    }), setTimeout(function() {
      Ee.destroy(), ke.current = null;
    }, 50)), d === "Blur" && (j(function(Me) {
      return ea(ea([], Me, !0), [Z], !1);
    }), U([]));
  }, st = function(Ee) {
    if (Ee) {
      var Me = g.fontSize / fe, dt = g.width / fe, Ke = Math.min(dt, Ee.length * Me);
      k(function(Wt) {
        return ea(ea([], Wt, !0), [
          ot(ot({}, g), { fontSize: Me, text: Ee, align: "center", width: Ke, x: M.width / 2, y: M.height / 2, offsetX: Ke / 2, offsetY: Me / 2, rotation: -M.rotation })
        ], !1);
      }), _(null);
    }
  }, rn = function(Ee) {
    var Me, dt = Ee.target, Ke = dt.absolutePosition(), Wt = dt.height(), _n = (Me = oe.current) === null || Me === void 0 ? void 0 : Me.y();
    Ke.y >= _n - Wt ? le("active") : le("show");
  }, cn = function(Ee) {
    var Me, dt = Ee.target, Ke = dt.attrs.id.slice(-1);
    switch (X) {
      case "show":
      case "none":
        var Wt = dt.position();
        k(function(_n) {
          return _n[Ke].x = Wt.x, _n[Ke].y = Wt.y, _n;
        });
        break;
      case "active":
        k(function(_n) {
          return _n.splice(Ke, 1), ea([], _n, !0);
        });
        break;
    }
    le("none"), dt == null || dt.moveTo(xe.current), X === "active" && ((Me = lt.current) === null || Me === void 0 || Me.nodes([]));
  }, Ft = function() {
    var Ee;
    (Ee = lt.current) === null || Ee === void 0 || Ee.nodes([]);
  }, Ce = function(Ee, Me) {
    I(Ee, Me), _(null);
  }, Gt = function(Ee) {
    var Me, dt, Ke, Wt;
    ["Blur", "Pencil"].includes(d) ? nt() : Ee.target.className === "Text" ? (Ee.target.moveTo(K.current), (Me = lt.current) === null || Me === void 0 || Me.nodes([Ee.target])) : Ee.target === pe.current && ((Ke = (dt = lt.current) === null || dt === void 0 ? void 0 : dt.nodes()[0]) === null || Ke === void 0 || Ke.moveTo(xe.current), (Wt = lt.current) === null || Wt === void 0 || Wt.nodes([]));
  }, fn = function(Ee) {
    var Me;
    ["Blur", "Pencil"].includes(d) ? nt() : Ee.target.className === "Text" && (Ee.target.moveTo(K.current), (Me = lt.current) === null || Me === void 0 || Me.nodes([Ee.target]));
  }, Cn = function(Ee) {
    Ee.evt.preventDefault(), ["Blur", "Pencil"].includes(d) && Ct();
  }, ar = function(Ee) {
    var Me, dt;
    if (Ee.evt.preventDefault(), ["Blur", "Pencil"].includes(d))
      Ct();
    else if (Ee.evt.touches.length > 1) {
      var Ke = lt.current.nodes()[0];
      Ke.draggable(!1);
      var Wt = Ee.evt.touches[0], _n = Ee.evt.touches[1];
      !((Me = ee.current) === null || Me === void 0) && Me.isDragging() && ((dt = ee.current) === null || dt === void 0 || dt.stopDrag());
      var Oa = {
        x: Wt.clientX,
        y: Wt.clientY
      }, pa = {
        x: _n.clientX,
        y: _n.clientY
      }, Cr = PS(Oa, pa);
      Ie.current || (Ie.current = Cr, Le.current = Ke.scaleX());
      var Gi = (Cr / Ie.current - 1) * 0.8 + 1, Za = Le.current * Gi;
      Ke.scaleX(Za), Ke.scaleY(Za);
    }
  }, ir = function(Ee) {
    ["Blur", "Pencil"].includes(d) && Ue();
  }, Qn = function(Ee) {
    ["Blur", "Pencil"].includes(d) && Ue();
    var Me = lt.current.nodes()[0];
    if (Me && Me.scaleX() > Le.current) {
      var dt = Me.attrs.id.slice(-1);
      k(function(Ke) {
        return Ke[dt].scaleX = Me.scaleX(), Ke[dt].scaleY = Me.scaleY(), ea([], Ke, !0);
      });
    }
    Me == null || Me.draggable(!0), Ie.current = 0, Le.current = 1;
  };
  return id(function() {
    var Ee;
    oe.current = (Ee = ee.current) === null || Ee === void 0 ? void 0 : Ee.findOne("#delete-area");
  }, []), C3(e, function() {
    return {
      exportImage: function() {
        var Ee;
        return (Ee = K.current) === null || Ee === void 0 ? void 0 : Ee.toDataURL({
          x: R.x * fe - Se,
          y: R.y * fe - Xe,
          width: R.width * fe,
          height: R.height * fe
        });
      }
    };
  }, [R]), Na($R, ot({ style: {
    width: s,
    height: u
  } }, { children: [vt(w_, ot({ ref: ee, width: s, height: u, onMouseDown: Gt, onTouchStart: fn, onMouseMove: Cn, onTouchMove: ar, onMouseUp: ir, onTouchEnd: Qn }, { children: Na(x_, ot({ ref: Q }, { children: [vt(Oo, ot({ ref: K, x: Ne, y: Re, width: M.width, height: M.height, scale: {
    x: fe,
    y: fe
  }, rotation: M.rotation }, { children: Na(Oo, ot({ ref: xe, clipX: R.x, clipY: R.y, clipHeight: R.height, clipWidth: R.width }, { children: [vt(b_, { ref: pe, image: E, width: M.width, height: M.height }), vt(B_, { currentBlur: Z }), T.map(function(Ee, Me) {
    return Ql(T_, ot({}, Ee, { key: Me, id: "text-".concat(Me), x: Ee.x, y: Ee.y, draggable: !0, onDragMove: rn, onDragEnd: cn }));
  }), w.map(function(Ee, Me) {
    return vt(E_, ot({}, Ee), Me);
  })] })) })), vt(ZR, ot({ groupProps: {
    id: "delete-area",
    y: u - 120,
    x: s / 2 - 75,
    width: 150,
    height: 80
  } }, { children: Na(ew, ot({ deleteAreaStatus: X }, { children: [vt(QR, {}), vt("div", { children: "Drag here to delete" })] })) })), vt(R_, { ref: lt, rotateEnabled: !1, resizeEnabled: !1, anchorStroke: "rgba(0,0,0,0)", anchorFill: "rgba(0,0,0,0)", borderStroke: "#ccc" })] })) })), d === "Cut" && vt(XR, { onCutDone: Ce }), d === "Words" && vt(BR, { onDone: st, onCancel: function() {
    return _(null);
  } }), X === "none" && vt(AR, { onSelect: Ft })] }));
}), RS, wS, DS, vw = Zg(function(o, e) {
  var a = o.image, s = o.width, u = s === void 0 ? window.innerWidth : s, d = o.height, v = d === void 0 ? window.innerHeight : d;
  return vt(w3, ot({ width: u, height: v }, { children: vt(B3, ot({ image: a }, { children: vt(tw, { ref: e }) })) }));
});
export {
  vw as default
};
