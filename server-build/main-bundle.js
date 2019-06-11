/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/server-build/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./html.js":
/*!*****************!*\
  !*** ./html.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable react/no-danger */\n\n\nvar Html = function Html(_ref) {\n  var content = _ref.content;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", {\n    lang: \"en\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    charSet: \"utf-8\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"./server-build/main.css\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"TEST\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"root\",\n    dangerouslySetInnerHTML: {\n      __html: content\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    type: \"text/javascript\",\n    src: \"dist/main-bundle.js\",\n    charSet: \"UTF-8\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Html);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9odG1sLmpzP2ViN2IiXSwibmFtZXMiOlsiSHRtbCIsImNvbnRlbnQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUNYO0FBQU0sUUFBSSxFQUFDO0FBQVgsS0FDRSx5RUFDRTtBQUFNLFdBQU8sRUFBQztBQUFkLElBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQztBQUE5QixJQUZGLEVBR0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsVUFBNUI7QUFBdUMsUUFBSSxFQUFDO0FBQTVDLElBSEYsRUFJRSxpRkFKRixDQURGLEVBT0UseUVBQ0U7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRUQ7QUFBVjtBQUF4QyxJQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsaUJBQWI7QUFBK0IsT0FBRyxFQUFDLHFCQUFuQztBQUF5RCxXQUFPLEVBQUM7QUFBakUsSUFGRixDQVBGLENBRFc7QUFBQSxDQUFiOztBQWVlRCxtRUFBZiIsImZpbGUiOiIuL2h0bWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kYW5nZXIgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSHRtbCA9ICh7IGNvbnRlbnQgfSkgPT4gKFxuICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICA8aGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIuL3NlcnZlci1idWlsZC9tYWluLmNzc1wiIC8+XG4gICAgICA8dGl0bGU+VEVTVDwvdGl0bGU+XG4gICAgPC9oZWFkPlxuICAgIDxib2R5PlxuICAgICAgPGRpdiBpZD1cInJvb3RcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX0gLz5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImRpc3QvbWFpbi1idW5kbGUuanNcIiBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgIDwvYm9keT5cbiAgPC9odG1sPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSHRtbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./html.js\n");

/***/ }),

/***/ "./src/components/App/ssr-index.js":
/*!*****************************************!*\
  !*** ./src/components/App/ssr-index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/PageLayout */ \"./src/containers/PageLayout/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/App/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var req = _ref.req;\n  var context = {};\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.appWrapper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"React is running\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"*\",\n    component: _containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvc3NyLWluZGV4LmpzP2JmYmIiXSwibmFtZXMiOlsicmVxIiwiY29udGV4dCIsInN0eWxlcyIsImFwcFdyYXBwZXIiLCJ1cmwiLCJQYWdlTGF5b3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFZSwrRUFBYTtBQUFBLE1BQVZBLEdBQVUsUUFBVkEsR0FBVTtBQUMxQixNQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQyxtREFBTSxDQUFDQztBQUF2QixLQUNFLDBGQURGLEVBRUUsMkRBQUMsNkRBQUQ7QUFBYyxZQUFRLEVBQUdILEdBQUcsQ0FBQ0ksR0FBN0I7QUFBbUMsV0FBTyxFQUFFSDtBQUE1QyxLQUNFLDJEQUFDLHVEQUFELFFBQ0UsMkRBQUMsc0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsR0FBbEI7QUFBc0IsYUFBUyxFQUFFSSw4REFBVUE7QUFBM0MsSUFERixDQURGLENBRkYsQ0FERjtBQVVELENBWkQiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAvc3NyLWluZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvUGFnZUxheW91dCc7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsICBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgge3JlcX0gKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB7fTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcFdyYXBwZXJ9PlxuICAgICAgPGgxPlJlYWN0IGlzIHJ1bm5pbmc8L2gxPlxuICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17IHJlcS51cmwgfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIipcIiBjb21wb25lbnQ9e1BhZ2VMYXlvdXR9IC8+ICBcbiAgICAgICAgPC9Td2l0Y2g+ICAgICAgICAgICAgXG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App/ssr-index.js\n");

/***/ }),

/***/ "./src/components/App/styles.scss":
/*!****************************************!*\
  !*** ./src/components/App/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"appWrapper\":\"App-appWrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvc3R5bGVzLnNjc3M/YmE0MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FwcC9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYXBwV3JhcHBlclwiOlwiQXBwLWFwcFdyYXBwZXJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2MDI3ODAxNDk2NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvdG9uaW5pY2hldi9DbG91ZC93b3Jrc3BhY2Uvbm9kZUpTL0V4YW1wbGVzL1dlYnBhY2tSZWFjdFJlZHV4QXBvbGxvVHV0b3JpYWwvbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App/styles.scss\n");

/***/ }),

