/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/web/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/web/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --square-dimension: 45px;\n  --border-color: rgb(160, 151, 247);\n}\n\n/* Board */\n\n.container-board {\n  display: grid;\n  grid-template: 1fr/ repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n\n  width: 100%;\n\n  border: 1px solid blueviolet;\n}\n\n.container-ship-placer {\n  display: flex;\n  justify-content: center;\n  border: 1px solid red;\n}\n\n.container-ship-placer>div{\n  border: 1px solid green;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  \n  border: 1px solid var(--border-color);\n}\n\n.board>.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.board .square {\n  height: var(--square-dimension);\n  width: var(--square-dimension);\n  box-sizing: border-box;\n}\n\n#boardPlayer .board.square.ship {\n  background-color: lightgreen;\n}\n\n.board.square.struck {\n  background-color: rgb(182, 182, 182);\n  /* border: 3px solid black; */\n}\n#boardPlayer .board.square.struck.ship,\n#boardComputer .board.square.struck.ship {\n  background-color:crimson;\n}\n\n.ship-chooser {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: 0px 10px;\n}\n\n.ship-chooser-ship {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-chooser-ship>div {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid goldenrod;\n}\n\n.ship-chooser-ship>div>div{\n  width: var(--square-dimension);\n  height: var(--square-dimension);\n  border: 1px solid goldenrod;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/web/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;;EAEnB,WAAW;;EAEX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oCAAoC;EACpC,6BAA6B;AAC/B;AACA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --square-dimension: 45px;\n  --border-color: rgb(160, 151, 247);\n}\n\n/* Board */\n\n.container-board {\n  display: grid;\n  grid-template: 1fr/ repeat(2, 1fr);\n  justify-items: center;\n  align-items: center;\n\n  width: 100%;\n\n  border: 1px solid blueviolet;\n}\n\n.container-ship-placer {\n  display: flex;\n  justify-content: center;\n  border: 1px solid red;\n}\n\n.container-ship-placer>div{\n  border: 1px solid green;\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  \n  border: 1px solid var(--border-color);\n}\n\n.board>.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.board .square {\n  height: var(--square-dimension);\n  width: var(--square-dimension);\n  box-sizing: border-box;\n}\n\n#boardPlayer .board.square.ship {\n  background-color: lightgreen;\n}\n\n.board.square.struck {\n  background-color: rgb(182, 182, 182);\n  /* border: 3px solid black; */\n}\n#boardPlayer .board.square.struck.ship,\n#boardComputer .board.square.struck.ship {\n  background-color:crimson;\n}\n\n.ship-chooser {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  margin: 0px 10px;\n}\n\n.ship-chooser-ship {\n  display: flex;\n  flex-direction: row;\n}\n\n.ship-chooser-ship>div {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid goldenrod;\n}\n\n.ship-chooser-ship>div>div{\n  width: var(--square-dimension);\n  height: var(--square-dimension);\n  border: 1px solid goldenrod;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/web/styles.css":
/*!****************************!*\
  !*** ./src/web/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/web/styles.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/obj/BoardPlacement.js":
/*!***********************************!*\
  !*** ./src/obj/BoardPlacement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardPlacement)
/* harmony export */ });
/**
 * An object that records data required for placement onto a square of the Gameboard objects board property
 * @param {Ship} ship
 * @param {number} index
 */
function BoardPlacement(ship, index) {
  this.ship = ship;
  this.shipHullIndex = index;
}

BoardPlacement.prototype.isStruck = function isStruck() {
  return this.ship.hull[this.shipHullIndex];
};


/***/ }),

/***/ "./src/obj/Coord.js":
/*!**************************!*\
  !*** ./src/obj/Coord.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Coord)
/* harmony export */ });
/**
 * Create a coord object that holds x and y numberic values for a board co-ordinate
 * @param {number} x x co-ordinate
 * @param {number} y y co-ordinate
 */
function Coord(x, y) {
  this.x = parseInt(x, 10);
  this.y = parseInt(y, 10);
}


/***/ }),

/***/ "./src/obj/Game.js":
/*!*************************!*\
  !*** ./src/obj/Game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onSquareClick": () => (/* binding */ onSquareClick),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _GameData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameData.js */ "./src/obj/GameData.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ "./src/obj/Player.js");
/* harmony import */ var _web_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web/ui.js */ "./src/web/ui.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings.json */ "./src/settings.json");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gameboard.js */ "./src/obj/Gameboard.js");


// eslint-disable-next-line import/no-cycle




let gameData = null;
let gameActive = false;

async function startGame() {
  // set game data
  gameActive = true;
  gameData = new _GameData_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](false),
    new _Player_js__WEBPACK_IMPORTED_MODULE_1__["default"](false),
    new _Gameboard_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
    new _Gameboard_js__WEBPACK_IMPORTED_MODULE_4__["default"](),
  );

  // prepare ship placing functionality and start
  // placeShipsRandomly();
  // eslint-disable-next-line prefer-template
  // console.log('start ' + Date());
  // placeShipsIntentionally().then(() => {
  //   renderBoards(gameData);
  //   // eslint-disable-next-line prefer-template
  //   console.log('end ' + Date());
  // });
}

/**
 * This is an event handler that is activated each time a valid board square is clicked.
 * @param {number} x x co-ordinate of gameboard (outer array index)
 * @param {number} y y co-ordinate              (inner array index)
 * @param {number} playerIndex the index of the current player for use in gameData.players[index].
 */
function onSquareClick(x, y, playerIndex) {
  if (!gameActive) return;
  if (gameData.enemyPlayer === playerIndex) {
    gameData.players[playerIndex].board.receiveAttack(x, y);
    if (gameData.players[playerIndex].board.allSunk()) {
      gameActive = false;
      // player has not changed yet, so current player is allSunk & therefore loses.
      (0,_web_ui_js__WEBPACK_IMPORTED_MODULE_2__.declareWinner)(`Gameover! ${playerIndex === 0 ? 'Computer' : 'Human'} player wins!`);
    }
    gameData.changePlayer();
    (0,_web_ui_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(gameData);
    if (!gameData.isCurrentPlayerHuman()) {
      // console.log('computer players go now');
      setTimeout(() => {
        const attackCoords = gameData.players[gameData.currentPlayer].player.attack();
        onSquareClick(attackCoords.x, attackCoords.y, gameData.enemyPlayer);
      }, 1);
    }
  } else {
    // console.log('aint ya go son, simmer down');
  }
}

async function placeShipsIntentionally() {
  // const { ships } = settings;
  // // eslint-disable-next-line no-restricted-syntax
  // let y = 0;
  // // eslint-disable-next-line no-restricted-syntax
  // for (const ship of ships) {
  //   gameData.p1.board.placeShip(ship.name, 0, y, false);
  //   // gameData.p1.board.receiveAttack(0, y);
  //   gameData.p2.board.placeShip(ship.name, 0, y, false);
  //   // gameData.p2.board.receiveAttack(0, y);
  //   y++;
  // }
  // const result = await setTimeout(() => 'hello', 5000);
  // return result;
  // const wait = '';
  // gameData.p1.board.receiveAttack(9, 9);
  // gameData.p2.board.receiveAttack(3, 0);
}

function placeShipsRandomly() {
  const { ships } = _settings_json__WEBPACK_IMPORTED_MODULE_3__;
  // eslint-disable-next-line no-restricted-syntax
  let y = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const ship of ships) {
    gameData.p1.board.placeShip(ship.name, 0, y, false);
    // gameData.p1.board.receiveAttack(0, y);
    gameData.p2.board.placeShip(ship.name, 0, y, false);
    // gameData.p2.board.receiveAttack(0, y);
    y++;
  }
  // gameData.p1.board.receiveAttack(9, 9);
  // gameData.p2.board.receiveAttack(3, 0);
}


/***/ }),

/***/ "./src/obj/GameData.js":
/*!*****************************!*\
  !*** ./src/obj/GameData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameData)
/* harmony export */ });
/**
 * Holds data about a game. There are two players, each holding data on the player itself, and their board.
 * Additional the current player and enemy players are stored here.
 * @param {*} p1 player 1's player object
 * @param {*} p2 player 2's player object
 * @param {*} b1 player 1's board object
 * @param {*} b2 player 2's board object
 */
