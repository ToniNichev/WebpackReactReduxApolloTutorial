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
/******/ 	__webpack_require__.p = "/server-build/";
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/PageLayout */ \"./src/containers/PageLayout/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/App/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.appWrapper\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"React is running\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"*\",\n        component: _containers_PageLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n      }))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvc3NyLWluZGV4LmpzP2JmYmIiXSwibmFtZXMiOlsiQXBwIiwic3R5bGVzIiwiYXBwV3JhcHBlciIsIlBhZ2VMYXlvdXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztJQUVxQkEsRzs7Ozs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFFQyxtREFBTSxDQUFDQztBQUF2QixTQUNFLDBGQURGLEVBRUUsMkRBQUMsNkRBQUQsUUFDRSwyREFBQyx1REFBRCxRQUNFLDJEQUFDLHNEQUFEO0FBQU8sYUFBSyxNQUFaO0FBQWEsWUFBSSxFQUFDLEdBQWxCO0FBQXNCLGlCQUFTLEVBQUVDLDhEQUFVQTtBQUEzQyxRQURGLENBREYsQ0FGRixDQURGO0FBVUQ7Ozs7RUFaOEJDLCtDIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQXBwL3Nzci1pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZUxheW91dCBmcm9tICcuLi8uLi9jb250YWluZXJzL1BhZ2VMYXlvdXQnO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyLCAgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwV3JhcHBlcn0+XG4gICAgICAgIDxoMT5SZWFjdCBpcyBydW5uaW5nPC9oMT5cbiAgICAgICAgPFN0YXRpY1JvdXRlcj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIqXCIgY29tcG9uZW50PXtQYWdlTGF5b3V0fSAvPiAgXG4gICAgICAgICAgPC9Td2l0Y2g+ICAgICAgICAgICAgXG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App/ssr-index.js\n");

/***/ }),

/***/ "./src/components/App/styles.scss":
/*!****************************************!*\
  !*** ./src/components/App/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"appWrapper\":\"App-appWrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvc3R5bGVzLnNjc3M/NWU1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FwcC9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYXBwV3JhcHBlclwiOlwiQXBwLWFwcFdyYXBwZXJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTgzNzMwODY3N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvdG9uaW5pY2hldi9Eb3dubG9hZHMvV2VicGFja1JlYWN0UmVkdXhBcG9sbG9UdXRvcmlhbC9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/App/styles.scss\n");

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

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"wrapper\":\"Greetings-wrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HcmVldGluZ3Mvc3R5bGVzLnNjc3M/OWVhZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dyZWV0aW5ncy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wid3JhcHBlclwiOlwiR3JlZXRpbmdzLXdyYXBwZXJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTgzNzMwODgyMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvdG9uaW5pY2hldi9Eb3dubG9hZHMvV2VicGFja1JlYWN0UmVkdXhBcG9sbG9UdXRvcmlhbC9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Greetings/styles.scss\n");

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

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"wrapper\":\"Header-wrapper\",\"active\":\"Header-active\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnNjc3M/NmM3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBleHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wid3JhcHBlclwiOlwiSGVhZGVyLXdyYXBwZXJcIixcImFjdGl2ZVwiOlwiSGVhZGVyLWFjdGl2ZVwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTU5ODM3MzA4ODAzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy90b25pbmljaGV2L0Rvd25sb2Fkcy9XZWJwYWNrUmVhY3RSZWR1eEFwb2xsb1R1dG9yaWFsL25vZGVfbW9kdWxlcy9leHRyYWN0LWNzcy1jaHVua3Mtd2VicGFjay1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJob3RcIjp0cnVlLFwicmVsb2FkQWxsXCI6dHJ1ZSxcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/styles.scss\n");

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

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"wrapper\":\"Home-wrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL3N0eWxlcy5zY3NzPzcxYWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL3N0eWxlcy5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ3cmFwcGVyXCI6XCJIb21lLXdyYXBwZXJcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU1OTgzNzMwODc4NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvdG9uaW5pY2hldi9Eb3dubG9hZHMvV2VicGFja1JlYWN0UmVkdXhBcG9sbG9UdXRvcmlhbC9ub2RlX21vZHVsZXMvZXh0cmFjdC1jc3MtY2h1bmtzLXdlYnBhY2stcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG90XCI6dHJ1ZSxcInJlbG9hZEFsbFwiOnRydWUsXCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home/styles.scss\n");

/***/ }),