/***/ "./src/components/Greetings/index.js":
/*!*******************************************!*\
  !*** ./src/components/Greetings/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar styles = __webpack_require__(/*! ./styles.scss */ \"./src/components/Greetings/styles.scss\");\n\nvar Greetings =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Greetings, _Component);\n\n  function Greetings(props) {\n    var _this;\n\n    _classCallCheck(this, Greetings);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Greetings).call(this, props));\n    _this.state = {\n      userName: \"noname\",\n      editMode: false\n    };\n    return _this;\n  }\n\n  _createClass(Greetings, [{\n    key: \"doneEditUsername\",\n    value: function doneEditUsername() {\n      var newName = document.querySelector('#inputField').value;\n    }\n  }, {\n    key: \"usernameChanged\",\n    value: function usernameChanged(el) {\n      var newName = el.target.value;\n    }\n  }, {\n    key: \"onToggleEditMode\",\n    value: function onToggleEditMode() {\n      this.setState({\n        editMode: !this.state.editMode\n      });\n    }\n  }, {\n    key: \"doneEditUsername\",\n    value: function doneEditUsername() {\n      this.setState({\n        editMode: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        onClick: function onClick() {\n          _this2.onToggleEditMode();\n        }\n      }, \"Hello:  \", this.state.userName);\n      if (this.state.editMode) element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Type new name:\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        id: \"inputField\",\n        value: this.state.userName,\n        onChange: function onChange(el) {\n          _this2.usernameChanged(el);\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          _this2.doneEditUsername();\n        }\n      }, \"done\"));\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: styles.wrapper\n      }, element));\n    }\n  }]);\n\n  return Greetings;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Greetings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HcmVldGluZ3MvaW5kZXguanM/NjUwNyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyZXF1aXJlIiwiR3JlZXRpbmdzIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJOYW1lIiwiZWRpdE1vZGUiLCJuZXdOYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJlbCIsInRhcmdldCIsInNldFN0YXRlIiwiZWxlbWVudCIsIm9uVG9nZ2xlRWRpdE1vZGUiLCJ1c2VybmFtZUNoYW5nZWQiLCJkb25lRWRpdFVzZXJuYW1lIiwid3JhcHBlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDZEQUFELENBQXRCOztJQUVNQyxTOzs7OztBQUVKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLG1GQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxRQURDO0FBRVhDLGNBQVEsRUFBRTtBQUZDLEtBQWI7QUFGaUI7QUFNbEI7Ozs7dUNBSWtCO0FBQ2pCLFVBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxLQUFwRDtBQUVEOzs7b0NBRWVDLEUsRUFBSTtBQUNsQixVQUFJSixPQUFPLEdBQUdJLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVRixLQUF4QjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFdBQUtHLFFBQUwsQ0FBZTtBQUFFUCxnQkFBUSxFQUFFLENBQUMsS0FBS0YsS0FBTCxDQUFXRTtBQUF4QixPQUFmO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBS08sUUFBTCxDQUFlO0FBQUVQLGdCQUFRLEVBQUU7QUFBWixPQUFmO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUlRLE9BQU8sR0FBRztBQUFJLGVBQU8sRUFBRSxtQkFBSztBQUFJLGdCQUFJLENBQUNDLGdCQUFMO0FBQTBCO0FBQWhELHFCQUEyRCxLQUFLWCxLQUFMLENBQVdDLFFBQXRFLENBQWQ7QUFDQSxVQUFHLEtBQUtELEtBQUwsQ0FBV0UsUUFBZCxFQUNFUSxPQUFPLEdBQUcseUZBQWtCO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBRSxFQUFDLFlBQXRCO0FBQW1DLGFBQUssRUFBRSxLQUFLVixLQUFMLENBQVdDLFFBQXJEO0FBQStELGdCQUFRLEVBQUUsa0JBQUNNLEVBQUQsRUFBUTtBQUFFLGdCQUFJLENBQUNLLGVBQUwsQ0FBcUJMLEVBQXJCO0FBQTBCO0FBQTdHLFFBQWxCLEVBQW1JO0FBQVEsZUFBTyxFQUFFLG1CQUFLO0FBQUUsZ0JBQUksQ0FBQ00sZ0JBQUw7QUFBeUI7QUFBakQsZ0JBQW5JLENBQVY7QUFDRixhQUNFLHdFQUNFO0FBQUssaUJBQVMsRUFBRWpCLE1BQU0sQ0FBQ2tCO0FBQXZCLFNBQ0dKLE9BREgsQ0FERixDQURGO0FBTUQ7Ozs7RUF2Q3FCSywrQzs7QUE0Q1RqQix3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dyZWV0aW5ncy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vc3R5bGVzLnNjc3MnKTtcblxuY2xhc3MgR3JlZXRpbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTsgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJOYW1lOiBcIm5vbmFtZVwiLFxuICAgICAgZWRpdE1vZGU6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgXG5cbiAgZG9uZUVkaXRVc2VybmFtZSgpIHtcbiAgICBsZXQgbmV3TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dEZpZWxkJykudmFsdWU7XG5cbiAgfVxuXG4gIHVzZXJuYW1lQ2hhbmdlZChlbCkge1xuICAgIGxldCBuZXdOYW1lID0gZWwudGFyZ2V0LnZhbHVlOyAgICBcbiAgfVxuXG4gIG9uVG9nZ2xlRWRpdE1vZGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSggeyBlZGl0TW9kZTogIXRoaXMuc3RhdGUuZWRpdE1vZGUgfSApO1xuICB9XG5cbiAgZG9uZUVkaXRVc2VybmFtZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKCB7IGVkaXRNb2RlOiBmYWxzZSB9ICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGVsZW1lbnQgPSA8aDIgb25DbGljaz17KCkgPT57ICAgdGhpcy5vblRvZ2dsZUVkaXRNb2RlKCkgIH19PkhlbGxvOiAge3RoaXMuc3RhdGUudXNlck5hbWV9PC9oMj47XG4gICAgaWYodGhpcy5zdGF0ZS5lZGl0TW9kZSlcbiAgICAgIGVsZW1lbnQgPSA8aDI+VHlwZSBuZXcgbmFtZTo8aW5wdXQgdHlwZT1cInRleHRcIiBpZD0naW5wdXRGaWVsZCcgdmFsdWU9e3RoaXMuc3RhdGUudXNlck5hbWV9IG9uQ2hhbmdlPXsoZWwpID0+IHsgdGhpcy51c2VybmFtZUNoYW5nZWQoZWwpO319IC8+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PnsgdGhpcy5kb25lRWRpdFVzZXJuYW1lKCkgfX0+ZG9uZTwvYnV0dG9uPjwvaDI+XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAge2VsZW1lbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgR3JlZXRpbmdzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Greetings/index.js\n");

