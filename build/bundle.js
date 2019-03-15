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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./src/containers/Home/index.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Home/index.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"h3{\\n    color:#fff;\\n    font-size: 20px\\n}\\n.index_div_O4-yt{\\n    background:red\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"div\": \"index_div_O4-yt\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/index.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./src/containers/Login/index.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./src/containers/Login/index.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"h3{\\n    color:black;\\n    font-size: 20px\\n}\\n.index_div_3WVpP{\\n    background:blue\\n}\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"div\": \"index_div_3WVpP\"\n};\n\n//# sourceURL=webpack:///./src/containers/Login/index.css?./node_modules/css-loader??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ./conponents/Header */ \"./src/conponents/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, { pathname: this.props.location.pathname }),\n        (0, _reactRouterConfig.renderRoutes)(this.props.route.routes)\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _noPage = __webpack_require__(/*! ./conponents/noPage */ \"./src/conponents/noPage.js\");\n\nvar _noPage2 = _interopRequireDefault(_noPage);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n    path: '/',\n    component: _App2.default,\n    routes: [{\n        path: '/',\n        component: _Home2.default,\n        exact: true,\n        loadData: _Home2.default.loadData,\n        key: 'home'\n    }, {\n        path: '/login',\n        component: _Login2.default,\n        exact: true,\n        loadData: _Login2.default.loadData,\n        key: 'login'\n    }, {\n        component: _noPage2.default\n    }]\n}];\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _require = __webpack_require__(/*! ./require */ \"./src/api/require.js\");\n\nvar getNumber = function getNumber(params) {\n    return (0, _require.get)('/api/number', params);\n};\nexports.default = {\n    getNumber: getNumber\n};\n\n//# sourceURL=webpack:///./src/api/api.js?");

/***/ }),

/***/ "./src/api/require.js":
/*!****************************!*\
  !*** ./src/api/require.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.post = exports.get = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**\n                                                                                                                                                                                                                                                                   * Parses the JSON returned by a network request\n                                                                                                                                                                                                                                                                   *\n                                                                                                                                                                                                                                                                   * @param  {object} response A response from a network request\n                                                                                                                                                                                                                                                                   *\n                                                                                                                                                                                                                                                                   * @return {object}          The parsed JSON from the request\n                                                                                                                                                                                                                                                                   */\n\n\nexports.default = request;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar baseUrl = 'http://39.105.161.0';\nfunction parseJSON(response) {\n  if (response.status === 204 || response.status === 205) {\n    return null;\n  }\n  return response.data;\n}\n/**\n * Checks if a network request came back fine, and throws an error if not\n *\n * @param  {object} response   A response from a network request\n *\n * @return {object|undefined} Returns either the response, or throws an error\n */\nfunction checkStatus(response) {\n  if (response.status >= 200 && response.status < 300) {\n\n    return response;\n  }\n  var error = new Error(response.statusText);\n  error.response = response;\n  throw error;\n}\n\nfunction errorUrl(err) {\n  var error = new Error(err);\n  throw error;\n}\n\n/**\n * Requests a URL, returning a promise\n *\n * @param  {string} url       The URL we want to request\n * @param  {object} [options] The options we want to pass to \"fetch\"\n *\n * @return {object}           The response data\n */\nfunction request(url, options) {\n  return (0, _axios2.default)(url, options).then(checkStatus).then(parseJSON).catch(errorUrl);\n}\n\nvar get = exports.get = function get(url, params) {\n  var obj = params.obj,\n      server = params.server;\n\n\n  server && (url = baseUrl + url);\n  if (obj) {\n    var paramsArray = [];\n    //拼接参数  \n    Object.keys(obj).forEach(function (key) {\n      return paramsArray.push(key + '=' + obj[key]);\n    });\n    if (url.search(/\\?/) === -1) {\n      url += '?' + paramsArray.join('&');\n    } else {\n      url += '&' + paramsArray.join('&');\n    }\n  }\n  return request(url);\n};\nvar post = exports.post = function post(url, options) {\n  return request(url, _extends({ method: 'POST' }, options, baseUrl));\n};\n\n//# sourceURL=webpack:///./src/api/require.js?");

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

/***/ "./src/conponents/noPage.js":
/*!**********************************!*\
  !*** ./src/conponents/noPage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NoPage = function (_Component) {\n  _inherits(NoPage, _Component);\n\n  function NoPage() {\n    _classCallCheck(this, NoPage);\n\n    return _possibleConstructorReturn(this, (NoPage.__proto__ || Object.getPrototypeOf(NoPage)).apply(this, arguments));\n  }\n\n  _createClass(NoPage, [{\n    key: 'render',\n    value: function render() {\n      // staticContext只有服务端存在\n      this.props.staticContext && (this.props.staticContext.noPage = true);\n      return _react2.default.createElement(\n        'div',\n        null,\n        '404',\n        _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })\n      );\n    }\n  }]);\n\n  return NoPage;\n}(_react.Component);\n\nexports.default = NoPage;\n\n//# sourceURL=webpack:///./src/conponents/noPage.js?");

/***/ }),

/***/ "./src/containers/Home/index.css":
/*!***************************************!*\
  !*** ./src/containers/Home/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./index.css */ \"./node_modules/css-loader/index.js?!./src/containers/Home/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/index.css?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _api = __webpack_require__(/*! ../../api/api */ \"./src/api/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _addReducer = __webpack_require__(/*! ../../redux/addReducer */ \"./src/redux/addReducer.js\");\n\nvar _actions = __webpack_require__(/*! ../../redux/actions */ \"./src/redux/actions.js\");\n\nvar _Loading = __webpack_require__(/*! ../../conponents/Loading */ \"./src/conponents/Loading.js\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nvar _index = __webpack_require__(/*! ./index.css */ \"./src/containers/Home/index.css\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _WithStyles = __webpack_require__(/*! ../common/WithStyles */ \"./src/containers/common/WithStyles.js\");\n\nvar _WithStyles2 = _interopRequireDefault(_WithStyles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n\n    _this.onClick = function () {\n      _this.props.addAction();\n    };\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.addAction();\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      var nextProps = this.props;\n\n      if (!prevProps.add.fetching && nextProps.add.fetching) {\n        // 加载中 TODO something...\n\n      }\n\n      if (prevProps.add.fetching && !nextProps.add.fetching) {\n\n        if (!prevProps.add.error && !nextProps.add.error) {\n          // 加载成功 TODO something...\n\n        }\n\n        if (!prevProps.add.error && nextProps.add.error) {\n          // 加载失败 TODO something...\n\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var pathname = this.props.location.pathname;\n      var _props$add = this.props.add,\n          data = _props$add.number,\n          fetching = _props$add.fetching,\n          error = _props$add.error;\n\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'home'\n          ),\n          _react2.default.createElement('meta', { name: 'description', content: '这是home' })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: _index2.default.div },\n          _react2.default.createElement(\n            'h3',\n            null,\n            data || 0\n          ),\n          _react2.default.createElement(_Loading2.default, { fetching: fetching, error: error, data: data }),\n          _react2.default.createElement(\n            'button',\n            { className: 'hellobtn', onClick: function onClick() {\n                _this2.onClick();\n              } },\n            '\\u70B9\\u6211'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    add: state.add,\n    number: state.add.number\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addAction: function addAction(arg) {\n      return dispatch((0, _actions.addNumberAction)(arg));\n    }\n  };\n};\n\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithStyles2.default)(Home, _index2.default));\nExportHome.loadData = function (store) {\n  return new Promise(function (resolve, reject) {\n    resolve(_api2.default.getNumber({ obj: {}, server: true }));\n  }).then(function (data) {\n    return store.dispatch({\n      type: _addReducer.AddNumberTypes.SERVER_ADD_NUMBER_REQ,\n      obj: { number: data.data.number },\n      server: true\n    });\n  });\n};\nexports.default = ExportHome;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Login/index.css":
/*!****************************************!*\
  !*** ./src/containers/Login/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./index.css */ \"./node_modules/css-loader/index.js?!./src/containers/Login/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Login/index.css?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Loading = __webpack_require__(/*! ../../conponents/Loading */ \"./src/conponents/Loading.js\");\n\nvar _Loading2 = _interopRequireDefault(_Loading);\n\nvar _addReducer = __webpack_require__(/*! ../../redux/addReducer */ \"./src/redux/addReducer.js\");\n\nvar _index = __webpack_require__(/*! ./index.css */ \"./src/containers/Login/index.css\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _WithStyles = __webpack_require__(/*! ../common/WithStyles */ \"./src/containers/common/WithStyles.js\");\n\nvar _WithStyles2 = _interopRequireDefault(_WithStyles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_Component) {\n  _inherits(Login, _Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.onClick = function () {\n      _this.props.addAction({});\n    };\n\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps) {\n      var nextProps = this.props;\n\n      if (!prevProps.add.fetching && nextProps.add.fetching) {\n        // 加载中 TODO something...\n\n      }\n\n      if (prevProps.add.fetching && !nextProps.add.fetching) {\n\n        if (!prevProps.add.error && !nextProps.add.error) {\n          // 加载成功 TODO something...\n\n        }\n\n        if (!prevProps.add.error && nextProps.add.error) {\n          // 加载失败 TODO something...\n\n        }\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var pathname = this.props.location.pathname;\n      var _props$add = this.props.add,\n          data = _props$add.number,\n          fetching = _props$add.fetching,\n          error = _props$add.error;\n\n      return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'Login'\n          ),\n          _react2.default.createElement('meta', { name: 'description', content: '这是Login' })\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: _index2.default.div },\n          _react2.default.createElement(\n            'h3',\n            null,\n            data || 0\n          ),\n          _react2.default.createElement(_Loading2.default, { fetching: fetching, error: error, data: data }),\n          _react2.default.createElement(\n            'button',\n            { className: 'hellobtn', onClick: function onClick() {\n                _this2.onClick();\n              } },\n            '\\u70B9\\u6211'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    add: state.add,\n    number: state.add.number\n  };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addAction: function addAction() {\n      for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {\n        arg[_key] = arguments[_key];\n      }\n\n      return dispatch(_extends({ type: _addReducer.AddNumberTypes.ADD_NUMBER_REQ }, arg));\n    }\n  };\n};\nLogin.loadData = function () {};\nvar ExportLogin = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithStyles2.default)(Login, _index2.default));\nExportLogin.loadData = function () {};\nexports.default = ExportLogin;\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/common/WithStyles.js":
/*!*********************************************!*\
  !*** ./src/containers/common/WithStyles.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (WrappedComponent, styles) {\n  return function (_Component) {\n    _inherits(WithStyle, _Component);\n\n    function WithStyle() {\n      _classCallCheck(this, WithStyle);\n\n      return _possibleConstructorReturn(this, (WithStyle.__proto__ || Object.getPrototypeOf(WithStyle)).apply(this, arguments));\n    }\n\n    _createClass(WithStyle, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        // 服务器端渲染\n        if (styles._getCss) {\n          this.props.staticContext.css.push(styles._getCss());\n        }\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        return _react2.default.createElement(WrappedComponent, this.props);\n      }\n    }]);\n\n    return WithStyle;\n  }(_react.Component);\n};\n\n//# sourceURL=webpack:///./src/containers/common/WithStyles.js?");

/***/ }),

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addNumberAction = undefined;\n\nvar _addReducer = __webpack_require__(/*! ./addReducer */ \"./src/redux/addReducer.js\");\n\nvar addNumberAction = exports.addNumberAction = function addNumberAction(obj) {\n  return {\n    type: _addReducer.AddNumberTypes.ADD_NUMBER_REQ,\n    obj: obj,\n    server: false\n  };\n};\n\n//# sourceURL=webpack:///./src/redux/actions.js?");

/***/ }),

/***/ "./src/redux/addReducer.js":
/*!*********************************!*\
  !*** ./src/redux/addReducer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.failure = exports.success = exports.request = exports.sRequest = exports.AddNumberTypes = undefined;\n\nvar _createReducer;\n\nvar _seamlessImmutable = __webpack_require__(/*! seamless-immutable */ \"seamless-immutable\");\n\nvar _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);\n\nvar _reduxsauce = __webpack_require__(/*! reduxsauce */ \"reduxsauce\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import {Map} from 'immutable'\nvar _createActions = (0, _reduxsauce.createActions)({\n    addNumberReq: ['params'],\n    serverAddNumberReq: ['params'],\n    addNumberSuc: ['params'],\n    addNumberFailure: ['params']\n}),\n    Types = _createActions.Types,\n    Creators = _createActions.Creators;\n\nvar AddNumberTypes = exports.AddNumberTypes = Types;\nvar INITIAL_STATE = (0, _seamlessImmutable2.default)({\n    number: null,\n    fetching: false,\n    error: null\n});\n\nvar sRequest = exports.sRequest = function sRequest(state, action) {\n    // 注水\n    return state.set('fetching', false).set('error', false).set('number', action.obj.number);\n};\nvar request = exports.request = function request(state, action) {\n    return state.set('fetching', true).set('error', false);\n};\nvar success = exports.success = function success(state, action) {\n    var number = action.number;\n\n    function add(x, y) {\n        return x + y;\n    }\n    return state.set('fetching', false).set('error', false).set('number', number);\n};\nvar failure = exports.failure = function failure(state, action) {\n    return state.set('fetching', false).set('error', true);\n};\n\nvar reducer = (0, _reduxsauce.createReducer)(INITIAL_STATE, (_createReducer = {}, _defineProperty(_createReducer, Types.ADD_NUMBER_REQ, request), _defineProperty(_createReducer, Types.SERVER_ADD_NUMBER_REQ, sRequest), _defineProperty(_createReducer, Types.ADD_NUMBER_SUC, success), _defineProperty(_createReducer, Types.ADD_NUMBER_FAILURE, failure), _createReducer));\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/redux/addReducer.js?");

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = root;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _addReducer = __webpack_require__(/*! ./addReducer */ \"./src/redux/addReducer.js\");\n\nvar _addReducer2 = _interopRequireDefault(_addReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar shoppingCart = (0, _redux.combineReducers)({\n    add: _addReducer2.default\n});\n\nfunction root(state, action) {\n    return shoppingCart(state, action);\n}\n\n//# sourceURL=webpack:///./src/redux/index.js?");

/***/ }),

