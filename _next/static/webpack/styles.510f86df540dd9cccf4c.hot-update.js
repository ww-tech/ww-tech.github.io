webpackHotUpdate("styles",{

/***/ "./styles/people.scss":
/*!****************************!*\
  !*** ./styles/people.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"title":"z_B8HRbAdIBCuaNJ78-IA","bg":"MBTqAviFpvPOrR1958qEK","members":"_20JRboiJGWUbFEDsPWAh58","member":"FLhnMybndm9_cbjET2tc-","avatar":"_1vePqGeBUThrRmT5DtgMjS"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1563899206070");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.510f86df540dd9cccf4c.hot-update.js.map