function GameData(p1, p2, b1, b2) {
  this.p1 = { player: p1, board: b1 };
  this.p2 = { player: p2, board: b2 };
  this.players = [this.p1, this.p2];
  this.currentPlayer = 0;
  this.enemyPlayer = 1;
}

/**
 * Swaps currentPlayer and enemyPlayer of gameData
 */
GameData.prototype.changePlayer = function changePlayer() {
  this.currentPlayer = (this.currentPlayer === 0) ? 1 : 0;
  this.enemyPlayer = (this.enemyPlayer === 0) ? 1 : 0;
};

GameData.prototype.isCurrentPlayerHuman = function currentPlayerHuman() {
  return this.players[this.currentPlayer].player.human;
};


/***/ }),

/***/ "./src/obj/Gameboard.js":
/*!******************************!*\
  !*** ./src/obj/Gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_SIZE": () => (/* binding */ BOARD_SIZE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/obj/Ship.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.json */ "./src/settings.json");
/* harmony import */ var _BoardPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardPlacement.js */ "./src/obj/BoardPlacement.js");
/* harmony import */ var _Coord_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Coord.js */ "./src/obj/Coord.js");





/** ***************************
 * CONSTANTS
 **************************** */

const BOARD_SIZE = _settings_json__WEBPACK_IMPORTED_MODULE_1__["gameboard-size"];

/** ***************************
 * CONSTRUCTORS
 **************************** */

/**
 * Create a Gameboard object
 * @param {number | undefined} size defaults to 10 but can be set manually
 */
function Gameboard() {
  this.size = BOARD_SIZE;
  this.board = new Array(this.size).fill(null);
  for (let i = 0; i < this.board.length; i++) {
    this.board[i] = new Array(this.size).fill(null);
  }
  this.misses = [];
  this.ships = [];
}

/** ***************************
 * METHODS
 **************************** */

/**
 * Place a ship on the board
 * @param {Ship} shipName a Ship object
 * @param {number} x x co-ordinate
 * @param {number} y y co-ordinate
 * @param {boolean} vertical a boolean, true if vertical, false if horizontal
 */
Gameboard.prototype.placeShip = function placeShip(shipName, x, y, vertical) {
  const shipDetails = determineShipDetails(shipName, new _Coord_js__WEBPACK_IMPORTED_MODULE_3__["default"](x, y), vertical);
  if (!shipDetails) return false;
  if (!determineShipOverlap.call(this, shipDetails.coords)) return false;
  let index = 0;
  shipDetails.coords.forEach(e => { this.board[e.y][e.x] = new _BoardPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"](shipDetails.ship, index++); });
  this.ships.push(shipDetails.ship);
  return true;
};

/**
 * Receive an attack. The attack will either hit a ship, in which case that ship records a hit at that position;
 * or the attack will miss, in which case it is recorded in the misses array
 * @param {number} x x co-ordinate
 * @param {number} y y co-ordinate
 * @returns true if attack was successful, false if attack was a miss
 */
Gameboard.prototype.receiveAttack = function receiveAttack(x, y) {
  // eslint-disable-next-line prefer-template
  // console.log('x and y:' + x + ' ' + y);
  // console.log(this.board[y]);
  const square = this.board[y][x];
  if (typeof square === 'string') return false;
  if (square === null) {
    this.misses.push(new _Coord_js__WEBPACK_IMPORTED_MODULE_3__["default"](x, y));
    this.board[y][x] = 'miss';
    return false;
  }
  square.ship.hit(square.shipHullIndex);
  return true;
};

/**
 * Check if all ships on the board are sunk
 * @returns true if all sunks are sunk, and false if they are not
 */
Gameboard.prototype.allSunk = function allSunk() {
  return this.ships.reduce((prev, cur) => {
    if (!cur.isSunk()) return false;
    return prev;
  }, true);
};

/** ***************************
 * HELPER FUNCTIONS
 **************************** */

/**
 *  Determines if a ships placement is acceptable in that it does not overlap another ship.
 * @param {Coord[]} shipCoords ship coords to check
 * @this {Gameboard} this function must have its context/ this set to a gameboard object
 * @return a boolean representing if this ship placement is valid, in that it does not overlap another ship
 */
function determineShipOverlap(shipCoords) {
  let overlapFound = false;
  for (let i = 0; i < shipCoords.length; i++) {
    if (this.board[shipCoords[i].y][shipCoords[i].x] !== null) {
      overlapFound = true;
      break;
    }
  }
  return !overlapFound;
}

/**
 * Determines ship details. That is, the resolves the shipName to a Ship object, and determines all the coordinates on the board the Ship
 * would inhabit, taking into consideration its orientation vertically or horizontally
 * @param {string} shipName name of ship type
 * @param {Coord} selectedCoord Coord object
 * @param {boolean} vertical vertical if true, horizontal if false
 * @returns false if invalid, ship placement details if valid.
 */
function determineShipDetails(shipName, selectedCoord, vertical) {
  // validate start coords
  if (!validateCoords(selectedCoord)) return false;

  // validate ship name and instantiate ship
  let ship;
  try {
    ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](shipName);
  } catch {
    return false;
  }

  const c = selectedCoord;
  const shipPlacementCoords = [];
  for (let i = 0; i < ship.hull.length; i++) {
    shipPlacementCoords.push(new _Coord_js__WEBPACK_IMPORTED_MODULE_3__["default"](c.x, c.y));
    if (vertical) c.y++;
    else c.x++;
  }

  // validate end coords
  if (!validateCoords(shipPlacementCoords.at(-1))) return false;

  // return ship placement details
  return {
    ship,
    coords: shipPlacementCoords,
  };
}

/**
 * Validate basic coord values.
 * @param {Coord} coords object literal containing x and y properties
 * @returns {boolean} true if coords are valid, false if invalid
 */
function validateCoords(coords) {
  if (typeof coords.x !== 'number'
    || typeof coords.y !== 'number'
    || coords.x < 0
    || coords.y < 0
    || coords.x >= BOARD_SIZE
    || coords.y >= BOARD_SIZE) {
    return false;
  }
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);



/***/ }),

/***/ "./src/obj/Player.js":
/*!***************************!*\
  !*** ./src/obj/Player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Coord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coord.js */ "./src/obj/Coord.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.json */ "./src/settings.json");



const BOARD_SIZE = _settings_json__WEBPACK_IMPORTED_MODULE_1__["gameboard-size"];
/**
 * Create a player object
 * @param {boolean} human true if this is a human player, false if it is a computer player
 */
