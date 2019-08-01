webpackHotUpdate("static/development/pages/repos.js",{

/***/ "./pages/repos.js":
/*!************************!*\
  !*** ./pages/repos.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/repos.scss */ "./styles/repos.scss");
/* harmony import */ var _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_repos_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-github-btn */ "./node_modules/react-github-btn/index.js");


var _jsxFileName = "/Users/matthew.rubenstein/Desktop/ww-tech.github.io/pages/repos.js";





function Repos(_ref) {
  var repos = _ref.repos;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "title",
    className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Our Projects"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "content",
    className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.repos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, repos.map(function (_ref2) {
    var id = _ref2.id,
        html_url = _ref2.html_url,
        name = _ref2.name,
        description = _ref2.description,
        language = _ref2.language,
        homepage = _ref2.homepage;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "repo",
      key: id,
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.repo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "top",
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.top,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: homepage || html_url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "/static/github-icon.png",
      alt: "github icon",
      width: "20px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: homepage || html_url,
      target: "_blank",
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name_link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      id: "name",
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, name))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "middle",
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.middle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      id: "description",
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.property + " " + _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.property,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, language)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "bottom",
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bottom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_github_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.property,
      href: "https://github.com/ww-tech/".concat(name, "/subscription"),
      "data-icon": "octicon-eye",
      "data-show-count": "true",
      "aria-label": "Watch ww-tech/".concat(name, " on GitHub"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Watch"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_github_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.property,
      href: "https://github.com/ww-tech/".concat(name, "/fork"),
      "data-icon": "octicon-repo-forked",
      "data-show-count": "true",
      "aria-label": "Fork ww-tech/".concat(name, " on GitHub"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Fork"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_github_btn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _styles_repos_scss__WEBPACK_IMPORTED_MODULE_4___default.a.property,
      href: "https://github.com/ww-tech/".concat(name),
      "data-icon": "octicon-star",
      "data-show-count": "true",
      "aria-label": "Star ww-tech/".concat(name, " on GitHub"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Star")));
  })));
}

Repos.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, repos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return node_fetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.github.com/orgs/WW-tech/repos");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          repos = _context.sent;
          repos = repos.filter(function (_ref4) {
            var name = _ref4.name;
            return name != "ww-tech.github.io";
          }).sort(function (_ref5, _ref6) {
            var w1 = _ref5.watchers;
            var w2 = _ref6.watchers;
            return w2 - w1;
          }).map(function (_ref7) {
            var id = _ref7.id,
                html_url = _ref7.html_url,
                name = _ref7.name,
                description = _ref7.description,
                language = _ref7.language,
                homepage = _ref7.homepage;
            return {
              id: id,
              html_url: html_url,
              name: name,
              description: description,
              language: language,
              homepage: homepage
            };
          });
          return _context.abrupt("return", {
            repos: repos
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Repos);

/***/ })

})
//# sourceMappingURL=repos.js.7d8adf6e7b0f3532f42d.hot-update.js.map