/***/ "./src/saga/index.js":
/*!***************************!*\
  !*** ./src/saga/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nexports.getAddNumber = getAddNumber;\nexports.default = rootSaga;\n\nvar _effects = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n\nvar _api = __webpack_require__(/*! ../api/api */ \"./src/api/api.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _addReducer = __webpack_require__(/*! ../redux/addReducer */ \"./src/redux/addReducer.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _marked = /*#__PURE__*/_regenerator2.default.mark(getAddNumber),\n    _marked2 = /*#__PURE__*/_regenerator2.default.mark(rootSaga);\n\nfunction getAddNumber(api, actions) {\n  var data, number;\n  return _regenerator2.default.wrap(function getAddNumber$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return (0, _effects.call)(api.getNumber, actions);\n\n        case 3:\n          data = _context.sent;\n          number = data.data.number;\n          _context.next = 7;\n          return (0, _effects.put)({ type: 'ADD_NUMBER_SUC', number: number });\n\n        case 7:\n          return _context.abrupt('return', _context.sent);\n\n        case 10:\n          _context.prev = 10;\n          _context.t0 = _context['catch'](0);\n          _context.next = 14;\n          return (0, _effects.put)({\n            type: 'ADD_NUMBER_FAILURE'\n          });\n\n        case 14:\n          return _context.abrupt('return', _context.sent);\n\n        case 15:\n        case 'end':\n          return _context.stop();\n      }\n    }\n  }, _marked, this, [[0, 10]]);\n}\n\nfunction rootSaga() {\n  return _regenerator2.default.wrap(function rootSaga$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return (0, _effects.all)([(0, _effects.takeLatest)(_addReducer.AddNumberTypes.ADD_NUMBER_REQ, getAddNumber, _api2.default)]);\n\n        case 2:\n        case 'end':\n          return _context2.stop();\n      }\n    }\n  }, _marked2, this);\n}\n\n//# sourceURL=webpack:///./src/saga/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\napp.use('/api', (0, _expressHttpProxy2.default)('http://39.105.161.0', {\n    proxyReqPathResolver: function proxyReqPathResolver(req) {\n        return '/api' + req.url;\n    }\n}));\napp.get('*', function (req, res) {\n    var store = (0, _store.getStore)();\n    var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n    var promises = [];\n    matchedRoutes.forEach(function (item) {\n        if (item.route.loadData) {\n            promises.push(item.route.loadData(store));\n        }\n    });\n    Promise.all(promises).then(function (data) {\n        var context = { css: [] };\n        var html = (0, _utils.render)(store, _Routes2.default, req, context);\n        if (context.action === 'REPLACE') {\n            res.redirect(301, context.url);\n        } else if (context.noPage) {\n            res.status(404);\n            res.send(html);\n        } else {\n            res.send(html);\n        }\n    }).catch(function () {\n        var context = {};\n        var html = (0, _utils.render)(store, _Routes2.default, req, context);\n        if (context.action === 'REPLACE') {\n            res.redirect(301, context.url);\n        } else if (context.noPage) {\n            res.status(404);\n            res.send(html);\n        } else {\n            res.send(html);\n        }\n    });\n});\n\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, routes, req, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      (0, _reactRouterConfig.renderRoutes)(routes)\n    )\n  ));\n  var helmet = _reactHelmet.Helmet.renderStatic();\n  var css = context.css.length ? context.css.join('/n') : {};\n  console.log('store.getState', css);\n  return '<html>\\n          <head>\\n          ' + helmet.title.toString() + '\\n          ' + helmet.meta.toString() + '\\n          <style>' + css + '</style>\\n          </head>\\n          <body>    \\n          <div id=\\'root\\'>' + content + '</div>\\n         \\n          <script>\\n            window.context={\\n              state:' + JSON.stringify(store.getState()) + '\\n            }\\n          </script>\\n          <script src=\\'/index.js\\'></script>\\n          </body>\\n          </html>\\n          ';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxSaga = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n\nvar _reduxSaga2 = _interopRequireDefault(_reduxSaga);\n\nvar _redux2 = __webpack_require__(/*! ./redux */ \"./src/redux/index.js\");\n\nvar _redux3 = _interopRequireDefault(_redux2);\n\nvar _saga = __webpack_require__(/*! ./saga */ \"./src/saga/index.js\");\n\nvar _saga2 = _interopRequireDefault(_saga);\n\nvar _seamlessImmutable = __webpack_require__(/*! seamless-immutable */ \"seamless-immutable\");\n\nvar _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sagaMiddleware = (0, _reduxSaga2.default)();\n\nvar getStore = exports.getStore = function getStore() {\n    // 使每个用户store互相独立\n    var store = (0, _redux.createStore)(_redux3.default, (0, _redux.applyMiddleware)(sagaMiddleware));\n    sagaMiddleware.run(_saga2.default);\n    return store;\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n    // 使每个用户store互相独立\n    var defaultState = (0, _seamlessImmutable2.default)(window.context.state);\n    var store = (0, _redux.createStore)(_redux3.default, defaultState, (0, _redux.applyMiddleware)(sagaMiddleware));\n    sagaMiddleware.run(_saga2.default);\n    return store;\n};\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

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

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

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