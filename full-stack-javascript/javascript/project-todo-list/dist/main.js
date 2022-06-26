/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/menu-dark.png */ "./src/img/menu-dark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/moon.png */ "./src/img/moon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/AlfaSlabOne-Regular.ttf */ "./src/fonts/AlfaSlabOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BungeeShade-Regular.ttf */ "./src/fonts/BungeeShade-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/menu-light.png */ "./src/img/menu-light.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/sun.png */ "./src/img/sun.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \n    GLOBALS \n*/\n\n:root {\n    --margin-left: 100px;\n    --margin-right: 100px;\n    --border-rad: 10px;\n    --color-transition-time: 1s;\n    font-size: 10pt;\n\n    --bg-color-1: #f4f9f9;\n    --bg-color-2: #ccf2f4;\n    --bg-color-3: #AAAAAA;\n    --accent: #a4ebf3;\n\n    --text-1: black;\n    --text-2: white;\n    --burger-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    --theme-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    /* transition: color var(--color-transition-time),\n        background-color var(--color-transition-time); */\n\n}\n\n@font-face {\n    font-family: alfa;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n    font-family: bungee;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n/* \n    THEMES \n*/\n\n.dark {\n    --bg-color-1: #261c2c;\n    --bg-color-2: #3e2c41;\n    --bg-color-3: #5c527f;\n    --accent: #6e85b2;\n\n    --text-1: white;\n    --text-2: black;\n    --burger-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    --theme-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n/* .light {\n    --bg-color-1: #f4f9f9;\n    --bg-color-2: #ccf2f4;\n    --bg-color-3: #AAAAAA;\n    --accent: #a4ebf3;\n\n    --text-1: black;\n    --text-2: white;\n    --burger-icon: url('../img/menu-dark.png');\n    --theme-icon: url('../img/moon.png');\n} */\n\n\n/* \n    MAIN LAYOUT \n*/\nbody {\n    display: flex;\n    justify-content: center;\n\n    background-color: var(--bg-color-1);\n    color: var(--text-1);\n\n    padding: 0px;\n    margin: 0px;\n    width: 100vw;\n\n}\n\n.main {\n    /* display: grid;\n    grid-template: 1fr calc(100vh -1fr)/ 1fr; */\n    margin-left: var(--margin-left);\n    margin-right: var(--margin-right);\n    max-width: 600px;\n    /* margin: 0px auto; */\n\n}\n\n@media only screen and (max-width: 500px) {\n    .main {\n        margin: 0px var(--margin-left);\n    }\n}\n\n\n\n.hidden {\n    display: none;\n}\n\n/* HEADER */\n\n.header {\n    /* display: grid;\n    grid-template: 1fr / 1fr 6fr; */\n    z-index: 1;\n    grid-column: 1 / -1;\n\n    display: flex;\n\n\n    height: 4rem;\n\n    margin-bottom: 5px;\n    margin-top: 5px;\n\n    border-radius: var(--border-rad);\n    background-color: var(--bg-color-2);\n\n    font-size: 1.2rem;\n\n    position: sticky;\n    top: 5px;\n\n}\n\n.header-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 10px;\n\n    font-family: bungee;\n    font-weight: 100;\n    letter-spacing: 0.2rem;\n    text-shadow: 2px 2px 4px black;\n}\n\n.header-title>span {\n    background-color: var(--accent);\n    border-radius: 4px;\n    padding: 5px 10px;\n}\n\n.header-body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n}\n\n.header-body>span {\n    margin: 5px;\n}\n\nbutton.hamburger {\n    background-image: var(--burger-icon);\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: var(--accent);\n    /* top: 25px;\n    left: 25px; */\n    width: 25px;\n    height: 25px;\n    border: 1px solid var(--bg-color-1);\n    margin: 0px 10px;\n    border-radius: 5px;\n    padding: 5px;\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\n}\n\nbutton.hamburger:hover {\n    background-color: var(--bg-color-3);\n    transform: scale(1.5);\n}\n\n.change-theme {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n\n}\n\n.change-theme>div {\n    background-image: var(--theme-icon);\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 10px;\n    height: 10px;\n    border: 0px;\n\n\n    border-radius: 5px;\n    padding: 5px;\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\n}\n\n/* BODY */\n\n\n\n\n\n.body {\n    /* \n    two custom properties that are set dynamically based \n    on the computed width of the nav element.\n\n    --nav-width: ?;\n    --nav-width-offset: ?; \n    */\n\n    /* grid-template: 1fr/ 130px 6fr; */\n    overflow-wrap: break-word;\n    flex: 1 1 0;\n}\n\n.nav {\n    background-color: var(--bg-color-2);\n    border-radius: var(--border-rad);\n    position: absolute;\n    /* top: 70px; */\n\n    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n    /* DEFAULT HIDE */\n    transform: scale(0);\n    transform-origin: top left;\n    overflow: hidden;\n    width: 150px;\n    padding: 0px;\n}\n\n.nav-open {\n    /* max-height: 100vh;\n    padding: 5px 10px; */\n    transform: scale(1);\n}\n\n.nav>ul {\n    list-style: none;\n}\n\n\n\n/* .nav-off {\n    transform: translateY(var(--nav-width-offset));\n    transform: translateY(-100px);\n}\n\n.nav-gone {\n    width: 0px;\n    height: 0px;\n    overflow: hidden;\n}  */\n\n\n\n.content {\n    margin: 0px 5px;\n    transition: transform var(--content-transition);\n    overflow-wrap: break-word;\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    /* grid-column: 2 / 3;\n    grid-row: 1 / -1;\n    transition: grid-column var(--menu-transition); */\n}\n\n.content.nav-gone {\n    transform: translateX(var(--nav-width));\n    /* grid-column: 1 / 3; */\n    width: 95vw;\n    /* bit of a hack, dinnae like it */\n}\n\n@media only screen and (max-width: 320px) {\n    .content {\n        grid-template:\n            1fr / 1fr;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI,oBAAoB;IACpB,qBAAqB;IACrB,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;;IAEf,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;;IAEjB,eAAe;IACf,eAAe;IACf,sDAA0C;IAC1C,qDAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX;wDACoD;;AAExD;;AAEA;IACI,iBAAiB;IACjB,4CAA4C;AAChD;;AAEA;IACI,mBAAmB;IACnB,4CAA4C;AAChD;;AAEA;;CAEC;;AAED;IACI,qBAAqB;IACrB,qBAAqB;IACrB,qBAAqB;IACrB,iBAAiB;;IAEjB,eAAe;IACf,eAAe;IACf,sDAA2C;IAC3C,qDAAmC;AACvC;;AAEA;;;;;;;;;;GAUG;;;AAGH;;CAEC;AACD;IACI,aAAa;IACb,uBAAuB;;IAEvB,mCAAmC;IACnC,oBAAoB;;IAEpB,YAAY;IACZ,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI;+CAC2C;IAC3C,+BAA+B;IAC/B,iCAAiC;IACjC,gBAAgB;IAChB,sBAAsB;;AAE1B;;AAEA;IACI;QACI,8BAA8B;IAClC;AACJ;;;;AAIA;IACI,aAAa;AACjB;;AAEA,WAAW;;AAEX;IACI;mCAC+B;IAC/B,UAAU;IACV,mBAAmB;;IAEnB,aAAa;;;IAGb,YAAY;;IAEZ,kBAAkB;IAClB,eAAe;;IAEf,gCAAgC;IAChC,mCAAmC;;IAEnC,iBAAiB;;IAEjB,gBAAgB;IAChB,QAAQ;;AAEZ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,aAAa;;IAEb,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,oBAAoB;IACpB,4BAA4B;IAC5B,2BAA2B;IAC3B,+BAA+B;IAC/B;iBACa;IACb,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,oDAAoD;AACxD;;AAEA;IACI,mCAAmC;IACnC,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;;AAErB;;AAEA;IACI,mCAAmC;IACnC,oBAAoB;IACpB,4BAA4B;IAC5B,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,WAAW;;;IAGX,kBAAkB;IAClB,YAAY;IACZ,oDAAoD;AACxD;;AAEA,SAAS;;;;;;AAMT;IACI;;;;;;KAMC;;IAED,mCAAmC;IACnC,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,gCAAgC;IAChC,kBAAkB;IAClB,eAAe;;IAEf,wDAAwD;;IAExD,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI;wBACoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;;;AAIA;;;;;;;;;IASI;;;;AAIJ;IACI,eAAe;IACf,+CAA+C;IAC/C,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX;;qDAEiD;AACrD;;AAEA;IACI,uCAAuC;IACvC,wBAAwB;IACxB,WAAW;IACX,kCAAkC;AACtC;;AAEA;IACI;QACI;qBACa;IACjB;AACJ","sourcesContent":["/* \n    GLOBALS \n*/\n\n:root {\n    --margin-left: 100px;\n    --margin-right: 100px;\n    --border-rad: 10px;\n    --color-transition-time: 1s;\n    font-size: 10pt;\n\n    --bg-color-1: #f4f9f9;\n    --bg-color-2: #ccf2f4;\n    --bg-color-3: #AAAAAA;\n    --accent: #a4ebf3;\n\n    --text-1: black;\n    --text-2: white;\n    --burger-icon: url('../img/menu-dark.png');\n    --theme-icon: url('../img/moon.png');\n}\n\n* {\n    padding: 0px;\n    margin: 0px;\n    /* transition: color var(--color-transition-time),\n        background-color var(--color-transition-time); */\n\n}\n\n@font-face {\n    font-family: alfa;\n    src: url('../fonts/AlfaSlabOne-Regular.ttf');\n}\n\n@font-face {\n    font-family: bungee;\n    src: url('../fonts/BungeeShade-Regular.ttf');\n}\n\n/* \n    THEMES \n*/\n\n.dark {\n    --bg-color-1: #261c2c;\n    --bg-color-2: #3e2c41;\n    --bg-color-3: #5c527f;\n    --accent: #6e85b2;\n\n    --text-1: white;\n    --text-2: black;\n    --burger-icon: url('../img/menu-light.png');\n    --theme-icon: url('../img/sun.png');\n}\n\n/* .light {\n    --bg-color-1: #f4f9f9;\n    --bg-color-2: #ccf2f4;\n    --bg-color-3: #AAAAAA;\n    --accent: #a4ebf3;\n\n    --text-1: black;\n    --text-2: white;\n    --burger-icon: url('../img/menu-dark.png');\n    --theme-icon: url('../img/moon.png');\n} */\n\n\n/* \n    MAIN LAYOUT \n*/\nbody {\n    display: flex;\n    justify-content: center;\n\n    background-color: var(--bg-color-1);\n    color: var(--text-1);\n\n    padding: 0px;\n    margin: 0px;\n    width: 100vw;\n\n}\n\n.main {\n    /* display: grid;\n    grid-template: 1fr calc(100vh -1fr)/ 1fr; */\n    margin-left: var(--margin-left);\n    margin-right: var(--margin-right);\n    max-width: 600px;\n    /* margin: 0px auto; */\n\n}\n\n@media only screen and (max-width: 500px) {\n    .main {\n        margin: 0px var(--margin-left);\n    }\n}\n\n\n\n.hidden {\n    display: none;\n}\n\n/* HEADER */\n\n.header {\n    /* display: grid;\n    grid-template: 1fr / 1fr 6fr; */\n    z-index: 1;\n    grid-column: 1 / -1;\n\n    display: flex;\n\n\n    height: 4rem;\n\n    margin-bottom: 5px;\n    margin-top: 5px;\n\n    border-radius: var(--border-rad);\n    background-color: var(--bg-color-2);\n\n    font-size: 1.2rem;\n\n    position: sticky;\n    top: 5px;\n\n}\n\n.header-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    padding: 10px;\n\n    font-family: bungee;\n    font-weight: 100;\n    letter-spacing: 0.2rem;\n    text-shadow: 2px 2px 4px black;\n}\n\n.header-title>span {\n    background-color: var(--accent);\n    border-radius: 4px;\n    padding: 5px 10px;\n}\n\n.header-body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n\n}\n\n.header-body>span {\n    margin: 5px;\n}\n\nbutton.hamburger {\n    background-image: var(--burger-icon);\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: var(--accent);\n    /* top: 25px;\n    left: 25px; */\n    width: 25px;\n    height: 25px;\n    border: 1px solid var(--bg-color-1);\n    margin: 0px 10px;\n    border-radius: 5px;\n    padding: 5px;\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\n}\n\nbutton.hamburger:hover {\n    background-color: var(--bg-color-3);\n    transform: scale(1.5);\n}\n\n.change-theme {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n\n}\n\n.change-theme>div {\n    background-image: var(--theme-icon);\n    background-size: 80%;\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 10px;\n    height: 10px;\n    border: 0px;\n\n\n    border-radius: 5px;\n    padding: 5px;\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\n}\n\n/* BODY */\n\n\n\n\n\n.body {\n    /* \n    two custom properties that are set dynamically based \n    on the computed width of the nav element.\n\n    --nav-width: ?;\n    --nav-width-offset: ?; \n    */\n\n    /* grid-template: 1fr/ 130px 6fr; */\n    overflow-wrap: break-word;\n    flex: 1 1 0;\n}\n\n.nav {\n    background-color: var(--bg-color-2);\n    border-radius: var(--border-rad);\n    position: absolute;\n    /* top: 70px; */\n\n    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n    /* DEFAULT HIDE */\n    transform: scale(0);\n    transform-origin: top left;\n    overflow: hidden;\n    width: 150px;\n    padding: 0px;\n}\n\n.nav-open {\n    /* max-height: 100vh;\n    padding: 5px 10px; */\n    transform: scale(1);\n}\n\n.nav>ul {\n    list-style: none;\n}\n\n\n\n/* .nav-off {\n    transform: translateY(var(--nav-width-offset));\n    transform: translateY(-100px);\n}\n\n.nav-gone {\n    width: 0px;\n    height: 0px;\n    overflow: hidden;\n}  */\n\n\n\n.content {\n    margin: 0px 5px;\n    transition: transform var(--content-transition);\n    overflow-wrap: break-word;\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    /* grid-column: 2 / 3;\n    grid-row: 1 / -1;\n    transition: grid-column var(--menu-transition); */\n}\n\n.content.nav-gone {\n    transform: translateX(var(--nav-width));\n    /* grid-column: 1 / 3; */\n    width: 95vw;\n    /* bit of a hack, dinnae like it */\n}\n\n@media only screen and (max-width: 320px) {\n    .content {\n        grid-template:\n            1fr / 1fr;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ (() => {


// elements obj via IIFE
let elements = (function () {
    let menuBtn = document.querySelector('button.hamburger');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.content')
    let themeBtn = document.querySelector('.change-theme');
    let theme = document.querySelector('#theme');
    let header = document.querySelector('.header');
    return {
        menuBtn, nav, content, themeBtn, theme, header
    }
})();

// page initialisation
(function initialize() {

    // setNavWidthVar();
    setThemeChangeEvent();
    // setMenuButtonEvent();
    setMenuButtonEvent();
    setMenuPosition();

    function setMenuPosition() {
        elements.nav.style['top'] = (elements.header.offsetHeight + 5) + 'px';
    }

    function setMenuButtonEvent() {
        elements.menuBtn.addEventListener('click', () => {
            const showSelector = 'nav-open';
            if (elements.nav.classList.contains(showSelector)) {
                elements.nav.classList.remove(showSelector);
            } else {
                elements.nav.classList.add(showSelector);
            }
        });
    }

    function setThemeChangeEvent() {
        elements.themeBtn.addEventListener('click', () => {
            elements.theme.classList.toggle('dark');
            // if (theme.classList.contains('light')) {
            //     theme.classList.remove('light');
            //     theme.classList.toggle('dark');
            // } else {
            //     theme.classList.remove('dark');
            //     theme.classList.add('light');
            // }
        });
    }


})();




// function setMenuButtonEvent() {
//     elements.menuBtn.addEventListener('click', () => {
//         const hideSelector = 'nav-off';
//         const hiddenSelector = 'nav-gone';
//         if (elements.nav.classList.contains(hideSelector)) {
//             elements.nav.classList.remove(hideSelector);
//             elements.nav.classList.remove(hiddenSelector);

//             setTimeout(() => {
//                 // elements.content.classList.remove('nav-gone');
//             }, 1000);
//         } else {
//             elements.nav.classList.add(hideSelector);
//             elements.nav.classList.add(hiddenSelector);
//             // setTimeout(() => {
//             //     elements.nav.classList.add(hiddenSelector);
//             //     // elements.content.classList.add('nav-gone');
//             // }, 1000);
//         }
//     });
// }

// function setNavWidthVar() {
//     let x = document.querySelector('.body');
//     x.style.setProperty('--nav-width', '-125px');
//     x.style.setProperty('--nav-width-offset', '-150px');
// }

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ (() => {

class ToDo {
    #title;
    #description;
    #dueDate;
    #priority;

    static MIN_PRIORITY = 1;
    static MAX_PRIORITY = 5;

    static PRIORITIES = ['Critical', 'High', 'Medium', 'Low', 'Unimportant'];

    constructor(title) {
        this._title = title || 'New task';
        this._description = 'No description added';
        this._dueDate = null;
        this._priority = null;
    }

    get title() { return this._title };
    set title(newTitle) {
        if (newTitle.length === 0) throw 'ERROR: ToDo title may not be empty';
        if (newTitle.match(/^\s+$/)) throw 'ERROR: ToDo title may not be blank (whitespace only)';
        this._title = newTitle
    };

    get description() { return this._description };
    set description(newDesc) { this._description = newDesc };

    get dueDate() { return this._dueDate };
    set dueDate(newDueDate) { this._dueDate = newDueDate };

    get priority() { return this._priority };
    set priority(newPriority) { this._priority = newPriority };

    toString() {
        return 'Title:       ' + '\n' + this._title + '\n\n' +
            'Description: ' + '\n' + this._description + '\n\n' +
            'Due Date:    ' + '\n' + this._dueDate + '\n\n' +
            'Priority:    ' + '\n' + this._priority
    };
}

console.group('object testing');
let testObj = new ToDo('test title');
console.log(testObj.toString());
let testObj2 = new ToDo('test title 2');
console.log(testObj2.toString());
let testObj3 = new ToDo();
console.log(testObj3.toString());
testObj3.title = "dogs n stuff";
console.log(testObj3.toString());
console.log(ToDo.MAX_PRIORITY);
console.log(testObj3);
console.log(testObj3.constructor.PRIORITIES);   // can access static properties
// from instance constructor
console.log(testObj3.title);
try {
    testObj3.title = "     ";
} catch (err) {
    console.log(err);
}
console.log(testObj3.title);
console.groupEnd('object testing');


/***/ }),

/***/ "./src/fonts/AlfaSlabOne-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/AlfaSlabOne-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "76486fb5cc170dab15a5.ttf";

/***/ }),

/***/ "./src/fonts/BungeeShade-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/BungeeShade-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "65113b6b47a5bd986255.ttf";

/***/ }),

/***/ "./src/img/menu-dark.png":
/*!*******************************!*\
  !*** ./src/img/menu-dark.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "147955f7d6817810977c.png";

/***/ }),

/***/ "./src/img/menu-light.png":
/*!********************************!*\
  !*** ./src/img/menu-light.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c2ee2bb91e5fa1e7785a.png";

/***/ }),

/***/ "./src/img/moon.png":
/*!**************************!*\
  !*** ./src/img/moon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d72fba816caf54c7eedd.png";

/***/ }),

/***/ "./src/img/sun.png":
/*!*************************!*\
  !*** ./src/img/sun.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "aa9facd55b13853c8613.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dom_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxjQUFjLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLFFBQVEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sY0FBYyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsYUFBYSxhQUFhLGNBQWMsV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxRQUFRLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxLQUFLLE9BQU8sV0FBVyxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxjQUFjLGNBQWMsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsWUFBWSxPQUFPLGVBQWUsS0FBSyxVQUFVLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE9BQU8sT0FB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cy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21lbnUtZGFyay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvbW9vbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9BbGZhU2xhYk9uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0J1bmdlZVNoYWRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21lbnUtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3N1bi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcbiAgICBHTE9CQUxTIFxcbiovXFxuXFxuOnJvb3Qge1xcbiAgICAtLW1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgLS1tYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICAtLWJvcmRlci1yYWQ6IDEwcHg7XFxuICAgIC0tY29sb3ItdHJhbnNpdGlvbi10aW1lOiAxcztcXG4gICAgZm9udC1zaXplOiAxMHB0O1xcblxcbiAgICAtLWJnLWNvbG9yLTE6ICNmNGY5Zjk7XFxuICAgIC0tYmctY29sb3ItMjogI2NjZjJmNDtcXG4gICAgLS1iZy1jb2xvci0zOiAjQUFBQUFBO1xcbiAgICAtLWFjY2VudDogI2E0ZWJmMztcXG5cXG4gICAgLS10ZXh0LTE6IGJsYWNrO1xcbiAgICAtLXRleHQtMjogd2hpdGU7XFxuICAgIC0tYnVyZ2VyLWljb246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIC0tdGhlbWUtaWNvbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIC8qIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLWNvbG9yLXRyYW5zaXRpb24tdGltZSksXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLWNvbG9yLXRyYW5zaXRpb24tdGltZSk7ICovXFxuXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYWxmYTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJ1bmdlZTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4vKiBcXG4gICAgVEhFTUVTIFxcbiovXFxuXFxuLmRhcmsge1xcbiAgICAtLWJnLWNvbG9yLTE6ICMyNjFjMmM7XFxuICAgIC0tYmctY29sb3ItMjogIzNlMmM0MTtcXG4gICAgLS1iZy1jb2xvci0zOiAjNWM1MjdmO1xcbiAgICAtLWFjY2VudDogIzZlODViMjtcXG5cXG4gICAgLS10ZXh0LTE6IHdoaXRlO1xcbiAgICAtLXRleHQtMjogYmxhY2s7XFxuICAgIC0tYnVyZ2VyLWljb246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIC0tdGhlbWUtaWNvbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG59XFxuXFxuLyogLmxpZ2h0IHtcXG4gICAgLS1iZy1jb2xvci0xOiAjZjRmOWY5O1xcbiAgICAtLWJnLWNvbG9yLTI6ICNjY2YyZjQ7XFxuICAgIC0tYmctY29sb3ItMzogI0FBQUFBQTtcXG4gICAgLS1hY2NlbnQ6ICNhNGViZjM7XFxuXFxuICAgIC0tdGV4dC0xOiBibGFjaztcXG4gICAgLS10ZXh0LTI6IHdoaXRlO1xcbiAgICAtLWJ1cmdlci1pY29uOiB1cmwoJy4uL2ltZy9tZW51LWRhcmsucG5nJyk7XFxuICAgIC0tdGhlbWUtaWNvbjogdXJsKCcuLi9pbWcvbW9vbi5wbmcnKTtcXG59ICovXFxuXFxuXFxuLyogXFxuICAgIE1BSU4gTEFZT1VUIFxcbiovXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0xKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtMSk7XFxuXFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG59XFxuXFxuLm1haW4ge1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgY2FsYygxMDB2aCAtMWZyKS8gMWZyOyAqL1xcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1yaWdodCk7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIC8qIG1hcmdpbjogMHB4IGF1dG87ICovXFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgbWFyZ2luOiAwcHggdmFyKC0tbWFyZ2luLWxlZnQpO1xcbiAgICB9XFxufVxcblxcblxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDZmcjsgKi9cXG4gICAgei1pbmRleDogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG5cXG4gICAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTIpO1xcblxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA1cHg7XFxuXFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IGJ1bmdlZTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlPnNwYW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbn1cXG5cXG4uaGVhZGVyLWJvZHk+c3BhbiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5idXR0b24uaGFtYnVyZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYnVyZ2VyLWljb24pO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICAvKiB0b3A6IDI1cHg7XFxuICAgIGxlZnQ6IDI1cHg7ICovXFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLTEpO1xcbiAgICBtYXJnaW46IDBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXG59XFxuXFxuYnV0dG9uLmhhbWJ1cmdlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLTMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5jaGFuZ2UtdGhlbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuXFxufVxcblxcbi5jaGFuZ2UtdGhlbWU+ZGl2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tdGhlbWUtaWNvbik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMHB4O1xcblxcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXG59XFxuXFxuLyogQk9EWSAqL1xcblxcblxcblxcblxcblxcbi5ib2R5IHtcXG4gICAgLyogXFxuICAgIHR3byBjdXN0b20gcHJvcGVydGllcyB0aGF0IGFyZSBzZXQgZHluYW1pY2FsbHkgYmFzZWQgXFxuICAgIG9uIHRoZSBjb21wdXRlZCB3aWR0aCBvZiB0aGUgbmF2IGVsZW1lbnQuXFxuXFxuICAgIC0tbmF2LXdpZHRoOiA/O1xcbiAgICAtLW5hdi13aWR0aC1vZmZzZXQ6ID87IFxcbiAgICAqL1xcblxcbiAgICAvKiBncmlkLXRlbXBsYXRlOiAxZnIvIDEzMHB4IDZmcjsgKi9cXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgZmxleDogMSAxIDA7XFxufVxcblxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogdG9wOiA3MHB4OyAqL1xcblxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcXG5cXG4gICAgLyogREVGQVVMVCBISURFICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLm5hdi1vcGVuIHtcXG4gICAgLyogbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4OyAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ubmF2PnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuXFxuLyogLm5hdi1vZmYge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tbmF2LXdpZHRoLW9mZnNldCkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXG59XFxuXFxuLm5hdi1nb25lIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufSAgKi9cXG5cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIG1hcmdpbjogMHB4IDVweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWNvbnRlbnQtdHJhbnNpdGlvbik7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIHRyYW5zaXRpb246IGdyaWQtY29sdW1uIHZhcigtLW1lbnUtdHJhbnNpdGlvbik7ICovXFxufVxcblxcbi5jb250ZW50Lm5hdi1nb25lIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLW5hdi13aWR0aCkpO1xcbiAgICAvKiBncmlkLWNvbHVtbjogMSAvIDM7ICovXFxuICAgIHdpZHRoOiA5NXZ3O1xcbiAgICAvKiBiaXQgb2YgYSBoYWNrLCBkaW5uYWUgbGlrZSBpdCAqL1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6XFxuICAgICAgICAgICAgMWZyIC8gMWZyO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixlQUFlOztJQUVmLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjs7SUFFakIsZUFBZTtJQUNmLGVBQWU7SUFDZixzREFBMEM7SUFDMUMscURBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDt3REFDb0Q7O0FBRXhEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7O0NBRUM7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixpQkFBaUI7O0lBRWpCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysc0RBQTJDO0lBQzNDLHFEQUFtQztBQUN2Qzs7QUFFQTs7Ozs7Ozs7OztHQVVHOzs7QUFHSDs7Q0FFQztBQUNEO0lBQ0ksYUFBYTtJQUNiLHVCQUF1Qjs7SUFFdkIsbUNBQW1DO0lBQ25DLG9CQUFvQjs7SUFFcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJOytDQUMyQztJQUMzQywrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSjs7OztBQUlBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0k7bUNBQytCO0lBQy9CLFVBQVU7SUFDVixtQkFBbUI7O0lBRW5CLGFBQWE7OztJQUdiLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsZ0NBQWdDO0lBQ2hDLG1DQUFtQzs7SUFFbkMsaUJBQWlCOztJQUVqQixnQkFBZ0I7SUFDaEIsUUFBUTs7QUFFWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixhQUFhOztJQUViLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0I7aUJBQ2E7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7OztJQUdYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0RBQW9EO0FBQ3hEOztBQUVBLFNBQVM7Ozs7OztBQU1UO0lBQ0k7Ozs7OztLQU1DOztJQUVELG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZix3REFBd0Q7O0lBRXhELGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJO3dCQUNvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFJQTs7Ozs7Ozs7O0lBU0k7Ozs7QUFJSjtJQUNJLGVBQWU7SUFDZiwrQ0FBK0M7SUFDL0MseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYOztxREFFaUQ7QUFDckQ7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSTtRQUNJO3FCQUNhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxuICAgIEdMT0JBTFMgXFxuKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICAtLW1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIC0tYm9yZGVyLXJhZDogMTBweDtcXG4gICAgLS1jb2xvci10cmFuc2l0aW9uLXRpbWU6IDFzO1xcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuXFxuICAgIC0tYmctY29sb3ItMTogI2Y0ZjlmOTtcXG4gICAgLS1iZy1jb2xvci0yOiAjY2NmMmY0O1xcbiAgICAtLWJnLWNvbG9yLTM6ICNBQUFBQUE7XFxuICAgIC0tYWNjZW50OiAjYTRlYmYzO1xcblxcbiAgICAtLXRleHQtMTogYmxhY2s7XFxuICAgIC0tdGV4dC0yOiB3aGl0ZTtcXG4gICAgLS1idXJnZXItaWNvbjogdXJsKCcuLi9pbWcvbWVudS1kYXJrLnBuZycpO1xcbiAgICAtLXRoZW1lLWljb246IHVybCgnLi4vaW1nL21vb24ucG5nJyk7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICAvKiB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS1jb2xvci10cmFuc2l0aW9uLXRpbWUpLFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciB2YXIoLS1jb2xvci10cmFuc2l0aW9uLXRpbWUpOyAqL1xcblxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGFsZmE7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9BbGZhU2xhYk9uZS1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGJ1bmdlZTtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0J1bmdlZVNoYWRlLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbi8qIFxcbiAgICBUSEVNRVMgXFxuKi9cXG5cXG4uZGFyayB7XFxuICAgIC0tYmctY29sb3ItMTogIzI2MWMyYztcXG4gICAgLS1iZy1jb2xvci0yOiAjM2UyYzQxO1xcbiAgICAtLWJnLWNvbG9yLTM6ICM1YzUyN2Y7XFxuICAgIC0tYWNjZW50OiAjNmU4NWIyO1xcblxcbiAgICAtLXRleHQtMTogd2hpdGU7XFxuICAgIC0tdGV4dC0yOiBibGFjaztcXG4gICAgLS1idXJnZXItaWNvbjogdXJsKCcuLi9pbWcvbWVudS1saWdodC5wbmcnKTtcXG4gICAgLS10aGVtZS1pY29uOiB1cmwoJy4uL2ltZy9zdW4ucG5nJyk7XFxufVxcblxcbi8qIC5saWdodCB7XFxuICAgIC0tYmctY29sb3ItMTogI2Y0ZjlmOTtcXG4gICAgLS1iZy1jb2xvci0yOiAjY2NmMmY0O1xcbiAgICAtLWJnLWNvbG9yLTM6ICNBQUFBQUE7XFxuICAgIC0tYWNjZW50OiAjYTRlYmYzO1xcblxcbiAgICAtLXRleHQtMTogYmxhY2s7XFxuICAgIC0tdGV4dC0yOiB3aGl0ZTtcXG4gICAgLS1idXJnZXItaWNvbjogdXJsKCcuLi9pbWcvbWVudS1kYXJrLnBuZycpO1xcbiAgICAtLXRoZW1lLWljb246IHVybCgnLi4vaW1nL21vb24ucG5nJyk7XFxufSAqL1xcblxcblxcbi8qIFxcbiAgICBNQUlOIExBWU9VVCBcXG4qL1xcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTEpO1xcblxcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuXFxufVxcblxcbi5tYWluIHtcXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIGNhbGMoMTAwdmggLTFmcikvIDFmcjsgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0KTtcXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tcmlnaHQpO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICAvKiBtYXJnaW46IDBweCBhdXRvOyAqL1xcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIC5tYWluIHtcXG4gICAgICAgIG1hcmdpbjogMHB4IHZhcigtLW1hcmdpbi1sZWZ0KTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSEVBREVSICovXFxuXFxuLmhlYWRlciB7XFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciA2ZnI7ICovXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuXFxuICAgIGhlaWdodDogNHJlbTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0yKTtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogNXB4O1xcblxcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBidW5nZWU7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBibGFjaztcXG59XFxuXFxuLmhlYWRlci10aXRsZT5zcGFuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLmhlYWRlci1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuXFxuLmhlYWRlci1ib2R5PnNwYW4ge1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuYnV0dG9uLmhhbWJ1cmdlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJ1cmdlci1pY29uKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgLyogdG9wOiAyNXB4O1xcbiAgICBsZWZ0OiAyNXB4OyAqL1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci0xKTtcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKC42MSwgLTAuMzcsIC41NCwgMS43OCk7XFxufVxcblxcbmJ1dHRvbi5oYW1idXJnZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci0zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uY2hhbmdlLXRoZW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcbn1cXG5cXG4uY2hhbmdlLXRoZW1lPmRpdiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXRoZW1lLWljb24pO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG5cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKC42MSwgLTAuMzcsIC41NCwgMS43OCk7XFxufVxcblxcbi8qIEJPRFkgKi9cXG5cXG5cXG5cXG5cXG5cXG4uYm9keSB7XFxuICAgIC8qIFxcbiAgICB0d28gY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBhcmUgc2V0IGR5bmFtaWNhbGx5IGJhc2VkIFxcbiAgICBvbiB0aGUgY29tcHV0ZWQgd2lkdGggb2YgdGhlIG5hdiBlbGVtZW50LlxcblxcbiAgICAtLW5hdi13aWR0aDogPztcXG4gICAgLS1uYXYtd2lkdGgtb2Zmc2V0OiA/OyBcXG4gICAgKi9cXG5cXG4gICAgLyogZ3JpZC10ZW1wbGF0ZTogMWZyLyAxMzBweCA2ZnI7ICovXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGZsZXg6IDEgMSAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIHRvcDogNzBweDsgKi9cXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XFxuXFxuICAgIC8qIERFRkFVTFQgSElERSAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5uYXYtb3BlbiB7XFxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDsgKi9cXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLm5hdj51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcblxcblxcbi8qIC5uYXYtb2ZmIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLW5hdi13aWR0aC1vZmZzZXQpKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XFxufVxcblxcbi5uYXYtZ29uZSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn0gICovXFxuXFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBtYXJnaW46IDBweCA1cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1jb250ZW50LXRyYW5zaXRpb24pO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICB0cmFuc2l0aW9uOiBncmlkLWNvbHVtbiB2YXIoLS1tZW51LXRyYW5zaXRpb24pOyAqL1xcbn1cXG5cXG4uY29udGVudC5uYXYtZ29uZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS1uYXYtd2lkdGgpKTtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAzOyAqL1xcbiAgICB3aWR0aDogOTV2dztcXG4gICAgLyogYml0IG9mIGEgaGFjaywgZGlubmFlIGxpa2UgaXQgKi9cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcbiAgICAuY29udGVudCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOlxcbiAgICAgICAgICAgIDFmciAvIDFmcjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbi8vIGVsZW1lbnRzIG9iaiB2aWEgSUlGRVxubGV0IGVsZW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oYW1idXJnZXInKTtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGxldCB0aGVtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdGhlbWUnKTtcbiAgICBsZXQgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWUnKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG1lbnVCdG4sIG5hdiwgY29udGVudCwgdGhlbWVCdG4sIHRoZW1lLCBoZWFkZXJcbiAgICB9XG59KSgpO1xuXG4vLyBwYWdlIGluaXRpYWxpc2F0aW9uXG4oZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcblxuICAgIC8vIHNldE5hdldpZHRoVmFyKCk7XG4gICAgc2V0VGhlbWVDaGFuZ2VFdmVudCgpO1xuICAgIC8vIHNldE1lbnVCdXR0b25FdmVudCgpO1xuICAgIHNldE1lbnVCdXR0b25FdmVudCgpO1xuICAgIHNldE1lbnVQb3NpdGlvbigpO1xuXG4gICAgZnVuY3Rpb24gc2V0TWVudVBvc2l0aW9uKCkge1xuICAgICAgICBlbGVtZW50cy5uYXYuc3R5bGVbJ3RvcCddID0gKGVsZW1lbnRzLmhlYWRlci5vZmZzZXRIZWlnaHQgKyA1KSArICdweCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWVudUJ1dHRvbkV2ZW50KCkge1xuICAgICAgICBlbGVtZW50cy5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd1NlbGVjdG9yID0gJ25hdi1vcGVuJztcbiAgICAgICAgICAgIGlmIChlbGVtZW50cy5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNob3dTZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5uYXYuY2xhc3NMaXN0LnJlbW92ZShzaG93U2VsZWN0b3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5uYXYuY2xhc3NMaXN0LmFkZChzaG93U2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUaGVtZUNoYW5nZUV2ZW50KCkge1xuICAgICAgICBlbGVtZW50cy50aGVtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnRoZW1lLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGVtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0JykpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xuICAgICAgICAgICAgLy8gICAgIHRoZW1lLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgdGhlbWUuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgICAgICAgICAgLy8gICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59KSgpO1xuXG5cblxuXG4vLyBmdW5jdGlvbiBzZXRNZW51QnV0dG9uRXZlbnQoKSB7XG4vLyAgICAgZWxlbWVudHMubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgY29uc3QgaGlkZVNlbGVjdG9yID0gJ25hdi1vZmYnO1xuLy8gICAgICAgICBjb25zdCBoaWRkZW5TZWxlY3RvciA9ICduYXYtZ29uZSc7XG4vLyAgICAgICAgIGlmIChlbGVtZW50cy5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKGhpZGVTZWxlY3RvcikpIHtcbi8vICAgICAgICAgICAgIGVsZW1lbnRzLm5hdi5jbGFzc0xpc3QucmVtb3ZlKGhpZGVTZWxlY3Rvcik7XG4vLyAgICAgICAgICAgICBlbGVtZW50cy5uYXYuY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5TZWxlY3Rvcik7XG5cbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRzLmNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWdvbmUnKTtcbi8vICAgICAgICAgICAgIH0sIDEwMDApO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgZWxlbWVudHMubmF2LmNsYXNzTGlzdC5hZGQoaGlkZVNlbGVjdG9yKTtcbi8vICAgICAgICAgICAgIGVsZW1lbnRzLm5hdi5jbGFzc0xpc3QuYWRkKGhpZGRlblNlbGVjdG9yKTtcbi8vICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgLy8gICAgIGVsZW1lbnRzLm5hdi5jbGFzc0xpc3QuYWRkKGhpZGRlblNlbGVjdG9yKTtcbi8vICAgICAgICAgICAgIC8vICAgICAvLyBlbGVtZW50cy5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ25hdi1nb25lJyk7XG4vLyAgICAgICAgICAgICAvLyB9LCAxMDAwKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBzZXROYXZXaWR0aFZhcigpIHtcbi8vICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XG4vLyAgICAgeC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1uYXYtd2lkdGgnLCAnLTEyNXB4Jyk7XG4vLyAgICAgeC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1uYXYtd2lkdGgtb2Zmc2V0JywgJy0xNTBweCcpO1xuLy8gfSIsImNsYXNzIFRvRG8ge1xuICAgICN0aXRsZTtcbiAgICAjZGVzY3JpcHRpb247XG4gICAgI2R1ZURhdGU7XG4gICAgI3ByaW9yaXR5O1xuXG4gICAgc3RhdGljIE1JTl9QUklPUklUWSA9IDE7XG4gICAgc3RhdGljIE1BWF9QUklPUklUWSA9IDU7XG5cbiAgICBzdGF0aWMgUFJJT1JJVElFUyA9IFsnQ3JpdGljYWwnLCAnSGlnaCcsICdNZWRpdW0nLCAnTG93JywgJ1VuaW1wb3J0YW50J107XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlIHx8ICdOZXcgdGFzayc7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gJ05vIGRlc2NyaXB0aW9uIGFkZGVkJztcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7IHJldHVybiB0aGlzLl90aXRsZSB9O1xuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgICBpZiAobmV3VGl0bGUubGVuZ3RoID09PSAwKSB0aHJvdyAnRVJST1I6IFRvRG8gdGl0bGUgbWF5IG5vdCBiZSBlbXB0eSc7XG4gICAgICAgIGlmIChuZXdUaXRsZS5tYXRjaCgvXlxccyskLykpIHRocm93ICdFUlJPUjogVG9EbyB0aXRsZSBtYXkgbm90IGJlIGJsYW5rICh3aGl0ZXNwYWNlIG9ubHkpJztcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBuZXdUaXRsZVxuICAgIH07XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbiB9O1xuICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjKSB7IHRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzYyB9O1xuXG4gICAgZ2V0IGR1ZURhdGUoKSB7IHJldHVybiB0aGlzLl9kdWVEYXRlIH07XG4gICAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkgeyB0aGlzLl9kdWVEYXRlID0gbmV3RHVlRGF0ZSB9O1xuXG4gICAgZ2V0IHByaW9yaXR5KCkgeyByZXR1cm4gdGhpcy5fcHJpb3JpdHkgfTtcbiAgICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpIHsgdGhpcy5fcHJpb3JpdHkgPSBuZXdQcmlvcml0eSB9O1xuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnVGl0bGU6ICAgICAgICcgKyAnXFxuJyArIHRoaXMuX3RpdGxlICsgJ1xcblxcbicgK1xuICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uOiAnICsgJ1xcbicgKyB0aGlzLl9kZXNjcmlwdGlvbiArICdcXG5cXG4nICtcbiAgICAgICAgICAgICdEdWUgRGF0ZTogICAgJyArICdcXG4nICsgdGhpcy5fZHVlRGF0ZSArICdcXG5cXG4nICtcbiAgICAgICAgICAgICdQcmlvcml0eTogICAgJyArICdcXG4nICsgdGhpcy5fcHJpb3JpdHlcbiAgICB9O1xufVxuXG5jb25zb2xlLmdyb3VwKCdvYmplY3QgdGVzdGluZycpO1xubGV0IHRlc3RPYmogPSBuZXcgVG9EbygndGVzdCB0aXRsZScpO1xuY29uc29sZS5sb2codGVzdE9iai50b1N0cmluZygpKTtcbmxldCB0ZXN0T2JqMiA9IG5ldyBUb0RvKCd0ZXN0IHRpdGxlIDInKTtcbmNvbnNvbGUubG9nKHRlc3RPYmoyLnRvU3RyaW5nKCkpO1xubGV0IHRlc3RPYmozID0gbmV3IFRvRG8oKTtcbmNvbnNvbGUubG9nKHRlc3RPYmozLnRvU3RyaW5nKCkpO1xudGVzdE9iajMudGl0bGUgPSBcImRvZ3MgbiBzdHVmZlwiO1xuY29uc29sZS5sb2codGVzdE9iajMudG9TdHJpbmcoKSk7XG5jb25zb2xlLmxvZyhUb0RvLk1BWF9QUklPUklUWSk7XG5jb25zb2xlLmxvZyh0ZXN0T2JqMyk7XG5jb25zb2xlLmxvZyh0ZXN0T2JqMy5jb25zdHJ1Y3Rvci5QUklPUklUSUVTKTsgICAvLyBjYW4gYWNjZXNzIHN0YXRpYyBwcm9wZXJ0aWVzXG4vLyBmcm9tIGluc3RhbmNlIGNvbnN0cnVjdG9yXG5jb25zb2xlLmxvZyh0ZXN0T2JqMy50aXRsZSk7XG50cnkge1xuICAgIHRlc3RPYmozLnRpdGxlID0gXCIgICAgIFwiO1xufSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbn1cbmNvbnNvbGUubG9nKHRlc3RPYmozLnRpdGxlKTtcbmNvbnNvbGUuZ3JvdXBFbmQoJ29iamVjdCB0ZXN0aW5nJyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuY3NzJztcbmltcG9ydCAnLi9kb20uanMnO1xuaW1wb3J0ICcuL3RvZG8uanMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==