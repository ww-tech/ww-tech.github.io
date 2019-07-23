webpackHotUpdate("static/development/pages/people.js",{

/***/ "./pages/people.js":
/*!*************************!*\
  !*** ./pages/people.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_people_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/people.scss */ "./styles/people.scss");
/* harmony import */ var _styles_people_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_people_scss__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/Users/matthew.rubenstein/Desktop/ww-tech.github.io/pages/people.js";




function People(_ref) {
  var members = _ref.members;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "title",
    className: _styles_people_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Our Team"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "content",
    className: _styles_people_scss__WEBPACK_IMPORTED_MODULE_5___default.a.bg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "members",
    className: _styles_people_scss__WEBPACK_IMPORTED_MODULE_5___default.a.members,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, members.map(function (_ref2) {
    var id = _ref2.id,
        html_url = _ref2.html_url,
        avatar_url = _ref2.avatar_url,
        name = _ref2.name;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      id: "member",
      className: _styles_people_scss__WEBPACK_IMPORTED_MODULE_5___default.a.member,
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: html_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: avatar_url,
      alt: "avatar",
      className: _styles_people_scss__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, name));
  }))));
}

People.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, members;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return node_fetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.github.com/orgs/WW-tech/public_members");

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();

        case 5:
          members = _context2.sent;
          _context2.next = 8;
          return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all(members.map(
          /*#__PURE__*/
          function () {
            var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
              var id, html_url, avatar_url, url;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      id = _ref4.id, html_url = _ref4.html_url, avatar_url = _ref4.avatar_url, url = _ref4.url;
                      _context.t0 = id;
                      _context.t1 = html_url;
                      _context.t2 = avatar_url;
                      _context.next = 6;
                      return node_fetch__WEBPACK_IMPORTED_MODULE_4___default()(url);

                    case 6:
                      _context.next = 8;
                      return _context.sent.json();

                    case 8:
                      _context.t3 = _context.sent.name;
                      return _context.abrupt("return", {
                        id: _context.t0,
                        html_url: _context.t1,
                        avatar_url: _context.t2,
                        name: _context.t3
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref5.apply(this, arguments);
            };
          }()));

        case 8:
          members = _context2.sent;
          return _context2.abrupt("return", {
            members: members
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (People);

/***/ })

})
//# sourceMappingURL=people.js.57c0682f0d82e8c624e2.hot-update.js.map