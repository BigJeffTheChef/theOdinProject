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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --square-dimension: 45px;\r\n  --border-color: rgb(160, 151, 247);\r\n}\r\n\r\n/* Board */\r\n\r\n.container-board {\r\n  display: grid;\r\n  grid-template: 1fr/ repeat(2, 1fr);\r\n  justify-items: center;\r\n  align-items: center;\r\n\r\n  width: 100%;\r\n\r\n  border: 1px solid blueviolet;\r\n}\r\n\r\n.container-ship-placer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid red;\r\n}\r\n\r\n.container-ship-placer>div{\r\n  border: 1px solid green;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n.board>.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.board .square {\r\n  height: var(--square-dimension);\r\n  width: var(--square-dimension);\r\n  box-sizing: border-box;\r\n}\r\n\r\n#boardPlayer .board.square.ship {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.board.square.struck {\r\n  background-color: rgb(182, 182, 182);\r\n  /* border: 3px solid black; */\r\n}\r\n#boardPlayer .board.square.struck.ship,\r\n#boardComputer .board.square.struck.ship {\r\n  background-color:crimson;\r\n}\r\n\r\n.ship-chooser {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.chooser-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship-draggable {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 1px solid goldenrod;\r\n  width: fit-content;\r\n}\r\n\r\n.ship-draggable>div{\r\n  width: var(--square-dimension);\r\n  height: var(--square-dimension);\r\n  border: 1px solid goldenrod;\r\n}\r\n\r\n.ship-hovered {\r\n  border: 1px dashed red;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/web/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;;EAEnB,WAAW;;EAEX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oCAAoC;EACpC,6BAA6B;AAC/B;AACA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\r\n  --square-dimension: 45px;\r\n  --border-color: rgb(160, 151, 247);\r\n}\r\n\r\n/* Board */\r\n\r\n.container-board {\r\n  display: grid;\r\n  grid-template: 1fr/ repeat(2, 1fr);\r\n  justify-items: center;\r\n  align-items: center;\r\n\r\n  width: 100%;\r\n\r\n  border: 1px solid blueviolet;\r\n}\r\n\r\n.container-ship-placer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid red;\r\n}\r\n\r\n.container-ship-placer>div{\r\n  border: 1px solid green;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n.board>.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.board .square {\r\n  height: var(--square-dimension);\r\n  width: var(--square-dimension);\r\n  box-sizing: border-box;\r\n}\r\n\r\n#boardPlayer .board.square.ship {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.board.square.struck {\r\n  background-color: rgb(182, 182, 182);\r\n  /* border: 3px solid black; */\r\n}\r\n#boardPlayer .board.square.struck.ship,\r\n#boardComputer .board.square.struck.ship {\r\n  background-color:crimson;\r\n}\r\n\r\n.ship-chooser {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.chooser-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship-draggable {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 1px solid goldenrod;\r\n  width: fit-content;\r\n}\r\n\r\n.ship-draggable>div{\r\n  width: var(--square-dimension);\r\n  height: var(--square-dimension);\r\n  border: 1px solid goldenrod;\r\n}\r\n\r\n.ship-hovered {\r\n  border: 1px dashed red;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
  // gameData = new GameData(
  //   new Player(true),
  //   new Player(false),
  //   new Gameboard(),
  //   new Gameboard(),
  // );

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
  if (!gameActive || gameData === null) return;
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
/* harmony import */ var _obj_Gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../obj/Gameboard */ "./src/obj/Gameboard.js");

// eslint-disable-next-line import/no-cycle




const BOARD_SIZE = _settings_json__WEBPACK_IMPORTED_MODULE_0__["gameboard-size"];
const SHIPS = _settings_json__WEBPACK_IMPORTED_MODULE_0__.ships;
let constructionBoard = new _obj_Gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();

/**
 * Prepares components for game play
 */
function initialize() {
  // dom elements
  const containerShipPlacer = document.body.querySelector('.container-ship-placer');
  const containerIntro = document.querySelector('.container-intro');
  const buttonPlay = containerIntro.querySelector('#button-play');
  const placingBoard = containerShipPlacer.querySelector('.placing-board');
  const shipChooser = containerShipPlacer.querySelector('.ship-chooser');
  constructionBoard = new _obj_Gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();

  // create a board for placing ships onto
  placingBoard.appendChild(buildBoardElement(BOARD_SIZE, 0, true));

  // create draggable ship representations
  for (const ship of SHIPS) {
    const shipDraggable = document.createElement('div');
    shipDraggable.classList.add('ship-draggable');
    shipDraggable.draggable = true;
    shipDraggable.dataset.shipName = ship.name;
    for (let i = 0; i < ship.size; i++) { // add boxs up to ship length
      shipDraggable.appendChild(document.createElement('div'));
    }
    //shipDraggable.addEventListener('dragstart', () => shipDraggable.classList.add('dragging'));
    //shipDraggable.addEventListener('dragend', () => shipDraggable.classList.remove('dragging'));
    shipChooser.append(shipDraggable);
  }

  // register event listeners
  buttonPlay.addEventListener('click', () => {
    // containerBoard.classList.remove('hidden');
    containerShipPlacer.classList.remove('hidden');
    containerIntro.classList.add('hidden');
    (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();
  });
  for (const draggable of document.querySelectorAll('.ship-draggable')) {
    draggable.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', draggable.dataset.shipName);
    });
  }
  for (const droppable of document.querySelectorAll('.board.square')) {
    droppable.addEventListener('dragover', e => {
      e.preventDefault();
    });
    droppable.addEventListener('drop', e => {
      const dataShipName = e.dataTransfer.getData('text/plain'); // "patrol boat" etc
      e.preventDefault();
      const draggingShip = document.querySelector(`.ship-draggable[data-ship-name="${dataShipName}"]`);
      const accepted = constructionBoard.placeShip(
        draggingShip.dataset.shipName,
        parseInt(e.target.dataset.col),
        parseInt(e.target.dataset.row),
        false
      );
      if (accepted) {
        renderNew(document.querySelector('.placing-board>.board'), constructionBoard);
        document.querySelector('.ship-chooser').removeChild(draggingShip);
      }
    });
  }

  buttonPlay.click(); // jumps past play button by pressing it
}

/**
 * draggable ship dropping event handler
 * @param {event} event drop event
 */
// function dropShipHandler(event) {
//   event.preventDefault();
//   const draggingShip = document.querySelector('.dragging');
//   const accepted = constructionBoard.placeShip(
//     draggingShip.dataset.shipName,
//     parseInt(event.target.dataset.col),
//     parseInt(event.target.dataset.row),
//     false
//   );
//   if (accepted) {
//     renderNew(document.querySelector('.placing-board>.board'), constructionBoard);
//     document.querySelector('.ship-chooser').removeChild(draggingShip);
//   }
// }

