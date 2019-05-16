/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"1":1,"2":1,"3":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + "-bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react/no-danger */


var Html = function Html(_ref) {
  var content = _ref.content,
      cache = _ref.client.cache;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "TONI'S TUTORIAL")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    charSet: "UTF-8",
    dangerouslySetInnerHTML: {
      __html: "window.__APOLLO_STATE__=".concat(JSON.stringify(cache.extract()), ";")
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "text/javascript",
    src: "dist/main-bundle.js",
    charSet: "UTF-8"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/components/Loading/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loading/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var styles = __webpack_require__(/*! ./styles.scss */ "./src/components/Loading/styles.scss");
/**
 * HELPER COMPONENT TO DISPLAY LOADING ... AND HANDLE ERRORS WHEN COMPONENTS LOADS DYNAMICALLY 
 * @param {} props 
 */


var Loading = function Loading(props) {
  if (props.error) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: styles.wrapper
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Error loading component!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, props.error.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.error.stack), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: props.retry
    }, "Retry")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Loading/styles.scss":
/*!********************************************!*\
  !*** ./src/components/Loading/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Loading-wrapper"};

/***/ }),

/***/ "./src/containers/PageLayout/ComponentList/index.js":
/*!**********************************************************!*\
  !*** ./src/containers/PageLayout/ComponentList/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Loading */ "./src/components/Loading/index.js");


/* Components */

var Header = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../../components/Header */ "./src/components/Header/index.js"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var Home = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../../components/Home */ "./src/components/Home/index.js"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var About = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../../../components/About */ "./src/components/About/index.js"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var Greetings = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../../components/Greetings */ "./src/components/Greetings/index.js"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
var DogsCatalog = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../containers/DogsCatalog */ "./src/containers/DogsCatalog/index.js"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  Home: Home,
  About: About,
  Greetings: Greetings,
  DogsCatalogWithRedux: DogsCatalog,
  Header: Header
});

/***/ }),

/***/ "./src/containers/PageLayout/query.js":
/*!********************************************!*\
  !*** ./src/containers/PageLayout/query.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nquery getPageByUrl($url: String) \n{\n  getPageByUrl(url: $url) {\n    id\n    url\n    layout {\n      span\n      components {\n        name\n      }        \n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (query);

/***/ }),

/***/ "./src/containers/PageLayout/ssr-index.js":
/*!************************************************!*\
  !*** ./src/containers/PageLayout/ssr-index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentList */ "./src/containers/PageLayout/ComponentList/index.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "./src/containers/PageLayout/query.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var styles = __webpack_require__(/*! ./styles.scss */ "./src/containers/PageLayout/styles.scss");

var PageLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(PageLayout, _Component);

  function PageLayout(props) {
    _classCallCheck(this, PageLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageLayout).call(this, props));
  }

  _createClass(PageLayout, [{
    key: "render",
    value: function render() {
      console.log(">>>>>> his.props.data: ", this.props.data);
      console.log(">>>>>> getPageByUrl: ", this.props.data.getPageByUrl);
      var allLayout = this.props.data.getPageByUrl.layout.map(function (layoutList) {
        var layout = layoutList.components.map(function (component, id) {
          var componentName = component.name;
          console.log(">>>>>> componentName: ", componentName);
          var ChildComponent = _ComponentList__WEBPACK_IMPORTED_MODULE_1__["default"][componentName];

          if (typeof ChildComponent === 'undefined') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: componentName + '-' + id,
              className: styles.error
            }, "Can't find `", componentName, "` component!");
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildComponent, {
            key: componentName + '-' + id
          });
        });
        return layout;
      });
      return allLayout;
    }
  }]);

  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(_query__WEBPACK_IMPORTED_MODULE_2__["default"], {
  options: function options(props) {
    console.log(">>>>>> location : ", props.location);
    return {
      variables: {
        url: props.location
      }
    };
  }
})(PageLayout));

/***/ }),

/***/ "./src/containers/PageLayout/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/PageLayout/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"error":"PageLayout-error","wrapper":"PageLayout-wrapper"};

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/reducers/user.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CHANGE_USERNAME = 'CHANGE_USERNAME';
var TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
var initialState = {
  todos: [],
  userName: "No Name",
  editMode: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CHANGE_USERNAME:
      {
        var newState = _objectSpread({}, state);

        newState.userName = action.data;
        return newState;
      }

    case TOGGLE_EDIT_MODE:
      {
        var _newState = _objectSpread({}, state);

        _newState.editMode = !_newState.editMode;
        return _newState;
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./ssr-server.js":
/*!***********************!*\
  !*** ./ssr-server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_containers_PageLayout_ssr_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/containers/PageLayout/ssr-index */ "./src/containers/PageLayout/ssr-index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./html.js */ "./html.js");
/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/reducers */ "./src/reducers/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);

















var PORT = Object({"APP_NAME":"Webpack React Tutorial","GRAPHQL_URL":"http://localhost:4001/graphql"}).PORT || 3006;
var app = express__WEBPACK_IMPORTED_MODULE_3___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_3___default.a["static"]('./build'));
app.use('/dist', express__WEBPACK_IMPORTED_MODULE_3___default.a["static"]('dist')); // to serve frontent prod static files

app.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_3___default.a["static"]('assets/images/favicon.ico'));
app.get('/*', function (req, res) {
  var GRAPHQL_URL = "http://localhost:4001/graphql";
  var client = new apollo_client__WEBPACK_IMPORTED_MODULE_7__["ApolloClient"]({
    ssrMode: true,
    link: Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_8__["createHttpLink"])({
      uri: GRAPHQL_URL,
      fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_11___default.a,
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie')
      }
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__["InMemoryCache"]()
  });
  var context = {};
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_14__["createStore"])(_src_reducers__WEBPACK_IMPORTED_MODULE_13__["default"], {});
  var app = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_15__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
    client: client
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["StaticRouter"], {
    context: context,
    location: req.url
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_containers_PageLayout_ssr_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    location: req.url
  }))));
  Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["getDataFromTree"])(app).then(function () {
    // We are ready to render for real
    var content = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(app);
    var initialState = client.extract();
    var html = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_html_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      content: content,
      client: client
    });
    res.status(200);
    res.send("<!doctype html>\n".concat(react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToStaticMarkup(html)));
    res.end();
  }, function (reason) {
    // rejection
    console.log("ERROR !!!!!", reason);
  });
});
app.listen(PORT, function () {
  console.log("\uD83D\uDE0E Server is listening on port ".concat(PORT));
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./ssr-server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./ssr-server.js */"./ssr-server.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });