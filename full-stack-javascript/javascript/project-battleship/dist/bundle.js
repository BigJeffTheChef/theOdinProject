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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --square-dimension: 45px;\r\n  --border-color: rgb(160, 151, 247);\r\n}\r\n\r\n/* Board */\r\n\r\n.container-board {\r\n  display: grid;\r\n  grid-template: 1fr/ repeat(2, 1fr);\r\n  justify-items: center;\r\n  align-items: center;\r\n\r\n  width: 100%;\r\n\r\n  border: 1px solid blueviolet;\r\n}\r\n\r\n.container-ship-placer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid red;\r\n}\r\n\r\n.container-ship-placer>div{\r\n  border: 1px solid green;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n.board>.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.board .square {\r\n  height: var(--square-dimension);\r\n  width: var(--square-dimension);\r\n  box-sizing: border-box;\r\n}\r\n\r\n#player1 .board.square.ship {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.board.square.struck {\r\n  background-color: rgb(182, 182, 182);\r\n  /* border: 3px solid black; */\r\n}\r\n#player1 .board.square.struck.ship,\r\n#player2 .board.square.struck.ship {\r\n  background-color:crimson;\r\n}\r\n\r\n.ship-chooser {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.chooser-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship-draggable {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 1px solid goldenrod;\r\n  width: fit-content;\r\n}\r\n\r\n.ship-draggable>div{\r\n  width: var(--square-dimension);\r\n  height: var(--square-dimension);\r\n  border: 1px solid goldenrod;\r\n}\r\n\r\n.ship-hovered {\r\n  border: 1px dashed red;\r\n}\r\n\r\n.vertical {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/web/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,kCAAkC;AACpC;;AAEA,UAAU;;AAEV;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;EACrB,mBAAmB;;EAEnB,WAAW;;EAEX,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,oCAAoC;EACpC,6BAA6B;AAC/B;AACA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\r\n  --square-dimension: 45px;\r\n  --border-color: rgb(160, 151, 247);\r\n}\r\n\r\n/* Board */\r\n\r\n.container-board {\r\n  display: grid;\r\n  grid-template: 1fr/ repeat(2, 1fr);\r\n  justify-items: center;\r\n  align-items: center;\r\n\r\n  width: 100%;\r\n\r\n  border: 1px solid blueviolet;\r\n}\r\n\r\n.container-ship-placer {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid red;\r\n}\r\n\r\n.container-ship-placer>div{\r\n  border: 1px solid green;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  border: 1px solid var(--border-color);\r\n}\r\n\r\n.board>.row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.board .square {\r\n  height: var(--square-dimension);\r\n  width: var(--square-dimension);\r\n  box-sizing: border-box;\r\n}\r\n\r\n#player1 .board.square.ship {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.board.square.struck {\r\n  background-color: rgb(182, 182, 182);\r\n  /* border: 3px solid black; */\r\n}\r\n#player1 .board.square.struck.ship,\r\n#player2 .board.square.struck.ship {\r\n  background-color:crimson;\r\n}\r\n\r\n.ship-chooser {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.chooser-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.ship-draggable {\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 1px solid goldenrod;\r\n  width: fit-content;\r\n}\r\n\r\n.ship-draggable>div{\r\n  width: var(--square-dimension);\r\n  height: var(--square-dimension);\r\n  border: 1px solid goldenrod;\r\n}\r\n\r\n.ship-hovered {\r\n  border: 1px dashed red;\r\n}\r\n\r\n.vertical {\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
let direction = null;
let placedShips = 0;

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
    shipChooser.append(shipDraggable);
  }

  // ship placement direction button (vertical/ horizontal)

  const directionButton = document.createElement('button');
  directionButton.type = 'button';
  directionButton.className = 'direction-button';
  directionButton.textContent = 'horizontal';
  directionButton.addEventListener('click', () => {
    const vertical = directionButton.textContent == 'vertical';
    directionButton.textContent = vertical ? 'horizontal' : 'vertical';
    direction = vertical;
  });
  shipChooser.appendChild(directionButton);


  // register event listeners

  buttonPlay.addEventListener('click', () => {
    containerShipPlacer.classList.remove('hidden');
    containerIntro.classList.add('hidden');
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
        document.querySelector('.direction-button').textContent === 'vertical'
      );
      if (accepted) {
        placedShips++;
        renderNew(document.querySelector('.placing-board>.board'), constructionBoard);
        document.querySelector('.ship-chooser').removeChild(draggingShip);
        if (placedShips === _settings_json__WEBPACK_IMPORTED_MODULE_0__.ships.length) {
          (0,_obj_Game_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();
        }
      }
    });
  }

  // dev
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
  board.id = (playerIndex === 0) ? 'player1' : 'player2';
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
  const uib1 = document.querySelector('player1');
  const uib2 = document.querySelector('player2');

  for (let row = 0; row < gameData.p1.board.size; row++) {
    for (let col = 0; col < gameData.p1.board.size; col++) {
      processBoardSquare(
        document.querySelector('#player1').childNodes[row].childNodes[col],
        gameData.p1.board.board[row][col],
      );
      processBoardSquare(
        document.querySelector('#player2').childNodes[row].childNodes[col],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ1c7QUFDakM7QUFDQSxrREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL3N0eWxlcy5jc3M/NDM0MCIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9vYmovQm9hcmRQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9Db29yZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL29iai9HYW1lRGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvb2JqL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3dlYi91aS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvd2ViL0NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxyXFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCb2FyZCAqL1xcclxcblxcclxcbi5jb250YWluZXItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXNoaXAtcGxhY2VyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlcj5kaXZ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQ+LnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIC5zcXVhcmUge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXIxIC5ib2FyZC5zcXVhcmUuc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQuc3F1YXJlLnN0cnVjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuI3BsYXllcjEgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCxcXHJcXG4jcGxheWVyMiAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2hvb3NlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaG9vc2VyLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZHJhZ2dhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZGVucm9kO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1kcmFnZ2FibGU+ZGl2e1xcclxcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1kaW1lbnNpb24pO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtaG92ZXJlZCB7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2ViL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsa0NBQWtDO0FBQ3BDOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixtQkFBbUI7O0VBRW5CLFdBQVc7O0VBRVgsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXNxdWFyZS1kaW1lbnNpb246IDQ1cHg7XFxyXFxuICAtLWJvcmRlci1jb2xvcjogcmdiKDE2MCwgMTUxLCAyNDcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCb2FyZCAqL1xcclxcblxcclxcbi5jb250YWluZXItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmci8gcmVwZWF0KDIsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVldmlvbGV0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXNoaXAtcGxhY2VyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1zaGlwLXBsYWNlcj5kaXZ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgXFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQ+LnJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIC5zcXVhcmUge1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXIxIC5ib2FyZC5zcXVhcmUuc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQuc3F1YXJlLnN0cnVjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAvKiBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuI3BsYXllcjEgLmJvYXJkLnNxdWFyZS5zdHJ1Y2suc2hpcCxcXHJcXG4jcGxheWVyMiAuYm9hcmQuc3F1YXJlLnN0cnVjay5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6Y3JpbXNvbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2hvb3NlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMHB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaG9vc2VyLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtZHJhZ2dhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ29sZGVucm9kO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1kcmFnZ2FibGU+ZGl2e1xcclxcbiAgd2lkdGg6IHZhcigtLXNxdWFyZS1kaW1lbnNpb24pO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zcXVhcmUtZGltZW5zaW9uKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGRlbnJvZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtaG92ZXJlZCB7XFxyXFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWwge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXHJcbiAqIEFuIG9iamVjdCB0aGF0IHJlY29yZHMgZGF0YSByZXF1aXJlZCBmb3IgcGxhY2VtZW50IG9udG8gYSBzcXVhcmUgb2YgdGhlIEdhbWVib2FyZCBvYmplY3RzIGJvYXJkIHByb3BlcnR5XHJcbiAqIEBwYXJhbSB7U2hpcH0gc2hpcFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkUGxhY2VtZW50KHNoaXAsIGluZGV4KSB7XHJcbiAgdGhpcy5zaGlwID0gc2hpcDtcclxuICB0aGlzLnNoaXBIdWxsSW5kZXggPSBpbmRleDtcclxufVxyXG5cclxuQm9hcmRQbGFjZW1lbnQucHJvdG90eXBlLmlzU3RydWNrID0gZnVuY3Rpb24gaXNTdHJ1Y2soKSB7XHJcbiAgcmV0dXJuIHRoaXMuc2hpcC5odWxsW3RoaXMuc2hpcEh1bGxJbmRleF07XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGUgYSBjb29yZCBvYmplY3QgdGhhdCBob2xkcyB4IGFuZCB5IG51bWJlcmljIHZhbHVlcyBmb3IgYSBib2FyZCBjby1vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvb3JkKHgsIHkpIHtcclxuICB0aGlzLnggPSBwYXJzZUludCh4LCAxMCk7XHJcbiAgdGhpcy55ID0gcGFyc2VJbnQoeSwgMTApO1xyXG59XHJcbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuL0dhbWVEYXRhLmpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgcmVuZGVyQm9hcmRzLCBkZWNsYXJlV2lubmVyIH0gZnJvbSAnLi4vd2ViL3VpLmpzJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkLmpzJztcclxuXHJcbmxldCBnYW1lRGF0YSA9IG51bGw7XHJcbmxldCBnYW1lQWN0aXZlID0gZmFsc2U7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gIC8vIHNldCBnYW1lIGRhdGFcclxuICBnYW1lQWN0aXZlID0gdHJ1ZTtcclxuICAvLyBnYW1lRGF0YSA9IG5ldyBHYW1lRGF0YShcclxuICAvLyAgIG5ldyBQbGF5ZXIodHJ1ZSksXHJcbiAgLy8gICBuZXcgUGxheWVyKGZhbHNlKSxcclxuICAvLyAgIG5ldyBHYW1lYm9hcmQoKSxcclxuICAvLyAgIG5ldyBHYW1lYm9hcmQoKSxcclxuICAvLyApO1xyXG5cclxuICAvLyBwcmVwYXJlIHNoaXAgcGxhY2luZyBmdW5jdGlvbmFsaXR5IGFuZCBzdGFydFxyXG4gIC8vIHBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItdGVtcGxhdGVcclxuICAvLyBjb25zb2xlLmxvZygnc3RhcnQgJyArIERhdGUoKSk7XHJcbiAgLy8gcGxhY2VTaGlwc0ludGVudGlvbmFsbHkoKS50aGVuKCgpID0+IHtcclxuICAvLyAgIHJlbmRlckJvYXJkcyhnYW1lRGF0YSk7XHJcbiAgLy8gICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXRlbXBsYXRlXHJcbiAgLy8gICBjb25zb2xlLmxvZygnZW5kICcgKyBEYXRlKCkpO1xyXG4gIC8vIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBpcyBhbiBldmVudCBoYW5kbGVyIHRoYXQgaXMgYWN0aXZhdGVkIGVhY2ggdGltZSBhIHZhbGlkIGJvYXJkIHNxdWFyZSBpcyBjbGlja2VkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlIG9mIGdhbWVib2FyZCAob3V0ZXIgYXJyYXkgaW5kZXgpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGUgICAgICAgICAgICAgIChpbm5lciBhcnJheSBpbmRleClcclxuICogQHBhcmFtIHtudW1iZXJ9IHBsYXllckluZGV4IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBwbGF5ZXIgZm9yIHVzZSBpbiBnYW1lRGF0YS5wbGF5ZXJzW2luZGV4XS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvblNxdWFyZUNsaWNrKHgsIHksIHBsYXllckluZGV4KSB7XHJcbiAgaWYgKCFnYW1lQWN0aXZlIHx8IGdhbWVEYXRhID09PSBudWxsKSByZXR1cm47XHJcbiAgaWYgKGdhbWVEYXRhLmVuZW15UGxheWVyID09PSBwbGF5ZXJJbmRleCkge1xyXG4gICAgZ2FtZURhdGEucGxheWVyc1twbGF5ZXJJbmRleF0uYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuICAgIGlmIChnYW1lRGF0YS5wbGF5ZXJzW3BsYXllckluZGV4XS5ib2FyZC5hbGxTdW5rKCkpIHtcclxuICAgICAgZ2FtZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAvLyBwbGF5ZXIgaGFzIG5vdCBjaGFuZ2VkIHlldCwgc28gY3VycmVudCBwbGF5ZXIgaXMgYWxsU3VuayAmIHRoZXJlZm9yZSBsb3Nlcy5cclxuICAgICAgZGVjbGFyZVdpbm5lcihgR2FtZW92ZXIhICR7cGxheWVySW5kZXggPT09IDAgPyAnQ29tcHV0ZXInIDogJ0h1bWFuJ30gcGxheWVyIHdpbnMhYCk7XHJcbiAgICB9XHJcbiAgICBnYW1lRGF0YS5jaGFuZ2VQbGF5ZXIoKTtcclxuICAgIHJlbmRlckJvYXJkcyhnYW1lRGF0YSk7XHJcbiAgICBpZiAoIWdhbWVEYXRhLmlzQ3VycmVudFBsYXllckh1bWFuKCkpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ2NvbXB1dGVyIHBsYXllcnMgZ28gbm93Jyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF0dGFja0Nvb3JkcyA9IGdhbWVEYXRhLnBsYXllcnNbZ2FtZURhdGEuY3VycmVudFBsYXllcl0ucGxheWVyLmF0dGFjaygpO1xyXG4gICAgICAgIG9uU3F1YXJlQ2xpY2soYXR0YWNrQ29vcmRzLngsIGF0dGFja0Nvb3Jkcy55LCBnYW1lRGF0YS5lbmVteVBsYXllcik7XHJcbiAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnYWludCB5YSBnbyBzb24sIHNpbW1lciBkb3duJyk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbGFjZVNoaXBzSW50ZW50aW9uYWxseSgpIHtcclxuICAvLyBjb25zdCB7IHNoaXBzIH0gPSBzZXR0aW5ncztcclxuICAvLyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICAvLyBsZXQgeSA9IDA7XHJcbiAgLy8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgLy8gZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XHJcbiAgLy8gICBnYW1lRGF0YS5wMS5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XHJcbiAgLy8gICAvLyBnYW1lRGF0YS5wMS5ib2FyZC5yZWNlaXZlQXR0YWNrKDAsIHkpO1xyXG4gIC8vICAgZ2FtZURhdGEucDIuYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgMCwgeSwgZmFsc2UpO1xyXG4gIC8vICAgLy8gZ2FtZURhdGEucDIuYm9hcmQucmVjZWl2ZUF0dGFjaygwLCB5KTtcclxuICAvLyAgIHkrKztcclxuICAvLyB9XHJcbiAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgc2V0VGltZW91dCgoKSA9PiAnaGVsbG8nLCA1MDAwKTtcclxuICAvLyByZXR1cm4gcmVzdWx0O1xyXG4gIC8vIGNvbnN0IHdhaXQgPSAnJztcclxuICAvLyBnYW1lRGF0YS5wMS5ib2FyZC5yZWNlaXZlQXR0YWNrKDksIDkpO1xyXG4gIC8vIGdhbWVEYXRhLnAyLmJvYXJkLnJlY2VpdmVBdHRhY2soMywgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICBjb25zdCB7IHNoaXBzIH0gPSBzZXR0aW5ncztcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcclxuICBsZXQgeSA9IDA7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XHJcbiAgICBnYW1lRGF0YS5wMS5ib2FyZC5wbGFjZVNoaXAoc2hpcC5uYW1lLCAwLCB5LCBmYWxzZSk7XHJcbiAgICAvLyBnYW1lRGF0YS5wMS5ib2FyZC5yZWNlaXZlQXR0YWNrKDAsIHkpO1xyXG4gICAgZ2FtZURhdGEucDIuYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgMCwgeSwgZmFsc2UpO1xyXG4gICAgLy8gZ2FtZURhdGEucDIuYm9hcmQucmVjZWl2ZUF0dGFjaygwLCB5KTtcclxuICAgIHkrKztcclxuICB9XHJcbiAgLy8gZ2FtZURhdGEucDEuYm9hcmQucmVjZWl2ZUF0dGFjayg5LCA5KTtcclxuICAvLyBnYW1lRGF0YS5wMi5ib2FyZC5yZWNlaXZlQXR0YWNrKDMsIDApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIb2xkcyBkYXRhIGFib3V0IGEgZ2FtZS4gVGhlcmUgYXJlIHR3byBwbGF5ZXJzLCBlYWNoIGhvbGRpbmcgZGF0YSBvbiB0aGUgcGxheWVyIGl0c2VsZiwgYW5kIHRoZWlyIGJvYXJkLlxyXG4gKiBBZGRpdGlvbmFsIHRoZSBjdXJyZW50IHBsYXllciBhbmQgZW5lbXkgcGxheWVycyBhcmUgc3RvcmVkIGhlcmUuXHJcbiAqIEBwYXJhbSB7Kn0gcDEgcGxheWVyIDEncyBwbGF5ZXIgb2JqZWN0XHJcbiAqIEBwYXJhbSB7Kn0gcDIgcGxheWVyIDIncyBwbGF5ZXIgb2JqZWN0XHJcbiAqIEBwYXJhbSB7Kn0gYjEgcGxheWVyIDEncyBib2FyZCBvYmplY3RcclxuICogQHBhcmFtIHsqfSBiMiBwbGF5ZXIgMidzIGJvYXJkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZURhdGEocDEsIHAyLCBiMSwgYjIpIHtcclxuICB0aGlzLnAxID0geyBwbGF5ZXI6IHAxLCBib2FyZDogYjEgfTtcclxuICB0aGlzLnAyID0geyBwbGF5ZXI6IHAyLCBib2FyZDogYjIgfTtcclxuICB0aGlzLnBsYXllcnMgPSBbdGhpcy5wMSwgdGhpcy5wMl07XHJcbiAgdGhpcy5jdXJyZW50UGxheWVyID0gMDtcclxuICB0aGlzLmVuZW15UGxheWVyID0gMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFN3YXBzIGN1cnJlbnRQbGF5ZXIgYW5kIGVuZW15UGxheWVyIG9mIGdhbWVEYXRhXHJcbiAqL1xyXG5HYW1lRGF0YS5wcm90b3R5cGUuY2hhbmdlUGxheWVyID0gZnVuY3Rpb24gY2hhbmdlUGxheWVyKCkge1xyXG4gIHRoaXMuY3VycmVudFBsYXllciA9ICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IDApID8gMSA6IDA7XHJcbiAgdGhpcy5lbmVteVBsYXllciA9ICh0aGlzLmVuZW15UGxheWVyID09PSAwKSA/IDEgOiAwO1xyXG59O1xyXG5cclxuR2FtZURhdGEucHJvdG90eXBlLmlzQ3VycmVudFBsYXllckh1bWFuID0gZnVuY3Rpb24gY3VycmVudFBsYXllckh1bWFuKCkge1xyXG4gIHJldHVybiB0aGlzLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVyXS5wbGF5ZXIuaHVtYW47XHJcbn07XHJcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XHJcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncy5qc29uJztcclxuaW1wb3J0IEJvYXJkUGxhY2VtZW50IGZyb20gJy4vQm9hcmRQbGFjZW1lbnQuanMnO1xyXG5pbXBvcnQgQ29vcmQgZnJvbSAnLi9Db29yZC5qcyc7XHJcblxyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIENPTlNUQU5UU1xyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xyXG5cclxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBDT05TVFJVQ1RPUlNcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBHYW1lYm9hcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSBzaXplIGRlZmF1bHRzIHRvIDEwIGJ1dCBjYW4gYmUgc2V0IG1hbnVhbGx5XHJcbiAqL1xyXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XHJcbiAgdGhpcy5zaXplID0gQk9BUkRfU0laRTtcclxuICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KHRoaXMuc2l6ZSkuZmlsbChudWxsKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXMuYm9hcmRbaV0gPSBuZXcgQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpO1xyXG4gIH1cclxuICB0aGlzLm1pc3NlcyA9IFtdO1xyXG4gIHRoaXMuc2hpcHMgPSBbXTtcclxufVxyXG5cclxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBNRVRIT0RTXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4vKipcclxuICogUGxhY2UgYSBzaGlwIG9uIHRoZSBib2FyZFxyXG4gKiBAcGFyYW0ge1NoaXB9IHNoaXBOYW1lIGEgU2hpcCBvYmplY3RcclxuICogQHBhcmFtIHtudW1iZXJ9IHggeCBjby1vcmRpbmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0geSB5IGNvLW9yZGluYXRlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmVydGljYWwgYSBib29sZWFuLCB0cnVlIGlmIHZlcnRpY2FsLCBmYWxzZSBpZiBob3Jpem9udGFsXHJcbiAqL1xyXG5HYW1lYm9hcmQucHJvdG90eXBlLnBsYWNlU2hpcCA9IGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwTmFtZSwgeCwgeSwgdmVydGljYWwpIHtcclxuICBjb25zdCBzaGlwRGV0YWlscyA9IGRldGVybWluZVNoaXBEZXRhaWxzKHNoaXBOYW1lLCBuZXcgQ29vcmQoeCwgeSksIHZlcnRpY2FsKTtcclxuICBpZiAoIXNoaXBEZXRhaWxzKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKCFkZXRlcm1pbmVTaGlwT3ZlcmxhcC5jYWxsKHRoaXMsIHNoaXBEZXRhaWxzLmNvb3JkcykpIHJldHVybiBmYWxzZTtcclxuICBsZXQgaW5kZXggPSAwO1xyXG4gIHNoaXBEZXRhaWxzLmNvb3Jkcy5mb3JFYWNoKGUgPT4geyB0aGlzLmJvYXJkW2UueV1bZS54XSA9IG5ldyBCb2FyZFBsYWNlbWVudChzaGlwRGV0YWlscy5zaGlwLCBpbmRleCsrKTsgfSk7XHJcbiAgdGhpcy5zaGlwcy5wdXNoKHNoaXBEZXRhaWxzLnNoaXApO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlY2VpdmUgYW4gYXR0YWNrLiBUaGUgYXR0YWNrIHdpbGwgZWl0aGVyIGhpdCBhIHNoaXAsIGluIHdoaWNoIGNhc2UgdGhhdCBzaGlwIHJlY29yZHMgYSBoaXQgYXQgdGhhdCBwb3NpdGlvbjtcclxuICogb3IgdGhlIGF0dGFjayB3aWxsIG1pc3MsIGluIHdoaWNoIGNhc2UgaXQgaXMgcmVjb3JkZWQgaW4gdGhlIG1pc3NlcyBhcnJheVxyXG4gKiBAcGFyYW0ge251bWJlcn0geCB4IGNvLW9yZGluYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IHkgY28tb3JkaW5hdGVcclxuICogQHJldHVybnMgdHJ1ZSBpZiBhdHRhY2sgd2FzIHN1Y2Nlc3NmdWwsIGZhbHNlIGlmIGF0dGFjayB3YXMgYSBtaXNzXHJcbiAqL1xyXG5HYW1lYm9hcmQucHJvdG90eXBlLnJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXRlbXBsYXRlXHJcbiAgLy8gY29uc29sZS5sb2coJ3ggYW5kIHk6JyArIHggKyAnICcgKyB5KTtcclxuICAvLyBjb25zb2xlLmxvZyh0aGlzLmJvYXJkW3ldKTtcclxuICBjb25zdCBzcXVhcmUgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gIGlmICh0eXBlb2Ygc3F1YXJlID09PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlO1xyXG4gIGlmIChzcXVhcmUgPT09IG51bGwpIHtcclxuICAgIHRoaXMubWlzc2VzLnB1c2gobmV3IENvb3JkKHgsIHkpKTtcclxuICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnbWlzcyc7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNxdWFyZS5zaGlwLmhpdChzcXVhcmUuc2hpcEh1bGxJbmRleCk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYWxsIHNoaXBzIG9uIHRoZSBib2FyZCBhcmUgc3Vua1xyXG4gKiBAcmV0dXJucyB0cnVlIGlmIGFsbCBzdW5rcyBhcmUgc3VuaywgYW5kIGZhbHNlIGlmIHRoZXkgYXJlIG5vdFxyXG4gKi9cclxuR2FtZWJvYXJkLnByb3RvdHlwZS5hbGxTdW5rID0gZnVuY3Rpb24gYWxsU3VuaygpIHtcclxuICByZXR1cm4gdGhpcy5zaGlwcy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xyXG4gICAgaWYgKCFjdXIuaXNTdW5rKCkpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBwcmV2O1xyXG4gIH0sIHRydWUpO1xyXG59O1xyXG5cclxuLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBIRUxQRVIgRlVOQ1RJT05TXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4vKipcclxuICogIERldGVybWluZXMgaWYgYSBzaGlwcyBwbGFjZW1lbnQgaXMgYWNjZXB0YWJsZSBpbiB0aGF0IGl0IGRvZXMgbm90IG92ZXJsYXAgYW5vdGhlciBzaGlwLlxyXG4gKiBAcGFyYW0ge0Nvb3JkW119IHNoaXBDb29yZHMgc2hpcCBjb29yZHMgdG8gY2hlY2tcclxuICogQHRoaXMge0dhbWVib2FyZH0gdGhpcyBmdW5jdGlvbiBtdXN0IGhhdmUgaXRzIGNvbnRleHQvIHRoaXMgc2V0IHRvIGEgZ2FtZWJvYXJkIG9iamVjdFxyXG4gKiBAcmV0dXJuIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgaWYgdGhpcyBzaGlwIHBsYWNlbWVudCBpcyB2YWxpZCwgaW4gdGhhdCBpdCBkb2VzIG5vdCBvdmVybGFwIGFub3RoZXIgc2hpcFxyXG4gKi9cclxuZnVuY3Rpb24gZGV0ZXJtaW5lU2hpcE92ZXJsYXAoc2hpcENvb3Jkcykge1xyXG4gIGxldCBvdmVybGFwRm91bmQgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0aGlzLmJvYXJkW3NoaXBDb29yZHNbaV0ueV1bc2hpcENvb3Jkc1tpXS54XSAhPT0gbnVsbCkge1xyXG4gICAgICBvdmVybGFwRm91bmQgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuICFvdmVybGFwRm91bmQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHNoaXAgZGV0YWlscy4gVGhhdCBpcywgdGhlIHJlc29sdmVzIHRoZSBzaGlwTmFtZSB0byBhIFNoaXAgb2JqZWN0LCBhbmQgZGV0ZXJtaW5lcyBhbGwgdGhlIGNvb3JkaW5hdGVzIG9uIHRoZSBib2FyZCB0aGUgU2hpcFxyXG4gKiB3b3VsZCBpbmhhYml0LCB0YWtpbmcgaW50byBjb25zaWRlcmF0aW9uIGl0cyBvcmllbnRhdGlvbiB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hpcE5hbWUgbmFtZSBvZiBzaGlwIHR5cGVcclxuICogQHBhcmFtIHtDb29yZH0gc2VsZWN0ZWRDb29yZCBDb29yZCBvYmplY3RcclxuICogQHBhcmFtIHtib29sZWFufSB2ZXJ0aWNhbCB2ZXJ0aWNhbCBpZiB0cnVlLCBob3Jpem9udGFsIGlmIGZhbHNlXHJcbiAqIEByZXR1cm5zIGZhbHNlIGlmIGludmFsaWQsIHNoaXAgcGxhY2VtZW50IGRldGFpbHMgaWYgdmFsaWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZXRlcm1pbmVTaGlwRGV0YWlscyhzaGlwTmFtZSwgc2VsZWN0ZWRDb29yZCwgdmVydGljYWwpIHtcclxuICAvLyB2YWxpZGF0ZSBzdGFydCBjb29yZHNcclxuICBpZiAoIXZhbGlkYXRlQ29vcmRzKHNlbGVjdGVkQ29vcmQpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIC8vIHZhbGlkYXRlIHNoaXAgbmFtZSBhbmQgaW5zdGFudGlhdGUgc2hpcFxyXG4gIGxldCBzaGlwO1xyXG4gIHRyeSB7XHJcbiAgICBzaGlwID0gbmV3IFNoaXAoc2hpcE5hbWUpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYyA9IHNlbGVjdGVkQ29vcmQ7XHJcbiAgY29uc3Qgc2hpcFBsYWNlbWVudENvb3JkcyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5odWxsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzaGlwUGxhY2VtZW50Q29vcmRzLnB1c2gobmV3IENvb3JkKGMueCwgYy55KSk7XHJcbiAgICBpZiAodmVydGljYWwpIGMueSsrO1xyXG4gICAgZWxzZSBjLngrKztcclxuICB9XHJcblxyXG4gIC8vIHZhbGlkYXRlIGVuZCBjb29yZHNcclxuICBpZiAoIXZhbGlkYXRlQ29vcmRzKHNoaXBQbGFjZW1lbnRDb29yZHMuYXQoLTEpKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAvLyByZXR1cm4gc2hpcCBwbGFjZW1lbnQgZGV0YWlsc1xyXG4gIHJldHVybiB7XHJcbiAgICBzaGlwLFxyXG4gICAgY29vcmRzOiBzaGlwUGxhY2VtZW50Q29vcmRzLFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWYWxpZGF0ZSBiYXNpYyBjb29yZCB2YWx1ZXMuXHJcbiAqIEBwYXJhbSB7Q29vcmR9IGNvb3JkcyBvYmplY3QgbGl0ZXJhbCBjb250YWluaW5nIHggYW5kIHkgcHJvcGVydGllc1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjb29yZHMgYXJlIHZhbGlkLCBmYWxzZSBpZiBpbnZhbGlkXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUNvb3Jkcyhjb29yZHMpIHtcclxuICBpZiAodHlwZW9mIGNvb3Jkcy54ICE9PSAnbnVtYmVyJ1xyXG4gICAgfHwgdHlwZW9mIGNvb3Jkcy55ICE9PSAnbnVtYmVyJ1xyXG4gICAgfHwgY29vcmRzLnggPCAwXHJcbiAgICB8fCBjb29yZHMueSA8IDBcclxuICAgIHx8IGNvb3Jkcy54ID49IEJPQVJEX1NJWkVcclxuICAgIHx8IGNvb3Jkcy55ID49IEJPQVJEX1NJWkUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcclxuZXhwb3J0IHsgQk9BUkRfU0laRSB9O1xyXG4iLCJpbXBvcnQgQ29vcmQgZnJvbSAnLi9Db29yZC5qcyc7XHJcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncy5qc29uJztcclxuXHJcbmNvbnN0IEJPQVJEX1NJWkUgPSBzZXR0aW5nc1snZ2FtZWJvYXJkLXNpemUnXTtcclxuLyoqXHJcbiAqIENyZWF0ZSBhIHBsYXllciBvYmplY3RcclxuICogQHBhcmFtIHtib29sZWFufSBodW1hbiB0cnVlIGlmIHRoaXMgaXMgYSBodW1hbiBwbGF5ZXIsIGZhbHNlIGlmIGl0IGlzIGEgY29tcHV0ZXIgcGxheWVyXHJcbiAqL1xyXG5mdW5jdGlvbiBQbGF5ZXIoaHVtYW4pIHtcclxuICB0aGlzLmh1bWFuID0gaHVtYW47XHJcbiAgdGhpcy52YWxpZE1vdmVzID0gW107XHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBCT0FSRF9TSVpFOyB4KyspIHtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQk9BUkRfU0laRTsgeSsrKSB7XHJcbiAgICAgIHRoaXMudmFsaWRNb3Zlcy5wdXNoKCh0aGlzLmh1bWFuKSA/IG51bGwgOiBuZXcgQ29vcmQoeCwgeSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vKipcclxuICogSWYgdGhpcyBQbGF5ZXIgaXMgaHVtYW4sIHRoZW4gcmV0dXJuIG51bGwuXHJcbiAqIElmIHRoaXMgcGxheWVyIGlzIGNvbXB1dGVyLCBzZWxlY3QgYSByYW5kb20gdmFsaWRNb3ZlIGFuZCByZXR1cm4gaXQuXHJcbiAqIEluIGVpdGhlciBjYXNlLCB0aGUgbnVtYmVyIG9mIHZhbGlkTW92ZXMgaXMgcmVkdWNlZCBieSAxLlxyXG4gKiBAcmV0dXJucyBudWxsIGZvciBodW1hbiBwbGF5ZXJzLCBhbmQgYSBDb29yZCBvYmplY3QgZm9yIGNvbXB1dGVyc1xyXG4gKiBAdGhyb3cgaWYgdmFsaWRNb3Zlcy5sZW5ndGggaXMgMC5cclxuICovXHJcblBsYXllci5wcm90b3R5cGUuYXR0YWNrID0gZnVuY3Rpb24gYXR0YWNrKCkge1xyXG4gIGlmICh0aGlzLnZhbGlkTW92ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmh1bWFuKVxyXG4gICAgICA/IHRoaXMudmFsaWRNb3Zlcy5wb3AoKVxyXG4gICAgICA6IHRoaXMudmFsaWRNb3Zlcy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy52YWxpZE1vdmVzLmxlbmd0aCksIDEpLmF0KDApO1xyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ25vIHZhbGlkIG1vdmVzIHJlbWFpbmluZycpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MuanNvbic7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgc2hpcCBvYmplY3QsIGJ5IHNwZWNpZnlpbmcgdGhlIG5hbWUgb2YgdGhlIHNoaXAgcmVxdWlyZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGlwIG5hbWUgb2Ygc2hpcCwgY29ycmVzcG9uZHMgdG8gYSBsZW5ndGguXHJcbiAqL1xyXG5mdW5jdGlvbiBTaGlwKHNoaXApIHtcclxuICB0aGlzLmxlbmd0aCA9IHZhbGlkYXRlU2hpcChzaGlwKTtcclxuICB0aGlzLm5hbWUgPSBzaGlwO1xyXG4gIHRoaXMuaHVsbCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAnaGl0JyAvIGF0dGFjayB0aGlzIHNoaXAgYXQgc3BlY2lmaWVkIGluZGV4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvbiB0aGUgemVyby1pbmRleGVkIHBvc2l0b24gb2YgdGhpcyBzaGlwcyBodWxsIHRvIHJlY29yZCBhIGhpdFxyXG4gKi9cclxuU2hpcC5wcm90b3R5cGUuaGl0ID0gZnVuY3Rpb24gaGl0KGluZGV4KSB7XHJcbiAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHNwZWNpZmllZCBoaXQgaW5kZXggXCIke2luZGV4fVwiIGlzIGdyZWF0ZXIgdGhhbiBhbGxvd2FibGUgZm9yIGEgc2hpcCBvZiBsZW5ndGggJHt0aGlzLmxlbmd0aH0uYCk7XHJcbiAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgc3BlY2lmaWVkIGhpdCBpbmRleCBcIiR7aW5kZXh9XCIgY2Fubm90IGJlIG5lZ2F0aXZlLmApO1xyXG4gIH1cclxuICB0aGlzLmh1bGxbaW5kZXhdID0gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhIHNoaXAgaGFzIHN1bmssIHRoYXQgaXMsIGl0J3MgaHVsbCBoYXMgYmVlbiBoaXQgYXQgZWFjaCBwb3NpdGlvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmVwcmVzZW50aW5nIGlmIHRoaXMgc2hpcCBoYXMgYmVlbiBzdW5rXHJcbiAqL1xyXG5TaGlwLnByb3RvdHlwZS5pc1N1bmsgPSBmdW5jdGlvbiBpc1N1bmsoKSB7XHJcbiAgcmV0dXJuIHRoaXMuaHVsbC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQgPT09IGZhbHNlID8gZmFsc2UgOiBwcmV2LCB0cnVlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgdGhlIGxlbmd0aCBvZiBhIHNoaXAsIGJ5IGl0J3MgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hpcCBhIG5hbWUgb2YgYSBzaGlwXHJcbiAqIEByZXR1cm5zIHRoZSBsZW5ndGggb2Ygc2FpZCBzaGlwXHJcbiAqIEB0aHJvd3MgRXJyb3IgaWYgc2hpcCBuYW1lIG5vdCByZWNvZ25pc2VkXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZVNoaXAoc2hpcCkge1xyXG4gIC8vIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwc1R5cGVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gKGN1cnJlbnQubmFtZSA9PT0gc2hpcCkgPyBjdXJyZW50Lmxlbmd0aCA6IHByZXYsIG51bGwpO1xyXG4gIGNvbnN0IHNoaXBMZW5ndGggPSBzZXR0aW5ncy5zaGlwcy5yZWR1Y2UoKHByZXYsIGN1cikgPT4gKGN1ci5uYW1lID09PSBzaGlwKSA/IGN1ci5zaXplIDogcHJldiwgbnVsbCk7XHJcbiAgaWYgKHNoaXBMZW5ndGggPT09IG51bGwpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgc2hpcCBwYXJhbWV0ZXIgc3RyaW5nIG5vdCByZWNvZ25pc2VkOiBcIiR7c2hpcH1cIi4gQWxsb3dhYmxlIHZhbHVlczogJHtzZXR0aW5ncy5zaGlwcy5tYXAoZSA9PiBlLm5hbWUpfWApO1xyXG4gIH1cclxuICByZXR1cm4gc2hpcExlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcclxuIiwiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzLmpzb24nO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXHJcbmltcG9ydCB7IHN0YXJ0R2FtZSwgb25TcXVhcmVDbGljayB9IGZyb20gJy4uL29iai9HYW1lLmpzJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi4vb2JqL1NoaXAuanMnO1xyXG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL29iai9HYW1lYm9hcmQnO1xyXG5cclxuY29uc3QgQk9BUkRfU0laRSA9IHNldHRpbmdzWydnYW1lYm9hcmQtc2l6ZSddO1xyXG5jb25zdCBTSElQUyA9IHNldHRpbmdzLnNoaXBzO1xyXG5sZXQgY29uc3RydWN0aW9uQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbmxldCBkaXJlY3Rpb24gPSBudWxsO1xyXG5sZXQgcGxhY2VkU2hpcHMgPSAwO1xyXG5cclxuLyoqXHJcbiAqIFByZXBhcmVzIGNvbXBvbmVudHMgZm9yIGdhbWUgcGxheVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAvLyBkb20gZWxlbWVudHNcclxuXHJcbiAgY29uc3QgY29udGFpbmVyU2hpcFBsYWNlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1zaGlwLXBsYWNlcicpO1xyXG4gIGNvbnN0IGNvbnRhaW5lckludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1pbnRybycpO1xyXG4gIGNvbnN0IGJ1dHRvblBsYXkgPSBjb250YWluZXJJbnRyby5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLXBsYXknKTtcclxuICBjb25zdCBwbGFjaW5nQm9hcmQgPSBjb250YWluZXJTaGlwUGxhY2VyLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjaW5nLWJvYXJkJyk7XHJcbiAgY29uc3Qgc2hpcENob29zZXIgPSBjb250YWluZXJTaGlwUGxhY2VyLnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNob29zZXInKTtcclxuICBjb25zdHJ1Y3Rpb25Cb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgYm9hcmQgZm9yIHBsYWNpbmcgc2hpcHMgb250b1xyXG5cclxuICBwbGFjaW5nQm9hcmQuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEVsZW1lbnQoQk9BUkRfU0laRSwgMCwgdHJ1ZSkpO1xyXG5cclxuICAvLyBjcmVhdGUgZHJhZ2dhYmxlIHNoaXAgcmVwcmVzZW50YXRpb25zXHJcblxyXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBTSElQUykge1xyXG4gICAgY29uc3Qgc2hpcERyYWdnYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcERyYWdnYWJsZS5jbGFzc0xpc3QuYWRkKCdzaGlwLWRyYWdnYWJsZScpO1xyXG4gICAgc2hpcERyYWdnYWJsZS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgc2hpcERyYWdnYWJsZS5kYXRhc2V0LnNoaXBOYW1lID0gc2hpcC5uYW1lO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNpemU7IGkrKykgeyAvLyBhZGQgYm94cyB1cCB0byBzaGlwIGxlbmd0aFxyXG4gICAgICBzaGlwRHJhZ2dhYmxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgIH1cclxuICAgIHNoaXBDaG9vc2VyLmFwcGVuZChzaGlwRHJhZ2dhYmxlKTtcclxuICB9XHJcblxyXG4gIC8vIHNoaXAgcGxhY2VtZW50IGRpcmVjdGlvbiBidXR0b24gKHZlcnRpY2FsLyBob3Jpem9udGFsKVxyXG5cclxuICBjb25zdCBkaXJlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkaXJlY3Rpb25CdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gIGRpcmVjdGlvbkJ1dHRvbi5jbGFzc05hbWUgPSAnZGlyZWN0aW9uLWJ1dHRvbic7XHJcbiAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ2hvcml6b250YWwnO1xyXG4gIGRpcmVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHZlcnRpY2FsID0gZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID09ICd2ZXJ0aWNhbCc7XHJcbiAgICBkaXJlY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSB2ZXJ0aWNhbCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XHJcbiAgICBkaXJlY3Rpb24gPSB2ZXJ0aWNhbDtcclxuICB9KTtcclxuICBzaGlwQ2hvb3Nlci5hcHBlbmRDaGlsZChkaXJlY3Rpb25CdXR0b24pO1xyXG5cclxuXHJcbiAgLy8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzXHJcblxyXG4gIGJ1dHRvblBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb250YWluZXJTaGlwUGxhY2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgY29udGFpbmVySW50cm8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSk7XHJcblxyXG4gIGZvciAoY29uc3QgZHJhZ2dhYmxlIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWRyYWdnYWJsZScpKSB7XHJcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBkcmFnZ2FibGUuZGF0YXNldC5zaGlwTmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgZHJvcHBhYmxlIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC5zcXVhcmUnKSkge1xyXG4gICAgZHJvcHBhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgZHJvcHBhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IHtcclxuICAgICAgY29uc3QgZGF0YVNoaXBOYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpOyAvLyBcInBhdHJvbCBib2F0XCIgZXRjXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgZHJhZ2dpbmdTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXAtZHJhZ2dhYmxlW2RhdGEtc2hpcC1uYW1lPVwiJHtkYXRhU2hpcE5hbWV9XCJdYCk7XHJcbiAgICAgIGNvbnN0IGFjY2VwdGVkID0gY29uc3RydWN0aW9uQm9hcmQucGxhY2VTaGlwKFxyXG4gICAgICAgIGRyYWdnaW5nU2hpcC5kYXRhc2V0LnNoaXBOYW1lLFxyXG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sKSxcclxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnJvdyksXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdGlvbi1idXR0b24nKS50ZXh0Q29udGVudCA9PT0gJ3ZlcnRpY2FsJ1xyXG4gICAgICApO1xyXG4gICAgICBpZiAoYWNjZXB0ZWQpIHtcclxuICAgICAgICBwbGFjZWRTaGlwcysrO1xyXG4gICAgICAgIHJlbmRlck5ldyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2luZy1ib2FyZD4uYm9hcmQnKSwgY29uc3RydWN0aW9uQm9hcmQpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNob29zZXInKS5yZW1vdmVDaGlsZChkcmFnZ2luZ1NoaXApO1xyXG4gICAgICAgIGlmIChwbGFjZWRTaGlwcyA9PT0gc2V0dGluZ3Muc2hpcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzdGFydEdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZGV2XHJcbiAgYnV0dG9uUGxheS5jbGljaygpOyAvLyBqdW1wcyBwYXN0IHBsYXkgYnV0dG9uIGJ5IHByZXNzaW5nIGl0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgYSBHYW1lYm9hcmRcclxuICogQHBhcmFtIHtudW1iZXJ9IGJvYXJkU2l6ZSB0aGUgbGVuZ3RoIG9mIHRoZSBnYW1lYm9hcmQgc2lkZXNcclxuICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIGF0dHJpYnV0ZSBvZiB0aGlzIEhUTUwgZWxlbWVudFxyXG4gKiBAcmV0dXJucyBIVE1MRGl2RWxlbWVudFxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRCb2FyZEVsZW1lbnQoYm9hcmRTaXplLCBwbGF5ZXJJbmRleCkge1xyXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYm9hcmQuY2xhc3NOYW1lID0gJ2JvYXJkJztcclxuICBib2FyZC5pZCA9IChwbGF5ZXJJbmRleCA9PT0gMCkgPyAncGxheWVyMScgOiAncGxheWVyMic7XHJcbiAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IGJvYXJkU2l6ZTsgcm93SW5kZXgrKykge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByb3cuY2xhc3NOYW1lID0gJ3Jvdyc7XHJcbiAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgYm9hcmRTaXplOyBjb2xJbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzcXVhcmUuY2xhc3NOYW1lID0gJ2JvYXJkIHNxdWFyZSc7XHJcbiAgICAgIHNxdWFyZS5kYXRhc2V0LmNvbCA9IGNvbEluZGV4O1xyXG4gICAgICBzcXVhcmUuZGF0YXNldC5yb3cgPSByb3dJbmRleDtcclxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsLCBldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghZWwuc3JjRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0cnVjaycpKSB7XHJcbiAgICAgICAgICBvblNxdWFyZUNsaWNrKGNvbEluZGV4LCByb3dJbmRleCwgcGxheWVySW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1tc2cnKTtcclxuICAgICAgICAgIG1zZy50ZXh0Q29udGVudCA9ICdhbHJlYWR5IGF0dGFja2VkIHRoaXMgc3F1YXJlISc7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgbXNnLnRleHRDb250ZW50ID0gJyc7IH0sIDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgfVxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IHVpRWxlbWVudCBcclxuICogQHBhcmFtIHtHYW1lYm9hcmR9IGJvYXJkIFxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyTmV3KHVpRWxlbWVudCwgYm9hcmQpIHtcclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZC5zaXplOyByb3crKykge1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQuc2l6ZTsgY29sKyspIHtcclxuICAgICAgcHJvY2Vzc0JvYXJkU3F1YXJlKFxyXG4gICAgICAgIHVpRWxlbWVudC5jaGlsZE5vZGVzW3Jvd10uY2hpbGROb2Rlc1tjb2xdLFxyXG4gICAgICAgIGJvYXJkLmJvYXJkW3Jvd11bY29sXSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdGVyYXRlIHRocm91Z2guXHJcbiAqIEBwYXJhbSB7R2FtZURhdGF9IGdhbWVEYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmRzKGdhbWVEYXRhKSB7XHJcbiAgY29uc3QgdWliMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BsYXllcjEnKTtcclxuICBjb25zdCB1aWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncGxheWVyMicpO1xyXG5cclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBnYW1lRGF0YS5wMS5ib2FyZC5zaXplOyByb3crKykge1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZURhdGEucDEuYm9hcmQuc2l6ZTsgY29sKyspIHtcclxuICAgICAgcHJvY2Vzc0JvYXJkU3F1YXJlKFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXIxJykuY2hpbGROb2Rlc1tyb3ddLmNoaWxkTm9kZXNbY29sXSxcclxuICAgICAgICBnYW1lRGF0YS5wMS5ib2FyZC5ib2FyZFtyb3ddW2NvbF0sXHJcbiAgICAgICk7XHJcbiAgICAgIHByb2Nlc3NCb2FyZFNxdWFyZShcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyMicpLmNoaWxkTm9kZXNbcm93XS5jaGlsZE5vZGVzW2NvbF0sXHJcbiAgICAgICAgZ2FtZURhdGEucDIuYm9hcmQuYm9hcmRbcm93XVtjb2xdLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wbGF5ZXI+c3BhbicpLnRleHRDb250ZW50ID0gZ2FtZURhdGEuY3VycmVudFBsYXllciArIDE7XHJcbn1cclxuXHJcbi8qKlxyXG4gICAqIFRha2VzIGEgcGFpciBvZiBjb25uZWN0ZWQgc3F1YXJlcy4gT25lIGlzIGEgSFRNTERpdkVsZW1lbnQgZnJvbSB0aGUgVUksIHRoZSBvdGhlciBpcyBhIHNxdWFyZSBmcm9tIHRoZSBHYW1lYm9hcmQgb2JqZWN0J3NcclxuICAgKiBib2FyZCBwcm9wZXJ0eS5cclxuICAgKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSB1aVNxdWFyZVxyXG4gICAqIEBwYXJhbSB7Qm9hcmRQbGFjZW1lbnR9IGRhdGFTcXVhcmVcclxuICAgKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0JvYXJkU3F1YXJlKHVpU3F1YXJlLCBkYXRhU3F1YXJlKSB7XHJcbiAgLy8gaWYgc3F1YXJlIGlzIGVtcHR5XHJcbiAgaWYgKGRhdGFTcXVhcmUgPT09IG51bGwpIHtcclxuICAgIHVpU3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIGlmIHNxdWFyZSBjb250YWlucyBhIGJvYXJkIHBsYWNlbWVudCBha2EgYSBzaGlwXHJcbiAgaWYgKHR5cGVvZiBkYXRhU3F1YXJlID09PSAnb2JqZWN0Jykge1xyXG4gICAgdWlTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgaWYgKGRhdGFTcXVhcmUuaXNTdHJ1Y2soKSkge1xyXG4gICAgICB1aVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlmIHNxdWFyZSBjb250YWlucyBhIHN0cmluZywgaW5kaWNhdGluZyBhIG1pc3NcclxuICBpZiAodHlwZW9mIGRhdGFTcXVhcmUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB1aVNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzdHJ1Y2snKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJlV2lubmVyKG1lc3NhZ2UpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1tc2cnKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi91aS5qcyc7XHJcblxyXG5pbml0aWFsaXplKCk7XHJcblxyXG4vLyBmdW5jdGlvbiBiYXR0bGVzaGlwczEoKSB7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBiYXR0bGVzaGlwczIoKSB7XHJcblxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==