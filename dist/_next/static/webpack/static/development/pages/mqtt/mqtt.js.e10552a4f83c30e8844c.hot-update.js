webpackHotUpdate("static\\development\\pages\\mqtt\\mqtt.js",{

/***/ "./src/pages/mqtt/mqtt.js":
/*!********************************!*\
  !*** ./src/pages/mqtt/mqtt.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MqttPage; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/nav/nav.component */ "./src/component/nav/nav.component.js");





var _jsxFileName = "E:\\server side rendering\\reactJs\\work-managerment\\src\\pages\\mqtt\\mqtt.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var mqtt = __webpack_require__(/*! mqtt */ "./node_modules/mqtt/lib/connect/index.js");

var client = mqtt.connect('mqtt://test.mosquitto.org');

var MqttPage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MqttPage, _React$Component);

  var _super = _createSuper(MqttPage);

  function MqttPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MqttPage);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MqttPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      client.on('connect', function () {
        client.subscribe('presence', function (err) {
          if (!err) {
            client.publish('presence', 'Hello mqtt');
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_component_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, "Hello, I'm the mqtt page"), __jsx("img", {
        src: "/logo.png",
        alt: "my image",
        width: "100",
        height: "100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }), __jsx("img", {
        src: "/imgs/logo.jpg",
        alt: "my image",
        width: "100",
        height: "100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }));
    }
  }]);

  return MqttPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbXF0dC9tcXR0LmpzIl0sIm5hbWVzIjpbIm1xdHQiLCJyZXF1aXJlIiwiY2xpZW50IiwiY29ubmVjdCIsIk1xdHRQYWdlIiwicHJvcHMiLCJzdGF0ZSIsIm9uIiwic3Vic2NyaWJlIiwiZXJyIiwicHVibGlzaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBcEI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFJRixJQUFJLENBQUNHLE9BQUwsQ0FBYSwyQkFBYixDQUFoQjs7SUFHcUJDLFE7Ozs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFJbEI7Ozs7d0NBRW1CO0FBQ2xCSixZQUFNLENBQUNLLEVBQVAsQ0FBVSxTQUFWLEVBQXFCLFlBQVk7QUFDL0JMLGNBQU0sQ0FBQ00sU0FBUCxDQUFpQixVQUFqQixFQUE2QixVQUFVQyxHQUFWLEVBQWU7QUFDMUMsY0FBSSxDQUFDQSxHQUFMLEVBQVU7QUFDUlAsa0JBQU0sQ0FBQ1EsT0FBUCxDQUFlLFVBQWYsRUFBMkIsWUFBM0I7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQU5EO0FBT0Q7Ozs2QkFFUTtBQUNQLGFBQ0MsbUVBQ0csTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsRUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUZILEVBR0c7QUFBSyxXQUFHLEVBQUMsV0FBVDtBQUFxQixXQUFHLEVBQUMsVUFBekI7QUFBcUMsYUFBSyxFQUFDLEtBQTNDO0FBQWlELGNBQU0sRUFBQyxLQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEgsRUFJRztBQUFLLFdBQUcsRUFBQyxnQkFBVDtBQUEwQixXQUFHLEVBQUMsVUFBOUI7QUFBMEMsYUFBSyxFQUFDLEtBQWhEO0FBQXNELGNBQU0sRUFBQyxLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkgsQ0FERDtBQVFEOzs7O0VBMUJtQ0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbXF0dFxcbXF0dC5qcy5lMTA1NTJhNGY4M2MzMGU4ODQ0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L25hdi9uYXYuY29tcG9uZW50XCI7XG5jb25zdCBtcXR0ID0gcmVxdWlyZSgnbXF0dCcpXG5jb25zdCBjbGllbnQgID0gbXF0dC5jb25uZWN0KCdtcXR0Oi8vdGVzdC5tb3NxdWl0dG8ub3JnJylcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNcXR0UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNsaWVudC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsaWVudC5zdWJzY3JpYmUoJ3ByZXNlbmNlJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgIGNsaWVudC5wdWJsaXNoKCdwcmVzZW5jZScsICdIZWxsbyBtcXR0JylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgIDw+XG4gICAgICAgIDxOYXZDb21wb25lbnQgLz5cbiAgICAgICAgPHA+SGVsbG8sIEknbSB0aGUgbXF0dCBwYWdlPC9wPlxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIm15IGltYWdlXCIgIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgIC8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZ3MvbG9nby5qcGdcIiBhbHQ9XCJteSBpbWFnZVwiICB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiICAvPlxuICAgICA8Lz5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=