/***/ }),

/***/ "./src/components/Greetings/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/Greetings/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"wrapper\":\"Greetings-wrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HcmVldGluZ3Mvc3R5bGVzLnNjc3M/ZWY0ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dyZWV0aW5ncy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wid3JhcHBlclwiOlwiR3JlZXRpbmdzLXdyYXBwZXJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2MDI3ODAxNTE2M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvdG9uaW5pY2hldi9DbG91ZC93b3Jrc3BhY2Uvbm9kZUpTL0V4YW1wbGVzL1dlYnBhY2tSZWFjdFJlZHV4QXBvbGxvVHV0b3JpYWwvbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Greetings/styles.scss\n");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar styles = __webpack_require__(/*! ./styles.scss */ \"./src/components/Header/styles.scss\");\n\nvar Header = function Header(_ref) {\n  var title = _ref.title;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: styles.wrapper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/home\"\n  }, \"HOME\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/greetings\"\n  }, \"GREETINGS\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"ABOUT\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/NDY3NiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyZXF1aXJlIiwiSGVhZGVyIiwidGl0bGUiLCJ3cmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMERBQUQsQ0FBdEI7O0FBR0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUNiLHdFQUNFO0FBQUssYUFBUyxFQUFFSCxNQUFNLENBQUNJO0FBQXZCLEtBQ0UsdUVBQU1ELEtBQU4sQ0FERixFQUVFLHVFQUNFLHVFQUFJLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsWUFBSixDQURGLEVBRUUsdUVBQUksMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxpQkFBSixDQUZGLEVBR0UsdUVBQUksMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxhQUFKLENBSEYsQ0FGRixDQURGLENBRGE7QUFBQSxDQUFmOztBQVllRCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcy5zY3NzJyk7XG5cblxuY29uc3QgSGVhZGVyID0gKCB7dGl0bGV9ICkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+ICAgICAgXG4gICAgICA8aDI+eyB0aXRsZSB9PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxMaW5rIHRvPScvaG9tZSc+SE9NRTwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgdG89Jy9ncmVldGluZ3MnPkdSRUVUSU5HUzwvTGluaz48L2xpPiAgICAgICBcbiAgICAgICAgPGxpPjxMaW5rIHRvPScvYWJvdXQnPkFCT1VUPC9MaW5rPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.js\n");

/***/ }),

/***/ "./src/components/Header/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"wrapper\":\"Header-wrapper\",\"active\":\"Header-active\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnNjc3M/OTk5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wid3JhcHBlclwiOlwiSGVhZGVyLXdyYXBwZXJcIixcImFjdGl2ZVwiOlwiSGVhZGVyLWFjdGl2ZVwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTYwMjc4MDE1MTE4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy90b25pbmljaGV2L0Nsb3VkL3dvcmtzcGFjZS9ub2RlSlMvRXhhbXBsZXMvV2VicGFja1JlYWN0UmVkdXhBcG9sbG9UdXRvcmlhbC9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/styles.scss\n");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar styles = __webpack_require__(/*! ./styles.scss */ \"./src/components/Home/styles.scss\");\n\nvar Home = function Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: styles.wrapper\n  }, \"This is my home section!\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL2luZGV4LmpzPzJmYTIiXSwibmFtZXMiOlsic3R5bGVzIiwicmVxdWlyZSIsIkhvbWUiLCJ3cmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsd0RBQUQsQ0FBdEI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUNYLHdFQUNFO0FBQUssYUFBUyxFQUFFRixNQUFNLENBQUNHO0FBQXZCLGdDQURGLENBRFc7QUFBQSxDQUFiOztBQUtlRCxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hvbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMuc2NzcycpO1xuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlRoaXMgaXMgbXkgaG9tZSBzZWN0aW9uITwvZGl2PlxuICA8L2Rpdj5cbilcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home/index.js\n");

/***/ }),

/***/ "./src/components/Home/styles.scss":
/*!*****************************************!*\
  !*** ./src/components/Home/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"wrapper\":\"Home-wrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL3N0eWxlcy5zY3NzP2EyMWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL3N0eWxlcy5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ3cmFwcGVyXCI6XCJIb21lLXdyYXBwZXJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2MDI3ODAxNTEzM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvdG9uaW5pY2hldi9DbG91ZC93b3Jrc3BhY2Uvbm9kZUpTL0V4YW1wbGVzL1dlYnBhY2tSZWFjdFJlZHV4QXBvbGxvVHV0b3JpYWwvbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Home/styles.scss\n");

/***/ }),

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar styles = __webpack_require__(/*! ./styles.scss */ \"./src/components/Loading/styles.scss\");\n/**\n * HELPER COMPONENT TO DISPLAY LOADING ... AND HANDLE ERRORS WHEN COMPONENTS LOADS DYNAMICALLY \n * @param {} props \n */\n\n\nvar Loading = function Loading(props) {\n  if (props.error) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: styles.wrapper\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Error loading component!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, props.error.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.error.stack), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: props.retry\n    }, \"Retry\")));\n  } else {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LmpzP2U0MzQiXSwibmFtZXMiOlsic3R5bGVzIiwicmVxdWlyZSIsIkxvYWRpbmciLCJwcm9wcyIsImVycm9yIiwid3JhcHBlciIsIm1lc3NhZ2UiLCJzdGFjayIsInJldHJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsMkRBQUQsQ0FBdEI7QUFFQTs7Ozs7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLE1BQUlBLEtBQUssQ0FBQ0MsS0FBVixFQUFpQjtBQUNmLFdBQVE7QUFBSyxlQUFTLEVBQUVKLE1BQU0sQ0FBQ0s7QUFBdkIsT0FDRSxrR0FERixFQUVFLHNFQUFHLHNFQUFJRixLQUFLLENBQUNDLEtBQU4sQ0FBWUUsT0FBaEIsQ0FBSCxDQUZGLEVBR0Usc0VBQUlILEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxLQUFoQixDQUhGLEVBSUUsd0VBQUs7QUFBUSxhQUFPLEVBQUdKLEtBQUssQ0FBQ0s7QUFBeEIsZUFBTCxDQUpGLENBQVI7QUFNRCxHQVBELE1BT087QUFDTCxXQUFPLHFGQUFQO0FBQ0Q7QUFDRixDQVhEOztBQWFlTixzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcy5zY3NzJyk7XG5cbi8qKlxuICogSEVMUEVSIENPTVBPTkVOVCBUTyBESVNQTEFZIExPQURJTkcgLi4uIEFORCBIQU5ETEUgRVJST1JTIFdIRU4gQ09NUE9ORU5UUyBMT0FEUyBEWU5BTUlDQUxMWSBcbiAqIEBwYXJhbSB7fSBwcm9wcyBcbiAqL1xuY29uc3QgTG9hZGluZyA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMuZXJyb3IpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxoMz5FcnJvciBsb2FkaW5nIGNvbXBvbmVudCE8L2gzPiBcbiAgICAgICAgICAgICAgPHA+PGI+e3Byb3BzLmVycm9yLm1lc3NhZ2V9PC9iPjwvcD5cbiAgICAgICAgICAgICAgPHA+e3Byb3BzLmVycm9yLnN0YWNrfTwvcD5cbiAgICAgICAgICAgICAgPGRpdj48YnV0dG9uIG9uQ2xpY2s9eyBwcm9wcy5yZXRyeSB9PlJldHJ5PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Loading/index.js\n");

/***/ }),

/***/ "./src/components/Loading/styles.scss":
/*!********************************************!*\
  !*** ./src/components/Loading/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"wrapper\":\"Loading-wrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL3N0eWxlcy5zY3NzPzM5NDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL3N0eWxlcy5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ3cmFwcGVyXCI6XCJMb2FkaW5nLXdyYXBwZXJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU2MDI3ODAxNTAxM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvdG9uaW5pY2hldi9DbG91ZC93b3Jrc3BhY2Uvbm9kZUpTL0V4YW1wbGVzL1dlYnBhY2tSZWFjdFJlZHV4QXBvbGxvVHV0b3JpYWwvbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Loading/styles.scss\n");

/***/ }),

/***/ "./src/containers/PageLayout/ComponentList/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/PageLayout/ComponentList/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Loading */ \"./src/components/Loading/index.js\");\n\n\n/* Components */\n\nvar Header = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({\n  loader: function loader() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Header */ \"./src/components/Header/index.js\"));\n  },\n  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\nvar Home = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({\n  loader: function loader() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Home */ \"./src/components/Home/index.js\"));\n  },\n  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\nvar Greetings = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({\n  loader: function loader() {\n    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../../components/Greetings */ \"./src/components/Greetings/index.js\"));\n  },\n  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Home: Home,\n  Greetings: Greetings,\n  Header: Header\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L0NvbXBvbmVudExpc3QvaW5kZXguanM/MWJhMiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMb2FkYWJsZSIsImxvYWRlciIsImxvYWRpbmciLCJMb2FkaW5nIiwiSG9tZSIsIkdyZWV0aW5ncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxxREFBUSxDQUFDO0FBQ3RCQyxRQUFNLEVBQUU7QUFBQSxXQUFNLDJJQUFOO0FBQUEsR0FEYztBQUV0QkMsU0FBTyxFQUFFQywyREFBT0E7QUFGTSxDQUFELENBQXZCO0FBSUEsSUFBTUMsSUFBSSxHQUFHSixxREFBUSxDQUFDO0FBQ3BCQyxRQUFNLEVBQUU7QUFBQSxXQUFNLHVJQUFOO0FBQUEsR0FEWTtBQUVwQkMsU0FBTyxFQUFFQywyREFBT0E7QUFGSSxDQUFELENBQXJCO0FBSUEsSUFBTUUsU0FBUyxHQUFHTCxxREFBUSxDQUFDO0FBQ3pCQyxRQUFNLEVBQUU7QUFBQSxXQUFNLGlKQUFOO0FBQUEsR0FEaUI7QUFFekJDLFNBQU8sRUFBRUMsMkRBQU9BO0FBRlMsQ0FBRCxDQUExQjtBQUtlO0FBQ2JDLE1BQUksRUFBRUEsSUFETztBQUViQyxXQUFTLEVBQUVBLFNBRkU7QUFHYk4sUUFBTSxFQUFFQTtBQUhLLENBQWYiLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L0NvbXBvbmVudExpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nJztcbi8qIENvbXBvbmVudHMgKi9cbmNvbnN0IEhlYWRlciA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQgKCcuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlcicpLFxuICBsb2FkaW5nOiBMb2FkaW5nXG59KTtcbmNvbnN0IEhvbWUgPSBMb2FkYWJsZSh7XG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0ICgnLi4vLi4vLi4vY29tcG9uZW50cy9Ib21lJyksXG4gIGxvYWRpbmc6IExvYWRpbmdcbn0pO1xuY29uc3QgR3JlZXRpbmdzID0gTG9hZGFibGUoe1xuICBsb2FkZXI6ICgpID0+IGltcG9ydCAoJy4uLy4uLy4uL2NvbXBvbmVudHMvR3JlZXRpbmdzJyksXG4gIGxvYWRpbmc6IExvYWRpbmdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEhvbWU6IEhvbWUsXG4gIEdyZWV0aW5nczogR3JlZXRpbmdzLFxuICBIZWFkZXI6IEhlYWRlclxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/ComponentList/index.js\n");

/***/ }),