function Player(human) {
  this.human = human;
  this.validMoves = [];
  for (let x = 0; x < BOARD_SIZE; x++) {
    for (let y = 0; y < BOARD_SIZE; y++) {
      this.validMoves.push((this.human) ? null : new _Coord_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
    }
  }
}
/**
 * If this Player is human, then return null.
 * If this player is computer, select a random validMove and return it.
 * In either case, the number of validMoves is reduced by 1.
 * @returns null for human players, and a Coord object for computers
 * @throw if validMoves.length is 0.
 */
Player.prototype.attack = function attack() {
  if (this.validMoves.length > 0) {
    return (this.human)
      ? this.validMoves.pop()
      : this.validMoves.splice(Math.floor(Math.random() * this.validMoves.length), 1).at(0);
  }
  throw new Error('no valid moves remaining');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/obj/Ship.js":
/*!*************************!*\
  !*** ./src/obj/Ship.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings.json */ "./src/settings.json");


/**
 * Create a ship object, by specifying the name of the ship required.
 * @param {string} ship name of ship, corresponds to a length.
 */
function Ship(ship) {
  this.length = validateShip(ship);
  this.name = ship;
  this.hull = new Array(this.length).fill(false);
}

/**
 * 'hit' / attack this ship at specified index
 * @param {number} position the zero-indexed positon of this ships hull to record a hit
 */
Ship.prototype.hit = function hit(index) {
  if (index >= this.length) {
    throw new Error(`specified hit index "${index}" is greater than allowable for a ship of length ${this.length}.`);
  } else if (index < 0) {
    throw new Error(`specified hit index "${index}" cannot be negative.`);
  }
  this.hull[index] = true;
};

/**
 * Check if a ship has sunk, that is, it's hull has been hit at each position
 * @returns {boolean} representing if this ship has been sunk
 */
Ship.prototype.isSunk = function isSunk() {
  return this.hull.reduce((prev, current) => current === false ? false : prev, true);
};

/**
 * Determine the length of a ship, by it's name
 * @param {string} ship a name of a ship
 * @returns the length of said ship
 * @throws Error if ship name not recognised
 */
function validateShip(ship) {
  // const shipLength = shipsTypes.reduce((prev, current) => (current.name === ship) ? current.length : prev, null);
  const shipLength = _settings_json__WEBPACK_IMPORTED_MODULE_0__.ships.reduce((prev, cur) => (cur.name === ship) ? cur.size : prev, null);
  if (shipLength === null) {
    throw new Error(`ship parameter string not recognised: "${ship}". Allowable values: ${_settings_json__WEBPACK_IMPORTED_MODULE_0__.ships.map(e => e.name)}`);
  }
  return shipLength;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/web/ui.js":
/*!***********************!*\
  !*** ./src/web/ui.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "declareWinner": () => (/* binding */ declareWinner),
/* harmony export */   "default": () => (/* binding */ initialize),
/* harmony export */   "renderBoards": () => (/* binding */ renderBoards)
/* harmony export */ });
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings.json */ "./src/settings.json");
/* harmony import */ var _obj_Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../obj/Game.js */ "./src/obj/Game.js");
/* harmony import */ var _obj_Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../obj/Ship.js */ "./src/obj/Ship.js");

// eslint-disable-next-line import/no-cycle



const BOARD_SIZE = _settings_json__WEBPACK_IMPORTED_MODULE_0__["gameboard-size"];
const SHIPS = _settings_json__WEBPACK_IMPORTED_MODULE_0__.ships;
/**
 * Build Battleships UI
 */
// export default function initialize() {
//   const containerBoard = document.body.querySelector('.container-board');
//   const containerGameInfo = document.body.querySelector('.container-game-info');
//   const currentPlayer = containerGameInfo.querySelector('.current-player>span');
//   const containerIntro = document.querySelector('.container-intro');
//   const buttonPlay = containerIntro.querySelector('#button-play');

//   containerBoard.innerHTML = ''; // clear old dom elements out of container-board
//   containerBoard.appendChild(buildBoardElement(BOARD_SIZE, 0));
//   containerBoard.appendChild(buildBoardElement(BOARD_SIZE, 1));
//   buttonPlay.addEventListener('click', () => {
//     containerBoard.classList.remove('hidden');
//     containerGameInfo.classList.remove('hidden');
//     containerIntro.classList.add('hidden');
//     currentPlayer.textContent = '1';
//     startGame();
//   });
// }

function initialize() {
  // dom elements
  const containerBoard = document.body.querySelector('.container-board');
  const containerGameInfo = document.body.querySelector('.container-game-info');
  const containerShipPlacer = document.body.querySelector('.container-ship-placer');
  const currentPlayer = containerGameInfo.querySelector('.current-player>span');
  const containerIntro = document.querySelector('.container-intro');
  const buttonPlay = containerIntro.querySelector('#button-play');
  const placingBoard = containerShipPlacer.querySelector('.placing-board');
  const shipChooser = containerShipPlacer.querySelector('.ship-chooser');

  // ship placer values
  // TODO
  const shipNames = SHIPS.map(e => e.name);
  const longestShip = SHIPS.reduce((prev, cur) => {
    if (cur.size > prev) return cur.size;
    return prev;
  }, 0);
  placingBoard.appendChild(buildBoardElement(BOARD_SIZE, 0));
  const ships = [];
  const es = [];
  for (const ship of SHIPS) {
    const e = document.createElement('div');
    e.classList.add('ship-chooser-ship');

    const innerShip = document.createElement('div');
    for (let i = 0; i < ship.size; i++) {
      innerShip.appendChild(document.createElement('div'));
    }
    ships.push(new _obj_Ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](ship.name));
    e.append(innerShip);
    es.push(e);
  }
  shipChooser.append(...es);

  containerBoard.innerHTML = ''; // clear old dom elements out of container-board
  buttonPlay.addEventListener('click', () => {
    // containerBoard.classList.remove('hidden');
    // containerGameInfo.classList.remove('hidden');
    containerShipPlacer.classList.remove('hidden');
    containerIntro.classList.add('hidden');
    currentPlayer.textContent = '1';
    (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();
  });

  buttonPlay.click(); // jumps past play button by pressing it
}

/**
 * Create a visual representation of a Gameboard
 * @param {number} boardSize the length of the gameboard sides
 * @param {string} id id attribute of this HTML element
 * @returns HTMLDivElement
 */
function buildBoardElement(boardSize, playerIndex) {
  const board = document.createElement('div');
  board.className = 'board';
  board.id = (playerIndex === 0) ? 'boardPlayer' : 'boardComputer';
  for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let colIndex = 0; colIndex < boardSize; colIndex++) {
      const square = document.createElement('div');
      square.className = 'board square';
      square.dataset.col = colIndex;
      square.dataset.row = rowIndex;
      square.addEventListener('click', (el, event) => {
        if (!el.srcElement.classList.contains('struck')) {
          (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.onSquareClick)(colIndex, rowIndex, playerIndex);
        } else {
          const msg = document.querySelector('.info-msg');
          msg.textContent = 'already attacked this square!';
          setTimeout(() => { msg.textContent = ''; }, 3000);
        }
      });
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}

/**
 * Iterate through.
 * @param {GameData} gameData
 */
function renderBoards(gameData) {
  const uib1 = document.querySelector('boardPlayer');
  const uib2 = document.querySelector('boardComputer');

  for (let row = 0; row < gameData.p1.board.size; row++) {
    for (let col = 0; col < gameData.p1.board.size; col++) {
      processBoardSquare(
        document.querySelector('#boardPlayer').childNodes[row].childNodes[col],
        gameData.p1.board.board[row][col],
      );
      processBoardSquare(
        document.querySelector('#boardComputer').childNodes[row].childNodes[col],
        gameData.p2.board.board[row][col],
      );
    }
  }
  document.querySelector('.current-player>span').textContent = gameData.currentPlayer + 1;
}

/**
   * Takes a pair of connected squares. One is a HTMLDivElement from the UI, the other is a square from the Gameboard object's
   * board property.
   * @param {HTMLDivElement} uiSquare
   * @param {BoardPlacement} dataSquare
   */
function processBoardSquare(uiSquare, dataSquare) {
  // if square is empty
  if (dataSquare === null) {
    uiSquare.classList.remove('ship');
    return;
  }

  // if square contains a board placement aka a ship
  if (typeof dataSquare === 'object') {
    uiSquare.classList.add('ship');
    if (dataSquare.isStruck()) {
      uiSquare.classList.add('struck');
    }
  }

  // if square contains a string, indicating a miss
  if (typeof dataSquare === 'string') {
    uiSquare.classList.add('struck');
  }
}

function declareWinner(message) {
  document.querySelector('.info-msg').textContent = message;
}

// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./src/settings.json":
/*!***************************!*\
  !*** ./src/settings.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('{"gameboard-size":10,"rules":{"base ruleset":"hasbro rules","url":"https://web.archive.org/web/20190813104535/https://www.hasbro.com/common/instruct/BattleShip_(2002).PDF","modified":true},"ships":[{"name":"patrol boat","numberOf":5,"size":2},{"name":"submarine","numberOf":4,"size":3},{"name":"destroyer","numberOf":3,"size":3},{"name":"battleship","numberOf":2,"size":4},{"name":"carrier","numberOf":1,"size":5}]}');

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/web/Controller.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/web/styles.css");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/web/ui.js");



(0,_ui_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// function battleships1() {

// }

// function battleships2() {

// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDckI7QUFDTztBQUNQO0FBQ0E7O0FBRUEsb0JBQW9CLDhCQUE4QjtBQUNsRCxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDVzs7QUFFakMsa0RBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3M/NDM0MCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovQm9hcmRQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9Db29yZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi91aS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL0NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcbn1cXG5cXG4vKiBCb2FyZCAqL1xcblxcbi5jb250YWluZXItYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcbn1cXG5cXG4uY29udGFpbmVyLXNoaXAtcGxhY2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlcj5kaXZ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uYm9hcmQ+LnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmJvYXJkIC5zcXVhcmUge1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNib2FyZFBsYXllciAuYm9hcmQuc3F1YXJlLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmJvYXJkLnNxdWFyZS5zdHJ1Y2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxufVxcbiNib2FyZFBsYXllciAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwLFxcbiNib2FyZENvbXB1dGVyIC5ib2FyZC5zcXVhcmUuc3RydWNrLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjpjcmltc29uO1xcbn1cXG5cXG4uc2hpcC1jaG9vc2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW46IDBweCAxMHB4O1xcbn1cXG5cXG4uc2hpcC1jaG9vc2VyLXNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5zaGlwLWNob29zZXItc2hpcD5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkZW5yb2Q7XFxufVxcblxcbi5zaGlwLWNob29zZXItc2hpcD5kaXY+ZGl2e1xcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1kaW1lbnNpb24pO1xcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2ViL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0NBQWtDO0FBQ3BDOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7O0VBRW5CLFdBQVc7O0VBRVgsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zcXVhcmUtZGltZW5zaW9uOiA0NXB4O1xcbiAgLS1ib3JkZXItY29sb3I6IHJnYigxNjAsIDE1MSwgMjQ3KTtcXG59XFxuXFxuLyogQm9hcmQgKi9cXG5cXG4uY29udGFpbmVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIvIHJlcGVhdCgyLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcXG59XFxuXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5jb250YWluZXItc2hpcC1wbGFjZXI+ZGl2e1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIFxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmJvYXJkPi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5ib2FyZCAuc3F1YXJlIHtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYm9hcmRQbGF5ZXIgLmJvYXJkLnNxdWFyZS5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5ib2FyZC5zcXVhcmUuc3RydWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcbn1cXG4jYm9hcmRQbGF5ZXIgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCxcXG4jYm9hcmRDb21wdXRlciAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjtcXG59XFxuXFxuLnNoaXAtY2hvb3NlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG59XFxuXFxuLnNoaXAtY2hvb3Nlci1zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uc2hpcC1jaG9vc2VyLXNoaXA+ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZGVucm9kO1xcbn1cXG5cXG4uc2hpcC1jaG9vc2VyLXNoaXA+ZGl2PmRpdntcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkZW5yb2Q7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQW4gb2JqZWN0IHRoYXQgcmVjb3JkcyBkYXRhIHJlcXVpcmVkIGZvciBwbGFjZW1lbnQgb250byBhIHNxdWFyZSBvZiB0aGUgR2FtZWJvYXJkIG9iamVjdHMgYm9hcmQgcHJvcGVydHlcbiAqIEBwYXJhbSB7U2hpcH0gc2hpcFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkUGxhY2VtZW50KHNoaXAsIGluZGV4KSB7XG4gIHRoaXMuc2hpcCA9IHNoaXA7XG4gIHRoaXMuc2hpcEh1bGxJbmRleCA9IGluZGV4O1xufVxuXG5Cb2FyZFBsYWNlbWVudC5wcm90b3R5cGUuaXNTdHJ1Y2sgPSBmdW5jdGlvbiBpc1N0cnVjaygpIHtcbiAgcmV0dXJuIHRoaXMuc2hpcC5odWxsW3RoaXMuc2hpcEh1bGxJbmRleF07XG59O1xuIiwiLyoqXG4gKiBDcmVhdGUgYSBjb29yZCBvYmplY3QgdGhhdCBob2xkcyB4IGFuZCB5IG51bWJlcmljIHZhbHVlcyBmb3IgYSBib2FyZCBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb29yZCh4LCB5KSB7XG4gIHRoaXMueCA9IHBhcnNlSW50KHgsIDEwKTtcbiAgdGhpcy55ID0gcGFyc2VJbnQoeSwgMTApO1xufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4vR2FtZURhdGEuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyByZW5kZXJCb2FyZHMsIGRlY2xhcmVXaW5uZXIgfSBmcm9tICcuLi93ZWIvdWkuanMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL0dhbWVib2FyZC5qcyc7XG5cbmxldCBnYW1lRGF0YSA9IG51bGw7XG5sZXQgZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAvLyBzZXQgZ2FtZSBkYXRhXG4gIGdhbWVBY3RpdmUgPSB0cnVlO1xuICBnYW1lRGF0YSA9IG5ldyBHYW1lRGF0YShcbiAgICBuZXcgUGxheWVyKGZhbHNlKSxcbiAgICBuZXcgUGxheWVyKGZhbHNlKSxcbiAgICBuZXcgR2FtZWJvYXJkKCksXG4gICAgbmV3IEdhbWVib2FyZCgpLFxuICApO1xuXG4gIC8vIHByZXBhcmUgc2hpcCBwbGFjaW5nIGZ1bmN0aW9uYWxpdHkgYW5kIHN0YXJ0XG4gIC8vIHBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXRlbXBsYXRlXG4gIC8vIGNvbnNvbGUubG9nKCdzdGFydCAnICsgRGF0ZSgpKTtcbiAgLy8gcGxhY2VTaGlwc0ludGVudGlvbmFsbHkoKS50aGVuKCgpID0+IHtcbiAgLy8gICByZW5kZXJCb2FyZHMoZ2FtZURhdGEpO1xuICAvLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcbiAgLy8gICBjb25zb2xlLmxvZygnZW5kICcgKyBEYXRlKCkpO1xuICAvLyB9KTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGFuIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBhY3RpdmF0ZWQgZWFjaCB0aW1lIGEgdmFsaWQgYm9hcmQgc3F1YXJlIGlzIGNsaWNrZWQuXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlIG9mIGdhbWVib2FyZCAob3V0ZXIgYXJyYXkgaW5kZXgpXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlICAgICAgICAgICAgICAoaW5uZXIgYXJyYXkgaW5kZXgpXG4gKiBAcGFyYW0ge251bWJlcn0gcGxheWVySW5kZXggdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBsYXllciBmb3IgdXNlIGluIGdhbWVEYXRhLnBsYXllcnNbaW5kZXhdLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25TcXVhcmVDbGljayh4LCB5LCBwbGF5ZXJJbmRleCkge1xuICBpZiAoIWdhbWVBY3RpdmUpIHJldHVybjtcbiAgaWYgKGdhbWVEYXRhLmVuZW15UGxheWVyID09PSBwbGF5ZXJJbmRleCkge1xuICAgIGdhbWVEYXRhLnBsYXllcnNbcGxheWVySW5kZXhdLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgaWYgKGdhbWVEYXRhLnBsYXllcnNbcGxheWVySW5kZXhdLmJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgLy8gcGxheWVyIGhhcyBub3QgY2hhbmdlZCB5ZXQsIHNvIGN1cnJlbnQgcGxheWVyIGlzIGFsbFN1bmsgJiB0aGVyZWZvcmUgbG9zZXMuXG4gICAgICBkZWNsYXJlV2lubmVyKGBHYW1lb3ZlciEgJHtwbGF5ZXJJbmRleCA9PT0gMCA/ICdDb21wdXRlcicgOiAnSHVtYW4nfSBwbGF5ZXIgd2lucyFgKTtcbiAgICB9XG4gICAgZ2FtZURhdGEuY2hhbmdlUGxheWVyKCk7XG4gICAgcmVuZGVyQm9hcmRzKGdhbWVEYXRhKTtcbiAgICBpZiAoIWdhbWVEYXRhLmlzQ3VycmVudFBsYXllckh1bWFuKCkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb21wdXRlciBwbGF5ZXJzIGdvIG5vdycpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IGdhbWVEYXRhLnBsYXllcnNbZ2FtZURhdGEuY3VycmVudFBsYXllcl0ucGxheWVyLmF0dGFjaygpO1xuICAgICAgICBvblNxdWFyZUNsaWNrKGF0dGFja0Nvb3Jkcy54LCBhdHRhY2tDb29yZHMueSwgZ2FtZURhdGEuZW5lbXlQbGF5ZXIpO1xuICAgICAgfSwgMSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhaW50IHlhIGdvIHNvbiwgc2ltbWVyIGRvd24nKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwbGFjZVNoaXBzSW50ZW50aW9uYWxseSgpIHtcbiAgLy8gY29uc3QgeyBzaGlwcyB9ID0gc2V0dGluZ3M7XG4gIC8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAvLyBsZXQgeSA9IDA7XG4gIC8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAvLyBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgLy8gICBnYW1lRGF0YS5wMS5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XG4gIC8vICAgLy8gZ2FtZURhdGEucDEuYm9hcmQucmVjZWl2ZUF0dGFjaygwLCB5KTtcbiAgLy8gICBnYW1lRGF0YS5wMi5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XG4gIC8vICAgLy8gZ2FtZURhdGEucDIuYm9hcmQucmVjZWl2ZUF0dGFjaygwLCB5KTtcbiAgLy8gICB5Kys7XG4gIC8vIH1cbiAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgc2V0VGltZW91dCgoKSA9PiAnaGVsbG8nLCA1MDAwKTtcbiAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgLy8gY29uc3Qgd2FpdCA9ICcnO1xuICAvLyBnYW1lRGF0YS5wMS5ib2FyZC5yZWNlaXZlQXR0YWNrKDksIDkpO1xuICAvLyBnYW1lRGF0YS5wMi5ib2FyZC5yZWNlaXZlQXR0YWNrKDMsIDApO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoKSB7XG4gIGNvbnN0IHsgc2hpcHMgfSA9IHNldHRpbmdzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgbGV0IHkgPSAwO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgZ2FtZURhdGEucDEuYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgMCwgeSwgZmFsc2UpO1xuICAgIC8vIGdhbWVEYXRhLnAxLmJvYXJkLnJlY2VpdmVBdHRhY2soMCwgeSk7XG4gICAgZ2FtZURhdGEucDIuYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgMCwgeSwgZmFsc2UpO1xuICAgIC8vIGdhbWVEYXRhLnAyLmJvYXJkLnJlY2VpdmVBdHRhY2soMCwgeSk7XG4gICAgeSsrO1xuICB9XG4gIC8vIGdhbWVEYXRhLnAxLmJvYXJkLnJlY2VpdmVBdHRhY2soOSwgOSk7XG4gIC8vIGdhbWVEYXRhLnAyLmJvYXJkLnJlY2VpdmVBdHRhY2soMywgMCk7XG59XG4iLCIvKipcbiAqIEhvbGRzIGRhdGEgYWJvdXQgYSBnYW1lLiBUaGVyZSBhcmUgdHdvIHBsYXllcnMsIGVhY2ggaG9sZGluZyBkYXRhIG9uIHRoZSBwbGF5ZXIgaXRzZWxmLCBhbmQgdGhlaXIgYm9hcmQuXG4gKiBBZGRpdGlvbmFsIHRoZSBjdXJyZW50IHBsYXllciBhbmQgZW5lbXkgcGxheWVycyBhcmUgc3RvcmVkIGhlcmUuXG4gKiBAcGFyYW0geyp9IHAxIHBsYXllciAxJ3MgcGxheWVyIG9iamVjdFxuICogQHBhcmFtIHsqfSBwMiBwbGF5ZXIgMidzIHBsYXllciBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gYjEgcGxheWVyIDEncyBib2FyZCBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gYjIgcGxheWVyIDIncyBib2FyZCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZURhdGEocDEsIHAyLCBiMSwgYjIpIHtcbiAgdGhpcy5wMSA9IHsgcGxheWVyOiBwMSwgYm9hcmQ6IGIxIH07XG4gIHRoaXMucDIgPSB7IHBsYXllcjogcDIsIGJvYXJkOiBiMiB9O1xuICB0aGlzLnBsYXllcnMgPSBbdGhpcy5wMSwgdGhpcy5wMl07XG4gIHRoaXMuY3VycmVudFBsYXllciA9IDA7XG4gIHRoaXMuZW5lbXlQbGF5ZXIgPSAxO1xufVxuXG4vKipcbiAqIFN3YXBzIGN1cnJlbnRQbGF5ZXIgYW5kIGVuZW15UGxheWVyIG9mIGdhbWVEYXRhXG4gKi9cbkdhbWVEYXRhLnByb3RvdHlwZS5jaGFuZ2VQbGF5ZXIgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXIoKSB7XG4gIHRoaXMuY3VycmVudFBsYXllciA9ICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IDApID8gMSA6IDA7XG4gIHRoaXMuZW5lbXlQbGF5ZXIgPSAodGhpcy5lbmVteVBsYXllciA9PT0gMCkgPyAxIDogMDtcbn07XG5cbkdhbWVEYXRhLnByb3RvdHlwZS5pc0N1cnJlbnRQbGF5ZXJIdW1hbiA9IGZ1bmN0aW9uIGN1cnJlbnRQbGF5ZXJIdW1hbigpIHtcbiAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJdLnBsYXllci5odW1hbjtcbn07XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xuaW1wb3J0IEJvYXJkUGxhY2VtZW50IGZyb20gJy4vQm9hcmRQbGFjZW1lbnQuanMnO1xuaW1wb3J0IENvb3JkIGZyb20gJy4vQ29vcmQuanMnO1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBDT05TVEFOVFNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcblxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ09OU1RSVUNUT1JTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIEdhbWVib2FyZCBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBzaXplIGRlZmF1bHRzIHRvIDEwIGJ1dCBjYW4gYmUgc2V0IG1hbnVhbGx5XG4gKi9cbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgdGhpcy5zaXplID0gQk9BUkRfU0laRTtcbiAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuYm9hcmRbaV0gPSBuZXcgQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpO1xuICB9XG4gIHRoaXMubWlzc2VzID0gW107XG4gIHRoaXMuc2hpcHMgPSBbXTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTUVUSE9EU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLyoqXG4gKiBQbGFjZSBhIHNoaXAgb24gdGhlIGJvYXJkXG4gKiBAcGFyYW0ge1NoaXB9IHNoaXBOYW1lIGEgU2hpcCBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgYSBib29sZWFuLCB0cnVlIGlmIHZlcnRpY2FsLCBmYWxzZSBpZiBob3Jpem9udGFsXG4gKi9cbkdhbWVib2FyZC5wcm90b3R5cGUucGxhY2VTaGlwID0gZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBOYW1lLCB4LCB5LCB2ZXJ0aWNhbCkge1xuICBjb25zdCBzaGlwRGV0YWlscyA9IGRldGVybWluZVNoaXBEZXRhaWxzKHNoaXBOYW1lLCBuZXcgQ29vcmQoeCwgeSksIHZlcnRpY2FsKTtcbiAgaWYgKCFzaGlwRGV0YWlscykgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWRldGVybWluZVNoaXBPdmVybGFwLmNhbGwodGhpcywgc2hpcERldGFpbHMuY29vcmRzKSkgcmV0dXJuIGZhbHNlO1xuICBsZXQgaW5kZXggPSAwO1xuICBzaGlwRGV0YWlscy5jb29yZHMuZm9yRWFjaChlID0+IHsgdGhpcy5ib2FyZFtlLnldW2UueF0gPSBuZXcgQm9hcmRQbGFjZW1lbnQoc2hpcERldGFpbHMuc2hpcCwgaW5kZXgrKyk7IH0pO1xuICB0aGlzLnNoaXBzLnB1c2goc2hpcERldGFpbHMuc2hpcCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGFuIGF0dGFjay4gVGhlIGF0dGFjayB3aWxsIGVpdGhlciBoaXQgYSBzaGlwLCBpbiB3aGljaCBjYXNlIHRoYXQgc2hpcCByZWNvcmRzIGEgaGl0IGF0IHRoYXQgcG9zaXRpb247XG4gKiBvciB0aGUgYXR0YWNrIHdpbGwgbWlzcywgaW4gd2hpY2ggY2FzZSBpdCBpcyByZWNvcmRlZCBpbiB0aGUgbWlzc2VzIGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXG4gKiBAcmV0dXJucyB0cnVlIGlmIGF0dGFjayB3YXMgc3VjY2Vzc2Z1bCwgZmFsc2UgaWYgYXR0YWNrIHdhcyBhIG1pc3NcbiAqL1xuR2FtZWJvYXJkLnByb3RvdHlwZS5yZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcbiAgLy8gY29uc29sZS5sb2coJ3ggYW5kIHk6JyArIHggKyAnICcgKyB5KTtcbiAgLy8gY29uc29sZS5sb2codGhpcy5ib2FyZFt5XSk7XG4gIGNvbnN0IHNxdWFyZSA9IHRoaXMuYm9hcmRbeV1beF07XG4gIGlmICh0eXBlb2Ygc3F1YXJlID09PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xuICBpZiAoc3F1YXJlID09PSBudWxsKSB7XG4gICAgdGhpcy5taXNzZXMucHVzaChuZXcgQ29vcmQoeCwgeSkpO1xuICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnbWlzcyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHNxdWFyZS5zaGlwLmhpdChzcXVhcmUuc2hpcEh1bGxJbmRleCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbGwgc2hpcHMgb24gdGhlIGJvYXJkIGFyZSBzdW5rXG4gKiBAcmV0dXJucyB0cnVlIGlmIGFsbCBzdW5rcyBhcmUgc3VuaywgYW5kIGZhbHNlIGlmIHRoZXkgYXJlIG5vdFxuICovXG5HYW1lYm9hcmQucHJvdG90eXBlLmFsbFN1bmsgPSBmdW5jdGlvbiBhbGxTdW5rKCkge1xuICByZXR1cm4gdGhpcy5zaGlwcy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgIGlmICghY3VyLmlzU3VuaygpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIHRydWUpO1xufTtcblxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogSEVMUEVSIEZVTkNUSU9OU1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLyoqXG4gKiAgRGV0ZXJtaW5lcyBpZiBhIHNoaXBzIHBsYWNlbWVudCBpcyBhY2NlcHRhYmxlIGluIHRoYXQgaXQgZG9lcyBub3Qgb3ZlcmxhcCBhbm90aGVyIHNoaXAuXG4gKiBAcGFyYW0ge0Nvb3JkW119IHNoaXBDb29yZHMgc2hpcCBjb29yZHMgdG8gY2hlY2tcbiAqIEB0aGlzIHtHYW1lYm9hcmR9IHRoaXMgZnVuY3Rpb24gbXVzdCBoYXZlIGl0cyBjb250ZXh0LyB0aGlzIHNldCB0byBhIGdhbWVib2FyZCBvYmplY3RcbiAqIEByZXR1cm4gYSBib29sZWFuIHJlcHJlc2VudGluZyBpZiB0aGlzIHNoaXAgcGxhY2VtZW50IGlzIHZhbGlkLCBpbiB0aGF0IGl0IGRvZXMgbm90IG92ZXJsYXAgYW5vdGhlciBzaGlwXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluZVNoaXBPdmVybGFwKHNoaXBDb29yZHMpIHtcbiAgbGV0IG92ZXJsYXBGb3VuZCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5ib2FyZFtzaGlwQ29vcmRzW2ldLnldW3NoaXBDb29yZHNbaV0ueF0gIT09IG51bGwpIHtcbiAgICAgIG92ZXJsYXBGb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICFvdmVybGFwRm91bmQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBzaGlwIGRldGFpbHMuIFRoYXQgaXMsIHRoZSByZXNvbHZlcyB0aGUgc2hpcE5hbWUgdG8gYSBTaGlwIG9iamVjdCwgYW5kIGRldGVybWluZXMgYWxsIHRoZSBjb29yZGluYXRlcyBvbiB0aGUgYm9hcmQgdGhlIFNoaXBcbiAqIHdvdWxkIGluaGFiaXQsIHRha2luZyBpbnRvIGNvbnNpZGVyYXRpb24gaXRzIG9yaWVudGF0aW9uIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5XG4gKiBAcGFyYW0ge3N0cmluZ30gc2hpcE5hbWUgbmFtZSBvZiBzaGlwIHR5cGVcbiAqIEBwYXJhbSB7Q29vcmR9IHNlbGVjdGVkQ29vcmQgQ29vcmQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIHZlcnRpY2FsIGlmIHRydWUsIGhvcml6b250YWwgaWYgZmFsc2VcbiAqIEByZXR1cm5zIGZhbHNlIGlmIGludmFsaWQsIHNoaXAgcGxhY2VtZW50IGRldGFpbHMgaWYgdmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGRldGVybWluZVNoaXBEZXRhaWxzKHNoaXBOYW1lLCBzZWxlY3RlZENvb3JkLCB2ZXJ0aWNhbCkge1xuICAvLyB2YWxpZGF0ZSBzdGFydCBjb29yZHNcbiAgaWYgKCF2YWxpZGF0ZUNvb3JkcyhzZWxlY3RlZENvb3JkKSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIHZhbGlkYXRlIHNoaXAgbmFtZSBhbmQgaW5zdGFudGlhdGUgc2hpcFxuICBsZXQgc2hpcDtcbiAgdHJ5IHtcbiAgICBzaGlwID0gbmV3IFNoaXAoc2hpcE5hbWUpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjID0gc2VsZWN0ZWRDb29yZDtcbiAgY29uc3Qgc2hpcFBsYWNlbWVudENvb3JkcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaHVsbC5sZW5ndGg7IGkrKykge1xuICAgIHNoaXBQbGFjZW1lbnRDb29yZHMucHVzaChuZXcgQ29vcmQoYy54LCBjLnkpKTtcbiAgICBpZiAodmVydGljYWwpIGMueSsrO1xuICAgIGVsc2UgYy54Kys7XG4gIH1cblxuICAvLyB2YWxpZGF0ZSBlbmQgY29vcmRzXG4gIGlmICghdmFsaWRhdGVDb29yZHMoc2hpcFBsYWNlbWVudENvb3Jkcy5hdCgtMSkpKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gcmV0dXJuIHNoaXAgcGxhY2VtZW50IGRldGFpbHNcbiAgcmV0dXJuIHtcbiAgICBzaGlwLFxuICAgIGNvb3Jkczogc2hpcFBsYWNlbWVudENvb3JkcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBiYXNpYyBjb29yZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Nvb3JkfSBjb29yZHMgb2JqZWN0IGxpdGVyYWwgY29udGFpbmluZyB4IGFuZCB5IHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGNvb3JkcyBhcmUgdmFsaWQsIGZhbHNlIGlmIGludmFsaWRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVDb29yZHMoY29vcmRzKSB7XG4gIGlmICh0eXBlb2YgY29vcmRzLnggIT09ICdudW1iZXInXG4gICAgfHwgdHlwZW9mIGNvb3Jkcy55ICE9PSAnbnVtYmVyJ1xuICAgIHx8IGNvb3Jkcy54IDwgMFxuICAgIHx8IGNvb3Jkcy55IDwgMFxuICAgIHx8IGNvb3Jkcy54ID49IEJPQVJEX1NJWkVcbiAgICB8fCBjb29yZHMueSA+PSBCT0FSRF9TSVpFKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG5leHBvcnQgeyBCT0FSRF9TSVpFIH07XG4iLCJpbXBvcnQgQ29vcmQgZnJvbSAnLi9Db29yZC5qcyc7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcbi8qKlxuICogQ3JlYXRlIGEgcGxheWVyIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBodW1hbiB0cnVlIGlmIHRoaXMgaXMgYSBodW1hbiBwbGF5ZXIsIGZhbHNlIGlmIGl0IGlzIGEgY29tcHV0ZXIgcGxheWVyXG4gKi9cbmZ1bmN0aW9uIFBsYXllcihodW1hbikge1xuICB0aGlzLmh1bWFuID0gaHVtYW47XG4gIHRoaXMudmFsaWRNb3ZlcyA9IFtdO1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHgrKykge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQk9BUkRfU0laRTsgeSsrKSB7XG4gICAgICB0aGlzLnZhbGlkTW92ZXMucHVzaCgodGhpcy5odW1hbikgPyBudWxsIDogbmV3IENvb3JkKHgsIHkpKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogSWYgdGhpcyBQbGF5ZXIgaXMgaHVtYW4sIHRoZW4gcmV0dXJuIG51bGwuXG4gKiBJZiB0aGlzIHBsYXllciBpcyBjb21wdXRlciwgc2VsZWN0IGEgcmFuZG9tIHZhbGlkTW92ZSBhbmQgcmV0dXJuIGl0LlxuICogSW4gZWl0aGVyIGNhc2UsIHRoZSBudW1iZXIgb2YgdmFsaWRNb3ZlcyBpcyByZWR1Y2VkIGJ5IDEuXG4gKiBAcmV0dXJucyBudWxsIGZvciBodW1hbiBwbGF5ZXJzLCBhbmQgYSBDb29yZCBvYmplY3QgZm9yIGNvbXB1dGVyc1xuICogQHRocm93IGlmIHZhbGlkTW92ZXMubGVuZ3RoIGlzIDAuXG4gKi9cblBsYXllci5wcm90b3R5cGUuYXR0YWNrID0gZnVuY3Rpb24gYXR0YWNrKCkge1xuICBpZiAodGhpcy52YWxpZE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKHRoaXMuaHVtYW4pXG4gICAgICA/IHRoaXMudmFsaWRNb3Zlcy5wb3AoKVxuICAgICAgOiB0aGlzLnZhbGlkTW92ZXMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudmFsaWRNb3Zlcy5sZW5ndGgpLCAxKS5hdCgwKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ25vIHZhbGlkIG1vdmVzIHJlbWFpbmluZycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xuXG4vKipcbiAqIENyZWF0ZSBhIHNoaXAgb2JqZWN0LCBieSBzcGVjaWZ5aW5nIHRoZSBuYW1lIG9mIHRoZSBzaGlwIHJlcXVpcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXAgbmFtZSBvZiBzaGlwLCBjb3JyZXNwb25kcyB0byBhIGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gU2hpcChzaGlwKSB7XG4gIHRoaXMubGVuZ3RoID0gdmFsaWRhdGVTaGlwKHNoaXApO1xuICB0aGlzLm5hbWUgPSBzaGlwO1xuICB0aGlzLmh1bGwgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpLmZpbGwoZmFsc2UpO1xufVxuXG4vKipcbiAqICdoaXQnIC8gYXR0YWNrIHRoaXMgc2hpcCBhdCBzcGVjaWZpZWQgaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiB0aGUgemVyby1pbmRleGVkIHBvc2l0b24gb2YgdGhpcyBzaGlwcyBodWxsIHRvIHJlY29yZCBhIGhpdFxuICovXG5TaGlwLnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiBoaXQoaW5kZXgpIHtcbiAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBzcGVjaWZpZWQgaGl0IGluZGV4IFwiJHtpbmRleH1cIiBpcyBncmVhdGVyIHRoYW4gYWxsb3dhYmxlIGZvciBhIHNoaXAgb2YgbGVuZ3RoICR7dGhpcy5sZW5ndGh9LmApO1xuICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgc3BlY2lmaWVkIGhpdCBpbmRleCBcIiR7aW5kZXh9XCIgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xuICB9XG4gIHRoaXMuaHVsbFtpbmRleF0gPSB0cnVlO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHNoaXAgaGFzIHN1bmssIHRoYXQgaXMsIGl0J3MgaHVsbCBoYXMgYmVlbiBoaXQgYXQgZWFjaCBwb3NpdGlvblxuICogQHJldHVybnMge2Jvb2xlYW59IHJlcHJlc2VudGluZyBpZiB0aGlzIHNoaXAgaGFzIGJlZW4gc3Vua1xuICovXG5TaGlwLnByb3RvdHlwZS5pc1N1bmsgPSBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gIHJldHVybiB0aGlzLmh1bGwucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50ID09PSBmYWxzZSA/IGZhbHNlIDogcHJldiwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSB0aGUgbGVuZ3RoIG9mIGEgc2hpcCwgYnkgaXQncyBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hpcCBhIG5hbWUgb2YgYSBzaGlwXG4gKiBAcmV0dXJucyB0aGUgbGVuZ3RoIG9mIHNhaWQgc2hpcFxuICogQHRocm93cyBFcnJvciBpZiBzaGlwIG5hbWUgbm90IHJlY29nbmlzZWRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVTaGlwKHNoaXApIHtcbiAgLy8gY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBzVHlwZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAoY3VycmVudC5uYW1lID09PSBzaGlwKSA/IGN1cnJlbnQubGVuZ3RoIDogcHJldiwgbnVsbCk7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBzZXR0aW5ncy5zaGlwcy5yZWR1Y2UoKHByZXYsIGN1cikgPT4gKGN1ci5uYW1lID09PSBzaGlwKSA/IGN1ci5zaXplIDogcHJldiwgbnVsbCk7XG4gIGlmIChzaGlwTGVuZ3RoID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBzaGlwIHBhcmFtZXRlciBzdHJpbmcgbm90IHJlY29nbmlzZWQ6IFwiJHtzaGlwfVwiLiBBbGxvd2FibGUgdmFsdWVzOiAke3NldHRpbmdzLnNoaXBzLm1hcChlID0+IGUubmFtZSl9YCk7XG4gIH1cbiAgcmV0dXJuIHNoaXBMZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBzdGFydEdhbWUsIG9uU3F1YXJlQ2xpY2sgfSBmcm9tICcuLi9vYmovR2FtZS5qcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuLi9vYmovU2hpcC5qcyc7XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcbmNvbnN0IFNISVBTID0gc2V0dGluZ3Muc2hpcHM7XG4vKipcbiAqIEJ1aWxkIEJhdHRsZXNoaXBzIFVJXG4gKi9cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4vLyAgIGNvbnN0IGNvbnRhaW5lckJvYXJkID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWJvYXJkJyk7XG4vLyAgIGNvbnN0IGNvbnRhaW5lckdhbWVJbmZvID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWdhbWUtaW5mbycpO1xuLy8gICBjb25zdCBjdXJyZW50UGxheWVyID0gY29udGFpbmVyR2FtZUluZm8ucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcGxheWVyPnNwYW4nKTtcbi8vICAgY29uc3QgY29udGFpbmVySW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWludHJvJyk7XG4vLyAgIGNvbnN0IGJ1dHRvblBsYXkgPSBjb250YWluZXJJbnRyby5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXBsYXknKTtcblxuLy8gICBjb250YWluZXJCb2FyZC5pbm5lckhUTUwgPSAnJzsgLy8gY2xlYXIgb2xkIGRvbSBlbGVtZW50cyBvdXQgb2YgY29udGFpbmVyLWJvYXJkXG4vLyAgIGNvbnRhaW5lckJvYXJkLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRFbGVtZW50KEJPQVJEX1NJWkUsIDApKTtcbi8vICAgY29udGFpbmVyQm9hcmQuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEVsZW1lbnQoQk9BUkRfU0laRSwgMSkpO1xuLy8gICBidXR0b25QbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnRhaW5lckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuLy8gICAgIGNvbnRhaW5lckdhbWVJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuLy8gICAgIGNvbnRhaW5lckludHJvLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuLy8gICAgIGN1cnJlbnRQbGF5ZXIudGV4dENvbnRlbnQgPSAnMSc7XG4vLyAgICAgc3RhcnRHYW1lKCk7XG4vLyAgIH0pO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAvLyBkb20gZWxlbWVudHNcbiAgY29uc3QgY29udGFpbmVyQm9hcmQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItYm9hcmQnKTtcbiAgY29uc3QgY29udGFpbmVyR2FtZUluZm8gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItZ2FtZS1pbmZvJyk7XG4gIGNvbnN0IGNvbnRhaW5lclNoaXBQbGFjZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItc2hpcC1wbGFjZXInKTtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IGNvbnRhaW5lckdhbWVJbmZvLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXBsYXllcj5zcGFuJyk7XG4gIGNvbnN0IGNvbnRhaW5lckludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1pbnRybycpO1xuICBjb25zdCBidXR0b25QbGF5ID0gY29udGFpbmVySW50cm8ucXVlcnlTZWxlY3RvcignI2J1dHRvbi1wbGF5Jyk7XG4gIGNvbnN0IHBsYWNpbmdCb2FyZCA9IGNvbnRhaW5lclNoaXBQbGFjZXIucXVlcnlTZWxlY3RvcignLnBsYWNpbmctYm9hcmQnKTtcbiAgY29uc3Qgc2hpcENob29zZXIgPSBjb250YWluZXJTaGlwUGxhY2VyLnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNob29zZXInKTtcblxuICAvLyBzaGlwIHBsYWNlciB2YWx1ZXNcbiAgLy8gVE9ET1xuICBjb25zdCBzaGlwTmFtZXMgPSBTSElQUy5tYXAoZSA9PiBlLm5hbWUpO1xuICBjb25zdCBsb25nZXN0U2hpcCA9IFNISVBTLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XG4gICAgaWYgKGN1ci5zaXplID4gcHJldikgcmV0dXJuIGN1ci5zaXplO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCAwKTtcbiAgcGxhY2luZ0JvYXJkLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRFbGVtZW50KEJPQVJEX1NJWkUsIDApKTtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgY29uc3QgZXMgPSBbXTtcbiAgZm9yIChjb25zdCBzaGlwIG9mIFNISVBTKSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGUuY2xhc3NMaXN0LmFkZCgnc2hpcC1jaG9vc2VyLXNoaXAnKTtcblxuICAgIGNvbnN0IGlubmVyU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgIGlubmVyU2hpcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgfVxuICAgIHNoaXBzLnB1c2gobmV3IFNoaXAoc2hpcC5uYW1lKSk7XG4gICAgZS5hcHBlbmQoaW5uZXJTaGlwKTtcbiAgICBlcy5wdXNoKGUpO1xuICB9XG4gIHNoaXBDaG9vc2VyLmFwcGVuZCguLi5lcyk7XG5cbiAgY29udGFpbmVyQm9hcmQuaW5uZXJIVE1MID0gJyc7IC8vIGNsZWFyIG9sZCBkb20gZWxlbWVudHMgb3V0IG9mIGNvbnRhaW5lci1ib2FyZFxuICBidXR0b25QbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGNvbnRhaW5lckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIC8vIGNvbnRhaW5lckdhbWVJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGNvbnRhaW5lclNoaXBQbGFjZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29udGFpbmVySW50cm8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY3VycmVudFBsYXllci50ZXh0Q29udGVudCA9ICcxJztcbiAgICBzdGFydEdhbWUoKTtcbiAgfSk7XG5cbiAgYnV0dG9uUGxheS5jbGljaygpOyAvLyBqdW1wcyBwYXN0IHBsYXkgYnV0dG9uIGJ5IHByZXNzaW5nIGl0XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIGEgR2FtZWJvYXJkXG4gKiBAcGFyYW0ge251bWJlcn0gYm9hcmRTaXplIHRoZSBsZW5ndGggb2YgdGhlIGdhbWVib2FyZCBzaWRlc1xuICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIGF0dHJpYnV0ZSBvZiB0aGlzIEhUTUwgZWxlbWVudFxuICogQHJldHVybnMgSFRNTERpdkVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYnVpbGRCb2FyZEVsZW1lbnQoYm9hcmRTaXplLCBwbGF5ZXJJbmRleCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc05hbWUgPSAnYm9hcmQnO1xuICBib2FyZC5pZCA9IChwbGF5ZXJJbmRleCA9PT0gMCkgPyAnYm9hcmRQbGF5ZXInIDogJ2JvYXJkQ29tcHV0ZXInO1xuICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgYm9hcmRTaXplOyByb3dJbmRleCsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBib2FyZFNpemU7IGNvbEluZGV4KyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTmFtZSA9ICdib2FyZCBzcXVhcmUnO1xuICAgICAgc3F1YXJlLmRhdGFzZXQuY29sID0gY29sSW5kZXg7XG4gICAgICBzcXVhcmUuZGF0YXNldC5yb3cgPSByb3dJbmRleDtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCwgZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFlbC5zcmNFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3RydWNrJykpIHtcbiAgICAgICAgICBvblNxdWFyZUNsaWNrKGNvbEluZGV4LCByb3dJbmRleCwgcGxheWVySW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLW1zZycpO1xuICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9ICdhbHJlYWR5IGF0dGFja2VkIHRoaXMgc3F1YXJlISc7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IG1zZy50ZXh0Q29udGVudCA9ICcnOyB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICByZXR1cm4gYm9hcmQ7XG59XG5cbi8qKlxuICogSXRlcmF0ZSB0aHJvdWdoLlxuICogQHBhcmFtIHtHYW1lRGF0YX0gZ2FtZURhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkcyhnYW1lRGF0YSkge1xuICBjb25zdCB1aWIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9hcmRQbGF5ZXInKTtcbiAgY29uc3QgdWliMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvYXJkQ29tcHV0ZXInKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBnYW1lRGF0YS5wMS5ib2FyZC5zaXplOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGdhbWVEYXRhLnAxLmJvYXJkLnNpemU7IGNvbCsrKSB7XG4gICAgICBwcm9jZXNzQm9hcmRTcXVhcmUoXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZFBsYXllcicpLmNoaWxkTm9kZXNbcm93XS5jaGlsZE5vZGVzW2NvbF0sXG4gICAgICAgIGdhbWVEYXRhLnAxLmJvYXJkLmJvYXJkW3Jvd11bY29sXSxcbiAgICAgICk7XG4gICAgICBwcm9jZXNzQm9hcmRTcXVhcmUoXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZENvbXB1dGVyJykuY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXSxcbiAgICAgICAgZ2FtZURhdGEucDIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcGxheWVyPnNwYW4nKS50ZXh0Q29udGVudCA9IGdhbWVEYXRhLmN1cnJlbnRQbGF5ZXIgKyAxO1xufVxuXG4vKipcbiAgICogVGFrZXMgYSBwYWlyIG9mIGNvbm5lY3RlZCBzcXVhcmVzLiBPbmUgaXMgYSBIVE1MRGl2RWxlbWVudCBmcm9tIHRoZSBVSSwgdGhlIG90aGVyIGlzIGEgc3F1YXJlIGZyb20gdGhlIEdhbWVib2FyZCBvYmplY3Qnc1xuICAgKiBib2FyZCBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gdWlTcXVhcmVcbiAgICogQHBhcmFtIHtCb2FyZFBsYWNlbWVudH0gZGF0YVNxdWFyZVxuICAgKi9cbmZ1bmN0aW9uIHByb2Nlc3NCb2FyZFNxdWFyZSh1aVNxdWFyZSwgZGF0YVNxdWFyZSkge1xuICAvLyBpZiBzcXVhcmUgaXMgZW1wdHlcbiAgaWYgKGRhdGFTcXVhcmUgPT09IG51bGwpIHtcbiAgICB1aVNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgc3F1YXJlIGNvbnRhaW5zIGEgYm9hcmQgcGxhY2VtZW50IGFrYSBhIHNoaXBcbiAgaWYgKHR5cGVvZiBkYXRhU3F1YXJlID09PSAnb2JqZWN0Jykge1xuICAgIHVpU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICBpZiAoZGF0YVNxdWFyZS5pc1N0cnVjaygpKSB7XG4gICAgICB1aVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiBzcXVhcmUgY29udGFpbnMgYSBzdHJpbmcsIGluZGljYXRpbmcgYSBtaXNzXG4gIGlmICh0eXBlb2YgZGF0YVNxdWFyZSA9PT0gJ3N0cmluZycpIHtcbiAgICB1aVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyZVdpbm5lcihtZXNzYWdlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLW1zZycpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vdWkuanMnO1xuXG5pbml0aWFsaXplKCk7XG5cbi8vIGZ1bmN0aW9uIGJhdHRsZXNoaXBzMSgpIHtcblxuLy8gfVxuXG4vLyBmdW5jdGlvbiBiYXR0bGVzaGlwczIoKSB7XG5cbi8vIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==