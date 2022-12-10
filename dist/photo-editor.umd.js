'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactKonva = require('react-konva');
var Konva = require('konva');
var styled = require('@emotion/styled');
var react = require('@emotion/react');
var IconPencil = require('assets/icons/icon-pencil.svg');
var IconWords = require('assets/icons/icon-words.svg');
var IconCut = require('assets/icons/icon-cut.svg');
var IconBlur = require('assets/icons/icon-blur.svg');
var IconRecall = require('assets/icons/icon-recall.svg');
var IconRotate = require('assets/icons/icon-rotate.svg');
var stateshot = require('stateshot');
var useImage = require('use-image');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Konva__default = /*#__PURE__*/_interopDefaultLegacy(Konva);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var IconPencil__default = /*#__PURE__*/_interopDefaultLegacy(IconPencil);
var IconWords__default = /*#__PURE__*/_interopDefaultLegacy(IconWords);
var IconCut__default = /*#__PURE__*/_interopDefaultLegacy(IconCut);
var IconBlur__default = /*#__PURE__*/_interopDefaultLegacy(IconBlur);
var IconRecall__default = /*#__PURE__*/_interopDefaultLegacy(IconRecall);
var IconRotate__default = /*#__PURE__*/_interopDefaultLegacy(IconRotate);
var useImage__default = /*#__PURE__*/_interopDefaultLegacy(useImage);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React__default["default"],k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = React__default["default"];

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

var EditorContext$1 = React__default["default"].createContext({
    width: 0,
    height: 0,
    pencilConfig: {
        stroke: '#df4b26',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
    },
    textConfig: {
        fill: '#df4b26',
        fontSize: 30,
        width: 300
    },
    editorColors: [
        '#FF2A1A',
        '#000000',
        '#999999',
        '#FF9416',
        '#F7673D',
        '#F9CA5A',
        '#19A049',
        '#24A8D0',
    ],
    activeTool: null,
    changeColor: function () { },
    handleSelectTool: function () { },
});

var EditorProvider = function (_a) {
    var children = _a.children, _b = _a.editorColors, editorColors = _b === void 0 ? [
        '#FF2A1A',
        '#000000',
        '#999999',
        '#FF9416',
        '#F7673D',
        '#F9CA5A',
        '#19A049',
        '#24A8D0',
    ] : _b, _c = _a.width, width = _c === void 0 ? 0 : _c, _d = _a.height, height = _d === void 0 ? 0 : _d;
    var _e = React.useState({
        stroke: editorColors[0],
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round',
    }), pencilConfig = _e[0], setPencilConfig = _e[1];
    var _f = React.useState({
        fontSize: 30,
        fill: editorColors[0],
        wrap: 'word',
        width: width * 0.9
    }), textConfig = _f[0], setTextConfig = _f[1];
    var _g = React.useState(null), activeTool = _g[0], setActiveTool = _g[1];
    var handleSelectTool = function (currentTool) {
        setActiveTool(function (preTool) {
            return preTool === currentTool ? null : currentTool;
        });
    };
    var handleColorChanged = function (color) {
        setPencilConfig(function (preConfig) { return (__assign({}, Object.assign(preConfig, {
            stroke: color,
        }))); });
        setTextConfig(function (preConfig) { return (__assign({}, Object.assign(preConfig, {
            fill: color,
        }))); });
    };
    return (jsxRuntime.exports.jsx(EditorContext$1.Provider, __assign({ value: {
            width: width,
            height: height - 100,
            pencilConfig: pencilConfig,
            textConfig: textConfig,
            editorColors: editorColors,
            activeTool: activeTool,
            changeColor: handleColorChanged,
            handleSelectTool: handleSelectTool,
        } }, { children: children })));
};

var useEditor = function () {
    var context = React.useContext(EditorContext$1);
    return context;
};

var EditorContext = React__default["default"].createContext({
    image: null,
    group: {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        rotation: 0,
    },
    clipRect: {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    },
    texts: [],
    lines: [],
    blurs: [],
    setLines: function () { },
    setTexts: function () { },
    setImage: function () { },
    setGroup: function () { },
    redo: function () { },
    undo: function () { },
});

var useHistory = function () {
    var context = React.useContext(EditorContext);
    return context;
};

var WordInputContext = React__default["default"].createContext({
    isShow: false,
    startInput: function () { },
});

var useWordInput = function () {
    var context = React.useContext(WordInputContext);
    return context;
};

