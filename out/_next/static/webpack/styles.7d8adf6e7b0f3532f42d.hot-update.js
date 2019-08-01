webpackHotUpdate("styles",{

/***/ "./styles/repos.scss":
/*!***************************!*\
  !*** ./styles/repos.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"title":"_2Ctxd0ntg_6nRYyaGsJ7tS","repos":"_107CXF7yAuiEO7Y-vRbtuV","repo":"_3n04pqTl9IeTqV0CJUYYwQ","name":"_2ceORkcmOEErpObWm_JIBM","name_link":"_2MBdN9Siq8MRL7xTETVvvj","middle":"_1Y2K6xWaZPb55MrVmuS7pL","bottom":"_3c4NhqcIoY4cA8Ycx3_KCv","property":"_3nQSZjik2dCEkYMQleIaub","description":"_2MAsBGaNnr8VDMQL1ZndiR"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1563991062828");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.7d8adf6e7b0f3532f42d.hot-update.js.map