/***/ "./src/containers/PageLayout/ComponentList/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/PageLayout/ComponentList/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Home */ \"./src/components/Home/index.js\");\n/* harmony import */ var _components_Greetings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Greetings */ \"./src/components/Greetings/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Home: _components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Greetings: _components_Greetings__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Header: _components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L0NvbXBvbmVudExpc3QvaW5kZXguanM/MWJhMiJdLCJuYW1lcyI6WyJIb21lIiwiR3JlZXRpbmdzIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlO0FBQ2JBLE1BQUksRUFBRUEsd0RBRE87QUFFYkMsV0FBUyxFQUFFQSw2REFGRTtBQUdiQyxRQUFNLEVBQUVBLDBEQUFNQTtBQUhELENBQWYiLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L0NvbXBvbmVudExpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBIb21lIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgR3JlZXRpbmdzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvR3JlZXRpbmdzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBIb21lOiBIb21lLFxuICBHcmVldGluZ3M6IEdyZWV0aW5ncyxcbiAgSGVhZGVyOiBIZWFkZXJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/ComponentList/index.js\n");

/***/ }),

/***/ "./src/containers/PageLayout/index.js":
/*!********************************************!*\
  !*** ./src/containers/PageLayout/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ComponentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentList */ \"./src/containers/PageLayout/ComponentList/index.js\");\n/* harmony import */ var _pages_layout_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-layout-data */ \"./src/containers/PageLayout/pages-layout-data.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar styles = __webpack_require__(/*! ./styles.scss */ \"./src/containers/PageLayout/styles.scss\");\n\nvar PageLayout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(PageLayout, _Component);\n\n  function PageLayout(props) {\n    var _this;\n\n    _classCallCheck(this, PageLayout);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageLayout).call(this, props));\n    _this.state = {\n      url: typeof window == 'undefined' ? props.location : props.history.location.pathname,\n      componentsList: ['Header', 'Home']\n    };\n    return _this;\n  }\n\n  _createClass(PageLayout, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      var url = typeof window == 'undefined' ? nextProps.location : nextProps.history.location.pathname;\n      var componentsList = this.getComponentsList(url);\n      this.setState({\n        url: url,\n        componentsList: componentsList\n      });\n    }\n  }, {\n    key: \"getComponentsList\",\n    value: function getComponentsList(url) {\n      return _pages_layout_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"][url];\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var allLayout = this.state.componentsList.map(function (componentName, id, components) {\n        var Component = _ComponentList__WEBPACK_IMPORTED_MODULE_1__[\"default\"][componentName];\n\n        if (typeof Component === 'undefined') {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            key: \"{id}\",\n            className: styles.error\n          }, \"Can't find \", componentName, \" component!\");\n        }\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n          key: Component\n        });\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: styles.app\n      }, allLayout);\n    }\n  }]);\n\n  return PageLayout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L2luZGV4LmpzPzIyMDIiXSwibmFtZXMiOlsic3R5bGVzIiwicmVxdWlyZSIsIlBhZ2VMYXlvdXQiLCJwcm9wcyIsInN0YXRlIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJoaXN0b3J5IiwicGF0aG5hbWUiLCJjb21wb25lbnRzTGlzdCIsIm5leHRQcm9wcyIsImdldENvbXBvbmVudHNMaXN0Iiwic2V0U3RhdGUiLCJQYWdlc0xheW91dERhdGEiLCJhbGxMYXlvdXQiLCJtYXAiLCJjb21wb25lbnROYW1lIiwiaWQiLCJjb21wb25lbnRzIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50TGlzdCIsImVycm9yIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOERBQUQsQ0FBdEI7O0lBRU1DLFU7Ozs7O0FBRUYsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsb0ZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsU0FBRyxFQUFFLE9BQU9DLE1BQVAsSUFBaUIsV0FBakIsR0FBK0JILEtBQUssQ0FBQ0ksUUFBckMsR0FBZ0RKLEtBQUssQ0FBQ0ssT0FBTixDQUFjRCxRQUFkLENBQXVCRSxRQURqRTtBQUVYQyxvQkFBYyxFQUFFLENBQUMsUUFBRCxFQUFXLE1BQVg7QUFGTCxLQUFiO0FBSGlCO0FBT2xCOzs7OzhDQUV5QkMsUyxFQUFXO0FBQ25DLFVBQU1OLEdBQUcsR0FBRyxPQUFPQyxNQUFQLElBQWlCLFdBQWpCLEdBQStCSyxTQUFTLENBQUNKLFFBQXpDLEdBQW9ESSxTQUFTLENBQUNILE9BQVYsQ0FBa0JELFFBQWxCLENBQTJCRSxRQUEzRjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxLQUFLRSxpQkFBTCxDQUF1QlAsR0FBdkIsQ0FBdkI7QUFDQSxXQUFLUSxRQUFMLENBQWM7QUFBRVIsV0FBRyxFQUFFQSxHQUFQO0FBQVlLLHNCQUFjLEVBQUVBO0FBQTVCLE9BQWQ7QUFDRDs7O3NDQUVpQkwsRyxFQUFLO0FBQ3JCLGFBQU9TLDBEQUFlLENBQUNULEdBQUQsQ0FBdEI7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTVUsU0FBUyxHQUFHLEtBQUtYLEtBQUwsQ0FBV00sY0FBWCxDQUEwQk0sR0FBMUIsQ0FBOEIsVUFBQ0MsYUFBRCxFQUFnQkMsRUFBaEIsRUFBcUJDLFVBQXJCLEVBQW9DO0FBRWxGLFlBQU1DLFNBQVMsR0FBR0Msc0RBQWEsQ0FBQ0osYUFBRCxDQUEvQjs7QUFDQSxZQUFHLE9BQU9HLFNBQVAsS0FBcUIsV0FBeEIsRUFBcUM7QUFDbkMsaUJBQ0U7QUFBSyxlQUFHLEVBQUMsTUFBVDtBQUFnQixxQkFBUyxFQUFFcEIsTUFBTSxDQUFDc0I7QUFBbEMsNEJBQXFETCxhQUFyRCxnQkFERjtBQUdEOztBQUNELGVBQ0ksMkRBQUMsU0FBRDtBQUFXLGFBQUcsRUFBRUc7QUFBaEIsVUFESjtBQUlELE9BWmlCLENBQWxCO0FBY0EsYUFDRTtBQUFLLGlCQUFTLEVBQUVwQixNQUFNLENBQUN1QjtBQUF2QixTQUNHUixTQURILENBREY7QUFLRDs7OztFQXpDb0JLLCtDOztBQTJDVmxCLHlFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbnRhaW5lcnMvUGFnZUxheW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50TGlzdCBmcm9tICcuL0NvbXBvbmVudExpc3QnO1xuaW1wb3J0IFBhZ2VzTGF5b3V0RGF0YSBmcm9tICcuL3BhZ2VzLWxheW91dC1kYXRhJztcblxuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMuc2NzcycpO1xuXG5jbGFzcyBQYWdlTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7ICAgICAgXG5cbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHVybDogdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyA/IHByb3BzLmxvY2F0aW9uIDogcHJvcHMuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgY29tcG9uZW50c0xpc3Q6IFsnSGVhZGVyJywgJ0hvbWUnXVxuICAgICAgfVxuICAgIH0gXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgY29uc3QgdXJsID0gdHlwZW9mIHdpbmRvdyA9PSAndW5kZWZpbmVkJyA/IG5leHRQcm9wcy5sb2NhdGlvbiA6IG5leHRQcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgY29uc3QgY29tcG9uZW50c0xpc3QgPSB0aGlzLmdldENvbXBvbmVudHNMaXN0KHVybCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXJsOiB1cmwsIGNvbXBvbmVudHNMaXN0OiBjb21wb25lbnRzTGlzdCB9KTtcbiAgICB9XG4gIFxuICAgIGdldENvbXBvbmVudHNMaXN0KHVybCkge1xuICAgICAgcmV0dXJuIFBhZ2VzTGF5b3V0RGF0YVt1cmxdO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGFsbExheW91dCA9IHRoaXMuc3RhdGUuY29tcG9uZW50c0xpc3QubWFwKChjb21wb25lbnROYW1lLCBpZCAsIGNvbXBvbmVudHMpID0+IHtcblxuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBDb21wb25lbnRMaXN0W2NvbXBvbmVudE5hbWVdO1xuICAgICAgICBpZih0eXBlb2YgQ29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYga2V5PSd7aWR9JyBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+Q2FuJ3QgZmluZCB7Y29tcG9uZW50TmFtZX0gY29tcG9uZW50ITwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb21wb25lbnQga2V5PXtDb21wb25lbnR9IC8+XG4gICAgICAgICk7XG5cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cbiAgICAgICAgICB7YWxsTGF5b3V0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/index.js\n");

/***/ }),