var ToolsMap = [
    { icon: jsxRuntime.exports.jsx(IconPencil__default["default"], {}), name: 'Pencil' },
    { icon: jsxRuntime.exports.jsx(IconWords__default["default"], {}), name: 'Words' },
    { icon: jsxRuntime.exports.jsx(IconCut__default["default"], {}), name: 'Cut' },
    { icon: jsxRuntime.exports.jsx(IconBlur__default["default"], {}), name: 'Blur' },
    { icon: jsxRuntime.exports.jsx(IconRecall__default["default"], {}), name: 'Recall' },
];
var ToolContainer = styled__default["default"].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 60px;\n  background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);\n"])));
var ToolbarContainer = styled__default["default"].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 0;\n"], ["\n  display: flex;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 0;\n"])));
var ToolbarItem = React__default["default"].memo(styled__default["default"].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff;\n  line-height: 20px;\n  border: 1px solid transparent;\n  transition: all 0.3s ease-in-out;\n  svg {\n    width: 20px;\n    height: 20px;\n    margin-bottom: 2px;\n    fill: #fff;\n  }\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #fff;\n  line-height: 20px;\n  border: 1px solid transparent;\n  transition: all 0.3s ease-in-out;\n  svg {\n    width: 20px;\n    height: 20px;\n    margin-bottom: 2px;\n    fill: #fff;\n  }\n  ", "\n"])), function (props) {
    return props.isActive && react.css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n      color: #0096ff;\n      background: #e6f5ff;\n      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);\n      border-radius: 5px;\n      border: 1px solid #0096ff;\n      svg {\n        fill: #0096ff;\n      }\n    "], ["\n      color: #0096ff;\n      background: #e6f5ff;\n      box-shadow: 0px 0px 15px 0px rgba(0, 150, 255, 0.6);\n      border-radius: 5px;\n      border: 1px solid #0096ff;\n      svg {\n        fill: #0096ff;\n      }\n    "])));
}));
var ColorItem$1 = styled__default["default"].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  ", "\n"], ["\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  ", "\n"])), function (props) {
    return react.css(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n      background: ", ";\n      box-shadow: ", ";\n      border: ", ";\n    "], ["\n      background: ", ";\n      box-shadow: ", ";\n      border: ", ";\n    "])), props.color, props.color === props.currentColor ? '0px 0px 4px 0px #0096ff' : 'none', props.color === props.currentColor ? '1px solid #0096FF;' : '1px solid #FFFFFF');
});
var ColorSelector$1 = styled__default["default"].div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 130px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n"], ["\n  position: absolute;\n  bottom: 130px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n"])));
var Toolbar = function (_a) {
    var onAddText = _a.onAddText;
    var _b = useEditor(), activeTool = _b.activeTool, pencilConfig = _b.pencilConfig, editorColors = _b.editorColors, handleSelectTool = _b.handleSelectTool, changeColor = _b.changeColor;
    var undo = useHistory().undo;
    var startInput = useWordInput().startInput;
    var isColorSelectorShow = React.useMemo(function () {
        return ['Pencil'].includes(activeTool);
    }, [activeTool]);
    var handleToolSelect = function (tool) {
        switch (tool) {
            case 'Recall':
                undo();
                break;
            case 'Words':
                handleSelectTool('Words');
                startInput('', onAddText);
                break;
            case 'Cut':
                // onCutStart?.();
                handleSelectTool(tool);
                break;
            default:
                handleSelectTool(tool);
        }
    };
    return (jsxRuntime.exports.jsxs(ToolContainer, { children: [isColorSelectorShow && (jsxRuntime.exports.jsx(ColorSelector$1, { children: editorColors === null || editorColors === void 0 ? void 0 : editorColors.map(function (color) { return (jsxRuntime.exports.jsx(ColorItem$1, { color: color, currentColor: pencilConfig.stroke, onClick: function () { return changeColor(color); } }, color)); }) })), activeTool !== 'Cut' && (jsxRuntime.exports.jsx(ToolbarContainer, { children: ToolsMap.map(function (tool) { return (jsxRuntime.exports.jsxs(ToolbarItem, __assign({ onClick: function () { return handleToolSelect(tool.name); }, isActive: tool.name === activeTool }, { children: [tool.icon, jsxRuntime.exports.jsx("span", { children: tool.name })] }), tool.name)); }) }))] }));
};
var templateObject_1$3, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7$1;

var getImageSize = function (imageWidth, imageHeight, width, height) {
    var imageRatio = imageWidth / imageHeight;
    var containerRatio = width / height;
    return imageRatio < containerRatio
        ? [imageRatio * height, height]
        : [width, (1 / imageRatio) * width];
};
function rotatePoint(x, y, r) {
    var rRadians = r * (Math.PI / 180);
    var xOffset = x * Math.cos(rRadians) - y * Math.sin(rRadians);
    var yOffset = x * Math.sin(rRadians) + y * Math.cos(rRadians);
    return [xOffset, yOffset];
}
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCenter(p1, p2) {
    return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2,
    };
}

