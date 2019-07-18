/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ssr-server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/loadable-manifest.json":
/*!*************************************!*\
  !*** ./dist/loadable-manifest.json ***!
  \*************************************/
/*! exports provided: undefined, ../../../components/Greetings, ./styles.scss, ../../../components/Header, ../../../components/Home, tslib, react, apollo-utilities, prop-types, ts-invariant, @babel/runtime/helpers/esm/extends, graphql/language/visitor, @babel/runtime/helpers/esm/objectWithoutPropertiesLoose, @babel/runtime/helpers/esm/inheritsLoose, tiny-invariant, history, hoist-non-react-statics, react-router, ./nodejsCustomInspectSymbol, symbol-observable, invariant, optimism, ./../../webpack/buildin/global.js, ./../../process/browser.js, react-dom, react-is, ../jsutils/inspect, ./blockString, react-loadable, object-assign, react-dom/server, lodash.isequal, path-to-regexp, ./../webpack/buildin/module.js, ./local.js, react-router-dom, graphql-tag, ./ponyfill.js, zen-observable, fast-json-stable-stringify, create-react-context, ./cjs/react.production.min.js, ./cjs/react-dom.production.min.js, scheduler, ./cjs/scheduler.production.min.js, ./factoryWithThrowingShims, ./lib/ReactPropTypesSecret, ./cjs/react-is.production.min.js, ./../../webpack/buildin/harmony-module.js, ./lib/Observable.js, ./cjs/react-dom-server.browser.production.min.js, ./cache.js, immutable-tuple, ./entry.js, ./implementation, gud, fbjs/lib/warning, ./emptyFunction, isarray, ./src/index.js, graphql/language/parser, default */
/***/ (function(module) {

module.exports = {"undefined":[{"id":"","name":null,"file":"Greetings.css","publicPath":"/dist/Greetings.css"},{"id":"","name":null,"file":"Greetings-bundle.js","publicPath":"/dist/Greetings-bundle.js"},{"id":"","name":null,"file":"Header.css","publicPath":"/dist/Header.css"},{"id":"","name":null,"file":"Header-bundle.js","publicPath":"/dist/Header-bundle.js"},{"id":"","name":null,"file":"Home.css","publicPath":"/dist/Home.css"},{"id":"","name":null,"file":"Home-bundle.js","publicPath":"/dist/Home-bundle.js"},{"id":"","name":null,"file":"main.css","publicPath":"/dist/main.css"},{"id":"","name":null,"file":"main.css","publicPath":"/dist/main.css"},{"id":"","name":null,"file":"main.css","publicPath":"/dist/main.css"},{"id":41,"name":null,"file":"main.css","publicPath":"/dist/main.css"},{"id":"","name":null,"file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":"","name":null,"file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":"","name":null,"file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":41,"name":null,"file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"../../../components/Greetings":[{"id":66,"name":"./src/components/Greetings/index.js","file":"Greetings.css","publicPath":"/dist/Greetings.css"},{"id":66,"name":"./src/components/Greetings/index.js","file":"Greetings-bundle.js","publicPath":"/dist/Greetings-bundle.js"}],"./styles.scss":[{"id":70,"name":"./src/components/Greetings/styles.scss","file":"Greetings.css","publicPath":"/dist/Greetings.css"},{"id":70,"name":"./src/components/Greetings/styles.scss","file":"Greetings-bundle.js","publicPath":"/dist/Greetings-bundle.js"},{"id":68,"name":"./src/components/Header/styles.scss","file":"Header.css","publicPath":"/dist/Header.css"},{"id":68,"name":"./src/components/Header/styles.scss","file":"Header-bundle.js","publicPath":"/dist/Header-bundle.js"},{"id":69,"name":"./src/components/Home/styles.scss","file":"Home.css","publicPath":"/dist/Home.css"},{"id":69,"name":"./src/components/Home/styles.scss","file":"Home-bundle.js","publicPath":"/dist/Home-bundle.js"},{"id":48,"name":"./src/components/Loading/styles.scss","file":"main.css","publicPath":"/dist/main.css"},{"id":49,"name":"./src/containers/PageLayout/styles.scss","file":"main.css","publicPath":"/dist/main.css"},{"id":54,"name":"./src/components/App/styles.scss","file":"main.css","publicPath":"/dist/main.css"},{"id":48,"name":"./src/components/Loading/styles.scss","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":49,"name":"./src/containers/PageLayout/styles.scss","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":54,"name":"./src/components/App/styles.scss","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"../../../components/Header":[{"id":65,"name":"./src/components/Header/index.js","file":"Header.css","publicPath":"/dist/Header.css"},{"id":65,"name":"./src/components/Header/index.js","file":"Header-bundle.js","publicPath":"/dist/Header-bundle.js"}],"../../../components/Home":[{"id":67,"name":"./src/components/Home/index.js","file":"Home.css","publicPath":"/dist/Home.css"},{"id":67,"name":"./src/components/Home/index.js","file":"Home-bundle.js","publicPath":"/dist/Home-bundle.js"}],"tslib":[{"id":0,"name":"./node_modules/tslib/tslib.es6.js","file":"main.css","publicPath":"/dist/main.css"},{"id":0,"name":"./node_modules/tslib/tslib.es6.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"react":[{"id":1,"name":"./node_modules/react/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":1,"name":"./node_modules/react/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"apollo-utilities":[{"id":2,"name":"./node_modules/apollo-utilities/lib/bundle.esm.js","file":"main.css","publicPath":"/dist/main.css"},{"id":2,"name":"./node_modules/apollo-utilities/lib/bundle.esm.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"prop-types":[{"id":3,"name":"./node_modules/prop-types/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":3,"name":"./node_modules/prop-types/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"ts-invariant":[{"id":4,"name":"./node_modules/ts-invariant/lib/invariant.esm.js","file":"main.css","publicPath":"/dist/main.css"},{"id":9,"name":"./node_modules/react-apollo/node_modules/ts-invariant/lib/invariant.esm.js","file":"main.css","publicPath":"/dist/main.css"},{"id":28,"name":"./node_modules/apollo-link/node_modules/ts-invariant/lib/invariant.esm.js","file":"main.css","publicPath":"/dist/main.css"},{"id":29,"name":"./node_modules/apollo-link-http-common/node_modules/ts-invariant/lib/invariant.esm.js","file":"main.css","publicPath":"/dist/main.css"},{"id":4,"name":"./node_modules/ts-invariant/lib/invariant.esm.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":9,"name":"./node_modules/react-apollo/node_modules/ts-invariant/lib/invariant.esm.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":28,"name":"./node_modules/apollo-link/node_modules/ts-invariant/lib/invariant.esm.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"},{"id":29,"name":"./node_modules/apollo-link-http-common/node_modules/ts-invariant/lib/invariant.esm.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"@babel/runtime/helpers/esm/extends":[{"id":5,"name":"./node_modules/@babel/runtime/helpers/esm/extends.js","file":"main.css","publicPath":"/dist/main.css"},{"id":5,"name":"./node_modules/@babel/runtime/helpers/esm/extends.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"graphql/language/visitor":[{"id":6,"name":"./node_modules/graphql/language/visitor.mjs","file":"main.css","publicPath":"/dist/main.css"},{"id":6,"name":"./node_modules/graphql/language/visitor.mjs","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":[{"id":7,"name":"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","file":"main.css","publicPath":"/dist/main.css"},{"id":7,"name":"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"@babel/runtime/helpers/esm/inheritsLoose":[{"id":8,"name":"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","file":"main.css","publicPath":"/dist/main.css"},{"id":8,"name":"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"tiny-invariant":[{"id":10,"name":"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js","file":"main.css","publicPath":"/dist/main.css"},{"id":10,"name":"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"history":[{"id":11,"name":"./node_modules/history/esm/history.js","file":"main.css","publicPath":"/dist/main.css"},{"id":11,"name":"./node_modules/history/esm/history.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"hoist-non-react-statics":[{"id":12,"name":"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"main.css","publicPath":"/dist/main.css"},{"id":12,"name":"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"react-router":[{"id":13,"name":"./node_modules/react-router/esm/react-router.js","file":"main.css","publicPath":"/dist/main.css"},{"id":13,"name":"./node_modules/react-router/esm/react-router.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./nodejsCustomInspectSymbol":[{"id":14,"name":"./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs","file":"main.css","publicPath":"/dist/main.css"},{"id":14,"name":"./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"symbol-observable":[{"id":15,"name":"./node_modules/symbol-observable/es/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":15,"name":"./node_modules/symbol-observable/es/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"invariant":[{"id":16,"name":"./node_modules/invariant/browser.js","file":"main.css","publicPath":"/dist/main.css"},{"id":16,"name":"./node_modules/invariant/browser.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"optimism":[{"id":17,"name":"./node_modules/optimism/lib/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":17,"name":"./node_modules/optimism/lib/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./../../webpack/buildin/global.js":[{"id":18,"name":"./node_modules/webpack/buildin/global.js","file":"main.css","publicPath":"/dist/main.css"},{"id":18,"name":"./node_modules/webpack/buildin/global.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./../../process/browser.js":[{"id":19,"name":"./node_modules/process/browser.js","file":"main.css","publicPath":"/dist/main.css"},{"id":19,"name":"./node_modules/process/browser.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"react-dom":[{"id":20,"name":"./node_modules/react-dom/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":20,"name":"./node_modules/react-dom/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"react-is":[{"id":21,"name":"./node_modules/react-is/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":21,"name":"./node_modules/react-is/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"../jsutils/inspect":[{"id":22,"name":"./node_modules/graphql/jsutils/inspect.mjs","file":"main.css","publicPath":"/dist/main.css"},{"id":22,"name":"./node_modules/graphql/jsutils/inspect.mjs","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./blockString":[{"id":23,"name":"./node_modules/graphql/language/blockString.mjs","file":"main.css","publicPath":"/dist/main.css"},{"id":23,"name":"./node_modules/graphql/language/blockString.mjs","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"react-loadable":[{"id":24,"name":"./node_modules/react-loadable/lib/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":24,"name":"./node_modules/react-loadable/lib/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"object-assign":[{"id":25,"name":"./node_modules/object-assign/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":25,"name":"./node_modules/object-assign/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"react-dom/server":[{"id":26,"name":"./node_modules/react-dom/server.browser.js","file":"main.css","publicPath":"/dist/main.css"},{"id":26,"name":"./node_modules/react-dom/server.browser.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"lodash.isequal":[{"id":27,"name":"./node_modules/lodash.isequal/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":27,"name":"./node_modules/lodash.isequal/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"path-to-regexp":[{"id":30,"name":"./node_modules/react-router/node_modules/path-to-regexp/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":30,"name":"./node_modules/react-router/node_modules/path-to-regexp/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./../webpack/buildin/module.js":[{"id":32,"name":"./node_modules/webpack/buildin/module.js","file":"main.css","publicPath":"/dist/main.css"},{"id":32,"name":"./node_modules/webpack/buildin/module.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./local.js":[{"id":33,"name":"./node_modules/optimism/lib/local.js","file":"main.css","publicPath":"/dist/main.css"},{"id":33,"name":"./node_modules/optimism/lib/local.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"react-router-dom":[{"id":34,"name":"./node_modules/react-router-dom/esm/react-router-dom.js","file":"main.css","publicPath":"/dist/main.css"},{"id":34,"name":"./node_modules/react-router-dom/esm/react-router-dom.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"graphql-tag":[{"id":35,"name":"./node_modules/graphql-tag/src/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":35,"name":"./node_modules/graphql-tag/src/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./ponyfill.js":[{"id":36,"name":"./node_modules/symbol-observable/es/ponyfill.js","file":"main.css","publicPath":"/dist/main.css"},{"id":36,"name":"./node_modules/symbol-observable/es/ponyfill.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"zen-observable":[{"id":37,"name":"./node_modules/zen-observable/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":37,"name":"./node_modules/zen-observable/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"fast-json-stable-stringify":[{"id":38,"name":"./node_modules/fast-json-stable-stringify/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":38,"name":"./node_modules/fast-json-stable-stringify/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"create-react-context":[{"id":39,"name":"./node_modules/create-react-context/lib/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":39,"name":"./node_modules/create-react-context/lib/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./cjs/react.production.min.js":[{"id":42,"name":"./node_modules/react/cjs/react.production.min.js","file":"main.css","publicPath":"/dist/main.css"},{"id":42,"name":"./node_modules/react/cjs/react.production.min.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./cjs/react-dom.production.min.js":[{"id":43,"name":"./node_modules/react-dom/cjs/react-dom.production.min.js","file":"main.css","publicPath":"/dist/main.css"},{"id":43,"name":"./node_modules/react-dom/cjs/react-dom.production.min.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"scheduler":[{"id":44,"name":"./node_modules/scheduler/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":44,"name":"./node_modules/scheduler/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./cjs/scheduler.production.min.js":[{"id":45,"name":"./node_modules/scheduler/cjs/scheduler.production.min.js","file":"main.css","publicPath":"/dist/main.css"},{"id":45,"name":"./node_modules/scheduler/cjs/scheduler.production.min.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./factoryWithThrowingShims":[{"id":46,"name":"./node_modules/prop-types/factoryWithThrowingShims.js","file":"main.css","publicPath":"/dist/main.css"},{"id":46,"name":"./node_modules/prop-types/factoryWithThrowingShims.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./lib/ReactPropTypesSecret":[{"id":47,"name":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"main.css","publicPath":"/dist/main.css"},{"id":47,"name":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./cjs/react-is.production.min.js":[{"id":50,"name":"./node_modules/react-is/cjs/react-is.production.min.js","file":"main.css","publicPath":"/dist/main.css"},{"id":50,"name":"./node_modules/react-is/cjs/react-is.production.min.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./../../webpack/buildin/harmony-module.js":[{"id":51,"name":"./node_modules/webpack/buildin/harmony-module.js","file":"main.css","publicPath":"/dist/main.css"},{"id":51,"name":"./node_modules/webpack/buildin/harmony-module.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./lib/Observable.js":[{"id":52,"name":"./node_modules/zen-observable/lib/Observable.js","file":"main.css","publicPath":"/dist/main.css"},{"id":52,"name":"./node_modules/zen-observable/lib/Observable.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./cjs/react-dom-server.browser.production.min.js":[{"id":53,"name":"./node_modules/react-dom/cjs/react-dom-server.browser.production.min.js","file":"main.css","publicPath":"/dist/main.css"},{"id":53,"name":"./node_modules/react-dom/cjs/react-dom-server.browser.production.min.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./cache.js":[{"id":55,"name":"./node_modules/optimism/lib/cache.js","file":"main.css","publicPath":"/dist/main.css"},{"id":55,"name":"./node_modules/optimism/lib/cache.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"immutable-tuple":[{"id":56,"name":"./node_modules/immutable-tuple/dist/tuple.mjs","file":"main.css","publicPath":"/dist/main.css"},{"id":56,"name":"./node_modules/immutable-tuple/dist/tuple.mjs","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./entry.js":[{"id":57,"name":"./node_modules/optimism/lib/entry.js","file":"main.css","publicPath":"/dist/main.css"},{"id":57,"name":"./node_modules/optimism/lib/entry.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./implementation":[{"id":58,"name":"./node_modules/create-react-context/lib/implementation.js","file":"main.css","publicPath":"/dist/main.css"},{"id":58,"name":"./node_modules/create-react-context/lib/implementation.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"gud":[{"id":59,"name":"./node_modules/gud/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":59,"name":"./node_modules/gud/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"fbjs/lib/warning":[{"id":60,"name":"./node_modules/fbjs/lib/warning.js","file":"main.css","publicPath":"/dist/main.css"},{"id":60,"name":"./node_modules/fbjs/lib/warning.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./emptyFunction":[{"id":61,"name":"./node_modules/fbjs/lib/emptyFunction.js","file":"main.css","publicPath":"/dist/main.css"},{"id":61,"name":"./node_modules/fbjs/lib/emptyFunction.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"isarray":[{"id":62,"name":"./node_modules/react-router/node_modules/isarray/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":62,"name":"./node_modules/react-router/node_modules/isarray/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"./src/index.js":[{"id":63,"name":"./src/index.js","file":"main.css","publicPath":"/dist/main.css"},{"id":63,"name":"./src/index.js","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}],"graphql/language/parser":[{"id":64,"name":"./node_modules/graphql/language/parser.mjs","file":"main.css","publicPath":"/dist/main.css"},{"id":64,"name":"./node_modules/graphql/language/parser.mjs","file":"main-bundle.js","publicPath":"/dist/main-bundle.js"}]};

/***/ }),

/***/ "./src/components/App/ssr-index.js":
/*!*****************************************!*\
  !*** ./src/components/App/ssr-index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/PageLayout */ "./src/containers/PageLayout/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers */ "./src/reducers/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.scss */ "./src/components/App/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var req = _ref.req;
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["default"], {});
  var context = {};
  var GRAPHQL_URL = "http://localhost:4001/graphql";
  var client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    ssrMode: true,
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
      uri: GRAPHQL_URL
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_11___default.a.appWrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: client
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["StaticRouter"], {
    location: req.url,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    exact: true,
    path: "*",
    component: _containers_PageLayout__WEBPACK_IMPORTED_MODULE_5__["default"]
  }))))));
});

/***/ }),

/***/ "./src/components/App/styles.scss":
/*!****************************************!*\
  !*** ./src/components/App/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"appWrapper":"App-appWrapper"};

/***/ }),

/***/ "./src/components/Greetings/index.js":
/*!*******************************************!*\
  !*** ./src/components/Greetings/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var styles = __webpack_require__(/*! ./styles.scss */ "./src/components/Greetings/styles.scss");

var Greetings =
/*#__PURE__*/
function (_Component) {
  _inherits(Greetings, _Component);

  function Greetings(props) {
    var _this;

    _classCallCheck(this, Greetings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Greetings).call(this, props));
    _this.state = {
      userName: "noname",
      editMode: false
    };
    return _this;
  }

  _createClass(Greetings, [{
    key: "doneEditUsername",
    value: function doneEditUsername() {
      var newName = document.querySelector('#inputField').value;
    }
  }, {
    key: "usernameChanged",
    value: function usernameChanged(el) {
      var newName = el.target.value;
    }
  }, {
    key: "onToggleEditMode",
    value: function onToggleEditMode() {
      this.setState({
        editMode: !this.state.editMode
      });
    }
  }, {
    key: "doneEditUsername",
    value: function doneEditUsername() {
      this.setState({
        editMode: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        onClick: function onClick() {
          _this2.onToggleEditMode();
        }
      }, "Hello:  ", this.state.userName);
      if (this.state.editMode) element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Type new name:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "inputField",
        value: this.state.userName,
        onChange: function onChange(el) {
          _this2.usernameChanged(el);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.doneEditUsername();
        }
      }, "done"));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles.wrapper
      }, element));
    }
  }]);

  return Greetings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Greetings);

/***/ }),

/***/ "./src/components/Greetings/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/Greetings/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"wrapper":"Greetings-wrapper"};

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



var styles = __webpack_require__(/*! ./styles.scss */ "./src/components/Header/styles.scss");

var Header = function Header(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.wrapper,
    key: "Header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/home"
  }, "HOME")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/greetings"
  }, "GREETINGS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about"
  }, "ABOUT"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"wrapper":"Header-wrapper","active":"Header-active"};

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShowText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShowText */ "./src/components/ShowText/index.js");



var styles = __webpack_require__(/*! ./styles.scss */ "./src/components/Home/styles.scss");

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.wrapper
  }, "This is my ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowText__WEBPACK_IMPORTED_MODULE_1__["default"], {
    textToShow: "HOME"
  }), " section!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Home/styles.scss":
/*!*****************************************!*\
  !*** ./src/components/Home/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"wrapper":"Home-wrapper"};

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

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"wrapper":"Loading-wrapper"};

/***/ }),

/***/ "./src/components/ShowText/index.js":
/*!******************************************!*\
  !*** ./src/components/ShowText/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var textToShow = _ref.textToShow;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, textToShow));
});

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
    return Promise.resolve(/*! import() | Header */).then(__webpack_require__.bind(null, /*! ../../../components/Header */ "./src/components/Header/index.js"));
  },
  modules: ['../../../components/Header'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Header */ "./src/components/Header/index.js")];
  },
  loading: function loading() {
    return _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
});
var Home = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() | Home */).then(__webpack_require__.bind(null, /*! ../../../components/Home */ "./src/components/Home/index.js"));
  },
  modules: ['../../../components/Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Home */ "./src/components/Home/index.js")];
  },
  loading: function loading() {
    return _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
});
var Greetings = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({
  loader: function loader() {
    return Promise.resolve(/*! import() | Greetings */).then(__webpack_require__.bind(null, /*! ../../../components/Greetings */ "./src/components/Greetings/index.js"));
  },
  modules: ['../../../components/Greetings'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ../../../components/Greetings */ "./src/components/Greetings/index.js")];
  },
  loading: function loading() {
    return _components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  Home: Home,
  Greetings: Greetings,
  Header: Header
});

/***/ }),

/***/ "./src/containers/PageLayout/index.js":
/*!********************************************!*\
  !*** ./src/containers/PageLayout/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentList */ "./src/containers/PageLayout/ComponentList/index.js");
/* harmony import */ var _pages_layout_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-layout-data */ "./src/containers/PageLayout/pages-layout-data.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Loading */ "./src/components/Loading/index.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query */ "./src/containers/PageLayout/query.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
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
      console.log("getPageByUrl  >>>>>", this.props.data.getPageByUrl);
      var allLayout = this.props.data.getPageByUrl.layout.map(function (layoutList) {
        var layout = layoutList.components.map(function (component, id, components) {
          var componentName = component.name;
          var ChildComponent = _ComponentList__WEBPACK_IMPORTED_MODULE_1__["default"][componentName];

          if (typeof ChildComponent === 'undefined') {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: "{id}",
              className: styles.error
            }, "Can't find ", componentName, " component!");
          }

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildComponent, {
            key: componentName
          });
        });
        return layout;
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles.app
      }, allLayout);
    }
  }]);

  return PageLayout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_5__["graphql"])(_query__WEBPACK_IMPORTED_MODULE_4__["default"], {
  options: function options(props) {
    return {
      variables: {
        url: props.history.location.pathname
      }
    };
  }
})(PageLayout));