/***/ "./src/containers/PageLayout/index.js":
/*!********************************************!*\
  !*** ./src/containers/PageLayout/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComponentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentList */ \"./src/containers/PageLayout/ComponentList/index.js\");\n/* harmony import */ var _pages_layout_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-layout-data */ \"./src/containers/PageLayout/pages-layout-data.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Loading */ \"./src/components/Loading/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar styles = __webpack_require__(/*! ./styles.scss */ \"./src/containers/PageLayout/styles.scss\");\n\nvar PageLayout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(PageLayout, _Component);\n\n  function PageLayout(props) {\n    var _this;\n\n    _classCallCheck(this, PageLayout);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageLayout).call(this, props));\n    var url = props.location.pathname;\n\n    var componentsList = _this.getComponentsList(url);\n\n    _this.state = {\n      url: url,\n      componentsList: componentsList\n    };\n    return _this;\n  }\n\n  _createClass(PageLayout, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      var url = typeof window == 'undefined' ? nextProps.location : nextProps.history.location.pathname;\n      var componentsList = this.getComponentsList(url);\n      this.setState({\n        url: url,\n        componentsList: componentsList\n      });\n    }\n  }, {\n    key: \"getComponentsList\",\n    value: function getComponentsList(url) {\n      return _pages_layout_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"][url];\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      if (!this.state.componentsList) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null);\n      }\n\n      var allLayout = this.state.componentsList.map(function (componentName, id, components) {\n        var Component = _ComponentList__WEBPACK_IMPORTED_MODULE_1__[\"default\"][componentName];\n\n        if (typeof Component === 'undefined') {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            key: \"error-{id}\",\n            className: styles.error\n          }, \"Can't find \", componentName, \" component!\");\n        }\n\n        console.log(\">>>>>!!!>>\", _this2.state.url);\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n          key: componentName\n        });\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: styles.app\n      }, allLayout);\n    }\n  }]);\n\n  return PageLayout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L2luZGV4LmpzPzIyMDIiXSwibmFtZXMiOlsic3R5bGVzIiwicmVxdWlyZSIsIlBhZ2VMYXlvdXQiLCJwcm9wcyIsInVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb21wb25lbnRzTGlzdCIsImdldENvbXBvbmVudHNMaXN0Iiwic3RhdGUiLCJuZXh0UHJvcHMiLCJ3aW5kb3ciLCJoaXN0b3J5Iiwic2V0U3RhdGUiLCJQYWdlc0xheW91dERhdGEiLCJhbGxMYXlvdXQiLCJtYXAiLCJjb21wb25lbnROYW1lIiwiaWQiLCJjb21wb25lbnRzIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50TGlzdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDhEQUFELENBQXRCOztJQUVNQyxVOzs7OztBQUVGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLG9GQUFNQSxLQUFOO0FBRUEsUUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsUUFBM0I7O0FBRUEsUUFBTUMsY0FBYyxHQUFHLE1BQUtDLGlCQUFMLENBQXVCSixHQUF2QixDQUF2Qjs7QUFDQSxVQUFLSyxLQUFMLEdBQWE7QUFDWEwsU0FBRyxFQUFFQSxHQURNO0FBRVhHLG9CQUFjLEVBQUVBO0FBRkwsS0FBYjtBQU5pQjtBQVVsQjs7Ozs4Q0FFeUJHLFMsRUFBVztBQUNuQyxVQUFNTixHQUFHLEdBQUcsT0FBT08sTUFBUCxJQUFpQixXQUFqQixHQUErQkQsU0FBUyxDQUFDTCxRQUF6QyxHQUFvREssU0FBUyxDQUFDRSxPQUFWLENBQWtCUCxRQUFsQixDQUEyQkMsUUFBM0Y7QUFDQSxVQUFNQyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsQ0FBdUJKLEdBQXZCLENBQXZCO0FBQ0EsV0FBS1MsUUFBTCxDQUFjO0FBQUVULFdBQUcsRUFBRUEsR0FBUDtBQUFZRyxzQkFBYyxFQUFFQTtBQUE1QixPQUFkO0FBQ0Q7OztzQ0FFaUJILEcsRUFBSztBQUNyQixhQUFPVSwwREFBZSxDQUFDVixHQUFELENBQXRCO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUcsQ0FBQyxLQUFLSyxLQUFMLENBQVdGLGNBQWYsRUFBK0I7QUFDN0IsZUFBUSwyREFBQywyREFBRCxPQUFSO0FBQ0Q7O0FBRUQsVUFBTVEsU0FBUyxHQUFHLEtBQUtOLEtBQUwsQ0FBV0YsY0FBWCxDQUEwQlMsR0FBMUIsQ0FBOEIsVUFBQ0MsYUFBRCxFQUFnQkMsRUFBaEIsRUFBcUJDLFVBQXJCLEVBQW9DO0FBRWxGLFlBQU1DLFNBQVMsR0FBR0Msc0RBQWEsQ0FBQ0osYUFBRCxDQUEvQjs7QUFDQSxZQUFHLE9BQU9HLFNBQVAsS0FBcUIsV0FBeEIsRUFBcUM7QUFDbkMsaUJBQ0U7QUFBSyxlQUFHLEVBQUMsWUFBVDtBQUFzQixxQkFBUyxFQUFFcEIsTUFBTSxDQUFDc0I7QUFBeEMsNEJBQTJETCxhQUEzRCxnQkFERjtBQUdEOztBQUVETSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUksQ0FBQ2YsS0FBTCxDQUFXTCxHQUFyQztBQUNBLGVBQ0ksMkRBQUMsU0FBRDtBQUFXLGFBQUcsRUFBRWE7QUFBaEIsVUFESjtBQUlELE9BZGlCLENBQWxCO0FBZ0JBLGFBQ0U7QUFBSyxpQkFBUyxFQUFFakIsTUFBTSxDQUFDeUI7QUFBdkIsU0FDR1YsU0FESCxDQURGO0FBS0Q7Ozs7RUFsRG9CSywrQzs7QUFvRFZsQix5RUFBZiIsImZpbGUiOiIuL3NyYy9jb250YWluZXJzL1BhZ2VMYXlvdXQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudExpc3QgZnJvbSAnLi9Db21wb25lbnRMaXN0JztcbmltcG9ydCBQYWdlc0xheW91dERhdGEgZnJvbSAnLi9wYWdlcy1sYXlvdXQtZGF0YSc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRpbmcnO1xuXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcy5zY3NzJyk7XG5cbmNsYXNzIFBhZ2VMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTsgICAgICBcblxuICAgICAgY29uc3QgdXJsID0gcHJvcHMubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudHNMaXN0ID0gdGhpcy5nZXRDb21wb25lbnRzTGlzdCh1cmwpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGNvbXBvbmVudHNMaXN0OiBjb21wb25lbnRzTGlzdFxuICAgICAgfVxuICAgIH0gXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgdXJsID0gdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyA/IG5leHRQcm9wcy5sb2NhdGlvbiA6IG5leHRQcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgY29uc3QgY29tcG9uZW50c0xpc3QgPSB0aGlzLmdldENvbXBvbmVudHNMaXN0KHVybCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXJsOiB1cmwsIGNvbXBvbmVudHNMaXN0OiBjb21wb25lbnRzTGlzdCB9KTtcbiAgICB9XG4gIFxuICAgIGdldENvbXBvbmVudHNMaXN0KHVybCkge1xuICAgICAgcmV0dXJuIFBhZ2VzTGF5b3V0RGF0YVt1cmxdO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGlmKCF0aGlzLnN0YXRlLmNvbXBvbmVudHNMaXN0KSB7XG4gICAgICAgIHJldHVybiAoPExvYWRpbmcgLz4pO1xuICAgICAgfSAgICBcblxuICAgICAgY29uc3QgYWxsTGF5b3V0ID0gdGhpcy5zdGF0ZS5jb21wb25lbnRzTGlzdC5tYXAoKGNvbXBvbmVudE5hbWUsIGlkICwgY29tcG9uZW50cykgPT4ge1xuXG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IENvbXBvbmVudExpc3RbY29tcG9uZW50TmFtZV07XG4gICAgICAgIGlmKHR5cGVvZiBDb21wb25lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBrZXk9J2Vycm9yLXtpZH0nIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5DYW4ndCBmaW5kIHtjb21wb25lbnROYW1lfSBjb21wb25lbnQhPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+Pj4hISE+PlwiLCB0aGlzLnN0YXRlLnVybCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29tcG9uZW50IGtleT17Y29tcG9uZW50TmFtZX0gLz5cbiAgICAgICAgKTtcblxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHB9PlxuICAgICAgICAgIHthbGxMYXlvdXR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/index.js\n");

/***/ }),

/***/ "./src/containers/PageLayout/pages-layout-data.js":
/*!********************************************************!*\
  !*** ./src/containers/PageLayout/pages-layout-data.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  '/': ['Header', 'Home'],\n  '/home': ['Header', 'Home'],\n  '/greetings': ['Header', 'Greetings'],\n  '/about': ['Header', 'About']\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L3BhZ2VzLWxheW91dC1kYXRhLmpzP2E2NDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiLE9BQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQURRO0FBRWIsV0FBVSxDQUFDLFFBQUQsRUFBVyxNQUFYLENBRkc7QUFHYixnQkFBYyxDQUFDLFFBQUQsRUFBVyxXQUFYLENBSEQ7QUFJYixZQUFVLENBQUMsUUFBRCxFQUFXLE9BQVg7QUFKRyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbnRhaW5lcnMvUGFnZUxheW91dC9wYWdlcy1sYXlvdXQtZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgJy8nOiBbJ0hlYWRlcicsICdIb21lJ10sXG4gICcvaG9tZScgOiBbJ0hlYWRlcicsICdIb21lJ10sXG4gICcvZ3JlZXRpbmdzJzogWydIZWFkZXInLCAnR3JlZXRpbmdzJ10sXG4gICcvYWJvdXQnOiBbJ0hlYWRlcicsICdBYm91dCddLFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/pages-layout-data.js\n");

/***/ }),

/***/ "./src/containers/PageLayout/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/PageLayout/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"error\":\"PageLayout-error\",\"wrapper\":\"PageLayout-wrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L3N0eWxlcy5zY3NzP2Q5YjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L3N0eWxlcy5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclwiOlwiUGFnZUxheW91dC1lcnJvclwiLFwid3JhcHBlclwiOlwiUGFnZUxheW91dC13cmFwcGVyXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NjAyNzgwMTQ5MzlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL3RvbmluaWNoZXYvQ2xvdWQvd29ya3NwYWNlL25vZGVKUy9FeGFtcGxlcy9XZWJwYWNrUmVhY3RSZWR1eEFwb2xsb1R1dG9yaWFsL25vZGVfbW9kdWxlcy9leHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJob3RcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/styles.scss\n");

/***/ }),

/***/ "./ssr-server.js":
/*!***********************!*\
  !*** ./ssr-server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html.js */ \"./html.js\");\n/* harmony import */ var _src_components_App_ssr_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/components/App/ssr-index */ \"./src/components/App/ssr-index.js\");\n\n\n\n\n\nvar PORT = 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use('/server-build', express__WEBPACK_IMPORTED_MODULE_1___default.a.static('./server-build'));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_1___default.a.static('dist')); // to serve frontent prod static files\n\napp.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_1___default.a.static('./src/images/favicon.ico'));\napp.get('/*', function (req, res) {\n  var mainApp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_App_ssr_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    req: req\n  });\n  var content = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(mainApp);\n  var html = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_html_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    content: content\n  });\n  res.status(200);\n  res.send(\"<!doctype html>\\n\".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(html)));\n  res.end();\n});\napp.listen(PORT, function () {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zc3Itc2VydmVyLmpzPzIzNmQiXSwibmFtZXMiOlsiUE9SVCIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJzdGF0aWMiLCJnZXQiLCJyZXEiLCJyZXMiLCJtYWluQXBwIiwiY29udGVudCIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciLCJodG1sIiwic3RhdHVzIiwic2VuZCIsInJlbmRlclRvU3RhdGljTWFya3VwIiwiZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLElBQUksR0FBRyxJQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHQyw4Q0FBTyxFQUFuQjtBQUVBRCxHQUFHLENBQUNFLEdBQUosQ0FBUSxlQUFSLEVBQXlCRCw4Q0FBTyxDQUFDRSxNQUFSLENBQWUsZ0JBQWYsQ0FBekI7QUFDQUgsR0FBRyxDQUFDRSxHQUFKLENBQVEsT0FBUixFQUFpQkQsOENBQU8sQ0FBQ0UsTUFBUixDQUFlLE1BQWYsQ0FBakIsRSxDQUEwQzs7QUFDMUNILEdBQUcsQ0FBQ0UsR0FBSixDQUFRLGNBQVIsRUFBd0JELDhDQUFPLENBQUNFLE1BQVIsQ0FBZSwwQkFBZixDQUF4QjtBQUVBSCxHQUFHLENBQUNJLEdBQUosQ0FBUSxJQUFSLEVBQWMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFFMUIsTUFBTUMsT0FBTyxHQUNYLDJEQUFDLHFFQUFEO0FBQUssT0FBRyxFQUFFRjtBQUFWLElBREY7QUFLRSxNQUFNRyxPQUFPLEdBQUdDLHVEQUFjLENBQUNDLGNBQWYsQ0FBOEJILE9BQTlCLENBQWhCO0FBQ0EsTUFBTUksSUFBSSxHQUFHLDJEQUFDLGdEQUFEO0FBQU0sV0FBTyxFQUFFSDtBQUFmLElBQWI7QUFFQUYsS0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWDtBQUNBTixLQUFHLENBQUNPLElBQUosNEJBQTZCSix1REFBYyxDQUFDSyxvQkFBZixDQUFvQ0gsSUFBcEMsQ0FBN0I7QUFDQUwsS0FBRyxDQUFDUyxHQUFKO0FBQ0gsQ0FiRDtBQWVBZixHQUFHLENBQUNnQixNQUFKLENBQVdqQixJQUFYLEVBQWlCLFlBQU07QUFDckJrQixTQUFPLENBQUNDLEdBQVIsb0RBQThDbkIsSUFBOUM7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vc3NyLXNlcnZlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCBIdG1sIGZyb20gJy4vaHRtbC5qcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vc3JjL2NvbXBvbmVudHMvQXBwL3Nzci1pbmRleCc7XG5cblxuY29uc3QgUE9SVCA9IDMwMDY7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoJy9zZXJ2ZXItYnVpbGQnLCBleHByZXNzLnN0YXRpYygnLi9zZXJ2ZXItYnVpbGQnKSk7XG5hcHAudXNlKCcvZGlzdCcsIGV4cHJlc3Muc3RhdGljKCdkaXN0JykpOyAvLyB0byBzZXJ2ZSBmcm9udGVudCBwcm9kIHN0YXRpYyBmaWxlc1xuYXBwLnVzZSgnL2Zhdmljb24uaWNvJywgZXhwcmVzcy5zdGF0aWMoJy4vc3JjL2ltYWdlcy9mYXZpY29uLmljbycpKTtcblxuYXBwLmdldCgnLyonLCAocmVxLCByZXMpID0+IHtcblxuICBjb25zdCBtYWluQXBwID0gKFxuICAgIDxBcHAgcmVxPXtyZXF9IC8+XG4gICk7ICAgIFxuXG4gXG4gICAgY29uc3QgY29udGVudCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKG1haW5BcHApO1xuICAgIGNvbnN0IGh0bWwgPSA8SHRtbCBjb250ZW50PXtjb250ZW50fSAvPjtcbiAgXG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD5cXG4ke1JlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGh0bWwpfWApO1xuICAgIHJlcy5lbmQoKTsgXG59KTtcblxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGDwn5iOIFNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ssr-server.js\n");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./ssr-server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./ssr-server.js */"./ssr-server.js");


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCI/OTQzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1kb20vc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkYWJsZVwiP2FjMDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbG9hZGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkYWJsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-loadable\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ })

/******/ });