var AnchorPositons = [
    'top-left',
    'top-center',
    'top-right',
    'middle-left',
    'middle-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
];
var useAnchor = function () {
    var anchorsRef = React.useRef({});
    var drawAnchors = function (transformer) {
        for (var _i = 0, AnchorPositons_1 = AnchorPositons; _i < AnchorPositons_1.length; _i++) {
            var positon = AnchorPositons_1[_i];
            var rect = transformer.findOne(".".concat(positon));
            rect === null || rect === void 0 ? void 0 : rect.fillPriority('pattern');
            rect === null || rect === void 0 ? void 0 : rect.fillPatternRepeat('no-repeat');
            rect === null || rect === void 0 ? void 0 : rect.fillPatternImage(anchorsRef.current[positon]);
            rect === null || rect === void 0 ? void 0 : rect.strokeEnabled(false);
        }
        transformer === null || transformer === void 0 ? void 0 : transformer.getLayer().batchDraw();
    };
    React.useLayoutEffect(function () {
        for (var _i = 0, AnchorPositons_2 = AnchorPositons; _i < AnchorPositons_2.length; _i++) {
            var positon = AnchorPositons_2[_i];
            anchorsRef.current[positon] = anchorShapeCanvasFactory(positon);
        }
    }, []);
    return drawAnchors;
};
var anchorShapeCanvasFactory = function (position, color) {
    if (color === void 0) { color = '#0096FF'; }
    var canvas = document.createElement('canvas');
    canvas.width = 24;
    canvas.height = 24;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.lineCap = 'round';
    ctx.beginPath();
    switch (position) {
        case 'top-left':
            ctx.lineTo(10, 10);
            ctx.lineTo(24, 10);
            ctx.lineTo(24, 12);
            ctx.lineTo(12, 12);
            ctx.lineTo(12, 24);
            ctx.lineTo(10, 24);
            break;
        case 'top-center':
            ctx.lineTo(0, 14);
            ctx.lineTo(24, 14);
            ctx.lineTo(24, 12);
            ctx.lineTo(0, 12);
            break;
        case 'top-right':
            ctx.lineTo(0, 10);
            ctx.lineTo(14, 10);
            ctx.lineTo(14, 24);
            ctx.lineTo(12, 24);
            ctx.lineTo(12, 12);
            ctx.lineTo(0, 12);
            break;
        case 'bottom-center':
            ctx.lineTo(0, 10);
            ctx.lineTo(24, 10);
            ctx.lineTo(24, 12);
            ctx.lineTo(0, 12);
            break;
        case 'middle-left':
            ctx.lineTo(12, 0);
            ctx.lineTo(12, 24);
            ctx.lineTo(14, 24);
            ctx.lineTo(14, 0);
            break;
        case 'middle-right':
            ctx.lineTo(12, 0);
            ctx.lineTo(12, 24);
            ctx.lineTo(10, 24);
            ctx.lineTo(10, 0);
            break;
        case 'bottom-left':
            ctx.lineTo(12, 0);
            ctx.lineTo(12, 12);
            ctx.lineTo(24, 12);
            ctx.lineTo(24, 14);
            ctx.lineTo(10, 14);
            ctx.lineTo(10, 0);
            break;
        case 'bottom-right':
            ctx.lineTo(12, 12);
            ctx.lineTo(12, 0);
            ctx.lineTo(14, 0);
            ctx.lineTo(14, 14);
            ctx.lineTo(0, 14);
            ctx.lineTo(0, 12);
            break;
    }
    ctx.closePath();
    ctx.fill();
    return canvas;
};

var ClipContainer = styled__default["default"].div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #ccc;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #ccc;\n"])));
var InputActions$1 = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 20px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"], ["\n  position: fixed;\n  bottom: 20px;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"])));
var ClipStage = function (_a) {
    var onCutDone = _a.onCutDone;
    var _b = useHistory(), image = _b.image, texts = _b.texts, lines = _b.lines, group = _b.group, clipRect = _b.clipRect;
    var _c = useEditor(), width = _c.width, height = _c.height, handleSelectTool = _c.handleSelectTool;
    var drawAnchors = useAnchor();
    var scaleGroup = React.useRef(null);
    var currentImage = React.useRef(null);
    var stageRef = React.useRef(null);
    var reRef = React.useRef(null);
    var trRef = React.useRef(null);
    var lastCenter = React.useRef(null);
    var lastDist = React.useRef(0);
    var _d = React.useState(clipRect), clipInfo = _d[0], setClipInfo = _d[1];
    var _e = React.useState(group.rotation), rotation = _e[0], setRotaion = _e[1];
    var basicScaleRatio = React.useMemo(function () {
        var rotationStage = ((rotation / 90) % 4) + 1;
        var containerSize = [width, height];
        if (rotationStage % 2 === 0) {
            containerSize = [height, width];
        }
        var clipContainWidth = getImageSize.apply(void 0, __spreadArray([clipInfo.width, clipInfo.height], containerSize, false))[0];
        return clipContainWidth / clipInfo.width;
    }, [clipInfo, rotation]);
    var _f = React.useMemo(function () {
        var centerX = width / 2;
        var centerY = height / 2;
        var clipCenterX = group.x + (clipInfo.x + clipInfo.width / 2) * basicScaleRatio;
        var clipCenterY = group.y + (clipInfo.y + clipInfo.height / 2) * basicScaleRatio;
        var _a = rotatePoint(clipCenterX, clipCenterY, rotation), rdx = _a[0], rdy = _a[1];
        var dx = isNaN(clipCenterX - centerX) ? 0 : rdx - centerX;
        var dy = isNaN(clipCenterY - centerY) ? 0 : rdy - centerY;
        return [dx, dy];
    }, [group, clipInfo, rotation, basicScaleRatio]), dx = _f[0], dy = _f[1];
    var groupX = group.x - dx;
    var groupY = group.y - dy;
    var handleTransformEnd = function () {
        var _a, _b;
        var node = reRef.current;
        var scaleX = node.scaleX();
        var scaleY = node.scaleY();
        var currentRectBox = {
            width: node.width() * scaleX,
            height: node.height() * scaleY,
            x: +((_a = node.position().x) === null || _a === void 0 ? void 0 : _a.toFixed(5)),
            y: +((_b = node.position().y) === null || _b === void 0 ? void 0 : _b.toFixed(5)),
        };
        node.scaleX(1);
        node.scaleY(1);
        if (currentRectBox.x < 0) {
            currentRectBox.width += currentRectBox.x;
            currentRectBox.x = 0;
            node.x(0);
        }
        if (currentRectBox.y < 0) {
            currentRectBox.height += currentRectBox.y;
            currentRectBox.y = 0;
            node.y(0);
        }
        if (currentRectBox.x + currentRectBox.width > group.width) {
            currentRectBox.width = group.width - currentRectBox.x;
        }
        if (currentRectBox.y + currentRectBox.height > group.height) {
            currentRectBox.height = group.height - currentRectBox.y;
        }
        currentRectBox.height =
            currentRectBox.height < 0 ? -currentRectBox.height : currentRectBox.height;
        currentRectBox.width = currentRectBox.width < 0 ? -currentRectBox.width : currentRectBox.width;
        setClipInfo(currentRectBox);
    };
    var handleCutDown = function () {
        onCutDone(clipInfo, rotation);
    };
    var hanldeCutCancel = function () {
        handleSelectTool(null);
    };
    var hanldeRotate = function () {
        setRotaion(function (preRotation) { return preRotation + 90; });
    };
    // TODO: 缩放和图片裁剪位置关系
    var handleTouchMove = function (e) {
        var _a, _b, _c;
        e.evt.preventDefault();
        var touchTarget = scaleGroup.current;
        var touch1 = e.evt.touches[0];
        var touch2 = e.evt.touches[1];
        if (touch1 && touch2) {
            if ((_a = stageRef.current) === null || _a === void 0 ? void 0 : _a.isDragging()) {
                (_b = stageRef.current) === null || _b === void 0 ? void 0 : _b.stopDrag();
            }
            var p1 = {
                x: touch1.clientX,
                y: touch1.clientY,
            };
            var p2 = {
                x: touch2.clientX,
                y: touch2.clientY,
            };
            var newCenter = getCenter(p1, p2);
            if (!lastCenter.current) {
                lastCenter.current = newCenter;
                return;
            }
            var dist = getDistance(p1, p2);
            if (!lastDist.current) {
                lastDist.current = dist;
            }
            var pointTo = {
                x: (newCenter.x - touchTarget.x()) / touchTarget.scaleX(),
                y: (newCenter.y - touchTarget.y()) / touchTarget.scaleX(),
            };
            var scale = touchTarget.scaleX() * (dist / lastDist.current);
            touchTarget.scaleX(scale);
            touchTarget.scaleY(scale);
            var dx_1 = newCenter.x - lastCenter.current.x;
            var dy_1 = newCenter.y - lastCenter.current.y;
            var newPos = {
                x: newCenter.x - pointTo.x * scale + dx_1,
                y: newCenter.y - pointTo.y * scale + dy_1,
            };
            touchTarget.position(newPos);
            lastDist.current = dist;
            lastCenter.current = newCenter;
            return;
        }
        if (touch1) {
            if ((_c = trRef.current) === null || _c === void 0 ? void 0 : _c.isTransforming())
                return;
            var p1 = {
                x: touch1.clientX,
                y: touch1.clientY,
            };
            if (!lastCenter.current) {
                return (lastCenter.current = p1);
            }
            var dx_2 = p1.x - lastCenter.current.x;
            var dy_2 = p1.y - lastCenter.current.y;
            touchTarget.move({
                x: dx_2,
                y: dy_2,
            });
            lastCenter.current = p1;
        }
    };
    var handleTouchEnd = function () {
        lastDist.current = 0;
        lastCenter.current = null;
        var node = reRef.current;
        var touchTarget = scaleGroup.current;
        var scaleX = touchTarget.scaleX();
        var scaleY = touchTarget.scaleY();
        // if (scaleX * basicScaleRatio < 1 || scaleY * basicScaleRatio < 1) {
        //   return touchTarget.to({
        //     scaleX: 1,
        //     scaleY: 1,
        //     x: 0,
        //     y: 0,
        //     duration: 0.1,
        //   });
        // }
        var currentRectBox = {
            width: node.width() / scaleX,
            height: node.height() / scaleY,
            x: (node.position().x - touchTarget.x()) / scaleX,
            y: (node.position().y - touchTarget.y()) / scaleY,
        };
        touchTarget.scaleX(1);
        touchTarget.scaleY(1);
        touchTarget.position({
            x: 0,
            y: 0,
        });
        if (currentRectBox.x < 0) {
            currentRectBox.width += currentRectBox.x;
            currentRectBox.x = 0;
            node.x(0);
        }
        if (currentRectBox.y < 0) {
            currentRectBox.height += currentRectBox.y;
            currentRectBox.y = 0;
            node.y(0);
        }
        // TODO: 限制裁剪合理化
        if (currentRectBox.x + currentRectBox.width > group.width) {
            currentRectBox.width = group.width - currentRectBox.x;
        }
        if (currentRectBox.y + currentRectBox.height > group.height) {
            currentRectBox.height = group.height - currentRectBox.y;
        }
        currentRectBox.height =
            currentRectBox.height < 0 ? -currentRectBox.height : currentRectBox.height;
        currentRectBox.width = currentRectBox.width < 0 ? -currentRectBox.width : currentRectBox.width;
        setClipInfo(currentRectBox);
    };
    React.useLayoutEffect(function () {
        var _a;
        (_a = trRef.current) === null || _a === void 0 ? void 0 : _a.nodes([reRef.current]);
        drawAnchors(trRef.current);
    }, []);
    return (jsxRuntime.exports.jsxs(ClipContainer, { children: [jsxRuntime.exports.jsx(reactKonva.Stage, __assign({ ref: stageRef, width: width, height: height, scale: {
                    x: 0.96,
                    y: 0.96,
                }, x: width * 0.02, y: height * 0.02, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd }, { children: jsxRuntime.exports.jsxs(reactKonva.Layer, { children: [jsxRuntime.exports.jsxs(reactKonva.Group, __assign({ x: groupX, y: groupY, width: group.width, height: group.height, scaleX: basicScaleRatio, scaleY: basicScaleRatio, rotation: rotation }, { children: [jsxRuntime.exports.jsxs(reactKonva.Group, __assign({ ref: scaleGroup }, { children: [jsxRuntime.exports.jsx(reactKonva.Image, { ref: currentImage, image: image, width: group.width, height: group.height }), texts.map(function (text, index) { return (jsxRuntime.exports.jsx(reactKonva.Text, __assign({ draggable: true }, text), index)); }), lines.map(function (line, index) { return (jsxRuntime.exports.jsx(reactKonva.Line, __assign({}, line), index)); })] })), jsxRuntime.exports.jsx(reactKonva.Rect, { ref: reRef, x: clipInfo.x, y: clipInfo.y, width: clipInfo.width, height: clipInfo.height, fill: 'green', opacity: 0.3, onTransformEnd: handleTransformEnd })] })), jsxRuntime.exports.jsx(reactKonva.Transformer, { ref: trRef, rotateEnabled: false, anchorSize: 24 })] }) })), jsxRuntime.exports.jsxs(InputActions$1, { children: [jsxRuntime.exports.jsx("div", __assign({ onClick: hanldeCutCancel }, { children: "Cancel" })), jsxRuntime.exports.jsx(IconRotate__default["default"], { width: 24, height: 24, onClick: hanldeRotate }), jsxRuntime.exports.jsx("div", __assign({ onClick: handleCutDown }, { children: "Done" }))] })] }));
};
var templateObject_1$2, templateObject_2$1;

