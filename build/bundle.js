/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _assertThisInitialized;\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _extends;\nfunction _extends() {\n  exports.default = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _inheritsLoose;\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _objectWithoutPropertiesLoose;\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ReactReduxContext = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ReactReduxContext = exports.ReactReduxContext = _react2.default.createContext(null);\nexports.default = ReactReduxContext;\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Context.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _inheritsLoose2 = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n\nvar _inheritsLoose3 = _interopRequireDefault(_inheritsLoose2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _Context = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Provider =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inheritsLoose3.default)(Provider, _Component);\n\n  function Provider(props) {\n    var _this;\n\n    _this = _Component.call(this, props) || this;\n    var store = props.store;\n    _this.state = {\n      storeState: store.getState(),\n      store: store\n    };\n    return _this;\n  }\n\n  var _proto = Provider.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    this._isMounted = true;\n    this.subscribe();\n  };\n\n  _proto.componentWillUnmount = function componentWillUnmount() {\n    if (this.unsubscribe) this.unsubscribe();\n    this._isMounted = false;\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {\n    if (this.props.store !== prevProps.store) {\n      if (this.unsubscribe) this.unsubscribe();\n      this.subscribe();\n    }\n  };\n\n  _proto.subscribe = function subscribe() {\n    var _this2 = this;\n\n    var store = this.props.store;\n    this.unsubscribe = store.subscribe(function () {\n      var newStoreState = store.getState();\n\n      if (!_this2._isMounted) {\n        return;\n      }\n\n      _this2.setState(function (providerState) {\n        // If the value is the same, skip the unnecessary state update.\n        if (providerState.storeState === newStoreState) {\n          return null;\n        }\n\n        return {\n          storeState: newStoreState\n        };\n      });\n    }); // Actions might have been dispatched between render and mount - handle those\n\n    var postMountStoreState = store.getState();\n\n    if (postMountStoreState !== this.state.storeState) {\n      this.setState({\n        storeState: postMountStoreState\n      });\n    }\n  };\n\n  _proto.render = function render() {\n    var Context = this.props.context || _Context.ReactReduxContext;\n    return _react2.default.createElement(Context.Provider, {\n      value: this.state\n    }, this.props.children);\n  };\n\n  return Provider;\n}(_react.Component);\n\nProvider.propTypes = {\n  store: _propTypes2.default.shape({\n    subscribe: _propTypes2.default.func.isRequired,\n    dispatch: _propTypes2.default.func.isRequired,\n    getState: _propTypes2.default.func.isRequired\n  }),\n  context: _propTypes2.default.object,\n  children: _propTypes2.default.any\n};\nexports.default = Provider;\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Provider.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = connectAdvanced;\n\nvar _assertThisInitialized2 = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\nvar _assertThisInitialized3 = _interopRequireDefault(_assertThisInitialized2);\n\nvar _inheritsLoose2 = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n\nvar _inheritsLoose3 = _interopRequireDefault(_inheritsLoose2);\n\nvar _extends2 = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _objectWithoutPropertiesLoose2 = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nvar _objectWithoutPropertiesLoose3 = _interopRequireDefault(_objectWithoutPropertiesLoose2);\n\nvar _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\");\n\nvar _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);\n\nvar _invariant = __webpack_require__(/*! invariant */ \"invariant\");\n\nvar _invariant2 = _interopRequireDefault(_invariant);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactIs = __webpack_require__(/*! react-is */ \"react-is\");\n\nvar _Context = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar stringifyComponent = function stringifyComponent(Comp) {\n  try {\n    return JSON.stringify(Comp);\n  } catch (err) {\n    return String(Comp);\n  }\n};\n\nfunction connectAdvanced(\n/*\n  selectorFactory is a func that is responsible for returning the selector function used to\n  compute new props from state, props, and dispatch. For example:\n     export default connectAdvanced((dispatch, options) => (state, props) => ({\n      thing: state.things[props.thingId],\n      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),\n    }))(YourComponent)\n   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators\n  outside of their selector as an optimization. Options passed to connectAdvanced are passed to\n  the selectorFactory, along with displayName and WrappedComponent, as the second argument.\n   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound\n  props. Do not use connectAdvanced directly without memoizing results between calls to your\n  selector, otherwise the Connect component will re-render on every state or props change.\n*/\nselectorFactory, // options object:\n_ref) {\n  if (_ref === void 0) {\n    _ref = {};\n  }\n\n  var _ref2 = _ref,\n      _ref2$getDisplayName = _ref2.getDisplayName,\n      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {\n    return \"ConnectAdvanced(\" + name + \")\";\n  } : _ref2$getDisplayName,\n      _ref2$methodName = _ref2.methodName,\n      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,\n      _ref2$renderCountProp = _ref2.renderCountProp,\n      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,\n      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,\n      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,\n      _ref2$storeKey = _ref2.storeKey,\n      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,\n      _ref2$withRef = _ref2.withRef,\n      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,\n      _ref2$forwardRef = _ref2.forwardRef,\n      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,\n      _ref2$context = _ref2.context,\n      context = _ref2$context === void 0 ? _Context.ReactReduxContext : _ref2$context,\n      connectOptions = (0, _objectWithoutPropertiesLoose3.default)(_ref2, [\"getDisplayName\", \"methodName\", \"renderCountProp\", \"shouldHandleStateChanges\", \"storeKey\", \"withRef\", \"forwardRef\", \"context\"]);\n\n  (0, _invariant2.default)(renderCountProp === undefined, \"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension\");\n  (0, _invariant2.default)(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');\n  var customStoreWarningMessage = 'To use a custom Redux store for specific components,  create a custom React context with ' + \"React.createContext(), and pass the context object to React Redux's Provider and specific components\" + ' like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';\n  (0, _invariant2.default)(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);\n  var Context = context;\n  return function wrapWithConnect(WrappedComponent) {\n    if (true) {\n      (0, _invariant2.default)((0, _reactIs.isValidElementType)(WrappedComponent), \"You must pass a component to the function returned by \" + (methodName + \". Instead received \" + stringifyComponent(WrappedComponent)));\n    }\n\n    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';\n    var displayName = getDisplayName(wrappedComponentName);\n\n    var selectorFactoryOptions = (0, _extends3.default)({}, connectOptions, {\n      getDisplayName: getDisplayName,\n      methodName: methodName,\n      renderCountProp: renderCountProp,\n      shouldHandleStateChanges: shouldHandleStateChanges,\n      storeKey: storeKey,\n      displayName: displayName,\n      wrappedComponentName: wrappedComponentName,\n      WrappedComponent: WrappedComponent\n    });\n\n    var pure = connectOptions.pure;\n    var OuterBaseComponent = _react.Component;\n\n    if (pure) {\n      OuterBaseComponent = _react.PureComponent;\n    }\n\n    function makeDerivedPropsSelector() {\n      var lastProps;\n      var lastState;\n      var lastDerivedProps;\n      var lastStore;\n      var lastSelectorFactoryOptions;\n      var sourceSelector;\n      return function selectDerivedProps(state, props, store, selectorFactoryOptions) {\n        if (pure && lastProps === props && lastState === state) {\n          return lastDerivedProps;\n        }\n\n        if (store !== lastStore || lastSelectorFactoryOptions !== selectorFactoryOptions) {\n          lastStore = store;\n          lastSelectorFactoryOptions = selectorFactoryOptions;\n          sourceSelector = selectorFactory(store.dispatch, selectorFactoryOptions);\n        }\n\n        lastProps = props;\n        lastState = state;\n        var nextProps = sourceSelector(state, props);\n        lastDerivedProps = nextProps;\n        return lastDerivedProps;\n      };\n    }\n\n    function makeChildElementSelector() {\n      var lastChildProps, lastForwardRef, lastChildElement, lastComponent;\n      return function selectChildElement(WrappedComponent, childProps, forwardRef) {\n        if (childProps !== lastChildProps || forwardRef !== lastForwardRef || lastComponent !== WrappedComponent) {\n          lastChildProps = childProps;\n          lastForwardRef = forwardRef;\n          lastComponent = WrappedComponent;\n          lastChildElement = _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, childProps, {\n            ref: forwardRef\n          }));\n        }\n\n        return lastChildElement;\n      };\n    }\n\n    var Connect =\n    /*#__PURE__*/\n    function (_OuterBaseComponent) {\n      (0, _inheritsLoose3.default)(Connect, _OuterBaseComponent);\n\n      function Connect(props) {\n        var _this;\n\n        _this = _OuterBaseComponent.call(this, props) || this;\n        (0, _invariant2.default)(forwardRef ? !props.wrapperProps[storeKey] : !props[storeKey], 'Passing redux store in props has been removed and does not do anything. ' + customStoreWarningMessage);\n        _this.selectDerivedProps = makeDerivedPropsSelector();\n        _this.selectChildElement = makeChildElementSelector();\n        _this.indirectRenderWrappedComponent = _this.indirectRenderWrappedComponent.bind((0, _assertThisInitialized3.default)(_this));\n        return _this;\n      }\n\n      var _proto = Connect.prototype;\n\n      _proto.indirectRenderWrappedComponent = function indirectRenderWrappedComponent(value) {\n        // calling renderWrappedComponent on prototype from indirectRenderWrappedComponent bound to `this`\n        return this.renderWrappedComponent(value);\n      };\n\n      _proto.renderWrappedComponent = function renderWrappedComponent(value) {\n        (0, _invariant2.default)(value, \"Could not find \\\"store\\\" in the context of \" + (\"\\\"\" + displayName + \"\\\". Either wrap the root component in a <Provider>, \") + \"or pass a custom React context provider to <Provider> and the corresponding \" + (\"React context consumer to \" + displayName + \" in connect options.\"));\n        var storeState = value.storeState,\n            store = value.store;\n        var wrapperProps = this.props;\n        var forwardedRef;\n\n        if (forwardRef) {\n          wrapperProps = this.props.wrapperProps;\n          forwardedRef = this.props.forwardedRef;\n        }\n\n        var derivedProps = this.selectDerivedProps(storeState, wrapperProps, store, selectorFactoryOptions);\n        return this.selectChildElement(WrappedComponent, derivedProps, forwardedRef);\n      };\n\n      _proto.render = function render() {\n        var ContextToUse = this.props.context && this.props.context.Consumer && (0, _reactIs.isContextConsumer)(_react2.default.createElement(this.props.context.Consumer, null)) ? this.props.context : Context;\n        return _react2.default.createElement(ContextToUse.Consumer, null, this.indirectRenderWrappedComponent);\n      };\n\n      return Connect;\n    }(OuterBaseComponent);\n\n    Connect.WrappedComponent = WrappedComponent;\n    Connect.displayName = displayName;\n\n    if (forwardRef) {\n      var forwarded = _react2.default.forwardRef(function forwardConnectRef(props, ref) {\n        return _react2.default.createElement(Connect, {\n          wrapperProps: props,\n          forwardedRef: ref\n        });\n      });\n      forwarded.displayName = displayName;\n      forwarded.WrappedComponent = WrappedComponent;\n      return (0, _hoistNonReactStatics2.default)(forwarded, WrappedComponent);\n    }\n\n    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/connectAdvanced.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.createConnect = createConnect;\n\nvar _extends2 = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _objectWithoutPropertiesLoose2 = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nvar _objectWithoutPropertiesLoose3 = _interopRequireDefault(_objectWithoutPropertiesLoose2);\n\nvar _connectAdvanced = __webpack_require__(/*! ../components/connectAdvanced */ \"./node_modules/react-redux/es/components/connectAdvanced.js\");\n\nvar _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);\n\nvar _shallowEqual = __webpack_require__(/*! ../utils/shallowEqual */ \"./node_modules/react-redux/es/utils/shallowEqual.js\");\n\nvar _shallowEqual2 = _interopRequireDefault(_shallowEqual);\n\nvar _mapDispatchToProps = __webpack_require__(/*! ./mapDispatchToProps */ \"./node_modules/react-redux/es/connect/mapDispatchToProps.js\");\n\nvar _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);\n\nvar _mapStateToProps = __webpack_require__(/*! ./mapStateToProps */ \"./node_modules/react-redux/es/connect/mapStateToProps.js\");\n\nvar _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);\n\nvar _mergeProps = __webpack_require__(/*! ./mergeProps */ \"./node_modules/react-redux/es/connect/mergeProps.js\");\n\nvar _mergeProps2 = _interopRequireDefault(_mergeProps);\n\nvar _selectorFactory = __webpack_require__(/*! ./selectorFactory */ \"./node_modules/react-redux/es/connect/selectorFactory.js\");\n\nvar _selectorFactory2 = _interopRequireDefault(_selectorFactory);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n  connect is a facade over connectAdvanced. It turns its args into a compatible\n  selectorFactory, which has the signature:\n\n    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps\n  \n  connect passes its args to connectAdvanced as options, which will in turn pass them to\n  selectorFactory each time a Connect component instance is instantiated or hot reloaded.\n\n  selectorFactory returns a final props selector from its mapStateToProps,\n  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,\n  mergePropsFactories, and pure args.\n\n  The resulting final props selector is called by the Connect component instance whenever\n  it receives new props or store state.\n */\n\nfunction match(arg, factories, name) {\n  for (var i = factories.length - 1; i >= 0; i--) {\n    var result = factories[i](arg);\n    if (result) return result;\n  }\n\n  return function (dispatch, options) {\n    throw new Error(\"Invalid value of type \" + (typeof arg === \"undefined\" ? \"undefined\" : _typeof(arg)) + \" for \" + name + \" argument when connecting component \" + options.wrappedComponentName + \".\");\n  };\n}\n\nfunction strictEqual(a, b) {\n  return a === b;\n} // createConnect with default args builds the 'official' connect behavior. Calling it with\n// different options opens up some testing and extensibility scenarios\n\n\nfunction createConnect(_temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$connectHOC = _ref.connectHOC,\n      connectHOC = _ref$connectHOC === void 0 ? _connectAdvanced2.default : _ref$connectHOC,\n      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,\n      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps2.default : _ref$mapStateToPropsF,\n      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,\n      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,\n      _ref$mergePropsFactor = _ref.mergePropsFactories,\n      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps2.default : _ref$mergePropsFactor,\n      _ref$selectorFactory = _ref.selectorFactory,\n      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory2.default : _ref$selectorFactory;\n\n  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {\n    if (_ref2 === void 0) {\n      _ref2 = {};\n    }\n\n    var _ref3 = _ref2,\n        _ref3$pure = _ref3.pure,\n        pure = _ref3$pure === void 0 ? true : _ref3$pure,\n        _ref3$areStatesEqual = _ref3.areStatesEqual,\n        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,\n        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,\n        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _shallowEqual2.default : _ref3$areOwnPropsEqua,\n        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,\n        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _shallowEqual2.default : _ref3$areStatePropsEq,\n        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,\n        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _shallowEqual2.default : _ref3$areMergedPropsE,\n        extraOptions = (0, _objectWithoutPropertiesLoose3.default)(_ref3, [\"pure\", \"areStatesEqual\", \"areOwnPropsEqual\", \"areStatePropsEqual\", \"areMergedPropsEqual\"]);\n\n    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');\n    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');\n    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');\n    return connectHOC(selectorFactory, (0, _extends3.default)({\n      // used in error messages\n      methodName: 'connect',\n      // used to compute Connect's displayName from the wrapped component's displayName.\n      getDisplayName: function getDisplayName(name) {\n        return \"Connect(\" + name + \")\";\n      },\n      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes\n      shouldHandleStateChanges: Boolean(mapStateToProps),\n      // passed through to selectorFactory\n      initMapStateToProps: initMapStateToProps,\n      initMapDispatchToProps: initMapDispatchToProps,\n      initMergeProps: initMergeProps,\n      pure: pure,\n      areStatesEqual: areStatesEqual,\n      areOwnPropsEqual: areOwnPropsEqual,\n      areStatePropsEqual: areStatePropsEqual,\n      areMergedPropsEqual: areMergedPropsEqual\n    }, extraOptions));\n  };\n}\nexports.default = createConnect();\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/connect.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;\nexports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;\nexports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _wrapMapToProps = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\n\nfunction whenMapDispatchToPropsIsFunction(mapDispatchToProps) {\n  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;\n}\nfunction whenMapDispatchToPropsIsMissing(mapDispatchToProps) {\n  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {\n    return {\n      dispatch: dispatch\n    };\n  }) : undefined;\n}\nfunction whenMapDispatchToPropsIsObject(mapDispatchToProps) {\n  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {\n    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);\n  }) : undefined;\n}\nexports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapDispatchToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;\nexports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;\n\nvar _wrapMapToProps = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\n\nfunction whenMapStateToPropsIsFunction(mapStateToProps) {\n  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;\n}\nfunction whenMapStateToPropsIsMissing(mapStateToProps) {\n  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {\n    return {};\n  }) : undefined;\n}\nexports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapStateToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.defaultMergeProps = defaultMergeProps;\nexports.wrapMergePropsFunc = wrapMergePropsFunc;\nexports.whenMergePropsIsFunction = whenMergePropsIsFunction;\nexports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;\n\nvar _extends2 = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _verifyPlainObject = __webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\");\n\nvar _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction defaultMergeProps(stateProps, dispatchProps, ownProps) {\n  return (0, _extends3.default)({}, ownProps, stateProps, dispatchProps);\n}\nfunction wrapMergePropsFunc(mergeProps) {\n  return function initMergePropsProxy(dispatch, _ref) {\n    var displayName = _ref.displayName,\n        pure = _ref.pure,\n        areMergedPropsEqual = _ref.areMergedPropsEqual;\n    var hasRunOnce = false;\n    var mergedProps;\n    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {\n      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n\n      if (hasRunOnce) {\n        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;\n      } else {\n        hasRunOnce = true;\n        mergedProps = nextMergedProps;\n        if (true) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');\n      }\n\n      return mergedProps;\n    };\n  };\n}\nfunction whenMergePropsIsFunction(mergeProps) {\n  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;\n}\nfunction whenMergePropsIsOmitted(mergeProps) {\n  return !mergeProps ? function () {\n    return defaultMergeProps;\n  } : undefined;\n}\nexports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mergeProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;\nexports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;\nexports.default = finalPropsSelectorFactory;\n\nvar _objectWithoutPropertiesLoose2 = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nvar _objectWithoutPropertiesLoose3 = _interopRequireDefault(_objectWithoutPropertiesLoose2);\n\nvar _verifySubselectors = __webpack_require__(/*! ./verifySubselectors */ \"./node_modules/react-redux/es/connect/verifySubselectors.js\");\n\nvar _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {\n  return function impureFinalPropsSelector(state, ownProps) {\n    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);\n  };\n}\nfunction pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {\n  var areStatesEqual = _ref.areStatesEqual,\n      areOwnPropsEqual = _ref.areOwnPropsEqual,\n      areStatePropsEqual = _ref.areStatePropsEqual;\n  var hasRunAtLeastOnce = false;\n  var state;\n  var ownProps;\n  var stateProps;\n  var dispatchProps;\n  var mergedProps;\n\n  function handleFirstCall(firstState, firstOwnProps) {\n    state = firstState;\n    ownProps = firstOwnProps;\n    stateProps = mapStateToProps(state, ownProps);\n    dispatchProps = mapDispatchToProps(dispatch, ownProps);\n    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    hasRunAtLeastOnce = true;\n    return mergedProps;\n  }\n\n  function handleNewPropsAndNewState() {\n    stateProps = mapStateToProps(state, ownProps);\n    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);\n    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    return mergedProps;\n  }\n\n  function handleNewProps() {\n    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);\n    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);\n    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    return mergedProps;\n  }\n\n  function handleNewState() {\n    var nextStateProps = mapStateToProps(state, ownProps);\n    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);\n    stateProps = nextStateProps;\n    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    return mergedProps;\n  }\n\n  function handleSubsequentCalls(nextState, nextOwnProps) {\n    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);\n    var stateChanged = !areStatesEqual(nextState, state);\n    state = nextState;\n    ownProps = nextOwnProps;\n    if (propsChanged && stateChanged) return handleNewPropsAndNewState();\n    if (propsChanged) return handleNewProps();\n    if (stateChanged) return handleNewState();\n    return mergedProps;\n  }\n\n  return function pureFinalPropsSelector(nextState, nextOwnProps) {\n    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);\n  };\n} // TODO: Add more comments\n// If pure is true, the selector returned by selectorFactory will memoize its results,\n// allowing connectAdvanced's shouldComponentUpdate to return false if final\n// props have not changed. If false, the selector will always return a new\n// object and shouldComponentUpdate will always return true.\n\nfunction finalPropsSelectorFactory(dispatch, _ref2) {\n  var initMapStateToProps = _ref2.initMapStateToProps,\n      initMapDispatchToProps = _ref2.initMapDispatchToProps,\n      initMergeProps = _ref2.initMergeProps,\n      options = (0, _objectWithoutPropertiesLoose3.default)(_ref2, [\"initMapStateToProps\", \"initMapDispatchToProps\", \"initMergeProps\"]);\n\n  var mapStateToProps = initMapStateToProps(dispatch, options);\n  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);\n  var mergeProps = initMergeProps(dispatch, options);\n\n  if (true) {\n    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);\n  }\n\n  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;\n  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/selectorFactory.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = verifySubselectors;\n\nvar _warning = __webpack_require__(/*! ../utils/warning */ \"./node_modules/react-redux/es/utils/warning.js\");\n\nvar _warning2 = _interopRequireDefault(_warning);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction verify(selector, methodName, displayName) {\n  if (!selector) {\n    throw new Error(\"Unexpected value for \" + methodName + \" in \" + displayName + \".\");\n  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {\n    if (!selector.hasOwnProperty('dependsOnOwnProps')) {\n      (0, _warning2.default)(\"The selector for \" + methodName + \" of \" + displayName + \" did not specify a value for dependsOnOwnProps.\");\n    }\n  }\n}\n\nfunction verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {\n  verify(mapStateToProps, 'mapStateToProps', displayName);\n  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);\n  verify(mergeProps, 'mergeProps', displayName);\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/verifySubselectors.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.wrapMapToPropsConstant = wrapMapToPropsConstant;\nexports.getDependsOnOwnProps = getDependsOnOwnProps;\nexports.wrapMapToPropsFunc = wrapMapToPropsFunc;\n\nvar _verifyPlainObject = __webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\");\n\nvar _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction wrapMapToPropsConstant(getConstant) {\n  return function initConstantSelector(dispatch, options) {\n    var constant = getConstant(dispatch, options);\n\n    function constantSelector() {\n      return constant;\n    }\n\n    constantSelector.dependsOnOwnProps = false;\n    return constantSelector;\n  };\n} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args\n// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine\n// whether mapToProps needs to be invoked when props have changed.\n//\n// A length of one signals that mapToProps does not depend on props from the parent component.\n// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and\n// therefore not reporting its length accurately..\n\nfunction getDependsOnOwnProps(mapToProps) {\n  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;\n} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,\n// this function wraps mapToProps in a proxy function which does several things:\n//\n//  * Detects whether the mapToProps function being called depends on props, which\n//    is used by selectorFactory to decide if it should reinvoke on props changes.\n//\n//  * On first call, handles mapToProps if returns another function, and treats that\n//    new function as the true mapToProps for subsequent calls.\n//\n//  * On first call, verifies the first result is a plain object, in order to warn\n//    the developer that their mapToProps function is not returning a valid result.\n//\n\nfunction wrapMapToPropsFunc(mapToProps, methodName) {\n  return function initProxySelector(dispatch, _ref) {\n    var displayName = _ref.displayName;\n\n    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {\n      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);\n    }; // allow detectFactoryAndVerify to get ownProps\n\n\n    proxy.dependsOnOwnProps = true;\n\n    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {\n      proxy.mapToProps = mapToProps;\n      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);\n      var props = proxy(stateOrDispatch, ownProps);\n\n      if (typeof props === 'function') {\n        proxy.mapToProps = props;\n        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);\n        props = proxy(stateOrDispatch, ownProps);\n      }\n\n      if (true) (0, _verifyPlainObject2.default)(props, displayName, methodName);\n      return props;\n    };\n\n    return proxy;\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/wrapMapToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.connect = exports.ReactReduxContext = exports.connectAdvanced = exports.Provider = undefined;\n\nvar _Provider = __webpack_require__(/*! ./components/Provider */ \"./node_modules/react-redux/es/components/Provider.js\");\n\nvar _Provider2 = _interopRequireDefault(_Provider);\n\nvar _connectAdvanced = __webpack_require__(/*! ./components/connectAdvanced */ \"./node_modules/react-redux/es/components/connectAdvanced.js\");\n\nvar _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);\n\nvar _Context = __webpack_require__(/*! ./components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\n\nvar _connect = __webpack_require__(/*! ./connect/connect */ \"./node_modules/react-redux/es/connect/connect.js\");\n\nvar _connect2 = _interopRequireDefault(_connect);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Provider = _Provider2.default;\nexports.connectAdvanced = _connectAdvanced2.default;\nexports.ReactReduxContext = _Context.ReactReduxContext;\nexports.connect = _connect2.default;\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/index.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.default = isPlainObject;\n/**\r\n * @param {any} obj The object to inspect.\r\n * @returns {boolean} True if the argument appears to be a plain object.\r\n */\nfunction isPlainObject(obj) {\n  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;\n  var proto = Object.getPrototypeOf(obj);\n  if (proto === null) return true;\n  var baseProto = proto;\n\n  while (Object.getPrototypeOf(baseProto) !== null) {\n    baseProto = Object.getPrototypeOf(baseProto);\n  }\n\n  return proto === baseProto;\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.default = shallowEqual;\nvar hasOwn = Object.prototype.hasOwnProperty;\n\nfunction is(x, y) {\n  if (x === y) {\n    return x !== 0 || y !== 0 || 1 / x === 1 / y;\n  } else {\n    return x !== x && y !== y;\n  }\n}\n\nfunction shallowEqual(objA, objB) {\n  if (is(objA, objB)) return true;\n\n  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n  if (keysA.length !== keysB.length) return false;\n\n  for (var i = 0; i < keysA.length; i++) {\n    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/shallowEqual.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = verifyPlainObject;\n\nvar _isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/react-redux/es/utils/isPlainObject.js\");\n\nvar _isPlainObject2 = _interopRequireDefault(_isPlainObject);\n\nvar _warning = __webpack_require__(/*! ./warning */ \"./node_modules/react-redux/es/utils/warning.js\");\n\nvar _warning2 = _interopRequireDefault(_warning);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction verifyPlainObject(value, displayName, methodName) {\n  if (!(0, _isPlainObject2.default)(value)) {\n    (0, _warning2.default)(methodName + \"() in \" + displayName + \" must return a plain object. Instead received \" + value + \".\");\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/verifyPlainObject.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = warning;\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n    /* eslint-disable no-empty */\n  } catch (e) {}\n  /* eslint-enable no-empty */\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/warning.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__DO_NOT_USE__ActionTypes = exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _symbolObservable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n\nvar _symbolObservable2 = _interopRequireDefault(_symbolObservable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\" + randomString(),\n  REPLACE: \"@@redux/REPLACE\" + randomString(),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n  }\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\n\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');\n  }\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n    }\n\n    var isSubscribed = true;\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n      }\n\n      isSubscribed = false;\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n    };\n  }\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer;\n    dispatch({\n      type: ActionTypes.REPLACE\n    });\n  }\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return {\n          unsubscribe: unsubscribe\n        };\n      }\n    }, _ref[_symbolObservable2.default] = function () {\n      return this;\n    }, _ref;\n  } // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n\n\n  dispatch({\n    type: ActionTypes.INIT\n  });\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[_symbolObservable2.default] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n  return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: ActionTypes.INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: ActionTypes.PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (true) {\n      if (typeof reducers[key] === 'undefined') {\n        warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\n      }\n    }\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n\n  var finalReducerKeys = Object.keys(finalReducers);\n  var unexpectedKeyCache;\n\n  if (true) {\n    unexpectedKeyCache = {};\n  }\n\n  var shapeAssertionError;\n\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination(state, action) {\n    if (state === void 0) {\n      state = {};\n    }\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (true) {\n      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n\n    var hasChanged = false;\n    var nextState = {};\n\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass a single function as the first argument,\n * and get a function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var keys = Object.keys(actionCreators);\n  var boundActionCreators = {};\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(void 0, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      var store = createStore.apply(void 0, arguments);\n\n      var _dispatch = function dispatch() {\n        throw new Error(\"Dispatching while constructing your middleware is not allowed. \" + \"Other middleware would not be applied to this dispatch.\");\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(void 0, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(void 0, chain)(store.dispatch);\n      return _objectSpread({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\n\nfunction isCrushed() {}\n\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n  warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\n}\n\nexports.createStore = createStore;\nexports.combineReducers = combineReducers;\nexports.bindActionCreators = bindActionCreators;\nexports.applyMiddleware = applyMiddleware;\nexports.compose = compose;\nexports.__DO_NOT_USE__ActionTypes = ActionTypes;\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ponyfill = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n\nvar _ponyfill2 = _interopRequireDefault(_ponyfill);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar root; /* global window */\n\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = (0, _ponyfill2.default)(root);\nexports.default = result;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = symbolObservablePonyfill;\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar _Symbol = root.Symbol;\n\n\tif (typeof _Symbol === 'function') {\n\t\tif (_Symbol.observable) {\n\t\t\tresult = _Symbol.observable;\n\t\t} else {\n\t\t\tresult = _Symbol('observable');\n\t\t\t_Symbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./server/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n    res.send((0, _utils.render)(req, res));\n});\napp.listen(3000);\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/utils.js":
/*!*************************!*\
  !*** ./server/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Routes = __webpack_require__(/*! ../src/Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(req, res) {\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: req.path },\n        _Routes2.default\n    ));\n    return '<div id=\\'root\\'>' + content + '</div>\\n        <script src=\\'/index.js\\'></script>\\n        ';\n};\n\n//# sourceURL=webpack:///./server/utils.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _redux2 = __webpack_require__(/*! ./redux */ \"./src/redux/index.js\");\n\nvar _redux3 = _interopRequireDefault(_redux2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _redux.createStore)(_redux3.default);\nexports.default = _react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', exact: true, component: _Login2.default })\n    )\n);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/conponents/Header.js":
/*!**********************************!*\
  !*** ./src/conponents/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  chooseTab: {\n    color: 'skyblue',\n    textDecoration: 'none'\n  },\n  othersTab: {\n    color: '#000',\n    textDecoration: 'none'\n  }\n};\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n\n    _this.onMouseDown = function () {\n      _this.props.history.push({\n        pathname: './login'\n      });\n    };\n\n    _this.tab = [{ title: 'Home', to: './', pathname: '/' }, { title: 'Login', to: './login', pathname: '/login' }];\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var pathname = this.props.pathname;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.tab.map(function (item, index) {\n          return _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: 'active', style: item.pathname === pathname ? styles.chooseTab : styles.othersTab, key: item.title, to: item.to },\n            item.title\n          );\n        })\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/conponents/Header.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../conponents/Header */ \"./src/conponents/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n\n    _this.onClick = function () {\n      _this.props.addAction({ type: 'ADD_NUMBER' });\n    };\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var pathname = this.props.location.pathname;\n      var number = this.props.number;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, { pathname: pathname }),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h3',\n            null,\n            number\n          ),\n          _react2.default.createElement(\n            'button',\n            { className: 'hellobtn', onClick: function onClick() {\n                _this2.onClick();\n              } },\n            '\\u70B9\\u6211'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    number: state.add.number\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addAction: function addAction() {\n      return dispatch.apply(undefined, arguments);\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../conponents/Header */ \"./src/conponents/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.onClick = function () {\n      _this.props.addAction({ type: 'ADD_NUMBER' });\n    };\n\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var pathname = this.props.location.pathname;\n      var number = this.props.number;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, { pathname: pathname }),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h3',\n            null,\n            number\n          ),\n          _react2.default.createElement(\n            'button',\n            { className: 'hellobtn', onClick: function onClick() {\n                _this2.onClick();\n              } },\n            '\\u70B9\\u6211'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    number: state.add.number\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addAction: function addAction() {\n      return dispatch.apply(undefined, arguments);\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/redux/add.js":
/*!**************************!*\
  !*** ./src/redux/add.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = changeNum;\n\nvar initialState = {\n  number: 0\n};\nfunction changeNum() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n\n  switch (action.type) {\n    case 'ADD_NUMBER':\n\n      return Object.assign({}, state, {\n        number: ++state.number\n      });\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/redux/add.js?");

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = root;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _add = __webpack_require__(/*! ./add */ \"./src/redux/add.js\");\n\nvar _add2 = _interopRequireDefault(_add);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar shoppingCart = (0, _redux.combineReducers)({\n    add: _add2.default\n});\n\nfunction root(state, action) {\n    return shoppingCart(state, action);\n}\n\n//# sourceURL=webpack:///./src/redux/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hoist-non-react-statics\");\n\n//# sourceURL=webpack:///external_%22hoist-non-react-statics%22?");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"invariant\");\n\n//# sourceURL=webpack:///external_%22invariant%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");\n\n//# sourceURL=webpack:///external_%22react-is%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });