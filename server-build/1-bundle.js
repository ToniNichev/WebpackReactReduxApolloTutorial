exports.ids = [1];
exports.modules = {

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
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

var CHANGE_USERNAME = 'CHANGE_USERNAME';
var TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';

var Greetings =
/*#__PURE__*/
function (_Component) {
  _inherits(Greetings, _Component);

  function Greetings(props) {
    _classCallCheck(this, Greetings);

    return _possibleConstructorReturn(this, _getPrototypeOf(Greetings).call(this, props));
  }

  _createClass(Greetings, [{
    key: "doneEditUsername",
    value: function doneEditUsername() {
      var newName = document.querySelector('#inputField').value;
      this.props.changeUserName(newName);
      this.props.toggleLogInPopup();
    }
  }, {
    key: "usernameChanged",
    value: function usernameChanged(el) {
      var newName = el.target.value;
      this.props.changeUserName(newName);
    }
  }, {
    key: "onToggleEditMode",
    value: function onToggleEditMode() {
      this.props.toggleLogInPopup();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        onClick: function onClick() {
          _this.onToggleEditMode();
        }
      }, "Hello:  ", this.props.userName);
      if (this.props.editMode) element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Type new name:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "inputField",
        value: this.props.userName,
        onChange: function onChange(el) {
          _this.usernameChanged(el);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this.doneEditUsername();
        }
      }, "done"));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles.wrapper
      }, element));
    }
  }]);

  return Greetings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(storeState) {
  return {
    userName: storeState.user.userName,
    editMode: storeState.user.editMode
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleLogInPopup: function toggleLogInPopup() {
      dispatch({
        type: TOGGLE_EDIT_MODE
      });
    },
    changeUserName: function changeUserName(userName) {
      dispatch({
        type: CHANGE_USERNAME,
        data: userName
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Greetings));

/***/ }),

/***/ "./src/components/Greetings/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/Greetings/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"Greetings-wrapper"};

/***/ })

};;