var StageContainer = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  &::before,\n  &::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 180px;\n    content: '';\n    background: linear-gradient(180deg, rgba(34, 34, 34, 0.94) 0%, rgba(71, 71, 71, 0) 100%);\n    z-index: -1;\n    mix-blend-mode: darken;\n  }\n  &::after {\n    top: unset;\n    bottom: 0;\n    height: 180px;\n    background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  &::before,\n  &::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 180px;\n    content: '';\n    background: linear-gradient(180deg, rgba(34, 34, 34, 0.94) 0%, rgba(71, 71, 71, 0) 100%);\n    z-index: -1;\n    mix-blend-mode: darken;\n  }\n  &::after {\n    top: unset;\n    bottom: 0;\n    height: 180px;\n    background: linear-gradient(180deg, rgba(71, 71, 71, 0) 0%, #222222 100%);\n  }\n"])));
var EditorStage = function () {
    var _a = useEditor(), width = _a.width, height = _a.height, activeTool = _a.activeTool, pencilConfig = _a.pencilConfig, textConfig = _a.textConfig, handleSelectTool = _a.handleSelectTool;
    var _b = useHistory(), image = _b.image, texts = _b.texts, lines = _b.lines, group = _b.group, clipRect = _b.clipRect, setLines = _b.setLines, setTexts = _b.setTexts, setImage = _b.setImage;
    var stage = React.useRef(null);
    var layer = React.useRef(null);
    var scaleGroup = React.useRef(null);
    var currentImage = React.useRef(null);
    var currentLine = React.useRef(null);
    var basicScaleRatio = React.useMemo(function () {
        var rotationStage = ((group.rotation / 90) % 4) + 1;
        var containerSize = [width, height];
        if (rotationStage % 2 === 0) {
            containerSize = [height, width];
        }
        var clipContainWidth = getImageSize.apply(void 0, __spreadArray([clipRect.width, clipRect.height], containerSize, false))[0];
        return clipContainWidth / clipRect.width;
    }, [clipRect, group.rotation]);
    var _c = React.useMemo(function () {
        var centerX = width / 2;
        var centerY = height / 2;
        var clipCenterX = group.x + (clipRect.x + clipRect.width / 2) * basicScaleRatio;
        var clipCenterY = group.y + (clipRect.y + clipRect.height / 2) * basicScaleRatio;
        var _a = rotatePoint(clipCenterX, clipCenterY, group.rotation), rdx = _a[0], rdy = _a[1];
        var dx = isNaN(clipCenterX - centerX) ? 0 : rdx - centerX;
        var dy = isNaN(clipCenterY - centerY) ? 0 : rdy - centerY;
        return [dx, dy];
    }, [group, clipRect, group.rotation, basicScaleRatio]), dx = _c[0], dy = _c[1];
    var groupX = group.x - dx;
    var groupY = group.y - dy;
    var handleDrawStart = function () {
        var drawTarget = scaleGroup.current;
        var pos = drawTarget.getRelativePointerPosition();
        currentLine.current = new Konva__default["default"].Line(__assign(__assign({}, pencilConfig), { strokeWidth: pencilConfig.strokeWidth / basicScaleRatio, points: pos ? [pos.x, pos.y, pos.x, pos.y] : [] }));
        drawTarget.add(currentLine.current);
    };
    var handleDraw = function () {
        var _a;
        var lastLine = currentLine.current;
        if (lastLine === null) {
            return;
        }
        var pos = (_a = scaleGroup.current) === null || _a === void 0 ? void 0 : _a.getRelativePointerPosition();
        var newPoints = lastLine.points().concat([pos.x, pos.y]);
        lastLine.points(newPoints);
    };
    var handleDrawEnd = function () {
        setLines(function (preLines) {
            var _a;
            return __spreadArray(__spreadArray([], preLines, true), [
                __assign(__assign({}, pencilConfig), { strokeWidth: pencilConfig.strokeWidth / basicScaleRatio, points: (_a = currentLine.current) === null || _a === void 0 ? void 0 : _a.points() }),
            ], false);
        });
        setTimeout(function () {
            var _a;
            (_a = currentLine.current) === null || _a === void 0 ? void 0 : _a.destroy();
            currentLine.current = null;
        }, 50);
    };
    var handleTextAdd = function (text) {
        var fontSize = textConfig.fontSize / basicScaleRatio;
        var maxWidth = textConfig.width / basicScaleRatio;
        var textWidth = text.length * fontSize > maxWidth ? maxWidth : text.length * fontSize;
        setTexts(function (preTexts) { return __spreadArray(__spreadArray([], preTexts, true), [
            __assign(__assign({}, textConfig), { fontSize: fontSize, text: text, align: 'center', width: textWidth, x: clipRect.x + clipRect.width / 2 - textWidth / 2, y: clipRect.y + clipRect.height / 2 }),
        ], false); });
    };
    // TODO: ts
    var handleCut = function (clipInfo, rotation) {
        setImage(clipInfo, rotation);
        setTimeout(function () {
            handleSelectTool(null);
        }, 50);
    };
    var handleMouseDown = function (e) {
        switch (activeTool) {
            case 'Pencil':
                handleDrawStart();
                break;
        }
    };
    var handleTouchStart = function (e) {
        switch (activeTool) {
            case 'Pencil':
                handleDrawStart();
                break;
        }
    };
    var handleMouseMove = function (e) {
        e.evt.preventDefault();
        switch (activeTool) {
            case 'Pencil':
                handleDraw();
                break;
        }
    };
    var handleTouchMove = function (e) {
        e.evt.preventDefault();
        switch (activeTool) {
            case 'Pencil':
                handleDraw();
                break;
        }
    };
    var handleMouseUp = function (e) {
        switch (activeTool) {
            case 'Pencil':
                handleDrawEnd();
                break;
        }
    };
    var handleTouchEnd = function (e) {
        switch (activeTool) {
            case 'Pencil':
                handleDrawEnd();
                break;
        }
    };
    return (jsxRuntime.exports.jsxs(StageContainer, { children: [jsxRuntime.exports.jsx(reactKonva.Stage, __assign({ ref: stage, width: width, height: height, onMouseDown: handleMouseDown, onTouchStart: handleTouchStart, onMouseMove: handleMouseMove, onTouchMove: handleTouchMove, onMouseUp: handleMouseUp, onTouchEnd: handleTouchEnd }, { children: jsxRuntime.exports.jsx(reactKonva.Layer, __assign({ ref: layer }, { children: jsxRuntime.exports.jsxs(reactKonva.Group, __assign({ id: 'scale', ref: scaleGroup, x: groupX, y: groupY, width: group.width, height: group.height, scale: {
                            x: basicScaleRatio,
                            y: basicScaleRatio,
                        }, rotation: group.rotation, clipX: clipRect.x, clipY: clipRect.y, clipHeight: clipRect.height, clipWidth: clipRect.width }, { children: [jsxRuntime.exports.jsx(reactKonva.Image, { ref: currentImage, image: image, width: group.width, height: group.height }), texts.map(function (text, index) { return (jsxRuntime.exports.jsx(reactKonva.Text, __assign({ draggable: true }, text), index)); }), lines.map(function (line, index) { return (jsxRuntime.exports.jsx(reactKonva.Line, __assign({}, line), index)); })] })) })) })), activeTool === 'Cut' && jsxRuntime.exports.jsx(ClipStage, { onCutDone: handleCut }), jsxRuntime.exports.jsx(Toolbar, { onAddText: handleTextAdd })] }));
};
var templateObject_1$1;

var HistoryProvider = function (_a) {
    var children = _a.children, imageUrl = _a.image;
    var _b = useEditor(), width = _b.width, height = _b.height;
    var _c = React.useState({
        image: null,
        group: {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            rotation: 0,
        },
        clipRect: {
            width: 0,
            height: 0,
            x: 0,
            y: 0,
        },
        lines: [],
        texts: [],
        blurs: [],
    }), state = _c[0], setState = _c[1];
    var stateRef = React.useRef(state);
    stateRef.current = state;
    var _d = useImage__default["default"](imageUrl), mainImage = _d[0], imageStatus = _d[1];
    var handleDataChange = function (state) {
        console.log('historyChange', state);
        setState(state);
        stateRef.current = state;
    };
    var history = React.useRef();
    var handleLineChange = function (callback) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.push(__assign(__assign({}, stateRef.current), { lines: callback(stateRef.current.lines) }));
    };
    var handleTextChange = function (callback) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.push(__assign(__assign({}, stateRef.current), { texts: callback(stateRef.current.texts) }));
    };
    var handleImagechange = function (clipRect, rotation) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.push(__assign(__assign({}, stateRef.current), { clipRect: Object.assign({}, stateRef.current.clipRect, clipRect), group: Object.assign({}, stateRef.current.group, { rotation: rotation }) }));
    };
    var handleGroupChange = function (groupConfig) {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.push(__assign(__assign({}, stateRef.current), { group: Object.assign({}, stateRef.current.group, groupConfig) }));
    };
    var handleRedo = function () {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.redo().get();
    };
    var handleUndo = function () {
        var _a;
        (_a = history.current) === null || _a === void 0 ? void 0 : _a.undo().get();
    };
    React.useLayoutEffect(function () {
        if (imageStatus === 'loaded' && mainImage) {
            var _a = getImageSize(mainImage.width, mainImage.height, width, height), imageWidth_1 = _a[0], imageHeight_1 = _a[1];
            history.current = new stateshot.History({
                initialState: __assign(__assign({}, stateRef.current), { image: mainImage, group: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                    }, clipRect: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                    } }),
                useChunks: false,
                delay: 0,
                onChange: handleDataChange,
            });
            setState(function (preVal) {
                return __assign(__assign({}, preVal), { image: mainImage, group: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                        rotation: 0,
                    }, clipRect: {
                        width: imageWidth_1,
                        height: imageHeight_1,
                        x: 0,
                        y: 0,
                    } });
            });
            console.log(history.current);
        }
    }, [imageStatus]);
    return (jsxRuntime.exports.jsx(EditorContext.Provider, __assign({ value: __assign(__assign({}, state), { setGroup: handleGroupChange, setLines: handleLineChange, setTexts: handleTextChange, setImage: handleImagechange, redo: handleRedo, undo: handleUndo }) }, { children: children })));
};

