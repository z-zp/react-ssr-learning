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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxSaga = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n\nvar _reduxSaga2 = _interopRequireDefault(_reduxSaga);\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _redux2 = __webpack_require__(/*! ./redux */ \"./src/redux/index.js\");\n\nvar _redux3 = _interopRequireDefault(_redux2);\n\nvar _saga = __webpack_require__(/*! ./saga */ \"./src/saga/index.js\");\n\nvar _saga2 = _interopRequireDefault(_saga);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sagaMiddleware = (0, _reduxSaga2.default)();\nvar store = (0, _redux.createStore)(_redux3.default, (0, _redux.applyMiddleware)(sagaMiddleware));\nsagaMiddleware.run(_saga2.default);\nexports.default = _react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),\n        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', exact: true, component: _Login2.default })\n    )\n);\n\n//# sourceURL=webpack:///./src/Routes.js?");

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

/***/ "./src/conponents/Loading.js":
/*!***********************************!*\
  !*** ./src/conponents/Loading.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Loading = function (_Component) {\n    _inherits(Loading, _Component);\n\n    function Loading() {\n        _classCallCheck(this, Loading);\n\n        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));\n    }\n\n    _createClass(Loading, [{\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                fetching = _props.fetching,\n                error = _props.error,\n                data = _props.data;\n\n            if (fetching) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    '\\u6B63\\u5728\\u52A0\\u8F7D...'\n                );\n            }\n            if (error) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    '\\u52A0\\u8F7D\\u5931\\u8D25'\n                );\n            }\n            if (data) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    '\\u52A0\\u8F7D\\u6210\\u529F'\n                );\n            }\n            return null;\n        }\n    }]);\n\n    return Loading;\n}(_react.Component);\n\nexports.default = Loading;\n\n//# sourceURL=webpack:///./src/conponents/Loading.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../conponents/Header */ \"./src/conponents/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Loading = __webpack_require__(/*! ../../conponents/Loading */ \"./src/conponents/Loading.js\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n\n    _this.onClick = function () {\n      _this.props.addAction({ type: 'ADD_NUMBER_REQ' });\n    };\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      var nextProps = this.props;\n\n      if (!prevProps.add.fetching && nextProps.add.fetching) {\n        // 加载中 TODO something...\n\n      }\n\n      if (prevProps.add.fetching && !nextProps.add.fetching) {\n\n        if (!prevProps.add.error && !nextProps.add.error) {\n          // 加载成功 TODO something...\n\n        }\n\n        if (!prevProps.add.error && nextProps.add.error) {\n          // 加载失败 TODO something...\n\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var pathname = this.props.location.pathname;\n      var _props$add = this.props.add,\n          data = _props$add.number,\n          fetching = _props$add.fetching,\n          error = _props$add.error;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, { pathname: pathname }),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h3',\n            null,\n            data || 0\n          ),\n          _react2.default.createElement(_Loading2.default, { fetching: fetching, error: error, data: data }),\n          _react2.default.createElement(\n            'button',\n            { className: 'hellobtn', onClick: function onClick() {\n                _this2.onClick();\n              } },\n            '\\u70B9\\u6211'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    add: state.add,\n    number: state.add.number\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addAction: function addAction() {\n      return dispatch.apply(undefined, arguments);\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../conponents/Header */ \"./src/conponents/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Loading = __webpack_require__(/*! ../../conponents/Loading */ \"./src/conponents/Loading.js\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.onClick = function () {\n      _this.props.addAction({ type: 'ADD_NUMBER_REQ' });\n    };\n\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      var nextProps = this.props;\n\n      if (!prevProps.add.fetching && nextProps.add.fetching) {\n        // 加载中 TODO something...\n\n      }\n\n      if (prevProps.add.fetching && !nextProps.add.fetching) {\n\n        if (!prevProps.add.error && !nextProps.add.error) {\n          // 加载成功 TODO something...\n\n        }\n\n        if (!prevProps.add.error && nextProps.add.error) {\n          // 加载失败 TODO something...\n\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var pathname = this.props.location.pathname;\n      var _props$add = this.props.add,\n          data = _props$add.number,\n          fetching = _props$add.fetching,\n          error = _props$add.error;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, { pathname: pathname }),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h3',\n            null,\n            data || 0\n          ),\n          _react2.default.createElement(_Loading2.default, { fetching: fetching, error: error, data: data }),\n          _react2.default.createElement(\n            'button',\n            { className: 'hellobtn', onClick: function onClick() {\n                _this2.onClick();\n              } },\n            '\\u70B9\\u6211'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    add: state.add,\n    number: state.add.number\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addAction: function addAction() {\n      return dispatch.apply(undefined, arguments);\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/redux/addRedux.js":
/*!*******************************!*\
  !*** ./src/redux/addRedux.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.failure = exports.success = exports.request = exports.AddNumberTypes = undefined;\n\nvar _createReducer;\n\nvar _seamlessImmutable = __webpack_require__(/*! seamless-immutable */ \"seamless-immutable\");\n\nvar _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);\n\nvar _reduxsauce = __webpack_require__(/*! reduxsauce */ \"reduxsauce\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import {Map} from 'immutable'\nvar _createActions = (0, _reduxsauce.createActions)({\n    addNumberReq: ['params'],\n    addNumberSuc: ['params'],\n    addNumberFailure: ['params']\n}),\n    Types = _createActions.Types,\n    Creators = _createActions.Creators;\n\nvar AddNumberTypes = exports.AddNumberTypes = Types;\nvar INITIAL_STATE = (0, _seamlessImmutable2.default)({\n    number: null,\n    fetching: false,\n    error: null,\n    a: { b: '123' }\n});\n\nvar request = exports.request = function request(state, action) {\n    return state.set('fetching', true).set('error', false);\n};\nvar success = exports.success = function success(state, action) {\n    var number = action.number;\n\n    function add(x, y) {\n        return x + y;\n    }\n    return state.set('fetching', false).set('error', false).updateIn(['number'], add, number);\n};\nvar failure = exports.failure = function failure(state, action) {\n    return state.set('fetching', false).set('error', true);\n};\n\nvar reducer = (0, _reduxsauce.createReducer)(INITIAL_STATE, (_createReducer = {}, _defineProperty(_createReducer, Types.ADD_NUMBER_REQ, request), _defineProperty(_createReducer, Types.ADD_NUMBER_SUC, success), _defineProperty(_createReducer, Types.ADD_NUMBER_FAILURE, failure), _createReducer));\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/redux/addRedux.js?");

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = root;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _addRedux = __webpack_require__(/*! ./addRedux */ \"./src/redux/addRedux.js\");\n\nvar _addRedux2 = _interopRequireDefault(_addRedux);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar shoppingCart = (0, _redux.combineReducers)({\n    add: _addRedux2.default\n});\n\nfunction root(state, action) {\n    return shoppingCart(state, action);\n}\n\n//# sourceURL=webpack:///./src/redux/index.js?");

/***/ }),

/***/ "./src/saga/index.js":
/*!***************************!*\
  !*** ./src/saga/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nexports.incrementAsync = incrementAsync;\nexports.default = rootSaga;\n\nvar _effects = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _marked = /*#__PURE__*/_regenerator2.default.mark(incrementAsync),\n    _marked2 = /*#__PURE__*/_regenerator2.default.mark(rootSaga);\n\nfunction incrementAsync() {\n    var number;\n    return _regenerator2.default.wrap(function incrementAsync$(_context) {\n        while (1) {\n            switch (_context.prev = _context.next) {\n                case 0:\n                    _context.next = 2;\n                    return (0, _effects.call)(function () {\n                        return new Promise(function (resolve) {\n                            setTimeout(function () {\n                                resolve(Math.floor(Math.random() * 10));\n                            }, 1000);\n                        });\n                    });\n\n                case 2:\n                    number = _context.sent;\n\n                    console.log(number);\n\n                    if (!number) {\n                        _context.next = 10;\n                        break;\n                    }\n\n                    _context.next = 7;\n                    return (0, _effects.put)({ type: 'ADD_NUMBER_SUC', number: number });\n\n                case 7:\n                    return _context.abrupt('return', _context.sent);\n\n                case 10:\n                    _context.next = 12;\n                    return (0, _effects.put)({ type: 'ADD_NUMBER_FAILURE' });\n\n                case 12:\n                    return _context.abrupt('return', _context.sent);\n\n                case 13:\n                case 'end':\n                    return _context.stop();\n            }\n        }\n    }, _marked, this);\n}\n\nfunction rootSaga() {\n    return _regenerator2.default.wrap(function rootSaga$(_context2) {\n        while (1) {\n            switch (_context2.prev = _context2.next) {\n                case 0:\n                    _context2.next = 2;\n                    return (0, _effects.all)([(0, _effects.takeLatest)('ADD_NUMBER_REQ', incrementAsync)]);\n\n                case 2:\n                case 'end':\n                    return _context2.stop();\n            }\n        }\n    }, _marked2, this);\n}\n\n//# sourceURL=webpack:///./src/saga/index.js?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "reduxsauce":
/*!*****************************!*\
  !*** external "reduxsauce" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reduxsauce\");\n\n//# sourceURL=webpack:///external_%22reduxsauce%22?");

/***/ }),

/***/ "seamless-immutable":
/*!*************************************!*\
  !*** external "seamless-immutable" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"seamless-immutable\");\n\n//# sourceURL=webpack:///external_%22seamless-immutable%22?");

/***/ })

/******/ });