function allowDropShip(event) {

}

/**
 * Create a visual representation of a Gameboard
 * @param {number} boardSize the length of the gameboard sides
 * @param {string} id id attribute of this HTML element
 * @param {boolean} isChooser set to true when a UI board is being created for ship placement. Defaults to false.
 * @returns HTMLDivElement
 */
function buildBoardElement(boardSize, playerIndex, isChooser = false) {
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
      // if (isChooser) {
      //   square.addEventListener('dragenter', () => square.classList.add('ship-hovered'));
      //   square.addEventListener('dragleave', () => square.classList.remove('ship-hovered'));
      //   square.addEventListener('dragover', e => e.preventDefault());
      //   square.addEventListener('drop', e => {
      //     square.classList.remove('ship-hovered');
      //     dropShipHandler(e)
      //   });
      // }
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}

/**
 * 
 * @param {HTMLDivElement} uiElement 
 * @param {Gameboard} board 
 */
function renderNew(uiElement, board) {
  for (let row = 0; row < board.size; row++) {
    for (let col = 0; col < board.size; col++) {
      processBoardSquare(
        uiElement.childNodes[row].childNodes[col],
        board.board[row][col],
      );
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1c7QUFDakM7QUFDQSxrREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3M/NDM0MCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovQm9hcmRQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9Db29yZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi91aS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL0NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxyXFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCb2FyZCAqL1xcclxcblxcclxcbi5jb250YWluZXItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXNoaXAtcGxhY2VyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlcj5kaXZ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQ+LnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIC5zcXVhcmUge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiNib2FyZFBsYXllciAuYm9hcmQuc3F1YXJlLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLnNxdWFyZS5zdHJ1Y2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcclxcbiAgLyogYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcbiNib2FyZFBsYXllciAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwLFxcclxcbiNib2FyZENvbXB1dGVyIC5ib2FyZC5zcXVhcmUuc3RydWNrLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjpjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jaG9vc2VyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNob29zZXItcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1kcmFnZ2FibGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkZW5yb2Q7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWRyYWdnYWJsZT5kaXZ7XFxyXFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXNxdWFyZS1kaW1lbnNpb24pO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZGVucm9kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1ob3ZlcmVkIHtcXHJcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dlYi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtDQUFrQztBQUNwQzs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsbUJBQW1COztFQUVuQixXQUFXOztFQUVYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDZCQUE2QjtBQUMvQjtBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1zcXVhcmUtZGltZW5zaW9uOiA0NXB4O1xcclxcbiAgLS1ib3JkZXItY29sb3I6IHJnYigxNjAsIDE1MSwgMjQ3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQm9hcmQgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIvIHJlcGVhdCgyLCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItc2hpcC1wbGFjZXI+ZGl2e1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIFxcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkPi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCAuc3F1YXJlIHtcXHJcXG4gIGhlaWdodDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICB3aWR0aDogdmFyKC0tc3F1YXJlLWRpbWVuc2lvbik7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRQbGF5ZXIgLmJvYXJkLnNxdWFyZS5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC5zcXVhcmUuc3RydWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcXHJcXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrOyAqL1xcclxcbn1cXHJcXG4jYm9hcmRQbGF5ZXIgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCxcXHJcXG4jYm9hcmRDb21wdXRlciAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2hvb3NlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaG9vc2VyLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZHJhZ2dhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZGVucm9kO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1kcmFnZ2FibGU+ZGl2e1xcclxcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1kaW1lbnNpb24pO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtaG92ZXJlZCB7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcclxuICogQW4gb2JqZWN0IHRoYXQgcmVjb3JkcyBkYXRhIHJlcXVpcmVkIGZvciBwbGFjZW1lbnQgb250byBhIHNxdWFyZSBvZiB0aGUgR2FtZWJvYXJkIG9iamVjdHMgYm9hcmQgcHJvcGVydHlcclxuICogQHBhcmFtIHtTaGlwfSBzaGlwXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRQbGFjZW1lbnQoc2hpcCwgaW5kZXgpIHtcclxuICB0aGlzLnNoaXAgPSBzaGlwO1xyXG4gIHRoaXMuc2hpcEh1bGxJbmRleCA9IGluZGV4O1xyXG59XHJcblxyXG5Cb2FyZFBsYWNlbWVudC5wcm90b3R5cGUuaXNTdHJ1Y2sgPSBmdW5jdGlvbiBpc1N0cnVjaygpIHtcclxuICByZXR1cm4gdGhpcy5zaGlwLmh1bGxbdGhpcy5zaGlwSHVsbEluZGV4XTtcclxufTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZSBhIGNvb3JkIG9iamVjdCB0aGF0IGhvbGRzIHggYW5kIHkgbnVtYmVyaWMgdmFsdWVzIGZvciBhIGJvYXJkIGNvLW9yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29vcmQoeCwgeSkge1xyXG4gIHRoaXMueCA9IHBhcnNlSW50KHgsIDEwKTtcclxuICB0aGlzLnkgPSBwYXJzZUludCh5LCAxMCk7XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4vR2FtZURhdGEuanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgeyByZW5kZXJCb2FyZHMsIGRlY2xhcmVXaW5uZXIgfSBmcm9tICcuLi93ZWIvdWkuanMnO1xyXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xyXG5cclxubGV0IGdhbWVEYXRhID0gbnVsbDtcclxubGV0IGdhbWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgLy8gc2V0IGdhbWUgZGF0YVxyXG4gIGdhbWVBY3RpdmUgPSB0cnVlO1xyXG4gIC8vIGdhbWVEYXRhID0gbmV3IEdhbWVEYXRhKFxyXG4gIC8vICAgbmV3IFBsYXllcih0cnVlKSxcclxuICAvLyAgIG5ldyBQbGF5ZXIoZmFsc2UpLFxyXG4gIC8vICAgbmV3IEdhbWVib2FyZCgpLFxyXG4gIC8vICAgbmV3IEdhbWVib2FyZCgpLFxyXG4gIC8vICk7XHJcblxyXG4gIC8vIHByZXBhcmUgc2hpcCBwbGFjaW5nIGZ1bmN0aW9uYWxpdHkgYW5kIHN0YXJ0XHJcbiAgLy8gcGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci10ZW1wbGF0ZVxyXG4gIC8vIGNvbnNvbGUubG9nKCdzdGFydCAnICsgRGF0ZSgpKTtcclxuICAvLyBwbGFjZVNoaXBzSW50ZW50aW9uYWxseSgpLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgcmVuZGVyQm9hcmRzKGdhbWVEYXRhKTtcclxuICAvLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcclxuICAvLyAgIGNvbnNvbGUubG9nKCdlbmQgJyArIERhdGUoKSk7XHJcbiAgLy8gfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGFuIGV2ZW50IGhhbmRsZXIgdGhhdCBpcyBhY3RpdmF0ZWQgZWFjaCB0aW1lIGEgdmFsaWQgYm9hcmQgc3F1YXJlIGlzIGNsaWNrZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGUgb2YgZ2FtZWJvYXJkIChvdXRlciBhcnJheSBpbmRleClcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZSAgICAgICAgICAgICAgKGlubmVyIGFycmF5IGluZGV4KVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGxheWVySW5kZXggdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IHBsYXllciBmb3IgdXNlIGluIGdhbWVEYXRhLnBsYXllcnNbaW5kZXhdLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uU3F1YXJlQ2xpY2soeCwgeSwgcGxheWVySW5kZXgpIHtcclxuICBpZiAoIWdhbWVBY3RpdmUgfHwgZ2FtZURhdGEgPT09IG51bGwpIHJldHVybjtcclxuICBpZiAoZ2FtZURhdGEuZW5lbXlQbGF5ZXIgPT09IHBsYXllckluZGV4KSB7XHJcbiAgICBnYW1lRGF0YS5wbGF5ZXJzW3BsYXllckluZGV4XS5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gICAgaWYgKGdhbWVEYXRhLnBsYXllcnNbcGxheWVySW5kZXhdLmJvYXJkLmFsbFN1bmsoKSkge1xyXG4gICAgICBnYW1lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIC8vIHBsYXllciBoYXMgbm90IGNoYW5nZWQgeWV0LCBzbyBjdXJyZW50IHBsYXllciBpcyBhbGxTdW5rICYgdGhlcmVmb3JlIGxvc2VzLlxyXG4gICAgICBkZWNsYXJlV2lubmVyKGBHYW1lb3ZlciEgJHtwbGF5ZXJJbmRleCA9PT0gMCA/ICdDb21wdXRlcicgOiAnSHVtYW4nfSBwbGF5ZXIgd2lucyFgKTtcclxuICAgIH1cclxuICAgIGdhbWVEYXRhLmNoYW5nZVBsYXllcigpO1xyXG4gICAgcmVuZGVyQm9hcmRzKGdhbWVEYXRhKTtcclxuICAgIGlmICghZ2FtZURhdGEuaXNDdXJyZW50UGxheWVySHVtYW4oKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnY29tcHV0ZXIgcGxheWVycyBnbyBub3cnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrQ29vcmRzID0gZ2FtZURhdGEucGxheWVyc1tnYW1lRGF0YS5jdXJyZW50UGxheWVyXS5wbGF5ZXIuYXR0YWNrKCk7XHJcbiAgICAgICAgb25TcXVhcmVDbGljayhhdHRhY2tDb29yZHMueCwgYXR0YWNrQ29vcmRzLnksIGdhbWVEYXRhLmVuZW15UGxheWVyKTtcclxuICAgICAgfSwgMSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhaW50IHlhIGdvIHNvbiwgc2ltbWVyIGRvd24nKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBsYWNlU2hpcHNJbnRlbnRpb25hbGx5KCkge1xyXG4gIC8vIGNvbnN0IHsgc2hpcHMgfSA9IHNldHRpbmdzO1xyXG4gIC8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gIC8vIGxldCB5ID0gMDtcclxuICAvLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAvLyBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAvLyAgIGdhbWVEYXRhLnAxLmJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIDAsIHksIGZhbHNlKTtcclxuICAvLyAgIC8vIGdhbWVEYXRhLnAxLmJvYXJkLnJlY2VpdmVBdHRhY2soMCwgeSk7XHJcbiAgLy8gICBnYW1lRGF0YS5wMi5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XHJcbiAgLy8gICAvLyBnYW1lRGF0YS5wMi5ib2FyZC5yZWNlaXZlQXR0YWNrKDAsIHkpO1xyXG4gIC8vICAgeSsrO1xyXG4gIC8vIH1cclxuICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBzZXRUaW1lb3V0KCgpID0+ICdoZWxsbycsIDUwMDApO1xyXG4gIC8vIHJldHVybiByZXN1bHQ7XHJcbiAgLy8gY29uc3Qgd2FpdCA9ICcnO1xyXG4gIC8vIGdhbWVEYXRhLnAxLmJvYXJkLnJlY2VpdmVBdHRhY2soOSwgOSk7XHJcbiAgLy8gZ2FtZURhdGEucDIuYm9hcmQucmVjZWl2ZUF0dGFjaygzLCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xyXG4gIGNvbnN0IHsgc2hpcHMgfSA9IHNldHRpbmdzO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxyXG4gIGxldCB5ID0gMDtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgIGdhbWVEYXRhLnAxLmJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIDAsIHksIGZhbHNlKTtcclxuICAgIC8vIGdhbWVEYXRhLnAxLmJvYXJkLnJlY2VpdmVBdHRhY2soMCwgeSk7XHJcbiAgICBnYW1lRGF0YS5wMi5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XHJcbiAgICAvLyBnYW1lRGF0YS5wMi5ib2FyZC5yZWNlaXZlQXR0YWNrKDAsIHkpO1xyXG4gICAgeSsrO1xyXG4gIH1cclxuICAvLyBnYW1lRGF0YS5wMS5ib2FyZC5yZWNlaXZlQXR0YWNrKDksIDkpO1xyXG4gIC8vIGdhbWVEYXRhLnAyLmJvYXJkLnJlY2VpdmVBdHRhY2soMywgMCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhvbGRzIGRhdGEgYWJvdXQgYSBnYW1lLiBUaGVyZSBhcmUgdHdvIHBsYXllcnMsIGVhY2ggaG9sZGluZyBkYXRhIG9uIHRoZSBwbGF5ZXIgaXRzZWxmLCBhbmQgdGhlaXIgYm9hcmQuXHJcbiAqIEFkZGl0aW9uYWwgdGhlIGN1cnJlbnQgcGxheWVyIGFuZCBlbmVteSBwbGF5ZXJzIGFyZSBzdG9yZWQgaGVyZS5cclxuICogQHBhcmFtIHsqfSBwMSBwbGF5ZXIgMSdzIHBsYXllciBvYmplY3RcclxuICogQHBhcmFtIHsqfSBwMiBwbGF5ZXIgMidzIHBsYXllciBvYmplY3RcclxuICogQHBhcmFtIHsqfSBiMSBwbGF5ZXIgMSdzIGJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0geyp9IGIyIHBsYXllciAyJ3MgYm9hcmQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lRGF0YShwMSwgcDIsIGIxLCBiMikge1xyXG4gIHRoaXMucDEgPSB7IHBsYXllcjogcDEsIGJvYXJkOiBiMSB9O1xyXG4gIHRoaXMucDIgPSB7IHBsYXllcjogcDIsIGJvYXJkOiBiMiB9O1xyXG4gIHRoaXMucGxheWVycyA9IFt0aGlzLnAxLCB0aGlzLnAyXTtcclxuICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSAwO1xyXG4gIHRoaXMuZW5lbXlQbGF5ZXIgPSAxO1xyXG59XHJcblxyXG4vKipcclxuICogU3dhcHMgY3VycmVudFBsYXllciBhbmQgZW5lbXlQbGF5ZXIgb2YgZ2FtZURhdGFcclxuICovXHJcbkdhbWVEYXRhLnByb3RvdHlwZS5jaGFuZ2VQbGF5ZXIgPSBmdW5jdGlvbiBjaGFuZ2VQbGF5ZXIoKSB7XHJcbiAgdGhpcy5jdXJyZW50UGxheWVyID0gKHRoaXMuY3VycmVudFBsYXllciA9PT0gMCkgPyAxIDogMDtcclxuICB0aGlzLmVuZW15UGxheWVyID0gKHRoaXMuZW5lbXlQbGF5ZXIgPT09IDApID8gMSA6IDA7XHJcbn07XHJcblxyXG5HYW1lRGF0YS5wcm90b3R5cGUuaXNDdXJyZW50UGxheWVySHVtYW4gPSBmdW5jdGlvbiBjdXJyZW50UGxheWVySHVtYW4oKSB7XHJcbiAgcmV0dXJuIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJdLnBsYXllci5odW1hbjtcclxufTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xyXG5pbXBvcnQgQm9hcmRQbGFjZW1lbnQgZnJvbSAnLi9Cb2FyZFBsYWNlbWVudC5qcyc7XHJcbmltcG9ydCBDb29yZCBmcm9tICcuL0Nvb3JkLmpzJztcclxuXHJcbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQ09OU1RBTlRTXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5jb25zdCBCT0FSRF9TSVpFID0gc2V0dGluZ3NbJ2dhbWVib2FyZC1zaXplJ107XHJcblxyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENPTlNUUlVDVE9SU1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIEdhbWVib2FyZCBvYmplY3RcclxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IHNpemUgZGVmYXVsdHMgdG8gMTAgYnV0IGNhbiBiZSBzZXQgbWFudWFsbHlcclxuICovXHJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcclxuICB0aGlzLnNpemUgPSBCT0FSRF9TSVpFO1xyXG4gIHRoaXMuYm9hcmQgPSBuZXcgQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5ib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLnNpemUpLmZpbGwobnVsbCk7XHJcbiAgfVxyXG4gIHRoaXMubWlzc2VzID0gW107XHJcbiAgdGhpcy5zaGlwcyA9IFtdO1xyXG59XHJcblxyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIE1FVEhPRFNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qKlxyXG4gKiBQbGFjZSBhIHNoaXAgb24gdGhlIGJvYXJkXHJcbiAqIEBwYXJhbSB7U2hpcH0gc2hpcE5hbWUgYSBTaGlwIG9iamVjdFxyXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGVcclxuICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCBhIGJvb2xlYW4sIHRydWUgaWYgdmVydGljYWwsIGZhbHNlIGlmIGhvcml6b250YWxcclxuICovXHJcbkdhbWVib2FyZC5wcm90b3R5cGUucGxhY2VTaGlwID0gZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBOYW1lLCB4LCB5LCB2ZXJ0aWNhbCkge1xyXG4gIGNvbnN0IHNoaXBEZXRhaWxzID0gZGV0ZXJtaW5lU2hpcERldGFpbHMoc2hpcE5hbWUsIG5ldyBDb29yZCh4LCB5KSwgdmVydGljYWwpO1xyXG4gIGlmICghc2hpcERldGFpbHMpIHJldHVybiBmYWxzZTtcclxuICBpZiAoIWRldGVybWluZVNoaXBPdmVybGFwLmNhbGwodGhpcywgc2hpcERldGFpbHMuY29vcmRzKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGxldCBpbmRleCA9IDA7XHJcbiAgc2hpcERldGFpbHMuY29vcmRzLmZvckVhY2goZSA9PiB7IHRoaXMuYm9hcmRbZS55XVtlLnhdID0gbmV3IEJvYXJkUGxhY2VtZW50KHNoaXBEZXRhaWxzLnNoaXAsIGluZGV4KyspOyB9KTtcclxuICB0aGlzLnNoaXBzLnB1c2goc2hpcERldGFpbHMuc2hpcCk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVjZWl2ZSBhbiBhdHRhY2suIFRoZSBhdHRhY2sgd2lsbCBlaXRoZXIgaGl0IGEgc2hpcCwgaW4gd2hpY2ggY2FzZSB0aGF0IHNoaXAgcmVjb3JkcyBhIGhpdCBhdCB0aGF0IHBvc2l0aW9uO1xyXG4gKiBvciB0aGUgYXR0YWNrIHdpbGwgbWlzcywgaW4gd2hpY2ggY2FzZSBpdCBpcyByZWNvcmRlZCBpbiB0aGUgbWlzc2VzIGFycmF5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IHggY28tb3JkaW5hdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHkgeSBjby1vcmRpbmF0ZVxyXG4gKiBAcmV0dXJucyB0cnVlIGlmIGF0dGFjayB3YXMgc3VjY2Vzc2Z1bCwgZmFsc2UgaWYgYXR0YWNrIHdhcyBhIG1pc3NcclxuICovXHJcbkdhbWVib2FyZC5wcm90b3R5cGUucmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcclxuICAvLyBjb25zb2xlLmxvZygneCBhbmQgeTonICsgeCArICcgJyArIHkpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHRoaXMuYm9hcmRbeV0pO1xyXG4gIGNvbnN0IHNxdWFyZSA9IHRoaXMuYm9hcmRbeV1beF07XHJcbiAgaWYgKHR5cGVvZiBzcXVhcmUgPT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKHNxdWFyZSA9PT0gbnVsbCkge1xyXG4gICAgdGhpcy5taXNzZXMucHVzaChuZXcgQ29vcmQoeCwgeSkpO1xyXG4gICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdtaXNzJztcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3F1YXJlLnNoaXAuaGl0KHNxdWFyZS5zaGlwSHVsbEluZGV4KTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbGwgc2hpcHMgb24gdGhlIGJvYXJkIGFyZSBzdW5rXHJcbiAqIEByZXR1cm5zIHRydWUgaWYgYWxsIHN1bmtzIGFyZSBzdW5rLCBhbmQgZmFsc2UgaWYgdGhleSBhcmUgbm90XHJcbiAqL1xyXG5HYW1lYm9hcmQucHJvdG90eXBlLmFsbFN1bmsgPSBmdW5jdGlvbiBhbGxTdW5rKCkge1xyXG4gIHJldHVybiB0aGlzLnNoaXBzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICBpZiAoIWN1ci5pc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbiAgfSwgdHJ1ZSk7XHJcbn07XHJcblxyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEhFTFBFUiBGVU5DVElPTlNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qKlxyXG4gKiAgRGV0ZXJtaW5lcyBpZiBhIHNoaXBzIHBsYWNlbWVudCBpcyBhY2NlcHRhYmxlIGluIHRoYXQgaXQgZG9lcyBub3Qgb3ZlcmxhcCBhbm90aGVyIHNoaXAuXHJcbiAqIEBwYXJhbSB7Q29vcmRbXX0gc2hpcENvb3JkcyBzaGlwIGNvb3JkcyB0byBjaGVja1xyXG4gKiBAdGhpcyB7R2FtZWJvYXJkfSB0aGlzIGZ1bmN0aW9uIG11c3QgaGF2ZSBpdHMgY29udGV4dC8gdGhpcyBzZXQgdG8gYSBnYW1lYm9hcmQgb2JqZWN0XHJcbiAqIEByZXR1cm4gYSBib29sZWFuIHJlcHJlc2VudGluZyBpZiB0aGlzIHNoaXAgcGxhY2VtZW50IGlzIHZhbGlkLCBpbiB0aGF0IGl0IGRvZXMgbm90IG92ZXJsYXAgYW5vdGhlciBzaGlwXHJcbiAqL1xyXG5mdW5jdGlvbiBkZXRlcm1pbmVTaGlwT3ZlcmxhcChzaGlwQ29vcmRzKSB7XHJcbiAgbGV0IG92ZXJsYXBGb3VuZCA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRoaXMuYm9hcmRbc2hpcENvb3Jkc1tpXS55XVtzaGlwQ29vcmRzW2ldLnhdICE9PSBudWxsKSB7XHJcbiAgICAgIG92ZXJsYXBGb3VuZCA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gIW92ZXJsYXBGb3VuZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgc2hpcCBkZXRhaWxzLiBUaGF0IGlzLCB0aGUgcmVzb2x2ZXMgdGhlIHNoaXBOYW1lIHRvIGEgU2hpcCBvYmplY3QsIGFuZCBkZXRlcm1pbmVzIGFsbCB0aGUgY29vcmRpbmF0ZXMgb24gdGhlIGJvYXJkIHRoZSBTaGlwXHJcbiAqIHdvdWxkIGluaGFiaXQsIHRha2luZyBpbnRvIGNvbnNpZGVyYXRpb24gaXRzIG9yaWVudGF0aW9uIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwTmFtZSBuYW1lIG9mIHNoaXAgdHlwZVxyXG4gKiBAcGFyYW0ge0Nvb3JkfSBzZWxlY3RlZENvb3JkIENvb3JkIG9iamVjdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHZlcnRpY2FsIHZlcnRpY2FsIGlmIHRydWUsIGhvcml6b250YWwgaWYgZmFsc2VcclxuICogQHJldHVybnMgZmFsc2UgaWYgaW52YWxpZCwgc2hpcCBwbGFjZW1lbnQgZGV0YWlscyBpZiB2YWxpZC5cclxuICovXHJcbmZ1bmN0aW9uIGRldGVybWluZVNoaXBEZXRhaWxzKHNoaXBOYW1lLCBzZWxlY3RlZENvb3JkLCB2ZXJ0aWNhbCkge1xyXG4gIC8vIHZhbGlkYXRlIHN0YXJ0IGNvb3Jkc1xyXG4gIGlmICghdmFsaWRhdGVDb29yZHMoc2VsZWN0ZWRDb29yZCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgLy8gdmFsaWRhdGUgc2hpcCBuYW1lIGFuZCBpbnN0YW50aWF0ZSBzaGlwXHJcbiAgbGV0IHNoaXA7XHJcbiAgdHJ5IHtcclxuICAgIHNoaXAgPSBuZXcgU2hpcChzaGlwTmFtZSk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjID0gc2VsZWN0ZWRDb29yZDtcclxuICBjb25zdCBzaGlwUGxhY2VtZW50Q29vcmRzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmh1bGwubGVuZ3RoOyBpKyspIHtcclxuICAgIHNoaXBQbGFjZW1lbnRDb29yZHMucHVzaChuZXcgQ29vcmQoYy54LCBjLnkpKTtcclxuICAgIGlmICh2ZXJ0aWNhbCkgYy55Kys7XHJcbiAgICBlbHNlIGMueCsrO1xyXG4gIH1cclxuXHJcbiAgLy8gdmFsaWRhdGUgZW5kIGNvb3Jkc1xyXG4gIGlmICghdmFsaWRhdGVDb29yZHMoc2hpcFBsYWNlbWVudENvb3Jkcy5hdCgtMSkpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIC8vIHJldHVybiBzaGlwIHBsYWNlbWVudCBkZXRhaWxzXHJcbiAgcmV0dXJuIHtcclxuICAgIHNoaXAsXHJcbiAgICBjb29yZHM6IHNoaXBQbGFjZW1lbnRDb29yZHMsXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlIGJhc2ljIGNvb3JkIHZhbHVlcy5cclxuICogQHBhcmFtIHtDb29yZH0gY29vcmRzIG9iamVjdCBsaXRlcmFsIGNvbnRhaW5pbmcgeCBhbmQgeSBwcm9wZXJ0aWVzXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGNvb3JkcyBhcmUgdmFsaWQsIGZhbHNlIGlmIGludmFsaWRcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRzKGNvb3Jkcykge1xyXG4gIGlmICh0eXBlb2YgY29vcmRzLnggIT09ICdudW1iZXInXHJcbiAgICB8fCB0eXBlb2YgY29vcmRzLnkgIT09ICdudW1iZXInXHJcbiAgICB8fCBjb29yZHMueCA8IDBcclxuICAgIHx8IGNvb3Jkcy55IDwgMFxyXG4gICAgfHwgY29vcmRzLnggPj0gQk9BUkRfU0laRVxyXG4gICAgfHwgY29vcmRzLnkgPj0gQk9BUkRfU0laRSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xyXG5leHBvcnQgeyBCT0FSRF9TSVpFIH07XHJcbiIsImltcG9ydCBDb29yZCBmcm9tICcuL0Nvb3JkLmpzJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xyXG5cclxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xyXG4vKipcclxuICogQ3JlYXRlIGEgcGxheWVyIG9iamVjdFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIHRydWUgaWYgdGhpcyBpcyBhIGh1bWFuIHBsYXllciwgZmFsc2UgaWYgaXQgaXMgYSBjb21wdXRlciBwbGF5ZXJcclxuICovXHJcbmZ1bmN0aW9uIFBsYXllcihodW1hbikge1xyXG4gIHRoaXMuaHVtYW4gPSBodW1hbjtcclxuICB0aGlzLnZhbGlkTW92ZXMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHgrKykge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBCT0FSRF9TSVpFOyB5KyspIHtcclxuICAgICAgdGhpcy52YWxpZE1vdmVzLnB1c2goKHRoaXMuaHVtYW4pID8gbnVsbCA6IG5ldyBDb29yZCh4LCB5KSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBJZiB0aGlzIFBsYXllciBpcyBodW1hbiwgdGhlbiByZXR1cm4gbnVsbC5cclxuICogSWYgdGhpcyBwbGF5ZXIgaXMgY29tcHV0ZXIsIHNlbGVjdCBhIHJhbmRvbSB2YWxpZE1vdmUgYW5kIHJldHVybiBpdC5cclxuICogSW4gZWl0aGVyIGNhc2UsIHRoZSBudW1iZXIgb2YgdmFsaWRNb3ZlcyBpcyByZWR1Y2VkIGJ5IDEuXHJcbiAqIEByZXR1cm5zIG51bGwgZm9yIGh1bWFuIHBsYXllcnMsIGFuZCBhIENvb3JkIG9iamVjdCBmb3IgY29tcHV0ZXJzXHJcbiAqIEB0aHJvdyBpZiB2YWxpZE1vdmVzLmxlbmd0aCBpcyAwLlxyXG4gKi9cclxuUGxheWVyLnByb3RvdHlwZS5hdHRhY2sgPSBmdW5jdGlvbiBhdHRhY2soKSB7XHJcbiAgaWYgKHRoaXMudmFsaWRNb3Zlcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuaHVtYW4pXHJcbiAgICAgID8gdGhpcy52YWxpZE1vdmVzLnBvcCgpXHJcbiAgICAgIDogdGhpcy52YWxpZE1vdmVzLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnZhbGlkTW92ZXMubGVuZ3RoKSwgMSkuYXQoMCk7XHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcignbm8gdmFsaWQgbW92ZXMgcmVtYWluaW5nJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XHJcbiIsImltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncy5qc29uJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBzaGlwIG9iamVjdCwgYnkgc3BlY2lmeWluZyB0aGUgbmFtZSBvZiB0aGUgc2hpcCByZXF1aXJlZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IHNoaXAgbmFtZSBvZiBzaGlwLCBjb3JyZXNwb25kcyB0byBhIGxlbmd0aC5cclxuICovXHJcbmZ1bmN0aW9uIFNoaXAoc2hpcCkge1xyXG4gIHRoaXMubGVuZ3RoID0gdmFsaWRhdGVTaGlwKHNoaXApO1xyXG4gIHRoaXMubmFtZSA9IHNoaXA7XHJcbiAgdGhpcy5odWxsID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKS5maWxsKGZhbHNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICdoaXQnIC8gYXR0YWNrIHRoaXMgc2hpcCBhdCBzcGVjaWZpZWQgaW5kZXhcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uIHRoZSB6ZXJvLWluZGV4ZWQgcG9zaXRvbiBvZiB0aGlzIHNoaXBzIGh1bGwgdG8gcmVjb3JkIGEgaGl0XHJcbiAqL1xyXG5TaGlwLnByb3RvdHlwZS5oaXQgPSBmdW5jdGlvbiBoaXQoaW5kZXgpIHtcclxuICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgc3BlY2lmaWVkIGhpdCBpbmRleCBcIiR7aW5kZXh9XCIgaXMgZ3JlYXRlciB0aGFuIGFsbG93YWJsZSBmb3IgYSBzaGlwIG9mIGxlbmd0aCAke3RoaXMubGVuZ3RofS5gKTtcclxuICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBzcGVjaWZpZWQgaGl0IGluZGV4IFwiJHtpbmRleH1cIiBjYW5ub3QgYmUgbmVnYXRpdmUuYCk7XHJcbiAgfVxyXG4gIHRoaXMuaHVsbFtpbmRleF0gPSB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGEgc2hpcCBoYXMgc3VuaywgdGhhdCBpcywgaXQncyBodWxsIGhhcyBiZWVuIGhpdCBhdCBlYWNoIHBvc2l0aW9uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSByZXByZXNlbnRpbmcgaWYgdGhpcyBzaGlwIGhhcyBiZWVuIHN1bmtcclxuICovXHJcblNoaXAucHJvdG90eXBlLmlzU3VuayA9IGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICByZXR1cm4gdGhpcy5odWxsLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudCA9PT0gZmFsc2UgPyBmYWxzZSA6IHByZXYsIHRydWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSB0aGUgbGVuZ3RoIG9mIGEgc2hpcCwgYnkgaXQncyBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwIGEgbmFtZSBvZiBhIHNoaXBcclxuICogQHJldHVybnMgdGhlIGxlbmd0aCBvZiBzYWlkIHNoaXBcclxuICogQHRocm93cyBFcnJvciBpZiBzaGlwIG5hbWUgbm90IHJlY29nbmlzZWRcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcChzaGlwKSB7XHJcbiAgLy8gY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBzVHlwZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAoY3VycmVudC5uYW1lID09PSBzaGlwKSA/IGN1cnJlbnQubGVuZ3RoIDogcHJldiwgbnVsbCk7XHJcbiAgY29uc3Qgc2hpcExlbmd0aCA9IHNldHRpbmdzLnNoaXBzLnJlZHVjZSgocHJldiwgY3VyKSA9PiAoY3VyLm5hbWUgPT09IHNoaXApID8gY3VyLnNpemUgOiBwcmV2LCBudWxsKTtcclxuICBpZiAoc2hpcExlbmd0aCA9PT0gbnVsbCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBzaGlwIHBhcmFtZXRlciBzdHJpbmcgbm90IHJlY29nbmlzZWQ6IFwiJHtzaGlwfVwiLiBBbGxvd2FibGUgdmFsdWVzOiAke3NldHRpbmdzLnNoaXBzLm1hcChlID0+IGUubmFtZSl9YCk7XHJcbiAgfVxyXG4gIHJldHVybiBzaGlwTGVuZ3RoO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xyXG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgc3RhcnRHYW1lLCBvblNxdWFyZUNsaWNrIH0gZnJvbSAnLi4vb2JqL0dhbWUuanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuLi9vYmovU2hpcC5qcyc7XHJcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi4vb2JqL0dhbWVib2FyZCc7XHJcblxyXG5jb25zdCBCT0FSRF9TSVpFID0gc2V0dGluZ3NbJ2dhbWVib2FyZC1zaXplJ107XHJcbmNvbnN0IFNISVBTID0gc2V0dGluZ3Muc2hpcHM7XHJcbmxldCBjb25zdHJ1Y3Rpb25Cb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHJcbi8qKlxyXG4gKiBQcmVwYXJlcyBjb21wb25lbnRzIGZvciBnYW1lIHBsYXlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgLy8gZG9tIGVsZW1lbnRzXHJcbiAgY29uc3QgY29udGFpbmVyU2hpcFBsYWNlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1zaGlwLXBsYWNlcicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lckludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1pbnRybycpO1xyXG4gIGNvbnN0IGJ1dHRvblBsYXkgPSBjb250YWluZXJJbnRyby5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXBsYXknKTtcclxuICBjb25zdCBwbGFjaW5nQm9hcmQgPSBjb250YWluZXJTaGlwUGxhY2VyLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjaW5nLWJvYXJkJyk7XHJcbiAgY29uc3Qgc2hpcENob29zZXIgPSBjb250YWluZXJTaGlwUGxhY2VyLnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNob29zZXInKTtcclxuICBjb25zdHJ1Y3Rpb25Cb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgYm9hcmQgZm9yIHBsYWNpbmcgc2hpcHMgb250b1xyXG4gIHBsYWNpbmdCb2FyZC5hcHBlbmRDaGlsZChidWlsZEJvYXJkRWxlbWVudChCT0FSRF9TSVpFLCAwLCB0cnVlKSk7XHJcblxyXG4gIC8vIGNyZWF0ZSBkcmFnZ2FibGUgc2hpcCByZXByZXNlbnRhdGlvbnNcclxuICBmb3IgKGNvbnN0IHNoaXAgb2YgU0hJUFMpIHtcclxuICAgIGNvbnN0IHNoaXBEcmFnZ2FibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNoaXBEcmFnZ2FibGUuY2xhc3NMaXN0LmFkZCgnc2hpcC1kcmFnZ2FibGUnKTtcclxuICAgIHNoaXBEcmFnZ2FibGUuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIHNoaXBEcmFnZ2FibGUuZGF0YXNldC5zaGlwTmFtZSA9IHNoaXAubmFtZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaXplOyBpKyspIHsgLy8gYWRkIGJveHMgdXAgdG8gc2hpcCBsZW5ndGhcclxuICAgICAgc2hpcERyYWdnYWJsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XHJcbiAgICB9XHJcbiAgICAvL3NoaXBEcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4gc2hpcERyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpKTtcclxuICAgIC8vc2hpcERyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4gc2hpcERyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpKTtcclxuICAgIHNoaXBDaG9vc2VyLmFwcGVuZChzaGlwRHJhZ2dhYmxlKTtcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyc1xyXG4gIGJ1dHRvblBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb250YWluZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNvbnRhaW5lclNoaXBQbGFjZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBjb250YWluZXJJbnRyby5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0R2FtZSgpO1xyXG4gIH0pO1xyXG4gIGZvciAoY29uc3QgZHJhZ2dhYmxlIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWRyYWdnYWJsZScpKSB7XHJcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBkcmFnZ2FibGUuZGF0YXNldC5zaGlwTmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZm9yIChjb25zdCBkcm9wcGFibGUgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLnNxdWFyZScpKSB7XHJcbiAgICBkcm9wcGFibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICBkcm9wcGFibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGUgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhU2hpcE5hbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7IC8vIFwicGF0cm9sIGJvYXRcIiBldGNcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBkcmFnZ2luZ1NoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcC1kcmFnZ2FibGVbZGF0YS1zaGlwLW5hbWU9XCIke2RhdGFTaGlwTmFtZX1cIl1gKTtcclxuICAgICAgY29uc3QgYWNjZXB0ZWQgPSBjb25zdHJ1Y3Rpb25Cb2FyZC5wbGFjZVNoaXAoXHJcbiAgICAgICAgZHJhZ2dpbmdTaGlwLmRhdGFzZXQuc2hpcE5hbWUsXHJcbiAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5jb2wpLFxyXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucm93KSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoYWNjZXB0ZWQpIHtcclxuICAgICAgICByZW5kZXJOZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNpbmctYm9hcmQ+LmJvYXJkJyksIGNvbnN0cnVjdGlvbkJvYXJkKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jaG9vc2VyJykucmVtb3ZlQ2hpbGQoZHJhZ2dpbmdTaGlwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBidXR0b25QbGF5LmNsaWNrKCk7IC8vIGp1bXBzIHBhc3QgcGxheSBidXR0b24gYnkgcHJlc3NpbmcgaXRcclxufVxyXG5cclxuLyoqXHJcbiAqIGRyYWdnYWJsZSBzaGlwIGRyb3BwaW5nIGV2ZW50IGhhbmRsZXJcclxuICogQHBhcmFtIHtldmVudH0gZXZlbnQgZHJvcCBldmVudFxyXG4gKi9cclxuLy8gZnVuY3Rpb24gZHJvcFNoaXBIYW5kbGVyKGV2ZW50KSB7XHJcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICBjb25zdCBkcmFnZ2luZ1NoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcclxuLy8gICBjb25zdCBhY2NlcHRlZCA9IGNvbnN0cnVjdGlvbkJvYXJkLnBsYWNlU2hpcChcclxuLy8gICAgIGRyYWdnaW5nU2hpcC5kYXRhc2V0LnNoaXBOYW1lLFxyXG4vLyAgICAgcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKSxcclxuLy8gICAgIHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdyksXHJcbi8vICAgICBmYWxzZVxyXG4vLyAgICk7XHJcbi8vICAgaWYgKGFjY2VwdGVkKSB7XHJcbi8vICAgICByZW5kZXJOZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNpbmctYm9hcmQ+LmJvYXJkJyksIGNvbnN0cnVjdGlvbkJvYXJkKTtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNob29zZXInKS5yZW1vdmVDaGlsZChkcmFnZ2luZ1NoaXApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gYWxsb3dEcm9wU2hpcChldmVudCkge1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiBhIEdhbWVib2FyZFxyXG4gKiBAcGFyYW0ge251bWJlcn0gYm9hcmRTaXplIHRoZSBsZW5ndGggb2YgdGhlIGdhbWVib2FyZCBzaWRlc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgYXR0cmlidXRlIG9mIHRoaXMgSFRNTCBlbGVtZW50XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNDaG9vc2VyIHNldCB0byB0cnVlIHdoZW4gYSBVSSBib2FyZCBpcyBiZWluZyBjcmVhdGVkIGZvciBzaGlwIHBsYWNlbWVudC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAqIEByZXR1cm5zIEhUTUxEaXZFbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZEJvYXJkRWxlbWVudChib2FyZFNpemUsIHBsYXllckluZGV4LCBpc0Nob29zZXIgPSBmYWxzZSkge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYm9hcmQuY2xhc3NOYW1lID0gJ2JvYXJkJztcclxuICBib2FyZC5pZCA9IChwbGF5ZXJJbmRleCA9PT0gMCkgPyAnYm9hcmRQbGF5ZXInIDogJ2JvYXJkQ29tcHV0ZXInO1xyXG4gIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBib2FyZFNpemU7IHJvd0luZGV4KyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cnO1xyXG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IGJvYXJkU2l6ZTsgY29sSW5kZXgrKykge1xyXG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc3F1YXJlLmNsYXNzTmFtZSA9ICdib2FyZCBzcXVhcmUnO1xyXG4gICAgICBzcXVhcmUuZGF0YXNldC5jb2wgPSBjb2xJbmRleDtcclxuICAgICAgc3F1YXJlLmRhdGFzZXQucm93ID0gcm93SW5kZXg7XHJcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbCwgZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIWVsLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdHJ1Y2snKSkge1xyXG4gICAgICAgICAgb25TcXVhcmVDbGljayhjb2xJbmRleCwgcm93SW5kZXgsIHBsYXllckluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tbXNnJyk7XHJcbiAgICAgICAgICBtc2cudGV4dENvbnRlbnQgPSAnYWxyZWFkeSBhdHRhY2tlZCB0aGlzIHNxdWFyZSEnO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IG1zZy50ZXh0Q29udGVudCA9ICcnOyB9LCAzMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBpZiAoaXNDaG9vc2VyKSB7XHJcbiAgICAgIC8vICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsICgpID0+IHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwLWhvdmVyZWQnKSk7XHJcbiAgICAgIC8vICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsICgpID0+IHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLWhvdmVyZWQnKSk7XHJcbiAgICAgIC8vICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgICAvLyAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZSA9PiB7XHJcbiAgICAgIC8vICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1ob3ZlcmVkJyk7XHJcbiAgICAgIC8vICAgICBkcm9wU2hpcEhhbmRsZXIoZSlcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgIH1cclxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgfVxyXG4gIHJldHVybiBib2FyZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSB1aUVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7R2FtZWJvYXJkfSBib2FyZCBcclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlck5ldyh1aUVsZW1lbnQsIGJvYXJkKSB7XHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQuc2l6ZTsgcm93KyspIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkLnNpemU7IGNvbCsrKSB7XHJcbiAgICAgIHByb2Nlc3NCb2FyZFNxdWFyZShcclxuICAgICAgICB1aUVsZW1lbnQuY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXSxcclxuICAgICAgICBib2FyZC5ib2FyZFtyb3ddW2NvbF0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSXRlcmF0ZSB0aHJvdWdoLlxyXG4gKiBAcGFyYW0ge0dhbWVEYXRhfSBnYW1lRGF0YVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkcyhnYW1lRGF0YSkge1xyXG4gIGNvbnN0IHVpYjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2FyZFBsYXllcicpO1xyXG4gIGNvbnN0IHVpYjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2FyZENvbXB1dGVyJyk7XHJcblxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGdhbWVEYXRhLnAxLmJvYXJkLnNpemU7IHJvdysrKSB7XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBnYW1lRGF0YS5wMS5ib2FyZC5zaXplOyBjb2wrKykge1xyXG4gICAgICBwcm9jZXNzQm9hcmRTcXVhcmUoXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkUGxheWVyJykuY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXSxcclxuICAgICAgICBnYW1lRGF0YS5wMS5ib2FyZC5ib2FyZFtyb3ddW2NvbF0sXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2Nlc3NCb2FyZFNxdWFyZShcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmRDb21wdXRlcicpLmNoaWxkTm9kZXNbcm93XS5jaGlsZE5vZGVzW2NvbF0sXHJcbiAgICAgICAgZ2FtZURhdGEucDIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wbGF5ZXI+c3BhbicpLnRleHRDb250ZW50ID0gZ2FtZURhdGEuY3VycmVudFBsYXllciArIDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gICAqIFRha2VzIGEgcGFpciBvZiBjb25uZWN0ZWQgc3F1YXJlcy4gT25lIGlzIGEgSFRNTERpdkVsZW1lbnQgZnJvbSB0aGUgVUksIHRoZSBvdGhlciBpcyBhIHNxdWFyZSBmcm9tIHRoZSBHYW1lYm9hcmQgb2JqZWN0J3NcclxuICAgKiBib2FyZCBwcm9wZXJ0eS5cclxuICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSB1aVNxdWFyZVxyXG4gICAqIEBwYXJhbSB7Qm9hcmRQbGFjZW1lbnR9IGRhdGFTcXVhcmVcclxuICAgKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0JvYXJkU3F1YXJlKHVpU3F1YXJlLCBkYXRhU3F1YXJlKSB7XHJcbiAgLy8gaWYgc3F1YXJlIGlzIGVtcHR5XHJcbiAgaWYgKGRhdGFTcXVhcmUgPT09IG51bGwpIHtcclxuICAgIHVpU3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIGlmIHNxdWFyZSBjb250YWlucyBhIGJvYXJkIHBsYWNlbWVudCBha2EgYSBzaGlwXHJcbiAgaWYgKHR5cGVvZiBkYXRhU3F1YXJlID09PSAnb2JqZWN0Jykge1xyXG4gICAgdWlTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgaWYgKGRhdGFTcXVhcmUuaXNTdHJ1Y2soKSkge1xyXG4gICAgICB1aVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlmIHNxdWFyZSBjb250YWlucyBhIHN0cmluZywgaW5kaWNhdGluZyBhIG1pc3NcclxuICBpZiAodHlwZW9mIGRhdGFTcXVhcmUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB1aVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlV2lubmVyKG1lc3NhZ2UpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1tc2cnKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi91aS5qcyc7XHJcblxyXG5pbml0aWFsaXplKCk7XHJcblxyXG4vLyBmdW5jdGlvbiBiYXR0bGVzaGlwczEoKSB7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBiYXR0bGVzaGlwczIoKSB7XHJcblxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==