/***/ }),

/***/ "./src/containers/PageLayout/pages-layout-data.js":
/*!********************************************************!*\
  !*** ./src/containers/PageLayout/pages-layout-data.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  '/': ['Header', 'Home'],
  '/home': ['Header', 'Home'],
  '/greetings': ['Header', 'Greetings'],
  '/about': ['Header', 'About']
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

/***/ "./src/containers/PageLayout/styles.scss":
/*!***********************************************!*\
  !*** ./src/containers/PageLayout/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_App_ssr_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/App/ssr-index */ "./src/components/App/ssr-index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dist/loadable-manifest.json */ "./dist/loadable-manifest.json");
var _dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dist/loadable-manifest.json */ "./dist/loadable-manifest.json", 1);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loadable/webpack */ "react-loadable/webpack");
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_10__);











var PORT = 3006;
var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use('/server-build', express__WEBPACK_IMPORTED_MODULE_1___default.a["static"]('./server-build'));
app.use('/dist', express__WEBPACK_IMPORTED_MODULE_1___default.a["static"]('dist')); // to serve frontent prod static files

app.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_1___default.a["static"]('./src/images/favicon.ico'));
app.get('/*', function (req, res) {
  var GRAPHQL_URL = "http://localhost:4001/graphql";
  var client = new apollo_client__WEBPACK_IMPORTED_MODULE_8__["ApolloClient"]({
    ssrMode: true,
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_9__["HttpLink"]({
      uri: GRAPHQL_URL
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_10__["InMemoryCache"]()
  });
  Object(react_apollo__WEBPACK_IMPORTED_MODULE_6__["getDataFromTree"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_App_ssr_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
    req: req
  })).then(function () {
    var initialState = client.extract();
    console.log(">>>>> initialState >>>>>", initialState);
    var modules = [];
    var content = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_4___default.a.Capture, {
      report: function report(moduleName) {
        return modules.push(moduleName);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_App_ssr_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      req: req
    }))); // Extract CSS and JS bundles

    var bundles = Object(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_7__["getBundles"])(_dist_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_5__, modules);
    var cssBundles = bundles.filter(function (bundle) {
      return bundle && bundle.file.split('.').pop() === 'css';
    });
    var jsBundles = bundles.filter(function (bundle) {
      return bundle && bundle.file.split('.').pop() === 'js';
    });
    res.status(200);
    res.send("<!doctype html>\n      <html lang=\"en\">\n      <head>\n        <meta charSet=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <title>Server Side Rendering and Bundle Splitting</title>\n        <link\n        href=\"/dist/main.css\"\n        rel=\"stylesheet\"\n        as=\"style\"\n        media=\"screen, projection\"\n        type=\"text/css\"\n        charSet=\"UTF-8\"\n      />\n        <!-- Page specific CSS bundle chunks -->      \n        ".concat(cssBundles.map(function (bundle) {
      return "\n            <link\n              href=\"".concat(bundle.publicPath, "\"\n              rel=\"stylesheet\"\n              as=\"style\"\n              media=\"screen, projection\"\n              type=\"text/css\"\n              charSet=\"UTF-8\"\n            />");
    }).join('\n'), "\n        <!-- Page specific JS bundle chunks -->\n        ").concat(jsBundles.map(function (_ref) {
      var file = _ref.file;
      return "<script src=\"/dist/".concat(file, "\"></script>");
    }).join('\n'), "\n        <!-- =========================== -->\n      </head>\n      <body cz-shortcut-listen=\"true\">\n        <div id=\"root\"/>\n          ").concat(content, "\n        </div>\n        <script src=\"/dist/main-bundle.js\"></script>\n      </body>\n    </html>"));
    res.end();
  });
});
react_loadable__WEBPACK_IMPORTED_MODULE_4___default.a.preloadAll().then(function () {
  app.listen(PORT, function () {
    console.log("\uD83D\uDE0E Server is listening on port ".concat(PORT));
  });
});

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

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

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