/***/ "./src/containers/PageLayout/pages-layout-data.js":
/*!********************************************************!*\
  !*** ./src/containers/PageLayout/pages-layout-data.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  '/home': ['Header', 'Home'],\n  '/greetings': ['Header', 'Greetings'],\n  '/about': ['Header', 'About']\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L3BhZ2VzLWxheW91dC1kYXRhLmpzP2E2NDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiLFdBQVUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQURHO0FBRWIsZ0JBQWMsQ0FBQyxRQUFELEVBQVcsV0FBWCxDQUZEO0FBR2IsWUFBVSxDQUFDLFFBQUQsRUFBVyxPQUFYO0FBSEcsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb250YWluZXJzL1BhZ2VMYXlvdXQvcGFnZXMtbGF5b3V0LWRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICcvaG9tZScgOiBbJ0hlYWRlcicsICdIb21lJ10sXG4gICcvZ3JlZXRpbmdzJzogWydIZWFkZXInLCAnR3JlZXRpbmdzJ10sXG4gICcvYWJvdXQnOiBbJ0hlYWRlcicsICdBYm91dCddLFxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/pages-layout-data.js\n");

/***/ }),

/***/ "./src/containers/PageLayout/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/PageLayout/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by extract-css-chunks-webpack-plugin\nmodule.exports = {\"error\":\"PageLayout-error\",\"wrapper\":\"PageLayout-wrapper\"};\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L3N0eWxlcy5zY3NzP2RiMDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9QYWdlTGF5b3V0L3N0eWxlcy5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGV4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclwiOlwiUGFnZUxheW91dC1lcnJvclwiLFwid3JhcHBlclwiOlwiUGFnZUxheW91dC13cmFwcGVyXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NTk4MzczMDg2NTJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL3RvbmluaWNoZXYvRG93bmxvYWRzL1dlYnBhY2tSZWFjdFJlZHV4QXBvbGxvVHV0b3JpYWwvbm9kZV9tb2R1bGVzL2V4dHJhY3QtY3NzLWNodW5rcy13ZWJwYWNrLXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhvdFwiOnRydWUsXCJyZWxvYWRBbGxcIjp0cnVlLFwibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/PageLayout/styles.scss\n");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCI/NTNiOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1yb3V0ZXItZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ })

/******/ });