var useVisualViewport = function (callback) {
    var _a = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    }), viewport = _a[0], setViewport = _a[1];
    React.useEffect(function () {
        var _a, _b;
        var handler = function () {
            if (!window.visualViewport)
                return;
            setViewport({
                width: window.visualViewport.width,
                height: window.visualViewport.height,
            });
        };
        (_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.addEventListener('resize', handler);
        (_b = window.visualViewport) === null || _b === void 0 ? void 0 : _b.addEventListener('scroll', handler);
        return function () {
            var _a, _b;
            (_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.removeEventListener('resize', handler);
            (_b = window.visualViewport) === null || _b === void 0 ? void 0 : _b.removeEventListener('scroll', handler);
        };
    }, []);
    React.useEffect(function () {
        callback === null || callback === void 0 ? void 0 : callback();
    }, [viewport]);
    return viewport;
};

var ColorItemStyle = function (props) { return react.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: ", ";\n  border: ", ";\n"], ["\n  background: ", ";\n  box-shadow: ", ";\n  border: ", ";\n"])), props.color, props.color === props.currentColor ? '0px 0px 4px 0px rgba(0,150,255,1)' : 'none', props.color === props.currentColor ? '1px solid #0096FF;' : '1px solid #FFFFFF'); };
var ColorItem = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  color: #fff;\n  background: #fff;\n  ", "\n  &::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 30px;\n    height: 30px;\n    transform: translate(-50%, -50%);\n    content: '';\n  }\n"], ["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  color: #fff;\n  background: #fff;\n  ", "\n  &::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 30px;\n    height: 30px;\n    transform: translate(-50%, -50%);\n    content: '';\n  }\n"])), ColorItemStyle);
var ColorSelectorStyle = function (props) { return react.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  transform: translateY(calc(", "px - 100%));\n"], ["\n  transform: translateY(calc(", "px - 100%));\n"])), props.viewprotHeight - 20); };
var ColorSelector = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n  transition: transform 0.2s ease;\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0 30px;\n  transition: transform 0.2s ease;\n  ", "\n"])), ColorSelectorStyle);
var WordInputModal = styled__default["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 100px 15px;\n  background: rgba(0, 0, 0, 0.5);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding: 100px 15px;\n  background: rgba(0, 0, 0, 0.5);\n"])));
var InputArea = styled__default["default"].textarea(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 105px;\n  padding: 0 12px;\n  background: #ffffff;\n  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);\n  border-radius: 8px;\n  border: 1px solid #38a1f6;\n  resize: none;\n  font-size: 30px;\n  font-weight: 500;\n  color: #222222;\n  line-height: 42px;\n"], ["\n  width: 100%;\n  height: 105px;\n  padding: 0 12px;\n  background: #ffffff;\n  box-shadow: 0px 0px 8px 0px rgba(0, 150, 255, 0.4);\n  border-radius: 8px;\n  border: 1px solid #38a1f6;\n  resize: none;\n  font-size: 30px;\n  font-weight: 500;\n  color: #222222;\n  line-height: 42px;\n"])));
var InputActions = styled__default["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 12px 20px;\n  font-size: 16px;\n  font-weight: 400;\n  color: #ffffff;\n  line-height: 16px;\n  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  div {\n    position: relative;\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: 200%;\n      height: 200%;\n      content: '';\n      transform: translate(-50%, -50%);\n    }\n  }\n"])));
var WordInputProvider = function (_a) {
    var children = _a.children;
    var textareaEl = React.useRef(null);
    var successCallback = React.useRef();
    var viewprot = useVisualViewport(function () {
        var _a;
        (_a = textareaEl.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    var _b = useEditor(), editorColors = _b.editorColors, textConfig = _b.textConfig, changeColor = _b.changeColor;
    var _c = React.useState(false), isInputShow = _c[0], setIsInputShow = _c[1];
    var handleShow = function (defaultWord, onSuccess) {
        var _a;
        if (defaultWord === void 0) { defaultWord = ''; }
        ReactDOM.flushSync(function () {
            setIsInputShow(true);
        });
        (_a = textareaEl.current) === null || _a === void 0 ? void 0 : _a.focus();
        textareaEl.current.value = defaultWord;
        successCallback.current = onSuccess;
    };
    var handleCancel = function (e) {
        e.stopPropagation();
        setIsInputShow(false);
    };
    var hanldeDone = function (e) {
        var _a;
        e.stopPropagation();
        (_a = successCallback.current) === null || _a === void 0 ? void 0 : _a.call(successCallback, textareaEl.current.value);
        setIsInputShow(false);
    };
    var handleChangeColor = function (e, color) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        changeColor(color);
        (_a = textareaEl.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    return (jsxRuntime.exports.jsxs(WordInputContext.Provider, __assign({ value: {
            isShow: isInputShow,
            startInput: handleShow,
        } }, { children: [children, isInputShow &&
                ReactDOM__default["default"].createPortal(jsxRuntime.exports.jsxs(WordInputModal, __assign({ onClick: function (e) { return e.stopPropagation(); } }, { children: [jsxRuntime.exports.jsxs(InputActions, { children: [jsxRuntime.exports.jsx("div", __assign({ onClick: handleCancel }, { children: "Cancel" })), jsxRuntime.exports.jsx("div", __assign({ onClick: hanldeDone }, { children: "Done" }))] }), jsxRuntime.exports.jsx(InputArea, { ref: textareaEl, autoComplete: 'off', wrap: 'hard', style: { color: textConfig.fill } }), jsxRuntime.exports.jsx(ColorSelector, __assign({ viewprotHeight: viewprot.height }, { children: editorColors === null || editorColors === void 0 ? void 0 : editorColors.map(function (color) { return (jsxRuntime.exports.jsx(ColorItem, { color: color, currentColor: textConfig.fill, onClick: function (e) { return handleChangeColor(e, color); } }, color)); }) }))] })), document.body)] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

// TODO: i18n
// TODO: 配置项完善
// TODO: 马赛克
var Editor = function (_a) {
    var image = _a.image, width = _a.width, height = _a.height;
    return (jsxRuntime.exports.jsx(EditorProvider, __assign({ width: width, height: height }, { children: jsxRuntime.exports.jsx(HistoryProvider, __assign({ image: image }, { children: jsxRuntime.exports.jsx(WordInputProvider, { children: jsxRuntime.exports.jsx(EditorStage, { image: image }) }) })) })));
};

exports.Editor = Editor;
